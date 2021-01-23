<template>
  <div id="nav">
    <router-link to="/about"><h1>詩、p5.js</h1></router-link> 
    <router-link to="/example1">污濁了的悲傷之中</router-link> |
    <router-link to="/example2">黑洞是黑色的</router-link> |
    <router-link to="/example3">你不知道我多希望能吃掉你的痛</router-link> |
    <router-link to="/example4">星期五你和另一個人在日本看海</router-link>
  </div>
  <router-view :key="$route.fullPath"/>
  <!-- <router-view/> -->
</template>

<style>
*{
  background-color: rgb(0, 0, 0);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  
}

#nav {
  /* padding: 30px; */
  
  position: fixed;
  width: 100vw;
  height: 85px;
  left: 50%;
  margin: 0 0 0 -50vw;
  background-color: rgb(0, 0, 0, 0);
}

#nav a {
  font-weight: bold;
  color: #ffffff;
  text-decoration: none;
  background-color: rgb(0, 0, 0, 0);
}

#nav a.router-link-exact-active {
  color: #fffbbe;
  text-decoration: none;
  background-color: rgb(0, 0, 0, 0);
}
h1{
  background-color: rgb(0, 0, 0, 0);
}

</style>
