<script setup>
const props = defineProps({
  image: Object,
  title: Array,
  text: Array,
  price: Array,
})
</script>

<template>
  <div class="c-cardmenu">
    <div class="c-cardmenu__image">
      <img :src="image.url" :alt="image.alt">
    </div>
    <div class="c-cardmenu__content">
      <PrismicRichText class="c-cardmenu__content__title" :field="title"/>
      <PrismicRichText class="c-cardmenu__content__text" :field="text"/>
      <PrismicRichText class="c-cardmenu__content__price" :field="price"/>
    </div>
    <div class="c-cardmenu__icons">
      <MyIcon name="arrow right" variant="white" stroke="black"></MyIcon>
      <MyIcon name="arrow left" variant="black" stroke="white"></MyIcon>
    </div>
  </div>
</template>

<style lang="scss" >

.c-cardmenu {
  margin-top: 110px;
  border-radius: 1.875rem;
  background: $white;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.16);
  width: rem(258);
  height: rem(275);
  position: relative;
  margin-bottom: rem(20);
  
  &__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding-top: rem(140);
    gap: 10px;
    position: relative;
    
    &__title {
      font-size: $medium-font-size;
      font-weight: bold;
    }
    
    &__text {
      font-size: $regular-font-size;
      font-weight: 500;
    }
    
    &__price {
      font-size: $regular-font-size;
      font-weight: bold;
      
      strong {
        color: #8f1913;
      }
    }
  }
  
  &__image img {
    position: absolute;
    width: rem(260);
    top: rem(30);
    left: 50%;
    transform: translate(-50%, -50%) scale(1.2);
  }
  
  &__icons {
    position: absolute;
    display: flex;
    gap: 30px;
    bottom: rem(-50);
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

</style>
