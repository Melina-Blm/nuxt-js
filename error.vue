<script setup>
const { client } = usePrismic()
const { data: errorPage, error } = await useAsyncData('errorPage', () => client.getSingle('page404'))

// Handle case when request fails
if (!errorPage.value || error.value) {
  throw createError({ statusCode: 404, statusMessage: 'La page d\'erreur 404 est introuvable' })
}
const env = useRuntimeConfig()
const props = defineProps ({
    error: Object
})

</script>

<template>
    <div class="content">

    
    <MyHeader/>

    <div class="p-error">
 {{ error }}
 <p>Oops! Something went wrong.</p>
 <pre>
 {{ errorPage.data.title[0].text}}
 {{ errorPage.data.text[0].text}}
</pre>

    </div>
    <!-- {{ page404.data }} -->
</div>
<MyFooter/>
</template>

<style lang="scss" scoped>

.content {
    margin:rem(0) rem(80)
}

</style>