<template>
  <div class="wrapper ">
    <div id="nav-tabs">
      <h3>Find the right loan for your unique needs</h3>
      <div class="md-layout">
        <div class="md-layout-item md-size-80 md-small-size-200">
          <h3><small>Choose your loan</small></h3>
          <nav-tabs-card no-label>
            <template slot="content">
              <md-tabs class="md-rose" md-alignment="center">
                <md-tab id="tab-home" md-label="New home loans" md-icon="house">
                  <p>
                   Whether you’re a first-time home buyer or you’ve done this before, we have you covered. Compare home loan rates and mortgage types, calculate numbers and see if you prequalify.
                   Navigating the financial side of buying a home can feel overwhelming. U.S. Bank is here to help you make an informed decision when evaluating the various home mortgage loan options. From finding out how much you can qualify for to applying for a mortgage loan and everything in between, we have your back!
                   <!-- <img :src="loan"/> -->
                   <img
            :src="image1" 
            alt="Raised Image"
            class="img-raised rounded"
            :class="{ 'responsive-image': responsive }"
          />
                  </p>
                </md-tab>

                <md-tab id="tab-pages" md-label="Auto loans" md-icon="commute">
                  <p>
                   You pay the entire negotiated price of the vehicle using cash, financing, the value of your trade-in, or a combination of all three. Car dealerships are often able to provide in-house financing for your vehicle purchase, but it might be wise to speak with a lender as well so you can make an informed decision. Shop around. Prepare a list of questions and ask for details on total price, length of loan, interest rates and potential penalties.

                  Also, lenders consider your credit history when offering you a loan, so get to know your credit score. There are a few other factors involved. Longer loan terms tend to be accompanied by higher interest rates; consider whether smaller monthly payments outweigh the potential for greater accrued interest. Research interest rates and what different vehicles typically go for based on their make, model and age.
                   
          
          <img
            :src="image3"
            alt="Raised Image"
            class="img-raised rounded"
            :class="{ 'responsive-image': responsive }"
          />
		 
       
                  </p>
                </md-tab>

                <md-tab id="tab-posts" md-label="Personal loans" md-icon="money">
                  <p>
                    A personal loan is one way to consolidate debt or to pay for major expenses with one-time funding. It offers fixed interest rates and fixed monthly payments for the life of the loan.
                    A personal line of credit lets you borrow money as you need it. It doesn’t require a specific purchase purpose, and you only pay interest on the funds you borrow.
                    Whether you want to consolidate debt or fund a major purchase, a MASH Bank Personal Loan can give you quick access to funds for your one-time financing needs.
                      <img
            :src="image4"
            alt="Raised Image"
            class="img-raised rounded"
            :class="{ 'responsive-image': responsive }"
          />
                  </p>
                </md-tab>
              </md-tabs>
            </template>
          </nav-tabs-card>
        </div>
        <div class="wrapper">
   

    <!-- <div id="images">
      <div class="md-layout">
        <div
          class="md-layout-item md-size-200 md-xsmall-size-100 ml-auto"
          :class="{ 'text-center': responsive }"
        >
          
          <img
            :src="image1" 
            alt="Raised Image"
            class="img-raised rounded"
            :class="{ 'responsive-image': responsive }"
          />
		  <h4><a href='/house'>Home Mortage</a> </h4>
        </div>
        
        <div
          class="md-layout-item md-size-200 md-xsmall-size-100 ml-auto"
          :class="{ 'text-center': responsive }"
        >
          
          <img
            :src="image3"
            alt="Raised Image"
            class="img-raised rounded"
            :class="{ 'responsive-image': responsive }"
          />
		  <h4><a href='/car'>Auto loan</a></h4>
        </div>
         <div
          class="md-layout-item md-size-150 md-xsmall-size-100 ml-auto"
          :class="{ 'text-center': responsive }"
        >
          
          <img
            :src="image4"
            alt="Raised Image"
            class="img-raised rounded"
            :class="{ 'responsive-image': responsive }"
          />
		  <h4><a href='/personal'>Personal loan</a></h4>
        </div>
		 <div
          class="md-layout-item md-size-20 md-xsmall-size-100 ml-auto"
          :class="{ 'text-center': responsive }"
        >
          
       
        </div>
      </div>
    </div> -->
  </div>
        
      </div>
    </div>
  </div>
  
</template>

<script>
import { NavTabsCard } from "@/components";

export default {
  data() {
    return {
      image1: require("@/assets/img/house.png"),
	  
	  image2: require("@/assets/img/businesss.png"),
	  image3: require("@/assets/img/car.png"),
	  image4: require("@/assets/img/businesss.png"),
      loan: require("@/assets/img/loan.png"),
    responsive: false,
	  loan2: require("@/assets/img/loan2.png"),
	  loan3: require("@/assets/img/loan3.png"),
	  loan4: require("@/assets/img/loan4.png"),
    };
  },
  components: {
    NavTabsCard
  }
};
</script>

