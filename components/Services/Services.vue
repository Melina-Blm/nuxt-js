<script setup>
const props = defineProps({
  services: Array,
  tag: String,
  title: String,
})
</script>

<template>
          <span class="c-text">{{ tag }}</span>
        <h2 class="c-title">{{ title }}</h2>
  <section class="c-services">
    <div v-for="item in services" class="c-services__item -secondBorder">
      <!-- Matching prismic options / file names -->
      <div class="c-services__icon">
        <img :src="`/icons/${item.services_icon}.svg`" alt="">
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
      <div class="c-services__title">
        <PrismicRichText :field="item.services_title" />
      </div>
      <div class="c-services__text">
        <PrismicRichText :field="item.services_text" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.c-services {
  margin: rem(0) 0 rem(150) 0;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: rem(20);
  background: $white;
  box-shadow: 0px 0px 50px 0px rgba(0, 0, 0, 0.11);
  padding: rem(25);

 
  
  &__item {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex: 1;
    gap: rem(7);
    height: rem(163);

    &:nth-child(2n){
    
    position: relative;

    &::after,
    &::before {
      content: '';
      background-color: $gray;
      width: 1px;
      display: block;
      height: 100%;
      position: absolute;
    }

    &::after {
      left: 0;
    }

    &::before {
      right: 0;
    }
  
}
  }

  &__icon {
    display: inline-flex;
    width: 30px;
    height: 30px;
    padding: 10px;
    align-items: center;
    justify-content: center;
    background-color:$secondary-color;
    border-radius: 50%;
  }

  &__title {
    font-weight: 700;
    

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


.c-text {
  display: flex;
    justify-content: center;
    color:orange;
    margin-top: rem(130);
  font-size:$regular-font-size;
}

.c-title {
  display: flex;
    justify-content: center;
    font-size:$big-font-size;
}

  </style>