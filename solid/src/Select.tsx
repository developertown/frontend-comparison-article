import { For } from "solid-js";

type SelectProps = {
  label: string;
  name: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
};

export const Select = ({
  value,
  name,
  label,
  options,
  onChange,
}: SelectProps) => {
  return (
    <div class="input-container">
      <label for={name}>{label}</label>
      <select
        id={name}
        value={value}
        name={name}
        onChange={(e) => onChange?.(e.target.value)}
      >
        <For each={options}>
          {(option) => <option value={option}>{option}</option>}
        </For>
      </select>
    </div>
  );
};
