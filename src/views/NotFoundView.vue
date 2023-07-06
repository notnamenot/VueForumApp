<!-- "Soft 404" - returns 200 (not 404) because routing takes place on the client side -->
<template>
<div class="col-full text-center">
    <h1>Not found</h1>
    <router-link :to="{name:'home'}">Read some cool threads</router-link> 
</div> 
</template>

<script>
export default {

}
</script>

<style>

</style>