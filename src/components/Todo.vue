<template>
  <a href="" style="position: absolute; right: 0" @click="authStore.signOut"
    >logout</a
  >
  <div id="add" @click="addTodo('Nueva Tarea')" href="">+</div>
  <main>
    <aside>
      <div id="fixed">
        <Sidebar />
      </div>
    </aside>
    <TodoList />

    <!-- <div id="info"></div> -->
  </main>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useAuthStore, useTodoStore } from "../supabase";
import Sidebar from "../components/Sidebar.vue";
import TodoList from "./TodoList.vue";
const todoStore = useTodoStore();
const authStore = useAuthStore();
// const { email } = storeToRefs(authStore);
function signOut() {
  authStore.signIn;
}

async function addTodo(text: string) {
  try {
    await todoStore.addTodo(text);
  } catch (error: any) {
    console.log(error.message);
  }
}
async function showBacklog(board: string) {}
</script>

<style>
main {
  display: flex;
  height: 100vh;
  padding-right: 1vw;
  background-color: #fafafa;
}

section {
  background-color: #e3f2fd;
  flex: 1;
  padding-right: 5vw;
  display: flex;
}

#add {
  position: fixed;
  z-index: 2;
  bottom: 0;
  left: 0;
  background-color: #084b83;
  padding: 3vh 3vh;
  font-size: 3em;
  color: #fafafa;
  font-weight: bold;
  cursor: pointer;
}
aside {
  flex: 0 0 20vw;
  background-color: #084b83;
}
#fixed {
  position: fixed;
  background-color: #084b83;
  min-width: 20vw;
  min-height: 100%;
}
</style>
