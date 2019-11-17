<template>
  <div>
    <div data-test="count">
      {{list.length}}
    </div>
    <ul>
      <li
        v-for="(item, index) in list"
        :key="index"
        data-test="item">
        {{item}}
        <span data-test="delete-button">-</span>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'UndoList',
  props: ['list']
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
</style>
