import { createApp } from 'vue';
import { createWebHistory, createRouter } from "vue-router";
import App from './App';
import store from './store';

import AuthHandler from './components/AuthHandler'
import ImageList from './components/ImageList'
import UploadForm from './components/UploadForm'

const routes = [
  { path: '/', component: ImageList },
  { path: '/upload', component: UploadForm },
  { path: '/oauth2/callback', component: AuthHandler },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App).use(router).use(store);
app.mount('#app');
