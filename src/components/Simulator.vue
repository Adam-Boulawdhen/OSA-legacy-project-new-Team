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
          <h2>My Simulator</h2>
          <hr class="solid" />
          <div class="md-layout md-gutter">
            <div class="md-layout-item">
              <md-field>
                <label for="loanType">Loan Type</label>
                <md-select
                  v-model="loanType"
                  name="loanType"
                  id="loanType"
                  class="styleInput"
                >
                  <md-option value="car">Car</md-option>
                  <md-option value="home">Home</md-option>
                  <md-option value="studies">Studies</md-option>
                </md-select>
              </md-field>
            </div>
            <br />
            <div class="md-layout-item">
              <md-field>
                <label for="numOfYears">Number Of Years</label>
                <md-select
                  v-model="numOfYears"
                  name="numOfYears"
                  id="numOfYears"
                  class="styleInput"
                >
                  <md-option value="1">1</md-option>
                  <md-option value="2">2</md-option>
                  <md-option value="3">3</md-option>
                  <md-option value="4">4</md-option>
                  <md-option value="5">5</md-option>
                  <md-option value="6">6</md-option>
                </md-select>
              </md-field>
            </div>
            <br />
            <div class="md-layout-item">
              <md-field>
                <label>Amount</label>
                <md-input
                  v-model="amount"
                  class="styleInput"
                  type="number"
                  min="10000"
                  max="60000"
                  step="1000"
                ></md-input>
              </md-field>
            </div>
            <br />
            <div class="md-layout-item">
              <md-field>
                <label for="frequency">Repayment Frequency</label>
                <md-select
                  v-model="frequency"
                  name="frequency"
                  id="frequency"
                  class="styleInput"
                >
                  <md-option value="monthly">Monthly</md-option>
                  <md-option value="per quarter">Per Quarter</md-option>
                  <md-option value="per semester">Per Semester</md-option>
                  <md-option value="yearly">Yearly</md-option>
                </md-select>
              </md-field>
            </div>
          </div>
          <router-link to="/result">
            <md-button class="md-primary md-raised" @click="submit"
              >Calculate</md-button
            >
          </router-link>
        </div>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
export default {
  name: "Simulator",
  data: () => ({
    numOfYears: "",
    loanType: "",
    amount: "",
    frequency: "",
    rate: "",
    deadlines: ""
  }),
  methods: {
    submit() {
      const obj = {
        loanType: this.loanType,
        numOfYears: this.numOfYears,
        amount: this.amount,
        frequency: this.frequency,
        rate: this.rate,
        deadlines: this.deadlines
      };
      fetch("http://localhost:5050/simulator", {
        method: "POST",
        body: JSON.stringify(obj),
        headers: { "content-type": "application/json" }
      });
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
</style>
