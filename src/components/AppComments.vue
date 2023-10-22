<template>
  <div class="container">
    <p>
      <button class="btn primary" @click="loadComments">Загрузить комментарии</button>
    </p>
    <div class="card" v-if="comments.length > 0">
      <h2>Комментарии</h2>
      <ul class="list">
        <li class="list-item" v-for="item in comments" :key="item.id">
          <div>
            <p><strong>{{ item.email }}</strong></p>
            <small>{{ item.body }}</small>
          </div>
        </li>
      </ul>
    </div>
    <div class="loader" v-if="isLoading"></div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      comments: [],
      isLoading: false
    }
  },
  methods: {
    async loadComments () {
      this.isLoading = true
      try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/comments?_limit=42')

        if (res.status !== 200) {
          throw new Error('В настоящее время комментарии недоступны')
        }

        this.comments = res.data
      } catch (e) {
        console.error(e.message)
      } finally {
        this.isLoading = false
      }
    }
  }
}
</script>

<style>

</style>
