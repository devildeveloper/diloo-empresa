require("source-map-support").install();
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  'use strict';
  
  var _this2 = this;
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  __webpack_require__(1);
  
  var _path = __webpack_require__(2);
  
  var _path2 = _interopRequireDefault(_path);
  
  var _express = __webpack_require__(3);
  
  var _express2 = _interopRequireDefault(_express);
  
  var _react = __webpack_require__(4);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactDomServer = __webpack_require__(5);
  
  var _reactDomServer2 = _interopRequireDefault(_reactDomServer);
  
  var _routes = __webpack_require__(6);
  
  var _routes2 = _interopRequireDefault(_routes);
  
  var _componentsHtml = __webpack_require__(66);
  
  var _componentsHtml2 = _interopRequireDefault(_componentsHtml);
  
  var _assets = __webpack_require__(67);
  
  var _assets2 = _interopRequireDefault(_assets);
  
  var _config = __webpack_require__(14);
  
  var _compression = __webpack_require__(68);
  
  var _compression2 = _interopRequireDefault(_compression);
  
  var server = global.server = (0, _express2['default'])();
  
  server.set('port', _config.port);
  server.use((0, _compression2['default'])());
  
  //
  // Register Node.js middleware
  // -----------------------------------------------------------------------------
  server.use(_express2['default']['static'](_path2['default'].join(__dirname, 'public')));
  
  //
  // Register API middleware
  // -----------------------------------------------------------------------------
  server.use('/api/content', __webpack_require__(69));
  
  //
  // Register server-side rendering middleware
  // -----------------------------------------------------------------------------
  server.get('*', function callee$0$0(req, res, next) {
    return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
      var _this = this;
  
      while (1) switch (context$1$0.prev = context$1$0.next) {
        case 0:
          context$1$0.prev = 0;
          context$1$0.next = 3;
          return regeneratorRuntime.awrap((function callee$1$0() {
            var statusCode, data, css, context, html;
            return regeneratorRuntime.async(function callee$1$0$(context$2$0) {
              while (1) switch (context$2$0.prev = context$2$0.next) {
                case 0:
                  statusCode = 200;
                  data = { title: '', description: '', css: '', body: '', entry: _assets2['default'].main.js };
                  css = [];
                  context = {
                    insertCss: function insertCss(styles) {
                      return css.push(styles._getCss());
                    },
                    onSetTitle: function onSetTitle(value) {
                      return data.title = value;
                    },
                    onSetMeta: function onSetMeta(key, value) {
                      return data[key] = value;
                    },
                    onPageNotFound: function onPageNotFound() {
                      return statusCode = 404;
                    }
                  };
                  context$2$0.next = 6;
                  return regeneratorRuntime.awrap(_routes2['default'].dispatch({ path: req.path, query: req.query, context: context }, function (state, component) {
                    data.body = _reactDomServer2['default'].renderToString(component);
                    data.css = css.join('');
                  }));
  
                case 6:
                  html = _reactDomServer2['default'].renderToStaticMarkup(_react2['default'].createElement(_componentsHtml2['default'], data));
  
                  res.status(statusCode).send('<!doctype html>\n' + html);
  
                case 8:
                case 'end':
                  return context$2$0.stop();
              }
            }, null, _this);
          })());
  
        case 3:
          context$1$0.next = 8;
          break;
  
        case 5:
          context$1$0.prev = 5;
          context$1$0.t0 = context$1$0['catch'](0);
  
          next(context$1$0.t0);
  
        case 8:
        case 'end':
          return context$1$0.stop();
      }
    }, null, _this2, [[0, 5]]);
  });
  
  //
  // Launch the server
  // -----------------------------------------------------------------------------
  server.listen(_config.port, function () {
    /* eslint-disable no-console */
    console.log('The server is running at http://localhost:' + _config.port + '/');
  });

