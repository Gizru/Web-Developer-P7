<script setup>
    import LogButtons from '../components/LogButtons.vue'
</script>

<template>
    __________________________________________________________
    <div class="page">
        <router-link :to="{name: 'Forum'}" class="pile"></router-link>
        <div class="center">
            <router-link :to="{name: 'Forum'}" class="side">
            </router-link>
            <div class="create">
                <div class="input">
                    <label for="InputTitle">Title:</label>
                    <input type="text" id="InputTitle" name="Title" v-model="Forum.title">
                    <label for="InputPost">Post:</label>
                    <input type="text" id="InputPost" name="Post" v-model="Forum.post">
                </div>
                <router-link :to="{name: 'Forum'}">
                    <LogButtons name="Post" @click="onPost"></LogButtons>
                </router-link>
            </div>
            <router-link :to="{name: 'Forum'}" class="side"></router-link>
</div>
        <router-link :to="{name: 'Forum'}" class="pile"></router-link>
    </div>
</template>

<script>

    import axios from 'axios';

    export default {
        name: 'ForumCreate',
        data() {
            return {
                Forum: { post: '', title: '' },
                number: this.$store.state.userId,
            }
        },
        methods: {
            onPost() {
                axios.post('http://localhost:3000/api/forum/', {
                    userName: this.$store.state.userName,
                    title: this.Forum.title,
                    post: this.Forum.post,
                    userId: this.$store.state.userId,
                })
            }
        }
    }
</script>

<style scoped>
    .page {
        display: flex;
        flex-flow: column nowrap;
        width: 100%;
        height:100%;
        position:absolute;
        left:0px;
        top: 0px
    }

    .pile{
        height: 25%;
    }

    .center{
        width:100%;
        height:50%;
        display:flex;
        flex-flow: row nowrap;
    }

    .side{
        width: 25%;
    }

    .create {
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-around;
        height: 100%;
        width: 50%;
        background-color: white;
        border-radius: 20px;
        border: solid 3px red;
    }

    .input {
        display: flex;
        flex-flow: column nowrap;
    }

    input {
        border: 2px solid red;
        border-radius: 10px;
        resize: vertical;
        height: 96px;
        width: 50%;
        align-self:center;
        margin:5px;
        text-align:center;
    }

    .button {
        align-self: center;
    }
</style>