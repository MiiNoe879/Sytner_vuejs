<template>
  <v-layout>
    <div class="content-without-bg">
      <div class="form container flex justify-center mb-3">
        <div class="col-sm-6">
          <div class="row">
            <div class="col-sm-12 title">Enquiry Form</div>
          </div>

          <div class="row sub-form mt-5">
            <div class="row-100 flex mt-3">
              <div class="col-sm-12">
                <label for="" class="label col-sm-12">First Name</label>
                <input type="text" class="input col-sm-12" id="" placeholder="" v-model="userinfo.Firstnam" readonly/>
              </div>
            </div>
            <div class="row-100 flex mt-3">
              <div class="col-sm-12">
                <label for="" class="label col-sm-12">Surname</label>
                <input type="text" class="input col-sm-12" id="" placeholder="" v-model="userinfo.Surname" readonly/>
              </div>
            </div>
            <div class="row-100 flex mt-3">
              <div class="col-sm-12">
                <label for="" class="label col-sm-12">Email</label>
                <input type="text" class="input col-sm-12" id="" placeholder="" v-model="userinfo.Email" readonly/>
              </div>
            </div>
            <div class="row-100 flex mt-3">
              <div class="col-sm-12">
                <label for="" class="label col-sm-12">Details of Enquiry</label>
                <input type="text" class="input col-sm-12" id="" placeholder="" />
              </div>
            </div>
            <div class="row-100 flex mt-5">
              <div class="form-group col-sm-6">
                <button type="button" class="col-sm-12" @click="submitEnquiry">Submit Equiry</button>
              </div>
              <div class="form-group col-sm-6">
                <button type="button" class="col-sm-12 transparent-btn" @click="goBack">Cancel</button>
              </div>
            </div>
          </div>
        </div>
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

  import { mapGetters, mapActions } from 'vuex';
  import VLayout from '@/layouts/Default'
  import VCard from '@/components/Card'

  export default {
    /**
     * The name of the page.
     */
    name: 'contact-us',

    computed: {
      ...mapGetters({
        userinfo: 'account/getUserInfo',
        loading: 'getLoading',
      })
    },

    mounted() {
      if ($('html').hasClass('fp-enabled')) {
        $.fn.fullpage.destroy('all');
      }
      this.$store.dispatch('account/find');
    },

    methods: {
      goBack() {
        this.$router.go(-1)
      },
      submitEnquiry() {
        this.$router.push('/account/enquiryresult');
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
