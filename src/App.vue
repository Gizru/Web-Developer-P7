<script setup>
    import NavButtons from './components/NavButtons.vue'
    import Profile from './components/Profile.vue'
    import LogButtons from './components/LogButtons.vue'

</script>

<template>
    <div id="page">
        <header>
            <div class="logoDiv">
                <router-link to="/default">
                    <img alt="Vue logo" class="logo" src="./assets/icon-left-font.svg" />
                </router-link>
            </div>
            <nav>
                <router-link :to="{name: 'Recent'}" v-bind:style="[this.$store.state.connected ? {'pointer-events': 'auto'} : {'pointer-events': 'none'}] ">
                    <NavButtons name="Recent" />
                </router-link>
                <router-link :to="{name: 'Memes'}" v-bind:style="[this.$store.state.connected ? {'pointer-events': 'auto'} : {'pointer-events': 'none'}] ">
                    <NavButtons name="Memes" />
                </router-link>
                <router-link :to="{name: 'Forum'}" v-bind:style="[this.$store.state.connected ? {'pointer-events': 'auto'} : {'pointer-events': 'none'}] ">
                    <NavButtons name="Forum" />
                </router-link>
            </nav>
            <div class="profile">
                <Profile></Profile>
            </div>
            <div class="controls">
                <div v-bind:style="[this.$store.state.connected ? {'pointer-events': 'auto'} : {'pointer-events': 'none'}] ">
                    <router-link to="/default">
                        <LogButtons name="LogOut" @click="logout">
                            Log Out
                        </LogButtons>
                    </router-link>
                </div>
                <div v-bind:style="[this.$store.state.connected ? {'pointer-events': 'auto'} : {'pointer-events': 'none'}] ">
                    <router-link to="/default">
                        <LogButtons name="Delete" @click="deleteUser">
                            Delete
                        </LogButtons>
                    </router-link>
                </div>
            </div>

        </header>

        <main>
            <router-view></router-view>
        </main>
    </div>
</template>

<script>

    import axios from 'axios';

    export default {
        name: 'App',
        data() {
            return {
                isLoggedIn: this.$store.state.connected ,
            };
        },
        methods: {
            async logout() {
                this.$store.dispatch('Logout');
                this.isLoggedIn = this.$store.state.connected;
                console.log(this.$store.state.connected)
            },
            async deleteUser() {
                let userId = this.$store.state.userId;
                axios.delete(
                    'http://localhost:3000/api/auth/delete/' + userId
                ).then((response) => {
                    console.log(response)
                });
                this.logout();
            }
        },
    }
</script>

<style>
    #page {

      font-weight: normal;

      display:flex;
      flex-flow: row nowrap;
    }

    header {
        width: 360px;
        line-height: 1.5;
        background-color: white;
        border-right: solid 2px darkblue;
        display: flex;
        flex-flow:column nowrap;
        justify-content: space-between;
        height: 100vh;
    }

    .logoDiv{
        height: 100px;
    }

    .logo {
        height: 100px;
        transform: scale(2.8);
        position: relative;
        left: 87px;
    }

    main {
        width: 100%;
        background-image: url("./assets/icon.png");
    }

    .controls{
        display:flex;
        flex-flow: row nowrap;
        justify-content: space-around;
        margin-bottom: 15px
    }

    @media (max-width: 1130px) {
        #page {
            flex-flow: column nowrap;
        }

        header {
            display: none
        }

        main{
            height: 800px
        }
    }
</style>
