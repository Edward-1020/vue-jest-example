<template>
  <div>
    <Header @add="addUndoItem"/>
  </div>
</template>

<script type="text/ecmascript-6">
import Header from './components/Header'

export default {
  name: 'TodoList',
  data () {
    return {
      undoList: []
    }
  },
  methods: {
    addUndoItem (inputValue) {
      this.undoList.push(inputValue)
    }
  },
  components: {
    Header
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
</style>
