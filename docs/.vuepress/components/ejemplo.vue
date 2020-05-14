<template>
  <div>
    <h6>{{ mensaje }}</h6>
    <div class="card">
      <button type="button" class="btn btn-secondary" @click="mostrarMensaje()">
        secondary
      </button>
      <button type="button" class="btn btn-primary">Primary</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mensaje: "Hola"
    };
  },
  methods: {
    mostrarMensaje() {
      this.mensaje = "Que onda Ulises";
    }
  }
};
</script>
