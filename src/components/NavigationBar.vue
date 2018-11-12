<template>
  <nav class="navigationBar">
    <template v-if="menuItems">
      <div
        v-for="(item, index) in menuItems"
        :key="item.id">
        <router-link :to="{ name: 'home', params: {id: item.id }}">
          {{ item.title }}
        </router-link>
        <button
          v-if="isAdmin" 
          @click="deleteItemMenu(index)">
          del
        </button>
      </div>
    </template>
    <template v-if="isAdmin">
      <input
        v-model.trim="newItem"
        type="text">
      <button @click="addNewItem">Add</button>
    </template>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [],
      newItem: "",
      isAdmin: false
    };
  },
  created() {
    this.getMenuItems();
  },
  mounted() {
    this.isAdmin = this.$store.state.isAdmin;
  },
  methods: {
    getMenuItems() {
      this.menuItems = JSON.parse(localStorage.getItem("menuItems")) || [];
    },
    addNewItem() {
      if (!this.newItem) return;
      console.log(this.newItem);
      this.menuItems.push({
        id: this.menuItems.length + 1,
        title: this.newItem
      });
      localStorage.setItem("menuItems", JSON.stringify(this.menuItems));
    },
    deleteItemMenu(index) {
      this.menuItems.splice(index, 1);
    }
  }
};
</script>

<style lang="scss">
.navigationBar {
  display: flex;
  flex-direction: column;
  max-width: 300px;
}
</style>
