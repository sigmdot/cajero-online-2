<template>
  <div class="login container">
      <div class="row m-0">
          
      </div>
  </div>
</template>

<script>
export default {
    name:'Login',
    components:{
        FormularioLogin
    },
    beforeCreate:function(){
      document.body.className = 'login';
    },
    destroyed:function(){
      document.body.className = 'bg-light';
    }
}
</script>

<style>

</style>