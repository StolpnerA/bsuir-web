<template>
  <div class="home">
    <template v-if="content">
      {{ content }}
    </template>
    <template v-else>
      <textarea v-model="newContent" />
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
    };
  },
  created() {
    this.getContent();
  },
  methods: {
    getContent() {
      this.contents = JSON.parse(localStorage.getItem('contents')) || {};
      this.content = this.contents[this.$route.params.id] || '';
    },
    addNewContent() {
      console.log(this.newContent);
      this.contents[this.$route.params.id] = this.newContent;
      localStorage.setItem('contents', JSON.stringify(this.contents));
      this.content = this.newContent;
    },
  },
};
</script>
