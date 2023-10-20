<script setup>

const props = defineProps ({
    error: Object
})

</script>

<template>
    <div class="content">

    
    <MyHeader/>

    <div class="p-error">
 {{ error }}


    </div>
    
</div>
<MyFooter/>
</template>

<style lang="scss" scoped>

.content {
    margin:rem(0) rem(80)
}

</style>