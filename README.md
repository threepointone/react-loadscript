react-script
---

`npm install react react-loadscript --save'

script-loading as a component

(I'm so sorry)

```js
import {Script} from 'react-loadscript';

class App {
  render(){
    return <Script src='https://code.jquery.com/jquery-2.1.4.min.js'>{
      ({done}) => !done? <div>loading...</div> : <div>{$.map([1, 2, 3], i => <div>{i*5}</div>)}</div>
    }</Script>
  }
}
```

uses promises + a simple cache to prevent duplicate script loads. enjoy!