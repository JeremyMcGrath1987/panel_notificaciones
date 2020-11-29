export default {
  namespaced: true,
  state: {
    data: []

  },
  actions: {
    SETHISTORIAL: (context, notify) => {
      context.commit("setHistorial", notify);
    }
  },
  mutations: {
    setHistorial: (state, notify) => {
      state.data = notify;
    }

  }
};