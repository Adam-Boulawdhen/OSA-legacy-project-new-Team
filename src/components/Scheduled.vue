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
          <h2>My Appointments</h2>
          <hr class="solid" />
          <div>
            <md-table md-card>
              <!-- <md-table-toolbar>
                <h1 class="md-title">Users</h1>
              </md-table-toolbar> -->

              <md-table-row>
                <md-table-head>Date</md-table-head>
                <md-table-head>Time</md-table-head>
                <md-table-head>Office</md-table-head>
                <md-table-head>Delete</md-table-head>
              </md-table-row>

              <md-table-row
                v-for="(element, index) in total"
                v-bind:key="element"
              >
                <md-table-cell>{{ element.date }}</md-table-cell>
                <md-table-cell>{{ element.time }}</md-table-cell>
                <md-table-cell>{{ element.place }}</md-table-cell>
                <md-table-cell
                  ><span @click="remove1(index)"
                    ><md-icon>delete</md-icon></span
                  ></md-table-cell
                >
              </md-table-row>
            </md-table>
          </div>
        </div>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
export default {
  name: "Scheduled",
  data: () => ({
    id: 0,
    total: []
  }),
  created() {
    fetch("http://localhost:5050/scheduled", {
      method: "GET",
      headers: { "content-type": "application/json" }
    })
      .then(response => response.json())
      .then(data => (this.total = data));
  },
  methods: {
    remove1(index) {
      var obj = { index: index };
      fetch("http://localhost:5050/remove1", {
        method: "POST",
        body: JSON.stringify(obj),
        headers: { "content-type": "application/json" }
      })
        .then(response => response.json())
        .then(data => (this.total = data));
    }
  }
};
</script>

<style scoped>
.personal {
  border: 2px solid black;
  height: 150%;
  text-align: center;
  margin: 3%;
  padding: 1%;
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
span {
  cursor: pointer;
}
</style>
