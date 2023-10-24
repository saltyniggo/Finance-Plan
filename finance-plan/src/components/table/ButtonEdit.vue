<template>
  <button class="editBtn"><i class="fa-solid fa-pen"></i></button>
</template>

<style scoped>
.editBtn {
  color: #17253e;
}

i {
  transition: transform 0.2s;
  will-change: transform;
}

i:hover {
  transform: scale(1.1);
}
</style>
