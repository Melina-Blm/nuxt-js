
import { resolveDirective } from 'vue';
<script setup>
const props = defineProps({
  testimonial: Array,
})
</script>

<template>
  <section class="c-testimonial">
    <div v-for="item in testimonial" class="c-testimonial__item">
      <!-- Matching prismic options / file names -->
      <div class="c-testimonial__icon">
        <img :src="`/icons/${testimonial_icon}.png`" alt="">
      </div>
      <!-- OR v-if case by case  <div v-if="item.information_icon === 'phone'" class="c-information__icon">-->
      <!--        <img :src="`/icons/phone.svg`" alt="">-->
      <!--      </div>-->
      <!--      <div v-else-if="item.information_icon === 'clock'" class="c-information__icon">-->
      <!--        <img :src="`/icons/clock.svg`" alt="">-->
      <!--      </div>-->
      <!--      <div v-else-if="item.information_icon === 'pin'" class="c-information__icon">-->
      <!--        <img :src="`/icons/pin.svg`" alt="">-->
      <!--      </div>-->
      <div class="c-testimonial__title">
        <PrismicRichText :field="item.testimonial_name" />
      </div>
      <div class="c-testimonial__text">
        <PrismicRichText :field="item.testimonial_subtitle" />
      </div>
      <div>
        <PrismicRichText class="c-testimonial__text" :field="item.testimonial_description" />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.c-testimonial {

  display: flex;
  flex-flow: row wrap;
  margin: rem(100) rem(0) ;
  border-radius: rem(30);
  padding: rem(70) rem(70);
  box-shadow: 0 0 8px 0 rgba(1, 1, 1, 0.108);
  
  


  &__item {
    flex: 1;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
 
  }

  &__icon {
    display: inline-flex;
    width: 30px;
    height: 30px;
    padding: 10px;
    align-items: center;
    justify-content: center;
    background-color: orange;
    border-radius: 50%;
  }

  &__title {
    font-weight: 400;
    &:not(:first-child) {
      margin-top: 10px;
    }
  }

  &__text {
    &:not(:first-child) {
      margin-top: 10px;
     
    }
  }
}
</style>