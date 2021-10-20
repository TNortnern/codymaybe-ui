<script lang="ts">
// import Button from './Button.vue'
import Featurev9 from './FeatureV9.vue'
export default {
  components: {
    // Button,
    Featurev9,
  },
}
</script>

<template>
  <div class="base-container">
    <!-- <Button component="Button" variant="accent"></Button> -->
    <Featurev9
      :items="[
        {
          headerText: 'Hello',
          image:
            'https://previews.customer.envatousercontent.com/files/77289437/preview.jpg',
          description: 'Lorem ipsum dolor sit amet consectetur.',
          buttonText: 'Shop!!',
          buttonVariant: 'primary',
        },
        {
          headerText: 'Hello2',
          image:
            'https://previews.customer.envatousercontent.com/files/77289437/preview.jpg',
          description: 'Lorem ipsum dolor sit amet consectetur2.',
          buttonText: 'Shop2!!',
        },
      ]"
    >
    </Featurev9>
  </div>
</template>
