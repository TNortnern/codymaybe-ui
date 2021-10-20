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
