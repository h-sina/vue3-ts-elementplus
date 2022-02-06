<template>
<el-scrollbar height="100vh">
  <div id="app">
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>-->
    <!-- 头部 -->
    <Header></Header>
    <!-- 中间 -->
    <el-container>
      <!-- 内容 -->
      <router-view style="flex: 1"></router-view>
      <!-- 侧边栏 -->
      <Aside style="width: 300px;"></Aside>
    </el-container>
    <!-- 尾部 -->
    <Footer></Footer>
  </div>
  </el-scrollbar>
</template>

<script>
import Header from "./components/Header"
import Aside from "./components/Aside"
import Footer from "./components/Footer"
export default {
  name: 'App',
  components: {
    Header,
    Aside,
    Footer
  },
  created () {
    if (this.$router.path !== "/")
      this.$router.replace("")
  }
}
</script>

<style>
*{
  margin: 0;
}
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 3px;
  text-align: center;
  border-radius: 4px;
  background: var(--el-color-primary-light-9);
  /* background: #42b983; */
  color: var(--el-color-primary);
}
::-webkit-scrollbar {
  width: 0 !important;
  height: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
