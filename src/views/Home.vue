<template>
  <div id="logout" href="" style="" @click="authStore.signOut">
    <img src="../assets/logout.png" />
  </div>

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

import { storeToRefs } from "pinia";
const todoStore = useTodoStore();
const authStore = useAuthStore();

const { edited } = storeToRefs(todoStore);
function signOut() {
  authStore.signIn;
}
async function showBacklog(board: string) {}
</script>

<style scoped>
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
  display: none;
}
#logout {
  display: none;
}
#logout img {
  display: none;
}
@media only screen and (min-width: 700px) {
  aside {
    display: block;
  }

  #logout {
    display: block;
    position: absolute;
    z-index: 10;
    left: 17vw;
    top: 1.5vw;
    color: #e3f2fd;
    font-weight: bold;
    cursor: pointer;
  }
  #logout img {
    display: block;
    width: 2vw;
  }
}
#fixed {
  position: fixed;
  background-color: #084b83;
  min-width: 20vw;
  min-height: 100%;
}
</style>
