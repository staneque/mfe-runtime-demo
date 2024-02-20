<script lang="ts">
  import AreaChart from "./lib/AreaChart.svelte"
  import ColumnChart from "./lib/ColumnChart.svelte"
  import LineChart from "./lib/LineChart.svelte"
  import BarChart from "./lib/BarChart.svelte"
  import PieChart from "./lib/PieChart.svelte"
  import DonutChart from "./lib/DonutChart.svelte"
  import RadialChart from "./lib/RadialChart.svelte"
</script>

<main class="text-center">
  <div class="grid  gap-6 py-16 px-6 mx-auto max-w-[1100px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  justify-items-center">
    <div class="grid gap-6 auto-rows-min" >
      <AreaChart />
      <LineChart />
      <ColumnChart />
    </div>
  
    <div class="grid gap-6 auto-rows-min">
      <BarChart />
      <PieChart /> 
    </div>

    <div class="grid gap-6 auto-rows-min">
      <RadialChart /> 
      <DonutChart />
    </div>
</main>