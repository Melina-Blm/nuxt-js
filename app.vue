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
    
    <!-- <NuxtLayout/> -->
    <NuxtPage/>
    
  </div>
</template>
