<template>
  <button-round :btnColor="'#fff'" @click="toggleEditModal(), openBackdrop()"
    ><i class="fa-solid fa-pencil"></i
  ></button-round>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions("popupModule", ["openBackdrop"]),
    toggleEditModal() {
      this.$store.dispatch("userModule/toggleEditProfile");
    },
  },
};
</script>
