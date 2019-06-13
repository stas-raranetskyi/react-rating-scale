## Install

```sh
npm install --save rating-stars-react
```

## Demo

[https://stas-raranetskyi.github.io/react-rating-stars/](https://stas-raranetskyi.github.io/react-rating-stars/)

## Usage

```javascript
import React from 'react'
import Rating  from 'rating-stars-react';

class App extends React.Component {
    render() {
        return <Rating />;
    }
}
```

### Settings

Option | Type | Default
------ | ---- | -------
countStars | number | 10
rating | number [0-countStars - 1] | -1
readonly | bool | false
onSelect | function | () => {}
beforeSelect | function | () => true
icon | string | icon
width | number | 20
height | number | 19
classNameStarsWrap | string | ''
classNameStarItem | string | ''

## Author

|[![@Stas Raranetskyi](https://avatars0.githubusercontent.com/u/11090889?s=128&v=4)](https://github.com/stas-raranetskyi/)|
|:---:|
|[Stas Raranetskyi](https://github.com/stas-raranetskyi/)|
