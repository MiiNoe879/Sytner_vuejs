<template>
  <v-layout>
    <div class="content-without-bg">
      <div class="full-container banner">
      </div>
      <div class="form container">
        <div class="col-sm-12 mt-5 mb-5">
          <div class="row">
            <div class="col-sm-12 title">Accident Management Care</div>
            <div class="col-sm-12">
              <hr />
            </div>
          </div>
          <div class="row sub-form">
            <div class="col-sm-12">
              Day: <b>0333 321 5962</b>
            </div>
            <div class="col-sm-12">
              Evening: <b>0845 078 4573</b>
            </div>
            <div class="col-sm-12 mt-3 peace-of-mind">
              Peace of Mind
            </div>
            <div class="col-sm-12 first-call">
              Make us your first call
            </div>
            <div class="col-sm-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a orci neque. Suspendisse quistortor ac sapien rutrum pulvinar. Phasellus volutpat feliset arcu elementum laoreet. 
            </div>
            <div class="col-sm-12 mt-3">
              Nullam congue semperorci non scelerisque. Maecenas cursus, erat sed luctus dictum, nisl risus cursus est, eu varius magn augue at quam. Nunc congue vestibulum eros luctus malesuada. Vestibulum vulputate eu metus accumsan. Vivamus sit amet sodales tellus. Aliquam tincidunt quam in tincidunt scelerisque.
            </div>
            <div class="col-sm-12 flex mt-5">
              <button type="button" style="width: 200px;">Contact Us</button>
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
    background: url('/static/images/video1.jpg');
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

  import VLayout from '@/layouts/Default'
  import VCard from '@/components/Card'

  export default {
    /**
     * The name of the page.
     */
    name: 'accident-management',

    mounted() {
      if ($('html').hasClass('fp-enabled')) {
        $.fn.fullpage.destroy('all')
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
