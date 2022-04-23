<script>
    export default {
        name: 'NavButtons',
            props:['name']
    };
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
        width: 100px;
        height: 40px;
        cursor: pointer;
    }

    .button:hover{
        background-color: red;
    }

    router-link {
        text-decoration: none;
    }

    h1 {
        font-weight: 500;
        font-size: 1.5rem;
        color: darkblue;
        padding: 6px 5px 5px 5px;
        margin: 0px;
        text-decoration: none;
        margin: -8px 1px;
    }

    @media (min-width: 1024px) {

    }
</style>
