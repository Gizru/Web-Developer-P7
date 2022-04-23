import { createRouter, createWebHistory } from 'vue-router'
import UnloggedView from '../views/UnloggedView.vue'
import RecentView from '../views/RecentView.vue'
import MemesView from '../views/MemesView.vue'
import ForumView from '../views/ForumView.vue'
import SignupView from '../views/SignupView.vue'
import LoginView from '../views/LoginView.vue'
import DefaultLogin from '../views/DefaultLogin.vue'
import MemesCreate from '../views/MemesCreate.vue'
import ForumCreate from '../views/ForumCreate.vue'









const routes = [
  {
        path: '/',
        name: 'UnloggedView',
        component: UnloggedView,
        children: [
            {
                path: '/signup',
                name: 'SignupView',
                component: SignupView
            }, {
                path: '/login',
                name: 'LoginView',
                component: LoginView
            }, {
                path: '/default',
                name: 'Default',
                component: DefaultLogin
            }
        ]
  },
  {
        path: '/recent',
        name: 'Recent',
        component: RecentView
    },
    {
        path: '/memes',
        name: 'Memes',
        component: MemesView,
        children: [
            {
                path: '/create',
                name: 'MemesCreate',
                component: MemesCreate
            }
        ]
    },
    {
        path: '/forum',
        name: 'Forum',
        component: ForumView,
        children: [
            {
                path: '/create',
                name: 'ForumCreate',
                component: ForumCreate
            }
        ]
    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
