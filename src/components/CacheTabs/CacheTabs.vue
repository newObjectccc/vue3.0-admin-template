<template>
  <div class="tab-wrapper">
    <el-tag
      v-for="tag in props.tags"
      :key="tag"
      style="margin-right: 8px"
      size="small"
      closable
      @close="onClose"
      @click="onClick"
      >{{ tag }}</el-tag
    >
  </div>
</template>

<script setup>
const props = defineProps({
  tags: {
    type: Array,
    required: true
  }
})
// console.log('props: ', props)
const onClick = (evt) => {
  console.log(evt)
}
const onClose = (evt) => {
  console.log(evt)
}
</script>

<style lang="scss" scoped>
.tab-wrapper {
  box-sizing: border-box;
  width: 100%;
  padding: 10px var(--padding-base);
  background-color: var(--background-white);
  white-space: nowrap;
  overflow-x: scroll;
}
</style>
