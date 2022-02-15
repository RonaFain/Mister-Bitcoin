<template>
  <section v-if="user && rate"  class="home" >
    <div class="home-container flex column align-center">
      <h2>Welcome to Mister Bitcoin <span>{{ user.name }}</span></h2>
      <p>You have {{ user.coins }} coins</p>
      <p>Current Bitcoin rate: {{ rate }}</p>
    </div>
    <MoveList v-if="user.moves.length" :title="getTitle" :moves="user.moves" :fromHomeView="true" />
  </section>
</template>

<script>
import bitcoinService from "@/services/bitcoin.service.js"
import SignupView from "@/views/SignupView.vue"
import MoveList from "@/components/MoveList.vue"

export default {
  components: {
    SignupView,
    MoveList
  },
  data() {
    return {
      rate: null,
      currCmp: 'SignupView',
    }
  },
  computed: {
    user() {
      return this.$store.getters.user
    },
    getTitle() {
      const countMoves = this.user.moves.length
      return `Your last ${countMoves > 3 ? '3' : countMoves} moves:`
    }
  },
  async created() {
    if(this.user) this.rate = await bitcoinService.getRate(this.user.coins)
    else this.$router.push('/signup')
  },
  async beforeUpdate() {
    if(!this.rate && this.user) this.rate = await bitcoinService.getRate(this.user.coins)
  }
};
</script>