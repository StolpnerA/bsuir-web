<template>
  <div class="home">
    <navigation-bar />
    <div>
      <template v-if="content && !isShowEditBlock">
        <div
          class="home__text"
          @dblclick="openEditBlock">
          {{ content }}
        </div>
      </template>
      <template v-if="(isAdmin && isShowEditBlock) || (isAdmin && !content)">
        <textarea
          class="home__textarea"
          v-model="newContent" /><br/>
        <button @click="addNewContent">Add</button>
        <button @click="cancelContent">Cancel</button>
      </template>
    </div>
  </div>
</template>

<script>
import NavigationBar from '../components/NavigationBar.vue';

export default {
  name: 'home',
  components: {
    NavigationBar,
  },
  data() {
    return {
      contents: null,
      content: null,
      newContent: '',
      isShowEditBlock: false,
      isAdmin: false,
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
      this.contents = JSON.parse(localStorage.getItem('contents')) || {};
      this.content = this.contents[id || this.$route.params.id] || '';
      this.isShowEditBlock = !this.content;
    },
    addNewContent() {
      if (!this.newContent) return;
      console.log(this.newContent);
      this.contents[this.$route.params.id] = this.newContent;
      localStorage.setItem('contents', JSON.stringify(this.contents));
      this.content = this.newContent;
      this.newContent = '';
      this.isShowEditBlock = !this.isShowEditBlock;
    },
    cancelContent() {
      this.isShowEditBlock = !this.isShowEditBlock;
    },
    openEditBlock() {
      if (this.$store.state.isAdmin === false) return;
      this.newContent = this.content;
      this.isShowEditBlock = !this.isShowEditBlock;
    },
  },
};
</script>

<style lang="scss">
.home {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
</style>
