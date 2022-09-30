import { defineStore } from "pinia";
import { supabase } from "../supabase";
import router from "../router";
import { useAuthStore } from "../stores/auth";
import { ref } from "vue";

export const useTodoStore = defineStore("todo", () => {
  const authStore = useAuthStore();
  const userID = authStore.auth!.user!.id;
  const allTodos = ref<any[]>([]);
  const boards = ref<any[]>([]);

  async function addTodo(text: string, board: string) {
    const { data, error } = await supabase
      .from("todos")
      .insert({
        user_id: userID,
        task: text,
        board: board,
      })
      .single();
    if (error) {
      throw error;
      router.push("/");
    } else {
      readTodo();
    }
  }

  async function delTodo(id: string) {
    const { error } = await supabase.from("todos").delete().eq("id", id);
    if (error) {
      throw error;
    } else {
      readTodo();
    }
  }

  async function completeTodo(id: string, bool: boolean) {
    const { error } = await supabase
      .from("todos")
      .update({ complete: bool })
      .eq("id", id)
      .single();
    if (error) {
      throw error;
    }
  }

  async function editTodo(id: string, task: string) {
    const { error } = await supabase
      .from("todos")
      .update({ task: task })
      .eq("id", id)
      .single();
    if (error) {
      throw error;
    } else {
      readTodo();
    }
  }

  async function readTodo() {
    const { data: board, error } = await supabase
      .from("boards")
      .select("*")
      .order("board_id");
    boards.value = board!;
    const { data: todos } = await supabase
      .from("todos")
      .select("*")
      .order("id");
    // if (error) throw error;
    allTodos.value = todos!;
  }

  return {
    allTodos,
    boards,
    addTodo,
    delTodo,
    completeTodo,
    editTodo,
    readTodo,
  };
});