/***/ },
/* 1 */
/***/ function(module, exports) {

  module.exports = require("babel-core/polyfill");

/***/ },
/* 2 */
/***/ function(module, exports) {

  module.exports = require("path");

/***/ },
/* 3 */
/***/ function(module, exports) {

  module.exports = require("express");

/***/ },
/* 4 */
/***/ function(module, exports) {

  module.exports = require("react");

/***/ },
/* 5 */
/***/ function(module, exports) {

  module.exports = require("react-dom/server");

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _this = this;
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _react = __webpack_require__(4);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRoutingSrcRouter = __webpack_require__(7);
  
  var _reactRoutingSrcRouter2 = _interopRequireDefault(_reactRoutingSrcRouter);
  
  var _coreFetch = __webpack_require__(12);
  
  var _coreFetch2 = _interopRequireDefault(_coreFetch);
  
  var _componentsApp = __webpack_require__(15);
  
  var _componentsApp2 = _interopRequireDefault(_componentsApp);
  
  var _componentsContentPage = __webpack_require__(35);
  
  var _componentsContentPage2 = _interopRequireDefault(_componentsContentPage);
  
  var _componentsInitPage = __webpack_require__(38);
  
  var _componentsInitPage2 = _interopRequireDefault(_componentsInitPage);
  
  var _componentsLoginPage = __webpack_require__(54);
  
  var _componentsLoginPage2 = _interopRequireDefault(_componentsLoginPage);
  
  var _componentsRegisterPage = __webpack_require__(57);
  
  var _componentsRegisterPage2 = _interopRequireDefault(_componentsRegisterPage);
  
  var _componentsNotFoundPage = __webpack_require__(60);
  
  var _componentsNotFoundPage2 = _interopRequireDefault(_componentsNotFoundPage);
  
  var _componentsErrorPage = __webpack_require__(63);
  
  var _componentsErrorPage2 = _interopRequireDefault(_componentsErrorPage);
  
  var router = new _reactRoutingSrcRouter2['default'](function (on) {
    on('*', function callee$1$0(state, next) {
      var component;
      return regeneratorRuntime.async(function callee$1$0$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            context$2$0.next = 2;
            return regeneratorRuntime.awrap(next());
  
          case 2:
            component = context$2$0.sent;
            return context$2$0.abrupt('return', component && _react2['default'].createElement(
              _componentsApp2['default'],
              { context: state.context },
              component
            ));
  
          case 4:
          case 'end':
            return context$2$0.stop();
        }
      }, null, _this);
    });
    on('/', function callee$1$0() {
      return regeneratorRuntime.async(function callee$1$0$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            return context$2$0.abrupt('return', _react2['default'].createElement(_componentsInitPage2['default'], { is: 'init', as: '0' }));
  
          case 1:
          case 'end':
            return context$2$0.stop();
        }
      }, null, _this);
    });
    on('/inicio', function callee$1$0() {
      return regeneratorRuntime.async(function callee$1$0$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            return context$2$0.abrupt('return', _react2['default'].createElement(_componentsInitPage2['default'], { is: 'inicio', as: '1' }));
  
          case 1:
          case 'end':
            return context$2$0.stop();
        }
      }, null, _this);
    });
    on('/contacto', function callee$1$0() {
      return regeneratorRuntime.async(function callee$1$0$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            return context$2$0.abrupt('return', _react2['default'].createElement(_componentsInitPage2['default'], { is: 'contacto', as: '1' }));
  
          case 1:
          case 'end':
            return context$2$0.stop();
        }
      }, null, _this);
    });
    on('/servicios', function callee$1$0() {
      return regeneratorRuntime.async(function callee$1$0$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            return context$2$0.abrupt('return', _react2['default'].createElement(_componentsInitPage2['default'], { is: 'servicios', as: '1' }));
  
          case 1:
          case 'end':
            return context$2$0.stop();
        }
      }, null, _this);
    });
    on('/servicios/:id', function callee$1$0(req) {
      return regeneratorRuntime.async(function callee$1$0$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            return context$2$0.abrupt('return', _react2['default'].createElement(_componentsInitPage2['default'], { is: 'servicios', as: '1', servicio: req.params.id }));
  
          case 1:
          case 'end':
            return context$2$0.stop();
        }
      }, null, _this);
    });
    on('/registro', function callee$1$0() {
      return regeneratorRuntime.async(function callee$1$0$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            return context$2$0.abrupt('return', _react2['default'].createElement(_componentsInitPage2['default'], { is: 'conocenos', as: '4' }));
  
          case 1:
          case 'end':
            return context$2$0.stop();
        }
      }, null, _this);
    });
  
    on('/login', function callee$1$0() {
      return regeneratorRuntime.async(function callee$1$0$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            return context$2$0.abrupt('return', _react2['default'].createElement(_componentsLoginPage2['default'], null));
  
          case 1:
          case 'end':
            return context$2$0.stop();
        }
      }, null, _this);
    });
  
    on('/register', function callee$1$0() {
      return regeneratorRuntime.async(function callee$1$0$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            return context$2$0.abrupt('return', _react2['default'].createElement(_componentsRegisterPage2['default'], null));
  
          case 1:
          case 'end':
            return context$2$0.stop();
        }
      }, null, _this);
    });
  
    on('*', function callee$1$0(state) {
      var response, content;
      return regeneratorRuntime.async(function callee$1$0$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            context$2$0.next = 2;
            return regeneratorRuntime.awrap((0, _coreFetch2['default'])('/api/content?path=' + state.path));
  
          case 2:
            response = context$2$0.sent;
            context$2$0.next = 5;
            return regeneratorRuntime.awrap(response.json());
  
          case 5:
            content = context$2$0.sent;
            return context$2$0.abrupt('return', content && _react2['default'].createElement(_componentsContentPage2['default'], content));
  
          case 7:
          case 'end':
            return context$2$0.stop();
        }
      }, null, _this);
    });
  });
  
  exports['default'] = router;
  module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Routing | http://www.kriasoft.com/react-routing
   * Copyright (c) Konstantin Tarkus <hello@tarkus.me> | The MIT License
   */
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  var _Route = __webpack_require__(8);
  
  var _Route2 = _interopRequireDefault(_Route);
  
  var emptyFunction = function emptyFunction() {};
  
  var Router = (function () {
  
    /**
     * Creates a new instance of the `Router` class.
     */
  
    function Router(initialize) {
      _classCallCheck(this, Router);
  
      this.routes = [];
      this.events = Object.create(null);
  
      if (typeof initialize === 'function') {
        initialize(this.on.bind(this));
      }
    }
  
    /**
     * Adds a new route to the routing table or registers an event listener.
     *
     * @param {String} path A string in the Express format, an array of strings, or a regular expression.
     * @param {Function|Array} handlers Asynchronous route handler function(s).
     */
  
    _createClass(Router, [{
      key: 'on',
      value: function on(path) {
        for (var _len = arguments.length, handlers = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          handlers[_key - 1] = arguments[_key];
        }
  
        if (path === 'error') {
          this.events[path] = handlers[0];
        } else {
          this.routes.push(new _Route2['default'](path, handlers));
        }
      }
    }, {
      key: 'dispatch',
      value: function dispatch(state, cb) {
        var routes, handlers, value, result, done, next;
        return regeneratorRuntime.async(function dispatch$(context$2$0) {
          while (1) switch (context$2$0.prev = context$2$0.next) {
            case 0:
              next = function next() {
                var _handlers$next;
  
                var _value, _value2, match, handler;
  
                return regeneratorRuntime.async(function next$(context$3$0) {
                  while (1) switch (context$3$0.prev = context$3$0.next) {
                    case 0:
                      if (!((_handlers$next = handlers.next(), value = _handlers$next.value, done = _handlers$next.done, _handlers$next) && !done)) {
                        context$3$0.next = 16;
                        break;
                      }
  
                      _value = value;
                      _value2 = _slicedToArray(_value, 2);
                      match = _value2[0];
                      handler = _value2[1];
  
                      state.params = match.params;
  
                      if (!(handler.length > 1)) {
                        context$3$0.next = 12;
                        break;
                      }
  
                      context$3$0.next = 9;
                      return regeneratorRuntime.awrap(handler(state, next));
  
                    case 9:
                      context$3$0.t0 = context$3$0.sent;
                      context$3$0.next = 15;
                      break;
  
                    case 12:
                      context$3$0.next = 14;
                      return regeneratorRuntime.awrap(handler(state));
  
                    case 14:
                      context$3$0.t0 = context$3$0.sent;
  
                    case 15:
                      return context$3$0.abrupt('return', context$3$0.t0);
  
                    case 16:
                    case 'end':
                      return context$3$0.stop();
                  }
                }, null, this);
              };
  
              if (typeof state === 'string' || state instanceof String) {
                state = { path: state };
              }
              cb = cb || emptyFunction;
              routes = this.routes;
              handlers = regeneratorRuntime.mark(function callee$2$0() {
                var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, route, match, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, handler;
  
                return regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
                  while (1) switch (context$3$0.prev = context$3$0.next) {
                    case 0:
                      _iteratorNormalCompletion = true;
                      _didIteratorError = false;
                      _iteratorError = undefined;
                      context$3$0.prev = 3;
                      _iterator = routes[Symbol.iterator]();
  
                    case 5:
                      if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                        context$3$0.next = 38;
                        break;
                      }
  
                      route = _step.value;
                      match = route.match(state.path);
  
                      if (!match) {
                        context$3$0.next = 35;
                        break;
                      }
  
                      _iteratorNormalCompletion2 = true;
                      _didIteratorError2 = false;
                      _iteratorError2 = undefined;
                      context$3$0.prev = 12;
                      _iterator2 = match.route.handlers[Symbol.iterator]();
  
                    case 14:
                      if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                        context$3$0.next = 21;
                        break;
                      }
  
                      handler = _step2.value;
                      context$3$0.next = 18;
                      return [match, handler];
  
                    case 18:
                      _iteratorNormalCompletion2 = true;
                      context$3$0.next = 14;
                      break;
  
                    case 21:
                      context$3$0.next = 27;
                      break;
  
                    case 23:
                      context$3$0.prev = 23;
                      context$3$0.t0 = context$3$0['catch'](12);
                      _didIteratorError2 = true;
                      _iteratorError2 = context$3$0.t0;
  
                    case 27:
                      context$3$0.prev = 27;
                      context$3$0.prev = 28;
  
                      if (!_iteratorNormalCompletion2 && _iterator2['return']) {
                        _iterator2['return']();
                      }
  
                    case 30:
                      context$3$0.prev = 30;
  
                      if (!_didIteratorError2) {
                        context$3$0.next = 33;
                        break;
                      }
  
                      throw _iteratorError2;
  
                    case 33:
                      return context$3$0.finish(30);
  
                    case 34:
                      return context$3$0.finish(27);
  
                    case 35:
                      _iteratorNormalCompletion = true;
                      context$3$0.next = 5;
                      break;
  
                    case 38:
                      context$3$0.next = 44;
                      break;
  
                    case 40:
                      context$3$0.prev = 40;
                      context$3$0.t1 = context$3$0['catch'](3);
                      _didIteratorError = true;
                      _iteratorError = context$3$0.t1;
  
                    case 44:
                      context$3$0.prev = 44;
                      context$3$0.prev = 45;
  
                      if (!_iteratorNormalCompletion && _iterator['return']) {
                        _iterator['return']();
                      }
  
                    case 47:
                      context$3$0.prev = 47;
  
                      if (!_didIteratorError) {
                        context$3$0.next = 50;
                        break;
                      }
  
                      throw _iteratorError;
  
                    case 50:
                      return context$3$0.finish(47);
  
                    case 51:
                      return context$3$0.finish(44);
  
                    case 52:
                    case 'end':
                      return context$3$0.stop();
                  }
                }, callee$2$0, this, [[3, 40, 44, 52], [12, 23, 27, 35], [28,, 30, 34], [45,, 47, 51]]);
              })();
              value = undefined, result = undefined, done = false;
  
            case 6:
              if (done) {
                context$2$0.next = 16;
                break;
              }
  
              context$2$0.next = 9;
              return regeneratorRuntime.awrap(next());
  
            case 9:
              result = context$2$0.sent;
  
              if (!result) {
                context$2$0.next = 14;
                break;
              }
  
              state.statusCode = 200;
              cb(state, result);
              return context$2$0.abrupt('return');
  
            case 14:
              context$2$0.next = 6;
              break;
  
            case 16:
              if (!this.events.error) {
                context$2$0.next = 32;
                break;
              }
  
              context$2$0.prev = 17;
  
              state.statusCode = 404;
              context$2$0.next = 21;
              return regeneratorRuntime.awrap(this.events.error(state, new Error('Cannot found a route matching \'' + state.path + '\'.')));
  
            case 21:
              result = context$2$0.sent;
  
              cb(state, result);
              context$2$0.next = 32;
              break;
  
            case 25:
              context$2$0.prev = 25;
              context$2$0.t0 = context$2$0['catch'](17);
  
              state.statusCode = 500;
              context$2$0.next = 30;
              return regeneratorRuntime.awrap(this.events.error(state, context$2$0.t0));
  
            case 30:
              result = context$2$0.sent;
  
              cb(state, result);
  
            case 32:
            case 'end':
              return context$2$0.stop();
          }
        }, null, this, [[17, 25]]);
      }
    }]);
  
    return Router;
  })();
  
  exports['default'] = Router;
  module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Routing | http://www.kriasoft.com/react-routing
   * Copyright (c) Konstantin Tarkus <hello@tarkus.me> | The MIT License
   */
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  var _pathToRegexp = __webpack_require__(9);
  
  var _pathToRegexp2 = _interopRequireDefault(_pathToRegexp);
  
  var _Match = __webpack_require__(11);
  
  var _Match2 = _interopRequireDefault(_Match);
  
  var Route = (function () {
    function Route(path, handlers) {
      _classCallCheck(this, Route);
  
      this.path = path;
      this.handlers = handlers;
      this.regExp = (0, _pathToRegexp2['default'])(path, this.keys = []);
    }
  
    _createClass(Route, [{
      key: 'match',
      value: function match(path) {
        var m = this.regExp.exec(path);
        return m ? new _Match2['default'](this, path, this.keys, m) : null;
      }
    }]);
  
    return Route;
  })();
  
  exports['default'] = Route;
  module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

  var isarray = __webpack_require__(10)
  
  /**
   * Expose `pathToRegexp`.
   */
  module.exports = pathToRegexp
  module.exports.parse = parse
  module.exports.compile = compile
  module.exports.tokensToFunction = tokensToFunction
  module.exports.tokensToRegExp = tokensToRegExp
  
  /**
   * The main path matching regexp utility.
   *
   * @type {RegExp}
   */
  var PATH_REGEXP = new RegExp([
    // Match escaped characters that would otherwise appear in future matches.
    // This allows the user to escape special characters that won't transform.
    '(\\\\.)',
    // Match Express-style parameters and un-named parameters with a prefix
    // and optional suffixes. Matches appear as:
    //
    // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
    // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
    // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
    '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^()])+)\\))?|\\(((?:\\\\.|[^()])+)\\))([+*?])?|(\\*))'
  ].join('|'), 'g')
  
  /**
   * Parse a string for the raw tokens.
   *
   * @param  {String} str
   * @return {Array}
   */
  function parse (str) {
    var tokens = []
    var key = 0
    var index = 0
    var path = ''
    var res
  
    while ((res = PATH_REGEXP.exec(str)) != null) {
      var m = res[0]
      var escaped = res[1]
      var offset = res.index
      path += str.slice(index, offset)
      index = offset + m.length
  
      // Ignore already escaped sequences.
      if (escaped) {
        path += escaped[1]
        continue
      }
  
      // Push the current path onto the tokens.
      if (path) {
        tokens.push(path)
        path = ''
      }
  
      var prefix = res[2]
      var name = res[3]
      var capture = res[4]
      var group = res[5]
      var suffix = res[6]
      var asterisk = res[7]
  
      var repeat = suffix === '+' || suffix === '*'
      var optional = suffix === '?' || suffix === '*'
      var delimiter = prefix || '/'
      var pattern = capture || group || (asterisk ? '.*' : '[^' + delimiter + ']+?')
  
      tokens.push({
        name: name || key++,
        prefix: prefix || '',
        delimiter: delimiter,
        optional: optional,
        repeat: repeat,
        pattern: escapeGroup(pattern)
      })
    }
  
    // Match any characters still remaining.
    if (index < str.length) {
      path += str.substr(index)
    }
  
    // If the path exists, push it onto the end.
    if (path) {
      tokens.push(path)
    }
  
    return tokens
  }
  
  /**
   * Compile a string to a template function for the path.
   *
   * @param  {String}   str
   * @return {Function}
   */
  function compile (str) {
    return tokensToFunction(parse(str))
  }
  
  /**
   * Expose a method for transforming tokens into the path function.
   */
  function tokensToFunction (tokens) {
    // Compile all the tokens into regexps.
    var matches = new Array(tokens.length)
  
    // Compile all the patterns before compilation.
    for (var i = 0; i < tokens.length; i++) {
      if (typeof tokens[i] === 'object') {
        matches[i] = new RegExp('^' + tokens[i].pattern + '$')
      }
    }
  
    return function (obj) {
      var path = ''
      var data = obj || {}
  
      for (var i = 0; i < tokens.length; i++) {
        var token = tokens[i]
  
        if (typeof token === 'string') {
          path += token
  
          continue
        }
  
        var value = data[token.name]
        var segment
  
        if (value == null) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to be defined')
          }
        }
  
        if (isarray(value)) {
          if (!token.repeat) {
            throw new TypeError('Expected "' + token.name + '" to not repeat, but received "' + value + '"')
          }
  
          if (value.length === 0) {
            if (token.optional) {
              continue
            } else {
              throw new TypeError('Expected "' + token.name + '" to not be empty')
            }
          }
  
          for (var j = 0; j < value.length; j++) {
            segment = encodeURIComponent(value[j])
  
            if (!matches[i].test(segment)) {
              throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
            }
  
            path += (j === 0 ? token.prefix : token.delimiter) + segment
          }
  
          continue
        }
  
        segment = encodeURIComponent(value)
  
        if (!matches[i].test(segment)) {
          throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
        }
  
        path += token.prefix + segment
      }
  
      return path
    }
  }
  
  /**
   * Escape a regular expression string.
   *
   * @param  {String} str
   * @return {String}
   */
  function escapeString (str) {
    return str.replace(/([.+*?=^!:${}()[\]|\/])/g, '\\$1')
  }
  
  /**
   * Escape the capturing group by escaping special characters and meaning.
   *
   * @param  {String} group
   * @return {String}
   */
  function escapeGroup (group) {
    return group.replace(/([=!:$\/()])/g, '\\$1')
  }
  
  /**
   * Attach the keys as a property of the regexp.
   *
   * @param  {RegExp} re
   * @param  {Array}  keys
   * @return {RegExp}
   */
  function attachKeys (re, keys) {
    re.keys = keys
    return re
  }
  
  /**
   * Get the flags for a regexp from the options.
   *
   * @param  {Object} options
   * @return {String}
   */
  function flags (options) {
    return options.sensitive ? '' : 'i'
  }
  
  /**
   * Pull out keys from a regexp.
   *
   * @param  {RegExp} path
   * @param  {Array}  keys
   * @return {RegExp}
   */
  function regexpToRegexp (path, keys) {
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g)
  
    if (groups) {
      for (var i = 0; i < groups.length; i++) {
        keys.push({
          name: i,
          prefix: null,
          delimiter: null,
          optional: false,
          repeat: false,
          pattern: null
        })
      }
    }
  
    return attachKeys(path, keys)
  }
  
  /**
   * Transform an array into a regexp.
   *
   * @param  {Array}  path
   * @param  {Array}  keys
   * @param  {Object} options
   * @return {RegExp}
   */
  function arrayToRegexp (path, keys, options) {
    var parts = []
  
    for (var i = 0; i < path.length; i++) {
      parts.push(pathToRegexp(path[i], keys, options).source)
    }
  
    var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options))
  
    return attachKeys(regexp, keys)
  }
  
  /**
   * Create a path regexp from string input.
   *
   * @param  {String} path
   * @param  {Array}  keys
   * @param  {Object} options
   * @return {RegExp}
   */
  function stringToRegexp (path, keys, options) {
    var tokens = parse(path)
    var re = tokensToRegExp(tokens, options)
  
    // Attach keys back to the regexp.
    for (var i = 0; i < tokens.length; i++) {
      if (typeof tokens[i] !== 'string') {
        keys.push(tokens[i])
      }
    }
  
    return attachKeys(re, keys)
  }
  
  /**
   * Expose a function for taking tokens and returning a RegExp.
   *
   * @param  {Array}  tokens
   * @param  {Array}  keys
   * @param  {Object} options
   * @return {RegExp}
   */
  function tokensToRegExp (tokens, options) {
    options = options || {}
  
    var strict = options.strict
    var end = options.end !== false
    var route = ''
    var lastToken = tokens[tokens.length - 1]
    var endsWithSlash = typeof lastToken === 'string' && /\/$/.test(lastToken)
  
    // Iterate over the tokens and create our regexp string.
    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i]
  
      if (typeof token === 'string') {
        route += escapeString(token)
      } else {
        var prefix = escapeString(token.prefix)
        var capture = token.pattern
  
        if (token.repeat) {
          capture += '(?:' + prefix + capture + ')*'
        }
  
        if (token.optional) {
          if (prefix) {
            capture = '(?:' + prefix + '(' + capture + '))?'
          } else {
            capture = '(' + capture + ')?'
          }
        } else {
          capture = prefix + '(' + capture + ')'
        }
  
        route += capture
      }
    }
  
    // In non-strict mode we allow a slash at the end of match. If the path to
    // match already ends with a slash, we remove it for consistency. The slash
    // is valid at the end of a path match, not in the middle. This is important
    // in non-ending mode, where "/test/" shouldn't match "/test//route".
    if (!strict) {
      route = (endsWithSlash ? route.slice(0, -2) : route) + '(?:\\/(?=$))?'
    }
  
    if (end) {
      route += '$'
    } else {
      // In non-ending mode, we need the capturing groups to match as much as
      // possible by using a positive lookahead to the end or next path segment.
      route += strict && endsWithSlash ? '' : '(?=\\/|$)'
    }
  
    return new RegExp('^' + route, flags(options))
  }
  
  /**
   * Normalize the given path string, returning a regular expression.
   *
   * An empty array can be passed in for the keys, which will hold the
   * placeholder key descriptions. For example, using `/user/:id`, `keys` will
   * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
   *
   * @param  {(String|RegExp|Array)} path
   * @param  {Array}                 [keys]
   * @param  {Object}                [options]
   * @return {RegExp}
   */
  function pathToRegexp (path, keys, options) {
    keys = keys || []
  
    if (!isarray(keys)) {
      options = keys
      keys = []
    } else if (!options) {
      options = {}
    }
  
    if (path instanceof RegExp) {
      return regexpToRegexp(path, keys, options)
    }
  
    if (isarray(path)) {
      return arrayToRegexp(path, keys, options)
    }
  
    return stringToRegexp(path, keys, options)
  }


