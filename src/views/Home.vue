<template>
  <div class="home">
    <navigation-bar />
    <template v-if="content && !isShowEditBlock">
      <div @dblclick="openEditBlock">
        {{ content }}
      </div>
    </template>
    <template v-if="isAdmin && isShowEditBlock">
      <textarea v-model.trim="newContent" />
      <button @click="addNewContent">Add</button>
    </template>
  </div>
</template>

<script>
import NavigationBar from "../components/NavigationBar.vue";

export default {
  name: "home",
  components: {
    NavigationBar
  },
  data() {
    return {
      contents: null,
      content: null,
      newContent: "",
      isShowEditBlock: false,
      isAdmin: false
    };
  },
  created() {
    this.getContent();
  },
  mounted() {
    this.isAdmin = this.$store.state.isAdmin;
  },
  beforeRouteUpdate(to, from, next) {
    console.log(to);
    this.content = null;
    this.getContent(to.params.id);
    next();
  },
  methods: {
    getContent(id) {
      this.contents = JSON.parse(localStorage.getItem("contents")) || {};
      this.content = this.contents[id || this.$route.params.id] || "";
      this.isShowEditBlock = !this.content;
    },
    addNewContent() {
      if (!this.newContent) return;
      console.log(this.newContent);
      this.contents[this.$route.params.id] = this.newContent;
      localStorage.setItem("contents", JSON.stringify(this.contents));
      this.content = this.newContent;
      this.newContent = "";
      this.isShowEditBlock = !this.isShowEditBlock;
    },
    openEditBlock() {
      if (this.$store.state.isAdmin === false) return;
      this.newContent = this.content;
      this.isShowEditBlock = !this.isShowEditBlock;
    }
  }
};
</script>
