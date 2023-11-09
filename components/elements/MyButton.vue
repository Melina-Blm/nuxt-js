<script setup>

const props = defineProps({
  href: String,
  size: String,
  variant: String,
  hasIcon: Boolean,
  content: String,
})

const className = computed(() => ({
  ' -hasIcon': props.hasIcon,
  ' -rounded': props.variant === 'rounded',
  ' -video': props.variant === 'video',
  ' -small': props.size === 'small'
}))

const isVideoButton = computed(() => {
  return props.variant === 'video'
})
</script>
<template>
  <a v-if="href" :href="href" class="button" :class="className">
    <MyIcon name="arrow bold" color="white" stroke="orange" size="big" v-if="isVideoButton" />
    <slot></slot>
    <MyIcon :class="className" class="button__hasIcon" v-if="hasIcon" name="arrow right" variant="white" stroke="orange" size="regular" />
  </a>

  <button  :content="content" v-else class="button" :class="className">
    <slot></slot>
    <MyIcon v-if="hasIcon" :class="className" class="button__hasIcon"  name="arrow right" variant="white" stroke="orange" size="regular" />
  </button>
</template>

<style lang="scss" scoped>
.button {
  background-color: $primary-color;
  background: linear-gradient(180deg, $secondary-color 0%, $primary-color 100%);
  border: none;
  border-radius: rem(15);
  box-shadow: 0px rem(4) rem(4) rgba(0, 0, 0, 0.25);
  display: inline-flex;
  gap: rem(29);
  justify-content: space-between;
  align-items: center;
  color: $white;
  font-family: $font;
  font-size: $regular-font-size;
  font-weight: 600;
  padding: rem(20) rem(50);
  text-decoration: none;
  word-wrap: break-word;
  width: fit-content;
  

  @include large-up{
    padding: rem(33) rem(67);
  }

  &.-hasIcon{
       > * {
       margin-left: rem(15);
      }
    }
    &.-rounded {
      background: $primary-color;
      padding: rem(13) rem(20);
      font-weight: 500;
      border-radius: rem(67);
    }
    &.-small {
      font-size: $small-font-size;
      padding: rem(14) rem(29);
      font-weight: 400;

    
    }


  &.-hasIcon{
       > * {
       margin-left: rem(-10);
      }

      &.-small {
    font-size: $small-font-size;
    padding: rem(10) rem(10) rem(10) rem(20);
    font-weight: 400;
  }
    }
  &.-rounded {
    background: $primary-color;
    box-shadow: none;
    border-radius: rem(37);
    font-weight: 500;
    padding: rem(26) rem(64);
    @include large-up{
      padding: rem(20) rem(50);
    }
  }

  &.-video {
    background: white;
    box-shadow: none;
    color: black;
  }

  &.-small {
    font-size: $small-font-size;
    padding: rem(10) rem(10) rem(10) rem(10);
    font-weight: 400;
  }
}



</style>