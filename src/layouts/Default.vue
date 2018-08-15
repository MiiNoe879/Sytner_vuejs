<template>
    <div>
        <!--TODO sp1-l1: change all brandName instances with brand variable in query param or from the store. -->
        <!--TODO sp1-l2: use JWT to authenticate all the routes except login page. Use exisitng HAPI Server to manage authentication. Create endpoints where needed. -->
        <!--TODO sp1-l3: Create blank pages for all the routes in the following list. Remove old routes please. -->
        <!--LIST OF Routes -->
        <!--Reports, Vouchers, Settings, Customers, Pages/CMS -->
        <!--Once these pages created I will add tasks to those pages with details about what goes in there.-->
        <Header />
				<slot class="routerview"></slot>
    </div>
</template>

<script>
  /* ============
   * Default Layout
   * ============
   *
   * Used for the home and account pages.
   *
   * Layouts are used to store a lot of shared code.
   * This way the app stays clean.
   */
  /* eslint-disable */

  export default {
    /**
     * The name of the layout.
     */
    name: 'default-layout',

    /**
     * The data that can be used by the page.
     *
     * @returns {Object} The view-model data.
     */
    data () {
      return {
        bgc: this.$store.getters.getAdminBrandStyles('Honda'),
        backgroundColor: '#17a2b8',
        menuCollapsed: false,
        // brand: this.$route.params.brand ? this.$route.params.brand : "",
        brand: this.$store.getters.getBrands()[1],
        openCSM: false,
        menus: this.$store.getters.getMenus(),
      }
    },
    created () {
      // this.bgc.backgroundColor = '#17a2b8'
      // this.bgc = this.$store.getters.getAdminBrandStyles('Honda')
    },
    /**
     * The methods that the layout can use.
     */
    methods: {
      /**
       * Will log the user out.
       */
      logout () {
        this.$store.dispatch('auth/logout')
      },

      /**
       * Will toggle the menu.
       */
      toggleMenu () {
        this.menuCollapsed = !this.menuCollapsed
      },
    },
  }
</script>

<style scoped>
    .routerview{
      overflow-x: hidden;
    }
</style>