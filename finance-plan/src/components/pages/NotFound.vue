<template>
  <div>
    <base-card>
      <h2>
        Oops, hier ist wohl etwas schief gegangen... :C <br />Hier kommst du
        zurück zum
        <router-link to="/login">Login</router-link>
      </h2>
    </base-card>
  </div>
</template>

<script></script>
<style scoped>
div {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
h2 {
  color: #fff;
  text-align: center;
}

a {
  color: #05da93;
}
</style>
