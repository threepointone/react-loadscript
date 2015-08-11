import React from 'react';
import {Script} from '../src';

class App {
  render(){
    return <Script src='/example/script.js'>{
      ({done}) => !done? <div>loading...</div> : <div>done!</div>
    }</Script>
  }
}

React.render(<App/>, document.getElementById('root'));