<script setup>
    import Memes from '../components/Memes.vue'
    import LogButtons from '../components/LogButtons.vue'
</script>

<script>
    import axios from 'axios';

    export default
        {
            name: 'MemesView',
            data() {
                return {
                    memesDiplayed: [],
                    fullList: [],
                    Page: 0,
                    content: true,
                };
            },
            created: function () {
                axios.get(
                    'http://localhost:3000/api/memes/'
                ).then(
                    (response) => {
                        for (let i = 0; i < response.data.length; i++) {
                            this.fullList.push(response.data[i])
                        }
                        this.fetchMemes()
                    },
                )
            },
            methods: {
                onNext() {
                    this.Page += 1
                    this.fetchMemes()
                },
                fetchMemes: function () {

                    console.log('Page : ' + this.Page)
                    let load = this.Page * 8

                    if (this.fullList.length <= load + 8) {
                        load = this.fullList.length - 8;
                        this.content = false
                    }
                    if (load < 0) {
                        for (let i = 0; i < (load + 8); i++) {
                            this.memesDiplayed.push(this.fullList[this.fullList.length - (i + 1)])
                            console.log(i)
                        }
                    } else {
                        for (let i = load; i < (load + 8); i++) {
                            this.memesDiplayed.push(this.fullList[this.fullList.length - (i + 1)])
                            console.log(i)
                        }
                    }
                }
            }
        }


</script>

<template>
    <div class="page">
        <h1>All memes published</h1>
        <router-link :to="{name: 'MemesCreate'}">
            <LogButtons name="Create Meme" />
        </router-link>
        <br />
        _________________________________________________________________________________________________________
        <br />
        <br />
        <br />
        <div class="display">
            <Memes v-for="meme in memesDiplayed" :key="meme" v-bind:source="meme.imageUrl" v-bind:authorName="meme.userName" v-bind:description="meme.description" v-bind:_id="meme._id"> </Memes>
        </div>
        <LogButtons name="Load More" @click="onNext" v-bind:style="[this.content ? {'pointer-events': 'auto'} : {'pointer-events': 'none'}] "/>
        <router-view></router-view>
    </div>
</template>

<style scoped>
    .page {
        text-align: center;
        height: 90%;
    }

    .display {
        width: 100%;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around
    }

    .memes{
        width: 20%;
        margin:2%;     
    }

    a {
        position: absolute;
        right: 20px;
        top: 40px;
    }

    .button {
        width: 170px;
    }

</style>
            
