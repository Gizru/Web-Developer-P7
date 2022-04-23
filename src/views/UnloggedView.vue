<script setup>
    import LogButtons from '../components/LogButtons.vue'
</script>

<script>
    export default {
        name: 'Unlogged-view',
        props: ['msg']
    };
</script>

<template>
    <div class="page">
        <div class="unlogged">
            <h1>Login or Signup to view the content</h1>
            <br />
            <div class="nav">
                <router-link :to="{name: 'SignupView'}">
                    <LogButtons name="Signup" />
                </router-link>
                <router-link :to="{name: 'LoginView'}">
                    <LogButtons name="Login" />
                </router-link>
            </div>
            <br />
            <router-view></router-view>
        </div>
    </div>
</template>

<style scoped>
    .page {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .unlogged {
        text-align:center
    }

    .nav {
        width: 100%;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-around;
    }

    h1 {
        font-weight: 500;
        font-size: 2.6rem;
        top: -10px;
    }

    h3 {
        font-size: 1.2rem;
    }

    @media (min-width: 1024px) {
    }
</style>
