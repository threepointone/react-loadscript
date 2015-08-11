'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var promises = {};

function loadScript(src) {
  if (promises[src]) {
    return promises[src];
  }
  var promise = promises[src] = new Promise(function (resolve) {
    var el = document.createElement('script');
    var loaded = false;
    el.onload = el.onreadystatechange = function () {
      if (el.readyState && el.readyState !== 'complete' && el.readyState !== 'loaded' || loaded) {
        return false;
      }
      el.onload = el.onreadystatechange = null;
      loaded = true;
      resolve();
    };

    el.async = true;
    el.src = src;
    var head = document.getElementsByTagName('head')[0];
    head.insertBefore(el, head.firstChild);
  });

  return promise;
}

var Script = (function (_React$Component) {
  _inherits(Script, _React$Component);

  function Script() {
    _classCallCheck(this, Script);

    _get(Object.getPrototypeOf(Script.prototype), 'constructor', this).apply(this, arguments);

    this.state = {
      done: false
    };
  }

  _createClass(Script, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this = this;

      loadScript(this.props.src).then(function () {
        _this.setState({
          done: true
        });
        _this.props.onLoad();
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children(this.state);
    }
  }], [{
    key: 'defaultProps',
    value: {
      src: 'javascript:void(0)',
      onLoad: function onLoad() {}
    },
    enumerable: true
  }, {
    key: 'propTypes',
    value: {
      children: _react2['default'].PropTypes.func,
      src: _react2['default'].PropTypes.string,
      onLoad: _react2['default'].PropTypes.func
    },
    enumerable: true
  }]);

  return Script;
})(_react2['default'].Component);

exports.Script = Script;