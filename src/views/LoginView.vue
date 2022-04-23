<script setup>
    import LogButtons from '../components/LogButtons.vue'
</script>

<template>
    __________________________________________________________
    <div class="about">
        <div class="login">
            <div class="input">
                <label for="InputEmail">Email:</label>
                <input type="text" id="InputEmail" name="Email" v-model="User.email">
            </div>
            <div class="input">
                <label for="InputPassword">Password:</label>
                <input type="password" id="InputPassword" name="Password" v-model="User.password">
            </div>

        </div>
        <button @click="onLogin" v-bind:style="[ (User.email != '' && User.password != '') ? {'pointer-events': 'auto'} : {'pointer-events': 'none'} ]">
            <LogButtons name="Login"></LogButtons>
        </button>
    </div>
</template>


<script>

    import axios from 'axios';

    export default {
        name: 'LoginView',
        data() {
            return {
                msg: '',
                User: { email: '', password: '' },
            }
        },
        methods: {
            onLogin() {
                let newUser = {
                    email: this.User.email,
                    password: this.User.password,
                }
                axios.post(
                    'http://localhost:3000/api/auth/login', newUser
                ).then((response) =>
                {
                    this.$store.dispatch('Login', response);
                    this.$router.history.updateRoute({ name: 'Recent' })
                });
            }
        },
    }
</script>


<style scoped>
    .login {
        display: flex;
        margin-top: 10%;
        margin-left: 25%;
        height: 120px;
        flex-flow: column nowrap;
        justify-content: space-between;
        text-align: left;
        width: 50%;
    }

    .input {
        display: flex;
        flex-flow: column nowrap;
    }

    input{
        border: 2px solid red;
        border-radius: 10px;
        resize: vertical;
        height: 24px;
    }

    button {
        margin: auto;
        margin-top: 50px;
        border:none;
        background-color: white;
    }
</style>
