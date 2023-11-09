<script setup>
const props = defineProps({
    title: Array,
    text: Array,
    icon: String,
    service: Array,
   
    
})
</script>

<template>
   
  <div class="card">
      <div class="card__content">
        <div class="card__content-icons">
        <img :src="`/icons/${icon}.svg`">
      </div>
        <PrismicRichText class="card__content-title" :field="title" />
        <PrismicRichText class="card__content-text" :field="text" />
      </div>
  </div>
</template>

<style lang="scss" scoped>

.card {
      
      width: rem(420);
      height: rem(420);
      
      border-radius: rem(20);
      border : rem(1) solid $gray;
      display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;


      &__content{
        text-align: center;
          padding: rem(110) rem(30);

          &-icons {
    display: inline-flex;
    width: 30px;
    height: 30px;
    padding: 10px;
    align-items: center;
    justify-content: center;
    background-color:$secondary-color;
    border-radius: 50%;
      }

      > * + * {
          margin-top: rem(25);
      }

      &-title {
          font-size: $medium-font-size;
          font-weight: 700;
      }
      }

  }



  </style>