## Install

```sh
npm install --save react-rating-scale
```

## Demo

[https://stas-raranetskyi.github.io/react-rating-scale/](https://stas-raranetskyi.github.io/react-rating-scale/)

## Usage

```javascript
import React from 'react'
import Rating  from 'react-rating-scale';

class App extends React.Component {
    render() {
        return <Rating />;
    }
}
```

### Settings

Option | Type | Default | Description
------ | ---- | ------- | -----------
countStars | number | 10 | The max number of stars to choose from or to display
rating | number | 0 | The user's rating. Number of stars to highlight. ranging from 0 to max number of stars
readonly | bool | false | Determines whether user can select a new rating or whether the stars are just for display
onSelect | function | () => {} | Callback that will be passed the new rating a user selects
beforeSelect | function | () => true | Callback that will before calling onSelect. Must return true for the function to execute
icon | string | '' | Path to your icon.
width | number | 20 | width icon
height | number | 19 | height icon
classNameStarsWrap | string | '' | class name for stars wrap
classNameStarItem | string | '' | class name fro star icon

## Author

|[![@Stas Raranetskyi](https://avatars0.githubusercontent.com/u/11090889?s=128&v=4)](https://github.com/stas-raranetskyi/)|
|:---:|
|[Stas Raranetskyi](https://github.com/stas-raranetskyi/)|
