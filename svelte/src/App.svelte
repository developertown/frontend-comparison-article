<script lang="ts">
  import { writable } from "svelte/store";
  import Select from "./Select.svelte";

  const initState = {
    framework: "svelte",
    status: "good",
  };

  const state = writable(initState);

  const register = (name: keyof typeof initState) => ({
    name,
    value: $state[name],
    onChange: (value: string) => state.update((s) => ({ ...s, [name]: value })),
  });

  let color = "blue";
</script>

<div>
  <h1>Writable Store Based</h1>
  <Select
    {...register("framework")}
    label="Framework"
    options={["svelte", "react", "vue"]}
  />
  <Select
    {...register("status")}
    label="Status"
    options={["good", "ok", "bad"]}
  />
  <pre>{JSON.stringify($state, null, 2)}</pre>

  <h1>Signal Based</h1>
  <Select
    name="color"
    value={color}
    label="Color"
    options={["red", "green", "blue"]}
    onChange={(value) => (color = value)}
  />
  <pre>color: {color}</pre>
</div>
