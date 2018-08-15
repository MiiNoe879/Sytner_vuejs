<template>
  <v-layout>
    <div class="content-without-bg">
      <div class="form container flex justify-center mb-3">
        <div class="col-sm-6">
          <div class="row">
            <div class="col-sm-12 title">Request Test Drive Form</div>
          </div>
          <div class="row">
            <div class="col-sm-12 label">
              To claim your £200 discount, please complete the form below to request a test drive on your preferred date and time.
            </div>
          </div>

          <div class="row sub-form mt-5" v-if="user">
            <div class="row-100 flex">
              <div class="col-sm-6">
                <label for="" class="label col-sm-12">Title</label>
                <select v-model="user.Title" class="col">
                  <option value="Mr">Mr</option>
                  <option value="Mrs">Mrs</option>
                  <option value="Miss">Miss</option>
                  <option value="Dr">Dr</option>
                  <option value="Prof">Prof</option>
                  <option value="Sir">Sir</option>
                  <option value="Hon">Hon</option>
                  <option value="Rev">Rev</option>
                  <option value="Lord">Lord</option>
                  <option value="Lady">Lady</option>
                </select>
                <div class="arrow" />
              </div>
            </div>
            <div class="row-100 flex mt-3">
              <div class="col-sm-12">
                <label for="" class="label col-sm-12">First Name</label>
                <input type="text" class="input col-sm-12" id="" placeholder="" v-model="user.Firstnam"/>
              </div>
            </div>
            <div class="row-100 flex mt-3">
              <div class="col-sm-12">
                <label for="" class="label col-sm-12">Surname</label>
                <input type="text" class="input col-sm-12" id="" placeholder="" v-model="user.Surname"/>
              </div>
            </div>
            <div class="row-100 flex mt-3">
              <div class="col-sm-12">
                <label for="" class="label col-sm-12">Address</label>
                <input type="text" class="input col-sm-12" id="" placeholder="" v-model="user.address1"/>
              </div>
            </div>
            <div class="row-100 flex mt-3">
              <div class="col-sm-12">
                <label for="" class="label col-sm-12">Postcode</label>
                <input type="text" class="input col-sm-12" id="" placeholder="" v-model="user.Postcode"/>
              </div>
            </div>
            <div class="row-100 flex mt-3">
              <div class="col-sm-12">
                <label for="" class="label col-sm-12">Email</label>
                <input type="email" class="input col-sm-12" id="" placeholder="" v-model="user.Email"/>
              </div>
            </div>
            <div class="row-100 flex mt-3">
              <div class="col-sm-12">
                <label for="" class="label col-sm-12">Models of interest</label>
                <input type="text" class="input col-sm-12" id="" placeholder="" v-model="user.model_interest" />
              </div>
            </div>
            <div class="row-100 flex mt-3">
              <div class="col-sm-12">
                <label for="" class="label col-sm-12">Type of Vehicle</label>
                <div class="row-100 option-group flex">
                  <div class="col-sm-3">
                    <input class="form-check-input ml-0" type="radio" name="radio1" id="radio1" value="New" v-model="user.vehicletype">
                    <label for="" class="label ml-4">New</label>
                  </div>
                  <div class="col-sm-3">
                    <input class="form-check-input ml-0" type="radio" name="radio1" id="radio1" value="Used" v-model="user.vehicletype">
                    <label for="" class="label ml-4">Used</label>
                  </div>
                </div>
              </div>
            </div>
            <div class="row-100 flex mt-3">
              <div class="col-sm-12">
                <label for="" class="label col-sm-12">What brands are of interest to you? Select all that apply.</label>
                <div class="row">
                  <div class="col-sm-6">
                    <label>Audi</label>
                  </div>
                  <div class="col-sm-6">
                    <input type="checkbox" class="form-check-input" id="" value="Audi" v-model="user.selected_brands">
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-6">
                    <label>Volkswagen</label>
                  </div>
                  <div class="col-sm-6">
                    <input type="checkbox" class="form-check-input" id="" value="Volkswagen" v-model="user.selected_brands">
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-6">
                    <label>SEAT</label>
                  </div>
                  <div class="col-sm-6">
                    <input type="checkbox" class="form-check-input" id="" value="SEAT" v-model="user.selected_brands">
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-6">
                    <label>ŠKODA</label>
                  </div>
                  <div class="col-sm-6">
                    <input type="checkbox" class="form-check-input" id="" value="SKODA" v-model="user.selected_brands">
                  </div>
                </div>
              </div>
            </div>
            <div class="row-100 flex mt-3">
              <div class="col-sm-6">
                <label for="" class="label col-sm-12">Preferred test drive date</label>
                <div class='input-group date' id='datepicker'>
                  <date-picker lang="en" v-model="user.prefered_date" :first-day-of-week="1"></date-picker>
                </div>
              </div>
              <div class="col-sm-6">
                <label for="" class="label col-sm-12">Preferred test drive time</label>
                <div class="input-group bootstrap-timepicker timepicker">
                  <vue-timepicker format="hh:mm A" lang="en" v-model="user.prefered_time"></vue-timepicker>
                </div>
              </div>
            </div>
            <div class="row-100 flex mt-3">
              <div class="col-sm-12">
                <label for="" class="label col-sm-12">Prefered test drive location</label>
                <input type="text" class="input col-sm-12" id="" placeholder="" v-model="user.prefered_location"/>
              </div>
            </div>
            <div class="row-100 flex mt-5">
              <div class="form-group col-sm-6">
                <button type="button" class="col-sm-12" @click="save" v-show="!loading">Submit</button>
                <div class="col-sm-12 flex center">
                  <loading-spinner v-show="loading" />
                </div>
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
   * Request Test Drive Form Page
   * ============
   *
   * Page where the user can view the account information.
   */

  import { mapState } from 'vuex';
  import VLayout from '@/layouts/Default'
  import VCard from '@/components/Card'

  const _ = require('lodash');

  export default {
    /**
     * The name of the page.
     */
    name: 'request-test-drive-form',

    computed: {
      ...mapState({
        // userInfo: state => state.account.user,
        loading: state => state.models.loading,
			})
    },

    data() {
      return {
        custId: 0,
        selectedDate: null,
        selectedTime: null,
        user: {
        },
      };
    },

    mounted() {
      if ($('html').hasClass('fp-enabled')) {
        $.fn.fullpage.destroy('all');
      }
      this.custId = this.$route.params.custId;
      this.user.selected_brands = [];
    },

    watch: {
      userInfo (newval, oldval) {
        // this.user = _.cloneDeep(newval);
        // this.user.selected_brands = [];
      },
    },

    methods: {
      goBack() {
        this.$router.go(-1)
      },
      save() {
        this.user.custId = this.custId;
        this.$store.dispatch('submitTestDrive', this.user);
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
