<template>
  <transition name="modalPopup">
    <div v-if="isEditProfileOpen" id="baseModal">
      <div class="container">
        <form class="inputArea" @submit.prevent="processEdit">
          <h1>Profil bearbeiten</h1>
          <label>Vorname</label>
          <input v-model="firstName" />
          <label>Nachname</label>
          <input v-model="lastName" />
          <label>E-Mail</label>
          <input v-model="userEmail" />
          <label>altes Passwort</label>
          <input v-model="oldPassword" />
          <p v-if="oldPasswordWrong" :style="{ color: 'red' }">
            Ist das alte Passwort richtig? Soll es nicht verändert werden,
            lösche den Inhalt der Passwortfelder
          </p>
          <label>neues Passwort</label>
          <input v-model="newPassword" />
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
          <div
            class="loadingMsg"
            v-if="requestStatus === 'loading'"
            :style="{ color: '#ffffff' }"
          >
            <spinning-loader id="spinner"></spinning-loader>
            <p>Anfrage wird bearbeitet...</p>
            <p>Bitte haben sie ein wenig Geduld</p>
          </div>
          <p
            v-else-if="requestStatus == 'connectionProblem'"
            :style="{ color: 'red' }"
          >
            Leider gab es ein Problem mit der Verbindung zur Datenbank. Bitte
            versuch es nochmal.
          </p>
          <p
            v-else-if="requestStatus == 'deleteProblem'"
            :style="{ color: 'red' }"
          >
            Leider ist etwas beim Löschen des Profils etwas schief gegangen.
            Bitte versuch es nochmal.
          </p>
          <p
            v-else-if="requestStatus == 'editProblem'"
            :style="{ color: 'red' }"
          >
            Leider ist etwas beim ändern der Daten schief gegangen. Bitte
            versuch es nochmal.
          </p>
          <button v-if="requestStatus !== 'loading'" type="submit">
            SUBMIT
          </button>
        </form>
        <button
          v-if="showDeleteBtn && requestStatus !== 'loading'"
          @click="toggleDeleteBtn(), console.log(this.requestStatus)"
        >
          Account löschen
        </button>
        <delete-acc-confirm
          v-else-if="!showDeleteBtn && requestStatus !== 'loading'"
          @cancelDelete="toggleDeleteBtn"
        ></delete-acc-confirm>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import DeleteAccConfirm from "./DeleteAccConfirm.vue";
import SpinningLoader from "@/components/base/SpinningLoader.vue";

export default {
  data() {
    return {
      oldPassword: "",
      newPassword: "",
      oldPasswordWrong: false,
      showDeleteBtn: true,
    };
  },
  computed: {
    ...mapGetters("userModule", [
      "getFirstName",
      "getLastName",
      "getEmail",
      "getUserId",
    ]),
    isEditProfileOpen() {
      return this.$store.getters["popupModule/isEditProfileOpen"];
    },
    userPassword() {
      return this.$store.getters["userModule/getPassword"];
    },
    passwordRequirements() {
      return this.$store.getters["userModule/getPasswordRequirements"];
    },
    requestStatus() {
      return this.$store.getters["userModule/getRequestStatus"];
    },
  },
  watch: {
    isEditProfileOpen(newValue) {
      if (newValue) {
        this.firstName = this.getFirstName;
        this.lastName = this.getLastName;
        this.userEmail = this.getEmail;
      }
    },
    newPassword(newValue) {
      this.$store.dispatch("userModule/checkPassword", newValue);
    },
  },
  methods: {
    ...mapActions("popupModule", [
      "openProfileEdit",
      "closeProfileEdit",
      "closeBackdrop",
    ]),
    async processEdit() {
      if (this.userPassword === this.oldPassword) {
        this.oldPasswordWrong = false;
        if (
          this.newPassword.trim != "" &&
          this.passwordRequirements.requirementsOk
        ) {
          this.$store.dispatch("userModule/putUser", {
            userId: this.$store.getters["userModule/getUserId"],
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.userEmail,
            password: this.newPassword,
          });
        }
      } else if (this.oldPassword == "" && this.newPassword == "") {
        this.$store.dispatch("userModule/putUser", {
          userId: this.$store.getters["userModule/getUserId"],
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.userEmail,
          password: this.userPassword,
        });
        this.oldPasswordWrong = false;
      } else {
        this.oldPasswordWrong = true;
      }
      this.oldPassword = "";
      this.newPassword = "";
    },

    toggleDeleteBtn() {
      this.showDeleteBtn = !this.showDeleteBtn;
    },
  },
  components: { DeleteAccConfirm, SpinningLoader },
};
</script>

<style scoped>
#spinner {
  scale: 0.75;
}

.loadingMsg {
  display: flex;
  align-items: center;
  flex-direction: column;
}
#baseModal {
  z-index: 2;
  position: absolute;
  margin: 4% 32.5%;
  width: 35%;
  height: auto;
  background-color: #152032;
  color: #ecf0f3;
  border-radius: 5vh;
  box-shadow: 0vh 0vh 5vh #20639b, 0vh 0vh 2vh #05da93;
}

.container {
  padding: 0%;
}
.inputArea {
  padding: 2.5%;
  display: flex;
  flex-direction: column;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

p {
  font-size: small;
  margin: 0 10%;
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
