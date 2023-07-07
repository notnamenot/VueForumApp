<template>  
    <div class="col-full">
        <!-- prevent reloading -->
        <form @submit.prevent="save">
            <div class="form-group">
                <!-- : - v-band  @ - v-on -->
                <!-- two-way data-binding - if newPostText changes area changes (value) and if area changes newPostText changes (input) -->
                <!--  <textarea :value="newPostText" @:input="newPostText = $event.target.value" name="" id="" cols="30" rows="10" class="form-input"></textarea> -->
                <textarea v-model="text" name="" id="" cols="30" rows="10" class="form-input"></textarea>
            </div> 
            <div class="form-group">   
                <button class="btn-blue">Submit post</button>
            </div>
        </form>
    </div>  
</template>

<script>
export default {
    // props are good for communicating from parent down to child
    // instead of passing threadId in props we fill post.threadId in parent
    // props: {
    //     threadId: {
    //         type: String, 
    //         required: true 
    //     }
    // },
    data(){
        return {
            text: ''
        }
    },
    methods: {
        save(){
            const postId = 'qqq' + Math.random()
            const post = {
                text: this.text,
                publishedAt: Math.floor(Date.now()/1000), // conversion to seconds
                // threadId: this.threadId,
                userId: "ALXhxjwgY9PinwNGHpfai6OWyDu2",
                id: postId    
            }
            // inform parent on form submit that post is ready and it should append data to source - keep logic that alters the state in parent component
            // communicate back to the parent - vue custom events - broadcasts to anyone listening that sth happened - emit an event 
            this.$emit('save', { post }) //name,payload(as many as u want), by passing object as payload u don't have to remember order
            this.text = ''
        }
    }
}
</script>

<style>

</style>