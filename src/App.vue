<template>
  <el-config-provider :locale="locale">
    <router-view />
  </el-config-provider>
</template>
<script setup>
import { onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'

const locale = zhCn
const route = useRoute()
const store = useStore()

onMounted(() => {
  store.commit('SET_BREADCRUMB', route.matched)
})

watch(route, () => {
  // 是否需要缓存
  if (route.meta.cache) {
    // 缓存组件 name
    store.commit('SET_CACHEMENU', route.name)
  }
  store.commit('SET_BREADCRUMB', route.matched)
})
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100vw;
  height: 100vh;
}
html,
body {
  width: 100vw;
  height: 100vh;
}
body {
  margin: 0;
}
</style>
