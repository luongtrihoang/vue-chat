import { createApp } from 'vue';
import ChatRoom from '../../pages/chat/ChatRoom.vue';
import SocketIO from 'socket.io-client'
import VueSocketIO from 'vue-socket.io'
import router from './../../router'

const app = createApp(ChatRoom)

const optionsVueIO = {
  debug: true,
  connection: SocketIO('http://localhost:3000')
}

app.use(router)
app.use(new VueSocketIO(optionsVueIO))

app.mount("#app")