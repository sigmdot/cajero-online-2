<template>
    <div class="tarjetapersona col-12 col-sm-12 col-md-6 col-lg-4 border p-3 row m-0 justify-content-center">
        <div class="col-9 p-2 row m-0 border text-wrap bg-white h-100">
            <div class="col-12 p-0 row m-0 justify-content-center border">
                <b-avatar size="70px" variant="primary" src="https://picsum.photos/200" class=""></b-avatar>
            </div>
            <div class="col-12 p-0 row m-0 py-2 border">
                <div class="col col-lg p-0 row m-0 justify-content-center border">
                    <img src="https://i.ibb.co/Fnrjq0H/hiclipart-com.png" class="alt-imagen-icon">
                </div>
                <div class="col col-lg p-0 row m-0 justify-content-center border">
                    <img src="https://i.ibb.co/ZmL6Hf2/Pngtree-facebook-logo-icon-fb-logo-3570308.png" class="alt-imagen-icon">
                </div>
                <div class="col col-lg p-0 row m-0 justify-content-center border">
                    <img src="https://i.ibb.co/mtKVKgX/pngwing-com-1.png" class="alt-imagen-icon">
                </div>
            </div>
            <div class="col-12 p-0 row m-0 py-2 text-wrap text-center border max-height-66 text-truncate">
                <strong> Sebastián García Muñoz Jajaj Noo Joder AAAa </strong>
            </div>
            <div class="col-12 p-0 row m-0 py-2 text-wrap text-center border">
                <button type="button" class="btn btn-outline-primary w-100">Primary</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'TarjetaPersona',
    components:{

    },
    data:function(){
        return{

        }
    }
}
</script>

<style>
.maximo-imagen{
    max-height: 124.83px;

}
.maximo-altura{
    max-height: 121.49px;
}
.alt-imagen-icon{
    height: 30px;
    width: 30px;
}
.max-height-66{
    max-height: 66px;
}
</style>