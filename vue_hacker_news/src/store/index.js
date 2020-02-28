import Vue from 'vue'
import Vuex from 'vuex'
import {fetchListItem} from '../api/index.js';
import {fetchCommentItem} from '../api/index.js';

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    list: [],
    commentlist: {}
  },
  mutations: {
    SET_LIST(state, list) {
      state.list = list;
    },
    SET_COMMENT(state, commentlist) {
      state.commentlist = commentlist;
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
    },
    FETCH_Comment(context, commentId) {
      // return fetchAskItem(askId).then().catch()
      return fetchCommentItem(commentId)
      .then(res => {
        context.commit('SET_Comment', res.data);
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
