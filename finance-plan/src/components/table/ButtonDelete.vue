<template>
  <button class="deleteBtn"><i class="fa-solid fa-trash"></i></button>
</template>

<style>
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
</style>
