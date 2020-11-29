export default {
  computed: {
    singleNotification: function() {
      return this.$store.state.notificationsList.data;
    }
  }
};
