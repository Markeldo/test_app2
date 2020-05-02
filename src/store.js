import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idToEdit: null,
    products: [
        {
            id: 1,
            name: "Nestea",
            price: 12.20,
            units: 3,
            discontinued: false
        },
        {
            id: 2,
            name: "Lipton",
            price: 9.20,
            units: 30,
            discontinued: false
        },
        {
            id: 3,
            name: "Greenfield",
            price: 15.22,
            units: 10,
            discontinued: false
        },
        {
            id: 'z',
            name: "Noori",
            price: 4.99,
            units: 300,
            discontinued: true
        },
    ]
  },
  mutations: {
    setIdToEdit(state, payload) {
      state.idToEdit = payload.id;
    },
    addProduct(state, payload) {
      payload.id = Math.max.apply(null, state.products.map(x => (!isNaN(parseInt(x.id)) ? parseInt(x.id) : 0)))+1;
      state.products.push(payload);
    },
    editProduct(state, payload) {
      let index = state.products.findIndex(x => x.id == payload.id);
      Vue.set(state.products, index, payload);
    },
    deleteProduct(state, payload) {
      let index = state.products.findIndex(x => x.id == payload.id);
      state.products.splice(index,1);
    }
  },
  actions: {
    editProduct(context,payload) {
      context.commit('setIdToEdit', payload);
    },
    saveProduct(context, payload) {
      if(payload.id === null) {
        context.commit('addProduct', payload);
      } else {
        context.commit('editProduct', payload);
      }
    },
    deleteProduct(context, payload) {
      context.commit('deleteProduct', payload);
    }
  }
})
