<template>
  <div class="dashboardview">
      <div class="container-fluid">
          <div class="row m-0 justify-content-around">
              <h3 class="col-12">Comparación</h3>
              <ComparacionResumen titulo="Venta mensual" diferencia="99.999" evaluacion="up"></ComparacionResumen>
              <ComparacionResumen titulo="Venta Semanal" diferencia="99.999" evaluacion="down"></ComparacionResumen>
              <ComparacionResumen titulo="Clientes hoy" diferencia="99.999" evaluacion="draw"></ComparacionResumen>
          </div>
      </div>
  </div>
</template>

<script>

import ComparacionResumen from '@/components/dashboard-componentes/ComparacionResumen.vue'

export default {
    name:'Dashboard',
    components:{
        ComparacionResumen
    },
    data:function(){

        return{
            
        }
    }
}
</script>

<style>

</style>