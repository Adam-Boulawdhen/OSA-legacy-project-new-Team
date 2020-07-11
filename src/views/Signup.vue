<template>
  <div class="wrapper">
    <div class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-33 md-small-size-66 md-xsmall-size-100 md-medium-size-40 mx-auto"
          >
            <login-card header-color="primary">
              <h4 slot="title" class="card-title">Sign-Up</h4>
              <md-button
                slot="buttons"
                href="https://www.facebook.com/groups/NASA.SCIENCE"
                class="md-just-icon md-simple md-white"
              >
                <i class="fab fa-facebook-square"></i>
              </md-button>
              <md-button
                slot="buttons"
                href="https://twitter.com/NASASTEM"
                class="md-just-icon md-simple md-white"
              >
                <i class="fab fa-twitter"></i>
              </md-button>
              <md-button
                slot="buttons"
                href="https://www.nasa.gov/about/contact/index.html"
                class="md-just-icon md-simple md-white"
              >
                <i class="fab fa-google-plus-g"></i>
              </md-button>

              <md-field class="md-form-group" slot="inputs">
                <md-icon>verified_user</md-icon>
                <label>userName...</label>
                <md-input v-model="newUser.userName"></md-input>
              </md-field>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>email</md-icon>
                <label>Email...</label>
                <md-input v-model="newUser.email" type="email"></md-input>
              </md-field>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>lock_outline</md-icon>
                <label>Confirm Password...</label>
                <md-input v-model="newUser.password"></md-input>
              </md-field>

              <md-button
                v-on:click="addUser"
                slot="footer"
                class="md-simple md-primary md-lg"
              >
                <router-link to="/userform">
                  Get Started
                </router-link>
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
      newUser: {
        userName: "",
        email: "",
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
    addUser() {
      // console.log(this.newUser);
      fetch("http://localhost:5050/newUserCreation", {
        method: "post",
        body: JSON.stringify(this.newUser),
        headers: { "Content-Type": "application/json" }
      })
        .then(data => {
          return data.json();
        })
        .catch(err => console.log(err));
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

<style lang="css"></style>
