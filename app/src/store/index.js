import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      paymentsList: [],
  },
  getters: {
    getPaymentsList:state=> state.paymentsList,
    getFullPaymentsValue:state=> {
      return state.paymentsList.reduce((res,cur)=> res + cur.value, 0)
    }
  },
  mutations: {
    setPaymentsListData(state, payload){
      state.paymentsList=payload
    },
    addDataToPaymentsList(state, payload){
      state.paymentsList.push(payload)
    }
  },
  actions: {
  },
  modules: {
  }
})
