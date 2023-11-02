<template>
  <back-drop
    @backdropClicked="closeBackdrop"
    :openBackdrop="openBackdrop"
  ></back-drop>
  <transition name="modalPopup">
    <div v-if="isEditModalOpen" id="baseModal">
      <form class="inputArea" @submit.prevent="processEdit">
        <label>Wie viel?</label>
        <input
          type="number"
          min="0.00"
          step="0.01"
          placeholder="00.00"
          v-model="newAmount"
        />
        <label>Woher?</label>
        <input type="text" v-model="newDescription" />
        <label>An welchem Tag?</label>
        <input type="date" v-model="newDate" />
        <label>Kategorie</label>
        <select v-model="newCategory">
          <option value="">---</option>
          <option value="Haushalt">Haushalt</option>
          <option value="Essen">Essen</option>
          <option value="Freizeit">Freizeit</option>
          <option value="Auto">Auto</option>
          <option value="Hund">Hund</option>
          <option value="Katze">Katze</option>
          <option value="Maus">Maus</option>
        </select>
        <button>SUBMIT</button>
      </form>
    </div>
  </transition>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      newAmount: null,
      newDescription: null,
      newDate: null,
      newCategory: null,
      openBackdrop: false,
    };
  },
  computed: {
    isEditModalOpen() {
      return this.$store.getters["transactionList/isEditModalOpen"];
    },
  },
  methods: {
    processEdit() {
      this.submitEdit({
        date: this.newDate,
        amount: this.newAmount,
        description: this.newDescription,
        category: this.newCategory,
      });
    },
    ...mapActions("transactionList", ["submitEdit"]),
    closeBackdrop() {
      this.openBackdrop = false;
    },
  },
};
</script>

<style scoped>
#baseModal {
  z-index: 2;
  position: absolute;
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
