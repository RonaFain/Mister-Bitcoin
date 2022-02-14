<template>
  <section class="home" v-if="user && rate">
    <h2>Hello {{ user.name }}</h2>
    <p>You have {{ user.coins }} coins</p>
    <p> Current Bitcoin rate: {{ rate }}</p>
  </section>
</template>

<script>
import userService from "@/services/user.service.js";
import bitcoinService from "@/services/bitcoin.service.js";
export default {
  data() {
    return {
      user: null,
      rate: null
    }
  },
  async created() {
    this.user = await userService.get()
    this.rate = await bitcoinService.getRate(this.user.coins)
  },
}
</script>