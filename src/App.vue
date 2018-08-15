<template>
  <div id="fullpage" class="container-fluid">
    <router-view></router-view>
  </div>
</template>
<script>
  /* ============
   * Entry Point
   * ============
   *
   * The entry point of the application
   */
  /* eslint-disable */

  export default {
    name: 'web_app_CS',
    mounted() {
      // If the user is authenticated,
      // fetch the data from the API
      // this.$store.dispatch('setHomePageData');
      // this.$store.dispatch('setLocations');
      if (this.$store.state.auth.authenticated) {
        this.$store.dispatch('account/find');
        // console.log(this.$store.getters.getAdminBrandStyles('Honda').backgroundColor)
      }
    },
  };
</script>
