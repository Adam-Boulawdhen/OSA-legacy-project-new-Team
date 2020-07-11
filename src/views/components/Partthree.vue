<template>
  <div class="section section-tab">
    
  
      <div class="section section-examples">
        <div class="container-fluid text-center">
          <div class="md-layout">

             <div class="md-layout-item">
              
              <a href="/signup" target="_blank">
                <img
                  :src="futur"
                  alt="Rounded Image"
                  class="img-raised rounded img-fluid"
                />
              </a>
            </div>


            <div class="md-layout-item md-size-46 md-xsmall-size-100 ml-auto mr-100 text-center">
             
              
              <h2>Upload and submit</h2>
              
              <h4>During the underwriting process, underwriters will review your mortgage application and may request additional documentation. They may also share documents with you for your review and approval. In the MASH Bank Loan Portal, you can safely upload and view documents from multiple devices in one convenient place.</h4>
              <br/>
              <h2>Sign and close</h2>
              
              <h4>Closing is the last step in the mortgage application process. Closing happens in a meeting between a combination of the buyer, the buyer’s agent, the seller, the seller's agent and a closing agent. The closing agent is either an attorney or a representative from the title company which manages the home's ownership documents.</h4>
              <br/>
               <h2>Move in</h2>
               
              <h4>Congratulations! After closing is complete, you can collect your keys and move into your home.</h4>

            </div>


            
           
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
  
    futur: {
      type: String,
      default: require("@/assets/img/futur.jpg")
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
