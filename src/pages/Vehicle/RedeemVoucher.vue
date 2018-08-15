<template>
    <v-layout>
        <div class="content-without-bg">
            <div class="form col-sm-9 mb-3 mt-3" style="margin: auto;">
                <div class="row">
                    <div class="col-sm-12 title">Redeem Voucher</div>
                </div>

                <div class="loading" v-show="loading">
                    <loading-spinner/>
                </div>
                <div class="row sub-form mt-5">
                    <div class="form container-fluid full-container flex center justify-center result-form"
                         v-show="vouchers.length==0">
                        Sorry, there are no vouchers to redeem.
                    </div>
                    <div class="row-100 flex wrap align-center justify-center">
                        <div class="voucher" v-for="voucher in vouchers">
                            <img :src="voucher.imageBg"/>
                            <div class="voucher-title">{{voucher.title}}</div>
                            <div class="voucher-sub-title">Valid until <span
                                    v-html="getDate(voucher.dateExpires)"></span></div>
                            <div class="circle" @click="selectVoucher(voucher)"/>
                            <div class="check" v-show="voucher._id == selectedVoucherID || voucher.redeemed"
                                 @click="selectVoucher(voucher)">
                                <i class="fas fa-check"></i>
                            </div>
                            <div class="voucher-form" v-show="voucher._id == selectedVoucherID || voucher.redeemed">
                                <div class="col">
                                    <div v-if="!voucher.redeemed">
                                        <label for="" class="label col-sm-12">Select Vehicle</label>
                                    </div>
                                    <select class="col-sm-12" v-if="!voucher.redeemed">
                                        <option :value="car.Regno" v-for="car of userinfo.cars">{{car.Regno}} {{car.Model}} </option>
                                    </select>
                                    <!--<select class="col-sm-12" v-if="voucher.redeemed" v-model="selectedVehicle">-->
                                        <!--<option :value="car.Regno" v-for="car of userinfo.cars">{{car.Regno}} {{car.Model}} </option>-->
                                    <!--</select>-->
                                    <div class="vehicle-select">
                                        <i class="fas fa-car" style="font-size: 13px;"></i>
                                    </div>
                                </div>
                                <div class="col">
                                    <label for="" class="label col-sm-12">Appointment Date</label>
                                    <div class='input-group date' id='datepicker'>
                                        <date-picker lang="en" v-model="selectedDate" :first-day-of-week="1"
                                                     v-if="!voucher.redeemed"></date-picker>
                                        <input type="text" class="col-sm-12" :value="getDate(voucher.redeemedDate)"
                                               v-if="voucher.redeemed" readonly/>
                                    </div>
                                </div>
                                <div class="col">
                                    <label for="" class="label col-sm-12">Appointment Time</label>
                                    <div class="input-group bootstrap-timepicker timepicker">
                                        <vue-timepicker format="hh:mm A" lang="en" v-model="selectedTime"
                                                        v-if="!voucher.redeemed"></vue-timepicker>
                                        <input type="text" v-if="voucher.redeemed"
                                               :value="getRedeemedTime(voucher.redeemedDate)" class="col-sm-12"
                                               readonly/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row-100 flex mt-5" v-if="vouchers.length>0">
                        <div class="col-sm-4">
                        </div>
                        <div class="col-sm-8 flex">
                            <div class="form-group col-sm-6">
                                <button type="button" class="col-sm-12 disabled-btn" disabled
                                        v-if="!selectedDate || !selectedTime || !selectedVehicle">Redeem Voucher
                                </button>
                                <button type="button" class="col-sm-12"
                                        v-if="selectedDate && selectedTime && selectedVehicle"
                                        @click="showConfirmRedeem=true">Redeem Voucher
                                </button>
                            </div>
                            <div class="form-group col-sm-6">
                                <button type="button" class="col-sm-12 transparent-btn" @click="goBack">Back</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer :showTop="false"/>
            <modal v-if="showConfirmRedeem" @close="showConfirmRedeem = false">
                <div slot="header">
                    <div class="close-icon" @click="showConfirmRedeem=false"><i class="fas fa-times"></i></div>
                    <div class="title">Redeem Voucher</div>
                </div>
                <div slot="body">
                    Are you sure you want to redeem this voucher?
                </div>
                <div slot="footer" class="button-container">
                    <button type="button" class="col-sm-6" @click="redeemVoucher">Yes</button>
                    <button type="button" class="col-sm-6 transparent" @click="showConfirmRedeem=false">No</button>
                </div>
            </modal>
        </div>
    </v-layout>
