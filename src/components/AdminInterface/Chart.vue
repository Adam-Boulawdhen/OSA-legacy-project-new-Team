<template>
  <mdb-container>
    <mdb-bar-chart
      :data="barChartData"
      :options="barChartOptions"
      :width="600"
      :height="300"
    ></mdb-bar-chart>
  </mdb-container>
</template>

<script>
import { mdbBarChart, mdbContainer } from "mdbvue";
export default {
  name: "ChartPage",
  components: {
    mdbBarChart,
    mdbContainer
  },
  async created() {
    await fetch("http://localhost:5050/apiData", {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.apiData = data;
        this.keys = Object.keys(data);
        // console.log(this.keys);
        // console.log(this.apiData);
      })
      .catch(err => console.log(err));
    await this.getRandomData();
  },
  methods: {
    getRandomData() {
      const keys = this.keys;
      // const apiData = this.apiData;
      // console.log(keys[Math.floor(Math.random() * Math.floor(45))]);
      // console.log(this.apiData);
      for (var i = 0; i < 6; i++) {
        var random = Math.floor(Math.random() * Math.floor(45));
        this.randomData.push(keys[random]);
      }
      console.log(this.randomData);
    }
  },
  data() {
    return {
      randomData: [],
      apiData: [],
      keys: [],
      barChartData: {
        labels: this.randomData,
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)"
            ],
            borderColor: [
              "rgba(255,99,132,1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)"
            ],
            borderWidth: 1
          }
        ]
      },
      barChartOptions: {
        responsive: false,
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              barPercentage: 1,
              gridLines: {
                display: true,
                color: "rgba(0, 0, 0, 0.1)"
              }
            }
          ],
          yAxes: [
            {
              gridLines: {
                display: true,
                color: "rgba(0, 0, 0, 0.1)"
              }
            }
          ]
        }
      }
    };
  }
};
</script>
