<template>
  <button style="float: right" @click="signOut">logout</button>
  <Test />
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useAuthStore } from "../stores/auth";
import Test from "./test.vue";

const authStore = useAuthStore();
const { email } = storeToRefs(authStore);
function signOut() {
  authStore.signOut();
}
</script>
