<template>
  <v-layout>
    <div class="content-without-bg">
      <div class="full-container banner">
      </div>
      <div class="form container">
        <div class="col-sm-12 mt-5 mb-5">
          <div class="row">
            <div class="col-sm-12 title">Recommend a member of your family or a friend</div>
            <div class="col-sm-12">
              <hr />
            </div>
          </div>
          <div class="row sub-form">
            <div class="col-sm-12">
              You’ll benefit from £100 off your next visit to sales or service. They’ll benefit from £200 discount off sales, accessories, merchandise or optional extras when they purchase a new or used car. Email your friend or family member details about the offer.
            </div>
            <div class="col-sm-12 mt-5 mb-5">
              <a :href="`mailto:${email.to}?Subject=${subject}&body=${body}`"><button type="button" style="width: 200px">Email</button></a>
            </div>
          </div>
        </div>
      </div>
      <Footer :showTop="false" />
    </div>
  </v-layout>
</template>

<style scoped>
  .banner {
    width: 100vw;
    height: 24vw;
    background: url('/static/images/123.png');
    background-size: cover;
    margin-top: -41px;
  }
  .container {
    font-size: 15px;
    font-weight: 400;
  }
  .peace-of-mind {
    font-family: 'club_normal', Arial, Helvetica, sans-serif;
    font-size: 18px;
    font-weight: 400;
  }
  .first-call {
    font-family: 'club_bold', Arial, Helvetica, sans-serif;
    font-size: 15px;
    font-weight: 700;
  }
</style>

<script>
  /* ============
   * Accidet managemet Page
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
    name: 'accident-management',

    computed: {
      ...mapState({
        userInfo: state => state.account.user,
			})
    },
    data() {
      return {
        email: this.$store.getters.getEarnRewardsEmail(),
        subject: '',
        body: '',
      };
    },

    mounted() {
      if ($('html').hasClass('fp-enabled')) {
        $.fn.fullpage.destroy('all')
      }
    },

    created() {
      this.subject = this.email.subject;
      this.body = encodeURIComponent(this.email.body.replace(/#ClubID#/i, `${location.origin}/earnrewards/${this.userInfo.custId}`));
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
