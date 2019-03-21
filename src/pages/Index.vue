<template>
  <layout>
    <v-content>

      <section>
        <v-layout column class="my-5">
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap>
                <v-flex v-for="(post, index) in posts" :key="index" @click="onClick(post)" v-on:get-all-posts="posts" xs6>
                  <v-card class="post-card" xs12 md6 flat>
                    <v-responsive transition>
                      <v-img contain :lazy-src="image[index%2]" class="card-image white--text" :src="image[index%2]">
                        <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
                          <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                        </v-layout>
                      </v-img>
                    </v-responsive>
                    <div class="card-title text-xs-left mb-0 py-3">{{post.node.title}}</div>
                    <div class="card-summary subheading text-xs-left">{{ postSummary[index] }}</div>

                    <!-- <v-card-title>
                      <v-flex>
                        <div class="avatar-section py-3">
                          <v-avatar slot="activator" size="36px" ma-2>
                            <img :src=returnAvatar() alt="Avatar">
                          </v-avatar>
                          <div>
                            <v-flex py-0 class="caption">John Leider</v-flex>
                            <v-flex py-0 d-inline-flex class="caption">
                              <span class="pdr-10">{{ dateOfPost[index] }}</span>
                              <li></li>
                              <span>{{post.node.timeToRead}} min</span>
                            </v-flex>
                          </div>
                          <v-spacer></v-spacer>
                          <v-icon small>fas fa-ellipsis-v</v-icon>
                        </div>
                        <div class="title-section">
                          <div>
                          </div>
                        </div>
                      </v-flex>
                    </v-card-title> -->
                    <!-- <v-flex px-4><v-divider></v-divider></v-flex>
                    <v-flex pa-4>
                      <div class="card-footer">
                        <div class="caption">0 views</div>
                        <div class="caption ml-3">Write a comment</div>
                        <v-spacer></v-spacer>
                        <v-icon small color="red">far fa-heart</v-icon>
                      </div>
                    </v-flex> -->
                  </v-card>

                  <!-- <v-card flat>
                    <v-img :src="`https://picsum.photos/500/300?image=${index * 5 + 10}`" :lazy-src="`https://picsum.photos/500/300?image=${index * 5 + 10}`" aspect-ratio="1" class="grey lighten-2 fill-height" height="100%">
                      <div class="fill-height bottom-gradient post-overlay"></div>
                    </v-img>
                    <v-card-title class="px-0">
                      <div>
                        <div class="meta">{{ post.node.date | moment("MMMM Do, YYYY")}}</div>
                        <h3 class="post-title">{{ post.node.title }}</h3>
                      </div>
                    </v-card-title>
                  </v-card> -->

                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>

    </v-content>
  </layout>
</template>

<page-query>
query {
  allPost {
    totalCount
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

export default {
  data () {
    return {
      imgUrl: require('@/favicon.png'),
      image: ['https://colorlib.com/preview/theme/libro/images/image_1.jpg', 'https://colorlib.com/preview/theme/libro/images/image_5.jpg'],
      dateOfPost: [],
      postSummary: []
    }
  },
  computed: {
    posts () {
      return this.$page.allPost.edges
    },
    totalCount () {
      return this.$page.allPost.totalCount
    },
    postAddedOn() {
      this.$page.allPost.edges.map(node => {
        // console.log(node.data)
      })
      // moment(this.$page.allPost.edges.node.date).toNow()
    }
  },
  mounted() {
    this.dateOfPost = this.$page.allPost.edges.map(x => {
        // console.log(x.node.date)
        this.postSummary.push(x.node.headings[0].value)
        return moment(x.node.date).toNow(true) + ' ago '
    })
    // console.log(this.dateOfPost, this.postSummary)
  },
  methods: {
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
    }
  }
}
</script>

<style>

  .meta {
    font-size: 12px;
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
  }

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

  /* .title-section .post-title{
    font-weight: 400;
  } */

  .nav-links > .navIsActive {
    /* color: #e04f62!important; */
    text-decoration: underline;
  }

  /* .title-section .subheading {
    font-weight: 300;
  } */

</style>

</style>
