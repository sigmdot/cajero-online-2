
<template>
  <div class="nav-bar-nav-egacion">
    <b-navbar toggleable="lg" type="white" class="blanco">
      <div class="left mr-auto">
        <button v-b-toggle.sidebar-menu type="button" class="btn btn-secondary">
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
    <Sidebar></Sidebar>
  </div>
</template>

<script>
import Sidebar from '../navbar-components/Sidebar.vue'


export default {
  
  name: "Navbar",
  components: {
    Sidebar
  },
  data: function() {
    return {
      Usuario:'Prueba_usuario'
    };
  }
};
</script>

<style>

.blanco {
  background-color: white;
}
</style>