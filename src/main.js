import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuelidate from 'vuelidate'
import {routes} from './routes'
import {store} from './store/store'
import firebase from "firebase/compat/app";
import "firebase/compat/firestore"


Vue.use(VueRouter)
Vue.use(Vuelidate)

const firebaseConfig = {
  apiKey: "AIzaSyA9nLdI2vIfde1TKc7hyQHTPSHNsnofzbE",
  authDomain: "mav3rick-records-172f6.firebaseapp.com",
  databaseURL: "https://mav3rick-records-172f6-default-rtdb.firebaseio.com",
  projectId: "mav3rick-records-172f6",
  storageBucket: "mav3rick-records-172f6.appspot.com",
  messagingSenderId: "504140487240",
  appId: "1:504140487240:web:e6f02310806a5a2380d67d",
  measurementId: "G-9RPPTQZF9W"
};

firebase.initializeApp(firebaseConfig);

export const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
