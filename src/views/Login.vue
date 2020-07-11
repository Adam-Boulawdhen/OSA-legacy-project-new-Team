<template>
  <div class="wrapper">
    <div class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-33 md-small-size-66 md-xsmall-size-100 md-medium-size-40 mx-auto"
          >
            <login-card header-color="primary">
              <h4 slot="title" class="card-title">Login</h4>
              <md-button
                slot="buttons"
                href="javascript:void(0)"
                class="md-just-icon md-simple md-white"
              >
                <i class="fab fa-facebook-square"></i>
              </md-button>
              <md-button
                slot="buttons"
                href="javascript:void(0)"
                class="md-just-icon md-simple md-white"
              >
                <i class="fab fa-twitter"></i>
              </md-button>
              <md-button
                slot="buttons"
                href="javascript:void(0)"
                class="md-just-icon md-simple md-white"
              >
                <i class="fab fa-google-plus-g"></i>
              </md-button>

              <md-field class="md-form-group" slot="inputs">
                <md-icon>verified_user</md-icon>
                <label>userName...</label>
                <md-input v-model="userLogin.userName" type="userName"></md-input>
              </md-field>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>lock_outline</md-icon>
                <label>Password...</label>
                <md-input v-model="userLogin.password"></md-input>
                <div class="text-danger">{{ msg }}</div>
              </md-field>
              <md-button v-on:click="loginButton" slot="footer" class="md-simple md-primary md-lg">
                <router-link :to="this.userRole">Get Started</router-link>
              </md-button>
            </login-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { LoginCard } from "@/components";
export default {
  components: {
    LoginCard
  },
  bodyClass: "login-page",
  data() {
    return {
      msg: "",
      userRole: "",
      userLogin: {
        userName: "",
        password: ""
      }
    };
  },
  props: {
    header: {
      type: String,
      default: require("@/assets/img/bg7.jpg")
    }
  },
  methods: {
    confirmRouter(role) {
      if (role === "Admin") {
        this.userRole = "/AdminInterface";
      } else if (role === "User") {
        this.userRole = "/profile";
      } else {
        this.msg = "Wrong password";
      }
    },
    async loginButton() {
      console.log(this.userLogin);
      await fetch("http://localhost:5050/loginCheck", {
        method: "POST",
        body: JSON.stringify(this.userLogin),
        headers: { "Content-Type": "application/json" }
      })
        .then(response => response.json())
        .then(async data => {
          console.log(data);
          await this.confirmRouter(data);
        })
        .catch(err => console.log(err));
      localeStorage.set({ userName: this.userLogin.userName });
      this.$router.push(this.userRole);
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  }
};
</script>

<style lang="css">
.msg {
  text-align: center;
  color: red;
}
</style>
