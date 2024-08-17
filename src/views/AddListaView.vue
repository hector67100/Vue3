<template>
     <h1>Lista de cosas que hacer!</h1>
    <div class="base">
      <div class="input-contenedor">
        <input type="text" 
          v-model="this.texto" 
        />
      </div>
    </div>
    <button class="botonActualizar" @click="agregar()">Actualizar Tareas</button>
</template>
  
  <script>

  export default {
    name: 'AddListaView',
    data()
    {
      return{
        texto:"",
      }
    },
    methods:{
      agregar()
      {
        let data = {
          tarea: this.texto,
          listo:false
        };
        console.log(data);
        this.$store.dispatch('addList',data);
      }
    },
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  </style>
  