
<template>
  <div class="nav-bar-nav-egacion">
    <b-navbar toggleable="lg" type="white" class="blanco">
      <div class="left mr-auto">
        <button type="button" class="btn btn-secondary">
          <b-icon icon="arrow-right-square-fill"></b-icon>
        </button>
      </div>
      <div class="right ml-auto">
        <div class="user-nav">
          <b-nav-item-dropdown :text="Usuario" right>
            <b-dropdown-item fixed="top">
              <b-icon icon="person-circle"></b-icon>Perfil
            </b-dropdown-item>
            <b-dropdown-item fixed="top" href="#">
              <b-icon icon="box-arrow-in-left"></b-icon>Salir
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </div>
      </div>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  components: {},
  data: function() {
    return {
      Usuario:'Prueba_usuario'
    };
  }
};
</script>

<style>
ul{
  list-style: none;
}
li{
  list-style: none;
}
.blanco {
  background-color: white;
}
</style>