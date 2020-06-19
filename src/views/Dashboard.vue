<template>
  <div class="dashboardview">
    <div class="container-fluid">
      <div class="row m-0 justify-content-between">
        <h3 class="col-12">Comparación</h3>
        <ComparacionResumen titulo="Venta mensual" diferencia=99.999 evaluacion="up"></ComparacionResumen>
        <ComparacionResumen titulo="Venta Semanal" diferencia=99.999 evaluacion="down"></ComparacionResumen>
        <ComparacionResumen titulo="Clientes hoy" diferencia=99.999 evaluacion="draw"></ComparacionResumen>
      </div>
      <div class="row m-0">
          <div class="col-lg-12 row m-0 is-hidden-mobile p-0">
              <ButtonBox class="mb-1"></ButtonBox>
              <TablasInventarioPersonal title="Productos más vendido esta semana" v-bind:dataList="itemList"></TablasInventarioPersonal>
          </div>
          <div class="col-lg-12 row m-0 is-hidden-mobile p-0 mt-1">
              <ButtonBox class="mb-1"></ButtonBox>
              <TablasInventarioPersonal title="Personal más activo de la semana" v-bind:dataList="personalList"></TablasInventarioPersonal>
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
    return {
      itemList: [{
        
          cod:'192a',
          nombre:'Fideos Carozzi 1 kg',
          dinero:999,
          cantidad:99

        },
        {
        
          cod:'192b',
          nombre:'Coca cola 3LT',
          dinero:1000000,
          cantidad:99

        },
        {
        
          cod:'192c',
          nombre:'Desodorante en barra huele bonito',
          dinero:10000,
          cantidad:99

        },
        {
        
          cod:'192d',
          nombre:'Helado Capri No capri , k es capri',
          dinero:8888,
          cantidad:99

        }
     ],
     personalList:[
       {
        
          cod:'D195',
          nombre:'Sebastián García',
          dinero:9090909090,
          cantidad:99

        },
        {
        
          cod:'D999',
          nombre:'Steffany Celis',
          dinero:1000000000000000,
          cantidad:10000000000

        },
        {
        
          cod:'D999',
          nombre:'Joaquin García Celis',
          dinero:1000000000000000,
          cantidad:10000000000

        },
        {
        
          cod:'D299',
          nombre:'Seliph García Celis',
          dinero:1000000000000000,
          cantidad:10000000000

        }
     ]
    };
  }
};
</script>

<style>
</style>