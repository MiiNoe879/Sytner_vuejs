<template>
  <v-layout>
    <div class="content-without-bg full-container">
      <div class="row">
        <div class="col-sm-3 search-panel">
          <div class="find-nearest-center">Find Nearest Center</div>
          <label for="" class="label col-sm-12">Enter Postcode</label>
          <input type="text" class="input col-sm-12" id="postcode" placeholder="" v-on:keyup.enter="filterLocations" v-model="postcode" />
          <button type="button" class="col-sm-12 mt-3" @click="getCurrentLocation">Use Current Location</button>
          <div class="mt-3 mb-3">
            <div class="col-sm-12 location mt-2 flex align-center" :class="getSelectedClass(location)" v-for="location of locationList" v-if="location.centre_name">
              <span @click="selectedLocation=location">{{location.centre_name}}</span>
              <div v-show="location==selectedLocation" class="close-icon" @click="selectedLocation=null">
                <i class="fas fa-times"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-9 map-panel" v-if="!selectedLocation && position">
          <GmapMap
            :center="position"
            :zoom="7"
            map-type-id="roadmap"
            style="width: 100%; height: 100vh"
          >
            <gmap-info-window :position="position" :opened="true">
              <div>
                {{ address }}
              </div>
              <!--div>
                {{ mapInfo.name }}
              </div-->
            </gmap-info-window>
            <GmapMarker
              :position="position"
              :clickable="true"
              :draggable="false"
              @click="center=position"
            />
          </GmapMap>
        </div>
        <div v-if="selectedLocation" class="col-sm-9 detail-panel">
          <div class="title col-sm-12">
            {{selectedLocation.centre_name}}
          </div>
          <hr />
          <div class="row">
            <div class="col-sm-6">
              <img :src="selectedLocation.image" width=325 height=226/>
            </div>
            <div class="row col-sm-6 text">
              <div class="col-sm-12">
                {{selectedLocation.addresses}}<br />
              </div>
              <div class="col-sm-12 text">
                <div>
                  <div class="icon"><img src="/static/images/phone.svg" /></div>{{selectedLocation.maintel}}
                </div>
                <div @click="openMap" style="cursor: pointer;">
                  <div class="icon"><img src="/static/images/map.svg" width="13" /></div>Map
                </div>
              </div>
            </div>
          </div>
          <div class="row mt-5">
            <div class="col-sm-6">
              <div class="sub-title">Sales</div>
              <hr />
              <div>
                <div class="icon"><img src="/static/images/phone.svg" /></div>{{selectedLocation.salestel}}
              </div>
              <div class="mt-3" v-if="selectedLocation.sales">
                <div v-for="day of Object.keys(selectedLocation.sales)" class="row col-sm-12">
                  <div class="col-sm-6">
                    {{day}}
                  </div>
                  <div class="col-sm-6">
                    <span v-if="selectedLocation.sales[day].start">
                      <span v-if="selectedLocation.sales[day].start.HH && selectedLocation.sales[day].start.mm">{{selectedLocation.sales[day].start.HH}}:{{selectedLocation.sales[day].start.mm}}</span>
                      <span v-else>Closed</span>
                    </span>
                    <span v-else>Closed</span>
                    -
                    <span v-if="selectedLocation.sales[day].close">
                      <span v-if="selectedLocation.sales[day].close.HH && selectedLocation.sales[day].close.mm">{{selectedLocation.sales[day].close.HH}}:{{selectedLocation.sales[day].close.mm}}</span>
                      <span v-else>Closed</span>
                    </span>
                    <span v-else>Closed</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="sub-title">Service</div>
              <hr />
              <div>
                <div class="icon"><img src="/static/images/phone.svg" /></div>{{selectedLocation.servicestel}}
              </div>
              <div class="mt-3" v-if="selectedLocation.services">
                <div v-for="day of Object.keys(selectedLocation.services)" class="row col-sm-12">
                  <div class="col-sm-6">
                    {{day}}
                  </div>
                  <div class="col-sm-6">
                    <span v-if="selectedLocation.services[day].start">
                      <span v-if="selectedLocation.services[day].start.HH && selectedLocation.services[day].start.mm">{{selectedLocation.services[day].start.HH}}:{{selectedLocation.services[day].start.mm}}</span>
                      <span v-else>Closed</span>
                    </span>
                    <span v-else>Closed</span>
                    -
                    <span v-if="selectedLocation.services[day].close">
                      <span v-if="selectedLocation.services[day].close.HH && selectedLocation.services[day].close.mm">{{selectedLocation.services[day].close.HH}}:{{selectedLocation.services[day].close.mm}}</span>
                      <span v-else>Closed</span>
                    </span>
                    <span v-else>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer :showTop="false" />
  </v-layout>
</template>

