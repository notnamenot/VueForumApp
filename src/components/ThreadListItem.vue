<template>
    <div>
        <p>
            <!-- to prevant the browser reloding the page - navigation takes place on the client side - we wont see the browser reloading -->
            <!-- <router-link :to="`/threads/${thread.id}`">{{ thread.title }}</router-link> -->
            <router-link :to="{name: 'ThreadShow', params: {id: thread.id}}">{{ thread.title }}</router-link>
            <!-- <a :href="`/threads/${thread.id}`">{{ thread.title }}</a> -->
        </p>
        <p class="text-faded text-xsmall">
            By <a href="#">{{userById(thread.userId).name}}</a>, {{ thread.publishedAt }}.
        </p>
    </div>

    <div class="activity">
        <p class="replies-count">
            {{thread.posts.length}} replies 
        </p>

        <img class="avatar-medium" :src="userById(thread.userId).avatar" alt="">

        <div>
            <p class="text-xsmall">
                <a href="#">{{userById(thread.userId).name}}</a>
            </p>
            <p class="text-xsmall text-faded"> {{ thread.publishedAt }}</p>
        </div>
    </div>  
</template>

<!-- <script>
import sourceData from '@/data.json'  
export default {
    props: {
        thread: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            posts: sourceData.posts,
            users: sourceData.users
        };
    },
    methods: {
        postById(postId) {
            return this.posts.find(p => p.id === postId);
        },
        userById(userId) {
            return this.users.find(p => p.id === userId);
        }
    },
}
</script> -->
<!-- composition API -->
<script setup>
import sourceData from '@/data.json'  
import { reactive } from 'vue';

// const props = 
defineProps({
    thread: {
        type: Object,
        required: true
    }
})

// const posts = reactive(sourceData.posts)
const users = reactive(sourceData.users)

// function postById(postId) {
//     return posts.find(p => p.id === postId);
// }
function userById(userId) {
    return users.find(p => p.id === userId);
}

</script>

<style>

</style>