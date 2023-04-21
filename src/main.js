import { createApp } from 'vue';
import { createRouter,createWebHistory } from 'vue-router';

import App from './App.vue';
import UsersList from './components/users/UsersList.vue'
import TeamsList from './components/teams/TeamsList.vue'
import TeamMembers from './components/teams/TeamMembers.vue'
import NotFound from './components/Error/NotFound.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/team', component: TeamsList},
        {path: '/user', component: UsersList},
        {path: '/team/:teamId', component: TeamMembers},
        {path: '/:catchAll(.*)*', component: NotFound}
    ]
})
const app = createApp(App)

app.use(router)

app.mount('#app');
