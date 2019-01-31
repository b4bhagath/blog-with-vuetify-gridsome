<template>
  <v-app>

    
    <section>
      <nav>
        <v-container grid-list-xs>
          <v-layout row wrap>
            <v-flex class="text-xs-center">
                <a href="/" id="logo" class="display-3">@b<span class="logonumber">4</span>bhagath</a>
              <div class="nav">
                <div class="nav-links">
                  <router-link class="tab" active-class="navIsActive" to="/">Home</router-link>
                  <router-link class="tab" active-class="navIsActive" to="/about">About</router-link>
                  <router-link class="tab" active-class="navIsActive" to="/contact">Contact</router-link>
                  <!-- <a href="/" target="_blank">Home</a>
                  <a href="#" target="_blank">About</a>
                  <a href="#" target="_blank">Contact</a> -->
                </div>
              </div>
            </v-flex>
          </v-layout>
        </v-container>
      </nav>
    </section>

    <slot></slot>

    <v-footer height="auto">
      <v-card class="flex" flat tile>

        <v-card-actions class="grey darken-3 justify-center">
          <v-layout row wrap align-center>
            <v-flex xs12>
              <div class="white--text ml-3 justify-center">
                Made with
                <v-icon class="red--text">fas fa-heart</v-icon>
                by <a class="white--text" href="https://vuetifyjs.com" target="_blank">Vuetify</a>
                and <a class="white--text" href="https://github.com/vwxyzjn">Nikhil Bhagath</a>
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
    
  </v-app>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<script>
export default {

  name: 'app',
  data() {
    return {
      title: 'Your Logo',
      icons: [
        'fab fa-facebook',
        'fab fa-twitter',
        'fab fa-instagram'
      ]
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Chivo:300,300i,400,400i,700');

@font-face {
    font-family: monlyBold;
    src: url("../../static/fonts/Anders.ttf");
  }

/* @font-face {
  font-family: Aganè;
  src: url("../../static/fonts/Chivo-Light.ttf");
} */

@font-face {
  font-family: Brokes;
  src: url("../../static/fonts/Brokes.otf");
}

* {
  box-sizing: border-box;
  font-family: 'Chivo', sans-serif;
}

#logo {
  font-family: monlyBold, arial!important;
  text-decoration: none;
  color: inherit;
}
.logonumber {
  font-family: Brokes, serif;
}

.nav {
  height: 50px;
  width: 100%;
/*   background-color: #4d4d4d; */
  position: relative;
}

.nav > .nav-links {
    display: flex;
    font-size: 18px;
    justify-content: center;
}

.nav > .nav-links .tab{
  display: inline-block;
  padding: 13px 10px 13px 10px;
  text-decoration: none;
  color: #AFAFAF;
  justify-content: center;
}

.nav > .nav-links .tab:hover {
  color: rgba(0, 0, 0, 1);
}

@media (max-width:600px) {
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
</style>

