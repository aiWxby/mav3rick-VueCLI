<template>
  <div class="fullpage">
    <div class="container">
      <app-header></app-header>
      <main class="content radius">
        <app-main></app-main>
      </main>
      <app-footer></app-footer>
    </div>
  </div>
</template>

<script>
import appHeader from "./components/base/appHeader";
import appMain from "./components/base/appMain";
import appFooter from "./components/base/appFooter";
export default {
  data: function (){
    return {

    }
  },
  components: {
    appHeader,
    appFooter,
    appMain
  },
  created(){
    this.$store.commit("reloadAuth");
  }
}
</script>

<style></style>
