<template>
  <div class="container column">
    <app-form @addComponent="addComponent"></app-form>
    <app-body :content="components"></app-body>
  </div>
  <app-comments></app-comments>
</template>

<script>
export default {
  data () {
    return {
      components: [],
      comments: []
    }
  },
  methods: {
    addComponent (data) {
      this.components.push(data)
    }
  }
}
</script>

<style>
  .avatar {
    display: flex;
    justify-content: center;
  }

  .avatar img {
    width: 150px;
    height: auto;
    border-radius: 50%;
  }
</style>
