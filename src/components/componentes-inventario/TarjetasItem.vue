<template>
  <div class="tarjetasitem col-12 col-sm-12 col-md-4 col-lg-3 p-0 row m-0 border bg-white mx-1 my-1">
    <div class="col-12 row p-0 m-0 border-bottom bg-light">
      <div class="col-4 p-0 ">
        <!-- <img src="https://picsum.photos/200" class="img-size-sm mx-auto d-block" > -->
      </div>
      <div class="col-8 row m-0 p-0 pr-2 ">
        <div class="col-12 p-0 text-right">
          <h5 class="line-height-100 my-0 font-size30">{{item.nombre}}</h5>
          <span class="line-height-100">{{item.cod}} </span>
        </div>
      </div>
    </div>
    <div class="col-12 row p-0 m-0">
      <div class="col-6 row m-0 p-0 border-right py-3">
          <img src="https://i.ibb.co/RQf3w4q/prueba1.png" class="size-qr img-size-sm mx-auto d-block">
      </div>
      <div class="col-6 row m-0 p-0">
        <div class="col-12 text-center">
          <h4>Stock</h4>
        </div>
        <div class="col-12 text-center display-5">
          {{item.cantidad}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'TarjetasItem',
    components:{

    },
    data:function () {
        return{

        }
    },
    props:{
      item:Object
    }
}
</script>

<style>
.img-size-sm{
  height:100px;
  width:170px;
}
.line-height-100{
  line-height: 280%;
}
.size-qr{
  height: 80px;
  width: 80px;
}
.font-size30{
  font-size: 90%;
}
</style>