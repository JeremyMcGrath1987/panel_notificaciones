<template>
  <div class="flex flex-col flex-no-wrap">
    <div class="flex flex-row items-center w-full mt-4 px-8 py-2">
      <file-menu active="notificationsList" />
    </div>
    <div>
      <ul
        class="border mt-2 mx-4 p-4 altura relative"
        v-for="(notification, index) in singleNotification"
        :key="index"
      >
        <div class="absolute inset-y-0 right-0 w-40 mr-4 altura">
          <button class="block border mt-2">Botón marcar ruta</button>
          <button class="block border mt-2">Botón coger notificación</button>
          <button class="block border mt-2">¿Botón avisar?</button>
          <button class="block border mt-2">Botón terminar</button>
        </div>
        <li class="ancho">{{ notification.id }}</li>
        <li class="ancho">{{ notification.playerId }}</li>
        <li class="ancho">{{ notification.title }}</li>
        <li class="text-base ancho">{{ notification.message }}</li>
        <li v-if="notification.agent!==undefined" class="text-xs">{{ notification.agent }}</li>
        <li v-else class="text-xs ancho"><p>No está acudiendo ningún agente</p></li>
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
    /* await this.$store.dispatch("loadingScreen/ISLOADING", true); */
    /* // eslint-disable-next-line no-undef
    mp.trigger("callServerEvent","getAllFactions"); */
    await this.$store.dispatch("loadingScreen/ISLOADING", false);
  },
  methods: {
    factionConfig: async function (id) {
      /* // eslint-disable-next-line no-undef
      mp.trigger("callServerEvent","getFaccion",{id: id}); */
      /* await this.$store.dispatch("loadingScreen/ISLOADING", true); */
      await this.$router.push({ name: "FactionConfiguration" });
      console.log(id);
      /* id: number,
title: string,
message: string,
		agent: undefined or string,
		playerId: number */
    },
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
   height: 14rem;
}
.ancho {
  width: 24rem;
}
</style>