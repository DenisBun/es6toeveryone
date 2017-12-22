"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// mapAny :: Either arr | (Either {obj} | {arr-like}), (el -> newEl), Bool toArray -> Either {obj} | [arr]

var mapAny = exports.mapAny = function mapAny(data, cb, isToArray) {
  return isToArray ? Array.from(Object.values(data).map(cb)) : Object.values(data).map(cb);
};

var composeZ = function composeZ() {
  for (var _len = arguments.length, functions = Array(_len), _key = 0; _key < _len; _key++) {
    functions[_key] = arguments[_key];
  }

  var result = 0;
  var newArr = functions.slice();
  while (newArr.length) {
    var firstFunc = newArr[0];
    var lastFunc = newArr[newArr.length - 1];
    result = firstFunc(lastFunc(result));
    newArr.splice(0, 1);
    newArr.splice(newArr.length - 1, 1);
  };
  return result;
};

var merge = function merge(firstObj, secondObj) {
  return _extends({}, firstObj, secondObj);
};

var advancedMarge = function advancedMarge() {
  for (var _len2 = arguments.length, objects = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    objects[_key2] = arguments[_key2];
  }

  var finalObj = {};
  objects.forEach(function (obj) {
    finalObj = _extends({}, finalObj, obj);
  });
  return finalObj;
};

var normalizer = function normalizer(obj) {
  var normalizedObj = {};
  var isNested = function isNested(key, value) {
    if (Object.keys(value).length) {
      Object.keys(value).forEach(function (key) {
        return isNested(key, value[key]);
      });
    } else {
      return Object.assign(normalizedObj, _defineProperty({}, key, value));
    }
  };
  Object.keys(obj).forEach(function (key) {
    return isNested(key, obj[key]);
  });
  return normalizedObj;
};

var autoCurry = function autoCurry(fn) {
  var _curry;

  for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    args[_key3 - 1] = arguments[_key3];
  }

  return args.length === fn.length ? fn.apply(undefined, args) : (_curry = curry).bind.apply(_curry, [undefined, fn].concat(args));
};
