<template>
  <v-layout>
    <div class="skip">
      <a href="#secondPage" class="section_nav">Skip
        <span class="arrow-down"></span>
      </a>
    </div>
    <div class="section" id="section0">
      <div id="simple_second_carousel" class="carousel simple_second_carousel_fade animate_text simple_second_carousel_wrapper responsive-fix row"
        data-ride="carousel" data-interval="6000" data-pause="hover">

        <!--========= Indicators =========-->
        <ol class="carousel-indicators simple_second_carousel_indicators">
          <li data-target="#simple_second_carousel" v-for="(slider, index) in home.slider" v-bind:class="index==0 ? 'active' : ''" v-bind:data-slide-to="index" :key="slider.id"></li>
        </ol>

        <!-- ========= Wrapper for slides  =========-->
        <div class="carousel-inner img-fix" role="listbox">
          <div class="item text-fix" v-bind:class="index==0 ? 'active' : ''" v-for="(slider, index) in home.slider" :key="slider.id">
            <img class="img-fix" v-bind:src="`/static/images/${slider.image}`" alt="slider.alt" />
            <div class="carousel-caption simple_second_carousel_caption">
              <h2 v-bind:class="`grid-tile__title slider${slider.id}`">{{slider.title}}</h2>
              <p v-bind:class="`text-description slider${slider.id}`" data-animation="animated fadeInUp">{{slider.sub_title}}</p>
            </div>
          </div>
          
        </div>

      </div>
      <!--*-*-*-*-*-*-*-*-*-*- END BOOTSTRAP CAROUSEL *-*-*-*-*-*-*-*-*-*-->
    </div>
    <div class="section" id="section1" style="background-color: #000;">
      <div class="row one" style="height: 50%;">
        <div class="next">
          <a href="#thirdPage" class="section_nav">Next</a>
        </div>
        <div class="col-sm-4" v-for="row of home.section1.row1">
          <a v-if="isExternalLink(row.href)" :href="row.href" class="grid-tile__link grid-tile__link--hasHover dark" v-bind:style="row.href_style" target="_blank">
            <section class="grid-tile__text-wrapper" v-bind:class="row.section_class">
              <div class="grid-tile__text">
                <h2 class="grid-tile__title" v-bind:style="row.h2_style">{{row.title}}</h2>
                <p class="grid-tile__description">
                  <img v-bind:src="`/static/images/${row.image1}`" alt="smile">{{row.description}}</p>
              </div>
            </section>
            <picture style="opacity: 1;" v-if="row.image2">
              <source v-bind:srcset="getImage(row.image2)" media="(max-width: 767px)">
              <img v-bind:class="row.image_class ? row.image_class : 'grid-tile__image'" v-bind:src="getImage(row.image2)" alt="offers" v-bind:style="row.img_style">
            </picture>
          </a>
          <router-link v-else :to="{ path: row.href }" class="grid-tile__link grid-tile__link--hasHover dark" v-bind:style="row.href_style">
            <section class="grid-tile__text-wrapper" v-bind:class="row.section_class">
              <div class="grid-tile__text">
                <h2 class="grid-tile__title" v-bind:style="row.h2_style">{{row.title}}</h2>
                <p class="grid-tile__description">
                  <img v-bind:src="`/static/images/${row.image1}`" alt="smile">{{row.description}}</p>
              </div>
            </section>
            <picture style="opacity: 1;" v-if="row.image2">
              <source v-bind:srcset="getImage(row.image2)" media="(max-width: 767px)">
              <img v-bind:class="row.image_class ? row.image_class : 'grid-tile__image'" v-bind:src="getImage(row.image2)" alt="offers" v-bind:style="row.img_style">
            </picture>
          </router-link>
        </div>
      </div>
      <div class="row two" style="height: 50%;">
        <div class="col-sm-6" v-for="row of home.section1.row2">
          <router-link :to="{ path: row.href }" class="grid-tile__link grid-tile__link--hasHover" v-bind:class="row.section_class">
            <section class="grid-tile__text-wrapper" v-bind:class="row.section_class">
              <div class="grid-tile__text">
                <h2 class="grid-tile__title" v-bind:style="row.h2_style">{{row.title}}</h2>
                <p class="grid-tile__description">
                  <img v-bind:src="`/static/images/${row.image1}`" alt="car key">{{row.description}}</p>
              </div>
            </section>
            <picture style="opacity: 1;">
              <source v-bind:srcset="`/static/images/${row.image2}`" media="(max-width: 767px)">
              <img class="grid-tile__image" v-bind:src="`/static/images/${row.image2}`" alt="offers" v-bind:style="row.img_style">
            </picture>
          </router-link>
        </div>
      </div>
    </div>
    <div class="section" id="section2" style="background-color: #000;">
      <div class="row one" style="height: 50%;">
        <div class="next">
          <a href="#fourthPage" class="section_nav">Next</a>
        </div>
        <div class="col-sm-6" v-for="row of home.section2.row1">
          <router-link :to="{ path: row.href }" class="grid-tile__link grid-tile__link--hasHover" v-bind:class="row.section_class">
            <section class="grid-tile__text-wrapper" v-bind:class="row.section_class">
              <div class="grid-tile__text">
                <h2 class="grid-tile__title" v-bind:style="row.h2_style">{{row.title}}</h2>
                <p class="grid-tile__description">
                   <img v-bind:src="`/static/images/${row.image1}`" alt="car key">{{row.description}}</p>
              </div>
            </section>
            <picture style="opacity: 1;">
              <source v-bind:srcset="`/static/images/${row.image2}`" media="(max-width: 767px)">
              <img class="grid-tile__image" v-bind:src="`/static/images/${row.image2}`" alt="offers" v-bind:style="row.img_style"> </picture>
          </router-link>
        </div>
      </div>
      <div class="row two" style="height: 50%;">
        <div class="col-sm-4" v-for="row of home.section2.row2">
          <router-link :to="{ path: row.href }" class="grid-tile__link grid-tile__link--hasHover" v-bind:style="row.href_style" v-bind:class="row.a_class" replace>
            <section class="grid-tile__text-wrapper" v-bind:class="row.section_class">
              <div class="grid-tile__text">
                <h2 class="grid-tile__title" v-bind:style="row.h2_style">{{row.title}}</h2>
                <p class="grid-tile__description">
                  <img v-bind:src="`/static/images/${row.image1}`" alt="smile">{{row.description}}</p>
              </div>
            </section>
            <picture style="opacity: 1;" v-if="row.image2">
              <source v-bind:srcset="`/static/images/${row.image2}`" media="(max-width: 767px)">
              <img class="grid-tile__image" v-bind:class="row.image_class" v-bind:src="`/static/images/${row.image2}`" v-bind:style="row.img_style"> </picture>
          </router-link>
        </div>
      </div>
    </div>
    <div class="section" id="section3">
      <div class="row one">
        <div class="col-sm-6" v-for="(row, index) of home.section3.row1">
          <a :href="row.href" class="grid-tile__link grid-tile__link--hasHover" v-bind:style="row.href_style" v-bind:class="row.a_class" replace target="_blank">
            <section class="grid-tile__text-wrapper" v-bind:class="row.section_class">
              <div class="grid-tile__text">
                <h2 class="grid-tile__title" v-bind:style="row.h2_style">{{row.title}}</h2>
                <p class="grid-tile__description">
                   <img v-bind:src="`/static/images/${row.image1}`" alt="car key">{{row.description}}</p>
              </div>
            </section>
            <picture style="opacity: 1;">
              <source v-bind:srcset="`/static/images/${row.image2}`" media="(max-width: 767px)">
              <img class="grid-tile__image" v-bind:src="`/static/images/${row.image2}`" alt="offers" v-bind:style="row.img_style"> </picture>
          </a>
        </div>
      </div>
      <Footer :showTop="true"/>
    </div>
  </v-layout>
