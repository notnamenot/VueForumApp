<template>
<div class="col-full">
    <h2>Categories</h2>
    <div class="forum-list"> 
        <div class="forum-listing" v-for="category in categories" :key="category.id">
            <CategoryListItem :category="category"/>    
        </div>
    </div>  
</div>
</template>

<script>
export default {
    props: {
        categories: {
            type: Array,
            required: true
        }
    },    
}
</script>

<style>

</style>