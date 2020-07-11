<template>
  <div class="section section-tab">
    <h2 class="text-center">Mash bank... Your road to success</h2>
  
      <div class="section section-examples">
        <div class="container-fluid text-center">
          <div class="md-layout">

            <div class="md-layout-item">
              
              <a href="/signup" target="_blank">
                <img
                  :src="happy"
                  alt="Rounded Image"
                 
                />
              </a>
            </div>
			<div class="md-layout-item">
              
              <a href="/signup" target="_blank">
                <img
                  :src="rain"
                  alt="Rounded Image"
                 
                />
              </a>
            </div>


            
           
          </div>
		   <div class="md-layout-item">
              
              <a href="/signup" target="_blank">
                <img
                  :src="family"
                  alt="Rounded Image"
                 
                />
              </a>
            </div>
        </div>
      </div>
      
  </div>
</template>

<script>

import { LoginCard } from "@/components";

export default {
  
  name: "index",
  bodyClass: "index-page",
  props: {
  
    rain: {
      type: String,
      default: require("@/assets/img/rain.png")
	},
	happy: {
      type: String,
      default: require("@/assets/img/happy.png")
	},
	family: {
      type: String,
      default: require("@/assets/img/ha.png")
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
