<template>
  <b-sidebar id="sidebar-menu" shadow>
      <div class="px-3 py-2">
        <div class="row mx-0">
            <div class="col-12 py-1">
                <img src="https://i.ibb.co/Zz2YW5t/pngwing-com.png" class="size-image">
            </div>
            <div class="col-12 mt-1">
                <button class="btn btn-dark w-100  col-12"><b-icon icon="minecart-loaded"></b-icon></button>
            </div>
        </div>
        <hr>
        <div class="row mx-0">
            <div class="col-12 row mx-0 mt-1 border-bottom pb-3">
                <div class="col-3 w-100 px-0">
                    <b-icon icon="columns"></b-icon>
                </div>  
                <div class="col-9 w-100 px-0 pl-1">
                    <router-link to="/dashboard">Dashboard</router-link>
                </div>
            </div>
            <div class="col-12 row mx-0 mt-3 border-bottom pb-3">
                <div class="col-3 w-100 px-0">
                    <b-icon icon="box"></b-icon>
                </div>  
                <div class="col-9 w-100 px-0 pl-1">
                    <router-link to="/inventario">Inventario</router-link>
                </div>
            </div>
            <div class="col-12 row mx-0 mt-3 border-bottom pb-3">
                <div class="col-3 w-100 px-0">
                    <b-icon icon="person"></b-icon>
                </div>  
                <div class="col-9 w-100 px-0 pl-1">
                    <router-link to="/clientes">Personal</router-link>
                </div>
            </div>
            <div class="col-12 row mx-0 mt-3 border-bottom pb-3">
                <div class="col-3 w-100 px-0">
                    <b-icon icon="basket"></b-icon>
                </div>  
                <div class="col-9 w-100 px-0 pl-1">
                    <router-link to="/clientes">Clientes</router-link>
                </div>
            </div>
        </div>
      </div>
    </b-sidebar>
</template>

<script>
export default {
    name:'Sidebar',
    components:{

    },
    data:function(){
        return{

        }
    }
}
</script>

<style scoped>
.size-image{
    height: 100%;
    width: 100%;
}
</style>