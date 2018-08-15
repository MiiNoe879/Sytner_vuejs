<template>
  <v-layout>
    <div class="content-without-bg">
      <div class="form container flex justify-center mb-3">
        <div class="col-sm-6">

          <div class="row">
            <div class="col-sm-12 title">My Account</div>
          </div>

          <div class="row sub-form">
            <div class="col-sm-12 sub-title">Vehicle Details</div>
            <div class="col-sm-12 mt-3">
              <div class="row" v-for="car of userinfo.cars" v-if="car.ownership==='Y'">
                <div class="col-sm-6">
                  <label for="" class="label-1 col-sm-12">{{car.brand}}</label>
                  <input type="text" class="input-1 col-sm-12" id="" placeholder="" :value="`${car.Regno} ${car.Model}`" readonly/>
                </div>
                <div class="col-sm-6">
                  <label class="label-1 col-sm-12">&nbsp;</label>
                  <button type="button" class="col-sm-12" @click="gotoVehicleDetail(car)">View</button>
                </div>
                <div class="col-sm-12 remove-vehicle mt-3" @click="showConfirmRemoveModal(car)" v-show="selectedVehicle != car && !loading">
                  Remove this vehicle ›
                </div>
                <loading-spinner class="col-sm-12" v-show="loading && selectedVehicle == car" />
              </div>
              <div class="row mt-5">
                <div class="col-sm-6">
                  <button type="button" class="col-sm-12" @click="gotoPreviousVehicles">Previous Vehicles</button>
                </div>
              </div>
            </div>
          </div>

          <div class="row sub-form mt-5">
            <div class="col-sm-12 sub-title">Personal Details</div>
            <div class="row-100 flex">
              <div class="col-sm-6">
                <label for="" class="label col-sm-12">First Name</label>
                <input type="text" class="input col-sm-12" id="" placeholder="" v-model="userinfo.Firstnam" readonly/>
              </div>
              <div class="col-sm-6">
                <label for="" class="label col-sm-12">Surname</label>
                <input type="text" class="input col-sm-12" id="" placeholder="" v-model="userinfo.Surname" readonly/>
              </div>
            </div>
            <div class="row-100 flex mt-3">
              <div class="col-sm-6">
                <label for="" class="label col-sm-12">Mobile</label>
                <input type="text" class="input col-sm-12" id="" placeholder="" v-model="userinfo.mobile" readonly/>
              </div>
              <div class="col-sm-6">
                <label for="" class="label col-sm-12">Email</label>
                <input type="text" class="input col-sm-12" id="" placeholder="" v-model="userinfo.Email" readonly/>
              </div>
            </div>
            <div class="row-100 flex mt-5">
              <div class="form-group col-sm-6">
                <button type="button" class="col-sm-12" @click="gotoAccountDetail(userinfo)">View More Details
                </button>
              </div>
              <div class="form-group col-sm-6">
                <button type="button" class="col-sm-12" @click="gotoContactUs">Contact Us</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer :showTop="false" />
      <modal v-if="showConfirmRemove" @close="showConfirmRemove = false">
        <div slot="header">
          <div class="close-icon" @click="showConfirmRemove=false"><i class="fas fa-times"></i></div>
          <div class="title">Remove</div>
        </div>
        <div slot="body">
          Are you sure you want to remove this vehicle?
        </div>
        <div slot="footer" class="button-container">
          <button type="button" class="col-sm-6" @click="removeVehicle">Yes</button>
          <button type="button" class="col-sm-6 transparent" @click="showConfirmRemove=false;selectedVehicle=null;">No</button>
        </div>
      </modal>
    </div>
  </v-layout>
</template>

<style scoped>
  .current-owner {
    color: #1a1a1a;
    font-size: 12px;
    font-weight: 700;
  }

  .yes-label {
    color: #1a1a1a;
    font-size: 12px;
    font-weight: 400;
  }

  .no-label {
    color: #1a1a1a;
    font-size: 12px;
    font-weight: 400;
  }

  .vl {
    border-left: 1px solid rgba(112, 112, 112, 0.9);
  }
  
  @media only screen and (max-width: 570px) {
    .current-owner {
      margin-top: 20px;
    }

    .vl {
      border-left: 0px solid rgba(112, 112, 112, 0.9);
    }
  }

  .remove-vehicle {
    font-size: 12px;
    font-weight: 400;
    cursor: pointer;
  }

</style>

<script>
  /* ============
   * Account Index Page
   * ============
   *
   * Page where the user can view the account information.
   */
	import { mapGetters, mapActions } from 'vuex';
  import VLayout from '@/layouts/Default'
  import VCard from '@/components/Card'
  import modal from '@/layouts/Modal'

  export default {
    /**
     * The name of the page.
     */
    name: 'account-index',

		computed: {
      ...mapGetters({
        userinfo: 'account/getUserInfo',
        loading: 'getLoading',
      })
    },

    data() {
      return {
        showConfirmRemove: false,
        selectedVehicle: null,
      };
    },

    mounted() {
      if ($('html').hasClass('fp-enabled')) {
        $.fn.fullpage.destroy('all');
      }
			this.$store.dispatch('account/find');
    },

    methods: {
      gotoAccountDetail(user) {
        this.$router.push({
					name: 'home.account.detail',
					params: user,
				})
      },
      gotoVehicleDetail(car) {
        this.$router.push({
					name: 'home.vehicle.detail',
					params: car,
				})
      },
      gotoContactUs() {
        this.$router.push('/account/contactus')
      },
      showConfirmRemoveModal(car) {
        this.showConfirmRemove = true;
        this.selectedVehicle = car;
      },
      removeVehicle(vehicle) {
        this.showConfirmRemove = false;
        const profile = {
          _id: this.userinfo._id,
          carReg: this.selectedVehicle.Regno,
          updateCarOwnership: "N",
        };
        this.$store.dispatch('account/updateProfile', profile);
      },
      gotoPreviousVehicles() {
        this.$router.push({
					name: 'home.vehicle.previous',
				})
      },
    },

    /**
     * The components that the page can use.
     */
    components: {
      VLayout,
      VCard,
      modal,
    },
  }
</script>
