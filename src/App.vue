<template>
  <div id="app">
    <div class="nav-user">
      <Navbar></Navbar>
    </div>
    <div class="router-view-user mt-5 py-2 ">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/componentes-globales/Navbar.vue'
export default {
  components:{
    Navbar
  }
}
</script>

<style>
@media (min-width: 992px){
  .is-hidden-pc{
    display: none !important;
  }
}
@media (max-width: 991px){
  .is-hidden-mobile{
    display: none !important;
  }
}
</style>