/***/ },
/* 10 */
/***/ function(module, exports) {

  module.exports = Array.isArray || function (arr) {
    return Object.prototype.toString.call(arr) == '[object Array]';
  };


/***/ },
/* 11 */
/***/ function(module, exports) {

  /**
   * React Routing | http://www.kriasoft.com/react-routing
   * Copyright (c) Konstantin Tarkus <hello@tarkus.me> | The MIT License
   */
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  var Match = function Match(route, path, keys, match) {
    _classCallCheck(this, Match);
  
    this.route = route;
    this.path = path;
    this.params = Object.create(null);
    for (var i = 1; i < match.length; i++) {
      this.params[keys[i - 1].name] = decodeParam(match[i]);
    }
  };
  
  function decodeParam(val) {
    if (!(typeof val === 'string' || val instanceof String)) {
      return val;
    }
  
    try {
      return decodeURIComponent(val);
    } catch (e) {
      var err = new TypeError('Failed to decode param \'' + val + '\'');
      err.status = 400;
      throw err;
    }
  }
  
  exports['default'] = Match;
  module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _nodeFetch = __webpack_require__(13);
  
  var _nodeFetch2 = _interopRequireDefault(_nodeFetch);
  
  var _config = __webpack_require__(14);
  
  function localUrl(url) {
    if (url.startsWith('//')) {
      return 'https:' + url;
    }
  
    if (url.startsWith('http')) {
      return url;
    }
  
    return 'http://' + _config.host + url;
  }
  
  function localFetch(url, options) {
    return (0, _nodeFetch2['default'])(localUrl(url), options);
  }
  
  exports['default'] = localFetch;
  exports.Request = _nodeFetch.Request;
  exports.Headers = _nodeFetch.Headers;
  exports.Response = _nodeFetch.Response;

/***/ },
/* 13 */
/***/ function(module, exports) {

  module.exports = require("node-fetch");

/***/ },
/* 14 */
/***/ function(module, exports) {

  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  var port = process.env.PORT || 5000;
  exports.port = port;
  var host = process.env.WEBSITE_HOSTNAME || 'localhost:' + port;
  exports.host = host;
  var googleAnalyticsId = 'UA-XXXXX-X';
  exports.googleAnalyticsId = googleAnalyticsId;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = __webpack_require__(4);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _fbjsLibEmptyFunction = __webpack_require__(16);
  
  var _fbjsLibEmptyFunction2 = _interopRequireDefault(_fbjsLibEmptyFunction);
  
  var _AppScss = __webpack_require__(17);
  
  var _AppScss2 = _interopRequireDefault(_AppScss);
  
  var _Feedback = __webpack_require__(21);
  
  var _Feedback2 = _interopRequireDefault(_Feedback);
  
  var _Footer = __webpack_require__(25);
  
  var _Footer2 = _interopRequireDefault(_Footer);
  
  var App = (function (_Component) {
    _inherits(App, _Component);
  
    function App() {
      _classCallCheck(this, App);
  
      _get(Object.getPrototypeOf(App.prototype), 'constructor', this).apply(this, arguments);
    }
  
    _createClass(App, [{
      key: 'getChildContext',
      value: function getChildContext() {
        var context = this.props.context;
        return {
          insertCss: context.insertCss || _fbjsLibEmptyFunction2['default'],
          onSetTitle: context.onSetTitle || _fbjsLibEmptyFunction2['default'],
          onSetMeta: context.onSetMeta || _fbjsLibEmptyFunction2['default'],
          onPageNotFound: context.onPageNotFound || _fbjsLibEmptyFunction2['default']
        };
      }
    }, {
      key: 'componentWillMount',
      value: function componentWillMount() {
        this.removeCss = this.props.context.insertCss(_AppScss2['default']);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this.removeCss();
      }
    }, {
      key: 'render',
      value: function render() {
        return !this.props.error ? _react2['default'].createElement(
          'div',
          null,
          this.props.children,
          _react2['default'].createElement('div', { className: _AppScss2['default'].fullvideo, style: { backgroundImage: 'url(/fondo.jpg)' } })
        ) : this.props.children;
      }
    }], [{
      key: 'propTypes',
      value: {
        context: _react.PropTypes.shape({
          insertCss: _react.PropTypes.func,
          onSetTitle: _react.PropTypes.func,
          onSetMeta: _react.PropTypes.func,
          onPageNotFound: _react.PropTypes.func
        }),
        children: _react.PropTypes.element.isRequired,
        error: _react.PropTypes.object
      },
      enumerable: true
    }, {
      key: 'childContextTypes',
      value: {
        insertCss: _react.PropTypes.func.isRequired,
        onSetTitle: _react.PropTypes.func.isRequired,
        onSetMeta: _react.PropTypes.func.isRequired,
        onPageNotFound: _react.PropTypes.func.isRequired
      },
      enumerable: true
    }]);
  
    return App;
  })(_react.Component);
  
  exports['default'] = App;
  module.exports = exports['default'];

/***/ },
/* 16 */
/***/ function(module, exports) {

  module.exports = require("fbjs/lib/emptyFunction");

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(18);
      var insertCss = __webpack_require__(20);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = insertCss.bind(null, content);
    

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(19)();
  // imports
  
  
  // module
  exports.push([module.id, "/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background-color:transparent}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:700}dfn{font-style:italic}h1{font-size:2em;margin:.67em 0}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{box-sizing:content-box;height:0}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type=button],input[type=reset],input[type=submit]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{height:auto}input[type=search]{-webkit-appearance:textfield;box-sizing:content-box}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0}textarea{overflow:auto}optgroup{font-weight:700}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}\r\n\r\n/*! React Starter Kit | MIT License | https://www.reactstarterkit.com/ */html{color:#222;font-weight:100;font-size:1em;font-family:Open Sans,HelveticaNeue-Light,sans-serif;line-height:1.375;width:100vw;background-color:#000}body,html{overflow-x:hidden}body{max-width:100vw}::-moz-selection{background:#b3d4fc;text-shadow:none}::selection{background:#b3d4fc;text-shadow:none}hr{display:block;height:1px;border:0;border-top:1px solid #ccc;margin:1em 0;padding:0}audio,canvas,iframe,img,svg,video{vertical-align:middle}fieldset{border:0;margin:0;padding:0}textarea{resize:vertical}.App_browserupgrade_1wH{margin:.2em 0;background:#ccc;color:#000;padding:.2em 0}@media print{*,:after,:before{background:transparent!important;color:#000!important;box-shadow:none!important;text-shadow:none!important}a,a:visited{text-decoration:underline}a[href]:after{content:\" (\" attr(href) \")\"}abbr[title]:after{content:\" (\" attr(title) \")\"}a[href^=\"#\"]:after,a[href^=\"javascript:\"]:after{content:\"\"}blockquote,pre{border:1px solid #999;page-break-inside:avoid}thead{display:table-header-group}img,tr{page-break-inside:avoid}img{max-width:100%!important}h2,h3,p{orphans:3;widows:3}h2,h3{page-break-after:avoid}}.App_fullvideo_AfG{position:fixed;top:50%;left:50%;min-width:100%;min-height:100%;width:auto;height:auto;z-index:-100;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);background-size:cover}", ""]);
  
  // exports
  exports.locals = {
  	"browserupgrade": "App_browserupgrade_1wH",
  	"fullvideo": "App_fullvideo_AfG"
  };

/***/ },
/* 19 */
/***/ function(module, exports) {

  /*
  	MIT License http://www.opensource.org/licenses/mit-license.php
  	Author Tobias Koppers @sokra
  */
  // css base code, injected by the css-loader
  module.exports = function() {
  	var list = [];
  
  	// return the list of modules as css string
  	list.toString = function toString() {
  		var result = [];
  		for(var i = 0; i < this.length; i++) {
  			var item = this[i];
  			if(item[2]) {
  				result.push("@media " + item[2] + "{" + item[1] + "}");
  			} else {
  				result.push(item[1]);
  			}
  		}
  		return result.join("");
  	};
  
  	// import a list of modules into the list
  	list.i = function(modules, mediaQuery) {
  		if(typeof modules === "string")
  			modules = [[null, modules, ""]];
  		var alreadyImportedModules = {};
  		for(var i = 0; i < this.length; i++) {
  			var id = this[i][0];
  			if(typeof id === "number")
  				alreadyImportedModules[id] = true;
  		}
  		for(i = 0; i < modules.length; i++) {
  			var item = modules[i];
  			// skip already imported module
  			// this implementation is not 100% perfect for weird media query combinations
  			//  when a module is imported multiple times with different media queries.
  			//  I hope this will never occur (Hey this way we have smaller bundles)
  			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
  				if(mediaQuery && !item[2]) {
  					item[2] = mediaQuery;
  				} else if(mediaQuery) {
  					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
  				}
  				list.push(item);
  			}
  		}
  	};
  	return list;
  };


