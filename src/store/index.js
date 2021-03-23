import { createStore } from 'vuex'

export default createStore({
  state: {
    authenticated: false,
    user: null
  },
  mutations: {
    setAuth(state, user) {
      localStorage.setItem('auth', JSON.stringify(user));
      state.authenticated = true;
      state.user = user;
    },

    initializeAuth(state) {
      if (localStorage.getItem('auth')) {
        state.authenticated = true;
        state.user = JSON.parse(localStorage.getItem('auth'));
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
