<template>
  <div class="card card-w70">
    <component v-for="(item, idx) in components" :key="idx" :is="`app-${item.type}-component`" :content="item.content"></component>
    <h3 v-if="components.length === 0">Добавьте первый блок, чтобы увидеть результат</h3>
  </div>
</template>

<script>
export default {
  props: {
    content: Array
  },
  data () {
    return {
      components: this.content ?? []
    }
  }
}
</script>

<style>

</style>
