<template>
  <div class="flex flex-col flex-no-wrap">
    <div class="flex flex-row items-center w-full mt-4 px-8 py-2">
      <file-menu active="notificationsList" />
    </div>
    <div>
      <ul
        class="border mt-2 mb-2 mx-4 py-2 pl-4 pr-24 altura relative fondo"
        v-for="(notification, index) in singleNotification"
        :key="index"
      >
        <div class="absolute inset-y-0 right-0 w-24 px-2 py-2 altura ">
          <button class="block border mt-1 w-20 text-xs marcar_ruta justify-center p-auto" @click="marcarRuta(notification.id)"><img class="mx-auto" src="../assets/images/marcar_ruta.png" width="20px" alt="Marcar Ruta"></button>
          <button class="block border mt-1 w-20 text-xs" @click="cogerAviso(notification.id)"><img class="mx-auto" src="../assets/images/coger_aviso_2.png" width="20px" alt="Coger Aviso"></button>
          <button class="block border mt-1 w-20 text-xs" @click="avisar(notification.playerId)"><img class="mx-auto" src="../assets/images/en_camino.png" width="20px" alt="En Camino"></button>
          <button class="block border mt-1 w-20 text-xs" @click="terminarAviso(notification.id)"><img class="mx-auto" src="../assets/images/terminar_aviso.png" width="20px" alt="Terminar Aviso"></button>
        </div>
        <li class="text-sm ancho">{{ notification.title }}</li>
        <li class="text-xs ancho">{{ notification.playerId }}</li>
        <li class="fuente ancho">{{ notification.message }}</li>
        <li v-if="notification.agent!==undefined" class="text-xs mt-2 italic">Está acudiendo el agente {{ notification.agent }}</li>
        <li v-else class="text-xs ancho mt-2 italic"><p>No está acudiendo ningún agente</p></li>
      </ul>
    </div>
  </div>
</template>
<script>
import fileMenu from "../components/fileMenu";
import singleNotification from "../mixins/singleNotification";
export default {
  name: "notificationList",
  components: { fileMenu },
  mixins: [singleNotification],
  async mounted() {
    await this.$store.dispatch("loadingScreen/ISLOADING", false);
  },
  methods: {
    marcarRuta: function (id) {
      // eslint-disable-next-line no-undef
      mp.trigger("goToFaccionNotify",id);
      console.log(id);
      
    },
    cogerAviso: function (id) {
      // eslint-disable-next-line no-undef 
      mp.trigger("callServerEvent", "goFaccionNotify", id);
      console.log(id);
    },
    avisar: function(id) {
      // eslint-disable-next-line no-undef 
      mp.trigger("answerFaccionNotify", id);
      console.log(id);
    },
    terminarAviso: function (id) {
      // eslint-disable-next-line no-undef 
      mp.trigger("finishFaccionNotify",id);
      console.log(id);
    }
  },
};
</script>
<style lang="scss">
.file-details {
  li {
    border: none;
    padding: 0;
    display: block;
  }
}
tr:nth-child(odd) {
  border: 1px solid #000000;
}
.button-rank {
  width: 110px;
  height: 20px;
  border: 1px solid #000000;
}
.button-rank:focus {
  outline: none;
}
.button-dismiss {
  width: 72px;
  height: 20px;
  border: 1px solid #000000;
}
.button-dismiss:focus {
  outline: none;
}
.separation {
  margin-left: 2.4rem;
}
.altura {
   height: 8rem;
}
.ancho {
  width: 29rem;
}
.fondo{
  background: radial-gradient(circle, rgba(2, 100, 206, 1) 0%, rgba(5, 100, 244, 1) 0%, rgba(5, 88, 231, 1) 100%);
}
.fuente{
  font-size: 0.7rem;
  line-height: 0.9rem;
}
</style>