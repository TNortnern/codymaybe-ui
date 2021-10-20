# Codyhouse-Maybe-UI

## Installation

```bash
npm i codehouse-maybe-ui
```

### OR

```bash
yarn add codehouse-maybe-ui
```

## Initialization in Vue3 app

```javascript
import { createApp } from 'vue'
import Cody from 'codehouse-maybe-ui'
import 'codehouse-maybe-ui/src/styles/style.css'

const app = createApp()
app.use(Cody).mount('#app')
```

## Usage

```vue
<template>
  <CodyButton variant="subtle">
  <FeatureV9 :items="items">
</template>

<script>
export default {
    setup() {
         const items = [
      {
        headerText: "Hello",
        image:
          "https://previews.customer.envatousercontent.com/files/77289437/preview.jpg",
        description: "Lorem ipsum dolor sit amet consectetur.",
        buttonText: "Shop!!",
        buttonVariant: "primary",
        action: useTheme().toggleTheme,
      },
      {
        headerText: "Hello2",
        image:
          "https://previews.customer.envatousercontent.com/files/77289437/preview.jpg",
        description: "Lorem ipsum dolor sit amet consectetur2.",
        buttonText: "Shop2!!",
        href: "https://stackoverflow.com/questions/43383498/module-has-no-exported-member-export-interface",
      },
    ];
        return {
            items
        }
    }
}
</script>
```

## Typescript

```vue
<template>
  <CodyButton variant="subtle">
  <FeatureV9 :items="items">
</template>

<script>
import { FeatureV9Item } from 'codehouse-maybe-ui'
export default {
    setup() {
         const items: FeatureV9Item[] = [
      {
        headerText: "Hello",
        image:
          "https://previews.customer.envatousercontent.com/files/77289437/preview.jpg",
        description: "Lorem ipsum dolor sit amet consectetur.",
        buttonText: "Shop!!",
        buttonVariant: "primary",
        action: useTheme().toggleTheme,
      },
      {
        headerText: "Hello2",
        image:
          "https://previews.customer.envatousercontent.com/files/77289437/preview.jpg",
        description: "Lorem ipsum dolor sit amet consectetur2.",
        buttonText: "Shop2!!",
        href: "https://stackoverflow.com/questions/43383498/module-has-no-exported-member-export-interface",
      },
    ];
        return {
            items
        }
    }
}
</script>
```

#### Codehouse also comes with types for specific component props for better intellisense(typescript only)

```javascript
import { AppTheme, FeatureV9Item, ... } from 'codehouse-maybe-ui'
```

#### As well as composables

```javascript
import useTheme from 'codehouse-maybe-ui/src/composables/useTheme'
```

## Available components in Codehouse

`FeatureV9`

<h2>Form Props</h2>
<table class="styled-table">
    <thead>
        <tr>
            <th>Prop</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>items</td>
            <td>Array ( FeatureV9Item[] )</td>
            <td>() => []</td>
            <td>Feature list to render</td>
        </tr>
    </tbody>
</table>

`CodyButton`

<h2>Form Props</h2>
<table class="styled-table">
    <thead>
        <tr>
            <th>Prop</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>variant</td>
            <td>String ( Variant )</td>
            <td>accent</td>
            <td>Variant type the button should render</td>
        </tr>
        <tr>
            <td>size</td>
            <td>String ( Size )</td>
            <td>''</td>
            <td>Size the button should render</td>
        </tr>
        <tr>
            <td>icon</td>
            <td>Boolean</td>
            <td>false</td>
            <td>Will the button have a icon?</td>
        </tr>
        <tr>
    </tbody>
</table>
