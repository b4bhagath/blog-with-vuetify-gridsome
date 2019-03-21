<template>
  <v-app>
    <section v-if="pageLoad">
      <v-flex class="left-flex" xs6>
        <v-img :src="`http://uploads.webflow.com/56c57a495f4a7cf431e728a0/56c57a495f4a7cf431e728be_Photo-11.jpg`" :lazy-src="`http://uploads.webflow.com/56c57a495f4a7cf431e728a0/56c57a495f4a7cf431e728be_Photo-11.jpg`" aspect-ratio="1" class="grey lighten-2 fill-height" height="100%">
        <div class="left-div-overlay"></div></v-img>
      </v-flex>
      <v-flex class="right-flex" fill-height offset-xs6 xs6>
        <slot></slot>
      </v-flex>

      <v-footer height="auto">
        <v-card class="flex" flat tile>
          <v-card-actions class="grey darken-3 justify-center">
            <v-layout row wrap align-center>
              <v-flex xs12>
                <div class="white--text ml-3 justify-center">
                  Made with
                  <v-icon class="red--text">fas fa-heart</v-icon>by
                  <a class="white--text" href="https://vuetifyjs.com" target="_blank">Vuetify</a>
                  and
                  <a class="white--text" href="https://github.com/vwxyzjn">Nikhil Bhagath</a>
                </div>
              </v-flex>
            </v-layout>

            <v-spacer></v-spacer>

            <v-btn v-for="icon in icons" :key="icon" class="mx-3" dark icon>
              <v-icon size="24px">{{ icon }}</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-footer>
    </section>

    <section v-else>
      <v-layout row wrap>
        <div class="loader-box">
          <div class="loader">
            <div class="element-animation">
              <img src="http://i57.tinypic.com/30dighv.png" width="480" height="100">
            </div>
          </div>
          <ul class="labels">
            <li class="label">Loading...</li>
            <li class="label">Wandering...</li>
            <li class="label">Thrillseeking...</li>
            <li class="label">Adventuring...</li>
          </ul>
        </div>
      </v-layout>
    </section>
  </v-app>
</template>

<static-query>
query {
  metaData{
    siteName
  },
  allPost {
    totalCount
  }
}
</static-query>

