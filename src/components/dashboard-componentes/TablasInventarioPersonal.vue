<template>
  <div class="tablasinventariopersonal col-lg-12 p-0 row m-0 bg-white">
      <div class="col-lg-12 p-0 text-center border p-3">
          <h4>{{title}}</h4>
      </div>
      <FilasTabla v-for="(item,index) in dataList" :key="index" v-bind:index="index" v-bind:item="item"></FilasTabla>
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
        title:String,
        dataList:{
            type:Array
        }
    }
}
</script>

<style>

</style>