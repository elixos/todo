<template>
  <div id="fullscreen">
    <Backlog />
    <AddTask addButon="true" />
  </div>
</template>
<script setup lang="ts">
import Backlog from "./Backlog.vue";
import AddTask from "./AddTask.vue";
</script>
<style scoped>
#fullscreen {
  position: absolute;
  top: 2vh;
  left: 2vw;
  width: 96vw;
  height: 92vh;
  margin: 2vh 2w;
  background-color: #084b83;
  color: #fafafa;
  z-index: 9;
  padding: 5vh;
}
</style>