<script>
export default {
  name: "app",
  data() {
    return {
      title: "Your Logo",
      icons: ["fab fa-facebook", "fab fa-twitter", "fab fa-instagram"],
      pageLoad: false
    };
  },
  mounted() {
    if (this.$root.$children[0].posts) console.log('pageLoaded'); this.pageLoad = true;
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Arvo|Playfair+Display|Work+Sans');
body,
html {
  /* display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%; */
  background: #f5f4f4;
  font-size: 13px;
  font-family: 'Arvo', monospace!important;
}

.full-width {
  max-width: none!important;
  padding: 0!important;
  margin: 0;
}

.right-flex {
  background: #ffff;
  float: right;

}

.left-flex {
    position: fixed;
    width: 50%;
    height: 100%;
    float: left;
    overflow: hidden;
}

.left-div-overlay {
    position: absolute;
    left: 0px;
    right: 0px;
    bottom: 0px;
    overflow: hidden;
    width: 100%;
    height: 100%;
    padding: 0px;
    background-image: -webkit-linear-gradient(270deg, hsla(0, 0%, 91%, 0) 25%, #000 95%);
    background-image: linear-gradient(180deg, hsla(0, 0%, 91%, 0) 25%, #000 95%);
    color: #fff;
}

@media (max-width: 600px) {
  .nav > .nav-links {
    position: absolute;
    display: block;
    width: 100%;
    background-color: #333;
    height: 0px;
    transition: all 0.3s ease-in;
    overflow-y: hidden;
    top: 50px;
    left: 0px;
  }
  .nav > .nav-links > a {
    display: block;
    width: 100%;
  }
  .nav > #nav-check:not(:checked) + .nav-links {
    height: 0px;
  }
  .nav > #nav-check:checked + .nav-links {
    height: calc(100vh - 50px);
    overflow-y: auto;
  }
}

body {
  text-align: center;
  background-color: #545454;
}

.loader-box {
  padding-top: 35vh;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  background: url(https://subtlepatterns.com/patterns/stardust.png);
  text-align: center;
  z-index: 11;
  opacity: 1;
  transition: all ease 1s;
}

.labels {
  list-style-type: none;
  margin: 0 auto;
  display: inline-block;
  padding: 0px;
  width: 200px;
  height: 30px;
  overflow: hidden;
}

.label {
  float: left;
  height: 30px;
  line-height: 30px;
  padding: 0px;
  font-family: "Nunito Sans", Helvetica, Arial, sans-serif;
  color: #fff;
  font-size: 20px;
  width: 200px;
  position: relative;
  animation: textUp ease 3s;
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;
  -webkit-animation: textUp ease 3s;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-fill-mode: forwards;
  /*Chrome 16+, Safari 4+*/
  -moz-animation: textUp ease 3s;
  -moz-animation-iteration-count: infinite;
  -moz-animation-fill-mode: forwards;
  /*FF 5+*/
  -o-animation: textUp ease 3s;
  -o-animation-iteration-count: infinite;
  -o-animation-fill-mode: forwards;
  /*Not implemented yet*/
  -ms-animation: textUp ease 3s;
  -ms-animation-iteration-count: infinite;
  -ms-animation-fill-mode: forwards;
  /*IE 10+*/
}

.loader {
  width: 120px;
  height: 120px;
  background-color: #ffffff;
  overflow: hidden;
  display: block;
  -moz-border-radius: 100%;
  -webkit-border-radius: 100%;
  border-radius: 100%;
  border: 3px solid #fff;
  position: relative;
  margin: 15px auto;
  z-index: 1;
  animation: colorChange ease 3s;
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;
  -webkit-animation: colorChange ease 3s;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-fill-mode: forwards;
  /*Chrome 16+, Safari 4+*/
  -moz-animation: colorChange ease 3s;
  -moz-animation-iteration-count: infinite;
  -moz-animation-fill-mode: forwards;
  /*FF 5+*/
  -o-animation: colorChange ease 3s;
  -o-animation-iteration-count: infinite;
  -o-animation-fill-mode: forwards;
  /*Not implemented yet*/
  -ms-animation: colorChange ease 3s;
  -ms-animation-iteration-count: infinite;
  -ms-animation-fill-mode: forwards;
  /*IE 10+*/
}

.loaded.loader-box,
.loaded .loader,
.loaded .labels {
  opacity: 0;
}

.hidden {
  display: none;
}

.element-animation {
  bottom: 10px;
  animation: animationFrames ease-in 3s;
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;
  -webkit-animation: animationFrames ease-in 3s;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-fill-mode: forwards;
  /*Chrome 16+, Safari 4+*/
  -moz-animation: animationFrames ease-in 3s;
  -moz-animation-iteration-count: infinite;
  -moz-animation-fill-mode: forwards;
  /*FF 5+*/
  -o-animation: animationFrames ease-in 3s;
  -o-animation-iteration-count: infinite;
  -o-animation-fill-mode: forwards;
  /*Not implemented yet*/
  -ms-animation: animationFrames ease-in 3s;
  -ms-animation-iteration-count: infinite;
  -ms-animation-fill-mode: forwards;
  /*IE 10+*/
}
.element-animation img {
  bottom: 5px;
  position: relative;
  right: 3px;
}

@keyframes textUp {
  0% {
    top: 0px;
    display: relative;
    opacity: 0;
  }
  1% {
    top: 0px;
    display: relative;
    opacity: 1;
  }
  24% {
    top: 0px;
    display: relative;
    opacity: 1;
  }
  25% {
    top: 0px;
    display: none;
    opacity: 0;
  }
  26% {
    top: -30px;
    display: relative;
    opacity: 0;
  }
  27% {
    top: -30px;
    display: relative;
    opacity: 1;
  }
  49% {
    top: -30px;
    display: relative;
    opacity: 1;
  }
  50% {
    top: -30px;
    display: none;
    opacity: 0;
  }
  51% {
    top: -60px;
    display: relative;
    opacity: 0;
  }
  52% {
    top: -60px;
    display: relative;
    opacity: 1;
  }
  74% {
    top: -60px;
    display: relative;
    opacity: 1;
  }
  75% {
    top: -60px;
    display: none;
    opacity: 0;
  }
  76% {
    top: -90px;
    display: relative;
    opacity: 0;
  }
  77% {
    top: -90px;
    display: relative;
    opacity: 1;
  }
  99% {
    top: -90px;
    display: relative;
    opacity: 1;
  }
  100% {
    top: -90px;
    display: none;
    opacity: 0;
  }
}
@-webkit-keyframes textUp {
  0% {
    top: 0px;
    display: relative;
    opacity: 0;
  }
  1% {
    top: 0px;
    display: relative;
    opacity: 1;
  }
  24% {
    top: 0px;
    display: relative;
    opacity: 1;
  }
  25% {
    top: 0px;
    display: none;
    opacity: 0;
  }
  26% {
    top: -30px;
    display: relative;
    opacity: 0;
  }
  27% {
    top: -30px;
    display: relative;
    opacity: 1;
  }
  49% {
    top: -30px;
    display: relative;
    opacity: 1;
  }
  50% {
    top: -30px;
    display: none;
    opacity: 0;
  }
  51% {
    top: -60px;
    display: relative;
    opacity: 0;
  }
  52% {
    top: -60px;
    display: relative;
    opacity: 1;
  }
  74% {
    top: -60px;
    display: relative;
    opacity: 1;
  }
  75% {
    top: -60px;
    display: none;
    opacity: 0;
  }
  76% {
    top: -90px;
    display: relative;
    opacity: 0;
  }
  77% {
    top: -90px;
    display: relative;
    opacity: 1;
  }
  99% {
    top: -90px;
    display: relative;
    opacity: 1;
  }
  100% {
    top: -90px;
    display: none;
    opacity: 0;
  }
}
@-moz-keyframes textUp {
  0% {
    top: 0px;
    display: relative;
    opacity: 0;
  }
  1% {
    top: 0px;
    display: relative;
    opacity: 1;
  }
  24% {
    top: 0px;
    display: relative;
    opacity: 1;
  }
  25% {
    top: 0px;
    display: none;
    opacity: 0;
  }
  26% {
    top: -30px;
    display: relative;
    opacity: 0;
  }
  27% {
    top: -30px;
    display: relative;
    opacity: 1;
  }
  49% {
    top: -30px;
    display: relative;
    opacity: 1;
  }
  50% {
    top: -30px;
    display: none;
    opacity: 0;
  }
  51% {
    top: -60px;
    display: relative;
    opacity: 0;
  }
  52% {
    top: -60px;
    display: relative;
    opacity: 1;
  }
  74% {
    top: -60px;
    display: relative;
    opacity: 1;
  }
  75% {
    top: -60px;
    display: none;
    opacity: 0;
  }
  76% {
    top: -90px;
    display: relative;
    opacity: 0;
  }
  77% {
    top: -90px;
    display: relative;
    opacity: 1;
  }
  99% {
    top: -90px;
    display: relative;
    opacity: 1;
  }
  100% {
    top: -90px;
    display: none;
    opacity: 0;
  }
}
@-o-keyframes textUp {
  0% {
    top: 0px;
    display: relative;
    opacity: 0;
  }
  1% {
    top: 0px;
    display: relative;
    opacity: 1;
  }
  24% {
    top: 0px;
    display: relative;
    opacity: 1;
  }
  25% {
    top: 0px;
    display: none;
    opacity: 0;
  }
  26% {
    top: -30px;
    display: relative;
    opacity: 0;
  }
  27% {
    top: -30px;
    display: relative;
    opacity: 1;
  }
  49% {
    top: -30px;
    display: relative;
    opacity: 1;
  }
  50% {
    top: -30px;
    display: none;
    opacity: 0;
  }
  51% {
    top: -60px;
    display: relative;
    opacity: 0;
  }
  52% {
    top: -60px;
    display: relative;
    opacity: 1;
  }
  74% {
    top: -60px;
    display: relative;
    opacity: 1;
  }
  75% {
    top: -60px;
    display: none;
    opacity: 0;
  }
  76% {
    top: -90px;
    display: relative;
    opacity: 0;
  }
  77% {
    top: -90px;
    display: relative;
    opacity: 1;
  }
  99% {
    top: -90px;
    display: relative;
    opacity: 1;
  }
  100% {
    top: -90px;
    display: none;
    opacity: 0;
  }
}
@-ms-keyframes textUp {
  0% {
    top: 0px;
    display: relative;
    opacity: 0;
  }
  1% {
    top: 0px;
    display: relative;
    opacity: 1;
  }
  24% {
    top: 0px;
    display: relative;
    opacity: 1;
  }
  25% {
    top: 0px;
    display: none;
    opacity: 0;
  }
  26% {
    top: -30px;
    display: relative;
    opacity: 0;
  }
  27% {
    top: -30px;
    display: relative;
    opacity: 1;
  }
  49% {
    top: -30px;
    display: relative;
    opacity: 1;
  }
  50% {
    top: -30px;
    display: none;
    opacity: 0;
  }
  51% {
    top: -60px;
    display: relative;
    opacity: 0;
  }
  52% {
    top: -60px;
    display: relative;
    opacity: 1;
  }
  74% {
    top: -60px;
    display: relative;
    opacity: 1;
  }
  75% {
    top: -60px;
    display: none;
    opacity: 0;
  }
  76% {
    top: -90px;
    display: relative;
    opacity: 0;
  }
  77% {
    top: -90px;
    display: relative;
    opacity: 1;
  }
  99% {
    top: -90px;
    display: relative;
    opacity: 1;
  }
  100% {
    top: -90px;
    display: none;
    opacity: 0;
  }
}
@keyframes colorChange {
  0% {
    background-color: #ef5350;
  }
  25% {
    background-color: #ef5350;
  }
  26% {
    background-color: #4f759b;
  }
  50% {
    background-color: #4f759b;
  }
  51% {
    background-color: #55896f;
  }
  75% {
    background-color: #55896f;
  }
  76% {
    background-color: #fda543;
  }
  100% {
    background-color: #fda543;
  }
}
@-webkit-keyframes colorChange {
  0% {
    background-color: #ef5350;
  }
  25% {
    background-color: #ef5350;
  }
  26% {
    background-color: #4f759b;
  }
  50% {
    background-color: #4f759b;
  }
  51% {
    background-color: #55896f;
  }
  75% {
    background-color: #55896f;
  }
  76% {
    background-color: #fda543;
  }
  100% {
    background-color: #fda543;
  }
}
@-moz-keyframes colorChange {
  0% {
    background-color: #ef5350;
  }
  25% {
    background-color: #ef5350;
  }
  26% {
    background-color: #4f759b;
  }
  50% {
    background-color: #4f759b;
  }
  51% {
    background-color: #55896f;
  }
  75% {
    background-color: #55896f;
  }
  76% {
    background-color: #fda543;
  }
  100% {
    background-color: #fda543;
  }
}
@-o-keyframes colorChange {
  0% {
    background-color: #ef5350;
  }
  25% {
    background-color: #ef5350;
  }
  26% {
    background-color: #4f759b;
  }
  50% {
    background-color: #4f759b;
  }
  51% {
    background-color: #55896f;
  }
  75% {
    background-color: #55896f;
  }
  76% {
    background-color: #fda543;
  }
  100% {
    background-color: #fda543;
  }
}
@-ms-keyframes colorChange {
  0% {
    background-color: #ef5350;
  }
  25% {
    background-color: #ef5350;
  }
  26% {
    background-color: #4f759b;
  }
  50% {
    background-color: #4f759b;
  }
  51% {
    background-color: #55896f;
  }
  75% {
    background-color: #55896f;
  }
  76% {
    background-color: #fda543;
  }
  100% {
    background-color: #fda543;
  }
}
@keyframes animationFrames {
  0% {
    transform: translate(-360px, 15px);
    opacity: 0;
  }
  1% {
    transform: translate(-360px, 15px);
    opacity: 1;
  }
  24% {
    transform: translate(-360px, 15px);
    opacity: 1;
  }
  25% {
    transform: translate(-360px, 15px);
    opacity: 0;
  }
  26% {
    transform: translate(-240px, 15px);
    opacity: 0;
  }
  27% {
    transform: translate(-240px, 15px);
    opacity: 1;
  }
  49% {
    transform: translate(-240px, 15px);
    opacity: 1;
  }
  50% {
    transform: translate(-240px, 15px);
    opacity: 0;
  }
  51% {
    transform: translate(-120px, 15px);
    opacity: 0;
  }
  52% {
    transform: translate(-120px, 15px);
    opacity: 1;
  }
  74% {
    transform: translate(-120px, 15px);
    opacity: 1;
  }
  75% {
    transform: translate(-120px, 15px);
    opacity: 0;
  }
  76% {
    transform: translate(0px, 15px);
    opacity: 0;
  }
  77% {
    transform: translate(0px, 15px);
    opacity: 1;
  }
  99% {
    transform: translate(0px, 15px);
    opacity: 1;
  }
  100% {
    transform: translate(0px, 15px);
    opacity: 0;
  }
}
@-moz-keyframes animationFrames {
  0% {
    transform: translate(-480px, 15px);
  }
  20% {
    transform: translate(-480px, 15px);
  }
  21% {
    transform: translate(-360px, 15px);
  }
  40% {
    transform: translate(-360px, 15px);
  }
  41% {
    transform: translate(-240px, 15px);
  }
  60% {
    transform: translate(-240px, 15px);
  }
  61% {
    transform: translate(-120px, 15px);
  }
  80% {
    transform: translate(-120px, 15px);
  }
  81% {
    transform: translate(0px, 15px);
  }
  100% {
    transform: translate(0px, 15px);
  }
}
@-webkit-keyframes animationFrames {
  0% {
    transform: translate(-360px, 15px);
    opacity: 0;
  }
  1% {
    transform: translate(-360px, 15px);
    opacity: 1;
  }
  24% {
    transform: translate(-360px, 15px);
    opacity: 1;
  }
  25% {
    transform: translate(-360px, 15px);
    opacity: 0;
  }
  26% {
    transform: translate(-240px, 15px);
    opacity: 0;
  }
  27% {
    transform: translate(-240px, 15px);
    opacity: 1;
  }
  49% {
    transform: translate(-240px, 15px);
    opacity: 1;
  }
  50% {
    transform: translate(-240px, 15px);
    opacity: 0;
  }
  51% {
    transform: translate(-120px, 15px);
    opacity: 0;
  }
  52% {
    transform: translate(-120px, 15px);
    opacity: 1;
  }
  74% {
    transform: translate(-120px, 15px);
    opacity: 1;
  }
  75% {
    transform: translate(-120px, 15px);
    opacity: 0;
  }
  76% {
    transform: translate(0px, 15px);
    opacity: 0;
  }
  77% {
    transform: translate(0px, 15px);
    opacity: 1;
  }
  99% {
    transform: translate(0px, 15px);
    opacity: 1;
  }
  100% {
    transform: translate(0px, 15px);
    opacity: 0;
  }
}
@-o-keyframes animationFrames {
  0% {
    transform: translate(-360px, 15px);
    opacity: 0;
  }
  1% {
    transform: translate(-360px, 15px);
    opacity: 1;
  }
  24% {
    transform: translate(-360px, 15px);
    opacity: 1;
  }
  25% {
    transform: translate(-360px, 15px);
    opacity: 0;
  }
  26% {
    transform: translate(-240px, 15px);
    opacity: 0;
  }
  27% {
    transform: translate(-240px, 15px);
    opacity: 1;
  }
  49% {
    transform: translate(-240px, 15px);
    opacity: 1;
  }
  50% {
    transform: translate(-240px, 15px);
    opacity: 0;
  }
  51% {
    transform: translate(-120px, 15px);
    opacity: 0;
  }
  52% {
    transform: translate(-120px, 15px);
    opacity: 1;
  }
  74% {
    transform: translate(-120px, 15px);
    opacity: 1;
  }
  75% {
    transform: translate(-120px, 15px);
    opacity: 0;
  }
  76% {
    transform: translate(0px, 15px);
    opacity: 0;
  }
  77% {
    transform: translate(0px, 15px);
    opacity: 1;
  }
  99% {
    transform: translate(0px, 15px);
    opacity: 1;
  }
  100% {
    transform: translate(0px, 15px);
    opacity: 0;
  }
}
@-ms-keyframes animationFrames {
  0% {
    transform: translate(-360px, 15px);
    opacity: 0;
  }
  1% {
    transform: translate(-360px, 15px);
    opacity: 1;
  }
  24% {
    transform: translate(-360px, 15px);
    opacity: 1;
  }
  25% {
    transform: translate(-360px, 15px);
    opacity: 0;
  }
  26% {
    transform: translate(-240px, 15px);
    opacity: 0;
  }
  27% {
    transform: translate(-240px, 15px);
    opacity: 1;
  }
  49% {
    transform: translate(-240px, 15px);
    opacity: 1;
  }
  50% {
    transform: translate(-240px, 15px);
    opacity: 0;
  }
  51% {
    transform: translate(-120px, 15px);
    opacity: 0;
  }
  52% {
    transform: translate(-120px, 15px);
    opacity: 1;
  }
  74% {
    transform: translate(-120px, 15px);
    opacity: 1;
  }
  75% {
    transform: translate(-120px, 15px);
    opacity: 0;
  }
  76% {
    transform: translate(0px, 15px);
    opacity: 0;
  }
  77% {
    transform: translate(0px, 15px);
    opacity: 1;
  }
  99% {
    transform: translate(0px, 15px);
    opacity: 1;
  }
  100% {
    transform: translate(0px, 15px);
    opacity: 0;
  }
}
</style>

