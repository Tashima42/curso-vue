<template>
  <div id="app">
    <h1>Axios</h1>
    <b-card>
      <b-form-group label="Nome:">
        <b-form-input type="text" size="lg" v-model="usuario.nome" placeholder="Informe o Nome"></b-form-input>
      </b-form-group>
      <b-form-group label="Email:">
        <b-form-input type="email" size="lg" v-model="usuario.email" placeholder="Informe o Email"></b-form-input>
      </b-form-group>
      <b-button @click="sendPost" size="lg" variant="primary">Salvar</b-button>
      <b-button @click="sendGet" size="lg" variant="success">Ober Usuários</b-button>
    </b-card>
    <hr />
    <b-list-group>
      <b-list-group-item v-for="(usuario, id) in usuarios" :key="id">
        <strong>Nome:</strong>
        {{ usuario.nome}}
        <br />
        <strong>Email:</strong>
        {{ usuario.email}}
        <br />
        <strong>ID:</strong>
        {{ id }}
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      usuarios: [],
      usuario: {
        nome: "",
        email: "",
      },
    };
  },
  methods: {
    sendPost() {
      this.$http.post("usuarios.json", this.usuario).then((res) => {
        console.log(res);
        this.usuario = {};
      });
    },
    sendGet() {
      this.$http.get("usuarios.json").then((res) => {
        this.usuarios = res.data;
        console.log(res.data);
      });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
