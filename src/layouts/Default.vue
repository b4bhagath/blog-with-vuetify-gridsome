<template>
  <v-app>
    <v-navigation-drawer right v-model="navDrawer" temporary style="position:fixed; overflow-y:scroll;">
      <v-flex>
        <v-card flat :height="120">
          <v-img class="fill-height" src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" aspect-ratio="2.75">
          </v-img>
        </v-card>
        <v-flex>
          <v-flex class="profile-header" xs12 justify-center>
            <v-avatar :tile="false" :size="130">
              <img :src="avatarPhoto" alt="avatar">
            </v-avatar>
          </v-flex>
          <v-flex style="padding: 95px 35px 25px;">
            <h1 class="text-xs-center headline">Nikhil Bhagath</h1>
            <v-flex  pt-3 d-flex justify-center>
              <div class="profile-location text-xs-center">
                <v-flex class="pr-1 d-inline"><v-icon color="rgb(224, 79, 97)">place</v-icon></v-flex>
                <v-flex class="loc pr-3 caption">Bengaluru, IN</v-flex>
              </div>
            </v-flex>
            <v-flex>
              <p class="body-2 pt-3 text-xs-center">My name is Nikhil Bhagath and I write about my life, travels and youtube.</p>
            </v-flex>
          </v-flex>
          <v-flex>
            
            <v-list subheader>
              <v-flex  v-for="item in navItems" :key="item.title">
                <v-divider></v-divider>
                <v-list-tile>  
                  <v-list-tile-content>
                    <v-list-tile-title class="text-xs-center" v-html="item.title"></v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-flex>
              <v-divider></v-divider>

            </v-list>
          </v-flex>
        </v-flex>
        
      </v-flex>
    </v-navigation-drawer>
    
    <section class="Container" v-if="pageLoad">
      <v-container class="fill-width" pa-0 ma-0 grid-list-xs>
        <v-layout fill-height pa-0 mb-0 row wrap>
          <v-flex class="Top" justify-space-between xs12>
            <v-layout row wrap fill-height pa-4>
              <v-flex xs4 class="fill-height">
                <div class="logo white--text">
                  Logo
                </div>
              </v-flex>
              <!-- <v-flex md4 class="fill-height" offset-md1 hidden-sm-and-down>
                <v-btn v-if="closeIcon" flat fab dark>
                  <v-icon @mouseenter="mouseHover()">close</v-icon>
                </v-btn>
                <span @mouseleave="mouseLeave" class="reading-mode mr-3" v-else>Reading Mode</span>
              </v-flex> -->
              <v-flex xs1 offset-xs7 md1 class="fill-height" offset-md7>
                <v-btn flat fab color="rgb(224, 79, 97)" class="navmenu" @click.stop="navDrawer = !navDrawer">
                  <v-icon>menu</v-icon>
                </v-btn>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex class="Left fill-height" xs12 md6>
            <v-img :src="landingPhoto" :lazy-src="landingPhoto" aspect-ratio="1" class="grey lighten-2 fill-height" height="100%">
              <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
              </v-layout>
              <div class="left-div-overlay">
                <v-layout align-end justify-center row fill-height>
                  <v-flex d-block mb-4 px-5 xs12>
                    <v-responsive transition>
                      <v-avatar :tile="false" :size="150" color="grey lighten-4 mb-3">
                        <v-img class="img-border" :src="avatarPhoto" :lazy-src="avatarPhoto" alt="avatar">
                          <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
                            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                          </v-layout>
                        </v-img>
                      </v-avatar>
                    </v-responsive>
                    <h1 class="hello">Hello.</h1>
                    <h2 class="hello-description">My name is Nikhil Bhagath नाम तो सुना ही होगा and I write about my life, travels and youtube.</h2>
                  </v-flex>
                </v-layout>
              </div>
            </v-img>
          </v-flex>
          <v-flex class="Right fill-height" xs12 md6>
            <slot></slot>
          </v-flex>
        </v-layout>
      </v-container>
    </section>
    
    <section   v-else>
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
var delay = require('lodash/delay');
export default {
  name: "app",
  data() {
    return {
      title: "Your Logo",
      icons: ["fab fa-facebook", "fab fa-twitter", "fab fa-instagram"],
      pageLoad: false,
      landingPhoto: require('../../static/images/B612_20190321_211742_314.jpg'),
      avatarPhoto: require('../../static/images/avatar-circle.png'),
      navDrawer: false,
      navItems: [
          { title: 'Homepage' },
          { title: 'About Us' },
          { title: 'Contact Us' }
        ],
      closeIcon: true
    };
  },
  mounted() {
    if (this.$root.$children[0].posts) console.log('pageLoaded'); this.pageLoad = true;
  },
  methods: {
    mouseHover() {
      let self = this
      console.log('Hover')
      delay(function(text) {
        self.closeIcon = false
        }, 100, 'deferred');
    },
    mouseLeave() {
      let self = this
      delay(function(text) {
        self.closeIcon = true
        }, 100,  'deferred');
    }
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Arvo|Playfair+Display|Work+Sans');
body,
html {
  /* padding: 0;
  margin: 0; */
  background: #f5f4f4;
  font-size: 13px;
  font-family: 'Arvo', monospace!important;
}

* {
    box-sizing: border-box;
}
body {
    overflow-x: hidden;
}

.fill-width {
  max-width: initial!important;
}

.Top {
    /* display: flex; */
    /* align-items: center; */
    font-size: 3rem;
    position: absolute;
    z-index: 4;
    height: 120px;
    width: 100%;
}

.logo {
  cursor: pointer;
}

.Container {
    display: flex;
    overflow: hidden;
    height: 100vh;
    position: relative;
    width: 100%;
    backface-visibility: hidden;
    will-change: overflow;
}

.profile-header {
  display: flex;
  position: absolute;
  top: 51px;
  width: 100%;
  margin: auto;
}

.profile-location > .loc{
  display: inline-block;
  position: relative;
  top: -4px;
}

.profile-location {
  position: relative;
}

.Left,
.Right {
    overflow: auto;
    background: #fff;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: none;
}
.Left::-webkit-scrollbar,
.Right::-webkit-scrollbar {
    display: none;
}

.Left {
    height: 100%;
}

.Right {
    height: auto;
}

.img-border {
  border: 3px solid rgb(224, 79, 97);
  border-radius: 100%;
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

.close-icon {
  /* top: 30px; */
  /* right: 45px; */
  opacity: 0.75;
  /* position: absolute; */
  
}

.reading-mode {
  font-size: 14px;
  cursor: pointer;
}

.hello {
  font-size: 56px;
  font-family: 'Work Sans', serif;
}
.hello-description {
  font-size: 24px;
  font-family: 'Work Sans', serif;
}

.body {
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
  font-family: 'Work Sans', serif;
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

@media (min-width: 600px) and (max-width: 959px) {
  .Left {
    height: 55%!important;
  }
  
}

@media (min-width: 0) and (max-width: 959px) {
  .Container {
    overflow: unset;
    display: inline-block;
  }

  .right-posts {
    margin: 0!important;
  }
  .hello {
    font-size: 32px;
    font-family: 'Work Sans', serif;
  }
  .hello-description {
    font-size: 15px;
    font-family: 'Work Sans', serif;
  }

  .Left .v-avatar {
    width: 80px;
    height: 80px;
  }
  
  .card-post {
    margin: 24px!important;
  }
  .card-post blockquote {
    font-size: 14px!important;
    line-height: 23px!important;
  }
  .v-avatar {
    height: 80px!important;
    width: 80px!important;
  }

  .close-icon {
    display: none;
  }

  .navmenu {
    color: white!important;
    caret-color: white!important;
  }

  .Top {
    height: 80px;
  }

  .Top > .logo {
    margin: 0!important;
  }
  /* .Left,
  .Right {
      overflow: auto;
      background: #fff;
      -webkit-overflow-scrolling: touch;
      -ms-overflow-style: none;
  }
  .Left::-webkit-scrollbar,
  .Right::-webkit-scrollbar {
      display: none;
  }
  .Left {
      height: 100%;
  }

  .Right {
      height: auto;
  } */
  .Left {
    height: 55%!important;
  }
}
</style>

