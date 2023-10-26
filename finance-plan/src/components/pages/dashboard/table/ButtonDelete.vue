<template>
  <button class="deleteBtn"><i class="fa-solid fa-trash"></i></button>
</template>

<style scoped>
.deleteBtn {
  color: #17253e;
}

i {
  transition: transform 0.2s;
  will-change: transform;
}

i:hover {
  transform: scale(1.1);
}

button {
  background-color: transparent;
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  margin: 1%;
}
</style>
