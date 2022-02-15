<template>
  <section v-if="marketPrice" class="statistic-view">
    <!-- <pre>{{ marketPrice }}</pre> -->
    <!-- <pre>{{ marketTime }}</pre> -->
    <LineChart />
  </section>
</template>

<script>
import bitcoinService from '@/services/bitcoin.service.js'
import LineChart from '@/components/LineChart.vue'

export default {
  components: {
    LineChart
  },
  data() {
    return {
      marketPrice: null,
      marketTime: null
    };
  },
  async created() {
    const data = await bitcoinService.getMarketPrice()
    this.marketPrice = data[0].map(item => item.y)
    this.marketTime = data[0].map(item => item.x)
    console.log('marketPrice' , this.marketPrice)
    console.log('marketTime' , this.marketTime)
  },
};
</script>

<style>
</style>