/***/ },
/* 20 */
/***/ function(module, exports) {

  'use strict';
  
  var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();
  
  /**
   * Isomorphic CSS style loader for Webpack
   *
   * Copyright © 2015 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var prefix = 's';
  var inserted = {};
  var canUseURL = typeof URL === 'function' && typeof URL.createObjectURL === 'function' && typeof URL.revokeObjectURL === 'function' && typeof Blob === 'function' && typeof btoa === 'function';
  
  /**
   * Remove style/link elements for specified Module IDs
   * if they are no longer referenced by UI components.
   */
  function removeCss(ids) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;
  
    try {
      for (var _iterator = ids[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var id = _step.value;
  
        if (--inserted[id] === 0) {
          var elem = document.getElementById(prefix + id);
          if (elem) {
            elem.parentNode.removeChild(elem);
            if (canUseURL && elem.tagName === 'STYLE' && elem.href) {
              URL.revokeObjectURL(elem.href);
            }
          }
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }
  
  /**
   * Example:
   *   // Insert CSS styles object generated by `css-loader` into DOM
   *   var removeCss = insertCss([[1, 'body { color: red; }']]);
   *
   *   // Remove it from the DOM
   *   removeCss();
   */
  function insertCss(styles) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
  
    var _Object$assign = Object.assign({
      replace: false,
      prepend: false
    }, options);
  
    var replace = _Object$assign.replace;
    var prepend = _Object$assign.prepend;
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;
  
    try {
  
      for (var _iterator2 = styles[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var _step2$value = _slicedToArray(_step2.value, 4);
  
        var id = _step2$value[0];
        var css = _step2$value[1];
        var media = _step2$value[2];
        var sourceMap = _step2$value[3];
  
        if (inserted[id]) {
          if (!replace) {
            inserted[id]++;
            continue;
          }
        }
  
        inserted[id] = 1;
  
        var elem = document.getElementById(prefix + id);
        var create = false;
  
        if (!elem) {
          create = true;
  
          if (sourceMap && canUseURL) {
            elem = document.createElement('link');
            elem.setAttribute('rel', 'stylesheet');
          } else {
            elem = document.createElement('style');
            elem.setAttribute('type', 'text/css');
          }
  
          elem.id = prefix + id;
  
          if (media) {
            elem.setAttribute('media', media);
          }
        }
  
        if (elem.tagName === 'STYLE') {
          if ('textContent' in elem) {
            elem.textContent = css;
          } else {
            elem.styleSheet.cssText = css;
          }
        } else {
          var blob = new Blob([css + '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'], { type: 'text/css' });
  
          var href = elem.href;
          elem.href = URL.createObjectURL(blob);
  
          if (href) {
            URL.revokeObjectURL(href);
          }
        }
  
        if (create) {
          if (prepend) {
            document.head.insertBefore(elem, document.head.childNodes[0]);
          } else {
            document.head.appendChild(elem);
          }
        }
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }
  
    return removeCss.bind(null, styles.map(function (x) {
      return x[0];
    }));
  }
  
  module.exports = insertCss;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = __webpack_require__(4);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _FeedbackScss = __webpack_require__(22);
  
  var _FeedbackScss2 = _interopRequireDefault(_FeedbackScss);
  
  var _decoratorsWithStyles = __webpack_require__(24);
  
  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);
  
  var Feedback = (function (_Component) {
    _inherits(Feedback, _Component);
  
    function Feedback() {
      _classCallCheck(this, _Feedback);
  
      _get(Object.getPrototypeOf(_Feedback.prototype), 'constructor', this).apply(this, arguments);
    }
  
    _createClass(Feedback, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          { className: _FeedbackScss2['default'].root },
          _react2['default'].createElement(
            'div',
            { className: _FeedbackScss2['default'].container },
            _react2['default'].createElement(
              'a',
              { className: _FeedbackScss2['default'].link, href: 'https://gitter.im/kriasoft/react-starter-kit' },
              'Ask a question'
            ),
            _react2['default'].createElement(
              'span',
              { className: _FeedbackScss2['default'].spacer },
              '|'
            ),
            _react2['default'].createElement(
              'a',
              { className: _FeedbackScss2['default'].link, href: 'https://github.com/kriasoft/react-starter-kit/issues/new' },
              'Report an issue'
            )
          )
        );
      }
    }]);
  
    var _Feedback = Feedback;
    Feedback = (0, _decoratorsWithStyles2['default'])(_FeedbackScss2['default'])(Feedback) || Feedback;
    return Feedback;
  })(_react.Component);
  
  exports['default'] = Feedback;
  module.exports = exports['default'];

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(23);
      var insertCss = __webpack_require__(20);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = insertCss.bind(null, content);
    

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(19)();
  // imports
  
  
  // module
  exports.push([module.id, ".Feedback_root_BQQ{background:#f5f5f5;color:#333}.Feedback_container_Te7{margin:0 auto;padding:20px 8px;max-width:1000px;text-align:center;font-size:1.5em}.Feedback_link_1_D,.Feedback_link_1_D:active,.Feedback_link_1_D:hover,.Feedback_link_1_D:visited{color:#333;text-decoration:none}.Feedback_link_1_D:hover{text-decoration:underline}.Feedback_spacer_39X{padding-right:15px;padding-left:15px}", ""]);
  
  // exports
  exports.locals = {
  	"root": "Feedback_root_BQQ",
  	"container": "Feedback_container_Te7",
  	"link": "Feedback_link_1_D",
  	"spacer": "Feedback_spacer_39X"
  };

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = __webpack_require__(4);
  
  var _react2 = _interopRequireDefault(_react);
  
  function withStyles() {
    for (var _len = arguments.length, styles = Array(_len), _key = 0; _key < _len; _key++) {
      styles[_key] = arguments[_key];
    }
  
    return function (BaseComponent) {
      return (function (_Component) {
        _inherits(StyledComponent, _Component);
  
        function StyledComponent() {
          _classCallCheck(this, StyledComponent);
  
          _get(Object.getPrototypeOf(StyledComponent.prototype), 'constructor', this).apply(this, arguments);
        }
  
        _createClass(StyledComponent, [{
          key: 'componentWillMount',
          value: function componentWillMount() {
            this.removeCss = this.context.insertCss.apply(undefined, styles);
          }
        }, {
          key: 'componentWillUnmount',
          value: function componentWillUnmount() {
            this.removeCss();
          }
        }, {
          key: 'render',
          value: function render() {
            return _react2['default'].createElement(BaseComponent, this.props);
          }
        }], [{
          key: 'contextTypes',
          value: {
            insertCss: _react.PropTypes.func.isRequired
          },
          enumerable: true
        }]);
  
        return StyledComponent;
      })(_react.Component);
    };
  }
  
  exports['default'] = withStyles;
  module.exports = exports['default'];

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = __webpack_require__(4);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _FooterScss = __webpack_require__(26);
  
  var _FooterScss2 = _interopRequireDefault(_FooterScss);
  
  var _decoratorsWithStyles = __webpack_require__(24);
  
  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);
  
  var _Link = __webpack_require__(28);
  
  var _Link2 = _interopRequireDefault(_Link);
  
  var Footer = (function (_Component) {
    _inherits(Footer, _Component);
  
    function Footer() {
      _classCallCheck(this, _Footer);
  
      _get(Object.getPrototypeOf(_Footer.prototype), 'constructor', this).apply(this, arguments);
    }
  
    _createClass(Footer, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          { className: _FooterScss2['default'].root },
          _react2['default'].createElement(
            'div',
            { className: _FooterScss2['default'].container },
            _react2['default'].createElement(
              'span',
              { className: _FooterScss2['default'].text },
              _react2['default'].createElement('img', { src: '/semana.png' })
            ),
            _react2['default'].createElement(
              _Link2['default'],
              { className: _FooterScss2['default'].link, to: '/' },
              _react2['default'].createElement('img', { src: '/utec.png' })
            ),
            _react2['default'].createElement(
              _Link2['default'],
              { className: _FooterScss2['default'].link, to: '/' },
              _react2['default'].createElement('img', { src: '/alta.png' })
            ),
            _react2['default'].createElement(
              _Link2['default'],
              { className: _FooterScss2['default'].link, to: '/' },
              _react2['default'].createElement('img', { src: '/yno.png' })
            ),
            _react2['default'].createElement(
              _Link2['default'],
              { className: _FooterScss2['default'].link, to: '/' },
              _react2['default'].createElement('img', { src: '/kickstarter.png' })
            ),
            _react2['default'].createElement(
              _Link2['default'],
              { className: _FooterScss2['default'].link, to: '/' },
              _react2['default'].createElement('img', { src: '/comercio.png' })
            ),
            _react2['default'].createElement(
              _Link2['default'],
              { className: _FooterScss2['default'].link, to: '/' },
              _react2['default'].createElement('img', { src: '/start.png' })
            )
          )
        );
      }
    }]);
  
    var _Footer = Footer;
    Footer = (0, _decoratorsWithStyles2['default'])(_FooterScss2['default'])(Footer) || Footer;
    return Footer;
  })(_react.Component);
  
  exports['default'] = Footer;
  module.exports = exports['default'];

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(27);
      var insertCss = __webpack_require__(20);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = insertCss.bind(null, content);
    

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(19)();
  // imports
  
  
  // module
  exports.push([module.id, ".Footer_root_2bW{background:#333;color:#fff;position:fixed;bottom:0;width:100%}.Footer_container_2UR{margin:0 auto;padding:5px 15px;text-align:left}.Footer_text_3NI{color:hsla(0,0%,100%,.5)}.Footer_spacer_22t,.Footer_textMuted_1Me{color:hsla(0,0%,100%,.3)}.Footer_link_wim,.Footer_text_3NI{padding:2px 20px;font-size:1em;width:12%;display:inline-block}.Footer_link_wim,.Footer_link_wim:active,.Footer_link_wim:visited{color:hsla(0,0%,100%,.6);text-decoration:none}.Footer_link_wim:hover{color:#fff}", ""]);
  
  // exports
  exports.locals = {
  	"root": "Footer_root_2bW",
  	"container": "Footer_container_2UR",
  	"text": "Footer_text_3NI",
  	"textMuted": "Footer_textMuted_1Me Footer_text_3NI",
  	"spacer": "Footer_spacer_22t",
  	"link": "Footer_link_wim"
  };

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _this = this;
  
  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = __webpack_require__(4);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _historyLibParsePath = __webpack_require__(29);
  
  var _historyLibParsePath2 = _interopRequireDefault(_historyLibParsePath);
  
  var _coreLocation = __webpack_require__(30);
  
  var _coreLocation2 = _interopRequireDefault(_coreLocation);
  
  function isLeftClickEvent(event) {
    return event.button === 0;
  }
  
  function isModifiedEvent(event) {
    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
  }
  
  var Link = (function (_Component) {
    _inherits(Link, _Component);
  
    function Link() {
      _classCallCheck(this, Link);
  
      _get(Object.getPrototypeOf(Link.prototype), 'constructor', this).apply(this, arguments);
    }
  
    _createClass(Link, [{
      key: 'render',
      value: function render() {
        var _props = this.props;
        var to = _props.to;
        var query = _props.query;
  
        var props = _objectWithoutProperties(_props, ['to', 'query']);
  
        return _react2['default'].createElement('a', _extends({ href: _coreLocation2['default'].createHref(to, query), onClick: Link.handleClick.bind(this) }, props));
      }
    }], [{
      key: 'propTypes',
      value: {
        to: _react.PropTypes.string.isRequired,
        query: _react.PropTypes.object,
        state: _react.PropTypes.object,
        onClick: _react.PropTypes.func
      },
      enumerable: true
    }, {
      key: 'handleClick',
      value: function value(event) {
        var allowTransition = true;
        var clickResult = undefined;
  
        if (_this.props && _this.props.onClick) {
          clickResult = _this.props.onClick(event);
        }
  
        if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
          return;
        }
  
        if (clickResult === false || event.defaultPrevented === true) {
          allowTransition = false;
        }
  
        event.preventDefault();
  
        if (allowTransition) {
          var link = event.currentTarget;
          if (_this.props && _this.props.to) {
            _coreLocation2['default'].push(_extends({}, (0, _historyLibParsePath2['default'])(_this.props.to), {
              state: _this.props && _this.props.state || null
            }));
          } else {
            _coreLocation2['default'].push({
              pathname: link.pathname,
              search: link.search,
              state: _this.props && _this.props.state || null
            });
          }
        }
      },
      enumerable: true
    }]);
  
    return Link;
  })(_react.Component);
  
  exports['default'] = Link;
  module.exports = exports['default'];

