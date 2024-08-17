import axios from 'axios'
import { createStore } from 'vuex'
import { toRaw } from 'vue';

export default createStore({
  state: {
    List:[{}]
  },
  getters: {
  },
  mutations: {
    cambiarLista(state,valor)
    {
      console.log(valor);
      state.List = [...valor];
    }
  },
  actions: {
    getLista({commit})
    {
      axios.get('http://localhost:5073/api/Lista/GetLista', {headers:{'Access-Control-Allow-Origin' : '*'}}).then(response => {
        commit('cambiarLista',response.data)
      })
    },
    updateList({state})
    {
      let data = toRaw(state.List);
      axios.put('http://localhost:5073/api/Lista/UpdateListas',
         data, 
        )
        .then(response => {
          alert(response.statusText);
      })
    },
    addList({state},list)
    {
      let data = toRaw(list);
      console.log(state);
      console.log(data);
      axios.post('http://localhost:5073/api/Lista/InsertLista',
        data, 
        )
        .then(response => {
          alert(response.statusText);
      })
    }
  },
  modules: {
  }
})
