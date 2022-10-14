<template>
  <div v-if="addButton" id="add">
    <h3>Nueva Tarea</h3>
    <div>
      <input type="text" v-model="title" placeholder="Título" />
      <input type="text" v-model="desc" placeholder="Descripción" />
      <div @click="changeAdd">
        <span class="equis">+ </span>
        <div @click="todoStore.addTodo(title, desc, 1)" id="addButton">
          Añadir
        </div>
        <b @click="todoStore.addTodo(title, desc, 0)">▲</b>
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
const screen = ref(window.innerWidth);

if (screen.value < 700) addButton.value = true;
function changeAdd() {
  addButton.value = !addButton.value;
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

#add {
  display: block;
  position: relative;
  z-index: 2;
  width: 85vw;
  font-size: 1.2em;
  color: #fafafa;
  font-weight: bold;
}

#add span {
  font-size: 3rem;
  padding-bottom: 2vh;
  writing-mode: vertical-rl;
}
#addButton {
  display: inline;
  background-color: #fafafa;
  color: #084b83;
  padding: 0.5vw;
  margin: 1.5vh;
  border-radius: 5px;
}
input {
  border-radius: 5px;
  background-color: #fafafa;
  height: 4vh;
  border: none;
  margin-bottom: 1vh;
}
.mas {
  transform: rotate(180deg);
}
.equis {
  display: none;
}
@media only screen and (min-width: 700px) {
  #add {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 17vw;
    background-color: #084b83;
    padding: 2vh 0vw 2vh 1vw;
    cursor: pointer;
  }
  .equis {
    display: inline;
    transform: rotate(225deg);
    margin-left: 0.1em;
  }
}
</style>
