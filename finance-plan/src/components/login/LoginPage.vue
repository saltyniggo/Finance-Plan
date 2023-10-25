<template>
  <div v-if="isRegistered">
    <base-card><login-form></login-form></base-card>
  </div>
  <div v-else>
    <base-card><register-form></register-form></base-card>
  </div>
</template>

<script>
import LoginForm from "./LoginForm.vue";
import RegisterForm from "./RegisterForm.vue";
import BaseCard from "./BaseCard.vue";

export default {
  components: { LoginForm, RegisterForm, BaseCard },
  data() {
    return {
      isRegistered: true,
    };
  },
};
</script>
