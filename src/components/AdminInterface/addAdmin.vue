<template>
  <div id="adminCreationContainer">
    <center id="adminCreation">
      <b-form @submit="onSubmit" v-if="show">
        <b-form-group
          class="d-flex flex-column justify-content-center "
          id="input-group-1"
          label="Admin fullName:"
          label-for="input-1"
        >
          <b-form-input
            class="input"
            id="input-1"
            v-model="form.adminFullName"
            type="adminName"
            required
            placeholder="Enter adminName"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          class="d-flex flex-column justify-content-center "
          id="input-group-3"
          label="Admin UserName:"
          label-for="input-3"
        >
          <b-form-input
            class="input"
            id="input-3"
            v-model="form.adminUserName"
            type="adminUserName"
            required
            placeholder="Enter adminUserName"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          class="d-flex flex-column justify-content-center "
          id="input-group-2"
          label="Admin Password:"
          label-for="input-2"
        >
          <b-form-input
            class="input"
            id="input-2"
            v-model="form.password"
            type="password"
            required
            placeholder="Enter password"
            description="We'll never share your password with anyone else."
          ></b-form-input>
        </b-form-group>
        <b-form-group
          class="d-flex flex-column justify-content-center "
          id="input-group-4"
          label="confirm Password:"
          label-for="input-4"
        >
          <b-form-input
            class="input"
            id="input-4"
            v-model="form.adminconfirmedPassword"
            type="password"
            required
            placeholder="confirm the admin's password"
          ></b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary">Submit</b-button>
      </b-form>
    </center>
  </div>
</template>

<script>
export default {
  name: "addAdmin",
  data() {
    return {
      form: {
        adminFullName: "",
        adminUserName: "",
        password: "",
        adminconfirmedPassword: ""
      },
      show: true
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      if (this.form.adminconfirmedPassword !== this.form.password) {
        alert("you need to enter the same password");
        return;
      } else {
        fetch("http://localhost:5050/adminCreation", {
          method: "post",
          body: JSON.stringify(this.form),
          headers: { "Content-Type": "application/json" }
        })
          .then(data => {
            return data.json();
          })
          .catch(err => console.log(err));
      }
      this.form.adminFullName = "";
      this.form.adminUserName = "";
      this.form.password = "";
      this.form.adminconfirmedPassword = "";
    }
  }
};
</script>
<style>
#adminCreation {
  width: 60%;
  text-align: center;
  float: none;
  margin: 0 auto;
}
#input-1 {
  font-size: 25px;
}
#input-2 {
  font-size: 25px;
}
#input-3 {
  font-size: 25px;
}
#input-4 {
  font-size: 25px;
}
</style>
