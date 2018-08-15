<template>
  <v-layout>
    <div class="content-without-bg">
        <div class="form col-sm-9 mb-3 mt-3" style="margin: auto;">
            <div class="row">
              <div class="col-sm-12 title">Making it Special Form</div>
            </div>
			<div class="iframe-container">
      	        <iframe :src="`https://www.vwg-mis.co.uk/customer-testimonial-embed-form`" frameborder=0 scrolling="no" class="col-sm-6"></iframe>
			</div>
        </div>
      <Footer :showTop="false" />
    </div>
  </v-layout>
</template>

<style scoped>
  .content-without-bg {
    background-color: #eeeeee;
  }
	iframe {
		height: 800px;
        max-width: 400px;
	}
	.iframe-container {
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>

<script>
  /* ============
   * Making It Special Form Page
   * ============
   *
   * Page where the user can view the vehicle detail.
   */
   import { mapState } from 'vuex';
  import VLayout from '@/layouts/Default'
  import VCard from '@/components/Card'

  export default {
    /**
     * The name of the page.
     */
    name: 'making-it-special-form',

    computed: {
      ...mapState({
        userInfo: state => state.account.user,
        brand: state => state.models.brand,
			})
    },

    data () {
      return {
        afterCareDealership: null,
      }
    },

    mounted() {
      if ($('html').hasClass('fp-enabled')) {
        $.fn.fullpage.destroy('all')
      }
      $('body').css('background-color', '#eeeeee');
      this.$store.dispatch('account/find');
    },

    beforeDestroy() {
      $('body').css('background-color', '#ffffff');
    },

    watch: {
      userInfo (newval, oldval) {
        if (newval) {
          for (const item of newval.brands) {
            if (item.brandName === this.brand) {
              this.afterCareDealership = item.afterCareDealership;
            }
          }
        }
      },
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
