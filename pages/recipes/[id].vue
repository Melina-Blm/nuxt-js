<script setup>
const route = useRoute()

</script>

<template>
    <div class="p-reciped-id">
       recette avec l'id : {{ route.params.id }}

    </div>

</template>

<style lang="scss" scoped>
</style>