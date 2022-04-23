<script>
    import axios from "axios";


     export default
        {
            name: 'MemesCard',
            data() {
                return {
                    newCheck: false
                };
            },
            props: {
                source : String,
                authorName: String,
                description: String,
                _id: String

            },
            created() {
                axios.put('http://localhost:3000/api/memes/', {
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
    <div class="memes">
        <div class="memes__holder">
            <img alt="Meme Image" v-bind:src="source"/>
        </div>
        <div class="memes__text">
            <h2 class="memes__text__author">{{authorName}}</h2>
            <p class="memes__text__content">{{description}}</p>
        </div>
        <div class="new" v-bind:style="[ this.newCheck ? {'opacity': '1'} : {'opacity': '0'}] ">
            NEW
        </div>
    </div>
</template>

<style scoped>
    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        border-radius: 6px 6px 0px 0px;
    }
    .memes {
        background-color: white;
        border: solid 2px darkblue;
        border-radius: 10px;
        display:flex;
        flex-flow: column nowrap;
    }

    .memes__holder {
        height: 80%;
        width:100%
    }

    .memes__holder__img{
        object-fit:cover;
    }

    .memes__text {
        text-align: left;
        border-top: solid 1px red;
    }



    .memes__text__author {
        color: red;
        font-size: larger;
        margin: 0px 0px 5px 0px;
    }

    .memes__text__content {
        color: darkblue;
        font-size: medium;
        margin: 0px;
    }

    .new {
        background-color: lightgreen;
        width: 50px;
        height: 25px;
        border-radius: 6px;
        position: relative;
        left: 5px;
        top: -5px;
    }

</style>
