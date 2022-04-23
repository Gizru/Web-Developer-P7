<template>
    <div class="profile">
        <div class="profile__holder">
            <img class="profile__holder__img" src="../assets/icon.png" />
        </div>
        <div class="profile__text">
            <h2 class="profile__text__author">{{$store.state.userName}}</h2>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ProfileView',
        data() {
        },
        computed: {
            
        },
        methods: {
        },
    }
</script>

<style scoped>
    .profile {
        background-color: white;
        border: solid 2px red;
        margin: 10% 12%;
        border-radius: 10px;
        display: flex;
        flex-flow: column nowrap;
        text-align: center
    }

    .profile__holder {
        height: 80%;
    }

    .profile__holder__img {
        width: 100%;
        border-radius: 12px;
    }

    .profile__text {
        text-align: left;
        border-top: solid 1px red;
    }



    .profile__text__author {
        color: darkblue;
        font-size: x-large;
        margin: 5px 5px;
    }
</style>
