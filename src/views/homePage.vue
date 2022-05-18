<template>
  <div class="home-page">
    <BasicLayout>
      <template #aside>
        <el-scrollbar class="scroll-bar-wrap" height="100%">
          <el-menu
            :default-active="route.path"
            style="border: none"
            :class="!isCollapsed ? 'el-menu-vertical' : ''"
            :collapse="isCollapsed"
            :router="true"
            background-color="#263238"
            text-color="#fff"
          >
            <RecursionNavItem v-for="item in menuList" :key="item.id" :item="item" />
          </el-menu>
        </el-scrollbar>
      </template>
      <template #header>
        <el-icon class="cursor-pr" @click="changeMenuCollapse"><Menu /></el-icon>
        <div class="flex-rnbc">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item v-for="bc in breadcrumb" :key="bc.path" :to="{ path: bc.path }">{{
              bc.meta.title
            }}</el-breadcrumb-item>
          </el-breadcrumb>
          <el-avatar class="cursor-pr" style="min-width: 40px">{{ userInfo.name }}</el-avatar>
        </div>
      </template>
      <template #main>
        <CacheTabs :tags="cacheMenu" />
        <div class="main-wrapper">
          <router-view v-slot="{ Component, route }">
            <transition name="fade" mode="out-in" appear>
              <keep-alive :include="cacheMenu">
                <suspense>
                  <template #default>
                    <component :is="Component" :key="route.path" />
                  </template>
                  <template #fallback> Loading... </template>
                </suspense>
              </keep-alive>
            </transition>
          </router-view>
        </div>
      </template>
    </BasicLayout>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
import BasicLayout from '@/components/BasicLayout/BasicLayout.vue'
import RecursionNavItem from '@/components/RecursionNavItem/RecursionNavItem.vue'
import CacheTabs from '@/components/CacheTabs/CacheTabs.vue'
// 默认不展开菜单
const isCollapsed = ref(false)
const routes = useRouter().getRoutes()
const route = useRoute()
const menuList = ref(routes)
const store = useStore()
const breadcrumb = computed(() => store.getters.breadcrumb ?? [])
const cacheMenu = computed(() => store.getters.cacheMenu ?? [])
const userInfo = computed(() => store.getters.userInfo ?? {})
const changeMenuCollapse = () => {
  isCollapsed.value = !isCollapsed.value
}
</script>

<style lang="scss" scoped>
.home-page {
  .main-wrapper {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: var(--padding-base);
  }
  .scroll-bar-wrap {
    background-color: #263238;
  }
  .el-menu-vertical {
    .is-active {
      width: 200px;
    }
  }
}
</style>
