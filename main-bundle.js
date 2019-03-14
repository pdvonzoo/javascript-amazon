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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime-module.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime-module.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ "./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),

/***/ "./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime-module.js");


/***/ }),

/***/ "./src/font/AmazonEmber_300.woff":
/*!***************************************!*\
  !*** ./src/font/AmazonEmber_300.woff ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "font/AmazonEmber_300.woff";

/***/ }),

/***/ "./src/font/AmazonEmber_400.woff2":
/*!****************************************!*\
  !*** ./src/font/AmazonEmber_400.woff2 ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "font/AmazonEmber_400.woff2";

/***/ }),

/***/ "./src/font/AmazonEmber_700.woff2":
/*!****************************************!*\
  !*** ./src/font/AmazonEmber_700.woff2 ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "font/AmazonEmber_700.woff2";

/***/ }),

/***/ "./src/images/Card_ship_01.jpg":
/*!*************************************!*\
  !*** ./src/images/Card_ship_01.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/Card_ship_01.jpg";

/***/ }),

/***/ "./src/images/International_icon.png":
/*!*******************************************!*\
  !*** ./src/images/International_icon.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/International_icon.png";

/***/ }),

/***/ "./src/images/PrimeDelivery.png":
/*!**************************************!*\
  !*** ./src/images/PrimeDelivery.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/PrimeDelivery.png";

/***/ }),

/***/ "./src/images/Prime_about.png":
/*!************************************!*\
  !*** ./src/images/Prime_about.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/Prime_about.png";

/***/ }),

/***/ "./src/images/Sprites_icons.png":
/*!**************************************!*\
  !*** ./src/images/Sprites_icons.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/Sprites_icons.png";

/***/ }),

/***/ "./src/images/nav-sprite-global_icons.png":
/*!************************************************!*\
  !*** ./src/images/nav-sprite-global_icons.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/nav-sprite-global_icons.png";

/***/ }),

/***/ "./src/images/video.jpg":
/*!******************************!*\
  !*** ./src/images/video.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/video.jpg";

/***/ }),

/***/ "./src/images/video1.jpg":
/*!*******************************!*\
  !*** ./src/images/video1.jpg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/video1.jpg";

/***/ }),

/***/ "./src/images/video2.jpg":
/*!*******************************!*\
  !*** ./src/images/video2.jpg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/video2.jpg";

/***/ }),

/***/ "./src/images/video3.jpg":
/*!*******************************!*\
  !*** ./src/images/video3.jpg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/video3.jpg";

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "index.html";

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Plans_PlansTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Plans/PlansTypes */ "./src/js/components/Plans/PlansTypes.js");
/* harmony import */ var _components_Plans_Plans__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Plans/Plans */ "./src/js/components/Plans/Plans.js");
/* harmony import */ var _util_Type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util/Type */ "./src/js/util/Type.js");
/* harmony import */ var _util_typeCollection_defaultTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./util/typeCollection/defaultTypes */ "./src/js/util/typeCollection/defaultTypes.js");
/* harmony import */ var _components_Carousel_CarouselTypes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Carousel/CarouselTypes */ "./src/js/components/Carousel/CarouselTypes.js");
/* harmony import */ var _components_Carousel_Carousel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/Carousel/Carousel */ "./src/js/components/Carousel/Carousel.js");
/* harmony import */ var _util_Helpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./util/Helpers */ "./src/js/util/Helpers.js");










document.addEventListener("DOMContentLoaded", function () {
  var type = new _util_Type__WEBPACK_IMPORTED_MODULE_5__["Type"]();
  var plans = new _components_Plans_Plans__WEBPACK_IMPORTED_MODULE_4__["Plans"]();
  var carousel = new _components_Carousel_Carousel__WEBPACK_IMPORTED_MODULE_8__["Carousel"]({
    delay: 3000
  });
  new App(type, plans, carousel);
});

