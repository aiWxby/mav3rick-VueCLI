import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';
import {router} from '../main'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    token: null,
    isLogged: false,
    authUser: {
      UserName: null,
      UserID: null
    },
    checkUsername: null,
    checkPassword: null,
    APIKey: "AIzaSyA9nLdI2vIfde1TKc7hyQHTPSHNsnofzbE"
  },
  getters:{
    checkAuth(state){
      return state.isLogged;
    },
    getUser(state){
      return state.authUser;
    }
  },
  mutations:{
    setAuth(state, userData){
      let rand0 = Math.round((Math.random() * 99999));
      let rand1 = Math.round((Math.random() * 99999));
      let rand2 = Math.round((Math.random() * 99999));
      let rand3 = Math.round((Math.random() * 99999));
      let token = rand0 + '-' + rand1 + '-' + rand2 + '-' + rand3;

      state.authUser.UserName = userData.artistName;
      state.isLogged = true;
      state.token = token;

      localStorage.setItem('UserID', state.authUser.UserID);
      localStorage.setItem('UserName', userData.artistName);
      localStorage.setItem('isLogged', true);
      localStorage.setItem('token', token);

      router.replace("/profile/" + state.authUser.UserID);
    },
    clearAuth(state){
      localStorage.removeItem('UserID');
      localStorage.removeItem('UserName');
      localStorage.removeItem('isLogged');
      localStorage.removeItem('token');

      state.token = null;
      state.isLogged = false;
      state.authUser.UserID = null,
      state.authUser.UserName = null;

      router.replace("/");
    },
    reloadAuth(state){
      state.token = localStorage.getItem('token');
      state.authUser.UserName = localStorage.getItem('UserName');
      state.authUser.UserID = localStorage.getItem('UserID');
      state.isLogged = localStorage.getItem('isLogged');
    }
  },
  actions:{
    login({commit, dispatch, state}, userData){
      axios.get('https://mav3rick-records-172f6-default-rtdb.firebaseio.com/users.json').then(response => {
        let data = response.data;
        for (const key in data) {
          let user = data[key];
          if (user.artistname === userData.artistName && user.password === userData.password) {
            state.checkUsername = 'ok';
            state.checkPassword = 'ok';
            state.authUser.UserID = user.id;
          }
        }
        if (state.checkUsername !== null && state.checkPassword !== null) {
          commit("setAuth", userData);
        }
      });
    },
    logout({commit, dispatch, state}){
      commit('clearAuth');
      //location.reload();
    }
  }
})
