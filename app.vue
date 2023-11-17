<script setup>
import { useGlobalStore}  from '@/stores/global'
const store = useGlobalStore()
onMounted (() => {
  const cart = localStorage.getItem('cart')
  store.setCart(JSON.parse(cart))

})

</script>

<template>
  <div>

    <div class="content">
        <MyHeader/>
       
      </div>
    <!-- <NuxtLayout/> -->
    <NuxtPage/>
    
  </div>
</template>

<style lang="scss" >
// import du main.scss dans l'app.vue car vercel ne le prend pas en compte
@import "./scss/main.scss";


.content {
    margin: rem(0) rem(80);
}

</style>
