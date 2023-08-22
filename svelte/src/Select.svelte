<script lang="ts">
  export let value: string;
  export let options: string[] = [];
  export let name: string;
  export let label: string;
  export let onChange: (value: string) => void;

  const handleChange = (e: Event) =>
    onChange((e.target as HTMLSelectElement).value);
</script>

<div class="input-container">
  <label for={name}>{label}</label>
  <select id={name} {name} {value} on:change={handleChange}>
    {#each options as option}
      <option value={option}>{option}</option>}
    {/each}
  </select>
</div>
