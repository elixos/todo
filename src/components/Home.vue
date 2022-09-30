<template>
  <div v-if="auth === null">
    <RouterLink to="/">Login</RouterLink>
    <RouterLink to="/signup">SignUp</RouterLink>
    <SignIn />
  </div>
  <div v-else>
    <Desk />
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useAuthStore } from "../stores/auth";
import Desk from "../components/Desk.vue";
import SignIn from "../components/SignIn.vue";

const authStore = useAuthStore();
const { auth } = storeToRefs(authStore);
</script>
