<template>
  <div class="flex flex-col flex-no-wrap">
    <div class="flex flex-row items-center w-full mt-4 px-8 py-2">
      <file-menu active="notificationsHistory" />
    </div>
    <!-- <div>
      <button class="float-right mr-4">Borrar Todo el historial</button>
    </div> -->
    <div>
      <ul
        class="border mt-2 mb-2 mx-4 py-2 pl-4 pr-4 altura relative fondo"
        v-for="(notification, index) in this.$store.state.notificationsHistory.data"
        :key="index"
      >
        <!-- <button
          class="absolute inset-y-0 right-0 px-2 py-2 alturaBotonClose"
          @click="borrarNotificacion(notification.id)"
        >
          X
        </button> -->
        <li class="text-sm ancho">{{ notification.title }}</li>
        <li class="text-xs ancho">{{ notification.playerId }}</li>
        <li class="fuente">{{ notification.message }}</li>
        <li v-if="notification.agent !== undefined" class="text-xs mt-2 italic">
          Se encargó del aviso el agente {{ notification.agent }}
        </li>
        <li v-else class="text-xs mt-2 italic"><p>No acudió ningún agente</p></li>
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
    // eslint-disable-next-line no-undef
    mp.trigger( "historialFaccionNotify");
    await this.$store.dispatch("loadingScreen/ISLOADING", false);
  },
  methods: {
    /* borrarNotificacion: function (id) {
      // eslint-disable-next-line no-undef
      mp.trigger( "removeNotification", id);
    } */
  },
};
</script>
