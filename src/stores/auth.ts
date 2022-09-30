import { ref } from "vue";
import { defineStore } from "pinia";
import { supabase } from "../supabase";
import router from "../router";
import { Session } from "@supabase/gotrue-js";

export const useAuthStore = defineStore("auth", () => {
  const email = ref<string>("");
  const auth = ref<Session | null>(null);

  function session() {
    supabase.auth.onAuthStateChange((event, session) => {
      auth.value = session;
    });
  }

  async function signIn(mail: string, password: string) {
    const { user, session, error } = await supabase.auth.signIn({
      email: mail,
      password: password,
    });
    if (error) {
      throw error;
    } else {
      email.value = mail;
      router.push("/desk");
    }
  }

  async function signUp(mail: string, password: string) {
    const { user, session, error } = await supabase.auth.signUp({
      email: mail,
      password: password,
    });
    if (error) {
      throw error;
    } else {
      router.push("/desk");
    }
  }

  async function signOut() {
    const { error } = await supabase.auth.signOut();
    if (error) {
      throw error;
    } else {
      router.push("/");
    }
  }

  return {
    email,
    auth,
    session,
    signIn,
    signUp,
    signOut,
  };
});
