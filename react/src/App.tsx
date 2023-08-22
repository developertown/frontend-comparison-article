import { useState } from "react";
import { Select } from "./Select";

function App() {
  const [state, setState] = useState({ framework: "react", status: "good" });

  const register = (name: keyof typeof state) => ({
    name,
    value: state[name],
    onChange: (value: string) => setState({ ...state, [name]: value }),
  });

  return (
    <div>
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
    </div>
  );
}

export default App;
