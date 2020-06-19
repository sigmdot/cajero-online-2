<template>
  <div class="listainventario col-12 row mx-0 my-1 p-0 bg-white">
      <div class="col-8 row m-0 p-0">
          <div class="col-2  p-0">
              <img :src="producto.imgUrl" class="tama-ima">
          </div>
          <div class="col-10 row m-0 px-1 py-2 text-left align-items-center">
              <h5 class="col-12 p-0 m-0">{{producto.nombre}}</h5>
              <p class="col-12 p-0 m-0">Coca-Cola;3LT;</p>
          </div>
      </div>
      <div class="col-4 row m-0 p-0 align-items-center">
          <div class="col-6 p-0 text-left">
             $ {{producto.dinero}}
          </div>
          <div class="col-6 p-0 text-center">
              <button class="btn btn-outline-primary" type="button">Detalles</button>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:"ListaInventario",
    props:{
        producto:Object
    }
}
</script>


<style scoped>
.tama-ima{
    height: 75px;
    width: 100%;
}
</style>