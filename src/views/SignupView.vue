<script setup>
    import LogButtons from '../components/LogButtons.vue'
</script>

<template>
    __________________________________________________________
    <div class="about">
        <div class="login">
            <div class="input">
                <label for="InputFirstName">First name:</label>
                <input type="text" id="InputFirstName" name="FirstName" v-model="User.firstName">
            </div>
            <div class="input">
                <label for="InputLastName">Last name:</label>
                <input type="text" id="InputLastName" name="LastName" v-model="User.lastName">
            </div>
            <div class="input">
                <label for="InputEmail">Email:</label>
                <input type="text" id="InputEmail" name="Email" v-model="User.email">
            </div>
            <div class="input">
                <label for="InputPassword">Password:</label>
                <input type="password" id="InputPassword" name="Password" v-model="User.password">
            </div>

        </div>
        <button @click="onSignup">
            <router-link :to="{name: 'LoginView'}">
                <LogButtons name="Signup" />
            </router-link>
        </button>
    </div>
</template>

<script>

    import axios from 'axios';

    export default {
        name: 'SignupView',
        data() {
            return {
                msg: '',
                User: { firstName: '', lastName: '', email: '', password: ''},
            }
        },
        methods: {
            onSignup() {
                let newUser = {
                    firstName: this.User.firstName,
                    lastName: this.User.lastName,
                    email: this.User.email,
                    password: this.User.password,
                }
                axios.post('http://localhost:3000/api/auth/signup', newUser)
            }
        }
    }
</script>

<style scoped>
    .login {
        display: flex;
        margin-top: 10%;
        margin-left: 25%;
        height: 300px;
        flex-flow: column nowrap;
        justify-content: space-between;
        text-align: left;
        width: 50%;
    }

    .input {
        display: flex;
        flex-flow: column nowrap;
    }

    input {
        border: 2px solid red;
        border-radius: 10px;
        resize: vertical;
        height: 24px;
    }

    button {
        margin: auto;
        margin-top: 50px;
    }
</style>