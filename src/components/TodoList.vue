<template>
  <div
    class="status"
    @drop="drop(status)"
    @dragover.prevent
    @dragevent.prevent
    v-for="status in 3"
    :key="status"
  >
    <div class="title">{{ statusArr[status].toLocaleUpperCase() }}</div>
    <div class="lista">
      <template v-for="(todo, index) in taskArr" :key="index">
        <div
          draggable="true"
          @dragstart="drag(todo)"
          v-on:dblclick="importantTodo(todo.id, todo.important)"
          v-if="todo.status === status"
          :class="todo.important ? 'important' : ''"
          class="item"
        >
          <div>
            <span>{{ todo.task }}</span>
          </div>

          {{ todo.desc }}
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUpdated, ref } from "vue";
import { useTodoStore } from "../supabase";
import { storeToRefs } from "pinia";

onMounted(() => todoStore.readTodo());
onUpdated(() => todoStore.readTodo());

const statusArr: string[] = ["A futuro", "Pendiente", "En curso", "Completado"];
const todoStore = useTodoStore();
const { taskArr } = storeToRefs(todoStore);
const task = ref({});

async function importantTodo(id: string, bool: boolean) {
  try {
    await todoStore.importantTodo(id, bool);
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

async function statusTodo(id: string, status: number) {
  try {
    await todoStore.statusTodo(id, status);
  } catch (error: any) {
    console.log(error.message);
  }
}

function drag(todo: any) {
  task.value = todo;
}

function drop(destiny: number) {
  statusTodo(task.value.id, destiny);
  if (destiny === 3) importantTodo(task.value.id, true);
}
</script>

<style scoped>
.status {
  margin: 10px 1vh;
  /* flex-grow: 1; */
  flex: 1 1 0px;
  width: 0;
  display: flex;
}
.title {
  writing-mode: vertical-lr;
  transform: rotate(180deg);
  color: #084b83;
  text-align: end;
  padding: 5vh 3vh 5vh 1vh;
  font-size: 1.4em;
  font-weight: bold;
}
.lista {
  flex: 1;
}

.item {
  background-color: #e3f2fd;
  color: #084b83;
  min-height: 10vh;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  text-align: left;
  margin: 1vh 0px;
  font-size: 1.2em;
  border-radius: 5px;
  padding: 3vh 3vw;
  cursor: pointer;
}
.item span {
  font-weight: bold;
  margin-bottom: 1vh;
}

.important {
  background-color: #db5461;
  color: #fafafa;
  font-weight: bold;
}
</style>
