<template>
  <div class="filastabla col-lg-12 row m-0 p-0 w-100 border-bottom border-right border-left line-height100">
    <div class="col-10 row p-0 m-0 border-right border-left">
      <div class="col-2 row m-0 p-0 border-right text-center">
        <span class="col-2 p-0 border-right bg-light">{{index}}</span>
        <span class="col-10 p-0 text-info">{{datoCodigo}}</span>
      </div>
      <div class="col-8 p-0  text-center border-right overflow-auto">
        <h4>{{datoNombre}}</h4>
      </div>
      <div class="col-2 p-0 text-center">
        <span>{{datoCantidad}}</span>
      </div>
    </div>
    <div class="col-2 p-0 text-center">
      <span>$ {{datoDinero}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "FilasTabla",
  components: {},
  props: {
    datoNombre: String,
    datoCodigo: String,
    datoCantidad: Number,
    imgUrl: String,
    datoDinero: Number,
    index: Number
  }
};
</script>

<style>
.size-100 {
  height: 60%;
  width: 60%;
}
.line-height100{
    line-height: 210%;
}
</style>