</template>

<script>
  /* ============
   * Home Index Page
   * ============
   *
   * The home index page.
   */
  /* eslint-disable */

  import { mapGetters, mapState } from 'vuex';
  import VLayout from '@/layouts/Default';
  import VCard from '@/components/Card';

  const _ = require('lodash');

  export default {
    name: 'home-index',
    computed: {
      ...mapGetters({
        elinks: 'getELinks',
      }),
      ...mapState({
        locations: state => state.models.locations,
        userInfo: state => state.account.user,
        home: state => state.models.home,
			})
    },
    data() {
      return {
      };
    },
    created() {
      // this.bgc.backgroundColor = 'red';
    },
    mounted() {
      // this.$store.dispatch('setLocations');
    },
    methods: {
      changeBgc(brand) {
        this.$router.push({ name: 'home.index', params: { brand: brand } })
        // this.$store.models.styles.Skoda.backgroundColor = '#17a2b8';
        this.$store.dispatch(
        {
          type: 'changeAdminStyle',
          brand: brand,
        })
      },
      getImage(image) {
        if(image.startsWith('http')) {
          return image;
        }
        return `/static/images/${image}`;
      },
      isExternalLink(href) {
        if (href) {
          if(href.startsWith('http')) {
            return true;
          }
          return false;
        }
        return false;
      },
      fullpage() {
        $('.carousel').carousel();
        if (!$('html').hasClass('fp-enabled')) {
          let deleteLog = false;
          $('#fullpage').fullpage({
            responsiveWidth: 900,
            afterResponsive: function (isResponsive) {},
            anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
            menu: '#menu',
            onLeave: function (index, nextIndex, direction) {
              if (deleteLog) {
                $('#callbacksDiv').html('');
              }
              $('#callbacksDiv').append('<p>onLeave - index:' + index + ' nextIndex:' + nextIndex + ' direction:' + direction + '</p>')
              console.log("onLeave--" + "index: " + index + " nextIndex: " + nextIndex + " direction: " + direction);
            },
            onSlideLeave: function (anchorLink, index, slideIndex, direction, nextSlideIndex) {
              if (deleteLog) {
                $('#callbacksDiv').html('');
              }
              $('#callbacksDiv').append('<p>onSlideLeave - anchorLink:' + anchorLink + " index:" + index + " slideIndex:" + slideIndex + " direction:" + direction + " nextSlideIndex:" + nextSlideIndex + '</p>');
              console.log("onSlideLeave--" + "anchorLink: " + anchorLink + " index: " + index + " slideIndex: " + slideIndex + " direction: " + direction);
            },
            afterRender: function () {
              $('#callbacksDiv').append('<p>afterRender</p>');
              console.log("afterRender");
            },
            afterResize: function () {
              $('#callbacksDiv').append('<p>afterResize</p>');
              console.log("afterResize");
            },
            afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {
              $('#callbacksDiv').append('<p>afterSlideLoad - anchorLink:' + anchorLink + " index:" + index + " slideAnchor:" + slideAnchor + " slideIndex:" + slideIndex + '</p>');
              deleteLog = true;
              console.log("afterSlideLoad--" + "anchorLink: " + anchorLink + " index: " + index + " slideAnchor: " + slideAnchor + " slideIndex: " + slideIndex);
              console.log("----------------");
            },
            afterLoad: function (anchorLink, index) {
              console.log("after Load  " + index);
              $('#callbacksDiv').append('<p>afterLoad - anchorLink:' + anchorLink + " index:" + index + '</p>');
              deleteLog = true;
              console.log('===============');
              console.log("afterLoad--" + "anchorLink: " + anchorLink + " index: " + index);
            }
          });
        }
      },
      updateHOB() {
        if (this.userInfo) {
          const newlocations = _.cloneDeep(this.locations);
          const obj = newlocations.filter(item => item.hob == this.userInfo.preferedDealer);
          if (obj.length > 0) {
            const data = {
              manager_title: obj[0].manager_title,
              manager_name: `${obj[0].hob} welcomes you to Audi North wales`,
              image2: obj[0].hob_photo,
              href: obj[0].hob_link,
            };
            this.$store.dispatch('updateSection1Row1', data);
          }
        }
      },
    },
    watch: {
      elinks (newval, oldval) {
        if (oldval === null) {
          setTimeout(() => {
            this.fullpage();
          }, 100);
        } else {
          this.fullpage();
        }
      },
      locations (newval, oldval) {
      },
      userInfo (newval, oldval) {
        this.$store.dispatch('setHomePageData', newval.username);
      },
    },
    components: {
      VLayout,
      VCard,
    },
  };
</script>
