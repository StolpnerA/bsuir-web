<template>
  <div>
    <input v-model="login" type="text">
    <input v-model="pass" type="text">
    <button @click="authorization">
      Authorization
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      login: "",
      pass: ""
    };
  },
  methods: {
    authorization() {
      if (this.login === "admin" && this.pass === "admin") {
        this.$store.commit("changeUser", true);
        this.$router.push({ name: "home" });
      } else if (this.login === "user" && this.pass === "user") {
        this.$store.commit("changeUser", false);
        this.$router.push({ name: "home" });
      } else return;
    }
  }
};
</script>

<style>
</style>
