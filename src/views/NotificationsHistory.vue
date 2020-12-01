<template>
  <div class="flex flex-col flex-no-wrap">
    <div class="flex flex-row items-center w-full mt-4 px-8 py-2">
      <file-menu active="notificationsHistory" />
    </div>
    <div>
      <button class="float-right mr-4">Borrar Todo el historial</button>
    </div>
    <div>
      <ul
        class="border mt-2 mx-4 p-10 altura relative fondo"
        v-for="(notification, index) in this.$store.state.notificationsHistory.data"
        :key="index"
      >
        <button
          class="absolute inset-y-0 right-0 px-2 py-2 alturaBotonClose"
          @click="borrarNotificacion(notification.id)"
        >
          X
        </button>
        <li>{{ notification.playerId }}</li>
        <li>{{ notification.title }}</li>
        <li class="text-base">{{ notification.message }}</li>
        <li v-if="notification.agent !== undefined" class="text-xs mt-2">
          Se encargó del aviso el agente {{ notification.agent }}
        </li>
        <li v-else class="text-xs mt-2"><p>No acudió ningún agente</p></li>
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
    /* // eslint-disable-next-line no-undef
    mp.trigger( "historialFaccionNotify"); */
    await this.$store.dispatch("loadingScreen/ISLOADING", false);
  },
  methods: {
    borrarNotificacion: function (id) {
      /* // eslint-disable-next-line no-undef
      mp.trigger( "removeNotification", id); */
      console.log(id);
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
.alturaBotonClose {
  height: 2rem;
}
.fondo {
  background: radial-gradient(
    circle,
    rgba(2, 100, 206, 1) 0%,
    rgba(5, 100, 244, 1) 0%,
    rgba(5, 88, 231, 1) 100%
  );
}
</style>