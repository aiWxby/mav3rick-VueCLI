<template>
  <div>
    <h3 class="module__title user-details-title color--main radius">User Details</h3>
    <div class="profile__layout bg--comp radius">
      <div class="profile bg--main radius">
        <div class="profile__image text-center">
          <img src="../../assets/images/users/pp.jpg" alt="User's Profil Photo" class="radius">
          <h2 class="detail__artistname color--main radius">{{artistDetails.artistName}}</h2>
        </div>
        <div class="profile__detail">
          <div class="detail__list">
            <div class="detail radius"><span class="color--main">ID:</span> {{artistDetails.artistID}}</div>
            <div class="detail detail__email radius"><span class="color--main">E-Mail:</span> {{artistDetails.artistEmail}}</div>
            <div class="detail detail__date radius"><span class="color--main">Registration:</span> {{artistDetails.artistDate}}</div>
            <div class="detail detail__democount radius"><span class="color--main">Demo Count:</span> {{artistDetails.artistDemoCount}}</div>
            <div class="detail detail__democount radius" v-if="artistDetails.artistID == LSID"><button @click="Logout()" class="btn bg--theme radius">Logout</button></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data: function (){
    return{
      artistDetails:{
        artistID: this.$route.params.id,
        artistName: null,
        artistEmail: null,
        artistDate: null,
        artistDemoCount: null
      },
      date: new Date(),
      LSID: localStorage.getItem('UserID')
    }
  },
  methods: {
    Logout(){
      this.$store.dispatch("logout");
    }
  },
  created(){
    axios.get('https://mav3rick-records-172f6-default-rtdb.firebaseio.com/users.json')
      .then(response => {
        let data = response.data;
        for (let key in data) {
          if (this.$route.params.id == data[key].id){
            let object = data[key];
            this.artistDetails.artistName = object.artistname;
            this.artistDetails.artistEmail = object.email;
            this.artistDetails.artistDate = object.date;
            this.artistDetails.artistDemoCount = object.demoCount;
          }
        }
      })
      .catch(e => {console.log(e)})
  }
}
</script>

<style scoped>
  .btn{
  padding: 5px 15px;
  }
</style>