var App =
/*#__PURE__*/
function () {
  function App(type, plans, carousel) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, App);

    this.addDefinition(type).checkType(plans, carousel, type).initPlans(plans).initCarousel(carousel);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(App, [{
    key: "addDefinition",
    value: function addDefinition(type) {
      type.addDefinition(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(_util_typeCollection_defaultTypes__WEBPACK_IMPORTED_MODULE_6__["defaultTypes"]));
      return this;
    }
  }, {
    key: "checkType",
    value: function checkType(plans, carousel, type) {
      new _components_Plans_PlansTypes__WEBPACK_IMPORTED_MODULE_3__["PlansTypes"](plans, type);
      new _components_Carousel_CarouselTypes__WEBPACK_IMPORTED_MODULE_7__["CarouselTypes"](carousel, type);
      return this;
    }
  }, {
    key: "initPlans",
    value: function initPlans(plans) {
      var plansEls = {
        stickyNav: Object(_util_Helpers__WEBPACK_IMPORTED_MODULE_9__["$"])('.fixed-nav'),
        stickyNavCover: Object(_util_Helpers__WEBPACK_IMPORTED_MODULE_9__["$All"])('.fixed-nav__cover'),
        frontCover: Object(_util_Helpers__WEBPACK_IMPORTED_MODULE_9__["$"])(".fixed-nav__cover--front"),
        submitCover: Object(_util_Helpers__WEBPACK_IMPORTED_MODULE_9__["$"])(".fixed-nav__cover--submit"),
        open: Object(_util_Helpers__WEBPACK_IMPORTED_MODULE_9__["$All"])("[data-open=fixedNav]"),
        close: Object(_util_Helpers__WEBPACK_IMPORTED_MODULE_9__["$All"])("[data-close=fixedNav]"),
        header: Object(_util_Helpers__WEBPACK_IMPORTED_MODULE_9__["$"])(".header"),
        aboutBtn: Object(_util_Helpers__WEBPACK_IMPORTED_MODULE_9__["$"])(".submit-box__submit")
      };
      var target = {
        headerBottom: plansEls.header.offsetHeight,
        fixPoint: plansEls.aboutBtn.offsetTop + plansEls.aboutBtn.offsetHeight
      };
      plans.setEvent(plansEls, target);
      return this;
    }
  }, {
    key: "initCarousel",
    value: function initCarousel(carousel) {
      var els = {
        nextBtn: Object(_util_Helpers__WEBPACK_IMPORTED_MODULE_9__["$"])('#exploreVideoNext'),
        prevBtn: Object(_util_Helpers__WEBPACK_IMPORTED_MODULE_9__["$"])('#exploreVideoPrev'),
        slides: Object(_util_Helpers__WEBPACK_IMPORTED_MODULE_9__["$"])('#exploreVideo').children,
        heading: Object(_util_Helpers__WEBPACK_IMPORTED_MODULE_9__["$"])('#c-heading'),
        paragraph: Object(_util_Helpers__WEBPACK_IMPORTED_MODULE_9__["$"])('#c-paragraph')
      };
      var httpMethod = "get",
          url = "./data/data.json";
      carousel.render({
        httpMethod: httpMethod,
        url: url,
        els: els
      });
    }
  }]);

  return App;
}();

/***/ }),

/***/ "./src/js/components/Carousel/Carousel.js":
/*!************************************************!*\
  !*** ./src/js/components/Carousel/Carousel.js ***!
  \************************************************/
/*! exports provided: Carousel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Carousel", function() { return Carousel; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_Helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/Helpers */ "./src/js/util/Helpers.js");
/* harmony import */ var _util_ajax__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/ajax */ "./src/js/util/ajax.js");





