<template>
  <div class="login container">
      <div class="row m-0 justify-content-center">
          <h3 class="col-12 text-center p-0">¡Bienvenido denuevo!</h3>
          <FormularioLogin></FormularioLogin>
      </div>
  </div>
</template>

<script>
import FormularioLogin from '@/components/componentes-login/FormularioLogin.vue'

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