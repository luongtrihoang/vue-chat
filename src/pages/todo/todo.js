import { createApp } from 'vue';
import Todo from '../todo/Todo.vue';

import PrimeVue from 'primevue/config'

import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

const app = createApp(Todo)

app.use(PrimeVue);

app.mount("#app")