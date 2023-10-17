<script setup>

const props = defineProps ({
    error: Object
})

</script>

<template>
    <MyHeader/>

    <div class="p-error">
 {{ error }}

    </div>

</template>

<style lang="scss">

</style>