<template>
<div class="post-list">
    <div div v-for="post in posts" 
        :key="post.id" 
        class="post"
    >
        <PostListItem :post="post"/>
    </div>
</div>  
</template>

<script>
import PostListItem from './PostListItem.vue';
export default {
    props: {
        posts: {
            type: Array, 
            required: true 
        }
    },
    components: {PostListItem}
}
</script>

<style scoped>

</style>