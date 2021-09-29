<template>
  <div class="content-submit">
    <div class="module module__values bg--comp radius">
      <h3 class="value__title radius">
        Values Checkpoint
      </h3>

      <div class="value__cards radius">
        <div
          v-if="$v.demoName.$model === '' && !$v.demoName.$error"
          class="value__card bg--main radius">
          <i class="far fa-minus-square"></i>
          Bekleniyor: <span class="color--main">Demo Name</span>.
        </div>
        <div
          v-if="!$v.demoName.$error, !$v.demoName.$invalid"
          class="value__card bg--main radius">
          <i class="far fa-check-circle positive"></i>
          <span class="color--main">Demo Name</span>,
          kurallara
          <span class="positive">uyuyor</span>.
        </div>
        <div
          v-if="$v.demoName.$error"
          class="value__card bg--main radius">
          <i class="far fa-times-circle negative"></i>
          <span class="color--main">Demo Name</span>,
          kurallara
          <span class="negative">uymuyor</span>.
        </div>

        <div
          v-if="fileAccepted === null"
          class="value__card bg--main radius">
          <i class="far fa-minus-square"></i>
          Bekleniyor: <span class="color--main">Demo File</span>.
        </div>
        <div
          v-if="$v.fileAccepted.checkFile"
          class="value__card bg--main radius">
          <i class="far fa-check-circle positive"></i>
          <span class="color--main">Demo File</span>,
          kurallara
          <span class="positive">uyuyor</span>.
        </div>
        <div
          v-if="!$v.fileAccepted.checkFile && fileAccepted !== null"
          class="value__card bg--main radius">
          <i class="far fa-times-circle negative"></i>
          <span class="color--main">Demo File</span>,
          kurallara
          <span class="negative">uymuyor</span>.
        </div>

        <div
          v-if="imageAccepted === null"
          class="value__card bg--main radius">
          <i class="far fa-minus-square"></i>
          Bekleniyor: <span class="color--main">Demo Cover</span>.
        </div>
        <div
          v-if="$v.selectedImage.checkImage"
          class="value__card bg--main radius">
          <i class="far fa-check-circle positive"></i>
          <span class="color--main">Demo Cover</span>,
          kurallara
          <span class="positive">uyuyor</span>.
        </div>
        <div
          v-if="!$v.selectedImage.checkImage && imageAccepted !== null"
          class="value__card bg--main radius">
          <i class="far fa-times-circle negative"></i>
          <span class="color--main">Demo Cover</span>,
          kurallara
          <span class="negative">uymuyor</span>.
        </div>

        <div
          v-if="$v.demoType.$model === null || $v.demoType.$model === 'null'"
          class="value__card bg--main radius">
          <i class="far fa-minus-square"></i>
          Bekleniyor: <span class="color--main">Demo Type</span>.
        </div>
        <div
          v-if="$v.demoType.$model !== null && $v.demoType.$model !== 'null'"
          class="value__card bg--main radius">
          <i class="far fa-check-circle positive"></i>
          <span class="color--main">Demo Type</span>,
          <span :class="this.class.classText"> {{demoType}} </span> olarak
          <span class="positive">seçildi</span>.
        </div>

      </div>
    </div>
    <div class="module module__submit bg--comp radius">
      <h3 class="module__title color--main radius">
        Submit Form
      </h3>
      <div class="submit__form radius margin-top">
        <input
          class="submit__input radius bg--main"
          type="text"
          placeholder="Demo Name"
          v-model.trim="demoName"
          @input="$v.demoName.$touch()"
          :style="$v.demoName.$error ? 'outline: 1px solid red' : ''"
        />
        <small v-if="$v.demoName.$model.length <= 1" :style="'color: red'">Minimum {{$v.demoName.$params.minLength.min}} karakter girmelisiniz.</small>
        <small v-if="$v.demoName.$model.length > $v.demoName.$params.maxLength.max" :style="'color: red'">Maksimum {{ $v.demoName.$params.maxLength.max }} karakter girmelisiniz.</small>
        <select
          class="submit__select radius bg--main"
          name="select_type"
          v-model="demoType"
        >
          <option value="null" selected>
            Select your demo type
          </option>
          <option value="Trap">Trap</option>
          <option value="Dubstep">Dubstep</option>
          <option value="Future Bass">Future Bass</option>
          <option value="Techno">Techno</option>
          <option value="Rap">Rap</option>
          <option value="Progressive House">
            Progressive House
          </option>
        </select>
        <div class="upload__section">
          <button
            class="demo__upload bg--theme radius"
          >
            <label for="demo__upload"
            >Upload Demo File</label
            >
          </button>
          <input
            id="demo__upload"
            class="submit__input radius text-center"
            type="file"
            accept="audio/*"
            @change="uploadAudio($event)"
          />
          <button
            class="
                                            demo__cover__upload
                                            bg--theme
                                            radius
                                        "
          >
            <label for="demo__cover__upload"
            >Upload Demo Cover</label
            >
          </button>
          <input
            id="demo__cover__upload"
            class="submit__input radius text-center"
            type="file"
            accept="image/png, image/jpeg, image/jpg"
            @change="uploadImage($event)"
          />
        </div>
      </div>
    </div>
    <div class="module module__preview bg--comp radius">
      <div class="status-check" :class="$v.$invalid ? 'bg--negative' : 'bg--positive'">
        <i v-if="$v.$invalid" class="far fa-times-circle"></i>
        <i v-else class="far fa-check-circle"></i>
      </div>
      <div class="demo-card__type" :class="this.class.classBG">
        {{ previews.previewDemoType }}
      </div>
      <img
        class="demo-card__img radius"
        :src="selectedImage"
        alt="Demo Preview Image"
      />
      <h3 class="demo-card__name">
        {{user.UserName}} -
        <span :class="this.class.classText"
        >{{ previews.previewDemoName }}</span
        >
      </h3>
      <button
        v-if="!$v.$invalid"
        class="
                                    demo-card__button
                                    bg--main
                                    radius
                                    pointer
                                "
      >
        Submit
      </button>
    </div>
  </div>
