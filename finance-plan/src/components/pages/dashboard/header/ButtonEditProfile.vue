<template>
  <button-round :btnColor="'#fff'" @click="openBackdrop(), openProfileEdit()"
    ><i class="fa-solid fa-pencil"></i
  ></button-round>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions("popupModule", ["openBackdrop", "openProfileEdit"]),
    // toggleEditModal() {
    //   this.$store.dispatch("popupModule/openProfileEdit");
    // },
  },
};
</script>
