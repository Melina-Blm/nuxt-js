<script setup>
</script>

<template>
  <div class="b-block">
    <p class="b-block__elem">Bike Delivery</p>
    <div class="b-block__elem b-block__elem--image">
      <img src="/bikedelivery.png" alt="">
    </div>
  </div>
</template>

<style lang="scss" scoped>

.b-block {
  display: inline-flex;
  gap: rem(60);
  align-items: center;
  background-color: $secondary-color;
  padding: rem(4) rem(4) rem(4) rem(20);
  border-radius: rem(60);
  color: $primary-color;

  &__elem {
    &--image {
      height: rem(43);
      background-color: #F6F6F6;
      border-radius: 100%;
      padding: 10px 0;

      img {
        width: rem(60);
        height: rem(43);
        border-radius: 100%;
      }
    }
  }
}

</style>
