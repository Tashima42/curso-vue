new Vue({
  el: ('#desafio'),
  data: {
    nome: 'Pedro',
    idade: 18,
    srcImagem: 'https://images.squarespace-cdn.com/content/v1/56ee72d9c2ea51bd675641da/1476243303120-DZ0V6NQ95ZVKY0N6SE1U/ke17ZwdGBToddI8pDm48kKaJlV4O13KVZ5WJeoLfwHFZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PI1NPQkseClEL-5tE7WdrVYazbsKlpnPXijkBtHqiy7M0KMshLAGzx4R3EDFOm1kBS/image-asset.jpeg',
  },
  methods: {
    multiplicarIdade: (idade) => (idade * 3),
    exibirNumeroRandomico: () => Math.random()
  }
})  
