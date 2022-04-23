<script setup>
    import Memes from '../components/Memes.vue'
    import Forum from '../components/Forum.vue'
</script>

<template>
    <div class="page">
        <h1>Most resent plublished content</h1>
        <br />
        _________________________________________________________________________________________________________
        <br />
        <br />
        <br />
        <div class="display">
            <div class="display__Memes">
                <Memes v-for="meme in memesDiplayed" :key="meme" v-bind:source="meme.imageUrl" v-bind:authorName="meme.userName" v-bind:description="meme.description"  v-bind:_id="meme._id"> </Memes>
            </div>
            <div>
                |<br />
                |<br />
                |<br />
                |<br />
                |<br />
                |<br />
                |<br />
                |<br />
                |<br />
                |<br />
                |<br />
                |<br />
                |<br />
                |<br />
                |<br />
                |<br />
                |<br />
                |<br />
                |<br />
                |<br />
                |<br />
                |<br />
                |<br />
                |<br />
                |<br />
                |<br />
                |<br />
                |<br />
                |<br />
                |<br />
                |<br />
                |<br />
                |<br />
            </div>
            <div class="display__Forum">
                <Forum v-for="forum in forumsDiplayed" :key="forum" v-bind:title="forum.title" v-bind:content="forum.description" v-bind:_id="forum._id"> </Forum>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default
        {
            name: 'ForumView',
            data() {
                return {
                    forumsDiplayed: [],
                    memesDiplayed: []
                };
            },
            beforeCreate() {

                axios.get(
                    'http://localhost:3000/api/forum/'
                ).then((response) => {
                    console.log(response.data)
                    const lenght = response.data.length
                    this.forumsDiplayed = [response.data[lenght - 1], response.data[lenght - 2], response.data[lenght - 3], response.data[lenght - 4]]
                });

                axios.get(
                    'http://localhost:3000/api/memes/'
                ).then((respons) => {
                    console.log(respons.data)
                    const lent = respons.data.length     
                    this.memesDiplayed = [respons.data[lent - 1], respons.data[lent - 2], respons.data[lent - 3], respons.data[lent - 4]]

                });
            },
        }


</script>

<style scoped>
    .page {
        text-align: center;
    }

    .display{
        display:flex;
        flex-flow:row nowrap;
        justify-content: space-around
    }

    .display__Memes {
        width:50%;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around
    }

    .memes {
        width: 45%;
        height: 45%
    }

    .display__Forum {
        width: 50%;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around
    }

    .forum {
        width: 90%;
        height: 20%
    }
</style>
