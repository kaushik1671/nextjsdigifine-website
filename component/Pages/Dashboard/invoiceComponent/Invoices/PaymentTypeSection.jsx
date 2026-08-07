const PaymentTypeSection = ({
  form,
  updateField
}) => {

  return (
    <div>

      <label>
        Payment Type
      </label>

      <div className="flex gap-4">

        <label>

          <input
            type="radio"
            value="full"
            checked={
              form.paymentType
              === "full"
            }
            onChange={(e) =>
              updateField(
                "paymentType",
                e.target.value
              )
            }
          />

          Full

        </label>

        <label>

          <input
            type="radio"
            value="partial"
            checked={
              form.paymentType
              === "partial"
            }
            onChange={(e) =>
              updateField(
                "paymentType",
                e.target.value
              )
            }
          />

          Partial

        </label>

      </div>

      {form.paymentType
        === "partial" && (

        <input
          type="number"
          min="1"
          value={
            form.installments
          }
          onChange={(e) =>
            updateField(
              "installments",
              e.target.value
            )
          }
          className="border p-2 mt-4"
        />
      )}

    </div>
  );
};

export default PaymentTypeSection;