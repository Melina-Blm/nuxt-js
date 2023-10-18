<script setup>
import MyIcon from './elements/MyIcon.vue';
import { useGlobalStore } from '@/stores/global';

const store = useGlobalStore();
console.log(store)

</script>

<template>

<!-- 
  {{ store.count }} // 
  {{ store.foo }} -->
<div class="header">
  <img src="/logo-food.png" alt="">
  <nav class="header__nav">
    <ul>
      <router-link class="router-link" to="/">Home</router-link>
      <router-link class="router-link" to="/">Recettes</router-link>
      <router-link class="router-link" to ="/">Service</router-link>
      <router-link to="/" class="router-link">Shops</router-link>
    </ul>
  </nav>
  <div class="searchbar">
<MyIcon name="search" variant="nobg" stroke="black" size="regular"/>
<input type="text" placeholder="Search">
<div class="shoppingcart" @click="store.increment"> 
  <MyIcon name="cart" variant="nobg" stroke="black" size="regular"></MyIcon>
  <p class="shoppingcart_quantity">{{ store.cart }}</p>
</div>

  </div>
  </div>
        
    
</template>

<style lang="scss" scoped>

.shoppingcart{
  position: relative;

  .shoppingcart_quantity{
    font-size: $small-font-size;
    color:white;
    background-color: $primary-color;
    padding: rem(5) rem(9);
    box-shadow: 0 0 10px 0 $primary-color;
    border-radius: 30px;
    width:70px;
    position: absolute;
    bottom: rem(25);
    left: rem(28);
  }
}

.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 rem(20);
    padding: rem(20) 0;
    

nav {
    ul {
        display: flex;
        gap: rem(50);
        
    a {
        text-decoration: none;
        color: $black;
        font-size: $regular-font-size;
        font-weight: 600;
    }
    }
}
 
}

.searchbar {
  display: flex;
  align-items: center;
  background-color: $white;
  border-radius: rem(10);
  padding: rem(10);
  box-shadow: 0 2px 5px 0 $gray;

  input {
    border: none;
    font-size: $regular-font-size;
    font-weight: bold;
    color: $black;


  }
  .space{
    padding-right: rem(130);
    border-right: 1px solid $gray;
  }
}

.router-link {
  color: #000; /* Couleur de texte par défaut */
  text-decoration: none; /* Supprime les soulignements par défaut */
  transition: color 0.3s; /* Animation de transition pour la couleur du texte */
}

/* Styles au survol */
.router-link:hover {
  color: orange; /* Couleur du texte lorsque survolé */
}

</style>