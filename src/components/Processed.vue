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
        <md-empty-state
          class="md-primary"
          md-icon="done"
          md-label="Process Successfully Completed "
          md-description="Your Appointment is being Processed , Thanks!"
        ></md-empty-state>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
export default {
  name: "Processed"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  text-align: center;
}

.md-empty-state {
  display: inline-block;
  vertical-align: middle;
  margin-left: 16px;
}
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
