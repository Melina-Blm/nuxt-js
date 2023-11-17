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

<style lang="scss" scoped>
@import "@/scss/main";

.content {
    margin: rem(0) rem(80)
}

</style>
