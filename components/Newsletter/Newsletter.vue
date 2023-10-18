<script setup>
const props = defineProps({
  newsletter: Array,
})
</script>

<template>
 
 <div v-for="item in newsletter">
    <img :src="item.newsletter_image.url" :alt="item.newsletter_image.alt" />
    <PrismicRichText :field="item.newsletter_title" />
    <PrismicRichText :field="item.newsletter_text" />
 
</div>
</template>

<style lang="scss" scoped>

</style>