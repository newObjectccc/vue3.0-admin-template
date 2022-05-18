<template>
  <div class="common-layout">
    <el-container>
      <el-aside style="width: auto">
        <slot name="aside" />
      </el-aside>
      <el-container>
        <el-header>
          <slot name="header" />
        </el-header>
        <el-main>
          <slot name="main" />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.common-layout {
  width: 100%;
  height: 100%;
  .el-aside {
    height: 100vh;
  }
  .el-header {
    @include flex-rn;
    align-items: center;
  }
  .el-main {
    flex: 1;
    background: #eeeeee;
    padding: 0;
  }
}
</style>
