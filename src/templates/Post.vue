<template>
    <layout>

      <section>
        <v-container pa-0 grid-list-xs fill-height>
          <v-layout column>
            <v-flex style="padding: 50px;"></v-flex>
            <v-flex class="card-post mx-5">
              <v-flex class="text-xs-center">
                <h1 v-html="$page.post.title"></h1>
              </v-flex>
              <v-flex v-html="$page.post.content"></v-flex>
            </v-flex>
            <!-- <v-flex>
              <h3 class="h3-heading">You may also like</h3>
            </v-flex>
            <v-flex class="d-flex">
              <v-flex class="pa-2" xs12 v-for="(post, index) in 3">
                <a class="card-link" href="#">
                  <article class="blog-card">
                    <img class="post-image" :src="image" />
                    <div class="article-details">
                      <h4 class="post-category">{{ category }}</h4>
                      <h3 class="post-title">{{ name }}</h3>
                      <p class="post-description">{{ desc }}</p>
                      <p class="post-author">By {{ author }}</p>
                    </div>
                  </article>
                </a>
              </v-flex> 
            </v-flex> -->
          </v-layout>
        </v-container>
      </section>
    </layout>
</template>


<page-query>
query Post ($path: String!) {
  post: post (path: $path) {
    title
    content
  }
}
</page-query>


<script>
export default {
  metaInfo () {
    return {
      title: this.$page.post.title
    }
  },
  data() {
    return {
      name: '10 Best Things to Do in Seattle',
      category: 'Travel',
      image: 'https://source.unsplash.com/DnWYw0zLJBg',
      author: 'Katherine Kato',
      desc: `Seattle is a seaport city on the west coast of the United States...`
    }
  },
  mounted() {
    this.$emit('getAllPosts', (posts) => {
      console.log('POst vue event triggered', this.$metaInfo.title)
      console.log(this.$root.$children, posts)
    })
  }
}
</script>

<style>
  .card-post {
    margin: 0 auto;
  }

  .card-post h1 {
    font-weight: normal;
    font-size: 32px;
    line-height: 1.25;
    font-weight: bolder;
    font-family: 'Arvo', serif!important;
    text-align: center;
  }

  .card-post h2 {
    font-family: 'Work Sans', sans-serif!important;    
    text-align: center;
    margin: 24px;
    font-size: 17px;
    color: #b3b3b3!important;
    line-height: 28px;
    font-weight: normal;
    text-align: center;
  }
  .card-post h3 {
    font-family: 'Work Sans', sans-serif!important; 
    font-size: 32px;
    font-weight: normal;
    margin: 50px 0;
    padding-top: 40px;
    color: #424143!important;
    /* border-bottom: 1px solid #7d8791; */
    text-align: center;
  }
  .h3-heading {
    font-family: 'Work Sans', sans-serif!important; 
    font-size: 32px;
    font-weight: normal;
    margin: 50px 0;
    color: #424143!important;

  }

  .card-post h3::after {
    background: rgb(224, 79, 97) none repeat scroll 0 0;
    bottom: -15px;
    content: "";
    display: block;
    height: 2px;
    left: 0;
    margin: 0 auto;
    right: 0;
    width: 80px;
  }

  .card-post p {
    /* font-weight: 100; */
    text-align: start;
    font-size: 16px;
    letter-spacing: 0;
    display: grid;
    font-family: 'Work Sans', sans-serif!important; 
    color: #3b3d3f;
  }

  .card-post blockquote {
    padding: 5px 20px 5px 10px;
    border-left: 2px solid rgb(224, 79, 97);
    line-height: 32px;
    margin: 0 10px 20px 10px;
  }

  .card-post blockquote p {
    margin: 0;
    font-family: 'Work Sans', sans-serif!important; 
  }

  .card-post img {
    width: 100%;
    max-width: 400px;
    margin: auto;
  }

  .blog-card {
    display: flex;
    flex-direction: row;
    background: #fff;
    box-shadow: 0 0.1875rem 1.5rem rgba(0, 0, 0, 0.2);
    border-radius: 0.375rem;
    overflow: hidden;
  }

  .card-link {
    position: relative;
    display: block;
    color: inherit;
    text-decoration: none;
  }
  .card-link:hover .post-title {
    transition: color 0.3s ease;
    color: #e04f62;
  }
  .card-link:hover .post-image {
    transition: opacity 0.3s ease;
    opacity: 0.9;
  }

  .post-image {
    transition: opacity 0.3s ease;
    display: block;
    width: 100%;
    object-fit: cover;
  }

  .article-details {
    padding: 1.5rem;
  }

  .post-category {
    display: inline-block;
    text-transform: uppercase;
    font-size: 0.75rem;
    font-weight: 700;
    line-height: 1;
    letter-spacing: 0.0625rem;
    margin: 0 0 0.75rem 0;
    padding: 0 0 0.25rem 0;
    border-bottom: 0.125rem solid #ebebeb;
  }

  .post-title {
    transition: color 0.3s ease;
    font-size: 1.125rem;
    line-height: 1.4;
    color: #121212;
    font-weight: 700;
    margin: 0 0 0.5rem 0;
  }

  .post-author {
    font-size: 0.875rem;
    line-height: 1;
    margin: 1.125rem 0 0 0;
    padding: 1.125rem 0 0 0;
    border-top: 0.0625rem solid #ebebeb;
  }

  @supports (display: grid) {

  .post-image {
    height: 100%;
  }

  .blog-card {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr;
  }

  @media (max-width: 40rem) {
    .blog-card {
      grid-template-columns: auto;
      grid-template-rows: 12rem 1fr;
    }
  }
}


</style>