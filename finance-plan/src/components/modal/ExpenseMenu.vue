<template>
  <h1>Input Expenses</h1>
  <div class="inputArea">
    <label>An welchem Tag?</label>
    <input type="date" />
    <label>Wofür?</label>
    <input type="text" />
    <label>Wie viel?</label>
    <input type="number" />
    <label>Kategorie</label>
    <select></select>
  </div>
</template>

<style scoped>
.inputArea {
  display: flex;
  flex-direction: column;
}
</style>