/***/ },
/* 29 */
/***/ function(module, exports) {

  module.exports = require("history/lib/parsePath");

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _fbjsLibExecutionEnvironment = __webpack_require__(31);
  
  var _historyLibCreateBrowserHistory = __webpack_require__(32);
  
  var _historyLibCreateBrowserHistory2 = _interopRequireDefault(_historyLibCreateBrowserHistory);
  
  var _historyLibCreateMemoryHistory = __webpack_require__(33);
  
  var _historyLibCreateMemoryHistory2 = _interopRequireDefault(_historyLibCreateMemoryHistory);
  
  var _historyLibUseQueries = __webpack_require__(34);
  
  var _historyLibUseQueries2 = _interopRequireDefault(_historyLibUseQueries);
  
  var location = (0, _historyLibUseQueries2['default'])(_fbjsLibExecutionEnvironment.canUseDOM ? _historyLibCreateBrowserHistory2['default'] : _historyLibCreateMemoryHistory2['default'])();
  
  exports['default'] = location;
  module.exports = exports['default'];

/***/ },
/* 31 */
/***/ function(module, exports) {

  module.exports = require("fbjs/lib/ExecutionEnvironment");

/***/ },
/* 32 */
/***/ function(module, exports) {

  module.exports = require("history/lib/createBrowserHistory");

/***/ },
/* 33 */
/***/ function(module, exports) {

  module.exports = require("history/lib/createMemoryHistory");

/***/ },
/* 34 */
/***/ function(module, exports) {

  module.exports = require("history/lib/useQueries");

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = __webpack_require__(4);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _ContentPageScss = __webpack_require__(36);
  
  var _ContentPageScss2 = _interopRequireDefault(_ContentPageScss);
  
  var _decoratorsWithStyles = __webpack_require__(24);
  
  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);
  
  var ContentPage = (function (_Component) {
    _inherits(ContentPage, _Component);
  
    function ContentPage() {
      _classCallCheck(this, _ContentPage);
  
      _get(Object.getPrototypeOf(_ContentPage.prototype), 'constructor', this).apply(this, arguments);
    }
  
    _createClass(ContentPage, [{
      key: 'render',
      value: function render() {
        this.context.onSetTitle(this.props.title);
  
        return _react2['default'].createElement(
          'div',
          { className: _ContentPageScss2['default'].root },
          _react2['default'].createElement(
            'div',
            { className: _ContentPageScss2['default'].container },
            this.props.path === '/' ? null : _react2['default'].createElement(
              'h1',
              null,
              this.props.title
            ),
            _react2['default'].createElement('div', { dangerouslySetInnerHTML: { __html: this.props.content || '' } })
          )
        );
      }
    }], [{
      key: 'propTypes',
      value: {
        path: _react.PropTypes.string.isRequired,
        content: _react.PropTypes.string.isRequired,
        title: _react.PropTypes.string
      },
      enumerable: true
    }, {
      key: 'contextTypes',
      value: {
        onSetTitle: _react.PropTypes.func.isRequired
      },
      enumerable: true
    }]);
  
    var _ContentPage = ContentPage;
    ContentPage = (0, _decoratorsWithStyles2['default'])(_ContentPageScss2['default'])(ContentPage) || ContentPage;
    return ContentPage;
  })(_react.Component);
  
  exports['default'] = ContentPage;
  module.exports = exports['default'];

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(37);
      var insertCss = __webpack_require__(20);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = insertCss.bind(null, content);
    

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(19)();
  // imports
  
  
  // module
  exports.push([module.id, ".ContentPage_container_2WS{margin:0 auto;padding:0 0 40px;max-width:1000px}.ContentPage_logo_1C7{margin:0 auto}.ContentPage_root_9Fj a{width:500px;display:block;background-color:#0052a1;color:#fff;font-size:30px;margin:20px auto;padding:5px;border-radius:10px;text-decoration:none}.ContentPage_root_9Fj h5{font-size:42px;color:#fff;font-weight:300;letter-spacing:1px;margin:10px}", ""]);
  
  // exports
  exports.locals = {
  	"root": "ContentPage_root_9Fj",
  	"container": "ContentPage_container_2WS",
  	"logo": "ContentPage_logo_1C7"
  };

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = __webpack_require__(4);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _InitPageScss = __webpack_require__(39);
  
  var _InitPageScss2 = _interopRequireDefault(_InitPageScss);
  
  var _classnames = __webpack_require__(41);
  
  var _classnames2 = _interopRequireDefault(_classnames);
  
  var _Link = __webpack_require__(28);
  
  var _Link2 = _interopRequireDefault(_Link);
  
  var _decoratorsWithStyles = __webpack_require__(24);
  
  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);
  
  var _reactDom = __webpack_require__(42);
  
  var _reactDom2 = _interopRequireDefault(_reactDom);
  
  var _reactScroll = __webpack_require__(43);
  
  var _Header = __webpack_require__(44);
  
  var _Header2 = _interopRequireDefault(_Header);
  
  var _coreLocation = __webpack_require__(30);
  
  var _coreLocation2 = _interopRequireDefault(_coreLocation);
  
  _classnames2['default'].bind(_InitPageScss2['default']);
  
  var title = 'DILOO APP';
  
  var InitPage = (function (_Component) {
    _inherits(InitPage, _Component);
  
    function InitPage(props) {
      _classCallCheck(this, _InitPage);
  
      _get(Object.getPrototypeOf(_InitPage.prototype), 'constructor', this).call(this, props);
      this.state = { margin: 0, no_menu: true, open_menu: 0, height: 600, on_servicio: 0, mouse_on: false, sms: false };
    }
  
    _createClass(InitPage, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this.context.onSetTitle(title);
      }
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
  
        this.setState({ height: window.innerHeight });
        _reactScroll.scroller.scrollTo(this.props.is, true, 0, 0);
      }
    }, {
      key: 'handleResize',
      value: function handleResize() {}
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {
  
        _reactScroll.scroller.scrollTo(this.props.is, true, 0, 0);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        _reactScroll.scrollSpy.unmount();
        _reactScroll.scroller.unmount();
        window.removeEventListener('resize', this.handleResize);
      }
    }, {
      key: 'toggleMenu',
      value: function toggleMenu(event) {
        console.log(_reactScroll.scroller);
        if (this.state.open_menu == 0) {
          this.setState({ open_menu: 1 });
        } else {
          this.setState({ open_menu: 0 });
        }
      }
    }, {
      key: 'onServicio',
      value: function onServicio(servicio, e) {
        console.log(e);
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
  
        this.setState({ mouse_on: true, on_servicio: servicio });
      }
    }, {
      key: 'offServicio',
      value: function offServicio(e) {
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        this.setState({ mouse_on: false });
      }
    }, {
      key: 'callSms',
      value: function callSms() {
        this.setState({ sms: true });
      }
    }, {
      key: 'render',
      value: function render() {
  
        var reg = (0, _classnames2['default'])(_InitPageScss2['default'].back_white);
        var is = false;
        var started = (0, _classnames2['default'])();
        if (this.props.as == 3) {
          reg = (0, _classnames2['default'])(_InitPageScss2['default'].back_white, _InitPageScss2['default'].on);
          is = true;
        }
        var is_menu = (0, _classnames2['default'])(_InitPageScss2['default'].head);
        var arrow = (0, _classnames2['default'])();
  
        if (this.props.is != 'init') {
          is_menu = (0, _classnames2['default'])(_InitPageScss2['default'].menu_show, _InitPageScss2['default'].head);
          arrow = (0, _classnames2['default'])(_InitPageScss2['default'].hide);
          started = (0, _classnames2['default'])(_InitPageScss2['default'].show);
        }
        var on_this = _InitPageScss2['default'].on;
        return _react2['default'].createElement(
          'div',
          { className: _InitPageScss2['default'].root },
          _react2['default'].createElement(
            'div',
            { className: is_menu },
            _react2['default'].createElement(_Header2['default'], { is: is, open_menu: this.state.open_menu, menu: this.props.is, toggle: this.toggleMenu.bind(this) })
          ),
          _react2['default'].createElement(
            _Link2['default'],
            { to: '/inicio', className: arrow },
            _react2['default'].createElement(
              'svg',
              { className: 'arrows' },
              _react2['default'].createElement('path', { className: 'a1', d: 'M0 0 L30 32 L60 0' }),
              _react2['default'].createElement('path', { className: 'a2', d: 'M0 20 L30 52 L60 20' }),
              _react2['default'].createElement('path', { clasName: 'a3', d: 'M0 40 L30 72 L60 40' })
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: _InitPageScss2['default'].wide, ref: 'stage', style: { marginLeft: -(this.props.as * 100) + 'vw' } },
            _react2['default'].createElement(
              'div',
              { className: _InitPageScss2['default'].stage },
              _react2['default'].createElement(
                'div',
                { className: _InitPageScss2['default'].container },
                _react2['default'].createElement(
                  'div',
                  { className: _InitPageScss2['default'].centerDiv },
                  _react2['default'].createElement('img', { src: '/diloo-big.png', className: _InitPageScss2['default'].logo, style: { marginTop: this.state.height / 2 - 200 } })
                )
              )
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: started },
            _react2['default'].createElement(_reactScroll.Element, { name: 'init' }),
            _react2['default'].createElement(
              _reactScroll.Element,
              { name: 'inicio' },
              _react2['default'].createElement(
                'div',
                { className: _InitPageScss2['default'].element },
                _react2['default'].createElement(
                  'div',
                  { className: _InitPageScss2['default'].black_ground },
                  _react2['default'].createElement(
                    'h2',
                    { className: (0, _classnames2['default'])(_InitPageScss2['default'].big, _InitPageScss2['default'].white, _InitPageScss2['default'].center_is) },
                    'Calidad y eficiencia en soluciones de comunicación con el cliente'
                  )
                )
              )
            ),
            _react2['default'].createElement(
              _reactScroll.Element,
              { name: 'servicios' },
              _react2['default'].createElement(
                'div',
                { className: _InitPageScss2['default'].element },
                _react2['default'].createElement(
                  'div',
                  { className: (0, _classnames2['default'])(_InitPageScss2['default'].fullblack, _InitPageScss2['default'].right, _InitPageScss2['default'].sub, _InitPageScss2['default'].white, _InitPageScss2['default'].thin), style: { textAlign: 'right' } },
                  _react2['default'].createElement(
                    'div',
                    { style: { paddingTop: '240px' } },
                    _react2['default'].createElement(
                      'h4',
                      { className: _InitPageScss2['default'].thin },
                      'Servicio de venta on-line y ',
                      _react2['default'].createElement(
                        'b',
                        null,
                        'Comunicación Masiva'
                      ),
                      _react2['default'].createElement('br', null),
                      ' personalizada para empresas'
                    )
                  )
                ),
                _react2['default'].createElement(
                  'div',
                  { className: (0, _classnames2['default'])(_InitPageScss2['default'].grid) },
                  _react2['default'].createElement(
                    _Link2['default'],
                    { to: '/servicios/sms', onClick: this.callSms.bind(this), className: (0, _classnames2['default'])(_InitPageScss2['default'].grid_child, _InitPageScss2['default'].cielo, { on_cielo: this.state.mouse_on && this.state.on_servicio == 1 }), onMouseOver: this.onServicio.bind(this, 1), onMouseOut: this.offServicio.bind(this) },
                    _react2['default'].createElement(
                      'div',
                      { className: _InitPageScss2['default'].full_center },
                      _react2['default'].createElement('img', { src: '/sms.png' }),
                      _react2['default'].createElement(
                        'h4',
                        { className: (0, _classnames2['default'])(_InitPageScss2['default'].white, _InitPageScss2['default'].sub) },
                        'SOLUCIONES SMS '
                      )
                    )
                  ),
                  _react2['default'].createElement(
                    _Link2['default'],
                    { to: '/servicios/voz', className: (0, _classnames2['default'])(_InitPageScss2['default'].grid_child, { velvet: this.state.mouse_on && this.state.on_servicio == 2 }), onMouseOver: this.onServicio.bind(this, 2), onMouseOut: this.offServicio.bind(this) },
                    _react2['default'].createElement(
                      'div',
                      { className: _InitPageScss2['default'].full_center },
                      _react2['default'].createElement('img', { src: '/voz.png' }),
                      _react2['default'].createElement(
                        'h4',
                        { className: (0, _classnames2['default'])(_InitPageScss2['default'].white, _InitPageScss2['default'].sub) },
                        'MENSAJES DE VOZ '
                      )
                    )
                  ),
                  _react2['default'].createElement(
                    _Link2['default'],
                    { to: '/servicios/sales', className: (0, _classnames2['default'])(_InitPageScss2['default'].grid_child, { blood: this.state.mouse_on && this.state.on_servicio == 3 }), onMouseOver: this.onServicio.bind(this, 3), onMouseOut: this.offServicio.bind(this) },
                    _react2['default'].createElement(
                      'div',
                      { className: _InitPageScss2['default'].full_center },
                      _react2['default'].createElement('img', { src: '/sales.png' }),
                      _react2['default'].createElement(
                        'h4',
                        { className: (0, _classnames2['default'])(_InitPageScss2['default'].white, _InitPageScss2['default'].sub) },
                        'CLICK TO SALES '
                      )
                    )
                  ),
                  _react2['default'].createElement(
                    _Link2['default'],
                    { to: '/servicios/mailing', className: (0, _classnames2['default'])(_InitPageScss2['default'].grid_child, { green: this.state.mouse_on && this.state.on_servicio == 4 }), onMouseOver: this.onServicio.bind(this, 4), onMouseOut: this.offServicio.bind(this) },
                    _react2['default'].createElement(
                      'div',
                      { className: _InitPageScss2['default'].full_center },
                      _react2['default'].createElement('img', { src: '/mailing.png' }),
                      _react2['default'].createElement(
                        'h4',
                        { className: (0, _classnames2['default'])(_InitPageScss2['default'].white, _InitPageScss2['default'].sub) },
                        'MAILING '
                      )
                    )
                  )
                )
              )
            ),
            _react2['default'].createElement(
              _reactScroll.Element,
              { name: 'contacto' },
              _react2['default'].createElement(
                'div',
                { className: _InitPageScss2['default'].element },
                _react2['default'].createElement(
                  'div',
                  { className: (0, _classnames2['default'])(_InitPageScss2['default'].fullwhite, _InitPageScss2['default'].center) },
                  _react2['default'].createElement(
                    'div',
                    { style: { paddingTop: '40px' } },
                    _react2['default'].createElement('img', { src: '/blue-diloo.png' })
                  )
                )
              )
            )
          ),
          (function () {
  
            if (this.props.servicio == 'sms') {
              return _react2['default'].createElement(
                'div',
                { className: _InitPageScss2['default'].servicio_show },
                _react2['default'].createElement(
                  'div',
                  { className: (0, _classnames2['default'])(_InitPageScss2['default'].fullwhite, _InitPageScss2['default'].center), style: { backgroundImage: 'url(' + __webpack_require__(52) + ')' } },
                  _react2['default'].createElement('img', { src: '/sms.png', className: _InitPageScss2['default'].icon_position }),
                  ' ',
                  _react2['default'].createElement(
                    'h5',
                    { className: (0, _classnames2['default'])("on_cielo", _InitPageScss2['default'].servicio_title) },
                    'SOLUCIONES SMS'
                  )
                ),
                _react2['default'].createElement(
                  'div',
                  { className: _InitPageScss2['default'].grid },
                  _react2['default'].createElement(
                    _Link2['default'],
                    { to: '/servicios' },
                    'Cerrar'
                  )
                )
              );
            }
            if (this.props.servicio == 'voz') {
              return _react2['default'].createElement(
                'div',
                { className: _InitPageScss2['default'].servicio_show },
                _react2['default'].createElement(
                  'div',
                  { className: (0, _classnames2['default'])(_InitPageScss2['default'].fullwhite, _InitPageScss2['default'].center), style: { backgroundImage: 'url(' + __webpack_require__(53) + ')' } },
                  _react2['default'].createElement('img', { src: '/voz.png', className: _InitPageScss2['default'].icon_position }),
                  ' ',
                  _react2['default'].createElement(
                    'h5',
                    { className: (0, _classnames2['default'])("velvet", _InitPageScss2['default'].servicio_title) },
                    'MENSAJES DE VOZ'
                  )
                )
              );
            }
            if (this.props.servicio == 'sales') {
              return _react2['default'].createElement(
                'div',
                { className: _InitPageScss2['default'].servicio_show },
                _react2['default'].createElement(
                  'div',
                  { className: (0, _classnames2['default'])(_InitPageScss2['default'].fullwhite, _InitPageScss2['default'].center), style: { backgroundImage: 'url(' + __webpack_require__(52) + ')' } },
                  _react2['default'].createElement('img', { src: '/sales.png', className: _InitPageScss2['default'].icon_position }),
                  ' ',
                  _react2['default'].createElement(
                    'h5',
                    { className: (0, _classnames2['default'])("velvet", _InitPageScss2['default'].servicio_title) },
                    'SOLUCIONES SMS'
                  )
                )
              );
            }
            if (this.props.servicio == 'mailing') {
              return _react2['default'].createElement(
                'div',
                { className: _InitPageScss2['default'].servicio_show },
                _react2['default'].createElement(
                  'div',
                  { className: (0, _classnames2['default'])(_InitPageScss2['default'].fullwhite, _InitPageScss2['default'].center), style: { backgroundImage: 'url(' + __webpack_require__(52) + ')' } },
                  _react2['default'].createElement('img', { src: '/mailing.png', className: _InitPageScss2['default'].icon_position }),
                  ' ',
                  _react2['default'].createElement(
                    'h5',
                    { className: (0, _classnames2['default'])("velvet", _InitPageScss2['default'].servicio_title) },
                    'SOLUCIONES SMS'
                  )
                )
              );
            }
          }).call(this)
        );
      }
    }], [{
      key: 'contextTypes',
      value: {
        onSetTitle: _react.PropTypes.func.isRequired
      },
      enumerable: true
    }]);
  
    var _InitPage = InitPage;
    InitPage = (0, _decoratorsWithStyles2['default'])(_InitPageScss2['default'])(InitPage) || InitPage;
    return InitPage;
  })(_react.Component);
  
  exports['default'] = InitPage;
  module.exports = exports['default'];

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(40);
      var insertCss = __webpack_require__(20);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = insertCss.bind(null, content);
    

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(19)();
  // imports
  
  
  // module
  exports.push([module.id, ".InitPage_container_1rm{margin:0 auto;padding:0 0 40px;text-align:center;height:100vh}.InitPage_full_center_dBM{vertical-align:middle;text-align:center;padding-top:24%}.InitPage_stage_1DH{width:100vw;height:100vh;position:fixed;z-index:9999}.InitPage_no_margin_2fS{margin:0}.InitPage_logo_1Oe{width:900px}.InitPage_download_btn_1Fr{width:500px;display:block;background-color:#0052a1;color:#fff;font-size:30px;margin:20px auto;padding:5px;border-radius:10px;text-decoration:none}.InitPage_root_2hh h5{font-size:42px;color:#fff;font-weight:300;letter-spacing:1px;margin:10px}.InitPage_black_ground_y2U{width:100vw;height:100vh;background-color:rgba(0,0,0,.4);position:absolute}.InitPage_center_is_3vG{width:60vw;margin:20vh auto}.InitPage_element_3SQ{width:100vw;height:100vh;position:relative;visibility:hidden;-webkit-transition:visibility 0s,opacity .5s;transition:visibility 0s,opacity .5s;opacity:0;-webkit-transition-delay:opacity .5s;transition-delay:opacity .5s;left:40px}.InitPage_show_eeE .InitPage_element_3SQ{visibility:visible;opacity:1}.InitPage_slide_1s3{width:100%;-webkit-transition:all 1s;transition:all 1s}.InitPage_wide_2A5{width:100vw;-webkit-transition:all .5s;transition:all .5s}.InitPage_play_btn_19y{margin:0 10px;display:inline-block}.InitPage_white_35g h4{margin-right:5px}.InitPage_white_35g{color:#fff!important}.InitPage_inline_3PL{display:inline-block;line-height:0}.InitPage_yellow_2bn{color:#f6e00f}.InitPage_big_4hz{font-size:4.5rem;line-height:1.6em}.InitPage_sub_MW4{font-size:30px}.InitPage_left_2ay{text-align:left}.InitPage_blue_btn_30M{display:inline-block;background-color:#0052a1;color:#fff;font-size:30px;font-weight:700;padding:10px 20px;border-radius:5px;text-decoration:none}.InitPage_thin_CI_{font-weight:300}.InitPage_three_3j1{width:31%;float:left;padding:1%;border-right:1px solid #fff}.InitPage_one_1TT{width:14%;float:left;padding:2%}.InitPage_six_28A{width:64%;float:left;padding:1%}.InitPage_center_1p3{text-align:center}.InitPage_small_1Xx{font-size:16px;font-weight:200}.InitPage_middle_1pW{font-size:60px}.InitPage_form_1kD{background-color:rgba(35,36,38,.8);padding:30px 60px 20px 0;text-align:center;border-right:none}.InitPage_two_2mX{width:40%;float:left;margin-left:8%}.InitPage_input_1Vd{border:none;background-color:transparent;border-bottom:2px dotted hsla(0,0%,100%,.6);font-size:26px;margin-top:30px}.InitPage_back_white_348{background-color:#fff;height:100vh;width:0;top:0;position:fixed;right:0;-webkit-transition:width .5s;transition:width .5s;overflow:hidden}.InitPage_back_white_348.InitPage_on_3hW{width:50%}.InitPage_black_input_8Xy{color:#000;border-bottom-color:#ccc}.InitPage_white_btn_2rT{clear:both;border:1px solid #ccc;box-shadow:5px 5px 2px 0 #999;border-radius:4px;background-color:#fff;padding:2px 20px;font-size:30px;font-weight:500}.InitPage_hide_2Md{opacity:0}.InitPage_head_3iV{-webkit-transition:visibility 0s,opacity .5s;transition:visibility 0s,opacity .5s;opacity:0}.InitPage_menu_show_16I{visibility:visible;opacity:1}.InitPage_fullwhite_1Nv{width:30vw;height:100vh;background-color:#fff;padding:0 20px}.InitPage_servicio_show_sv8 .InitPage_fullwhite_1Nv{padding:0;position:relative;background-size:cover}.InitPage_fullblack_zsK{width:30vw;height:100vh;background-color:rgba(0,0,0,.6);padding:0 20px}.InitPage_grid_2FI{position:absolute;right:0;top:0;width:68vw}.InitPage_grid_child_1PD{height:50vh;width:calc(50% - 2px);border:1px solid;float:left;background-color:transparent;-webkit-transition:background-color .5s;transition:background-color .5s;cursor:pointer;text-decoration:none;outline:none;color:trasparent}.InitPage_servicio_show_sv8{position:fixed;background-color:#fff;top:0;width:calc(100% - 50px);height:100vh;right:0;padding:0}.InitPage_icon_position_1Wt{position:absolute;left:3vw;width:70px;top:10vh}.InitPage_servicio_title_3bo{position:absolute;right:0;top:10vh;padding:20px;margin:0!important}.on_cielo{background-color:#1d71b8}.velvet{background-color:#6f55bf}.blood,.green{background-color:#e0665b}@media (max-width:1000px){.InitPage_logo_1Oe{width:60vw!important}.InitPage_mov_hide_dK-{display:none}.InitPage_download_btn_1Fr{width:60vw}.InitPage_root_2hh{padding-top:90px;font-size:90%}.InitPage_stage_1DH{padding:2vw}.InitPage_stage_1DH .InitPage_container_1rm{width:80vw}.InitPage_big_4hz{line-height:70px;text-align:center;font-size:3rem}.InitPage_play_btn_19y{display:block}.InitPage_blue_btn_30M{font-size:20px}.InitPage_sub_MW4{text-align:center!important;font-size:24px}.InitPage_big_4hz br{display:none}.InitPage_three_3j1{width:100%;text-align:center!important;border-right:none}.InitPage_yellow_2bn{margin-bottom:0}.InitPage_one_1TT{width:80vw;text-align:center!important}.InitPage_form_1kD{width:90vw!important;margin-left:-10vw;margin-top:20px;font-size:20px;left:0}.InitPage_lose_12N{width:90vw;text-align:center!important;margin:0}.InitPage_back_white_348.InitPage_on_3hW{width:100%;top:50px}}", ""]);
  
  // exports
  exports.locals = {
  	"root": "InitPage_root_2hh",
  	"container": "InitPage_container_1rm",
  	"full_center": "InitPage_full_center_dBM",
  	"stage": "InitPage_stage_1DH",
  	"no_margin": "InitPage_no_margin_2fS",
  	"logo": "InitPage_logo_1Oe",
  	"download_btn": "InitPage_download_btn_1Fr",
  	"black_ground": "InitPage_black_ground_y2U",
  	"center_is": "InitPage_center_is_3vG",
  	"element": "InitPage_element_3SQ",
  	"show": "InitPage_show_eeE",
  	"slide": "InitPage_slide_1s3",
  	"wide": "InitPage_wide_2A5",
  	"play_btn": "InitPage_play_btn_19y",
  	"white": "InitPage_white_35g",
  	"inline": "InitPage_inline_3PL",
  	"yellow": "InitPage_yellow_2bn",
  	"big": "InitPage_big_4hz",
  	"sub": "InitPage_sub_MW4",
  	"left": "InitPage_left_2ay",
  	"blue_btn": "InitPage_blue_btn_30M",
  	"thin": "InitPage_thin_CI_",
  	"three": "InitPage_three_3j1",
  	"one": "InitPage_one_1TT",
  	"six": "InitPage_six_28A",
  	"center": "InitPage_center_1p3",
  	"small": "InitPage_small_1Xx",
  	"middle": "InitPage_middle_1pW",
  	"form": "InitPage_form_1kD",
  	"two": "InitPage_two_2mX",
  	"input": "InitPage_input_1Vd",
  	"back_white": "InitPage_back_white_348",
  	"on": "InitPage_on_3hW",
  	"black_input": "InitPage_black_input_8Xy",
  	"white_btn": "InitPage_white_btn_2rT",
  	"hide": "InitPage_hide_2Md",
  	"head": "InitPage_head_3iV",
  	"menu_show": "InitPage_menu_show_16I",
  	"fullwhite": "InitPage_fullwhite_1Nv",
  	"servicio_show": "InitPage_servicio_show_sv8",
  	"fullblack": "InitPage_fullblack_zsK",
  	"grid": "InitPage_grid_2FI",
  	"grid_child": "InitPage_grid_child_1PD",
  	"icon_position": "InitPage_icon_position_1Wt",
  	"servicio_title": "InitPage_servicio_title_3bo",
  	"mov_hide": "InitPage_mov_hide_dK-",
  	"lose": "InitPage_lose_12N"
  };

