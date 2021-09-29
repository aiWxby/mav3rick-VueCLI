<template>
  <div class="content-submit">
    <div class="module module__values bg--comp radius">
      <h3 class="module__title radius">
        Values Checkpoint
      </h3>

      <div
        class="value__cards radius">
        <div
          v-if="$v.loginData.artistName.$model === null"
          class="value__card bg--main radius">
          <i class="far fa-minus-square"></i>
          Bekleniyor: <span class="color--main">Artist Name</span>.
        </div>
        <div
          v-if="!$v.loginData.artistName.$error, !$v.loginData.artistName.$invalid"
          class="value__card bg--main radius">
          <i class="far fa-check-circle positive"></i>
          <span class="color--main">Artist Name</span>,
          kurallara
          <span class="positive">uyuyor</span>.
        </div>
        <div
          v-if="$v.loginData.artistName.$error"
          class="value__card bg--main radius">
          <i class="far fa-times-circle negative"></i>
          <span class="color--main">Artist Name</span>,
          kurallara
          <span class="negative">uymuyor</span>.
        </div>

        <div
          v-if="$v.loginData.password.$model == null"
          class="value__card bg--main radius">
          <i class="far fa-minus-square"></i>
          Bekleniyor: <span class="color--main">Password</span>.
        </div>
        <div
          v-if="!$v.loginData.password.$error, !$v.loginData.password.$invalid"
          class="value__card bg--main radius">
          <i class="far fa-check-circle positive"></i>
          <span class="color--main">Password</span>,
          kurallara
          <span class="positive">uyuyor</span>.
        </div>
        <div
          v-if="$v.loginData.password.$error"
          class="value__card bg--main radius">
          <i class="far fa-times-circle negative"></i>
          <span class="color--main">Password</span>,
          kurallara
          <span class="negative">uymuyor</span>.
        </div>
      </div>
    </div>
    <div class="module module__submit bg--comp radius">
      <h3 class="module__title color--main radius">
        Login
      </h3>
      <div class="submit__form margin-top radius">
        <input
          class="submit__input radius bg--main"
          type="text"
          placeholder="Artist Name"
          @input="$v.loginData.artistName.$touch()"
          :style="$v.loginData.artistName.$error ? 'outline: 1px solid red' : ''"
          v-model="loginData.artistName"
        />
        <input
          class="submit__input radius bg--main"
          type="password"
          placeholder="Password"
          @input="$v.loginData.password.$touch()"
          :style="$v.loginData.password.$error ? 'outline: 1px solid red' : ''"
          v-model="loginData.password"
        />
        <button v-if="!$v.$invalid" class="button bg--theme radius" @click="onSubmit()">Login</button>
      </div>
    </div>
    <div class="module module__rules bg--comp radius">
      <h3 class="module__title radius">Rules</h3>
      <div class="rules__section">
        <p id="user__rules">
          İsimlerde sembol kullanmak yasaktır. Sadece nokta (.) kullanılabilir.
          <br>
        </p>
        <p id="user__rules">
          Örnek hesap:
          <br>
          <span style="color: red;">Artist Name:</span> M3l
          <br>
          <span style="color: red;">Password:</span> m3ltheking
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import {email, helpers, maxLength, minLength, required, sameAs} from "vuelidate/lib/validators"
const Regex = helpers.regex('Regex', /^[a-z\d.]*$/i);
export default {
  data: function (){
    return {
      loginData: {
        artistName: null,
        password: null,
      }
    }
  },
  validations: {
    loginData: {
      artistName: {
        required,
        minLength: minLength(1),
        maxLength: maxLength(30),
        Regex/*
        isUniq: (value) => {
          return axios.get('https://mav3rick-records-172f6-default-rtdb.firebaseio.com/users.json')
            .then(response => {
            let data = response.data;
            let names = [];
            for (let key in data) {
              let object = data[key];
              names.push(object.artistname);
            }
            if (names.includes(value)){
              return true;
            }else{
              return false;
            }
          })
        }*/
      },
      password: {
        required,
        minLength: minLength(8)/*
        isUniq: (value) => {
          return axios.get('https://mav3rick-records-172f6-default-rtdb.firebaseio.com/users.json')
            .then(response => {
              let data = response.data;
              let names = []
              for (let key in data) {
                let object = data[key];
                names.push(object.password);
              }
              if (names.includes(value)) {
                return true;
              } else {
                return false;
              }
            })
        }*/
      }
    }
  },
  methods: {
      onSubmit(){
        this.$store.dispatch("login", {...this.loginData})
      }
  }
}
</script>

<style scoped>
  .button{
    padding: 5px 10px;
    margin: 10px 0px;
  }
  .margin-top{
    margin-top: 15px;
  }
</style>
