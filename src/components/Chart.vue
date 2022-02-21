<template>
  <div class="chart">
    <LineChart :chart-data="chartData" :options="options" />
  </div>
</template>

<script>
import { utilService } from "../services/utils.service";
import { LineChart } from "vue-chart-3";

import {
  Chart,
  LineController,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";
Chart.register(
  LineController,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
);
export default {
  components: {
    LineChart,
  },
  props: {
    chartdata: Array,
  },
  data() {
    return {
      labels: ["5 month", "4 month", "3 month", "2 month", "last mont"],
      datasets: [
        {
          label: "Bitcoin",
          data: utilService.getAvgValues(this.chartdata),
          backgroundColor: "#fff",
          borderColor: "rgb(75, 192, 192)",
          tension: 0.1,
        },
      ],
      options: {
        title: {
          text: "Bitcoin",
        },
      },
    }
  },
  computed: {
    chartData() {
      return {
        labels: this.labels,
        datasets: this.datasets,
      }
    },
  },
};
</script>

<style>
</style>