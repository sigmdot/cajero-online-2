<template>
    <div class="registerview container">
        <div class="row m-0 justify-content-center">
            <h3 class="col-12 p-0 text-center">Bienvenido a Caja online</h3>
            <p class="col-12 p-0 text-center"> Antes de poder acceder a nuestra <strong>asombrosa aplicación</strong> te pediremos algunos datos </p>
            <FormularioRegistro />
        </div>
    </div>
</template>

<script>
import FormularioRegistro from '@/components/componentes-register/FormularioRegistro.vue'

export default {
    name:'Register',
    components:{
        FormularioRegistro
    },
    data:function(){
        return{
            
        }
    },
    beforeCreate:function(){
      document.body.className = 'register';
    },
    destroyed:function(){
      document.body.className = 'bg-light';

    }
}
</script>

<style>

</style>