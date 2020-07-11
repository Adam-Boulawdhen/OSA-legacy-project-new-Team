<template>
  <div>
    <b-button id="toggleButton" v-b-toggle.sidebar-no-header>>>></b-button>
    <b-sidebar
      id="sidebar-no-header"
      aria-labelledby="sidebar-no-header-title"
      no-header
      shadow
    >
      <template v-slot:default="{ hide }">
        <div class="p-3">
          <h4 id="sidebar-no-header-title">MASH Bank</h4>
          <nav class="mb-3">
            <b-nav vertical>
              <b-nav-item active v-on:click="component = 'add-Admin'"
                >Add Admin</b-nav-item
              >
              <b-nav-item v-on:click="component = 'admin-schedule'"
                >Check schedule</b-nav-item
              >
              <b-nav-item v-on:click="component = 'Chart-comp'"
                >Dashboard</b-nav-item
              >
              <b-nav-item>
                <router-link to="/">
                  logOut
                </router-link>
              </b-nav-item>
            </b-nav>
          </nav>
          <b-button variant="primary" block @click="hide">Close</b-button>
        </div>
      </template>
    </b-sidebar>
    <div id="component">
      <component v-bind:is="component"></component>
    </div>
  </div>
</template>

<script>
import addAdmin from "./addAdmin.vue";
import schedule from "./schedule.vue";
import Dashboard from "../Dashboard/Dashboard.vue";
export default {
  components: {
    "add-Admin": addAdmin,
    "admin-schedule": schedule,
    "Chart-comp": Dashboard
  },
  name: "AdminInterface",
  data: function() {
    return { component: "add-Admin" };
  }
};
</script>
<style>
#component {
  width: 100%;
  align-content: center;
  text-align: center;
  float: right;
}
#sidebar-no-header {
  margin-right: 200px;
  display: show;
}
#toggleButton {
  align-content: center;
  top: 0%;
}
</style>
