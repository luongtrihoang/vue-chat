import { createApp } from 'vue';
import Index from './Index.vue';

import PrimeVue from 'primevue/config'
import router from './../../router'

import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

const app = createApp(Index)

app.use(PrimeVue).use(router);

app.mount("#app")