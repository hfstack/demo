import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// import { 
//     getUser,
//     userLogout,
//     queryArticleById
// } from '../api'

const state = {
    HeaderNav: {
        value: '',
        show: false,
        navs: [
            {
                text: '首页',
                route: {
                    name: 'home'
                }
            }, 
            {
                text: '文章',
                route: {
                    name: 'article'
                }
            }, 
            {
                text: '标签',
                route: {
                    name: 'tag'
                }
            }
        ]
    }
}

const mutations = {
    SET_HEADER_NAV (state, active) {
        state.HeaderNav.show = active
    },
    SET_SELECT_VALUE (state, newval) {
        state.value = newval
    }
}

const actions = {
    // for mobile nav
    showHeaderNav ({ commit }) {
        commit('SET_HEADER_NAV', true)
    },
    hideHeaderNav ({ commit }) {
        commit('SET_HEADER_NAV', false)
    },
    changeValue ({commit}) {
        commit('SET_SELECT_VALUE', newval)
    }
}

const getters = {
    HeaderNav: state => state.HeaderNav,
    SelectValue: state => state.value
}

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})

export default store