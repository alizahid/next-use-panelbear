# next-use-panelbear

This is just a convenience wrapper around [@panelbear/panelbear-js](https://github.com/panelbearhq/panelbear-js) for [Next.js](https://nextjs.org)

## Install

`yarn add next-use-panelbear`

## Usage

### JavaScript

```typescript
import { usePanelbear } from 'next-use-panelbear'
import React from 'react'

const App = ({ Component, pageProps }) => {
  usePanelbear('SITE_ID', {})

  return <Component {...pageProps} />
}

export default App
```

### TypeScript

```typescript
import { usePanelbear } from 'next-use-panelbear'
import { AppProps } from 'next/app'
import React, { FunctionComponent } from 'react'

const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  usePanelbear('SITE_ID', {})

  return <Component {...pageProps} />
}

export default App
```

## Dependencies

- React
- Next
