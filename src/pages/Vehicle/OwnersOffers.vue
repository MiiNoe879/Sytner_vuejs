<template>
  <v-layout>
    <div class="content-without-bg">
      <div class="form container-fluid mt-0">
        <div class="row gradient-title full-container">
          <div>
            <div class="col-sm-12 title">Owners Offers</div>
            <div class="col-sm-12 description"></div>
          </div>
        </div>
        <div class="loading" v-show="loading">
          <loading-spinner />
        </div>
        <div class="form container-fluid full-container flex center justify-center result-form" v-show="offers.length==0">
          Sorry there are no Owners
        </div>
        <div class="full-container" id="photos">
          <div v-for="offer in offers" class="item" :style="getStyle(offer)" @click="openLink(offer.header_bottom_link)">
            <img v-bind:src="offer.image" />
            <div class="offer-title" v-bind:style="offer.title_style">
                {{offer.title}}
            </div>
          </div>
        </div>

      </div>
      <Footer :showTop="false" />
    </div>
  </v-layout>
</template>

<style scoped>

  #photos {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(33.333%, 1fr));
    align-items: start;
    justify-items: center;
    margin-left: -30px;
  }
  @media only screen and (max-width: 512px) {
    #photos {
      grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
    }
  }
  @media only screen and (max-width: 1000px) {
    #photos {
      margin-left: 0px;
    }
  }

  #photos div.item {
    width: 100% !important;
    height: 100%;
    cursor: pointer;
  }

  #photos div.item img {
    width: 100% !important;
    height: 100%;
  }

  #photos div.item .offer-title {
    position: relative;
    top: -30px;
    margin-left: 10px;
    font-size: 12px;
    font-weight: 700;
    font-family: 'club_bold', Arial, Helvetica, sans-serif;
  }
  
</style>

<script>
  /* ============
   * Owners Offers Page
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
    name: 'owners-offers',

    computed: {
      ...mapGetters({
        offers: 'getOffers',
        loading: 'getLoading',
      })
    },
    data() {
      return {
        // offers: this.$store.getters.getOffers(),
      };
    },
    mounted() {
      if ($('html').hasClass('fp-enabled')) {
        $.fn.fullpage.destroy('all');
      }
      this.$store.dispatch('setOwnersOffers');
    },
    methods: {
      goBack() {
        this.$router.go(-1);
      },
      getStyle(offer) {
        if (offer.colspan === 2) {
          return 'grid-column: span 2;';
        } else if (offer.rowspan === 2) {
          return 'grid-row-start: span 2;';
        }
        return '';
      },
      openLink(link) {
        if (link) {
          window.open(link, '_new');
        }
      },
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
