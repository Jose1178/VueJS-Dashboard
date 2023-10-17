import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createVuetify } from 'vuetify';

const app = createApp(App);
app.use(router);

const vuetify = createVuetify(); 

app.use(vuetify); 

app.mount('#app');
