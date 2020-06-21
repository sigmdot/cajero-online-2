
<template>
  <div class="nav-bar-nav-egacion">
    <b-navbar toggleable="lg" type="white" class="blanco" fixed="top">
      <div class="left mr-auto">
        <button v-b-toggle.sidebar-menu type="button" class="btn btn-secondary" v-if="Usuario">
          <b-icon icon="arrow-right-square-fill"></b-icon>
        </button>
      </div>
      <div class="right ml-auto">
        <div class="user-nav" v-if="Usuario">
          <b-nav-item-dropdown :text="Usuario" right>
            <b-dropdown-item fixed="top">
              <b-icon icon="person-circle"></b-icon>Perfil
            </b-dropdown-item>
            <b-dropdown-item fixed="top" href="#">
              <b-icon icon="box-arrow-in-left"></b-icon>Salir
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </div>
        <div v-else class="botonesUser row p-0 m-0 w-100 justify-content-between px-3">
          <div class="col-5 p-0">
            <button type="button" class="btn btn-outline-primary">Login</button>
          </div>
          <div class="col-5 p-0">
            <button type="button" class="btn btn-outline-secondary">Register</button>
          </div>
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
      Usuario:"Sigmdot"
    };
  }
};
</script>

<style scoped>

.blanco {
  background-color: white;
}
</style>