"use strict";

function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
// Hooks accessed via React global to ensure availability after CDN load
// Recharts destructured inside App for guaranteed scope
var ErrorBoundary = /*#__PURE__*/function (_React$Component) {
  function ErrorBoundary(props) {
    var _this;
    _classCallCheck(this, ErrorBoundary);
    _this = _callSuper(this, ErrorBoundary, [props]);
    _this.state = {
      hasError: false,
      error: null
    };
    return _this;
  }
  _inherits(ErrorBoundary, _React$Component);
  return _createClass(ErrorBoundary, [{
    key: "render",
    value: function render() {
      if (this.state.hasError) {
        return /*#__PURE__*/React.createElement("div", {
          className: "flex h-full w-full items-center justify-center p-6 bg-slate-100"
        }, /*#__PURE__*/React.createElement("div", {
          className: "bg-red-50 border border-red-200 p-8 rounded-xl max-w-2xl w-full shadow-lg"
        }, /*#__PURE__*/React.createElement("h1", {
          className: "text-base font-black text-red-700 mb-4"
        }, "Oops! The App Crashed"), /*#__PURE__*/React.createElement("p", {
          className: "text-sm text-red-600 mb-4"
        }, "Something went wrong during execution. Check the error details below:"), /*#__PURE__*/React.createElement("pre", {
          className: "bg-white p-4 rounded text-xs text-slate-800 overflow-auto shadow-inner"
        }, this.state.error && this.state.error.toString())));
      }
      return this.props.children;
    }
  }], [{
    key: "getDerivedStateFromError",
    value: function getDerivedStateFromError(error) {
      return {
        hasError: true,
        error: error
      };
    }
  }]);
}(React.Component); // --- Icons ---
var Icons = {
  PieChart: function PieChart() {
    return /*#__PURE__*/React.createElement("svg", {
      width: "18",
      height: "18",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M21.21 15.89A10 10 0 1 1 8 2.83"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M22 12A10 10 0 0 0 12 2v10z"
    }));
  },
  Database: function Database() {
    return /*#__PURE__*/React.createElement("svg", {
      width: "18",
      height: "18",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("ellipse", {
      cx: "12",
      cy: "5",
      rx: "9",
      ry: "3"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"
    }));
  },
  Activity: function Activity() {
    return /*#__PURE__*/React.createElement("svg", {
      width: "18",
      height: "18",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("polyline", {
      points: "22 12 18 12 15 21 9 3 6 12 2 12"
    }));
  },
  TrendingUp: function TrendingUp() {
    return /*#__PURE__*/React.createElement("svg", {
      width: "18",
      height: "18",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("polyline", {
      points: "23 6 13.5 15.5 8.5 10.5 1 18"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "17 6 23 6 23 12"
    }));
  },
  Calculator: function Calculator() {
    return /*#__PURE__*/React.createElement("svg", {
      width: "18",
      height: "18",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "4",
      y: "2",
      width: "16",
      height: "20",
      rx: "2",
      ry: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "8",
      y1: "6",
      x2: "16",
      y2: "6"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "16",
      y1: "14",
      x2: "16",
      y2: "18"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16 10h.01"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 10h.01"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M8 10h.01"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M8 14h.01"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M8 18h.01"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 14h.01"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 18h.01"
    }));
  },
  Wind: function Wind() {
    return /*#__PURE__*/React.createElement("svg", {
      width: "18",
      height: "18",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M9.59 4.59A2 2 0 1 1 11 8H2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12.59 19.41A2 2 0 1 0 14 16H2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M15.83 7.17a2 2 0 1 0-1.41 3.42H20"
    }));
  },
  Filter: function Filter() {
    return /*#__PURE__*/React.createElement("svg", {
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("polygon", {
      points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"
    }));
  },
  BookOpen: function BookOpen() {
    return /*#__PURE__*/React.createElement("svg", {
      width: "18",
      height: "18",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"
    }));
  },
  Users: function Users() {
    return /*#__PURE__*/React.createElement("svg", {
      width: "18",
      height: "18",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "9",
      cy: "7",
      r: "4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M23 21v-2a4 4 0 0 0-3-3.87"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16 3.13a4 4 0 0 1 0 7.75"
    }));
  },
  Zap: function Zap() {
    return /*#__PURE__*/React.createElement("svg", {
      width: "18",
      height: "18",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("polygon", {
      points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2"
    }));
  },
  Building: function Building() {
    return /*#__PURE__*/React.createElement("svg", {
      width: "18",
      height: "18",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "4",
      y: "2",
      width: "16",
      height: "20",
      rx: "2",
      ry: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M9 22v-4h6v4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M8 6h.01"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16 6h.01"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 6h.01"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 10h.01"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 14h.01"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16 10h.01"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16 14h.01"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M8 10h.01"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M8 14h.01"
    }));
  },
  Calendar: function Calendar() {
    return /*#__PURE__*/React.createElement("svg", {
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "4",
      width: "18",
      height: "18",
      rx: "2",
      ry: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "16",
      y1: "2",
      x2: "16",
      y2: "6"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "8",
      y1: "2",
      x2: "8",
      y2: "6"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "3",
      y1: "10",
      x2: "21",
      y2: "10"
    }));
  },
  CheckCircle: function CheckCircle() {
    return /*#__PURE__*/React.createElement("svg", {
      width: "18",
      height: "18",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M22 11.08V12a10 10 0 1 1-5.93-9.14"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "22 4 12 14.01 9 11.01"
    }));
  },
  Download: function Download() {
    return /*#__PURE__*/React.createElement("svg", {
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "7 10 12 15 17 10"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "12",
      y1: "15",
      x2: "12",
      y2: "3"
    }));
  },
  Briefcase: function Briefcase() {
    return /*#__PURE__*/React.createElement("svg", {
      width: "18",
      height: "18",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "2",
      y: "7",
      width: "20",
      height: "14",
      rx: "2",
      ry: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"
    }));
  },
  Save: function Save() {
    return /*#__PURE__*/React.createElement("svg", {
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "17 21 17 13 7 13 7 21"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "7 3 7 8 15 8"
    }));
  },
  History: function History() {
    return /*#__PURE__*/React.createElement("svg", {
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "10"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "12 6 12 12 16 14"
    }));
  },
  Trash: function Trash() {
    return /*#__PURE__*/React.createElement("svg", {
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("polyline", {
      points: "3 6 5 6 21 6"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
    }));
  },
  X: function X() {
    return /*#__PURE__*/React.createElement("svg", {
      width: "20",
      height: "20",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("line", {
      x1: "18",
      y1: "6",
      x2: "6",
      y2: "18"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "6",
      y1: "6",
      x2: "18",
      y2: "18"
    }));
  },
  Eye: function Eye() {
    return /*#__PURE__*/React.createElement("svg", {
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "3"
    }));
  },
  Link: function Link() {
    return /*#__PURE__*/React.createElement("svg", {
      width: "14",
      height: "14",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
    }));
  },
  Sliders: function Sliders() {
    return /*#__PURE__*/React.createElement("svg", {
      width: "18",
      height: "18",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("line", {
      x1: "4",
      y1: "21",
      x2: "4",
      y2: "14"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "4",
      y1: "10",
      x2: "4",
      y2: "3"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "12",
      y1: "21",
      x2: "12",
      y2: "12"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "12",
      y1: "8",
      x2: "12",
      y2: "3"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "20",
      y1: "21",
      x2: "20",
      y2: "16"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "20",
      y1: "12",
      x2: "20",
      y2: "3"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "1",
      y1: "14",
      x2: "7",
      y2: "14"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "9",
      y1: "8",
      x2: "15",
      y2: "8"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "17",
      y1: "16",
      x2: "23",
      y2: "16"
    }));
  },
  RefreshCw: function RefreshCw() {
    return /*#__PURE__*/React.createElement("svg", {
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("polyline", {
      points: "23 4 23 10 17 10"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "1 20 1 14 7 14"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"
    }));
  },
  CloudUp: function CloudUp() {
    return /*#__PURE__*/React.createElement("svg", {
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "16 16 12 12 8 16"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "12",
      y1: "12",
      x2: "12",
      y2: "21"
    }));
  },
  CloudDown: function CloudDown() {
    return /*#__PURE__*/React.createElement("svg", {
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "8 16 12 20 16 16"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "12",
      y1: "12",
      x2: "12",
      y2: "20"
    }));
  },
  Star: function Star(_ref) {
    var filled = _ref.filled;
    return /*#__PURE__*/React.createElement("svg", {
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: filled ? "currentColor" : "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("polygon", {
      points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
    }));
  },
  Grid: function Grid() {
    return /*#__PURE__*/React.createElement("svg", {
      width: "18",
      height: "18",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "3",
      width: "18",
      height: "18",
      rx: "2",
      ry: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "3",
      y1: "9",
      x2: "21",
      y2: "9"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "3",
      y1: "15",
      x2: "21",
      y2: "15"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "9",
      y1: "3",
      x2: "9",
      y2: "21"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "15",
      y1: "3",
      x2: "15",
      y2: "21"
    }));
  },
  HelpCircle: function() { return /*#__PURE__*/React.createElement("svg", {xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}, /*#__PURE__*/React.createElement("circle",{cx:"12",cy:"12",r:"10"}), /*#__PURE__*/React.createElement("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}), /*#__PURE__*/React.createElement("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})); },
};

// --- Generic Sorting Helper ---
var sortArray = function sortArray(items, sortConfig) {
  if (!sortConfig || !sortConfig.key) return items;
  return _toConsumableArray(items).sort(function (a, b) {
    var aVal = a[sortConfig.key];
    var bVal = b[sortConfig.key];
    if (aVal === null || aVal === undefined) aVal = '';
    if (bVal === null || bVal === undefined) bVal = '';
    if (typeof aVal === 'string') aVal = aVal.toLowerCase();
    if (typeof bVal === 'string') bVal = bVal.toLowerCase();
    if (aVal < bVal) return sortConfig.direction === 'ascending' ? -1 : 1;
    if (aVal > bVal) return sortConfig.direction === 'ascending' ? 1 : -1;
    return 0;
  });
};
var SortIcon = function SortIcon(_ref2) {
  var columnKey = _ref2.columnKey,
    sortConfig = _ref2.sortConfig;
  if (!sortConfig || sortConfig.key !== columnKey) return /*#__PURE__*/React.createElement("span", {
    className: "ml-1 opacity-20 inline-block w-2"
  }, "\u2195");
  return sortConfig.direction === 'ascending' ? /*#__PURE__*/React.createElement("span", {
    className: "ml-1 text-blue-500 inline-block w-2"
  }, "\u25B2") : /*#__PURE__*/React.createElement("span", {
    className: "ml-1 text-blue-500 inline-block w-2"
  }, "\u25BC");
};
var SortHeader = function SortHeader(_ref3) {
  var label = _ref3.label,
    columnKey = _ref3.columnKey,
    currentSort = _ref3.currentSort,
    requestSort = _ref3.requestSort,
    _ref3$className = _ref3.className,
    className = _ref3$className === void 0 ? "" : _ref3$className;
  return /*#__PURE__*/React.createElement("th", {
    className: "sortable p-2 ".concat(className),
    onClick: function onClick() {
      return requestSort(columnKey);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-1 ".concat(className.includes('text-right') ? 'justify-end' : '')
  }, /*#__PURE__*/React.createElement("span", null, label), /*#__PURE__*/React.createElement(SortIcon, {
    columnKey: columnKey,
    sortConfig: currentSort
  })));
};

// --- Utils ---
var exportCSV = function exportCSV(data, filename) {
  if (!data || !data.length) return;
  var headers = Object.keys(data[0]).filter(function (k) {
    return _typeof(data[0][k]) !== 'object';
  });
  var csvRows = [headers.join(',')].concat(_toConsumableArray(data.map(function (row) {
    return headers.map(function (h) {
      return "\"".concat(row[h] !== undefined && row[h] !== null ? row[h].toString().replace(/"/g, '""') : '', "\"");
    }).join(',');
  })));
  var blob = new Blob([csvRows.join('\n')], {
    type: 'text/csv'
  });
  var url = window.URL.createObjectURL(blob);
  var a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};
var monthMap = {
  "January": 1,
  "February": 2,
  "March": 3,
  "April": 4,
  "May": 5,
  "June": 6,
  "July": 7,
  "August": 8,
  "September": 9,
  "October": 10,
  "November": 11,
  "December": 12
};
var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var rcOrder = ['BU', 'EV', 'RT10', 'RT20', 'RT40', 'RT50', 'RT60', 'RT70'];
var getRcWeight = function getRcWeight(rc) {
  var index = rcOrder.findIndex(function (r) {
    return r.toLowerCase() === (rc || '').toLowerCase();
  });
  return index === -1 ? 999 : index;
};
var parseTimeStr = function parseTimeStr(str) {
  if (!str) return {
    year: 0,
    month: 0,
    qtr: 0,
    sortKey: 0,
    text: 'Unassigned'
  };
  var parts = str.split(' ');
  if (parts.length !== 2) return {
    year: 0,
    month: 0,
    qtr: 0,
    sortKey: 0,
    text: str
  };
  var m = monthMap[parts[0]] || 0;
  var y = parseInt(parts[1]) || 0;
  var q = Math.ceil(m / 3);
  return {
    year: y,
    month: m,
    qtr: q,
    text: str,
    sortKey: y * 100 + m,
    qtrText: "Q".concat(q, " ").concat(y)
  };
};
var formatNum = function formatNum(num) {
  var decimals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return Number(num || 0).toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  });
};
var formatPct = function formatPct(num) {
  return (Number(num || 0) * 100).toFixed(1) + '%';
};
var cleanVal = function cleanVal(val) {
  return parseFloat((val || '0').toString().replace(/,/g, ''));
};
var parseCSV = function parseCSV(text) {
  var _rows$;
  var rows = [];
  var currentRow = [];
  var currentCell = '';
  var inQuotes = false;
  for (var i = 0; i < text.length; i++) {
    var char = text[i];
    if (inQuotes) {
      if (char === '"' && text[i + 1] === '"') {
        currentCell += '"';
        i++;
      } else if (char === '"') {
        inQuotes = false;
      } else {
        currentCell += char;
      }
    } else {
      if (char === '"') {
        inQuotes = true;
      } else if (char === ',') {
        currentRow.push(currentCell);
        currentCell = '';
      } else if (char === '\n' || char === '\r') {
        currentRow.push(currentCell);
        rows.push(currentRow);
        currentRow = [];
        currentCell = '';
        if (char === '\r' && text[i + 1] === '\n') i++;
      } else {
        currentCell += char;
      }
    }
  }
  if (currentCell || currentRow.length > 0) {
    currentRow.push(currentCell);
    rows.push(currentRow);
  }
  var headers = ((_rows$ = rows[0]) === null || _rows$ === void 0 ? void 0 : _rows$.map(function (h) {
    return h.trim();
  })) || [];
  var data = [];
  var _loop = function _loop(_i) {
    if (rows[_i].length < 2) return 1; // continue
    var obj = {};
    headers.forEach(function (h, j) {
      obj[h] = rows[_i][j] ? rows[_i][j].trim() : '';
    });
    data.push(obj);
  };
  for (var _i = 1; _i < rows.length; _i++) {
    if (_loop(_i)) continue;
  }
  return data;
};
function App() {
  // Recharts components — destructured inside App to guarantee scope
  var _RC = window.Recharts || {};
  var LineChart = _RC.LineChart, Line = _RC.Line, BarChart = _RC.BarChart,
      Bar = _RC.Bar, Cell = _RC.Cell, XAxis = _RC.XAxis, YAxis = _RC.YAxis,
      CartesianGrid = _RC.CartesianGrid, Tooltip = _RC.Tooltip,
      Legend = _RC.Legend, ResponsiveContainer = _RC.ResponsiveContainer;

  // SINGLETON: one Supabase client, reused everywhere
  var _sbSingleton = null;
  var getSB = function() {
    if (_sbSingleton) return _sbSingleton;
    var u = window.EMBEDDED_SUPABASE_URL || '';
    var k = window.EMBEDDED_SUPABASE_KEY || '';
    if (u && k) _sbSingleton = window.supabase.createClient(u, k);
    return _sbSingleton;
  };

  var _React$useState = React.useState('overview'),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    activeTab = _React$useState2[0],
    setActiveTab = _React$useState2[1];

  // --- PRESENCE & IDENTITY ---
  var _React$useState3 = React.useState(function () {
      return localStorage.getItem('jps_user_name') || '';
    }),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    currentUser = _React$useState4[0],
    setCurrentUser = _React$useState4[1];
  var _React$useState5 = React.useState(false),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    showNamePrompt = _React$useState6[0],
    setShowNamePrompt = _React$useState6[1];
  var _React$useState7 = React.useState(''),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    nameInput = _React$useState8[0],
    setNameInput = _React$useState8[1];
  var _React$useState9 = React.useState({}),
    _React$useState0 = _slicedToArray(_React$useState9, 2),
    onlineUsers = _React$useState0[0],
    setOnlineUsers = _React$useState0[1]; // { userId: { name, color, lastSeen } }
  var _React$useState1 = React.useState(null),
    _React$useState10 = _slicedToArray(_React$useState1, 2),
    realtimeToast = _React$useState10[0],
    setRealtimeToast = _React$useState10[1]; // { msg, type }
  var presenceChannelRef = React.useRef(null);
  var realtimeChannelRef = React.useRef(null);
  var userIdRef = React.useMemo(function () {
    var id = localStorage.getItem('jps_user_id');
    if (!id) {
      id = 'u_' + Math.random().toString(36).substr(2, 9);
      localStorage.setItem('jps_user_id', id);
    }
    return id;
  }, []);
  var AVATAR_COLORS = ['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b', '#ef4444', '#06b6d4', '#ec4899', '#84cc16'];
  var getColor = function getColor(userId) {
    return AVATAR_COLORS[Math.abs(userId.split('').reduce(function (a, c) {
      return a + c.charCodeAt(0);
    }, 0)) % AVATAR_COLORS.length];
  };
  var getInitials = function getInitials(name) {
    return name.trim().split(' ').map(function (w) {
      return w[0];
    }).join('').toUpperCase().slice(0, 2);
  };
  var showToast = function showToast(msg) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'info';
    setRealtimeToast({
      msg: msg,
      type: type
    });
    setTimeout(function () {
      return setRealtimeToast(null);
    }, 4000);
  };

  // Show name prompt on first load if no name stored
  React.useEffect(function () {
    if (!currentUser) setShowNamePrompt(true);
  }, []);
  var handleNameSubmit = function handleNameSubmit() {
    var name = nameInput.trim();
    if (!name) return;
    localStorage.setItem('jps_user_name', name);
    setCurrentUser(name);
    setShowNamePrompt(false);
  };

  // --- SUPABASE CONFIGURATION ---
  // Priority: embedded constants > localStorage > empty
  var _React$useState11 = React.useState(function () {
      if (window.EMBEDDED_SUPABASE_URL && window.EMBEDDED_SUPABASE_KEY) {
        // Embedded creds win — persist to localStorage so manual sync button works too
        var cfg = {
          url: window.EMBEDDED_SUPABASE_URL,
          key: window.EMBEDDED_SUPABASE_KEY
        };
        localStorage.setItem('jps_supabase_config', JSON.stringify(cfg));
        return cfg;
      }
      var saved = localStorage.getItem('jps_supabase_config');
      return saved ? JSON.parse(saved) : {
        url: '',
        key: ''
      };
    }),
    _React$useState12 = _slicedToArray(_React$useState11, 2),
    supabaseConfig = _React$useState12[0],
    setSupabaseConfig = _React$useState12[1];
  var _React$useState13 = React.useState('disconnected'),
    _React$useState14 = _slicedToArray(_React$useState13, 2),
    supabaseStatus = _React$useState14[0],
    setSupabaseStatus = _React$useState14[1];
  var _cse = React.useState(null), _csea = _slicedToArray(_cse, 2),
    cloudSyncError = _csea[0], setCloudSyncError = _csea[1];
  var updateSupabaseConfig = function updateSupabaseConfig(field, value) {
    setSupabaseConfig(function (prev) {
      var next = _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, field, value));
      localStorage.setItem('jps_supabase_config', JSON.stringify(next));
      return next;
    });
  };

  // STATE VARIABLES
  var _React$useState15 = React.useState([]),
    _React$useState16 = _slicedToArray(_React$useState15, 2),
    rawActuals = _React$useState16[0],
    setRawActuals = _React$useState16[1];
  var _React$useState17 = React.useState([]),
    _React$useState18 = _slicedToArray(_React$useState17, 2),
    rawBudget = _React$useState18[0],
    setRawBudget = _React$useState18[1];
  var _React$useState19 = React.useState([]),
    _React$useState20 = _slicedToArray(_React$useState19, 2),
    originalBudget = _React$useState20[0],
    setOriginalBudget = _React$useState20[1];
  var _React$useState21 = React.useState(true),
    _React$useState22 = _slicedToArray(_React$useState21, 2),
    isBudgetCommitted = _React$useState22[0],
    setIsBudgetCommitted = _React$useState22[1]; // always auto-committed
  var _isAlloc = React.useState(false), _isAllocA = _slicedToArray(_isAlloc, 2),
    isAllocating = _isAllocA[0], setIsAllocating = _isAllocA[1];

  // Dynamic budget year — auto-detected from uploaded CSV data
  var budgetYear = React.useMemo(function() {
    if (!rawBudget.length) return new Date().getFullYear();
    var yrs = rawBudget.map(function(d) {
      return parseTimeStr(d['Month']).year;
    }).filter(function(y) { return y > 2020 && y < 2035; });
    return yrs.length ? Math.max.apply(null, yrs) : new Date().getFullYear();
  }, [rawBudget]);

  var priorYear = budgetYear - 1;


  var _React$useState23 = React.useState({
      budget: false,
      actuals: false
    }),
    _React$useState24 = _slicedToArray(_React$useState23, 2),
    isLoadingUrl = _React$useState24[0],
    setIsLoadingUrl = _React$useState24[1];
  var _React$useState25 = React.useState(''),
    _React$useState26 = _slicedToArray(_React$useState25, 2),
    loadError = _React$useState26[0],
    setLoadError = _React$useState26[1];
  var _React$useState27 = React.useState(false),
    _React$useState28 = _slicedToArray(_React$useState27, 2),
    isPushing = _React$useState28[0],
    setIsPushing = _React$useState28[1];
  var _React$useState29 = React.useState(false),
    _React$useState30 = _slicedToArray(_React$useState29, 2),
    isSyncingConfigs = _React$useState30[0],
    setIsSyncingConfigs = _React$useState30[1];
  var _React$useState31 = React.useState(false),
    _React$useState32 = _slicedToArray(_React$useState31, 2),
    hasAutoRestored = _React$useState32[0],
    setHasAutoRestored = _React$useState32[1];
  var _React$useState33 = React.useState(false),
    _React$useState34 = _slicedToArray(_React$useState33, 2),
    hasAutoAllocated = _React$useState34[0],
    setHasAutoAllocated = _React$useState34[1];

  // Filters & State
  var _React$useState35 = React.useState('All'),
    _React$useState36 = _slicedToArray(_React$useState35, 2),
    ytdMonth = _React$useState36[0],
    setYtdMonth = _React$useState36[1];
  var _React$useState37 = React.useState('All'),
    _React$useState38 = _slicedToArray(_React$useState37, 2),
    fMonth = _React$useState38[0],
    setFMonth = _React$useState38[1];
  var _React$useState39 = React.useState('All'),
    _React$useState40 = _slicedToArray(_React$useState39, 2),
    fYear = _React$useState40[0],
    setFYear = _React$useState40[1];
  var _React$useState41 = React.useState('All'),
    _React$useState42 = _slicedToArray(_React$useState41, 2),
    fRC = _React$useState42[0],
    setFRC = _React$useState42[1];
  var _React$useState43 = React.useState('All'),
    _React$useState44 = _slicedToArray(_React$useState43, 2),
    fParish = _React$useState44[0],
    setFParish = _React$useState44[1];
  var _React$useState45 = React.useState('All'),
    _React$useState46 = _slicedToArray(_React$useState45, 2),
    fInd = _React$useState46[0],
    setFInd = _React$useState46[1];
  var _React$useState47 = React.useState('All'),
    _React$useState48 = _slicedToArray(_React$useState47, 2),
    fCust = _React$useState48[0],
    setFCust = _React$useState48[1];

  // Configuration State
  var _React$useState49 = React.useState({}),
    _React$useState50 = _slicedToArray(_React$useState49, 2),
    monthMapping = _React$useState50[0],
    setMonthMapping = _React$useState50[1];
  var _React$useState51 = React.useState({}),
    _React$useState52 = _slicedToArray(_React$useState51, 2),
    allocOverrides = _React$useState52[0],
    setAllocOverrides = _React$useState52[1];
  var _React$useState53 = React.useState({}),
    _React$useState54 = _slicedToArray(_React$useState53, 2),
    accountNameMap = _React$useState54[0],
    setAccountNameMap = _React$useState54[1];

  // Advanced Overrides Form State
  var _React$useState55 = React.useState('rc'),
    _React$useState56 = _slicedToArray(_React$useState55, 2),
    advOverrideDim = _React$useState56[0],
    setAdvOverrideDim = _React$useState56[1];
  var _React$useState57 = React.useState(''),
    _React$useState58 = _slicedToArray(_React$useState57, 2),
    advOverrideKey = _React$useState58[0],
    setAdvOverrideKey = _React$useState58[1];
  var _React$useState59 = React.useState(''),
    _React$useState60 = _slicedToArray(_React$useState59, 2),
    advOverrideVal = _React$useState60[0],
    setAdvOverrideVal = _React$useState60[1];
  var _React$useState61 = React.useState(1),
    _React$useState62 = _slicedToArray(_React$useState61, 2),
    advOverrideCustMonth = _React$useState62[0],
    setAdvOverrideCustMonth = _React$useState62[1];
  var _React$useState63 = React.useState(''),
    _React$useState64 = _slicedToArray(_React$useState63, 2),
    advOverrideCustKey = _React$useState64[0],
    setAdvOverrideCustKey = _React$useState64[1];
  var _React$useState65 = React.useState(''),
    _React$useState66 = _slicedToArray(_React$useState65, 2),
    advOverrideCustVal = _React$useState66[0],
    setAdvOverrideCustVal = _React$useState66[1];
  var _React$useState67 = React.useState({
      pct: {
        rc: {},
        industry: {},
        month: {}
      },
      vol: {}
    }),
    _React$useState68 = _slicedToArray(_React$useState67, 2),
    advOverrides = _React$useState68[0],
    setAdvOverrides = _React$useState68[1];
  var _React$useState69 = React.useState([]),
    _React$useState70 = _slicedToArray(_React$useState69, 2),
    allocationResults = _React$useState70[0],
    setAllocationResults = _React$useState70[1];
  var _React$useState71 = React.useState('rc'),
    _React$useState72 = _slicedToArray(_React$useState71, 2),
    varianceDim = _React$useState72[0],
    setVarianceDim = _React$useState72[1];
  var _React$useState73 = React.useState('name'),
    _React$useState74 = _slicedToArray(_React$useState73, 2),
    drillDownDim = _React$useState74[0],
    setDrillDownDim = _React$useState74[1];
  var _React$useState75 = React.useState(null),
    _React$useState76 = _slicedToArray(_React$useState75, 2),
    expandedRow = _React$useState76[0],
    setExpandedRow = _React$useState76[1];
  var _React$useState77 = React.useState(true),
    _React$useState78 = _slicedToArray(_React$useState77, 2),
    isNormalizeHurricane = _React$useState78[0],
    setIsNormalizeHurricane = _React$useState78[1];

  // Exec Summary Overview State
  var _React$useState79 = React.useState('leCustom'),
    _React$useState80 = _slicedToArray(_React$useState79, 2),
    overviewScenario = _React$useState80[0],
    setOverviewScenario = _React$useState80[1];
  var _React$useState81 = React.useState(''),
    _React$useState82 = _slicedToArray(_React$useState81, 2),
    overviewComments = _React$useState82[0],
    setOverviewComments = _React$useState82[1];

  // Pivot State & Explanations
  var _React$useState83 = React.useState('leCustom'),
    _React$useState84 = _slicedToArray(_React$useState83, 2),
    pivotScenario = _React$useState84[0],
    setPivotScenario = _React$useState84[1];
  var _React$useState85 = React.useState('All'),
    _React$useState86 = _slicedToArray(_React$useState85, 2),
    moversRC = _React$useState86[0],
    setMoversRC = _React$useState86[1];
  var _React$useState87 = React.useState('FY'),
    _React$useState88 = _slicedToArray(_React$useState87, 2),
    moversTimeFrame = _React$useState88[0],
    setMoversTimeFrame = _React$useState88[1];
  var _React$useState89 = React.useState(null),
    _React$useState90 = _slicedToArray(_React$useState89, 2),
    expandedPivotRC = _React$useState90[0],
    setExpandedPivotRC = _React$useState90[1];
  var _React$useState91 = React.useState({}),
    _React$useState92 = _slicedToArray(_React$useState91, 2),
    varianceComments = _React$useState92[0],
    setVarianceComments = _React$useState92[1];

  // Version Manager
  var _React$useState93 = React.useState([]),
    _React$useState94 = _slicedToArray(_React$useState93, 2),
    savedVersions = _React$useState94[0],
    setSavedVersions = _React$useState94[1];
  var _React$useState95 = React.useState(false),
    _React$useState96 = _slicedToArray(_React$useState95, 2),
    isVersionModalOpen = _React$useState96[0],
    setIsVersionModalOpen = _React$useState96[1];
  var _React$useState97 = React.useState({
      act25: true,
      bud26: true,
      act26: true,
      leCust: true,
      leRc: true,
      leBase: true,
      leCustom: true
    }),
    _React$useState98 = _slicedToArray(_React$useState97, 2),
    graphToggles = _React$useState98[0],
    setGraphToggles = _React$useState98[1];

  // --- REVENUE & TARIFF STATE ---
  var _React$useState99 = React.useState({
      'RT10': {
        energy: 8.31,
        custChg: 603.54,
        demand: 0
      },
      'RT20': {
        energy: 10.25,
        custChg: 1286.87,
        demand: 0
      },
      'RT40': {
        energy: 6.91,
        custChg: 9066.66,
        demand: 3105.57
      },
      'RT50': {
        energy: 4.90,
        custChg: 9066.66,
        demand: 2151.84
      },
      'RT60': {
        energy: 14.06,
        custChg: 3655.91,
        demand: 0
      },
      'RT70': {
        energy: 4.89,
        custChg: 9066.66,
        demand: 2852.04
      },
      'BU': {
        energy: 8.31,
        custChg: 603.54,
        demand: 0
      },
      'EV': {
        energy: 10.25,
        custChg: 1286.87,
        demand: 0
      }
    }),
    _React$useState100 = _slicedToArray(_React$useState99, 2),
    tariffRates = _React$useState100[0],
    setTariffRates = _React$useState100[1];
  var _React$useState101 = React.useState(162),
    _React$useState102 = _slicedToArray(_React$useState101, 2),
    fxRate = _React$useState102[0],
    setFxRate = _React$useState102[1];

  // --- CUSTOMER ENRICHMENT STATE ---
  // Stores manually entered data for NO HISTORY / UNALLOCATED accounts
  var _React$useState103 = React.useState({}),
    _React$useState104 = _slicedToArray(_React$useState103, 2),
    customerEnrichment = _React$useState104[0],
    setCustomerEnrichment = _React$useState104[1];
  // { acct: { name, rc, parish, industry, kvaDemand, notes } }

  // --- RISK & SCENARIO COMPARISON STATE ---
  var _React$useState105 = React.useState(10),
    _React$useState106 = _slicedToArray(_React$useState105, 2),
    riskThreshold = _React$useState106[0],
    setRiskThreshold = _React$useState106[1]; // % below budget = at risk

  // --- NET GEN HISTORICAL STATE (loaded from Supabase) ---
  var _React$useState107 = React.useState(null),
    _React$useState108 = _slicedToArray(_React$useState107, 2),
    netGenData = _React$useState108[0],
    setNetGenData = _React$useState108[1];
  // netGenData shape: { netGen: {2023:[],2024:[],2025:[]}, peak: {2023:[],2024:[],2025:[]}, loaded: false }

  // --- SORTING STATES (single declaration) ---
  var _React$useState109 = React.useState({
      key: null,
      direction: 'asc'
    }),
    _React$useState110 = _slicedToArray(_React$useState109, 2),
    monthlySort = _React$useState110[0],
    setMonthlySort = _React$useState110[1];
  var _React$useState111 = React.useState({
      key: 'variance',
      direction: 'descending'
    }),
    _React$useState112 = _slicedToArray(_React$useState111, 2),
    topSort = _React$useState112[0],
    setTopSort = _React$useState112[1];
  var _React$useState113 = React.useState({
      key: 'variance',
      direction: 'ascending'
    }),
    _React$useState114 = _slicedToArray(_React$useState113, 2),
    botSort = _React$useState114[0],
    setBotSort = _React$useState114[1];
  var _React$useState115 = React.useState({
      key: 'a26',
      direction: 'descending'
    }),
    _React$useState116 = _slicedToArray(_React$useState115, 2),
    varSort = _React$useState116[0],
    setVarSort = _React$useState116[1];
  var _React$useState117 = React.useState({
      key: 'rc',
      direction: 'asc'
    }),
    _React$useState118 = _slicedToArray(_React$useState117, 2),
    forecastSort = _React$useState118[0],
    setForecastSort = _React$useState118[1];
  var handleSortRequest = function handleSortRequest(key, currentSort, setSortFn) {
    var direction = 'ascending';
    if (currentSort && currentSort.key === key && currentSort.direction === 'ascending') {
      direction = 'descending';
    }
    setSortFn({
      key: key,
      direction: direction
    });
  };

  // Name Conflicts Logic
  var nameConflicts = React.useMemo(function () {
    if (!rawActuals.length && !rawBudget.length) return [];
    var acctMap = {};
    [].concat(_toConsumableArray(rawActuals), _toConsumableArray(rawBudget)).forEach(function (d) {
      var acct = (d['JPS A/c'] || 'Unassigned').trim();
      var name = (d['Name'] || 'Unassigned').trim();
      if (acct === 'Unassigned' || acct === 'Unallocated' || !acct || !name) return;
      if (!acctMap[acct]) acctMap[acct] = new Set();
      acctMap[acct].add(name);
    });
    return Object.entries(acctMap).filter(function (_ref4) {
      var _ref5 = _slicedToArray(_ref4, 2),
        acct = _ref5[0],
        names = _ref5[1];
      return names.size > 1;
    }).map(function (_ref6) {
      var _ref7 = _slicedToArray(_ref6, 2),
        acct = _ref7[0],
        names = _ref7[1];
      return {
        acct: acct,
        names: Array.from(names)
      };
    }).sort(function (a, b) {
      return a.acct.localeCompare(b.acct);
    });
  }, [rawActuals, rawBudget]);

  // 1. DATA LOAD & CLOUD SYNC METHOD (Supabase)
  var fetchCloudData = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
      var silent,
        url,
        key,
        loadedSomething,
        supabaseClient,
        downloadCSV,
        actText,
        parsedAct,
        budText,
        pb,
        _yield$supabaseClient2,
        configData,
        configError,
        parsed,
        _args2 = arguments,
        _t;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            silent = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : false;
            url = (supabaseConfig.url || window.EMBEDDED_SUPABASE_URL || "").trim();
            key = (supabaseConfig.key || window.EMBEDDED_SUPABASE_KEY || "").trim();
            if (!(!url || !key)) {
              _context2.n = 1;
              break;
            }
            if (!silent) alert("Please enter valid Supabase Project URL and Anon Key.");
            setSupabaseStatus('disconnected');
            return _context2.a(2, false);
          case 1:
            if (!silent) setIsLoadingUrl({
              budget: true,
              actuals: true
            });
            setSupabaseStatus('connecting');
            loadedSomething = false;
            _context2.p = 2;
            supabaseClient = window.supabase.createClient(url, key);
            downloadCSV = /*#__PURE__*/function () {
              var _ref9 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(filename) {
                var _yield$supabaseClient, data, error;
                return _regenerator().w(function (_context) {
                  while (1) switch (_context.n) {
                    case 0:
                      _context.n = 1;
                      return fetch(supabaseClient.storage.from('jps_data').getPublicUrl(filename).data.publicUrl, {cache: 'no-store'});
                    case 1:
                      _yield$supabaseClient = _context.v;
                      data = _yield$supabaseClient.data;
                      error = _yield$supabaseClient.error;
                      if (!error) {
                        _context.n = 2;
                        break;
                      }
                      console.error("Failed downloading ".concat(filename), error);
                      return _context.a(2, null);
                    case 2:
                      if (!data) {
                        _context.n = 4;
                        break;
                      }
                      _context.n = 3;
                      return data.text();
                    case 3:
                      return _context.a(2, _context.v);
                    case 4:
                      return _context.a(2, null);
                  }
                }, _callee);
              }));
              return function downloadCSV(_x) {
                return _ref9.apply(this, arguments);
              };
            }();
            _context2.n = 3;
            return downloadCSV('actuals.csv');
          case 3:
            actText = _context2.v;
            if (actText) {
              parsedAct = parseCSV(actText);
              if (parsedAct.length > 0) {
                setRawActuals(parsedAct);
                loadedSomething = true;
              } else if (!silent) alert("actuals.csv found, but empty or improperly formatted.");
            } else if (!silent) alert("Could not find 'actuals.csv' in the Supabase 'jps_data' bucket.");
            _context2.n = 4;
            return downloadCSV('budget.csv');
          case 4:
            budText = _context2.v;
            if (budText) {
              pb = parseCSV(budText);
              if (pb.length > 0) {
                setRawBudget(pb);
                setOriginalBudget(_toConsumableArray(pb));
                loadedSomething = true;
              } else if (!silent) alert("budget.csv found, but appears to be empty.");
            } else if (!silent) alert("Could not find 'budget.csv' in the Supabase 'jps_data' bucket.");
            _context2.n = 5;
            return supabaseClient.from('dashboard_state').select('payload').eq('id', 1).single();
          case 5:
            _yield$supabaseClient2 = _context2.v;
            configData = _yield$supabaseClient2.data;
            configError = _yield$supabaseClient2.error;
            if (configData && configData.payload) {
              parsed = configData.payload;
              if (Array.isArray(parsed)) setSavedVersions(parsed);else {
                setSavedVersions(parsed.versions || []);
                setVarianceComments(parsed.comments || {});
                setOverviewComments(parsed.overviewComments || '');
                if (parsed.accountNameMap) setAccountNameMap(parsed.accountNameMap);
              }
            }
            if (!silent && loadedSomething) alert("Data successfully synced from Supabase!");
            setSupabaseStatus(loadedSomething ? 'connected' : 'error');
            return _context2.a(2, loadedSomething);
          case 6:
            _context2.p = 6;
            _t = _context2.v;
            console.error("Cloud Sync Error — see User Guide tab", _t);
            if (!silent) console.error("Supabase boot fetch failed");
            setSupabaseStatus('error');
            return _context2.a(2, false);
          case 7:
            _context2.p = 7;
            if (!silent) setIsLoadingUrl({
              budget: false,
              actuals: false
            });
            return _context2.f(7);
          case 8:
            return _context2.a(2);
        }
      }, _callee2, null, [[2, 6, 7, 8]]);
    }));
    return function fetchCloudData() {
      return _ref8.apply(this, arguments);
    };
  }();

  // 2. SILENT BOOT SEQUENCE
  React.useEffect(function () {
    var isMounted = true;
    var bootApp = /*#__PURE__*/function () {
      var _ref0 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        var savedStr, savedCfg, bootCfg, cloudSuccess, supabaseClient, downloadCSV, _yield$Promise$all, _yield$Promise$all2, actText, budText, pb, _yield$supabaseClient4, configData, parsed, actRes, budRes, _pb, _t2, _t3, _t4, _t5, _t6;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.p = _context4.n) {
            case 0:
              // Use embedded creds first, then localStorage
              savedStr = localStorage.getItem('jps_supabase_config');
              savedCfg = savedStr ? JSON.parse(savedStr) : null;
              bootCfg = window.EMBEDDED_SUPABASE_URL && window.EMBEDDED_SUPABASE_KEY ? {
                url: window.EMBEDDED_SUPABASE_URL,
                key: window.EMBEDDED_SUPABASE_KEY
              } : savedCfg;
              cloudSuccess = false;
              if (!(bootCfg && bootCfg.url && bootCfg.key)) {
                _context4.n = 5;
                break;
              }
              setSupabaseStatus('connecting');
              _context4.p = 1;
              supabaseClient = window.supabase.createClient(bootCfg.url.trim(), bootCfg.key.trim());
              downloadCSV = /*#__PURE__*/function () {
                var _ref1 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(filename) {
                  var _yield$supabaseClient3, data, error;
                  return _regenerator().w(function (_context3) {
                    while (1) switch (_context3.n) {
                      case 0:
                        _context3.n = 1;
                        return fetch(supabaseClient.storage.from('jps_data').getPublicUrl(filename).data.publicUrl, {cache: 'no-store'});
                      case 1:
                        _yield$supabaseClient3 = _context3.v;
                        data = _yield$supabaseClient3.data;
                        error = _yield$supabaseClient3.error;
                        if (!data) {
                          _context3.n = 3;
                          break;
                        }
                        _context3.n = 2;
                        return data.text();
                      case 2:
                        return _context3.a(2, _context3.v);
                      case 3:
                        return _context3.a(2, null);
                    }
                  }, _callee3);
                }));
                return function downloadCSV(_x2) {
                  return _ref1.apply(this, arguments);
                };
              }(); // Parallel fetch for speed
              _context4.n = 2;
              return Promise.all([downloadCSV('actuals.csv'), downloadCSV('budget.csv')]);
            case 2:
              _yield$Promise$all = _context4.v;
              _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2);
              actText = _yield$Promise$all2[0];
              budText = _yield$Promise$all2[1];
              if (actText && isMounted) {
                setRawActuals(parseCSV(actText));
                setHasAutoAllocated(false);
                cloudSuccess = true;
              }
              if (budText && isMounted) {
                pb = parseCSV(budText);
                setRawBudget(pb);
                setOriginalBudget(_toConsumableArray(pb));
                setHasAutoAllocated(false);
                cloudSuccess = true;
              }
              _context4.n = 3;
              return supabaseClient.from('dashboard_state').select('payload').eq('id', 1).single();
            case 3:
              _yield$supabaseClient4 = _context4.v;
              configData = _yield$supabaseClient4.data;
              if (configData && configData.payload && isMounted) {
                parsed = configData.payload;
                if (Array.isArray(parsed)) setSavedVersions(parsed);else {
                  setSavedVersions(parsed.versions || []);
                  setVarianceComments(parsed.comments || {});
                  setOverviewComments(parsed.overviewComments || '');
                  if (parsed.accountNameMap) setAccountNameMap(parsed.accountNameMap);
                  if (parsed.customerEnrichment) setCustomerEnrichment(parsed.customerEnrichment);
                  if (parsed.tariffRates) setTariffRates(parsed.tariffRates);
                  if (parsed.fxRate) setFxRate(parsed.fxRate);
                }
              }
              if (isMounted) setSupabaseStatus(cloudSuccess ? 'connected' : 'error');
              _context4.n = 5;
              break;
            case 4:
              _context4.p = 4;
              _t2 = _context4.v;
              console.log("Boot cloud fetch failed", _t2);
              if (isMounted) setSupabaseStatus('error');
            case 5:
              if (!(!cloudSuccess && isMounted)) {
                _context4.n = 14;
                break;
              }
              _context4.p = 6;
              _context4.n = 7;
              return fetch('./JPS%20Actuals%20data.csv');
            case 7:
              actRes = _context4.v;
              if (!actRes.ok) {
                _context4.n = 9;
                break;
              }
              _t3 = setRawActuals;
              _t4 = parseCSV;
              _context4.n = 8;
              return actRes.text();
            case 8:
              _t3(_t4(_context4.v));
            case 9:
              _context4.n = 10;
              return fetch('./JPS%20Budget%202026%20data.csv');
            case 10:
              budRes = _context4.v;
              if (!budRes.ok) {
                _context4.n = 12;
                break;
              }
              _t5 = parseCSV;
              _context4.n = 11;
              return budRes.text();
            case 11:
              _pb = _t5(_context4.v);
              setRawBudget(_pb);
              setOriginalBudget(_toConsumableArray(_pb));
            case 12:
              _context4.n = 14;
              break;
            case 13:
              _context4.p = 13;
              _t6 = _context4.v;
              console.log("Could not auto-load files locally.", _t6);
              setLoadError("Local fetch blocked by browser. Please configure Supabase Sync or use manual file upload.");
            case 14:
              return _context4.a(2);
          }
        }, _callee4, null, [[6, 13], [1, 4]]);
      }));
      return function bootApp() {
        return _ref0.apply(this, arguments);
      };
    }();
    bootApp();
    return function () {
      isMounted = false;
    };
  }, []);

  // Load audit log when Audit Log tab is opened
  React.useEffect(function () {
    if (activeTab !== 'auditlog') return;
    var sb = getSB(); if (!sb) return;
    sb.from('audit_log').select('*').order('created_at', {
      ascending: false
    }).limit(500).then(function (_ref10) {
      var data = _ref10.data,
        error = _ref10.error;
      if (!error && data) {
        setAuditLog(data.map(function (r) {
          return {
            id: r.id,
            timestamp: r.created_at,
            user: r.user_name,
            action: r.action,
            details: r.details || {}
          };
        }));
      }
    });
  }, [activeTab]);

  // 3. REALTIME + PRESENCE SUBSCRIPTION (deferred — non-blocking)
  React.useEffect(function () {
    var url = window.EMBEDDED_SUPABASE_URL;
    var key = window.EMBEDDED_SUPABASE_KEY;
    if (!url || !key || !currentUser) return;
    // Defer to not block initial render
    var timer = setTimeout(function () {
      var sb = window.supabase.createClient(url, key);

      // --- Presence channel: who's online ---
      var presenceCh = sb.channel('jps_presence', {
        config: {
          presence: {
            key: userIdRef
          }
        }
      });
      presenceCh.on('presence', {
        event: 'sync'
      }, function () {
        var state = presenceCh.presenceState();
        var users = {};
        Object.entries(state).forEach(function (_ref11) {
          var _ref12 = _slicedToArray(_ref11, 2),
            uid = _ref12[0],
            presences = _ref12[1];
          var p = presences[0];
          users[uid] = {
            name: p.name,
            color: getColor(uid),
            lastSeen: p.online_at
          };
        });
        setOnlineUsers(users);
      }).on('presence', {
        event: 'join'
      }, function (_ref13) {
        var _newPresences$;
        var uid = _ref13.key,
          newPresences = _ref13.newPresences;
        var name = (_newPresences$ = newPresences[0]) === null || _newPresences$ === void 0 ? void 0 : _newPresences$.name;
        if (name && name !== currentUser) showToast("".concat(name, " joined"), 'join');
      }).on('presence', {
        event: 'leave'
      }, function (_ref14) {
        var _leftPresences$;
        var uid = _ref14.key,
          leftPresences = _ref14.leftPresences;
        var name = (_leftPresences$ = leftPresences[0]) === null || _leftPresences$ === void 0 ? void 0 : _leftPresences$.name;
        if (name && name !== currentUser) showToast("".concat(name, " left"), 'leave');
      }).subscribe(/*#__PURE__*/function () {
        var _ref15 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(status) {
          return _regenerator().w(function (_context5) {
            while (1) switch (_context5.n) {
              case 0:
                if (!(status === 'SUBSCRIBED')) {
                  _context5.n = 1;
                  break;
                }
                _context5.n = 1;
                return presenceCh.track({
                  name: currentUser,
                  online_at: new Date().toISOString()
                });
              case 1:
                return _context5.a(2);
            }
          }, _callee5);
        }));
        return function (_x3) {
          return _ref15.apply(this, arguments);
        };
      }());
      presenceChannelRef.current = presenceCh;

      // --- Realtime channel: dashboard_state + audit_log ---
      var realtimeCh = sb.channel('jps_realtime').on('postgres_changes', {
        event: 'UPDATE',
        schema: 'public',
        table: 'dashboard_state',
        filter: 'id=eq.1'
      }, function (payload) {
        var _payload$new;
        if (!payload.new || !payload.new.payload) return;
        var parsed = payload.new.payload;
        setSavedVersions(parsed.versions || []);
        setVarianceComments(parsed.comments || {});
        setOverviewComments(parsed.overviewComments || '');
        if (parsed.accountNameMap) setAccountNameMap(parsed.accountNameMap);
        var updateUser = ((_payload$new = payload.new) === null || _payload$new === void 0 || (_payload$new = _payload$new.payload) === null || _payload$new === void 0 ? void 0 : _payload$new.lastUpdatedBy) || 'A teammate';
        showToast("".concat(updateUser, " updated scenarios"), 'update');
      }).on('postgres_changes', {
        event: 'INSERT',
        schema: 'public',
        table: 'audit_log'
      }, function (payload) {
        if (!payload.new) return;
        var entry = payload.new;
        // Only show toast for other users' actions
        if (entry.user_name !== currentUser) {
          showToast("".concat(entry.user_name, ": ").concat(entry.action.replace(/_/g, ' ')), 'info');
        }
        setAuditLog(function (prev) {
          return [{
            id: entry.id,
            timestamp: entry.created_at,
            user: entry.user_name,
            action: entry.action,
            details: entry.details
          }].concat(_toConsumableArray(prev)).slice(0, 200);
        });
      }).on('postgres_changes', {
        event: 'INSERT',
        schema: 'public',
        table: 'net_gen_historical'
      }, function (payload) {
        if (!payload.new) return;
        var r = payload.new;
        setNetGenData(function (prev) {
          if (!prev || !prev.loaded) return prev;
          var ng = _objectSpread({}, prev.netGen);
          var pk = _objectSpread({}, prev.peak);
          if (!ng[r.year]) {
            ng[r.year] = Array(12).fill(0);
            pk[r.year] = Array(12).fill(0);
          }
          ng[r.year][r.month - 1] = Number(r.net_gen_mwh);
          pk[r.year][r.month - 1] = Number(r.peak_mw);
          return {
            netGen: ng,
            peak: pk,
            loaded: true
          };
        });
      }).on('postgres_changes', {
        event: 'UPDATE',
        schema: 'public',
        table: 'net_gen_historical'
      }, function (payload) {
        if (!payload.new) return;
        var r = payload.new;
        setNetGenData(function (prev) {
          if (!prev || !prev.loaded) return prev;
          var ng = _objectSpread({}, prev.netGen);
          var pk = _objectSpread({}, prev.peak);
          if (ng[r.year]) {
            ng[r.year] = _toConsumableArray(ng[r.year]);
            pk[r.year] = _toConsumableArray(pk[r.year]);
            ng[r.year][r.month - 1] = Number(r.net_gen_mwh);
            pk[r.year][r.month - 1] = Number(r.peak_mw);
          }
          return {
            netGen: ng,
            peak: pk,
            loaded: true
          };
        });
        showToast("Net Gen ".concat(monthNames[(r.month || 1) - 1], " ").concat(r.year, " updated"), 'update');
      }).on('postgres_changes', {
        event: 'DELETE',
        schema: 'public',
        table: 'net_gen_historical'
      }, function (payload) {
        if (!payload.old) return;
        var r = payload.old;
        setNetGenData(function (prev) {
          if (!prev || !prev.loaded) return prev;
          var ng = _objectSpread({}, prev.netGen);
          var pk = _objectSpread({}, prev.peak);
          if (ng[r.year]) {
            ng[r.year] = _toConsumableArray(ng[r.year]);
            pk[r.year] = _toConsumableArray(pk[r.year]);
            ng[r.year][r.month - 1] = 0;
            pk[r.year][r.month - 1] = 0;
          }
          return {
            netGen: ng,
            peak: pk,
            loaded: true
          };
        });
        // Refresh the ng table in data entry tab
        setNgTableData(function (prev) {
          return prev.filter(function (row) {
            return !(row.year === r.year && row.month === r.month);
          });
        });
        showToast("Net Gen ".concat(monthNames[(r.month || 1) - 1], " ").concat(r.year, " deleted"), 'info');
      }).subscribe();
      realtimeChannelRef.current = realtimeCh;
      return function () {
        if (presenceChannelRef.current) sb.removeChannel(presenceChannelRef.current);
        if (realtimeChannelRef.current) sb.removeChannel(realtimeChannelRef.current);
      };
    }, 3000); // 3s delay — let data load first
    return function () {
      return clearTimeout(timer);
    };
  }, [currentUser]);
  React.useEffect(function () {
    if (!hasAutoRestored && originalBudget.length > 0 && rawActuals.length > 0 && savedVersions.length > 0) {
      var defaultScenario = savedVersions.find(function (v) {
        return v.isDefault;
      });
      if (defaultScenario) {
        var _defaultScenario$isNo;
        setRawBudget(_toConsumableArray(originalBudget));
        setIsBudgetCommitted(false);
        setMonthMapping(defaultScenario.monthMapping || {});
        setAllocOverrides(defaultScenario.allocOverrides || {});
        var loadedAdv = defaultScenario.advOverrides || {
          pct: {
            rc: {},
            industry: {},
            month: {}
          },
          vol: {}
        };
        if (!loadedAdv.pct && !loadedAdv.vol) loadedAdv = {
          pct: loadedAdv,
          vol: {}
        };
        setAdvOverrides(loadedAdv);
        setIsNormalizeHurricane((_defaultScenario$isNo = defaultScenario.isNormalizeHurricane) !== null && _defaultScenario$isNo !== void 0 ? _defaultScenario$isNo : true);
        setHasAutoRestored(true);
      } else {
        setHasAutoRestored(true);
      }
    }
  }, [originalBudget, rawActuals, savedVersions, hasAutoRestored]);

  // Fetch net gen historical from Supabase on boot
  React.useEffect(function () {
    var sb = getSB(); if (!sb) return;
    sb.from('net_gen_historical').select('*').order('year', {
      ascending: true
    }).order('month', {
      ascending: true
    }).then(function (_ref16) {
      var data = _ref16.data,
        error = _ref16.error;
      if (error || !data || data.length === 0) {
        console.warn('net_gen_historical fetch failed or empty:', error === null || error === void 0 ? void 0 : error.message);
        return;
      }
      var ng = {};
      var pk = {};
      data.forEach(function (r) {
        if (!ng[r.year]) {
          ng[r.year] = Array(12).fill(0);
          pk[r.year] = Array(12).fill(0);
        }
        ng[r.year][r.month - 1] = Number(r.net_gen_mwh);
        pk[r.year][r.month - 1] = Number(r.peak_mw);
      });
      setNetGenData({
        netGen: ng,
        peak: pk,
        loaded: true
      });
    });
  }, []);

  // Load net gen table when Data Entry tab is opened
  React.useEffect(function () {
    if (activeTab !== 'dataentry') return;
    var sbDE = getSB(); if (!sbDE) return;
    setIsLoadingNgTable(true);
    sbDE.from('net_gen_historical').select('*').order('year', {
      ascending: false
    }).order('month', {
      ascending: false
    }).then(function (_ref17) {
      var data = _ref17.data,
        error = _ref17.error;
      setIsLoadingNgTable(false);
      if (!error && data) setNgTableData(data);
    });
  }, [activeTab]);

  // --- REVENUE HELPERS ---
  var getRcKey = function getRcKey(rc) {
    var r = (rc || '').toUpperCase();
    if (r.startsWith('RT10')) return 'RT10';
    if (r.startsWith('RT20')) return 'RT20';
    if (r.startsWith('RT40')) return 'RT40';
    if (r.startsWith('RT50')) return 'RT50';
    if (r.startsWith('RT60')) return 'RT60';
    if (r.startsWith('RT70')) return 'RT70';
    if (r === 'BU') return 'BU';
    if (r === 'EV') return 'EV';
    return 'RT10';
  };
  var kwhToRevUSD = function kwhToRevUSD(kwh, rc) {
    var key = getRcKey(rc);
    var rate = tariffRates[key] || tariffRates['RT10'];
    return kwh * rate.energy / fxRate;
  };
  var formatUSD = function formatUSD(num) {
    return '$' + Number(num || 0).toLocaleString('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    });
  };
  var formatUSDb = function formatUSDb(num) {
    var n = Number(num || 0);
    if (Math.abs(n) >= 1000000) return '$' + (n / 1000000).toFixed(2) + 'M';
    if (Math.abs(n) >= 1000) return '$' + (n / 1000).toFixed(1) + 'K';
    return '$' + n.toFixed(0);
  };

  // Global Filter Logic
  var getFiltered = React.useCallback(function (data) {
    return data.filter(function (d) {
      if (fYear !== 'All' && d.year.toString() !== fYear) return false;
      if (fMonth !== 'All' && monthNames[d.month - 1] !== fMonth) return false;
      if (fRC !== 'All' && d.rc !== fRC) return false;
      if (fParish !== 'All' && d.parish !== fParish) return false;
      if (fInd !== 'All' && d.industry !== fInd) return false;
      if (fCust !== 'All' && d.name !== fCust) return false;
      return true;
    });
  }, [fYear, fMonth, fRC, fParish, fInd, fCust]);

  // --- Engine ---
  var _React$useMemo = React.useMemo(function () {
      if (rawActuals.length === 0 || rawBudget.length === 0) return {
        actuals: [],
        budget: [],
        leCustGrowth: [],
        leRCGrowth: [],
        leBaseGrowth: [],
        leCustomGrowth: [],
        dimensions: {
          rcs: [],
          parishes: [],
          inds: [],
          years: [],
          customers: []
        }
      };
      var normA = rawActuals.map(function (d) {
        var acct = (d['JPS A/c'] || 'Unassigned').trim();
        var rawName = (d['Name'] || 'Unassigned').trim();
        return _objectSpread({
          source: d['Source'] || 'Postpaid',
          rc: (d['Rate category'] || 'Unassigned').trim(),
          parish: (d['Updated Parish'] || 'Unassigned').trim(),
          acct: acct,
          name: accountNameMap[acct] || rawName,
          industry: (d['Industry'] || 'Unassigned').trim(),
          kwh: cleanVal(d['Sum of net_kwh_billed_consump'])
        }, parseTimeStr(d['Month']));
      });
      var normB = rawBudget.map(function (d) {
        var acct = (d['JPS A/c'] || 'Unallocated').trim();
        var rawName = (d['Name'] || 'Unallocated').trim();
        return _objectSpread({
          source: d['Source'] || 'Budget',
          rc: (d['Rate category'] || 'Unassigned').trim(),
          parish: (d['Updated Parish'] || 'Unassigned').trim(),
          acct: acct,
          name: accountNameMap[acct] || rawName,
          industry: (d['Industry'] || 'Unallocated').trim(),
          kwh: cleanVal(d['Sum of Budget'])
        }, parseTimeStr(d['Month']));
      });
      var ytd25Cust = {};
      var ytd26Cust = {};
      var ytd25RC = {};
      var ytd26RC = {};
      normA.filter(function (d) {
        return d.month <= 3;
      }).forEach(function (d) {
        if (d.year === priorYear) {
          ytd25Cust[d.acct] = (ytd25Cust[d.acct] || 0) + d.kwh;
          ytd25RC[d.rc] = (ytd25RC[d.rc] || 0) + d.kwh;
        } else if (d.year === budgetYear) {
          ytd26Cust[d.acct] = (ytd26Cust[d.acct] || 0) + d.kwh;
          ytd26RC[d.rc] = (ytd26RC[d.rc] || 0) + d.kwh;
        }
      });
      var q1Actuals26 = normA.filter(function (d) {
        return d.year === budgetYear && d.month <= 3;
      }).map(function (d) {
        return _objectSpread(_objectSpread({}, d), {}, {
          source: 'LE Forecast',
          type: 'Actual'
        });
      });
      var leCustData = _toConsumableArray(q1Actuals26);
      var leRCData = _toConsumableArray(q1Actuals26);
      var leBaseData = _toConsumableArray(q1Actuals26);
      var leCustomData = _toConsumableArray(q1Actuals26);
      var bRcTotal = {};
      var bCustTotal = {};
      var custMonthTotalBud = {};
      normB.filter(function (d) {
        return d.year === budgetYear && d.month >= 4;
      }).forEach(function (b) {
        bRcTotal["".concat(b.month, "|").concat(b.rc)] = (bRcTotal["".concat(b.month, "|").concat(b.rc)] || 0) + b.kwh;
        bCustTotal["".concat(b.month, "|").concat(b.acct)] = (bCustTotal["".concat(b.month, "|").concat(b.acct)] || 0) + b.kwh;
        var cmKey = "".concat(b.name, "|").concat(b.month);
        custMonthTotalBud[cmKey] = (custMonthTotalBud[cmKey] || 0) + b.kwh;
      });
      normB.filter(function (d) {
        return d.year === budgetYear && d.month >= 4;
      }).forEach(function (b) {
        var custMonthlyDelta = ((ytd26Cust[b.acct] || 0) - (ytd25Cust[b.acct] || 0)) / 3;
        var rcMonthlyDelta = ((ytd26RC[b.rc] || 0) - (ytd25RC[b.rc] || 0)) / 3;
        var rcWeight = b.kwh / (bRcTotal["".concat(b.month, "|").concat(b.rc)] || 1);
        var custWeight = b.kwh / (bCustTotal["".concat(b.month, "|").concat(b.acct)] || 1);
        var custKwh = Math.max(0, b.kwh + custMonthlyDelta * custWeight);
        var rcKwh = Math.max(0, b.kwh + rcMonthlyDelta * rcWeight);
        leCustData.push(_objectSpread(_objectSpread({}, b), {}, {
          source: 'LE - Cust Vol Growth',
          type: 'Forecast',
          kwh: custKwh
        }));
        leRCData.push(_objectSpread(_objectSpread({}, b), {}, {
          source: 'LE - RC Vol Growth',
          type: 'Forecast',
          kwh: rcKwh
        }));
        var isCustRc = ['RT10', 'RT20', 'RT60'].includes(b.rc.toUpperCase());
        leBaseData.push(_objectSpread(_objectSpread({}, b), {}, {
          source: 'LE - Base',
          type: 'Forecast',
          kwh: isCustRc ? custKwh : rcKwh
        }));
        var customKwh = b.kwh;
        var hasOverride = false;
        var cmKey = "".concat(b.name, "|").concat(b.month);
        if (advOverrides.vol && advOverrides.vol[b.name] && advOverrides.vol[b.name][b.month] !== undefined) {
          var targetKwh = advOverrides.vol[b.name][b.month] * 1000000;
          var totalBud = custMonthTotalBud[cmKey] || 1;
          var weight = b.kwh / totalBud;
          customKwh = targetKwh * weight;
          hasOverride = true;
        } else {
          var overridePct = 0;
          if (advOverrides.pct && advOverrides.pct.month && advOverrides.pct.month[b.month] !== undefined) {
            overridePct = advOverrides.pct.month[b.month];
            hasOverride = true;
          } else if (advOverrides.pct && advOverrides.pct.industry && advOverrides.pct.industry[b.industry] !== undefined) {
            overridePct = advOverrides.pct.industry[b.industry];
            hasOverride = true;
          } else if (advOverrides.pct && advOverrides.pct.rc && advOverrides.pct.rc[b.rc] !== undefined) {
            overridePct = advOverrides.pct.rc[b.rc];
            hasOverride = true;
          }
          if (hasOverride) customKwh = Math.max(0, b.kwh * (1 + overridePct / 100));
        }
        leCustomData.push(_objectSpread(_objectSpread({}, b), {}, {
          source: 'LE - Custom',
          type: 'Forecast',
          kwh: customKwh
        }));
      });
      var rcs = _toConsumableArray(new Set([].concat(_toConsumableArray(normA), _toConsumableArray(normB)).map(function (d) {
        return d.rc;
      }))).sort(function (a, b) {
        return getRcWeight(a) - getRcWeight(b);
      });
      var parishes = _toConsumableArray(new Set([].concat(_toConsumableArray(normA), _toConsumableArray(normB)).map(function (d) {
        return d.parish;
      }))).sort();
      var inds = _toConsumableArray(new Set(normA.map(function (d) {
        return d.industry;
      }))).sort();
      var years = _toConsumableArray(new Set([].concat(_toConsumableArray(normA), _toConsumableArray(normB)).map(function (d) {
        return d.year;
      }))).filter(function (y) {
        return y > 0;
      }).sort();
      var customers = _toConsumableArray(new Set([].concat(_toConsumableArray(normA), _toConsumableArray(normB)).map(function (d) {
        return d.name;
      }))).filter(function (n) {
        return n && n !== 'Unassigned' && n !== 'Unallocated';
      }).sort();
      return {
        actuals: normA,
        budget: normB,
        leCustGrowth: leCustData,
        leRCGrowth: leRCData,
        leBaseGrowth: leBaseData,
        leCustomGrowth: leCustomData,
        dimensions: {
          rcs: rcs,
          parishes: parishes,
          inds: inds,
          years: years,
          customers: customers
        }
      };
    }, [rawActuals, rawBudget, isNormalizeHurricane, advOverrides, accountNameMap]),
    actuals = _React$useMemo.actuals,
    budget = _React$useMemo.budget,
    leCustGrowth = _React$useMemo.leCustGrowth,
    leRCGrowth = _React$useMemo.leRCGrowth,
    leBaseGrowth = _React$useMemo.leBaseGrowth,
    leCustomGrowth = _React$useMemo.leCustomGrowth,
    dimensions = _React$useMemo.dimensions;
  React.useEffect(function () {
    if (dimensions.rcs.length > 0 && !advOverrideKey) setAdvOverrideKey(dimensions.rcs[0]);
    if (dimensions.customers.length > 0 && !advOverrideCustKey) setAdvOverrideCustKey(dimensions.customers[0]);
  }, [dimensions.rcs, dimensions.customers, advOverrideKey, advOverrideCustKey]);
  React.useEffect(function () {
    if (rawBudget.length === 0) return;
    var bMonths = _toConsumableArray(new Set(rawBudget.map(function (d) {
      return d.Month;
    }))).filter(Boolean);
    var aMonths = _toConsumableArray(new Set(rawActuals.map(function (d) {
      return d.Month;
    }))).filter(Boolean);
    var aQuarters = _toConsumableArray(new Set(rawActuals.map(function (d) {
      var p = parseTimeStr(d.Month);
      return p.year > 0 ? "Q".concat(p.qtr, " ").concat(p.year, " Average") : null;
    }))).filter(Boolean);
    var getRef = function getRef(target) {
      return aQuarters.includes(target) ? target : aMonths.includes(target) ? target : aQuarters.length > 0 ? aQuarters[aQuarters.length - 1] : '';
    };
    if (Object.keys(monthMapping).length === 0) {
      var newMapping = {};
      bMonths.forEach(function (bm) {
        var p = parseTimeStr(bm);
        if (p.year === 2026 && p.qtr <= 2) newMapping[bm] = getRef('Q1 2026 Average');else newMapping[bm] = getRef('Q4 2025 Average');
      });
      setMonthMapping(newMapping);
    }
  }, [rawBudget, rawActuals, isBudgetCommitted, monthMapping]);

  // Auto-allocation: pre-indexed for O(1) lookups (fast even with 35K rows)
  React.useEffect(function () {
    if (rawActuals.length === 0 || rawBudget.length === 0) return;
    if (rawBudget[0] && rawBudget[0]['Source'] === 'Model Allocation') return;
    setIsAllocating(true);

    // ── BUILD INDEXES ONCE ─────────────────────────────────────
    // Key: "year|qtr|rc|parish" → [{acct, name, industry, kwh}]
    var idxFull = {};   // year+qtr+rc+parish
    var idxRC   = {};   // year+qtr+rc only
    var idxRCAny = {};  // rc only (last resort)

    rawActuals.forEach(function(a) {
      var p = parseTimeStr(a.Month);
      if (!p.year) return;
      var rc     = (a['Rate category'] || 'Unassigned').trim();
      var parish = (a['Updated Parish'] || 'Unassigned').trim();
      var acct   = a['JPS A/c'];
      var kwh    = Math.max(0, cleanVal(a['Sum of net_kwh_billed_consump']));

      var kFull = p.year + '|' + p.qtr + '|' + rc + '|' + parish;
      var kRC   = p.year + '|' + p.qtr + '|' + rc;

      if (!idxFull[kFull]) idxFull[kFull] = {};
      if (!idxFull[kFull][acct]) idxFull[kFull][acct] = { acct: acct, name: a['Name'], industry: a['Industry'], kwh: 0 };
      idxFull[kFull][acct].kwh += kwh;

      if (!idxRC[kRC]) idxRC[kRC] = {};
      if (!idxRC[kRC][acct]) idxRC[kRC][acct] = { acct: acct, name: a['Name'], industry: a['Industry'], kwh: 0 };
      idxRC[kRC][acct].kwh += kwh;

      if (!idxRCAny[rc]) idxRCAny[rc] = {};
      if (!idxRCAny[rc][acct]) idxRCAny[rc][acct] = { acct: acct, name: a['Name'], industry: a['Industry'], kwh: 0 };
      idxRCAny[rc][acct].kwh += kwh;
    });
    // ── END INDEX BUILD ────────────────────────────────────────

    var getRefActuals = function(rc, parish, tYear, tQtr) {
      // Try same quarter, prior years first (PY then PY-1)
      for (var yo = 1; yo <= 2; yo++) {
        var yr = tYear - yo;
        var custs = idxFull[yr + '|' + tQtr + '|' + rc + '|' + parish];
        if (custs && Object.keys(custs).length > 0)
          return { custs: Object.values(custs), method: 'Q' + tQtr + ' ' + yr };
      }
      // RC-only fallback (drop parish)
      for (var yo2 = 1; yo2 <= 2; yo2++) {
        var yr2 = tYear - yo2;
        var custs2 = idxRC[yr2 + '|' + tQtr + '|' + rc];
        if (custs2 && Object.keys(custs2).length > 0)
          return { custs: Object.values(custs2), method: 'Q' + tQtr + ' ' + yr2 + ' RC-only' };
      }
      // Last resort: any actuals for this RC
      var custs3 = idxRCAny[rc];
      if (custs3 && Object.keys(custs3).length > 0)
        return { custs: Object.values(custs3), method: 'RC avg' };
      return { custs: [], method: 'NONE' };
    };

    var allResults = [];
    var bMonths = _toConsumableArray(new Set(rawBudget.map(function(d) { return d.Month; }))).filter(Boolean);

    bMonths.forEach(function(tMonth) {
      var tp = parseTimeStr(tMonth);
      if (!tp.year) return;

      // Group budget rows by RC|Parish
      var tBud = rawBudget.filter(function(d) { return d.Month === tMonth; });
      var bGroups = {};
      tBud.forEach(function(b) {
        var key = (b['Rate category'] || 'Unassigned').trim() + '|' + (b['Updated Parish'] || 'Unassigned').trim();
        if (!bGroups[key]) bGroups[key] = 0;
        bGroups[key] += cleanVal(b['Sum of Budget']);
      });

      Object.keys(bGroups).forEach(function(key) {
        var parts = key.split('|');
        var rc = parts[0], parish = parts[1];
        var totB = bGroups[key];
        var _ref = getRefActuals(rc, parish, tp.year, tp.qtr);
        var custs = _ref.custs, method = _ref.method;

        if (custs.length === 0) {
          allResults.push({ targetMonth: tMonth, refMonth: method, rc: rc, parish: parish,
            acct: 'UNALLOCATED', name: 'NO HISTORY', industry: 'Unallocated',
            finalA: totB, weight: 1, override: '-' });
          return;
        }

        var totalWt = custs.reduce(function(s, c) { return s + c.kwh; }, 0);
        if (totalWt === 0) {
          allResults.push({ targetMonth: tMonth, refMonth: method, rc: rc, parish: parish,
            acct: 'UNALLOCATED', name: 'ZERO HISTORY', industry: 'Unallocated',
            finalA: totB, weight: 1, override: '-' });
          return;
        }

        custs.forEach(function(c) {
          var w = c.kwh / totalWt;
          var finalVal = totB * w;
          var overrideStr = '-';
          if (allocOverrides[c.industry]) {
            finalVal *= (1 + allocOverrides[c.industry] / 100);
            overrideStr = allocOverrides[c.industry] + '%';
          }
          allResults.push({ targetMonth: tMonth, refMonth: method, rc: rc, parish: parish,
            acct: c.acct, name: c.name, industry: c.industry,
            finalA: finalVal, weight: w, override: overrideStr });
        });
      });
    });

    setAllocationResults(allResults);
    setIsAllocating(false);
  }, [allocOverrides, rawBudget, rawActuals, isBudgetCommitted]);
  var commitAllocation = function commitAllocation() {}; // Allocation is now fully automatic

  // Auto-apply allocation results whenever they change
  React.useEffect(function () {
    if (allocationResults.length === 0) return;
    if (originalBudget.length === 0) setOriginalBudget(function (prev) {
      return prev.length > 0 ? prev : _toConsumableArray(rawBudget);
    });
    setRawBudget(allocationResults.map(function (r) {
      return {
        'Source': 'Model Allocation',
        'Rate category': r.rc,
        'Updated Parish': r.parish,
        'Month': r.targetMonth,
        'Sum of Budget': (r.finalA || 0).toFixed(6),
        'JPS A/c': r.acct,
        'Name': r.name,
        'Industry': r.industry
      };
    }));
    setIsBudgetCommitted(true);
    if (!hasAutoAllocated) {
      setHasAutoAllocated(true);
      logAuditEvent('AUTO_ALLOCATION', {
        rows: allocationResults.length,
        unallocated: allocationResults.filter(function (r) {
          return r.name === 'NO HISTORY' || r.name === 'ZERO HISTORY';
        }).length
      });
    }
  }, [allocationResults]);
  var unlockAllocation = function unlockAllocation() {
    if (originalBudget.length > 0) setRawBudget(_toConsumableArray(originalBudget));
    setIsBudgetCommitted(false);
  };

  // Customer Risk Flags: accounts trending >threshold% below budget for 2+ months
  var customerRiskFlags = React.useMemo(function () {
    if (!isBudgetCommitted || actuals.length === 0) return {};
    var flags = {};
    var maxActMonth = Math.max.apply(Math, [0].concat(_toConsumableArray(actuals.filter(function (a) {
      return a.year === budgetYear;
    }).map(function (a) {
      return a.month;
    }))));
    if (maxActMonth < 2) return {};
    var custBudMonths = {};
    var custActMonths = {};
    budget.filter(function (d) {
      return d.year === budgetYear && d.month <= maxActMonth;
    }).forEach(function (d) {
      if (!custBudMonths[d.name]) custBudMonths[d.name] = {};
      custBudMonths[d.name][d.month] = (custBudMonths[d.name][d.month] || 0) + d.kwh;
    });
    actuals.filter(function (d) {
      return d.year === budgetYear && d.month <= maxActMonth;
    }).forEach(function (d) {
      if (!custActMonths[d.name]) custActMonths[d.name] = {};
      custActMonths[d.name][d.month] = (custActMonths[d.name][d.month] || 0) + d.kwh;
    });
    Object.keys(custBudMonths).forEach(function (name) {
      var months = Object.keys(custBudMonths[name]).map(Number);
      var belowCount = 0;
      var totalBud = 0;
      var totalAct = 0;
      months.forEach(function (m) {
        var b = custBudMonths[name][m] || 0;
        var a = (custActMonths[name] || {})[m] || 0;
        totalBud += b;
        totalAct += a;
        if (b > 0 && (b - a) / b * 100 > riskThreshold) belowCount++;
      });
      var ytdPct = totalBud > 0 ? (totalAct - totalBud) / totalBud * 100 : 0;
      if (belowCount >= 2) flags[name] = {
        level: belowCount >= 3 ? 'red' : 'amber',
        belowCount: belowCount,
        ytdPct: ytdPct.toFixed(1)
      };else if (ytdPct < -(riskThreshold / 2)) flags[name] = {
        level: 'watch',
        belowCount: belowCount,
        ytdPct: ytdPct.toFixed(1)
      };
    });
    return flags;
  }, [isBudgetCommitted, actuals, budget, riskThreshold]);
  var pivotState = React.useMemo(function () {
    if (activeTab !== 'pivot' || actuals.length === 0) return {
      rcMatrix: {},
      topMovers: [],
      bottomMovers: []
    };
    var ytdLimit = ytdMonth === 'All' ? 12 : monthMap[ytdMonth];
    var targetDataset = [];
    var maxActMonth26 = Math.max.apply(Math, [0].concat(_toConsumableArray(actuals.filter(function (a) {
      return a.year === budgetYear;
    }).map(function (a) {
      return a.month;
    }))));
    var fActuals = getFiltered(actuals);
    var fBudget = getFiltered(budget);
    if (pivotScenario === 'budgetCombined') {
      targetDataset = [].concat(_toConsumableArray(fActuals.filter(function (a) {
        return a.year === budgetYear && a.month <= maxActMonth26;
      }).map(function (a) {
        return _objectSpread(_objectSpread({}, a), {}, {
          source: 'Actual'
        });
      })), _toConsumableArray(fBudget.filter(function (b) {
        return b.year === budgetYear && b.month > maxActMonth26;
      }).map(function (b) {
        return _objectSpread(_objectSpread({}, b), {}, {
          source: 'Budget'
        });
      })));
    } else {
      var mappedScenario = pivotScenario === 'leCust' ? leCustGrowth : pivotScenario === 'leRC' ? leRCGrowth : pivotScenario === 'leBase' ? leBaseGrowth : leCustomGrowth;
      targetDataset = getFiltered(mappedScenario).filter(function (d) {
        return d.year === budgetYear;
      });
    }
    var rcMatrix = {};
    targetDataset.forEach(function (d) {
      var rc = d.rc || 'Unassigned';
      var acctName = d.name || d.acct || 'Unknown';
      if (['RT10', 'RT20', 'EV', 'BU'].includes(rc.toUpperCase())) acctName = '';
      var m = d.month;
      var val = d.kwh / 1000000;
      if (!rcMatrix[rc]) rcMatrix[rc] = {
        total: 0,
        months: Array(12).fill(0),
        customers: {}
      };
      rcMatrix[rc].total += val;
      if (m >= 1 && m <= 12) rcMatrix[rc].months[m - 1] += val;
      if (!rcMatrix[rc].customers[acctName]) rcMatrix[rc].customers[acctName] = {
        total: 0,
        months: Array(12).fill(0)
      };
      rcMatrix[rc].customers[acctName].total += val;
      if (m >= 1 && m <= 12) rcMatrix[rc].customers[acctName].months[m - 1] += val;
    });
    var accVar = {};
    fActuals.filter(function (a) {
      return a.year === priorYear;
    }).forEach(function (a) {
      if (moversTimeFrame === 'YTD' && a.month > ytdLimit) return;
      if (moversTimeFrame === 'MTD' && a.month !== ytdLimit) return;
      var rc = a.rc || 'Unassigned';
      var acct = a.name || a.acct || 'Unknown';
      if (['RT10', 'RT20', 'EV', 'BU'].includes(rc.toUpperCase())) return;
      var val = a.kwh / 1000000;
      if (!accVar[acct]) accVar[acct] = {
        name: acct,
        rc: rc,
        baseline: 0,
        target: 0
      };
      accVar[acct].baseline += val;
    });
    targetDataset.forEach(function (d) {
      if (moversTimeFrame === 'YTD' && d.month > ytdLimit) return;
      if (moversTimeFrame === 'MTD' && d.month !== ytdLimit) return;
      var rc = d.rc || 'Unassigned';
      var acct = d.name || d.acct || 'Unknown';
      if (['RT10', 'RT20', 'EV', 'BU'].includes(rc.toUpperCase())) return;
      var val = d.kwh / 1000000;
      if (!accVar[acct]) accVar[acct] = {
        name: acct,
        rc: rc,
        baseline: 0,
        target: 0
      };
      accVar[acct].target += val;
    });
    var variances = Object.values(accVar).map(function (v) {
      var variance = v.target - v.baseline;
      var pct = v.baseline > 0 ? variance / v.baseline * 100 : v.target > 0 ? 100 : 0;
      return _objectSpread(_objectSpread({}, v), {}, {
        variance: variance,
        pct: pct
      });
    }).filter(function (v) {
      return moversRC === 'All' || v.rc === moversRC;
    });
    var topMovers = _toConsumableArray(variances).sort(function (a, b) {
      return b.variance - a.variance;
    }).filter(function (v) {
      return v.variance > 0;
    }).slice(0, 10);
    var bottomMovers = _toConsumableArray(variances).sort(function (a, b) {
      return a.variance - b.variance;
    }).filter(function (v) {
      return v.variance < 0;
    }).slice(0, 10);
    return {
      rcMatrix: rcMatrix,
      topMovers: topMovers,
      bottomMovers: bottomMovers
    };
  }, [activeTab, pivotScenario, moversRC, actuals, budget, leCustGrowth, leRCGrowth, leBaseGrowth, leCustomGrowth, moversTimeFrame, ytdMonth, getFiltered]);
  var pushScenariosToCloud = /*#__PURE__*/function () {
    var _ref18 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
      var versionsOverride,
        commentsOverride,
        overviewCmtOverride,
        accountNameMapOverride,
        customerEnrichmentOverride,
        versionsToPush,
        commentsToPush,
        ocToPush,
        mapToPush,
        enrichToPush,
        url,
        key,
        payloadToSave,
        supabaseClient,
        _yield$supabaseClient5,
        error,
        _args6 = arguments,
        _t7;
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.p = _context6.n) {
          case 0:
            versionsOverride = _args6.length > 0 && _args6[0] !== undefined ? _args6[0] : null;
            commentsOverride = _args6.length > 1 && _args6[1] !== undefined ? _args6[1] : null;
            overviewCmtOverride = _args6.length > 2 && _args6[2] !== undefined ? _args6[2] : null;
            accountNameMapOverride = _args6.length > 3 && _args6[3] !== undefined ? _args6[3] : null;
            customerEnrichmentOverride = _args6.length > 4 && _args6[4] !== undefined ? _args6[4] : null;
            versionsToPush = versionsOverride || savedVersions;
            commentsToPush = commentsOverride || varianceComments;
            ocToPush = overviewCmtOverride !== null ? overviewCmtOverride : overviewComments;
            mapToPush = accountNameMapOverride || accountNameMap;
            enrichToPush = customerEnrichmentOverride || customerEnrichment;
            url = (supabaseConfig.url || window.EMBEDDED_SUPABASE_URL || '').trim();
            key = (supabaseConfig.key || window.EMBEDDED_SUPABASE_KEY || '').trim();
            if (!(!url || !key)) {
              _context6.n = 1;
              break;
            }
            return _context6.a(2);
          case 1:
            setIsSyncingConfigs(true);
            _context6.p = 2;
            payloadToSave = {
              lastUpdatedBy: currentUser || 'Unknown',
              lastUpdatedAt: new Date().toISOString(),
              versions: versionsToPush.map(function (v) {
                return {
                  id: v.id,
                  name: v.name,
                  timestamp: v.timestamp,
                  isNormalizeHurricane: v.isNormalizeHurricane,
                  allocOverrides: v.allocOverrides,
                  advOverrides: v.advOverrides,
                  monthMapping: v.monthMapping,
                  isDefault: v.isDefault || false
                };
              }),
              comments: commentsToPush,
              overviewComments: ocToPush,
              accountNameMap: mapToPush,
              customerEnrichment: enrichToPush,
              tariffRates: tariffRates,
              fxRate: fxRate
            };
            supabaseClient = getSB() || window.supabase.createClient(url, key);
            _context6.n = 3;
            return supabaseClient.from('dashboard_state').upsert({
              id: 1,
              payload: payloadToSave
            });
          case 3:
            _yield$supabaseClient5 = _context6.v;
            error = _yield$supabaseClient5.error;
            if (!error) {
              _context6.n = 4;
              break;
            }
            throw error;
          case 4:
            setSupabaseStatus('connected');
            _context6.n = 6;
            break;
          case 5:
            _context6.p = 5;
            _t7 = _context6.v;
            console.error("Cloud sync failed", _t7 && _t7.message ? _t7.message : _t7);
            setSupabaseStatus('error');
          case 6:
            _context6.p = 6;
            setIsSyncingConfigs(false); setCloudSyncError(_t7 && _t7.message ? _t7.message : 'Unknown error');
            return _context6.f(6);
          case 7:
            return _context6.a(2);
        }
      }, _callee6, null, [[2, 5, 6, 7]]);
    }));
    return function pushScenariosToCloud() {
      return _ref18.apply(this, arguments);
    };
  }();

  // FIX: pullScenariosFromCloud was referenced in modal but never defined
  var pullScenariosFromCloud = /*#__PURE__*/function () {
    var _ref19 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
      var url, key, supabaseClient, _yield$supabaseClient6, configData, error, parsed, _t8;
      return _regenerator().w(function (_context7) {
        while (1) switch (_context7.p = _context7.n) {
          case 0:
            url = (supabaseConfig.url || window.EMBEDDED_SUPABASE_URL || "").trim();
            key = (supabaseConfig.key || window.EMBEDDED_SUPABASE_KEY || "").trim();
            if (!(!url || !key)) {
              _context7.n = 1;
              break;
            }
            alert("Configure Supabase credentials in the Data Hub first.");
            return _context7.a(2);
          case 1:
            setIsSyncingConfigs(true);
            _context7.p = 2;
            supabaseClient = window.supabase.createClient(url, key);
            _context7.n = 3;
            return supabaseClient.from('dashboard_state').select('payload').eq('id', 1).single();
          case 3:
            _yield$supabaseClient6 = _context7.v;
            configData = _yield$supabaseClient6.data;
            error = _yield$supabaseClient6.error;
            if (!error) {
              _context7.n = 4;
              break;
            }
            throw error;
          case 4:
            if (configData && configData.payload) {
              parsed = configData.payload;
              if (Array.isArray(parsed)) setSavedVersions(parsed);else {
                setSavedVersions(parsed.versions || []);
                setVarianceComments(parsed.comments || {});
                setOverviewComments(parsed.overviewComments || '');
                if (parsed.accountNameMap) setAccountNameMap(parsed.accountNameMap);
                if (parsed.customerEnrichment) setCustomerEnrichment(parsed.customerEnrichment);
                if (parsed.tariffRates) setTariffRates(parsed.tariffRates);
                if (parsed.fxRate) setFxRate(parsed.fxRate);
              }
              alert("Scenarios pulled from cloud successfully!");
            } else {
              alert("No saved config found in Supabase.");
            }
            _context7.n = 6;
            break;
          case 5:
            _context7.p = 5;
            _t8 = _context7.v;
            console.error("Pull failed", _t8);
            alert("Pull failed: " + _t8.message);
          case 6:
            _context7.p = 6;
            setIsSyncingConfigs(false);
            return _context7.f(6);
          case 7:
            return _context7.a(2);
        }
      }, _callee7, null, [[2, 5, 6, 7]]);
    }));
    return function pullScenariosFromCloud() {
      return _ref19.apply(this, arguments);
    };
  }();
  var handleAddComment = function handleAddComment(companyName) {
    var commentKey = "".concat(pivotScenario, "|").concat(moversTimeFrame, "|").concat(companyName);
    var currentVal = varianceComments[commentKey] || '';
    var newVal = prompt("Explain the variance for ".concat(companyName, " (").concat(moversTimeFrame, " vs 2025):"), currentVal);
    if (newVal !== null) {
      var updatedComments = _objectSpread(_objectSpread({}, varianceComments), {}, _defineProperty({}, commentKey, newVal));
      setVarianceComments(updatedComments);
      if (supabaseConfig.url && supabaseConfig.key) pushScenariosToCloud(savedVersions, updatedComments);
    }
  };
  var fetchCloudDataFromButton = /*#__PURE__*/function () {
    var _ref20 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8() {
      return _regenerator().w(function (_context8) {
        while (1) switch (_context8.n) {
          case 0:
            _context8.n = 1;
            return fetchCloudData(false);
          case 1:
            return _context8.a(2);
        }
      }, _callee8);
    }));
    return function fetchCloudDataFromButton() {
      return _ref20.apply(this, arguments);
    };
  }();

  // --- Handlers ---
  var handleFileUpload = function handleFileUpload(e, isBudget) {
    var reader = new FileReader();
    reader.onload = function (evt) {
      var data = parseCSV(evt.target.result);
      if (isBudget) {
        setRawBudget(data);
        setOriginalBudget(_toConsumableArray(data));
        setIsBudgetCommitted(false);
        setHasAutoAllocated(false);
      } else {
        setRawActuals(data);
        setHasAutoAllocated(false);
      }
    };
    reader.readAsText(e.target.files[0]);
  };
  var handleFetchUrl = /*#__PURE__*/function () {
    var _ref21 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9(url, isBudget) {
      var response, text, data, _t9;
      return _regenerator().w(function (_context9) {
        while (1) switch (_context9.p = _context9.n) {
          case 0:
            if (url) {
              _context9.n = 1;
              break;
            }
            return _context9.a(2);
          case 1:
            setIsLoadingUrl(function (p) {
              return _objectSpread(_objectSpread({}, p), {}, _defineProperty({}, isBudget ? 'budget' : 'actuals', true));
            });
            _context9.p = 2;
            _context9.n = 3;
            return fetch(url);
          case 3:
            response = _context9.v;
            if (response.ok) {
              _context9.n = 4;
              break;
            }
            throw new Error("HTTP error! status: ".concat(response.status));
          case 4:
            _context9.n = 5;
            return response.text();
          case 5:
            text = _context9.v;
            data = parseCSV(text);
            if (isBudget) {
              setRawBudget(data);
              setOriginalBudget(_toConsumableArray(data));
              setIsBudgetCommitted(false);
            } else {
              setRawActuals(data);
            }
            _context9.n = 7;
            break;
          case 6:
            _context9.p = 6;
            _t9 = _context9.v;
            alert('Error fetching file: ' + _t9.message);
          case 7:
            _context9.p = 7;
            setIsLoadingUrl(function (p) {
              return _objectSpread(_objectSpread({}, p), {}, _defineProperty({}, isBudget ? 'budget' : 'actuals', false));
            });
            return _context9.f(7);
          case 8:
            return _context9.a(2);
        }
      }, _callee9, null, [[2, 6, 7, 8]]);
    }));
    return function handleFetchUrl(_x4, _x5) {
      return _ref21.apply(this, arguments);
    };
  }();
  var handleSaveVersion = function handleSaveVersion() {
    var name = prompt("Enter a name for this scenario version:");
    if (!name) return;
    var isDefault = savedVersions.length === 0;
    var newVersion = {
      id: Date.now(),
      name: name,
      timestamp: new Date().toLocaleString(),
      isDefault: isDefault,
      savedBy: currentUser || 'Unknown',
      monthMapping: _objectSpread({}, monthMapping),
      allocOverrides: _objectSpread({}, allocOverrides),
      advOverrides: _objectSpread({}, advOverrides),
      isNormalizeHurricane: isNormalizeHurricane
    };
    var updatedVersions = [].concat(_toConsumableArray(savedVersions), [newVersion]);
    setSavedVersions(updatedVersions);
    if (supabaseConfig.url && supabaseConfig.key) {
      pushScenariosToCloud(updatedVersions, varianceComments);
      showToast("Scenario \"".concat(name, "\" saved by ").concat(currentUser || 'you'), 'update');
      logAuditEvent('SAVE_SCENARIO', {
        name: name
      });
    } else {
      showToast("Scenario \"".concat(name, "\" saved locally"), 'info');
    }
  };
  var handleRestoreVersion = function handleRestoreVersion(version) {
    var _version$isNormalizeH;
    if (originalBudget.length > 0) setRawBudget(_toConsumableArray(originalBudget));
    setIsBudgetCommitted(false);
    setMonthMapping(version.monthMapping || {});
    setAllocOverrides(version.allocOverrides || {});
    var loadedAdv = version.advOverrides || {
      pct: {
        rc: {},
        industry: {},
        month: {}
      },
      vol: {}
    };
    if (!loadedAdv.pct && !loadedAdv.vol) loadedAdv = {
      pct: loadedAdv,
      vol: {}
    };
    setAdvOverrides(loadedAdv);
    setIsNormalizeHurricane((_version$isNormalizeH = version.isNormalizeHurricane) !== null && _version$isNormalizeH !== void 0 ? _version$isNormalizeH : true);
    setIsVersionModalOpen(false);
  };
  var handleDeleteVersion = function handleDeleteVersion(id) {
    if (!confirm("Delete this saved version?")) return;
    var updatedVersions = savedVersions.filter(function (v) {
      return v.id !== id;
    });
    setSavedVersions(updatedVersions);
    if (supabaseConfig.url && supabaseConfig.key) pushScenariosToCloud(updatedVersions, varianceComments);
  };
  var handleSetDefaultVersion = /*#__PURE__*/function () {
    var _ref22 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0(id) {
      var updatedVersions;
      return _regenerator().w(function (_context0) {
        while (1) switch (_context0.n) {
          case 0:
            updatedVersions = savedVersions.map(function (v) {
              return _objectSpread(_objectSpread({}, v), {}, {
                isDefault: v.id === id
              });
            });
            setSavedVersions(updatedVersions);
            if (!(supabaseConfig.url && supabaseConfig.key)) {
              _context0.n = 2;
              break;
            }
            _context0.n = 1;
            return pushScenariosToCloud(updatedVersions, varianceComments);
          case 1:
            alert("Default scenario changed and pushed to cloud.");
            _context0.n = 3;
            break;
          case 2:
            alert("Default scenario set locally. Configure Supabase to push this setting.");
          case 3:
            return _context0.a(2);
        }
      }, _callee0);
    }));
    return function handleSetDefaultVersion(_x6) {
      return _ref22.apply(this, arguments);
    };
  }();
  var handleClearData = function handleClearData() {
    if (!confirm("Are you sure you want to clear all data and reset the engine?")) return;
    setRawActuals([]);
    setRawBudget([]);
    setOriginalBudget([]);
    setIsBudgetCommitted(false);
    setLoadError('');
    setMonthMapping({});
    setAllocOverrides({});
    setAdvOverrides({
      pct: {
        rc: {},
        industry: {},
        month: {}
      },
      vol: {}
    });
    setAllocationResults([]);
    setSavedVersions([]);
    setHasAutoRestored(false);
    setHasAutoAllocated(false);
    setActiveTab('data');
  };
  var monthlyAggregatesRaw = React.useMemo(function () {
    if (actuals.length === 0) return [];
    var fAct = getFiltered(actuals);
    var fBud = getFiltered(budget);
    var fLeCust = getFiltered(leCustGrowth);
    var fLeRC = getFiltered(leRCGrowth);
    var fLeBase = getFiltered(leBaseGrowth);
    var fLeCustom = getFiltered(leCustomGrowth);
    return monthNames.map(function (m, idx) {
      var mNum = idx + 1;
      var a25 = fAct.filter(function (d) {
        return d.year === priorYear && d.month === mNum;
      }).reduce(function (s, d) {
        return s + d.kwh;
      }, 0);
      var b26 = fBud.filter(function (d) {
        return d.year === budgetYear && d.month === mNum;
      }).reduce(function (s, d) {
        return s + d.kwh;
      }, 0);
      var a26 = fAct.filter(function (d) {
        return d.year === budgetYear && d.month === mNum;
      }).reduce(function (s, d) {
        return s + d.kwh;
      }, 0);
      var leCust26 = fLeCust.filter(function (d) {
        return d.year === budgetYear && d.month === mNum;
      }).reduce(function (s, d) {
        return s + d.kwh;
      }, 0);
      var leRC26 = fLeRC.filter(function (d) {
        return d.year === budgetYear && d.month === mNum;
      }).reduce(function (s, d) {
        return s + d.kwh;
      }, 0);
      var leBase26 = fLeBase.filter(function (d) {
        return d.year === budgetYear && d.month === mNum;
      }).reduce(function (s, d) {
        return s + d.kwh;
      }, 0);
      var leCustom26 = fLeCustom.filter(function (d) {
        return d.year === budgetYear && d.month === mNum;
      }).reduce(function (s, d) {
        return s + d.kwh;
      }, 0);
      // Revenue (US$) per scenario
      var revAct25 = fAct.filter(function (d) {
        return d.year === priorYear && d.month === mNum;
      }).reduce(function (s, d) {
        return s + kwhToRevUSD(d.kwh, d.rc);
      }, 0);
      var revBud26 = fBud.filter(function (d) {
        return d.year === budgetYear && d.month === mNum;
      }).reduce(function (s, d) {
        return s + kwhToRevUSD(d.kwh, d.rc);
      }, 0);
      var revAct26 = fAct.filter(function (d) {
        return d.year === budgetYear && d.month === mNum;
      }).reduce(function (s, d) {
        return s + kwhToRevUSD(d.kwh, d.rc);
      }, 0);
      var revBase26 = fLeBase.filter(function (d) {
        return d.year === budgetYear && d.month === mNum;
      }).reduce(function (s, d) {
        return s + kwhToRevUSD(d.kwh, d.rc);
      }, 0);
      return {
        monthFull: m,
        month: m.substring(0, 3),
        Act25: a25,
        Bud26: b26,
        Act26: a26 > 0 ? a26 : null,
        LeCust: leCust26,
        LeRC: leRC26,
        LeBase: leBase26,
        LeCustom: leCustom26,
        RevAct25: revAct25,
        RevBud26: revBud26,
        RevAct26: revAct26 > 0 ? revAct26 : null,
        RevBase26: revBase26
      };
    });
  }, [actuals, budget, leCustGrowth, leRCGrowth, leBaseGrowth, leCustomGrowth, getFiltered]);

  // --- UI Components ---
  var varScenarios = [{
    key: 'LeCust',
    label: 'LE Cust Vol',
    bg: 'bg-purple-50',
    text: 'text-purple-600',
    headBg: 'bg-purple-100',
    headText: 'text-purple-800',
    lightBg: 'bg-purple-50/20'
  }, {
    key: 'LeRC',
    label: 'LE RC Vol',
    bg: 'bg-blue-50',
    text: 'text-blue-600',
    headBg: 'bg-blue-100',
    headText: 'text-blue-800',
    lightBg: 'bg-blue-50/20'
  }, {
    key: 'LeBase',
    label: 'LE Base',
    bg: 'bg-orange-50',
    text: 'text-orange-600',
    headBg: 'bg-orange-100',
    headText: 'text-orange-800',
    lightBg: 'bg-orange-50/20'
  }, {
    key: 'LeCustom',
    label: 'LE Advanced',
    bg: 'bg-indigo-50',
    text: 'text-indigo-600',
    headBg: 'bg-indigo-100',
    headText: 'text-indigo-800',
    lightBg: 'bg-indigo-50/20'
  }];

  // FIX: toggleConfig was referenced in renderGraphToggles but never defined
  var toggleConfig = [{
    key: 'act25',
    label: '2025 Actuals',
    activeClass: 'bg-slate-200 text-slate-700 border-slate-400',
    inactiveClass: 'bg-white text-slate-400 border-slate-200'
  }, {
    key: 'bud26',
    label: '2026 Budget',
    activeClass: 'bg-blue-100 text-blue-700 border-blue-300',
    inactiveClass: 'bg-white text-slate-400 border-slate-200'
  }, {
    key: 'act26',
    label: '2026 Actuals',
    activeClass: 'bg-purple-100 text-purple-700 border-purple-300',
    inactiveClass: 'bg-white text-slate-400 border-slate-200'
  }, {
    key: 'leCust',
    label: 'LE Cust Vol',
    activeClass: 'bg-fuchsia-100 text-fuchsia-700 border-fuchsia-300',
    inactiveClass: 'bg-white text-slate-400 border-slate-200'
  }, {
    key: 'leRc',
    label: 'LE RC Vol',
    activeClass: 'bg-sky-100 text-sky-700 border-sky-300',
    inactiveClass: 'bg-white text-slate-400 border-slate-200'
  }, {
    key: 'leBase',
    label: 'LE Base',
    activeClass: 'bg-amber-100 text-amber-700 border-amber-300',
    inactiveClass: 'bg-white text-slate-400 border-slate-200'
  }, {
    key: 'leCustom',
    label: 'LE Advanced',
    activeClass: 'bg-indigo-100 text-indigo-700 border-indigo-300',
    inactiveClass: 'bg-white text-slate-400 border-slate-200'
  }];

  // --- GRAPH & TABLE UTILITIES ---
  var downloadChartAsPNG = function downloadChartAsPNG(chartId, filename) {
    var el = document.getElementById(chartId);
    if (!el) return;
    // Use html2canvas if available, otherwise prompt
    var svg = el.querySelector('svg');
    if (!svg) return;
    var svgData = new XMLSerializer().serializeToString(svg);
    var canvas = document.createElement('canvas');
    var bbox = svg.getBoundingClientRect();
    canvas.width = bbox.width * 2;
    canvas.height = bbox.height * 2;
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    var img = new Image();
    var blob = new Blob([svgData], {
      type: 'image/svg+xml;charset=utf-8'
    });
    var url = URL.createObjectURL(blob);
    img.onload = function () {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      URL.revokeObjectURL(url);
      var a = document.createElement('a');
      a.download = filename + '.png';
      a.href = canvas.toDataURL('image/png');
      a.click();
    };
    img.src = url;
  };
  var exportToExcel = function exportToExcel(data, filename) {
    if (!data || !data.length) return;
    var headers = Object.keys(data[0]);
    // Build CSV with BOM for Excel compatibility
    var bom = "\uFEFF";
    var csvRows = [headers.join(',')].concat(_toConsumableArray(data.map(function (row) {
      return headers.map(function (h) {
        var v = row[h] !== undefined && row[h] !== null ? row[h].toString().replace(/"/g, '""') : '';
        return "\"".concat(v, "\"");
      }).join(',');
    })));
    var blob = new Blob([bom + csvRows.join('\n')], {
      type: 'text/csv;charset=utf-8'
    });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = filename + '.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };
  var _React$useState119 = React.useState(null),
    _React$useState120 = _slicedToArray(_React$useState119, 2),
    expandedChart = _React$useState120[0],
    setExpandedChart = _React$useState120[1];

  // --- AUDIT TRAIL STATE ---
  var _React$useState121 = React.useState([]),
    _React$useState122 = _slicedToArray(_React$useState121, 2),
    auditLog = _React$useState122[0],
    setAuditLog = _React$useState122[1];
  var logAuditEvent = React.useCallback(function (action) {
    var details = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var entry = {
      id: Date.now(),
      timestamp: new Date().toISOString(),
      user: currentUser || 'Unknown',
      action: action,
      details: details
    };
    setAuditLog(function (prev) {
      return [entry].concat(_toConsumableArray(prev)).slice(0, 200);
    }); // keep last 200 in memory

    // Persist to Supabase
    var sb = getSB(); if (!sb) return;
    sb.from('audit_log').insert({
      user_name: entry.user,
      action: entry.action,
      details: entry.details,
      created_at: entry.timestamp
    }).then(function (_ref23) {
      var error = _ref23.error;
      if (error) console.warn('Audit log failed:', error.message);
    });
  }, [currentUser]);

  // --- NET GEN TAB STATE (hoisted from render fn) ---
  var _React$useState123 = React.useState(26.0),
    _React$useState124 = _slicedToArray(_React$useState123, 2),
    ngSysLossPct = _React$useState124[0],
    setNgSysLossPct = _React$useState124[1];
  var _React$useState125 = React.useState('seasonal'),
    _React$useState126 = _slicedToArray(_React$useState125, 2),
    ngGrowthMethod = _React$useState126[0],
    setNgGrowthMethod = _React$useState126[1];
  var _React$useState127 = React.useState(0.5),
    _React$useState128 = _slicedToArray(_React$useState127, 2),
    ngFlatGrowth = _React$useState128[0],
    setNgFlatGrowth = _React$useState128[1];
  var _React$useState129 = React.useState(Array(12).fill(0)),
    _React$useState130 = _slicedToArray(_React$useState129, 2),
    ngManualMonthly = _React$useState130[0],
    setNgManualMonthly = _React$useState130[1];
  var _React$useState131 = React.useState('norm2025'),
    _React$useState132 = _slicedToArray(_React$useState131, 2),
    ngForecastBase = _React$useState132[0],
    setNgForecastBase = _React$useState132[1];
  var _React$useState133 = React.useState(1.0),
    _React$useState134 = _slicedToArray(_React$useState133, 2),
    ngPeakGrowthPct = _React$useState134[0],
    setNgPeakGrowthPct = _React$useState134[1];
  var _React$useState135 = React.useState(true),
    _React$useState136 = _slicedToArray(_React$useState135, 2),
    ngShowNormalized = _React$useState136[0],
    setNgShowNormalized = _React$useState136[1];

  // --- ROLLING 18M TAB STATE (hoisted) ---
  var _React$useState137 = React.useState(26.0),
    _React$useState138 = _slicedToArray(_React$useState137, 2),
    r18SysLoss = _React$useState138[0],
    setR18SysLoss = _React$useState138[1];
  var _React$useState139 = React.useState(0.5),
    _React$useState140 = _slicedToArray(_React$useState139, 2),
    r18Growth26 = _React$useState140[0],
    setR18Growth26 = _React$useState140[1];
  var _React$useState141 = React.useState(1.5),
    _React$useState142 = _slicedToArray(_React$useState141, 2),
    r18Growth27 = _React$useState142[0],
    setR18Growth27 = _React$useState142[1];
  var _rg28 = React.useState(2.0), _rg28a = _slicedToArray(_rg28, 2),
    r18Growth28 = _rg28a[0], setR18Growth28 = _rg28a[1];
  var _React$useState143 = React.useState('norm2025'),
    _React$useState144 = _slicedToArray(_React$useState143, 2),
    r18Base = _React$useState144[0],
    setR18Base = _React$useState144[1];
  var _React$useState145 = React.useState(true),
    _React$useState146 = _slicedToArray(_React$useState145, 2),
    r18ShowRevenue = _React$useState146[0],
    setR18ShowRevenue = _React$useState146[1];

  // --- DATA ENTRY TAB STATE (hoisted) ---
  var _React$useState147 = React.useState(2026),
    _React$useState148 = _slicedToArray(_React$useState147, 2),
    entryYear = _React$useState148[0],
    setEntryYear = _React$useState148[1];
  var _React$useState149 = React.useState(new Date().getMonth() + 1),
    _React$useState150 = _slicedToArray(_React$useState149, 2),
    entryMonth = _React$useState150[0],
    setEntryMonth = _React$useState150[1];
  var _React$useState151 = React.useState(''),
    _React$useState152 = _slicedToArray(_React$useState151, 2),
    entryNetGen = _React$useState152[0],
    setEntryNetGen = _React$useState152[1];
  var _React$useState153 = React.useState(''),
    _React$useState154 = _slicedToArray(_React$useState153, 2),
    entryPeak = _React$useState154[0],
    setEntryPeak = _React$useState154[1];
  var _React$useState155 = React.useState(false),
    _React$useState156 = _slicedToArray(_React$useState155, 2),
    isSavingNG = _React$useState156[0],
    setIsSavingNG = _React$useState156[1];
  var _React$useState157 = React.useState(null),
    _React$useState158 = _slicedToArray(_React$useState157, 2),
    ngMessage = _React$useState158[0],
    setNgMessage = _React$useState158[1];
  var _React$useState159 = React.useState([]),
    _React$useState160 = _slicedToArray(_React$useState159, 2),
    ngTableData = _React$useState160[0],
    setNgTableData = _React$useState160[1];
  var _React$useState161 = React.useState(false),
    _React$useState162 = _slicedToArray(_React$useState161, 2),
    isLoadingNgTable = _React$useState162[0],
    setIsLoadingNgTable = _React$useState162[1];
  var _React$useState163 = React.useState(null),
    _React$useState164 = _slicedToArray(_React$useState163, 2),
    editingRow = _React$useState164[0],
    setEditingRow = _React$useState164[1];
  var _React$useState165 = React.useState(false),
    _React$useState166 = _slicedToArray(_React$useState165, 2),
    uploadingActuals = _React$useState166[0],
    setUploadingActuals = _React$useState166[1];
  var _React$useState167 = React.useState(false),
    _React$useState168 = _slicedToArray(_React$useState167, 2),
    uploadingBudget = _React$useState168[0],
    setUploadingBudget = _React$useState168[1];
  var _React$useState169 = React.useState(null),
    _React$useState170 = _slicedToArray(_React$useState169, 2),
    uploadMessage = _React$useState170[0],
    setUploadMessage = _React$useState170[1];

  // --- CUSTOMER TAB STATE (hoisted) ---
  var _React$useState171 = React.useState({
      acct: '',
      name: '',
      rc: 'RT40',
      parish: '',
      industry: '',
      kvaDemand: '',
      notes: ''
    }),
    _React$useState172 = _slicedToArray(_React$useState171, 2),
    newAcct = _React$useState172[0],
    setNewAcct = _React$useState172[1];
  // --- AUDIT LOG TAB STATE (hoisted) ---
  var _React$useState173 = React.useState('ALL'),
    _React$useState174 = _slicedToArray(_React$useState173, 2),
    auditFilter = _React$useState174[0],
    setAuditFilter = _React$useState174[1];
  // Validation sort states
  var _vs1 = React.useState({key:'totalKwh',direction:'descending'}), _vs1a = _slicedToArray(_vs1,2),
    droppedSort = _vs1a[0], setDroppedSort = _vs1a[1];
  var _vs2 = React.useState({key:'pct',direction:'ascending'}), _vs2a = _slicedToArray(_vs2,2),
    deflSort = _vs2a[0], setDeflSort = _vs2a[1];
  var _vs3 = React.useState({key:'swing',direction:'ascending'}), _vs3a = _slicedToArray(_vs3,2),
    anomSort = _vs3a[0], setAnomalySort = _vs3a[1];

  var ChartWrapper = function ChartWrapper(_ref24) {
    var id = _ref24.id,
      title = _ref24.title,
      children = _ref24.children,
      data = _ref24.data,
      filename = _ref24.filename;
    var isExpanded = expandedChart === id;
    return /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-xl border shadow-sm ".concat(isExpanded ? 'fixed inset-4 z-50 flex flex-col p-4' : '')
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex justify-between items-center px-4 pt-3 pb-1"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-xs font-bold text-slate-600"
    }, title), /*#__PURE__*/React.createElement("div", {
      className: "flex gap-2"
    }, data && /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return exportToExcel(data, filename || title);
      },
      className: "text-[10px] text-slate-400 hover:text-blue-600 border border-slate-200 rounded px-1.5 py-0.5 transition"
    }, "\u2B07 XLS"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setExpandedChart(isExpanded ? null : id);
      },
      className: "text-[10px] text-slate-400 hover:text-blue-600 border border-slate-200 rounded px-1.5 py-0.5 transition"
    }, isExpanded ? '✕ Close' : '⤢ Expand'), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return downloadChartAsPNG(id, filename || title);
      },
      className: "text-[10px] text-slate-400 hover:text-emerald-600 border border-slate-200 rounded px-1.5 py-0.5 transition"
    }, "\uD83D\uDCF7 Save"))), /*#__PURE__*/React.createElement("div", {
      id: id,
      className: "".concat(isExpanded ? 'flex-1 min-h-0' : 'h-[200px]', " px-2 pb-2")
    }, children), isExpanded && /*#__PURE__*/React.createElement("div", {
      className: "fixed inset-0 bg-black/30 -z-10",
      onClick: function onClick() {
        return setExpandedChart(null);
      }
    }));
  };
  var renderEmptyBudgetWarning = function renderEmptyBudgetWarning() {
    return /*#__PURE__*/React.createElement("div", {
      className: "flex flex-col items-center justify-center h-full text-slate-500 py-20"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-slate-300 mb-4"
    }, /*#__PURE__*/React.createElement(Icons.Calculator, null)), /*#__PURE__*/React.createElement("h2", {
      className: "text-xl font-bold text-slate-700 mb-2"
    }, "Budget Not Committed"), /*#__PURE__*/React.createElement("p", {
      className: "text-sm mb-6 max-w-md text-center"
    }, "To view this forecast, you must first commit the granular budget in the Allocation Engine."), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setActiveTab('allocation');
      },
      className: "bg-orange-600 text-white px-6 py-2 rounded-lg font-bold shadow hover:bg-orange-700 transition"
    }, "Go to Engine"));
  };
  var renderGraphToggles = function renderGraphToggles() {
    return /*#__PURE__*/React.createElement("div", {
      className: "flex flex-wrap items-center gap-3 mb-4 bg-slate-50 p-2 rounded-lg border border-slate-200"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1 ml-2"
    }, /*#__PURE__*/React.createElement(Icons.Eye, null), " Map Scenarios:"), toggleConfig.map(function (t) {
      return /*#__PURE__*/React.createElement("label", {
        key: t.key,
        className: "cursor-pointer px-3 py-1.5 rounded-md border text-xs font-bold flex items-center gap-2 transition select-none shadow-sm ".concat(graphToggles[t.key] ? t.activeClass : t.inactiveClass)
      }, /*#__PURE__*/React.createElement("input", {
        type: "checkbox",
        className: "hidden",
        checked: graphToggles[t.key],
        onChange: function onChange() {
          return setGraphToggles(function (p) {
            return _objectSpread(_objectSpread({}, p), {}, _defineProperty({}, t.key, !p[t.key]));
          });
        }
      }), /*#__PURE__*/React.createElement("div", {
        className: "w-2 h-2 rounded-full ".concat(graphToggles[t.key] ? 'bg-current shadow-sm' : 'bg-slate-300')
      }), t.label);
    }), /*#__PURE__*/React.createElement("div", {
      className: "flex gap-2 ml-auto pr-2"
    }, /*#__PURE__*/React.createElement("button", {
      className: "text-[10px] uppercase tracking-wider font-bold text-slate-500 hover:text-blue-600 transition",
      onClick: function onClick() {
        return setGraphToggles({
          act25: true,
          bud26: true,
          act26: true,
          leCust: true,
          leRc: true,
          leBase: true,
          leCustom: true
        });
      }
    }, "All On"), /*#__PURE__*/React.createElement("button", {
      className: "text-[10px] uppercase tracking-wider font-bold text-slate-500 hover:text-red-500 transition",
      onClick: function onClick() {
        return setGraphToggles({
          act25: false,
          bud26: false,
          act26: false,
          leCust: false,
          leRc: false,
          leBase: false,
          leCustom: false
        });
      }
    }, "All Off")));
  };
  var renderAdvOverridesUI = function renderAdvOverridesUI() {
    var dimLabels = {
      rc: 'Rate Class',
      industry: 'Industry',
      month: 'Month'
    };
    var dimOptions = {
      rc: dimensions.rcs,
      industry: dimensions.inds,
      month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(function (m) {
        return {
          val: m,
          label: monthNames[m - 1]
        };
      })
    };
    var handleAddPct = function handleAddPct() {
      if (advOverrideKey && advOverrideVal) {
        setAdvOverrides(function (p) {
          return _objectSpread(_objectSpread({}, p), {}, {
            pct: _objectSpread(_objectSpread({}, p.pct), {}, _defineProperty({}, advOverrideDim, _objectSpread(_objectSpread({}, p.pct[advOverrideDim] || {}), {}, _defineProperty({}, advOverrideKey, parseFloat(advOverrideVal)))))
          });
        });
        setAdvOverrideVal('');
      }
    };
    var handleAddVol = function handleAddVol() {
      if (advOverrideCustKey && advOverrideCustMonth && advOverrideCustVal) {
        setAdvOverrides(function (p) {
          return _objectSpread(_objectSpread({}, p), {}, {
            vol: _objectSpread(_objectSpread({}, p.vol), {}, _defineProperty({}, advOverrideCustKey, _objectSpread(_objectSpread({}, p.vol[advOverrideCustKey] || {}), {}, _defineProperty({}, advOverrideCustMonth, parseFloat(advOverrideCustVal)))))
          });
        });
        setAdvOverrideCustVal('');
      }
    };
    var handleRemovePct = function handleRemovePct(dim, key) {
      setAdvOverrides(function (p) {
        var next = _objectSpread(_objectSpread({}, p), {}, {
          pct: _objectSpread({}, p.pct)
        });
        var nextDim = _objectSpread({}, next.pct[dim]);
        delete nextDim[key];
        next.pct[dim] = nextDim;
        return next;
      });
    };
    var handleRemoveVol = function handleRemoveVol(cust, month) {
      setAdvOverrides(function (p) {
        var next = _objectSpread(_objectSpread({}, p), {}, {
          vol: _objectSpread({}, p.vol)
        });
        var nextCust = _objectSpread({}, next.vol[cust]);
        delete nextCust[month];
        if (Object.keys(nextCust).length === 0) delete next.vol[cust];else next.vol[cust] = nextCust;
        return next;
      });
    };
    return /*#__PURE__*/React.createElement("div", {
      className: "bg-indigo-50/50 p-6 rounded-xl border border-indigo-100 shadow-sm mb-6 space-y-3"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
      className: "font-bold flex items-center gap-2 text-indigo-800 text-lg"
    }, /*#__PURE__*/React.createElement(Icons.Sliders, null), " LE: Advanced Scenario Builder"), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-slate-500 mt-1"
    }, /*#__PURE__*/React.createElement("strong", null, "Rules are prioritized: Customer Volumetric > Month % > Industry % > Rate Class %."))), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-1 xl:grid-cols-2 gap-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-white p-4 rounded-xl border border-indigo-100 shadow-sm"
    }, /*#__PURE__*/React.createElement("h5", {
      className: "font-bold text-sm text-slate-700 mb-3 flex items-center gap-2"
    }, /*#__PURE__*/React.createElement("span", {
      className: "w-5 h-5 rounded bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs font-black"
    }, "%"), " Percentage Adjustments"), /*#__PURE__*/React.createElement("div", {
      className: "flex flex-wrap gap-2 mb-4 items-center"
    }, /*#__PURE__*/React.createElement("select", {
      value: advOverrideDim,
      onChange: function onChange(e) {
        setAdvOverrideDim(e.target.value);
        setAdvOverrideKey(e.target.value === 'month' ? 1 : dimOptions[e.target.value][0]);
      },
      className: "border border-slate-300 rounded px-2 py-1.5 text-sm outline-none focus:border-indigo-400 font-bold text-slate-700 bg-slate-50"
    }, Object.entries(dimLabels).map(function (_ref25) {
      var _ref26 = _slicedToArray(_ref25, 2),
        k = _ref26[0],
        v = _ref26[1];
      return /*#__PURE__*/React.createElement("option", {
        key: k,
        value: k
      }, v);
    })), /*#__PURE__*/React.createElement("span", {
      className: "text-slate-300"
    }, "\u279C"), /*#__PURE__*/React.createElement("select", {
      value: advOverrideKey,
      onChange: function onChange(e) {
        return setAdvOverrideKey(e.target.value);
      },
      className: "flex-1 min-w-[120px] border border-slate-300 rounded px-2 py-1.5 text-sm outline-none focus:border-indigo-400 font-medium bg-slate-50"
    }, advOverrideDim === 'month' ? dimOptions.month.map(function (m) {
      return /*#__PURE__*/React.createElement("option", {
        key: m.val,
        value: m.val
      }, m.label);
    }) : dimOptions[advOverrideDim].map(function (o) {
      return /*#__PURE__*/React.createElement("option", {
        key: o,
        value: o
      }, o);
    })), /*#__PURE__*/React.createElement("input", {
      type: "number",
      value: advOverrideVal,
      onChange: function onChange(e) {
        return setAdvOverrideVal(e.target.value);
      },
      placeholder: "+5",
      className: "w-20 border border-slate-300 rounded px-2 py-1.5 text-sm outline-none focus:border-indigo-400 text-center font-bold"
    }), /*#__PURE__*/React.createElement("button", {
      onClick: handleAddPct,
      className: "bg-indigo-600 text-white px-3 py-1.5 rounded text-sm font-bold hover:bg-indigo-700 transition"
    }, "Add"))), /*#__PURE__*/React.createElement("div", {
      className: "bg-white p-4 rounded-xl border border-indigo-100 shadow-sm"
    }, /*#__PURE__*/React.createElement("h5", {
      className: "font-bold text-sm text-slate-700 mb-3 flex items-center gap-2"
    }, /*#__PURE__*/React.createElement("span", {
      className: "w-5 h-5 rounded bg-fuchsia-100 text-fuchsia-700 flex items-center justify-center"
    }, /*#__PURE__*/React.createElement(Icons.Users, null)), " Customer Monthly Volume (GWh)"), /*#__PURE__*/React.createElement("div", {
      className: "flex flex-wrap gap-2 mb-4 items-center"
    }, /*#__PURE__*/React.createElement("select", {
      value: advOverrideCustKey,
      onChange: function onChange(e) {
        return setAdvOverrideCustKey(e.target.value);
      },
      className: "flex-1 min-w-[120px] border border-slate-300 rounded px-2 py-1.5 text-sm outline-none focus:border-indigo-400 font-medium bg-slate-50 truncate"
    }, dimensions.customers.map(function (c) {
      return /*#__PURE__*/React.createElement("option", {
        key: c,
        value: c
      }, c);
    })), /*#__PURE__*/React.createElement("select", {
      value: advOverrideCustMonth,
      onChange: function onChange(e) {
        return setAdvOverrideCustMonth(e.target.value);
      },
      className: "border border-slate-300 rounded px-2 py-1.5 text-sm outline-none focus:border-indigo-400 font-medium bg-slate-50"
    }, dimOptions.month.map(function (m) {
      return /*#__PURE__*/React.createElement("option", {
        key: m.val,
        value: m.val
      }, m.label.substring(0, 3));
    })), /*#__PURE__*/React.createElement("input", {
      type: "number",
      value: advOverrideCustVal,
      onChange: function onChange(e) {
        return setAdvOverrideCustVal(e.target.value);
      },
      placeholder: "GWh",
      className: "w-20 border border-slate-300 rounded px-2 py-1.5 text-sm outline-none focus:border-indigo-400 text-center font-bold"
    }), /*#__PURE__*/React.createElement("button", {
      onClick: handleAddVol,
      className: "bg-fuchsia-600 text-white px-3 py-1.5 rounded text-sm font-bold hover:bg-fuchsia-700 transition"
    }, "Add")))), /*#__PURE__*/React.createElement("div", {
      className: "bg-white p-4 rounded-xl border border-slate-200"
    }, /*#__PURE__*/React.createElement("h5", {
      className: "font-bold text-sm text-slate-700 mb-3"
    }, "Active Adjustments Summary"), /*#__PURE__*/React.createElement("div", {
      className: "overflow-auto max-h-48 custom-scroll border rounded-lg"
    }, /*#__PURE__*/React.createElement("table", {
      className: "w-full text-sm text-left"
    }, /*#__PURE__*/React.createElement("thead", {
      className: "bg-slate-50 sticky top-0"
    }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
      className: "p-2 border-b"
    }, "Rule Type"), /*#__PURE__*/React.createElement("th", {
      className: "p-2 border-b"
    }, "Target"), /*#__PURE__*/React.createElement("th", {
      className: "p-2 border-b"
    }, "Adjustment"), /*#__PURE__*/React.createElement("th", {
      className: "p-2 border-b w-10"
    }))), /*#__PURE__*/React.createElement("tbody", null, ['rc', 'industry', 'month'].map(function (dim) {
      return Object.entries(advOverrides.pct[dim] || {}).map(function (_ref27) {
        var _ref28 = _slicedToArray(_ref27, 2),
          k = _ref28[0],
          val = _ref28[1];
        return /*#__PURE__*/React.createElement("tr", {
          key: "pct-".concat(dim, "-").concat(k),
          className: "border-b hover:bg-slate-50"
        }, /*#__PURE__*/React.createElement("td", {
          className: "p-2 text-indigo-600 font-bold text-xs uppercase"
        }, dimLabels[dim], " (%)"), /*#__PURE__*/React.createElement("td", {
          className: "p-2 text-slate-700"
        }, dim === 'month' ? monthNames[parseInt(k) - 1] : k), /*#__PURE__*/React.createElement("td", {
          className: "p-2 font-black ".concat(val >= 0 ? 'text-emerald-600' : 'text-red-500')
        }, val > 0 ? '+' + val : val, "%"), /*#__PURE__*/React.createElement("td", {
          className: "p-2 text-center"
        }, /*#__PURE__*/React.createElement("button", {
          onClick: function onClick() {
            return handleRemovePct(dim, k);
          },
          className: "text-slate-300 hover:text-red-500"
        }, /*#__PURE__*/React.createElement(Icons.X, null))));
      });
    }), Object.entries(advOverrides.vol || {}).map(function (_ref29) {
      var _ref30 = _slicedToArray(_ref29, 2),
        cust = _ref30[0],
        mMap = _ref30[1];
      return Object.entries(mMap).map(function (_ref31) {
        var _ref32 = _slicedToArray(_ref31, 2),
          m = _ref32[0],
          val = _ref32[1];
        return /*#__PURE__*/React.createElement("tr", {
          key: "vol-".concat(cust, "-").concat(m),
          className: "border-b hover:bg-slate-50"
        }, /*#__PURE__*/React.createElement("td", {
          className: "p-2 text-fuchsia-600 font-bold text-xs uppercase"
        }, "Customer (Vol)"), /*#__PURE__*/React.createElement("td", {
          className: "p-2 text-slate-700"
        }, cust, " ", /*#__PURE__*/React.createElement("span", {
          className: "text-slate-400"
        }, "(", monthNames[parseInt(m) - 1].substring(0, 3), ")")), /*#__PURE__*/React.createElement("td", {
          className: "p-2 font-black text-blue-600"
        }, val, " GWh"), /*#__PURE__*/React.createElement("td", {
          className: "p-2 text-center"
        }, /*#__PURE__*/React.createElement("button", {
          onClick: function onClick() {
            return handleRemoveVol(cust, m);
          },
          className: "text-slate-300 hover:text-red-500"
        }, /*#__PURE__*/React.createElement(Icons.X, null))));
      });
    }), !Object.values(advOverrides.pct).some(function (obj) {
      return Object.keys(obj).length > 0;
    }) && Object.keys(advOverrides.vol || {}).length === 0 && /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
      colSpan: "4",
      className: "p-4 text-center text-slate-400 italic"
    }, "No active rules applied.")))))));
  };

  // --- TABS ---
  var renderDataTab = function renderDataTab() {
    return /*#__PURE__*/React.createElement("div", {
      className: "p-8 max-w-5xl mx-auto space-y-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-800 p-6 rounded-xl border border-slate-700 text-left shadow-sm text-white"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "font-bold mb-4 flex items-center gap-2"
    }, /*#__PURE__*/React.createElement(Icons.CloudUp, null), " Supabase Integration & API Config"), window.EMBEDDED_SUPABASE_URL && window.EMBEDDED_SUPABASE_KEY ? /*#__PURE__*/React.createElement("div", {
      className: "bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4 mb-4 flex items-start gap-3"
    }, /*#__PURE__*/React.createElement("span", {
      className: "w-2.5 h-2.5 rounded-full bg-emerald-400 mt-1 shrink-0 animate-pulse"
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      className: "text-sm font-bold text-emerald-400"
    }, "Credentials Embedded in File"), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-slate-400 mt-1"
    }, "This file has hardcoded Supabase credentials. Anyone you share it with will auto-connect on load \u2014 no setup needed. To change credentials, update ", /*#__PURE__*/React.createElement("code", {
      className: "text-amber-400"
    }, "window.EMBEDDED_SUPABASE_URL"), " and ", /*#__PURE__*/React.createElement("code", {
      className: "text-amber-400"
    }, "window.EMBEDDED_SUPABASE_KEY"), " at the top of the script."))) : /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-slate-400 mb-4 max-w-3xl"
    }, "Enter your Supabase Project URL and Anon Key to automatically fetch data and sync scenarios. ", /*#__PURE__*/React.createElement("strong", null, "Credentials saved in browser localStorage."), " To bake them into the file for colleagues, set ", /*#__PURE__*/React.createElement("code", {
      className: "text-amber-400"
    }, "window.EMBEDDED_SUPABASE_URL"), " and ", /*#__PURE__*/React.createElement("code", {
      className: "text-amber-400"
    }, "window.EMBEDDED_SUPABASE_KEY"), " at the top of the script."), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2 mb-4"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-xs font-bold text-slate-400 uppercase"
    }, "Status:"), /*#__PURE__*/React.createElement("div", {
      className: "text-xs px-2 py-1 rounded font-bold flex items-center gap-1 ".concat(supabaseStatus === 'connected' ? 'bg-emerald-500/20 text-emerald-400' : supabaseStatus === 'error' ? 'bg-red-500/20 text-red-400' : supabaseStatus === 'connecting' ? 'bg-amber-500/20 text-amber-400' : 'bg-slate-700 text-slate-400')
    }, /*#__PURE__*/React.createElement("span", {
      className: "w-2 h-2 rounded-full ".concat(supabaseStatus === 'connected' ? 'bg-emerald-400' : supabaseStatus === 'error' ? 'bg-red-400' : supabaseStatus === 'connecting' ? 'bg-amber-400 animate-pulse' : 'bg-slate-400')
    }), supabaseStatus === 'connected' ? 'Connected & Synced' : supabaseStatus === 'error' ? 'Connection Error' : supabaseStatus === 'connecting' ? 'Connecting...' : 'Disconnected')), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-1 md:grid-cols-2 gap-4 mb-4"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1"
    }, "Supabase Project URL ", window.EMBEDDED_SUPABASE_URL && /*#__PURE__*/React.createElement("span", {
      className: "text-emerald-400"
    }, "(embedded)")), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: supabaseConfig.url,
      onChange: function onChange(e) {
        return updateSupabaseConfig('url', e.target.value);
      },
      readOnly: !!(window.EMBEDDED_SUPABASE_URL && window.EMBEDDED_SUPABASE_KEY),
      className: "w-full bg-slate-900 border border-slate-600 rounded px-3 py-2 text-sm outline-none focus:border-blue-500 ".concat(window.EMBEDDED_SUPABASE_URL ? 'opacity-60 cursor-not-allowed' : ''),
      placeholder: "https://xyz.supabase.co"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1"
    }, "Supabase Anon Key ", window.EMBEDDED_SUPABASE_KEY && /*#__PURE__*/React.createElement("span", {
      className: "text-emerald-400"
    }, "(embedded)")), /*#__PURE__*/React.createElement("input", {
      type: "password",
      value: supabaseConfig.key,
      onChange: function onChange(e) {
        return updateSupabaseConfig('key', e.target.value);
      },
      readOnly: !!(window.EMBEDDED_SUPABASE_URL && window.EMBEDDED_SUPABASE_KEY),
      className: "w-full bg-slate-900 border border-slate-600 rounded px-3 py-2 text-sm outline-none focus:border-blue-500 ".concat(window.EMBEDDED_SUPABASE_KEY ? 'opacity-60 cursor-not-allowed' : ''),
      placeholder: "eyJh..."
    }))), /*#__PURE__*/React.createElement("button", {
      onClick: fetchCloudDataFromButton,
      disabled: isLoadingUrl.actuals,
      className: "bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm font-bold shadow-sm transition disabled:opacity-50 flex items-center gap-2"
    }, /*#__PURE__*/React.createElement(Icons.RefreshCw, null), " ", isLoadingUrl.actuals ? 'Syncing...' : 'Sync All Data & Configs from Supabase')), /*#__PURE__*/React.createElement("div", {
      className: "bg-white p-4 rounded-xl shadow-sm border border-slate-200 text-center"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex justify-center mb-4 text-blue-500"
    }, /*#__PURE__*/React.createElement(Icons.Database, null)), /*#__PURE__*/React.createElement("h2", {
      className: "text-3xl font-bold text-slate-800 mb-3"
    }, "Load Data Manually"), /*#__PURE__*/React.createElement("p", {
      className: "text-slate-500 mb-2 max-w-lg mx-auto"
    }, "Upload local files if not using the Supabase connection above."), loadError && /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-red-600 font-bold mb-8 bg-red-50 py-1.5 px-4 rounded-full inline-block border border-red-200"
    }, loadError), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 text-left mt-8"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-blue-50/30 p-6 rounded-xl border border-blue-100 flex flex-col justify-between"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
      className: "font-bold text-slate-800 mb-2 flex items-center gap-2"
    }, /*#__PURE__*/React.createElement(Icons.Activity, null), " 1. High-Level Budget"), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-slate-500 mb-4"
    }, "Required format: JPS Budget 2026 data.csv"), /*#__PURE__*/React.createElement("input", {
      type: "file",
      accept: ".csv",
      onChange: function onChange(e) {
        return handleFileUpload(e, true);
      },
      className: "text-sm file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-blue-600 file:text-white hover:file:bg-blue-700 cursor-pointer w-full text-slate-600 mb-4"
    }))), /*#__PURE__*/React.createElement("div", {
      className: "bg-purple-50/30 p-6 rounded-xl border border-purple-100 flex flex-col justify-between"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
      className: "font-bold text-slate-800 mb-2 flex items-center gap-2"
    }, /*#__PURE__*/React.createElement(Icons.Database, null), " 2. Detailed Actuals"), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-slate-500 mb-4"
    }, "Required format: JPS Actuals data.csv"), /*#__PURE__*/React.createElement("input", {
      type: "file",
      accept: ".csv",
      onChange: function onChange(e) {
        return handleFileUpload(e, false);
      },
      className: "text-sm file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-purple-600 file:text-white hover:file:bg-purple-700 cursor-pointer w-full text-slate-600 mb-4"
    })))), nameConflicts.length > 0 && /*#__PURE__*/React.createElement("div", {
      className: "bg-amber-50 p-6 rounded-xl border border-amber-200 mt-6 text-left"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "font-bold text-amber-800 mb-2 flex items-center gap-2"
    }, /*#__PURE__*/React.createElement(Icons.Users, null), " Account Name Conflicts Detected"), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-amber-700 mb-4"
    }, "Same Account Number found with different names. Select primary name for forecasting."), /*#__PURE__*/React.createElement("div", {
      className: "max-h-60 overflow-y-auto custom-scroll space-y-2"
    }, nameConflicts.map(function (conflict) {
      return /*#__PURE__*/React.createElement("div", {
        key: conflict.acct,
        className: "flex flex-col md:flex-row md:items-center gap-4 bg-white p-3 rounded shadow-sm border border-amber-100"
      }, /*#__PURE__*/React.createElement("div", {
        className: "text-sm font-bold text-slate-700 w-32 shrink-0"
      }, "A/C: ", conflict.acct), /*#__PURE__*/React.createElement("div", {
        className: "flex-1 flex gap-2 flex-wrap"
      }, conflict.names.map(function (n) {
        return /*#__PURE__*/React.createElement("button", {
          key: n,
          onClick: function onClick() {
            var updatedMap = _objectSpread(_objectSpread({}, accountNameMap), {}, _defineProperty({}, conflict.acct, n));
            setAccountNameMap(updatedMap);
            if (supabaseConfig.url && supabaseConfig.key) pushScenariosToCloud(savedVersions, varianceComments, overviewComments, updatedMap);
          },
          className: "px-3 py-1 rounded text-xs font-medium border ".concat(accountNameMap[conflict.acct] === n ? 'bg-amber-500 text-white border-amber-600' : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100')
        }, n);
      })), /*#__PURE__*/React.createElement("div", {
        className: "flex items-center gap-2"
      }, /*#__PURE__*/React.createElement("span", {
        className: "text-xs text-slate-400"
      }, "Custom:"), /*#__PURE__*/React.createElement("input", {
        type: "text",
        placeholder: "Type name...",
        className: "border rounded px-2 py-1 text-xs outline-none focus:border-amber-400",
        onBlur: function onBlur(e) {
          if (e.target.value) {
            var updatedMap = _objectSpread(_objectSpread({}, accountNameMap), {}, _defineProperty({}, conflict.acct, e.target.value));
            setAccountNameMap(updatedMap);
            if (supabaseConfig.url && supabaseConfig.key) pushScenariosToCloud(savedVersions, varianceComments, overviewComments, updatedMap);
          }
        },
        defaultValue: accountNameMap[conflict.acct] && !conflict.names.includes(accountNameMap[conflict.acct]) ? accountNameMap[conflict.acct] : ''
      })));
    }))), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-center gap-4 border-t border-slate-100 pt-8 mt-8"
    }, /*#__PURE__*/React.createElement("label", {
      className: "flex items-center gap-3 cursor-pointer group bg-slate-50 p-4 rounded-xl border border-slate-200 hover:border-blue-300 transition w-full max-w-lg"
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      checked: isNormalizeHurricane,
      onChange: function onChange(e) {
        return setIsNormalizeHurricane(e.target.checked);
      },
      className: "w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
    }), /*#__PURE__*/React.createElement("div", {
      className: "text-left"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-sm font-bold text-slate-700 group-hover:text-blue-600 transition"
    }, "Enable Hurricane Normalization (2025 History)"), /*#__PURE__*/React.createElement("p", {
      className: "text-[10px] text-slate-500 mt-0.5"
    }, "Grosses up Oct-Dec 2025 volumes for true business-as-usual seasonality."))))));
  };
  var renderOverviewTab = function renderOverviewTab() {
    var activeLeData = overviewScenario === 'leCust' ? leCustGrowth : overviewScenario === 'leRC' ? leRCGrowth : overviewScenario === 'leBase' ? leBaseGrowth : leCustomGrowth;
    var maxActMonth26 = Math.max.apply(Math, [0].concat(_toConsumableArray(actuals.filter(function (a) {
      return a.year === budgetYear;
    }).map(function (a) {
      return a.month;
    }))));
    var projData = [].concat(_toConsumableArray(actuals.filter(function (a) {
      return a.year === budgetYear && a.month <= maxActMonth26;
    }).map(function (d) {
      return _objectSpread(_objectSpread({}, d), {}, {
        combinedType: 'Actual'
      });
    })), _toConsumableArray(activeLeData.filter(function (d) {
      return d.year === budgetYear && d.month > maxActMonth26;
    }).map(function (d) {
      return _objectSpread(_objectSpread({}, d), {}, {
        combinedType: 'Forecast'
      });
    })));
    var fProj = getFiltered(projData);
    var fAct25 = getFiltered(actuals).filter(function (d) {
      return d.year === priorYear;
    });
    var fBud26 = getFiltered(budget).filter(function (d) {
      return d.year === budgetYear;
    });
    var totProj = fProj.reduce(function (s, d) {
      return s + d.kwh;
    }, 0);
    var totBud = fBud26.reduce(function (s, d) {
      return s + d.kwh;
    }, 0);
    var totAct25 = fAct25.reduce(function (s, d) {
      return s + d.kwh;
    }, 0);
    var varBud = totBud ? (totProj - totBud) / totBud : 0;
    var varAct = totAct25 ? (totProj - totAct25) / totAct25 : 0;
    var rcSummary = dimensions.rcs.map(function (rc) {
      var b26 = fBud26.filter(function (d) {
        return d.rc === rc;
      }).reduce(function (s, d) {
        return s + d.kwh;
      }, 0) / 1000000;
      var p26 = fProj.filter(function (d) {
        return d.rc === rc;
      }).reduce(function (s, d) {
        return s + d.kwh;
      }, 0) / 1000000;
      return {
        rc: rc,
        Budget: b26,
        Projection: p26
      };
    }).filter(function (rc) {
      return rc.Budget > 0 || rc.Projection > 0;
    });
    return /*#__PURE__*/React.createElement("div", {
      className: "p-6 space-y-3 h-full overflow-y-auto custom-scroll"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-xl border p-4 shadow-sm flex items-center justify-between"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
      className: "text-base font-bold text-slate-800"
    }, "Executive Summary"), /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-slate-500"
    }, "Projected FY 2026 Year-End Trajectory.")), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-3"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-xs font-bold text-slate-500 uppercase tracking-wider"
    }, "Active Scenario:"), /*#__PURE__*/React.createElement("select", {
      value: overviewScenario,
      onChange: function onChange(e) {
        return setOverviewScenario(e.target.value);
      },
      className: "border-2 border-blue-200 rounded-lg px-4 py-2 font-bold text-blue-700 bg-blue-50 shadow-sm outline-none"
    }, /*#__PURE__*/React.createElement("option", {
      value: "leBase"
    }, "LE Base"), /*#__PURE__*/React.createElement("option", {
      value: "leCust"
    }, "LE Cust Vol"), /*#__PURE__*/React.createElement("option", {
      value: "leRC"
    }, "LE RC Vol"), /*#__PURE__*/React.createElement("option", {
      value: "leCustom"
    }, "LE Advanced")))), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-1 md:grid-cols-4 gap-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-xl border p-5 shadow-sm"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-xs font-bold text-slate-400 uppercase mb-1"
    }, "FY 2026 Projection"), /*#__PURE__*/React.createElement("div", {
      className: "text-xl font-black text-slate-800"
    }, formatNum(totProj), " ", /*#__PURE__*/React.createElement("span", {
      className: "text-sm font-bold text-slate-400"
    }, "kWh"))), /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-xl border p-5 shadow-sm"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-xs font-bold text-slate-400 uppercase mb-1"
    }, "FY 2026 Budget"), /*#__PURE__*/React.createElement("div", {
      className: "text-xl font-black text-blue-700"
    }, formatNum(totBud), " ", /*#__PURE__*/React.createElement("span", {
      className: "text-sm font-bold text-blue-400"
    }, "kWh"))), /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-xl border p-5 shadow-sm"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-xs font-bold text-slate-400 uppercase mb-1"
    }, "Variance vs Budget"), /*#__PURE__*/React.createElement("div", {
      className: "text-xl font-black flex items-center gap-2 ".concat(totProj - totBud >= 0 ? 'text-emerald-600' : 'text-red-500')
    }, totProj - totBud > 0 ? '+' : '', formatNum(totProj - totBud), /*#__PURE__*/React.createElement("span", {
      className: "text-sm px-2 py-1 rounded bg-slate-100"
    }, formatPct(varBud)))), /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-xl border p-5 shadow-sm"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-xs font-bold text-slate-400 uppercase mb-1"
    }, "Projected Revenue (US$)"), /*#__PURE__*/React.createElement("div", {
      className: "text-xl font-black text-slate-800"
    }, formatUSDb(fProj.reduce(function (s, d) {
      return s + kwhToRevUSD(d.kwh, d.rc);
    }, 0))), /*#__PURE__*/React.createElement("div", {
      className: "text-xs text-slate-400 mt-1"
    }, "vs Bud: ", /*#__PURE__*/React.createElement("span", {
      className: fProj.reduce(function (s, d) {
        return s + kwhToRevUSD(d.kwh, d.rc);
      }, 0) >= fBud26.reduce(function (s, d) {
        return s + kwhToRevUSD(d.kwh, d.rc);
      }, 0) ? 'text-emerald-600 font-bold' : 'text-red-500 font-bold'
    }, formatPct((fProj.reduce(function (s, d) {
      return s + kwhToRevUSD(d.kwh, d.rc);
    }, 0) - fBud26.reduce(function (s, d) {
      return s + kwhToRevUSD(d.kwh, d.rc);
    }, 0)) / (fBud26.reduce(function (s, d) {
      return s + kwhToRevUSD(d.kwh, d.rc);
    }, 0) || 1))))), /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-xl border p-5 shadow-sm"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-xs font-bold text-slate-400 uppercase mb-1"
    }, "Variance vs 2025 Act"), /*#__PURE__*/React.createElement("div", {
      className: "text-xl font-black flex items-center gap-2 ".concat(totProj - totAct25 >= 0 ? 'text-blue-600' : 'text-red-500')
    }, totProj - totAct25 > 0 ? '+' : '', formatNum(totProj - totAct25), /*#__PURE__*/React.createElement("span", {
      className: "text-sm px-2 py-1 rounded bg-slate-100"
    }, formatPct(varAct))))), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-1 lg:grid-cols-2 gap-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-xl border p-5 shadow-sm flex flex-col min-h-[220px]"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex justify-between items-center mb-4"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "font-bold text-slate-800 flex items-center gap-2"
    }, /*#__PURE__*/React.createElement(Icons.BookOpen, null), " Executive Comments & Action Items"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return pushScenariosToCloud();
      },
      className: "bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-lg text-xs font-bold shadow-sm transition flex items-center gap-1"
    }, /*#__PURE__*/React.createElement(Icons.Save, null), " Save Comments")), /*#__PURE__*/React.createElement("textarea", {
      className: "flex-1 w-full border border-slate-200 rounded-lg p-3 text-sm text-slate-700 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 resize-none custom-scroll",
      placeholder: "Enter executive summary, variance explanations, or action items here...",
      value: overviewComments,
      onChange: function onChange(e) {
        return setOverviewComments(e.target.value);
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-xl border p-5 shadow-sm flex flex-col min-h-[220px]"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "font-bold text-slate-800 mb-4 flex items-center gap-2"
    }, /*#__PURE__*/React.createElement(Icons.Activity, null), " FY Breakdown by Rate Class (GWh)"), /*#__PURE__*/React.createElement("div", {
      className: "flex-1 min-h-0"
    }, /*#__PURE__*/React.createElement(ResponsiveContainer, {
      width: "100%",
      height: "100%"
    }, /*#__PURE__*/React.createElement(BarChart, {
      data: rcSummary
    }, /*#__PURE__*/React.createElement(CartesianGrid, {
      strokeDasharray: "3 3",
      vertical: false,
      stroke: "#e2e8f0"
    }), /*#__PURE__*/React.createElement(XAxis, {
      dataKey: "rc",
      tick: {
        fontSize: 11
      }
    }), /*#__PURE__*/React.createElement(YAxis, {
      tickFormatter: function tickFormatter(v) {
        return v.toFixed(0);
      },
      tick: {
        fontSize: 11
      }
    }), /*#__PURE__*/React.createElement(Tooltip, {
      formatter: function formatter(v) {
        return v.toFixed(2);
      },
      cursor: {
        fill: '#f1f5f9'
      },
      contentStyle: {
        borderRadius: '8px',
        border: 'none',
        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
      }
    }), /*#__PURE__*/React.createElement(Legend, {
      wrapperStyle: {
        paddingTop: '10px'
      }
    }), /*#__PURE__*/React.createElement(Bar, {
      dataKey: "Budget",
      fill: "#3b82f6",
      radius: [4, 4, 0, 0]
    }), /*#__PURE__*/React.createElement(Bar, {
      dataKey: "Projection",
      fill: "#10b981",
      radius: [4, 4, 0, 0]
    })))))));
  };
  var renderMonthlyTab = function renderMonthlyTab() {
    var sortedMonthly = sortArray(monthlyAggregatesRaw, monthlySort);
    var totA25 = monthlyAggregatesRaw.reduce(function (s, d) {
      return s + d.Act25;
    }, 0);
    var totB26 = monthlyAggregatesRaw.reduce(function (s, d) {
      return s + d.Bud26;
    }, 0);
    var totA26 = monthlyAggregatesRaw.reduce(function (s, d) {
      return s + (d.Act26 || 0);
    }, 0);
    return /*#__PURE__*/React.createElement("div", {
      className: "p-6 space-y-3 h-full overflow-y-auto custom-scroll"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-xl border p-5 flex flex-col min-h-[260px] shrink-0 shadow-sm"
    }, /*#__PURE__*/React.createElement("div", {
      className: "font-bold text-slate-800 mb-4 flex items-center gap-2"
    }, /*#__PURE__*/React.createElement(Icons.TrendingUp, null), " Monthly Trend & Scenarios (kWh)"), renderGraphToggles(), /*#__PURE__*/React.createElement("div", {
      className: "w-full h-[220px]"
    }, /*#__PURE__*/React.createElement(ResponsiveContainer, {
      width: "100%",
      height: "100%"
    }, /*#__PURE__*/React.createElement(LineChart, {
      data: monthlyAggregatesRaw
    }, /*#__PURE__*/React.createElement(CartesianGrid, {
      strokeDasharray: "3 3",
      vertical: false,
      stroke: "#e2e8f0"
    }), /*#__PURE__*/React.createElement(XAxis, {
      dataKey: "month",
      tick: {
        fontSize: 11
      }
    }), /*#__PURE__*/React.createElement(YAxis, {
      tickFormatter: function tickFormatter(v) {
        return (v / 1000).toFixed(0) + 'k';
      },
      tick: {
        fontSize: 11
      }
    }), /*#__PURE__*/React.createElement(Tooltip, {
      formatter: function formatter(v) {
        return formatNum(v);
      },
      contentStyle: {
        borderRadius: '8px',
        border: 'none',
        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
      }
    }), /*#__PURE__*/React.createElement(Legend, {
      wrapperStyle: {
        paddingTop: '10px'
      }
    }), graphToggles.act25 && /*#__PURE__*/React.createElement(Line, {
      type: "monotone",
      dataKey: "Act25",
      name: String(priorYear) + " Actuals",
      stroke: "#94a3b8",
      strokeDasharray: "5 5",
      dot: false
    }), graphToggles.bud26 && /*#__PURE__*/React.createElement(Line, {
      type: "monotone",
      dataKey: "Bud26",
      name: String(budgetYear) + " Budget",
      stroke: "#3b82f6",
      strokeWidth: 2,
      dot: false
    }), graphToggles.act26 && /*#__PURE__*/React.createElement(Line, {
      type: "monotone",
      dataKey: "Act26",
      name: String(budgetYear) + " Actuals",
      stroke: "#8b5cf6",
      strokeWidth: 3,
      dot: {
        r: 4
      }
    }), varScenarios.map(function (sc) {
      return graphToggles[sc.key.replace('Le', 'le')] && /*#__PURE__*/React.createElement(Line, {
        key: sc.key,
        type: "monotone",
        dataKey: sc.key,
        name: sc.label,
        stroke: sc.key === 'LeBase' ? '#f59e0b' : sc.key === 'LeCust' ? '#d946ef' : sc.key === 'LeRC' ? '#0ea5e9' : '#6366f1',
        strokeWidth: sc.key === 'LeBase' ? 3 : 2,
        strokeDasharray: "4 4",
        dot: false
      });
    }))))), /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-xl border shadow-sm flex flex-col"
    }, /*#__PURE__*/React.createElement("div", {
      className: "p-4 border-b flex justify-between items-center bg-slate-50"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "font-bold text-slate-800 flex items-center gap-2"
    }, /*#__PURE__*/React.createElement(Icons.Database, null), " Monthly Data Matrix"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return exportCSV(monthlyAggregatesRaw, 'Monthly_Scenarios_Summary.csv');
      },
      className: "bg-blue-50 text-blue-700 hover:bg-blue-100 px-4 py-2 rounded font-bold text-sm flex items-center gap-2 border border-blue-200 transition"
    }, /*#__PURE__*/React.createElement(Icons.Download, null), " Export Summary")), /*#__PURE__*/React.createElement("div", {
      className: "overflow-x-auto relative"
    }, /*#__PURE__*/React.createElement("table", {
      className: "w-full text-sm text-left whitespace-nowrap"
    }, /*#__PURE__*/React.createElement("thead", {
      className: "table-pin-header"
    }, /*#__PURE__*/React.createElement("tr", {
      className: "bg-slate-100"
    }, /*#__PURE__*/React.createElement(SortHeader, {
      label: "Month",
      columnKey: "monthFull",
      currentSort: monthlySort,
      requestSort: function requestSort(k) {
        return handleSortRequest(k, monthlySort, setMonthlySort);
      },
      className: "border-r table-pin-col bg-slate-100 z-30"
    }), /*#__PURE__*/React.createElement(SortHeader, {
      label: String(priorYear) + " Act",
      columnKey: "Act25",
      currentSort: monthlySort,
      requestSort: function requestSort(k) {
        return handleSortRequest(k, monthlySort, setMonthlySort);
      },
      className: "text-right"
    }), /*#__PURE__*/React.createElement(SortHeader, {
      label: String(budgetYear) + " Bud",
      columnKey: "Bud26",
      currentSort: monthlySort,
      requestSort: function requestSort(k) {
        return handleSortRequest(k, monthlySort, setMonthlySort);
      },
      className: "text-right"
    }), /*#__PURE__*/React.createElement(SortHeader, {
      label: "2026 Act",
      columnKey: "Act26",
      currentSort: monthlySort,
      requestSort: function requestSort(k) {
        return handleSortRequest(k, monthlySort, setMonthlySort);
      },
      className: "text-right"
    }), varScenarios.map(function (sc) {
      return /*#__PURE__*/React.createElement(SortHeader, {
        key: sc.key,
        label: sc.label,
        columnKey: sc.key,
        currentSort: monthlySort,
        requestSort: function requestSort(k) {
          return handleSortRequest(k, monthlySort, setMonthlySort);
        },
        className: "text-right ".concat(sc.text)
      });
    }))), /*#__PURE__*/React.createElement("tbody", null, sortedMonthly.map(function (row) {
      return /*#__PURE__*/React.createElement("tr", {
        key: row.monthFull,
        className: "border-b hover:bg-slate-50"
      }, /*#__PURE__*/React.createElement("td", {
        className: "p-3 font-bold border-r table-pin-col bg-white"
      }, row.monthFull), /*#__PURE__*/React.createElement("td", {
        className: "p-3 text-right text-slate-500"
      }, formatNum(row.Act25)), /*#__PURE__*/React.createElement("td", {
        className: "p-3 text-right text-blue-600"
      }, formatNum(row.Bud26)), /*#__PURE__*/React.createElement("td", {
        className: "p-3 text-right font-bold text-purple-700"
      }, row.Act26 ? formatNum(row.Act26) : '-'), varScenarios.map(function (sc) {
        return /*#__PURE__*/React.createElement("td", {
          key: sc.key,
          className: "p-3 text-right font-bold ".concat(sc.text)
        }, formatNum(row[sc.key]));
      }));
    })), /*#__PURE__*/React.createElement("tfoot", {
      className: "bg-slate-200 font-black border-t-2 border-slate-300 sticky bottom-0 z-20"
    }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
      className: "p-3 border-r table-pin-col bg-slate-200 z-30"
    }, "TOTAL YTD/FY"), /*#__PURE__*/React.createElement("td", {
      className: "p-3 text-right text-slate-600"
    }, formatNum(totA25)), /*#__PURE__*/React.createElement("td", {
      className: "p-3 text-right text-blue-800"
    }, formatNum(totB26)), /*#__PURE__*/React.createElement("td", {
      className: "p-3 text-right text-purple-800"
    }, formatNum(totA26)), varScenarios.map(function (sc) {
      return /*#__PURE__*/React.createElement("td", {
        key: sc.key,
        className: "p-3 text-right ".concat(sc.text)
      }, formatNum(monthlyAggregatesRaw.reduce(function (s, d) {
        return s + (d[sc.key] || 0);
      }, 0)));
    })))))));
  };
  var renderAllocationTab = function renderAllocationTab() {
    var aMonths = _toConsumableArray(new Set(rawActuals.map(function (d) {
      return d.Month;
    }))).filter(Boolean);
    var aQuarters = _toConsumableArray(new Set(rawActuals.map(function (d) {
      var p = parseTimeStr(d.Month);
      return p.year > 0 ? "Q".concat(p.qtr, " ").concat(p.year, " Average") : null;
    }))).filter(Boolean);
    var refOptions = [].concat(_toConsumableArray(aQuarters), _toConsumableArray(aMonths));
    return /*#__PURE__*/React.createElement("div", {
      className: "p-6 space-y-3 h-full overflow-y-auto custom-scroll"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-white p-6 rounded-xl border shadow-sm flex items-center justify-between"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
      className: "font-bold text-lg text-slate-800 flex items-center gap-2"
    }, /*#__PURE__*/React.createElement(Icons.Calculator, null), " Budget Proration & Redistribution Engine"), /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-slate-500"
    }, "Maps high-level budget targets to customer level based on historical Actuals.")), isBudgetCommitted ? /*#__PURE__*/React.createElement("button", {
      onClick: unlockAllocation,
      className: "bg-slate-100 text-slate-800 px-6 py-2 rounded-lg font-bold border hover:bg-slate-200 transition shadow-sm"
    }, "Unlock Allocation") : /*#__PURE__*/React.createElement("div", {
      className: "flex gap-3"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: commitAllocation,
      disabled: allocationResults.length === 0,
      className: "bg-emerald-600 text-white px-6 py-2 rounded-lg font-bold shadow hover:bg-emerald-700 transition disabled:opacity-50"
    }, "Apply Granular Budget"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        commitAllocation();
        setTimeout(function () {
          return handleSaveVersion();
        }, 100);
      },
      disabled: allocationResults.length === 0,
      className: "bg-blue-600 text-white px-6 py-2 rounded-lg font-bold shadow hover:bg-blue-700 transition disabled:opacity-50 flex items-center gap-2"
    }, /*#__PURE__*/React.createElement(Icons.Save, null), " Apply & Save"))), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-1 lg:grid-cols-2 gap-6 ".concat(isBudgetCommitted ? 'opacity-60 pointer-events-none' : '')
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-white p-5 rounded-xl border shadow-sm"
    }, /*#__PURE__*/React.createElement("h4", {
      className: "font-bold mb-4 flex items-center gap-2 text-blue-700"
    }, "Month-to-Month Baseline Mapping"), /*#__PURE__*/React.createElement("div", {
      className: "max-h-[200px] overflow-y-auto custom-scroll pr-2"
    }, /*#__PURE__*/React.createElement("table", {
      className: "w-full text-sm"
    }, /*#__PURE__*/React.createElement("thead", {
      className: "sticky top-0 bg-slate-50 border-b"
    }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
      className: "p-2 text-left text-slate-500"
    }, "Budget Month"), /*#__PURE__*/React.createElement("th", {
      className: "p-2 text-left text-slate-500"
    }, "Reference Actuals"))), /*#__PURE__*/React.createElement("tbody", null, Object.keys(monthMapping).map(function (bm) {
      return /*#__PURE__*/React.createElement("tr", {
        key: bm,
        className: "border-b"
      }, /*#__PURE__*/React.createElement("td", {
        className: "p-2 font-medium"
      }, bm), /*#__PURE__*/React.createElement("td", {
        className: "p-2"
      }, /*#__PURE__*/React.createElement("select", {
        value: monthMapping[bm] || '',
        onChange: function onChange(e) {
          return setMonthMapping(function (p) {
            return _objectSpread(_objectSpread({}, p), {}, _defineProperty({}, bm, e.target.value));
          });
        },
        className: "w-full border rounded px-2 py-1 bg-white outline-none"
      }, refOptions.map(function (o) {
        return /*#__PURE__*/React.createElement("option", {
          key: o,
          value: o
        }, o);
      }))));
    }))))), /*#__PURE__*/React.createElement("div", {
      className: "bg-white p-5 rounded-xl border shadow-sm h-fit"
    }, /*#__PURE__*/React.createElement("h4", {
      className: "font-bold mb-4 flex items-center gap-2 text-purple-700"
    }, "Industry Growth Adjustments (%)"), /*#__PURE__*/React.createElement("div", {
      className: "flex gap-2 mb-4"
    }, /*#__PURE__*/React.createElement("select", {
      id: "ind-sel",
      className: "flex-1 border rounded px-3 py-2 text-sm bg-white outline-none"
    }, dimensions.inds.map(function (i) {
      return /*#__PURE__*/React.createElement("option", {
        key: i
      }, i);
    })), /*#__PURE__*/React.createElement("input", {
      id: "ind-val",
      type: "number",
      placeholder: "%",
      className: "w-20 border rounded px-3 py-2 text-sm"
    }), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        var i = document.getElementById('ind-sel').value;
        var v = document.getElementById('ind-val').value;
        if (i && v) setAllocOverrides(function (p) {
          return _objectSpread(_objectSpread({}, p), {}, _defineProperty({}, i, parseFloat(v)));
        });
      },
      className: "bg-slate-800 text-white px-4 rounded font-bold hover:bg-slate-900 transition"
    }, "+")), /*#__PURE__*/React.createElement("div", {
      className: "space-y-2"
    }, Object.entries(allocOverrides).map(function (_ref33) {
      var _ref34 = _slicedToArray(_ref33, 2),
        ind = _ref34[0],
        val = _ref34[1];
      return /*#__PURE__*/React.createElement("div", {
        key: ind,
        className: "flex justify-between items-center text-sm bg-slate-50 p-2 rounded border border-slate-100"
      }, /*#__PURE__*/React.createElement("span", {
        className: "font-medium text-slate-700"
      }, ind), /*#__PURE__*/React.createElement("span", {
        className: "font-bold ".concat(val >= 0 ? 'text-emerald-600' : 'text-red-500')
      }, val, "%"), /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          var c = _objectSpread({}, allocOverrides);
          delete c[ind];
          setAllocOverrides(c);
        },
        className: "text-red-400 hover:text-red-600"
      }, "Remove"));
    })))));
  };
  var renderPivotTab = function renderPivotTab() {
    if (actuals.length === 0) return null;
    if (!isBudgetCommitted) return renderEmptyBudgetWarning();
    var rcMatrix = pivotState.rcMatrix,
      topMovers = pivotState.topMovers,
      bottomMovers = pivotState.bottomMovers;
    var sortedTopMovers = sortArray(topMovers, topSort);
    var sortedBotMovers = sortArray(bottomMovers, botSort);
    return /*#__PURE__*/React.createElement("div", {
      className: "p-6 h-full flex flex-col space-y-3 overflow-hidden"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-xl border shadow-sm p-4 flex flex-col md:flex-row gap-4 justify-between shrink-0"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
      className: "font-bold text-slate-800 flex items-center gap-2"
    }, /*#__PURE__*/React.createElement(Icons.Grid, null), " Combined Scenario Pivot"), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-slate-500"
    }, "View Actuals combined with selected scenario (GWh).")), /*#__PURE__*/React.createElement("div", {
      className: "flex flex-wrap items-center gap-3"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-xs font-bold text-slate-500"
    }, "Timeframe:"), /*#__PURE__*/React.createElement("select", {
      value: moversTimeFrame,
      onChange: function onChange(e) {
        return setMoversTimeFrame(e.target.value);
      },
      className: "border rounded-lg px-3 py-1.5 font-bold text-purple-700 bg-white shadow-sm outline-none"
    }, /*#__PURE__*/React.createElement("option", {
      value: "FY"
    }, "Full Year (FY)"), /*#__PURE__*/React.createElement("option", {
      value: "YTD"
    }, "YTD (Uses Global Filter)"), /*#__PURE__*/React.createElement("option", {
      value: "MTD"
    }, "MTD (Uses Global Filter)")), /*#__PURE__*/React.createElement("span", {
      className: "text-slate-300"
    }, "|"), /*#__PURE__*/React.createElement("span", {
      className: "text-xs font-bold text-slate-500"
    }, "Scenario:"), /*#__PURE__*/React.createElement("select", {
      value: pivotScenario,
      onChange: function onChange(e) {
        return setPivotScenario(e.target.value);
      },
      className: "border rounded-lg px-3 py-1.5 font-bold text-blue-700 bg-white shadow-sm outline-none"
    }, /*#__PURE__*/React.createElement("option", {
      value: "leBase"
    }, "LE Base"), /*#__PURE__*/React.createElement("option", {
      value: "leCust"
    }, "LE Cust Vol"), /*#__PURE__*/React.createElement("option", {
      value: "leRC"
    }, "LE RC Vol"), /*#__PURE__*/React.createElement("option", {
      value: "leCustom"
    }, "LE Advanced"), /*#__PURE__*/React.createElement("option", {
      value: "budgetCombined"
    }, "Budget + Actuals")))), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-1 md:grid-cols-2 gap-6 shrink-0"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-xl border shadow-sm flex flex-col overflow-hidden max-h-[200px]"
    }, /*#__PURE__*/React.createElement("div", {
      className: "p-3 border-b bg-slate-50 flex justify-between items-center text-sm"
    }, /*#__PURE__*/React.createElement("h4", {
      className: "font-bold text-slate-800 underline decoration-blue-500 decoration-2 underline-offset-4"
    }, "Top Performers"), /*#__PURE__*/React.createElement("select", {
      value: moversRC,
      onChange: function onChange(e) {
        return setMoversRC(e.target.value);
      },
      className: "bg-white border rounded px-2 py-0.5 outline-none text-xs text-blue-700 font-bold"
    }, /*#__PURE__*/React.createElement("option", {
      value: "All"
    }, "All Rates"), dimensions.rcs.filter(function (r) {
      return !['RT10', 'RT20', 'EV', 'BU'].includes(r);
    }).map(function (r) {
      return /*#__PURE__*/React.createElement("option", {
        key: r
      }, r);
    }))), /*#__PURE__*/React.createElement("div", {
      className: "overflow-auto custom-scroll"
    }, /*#__PURE__*/React.createElement("table", {
      className: "w-full text-xs text-left"
    }, /*#__PURE__*/React.createElement("thead", {
      className: "sticky top-0 bg-white shadow-[0_1px_0_0_#e2e8f0]"
    }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
      className: "p-2 text-slate-500"
    }, "#"), /*#__PURE__*/React.createElement(SortHeader, {
      label: "2025 Base",
      columnKey: "baseline",
      currentSort: topSort,
      requestSort: function requestSort(k) {
        return handleSortRequest(k, topSort, setTopSort);
      },
      className: "text-right text-slate-500"
    }), /*#__PURE__*/React.createElement(SortHeader, {
      label: "2026 Target",
      columnKey: "target",
      currentSort: topSort,
      requestSort: function requestSort(k) {
        return handleSortRequest(k, topSort, setTopSort);
      },
      className: "text-right text-slate-500"
    }), /*#__PURE__*/React.createElement(SortHeader, {
      label: "GWh Incline",
      columnKey: "variance",
      currentSort: topSort,
      requestSort: function requestSort(k) {
        return handleSortRequest(k, topSort, setTopSort);
      },
      className: "text-right text-slate-800"
    }), /*#__PURE__*/React.createElement(SortHeader, {
      label: "% Growth",
      columnKey: "pct",
      currentSort: topSort,
      requestSort: function requestSort(k) {
        return handleSortRequest(k, topSort, setTopSort);
      },
      className: "text-right text-slate-500"
    }), /*#__PURE__*/React.createElement(SortHeader, {
      label: "Account",
      columnKey: "name",
      currentSort: topSort,
      requestSort: function requestSort(k) {
        return handleSortRequest(k, topSort, setTopSort);
      },
      className: "text-slate-800 pl-4"
    }), /*#__PURE__*/React.createElement("th", {
      className: "p-2 text-slate-500 w-16"
    }, "Notes"))), /*#__PURE__*/React.createElement("tbody", null, sortedTopMovers.map(function (m, idx) {
      var commentKey = "".concat(pivotScenario, "|").concat(moversTimeFrame, "|").concat(m.name);
      var hasComment = !!varianceComments[commentKey];
      return /*#__PURE__*/React.createElement("tr", {
        key: m.name,
        className: "border-b last:border-0 hover:bg-slate-50"
      }, /*#__PURE__*/React.createElement("td", {
        className: "p-2 text-slate-400"
      }, idx + 1), /*#__PURE__*/React.createElement("td", {
        className: "p-2 text-right font-medium text-slate-500"
      }, m.baseline.toFixed(2)), /*#__PURE__*/React.createElement("td", {
        className: "p-2 text-right font-medium text-slate-500"
      }, m.target.toFixed(2)), /*#__PURE__*/React.createElement("td", {
        className: "p-2 text-right font-bold text-emerald-600"
      }, "+", m.variance.toFixed(2)), /*#__PURE__*/React.createElement("td", {
        className: "p-2 text-right font-medium text-emerald-600 bg-emerald-50/30"
      }, "+", m.pct.toFixed(1), "%"), /*#__PURE__*/React.createElement("td", {
        className: "p-2 pl-4 max-w-[160px]"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center gap-1.5"
      }, customerRiskFlags[m.name] && /*#__PURE__*/React.createElement("span", {
        className: "w-2 h-2 rounded-full flex-shrink-0 ".concat(customerRiskFlags[m.name].level === 'red' ? 'bg-red-500' : customerRiskFlags[m.name].level === 'amber' ? 'bg-amber-400' : 'bg-yellow-300'),
        title: "Risk: ".concat(customerRiskFlags[m.name].ytdPct, "% vs budget")
      }), /*#__PURE__*/React.createElement("span", {
        className: "truncate text-slate-700",
        title: m.name
      }, m.name))), /*#__PURE__*/React.createElement("td", {
        className: "p-2 text-center"
      }, /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          return handleAddComment(m.name);
        },
        className: "text-slate-400 hover:text-blue-600 transition",
        title: hasComment ? varianceComments[commentKey] : "Add explanation"
      }, hasComment ? '💬' : '➕')));
    }), sortedTopMovers.length === 0 && /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
      colSpan: "7",
      className: "p-4 text-center text-slate-400"
    }, "No inclines found for this selection.")))))), /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-xl border shadow-sm flex flex-col overflow-hidden max-h-[200px]"
    }, /*#__PURE__*/React.createElement("div", {
      className: "p-3 border-b bg-slate-50 flex justify-between items-center text-sm"
    }, /*#__PURE__*/React.createElement("h4", {
      className: "font-bold text-slate-800 underline decoration-red-500 decoration-2 underline-offset-4"
    }, "Bottom Performers")), /*#__PURE__*/React.createElement("div", {
      className: "overflow-auto custom-scroll"
    }, /*#__PURE__*/React.createElement("table", {
      className: "w-full text-xs text-left"
    }, /*#__PURE__*/React.createElement("thead", {
      className: "sticky top-0 bg-white shadow-[0_1px_0_0_#e2e8f0]"
    }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
      className: "p-2 text-slate-500"
    }, "#"), /*#__PURE__*/React.createElement(SortHeader, {
      label: "2025 Base",
      columnKey: "baseline",
      currentSort: botSort,
      requestSort: function requestSort(k) {
        return handleSortRequest(k, botSort, setBotSort);
      },
      className: "text-right text-slate-500"
    }), /*#__PURE__*/React.createElement(SortHeader, {
      label: "2026 Target",
      columnKey: "target",
      currentSort: botSort,
      requestSort: function requestSort(k) {
        return handleSortRequest(k, botSort, setBotSort);
      },
      className: "text-right text-slate-500"
    }), /*#__PURE__*/React.createElement(SortHeader, {
      label: "GWh Decline",
      columnKey: "variance",
      currentSort: botSort,
      requestSort: function requestSort(k) {
        return handleSortRequest(k, botSort, setBotSort);
      },
      className: "text-right text-slate-800"
    }), /*#__PURE__*/React.createElement(SortHeader, {
      label: "% Growth",
      columnKey: "pct",
      currentSort: botSort,
      requestSort: function requestSort(k) {
        return handleSortRequest(k, botSort, setBotSort);
      },
      className: "text-right text-slate-500"
    }), /*#__PURE__*/React.createElement(SortHeader, {
      label: "Account",
      columnKey: "name",
      currentSort: botSort,
      requestSort: function requestSort(k) {
        return handleSortRequest(k, botSort, setBotSort);
      },
      className: "text-slate-800 pl-4"
    }), /*#__PURE__*/React.createElement("th", {
      className: "p-2 text-slate-500 w-16"
    }, "Notes"))), /*#__PURE__*/React.createElement("tbody", null, sortedBotMovers.map(function (m, idx) {
      var commentKey = "".concat(pivotScenario, "|").concat(moversTimeFrame, "|").concat(m.name);
      var hasComment = !!varianceComments[commentKey];
      return /*#__PURE__*/React.createElement("tr", {
        key: m.name,
        className: "border-b last:border-0 hover:bg-slate-50"
      }, /*#__PURE__*/React.createElement("td", {
        className: "p-2 text-slate-400"
      }, idx + 1), /*#__PURE__*/React.createElement("td", {
        className: "p-2 text-right font-medium text-slate-500"
      }, m.baseline.toFixed(2)), /*#__PURE__*/React.createElement("td", {
        className: "p-2 text-right font-medium text-slate-500"
      }, m.target.toFixed(2)), /*#__PURE__*/React.createElement("td", {
        className: "p-2 text-right font-bold text-red-500"
      }, m.variance.toFixed(2)), /*#__PURE__*/React.createElement("td", {
        className: "p-2 text-right font-medium text-red-500 bg-red-50/30"
      }, m.pct.toFixed(1), "%"), /*#__PURE__*/React.createElement("td", {
        className: "p-2 truncate max-w-[150px] text-slate-700 pl-4",
        title: m.name
      }, m.name), /*#__PURE__*/React.createElement("td", {
        className: "p-2 text-center"
      }, /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          return handleAddComment(m.name);
        },
        className: "text-slate-400 hover:text-blue-600 transition",
        title: hasComment ? varianceComments[commentKey] : "Add explanation"
      }, hasComment ? '💬' : '➕')));
    }), sortedBotMovers.length === 0 && /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
      colSpan: "7",
      className: "p-4 text-center text-slate-400"
    }, "No declines found for this selection."))))))), /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-xl border shadow-sm flex-1 flex flex-col overflow-hidden"
    }, /*#__PURE__*/React.createElement("div", {
      className: "p-3 border-b bg-cyan-500 text-white font-bold flex justify-between items-center text-sm shrink-0"
    }, /*#__PURE__*/React.createElement("span", null, "net_kwh_billed_consump (GWh)")), /*#__PURE__*/React.createElement("div", {
      className: "flex-1 overflow-auto custom-scroll relative"
    }, /*#__PURE__*/React.createElement("table", {
      className: "w-full text-xs text-right whitespace-nowrap"
    }, /*#__PURE__*/React.createElement("thead", {
      className: "table-pin-header"
    }, /*#__PURE__*/React.createElement("tr", {
      className: "bg-slate-800 text-white"
    }, /*#__PURE__*/React.createElement("th", {
      className: "p-2 text-left border-r border-slate-700 table-pin-col bg-slate-800 z-30"
    }, "Rate category"), /*#__PURE__*/React.createElement("th", {
      className: "p-2 text-left border-r border-slate-700 bg-slate-800 sticky left-[100px] z-30 w-64 max-w-xs"
    }, "Name"), monthNames.map(function (m) {
      return /*#__PURE__*/React.createElement("th", {
        key: m,
        className: "p-2 border-r border-slate-700"
      }, m.substring(0, 3));
    }), /*#__PURE__*/React.createElement("th", {
      className: "p-2 font-black bg-slate-900"
    }, "Total"))), /*#__PURE__*/React.createElement("tbody", null, Object.entries(rcMatrix).sort(function (a, b) {
      return getRcWeight(a[0]) - getRcWeight(b[0]);
    }).map(function (_ref35) {
      var _ref36 = _slicedToArray(_ref35, 2),
        rc = _ref36[0],
        rcData = _ref36[1];
      var isExpanded = expandedPivotRC === rc;
      var hasCusts = Object.keys(rcData.customers).filter(function (c) {
        return c;
      }).length > 0;
      return /*#__PURE__*/React.createElement(React.Fragment, {
        key: rc
      }, /*#__PURE__*/React.createElement("tr", {
        className: "border-b hover:bg-slate-50 transition ".concat(hasCusts ? 'cursor-pointer' : ''),
        onClick: function onClick() {
          return hasCusts && setExpandedPivotRC(isExpanded ? null : rc);
        }
      }, /*#__PURE__*/React.createElement("td", {
        className: "p-2 text-left font-bold border-r table-pin-col bg-white z-20 whitespace-nowrap"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center gap-1 w-[90px]"
      }, hasCusts ? /*#__PURE__*/React.createElement("span", {
        className: "text-[10px] text-slate-400 w-3"
      }, isExpanded ? '▼' : '▶') : /*#__PURE__*/React.createElement("span", {
        className: "w-3"
      }), rc)), /*#__PURE__*/React.createElement("td", {
        className: "p-2 text-left border-r bg-white sticky left-[100px] z-20 w-64 max-w-xs text-slate-400 italic"
      }, hasCusts ? "[".concat(Object.keys(rcData.customers).length, " Accounts]") : 'Aggregated'), rcData.months.map(function (val, i) {
        return /*#__PURE__*/React.createElement("td", {
          key: i,
          className: "p-2 border-r border-slate-100 font-bold"
        }, val !== 0 ? val.toFixed(2) : '0.00');
      }), /*#__PURE__*/React.createElement("td", {
        className: "p-2 font-black bg-slate-50 text-blue-800"
      }, rcData.total.toFixed(2))), isExpanded && Object.entries(rcData.customers).sort(function (a, b) {
        return b[1].total - a[1].total;
      }).map(function (_ref37) {
        var _ref38 = _slicedToArray(_ref37, 2),
          custName = _ref38[0],
          custData = _ref38[1];
        if (!custName) return null;
        return /*#__PURE__*/React.createElement("tr", {
          key: "".concat(rc, "-").concat(custName),
          className: "border-b bg-slate-50/50 hover:bg-slate-100 transition"
        }, /*#__PURE__*/React.createElement("td", {
          className: "p-2 border-r table-pin-col bg-slate-50/95 z-10 text-transparent"
        }, "_"), /*#__PURE__*/React.createElement("td", {
          className: "p-2 text-left border-r bg-slate-50/95 sticky left-[100px] z-10 w-64 max-w-xs truncate",
          title: custName
        }, custName), custData.months.map(function (val, i) {
          return /*#__PURE__*/React.createElement("td", {
            key: i,
            className: "p-2 border-r border-slate-200 text-slate-600"
          }, val !== 0 ? val.toFixed(2) : '0.00');
        }), /*#__PURE__*/React.createElement("td", {
          className: "p-2 font-bold bg-slate-100"
        }, custData.total.toFixed(2)));
      }));
    })), /*#__PURE__*/React.createElement("tfoot", {
      className: "bg-slate-200 font-black border-t-2 border-slate-300 sticky bottom-0 z-30"
    }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
      className: "p-2 text-left border-r table-pin-col bg-slate-200 z-40"
    }, "TOTAL"), /*#__PURE__*/React.createElement("td", {
      className: "p-2 border-r bg-slate-200 sticky left-[100px] z-40"
    }), Array(12).fill(0).map(function (_, i) {
      var sum = Object.values(rcMatrix).reduce(function (s, rc) {
        return s + rc.months[i];
      }, 0);
      return /*#__PURE__*/React.createElement("td", {
        key: i,
        className: "p-2 border-r border-slate-300 text-blue-900"
      }, sum.toFixed(2));
    }), /*#__PURE__*/React.createElement("td", {
      className: "p-2 text-blue-900 bg-slate-300"
    }, Object.values(rcMatrix).reduce(function (s, rc) {
      return s + rc.total;
    }, 0).toFixed(2))))))));
  };
  var renderVarianceTab = function renderVarianceTab() {
    if (!isBudgetCommitted) return renderEmptyBudgetWarning();
    var ytdLimit = ytdMonth === 'All' ? 12 : monthMap[ytdMonth];
    var matrixObj = {};
    var initMatrix = function initMatrix(dim) {
      if (!matrixObj[dim]) matrixObj[dim] = {
        dim: dim,
        a25: 0,
        a26: 0,
        b26: 0,
        leCust: 0,
        leRc: 0,
        leBase: 0,
        leCustom: 0,
        sub: {}
      };
    };
    var initSubMatrix = function initSubMatrix(dim, subDim) {
      if (!matrixObj[dim].sub[subDim]) matrixObj[dim].sub[subDim] = {
        dim: subDim,
        a25: 0,
        a26: 0,
        b26: 0,
        leCust: 0,
        leRc: 0,
        leBase: 0,
        leCustom: 0
      };
    };
    var datasets = [{
      data: getFiltered(actuals),
      year: 2025,
      field: 'a25'
    }, {
      data: getFiltered(actuals),
      year: 2026,
      field: 'a26'
    }, {
      data: getFiltered(budget),
      year: 2026,
      field: 'b26'
    }, {
      data: getFiltered(leCustGrowth),
      year: null,
      field: 'leCust'
    }, {
      data: getFiltered(leRCGrowth),
      year: null,
      field: 'leRc'
    }, {
      data: getFiltered(leBaseGrowth),
      year: null,
      field: 'leBase'
    }, {
      data: getFiltered(leCustomGrowth),
      year: null,
      field: 'leCustom'
    }];
    datasets.forEach(function (_ref39) {
      var data = _ref39.data,
        year = _ref39.year,
        field = _ref39.field;
      data.forEach(function (d) {
        if (d.month > ytdLimit) return;
        if (year && d.year !== year) return;
        var dimVal = d[varianceDim] || 'Unassigned';
        initMatrix(dimVal);
        matrixObj[dimVal][field] += d.kwh;
        if (drillDownDim !== 'none') {
          var subDimVal = d[drillDownDim] || 'Unassigned';
          initSubMatrix(dimVal, subDimVal);
          matrixObj[dimVal].sub[subDimVal][field] += d.kwh;
        }
      });
    });
    var matrixArr = Object.values(matrixObj);
    var sortedMatrix = sortArray(matrixArr, varSort);
    var totA25 = matrixArr.reduce(function (s, v) {
      return s + v.a25;
    }, 0);
    var totB26 = matrixArr.reduce(function (s, v) {
      return s + v.b26;
    }, 0);
    var totA26 = matrixArr.reduce(function (s, v) {
      return s + v.a26;
    }, 0);
    var totLeCust = matrixArr.reduce(function (s, v) {
      return s + v.leCust;
    }, 0);
    var totLeRc = matrixArr.reduce(function (s, v) {
      return s + v.leRc;
    }, 0);
    var totLeBase = matrixArr.reduce(function (s, v) {
      return s + v.leBase;
    }, 0);
    var totLeCustom = matrixArr.reduce(function (s, v) {
      return s + v.leCustom;
    }, 0);
    var renderVarPct = function renderVarPct(val, base) {
      return formatPct(base ? (val - base) / base : 0);
    };
    var colorPct = function colorPct(val, base) {
      var pct = base ? (val - base) / base : 0;
      return pct >= 0 ? 'text-emerald-600' : 'text-red-500';
    };
    var renderVarRowCells = function renderVarRowCells(v) {
      var isSub = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("td", {
        className: "p-2 text-right text-slate-500 ".concat(isSub ? 'text-xs' : '')
      }, formatNum(v.a25)), /*#__PURE__*/React.createElement("td", {
        className: "p-2 text-right text-blue-700 ".concat(isSub ? 'text-xs opacity-80' : '')
      }, formatNum(v.b26)), /*#__PURE__*/React.createElement("td", {
        className: "p-2 text-right text-slate-800 border-l border-slate-200 ".concat(isSub ? 'text-xs' : '')
      }, formatNum(v.a26)), /*#__PURE__*/React.createElement("td", {
        className: "p-2 text-right text-xs ".concat(isSub ? 'font-medium' : 'font-bold', " ").concat(colorPct(v.a26, v.b26))
      }, renderVarPct(v.a26, v.b26)), /*#__PURE__*/React.createElement("td", {
        className: "p-2 text-right text-xs ".concat(isSub ? 'font-medium' : 'font-bold', " ").concat(colorPct(v.a26, v.a25))
      }, renderVarPct(v.a26, v.a25)), varScenarios.map(function (sc) {
        return /*#__PURE__*/React.createElement(React.Fragment, {
          key: sc.key
        }, /*#__PURE__*/React.createElement("td", {
          className: "p-2 text-right border-l border-slate-200 ".concat(sc.lightBg, " ").concat(isSub ? sc.text.replace('600', '600 text-xs opacity-80') : sc.text.replace('600', '700'))
        }, formatNum(v[sc.key.replace('Le', 'le')])), /*#__PURE__*/React.createElement("td", {
          className: "p-2 text-right text-xs ".concat(isSub ? 'font-medium' : 'font-bold', " ").concat(sc.lightBg, " ").concat(colorPct(v[sc.key.replace('Le', 'le')], v.b26))
        }, renderVarPct(v[sc.key.replace('Le', 'le')], v.b26)), /*#__PURE__*/React.createElement("td", {
          className: "p-2 text-right text-xs ".concat(isSub ? 'font-medium' : 'font-bold', " ").concat(sc.lightBg, " ").concat(colorPct(v[sc.key.replace('Le', 'le')], v.a25))
        }, renderVarPct(v[sc.key.replace('Le', 'le')], v.a25)));
      }));
    };
    var totalsObj = {
      a25: totA25,
      b26: totB26,
      a26: totA26,
      leCust: totLeCust,
      leRc: totLeRc,
      leBase: totLeBase,
      leCustom: totLeCustom
    };
    return /*#__PURE__*/React.createElement("div", {
      className: "p-6 h-full flex flex-col"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-xl border shadow-sm flex-1 flex flex-col overflow-hidden"
    }, /*#__PURE__*/React.createElement("div", {
      className: "p-4 border-b flex justify-between items-center bg-slate-50"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "font-bold text-slate-800"
    }, "Deep-Dive Variance Matrix (All Scenarios vs Budget & PY)"), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-4"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return exportCSV([].concat(_toConsumableArray(getFiltered(actuals).filter(function (d) {
          return d.month <= ytdLimit;
        })), _toConsumableArray(getFiltered(budget).filter(function (d) {
          return d.month <= ytdLimit;
        }))), "Variance_Base_Level_Data.csv");
      },
      className: "text-sm font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-100 shadow-sm transition"
    }, /*#__PURE__*/React.createElement(Icons.Download, null), " Base Data"), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-1 bg-white border border-slate-300 rounded-lg px-3 shadow-sm text-sm h-9"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-slate-500 font-bold px-1"
    }, "View:"), /*#__PURE__*/React.createElement("select", {
      value: varianceDim,
      onChange: function onChange(e) {
        var val = e.target.value;
        setVarianceDim(val);
        setExpandedRow(null);
        if (drillDownDim === val) setDrillDownDim('none');
      },
      className: "bg-transparent font-bold text-blue-700 outline-none pr-1"
    }, /*#__PURE__*/React.createElement("option", {
      value: "rc"
    }, "Rate Category"), /*#__PURE__*/React.createElement("option", {
      value: "parish"
    }, "Parish"), /*#__PURE__*/React.createElement("option", {
      value: "industry"
    }, "Industry"), /*#__PURE__*/React.createElement("option", {
      value: "name"
    }, "Customer")), /*#__PURE__*/React.createElement("span", {
      className: "text-slate-300 mx-1"
    }, "|"), /*#__PURE__*/React.createElement("span", {
      className: "text-slate-500 font-bold px-1"
    }, "Drill:"), /*#__PURE__*/React.createElement("select", {
      value: drillDownDim,
      onChange: function onChange(e) {
        setDrillDownDim(e.target.value);
        setExpandedRow(null);
      },
      className: "bg-transparent font-bold text-purple-700 outline-none pr-1"
    }, /*#__PURE__*/React.createElement("option", {
      value: "none"
    }, "None"), varianceDim !== 'rc' && /*#__PURE__*/React.createElement("option", {
      value: "rc"
    }, "Rate Category"), varianceDim !== 'parish' && /*#__PURE__*/React.createElement("option", {
      value: "parish"
    }, "Parish"), varianceDim !== 'industry' && /*#__PURE__*/React.createElement("option", {
      value: "industry"
    }, "Industry"), varianceDim !== 'name' && /*#__PURE__*/React.createElement("option", {
      value: "name"
    }, "Customer"))))), /*#__PURE__*/React.createElement("div", {
      className: "flex-1 overflow-auto custom-scroll relative"
    }, /*#__PURE__*/React.createElement("table", {
      className: "w-full text-sm text-left whitespace-nowrap"
    }, /*#__PURE__*/React.createElement("thead", {
      className: "table-pin-header"
    }, /*#__PURE__*/React.createElement("tr", {
      className: "bg-slate-100"
    }, /*#__PURE__*/React.createElement(SortHeader, {
      label: varianceDim.toUpperCase(),
      columnKey: "dim",
      currentSort: varSort,
      requestSort: function requestSort(k) {
        return handleSortRequest(k, varSort, setVarSort);
      },
      className: "border-r table-pin-col bg-slate-100 z-30"
    }), /*#__PURE__*/React.createElement(SortHeader, {
      label: String(priorYear) + " Act",
      columnKey: "a25",
      currentSort: varSort,
      requestSort: function requestSort(k) {
        return handleSortRequest(k, varSort, setVarSort);
      },
      className: "text-right"
    }), /*#__PURE__*/React.createElement(SortHeader, {
      label: String(budgetYear) + " Bud",
      columnKey: "b26",
      currentSort: varSort,
      requestSort: function requestSort(k) {
        return handleSortRequest(k, varSort, setVarSort);
      },
      className: "text-right"
    }), /*#__PURE__*/React.createElement(SortHeader, {
      label: "2026 Act",
      columnKey: "a26",
      currentSort: varSort,
      requestSort: function requestSort(k) {
        return handleSortRequest(k, varSort, setVarSort);
      },
      className: "text-right border-l border-slate-300"
    }), /*#__PURE__*/React.createElement("th", {
      className: "p-2 text-right text-xs text-slate-500"
    }, "vs Bud"), /*#__PURE__*/React.createElement("th", {
      className: "p-2 text-right text-xs text-slate-500"
    }, "vs PY"), varScenarios.map(function (sc) {
      return /*#__PURE__*/React.createElement(React.Fragment, {
        key: sc.key
      }, /*#__PURE__*/React.createElement(SortHeader, {
        label: sc.label,
        columnKey: sc.key.replace('Le', 'le'),
        currentSort: varSort,
        requestSort: function requestSort(k) {
          return handleSortRequest(k, varSort, setVarSort);
        },
        className: "text-right border-l border-slate-300 ".concat(sc.headText, " ").concat(sc.headBg)
      }), /*#__PURE__*/React.createElement("th", {
        className: "p-2 text-right text-xs ".concat(sc.text.replace('600', '500'), " ").concat(sc.headBg)
      }, "vs Bud"), /*#__PURE__*/React.createElement("th", {
        className: "p-2 text-right text-xs ".concat(sc.text.replace('600', '500'), " ").concat(sc.headBg)
      }, "vs PY"));
    }))), /*#__PURE__*/React.createElement("tbody", null, sortedMatrix.map(function (v) {
      var dim = v.dim;
      var isExpanded = expandedRow === dim;
      var hasSub = drillDownDim !== 'none' && Object.keys(v.sub).length > 0;
      var subItems = Object.values(v.sub).sort(function (a, b) {
        return b.a26 - a.a26;
      }).slice(0, 100);
      return /*#__PURE__*/React.createElement(React.Fragment, {
        key: dim
      }, /*#__PURE__*/React.createElement("tr", {
        className: "border-b hover:bg-slate-50 transition ".concat(hasSub ? 'cursor-pointer' : ''),
        onClick: function onClick() {
          return hasSub && setExpandedRow(isExpanded ? null : dim);
        }
      }, /*#__PURE__*/React.createElement("td", {
        className: "p-2 font-bold border-r table-pin-col bg-white whitespace-nowrap z-20"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center gap-2 max-w-[200px]"
      }, drillDownDim !== 'none' ? /*#__PURE__*/React.createElement("span", {
        className: "w-4 text-center text-[10px] text-slate-400 hover:text-blue-600 transition flex-shrink-0"
      }, isExpanded ? '▼' : '▶') : /*#__PURE__*/React.createElement("span", {
        className: "w-4"
      }), /*#__PURE__*/React.createElement("span", {
        className: "truncate",
        title: dim
      }, dim))), renderVarRowCells(v, false)), isExpanded && subItems.map(function (sv) {
        return /*#__PURE__*/React.createElement("tr", {
          key: "".concat(dim, "-").concat(sv.dim),
          className: "border-b bg-slate-50/80 hover:bg-slate-100 text-xs transition"
        }, /*#__PURE__*/React.createElement("td", {
          className: "p-2 font-medium border-r table-pin-col bg-slate-50/95 whitespace-nowrap text-slate-600 z-10"
        }, /*#__PURE__*/React.createElement("div", {
          className: "flex items-center gap-2 pl-5 max-w-[200px]"
        }, /*#__PURE__*/React.createElement("span", {
          className: "w-2 h-2 border-l-2 border-b-2 border-slate-300 inline-block mb-1 opacity-60 flex-shrink-0"
        }), /*#__PURE__*/React.createElement("span", {
          className: "truncate",
          title: sv.dim
        }, sv.dim))), renderVarRowCells(sv, true));
      }));
    })), /*#__PURE__*/React.createElement("tfoot", {
      className: "bg-slate-200 font-black border-t-2 border-slate-300 sticky bottom-0 z-30"
    }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
      className: "p-2 border-r table-pin-col bg-slate-200 z-40 pl-8 uppercase tracking-wider text-slate-700"
    }, "TOTAL YTD/FY"), renderVarRowCells(totalsObj, false)))))));
  };
  var renderGenericForecastTab = function renderGenericForecastTab(leDataset, title, description, iconNode, colorClass) {
    var activeMode = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : '';
    var customControls = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : null;
    if (!isBudgetCommitted) return renderEmptyBudgetWarning();
    var fAct = getFiltered(actuals);
    var fBud = getFiltered(budget);
    var fLE = getFiltered(leDataset);
    // Current month summary vars
    var _maxM = Math.max.apply(null, [0].concat(actuals.filter(function(a){return a.year===budgetYear;}).map(function(a){return a.month;})));
    var _cmAct = fAct.filter(function(d){return d.year===budgetYear&&d.month===_maxM;}).reduce(function(s,d){return s+d.kwh;},0);
    var _cmPY  = fAct.filter(function(d){return d.year===priorYear&&d.month===_maxM;}).reduce(function(s,d){return s+d.kwh;},0);
    var _cmBud = fBud.filter(function(d){return d.year===budgetYear&&d.month===_maxM;}).reduce(function(s,d){return s+d.kwh;},0);
    var _cmLE  = fLE.filter(function(d){return d.year===budgetYear&&d.month===_maxM;}).reduce(function(s,d){return s+d.kwh;},0);
    var _cmName = _maxM > 0 ? monthNames[_maxM-1] : '';
    var fLeCust = getFiltered(leCustGrowth);
    var fLeRC = getFiltered(leRCGrowth);
    var fLeBase = getFiltered(leBaseGrowth);
    var fLeCustom = getFiltered(leCustomGrowth);
    var totA25 = fAct.filter(function (d) {
      return d.year === priorYear;
    }).reduce(function (s, d) {
      return s + d.kwh;
    }, 0);
    var totB26 = fBud.filter(function (d) {
      return d.year === budgetYear;
    }).reduce(function (s, d) {
      return s + d.kwh;
    }, 0);
    var totLE = fLE.reduce(function (s, d) {
      return s + d.kwh;
    }, 0);
    var validRcs = dimensions.rcs.filter(function (rc) {
      return fAct.some(function (d) {
        return d.rc === rc;
      }) || fBud.some(function (d) {
        return d.rc === rc;
      }) || fLE.some(function (d) {
        return d.rc === rc;
      });
    });
    var mappedRcs = validRcs.map(function (rc) {
      var a25 = fAct.filter(function (d) {
        return d.rc === rc && d.year === priorYear;
      }).reduce(function (s, d) {
        return s + d.kwh;
      }, 0);
      var b26 = fBud.filter(function (d) {
        return d.rc === rc && d.year === budgetYear;
      }).reduce(function (s, d) {
        return s + d.kwh;
      }, 0);
      var le26 = fLE.filter(function (d) {
        return d.rc === rc;
      }).reduce(function (s, d) {
        return s + d.kwh;
      }, 0);
      var lCust26 = fLeCust.filter(function (d) {
        return d.rc === rc;
      }).reduce(function (s, d) {
        return s + d.kwh;
      }, 0);
      var lRc26 = fLeRC.filter(function (d) {
        return d.rc === rc;
      }).reduce(function (s, d) {
        return s + d.kwh;
      }, 0);
      var lBase26 = fLeBase.filter(function (d) {
        return d.rc === rc;
      }).reduce(function (s, d) {
        return s + d.kwh;
      }, 0);
      var lCustom26 = fLeCustom.filter(function (d) {
        return d.rc === rc;
      }).reduce(function (s, d) {
        return s + d.kwh;
      }, 0);
      var vsBud = b26 ? (le26 - b26) / b26 : 0;
      var vsPY = a25 ? (le26 - a25) / a25 : 0;
      return {
        rc: rc,
        a25: a25,
        b26: b26,
        le26: le26,
        lCust26: lCust26,
        lRc26: lRc26,
        lBase26: lBase26,
        lCustom26: lCustom26,
        vsBud: vsBud,
        vsPY: vsPY
      };
    });
    var sortedRcs = sortArray(mappedRcs, forecastSort);
    return /*#__PURE__*/React.createElement("div", {
      className: "p-6 h-full overflow-y-auto custom-scroll space-y-3"
    }, customControls, /*#__PURE__*/React.createElement("div", {
      className: "flex justify-end gap-3"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return exportCSV(fLE, "".concat(title.replace(/[^a-z0-9]/gi, '_').toLowerCase(), "_base_level.csv"));
      },
      className: "bg-white border hover:bg-slate-50 text-slate-700 px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 shadow-sm transition"
    }, /*#__PURE__*/React.createElement(Icons.Download, null), " Download Base Level Data")), /*#__PURE__*/React.createElement("div", {
      className: "bg-white p-8 rounded-xl border shadow-sm flex items-center justify-between"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
      className: "text-base font-bold text-slate-800 flex items-center gap-2"
    }, iconNode, " ", title), /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-slate-500 mt-1"
    }, description)), /*#__PURE__*/React.createElement("div", {
      className: "text-right"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-[10px] text-slate-400 font-bold uppercase"
    }, "FY 2026 Forecasted Gap to Budget"), /*#__PURE__*/React.createElement("div", {
      className: "text-xl font-black ".concat(totLE - totB26 >= 0 ? 'text-emerald-600' : 'text-red-500')
    }, formatNum(totLE - totB26)))), /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-xl border shadow-sm overflow-x-auto"
    }, /*#__PURE__*/React.createElement("div", {
      className: "p-4 bg-slate-50 border-b font-bold flex items-center gap-2"
    }, /*#__PURE__*/React.createElement(Icons.Zap, null), " Forecast vs Targets by Rate Class"), /*#__PURE__*/React.createElement("table", {
      className: "w-full text-sm text-left whitespace-nowrap"
    }, /*#__PURE__*/React.createElement("thead", {
      className: "bg-slate-100 text-slate-600 font-bold"
    }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement(SortHeader, {
      label: "Rate Category",
      columnKey: "rc",
      currentSort: forecastSort,
      requestSort: function requestSort(k) {
        return handleSortRequest(k, forecastSort, setForecastSort);
      }
    }), /*#__PURE__*/React.createElement(SortHeader, {
      label: String(priorYear) + " Act",
      columnKey: "a25",
      currentSort: forecastSort,
      requestSort: function requestSort(k) {
        return handleSortRequest(k, forecastSort, setForecastSort);
      },
      className: "text-right"
    }), /*#__PURE__*/React.createElement(SortHeader, {
      label: String(budgetYear) + " Bud",
      columnKey: "b26",
      currentSort: forecastSort,
      requestSort: function requestSort(k) {
        return handleSortRequest(k, forecastSort, setForecastSort);
      },
      className: "text-right"
    }), /*#__PURE__*/React.createElement(SortHeader, {
      label: "LE Cust Vol",
      columnKey: "lCust26",
      currentSort: forecastSort,
      requestSort: function requestSort(k) {
        return handleSortRequest(k, forecastSort, setForecastSort);
      },
      className: "text-right ".concat(activeMode === 'leCust' ? 'bg-purple-100 text-purple-800' : 'text-purple-600/70')
    }), /*#__PURE__*/React.createElement(SortHeader, {
      label: "LE RC Vol",
      columnKey: "lRc26",
      currentSort: forecastSort,
      requestSort: function requestSort(k) {
        return handleSortRequest(k, forecastSort, setForecastSort);
      },
      className: "text-right ".concat(activeMode === 'leRC' ? 'bg-blue-100 text-blue-800' : 'text-blue-600/70')
    }), /*#__PURE__*/React.createElement(SortHeader, {
      label: "LE Base",
      columnKey: "lBase26",
      currentSort: forecastSort,
      requestSort: function requestSort(k) {
        return handleSortRequest(k, forecastSort, setForecastSort);
      },
      className: "text-right ".concat(activeMode === 'leBase' ? 'bg-orange-100 text-orange-800' : 'text-orange-600/70')
    }), /*#__PURE__*/React.createElement(SortHeader, {
      label: "LE Advanced",
      columnKey: "lCustom26",
      currentSort: forecastSort,
      requestSort: function requestSort(k) {
        return handleSortRequest(k, forecastSort, setForecastSort);
      },
      className: "text-right ".concat(activeMode === 'leCustom' ? 'bg-indigo-100 text-indigo-800' : 'text-indigo-600/70')
    }), /*#__PURE__*/React.createElement(SortHeader, {
      label: "Active LE vs Bud %",
      columnKey: "vsBud",
      currentSort: forecastSort,
      requestSort: function requestSort(k) {
        return handleSortRequest(k, forecastSort, setForecastSort);
      },
      className: "text-right border-l border-slate-200"
    }), /*#__PURE__*/React.createElement(SortHeader, {
      label: "Active LE vs PY %",
      columnKey: "vsPY",
      currentSort: forecastSort,
      requestSort: function requestSort(k) {
        return handleSortRequest(k, forecastSort, setForecastSort);
      },
      className: "text-right"
    }))), /*#__PURE__*/React.createElement("tbody", null, sortedRcs.map(function (r) {
      return /*#__PURE__*/React.createElement("tr", {
        key: r.rc,
        className: "border-b hover:bg-slate-50"
      }, /*#__PURE__*/React.createElement("td", {
        className: "p-3 font-bold"
      }, r.rc), /*#__PURE__*/React.createElement("td", {
        className: "p-3 text-right text-slate-400"
      }, formatNum(r.a25)), /*#__PURE__*/React.createElement("td", {
        className: "p-3 text-right text-blue-600"
      }, formatNum(r.b26)), /*#__PURE__*/React.createElement("td", {
        className: "p-3 text-right ".concat(activeMode === 'leCust' ? 'font-black text-purple-600 bg-purple-50/50' : 'text-purple-500')
      }, formatNum(r.lCust26)), /*#__PURE__*/React.createElement("td", {
        className: "p-3 text-right ".concat(activeMode === 'leRC' ? 'font-black text-blue-600 bg-blue-50/50' : 'text-blue-500')
      }, formatNum(r.lRc26)), /*#__PURE__*/React.createElement("td", {
        className: "p-3 text-right ".concat(activeMode === 'leBase' ? 'font-black text-orange-600 bg-orange-50/50' : 'text-orange-500')
      }, formatNum(r.lBase26)), /*#__PURE__*/React.createElement("td", {
        className: "p-3 text-right ".concat(activeMode === 'leCustom' ? 'font-black text-indigo-600 bg-indigo-50/50' : 'text-indigo-500')
      }, formatNum(r.lCustom26)), /*#__PURE__*/React.createElement("td", {
        className: "p-3 text-right font-bold border-l border-slate-100 ".concat(r.vsBud >= 0 ? 'text-emerald-600' : 'text-red-500')
      }, formatPct(r.vsBud)), /*#__PURE__*/React.createElement("td", {
        className: "p-3 text-right font-bold ".concat(r.vsPY >= 0 ? 'text-blue-600' : 'text-red-500')
      }, formatPct(r.vsPY)));
    }), sortedRcs.length === 0 && /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
      colSpan: "9",
      className: "p-4 text-center text-slate-400"
    }, "No data found for this selection."))), /*#__PURE__*/React.createElement("tfoot", {
      className: "bg-slate-100 font-black text-slate-800 border-t-2 border-slate-300"
    }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
      className: "p-3"
    }, "TOTAL"), /*#__PURE__*/React.createElement("td", {
      className: "p-3 text-right text-slate-500"
    }, formatNum(totA25)), /*#__PURE__*/React.createElement("td", {
      className: "p-3 text-right text-blue-700"
    }, formatNum(totB26)), /*#__PURE__*/React.createElement("td", {
      className: "p-3 text-right ".concat(activeMode === 'leCust' ? 'text-purple-800 bg-purple-100' : 'text-purple-700')
    }, formatNum(monthlyAggregatesRaw.reduce(function (s, d) {
      return s + d.LeCust;
    }, 0))), /*#__PURE__*/React.createElement("td", {
      className: "p-3 text-right ".concat(activeMode === 'leRC' ? 'text-blue-800 bg-blue-100' : 'text-blue-700')
    }, formatNum(monthlyAggregatesRaw.reduce(function (s, d) {
      return s + d.LeRC;
    }, 0))), /*#__PURE__*/React.createElement("td", {
      className: "p-3 text-right ".concat(activeMode === 'leBase' ? 'text-orange-800 bg-orange-100' : 'text-orange-700')
    }, formatNum(monthlyAggregatesRaw.reduce(function (s, d) {
      return s + d.LeBase;
    }, 0))), /*#__PURE__*/React.createElement("td", {
      className: "p-3 text-right ".concat(activeMode === 'leCustom' ? 'text-indigo-800 bg-indigo-100' : 'text-indigo-700')
    }, formatNum(monthlyAggregatesRaw.reduce(function (s, d) {
      return s + d.LeCustom;
    }, 0))), /*#__PURE__*/React.createElement("td", {
      className: "p-3 text-right border-l border-slate-200 ".concat(totB26 ? (totLE - totB26) / totB26 >= 0 ? 'text-emerald-600' : 'text-red-500' : '')
    }, formatPct(totB26 ? (totLE - totB26) / totB26 : 0)), /*#__PURE__*/React.createElement("td", {
      className: "p-3 text-right ".concat(totA25 ? (totLE - totA25) / totA25 >= 0 ? 'text-blue-600' : 'text-red-500' : '')
    }, formatPct(totA25 ? (totLE - totA25) / totA25 : 0)))))));
  };
  var renderLeCustTab = function renderLeCustTab() {
    return renderGenericForecastTab(leCustGrowth, 'LE: Customer Volumetric Trend', "Projects Apr-Dec using Granular Budget adjusted by each Customer's average monthly kWh movement (Q1 26 vs Q1 25).", /*#__PURE__*/React.createElement(Icons.Users, null), 'purple', 'leCust');
  };
  var renderLeRCTab = function renderLeRCTab() {
    return renderGenericForecastTab(leRCGrowth, 'LE: Rate Class Volumetric Trend', 'Projects Apr-Dec using Granular Budget adjusted by the Rate Class average monthly kWh movement (Q1 26 vs Q1 25).', /*#__PURE__*/React.createElement(Icons.Zap, null), 'blue', 'leRC');
  };
  var renderLeBaseTab = function renderLeBaseTab() {
    return renderGenericForecastTab(leBaseGrowth, 'LE: Base Trend', 'Blended Projection: Uses Customer Volumetric Trend for RT10, RT20, and RT60. Uses Rate Class Volumetric Trend for all other classes.', /*#__PURE__*/React.createElement(Icons.Briefcase, null), 'orange', 'leBase');
  };
  var renderLeCustomTab = function renderLeCustomTab() {
    return renderGenericForecastTab(leCustomGrowth, 'LE: Advanced Scenario Builder', 'Projection based on multi-dimensional growth adjustments applied to the base budget.', /*#__PURE__*/React.createElement(Icons.Sliders, null), 'indigo', 'leCustom', renderAdvOverridesUI());
  };

  // ============================================================
  // TAB: CUSTOMER ENRICHMENT
  // ============================================================
  var renderCustomerTab = function renderCustomerTab() {
    var noHistoryRows = allocationResults.filter(function (r) {
      return r.name === 'NO HISTORY' || r.acct === 'UNALLOCATED';
    });
    var uniqueProblems = [];
    var seen = new Set();
    noHistoryRows.forEach(function (r) {
      var key = "".concat(r.rc, "|").concat(r.parish);
      if (!seen.has(key)) {
        seen.add(key);
        uniqueProblems.push({
          rc: r.rc,
          parish: r.parish,
          amount: 0
        });
      }
      uniqueProblems.find(function (u) {
        return u.rc === r.rc && u.parish === r.parish;
      }) && (uniqueProblems.find(function (u) {
        return u.rc === r.rc && u.parish === r.parish;
      }).amount += r.finalA);
    });
    var handleSaveEnrichment = function handleSaveEnrichment(acct, field, value) {
      var updated = _objectSpread(_objectSpread({}, customerEnrichment), {}, _defineProperty({}, acct, _objectSpread(_objectSpread({}, customerEnrichment[acct] || {}), {}, _defineProperty({}, field, value))));
      setCustomerEnrichment(updated);
      if (supabaseConfig.url && supabaseConfig.key) {
        pushScenariosToCloud(savedVersions, varianceComments, overviewComments, accountNameMap, updated);
      }
    };
    var handleAddAccount = function handleAddAccount() {
      if (!newAcct.acct || !newAcct.name) return;
      var updated = _objectSpread(_objectSpread({}, customerEnrichment), {}, _defineProperty({}, newAcct.acct, {
        name: newAcct.name,
        rc: newAcct.rc,
        parish: newAcct.parish,
        industry: newAcct.industry,
        kvaDemand: newAcct.kvaDemand,
        notes: newAcct.notes
      }));
      setCustomerEnrichment(updated);
      if (supabaseConfig.url && supabaseConfig.key) pushScenariosToCloud(savedVersions, varianceComments, overviewComments, accountNameMap, updated);
      setNewAcct({
        acct: '',
        name: '',
        rc: 'RT40',
        parish: '',
        industry: '',
        kvaDemand: '',
        notes: ''
      });
    };
    return /*#__PURE__*/React.createElement("div", {
      className: "p-6 h-full overflow-y-auto custom-scroll space-y-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-xl border p-5 shadow-sm"
    }, /*#__PURE__*/React.createElement("h2", {
      className: "text-base font-bold text-slate-800 flex items-center gap-2"
    }, /*#__PURE__*/React.createElement(Icons.Users, null), " Customer Data Enrichment"), /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-slate-500 mt-1"
    }, "Manually fill in missing customer data for NO HISTORY and UNALLOCATED accounts so they can be properly included in forecasts and revenue calculations.")), uniqueProblems.length > 0 && /*#__PURE__*/React.createElement("div", {
      className: "bg-amber-50 border border-amber-200 rounded-xl p-5"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "font-bold text-amber-800 mb-3 flex items-center gap-2"
    }, /*#__PURE__*/React.createElement(Icons.Activity, null), " Unresolved Budget Groups (", uniqueProblems.length, ")"), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-amber-700 mb-3"
    }, "These RC + Parish combinations have budget but no matching actuals history. Adding customer accounts below will resolve them."), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-2 md:grid-cols-4 gap-3"
    }, uniqueProblems.map(function (p, i) {
      return /*#__PURE__*/React.createElement("div", {
        key: i,
        className: "bg-white rounded-lg p-3 border border-amber-200 text-center"
      }, /*#__PURE__*/React.createElement("div", {
        className: "font-black text-amber-700"
      }, p.rc), /*#__PURE__*/React.createElement("div", {
        className: "text-xs text-slate-600"
      }, p.parish), /*#__PURE__*/React.createElement("div", {
        className: "text-xs font-bold text-slate-500 mt-1"
      }, formatNum(p.amount), " kWh budget"));
    }))), /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-xl border shadow-sm p-5"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "font-bold text-slate-800 mb-4 flex items-center gap-2"
    }, /*#__PURE__*/React.createElement(Icons.CheckCircle, null), " Add / Fix Customer Account"), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-2 md:grid-cols-4 gap-3 mb-4"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "text-[10px] font-bold uppercase text-slate-500 block mb-1"
    }, "JPS A/C #"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: newAcct.acct,
      onChange: function onChange(e) {
        return setNewAcct(function (p) {
          return _objectSpread(_objectSpread({}, p), {}, {
            acct: e.target.value
          });
        });
      },
      placeholder: "e.g. 1234567",
      className: "w-full border rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-400"
    })), /*#__PURE__*/React.createElement("div", {
      className: "md:col-span-1"
    }, /*#__PURE__*/React.createElement("label", {
      className: "text-[10px] font-bold uppercase text-slate-500 block mb-1"
    }, "Customer Name"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: newAcct.name,
      onChange: function onChange(e) {
        return setNewAcct(function (p) {
          return _objectSpread(_objectSpread({}, p), {}, {
            name: e.target.value
          });
        });
      },
      placeholder: "Full name",
      className: "w-full border rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-400"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "text-[10px] font-bold uppercase text-slate-500 block mb-1"
    }, "Rate Class"), /*#__PURE__*/React.createElement("select", {
      value: newAcct.rc,
      onChange: function onChange(e) {
        return setNewAcct(function (p) {
          return _objectSpread(_objectSpread({}, p), {}, {
            rc: e.target.value
          });
        });
      },
      className: "w-full border rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-400 bg-white"
    }, ['BU', 'EV', 'RT10', 'RT20', 'RT40', 'RT50', 'RT60', 'RT70'].map(function (r) {
      return /*#__PURE__*/React.createElement("option", {
        key: r
      }, r);
    }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "text-[10px] font-bold uppercase text-slate-500 block mb-1"
    }, "Parish"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: newAcct.parish,
      onChange: function onChange(e) {
        return setNewAcct(function (p) {
          return _objectSpread(_objectSpread({}, p), {}, {
            parish: e.target.value
          });
        });
      },
      placeholder: "e.g. Kingston",
      className: "w-full border rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-400"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "text-[10px] font-bold uppercase text-slate-500 block mb-1"
    }, "Industry"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: newAcct.industry,
      onChange: function onChange(e) {
        return setNewAcct(function (p) {
          return _objectSpread(_objectSpread({}, p), {}, {
            industry: e.target.value
          });
        });
      },
      placeholder: "e.g. Manufacturing",
      className: "w-full border rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-400"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "text-[10px] font-bold uppercase text-slate-500 block mb-1"
    }, "KVA Demand"), /*#__PURE__*/React.createElement("input", {
      type: "number",
      value: newAcct.kvaDemand,
      onChange: function onChange(e) {
        return setNewAcct(function (p) {
          return _objectSpread(_objectSpread({}, p), {}, {
            kvaDemand: e.target.value
          });
        });
      },
      placeholder: "KVA",
      className: "w-full border rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-400"
    })), /*#__PURE__*/React.createElement("div", {
      className: "md:col-span-2"
    }, /*#__PURE__*/React.createElement("label", {
      className: "text-[10px] font-bold uppercase text-slate-500 block mb-1"
    }, "Notes"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: newAcct.notes,
      onChange: function onChange(e) {
        return setNewAcct(function (p) {
          return _objectSpread(_objectSpread({}, p), {}, {
            notes: e.target.value
          });
        });
      },
      placeholder: "Any notes about this account",
      className: "w-full border rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-400"
    }))), /*#__PURE__*/React.createElement("button", {
      onClick: handleAddAccount,
      disabled: !newAcct.acct || !newAcct.name,
      className: "bg-blue-600 hover:bg-blue-700 disabled:opacity-40 text-white px-6 py-2 rounded-lg font-bold text-sm transition shadow"
    }, "Save Account")), Object.keys(customerEnrichment).length > 0 && /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-xl border shadow-sm overflow-hidden"
    }, /*#__PURE__*/React.createElement("div", {
      className: "p-4 bg-slate-50 border-b font-bold text-slate-800 flex justify-between items-center"
    }, /*#__PURE__*/React.createElement("span", null, "Enriched Accounts (", Object.keys(customerEnrichment).length, ")"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        if (supabaseConfig.url && supabaseConfig.key) pushScenariosToCloud(savedVersions, varianceComments, overviewComments, accountNameMap, customerEnrichment);
      },
      className: "text-xs bg-blue-50 text-blue-700 px-3 py-1.5 rounded-lg border border-blue-200 font-bold flex items-center gap-1 hover:bg-blue-100 transition"
    }, /*#__PURE__*/React.createElement(Icons.CloudUp, null), " Sync to Cloud")), /*#__PURE__*/React.createElement("div", {
      className: "overflow-x-auto"
    }, /*#__PURE__*/React.createElement("table", {
      className: "w-full text-sm"
    }, /*#__PURE__*/React.createElement("thead", {
      className: "bg-slate-100"
    }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
      className: "p-3 text-left font-bold text-slate-600"
    }, "A/C #"), /*#__PURE__*/React.createElement("th", {
      className: "p-3 text-left font-bold text-slate-600"
    }, "Name"), /*#__PURE__*/React.createElement("th", {
      className: "p-3 text-left font-bold text-slate-600"
    }, "RC"), /*#__PURE__*/React.createElement("th", {
      className: "p-3 text-left font-bold text-slate-600"
    }, "Parish"), /*#__PURE__*/React.createElement("th", {
      className: "p-3 text-left font-bold text-slate-600"
    }, "Industry"), /*#__PURE__*/React.createElement("th", {
      className: "p-3 text-right font-bold text-slate-600"
    }, "KVA"), /*#__PURE__*/React.createElement("th", {
      className: "p-3 text-left font-bold text-slate-600"
    }, "Notes"), /*#__PURE__*/React.createElement("th", {
      className: "p-3 w-10"
    }))), /*#__PURE__*/React.createElement("tbody", null, Object.entries(customerEnrichment).map(function (_ref40) {
      var _ref41 = _slicedToArray(_ref40, 2),
        acct = _ref41[0],
        info = _ref41[1];
      return /*#__PURE__*/React.createElement("tr", {
        key: acct,
        className: "border-b hover:bg-slate-50"
      }, /*#__PURE__*/React.createElement("td", {
        className: "p-3 font-mono text-xs text-slate-600"
      }, acct), /*#__PURE__*/React.createElement("td", {
        className: "p-3 font-bold"
      }, info.name), /*#__PURE__*/React.createElement("td", {
        className: "p-3"
      }, /*#__PURE__*/React.createElement("span", {
        className: "bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs font-bold"
      }, info.rc)), /*#__PURE__*/React.createElement("td", {
        className: "p-3 text-slate-600"
      }, info.parish), /*#__PURE__*/React.createElement("td", {
        className: "p-3 text-slate-600"
      }, info.industry), /*#__PURE__*/React.createElement("td", {
        className: "p-3 text-right text-slate-600"
      }, info.kvaDemand || '—'), /*#__PURE__*/React.createElement("td", {
        className: "p-3 text-xs text-slate-400 max-w-[200px] truncate"
      }, info.notes), /*#__PURE__*/React.createElement("td", {
        className: "p-3 text-center"
      }, /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          var updated = _objectSpread({}, customerEnrichment);
          delete updated[acct];
          setCustomerEnrichment(updated);
        },
        className: "text-slate-300 hover:text-red-500"
      }, /*#__PURE__*/React.createElement(Icons.Trash, null))));
    }))))), /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-xl border shadow-sm p-5"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "font-bold text-slate-800 mb-1 flex items-center gap-2"
    }, /*#__PURE__*/React.createElement(Icons.Calculator, null), " Tariff Rates & FX (used for Revenue calculations)"), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-slate-500 mb-4"
    }, "2024 OUR-approved non-fuel rates in J$. Revenue = kWh \xD7 Energy Rate \xF7 FX Rate"), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-4 mb-4"
    }, /*#__PURE__*/React.createElement("label", {
      className: "text-xs font-bold text-slate-600"
    }, "FX Rate (J$/US$):"), /*#__PURE__*/React.createElement("input", {
      type: "number",
      value: fxRate,
      onChange: function onChange(e) {
        return setFxRate(parseFloat(e.target.value) || 162);
      },
      className: "w-24 border rounded-lg px-3 py-1.5 text-sm outline-none focus:border-blue-400 text-center font-bold"
    }), /*#__PURE__*/React.createElement("span", {
      className: "text-xs text-slate-400"
    }, "Default: 162 J$/US$")), /*#__PURE__*/React.createElement("div", {
      className: "overflow-x-auto"
    }, /*#__PURE__*/React.createElement("table", {
      className: "w-full text-sm"
    }, /*#__PURE__*/React.createElement("thead", {
      className: "bg-slate-100"
    }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
      className: "p-2 text-left font-bold text-slate-600"
    }, "Rate Class"), /*#__PURE__*/React.createElement("th", {
      className: "p-2 text-right font-bold text-slate-600"
    }, "Energy Rate (J$/kWh)"), /*#__PURE__*/React.createElement("th", {
      className: "p-2 text-right font-bold text-slate-600"
    }, "Cust Charge (J$/mo)"), /*#__PURE__*/React.createElement("th", {
      className: "p-2 text-right font-bold text-slate-600"
    }, "Demand (J$/KVA)"), /*#__PURE__*/React.createElement("th", {
      className: "p-2 text-right font-bold text-slate-600"
    }, "Implied US\xA2/kWh"))), /*#__PURE__*/React.createElement("tbody", null, Object.entries(tariffRates).map(function (_ref42) {
      var _ref43 = _slicedToArray(_ref42, 2),
        rc = _ref43[0],
        rates = _ref43[1];
      return /*#__PURE__*/React.createElement("tr", {
        key: rc,
        className: "border-b hover:bg-slate-50"
      }, /*#__PURE__*/React.createElement("td", {
        className: "p-2 font-bold text-blue-700"
      }, rc), /*#__PURE__*/React.createElement("td", {
        className: "p-2 text-right"
      }, /*#__PURE__*/React.createElement("input", {
        type: "number",
        value: rates.energy,
        step: "0.01",
        onChange: function onChange(e) {
          return setTariffRates(function (p) {
            return _objectSpread(_objectSpread({}, p), {}, _defineProperty({}, rc, _objectSpread(_objectSpread({}, p[rc]), {}, {
              energy: parseFloat(e.target.value) || 0
            })));
          });
        },
        className: "w-20 border rounded px-2 py-1 text-right text-sm outline-none focus:border-blue-400"
      })), /*#__PURE__*/React.createElement("td", {
        className: "p-2 text-right"
      }, /*#__PURE__*/React.createElement("input", {
        type: "number",
        value: rates.custChg,
        step: "0.01",
        onChange: function onChange(e) {
          return setTariffRates(function (p) {
            return _objectSpread(_objectSpread({}, p), {}, _defineProperty({}, rc, _objectSpread(_objectSpread({}, p[rc]), {}, {
              custChg: parseFloat(e.target.value) || 0
            })));
          });
        },
        className: "w-24 border rounded px-2 py-1 text-right text-sm outline-none focus:border-blue-400"
      })), /*#__PURE__*/React.createElement("td", {
        className: "p-2 text-right"
      }, /*#__PURE__*/React.createElement("input", {
        type: "number",
        value: rates.demand,
        step: "0.01",
        onChange: function onChange(e) {
          return setTariffRates(function (p) {
            return _objectSpread(_objectSpread({}, p), {}, _defineProperty({}, rc, _objectSpread(_objectSpread({}, p[rc]), {}, {
              demand: parseFloat(e.target.value) || 0
            })));
          });
        },
        className: "w-24 border rounded px-2 py-1 text-right text-sm outline-none focus:border-blue-400"
      })), /*#__PURE__*/React.createElement("td", {
        className: "p-2 text-right text-emerald-600 font-bold"
      }, (rates.energy / fxRate * 100).toFixed(2), "\xA2"));
    }))))));
  };

  // ============================================================
  // TAB: SCENARIO COMPARISON
  // ============================================================
  var renderComparisonTab = function renderComparisonTab() {
    if (!isBudgetCommitted) return renderEmptyBudgetWarning();
    var fAct25 = getFiltered(actuals).filter(function (d) {
      return d.year === priorYear;
    });
    var fBud26 = getFiltered(budget).filter(function (d) {
      return d.year === budgetYear;
    });
    var fLeCust = getFiltered(leCustGrowth);
    var fLeRC = getFiltered(leRCGrowth);
    var fLeBase = getFiltered(leBaseGrowth);
    var fLeCustom = getFiltered(leCustomGrowth);
    var tot = function tot(arr) {
      return arr.reduce(function (s, d) {
        return s + d.kwh;
      }, 0);
    };
    var rev = function rev(arr) {
      return arr.reduce(function (s, d) {
        return s + kwhToRevUSD(d.kwh, d.rc);
      }, 0);
    };
    var pct = function pct(a, b) {
      return b ? ((a - b) / b * 100).toFixed(1) + '%' : '—';
    };
    var color = function color(a, b) {
      return a >= b ? 'text-emerald-600' : 'text-red-500';
    };
    var scenarios = [{
      key: 'leCust',
      label: 'LE Cust Vol',
      data: fLeCust,
      bg: 'bg-purple-50',
      border: 'border-purple-200',
      text: 'text-purple-700',
      head: 'bg-purple-600'
    }, {
      key: 'leRC',
      label: 'LE RC Vol',
      data: fLeRC,
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      text: 'text-blue-700',
      head: 'bg-blue-600'
    }, {
      key: 'leBase',
      label: 'LE Base',
      data: fLeBase,
      bg: 'bg-amber-50',
      border: 'border-amber-200',
      text: 'text-amber-700',
      head: 'bg-amber-600'
    }, {
      key: 'leCustom',
      label: 'LE Advanced',
      data: fLeCustom,
      bg: 'bg-indigo-50',
      border: 'border-indigo-200',
      text: 'text-indigo-700',
      head: 'bg-indigo-600'
    }];
    var bKwh = tot(fBud26);
    var bRev = rev(fBud26);
    var pKwh = tot(fAct25);
    var pRev = rev(fAct25);

    // Per RC breakdown
    var rcRows = dimensions.rcs.map(function (rc) {
      var b = fBud26.filter(function (d) {
        return d.rc === rc;
      }).reduce(function (s, d) {
        return s + d.kwh;
      }, 0);
      return {
        rc: rc,
        bud: b,
        budRev: fBud26.filter(function (d) {
          return d.rc === rc;
        }).reduce(function (s, d) {
          return s + kwhToRevUSD(d.kwh, d.rc);
        }, 0),
        scenarios: scenarios.map(function (sc) {
          return {
            kwh: sc.data.filter(function (d) {
              return d.rc === rc;
            }).reduce(function (s, d) {
              return s + d.kwh;
            }, 0),
            rev: sc.data.filter(function (d) {
              return d.rc === rc;
            }).reduce(function (s, d) {
              return s + kwhToRevUSD(d.kwh, d.rc);
            }, 0)
          };
        })
      };
    }).filter(function (r) {
      return r.bud > 0 || r.scenarios.some(function (s) {
        return s.kwh > 0;
      });
    });
    return /*#__PURE__*/React.createElement("div", {
      className: "p-6 h-full overflow-y-auto custom-scroll space-y-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-xl border p-4 shadow-sm"
    }, /*#__PURE__*/React.createElement("h2", {
      className: "text-base font-bold text-slate-800"
    }, "Scenario Comparison"), /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-slate-500"
    }, "All 4 LE scenarios vs Budget and Prior Year \u2014 kWh and Revenue (US$)")), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-2 md:grid-cols-4 gap-4"
    }, scenarios.map(function (sc) {
      var k = tot(sc.data);
      var r = rev(sc.data);
      return /*#__PURE__*/React.createElement("div", {
        key: sc.key,
        className: "rounded-xl border p-4 shadow-sm ".concat(sc.bg, " ").concat(sc.border)
      }, /*#__PURE__*/React.createElement("div", {
        className: "text-xs font-black uppercase tracking-wider mb-2 ".concat(sc.text)
      }, sc.label), /*#__PURE__*/React.createElement("div", {
        className: "text-base font-black text-slate-800"
      }, (k / 1000000).toFixed(1), /*#__PURE__*/React.createElement("span", {
        className: "text-sm font-bold text-slate-400 ml-1"
      }, "GWh")), /*#__PURE__*/React.createElement("div", {
        className: "text-sm font-bold mt-1 ".concat(color(k, bKwh))
      }, pct(k, bKwh), " vs Bud"), /*#__PURE__*/React.createElement("div", {
        className: "text-base font-black text-slate-700 mt-2"
      }, formatUSDb(r)), /*#__PURE__*/React.createElement("div", {
        className: "text-xs font-bold ".concat(color(r, bRev))
      }, pct(r, bRev), " vs Bud"));
    })), /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-xl border shadow-sm overflow-x-auto"
    }, /*#__PURE__*/React.createElement("div", {
      className: "p-4 bg-slate-50 border-b font-bold text-slate-800"
    }, "Full Year Comparison"), /*#__PURE__*/React.createElement("table", {
      className: "w-full text-sm whitespace-nowrap"
    }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
      className: "bg-slate-800 text-white"
    }, /*#__PURE__*/React.createElement("th", {
      className: "p-3 text-left"
    }, "Metric"), /*#__PURE__*/React.createElement("th", {
      className: "p-3 text-right"
    }, "2025 Actual"), /*#__PURE__*/React.createElement("th", {
      className: "p-3 text-right bg-blue-900"
    }, String(budgetYear) + " Budget"), scenarios.map(function (sc) {
      return /*#__PURE__*/React.createElement("th", {
        key: sc.key,
        className: "p-3 text-right ".concat(sc.head, " text-white")
      }, sc.label);
    }))), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", {
      className: "border-b bg-slate-50"
    }, /*#__PURE__*/React.createElement("td", {
      className: "p-3 font-bold text-slate-600"
    }, "Total kWh"), /*#__PURE__*/React.createElement("td", {
      className: "p-3 text-right"
    }, formatNum(pKwh)), /*#__PURE__*/React.createElement("td", {
      className: "p-3 text-right font-bold text-blue-700"
    }, formatNum(bKwh)), scenarios.map(function (sc) {
      var k = tot(sc.data);
      return /*#__PURE__*/React.createElement("td", {
        key: sc.key,
        className: "p-3 text-right font-bold ".concat(sc.text)
      }, formatNum(k));
    })), /*#__PURE__*/React.createElement("tr", {
      className: "border-b"
    }, /*#__PURE__*/React.createElement("td", {
      className: "p-3 font-bold text-slate-600"
    }, "vs Budget %"), /*#__PURE__*/React.createElement("td", {
      className: "p-3 text-right text-slate-400"
    }, pct(pKwh, bKwh)), /*#__PURE__*/React.createElement("td", {
      className: "p-3 text-right text-slate-400"
    }, "\u2014"), scenarios.map(function (sc) {
      var k = tot(sc.data);
      return /*#__PURE__*/React.createElement("td", {
        key: sc.key,
        className: "p-3 text-right font-bold ".concat(color(k, bKwh))
      }, pct(k, bKwh));
    })), /*#__PURE__*/React.createElement("tr", {
      className: "border-b bg-slate-50"
    }, /*#__PURE__*/React.createElement("td", {
      className: "p-3 font-bold text-slate-600"
    }, "Revenue (US$)"), /*#__PURE__*/React.createElement("td", {
      className: "p-3 text-right"
    }, formatUSDb(pRev)), /*#__PURE__*/React.createElement("td", {
      className: "p-3 text-right font-bold text-blue-700"
    }, formatUSDb(bRev)), scenarios.map(function (sc) {
      var r = rev(sc.data);
      return /*#__PURE__*/React.createElement("td", {
        key: sc.key,
        className: "p-3 text-right font-bold ".concat(sc.text)
      }, formatUSDb(r));
    })), /*#__PURE__*/React.createElement("tr", {
      className: "border-b"
    }, /*#__PURE__*/React.createElement("td", {
      className: "p-3 font-bold text-slate-600"
    }, "Rev vs Budget"), /*#__PURE__*/React.createElement("td", {
      className: "p-3 text-right text-slate-400"
    }, pct(pRev, bRev)), /*#__PURE__*/React.createElement("td", {
      className: "p-3 text-right text-slate-400"
    }, "\u2014"), scenarios.map(function (sc) {
      var r = rev(sc.data);
      return /*#__PURE__*/React.createElement("td", {
        key: sc.key,
        className: "p-3 text-right font-bold ".concat(color(r, bRev))
      }, pct(r, bRev));
    })), /*#__PURE__*/React.createElement("tr", {
      className: "border-b bg-slate-50"
    }, /*#__PURE__*/React.createElement("td", {
      className: "p-3 font-bold text-slate-600"
    }, "Gap to Budget (kWh)"), /*#__PURE__*/React.createElement("td", {
      className: "p-3 text-right text-slate-400"
    }, formatNum(pKwh - bKwh)), /*#__PURE__*/React.createElement("td", {
      className: "p-3 text-right text-slate-400"
    }, "\u2014"), scenarios.map(function (sc) {
      var g = tot(sc.data) - bKwh;
      return /*#__PURE__*/React.createElement("td", {
        key: sc.key,
        className: "p-3 text-right font-bold ".concat(g >= 0 ? 'text-emerald-600' : 'text-red-500')
      }, g > 0 ? '+' : '', formatNum(g));
    })), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
      className: "p-3 font-bold text-slate-600"
    }, "Rev Gap to Budget"), /*#__PURE__*/React.createElement("td", {
      className: "p-3 text-right text-slate-400"
    }, formatUSDb(pRev - bRev)), /*#__PURE__*/React.createElement("td", {
      className: "p-3 text-right text-slate-400"
    }, "\u2014"), scenarios.map(function (sc) {
      var g = rev(sc.data) - bRev;
      return /*#__PURE__*/React.createElement("td", {
        key: sc.key,
        className: "p-3 text-right font-bold ".concat(g >= 0 ? 'text-emerald-600' : 'text-red-500')
      }, g > 0 ? '+' : '', formatUSDb(g));
    }))))), /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-xl border shadow-sm overflow-x-auto"
    }, /*#__PURE__*/React.createElement("div", {
      className: "p-4 bg-slate-50 border-b font-bold text-slate-800"
    }, "Revenue by Rate Class (US$)"), /*#__PURE__*/React.createElement("table", {
      className: "w-full text-sm whitespace-nowrap"
    }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
      className: "bg-slate-800 text-white"
    }, /*#__PURE__*/React.createElement("th", {
      className: "p-3 text-left"
    }, "RC"), /*#__PURE__*/React.createElement("th", {
      className: "p-3 text-right bg-blue-900"
    }, "Budget Rev"), scenarios.map(function (sc) {
      return /*#__PURE__*/React.createElement("th", {
        key: sc.key,
        className: "p-3 text-right ".concat(sc.head)
      }, sc.label);
    }), /*#__PURE__*/React.createElement("th", {
      className: "p-3 text-right"
    }, "Best LE"))), /*#__PURE__*/React.createElement("tbody", null, rcRows.map(function (row) {
      var bestIdx = row.scenarios.reduce(function (bi, s, i, arr) {
        return s.rev > arr[bi].rev ? i : bi;
      }, 0);
      return /*#__PURE__*/React.createElement("tr", {
        key: row.rc,
        className: "border-b hover:bg-slate-50"
      }, /*#__PURE__*/React.createElement("td", {
        className: "p-3 font-bold text-blue-700"
      }, row.rc), /*#__PURE__*/React.createElement("td", {
        className: "p-3 text-right font-bold text-blue-600"
      }, formatUSDb(row.budRev)), row.scenarios.map(function (s, i) {
        return /*#__PURE__*/React.createElement("td", {
          key: i,
          className: "p-3 text-right font-bold ".concat(color(s.rev, row.budRev))
        }, formatUSDb(s.rev));
      }), /*#__PURE__*/React.createElement("td", {
        className: "p-3 text-right font-black text-emerald-600"
      }, scenarios[bestIdx].label));
    })), /*#__PURE__*/React.createElement("tfoot", {
      className: "bg-slate-200 font-black border-t-2 sticky bottom-0"
    }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
      className: "p-3"
    }, "TOTAL"), /*#__PURE__*/React.createElement("td", {
      className: "p-3 text-right text-blue-800"
    }, formatUSDb(bRev)), scenarios.map(function (sc) {
      var r = rev(sc.data);
      return /*#__PURE__*/React.createElement("td", {
        key: sc.key,
        className: "p-3 text-right ".concat(color(r, bRev))
      }, formatUSDb(r));
    }), /*#__PURE__*/React.createElement("td", {
      className: "p-3"
    }))))));
  };

  // ============================================================
  // TAB: NET GENERATION & ROLLING FORECAST
  // ============================================================
  var renderNetGenTab = function renderNetGenTab() {
    if (!netGenData || !netGenData.loaded) {
      return /*#__PURE__*/React.createElement("div", {
        className: "flex flex-col items-center justify-center h-full text-slate-500 gap-4"
      }, /*#__PURE__*/React.createElement(Icons.Wind, null), /*#__PURE__*/React.createElement("p", {
        className: "font-bold"
      }, "Loading Net Generation data from Supabase..."), /*#__PURE__*/React.createElement("p", {
        className: "text-xs text-slate-400"
      }, "Ensure the net_gen_historical table exists and RLS allows reads."));
    }
    var histNetGen = netGenData.netGen;
    var histPeakMW = netGenData.peak;

    // Hurricane-normalize 2025 Nov/Dec
    var norm2025 = _toConsumableArray(histNetGen[2025]);
    norm2025[10] = (histNetGen[2023][10] + histNetGen[2024][10]) / 2;
    norm2025[11] = (histNetGen[2023][11] + histNetGen[2024][11]) / 2;
    var normPeak2025 = _toConsumableArray(histPeakMW[2025]);
    normPeak2025[10] = (histPeakMW[2023][10] + histPeakMW[2024][10]) / 2;
    normPeak2025[11] = (histPeakMW[2023][11] + histPeakMW[2024][11]) / 2;

    // 3-year seasonal index
    var allYears = [histNetGen[2023], histNetGen[2024], norm2025];
    var annualAvgs = allYears.map(function (y) {
      return y.reduce(function (s, v) {
        return s + v;
      }, 0) / 12;
    });
    var seasonalIndex = monthNames.map(function (_, m) {
      var indices = allYears.map(function (yr, i) {
        return yr[m] / annualAvgs[i];
      });
      return indices.reduce(function (s, v) {
        return s + v;
      }, 0) / 3;
    });
    var avg3yr = monthNames.map(function (_, m) {
      return (histNetGen[2023][m] + histNetGen[2024][m] + norm2025[m]) / 3;
    });
    var baseYear = ngForecastBase === 'norm2025' ? norm2025 : avg3yr;
    var basePeak = ngForecastBase === 'norm2025' ? normPeak2025 : monthNames.map(function (_, m) {
      return (histPeakMW[2023][m] + histPeakMW[2024][m] + normPeak2025[m]) / 3;
    });
    var forecastNetGen = monthNames.map(function (_, m) {
      if (ngGrowthMethod === 'flat') return baseYear[m] * (1 + ngFlatGrowth / 100);
      if (ngGrowthMethod === 'manual') return baseYear[m] * (1 + (ngManualMonthly[m] || 0) / 100);
      var annualBase = baseYear.reduce(function (s, v) {
        return s + v;
      }, 0);
      var targetAnnual = annualBase * (1 + ngFlatGrowth / 100);
      var wtAvgIdx = seasonalIndex.reduce(function (s, v) {
        return s + v;
      }, 0) / 12;
      return targetAnnual / 12 * (seasonalIndex[m] / wtAvgIdx);
    });
    var forecastPeak = monthNames.map(function (_, m) {
      return basePeak[m] * (1 + ngPeakGrowthPct / 100);
    });
    var forecastBilled = forecastNetGen.map(function (v) {
      return v * (1 - ngSysLossPct / 100);
    });
    var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var loadFactor = forecastNetGen.map(function (ng, m) {
      return forecastPeak[m] > 0 ? ng / (forecastPeak[m] * daysInMonth[m] * 24) * 100 : 0;
    });
    var totFcstNG = forecastNetGen.reduce(function (s, v) {
      return s + v;
    }, 0);
    var totFcstBilled = forecastBilled.reduce(function (s, v) {
      return s + v;
    }, 0);
    var totBase = baseYear.reduce(function (s, v) {
      return s + v;
    }, 0);
    var yoyPct = totBase > 0 ? (totFcstNG - totBase) / totBase * 100 : 0;
    var chartData = monthNames.map(function (name, m) {
      return {
        month: name.substring(0, 3),
        'Net Gen 2023': Math.round(histNetGen[2023][m]),
        'Net Gen 2024': Math.round(histNetGen[2024][m]),
        'Net Gen 2025': ngShowNormalized ? Math.round(norm2025[m]) : Math.round(histNetGen[2025][m]),
        'Forecast 2026': Math.round(forecastNetGen[m]),
        'Billed Sales 2026': Math.round(forecastBilled[m])
      };
    });
    var peakChartData = monthNames.map(function (name, m) {
      return {
        month: name.substring(0, 3),
        '2023': Math.round(histPeakMW[2023][m]),
        '2024': Math.round(histPeakMW[2024][m]),
        '2025': ngShowNormalized ? Math.round(normPeak2025[m]) : Math.round(histPeakMW[2025][m]),
        'Forecast 2026': Math.round(forecastPeak[m] * 10) / 10
      };
    });
    return /*#__PURE__*/React.createElement("div", {
      className: "p-6 h-full overflow-y-auto custom-scroll space-y-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-xl border p-5 shadow-sm flex items-center justify-between"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
      className: "text-base font-bold text-slate-800 flex items-center gap-2"
    }, /*#__PURE__*/React.createElement(Icons.Wind, null), " Net Generation & 12-Month Rolling Forecast"), /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-slate-500 mt-1"
    }, "Historical 2023\u20132025 actuals + 2026 projection. Net Gen \u2192 Billed Sales via System Loss %.")), /*#__PURE__*/React.createElement("label", {
      className: "flex items-center gap-2 text-sm font-medium text-slate-600 cursor-pointer"
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      checked: ngShowNormalized,
      onChange: function onChange(e) {
        return setNgShowNormalized(e.target.checked);
      },
      className: "w-4 h-4"
    }), "Hurricane-normalize 2025")), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-2 md:grid-cols-5 gap-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-xl border p-4 shadow-sm"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-[10px] font-bold text-slate-400 uppercase mb-1"
    }, "2026 Net Gen (MWh)"), /*#__PURE__*/React.createElement("div", {
      className: "text-base font-black text-slate-800"
    }, (totFcstNG / 1000).toFixed(0), /*#__PURE__*/React.createElement("span", {
      className: "text-sm font-bold text-slate-400 ml-1"
    }, "GWh")), /*#__PURE__*/React.createElement("div", {
      className: "text-xs font-bold mt-1 ".concat(yoyPct >= 0 ? 'text-emerald-600' : 'text-red-500')
    }, yoyPct > 0 ? '+' : '', yoyPct.toFixed(1), "% vs base")), /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-xl border p-4 shadow-sm"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-[10px] font-bold text-slate-400 uppercase mb-1"
    }, "Billed Sales (MWh)"), /*#__PURE__*/React.createElement("div", {
      className: "text-base font-black text-blue-700"
    }, (totFcstBilled / 1000).toFixed(0), /*#__PURE__*/React.createElement("span", {
      className: "text-sm font-bold text-blue-400 ml-1"
    }, "GWh")), /*#__PURE__*/React.createElement("div", {
      className: "text-xs text-slate-400 mt-1"
    }, "@ ", ngSysLossPct, "% system loss")), /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-xl border p-4 shadow-sm"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-[10px] font-bold text-slate-400 uppercase mb-1"
    }, "System Loss (MWh)"), /*#__PURE__*/React.createElement("div", {
      className: "text-base font-black text-amber-600"
    }, ((totFcstNG - totFcstBilled) / 1000).toFixed(0), /*#__PURE__*/React.createElement("span", {
      className: "text-sm font-bold text-amber-400 ml-1"
    }, "GWh")), /*#__PURE__*/React.createElement("div", {
      className: "text-xs text-slate-400 mt-1"
    }, ngSysLossPct, "% of Net Gen")), /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-xl border p-4 shadow-sm"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-[10px] font-bold text-slate-400 uppercase mb-1"
    }, "2025 Actual (Norm)"), /*#__PURE__*/React.createElement("div", {
      className: "text-base font-black text-slate-600"
    }, (norm2025.reduce(function (s, v) {
      return s + v;
    }, 0) / 1000).toFixed(0), /*#__PURE__*/React.createElement("span", {
      className: "text-sm font-bold text-slate-400 ml-1"
    }, "GWh")), /*#__PURE__*/React.createElement("div", {
      className: "text-xs text-slate-400 mt-1"
    }, "vs ", (histNetGen[2025].reduce(function (s, v) {
      return s + v;
    }, 0) / 1000).toFixed(0), " raw")), /*#__PURE__*/React.createElement("div", {
      className: "bg-emerald-50 border border-emerald-200 rounded-xl p-4 shadow-sm"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-[10px] font-bold text-emerald-600 uppercase mb-1"
    }, "1% Loss Reduction ="), /*#__PURE__*/React.createElement("div", {
      className: "text-base font-black text-emerald-700"
    }, formatUSDb(totFcstNG * 0.01 * (tariffRates['RT40'].energy / fxRate))), /*#__PURE__*/React.createElement("div", {
      className: "text-xs text-emerald-600 mt-1"
    }, "additional revenue"))), /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-800 text-white rounded-xl p-5 shadow-sm"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "font-bold mb-4 flex items-center gap-2 text-slate-200"
    }, /*#__PURE__*/React.createElement(Icons.Sliders, null), " Forecast Assumptions"), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-2 md:grid-cols-4 gap-5"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "text-[10px] font-bold uppercase text-slate-400 block mb-1"
    }, "Forecast Base Year"), /*#__PURE__*/React.createElement("select", {
      value: ngForecastBase,
      onChange: function onChange(e) {
        return setNgForecastBase(e.target.value);
      },
      className: "w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-sm text-white outline-none"
    }, /*#__PURE__*/React.createElement("option", {
      value: "norm2025"
    }, "2025 Normalized"), /*#__PURE__*/React.createElement("option", {
      value: "avg3yr"
    }, "3-Year Average"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "text-[10px] font-bold uppercase text-slate-400 block mb-1"
    }, "Growth Method"), /*#__PURE__*/React.createElement("select", {
      value: ngGrowthMethod,
      onChange: function onChange(e) {
        return setNgGrowthMethod(e.target.value);
      },
      className: "w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-sm text-white outline-none"
    }, /*#__PURE__*/React.createElement("option", {
      value: "seasonal"
    }, "Seasonal Index + Growth"), /*#__PURE__*/React.createElement("option", {
      value: "flat"
    }, "Flat YoY Growth %"), /*#__PURE__*/React.createElement("option", {
      value: "manual"
    }, "Manual per Month"))), ngGrowthMethod !== 'manual' && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "text-[10px] font-bold uppercase text-slate-400 block mb-1"
    }, "Annual Growth %"), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2"
    }, /*#__PURE__*/React.createElement("input", {
      type: "range",
      min: "-5",
      max: "10",
      step: "0.1",
      value: ngFlatGrowth,
      onChange: function onChange(e) {
        return setNgFlatGrowth(parseFloat(e.target.value));
      },
      className: "flex-1"
    }), /*#__PURE__*/React.createElement("span", {
      className: "text-sm font-black text-white w-12 text-right"
    }, ngFlatGrowth > 0 ? '+' : '', ngFlatGrowth.toFixed(1), "%"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "text-[10px] font-bold uppercase text-slate-400 block mb-1"
    }, "System Loss %"), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2"
    }, /*#__PURE__*/React.createElement("input", {
      type: "range",
      min: "15",
      max: "35",
      step: "0.1",
      value: ngSysLossPct,
      onChange: function onChange(e) {
        return setNgSysLossPct(parseFloat(e.target.value));
      },
      className: "flex-1"
    }), /*#__PURE__*/React.createElement("span", {
      className: "text-sm font-black text-amber-400 w-12 text-right"
    }, ngSysLossPct.toFixed(1), "%"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "text-[10px] font-bold uppercase text-slate-400 block mb-1"
    }, "Peak Demand Growth %"), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2"
    }, /*#__PURE__*/React.createElement("input", {
      type: "range",
      min: "-5",
      max: "10",
      step: "0.1",
      value: ngPeakGrowthPct,
      onChange: function onChange(e) {
        return setNgPeakGrowthPct(parseFloat(e.target.value));
      },
      className: "flex-1"
    }), /*#__PURE__*/React.createElement("span", {
      className: "text-sm font-black text-white w-12 text-right"
    }, ngPeakGrowthPct > 0 ? '+' : '', ngPeakGrowthPct.toFixed(1), "%")))), ngGrowthMethod === 'manual' && /*#__PURE__*/React.createElement("div", {
      className: "mt-4 pt-4 border-t border-slate-700"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-[10px] font-bold uppercase text-slate-400 mb-2"
    }, "Monthly Growth % Override"), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-6 md:grid-cols-12 gap-2"
    }, monthNames.map(function (m, i) {
      return /*#__PURE__*/React.createElement("div", {
        key: m,
        className: "text-center"
      }, /*#__PURE__*/React.createElement("div", {
        className: "text-[9px] text-slate-400 mb-1"
      }, m.substring(0, 3)), /*#__PURE__*/React.createElement("input", {
        type: "number",
        value: ngManualMonthly[i],
        step: "0.1",
        onChange: function onChange(e) {
          var n = _toConsumableArray(ngManualMonthly);
          n[i] = parseFloat(e.target.value) || 0;
          setNgManualMonthly(n);
        },
        className: "w-full bg-slate-700 border border-slate-600 rounded px-1 py-1 text-xs text-center text-white outline-none"
      }));
    })))), /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-xl border p-5 shadow-sm"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "font-bold text-slate-800 mb-4 flex items-center gap-2"
    }, /*#__PURE__*/React.createElement(Icons.TrendingUp, null), " Net Generation \u2014 Historical vs 2026 Forecast (MWh)"), /*#__PURE__*/React.createElement("div", {
      className: "h-[200px]"
    }, /*#__PURE__*/React.createElement(ResponsiveContainer, {
      width: "100%",
      height: "100%"
    }, /*#__PURE__*/React.createElement(LineChart, {
      data: chartData
    }, /*#__PURE__*/React.createElement(CartesianGrid, {
      strokeDasharray: "3 3",
      vertical: false,
      stroke: "#e2e8f0"
    }), /*#__PURE__*/React.createElement(XAxis, {
      dataKey: "month",
      tick: {
        fontSize: 11
      }
    }), /*#__PURE__*/React.createElement(YAxis, {
      tickFormatter: function tickFormatter(v) {
        return (v / 1000).toFixed(0) + 'k';
      },
      tick: {
        fontSize: 11
      }
    }), /*#__PURE__*/React.createElement(Tooltip, {
      formatter: function formatter(v) {
        return formatNum(v);
      },
      contentStyle: {
        borderRadius: '8px',
        border: 'none',
        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
      }
    }), /*#__PURE__*/React.createElement(Legend, {
      wrapperStyle: {
        paddingTop: '8px'
      }
    }), /*#__PURE__*/React.createElement(Line, {
      type: "monotone",
      dataKey: "Net Gen 2023",
      stroke: "#94a3b8",
      strokeDasharray: "4 4",
      dot: false,
      strokeWidth: 1.5
    }), /*#__PURE__*/React.createElement(Line, {
      type: "monotone",
      dataKey: "Net Gen 2024",
      stroke: "#64748b",
      strokeDasharray: "4 4",
      dot: false,
      strokeWidth: 1.5
    }), /*#__PURE__*/React.createElement(Line, {
      type: "monotone",
      dataKey: "Net Gen 2025",
      stroke: "#475569",
      dot: false,
      strokeWidth: 2
    }), /*#__PURE__*/React.createElement(Line, {
      type: "monotone",
      dataKey: "Forecast 2026",
      stroke: "#3b82f6",
      strokeWidth: 3,
      dot: {
        r: 4,
        fill: '#3b82f6'
      }
    }), /*#__PURE__*/React.createElement(Line, {
      type: "monotone",
      dataKey: "Billed Sales 2026",
      stroke: "#10b981",
      strokeWidth: 2,
      strokeDasharray: "6 3",
      dot: false
    }))))), /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-xl border shadow-sm overflow-x-auto"
    }, /*#__PURE__*/React.createElement("div", {
      className: "p-4 bg-slate-50 border-b flex justify-between items-center"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "font-bold text-slate-800"
    }, "12-Month Rolling Forecast Detail"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        var rows = monthNames.map(function (m, i) {
          return {
            Month: m,
            Net_Gen_2023: Math.round(histNetGen[2023][i]),
            Net_Gen_2024: Math.round(histNetGen[2024][i]),
            Net_Gen_2025_Raw: Math.round(histNetGen[2025][i]),
            Net_Gen_2025_Norm: Math.round(norm2025[i]),
            Forecast_2026_NetGen: Math.round(forecastNetGen[i]),
            Forecast_2026_Billed: Math.round(forecastBilled[i]),
            System_Loss_MWh: Math.round(forecastNetGen[i] - forecastBilled[i]),
            Peak_MW_2026: forecastPeak[i].toFixed(1),
            Load_Factor_Pct: loadFactor[i].toFixed(1)
          };
        });
        exportCSV(rows, 'JPS_NetGen_Forecast_2026.csv');
      },
      className: "bg-blue-50 text-blue-700 hover:bg-blue-100 px-4 py-2 rounded-lg font-bold text-sm flex items-center gap-2 border border-blue-200 transition"
    }, /*#__PURE__*/React.createElement(Icons.Download, null), " Export CSV")), /*#__PURE__*/React.createElement("table", {
      className: "w-full text-sm whitespace-nowrap"
    }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
      className: "bg-slate-100"
    }, /*#__PURE__*/React.createElement("th", {
      className: "p-3 text-left font-bold border-r table-pin-col bg-slate-100 z-20"
    }, "Month"), /*#__PURE__*/React.createElement("th", {
      className: "p-3 text-right text-slate-500"
    }, "2023 Act"), /*#__PURE__*/React.createElement("th", {
      className: "p-3 text-right text-slate-500"
    }, "2024 Act"), /*#__PURE__*/React.createElement("th", {
      className: "p-3 text-right text-slate-600"
    }, "2025 Raw"), /*#__PURE__*/React.createElement("th", {
      className: "p-3 text-right text-slate-700 bg-slate-50"
    }, "2025 Norm"), /*#__PURE__*/React.createElement("th", {
      className: "p-3 text-right text-[10px] text-slate-400"
    }, "Seas. Idx"), /*#__PURE__*/React.createElement("th", {
      className: "p-3 text-right font-bold text-blue-800 bg-blue-50 border-l-2 border-blue-200"
    }, "2026 Net Gen"), /*#__PURE__*/React.createElement("th", {
      className: "p-3 text-right font-bold text-emerald-700 bg-emerald-50"
    }, "Billed Sales"), /*#__PURE__*/React.createElement("th", {
      className: "p-3 text-right text-amber-600 bg-amber-50"
    }, "Sys Loss"), /*#__PURE__*/React.createElement("th", {
      className: "p-3 text-right text-purple-600"
    }, "Peak MW"), /*#__PURE__*/React.createElement("th", {
      className: "p-3 text-right text-slate-500"
    }, "Load Factor"), /*#__PURE__*/React.createElement("th", {
      className: "p-3 text-right font-bold border-l border-slate-200"
    }, "YoY vs Norm"))), /*#__PURE__*/React.createElement("tbody", null, monthNames.map(function (m, i) {
      var yoy = norm2025[i] > 0 ? (forecastNetGen[i] - norm2025[i]) / norm2025[i] * 100 : 0;
      var isHurricane = i >= 10 && histNetGen[2025][i] < norm2025[i] * 0.9;
      return /*#__PURE__*/React.createElement("tr", {
        key: m,
        className: "border-b hover:bg-slate-50"
      }, /*#__PURE__*/React.createElement("td", {
        className: "p-3 font-bold border-r table-pin-col bg-white z-10"
      }, m.substring(0, 3)), /*#__PURE__*/React.createElement("td", {
        className: "p-3 text-right text-slate-400 text-xs"
      }, formatNum(histNetGen[2023][i])), /*#__PURE__*/React.createElement("td", {
        className: "p-3 text-right text-slate-400 text-xs"
      }, formatNum(histNetGen[2024][i])), /*#__PURE__*/React.createElement("td", {
        className: "p-3 text-right text-slate-500"
      }, formatNum(histNetGen[2025][i]), isHurricane && /*#__PURE__*/React.createElement("span", {
        className: "ml-1 text-[9px] bg-amber-100 text-amber-700 px-1 rounded font-bold"
      }, "HURR")), /*#__PURE__*/React.createElement("td", {
        className: "p-3 text-right text-slate-700 bg-slate-50 font-medium"
      }, formatNum(Math.round(norm2025[i]))), /*#__PURE__*/React.createElement("td", {
        className: "p-3 text-right text-[11px] text-slate-400"
      }, seasonalIndex[i].toFixed(3)), /*#__PURE__*/React.createElement("td", {
        className: "p-3 text-right font-black text-blue-800 bg-blue-50 border-l-2 border-blue-200"
      }, formatNum(Math.round(forecastNetGen[i]))), /*#__PURE__*/React.createElement("td", {
        className: "p-3 text-right font-bold text-emerald-700 bg-emerald-50"
      }, formatNum(Math.round(forecastBilled[i]))), /*#__PURE__*/React.createElement("td", {
        className: "p-3 text-right text-amber-600 bg-amber-50"
      }, formatNum(Math.round(forecastNetGen[i] - forecastBilled[i]))), /*#__PURE__*/React.createElement("td", {
        className: "p-3 text-right text-purple-600 font-bold"
      }, forecastPeak[i].toFixed(1)), /*#__PURE__*/React.createElement("td", {
        className: "p-3 text-right text-slate-500"
      }, loadFactor[i].toFixed(1), "%"), /*#__PURE__*/React.createElement("td", {
        className: "p-3 text-right font-bold border-l border-slate-200 ".concat(yoy >= 0 ? 'text-emerald-600' : 'text-red-500')
      }, yoy > 0 ? '+' : '', yoy.toFixed(1), "%"));
    })), /*#__PURE__*/React.createElement("tfoot", {
      className: "bg-slate-200 font-black border-t-2 sticky bottom-0 z-10"
    }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
      className: "p-3 border-r table-pin-col bg-slate-200 z-20"
    }, "TOTAL"), /*#__PURE__*/React.createElement("td", {
      className: "p-3 text-right text-xs"
    }, formatNum(histNetGen[2023].reduce(function (s, v) {
      return s + v;
    }, 0))), /*#__PURE__*/React.createElement("td", {
      className: "p-3 text-right text-xs"
    }, formatNum(histNetGen[2024].reduce(function (s, v) {
      return s + v;
    }, 0))), /*#__PURE__*/React.createElement("td", {
      className: "p-3 text-right"
    }, formatNum(histNetGen[2025].reduce(function (s, v) {
      return s + v;
    }, 0))), /*#__PURE__*/React.createElement("td", {
      className: "p-3 text-right bg-slate-300"
    }, formatNum(Math.round(norm2025.reduce(function (s, v) {
      return s + v;
    }, 0)))), /*#__PURE__*/React.createElement("td", {
      className: "p-3"
    }), /*#__PURE__*/React.createElement("td", {
      className: "p-3 text-right text-blue-900 bg-blue-100 border-l-2 border-blue-300"
    }, formatNum(Math.round(totFcstNG))), /*#__PURE__*/React.createElement("td", {
      className: "p-3 text-right text-emerald-800 bg-emerald-100"
    }, formatNum(Math.round(totFcstBilled))), /*#__PURE__*/React.createElement("td", {
      className: "p-3 text-right text-amber-700 bg-amber-100"
    }, formatNum(Math.round(totFcstNG - totFcstBilled))), /*#__PURE__*/React.createElement("td", {
      className: "p-3 text-right text-purple-700"
    }, Math.max.apply(Math, _toConsumableArray(forecastPeak)).toFixed(1), " pk"), /*#__PURE__*/React.createElement("td", {
      className: "p-3 text-right"
    }, (loadFactor.reduce(function (s, v) {
      return s + v;
    }, 0) / 12).toFixed(1), "%"), /*#__PURE__*/React.createElement("td", {
      className: "p-3 text-right border-l ".concat(yoyPct >= 0 ? 'text-emerald-700' : 'text-red-600')
    }, yoyPct > 0 ? '+' : '', yoyPct.toFixed(1), "%"))))), /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-xl border p-5 shadow-sm"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "font-bold text-slate-800 mb-4 flex items-center gap-2"
    }, /*#__PURE__*/React.createElement(Icons.Activity, null), " Peak Demand \u2014 Historical vs 2026 Forecast (MW)"), /*#__PURE__*/React.createElement("div", {
      className: "h-[180px]"
    }, /*#__PURE__*/React.createElement(ResponsiveContainer, {
      width: "100%",
      height: "100%"
    }, /*#__PURE__*/React.createElement(LineChart, {
      data: peakChartData
    }, /*#__PURE__*/React.createElement(CartesianGrid, {
      strokeDasharray: "3 3",
      vertical: false,
      stroke: "#e2e8f0"
    }), /*#__PURE__*/React.createElement(XAxis, {
      dataKey: "month",
      tick: {
        fontSize: 11
      }
    }), /*#__PURE__*/React.createElement(YAxis, {
      domain: ['auto', 'auto'],
      tick: {
        fontSize: 11
      }
    }), /*#__PURE__*/React.createElement(Tooltip, {
      contentStyle: {
        borderRadius: '8px',
        border: 'none',
        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
      }
    }), /*#__PURE__*/React.createElement(Legend, {
      wrapperStyle: {
        paddingTop: '8px'
      }
    }), /*#__PURE__*/React.createElement(Line, {
      type: "monotone",
      dataKey: "2023",
      stroke: "#94a3b8",
      strokeDasharray: "4 4",
      dot: false,
      strokeWidth: 1.5
    }), /*#__PURE__*/React.createElement(Line, {
      type: "monotone",
      dataKey: "2024",
      stroke: "#64748b",
      strokeDasharray: "4 4",
      dot: false,
      strokeWidth: 1.5
    }), /*#__PURE__*/React.createElement(Line, {
      type: "monotone",
      dataKey: "2025",
      stroke: "#475569",
      dot: false,
      strokeWidth: 2
    }), /*#__PURE__*/React.createElement(Line, {
      type: "monotone",
      dataKey: "Forecast 2026",
      stroke: "#8b5cf6",
      strokeWidth: 3,
      dot: {
        r: 4,
        fill: '#8b5cf6'
      }
    }))))), /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-xl border p-5 shadow-sm"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "font-bold text-slate-800 mb-4 flex items-center gap-2"
    }, /*#__PURE__*/React.createElement(Icons.Calculator, null), " System Loss Sensitivity"), /*#__PURE__*/React.createElement("div", {
      className: "overflow-x-auto"
    }, /*#__PURE__*/React.createElement("table", {
      className: "w-full text-sm"
    }, /*#__PURE__*/React.createElement("thead", {
      className: "bg-slate-100"
    }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
      className: "p-3 text-left font-bold"
    }, "System Loss %"), /*#__PURE__*/React.createElement("th", {
      className: "p-3 text-right font-bold"
    }, "Billed Sales (GWh)"), /*#__PURE__*/React.createElement("th", {
      className: "p-3 text-right font-bold"
    }, "vs Base (GWh)"), /*#__PURE__*/React.createElement("th", {
      className: "p-3 text-right font-bold"
    }, "Incremental Revenue (US$)"), /*#__PURE__*/React.createElement("th", {
      className: "p-3 text-right font-bold"
    }, "Status"))), /*#__PURE__*/React.createElement("tbody", null, [28, 27, 26, 25, 24, 23, 22].map(function (loss) {
      var billed = totFcstNG * (1 - loss / 100);
      var delta = billed - totFcstBilled;
      var blendedRate = Object.values(tariffRates).reduce(function (s, r) {
        return s + r.energy;
      }, 0) / Object.keys(tariffRates).length;
      var revDelta = delta * blendedRate / fxRate;
      var isBase = Math.abs(loss - ngSysLossPct) < 0.01;
      return /*#__PURE__*/React.createElement("tr", {
        key: loss,
        className: "border-b ".concat(isBase ? 'bg-blue-50 font-bold' : 'hover:bg-slate-50')
      }, /*#__PURE__*/React.createElement("td", {
        className: "p-3 font-bold"
      }, loss, "%", isBase && /*#__PURE__*/React.createElement("span", {
        className: "ml-2 text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded font-bold"
      }, "Base")), /*#__PURE__*/React.createElement("td", {
        className: "p-3 text-right"
      }, (billed / 1000).toFixed(1)), /*#__PURE__*/React.createElement("td", {
        className: "p-3 text-right font-bold ".concat(delta > 0 ? 'text-emerald-600' : delta < 0 ? 'text-red-500' : 'text-slate-400')
      }, delta > 0 ? '+' : '', (delta / 1000).toFixed(1)), /*#__PURE__*/React.createElement("td", {
        className: "p-3 text-right font-bold ".concat(revDelta > 0 ? 'text-emerald-600' : revDelta < 0 ? 'text-red-500' : 'text-slate-400')
      }, revDelta > 0 ? '+' : '', formatUSDb(revDelta)), /*#__PURE__*/React.createElement("td", {
        className: "p-3 text-right"
      }, /*#__PURE__*/React.createElement("span", {
        className: "text-xs px-2 py-0.5 rounded font-bold ".concat(loss <= 24 ? 'bg-emerald-100 text-emerald-700' : loss <= 26 ? 'bg-amber-100 text-amber-700' : 'bg-red-100 text-red-700')
      }, loss <= 24 ? 'Best Practice' : loss <= 26 ? 'Current Range' : 'Above Target')));
    }))))));
  };

  // ============================================================
  // TAB: ROLLING 18-MONTH FORECAST
  // ============================================================
  var renderRolling18Tab = function renderRolling18Tab() {
    if (!netGenData || !netGenData.loaded) {
      return /*#__PURE__*/React.createElement("div", {
        className: "flex flex-col items-center justify-center h-full text-slate-500 gap-4"
      }, /*#__PURE__*/React.createElement(Icons.TrendingUp, null), /*#__PURE__*/React.createElement("p", {
        className: "font-bold"
      }, "Loading Net Generation data from Supabase..."));
    }
    var histNetGen = netGenData.netGen;
    var norm2025 = _toConsumableArray(histNetGen[2025]);
    norm2025[10] = (histNetGen[2023][10] + histNetGen[2024][10]) / 2;
    norm2025[11] = (histNetGen[2023][11] + histNetGen[2024][11]) / 2;
    var allYrs = [histNetGen[2023], histNetGen[2024], norm2025];
    var annAvgs = allYrs.map(function (y) {
      return y.reduce(function (s, v) {
        return s + v;
      }, 0) / 12;
    });
    var seasIdx = Array(12).fill(0).map(function (_, m) {
      var idxs = allYrs.map(function (yr, i) {
        return yr[m] / annAvgs[i];
      });
      return idxs.reduce(function (s, v) {
        return s + v;
      }, 0) / 3;
    });
    var baseRef = r18Base === 'norm2025' ? norm2025 : Array(12).fill(0).map(function (_, m) {
      return (histNetGen[2023][m] + histNetGen[2024][m] + norm2025[m]) / 3;
    });
    var actualsBilledByMonth = {};
    actuals.filter(function (a) {
      return a.year === budgetYear;
    }).forEach(function (a) {
      actualsBilledByMonth[a.month] = (actualsBilledByMonth[a.month] || 0) + a.kwh / 1000;
    });
    var maxActMonth = Math.max.apply(Math, [0].concat(_toConsumableArray(actuals.filter(function (a) {
      return a.year === budgetYear;
    }).map(function (a) {
      return a.month;
    }))));
    var wtAvgIdx = seasIdx.reduce(function (s, v) {
      return s + v;
    }, 0) / 12;
    var getFcstNG = function getFcstNG(mIdx, yr) {
      var annBase = baseRef.reduce(function (s, v) {
        return s + v;
      }, 0);
      var g = yr === budgetYear ? r18Growth26 : yr === budgetYear + 1 ? r18Growth27 : r18Growth28;
      return annBase * (1 + g / 100) / 12 * (seasIdx[mIdx] / wtAvgIdx);
    };
    var lockedActuals = [1, 2, 3].map(function (mNum) {
      var mIdx = mNum - 1;
      var billedMwh = actualsBilledByMonth[mNum] || 0;
      var netGenEst = billedMwh > 0 ? billedMwh / (1 - r18SysLoss / 100) : getFcstNG(mIdx, 2026);
      var blendedRate = Object.values(tariffRates).reduce(function (s, r) {
        return s + r.energy;
      }, 0) / Object.keys(tariffRates).length;
      var revUSD = billedMwh * 1000 * blendedRate / fxRate;
      var budBilledMwh = budget.filter(function (b) {
        return b.year === budgetYear && b.month === mNum;
      }).reduce(function (s, d) {
        return s + d.kwh;
      }, 0) / 1000;
      return {
        label: "".concat(monthNames[mIdx].substring(0, 3), " 2026"),
        mIdx: mIdx,
        mNum: mNum,
        yr: 2026,
        netGen: netGenEst,
        billed: billedMwh,
        revUSD: revUSD,
        budBilledMwh: budBilledMwh,
        sysLoss: netGenEst - billedMwh,
        varBud: budBilledMwh > 0 ? billedMwh - budBilledMwh : null
      };
    });
    var fcstRows = [];
    var _loop2 = function _loop2() {
      var yr = i < 9 ? budgetYear : i < 21 ? budgetYear + 1 : budgetYear + 2;
      var mIdx = i < 9 ? i + 3 : i < 21 ? i - 9 : i - 21;
      var mNum = mIdx + 1;
      var label = "".concat(monthNames[mIdx].substring(0, 3), " ").concat(yr);
      var ng = getFcstNG(mIdx, yr);
      var billed = ng * (1 - r18SysLoss / 100);
      var blendedRate = Object.values(tariffRates).reduce(function (s, r) {
        return s + r.energy;
      }, 0) / Object.keys(tariffRates).length;
      var revUSD = billed * 1000 * blendedRate / fxRate;
      var budBilledMwh = budget.filter(function (b) {
        return b.year === budgetYear && b.month === mNum;
      }).reduce(function (s, d) {
        return s + d.kwh;
      }, 0) / 1000;
      var pyNG = yr === 2026 ? norm2025[mIdx] : getFcstNG(mIdx, 2026);
      var yoyPct = pyNG > 0 ? (ng - pyNG) / pyNG * 100 : 0;
      var g = yr === budgetYear ? r18Growth26 : yr === budgetYear + 1 ? r18Growth27 : r18Growth28;
      fcstRows.push({
        i: i,
        yr: yr,
        mIdx: mIdx,
        mNum: mNum,
        label: label,
        ng: ng,
        billed: billed,
        revUSD: revUSD,
        budBilledMwh: budBilledMwh,
        varBud: budBilledMwh > 0 ? billed - budBilledMwh : null,
        yoyPct: yoyPct,
        g: g
      });
    };
    for (var i = 0; i < 24; i++) {
      _loop2();
    }
    var fcst2026 = fcstRows.filter(function (r) {
      return r.yr === 2026;
    });
    var fcst2027 = fcstRows.filter(function (r) {
      return r.yr === 2027;
    });
    var fcst2028 = fcstRows.filter(function (r) {
      return r.yr === budgetYear + 2;
    });
    var sumNG = function sumNG(arr) {
      return arr.reduce(function (s, r) {
        return s + r.ng;
      }, 0);
    };
    var sumBil = function sumBil(arr) {
      return arr.reduce(function (s, r) {
        return s + r.billed;
      }, 0);
    };
    var sumRev = function sumRev(arr) {
      return arr.reduce(function (s, r) {
        return s + r.revUSD;
      }, 0);
    };
    var chartData = [].concat(_toConsumableArray(lockedActuals.map(function (r) {
      return {
        label: r.label,
        'Net Gen': Math.round(r.netGen),
        'Billed Sales': Math.round(r.billed),
        'Revenue ($k)': Math.round(r.revUSD / 1000),
        type: 'actual'
      };
    })), _toConsumableArray(fcstRows.map(function (r) {
      return {
        label: r.label,
        'Net Gen': Math.round(r.ng),
        'Billed Sales': Math.round(r.billed),
        'Revenue ($k)': Math.round(r.revUSD / 1000),
        type: r.yr === 2027 ? 'fcst27' : 'fcst26'
      };
    })));
    return /*#__PURE__*/React.createElement("div", {
      className: "p-6 h-full overflow-y-auto custom-scroll space-y-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-xl border p-5 shadow-sm flex items-center justify-between flex-wrap gap-4"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
      className: "text-base font-bold text-slate-800 flex items-center gap-2"
    }, /*#__PURE__*/React.createElement(Icons.TrendingUp, null), " Rolling 18-Month Forecast"), /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-slate-500 mt-1"
    }, /*#__PURE__*/React.createElement("span", {
      className: "font-bold text-blue-700"
    }, "Actuals locked: Jan\u2013Mar 2026"), /*#__PURE__*/React.createElement("span", {
      className: "mx-2 text-slate-300"
    }, "\xB7"), /*#__PURE__*/React.createElement("span", {
      className: "font-bold text-emerald-700"
    }, "Forecast: Apr 2026 \u2192 Sep 2027"))), /*#__PURE__*/React.createElement("label", {
      className: "flex items-center gap-2 text-xs font-bold text-slate-600 cursor-pointer"
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      checked: r18ShowRevenue,
      onChange: function onChange(e) {
        return setR18ShowRevenue(e.target.checked);
      },
      className: "w-4 h-4"
    }), "Show Revenue bars")), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-2 md:grid-cols-4 gap-4"
    }, [{
      label: 'Actuals Q1 2026',
      billed: lockedActuals.reduce(function (s, r) {
        return s + r.billed;
      }, 0),
      rev: lockedActuals.reduce(function (s, r) {
        return s + r.revUSD;
      }, 0),
      color: 'blue',
      tag: 'LOCKED'
    }, {
      label: 'Forecast Apr–Dec 2026',
      billed: sumBil(fcst2026),
      rev: sumRev(fcst2026),
      color: 'emerald',
      tag: '9M FCST'
    }, {
      label: 'Forecast Jan–Sep 2027',
      billed: sumBil(fcst2027),
      rev: sumRev(fcst2027),
      color: 'purple',
      tag: '9M FCST'
    }, {
      label: '18-Month Fcst Total',
      billed: sumBil(fcstRows),
      rev: sumRev(fcstRows),
      color: 'amber',
      tag: '18M'
    }].map(function (kpi, ki) {
      return /*#__PURE__*/React.createElement("div", {
        key: ki,
        className: "bg-white rounded-xl border p-4 shadow-sm border-l-4 ".concat(kpi.color === 'blue' ? 'border-l-blue-500' : kpi.color === 'emerald' ? 'border-l-emerald-500' : kpi.color === 'purple' ? 'border-l-purple-500' : 'border-l-amber-500')
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center justify-between mb-2"
      }, /*#__PURE__*/React.createElement("div", {
        className: "text-[10px] font-bold text-slate-400 uppercase"
      }, kpi.label), /*#__PURE__*/React.createElement("span", {
        className: "text-[9px] font-black px-1.5 py-0.5 rounded-full ".concat(kpi.color === 'blue' ? 'bg-blue-100 text-blue-700' : kpi.color === 'emerald' ? 'bg-emerald-100 text-emerald-700' : kpi.color === 'purple' ? 'bg-purple-100 text-purple-700' : 'bg-amber-100 text-amber-700')
      }, kpi.tag)), /*#__PURE__*/React.createElement("div", {
        className: "text-base font-black text-slate-800"
      }, (kpi.billed / 1000).toFixed(1), " ", /*#__PURE__*/React.createElement("span", {
        className: "text-xs font-bold text-slate-400"
      }, "GWh Billed")), /*#__PURE__*/React.createElement("div", {
        className: "text-sm font-bold text-blue-600 mt-1"
      }, formatUSDb(kpi.rev), " ", /*#__PURE__*/React.createElement("span", {
        className: "text-xs font-normal text-slate-400"
      }, "Revenue")));
    })), /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-800 text-white rounded-xl p-5 shadow-sm"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "font-bold mb-4 text-slate-200 flex items-center gap-2"
    }, /*#__PURE__*/React.createElement(Icons.Sliders, null), " Forecast Assumptions (Apr 2026 \u2013 Sep 2027)"), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-2 md:grid-cols-4 gap-5"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "text-[10px] font-bold uppercase text-slate-400 block mb-1"
    }, "Base Year"), /*#__PURE__*/React.createElement("select", {
      value: r18Base,
      onChange: function onChange(e) {
        return setR18Base(e.target.value);
      },
      className: "w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-sm text-white outline-none"
    }, /*#__PURE__*/React.createElement("option", {
      value: "norm2025"
    }, "2025 Normalized"), /*#__PURE__*/React.createElement("option", {
      value: "avg3yr"
    }, "3-Year Average"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "text-[10px] font-bold uppercase text-slate-400 block mb-1"
    }, "2026 Growth %"), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2"
    }, /*#__PURE__*/React.createElement("input", {
      type: "range",
      min: "-5",
      max: "10",
      step: "0.1",
      value: r18Growth26,
      onChange: function onChange(e) {
        return setR18Growth26(parseFloat(e.target.value));
      },
      className: "flex-1"
    }), /*#__PURE__*/React.createElement("span", {
      className: "text-sm font-black text-emerald-400 w-12 text-right"
    }, r18Growth26 > 0 ? '+' : '', r18Growth26.toFixed(1), "%"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "text-[10px] font-bold uppercase text-slate-400 block mb-1"
    }, "2027 Growth %"), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2"
    }, /*#__PURE__*/React.createElement("input", {
      type: "range",
      min: "-5",
      max: "10",
      step: "0.1",
      value: r18Growth27,
      onChange: function onChange(e) {
        return setR18Growth27(parseFloat(e.target.value));
      },
      className: "flex-1"
    }), /*#__PURE__*/React.createElement("span", {
      className: "text-sm font-black text-purple-400 w-12 text-right"
    }, r18Growth27 > 0 ? '+' : '', r18Growth27.toFixed(1), "%"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "text-[10px] font-bold uppercase text-slate-400 block mb-1"
    }, "System Loss %"), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2"
    }, /*#__PURE__*/React.createElement("input", {
      type: "range",
      min: "15",
      max: "35",
      step: "0.1",
      value: r18SysLoss,
      onChange: function onChange(e) {
        return setR18SysLoss(parseFloat(e.target.value));
      },
      className: "flex-1"
    }), /*#__PURE__*/React.createElement("span", {
      className: "text-sm font-black text-amber-400 w-12 text-right"
    }, r18SysLoss.toFixed(1), "%"))))), /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-xl border p-5 shadow-sm"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "font-bold text-slate-800 mb-1"
    }, "Net Gen & Billed Sales \u2014 Q1 Actuals + 18-Month Forecast (MWh)"), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-6 text-xs text-slate-500 mb-4"
    }, /*#__PURE__*/React.createElement("span", {
      className: "flex items-center gap-1.5"
    }, /*#__PURE__*/React.createElement("span", {
      className: "w-3 h-3 rounded bg-blue-800 inline-block"
    }), " Jan\u2013Mar 2026 Actuals"), /*#__PURE__*/React.createElement("span", {
      className: "flex items-center gap-1.5"
    }, /*#__PURE__*/React.createElement("span", {
      className: "w-3 h-3 rounded bg-emerald-500 inline-block"
    }), " Apr\u2013Dec 2026 Forecast"), /*#__PURE__*/React.createElement("span", {
      className: "flex items-center gap-1.5"
    }, /*#__PURE__*/React.createElement("span", {
      className: "w-3 h-3 rounded bg-purple-500 inline-block"
    }), " Jan\u2013Sep 2027 Forecast")), /*#__PURE__*/React.createElement("div", {
      className: "h-[200px]"
    }, /*#__PURE__*/React.createElement(ResponsiveContainer, {
      width: "100%",
      height: "100%"
    }, /*#__PURE__*/React.createElement(BarChart, {
      data: chartData,
      barGap: 1,
      barCategoryGap: "20%"
    }, /*#__PURE__*/React.createElement(CartesianGrid, {
      strokeDasharray: "3 3",
      vertical: false,
      stroke: "#e2e8f0"
    }), /*#__PURE__*/React.createElement(XAxis, {
      dataKey: "label",
      tick: {
        fontSize: 9
      },
      interval: 0,
      angle: -40,
      textAnchor: "end",
      height: 55
    }), /*#__PURE__*/React.createElement(YAxis, {
      yAxisId: "mwh",
      tickFormatter: function tickFormatter(v) {
        return (v / 1000).toFixed(0) + 'k';
      },
      tick: {
        fontSize: 10
      }
    }), r18ShowRevenue && /*#__PURE__*/React.createElement(YAxis, {
      yAxisId: "rev",
      orientation: "right",
      tickFormatter: function tickFormatter(v) {
        return '$' + v + 'k';
      },
      tick: {
        fontSize: 10
      }
    }), /*#__PURE__*/React.createElement(Tooltip, {
      formatter: function formatter(v, n) {
        return n.includes('Revenue') ? 'US$' + formatNum(v) + 'k' : formatNum(v) + ' MWh';
      },
      contentStyle: {
        borderRadius: '8px',
        border: 'none',
        boxShadow: '0 4px 6px -1px rgb(0 0 0/0.1)'
      }
    }), /*#__PURE__*/React.createElement(Bar, {
      yAxisId: "mwh",
      dataKey: "Net Gen",
      radius: [3, 3, 0, 0]
    }, chartData.map(function (d, i) {
      return /*#__PURE__*/React.createElement(Cell, {
        key: i,
        fill: d.type === 'actual' ? '#1d4ed8' : d.type === 'fcst27' ? '#7c3aed' : '#3b82f6'
      });
    })), /*#__PURE__*/React.createElement(Bar, {
      yAxisId: "mwh",
      dataKey: "Billed Sales",
      radius: [3, 3, 0, 0]
    }, chartData.map(function (d, i) {
      return /*#__PURE__*/React.createElement(Cell, {
        key: i,
        fill: d.type === 'actual' ? '#065f46' : d.type === 'fcst27' ? '#6d28d9' : '#10b981'
      });
    })), r18ShowRevenue && /*#__PURE__*/React.createElement(Bar, {
      yAxisId: "rev",
      dataKey: "Revenue ($k)",
      fill: "#f59e0b",
      opacity: 0.65,
      radius: [3, 3, 0, 0]
    }))))), /*#__PURE__*/React.createElement("div", {
      className: "bg-blue-50 border border-blue-200 rounded-xl overflow-hidden shadow-sm"
    }, /*#__PURE__*/React.createElement("div", {
      className: "p-4 bg-blue-700 text-white font-bold text-sm flex items-center gap-2"
    }, /*#__PURE__*/React.createElement(Icons.CheckCircle, null), " Locked Actuals \u2014 Jan\u2013Mar 2026"), /*#__PURE__*/React.createElement("div", {
      className: "overflow-x-auto"
    }, /*#__PURE__*/React.createElement("table", {
      className: "w-full text-sm"
    }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
      className: "bg-blue-100 text-blue-800"
    }, /*#__PURE__*/React.createElement("th", {
      className: "p-3 text-left font-bold"
    }, "Period"), /*#__PURE__*/React.createElement("th", {
      className: "p-3 text-right font-bold"
    }, "Net Gen Est."), /*#__PURE__*/React.createElement("th", {
      className: "p-3 text-right font-bold"
    }, "Billed Sales"), /*#__PURE__*/React.createElement("th", {
      className: "p-3 text-right font-bold"
    }, "Sys Loss"), /*#__PURE__*/React.createElement("th", {
      className: "p-3 text-right font-bold"
    }, "Budget Billed"), /*#__PURE__*/React.createElement("th", {
      className: "p-3 text-right font-bold"
    }, "Var vs Budget"), /*#__PURE__*/React.createElement("th", {
      className: "p-3 text-right font-bold"
    }, "Revenue (US$)"))), /*#__PURE__*/React.createElement("tbody", null, lockedActuals.map(function (r, i) {
      return /*#__PURE__*/React.createElement("tr", {
        key: i,
        className: "border-b border-blue-200 hover:bg-blue-100/50"
      }, /*#__PURE__*/React.createElement("td", {
        className: "p-3 font-bold text-blue-900"
      }, r.label, " ", /*#__PURE__*/React.createElement("span", {
        className: "ml-2 text-[9px] bg-blue-200 text-blue-800 px-1.5 py-0.5 rounded-full font-black"
      }, "ACT")), /*#__PURE__*/React.createElement("td", {
        className: "p-3 text-right text-slate-600"
      }, r.netGen > 0 ? formatNum(Math.round(r.netGen)) : '—'), /*#__PURE__*/React.createElement("td", {
        className: "p-3 text-right font-bold text-blue-800"
      }, formatNum(Math.round(r.billed))), /*#__PURE__*/React.createElement("td", {
        className: "p-3 text-right text-amber-700"
      }, r.netGen > 0 ? formatNum(Math.round(r.sysLoss)) : '—'), /*#__PURE__*/React.createElement("td", {
        className: "p-3 text-right text-slate-500"
      }, r.budBilledMwh > 0 ? formatNum(Math.round(r.budBilledMwh)) : '—'), /*#__PURE__*/React.createElement("td", {
        className: "p-3 text-right font-bold ".concat(r.varBud === null ? 'text-slate-300' : r.varBud >= 0 ? 'text-emerald-600' : 'text-red-500')
      }, r.varBud === null ? '—' : "".concat(r.varBud > 0 ? '+' : '').concat(formatNum(Math.round(r.varBud)))), /*#__PURE__*/React.createElement("td", {
        className: "p-3 text-right font-bold text-blue-800"
      }, formatUSDb(r.revUSD)));
    })), /*#__PURE__*/React.createElement("tfoot", {
      className: "bg-blue-200 font-black"
    }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
      className: "p-3 text-blue-900"
    }, "Q1 2026 TOTAL"), /*#__PURE__*/React.createElement("td", {
      className: "p-3 text-right text-slate-600"
    }, formatNum(Math.round(lockedActuals.reduce(function (s, r) {
      return s + r.netGen;
    }, 0)))), /*#__PURE__*/React.createElement("td", {
      className: "p-3 text-right text-blue-900"
    }, formatNum(Math.round(lockedActuals.reduce(function (s, r) {
      return s + r.billed;
    }, 0)))), /*#__PURE__*/React.createElement("td", {
      className: "p-3 text-right text-amber-700"
    }, formatNum(Math.round(lockedActuals.reduce(function (s, r) {
      return s + r.sysLoss;
    }, 0)))), /*#__PURE__*/React.createElement("td", {
      className: "p-3 text-right"
    }, formatNum(Math.round(lockedActuals.reduce(function (s, r) {
      return s + r.budBilledMwh;
    }, 0)))), /*#__PURE__*/React.createElement("td", {
      className: "p-3 text-right ".concat(lockedActuals.reduce(function (s, r) {
        return s + (r.varBud || 0);
      }, 0) >= 0 ? 'text-emerald-700' : 'text-red-600')
    }, function () {
      var v = lockedActuals.reduce(function (s, r) {
        return s + (r.varBud || 0);
      }, 0);
      return "".concat(v > 0 ? '+' : '').concat(formatNum(Math.round(v)));
    }()), /*#__PURE__*/React.createElement("td", {
      className: "p-3 text-right text-blue-900"
    }, formatUSDb(lockedActuals.reduce(function (s, r) {
      return s + r.revUSD;
    }, 0)))))))), /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-xl border shadow-sm overflow-hidden"
    }, /*#__PURE__*/React.createElement("div", {
      className: "p-4 bg-slate-50 border-b flex justify-between items-center"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
      className: "font-bold text-slate-800"
    }, "18-Month Forecast \u2014 Apr 2026 \u2192 Sep 2027"), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-slate-400 mt-0.5"
    }, "Apr\u2013Dec 2026 +", r18Growth26.toFixed(1), "% \xB7 Jan\u2013Sep 2027 +", r18Growth27.toFixed(1), "% \xB7 ", r18SysLoss.toFixed(1), "% system loss")), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        var allRows = [].concat(_toConsumableArray(lockedActuals.map(function (r) {
          return {
            Period: r.label,
            Type: 'Actual',
            Net_Gen_MWh: Math.round(r.netGen),
            Billed_MWh: Math.round(r.billed),
            Revenue_USD: Math.round(r.revUSD)
          };
        })), _toConsumableArray(fcstRows.map(function (r) {
          return {
            Period: r.label,
            Type: r.yr === 2027 ? 'Forecast 2027' : 'Forecast 2026',
            Net_Gen_MWh: Math.round(r.ng),
            Billed_MWh: Math.round(r.billed),
            Revenue_USD: Math.round(r.revUSD),
            YoY_Pct: r.yoyPct.toFixed(1) + '%'
          };
        })));
        exportCSV(allRows, 'JPS_Rolling18M_Apr2026_Sep2027.csv');
      },
      className: "bg-blue-50 text-blue-700 hover:bg-blue-100 px-4 py-2 rounded-lg font-bold text-sm flex items-center gap-2 border border-blue-200 transition"
    }, /*#__PURE__*/React.createElement(Icons.Download, null), " Export CSV")), /*#__PURE__*/React.createElement("div", {
      className: "overflow-x-auto"
    }, /*#__PURE__*/React.createElement("table", {
      className: "w-full text-sm whitespace-nowrap"
    }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
      className: "bg-slate-100 text-slate-600"
    }, /*#__PURE__*/React.createElement("th", {
      className: "p-3 text-left font-bold border-r table-pin-col bg-slate-100 z-20"
    }, "Period"), /*#__PURE__*/React.createElement("th", {
      className: "p-3 text-right font-bold text-blue-700 bg-blue-50 border-l-2 border-blue-200"
    }, "Net Gen (MWh)"), /*#__PURE__*/React.createElement("th", {
      className: "p-3 text-right font-bold text-emerald-700 bg-emerald-50"
    }, "Billed (MWh)"), /*#__PURE__*/React.createElement("th", {
      className: "p-3 text-right text-amber-600 bg-amber-50"
    }, "Sys Loss"), /*#__PURE__*/React.createElement("th", {
      className: "p-3 text-right text-amber-600 bg-amber-50"
    }, "Loss %"), /*#__PURE__*/React.createElement("th", {
      className: "p-3 text-right text-slate-500 border-l border-slate-200"
    }, "Budget Billed"), /*#__PURE__*/React.createElement("th", {
      className: "p-3 text-right font-bold"
    }, "Var vs Bud"), /*#__PURE__*/React.createElement("th", {
      className: "p-3 text-right font-bold text-blue-700 bg-blue-50 border-l-2 border-blue-200"
    }, "Revenue (US$)"), /*#__PURE__*/React.createElement("th", {
      className: "p-3 text-right"
    }, "YoY %"))), /*#__PURE__*/React.createElement("tbody", null, fcstRows.map(function (r, i) {
      var isYrBreak = i === 9;
      return /*#__PURE__*/React.createElement(React.Fragment, {
        key: r.label
      }, isYrBreak && /*#__PURE__*/React.createElement("tr", {
        className: "bg-purple-900"
      }, /*#__PURE__*/React.createElement("td", {
        colSpan: "9",
        className: "p-2 text-center text-[11px] font-black text-purple-200 uppercase tracking-widest"
      }, "\u2500\u2500 2027 Forecast \xB7 +", r18Growth27.toFixed(1), "% \u2500\u2500")), /*#__PURE__*/React.createElement("tr", {
        className: "border-b transition ".concat(r.yr === 2027 ? 'bg-purple-50/40 hover:bg-purple-50' : 'hover:bg-slate-50')
      }, /*#__PURE__*/React.createElement("td", {
        className: "p-3 font-bold border-r table-pin-col z-10 ".concat(r.yr === 2027 ? 'bg-purple-50/70' : 'bg-white')
      }, r.label, /*#__PURE__*/React.createElement("span", {
        className: "ml-2 text-[9px] font-black px-1.5 py-0.5 rounded-full ".concat(r.yr === 2027 ? 'bg-purple-100 text-purple-700' : 'bg-slate-100 text-slate-500')
      }, r.yr === 2027 ? 'FCST 27' : 'FCST 26')), /*#__PURE__*/React.createElement("td", {
        className: "p-3 text-right font-bold text-blue-800 bg-blue-50/40 border-l-2 border-blue-100"
      }, formatNum(Math.round(r.ng))), /*#__PURE__*/React.createElement("td", {
        className: "p-3 text-right font-bold text-emerald-700 bg-emerald-50/40"
      }, formatNum(Math.round(r.billed))), /*#__PURE__*/React.createElement("td", {
        className: "p-3 text-right text-amber-600 bg-amber-50/40"
      }, formatNum(Math.round(r.ng - r.billed))), /*#__PURE__*/React.createElement("td", {
        className: "p-3 text-right text-amber-600 bg-amber-50/40"
      }, r18SysLoss.toFixed(1), "%"), /*#__PURE__*/React.createElement("td", {
        className: "p-3 text-right text-slate-400 border-l border-slate-100"
      }, r.budBilledMwh > 0 ? formatNum(Math.round(r.budBilledMwh)) : '—'), /*#__PURE__*/React.createElement("td", {
        className: "p-3 text-right font-bold ".concat(r.varBud === null ? 'text-slate-300' : r.varBud >= 0 ? 'text-emerald-600' : 'text-red-500')
      }, r.varBud === null ? '—' : "".concat(r.varBud > 0 ? '+' : '').concat(formatNum(Math.round(r.varBud)))), /*#__PURE__*/React.createElement("td", {
        className: "p-3 text-right font-bold text-blue-700 bg-blue-50/40 border-l-2 border-blue-100"
      }, formatUSDb(r.revUSD)), /*#__PURE__*/React.createElement("td", {
        className: "p-3 text-right font-bold ".concat(r.yoyPct >= 0 ? 'text-emerald-600' : 'text-red-500')
      }, r.yoyPct > 0 ? '+' : '', r.yoyPct.toFixed(1), "%")));
    })), /*#__PURE__*/React.createElement("tfoot", {
      className: "bg-slate-200 font-black border-t-2 sticky bottom-0 z-10"
    }, /*#__PURE__*/React.createElement("tr", {
      className: "border-b border-slate-300"
    }, /*#__PURE__*/React.createElement("td", {
      className: "p-3 border-r table-pin-col bg-slate-200 z-20 text-emerald-900"
    }, "Apr\u2013Dec 2026 (9M)"), /*#__PURE__*/React.createElement("td", {
      className: "p-3 text-right bg-blue-100/60 border-l-2 border-blue-300"
    }, formatNum(Math.round(sumNG(fcst2026)))), /*#__PURE__*/React.createElement("td", {
      className: "p-3 text-right bg-emerald-100/60"
    }, formatNum(Math.round(sumBil(fcst2026)))), /*#__PURE__*/React.createElement("td", {
      className: "p-3 text-right bg-amber-100/60"
    }, formatNum(Math.round(sumNG(fcst2026) - sumBil(fcst2026)))), /*#__PURE__*/React.createElement("td", {
      className: "p-3 bg-amber-100/60"
    }, r18SysLoss.toFixed(1), "%"), /*#__PURE__*/React.createElement("td", {
      className: "p-3 text-right"
    }, formatNum(Math.round(fcst2026.reduce(function (s, r) {
      return s + r.budBilledMwh;
    }, 0)))), /*#__PURE__*/React.createElement("td", {
      className: "p-3 text-right ".concat(sumBil(fcst2026) - fcst2026.reduce(function (s, r) {
        return s + r.budBilledMwh;
      }, 0) >= 0 ? 'text-emerald-700' : 'text-red-600')
    }, function () {
      var v = sumBil(fcst2026) - fcst2026.reduce(function (s, r) {
        return s + r.budBilledMwh;
      }, 0);
      return "".concat(v > 0 ? '+' : '').concat(formatNum(Math.round(v)));
    }()), /*#__PURE__*/React.createElement("td", {
      className: "p-3 text-right bg-blue-100/60 border-l-2 border-blue-300"
    }, formatUSDb(sumRev(fcst2026))), /*#__PURE__*/React.createElement("td", {
      className: "p-3"
    })), /*#__PURE__*/React.createElement("tr", {
      className: "border-b border-slate-300"
    }, /*#__PURE__*/React.createElement("td", {
      className: "p-3 border-r table-pin-col bg-slate-200 z-20 text-purple-900"
    }, "Jan\u2013Sep 2027 (9M)"), /*#__PURE__*/React.createElement("td", {
      className: "p-3 text-right bg-purple-100/60 border-l-2 border-purple-300"
    }, formatNum(Math.round(sumNG(fcst2027)))), /*#__PURE__*/React.createElement("td", {
      className: "p-3 text-right bg-purple-100/60"
    }, formatNum(Math.round(sumBil(fcst2027)))), /*#__PURE__*/React.createElement("td", {
      className: "p-3 text-right bg-amber-100/60"
    }, formatNum(Math.round(sumNG(fcst2027) - sumBil(fcst2027)))), /*#__PURE__*/React.createElement("td", {
      className: "p-3 bg-amber-100/60"
    }, r18SysLoss.toFixed(1), "%"), /*#__PURE__*/React.createElement("td", {
      className: "p-3 text-right text-slate-400"
    }, "\u2014"), /*#__PURE__*/React.createElement("td", {
      className: "p-3 text-right text-slate-400"
    }, "\u2014"), /*#__PURE__*/React.createElement("td", {
      className: "p-3 text-right bg-purple-100/60 border-l-2 border-purple-300"
    }, formatUSDb(sumRev(fcst2027))), /*#__PURE__*/React.createElement("td", {
      className: "p-3"
    })), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
      className: "p-3 border-r table-pin-col bg-slate-300 z-20"
    }, "18-Month Forecast Total"), /*#__PURE__*/React.createElement("td", {
      className: "p-3 text-right bg-slate-300 border-l-2 border-slate-400"
    }, formatNum(Math.round(sumNG(fcstRows)))), /*#__PURE__*/React.createElement("td", {
      className: "p-3 text-right bg-slate-300"
    }, formatNum(Math.round(sumBil(fcstRows)))), /*#__PURE__*/React.createElement("td", {
      className: "p-3 bg-slate-300",
      colSpan: "5"
    }), /*#__PURE__*/React.createElement("td", {
      className: "p-3 text-right bg-slate-300 border-l-2 border-slate-400"
    }, formatUSDb(sumRev(fcstRows))), /*#__PURE__*/React.createElement("td", {
      className: "p-3 bg-slate-300"
    })))))));
  };

  // ============================================================
  // TAB: DATA ENTRY — Net Gen Actuals + CSV Upload
  // ============================================================
  var renderDataEntryTab = function renderDataEntryTab() {
    // CSV Upload state

    var sb = function () {
      var url = window.EMBEDDED_SUPABASE_URL;
      var key = window.EMBEDDED_SUPABASE_KEY;
      if (!url || !key) return null;
      return window.supabase.createClient(url, key);
    }();
    var showMsg = function showMsg(text) {
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'success';
      setNgMessage({
        text: text,
        type: type
      });
      setTimeout(function () {
        return setNgMessage(null);
      }, 4000);
    };
    var handleSaveNetGen = /*#__PURE__*/function () {
      var _ref44 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1() {
        var _yield$sb$from$upsert, error, _yield$sb$from$select, data, ng, pk;
        return _regenerator().w(function (_context1) {
          while (1) switch (_context1.n) {
            case 0:
              if (sb) {
                _context1.n = 1;
                break;
              }
              return _context1.a(2, showMsg('Supabase not configured', 'error'));
            case 1:
              if (!(!entryNetGen || !entryPeak)) {
                _context1.n = 2;
                break;
              }
              return _context1.a(2, showMsg('Enter both Net Gen MWh and Peak MW', 'error'));
            case 2:
              setIsSavingNG(true);
              _context1.n = 3;
              return sb.from('net_gen_historical').upsert({
                year: entryYear,
                month: entryMonth,
                net_gen_mwh: parseFloat(entryNetGen),
                peak_mw: parseFloat(entryPeak)
              }, {
                onConflict: 'year,month'
              });
            case 3:
              _yield$sb$from$upsert = _context1.v;
              error = _yield$sb$from$upsert.error;
              setIsSavingNG(false);
              if (!error) {
                _context1.n = 4;
                break;
              }
              showMsg('Save failed: ' + error.message, 'error');
              _context1.n = 6;
              break;
            case 4:
              showMsg("\u2713 ".concat(monthNames[entryMonth - 1], " ").concat(entryYear, " saved \u2014 Net Gen: ").concat(formatNum(parseFloat(entryNetGen)), " MWh, Peak: ").concat(entryPeak, " MW"));
              logAuditEvent('NET_GEN_ENTRY', {
                year: entryYear,
                month: entryMonth,
                net_gen_mwh: parseFloat(entryNetGen),
                peak_mw: parseFloat(entryPeak)
              });
              setEntryNetGen('');
              setEntryPeak('');
              // Refresh table
              _context1.n = 5;
              return sb.from('net_gen_historical').select('*').order('year', {
                ascending: false
              }).order('month', {
                ascending: false
              });
            case 5:
              _yield$sb$from$select = _context1.v;
              data = _yield$sb$from$select.data;
              if (data) setNgTableData(data);
              // Refresh global netGenData
              ng = {
                2023: Array(12).fill(0),
                2024: Array(12).fill(0),
                2025: Array(12).fill(0),
                2026: Array(12).fill(0)
              };
              pk = {
                2023: Array(12).fill(0),
                2024: Array(12).fill(0),
                2025: Array(12).fill(0),
                2026: Array(12).fill(0)
              };
              data.forEach(function (r) {
                if (ng[r.year]) {
                  ng[r.year][r.month - 1] = Number(r.net_gen_mwh);
                  pk[r.year][r.month - 1] = Number(r.peak_mw);
                }
              });
              setNetGenData({
                netGen: ng,
                peak: pk,
                loaded: true
              });
            case 6:
              return _context1.a(2);
          }
        }, _callee1);
      }));
      return function handleSaveNetGen() {
        return _ref44.apply(this, arguments);
      };
    }();
    var handleDeleteRow = /*#__PURE__*/function () {
      var _ref45 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee10(year, month) {
        var _yield$sb$from$delete, error, _yield$sb$from$select2, data;
        return _regenerator().w(function (_context10) {
          while (1) switch (_context10.n) {
            case 0:
              if (sb) {
                _context10.n = 1;
                break;
              }
              return _context10.a(2);
            case 1:
              if (confirm("Delete ".concat(monthNames[month - 1], " ").concat(year, "?"))) {
                _context10.n = 2;
                break;
              }
              return _context10.a(2);
            case 2:
              _context10.n = 3;
              return sb.from('net_gen_historical').delete().eq('year', year).eq('month', month);
            case 3:
              _yield$sb$from$delete = _context10.v;
              error = _yield$sb$from$delete.error;
              if (error) {
                _context10.n = 5;
                break;
              }
              logAuditEvent('NET_GEN_DELETE', {
                year: year,
                month: month
              });
              _context10.n = 4;
              return sb.from('net_gen_historical').select('*').order('year', {
                ascending: false
              }).order('month', {
                ascending: false
              });
            case 4:
              _yield$sb$from$select2 = _context10.v;
              data = _yield$sb$from$select2.data;
              if (data) setNgTableData(data);
              showMsg("Deleted ".concat(monthNames[month - 1], " ").concat(year));
            case 5:
              return _context10.a(2);
          }
        }, _callee10);
      }));
      return function handleDeleteRow(_x7, _x8) {
        return _ref45.apply(this, arguments);
      };
    }();
    var handleSaveEdit = /*#__PURE__*/function () {
      var _ref46 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee11() {
        var _yield$sb$from$update, error, _yield$sb$from$select3, data;
        return _regenerator().w(function (_context11) {
          while (1) switch (_context11.n) {
            case 0:
              if (!(!sb || !editingRow)) {
                _context11.n = 1;
                break;
              }
              return _context11.a(2);
            case 1:
              _context11.n = 2;
              return sb.from('net_gen_historical').update({
                net_gen_mwh: parseFloat(editingRow.net_gen_mwh),
                peak_mw: parseFloat(editingRow.peak_mw)
              }).eq('year', editingRow.year).eq('month', editingRow.month);
            case 2:
              _yield$sb$from$update = _context11.v;
              error = _yield$sb$from$update.error;
              if (error) {
                _context11.n = 4;
                break;
              }
              logAuditEvent('NET_GEN_UPDATE', {
                year: editingRow.year,
                month: editingRow.month
              });
              setEditingRow(null);
              _context11.n = 3;
              return sb.from('net_gen_historical').select('*').order('year', {
                ascending: false
              }).order('month', {
                ascending: false
              });
            case 3:
              _yield$sb$from$select3 = _context11.v;
              data = _yield$sb$from$select3.data;
              if (data) setNgTableData(data);
              showMsg('Row updated');
              _context11.n = 5;
              break;
            case 4:
              showMsg('Update failed: ' + error.message, 'error');
            case 5:
              return _context11.a(2);
          }
        }, _callee11);
      }));
      return function handleSaveEdit() {
        return _ref46.apply(this, arguments);
      };
    }();

    // CSV upload to Supabase Storage
    var handleCSVUpload = /*#__PURE__*/function () {
      var _ref47 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee12(file, filename, setUploading) {
        var _yield$sb$storage$fro, error, text, parsed, _t0;
        return _regenerator().w(function (_context12) {
          while (1) switch (_context12.p = _context12.n) {
            case 0:
              if (sb) {
                _context12.n = 1;
                break;
              }
              return _context12.a(2, showMsg('Supabase not configured', 'error'));
            case 1:
              if (file) {
                _context12.n = 2;
                break;
              }
              return _context12.a(2);
            case 2:
              setUploading(true);
              setUploadMessage(null);
              _context12.p = 3;
              _context12.n = 4;
              return sb.storage.from('jps_data').upload(filename, file, {
                upsert: true,
                contentType: 'text/csv'
              });
            case 4:
              _yield$sb$storage$fro = _context12.v;
              error = _yield$sb$storage$fro.error;
              if (!error) {
                _context12.n = 5;
                break;
              }
              throw error;
            case 5:
              setUploadMessage({
                text: "\u2713 ".concat(filename, " uploaded to Supabase. Refresh the page to load the new data."),
                type: 'success'
              });
              // Trigger re-fetch of actuals/budget
              _context12.n = 6;
              return file.text();
            case 6:
              text = _context12.v;
              parsed = parseCSV(text);
              if (filename === 'actuals.csv') {
                setRawActuals(parsed);
                setHasAutoAllocated(false);
              } else {
                setRawBudget(parsed);
                setOriginalBudget(_toConsumableArray(parsed));
                setIsBudgetCommitted(false);
                setHasAutoAllocated(false);
              }
              setUploadMessage({
                text: "\u2713 ".concat(filename, " uploaded and loaded into the dashboard."),
                type: 'success'
              });
              logAuditEvent('CSV_UPLOAD', {
                filename: filename,
                rows: parsed.length
              });
              _context12.n = 8;
              break;
            case 7:
              _context12.p = 7;
              _t0 = _context12.v;
              setUploadMessage({
                text: 'Upload failed: ' + _t0.message,
                type: 'error'
              });
            case 8:
              _context12.p = 8;
              setUploading(false);
              return _context12.f(8);
            case 9:
              return _context12.a(2);
          }
        }, _callee12, null, [[3, 7, 8, 9]]);
      }));
      return function handleCSVUpload(_x9, _x0, _x1) {
        return _ref47.apply(this, arguments);
      };
    }();

    // Group table data by year
    var groupedByYear = {};
    ngTableData.forEach(function (r) {
      if (!groupedByYear[r.year]) groupedByYear[r.year] = [];
      groupedByYear[r.year].push(r);
    });
    return /*#__PURE__*/React.createElement("div", {
      className: "p-6 h-full overflow-y-auto custom-scroll space-y-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-xl border p-5 shadow-sm"
    }, /*#__PURE__*/React.createElement("h2", {
      className: "text-base font-bold text-slate-800 flex items-center gap-2"
    }, /*#__PURE__*/React.createElement(Icons.Save, null), " Data Entry"), /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-slate-500 mt-1"
    }, "Enter net generation actuals, upload CSVs, and manage historical data \u2014 all synced directly to Supabase.")), ngMessage && /*#__PURE__*/React.createElement("div", {
      className: "rounded-xl p-4 font-bold text-sm flex items-center gap-3 shadow-sm ".concat(ngMessage.type === 'error' ? 'bg-red-50 border border-red-200 text-red-700' : 'bg-emerald-50 border border-emerald-200 text-emerald-700')
    }, /*#__PURE__*/React.createElement("span", null, ngMessage.type === 'error' ? '⚠️' : '✅'), ngMessage.text), /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-xl border shadow-sm overflow-hidden"
    }, /*#__PURE__*/React.createElement("div", {
      className: "p-4 bg-slate-800 text-white font-bold flex items-center gap-2"
    }, /*#__PURE__*/React.createElement(Icons.Wind, null), " Net Generation Monthly Actuals"), /*#__PURE__*/React.createElement("div", {
      className: "p-5"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-slate-500 mb-4"
    }, "Enter or update a monthly net generation figure. Saves directly to ", /*#__PURE__*/React.createElement("code", {
      className: "bg-slate-100 px-1 rounded"
    }, "net_gen_historical"), " table. Used by the Net Gen Forecast and Rolling 18M tabs."), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-2 md:grid-cols-5 gap-3 mb-4"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "text-[10px] font-bold uppercase text-slate-500 block mb-1"
    }, "Year"), /*#__PURE__*/React.createElement("select", {
      value: entryYear,
      onChange: function onChange(e) {
        return setEntryYear(parseInt(e.target.value));
      },
      className: "w-full border rounded-lg px-3 py-2.5 text-sm outline-none focus:border-blue-400 bg-white font-bold"
    }, [2023, 2024, 2025, 2026, 2027].map(function (y) {
      return /*#__PURE__*/React.createElement("option", {
        key: y,
        value: y
      }, y);
    }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "text-[10px] font-bold uppercase text-slate-500 block mb-1"
    }, "Month"), /*#__PURE__*/React.createElement("select", {
      value: entryMonth,
      onChange: function onChange(e) {
        return setEntryMonth(parseInt(e.target.value));
      },
      className: "w-full border rounded-lg px-3 py-2.5 text-sm outline-none focus:border-blue-400 bg-white font-bold"
    }, monthNames.map(function (m, i) {
      return /*#__PURE__*/React.createElement("option", {
        key: i,
        value: i + 1
      }, m);
    }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "text-[10px] font-bold uppercase text-slate-500 block mb-1"
    }, "Net Gen (MWh)"), /*#__PURE__*/React.createElement("input", {
      type: "number",
      value: entryNetGen,
      onChange: function onChange(e) {
        return setEntryNetGen(e.target.value);
      },
      placeholder: "e.g. 385000",
      className: "w-full border rounded-lg px-3 py-2.5 text-sm outline-none focus:border-blue-400 font-medium"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "text-[10px] font-bold uppercase text-slate-500 block mb-1"
    }, "Peak Demand (MW)"), /*#__PURE__*/React.createElement("input", {
      type: "number",
      value: entryPeak,
      onChange: function onChange(e) {
        return setEntryPeak(e.target.value);
      },
      placeholder: "e.g. 625.5",
      className: "w-full border rounded-lg px-3 py-2.5 text-sm outline-none focus:border-blue-400 font-medium"
    })), /*#__PURE__*/React.createElement("div", {
      className: "flex items-end"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: handleSaveNetGen,
      disabled: isSavingNG || !entryNetGen || !entryPeak,
      className: "w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-40 text-white py-2.5 px-4 rounded-lg font-bold text-sm transition shadow flex items-center justify-center gap-2"
    }, isSavingNG ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Icons.RefreshCw, null), " Saving...") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Icons.Save, null), " Save")))), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-slate-400"
    }, "If the month already exists, it will be overwritten with the new values."))), /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-xl border shadow-sm overflow-hidden"
    }, /*#__PURE__*/React.createElement("div", {
      className: "p-4 bg-slate-50 border-b flex justify-between items-center"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "font-bold text-slate-800"
    }, "Net Generation History (", ngTableData.length, " records)"), isLoadingNgTable && /*#__PURE__*/React.createElement("span", {
      className: "text-xs text-slate-400 animate-pulse"
    }, "Loading...")), /*#__PURE__*/React.createElement("div", {
      className: "overflow-x-auto max-h-[220px] overflow-y-auto custom-scroll"
    }, /*#__PURE__*/React.createElement("table", {
      className: "w-full text-sm"
    }, /*#__PURE__*/React.createElement("thead", {
      className: "sticky top-0 bg-slate-100 z-10"
    }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
      className: "p-3 text-left font-bold text-slate-600"
    }, "Year"), /*#__PURE__*/React.createElement("th", {
      className: "p-3 text-left font-bold text-slate-600"
    }, "Month"), /*#__PURE__*/React.createElement("th", {
      className: "p-3 text-right font-bold text-blue-700"
    }, "Net Gen (MWh)"), /*#__PURE__*/React.createElement("th", {
      className: "p-3 text-right font-bold text-purple-700"
    }, "Peak MW"), /*#__PURE__*/React.createElement("th", {
      className: "p-3 text-right font-bold text-emerald-700"
    }, "Billed Sales Est."), /*#__PURE__*/React.createElement("th", {
      className: "p-3 w-24"
    }))), /*#__PURE__*/React.createElement("tbody", null, ngTableData.length === 0 && !isLoadingNgTable && /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
      colSpan: "6",
      className: "p-6 text-center text-slate-400"
    }, "No data found. Add records above.")), Object.keys(groupedByYear).sort(function (a, b) {
      return b - a;
    }).map(function (year) {
      return /*#__PURE__*/React.createElement(React.Fragment, {
        key: year
      }, /*#__PURE__*/React.createElement("tr", {
        className: "bg-slate-800"
      }, /*#__PURE__*/React.createElement("td", {
        colSpan: "6",
        className: "px-3 py-1.5 text-xs font-black text-white uppercase tracking-widest"
      }, year)), groupedByYear[year].sort(function (a, b) {
        return b.month - a.month;
      }).map(function (row) {
        var isEditing = editingRow && editingRow.year === row.year && editingRow.month === row.month;
        var billedEst = row.net_gen_mwh * 0.74; // ~26% system loss
        var isHurr = row.year === 2025 && row.month >= 10 && row.net_gen_mwh < 340000;
        return /*#__PURE__*/React.createElement("tr", {
          key: "".concat(row.year, "-").concat(row.month),
          className: "border-b hover:bg-slate-50 ".concat(isEditing ? 'bg-blue-50' : '')
        }, /*#__PURE__*/React.createElement("td", {
          className: "p-3 font-bold text-slate-700"
        }, row.year), /*#__PURE__*/React.createElement("td", {
          className: "p-3 text-slate-700"
        }, monthNames[row.month - 1], isHurr && /*#__PURE__*/React.createElement("span", {
          className: "ml-2 text-[9px] bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded font-bold"
        }, "HURR")), /*#__PURE__*/React.createElement("td", {
          className: "p-3 text-right font-bold text-blue-700"
        }, isEditing ? /*#__PURE__*/React.createElement("input", {
          type: "number",
          value: editingRow.net_gen_mwh,
          onChange: function onChange(e) {
            return setEditingRow(function (p) {
              return _objectSpread(_objectSpread({}, p), {}, {
                net_gen_mwh: e.target.value
              });
            });
          },
          className: "w-28 border rounded px-2 py-1 text-right text-sm outline-none focus:border-blue-400"
        }) : formatNum(Math.round(row.net_gen_mwh))), /*#__PURE__*/React.createElement("td", {
          className: "p-3 text-right text-purple-600"
        }, isEditing ? /*#__PURE__*/React.createElement("input", {
          type: "number",
          value: editingRow.peak_mw,
          onChange: function onChange(e) {
            return setEditingRow(function (p) {
              return _objectSpread(_objectSpread({}, p), {}, {
                peak_mw: e.target.value
              });
            });
          },
          className: "w-20 border rounded px-2 py-1 text-right text-sm outline-none focus:border-purple-400"
        }) : row.peak_mw.toFixed(1)), /*#__PURE__*/React.createElement("td", {
          className: "p-3 text-right text-emerald-600 text-xs"
        }, formatNum(Math.round(billedEst))), /*#__PURE__*/React.createElement("td", {
          className: "p-3 text-right"
        }, isEditing ? /*#__PURE__*/React.createElement("div", {
          className: "flex items-center gap-2 justify-end"
        }, /*#__PURE__*/React.createElement("button", {
          onClick: handleSaveEdit,
          className: "text-xs bg-emerald-600 text-white px-2.5 py-1 rounded font-bold hover:bg-emerald-700 transition"
        }, "Save"), /*#__PURE__*/React.createElement("button", {
          onClick: function onClick() {
            return setEditingRow(null);
          },
          className: "text-xs bg-slate-200 text-slate-600 px-2.5 py-1 rounded font-bold hover:bg-slate-300 transition"
        }, "Cancel")) : /*#__PURE__*/React.createElement("div", {
          className: "flex items-center gap-2 justify-end"
        }, /*#__PURE__*/React.createElement("button", {
          onClick: function onClick() {
            return setEditingRow(_objectSpread({}, row));
          },
          className: "text-slate-400 hover:text-blue-600 transition p-1",
          title: "Edit"
        }, /*#__PURE__*/React.createElement(Icons.Eye, null)), /*#__PURE__*/React.createElement("button", {
          onClick: function onClick() {
            return handleDeleteRow(row.year, row.month);
          },
          className: "text-slate-400 hover:text-red-500 transition p-1",
          title: "Delete"
        }, /*#__PURE__*/React.createElement(Icons.Trash, null)))));
      }));
    }))))), /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-xl border shadow-sm overflow-hidden"
    }, /*#__PURE__*/React.createElement("div", {
      className: "p-4 bg-slate-800 text-white font-bold flex items-center gap-2"
    }, /*#__PURE__*/React.createElement(Icons.CloudUp, null), " Upload Data Files to Supabase"), /*#__PURE__*/React.createElement("div", {
      className: "p-5 space-y-4"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-slate-500"
    }, "Upload new Actuals or Budget CSVs. Files go directly to the ", /*#__PURE__*/React.createElement("code", {
      className: "bg-slate-100 px-1 rounded"
    }, "jps_data"), " storage bucket and reload into the dashboard immediately."), uploadMessage && /*#__PURE__*/React.createElement("div", {
      className: "rounded-lg p-3 font-bold text-sm flex items-center gap-2 ".concat(uploadMessage.type === 'error' ? 'bg-red-50 border border-red-200 text-red-700' : 'bg-emerald-50 border border-emerald-200 text-emerald-700')
    }, uploadMessage.type === 'error' ? '⚠️' : '✅', " ", uploadMessage.text), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-1 md:grid-cols-2 gap-5"
    }, /*#__PURE__*/React.createElement("div", {
      className: "border-2 border-dashed rounded-xl p-5 text-center transition ".concat(uploadingActuals ? 'border-blue-300 bg-blue-50' : 'border-slate-200 hover:border-blue-300'),
      onDragOver: function onDragOver(e) {
        e.preventDefault();
      },
      onDrop: function onDrop(e) {
        e.preventDefault();
        var f = e.dataTransfer.files[0];
        if (f) handleCSVUpload(f, 'actuals.csv', setUploadingActuals);
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-blue-500 flex justify-center mb-2"
    }, /*#__PURE__*/React.createElement(Icons.Database, null)), /*#__PURE__*/React.createElement("h4", {
      className: "font-bold text-slate-700 mb-1"
    }, "Actuals CSV"), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-slate-400 mb-3"
    }, "Drag & drop or click to upload", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("code", {
      className: "text-slate-500"
    }, "actuals.csv")), /*#__PURE__*/React.createElement("label", {
      className: "cursor-pointer inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-bold text-sm transition shadow ".concat(uploadingActuals ? 'opacity-50 pointer-events-none' : '')
    }, uploadingActuals ? 'Uploading...' : 'Choose File', /*#__PURE__*/React.createElement("input", {
      type: "file",
      accept: ".csv",
      className: "hidden",
      onChange: function onChange(e) {
        if (e.target.files[0]) handleCSVUpload(e.target.files[0], 'actuals.csv', setUploadingActuals);
        e.target.value = '';
      }
    })), rawActuals.length > 0 && /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-emerald-600 font-bold mt-2"
    }, "\u2713 ", rawActuals.length.toLocaleString(), " rows loaded")), /*#__PURE__*/React.createElement("div", {
      className: "border-2 border-dashed rounded-xl p-5 text-center transition ".concat(uploadingBudget ? 'border-purple-300 bg-purple-50' : 'border-slate-200 hover:border-purple-300'),
      onDragOver: function onDragOver(e) {
        e.preventDefault();
      },
      onDrop: function onDrop(e) {
        e.preventDefault();
        var f = e.dataTransfer.files[0];
        if (f) handleCSVUpload(f, 'budget.csv', setUploadingBudget);
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-purple-500 flex justify-center mb-2"
    }, /*#__PURE__*/React.createElement(Icons.Activity, null)), /*#__PURE__*/React.createElement("h4", {
      className: "font-bold text-slate-700 mb-1"
    }, "Budget CSV"), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-slate-400 mb-3"
    }, "Drag & drop or click to upload", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("code", {
      className: "text-slate-500"
    }, "budget.csv")), /*#__PURE__*/React.createElement("label", {
      className: "cursor-pointer inline-block bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-bold text-sm transition shadow ".concat(uploadingBudget ? 'opacity-50 pointer-events-none' : '')
    }, uploadingBudget ? 'Uploading...' : 'Choose File', /*#__PURE__*/React.createElement("input", {
      type: "file",
      accept: ".csv",
      className: "hidden",
      onChange: function onChange(e) {
        if (e.target.files[0]) handleCSVUpload(e.target.files[0], 'budget.csv', setUploadingBudget);
        e.target.value = '';
      }
    })), rawBudget.length > 0 && /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-emerald-600 font-bold mt-2"
    }, "\u2713 ", rawBudget.length.toLocaleString(), " rows loaded"))), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-slate-400"
    }, "Files are stored in Supabase and auto-loaded on next app open for all team members."))));
  };

  // ============================================================
  // TAB: VALIDATION — Dropped Accounts, Deflections, Anomalies
  // ============================================================
  var renderValidationTab = function renderValidationTab() {
    var maxActMonth26 = Math.max.apply(Math, [0].concat(_toConsumableArray(actuals.filter(function (a) {
      return a.year === budgetYear;
    }).map(function (a) {
      return a.month;
    }))));

    // ── DROPPED ACCOUNTS ──
    // In 2025 actuals but missing from 2026 actuals entirely
    var accts2025 = new Set(actuals.filter(function (a) {
      return a.year === priorYear;
    }).map(function (a) {
      return a.acct;
    }));
    var accts2026 = new Set(actuals.filter(function (a) {
      return a.year === budgetYear;
    }).map(function (a) {
      return a.acct;
    }));
    var droppedAccts = _toConsumableArray(accts2025).filter(function (a) {
      return !accts2026.has(a) && a && a !== 'Unassigned';
    });
    var droppedDetails = droppedAccts.map(function (acct) {
      var _rows$2, _rows$3, _rows$4, _rows$5;
      var rows = actuals.filter(function (a) {
        return a.year === priorYear && a.acct === acct;
      });
      var totalKwh = rows.reduce(function (s, d) {
        return s + d.kwh;
      }, 0);
      var rc = ((_rows$2 = rows[0]) === null || _rows$2 === void 0 ? void 0 : _rows$2.rc) || '—';
      var name = ((_rows$3 = rows[0]) === null || _rows$3 === void 0 ? void 0 : _rows$3.name) || acct;
      var industry = ((_rows$4 = rows[0]) === null || _rows$4 === void 0 ? void 0 : _rows$4.industry) || '—';
      var parish = ((_rows$5 = rows[0]) === null || _rows$5 === void 0 ? void 0 : _rows$5.parish) || '—';
      var lastMonth = Math.max.apply(Math, _toConsumableArray(rows.map(function (r) {
        return r.month;
      })));
      return {
        acct: acct,
        name: name,
        rc: rc,
        industry: industry,
        parish: parish,
        totalKwh: totalKwh,
        lastMonth: lastMonth
      };
    });
    droppedDetails = sortArray(droppedDetails, droppedSort);

    // ── NO HISTORY in allocation ──
    var noHistoryRows = allocationResults.filter(function (r) {
      return r.name === 'NO HISTORY' || r.name === 'ZERO HISTORY' || r.acct === 'UNALLOCATED';
    });
    var uniqueNoHistory = [];
    var nhSeen = new Set();
    noHistoryRows.forEach(function (r) {
      var k = "".concat(r.rc, "|").concat(r.parish);
      if (!nhSeen.has(k)) {
        nhSeen.add(k);
        uniqueNoHistory.push({
          rc: r.rc,
          parish: r.parish,
          totalBudget: 0,
          months: 0
        });
      }
      var item = uniqueNoHistory.find(function (u) {
        return u.rc === r.rc && u.parish === r.parish;
      });
      if (item) {
        item.totalBudget += r.finalA;
        item.months++;
      }
    });
    uniqueNoHistory.sort(function (a, b) {
      return b.totalBudget - a.totalBudget;
    });

    // ── GID DEFLECTIONS ──
    // Customers with YTD 2026 consumption < 80% of same period 2025
    var deflections = [];
    if (maxActMonth26 > 0) {
      var custMap = {};
      actuals.filter(function (a) {
        return a.month <= maxActMonth26;
      }).forEach(function (a) {
        if (!a.acct || a.acct === 'Unassigned') return;
        if (!custMap[a.acct]) custMap[a.acct] = {
          name: a.name,
          rc: a.rc,
          industry: a.industry,
          parish: a.parish,
          kwh25: 0,
          kwh26: 0
        };
        if (a.year === priorYear) custMap[a.acct].kwh25 += a.kwh;
        if (a.year === budgetYear) custMap[a.acct].kwh26 += a.kwh;
      });
      Object.entries(custMap).forEach(function (_ref48) {
        var _ref49 = _slicedToArray(_ref48, 2),
          acct = _ref49[0],
          d = _ref49[1];
        if (d.kwh25 > 0 && d.kwh26 < d.kwh25 * 0.80) {
          var pct = (d.kwh26 - d.kwh25) / d.kwh25 * 100;
          deflections.push({
            acct: acct,
            name: d.name,
            rc: d.rc,
            industry: d.industry,
            parish: d.parish,
            kwh25: d.kwh25,
            kwh26: d.kwh26,
            pct: pct.toFixed(1)
          });
        }
      });
      deflections.sort(function(a,b){return parseFloat(a.pct)-parseFloat(b.pct);}); deflections = sortArray(deflections, deflSort);
    }

    // ── ANOMALIES ──
    // Month-on-month swings > 25% for any customer in 2026
    var anomalies = [];
    var custMonths = {};
    actuals.filter(function (a) {
      return a.year === budgetYear;
    }).forEach(function (a) {
      if (!a.acct || a.acct === 'Unassigned') return;
      if (!custMonths[a.acct]) custMonths[a.acct] = {
        name: a.name,
        rc: a.rc,
        months: {}
      };
      custMonths[a.acct].months[a.month] = (custMonths[a.acct].months[a.month] || 0) + a.kwh;
    });
    Object.entries(custMonths).forEach(function (_ref50) {
      var _ref51 = _slicedToArray(_ref50, 2),
        acct = _ref51[0],
        d = _ref51[1];
      var months = Object.keys(d.months).map(Number).sort(function (a, b) {
        return a - b;
      });
      for (var i = 1; i < months.length; i++) {
        var prev = d.months[months[i - 1]];
        var curr = d.months[months[i]];
        if (prev > 0) {
          var swing = (curr - prev) / prev * 100;
          if (Math.abs(swing) > 25) {
            anomalies.push({
              acct: acct,
              name: d.name,
              rc: d.rc,
              fromMonth: monthNames[months[i - 1] - 1],
              toMonth: monthNames[months[i] - 1],
              from: prev,
              to: curr,
              swing: swing.toFixed(1)
            });
          }
        }
      }
    });
    anomalies.sort(function(a,b){return Math.abs(parseFloat(b.swing))-Math.abs(parseFloat(a.swing));}); anomalies = sortArray(anomalies, anomSort);
    var totalDroppedKwh = droppedDetails.reduce(function (s, d) {
      return s + d.totalKwh;
    }, 0);
    var totalDeflectedKwh = deflections.reduce(function (s, d) {
      return s + (d.kwh25 - d.kwh26);
    }, 0);
    return /*#__PURE__*/React.createElement("div", {
      className: "p-4 h-full overflow-y-auto custom-scroll space-y-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-xl border p-3 shadow-sm flex items-center justify-between flex-wrap gap-3"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
      className: "text-base font-bold text-slate-800 flex items-center gap-2"
    }, /*#__PURE__*/React.createElement(Icons.Activity, null), " Validation & Intelligence"), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-slate-500"
    }, "Dropped accounts, GID deflections, anomalies \u2014 YTD ", maxActMonth26 > 0 ? "Jan\u2013".concat(monthNames[maxActMonth26 - 1], " 2026") : '2026')), /*#__PURE__*/React.createElement("div", {
      className: "flex gap-3 text-xs"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-red-50 border border-red-200 rounded-lg px-3 py-2 text-center"
    }, /*#__PURE__*/React.createElement("div", {
      className: "font-black text-red-700"
    }, droppedDetails.length), /*#__PURE__*/React.createElement("div", {
      className: "text-red-600"
    }, "Dropped Accts")), /*#__PURE__*/React.createElement("div", {
      className: "bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 text-center"
    }, /*#__PURE__*/React.createElement("div", {
      className: "font-black text-amber-700"
    }, deflections.length), /*#__PURE__*/React.createElement("div", {
      className: "text-amber-600"
    }, "Deflections <80%")), /*#__PURE__*/React.createElement("div", {
      className: "bg-blue-50 border border-blue-200 rounded-lg px-3 py-2 text-center"
    }, /*#__PURE__*/React.createElement("div", {
      className: "font-black text-blue-700"
    }, uniqueNoHistory.length), /*#__PURE__*/React.createElement("div", {
      className: "text-blue-600"
    }, "No History Groups")), /*#__PURE__*/React.createElement("div", {
      className: "bg-purple-50 border border-purple-200 rounded-lg px-3 py-2 text-center"
    }, /*#__PURE__*/React.createElement("div", {
      className: "font-black text-purple-700"
    }, anomalies.length), /*#__PURE__*/React.createElement("div", {
      className: "text-purple-600"
    }, "Anomalies >25%")))), /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-xl border shadow-sm overflow-hidden"
    }, /*#__PURE__*/React.createElement("div", {
      className: "p-3 bg-red-700 text-white font-bold text-xs flex justify-between items-center"
    }, /*#__PURE__*/React.createElement("span", null, "\uD83D\uDD34 Dropped Accounts \u2014 In 2025 Actuals, Missing from 2026 (", droppedDetails.length, " accounts \xB7 ", (totalDroppedKwh / 1000000).toFixed(2), " GWh lost)"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return exportToExcel(droppedDetails.map(function (d) {
          return {
            Account: d.acct,
            Name: d.name,
            RC: d.rc,
            Industry: d.industry,
            Parish: d.parish,
            kWh_2025: Math.round(d.totalKwh),
            Last_Active_Month: monthNames[d.lastMonth - 1]
          };
        }), 'Dropped_Accounts');
      },
      className: "text-[10px] bg-white/20 hover:bg-white/30 px-2 py-0.5 rounded transition"
    }, "\u2B07 Excel")), /*#__PURE__*/React.createElement("div", {
      className: "overflow-x-auto max-h-[250px] overflow-y-auto custom-scroll"
    }, /*#__PURE__*/React.createElement("table", {
      className: "w-full text-xs"
    }, /*#__PURE__*/React.createElement("thead", {
      className: "sticky top-0 bg-slate-100"
    }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
      className: "p-2 text-left"
    }, "Account"), /*#__PURE__*/React.createElement("th", {
      className: "p-2 text-left"
    }, "Name"), /*#__PURE__*/React.createElement("th", {
      className: "p-2 text-left"
    }, "RC"), /*#__PURE__*/React.createElement("th", {
      className: "p-2 text-left"
    }, "Industry"), /*#__PURE__*/React.createElement("th", {
      className: "p-2 text-left"
    }, "Parish"), /*#__PURE__*/React.createElement("th", {
      className: "p-2 text-right"
    }, "2025 kWh"), /*#__PURE__*/React.createElement("th", {
      className: "p-2 text-right"
    }, "Last Active"))), /*#__PURE__*/React.createElement("tbody", null, droppedDetails.length === 0 && /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
      colSpan: "7",
      className: "p-4 text-center text-slate-400"
    }, "No dropped accounts detected \u2713")), droppedDetails.map(function (d, i) {
      return /*#__PURE__*/React.createElement("tr", {
        key: i,
        className: "border-b hover:bg-red-50/30"
      }, /*#__PURE__*/React.createElement("td", {
        className: "p-2 font-mono text-slate-500"
      }, d.acct), /*#__PURE__*/React.createElement("td", {
        className: "p-2 font-medium text-slate-700 max-w-[160px] truncate"
      }, d.name), /*#__PURE__*/React.createElement("td", {
        className: "p-2"
      }, /*#__PURE__*/React.createElement("span", {
        className: "bg-red-100 text-red-700 px-1.5 rounded font-bold"
      }, d.rc)), /*#__PURE__*/React.createElement("td", {
        className: "p-2 text-slate-500"
      }, d.industry), /*#__PURE__*/React.createElement("td", {
        className: "p-2 text-slate-500"
      }, d.parish), /*#__PURE__*/React.createElement("td", {
        className: "p-2 text-right font-bold text-red-600"
      }, formatNum(Math.round(d.totalKwh))), /*#__PURE__*/React.createElement("td", {
        className: "p-2 text-right text-slate-500"
      }, monthNames[d.lastMonth - 1]));
    })), droppedDetails.length > 0 && /*#__PURE__*/React.createElement("tfoot", {
      className: "bg-slate-100 font-bold sticky bottom-0"
    }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
      colSpan: "5",
      className: "p-2"
    }, "TOTAL"), /*#__PURE__*/React.createElement("td", {
      className: "p-2 text-right text-red-700"
    }, formatNum(Math.round(totalDroppedKwh))), /*#__PURE__*/React.createElement("td", null)))))), /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-xl border shadow-sm overflow-hidden"
    }, /*#__PURE__*/React.createElement("div", {
      className: "p-3 bg-amber-600 text-white font-bold text-xs flex justify-between items-center"
    }, /*#__PURE__*/React.createElement("span", null, "\uD83D\uDFE1 GID Deflections \u2014 YTD 2026 <80% of YTD 2025 (", deflections.length, " accounts \xB7 ", (totalDeflectedKwh / 1000000).toFixed(2), " GWh at risk)"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return exportToExcel(deflections.map(function (d) {
          return {
            Account: d.acct,
            Name: d.name,
            RC: d.rc,
            Industry: d.industry,
            Parish: d.parish,
            YTD_2025_kWh: Math.round(d.kwh25),
            YTD_2026_kWh: Math.round(d.kwh26),
            Change_Pct: d.pct + '%'
          };
        }), 'GID_Deflections');
      },
      className: "text-[10px] bg-white/20 hover:bg-white/30 px-2 py-0.5 rounded transition"
    }, "\u2B07 Excel")), /*#__PURE__*/React.createElement("div", {
      className: "overflow-x-auto max-h-[250px] overflow-y-auto custom-scroll"
    }, /*#__PURE__*/React.createElement("table", {
      className: "w-full text-xs"
    }, /*#__PURE__*/React.createElement("thead", {
      className: "sticky top-0 bg-slate-100"
    }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
      className: "p-2 text-left"
    }, "Account"), /*#__PURE__*/React.createElement("th", {
      className: "p-2 text-left"
    }, "Name"), /*#__PURE__*/React.createElement("th", {
      className: "p-2 text-left"
    }, "RC"), /*#__PURE__*/React.createElement("th", {
      className: "p-2 text-left"
    }, "Industry"), /*#__PURE__*/React.createElement("th", {
      className: "p-2 text-right"
    }, "YTD 2025"), /*#__PURE__*/React.createElement("th", {
      className: "p-2 text-right"
    }, "YTD 2026"), /*#__PURE__*/React.createElement("th", {
      className: "p-2 text-right"
    }, "Change"), /*#__PURE__*/React.createElement("th", {
      className: "p-2 text-right"
    }, "kWh Lost"))), /*#__PURE__*/React.createElement("tbody", null, deflections.length === 0 && /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
      colSpan: "8",
      className: "p-4 text-center text-slate-400"
    }, maxActMonth26 === 0 ? 'No 2026 actuals loaded yet' : 'No deflections >20% detected ✓')), deflections.map(function (d, i) {
      return /*#__PURE__*/React.createElement("tr", {
        key: i,
        className: "border-b hover:bg-amber-50/30 ".concat(parseFloat(d.pct) < -40 ? 'bg-red-50/20' : '')
      }, /*#__PURE__*/React.createElement("td", {
        className: "p-2 font-mono text-slate-500"
      }, d.acct), /*#__PURE__*/React.createElement("td", {
        className: "p-2 font-medium text-slate-700 max-w-[160px] truncate"
      }, d.name), /*#__PURE__*/React.createElement("td", {
        className: "p-2"
      }, /*#__PURE__*/React.createElement("span", {
        className: "bg-amber-100 text-amber-700 px-1.5 rounded font-bold"
      }, d.rc)), /*#__PURE__*/React.createElement("td", {
        className: "p-2 text-slate-500"
      }, d.industry), /*#__PURE__*/React.createElement("td", {
        className: "p-2 text-right text-slate-500"
      }, formatNum(Math.round(d.kwh25))), /*#__PURE__*/React.createElement("td", {
        className: "p-2 text-right font-bold text-amber-700"
      }, formatNum(Math.round(d.kwh26))), /*#__PURE__*/React.createElement("td", {
        className: "p-2 text-right font-black text-red-600"
      }, d.pct, "%"), /*#__PURE__*/React.createElement("td", {
        className: "p-2 text-right text-red-500"
      }, formatNum(Math.round(d.kwh25 - d.kwh26))));
    }))))), uniqueNoHistory.length > 0 && /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-xl border shadow-sm overflow-hidden"
    }, /*#__PURE__*/React.createElement("div", {
      className: "p-3 bg-blue-700 text-white font-bold text-xs flex justify-between items-center"
    }, /*#__PURE__*/React.createElement("span", null, "\uD83D\uDD35 Unresolved Budget Groups \u2014 No Allocation History (", uniqueNoHistory.length, " RC/Parish combinations)"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return exportToExcel(uniqueNoHistory.map(function (d) {
          return {
            RC: d.rc,
            Parish: d.parish,
            Budget_kWh: Math.round(d.totalBudget),
            Months: d.months
          };
        }), 'No_History_Groups');
      },
      className: "text-[10px] bg-white/20 hover:bg-white/30 px-2 py-0.5 rounded transition"
    }, "\u2B07 Excel")), /*#__PURE__*/React.createElement("div", {
      className: "overflow-x-auto max-h-[200px] overflow-y-auto custom-scroll"
    }, /*#__PURE__*/React.createElement("table", {
      className: "w-full text-xs"
    }, /*#__PURE__*/React.createElement("thead", {
      className: "sticky top-0 bg-slate-100"
    }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
      className: "p-2 text-left"
    }, "RC"), /*#__PURE__*/React.createElement("th", {
      className: "p-2 text-left"
    }, "Parish"), /*#__PURE__*/React.createElement("th", {
      className: "p-2 text-right"
    }, "Budget kWh"), /*#__PURE__*/React.createElement("th", {
      className: "p-2 text-right"
    }, "Months Affected"), /*#__PURE__*/React.createElement("th", {
      className: "p-2 text-left"
    }, "Action"))), /*#__PURE__*/React.createElement("tbody", null, uniqueNoHistory.map(function (d, i) {
      return /*#__PURE__*/React.createElement("tr", {
        key: i,
        className: "border-b hover:bg-blue-50/30"
      }, /*#__PURE__*/React.createElement("td", {
        className: "p-2 font-bold text-blue-700"
      }, d.rc), /*#__PURE__*/React.createElement("td", {
        className: "p-2 text-slate-600"
      }, d.parish), /*#__PURE__*/React.createElement("td", {
        className: "p-2 text-right font-bold"
      }, formatNum(Math.round(d.totalBudget))), /*#__PURE__*/React.createElement("td", {
        className: "p-2 text-right text-slate-500"
      }, d.months), /*#__PURE__*/React.createElement("td", {
        className: "p-2 text-blue-600 text-[10px]"
      }, "Add account in Customer Data tab"));
    }))))), /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-xl border shadow-sm overflow-hidden"
    }, /*#__PURE__*/React.createElement("div", {
      className: "p-3 bg-purple-700 text-white font-bold text-xs flex justify-between items-center"
    }, /*#__PURE__*/React.createElement("span", null, "\uD83D\uDFE3 Month-on-Month Anomalies \u2014 Swings >25% in 2026 (", anomalies.length, " events)"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return exportToExcel(anomalies.map(function (d) {
          return {
            Account: d.acct,
            Name: d.name,
            RC: d.rc,
            From_Month: d.fromMonth,
            To_Month: d.toMonth,
            From_kWh: Math.round(d.from),
            To_kWh: Math.round(d.to),
            Swing_Pct: d.swing + '%'
          };
        }), 'Anomalies');
      },
      className: "text-[10px] bg-white/20 hover:bg-white/30 px-2 py-0.5 rounded transition"
    }, "\u2B07 Excel")), /*#__PURE__*/React.createElement("div", {
      className: "overflow-x-auto max-h-[250px] overflow-y-auto custom-scroll"
    }, /*#__PURE__*/React.createElement("table", {
      className: "w-full text-xs"
    }, /*#__PURE__*/React.createElement("thead", {
      className: "sticky top-0 bg-slate-100"
    }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
      className: "p-2 text-left"
    }, "Account"), /*#__PURE__*/React.createElement("th", {
      className: "p-2 text-left"
    }, "Name"), /*#__PURE__*/React.createElement("th", {
      className: "p-2 text-left"
    }, "RC"), /*#__PURE__*/React.createElement("th", {
      className: "p-2 text-left"
    }, "From"), /*#__PURE__*/React.createElement("th", {
      className: "p-2 text-left"
    }, "To"), /*#__PURE__*/React.createElement("th", {
      className: "p-2 text-right"
    }, "From kWh"), /*#__PURE__*/React.createElement("th", {
      className: "p-2 text-right"
    }, "To kWh"), /*#__PURE__*/React.createElement("th", {
      className: "p-2 text-right"
    }, "Swing"))), /*#__PURE__*/React.createElement("tbody", null, anomalies.length === 0 && /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
      colSpan: "8",
      className: "p-4 text-center text-slate-400"
    }, maxActMonth26 === 0 ? 'No 2026 actuals loaded' : 'No anomalies >25% detected ✓')), anomalies.slice(0, 50).map(function (d, i) {
      return /*#__PURE__*/React.createElement("tr", {
        key: i,
        className: "border-b hover:bg-purple-50/30"
      }, /*#__PURE__*/React.createElement("td", {
        className: "p-2 font-mono text-slate-500"
      }, d.acct), /*#__PURE__*/React.createElement("td", {
        className: "p-2 font-medium text-slate-700 max-w-[140px] truncate"
      }, d.name), /*#__PURE__*/React.createElement("td", {
        className: "p-2"
      }, /*#__PURE__*/React.createElement("span", {
        className: "bg-purple-100 text-purple-700 px-1.5 rounded font-bold"
      }, d.rc)), /*#__PURE__*/React.createElement("td", {
        className: "p-2 text-slate-500"
      }, d.fromMonth), /*#__PURE__*/React.createElement("td", {
        className: "p-2 text-slate-500"
      }, d.toMonth), /*#__PURE__*/React.createElement("td", {
        className: "p-2 text-right text-slate-500"
      }, formatNum(Math.round(d.from))), /*#__PURE__*/React.createElement("td", {
        className: "p-2 text-right font-bold"
      }, formatNum(Math.round(d.to))), /*#__PURE__*/React.createElement("td", {
        className: "p-2 text-right font-black ".concat(parseFloat(d.swing) > 0 ? 'text-emerald-600' : 'text-red-600')
      }, d.swing > 0 ? '+' : '', d.swing, "%"));
    }))))));
  };

  // ============================================================
  // TAB: AUDIT LOG
  // ============================================================
  var renderAuditLogTab = function renderAuditLogTab() {
    // Audit entries loaded by top-level useEffect

    var ACTION_COLORS = {
      'AUTO_ALLOCATION': 'bg-blue-100 text-blue-700',
      'SAVE_SCENARIO': 'bg-emerald-100 text-emerald-700',
      'NET_GEN_ENTRY': 'bg-purple-100 text-purple-700',
      'CSV_UPLOAD': 'bg-amber-100 text-amber-700',
      'NET_GEN_DELETE': 'bg-red-100 text-red-700',
      'NET_GEN_UPDATE': 'bg-orange-100 text-orange-700'
    };
    var actionTypes = ['ALL'].concat(_toConsumableArray(Object.keys(ACTION_COLORS)));
    var filtered = auditFilter === 'ALL' ? auditLog : auditLog.filter(function (e) {
      return e.action === auditFilter;
    });
    var formatTimestamp = function formatTimestamp(ts) {
      try {
        var d = new Date(ts);
        return d.toLocaleString('en-US', {
          month: 'short',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit'
        });
      } catch (_unused) {
        return ts;
      }
    };
    var formatDetails = function formatDetails(action, details) {
      if (!details) return '';
      switch (action) {
        case 'AUTO_ALLOCATION':
          return "".concat(details.rows, " rows allocated \xB7 ").concat(details.unallocated, " unresolved");
        case 'SAVE_SCENARIO':
          return "Scenario: \"".concat(details.name, "\"");
        case 'NET_GEN_ENTRY':
          return "".concat(monthNames[(details.month || 1) - 1], " ").concat(details.year, " \u2014 ").concat(formatNum(details.net_gen_mwh), " MWh / ").concat(details.peak_mw, " MW");
        case 'NET_GEN_UPDATE':
          return "".concat(monthNames[(details.month || 1) - 1], " ").concat(details.year, " updated");
        case 'NET_GEN_DELETE':
          return "".concat(monthNames[(details.month || 1) - 1], " ").concat(details.year, " deleted");
        case 'CSV_UPLOAD':
          return "".concat(details.filename, " \u2014 ").concat(formatNum(details.rows), " rows");
        default:
          return JSON.stringify(details).slice(0, 80);
      }
    };
    return /*#__PURE__*/React.createElement("div", {
      className: "p-4 h-full flex flex-col space-y-3 overflow-hidden"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-xl border p-3 shadow-sm flex items-center justify-between flex-wrap gap-3 shrink-0"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
      className: "text-base font-bold text-slate-800 flex items-center gap-2"
    }, /*#__PURE__*/React.createElement(Icons.History, null), " Audit Log"), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-slate-500"
    }, filtered.length, " events \xB7 Real-time \xB7 All team activity")), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2"
    }, /*#__PURE__*/React.createElement("select", {
      value: auditFilter,
      onChange: function onChange(e) {
        return setAuditFilter(e.target.value);
      },
      className: "border rounded-lg px-2 py-1.5 text-xs font-bold outline-none focus:border-blue-400 bg-white"
    }, actionTypes.map(function (t) {
      return /*#__PURE__*/React.createElement("option", {
        key: t,
        value: t
      }, t.replace(/_/g, ' '));
    })), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return exportToExcel(filtered.map(function (e) {
          return {
            Timestamp: e.timestamp,
            User: e.user,
            Action: e.action,
            Details: formatDetails(e.action, e.details)
          };
        }), 'Audit_Log');
      },
      className: "text-xs bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-lg font-bold border transition flex items-center gap-1"
    }, /*#__PURE__*/React.createElement(Icons.Download, null), " Excel"))), /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-xl border shadow-sm flex-1 overflow-hidden flex flex-col"
    }, /*#__PURE__*/React.createElement("div", {
      className: "overflow-y-auto custom-scroll flex-1"
    }, /*#__PURE__*/React.createElement("table", {
      className: "w-full text-xs"
    }, /*#__PURE__*/React.createElement("thead", {
      className: "sticky top-0 bg-slate-100 z-10"
    }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
      className: "p-2 text-left font-bold text-slate-600 w-32"
    }, "Time"), /*#__PURE__*/React.createElement("th", {
      className: "p-2 text-left font-bold text-slate-600 w-28"
    }, "User"), /*#__PURE__*/React.createElement("th", {
      className: "p-2 text-left font-bold text-slate-600 w-36"
    }, "Action"), /*#__PURE__*/React.createElement("th", {
      className: "p-2 text-left font-bold text-slate-600"
    }, "Details"))), /*#__PURE__*/React.createElement("tbody", null, filtered.length === 0 && /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
      colSpan: "4",
      className: "p-8 text-center text-slate-400"
    }, "No audit events yet. Actions like saving scenarios, uploading data, and entering net gen figures will appear here in real-time.")), filtered.map(function (entry, i) {
      return /*#__PURE__*/React.createElement("tr", {
        key: entry.id || i,
        className: "border-b hover:bg-slate-50 ".concat(entry.user === currentUser ? 'bg-blue-50/20' : '')
      }, /*#__PURE__*/React.createElement("td", {
        className: "p-2 text-slate-500 whitespace-nowrap font-mono"
      }, formatTimestamp(entry.timestamp)), /*#__PURE__*/React.createElement("td", {
        className: "p-2 font-bold text-slate-700"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center gap-1.5"
      }, /*#__PURE__*/React.createElement("div", {
        className: "w-5 h-5 rounded-full flex items-center justify-center text-[8px] font-black text-white flex-shrink-0",
        style: {
          backgroundColor: getColor(entry.user || 'unknown')
        }
      }, (entry.user || '?').substring(0, 2).toUpperCase()), /*#__PURE__*/React.createElement("span", {
        className: "truncate max-w-[80px]",
        title: entry.user
      }, entry.user))), /*#__PURE__*/React.createElement("td", {
        className: "p-2"
      }, /*#__PURE__*/React.createElement("span", {
        className: "px-2 py-0.5 rounded-full text-[10px] font-black ".concat(ACTION_COLORS[entry.action] || 'bg-slate-100 text-slate-600')
      }, entry.action.replace(/_/g, ' '))), /*#__PURE__*/React.createElement("td", {
        className: "p-2 text-slate-600"
      }, formatDetails(entry.action, entry.details)));
    }))))));
  };
  var renderUserGuideTab = function renderUserGuideTab() {
    var guide = [
      {icon: "\uD83D\uDE80", title: "Getting Started", items: [
        ["First Load", "The app fetches actuals.csv and budget.csv from Supabase on open, then auto-allocates the budget to account level. Header shows Allocating then Budget Allocated when done."],
        ["Files Required", "actuals.csv: columns JPS A/c, Name, Rate category, Updated Parish, Industry, Month, Sum of net_kwh_billed_consump. budget.csv: Month, Rate category, Updated Parish, Sum of Budget, JPS A/c, Name, Industry."],
        ["Uploading Data", "Data Entry tab > Upload Data Files. Drag and drop or browse. Files go to Supabase and reload immediately for all team members."]
      ]},
      {icon: "\uD83D\uDCCA", title: "Overview & Monthly Trend", items: [
        ["Overview Tab", "Full-year view: YTD actuals vs budget vs prior year by Rate Class. Use the Segment and Year filters in the top bar to drill into specific rate classes."],
        ["Monthly Trend", "Month-by-month bars. Click any bar to filter the account table below. Shows individual account variance to budget."],
        ["Filters", "Segment buttons (RT10, RT20 etc) filter all tabs simultaneously. Period controls MTD/QTD/YTD/Annual aggregation."]
      ]},
      {icon: "\uD83C\uDFAF", title: "LE Scenario Tabs", items: [
        ["What is LE?", "Latest Estimate - a revised forecast using actual YTD data to project the rest of the year."],
        ["LE: Customer Volumetric", "Each customer gets their own YTD growth rate applied to remaining budget. Most granular - best with 2+ months of actuals."],
        ["LE: Rate Class", "Uses average growth rate per Rate Class. More stable when individual accounts have unusual patterns."],
        ["LE: Base Trend", "Blended: Customer method for RT10/RT20/RT60; Rate Class for RT40/RT50/RT70. Recommended default."],
        ["LE: Advanced", "Set growth % by Rate Class, Industry, and Month. Save named versions. Used for board presentations and sensitivity analysis."],
        ["Current Month Strip", "Top of each LE tab shows 4 cards: Current Month Actual vs Prior Year vs Budget vs LE for instant tracking."]
      ]},
      {icon: "\uD83D\uDD2E", title: "Net Gen & 24M Forecast", items: [
        ["Net Gen Tab", "Models the generation-to-sales pipeline. Set System Loss %, base year, and growth method. Seasonal index auto-calculated from 3 years of history."],
        ["Hurricane Normalize", "Toggle to replace storm-affected 2025 Nov/Dec with the 2023/2024 average for a cleaner baseline."],
        ["Rolling 24-Month", "Projects Apr 2026 through Mar 2028. First 3 months locked to actuals. Set separate growth % for each forecast year."],
        ["1% Loss Card", "Revenue value of reducing system loss by 1pp - quantifies the financial case for T&D investment."]
      ]},
      {icon: "\u26A0\uFE0F", title: "Validation Tab", items: [
        ["Dropped Accounts", "Accounts billed last year with zero billing this year. Sort by kWh to prioritise highest-volume at-risk customers."],
        ["GID Deflections", "Accounts below 80% of prior-year YTD. Primary DG risk signal. Accounts below -40% highlighted in red."],
        ["No History Groups", "Budget RC/Parish combos with no matching actuals. Review parish name consistency between your budget and actuals files."],
        ["Anomalies", "Month-on-month swings above 25%. May indicate meter issues, seasonal patterns, or data errors."],
        ["Sorting & Export", "Click any column header to sort. All four tables have Excel export buttons."]
      ]},
      {icon: "\uD83D\uDCC8", title: "Charts & Export", items: [
        ["Expand Charts", "Click the Expand button (\u26F6) on any chart for a fullscreen overlay."],
        ["Save as PNG", "Click the camera icon on any chart to download as PNG for presentations."],
        ["Excel Export", "Click XLS on any chart or the Excel button on table headers to download data for Excel."]
      ]},
      {icon: "\uD83D\uDC65", title: "Collaboration & Audit", items: [
        ["Real-Time Sync", "All changes sync instantly to all connected users. Toast notifications appear when teammates save data."],
        ["Who is Online", "Coloured avatars in the header show current active team members."],
        ["Saving Scenarios", "In any LE tab, Save Scenario preserves current growth assumptions under a named version visible to all."],
        ["Audit Log", "Every action recorded in Supabase permanently: allocations, saves, uploads, deletes. Filterable and exportable."]
      ]},
      {icon: "\uD83D\uDD27", title: "Troubleshooting", items: [
        ["Cloud Sync Error", "In Supabase Dashboard, go to: Project > Settings > Infrastructure > Network Restrictions. Remove all IP restrictions (or add 0.0.0.0/0 to allow all). This is a Cloudflare-level IP allowlist that blocks all browser requests. The setting is NOT in API Keys or CORS."],
        ["Allocation Not Running", "Auto-runs when actuals + budget are loaded. If stuck, upload the original budget CSV via Data Entry tab to reset."],
        ["Net Gen Loading", "net_gen_historical table is empty or missing SELECT policy. Enter data via Data Entry tab."],
        ["New Budget Year", "Upload new budget.csv via Data Entry. Budget year auto-detected. All labels and forecasts update automatically."]
      ]}
    ];
    return /*#__PURE__*/React.createElement("div", {className: "p-4 h-full overflow-y-auto custom-scroll"},
      /*#__PURE__*/React.createElement("div", {className: "max-w-4xl mx-auto space-y-3"},
        /*#__PURE__*/React.createElement("div", {className: "bg-gradient-to-r from-slate-800 to-blue-900 rounded-xl p-4 text-white shadow-sm"},
          /*#__PURE__*/React.createElement("h2", {className: "text-sm font-black"}, "\u26A1 JPS Sales Analytics \u2014 User Guide"),
          /*#__PURE__*/React.createElement("p", {className: "text-blue-200 text-xs mt-1"}, "How to navigate and interpret the platform.")
        ),
        guide.map(function(sec) {
          return /*#__PURE__*/React.createElement("div", {key: sec.title, className: "bg-white rounded-xl border shadow-sm overflow-hidden"},
            /*#__PURE__*/React.createElement("div", {className: "px-4 py-2 bg-slate-800 text-white text-xs font-bold flex items-center gap-2"},
              /*#__PURE__*/React.createElement("span", null, sec.icon), sec.title
            ),
            /*#__PURE__*/React.createElement("div", {className: "divide-y"},
              sec.items.map(function(item) {
                return /*#__PURE__*/React.createElement("div", {key: item[0], className: "px-4 py-2 flex gap-4 hover:bg-slate-50"},
                  /*#__PURE__*/React.createElement("div", {className: "w-44 flex-shrink-0 font-bold text-slate-600 text-xs pt-0.5"}, item[0]),
                  /*#__PURE__*/React.createElement("div", {className: "text-slate-600 text-xs leading-relaxed"}, item[1])
                );
              })
            )
          );
        })
      )
    );
  };

  var renderGlossaryTab = function renderGlossaryTab() {
    var terms = [
      {section: "Sales & Volume", items: [
        {term: "kWh Billed", def: "Kilowatt-hours billed to customers. The primary volumetric sales metric."},
        {term: "GWh", def: "Gigawatt-hour = 1,000,000 kWh. Used for annual and portfolio totals."},
        {term: "Net Generation (MWh)", def: "Total electricity generated before system losses. Net Gen x (1 - Loss%) = Billed Sales."},
        {term: "System Loss %", def: "Electricity lost in transmission and distribution. JPS target range: 22-26%."},
        {term: "Billed Sales", def: "Net Generation minus system losses. Actual kWh invoiced to customers."},
        {term: "Peak Demand (MW)", def: "Maximum instantaneous load in megawatts recorded in the billing period."},
        {term: "Load Factor", def: "Average load / Peak load x 100%. Measures efficiency of generation capacity use."}
      ]},
      {section: "Rate Classes", items: [
        {term: "RT10", def: "Residential Tariff. Standard residential service. Largest customer count."},
        {term: "RT20", def: "General Service (Small Commercial). Small businesses on single-phase supply."},
        {term: "RT40", def: "General Power Service. Medium commercial/industrial on three-phase supply."},
        {term: "RT50", def: "Large Power Service. Large industrial customers with demand above 300 kVA."},
        {term: "RT60", def: "Outdoor/Street Lighting. Public lighting infrastructure."},
        {term: "RT70", def: "Extra Large Power. Largest industrial accounts including alumina and bauxite operations."},
        {term: "BU", def: "Bulk/Unmetered supply. Typically resale customers or housing schemes."},
        {term: "EV", def: "Electric Vehicle charging tariff."}
      ]},
      {section: "Forecasting & LE", items: [
        {term: "LE (Latest Estimate)", def: "Revised forecast produced during the budget year using actual data. Replaces static budget with a forward-looking view."},
        {term: "LE: Customer Volumetric", def: "Adjusts each customer's budget by their own YTD growth rate. Most granular method."},
        {term: "LE: Rate Class", def: "Adjusts budget by the average growth rate of each Rate Class. Stable when customer data is incomplete."},
        {term: "LE: Base Trend", def: "Blended: Customer method for RT10/RT20/RT60; Rate Class for RT40/RT50/RT70."},
        {term: "LE: Advanced Scenario", def: "Multi-dimensional engine with growth % overrides by Rate Class, Industry, and Month. Most flexible."},
        {term: "Granular Budget", def: "Budget allocated to individual account level using prior-year actuals as weighting."},
        {term: "Budget Year", def: "The AOP year. Auto-detected from uploaded CSV — updates automatically with new budget."},
        {term: "Prior Year", def: "Budget Year minus one. Reference period for growth calculations and YoY comparisons."}
      ]},
      {section: "Allocation Engine", items: [
        {term: "Quarter-Average Allocation", def: "The engine uses the same calendar quarter from the prior year as the weighting basis. Captures seasonal patterns."},
        {term: "RC/Parish Group", def: "Budget rows grouped by Rate Class + Parish before allocation. Each group total is split across customers proportionally."},
        {term: "NO HISTORY", def: "An RC/Parish combination in the budget has zero matching actuals. Falls back through: exact match > RC-only > any RC actuals."},
        {term: "Weight Basis", def: "Each customer's share of prior-year quarter actuals for their RC/Parish group, used as their proportional budget share."},
        {term: "Industry Override", def: "Optional % adjustment on a customer's allocation based on industry classification. Set in Advanced LE builder."}
      ]},
      {section: "Validation & Risk", items: [
        {term: "GID Deflection", def: "A customer whose YTD consumption is below 80% of the same period last year. May indicate DG switch, meter issue, or commercial loss."},
        {term: "Dropped Account", def: "Account in prior-year actuals with zero billing this year. Could be disconnected, new GID, or data gap."},
        {term: "MoM Anomaly", def: "Month-on-month swing greater than 25% for any account. Flags unusual billing patterns."},
        {term: "DG (Distributed Generation)", def: "Customer-owned solar or other generation reducing grid purchases. Primary driver of volume deflection."},
        {term: "Unlicensed DG", def: "Generation not registered with OUR. Identified when consumption falls sharply without a licensed connection."}
      ]},
      {section: "Financial & Regulatory", items: [
        {term: "OUR", def: "Office of Utilities Regulation. Jamaican regulator that approves JPS tariff rates and revenue requirements."},
        {term: "AOP", def: "Annual Operating Plan. The approved budget document."},
        {term: "Tariff Rate (J$/kWh)", def: "Approved per-unit energy charge for each Rate Class. Used to translate kWh forecasts to revenue."},
        {term: "FX Rate (J$/US$)", def: "Jamaica dollar to US dollar exchange rate for converting tariff revenue to USD."},
        {term: "Demand Charge (J$/kVA)", def: "Fixed monthly charge based on peak demand for RT40, RT50, RT70."},
        {term: "Customer Charge", def: "Fixed monthly service charge regardless of consumption."},
        {term: "Revenue Recovery", def: "Gap between LE forecast revenue and budget revenue. Positive = LE exceeds budget."}
      ]},
      {section: "Data & System", items: [
        {term: "actuals.csv", def: "Transaction-level kWh billing data. Columns: JPS A/c, Name, Rate category, Updated Parish, Industry, Month, Sum of net_kwh_billed_consump."},
        {term: "budget.csv", def: "Budget allocations by RC, Parish, and Month. Columns: Month, Rate category, Updated Parish, Sum of Budget, JPS A/c, Name, Industry."},
        {term: "dashboard_state", def: "Supabase table storing saved scenarios, tariff rates, FX rate, account maps, and comments. Synced in real-time."},
        {term: "net_gen_historical", def: "Supabase table storing monthly Net Generation MWh and Peak Demand MW actuals by year."},
        {term: "audit_log", def: "Supabase table recording all data changes: who, when, what."},
        {term: "Realtime Sync", def: "All users see updates instantly via Supabase Realtime WebSocket on dashboard_state, audit_log, and net_gen_historical."}
      ]}
    ];
    return /*#__PURE__*/React.createElement("div", {className: "p-4 h-full overflow-y-auto custom-scroll"},
      /*#__PURE__*/React.createElement("div", {className: "max-w-4xl mx-auto space-y-3"},
        /*#__PURE__*/React.createElement("div", {className: "bg-white rounded-xl border p-4 shadow-sm"},
          /*#__PURE__*/React.createElement("h2", {className: "text-sm font-bold text-slate-800 flex items-center gap-2"},
            /*#__PURE__*/React.createElement(Icons.BookOpen, null), " Glossary of Terms"
          ),
          /*#__PURE__*/React.createElement("p", {className: "text-xs text-slate-500 mt-1"},
            "Complete reference for all metrics, terms and concepts in JPS Sales Analytics."
          )
        ),
        terms.map(function(section) {
          return /*#__PURE__*/React.createElement("div", {key: section.section, className: "bg-white rounded-xl border shadow-sm overflow-hidden"},
            /*#__PURE__*/React.createElement("div", {className: "px-4 py-2 bg-slate-800 text-white font-bold text-xs uppercase tracking-wider"},
              section.section
            ),
            /*#__PURE__*/React.createElement("div", {className: "divide-y"},
              section.items.map(function(item) {
                return /*#__PURE__*/React.createElement("div", {key: item.term, className: "px-4 py-2 flex gap-4 hover:bg-slate-50"},
                  /*#__PURE__*/React.createElement("div", {className: "w-44 flex-shrink-0 font-bold text-slate-700 text-xs pt-0.5"}, item.term),
                  /*#__PURE__*/React.createElement("div", {className: "text-slate-600 text-xs leading-relaxed"}, item.def)
                );
              })
            )
          );
        })
      )
    );
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col h-full w-full bg-slate-100"
  }, showNamePrompt && /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 bg-slate-900/70 flex items-center justify-center z-[100] backdrop-blur-sm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-2xl shadow-2xl w-full max-w-sm p-8 flex flex-col items-center gap-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-3xl"
  }, "\uD83D\uDC64"), /*#__PURE__*/React.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-xl font-black text-slate-800"
  }, "Welcome to JPS Analytics"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-slate-500 mt-1"
  }, "Enter your name so teammates can see you're online.")), /*#__PURE__*/React.createElement("input", {
    autoFocus: true,
    type: "text",
    value: nameInput,
    onChange: function onChange(e) {
      return setNameInput(e.target.value);
    },
    onKeyDown: function onKeyDown(e) {
      return e.key === 'Enter' && handleNameSubmit();
    },
    placeholder: "e.g. Jordache Campbell",
    className: "w-full border-2 border-slate-200 rounded-xl px-4 py-3 text-sm font-medium outline-none focus:border-blue-400 text-center"
  }), /*#__PURE__*/React.createElement("button", {
    onClick: handleNameSubmit,
    disabled: !nameInput.trim(),
    className: "w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-40 text-white py-3 rounded-xl font-bold text-sm transition shadow"
  }, "Enter Dashboard"))), realtimeToast && /*#__PURE__*/React.createElement("div", {
    className: "fixed bottom-6 right-6 z-[90] px-4 py-3 rounded-xl shadow-xl text-sm font-bold flex items-center gap-2 transition-all animate-pulse\n                            ".concat(realtimeToast.type === 'join' ? 'bg-emerald-600 text-white' : realtimeToast.type === 'leave' ? 'bg-slate-600 text-white' : 'bg-blue-600 text-white')
  }, realtimeToast.type === 'join' ? '🟢' : realtimeToast.type === 'leave' ? '⚫' : '🔄', realtimeToast.msg), /*#__PURE__*/React.createElement("header", {
    className: "bg-white border-b px-6 py-4 flex justify-between items-center shrink-0 z-20"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: "text-base font-bold text-slate-800 flex items-center gap-2"
  }, /*#__PURE__*/React.createElement(Icons.PieChart, null), " JPS Sales Analytics Model"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-slate-500"
  }, "Commercial Analytics | Redistribution & Forecasting Engine")), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-4"
  }, Object.keys(onlineUsers).length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 border-r pr-4 border-slate-200"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider"
  }, "Online"), /*#__PURE__*/React.createElement("div", {
    className: "flex -space-x-2"
  }, Object.entries(onlineUsers).map(function (_ref52) {
    var _ref53 = _slicedToArray(_ref52, 2),
      uid = _ref53[0],
      user = _ref53[1];
    return /*#__PURE__*/React.createElement("div", {
      key: uid,
      title: user.name,
      className: "w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-[11px] font-black text-white shadow-sm cursor-default select-none",
      style: {
        backgroundColor: user.color
      }
    }, getInitials(user.name));
  })), /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-emerald-600 font-bold flex items-center gap-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-2 h-2 rounded-full bg-emerald-500 animate-pulse inline-block"
  }), Object.keys(onlineUsers).length, " live")), currentUser && /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 border-r pr-4 border-slate-200"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-black text-white shadow-sm",
    style: {
      backgroundColor: getColor(userIdRef)
    }
  }, getInitials(currentUser)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-xs font-bold text-slate-700 leading-none"
  }, currentUser), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      setNameInput(currentUser);
      setShowNamePrompt(true);
    },
    className: "text-[10px] text-slate-400 hover:text-blue-500 transition leading-none"
  }, "change"))), rawActuals.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "text-xs px-3 py-1.5 rounded-full border shadow-sm flex items-center gap-2 ".concat(allocationResults.length > 0 ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-amber-50 text-amber-700 border-amber-200')
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-2 h-2 rounded-full ".concat(allocationResults.length > 0 ? 'bg-emerald-500' : 'bg-amber-400 animate-pulse')
  }), allocationResults.length > 0 ? "Budget Allocated \xB7 ".concat(allocationResults.filter(function (r) {
    return r.name !== 'NO HISTORY' && r.name !== 'ZERO HISTORY';
  }).length, " accounts") : rawActuals.length > 0 && rawBudget.length > 0 ? 'Computing allocation...' : 'Awaiting data...'), /*#__PURE__*/React.createElement("div", {
    className: "text-xs px-3 py-1.5 rounded-full border shadow-sm flex items-center gap-2 ".concat(supabaseStatus === 'connected' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : supabaseStatus === 'error' ? 'bg-red-50 text-red-700 border-red-200' : supabaseStatus === 'connecting' ? 'bg-amber-50 text-amber-700 border-amber-200' : 'bg-slate-50 text-slate-500 border-slate-200')
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-2 h-2 rounded-full ".concat(supabaseStatus === 'connected' ? 'bg-emerald-500' : supabaseStatus === 'error' ? 'bg-red-500' : supabaseStatus === 'connecting' ? 'bg-amber-500 animate-pulse' : 'bg-slate-400')
  }), supabaseStatus === 'connected' ? 'Cloud Sync Active' : supabaseStatus === 'error' ? 'Cloud Sync Error' : supabaseStatus === 'connecting' ? 'Connecting...' : 'Local Mode'), (rawActuals.length > 0 || rawBudget.length > 0) && /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 border-l pl-4 border-slate-200"
  }, rawActuals.length > 0 && rawBudget.length > 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    onClick: handleSaveVersion,
    className: "flex items-center gap-1.5 text-sm bg-white hover:bg-slate-50 text-slate-700 px-3 py-1.5 rounded-lg border shadow-sm transition font-medium"
  }, /*#__PURE__*/React.createElement(Icons.Save, null), " Save Scenario"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setIsVersionModalOpen(true);
    },
    className: "flex items-center gap-1.5 text-sm bg-white hover:bg-slate-50 text-slate-700 px-3 py-1.5 rounded-lg border shadow-sm transition font-medium"
  }, /*#__PURE__*/React.createElement(Icons.History, null), " Versions ", /*#__PURE__*/React.createElement("span", {
    className: "bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded text-xs ml-1"
  }, savedVersions.length))), /*#__PURE__*/React.createElement("button", {
    onClick: handleClearData,
    className: "flex items-center gap-1.5 text-sm bg-red-50 hover:bg-red-100 text-red-600 px-3 py-1.5 rounded-lg border border-red-200 shadow-sm transition font-medium",
    title: "Clear all data and restart"
  }, /*#__PURE__*/React.createElement(Icons.RefreshCw, null), " Reset")))), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-1 overflow-hidden"
  }, /*#__PURE__*/React.createElement("aside", {
    className: "w-56 bg-white border-r flex flex-col gap-1 p-4 shrink-0 overflow-y-auto custom-scroll z-10 shadow-sm"
  }, rawActuals.length > 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider px-3 mb-1 mt-2"
  }, "Executive"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setActiveTab('overview');
    },
    className: "dashboard-tab ".concat(activeTab === 'overview' ? 'active' : '')
  }, /*#__PURE__*/React.createElement(Icons.Building, null), " Overview"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setActiveTab('monthly');
    },
    className: "dashboard-tab ".concat(activeTab === 'monthly' ? 'active' : '')
  }, /*#__PURE__*/React.createElement(Icons.Calendar, null), " Monthly Trend"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setActiveTab('pivot');
    },
    className: "dashboard-tab ".concat(activeTab === 'pivot' ? 'active' : '')
  }, /*#__PURE__*/React.createElement(Icons.Grid, null), " Pivot & Movers"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setActiveTab('netgen');
    },
    className: "dashboard-tab ".concat(activeTab === 'netgen' ? 'active' : '')
  }, /*#__PURE__*/React.createElement(Icons.Wind, null), " Net Gen Forecast"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setActiveTab('rolling18');
    },
    className: "dashboard-tab ".concat(activeTab === 'rolling18' ? 'active' : '')
  }, /*#__PURE__*/React.createElement(Icons.Calendar, null), " Rolling 18M Forecast"), /*#__PURE__*/React.createElement("div", {
    className: "h-px bg-slate-200 my-3 mx-2"
  }), /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider px-3 mb-1"
  }, "Forecast Scenarios"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setActiveTab('leCust');
    },
    className: "dashboard-tab ".concat(activeTab === 'leCust' ? 'active' : '')
  }, /*#__PURE__*/React.createElement(Icons.Users, null), " LE: Cust Vol"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setActiveTab('leRC');
    },
    className: "dashboard-tab ".concat(activeTab === 'leRC' ? 'active' : '')
  }, /*#__PURE__*/React.createElement(Icons.Zap, null), " LE: RC Vol"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setActiveTab('leBase');
    },
    className: "dashboard-tab ".concat(activeTab === 'leBase' ? 'active' : '')
  }, /*#__PURE__*/React.createElement(Icons.Briefcase, null), " LE: Base"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setActiveTab('leCustom');
    },
    className: "dashboard-tab ".concat(activeTab === 'leCustom' ? 'active' : '')
  }, /*#__PURE__*/React.createElement(Icons.Sliders, null), " LE: Advanced"), /*#__PURE__*/React.createElement("div", {
    className: "h-px bg-slate-200 my-3 mx-2"
  }), /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider px-3 mb-1"
  }, "Analysis Engine"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setActiveTab('comparison');
    },
    className: "dashboard-tab ".concat(activeTab === 'comparison' ? 'active' : '')
  }, /*#__PURE__*/React.createElement(Icons.Grid, null), " Scenario Compare"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setActiveTab('variance');
    },
    className: "dashboard-tab ".concat(activeTab === 'variance' ? 'active' : '')
  }, /*#__PURE__*/React.createElement(Icons.TrendingUp, null), " Variance Matrix"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setActiveTab('validation');
    },
    className: "dashboard-tab ".concat(activeTab === 'validation' ? 'active' : '')
  }, /*#__PURE__*/React.createElement(Icons.CheckCircle, null), " Validation"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setActiveTab('auditlog');
    },
    className: "dashboard-tab ".concat(activeTab === 'auditlog' ? 'active' : '')
  }, /*#__PURE__*/React.createElement(Icons.History, null), " Audit Log"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setActiveTab('customers');
    },
    className: "dashboard-tab ".concat(activeTab === 'customers' ? 'active' : '')
  }, /*#__PURE__*/React.createElement(Icons.Users, null), " Customer Data"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setActiveTab('dataentry');
    },
    className: "dashboard-tab ".concat(activeTab === 'dataentry' ? 'active' : '')
  }, /*#__PURE__*/React.createElement(Icons.Save, null), " Data Entry")), /*#__PURE__*/React.createElement("div", {
    className: "mt-auto"
  }), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setActiveTab('glossary');
    },
    className: "dashboard-tab ".concat(activeTab === 'glossary' ? 'active' : '')
  }, /*#__PURE__*/React.createElement(Icons.BookOpen, null), " Glossary"), /*#__PURE__*/React.createElement("div", {
    className: "h-px bg-slate-200 my-3 mx-2"
  }), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setActiveTab('data');
    },
    className: "dashboard-tab ".concat(activeTab === 'data' ? 'active' : '')
  }, /*#__PURE__*/React.createElement(Icons.Database, null), " Data Hub")), /*#__PURE__*/React.createElement("main", {
    className: "flex-1 flex flex-col min-w-0 overflow-hidden relative"
  }, rawActuals.length > 0 && ['overview', 'monthly', 'leCust', 'leRC', 'leBase', 'leCustom', 'variance', 'pivot', 'netgen'].includes(activeTab) && /*#__PURE__*/React.createElement("div", {
    className: "bg-white border-b px-6 py-2 flex gap-4 items-center text-[10px] font-bold uppercase tracking-wider text-slate-500 shadow-sm shrink-0 overflow-x-auto z-10 relative"
  }, /*#__PURE__*/React.createElement(Icons.Filter, null), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-1 border-r pr-3"
  }, /*#__PURE__*/React.createElement(Icons.Calendar, null), /*#__PURE__*/React.createElement("select", {
    value: ytdMonth,
    onChange: function onChange(e) {
      return setYtdMonth(e.target.value);
    },
    className: "bg-transparent text-blue-700 outline-none"
  }, /*#__PURE__*/React.createElement("option", {
    value: "All"
  }, "Full Year (YTD)"), monthNames.map(function (m) {
    return /*#__PURE__*/React.createElement("option", {
      key: m,
      value: m
    }, "YTD: ", m);
  }))), /*#__PURE__*/React.createElement("select", {
    value: fCust,
    onChange: function onChange(e) {
      return setFCust(e.target.value);
    },
    className: "bg-transparent outline-none max-w-[150px] truncate pr-2"
  }, /*#__PURE__*/React.createElement("option", {
    value: "All"
  }, "All Customers"), dimensions.customers.map(function (c) {
    return /*#__PURE__*/React.createElement("option", {
      key: c,
      value: c
    }, c);
  })), /*#__PURE__*/React.createElement("select", {
    value: fRC,
    onChange: function onChange(e) {
      return setFRC(e.target.value);
    },
    className: "bg-transparent outline-none"
  }, /*#__PURE__*/React.createElement("option", {
    value: "All"
  }, "All Rates"), dimensions.rcs.map(function (r) {
    return /*#__PURE__*/React.createElement("option", {
      key: r
    }, r);
  })), /*#__PURE__*/React.createElement("select", {
    value: fParish,
    onChange: function onChange(e) {
      return setFParish(e.target.value);
    },
    className: "bg-transparent outline-none"
  }, /*#__PURE__*/React.createElement("option", {
    value: "All"
  }, "All Parishes"), dimensions.parishes.map(function (p) {
    return /*#__PURE__*/React.createElement("option", {
      key: p
    }, p);
  })), /*#__PURE__*/React.createElement("select", {
    value: fInd,
    onChange: function onChange(e) {
      return setFInd(e.target.value);
    },
    className: "bg-transparent outline-none"
  }, /*#__PURE__*/React.createElement("option", {
    value: "All"
  }, "All Industries"), dimensions.inds.map(function (i) {
    return /*#__PURE__*/React.createElement("option", {
      key: i
    }, i);
  }))), /*#__PURE__*/React.createElement("div", {
    className: "flex-1 overflow-hidden relative bg-slate-50/50 z-0"
  }, /*#__PURE__*/React.createElement(ErrorBoundary, null, rawActuals.length === 0 && activeTab !== 'data' && activeTab !== 'glossary' ? /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col items-center justify-center h-full text-slate-500"
  }, /*#__PURE__*/React.createElement(Icons.CloudDown, null), /*#__PURE__*/React.createElement("h2", {
    className: "text-xl font-bold mb-2 mt-4"
  }, "Fetching Cloud Data..."), /*#__PURE__*/React.createElement("p", {
    className: "text-sm mb-6 max-w-md text-center"
  }, "Auto-loading from your repository. If this persists, configure data sources manually."), /*#__PURE__*/React.createElement("button", {onClick: function(){setActiveTab('guide');}, className: "dashboard-tab " + (activeTab === 'guide' ? 'active' : '')}, /*#__PURE__*/React.createElement(Icons.HelpCircle, null), " User Guide"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setActiveTab('data');
    },
    className: "bg-slate-800 text-white px-6 py-2 rounded-lg font-bold shadow hover:bg-slate-900 transition"
  }, "Go to Data Hub")) : /*#__PURE__*/React.createElement(React.Fragment, null, activeTab === 'data' && renderDataTab(), activeTab === 'overview' && renderOverviewTab(), activeTab === 'monthly' && renderMonthlyTab(), activeTab === 'allocation' && renderAllocationTab(), activeTab === 'leCust' && renderLeCustTab(), activeTab === 'leRC' && renderLeRCTab(), activeTab === 'leBase' && renderLeBaseTab(), activeTab === 'leCustom' && renderLeCustomTab(), activeTab === 'pivot' && renderPivotTab(), activeTab === 'variance' && renderVarianceTab(), activeTab === 'guide' && renderUserGuideTab(), activeTab === 'glossary' && renderGlossaryTab(), activeTab === 'comparison' && renderComparisonTab(), activeTab === 'netgen' && /*#__PURE__*/React.createElement(ErrorBoundary, null, renderNetGenTab()), activeTab === 'rolling18' && /*#__PURE__*/React.createElement(ErrorBoundary, null, renderRolling18Tab()), activeTab === 'customers' && renderCustomerTab(), activeTab === 'validation' && /*#__PURE__*/React.createElement(ErrorBoundary, null, renderValidationTab()), activeTab === 'auditlog' && renderAuditLogTab(), activeTab === 'dataentry' && /*#__PURE__*/React.createElement(ErrorBoundary, null, renderDataEntryTab())))))), isVersionModalOpen && /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 bg-slate-900/50 flex items-center justify-center z-50 backdrop-blur-sm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-2xl shadow-xl w-full max-w-3xl flex flex-col overflow-hidden max-h-[80vh]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "px-6 py-4 border-b flex justify-between items-center bg-slate-50"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-base font-bold text-slate-800 flex items-center gap-2"
  }, /*#__PURE__*/React.createElement(Icons.History, null), " Saved Scenarios & Versions"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setIsVersionModalOpen(false);
    },
    className: "text-slate-400 hover:text-slate-600 transition"
  }, /*#__PURE__*/React.createElement(Icons.X, null))), /*#__PURE__*/React.createElement("div", {
    className: "bg-slate-800 p-4 flex justify-between items-center text-white shrink-0 shadow-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 text-sm"
  }, /*#__PURE__*/React.createElement(Icons.CloudUp, null), /*#__PURE__*/React.createElement("span", {
    className: "font-bold"
  }, "Cloud Sync"), /*#__PURE__*/React.createElement("span", {
    className: "text-slate-400 text-xs ml-2"
  }, "Pulling overwrites unsaved local versions.")), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: pullScenariosFromCloud,
    disabled: isSyncingConfigs,
    className: "bg-slate-700 hover:bg-slate-600 text-white px-3 py-1.5 rounded text-sm font-bold shadow-sm transition disabled:opacity-50 flex items-center gap-2"
  }, /*#__PURE__*/React.createElement(Icons.CloudDown, null), " ", isSyncingConfigs ? 'Pulling...' : 'Pull Config from Cloud'))), /*#__PURE__*/React.createElement("div", {
    className: "p-6 overflow-y-auto flex-1 bg-slate-50/50"
  }, savedVersions.length === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "text-center py-10 text-slate-500"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-center mb-3 text-slate-300"
  }, /*#__PURE__*/React.createElement(Icons.Save, null)), /*#__PURE__*/React.createElement("p", {
    className: "font-medium"
  }, "No versions saved locally."), /*#__PURE__*/React.createElement("p", {
    className: "text-sm mt-1 mb-4"
  }, "Save a version from the header, or pull from the cloud.")) : /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, savedVersions.map(function (v) {
    var _v$advOverrides, _v$advOverrides2;
    return /*#__PURE__*/React.createElement("div", {
      key: v.id,
      className: "bg-white border rounded-xl p-4 flex items-center justify-between shadow-sm transition ".concat(v.isDefault ? 'border-amber-400 bg-amber-50/20' : 'hover:border-blue-300')
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
      className: "font-bold text-slate-800 text-lg flex items-center gap-2"
    }, v.isDefault && /*#__PURE__*/React.createElement("span", {
      className: "text-amber-500 flex items-center gap-1 text-xs px-2 py-0.5 bg-amber-100 rounded-full border border-amber-200"
    }, /*#__PURE__*/React.createElement(Icons.Star, {
      filled: true
    }), " Default"), v.name), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-slate-500 mt-1 flex items-center gap-2"
    }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icons.Calendar, {
      className: "inline w-3 h-3 mr-1"
    }), " ", v.timestamp), /*#__PURE__*/React.createElement("span", {
      className: "text-slate-300"
    }, "|"), v.savedBy && /*#__PURE__*/React.createElement("span", {
      className: "text-blue-500 font-bold"
    }, "by ", v.savedBy), v.savedBy && /*#__PURE__*/React.createElement("span", {
      className: "text-slate-300"
    }, "|"), /*#__PURE__*/React.createElement("span", null, "Overrides: ", Object.keys(v.allocOverrides || {}).length + Object.keys(((_v$advOverrides = v.advOverrides) === null || _v$advOverrides === void 0 ? void 0 : _v$advOverrides.pct) || {}).length + Object.keys(((_v$advOverrides2 = v.advOverrides) === null || _v$advOverrides2 === void 0 ? void 0 : _v$advOverrides2.vol) || {}).length), /*#__PURE__*/React.createElement("span", {
      className: "text-slate-300"
    }, "|"), /*#__PURE__*/React.createElement("span", {
      className: v.isNormalizeHurricane ? 'text-emerald-600' : 'text-slate-400'
    }, "Hurricane Norm: ", v.isNormalizeHurricane ? 'ON' : 'OFF'))), /*#__PURE__*/React.createElement("div", {
      className: "flex gap-2"
    }, !v.isDefault && /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return handleSetDefaultVersion(v.id);
      },
      className: "bg-white border hover:bg-amber-50 hover:text-amber-600 text-slate-500 px-3 py-2 rounded-lg text-sm font-bold shadow-sm transition flex items-center gap-1",
      title: "Set as default scenario"
    }, /*#__PURE__*/React.createElement(Icons.Star, null), " Make Default"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return handleRestoreVersion(v);
      },
      className: "bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-sm transition"
    }, "Restore"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return handleDeleteVersion(v.id);
      },
      className: "bg-white border hover:bg-red-50 text-red-500 p-2 rounded-lg shadow-sm transition",
      title: "Delete"
    }, /*#__PURE__*/React.createElement(Icons.Trash, null))));
  }))))));
}

var root = ReactDOM.createRoot(document.getElementById('root'));
root.render(/*#__PURE__*/React.createElement(App, null));
// Hide loading splash once React mounts
if (typeof window.__hideSplash === 'function') { setTimeout(window.__hideSplash, 200); }
