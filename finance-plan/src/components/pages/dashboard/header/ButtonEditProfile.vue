<template>
  <button-round :btnColor="'#fff'" @click="toggleEditModal"
    ><i class="fa-solid fa-pencil"></i
  ></button-round>
</template>

<script>
export default {
  methods: {
    toggleEditModal() {
      this.$store.dispatch("userModule/toggleEditProfile");
    },
  },
};
</script>
