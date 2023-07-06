<template>
<div class="col-full">


<div class="thread-list">

    <h2 class="list-title">Threads</h2>

    <div v-for="thread in threads" :key="thread.id" class="thread">
        <ThreadListItem :thread="thread"/>
    </div> 

</div>

</div>  
</template>

<script>
// import sourceData from '@/data.json' 
import ThreadListItem from '@/components/ThreadListItem.vue'
export default {
    props: {
        threads: {
            type: Array,
            required: true
        }
    },
    components: { ThreadListItem }
}
</script>

<style>

</style>