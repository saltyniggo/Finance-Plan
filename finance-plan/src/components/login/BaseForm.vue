<template>
  <h1>
    <slot name="title"></slot>
  </h1>
  <form @submit.prevent="onSubmit">
    <slot>Default</slot>
    <slot name="buttonSubmit"> <button @submit.prevent>Submit</button></slot>
  </form>
</template>

<style scoped>
* {
  color: #ecf0f3;
}
.inputArea {
  padding: 2.5%;
  display: flex;
  flex-direction: column;
}

h1 {
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
</style>
