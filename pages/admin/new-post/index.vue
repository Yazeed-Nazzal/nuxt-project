<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <AdminPostForm @submitted="onSubmitted"></AdminPostForm>
    </section>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  layout: 'admin',
  methods: {
    onSubmitted(post) {
      console.log(post)
      axios
        .post(
          'https://nuxt-blog-ad8b4-default-rtdb.firebaseio.com/posts.json',
          {
            post,
          }
        )
        .then((res) => {
          console.log('good')
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
}
</script>
<style>
.new-post-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .new-post-form {
    width: 500px;
  }
}
</style>
