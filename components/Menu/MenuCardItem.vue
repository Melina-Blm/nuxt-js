<script setup>
const props = defineProps({
    image: Object,
    title: Array,
    text: Array,
    price:Array,
    
})
</script>

<template>
    <div class="c-how-to-item">
        <img :src="image.url" :alt="image.alt" class="c-how-to-item__image">
        <div class="c-how-to__content">
            <PrismicRichText class="c-how-to-item__title" :field="title"/>
            <PrismicRichText class="c-how-to-item__text" :field="text"/>
            <PrismicRichText class="c-how-to-item__text" :field="price"/>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.c-how-to-item {
    background-color: purple;
    margin:rem(50) rem(0);
}

</style>