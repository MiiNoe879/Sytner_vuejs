<template>
  <v-layout>
    <div class="content-without-bg">
      <div class="form container-fluid full-container flex center justify-center result-form">
        Password reset link had been sent to your email address
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
    name: 'forgot-password-success',

    mounted() {
      if ($('html').hasClass('fp-enabled')) {
        $.fn.fullpage.destroy('all');
      }
      $('.pos-f-t').hide();
    },

    beforeDestroy() {
      $('.pos-f-t').show();
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
