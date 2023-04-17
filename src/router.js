import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import Components from "./views/Components.vue";
import CompanyHome from "./views/CompanyHome.vue";
import News from "./views/News.vue";
import Contact from "./views/Contact.vue";
import Jobs from "./views/Jobs.vue";
import NewContent from "./views/NewContent.vue";
import AbouUs from "./views/AboutUs.vue"
import JobDetail from './views/JobDetails.vue'

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "components",
      components: {
        header: AppHeader,
        default: Components,
        footer: AppFooter
      }
    },
    {
      path: "/companyhome",
      name: "companyhome",
      components: {
        header: AppHeader,
        default: CompanyHome,
        footer: AppFooter
      }
    },
    {
      path: "/news",
      name: "news",
      components: {
        header: AppHeader,
        default: News,
        footer: AppFooter
      }
    },
    {
      path: "/contact",
      name: "contact",
      components: {
        header: AppHeader,
        default: Contact,
        footer: AppFooter
      }
    },
    {
      path: "/Jobs",
      name: "Jobs",
      components: {
        header: AppHeader,
        default: Jobs,
        footer: AppFooter
      }
    },
    {
      path: "/news/:id",
      name: "newcontent",
      components:{
        header: AppHeader,
        default: NewContent,
        footer: AppFooter
      }
    },
    {
      path: "/about",
      name: "aboutus",
      components: {
        header: AppHeader,
        default: AbouUs,
        footer: AppFooter
      }
    },
    {
      path: "/jobs/:id",
      name: "jobdetail",
      components: {
        header: AppHeader,
        default: JobDetail,
        footer: AppFooter
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
