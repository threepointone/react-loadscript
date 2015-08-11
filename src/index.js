import React from 'react';
const promises = {};

function loadScript(src){
  if(promises[src]){
    return promises[src]
  }
  let promise = promises[src] = new Promise(resolve => {
    var el = document.createElement('script');
    var loaded = false;
    el.onload = el.onreadystatechange =  () => {
      if ((el.readyState && el.readyState !== 'complete' && el.readyState !== 'loaded') || loaded) {
        return false;
      }
      el.onload = el.onreadystatechange = null;
      loaded = true;
      resolve();
    };

    el.async = true;
    el.src = src;
    let head = document.getElementsByTagName('head')[0];
    head.insertBefore(el, head.firstChild);

  });

  return promise;
}

export class Script extends React.Component{
  static defaultProps = {
    src: 'javascript:void(0)',
    onLoad: () => {}
  }
  static propTypes = {
    children: React.PropTypes.func,
    src: React.PropTypes.string,
    onLoad: React.PropTypes.func
  }
  state = {
    done: false
  }
  componentWillMount() {
    loadScript(this.props.src).then(()=> {
      this.setState({
        done: true
      });
      this.props.onLoad();
    });
  }
  render(){
    return this.props.children(this.state);
  }
}