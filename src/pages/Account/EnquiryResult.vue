<template>
  <v-layout>
    <div class="content-without-bg">
      <div class="form container-fluid full-container flex center justify-center result-form">
        Thank you for submitting your enquiry, we will get back to you soon.
      </div>
      <Footer :showTop="false" />
    </div>
  </v-layout>
</template>

<script>
  /* ============
   * Contact Us Page
   * ============
   *
   * Page where the user can view the account information.
   */

  import VLayout from '@/layouts/Default'
  import VCard from '@/components/Card'

  export default {
    /**
     * The name of the page.
     */
    name: 'contact-us',

    mounted() {
      if ($('html').hasClass('fp-enabled')) {
        $.fn.fullpage.destroy('all');
      }
    },

    methods: {
      goBack() {
        this.$router.go(-1)
      },
    },

    /**
     * The components that the page can use.
     */
    components: {
      VLayout,
      VCard,
    },
  }

</script>
