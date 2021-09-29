<template>
  <div class="layout bg--comp radius">
    <h1>So, you're a...</h1>
    <router-link tag="a" to="register"><button class="button bg--theme radius">Guest, James Guest</button></router-link>
    <router-link tag="a" to="login"><button class="button bg--theme radius">Member, do you remember?</button></router-link>
  </div>
</template>

<script>
export default {
  name: "Content"
}
</script>

<style scoped>
  .layout{
    padding: 10px;
  }
  .button{
    padding: 5px 10px;
    margin: 10px 0px;
  }
</style>
