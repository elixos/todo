<template>
  <form @submit.prevent="signIn(email, password)">
    <input type="text" v-model="email" placeholder="mail" />
    <input type="password" v-model="password" placeholder="pass" />
    <button type="submit">Login</button>
  </form>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { ref } from "vue";
import { useAuthStore } from "../stores/auth";

const authStore = useAuthStore();
const { email } = storeToRefs(authStore);
const password = ref("");

async function signIn(email: string, password: string) {
  try {
    await authStore.signIn(email, password);
  } catch (error: any) {
    console.log(error.message);
  }
}
</script>
