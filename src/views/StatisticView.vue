<template>
  <section v-if="marketPrice" class="statistic-view">
    <!-- <pre>{{ marketPrice }}</pre> -->
    <!-- <pre>{{ marketTime }}</pre> -->
    <!-- <Chart :chartdata="marketPriceList" /> -->
  </section>
</template>

<script>
import bitcoinService from '@/services/bitcoin.service.js'
// import Chart from '@/components/Chart.vue'

export default {
  components: {
    // Chart
  },
  data() {
    return {
      // marketPrice: null,
      // marketTime: null
      marketPriceList: null
    };
  },
  async created() {
    // const data = await bitcoinService.getMarketPrice()
    // this.marketPrice = data[0].map(item => item.y)
    // this.marketTime = data[0].map(item => item.x)
    // console.log('marketPrice' , this.marketPrice)
    // console.log('marketTime' , this.marketTime)
    this.marketPriceList = await bitcoinService.getMarketPrice()
    console.log('this.marketPriceList:' , this.marketPriceList);
  },
};
</script>

<style>
</style>