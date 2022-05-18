<template>
  <template v-if="!props.item?.meta?.hide">
    <el-sub-menu v-if="props.item?.children?.length > 0" :index="props.item.path">
      <template #title>
        <el-icon v-if="props.item?.meta?.icon"><component :is="props.item.meta.icon" /></el-icon>
        <span>{{ props.item?.name }}</span>
      </template>
      <template v-for="child in props.item.children">
        <RecursionNavItem v-if="child.children" :key="child" :item="child"></RecursionNavItem>
        <el-menu-item v-else :key="child?.path" :index="child?.path">
          <el-icon v-if="child?.meta?.icon"><component :is="child?.meta?.icon" /></el-icon>
          {{ child?.name }}
        </el-menu-item>
      </template>
    </el-sub-menu>
    <!-- 一级菜单 -->
    <el-menu-item v-else-if="props.item?.meta?.level === 1" :index="props.item?.path">
      <el-icon v-if="props.item?.meta?.icon"><component :is="props.item?.meta?.icon" /></el-icon>
      <span>{{ props.item?.name }}</span>
    </el-menu-item>
  </template>
</template>

<script setup>
const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})
</script>

<style></style>