var Carousel =
/*#__PURE__*/
function () {
  function Carousel(_ref) {
    var delay = _ref.delay;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Carousel);

    this.H = new _util_Helpers__WEBPACK_IMPORTED_MODULE_2__["Helpers"]();
    this.pNum = 0;
    this.timeoutId = 0;
    this.delay = delay;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Carousel, [{
    key: "setEvent",
    value: function setEvent(data, els) {
      var _this = this;

      els.nextBtn.addEventListener('click', function () {
        return _this.controlSlides(data, els, 'next');
      });
      els.prevBtn.addEventListener('click', function () {
        return _this.controlSlides(data, els, 'previous');
      });
      return this;
    }
  }, {
    key: "runAutoMove",
    value: function runAutoMove(data, els) {
      var _this2 = this;

      this.controlSlides(data, els);
      this.timeoutId = setTimeout(function () {
        return _this2.runAutoMove(data, els);
      }, this.delay);
      return this;
    }
  }, {
    key: "controlSlides",
    value: function controlSlides(data, els) {
      var direction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'next';
      var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      clearTimeout(this.timeoutId);
      this.setTextBox(data, els);
      this.setPageNumber(els, direction);
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = els.slides[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var slide = _step.value;
          slide.style.transform = "translateX(".concat(100 * (i - this.pNum), "%) translateY(").concat(-100 * i, "%)");
          i++;
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return this;
    }
  }, {
    key: "setTextBox",
    value: function setTextBox(data, els) {
      els.heading.innerText = data[this.pNum].heading;
      els.paragraph.innerText = data[this.pNum].paragraph;
    }
  }, {
    key: "setPageNumber",
    value: function setPageNumber(els, direction) {
      var pNum = this.pNum;
      var slidesNum = els.slides.length;

      if (direction === 'next') {
        pNum = pNum + 1 === slidesNum ? 0 : pNum + 1;
      } else if (direction === 'previous') {
        pNum = !pNum ? slidesNum - 1 : pNum - 1;
      }

      Math.abs(this.pNum - pNum) > 1 ? this.H.removeClass(els.slides, 'transition') : this.H.addClass(els.slides, 'transition');
      this.pNum = pNum;
      return this;
    }
  }, {
    key: "render",
    value: function render(_ref2) {
      var _this3 = this;

      var httpMethod = _ref2.httpMethod,
          url = _ref2.url,
          els = _ref2.els;
      var parent = Object(_util_Helpers__WEBPACK_IMPORTED_MODULE_2__["$"])('#exploreVideo');
      var tagName = 'li';
      var className = "carousel__item transition";
      return Object(_util_ajax__WEBPACK_IMPORTED_MODULE_3__["ajax"])({
        httpMethod: httpMethod,
        url: url
      }).then(function (res) {
        res.forEach(function (data, i) {
          var el = _this3.H.createEl(parent, tagName, className);

          el.style.backgroundImage = "url(".concat(data.imgurl, ")");
          el.style.transform = "translateX(".concat(100 * i, "%) translateY(").concat(-100 * i, "%)");
        });
        return res;
      }).then(function (res) {
        _this3.runAutoMove(res, els).setEvent(res, els);
      });
    }
  }]);

  return Carousel;
}();



/***/ }),

/***/ "./src/js/components/Carousel/CarouselTypes.js":
/*!*****************************************************!*\
  !*** ./src/js/components/Carousel/CarouselTypes.js ***!
  \*****************************************************/
/*! exports provided: CarouselTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselTypes", function() { return CarouselTypes; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);



var CarouselTypes =
/*#__PURE__*/
function () {
  function CarouselTypes(carousel, type) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, CarouselTypes);

    this.carousel = carousel;
    this.type = type;
    this.define(this.carousel);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(CarouselTypes, [{
    key: "define",
    value: function define(targetObj) {
      if (toString.call(targetObj) !== "[object Object]") throw new Error();
      this.type.checkArgsTypes(targetObj, 'setEvent', ['array', 'object']);
      this.type.checkArgsTypes(targetObj, 'runAutoMove', ['array', 'object']);
      this.type.checkArgsTypes(targetObj, 'controlSlides', ['array', 'object', ['string', 'undefined'], ['number', 'undefined']]);
      this.type.checkArgsTypes(targetObj, 'setPageNumber', ['object', 'string']);
      return this;
    }
  }]);

  return CarouselTypes;
}();



