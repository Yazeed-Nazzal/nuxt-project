import Vuex from 'vuex'
import axios from 'axios'

const createStroe = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: {},
    },
    mutations: {
      setposts(state, payload) {
        state.loadedPosts = payload
      },
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return axios
          .get('https://nuxt-blog-ad8b4-default-rtdb.firebaseio.com/posts.json')
          .then((res) => {
            const postsArray = []
            for (const key in res.data) {
              postsArray.push({ ...res.data[key].post, id: key })
              console.log(postsArray)
              vuexContext.commit('setposts', postsArray)
            }
          })
          .catch((e) => context.error(e))
      },
      setPosts(state, posts) {
        state.commit('setposts', posts)
      },
    },
    modules: {},
    getters: {
      getPosts(state) {
        return state.loadedPosts
      },
    },
  })
}
export default createStroe
