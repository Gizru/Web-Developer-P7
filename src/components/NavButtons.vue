<script>
    export default {
        name: 'NavButtons',
        props:['name']
    };
//defineProps({
//  msg: {
//    type: String,
//    required: true
//  },
//  link: {
//        type: String,
//        required: true
//  }
//})
</script>

<template>
    <div class="button">
            <h1 class="red">{{ name }}</h1>
    </div>
    
</template>

<style scoped>
    .button {
        border: 5px solid darkblue;
        border-radius: 20px;
        width: 200px;
        height: 75px;
        margin: 40px;
        text-align:center;
    }

    h1 {
        font-weight: 500;
        font-size: 1.5rem;
        color: darkblue;
        text-decoration: none;
        margin: 15px;
    }

    @media (min-width: 1024px) {

    }
</style>
