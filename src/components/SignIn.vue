<template>
  <div>
    <input
      type="text"
      v-model="email"
      placeholder="Introduce Correo Electrónico"
    />
    <input type="password" v-model="password" placeholder="Contraseña" />
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
  right: 8vw;
  bottom: 5vh;
}
input {
  width: 90%;
  height: 5vh;
  margin-bottom: 3vh;
  background-color: #fafafa;
  color: #084b83;
  font-weight: bold;
  border: none;
  padding: 0 5%;
}
button {
  width: 100%;
  background-color: #fafafa;
  color: #084b83;
  font-weight: bold;
}
</style>
