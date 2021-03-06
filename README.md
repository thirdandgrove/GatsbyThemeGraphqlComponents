# Gatsby Theme Graphql Components

components for showing and updating graphql code in gatsby themes

![](https://github.com/thirdandgrove/gatsby-theme-drupal/blob/master/readme-preview.png)

## Install

`yarn add gatsby-graphql-components`

## Usage

```javascript
import { Code, LiveGraphql } from 'gatsby-graphql-components';

import 'gatsby-graphql-components/prism.css';
```

Code Component:

```javascript
<Code
code={'import React from 'react';
  import { Code, LiveGraphql } from 'gatsby-graphql-components'

  function App() {
    return (
      <div className="App">
        <header className="App-header">
        <Code
        code=''
        />

        </header>
      </div>
    );
  }

  export default App;'}
  />
```

LiveGraphql Component:

```javascript
<LiveGraphql
  query={query} // initial query
  updateQuery={updateQuery} // callback function to update query
  src={'http://localhost:8000/___graphql?query='} // src url for graphiql, should include initial query
/>
```
