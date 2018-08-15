<template>
  <header id="masthead" role="banner" style="position: absolute; top:0; width: 100%; z-index: 999999;">
    <div class="logos">
      <div class="sytner mob-hide">
        <router-link :to="{ path: '/' }">
          <span></span>
        </router-link>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 10" preserveAspectRatio="none">
          <polygon points="100 0 100 10 0 10" />
        </svg>
      </div>
      <div class="club_title">
        <router-link :to="{ path: '/' }">
          <!--<span class="mob-hide">{{header.title.title1}} </span>{{header.title.title2}}-->
          <span class="mob-hide">Audi </span>Club
        </router-link>
      </div>
      <div class="brand_logo">
        <router-link :to="{ path: '/' }">
          <span></span>
        </router-link>
      </div>
    </div>
    <div class="pos-f-t">
      <nav class="navbar" style="background-color: rgba(255, 255, 255, 0.70);">
        <span class="welcome">
          <span class="mob-hide">{{header.welcome.mob_hide}}</span>
          <span class="desktop-hide">{{header.welcome.desktop_hide}}</span>
        </span>
        <span class="mob-hide" v-bind:class="`news${news.id}`" v-for="news of header.news" :key="news.id">{{news.title}}</span>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent"
          aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
          <svg>
            <polygon points="20,0 20,41 0,41" />
          </svg>
          <div class="menu-word mob-hide">MENU&nbsp;</div>
          <div class="menu-icon">
            <img src="/static/images/menu_icon.svg" alt="menu" />
          </div>
        </button>
        <div class="collapse" id="navbarToggleExternalContent">
          <span v-for="menu in header.menus" class="menu-item" :key="menu.id">
            <router-link :to="{ name: menu.routerName}" >
              <a >
                {{menu.name}} </a>
            </router-link>
          </span>
          <span v-if="links">
            <span class="menu-item logout-item" v-if="links['news']"><a :href="links['news'].href" target="_blank">{{links['news'].title}}</a></span>
          </span>
          <span class="menu-item">
            <router-link :to="{ name: 'home.vehicle.locations' }" >
                <a>
                  Locations
                </a>
            </router-link>
          </span>
          <span v-if="links">
            <span class="menu-item logout-item" v-if="links['connect']"><a :href="links['connect'].href" target="_blank">{{links['connect'].title}}</a></span>
          </span>
          <!--span class="menu-item logout-item" v-for="elink in elinks" v-if="elink.name=='news' || elink.name=='connect'"><a :href="elink['href']">{{elink.title}}</a></span-->
          <span class="menu-item profile" v-if="authenticated"><router-link :to="{ path: '/account'}" ></router-link></span>
          <span class="menu-item profile" v-else><router-link :to="{ path: '/login'}" ></router-link></span>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped>
  .logout-item {
    cursor: pointer;
    color: white;
  }
</style>

<script>
  import { mapGetters } from 'vuex';
  export default {
    computed: {
      ...mapGetters({
        header: 'getHeader',
        authenticated: 'auth/getAuthenticated',
        elinks: 'getELinks',
      })
    },
    data () {
      return {
        // header: this.$store.getters.getHeader(),
        links: {
          news: null,
          connect: null,
        },
      }
    },
    methods: {
      gotoLogin() {
        this.$router.push('/login');
      },
      logout() {
        this.$store.dispatch('auth/logout');
      },
    },
    mounted() {
      this.$store.dispatch('setELinks');
    },
    watch: {
      elinks (newval, oldval) {
        for (const el of newval) {
          const item = el;
          if (el.name === 'news') {
            this.links['news'] = el;
          } else if (el.name === 'connect') {
            this.links['connect'] = el;
          }
        }
      }
    },
  }
</script>