<template>
  <ListPrincipal />
</template>

<script>
import ListPrincipal from '../components/ListPrincipal.vue'

export default {
  name: 'HomeView',
  data()
  {
    return{
      dataLista:[]
    }
  },
  components: {
    ListPrincipal
  },
  props: {
    msg: String
  },
  methods:{
    actualizar(index)
    {
      this.dataLista =index;
    }
  },
  beforeCreate(){
    this.$store.dispatch('getLista');
  }
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
