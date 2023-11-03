<template>
  <back-drop></back-drop>
  <router-view name="header"></router-view>
  <router-view name="content"></router-view>
  <router-view name="rightNav"></router-view>
  <router-view name="leftNav"></router-view>
  <router-view name="modal"></router-view>
  <router-view name="edit"></router-view>
  <router-view></router-view>
</template>

<script>
import BackDrop from "./components/base/BackDrop.vue";

export default {
  components: {
    BackDrop,
  },
  computed: {
    isAuth() {
      return this.$store.state.registerModule.isAuth;
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background-color: #152032;
  overflow-x: hidden;
}

p {
  color: #ecf0f3;
}
</style>
