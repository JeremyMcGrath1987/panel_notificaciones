export default {
  computed: {
    singleNotify: function() {
      return this.$store.state.notificationsList.data;
    }
  }
};
