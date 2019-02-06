<template>
    <layout>

      <section>
        <v-container grid-list-xs fill-height>
          <v-layout column class="ma-5">
            <v-flex class="card-post ma-5">
              <v-flex class="text-xs-center">
                <h1 v-html="$page.post.title"></h1>
              </v-flex>
              <v-flex v-html="$page.post.content"></v-flex>
            </v-flex>
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
  }
}
</script>

<style>
  .card-post {
    margin: 0 auto;
  }

  .card-post h1 {
    font-weight: normal;
    font-size: 48px;
    line-height: 1.25;
    font-family: 'Poppins', sans-serif!important;
  }

  .card-post h2 {
    font-family: 'Poppins', sans-serif!important;
    text-align: center;
    margin: 24px;
    font-size: 18px;
    color: #7d8791!important;
    line-height: 25px;
  }
  .card-post h3 {
    font-family: 'Poppins', sans-serif!important;
  }

  .card-post p {
    /* font-weight: 100; */
    font-size: 16px;
    letter-spacing: 0;
    display: grid;
    font-family: 'Poppins', sans-serif!important;
    color: #3b3d3f;
  }

  .card-post blockquote {
    /* margin-right: calc((100% - 740px) / 2 + 60px); */
    /* margin-left: calc((100% - 740px) / 2); */
    padding: 10px 20px 10px 18px;
    border-left: 2px solid rgb(188, 228, 196);
    font-size: 24px;
    line-height: 32px;
    margin: 10px;
  }

  .card-post blockquote p {
    margin: 0;
    font-family: 'Poppins', sans-serif!important;
  }

  .card-post img {
    width: 100%;
    max-width: 400px;
    margin: 20px auto;
  }
</style>