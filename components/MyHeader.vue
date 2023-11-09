<script setup>
import { useGlobalStore } from '@/stores/global';

const store = useGlobalStore();
// console.log(store)
</script>

<template>
  <div class="c-header">
    <img src="/logo-food.png" alt="">
    <nav class="c-header__nav">
      <ul>
        <router-link class="c-header__nav__item" to="/">Home</router-link>
        <router-link class="c-header__nav__item" to="/">Recettes</router-link>
        <router-link class="c-header__nav__item" to="/">Service</router-link>
        <router-link class="c-header__nav__item" to="/">Shops</router-link>
      </ul>
    </nav>
    <div class="c-header__searchbar">
      <MyIcon name="search" variant="nobg" stroke="black" size="regular"/>
      <input class="c-header__searchbar__input" type="text" placeholder="Search">
      <div class="c-header__searchbar__shoppingcart" @click="store.increment"> 
        <MyIcon name="cart" variant="nobg" stroke="black" size="regular"></MyIcon>
        <p class="c-header__searchbar__shoppingcart__quantity">Cart : {{ store.cart }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.c-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 rem(20);
  padding: rem(20) 0;

  &__nav {
    ul {
      display: flex;
      gap: rem(50);
      
      &__item {
        text-decoration: none;
        color: $black;
        font-size: $regular-font-size;
        font-weight: 600;
      }
    }
  }

  &__searchbar {
    display: flex;
    align-items: center;
    background-color: $white;
    border-radius: rem(10);
    padding: rem(10);
    box-shadow: 0 2px 5px 0 $gray;

    &__input {
      border: none;
      font-size: $regular-font-size;
      font-weight: bold;
      color: $black;
    }

    &__shoppingcart {
      position: relative;

      &__quantity {
        font-size: $small-font-size;
        color: white;
        background-color: $primary-color;
        padding: rem(5) rem(9);
        box-shadow: 0 0 10px 0 $primary-color;
        border-radius: 30px;
        width: 70px;
        position: absolute;
        bottom: rem(25);
        left: rem(28);
      }
    }
  }
}

.c-header__nav__item {
  color: #000; 
  font-weight: 600;
  text-decoration: none; 
  transition: color 0.3s; 
}

.c-header__nav__item:hover {
  color: orange; 
}
</style>
