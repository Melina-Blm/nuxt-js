<script setup>
const props = defineProps({
    image: Object,
    title: Array,
    text: Array,
    reversed: Boolean,
    middle: Boolean,
    end: Boolean,
    endtext: Boolean
})
</script>

<template>
    <div :class="['c-how-to', { '-is-reversed': reversed }]">
        <img :src="image.url" :alt="image.alt" class="c-how-to-item__image">
        <div class="c-how-to-content">

            <MyTitle el="h3" size="small" bold="bold" v-if="style = middle">
                <PrismicRichText class="c-how-to-title" :field="title" :style="middle ? { 'text-align': 'center' } : {}" />
            </MyTitle>

            <MyTitle el="h3" size="small" bold="bold" v-else-if="style = end">
                <PrismicRichText class="c-how-to-title" :field="title" :style="end ? { 'text-align': 'end' } : {}" />
            </MyTitle>

            <MyTitle el="h3" size="small" bold="bold" v-else>
                <PrismicRichText class="c-how-to-title" :field="title" />
            </MyTitle>


            <PrismicRichText v-if="style = endtext" :style="endtext ?
                { 'text-align': 'end',} : {}"
                class="c-how-to-text" :field="text" />
            <PrismicRichText v-else class="c-how-to-text" :field="text" />

        </div>
        
    </div>
</template>

<style lang="scss" scoped>
.c-how-to {
    display: flex;
    flex-flow: column wrap;
    justify-content: flex-end;
    img{
        width: rem(356);
        height: rem(200);
    }

    &.-is-reversed {
        flex-flow: column-reverse wrap;
    }

    &-content {
        .c-how-to-title {
            margin-top: rem(50) ;
            font-size: $regular-font-size;
        }
        .c-how-to-text, .endtext {
            min-height: rem(110);
        }
    }

}
</style>