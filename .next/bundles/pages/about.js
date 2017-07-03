
          window.__NEXT_REGISTER_PAGE('/about', function() {
            var comp = module.exports =
webpackJsonp([6],{

/***/ 544:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(540);

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "F:\\Web\\learn-next-js\\comps\\Header.js";


var linkStyle = {
    marginRight: 15
};

var Header = function Header() {
    return _react2.default.createElement("div", {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 8
        }
    }, _react2.default.createElement(_link2.default, { href: "/", __source: {
            fileName: _jsxFileName,
            lineNumber: 9
        }
    }, _react2.default.createElement("a", { style: linkStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 10
        }
    }, "Home")), _react2.default.createElement(_link2.default, { href: "/about", __source: {
            fileName: _jsxFileName,
            lineNumber: 12
        }
    }, _react2.default.createElement("a", { style: linkStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 13
        }
    }, "About")));
};

exports.default = Header;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "F:\\Web\\learn-next-js\\comps\\Header.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "F:\\Web\\learn-next-js\\comps\\Header.js"); } } })();

/***/ }),

/***/ 545:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(540);

var _link2 = _interopRequireDefault(_link);

var _Header = __webpack_require__(544);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'F:\\Web\\learn-next-js\\comps\\Layout.js';


var layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
};

var Layout = function Layout(props) {
    return _react2.default.createElement('div', { style: layoutStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 12
        }
    }, _react2.default.createElement(_Header2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 13
        }
    }));
};

exports.default = Layout;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "F:\\Web\\learn-next-js\\comps\\Layout.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "F:\\Web\\learn-next-js\\comps\\Layout.js"); } } })();

/***/ }),

/***/ 547:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _Layout = __webpack_require__(545);

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'F:\\Web\\learn-next-js\\pages\\about.js?entry';


var about = function about() {
    return _react2.default.createElement(_Layout2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 5
        }
    }, _react2.default.createElement('p', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 6
        }
    }, 'This is the about page.'));
};

exports.default = about;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "F:\\Web\\learn-next-js\\pages\\about.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "F:\\Web\\learn-next-js\\pages\\about.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(85)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/about")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 548:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(547);


/***/ })

},[548]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlc1xccGFnZXNcXGFib3V0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcHMvSGVhZGVyLmpzP2ZiM2Y5Y2MiLCJ3ZWJwYWNrOi8vLy4vY29tcHMvTGF5b3V0LmpzP2ZiM2Y5Y2MiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYWJvdXQuanM/ZmIzZjljYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuY29uc3QgbGlua1N0eWxlID0ge1xyXG4gICAgbWFyZ2luUmlnaHQ6IDE1XHJcbn07XHJcblxyXG5jb25zdCBIZWFkZXIgPSAoKSA9PiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgIDxhIHN0eWxlPXtsaW5rU3R5bGV9PkhvbWU8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cclxuICAgICAgICAgICAgPGEgc3R5bGU9e2xpbmtTdHlsZX0+QWJvdXQ8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgPC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcHMvSGVhZGVyLmpzIiwiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcHMvSGVhZGVyJztcclxuXHJcbmNvbnN0IGxheW91dFN0eWxlID0ge1xyXG4gICAgbWFyZ2luOiAyMCxcclxuICAgIHBhZGRpbmc6IDIwLFxyXG4gICAgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnXHJcbn07XHJcblxyXG5jb25zdCBMYXlvdXQgPSAocHJvcHMpID0+IChcclxuICAgIDxkaXYgc3R5bGU9e2xheW91dFN0eWxlfT5cclxuICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICA8L2Rpdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wcy9MYXlvdXQuanMiLCJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBzL0xheW91dCc7XHJcblxyXG5cclxuY29uc3QgYWJvdXQgPSAoKSA9PiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxwPlRoaXMgaXMgdGhlIGFib3V0IHBhZ2UuPC9wPlxyXG4gICAgPC9MYXlvdXQ+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhYm91dDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9hYm91dC5qcz9lbnRyeSJdLCJtYXBwaW5ncyI6IjtBOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7Ozs7Ozs7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFDQTs7Ozs7Ozs7QUFFQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        