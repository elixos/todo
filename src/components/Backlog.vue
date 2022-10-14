<template>
  <div class="status" :key="0">
    <div class="title">RESERVA</div>
    <div>
      <template v-for="(todo, index) in taskArr" :key="index">
        <div
          class="lista"
          v-if="todo.status === 0"
          @click="todoStore.statusTodo(todo.id, 1)"
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
import { useTodoStore } from "../supabase";
import { storeToRefs } from "pinia";
const todoStore = useTodoStore();
const { taskArr } = storeToRefs(todoStore);
</script>

<style scoped>
.status {
  display: flex;
  flex-direction: column;
  color: #fafafa;
  margin-left: 1vw;
}
.title {
  font-size: 1.4em;
  font-weight: bold;
  margin-bottom: 1vh;
}

.lista {
  flex: 1;
  margin-bottom: 1vh;
}

@media only screen and (min-width: 1200px) {
  .lista {
    background: url(../assets/next.png) no-repeat right;
    background-size: contain;
    cursor: pointer;
  }
}
.lista span {
  font-weight: bold;
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
