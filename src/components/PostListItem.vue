<template>
    <div class="user-info">
        <a href="#" class="user-name">{{userById(post.userId).name}}</a>

        <!-- : - v-band -->
        <a href="#">
            <img class="avatar-large" :src="userById(post.userId).avatar" alt="">
        </a>

        <p class="desktop-only text-small">107 posts</p>
    </div>

    <div class="post-content">
        <div>
            <p>
                {{post.text}}
            </p>
        </div>
    </div>

    <div class="post-date text-faded">
        <BaseDate :timestamp="post.publishedAt" />
    </div>

</template>

<script>
import sourceData from '@/data.json' 
import BaseDate from '@/components//BaseDate.vue'

export default {
    components: {BaseDate},
    props: {
        post: {
            type: Object,
            required: true
        },
        
    },
    data(){
        return {
            users: sourceData.users 
        }
    },
    methods: {
        userById(userId){
            return this.users.find(p => p.id === userId)
        }
    }
}

</script>

<style>

</style>