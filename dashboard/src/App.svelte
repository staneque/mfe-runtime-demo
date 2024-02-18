<script lang="ts">
  import Counter from "./lib/Counter.svelte";
</script>

<main class="text-center">
  <h1 class="p-3 text-lg font-bold">This is Svelte app</h1>

  <Counter />


  <p class="p-2 text-sm text-gray-500">
    Check out <a href="https://github.com/sveltejs/kit#readme">SvelteKit</a> for
    the officially supported framework, also powered by Vite!
  </p>
</main>

<style>
    a {
        @apply text-blue-700;
    }
    a:hover {
        @apply underline;
    }
</style>
