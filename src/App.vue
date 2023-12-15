<template>
 <router-view>
  <SignUp />
 </router-view>
  
</template>

<script>
import SignUp from './views/HomeView.vue'


export default {
  name: 'App',
  components: {
    SignUp
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
