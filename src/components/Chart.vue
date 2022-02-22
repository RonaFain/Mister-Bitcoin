<template>
  <!-- <line-chart :data="chartData"></line-chart> -->
  <line-chart :data="editChartData"></line-chart>
</template>

<script>
export default {
  props: {
    marketPrice: Array,
    marketTime: Array
  },
  data() {
    return {
      chartData: [
        ["Jan", 44],
        ["Feb", 27],
        ["Mar", 60],
        ["Apr", 55],
        ["May", 37],
        ["Jun", 40],
        ["Jul", 69],
        ["Aug", 33],
        ["Sept", 76],
        ["Oct", 90],
        ["Nov", 34],
        ["Dec", 22],
      ],
    }
  },
  computed: {
    editChartData() {
      return this.marketTime.map((time, idx) => {
        console.log([new Date(time).toLocaleDateString("en-US") , this.marketPrice[idx]]);
        return [time , this.marketPrice[idx]]
      })
    }
    
  }
};
</script>

<style>
</style>