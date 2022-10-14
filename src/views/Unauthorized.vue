<template>
  <main>
    <img src="../assets/logo.svg" />
    <img src="../assets/white.svg" />
    <div v-if="login">
      <SignIn />
      <div class="link" @click="changeAuth()">Registro</div>
    </div>
    <div v-else>
      <SignUp />
      <div class="link" @click="changeAuth()">Acceso</div>
    </div>
  </main>
</template>
<script setup lang="ts">
import { ref } from "vue";
import SignIn from "../components/SignIn.vue";
import SignUp from "../components/SignUp.vue";
const login = ref(true);
function changeAuth() {
  login.value = !login.value;
}
</script>
<style scoped>
main {
  background: #084b83;
  display: block;
  min-height: 100vh;
}
img:first-child {
  display: none;
}
img:nth-child(2) {
  width: 60vw;
  padding: 10vh 10vw;
  position: relative;
}
.link {
  margin-left: 5vw;
  color: #e3f2fd;
  font-weight: bold;
  cursor: pointer;
}
@media only screen and (min-width: 700px) {
  main {
    background: url(../assets/bg.jpg) no-repeat center right fixed;
    background-size: cover;
  }
  img:first-child {
    display: block;
    width: 50vh;
    position: absolute;
    left: 5vw;
    top: 8vh;
  }
  img:nth-child(2) {
    display: none;
  }
  .link {
    position: absolute;
    bottom: 5vh;
    left: 5vw;

    color: black;
  }
}
</style>
