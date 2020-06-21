<template>
  <form class="fondo-blanco rounded border p-3 shadow col-12 p-5 col-md-6 shadow">
    <div class="form-group">
      <label for="exampleInputEmail1">Tipo de negocio</label>
      <select class="custom-select">
        <option selected>Selecciona el tipo de negocio</option>
        <option value="1">Restaurante</option>
        <option value="2">Negocio</option>
        <option value="3">Proveedor</option>
      </select>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Nombre negocio</label>
      <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Tecitos de don juan"/>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Nombre dueño</label>
      <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Juan tenorio"/>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Email negocio/dueño</label>
      <input type="email" class="form-control" id="exampleInputPassword1" placeholder="juan@gmail.com"/>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Re-ingresar Email negocio/dueño</label>
      <input type="email" class="form-control" id="exampleInputPassword1" placeholder="juan@gmail.com"/>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Contraseña</label>
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="contraseña"/>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Re-ingresar Contraseña</label>
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="contraseña"/>
    </div>
    <button type="submit" class="btn btn-primary w-100">¡Registrarme!</button>
  </form>
</template>

<script>
export default {
  name: "FormularioRegistro"
};
</script>

<style>
.fondo-blanco{
    background-color: rgba(255, 255,255, 0.7);
}
</style>