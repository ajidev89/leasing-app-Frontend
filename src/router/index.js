import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Services from "../views/Services.vue";
import Docs from "../views/Doc.vue";
import NotFound from "../views/NotFound.vue";
import Maintainance from "../views/Maintainance.vue";
import Login from "../views/dashboard/Login.vue";
import SignUp from "../views/dashboard/Register.vue";
import ForgetPassword  from "../views/dashboard/passwords/ForgetPassword";
import ResetPassword from "../views/dashboard/passwords/ResetPassword";
import Dashboard from "../views/dashboard/Dashboard.vue";
import Properties from "../views/dashboard/Properties.vue";
import AddProperty from "../views/dashboard/AddProperty.vue";
import Tenants from "../views/dashboard/Tenants.vue";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about-us',
    name: 'About',
    component: About
  },
   {
    path: '/contact-us',
    name: 'Contact',
    component: Contact
  },
    {
    path: '/services',
    name: 'Services',
    component: Services
  },
  {
    path: '/docs',
    name: 'Docs',
    component:Docs
  }, 
  {
    path: '/dashboard/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/dashboard/forget-password',
    name: 'ForgetPassword',
    component: ForgetPassword
  },
  {
    path: '/dashboard/reset-password/:token/:email',
    name: 'ResetPassword',
    component: ResetPassword
  },
  {
    path: '/dashboard/sign-up',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/dashboard/index',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/dashboard/properties',
    name: 'Properties',
    component: Properties
  },
  {
    path: '/dashboard/properties/add-property',
    name: 'AddProperty',
    component: AddProperty
  },
  {
    path: '/dashboard/tenants',
    name: 'Tenants',
    component: Tenants
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/under-construction',
    name: 'Maintainance',
    component: Maintainance
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
