'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _VideoButton = require('./VideoButton');

var _VideoButton2 = _interopRequireDefault(_VideoButton);

var _VideoBlock = require('./VideoBlock');

var _VideoBlock2 = _interopRequireDefault(_VideoBlock);

var _VideoModal = require('./VideoModal');

var _VideoModal2 = _interopRequireDefault(_VideoModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  type: 'video',
  button: _VideoButton2.default,
  block: _VideoBlock2.default,
  modal: _VideoModal2.default
}; /*
    * Copyright (c) 2016, Globo.com (https://github.com/globocom)
    * Copyright (c) 2016, vace.nz (https://github.com/vacenz)
    *
    * License: MIT
    */