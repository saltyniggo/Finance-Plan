<template>
  <button-round :btnColor="'#fff'" @click="logout"
    ><i class="fa-solid fa-arrow-right-from-bracket"></i
  ></button-round>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch("registerModule/logout");
      console.log("click");
    },
  },
};
</script>