<style scoped>
  .search-panel {
    background: white;
    /*padding: 15px 15px 0 30px;*/
  }
  .map-panel {
    padding: 0 0 0 0;
  }
  .info-panel {
    width: 242px;
    height: 211px;
    background-color: #000000;
    opacity: 0.8;
  }
  .label {
    color: rgba(0, 0, 0, 0.5);
    font-size: 12px;
    font-weight: 400;
    padding-left: 0;
  }
  button {
    height: 39px;
    border: 1px solid #000000;
    background-color: #000000;
    color: white;
    font-size: 15px;
    font-weight: 700;
  }
  .location {
    height: 54px;
    background-color: #f2f2f2;
    cursor: pointer;
    font-size: 14px;
    font-weight: 400;
  }
  .find-nearest-center {
    font-size: 15px;
    font-weight: 400;
  }
  .selected {
     background-color: rgba(0, 0, 0, 0.4);
  }
  .input {
    height: 22px;
    border: 0px solid #707070;
    border-bottom: 1px solid #707070;
    outline: transparent;
    padding-left: 0;
    padding-right: 0;
    background: transparent;
  }
  .close-icon {
    position: absolute;
    right: 20px;
  }
  .detail-panel {
    background: white;
    padding-top: 20px;
    padding-right: 40px;
    padding-bottom: 20px;
    color: rgba(26, 26, 26, 0.85);
  }
  .detail-panel .title {
    font-family: 'club_bold', Arial, Helvetica, sans-serif;
    font-size: 20px;
    font-weight: 700;
  }
  .detail-panel .image {
    width: 325px;
    height: 226px;
  }
  .detail-panel .text {
    color: rgba(26, 26, 26, 0.85);
    font-size: 16px;
    font-weight: 400;
  }
  .detail-panel div.icon {
    float: left;
    margin-right: 20px;
  }
  .detail-panel .sub-title {
    color: #000000;
    font-family: 'club_bold', Arial, Helvetica, sans-serif;
    font-size: 15px;
    font-weight: 700;
  }
</style>
<script>
  /* ============
   * Locations Page
   * ============
   *
   * Page where the user can view the vehicle detail.
   */
  import { mapGetters, mapState } from 'vuex';
  import VLayout from '@/layouts/Default'
  import VCard from '@/components/Card'

  const _ = require('lodash');

  export default {
    /**
     * The name of the page.
     */
    name: 'locations',

    computed: {
      ...mapGetters({
        footer: 'getFooter',
      }),
      ...mapState({
				locations: state => state.models.locations,
        userInfo: state => state.account.user,
			})
    },

    data() {
      return {
        mapInfo: this.$store.getters.getMapInfo(),
        selectedLocation: null,
        position: null,
        address: null,
        postcode: null,
        locationList: null,
      };
    },

    mounted() {
      if ($('html').hasClass('fp-enabled')) {
        $.fn.fullpage.destroy('all')
      }
      this.$store.dispatch('setLocations');
      this.getCoordsFromAddress();
    },

    watch: {
      footer (newval, oldval) {
        this.getCoordsFromAddress();
      },
      userInfo (newval, oldval) {
        // this.getCoordsFromAddress();
      },
      locations (newval, oldval) {
        this.locationList = _.cloneDeep(newval);
      },
    },

    methods: {
      goBack() {
        this.$router.go(-1)
      },
      openMap() {
        if (this.selectedLocation.maplin) {
          window.open(this.selectedLocation.maplin, '_blank');
        }
      },
      getSelectedClass(location) {
        if (location === this.selectedLocation) {
          return 'selected';
        }
        return '';
      },
      getDistance(from, to) {
        return geolocator.calcDistance({
          from,
          to,
          formula: geolocator.DistanceFormula.HAVERSINE,
          unitSystem: geolocator.UnitSystem.METRIC
        });
      },
      getCurrentLocation() {
        const obj = this;
        const options = { enableHighAccuracy: true, timeout: 6000, maximumAge: 0 };
        const watcher = geolocator.watch(options, function (err, location) {
          console.log(err || location);
          if (!err) {
            const coords = location.coords;
            const locations = obj.locationList.map( element => {
              element.distance = obj.getDistance(coords, { latitude: obj.position.lat, longitude: obj.position.lng });
              return element;
            });
            
            function compare(a,b) {
              if (a.distance < b.distance)
                return -1;
              if (a.distance > b.distance)
                return 1;
              return 0;
            }
            locations.sort(compare);
            obj.locationList = locations;
          }
        });
        watcher.clear(300000);
      },
      filterLocations() {
        const obj = this;
        geolocator.geocode(this.postcode, function (err, location) {
          // console.log(err || location);
          if (!err) {
            const coords = location.coords;
            const locations = obj.locationList.map( element => {
              element.distance = obj.getDistance(coords, { latitude: obj.position.lat, longitude: obj.position.lng });
              return element;
            });
            
            function compare(a,b) {
              if (a.distance < b.distance)
                return -1;
              if (a.distance > b.distance)
                return 1;
              return 0;
            }
            locations.sort(compare);
            obj.locationList = locations;
          }
          // console.log(obj.locationList);
        });
      },
      getCoordsFromAddress() {
        if (this.footer) {
          const address = this.footer.contact.address1;
          this.address = address;
          // console.log(address);
          geolocator.config({
            language: "en",
            google: {
              version: "3",
              key: "AIzaSyATflxp_XojhEGY70jy_dybXHRSdK91OT0"
            }
          });
          const obj = this;
          geolocator.geocode(address, function (err, location) {
            console.log(err || location);
            if (!err) {
              const newAddress = location.coords;
              obj.position = {
                lat: parseFloat(newAddress.latitude),
                lng: parseFloat(newAddress.longitude),
              };
            }
          });
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
