<template>
  <layout>
    <!-- <v-img alt="Example image" :src="imgUrl" width="135"></v-img>
    <h1>Hello, world!</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    <div class="title mb-3">Total posts: {{ totalCount }}</div>
    <v-list two-line="two-line">
      <v-list-tile v-for="(post, index) in posts" :key="index" @click="onClick(post)">
        <v-list-tile-content>
          <v-list-tile-title>{{ post.node.title }}</v-list-tile-title>
          <v-list-tile-sub-title>{{ post.node.date }}</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list> -->

    <v-content>

      <section>
        <v-layout column class="my-5">
          <v-flex xs12 px-5>
            <v-container grid-list-xl px-5>
              <v-layout row wrap px-5>
                <v-flex v-for="(post, index) in posts" :key="index" @click="onClick(post)" xs12 md6>
                  <v-card xs12 md6 hover flat>
                    <v-responsive min-height="350" transition :contain=true>
                      <v-img class="white--text" :src="getImageUrl()"></v-img>
                    </v-responsive>
                    <v-card-title>
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
                            <div class="card-title mb-0 py-3">{{post.node.title}}</div>
                            <div class="subheading">{{ postTitle[index] }}...</div>
                          </div>
                        </div>
                      </v-flex>
                    </v-card-title>
                    <v-flex px-4><v-divider></v-divider></v-flex>
                    <v-flex pa-4>
                      <div class="card-footer">
                        <div class="caption">0 views</div>
                        <div class="caption ml-3">Write a comment</div>
                        <v-spacer></v-spacer>
                        <v-icon small color="red">far fa-heart</v-icon>
                      </div>
                    </v-flex>
                  </v-card>
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
      dateOfPost: [],
      postTitle: []
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
        console.log(node.data)
      })
      // moment(this.$page.allPost.edges.node.date).toNow()
    }
  },
  mounted() {
    this.dateOfPost = this.$page.allPost.edges.map(x => {
        // console.log(x.node.date)
        this.postTitle.push(x.node.headings[0].value)
        return moment(x.node.date).toNow(true) + ' ago '
    })
    console.log(this.dateOfPost, this.postTitle)
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
  .card-title {
    font-size: 20px;
    font-weight: 500;
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
    color: #333!important;
  }

  /* .title-section .subheading {
    font-weight: 300;
  } */

</style>

</style>
