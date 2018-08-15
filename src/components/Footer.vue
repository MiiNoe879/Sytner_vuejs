<template>
  <footer class="row home" v-if="footer">
    <div style="width:100%;">
      <div class="row">
        <div class="col-sm-12" v-show="showTop">
          <div class="top">
            <a href="#firstPage" class="section_nav">
              <span class="arrow-up"></span> Top</a>
          </div>
        </div>
        <div class="col-sm-12" v-show="!showTop">
          <div class="legal"></div>
        </div>
        <div class="col-sm-6">
          <div class="contact" v-if="footer.contact">
            <h2>{{footer.contact.centre_name}}</h2>
            {{footer.contact.address1}}
            <br>{{footer.contact.phone}}
          </div> 
        </div>
        <div class="col-sm-6">
          <div class="social">
            <span>
              Follow, like or subscribe <br class="hide"/>to Sytner Audi:
            </span>
            <a href="https://www.facebook.com/sytneraudi" target="_blank" class="facebook" title="Facebook"></a>
            <a href="https://instagram.com/sytneraudi" target="_blank" class="instagram" title="Instagram"></a>
            <a href="https://twitter.com/SytnerAudi" target="_blank" class="twitter" title="Twitter"></a>
            <a href="https://www.youtube.com/channel/UCjhDOAjLXJ_nqukxG6-6bPw" target="_blank" class="youtube" title="YouTube"></a>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12">
          <div class="legal" v-html="footer.legal"></div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  import { mapGetters, mapState } from 'vuex';
  const _ = require('lodash');

  export default {
    computed: {
      ...mapGetters({
        footer: 'getFooter',
      }),
      ...mapState({
        userInfo: state => state.account.user,
			})
    },
    watch: {
      userInfo (newval, oldval) {
        this.$store.dispatch('setHomePageData', newval.username);
      },
    },
    data () {
      return {
        // footer: this.$store.getters.getFooter(),
        address: null,
        telephone: null,
        centre_name: null,
      }
    },
    props: {
      showTop: {
        type: Boolean,
        default: false,
      },
    },
    methods: {
    },
    mounted() {
    },
  }

</script>
