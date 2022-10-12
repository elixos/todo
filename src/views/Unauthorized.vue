<template>
  <main>
    <img src="../assets/logo.svg" />
    <SignIn />
  </main>
</template>
<script setup lang="ts">
import SignIn from "../components/SignIn.vue";
</script>
<style scoped>
main {
  background: url(../assets/bg.jpg) no-repeat center center fixed;
  background-size: cover;
}
img {
  width: 50vh;
  position: absolute;
  right: 5vw;
  top: 8vh;
}
</style>
