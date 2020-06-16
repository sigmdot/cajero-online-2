<template>
  <div class="dashboardview">
    <div class="container-fluid">
      <div class="row m-0 justify-content-between">
        <h3 class="col-12">Comparación</h3>
        <ComparacionResumen titulo="Venta mensual" diferencia="99.999" evaluacion="up"></ComparacionResumen>
        <ComparacionResumen titulo="Venta Semanal" diferencia="99.999" evaluacion="down"></ComparacionResumen>
        <ComparacionResumen titulo="Clientes hoy" diferencia="99.999" evaluacion="draw"></ComparacionResumen>
      </div>
      <div class="row m-0">
          <div class="col-lg-12 row m-0 is-hidden-mobile p-0">
              <ButtonBox class="mb-1"></ButtonBox>
              <TablasInventarioPersonal title="Productos más vendido esta semana"></TablasInventarioPersonal>
          </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import ComparacionResumen from "@/components/dashboard-componentes/ComparacionResumen.vue";
import ButtonBox from "@/components/dashboard-componentes/ButtonBox.vue";
import TablasInventarioPersonal from "@/components/dashboard-componentes/TablasInventarioPersonal.vue"

export default {
  name: "Dashboard",
  components: {
    ComparacionResumen,
    ButtonBox,
    TablasInventarioPersonal
  },
  data: function() {
    return {};
  }
};
</script>

<style>
</style>