import {
  PAYMENT_METHODS
} from "../constants/paymentMethods";

const PaymentMethodSection = ({
  form,
  updateField
}) => {

  return (
    <div>

      <label>
        Payment Method
      </label>

      <div className="flex gap-4 flex-wrap">

        {PAYMENT_METHODS.map(
          method => (

            <label
              key={method}
            >

              <input
                type="radio"
                value={method}
                checked={
                  form.paymentMethod
                  === method
                }
                onChange={(e) =>
                  updateField(
                    "paymentMethod",
                    e.target.value
                  )
                }
              />

              {method}

            </label>
          )
        )}

      </div>

      {form.paymentMethod
        === "Cheque" && (

        <div className="grid grid-cols-2 gap-4 mt-4">

          <input
            placeholder="Bank Name"
            value={form.bankName}
            onChange={(e) =>
              updateField(
                "bankName",
                e.target.value
              )
            }
            className="border p-2"
          />

          <input
            placeholder="Cheque Number"
            value={form.chequeNumber}
            onChange={(e) =>
              updateField(
                "chequeNumber",
                e.target.value
              )
            }
            className="border p-2"
          />

        </div>
      )}

    </div>
  );
};

export default PaymentMethodSection;    