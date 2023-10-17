<script setup>
const props = defineProps({
    tag: String,
    title: String,
    items: Array,
})
</script>

<template>
    
    <section class="c-how-to">
        <span class="c-how-to__text">{{ tag }}</span>
        <h2 class="c-how-to__title">{{ title }}</h2>
        <div class="c-how-to__list">
            <div v-for="(item, index) in items" class="c-how-to__item">
                <HowToItem v-if="index % 2 == 0 " :title="item.how_to_title" :text="item.how_to_text" :image="item.how_to_image" :index="index"/>
                <HowToItem v-else class="c-how-to__else" :title="item.how_to_title" :text="item.how_to_text" :image="item.how_to_image" :index="index"/>
               <!-- {{ index }} -->
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>

.c-how-to{
    &__text {
        display: flex;
    justify-content: center;
    color:orange;
    }
    &__title {
        display: flex;
    justify-content: center;
    }
    &__list{
        display:flex;
        justify-content: space-between;
        align-items: center;
    }
    &__tag {
        color:orange;
        
    }
    &__else {
        display: flex;
        flex-direction: column-reverse;
    }
}

</style>