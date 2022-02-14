<template>
    <section class="contact-details" v-if="contact">
        <h3>Contact Details</h3>
        <div class="contact-img"><img :src="contact.imgUrl" /></div>
        <p>Name: {{contact.name}}</p>
        <p>Email: {{contact.email}}</p>
        <p>Phone: {{contact.phone}}</p>
        <RouterLink to="/contact">Go Back</RouterLink>
        <RouterLink :to="`/contact/edit/${contact._id}`">Edit</RouterLink>
    </section>
</template>

<script>
import contactService from '@/services/contact.service.js';
export default {
    data() {
        return {
            contact: null
        }
    },
    async created() {
        const { id } = this.$route.params
        this.contact = await contactService.get(id)
    }
}
</script>

<style>

</style>