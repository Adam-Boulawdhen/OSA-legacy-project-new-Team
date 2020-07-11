<template>
  <div class="wrapper">
    <parallax class="page-header header-filter" :style="headerStyle">
      <div class="md-layout">
        <div class="md-layout-item">
          <div class="image-wrapper">
            <img :src="leaf4" alt="leaf4" class="leaf4" v-show="leafShow" />
            <img :src="leaf3" alt="leaf3" class="leaf3" v-show="leafShow" />
            <img :src="leaf2" alt="leaf2" class="leaf2" v-show="leafShow" />
            <img :src="leaf1" alt="leaf1" class="leaf1" v-show="leafShow" />
            <div class="brand">
              <h1>MASH Bank</h1>
              <h3>Makes your life easier because we care about you.</h3>
            </div>
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section section-javascript">
        <slider></slider>
      </div>
      <div class="section section-tabs">
        <div class="container">
          <partone></partone>
        </div>
      </div>
      <div class="section section-javascript">
        <parttwo></parttwo>
      </div>
      <!-- <div class="section section-white">
        <div class="container">
          <parttwo></parttwo>
        </div>
      </div> -->
      <div class="section section-tabs">
        <partthree></partthree>
      </div>
      <div class="section section-javascript">
        <partfour></partfour>
      </div>
      <div class="section section-javascript">
        <partfive></partfive>
      </div>
      <div class="section section-download" id="downloadSection">
        <div class="container">
          <div class="sharing-area text-center">
            <div class="md-layout">
              <div class="md-layout-item">
                <h3>Thank you for supporting us!</h3>
              </div>
            </div>

            <md-button class="md-twitter" href="https://twitter.com/NASASTEM"
              ><i class="fab fa-twitter"></i>Tweet</md-button
            >
            <md-button
              class="md-facebook"
              href="https://www.facebook.com/groups/NASA.SCIENCE"
            >
              <i class="fab fa-facebook-square"></i> Share</md-button
            >
            <md-button
              class="md-google"
              href="https://www.nasa.gov/about/contact/index.html"
              ><i class="fab fa-google-plus"></i> Share</md-button
            >
            <md-button class="md-github" href="https://github.com/nasa"
              ><i class="fab fa-github"></i> Star</md-button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Slider from "./components/Slider";
//import { LoginCard } from "@/components";
import { ScalingSquaresSpinner } from "epic-spinners";
import Partone from "./components/Partone";
import Parttwo from "./components/Parttwo";
import Partthree from "./components/Partthree";
import Partfive from "./components/Partfive";

export default {
  components: {
    Slider,
    Partone,
    Parttwo,
    Partthree,
    Partfive
  },
  name: "index",
  bodyClass: "index-page",
  props: {
    image: {
      type: String,
      default: require("@/assets/img/vue-mk-header.jpg")
    },
    leaf4: {
      type: String,
      default: require("@/assets/img/leaf4.png")
    },
    leaf3: {
      type: String,
      default: require("@/assets/img/leaf3.png")
    },
    leaf2: {
      type: String,
      default: require("@/assets/img/leaf2.png")
    },
    leaf1: {
      type: String,
      default: require("@/assets/img/leaf1.png")
    },
    signup: {
      type: String,
      default: require("@/assets/img/city.jpg")
    },
    landing: {
      type: String,
      default: require("@/assets/img/landing.jpg")
    },
    profile: {
      type: String,
      default: require("@/assets/img/profile.jpg")
    }
  },
  data() {
    return {
      firstname: null,
      email: null,
      password: null,
      leafShow: false
    };
  },
  methods: {
    leafActive() {
      if (window.innerWidth < 768) {
        this.leafShow = false;
      } else {
        this.leafShow = true;
      }
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.image})`
      };
    },
    signupImage() {
      return {
        backgroundImage: `url(${this.signup})`
      };
    }
  },
  mounted() {
    this.leafActive();
    window.addEventListener("resize", this.leafActive);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.leafActive);
  }
};
</script>
<style lang="scss">
.section-download {
  .md-button + .md-button {
    margin-left: 5px;
  }
}

@media all and (min-width: 991px) {
  .btn-container {
    display: flex;
  }
}
</style>
