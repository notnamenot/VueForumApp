<template>
    <!-- <div class="post-date text-faded" :title -->
    <span class="post-date text-faded" :title="humanFriendlyDate()"><!-- title shows when div is hovered over -->
        {{diffForHumans()}}
    </span>    
</template>

<script>
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import localizedFormat from 'dayjs/plugin/localizedFormat'
dayjs.extend(relativeTime)
dayjs.extend(localizedFormat)

export default {
    props:{
        timestamp: {
            type: Number,
            required: true
        }
    },
    methods: {
        diffForHumans(){
            return dayjs.unix(this.timestamp).fromNow()
        },
        humanFriendlyDate(){
            return dayjs.unix(this.timestamp).format('LLLL') //('D MMM YY, HH:mm')
        }
    }
}

</script>

<style>

</style>