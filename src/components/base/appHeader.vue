<template>
    <header class="header">
    <navbar class="navbar radius">
      <div class="logo__section">
        <img
          id="nav-logo"
          src="../../assets/images/logo/logo.jpg"
          alt="Mav3rick Logo"
        />
        <router-link tag="a" to="/"  class="link--theme">
          <h3>Mav3rick Records</h3>
        </router-link>
      </div>
      <div class="route__section">
        <ul class="navbar__list">
          <router-link tag="li" to="/" exact active-class="bg--theme" class="navbar__list__item">Homepage</router-link>
          <router-link tag="li" to="/demos" exact active-class="bg--theme" class="navbar__list__item">Demos</router-link>
          <router-link tag="li" to="/submit" exact active-class="bg--theme" class="navbar__list__item">Submit</router-link>
        </ul>
      </div>
    </navbar>
    <div class="miscbar">
      <!--<div class="tool__section">
        <i class="fas fa-adjust fa-2x"></i>
      </div>-->
      <router-link 
      v-if="checkAuth"
      tag="a" :to="createProfilePath" class="pointer">
        <div class="profile__section pointer">
          <img
            class="user__pp pointer"
            src="../../assets/images/users/pp.jpg"
            alt="User Profile Photo"
          />
          <h3 class="user__name pointer">{{loggedArtist.UserName}}</h3>
        </div>
      </router-link>
      <router-link 
      v-else-if="!checkAuth"
      tag="a" to="/user-redirect" class="pointer">
        <button class="btn bg--theme radius">Login or Register</button>
      </router-link>
    </div>
  </header>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data: function(){
    return {
      loggedArtist: this.$store.getters.getUser,
      profilePath: '/profile/',
    }
  },
  computed: {
    ...mapGetters([
      'checkAuth',
      'getUser'
    ]),
    createProfilePath(){
      return this.profilePath += this.loggedArtist.UserID;
    }
  }
}
</script>

<style scoped>
.btn {
  padding: 5px 15px;
}
</style>
