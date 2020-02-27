import Vue from 'vue'
import Vuex from 'vuex'
import {fetchListItem} from '../api/index.js';

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    list: []
  },
  mutations: {
    SET_LIST(state, list) {
      state.list = list;
    }
  },
  actions: {
    FETCH_LIST(context, pageName) {
      // return fetchListItem(pageName).then().catch()
      return fetchListItem(pageName)
      .then(res => {
        context.commit('SET_LIST', res.data);
        return res;
      })
      .catch(err => {
        console.log(err);
        
      })
    }
  },
  modules: {
  }
})