/***/ }),

/***/ "./src/js/components/Plans/Plans.js":
/*!******************************************!*\
  !*** ./src/js/components/Plans/Plans.js ***!
  \******************************************/
/*! exports provided: Plans */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Plans", function() { return Plans; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _util_Helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/Helpers */ "./src/js/util/Helpers.js");





var Plans =
/*#__PURE__*/
function () {
  function Plans() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Plans);

    this.H = new _util_Helpers__WEBPACK_IMPORTED_MODULE_3__["Helpers"]();
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Plans, [{
    key: "setEvent",
    value: function setEvent(els, target) {
      var _this = this;

      var className = {
        active: 'active',
        clicked: 'clicked'
      };
      var coverEls = [els.submitCover, els.frontCover];
      this.H.on(window, 'scroll', function (_) {
        _this.setScrollEvt(els, window.scrollY, className.active, target);
      });
      this.H.on(els.open, 'click', function (_) {
        _this.H.addClass(coverEls, className.clicked);
      });
      this.H.on(els.close, 'click', function (_) {
        _this.H.removeClass(coverEls, className.clicked);
      });
      return this;
    }
  }, {
    key: "setScrollEvt",
    value: function setScrollEvt(els, currentTop, className, target) {
      this.controllStickyNav([].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(els.stickyNavCover), [els.stickyNav]), target.fixPoint, currentTop, className);
      this.controllStickyNav(els.stickyNavCover, target.fixPoint, currentTop, className);
      this.controllStickyNav(els.stickyNav, target.headerBottom, currentTop, className);
      return this;
    }
  }, {
    key: "controllStickyNav",
    value: function controllStickyNav(el, target, currentTop, className) {
      currentTop > target ? this.H.addClass(el, className) : this.H.removeClass(el, className);
      return this;
    }
  }]);

  return Plans;
}();



/***/ }),

/***/ "./src/js/components/Plans/PlansTypes.js":
/*!***********************************************!*\
  !*** ./src/js/components/Plans/PlansTypes.js ***!
  \***********************************************/
/*! exports provided: PlansTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlansTypes", function() { return PlansTypes; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);



var PlansTypes =
/*#__PURE__*/
function () {
  function PlansTypes(plans, type) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, PlansTypes);

    this.plans = plans;
    this.type = type;
    this.define(this.plans);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(PlansTypes, [{
    key: "define",
    value: function define(targetObj) {
      if (toString.call(targetObj) !== "[object Object]") throw new Error();
      this.type.checkArgsTypes(targetObj, 'setEvent', ['object']);
      this.type.checkArgsTypes(targetObj, 'setScrollEvent', ['object', 'number', 'string', 'object']);
      this.type.checkArgsTypes(targetObj, 'controllStickyNav', [['NodeList', 'DOMElement', 'array'], 'number', 'number', 'string']);
      return this;
    }
  }]);

  return PlansTypes;
}();



/***/ }),

/***/ "./src/js/util/Aop.js":
/*!****************************!*\
  !*** ./src/js/util/Aop.js ***!
  \****************************/
/*! exports provided: Aop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Aop", function() { return Aop; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);



var Aop =
/*#__PURE__*/
function () {
  function Aop() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Aop);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Aop, [{
    key: "inject",
    value: function inject(targetObj, method, advice) {
      var originalFn = targetObj[method];

      targetObj[method] = function () {
        return advice.call(this, {
          fn: originalFn,
          args: arguments
        });
      };
    }
  }, {
    key: "invoke",
    value: function invoke(targetObj) {
      return targetObj.fn.apply(this, targetObj.args);
    }
  }]);

  return Aop;
}();



/***/ }),