</template>

<style scoped>
    .content-without-bg {
        background-color: #eeeeee;
    }

    .result-form {
        background-color: #eeeeee;
    }

    .voucher {
        width: 236px;
        height: 450px;
        margin-right: 10px;
    }

    .voucher img {
        width: 225px;
        height: 225px;
    }

    .voucher .voucher-title {
        color: white;
        font-size: 13px;
        font-weight: 700;
        position: relative;
        top: -225px;
        margin-left: 10px;
        margin-top: 10px;
        font-family: 'club_bold', Arial, Helvetica, sans-serif;
    }

    .voucher .voucher-sub-title {
        color: white;
        font-size: 12px;
        font-weight: 400;
        position: relative;
        top: -225px;
        margin-left: 10px;
    }

    .voucher .circle {
        width: 34px;
        height: 34px;
        border: 4px solid white;
        border-radius: 34px;
        position: relative;
        top: -90px;
        left: 180px;
        cursor: pointer;
    }

    .check {
        color: white;
        position: relative;
        top: -120px;
        left: 190px;
        cursor: pointer;
    }

    .voucher-form {
        position: relative;
        top: -90px;
    }

    .vehicle-select {
        color: #707070;
        bottom: 0;
        top: 35px;
        margin: auto;
        right: 10px;
        position: absolute;
        cursor: pointer;
        width: 24px;
    }
</style>

<script>
  /* ============
   * Redeem Voucher Page
   * ============
   *
   * Page where the user can view the vehicle detail.
   */
  /* eslint-disable */
  import { mapGetters } from 'vuex'
  import VLayout from '@/layouts/Default'
  import VCard from '@/components/Card'
  import modal from '@/layouts/Modal'

  export default {
    /**
     * The name of the page.
     */
    name: 'redeem-voucher',

    computed: {
      ...mapGetters({
        vouchers: 'getVouchers',
        loading: 'getLoading',
        userinfo: 'account/getUserInfo',
      })
    },

    data () {
      return {
        // vouchers: this.$store.getters.getVouchers(),
        selectedVoucherID: 0,
        selectedTime: null,
        selectedVehicle: 1,
        selectedDate: null,
        showConfirmRedeem: false,
      }
    },

    mounted () {
      if ($('html').hasClass('fp-enabled')) {
        $.fn.fullpage.destroy('all')
      }
      this.$store.dispatch('setVouchers')
      $('body').css('background-color', '#eeeeee')
    },

    beforeDestroy () {
      $('body').css('background-color', '#ffffff')
    },

    methods: {
      goBack () {
        this.$router.push({name: 'home.index'})
      },
      selectVoucher (voucher) {
        if (!voucher.redeemed) {
          if (this.selectedVoucherID === voucher._id) {
            this.selectedVoucherID = 0
            this.selectedTime = null
            this.selectedDate = null
          } else {
            this.selectedVoucherID = voucher._id
            this.selectedTime = null
            this.selectedDate = null
          }
        }
      },
      redeemVoucher () {
        this.$store.dispatch('redeemVoucher', this.selectedVoucherID)
        this.showConfirmRedeem = false
        this.selectedDate = null
      },
      getDate (expdate) {
        if (expdate) {
          const split = expdate.split('T')
          return split[0]
        }
        return ''
      },
      getRedeemedTime (redeemeddate) {
        if (redeemeddate) {
          const split = redeemeddate.split('T')
          const splits = split[1].split(':')
          return `${splits[0]}:${splits[1]}`
        }
        return ''
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
