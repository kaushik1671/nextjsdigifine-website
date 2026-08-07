import {
  LOCATIONS
} from "../constants/locations";

import {
  MODES
} from "../constants/modes";

const LocationSection = ({
  form,
  updateField
}) => {

  return (
    <div className="space-y-4">

      <div>

        <label>
          Location
        </label>

        <select
          value={form.location}
          onChange={(e) =>
            updateField(
              "location",
              e.target.value
            )
          }
          className="border p-2 w-full"
        >
          <option value="">
            Select
          </option>

          {LOCATIONS.map(loc => (
            <option
              key={loc}
              value={loc}
            >
              {loc}
            </option>
          ))}

        </select>
      </div>

      <div>

        <label>
          Mode
        </label>

        <select
          value={form.mode}
          onChange={(e) =>
            updateField(
              "mode",
              e.target.value
            )
          }
          className="border p-2 w-full"
        >
          <option value="">
            Select
          </option>

          {MODES.map(mode => (
            <option
              key={mode}
              value={mode}
            >
              {mode}
            </option>
          ))}

        </select>
      </div>

    </div>
  );
};

export default LocationSection;