</template>

<script>
import {
  required,
  minLength,
  maxLength,
  helpers
} from 'vuelidate/lib/validators'
const Regex = helpers.regex('Regex', /^[a-z\d.\s]*$/i);
export default {
  data: function (){
    return {
      user: this.$store.getters.getUser,
      demoType: null,
      demoName: "",
      previews: {
        previewDemoName: "Demo Name",
        previewDemoType: "Demo Type"
      },
      fileType: null,
      imageAccepted: null,
      fileAccepted: null,
      selectedImage: require("../../assets/images/demos/default.jpg"),
      class: {
        classText: "type__text--preview",
        classBG: "type__bg--preview"
      }
    }
  },
  validations:{
    demoName: {
      required,
      minLength: minLength(2),
      maxLength: maxLength(40),
      Regex
    },
    demoType: {
        required,
    },
    selectedImage: {
      checkImage(val,vm){
        return vm.imageAccepted == true ? true : false;
      }
    },
    fileAccepted: {
      checkFile(val,vm){
        return vm.fileAccepted == true ? true : false;
      }
    }
  },
  methods: {
    uploadImage(event) {
      const file = event.target.files[0];
      const fsize = (file.size / 1024).toFixed(0);
      const ftype = file.type;
      if(fsize <= (1024*5) && (ftype === 'image/jpeg' || ftype === 'image/png')){
        this.imageAccepted = true;
        this.selectedImage = URL.createObjectURL(file);
      }else {
        this.imageAccepted = false;
        this.selectedImage = require("../../assets/images/demos/default.jpg");
      }
    },
    uploadAudio(event) {
      const file = event.target.files[0];
      const fsize = (file.size / 1024).toFixed(0);
      const ftype = file.type;
      if(fsize <= (1024*15) && (ftype === 'audio/mpeg' || ftype === 'audio/wav' || ftype === 'audio/flac' || ftype === 'audio/ogg')){
        this.fileAccepted = true;
      }else {
        this.fileAccepted = false;
      }
    }
  },
  watch: {
    demoName(val){
      if (val.length <= 0 || val === null){
        this.previews.previewDemoName = "Demo Name";
      }else {
        this.previews.previewDemoName = this.demoName;
      }
    },
    demoType(val){
      if (val === "null"){
        this.previews.previewDemoType = "Demo Type";
        this.class.classText = "type__text--preview";
        this.class.classBG = "type__bg--preview"
      }else if(val === "Trap"){
        this.previews.previewDemoType = this.demoType;
        this.class.classText = "type__text--trap";
        this.class.classBG = "type__bg--trap"
      }else if(val === "Dubstep"){
        this.previews.previewDemoType = this.demoType;
        this.class.classText = "type__text--dubstep";
        this.class.classBG = "type__bg--dubstep"
      }else if(val === "Future Bass"){
        this.previews.previewDemoType = this.demoType;
        this.class.classText = "type__text--fb";
        this.class.classBG = "type__bg--fb"
      }else if(val === "Techno"){
        this.previews.previewDemoType = this.demoType;
        this.class.classText = "type__text--techno";
        this.class.classBG = "type__bg--techno"
      }else if(val === "Rap"){
        this.previews.previewDemoType = this.demoType;
        this.class.classText = "type__text--rap";
        this.class.classBG = "type__bg--rap"
      }else if(val === "Progressive House"){
        this.previews.previewDemoType = this.demoType;
        this.class.classText = "type__text--ph";
        this.class.classBG = "type__bg--ph"
      }
    }
  }
}
</script>

<style scoped>
  .margin-top{
    margin-top: 15px;
  }
</style>
