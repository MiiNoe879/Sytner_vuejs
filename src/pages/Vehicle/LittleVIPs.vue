<template>
  <v-layout>
    <div class="content-without-bg">
      <div class="form container-fluid mt-0">
        <div class="row gradient-title full-container">
          <div>
            <div class="col-sm-12 title">Community</div>
            <div class="col-sm-12 description"></div>
          </div>
        </div>
        <div class="loading" v-show="loading">
          <loading-spinner />
        </div>
        <div class="form container-fluid full-container flex center justify-center result-form" v-show="vips.length==0">
          Sorry there are no Activities at the moment.
        </div>
        <div class="full-container flex wrap">
          <div class="row col-sm-12" v-for="vip in vips" style="padding: 0;">
            <div class="col-sm-6" style="padding:0;">
              <div class="vip">
                <div class="vip-title">{{vip.title}}</div>
                <div class="vip-sub-title">{{vip.sub_title}}</div>
              </div>
              <img :src="vip.image" />
            </div>
            <div class="col-sm-6 header flex justify-content-space-between">
              <div class="header-title">{{vip.header_title}}</div>
              <div class="header-content">
                {{vip.header_content}}
              </div>
              <div class="header-bottom">
                <a :href="vip.header_bottom_link" target="_blank">
                  {{vip.header_bottom}}
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
      <Footer :showTop="false" />
    </div>
  </v-layout>
</template>

<style scoped>
  .row:nth-child(even) {
    flex-direction: row-reverse;
  }
  .vip {
    position: relative;
    top: 27px;
    left: 32px;
    z-index: 9999;
    display: inline-block;
  }
  .vip .vip-title {
    color: #ffffff;
    font-size: 15px;
    font-weight: 700;
    font-family: 'club_bold', Arial, Helvetica, sans-serif;
  }
  .vip .vip-sub-title {
    color: #ffffff;
    font-size: 13px;
    font-weight: 400;
  }
  img {
    width: 100%;
    height: 100%;
    margin-top: -41px;
  }
  .bg {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    min-height: 186px;
    width: 50vw;
  }
  @media only screen and (max-width: 575px) {
    .bg {
      width: 100vw;
    }
  }
  .header {
    background-color: #f2f2f2;
    padding: 27px 32px 29px 32px;
    flex-direction: column;
  }
  .header .header-title {
    color: #000000;
    font-size: 15px;
    font-weight: 700;
    font-family: 'club_bold', Arial, Helvetica, sans-serif;
  }
  .header .header-content {
    color: #1a1a1a;
    font-size: 13px;
    font-weight: 400;
    margin-top: 20px;
    margin-bottom: 30px;
  }
  .header .header-bottom {
    color: #000000;
    font-size: 15px;
    font-weight: 700;
    font-family: 'club_bold', Arial, Helvetica, sans-serif;
  }
  .header .header-bottom a {
    color: #000000;
    font-size: 15px;
    font-weight: 700;
    font-family: 'club_bold', Arial, Helvetica, sans-serif;
  }
</style>

<script>
  /* ============
   * Little VIPs Page
   * ============
   *
   * Page where the user can view the vehicle detail.
   */
  import { mapGetters } from 'vuex';
  import VLayout from '@/layouts/Default';
  import VCard from '@/components/Card';

  export default {
    /**
     * The name of the page.
     */
    name: 'little-vips',
    computed: {
      ...mapGetters({
        vips: 'getVIPs',
        loading: 'getLoading',
      })
    },
    data() {
      return {
        // vips: this.$store.getters.getVIPs(),
      };
    },
    mounted() {
      if ($('html').hasClass('fp-enabled')) {
        $.fn.fullpage.destroy('all');
      }
    },
    created () {
      this.$store.dispatch('setVIPs');
    },
    methods: {
      getStyle(vip) {
        return `background-image: url(${vip.image})`;
      }
    },

    /**
     * The components that the page can use.
     */
    components: {
      VLayout,
      VCard,
    },
  };
</script>
