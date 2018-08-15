<template>
  <v-layout>
    <div class="content-without-bg">
      <div class="form container flex justify-center mb-3">
        <div class="col-sm-6">
          <div class="row">
            <div class="col-sm-12 title">Contact Details</div>
            <div class="col-sm-12 edit-link" @click="save" :class="editable ? 'active' : 'inactive'">
              <span v-if="editable">Save</span>
              <span v-else>Edit</span>
            </div>
          </div>

          <div class="row sub-form mt-5">
            <div class="row-100 flex">
              <div class="col-sm-6">
                <label for="" class="label col-sm-12">Title</label>
                <div class="form-field">
                  <select v-model="user.Title" class="col" :disabled="!editable">
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
            </div>
            <div class="row-100 flex mt-3">
              <div class="col-sm-6">
                <label for="" class="label col-sm-12">First Name</label>
                <input type="text" class="input col-sm-12" id="" placeholder="" v-model="user.Firstnam" :disabled="!editable"/>
              </div>
              <div class="col-sm-6">
                <label for="" class="label col-sm-12">Surname</label>
                <input type="text" class="input col-sm-12" id="" placeholder="" v-model="user.Surname" :disabled="!editable"/>
              </div>
            </div>
            <div class="row-100 flex mt-3">
              <div class="col-sm-12">
                <label for="" class="label col-sm-12">Address Line1</label>
                <input type="text" class="input col-sm-12" id="" placeholder="" v-model="user.address1" :disabled="!editable"/>
              </div>
            </div>
            <div class="row-100 flex mt-3">
              <div class="col-sm-12">
                <label for="" class="label col-sm-12">Address Line2</label>
                <input type="text" class="input col-sm-12" id="" placeholder="" v-model="user.address2" :disabled="!editable"/>
              </div>
            </div>
            <div class="row-100 flex mt-3">
              <div class="col-sm-6">
                <label for="" class="label col-sm-12">Town</label>
                <input type="text" class="input col-sm-12" id="" placeholder="" :disabled="!editable"/>
              </div>
              <div class="col-sm-6">
                <label for="" class="label col-sm-12">Country</label>
                <input type="text" class="input col-sm-12" id="" placeholder="" :disabled="!editable"/>
              </div>
            </div>
            <div class="row-100 flex mt-3">
              <div class="col-sm-6">
                <label for="" class="label col-sm-12">Postcode</label>
                <input type="text" class="input col-sm-12" id="" placeholder="" v-model="user.Postcode" :disabled="!editable"/>
              </div>
            </div>
            <div class="row-100 flex mt-3">
              <div class="col-sm-6">
                <label for="" class="label col-sm-12">Telephone</label>
                <input type="text" class="input col-sm-12" id="" placeholder="" v-model="user.telephone" :disabled="!editable"/>
              </div>
              <div class="col-sm-6">
                <label for="" class="label col-sm-12">Mobile</label>
                <input type="text" class="input col-sm-12" id="" placeholder="" v-model="user.mobile" :disabled="!editable"/>
              </div>
            </div>
            <div class="row-100 flex mt-3">
              <div class="col-sm-12">
                <label for="" class="label col-sm-12">Email</label>
                <input type="text" class="input col-sm-12" id="" placeholder="" v-model="user.Email" :disabled="!editable"/>
              </div>
            </div>
            <div class="row-100 flex mt-3">
              <div class="col-sm-6">
                <label for="" class="label col-sm-12">My Audi Centre</label>
                <div class="form-field">
                  <select class="col" v-model="user.afterCareDealership" :disabled="!editable">
                    <option v-for="location of locations" :value="location.centre_name" v-if="location.centre_name">
                      {{location.centre_name}}
                    </option>
                  </select>
                  <div class="arrow" />
                </div>
              </div>
              <div class="col-sm-6">
                <label for="" class="label col-sm-12">Preferred Service Centre</label>
                <div class="form-field">
                  <select class="col" v-model="user.preferedDealer" :disabled="!editable">
                    <option v-for="location of locations" :value="location.centre_name" v-if="location.centre_name">
                      {{location.centre_name}}
                    </option>
                  </select>
                  <div class="arrow" />
                </div>
              </div>
            </div>
            <div class="row-100 flex mt-3">
              <div class="col-sm-12">
                <label for="" class="label col-sm-12">Change Password</label>
                <input type="password" class="input col-sm-12" id="" placeholder="" v-model="password" :disabled="!editable"/>
              </div>
            </div>
            <div class="row-100 flex mt-5">
              <div class="form-group col-sm-6">
                <button type="button" class="col-sm-12" @click="save" v-show="!loading" v-if="!editable">Edit</button>
                <button type="button" class="col-sm-12 active" @click="save" v-show="!loading" v-if="editable">Save</button>
                <div class="col-sm-12 flex center">
                  <loading-spinner v-show="loading" />
                </div>
              </div>
              <div class="form-group col-sm-6">
                <button type="button" class="col-sm-12 transparent-btn" @click="goBack">Back</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer :showTop="false" />
    </div>
  </v-layout>
</template>

<style>
  .edit-link {
    cursor: pointer;
    text-align: right;
    color: #000000;
    font-size: 15px;
    font-weight: 700;
    font-family: 'club_bold', Arial, Helvetica, sans-serif;
  }
  .edit-link.active {
    color: #bb0a30;
  }
</style>

<script>
  /* ============
   * Account Detail Page
   * ============
   *
   * Page where the user can view the account information.
   */
  import { mapGetters, mapActions, mapState } from 'vuex';
  import VLayout from '@/layouts/Default'
  import VCard from '@/components/Card'

  export default {
    /**
     * The name of the page.
     */
    name: 'account-detail',

    computed: {
      ...mapGetters({
        loading: 'getLoading',
        dealerships: 'account/getDealerShips',
        userinfo: 'account/getUserInfo',
      }),
      ...mapState({
				locations: state => state.models.locations,
        brand: state => state.models.brand,
			})
    },

    data() {
      return {
        user: {},
        password: null,
        editable: false,
      };
    },

    mounted() {
      if ($('html').hasClass('fp-enabled')) {
        $.fn.fullpage.destroy('all');
      }
      this.user = Object.assign({}, this.userinfo);
      if (this.user.brands) {
        this.user.brands.forEach(element => {
          if (element.brandName === this.brand) {
            this.user.afterCareDealership = element.afterCareDealership;
            this.user.preferedDealer = element.preferedDealer;
          }
        });
      }
      this.$store.dispatch('account/find');
      this.$store.dispatch('setLocations');
    },

    watch: {
      loading (newval, oldval) {
        if (oldval && !newval) {
          this.$store.dispatch('account/find');
        }
      },
    },

    methods: {
      goBack() {
        this.$router.go(-1)
      },
      save() {
        this.editable = !this.editable;
        if (this.editable) {
          return;
        }
        let brands = [];
        this.user.brands.forEach(element => {
          if (element.brandName === this.brand) {
            element.afterCareDealership = this.user.afterCareDealership;
            element.preferedDealer = this.user.preferedDealer;
          }
          brands.push(element);
        });
        const profile = {
          _id: this.user._id,
          Title: this.user.Title,
          Firstnam: this.user.Firstnam,
          Surname: this.user.Surname,
          address1: this.user.address1,
          address2: this.user.address2,
          Postcode: this.user.Postcode,
          telephone: this.user.telephone,
          mobile: this.user.mobile,
          brands: brands,
        };
        this.$store.dispatch('account/updateProfile', profile);
        if (this.password) {
          this.$store.dispatch('account/updatePassword', {username: this.user.username, password: this.password});
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
  }

</script>
