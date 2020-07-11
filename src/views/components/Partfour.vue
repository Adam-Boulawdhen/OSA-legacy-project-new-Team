 <template>
 <div class="md-layout">
        <div class="md-layout-item md-size-66 mx-auto md-small-size-100">
          <md-card>
            <carousel
              :per-page="1"
              loop
              :speed="700"
              autoplay
              :autoplay-timeout="5000"
              :mouse-drag="false"
              navigationEnabled
              navigationNextLabel="<i class='material-icons'>keyboard_arrow_right</i>"
              navigationPrevLabel="<i class='material-icons'>keyboard_arrow_left</i>"
            >
              <slide>
                <div class="carousel-caption">
                 
                </div>
                <img :src="carousel1" alt="carousel1" />
              </slide>
              <slide>
                <div class="carousel-caption">
                 
                </div>
                <img :src="carousel2" alt="carousel2" />
              </slide>
              <slide>
                <div class="carousel-caption">

                </div>
                <img :src="carousel3" alt="carousel3" />
              </slide>
            </carousel>
          </md-card>
        </div>
</div>
</template>
<script>
//import { Modal } from "@/components";
export default {
  
  data() {
    return {
      classicModal: false,
      selectedDate: new Date("2020/07/11"),
      carousel1: require("@/assets/img/bb.jpg"),
      carousel2: require("@/assets/img/656668.jpg"),
      carousel3: require("@/assets/img/new.jpg")
    };
  },
  methods: {
    classicModalHide() {
      this.classicModal = false;
    }
  }
};
</script>
