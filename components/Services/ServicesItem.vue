<script setup>
const props = defineProps({
    image: Object,
    title: Array,
    text: Array,
    icon: Array,
})
</script>

<template>
   
  <div class="card">
      <div class="card__content">
        <!-- <img :src="`/icons/${item.services_icon}.svg`" alt=""> -->
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