<template>
  <div>
    <input
      data-test="input"
      v-model="inputValue"
      @keyup.enter="addTodoItem"
      type="text"
    />
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      inputValue: ''
    }
  },
  methods: {
    addTodoItem () {
      if (this.inputValue) {
        this.$emit('add', this.inputValue)
        this.inputValue = ''
      }
    }
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
</style>
