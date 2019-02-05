<template>
    <layout>

      <section>
        <v-layout column class="my-5">
          <v-flex xs12 px-5 class="card-post">
            <v-card :max-width="720" xs12 flat>
              <v-layout column wrap>
                <v-flex xs12>
                  <v-card-title primary-title>
                    <h1 v-html="$page.post.title"></h1>
                    <v-flex v-html="$page.post.content"></v-flex>
                  </v-card-title>
                </v-flex>
              </v-layout>
            </v-card>
          </v-flex>
        </v-layout>
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
    font-size: 41px;
    line-height: 1.25;
  }

  .card-post h2 {
    font-weight: 21px;
    margin: 24px 0;
    font-weight: normal;
  }
  .card-post h3 {
    font-weight: normal;
    font-size: 34px;
    line-height: 1.25;
  }

  .card-post p {
    font-weight: 100;
    font-size: 21px;
    letter-spacing: 0;
    /* margin: 0 16px; */
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
  }

  .card-post img {
    width: 100%;
    max-height: 400;
  }
</style>