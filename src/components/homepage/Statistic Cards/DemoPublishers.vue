<template>
  <div class="grid__tdp">
    <h3>Top Demo Publishers</h3>
    <div class="tdp__list">
      <router-link tag="div" to="/profile/2" class="tdp__list__item">
        <div>
          <img
            class="user__pp tdp__pp--renk0"
            src="../../../assets/images/users/tdp1.jpg"
            alt="User Profile Photo"
          />
        </div>
        <div>
          <h3 class="user__name tdp__text--renk0">M3l</h3>
          <span class="top-title">48 <span class="tdp__text--renk0">-</span> Demo Published</span>
        </div>
      </router-link>
      <router-link tag="div" to="/profile/3" class="tdp__list__item">
        <div>
          <img
            class="user__pp tdp__pp--renk8"
            src="../../../assets/images/users/tdp2.jpg"
            alt="User Profile Photo"
          />
        </div>
        <div>
          <h3 class="user__name tdp__text--renk8">Ellie.Williams</h3>
          <span class="top-title">41 <span class="tdp__text--renk8">-</span> Demo Published</span>
        </div>
      </router-link>
      <router-link tag="div" to="/profile/4" class="tdp__list__item">
        <div>
          <img
            class="user__pp tdp__pp--renk16"
            src="../../../assets/images/users/tdp3.jpg"
            alt="User Profile Photo"
          />
        </div>
        <div>
          <h3 class="user__name tdp__text--renk16">KaiSeR</h3>
          <span class="top-title">35 <span class="tdp__text--renk16">-</span> Demo Published</span>
        </div>
      </router-link>
      <router-link tag="div" to="/profile/5" class="tdp__list__item">
        <div>
          <img
            class="user__pp tdp__pp--renk24"
            src="../../../assets/images/users/tdp4.jpg"
            alt="User Profile Photo"
          />
        </div>
        <div>
          <h3 class="user__name tdp__text--renk24">Dr.Dier</h3>
          <span class="top-title">28 <span class="tdp__text--renk24">-</span> Demo Published</span>
        </div>
      </router-link>
      <router-link tag="div" to="/profile/6" class="tdp__list__item">
        <div>
          <img
            class="user__pp tdp__pp--renk32"
            src="../../../assets/images/users/tdp5.jpg"
            alt="User Profile Photo"
          />
        </div>
        <div>
          <h3 class="user__name tdp__text--renk32">Illenium</h3>
          <span class="top-title">13 <span class="tdp__text--renk32">-</span> Demo Published</span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "DemoPublishers"
}
</script>

<style scoped>

</style>
