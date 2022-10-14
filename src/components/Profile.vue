<template>
  <form
    class="form-widget"
    @submit.prevent="todoStore.setProfile(userData.email, nickname)"
  >
    <!-- <Avatar v-model:path="avatar" @upload="updateProfile" /> -->
    <div>
      <label for="email">Email</label>
      <input id="email" type="text" v-model="email" disabled />
    </div>
    <div>
      <label for="username">Name</label>
      <input id="username" type="text" v-model="nickname" />
    </div>

    <div>
      <input type="submit" />
    </div>

    <div></div>
  </form>
</template>

<script setup lang="ts">
import { supabase } from "../supabase";
import { onMounted, ref } from "vue";
import { userData, useTodoStore } from "../supabase";
// import Avatar from "./Avatar.vue";

const todoStore = useTodoStore();
const loading = ref(true);
const nickname = ref("");
const email = ref(userData.email);
</script>
