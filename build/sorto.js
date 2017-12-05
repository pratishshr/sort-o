(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["sorto"] = factory();
	else
		root["sorto"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
const ASC = 'asc';
/* harmony export (immutable) */ __webpack_exports__["ASC"] = ASC;

const DESC = 'desc';
/* harmony export (immutable) */ __webpack_exports__["DESC"] = DESC;

const ASC_LENGTH = 'asc_length';
/* harmony export (immutable) */ __webpack_exports__["ASC_LENGTH"] = ASC_LENGTH;

const DESC_LENGTH = 'desc_length';
/* harmony export (immutable) */ __webpack_exports__["DESC_LENGTH"] = DESC_LENGTH;



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sorto__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_sortOrder__ = __webpack_require__(0);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "sort", function() { return __WEBPACK_IMPORTED_MODULE_0__sorto__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "sortKeys", function() { return __WEBPACK_IMPORTED_MODULE_0__sorto__["b"]; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "sortOrder", function() { return __WEBPACK_IMPORTED_MODULE_1__constants_sortOrder__; });






/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = sort;
/* harmony export (immutable) */ __webpack_exports__["b"] = sortKeys;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_object__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_comparators__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_sortOrder__ = __webpack_require__(0);





/**
 * Returns appropriate comparator as per the sort string.
 * If a function is supplied, it returns the function itself.
 *
 * @param {String|Function} sortOrder
 * @returns {Function}
 */
function getComparator(sortOrder) {
  if (typeof sortOrder === 'function') {
    return sortOrder;
  }

  const comparators = {
    [__WEBPACK_IMPORTED_MODULE_2__constants_sortOrder__["ASC"]]: __WEBPACK_IMPORTED_MODULE_1__utils_comparators__["a" /* ascendingSort */],
    [__WEBPACK_IMPORTED_MODULE_2__constants_sortOrder__["DESC"]]: __WEBPACK_IMPORTED_MODULE_1__utils_comparators__["b" /* descendingSort */],
    [__WEBPACK_IMPORTED_MODULE_2__constants_sortOrder__["ASC_LENGTH"]]: __WEBPACK_IMPORTED_MODULE_1__utils_comparators__["d" /* lengthSort */],
    [__WEBPACK_IMPORTED_MODULE_2__constants_sortOrder__["DESC_LENGTH"]]: __WEBPACK_IMPORTED_MODULE_1__utils_comparators__["c" /* lengthReverseSort */]
  };

  return comparators[sortOrder];
}

/**
 * Sort an array as per the specified order.
 *
 * @param {Array} data
 * @param {String|Function} = 'asc' sortOrder
 * @returns {Array}
 */
function sort(data, sortOrder = __WEBPACK_IMPORTED_MODULE_2__constants_sortOrder__["ASC"]) {
  if (!Array.isArray(data)) {
    throw new Error('Supplied data is not a valid Array');
  }

  const comparator = getComparator(sortOrder);

  return data.sort(comparator);
}

/**
 * Sort keys of an object as per the specified order.
 *
 * @param {Object} data
 * @param {String|Function} = 'asc' sortOrder
 * @returns {Object}
 */
function sortKeys(data, sortOrder = __WEBPACK_IMPORTED_MODULE_2__constants_sortOrder__["ASC"]) {
  if (!Object(__WEBPACK_IMPORTED_MODULE_0__utils_object__["a" /* isObject */])(data)) {
    throw new Error('Supplied data is not a valid Object');
  }

  const comparator = getComparator(sortOrder);

  let sortedData = {};
  let sortedKeys = Object.keys(data).sort(comparator);

  sortedKeys.forEach(key => {
    if (Object(__WEBPACK_IMPORTED_MODULE_0__utils_object__["a" /* isObject */])(data[key])) {
      sortedData[key] = sortKeys(data[key], comparator);
    } else {
      sortedData[key] = data[key];
    }
  });

  return sortedData;
}


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isObject;
/**
 * Check if a given input is of type "Object"
 * 
 * @param {any} input 
 */
function isObject(input) {
  return input instanceof Object && input.constructor === Object;
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = ascendingSort;
/* harmony export (immutable) */ __webpack_exports__["b"] = descendingSort;
/* harmony export (immutable) */ __webpack_exports__["d"] = lengthSort;
/* harmony export (immutable) */ __webpack_exports__["c"] = lengthReverseSort;
/**
 * Sort in ascending order.
 *
 * @param {String|Number} a
 * @param {String|Number} b
 */
function ascendingSort(a, b) {
  if (typeof a === 'string') {
    a = a.toLowerCase();
  }
  if (typeof b === 'string') {
    b = b.toLowerCase();
  }

  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }

  return 0;
}

/**
 * Sort in descending order.
 *
 * @param {String|Number} a
 * @param {String|Number} b
 */
function descendingSort(a, b) {
  if (typeof a === 'string') {
    a = a.toLowerCase();
  }
  if (typeof b === 'string') {
    b = b.toLowerCase();
  }

  if (a < b) {
    return 1;
  }
  if (a > b) {
    return -1;
  }

  return 0;
}

/**
 * Sort in ascending order by length.
 *
 * @param {String|Number} a
 * @param {String|Number} b
 */
function lengthSort(a, b) {
  return a.length - b.length;
}

/**
 * Sort in ascending order by length.
 *
 * @param {String|Number} a
 * @param {String|Number} b
 */
function lengthReverseSort(a, b) {
  return b.length - a.length;
}


/***/ })
/******/ ]);
});