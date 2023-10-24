<template>
  <header>
    <h2>Finance Plan</h2>
    <div class="right-container">
      <img src="https://robohash.org/avatar" />
      <div class="btn-container">
        <button>
          <i class="fa-solid fa-pencil" style="color: #ffffff"></i>
        </button>
        <button>
          <i
            class="fa-solid fa-arrow-right-from-bracket"
            style="color: #ffffff"
          ></i>
        </button>
        <button class="hidden">
          <i
            class="fa-solid fa-arrow-right-to-bracket"
            style="color: #ffffff"
          ></i>
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  /*   position: fixed;
  top: 0; */
  width: 100vw;
  box-shadow: 0px 1px 10px grey;
  /* background-color: #152032; */
  background-color: #17253e;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  padding: 1% 2%;
}
h2 {
  text-align: center;
}

img {
  border-radius: 50%;
  background-color: beige;
  width: 4rem;
}

.hidden {
  display: none;
}

.right-container {
  display: flex;
}

.btn-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 2%;
}

button {
  background-color: transparent;
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  margin: 1%;
}
</style>
