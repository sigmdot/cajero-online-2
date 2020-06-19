<template>
  <div class="inventarioview">
    <div class="container-fluid">
        <div class="row m-0 justify-content-between">
            <!-- <TarjetasItem v-for="(item,index) in itemList" :key="index" :item="item"></TarjetasItem> -->
            
        </div>
    </div>
  </div>
</template>

<script>
/* import TarjetasItem from '@/components/componentes-inventario/TarjetasItem.vue' */

export default {
  name: "InventarioView",
  components: {
      /* TarjetasItem */
  },
  data: function() {
    return {
      itemList: [
        {
          cod: "192a",
          nombre: "Fideos Carozzi 1 kg",
          dinero: 999,
          cantidad: 99,
          imgUrl:''
        },
        {
          cod: "192b",
          nombre: "Coca cola 3LT",
          dinero: 1000000,
          cantidad: 99,
          imgUrl:''
        },
        {
          cod: "192c",
          nombre: "Desodorante en barra huele bonito",
          dinero: 10000,
          cantidad: 99,
          imgUrl:''
        },
        {
          cod: "192d",
          nombre: "Helado Capri No capri , k es capri",
          dinero: 8888,
          cantidad: 99,
          imgUrl:''
        },
        {
          cod: "192d",
          nombre: "Helado Capri No capri , k es capri",
          dinero: 8888,
          cantidad: 99,
          imgUrl:''
        },
        {
          cod: "192d",
          nombre: "Helado Capri No capri , k es capri",
          dinero: 8888,
          cantidad: 99,
          imgUrl:''
        }
      ]
    };
  }
};
</script>

<style>
</style>