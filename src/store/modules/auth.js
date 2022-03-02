import api from '../../api/imgur'
import qs from 'qs'
import { router } from '../../main'

const state = {
  token: window.localStorage.getItem('imgur_token')
};

// we call getters to retrieve data
const getters = {
  isLoggedIn: state => !!state.token
};

// we call actions to change/modify data
const actions = {
  login: () => {
    api.login();
  },
  finalizeLogin({ commit }, hash) {
    const query = qs.parse(hash.replace('#', '' ));
    commit('setToken', query.access_token);
    window.localStorage.setItem('imgur_token', query.access_token);
    router.push('/');
  },
  logout: ({ commit }) => {
    commit('setToken' , null);
    window.localStorage.removeItem('imgur_token')
  }
};

const mutations = {
  setToken: (state, token) => {
    state.token = token;
  }
};


export default{
  state,
  getters,
  actions,
  mutations
}