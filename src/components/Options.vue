<template>
  <div id="fullscreen">
    <div id="logout" @click="authStore.signOut">
      <img src="../assets/logout.png" />
    </div>
    <Backlog />
    <EditTask />
    <AddTask v-show="!edited" addButon="true" />
  </div>
</template>
<script setup lang="ts">
import Backlog from "./Backlog.vue";
import AddTask from "./AddTask.vue";
import EditTask from "./EditTask.vue";
import { useAuthStore, useTodoStore } from "../supabase";
import { storeToRefs } from "pinia";
const todoStore = useTodoStore();
const authStore = useAuthStore();
const { task, edited } = storeToRefs(todoStore);
console.log(edited.value);
</script>
<style scoped>
#fullscreen {
  position: absolute;
  width: 100vw;
  height: auto;
  border-bottom: black 2vw solid;
  margin: 2vh 2w;
  background-color: #084b83;
  color: #fafafa;
  z-index: 9;
  padding: 5vh;
}
#logout {
  display: block;
  position: absolute;
  z-index: 10;
  top: 5vh;
  left: 80vw;
}
#logout img {
  width: 6vw;
}
</style>
