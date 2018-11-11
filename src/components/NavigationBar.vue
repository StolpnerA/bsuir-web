<template>
  <nav class="navigationBar">
    <template v-if="menuItems">
      <router-link
        v-for="item in menuItems"
        :key="item.id"
        :to="{ name: 'home', params: {id: item.id }}">
        {{ item.title }}
      </router-link>
    </template>
    <input
      v-model.trim="newItem"
      type="text">
    <button @click="addNewItem">Add</button>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [],
      newItem: ""
    };
  },
  created() {
    this.getMenuItems();
  },
  methods: {
    getMenuItems() {
      this.menuItems = JSON.parse(localStorage.getItem("menuItems")) || [];
    },
    addNewItem() {
      console.log(this.newItem);
      this.menuItems.push({
        id: this.menuItems.length + 1,
        title: this.newItem
      });
      localStorage.setItem("menuItems", JSON.stringify(this.menuItems));
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

