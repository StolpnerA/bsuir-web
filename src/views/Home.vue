<template>
  <div class="home">
    <template v-if="content && !isShowEditBlock">
      <div @dblclick="openEditBlock">
        {{ content }}
      </div>
    </template>
    <template v-if="isShowEditBlock">
      <textarea v-model.trim="newContent" />
      <button @click="addNewContent">Add</button>
    </template>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      contents: null,
      content: null,
      newContent: '',
      isShowEditBlock: false,
    };
  },
  created() {
    this.getContent();
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
    openEditBlock() {
      this.newContent = this.content;
      this.isShowEditBlock = !this.isShowEditBlock;
    },
  },
};
</script>
