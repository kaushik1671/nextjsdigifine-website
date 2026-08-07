const AmountSection = ({
  form,
  updateField,
  paidCgst,
  paidSgst,
  recalcFromPaidAmount,
}) => {

  return (
    <div className="space-y-4">

      <div>

        <label>
          Total Amount
        </label>

        <input
          type="number"
          value={form.totalAmount}
          onChange={(e) =>
            updateField(
              "totalAmount",
              e.target.value
            )
          }
          className="border p-2 w-full"
        />

      </div>

      <div>

        <label>
          Paid Amount
        </label>

        <input
          type="number"
          value={form.paidAmount}
          onChange={(e) => {

            updateField(
              "paidAmount",
              e.target.value
            );

            recalcFromPaidAmount(
              e.target.value
            );
          }}
          className="border p-2 w-full"
        />

      </div>

      <div className="flex gap-4">

        <input
          readOnly
          value={paidCgst.toFixed(2)}
          className="border p-2"
        />

        <input
          readOnly
          value={paidSgst.toFixed(2)}
          className="border p-2"
        />

      </div>

    </div>
  );
};

export default AmountSection;