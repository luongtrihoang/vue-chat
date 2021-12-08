import { createWebHistory, createRouter } from "vue-router";
import Index from "../pages/index/Index.vue";
import Chat from "../pages/chat/ChatRoom.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Index,
  },
  {
    path: "/chat",
    name: "Chat",
    component: Chat,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;