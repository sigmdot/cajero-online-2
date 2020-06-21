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
.bg {
  /* The image used */
  background-image: url("https://i.ibb.co/f1MFtSp/minimalist.jpg");

  /* Full height */
  height: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>