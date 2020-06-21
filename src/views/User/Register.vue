<template>
    <div class="registerview container">
        <div class="row m-0 justify-content-center">
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
    }
}
</script>

<style>

</style>