/***/ },
/* 41 */
/***/ function(module, exports) {

  module.exports = require("classnames");

/***/ },
/* 42 */
/***/ function(module, exports) {

  module.exports = require("react-dom");

/***/ },
/* 43 */
/***/ function(module, exports) {

  module.exports = require("react-scroll");

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = __webpack_require__(4);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _HeaderScss = __webpack_require__(45);
  
  var _HeaderScss2 = _interopRequireDefault(_HeaderScss);
  
  var _decoratorsWithStyles = __webpack_require__(24);
  
  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);
  
  var _Link = __webpack_require__(28);
  
  var _Link2 = _interopRequireDefault(_Link);
  
  var _classnames = __webpack_require__(41);
  
  var _classnames2 = _interopRequireDefault(_classnames);
  
  var _Navigation = __webpack_require__(47);
  
  var _Navigation2 = _interopRequireDefault(_Navigation);
  
  var Header = (function (_Component) {
    _inherits(Header, _Component);
  
    function Header(props) {
      _classCallCheck(this, _Header);
  
      _get(Object.getPrototypeOf(_Header.prototype), 'constructor', this).call(this, props);
      this.state = { open: 0 };
    }
  
    _createClass(Header, [{
      key: 'render',
      value: function render() {
        var cl = (0, _classnames2['default'])(_HeaderScss2['default'].root);
        var minilogo = (0, _classnames2['default'])(_HeaderScss2['default'].lefy);
        var logo = (0, _classnames2['default'])(_HeaderScss2['default'].logo, _HeaderScss2['default'].hide);
        if (this.props.open_menu == 1) {
          cl = (0, _classnames2['default'])(_HeaderScss2['default'].root, _HeaderScss2['default'].open);
          minilogo = (0, _classnames2['default'])(_HeaderScss2['default'].lefy, _HeaderScss2['default'].hide);
          logo = (0, _classnames2['default'])(_HeaderScss2['default'].logo);
        }
  
        console.log(this.props);
        return _react2['default'].createElement(
          'div',
          { className: cl },
          _react2['default'].createElement(
            'button',
            { className: _HeaderScss2['default'].btn_menu, onClick: this.props.toggle.bind(this) },
            _react2['default'].createElement(
              'span',
              { className: _HeaderScss2['default'].ham },
              _react2['default'].createElement('span', null),
              _react2['default'].createElement('span', null),
              _react2['default'].createElement('span', null)
            ),
            _react2['default'].createElement(
              'h4',
              null,
              'Menu'
            )
          ),
          _react2['default'].createElement(_Navigation2['default'], { className: _HeaderScss2['default'].nav, menu: this.props.menu }),
          _react2['default'].createElement(
            _Link2['default'],
            { className: _HeaderScss2['default'].brand, to: '/' },
            _react2['default'].createElement('img', { src: __webpack_require__(50), className: minilogo }),
            _react2['default'].createElement('img', { src: __webpack_require__(51), width: '100', className: logo })
          )
        );
      }
    }]);
  
    var _Header = Header;
    Header = (0, _decoratorsWithStyles2['default'])(_HeaderScss2['default'])(Header) || Header;
    return Header;
  })(_react.Component);
  
  exports['default'] = Header;
  module.exports = exports['default'];

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(46);
      var insertCss = __webpack_require__(20);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = insertCss.bind(null, content);
    

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(19)();
  // imports
  
  
  // module
  exports.push([module.id, ".Header_root_1Mv{position:fixed;top:0;left:0;width:30px;color:#fff;background-color:#1e3a82;padding:10px;height:100vh;overflow:hidden;-webkit-transition:width .5s;transition:width .5s;z-index:9999}.Header_ham_1Yl{width:28px;height:28px;display:block;float:left}.Header_ham_1Yl span{width:100%;background-color:#fff;height:3px;margin-bottom:5px;display:block}.Header_btn_menu_3Ts{background-color:transparent;border:none;width:100%;height:30px;overflow:hidden;text-align:left;padding:0;outline:none}.Header_lefy_zV5{margin-left:-40px;position:absolute;width:35px}.Header_lefy_zV5,.Header_logo_jyT{opacity:1;-webkit-transition:opacity 1s;transition:opacity 1s}.Header_hide_2Bd{opacity:0}.Header_btn_menu_3Ts h4{display:block;float:right;width:60%;font-weight:200;text-transform:uppercase;margin:0}.Header_open_2wz{width:15vw!important}.Header_brand_3Km{color:#92e5fc;text-decoration:none;font-size:1.75em;position:absolute;bottom:60px;left:50px}.Header_brandTxt_fin{margin-left:10px}.Header_nav_3h2{float:right;margin-top:6px}.Header_banner_3Ep{text-align:center}.Header_bannerTitle_313{margin:0;padding:10px;font-weight:400;font-size:4em;line-height:1em}.Header_bannerDesc_3Bf{padding:0;color:hsla(0,0%,100%,.5);font-size:1.25em;margin:0}.Header_black_2l4{z-index:9999}.Header_black_2l4,.Header_black_2l4 a{color:#000!important}@media (max-width:1000px){.Header_root_1Mv{width:100vw}.Header_container_1jj,.Header_root_1Mv{padding:0;margin:0}.Header_brand_3Km img{width:70px;float:left}.Header_brand_3Km{padding:5px;display:block}.Header_black_2l4 a{color:#fff!important}}", ""]);
  
  // exports
  exports.locals = {
  	"root": "Header_root_1Mv",
  	"ham": "Header_ham_1Yl",
  	"btn_menu": "Header_btn_menu_3Ts",
  	"lefy": "Header_lefy_zV5",
  	"logo": "Header_logo_jyT",
  	"hide": "Header_hide_2Bd",
  	"open": "Header_open_2wz",
  	"brand": "Header_brand_3Km",
  	"brandTxt": "Header_brandTxt_fin",
  	"nav": "Header_nav_3h2",
  	"banner": "Header_banner_3Ep",
  	"bannerTitle": "Header_bannerTitle_313",
  	"bannerDesc": "Header_bannerDesc_3Bf",
  	"black": "Header_black_2l4",
  	"container": "Header_container_1jj"
  };

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = __webpack_require__(4);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _classnames = __webpack_require__(41);
  
  var _classnames2 = _interopRequireDefault(_classnames);
  
  var _NavigationScss = __webpack_require__(48);
  
  var _NavigationScss2 = _interopRequireDefault(_NavigationScss);
  
  var _decoratorsWithStyles = __webpack_require__(24);
  
  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);
  
  var _Link = __webpack_require__(28);
  
  var _Link2 = _interopRequireDefault(_Link);
  
  var Navigation = (function (_Component) {
    _inherits(Navigation, _Component);
  
    function Navigation() {
      _classCallCheck(this, _Navigation);
  
      _get(Object.getPrototypeOf(_Navigation.prototype), 'constructor', this).apply(this, arguments);
    }
  
    _createClass(Navigation, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          { className: (0, _classnames2['default'])(_NavigationScss2['default'].root, this.props.className), role: 'navigation' },
          _react2['default'].createElement(
            _Link2['default'],
            { className: (0, _classnames2['default'])(_NavigationScss2['default'].link, { 'menu-on': this.props.menu == 'inicio' }), to: '/inicio', to: '/inicio' },
            _react2['default'].createElement('span', { className: _NavigationScss2['default'].circle }),
            ' Nosotros'
          ),
          _react2['default'].createElement(
            _Link2['default'],
            { className: (0, _classnames2['default'])(_NavigationScss2['default'].link, { 'menu-on': this.props.menu == 'servicios' }), to: '/servicios' },
            _react2['default'].createElement('span', { className: _NavigationScss2['default'].circle }),
            ' Servicios'
          ),
          _react2['default'].createElement(
            _Link2['default'],
            { className: (0, _classnames2['default'])(_NavigationScss2['default'].link, { 'menu-on': this.props.menu == 'contacto' }), to: '/contacto' },
            _react2['default'].createElement('span', { className: _NavigationScss2['default'].circle }),
            ' Contacto'
          ),
          _react2['default'].createElement(
            _Link2['default'],
            { className: _NavigationScss2['default'].link, to: '/clientes' },
            _react2['default'].createElement('span', { className: _NavigationScss2['default'].circle }),
            ' Clientes'
          ),
          _react2['default'].createElement(
            _Link2['default'],
            { className: _NavigationScss2['default'].link, to: '/' },
            'Diloo app'
          )
        );
      }
    }], [{
      key: 'propTypes',
      value: {
        className: _react.PropTypes.string
      },
      enumerable: true
    }]);
  
    var _Navigation = Navigation;
    Navigation = (0, _decoratorsWithStyles2['default'])(_NavigationScss2['default'])(Navigation) || Navigation;
    return Navigation;
  })(_react.Component);
  
  exports['default'] = Navigation;
  module.exports = exports['default'];

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(49);
      var insertCss = __webpack_require__(20);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = insertCss.bind(null, content);
    

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(19)();
  // imports
  
  
  // module
  exports.push([module.id, ".Navigation_root_1Ac{border-bottom:1px solid #ccc;padding-top:160px;position:absolute}.Navigation_link_mRw{display:inline-block;padding:10px 80px 10px 40px;width:12vw;text-decoration:none;font-size:1.125em;text-align:right}.Navigation_link_mRw,.Navigation_link_mRw:active,.Navigation_link_mRw:visited{color:hsla(0,0%,100%,.8)}.menu-on span:first-child{background-color:#fff}.Navigation_link_mRw:hover{color:#fff}.Navigation_circle_3FG{border:1px solid #ccc;width:10px;height:10px;float:left;border-radius:10px;display:inline-block;margin-left:-30px;margin-right:15px}.Navigation_highlight_1Uj{margin-right:8px;margin-left:8px;border-radius:3px;background:rgba(0,0,0,.15);color:#fff}.Navigation_highlight_1Uj:hover{background:rgba(0,0,0,.3)}.Navigation_spacer_11z{color:hsla(0,0%,100%,.3)}@media (max-width:1000px){.Navigation_root_1Ac{width:calc(100% - 80px);padding:5px 0;text-align:right}.Navigation_link_mRw{padding:2px 10px}}", ""]);
  
  // exports
  exports.locals = {
  	"root": "Navigation_root_1Ac",
  	"link": "Navigation_link_mRw",
  	"circle": "Navigation_circle_3FG",
  	"highlight": "Navigation_highlight_1Uj",
  	"spacer": "Navigation_spacer_11z"
  };

