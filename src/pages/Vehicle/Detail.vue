<template>
    <v-layout>
        <div class="content-without-bg">
            <div class="form container flex justify-center mb-3">
                <div class="col-sm-6">
                    <div class="row">
                        <div class="col-sm-12 title">Vehicle Details</div>
                    </div>

                    <div class="row sub-form mt-5">
                        <div class="row-100 flex mt-3">
                            <div class="col-sm-6">
                                <label for="" class="label col-sm-12">Brand</label>
                                <input type="text" class="input col-sm-12" id="" placeholder="" v-model="car.brand" readonly />
                            </div>
                            <div class="col-sm-6">
                                <label for="" class="label col-sm-12">Model</label>
                                <input type="text" class="input col-sm-12" id="" placeholder="" v-model="car.Model" readonly />
                            </div>
                        </div>
                        <div class="row-100 flex mt-3">
                            <div class="col-sm-12">
                                <label for="" class="label col-sm-12">Description</label>
                                <input type="text" class="input col-sm-12" id="" placeholder="" v-model="car.Desc" readonly />
                            </div>
                        </div>
                        <div class="row-100 flex mt-3">
                            <div class="col-sm-6">
                                <!--label for="" class="label col-sm-12">Order Date</label>
                                <input type="text" class="input col-sm-12" id="" placeholder=""/-->

                                <label for="" class="label col-sm-12">Order Date</label>
                                <input type='text' class="input col-sm-12" readonly />
                            </div>
                            <div class="col-sm-6">
                                <label for="" class="label col-sm-12">Delivery Date</label>
                                <input type='text' class="input col-sm-12" readonly />
                            </div>
                        </div>
                        <div class="row-100 flex mt-3">
                            <div class="col-sm-6">
                                <label for="" class="label col-sm-12">Registration Date</label>
                                <input type='text' class="input col-sm-12" v-model="car.Regdate" readonly />
                            </div>
                            <div class="col-sm-6">
                                <label for="" class="label col-sm-12">Registration No.</label>
                                <input type="text" class="input col-sm-12" id="" placeholder="" v-model="car.Regno" readonly />
                            </div>
                        </div>
                        <div class="row-100 flex mt-3">
                            <div class="col-sm-6">
                                <label for="" class="label col-sm-12">Next Service</label>
                                <input type="text" class="input col-sm-12" id="" placeholder="" readonly />
                            </div>
                            <div class="col-sm-6">
                                <label for="" class="label col-sm-12">MOT Due Date</label>
                                <input type='text' class="input col-sm-12" readonly />
                            </div>
                        </div>
                        <div class="row-100 flex mt-5">
                            <div class="form-group col-sm-6">
                            </div>
                            <div class="form-group col-sm-6">
                                <button type="button" class="col-sm-12 transparent-btn" @click="goBack">Back</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer :showTop="false"/>
        </div>
    </v-layout>
</template>

<script>
  /* ============
   * Vehicle Detail Page
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
    name: 'vehicle-detail',

    data() {
      return {
        car: this.$route.params,
      };
    },

    mounted () {
      if ($('html').hasClass('fp-enabled')) {
        $.fn.fullpage.destroy('all')
      }
    //   $('#orderdate').datepicker()
    //   $('#registrationdate').datepicker()
    //   $('#deliverydate').datepicker()
    //   $('#duedate').datepicker()
    this.car = Object.assign({}, this.car);
    this.car.Regdate = this.car.Regdate.split('T')[0]
    },

    methods: {
      goBack () {
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
