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
          <h2>Simulation Result</h2>
          <hr class="solid" />
          <md-content>
            <div>
              <md-table v-model="people" md-card @md-selected="onSelect">
                <!-- <md-table-toolbar>
                  <h1 class="md-title"></h1>
                </md-table-toolbar> -->

                <md-table-toolbar
                  slot="md-table-alternate-header"
                  slot-scope="{ count }"
                >
                  <div class="md-toolbar-section-start">
                    {{ getAlternateLabel(count) }}
                  </div>

                  <div class="md-toolbar-section-end">
                    <md-button class="md-icon-button">
                      <md-icon>delete</md-icon>
                    </md-button>
                  </div>
                </md-table-toolbar>
                <md-table-row>
                  <md-table-head>Amount</md-table-head>
                  <md-table-head>Repayment Period</md-table-head>
                  <md-table-head>Number Of Years</md-table-head>
                  <md-table-head>Rate</md-table-head>
                  <md-table-head>Deadlines</md-table-head>
                  <md-table-head>Delete</md-table-head>
                </md-table-row>
                <md-table-row
                  v-for="(element, index) in total"
                  v-bind:key="element"
                  slot="md-table-row"
                  md-selectable="multiple"
                  md-auto-select
                >
                  <md-table-cell>{{ element.amount }}</md-table-cell>
                  <md-table-cell>{{ element.frequency }}</md-table-cell>
                  <md-table-cell>{{ element.numOfYears }}</md-table-cell>
                  <md-table-cell>{{ element.rate }}%</md-table-cell>
                  <md-table-cell>{{
                    (element.amount + (element.amount / 100) * element.rate) /
                      element.deadlines
                  }}</md-table-cell>
                  <md-table-cell
                    ><span @click="remove(index)"
                      ><md-icon>delete</md-icon></span
                    ></md-table-cell
                  >
                </md-table-row>
              </md-table>
            </div>
          </md-content>
        </div>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
// import axios from "axios";

export default {
  name: "SimulationResult",
  data: () => ({
    total: [],
    selected: ""
  }),
  created() {
    fetch("http://localhost:5050/simulationResult", {
      method: "GET",
      headers: { "content-type": "application/json" }
    })
      .then(response => response.json())
      .then(data => (this.total = data));
  },
  methods: {
    remove(index) {
      var obj = { index: index };
      fetch("http://localhost:5050/remove", {
        method: "POST",
        body: JSON.stringify(obj),
        headers: { "content-type": "application/json" }
      })
        .then(response => response.json())
        .then(data => (this.total = data));
    },
    onSelect(total) {
      this.selected = total;
    },
    getAlternateLabel(count) {
      let plural = "";
      if (count > 1) {
        plural = "s";
      }
      return `${count} simulation${plural} selected`;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.personal {
  border: 2px solid black;
  height: 100%;
  text-align: center;
  margin: 3%;
  padding: 1%;
}
.md-layout-item {
  display: block;
}

.md-table + .md-table {
  margin-top: 16px;
}

h3 {
  display: inline-block;
  margin: 30px;
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
