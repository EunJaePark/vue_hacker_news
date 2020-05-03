import Vue from 'vue'
import Vuex from 'vuex'
import {fetchListItem} from '../api/index.js';
import {fetchCommentItem, fetchUserInfo} from '../api/index.js';

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    list: [],
    commentlist: [],
    user: ''
  },
  mutations: {
    SET_LIST(state, list) {
      state.list = list;
    },
    SET_COMMENT(state, commentlist) {
      state.commentlist = commentlist;
    },
    SET_USER(state, user) {
      state.user = user;
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
    // comments
    FETCH_COMMENT(context, commId) {
      fetchCommentItem(commId)
      .then(res => {
        context.commit('SET_COMMENT', res.data)
      })
      .catch(err => {
        console.log(err);
        })
    },

    // 작성자
    FETCH_USER(context, userName) {
      return fetchUserInfo(userName)
      .then(res => {
        context.commit('SET_USER', res.data)
      })
      .catch(err => {
        console.log(err);
      })
    }
    





    // FETCH_Comment(context, commentId) {
    //   // return fetchAskItem(askId).then().catch()
    //   return fetchCommentItem(commentId)
    //   .then(res => {
    //     context.commit('SET_COMMENT', res.data);
    //     return res;
    //   })
    //   .catch(err => {
    //     console.log(err);
        
    //   })
    // }
  },
  modules: {
  }
})
