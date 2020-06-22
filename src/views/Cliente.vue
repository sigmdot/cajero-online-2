<template>
    <div class="clienteview container-fluid">
        <div class="row m-0">
            <TarjetaPersona></TarjetaPersona>
            <TarjetaPersona></TarjetaPersona>
            <TarjetaPersona></TarjetaPersona>
            <TarjetaPersona></TarjetaPersona>
            <TarjetaPersona></TarjetaPersona>
            <TarjetaPersona></TarjetaPersona>


        </div>
    </div>
</template>

<script>
import TarjetaPersona from '@/components/componentes-globales/TarjetaPersona.vue'

export default {
    name:'ClienteView',
    components:{
        TarjetaPersona
    },
    data:function(){
        return{

        }
    }
}
</script>

<style>

</style>