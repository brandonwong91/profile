"use strict";

function _get() {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get.bind();
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);
      if (desc.get) {
        return desc.get.call(arguments.length < 3 ? target : receiver);
      }
      return desc.value;
    };
  }
  return _get.apply(this, arguments);
}
function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }
  return object;
}
function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) ||
    _iterableToArrayLimit(arr, i) ||
    _unsupportedIterableToArray(arr, i) ||
    _nonIterableRest()
  );
}
function _nonIterableRest() {
  throw new TypeError(
    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
  );
}
function _iterableToArrayLimit(arr, i) {
  var _i =
    null == arr
      ? null
      : ("undefined" != typeof Symbol && arr[Symbol.iterator]) ||
        arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (((_x = (_i = _i.call(arr)).next), 0 === i)) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else
        for (
          ;
          !(_n = (_s = _x.call(_i)).done) &&
          (_arr.push(_s.value), _arr.length !== i);
          _n = !0
        );
    } catch (err) {
      (_d = !0), (_e = err);
    } finally {
      try {
        if (
          !_n &&
          null != _i["return"] &&
          ((_r = _i["return"]()), Object(_r) !== _r)
        )
          return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it =
    (typeof Symbol !== "undefined" && o[Symbol.iterator]) || o["@@iterator"];
  if (!it) {
    if (
      Array.isArray(o) ||
      (it = _unsupportedIterableToArray(o)) ||
      (allowArrayLike && o && typeof o.length === "number")
    ) {
      if (it) o = it;
      var i = 0;
      var F = function F() {};
      return {
        s: F,
        n: function n() {
          if (i >= o.length) return { done: true };
          return { done: false, value: o[i++] };
        },
        e: function e(_e77) {
          throw _e77;
        },
        f: F,
      };
    }
    throw new TypeError(
      "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    );
  }
  var normalCompletion = true,
    didErr = false,
    err;
  return {
    s: function s() {
      it = it.call(o);
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e78) {
      didErr = true;
      err = _e78;
    },
    f: function f() {
      try {
        if (!normalCompletion && it["return"] != null) it["return"]();
      } finally {
        if (didErr) throw err;
      }
    },
  };
}
function _toConsumableArray(arr) {
  return (
    _arrayWithoutHoles(arr) ||
    _iterableToArray(arr) ||
    _unsupportedIterableToArray(arr) ||
    _nonIterableSpread()
  );
}
function _nonIterableSpread() {
  throw new TypeError(
    "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
  );
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _iterableToArray(iter) {
  if (
    (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null) ||
    iter["@@iterator"] != null
  )
    return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, writable: true, configurable: true },
  });
  Object.defineProperty(subClass, "prototype", { writable: false });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf
    ? Object.setPrototypeOf.bind()
    : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };
  return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  }
  return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return self;
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
    return true;
  } catch (e) {
    return false;
  }
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf.bind()
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly &&
      (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })),
      keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2
      ? ownKeys(Object(source), !0).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(
          target,
          Object.getOwnPropertyDescriptors(source)
        )
      : ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(
            target,
            key,
            Object.getOwnPropertyDescriptor(source, key)
          );
        });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _regeneratorRuntime() {
  "use strict";
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime =
    function _regeneratorRuntime() {
      return exports;
    };
  var exports = {},
    Op = Object.prototype,
    hasOwn = Op.hasOwnProperty,
    defineProperty =
      Object.defineProperty ||
      function (obj, key, desc) {
        obj[key] = desc.value;
      },
    $Symbol = "function" == typeof Symbol ? Symbol : {},
    iteratorSymbol = $Symbol.iterator || "@@iterator",
    asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
    toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  function define(obj, key, value) {
    return (
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: !0,
        configurable: !0,
        writable: !0,
      }),
      obj[key]
    );
  }
  try {
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return (obj[key] = value);
    };
  }
  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator =
        outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
      generator = Object.create(protoGenerator.prototype),
      context = new Context(tryLocsList || []);
    return (
      defineProperty(generator, "_invoke", {
        value: makeInvokeMethod(innerFn, self, context),
      }),
      generator
    );
  }
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }
  exports.wrap = wrap;
  var ContinueSentinel = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
    NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype &&
    NativeIteratorPrototype !== Op &&
    hasOwn.call(NativeIteratorPrototype, iteratorSymbol) &&
    (IteratorPrototype = NativeIteratorPrototype);
  var Gp =
    (GeneratorFunctionPrototype.prototype =
    Generator.prototype =
      Object.create(IteratorPrototype));
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if ("throw" !== record.type) {
        var result = record.arg,
          value = result.value;
        return value &&
          "object" == _typeof(value) &&
          hasOwn.call(value, "__await")
          ? PromiseImpl.resolve(value.__await).then(
              function (value) {
                invoke("next", value, resolve, reject);
              },
              function (err) {
                invoke("throw", err, resolve, reject);
              }
            )
          : PromiseImpl.resolve(value).then(
              function (unwrapped) {
                (result.value = unwrapped), resolve(result);
              },
              function (error) {
                return invoke("throw", error, resolve, reject);
              }
            );
      }
      reject(record.arg);
    }
    var previousPromise;
    defineProperty(this, "_invoke", {
      value: function value(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }
        return (previousPromise = previousPromise
          ? previousPromise.then(
              callInvokeWithMethodAndArg,
              callInvokeWithMethodAndArg
            )
          : callInvokeWithMethodAndArg());
      },
    });
  }
  function makeInvokeMethod(innerFn, self, context) {
    var state = "suspendedStart";
    return function (method, arg) {
      if ("executing" === state)
        throw new Error("Generator is already running");
      if ("completed" === state) {
        if ("throw" === method) throw arg;
        return doneResult();
      }
      for (context.method = method, context.arg = arg; ; ) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }
        if ("next" === context.method)
          context.sent = context._sent = context.arg;
        else if ("throw" === context.method) {
          if ("suspendedStart" === state)
            throw ((state = "completed"), context.arg);
          context.dispatchException(context.arg);
        } else
          "return" === context.method && context.abrupt("return", context.arg);
        state = "executing";
        var record = tryCatch(innerFn, self, context);
        if ("normal" === record.type) {
          if (
            ((state = context.done ? "completed" : "suspendedYield"),
            record.arg === ContinueSentinel)
          )
            continue;
          return { value: record.arg, done: context.done };
        }
        "throw" === record.type &&
          ((state = "completed"),
          (context.method = "throw"),
          (context.arg = record.arg));
      }
    };
  }
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method,
      method = delegate.iterator[methodName];
    if (undefined === method)
      return (
        (context.delegate = null),
        ("throw" === methodName &&
          delegate.iterator["return"] &&
          ((context.method = "return"),
          (context.arg = undefined),
          maybeInvokeDelegate(delegate, context),
          "throw" === context.method)) ||
          ("return" !== methodName &&
            ((context.method = "throw"),
            (context.arg = new TypeError(
              "The iterator does not provide a '" + methodName + "' method"
            )))),
        ContinueSentinel
      );
    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type)
      return (
        (context.method = "throw"),
        (context.arg = record.arg),
        (context.delegate = null),
        ContinueSentinel
      );
    var info = record.arg;
    return info
      ? info.done
        ? ((context[delegate.resultName] = info.value),
          (context.next = delegate.nextLoc),
          "return" !== context.method &&
            ((context.method = "next"), (context.arg = undefined)),
          (context.delegate = null),
          ContinueSentinel)
        : info
      : ((context.method = "throw"),
        (context.arg = new TypeError("iterator result is not an object")),
        (context.delegate = null),
        ContinueSentinel);
  }
  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };
    1 in locs && (entry.catchLoc = locs[1]),
      2 in locs && ((entry.finallyLoc = locs[2]), (entry.afterLoc = locs[3])),
      this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    (record.type = "normal"), delete record.arg, (entry.completion = record);
  }
  function Context(tryLocsList) {
    (this.tryEntries = [{ tryLoc: "root" }]),
      tryLocsList.forEach(pushTryEntry, this),
      this.reset(!0);
  }
  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;
      if (!isNaN(iterable.length)) {
        var i = -1,
          next = function next() {
            for (; ++i < iterable.length; )
              if (hasOwn.call(iterable, i))
                return (next.value = iterable[i]), (next.done = !1), next;
            return (next.value = undefined), (next.done = !0), next;
          };
        return (next.next = next);
      }
    }
    return { next: doneResult };
  }
  function doneResult() {
    return { value: undefined, done: !0 };
  }
  return (
    (GeneratorFunction.prototype = GeneratorFunctionPrototype),
    defineProperty(Gp, "constructor", {
      value: GeneratorFunctionPrototype,
      configurable: !0,
    }),
    defineProperty(GeneratorFunctionPrototype, "constructor", {
      value: GeneratorFunction,
      configurable: !0,
    }),
    (GeneratorFunction.displayName = define(
      GeneratorFunctionPrototype,
      toStringTagSymbol,
      "GeneratorFunction"
    )),
    (exports.isGeneratorFunction = function (genFun) {
      var ctor = "function" == typeof genFun && genFun.constructor;
      return (
        !!ctor &&
        (ctor === GeneratorFunction ||
          "GeneratorFunction" === (ctor.displayName || ctor.name))
      );
    }),
    (exports.mark = function (genFun) {
      return (
        Object.setPrototypeOf
          ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype)
          : ((genFun.__proto__ = GeneratorFunctionPrototype),
            define(genFun, toStringTagSymbol, "GeneratorFunction")),
        (genFun.prototype = Object.create(Gp)),
        genFun
      );
    }),
    (exports.awrap = function (arg) {
      return { __await: arg };
    }),
    defineIteratorMethods(AsyncIterator.prototype),
    define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
      return this;
    }),
    (exports.AsyncIterator = AsyncIterator),
    (exports.async = function (
      innerFn,
      outerFn,
      self,
      tryLocsList,
      PromiseImpl
    ) {
      void 0 === PromiseImpl && (PromiseImpl = Promise);
      var iter = new AsyncIterator(
        wrap(innerFn, outerFn, self, tryLocsList),
        PromiseImpl
      );
      return exports.isGeneratorFunction(outerFn)
        ? iter
        : iter.next().then(function (result) {
            return result.done ? result.value : iter.next();
          });
    }),
    defineIteratorMethods(Gp),
    define(Gp, toStringTagSymbol, "Generator"),
    define(Gp, iteratorSymbol, function () {
      return this;
    }),
    define(Gp, "toString", function () {
      return "[object Generator]";
    }),
    (exports.keys = function (val) {
      var object = Object(val),
        keys = [];
      for (var key in object) keys.push(key);
      return (
        keys.reverse(),
        function next() {
          for (; keys.length; ) {
            var key = keys.pop();
            if (key in object)
              return (next.value = key), (next.done = !1), next;
          }
          return (next.done = !0), next;
        }
      );
    }),
    (exports.values = values),
    (Context.prototype = {
      constructor: Context,
      reset: function reset(skipTempReset) {
        if (
          ((this.prev = 0),
          (this.next = 0),
          (this.sent = this._sent = undefined),
          (this.done = !1),
          (this.delegate = null),
          (this.method = "next"),
          (this.arg = undefined),
          this.tryEntries.forEach(resetTryEntry),
          !skipTempReset)
        )
          for (var name in this)
            "t" === name.charAt(0) &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1)) &&
              (this[name] = undefined);
      },
      stop: function stop() {
        this.done = !0;
        var rootRecord = this.tryEntries[0].completion;
        if ("throw" === rootRecord.type) throw rootRecord.arg;
        return this.rval;
      },
      dispatchException: function dispatchException(exception) {
        if (this.done) throw exception;
        var context = this;
        function handle(loc, caught) {
          return (
            (record.type = "throw"),
            (record.arg = exception),
            (context.next = loc),
            caught && ((context.method = "next"), (context.arg = undefined)),
            !!caught
          );
        }
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i],
            record = entry.completion;
          if ("root" === entry.tryLoc) return handle("end");
          if (entry.tryLoc <= this.prev) {
            var hasCatch = hasOwn.call(entry, "catchLoc"),
              hasFinally = hasOwn.call(entry, "finallyLoc");
            if (hasCatch && hasFinally) {
              if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
              if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
            } else if (hasCatch) {
              if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            } else {
              if (!hasFinally)
                throw new Error("try statement without catch or finally");
              if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
            }
          }
        }
      },
      abrupt: function abrupt(type, arg) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (
            entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc
          ) {
            var finallyEntry = entry;
            break;
          }
        }
        finallyEntry &&
          ("break" === type || "continue" === type) &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc &&
          (finallyEntry = null);
        var record = finallyEntry ? finallyEntry.completion : {};
        return (
          (record.type = type),
          (record.arg = arg),
          finallyEntry
            ? ((this.method = "next"),
              (this.next = finallyEntry.finallyLoc),
              ContinueSentinel)
            : this.complete(record)
        );
      },
      complete: function complete(record, afterLoc) {
        if ("throw" === record.type) throw record.arg;
        return (
          "break" === record.type || "continue" === record.type
            ? (this.next = record.arg)
            : "return" === record.type
            ? ((this.rval = this.arg = record.arg),
              (this.method = "return"),
              (this.next = "end"))
            : "normal" === record.type && afterLoc && (this.next = afterLoc),
          ContinueSentinel
        );
      },
      finish: function finish(finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.finallyLoc === finallyLoc)
            return (
              this.complete(entry.completion, entry.afterLoc),
              resetTryEntry(entry),
              ContinueSentinel
            );
        }
      },
      catch: function _catch(tryLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc === tryLoc) {
            var record = entry.completion;
            if ("throw" === record.type) {
              var thrown = record.arg;
              resetTryEntry(entry);
            }
            return thrown;
          }
        }
        throw new Error("illegal catch attempt");
      },
      delegateYield: function delegateYield(iterable, resultName, nextLoc) {
        return (
          (this.delegate = {
            iterator: values(iterable),
            resultName: resultName,
            nextLoc: nextLoc,
          }),
          "next" === this.method && (this.arg = undefined),
          ContinueSentinel
        );
      },
    }),
    exports
  );
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _typeof(obj) {
  "@babel/helpers - typeof";
  return (
    (_typeof =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (obj) {
            return typeof obj;
          }
        : function (obj) {
            return obj &&
              "function" == typeof Symbol &&
              obj.constructor === Symbol &&
              obj !== Symbol.prototype
              ? "symbol"
              : typeof obj;
          }),
    _typeof(obj)
  );
}
!(function (t) {
  if (
    "object" ==
      (typeof exports === "undefined" ? "undefined" : _typeof(exports)) &&
    "undefined" != typeof module
  )
    module.exports = t();
  else if ("function" == typeof define && define.amd) define([], t);
  else {
    ("undefined" != typeof window
      ? window
      : "undefined" != typeof global
      ? global
      : "undefined" != typeof self
      ? self
      : this
    ).nlpjs = t();
  }
})(function () {
  return (function t(e, s, n) {
    function i(o, a) {
      if (!s[o]) {
        if (!e[o]) {
          var u = "function" == typeof require && require;
          if (!a && u) return u(o, !0);
          if (r) return r(o, !0);
          var c = new Error("Cannot find module '" + o + "'");
          throw ((c.code = "MODULE_NOT_FOUND"), c);
        }
        var l = (s[o] = {
          exports: {},
        });
        e[o][0].call(
          l.exports,
          function (t) {
            return i(e[o][1][t] || t);
          },
          l,
          l.exports,
          t,
          e,
          s,
          n
        );
      }
      return s[o].exports;
    }
    for (
      var r = "function" == typeof require && require, o = 0;
      o < n.length;
      o++
    )
      i(n[o]);
    return i;
  })(
    {
      1: [
        function (t, e, s) {
          var _t = t("@nlpjs/core"),
            n = _t.containerBootstrap,
            _t2 = t("@nlpjs/nlp"),
            i = _t2.Nlp,
            _t3 = t("@nlpjs/lang-en-min"),
            r = _t3.LangEn,
            _t4 = t("@nlpjs/request-rn"),
            o = _t4.fs;
          e.exports = {
            containerBootstrap: n,
            Nlp: i,
            LangEn: r,
            fs: o,
          };
        },
        {
          "@nlpjs/core": 12,
          "@nlpjs/lang-en-min": 23,
          "@nlpjs/nlp": 51,
          "@nlpjs/request-rn": 59,
        },
      ],
      2: [
        function (t, e, s) {
          e.exports = /*#__PURE__*/ (function () {
            function _class(t, e, s, n, i) {
              _classCallCheck(this, _class);
              (this.s_size = t.length),
                (this.s = t),
                (this.substring_i = e),
                (this.result = s),
                (this.method = n),
                (this.instance = i);
            }
            return _createClass(_class);
          })();
        },
        {},
      ],
      3: [
        function (t, e, s) {
          var _t5 = t("./container"),
            n = _t5.defaultContainer;
          var i = /*#__PURE__*/ (function () {
            function i() {
              var t =
                arguments.length > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : n;
              _classCallCheck(this, i);
              (this.container = t.container || t), (this.name = "arrToObj");
            }
            _createClass(
              i,
              [
                {
                  key: "run",
                  value: function run(t) {
                    return Array.isArray(t)
                      ? i.arrToObj(t)
                      : ((t.tokens = i.arrToObj(t.tokens)), t);
                  },
                },
              ],
              [
                {
                  key: "arrToObj",
                  value: function arrToObj(t) {
                    var e = {};
                    for (var _s = 0; _s < t.length; _s += 1) e[t[_s]] = 1;
                    return e;
                  },
                },
              ]
            );
            return i;
          })();
          e.exports = i;
        },
        {
          "./container": 7,
        },
      ],
      4: [
        function (t, e, s) {
          var _t6 = t("./container"),
            n = _t6.defaultContainer,
            i = t("./tokenizer");
          e.exports = /*#__PURE__*/ (function () {
            function _class2() {
              var t =
                arguments.length > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : n;
              var e = arguments.length > 1 ? arguments[1] : undefined;
              _classCallCheck(this, _class2);
              (this.container = t.container || t),
                (this.cache = {}),
                this.setCurrent(""),
                (this.dictionary = e || {
                  before: {},
                  after: {},
                });
            }
            _createClass(_class2, [
              {
                key: "setCurrent",
                value: function setCurrent(t) {
                  (this.current = t),
                    (this.cursor = 0),
                    (this.limit = this.current.length),
                    (this.limit_backward = 0),
                    (this.bra = this.cursor),
                    (this.ket = this.limit);
                },
              },
              {
                key: "getCurrent",
                value: function getCurrent() {
                  return this.current;
                },
              },
              {
                key: "bc",
                value: function bc(t, e) {
                  return 0 == (t[e >>> 3] & (1 << (7 & e)));
                },
              },
              {
                key: "in_grouping",
                value: function in_grouping(t, e, s) {
                  if (this.cursor >= this.limit) return !1;
                  var n = this.current.charCodeAt(this.cursor);
                  return (
                    !(n > s || n < e) &&
                    ((n -= e), !this.bc(t, n) && (this.cursor++, !0))
                  );
                },
              },
              {
                key: "in_grouping_b",
                value: function in_grouping_b(t, e, s) {
                  if (this.cursor <= this.limit_backward) return !1;
                  var n = this.current.charCodeAt(this.cursor - 1);
                  return (
                    !(n > s || n < e) &&
                    ((n -= e), !this.bc(t, n) && (this.cursor--, !0))
                  );
                },
              },
              {
                key: "out_grouping",
                value: function out_grouping(t, e, s) {
                  if (this.cursor >= this.limit) return !1;
                  var n = this.current.charCodeAt(this.cursor);
                  return n > s || n < e
                    ? (this.cursor++, !0)
                    : ((n -= e), !!this.bc(t, n) && (this.cursor++, !0));
                },
              },
              {
                key: "out_grouping_b",
                value: function out_grouping_b(t, e, s) {
                  if (this.cursor <= this.limit_backward) return !1;
                  var n = this.current.charCodeAt(this.cursor - 1);
                  return n > s || n < e
                    ? (this.cursor--, !0)
                    : ((n -= e), !!this.bc(t, n) && (this.cursor--, !0));
                },
              },
              {
                key: "eq_s",
                value: function eq_s(t, e) {
                  return (
                    "string" == typeof t && (t = (e = t).length),
                    !(
                      this.limit - this.cursor < t ||
                      this.current.slice(this.cursor, this.cursor + t) != e
                    ) && ((this.cursor += t), !0)
                  );
                },
              },
              {
                key: "eq_s_b",
                value: function eq_s_b(t, e) {
                  return (
                    "string" == typeof t && (t = (e = t).length),
                    !(
                      this.cursor - this.limit_backward < t ||
                      this.current.slice(this.cursor - t, this.cursor) != e
                    ) && ((this.cursor -= t), !0)
                  );
                },
              },
              {
                key: "find_among",
                value: function find_among(t, e) {
                  var s = 0,
                    n = e || t.length;
                  var i = this.cursor,
                    r = this.limit;
                  var o = 0,
                    a = 0,
                    u = !1;
                  for (;;) {
                    var _e = s + ((n - s) >>> 1);
                    var h = 0,
                      g = o < a ? o : a;
                    var c,
                      l = t[_e];
                    for (c = g; c < l.s_size; c++) {
                      if (i + g == r) {
                        h = -1;
                        break;
                      }
                      if (
                        ((h =
                          this.current.charCodeAt(i + g) - l.s.charCodeAt(c)),
                        0 != h)
                      )
                        break;
                      g++;
                    }
                    if (
                      (h < 0 ? ((n = _e), (a = g)) : ((s = _e), (o = g)),
                      n - s <= 1)
                    ) {
                      if (s > 0) break;
                      if (n == s) break;
                      if (u) break;
                      u = !0;
                    }
                  }
                  for (;;) {
                    if (o >= (l = t[s]).s_size) {
                      if (((this.cursor = i + l.s_size), null == l.method))
                        return l.result;
                      var _t7 = l.method(l.instance);
                      if (((this.cursor = i + l.s_size), _t7)) return l.result;
                    }
                    if (((s = l.substring_i), s < 0)) return 0;
                  }
                  return -1;
                },
              },
              {
                key: "find_among_b",
                value: function find_among_b(t, e) {
                  var s = 0,
                    n = e || t.length;
                  var i = this.cursor,
                    r = this.limit_backward;
                  var o = 0,
                    a = 0,
                    u = !1;
                  for (;;) {
                    var _e2 = s + ((n - s) >> 1);
                    var h = 0,
                      g = o < a ? o : a;
                    var c;
                    for (c = (l = t[_e2]).s_size - 1 - g; c >= 0; c--) {
                      if (i - g == r) {
                        h = -1;
                        break;
                      }
                      if (
                        ((h =
                          this.current.charCodeAt(i - 1 - g) -
                          l.s.charCodeAt(c)),
                        0 != h)
                      )
                        break;
                      g++;
                    }
                    if (
                      (h < 0 ? ((n = _e2), (a = g)) : ((s = _e2), (o = g)),
                      n - s <= 1)
                    ) {
                      if (s > 0) break;
                      if (n == s) break;
                      if (u) break;
                      u = !0;
                    }
                  }
                  for (;;) {
                    var l;
                    if (o >= (l = t[s]).s_size) {
                      if (((this.cursor = i - l.s_size), null == l.method))
                        return l.result;
                      var _t8 = l.method(this);
                      if (((this.cursor = i - l.s_size), _t8)) return l.result;
                    }
                    if (((s = l.substring_i), s < 0)) return 0;
                  }
                  return -1;
                },
              },
              {
                key: "replace_s",
                value: function replace_s(t, e, s) {
                  var n = s.length - (e - t);
                  return (
                    (this.current =
                      this.current.slice(0, t) + s + this.current.slice(e)),
                    (this.limit += n),
                    this.cursor >= e
                      ? (this.cursor += n)
                      : this.cursor > t && (this.cursor = t),
                    n
                  );
                },
              },
              {
                key: "slice_check",
                value: function slice_check() {
                  return !(
                    this.bra < 0 ||
                    this.bra > this.ket ||
                    this.ket > this.limit ||
                    this.limit > this.current.length
                  );
                },
              },
              {
                key: "slice_from",
                value: function slice_from(t) {
                  return (
                    !!this.slice_check() &&
                    (this.replace_s(this.bra, this.ket, t), !0)
                  );
                },
              },
              {
                key: "slice_del",
                value: function slice_del() {
                  return this.slice_from("");
                },
              },
              {
                key: "insert",
                value: function insert(t, e, s) {
                  var n = this.replace_s(t, e, s);
                  t <= this.bra && (this.bra += n),
                    t <= this.ket && (this.ket += n);
                },
              },
              {
                key: "slice_to",
                value: function slice_to(t) {
                  var e = "";
                  return (
                    this.slice_check() &&
                      (e = this.current.slice(this.bra, this.ket)),
                    e
                  );
                },
              },
              {
                key: "stemWord",
                value: function stemWord(t) {
                  var e = this.cache[".".concat(t)];
                  return (
                    null == e &&
                      (this.dictionary.before.hasOwnProperty(t)
                        ? (e = this.dictionary.before[t])
                        : (this.setCurrent(t),
                          this.innerStem(),
                          (e = this.getCurrent()),
                          this.dictionary.after.hasOwnProperty(e) &&
                            (e = this.dictionary.after[e])),
                      (this.cache[".".concat(t)] = e)),
                    e
                  );
                },
              },
              {
                key: "stemWords",
                value: function stemWords(t) {
                  var e = [];
                  for (var _s2 = 0; _s2 < t.length; _s2++) {
                    var _n = this.stemWord(t[_s2]);
                    _n && e.push(_n.trim());
                  }
                  return e;
                },
              },
              {
                key: "stem",
                value: function stem(t) {
                  return null == t
                    ? t
                    : Array.isArray(t)
                    ? this.stemWords(t)
                    : this.stemWords([t])[0];
                },
              },
              {
                key: "getTokenizer",
                value: function getTokenizer() {
                  return (
                    this.tokenizer ||
                      (this.tokenizer =
                        this.container.get(
                          "tokenizer-".concat(this.name.slice(-2))
                        ) || new i()),
                    this.tokenizer
                  );
                },
              },
              {
                key: "getStopwords",
                value: function getStopwords() {
                  return (
                    this.stopwords ||
                      (this.stopwords = this.container.get(
                        "tokenizer-".concat(this.name.slice(-2))
                      )),
                    this.stopwords
                  );
                },
              },
              {
                key: "tokenizeAndStem",
                value: function tokenizeAndStem(t) {
                  var e =
                    arguments.length > 1 && arguments[1] !== undefined
                      ? arguments[1]
                      : !0;
                  var s = this.getTokenizer().tokenize(t, !0);
                  if (!e) {
                    var _t9 = this.getStopwords();
                    _t9 && (s = _t9.removeStopwords(s));
                  }
                  return this.stemWords(s);
                },
              },
            ]);
            return _class2;
          })();
        },
        {
          "./container": 7,
          "./tokenizer": 21,
        },
      ],
      5: [
        function (t, e, s) {
          var _t10 = t("./container"),
            n = _t10.defaultContainer;
          e.exports = /*#__PURE__*/ (function () {
            function _class3() {
              var t =
                arguments.length > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : {};
              var e =
                arguments.length > 1 && arguments[1] !== undefined
                  ? arguments[1]
                  : n;
              _classCallCheck(this, _class3);
              (this.container = t.container || e), this.applySettings(this, t);
            }
            _createClass(_class3, [
              {
                key: "logger",
                get: function get() {
                  return this.container.get("logger");
                },
              },
              {
                key: "applySettings",
                value: function applySettings(t) {
                  var e =
                    arguments.length > 1 && arguments[1] !== undefined
                      ? arguments[1]
                      : {};
                  var s = t || {};
                  return (
                    Object.keys(e).forEach(function (t) {
                      void 0 === s[t] && (s[t] = e[t]);
                    }),
                    s
                  );
                },
              },
              {
                key: "toJSON",
                value: function toJSON() {
                  var t = this.jsonExport || {},
                    e = {},
                    s = Object.keys(this);
                  for (var _n2 = 0; _n2 < s.length; _n2 += 1) {
                    var i = s[_n2];
                    if (
                      "jsonExport" !== i &&
                      "jsonImport" !== i &&
                      "container" !== i &&
                      !i.startsWith("pipeline")
                    ) {
                      var _s3 = void 0 === t[i] || t[i];
                      if ("function" == typeof _s3) {
                        var _t11 = _s3.bind(this)(e, this, i, this[i]);
                        _t11 && (e[i] = _t11);
                      } else
                        "boolean" == typeof _s3
                          ? _s3 &&
                            ((e[i] = this[i]),
                            "settings" === i && delete e[i].container)
                          : "string" == typeof _s3 && (e[_s3] = this[i]);
                    }
                  }
                  return e;
                },
              },
              {
                key: "fromJSON",
                value: function fromJSON(t) {
                  var e = this.jsonImport || {},
                    s = Object.keys(t);
                  for (var _n3 = 0; _n3 < s.length; _n3 += 1) {
                    var i = s[_n3],
                      r = void 0 === e[i] || e[i];
                    if ("function" == typeof r) {
                      var _e3 = r.bind(this)(this, t, i, t[i]);
                      _e3 && (this[i] = _e3);
                    } else
                      "boolean" == typeof r
                        ? r && (this[i] = t[i])
                        : "string" == typeof r && (this[r] = t[i]);
                  }
                },
              },
              {
                key: "objToValues",
                value: function objToValues(t, e) {
                  var s = e || Object.keys(t),
                    n = [];
                  for (var _e4 = 0; _e4 < s.length; _e4 += 1) n.push(t[s[_e4]]);
                  return n;
                },
              },
              {
                key: "valuesToObj",
                value: function valuesToObj(t, e) {
                  var s = {};
                  for (var _n4 = 0; _n4 < t.length; _n4 += 1)
                    s[e[_n4]] = t[_n4];
                  return s;
                },
              },
              {
                key: "getPipeline",
                value: function getPipeline(t) {
                  return this.container.getPipeline(t);
                },
              },
              {
                key: "runPipeline",
                value: (function () {
                  var _runPipeline = _asyncToGenerator(
                    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee(
                      t,
                      e
                    ) {
                      return _regeneratorRuntime().wrap(
                        function _callee$(_context) {
                          while (1)
                            switch ((_context.prev = _context.next)) {
                              case 0:
                                return _context.abrupt(
                                  "return",
                                  this.container.runPipeline(
                                    e || this.pipeline,
                                    t,
                                    this
                                  )
                                );
                              case 1:
                              case "end":
                                return _context.stop();
                            }
                        },
                        _callee,
                        this
                      );
                    })
                  );
                  function runPipeline(_x, _x2) {
                    return _runPipeline.apply(this, arguments);
                  }
                  return runPipeline;
                })(),
              },
              {
                key: "use",
                value: function use(t) {
                  this.container.use(t);
                },
              },
            ]);
            return _class3;
          })();
        },
        {
          "./container": 7,
        },
      ],
      6: [
        function (t, e, s) {
          (function (s) {
            (function () {
              var n = t("./arr-to-obj"),
                _t12 = t("./container"),
                i = _t12.Container,
                r = t("./normalizer"),
                o = t("./obj-to-arr"),
                _t13 = t("./helper"),
                a = _t13.loadEnvFromJson,
                u = t("./stemmer"),
                c = t("./stopwords"),
                l = t("./tokenizer"),
                h = t("./timer"),
                g = t("./logger"),
                f = t("./memory-storage"),
                p = t("./mock-fs");
              function d(t, e) {
                if ("string" == typeof t)
                  return t.startsWith("$")
                    ? s.env["".concat(e).concat(t.slice(1))] ||
                        s.env[t.slice(1)]
                    : t;
                if (Array.isArray(t))
                  return t.map(function (t) {
                    return d(t, e);
                  });
                if ("object" == _typeof(t)) {
                  var _s4 = Object.keys(t),
                    _n5 = {};
                  for (var _i = 0; _i < _s4.length; _i += 1)
                    _n5[_s4[_i]] = d(t[_s4[_i]], e);
                  return _n5;
                }
                return t;
              }
              e.exports = function (t, e, s, m, y, w) {
                var b = t || {},
                  x = s || new i(m);
                (x.parent = w),
                  m ||
                    (x.register("fs", p),
                    x.use(n),
                    x.use(r),
                    x.use(o),
                    x.use(u),
                    x.use(c),
                    x.use(l),
                    x.use(h),
                    x.use(g),
                    x.use(f));
                var D = b;
                var v;
                if (
                  (b.env && a(m, b.env),
                  (v = D),
                  (v = d(v, m ? "".concat(m, "_") : "")),
                  v.settings)
                ) {
                  var _t14 = Object.keys(v.settings);
                  for (var _e5 = 0; _e5 < _t14.length; _e5 += 1)
                    x.registerConfiguration(
                      _t14[_e5],
                      v.settings[_t14[_e5]],
                      !0
                    );
                }
                if (v.use)
                  for (var _t15 = 0; _t15 < v.use.length; _t15 += 1) {
                    var _e6 = v.use[_t15];
                    Array.isArray(_e6)
                      ? x.register(_e6[0], _e6[1])
                      : x.use(_e6);
                  }
                if (v.terraform)
                  for (var _t16 = 0; _t16 < v.terraform.length; _t16 += 1) {
                    var _e7 = v.terraform[_t16],
                      _s5 = x.get(_e7.className);
                    x.register(_e7.name, _s5, !0);
                  }
                if ((v.childs && (x.childs = v.childs), y))
                  for (var _t17 = 0; _t17 < y.length; _t17 += 1) {
                    var _e8 = y[_t17];
                    x.registerPipeline(_e8.tag, _e8.pipeline, _e8.overwrite);
                  }
                return (
                  v.pipelines &&
                    (function (t, e) {
                      t.loadPipelinesFromString(e);
                    })(x, v.pipelines),
                  x
                );
              };
            }.call(this));
          }.call(this, t("_process")));
        },
        {
          "./arr-to-obj": 3,
          "./container": 7,
          "./helper": 11,
          "./logger": 13,
          "./memory-storage": 14,
          "./mock-fs": 15,
          "./normalizer": 16,
          "./obj-to-arr": 17,
          "./stemmer": 18,
          "./stopwords": 19,
          "./timer": 20,
          "./tokenizer": 21,
          _process: 100,
        },
      ],
      7: [
        function (t, e, s) {
          var _t18 = t("./helper"),
            n = _t18.compareWildcars,
            i = t("./default-compiler"),
            r = t("./logger");
          var o = /*#__PURE__*/ (function () {
            function o() {
              var t =
                arguments.length > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : !1;
              _classCallCheck(this, o);
              (this.classes = {}),
                (this.factory = {}),
                (this.pipelines = {}),
                (this.configurations = {}),
                (this.compilers = {}),
                (this.cache = {
                  bestKeys: {},
                  pipelines: {},
                }),
                this.registerCompiler(i),
                t || this.use(r);
            }
            _createClass(o, [
              {
                key: "registerCompiler",
                value: function registerCompiler(t, e) {
                  var s = new t(this);
                  this.compilers[e || s.name] = s;
                },
              },
              {
                key: "addClass",
                value: function addClass(t, e) {
                  this.classes[e || t.name] = t;
                },
              },
              {
                key: "toJSON",
                value: function toJSON(t) {
                  var e = t.toJSON ? t.toJSON() : _objectSpread({}, t);
                  return (e.className = t.constructor.name), e;
                },
              },
              {
                key: "fromJSON",
                value: function fromJSON(t, e) {
                  var s = this.classes[t.className];
                  var n;
                  return (
                    s
                      ? ((n = new s(e)),
                        n.fromJSON ? n.fromJSON(t) : Object.assign(n, t))
                      : (n = _objectSpread({}, t)),
                    delete n.className,
                    n
                  );
                },
              },
              {
                key: "register",
                value: function register(t, e) {
                  var s =
                    arguments.length > 2 && arguments[2] !== undefined
                      ? arguments[2]
                      : !0;
                  this.cache.bestKeys = {};
                  var n = "function" == typeof e,
                    i = {
                      name: t,
                      isSingleton: s,
                    };
                  (i.instance = s ? (n ? new e() : e) : n ? e : e.constructor),
                    (this.factory[t] = i);
                },
              },
              {
                key: "getBestKey",
                value: function getBestKey(t) {
                  if (void 0 !== this.cache.bestKeys[t])
                    return this.cache.bestKeys[t];
                  var e = Object.keys(this.factory);
                  for (var _s6 = 0; _s6 < e.length; _s6 += 1)
                    if (n(t, e[_s6]))
                      return (this.cache.bestKeys[t] = e[_s6]), e[_s6];
                  this.cache.bestKeys[t] = null;
                },
              },
              {
                key: "get",
                value: function get(t, e) {
                  var s = this.factory[t];
                  if (!s) {
                    if (this.parent) return this.parent.get(t, e);
                    var _n6 = this.getBestKey(t);
                    if ((_n6 && (s = this.factory[_n6]), !s)) return;
                  }
                  if (s.isSingleton)
                    return (
                      s.instance &&
                        s.instance.applySettings &&
                        s.instance.applySettings(s.instance.settings, e),
                      s.instance
                    );
                  return new (0, s.instance)(e, this);
                },
              },
              {
                key: "buildLiteral",
                value: function buildLiteral(t, e, s, n) {
                  return {
                    type: "literal",
                    subtype: t,
                    src: e,
                    value: s,
                    context: n,
                    container: this,
                  };
                },
              },
              {
                key: "resolvePathWithType",
                value: function resolvePathWithType(t, e, s, n) {
                  var i = t.split(".");
                  var r = i[0].trim();
                  r || (r = t.startsWith(".") ? "this" : "context");
                  if (/^\d+$/.test(r))
                    return this.buildLiteral("number", t, parseFloat(r), e);
                  if (r.startsWith('"'))
                    return this.buildLiteral(
                      "string",
                      t,
                      r.replace(/^"(.+(?="$))"$/, "$1"),
                      e
                    );
                  if (r.startsWith("'"))
                    return this.buildLiteral(
                      "string",
                      t,
                      r.replace(/^'(.+(?='$))'$/, "$1"),
                      e
                    );
                  if ("true" === r)
                    return this.buildLiteral("boolean", t, !0, e);
                  if ("false" === r)
                    return this.buildLiteral("boolean", t, !1, e);
                  var _o = e;
                  "input" === r || "output" === r
                    ? (_o = s)
                    : r && "context" !== r && "this" !== r
                    ? (_o = this.get(r) || _o[r])
                    : "this" === r && (_o = n);
                  for (var _e9 = 1; _e9 < i.length; _e9 += 1) {
                    var _s7 = i[_e9];
                    if ((!_o || !_o[_s7]) && _e9 < i.length - 1)
                      throw Error(
                        'Path not found in pipeline "'.concat(t, '"')
                      );
                    var _n7 = _o;
                    (_o = _o[_s7]),
                      "function" == typeof _o && (_o = _o.bind(_n7));
                  }
                  return "function" == typeof _o
                    ? {
                        type: "function",
                        src: t,
                        value: _o,
                        context: e,
                        container: this,
                      }
                    : {
                        type: "reference",
                        src: t,
                        value: _o,
                        context: e,
                        container: this,
                      };
                },
              },
              {
                key: "resolvePath",
                value: function resolvePath(t, e, s, n) {
                  var i = this.resolvePathWithType(t, e, s, n);
                  return i ? i.value : i;
                },
              },
              {
                key: "setValue",
                value: function setValue(t, e, s, n, i) {
                  var r = this.resolvePath(e, s, n, i),
                    _o2 = t.split("."),
                    a = _o2.slice(0, -1).join(".");
                  this.resolvePath(a, s, n, i)[_o2[_o2.length - 1]] = r;
                },
              },
              {
                key: "incValue",
                value: function incValue(t, e, s, n, i) {
                  var r = this.resolvePath(e, s, n, i),
                    _o3 = t.split(".");
                  t.startsWith(".") && _o3.push("this");
                  var a = _o3.slice(0, -1).join(".");
                  this.resolvePath(a, s, n, i)[_o3[_o3.length - 1]] += r;
                },
              },
              {
                key: "decValue",
                value: function decValue(t, e, s, n, i) {
                  var r = this.resolvePath(e, s, n, i),
                    _o4 = t.split("."),
                    a = _o4.slice(0, -1).join(".");
                  this.resolvePath(a, s, n, i)[_o4[_o4.length - 1]] -= r;
                },
              },
              {
                key: "eqValue",
                value: function eqValue(t, e, s, n, i) {
                  var r = s,
                    _o5 = this.resolvePath(t, r, n, i),
                    a = this.resolvePath(e, r, n, i);
                  r.floating = _o5 === a;
                },
              },
              {
                key: "neqValue",
                value: function neqValue(t, e, s, n, i) {
                  var r = s,
                    _o6 = this.resolvePath(t, r, n, i),
                    a = this.resolvePath(e, r, n, i);
                  r.floating = _o6 !== a;
                },
              },
              {
                key: "gtValue",
                value: function gtValue(t, e, s, n, i) {
                  var r = s,
                    _o7 = this.resolvePath(t, r, n, i),
                    a = this.resolvePath(e, r, n, i);
                  r.floating = _o7 > a;
                },
              },
              {
                key: "geValue",
                value: function geValue(t, e, s, n, i) {
                  var r = s,
                    _o8 = this.resolvePath(t, r, n, i),
                    a = this.resolvePath(e, r, n, i);
                  r.floating = _o8 >= a;
                },
              },
              {
                key: "ltValue",
                value: function ltValue(t, e, s, n, i) {
                  var r = s,
                    _o9 = this.resolvePath(t, r, n, i),
                    a = this.resolvePath(e, r, n, i);
                  r.floating = _o9 < a;
                },
              },
              {
                key: "leValue",
                value: function leValue(t, e, s, n, i) {
                  var r = s,
                    _o10 = this.resolvePath(t, r, n, i),
                    a = this.resolvePath(e, r, n, i);
                  r.floating = _o10 <= a;
                },
              },
              {
                key: "deleteValue",
                value: function deleteValue(t, e, s, n) {
                  var i = t.split("."),
                    r = i.slice(0, -1).join(".");
                  delete this.resolvePath(r, e, s, n)[i[i.length - 1]];
                },
              },
              {
                key: "getValue",
                value: function getValue(t, e, s, n) {
                  var i = (t || "floating").split("."),
                    r = i.slice(0, -1).join(".");
                  return this.resolvePath(r, e, s, n)[i[i.length - 1]];
                },
              },
              {
                key: "runPipeline",
                value: (function () {
                  var _runPipeline2 = _asyncToGenerator(
                    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee2(
                      t,
                      e,
                      s
                    ) {
                      var n,
                        i,
                        _t19,
                        _r,
                        _args2 = arguments;
                      return _regeneratorRuntime().wrap(
                        function _callee2$(_context2) {
                          while (1)
                            switch ((_context2.prev = _context2.next)) {
                              case 0:
                                n =
                                  _args2.length > 3 && _args2[3] !== undefined
                                    ? _args2[3]
                                    : 0;
                                if (!(n > 10)) {
                                  _context2.next = 3;
                                  break;
                                }
                                throw new Error(
                                  "Pipeline depth is too high: perhaps you are using recursive pipelines?"
                                );
                              case 3:
                                i =
                                  "string" == typeof t
                                    ? this.getPipeline(t)
                                    : t;
                                if (i) {
                                  _context2.next = 6;
                                  break;
                                }
                                throw new Error(
                                  "Pipeline not found ".concat(t)
                                );
                              case 6:
                                if (i.compiler) {
                                  _context2.next = 11;
                                  break;
                                }
                                _t19 = JSON.stringify(i);
                                this.registerPipeline(_t19, i, !1);
                                _r = this.getPipeline(_t19);
                                return _context2.abrupt(
                                  "return",
                                  _r.compiler.execute(_r.compiled, e, s, n)
                                );
                              case 11:
                                return _context2.abrupt(
                                  "return",
                                  i.compiler.execute(i.compiled, e, s, n)
                                );
                              case 12:
                              case "end":
                                return _context2.stop();
                            }
                        },
                        _callee2,
                        this
                      );
                    })
                  );
                  function runPipeline(_x3, _x4, _x5) {
                    return _runPipeline2.apply(this, arguments);
                  }
                  return runPipeline;
                })(),
              },
              {
                key: "use",
                value: function use(t, e, s) {
                  var n =
                    arguments.length > 3 && arguments[3] !== undefined
                      ? arguments[3]
                      : !1;
                  var i;
                  if ("function" == typeof t) {
                    if (t.name.endsWith("Compiler"))
                      return this.registerCompiler(t), t.name;
                    i = new t({
                      container: this,
                    });
                  } else i = t;
                  i.register && i.register(this);
                  var r = i.settings ? i.settings.tag : void 0,
                    _o11 = e || i.name || r || t.name || i.constructor.name;
                  return (
                    (n && this.get(_o11)) || this.register(_o11, i, s), _o11
                  );
                },
              },
              {
                key: "getCompiler",
                value: function getCompiler(t) {
                  var e = this.compilers[t];
                  return (
                    e ||
                    (this.parent
                      ? this.parent.getCompiler(t)
                      : this.compilers["default"])
                  );
                },
              },
              {
                key: "buildPipeline",
                value: function buildPipeline(t) {
                  var e =
                    arguments.length > 1 && arguments[1] !== undefined
                      ? arguments[1]
                      : [];
                  var s = [];
                  if (t && t.length > 0)
                    for (var _n8 = 0; _n8 < t.length; _n8 += 1) {
                      var _i2 = t[_n8];
                      if ("$super" === _i2.trim())
                        for (var _t20 = 0; _t20 < e.length; _t20 += 1) {
                          e[_t20].trim().startsWith("->") || s.push(e[_t20]);
                        }
                      else s.push(_i2);
                    }
                  var n =
                      s.length && s[0].startsWith("// compiler=")
                        ? s[0].slice(12)
                        : "default",
                    i = this.getCompiler(n),
                    r = i.compile(s);
                  return {
                    pipeline: s,
                    compiler: i,
                    compiled: r,
                  };
                },
              },
              {
                key: "registerPipeline",
                value: function registerPipeline(t, e) {
                  var s =
                    arguments.length > 2 && arguments[2] !== undefined
                      ? arguments[2]
                      : !0;
                  if (s || !this.pipelines[t]) {
                    this.cache.pipelines = {};
                    var _s8 = this.getPipeline(t);
                    this.pipelines[t] = this.buildPipeline(
                      e,
                      _s8 ? _s8.pipeline : []
                    );
                  }
                },
              },
              {
                key: "registerPipelineForChilds",
                value: function registerPipelineForChilds(t, e, s) {
                  var n =
                    arguments.length > 3 && arguments[3] !== undefined
                      ? arguments[3]
                      : !0;
                  this.childPipelines || (this.childPipelines = {}),
                    this.childPipelines[t] || (this.childPipelines[t] = []),
                    this.childPipelines[t].push({
                      tag: e,
                      pipeline: s,
                      overwrite: n,
                    });
                },
              },
              {
                key: "getPipeline",
                value: function getPipeline(t) {
                  if (this.pipelines[t]) return this.pipelines[t];
                  if (void 0 !== this.cache.pipelines[t])
                    return this.cache.pipelines[t] || void 0;
                  var e = Object.keys(this.pipelines);
                  for (var _s9 = 0; _s9 < e.length; _s9 += 1)
                    if (n(t, e[_s9]))
                      return (
                        (this.cache.pipelines[t] = this.pipelines[e[_s9]]),
                        this.pipelines[e[_s9]]
                      );
                  this.cache.pipelines[t] = null;
                },
              },
              {
                key: "registerConfiguration",
                value: function registerConfiguration(t, e) {
                  var s =
                    arguments.length > 2 && arguments[2] !== undefined
                      ? arguments[2]
                      : !0;
                  (!s && this.configurations[t]) ||
                    (this.configurations[t] = e);
                },
              },
              {
                key: "getConfiguration",
                value: function getConfiguration(t) {
                  if (this.configurations[t]) return this.configurations[t];
                  var e = Object.keys(this.configurations);
                  for (var _s10 = 0; _s10 < e.length; _s10 += 1)
                    if (n(t, e[_s10])) return this.configurations[e[_s10]];
                },
              },
              {
                key: "loadPipelinesFromString",
                value: function loadPipelinesFromString() {
                  var t =
                    arguments.length > 0 && arguments[0] !== undefined
                      ? arguments[0]
                      : "";
                  var e = t.split(/\n|\r|\r\n/);
                  var s = "",
                    n = [],
                    i = "";
                  for (var _t21 = 0; _t21 < e.length; _t21 += 1) {
                    var _r2 = e[_t21];
                    "" !== _r2 &&
                      (_r2.startsWith("# ")
                        ? (s &&
                            (i &&
                            !["default", "pipelines"].includes(i.toLowerCase())
                              ? this.registerPipelineForChilds(i, s, n)
                              : this.registerPipeline(s, n)),
                          (i = _r2.slice(1).trim()),
                          (s = ""),
                          (n = []))
                        : _r2.startsWith("## ")
                        ? (s &&
                            (i &&
                            !["default", "pipelines"].includes(i.toLowerCase())
                              ? this.registerPipelineForChilds(i, s, n)
                              : this.registerPipeline(s, n)),
                          (s = _r2.slice(2).trim()),
                          (n = []))
                        : s && n.push(_r2));
                  }
                  s &&
                    (i && !["default", "pipelines"].includes(i.toLowerCase())
                      ? this.registerPipelineForChilds(i, s, n)
                      : this.registerPipeline(s, n));
                },
              },
              {
                key: "start",
                value: (function () {
                  var _start = _asyncToGenerator(
                    /*#__PURE__*/ _regeneratorRuntime().mark(
                      function _callee3() {
                        var t,
                          e,
                          _t22,
                          _s11,
                          _args3 = arguments;
                        return _regeneratorRuntime().wrap(
                          function _callee3$(_context3) {
                            while (1)
                              switch ((_context3.prev = _context3.next)) {
                                case 0:
                                  t =
                                    _args3.length > 0 && _args3[0] !== undefined
                                      ? _args3[0]
                                      : "main";
                                  e = Object.keys(this.factory);
                                  _t22 = 0;
                                case 3:
                                  if (!(_t22 < e.length)) {
                                    _context3.next = 12;
                                    break;
                                  }
                                  _s11 = this.factory[e[_t22]];
                                  _context3.t0 =
                                    _s11.isSingleton &&
                                    _s11.instance &&
                                    _s11.instance.start;
                                  if (!_context3.t0) {
                                    _context3.next = 9;
                                    break;
                                  }
                                  _context3.next = 9;
                                  return _s11.instance.start();
                                case 9:
                                  _t22 += 1;
                                  _context3.next = 3;
                                  break;
                                case 12:
                                  _context3.t1 = this.getPipeline(t);
                                  if (!_context3.t1) {
                                    _context3.next = 16;
                                    break;
                                  }
                                  _context3.next = 16;
                                  return this.runPipeline(t, {}, this);
                                case 16:
                                case "end":
                                  return _context3.stop();
                              }
                          },
                          _callee3,
                          this
                        );
                      }
                    )
                  );
                  function start() {
                    return _start.apply(this, arguments);
                  }
                  return start;
                })(),
              },
            ]);
            return o;
          })();
          var a = new o();
          e.exports = {
            Container: o,
            defaultContainer: a,
          };
        },
        {
          "./default-compiler": 9,
          "./helper": 11,
          "./logger": 13,
        },
      ],
      8: [
        function (t, e, s) {
          var _t23 = t("./container"),
            n = _t23.defaultContainer,
            i = t("./clonable");
          e.exports = /*#__PURE__*/ (function (_i3) {
            _inherits(_class4, _i3);
            var _super = _createSuper(_class4);
            function _class4() {
              var _this;
              var t =
                arguments.length > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : {};
              var e = arguments.length > 1 ? arguments[1] : undefined;
              _classCallCheck(this, _class4);
              (_this = _super.call(
                this,
                {
                  settings: {},
                  container: t.container || e || n,
                },
                e
              )),
                _this.applySettings(_this.settings, t),
                _this.settings.tag || (_this.settings.tag = "context"),
                _this.applySettings(
                  _this.settings,
                  _this.container.getConfiguration(_this.settings.tag)
                );
              return _this;
            }
            _createClass(_class4, [
              {
                key: "getStorage",
                value: function getStorage() {
                  var t = this.container.get(
                    this.settings.storageName || "storage"
                  );
                  if (!t) throw new Error("Storage not found");
                  return t;
                },
              },
              {
                key: "getContext",
                value: function getContext(t) {
                  return this.getStorage().read(
                    "".concat(this.settings.tag, "-").concat(t)
                  );
                },
              },
              {
                key: "setContext",
                value: function setContext(t, e) {
                  var s = _defineProperty({}, t, e);
                  return this.getStorage().write(s);
                },
              },
              {
                key: "getContextValue",
                value: (function () {
                  var _getContextValue = _asyncToGenerator(
                    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee4(
                      t,
                      e
                    ) {
                      var s;
                      return _regeneratorRuntime().wrap(
                        function _callee4$(_context4) {
                          while (1)
                            switch ((_context4.prev = _context4.next)) {
                              case 0:
                                _context4.next = 2;
                                return this.getContext(t);
                              case 2:
                                s = _context4.sent;
                                return _context4.abrupt(
                                  "return",
                                  s ? s[e] : void 0
                                );
                              case 4:
                              case "end":
                                return _context4.stop();
                            }
                        },
                        _callee4,
                        this
                      );
                    })
                  );
                  function getContextValue(_x6, _x7) {
                    return _getContextValue.apply(this, arguments);
                  }
                  return getContextValue;
                })(),
              },
              {
                key: "setContextValue",
                value: (function () {
                  var _setContextValue = _asyncToGenerator(
                    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee5(
                      t,
                      e,
                      s
                    ) {
                      var n;
                      return _regeneratorRuntime().wrap(
                        function _callee5$(_context5) {
                          while (1)
                            switch ((_context5.prev = _context5.next)) {
                              case 0:
                                _context5.next = 2;
                                return this.getContext(t);
                              case 2:
                                n = _context5.sent;
                                return _context5.abrupt(
                                  "return",
                                  (n || (n = {}),
                                  (n[e] = s),
                                  this.setContext(t, n))
                                );
                              case 4:
                              case "end":
                                return _context5.stop();
                            }
                        },
                        _callee5,
                        this
                      );
                    })
                  );
                  function setContextValue(_x8, _x9, _x10) {
                    return _setContextValue.apply(this, arguments);
                  }
                  return setContextValue;
                })(),
              },
            ]);
            return _class4;
          })(i);
        },
        {
          "./clonable": 5,
          "./container": 7,
        },
      ],
      9: [
        function (t, e, s) {
          e.exports = /*#__PURE__*/ (function () {
            function _class5(t) {
              _classCallCheck(this, _class5);
              (this.container = t.container || t), (this.name = "default");
            }
            _createClass(_class5, [
              {
                key: "getTokenFromWord",
                value: function getTokenFromWord(t) {
                  return t.startsWith("//")
                    ? {
                        type: "comment",
                        value: t,
                      }
                    : [
                        "set",
                        "delete",
                        "get",
                        "inc",
                        "dec",
                        "eq",
                        "neq",
                        "gt",
                        "ge",
                        "lt",
                        "le",
                        "label",
                        "goto",
                        "jne",
                        "je",
                      ].includes(t)
                    ? {
                        type: t,
                        arguments: [],
                      }
                    : t.startsWith("$")
                    ? {
                        type: "call",
                        value: t.slice(1),
                      }
                    : {
                        type: "reference",
                        value: t,
                      };
                },
              },
              {
                key: "compile",
                value: function compile(t) {
                  var e = [];
                  for (var _s13 = 0; _s13 < t.length; _s13 += 1) {
                    var n = t[_s13].trim().split(" "),
                      i = [];
                    var r = void 0,
                      o = "";
                    for (var _t24 = 0; _t24 < n.length; _t24 += 1) {
                      var _e10 = n[_t24];
                      var _s14 = !1;
                      r
                        ? ((o = "".concat(o, " ").concat(_e10)),
                          (_s14 = !0),
                          _e10.endsWith(r) &&
                            ((r = void 0), i.push(this.getTokenFromWord(o))))
                        : _e10.startsWith('"')
                        ? ((o = _e10),
                          (_s14 = !0),
                          (r = '"'),
                          _e10.endsWith('"') &&
                            ((r = void 0), i.push(this.getTokenFromWord(o))))
                        : _e10.startsWith("'") &&
                          ((o = _e10),
                          (_s14 = !0),
                          (r = "'"),
                          _e10.endsWith("'") &&
                            ((r = void 0), i.push(this.getTokenFromWord(o)))),
                        _s14 || i.push(this.getTokenFromWord(_e10));
                    }
                    e.push(i);
                  }
                  return e;
                },
              },
              {
                key: "executeCall",
                value: function executeCall(t, e, s, n, i) {
                  var r = this.container.getPipeline(t.value);
                  if (!r)
                    throw new Error(
                      "Pipeline $".concat(t.value, " not found.")
                    );
                  return this.container.runPipeline(r, s, n, i + 1);
                },
              },
              {
                key: "executeReference",
                value: function executeReference(t, e, s, n, i) {
                  var r = this.container.resolvePath(e.value, s, n, i),
                    o = [];
                  for (var _e11 = 1; _e11 < t.length; _e11 += 1)
                    o.push(
                      this.container.resolvePathWithType(t[_e11].value, s, n, i)
                    );
                  if (!r)
                    throw new Error(
                      "Method not found for step ".concat(JSON.stringify(t))
                    );
                  var a = r.run || r;
                  return "function" == typeof a
                    ? "function" == typeof r
                      ? a.apply(void 0, [n].concat(o))
                      : a.bind(r).apply(void 0, [n].concat(o))
                    : a;
                },
              },
              {
                key: "doGoto",
                value: function doGoto(t, e) {
                  var s = e,
                    n = s.labels[t];
                  s.cursor = n;
                },
              },
              {
                key: "executeAction",
                value: (function () {
                  var _executeAction = _asyncToGenerator(
                    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee6(
                      t,
                      e,
                      s,
                      n,
                      i
                    ) {
                      var r;
                      return _regeneratorRuntime().wrap(
                        function _callee6$(_context6) {
                          while (1)
                            switch ((_context6.prev = _context6.next)) {
                              case 0:
                                r = t[0];
                                if (
                                  !(r && r.value && r.value.startsWith("->"))
                                ) {
                                  _context6.next = 5;
                                  break;
                                }
                                if (!(i > 0)) {
                                  _context6.next = 4;
                                  break;
                                }
                                return _context6.abrupt("return", s);
                              case 4:
                                (r = _objectSpread({}, r)),
                                  (r.value = r.value.slice(2));
                              case 5:
                                _context6.t0 = r.type;
                                _context6.next =
                                  _context6.t0 === "set"
                                    ? 8
                                    : _context6.t0 === "delete"
                                    ? 10
                                    : _context6.t0 === "get"
                                    ? 12
                                    : _context6.t0 === "inc"
                                    ? 13
                                    : _context6.t0 === "dec"
                                    ? 15
                                    : _context6.t0 === "eq"
                                    ? 17
                                    : _context6.t0 === "neq"
                                    ? 19
                                    : _context6.t0 === "gt"
                                    ? 21
                                    : _context6.t0 === "ge"
                                    ? 23
                                    : _context6.t0 === "lt"
                                    ? 25
                                    : _context6.t0 === "le"
                                    ? 27
                                    : _context6.t0 === "goto"
                                    ? 29
                                    : _context6.t0 === "jne"
                                    ? 31
                                    : _context6.t0 === "je"
                                    ? 33
                                    : _context6.t0 === "call"
                                    ? 35
                                    : _context6.t0 === "reference"
                                    ? 36
                                    : 37;
                                break;
                              case 8:
                                this.container.setValue(
                                  t[1].value,
                                  t[2] ? t[2].value : void 0,
                                  e,
                                  s,
                                  n
                                );
                                return _context6.abrupt("break", 37);
                              case 10:
                                this.container.deleteValue(t[1].value, e, s, n);
                                return _context6.abrupt("break", 37);
                              case 12:
                                return _context6.abrupt(
                                  "return",
                                  this.container.getValue(
                                    t[1] ? t[1].value : void 0,
                                    e,
                                    s,
                                    n
                                  )
                                );
                              case 13:
                                this.container.incValue(
                                  t[1] ? t[1].value : void 0,
                                  t[2] ? t[2].value : "1",
                                  e,
                                  s,
                                  n
                                );
                                return _context6.abrupt("break", 37);
                              case 15:
                                this.container.decValue(
                                  t[1] ? t[1].value : void 0,
                                  t[2] ? t[2].value : "1",
                                  e,
                                  s,
                                  n
                                );
                                return _context6.abrupt("break", 37);
                              case 17:
                                this.container.eqValue(
                                  t[1] ? t[1].value : void 0,
                                  t[2] ? t[2].value : void 0,
                                  e,
                                  s,
                                  n
                                );
                                return _context6.abrupt("break", 37);
                              case 19:
                                this.container.neqValue(
                                  t[1] ? t[1].value : void 0,
                                  t[2] ? t[2].value : void 0,
                                  e,
                                  s,
                                  n
                                );
                                return _context6.abrupt("break", 37);
                              case 21:
                                this.container.gtValue(
                                  t[1] ? t[1].value : void 0,
                                  t[2] ? t[2].value : void 0,
                                  e,
                                  s,
                                  n
                                );
                                return _context6.abrupt("break", 37);
                              case 23:
                                this.container.geValue(
                                  t[1] ? t[1].value : void 0,
                                  t[2] ? t[2].value : void 0,
                                  e,
                                  s,
                                  n
                                );
                                return _context6.abrupt("break", 37);
                              case 25:
                                this.container.ltValue(
                                  t[1] ? t[1].value : void 0,
                                  t[2] ? t[2].value : void 0,
                                  e,
                                  s,
                                  n
                                );
                                return _context6.abrupt("break", 37);
                              case 27:
                                this.container.leValue(
                                  t[1] ? t[1].value : void 0,
                                  t[2] ? t[2].value : void 0,
                                  e,
                                  s,
                                  n
                                );
                                return _context6.abrupt("break", 37);
                              case 29:
                                this.doGoto(t[1].value, e);
                                return _context6.abrupt("break", 37);
                              case 31:
                                e.floating || this.doGoto(t[1].value, e);
                                return _context6.abrupt("break", 37);
                              case 33:
                                e.floating && this.doGoto(t[1].value, e);
                                return _context6.abrupt("break", 37);
                              case 35:
                                return _context6.abrupt(
                                  "return",
                                  this.executeCall(r, e, s, n, i)
                                );
                              case 36:
                                return _context6.abrupt(
                                  "return",
                                  this.executeReference(t, r, e, s, n)
                                );
                              case 37:
                                return _context6.abrupt("return", s);
                              case 38:
                              case "end":
                                return _context6.stop();
                            }
                        },
                        _callee6,
                        this
                      );
                    })
                  );
                  function executeAction(_x11, _x12, _x13, _x14, _x15) {
                    return _executeAction.apply(this, arguments);
                  }
                  return executeAction;
                })(),
              },
              {
                key: "findLabels",
                value: function findLabels(t, e) {
                  var s = e;
                  for (var _e12 = 0; _e12 < t.length; _e12 += 1) {
                    var n = t[_e12];
                    "label" === n[0].type && (s[n[1].value] = _e12);
                  }
                },
              },
              {
                key: "execute",
                value: (function () {
                  var _execute = _asyncToGenerator(
                    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee7(
                      t,
                      e,
                      s,
                      n
                    ) {
                      var i, r;
                      return _regeneratorRuntime().wrap(
                        function _callee7$(_context7) {
                          while (1)
                            switch ((_context7.prev = _context7.next)) {
                              case 0:
                                i = e;
                                r = {
                                  cursor: 0,
                                  labels: {},
                                };
                                this.findLabels(t, r.labels);
                              case 3:
                                if (!(r.cursor < t.length)) {
                                  _context7.next = 10;
                                  break;
                                }
                                _context7.next = 6;
                                return this.executeAction(
                                  t[r.cursor],
                                  r,
                                  i,
                                  s,
                                  n
                                );
                              case 6:
                                i = _context7.sent;
                                r.cursor += 1;
                              case 8:
                                _context7.next = 3;
                                break;
                              case 10:
                                return _context7.abrupt("return", i);
                              case 11:
                              case "end":
                                return _context7.stop();
                            }
                        },
                        _callee7,
                        this
                      );
                    })
                  );
                  function execute(_x16, _x17, _x18, _x19) {
                    return _execute.apply(this, arguments);
                  }
                  return execute;
                })(),
              },
            ]);
            return _class5;
          })();
        },
        {},
      ],
      10: [
        function (t, e, s) {
          var n = t("./container-bootstrap");
          var i = new /*#__PURE__*/ ((function () {
            function _class6() {
              _classCallCheck(this, _class6);
              this.containers = {};
            }
            _createClass(_class6, [
              {
                key: "getContainer",
                value: function getContainer(t) {
                  return this.containers[t || "default"];
                },
              },
              {
                key: "createContainer",
                value: (function () {
                  var _createContainer = _asyncToGenerator(
                    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee8(
                      t,
                      e,
                      s,
                      i,
                      r,
                      o
                    ) {
                      var a, _s15;
                      return _regeneratorRuntime().wrap(
                        function _callee8$(_context8) {
                          while (1)
                            switch ((_context8.prev = _context8.next)) {
                              case 0:
                                a = void 0 === s || s;
                                if (
                                  !("string" != typeof t && ((e = t), (t = "")),
                                  e ||
                                    ("default" !== t && "" !== t) ||
                                    (e = "conf.json"),
                                  !this.containers[t])
                                ) {
                                  _context8.next = 13;
                                  break;
                                }
                                _s15 = n(e, a, void 0, i, o);
                                _s15.name = t;
                                this.containers[t] = _s15;
                                _s15.dock = this;
                                _s15.parent = r;
                                _context8.next = 9;
                                return _s15.start();
                              case 9:
                                _context8.t0 = _s15.childs;
                                if (!_context8.t0) {
                                  _context8.next = 13;
                                  break;
                                }
                                _context8.next = 13;
                                return this.buildChilds(_s15);
                              case 13:
                                return _context8.abrupt(
                                  "return",
                                  this.containers[t]
                                );
                              case 14:
                              case "end":
                                return _context8.stop();
                            }
                        },
                        _callee8,
                        this
                      );
                    })
                  );
                  function createContainer(_x20, _x21, _x22, _x23, _x24, _x25) {
                    return _createContainer.apply(this, arguments);
                  }
                  return createContainer;
                })(),
              },
              {
                key: "buildChilds",
                value: (function () {
                  var _buildChilds = _asyncToGenerator(
                    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee9(
                      t
                    ) {
                      var _e13, _s16, _n9, _i4;
                      return _regeneratorRuntime().wrap(
                        function _callee9$(_context9) {
                          while (1)
                            switch ((_context9.prev = _context9.next)) {
                              case 0:
                                if (!(t && t.childs)) {
                                  _context9.next = 14;
                                  break;
                                }
                                (_e13 = Object.keys(t.childs)), (_s16 = {});
                                _n9 = 0;
                              case 3:
                                if (!(_n9 < _e13.length)) {
                                  _context9.next = 13;
                                  break;
                                }
                                _i4 = t.childs[_e13[_n9]];
                                _i4.isChild = !0;
                                _i4.pathPipeline ||
                                  (_i4.pathPipeline = "".concat(
                                    _e13[_n9],
                                    "_pipeline.md"
                                  ));
                                _context9.next = 9;
                                return this.createContainer(
                                  _e13[_n9],
                                  _i4,
                                  !1,
                                  _e13[_n9],
                                  t,
                                  t.childPipelines
                                    ? t.childPipelines[_e13[_n9]]
                                    : void 0
                                );
                              case 9:
                                _s16[_e13[_n9]] = _context9.sent;
                              case 10:
                                _n9 += 1;
                                _context9.next = 3;
                                break;
                              case 13:
                                t.childs = _s16;
                              case 14:
                              case "end":
                                return _context9.stop();
                            }
                        },
                        _callee9,
                        this
                      );
                    })
                  );
                  function buildChilds(_x26) {
                    return _buildChilds.apply(this, arguments);
                  }
                  return buildChilds;
                })(),
              },
              {
                key: "terraform",
                value: (function () {
                  var _terraform = _asyncToGenerator(
                    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee10(
                      t
                    ) {
                      var e,
                        _args10 = arguments;
                      return _regeneratorRuntime().wrap(
                        function _callee10$(_context10) {
                          while (1)
                            switch ((_context10.prev = _context10.next)) {
                              case 0:
                                e =
                                  _args10.length > 1 && _args10[1] !== undefined
                                    ? _args10[1]
                                    : !0;
                                _context10.next = 3;
                                return this.createContainer(
                                  "default",
                                  t,
                                  e,
                                  ""
                                );
                              case 3:
                                return _context10.abrupt(
                                  "return",
                                  _context10.sent
                                );
                              case 4:
                              case "end":
                                return _context10.stop();
                            }
                        },
                        _callee10,
                        this
                      );
                    })
                  );
                  function terraform(_x27) {
                    return _terraform.apply(this, arguments);
                  }
                  return terraform;
                })(),
              },
              {
                key: "start",
                value: function start(t) {
                  var e =
                    arguments.length > 1 && arguments[1] !== undefined
                      ? arguments[1]
                      : !0;
                  return this.terraform(t, e);
                },
              },
            ]);
            return _class6;
          })())();
          e.exports = i;
        },
        {
          "./container-bootstrap": 6,
        },
      ],
      11: [
        function (t, e, s) {
          (function (t) {
            (function () {
              var s = "\\ud800-\\udfff",
                n =
                  "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\u1ab0-\\u1aff\\u1dc0-\\u1dff",
                i = "\\ufe0e\\ufe0f",
                r = "[\\ud800-\\udfff]",
                o = "[".concat(n, "]"),
                a = "\\ud83c[\\udffb-\\udfff]",
                u = "[^\\ud800-\\udfff]",
                c = "(?:\\ud83c[\\udde6-\\uddff]){2}",
                l = "[\\ud800-\\udbff][\\udc00-\\udfff]",
                h = "\\u200d",
                g = "".concat("(?:".concat(o, "|").concat(a, ")"), "?"),
                f = "[\\ufe0e\\ufe0f]?",
                p =
                  f +
                  g +
                  "(?:\\u200d(?:"
                    .concat([u, c, l].join("|"), ")")
                    .concat(f + g, ")*"),
                d = "(?:".concat(
                  ["".concat(u).concat(o, "?"), o, c, l, r].join("|"),
                  ")"
                ),
                m = RegExp("[".concat(h + s + n + i, "]")),
                y = RegExp(
                  ""
                    .concat(a, "(?=")
                    .concat(a, ")|")
                    .concat(d + p),
                  "g"
                ),
                w = function w(t) {
                  return m.test(t);
                },
                b = function b(t) {
                  return t.match(y) || [];
                },
                x = function x(t) {
                  return t.split("");
                };
              e.exports = {
                hasUnicode: w,
                unicodeToArray: b,
                asciiToArray: x,
                stringToArray: function stringToArray(t) {
                  return w(t) ? b(t) : x(t);
                },
                compareWildcars: function compareWildcars(t, e) {
                  var s = "^"
                    .concat(
                      e
                        .split("*")
                        .map(function (t) {
                          return t.replace(/([.*+^=!:${}()|[\]/\\])/g, "\\$1");
                        })
                        .join(".*"),
                      "$"
                    )
                    .replace(/\?/g, ".");
                  return new RegExp(s).test(t);
                },
                loadEnvFromJson: function loadEnvFromJson(e) {
                  var s =
                    arguments.length > 1 && arguments[1] !== undefined
                      ? arguments[1]
                      : {};
                  var n = Object.keys(s);
                  e = e ? "".concat(e, "_") : "";
                  for (var _i5 = 0; _i5 < n.length; _i5 += 1) {
                    var _r3 = "".concat(e).concat(n[_i5]);
                    t.env[_r3] = s[n[_i5]];
                  }
                },
              };
            }.call(this));
          }.call(this, t("_process")));
        },
        {
          _process: 100,
        },
      ],
      12: [
        function (t, e, s) {
          var n = t("./among"),
            i = t("./arr-to-obj"),
            r = t("./base-stemmer"),
            o = t("./container-bootstrap"),
            a = t("./clonable"),
            _t25 = t("./container"),
            u = _t25.Container,
            c = _t25.defaultContainer,
            l = t("./normalizer"),
            h = t("./obj-to-arr"),
            g = t("./stemmer"),
            f = t("./stopwords"),
            p = t("./tokenizer"),
            d = t("./timer"),
            m = t("./logger"),
            _t26 = t("./helper"),
            y = _t26.hasUnicode,
            w = _t26.unicodeToArray,
            b = _t26.asciiToArray,
            x = _t26.stringToArray,
            D = _t26.compareWildcars,
            v = _t26.loadEnv,
            k = t("./memory-storage"),
            C = t("./uuid"),
            A = t("./dock"),
            F = t("./context");
          e.exports = {
            Among: n,
            ArrToObj: i,
            BaseStemmer: r,
            containerBootstrap: o,
            Clonable: a,
            Container: u,
            defaultContainer: c,
            hasUnicode: y,
            unicodeToArray: w,
            asciiToArray: b,
            stringToArray: x,
            compareWildcars: D,
            loadEnv: v,
            Normalizer: l,
            ObjToArr: h,
            Stemmer: g,
            Stopwords: f,
            Tokenizer: p,
            Timer: d,
            logger: m,
            MemoryStorage: k,
            uuid: C,
            dock: A,
            Context: F,
            dockStart: (function () {
              var _dockStart = _asyncToGenerator(
                /*#__PURE__*/ _regeneratorRuntime().mark(function _callee11(
                  t,
                  e
                ) {
                  return _regeneratorRuntime().wrap(function _callee11$(
                    _context11
                  ) {
                    while (1)
                      switch ((_context11.prev = _context11.next)) {
                        case 0:
                          _context11.next = 2;
                          return A.start(t, e);
                        case 2:
                          return _context11.abrupt("return", A);
                        case 3:
                        case "end":
                          return _context11.stop();
                      }
                  },
                  _callee11);
                })
              );
              function dockStart(_x28, _x29) {
                return _dockStart.apply(this, arguments);
              }
              return dockStart;
            })(),
          };
        },
        {
          "./among": 2,
          "./arr-to-obj": 3,
          "./base-stemmer": 4,
          "./clonable": 5,
          "./container": 7,
          "./container-bootstrap": 6,
          "./context": 8,
          "./dock": 10,
          "./helper": 11,
          "./logger": 13,
          "./memory-storage": 14,
          "./normalizer": 16,
          "./obj-to-arr": 17,
          "./stemmer": 18,
          "./stopwords": 19,
          "./timer": 20,
          "./tokenizer": 21,
          "./uuid": 22,
        },
      ],
      13: [
        function (t, e, s) {
          var n = new /*#__PURE__*/ ((function () {
            function _class7() {
              _classCallCheck(this, _class7);
              this.name = "logger";
            }
            _createClass(_class7, [
              {
                key: "debug",
                value: function debug() {
                  var _console;
                  (_console = console).debug.apply(_console, arguments);
                },
              },
              {
                key: "info",
                value: function info() {
                  var _console2;
                  (_console2 = console).info.apply(_console2, arguments);
                },
              },
              {
                key: "warn",
                value: function warn() {
                  var _console3;
                  (_console3 = console).warn.apply(_console3, arguments);
                },
              },
              {
                key: "error",
                value: function error() {
                  var _console4;
                  (_console4 = console).error.apply(_console4, arguments);
                },
              },
              {
                key: "log",
                value: function log() {
                  var _console5;
                  (_console5 = console).log.apply(_console5, arguments);
                },
              },
              {
                key: "trace",
                value: function trace() {
                  var _console6;
                  (_console6 = console).trace.apply(_console6, arguments);
                },
              },
              {
                key: "fatal",
                value: function fatal() {
                  var _console7;
                  (_console7 = console).error.apply(_console7, arguments);
                },
              },
            ]);
            return _class7;
          })())();
          e.exports = n;
        },
        {},
      ],
      14: [
        function (t, e, s) {
          var _t27 = t("./container"),
            n = _t27.defaultContainer,
            i = t("./clonable");
          e.exports = /*#__PURE__*/ (function (_i6) {
            _inherits(_class8, _i6);
            var _super2 = _createSuper(_class8);
            function _class8() {
              var _this2;
              var t =
                arguments.length > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : {};
              var e = arguments.length > 1 ? arguments[1] : undefined;
              _classCallCheck(this, _class8);
              (_this2 = _super2.call(
                this,
                {
                  settings: {},
                  container: t.container || e || n,
                },
                e
              )),
                _this2.applySettings(_this2.settings, t),
                _this2.applySettings(_this2.settings, {
                  etag: 1,
                  memory: {},
                }),
                _this2.settings.tag || (_this2.settings.tag = "storage"),
                _this2.applySettings(
                  _this2.settings,
                  _this2.container.getConfiguration(_this2.settings.tag)
                );
              return _this2;
            }
            _createClass(_class8, [
              {
                key: "read",
                value: function read(t) {
                  var _this3 = this;
                  return new Promise(function (e) {
                    var s = {};
                    Array.isArray(t) || (t = [t]),
                      t.forEach(function (t) {
                        var e = _this3.settings.memory[t];
                        e && (s[t] = JSON.parse(e));
                      }),
                      e(s);
                  });
                },
              },
              {
                key: "saveItem",
                value: function saveItem(t, e) {
                  var s = _objectSpread({}, e);
                  return (
                    (s.eTag = this.settings.etag.toString()),
                    (this.settings.etag += 1),
                    (this.settings.memory[t] = JSON.stringify(s)),
                    s
                  );
                },
              },
              {
                key: "write",
                value: function write(t) {
                  var _this4 = this;
                  return new Promise(function (e, s) {
                    Object.keys(t).forEach(function (n) {
                      var i = t[n],
                        r = _this4.settings.memory[n];
                      if (!r || "*" === i.eTag) return e(_this4.saveItem(n, i));
                      var o = JSON.parse(r);
                      return i.eTag !== o.eTag
                        ? s(
                            new Error(
                              'Error writing "'.concat(
                                n,
                                '" due to eTag conflict.'
                              )
                            )
                          )
                        : e(_this4.saveItem(n, i));
                    });
                  });
                },
              },
              {
                key: "delete",
                value: function _delete(t) {
                  var _this5 = this;
                  return new Promise(function (e) {
                    t.forEach(function (t) {
                      return delete _this5.settings.memory[t];
                    }),
                      e();
                  });
                },
              },
            ]);
            return _class8;
          })(i);
        },
        {
          "./clonable": 5,
          "./container": 7,
        },
      ],
      15: [
        function (t, e, s) {
          e.exports = {
            readFile: function readFile() {
              return new Promise(function (t) {
                t(void 0);
              });
            },
            writeFile: function writeFile() {
              return new Promise(function (t, e) {
                e(new Error("File cannot be written in web"));
              });
            },
            existsSync: function existsSync() {
              return !1;
            },
            lstatSync: function lstatSync() {},
            readFileSync: function readFileSync() {},
            name: "fs",
          };
        },
        {},
      ],
      16: [
        function (t, e, s) {
          var _t28 = t("./container"),
            n = _t28.defaultContainer;
          e.exports = /*#__PURE__*/ (function () {
            function _class9() {
              var t =
                arguments.length > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : n;
              _classCallCheck(this, _class9);
              (this.container = t.container || t), (this.name = "normalize");
            }
            _createClass(_class9, [
              {
                key: "normalize",
                value: function normalize(t) {
                  return t
                    .normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, "")
                    .toLowerCase();
                },
              },
              {
                key: "run",
                value: function run(t) {
                  var e = t,
                    s = e.locale || "en",
                    n = this.container.get("normalizer-".concat(s)) || this;
                  return (e.text = n.normalize(e.text, e)), e;
                },
              },
            ]);
            return _class9;
          })();
        },
        {
          "./container": 7,
        },
      ],
      17: [
        function (t, e, s) {
          var _t29 = t("./container"),
            n = _t29.defaultContainer;
          var i = /*#__PURE__*/ (function () {
            function i() {
              var t =
                arguments.length > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : n;
              _classCallCheck(this, i);
              (this.container = t.container || t), (this.name = "objToArr");
            }
            _createClass(
              i,
              [
                {
                  key: "run",
                  value: function run(t) {
                    return t.tokens
                      ? ((t.tokens = i.objToArr(t.tokens)), t)
                      : i.objToArr(t);
                  },
                },
              ],
              [
                {
                  key: "objToArr",
                  value: function objToArr(t) {
                    return Object.keys(t);
                  },
                },
              ]
            );
            return i;
          })();
          e.exports = i;
        },
        {
          "./container": 7,
        },
      ],
      18: [
        function (t, e, s) {
          var _t30 = t("./container"),
            n = _t30.defaultContainer;
          e.exports = /*#__PURE__*/ (function () {
            function _class10() {
              var t =
                arguments.length > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : n;
              _classCallCheck(this, _class10);
              (this.container = t.container || t), (this.name = "stem");
            }
            _createClass(_class10, [
              {
                key: "stem",
                value: function stem(t) {
                  return t;
                },
              },
              {
                key: "getStemmer",
                value: function getStemmer(t) {
                  var e = t,
                    s = ((e.locale || e.settings) && e.settings.locale) || "en";
                  var n = this.container.get("stemmer-".concat(s));
                  if (!n) {
                    var _t31 = this.container.get("stemmer-bert");
                    n = _t31 && _t31.activeFor(s) ? _t31 : this;
                  }
                  return n;
                },
              },
              {
                key: "addForTraining",
                value: (function () {
                  var _addForTraining = _asyncToGenerator(
                    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee12(
                      t
                    ) {
                      var e;
                      return _regeneratorRuntime().wrap(
                        function _callee12$(_context12) {
                          while (1)
                            switch ((_context12.prev = _context12.next)) {
                              case 0:
                                e = this.getStemmer(t);
                                _context12.t0 = e.addUtterance;
                                if (!_context12.t0) {
                                  _context12.next = 5;
                                  break;
                                }
                                _context12.next = 5;
                                return e.addUtterance(t.utterance, t.intent);
                              case 5:
                                return _context12.abrupt("return", t);
                              case 6:
                              case "end":
                                return _context12.stop();
                            }
                        },
                        _callee12,
                        this
                      );
                    })
                  );
                  function addForTraining(_x30) {
                    return _addForTraining.apply(this, arguments);
                  }
                  return addForTraining;
                })(),
              },
              {
                key: "train",
                value: (function () {
                  var _train = _asyncToGenerator(
                    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee13(
                      t
                    ) {
                      var e;
                      return _regeneratorRuntime().wrap(
                        function _callee13$(_context13) {
                          while (1)
                            switch ((_context13.prev = _context13.next)) {
                              case 0:
                                e = this.getStemmer(t);
                                _context13.t0 = e.innerTrain;
                                if (!_context13.t0) {
                                  _context13.next = 5;
                                  break;
                                }
                                _context13.next = 5;
                                return e.innerTrain();
                              case 5:
                                return _context13.abrupt("return", t);
                              case 6:
                              case "end":
                                return _context13.stop();
                            }
                        },
                        _callee13,
                        this
                      );
                    })
                  );
                  function train(_x31) {
                    return _train.apply(this, arguments);
                  }
                  return train;
                })(),
              },
              {
                key: "run",
                value: (function () {
                  var _run = _asyncToGenerator(
                    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee14(
                      t
                    ) {
                      var e, s;
                      return _regeneratorRuntime().wrap(
                        function _callee14$(_context14) {
                          while (1)
                            switch ((_context14.prev = _context14.next)) {
                              case 0:
                                (e = t), (s = this.getStemmer(e));
                                _context14.next = 3;
                                return s.stem(e.tokens, e);
                              case 3:
                                e.tokens = _context14.sent;
                                return _context14.abrupt("return", e);
                              case 5:
                              case "end":
                                return _context14.stop();
                            }
                        },
                        _callee14,
                        this
                      );
                    })
                  );
                  function run(_x32) {
                    return _run.apply(this, arguments);
                  }
                  return run;
                })(),
              },
            ]);
            return _class10;
          })();
        },
        {
          "./container": 7,
        },
      ],
      19: [
        function (t, e, s) {
          var _t32 = t("./container"),
            n = _t32.defaultContainer;
          e.exports = /*#__PURE__*/ (function () {
            function _class11() {
              var t =
                arguments.length > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : n;
              _classCallCheck(this, _class11);
              (this.container = t.container || t),
                (this.name = "removeStopwords"),
                (this.dictionary = {});
            }
            _createClass(_class11, [
              {
                key: "build",
                value: function build(t) {
                  for (var _e14 = 0; _e14 < t.length; _e14 += 1)
                    this.dictionary[t[_e14]] = !0;
                },
              },
              {
                key: "isNotStopword",
                value: function isNotStopword(t) {
                  return !this.dictionary[t];
                },
              },
              {
                key: "isStopword",
                value: function isStopword(t) {
                  return !!this.dictionary[t];
                },
              },
              {
                key: "removeStopwords",
                value: function removeStopwords(t) {
                  var _this6 = this;
                  return t.filter(function (t) {
                    return _this6.isNotStopword(t);
                  });
                },
              },
              {
                key: "run",
                value: function run(t) {
                  if (t.settings && !1 === t.settings.keepStopwords) {
                    var _e15 = t,
                      _s17 = _e15.locale || "en",
                      _n10 =
                        this.container.get("stopwords-".concat(_s17)) || this;
                    return (
                      (_e15.tokens = _n10
                        .removeStopwords(_e15.tokens, _e15)
                        .filter(function (t) {
                          return t;
                        })),
                      _e15
                    );
                  }
                  return t;
                },
              },
            ]);
            return _class11;
          })();
        },
        {
          "./container": 7,
        },
      ],
      20: [
        function (t, e, s) {
          var _t33 = t("./container"),
            n = _t33.defaultContainer;
          e.exports = /*#__PURE__*/ (function () {
            function _class12() {
              var t =
                arguments.length > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : n;
              _classCallCheck(this, _class12);
              (this.container = t.container || t), (this.name = "timer");
            }
            _createClass(_class12, [
              {
                key: "start",
                value: function start(t) {
                  return t && (t.hrstart = new Date()), t;
                },
              },
              {
                key: "stop",
                value: function stop(t) {
                  var e = t;
                  if (e && e.hrstart) {
                    var _t34 = new Date();
                    (e.elapsed = _t34.getTime() - e.hrstart.getTime()),
                      delete e.hrstart;
                  }
                  return e;
                },
              },
              {
                key: "run",
                value: function run(t) {
                  this.start(t);
                },
              },
            ]);
            return _class12;
          })();
        },
        {
          "./container": 7,
        },
      ],
      21: [
        function (t, e, s) {
          var _t35 = t("./container"),
            n = _t35.defaultContainer,
            i = t("./normalizer");
          e.exports = /*#__PURE__*/ (function () {
            function _class13() {
              var t =
                arguments.length > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : n;
              var e =
                arguments.length > 1 && arguments[1] !== undefined
                  ? arguments[1]
                  : !1;
              _classCallCheck(this, _class13);
              (this.container = t.container || t),
                (this.name = "tokenize"),
                (this.shouldNormalize = e);
            }
            _createClass(_class13, [
              {
                key: "getNormalizer",
                value: function getNormalizer() {
                  return (
                    this.normalizer ||
                      (this.normalizer =
                        this.container.get(
                          "normalizer-".concat(this.name.slice(-2))
                        ) || new i()),
                    this.normalizer
                  );
                },
              },
              {
                key: "normalize",
                value: function normalize(t, e) {
                  if ((void 0 === e && this.shouldNormalize) || !0 === e) {
                    return this.getNormalizer().normalize(t);
                  }
                  return t;
                },
              },
              {
                key: "innerTokenize",
                value: function innerTokenize(t) {
                  return t.split(/[\s,.!?;:([\]'"¡¿)/]+/).filter(function (t) {
                    return t;
                  });
                },
              },
              {
                key: "tokenize",
                value: function tokenize(t, e) {
                  var s;
                  if (this.cache) {
                    var _t36 = new Date();
                    Math.abs(_t36.getTime() - this.cache.created) / 36e5 > 1 &&
                      (this.cache = void 0);
                  }
                  if (this.cache) {
                    if (
                      (e
                        ? Object.prototype.hasOwnProperty.call(
                            this.cache.normalized,
                            t
                          ) && (s = this.cache.normalized[t])
                        : Object.prototype.hasOwnProperty.call(
                            this.cache.nonNormalized,
                            t
                          ) && (s = this.cache.nonNormalized[t]),
                      s)
                    )
                      return s;
                  } else
                    this.cache = {
                      created: new Date().getTime(),
                      normalized: {},
                      nonNormalized: {},
                    };
                  return (
                    (s = this.innerTokenize(this.normalize(t, e), e)),
                    e
                      ? (this.cache.normalized[t] = s)
                      : (this.cache.nonNormalized[t] = s),
                    s
                  );
                },
              },
              {
                key: "run",
                value: (function () {
                  var _run2 = _asyncToGenerator(
                    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee15(
                      t
                    ) {
                      var e, s, n, _t37, i;
                      return _regeneratorRuntime().wrap(
                        function _callee15$(_context15) {
                          while (1)
                            switch ((_context15.prev = _context15.next)) {
                              case 0:
                                (e = t), (s = e.locale || "en");
                                n = this.container.get("tokenizer-".concat(s));
                                if (!n) {
                                  _t37 = this.container.get("tokenizer-bert");
                                  n = _t37 && _t37.activeFor(s) ? _t37 : this;
                                }
                                _context15.next = 5;
                                return n.tokenize(e.text, e);
                              case 5:
                                i = _context15.sent;
                                return _context15.abrupt(
                                  "return",
                                  ((e.tokens = i.filter(function (t) {
                                    return t;
                                  })),
                                  e)
                                );
                              case 7:
                              case "end":
                                return _context15.stop();
                            }
                        },
                        _callee15,
                        this
                      );
                    })
                  );
                  function run(_x33) {
                    return _run2.apply(this, arguments);
                  }
                  return run;
                })(),
              },
            ]);
            return _class13;
          })();
        },
        {
          "./container": 7,
          "./normalizer": 16,
        },
      ],
      22: [
        function (t, e, s) {
          e.exports = function () {
            function t() {
              return Math.floor(65536 * (1 + Math.random()))
                .toString(16)
                .substring(1);
            }
            return ""
              .concat(t() + t(), "-")
              .concat(t(), "-")
              .concat(t(), "-")
              .concat(t(), "-")
              .concat(t())
              .concat(t())
              .concat(t());
          };
        },
        {},
      ],
      23: [
        function (t, e, s) {
          var n = t("./lang-en"),
            i = t("./tokenizer-en"),
            r = t("./stemmer-en"),
            o = t("./stopwords-en"),
            a = t("./normalizer-en"),
            u = t("./sentiment/sentiment_en"),
            c = t("./trigrams");
          e.exports = {
            LangEn: n,
            StemmerEn: r,
            StopwordsEn: o,
            TokenizerEn: i,
            NormalizerEn: a,
            SentimentEn: u,
            registerTrigrams: c,
          };
        },
        {
          "./lang-en": 24,
          "./normalizer-en": 25,
          "./sentiment/sentiment_en": 26,
          "./stemmer-en": 27,
          "./stopwords-en": 28,
          "./tokenizer-en": 29,
          "./trigrams": 30,
        },
      ],
      24: [
        function (t, e, s) {
          var n = t("./tokenizer-en"),
            i = t("./stemmer-en"),
            r = t("./stopwords-en"),
            o = t("./normalizer-en"),
            a = t("./sentiment/sentiment_en"),
            u = t("./trigrams");
          e.exports = /*#__PURE__*/ (function () {
            function _class14() {
              _classCallCheck(this, _class14);
            }
            _createClass(_class14, [
              {
                key: "register",
                value: function register(t) {
                  t.use(n),
                    t.use(i),
                    t.use(r),
                    t.use(o),
                    t.register("sentiment-en", a),
                    u(t);
                },
              },
            ]);
            return _class14;
          })();
        },
        {
          "./normalizer-en": 25,
          "./sentiment/sentiment_en": 26,
          "./stemmer-en": 27,
          "./stopwords-en": 28,
          "./tokenizer-en": 29,
          "./trigrams": 30,
        },
      ],
      25: [
        function (t, e, s) {
          var _t38 = t("@nlpjs/core"),
            n = _t38.Normalizer;
          e.exports = /*#__PURE__*/ (function (_n11) {
            _inherits(_class15, _n11);
            var _super3 = _createSuper(_class15);
            function _class15(t) {
              var _this7;
              _classCallCheck(this, _class15);
              (_this7 = _super3.call(this, t)), (_this7.name = "normalizer-en");
              return _this7;
            }
            _createClass(_class15, [
              {
                key: "normalize",
                value: function normalize(t) {
                  return t
                    .normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, "")
                    .toLowerCase();
                },
              },
              {
                key: "run",
                value: function run(t) {
                  var e = t;
                  return (e.text = this.normalize(e.text, e)), e;
                },
              },
            ]);
            return _class15;
          })(n);
        },
        {
          "@nlpjs/core": 12,
        },
      ],
      26: [
        function (t, e, s) {
          e.exports = {
            senticon: void 0,
            afinn: void 0,
            pattern: void 0,
            negations: {
              words: [],
            },
          };
        },
        {},
      ],
      27: [
        function (t, e, s) {
          var _t39 = t("@nlpjs/core"),
            n = _t39.Among,
            i = _t39.BaseStemmer,
            r = t("./tokenizer-en");
          var o = /*#__PURE__*/ (function (_i7) {
            _inherits(o, _i7);
            var _super4 = _createSuper(o);
            function o(t) {
              var _this8;
              _classCallCheck(this, o);
              (_this8 = _super4.call(this, t)),
                (_this8.name = "stemmer-en"),
                (_this8.B_Y_found = !1),
                (_this8.I_p2 = 0),
                (_this8.I_p1 = 0);
              return _this8;
            }
            _createClass(o, [
              {
                key: "getTokenizer",
                value: function getTokenizer() {
                  return (
                    this.tokenizer ||
                      ((this.tokenizer =
                        this.container.get(
                          "tokenizer-".concat(this.name.slice(-2))
                        ) || new r()),
                      "Tokenizer" === this.tokenizer.constructor.name &&
                        (this.tokenizer = new r())),
                    this.tokenizer
                  );
                },
              },
              {
                key: "r_prelude",
                value: function r_prelude() {
                  var t, e, s, n, i;
                  (this.B_Y_found = !1), (t = this.cursor);
                  var r = !0;
                  for (
                    ;
                    1 == r &&
                    ((r = !1), (this.bra = this.cursor), this.eq_s("'"));

                  )
                    if (((this.ket = this.cursor), !this.slice_del()))
                      return !1;
                  (this.cursor = t), (e = this.cursor);
                  var a = !0;
                  for (
                    ;
                    1 == a &&
                    ((a = !1), (this.bra = this.cursor), this.eq_s("y"));

                  ) {
                    if (((this.ket = this.cursor), !this.slice_from("Y")))
                      return !1;
                    this.B_Y_found = !0;
                  }
                  (this.cursor = e), (s = this.cursor);
                  var u = !0;
                  for (; 1 == u; ) {
                    u = !1;
                    t: for (;;) {
                      n = this.cursor;
                      var _t40 = !0;
                      e: for (; 1 == _t40; ) {
                        _t40 = !1;
                        s: for (;;) {
                          i = this.cursor;
                          var _t41 = !0;
                          for (
                            ;
                            1 == _t41 &&
                            ((_t41 = !1), this.in_grouping(o.g_v, 97, 121)) &&
                            ((this.bra = this.cursor), this.eq_s("y"));

                          ) {
                            (this.ket = this.cursor), (this.cursor = i);
                            break s;
                          }
                          if (((this.cursor = i), this.cursor >= this.limit))
                            break e;
                          this.cursor++;
                        }
                        if (!this.slice_from("Y")) return !1;
                        this.B_Y_found = !0;
                        continue t;
                      }
                      this.cursor = n;
                      break;
                    }
                  }
                  return (this.cursor = s), !0;
                },
              },
              {
                key: "r_mark_regions",
                value: function r_mark_regions() {
                  var t, e;
                  (this.I_p1 = this.limit),
                    (this.I_p2 = this.limit),
                    (t = this.cursor);
                  var s = !0;
                  t: for (; 1 == s; ) {
                    s = !1;
                    var _t42 = !0;
                    e: for (; 1 == _t42; ) {
                      (_t42 = !1), (e = this.cursor);
                      var _s18 = !0;
                      for (
                        ;
                        1 == _s18 &&
                        ((_s18 = !1), 0 != this.find_among(o.a_0, 3));

                      )
                        break e;
                      this.cursor = e;
                      s: for (;;) {
                        var _t43 = !0;
                        for (
                          ;
                          1 == _t43 &&
                          ((_t43 = !1), this.in_grouping(o.g_v, 97, 121));

                        )
                          break s;
                        if (this.cursor >= this.limit) break t;
                        this.cursor++;
                      }
                      s: for (;;) {
                        var _t44 = !0;
                        for (
                          ;
                          1 == _t44 &&
                          ((_t44 = !1), this.out_grouping(o.g_v, 97, 121));

                        )
                          break s;
                        if (this.cursor >= this.limit) break t;
                        this.cursor++;
                      }
                    }
                    this.I_p1 = this.cursor;
                    e: for (;;) {
                      var _t45 = !0;
                      for (
                        ;
                        1 == _t45 &&
                        ((_t45 = !1), this.in_grouping(o.g_v, 97, 121));

                      )
                        break e;
                      if (this.cursor >= this.limit) break t;
                      this.cursor++;
                    }
                    e: for (;;) {
                      var _t46 = !0;
                      for (
                        ;
                        1 == _t46 &&
                        ((_t46 = !1), this.out_grouping(o.g_v, 97, 121));

                      )
                        break e;
                      if (this.cursor >= this.limit) break t;
                      this.cursor++;
                    }
                    this.I_p2 = this.cursor;
                  }
                  return (this.cursor = t), !0;
                },
              },
              {
                key: "r_shortv",
                value: function r_shortv() {
                  var t,
                    e = !0;
                  t: for (; 1 == e; ) {
                    (e = !1), (t = this.limit - this.cursor);
                    var _s19 = !0;
                    for (
                      ;
                      1 == _s19 &&
                      ((_s19 = !1), this.out_grouping_b(o.g_v_WXY, 89, 121)) &&
                      this.in_grouping_b(o.g_v, 97, 121) &&
                      this.out_grouping_b(o.g_v, 97, 121);

                    )
                      break t;
                    if (
                      ((this.cursor = this.limit - t),
                      !this.out_grouping_b(o.g_v, 97, 121))
                    )
                      return !1;
                    if (!this.in_grouping_b(o.g_v, 97, 121)) return !1;
                    if (this.cursor > this.limit_backward) return !1;
                  }
                  return !0;
                },
              },
              {
                key: "r_R1",
                value: function r_R1() {
                  return this.I_p1 <= this.cursor;
                },
              },
              {
                key: "r_R2",
                value: function r_R2() {
                  return this.I_p2 <= this.cursor;
                },
              },
              {
                key: "r_Step_1a",
                value: function r_Step_1a() {
                  var t, e, s;
                  e = this.limit - this.cursor;
                  var n = !0;
                  t: for (; 1 == n; ) {
                    if (
                      ((n = !1),
                      (this.ket = this.cursor),
                      (t = this.find_among_b(o.a_1, 3)),
                      0 == t)
                    ) {
                      this.cursor = this.limit - e;
                      break;
                    }
                    switch (((this.bra = this.cursor), t)) {
                      case 0:
                        this.cursor = this.limit - e;
                        break t;
                      case 1:
                        if (!this.slice_del()) return !1;
                    }
                  }
                  if (
                    ((this.ket = this.cursor),
                    (t = this.find_among_b(o.a_2, 6)),
                    0 == t)
                  )
                    return !1;
                  switch (((this.bra = this.cursor), t)) {
                    case 0:
                      return !1;
                    case 1:
                      if (!this.slice_from("ss")) return !1;
                      break;
                    case 2:
                      var i = !0;
                      t: for (; 1 == i; ) {
                        (i = !1), (s = this.limit - this.cursor);
                        var _t47 = !0;
                        for (; 1 == _t47; ) {
                          _t47 = !1;
                          {
                            var _t48 = this.cursor - 2;
                            if (this.limit_backward > _t48 || _t48 > this.limit)
                              break;
                            this.cursor = _t48;
                          }
                          if (!this.slice_from("i")) return !1;
                          break t;
                        }
                        if (
                          ((this.cursor = this.limit - s),
                          !this.slice_from("ie"))
                        )
                          return !1;
                      }
                      break;
                    case 3:
                      if (this.cursor <= this.limit_backward) return !1;
                      this.cursor--;
                      t: for (;;) {
                        var _t49 = !0;
                        for (
                          ;
                          1 == _t49 &&
                          ((_t49 = !1), this.in_grouping_b(o.g_v, 97, 121));

                        )
                          break t;
                        if (this.cursor <= this.limit_backward) return !1;
                        this.cursor--;
                      }
                      if (!this.slice_del()) return !1;
                  }
                  return !0;
                },
              },
              {
                key: "r_Step_1b",
                value: function r_Step_1b() {
                  var t, e, s, n;
                  if (
                    ((this.ket = this.cursor),
                    (t = this.find_among_b(o.a_4, 6)),
                    0 == t)
                  )
                    return !1;
                  switch (((this.bra = this.cursor), t)) {
                    case 0:
                      return !1;
                    case 1:
                      if (!this.r_R1()) return !1;
                      if (!this.slice_from("ee")) return !1;
                      break;
                    case 2:
                      e = this.limit - this.cursor;
                      t: for (;;) {
                        var _t50 = !0;
                        for (
                          ;
                          1 == _t50 &&
                          ((_t50 = !1), this.in_grouping_b(o.g_v, 97, 121));

                        )
                          break t;
                        if (this.cursor <= this.limit_backward) return !1;
                        this.cursor--;
                      }
                      if (((this.cursor = this.limit - e), !this.slice_del()))
                        return !1;
                      if (
                        ((s = this.limit - this.cursor),
                        (t = this.find_among_b(o.a_3, 13)),
                        0 == t)
                      )
                        return !1;
                      switch (((this.cursor = this.limit - s), t)) {
                        case 0:
                          return !1;
                        case 1:
                          var i = this.cursor;
                          this.insert(this.cursor, this.cursor, "e"),
                            (this.cursor = i);
                          break;
                        case 2:
                          if (
                            ((this.ket = this.cursor),
                            this.cursor <= this.limit_backward)
                          )
                            return !1;
                          if (
                            (this.cursor--,
                            (this.bra = this.cursor),
                            !this.slice_del())
                          )
                            return !1;
                          break;
                        case 3:
                          if (this.cursor != this.I_p1) return !1;
                          if (
                            ((n = this.limit - this.cursor), !this.r_shortv())
                          )
                            return !1;
                          this.cursor = this.limit - n;
                          i = this.cursor;
                          this.insert(this.cursor, this.cursor, "e"),
                            (this.cursor = i);
                      }
                  }
                  return !0;
                },
              },
              {
                key: "r_Step_1c",
                value: function r_Step_1c() {
                  var t, e;
                  this.ket = this.cursor;
                  var s = !0;
                  t: for (; 1 == s; ) {
                    (s = !1), (t = this.limit - this.cursor);
                    var _e16 = !0;
                    for (; 1 == _e16 && ((_e16 = !1), this.eq_s_b("y")); )
                      break t;
                    if (((this.cursor = this.limit - t), !this.eq_s_b("Y")))
                      return !1;
                  }
                  if (
                    ((this.bra = this.cursor),
                    !this.out_grouping_b(o.g_v, 97, 121))
                  )
                    return !1;
                  {
                    e = this.limit - this.cursor;
                    var _t51 = !0;
                    for (
                      ;
                      1 == _t51 &&
                      ((_t51 = !1), !(this.cursor > this.limit_backward));

                    )
                      return !1;
                    this.cursor = this.limit - e;
                  }
                  return !!this.slice_from("i");
                },
              },
              {
                key: "r_Step_2",
                value: function r_Step_2() {
                  var t;
                  if (
                    ((this.ket = this.cursor),
                    (t = this.find_among_b(o.a_5, 24)),
                    0 == t)
                  )
                    return !1;
                  if (((this.bra = this.cursor), !this.r_R1())) return !1;
                  switch (t) {
                    case 0:
                      return !1;
                    case 1:
                      if (!this.slice_from("tion")) return !1;
                      break;
                    case 2:
                      if (!this.slice_from("ence")) return !1;
                      break;
                    case 3:
                      if (!this.slice_from("ance")) return !1;
                      break;
                    case 4:
                      if (!this.slice_from("able")) return !1;
                      break;
                    case 5:
                      if (!this.slice_from("ent")) return !1;
                      break;
                    case 6:
                      if (!this.slice_from("ize")) return !1;
                      break;
                    case 7:
                      if (!this.slice_from("ate")) return !1;
                      break;
                    case 8:
                      if (!this.slice_from("al")) return !1;
                      break;
                    case 9:
                    case 14:
                      if (!this.slice_from("ful")) return !1;
                      break;
                    case 10:
                      if (!this.slice_from("ous")) return !1;
                      break;
                    case 11:
                      if (!this.slice_from("ive")) return !1;
                      break;
                    case 12:
                      if (!this.slice_from("ble")) return !1;
                      break;
                    case 13:
                      if (!this.eq_s_b("l")) return !1;
                      if (!this.slice_from("og")) return !1;
                      break;
                    case 15:
                      if (!this.slice_from("less")) return !1;
                      break;
                    case 16:
                      if (!this.in_grouping_b(o.g_valid_LI, 99, 116)) return !1;
                      if (!this.slice_del()) return !1;
                  }
                  return !0;
                },
              },
              {
                key: "r_Step_3",
                value: function r_Step_3() {
                  var t;
                  if (
                    ((this.ket = this.cursor),
                    (t = this.find_among_b(o.a_6, 9)),
                    0 == t)
                  )
                    return !1;
                  if (((this.bra = this.cursor), !this.r_R1())) return !1;
                  switch (t) {
                    case 0:
                      return !1;
                    case 1:
                      if (!this.slice_from("tion")) return !1;
                      break;
                    case 2:
                      if (!this.slice_from("ate")) return !1;
                      break;
                    case 3:
                      if (!this.slice_from("al")) return !1;
                      break;
                    case 4:
                      if (!this.slice_from("ic")) return !1;
                      break;
                    case 5:
                      if (!this.slice_del()) return !1;
                      break;
                    case 6:
                      if (!this.r_R2()) return !1;
                      if (!this.slice_del()) return !1;
                  }
                  return !0;
                },
              },
              {
                key: "r_Step_4",
                value: function r_Step_4() {
                  var t, e;
                  if (
                    ((this.ket = this.cursor),
                    (t = this.find_among_b(o.a_7, 18)),
                    0 == t)
                  )
                    return !1;
                  if (((this.bra = this.cursor), !this.r_R2())) return !1;
                  switch (t) {
                    case 0:
                      return !1;
                    case 1:
                      if (!this.slice_del()) return !1;
                      break;
                    case 2:
                      var s = !0;
                      t: for (; 1 == s; ) {
                        (s = !1), (e = this.limit - this.cursor);
                        var _t52 = !0;
                        for (; 1 == _t52 && ((_t52 = !1), this.eq_s_b("s")); )
                          break t;
                        if (((this.cursor = this.limit - e), !this.eq_s_b("t")))
                          return !1;
                      }
                      if (!this.slice_del()) return !1;
                  }
                  return !0;
                },
              },
              {
                key: "r_Step_5",
                value: function r_Step_5() {
                  var t, e, s;
                  if (
                    ((this.ket = this.cursor),
                    (t = this.find_among_b(o.a_8, 2)),
                    0 == t)
                  )
                    return !1;
                  switch (((this.bra = this.cursor), t)) {
                    case 0:
                      return !1;
                    case 1:
                      var n = !0;
                      t: for (; 1 == n; ) {
                        (n = !1), (e = this.limit - this.cursor);
                        var _t53 = !0;
                        for (; 1 == _t53 && ((_t53 = !1), this.r_R2()); )
                          break t;
                        if (((this.cursor = this.limit - e), !this.r_R1()))
                          return !1;
                        {
                          s = this.limit - this.cursor;
                          var _t54 = !0;
                          for (; 1 == _t54 && ((_t54 = !1), this.r_shortv()); )
                            return !1;
                          this.cursor = this.limit - s;
                        }
                      }
                      if (!this.slice_del()) return !1;
                      break;
                    case 2:
                      if (!this.r_R2()) return !1;
                      if (!this.eq_s_b("l")) return !1;
                      if (!this.slice_del()) return !1;
                  }
                  return !0;
                },
              },
              {
                key: "r_exception2",
                value: function r_exception2() {
                  return (
                    (this.ket = this.cursor),
                    0 != this.find_among_b(o.a_9, 8) &&
                      ((this.bra = this.cursor),
                      !(this.cursor > this.limit_backward))
                  );
                },
              },
              {
                key: "r_exception1",
                value: function r_exception1() {
                  var t;
                  if (
                    ((this.bra = this.cursor),
                    (t = this.find_among(o.a_10, 18)),
                    0 == t)
                  )
                    return !1;
                  if (((this.ket = this.cursor), this.cursor < this.limit))
                    return !1;
                  switch (t) {
                    case 0:
                      return !1;
                    case 1:
                      if (!this.slice_from("ski")) return !1;
                      break;
                    case 2:
                      if (!this.slice_from("sky")) return !1;
                      break;
                    case 3:
                      if (!this.slice_from("die")) return !1;
                      break;
                    case 4:
                      if (!this.slice_from("lie")) return !1;
                      break;
                    case 5:
                      if (!this.slice_from("tie")) return !1;
                      break;
                    case 6:
                      if (!this.slice_from("idl")) return !1;
                      break;
                    case 7:
                      if (!this.slice_from("gentl")) return !1;
                      break;
                    case 8:
                      if (!this.slice_from("ugli")) return !1;
                      break;
                    case 9:
                      if (!this.slice_from("earli")) return !1;
                      break;
                    case 10:
                      if (!this.slice_from("onli")) return !1;
                      break;
                    case 11:
                      if (!this.slice_from("singl")) return !1;
                  }
                  return !0;
                },
              },
              {
                key: "r_postlude",
                value: function r_postlude() {
                  var t, e;
                  if (!this.B_Y_found) return !1;
                  t: for (;;) {
                    t = this.cursor;
                    var _s20 = !0;
                    e: for (; 1 == _s20; ) {
                      _s20 = !1;
                      s: for (;;) {
                        e = this.cursor;
                        var _t55 = !0;
                        for (
                          ;
                          1 == _t55 &&
                          ((_t55 = !1),
                          (this.bra = this.cursor),
                          this.eq_s("Y"));

                        ) {
                          (this.ket = this.cursor), (this.cursor = e);
                          break s;
                        }
                        if (((this.cursor = e), this.cursor >= this.limit))
                          break e;
                        this.cursor++;
                      }
                      if (!this.slice_from("y")) return !1;
                      continue t;
                    }
                    this.cursor = t;
                    break;
                  }
                  return !0;
                },
              },
              {
                key: "innerStem",
                value: function innerStem() {
                  var t,
                    e,
                    s,
                    n,
                    i,
                    r,
                    _o12,
                    a,
                    u,
                    c,
                    l,
                    h,
                    g,
                    f = !0;
                  t: for (; 1 == f; ) {
                    (f = !1), (t = this.cursor);
                    var p = !0;
                    for (; 1 == p && ((p = !1), this.r_exception1()); ) break t;
                    this.cursor = t;
                    var d = !0;
                    e: for (; 1 == d; ) {
                      d = !1;
                      {
                        e = this.cursor;
                        var _t56 = !0;
                        for (; 1 == _t56; ) {
                          _t56 = !1;
                          {
                            var _t57 = this.cursor + 3;
                            if (_t57 < 0 || _t57 > this.limit) break;
                            this.cursor = _t57;
                          }
                          break e;
                        }
                        this.cursor = e;
                      }
                      break t;
                    }
                    (this.cursor = t), (s = this.cursor);
                    var m = !0;
                    for (; 1 == m && ((m = !1), this.r_prelude()); );
                    (this.cursor = s), (n = this.cursor);
                    var y = !0;
                    for (; 1 == y && ((y = !1), this.r_mark_regions()); );
                    (this.cursor = n),
                      (this.limit_backward = this.cursor),
                      (this.cursor = this.limit),
                      (i = this.limit - this.cursor);
                    var w = !0;
                    for (; 1 == w && ((w = !1), this.r_Step_1a()); );
                    this.cursor = this.limit - i;
                    var b = !0;
                    e: for (; 1 == b; ) {
                      (b = !1), (r = this.limit - this.cursor);
                      var _t58 = !0;
                      for (; 1 == _t58 && ((_t58 = !1), this.r_exception2()); )
                        break e;
                      (this.cursor = this.limit - r),
                        (_o12 = this.limit - this.cursor);
                      var _e17 = !0;
                      for (; 1 == _e17 && ((_e17 = !1), this.r_Step_1b()); );
                      (this.cursor = this.limit - _o12),
                        (a = this.limit - this.cursor);
                      var _s21 = !0;
                      for (; 1 == _s21 && ((_s21 = !1), this.r_Step_1c()); );
                      (this.cursor = this.limit - a),
                        (u = this.limit - this.cursor);
                      var _n12 = !0;
                      for (; 1 == _n12 && ((_n12 = !1), this.r_Step_2()); );
                      (this.cursor = this.limit - u),
                        (c = this.limit - this.cursor);
                      var _i8 = !0;
                      for (; 1 == _i8 && ((_i8 = !1), this.r_Step_3()); );
                      (this.cursor = this.limit - c),
                        (l = this.limit - this.cursor);
                      var _g = !0;
                      for (; 1 == _g && ((_g = !1), this.r_Step_4()); );
                      (this.cursor = this.limit - l),
                        (h = this.limit - this.cursor);
                      var _f = !0;
                      for (; 1 == _f && ((_f = !1), this.r_Step_5()); );
                      this.cursor = this.limit - h;
                    }
                    (this.cursor = this.limit_backward), (g = this.cursor);
                    var x = !0;
                    for (; 1 == x && ((x = !1), this.r_postlude()); );
                    this.cursor = g;
                  }
                  return !0;
                },
              },
            ]);
            return o;
          })(i);
          (o.methodObject = new o()),
            (o.a_0 = [
              new n("arsen", -1, -1),
              new n("commun", -1, -1),
              new n("gener", -1, -1),
            ]),
            (o.a_1 = [
              new n("'", -1, 1),
              new n("'s'", 0, 1),
              new n("'s", -1, 1),
            ]),
            (o.a_2 = [
              new n("ied", -1, 2),
              new n("s", -1, 3),
              new n("ies", 1, 2),
              new n("sses", 1, 1),
              new n("ss", 1, -1),
              new n("us", 1, -1),
            ]),
            (o.a_3 = [
              new n("", -1, 3),
              new n("bb", 0, 2),
              new n("dd", 0, 2),
              new n("ff", 0, 2),
              new n("gg", 0, 2),
              new n("bl", 0, 1),
              new n("mm", 0, 2),
              new n("nn", 0, 2),
              new n("pp", 0, 2),
              new n("rr", 0, 2),
              new n("at", 0, 1),
              new n("tt", 0, 2),
              new n("iz", 0, 1),
            ]),
            (o.a_4 = [
              new n("ed", -1, 2),
              new n("eed", 0, 1),
              new n("ing", -1, 2),
              new n("edly", -1, 2),
              new n("eedly", 3, 1),
              new n("ingly", -1, 2),
            ]),
            (o.a_5 = [
              new n("anci", -1, 3),
              new n("enci", -1, 2),
              new n("ogi", -1, 13),
              new n("li", -1, 16),
              new n("bli", 3, 12),
              new n("abli", 4, 4),
              new n("alli", 3, 8),
              new n("fulli", 3, 14),
              new n("lessli", 3, 15),
              new n("ousli", 3, 10),
              new n("entli", 3, 5),
              new n("aliti", -1, 8),
              new n("biliti", -1, 12),
              new n("iviti", -1, 11),
              new n("tional", -1, 1),
              new n("ational", 14, 7),
              new n("alism", -1, 8),
              new n("ation", -1, 7),
              new n("ization", 17, 6),
              new n("izer", -1, 6),
              new n("ator", -1, 7),
              new n("iveness", -1, 11),
              new n("fulness", -1, 9),
              new n("ousness", -1, 10),
            ]),
            (o.a_6 = [
              new n("icate", -1, 4),
              new n("ative", -1, 6),
              new n("alize", -1, 3),
              new n("iciti", -1, 4),
              new n("ical", -1, 4),
              new n("tional", -1, 1),
              new n("ational", 5, 2),
              new n("ful", -1, 5),
              new n("ness", -1, 5),
            ]),
            (o.a_7 = [
              new n("ic", -1, 1),
              new n("ance", -1, 1),
              new n("ence", -1, 1),
              new n("able", -1, 1),
              new n("ible", -1, 1),
              new n("ate", -1, 1),
              new n("ive", -1, 1),
              new n("ize", -1, 1),
              new n("iti", -1, 1),
              new n("al", -1, 1),
              new n("ism", -1, 1),
              new n("ion", -1, 2),
              new n("er", -1, 1),
              new n("ous", -1, 1),
              new n("ant", -1, 1),
              new n("ent", -1, 1),
              new n("ment", 15, 1),
              new n("ement", 16, 1),
            ]),
            (o.a_8 = [new n("e", -1, 1), new n("l", -1, 2)]),
            (o.a_9 = [
              new n("succeed", -1, -1),
              new n("proceed", -1, -1),
              new n("exceed", -1, -1),
              new n("canning", -1, -1),
              new n("inning", -1, -1),
              new n("earring", -1, -1),
              new n("herring", -1, -1),
              new n("outing", -1, -1),
            ]),
            (o.a_10 = [
              new n("andes", -1, -1),
              new n("atlas", -1, -1),
              new n("bias", -1, -1),
              new n("cosmos", -1, -1),
              new n("dying", -1, 3),
              new n("early", -1, 9),
              new n("gently", -1, 7),
              new n("howe", -1, -1),
              new n("idly", -1, 6),
              new n("lying", -1, 4),
              new n("news", -1, -1),
              new n("only", -1, 10),
              new n("singly", -1, 11),
              new n("skies", -1, 2),
              new n("skis", -1, 1),
              new n("sky", -1, -1),
              new n("tying", -1, 5),
              new n("ugly", -1, 8),
            ]),
            (o.g_v = [17, 65, 16, 1]),
            (o.g_v_WXY = [1, 17, 65, 208, 1]),
            (o.g_valid_LI = [55, 141, 2]),
            (e.exports = o);
        },
        {
          "./tokenizer-en": 29,
          "@nlpjs/core": 12,
        },
      ],
      28: [
        function (t, e, s) {
          var _t59 = t("@nlpjs/core"),
            n = _t59.Stopwords;
          e.exports = /*#__PURE__*/ (function (_n13) {
            _inherits(_class16, _n13);
            var _super5 = _createSuper(_class16);
            function _class16(t, e) {
              var _this9;
              _classCallCheck(this, _class16);
              (_this9 = _super5.call(this, t)),
                (_this9.name = "stopwords-en"),
                (_this9.dictionary = {});
              var s = e || [
                "about",
                "above",
                "after",
                "again",
                "all",
                "also",
                "am",
                "an",
                "and",
                "another",
                "any",
                "are",
                "as",
                "at",
                "be",
                "because",
                "been",
                "before",
                "being",
                "below",
                "between",
                "both",
                "but",
                "by",
                "came",
                "can",
                "cannot",
                "come",
                "could",
                "did",
                "do",
                "does",
                "doing",
                "during",
                "each",
                "few",
                "for",
                "from",
                "further",
                "get",
                "got",
                "has",
                "had",
                "he",
                "have",
                "her",
                "here",
                "him",
                "himself",
                "his",
                "how",
                "if",
                "in",
                "into",
                "is",
                "it",
                "its",
                "itself",
                "like",
                "make",
                "many",
                "me",
                "might",
                "more",
                "most",
                "much",
                "must",
                "my",
                "myself",
                "never",
                "now",
                "of",
                "on",
                "only",
                "or",
                "other",
                "our",
                "ours",
                "ourselves",
                "out",
                "over",
                "own",
                "said",
                "same",
                "see",
                "should",
                "since",
                "so",
                "some",
                "still",
                "such",
                "take",
                "than",
                "that",
                "the",
                "their",
                "theirs",
                "them",
                "themselves",
                "then",
                "there",
                "these",
                "they",
                "this",
                "those",
                "through",
                "to",
                "too",
                "under",
                "until",
                "up",
                "very",
                "was",
                "way",
                "we",
                "well",
                "were",
                "what",
                "where",
                "when",
                "which",
                "while",
                "who",
                "whom",
                "with",
                "would",
                "why",
                "you",
                "your",
                "yours",
                "yourself",
                "a",
                "b",
                "c",
                "d",
                "e",
                "f",
                "g",
                "h",
                "i",
                "j",
                "k",
                "l",
                "m",
                "n",
                "o",
                "p",
                "q",
                "r",
                "s",
                "t",
                "u",
                "v",
                "w",
                "x",
                "y",
                "z",
                "$",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "0",
                "_",
              ];
              _this9.build(s);
              return _this9;
            }
            return _createClass(_class16);
          })(n);
        },
        {
          "@nlpjs/core": 12,
        },
      ],
      29: [
        function (t, e, s) {
          var _t60 = t("@nlpjs/core"),
            n = _t60.Tokenizer;
          e.exports = /*#__PURE__*/ (function (_n14) {
            _inherits(_class17, _n14);
            var _super6 = _createSuper(_class17);
            function _class17(t, e) {
              var _this10;
              _classCallCheck(this, _class17);
              (_this10 = _super6.call(this, t, e)),
                (_this10.name = "tokenizer-en");
              return _this10;
            }
            _createClass(_class17, [
              {
                key: "replace",
                value: function replace(t) {
                  var e = t.replace(/n't([ ,:;.!?]|$)/gi, " not ");
                  return (
                    (e = e.replace(/can't([ ,:;.!?]|$)/gi, "can not ")),
                    (e = e.replace(/'ll([ ,:;.!?]|$)/gi, " will ")),
                    (e = e.replace(/'s([ ,:;.!?]|$)/gi, " is ")),
                    (e = e.replace(/'re([ ,:;.!?]|$)/gi, " are ")),
                    (e = e.replace(/'ve([ ,:;.!?]|$)/gi, " have ")),
                    (e = e.replace(/'m([ ,:;.!?]|$)/gi, " am ")),
                    (e = e.replace(/'d([ ,:;.!?]|$)/gi, " had ")),
                    e
                  );
                },
              },
              {
                key: "replaceContractions",
                value: function replaceContractions(t) {
                  var e = {
                      cannot: ["can", "not"],
                      gonna: ["going", "to"],
                      wanna: ["want", "to"],
                    },
                    s = [];
                  return (
                    t.forEach(function (t) {
                      var n = t.toLowerCase();
                      Object.prototype.hasOwnProperty.call(e, n)
                        ? s.push.apply(s, _toConsumableArray(e[n]))
                        : s.push(t);
                    }),
                    s
                  );
                },
              },
              {
                key: "innerTokenize",
                value: function innerTokenize(t) {
                  var e = this.replace(t)
                    .split(/[\s,.!?;:([\]'"¡¿)/]+/)
                    .filter(function (t) {
                      return t;
                    });
                  return this.replaceContractions(e, t);
                },
              },
            ]);
            return _class17;
          })(n);
        },
        {
          "@nlpjs/core": 12,
        },
      ],
      30: [
        function (t, e, s) {
          e.exports = function (t) {
            var e = t.get("Language");
            e &&
              e.addModel(
                "Latin",
                "eng",
                " ththe anhe nd andion ofof tio toto on  inal atiighghtrig rior entas ed is ll in  bee rne oneveralls tevet t frs a ha rety ery ord t prht  co eve he ang ts hisingbe yon shce reefreryon thermennatshapronaly ahases for hihalf tn an ont  pes o fod inceer onsrese sectityly l bry e eerse ian e o dectidomedoeedhtsteronare  no wh a  und f asny l ae pere en na winitnted aanyted dins stath perithe tst e cy tom soc arch t od ontis eequve ociman fuoteothess al acwitial mauni serea so onlitintr ty oencthiualt a eqtatquaive stalie wl oaref hconte led isundciae fle  lay iumaby  byhumf aic  huavege r a woo ams com meeass dtec lin een rattitplewheateo ts rt frot chciedisagearyo oancelino  fa susonincat ndahouwort inderomoms otg temetleitignis witlducd wwhiacthicaw law heichminimiorto sse e bntrtraeduountane dnstl pd nld ntas iblen p pun s atilyrththofulssidero ecatucauntien edo ph aeraindpensecn wommr s"
              );
          };
        },
        {},
      ],
      31: [
        function (t, e, s) {
          e.exports = {
            Latin: {
              spa: "",
              eng: "",
              por: "",
              ind: "",
              fra: "",
              deu: "",
              ita: "",
              tur: "",
              nld: "",
              tgl: "",
              hun: "",
              ces: "",
              swe: "",
              fin: "",
              dan: "",
              cat: "",
              glg: "",
              slv: "",
            },
            Cyrillic: {
              rus: "",
              ukr: "",
            },
            Arabic: {
              arb: "",
              fas: "",
            },
            Devanagari: {
              hin: "",
            },
            Ethiopic: {},
            Hebrew: {},
          };
        },
        {},
      ],
      32: [
        function (t, e, s) {
          var n = t("./language");
          e.exports = {
            Language: n,
          };
        },
        {
          "./language": 33,
        },
      ],
      33: [
        function (t, e, s) {
          var n = t("./languages.json"),
            i = t("./data.json"),
            r = {
              cmn: /[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DB5\u4E00-\u9FCC\uF900-\uFA6D\uFA70-\uFAD9]|[\uD840-\uD868\uD86A-\uD86C][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D]|\uD87E[\uDC00-\uDE1D]/g,
              Latin:
                /[A-Za-z\xAA\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02B8\u02E0-\u02E4\u1D00-\u1D25\u1D2C-\u1D5C\u1D62-\u1D65\u1D6B-\u1D77\u1D79-\u1DBE\u1E00-\u1EFF\u2071\u207F\u2090-\u209C\u212A\u212B\u2132\u214E\u2160-\u2188\u2C60-\u2C7F\uA722-\uA787\uA78B-\uA78E\uA790-\uA7AD\uA7B0\uA7B1\uA7F7-\uA7FF\uAB30-\uAB5A\uAB5C-\uAB5F\uAB64\uFB00-\uFB06\uFF21-\uFF3A\uFF41-\uFF5A]/g,
              Cyrillic:
                /[\u0400-\u0484\u0487-\u052F\u1D2B\u1D78\u2DE0-\u2DFF\uA640-\uA69D\uA69F]/g,
              Arabic:
                /[\u0600-\u0604\u0606-\u060B\u060D-\u061A\u061E\u0620-\u063F\u0641-\u064A\u0656-\u065F\u066A-\u066F\u0671-\u06DC\u06DE-\u06FF\u0750-\u077F\u08A0-\u08B2\u08E4-\u08FF\uFB50-\uFBC1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFD\uFE70-\uFE74\uFE76-\uFEFC]|\uD803[\uDE60-\uDE7E]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB\uDEF0\uDEF1]/g,
              ben: /[\u0980-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09FB]/g,
              Devanagari:
                /[\u0900-\u0950\u0953-\u0963\u0966-\u097F\uA8E0-\uA8FB]/g,
              jpn: /[\u3041-\u3096\u309D-\u309F]|\uD82C\uDC01|\uD83C\uDE00|[\u30A1-\u30FA\u30FD-\u30FF\u31F0-\u31FF\u32D0-\u32FE\u3300-\u3357\uFF66-\uFF6F\uFF71-\uFF9D]|\uD82C\uDC00/g,
              kor: /[\u1100-\u11FF\u302E\u302F\u3131-\u318E\u3200-\u321E\u3260-\u327E\uA960-\uA97C\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uFFA0-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/g,
              tel: /[\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58\u0C59\u0C60-\u0C63\u0C66-\u0C6F\u0C78-\u0C7F]/g,
              tam: /[\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BFA]/g,
              guj: /[\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AF1]/g,
              kan: /[\u0C81-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2]/g,
              mal: /[\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D57\u0D60-\u0D63\u0D66-\u0D75\u0D79-\u0D7F]/g,
              Myanmar: /[\u1000-\u109F\uA9E0-\uA9FE\uAA60-\uAA7F]/g,
              ori: /[\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B77]/g,
              pan: /[\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75]/g,
              Ethiopic:
                /[\u1200-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u137C\u1380-\u1399\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E]/g,
              tha: /[\u0E01-\u0E3A\u0E40-\u0E5B]/g,
              sin: /[\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2-\u0DF4]|\uD804[\uDDE1-\uDDF4]/g,
              ell: /[\u0370-\u0373\u0375-\u0377\u037A-\u037D\u037F\u0384\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03E1\u03F0-\u03FF\u1D26-\u1D2A\u1D5D-\u1D61\u1D66-\u1D6A\u1DBF\u1F00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FC4\u1FC6-\u1FD3\u1FD6-\u1FDB\u1FDD-\u1FEF\u1FF2-\u1FF4\u1FF6-\u1FFE\u2126\uAB65]|\uD800[\uDD40-\uDD8C\uDDA0]|\uD834[\uDE00-\uDE45]/g,
              khm: /[\u1780-\u17DD\u17E0-\u17E9\u17F0-\u17F9\u19E0-\u19FF]/g,
              hye: /[\u0531-\u0556\u0559-\u055F\u0561-\u0587\u058A\u058D-\u058F\uFB13-\uFB17]/g,
              sat: /[\u1C50-\u1C7F]/g,
              bod: /[\u0F00-\u0F47\u0F49-\u0F6C\u0F71-\u0F97\u0F99-\u0FBC\u0FBE-\u0FCC\u0FCE-\u0FD4\u0FD9\u0FDA]/g,
              Hebrew:
                /[\u0591-\u05C7\u05D0-\u05EA\u05F0-\u05F4\uFB1D-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFB4F]/g,
              kat: /[\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u10FF\u2D00-\u2D25\u2D27\u2D2D]/g,
              lao: /[\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF]/g,
              zgh: /[\u2D30-\u2D67\u2D6F\u2D70\u2D7F]/g,
              iii: /[\uA000-\uA48C\uA490-\uA4C6]/g,
              aii: /[\u0700-\u070D\u070F-\u074A\u074D-\u074F]/g,
            },
            o = Object.keys(r);
          var a = /*#__PURE__*/ (function () {
            function a() {
              _classCallCheck(this, a);
              (this.languagesAlpha3 = {}),
                (this.languagesAlpha2 = {}),
                (this.extraSentences = []),
                this.buildData();
            }
            _createClass(
              a,
              [
                {
                  key: "buildData",
                  value: function buildData() {
                    for (var _t61 = 0; _t61 < n.length; _t61 += 1) {
                      var _e18 = {
                        alpha2: n[_t61][0],
                        alpha3: n[_t61][1],
                        name: n[_t61][2],
                      };
                      (this.languagesAlpha3[_e18.alpha3] = _e18),
                        (this.languagesAlpha2[_e18.alpha2] = _e18);
                    }
                  },
                },
                {
                  key: "transformAllowList",
                  value: function transformAllowList(t) {
                    var e = [];
                    for (var _s22 = 0; _s22 < t.length; _s22 += 1)
                      if (3 === t[_s22].length) e.push(t[_s22]);
                      else {
                        var _n15 = this.languagesAlpha2[t[_s22]];
                        _n15 && e.push(_n15.alpha3);
                      }
                    return e;
                  },
                },
                {
                  key: "guess",
                  value: function guess(t, e, s) {
                    var n = {};
                    t.length < 10 && (n.minLength = t.length),
                      e &&
                        e.length &&
                        e.length > 0 &&
                        (n.allowList = this.transformAllowList(e));
                    var i = a.detectAll(t, n),
                      r = [];
                    for (var _t62 = 0; _t62 < i.length; _t62 += 1) {
                      var _e19 = this.languagesAlpha3[i[_t62][0]];
                      if (
                        _e19 &&
                        (r.push({
                          alpha3: _e19.alpha3,
                          alpha2: _e19.alpha2,
                          language: _e19.name,
                          score: i[_t62][1],
                        }),
                        s && r.length >= s)
                      )
                        break;
                    }
                    return r;
                  },
                },
                {
                  key: "guessBest",
                  value: function guessBest(t, e) {
                    return this.guess(t, e, 1)[0];
                  },
                },
                {
                  key: "addTrigrams",
                  value: function addTrigrams(t, e) {
                    var s = this.languagesAlpha2[t],
                      n = s ? s.alpha3 : t,
                      r = a.getTopScript(e)[0],
                      o = a.getTrigrams(e);
                    i[r] &&
                      (i[r][n] || (i[r][n] = {}),
                      o.forEach(function (t) {
                        i[r][n][t] = 1;
                      }));
                  },
                },
                {
                  key: "addExtraSentence",
                  value: function addExtraSentence(t, e) {
                    this.extraSentences.push([t, e]), this.addTrigrams(t, e);
                  },
                },
                {
                  key: "processExtraSentences",
                  value: function processExtraSentences() {
                    var _this11 = this;
                    this.extraSentences.forEach(function (t) {
                      _this11.addTrigrams(t[0], t[1]);
                    });
                  },
                },
                {
                  key: "addModel",
                  value: function addModel(t, e, s) {
                    a.addModel(t, e, s);
                  },
                },
              ],
              [
                {
                  key: "getTrigrams",
                  value: function getTrigrams(t) {
                    var e = [],
                      s = t
                        ? " ".concat(
                            String(t)
                              .replace(/[\u0021-\u0040]+/g, " ")
                              .replace(/\s+/g, " ")
                              .trim()
                              .toLowerCase(),
                            " "
                          )
                        : "";
                    if (!s || s.length < 3) return e;
                    for (
                      var _t63 = 0, _n16 = s.length - 2;
                      _t63 < _n16;
                      _t63 += 1
                    )
                      e[_t63] = s.substr(_t63, 3);
                    return e;
                  },
                },
                {
                  key: "asTuples",
                  value: function asTuples(t) {
                    var e = a.getTrigrams(t).reduce(function (t, e) {
                        var s = t;
                        return (s[e] = (s[e] || 0) + 1), s;
                      }, {}),
                      s = [];
                    return (
                      Object.keys(e).forEach(function (t) {
                        s.push([t, e[t]]);
                      }),
                      s.sort(function (t, e) {
                        return t[1] - e[1];
                      }),
                      s
                    );
                  },
                },
                {
                  key: "getDistance",
                  value: function getDistance(t, e) {
                    var s = 0;
                    return (
                      t.forEach(function (t) {
                        s += t[0] in e ? Math.abs(t[1] - e[t[0]] - 1) : 300;
                      }),
                      s
                    );
                  },
                },
                {
                  key: "getOccurrence",
                  value: function getOccurrence(t, e) {
                    var s = t.match(e);
                    return (s ? s.length : 0) / t.length || 0;
                  },
                },
                {
                  key: "isLatin",
                  value: function isLatin(t) {
                    var e = 0;
                    var s = t.length / 2;
                    for (var _n17 = 0; _n17 < t.length; _n17 += 1) {
                      var _i9 = t.charCodeAt(_n17);
                      if (_i9 >= 32 && _i9 <= 126 && ((e += 1), e > s))
                        return !0;
                    }
                    return e > s;
                  },
                },
                {
                  key: "getTopScript",
                  value: function getTopScript(t) {
                    if (a.isLatin(t)) return ["Latin", 1];
                    var e,
                      s = -1;
                    for (var _n18 = 0; _n18 < o.length; _n18 += 1) {
                      var _i10 = o[_n18],
                        u = a.getOccurrence(t, r[_i10]);
                      if (u > s && ((s = u), (e = _i10), 1 === s))
                        return [e, s];
                    }
                    return [e, s];
                  },
                },
                {
                  key: "filterLanguages",
                  value: function filterLanguages(t, e, s) {
                    if (0 === e.length && 0 === s.length) return t;
                    var n = {};
                    return (
                      Object.keys(t).forEach(function (i) {
                        (0 === e.length || e.indexOf(i) > -1) &&
                          -1 === s.indexOf(i) &&
                          (n[i] = t[i]);
                      }),
                      n
                    );
                  },
                },
                {
                  key: "getDistances",
                  value: function getDistances(t, e, s) {
                    var n = [],
                      i = s.allowList || [],
                      r = s.denyList || [],
                      o = a.filterLanguages(e, i, r);
                    return o
                      ? (Object.keys(o).forEach(function (e) {
                          n.push([e, a.getDistance(t, o[e])]);
                        }),
                        n.sort(function (t, e) {
                          return t[1] - e[1];
                        }))
                      : [["und", 1]];
                  },
                },
                {
                  key: "detectAll",
                  value: function detectAll(t) {
                    var e =
                      arguments.length > 1 && arguments[1] !== undefined
                        ? arguments[1]
                        : {};
                    var s = e.minLength || 10;
                    if (!t || t.length < s) return [["und", 1]];
                    var n = t.substr(0, 2048),
                      r = a.getTopScript(n);
                    if (!(r[0] in i) && r[1] > 0.5) {
                      if (!e.allowList) return [[r[0], 1]];
                      if (e.allowList.includes(r[0])) return [[r[0], 1]];
                      if ("cmn" === r[0] && e.allowList.includes("jpn"))
                        return [["jpn", 1]];
                    }
                    if (i[r[0]]) {
                      var _t64 = a.getDistances(a.asTuples(n), i[r[0]], e);
                      if ("und" === _t64[0][0]) return [[r[0], 1]];
                      var _s23 = _t64[0][1],
                        _o13 = 300 * n.length - _s23;
                      return _t64.map(function (t) {
                        return [t[0], 1 - (t[1] - _s23) / _o13 || 0];
                      });
                    }
                    return [[r[0], 1]];
                  },
                },
                {
                  key: "lansplit",
                  value: function lansplit(t) {
                    if (t.includes("|")) return t.split("|");
                    var e = [];
                    for (var _s24 = 0; _s24 < t.length; _s24 += 3)
                      e.push(t.substr(_s24, 3));
                    return e;
                  },
                },
                {
                  key: "addModel",
                  value: function addModel(t, e, s) {
                    var n = i[t],
                      r = a.lansplit(s);
                    var o = r.length;
                    var u = {};
                    for (; o > 0; ) (o -= 1), (u[r[o]] = o);
                    n[e] = u;
                  },
                },
                {
                  key: "buildModel",
                  value: function buildModel() {
                    Object.keys(i).forEach(function (t) {
                      var e = i[t];
                      Object.keys(e).forEach(function (s) {
                        a.addModel(t, s, e[s]);
                      });
                    });
                  },
                },
              ]
            );
            return a;
          })();
          a.buildModel(), (e.exports = a);
        },
        {
          "./data.json": 31,
          "./languages.json": 34,
        },
      ],
      34: [
        function (t, e, s) {
          e.exports = [
            ["ar", "arb", "Arabic"],
            ["bn", "ben", "Bengali"],
            ["ca", "cat", "Catalan"],
            ["cs", "ces", "Czech"],
            ["da", "dan", "Danish"],
            ["de", "deu", "German"],
            ["el", "ell", "Greek"],
            ["en", "eng", "English"],
            ["eu", "eus", "Basque"],
            ["fa", "fas", "Persian"],
            ["fi", "fin", "Finnish"],
            ["fr", "fra", "French"],
            ["ga", "gle", "Irish"],
            ["gl", "glg", "Galician"],
            ["hi", "hin", "Hindi"],
            ["hu", "hun", "Hungarian"],
            ["hy", "hye", "Armenian"],
            ["id", "ind", "Indonesian"],
            ["it", "ita", "Italian"],
            ["ja", "jpn", "Japanese"],
            ["ko", "kor", "Korean"],
            ["lt", "lit", "Lithuanian"],
            ["ne", "nep", "Nepali"],
            ["nl", "nld", "Dutch"],
            ["no", "nor", "Norwegian"],
            ["pl", "pol", "Polish"],
            ["pt", "por", "Portuguese"],
            ["ro", "ron", "Romanian"],
            ["ru", "rus", "Russian"],
            ["sr", "srp", "Serbian"],
            ["sl", "slv", "Slovenian"],
            ["es", "spa", "Spanish"],
            ["sv", "swe", "Swedish"],
            ["ta", "tam", "Tamil"],
            ["tl", "tgl", "Tagalog"],
            ["th", "tha", "Thai"],
            ["tr", "tur", "Turkish"],
            ["uk", "ukr", "Ukrainian"],
            ["zh", "cmn", "Chinese"],
          ];
        },
        {},
      ],
      35: [
        function (t, e, s) {
          var _t65 = t("@nlpjs/core"),
            n = _t65.defaultContainer,
            i = t("./reduce-edges");
          e.exports = /*#__PURE__*/ (function () {
            function _class18() {
              var t =
                arguments.length > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : n;
              _classCallCheck(this, _class18);
              (this.container = t.container || t),
                (this.name = "extract-builtin");
            }
            _createClass(_class18, [
              {
                key: "extract",
                value: function extract(t) {
                  return t;
                },
              },
              {
                key: "run",
                value: (function () {
                  var _run3 = _asyncToGenerator(
                    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee16(
                      t
                    ) {
                      var e, s, n, r, _t66, _t67;
                      return _regeneratorRuntime().wrap(
                        function _callee16$(_context16) {
                          while (1)
                            switch ((_context16.prev = _context16.next)) {
                              case 0:
                                e = t;
                                s = e.locale || "en";
                                n =
                                  this.container.get(
                                    "extract-builtin-".concat(s)
                                  ) || this;
                                _context16.next = 5;
                                return n.extract({
                                  text: e.text || e.utterance,
                                  locale: e.locale,
                                });
                              case 5:
                                r = _context16.sent;
                                if (((e.edges = e.edges || []), r.edges))
                                  for (
                                    _t66 = 0;
                                    _t66 < r.edges.length;
                                    _t66 += 1
                                  )
                                    e.edges.push(r.edges[_t66]);
                                if (
                                  ((e.edges = i(e.edges, !1)),
                                  (e.sourceEntities = e.sourceEntities || []),
                                  r.sourceEntities)
                                )
                                  for (
                                    _t67 = 0;
                                    _t67 < r.sourceEntities.length;
                                    _t67 += 1
                                  )
                                    e.sourceEntities.push(
                                      r.sourceEntities[_t67]
                                    );
                                return _context16.abrupt("return", e);
                              case 9:
                              case "end":
                                return _context16.stop();
                            }
                        },
                        _callee16,
                        this
                      );
                    })
                  );
                  function run(_x34) {
                    return _run3.apply(this, arguments);
                  }
                  return run;
                })(),
              },
            ]);
            return _class18;
          })();
        },
        {
          "./reduce-edges": 41,
          "@nlpjs/core": 12,
        },
      ],
      36: [
        function (t, e, s) {
          var _t68 = t("@nlpjs/core"),
            n = _t68.defaultContainer,
            _t69 = t("@nlpjs/language-min"),
            i = _t69.Language,
            _t70 = t("@nlpjs/similarity"),
            r = _t70.similarity,
            o = t("./reduce-edges");
          e.exports = /*#__PURE__*/ (function () {
            function _class19() {
              var t =
                arguments.length > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : n;
              _classCallCheck(this, _class19);
              (this.container = t.container || t), (this.name = "extract-enum");
            }
            _createClass(_class19, [
              {
                key: "getScripts",
                value: function getScripts(t) {
                  var e = [],
                    s = t.split("");
                  for (var _t71 = 0; _t71 < s.length; _t71 += 1)
                    e.push(i.getTopScript(s[_t71]));
                  return e;
                },
              },
              {
                key: "isAlphanumeric",
                value: function isAlphanumeric(t) {
                  return /[\u00C0-\u1FFF\u2C00-\uD7FF\w]/.test(t) && "_" !== t;
                },
              },
              {
                key: "getWordPositions",
                value: function getWordPositions(t) {
                  var e = this.getScripts(t);
                  var s = !0,
                    n = 0,
                    i = 0;
                  var r = t.length,
                    o = [];
                  for (; i < r; )
                    this.isAlphanumeric(t.charAt(i))
                      ? s &&
                        ("cmn" === e[i][0]
                          ? (o.push({
                              start: i,
                              end: i,
                              len: 1,
                            }),
                            (n = i))
                          : ((n = i), (s = !1)))
                      : s ||
                        (o.push({
                          start: n,
                          end: i - 1,
                          len: i - n,
                        }),
                        (s = !0)),
                      (i += 1);
                  return (
                    s ||
                      o.push({
                        start: n,
                        end: i - 1,
                        len: i - n,
                      }),
                    o
                  );
                },
              },
              {
                key: "getBestSubstring",
                value: function getBestSubstring(t, e, s) {
                  var n = t.length,
                    i = e.length;
                  if (n <= i) {
                    var _s25 = {
                      start: 0,
                      end: n - 1,
                      len: n,
                      levenshtein: r(t, e, !0),
                    };
                    return (_s25.accuracy = (i - _s25.levenshtein) / i), _s25;
                  }
                  var o = s || this.getWordPositions(t),
                    a = o.length,
                    u = {
                      start: 0,
                      end: 0,
                      len: 0,
                      levenshtein: void 0,
                      accuracy: 0,
                    };
                  for (var _s26 = 0; _s26 < a; _s26 += 1)
                    for (var _n19 = _s26; _n19 < a; _n19 += 1) {
                      var _i11 = t.substring(o[_s26].start, o[_n19].end + 1),
                        _a = r(_i11, e, !0);
                      (void 0 === u.levenshtein || _a < u.levenshtein) &&
                        ((u.levenshtein = _a),
                        (u.start = o[_s26].start),
                        (u.end = o[_n19].end),
                        (u.len = u.end - u.start + 1));
                    }
                  return (u.accuracy = (i - u.levenshtein) / i), u;
                },
              },
              {
                key: "getBestSubstringList",
                value: function getBestSubstringList(t, e, s) {
                  var n =
                    arguments.length > 3 && arguments[3] !== undefined
                      ? arguments[3]
                      : 1;
                  var i = t.length,
                    o = e.length,
                    a = [];
                  if (i <= o) {
                    var _s27 = r(t, e, !0),
                      _u = (o - _s27) / o;
                    return (
                      _u >= n &&
                        a.push({
                          start: 0,
                          end: i - 1,
                          len: i,
                          levenshtein: _s27,
                          accuracy: _u,
                        }),
                      a
                    );
                  }
                  var u = o * (1 - n),
                    c = s || this.getWordPositions(t),
                    l = c.length;
                  for (var _s28 = 0; _s28 < l; _s28 += 1)
                    for (var _i12 = _s28; _i12 < l; _i12 += 1) {
                      var _l = t.substring(c[_s28].start, c[_i12].end + 1),
                        h = r(_l, e, !0),
                        g = (o - h) / o;
                      if (
                        (g >= n &&
                          a.push({
                            start: c[_s28].start,
                            end: c[_i12].end,
                            len: c[_i12].end - c[_s28].start + 1,
                            levenshtein: h,
                            accuracy: g,
                          }),
                        _l.length - c[0].len >= e.length + u)
                      )
                        break;
                    }
                  return a;
                },
              },
              {
                key: "getRules",
                value: function getRules(t) {
                  var e = t.nerRules;
                  return e || [];
                },
              },
              {
                key: "normalize",
                value: function normalize(t) {
                  return t
                    .normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, "")
                    .toLowerCase();
                },
              },
              {
                key: "buildRuleDict",
                value: function buildRuleDict(t) {
                  var e = {},
                    s = {};
                  for (var _n20 = 0; _n20 < t.rules.length; _n20 += 1) {
                    var _i13 = t.rules[_n20];
                    for (var _t72 = 0; _t72 < _i13.texts.length; _t72 += 1) {
                      var _n21 = _i13.texts[_t72],
                        _r4 = this.normalize(_i13.texts[_t72]);
                      e[_r4] || (e[_r4] = []),
                        e[_r4].push(_i13),
                        (s[_r4] = _n21);
                    }
                  }
                  (t.dict = e), (t.inverseDict = s);
                },
              },
              {
                key: "getBestExact",
                value: function getBestExact(t, e, s) {
                  var n = this.normalize(t),
                    i = e || this.getWordPositions(n),
                    r = i.length,
                    o = [];
                  for (var _e20 = 0; _e20 < r; _e20 += 1)
                    for (var a = _e20; a < r; a += 1) {
                      var _r5 = n.substring(i[_e20].start, i[a].end + 1);
                      if (s.dict[_r5]) {
                        var _n22 = s.dict[_r5];
                        for (var u = 0; u < _n22.length; u += 1)
                          o.push({
                            accuracy: 1,
                            start: i[_e20].start,
                            end: i[a].end,
                            len: i[a].end - i[_e20].start + 1,
                            levenshtein: 0,
                            entity: s.name,
                            type: s.type,
                            option: _n22[u].option,
                            sourceText: s.inverseDict[_r5],
                            utteranceText: t.substring(
                              i[_e20].start,
                              i[a].end + 1
                            ),
                          });
                      }
                    }
                  return o;
                },
              },
              {
                key: "extractFromRule",
                value: function extractFromRule(t, e, s, n) {
                  if ("enum" === e.type) {
                    var _i14 = [];
                    if (n >= 1) {
                      e.dict || this.buildRuleDict(e);
                      var _n23 = this.getBestExact(t, s, e);
                      for (var _t73 = 0; _t73 < _n23.length; _t73 += 1)
                        _i14.push(_n23[_t73]);
                    } else
                      for (var _r6 = 0; _r6 < e.rules.length; _r6 += 1) {
                        var _o14 = e.rules[_r6];
                        if (_o14 && _o14.option && Array.isArray(_o14.texts))
                          for (var a = 0; a < _o14.texts.length; a += 1) {
                            var u = this.getBestSubstringList(
                              t,
                              _o14.texts[a],
                              s,
                              _o14.threshold || n
                            );
                            for (var _s29 = 0; _s29 < u.length; _s29 += 1)
                              _i14.push(
                                _objectSpread(
                                  _objectSpread({}, u[_s29]),
                                  {},
                                  {
                                    entity: e.name,
                                    type: e.type,
                                    option: e.rules[_r6].option,
                                    sourceText: _o14.texts[a],
                                    utteranceText: t.substring(
                                      u[_s29].start,
                                      u[_s29].end + 1
                                    ),
                                  }
                                )
                              );
                          }
                      }
                    return _i14;
                  }
                  return [];
                },
              },
              {
                key: "extract",
                value: function extract(t) {
                  var e = t,
                    s = this.getWordPositions(e.text || e.utterance),
                    n = this.getRules(e),
                    i = e.edges || [];
                  for (var _t74 = 0; _t74 < n.length; _t74 += 1) {
                    var _r7 = this.extractFromRule(
                      e.text || e.utterance,
                      n[_t74],
                      s,
                      e.threshold || 0.8
                    );
                    for (var _t75 = 0; _t75 < _r7.length; _t75 += 1)
                      i.push(_r7[_t75]);
                  }
                  return (
                    i.sort(function (t, e) {
                      return t.start - e.start;
                    }),
                    (e.edges = o(i, !1)),
                    e
                  );
                },
              },
              {
                key: "run",
                value: function run(t) {
                  var e = t,
                    s = e.locale || "en";
                  return (
                    this.container.get("extract-enum-".concat(s)) || this
                  ).extract(e);
                },
              },
            ]);
            return _class19;
          })();
        },
        {
          "./reduce-edges": 41,
          "@nlpjs/core": 12,
          "@nlpjs/language-min": 32,
          "@nlpjs/similarity": 64,
        },
      ],
      37: [
        function (t, e, s) {
          var _t76 = t("@nlpjs/core"),
            n = _t76.defaultContainer,
            i = t("./reduce-edges");
          e.exports = /*#__PURE__*/ (function () {
            function _class20() {
              var t =
                arguments.length > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : n;
              _classCallCheck(this, _class20);
              (this.container = t.container || t),
                (this.name = "extract-regex");
            }
            _createClass(_class20, [
              {
                key: "getRules",
                value: function getRules(t) {
                  var e = t.nerRules;
                  return e || [];
                },
              },
              {
                key: "getMatchs",
                value: function getMatchs(t, e) {
                  var s = [];
                  var n;
                  do {
                    var _i15 = e instanceof RegExp ? e.exec(t) : null;
                    if (_i15) {
                      if (1 === _i15.length)
                        s.push({
                          start: _i15.index,
                          end: e.lastIndex - 1,
                          accuracy: 1,
                          sourceText: _i15[0],
                        });
                      else {
                        var _e21 = t.indexOf(_i15[1]);
                        s.push({
                          start: _e21,
                          end: _e21 + _i15[1].length - 1,
                          accuracy: 1,
                          sourceText: _i15[1],
                        });
                      }
                      n = !0;
                    } else n = !1;
                  } while (n);
                  return s;
                },
              },
              {
                key: "extractFromRule",
                value: function extractFromRule(t, e) {
                  var s = [];
                  for (var _n24 = 0; _n24 < e.rules.length; _n24 += 1) {
                    var _i16 = this.getMatchs(t, e.rules[_n24]);
                    for (var _n25 = 0; _n25 < _i16.length; _n25 += 1) {
                      var r = _i16[_n25];
                      (r.entity = e.name),
                        (r.type = e.type),
                        (r.utteranceText = t.substring(r.start, r.end + 1)),
                        (r.len = r.utteranceText.length),
                        s.push(r);
                    }
                  }
                  return s;
                },
              },
              {
                key: "extract",
                value: function extract(t) {
                  var e = t,
                    s = this.getRules(e),
                    n = e.edges || [];
                  for (var _t77 = 0; _t77 < s.length; _t77 += 1) {
                    var _i17 = this.extractFromRule(
                      e.text || e.utterance,
                      s[_t77]
                    );
                    for (var _t78 = 0; _t78 < _i17.length; _t78 += 1)
                      n.push(_i17[_t78]);
                  }
                  return (
                    n.sort(function (t, e) {
                      return t.start - e.start;
                    }),
                    (e.edges = i(n, !1)),
                    e
                  );
                },
              },
              {
                key: "run",
                value: function run(t) {
                  var e = t,
                    s = e.locale || "en";
                  return (
                    this.container.get("extract-regex-".concat(s)) || this
                  ).extract(e);
                },
              },
            ]);
            return _class20;
          })();
        },
        {
          "./reduce-edges": 41,
          "@nlpjs/core": 12,
        },
      ],
      38: [
        function (t, e, s) {
          var _t79 = t("@nlpjs/core"),
            n = _t79.defaultContainer,
            i = t("./reduce-edges"),
            _t80 = t("./trim-types"),
            r = _t80.TrimType;
          e.exports = /*#__PURE__*/ (function () {
            function _class21() {
              var t =
                arguments.length > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : n;
              _classCallCheck(this, _class21);
              (this.container = t.container || t), (this.name = "extract-trim");
            }
            _createClass(_class21, [
              {
                key: "mustSkip",
                value: function mustSkip(t, e) {
                  if (e.options && e.options.skip && e.options.skip.length > 0)
                    for (
                      var _s30 = 0;
                      _s30 < e.options.skip.length;
                      _s30 += 1
                    ) {
                      var _n26 = e.options.skip[_s30];
                      if (e.options.caseSensitive) {
                        if (_n26 === t) return !0;
                      } else if (_n26.toLowerCase() === t.toLowerCase())
                        return !0;
                    }
                  return !1;
                },
              },
              {
                key: "matchBetween",
                value: function matchBetween(t, e, s) {
                  var n = [];
                  var i;
                  do {
                    var _o15 = e.regex.exec(" ".concat(t, " "));
                    if (_o15) {
                      var _t81 = void 0,
                        a = void 0,
                        u = void 0;
                      if (e && e.options && e.options.closest) {
                        _t81 = 1;
                        var _e22 = _o15[0].indexOf(_o15[_t81]);
                        (a = _o15.index - 1 + _e22),
                          (u = a + _o15[_t81].length - 1);
                      } else
                        (_t81 = 0),
                          (a = _o15.index - 1),
                          (u = e.regex.lastIndex - 2);
                      n.push({
                        type: "trim",
                        subtype: r.Between,
                        start: a,
                        end: u,
                        len: _o15[_t81].length,
                        accuracy: 1,
                        sourceText: _o15[_t81],
                        utteranceText: _o15[_t81],
                        entity: s,
                      }),
                        (i = !0);
                    } else i = !1;
                  } while (i);
                  var o = [];
                  for (var _t82 = 0; _t82 < n.length; _t82 += 1)
                    this.mustSkip(n[_t82].utteranceText, e) || o.push(n[_t82]);
                  return o;
                },
              },
              {
                key: "findWord",
                value: function findWord(t, e) {
                  var s =
                    arguments.length > 2 && arguments[2] !== undefined
                      ? arguments[2]
                      : !1;
                  var n =
                    arguments.length > 3 && arguments[3] !== undefined
                      ? arguments[3]
                      : !1;
                  var i = [];
                  var r;
                  var o = new RegExp(
                    n ? e : " ".concat(e, " | ").concat(e, "|").concat(e, " "),
                    s ? "g" : "ig"
                  );
                  do {
                    var _e23 = o.exec(t);
                    _e23
                      ? (i.push({
                          start: _e23.index,
                          end: o.lastIndex,
                        }),
                        (r = !0))
                      : (r = !1);
                  } while (r);
                  return i;
                },
              },
              {
                key: "getBeforeResults",
                value: function getBeforeResults(t, e, s) {
                  var n = [];
                  var i = 0,
                    o = 0;
                  for (var a = 0; a < e.length; a += 1) {
                    o = e[a].start;
                    var u = t.substring(i, o);
                    n.push({
                      type: "trim",
                      subtype: r.Before,
                      start: i,
                      end: o - 1,
                      len: u.length,
                      accuracy: 0.99,
                      sourceText: u,
                      utteranceText: u,
                      entity: s,
                    }),
                      (i = e[a].end);
                  }
                  return n;
                },
              },
              {
                key: "getBeforeFirstResults",
                value: function getBeforeFirstResults(t, e, s) {
                  var n = [],
                    i = e[0].start,
                    o = t.substring(0, i);
                  return (
                    n.push({
                      type: "trim",
                      subtype: r.BeforeFirst,
                      start: 0,
                      end: i - 1,
                      len: o.length,
                      accuracy: 0.99,
                      sourceText: o,
                      utteranceText: o,
                      entity: s,
                    }),
                    n
                  );
                },
              },
              {
                key: "getBeforeLastResults",
                value: function getBeforeLastResults(t, e, s) {
                  var n = [],
                    i = e[e.length - 1].start,
                    o = t.substring(0, i);
                  return (
                    n.push({
                      type: "trim",
                      subtype: r.BeforeLast,
                      start: 0,
                      end: i - 1,
                      len: o.length,
                      accuracy: 0.99,
                      sourceText: o,
                      utteranceText: o,
                      entity: s,
                    }),
                    n
                  );
                },
              },
              {
                key: "getAfterResults",
                value: function getAfterResults(t, e, s) {
                  var n = [];
                  var i = 0,
                    o = t.length;
                  for (var a = e.length - 1; a >= 0; a -= 1) {
                    i = e[a].end;
                    var u = t.substring(i, o);
                    n.unshift({
                      type: "trim",
                      subtype: r.After,
                      start: i,
                      end: o - 1,
                      len: u.length,
                      accuracy: 0.99,
                      sourceText: u,
                      utteranceText: u,
                      entity: s,
                    }),
                      (o = e[a].start);
                  }
                  return n;
                },
              },
              {
                key: "getAfterFirstResults",
                value: function getAfterFirstResults(t, e, s) {
                  var n = [],
                    i = e[0].end,
                    o = t.length,
                    a = t.substring(i, o);
                  return (
                    n.push({
                      type: "trim",
                      subtype: r.AfterFirst,
                      start: i,
                      end: o - 1,
                      len: a.length,
                      accuracy: 0.99,
                      sourceText: a,
                      utteranceText: a,
                      entity: s,
                    }),
                    n
                  );
                },
              },
              {
                key: "getAfterLastResults",
                value: function getAfterLastResults(t, e, s) {
                  var n = [],
                    i = e[e.length - 1].end,
                    o = t.length,
                    a = t.substring(i, o);
                  return (
                    n.push({
                      type: "trim",
                      subtype: r.AfterLast,
                      start: i,
                      end: o - 1,
                      len: a.length,
                      accuracy: 0.99,
                      sourceText: a,
                      utteranceText: a,
                      entity: s,
                    }),
                    n
                  );
                },
              },
              {
                key: "getResults",
                value: function getResults(t, e, s, n) {
                  switch (s) {
                    case r.Before:
                      return this.getBeforeResults(t, e, n);
                    case r.BeforeFirst:
                      return this.getBeforeFirstResults(t, e, n);
                    case r.BeforeLast:
                      return this.getBeforeLastResults(t, e, n);
                    case r.After:
                      return this.getAfterResults(t, e, n);
                    case r.AfterFirst:
                      return this.getAfterFirstResults(t, e, n);
                    case r.AfterLast:
                      return this.getAfterLastResults(t, e, n);
                    default:
                      return [];
                  }
                },
              },
              {
                key: "match",
                value: function match(t, e, s, n) {
                  var i = [];
                  if (e && Array.isArray(e.words))
                    for (var _r8 = 0; _r8 < e.words.length; _r8 += 1) {
                      var o = e.options.noSpaces
                          ? e.words[_r8]
                          : " ".concat(e.words[_r8]),
                        a = this.findWord(t, o);
                      if (!e.options.noSpaces) {
                        var _s31 = this.findWord(t, e.words[_r8]);
                        _s31.length > 0 &&
                          0 === _s31[0].start &&
                          a.unshift(_s31[0]);
                      }
                      a.length > 0 &&
                        i.push.apply(
                          i,
                          _toConsumableArray(this.getResults(t, a, s, n))
                        );
                    }
                  var r = [];
                  for (var _t83 = 0; _t83 < i.length; _t83 += 1)
                    this.mustSkip(i[_t83].utteranceText, e) || r.push(i[_t83]);
                  return r;
                },
              },
              {
                key: "getRules",
                value: function getRules(t) {
                  var e = t.nerRules;
                  return e || [];
                },
              },
              {
                key: "extractFromRule",
                value: function extractFromRule(t, e) {
                  var s = [];
                  for (var _n27 = 0; _n27 < e.rules.length; _n27 += 1) {
                    var _i18 = e.rules[_n27];
                    _i18.type === r.Between
                      ? s.push.apply(
                          s,
                          _toConsumableArray(this.matchBetween(t, _i18, e.name))
                        )
                      : s.push.apply(
                          s,
                          _toConsumableArray(
                            this.match(t, _i18, _i18.type, e.name)
                          )
                        );
                  }
                  return s;
                },
              },
              {
                key: "extract",
                value: function extract(t) {
                  var e = t,
                    s = this.getRules(e),
                    n = e.edges || [];
                  for (var _t84 = 0; _t84 < s.length; _t84 += 1) {
                    var _i19 = this.extractFromRule(
                      e.text || e.utterance,
                      s[_t84]
                    );
                    for (var _t85 = 0; _t85 < _i19.length; _t85 += 1)
                      n.push(_i19[_t85]);
                  }
                  return (
                    n.sort(function (t, e) {
                      return t.start - e.start;
                    }),
                    (e.edges = i(n, !1)),
                    e
                  );
                },
              },
              {
                key: "run",
                value: function run(t) {
                  var e = t,
                    s = e.locale || "en";
                  return (
                    this.container.get("extract-trim-".concat(s)) || this
                  ).extract(e);
                },
              },
            ]);
            return _class21;
          })();
        },
        {
          "./reduce-edges": 41,
          "./trim-types": 42,
          "@nlpjs/core": 12,
        },
      ],
      39: [
        function (t, e, s) {
          var n = t("./ner"),
            i = t("./extractor-enum"),
            r = t("./extractor-regex"),
            o = t("./extractor-trim"),
            a = t("./extractor-builtin");
          e.exports = {
            Ner: n,
            ExtractorEnum: i,
            ExtractorRegex: r,
            ExtractorTrim: o,
            ExtractorBuiltin: a,
          };
        },
        {
          "./extractor-builtin": 35,
          "./extractor-enum": 36,
          "./extractor-regex": 37,
          "./extractor-trim": 38,
          "./ner": 40,
        },
      ],
      40: [
        function (t, e, s) {
          var _t86 = t("@nlpjs/core"),
            n = _t86.Clonable,
            i = t("./extractor-enum"),
            r = t("./extractor-regex"),
            o = t("./extractor-trim"),
            a = t("./extractor-builtin"),
            _t87 = t("./trim-types"),
            u = _t87.TrimType;
          var c = /*#__PURE__*/ (function (_n28) {
            _inherits(c, _n28);
            var _super7 = _createSuper(c);
            function c() {
              var _this12;
              var t =
                arguments.length > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : {};
              var e = arguments.length > 1 ? arguments[1] : undefined;
              _classCallCheck(this, c);
              (_this12 = _super7.call(
                this,
                {
                  settings: {},
                  container: t.container || e,
                },
                e
              )),
                _this12.applySettings(_this12.settings, t),
                _this12.applySettings(_this12.settings),
                _this12.settings.tag || (_this12.settings.tag = "ner"),
                _this12.registerDefault(),
                _this12.applySettings(
                  _this12.settings,
                  _this12.container.getConfiguration(_this12.settings.tag)
                ),
                (_this12.rules = {}),
                _this12.applySettings(_assertThisInitialized(_this12), {
                  pipelineProcess: _this12.getPipeline(
                    "".concat(_this12.settings.tag, "-process")
                  ),
                });
              return _this12;
            }
            _createClass(
              c,
              [
                {
                  key: "registerDefault",
                  value: function registerDefault() {},
                },
                {
                  key: "getRulesByName",
                  value: function getRulesByName() {
                    var t =
                      arguments.length > 0 && arguments[0] !== undefined
                        ? arguments[0]
                        : "*";
                    var e =
                      arguments.length > 1 && arguments[1] !== undefined
                        ? arguments[1]
                        : "";
                    var s =
                      arguments.length > 2 && arguments[2] !== undefined
                        ? arguments[2]
                        : !1;
                    if (!this.rules[t]) {
                      if (!s) return;
                      this.rules[t] = {};
                    }
                    if (!this.rules[t][e]) {
                      if (!s) return;
                      this.rules[t][e] = {
                        name: e,
                        type: "enum",
                        rules: [],
                      };
                    }
                    return this.rules[t][e];
                  },
                },
                {
                  key: "addRule",
                  value: function addRule() {
                    var t =
                      arguments.length > 0 && arguments[0] !== undefined
                        ? arguments[0]
                        : "*";
                    var e = arguments.length > 1 ? arguments[1] : undefined;
                    var s = arguments.length > 2 ? arguments[2] : undefined;
                    var n = arguments.length > 3 ? arguments[3] : undefined;
                    if (Array.isArray(t))
                      for (var _i20 = 0; _i20 < t.length; _i20 += 1)
                        this.addRule(t[_i20], e, s, n);
                    else
                      this.rules[t] || (this.rules[t] = {}),
                        this.rules[t][e] ||
                          (this.rules[t][e] = {
                            name: e,
                            type: s,
                            rules: [],
                          }),
                        this.rules[t][e].rules.push(n);
                  },
                },
                {
                  key: "asString",
                  value: function asString(t) {
                    if (t) {
                      if (null != (e = t) && e.constructor === Object)
                        return JSON.stringify(t);
                      if (t.toString) return t.toString();
                    }
                    var e;
                    return "";
                  },
                },
                {
                  key: "findRule",
                  value: function findRule(t, e) {
                    var s = this.asString(e);
                    for (var _e24 = 0; _e24 < t.length; _e24 += 1)
                      if (this.asString(t[_e24]) === s) return _e24;
                    return -1;
                  },
                },
                {
                  key: "removeRule",
                  value: function removeRule() {
                    var t =
                      arguments.length > 0 && arguments[0] !== undefined
                        ? arguments[0]
                        : "*";
                    var e = arguments.length > 1 ? arguments[1] : undefined;
                    var s = arguments.length > 2 ? arguments[2] : undefined;
                    if (this.rules[t] && this.rules[t][e])
                      if (s) {
                        var _n29 = this.findRule(this.rules[t][e].rules, s);
                        _n29 > -1 && this.rules[t][e].rules.splice(_n29, 1);
                      } else delete this.rules[t][e];
                  },
                },
                {
                  key: "getRules",
                  value: function getRules() {
                    var t =
                      arguments.length > 0 && arguments[0] !== undefined
                        ? arguments[0]
                        : "*";
                    var e = [];
                    if (this.rules[t]) {
                      var _s32 = Object.keys(this.rules[t]);
                      for (var _n30 = 0; _n30 < _s32.length; _n30 += 1)
                        e.push(this.rules[t][_s32[_n30]]);
                    }
                    if ("*" !== t && this.rules["*"]) {
                      var _t88 = Object.keys(this.rules["*"]);
                      for (var _s33 = 0; _s33 < _t88.length; _s33 += 1)
                        e.push(this.rules["*"][_t88[_s33]]);
                    }
                    return e;
                  },
                },
                {
                  key: "decideRules",
                  value: function decideRules(t) {
                    var e = t;
                    return (e.nerRules = this.getRules(e.locale || "en")), e;
                  },
                },
                {
                  key: "getRuleOption",
                  value: function getRuleOption(t, e) {
                    for (var _s34 = 0; _s34 < t.length; _s34 += 1)
                      if (t[_s34].option === e) return t[_s34];
                  },
                },
                {
                  key: "addRuleOptionTexts",
                  value: function addRuleOptionTexts(t, e, s, n) {
                    if (Array.isArray(t))
                      for (var _i21 = 0; _i21 < t.length; _i21 += 1)
                        this.addRuleOptionTexts(t[_i21], e, s, n);
                    else {
                      var _i22 = n || s;
                      Array.isArray(_i22) || (_i22 = [_i22]);
                      var _r9 = this.getRulesByName(t, e, !0);
                      var _o16 = this.getRuleOption(_r9.rules, s);
                      if (_o16) {
                        var _t89 = {};
                        for (var _e25 = 0; _e25 < _o16.texts.length; _e25 += 1)
                          _t89[_o16.texts[_e25]] = 1;
                        for (var _e26 = 0; _e26 < _i22.length; _e26 += 1)
                          _t89[_i22[_e26]] = 1;
                        _o16.texts = Object.keys(_t89);
                      } else
                        (_o16 = {
                          option: s,
                          texts: _i22,
                        }),
                          _r9.rules.push(_o16);
                    }
                  },
                },
                {
                  key: "removeRuleOptionTexts",
                  value: function removeRuleOptionTexts(t, e, s, n) {
                    if (Array.isArray(t))
                      for (var _i23 = 0; _i23 < t.length; _i23 += 1)
                        this.removeRuleOptionTexts(t[_i23], e, s, n);
                    else {
                      var _i24 = n || s;
                      Array.isArray(_i24) || (_i24 = [_i24]);
                      var _r10 = this.getRulesByName(t, e, !1);
                      if (_r10) {
                        var _t90 = this.getRuleOption(_r10.rules, s);
                        if (_t90) {
                          var _e27 = {};
                          for (
                            var _s35 = 0;
                            _s35 < _t90.texts.length;
                            _s35 += 1
                          )
                            _e27[_t90.texts[_s35]] = 1;
                          for (var _t91 = 0; _t91 < _i24.length; _t91 += 1)
                            delete _e27[_i24[_t91]];
                          _t90.texts = Object.keys(_e27);
                        }
                      }
                    }
                  },
                },
                {
                  key: "addRegexRule",
                  value: function addRegexRule(t, e, s) {
                    var n = "string" == typeof s ? c.str2regex(s) : s,
                      i = n.flags.includes("g")
                        ? n
                        : new RegExp(n.source, "".concat(n.flags, "g"));
                    this.addRule(t, e, "regex", i);
                  },
                },
                {
                  key: "addBetweenLastCondition",
                  value: function addBetweenLastCondition(t, e, s, n) {
                    var i =
                      arguments.length > 4 && arguments[4] !== undefined
                        ? arguments[4]
                        : {};
                    var r = _objectSpread(
                      _objectSpread({}, i),
                      {},
                      {
                        closest: !0,
                      }
                    );
                    this.addBetweenCondition(t, e, s, n, r);
                  },
                },
                {
                  key: "addBetweenCondition",
                  value: function addBetweenCondition(t, e, s, n, i) {
                    var r = i || {},
                      o = Array.isArray(s) ? s : [s],
                      a = Array.isArray(n) ? n : [n],
                      u = [];
                    for (var _t92 = 0; _t92 < o.length; _t92 += 1)
                      for (var _e28 = 0; _e28 < a.length; _e28 += 1) {
                        var _s36 =
                            !0 === r.noSpaces
                              ? o[_t92]
                              : " ".concat(o[_t92], " "),
                          _n31 =
                            !0 === r.noSpaces
                              ? a[_e28]
                              : " ".concat(a[_e28], " ");
                        var _i25 = void 0;
                        (_i25 =
                          !0 === r.closest
                            ? ""
                                .concat(_s36, "(?!.*")
                                .concat(_s36, ".*)(.*)")
                                .concat(_n31)
                            : "(?<="
                                .concat(_s36, ")(.*)(?=")
                                .concat(_n31, ")")),
                          u.push(_i25);
                      }
                    var l = "/".concat(u.join("|"), "/g");
                    !0 !== r.caseSensitive && (l += "i");
                    var h = {
                      type: "between",
                      leftWords: o,
                      rightWords: a,
                      regex: c.str2regex(l),
                      options: r,
                    };
                    this.addRule(t, e, "trim", h);
                  },
                },
                {
                  key: "addPositionCondition",
                  value: function addPositionCondition(t, e, s, n, i) {
                    var r = i || {},
                      o = {
                        type: s,
                        words: Array.isArray(n) ? n : [n],
                        options: r,
                      };
                    this.addRule(t, e, "trim", o);
                  },
                },
                {
                  key: "addAfterCondition",
                  value: function addAfterCondition(t, e, s, n) {
                    this.addPositionCondition(t, e, u.After, s, n);
                  },
                },
                {
                  key: "addAfterFirstCondition",
                  value: function addAfterFirstCondition(t, e, s, n) {
                    this.addPositionCondition(t, e, u.AfterFirst, s, n);
                  },
                },
                {
                  key: "addAfterLastCondition",
                  value: function addAfterLastCondition(t, e, s, n) {
                    this.addPositionCondition(t, e, u.AfterLast, s, n);
                  },
                },
                {
                  key: "addBeforeCondition",
                  value: function addBeforeCondition(t, e, s, n) {
                    this.addPositionCondition(t, e, u.Before, s, n);
                  },
                },
                {
                  key: "addBeforeFirstCondition",
                  value: function addBeforeFirstCondition(t, e, s, n) {
                    this.addPositionCondition(t, e, u.BeforeFirst, s, n);
                  },
                },
                {
                  key: "addBeforeLastCondition",
                  value: function addBeforeLastCondition(t, e, s, n) {
                    this.addPositionCondition(t, e, u.BeforeLast, s, n);
                  },
                },
                {
                  key: "reduceEdges",
                  value: function reduceEdges(t) {
                    return (
                      (t.entities = t.edges),
                      delete t.edges,
                      delete t.nerRules,
                      t
                    );
                  },
                },
                {
                  key: "defaultPipelineProcess",
                  value: (function () {
                    var _defaultPipelineProcess = _asyncToGenerator(
                      /*#__PURE__*/ _regeneratorRuntime().mark(
                        function _callee17(t) {
                          var e;
                          return _regeneratorRuntime().wrap(
                            function _callee17$(_context17) {
                              while (1)
                                switch ((_context17.prev = _context17.next)) {
                                  case 0:
                                    this.cache ||
                                      ((this.cache = {
                                        extractEnum:
                                          this.container.get("extract-enum"),
                                        extractRegex:
                                          this.container.get("extract-regex"),
                                        extractTrim:
                                          this.container.get("extract-trim"),
                                        extractBuiltin:
                                          this.container.get("extract-builtin"),
                                      }),
                                      this.cache.extractEnum ||
                                        (this.container.use(i),
                                        (this.cache.extractEnum =
                                          this.container.get("extract-enum"))),
                                      this.cache.extractRegex ||
                                        (this.container.use(r),
                                        (this.cache.extractRegex =
                                          this.container.get("extract-regex"))),
                                      this.cache.extractTrim ||
                                        (this.container.use(o),
                                        (this.cache.extractTrim =
                                          this.container.get("extract-trim"))),
                                      this.cache.extractBuiltin ||
                                        (this.container.use(a),
                                        (this.cache.extractBuiltin =
                                          this.container.get(
                                            "extract-builtin"
                                          ))));
                                    _context17.next = 3;
                                    return this.decideRules(t);
                                  case 3:
                                    e = _context17.sent;
                                    _context17.t0 = this.cache.extractEnum;
                                    if (!_context17.t0) {
                                      _context17.next = 9;
                                      break;
                                    }
                                    _context17.next = 8;
                                    return this.cache.extractEnum.run(e);
                                  case 8:
                                    e = _context17.sent;
                                  case 9:
                                    _context17.t1 = this.cache.extractRegex;
                                    if (!_context17.t1) {
                                      _context17.next = 14;
                                      break;
                                    }
                                    _context17.next = 13;
                                    return this.cache.extractRegex.run(e);
                                  case 13:
                                    e = _context17.sent;
                                  case 14:
                                    _context17.t2 = this.cache.extractTrim;
                                    if (!_context17.t2) {
                                      _context17.next = 19;
                                      break;
                                    }
                                    _context17.next = 18;
                                    return this.cache.extractTrim.run(e);
                                  case 18:
                                    e = _context17.sent;
                                  case 19:
                                    _context17.t3 = this.cache.extractBuiltin;
                                    if (!_context17.t3) {
                                      _context17.next = 24;
                                      break;
                                    }
                                    _context17.next = 23;
                                    return this.cache.extractBuiltin.run(e);
                                  case 23:
                                    e = _context17.sent;
                                  case 24:
                                    _context17.next = 26;
                                    return this.reduceEdges(e);
                                  case 26:
                                    e = _context17.sent;
                                    return _context17.abrupt("return", e);
                                  case 28:
                                  case "end":
                                    return _context17.stop();
                                }
                            },
                            _callee17,
                            this
                          );
                        }
                      )
                    );
                    function defaultPipelineProcess(_x35) {
                      return _defaultPipelineProcess.apply(this, arguments);
                    }
                    return defaultPipelineProcess;
                  })(),
                },
                {
                  key: "process",
                  value: (function () {
                    var _process = _asyncToGenerator(
                      /*#__PURE__*/ _regeneratorRuntime().mark(
                        function _callee18(t) {
                          var e, s, _t93;
                          return _regeneratorRuntime().wrap(
                            function _callee18$(_context18) {
                              while (1)
                                switch ((_context18.prev = _context18.next)) {
                                  case 0:
                                    e = _objectSpread(
                                      {
                                        threshold:
                                          this.settings.threshold || 0.8,
                                      },
                                      t
                                    );
                                    if (!e.locale) {
                                      _context18.next = 10;
                                      break;
                                    }
                                    _t93 = this.container.getPipeline(
                                      ""
                                        .concat(this.settings.tag, "-")
                                        .concat(e.locale, "-process")
                                    );
                                    _context18.t0 = _t93;
                                    if (!_context18.t0) {
                                      _context18.next = 8;
                                      break;
                                    }
                                    _context18.next = 7;
                                    return this.runPipeline(e, _t93);
                                  case 7:
                                    s = _context18.sent;
                                  case 8:
                                    _context18.next = 15;
                                    break;
                                  case 10:
                                    _context18.t1 = this.pipelineProcess;
                                    if (!_context18.t1) {
                                      _context18.next = 15;
                                      break;
                                    }
                                    _context18.next = 14;
                                    return this.runPipeline(
                                      e,
                                      this.pipelineProcess
                                    );
                                  case 14:
                                    s = _context18.sent;
                                  case 15:
                                    _context18.t2 = s;
                                    if (_context18.t2) {
                                      _context18.next = 20;
                                      break;
                                    }
                                    _context18.next = 19;
                                    return this.defaultPipelineProcess(e);
                                  case 19:
                                    s = _context18.sent;
                                  case 20:
                                    delete s.threshold;
                                    return _context18.abrupt("return", s);
                                  case 22:
                                  case "end":
                                    return _context18.stop();
                                }
                            },
                            _callee18,
                            this
                          );
                        }
                      )
                    );
                    function process(_x36) {
                      return _process.apply(this, arguments);
                    }
                    return process;
                  })(),
                },
                {
                  key: "nameToEntity",
                  value: function nameToEntity(t) {
                    return ""
                      .concat(
                        void 0 === this.settings.entityPreffix
                          ? "@"
                          : this.settings.entityPreffix
                      )
                      .concat(t)
                      .concat(
                        void 0 === this.settings.entitySuffix
                          ? ""
                          : this.settings.entitySuffix
                      );
                  },
                },
                {
                  key: "entityToName",
                  value: function entityToName(t) {
                    if (!t) return t;
                    var e = t;
                    var s =
                        void 0 === this.settings.entityPreffix
                          ? "@"
                          : this.settings.entityPreffix,
                      n =
                        void 0 === this.settings.entitySuffix
                          ? ""
                          : this.settings.entitySuffix;
                    if (s) {
                      if (!e.startsWith(s)) return t;
                      e = e.slice(s.length);
                    }
                    if (n) {
                      if (!e.endsWith(n)) return t;
                      e = e.slice(0, -n.length);
                    }
                    return e;
                  },
                },
                {
                  key: "isEntity",
                  value: function isEntity(t) {
                    return this.entityToName(t) !== t;
                  },
                },
                {
                  key: "getEntitiesFromUtterance",
                  value: function getEntitiesFromUtterance(t, e) {
                    e || ((e = t), (t = "es"));
                    var s = e
                        .split(/[\s,.!?;:([\]'"¡¿)/]+/)
                        .filter(function (t) {
                          return t;
                        }),
                      n = [];
                    for (var _t94 = 0; _t94 < s.length; _t94 += 1) {
                      var _e29 = s[_t94];
                      this.isEntity(_e29) && n.push(this.entityToName(_e29));
                    }
                    return n;
                  },
                },
                {
                  key: "generateEntityUtterance",
                  value: (function () {
                    var _generateEntityUtterance = _asyncToGenerator(
                      /*#__PURE__*/ _regeneratorRuntime().mark(
                        function _callee19(t, e) {
                          var s, _s37, n, i, r, _t95, _s38, _o17;
                          return _regeneratorRuntime().wrap(
                            function _callee19$(_context19) {
                              while (1)
                                switch ((_context19.prev = _context19.next)) {
                                  case 0:
                                    s = {
                                      locale: t,
                                      utterance: e,
                                    };
                                    _context19.next = 3;
                                    return this.process(s);
                                  case 3:
                                    s = _context19.sent;
                                    (_s37 = s), (n = _s37.entities);
                                    if (!(!n || !n.length)) {
                                      _context19.next = 7;
                                      break;
                                    }
                                    return _context19.abrupt("return", e);
                                  case 7:
                                    n.sort(function (t, e) {
                                      return t.start - e.start;
                                    });
                                    (i = 0), (r = "");
                                    for (_t95 = 0; _t95 < n.length; _t95 += 1) {
                                      (_s38 = n[_t95]),
                                        (_o17 = e.slice(i, _s38.start));
                                      (i = _s38.end + 1),
                                        (r += _o17),
                                        (r += this.nameToEntity(_s38.entity));
                                    }
                                    return _context19.abrupt(
                                      "return",
                                      ((r += e.slice(n[n.length - 1].end + 1)),
                                      r)
                                    );
                                  case 11:
                                  case "end":
                                    return _context19.stop();
                                }
                            },
                            _callee19,
                            this
                          );
                        }
                      )
                    );
                    function generateEntityUtterance(_x37, _x38) {
                      return _generateEntityUtterance.apply(this, arguments);
                    }
                    return generateEntityUtterance;
                  })(),
                },
                {
                  key: "toJSON",
                  value: function toJSON() {
                    RegExp.prototype.toJSON = RegExp.prototype.toString;
                    var t = {
                      settings: _objectSpread({}, this.settings),
                      rules: _objectSpread({}, this.rules),
                    };
                    return delete t.settings.container, t;
                  },
                },
                {
                  key: "fromJSON",
                  value: function fromJSON(t) {
                    this.applySettings(this.settings, t.settings);
                    Object.keys(t.rules).forEach(function (e) {
                      Object.keys(t.rules[e]).forEach(function (s) {
                        "regex" === t.rules[e][s].type &&
                          (t.rules[e][s].rules = t.rules[e][s].rules.map(
                            function (t) {
                              return c.str2regex(t);
                            }
                          ));
                      });
                    }),
                      (this.rules = t.rules);
                  },
                },
              ],
              [
                {
                  key: "str2regex",
                  value: function str2regex(t) {
                    var e = t.lastIndexOf("/");
                    return new RegExp(t.slice(1, e), t.slice(e + 1));
                  },
                },
                {
                  key: "regex2str",
                  value: function regex2str(t) {
                    return t.toString();
                  },
                },
              ]
            );
            return c;
          })(n);
          e.exports = c;
        },
        {
          "./extractor-builtin": 35,
          "./extractor-enum": 36,
          "./extractor-regex": 37,
          "./extractor-trim": 38,
          "./trim-types": 42,
          "@nlpjs/core": 12,
        },
      ],
      41: [
        function (t, e, s) {
          function n(t, e, s) {
            var n, i;
            t.accuracy > e.accuracy ||
            (t.accuracy === e.accuracy && t.length > e.length)
              ? ((n = t), (i = e))
              : ((n = e), (i = t)),
              i.start <= n.end &&
                i.end >= n.start &&
                (i.accuracy < n.accuracy
                  ? (i.discarded = !0)
                  : (s || i.entity === n.entity || "number" === i.entity) &&
                    i.len <= n.len
                  ? i.start === n.start &&
                    i.end === n.end &&
                    i.type === n.type &&
                    i.entity === n.entity &&
                    i.option === n.option &&
                    (i.discarded = !0)
                  : (s || i.entity === n.entity || "number" === n.entity) &&
                    i.len > n.len
                  ? (n.discarded = !0)
                  : "enum" === n.type &&
                    "enum" === i.type &&
                    (n.len <= i.len && i.utteranceText.includes(n.utteranceText)
                      ? (n.discarded = !0)
                      : n.len > i.len &&
                        n.utteranceText.includes(i.utteranceText) &&
                        (i.discarded = !0)));
          }
          e.exports = function (t) {
            var e =
              arguments.length > 1 && arguments[1] !== undefined
                ? arguments[1]
                : !0;
            var s = t.length;
            for (var i = 0; i < s; i += 1) {
              var r = t[i];
              if (!r.discarded)
                for (var o = i + 1; o < s; o += 1) {
                  var _s39 = t[o];
                  _s39.discarded || n(r, _s39, e);
                }
            }
            return t.filter(function (t) {
              return !t.discarded;
            });
          };
        },
        {},
      ],
      42: [
        function (t, e, s) {
          var n = {
              Between: "between",
              After: "after",
              AfterLast: "afterLast",
              AfterFirst: "afterFirst",
              Before: "before",
              BeforeFirst: "beforeFirst",
              BeforeLast: "beforeLast",
            },
            i = Object.values(n);
          e.exports = {
            TrimType: n,
            TrimTypesList: i,
          };
        },
        {},
      ],
      43: [
        function (t, e, s) {
          var n = t("./lookup");
          e.exports = /*#__PURE__*/ (function () {
            function _class22(t, e) {
              _classCallCheck(this, _class22);
              if (t) {
                (this.inputLookup = new n()), (this.outputLookup = new n());
                for (var _e30 = 0; _e30 < t.length; _e30 += 1)
                  this.inputLookup.add(t[_e30]);
                for (var _t96 = 0; _t96 < e.length; _t96 += 1)
                  this.outputLookup.add(e[_t96]);
                (this.numInputs = this.inputLookup.items.length),
                  (this.numOutputs = this.outputLookup.items.length);
              }
            }
            _createClass(_class22, [
              {
                key: "build",
                value: function build(t) {
                  (this.inputLookup = new n(t, "input")),
                    (this.outputLookup = new n(t, "output")),
                    (this.numInputs = this.inputLookup.items.length),
                    (this.numOutputs = this.outputLookup.items.length);
                  var e = [];
                  for (var _s40 = 0; _s40 < t.length; _s40 += 1) {
                    var _t$_s = t[_s40],
                      _n32 = _t$_s.input,
                      i = _t$_s.output;
                    e.push({
                      input: this.inputLookup.prepare(_n32),
                      output: this.outputLookup.prepare(i),
                    });
                  }
                  return e;
                },
              },
              {
                key: "transformInput",
                value: function transformInput(t) {
                  return this.inputLookup.prepare(t);
                },
              },
            ]);
            return _class22;
          })();
        },
        {
          "./lookup": 45,
        },
      ],
      44: [
        function (t, e, s) {
          var n = t("./neural-network");
          e.exports = {
            NeuralNetwork: n,
          };
        },
        {
          "./neural-network": 46,
        },
      ],
      45: [
        function (t, e, s) {
          e.exports = /*#__PURE__*/ (function () {
            function _class23(t) {
              var e =
                arguments.length > 1 && arguments[1] !== undefined
                  ? arguments[1]
                  : "input";
              _classCallCheck(this, _class23);
              (this.dict = {}),
                (this.items = []),
                t && this.buildFromData(t, e);
            }
            _createClass(_class23, [
              {
                key: "add",
                value: function add(t) {
                  void 0 === this.dict[t] &&
                    ((this.dict[t] = this.items.length), this.items.push(t));
                },
              },
              {
                key: "buildFromData",
                value: function buildFromData(t, e) {
                  for (var _s41 = 0; _s41 < t.length; _s41 += 1) {
                    var n = t[_s41][e],
                      i = Object.keys(n);
                    for (var _t97 = 0; _t97 < i.length; _t97 += 1)
                      this.add(i[_t97]);
                  }
                },
              },
              {
                key: "prepare",
                value: function prepare(t) {
                  var e = Object.keys(t),
                    s = [],
                    n = {};
                  for (var i = 0; i < e.length; i += 1) {
                    var r = e[i];
                    void 0 !== this.dict[r] &&
                      (s.push(this.dict[r]), (n[this.dict[r]] = t[r]));
                  }
                  return {
                    keys: s,
                    data: n,
                  };
                },
              },
            ]);
            return _class23;
          })();
        },
        {},
      ],
      46: [
        function (t, e, s) {
          var n = t("./corpus-lookup"),
            i = {
              iterations: 2e4,
              errorThresh: 5e-5,
              deltaErrorThresh: 1e-6,
              learningRate: 0.6,
              momentum: 0.5,
              alpha: 0.07,
              log: !1,
            };
          e.exports = /*#__PURE__*/ (function () {
            function _class24() {
              var t =
                arguments.length > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : {};
              _classCallCheck(this, _class24);
              (this.settings = t),
                this.applySettings(this.settings, i),
                !0 === this.settings.log
                  ? (this.logFn = function (t, e) {
                      return console.log(
                        "Epoch "
                          .concat(t.iterations, " loss ")
                          .concat(t.error, " time ")
                          .concat(e, "ms")
                      );
                    })
                  : "function" == typeof this.settings.log &&
                    (this.logFn = this.settings.log);
            }
            _createClass(_class24, [
              {
                key: "applySettings",
                value: function applySettings() {
                  var t =
                    arguments.length > 0 && arguments[0] !== undefined
                      ? arguments[0]
                      : {};
                  var e =
                    arguments.length > 1 && arguments[1] !== undefined
                      ? arguments[1]
                      : {};
                  return (
                    Object.keys(e).forEach(function (s) {
                      void 0 === t[s] && (t[s] = e[s]);
                    }),
                    t
                  );
                },
              },
              {
                key: "initialize",
                value: function initialize(t, e) {
                  (this.perceptronsByName = {}),
                    (this.perceptrons = []),
                    (this.outputs = {}),
                    (this.numPerceptrons = e.length);
                  for (var _s42 = 0; _s42 < e.length; _s42 += 1) {
                    var _n33 = e[_s42];
                    this.outputs[_n33] = 0;
                    var _i26 = {
                      name: _n33,
                      id: _s42,
                      weights: new Float32Array(t),
                      changes: new Float32Array(t),
                      bias: 0,
                    };
                    this.perceptrons.push(_i26),
                      (this.perceptronsByName[_n33] = _i26);
                  }
                },
              },
              {
                key: "runInputPerceptron",
                value: function runInputPerceptron(t, e) {
                  var s = e.keys.reduce(function (s, n) {
                    return s + e.data[n] * t.weights[n];
                  }, t.bias);
                  return s <= 0 ? 0 : this.settings.alpha * s;
                },
              },
              {
                key: "runInput",
                value: function runInput(t) {
                  for (var _e31 = 0; _e31 < this.numPerceptrons; _e31 += 1)
                    this.outputs[this.perceptrons[_e31].name] =
                      this.runInputPerceptron(this.perceptrons[_e31], t);
                  return this.outputs;
                },
              },
              {
                key: "isRunnable",
                get: function get() {
                  return !!this.numPerceptrons;
                },
              },
              {
                key: "run",
                value: function run(t) {
                  return this.numPerceptrons
                    ? this.runInput(this.lookup.transformInput(t))
                    : void 0;
                },
              },
              {
                key: "prepareCorpus",
                value: function prepareCorpus(t) {
                  return (this.lookup = new n()), this.lookup.build(t);
                },
              },
              {
                key: "verifyIsInitialized",
                value: function verifyIsInitialized() {
                  this.perceptrons ||
                    this.initialize(
                      this.lookup.numInputs,
                      this.lookup.outputLookup.items
                    );
                },
              },
              {
                key: "trainPerceptron",
                value: function trainPerceptron(t, e) {
                  var _this$settings = this.settings,
                    s = _this$settings.alpha,
                    n = _this$settings.momentum,
                    i = t.changes,
                    r = t.weights;
                  var o = 0;
                  for (var a = 0; a < e.length; a += 1) {
                    var _e$a = e[a],
                      u = _e$a.input,
                      c = _e$a.output,
                      l = this.runInputPerceptron(t, u),
                      h = (c.data[t.id] || 0) - l;
                    if (h) {
                      o += Math.pow(h, 2);
                      var _e32 = (l > 0 ? 1 : s) * h * this.decayLearningRate;
                      for (var _t98 = 0; _t98 < u.keys.length; _t98 += 1) {
                        var _s43 = u.keys[_t98],
                          _o18 = _e32 * u.data[_s43] + n * i[_s43];
                        (i[_s43] = _o18), (r[_s43] += _o18);
                      }
                      t.bias += _e32;
                    }
                  }
                  return o;
                },
              },
              {
                key: "train",
                value: function train(t) {
                  if (!t || !t.length) return {};
                  if (void 0 !== t[t.length - 1].input.nonefeature) {
                    var _e33 = {};
                    for (var _s44 = 0; _s44 < t.length - 1; _s44 += 1) {
                      var _n34 = Object.keys(t[_s44].output);
                      for (var _t99 = 0; _t99 < _n34.length; _t99 += 1)
                        _e33[_n34[_t99]] || (_e33[_n34[_t99]] = 1);
                    }
                    var _s45 = t[t.length - 1],
                      _n35 = Object.keys(_e33);
                    for (var _t100 = 0; _t100 < _n35.length; _t100 += 1)
                      _s45.output[_n35[_t100]] = 1e-7;
                  }
                  var e = this.prepareCorpus(t);
                  this.status ||
                    (this.status = {
                      error: 1 / 0,
                      deltaError: 1 / 0,
                      iterations: 0,
                    }),
                    this.verifyIsInitialized();
                  var s = this.settings.errorThresh,
                    n = this.settings.deltaErrorThresh;
                  for (
                    ;
                    this.status.iterations < this.settings.iterations &&
                    this.status.error > s &&
                    this.status.deltaError > n;

                  ) {
                    var _t101 = new Date();
                    (this.status.iterations += 1),
                      (this.decayLearningRate =
                        this.settings.learningRate /
                        (1 + 0.001 * this.status.iterations));
                    var _s46 = this.status.error;
                    this.status.error = 0;
                    for (var _t102 = 0; _t102 < this.numPerceptrons; _t102 += 1)
                      this.status.error += this.trainPerceptron(
                        this.perceptrons[_t102],
                        e
                      );
                    (this.status.error /= this.numPerceptrons * e.length),
                      (this.status.deltaError = Math.abs(
                        this.status.error - _s46
                      ));
                    var _n36 = new Date();
                    this.logFn &&
                      this.logFn(this.status, _n36.getTime() - _t101.getTime());
                  }
                  return this.status;
                },
              },
              {
                key: "explain",
                value: function explain(t, e) {
                  var s = this.lookup.transformInput(t),
                    n = {},
                    i = this.lookup.outputLookup.dict[e];
                  if (void 0 === i) return {};
                  for (var _t103 = 0; _t103 < s.keys.length; _t103 += 1) {
                    var _e34 = s.keys[_t103];
                    n[this.lookup.inputLookup.items[_e34]] =
                      this.perceptrons[i].weights[_e34];
                  }
                  return {
                    weights: n,
                    bias: this.perceptrons[i].bias,
                  };
                },
              },
              {
                key: "toJSON",
                value: function toJSON() {
                  var t = {},
                    e = Object.keys(this.settings);
                  for (var _s47 = 0; _s47 < e.length; _s47 += 1) {
                    var _n37 = e[_s47];
                    this.settings[_n37] !== i[_n37] &&
                      (t[_n37] = this.settings[_n37]);
                  }
                  if (!this.lookup)
                    return {
                      settings: t,
                    };
                  var s = this.lookup.inputLookup.items,
                    n = this.lookup.outputLookup.items,
                    r = [];
                  for (
                    var _t104 = 0;
                    _t104 < this.perceptrons.length;
                    _t104 += 1
                  ) {
                    var _e35 = this.perceptrons[_t104],
                      _s48 = [].concat(_toConsumableArray(_e35.weights), [
                        _e35.bias,
                      ]);
                    r.push(_s48);
                  }
                  return {
                    settings: t,
                    features: s,
                    intents: n,
                    perceptrons: r,
                  };
                },
              },
              {
                key: "fromJSON",
                value: function fromJSON(t) {
                  if (
                    ((this.settings = this.applySettings(
                      _objectSpread(_objectSpread({}, i), t.settings)
                    )),
                    t.features)
                  ) {
                    (this.lookup = new n(t.features, t.intents)),
                      this.initialize(t.features.length, t.intents);
                    for (
                      var _e36 = 0;
                      _e36 < this.perceptrons.length;
                      _e36 += 1
                    ) {
                      var _s49 = this.perceptrons[_e36],
                        _n38 = t.perceptrons[_e36];
                      _s49.bias = _n38[_n38.length - 1];
                      for (var _e37 = 0; _e37 < t.features.length; _e37 += 1)
                        _s49.weights[_e37] = _n38[_e37];
                    }
                  }
                },
              },
            ]);
            return _class24;
          })();
        },
        {
          "./corpus-lookup": 43,
        },
      ],
      47: [
        function (t, e, s) {
          var _t105 = t("@nlpjs/core"),
            n = _t105.Clonable;
          e.exports = /*#__PURE__*/ (function (_n39) {
            _inherits(_class25, _n39);
            var _super8 = _createSuper(_class25);
            function _class25() {
              var _this13;
              var t =
                arguments.length > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : {};
              var e = arguments.length > 1 ? arguments[1] : undefined;
              _classCallCheck(this, _class25);
              (_this13 = _super8.call(
                this,
                {
                  settings: {},
                  container: t.container || e,
                },
                e
              )),
                _this13.applySettings(_this13.settings, t),
                _this13.settings.tag ||
                  (_this13.settings.tag = "action-manager"),
                _this13.registerDefault(),
                _this13.applySettings(
                  _this13.settings,
                  _this13.container.getConfiguration(_this13.settings.tag)
                ),
                (_this13.actions = {}),
                (_this13.actionsMap = {}),
                _this13.applySettings(_assertThisInitialized(_this13), {
                  pipelineFind: _this13.getPipeline(
                    "".concat(_this13.settings.tag, "-find")
                  ),
                });
              return _this13;
            }
            _createClass(_class25, [
              {
                key: "registerDefault",
                value: function registerDefault() {},
              },
              {
                key: "posAction",
                value: function posAction(t, e, s) {
                  if (!this.actions[t]) return -1;
                  var n = this.actions[t];
                  for (var _t106 = 0; _t106 < n.length; _t106 += 1)
                    if (
                      n[_t106].action === e &&
                      n[_t106].parameters.toString() === s.toString()
                    )
                      return _t106;
                  return -1;
                },
              },
              {
                key: "findActions",
                value: function findActions(t) {
                  var _this14 = this;
                  return (this.actions[t] || []).map(function (t) {
                    return _objectSpread(
                      _objectSpread({}, t),
                      {},
                      {
                        fn: _this14.actionsMap[t.action],
                      }
                    );
                  });
                },
              },
              {
                key: "processActions",
                value: (function () {
                  var _processActions = _asyncToGenerator(
                    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee20(
                      t,
                      e
                    ) {
                      var s,
                        n,
                        _iterator,
                        _step,
                        _step$value,
                        _t107,
                        _e38,
                        _s50;
                      return _regeneratorRuntime().wrap(
                        function _callee20$(_context20) {
                          while (1)
                            switch ((_context20.prev = _context20.next)) {
                              case 0:
                                s = this.findActions(t);
                                "object" == _typeof(e) &&
                                  (e.actions = s.map(function (t) {
                                    return {
                                      action: t.action,
                                      parameters: t.parameters,
                                    };
                                  }));
                                n = e;
                                _iterator = _createForOfIteratorHelper(s);
                                _context20.prev = 4;
                                _iterator.s();
                              case 6:
                                if ((_step = _iterator.n()).done) {
                                  _context20.next = 15;
                                  break;
                                }
                                (_step$value = _step.value),
                                  (_t107 = _step$value.fn),
                                  (_e38 = _step$value.parameters);
                                if (!_t107) {
                                  _context20.next = 13;
                                  break;
                                }
                                _context20.next = 11;
                                return _t107.apply(
                                  void 0,
                                  [n].concat(_toConsumableArray(_e38 || []))
                                );
                              case 11:
                                _s50 = _context20.sent;
                                _s50 &&
                                  ("object" == _typeof(n)
                                    ? "object" == _typeof(_s50)
                                      ? (n = _s50)
                                      : (n.answer = _s50)
                                    : (n = _s50));
                              case 13:
                                _context20.next = 6;
                                break;
                              case 15:
                                _context20.next = 20;
                                break;
                              case 17:
                                _context20.prev = 17;
                                _context20.t0 = _context20["catch"](4);
                                _iterator.e(_context20.t0);
                              case 20:
                                _context20.prev = 20;
                                _iterator.f();
                                return _context20.finish(20);
                              case 23:
                                return _context20.abrupt("return", n);
                              case 24:
                              case "end":
                                return _context20.stop();
                            }
                        },
                        _callee20,
                        this,
                        [[4, 17, 20, 23]]
                      );
                    })
                  );
                  function processActions(_x39, _x40) {
                    return _processActions.apply(this, arguments);
                  }
                  return processActions;
                })(),
              },
              {
                key: "addAction",
                value: function addAction(t, e, s, n) {
                  -1 === this.posAction(t, e, s) &&
                    (this.actions[t] || (this.actions[t] = []),
                    this.actions[t].push({
                      action: e,
                      parameters: s,
                    }),
                    n && (this.actionsMap[e] = n));
                },
              },
              {
                key: "removeAction",
                value: function removeAction(t, e, s) {
                  var n = this.posAction(t, e, s);
                  n > -1 && this.actions[t].splice(n, 1);
                },
              },
              {
                key: "removeActions",
                value: function removeActions(t) {
                  delete this.actions[t];
                },
              },
              {
                key: "removeActionFromMap",
                value: function removeActionFromMap(t) {
                  delete this.actionsMap[t];
                },
              },
              {
                key: "run",
                value: function run(t, e) {
                  var s = t;
                  return (
                    (s.settings = s.settings || e || this.settings),
                    this.processActions(t.intent, s)
                  );
                },
              },
              {
                key: "toJSON",
                value: function toJSON() {
                  var t = {
                    settings: _objectSpread({}, this.settings),
                    actions: this.actions,
                  };
                  return delete t.settings.container, t;
                },
              },
              {
                key: "fromJSON",
                value: function fromJSON(t) {
                  this.applySettings(this.settings, t.settings),
                    (this.actions = t.actions);
                },
              },
            ]);
            return _class25;
          })(n);
        },
        {
          "@nlpjs/core": 12,
        },
      ],
      48: [
        function (t, e, s) {
          var n = t("./nlg-manager"),
            i = t("./action-manager");
          e.exports = {
            NlgManager: n,
            ActionManager: i,
          };
        },
        {
          "./action-manager": 47,
          "./nlg-manager": 49,
        },
      ],
      49: [
        function (t, e, s) {
          var _t108 = t("@nlpjs/core"),
            n = _t108.Clonable;
          e.exports = /*#__PURE__*/ (function (_n40) {
            _inherits(_class26, _n40);
            var _super9 = _createSuper(_class26);
            function _class26() {
              var _this15;
              var t =
                arguments.length > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : {};
              var e = arguments.length > 1 ? arguments[1] : undefined;
              _classCallCheck(this, _class26);
              (_this15 = _super9.call(
                this,
                {
                  settings: {},
                  container: t.container || e,
                },
                e
              )),
                _this15.applySettings(_this15.settings, t),
                _this15.settings.tag || (_this15.settings.tag = "nlg-manager"),
                _this15.registerDefault(),
                _this15.applySettings(
                  _this15.settings,
                  _this15.container.getConfiguration(_this15.settings.tag)
                ),
                (_this15.responses = {}),
                _this15.applySettings(_assertThisInitialized(_this15), {
                  pipelineFind: _this15.getPipeline(
                    "".concat(_this15.settings.tag, "-find")
                  ),
                });
              return _this15;
            }
            _createClass(_class26, [
              {
                key: "registerDefault",
                value: function registerDefault() {
                  this.container.registerConfiguration("nlg-manager", {}, !1);
                },
              },
              {
                key: "findAllAnswers",
                value: function findAllAnswers(t) {
                  var e = t;
                  return (
                    this.responses[e.locale]
                      ? (e.answers = this.responses[e.locale][e.intent] || [])
                      : (e.answers = []),
                    e
                  );
                },
              },
              {
                key: "filterAnswers",
                value: function filterAnswers(t) {
                  var e = t,
                    s = e.answers;
                  if (s && s.length) {
                    var _t109 = this.container.get("Evaluator");
                    if (_t109) {
                      var _n41 = e.context || {},
                        i = [];
                      for (var _e39 = 0; _e39 < s.length; _e39 += 1) {
                        var r = s[_e39];
                        if (r.opts) {
                          var _e40 =
                            "string" == typeof r.opts
                              ? r.opts
                              : r.opts.condition;
                          _e40
                            ? !0 === _t109.evaluate(_e40, _n41) && i.push(r)
                            : i.push(r);
                        } else i.push(r);
                      }
                      e.answers = i;
                    }
                  }
                  return e;
                },
              },
              {
                key: "chooseRandom",
                value: function chooseRandom(t) {
                  var e = t,
                    s = e.answers;
                  return (
                    s &&
                      s.length &&
                      (e.answer =
                        s[Math.floor(Math.random() * s.length)].answer),
                    e
                  );
                },
              },
              {
                key: "renderText",
                value: function renderText(t, e) {
                  if (!t) return t;
                  var s,
                    n = t.answer || t;
                  do {
                    var _t110 = /\((?:[^()]+)\|(?:[^()]+)\)/g.exec(n);
                    if (_t110) {
                      for (var _e41 = 0; _e41 < _t110.length; _e41 += 1) {
                        var _s51 = _t110[_e41],
                          _i27 = _s51.substring(1, _s51.length - 1).split("|");
                        n = n.replace(
                          _s51,
                          _i27[Math.floor(Math.random() * _i27.length)]
                        );
                      }
                      s = !0;
                    } else s = !1;
                  } while (s);
                  var i = this.container.get("Template");
                  return i && e
                    ? i.compile(t, e)
                    : t.answer
                    ? ((t.answer = n), t)
                    : n;
                },
              },
              {
                key: "renderRandom",
                value: function renderRandom(t) {
                  var e = t,
                    s = e.answers,
                    n = e.context;
                  for (var _t111 = 0; _t111 < s.length; _t111 += 1)
                    s[_t111] = this.renderText(s[_t111], n);
                  return e;
                },
              },
              {
                key: "indexOfAnswer",
                value: function indexOfAnswer(t, e, s, n) {
                  if (!this.responses[t]) return -1;
                  if (!this.responses[t][e]) return -1;
                  var i = this.responses[t][e];
                  for (var _t112 = 0; _t112 < i.length; _t112 += 1) {
                    var _e42 = i[_t112];
                    if (
                      _e42.answer === s &&
                      JSON.stringify(_e42.opts) === JSON.stringify(n)
                    )
                      return _t112;
                  }
                  return -1;
                },
              },
              {
                key: "add",
                value: function add(t, e, s, n) {
                  var i = this.indexOfAnswer(t, e, s, n);
                  if (-1 !== i) return this.responses[t][e][i];
                  this.responses[t] || (this.responses[t] = {}),
                    this.responses[t][e] || (this.responses[t][e] = []);
                  var r = {
                    answer: s,
                    opts: n,
                  };
                  return this.responses[t][e].push(r), r;
                },
              },
              {
                key: "remove",
                value: function remove(t, e, s, n) {
                  var i = this.indexOfAnswer(t, e, s, n);
                  -1 !== i && this.responses[t][e].splice(i, 1);
                },
              },
              {
                key: "defaultPipelineFind",
                value: function defaultPipelineFind(t) {
                  var e = this.findAllAnswers(t);
                  return (
                    (e = this.filterAnswers(e)),
                    (e = this.renderRandom(e)),
                    (e = this.chooseRandom(e)),
                    e
                  );
                },
              },
              {
                key: "find",
                value: function find(t, e, s, n) {
                  var i = {
                    locale: t,
                    intent: e,
                    context: s,
                    settings: n || this.settings,
                  };
                  return this.pipelineFind
                    ? this.runPipeline(i, this.pipelineFind)
                    : this.defaultPipelineFind(i);
                },
              },
              {
                key: "run",
                value: function run(t, e) {
                  return this.find(t.locale, t.intent, t.context, e);
                },
              },
              {
                key: "toJSON",
                value: function toJSON() {
                  var t = {
                    settings: _objectSpread({}, this.settings),
                    responses: this.responses,
                  };
                  return delete t.settings.container, t;
                },
              },
              {
                key: "fromJSON",
                value: function fromJSON(t) {
                  this.applySettings(this.settings, t.settings),
                    (this.responses = t.responses);
                },
              },
            ]);
            return _class26;
          })(n);
        },
        {
          "@nlpjs/core": 12,
        },
      ],
      50: [
        function (t, e, s) {
          var _t113 = t("@nlpjs/core"),
            n = _t113.Clonable;
          e.exports = /*#__PURE__*/ (function (_n42) {
            _inherits(_class27, _n42);
            var _super10 = _createSuper(_class27);
            function _class27() {
              var _this16;
              var t =
                arguments.length > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : {};
              var e = arguments.length > 1 ? arguments[1] : undefined;
              _classCallCheck(this, _class27);
              (_this16 = _super10.call(
                this,
                {
                  settings: {},
                  container: t.container || e,
                },
                e
              )),
                _this16.applySettings(_this16.settings, t),
                _this16.settings.tag ||
                  (_this16.settings.tag = "context-manager"),
                _this16.registerDefault(),
                _this16.applySettings(
                  _this16.settings,
                  _this16.container.getConfiguration(_this16.settings.tag)
                ),
                (_this16.contextDictionary = {}),
                (_this16.defaultData = {});
              return _this16;
            }
            _createClass(_class27, [
              {
                key: "registerDefault",
                value: function registerDefault() {
                  this.container.registerConfiguration("context-manager", {
                    tableName: "context",
                  });
                },
              },
              {
                key: "getInputContextId",
                value: (function () {
                  var _getInputContextId = _asyncToGenerator(
                    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee21(
                      t
                    ) {
                      var e;
                      return _regeneratorRuntime().wrap(
                        function _callee21$(_context21) {
                          while (1)
                            switch ((_context21.prev = _context21.next)) {
                              case 0:
                                _context21.t0 = this.onGetInputContextId;
                                if (!_context21.t0) {
                                  _context21.next = 5;
                                  break;
                                }
                                _context21.next = 4;
                                return this.onGetInputContextId(t);
                              case 4:
                                e = _context21.sent;
                              case 5:
                                !e &&
                                  t &&
                                  t.activity &&
                                  (t.activity.address &&
                                  t.activity.address.conversation
                                    ? (e = t.activity.address.conversation.id)
                                    : t.activity.conversation &&
                                      (e = t.activity.conversation.id));
                                return _context21.abrupt("return", e);
                              case 7:
                              case "end":
                                return _context21.stop();
                            }
                        },
                        _callee21,
                        this
                      );
                    })
                  );
                  function getInputContextId(_x41) {
                    return _getInputContextId.apply(this, arguments);
                  }
                  return getInputContextId;
                })(),
              },
              {
                key: "getContext",
                value: (function () {
                  var _getContext = _asyncToGenerator(
                    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee22(
                      t
                    ) {
                      var e, s, _t114;
                      return _regeneratorRuntime().wrap(
                        function _callee22$(_context22) {
                          while (1)
                            switch ((_context22.prev = _context22.next)) {
                              case 0:
                                _context22.next = 2;
                                return this.getInputContextId(t);
                              case 2:
                                e = _context22.sent;
                                if (!e) {
                                  _context22.next = 17;
                                  break;
                                }
                                if (!this.settings.tableName) {
                                  _context22.next = 14;
                                  break;
                                }
                                _t114 = this.container
                                  ? this.container.get("database")
                                  : void 0;
                                _context22.t0 = _t114;
                                if (!_context22.t0) {
                                  _context22.next = 14;
                                  break;
                                }
                                _context22.next = 10;
                                return _t114.findOne(this.settings.tableName, {
                                  conversationId: e,
                                });
                              case 10:
                                _context22.t1 = _context22.sent;
                                if (_context22.t1) {
                                  _context22.next = 13;
                                  break;
                                }
                                _context22.t1 = {
                                  conversationId: e,
                                };
                              case 13:
                                s = _context22.t1;
                              case 14:
                                s ||
                                  (s = this.contextDictionary[e] || {
                                    conversationId: e,
                                  });
                                _context22.next = 18;
                                break;
                              case 17:
                                s = {};
                              case 18:
                                return _context22.abrupt(
                                  "return",
                                  ((s._data = this.defaultData), s)
                                );
                              case 19:
                              case "end":
                                return _context22.stop();
                            }
                        },
                        _callee22,
                        this
                      );
                    })
                  );
                  function getContext(_x42) {
                    return _getContext.apply(this, arguments);
                  }
                  return getContext;
                })(),
              },
              {
                key: "setContext",
                value: (function () {
                  var _setContext = _asyncToGenerator(
                    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee23(
                      t,
                      e
                    ) {
                      var s, n, _s52, i, r, _t115, _s53, _t116;
                      return _regeneratorRuntime().wrap(
                        function _callee23$(_context23) {
                          while (1)
                            switch ((_context23.prev = _context23.next)) {
                              case 0:
                                s = this.container.get("logger");
                                _context23.next = 3;
                                return this.getInputContextId(t);
                              case 3:
                                n = _context23.sent;
                                if (!n) {
                                  _context23.next = 28;
                                  break;
                                }
                                if (e.id) {
                                  _context23.next = 10;
                                  break;
                                }
                                _context23.next = 8;
                                return this.getContext(t);
                              case 8:
                                _s52 = _context23.sent;
                                _s52 && (e.id = _s52.id);
                              case 10:
                                (i = Object.keys(e)),
                                  (r = {
                                    conversationId: n,
                                  });
                                for (_t115 = 0; _t115 < i.length; _t115 += 1) {
                                  _s53 = i[_t115];
                                  _s53.startsWith("_") || (r[_s53] = e[_s53]);
                                }
                                if (!this.settings.tableName) {
                                  _context23.next = 22;
                                  break;
                                }
                                _t116 = this.container
                                  ? this.container.get("database")
                                  : void 0;
                                if (!_t116) {
                                  _context23.next = 19;
                                  break;
                                }
                                _context23.next = 17;
                                return _t116.save(this.settings.tableName, r);
                              case 17:
                                _context23.next = 20;
                                break;
                              case 19:
                                this.contextDictionary[n] = r;
                              case 20:
                                _context23.next = 23;
                                break;
                              case 22:
                                this.contextDictionary[n] = r;
                              case 23:
                                _context23.t0 = this.onCtxUpdate;
                                if (!_context23.t0) {
                                  _context23.next = 28;
                                  break;
                                }
                                s.debug("emmitting event onCtxUpdate...");
                                _context23.next = 28;
                                return this.onCtxUpdate(r);
                              case 28:
                              case "end":
                                return _context23.stop();
                            }
                        },
                        _callee23,
                        this
                      );
                    })
                  );
                  function setContext(_x43, _x44) {
                    return _setContext.apply(this, arguments);
                  }
                  return setContext;
                })(),
              },
              {
                key: "resetConversations",
                value: (function () {
                  var _resetConversations = _asyncToGenerator(
                    /*#__PURE__*/ _regeneratorRuntime().mark(
                      function _callee25() {
                        var _this17 = this;
                        return _regeneratorRuntime().wrap(
                          function _callee25$(_context25) {
                            while (1)
                              switch ((_context25.prev = _context25.next)) {
                                case 0:
                                  Object.keys(this.contextDictionary).forEach(
                                    /*#__PURE__*/ (function () {
                                      var _ref = _asyncToGenerator(
                                        /*#__PURE__*/ _regeneratorRuntime().mark(
                                          function _callee24(t) {
                                            return _regeneratorRuntime().wrap(
                                              function _callee24$(_context24) {
                                                while (1)
                                                  switch (
                                                    (_context24.prev =
                                                      _context24.next)
                                                  ) {
                                                    case 0:
                                                      _context24.next = 2;
                                                      return _this17.resetConversation(
                                                        t
                                                      );
                                                    case 2:
                                                    case "end":
                                                      return _context24.stop();
                                                  }
                                              },
                                              _callee24
                                            );
                                          }
                                        )
                                      );
                                      return function (_x45) {
                                        return _ref.apply(this, arguments);
                                      };
                                    })()
                                  );
                                case 1:
                                case "end":
                                  return _context25.stop();
                              }
                          },
                          _callee25,
                          this
                        );
                      }
                    )
                  );
                  function resetConversations() {
                    return _resetConversations.apply(this, arguments);
                  }
                  return resetConversations;
                })(),
              },
              {
                key: "resetConversation",
                value: (function () {
                  var _resetConversation = _asyncToGenerator(
                    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee26(
                      t
                    ) {
                      var e;
                      return _regeneratorRuntime().wrap(
                        function _callee26$(_context26) {
                          while (1)
                            switch ((_context26.prev = _context26.next)) {
                              case 0:
                                this.container
                                  .get("logger")
                                  .debug(
                                    "reseting context in conversation: ".concat(
                                      t
                                    )
                                  );
                                e = this.contextDictionary[t];
                                Object.keys(e).forEach(function (t) {
                                  delete e[t];
                                }),
                                  (this.contextDictionary[t].dialogStack = []),
                                  (this.contextDictionary[t].variableName =
                                    void 0);
                              case 3:
                              case "end":
                                return _context26.stop();
                            }
                        },
                        _callee26,
                        this
                      );
                    })
                  );
                  function resetConversation(_x46) {
                    return _resetConversation.apply(this, arguments);
                  }
                  return resetConversation;
                })(),
              },
            ]);
            return _class27;
          })(n);
        },
        {
          "@nlpjs/core": 12,
        },
      ],
      51: [
        function (t, e, s) {
          var n = t("./nlp"),
            i = t("./context-manager");
          e.exports = {
            Nlp: n,
            ContextManager: i,
          };
        },
        {
          "./context-manager": 50,
          "./nlp": 52,
        },
      ],
      52: [
        function (t, e, s) {
          var _t117 = t("@nlpjs/core"),
            n = _t117.Clonable,
            i = _t117.containerBootstrap,
            _t118 = t("@nlpjs/nlu"),
            r = _t118.NluManager,
            o = _t118.NluNeural,
            _t119 = t("@nlpjs/ner"),
            a = _t119.Ner,
            u = _t119.ExtractorEnum,
            c = _t119.ExtractorRegex,
            l = _t119.ExtractorTrim,
            h = _t119.ExtractorBuiltin,
            _t120 = t("@nlpjs/nlg"),
            g = _t120.ActionManager,
            f = _t120.NlgManager,
            _t121 = t("@nlpjs/sentiment"),
            p = _t121.SentimentAnalyzer,
            _t122 = t("@nlpjs/slot"),
            d = _t122.SlotManager,
            m = t("./context-manager");
          e.exports = /*#__PURE__*/ (function (_n43) {
            _inherits(_class28, _n43);
            var _super11 = _createSuper(_class28);
            function _class28() {
              var _this18;
              var t =
                arguments.length > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : {};
              var e = arguments.length > 1 ? arguments[1] : undefined;
              _classCallCheck(this, _class28);
              (_this18 = _super11.call(
                this,
                {
                  settings: {},
                  container: t.container || e || i(),
                },
                e
              )),
                _this18.applySettings(_this18.settings, t),
                _this18.settings.tag || (_this18.settings.tag = "nlp"),
                _this18.registerDefault(),
                _this18.applySettings(
                  _this18.settings,
                  _this18.container.getConfiguration(_this18.settings.tag)
                ),
                (_this18.nluManager = _this18.container.get(
                  "nlu-manager",
                  _this18.settings.nlu
                )),
                (_this18.ner = _this18.container.get(
                  "ner",
                  _this18.settings.ner
                )),
                (_this18.nlgManager = _this18.container.get(
                  "nlg-manager",
                  _this18.settings.nlg
                )),
                (_this18.actionManager = _this18.container.get(
                  "action-manager",
                  _this18.settings.action
                )),
                (_this18.sentiment = _this18.container.get(
                  "sentiment-analyzer",
                  _this18.settings.sentiment
                )),
                (_this18.slotManager = _this18.container.get(
                  "SlotManager",
                  _this18.settings.slot
                )),
                (_this18.contextManager = _this18.container.get(
                  "context-manager",
                  _this18.settings.context
                )),
                (_this18.forceNER = _this18.settings.forceNER),
                void 0 === _this18.forceNER && (_this18.forceNER = !1),
                _this18.initialize();
              return _this18;
            }
            _createClass(_class28, [
              {
                key: "registerDefault",
                value: function registerDefault() {
                  this.container.registerConfiguration(
                    "nlp",
                    {
                      threshold: 0.5,
                      autoLoad: !0,
                      autoSave: !0,
                      modelFileName: "model.nlp",
                    },
                    !1
                  ),
                    this.use(r),
                    this.use(a),
                    this.use(u),
                    this.use(c),
                    this.use(l),
                    this.use(h),
                    this.use(f),
                    this.use(g),
                    this.use(o),
                    this.use(p),
                    this.use(m),
                    this.container.register("SlotManager", d, !1);
                },
              },
              {
                key: "initialize",
                value: function initialize() {
                  if (this.settings.nlu) {
                    var _t123 = Object.keys(this.settings.nlu);
                    for (var _e43 = 0; _e43 < _t123.length; _e43 += 1) {
                      var _s54 = _t123[_e43],
                        _n44 = Object.keys(this.settings.nlu[_s54]);
                      for (var _t124 = 0; _t124 < _n44.length; _t124 += 1) {
                        var _e44 = _n44[_t124],
                          _i28 = this.settings.nlu[_s54][_e44],
                          _r11 = _i28.className;
                        delete _i28.className,
                          this.useNlu(_r11, _s54, _e44, _i28);
                      }
                    }
                  }
                  this.settings.languages &&
                    this.addLanguage(this.settings.languages),
                    this.settings.locales &&
                      this.addLanguage(this.settings.locales),
                    void 0 === this.settings.calculateSentiment &&
                      (this.settings.calculateSentiment = !0);
                },
              },
              {
                key: "start",
                value: (function () {
                  var _start2 = _asyncToGenerator(
                    /*#__PURE__*/ _regeneratorRuntime().mark(
                      function _callee27() {
                        return _regeneratorRuntime().wrap(
                          function _callee27$(_context27) {
                            while (1)
                              switch ((_context27.prev = _context27.next)) {
                                case 0:
                                  _context27.t0 = this.settings.corpora;
                                  if (!_context27.t0) {
                                    _context27.next = 4;
                                    break;
                                  }
                                  _context27.next = 4;
                                  return this.addCorpora(this.settings.corpora);
                                case 4:
                                case "end":
                                  return _context27.stop();
                              }
                          },
                          _callee27,
                          this
                        );
                      }
                    )
                  );
                  function start() {
                    return _start2.apply(this, arguments);
                  }
                  return start;
                })(),
              },
              {
                key: "loadOrTrain",
                value: (function () {
                  var _loadOrTrain = _asyncToGenerator(
                    /*#__PURE__*/ _regeneratorRuntime().mark(
                      function _callee28() {
                        var t;
                        return _regeneratorRuntime().wrap(
                          function _callee28$(_context28) {
                            while (1)
                              switch ((_context28.prev = _context28.next)) {
                                case 0:
                                  t = !1;
                                  _context28.t0 = this.settings.autoLoad;
                                  if (!_context28.t0) {
                                    _context28.next = 6;
                                    break;
                                  }
                                  _context28.next = 5;
                                  return this.load(this.settings.modelFileName);
                                case 5:
                                  t = _context28.sent;
                                case 6:
                                  _context28.t1 = t;
                                  if (_context28.t1) {
                                    _context28.next = 10;
                                    break;
                                  }
                                  _context28.next = 10;
                                  return this.train();
                                case 10:
                                case "end":
                                  return _context28.stop();
                              }
                          },
                          _callee28,
                          this
                        );
                      }
                    )
                  );
                  function loadOrTrain() {
                    return _loadOrTrain.apply(this, arguments);
                  }
                  return loadOrTrain;
                })(),
              },
              {
                key: "useNlu",
                value: function useNlu(t, e, s, n) {
                  if ((e || (e = "??"), Array.isArray(e)))
                    for (var _i29 = 0; _i29 < e.length; _i29 += 1)
                      this.useNlu(t, e[_i29], s, n);
                  else {
                    var _i30 = "string" == typeof t ? t : this.container.use(t);
                    var _r12 = this.container.getConfiguration(
                      "domain-manager-".concat(e)
                    );
                    _r12 ||
                      ((_r12 = {}),
                      this.container.registerConfiguration(
                        "domain-manager-".concat(e),
                        _r12
                      )),
                      _r12.nluByDomain || (_r12.nluByDomain = {});
                    var _o19 = s && "*" !== s ? s : "default";
                    _r12.nluByDomain[_o19] || (_r12.nluByDomain[_o19] = {}),
                      (_r12.nluByDomain[_o19].className = _i30),
                      (_r12.nluByDomain[_o19].settings = n);
                  }
                },
              },
              {
                key: "guessLanguage",
                value: function guessLanguage(t) {
                  return this.nluManager.guessLanguage(t);
                },
              },
              {
                key: "addLanguage",
                value: function addLanguage(t) {
                  return this.nluManager.addLanguage(t);
                },
              },
              {
                key: "removeLanguage",
                value: function removeLanguage(t) {
                  return this.nluManager.removeLanguage(t);
                },
              },
              {
                key: "addDocument",
                value: function addDocument(t, e, s) {
                  var n = this.ner.getEntitiesFromUtterance(e);
                  return (
                    this.slotManager.addBatch(s, n),
                    this.nluManager.add(t, e, s)
                  );
                },
              },
              {
                key: "removeDocument",
                value: function removeDocument(t, e, s) {
                  return this.nluManager.remove(t, e, s);
                },
              },
              {
                key: "getRulesByName",
                value: function getRulesByName(t, e) {
                  return this.ner.getRulesByName(t, e);
                },
              },
              {
                key: "addNerRule",
                value: function addNerRule(t, e, s, n) {
                  return this.ner.addRule(t, e, s, n);
                },
              },
              {
                key: "removeNerRule",
                value: function removeNerRule(t, e, s) {
                  return this.ner.removeRule(t, e, s);
                },
              },
              {
                key: "addNerRuleOptionTexts",
                value: function addNerRuleOptionTexts(t, e, s, n) {
                  return this.ner.addRuleOptionTexts(t, e, s, n);
                },
              },
              {
                key: "removeNerRuleOptionTexts",
                value: function removeNerRuleOptionTexts(t, e, s, n) {
                  return this.ner.removeRuleOptionTexts(t, e, s, n);
                },
              },
              {
                key: "addNerRegexRule",
                value: function addNerRegexRule(t, e, s) {
                  return this.ner.addRegexRule(t, e, s);
                },
              },
              {
                key: "addNerBetweenCondition",
                value: function addNerBetweenCondition(t, e, s, n, i) {
                  return this.ner.addBetweenCondition(t, e, s, n, i);
                },
              },
              {
                key: "addNerPositionCondition",
                value: function addNerPositionCondition(t, e, s, n, i) {
                  return this.ner.addPositionCondition(t, e, s, n, i);
                },
              },
              {
                key: "addNerAfterCondition",
                value: function addNerAfterCondition(t, e, s, n) {
                  return this.ner.addAfterCondition(t, e, s, n);
                },
              },
              {
                key: "addNerAfterFirstCondition",
                value: function addNerAfterFirstCondition(t, e, s, n) {
                  return this.ner.addAfterFirstCondition(t, e, s, n);
                },
              },
              {
                key: "addNerAfterLastCondition",
                value: function addNerAfterLastCondition(t, e, s, n) {
                  return this.ner.addAfterLastCondition(t, e, s, n);
                },
              },
              {
                key: "addNerBeforeCondition",
                value: function addNerBeforeCondition(t, e, s, n) {
                  return this.ner.addBeforeCondition(t, e, s, n);
                },
              },
              {
                key: "addNerBeforeFirstCondition",
                value: function addNerBeforeFirstCondition(t, e, s, n) {
                  return this.ner.addBeforeFirstCondition(t, e, s, n);
                },
              },
              {
                key: "addNerBeforeLastCondition",
                value: function addNerBeforeLastCondition(t, e, s, n) {
                  return this.ner.addBeforeLastCondition(t, e, s, n);
                },
              },
              {
                key: "assignDomain",
                value: function assignDomain(t, e, s) {
                  return this.nluManager.assignDomain(t, e, s);
                },
              },
              {
                key: "getIntentDomain",
                value: function getIntentDomain(t, e) {
                  return this.nluManager.getIntentDomain(t, e);
                },
              },
              {
                key: "getDomains",
                value: function getDomains() {
                  return this.nluManager.getDomains();
                },
              },
              {
                key: "addAction",
                value: function addAction(t, e, s, n) {
                  return this.actionManager.addAction(t, e, s, n);
                },
              },
              {
                key: "getActions",
                value: function getActions(t) {
                  return this.actionManager.findActions(t);
                },
              },
              {
                key: "removeAction",
                value: function removeAction(t, e, s) {
                  return this.actionManager.removeAction(t, e, s);
                },
              },
              {
                key: "removeActions",
                value: function removeActions(t) {
                  return this.actionManager.removeActions(t);
                },
              },
              {
                key: "addAnswer",
                value: function addAnswer(t, e, s, n) {
                  return this.nlgManager.add(t, e, s, n);
                },
              },
              {
                key: "removeAnswer",
                value: function removeAnswer(t, e, s, n) {
                  return this.nlgManager.remove(t, e, s, n);
                },
              },
              {
                key: "findAllAnswers",
                value: function findAllAnswers(t, e) {
                  return this.nlgManager.findAllAnswers({
                    locale: t,
                    intent: e,
                  }).answers;
                },
              },
              {
                key: "addCorpora",
                value: (function () {
                  var _addCorpora = _asyncToGenerator(
                    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee29(
                      t
                    ) {
                      var _e45;
                      return _regeneratorRuntime().wrap(
                        function _callee29$(_context29) {
                          while (1)
                            switch ((_context29.prev = _context29.next)) {
                              case 0:
                                if (!t) {
                                  _context29.next = 13;
                                  break;
                                }
                                if (!Array.isArray(t)) {
                                  _context29.next = 11;
                                  break;
                                }
                                _e45 = 0;
                              case 3:
                                if (!(_e45 < t.length)) {
                                  _context29.next = 9;
                                  break;
                                }
                                _context29.next = 6;
                                return this.addCorpus(t[_e45]);
                              case 6:
                                _e45 += 1;
                                _context29.next = 3;
                                break;
                              case 9:
                                _context29.next = 13;
                                break;
                              case 11:
                                _context29.next = 13;
                                return this.addCorpus(t);
                              case 13:
                              case "end":
                                return _context29.stop();
                            }
                        },
                        _callee29,
                        this
                      );
                    })
                  );
                  function addCorpora(_x47) {
                    return _addCorpora.apply(this, arguments);
                  }
                  return addCorpora;
                })(),
              },
              {
                key: "addImported",
                value: (function () {
                  var _addImported = _asyncToGenerator(
                    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee30(
                      t
                    ) {
                      var e, _s55, s, n, _t125;
                      return _regeneratorRuntime().wrap(
                        function _callee30$(_context30) {
                          while (1)
                            switch ((_context30.prev = _context30.next)) {
                              case 0:
                                if (!t.content) {
                                  _context30.next = 4;
                                  break;
                                }
                                e = t.content;
                                _context30.next = 12;
                                break;
                              case 4:
                                if (t.filename) {
                                  _context30.next = 6;
                                  break;
                                }
                                throw new Error(
                                  "Corpus information without content or file name"
                                );
                              case 6:
                                _s55 = this.container.get("fs");
                                _context30.next = 9;
                                return _s55.readFile(t.filename);
                              case 9:
                                e = _context30.sent;
                                if (e) {
                                  _context30.next = 12;
                                  break;
                                }
                                throw new Error(
                                  'Corpus not found "'.concat(t.filename, '"')
                                );
                              case 12:
                                s = this.container.get(t.importer);
                                if (
                                  !(s ||
                                    (s = this.container.get(
                                      "".concat(t.importer, "-importer")
                                    )),
                                  !s)
                                ) {
                                  _context30.next = 15;
                                  break;
                                }
                                throw new Error(
                                  "Corpus importer not found: ".concat(
                                    t.importer
                                  )
                                );
                              case 15:
                                n = s.transform(e, t);
                                for (_t125 = 0; _t125 < n.length; _t125 += 1)
                                  this.addCorpus(n[_t125]);
                              case 17:
                              case "end":
                                return _context30.stop();
                            }
                        },
                        _callee30,
                        this
                      );
                    })
                  );
                  function addImported(_x48) {
                    return _addImported.apply(this, arguments);
                  }
                  return addImported;
                })(),
              },
              {
                key: "addEntities",
                value: function addEntities(t, e) {
                  var s = Object.keys(t);
                  for (var _n45 = 0; _n45 < s.length; _n45 += 1) {
                    var _i31 = s[_n45];
                    var _r13 = t[_i31];
                    "string" == typeof _r13 &&
                      (_r13 = {
                        regex: [_r13],
                      });
                    var _o20 = _r13.locale;
                    if (
                      (_o20 || (_o20 = e || "en"),
                      "string" == typeof _o20 && (_o20 = _o20.slice(0, 2)),
                      _r13.options)
                    ) {
                      var _t126 = Object.keys(_r13.options);
                      for (var _e46 = 0; _e46 < _t126.length; _e46 += 1)
                        this.addNerRuleOptionTexts(
                          _o20,
                          _i31,
                          _t126[_e46],
                          _r13.options[_t126[_e46]]
                        );
                    }
                    if (_r13.regex)
                      if (Array.isArray(_r13.regex))
                        for (
                          var _t127 = 0;
                          _t127 < _r13.regex.length;
                          _t127 += 1
                        )
                          this.addNerRegexRule(_o20, _i31, _r13.regex[_t127]);
                      else
                        "string" == typeof _r13.regex &&
                          _r13.regex.trim() &&
                          this.addNerRegexRule(_o20, _i31, _r13.regex);
                    if (_r13.trim)
                      for (var _t128 = 0; _t128 < _r13.trim.length; _t128 += 1)
                        this.addNerPositionCondition(
                          _o20,
                          _i31,
                          _r13.trim[_t128].position,
                          _r13.trim[_t128].words,
                          _r13.trim[_t128].opts
                        );
                  }
                },
              },
              {
                key: "addData",
                value: function addData(t, e, s) {
                  for (var _n46 = 0; _n46 < t.length; _n46 += 1) {
                    var _i32 = t[_n46],
                      _r14 = _i32.intent,
                      _o21 = _i32.utterances,
                      _a2 = _i32.answers;
                    for (var _t129 = 0; _t129 < _o21.length; _t129 += 1)
                      s && this.assignDomain(e, _r14, s.name),
                        this.addDocument(e, _o21[_t129], _r14);
                    if (_a2)
                      for (var _t130 = 0; _t130 < _a2.length; _t130 += 1) {
                        var _s56 = _a2[_t130];
                        "string" == typeof _s56
                          ? this.addAnswer(e, _r14, _s56)
                          : this.addAnswer(e, _r14, _s56.answer, _s56.opts);
                      }
                  }
                },
              },
              {
                key: "addCorpus",
                value: (function () {
                  var _addCorpus = _asyncToGenerator(
                    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee31(
                      t
                    ) {
                      var e,
                        _s57,
                        _n47,
                        _e47,
                        _t131,
                        _n48,
                        _i33,
                        _e48,
                        _t132,
                        _s58,
                        _n49,
                        _i34,
                        _r15,
                        _t133,
                        _e49,
                        _s59,
                        _n50;
                      return _regeneratorRuntime().wrap(
                        function _callee31$(_context31) {
                          while (1)
                            switch ((_context31.prev = _context31.next)) {
                              case 0:
                                if (!t.importer) {
                                  _context31.next = 5;
                                  break;
                                }
                                _context31.next = 3;
                                return this.addImported(t);
                              case 3:
                                _context31.next = 26;
                                break;
                              case 5:
                                e = t;
                                _s57 = this.container.get("fs");
                                if (!("string" == typeof t)) {
                                  _context31.next = 14;
                                  break;
                                }
                                _context31.next = 10;
                                return _s57.readFile(t);
                              case 10:
                                _n47 = _context31.sent;
                                if (_n47) {
                                  _context31.next = 13;
                                  break;
                                }
                                throw new Error(
                                  'Corpus not found "'.concat(t, '"')
                                );
                              case 13:
                                e =
                                  "string" == typeof _n47
                                    ? JSON.parse(_n47)
                                    : _n47;
                              case 14:
                                if (!e.contextData) {
                                  _context31.next = 25;
                                  break;
                                }
                                (_e47 = e), (_t131 = _e47.contextData);
                                _context31.t0 =
                                  "string" == typeof e.contextData;
                                if (!_context31.t0) {
                                  _context31.next = 23;
                                  break;
                                }
                                _context31.t1 = JSON;
                                _context31.next = 21;
                                return _s57.readFile(e.contextData);
                              case 21:
                                _context31.t2 = _context31.sent;
                                _t131 = _context31.t1.parse.call(
                                  _context31.t1,
                                  _context31.t2
                                );
                              case 23:
                                (_n48 = this.container.get("context-manager")),
                                  (_i33 = Object.keys(_t131));
                                for (_e48 = 0; _e48 < _i33.length; _e48 += 1)
                                  _n48.defaultData[_i33[_e48]] =
                                    _t131[_i33[_e48]];
                              case 25:
                                if (e.domains) {
                                  e.entities && this.addEntities(e.entities);
                                  for (
                                    _t132 = 0;
                                    _t132 < e.domains.length;
                                    _t132 += 1
                                  ) {
                                    (_s58 = e.domains[_t132]),
                                      (_n49 = _s58.data),
                                      (_i34 = _s58.entities),
                                      (_r15 = _s58.locale.slice(0, 2));
                                    this.addLanguage(_r15),
                                      _i34 && this.addEntities(_i34, _r15),
                                      this.addData(_n49, _r15, _s58);
                                  }
                                } else {
                                  _t133 = e.locale.slice(0, 2);
                                  this.addLanguage(_t133);
                                  (_e49 = e),
                                    (_s59 = _e49.data),
                                    (_n50 = _e49.entities);
                                  _n50 && this.addEntities(_n50, _t133),
                                    this.addData(_s59, _t133);
                                }
                              case 26:
                              case "end":
                                return _context31.stop();
                            }
                        },
                        _callee31,
                        this
                      );
                    })
                  );
                  function addCorpus(_x49) {
                    return _addCorpus.apply(this, arguments);
                  }
                  return addCorpus;
                })(),
              },
              {
                key: "getSentiment",
                value: function getSentiment(t, e) {
                  return "object" == _typeof(t)
                    ? this.sentiment.process(t)
                    : (e || ((e = t), (t = this.guessLanguage(e))),
                      this.sentiment.process({
                        utterance: e,
                        locale: t,
                      }));
                },
              },
              {
                key: "describeLanguage",
                value: function describeLanguage(t, e) {
                  this.nluManager.describeLanguage(t, e);
                },
              },
              {
                key: "train",
                value: (function () {
                  var _train2 = _asyncToGenerator(
                    /*#__PURE__*/ _regeneratorRuntime().mark(
                      function _callee32() {
                        var t;
                        return _regeneratorRuntime().wrap(
                          function _callee32$(_context32) {
                            while (1)
                              switch ((_context32.prev = _context32.next)) {
                                case 0:
                                  this.nluManager.addLanguage(
                                    this.settings.languages
                                  );
                                  _context32.next = 3;
                                  return this.nluManager.train();
                                case 3:
                                  t = _context32.sent;
                                  _context32.t0 = this.settings.autoSave;
                                  if (!_context32.t0) {
                                    _context32.next = 8;
                                    break;
                                  }
                                  _context32.next = 8;
                                  return this.save(
                                    this.settings.modelFileName,
                                    !0
                                  );
                                case 8:
                                  return _context32.abrupt("return", t);
                                case 9:
                                case "end":
                                  return _context32.stop();
                              }
                          },
                          _callee32,
                          this
                        );
                      }
                    )
                  );
                  function train() {
                    return _train2.apply(this, arguments);
                  }
                  return train;
                })(),
              },
              {
                key: "classify",
                value: (function () {
                  var _classify = _asyncToGenerator(
                    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee33(
                      t,
                      e,
                      s
                    ) {
                      return _regeneratorRuntime().wrap(
                        function _callee33$(_context33) {
                          while (1)
                            switch ((_context33.prev = _context33.next)) {
                              case 0:
                                return _context33.abrupt(
                                  "return",
                                  this.nluManager.process(
                                    t,
                                    e,
                                    s || this.settings.nlu
                                  )
                                );
                              case 1:
                              case "end":
                                return _context33.stop();
                            }
                        },
                        _callee33,
                        this
                      );
                    })
                  );
                  function classify(_x50, _x51, _x52) {
                    return _classify.apply(this, arguments);
                  }
                  return classify;
                })(),
              },
              {
                key: "extractEntities",
                value: (function () {
                  var _extractEntities = _asyncToGenerator(
                    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee34(
                      t,
                      e,
                      s,
                      n
                    ) {
                      return _regeneratorRuntime().wrap(
                        function _callee34$(_context34) {
                          while (1)
                            switch ((_context34.prev = _context34.next)) {
                              case 0:
                                if (!("object" == _typeof(t))) {
                                  _context34.next = 2;
                                  break;
                                }
                                return _context34.abrupt(
                                  "return",
                                  this.ner.process(t)
                                );
                              case 2:
                                e || ((e = t), (t = void 0)),
                                  t || (t = this.guessLanguage(e));
                                _context34.next = 5;
                                return this.ner.process({
                                  locale: t,
                                  utterance: e,
                                  context: s,
                                  settings: this.applySettings(
                                    n,
                                    this.settings.ner
                                  ),
                                });
                              case 5:
                                return _context34.abrupt(
                                  "return",
                                  _context34.sent
                                );
                              case 6:
                              case "end":
                                return _context34.stop();
                            }
                        },
                        _callee34,
                        this
                      );
                    })
                  );
                  function extractEntities(_x53, _x54, _x55, _x56) {
                    return _extractEntities.apply(this, arguments);
                  }
                  return extractEntities;
                })(),
              },
              {
                key: "organizeEntities",
                value: function organizeEntities(t) {
                  var e = {};
                  for (var _s60 = 0; _s60 < t.length; _s60 += 1) {
                    var _n51 = t[_s60];
                    e[_n51.entity] || (e[_n51.entity] = []),
                      e[_n51.entity].push(_n51);
                  }
                  var s = [];
                  return (
                    Object.keys(e).forEach(function (t) {
                      var n = e[t];
                      if (1 === n.length) s.push(n[0]);
                      else {
                        for (var _e50 = 0; _e50 < n.length; _e50 += 1)
                          n[_e50].alias = "".concat(t, "_").concat(_e50);
                        s.push({
                          entity: t,
                          isList: !0,
                          items: n,
                        });
                      }
                    }),
                    s
                  );
                },
              },
              {
                key: "process",
                value: (function () {
                  var _process2 = _asyncToGenerator(
                    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee35(
                      t,
                      e,
                      s,
                      n
                    ) {
                      var i,
                        r,
                        o,
                        a,
                        u,
                        _s61,
                        _i35,
                        _o22,
                        c,
                        l,
                        _t134,
                        _e51,
                        _t135,
                        h,
                        _s62,
                        g,
                        _t136,
                        _e52,
                        _t137,
                        _e53;
                      return _regeneratorRuntime().wrap(
                        function _callee35$(_context35) {
                          while (1)
                            switch ((_context35.prev = _context35.next)) {
                              case 0:
                                r = s;
                                "object" == _typeof(t) &&
                                  ("object" == _typeof(e) && e.value
                                    ? ((t = void 0), (e = e.value))
                                    : (i = t));
                                i
                                  ? ((t = i.locale),
                                    (e = i.utterance || i.message || i.text))
                                  : (e || ((e = t), (t = void 0)),
                                    t || (t = this.guessLanguage(e)),
                                    (i = {
                                      locale: t,
                                      utterance: e,
                                      settings: n,
                                    }),
                                    n &&
                                      (n.activity &&
                                        !i.activity &&
                                        (i.activity = n.activity),
                                      n.conversationId &&
                                        !i.activity &&
                                        (i.activity = {
                                          conversation: {
                                            id: n.conversationId,
                                          },
                                        })));
                                _context35.t0 = r;
                                if (_context35.t0) {
                                  _context35.next = 8;
                                  break;
                                }
                                _context35.next = 7;
                                return this.contextManager.getContext(i);
                              case 7:
                                r = _context35.sent;
                              case 8:
                                r.channel = i.channel;
                                r.app = i.app;
                                r.from = i.from || null;
                                (o = {
                                  locale: t,
                                  utterance: e,
                                  context: r,
                                  settings: this.applySettings(
                                    n,
                                    this.settings.nlu
                                  ),
                                }),
                                  (a =
                                    o.settings && "forceNER" in o.settings
                                      ? o.settings.forceNER
                                      : this.forceNER);
                                _context35.next = 14;
                                return this.nluManager.process(o);
                              case 14:
                                u = _context35.sent;
                                if (!(a || !this.slotManager.isEmpty)) {
                                  _context35.next = 25;
                                  break;
                                }
                                _context35.next = 18;
                                return this.ner.generateEntityUtterance(t, e);
                              case 18:
                                _s61 = _context35.sent;
                                if (!(_s61 && _s61 !== e)) {
                                  _context35.next = 25;
                                  break;
                                }
                                _i35 = {
                                  locale: t,
                                  utterance: _s61,
                                  context: r,
                                  settings: this.applySettings(
                                    n,
                                    this.settings.nlu
                                  ),
                                };
                                _context35.next = 23;
                                return this.nluManager.process(_i35);
                              case 23:
                                _o22 = _context35.sent;
                                _o22 &&
                                  (_o22.score > u.score ||
                                    "None" === u.intent) &&
                                  ((u = _o22),
                                  (u.utterance = e),
                                  (u.optionalUtterance = _s61));
                              case 25:
                                u.score < this.settings.threshold &&
                                  ((u.score = 1), (u.intent = "None"));
                                u.context = r;
                                if (!(a || !this.slotManager.isEmpty)) {
                                  _context35.next = 33;
                                  break;
                                }
                                _context35.next = 30;
                                return this.ner.process(_objectSpread({}, u));
                              case 30:
                                u = _context35.sent;
                                _context35.next = 34;
                                break;
                              case 33:
                                (u.entities = []), (u.sourceEntities = []);
                              case 34:
                                c = this.container.get(
                                  "stemmer-".concat(u.locale)
                                );
                                c && c.lastFill && c.lastFill(u);
                                l = this.organizeEntities(u.entities);
                                u.context.entities || (u.context.entities = {});
                                for (_t134 = 0; _t134 < l.length; _t134 += 1) {
                                  _e51 = l[_t134];
                                  if (
                                    ((u.context.entities[_e51.entity] = _e51),
                                    _e51.isList)
                                  )
                                    for (
                                      _t135 = 0;
                                      _t135 < _e51.items.length;
                                      _t135 += 1
                                    )
                                      u.context[_e51.items[_t135].alias] =
                                        _e51.items[_t135].sourceText;
                                  u.context[_e51.entity] = _e51.isList
                                    ? _e51.items[0].sourceText
                                    : _e51.sourceText;
                                }
                                _context35.next = 41;
                                return this.nlgManager.run(
                                  _objectSpread({}, u)
                                );
                              case 41:
                                h = _context35.sent;
                                u.answers = h.answers;
                                u.answer = h.answer;
                                _context35.next = 46;
                                return this.actionManager.run(
                                  _objectSpread({}, u)
                                );
                              case 46:
                                u = _context35.sent;
                                if (!this.settings.calculateSentiment) {
                                  _context35.next = 52;
                                  break;
                                }
                                _context35.next = 50;
                                return this.getSentiment(t, e);
                              case 50:
                                _s62 = _context35.sent;
                                u.sentiment = _s62 ? _s62.sentiment : void 0;
                              case 52:
                                (!a && this.slotManager.isEmpty) ||
                                  (this.slotManager.process(u, r) &&
                                    u.entities.forEach(function (t) {
                                      r[t.entity] = t.option || t.utteranceText;
                                    }),
                                  (r.slotFill = u.slotFill));
                                _context35.next = 55;
                                return this.contextManager.setContext(i, r);
                              case 55:
                                delete u.context;
                                delete u.settings;
                                g = i ? this.applySettings(i, u) : u;
                                if (!("None" === g.intent && !g.answer)) {
                                  _context35.next = 65;
                                  break;
                                }
                                _t136 = this.container.get("open-question");
                                if (!_t136) {
                                  _context35.next = 65;
                                  break;
                                }
                                _context35.next = 63;
                                return _t136.getAnswer(g.locale, g.utterance);
                              case 63:
                                _e52 = _context35.sent;
                                _e52 &&
                                  _e52.answer &&
                                  _e52.answer.length > 0 &&
                                  ((g.answer = _e52.answer),
                                  (g.isOpenQuestionAnswer = !0),
                                  (g.openQuestionFirstCharacter =
                                    _e52.position),
                                  (g.openQuestionScore = _e52.score));
                              case 65:
                                if (!this.onIntent) {
                                  _context35.next = 70;
                                  break;
                                }
                                _context35.next = 68;
                                return this.onIntent(this, g);
                              case 68:
                                _context35.next = 75;
                                break;
                              case 70:
                                (_t137 = "onIntent(".concat(g.intent, ")")),
                                  (_e53 = this.container.getPipeline(_t137));
                                _context35.t1 = _e53;
                                if (!_context35.t1) {
                                  _context35.next = 75;
                                  break;
                                }
                                _context35.next = 75;
                                return this.container.runPipeline(
                                  _e53,
                                  g,
                                  this
                                );
                              case 75:
                                return _context35.abrupt("return", g);
                              case 76:
                              case "end":
                                return _context35.stop();
                            }
                        },
                        _callee35,
                        this
                      );
                    })
                  );
                  function process(_x57, _x58, _x59, _x60) {
                    return _process2.apply(this, arguments);
                  }
                  return process;
                })(),
              },
              {
                key: "toJSON",
                value: function toJSON() {
                  var t = {
                    settings: _objectSpread({}, this.settings),
                    nluManager: this.nluManager.toJSON(),
                    ner: this.ner.toJSON(),
                    nlgManager: this.nlgManager.toJSON(),
                    actionManager: this.actionManager.toJSON(),
                    slotManager: this.slotManager.save(),
                  };
                  return delete t.settings.container, t;
                },
              },
              {
                key: "fromJSON",
                value: function fromJSON(t) {
                  this.applySettings(this.settings, t.settings),
                    this.nluManager.fromJSON(t.nluManager),
                    this.ner.fromJSON(t.ner),
                    this.nlgManager.fromJSON(t.nlgManager),
                    this.actionManager.fromJSON(t.actionManager),
                    this.slotManager.load(t.slotManager);
                },
              },
              {
                key: "export",
                value: function _export() {
                  var t =
                    arguments.length > 0 && arguments[0] !== undefined
                      ? arguments[0]
                      : !1;
                  var e = this.toJSON();
                  return t ? JSON.stringify(e) : JSON.stringify(e, null, 2);
                },
              },
              {
                key: "import",
                value: function _import(t) {
                  var e = "string" == typeof t ? JSON.parse(t) : t;
                  this.fromJSON(e);
                },
              },
              {
                key: "save",
                value: (function () {
                  var _save = _asyncToGenerator(
                    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee36(
                      t
                    ) {
                      var e,
                        s,
                        n,
                        _args36 = arguments;
                      return _regeneratorRuntime().wrap(
                        function _callee36$(_context36) {
                          while (1)
                            switch ((_context36.prev = _context36.next)) {
                              case 0:
                                e =
                                  _args36.length > 1 && _args36[1] !== undefined
                                    ? _args36[1]
                                    : !1;
                                (s = this.container.get("fs")),
                                  (n = t || "model.nlp");
                                _context36.next = 4;
                                return s.writeFile(n, this["export"](e));
                              case 4:
                              case "end":
                                return _context36.stop();
                            }
                        },
                        _callee36,
                        this
                      );
                    })
                  );
                  function save(_x61) {
                    return _save.apply(this, arguments);
                  }
                  return save;
                })(),
              },
              {
                key: "load",
                value: (function () {
                  var _load = _asyncToGenerator(
                    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee37(
                      t
                    ) {
                      var e, s, n;
                      return _regeneratorRuntime().wrap(
                        function _callee37$(_context37) {
                          while (1)
                            switch ((_context37.prev = _context37.next)) {
                              case 0:
                                e = this.container.get("fs");
                                s = t || "model.nlp";
                                _context37.next = 4;
                                return e.readFile(s);
                              case 4:
                                n = _context37.sent;
                                return _context37.abrupt(
                                  "return",
                                  !!n && (this["import"](n), !0)
                                );
                              case 6:
                              case "end":
                                return _context37.stop();
                            }
                        },
                        _callee37,
                        this
                      );
                    })
                  );
                  function load(_x62) {
                    return _load.apply(this, arguments);
                  }
                  return load;
                })(),
              },
            ]);
            return _class28;
          })(n);
        },
        {
          "./context-manager": 50,
          "@nlpjs/core": 12,
          "@nlpjs/ner": 39,
          "@nlpjs/nlg": 48,
          "@nlpjs/nlu": 54,
          "@nlpjs/sentiment": 61,
          "@nlpjs/slot": 68,
        },
      ],
      53: [
        function (t, e, s) {
          var _t138 = t("@nlpjs/core"),
            n = _t138.Clonable,
            i = _t138.compareWildcars,
            r = "master_domain";
          e.exports = /*#__PURE__*/ (function (_n52) {
            _inherits(_class29, _n52);
            var _super12 = _createSuper(_class29);
            function _class29() {
              var _this19;
              var t =
                arguments.length > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : {};
              var e = arguments.length > 1 ? arguments[1] : undefined;
              _classCallCheck(this, _class29);
              (_this19 = _super12.call(
                this,
                {
                  settings: {},
                  container: t.container || e,
                },
                e
              )),
                _this19.applySettings(_this19.settings, t),
                _this19.applySettings(_this19.settings, {
                  locale: "en",
                }),
                _this19.settings.tag ||
                  (_this19.settings.tag = "domain-manager-".concat(
                    _this19.settings.locale
                  )),
                _this19.registerDefault(),
                _this19.applySettings(
                  _this19.settings,
                  _this19.container.getConfiguration(_this19.settings.tag)
                ),
                (_this19.domains = {}),
                _this19.addDomain(r),
                (_this19.stemDict = {}),
                (_this19.intentDict = {}),
                (_this19.sentences = []),
                _this19.applySettings(_assertThisInitialized(_this19), {
                  pipelineTrain: _this19.getPipeline(
                    "".concat(_this19.settings.tag, "-train")
                  ),
                  pipelineProcess: _this19.getPipeline(
                    "".concat(_this19.settings.tag, "-process")
                  ),
                });
              return _this19;
            }
            _createClass(_class29, [
              {
                key: "registerDefault",
                value: function registerDefault() {
                  this.container.registerConfiguration(
                    "domain-manager-??",
                    {
                      nluByDomain: {
                        default: {
                          className: "NeuralNlu",
                          settings: {},
                        },
                      },
                      trainByDomain: !1,
                      useStemDict: !0,
                    },
                    !1
                  ),
                    this.container.registerPipeline(
                      "domain-manager-??-train",
                      [
                        ".trainStemmer",
                        ".generateCorpus",
                        ".fillStemDict",
                        ".innerTrain",
                        "output.status",
                      ],
                      !1
                    );
                },
              },
              {
                key: "getDomainInstance",
                value: function getDomainInstance(t) {
                  this.settings.nluByDomain || (this.settings.nluByDomain = {});
                  var e = this.settings.nluByDomain[t] ||
                    this.settings.nluByDomain["default"] || {
                      className: "NeuralNlu",
                      settings: {},
                    };
                  return this.container.get(
                    e.className || "NeuralNlu",
                    this.applySettings(
                      {
                        locale: this.settings.locale,
                      },
                      e.settings || {}
                    )
                  );
                },
              },
              {
                key: "addDomain",
                value: function addDomain(t) {
                  return (
                    this.domains[t] ||
                      (this.domains[t] = this.getDomainInstance(t)),
                    this.domains[t]
                  );
                },
              },
              {
                key: "removeDomain",
                value: function removeDomain(t) {
                  delete this.domains[t];
                },
              },
              {
                key: "generateStemKey",
                value: (function () {
                  var _generateStemKey = _asyncToGenerator(
                    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee38(
                      t
                    ) {
                      var e, _s63;
                      return _regeneratorRuntime().wrap(
                        function _callee38$(_context38) {
                          while (1)
                            switch ((_context38.prev = _context38.next)) {
                              case 0:
                                if (!("string" != typeof t)) {
                                  _context38.next = 4;
                                  break;
                                }
                                e = t;
                                _context38.next = 10;
                                break;
                              case 4:
                                _context38.next = 6;
                                return this.prepare({
                                  utterance: t,
                                });
                              case 6:
                                _s63 = _context38.sent;
                                _context38.next = 9;
                                return _s63.stems;
                              case 9:
                                e = _context38.sent;
                              case 10:
                                return _context38.abrupt(
                                  "return",
                                  (Array.isArray(e) || (e = Object.keys(e)),
                                  e.slice().sort().join())
                                );
                              case 11:
                              case "end":
                                return _context38.stop();
                            }
                        },
                        _callee38,
                        this
                      );
                    })
                  );
                  function generateStemKey(_x63) {
                    return _generateStemKey.apply(this, arguments);
                  }
                  return generateStemKey;
                })(),
              },
              {
                key: "add",
                value: function add(t, e, s) {
                  s
                    ? this.sentences.push({
                        domain: t,
                        utterance: e,
                        intent: s,
                      })
                    : this.sentences.push({
                        domain: r,
                        utterance: t,
                        intent: e,
                      });
                },
              },
              {
                key: "remove",
                value: function remove(t, e, s) {
                  var n = s ? t : r,
                    i = s ? e : t,
                    o = s || e;
                  for (
                    var _t139 = 0;
                    _t139 < this.sentences.length;
                    _t139 += 1
                  ) {
                    var _e54 = this.sentences[_t139];
                    if (
                      _e54.domain === n &&
                      _e54.utterance === i &&
                      _e54.intent === o
                    )
                      return this.sentences.splice(_t139, 1), !0;
                  }
                  return !1;
                },
              },
              {
                key: "trainStemmer",
                value: (function () {
                  var _trainStemmer = _asyncToGenerator(
                    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee39(
                      t
                    ) {
                      var e, _t140, _s64;
                      return _regeneratorRuntime().wrap(
                        function _callee39$(_context39) {
                          while (1)
                            switch ((_context39.prev = _context39.next)) {
                              case 0:
                                e = t;
                                this.cache ||
                                  (this.cache = {
                                    stem: this.container.get("stem"),
                                  });
                                _t140 = 0;
                              case 3:
                                if (!(_t140 < this.sentences.length)) {
                                  _context39.next = 10;
                                  break;
                                }
                                _s64 = _objectSpread(
                                  _objectSpread({}, this.sentences[_t140]),
                                  e
                                );
                                _context39.next = 7;
                                return this.cache.stem.addForTraining(_s64);
                              case 7:
                                _t140 += 1;
                                _context39.next = 3;
                                break;
                              case 10:
                                _context39.next = 12;
                                return this.cache.stem.train(e);
                              case 12:
                                return _context39.abrupt("return", e);
                              case 13:
                              case "end":
                                return _context39.stop();
                            }
                        },
                        _callee39,
                        this
                      );
                    })
                  );
                  function trainStemmer(_x64) {
                    return _trainStemmer.apply(this, arguments);
                  }
                  return trainStemmer;
                })(),
              },
              {
                key: "innerGenerateCorpus",
                value: function innerGenerateCorpus(t) {
                  this.intentDict = {};
                  var e = {
                    master_domain: [],
                  };
                  for (var _s65 = 0; _s65 < this.sentences.length; _s65 += 1) {
                    var _n53 = this.sentences[_s65];
                    this.intentDict[_n53.intent] = _n53.domain;
                    var _i36 = t || _n53.domain;
                    e[_i36] || (e[_i36] = []);
                    e[_i36].push({
                      utterance: _n53.utterance,
                      intent: _n53.intent,
                    }),
                      t ||
                        e.master_domain.push({
                          utterance: _n53.utterance,
                          intent: _n53.domain,
                        });
                  }
                  return e;
                },
              },
              {
                key: "generateCorpus",
                value: (function () {
                  var _generateCorpus = _asyncToGenerator(
                    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee40(
                      t
                    ) {
                      var e;
                      return _regeneratorRuntime().wrap(
                        function _callee40$(_context40) {
                          while (1)
                            switch ((_context40.prev = _context40.next)) {
                              case 0:
                                e = t;
                                return _context40.abrupt(
                                  "return",
                                  ((e.corpus = this.innerGenerateCorpus(
                                    this.settings.trainByDomain ? void 0 : r
                                  )),
                                  e)
                                );
                              case 2:
                              case "end":
                                return _context40.stop();
                            }
                        },
                        _callee40,
                        this
                      );
                    })
                  );
                  function generateCorpus(_x65) {
                    return _generateCorpus.apply(this, arguments);
                  }
                  return generateCorpus;
                })(),
              },
              {
                key: "prepare",
                value: (function () {
                  var _prepare = _asyncToGenerator(
                    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee41(
                      t
                    ) {
                      var e, s, n, i;
                      return _regeneratorRuntime().wrap(
                        function _callee41$(_context41) {
                          while (1)
                            switch ((_context41.prev = _context41.next)) {
                              case 0:
                                (e = t),
                                  (s = "string" == typeof e),
                                  (n = s ? e : e.utterance),
                                  (i = this.addDomain(r).prepare(n));
                                return _context41.abrupt(
                                  "return",
                                  s ? i : ((e.stems = i), e)
                                );
                              case 2:
                              case "end":
                                return _context41.stop();
                            }
                        },
                        _callee41,
                        this
                      );
                    })
                  );
                  function prepare(_x66) {
                    return _prepare.apply(this, arguments);
                  }
                  return prepare;
                })(),
              },
              {
                key: "fillStemDict",
                value: (function () {
                  var _fillStemDict = _asyncToGenerator(
                    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee42(
                      t
                    ) {
                      var _t141, _this$sentences$_t, e, _s66, _n54, _i37;
                      return _regeneratorRuntime().wrap(
                        function _callee42$(_context42) {
                          while (1)
                            switch ((_context42.prev = _context42.next)) {
                              case 0:
                                this.stemDict = {};
                                _t141 = 0;
                              case 2:
                                if (!(_t141 < this.sentences.length)) {
                                  _context42.next = 14;
                                  break;
                                }
                                _this$sentences$_t = this.sentences[_t141];
                                e = _this$sentences$_t.utterance;
                                _s66 = _this$sentences$_t.intent;
                                _n54 = _this$sentences$_t.domain;
                                _context42.next = 9;
                                return this.generateStemKey(e);
                              case 9:
                                _i37 = _context42.sent;
                                (_i37 && "" !== _i37) ||
                                  this.container
                                    .get("logger")
                                    .warn(
                                      'This utterance: "'.concat(
                                        e,
                                        '" contains only stop words'
                                      )
                                    ),
                                  (this.stemDict[_i37] = {
                                    intent: _s66,
                                    domain: _n54,
                                  });
                              case 11:
                                _t141 += 1;
                                _context42.next = 2;
                                break;
                              case 14:
                                return _context42.abrupt("return", t);
                              case 15:
                              case "end":
                                return _context42.stop();
                            }
                        },
                        _callee42,
                        this
                      );
                    })
                  );
                  function fillStemDict(_x67) {
                    return _fillStemDict.apply(this, arguments);
                  }
                  return fillStemDict;
                })(),
              },
              {
                key: "innerTrain",
                value: (function () {
                  var _innerTrain = _asyncToGenerator(
                    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee43(
                      t
                    ) {
                      var e, s, n, i, _e55, _r16, o, a;
                      return _regeneratorRuntime().wrap(
                        function _callee43$(_context43) {
                          while (1)
                            switch ((_context43.prev = _context43.next)) {
                              case 0:
                                (e = t),
                                  (s = e.corpus),
                                  (n = Object.keys(s)),
                                  (i = {});
                                _e55 = 0;
                              case 2:
                                if (!(_e55 < n.length)) {
                                  _context43.next = 12;
                                  break;
                                }
                                (_r16 = this.addDomain(n[_e55])),
                                  (o = {
                                    useNoneFeature:
                                      this.settings.useNoneFeature,
                                  });
                                t.settings &&
                                  void 0 !== t.settings.log &&
                                  (o.log = t.settings.log);
                                _context43.next = 7;
                                return _r16.train(s[n[_e55]], o);
                              case 7:
                                a = _context43.sent;
                                i[n[_e55]] = a.status;
                              case 9:
                                _e55 += 1;
                                _context43.next = 2;
                                break;
                              case 12:
                                return _context43.abrupt(
                                  "return",
                                  ((e.status = i), e)
                                );
                              case 13:
                              case "end":
                                return _context43.stop();
                            }
                        },
                        _callee43,
                        this
                      );
                    })
                  );
                  function innerTrain(_x68) {
                    return _innerTrain.apply(this, arguments);
                  }
                  return innerTrain;
                })(),
              },
              {
                key: "train",
                value: (function () {
                  var _train3 = _asyncToGenerator(
                    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee44(
                      t
                    ) {
                      var e;
                      return _regeneratorRuntime().wrap(
                        function _callee44$(_context44) {
                          while (1)
                            switch ((_context44.prev = _context44.next)) {
                              case 0:
                                e = {
                                  domainManager: this,
                                  settings: t || this.settings,
                                };
                                return _context44.abrupt(
                                  "return",
                                  this.runPipeline(e, this.pipelineTrain)
                                );
                              case 2:
                              case "end":
                                return _context44.stop();
                            }
                        },
                        _callee44,
                        this
                      );
                    })
                  );
                  function train(_x69) {
                    return _train3.apply(this, arguments);
                  }
                  return train;
                })(),
              },
              {
                key: "matchAllowList",
                value: function matchAllowList(t, e) {
                  for (var _s67 = 0; _s67 < e.length; _s67 += 1)
                    if (i(t, e[_s67])) return !0;
                  return !1;
                },
              },
              {
                key: "classifyByStemDict",
                value: (function () {
                  var _classifyByStemDict = _asyncToGenerator(
                    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee45(
                      t,
                      e,
                      s
                    ) {
                      var n, i, _t142, _e56, _s68;
                      return _regeneratorRuntime().wrap(
                        function _callee45$(_context45) {
                          while (1)
                            switch ((_context45.prev = _context45.next)) {
                              case 0:
                                _context45.next = 2;
                                return this.generateStemKey(t);
                              case 2:
                                n = _context45.sent;
                                i = this.stemDict[n];
                                if (!(i && (!e || i.domain === e))) {
                                  _context45.next = 12;
                                  break;
                                }
                                if (!(s && !this.matchAllowList(i.intent, s))) {
                                  _context45.next = 7;
                                  break;
                                }
                                return _context45.abrupt("return");
                              case 7:
                                _t142 = [];
                                _t142.push({
                                  intent: i.intent,
                                  score: 1,
                                });
                                _e56 = Object.keys(this.intentDict);
                                for (_s68 = 0; _s68 < _e56.length; _s68 += 1)
                                  _e56[_s68] !== i.intent &&
                                    _t142.push({
                                      intent: _e56[_s68],
                                      score: 0,
                                    });
                                return _context45.abrupt("return", {
                                  domain: i.domain,
                                  classifications: _t142,
                                });
                              case 12:
                              case "end":
                                return _context45.stop();
                            }
                        },
                        _callee45,
                        this
                      );
                    })
                  );
                  function classifyByStemDict(_x70, _x71, _x72) {
                    return _classifyByStemDict.apply(this, arguments);
                  }
                  return classifyByStemDict;
                })(),
              },
              {
                key: "innerClassify",
                value: (function () {
                  var _innerClassify = _asyncToGenerator(
                    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee46(
                      t,
                      e
                    ) {
                      var s, _n55, _t143, _n56, _i38, o, n, _t144, _e57;
                      return _regeneratorRuntime().wrap(
                        function _callee46$(_context46) {
                          while (1)
                            switch ((_context46.prev = _context46.next)) {
                              case 0:
                                s = t;
                                if (
                                  !this.applySettings(
                                    _objectSpread({}, s.settings),
                                    this.settings
                                  ).useStemDict
                                ) {
                                  _context46.next = 7;
                                  break;
                                }
                                _context46.next = 4;
                                return this.classifyByStemDict(
                                  s.utterance,
                                  e,
                                  t.settings ? t.settings.allowList : void 0
                                );
                              case 4:
                                _n55 = _context46.sent;
                                if (!_n55) {
                                  _context46.next = 7;
                                  break;
                                }
                                return _context46.abrupt(
                                  "return",
                                  ((s.classification = _n55),
                                  (s.explanation = [
                                    {
                                      token: "",
                                      stem: "##exact",
                                      weight: 1,
                                    },
                                  ]),
                                  s)
                                );
                              case 7:
                                if (!e) {
                                  _context46.next = 15;
                                  break;
                                }
                                _t143 = this.domains[e];
                                if (_t143) {
                                  _context46.next = 11;
                                  break;
                                }
                                return _context46.abrupt(
                                  "return",
                                  ((s.classification = {
                                    domain: "default",
                                    classifications: [
                                      {
                                        intent: "None",
                                        score: 1,
                                      },
                                    ],
                                  }),
                                  s)
                                );
                              case 11:
                                _context46.next = 13;
                                return _t143.process(
                                  s.utterance,
                                  s.settings || this.settings
                                );
                              case 13:
                                _n56 = _context46.sent;
                                return _context46.abrupt(
                                  "return",
                                  (Array.isArray(_n56)
                                    ? (_i38 = _n56)
                                    : ((_i38 = _n56.classifications),
                                      (s.nluAnswer = _n56)),
                                  (o =
                                    e === r
                                      ? _i38 && _i38.length
                                        ? this.intentDict[_i38[0].intent]
                                        : r
                                      : e),
                                  (s.classification = {
                                    domain: o,
                                    classifications: _i38,
                                  }),
                                  s)
                                );
                              case 15:
                                n = r;
                                if (
                                  !(
                                    (void 0 === s.settings.trainByDomain &&
                                      this.settings.trainByDomain) ||
                                    s.settings.trainByDomain
                                  )
                                ) {
                                  _context46.next = 25;
                                  break;
                                }
                                _t144 = this.domains.master_domain;
                                _context46.next = 20;
                                return _t144.process(s.utterance);
                              case 20:
                                _e57 = _context46.sent;
                                if (
                                  !(_e57.classifications &&
                                    (_e57 = _e57.classifications),
                                  1 === Object.keys(this.domains).length)
                                ) {
                                  _context46.next = 23;
                                  break;
                                }
                                return _context46.abrupt(
                                  "return",
                                  ((s.classification = {
                                    domain: "default",
                                    classifications: _e57,
                                  }),
                                  s)
                                );
                              case 23:
                                if (!((n = _e57[0].intent), "None" === n)) {
                                  _context46.next = 25;
                                  break;
                                }
                                return _context46.abrupt(
                                  "return",
                                  ((s.classification = {
                                    domain: "default",
                                    classifications: [
                                      {
                                        intent: "None",
                                        score: 1,
                                      },
                                    ],
                                  }),
                                  s)
                                );
                              case 25:
                                return _context46.abrupt(
                                  "return",
                                  this.innerClassify(s, n)
                                );
                              case 26:
                              case "end":
                                return _context46.stop();
                            }
                        },
                        _callee46,
                        this
                      );
                    })
                  );
                  function innerClassify(_x73, _x74) {
                    return _innerClassify.apply(this, arguments);
                  }
                  return innerClassify;
                })(),
              },
              {
                key: "defaultPipelineProcess",
                value: (function () {
                  var _defaultPipelineProcess2 = _asyncToGenerator(
                    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee47(
                      t
                    ) {
                      return _regeneratorRuntime().wrap(
                        function _callee47$(_context47) {
                          while (1)
                            switch ((_context47.prev = _context47.next)) {
                              case 0:
                                _context47.next = 2;
                                return this.innerClassify(t);
                              case 2:
                                return _context47.abrupt(
                                  "return",
                                  _context47.sent.classification
                                );
                              case 3:
                              case "end":
                                return _context47.stop();
                            }
                        },
                        _callee47,
                        this
                      );
                    })
                  );
                  function defaultPipelineProcess(_x75) {
                    return _defaultPipelineProcess2.apply(this, arguments);
                  }
                  return defaultPipelineProcess;
                })(),
              },
              {
                key: "process",
                value: (function () {
                  var _process3 = _asyncToGenerator(
                    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee48(
                      t,
                      e
                    ) {
                      var s;
                      return _regeneratorRuntime().wrap(
                        function _callee48$(_context48) {
                          while (1)
                            switch ((_context48.prev = _context48.next)) {
                              case 0:
                                s =
                                  "string" == typeof t
                                    ? {
                                        utterance: t,
                                        settings: e || this.settings,
                                      }
                                    : t;
                                return _context48.abrupt(
                                  "return",
                                  this.pipelineProcess
                                    ? this.runPipeline(s, this.pipelineProcess)
                                    : this.defaultPipelineProcess(s)
                                );
                              case 2:
                              case "end":
                                return _context48.stop();
                            }
                        },
                        _callee48,
                        this
                      );
                    })
                  );
                  function process(_x76, _x77) {
                    return _process3.apply(this, arguments);
                  }
                  return process;
                })(),
              },
              {
                key: "toJSON",
                value: function toJSON() {
                  var t = {
                    settings: this.settings,
                    stemDict: this.stemDict,
                    intentDict: this.intentDict,
                    sentences: this.sentences,
                    domains: {},
                  };
                  delete t.settings.container;
                  var e = Object.keys(this.domains);
                  for (var _s69 = 0; _s69 < e.length; _s69 += 1)
                    t.domains[e[_s69]] = this.domains[e[_s69]].toJSON();
                  return t;
                },
              },
              {
                key: "fromJSON",
                value: function fromJSON(t) {
                  this.applySettings(this.settings, t.settings),
                    (this.stemDict = t.stemDict),
                    (this.intentDict = t.intentDict),
                    (this.sentences = t.sentences);
                  var e = Object.keys(t.domains);
                  for (var _s70 = 0; _s70 < e.length; _s70 += 1) {
                    this.addDomain(e[_s70]).fromJSON(t.domains[e[_s70]]);
                  }
                },
              },
            ]);
            return _class29;
          })(n);
        },
        {
          "@nlpjs/core": 12,
        },
      ],
      54: [
        function (t, e, s) {
          var n = t("./nlu"),
            i = t("./nlu-neural"),
            r = t("./domain-manager"),
            o = t("./nlu-manager");
          e.exports = {
            Nlu: n,
            NluNeural: i,
            DomainManager: r,
            NluManager: o,
          };
        },
        {
          "./domain-manager": 53,
          "./nlu": 57,
          "./nlu-manager": 55,
          "./nlu-neural": 56,
        },
      ],
      55: [
        function (t, e, s) {
          var _t145 = t("@nlpjs/core"),
            n = _t145.Clonable,
            _t146 = t("@nlpjs/language-min"),
            i = _t146.Language,
            r = t("./domain-manager");
          e.exports = /*#__PURE__*/ (function (_n57) {
            _inherits(_class30, _n57);
            var _super13 = _createSuper(_class30);
            function _class30() {
              var _this20;
              var t =
                arguments.length > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : {};
              var e = arguments.length > 1 ? arguments[1] : undefined;
              _classCallCheck(this, _class30);
              (_this20 = _super13.call(
                this,
                {
                  settings: {},
                  container: t.container || e,
                },
                e
              )),
                _this20.applySettings(_this20.settings, t),
                _this20.settings.tag || (_this20.settings.tag = "nlu-manager"),
                _this20.registerDefault(),
                _this20.applySettings(
                  _this20.settings,
                  _this20.container.getConfiguration(_this20.settings.tag)
                ),
                _this20.container.get("Language") ||
                  _this20.container.register("Language", i, !1),
                (_this20.guesser = _this20.container.get("Language")),
                (_this20.locales = []),
                (_this20.languageNames = {}),
                (_this20.domainManagers = {}),
                (_this20.intentDomains = {}),
                _this20.settings.locales &&
                  _this20.addLanguage(_this20.settings.locales),
                _this20.applySettings(_assertThisInitialized(_this20), {
                  pipelineTrain: _this20.getPipeline(
                    "".concat(_this20.settings.tag, "-train")
                  ),
                  pipelineProcess: _this20.getPipeline(
                    "".concat(_this20.settings.tag, "-process")
                  ),
                });
              return _this20;
            }
            _createClass(_class30, [
              {
                key: "registerDefault",
                value: function registerDefault() {
                  this.container.registerConfiguration("nlu-manager", {}, !1),
                    this.container.registerPipeline(
                      "nlu-manager-train",
                      [".innerTrain"],
                      !1
                    );
                },
              },
              {
                key: "describeLanguage",
                value: function describeLanguage(t, e) {
                  this.languageNames[t] = {
                    locale: t,
                    name: e,
                  };
                },
              },
              {
                key: "addLanguage",
                value: function addLanguage(t) {
                  if (t) {
                    var _e58 = Array.isArray(t) ? t : [t];
                    for (var _t147 = 0; _t147 < _e58.length; _t147 += 1) {
                      var _s71 = _e58[_t147].substr(0, 2).toLowerCase();
                      this.locales.includes(_s71) || this.locales.push(_s71),
                        this.domainManagers[_s71] ||
                          (this.domainManagers[_s71] = new r(
                            _objectSpread(
                              _objectSpread(
                                {
                                  locale: _s71,
                                },
                                this.settings.domain
                              ),
                              {},
                              {
                                useNoneFeature: this.settings.useNoneFeature,
                                trainByDomain: this.settings.trainByDomain,
                              }
                            ),
                            this.container
                          ));
                    }
                  }
                },
              },
              {
                key: "removeLanguage",
                value: function removeLanguage(t) {
                  var _this21 = this;
                  if (Array.isArray(t))
                    t.forEach(function (t) {
                      return _this21.removeLanguage(t);
                    });
                  else {
                    delete this.domainManagers[t];
                    var _e59 = this.locales.indexOf(t);
                    -1 !== _e59 && this.locales.splice(_e59, 1);
                  }
                },
              },
              {
                key: "guessLanguage",
                value: function guessLanguage(t) {
                  var _this$locales;
                  var e = t,
                    s = "string" == typeof e;
                  if (1 === this.locales.length)
                    return s
                      ? this.locales[0]
                      : (((_this$locales = _slicedToArray(this.locales, 1)),
                        (e.locale = _this$locales[0])),
                        e);
                  if (!e) return s ? void 0 : e;
                  if (!s && e.locale) return e;
                  var n = s ? e : e.utterance;
                  if (1 === this.locales.length) {
                    if (s) return this.locales[0];
                    var _this$locales2 = _slicedToArray(this.locales, 1);
                    e.locale = _this$locales2[0];
                  }
                  var i = this.guesser.guess(n, this.locales, 1),
                    r = i && i.length > 0 ? i[0].alpha2 : void 0;
                  return s ? r : ((e.locale = r), e);
                },
              },
              {
                key: "assignDomain",
                value: function assignDomain(t, e, s) {
                  var n = s ? t.substr(0, 2).toLowerCase() : void 0,
                    i = s ? e : t,
                    r = s || e;
                  if (n)
                    this.intentDomains[n] || (this.intentDomains[n] = {}),
                      (this.intentDomains[n][i] = r);
                  else
                    for (var _t148 = 0; _t148 < this.locales.length; _t148 += 1)
                      this.assignDomain(this.locales[_t148], i, r);
                },
              },
              {
                key: "getIntentDomain",
                value: function getIntentDomain(t, e) {
                  var s = t.substr(0, 2).toLowerCase();
                  return (
                    (this.intentDomains[s] && this.intentDomains[s][e]) ||
                    "default"
                  );
                },
              },
              {
                key: "getDomains",
                value: function getDomains() {
                  var t = {},
                    e = Object.keys(this.intentDomains);
                  for (var _s72 = 0; _s72 < e.length; _s72 += 1) {
                    var _n58 = e[_s72];
                    t[_n58] = {};
                    var _i39 = Object.keys(this.intentDomains[_n58]);
                    for (var _e60 = 0; _e60 < _i39.length; _e60 += 1) {
                      var _s73 = _i39[_e60],
                        _r17 = this.intentDomains[_n58][_s73];
                      t[_n58][_r17] || (t[_n58][_r17] = []),
                        t[_n58][_r17].push(_s73);
                    }
                  }
                  return t;
                },
              },
              {
                key: "consolidateLocale",
                value: function consolidateLocale(t, e) {
                  var s = t
                    ? t.substr(0, 2).toLowerCase()
                    : this.guessLanguage(e);
                  if (!s) throw new Error("Locale must be defined");
                  return s;
                },
              },
              {
                key: "consolidateManager",
                value: function consolidateManager(t) {
                  var e = this.domainManagers[t];
                  if (!e)
                    throw new Error(
                      "Domain Manager not found for locale ".concat(t)
                    );
                  return e;
                },
              },
              {
                key: "add",
                value: function add(t, e, s) {
                  var n = this.consolidateLocale(t, e),
                    i = this.consolidateManager(n),
                    r = this.getIntentDomain(n, s);
                  this.guesser.addExtraSentence(n, e), i.add(r, e, s);
                },
              },
              {
                key: "remove",
                value: function remove(t, e, s) {
                  var n = this.consolidateLocale(t, e),
                    i = this.consolidateManager(n),
                    r = this.getIntentDomain(n, s);
                  i.remove(r, e, s);
                },
              },
              {
                key: "innerTrain",
                value: (function () {
                  var _innerTrain2 = _asyncToGenerator(
                    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee49(
                      t
                    ) {
                      var _this22 = this;
                      var e, s;
                      return _regeneratorRuntime().wrap(
                        function _callee49$(_context49) {
                          while (1)
                            switch ((_context49.prev = _context49.next)) {
                              case 0:
                                e = t.locales || this.locales;
                                Array.isArray(e) || (e = [e]);
                                s = e
                                  .filter(function (t) {
                                    return _this22.domainManagers[t];
                                  })
                                  .map(function (e) {
                                    return _this22.domainManagers[e].train(
                                      t.settings
                                    );
                                  });
                                return _context49.abrupt(
                                  "return",
                                  Promise.all(s)
                                );
                              case 4:
                              case "end":
                                return _context49.stop();
                            }
                        },
                        _callee49,
                        this
                      );
                    })
                  );
                  function innerTrain(_x78) {
                    return _innerTrain2.apply(this, arguments);
                  }
                  return innerTrain;
                })(),
              },
              {
                key: "train",
                value: (function () {
                  var _train4 = _asyncToGenerator(
                    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee50(
                      t
                    ) {
                      var e;
                      return _regeneratorRuntime().wrap(
                        function _callee50$(_context50) {
                          while (1)
                            switch ((_context50.prev = _context50.next)) {
                              case 0:
                                e = {
                                  nluManager: this,
                                  settings: this.applySettings(
                                    t,
                                    this.settings
                                  ),
                                };
                                return _context50.abrupt(
                                  "return",
                                  (delete e.settings.tag,
                                  this.runPipeline(e, this.pipelineTrain))
                                );
                              case 2:
                              case "end":
                                return _context50.stop();
                            }
                        },
                        _callee50,
                        this
                      );
                    })
                  );
                  function train(_x79) {
                    return _train4.apply(this, arguments);
                  }
                  return train;
                })(),
              },
              {
                key: "fillLanguage",
                value: function fillLanguage(t) {
                  var e = t;
                  return (
                    (e.languageGuessed = !1),
                    e.locale ||
                      ((e.locale = this.guessLanguage(e.utterance)),
                      (e.languageGuessed = !0)),
                    e.locale &&
                      ((e.localeIso2 = e.locale.substr(0, 2).toLowerCase()),
                      (e.language = (
                        this.languageNames[e.localeIso2] ||
                        this.guesser.languagesAlpha2[e.localeIso2] ||
                        {}
                      ).name)),
                    e
                  );
                },
              },
              {
                key: "classificationsIsNone",
                value: function classificationsIsNone(t) {
                  return (
                    1 !== t.length &&
                    (0 === t.length ||
                      0 === t[0].score ||
                      t[0].score === t[1].score)
                  );
                },
              },
              {
                key: "checkIfIsNone",
                value: function checkIfIsNone(t) {
                  var e = t;
                  return (
                    this.classificationsIsNone(e.classifications) &&
                      ((e.intent = "None"), (e.score = 1)),
                    e
                  );
                },
              },
              {
                key: "innerClassify",
                value: (function () {
                  var _innerClassify2 = _asyncToGenerator(
                    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee51(
                      t
                    ) {
                      var e, s, n;
                      return _regeneratorRuntime().wrap(
                        function _callee51$(_context51) {
                          while (1)
                            switch ((_context51.prev = _context51.next)) {
                              case 0:
                                (e = t),
                                  (s = this.domainManagers[e.localeIso2]);
                                if (s) {
                                  _context51.next = 3;
                                  break;
                                }
                                return _context51.abrupt(
                                  "return",
                                  ((e.classifications = []),
                                  (e.domain = void 0),
                                  (e.intent = void 0),
                                  (e.score = void 0),
                                  e)
                                );
                              case 3:
                                _context51.next = 5;
                                return s.process(t);
                              case 5:
                                n = _context51.sent;
                                return _context51.abrupt(
                                  "return",
                                  ((e.classifications = n.classifications.sort(
                                    function (t, e) {
                                      return e.score - t.score;
                                    }
                                  )),
                                  0 === e.classifications.length &&
                                    e.classifications.push({
                                      intent: "None",
                                      score: 1,
                                    }),
                                  (e.intent = e.classifications[0].intent),
                                  (e.score = e.classifications[0].score),
                                  "None" === e.intent
                                    ? (n.domain = "default")
                                    : "default" === n.domain
                                    ? (e.domain = this.getIntentDomain(
                                        e.locale,
                                        e.intent
                                      ))
                                    : (e.domain = n.domain),
                                  e)
                                );
                              case 7:
                              case "end":
                                return _context51.stop();
                            }
                        },
                        _callee51,
                        this
                      );
                    })
                  );
                  function innerClassify(_x80) {
                    return _innerClassify2.apply(this, arguments);
                  }
                  return innerClassify;
                })(),
              },
              {
                key: "defaultPipelineProcess",
                value: (function () {
                  var _defaultPipelineProcess3 = _asyncToGenerator(
                    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee52(
                      t
                    ) {
                      var e;
                      return _regeneratorRuntime().wrap(
                        function _callee52$(_context52) {
                          while (1)
                            switch ((_context52.prev = _context52.next)) {
                              case 0:
                                _context52.next = 2;
                                return this.fillLanguage(t);
                              case 2:
                                e = _context52.sent;
                                _context52.next = 5;
                                return this.innerClassify(e);
                              case 5:
                                e = _context52.sent;
                                _context52.next = 8;
                                return this.checkIfIsNone(e);
                              case 8:
                                e = _context52.sent;
                                delete e.settings;
                                delete e.classification;
                                return _context52.abrupt("return", e);
                              case 12:
                              case "end":
                                return _context52.stop();
                            }
                        },
                        _callee52,
                        this
                      );
                    })
                  );
                  function defaultPipelineProcess(_x81) {
                    return _defaultPipelineProcess3.apply(this, arguments);
                  }
                  return defaultPipelineProcess;
                })(),
              },
              {
                key: "process",
                value: function process(t, e, s, n) {
                  var i =
                    "object" == _typeof(t)
                      ? t
                      : {
                          locale: void 0 === e ? void 0 : t,
                          utterance: void 0 === e ? t : e,
                          domain: s,
                          settings: n || this.settings,
                        };
                  return this.pipelineProcess
                    ? this.runPipeline(i, this.pipelineProcess)
                    : this.defaultPipelineProcess(i);
                },
              },
              {
                key: "toJSON",
                value: function toJSON() {
                  var t = {
                    settings: this.settings,
                    locales: this.locales,
                    languageNames: this.languageNames,
                    domainManagers: {},
                    intentDomains: this.intentDomains,
                    extraSentences: this.guesser.extraSentences.slice(0),
                  };
                  delete t.settings.container;
                  var e = Object.keys(this.domainManagers);
                  for (var _s74 = 0; _s74 < e.length; _s74 += 1) {
                    var _n59 = e[_s74];
                    t.domainManagers[_n59] = this.domainManagers[_n59].toJSON();
                  }
                  return t;
                },
              },
              {
                key: "fromJSON",
                value: function fromJSON(t) {
                  this.applySettings(this.settings, t.settings);
                  for (var _e61 = 0; _e61 < t.locales.length; _e61 += 1)
                    this.addLanguage(t.locales[_e61]);
                  (this.languageNames = t.languageNames),
                    (this.intentDomains = t.intentDomains);
                  var e = Object.keys(t.domainManagers);
                  for (var _s75 = 0; _s75 < e.length; _s75 += 1) {
                    var _n60 = e[_s75];
                    this.domainManagers[_n60].fromJSON(t.domainManagers[_n60]);
                  }
                  for (
                    var _e62 = 0;
                    _e62 < t.extraSentences.length;
                    _e62 += 1
                  ) {
                    var _s76 = t.extraSentences[_e62];
                    this.guesser.addExtraSentence(_s76[0], _s76[1]);
                  }
                },
              },
            ]);
            return _class30;
          })(n);
        },
        {
          "./domain-manager": 53,
          "@nlpjs/core": 12,
          "@nlpjs/language-min": 32,
        },
      ],
      56: [
        function (t, e, s) {
          var _t149 = t("@nlpjs/neural"),
            n = _t149.NeuralNetwork,
            i = t("./nlu");
          var r = /*#__PURE__*/ (function (_i40) {
            _inherits(r, _i40);
            var _super14 = _createSuper(r);
            function r() {
              _classCallCheck(this, r);
              return _super14.apply(this, arguments);
            }
            _createClass(r, [
              {
                key: "innerTrain",
                value: (function () {
                  var _innerTrain3 = _asyncToGenerator(
                    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee53(
                      t
                    ) {
                      var e;
                      return _regeneratorRuntime().wrap(
                        function _callee53$(_context53) {
                          while (1)
                            switch ((_context53.prev = _context53.next)) {
                              case 0:
                                e = t;
                                this.neuralNetwork = new n(
                                  e.settings,
                                  this.container
                                );
                                _context53.next = 4;
                                return this.neuralNetwork.train(e.corpus);
                              case 4:
                                e.status = _context53.sent;
                                return _context53.abrupt("return", e);
                              case 6:
                              case "end":
                                return _context53.stop();
                            }
                        },
                        _callee53,
                        this
                      );
                    })
                  );
                  function innerTrain(_x82) {
                    return _innerTrain3.apply(this, arguments);
                  }
                  return innerTrain;
                })(),
              },
              {
                key: "innerProcess",
                value: function innerProcess(t) {
                  var e = t;
                  (e.classifications = (this.neuralNetwork &&
                    this.neuralNetwork.run(e.tokens)) || {
                    None: 1,
                  }),
                    this.convertToArray(e);
                  var s = e.classifications[0].intent;
                  return (
                    e.settings &&
                      e.settings.returnExplanation &&
                      s &&
                      this.neuralNetwork &&
                      "None" !== s &&
                      (e.explanation = this.neuralNetwork.explain(e.tokens, s)),
                    e
                  );
                },
              },
              {
                key: "registerDefault",
                value: function registerDefault() {
                  _get(
                    _getPrototypeOf(r.prototype),
                    "registerDefault",
                    this
                  ).call(this),
                    this.container.register("NeuralNlu", r, !1);
                },
              },
              {
                key: "toJSON",
                value: function toJSON() {
                  var t = _get(
                    _getPrototypeOf(r.prototype),
                    "toJSON",
                    this
                  ).call(this);
                  return (
                    (t.neuralNetwork = this.neuralNetwork
                      ? this.neuralNetwork.toJSON()
                      : void 0),
                    t
                  );
                },
              },
              {
                key: "fromJSON",
                value: function fromJSON(t) {
                  _get(_getPrototypeOf(r.prototype), "fromJSON", this).call(
                    this,
                    t
                  ),
                    t.neuralNetwork &&
                      ((this.neuralNetwork = new n()),
                      this.neuralNetwork.fromJSON(t.neuralNetwork));
                },
              },
            ]);
            return r;
          })(i);
          e.exports = r;
        },
        {
          "./nlu": 57,
          "@nlpjs/neural": 44,
        },
      ],
      57: [
        function (t, e, s) {
          var _t150 = t("@nlpjs/core"),
            n = _t150.Clonable,
            i = _t150.compareWildcars,
            _t151 = t("@nlpjs/similarity"),
            r = _t151.SpellCheck;
          e.exports = /*#__PURE__*/ (function (_n61) {
            _inherits(_class31, _n61);
            var _super15 = _createSuper(_class31);
            function _class31() {
              var _this23;
              var t =
                arguments.length > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : {};
              var e = arguments.length > 1 ? arguments[1] : undefined;
              _classCallCheck(this, _class31);
              (_this23 = _super15.call(
                this,
                {
                  settings: {},
                  container: t.container || e,
                },
                e
              )),
                _this23.applySettings(_this23.settings, t),
                _this23.applySettings(_this23.settings, {
                  locale: "en",
                }),
                _this23.settings.tag ||
                  (_this23.settings.tag = "nlu-".concat(
                    _this23.settings.locale
                  )),
                _this23.registerDefault(),
                _this23.applySettings(
                  _this23.settings,
                  _this23.container.getConfiguration(_this23.settings.tag)
                ),
                _this23.applySettings(_assertThisInitialized(_this23), {
                  pipelinePrepare: _this23.getPipeline(
                    "".concat(_this23.settings.tag, "-prepare")
                  ),
                  pipelineTrain: _this23.getPipeline(
                    "".concat(_this23.settings.tag, "-train")
                  ),
                  pipelineProcess: _this23.getPipeline(
                    "".concat(_this23.settings.tag, "-process")
                  ),
                }),
                (_this23.spellCheck = new r(_this23.settings));
              return _this23;
            }
            _createClass(_class31, [
              {
                key: "registerDefault",
                value: function registerDefault() {
                  this.container.registerConfiguration(
                    "nlu-??",
                    {
                      keepStopwords: !0,
                      nonefeatureValue: 1,
                      nonedeltaMultiplier: 1.2,
                      spellCheck: !1,
                      spellCheckDistance: 1,
                      filterZeros: !0,
                      log: !0,
                    },
                    !1
                  ),
                    this.container.registerPipeline(
                      "nlu-??-train",
                      [".prepareCorpus", ".addNoneFeature", ".innerTrain"],
                      !1
                    );
                },
              },
              {
                key: "defaultPipelinePrepare",
                value: (function () {
                  var _defaultPipelinePrepare = _asyncToGenerator(
                    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee54(
                      t
                    ) {
                      var e, _t152, s;
                      return _regeneratorRuntime().wrap(
                        function _callee54$(_context54) {
                          while (1)
                            switch ((_context54.prev = _context54.next)) {
                              case 0:
                                if (this.cache) {
                                  _t152 = new Date();
                                  Math.abs(
                                    _t152.getTime() - this.cache.created
                                  ) /
                                    36e5 >
                                    1 &&
                                    ((this.cache.results = {}),
                                    (this.cache.created =
                                      new Date().getTime()));
                                }
                                if (!this.cache) {
                                  _context54.next = 6;
                                  break;
                                }
                                if (
                                  !(
                                    this.cache.results[t.settings.locale] &&
                                    ((e =
                                      this.cache.results[t.settings.locale][
                                        t.text || t.utterance
                                      ]),
                                    e)
                                  )
                                ) {
                                  _context54.next = 4;
                                  break;
                                }
                                return _context54.abrupt("return", e);
                              case 4:
                                _context54.next = 7;
                                break;
                              case 6:
                                this.cache = {
                                  created: new Date().getTime(),
                                  results: {},
                                  normalize: this.container.get("normalize"),
                                  tokenize: this.container.get("tokenize"),
                                  removeStopwords:
                                    this.container.get("removeStopwords"),
                                  stem: this.container.get("stem"),
                                  arrToObj: this.container.get("arrToObj"),
                                };
                              case 7:
                                s = t;
                                s = this.cache.normalize.run(s);
                                _context54.next = 11;
                                return this.cache.tokenize.run(s);
                              case 11:
                                s = _context54.sent;
                                s = this.cache.removeStopwords.run(s);
                                _context54.next = 15;
                                return this.cache.stem.run(s);
                              case 15:
                                s = _context54.sent;
                                s = this.cache.arrToObj.run(s);
                                e = s.tokens;
                                this.cache.results[t.settings.locale] ||
                                  (this.cache.results[t.settings.locale] = {});
                                this.cache.results[t.settings.locale][
                                  t.text || t.utterance
                                ] = e;
                                return _context54.abrupt("return", e);
                              case 21:
                              case "end":
                                return _context54.stop();
                            }
                        },
                        _callee54,
                        this
                      );
                    })
                  );
                  function defaultPipelinePrepare(_x83) {
                    return _defaultPipelinePrepare.apply(this, arguments);
                  }
                  return defaultPipelinePrepare;
                })(),
              },
              {
                key: "defaultPipelineProcess",
                value: (function () {
                  var _defaultPipelineProcess4 = _asyncToGenerator(
                    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee55(
                      t
                    ) {
                      var e;
                      return _regeneratorRuntime().wrap(
                        function _callee55$(_context55) {
                          while (1)
                            switch ((_context55.prev = _context55.next)) {
                              case 0:
                                _context55.next = 2;
                                return this.prepare(t);
                              case 2:
                                e = _context55.sent;
                                _context55.next = 5;
                                return this.doSpellCheck(e);
                              case 5:
                                e = _context55.sent;
                                _context55.next = 8;
                                return this.textToFeatures(e);
                              case 8:
                                e = _context55.sent;
                                _context55.next = 11;
                                return this.innerProcess(e);
                              case 11:
                                e = _context55.sent;
                                _context55.next = 14;
                                return this.filterNonActivated(e);
                              case 14:
                                e = _context55.sent;
                                _context55.next = 17;
                                return this.normalizeClassifications(e);
                              case 17:
                                e = _context55.sent;
                                return _context55.abrupt("return", e);
                              case 19:
                              case "end":
                                return _context55.stop();
                            }
                        },
                        _callee55,
                        this
                      );
                    })
                  );
                  function defaultPipelineProcess(_x84) {
                    return _defaultPipelineProcess4.apply(this, arguments);
                  }
                  return defaultPipelineProcess;
                })(),
              },
              {
                key: "prepare",
                value: (function () {
                  var _prepare2 = _asyncToGenerator(
                    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee56(
                      t,
                      e
                    ) {
                      var s, _e63, _e64, _n62, _e65, _n63;
                      return _regeneratorRuntime().wrap(
                        function _callee56$(_context56) {
                          while (1)
                            switch ((_context56.prev = _context56.next)) {
                              case 0:
                                s = e || this.settings;
                                if (!("string" == typeof t)) {
                                  _context56.next = 4;
                                  break;
                                }
                                _e63 = {
                                  locale: this.settings.locale,
                                  text: t,
                                  settings: s,
                                };
                                return _context56.abrupt(
                                  "return",
                                  this.pipelinePrepare
                                    ? this.runPipeline(
                                        _e63,
                                        this.pipelinePrepare
                                      )
                                    : this.defaultPipelinePrepare(_e63)
                                );
                              case 4:
                                if (!("object" == _typeof(t))) {
                                  _context56.next = 24;
                                  break;
                                }
                                if (!Array.isArray(t)) {
                                  _context56.next = 18;
                                  break;
                                }
                                _e64 = [];
                                _n62 = 0;
                              case 8:
                                if (!(_n62 < t.length)) {
                                  _context56.next = 17;
                                  break;
                                }
                                _context56.t0 = _e64;
                                _context56.next = 12;
                                return this.prepare(t[_n62], s);
                              case 12:
                                _context56.t1 = _context56.sent;
                                _context56.t0.push.call(
                                  _context56.t0,
                                  _context56.t1
                                );
                              case 14:
                                _n62 += 1;
                                _context56.next = 8;
                                break;
                              case 17:
                                return _context56.abrupt("return", _e64);
                              case 18:
                                _e65 = s.fieldNameSrc
                                  ? t[s.fieldNameSrc]
                                  : t.texts || t.utterances;
                                if (
                                  !(_e65 ||
                                    "string" == typeof _e65 ||
                                    ("string" == typeof t.text
                                      ? (_e65 = t.text)
                                      : "string" == typeof t.utterance &&
                                        (_e65 = t.utterance)),
                                  _e65 || "string" == typeof _e65)
                                ) {
                                  _context56.next = 24;
                                  break;
                                }
                                _context56.next = 22;
                                return this.prepare(_e65, s);
                              case 22:
                                _n63 = _context56.sent;
                                return _context56.abrupt(
                                  "return",
                                  _objectSpread(
                                    _defineProperty(
                                      {},
                                      s.fieldNameTgt || "tokens",
                                      _n63
                                    ),
                                    t
                                  )
                                );
                              case 24:
                                throw new Error(
                                  "Error at nlu.prepare: expected a text but received ".concat(
                                    t
                                  )
                                );
                              case 25:
                              case "end":
                                return _context56.stop();
                            }
                        },
                        _callee56,
                        this
                      );
                    })
                  );
                  function prepare(_x85, _x86) {
                    return _prepare2.apply(this, arguments);
                  }
                  return prepare;
                })(),
              },
              {
                key: "doSpellCheck",
                value: (function () {
                  var _doSpellCheck = _asyncToGenerator(
                    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee57(
                      t,
                      e
                    ) {
                      var s, n, i, _e66;
                      return _regeneratorRuntime().wrap(
                        function _callee57$(_context57) {
                          while (1)
                            switch ((_context57.prev = _context57.next)) {
                              case 0:
                                s = this.applySettings(e || {}, this.settings);
                                (n =
                                  void 0 === t.settings.spellCheck
                                    ? void 0
                                    : t.settings.spellCheck),
                                  (i =
                                    void 0 === t.settings.spellCheckDistance
                                      ? void 0
                                      : t.settings.spellCheckDistance);
                                if (
                                  (void 0 === n &&
                                    (n =
                                      void 0 === s.spellCheck
                                        ? void 0
                                        : s.spellCheck),
                                  void 0 === i &&
                                    (i =
                                      void 0 === s.spellCheckDistance
                                        ? 1
                                        : s.spellCheckDistance),
                                  n)
                                ) {
                                  _e66 = this.spellCheck.check(t.tokens, i);
                                  t.tokens = _e66;
                                }
                                return _context57.abrupt("return", t);
                              case 4:
                              case "end":
                                return _context57.stop();
                            }
                        },
                        _callee57,
                        this
                      );
                    })
                  );
                  function doSpellCheck(_x87, _x88) {
                    return _doSpellCheck.apply(this, arguments);
                  }
                  return doSpellCheck;
                })(),
              },
              {
                key: "prepareCorpus",
                value: (function () {
                  var _prepareCorpus = _asyncToGenerator(
                    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee58(
                      t
                    ) {
                      var e,
                        s,
                        n,
                        _t153,
                        _i41,
                        _r18,
                        o,
                        _t154,
                        i,
                        _t155,
                        _e67,
                        _s77,
                        _t156,
                        _n64;
                      return _regeneratorRuntime().wrap(
                        function _callee58$(_context58) {
                          while (1)
                            switch ((_context58.prev = _context58.next)) {
                              case 0:
                                (this.features = {}),
                                  (this.intents = {}),
                                  (this.intentFeatures = {});
                                (e = t), (s = e.corpus), (n = []);
                                _t153 = 0;
                              case 3:
                                if (!(_t153 < s.length)) {
                                  _context58.next = 17;
                                  break;
                                }
                                _i41 = s[_t153].intent;
                                _context58.next = 7;
                                return this.prepare(
                                  s[_t153].utterance,
                                  e.settings
                                );
                              case 7:
                                _context58.t0 = _context58.sent;
                                _context58.t1 = _defineProperty({}, _i41, 1);
                                _r18 = {
                                  input: _context58.t0,
                                  output: _context58.t1,
                                };
                                o = Object.keys(_r18.input);
                                Object.prototype.hasOwnProperty.call(
                                  this.intentFeatures,
                                  _i41
                                ) || (this.intentFeatures[_i41] = {});
                                for (_t154 = 0; _t154 < o.length; _t154 += 1)
                                  (this.features[o[_t154]] = 1),
                                    (this.intentFeatures[_i41][o[_t154]] = 1);
                                (this.intents[_i41] = 1), n.push(_r18);
                              case 14:
                                _t153 += 1;
                                _context58.next = 3;
                                break;
                              case 17:
                                i = Object.keys(this.intentFeatures);
                                this.featuresToIntent = {};
                                for (_t155 = 0; _t155 < i.length; _t155 += 1) {
                                  (_e67 = i[_t155]),
                                    (_s77 = Object.keys(
                                      this.intentFeatures[_e67]
                                    ));
                                  for (
                                    _t156 = 0;
                                    _t156 < _s77.length;
                                    _t156 += 1
                                  ) {
                                    _n64 = _s77[_t156];
                                    Object.prototype.hasOwnProperty.call(
                                      this.featuresToIntent,
                                      _n64
                                    ) || (this.featuresToIntent[_n64] = []),
                                      this.featuresToIntent[_n64].push(_e67);
                                  }
                                }
                                return _context58.abrupt(
                                  "return",
                                  (this.spellCheck.setFeatures(this.features),
                                  (this.numFeatures = Object.keys(
                                    this.features
                                  ).length),
                                  (this.numIntents = Object.keys(
                                    this.intents
                                  ).length),
                                  (e.corpus = n),
                                  e)
                                );
                              case 21:
                              case "end":
                                return _context58.stop();
                            }
                        },
                        _callee58,
                        this
                      );
                    })
                  );
                  function prepareCorpus(_x89) {
                    return _prepareCorpus.apply(this, arguments);
                  }
                  return prepareCorpus;
                })(),
              },
              {
                key: "addNoneFeature",
                value: function addNoneFeature(t) {
                  var e = t.corpus;
                  return (
                    t.settings &&
                      t.settings.useNoneFeature &&
                      e.push({
                        input: {
                          nonefeature: 1,
                        },
                        output: {
                          None: 1,
                        },
                      }),
                    t
                  );
                },
              },
              {
                key: "convertToArray",
                value: function convertToArray(t) {
                  var e = t,
                    s = e.classifications;
                  if (s) {
                    this.intentsArr ||
                      (this.intents
                        ? ((this.intentsArr = Object.keys(this.intents)),
                          this.intents.None || this.intentsArr.push("None"))
                        : (this.intentsArr = Object.keys(s)));
                    var _t157 = this.intentsArr,
                      _n65 = [];
                    for (var _i42 = 0; _i42 < _t157.length; _i42 += 1) {
                      var _r19 = _t157[_i42],
                        o = s[_r19];
                      void 0 !== o &&
                        (o > 0 || !e.settings.filterZeros) &&
                        _n65.push({
                          intent: _r19,
                          score: o,
                        });
                    }
                    _n65.length ||
                      _n65.push({
                        intent: "None",
                        score: 1,
                      }),
                      (e.classifications = _n65.sort(function (t, e) {
                        return e.score - t.score;
                      }));
                  }
                  return e;
                },
              },
              {
                key: "someSimilar",
                value: function someSimilar(t, e) {
                  for (var _s78 = 0; _s78 < e.length; _s78 += 1)
                    if (t[e[_s78]]) return !0;
                  return !1;
                },
              },
              {
                key: "matchAllowList",
                value: function matchAllowList(t, e) {
                  for (var _s79 = 0; _s79 < e.length; _s79 += 1)
                    if (i(t, e[_s79])) return !0;
                  return !1;
                },
              },
              {
                key: "intentIsActivated",
                value: function intentIsActivated(t, e, s) {
                  if (s) {
                    if (Array.isArray(s)) return this.matchAllowList(t, s);
                    if (!s[t]) return !1;
                  }
                  var n = this.intentFeatures[t];
                  if (!n) return !1;
                  var i = Object.keys(e);
                  for (var _t158 = 0; _t158 < i.length; _t158 += 1)
                    if (n[i[_t158]]) return !0;
                  return !1;
                },
              },
              {
                key: "filterNonActivated",
                value: function filterNonActivated(t) {
                  if (this.intentFeatures && t.classifications) {
                    var e = t.classifications.map(function (t) {
                      return t.intent;
                    });
                    var _s80 = !1;
                    for (var _n66 = 0; _n66 < e.length; _n66 += 1) {
                      var _i43 = e[_n66];
                      "None" !== _i43 &&
                        (this.intentIsActivated(
                          _i43,
                          t.tokens,
                          t.settings.allowList
                        ) ||
                          ((t.classifications[_n66].score = 0), (_s80 = !0)));
                    }
                    _s80 &&
                      t.classifications.sort(function (t, e) {
                        return e.score - t.score;
                      });
                  }
                  return t;
                },
              },
              {
                key: "normalizeClassifications",
                value: function normalizeClassifications(t) {
                  var e = t,
                    s = e.classifications;
                  if (s) {
                    var _t159 = 0;
                    for (var _e68 = 0; _e68 < s.length; _e68 += 1) {
                      var _s$_e;
                      ((_s$_e = s[_e68]),
                      (_s$_e["score"] = Math.pow(_s$_e["score"], 2))),
                        (_t159 += s[_e68].score);
                    }
                    if (_t159 > 0)
                      for (var _e69 = 0; _e69 < s.length; _e69 += 1)
                        s[_e69].score /= _t159;
                  } else e.classifications = e.nluAnswer;
                  return e;
                },
              },
              {
                key: "textToFeatures",
                value: function textToFeatures(t) {
                  var e = t,
                    s = e.tokens,
                    n = Object.keys(s);
                  var i = 0;
                  var r = {};
                  for (var _t160 = 0; _t160 < n.length; _t160 += 1) {
                    var _e70 = n[_t160];
                    "nonefeature" === _e70
                      ? (s[_e70] = this.nonefeatureValue)
                      : this.features && this.features[_e70]
                      ? (r[_e70] = s[_e70])
                      : (i += 1);
                  }
                  var o =
                      void 0 === e.settings.nonedeltaValue
                        ? this.numIntents / this.numFeatures
                        : this.settings.nonedeltaValue,
                    a = 0;
                  for (var _t161 = 0; _t161 < i; _t161 += 1)
                    (a += o), (o *= this.settings.nonedeltaMultiplier);
                  return (
                    e.settings &&
                      e.settings.useNoneFeature &&
                      a &&
                      (r.nonefeature = a),
                    (e.tokens = r),
                    e
                  );
                },
              },
              {
                key: "innerTrain",
                value: (function () {
                  var _innerTrain4 = _asyncToGenerator(
                    /*#__PURE__*/ _regeneratorRuntime().mark(
                      function _callee59() {
                        return _regeneratorRuntime().wrap(function _callee59$(
                          _context59
                        ) {
                          while (1)
                            switch ((_context59.prev = _context59.next)) {
                              case 0:
                                throw new Error(
                                  "This method should be implemented by child classes"
                                );
                              case 1:
                              case "end":
                                return _context59.stop();
                            }
                        },
                        _callee59);
                      }
                    )
                  );
                  function innerTrain() {
                    return _innerTrain4.apply(this, arguments);
                  }
                  return innerTrain;
                })(),
              },
              {
                key: "train",
                value: (function () {
                  var _train5 = _asyncToGenerator(
                    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee60(
                      t,
                      e
                    ) {
                      var s;
                      return _regeneratorRuntime().wrap(
                        function _callee60$(_context60) {
                          while (1)
                            switch ((_context60.prev = _context60.next)) {
                              case 0:
                                s = {
                                  corpus: t,
                                  settings: this.applySettings(
                                    e,
                                    this.settings
                                  ),
                                };
                                return _context60.abrupt(
                                  "return",
                                  this.runPipeline(s, this.pipelineTrain)
                                );
                              case 2:
                              case "end":
                                return _context60.stop();
                            }
                        },
                        _callee60,
                        this
                      );
                    })
                  );
                  function train(_x90, _x91) {
                    return _train5.apply(this, arguments);
                  }
                  return train;
                })(),
              },
              {
                key: "getExplanation",
                value: (function () {
                  var _getExplanation = _asyncToGenerator(
                    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee61(
                      t,
                      e
                    ) {
                      var s, n, i, r, o, _t162, _s81;
                      return _regeneratorRuntime().wrap(
                        function _callee61$(_context61) {
                          while (1)
                            switch ((_context61.prev = _context61.next)) {
                              case 0:
                                if (e) {
                                  _context61.next = 2;
                                  break;
                                }
                                return _context61.abrupt("return");
                              case 2:
                                _context61.next = 4;
                                return this.container.get("normalize").run(t);
                              case 4:
                                s = _context61.sent;
                                _context61.next = 7;
                                return this.container.get("tokenize").run(s);
                              case 7:
                                n = _context61.sent;
                                i = n.tokens;
                                _context61.next = 11;
                                return this.container.get("stem").run(n);
                              case 11:
                                r = _context61.sent.tokens;
                                o = [];
                                o.push({
                                  token: "",
                                  stem: "##bias",
                                  weight: e.bias,
                                });
                                for (_t162 = 0; _t162 < i.length; _t162 += 1) {
                                  _s81 = r[_t162];
                                  o.push({
                                    token: i[_t162],
                                    stem: _s81,
                                    weight: e.weights[_s81],
                                  });
                                }
                                return _context61.abrupt("return", o);
                              case 16:
                              case "end":
                                return _context61.stop();
                            }
                        },
                        _callee61,
                        this
                      );
                    })
                  );
                  function getExplanation(_x92, _x93) {
                    return _getExplanation.apply(this, arguments);
                  }
                  return getExplanation;
                })(),
              },
              {
                key: "process",
                value: (function () {
                  var _process4 = _asyncToGenerator(
                    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee62(
                      t,
                      e
                    ) {
                      var s, n, _t163;
                      return _regeneratorRuntime().wrap(
                        function _callee62$(_context62) {
                          while (1)
                            switch ((_context62.prev = _context62.next)) {
                              case 0:
                                s = {
                                  text: t,
                                  settings: this.applySettings(
                                    e || {},
                                    this.settings
                                  ),
                                };
                                if (!this.pipelineProcess) {
                                  _context62.next = 7;
                                  break;
                                }
                                _context62.next = 4;
                                return this.runPipeline(
                                  s,
                                  this.pipelineProcess
                                );
                              case 4:
                                _context62.t0 = _context62.sent;
                                _context62.next = 10;
                                break;
                              case 7:
                                _context62.next = 9;
                                return this.defaultPipelineProcess(s);
                              case 9:
                                _context62.t0 = _context62.sent;
                              case 10:
                                n = _context62.t0;
                                if (!Array.isArray(n.classifications)) {
                                  _context62.next = 21;
                                  break;
                                }
                                if (!s.settings.returnExplanation) {
                                  _context62.next = 18;
                                  break;
                                }
                                _context62.next = 15;
                                return this.getExplanation(s, n.explanation);
                              case 15:
                                _context62.t1 = _context62.sent;
                                _context62.next = 19;
                                break;
                              case 18:
                                _context62.t1 = void 0;
                              case 19:
                                _t163 = _context62.t1;
                                return _context62.abrupt("return", {
                                  classifications: n.classifications,
                                  entities: void 0,
                                  explanation: _t163,
                                });
                              case 21:
                                return _context62.abrupt(
                                  "return",
                                  (n.intents &&
                                    ((n.classifications = n.intents),
                                    delete n.intents),
                                  n)
                                );
                              case 22:
                              case "end":
                                return _context62.stop();
                            }
                        },
                        _callee62,
                        this
                      );
                    })
                  );
                  function process(_x94, _x95) {
                    return _process4.apply(this, arguments);
                  }
                  return process;
                })(),
              },
              {
                key: "toJSON",
                value: function toJSON() {
                  var t = {
                    settings: _objectSpread({}, this.settings),
                    features: this.features,
                    intents: this.intents,
                    intentFeatures: this.intentFeatures,
                    featuresToIntent: this.featuresToIntent,
                  };
                  return delete t.settings.container, t;
                },
              },
              {
                key: "fromJSON",
                value: function fromJSON(t) {
                  this.applySettings(this.settings, t.settings),
                    (this.features = t.features || {}),
                    (this.intents = t.intents || {}),
                    (this.featuresToIntent = t.featuresToIntent || {}),
                    (this.intentFeatures = t.intentFeatures || {}),
                    this.spellCheck.setFeatures(this.features),
                    (this.numFeatures = Object.keys(this.features).length),
                    (this.numIntents = Object.keys(this.intents).length);
                },
              },
            ]);
            return _class31;
          })(n);
        },
        {
          "@nlpjs/core": 12,
          "@nlpjs/similarity": 64,
        },
      ],
      58: [
        function (t, e, s) {
          var n = t("./request");
          e.exports = {
            readFile: function readFile(t) {
              return new Promise(function (e) {
                var s;
                (s = t).startsWith("https:") || s.startsWith("http:")
                  ? n(t)
                      .then(function (t) {
                        return e(t);
                      })
                      ["catch"](function () {
                        return e(void 0);
                      })
                  : e(void 0);
              });
            },
            writeFile: function writeFile() {
              return new Promise(function (t, e) {
                e(new Error("File cannot be written in web"));
              });
            },
            existsSync: function existsSync() {
              return !1;
            },
            lstatSync: function lstatSync() {},
            readFileSync: function readFileSync() {},
            name: "fs",
          };
        },
        {
          "./request": 60,
        },
      ],
      59: [
        function (t, e, s) {
          var n = t("./request"),
            i = t("./fs");
          e.exports = {
            request: n,
            fs: i,
          };
        },
        {
          "./fs": 58,
          "./request": 60,
        },
      ],
      60: [
        function (t, e, s) {
          var n = t("axios");
          e.exports = /*#__PURE__*/ (function () {
            var _ref2 = _asyncToGenerator(
              /*#__PURE__*/ _regeneratorRuntime().mark(function _callee63(t) {
                var e;
                return _regeneratorRuntime().wrap(function _callee63$(
                  _context63
                ) {
                  while (1)
                    switch ((_context63.prev = _context63.next)) {
                      case 0:
                        "string" == typeof t &&
                          (t = {
                            url: t,
                          }),
                          t.method || (t.method = "get");
                        _context63.next = 3;
                        return n(t);
                      case 3:
                        e = _context63.sent;
                        if (!e) {
                          _context63.next = 6;
                          break;
                        }
                        return _context63.abrupt("return", e.data);
                      case 6:
                      case "end":
                        return _context63.stop();
                    }
                },
                _callee63);
              })
            );
            return function (_x96) {
              return _ref2.apply(this, arguments);
            };
          })();
        },
        {
          axios: 70,
        },
      ],
      61: [
        function (t, e, s) {
          var n = t("./sentiment-analyzer");
          e.exports = {
            SentimentAnalyzer: n,
          };
        },
        {
          "./sentiment-analyzer": 62,
        },
      ],
      62: [
        function (t, e, s) {
          var _t164 = t("@nlpjs/core"),
            n = _t164.Clonable;
          e.exports = /*#__PURE__*/ (function (_n67) {
            _inherits(_class32, _n67);
            var _super16 = _createSuper(_class32);
            function _class32() {
              var _this24;
              var t =
                arguments.length > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : {};
              var e = arguments.length > 1 ? arguments[1] : undefined;
              _classCallCheck(this, _class32);
              (_this24 = _super16.call(
                this,
                {
                  settings: {},
                  container: t.container || e,
                },
                e
              )),
                _this24.applySettings(_this24.settings, t),
                _this24.settings.tag ||
                  (_this24.settings.tag = "sentiment-analyzer"),
                _this24.registerDefault(),
                _this24.applySettings(
                  _this24.settings,
                  _this24.container.getConfiguration(_this24.settings.tag)
                ),
                _this24.applySettings(_assertThisInitialized(_this24), {
                  pipelinePrepare: _this24.getPipeline(
                    "".concat(_this24.settings.tag, "-prepare")
                  ),
                  pipelineProcess: _this24.getPipeline(
                    "".concat(_this24.settings.tag, "-process")
                  ),
                });
              return _this24;
            }
            _createClass(_class32, [
              {
                key: "registerDefault",
                value: function registerDefault() {
                  this.container.registerConfiguration(
                    "sentiment-analyzer",
                    {},
                    !1
                  );
                },
              },
              {
                key: "prepare",
                value: function prepare(t, e, s, n) {
                  var i = this.getPipeline(
                    "".concat(this.settings.tag, "-prepare")
                  );
                  if (i) {
                    var _n68 = {
                      text: e,
                      locale: t,
                      settings: s || this.settings,
                    };
                    return this.runPipeline(_n68, i);
                  }
                  if (n) {
                    var _s82 =
                      this.container.get("stemmer-".concat(t)) ||
                      this.container.get("stemmer-en");
                    if (_s82) return _s82.tokenizeAndStem(e);
                  }
                  var r =
                    this.container.get("tokenizer-".concat(t)) ||
                    this.container.get("tokenizer-en");
                  if (r) return r.tokenize(e, !0);
                  return e
                    .normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, "")
                    .toLowerCase()
                    .split(/[\s,.!?;:([\]'"¡¿)/]+/)
                    .filter(function (t) {
                      return t;
                    });
                },
              },
              {
                key: "getDictionary",
                value: (function () {
                  var _getDictionary = _asyncToGenerator(
                    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee64(
                      t
                    ) {
                      var e, s, n;
                      return _regeneratorRuntime().wrap(
                        function _callee64$(_context64) {
                          while (1)
                            switch ((_context64.prev = _context64.next)) {
                              case 0:
                                (e = t),
                                  (s = this.container.get(
                                    "sentiment-".concat(e.locale)
                                  ));
                                return _context64.abrupt(
                                  "return",
                                  (s &&
                                    (s.senticon
                                      ? (n = "senticon")
                                      : s.pattern
                                      ? (n = "pattern")
                                      : s.afinn && (n = "afinn")),
                                  n
                                    ? ((e.sentimentDictionary = {
                                        type: n,
                                        dictionary: s[n],
                                        negations: s.negations.words,
                                        stemmed:
                                          void 0 !== s.stemmed && s.stemmed,
                                      }),
                                      e)
                                    : ((e.sentimentDictionary = {
                                        type: n,
                                        dictionary: void 0,
                                        negations: [],
                                        stemmed: !1,
                                      }),
                                      e))
                                );
                              case 2:
                              case "end":
                                return _context64.stop();
                            }
                        },
                        _callee64,
                        this
                      );
                    })
                  );
                  function getDictionary(_x97) {
                    return _getDictionary.apply(this, arguments);
                  }
                  return getDictionary;
                })(),
              },
              {
                key: "getTokens",
                value: (function () {
                  var _getTokens = _asyncToGenerator(
                    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee65(
                      t
                    ) {
                      var e;
                      return _regeneratorRuntime().wrap(
                        function _callee65$(_context65) {
                          while (1)
                            switch ((_context65.prev = _context65.next)) {
                              case 0:
                                e = t;
                                _context65.t0 =
                                  !e.tokens && e.sentimentDictionary.type;
                                if (!_context65.t0) {
                                  _context65.next = 6;
                                  break;
                                }
                                _context65.next = 5;
                                return this.prepare(
                                  e.locale,
                                  e.utterance || e.text,
                                  e.settings,
                                  e.sentimentDictionary.stemmed
                                );
                              case 5:
                                e.tokens = _context65.sent;
                              case 6:
                                return _context65.abrupt("return", e);
                              case 7:
                              case "end":
                                return _context65.stop();
                            }
                        },
                        _callee65,
                        this
                      );
                    })
                  );
                  function getTokens(_x98) {
                    return _getTokens.apply(this, arguments);
                  }
                  return getTokens;
                })(),
              },
              {
                key: "calculate",
                value: function calculate(t) {
                  var e = t;
                  if (e.sentimentDictionary.type) {
                    var _t165 = Array.isArray(e.tokens)
                      ? e.tokens
                      : Object.keys(e.tokens);
                    if (e.sentimentDictionary.dictionary) {
                      var _s83 = e.sentimentDictionary.dictionary,
                        n = e.sentimentDictionary.negations;
                      var i = 0,
                        r = 1,
                        o = 0;
                      for (var _e71 = 0; _e71 < _t165.length; _e71 += 1) {
                        var a = _t165[_e71].toLowerCase();
                        -1 !== n.indexOf(a)
                          ? ((r = -1), (o += 1))
                          : void 0 !== _s83[a] &&
                            ((i += r * _s83[a]), (o += 1));
                      }
                      e.sentiment = {
                        score: i,
                        numWords: _t165.length,
                        numHits: o,
                        average: i / _t165.length,
                        type: e.sentimentDictionary.type,
                        locale: e.locale,
                      };
                    } else
                      e.sentiment = {
                        score: 0,
                        numWords: _t165.length,
                        numHits: 0,
                        average: 0,
                        type: e.sentimentDictionary.type,
                        locale: e.locale,
                      };
                  } else
                    e.sentiment = {
                      score: 0,
                      numWords: 0,
                      numHits: 0,
                      average: 0,
                      type: e.sentimentDictionary.type,
                      locale: e.locale,
                    };
                  return (
                    e.sentiment.score > 0
                      ? (e.sentiment.vote = "positive")
                      : e.sentiment.score < 0
                      ? (e.sentiment.vote = "negative")
                      : (e.sentiment.vote = "neutral"),
                    e
                  );
                },
              },
              {
                key: "defaultPipelineProcess",
                value: (function () {
                  var _defaultPipelineProcess5 = _asyncToGenerator(
                    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee66(
                      t
                    ) {
                      var e;
                      return _regeneratorRuntime().wrap(
                        function _callee66$(_context66) {
                          while (1)
                            switch ((_context66.prev = _context66.next)) {
                              case 0:
                                _context66.next = 2;
                                return this.getDictionary(t);
                              case 2:
                                e = _context66.sent;
                                _context66.next = 5;
                                return this.getTokens(e);
                              case 5:
                                e = _context66.sent;
                                _context66.next = 8;
                                return this.calculate(e);
                              case 8:
                                e = _context66.sent;
                                delete e.sentimentDictionary;
                                return _context66.abrupt("return", e);
                              case 11:
                              case "end":
                                return _context66.stop();
                            }
                        },
                        _callee66,
                        this
                      );
                    })
                  );
                  function defaultPipelineProcess(_x99) {
                    return _defaultPipelineProcess5.apply(this, arguments);
                  }
                  return defaultPipelineProcess;
                })(),
              },
              {
                key: "process",
                value: function process(t, e) {
                  var s = t;
                  return (
                    (s.settings = s.settings || e || this.settings),
                    this.pipelineProcess
                      ? this.runPipeline(s, this.pipelineProcess)
                      : this.defaultPipelineProcess(s)
                  );
                },
              },
            ]);
            return _class32;
          })(n);
        },
        {
          "@nlpjs/core": 12,
        },
      ],
      63: [
        function (t, e, s) {
          e.exports = /*#__PURE__*/ (function () {
            function _class33(t) {
              _classCallCheck(this, _class33);
              this.container = t;
            }
            _createClass(_class33, [
              {
                key: "getTokens",
                value: function getTokens(t) {
                  var e =
                    arguments.length > 1 && arguments[1] !== undefined
                      ? arguments[1]
                      : "en";
                  if ("string" == typeof t) {
                    var _s84 =
                      this.container &&
                      this.container.get("tokenizer-".concat(e));
                    return _s84 ? _s84.tokenize(t, !0) : t.split(" ");
                  }
                  return t;
                },
              },
              {
                key: "termFreqMap",
                value: function termFreqMap(t, e) {
                  var s = this.getTokens(t, e),
                    n = {};
                  return (
                    s.forEach(function (t) {
                      n[t] = (n[t] || 0) + 1;
                    }),
                    n
                  );
                },
              },
              {
                key: "addKeysToDict",
                value: function addKeysToDict(t, e) {
                  Object.keys(t).forEach(function (t) {
                    e[t] = !0;
                  });
                },
              },
              {
                key: "termFreqMapToVector",
                value: function termFreqMapToVector(t, e) {
                  var s = [];
                  return (
                    Object.keys(e).forEach(function (e) {
                      s.push(t[e] || 0);
                    }),
                    s
                  );
                },
              },
              {
                key: "vecDotProduct",
                value: function vecDotProduct(t, e) {
                  var s = 0;
                  for (var n = 0; n < t.length; n += 1) s += t[n] * e[n];
                  return s;
                },
              },
              {
                key: "vecMagnitude",
                value: function vecMagnitude(t) {
                  var e = 0;
                  for (var _s85 = 0; _s85 < t.length; _s85 += 1)
                    e += t[_s85] * t[_s85];
                  return Math.sqrt(e);
                },
              },
              {
                key: "cosineSimilarity",
                value: function cosineSimilarity(t, e) {
                  return (
                    this.vecDotProduct(t, e) /
                    (this.vecMagnitude(t) * this.vecMagnitude(e))
                  );
                },
              },
              {
                key: "getTermFreqVectors",
                value: function getTermFreqVectors(t, e, s) {
                  var n = this.termFreqMap(t, s),
                    i = this.termFreqMap(e, s);
                  if (!Object.keys(n).length || !Object.keys(i).length)
                    return 0;
                  var r = {};
                  return (
                    this.addKeysToDict(n, r),
                    this.addKeysToDict(i, r),
                    [
                      this.termFreqMapToVector(n, r),
                      this.termFreqMapToVector(i, r),
                    ]
                  );
                },
              },
              {
                key: "similarity",
                value: function similarity(t, e, s) {
                  if (t === e) return 1;
                  var _this$getTermFreqVect = this.getTermFreqVectors(t, e, s),
                    _this$getTermFreqVect2 = _slicedToArray(
                      _this$getTermFreqVect,
                      2
                    ),
                    n = _this$getTermFreqVect2[0],
                    i = _this$getTermFreqVect2[1];
                  return this.cosineSimilarity(n, i);
                },
              },
            ]);
            return _class33;
          })();
        },
        {},
      ],
      64: [
        function (t, e, s) {
          var n = t("./leven"),
            i = t("./similarity"),
            r = t("./cosine-similarity"),
            o = t("./spell-check");
          e.exports = {
            leven: n,
            CosineSimilarity: r,
            similarity: i,
            SpellCheck: o,
          };
        },
        {
          "./cosine-similarity": 63,
          "./leven": 65,
          "./similarity": 66,
          "./spell-check": 67,
        },
      ],
      65: [
        function (t, e, s) {
          var n = [],
            i = [];
          e.exports = function (t, e) {
            var _ref3;
            t.length > e.length &&
              ((_ref3 = [e, t]), (t = _ref3[0]), (e = _ref3[1]), _ref3);
            var s = t.length - 1,
              r = e.length - 1;
            for (; s > 0 && t.charCodeAt(s) === e.charCodeAt(r); )
              (s -= 1), (r -= 1);
            (s += 1), (r += 1);
            var o,
              a,
              u,
              c,
              l = 0;
            for (; l < s && t.charCodeAt(l) === e.charCodeAt(l); ) l += 1;
            if (((s -= l), (r -= l), 0 === s)) return r;
            for (var _e72 = 0; _e72 < s; _e72 += 1)
              (i[_e72] = t.charCodeAt(l + _e72)), (n[_e72] = _e72 + 1);
            var h = 0;
            for (; h < r; ) {
              (o = e.charCodeAt(l + h)), (u = h), (h += 1), (a = h);
              for (var _t166 = 0; _t166 < s; _t166 += 1)
                (c = (u + (o !== i[_t166])) | 0),
                  (u = n[_t166]),
                  (n[_t166] = u > a ? (c > a ? a + 1 : c) : c > u ? u + 1 : c),
                  (a = n[_t166]);
            }
            return a;
          };
        },
        {},
      ],
      66: [
        function (t, e, s) {
          var n = t("./leven");
          e.exports = function (t, e) {
            var s =
              arguments.length > 2 && arguments[2] !== undefined
                ? arguments[2]
                : !1;
            return (
              s &&
                ((t = t
                  .normalize("NFD")
                  .replace(/[\u0300-\u036f]/g, "")
                  .toLowerCase()),
                (e = e
                  .normalize("NFD")
                  .replace(/[\u0300-\u036f]/g, "")
                  .toLowerCase())),
              t === e ? 0 : n(t, e)
            );
          };
        },
        {
          "./leven": 65,
        },
      ],
      67: [
        function (t, e, s) {
          var n = t("./similarity");
          e.exports = /*#__PURE__*/ (function () {
            function _class34(t) {
              _classCallCheck(this, _class34);
              (this.settings = t || {}),
                (this.minLength = this.settings.minLength || 4),
                this.settings.features
                  ? this.setFeatures(this.settings.features)
                  : ((this.features = {}), (this.featuresByLength = {}));
            }
            _createClass(_class34, [
              {
                key: "setFeatures",
                value: function setFeatures(t) {
                  (this.features = t),
                    (this.featuresByLength = {}),
                    (this.featuresList = Object.keys(this.features));
                  for (
                    var _t167 = 0;
                    _t167 < this.featuresList.length;
                    _t167 += 1
                  ) {
                    var _e73 = this.featuresList[_t167],
                      _s86 = _e73.length;
                    this.featuresByLength[_s86] ||
                      (this.featuresByLength[_s86] = []),
                      this.featuresByLength[_s86].push(_e73);
                  }
                },
              },
              {
                key: "checkToken",
                value: function checkToken(t, e) {
                  if (this.features[t]) return t;
                  if (t.length < this.minLength) return t;
                  var s,
                    i = 1 / 0;
                  for (var r = t.length - e - 1; r < t.length + e; r += 1) {
                    var o = this.featuresByLength[r + 1];
                    if (o)
                      for (var _r20 = 0; _r20 < o.length; _r20 += 1) {
                        var a = o[_r20],
                          u = n(t, a);
                        if (u <= e)
                          if (u < i) (s = a), (i = u);
                          else if (u === i && s) {
                            var _e74 = Math.abs(s.length - t.length),
                              _n69 = Math.abs(a.length - t.length);
                            (_e74 > _n69 ||
                              (_e74 === _n69 &&
                                this.features[a] > this.features[s])) &&
                              ((s = a), (i = u));
                          }
                      }
                  }
                  return s || t;
                },
              },
              {
                key: "check",
                value: function check(t) {
                  var e =
                    arguments.length > 1 && arguments[1] !== undefined
                      ? arguments[1]
                      : 1;
                  if (!Array.isArray(t)) {
                    var _s87 = Object.keys(t),
                      _n70 = this.check(_s87, e),
                      i = {};
                    for (var _e75 = 0; _e75 < _n70.length; _e75 += 1)
                      i[_n70[_e75]] = t[_s87[_e75]];
                    return i;
                  }
                  var s = [];
                  for (var _n71 = 0; _n71 < t.length; _n71 += 1)
                    s.push(this.checkToken(t[_n71], e));
                  return s;
                },
              },
            ]);
            return _class34;
          })();
        },
        {
          "./similarity": 66,
        },
      ],
      68: [
        function (t, e, s) {
          var n = t("./slot-manager");
          e.exports = {
            SlotManager: n,
          };
        },
        {
          "./slot-manager": 69,
        },
      ],
      69: [
        function (t, e, s) {
          e.exports = /*#__PURE__*/ (function () {
            function _class35() {
              _classCallCheck(this, _class35);
              (this.intents = {}), (this.isEmpty = !0);
            }
            _createClass(_class35, [
              {
                key: "getSlot",
                value: function getSlot(t, e) {
                  if (this.intents[t]) return this.intents[t][e];
                },
              },
              {
                key: "existsSlot",
                value: function existsSlot(t, e) {
                  return void 0 !== this.getSlot(t, e);
                },
              },
              {
                key: "addSlot",
                value: function addSlot(t, e) {
                  var s =
                    arguments.length > 2 && arguments[2] !== undefined
                      ? arguments[2]
                      : !1;
                  var n = arguments.length > 3 ? arguments[3] : undefined;
                  return (
                    (this.isEmpty = !1),
                    this.intents[t] || (this.intents[t] = {}),
                    (this.intents[t][e] = {
                      intent: t,
                      entity: e,
                      mandatory: s,
                      locales: n || {},
                    }),
                    this.intents[t][e]
                  );
                },
              },
              {
                key: "removeSlot",
                value: function removeSlot(t, e) {
                  this.intents[t] && delete this.intents[t][e];
                },
              },
              {
                key: "addBatch",
                value: function addBatch(t, e) {
                  var _this25 = this;
                  var s = [];
                  return (
                    e &&
                      e.length > 0 &&
                      e.forEach(function (e) {
                        var n = _this25.getSlot(t, e);
                        n || (n = _this25.addSlot(t, e)), s.push(n);
                      }),
                    s
                  );
                },
              },
              {
                key: "getIntentEntityNames",
                value: function getIntentEntityNames(t) {
                  if (this.intents[t]) return Object.keys(this.intents[t]);
                },
              },
              {
                key: "clear",
                value: function clear() {
                  this.intents = {};
                },
              },
              {
                key: "load",
                value: function load(t) {
                  (this.intents = t || {}),
                    (this.isEmpty = 0 === Object.keys(this.intents).length);
                },
              },
              {
                key: "save",
                value: function save() {
                  return this.intents;
                },
              },
              {
                key: "getMandatorySlots",
                value: function getMandatorySlots(t) {
                  var e = {},
                    s = this.intents[t];
                  if (s) {
                    var _t168 = Object.keys(s);
                    for (var n = 0, i = _t168.length; n < i; n += 1) {
                      var _i44 = s[_t168[n]];
                      _i44.mandatory && (e[_i44.entity] = _i44);
                    }
                  }
                  return e;
                },
              },
              {
                key: "cleanContextEntities",
                value: function cleanContextEntities(t, e) {
                  var s = e;
                  if (s.slotFill) return;
                  var n = this.getMandatorySlots(t),
                    i = Object.keys(n);
                  0 !== i.length &&
                    i.forEach(function (t) {
                      delete s[t];
                    });
                },
              },
              {
                key: "process",
                value: function process(t, e) {
                  var s = t,
                    n = e;
                  if (
                    (this.cleanContextEntities(s.intent, n),
                    n.slotFill &&
                      ((s.intent = n.slotFill.intent),
                      (s.answer = n.slotFill.answer),
                      (s.srcAnswer = n.slotFill.srcAnswer)),
                    !s.intent || "None" === s.intent)
                  )
                    return !1;
                  n.slotFill &&
                    n.slotFill.intent === s.intent &&
                    (s.entities = [].concat(
                      _toConsumableArray(n.slotFill.entities),
                      _toConsumableArray(s.entities)
                    ));
                  var i = this.getMandatorySlots(s.intent);
                  var r = Object.keys(i);
                  if (0 === r.length) return !1;
                  n.slotFill &&
                    s.entities.push({
                      entity: n.slotFill.currentSlot,
                      utteranceText: s.utterance,
                      sourceText: s.utterance,
                      accuracy: 0.95,
                      start: 0,
                      end: s.utterance.length - 1,
                      len: s.utterance.length,
                    });
                  for (
                    var _t169 = 0, _e76 = s.entities.length;
                    _t169 < _e76;
                    _t169 += 1
                  )
                    delete i[s.entities[_t169].entity];
                  if (((r = Object.keys(i)), !r || 0 === r.length)) return !0;
                  n.slotFill &&
                    n.slotFill.intent === s.intent &&
                    (s.localeIso2 = n.slotFill.localeIso2),
                    (s.slotFill = {
                      localeIso2: s.localeIso2,
                      intent: s.intent,
                      entities: s.entities,
                      answer: s.answer,
                      srcAnswer: s.srcAnswer,
                    });
                  var o = i[r[0]];
                  return (
                    (s.slotFill.currentSlot = o.entity),
                    (s.srcAnswer = o.locales[s.localeIso2]),
                    (n.slotFill = s.slotFill),
                    !0
                  );
                },
              },
            ]);
            return _class35;
          })();
        },
        {},
      ],
      70: [
        function (t, e, s) {
          e.exports = t("./lib/axios");
        },
        {
          "./lib/axios": 72,
        },
      ],
      71: [
        function (t, e, s) {
          "use strict";

          var n = t("./../utils"),
            i = t("./../core/settle"),
            r = t("./../helpers/cookies"),
            o = t("./../helpers/buildURL"),
            a = t("../core/buildFullPath"),
            u = t("./../helpers/parseHeaders"),
            c = t("./../helpers/isURLSameOrigin"),
            l = t("../core/createError"),
            h = t("../defaults/transitional"),
            g = t("../cancel/Cancel");
          e.exports = function (t) {
            return new Promise(function (e, s) {
              var f,
                p = t.data,
                d = t.headers,
                m = t.responseType;
              function y() {
                t.cancelToken && t.cancelToken.unsubscribe(f),
                  t.signal && t.signal.removeEventListener("abort", f);
              }
              n.isFormData(p) && delete d["Content-Type"];
              var w = new XMLHttpRequest();
              if (t.auth) {
                var b = t.auth.username || "",
                  x = t.auth.password
                    ? unescape(encodeURIComponent(t.auth.password))
                    : "";
                d.Authorization = "Basic " + btoa(b + ":" + x);
              }
              var D = a(t.baseURL, t.url);
              function v() {
                if (w) {
                  var n =
                      "getAllResponseHeaders" in w
                        ? u(w.getAllResponseHeaders())
                        : null,
                    r = {
                      data:
                        m && "text" !== m && "json" !== m
                          ? w.response
                          : w.responseText,
                      status: w.status,
                      statusText: w.statusText,
                      headers: n,
                      config: t,
                      request: w,
                    };
                  i(
                    function (t) {
                      e(t), y();
                    },
                    function (t) {
                      s(t), y();
                    },
                    r
                  ),
                    (w = null);
                }
              }
              if (
                (w.open(
                  t.method.toUpperCase(),
                  o(D, t.params, t.paramsSerializer),
                  !0
                ),
                (w.timeout = t.timeout),
                "onloadend" in w
                  ? (w.onloadend = v)
                  : (w.onreadystatechange = function () {
                      w &&
                        4 === w.readyState &&
                        (0 !== w.status ||
                          (w.responseURL &&
                            0 === w.responseURL.indexOf("file:"))) &&
                        setTimeout(v);
                    }),
                (w.onabort = function () {
                  w &&
                    (s(l("Request aborted", t, "ECONNABORTED", w)), (w = null));
                }),
                (w.onerror = function () {
                  s(l("Network Error", t, null, w)), (w = null);
                }),
                (w.ontimeout = function () {
                  var e = t.timeout
                      ? "timeout of " + t.timeout + "ms exceeded"
                      : "timeout exceeded",
                    n = t.transitional || h;
                  t.timeoutErrorMessage && (e = t.timeoutErrorMessage),
                    s(
                      l(
                        e,
                        t,
                        n.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED",
                        w
                      )
                    ),
                    (w = null);
                }),
                n.isStandardBrowserEnv())
              ) {
                var k =
                  (t.withCredentials || c(D)) && t.xsrfCookieName
                    ? r.read(t.xsrfCookieName)
                    : void 0;
                k && (d[t.xsrfHeaderName] = k);
              }
              "setRequestHeader" in w &&
                n.forEach(d, function (t, e) {
                  void 0 === p && "content-type" === e.toLowerCase()
                    ? delete d[e]
                    : w.setRequestHeader(e, t);
                }),
                n.isUndefined(t.withCredentials) ||
                  (w.withCredentials = !!t.withCredentials),
                m && "json" !== m && (w.responseType = t.responseType),
                "function" == typeof t.onDownloadProgress &&
                  w.addEventListener("progress", t.onDownloadProgress),
                "function" == typeof t.onUploadProgress &&
                  w.upload &&
                  w.upload.addEventListener("progress", t.onUploadProgress),
                (t.cancelToken || t.signal) &&
                  ((f = function f(t) {
                    w &&
                      (s(!t || (t && t.type) ? new g("canceled") : t),
                      w.abort(),
                      (w = null));
                  }),
                  t.cancelToken && t.cancelToken.subscribe(f),
                  t.signal &&
                    (t.signal.aborted
                      ? f()
                      : t.signal.addEventListener("abort", f))),
                p || (p = null),
                w.send(p);
            });
          };
        },
        {
          "../cancel/Cancel": 73,
          "../core/buildFullPath": 78,
          "../core/createError": 79,
          "../defaults/transitional": 86,
          "./../core/settle": 83,
          "./../helpers/buildURL": 89,
          "./../helpers/cookies": 91,
          "./../helpers/isURLSameOrigin": 94,
          "./../helpers/parseHeaders": 96,
          "./../utils": 99,
        },
      ],
      72: [
        function (t, e, s) {
          "use strict";

          var n = t("./utils"),
            i = t("./helpers/bind"),
            r = t("./core/Axios"),
            o = t("./core/mergeConfig");
          var a = (function t(e) {
            var s = new r(e),
              a = i(r.prototype.request, s);
            return (
              n.extend(a, r.prototype, s),
              n.extend(a, s),
              (a.create = function (s) {
                return t(o(e, s));
              }),
              a
            );
          })(t("./defaults"));
          (a.Axios = r),
            (a.Cancel = t("./cancel/Cancel")),
            (a.CancelToken = t("./cancel/CancelToken")),
            (a.isCancel = t("./cancel/isCancel")),
            (a.VERSION = t("./env/data").version),
            (a.all = function (t) {
              return Promise.all(t);
            }),
            (a.spread = t("./helpers/spread")),
            (a.isAxiosError = t("./helpers/isAxiosError")),
            (e.exports = a),
            (e.exports["default"] = a);
        },
        {
          "./cancel/Cancel": 73,
          "./cancel/CancelToken": 74,
          "./cancel/isCancel": 75,
          "./core/Axios": 76,
          "./core/mergeConfig": 82,
          "./defaults": 85,
          "./env/data": 87,
          "./helpers/bind": 88,
          "./helpers/isAxiosError": 93,
          "./helpers/spread": 97,
          "./utils": 99,
        },
      ],
      73: [
        function (t, e, s) {
          "use strict";

          function n(t) {
            this.message = t;
          }
          (n.prototype.toString = function () {
            return "Cancel" + (this.message ? ": " + this.message : "");
          }),
            (n.prototype.__CANCEL__ = !0),
            (e.exports = n);
        },
        {},
      ],
      74: [
        function (t, e, s) {
          "use strict";

          var n = t("./Cancel");
          function i(t) {
            if ("function" != typeof t)
              throw new TypeError("executor must be a function.");
            var e;
            this.promise = new Promise(function (t) {
              e = t;
            });
            var s = this;
            this.promise.then(function (t) {
              if (s._listeners) {
                var e,
                  n = s._listeners.length;
                for (e = 0; e < n; e++) s._listeners[e](t);
                s._listeners = null;
              }
            }),
              (this.promise.then = function (t) {
                var e,
                  n = new Promise(function (t) {
                    s.subscribe(t), (e = t);
                  }).then(t);
                return (
                  (n.cancel = function () {
                    s.unsubscribe(e);
                  }),
                  n
                );
              }),
              t(function (t) {
                s.reason || ((s.reason = new n(t)), e(s.reason));
              });
          }
          (i.prototype.throwIfRequested = function () {
            if (this.reason) throw this.reason;
          }),
            (i.prototype.subscribe = function (t) {
              this.reason
                ? t(this.reason)
                : this._listeners
                ? this._listeners.push(t)
                : (this._listeners = [t]);
            }),
            (i.prototype.unsubscribe = function (t) {
              if (this._listeners) {
                var e = this._listeners.indexOf(t);
                -1 !== e && this._listeners.splice(e, 1);
              }
            }),
            (i.source = function () {
              var t;
              return {
                token: new i(function (e) {
                  t = e;
                }),
                cancel: t,
              };
            }),
            (e.exports = i);
        },
        {
          "./Cancel": 73,
        },
      ],
      75: [
        function (t, e, s) {
          "use strict";

          e.exports = function (t) {
            return !(!t || !t.__CANCEL__);
          };
        },
        {},
      ],
      76: [
        function (t, e, s) {
          "use strict";

          var n = t("./../utils"),
            i = t("../helpers/buildURL"),
            r = t("./InterceptorManager"),
            o = t("./dispatchRequest"),
            a = t("./mergeConfig"),
            u = t("../helpers/validator"),
            c = u.validators;
          function l(t) {
            (this.defaults = t),
              (this.interceptors = {
                request: new r(),
                response: new r(),
              });
          }
          (l.prototype.request = function (t, e) {
            "string" == typeof t ? ((e = e || {}).url = t) : (e = t || {}),
              (e = a(this.defaults, e)).method
                ? (e.method = e.method.toLowerCase())
                : this.defaults.method
                ? (e.method = this.defaults.method.toLowerCase())
                : (e.method = "get");
            var s = e.transitional;
            void 0 !== s &&
              u.assertOptions(
                s,
                {
                  silentJSONParsing: c.transitional(c["boolean"]),
                  forcedJSONParsing: c.transitional(c["boolean"]),
                  clarifyTimeoutError: c.transitional(c["boolean"]),
                },
                !1
              );
            var n = [],
              i = !0;
            this.interceptors.request.forEach(function (t) {
              ("function" == typeof t.runWhen && !1 === t.runWhen(e)) ||
                ((i = i && t.synchronous), n.unshift(t.fulfilled, t.rejected));
            });
            var r,
              l = [];
            if (
              (this.interceptors.response.forEach(function (t) {
                l.push(t.fulfilled, t.rejected);
              }),
              !i)
            ) {
              var h = [o, void 0];
              for (
                Array.prototype.unshift.apply(h, n),
                  h = h.concat(l),
                  r = Promise.resolve(e);
                h.length;

              )
                r = r.then(h.shift(), h.shift());
              return r;
            }
            for (var g = e; n.length; ) {
              var f = n.shift(),
                p = n.shift();
              try {
                g = f(g);
              } catch (t) {
                p(t);
                break;
              }
            }
            try {
              r = o(g);
            } catch (t) {
              return Promise.reject(t);
            }
            for (; l.length; ) r = r.then(l.shift(), l.shift());
            return r;
          }),
            (l.prototype.getUri = function (t) {
              return (
                (t = a(this.defaults, t)),
                i(t.url, t.params, t.paramsSerializer).replace(/^\?/, "")
              );
            }),
            n.forEach(["delete", "get", "head", "options"], function (t) {
              l.prototype[t] = function (e, s) {
                return this.request(
                  a(s || {}, {
                    method: t,
                    url: e,
                    data: (s || {}).data,
                  })
                );
              };
            }),
            n.forEach(["post", "put", "patch"], function (t) {
              l.prototype[t] = function (e, s, n) {
                return this.request(
                  a(n || {}, {
                    method: t,
                    url: e,
                    data: s,
                  })
                );
              };
            }),
            (e.exports = l);
        },
        {
          "../helpers/buildURL": 89,
          "../helpers/validator": 98,
          "./../utils": 99,
          "./InterceptorManager": 77,
          "./dispatchRequest": 80,
          "./mergeConfig": 82,
        },
      ],
      77: [
        function (t, e, s) {
          "use strict";

          var n = t("./../utils");
          function i() {
            this.handlers = [];
          }
          (i.prototype.use = function (t, e, s) {
            return (
              this.handlers.push({
                fulfilled: t,
                rejected: e,
                synchronous: !!s && s.synchronous,
                runWhen: s ? s.runWhen : null,
              }),
              this.handlers.length - 1
            );
          }),
            (i.prototype.eject = function (t) {
              this.handlers[t] && (this.handlers[t] = null);
            }),
            (i.prototype.forEach = function (t) {
              n.forEach(this.handlers, function (e) {
                null !== e && t(e);
              });
            }),
            (e.exports = i);
        },
        {
          "./../utils": 99,
        },
      ],
      78: [
        function (t, e, s) {
          "use strict";

          var n = t("../helpers/isAbsoluteURL"),
            i = t("../helpers/combineURLs");
          e.exports = function (t, e) {
            return t && !n(e) ? i(t, e) : e;
          };
        },
        {
          "../helpers/combineURLs": 90,
          "../helpers/isAbsoluteURL": 92,
        },
      ],
      79: [
        function (t, e, s) {
          "use strict";

          var n = t("./enhanceError");
          e.exports = function (t, e, s, i, r) {
            var o = new Error(t);
            return n(o, e, s, i, r);
          };
        },
        {
          "./enhanceError": 81,
        },
      ],
      80: [
        function (t, e, s) {
          "use strict";

          var n = t("./../utils"),
            i = t("./transformData"),
            r = t("../cancel/isCancel"),
            o = t("../defaults"),
            a = t("../cancel/Cancel");
          function u(t) {
            if (
              (t.cancelToken && t.cancelToken.throwIfRequested(),
              t.signal && t.signal.aborted)
            )
              throw new a("canceled");
          }
          e.exports = function (t) {
            return (
              u(t),
              (t.headers = t.headers || {}),
              (t.data = i.call(t, t.data, t.headers, t.transformRequest)),
              (t.headers = n.merge(
                t.headers.common || {},
                t.headers[t.method] || {},
                t.headers
              )),
              n.forEach(
                ["delete", "get", "head", "post", "put", "patch", "common"],
                function (e) {
                  delete t.headers[e];
                }
              ),
              (t.adapter || o.adapter)(t).then(
                function (e) {
                  return (
                    u(t),
                    (e.data = i.call(
                      t,
                      e.data,
                      e.headers,
                      t.transformResponse
                    )),
                    e
                  );
                },
                function (e) {
                  return (
                    r(e) ||
                      (u(t),
                      e &&
                        e.response &&
                        (e.response.data = i.call(
                          t,
                          e.response.data,
                          e.response.headers,
                          t.transformResponse
                        ))),
                    Promise.reject(e)
                  );
                }
              )
            );
          };
        },
        {
          "../cancel/Cancel": 73,
          "../cancel/isCancel": 75,
          "../defaults": 85,
          "./../utils": 99,
          "./transformData": 84,
        },
      ],
      81: [
        function (t, e, s) {
          "use strict";

          e.exports = function (t, e, s, n, i) {
            return (
              (t.config = e),
              s && (t.code = s),
              (t.request = n),
              (t.response = i),
              (t.isAxiosError = !0),
              (t.toJSON = function () {
                return {
                  message: this.message,
                  name: this.name,
                  description: this.description,
                  number: this.number,
                  fileName: this.fileName,
                  lineNumber: this.lineNumber,
                  columnNumber: this.columnNumber,
                  stack: this.stack,
                  config: this.config,
                  code: this.code,
                  status:
                    this.response && this.response.status
                      ? this.response.status
                      : null,
                };
              }),
              t
            );
          };
        },
        {},
      ],
      82: [
        function (t, e, s) {
          "use strict";

          var n = t("../utils");
          e.exports = function (t, e) {
            e = e || {};
            var s = {};
            function i(t, e) {
              return n.isPlainObject(t) && n.isPlainObject(e)
                ? n.merge(t, e)
                : n.isPlainObject(e)
                ? n.merge({}, e)
                : n.isArray(e)
                ? e.slice()
                : e;
            }
            function r(s) {
              return n.isUndefined(e[s])
                ? n.isUndefined(t[s])
                  ? void 0
                  : i(void 0, t[s])
                : i(t[s], e[s]);
            }
            function o(t) {
              if (!n.isUndefined(e[t])) return i(void 0, e[t]);
            }
            function a(s) {
              return n.isUndefined(e[s])
                ? n.isUndefined(t[s])
                  ? void 0
                  : i(void 0, t[s])
                : i(void 0, e[s]);
            }
            function u(s) {
              return s in e ? i(t[s], e[s]) : s in t ? i(void 0, t[s]) : void 0;
            }
            var c = {
              url: o,
              method: o,
              data: o,
              baseURL: a,
              transformRequest: a,
              transformResponse: a,
              paramsSerializer: a,
              timeout: a,
              timeoutMessage: a,
              withCredentials: a,
              adapter: a,
              responseType: a,
              xsrfCookieName: a,
              xsrfHeaderName: a,
              onUploadProgress: a,
              onDownloadProgress: a,
              decompress: a,
              maxContentLength: a,
              maxBodyLength: a,
              transport: a,
              httpAgent: a,
              httpsAgent: a,
              cancelToken: a,
              socketPath: a,
              responseEncoding: a,
              validateStatus: u,
            };
            return (
              n.forEach(Object.keys(t).concat(Object.keys(e)), function (t) {
                var e = c[t] || r,
                  i = e(t);
                (n.isUndefined(i) && e !== u) || (s[t] = i);
              }),
              s
            );
          };
        },
        {
          "../utils": 99,
        },
      ],
      83: [
        function (t, e, s) {
          "use strict";

          var n = t("./createError");
          e.exports = function (t, e, s) {
            var i = s.config.validateStatus;
            s.status && i && !i(s.status)
              ? e(
                  n(
                    "Request failed with status code " + s.status,
                    s.config,
                    null,
                    s.request,
                    s
                  )
                )
              : t(s);
          };
        },
        {
          "./createError": 79,
        },
      ],
      84: [
        function (t, e, s) {
          "use strict";

          var n = t("./../utils"),
            i = t("../defaults");
          e.exports = function (t, e, s) {
            var r = this || i;
            return (
              n.forEach(s, function (s) {
                t = s.call(r, t, e);
              }),
              t
            );
          };
        },
        {
          "../defaults": 85,
          "./../utils": 99,
        },
      ],
      85: [
        function (t, e, s) {
          (function (s) {
            (function () {
              "use strict";

              var n = t("../utils"),
                i = t("../helpers/normalizeHeaderName"),
                r = t("../core/enhanceError"),
                o = t("./transitional"),
                a = {
                  "Content-Type": "application/x-www-form-urlencoded",
                };
              function u(t, e) {
                !n.isUndefined(t) &&
                  n.isUndefined(t["Content-Type"]) &&
                  (t["Content-Type"] = e);
              }
              var c,
                l = {
                  transitional: o,
                  adapter:
                    ("undefined" != typeof XMLHttpRequest
                      ? (c = t("../adapters/xhr"))
                      : void 0 !== s &&
                        "[object process]" ===
                          Object.prototype.toString.call(s) &&
                        (c = t("../adapters/http")),
                    c),
                  transformRequest: [
                    function (t, e) {
                      return (
                        i(e, "Accept"),
                        i(e, "Content-Type"),
                        n.isFormData(t) ||
                        n.isArrayBuffer(t) ||
                        n.isBuffer(t) ||
                        n.isStream(t) ||
                        n.isFile(t) ||
                        n.isBlob(t)
                          ? t
                          : n.isArrayBufferView(t)
                          ? t.buffer
                          : n.isURLSearchParams(t)
                          ? (u(
                              e,
                              "application/x-www-form-urlencoded;charset=utf-8"
                            ),
                            t.toString())
                          : n.isObject(t) ||
                            (e && "application/json" === e["Content-Type"])
                          ? (u(e, "application/json"),
                            (function (t, e, s) {
                              if (n.isString(t))
                                try {
                                  return (e || JSON.parse)(t), n.trim(t);
                                } catch (t) {
                                  if ("SyntaxError" !== t.name) throw t;
                                }
                              return (s || JSON.stringify)(t);
                            })(t))
                          : t
                      );
                    },
                  ],
                  transformResponse: [
                    function (t) {
                      var e = this.transitional || l.transitional,
                        s = e && e.silentJSONParsing,
                        i = e && e.forcedJSONParsing,
                        o = !s && "json" === this.responseType;
                      if (o || (i && n.isString(t) && t.length))
                        try {
                          return JSON.parse(t);
                        } catch (t) {
                          if (o) {
                            if ("SyntaxError" === t.name)
                              throw r(t, this, "E_JSON_PARSE");
                            throw t;
                          }
                        }
                      return t;
                    },
                  ],
                  timeout: 0,
                  xsrfCookieName: "XSRF-TOKEN",
                  xsrfHeaderName: "X-XSRF-TOKEN",
                  maxContentLength: -1,
                  maxBodyLength: -1,
                  validateStatus: function validateStatus(t) {
                    return t >= 200 && t < 300;
                  },
                  headers: {
                    common: {
                      Accept: "application/json, text/plain, */*",
                    },
                  },
                };
              n.forEach(["delete", "get", "head"], function (t) {
                l.headers[t] = {};
              }),
                n.forEach(["post", "put", "patch"], function (t) {
                  l.headers[t] = n.merge(a);
                }),
                (e.exports = l);
            }.call(this));
          }.call(this, t("_process")));
        },
        {
          "../adapters/http": 71,
          "../adapters/xhr": 71,
          "../core/enhanceError": 81,
          "../helpers/normalizeHeaderName": 95,
          "../utils": 99,
          "./transitional": 86,
          _process: 100,
        },
      ],
      86: [
        function (t, e, s) {
          "use strict";

          e.exports = {
            silentJSONParsing: !0,
            forcedJSONParsing: !0,
            clarifyTimeoutError: !1,
          };
        },
        {},
      ],
      87: [
        function (t, e, s) {
          e.exports = {
            version: "0.26.1",
          };
        },
        {},
      ],
      88: [
        function (t, e, s) {
          "use strict";

          e.exports = function (t, e) {
            return function () {
              for (
                var s = new Array(arguments.length), n = 0;
                n < s.length;
                n++
              )
                s[n] = arguments[n];
              return t.apply(e, s);
            };
          };
        },
        {},
      ],
      89: [
        function (t, e, s) {
          "use strict";

          var n = t("./../utils");
          function i(t) {
            return encodeURIComponent(t)
              .replace(/%3A/gi, ":")
              .replace(/%24/g, "$")
              .replace(/%2C/gi, ",")
              .replace(/%20/g, "+")
              .replace(/%5B/gi, "[")
              .replace(/%5D/gi, "]");
          }
          e.exports = function (t, e, s) {
            if (!e) return t;
            var r;
            if (s) r = s(e);
            else if (n.isURLSearchParams(e)) r = e.toString();
            else {
              var o = [];
              n.forEach(e, function (t, e) {
                null != t &&
                  (n.isArray(t) ? (e += "[]") : (t = [t]),
                  n.forEach(t, function (t) {
                    n.isDate(t)
                      ? (t = t.toISOString())
                      : n.isObject(t) && (t = JSON.stringify(t)),
                      o.push(i(e) + "=" + i(t));
                  }));
              }),
                (r = o.join("&"));
            }
            if (r) {
              var a = t.indexOf("#");
              -1 !== a && (t = t.slice(0, a)),
                (t += (-1 === t.indexOf("?") ? "?" : "&") + r);
            }
            return t;
          };
        },
        {
          "./../utils": 99,
        },
      ],
      90: [
        function (t, e, s) {
          "use strict";

          e.exports = function (t, e) {
            return e ? t.replace(/\/+$/, "") + "/" + e.replace(/^\/+/, "") : t;
          };
        },
        {},
      ],
      91: [
        function (t, e, s) {
          "use strict";

          var n = t("./../utils");
          e.exports = n.isStandardBrowserEnv()
            ? {
                write: function write(t, e, s, i, r, o) {
                  var a = [];
                  a.push(t + "=" + encodeURIComponent(e)),
                    n.isNumber(s) &&
                      a.push("expires=" + new Date(s).toGMTString()),
                    n.isString(i) && a.push("path=" + i),
                    n.isString(r) && a.push("domain=" + r),
                    !0 === o && a.push("secure"),
                    (document.cookie = a.join("; "));
                },
                read: function read(t) {
                  var e = document.cookie.match(
                    new RegExp("(^|;\\s*)(" + t + ")=([^;]*)")
                  );
                  return e ? decodeURIComponent(e[3]) : null;
                },
                remove: function remove(t) {
                  this.write(t, "", Date.now() - 864e5);
                },
              }
            : {
                write: function write() {},
                read: function read() {
                  return null;
                },
                remove: function remove() {},
              };
        },
        {
          "./../utils": 99,
        },
      ],
      92: [
        function (t, e, s) {
          "use strict";

          e.exports = function (t) {
            return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
          };
        },
        {},
      ],
      93: [
        function (t, e, s) {
          "use strict";

          var n = t("./../utils");
          e.exports = function (t) {
            return n.isObject(t) && !0 === t.isAxiosError;
          };
        },
        {
          "./../utils": 99,
        },
      ],
      94: [
        function (t, e, s) {
          "use strict";

          var n = t("./../utils");
          e.exports = n.isStandardBrowserEnv()
            ? (function () {
                var t,
                  e = /(msie|trident)/i.test(navigator.userAgent),
                  s = document.createElement("a");
                function i(t) {
                  var n = t;
                  return (
                    e && (s.setAttribute("href", n), (n = s.href)),
                    s.setAttribute("href", n),
                    {
                      href: s.href,
                      protocol: s.protocol ? s.protocol.replace(/:$/, "") : "",
                      host: s.host,
                      search: s.search ? s.search.replace(/^\?/, "") : "",
                      hash: s.hash ? s.hash.replace(/^#/, "") : "",
                      hostname: s.hostname,
                      port: s.port,
                      pathname:
                        "/" === s.pathname.charAt(0)
                          ? s.pathname
                          : "/" + s.pathname,
                    }
                  );
                }
                return (
                  (t = i(window.location.href)),
                  function (e) {
                    var s = n.isString(e) ? i(e) : e;
                    return s.protocol === t.protocol && s.host === t.host;
                  }
                );
              })()
            : function () {
                return !0;
              };
        },
        {
          "./../utils": 99,
        },
      ],
      95: [
        function (t, e, s) {
          "use strict";

          var n = t("../utils");
          e.exports = function (t, e) {
            n.forEach(t, function (s, n) {
              n !== e &&
                n.toUpperCase() === e.toUpperCase() &&
                ((t[e] = s), delete t[n]);
            });
          };
        },
        {
          "../utils": 99,
        },
      ],
      96: [
        function (t, e, s) {
          "use strict";

          var n = t("./../utils"),
            i = [
              "age",
              "authorization",
              "content-length",
              "content-type",
              "etag",
              "expires",
              "from",
              "host",
              "if-modified-since",
              "if-unmodified-since",
              "last-modified",
              "location",
              "max-forwards",
              "proxy-authorization",
              "referer",
              "retry-after",
              "user-agent",
            ];
          e.exports = function (t) {
            var e,
              s,
              r,
              o = {};
            return t
              ? (n.forEach(t.split("\n"), function (t) {
                  if (
                    ((r = t.indexOf(":")),
                    (e = n.trim(t.substr(0, r)).toLowerCase()),
                    (s = n.trim(t.substr(r + 1))),
                    e)
                  ) {
                    if (o[e] && i.indexOf(e) >= 0) return;
                    o[e] =
                      "set-cookie" === e
                        ? (o[e] ? o[e] : []).concat([s])
                        : o[e]
                        ? o[e] + ", " + s
                        : s;
                  }
                }),
                o)
              : o;
          };
        },
        {
          "./../utils": 99,
        },
      ],
      97: [
        function (t, e, s) {
          "use strict";

          e.exports = function (t) {
            return function (e) {
              return t.apply(null, e);
            };
          };
        },
        {},
      ],
      98: [
        function (t, e, s) {
          "use strict";

          var n = t("../env/data").version,
            i = {};
          [
            "object",
            "boolean",
            "number",
            "function",
            "string",
            "symbol",
          ].forEach(function (t, e) {
            i[t] = function (s) {
              return _typeof(s) === t || "a" + (e < 1 ? "n " : " ") + t;
            };
          });
          var r = {};
          (i.transitional = function (t, e, s) {
            function i(t, e) {
              return (
                "[Axios v" +
                n +
                "] Transitional option '" +
                t +
                "'" +
                e +
                (s ? ". " + s : "")
              );
            }
            return function (s, n, o) {
              if (!1 === t)
                throw new Error(
                  i(n, " has been removed" + (e ? " in " + e : ""))
                );
              return (
                e &&
                  !r[n] &&
                  ((r[n] = !0),
                  console.warn(
                    i(
                      n,
                      " has been deprecated since v" +
                        e +
                        " and will be removed in the near future"
                    )
                  )),
                !t || t(s, n, o)
              );
            };
          }),
            (e.exports = {
              assertOptions: function assertOptions(t, e, s) {
                if ("object" != _typeof(t))
                  throw new TypeError("options must be an object");
                for (var n = Object.keys(t), i = n.length; i-- > 0; ) {
                  var r = n[i],
                    o = e[r];
                  if (o) {
                    var a = t[r],
                      u = void 0 === a || o(a, r, t);
                    if (!0 !== u)
                      throw new TypeError("option " + r + " must be " + u);
                  } else if (!0 !== s) throw Error("Unknown option " + r);
                }
              },
              validators: i,
            });
        },
        {
          "../env/data": 87,
        },
      ],
      99: [
        function (t, e, s) {
          "use strict";

          var n = t("./helpers/bind"),
            i = Object.prototype.toString;
          function r(t) {
            return Array.isArray(t);
          }
          function o(t) {
            return void 0 === t;
          }
          function a(t) {
            return "[object ArrayBuffer]" === i.call(t);
          }
          function u(t) {
            return null !== t && "object" == _typeof(t);
          }
          function c(t) {
            if ("[object Object]" !== i.call(t)) return !1;
            var e = Object.getPrototypeOf(t);
            return null === e || e === Object.prototype;
          }
          function l(t) {
            return "[object Function]" === i.call(t);
          }
          function h(t, e) {
            if (null != t)
              if (("object" != _typeof(t) && (t = [t]), r(t)))
                for (var s = 0, n = t.length; s < n; s++)
                  e.call(null, t[s], s, t);
              else
                for (var i in t)
                  Object.prototype.hasOwnProperty.call(t, i) &&
                    e.call(null, t[i], i, t);
          }
          e.exports = {
            isArray: r,
            isArrayBuffer: a,
            isBuffer: function isBuffer(t) {
              return (
                null !== t &&
                !o(t) &&
                null !== t.constructor &&
                !o(t.constructor) &&
                "function" == typeof t.constructor.isBuffer &&
                t.constructor.isBuffer(t)
              );
            },
            isFormData: function isFormData(t) {
              return "[object FormData]" === i.call(t);
            },
            isArrayBufferView: function isArrayBufferView(t) {
              return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView
                ? ArrayBuffer.isView(t)
                : t && t.buffer && a(t.buffer);
            },
            isString: function isString(t) {
              return "string" == typeof t;
            },
            isNumber: function isNumber(t) {
              return "number" == typeof t;
            },
            isObject: u,
            isPlainObject: c,
            isUndefined: o,
            isDate: function isDate(t) {
              return "[object Date]" === i.call(t);
            },
            isFile: function isFile(t) {
              return "[object File]" === i.call(t);
            },
            isBlob: function isBlob(t) {
              return "[object Blob]" === i.call(t);
            },
            isFunction: l,
            isStream: function isStream(t) {
              return u(t) && l(t.pipe);
            },
            isURLSearchParams: function isURLSearchParams(t) {
              return "[object URLSearchParams]" === i.call(t);
            },
            isStandardBrowserEnv: function isStandardBrowserEnv() {
              return (
                ("undefined" == typeof navigator ||
                  ("ReactNative" !== navigator.product &&
                    "NativeScript" !== navigator.product &&
                    "NS" !== navigator.product)) &&
                "undefined" != typeof window &&
                "undefined" != typeof document
              );
            },
            forEach: h,
            merge: function t() {
              var e = {};
              function s(s, n) {
                c(e[n]) && c(s)
                  ? (e[n] = t(e[n], s))
                  : c(s)
                  ? (e[n] = t({}, s))
                  : r(s)
                  ? (e[n] = s.slice())
                  : (e[n] = s);
              }
              for (var n = 0, i = arguments.length; n < i; n++)
                h(arguments[n], s);
              return e;
            },
            extend: function extend(t, e, s) {
              return (
                h(e, function (e, i) {
                  t[i] = s && "function" == typeof e ? n(e, s) : e;
                }),
                t
              );
            },
            trim: function trim(t) {
              return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
            },
            stripBOM: function stripBOM(t) {
              return 65279 === t.charCodeAt(0) && (t = t.slice(1)), t;
            },
          };
        },
        {
          "./helpers/bind": 88,
        },
      ],
      100: [
        function (t, e, s) {
          var n,
            i,
            r = (e.exports = {});
          function o() {
            throw new Error("setTimeout has not been defined");
          }
          function a() {
            throw new Error("clearTimeout has not been defined");
          }
          function u(t) {
            if (n === setTimeout) return setTimeout(t, 0);
            if ((n === o || !n) && setTimeout)
              return (n = setTimeout), setTimeout(t, 0);
            try {
              return n(t, 0);
            } catch (e) {
              try {
                return n.call(null, t, 0);
              } catch (e) {
                return n.call(this, t, 0);
              }
            }
          }
          !(function () {
            try {
              n = "function" == typeof setTimeout ? setTimeout : o;
            } catch (t) {
              n = o;
            }
            try {
              i = "function" == typeof clearTimeout ? clearTimeout : a;
            } catch (t) {
              i = a;
            }
          })();
          var c,
            l = [],
            h = !1,
            g = -1;
          function f() {
            h &&
              c &&
              ((h = !1),
              c.length ? (l = c.concat(l)) : (g = -1),
              l.length && p());
          }
          function p() {
            if (!h) {
              var t = u(f);
              h = !0;
              for (var e = l.length; e; ) {
                for (c = l, l = []; ++g < e; ) c && c[g].run();
                (g = -1), (e = l.length);
              }
              (c = null),
                (h = !1),
                (function (t) {
                  if (i === clearTimeout) return clearTimeout(t);
                  if ((i === a || !i) && clearTimeout)
                    return (i = clearTimeout), clearTimeout(t);
                  try {
                    i(t);
                  } catch (e) {
                    try {
                      return i.call(null, t);
                    } catch (e) {
                      return i.call(this, t);
                    }
                  }
                })(t);
            }
          }
          function d(t, e) {
            (this.fun = t), (this.array = e);
          }
          function m() {}
          (r.nextTick = function (t) {
            var e = new Array(arguments.length - 1);
            if (arguments.length > 1)
              for (var s = 1; s < arguments.length; s++)
                e[s - 1] = arguments[s];
            l.push(new d(t, e)), 1 !== l.length || h || u(p);
          }),
            (d.prototype.run = function () {
              this.fun.apply(null, this.array);
            }),
            (r.title = "browser"),
            (r.browser = !0),
            (r.env = {}),
            (r.argv = []),
            (r.version = ""),
            (r.versions = {}),
            (r.on = m),
            (r.addListener = m),
            (r.once = m),
            (r.off = m),
            (r.removeListener = m),
            (r.removeAllListeners = m),
            (r.emit = m),
            (r.prependListener = m),
            (r.prependOnceListener = m),
            (r.listeners = function (t) {
              return [];
            }),
            (r.binding = function (t) {
              throw new Error("process.binding is not supported");
            }),
            (r.cwd = function () {
              return "/";
            }),
            (r.chdir = function (t) {
              throw new Error("process.chdir is not supported");
            }),
            (r.umask = function () {
              return 0;
            });
        },
        {},
      ],
    },
    {},
    [1]
  )(1);
});
