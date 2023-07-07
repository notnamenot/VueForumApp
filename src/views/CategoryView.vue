<template>
    <CategoryListItem :category="category"/>
</template>

<script>
import sourceData from '@/data.json'  
export default {
    props: {
        id: {
            type: String,
            required: true
        }
    },
    computed: {
        category(){
            return sourceData.categories.find(category => category.id === this.id)
        }
    }
}
</script>

<style>

</style>