<template>
  <div id="app">
    <div
      class="panel-screen overflow-y-scroll"
      :style="{
        background:
          'url('+'), radial-gradient(circle, rgba(2, 100, 206, .5) 0%, rgba(5, 100, 244, .5) 0%, rgba(5, 88, 231, .5) 100%)'
      }"
    >
      <transition name="fade">
        <loading-screen
          v-show="this.$store.state.loadingScreen.loading"
          style="animation-duration: 0.3s"
        />
      </transition>
      <router-view />
    </div>
  </div>
</template>
<script>
import loadingScreen from "./components/loadingScreen";
export default {
  name: "app",
  components: { loadingScreen }
};
</script>
<style lang="scss">
.rugged-tablet {
  height: 1007px;
}
.panel-screen {
  width: 632px;
  height: 340px;
  position: absolute;
  top: 25px;
  right: 25px;
}

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: transparent;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #000000;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #000000;
}
</style>
