<script setup>
const props = defineProps({
    image: Object,
    title: Array,
    text: Array,
    
})
</script>

<template>
    <div class="c-how-to-item">
        <img :src="image.url" :alt="image.alt" class="c-how-to-item__image">
        <div class="c-how-to__content">
            <PrismicRichText class="c-how-to-item__title" :field="title"/>
            <PrismicRichText class="c-how-to-item__text" :field="text"/>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.c-how-to-item {
  display: flex;
  flex-direction: column;
  align-content: center;
  margin: rem(60) rem(0);
    img {
        width:rem(300);
        margin-bottom: rem(20);
    }
}
</style>