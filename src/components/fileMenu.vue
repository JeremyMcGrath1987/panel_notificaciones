<template>
  <ul class="file-details">
    <li class="my-10 mr-10" style="display: inline">
      <a
        @click="goto('NotificationsList')"
        class="hover:text-gray-500 cursor-pointer"
        :class="{
          'border-b-2 border-panel-normal': active === 'notificationsList',
        }"
        >Notificationes Activas</a
      >
    </li>
    <li class="my-10" style="display: inline">
      <a
        @click="goto('NotificationsHistory')"
        class="hover:text-gray-500 cursor-pointer"
        :class="{
          'border-b-2 border-panel-normal': active === 'notificationsHistory',
        }"
        >Historial Notificationes</a
      >
    </li>
    <button 
    class="hover:text-gray-500 cursor-pointer ml-32"
    @click="closeNofies">Cerrar</button>
  </ul>
</template>
<script>
export default {
  name: "fileMenu",
  props: {
    active: {
      type: String,
      required: true,
    },
  },
  methods: {
    goto: async function (route) {
      if (route !== this.$route.name) {
        /* await this.$store.dispatch("loadingScreen/ISLOADING", true); */
        await this.$router.push({ name: route });
      }
    },
    closeNofies: function () {
      // eslint-disable-next-line no-undef
      mp.trigger("closeNofies");
    },
  },
};
</script>
