<script setup>
import MyTitle from './elements/MyTitle.vue';
import MyButton from './elements/MyButton.vue';

import { useGlobalStore } from '@/stores/global';

const store = useGlobalStore();
console.log(store)

defineProps({
id: Number,
title: String,
description: String,
image: String
})
</script>

<template>
  <div class="c-recipe-card">
      <img class="c-recipe-card__image" :src="image" alt="">
    <div class="c-recipe-card__content">
    
  
      <MyTitle el="h3" size="regular" class="c-recipe-card__title">{{ title }}</MyTitle>
      
 
      <MyTitle el="p" size="regular"  class="c-recipe-card__description">{{ description }}</MyTitle>
    <div class="c-recipe-card__button">
      <MyButton class="c-reciped-card__button-add" variant='rounded' size='small' @click="store.increment()">Add to Cart</MyButton>
      <MyButton  class="btn-more" variant="rounded" size="small" :has-icon="false" ><RouterLink :to="`/recipes/${id}`">Plus d'infos</RouterLink></MyButton>
      
    </div>
    <MyButton class="c-reciped-card__button-add" variant='rounded' size='small' @click="store.increment()">Remove</MyButton>
    
    </div>
  </div>

</template>

<style lang="scss" scoped>


.c-recipe-card {
  background-color: $white;
  box-shadow: 0 0 31px 0 rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  width:100%;

  border-radius: rem(20);
 
  box-shadow: 0 0 5px 0 rgba(1, 1, 1, 0.108);
  &__button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: rem(20);
  }
  .btn-more{
    background-color: white;
    border : 2px solid orange;
    &:hover {
    background-color: $secondary-color;
    border : 2px solid orange;
    
    }
  }
  .btn-more a{
  text-decoration: none;
  color:$primary-color;
  }
  &__content {
    padding: 20px;
    display: flex;
    flex-direction: column;
    
    gap:rem(10);

  }

  &__image {
    width: 100%;
    aspect-ratio: 1;
    object-fit: cover;
    border-radius: 10px;

  }

  &__title {
    font-size: 22px;
    line-height: 1.2;
    color: black;
    &:not(:first-child) {
      margin-top: 10px;
    }
  }

  &__description {
    font-size: 16px;
    color: black;
    line-height: 1.2;
    &:not(:first-child) {
      margin-top: 10px;
    }
  }
}

.c-reciped-card__button-add {
  background-color: orange;
  border : 2px solid orange;
  color: white;
  &:hover {
    background-color: orange;
    border : 2px solid orange;
    cursor: pointer;
  }
}

</style>