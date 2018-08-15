<template>
  <v-layout>
    <div class="content-without-bg">
      <div class="form container flex justify-center mb-3" style="height: 50vh;">
        <div class="col-sm-6">

          <div class="row">
            <div class="col-sm-12 title">Previous Vehicles</div>
          </div>

          <div class="row sub-form">
            <div class="col-sm-12 sub-title">Previous Vehicle Details</div>
            <div class="row col-sm-12 mt-3" v-for="car of userinfo.cars" v-if="car.ownership == 'N' || !car.ownership || car.ownership== 'null'">
              <div class="col-sm-6">
                <label for="" class="label-1 col-sm-12">{{car.brand}}</label>
                <input type="text" class="input-1 col-sm-12" id="" placeholder="" :value="`${car.Regno} ${car.Model}`" readonly />
              </div>
              <div class="col-sm-6">
                <label for="" class="label-1 col-sm-12">&nbsp;</label>
                <div class="flex">
                  <button type="button" class="col-sm-6 mr-3" @click="gotoVehicleDetail(car)">View</button>
                  <button type="button" class="col-sm-6" @click="showConfirmRecoverModal(car)" v-show="selectedVehicle != car && !loading">Recover</button>
                  <loading-spinner class="col-sm-6" v-show="loading && selectedVehicle == car" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer :showTop="false" />
      <modal v-if="showConfirmRecover" @close="showConfirmRecover = false">
        <div slot="header">
          <div class="close-icon" @click="showConfirmRecover=false"><i class="fas fa-times"></i></div>
          <div class="title">Recover</div>
        </div>
        <div slot="body">
          I am sure it was deleted accidentally, I want to recover this vehicle.
        </div>
        <div slot="footer" class="button-container">
          <button type="button" class="col-sm-6" @click="recoverVehicle">Yes</button>
          <button type="button" class="col-sm-6 transparent" @click="showConfirmRecover=false;selectedVehicle=null;">No</button>
        </div>
      </modal>
    </div>
  </v-layout>
</template>

<style scoped>

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
        showConfirmRecover: false,
        selectedVehicle: null,
      };
    },

    mounted() {
      if ($('html').hasClass('fp-enabled')) {
        $.fn.fullpage.destroy('all');
      }
    },

    methods: {
      showConfirmRecoverModal(vehicle) {
        this.showConfirmRecover = true;
        this.selectedVehicle = vehicle;
      },
      recoverVehicle() {
        this.showConfirmRecover = false;
        const profile = {
          _id: this.userinfo._id,
          carReg: this.selectedVehicle.Regno,
          updateCarOwnership: "Y",
        };
        this.$store.dispatch('account/updateProfile', profile);
      },
      gotoVehicleDetail(car) {
        this.$router.push({
					name: 'home.vehicle.detail',
					params: car,
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
