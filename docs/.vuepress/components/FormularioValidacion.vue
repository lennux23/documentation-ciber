<template>
  <div class="bg-success text-white p-5">
    <form>
      <div class="form-group ">
        <label for="validation01">Nombre</label>
        <input
          type="text"
          class="form-control is-valid"
          placeholder="Nombre"
          value="Peter"
          required
        />
      </div>
      <div class="form-group">
        <label for="validation02">Ciudad</label>
        <input
          type="text"
          class="form-control is-invalid"
          placeholder="Ciudad"
          required
        />
      </div>
    </form>
  </div>
</template>
