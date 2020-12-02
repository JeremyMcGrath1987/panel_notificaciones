import moment from "moment";
moment.locale("en", {
  months: "Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre".split(
    "_"
  ),
  monthsShort: "Enero._Feb._Mar_Abr._May_Jun_Jul._Ago_Sept._Oct._Nov._Dec.".split(
    "_"
  ),
  weekdays: "Domingo_Lunes_Martes_Miercoles_Jueves_Viernes_Sabado".split("_"),
  weekdaysShort: "Dom._Lun._Mar._Mier._Jue._Vier._Sab.".split("_"),
  weekdaysMin: "Do_Lu_Ma_Mi_Ju_Vi_Sa".split("_")
});

export default {
  state: {
    data: [
      {
        id: 1,
        title: "Cod. 484",
        message: "Estoy viendo como estan atracando a un hombre a punta de pistola y el tio va vestido con unpantalon negro, mascara de payaso y chaqueta gris, huye en una moto manchez blanca",
        agent: "Jeremy O'Conner",
        playerId: 150
      },
      {
        id: 2,
        title: "Cod. 37",
        message: "Estoy viendo como estan atracando a un hombre a punta de pistola",
        agent: undefined,
        playerId: 150
      },
      {
        id: 3,
        title: "Cod. 207",
        message: "Estoy viendo como estan atracando a un hombre a punta de pistola",
        agent: undefined,
        playerId: 150
      },
      {
        id: 4,
        title: "titulo",
        message: "Estoy viendo como estan atracando a un hombre a punta de pistola",
        agent: undefined,
        playerId: 150
      },
      {
        id: 5,
        title: "titulo",
        message: "Estoy viendo como estan atracando a un hombre a punta de pistola",
        agent: undefined,
        playerId: 150
      },
      {
        id: 6,
        title: "titulo",
        message: "Estoy viendo como estan atracando a un hombre a punta de pistola",
        agent: undefined,
        playerId: 150
      },
      {
        id: 7,
        title: "titulo",
        message: "Estoy viendo como estan atracando a un hombre a punta de pistola",
        agent: undefined,
        playerId: 150
      },
      {
        id: 8,
        title: "titulo",
        message: "Estoy viendo como estan atracando a un hombre a punta de pistola",
        agent: undefined,
        playerId: 150
      },
      {
        id: 9,
        title: "titulo",
        message: "Estoy viendo como estan atracando a un hombre a punta de pistola",
        agent: undefined,
        playerId: 150
      },
      {
        id: 10,
        title: "titulo",
        message: "Estoy viendo como estan atracando a un hombre a punta de pistola",
        agent: undefined,
        playerId: 150
      }
    ]

  },
  actions: {
    SETNOTIFIES: (context, notify) => {
      context.commit("setNotifies", notify);
    }
  },
  mutations: {
    setNotifies: (state, notify) => {
      state.data = notify;
    }

  }
};