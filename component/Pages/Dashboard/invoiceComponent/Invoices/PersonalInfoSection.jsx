import {
  isValidEmail,
  isValidPhone
} from "../utils/validation";

const PersonalInfoSection = ({
  form,
  updateField
}) => {

  return (
    <div className="grid grid-cols-2 gap-4">

      {[
        "name",
        "email",
        "phone",
        "date"
      ].map((field) => (

        <div key={field}>

          <label className="block mb-1">

            {field}

          </label>

          <input
            type={
              field === "date"
                ? "date"
                : "text"
            }
            value={form[field]}
            onChange={(e) =>
              updateField(
                field,
                e.target.value
              )
            }
            className="border p-2 w-full"
          />

          {field === "email" &&
            form.email &&
            !isValidEmail(form.email) && (
              <p className="text-red-500">
                Invalid Email
              </p>
            )}

          {field === "phone" &&
            form.phone &&
            !isValidPhone(form.phone) && (
              <p className="text-red-500">
                Invalid Phone
              </p>
            )}

        </div>
      ))}

    </div>
  );
};

export default PersonalInfoSection;