/***/ "./src/js/util/Helpers.js":
/*!********************************!*\
  !*** ./src/js/util/Helpers.js ***!
  \********************************/
/*! exports provided: $, $All, Helpers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$", function() { return $; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$All", function() { return $All; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Helpers", function() { return Helpers; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _typeCollection_defaultTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./typeCollection/defaultTypes */ "./src/js/util/typeCollection/defaultTypes.js");





var $ = function $(selector, context) {
  return (context || document).querySelector(selector);
};

var $All = function $All(selector, context) {
  return (context || document).querySelectorAll(selector);
};

var Helpers =
/*#__PURE__*/
function () {
  function Helpers() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Helpers);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Helpers, [{
    key: "addClass",
    value: function addClass(els, className) {
      if (this.checkType("DOMElement", els)) els = [els];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = els[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var el = _step.value;
          if (!this.checkType("DOMElement", el)) throw new Error();
          if (el && !el.className.match(className)) el.className += ' ' + className;
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return els;
    }
  }, {
    key: "removeClass",
    value: function removeClass(els, className) {
      if (this.checkType("DOMElement", els)) els = [els];
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = els[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var el = _step2.value;
          if (!this.checkType("DOMElement", el)) throw new Error();
          el.classList.remove(className);
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return els;
    }
  }, {
    key: "on",
    value: function on(els, event, callback) {
      if (!els) throw new Error();
      if (!this.checkType("array", els) && !this.checkType("NodeList", els)) els = [els];
      if (!this.checkType("string", event)) throw new Error('Type error: `event` has to be a string');
      if (!this.checkType("function", callback)) throw new Error('Type error: `callback` has to be a function');

      for (var i = 0; i < els.length; i++) {
        if (els[i].addEventListener) {
          els[i].addEventListener(event, callback, false);
        }
      }

      return els;
    }
  }, {
    key: "createEl",
    value: function createEl(parent, tagName, className) {
      var el = document.createElement(tagName);
      this.addClass(el, className);
      parent.appendChild(el);
      return el;
    }
  }, {
    key: "checkType",
    value: function checkType(name, target) {
      var types = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(_typeCollection_defaultTypes__WEBPACK_IMPORTED_MODULE_3__["defaultTypes"]);

      var validator = types.filter(function (v) {
        return v.name === name;
      })[0];
      return validator.evaluator(target);
    }
  }]);

  return Helpers;
}();



/***/ }),

/***/ "./src/js/util/Registry.js":
/*!*********************************!*\
  !*** ./src/js/util/Registry.js ***!
  \*********************************/
/*! exports provided: Registry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Registry", function() { return Registry; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Helpers */ "./src/js/util/Helpers.js");




var Registry =
/*#__PURE__*/
function () {
  function Registry() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Registry);

    this.H = new _Helpers__WEBPACK_IMPORTED_MODULE_2__["Helpers"]();
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Registry, [{
    key: "define",
    value: function define(values) {
      var _this = this;

      if (!this.H.checkType('array', values)) throw new Error();
      values.forEach(function (v) {
        if (_this.H.checkType('object', v)) _this.definition[v.name] = v.evaluator;
      });
      return this.definition;
    }
  }, {
    key: "validate",
    value: function validate(values) {
      var _this2 = this;

      if (!this.H.checkType('array', values)) values = [values];
      values.forEach(function (value) {
        if (_this2.H.checkType('array', value.name)) {
          var result = value.name.some(function (n) {
            return _this2.definition[n](value.target);
          });
          if (!result) throw new Error();
        } else {
          if (!_this2.definition[value.name](value.target)) throw new Error();
        }
      });
      return true;
    }
  }]);

  return Registry;
}();



/***/ }),

/***/ "./src/js/util/Type.js":
/*!*****************************!*\
  !*** ./src/js/util/Type.js ***!
  \*****************************/
