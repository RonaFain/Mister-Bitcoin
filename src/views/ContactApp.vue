<template>
  <section class="contact-app main-container full">
    <ContactFilter @set-filter="setFilter" />
    <div class="full">
      <RouterLink to="/contact/edit" class="clean-link">
        <!-- <div class="img-container"><img src="@/assets/imgs/plus.svg" /></div> -->
        <div class="plus flex justify-center align-center">+</div>
      </RouterLink>
      <ContactList :contacts="contactsToShow" @remove="removeContact" />
    </div>
  </section>
</template>

<script>
import ContactFilter from "@/components/ContactFilter.vue";
import ContactList from "@/components/ContactList.vue";

export default {
  components: {
    ContactFilter,
    ContactList,
  },
  data() {
    return {
      filterBy: null,
    };
  },
  methods: {
    setFilter(filterBy) {
      this.filterBy = filterBy;
    },
    async removeContact(id) {
      try {
        // await contactService.remove(id)
        // this.contacts = this.contacts.filter(contact => contact._id !== id)
        await this.$store.dispatch({ type: 'removeContact', id })
      } catch (err) {
        console.log(err);
      }
    },
  },
  computed: {
    contacts() {
      return this.$store.getters.contacts
    },
    contactsToShow() {
      if (!this.filterBy) return this.contacts;
      const regex = new RegExp(this.filterBy.name, "i");
      return this.contacts.filter((contacts) => regex.test(contacts.name));
    },
  },
};
</script>

<style>
</style>