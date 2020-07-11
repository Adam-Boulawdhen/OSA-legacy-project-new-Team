<template>
  <div>
    <div class=" section section-tab container ">
        <div class="container-fluid text-center">
          <div class="md-layout">
            <div
              class="md-layout-item md-size-66 md-xsmall-size-100 ml-auto mr-auto text-center"
            >
              <h2>How to apply for a mortgage online with the MASH Bank Loan Portal</h2>
              <h4>The MASH Bank Loan Portal is a convenient way for you to apply for a mortgage online. Using the online portal, you can apply for a mortgage eligibility letter or a home loan in one secure place. From uploading personal documents to submitting electronic signatures, theMASH Bank Loan Portal makes the mortgage process fast and easy on any device. Here’s a look at what to expect in the portal.
              </h4>
            </div>
          </div>
        </div>
      </div>
  
      <div class="section section-examples">
        <div class="container-fluid text-center">
          <div class="md-layout">
            <div class="md-layout-item md-size-46 md-xsmall-size-100 ml-auto mr-100 text-center">
             
              
              <h2>Sign up</h2>
              <h4>You’ll use a unique email address and password to set up your personal profile in the MASH Bank Loan Portal. Once this step is complete, you’re ready to begin applying for a mortgage eligibility letter or a home loan.</h4>
              <h2>Start the online mortgage application</h2>
              <h4>Once you’ve found the home you want to buy and have a signed purchase agreement, you’ll start the online mortgage application. You may be asked to submit some personal documents after we receive your application and provide you with a Loan Estimate. If you have questions, contact your mortgage loan officer.</h4>
            </div>


            
            <div class="md-layout-item">
              
              <a href="/signup" target="_blank">
                <img
                  :src="profile"
                  alt="Rounded Image"
                  class="img-raised rounded img-fluid"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="section section-download" id="downloadSection">
        <div class="container">
          
         

         
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
      default: require("@/assets/img/b.jpg")
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
