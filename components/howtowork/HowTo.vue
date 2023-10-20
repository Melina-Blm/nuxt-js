<script setup>
const props = defineProps({
    tag: String,
    title: String,
    items: Array,
})
</script>

<template>
    <section class="c-how-to">
      <img class="c-how-to__line1" src="/line1.png" alt="">
      <!-- <img class="c-how-to__line2" src="/line2.png" alt=""> -->
      <span class="c-how-to__text">{{ tag }}</span>
      <h2 class="c-how-to__title">{{ title }}</h2>
      <div class="c-how-to__list">
        <div v-for="(item, index) in items" class="c-how-to__item">
          <HowToItem v-if="index % 2 == 0" :title="item.how_to_title" :text="item.how_to_text" :image="item.how_to_image" :index="index"/>
          <HowToItem v-else class="c-how-to__else" :title="item.how_to_title" :text="item.how_to_text" :image="item.how_to_image" :index="index"/>
        </div>
      </div>
    </section>
  </template>
  

<style lang="scss" scoped>


.c-how-to {
  position: relative; // La section parente doit être en position relative
  &__line1 {
    position: absolute;
    top: 35%;
    width:28%;
    left:9%;
  }
  // Le reste de votre CSS reste inchangé...
}
.c-how-to{
    &__text {
        display: flex;
    justify-content: center;
    color:$primary-color;
    margin-top: rem(130);
    font-size: $medium-font-size;
    position: relative  ;

    }
    &__title {
        display: flex;
    justify-content: center;
    font-size:$big-font-size;
    margin-top:rem(10);
    }
    &__list{
        display:flex;
        justify-content: space-between;
        align-items: center;
    }
    &__tag {
        color:$primary-color;
        
    }
    &__else {
        display: flex;
        flex-direction: column-reverse;
        text-align:center;
    
    }
}

</style>