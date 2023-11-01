<template>
  <back-drop
    @backdropClicked="closeBackdrop"
    :openBackdrop="openBackdrop"
  ></back-drop>
  <transition name="modalPopup">
    <div v-if="isEditModalOpen" id="baseModal">
      <form class="inputArea" @submit.prevent="processEdit">
        <h1>Profil bearbeiten</h1>
        <label>Vorname</label>
        <input v-model="firstName" />
        <label>Nachname</label>
        <input v-model="lastName" />
        <label>Email</label>
        <input v-model="userEmail" />
        <label>altes Passwort</label>
        <input v-model="oldPassword" />
        <h4>Passwortanforderungen:</h4>
        <ul>
          <li
            :style="{
              color: passwordRequirements.lengthCheck ? 'green' : 'red',
            }"
          >
            8 Buchstaben
          </li>
          <li
            :style="{
              color:
                passwordRequirements.capitalCheck &&
                passwordRequirements.lowerCheck &&
                !passwordRequirements.justNumbers
                  ? 'green'
                  : 'red',
            }"
          >
            Groß- und Kleinschreibung
          </li>
          <li
            :style="{
              color:
                passwordRequirements.numberCheck &&
                passwordRequirements.signCheck
                  ? 'green'
                  : 'red',
            }"
          >
            mindestens eine Zahl und ein Sonderzeichen
            (!@#$%^&*()_+\-=\[]{?};':"|,.&lt;&gt;)
          </li>
        </ul>

        <label>neues Passwort</label>
        <input v-model="newPassword" />
        <button type="submit" @click="processEdit">SUBMIT</button>
      </form>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      isEditModalOpen: this.$store.getters["userModule/getEditProfile"],
      openBackdrop: true,
      firstName: this.$store.getters["userModule/getFirstName"],
      lastName: this.$store.getters["userModule/getLastName"],
      userEmail: this.$store.getters["userModule/getEmail"],
      oldPassword: "",
      newPassword: "",
    };
  },

  computed: {
    userPassword() {
      return this.$store.getters["userModule/getPassword"];
    },
    passwordRequirements() {
      return this.$store.getters["userModule/getPasswordRequirements"];
    },
  },

  watch: {
    newPassword(newValue) {
      console.log(newValue);
      this.$store.dispatch("userModule/checkPassword", newValue);
    },
  },
  methods: {
    processEdit() {
      console.log("click");
      this.$store.dispatch("userModule/updateFirstName", this.firstName);
      this.$store.dispatch("userModule/updateLastName", this.lastName);
      this.$store.dispatch("userModule/updateEmail", this.userEmail);

      if (this.userPassword === this.oldPassword) {
        console.log("old password correct");
        if (this.newPassword.trim == "") {
          console.log("empty input");
        } else {
          if (this.passwordRequirements.requirementsOk) {
            this.$store.dispatch("userModule/updatePassword", this.newPassword);
            this.isEditModalOpen = false;
            this.openBackdrop = false;
          } else {
            console.log("check password requirements");
          }
        }
      } else if (this.oldPassword == "" && this.newPassword == "") {
        this.isEditModalOpen = false;
        this.openBackdrop = false;
        console.log("no Password changes");
      } else {
        console.log("type in correct old password");
      }
    },

    closeBackdrop() {
      this.openBackdrop = false;
      this.isEditModalOpen = false;
    },
  },
};
</script>

<style scoped>
#baseModal {
  z-index: 2;
  position: absolute;
  top: 14%;
  min-width: 30%;
  min-height: 30%;
  background-color: #152032;
  color: #ecf0f3;
  border-radius: 5vh;
  box-shadow: 0vh 0vh 5vh #20639b, 0vh 0vh 2vh #05da93;
  margin-left: 35%;
}

.inputArea {
  padding: 2.5%;
  display: flex;
  flex-direction: column;
}

h1 {
  padding: 2%;
  text-align: center;
}
h4 {
  margin: 0 10%;
}
li {
  font-size: small;
  margin: 0 15%;
}

label {
  font-size: 2vh;
  margin-left: 10%;
  margin-bottom: 1vh;
}

input,
select {
  background-color: #17253e;
  color: #ffffff;
  border: none;
  width: 80%;
  height: 2.5vh;
  margin-left: 10%;
  margin-bottom: 4%;
}
button {
  width: 22%;
  padding: 2%;
  margin: 2% 39%;
  background: linear-gradient(135deg, #20639b, #05da93);
  color: #ffffff;
  font-size: 1vw;
  font-weight: 600;
  border-radius: 2vh;
}

.modalPopup-enter-active {
  animation: modalPopup 0.7s ease-out forwards;
}

.modalPopup-leave-active {
  animation: modalPopup 0.7s ease-in reverse forwards;
}

@keyframes modalPopup {
  from {
    opacity: 0;
    transform: translateY(225px) scale(0.8);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
</style>
