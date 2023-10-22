<template>
    <form class="card card-w30" @submit.prevent="submitForm">
        <div class="form-control">
            <label for="type">Тип блока</label>
            <select id="type" v-model="type" @change="clearContent">
                <option value="title">Заголовок</option>
                <option value="subtitle">Подзаголовок</option>
                <option value="avatar">Аватар</option>
                <option value="text">Текст</option>
            </select>
        </div>

        <div class="form-control">
            <label for="value">Значение</label>
            <textarea id="value" rows="3" v-model="content"></textarea>
            <small v-if="errors.includes('content')" class="danger">Значение должно быть заполнено</small>
        </div>

        <button class="btn primary" type="submit">Добавить</button>
    </form>
</template>

<script>
export default {
  emits: [
    'addComponent'
  ],
  data () {
    return {
      type: 'title',
      content: '',
      errors: []
    }
  },
  methods: {
    submitForm () {
      const validation = this.validateForm()
      this.errors = validation.errors
      if (validation.success) {
        this.$emit('addComponent', { type: this.type, content: this.content })
        this.clearContent()
      }
    },
    validateForm () {
      const result = { success: true, errors: [] }

      if (this.content.length === 0) {
        result.success = false
        result.errors.push('content')
      }

      return result
    },
    clearContent () {
      this.content = ''
    },
    resetType () {
      this.type = 'title'
    }
  }
}
</script>

<style>

</style>
