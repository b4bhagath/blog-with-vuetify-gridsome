<template>
  <layout>
    <v-content>

      <section>
        <v-layout column class="my-5">
          <v-flex xs12>
            <v-container fluid grid-list-xl align-content-start>
              <v-layout row wrap mb-5>
                <v-flex xs6 v-for="(post, index) in posts" :key="index">
                  <v-flex v-for="(p, i) in post" :key="i" @click="onClick(p)" v-on:get-all-posts="p" xs12>
                    <v-card class="post-card" xs12 md6 flat>
                      <v-responsive transition>
                        <v-img contain :lazy-src="image[index%2]" class="card-image white--text" :src="image[index%2]">
                          <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
                            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                          </v-layout>
                        </v-img>
                      </v-responsive>
                      <div class="meta body-2 py-3">{{ p.node.date | moment("MMMM Do, YYYY")}}</div>
                      <div class="card-title text-xs-left mb-0 pb-1">{{p.node.title}}</div>
                      <div class="card-summary subheading text-xs-left">{{ p.node.headings[0].value }}</div>
                    </v-card>
                  </v-flex>
                </v-flex>
              </v-layout>
              <v-layout row wrap justify-center>
                <div class="gs-pagination">
                  <Pager :info="$page.posts.pageInfo" :showNavigation="false"/>
                </div>
                <v-pagination v-model="pagination" :next="pageinationClicked()" prev-icon="mdi-menu-left" next-icon="mdi-menu-right" color="rgb(224, 79, 97)" :length="totalPages" circle></v-pagination>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>

    </v-content>
  </layout>
</template>

<page-query>
query Posts ($page: Int) {
  posts: allPost (perPage: 4, page: $page) @paginate {
    totalCount
    pageInfo {
      totalPages
      currentPage
      isFirst
      isLast
    }
    edges {
      node {
        id
        title
        slug
        path
        date(format: "YYYY-MM-DD")
        headings {
          depth
          value
          anchor
        }
        timeToRead(speed: 320)
      }
    }
  }
}
</page-query>


<script>
var faker = require('faker');
var moment = require('moment');
import { Pager } from "gridsome";
import { isNumber } from 'util';

export default {
  data () {
    return {
      imgUrl: require('@/favicon.png'),
      image: ['https://colorlib.com/preview/theme/libro/images/image_1.jpg', 'https://colorlib.com/preview/theme/libro/images/image_5.jpg'],
      pagination: 1,
      // posts: [[], []]
    }
  },
  components: {
    Pager
  },
  computed: {
    posts() {
      let posts = [[], []]
      this.$page.posts.edges.forEach((val, index) => {
        if(index%2) {
          posts[1].push(val)
        } else {
          posts[0].push(val)
        }
      })
      return posts
    },
    totalCount () {
      return this.$page.posts.totalCount
    },
    totalPages() {
      return this.$page.posts.pageInfo.totalPages
    }
  },
  mounted() {
    this.getPosts()
  },
  methods: {
    pageinationClicked() {
      console.log('pageCicked', this.pagination, typeof this.pagination)
      if(this.pagination) {

        // this.getPosts()
        if(this.pagination === 1) this.$router.push({ path: "/"})
        else this.$router.push({ path: "/" + this.pagination})
      }
      // this.getPosts()
    },
    onClick (post) {
      this.$router.push({ path: post.node.path })
    },
    returnAvatar() {
      return faker.image.avatar()
    },
    getImageUrl() {
      return faker.image.image()
    },
    getCardParah() {
      return faker.lorem.paragraph()
    },
    getPosts() {
      this.$page.posts.edges.forEach((val, index) => {
        if(index%2) {
          this.posts[1].push(val)
        } else {
          this.posts[0].push(val)
        }
      })
    }
  }
}
</script>

<style>

  .meta {
    color: #ee76ad;
    text-align: left;
  }

  .meta:hover {
    color: grey;
    transition: .3s all ease;
  }

  .post-title {
    font-size: 24px;
  }

  .post-title:hover {
    color: #ee76ad;
    transition: .3s all ease;
  }
/* 
  .post-overlay {
    width: 100%;
    height: 100%;
    background-color: transparent;
    -webkit-transition: background-color 200ms ease;
    transition: background-color 200ms ease;
  }

  .post-overlay:hover {
    background-color: rgba(0, 0, 0, .1);
    cursor: pointer;
  }

  .bottom-gradient {
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.4) 0%, transparent 72px);
  } */

  .card-title {
    font-size: 20px;
    font-family: 'Playfair Display', serif;
    /* font-weight: 500; */
  }

  .card-summary {
    font-size: 18px;
    line-height: 1.8;
    font-weight: 300;
    color: #737373;
    font-family: 'Work Sans', sans-serif;
  }

  .post-card:hover .card-title {
    transition: color 0.3s ease;
    color: #e04f62;
  }

  .post-card:hover .card-image {
    transition: opacity 0.3s ease;
    opacity: 0.9;
  }

  .card-footer {
    display: flex;
  }

  .card-footer .caption {
    font-weight: 300;
  }
  .pd-5 {
    padding: 5px;
  }

  .pdr-5 {
    padding-right: 5px;
  }
  .pdr-10 {
    padding-right: 10px;
  }

  .avatar-section {
    display: flex;
    width: 100%
  }

  .title-section {
    width: 100%;
  }

  .gs-pagination > nav{
    display: none;
  }

  /* .title-section .post-title{
    font-weight: 400;
  } */

  /* .nav-links > .navIsActive {
    color: #e04f62!important;
    text-decoration: underline;
  } */

  /* .title-section .subheading {
    font-weight: 300;
  } */

</style>
