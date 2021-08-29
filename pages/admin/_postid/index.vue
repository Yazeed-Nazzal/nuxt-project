<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" />
    </section>
  </div>
</template>
<script>
export default {
  layout: 'admin',
  data() {
    return {
      loadedPost: {
        author: 'yazeed',
        content: 'test content',
        title: 'test title',
        thumbnailLink:
          'https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg',
      },
    }
  },
}
</script>
<style>
.update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>
