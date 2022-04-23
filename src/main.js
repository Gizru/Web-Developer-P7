import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import router from './router';
import axios from 'axios';


const store = createStore({
    state() {
        return {
            connected: false,
            userName: '',
            userId: ''
        }
    },
    mutations: {
        changeUsername(state, response) {
            if (response == '') {
                state.userName = '';
                state.connected = false;
                state.userId = ''
            }
            else {
                state.userName = response.data.userName
                state.connected = true;
                state.userId = response.data.userId;
            }
        }
    },
    actions: {
        Login({ commit }, response) {
            commit('changeUsername', response);
        },
        Logout({ commit }) {
            commit('changeUsername', '');
        }
    },
})

axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://localhost:3000/api';
createApp(App).use(router).use(router).use(store).mount('#app')
