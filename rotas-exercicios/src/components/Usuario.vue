<template>
  <div class="usuario">
    <h2>Usuários</h2>
    <button sucesso @click="irParaInicio">Voltar</button>
  </div>
</template>

<script>
export default {
  methods: {
    irParaInicio() {
      this.$router.push("/");
    },
  },
};
</script>

<style lang="CSS">
</style>