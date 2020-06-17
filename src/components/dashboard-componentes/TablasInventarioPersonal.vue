<template>
  <div class="tablasinventariopersonal col-lg-12 p-0 row m-0 bg-white">
      <div class="col-lg-12 p-0 text-center border p-3">
          <h4>{{title}}</h4>
      </div>
      <FilasTabla index="1" datoDinero="999" datoNombre="Coca - Cola 3 LTS" datoCodigo="a192" datoCantidad="99"></FilasTabla>
      <FilasTabla index="2" datoDinero="999" datoNombre="Fideos 1kg carrozi" datoCodigo="b929" datoCantidad="99"></FilasTabla>
      <FilasTabla index="3" datoDinero="999" datoNombre="Confort 36 piezas" datoCodigo="a192" datoCantidad="99"></FilasTabla>
      <FilasTabla index="4" datoDinero="999" datoNombre="Comido gato Catchowaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" datoCodigo="b929" datoCantidad="99"></FilasTabla>
      <FilasTabla index="5" datoDinero="999" datoNombre="Arroz Con cripto" datoCodigo="a192" datoCantidad="99"></FilasTabla>
      <FilasTabla index="6" datoDinero="999" datoNombre="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaaaaaaaaa" datoCodigo="b929" datoCantidad="99"></FilasTabla>

  </div>
</template>

<script>
import FilasTabla from './FilasTabla'
export default {
    name:'TablasInventarioPersonal',
    components:{
        FilasTabla
    },
    data:function(){
        return{

        }
    },
    props:{
        title:String
    }
}
</script>

<style>

</style>