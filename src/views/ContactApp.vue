<template>
  <section class="contact-app">
    <h3>Contact app</h3>
    <RouterLink to="/contact/edit">Add a new contact</RouterLink>
    <ContactFilter @set-filter="setFilter" />
    <ContactList :contacts="contactsToShow" @remove="removeContact" />
  </section>
</template>

<script>
import contactService from "@/services/contact.service.js";
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