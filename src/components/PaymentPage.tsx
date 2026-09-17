import { useEffect, useState } from "react";
import DatePicker from "./DatePicker";
import PaymentCategoryManager from "./PaymentCategoryManager";
import ScSettings from "./ScSettings";
import KallyanSettings from "./KallyanSettings";
import PaymentDenominationModal from "./PaymentDenominationModal";
import SubCategoryRulesModal from "./SubCategoryRulesModal";
import { fmt } from "./DenominationPopup";
import {
  getLocalTxs,
  saveTx,
  updateTx,
  deleteTx,
  getCategories,
  getScRates,
  getSubCategoryRules,
  getKallyanRule,
} from "@/lib/storage";
import {
  calcServiceCharge,
  calcKallyan,
  getKallyanForCategory,
  titleCase,
  filterAllowedSubCategories,
  getInstallments,
  DEFAULT_KALLYAN_RULE,
} from "@/lib/categories";
import type { Tx, Cat, ScRate, SubCategoryRule, KallyanRule } from "@/types";

type PaymentFormState = {
  id?: number;
  category: string;
  subCategory: string;
  amount: number;
  serviceCharge: number;
  description: string;
  txDate: string;
};

export default function PaymentPage({ selectedDate }: { selectedDate: string }) {
  const [rows, setRows] = useState<Tx[]>([]);
  const [disburseCats, setDisburseCats] = useState<Cat[]>([]);
  const [expenseCats, setExpenseCats] = useState<Cat[]>([]);
  const [manageOpen, setManageOpen] = useState(false);
  const [rates, setRates] = useState<ScRate[]>([]);
  const [ratesOpen, setRatesOpen] = useState(false);
  const [subCatRules, setSubCatRules] = useState<SubCategoryRule[]>([]);
  const [rulesModalOpen, setRulesModalOpen] = useState(false);
  const [paymentDenomOpen, setPaymentDenomOpen] = useState(false);
  const [kallyanRule, setKallyanRule] = useState<KallyanRule>(getKallyanRule());
  const [kallyanSettingsOpen, setKallyanSettingsOpen] = useState(false);

  const [form, setForm] = useState<PaymentFormState>({
    category: "",
    subCategory: "",
    amount: 0,
    serviceCharge: 0,
    description: "",
    txDate: selectedDate,
  });
  const [edit, setEdit] = useState<PaymentFormState | null>(null);
  const [msg, setMsg] = useState("");

  const loadData = () => {
    const all = getLocalTxs();
    setRows(all.filter((t) => t.type === "payment" && t.txDate === selectedDate));
    setDisburseCats(getCategories("disburse"));
    setExpenseCats(getCategories("expense"));
    setRates(getScRates());
    setSubCatRules(getSubCategoryRules());
    setKallyanRule(getKallyanRule());
  };

  useEffect(() => {
    loadData();
    setForm((f) => ({ ...f, txDate: selectedDate }));
    const handleKallyanChange = () => setKallyanRule(getKallyanRule());
    window.addEventListener("kallyan-rule-changed", handleKallyanChange);
    return () => window.removeEventListener("kallyan-rule-changed", handleKallyanChange);
  }, [selectedDate]);

  const isDisburseCategory = (catName: string) => {
    const norm = catName.trim().toLowerCase();
    return disburseCats.some((c) => c.name.toLowerCase() === norm);
  };

  const isCurrentDisburse = isDisburseCategory(form.category);
  const allowedSubCategories = filterAllowedSubCategories(form.category, subCatRules);

  const scAmount = isCurrentDisburse
    ? calcServiceCharge(form.amount, form.category, form.subCategory, rates)
    : 0;
  const curKallyanCfg = getKallyanForCategory(form.category, kallyanRule);
  const kallyanAmount = isCurrentDisburse ? calcKallyan(form.amount, form.category, kallyanRule) : 0;
  const totalAmount = form.amount + scAmount;
  const nInstallments = getInstallments(form.subCategory, subCatRules);
  const kistiAmount = isCurrentDisburse && nInstallments ? Math.round(totalAmount / nInstallments) : 0;

  const rateRow = rates.find(
    (r) =>
      r.category === form.category.trim().toLowerCase() &&
      r.subCategory === form.subCategory.trim().toLowerCase()
  );
  const currentRatePer100 = rateRow ? Number(rateRow.ratePer100) : 0;

  const handleSave = () => {
    if (!form.category.trim()) return setMsg("Category required");
    if (!form.amount || form.amount <= 0) return setMsg("Amount must be greater than 0");

    saveTx({
      type: "payment",
      category: form.category.trim().toLowerCase(),
      subCategory: isCurrentDisburse ? form.subCategory : "",
      amount: String(form.amount),
      serviceCharge: String(scAmount),
      description: form.description || "",
      txDate: form.txDate,
    });

    setForm({
      category: "",
      subCategory: "",
      amount: 0,
      serviceCharge: 0,
      description: "",
      txDate: selectedDate,
    });
    setMsg("Payment saved successfully!");
    loadData();
  };

  const handleUpdate = () => {
    if (!edit || !edit.id) return;
    const editIsDisb = isDisburseCategory(edit.category);
    const editSc = editIsDisb
      ? calcServiceCharge(edit.amount, edit.category, edit.subCategory, rates)
      : 0;

    updateTx({
      id: edit.id,
      type: "payment",
      category: edit.category.trim().toLowerCase(),
      subCategory: editIsDisb ? edit.subCategory : "",
      amount: String(edit.amount),
      serviceCharge: String(editSc),
      description: edit.description,
      txDate: edit.txDate,
    });

    setEdit(null);
    loadData();
  };

  const handleDelete = (id: number) => {
    if (!confirm("Delete this payment?")) return;
    deleteTx(id);
    loadData();
  };

  const totalExpenseSum = rows.reduce((s, r) => s + Number(r.amount), 0);

  return (
    <div className="space-y-6">
      {/* Payment Entry Card */}
      <div className="rounded-2xl border-t-4 border-red-500 bg-white p-5 sm:p-6 shadow-sm border border-slate-200">
        <h1 className="mb-4 text-2xl font-bold text-slate-900">Payment</h1>
        <div className="grid gap-4 md:grid-cols-2">
          {/* Date */}
          <div>
            <label className="mb-1 block text-xs font-bold text-slate-700">Date</label>
            <DatePicker
              value={form.txDate}
              onChange={(v) => setForm({ ...form, txDate: v })}
              className="px-3 py-2"
            />
          </div>
          {/* Category */}
          <div>
            <div className="mb-1 flex items-center justify-between">
              <label className="text-xs font-bold text-slate-700">Category</label>
              <button
                type="button"
                onClick={() => setManageOpen(true)}
                className="text-xs font-bold text-blue-600 hover:underline"
              >
                Manage
              </button>
            </div>
            <select
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value, subCategory: "" })}
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-bold text-slate-800 focus:border-blue-500 focus:outline-none cursor-pointer"
            >
              <option value="">-- Select Category --</option>
              {disburseCats.length > 0 && (
                <optgroup label="Disburse / Loan Categories">
                  {disburseCats.map((c) => (
                    <option key={c.id} value={c.name}>
                      {titleCase(c.name)}
                    </option>
                  ))}
                </optgroup>
              )}
              {expenseCats.length > 0 && (
                <optgroup label="Expense Categories">
                  {expenseCats.map((c) => (
                    <option key={c.id} value={c.name}>
                      {titleCase(c.name)}
                    </option>
                  ))}
                </optgroup>
              )}
            </select>
          </div>
          {/* Sub Category */}
          {isCurrentDisburse && (
            <div>
              <div className="mb-1 flex items-center justify-between">
                <label className="text-xs font-bold text-slate-700">Sub Category</label>
                <button
                  type="button"
                  onClick={() => setRulesModalOpen(true)}
                  className="text-xs font-bold text-blue-600 hover:underline flex items-center gap-1"
                >
                  ⚙ Rules
                </button>
              </div>
              <select
                value={form.subCategory}
                onChange={(e) => setForm({ ...form, subCategory: e.target.value })}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-bold text-slate-800 focus:border-blue-500 focus:outline-none cursor-pointer"
              >
                <option value="">-- Select Sub Category --</option>
                {allowedSubCategories.map((sub) => (
                  <option key={sub} value={sub}>
                    {sub}
                  </option>
                ))}
              </select>
            </div>
          )}
          {/* Amount */}
          <div className={!isCurrentDisburse ? "md:col-span-1" : ""}>
            <div className="mb-1 flex items-center justify-between">
              <label className="text-xs font-bold text-slate-700">
                {isCurrentDisburse ? "Disburse Amount" : "Expense Amount"}
              </label>
              <button
                type="button"
                onClick={() => setPaymentDenomOpen(true)}
                className="flex items-center gap-1 rounded bg-amber-500 hover:bg-amber-600 px-2.5 py-0.5 text-xs font-bold text-slate-950 shadow-xs"
              >
                💳 Denomination
              </button>
            </div>
            <input
              type="number"
              min={0}
              step="1"
              value={form.amount || ""}
              placeholder="0"
              onChange={(e) => setForm({ ...form, amount: Math.round(Number(e.target.value) || 0) })}
              className="w-full rounded-lg border border-slate-300 bg-yellow-50 px-3 py-2 text-right font-mono text-lg font-bold focus:border-blue-500 focus:outline-none"
            />
          </div>
          {/* Description */}
          <div className="md:col-span-2">
            <label className="mb-1 block text-xs font-bold text-slate-700">Description</label>
            <input
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              placeholder="Description..."
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
            />
          </div>
          {/* Save / Reset */}
          <div className="flex gap-2 md:col-span-2">
            <button
              onClick={handleSave}
              className="rounded-lg bg-green-600 px-6 py-2 font-bold text-sm text-white shadow hover:bg-green-700"
            >
              Save
            </button>
            <button
              onClick={() => {
                setForm({
                  category: "",
                  subCategory: "",
                  amount: 0,
                  serviceCharge: 0,
                  description: "",
                  txDate: selectedDate,
                });
                setMsg("");
              }}
              className="rounded-lg bg-slate-500 px-6 py-2 font-bold text-sm text-white hover:bg-slate-600"
            >
              Reset
            </button>
          </div>

          {/* Cards */}
          {isCurrentDisburse ? (
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 md:col-span-2">
              <div className="rounded-xl bg-amber-500 p-2.5 text-white shadow-xs">
                <div className="flex items-center justify-between text-xs font-semibold">
                  <span>SC {currentRatePer100 ? `(${currentRatePer100}/100)` : ""}</span>
                  <button
                    type="button"
                    onClick={() => setRatesOpen(true)}
                    className="flex h-5 w-5 items-center justify-center rounded-full bg-white/30 text-xs"
                  >
                    ⚙
                  </button>
                </div>
                <div className="mt-1 font-mono text-base sm:text-lg font-bold text-right">{fmt(scAmount)}</div>
              </div>
              <div className="rounded-xl bg-violet-600 p-2.5 text-white shadow-xs">
                <div className="text-xs font-semibold">Kisti {nInstallments ? `(${nInstallments})` : ""}</div>
                <div className="mt-1 font-mono text-base sm:text-lg font-bold text-right">{fmt(kistiAmount)}</div>
              </div>
              <div className="rounded-xl bg-teal-600 p-2.5 text-white shadow-xs">
                <div className="flex items-center justify-between text-xs font-semibold">
                  <span className="truncate pr-1">
                    Kallyan {form.category ? `(${titleCase(form.category)}: ${curKallyanCfg.percent}% + ${curKallyanCfg.fixed})` : `(${kallyanRule.percent}% + ${kallyanRule.fixed})`}
                  </span>
                  <button
                    type="button"
                    onClick={() => setKallyanSettingsOpen(true)}
                    className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/30 text-xs hover:bg-white/50 transition cursor-pointer"
                    title="Change Kallyan Rules for Disburse Categories"
                  >
                    ⚙
                  </button>
                </div>
                <div className="mt-1 font-mono text-base sm:text-lg font-bold text-right">{fmt(kallyanAmount)}</div>
              </div>
              <div className="rounded-xl bg-blue-700 p-2.5 text-white shadow-xs">
                <div className="text-xs font-semibold">Total (Amount + SC)</div>
                <div className="mt-1 font-mono text-base sm:text-lg font-bold text-right">{fmt(totalAmount)}</div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:col-span-2">
              <div className="flex items-center justify-between rounded-xl bg-slate-800 p-3 text-white">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300">Total Expense</span>
                <span className="font-mono text-xl font-black">{fmt(form.amount || 0)}</span>
              </div>
            </div>
          )}
        </div>
        {msg && <p className="mt-2 text-xs font-bold text-emerald-700">{msg}</p>}
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-2xl bg-white shadow-sm border border-slate-200">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b px-5 py-3 bg-slate-50">
          <div className="font-bold text-slate-800 text-sm sm:text-base">
            Saved Payment Entries ({rows.length})
          </div>
          <div className="text-xs font-mono font-bold text-slate-600 bg-white px-2.5 py-1 rounded border border-slate-200">
            Date: {selectedDate}
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-xs sm:text-sm">
            <thead className="bg-slate-800 text-left text-white">
              <tr>
                <th className="px-3 py-2.5">#</th>
                <th className="px-3 py-2.5">Category</th>
                <th className="px-3 py-2.5">Sub Cat.</th>
                <th className="px-3 py-2.5">Description</th>
                <th className="px-3 py-2.5 text-right">Disburse/Expense</th>
                <th className="px-3 py-2.5 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {rows.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-3 py-6 text-center text-slate-400">
                    No payment entries on {selectedDate}
                  </td>
                </tr>
              ) : (
                rows.map((r, i) => (
                  <tr key={r.id} className="border-b hover:bg-slate-50">
                    <td className="px-3 py-2 text-slate-500 font-mono">{i + 1}</td>
                    <td className="px-3 py-2 font-bold text-slate-800">{titleCase(r.category)}</td>
                    <td className="px-3 py-2 text-slate-600 text-xs">{r.subCategory || "-"}</td>
                    <td className="px-3 py-2 text-slate-600">{r.description}</td>
                    <td className="px-3 py-2 text-right font-mono font-black text-slate-900">
                      {fmt(r.amount)}
                    </td>
                    <td className="px-3 py-2 text-center whitespace-nowrap">
                      <button
                        onClick={() =>
                          setEdit({
                            id: r.id,
                            category: r.category,
                            subCategory: r.subCategory ?? "",
                            amount: Number(r.amount),
                            serviceCharge: Number(r.serviceCharge || 0),
                            description: r.description ?? "",
                            txDate: r.txDate,
                          })
                        }
                        className="mr-1.5 rounded bg-blue-600 px-2.5 py-1 text-xs font-bold text-white hover:bg-blue-700"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(r.id)}
                        className="rounded bg-rose-600 px-2.5 py-1 text-xs font-bold text-white hover:bg-rose-700"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
            {rows.length > 0 && (
              <tfoot className="bg-slate-100 font-bold border-t-2 border-slate-300">
                <tr>
                  <td colSpan={4} className="px-3 py-2.5 text-right font-bold text-slate-800">
                    Total Payment
                  </td>
                  <td className="px-3 py-2.5 text-right font-mono font-black text-slate-900">
                    {fmt(totalExpenseSum)}
                  </td>
                  <td />
                </tr>
              </tfoot>
            )}
          </table>
        </div>
      </div>

      {/* Edit Modal */}
      {edit && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/60 p-4">
          <div className="max-h-[95vh] w-full max-w-2xl overflow-auto rounded-2xl bg-white p-5 sm:p-6 shadow-2xl">
            <div className="mb-4 flex items-center justify-between border-b pb-3">
              <h2 className="text-lg font-bold">Edit Payment #{edit.id}</h2>
              <button onClick={() => setEdit(null)} className="text-2xl text-slate-400 hover:text-rose-600">
                ×
              </button>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-1 block text-xs font-bold text-slate-700">Date</label>
                <DatePicker
                  value={edit.txDate}
                  onChange={(v) => setEdit({ ...edit, txDate: v })}
                  className="px-3 py-2"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs font-bold text-slate-700">Category</label>
                <select
                  value={edit.category}
                  onChange={(e) => setEdit({ ...edit, category: e.target.value, subCategory: "" })}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-bold text-slate-800 focus:border-blue-500 focus:outline-none cursor-pointer"
                >
                  <option value="">-- Select Category --</option>
                  {disburseCats.length > 0 && (
                    <optgroup label="Disburse / Loan Categories">
                      {disburseCats.map((c) => (
                        <option key={c.id} value={c.name}>
                          {titleCase(c.name)}
                        </option>
                      ))}
                    </optgroup>
                  )}
                  {expenseCats.length > 0 && (
                    <optgroup label="Expense Categories">
                      {expenseCats.map((c) => (
                        <option key={c.id} value={c.name}>
                          {titleCase(c.name)}
                        </option>
                      ))}
                    </optgroup>
                  )}
                </select>
              </div>
              {isDisburseCategory(edit.category) && (
                <div>
                  <label className="mb-1 block text-xs font-bold text-slate-700">Sub Category</label>
                  <select
                    value={edit.subCategory || ""}
                    onChange={(e) => setEdit({ ...edit, subCategory: e.target.value })}
                    className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-bold text-slate-800 focus:border-blue-500 focus:outline-none cursor-pointer"
                  >
                    <option value="">-- Select Sub Category --</option>
                    {filterAllowedSubCategories(edit.category, subCatRules).map((sub) => (
                      <option key={sub} value={sub}>
                        {sub}
                      </option>
                    ))}
                  </select>
                </div>
              )}
              <div>
                <label className="mb-1 block text-xs font-bold text-slate-700">Disburse/Expense</label>
                <input
                  type="number"
                  placeholder="0"
                  value={edit.amount || ""}
                  onChange={(e) => setEdit({ ...edit, amount: Math.round(Number(e.target.value) || 0) })}
                  className="w-full rounded-lg border border-slate-300 bg-yellow-50 px-3 py-2 text-right font-mono text-lg font-bold"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs font-bold text-slate-700">Description</label>
                <input
                  value={edit.description}
                  onChange={(e) => setEdit({ ...edit, description: e.target.value })}
                  className="w-full rounded-lg border border-slate-300 px-3 py-2"
                />
              </div>
              <div className="flex justify-end gap-2 md:col-span-2 border-t pt-3">
                <button
                  onClick={handleUpdate}
                  className="rounded-lg bg-green-600 px-6 py-2 font-bold text-sm text-white hover:bg-green-700"
                >
                  Update
                </button>
                <button
                  onClick={() => setEdit(null)}
                  className="rounded-lg bg-slate-500 px-6 py-2 font-bold text-sm text-white hover:bg-slate-600"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {manageOpen && (
        <PaymentCategoryManager
          disburseCats={disburseCats}
          expenseCats={expenseCats}
          onChanged={loadData}
          onClose={() => setManageOpen(false)}
        />
      )}

      {rulesModalOpen && (
        <SubCategoryRulesModal
          open={rulesModalOpen}
          onClose={() => setRulesModalOpen(false)}
          rules={subCatRules}
          disburseCategories={disburseCats.map((c) => c.name)}
          onRulesChanged={loadData}
        />
      )}

      {ratesOpen && (
        <ScSettings
          rates={rates}
          categories={disburseCats.map((c) => c.name)}
          onChanged={loadData}
          onClose={() => setRatesOpen(false)}
        />
      )}

      {kallyanSettingsOpen && (
        <KallyanSettings
          rule={kallyanRule}
          disburseCategories={disburseCats.map((c) => c.name)}
          onChanged={loadData}
          onClose={() => setKallyanSettingsOpen(false)}
        />
      )}

      <PaymentDenominationModal
        open={paymentDenomOpen}
        onClose={() => setPaymentDenomOpen(false)}
        targetAmount={edit ? edit.amount || 0 : form.amount || 0}
        date={edit ? edit.txDate : form.txDate || selectedDate}
        onApplyAmount={(calculatedAmt) => {
          if (edit) setEdit({ ...edit, amount: Math.round(calculatedAmt) });
          else setForm({ ...form, amount: Math.round(calculatedAmt) });
        }}
      />
    </div>
  );
}
