<template>
  <profile-edit-modal></profile-edit-modal>
  <header>
    <h2>Finance Plan</h2>
    <div v-if="isAuth" class="right-container">
      <img :src="`https://robohash.org/${this.fullName}`" />

      <div class="btn-container">
        <button-edit-profile></button-edit-profile>
        <button-login></button-login>
        <button-logout></button-logout>
      </div>
    </div>
  </header>
</template>

<script>
import ButtonLogin from "./ButtonLogin.vue";
import ButtonLogout from "./ButtonLogout.vue";
import ButtonEditProfile from "./ButtonEditProfile.vue";
import profileEditModal from "./profileEditModal.vue";

export default {
  components: {
    ButtonEditProfile,
    ButtonLogin,
    ButtonLogout,
    profileEditModal,
  },

  props: ["isAuth"],
  computed: {
    fullName() {
      return this.$store.getters["userModule/getFullName"];
    },
    methods: {
      openEditModal(data) {
        console.log("open", data);
      },
    },
  },
};
</script>

<style scoped>
header {
  /*   position: fixed;
  top: 0; */
  width: 100vw;
  height: 4.5rem;
  box-shadow: 0px 1px 10px #20639b;
  /* background-color: #152032; */
  background-color: #17253e;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  padding: 1% 2%;
}
h2 {
  text-align: center;
}

img {
  border-radius: 50%;
  background-color: beige;
  width: 4rem;
}

.hidden {
  display: none;
}

.right-container {
  display: flex;
}

.btn-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 2%;
}
</style>
