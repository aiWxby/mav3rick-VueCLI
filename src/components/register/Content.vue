<template>
  <div class="content-submit">
    <div class="module module__values bg--comp radius">
      <h3 class="module__title radius">
        Values Checkpoint
      </h3>

      <div
        class="value__cards radius">
        <div
          v-if="imageAccepted === null"
          class="value__card bg--main radius">
          <i class="far fa-minus-square"></i>
          Bekleniyor: <span class="color--main">Profile Photo</span>.
        </div>
        <div
          v-if="$v.selectedImage.checkImage"
          class="value__card bg--main radius">
          <i class="far fa-check-circle positive"></i>
          <span class="color--main">Profile Photo</span>,
          kurallara
          <span class="positive">uyuyor</span>.
        </div>
        <div
          v-if="!$v.selectedImage.checkImage && imageAccepted !== null"
          class="value__card bg--main radius">
          <i class="far fa-times-circle negative"></i>
          <span class="color--main">Profile Photo</span>,
          kurallara
          <span class="negative">uymuyor</span>.
        </div>

        <div
          v-if="$v.newMember.artistName.$model === null"
          class="value__card bg--main radius">
          <i class="far fa-minus-square"></i>
          Bekleniyor: <span class="color--main">Artist Name</span>.
        </div>
        <div
          v-if="!$v.newMember.artistName.$error, !$v.newMember.artistName.$invalid"
          class="value__card bg--main radius">
          <i class="far fa-check-circle positive"></i>
          <span class="color--main">Artist Name</span>,
          kurallara
          <span class="positive">uyuyor</span>.
        </div>
        <div
          v-if="$v.newMember.artistName.$error"
          class="value__card bg--main radius">
          <i class="far fa-times-circle negative"></i>
          <span class="color--main">Artist Name</span>,
          kurallara
          <span class="negative">uymuyor</span>.
        </div>

        <div
          v-if="$v.newMember.email.$model == null"
          class="value__card bg--main radius">
          <i class="far fa-minus-square"></i>
          Bekleniyor: <span class="color--main">E-Mail</span>.
        </div>
        <div
          v-if="!$v.newMember.email.$error, !$v.newMember.email.$invalid"
          class="value__card bg--main radius">
          <i class="far fa-check-circle positive"></i>
          <span class="color--main">E-Mail</span>,
          kurallara
          <span class="positive">uyuyor</span>.
        </div>
        <div
          v-if="$v.newMember.email.$error"
          class="value__card bg--main radius">
          <i class="far fa-times-circle negative"></i>
          <span class="color--main">E-Mail</span>,
          kurallara
          <span class="negative">uymuyor</span>.
        </div>

        <div
          v-if="$v.newMember.password.$model == null"
          class="value__card bg--main radius">
          <i class="far fa-minus-square"></i>
          Bekleniyor: <span class="color--main">Password</span>.
        </div>
        <div
          v-if="!$v.newMember.password.$error, !$v.newMember.password.$invalid"
          class="value__card bg--main radius">
          <i class="far fa-check-circle positive"></i>
          <span class="color--main">Password</span>,
          kurallara
          <span class="positive">uyuyor</span>.
        </div>
        <div
          v-if="$v.newMember.password.$error"
          class="value__card bg--main radius">
          <i class="far fa-times-circle negative"></i>
          <span class="color--main">Password</span>,
          kurallara
          <span class="negative">uymuyor</span>.
        </div>

        <div
          v-if="$v.newMember.rePassword.$model == null"
          class="value__card bg--main radius">
          <i class="far fa-minus-square"></i>
          Bekleniyor: <span class="color--main">Re-Password</span>.
        </div>
        <div
          v-if="!$v.newMember.rePassword.$error, !$v.newMember.rePassword.$invalid"
          class="value__card bg--main radius">
          <i class="far fa-check-circle positive"></i>
          <span class="color--main">Passwords</span>,
          birbirine
          <span class="positive">uyuyor</span>.
        </div>
        <div
          v-if="$v.newMember.rePassword.$error"
          class="value__card bg--main radius">
          <i class="far fa-times-circle negative"></i>
          <span class="color--main">Passwords</span>,
          birbirine
          <span class="negative">uymuyor</span>.
        </div>
      </div>
    </div>
    <div class="module module__submit bg--comp radius">
      <h3 class="module__title color--main radius">
        Register
      </h3>
      <form @submit.prevent class="submit__form margin-top radius">
          <button
            class="
              demo__cover__upload
              bg--theme
              radius
              "
          >
            <label for="pp__upload"
            >Upload Profile Photo</label
            >
          </button>
          <input
            id="pp__upload"
            class="submit__input radius text-center"
            type="file"
            accept="image/png, image/jpeg, image/jpg"
            @change="uploadImage($event)"
          />
        <input
          class="submit__input radius bg--main"
          type="text"
          placeholder="Artist Name"
          @input="$v.newMember.artistName.$touch()"
          :style="$v.newMember.artistName.$error ? 'outline: 1px solid red' : ''"
          v-model.trim="newMember.artistName"
        /><!--
        <input
            class="submit__input radius text-center"
            type="file"
            accept="image/png, image/jpeg, image/jpg"
            @change="uploadImage($event)"
          />-->
        <input
          class="submit__input radius bg--main"
          type="email"
          placeholder="E-Mail"
          @input="$v.newMember.email.$touch()"
          :style="$v.newMember.email.$error ? 'outline: 1px solid red' : ''"
          v-model.trim="newMember.email"
        />
        <input
          class="submit__input radius bg--main"
          type="password"
          placeholder="Password"
          @input="$v.newMember.password.$touch()"
          :style="$v.newMember.password.$error ? 'outline: 1px solid red' : ''"
          v-model.trim="newMember.password"
        />
        <input
          class="submit__input radius bg--main"
          type="password"
          placeholder="Re-Password"
          @input="$v.newMember.rePassword.$touch()"
          :style="$v.newMember.rePassword.$error ? 'outline: 1px solid red' : ''"
          v-model.trim="newMember.rePassword"
        />
        <button v-if="!$v.$invalid" class="button bg--theme radius"
        @click="registerMember()">Register</button>
      </form>
    </div>
    <div class="module module__rules bg--comp radius">
      <h3 class="module__title radius">Rules</h3>
      <div class="rules__section">
        <p id="user__rules">
          İsimlerde sembol kullanmak yasaktır. Sadece nokta (.) kullanılabilir.
          <br>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "../../../node_modules/firebase/compat/app";
