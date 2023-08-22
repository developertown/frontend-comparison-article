import { createStore } from "solid-js/store";
import { Select } from "./Select";
import { createSignal } from "solid-js";

const [state, setState] = createStore({ framework: "react", status: "good" });

const register = (name: keyof typeof state) => ({
  name,
  value: state[name],
  onChange: (value: string) => setState({ ...state, [name]: value }),
});

const [color, setColor] = createSignal("red");

function App() {
  return (
    <div>
      <h1>Store Based</h1>
      <Select
        {...register("framework")}
        label="Framework"
        options={["react", "vue", "qwik"]}
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
        value={color()}
        label="Color"
        options={["red", "green", "blue"]}
        onChange={setColor}
      />
      <pre>color: {color()}</pre>
    </div>
  );
}

export default App;
