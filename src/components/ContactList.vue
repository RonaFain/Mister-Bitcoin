<template>
  <section class="contact-list">
    <div
      v-for="contact in contacts"
      :key="contact._id"
      class="contact-preview-container"
    >
      <RouterLink :to="`/contact/${contact._id}`"
        ><ContactPreview :contact="contact"
      /></RouterLink>
      <button @click="remove(contact._id)">Remove</button>
    </div>
  </section>
</template>

<script>
import ContactPreview from "@/components/ContactPreview.vue";
export default {
  props: {
    contacts: Array,
  },
  components: {
    ContactPreview,
  },
  methods: {
    remove(id) {
      this.$emit("remove", id);
    },
  },
};
</script>

<style>
</style>