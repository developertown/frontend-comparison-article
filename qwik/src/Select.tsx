import { component$ } from "@builder.io/qwik";

type SelectProps = {
  label: string;
  name: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
};

export const Select = component$(
  ({ value, name, label, options, onChange }: SelectProps) => {
    return (
      <div class="input-container">
        <label for={name}>{label}</label>
        <select
          id={name}
          name={name}
          value={value}
          onChange$={(e) => onChange(e.target.value)}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    );
  }
);
