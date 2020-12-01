export default {
  namespaced: true,
  state: {
    data: [{
      id: 1,
      title: "titulo",
      message: "Estoy viendo como estan atracando a un hombre a punta de pistola y el tio va vestido con unpantalon negro, mascara de payaso y chaqueta gris, huye en una moto manchez blanca",
      agent: "Jeremy O'Conner",
      playerId: 150
    },
    {
      id: 2,
      title: "titulo",
      message: "Estoy viendo como estan atracando a un hombre a punta de pistola",
      agent: undefined,
      playerId: 150
    }]

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