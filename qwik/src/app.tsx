import { $, component$, useSignal, useStore } from "@builder.io/qwik";
import { Select } from "./Select";

export const App = component$(() => {
  const state = useStore({ framework: "react", status: "good" });

  const register = (name: keyof typeof state) => ({
    name,
    value: state[name],
    onChange: $((value: string) => {
      state[name] = value;
    }),
  });

  const color = useSignal("red");

  return (
    <div>
      <h1>Store Based</h1>
      <Select
        {...register("framework")}
        label="Framework"
        options={["angular", "react", "solid", "svelte", "vue", "qwik"]}
      />
      <Select
        {...register("status")}
        label="Status"
        options={["good", "ok", "bad"]}
      />

      <pre>{JSON.stringify(state, null, 2)}</pre>

      <h1>Signal Based</h1>
      <Select
        name="color"
        value={color.value}
        onChange={$((value: string) => {
          color.value = value;
        })}
        label="Color"
        options={["red", "green", "blue"]}
      />
      <pre>color: {color}</pre>
    </div>
  );
});
