<script setup>
    import Forum from '../components/Forum.vue';
    import LogButtons from '../components/LogButtons.vue';
</script>

<script>
    import axios from 'axios';

    export default
        {
            name: 'ForumView',
            data() {
                return {
                    forumsDiplayed: [],
                    fullList: [],
                    Page: 0,
                    content: true,
                };
            },
            created: function () {
                axios.get(
                    'http://localhost:3000/api/forum/'
                ).then(
                    (response) => {
                        for (let i = 0; i < response.data.length; i++) {
                            this.fullList.push(response.data[i])
                        }
                        this.fetchForums()
                    },
                )
            },
            methods: {
                onNext() {
                    this.Page += 1
                    this.fetchForums()
                },
                fetchForums: function () {

                    console.log('Page : ' + this.Page)
                    let load = this.Page * 8

                    if (this.fullList.length <= load + 8) {
                        load = this.fullList.length - 8;
                        this.content = false
                    }
                    if (load < 0) {
                        for (let i = 0; i < (load + 8); i++) {
                            this.forumsDiplayed.push(this.fullList[this.fullList.length - (i + 1)])
                            console.log(i)
                        }
                    } else {
                        for (let i = load; i < (load + 8); i++) {
                            this.forumsDiplayed.push(this.fullList[this.fullList.length - (i + 1)])
                            console.log(i)
                        }
                    }
                }
            }
        }


</script>

<template>
    <div class="page">
        <h1>All forum posts published</h1>
        <router-link :to="{name: 'ForumCreate'}">
            <LogButtons name="Create Post" />
        </router-link>
        <br />
        _________________________________________________________________________________________________________
        <br />
        <br />
        <br />
        <div id="display">
            <Forum v-for="forum in forumsDiplayed" :key="forum" v-bind:title="forum.title" v-bind:content="forum.description" v-bind:_id="forum._id"> </Forum>
        </div>
        <LogButtons name="Load More" @click="onNext" v-bind:style="[this.content ? {'pointer-events': 'auto'} : {'pointer-events': 'none'}] "/>
        <router-view></router-view>
    </div>
</template>



<style scoped>
    .page {
        text-align: center;
        height: 90%;
        height: 75%;
    }

    #display {
        width: 100%;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around
    }

    .forum {
        width: 45%;
        margin: 1%;
    }

    a {
        position: absolute;
        right: 20px;
        top: 40px;
    }

    .button {
        width: 160px;
    }
</style>
