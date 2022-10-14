<template>
  <div>
    <label>Correo Electrónico</label>
    <input type="text" v-model="email" />
    <label>Contraseña</label>
    <input
      type="password"
      v-model="password"
      @keyup.enter="signIn(email, password)"
    />
    <button type="submit" @click="signIn(email, password)">Accede</button>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { ref } from "vue";
import { useAuthStore } from "../supabase";

const authStore = useAuthStore();
const email = ref("");
const password = ref("");

async function signIn(email: string, password: string) {
  try {
    await authStore.signIn(email, password);
  } catch (error: any) {
    console.log(error.message);
  }
}
</script>
<style scoped>
div {
  max-width: 20vw;
  max-height: 50vh;
  position: absolute;
  left: 8vw;
  bottom: 5vh;
}
button {
  display: inline;
  background-color: #084b83;
  color: #fafafa;
  font-weight: bold;
  font-size: 1em;
  margin-top: 1vh;
  padding: 0.5vw;
  border-radius: 5px;
}
label {
  font-weight: bold;
  font-size: 1em;
  color: black;
}
input {
  border-radius: 5px;
  background-color: #fafafa;
  color: #084b83;
  height: 4vh;
  width: 20vw;
  border: none;
  margin-bottom: 1.3vh;
}
</style>
