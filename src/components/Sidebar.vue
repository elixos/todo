<template>
  <img src="../assets/white.svg" />
  <Backlog />
  <AddTaskVue />
  <EditTask />
</template>
<script setup lang="ts">
import Backlog from "./Backlog.vue";
import AddTaskVue from "../components/AddTask.vue";
import EditTask from "../components/EditTask.vue";
</script>
<style scoped>
img {
  width: 15vw;
  margin: 4vh 2.5vw;
}
</style>
