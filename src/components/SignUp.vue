<template>
  <form @submit.prevent="signUp(email, password)">
    <input type="text" v-model="email" placeholder="mail" />
    <input type="password" v-model="password" placeholder="pass" />
    <button type="submit">Register</button>
  </form>
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