import "../../../node_modules/firebase/compat/firestore"
import axios from 'axios';
import {email, helpers, maxLength, minLength, required, sameAs} from "vuelidate/lib/validators"
const Regex = helpers.regex('Regex', /^[a-z\d.]*$/i);
export default {
  data: function (){
    return {
      newMember: {
        id: null,
        artistName: null,
        email: null,
        password: null,
        rePassword: null,
        registerDate: null,
        pp: null
      },
      fileType: null,
      imageAccepted: null,
      selectedImage: null,
      mainFile: null
    }
  },
  methods: {
    uploadImage(event) {
      const file = event.target.files[0];
      const fsize = (file.size / 1024).toFixed(0);
      const ftype = file.type;
      if(fsize <= 5120 && (ftype === 'image/jpeg' || ftype === 'image/png' || ftype === 'image/jpg')){
        this.imageAccepted = true;
        let user = this.newMember.artistName;
        let fileExt = ftype.split('/').pop();
        let newImgName = user.toLowerCase() + '-' + 'pp'+ '.' + fileExt;

        this.newMember.pp = newImgName;
        this.mainFile = file;
      }else {
        this.imageAccepted = false;
        this.selectedImage = require("../../assets/images/demos/default.jpg");
      }
    },
    registerMember(){
      let currentDate = new Date();
      let day = currentDate.getDate();
      let month = currentDate.getMonth() + 1;
      let year = currentDate.getFullYear();
      this.newMember.registerDate = day + '.' + month + '.' + year;

      axios.get('https://mav3rick-records-172f6-default-rtdb.firebaseio.com/users.json')
        .then(response => {
          let data = response.data;
          let allIDs = [];
          for (let key in data) {
            let object = data[key];
            allIDs.push(object.id);
          }
          let newID = Math.max(...allIDs) + 1;
          axios.post("https://mav3rick-records-172f6-default-rtdb.firebaseio.com/users.json",{...this.newMember, id: newID}).then(response => {console.log(response)}).catch(e => console.log(e))
          //this.$route.replace('/login');
        })
        .catch(e => {console.log(e)})
    }
  }
  ,
  validations: {
    selectedImage: {
      checkImage(val,vm){
        return vm.imageAccepted == true ? true : false;
      }
    },
    newMember: {
      artistName: {
        required,
        minLength: minLength(2),
        maxLength: maxLength(30),
        Regex/*,
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
                return false;
              }else{
                return true;
              }
            })
        }*/
      },
      email: {
        required,
        email/*,
        isUniq: (value) => {
          return axios.get('https://mav3rick-records-172f6-default-rtdb.firebaseio.com/users.json')
            .then(response => {
              let data = response.data;
              let emails = [];
              for (let key in data) {
                let object = data[key];
                emails.push(object.email);
              }
              if (emails.includes(value)){
                return false;
              }else{
                return true;
              }
            })
        }*/
      },
      password: {
        required,
        minLength: minLength(8)
      },
      rePassword: {
        required,
        sameAs: sameAs('password')
      }
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
  #pp__upload{
    display: none;
  }
</style>
