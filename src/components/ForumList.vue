<template>
<div class="col-full">
    <div class="forum-list">

        <!-- <h2 class="list-title">
            <a href="#">Forums</a>
        </h2> -->

        <div class="forum-listing" v-for="forum in forums" :key="forum.id">
            <div class="forum-details">
                <!-- <a class="text-xlarge" href="forum.html">{{ forum.name }}</a> -->
                <router-link :to="{name: 'forum', params: {id: forum.id}}" class="text-xlarge">{{ forum.name }}</router-link>
                <p>{{ forum.description }}</p>
            </div>

            <div class="threads-count">
                <p>
                    <!-- if there is no threads there is no array and length not exists :( -->
                    <!-- can be if then 0 or ternary operator? - ES2020-->
                    <span class="count">{{ forum.threads?.length }}</span> 
                    {{ forumThreadsWord(forum) }} 
                </p>
            </div>

            <div class="last-thread">
            </div>
        </div>
    </div>     
</div>
</template>

<script>
export default {
    props: {
        forums: {
            type: Array,
            required: true
        }
    },
    methods: {
        forumThreadsWord(forum){
            if (forum.threads?.length) {
                return forum.threads.length > 1 ? 'threads' : 'thread'
            } else {
                return 'no threads' 
            }
        }
    }
}
</script>

<style>

</style>