<template>
  <div v-if="edited" id="edit">
    <h3>Editar Tarea</h3>
    <div>
      <input type="text" v-model="title" :placeholder="task.task" />
      <input type="text" v-model="desc" :placeholder="task.desc" />
      <div @click="changeEdit">
        <span class="equis">+ </span
        ><b @click="todoStore.editTodo(task.id, title, desc)"> Modificar </b>
        <b @click="todoStore.delTodo(task.id)"> Del </b>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { storeToRefs } from "pinia";
import { ref } from "vue";
import { useTodoStore } from "../supabase";
const todoStore = useTodoStore();
const { task, edited } = storeToRefs(todoStore);
const title = ref(task.task);
const desc = ref(task.desc);
const addButton = ref(false);
function changeEdit() {
  edited.value = !edited.value;
}
</script>

<style scoped>
h3 {
  margin-bottom: 1vh;
}
div:first-child {
  max-width: 16vw;
}

input {
  width: 100%;
}
#edit {
  display: none;
}
@media only screen and (min-width: 700px) {
  #edit {
    display: block;
    position: fixed;
    z-index: 2;
    bottom: 0;
    left: 0;
    background-color: #084b83;
    padding: 2vh 2vw;
    font-size: 1.2em;
    color: #fafafa;
    font-weight: bold;
    cursor: pointer;
    max-width: 15vw;
  }
}
#edit span {
  font-size: 3rem;
  padding-bottom: 2vh;
  writing-mode: vertical-rl;
}
.mas {
  transform: rotate(180deg);
}
.equis {
  transform: rotate(225deg);
  margin-left: 0.1em;
}
</style>