/*! exports provided: Type */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Type", function() { return Type; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Registry_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Registry.js */ "./src/js/util/Registry.js");
/* harmony import */ var _Aop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Aop */ "./src/js/util/Aop.js");
/* harmony import */ var _Helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Helpers */ "./src/js/util/Helpers.js");









var Type =
/*#__PURE__*/
function (_Registry) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Type, _Registry);

  function Type() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Type);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Type).call(this));
    _this.definition = {};
    _this.aop = new _Aop__WEBPACK_IMPORTED_MODULE_6__["Aop"]();
    _this.H = new _Helpers__WEBPACK_IMPORTED_MODULE_7__["Helpers"]();
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Type, [{
    key: "addDefinition",
    value: function addDefinition(validator) {
      if (!this.H.checkType('object', validator) && !this.H.checkType('array', validator)) throw new Error();
      if (this.H.checkType('object', validator)) validator = [validator];
      this.define(validator);
      return this;
    }
  }, {
    key: "checkArgsTypes",
    value: function checkArgsTypes(targetObj, targetFn, checkNames) {
      if (!this.H.checkType('object', targetObj)) throw new Error();
      if (!this.H.checkType('string', targetFn)) throw new Error();
      if (!this.H.checkType('array', checkNames)) throw new Error();
      var self = this;
      this.aop.inject(targetObj, targetFn, function (target) {
        var values = self.makeValues(checkNames, target);
        self.validate(values);
        return target.fn.apply(this, target.args);
      });
      return this;
    }
  }, {
    key: "makeValues",
    value: function makeValues(targetArr, target) {
      var values = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      targetArr.forEach(function (v, i) {
        return values.push({
          name: v,
          target: target.args[i]
        });
      });
      return values;
    }
  }, {
    key: "checkReturnedValueType",
    value: function checkReturnedValueType(targetObj, targetFn, checkName) {
      if (!this.H.checkType('object', targetObj)) throw new Error();
      if (!this.H.checkType('string', targetFn)) throw new Error();
      if (!this.H.checkType('string', checkName)) throw new Error();
      var self = this;
      this.aop.inject(targetObj, targetFn, function (target) {
        var result = target.fn.apply(this, target.args);
        self.validate({
          name: checkName,
          target: result
        });
        return result;
      });
      return this;
    }
  }]);

  return Type;
}(_Registry_js__WEBPACK_IMPORTED_MODULE_5__["Registry"]);



/***/ }),

/***/ "./src/js/util/ajax.js":
/*!*****************************!*\
  !*** ./src/js/util/ajax.js ***!
  \*****************************/
/*! exports provided: ajax */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ajax", function() { return ajax; });
function ajax(_ref) {
  var httpMethod = _ref.httpMethod,
      url = _ref.url;
  var successReadyState = 4;
  var successStatus = 200;
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === successReadyState) {
        if (xhr.status === successStatus) {
          var resp = JSON.parse(this.responseText);
          resolve(resp);
        } else {
          reject(new Error());
        }
      }
    };

    xhr.open(httpMethod, url);
    xhr.send();
  });
}



/***/ }),

/***/ "./src/js/util/typeCollection/defaultTypes.js":
/*!****************************************************!*\
  !*** ./src/js/util/typeCollection/defaultTypes.js ***!
  \****************************************************/
