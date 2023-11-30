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

  async mounted() {
    // reicht ein platzhalter?
    console.log("mounted");
    const userId = this.$store.getters["userModule/getUserId"];
    const response = await this.$store.dispatch(
      "accountsModule/getAccounts",
      userId
    );
    console.log("loading" + response);
    if (response.status === 200) {
      this.$router.push("/accounts");
    } else if (response.status === 404) {
      this.$router.push("/accounts");
    } else {
      this.$router.push("/:pathMatch(.*)*");
    }
  },
};
</script>

<style scoped>
h3 {
  color: #fff;
}
</style>
