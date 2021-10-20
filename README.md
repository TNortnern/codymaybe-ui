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

```html
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
```

`CodyButton`

```html
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
```
