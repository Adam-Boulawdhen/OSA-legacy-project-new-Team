import Vue from "vue";
import Router from "vue-router";
import Index from "./views/Index.vue";
import Landing from "./views/Landing.vue";
import Login from "./views/Login.vue";
import Signup from "./views/Signup.vue";
import Profile from "./views/Profile.vue";
import MainNavbar from "./layout/MainNavbar.vue";
import MainFooter from "./layout/MainFooter.vue";
//oues
import ProfileInformations from "./components/ProfileInformations.vue";
import Simulator from "./components/Simulator.vue";
import Appointment from "./components/Appointment.vue";
import Scheduled from "./components/Scheduled.vue";
import Processed from "./components/Processed.vue";
import SimulationResult from "./components/SimulationResult.vue";
import UserForm from "./components/UserForm.vue";
import AdminInterface from "./components/AdminInterface/AdminInterface.vue";
import Dashboard from "./components/Dashboard/Dashboard.vue";
//end oues

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "index",
      components: { default: Index, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/landing",
      name: "landing",
      components: { default: Landing, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/login",
      name: "login",
      components: { default: Login, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 }
      }
    },
    {
      path: "/signup",
      name: "signup",
      components: { default: Signup, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 }
      }
    },
    {
      path: "/userform",
      name: "userform",
      component: UserForm
    },
    {
      path: "/profile",
      name: "ProfileInformations",
      component: ProfileInformations
    },
    {
      path: "/simulator",
      name: "Simulator",
      component: Simulator
    },
    {
      path: "/result",
      name: "SimutationResult",
      component: SimulationResult
    },
    {
      path: "/appointment",
      name: "Appointment",
      component: Appointment
    },
    {
      path: "/scheduled",
      name: "Scheduled",
      component: Scheduled
    },
    {
      path: "/processed",
      name: "Processed",
      component: Processed
    },
    {
      path: "/AdminInterface",
      name: "AdminInterface",
      component: AdminInterface
    },
    {
      path: "/Dashboard",
      name: "Dashboard",
      component: Dashboard
    },
    {
      path: "/profile",
      name: "profile",
      components: { default: Profile, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
