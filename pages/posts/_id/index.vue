<template>
  <div class="single-post-page">
    <section class="post">
      <h1 class="post-title">{{ post.title }}</h1>
      <div class="post-detail">
        <div class="post-detail">Last updated at XXX-XX-XX</div>
        <div class="post-detail">Written by name</div>
      </div>
      <p class="post-content">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate,
        est quaerat. Ab accusantium consequuntur deleniti dolor eaque error
        exercitationem iusto, labore modi necessitatibus numquam porro quia quis
        repellat reprehenderit, veniam!
      </p>
    </section>
    <section class="post-feedback">
      <p>
        Let me know your feedbackabout the post, send mail to
        <a href="mailto:yazeed_nazal@hotmail.com">yazeed_nazal@hotmail.com</a>
      </p>
    </section>
  </div>
</template>
<script>
export default {
  asyncData(context) {
    return new Promise((resolve, reject) => {
      resolve({
        post: {
          id: '1',
          thumbnail:
            'https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg',
          title: 'Test post' + context.route.params.id,
          content: 'Test Content',
        },
      })
      reject(new Error('401'))
    })
      .then((data) => {
        return data
      })
      .catch((e) => {
        context.error(new Error('401'))
      })
  },
}
</script>
<style scoped>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>
