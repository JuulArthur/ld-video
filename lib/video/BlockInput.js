'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  padding: 16px;\n  position: relative;\n  line-height: 1;\n  flex: 1;\n'], ['\n  padding: 16px;\n  position: relative;\n  line-height: 1;\n  flex: 1;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  border: 0;\n  border-bottom: 1px solid transparent;\n  color: #333;\n  display: block;\n  padding: 8px 0;\n  width: 100%;\n  font-size: 14px;\n  outline: none;\n  &:hover {\n    border-color: #999;\n  }\n  &:focus {\n    border-color: #999;\n  }\n'], ['\n  border: 0;\n  border-bottom: 1px solid transparent;\n  color: #333;\n  display: block;\n  padding: 8px 0;\n  width: 100%;\n  font-size: 14px;\n  outline: none;\n  &:hover {\n    border-color: #999;\n  }\n  &:focus {\n    border-color: #999;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2016, Globo.com (https://github.com/globocom)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2016, vace.nz (https://github.com/vacenz)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * License: MIT
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var _default = function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  _createClass(_default, [{
    key: 'handleDrop',
    value: function handleDrop(e) {
      e.preventDefault();
      e.stopPropagation();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          value = _props.value,
          props = _objectWithoutProperties(_props, ['value']);

      return _react2.default.createElement(
        BlockInputWrapper,
        { className: 'ld-block-input-wrapper' },
        _react2.default.createElement(BlockInput, _extends({
          className: 'ld-block-input'
        }, props, {
          defaultValue: value,
          type: 'text',
          onDrop: this.handleDrop }))
      );
    }
  }]);

  return _default;
}(_react.Component);

exports.default = _default;


var BlockInputWrapper = _styledComponents2.default.div(_templateObject);

var BlockInput = _styledComponents2.default.input(_templateObject2);