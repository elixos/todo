<template>
  <!-- <a href="" style="position: absolute; right: 0" @click="authStore.signOut"
    >logout</a
  > -->
  <AddTaskVue />
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
import { useAuthStore, useTodoStore } from "../supabase";
import Sidebar from "../components/Sidebar.vue";
import TodoList from "../components/TodoList.vue";
import AddTaskVue from "../components/AddTask.vue";
const todoStore = useTodoStore();
const authStore = useAuthStore();

// const { email } = storeToRefs(authStore);
function signOut() {
  authStore.signIn;
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

aside {
  flex: 0 0 20vw;
  background-color: #084b83;
  max-width: 20vw;
}
#fixed {
  position: fixed;
  background-color: #084b83;
  min-width: 20vw;
  min-height: 100%;
}
</style>
