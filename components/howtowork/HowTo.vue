<script setup>
const props = defineProps({
    tag: String,
    title: String,
    items: Array,
    titles: Array
})

const isOdd = (index) => {
    return index % 2 !== 0
}



</script>

<template>
    <section class="c-how-to">
        <span class="c-how-to__text">{{ tag }}</span>
        <h2 class="c-how-to__title">{{ title }}</h2>
        <div class="c-how-to-content">
            <div v-for="(item, index) in items" :key="index">
                <HowToItem :reversed="isOdd(index)" :middle="index === 1" :end="index === 2" :endtext="index === 2"
                    :title="item.how_to_title" :text="item.how_to_text" :image="item.how_to_image" />
            </div>


        </div>
        <div class="c-how-to-line">
            <img src="/line.png" alt="">
        </div>
        <div class="c-how-to-line2">
            <img src="/line2.png" alt="">
        </div>
    </section>
</template>

<style lang="scss" scoped>
.c-how-to {
    position: relative;

    &__text {
        display: flex;
        justify-content: center;
        color: $primary-color;
        margin-top: rem(130);
        font-size: $medium-font-size;
        position: relative;

    }

    &__title {
        display: flex;
        justify-content: center;
        font-size: $big-font-size;
        margin-top: rem(10);
    }

    &-content {
        display: flex;
        justify-content: space-between;
        margin: rem(70) rem(0);


    }

    &-line,
    &-line2 {
        display: none;
    }
}

@media screen and (min-width:1510px) and (max-width:1537px) {
    .c-how-to {
        
            &-line {

                display: block;
                position: absolute;
                
                top: 38.5%;
                left: 10.5%;
                img{
                    width: 26vw;
                }
            }

            &-line2 {

                display: block;
                position: absolute;
                top: 38.5%;
                right: 10.5%;
                img{
                    width: 26vw;
                }
            }
        
    }

}</style>