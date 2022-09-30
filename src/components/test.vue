<template>
  <section style="display: flex; flex-direction: row">
    <div
      @drop="drop(board.board_id)"
      @dragover.prevent
      @dragevent.prevent
      v-for="(board, index) in todoStore.boards"
      :key="index"
      style="background-color: lightgrey; margin-right: 10px"
    >
      <h3>{{ board.board_name }}</h3>
      <input
        v-model="board.task"
        type="text"
        :id="board.board_id"
        placeholder=""
      /><button @click="addTodo(board.task, board.board_id)" class="btn-black">
        Add
      </button>
      <ul>
        <template v-for="(todo, index) in todoStore.allTodos" :key="index">
          <li
            draggable="true"
            @dragstart="drag(todo)"
            v-if="todo.board === board.board_id"
            style="
              background-color: white;
              list-style-type: none;
              margin-bottom: 5px;
            "
          >
            <span @click="delTodo(todo.id)">{{ todo.task }}</span>
            <input
              type="checkbox"
              @click="completeTodo(todo.id, !todo.complete)"
              :checked="todo.complete == true"
            />
            <b @click="editTodo(todo.id, todo.task)">Edit</b>
          </li>
        </template>
      </ul>
    </div>
    <div><h2>+</h2></div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useTodoStore } from "../stores/todo";
import { supabase } from "../supabase";

const todoStore = useTodoStore();
const task = ref({});

todoStore.readTodo();

async function addTodo(text: string, board: string) {
  try {
    await todoStore.addTodo(text, board);
  } catch (error: any) {
    console.log(error.message);
  }
}

async function completeTodo(id: string, bool: boolean) {
  try {
    await todoStore.completeTodo(id, bool);
  } catch (error: any) {
    console.log(error.message);
  }
}

async function delTodo(id: string) {
  try {
    await todoStore.delTodo(id);
  } catch (error: any) {
    console.log(error.message);
  }
}
async function editTodo(id: string, old: string) {
  let newtask: string = prompt("Edit task", old)!;
  try {
    await todoStore.editTodo(id, newtask);
  } catch (error: any) {
    console.log(error.message);
  }
}

function drag(todo: any) {
  task.value = todo;
}

function drop(destiny: string) {
  addTodo(task.value.task, destiny);
  delTodo(task.value.id);
  todoStore.readTodo;
}
</script>
