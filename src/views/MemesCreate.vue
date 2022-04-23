<script setup>
    import LogButtons from '../components/LogButtons.vue';
</script>

<template>
    __________________________________________________________
    <div class="page">
        <router-link :to="{name: 'Memes'}" class="pile"></router-link>
        <div class="center">
            <router-link :to="{name: 'Memes'}" class="side">
            </router-link>
            <form id="form">
                <div class="input">
                    <label for="files">Meme:</label>
                    <input type="file"  id="files" name="files">
                </div>
                <div class="input">
                    <label for="Description">Description:</label>
                    <input type="text" id="Description" name="Description" v-model="Meme.description">
                </div>
                <router-link :to="{name: 'Memes'}">
                    <LogButtons name='Upload' @click="submitForm">Upload</LogButtons>
                </router-link>
            </form>
            <router-link :to="{name: 'Memes'}" class="side"></router-link>
        </div>
        <router-link :to="{name: 'Memes'}" class="pile"></router-link>
    </div>
</template>

<script>
    import axios from 'axios';
    let config = {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    }

    export default {
        name: 'MemesCreate',
        data() {
            return {
                Meme: { description: '', },
                selectedFile: null
            }
        },
        methods: {
            submitForm() {
                const Description = document.getElementById("Description");
                const files = document.getElementById("files");
                const formData = new FormData();
                for (let i = 0; i < files.files.length; i++) {
                    formData.append("image", files.files[i]);
                }
                formData.append("fileName", files.files[0].name)
                formData.append("Description", Description.value);
                formData.append("userName", this.$store.state.userName);
                axios.post('http://localhost:3000/api/memes/', formData, config)
                    .then((res) => console.log(res))
                    .catch((err) => ("Error occured", err));
                
            }
        }
            
        //methods: {
        //    < !--@change="onFileSelected"-- >
        //    onFileSelected(event) {
        //        this.selectedFile = event.target.files[0]
           /* },*/
        //    onUpload() {
        //        const image = new FormData();
        //        image.append("meme", this.selectedFile, this.selectedFile.name)
                
        //    }
        //}
    }
</script>

<style scoped>
    .page {
        display: flex;
        flex-flow: column nowrap;
        width: 100%;
        height:100%;
        position:absolute;
        left:0px;
        top: 0px
    }

    .pile{
        height: 25%;
    }

    .center{
        width:100%;
        height:50%;
        display:flex;
        flex-flow: row nowrap;
    }

    .side{
        width: 25%;
    }

    #form {
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-around;
        height: 100%;
        width: 50%;
        background-color: white;
        border-radius: 20px;
        border: solid 3px red;
    }

    .input {
        display: flex;
        flex-flow: column nowrap;
    }

    input {
        border: 2px solid red;
        border-radius: 10px;
        resize: vertical;
        height: 96px;
        width: 50%;
        align-self:center;
        margin:5px;
        text-align:center;
    }

    .button {
        align-self:center
    }
</style>