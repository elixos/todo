<template>
  <div id="mobside">
    <div class="title2" name="1" @click="viewCat(1)" v-show="cat != 1">
      PENDIENTE
    </div>
    <div class="title2" name="2" @click="viewCat(2)" v-show="cat != 2">
      EN CURSO
    </div>
    <div class="title2" name="3" @click="viewCat(3)" v-show="cat != 3">
      COMPLETADO
    </div>
  </div>
  <div id="more"><img src="../assets/more.png" /></div>
  <div
    :class="'status' + status"
    @drop="drop(status)"
    @dragover.prevent
    @dragevent.prevent
    v-for="status in 3"
    :key="status"
    :name="status"
    v-show="status === cat || screen > 700"
  >
    <div class="title">
      {{ statusArr[status].toLocaleUpperCase() }}
    </div>
    <div class="lista" v-show="inMove">
      <template v-for="(todo, index) in taskArr" :key="index">
        <div
          draggable="true"
          @dragstart="drag(todo)"
          @contextmenu.prevent="rightClick(todo)"
          @dblclick="importantTodo(todo.id, todo.important)"
          v-if="todo.status === status"
          :class="todo.important ? 'important' : ''"
          class="item"
        >
          <div
            @touchstart.prevent="drag(todo)"
            @touchmove="move($event)"
            @touchend="ending($event)"
          >
            <span>{{ todo.task }}</span>
          </div>

          {{ todo.desc }}
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUpdated, reactive, ref } from "vue";
import { useTodoStore } from "../supabase";
import { storeToRefs } from "pinia";
onMounted(() => todoStore.readTodo());
onUpdated(() => todoStore.readTodo());

const statusArr: string[] = ["A futuro", "Pendiente", "En curso", "Completado"];
const todoStore = useTodoStore();
const { taskArr, task, edited } = storeToRefs(todoStore);
const inMove = ref(true);
const cat = ref(1);
const screen = ref(window.innerWidth);
// let screen = window.innerWidth;

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

function move(evt: any) {
  // inMove.value = false;
}

function ending(evt: any) {
  let x = evt.changedTouches[0].clientX;
  let y = evt.changedTouches[0].clientY;
  let target: any = document.elementsFromPoint(x, y);
  let i = 0;
  while (i < target.length) {
    if (target[i].attributes[1].name === "name") {
      drop(target[i].attributes[1].value);
      break;
    }
    i++;
  }
}

function rightClick(todo) {
  edited.value = true;
  task.value = todo;
}

function viewCat(status: number) {
  console.log(status);
  cat.value = status;
}
</script>

<style scoped>
.status1,
.status2,
.status3 {
  margin: 10px 1vh;
  /* flex-grow: 1; */
  flex: 1 1 0px;
  width: 0;
  display: flex;
}
/* .status2,
.status3 {
  display: none;
} */

#mobside {
  display: block;
  position: fixed;
  min-height: 100vh;
  width: 2vh;
  background-color: #084b83;
  padding-top: 35vh;
}

#more {
  position: fixed;
  bottom: 0;
  width: 15vw;
}
#more img {
  width: 12vw;
  margin: 2vw;
}
@media only screen and (min-width: 700px) {
  #more {
    display: none;
  }
  #mobside {
    display: none;
  }
}
.title {
  writing-mode: vertical-lr;
  transform: rotate(180deg);
  color: #084b83;
  text-align: end;
  padding: 5vh 3vh 5vh 1vh;
  font-size: 1.4em;
  font-weight: bold;
  cursor: default;
  max-height: 42vw;
}
.title2 {
  writing-mode: vertical-lr;
  transform: rotate(180deg);
  background-color: #084b83;
  color: #fafafa;
  text-align: end;
  padding: 2vh;
  font-size: 1.2em;
  font-weight: bold;
  cursor: default;
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
  cursor: grab;
}
.item div {
  margin-bottom: 1vh;
}
.item span {
  font-weight: bold;
  padding-bottom: 0.4vh;
  border-bottom: 1px solid #fafafa;
}

.important {
  background-color: #db5461;
  color: #fafafa;
}
</style>