/***/ },
/* 50 */
/***/ function(module, exports) {

  module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAAiCAYAAAD7wEFuAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjUwMTZCMzlDOTEwMTFFNTgxOTJFQTk2RjhGOTkwNzciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjUwMTZCM0FDOTEwMTFFNTgxOTJFQTk2RjhGOTkwNzciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2NTAxNkIzN0M5MTAxMUU1ODE5MkVBOTZGOEY5OTA3NyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2NTAxNkIzOEM5MTAxMUU1ODE5MkVBOTZGOEY5OTA3NyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Prsvji4AAAPOSURBVHja1JlbSBZBFMfdz1sopmXmBSkVKYPQVCoKLAqFoEwfssCHLtCFoHrIgoqIfIre6qWI6CEhqCiSgqDA1Kw0RDQFH7KsKMosvHTR1Gz7Hxtj+Zg5s5cv2AZ+zH7fmXPmnJnd2ZmzRpiPimmac1HlgWyQBOKE6AfoB29BF+g1DMMM+x8KgioFTab98hzsA1F+DioTPDDdlx6wxo+BlYBB03uZBIdlfRgaBxagKgWFIA3EgGHwEjwCt3Hvf3FzG6K6CSJDOF6n4MsxO50XgPs2Rm0EnAEJDgLLBd/Nf1O2K2cOQvpN0VeDcAej9h5UYOSeaAKLRtUBcjT2WkEDeAfGQSpYBko0fo3Sags/emSdn/MwajSLazXBHdfY6AYrGf354I7Gxl2Z4oEQ3BZDIFvhWLyQq0oLtbFxWxvggsaPVVaFLDDKzEgN2A22gCrQyBhuVDi1n9H5BFIcPLfh4CFj77q18RVFoy4KXNHBJhG4rGyQtG9lnNnjYsVdDH4p7I1P3QU0YmBC0mBAN5qQb1MYvxfULkUza1Eu35Xc81cRQJtyECHRPYlVp48zDvllVC0SUTGMJ1p+FzFmamFn3OW77RojK6LgZCscdVZjs4OLkv/I7mrL7zxGv9nDi/spI1tCTuRKBO0YzSGbHTQo/rfazWT02zwE9wKodkgZFFyGRNBt1zoGoRfViESUbrnmnt1+t5GJY49KP5WCi5YIBh32I5vlWZbraEZ32OOeUqUfEVAtRE4XLs2m3HCo67Xvvw/+mOT/BIcdyNoPWK7HGN14j8Gp9CcpuDcSwSIH75p5qGIVm+np8pExkeQxOJV+HwXXKRHQkWemTeOqk3CX5foVo5/v4cCbxdxlrwOKpXwG2Gqzj52K58Bqt5PRX+Fh1jjdZxR9Gvgp2b58BsmakatUbH3qgtqlM9ukDyDS5czVMnYrpxtdVTRoAxkKw+XMxrlM0r6DcWSHi8AWivyJrNBkzZ5umAPGmCPPJbCLNqPgoObI0yxO9MHOVGlmb46DwOhMV8fYqw1WOBSCw+pXGiiFQ4ngG6NLecs4m4Gd1fhRLFM87yEwOkOt1zhWrbFB58fl3GsH3NLYqOcSRCcEAQePAB2NNmOv16QJLmZqFfuTLtcliOpFgmhCJIiWigRRBKNHp5l8+NHNOVFoMxPsJrVXyKQ0vJa9TpKy9PxQyqBAJGVjxSaZkrKPRVJ22MVKtxHVjRAnZU/DlyN+Saev02TDnKTTj/rxe0GWxw8hvb78EBIUZJnDT1g9Is/KJpYMnwWZLNITIfn4+FuAAQCjI6CsTCx4SgAAAABJRU5ErkJggg=="

/***/ },
/* 51 */
/***/ function(module, exports) {

  module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKEAAABWCAYAAACnxvYXAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDFEMzMxNTlCQTBDMTFFNUI3NzREOUFCM0EwQkQ3MTgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDFEMzMxNUFCQTBDMTFFNUI3NzREOUFCM0EwQkQ3MTgiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpEMUQzMzE1N0JBMEMxMUU1Qjc3NEQ5QUIzQTBCRDcxOCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpEMUQzMzE1OEJBMEMxMUU1Qjc3NEQ5QUIzQTBCRDcxOCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Prf0GZQAAAj4SURBVHja7F1pjBRFGK3d7dmVBQTkjCiHiBcgqIiRwxiRgICygaAgggSEGPxhYkhAg4rGBH4ImGDwAAOiICjEgBfihaIB8QIFBAOIAiKH3LDAzILv7fTAMMzRPdvV1TP7veSldntqqmq6Xn919lcFKg9xYnudEgQjwHvApmARaIG1EqJeYjMeNe24ifgTfB98obTF4YNK4BkK8lCAlyNYDrbRlMUm8HYI8ZDIxxsU5uFvWqBRgMR14PMiHbGEqaxgJwTf+5DVMbA+rOFpkZBYwkTc7lM+7Fu2EvmICJOhno95lYh8RISmUUdugTewqtFv/Qz83baWg+3f/h+4FCwHu4Dt7bhf2HEbggNS3KcCkY+IMNWAIemYBeyJgcRZewBzlS26Kbg2yb7WEcEP4HGwR1xcCvIusYTSHDtFJMX1cExUCfEq4q7FRrqRhLjh6jCzIJbQh/4bLNpIhFvtkW2s2R2E6+sRngSHxsV9HOEGsAZ4m8hEROgVZiW5dhP4UZLrL4k0pDnOFhVSpSJC0zgqVSoirE6IyC0QESbDKZ/y4ej5F5GPiDAZ9vmUz9ulLQ7vEvmICJNhDbhXcx5fg4+JdLxDPm5qvQbB02B/sDRNVM4Nct6Qk9GHU8Qpj2viucTHpb93YQXPiHREhE7E+BaCh5J89Ck4nYKS/YDBQD5PVrdO+J9rwBMgvNVS7SJCP/uH3Gn9ATgZ4lsl1S0w0SRbchekT3gO4YoIR+K9wW4quomgZpJoY0NF1n6pFoEOAXYC14FnM7CF72ULh8vAswksB7eAC8EhoFjUXO4TQljdEXwChjQ0t7TkPcD7VPRVTP7PaZd30Af8qgpJ84X4VjbvB5+AEPuFQqGdIpkca44hwNoItoCNHH6lJZrj7Q4F2A7BXLBDiijcojUMYjyQyRKqqGeFTFgL3gohypqxx9C9YjLchQDdWMCuCFanESDRB/wWcb3ahs+8Bolkck+EvTQIsBjBPJV+NSSG68FpHmY/QCSTeyLU8YJ4X7CZi/jDINzGHuXdViSTeyJspCHNzi7j0yNXN4/ybiKSyT0R6ki/WRbfucKjvGuJZHJPhDpQnMV3DktViwhNY71UdfUVYRC2iu0Af5Sqrr4ivFRDmm5f63wmwaOCoJqJsNxgn5B5j4MA50g1Bxu61465c7mGx2mOBaeksJBH4/7eBgEelyoWEXoOCGszgs1SddIcCwT+WMJwRYSrDfRKxeW3Io39N4GI8CLx8SUhukcbAtYNSmHD4TB3xvCIiNjKBUe9e8C/VdTBJc8v+TiI260ikUgDBMNU9L2XxvbMQVEVkmT/9x8VPa1gsWVZf3lUTu5Q4v5Mus+rX8UuG1+N5U55HkS0AlyCcp5IjFSQxPI9y1GlISuWdj+hw71/v4H9IcQtDoXtdD9hJZBugctKtezB1JNKz5RV7GHk3sonUMkHshQft6rNUHpPQOC72xPA11DOsxf1CSHAYrsyns7xZpSbXT+HuGprssbFLiqWPq+/ASdpFGDMmDwMrkWe7bIQ4AMIVin9R3DQsr7C1gx5FiUbmNCJ5L150s1oDo7SNUB3WLF00L5S+Xe2CnElH0Dk3dSFAFnn89XFZ/zpBF+ZeP0CEcIKjlHn3eXmC/oYzn8OeK2BfLl9bj7EVeBAgDwHcJ6hWZIRyL/SQ0YhBMgO8+Q8HHS1NzgI6Wl37k3hDodG5UWwtsFyTsG9qsUnYLThgmjrf6D/FjKUdxC8do3L8KBwg+5Aw2Wk1R5KEZap/EVNA1aQo+G7A/Dbb0BZWqf5vLcKxopZGUXYRgm8BF3T1QhIWW5M81nHoHSbLKejvThwAnKJPfKLPwGdh1DXURfOPc6uhiJskOX3OKmbasNFid10FXpYlmze/+EiAJ2QpjpgiDMCbqeiGltZ3Ki+oSLL0ZnCGPRURxG6FQo9v46wLGtbhmb+MhXdPTTcRdrpLLLbuueE+wyUszxDObvYI+7mum7YSKcCFDgCLcrATAKsVEx0JYRznzsMlHMR8p+SSYB2Ob9DMEbXU7sVAlwquskINx4fNqLSHDt7R1w2hyacfK7UGd+NCH8SfTmCm7XlQ1mkf8LAbzriJjIelqO6RFgu+hIEoRMtEIgIBSJCgUBEKBARCgQiQoGIUCAQEQpc4ZSIUGAa5SJCgUBEKBARCgQiQoEJRCKRYhGhwCgsyzqtS4RH5fYKTDfHYjUFxkXYUG6XwLQI7wxXRErklnmKbB7sUgPldOWhAwOTQl0i5A2baLjSjuWZCK+2vXc5rVy+v9LBQDndvijf1dVAxmXi42EN+T7py+AmFX0R3tfRf56JkFMZMyGuURhRHswgQLZCz4OtDZRzCPJfhnBBvHPLFOXk8b6zdYqQGGxTkBxu12t5hnI/VB5d/7KCE9/Aoz+dkN0SlRoqJx1a0ofhDJQzdk4gZ0tiBxuF7HJST03dFoRfOqn8dZBYFRzKgTLuy+I7rIfY6aXNPSzLyTSf7c0ivbrKex/mR9gn3CDGy1NsVMHZQrU1zWerAlLG9RTh4hyq4HDQC4g+E63P8gAUZbdK77Dgy4D0sZdRhDNV7pwHrGPVRsdvnxqAezUND8SZNA8Lm+MFhstIL2SzCkNFFj1tjc8REfLpPuJxmmu8bj5RwSsQvGe4SzDdQbynNNxPN3gO92p35TwhhPgqgjeDrsBQKBRWHvs8RJp8GudqKO6j4B8GbhOnegba3YJMDws9fNG39RkD5aSPy8qDMuMnq0eCb+SANZwIbvE4TR7wssdja0hXbt3BX328N/+CvZD3RhflpKe1B1X0RFa/8CHzjHUXzokQ1rACfAR/DsowqjJtDTlNQ+/46zxMc6+d5i6PhbhTRc8xmerDoGoReDPyXJNFORci6Ayu9aEPyJOtyuKPF0vqxixcUbn2101FjyJoqaJuYAt80NhoPAiO5q/C4TDn1uj8+xawSRzrxbGBLVrlME2ukfYFOevfzE6vQUKa9dykGYN9Zggtzp0qemBlOi+qRxw0kfycE9w/gwtRqVWearPXfPkw9gPbqvNnCJYo9364Y/eIFpZnD7KfzBWX/YkR/xdgAB4OgAK5ssmZAAAAAElFTkSuQmCC"

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "0e5413c14cf46fecc4b1780420b3f65e.jpg";

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "7e9fcb809fb4da60a63bb5d21edfdb20.jpg";

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = __webpack_require__(4);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _LoginPageScss = __webpack_require__(55);
  
  var _LoginPageScss2 = _interopRequireDefault(_LoginPageScss);
  
  var _decoratorsWithStyles = __webpack_require__(24);
  
  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);
  
  var title = 'Log In';
  
  var LoginPage = (function (_Component) {
    _inherits(LoginPage, _Component);
  
    function LoginPage() {
      _classCallCheck(this, _LoginPage);
  
      _get(Object.getPrototypeOf(_LoginPage.prototype), 'constructor', this).apply(this, arguments);
    }
  
    _createClass(LoginPage, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this.context.onSetTitle(title);
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          { className: _LoginPageScss2['default'].root },
          _react2['default'].createElement(
            'div',
            { className: _LoginPageScss2['default'].container },
            _react2['default'].createElement(
              'h1',
              null,
              title
            ),
            _react2['default'].createElement(
              'p',
              null,
              '...'
            )
          )
        );
      }
    }], [{
      key: 'contextTypes',
      value: {
        onSetTitle: _react.PropTypes.func.isRequired
      },
      enumerable: true
    }]);
  
    var _LoginPage = LoginPage;
    LoginPage = (0, _decoratorsWithStyles2['default'])(_LoginPageScss2['default'])(LoginPage) || LoginPage;
    return LoginPage;
  })(_react.Component);
  
  exports['default'] = LoginPage;
  module.exports = exports['default'];

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(56);
      var insertCss = __webpack_require__(20);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = insertCss.bind(null, content);
    

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(19)();
  // imports
  
  
  // module
  exports.push([module.id, ".LoginPage_container_3sE{margin:0 auto;padding:0 0 40px;max-width:1000px}", ""]);
  
  // exports
  exports.locals = {
  	"root": "LoginPage_root_3BZ",
  	"container": "LoginPage_container_3sE"
  };

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = __webpack_require__(4);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _RegisterPageScss = __webpack_require__(58);
  
  var _RegisterPageScss2 = _interopRequireDefault(_RegisterPageScss);
  
  var _decoratorsWithStyles = __webpack_require__(24);
  
  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);
  
  var title = 'New User Registration';
  
  var RegisterPage = (function (_Component) {
    _inherits(RegisterPage, _Component);
  
    function RegisterPage() {
      _classCallCheck(this, _RegisterPage);
  
      _get(Object.getPrototypeOf(_RegisterPage.prototype), 'constructor', this).apply(this, arguments);
    }
  
    _createClass(RegisterPage, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this.context.onSetTitle(title);
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          { className: _RegisterPageScss2['default'].root },
          _react2['default'].createElement(
            'div',
            { className: _RegisterPageScss2['default'].container },
            _react2['default'].createElement(
              'h1',
              null,
              title
            ),
            _react2['default'].createElement(
              'p',
              null,
              '...'
            )
          )
        );
      }
    }], [{
      key: 'contextTypes',
      value: {
        onSetTitle: _react.PropTypes.func.isRequired
      },
      enumerable: true
    }]);
  
    var _RegisterPage = RegisterPage;
    RegisterPage = (0, _decoratorsWithStyles2['default'])(_RegisterPageScss2['default'])(RegisterPage) || RegisterPage;
    return RegisterPage;
  })(_react.Component);
  
  exports['default'] = RegisterPage;
  module.exports = exports['default'];

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(59);
      var insertCss = __webpack_require__(20);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = insertCss.bind(null, content);
    

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(19)();
  // imports
  
  
  // module
  exports.push([module.id, ".RegisterPage_container_Iqo{margin:0 auto;padding:0 0 40px;max-width:1000px}", ""]);
  
  // exports
  exports.locals = {
  	"root": "RegisterPage_root_p4L",
  	"container": "RegisterPage_container_Iqo"
  };

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = __webpack_require__(4);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _NotFoundPageScss = __webpack_require__(61);
  
  var _NotFoundPageScss2 = _interopRequireDefault(_NotFoundPageScss);
  
  var _decoratorsWithStyles = __webpack_require__(24);
  
  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);
  
  var title = 'Page Not Found';
  
  var NotFoundPage = (function (_Component) {
    _inherits(NotFoundPage, _Component);
  
    function NotFoundPage() {
      _classCallCheck(this, _NotFoundPage);
  
      _get(Object.getPrototypeOf(_NotFoundPage.prototype), 'constructor', this).apply(this, arguments);
    }
  
    _createClass(NotFoundPage, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this.context.onSetTitle(title);
        this.context.onPageNotFound();
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            title
          ),
          _react2['default'].createElement(
            'p',
            null,
            'Sorry, but the page you were trying to view does not exist.'
          )
        );
      }
    }], [{
      key: 'contextTypes',
      value: {
        onSetTitle: _react.PropTypes.func.isRequired,
        onPageNotFound: _react.PropTypes.func.isRequired
      },
      enumerable: true
    }]);
  
    var _NotFoundPage = NotFoundPage;
    NotFoundPage = (0, _decoratorsWithStyles2['default'])(_NotFoundPageScss2['default'])(NotFoundPage) || NotFoundPage;
    return NotFoundPage;
  })(_react.Component);
  
  exports['default'] = NotFoundPage;
  module.exports = exports['default'];

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(62);
      var insertCss = __webpack_require__(20);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = insertCss.bind(null, content);
    

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(19)();
  // imports
  
  
  // module
  exports.push([module.id, "*{margin:0;line-height:1.2}html{display:table;width:100%;height:100%;color:#888;text-align:center;font-family:sans-serif}body{display:table-cell;margin:2em auto;vertical-align:middle}h1{color:#555;font-weight:400;font-size:2em}p{margin:0 auto;width:280px}@media only screen and (max-width:280px){body,p{width:95%}h1{font-size:1.5em;margin:0 0 .3em}}", ""]);
  
  // exports


