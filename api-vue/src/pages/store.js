
import Vuex from 'vuex'
import Vue from 'vue'


Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
      user:[]
  },
  

  getters:{
    user(state){
    return state.user}

  },
  mutations:{
    adicionarUser(state,user){
        state.user.push(user)
    }
  },
  


})

export default store