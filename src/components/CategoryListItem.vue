<template>
    <h2 class="list-title">
        <router-link class="text-xlarge" :to="{name:'category', params: {id: category.id}}">{{ category.name  }}</router-link>
    </h2>
    <ForumList :forums="categoryForums"/>     
</template>

<script>
import sourceData from '@/data.json'  
export default {
    props: {
        category: {
            type: Object,
            required: true
        }
    },
    computed: {
        categoryForums() {
            return sourceData.forums.filter(forum => forum.categoryId === this.category.id)
        }
    }
}
</script>

<style>

</style>