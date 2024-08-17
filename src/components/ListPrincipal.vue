<template>
  <h1>Lista de cosas que hacer!</h1>
    <div class="base" v-for="(lista,index) in this.$store.state.List" :key="index">
      
      <div class="lista-contenedor">
        <p>{{ lista.tarea }}</p> 
        <input type="checkbox" 
          :value="lista.listo" 
          v-model="this.$store.state.List[index].listo" 
          @click="mostrar(index)"/>
      </div>
    </div>
    <button class="botonActualizar" @click="this.$store.dispatch('updateList')">Actualizar Tareas</button>
</template>
<script>
export default {
  name: 'ListPrincipal',
  data() {
    return {
      // Reactive property to hold updated message
    };
  },
  methods:{
    mostrar(index)
    {
      console.log(this.$store.state.List[index]);
    }
  }
}
</script>
<style lang="scss">
  h1
  {
    text-align: center;
  }

  .botonActualizar
  {
    background-color: #B80C09;
    border: #B80C09 solid 1px;
    border-radius: 3%;
    margin-top: 1%;
    color:#F5E3E0;
    min-width: 300px;
    padding: 1%;
    cursor: pointer;
  }

  .base
  {
    display: flex;
    flex-direction: row;
    background-color: #F5E3E0;
    width: 90%;
    margin: auto;

    .lista-contenedor
    {
      margin: 1% auto;
      display: flex;
      flex-direction: row;
      min-width: 300px;
      background-color: #B80C09;
      border: #B80C09 1px solid;
      border-radius: 3%;

      p 
      {
        margin-right:5%;
        margin-left: auto;
      }

      input
      {
        margin-left:auto;
        margin-right: 5%;
        cursor: pointer;
      }
    }
  }
</style>