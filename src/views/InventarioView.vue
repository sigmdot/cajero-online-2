<template>
  <div class="inventarioview">
    <div class="container-fluid mt-1 ">
      <div class="row m-0 p-3 border bg-white">
        <FiltroListaInventario></FiltroListaInventario>
      </div>
      <div class="row m-0 mt-2">
         <ListaInventario v-for="(item,index) in itemList" :key="index" v-bind:producto="item"></ListaInventario>
      </div>
    </div>
  </div>
</template>

<script>
import FiltroListaInventario from '@/components/componentes-inventario/FiltroListaInventario.vue'
import ListaInventario from '@/components/componentes-inventario/ListaInventario.vue'

export default {
  name: "InventarioView",
  components: {
      FiltroListaInventario,
      ListaInventario
  },
  data: function() {
    return {
      itemList: [
        {
          cod: "192a",
          nombre: "Fideos Carozzi 1 kg",
          dinero: 999,
          cantidad: 99,
          imgUrl:'https://picsum.photos/200'
        },
        {
          cod: "192b",
          nombre: "Coca cola 3LT",
          dinero: 1000000,
          cantidad: 99,
          imgUrl:'https://picsum.photos/200'
        },
        {
          cod: "192c",
          nombre: "Desodorante en barra huele bonito",
          dinero: 10000,
          cantidad: 99,
          imgUrl:'https://picsum.photos/200'
        },
        {
          cod: "192d",
          nombre: "Helado Capri No capri , k es capri",
          dinero: 8888,
          cantidad: 99,
          imgUrl:'https://picsum.photos/200'
        },
        {
          cod: "192d",
          nombre: "Helado Capri No capri , k es capri",
          dinero: 8888,
          cantidad: 99,
          imgUrl:'https://picsum.photos/200'
        },
        {
          cod: "192d",
          nombre: "Helado Capri No capri , k es capri",
          dinero: 8888,
          cantidad: 99,
          imgUrl:'https://picsum.photos/200'
        },
        {
          cod: "192d",
          nombre: "Helado Capri No capri , k es capri",
          dinero: 8888,
          cantidad: 99,
          imgUrl:'https://picsum.photos/200'
        },
         {
          cod: "192c",
          nombre: "Desodorante en barra huele bonito",
          dinero: 10000,
          cantidad: 99,
          imgUrl:'https://picsum.photos/200'
        },
        
      ]
    };
  }
};
</script>

<style>
</style>