<template>
  <div>
    <h5>Default</h5>
    <PanelMenu :model="items" />
    <router-link :to="{ name: 'Chat' }">Chat</router-link>
  </div>
</template>

<script>
import PanelMenu from "primevue/panelmenu";

export default {
  name: "Home",
  components: {
    PanelMenu,
  },
  data() {
    return {
      expandedKeys: {},
      items: [
        {
          key: "0",
          label: "Chat Bot",
          icon: "pi pi-fw pi-discord",
          items: [
            {
              key: "0_0",
              label: "New",
              icon: "pi pi-fw pi-plus",
              command: (event) => {
                console.log(event)
                this.$router.go({path: '/chat'})
              },
            },
          ],
        },
        {
          key: "1",
          label: "To Do List",
          icon: "pi pi-fw pi-list",
          items: [
            {
              key: "1_0",
              label: "Left",
              icon: "pi pi-fw pi-align-left",
            },
          ],
        },
      ],
    };
  },
  methods: {
    expandAll() {
      for (let node of this.items) {
        this.expandNode(node);
      }

      this.expandedKeys = {
        ...this.expandedKeys,
      };
    },
    collapseAll() {
      this.expandedKeys = {};
    },
    expandNode(node) {
      if (node.items && node.items.length) {
        this.expandedKeys[node.key] = true;

        for (let child of node.items) {
          this.expandNode(child);
        }
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
