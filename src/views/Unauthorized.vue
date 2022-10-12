<template>
  <main>
    <img src="../assets/logo.svg" />
    <SignIn />
    <div id="demo">
      Demo user:<br />
      kvd@email.com <br />
      123456
    </div>
  </main>
</template>
<script setup lang="ts">
import SignIn from "../components/SignIn.vue";
</script>
<style scoped>
main {
  background: url(../assets/bg.jpg) no-repeat center center fixed;
  background-size: cover;
}
img {
  width: 50vh;
  position: absolute;
  right: 5vw;
  top: 8vh;
}
#demo {
  position: absolute;
  bottom: 5vh;
  left: 5vw;
  background-color: #db5461;
  color: #084b83;
  padding: 2vw;
  font-weight: bold;
}
</style>
