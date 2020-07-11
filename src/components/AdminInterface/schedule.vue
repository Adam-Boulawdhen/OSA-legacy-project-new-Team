<template>
  <div>
    <div id="scheduleBoard">
      <b-row class="d-flex flex-column justify-content-center ">
        <b-col md="auto">
          <b-calendar
            v-model="value"
            @context="onContext"
            locale="en-US"
          ></b-calendar>
        </b-col>
        <b-col> </b-col>
      </b-row>
    </div>
    <p>
      Value:
      <b>'{{ value }}'</b>
    </p>
    <b-button v-on:click="addDate">add dates</b-button>
    <b-list-group>
      <b-list-group-item
        v-on:dblclick="deleteInterview(date)"
        class="dateElem"
        v-for="(date, index) in dates"
        v-bind:key="index"
      >
        <b-avatar variant="primary" text class="align-baseline"></b-avatar>
        date : {{ date.date }} on : {{ date.time }} in {{ date.place }}
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  async created() {
    await fetch("http://localhost:5050/scheduled", {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    })
      .then(response => {
        return response.json();
      })
      .then(data => (this.dates = data))
      .catch(err => console.log(err));
    // console.log(this.dates);
  },
  data() {
    return {
      value: "",
      dates: []
    };
  },
  methods: {
    addDate() {
      var data = this.value;
      if (data.length === 0) {
        alert("pick a date!!");
        return;
      } else {
        fetch("http://localhost:5050/setSchedule", {
          method: "POST",
          body: JSON.stringify({ data }),
          headers: { "Content-Type": "application/json" }
        })
          .then(data => {
            return this.dates.push(data.json());
          })
          .catch(err => console.log(err));
      }
      this.value = "";
    },
    deleteInterview(date) {
      fetch("http://localhost:5050/deleteAppointements", {
        method: "POST",
        body: JSON.stringify({ date }),
        headers: { "Content-Type": "application/json" }
      }).catch(err => console.log(err));
      this.dates.splice(this.dates.indexOf(date), 1);
    }
  }
};
</script>

<style>
.dateElem {
  margin-top: 10px;
}
.align-baseline:hover {
  cursor: pointer;
}
.dateElem:hover {
  cursor: pointer;
}
#scheduleBoard {
  float: none;
  margin: 0 auto;
  width: 600px;
}
</style>
