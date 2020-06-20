<template>
  <form class="formulariologin col-12 col-md-6 p-0 bg-white p-5 rounded">
    <div class="form-group">
      <label for="formGroupExampleInput"> <strong>Correo:</strong> </label>
      <input
        type="email"
        class="form-control"
        id="formGroupExampleInput"
        placeholder="ejemplo@ejemplo.cl"
      />
    </div>
    <div class="form-group">
      <label for="formGroupExampleInput2"> <strong>Contraseña:</strong> </label>
      <input
        type="password"
        class="form-control"
        id="formGroupExampleInput2"
        placeholder="Contraseña"
      />
    </div>
    <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Recordarme</label>
  </div>
  <div class="col-12 row p-0 m-0 justify-content-center">
      <button type="submit" class="btn btn-outline-primary w-100">Entrar</button>
  </div>
  </form>
</template>

<script>
export default {
  name: "FormularioLogin",
  components: {}
};
</script>

<style>
</style>