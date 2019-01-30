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
                  <v-card xs12 md6 hover>
                    <v-responsive min-height="350" transition :contain=true>
                      <v-img class="white--text"> fas fa-ellipsis-v </v-img>
                    </v-responsive>
                    <v-card-title>
                      <v-flex>
                        <div class="avatar-section py-3">
                          <v-avatar slot="activator" size="36px" ma-2>
                            <img alt="Avatar">
                          </v-avatar>
                          <div>
                            <v-flex py-0 class="caption">John Leider</v-flex>
                            <v-flex py-0 d-inline-flex class="caption">
                              <span class="pdr-10">4 days ago</span>
                              <li></li>
                              <span>1 min</span>
                            </v-flex>
                          </div>
                          <v-spacer></v-spacer>
                          <v-icon small>fas fa-ellipsis-v</v-icon>
                        </div>
                        <div class="title-section">
                          <div>
                            <div class="post-title mb-0 py-3">{{post.node.title}}</div>
                            <div class="subheading"></div>
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
        date
      }
    }
  }
}
</page-query>


<script>
export default {
  data () {
    return {
      imgUrl: require('@/favicon.png')
    }
  },
  computed: {
    posts () {
      return this.$page.allPost.edges
    },
    totalCount () {
      return this.$page.allPost.totalCount
    }
  },
  methods: {
    onClick (post) {
      this.$router.push({ path: post.node.path })
    }
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
