<template>
  <div>
    <label>Correo Electrónico</label>
    <input type="text" v-model="email" />
    <label>Contraseña</label>
    <input
      type="password"
      v-model="password"
      @keyup.enter="signUp(email, password)"
    />
    <button type="submit" @click="signUp(email, password)">Registro</button>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { ref } from "vue";
import { useAuthStore } from "../supabase";

const authStore = useAuthStore();
// const { email } = storeToRefs(authStore);
const email = ref("");
const password = ref("");

async function signUp(email: string, password: string) {
  try {
    await authStore.signUp(email, password);
  } catch (error: any) {
    console.log(error.message);
  }
}
</script>
<style scoped>
div {
  position: relative;
  width: 80vw;
  padding: 10vh 10vw;
}

button {
  display: inline;
  background-color: black;
  color: #fafafa;
  font-weight: bold;
  font-size: 1em;
  margin-top: 1vh;
  padding: 1.5vw;
  border-radius: 5px;
}
label {
  font-weight: bold;
  font-size: 1em;
  color: #fafafa;
}
input {
  border-radius: 5px;
  background-color: #fafafa;
  color: #084b83;
  height: 4vh;
  width: 80%;
  border: none;
  margin-bottom: 1.3vh;
}
@media only screen and (min-width: 700px) {
  div {
    max-width: 20vw;
    max-height: 50vh;
    position: absolute;
    left: 8vw;
    bottom: 5vh;
  }
  label {
    color: black;
  }
  input {
    width: 20vw;
  }
  button {
    background-color: #084b83;
    padding: 0.5vw;
  }
}
</style>
