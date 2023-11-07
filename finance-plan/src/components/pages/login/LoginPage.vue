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
  emits: ["toggle-register-status"],

  components: { LoginForm, RegisterForm },
  data() {
    return {
      isRegistered: true,
    };
  },
  beforeMount() {
    this.$store.dispatch("registerModule/falseIsAuth");
    this.$store.dispatch("registerModule/removeErrors");
  },

  methods: {
    changeRegisterStatus() {
      this.isRegistered = !this.isRegistered;
    },
  },
};
</script>
