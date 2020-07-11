<template>
  <div class="page-container">
    <md-app>
      <md-app-toolbar class="md-primary">
        <span class="md-title">MY DASHBORD</span>
        <span class="space"></span>
        <span class="md-mail">E-mail</span>
      </md-app-toolbar>

      <md-app-drawer md-permanent="clipped">
        <md-list>
          <md-list-item>
            <md-icon>account_box</md-icon>
            <router-link to="/profile">
              <span class="md-list-item-text">Profile informations</span>
            </router-link>
          </md-list-item>

          <md-list-item>
            <md-icon>exposure</md-icon>
            <router-link to="/simulator">
              <span class="md-list-item-text">Simulator</span>
            </router-link>
          </md-list-item>

          <md-list-item>
            <md-icon>today</md-icon>
            <router-link to="/appointment">
              <span class="md-list-item-text">Make an appointment</span>
            </router-link>
          </md-list-item>

          <md-list-item>
            <md-icon>alarm</md-icon>
            <router-link to="/scheduled">
              <span class="md-list-item-text">My scheduled appointments</span>
            </router-link>
          </md-list-item>
          <md-list-item>
            <md-icon> meeting_room</md-icon>
            <router-link to="/">
              <span class="md-list-item-text">LogOut</span>
            </router-link>
          </md-list-item>
        </md-list>
      </md-app-drawer>
      <md-app-content>
        <div class="personal">
          <h2>My Personal informations</h2>
          <hr class="solid" />
          <h3>First Name</h3>
          <h4>{{ user.FirstName }}</h4>
          <h3>Last Name</h3>
          <h4>{{ user.LastName }}</h4>
          <h3>Username</h3>
          <h4>{{ user.UserName }}</h4>
          <h3>Occupation</h3>
          <h4>{{ user.Occupation }}</h4>
          <h3>State</h3>
          <h4>{{ user.State }}</h4>
          <h3>City</h3>
          <h4>{{ user.City }}</h4>
          <h3>Zip Code</h3>
          <h4>{{ user.ZipCode }}</h4>
          <md-button class="md-raised" :md-ripple="false">Edit</md-button>
          <md-button class="md-raised md-primary">Save</md-button>
        </div>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
export default {
  name: "ProfileInformations",
  data: () => ({
    user: {}
  }),
  created() {
    fetch("http://localhost:5050/user", {
      method: "GET",
      headers: { "content-type": "application/json" }
    })
      .then(response => response.json())
      .then(data => (this.user = data[data.length - 1]));
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.md-app {
  min-height: 350px;
  border: 1px solid rgba(#000, 0.12);
}

.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}
.md-mail {
  margin-left: 80%;
  font-size: 25px;
}
.personal {
  border: 2px solid black;
  height: 100%;
  text-align: center;
  margin: 3%;
  padding: 1%;
}
</style>