/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = __webpack_require__(4);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _ErrorPageScss = __webpack_require__(64);
  
  var _ErrorPageScss2 = _interopRequireDefault(_ErrorPageScss);
  
  var _decoratorsWithStyles = __webpack_require__(24);
  
  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);
  
  var title = 'Error';
  
  var ErrorPage = (function (_Component) {
    _inherits(ErrorPage, _Component);
  
    function ErrorPage() {
      _classCallCheck(this, _ErrorPage);
  
      _get(Object.getPrototypeOf(_ErrorPage.prototype), 'constructor', this).apply(this, arguments);
    }
  
    _createClass(ErrorPage, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this.context.onSetTitle(title);
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            title
          ),
          _react2['default'].createElement(
            'p',
            null,
            'Sorry, an critical error occurred on this page.'
          )
        );
      }
    }], [{
      key: 'contextTypes',
      value: {
        onSetTitle: _react.PropTypes.func.isRequired,
        onPageNotFound: _react.PropTypes.func.isRequired
      },
      enumerable: true
    }]);
  
    var _ErrorPage = ErrorPage;
    ErrorPage = (0, _decoratorsWithStyles2['default'])(_ErrorPageScss2['default'])(ErrorPage) || ErrorPage;
    return ErrorPage;
  })(_react.Component);
  
  exports['default'] = ErrorPage;
  module.exports = exports['default'];

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(65);
      var insertCss = __webpack_require__(20);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = insertCss.bind(null, content);
    

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(19)();
  // imports
  
  
  // module
  exports.push([module.id, "*{margin:0;line-height:1.2}html{display:table;width:100%;height:100%;color:#888;text-align:center;font-family:sans-serif}body{display:table-cell;margin:2em auto;vertical-align:middle}h1{color:#555;font-weight:400;font-size:2em}p{margin:0 auto;width:280px}@media only screen and (max-width:280px){body,p{width:95%}h1{font-size:1.5em;margin:0 0 .3em}}", ""]);
  
  // exports


/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = __webpack_require__(4);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _config = __webpack_require__(14);
  
  var Html = (function (_Component) {
    _inherits(Html, _Component);
  
    function Html() {
      _classCallCheck(this, Html);
  
      _get(Object.getPrototypeOf(Html.prototype), 'constructor', this).apply(this, arguments);
    }
  
    _createClass(Html, [{
      key: 'trackingCode',
      value: function trackingCode() {
        return { __html: '(function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=' + 'function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;' + 'e=o.createElement(i);r=o.getElementsByTagName(i)[0];' + 'e.src=\'https://www.google-analytics.com/analytics.js\';' + 'r.parentNode.insertBefore(e,r)}(window,document,\'script\',\'ga\'));' + ('ga(\'create\',\'' + _config.googleAnalyticsId + '\',\'auto\');ga(\'send\',\'pageview\');')
        };
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'html',
          { className: 'no-js', lang: '' },
          _react2['default'].createElement(
            'head',
            null,
            _react2['default'].createElement('meta', { charSet: 'utf-8' }),
            _react2['default'].createElement('meta', { httpEquiv: 'X-UA-Compatible', content: 'IE=edge' }),
            _react2['default'].createElement(
              'title',
              null,
              this.props.title
            ),
            _react2['default'].createElement('meta', { name: 'description', content: this.props.description }),
            _react2['default'].createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }),
            _react2['default'].createElement('link', { rel: 'apple-touch-icon', href: 'apple-touch-icon.png' }),
            _react2['default'].createElement('link', { rel: 'stylesheet', id: 'base', href: '/base.css' }),
            _react2['default'].createElement('link', { href: 'https://fonts.googleapis.com/css?family=Open+Sans:400,700', rel: 'stylesheet', type: 'text/css' }),
            _react2['default'].createElement('style', { id: 'css', dangerouslySetInnerHTML: { __html: this.props.css } })
          ),
          _react2['default'].createElement(
            'body',
            null,
            _react2['default'].createElement('div', { id: 'app', dangerouslySetInnerHTML: { __html: this.props.body } }),
            _react2['default'].createElement('script', { src: this.props.entry }),
            _react2['default'].createElement('script', { dangerouslySetInnerHTML: this.trackingCode() })
          )
        );
      }
    }], [{
      key: 'propTypes',
      value: {
        title: _react.PropTypes.string,
        description: _react.PropTypes.string,
        css: _react.PropTypes.string,
        body: _react.PropTypes.string.isRequired,
        entry: _react.PropTypes.string.isRequired
      },
      enumerable: true
    }, {
      key: 'defaultProps',
      value: {
        title: '',
        description: ''
      },
      enumerable: true
    }]);
  
    return Html;
  })(_react.Component);
  
  exports['default'] = Html;
  module.exports = exports['default'];

/***/ },
/* 67 */
/***/ function(module, exports) {

  module.exports = require("./assets");

/***/ },
/* 68 */
/***/ function(module, exports) {

  module.exports = require("compression");

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _this = this;
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _fs = __webpack_require__(70);
  
  var _fs2 = _interopRequireDefault(_fs);
  
  var _path = __webpack_require__(2);
  
  var _express = __webpack_require__(3);
  
  var _bluebird = __webpack_require__(71);
  
  var _bluebird2 = _interopRequireDefault(_bluebird);
  
  var _jade = __webpack_require__(72);
  
  var _jade2 = _interopRequireDefault(_jade);
  
  var _frontMatter = __webpack_require__(73);
  
  var _frontMatter2 = _interopRequireDefault(_frontMatter);
  
  // A folder with Jade/Markdown/HTML content pages
  var CONTENT_DIR = (0, _path.join)(__dirname, './content');
  
  // Extract 'front matter' metadata and generate HTML
  var parseJade = function parseJade(path, jadeContent) {
    var fmContent = (0, _frontMatter2['default'])(jadeContent);
    var htmlContent = _jade2['default'].render(fmContent.body);
    return Object.assign({ path: path, content: htmlContent }, fmContent.attributes);
  };
  
  var readFile = _bluebird2['default'].promisify(_fs2['default'].readFile);
  var fileExists = function fileExists(filename) {
    return new _bluebird2['default'](function (resolve) {
      _fs2['default'].exists(filename, resolve);
    });
  };
  
  var router = new _express.Router();
  
  router.get('/', function callee$0$0(req, res, next) {
    var path, fileName, source, content;
    return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
      while (1) switch (context$1$0.prev = context$1$0.next) {
        case 0:
          context$1$0.prev = 0;
          path = req.query.path;
  
          if (!(!path || path === 'undefined')) {
            context$1$0.next = 5;
            break;
          }
  
          res.status(400).send({ error: 'The \'path\' query parameter cannot be empty.' });
          return context$1$0.abrupt('return');
  
        case 5:
          fileName = (0, _path.join)(CONTENT_DIR, (path === '/' ? '/index' : path) + '.jade');
          context$1$0.next = 8;
          return regeneratorRuntime.awrap(fileExists(fileName));
  
        case 8:
          if (context$1$0.sent) {
            context$1$0.next = 10;
            break;
          }
  
          fileName = (0, _path.join)(CONTENT_DIR, path + '/index.jade');
  
        case 10:
          context$1$0.next = 12;
          return regeneratorRuntime.awrap(fileExists(fileName));
  
        case 12:
          if (context$1$0.sent) {
            context$1$0.next = 16;
            break;
          }
  
          res.status(404).send({ error: 'The page \'' + path + '\' is not found.' });
          context$1$0.next = 21;
          break;
  
        case 16:
          context$1$0.next = 18;
          return regeneratorRuntime.awrap(readFile(fileName, { encoding: 'utf8' }));
  
        case 18:
          source = context$1$0.sent;
          content = parseJade(path, source);
  
          res.status(200).send(content);
  
        case 21:
          context$1$0.next = 26;
          break;
  
        case 23:
          context$1$0.prev = 23;
          context$1$0.t0 = context$1$0['catch'](0);
  
          next(context$1$0.t0);
  
        case 26:
        case 'end':
          return context$1$0.stop();
      }
    }, null, _this, [[0, 23]]);
  });
  
  exports['default'] = router;
  module.exports = exports['default'];

/***/ },
/* 70 */
/***/ function(module, exports) {

  module.exports = require("fs");

/***/ },
/* 71 */
/***/ function(module, exports) {

  module.exports = require("bluebird");

/***/ },
/* 72 */
/***/ function(module, exports) {

  module.exports = require("jade");

/***/ },
/* 73 */
/***/ function(module, exports) {

  module.exports = require("front-matter");

/***/ }
/******/ ]);
//# sourceMappingURL=server.js.map