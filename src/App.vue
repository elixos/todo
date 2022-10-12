<template>
  <template v-if="userSession === null">
    <Unauthorized />
  </template>
  <template v-else>
    <RouterView />
  </template>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useAuthStore, userSession } from "./supabase";
import Unauthorized from "./views/Unauthorized.vue";

const authStore = useAuthStore();

onMounted(() => authStore.session());
</script>
