<template>
  <div class="flex flex-col flex-no-wrap">
    <div class="flex flex-row items-center w-full mt-4 px-8 py-2">
      <file-menu active="notificationsList" />
    </div>
    <div>
      <ul
        class="border mt-2 mx-4 p-4"
        v-for="(notification, index) in singleNotification"
        :key="index"
      >
        <div class="float-right w-64">
          <button class="block border">Botón marcar ruta</button>
          <button class="block border mt-1">Botón coger notificación</button>
          <button class="block border mt-1">¿Botón avisar?</button>
          <button class="block border mt-1">Botón terminar</button>
        </div>
        <li>{{ notification.id }}</li>
        <li>{{ notification.playerId }}</li>
        <li>{{ notification.title }}</li>
        <li>{{ notification.message }}</li>
        <li v-if="notification.agent!==undefined">{{ notification.agent }}</li>
        <li v-else><p>No está acudiendo ningún agente</p></li>
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
</style>