<script setup>
const props = defineProps({
  newsletter: Array,
})
</script>

<template>
 
<div v-for="item in newsletter">
  <div class="newsletter">
    <div class="newsletter__leftcontent">
      <img :src="item.newsletter_image.url" :alt="item.newsletter_image.alt" />
    </div>

    <div class="newsletter__rightcontent">
      <PrismicRichText class="newsletter__rightcontent-title" :field="item.newsletter_title" />
      <PrismicRichText :field="item.newsletter_text" />
        <div class="newsletter__rightcontent-btn">
          <div class="newsletter__input">  
            <input type="text" placeholder="Type your email...">
              <div class="newsletter__btn">
                <button>Subscribe</button>
              </div>
          </div>      
        </div>
    </div>
  </div>
</div>

</template>

<style lang="scss" scoped>

.newsletter {
margin: rem(160) rem(0);
display: grid;
grid-template-columns:  repeat(2, 1fr);
background-color: black;
border-radius:  rem(50);
position: relative;
height: rem(320);
}

.newsletter__leftcontent img {
    max-width: rem(600);
    top:50%;
    left:25%;
    transform: translate(-50%, -50%);
    position:absolute;
}

.newsletter__rightcontent {
   
    display: flex;
    width: 80%;
    flex-direction: column;
    justify-content: center;
    gap: rem(20);
    color:white;
    padding: rem(0) rem(100) rem(0) rem(0);
    &-title {
      font-weight: bold;
      font-size:$medium-font-size;
    }

    &-btn input {
       
        width: 100%;
        padding:rem(20);
        border-radius: rem(10);
        border: none;
    }
    &-btn button {
        padding: rem(13) rem(20);
        background-color: $primary-color;
        font-weight: 600;
        color: white;
        border: none;
        border-radius: rem(15);
        text-transform: uppercase;

    }
    .newsletter__input {
        position:relative;
        .newsletter__btn {
        position: absolute;
  
        top:50%;
        right:-15%;
        transform: translate(-50%, -50%);

    }
    }
    
}

</style>