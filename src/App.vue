<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div>Vue-admin</div>
  <el-button @click="count++">{{ count }}</el-button>
</template>
<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
