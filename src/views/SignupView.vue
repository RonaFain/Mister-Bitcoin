<template>
  <section class="signup-view">
    <form v-if="loggedinUser" @submit.prevent="save" class="flex column align-center" >
      <label>Please enter your name:</label>
      <input v-model="loggedinUser.name" type="text" />
      <button>Sign up</button>
    </form>
  </section>
</template>

<script>
import userService from "@/services/user.service.js"

export default {
  data() {
    return {
      loggedinUser: null,
    };
  },
  async created() {
    this.loggedinUser = userService.getEmptyUser();
  },
  methods: {
    async save() {
      await this.$store.dispatch({ type: 'saveUser', user: this.loggedinUser })
      this.$router.push('/')
    },
  },
};
</script>

<style>
</style>