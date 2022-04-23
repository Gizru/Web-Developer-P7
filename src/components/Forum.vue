<script>
import axios from "axios";


    export default
        {
            name: 'ForumCard',
            props: ['title', 'content', '_id'],
            data() {
                return {
                    Title: this.title,
                    Content: this.content,
                    newCheck: false
                };
            },
            async mounted() {
                axios.put('http://localhost:3000/api/forum/', {
                    _id: this._id,
                    userId: this.$store.state.userId
                }).then(
                    (response) => {
                        if (response.data.isNew) {
                            this.newCheck = true
                        }
                    }
                )
            }
        }
    

</script>

<template>
    <div class="forum">
        <h2 class="forum__author">{{Title}}</h2>
        <p class="forum__content">{{Content}}</p>
        <div class="new" v-bind:style="[ this.newCheck ? {'opacity': '1'} : {'opacity': '0'}] ">
        NEW
        </div>
    </div>
    
</template>

<style scoped>
    .forum {
        background-color: white;
        border: solid 2px darkblue;
        border-radius: 10px;
        display: flex;
        flex-flow: column nowrap;
        text-align: left;
    }

    .memes__holder {
        height: 80%;
    }

    .memes__holder__img {
        object-fit: cover;
    }

    .memes__text {
        text-align: left;
        border-top: solid 1px red;
    }



    .forum__author {
        margin: 5px;
        color: red;
        font-size:x-large;
    }

    .forum__content {
        color: darkblue;
        font-size: large;
        margin: 5px;
    }

    .new {
        background-color: lightgreen;
        width: 50px;
        height: 25px;
        border-radius: 6px;
        position: relative;
        left: 5px;
        top: -5px
    }
</style>