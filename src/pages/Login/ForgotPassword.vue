<template>
  <v-layout>
    <div class="content">
      <div class="row">
        <div class="login">
          <div class="title">Welcome to</div>
          <div class="title mb-3">Audi Club</div>
          <form data-toggle="validator" role="form" id="loginFrm">
            <div class="form-group">
              <label for="email">Please Enter your Email address</label>
              <input type="text" class="form-control" id="email" placeholder="Email" v-model="user.email" data-error="this field is required" required>
              <div class="help-block with-errors"></div>
            </div>
            <div v-if="!authResult" class="form-group error">
              Email does not exist!
            </div>
            <div class="button-area">
              <button type="button" class="btn btn-success col" @click="forgotPassword" v-if="!loading">Submit</button>
              <div v-if="loading">
                <i class="fa fa-spinner fa-spin" style="font-size:24px"></i>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer :showTop="false" />
    </div>
  </v-layout>
</template>
<style scoped>
  .login {
    background: url(/static/images/login-bg.png) center center no-repeat;
    background-size: cover;
    width: 100vw;
    height: 52vw;
    min-height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .login .title {
    width: 225px;
    color: #ffffff;
    font-size: 28px;
    font-weight: 700;
    font-family: 'club_bold', Arial, Helvetica, sans-serif;
    text-align: center;
  }
  .login form {
    width: 450px;
    height: 376px;
    background-color: #ffffff;
    opacity: 0.9;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .login form div:nth-child(2) {
    margin-top: 10px;
  }
  .login form div.button-area {
    margin-top: 31px;
  }
  .login form div.link {
    margin-top: 31px;
    text-align: left;
  }
  .login form div label {
    color: rgba(0, 0, 0, 0.5);
    font-size: 17px;
    font-weight: 400;
  }
  .login form div input {
    margin-top: 5px;
    width: 315px;
    height: 31px;
    border: 0;
    border-bottom: 1px solid #707070;
    background-color: #ffffff;
    border-radius: 0;
  }
  .login form div button {
    width: 315px;
    height: 59px;
    border: 1px solid #000000;
    border-radius: 0;
    background-color: #000000;
    color: #ffffff;
    font-size: 21px;
    font-weight: 700;
  }
  .login form div.link {
    width: 315px;
    height: 21px;
    color: rgba(0, 0, 0, 0.5);
    font-size: 17px;
    font-weight: 400;
    cursor: pointer;
  }
  .has-danger .form-control {
    border-color: #d9534f;
  }
  .login form div.help-block {
    margin-top: 0 !important;
    color: red;
  }
  .login form div.error {
    color: red;
    margin-top: 20px;
  }
</style>
<script>
  /* ============
   * Login Index Page
   * ============
   *
   * Page where the user can login.
   */

  // import VLayout from '@/layouts/Minimal';
  import { mapGetters, mapActions } from 'vuex';
  import VLayout from '@/layouts/Default';
  import VCard from '@/components/Card';

  export default {
    /**
     * The name of the page.
     */
    name: 'forgot-password',
    computed: {
      ...mapGetters({
        header: 'getHeader',
        authResult: 'auth/getAuthResult',
        loading: 'getLoading',
      })
    },
    /**
     * The data that can be used by the page.
     *
     * @returns {Object} The view-model data.
     */
    data() {
      return {
        user: {
          email: null,
        },
        // header: this.$store.getters.getHeader(),
      };
    },

    mounted() {
      if ($('html').hasClass('fp-enabled')) {
        $.fn.fullpage.destroy('all');
      }
      this.$store.dispatch('auth/setAuthResult', true);
      $('#loginFrm').validator();
      $('.pos-f-t').hide();
    },

    beforeDestroy() {
      $('.pos-f-t').show();
    },

    /**
     * The methods the page can use.
     */
    methods: {
      keymonitor: function(event) {
        if (event.key == "Enter") {
          this.forgotPassword();
        }
      },
      forgotPassword() {
        this.$store.dispatch('auth/setAuthResult', true);
        if (this.user.email) {
          this.$store.dispatch('auth/forgotPassword', this.user.email);
        }
      },
    },

    /**
     * The components the page can use.
     */
    components: {
      VLayout,
      VCard,
    },
  };
</script>
