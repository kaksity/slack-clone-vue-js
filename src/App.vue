<template>
  <div>
    <Header />
    <div class="app__body">
      <!-- SideBar -->
      <Sidebar/>
      <!-- Router -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from '@/components/Header.vue'
import Sidebar from '@/components/Sidebar.vue'

export default defineComponent({
  name: 'App',
  components: {
    Header,
    Sidebar
  },
  data () {
    return {
      //
    }
  }
})
</script>

<style>
  * {
    margin: 0 0 0 0;
  }
  body{
    --slack-color:#3f0f40;
  }
  .app__body{
    display: flex;
    height: 100vh;    
  }
</style>
