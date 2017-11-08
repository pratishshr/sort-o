var sort-o =
/******/ (function(modules) { // webpackBootstrap
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

const LENGTH = 'length';
/* harmony export (immutable) */ __webpack_exports__["LENGTH"] = LENGTH;

const LENGTH_REVERSE = 'length_reverse';
/* harmony export (immutable) */ __webpack_exports__["LENGTH_REVERSE"] = LENGTH_REVERSE;



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sorto__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_sortOrder__ = __webpack_require__(0);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "sort", function() { return __WEBPACK_IMPORTED_MODULE_0__sorto__["a"]; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "sortOrder", function() { return __WEBPACK_IMPORTED_MODULE_1__constants_sortOrder__; });






/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = sort;
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
    [__WEBPACK_IMPORTED_MODULE_2__constants_sortOrder__["LENGTH"]]: __WEBPACK_IMPORTED_MODULE_1__utils_comparators__["d" /* lengthSort */],
    [__WEBPACK_IMPORTED_MODULE_2__constants_sortOrder__["LENGTH_REVERSE"]]: __WEBPACK_IMPORTED_MODULE_1__utils_comparators__["c" /* lengthReverseSort */]
  };

  return comparators[sortOrder];
}

/**
 * Deep sort object keys as per the given comparator
 * 
 * @param {Object} data 
 * @param {Function} comparator 
 */
function sortObject(data, comparator) {
  let sortedData = {};
  let sortedKeys = Object.keys(data).sort(comparator);

  sortedKeys.forEach(key => {
    if (Object(__WEBPACK_IMPORTED_MODULE_0__utils_object__["a" /* isObject */])(data[key])) {
      sortedData[key] = sortObject(data[key], comparator);
    } else {
      sortedData[key] = data[key];
    }
  });

  return sortedData;
}

/**
 * Sort an array as per the given comparator
 * 
 * @param {Array} data 
 * @param {Function} comparator 
 */
function sortArray(data, comparator) {
  let sortedData = {};

  return data.sort(comparator);
}

/**
 * Sort data as per the specified order.
 * 
 * @param {Object|Array} data 
 * @param {String|Function} = 'asc' sortOrder 
 */
function sort(data, sortOrder = __WEBPACK_IMPORTED_MODULE_2__constants_sortOrder__["ASC"]) {
  const comparator = getComparator(sortOrder);

  if (Object(__WEBPACK_IMPORTED_MODULE_0__utils_object__["a" /* isObject */])(data)) {
    return sortObject(data, comparator);
  }

  if (Array.isArray(data)) {
    return sortArray(data, comparator);
  }

  throw new Error('Supplied data is not a valid Object');
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
  if (a.length < b.length) {
    return -1;
  }
  if (a.length > b.length) {
    return 1;
  }

  return 0;
}

/**
 * Sort in ascending order by length.
 * 
 * @param {String|Number} a 
 * @param {String|Number} b 
 */
function lengthReverseSort(a, b) {
  if (a.length < b.length) {
    return 1;
  }
  if (a.length > b.length) {
    return -1;
  }

  return 0;
}


/***/ })
/******/ ]);