/*! exports provided: defaultTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultTypes", function() { return defaultTypes; });
var defaultTypes = function () {
  var isString = function isString(target) {
    return toString.call(target) === "[object String]";
  };

  var isNumber = function isNumber(target) {
    return toString.call(target) === "[object Number]";
  };

  var isUndefined = function isUndefined(target) {
    return toString.call(target) === "[object Undefined]";
  };

  var isBoolean = function isBoolean(target) {
    return toString.call(target) === "[object Boolean]";
  };

  var isObject = function isObject(target) {
    return toString.call(target) === "[object Object]";
  };

  var isFunction = function isFunction(target) {
    return toString.call(target) === "[object Function]";
  };

  var isArray = function isArray(target) {
    return toString.call(target) === "[object Array]";
  };

  var isHtmlEl = function isHtmlEl(target) {
    return target instanceof HTMLElement;
  };

  var isHtmlCol = function isHtmlCol(target) {
    return toString.call(target) === "[object HTMLCollection]";
  };

  var isNodeList = function isNodeList(target) {
    return target instanceof NodeList;
  };

  return [{
    name: 'string',
    evaluator: isString
  }, {
    name: 'number',
    evaluator: isNumber
  }, {
    name: 'undefined',
    evaluator: isUndefined
  }, {
    name: 'boolean',
    evaluator: isBoolean
  }, {
    name: 'object',
    evaluator: isObject
  }, {
    name: 'function',
    evaluator: isFunction
  }, {
    name: 'array',
    evaluator: isArray
  }, {
    name: 'DOMElement',
    evaluator: isHtmlEl
  }, {
    name: 'HTMLCollection',
    evaluator: isHtmlCol
  }, {
    name: 'NodeList',
    evaluator: isNodeList
  }];
}();



/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sass/main.scss */ "./src/sass/main.scss");
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sass_main_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.html */ "./src/index.html");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_html__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_nav_sprite_global_icons_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/nav-sprite-global_icons.png */ "./src/images/nav-sprite-global_icons.png");
/* harmony import */ var _images_nav_sprite_global_icons_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_nav_sprite_global_icons_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _images_International_icon_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/International_icon.png */ "./src/images/International_icon.png");
/* harmony import */ var _images_International_icon_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_International_icon_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _images_Prime_about_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/Prime_about.png */ "./src/images/Prime_about.png");
/* harmony import */ var _images_Prime_about_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_Prime_about_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _images_Card_ship_01_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/Card_ship_01.jpg */ "./src/images/Card_ship_01.jpg");
/* harmony import */ var _images_Card_ship_01_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_images_Card_ship_01_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _images_Sprites_icons_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/Sprites_icons.png */ "./src/images/Sprites_icons.png");
/* harmony import */ var _images_Sprites_icons_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_images_Sprites_icons_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _images_PrimeDelivery_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/PrimeDelivery.png */ "./src/images/PrimeDelivery.png");
/* harmony import */ var _images_PrimeDelivery_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_images_PrimeDelivery_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _images_video_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/video.jpg */ "./src/images/video.jpg");
/* harmony import */ var _images_video_jpg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_images_video_jpg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _images_video1_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./images/video1.jpg */ "./src/images/video1.jpg");
/* harmony import */ var _images_video1_jpg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_images_video1_jpg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _images_video2_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./images/video2.jpg */ "./src/images/video2.jpg");
/* harmony import */ var _images_video2_jpg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_images_video2_jpg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _images_video3_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./images/video3.jpg */ "./src/images/video3.jpg");
/* harmony import */ var _images_video3_jpg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_images_video3_jpg__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _font_AmazonEmber_300_woff__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./font/AmazonEmber_300.woff */ "./src/font/AmazonEmber_300.woff");
/* harmony import */ var _font_AmazonEmber_300_woff__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_font_AmazonEmber_300_woff__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _font_AmazonEmber_400_woff2__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./font/AmazonEmber_400.woff2 */ "./src/font/AmazonEmber_400.woff2");
/* harmony import */ var _font_AmazonEmber_400_woff2__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_font_AmazonEmber_400_woff2__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _font_AmazonEmber_700_woff2__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./font/AmazonEmber_700.woff2 */ "./src/font/AmazonEmber_700.woff2");
/* harmony import */ var _font_AmazonEmber_700_woff2__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_font_AmazonEmber_700_woff2__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _js_app_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./js/app.js */ "./src/js/app.js");


















/***/ }),

/***/ "./src/sass/main.scss":
/*!****************************!*\
  !*** ./src/sass/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/main.js */"./src/main.js");


/***/ })

/******/ });
//# sourceMappingURL=main-bundle.js.map