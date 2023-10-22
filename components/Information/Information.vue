<script setup>
const props = defineProps({
  information: Array,
  
})
</script>

<template>
  <section class="c-information">
    <div v-for="item in information" class="c-information__item c-information__item--secondBorder">
      <div class="c-information__item__icon">
        <img :src="`/icons/${item.information_icon}.svg`" alt="">
      </div>

      <div class="c-information__item__title">
        <PrismicRichText :field="item.information_title" />
      </div>
      <div class="c-information__item__text">
        <PrismicRichText :field="item.information_text" />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.c-information {
  margin: rem(105) 0 rem(150) 0;
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

    &:nth-child(2n) {
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

    &__icon {
      display: inline-flex;
      width: 30px;
      height: 30px;
      padding: 10px;
      align-items: center;
      justify-content: center;
      background-color: $primary-color;
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
}
</style>
