<template>
  <div class="header">
    <div class="header-content">
      TodoList:
      <input
        placeholder="add todoItem"
        class="header-input"
        data-test="input"
        v-model="inputValue"
        @keyup.enter="addTodoItem"
        type="text"
      />
    </div>
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
  .header {
    line-height: 60px;
    background: #333;
  }
  .header-content {
    width: 600px;
    margin: 0 auto;
    color: #fff;
    font-size: 24px;
  }
  .header-input {
    float: right;
    width: 360px;
    margin-top: 16px;
    line-height: 24px;
    outline: none;
    color: #333;
  }
</style>
