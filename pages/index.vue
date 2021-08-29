<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get the latest news</h1>
    </section>
    <post-list :is-admin="false" :posts="posts"></post-list>
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList'
export default {
  components: { PostList },
  asyncData(context, callback) {
    callback(null, {
      posts: [
        {
          id: '1',
          thumbnail:
            'https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg',
          title: 'Test post',
          content: 'Test Content',
        },
        {
          id: '2',
          thumbnail:
            'https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg',
          title: 'Test post',
          content: 'Test Content',
        },
        {
          id: '3',
          thumbnail:
            'https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg',
          title: 'Test post',
          content: 'Test Content',
        },
      ],
    })
  },
  data() {
    return {}
  },
}
</script>

<style scoped>
.intro {
  height: 300px;
  width: 800px;
  position: relative;
  padding: 30px;
  background-image: url('~assets/images/nuxt logo.png');
  box-sizing: border-box;
  background-position: center;
  background-size: cover;
  margin: 10px auto;
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}
</style>
