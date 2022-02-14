<template>
  <section v-if="marketPrice" class="statistic-view">
    <pre>{{ marketPrice }}</pre>
  </section>
</template>

<script>
import bitcoinService from "@/services/bitcoin.service.js";

export default {
  components: {},
  data() {
    return {
      marketPrice: null,
    };
  },
  async created() {
    this.marketPrice = await bitcoinService.getMarketPrice();
  },
};
</script>

<style>
</style>