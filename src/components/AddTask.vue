<template>
  <div v-if="addButton" id="add">
    <div>
      <input type="text" v-model="title" placeholder="Título" />
      <input type="text" v-model="desc" placeholder="Descripción" />
      <div @click="changeAdd">
        <span class="equis">+</span><b @click="addTodo(title, desc)">Pend</b>
        <b @click="addTodo(title, desc, 0)">Back</b>
      </div>
    </div>
  </div>
  <div v-else id="add" @click="changeAdd">
    <span class="mas">+</span> Añadir Tarea
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useTodoStore } from "../supabase";
const todoStore = useTodoStore();
const title = ref("");
const desc = ref("");
const addButton = ref(false);
function changeAdd() {
  addButton.value = !addButton.value;
}

async function addTodo(text: string, desc: string, status?: number) {
  try {
    await todoStore.addTodo(text, desc, status);
  } catch (error: any) {
    console.log(error.message);
  }
}
</script>

<style scoped>
div:first-child {
  max-width: 16vw;
}

input {
  width: 100%;
}
#add {
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
}
#add span {
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
