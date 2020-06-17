<template>
  <div class="comparacionresumen col-12 col-sm-12 col-md-5 col-lg-3 row m-0 border mr-1 mb-3 justify-content-between p-0 bg-white">
    <div class="col-10 p-0 row m-0 border-right">
      <div class="col-12 p-0 text-center border-bottom">
        <h5>{{titulo}}</h5>
      </div>
      <div class="col-12 p-0 text-center py-1">
        $ {{diferencia}}
      </div>
    </div>
    <div class="col-2 p-0">
 
        <img v-if="evaluacion==='up'" class="img-size-100" src="https://i.imgur.com/IjKBRmO.gif?noredirect">
        <img v-if="evaluacion==='draw'" class="img-size-100" src="http://cdn.lowgif.com/full/c7742e716533a2cb-gif-of-3-dots-4-gif-images-download.gif">
        <img v-if="evaluacion==='down'" class="img-size-100 rotate-180" src="https://i.imgur.com/IjKBRmO.gif?noredirect">



    </div>
  </div>
</template>

<script>
export default {
    name:'ComparacionResumen',
    components:{

    },
    data:function(){
        return{
        
        }
    },
    props:{
      titulo:String,
      diferencia:Number,
      evaluacion:String
    }
}
</script>

<style>
.img-size-100{
  height: 100%;
  width: 100%;
}
.rotate-180{
  transform: rotate(180deg);
}
</style>