<template>
  <div class="posts-page">
    <post-list :is-admin="false" :posts="loadposts"></post-list>
  </div>
</template>
<script>
import PostList from '@/components/Posts/PostList'
export default {
  components: { PostList },
  computed: {
    loadposts() {
      return this.$store.getters.getPosts
    },
  },
}
</script>
<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
