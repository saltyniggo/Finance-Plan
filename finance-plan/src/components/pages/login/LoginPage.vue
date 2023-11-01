<template>
  <div v-if="isRegistered">
    <base-card
      ><login-form @toggle-register-status="changeRegisterStatus"></login-form
    ></base-card>
  </div>
  <div v-else>
    <base-card
      ><register-form
        @toggle-register-status="changeRegisterStatus"
      ></register-form
    ></base-card>
  </div>
</template>

<script>
import LoginForm from "./LoginForm.vue";
import RegisterForm from "./RegisterForm.vue";

export default {
  components: { LoginForm, RegisterForm },

  data() {
    return {
      isRegistered: true,
    };
  },
  methods: {
    changeRegisterStatus() {
      this.isRegistered = !this.isRegistered;
    },
  },
};
</script>
