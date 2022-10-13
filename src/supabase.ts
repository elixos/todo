import { ref } from "vue";
import { defineStore } from "pinia";
import {
  ApiError,
  AuthChangeEvent,
  createClient,
  Session,
  Subscription,
  User,
  UserCredentials,
} from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Store de control de usuario

export const userSession = ref<Session | null>(null);

export const useAuthStore = defineStore("auth", () => {
  async function session(): Promise<{
    data: Subscription | null;
    error: ApiError | null;
  }> {
    return supabase.auth.onAuthStateChange((event, session) => {
      userSession.value = session;
    });
  }

  async function signIn(
    email: string,
    password: string
  ): Promise<UserCredentials> {
    return await supabase.auth.signIn({
      email: email,
      password: password,
    });
  }

  async function signUp(
    email: string,
    password: string
  ): Promise<{
    user: User | null;
    session: Session | null;
    error: ApiError | null;
  }> {
    return await supabase.auth.signUp({
      email: email,
      password: password,
    });
  }

  async function signOut() {
    const { error } = await supabase.auth.signOut();
    if (error) {
      throw error;
    } else {
      console.log("hola");
    }
  }

  return {
    signIn,
    signUp,
    signOut,
    session,
  };
});

// Store de tareas

export const useTodoStore = defineStore("todo", () => {
  const taskArr = ref<any[]>([]);
  const task = ref<any>(null);
  const edited = ref(false);

  async function addTodo(
    text: string,
    desc: string,
    status: number
  ): Promise<void> {
    await supabase
      .from("todos")
      .insert({
        user_id: userSession.value?.user?.id,
        task: text,
        board: 2,
        status: status,
        important: false,
        desc: desc,
      })
      .single();
  }

  async function delTodo(id: string): Promise<void> {
    await supabase.from("todos").delete().eq("id", id);
  }

  async function importantTodo(id: string, bool: boolean): Promise<void> {
    await supabase
      .from("todos")
      .update({ important: !bool })
      .eq("id", id)
      .single();
  }

  async function editTodo(
    id: string,
    task: string,
    desc: string
  ): Promise<void> {
    console.log(id, task, desc);
    await supabase
      .from("todos")
      .update({ task: task, desc: desc })
      .eq("id", id)
      .single();
  }

  async function statusTodo(id: string, status: number): Promise<void> {
    await supabase
      .from("todos")
      .update({ status: status })
      .eq("id", id)
      .single();
  }
  async function readTodo(): Promise<void> {
    const { data: todos } = await supabase
      .from("todos")
      .select("*")
      .order("important", { ascending: false })
      .order("updated", { ascending: true });
    taskArr.value = todos!;
  }

  return {
    taskArr,
    task,
    edited,
    addTodo,
    delTodo,
    importantTodo,
    editTodo,
    statusTodo,
    readTodo,
  };
});
