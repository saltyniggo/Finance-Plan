<template>
  <base-card>
    <spinning-loader></spinning-loader>
    <h3>Anmeldedaten werden geladen ...</h3>
    <p>Wir bitten um einen Moment Geduld</p>
  </base-card>
</template>

<script>
import SpinningLoader from "@/components/base/SpinningLoader.vue";

export default {
  components: { SpinningLoader },
};
</script>

<style scoped>
h3 {
  color: #fff;
}
</style>
