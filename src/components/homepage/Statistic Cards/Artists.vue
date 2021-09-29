<template>
  <div class="grid__artists">
    <div class="artists__icon">
      <i class="fas fa-users fa-2x"></i>
    </div>
    <div class="artists__info">
      <h2 class="artists__info__count">{{artistCount}}</h2>
      <p class="artists__info__type">Artists</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data: function (){
    return{
      artistCount: null
    }
  },
  created(){
    axios.get('https://mav3rick-records-172f6-default-rtdb.firebaseio.com/users.json').then(response => {
      let objects = response.data;
      let objectArr = [];
      for (const key in objects) {
        objectArr.push(objects[key]);
      }
      this.artistCount = objectArr.length;
    })
  }
}
</script>

<style scoped>

</style>
