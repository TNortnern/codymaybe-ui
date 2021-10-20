<template>
  <div class="base-container">
    <!-- <Button component="Button" variant="accent"></Button> -->
    <Featurev9 :items="items"> </Featurev9>
  </div>
</template>

<script lang="ts">
// import Button from './Button.vue'
import useTheme from '@/composables/useTheme'
import { FeatureV9Item } from '@/types'
import Featurev9 from './FeatureV9.vue'
export default {
  components: {
    // Button,
    Featurev9,
  },
  setup() {
    const theme = useTheme()
    const items: FeatureV9Item[] = [
      {
        headerText: 'Hello',
        image:
          'https://previews.customer.envatousercontent.com/files/77289437/preview.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur.',
        buttonText: 'Shop!!',
        buttonVariant: 'primary',
        action: () => theme.toggleTheme(),
      },
      {
        headerText: 'Hello2',
        image:
          'https://previews.customer.envatousercontent.com/files/77289437/preview.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur2.',
        buttonText: 'Shop2!!',
        href: 'https://google.com',
      },
    ]
    return {
      items,
    }
  },
}
</script>
