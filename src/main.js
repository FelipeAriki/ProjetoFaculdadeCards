import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import "bootstrap/dist/js/bootstrap.js"
import "bootstrap/dist/css/bootstrap.min.css"
import Painel from './components/Painel'
import CadastroVaga from './components/CadastroVaga'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Painel },
        { path: '/cadastroVaga', component: CadastroVaga },
    ]
});

const app = createApp(App)
app.use(router);
app.mount('#app')
