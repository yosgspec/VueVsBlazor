(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_Index_Index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/Index/Index.component */ "./src/app/pages/Index/Index.component.ts");
/* harmony import */ var _pages_P1_StyleBlock_P1_StyleBlock_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/P1_StyleBlock/P1_StyleBlock.component */ "./src/app/pages/P1_StyleBlock/P1_StyleBlock.component.ts");
/* harmony import */ var _pages_P2_ScriptBlock_P2_ScriptBlock_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/P2_ScriptBlock/P2_ScriptBlock.component */ "./src/app/pages/P2_ScriptBlock/P2_ScriptBlock.component.ts");
/* harmony import */ var _pages_P3_Formula_P3_Formula_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/P3_Formula/P3_Formula.component */ "./src/app/pages/P3_Formula/P3_Formula.component.ts");
/* harmony import */ var _pages_P4_LifeCycle_P4_LifeCycle_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/P4_LifeCycle/P4_LifeCycle.component */ "./src/app/pages/P4_LifeCycle/P4_LifeCycle.component.ts");
/* harmony import */ var _pages_P5_UseDOMAPI_P5_UseDOMAPI_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/P5_UseDOMAPI/P5_UseDOMAPI.component */ "./src/app/pages/P5_UseDOMAPI/P5_UseDOMAPI.component.ts");
/* harmony import */ var _pages_P6_BindingInput_P6_BindingInput_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/P6_BindingInput/P6_BindingInput.component */ "./src/app/pages/P6_BindingInput/P6_BindingInput.component.ts");
/* harmony import */ var _pages_P7_BindingInputOneWay_P7_BindingInputOneWay_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/P7_BindingInputOneWay/P7_BindingInputOneWay.component */ "./src/app/pages/P7_BindingInputOneWay/P7_BindingInputOneWay.component.ts");
/* harmony import */ var _pages_P8_EventHandler_P8_EventHandler_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/P8_EventHandler/P8_EventHandler.component */ "./src/app/pages/P8_EventHandler/P8_EventHandler.component.ts");
/* harmony import */ var _pages_P9_OnChangeEvent_P9_OnChangeEvent_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/P9_OnChangeEvent/P9_OnChangeEvent.component */ "./src/app/pages/P9_OnChangeEvent/P9_OnChangeEvent.component.ts");
/* harmony import */ var _pages_P10_BindingStyle_P10_BindingStyle_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/P10_BindingStyle/P10_BindingStyle.component */ "./src/app/pages/P10_BindingStyle/P10_BindingStyle.component.ts");
/* harmony import */ var _pages_P11_BindingClass_P11_BindingClass_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/P11_BindingClass/P11_BindingClass.component */ "./src/app/pages/P11_BindingClass/P11_BindingClass.component.ts");
/* harmony import */ var _pages_P12_IfAndShow_P12_IfAndShow_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/P12_IfAndShow/P12_IfAndShow.component */ "./src/app/pages/P12_IfAndShow/P12_IfAndShow.component.ts");
/* harmony import */ var _pages_P13_ForEachLoop_P13_ForEachLoop_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/P13_ForEachLoop/P13_ForEachLoop.component */ "./src/app/pages/P13_ForEachLoop/P13_ForEachLoop.component.ts");
/* harmony import */ var _pages_P14_AddComponent_P14_AddComponent_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/P14_AddComponent/P14_AddComponent.component */ "./src/app/pages/P14_AddComponent/P14_AddComponent.component.ts");
/* harmony import */ var _pages_P15_ComponentAttribute_P15_ComponentAttribute_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/P15_ComponentAttribute/P15_ComponentAttribute.component */ "./src/app/pages/P15_ComponentAttribute/P15_ComponentAttribute.component.ts");
/* harmony import */ var _pages_P16_ComponentMethod_P16_ComponentMethod_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/P16_ComponentMethod/P16_ComponentMethod.component */ "./src/app/pages/P16_ComponentMethod/P16_ComponentMethod.component.ts");
/* harmony import */ var _pages_P17_StateContainer_P17_StateContainer_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/P17_StateContainer/P17_StateContainer.component */ "./src/app/pages/P17_StateContainer/P17_StateContainer.component.ts");
/* harmony import */ var _pages_P18_ReadJSON_P18_ReadJSON_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/P18_ReadJSON/P18_ReadJSON.component */ "./src/app/pages/P18_ReadJSON/P18_ReadJSON.component.ts");
/* harmony import */ var _pages_P19_ReadText_P19_ReadText_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/P19_ReadText/P19_ReadText.component */ "./src/app/pages/P19_ReadText/P19_ReadText.component.ts");























const routes = [
    { path: "", component: _pages_Index_Index_component__WEBPACK_IMPORTED_MODULE_3__["IndexComponent"] },
    { path: "StyleBlock", component: _pages_P1_StyleBlock_P1_StyleBlock_component__WEBPACK_IMPORTED_MODULE_4__["P1StyleBlockComponent"] },
    { path: "ScriptBlock", component: _pages_P2_ScriptBlock_P2_ScriptBlock_component__WEBPACK_IMPORTED_MODULE_5__["P2ScriptBlockComponent"] },
    { path: "Formula", component: _pages_P3_Formula_P3_Formula_component__WEBPACK_IMPORTED_MODULE_6__["P3FormulaComponent"] },
    { path: "LifeCycle", component: _pages_P4_LifeCycle_P4_LifeCycle_component__WEBPACK_IMPORTED_MODULE_7__["P4LifeCycleComponent"] },
    { path: "UseDOMAPI", component: _pages_P5_UseDOMAPI_P5_UseDOMAPI_component__WEBPACK_IMPORTED_MODULE_8__["P5UseDOMAPIComponent"] },
    { path: "BindingInput", component: _pages_P6_BindingInput_P6_BindingInput_component__WEBPACK_IMPORTED_MODULE_9__["P6BindingInputComponent"] },
    { path: "BindingInputOneWay", component: _pages_P7_BindingInputOneWay_P7_BindingInputOneWay_component__WEBPACK_IMPORTED_MODULE_10__["P7BindingInputOneWayComponent"] },
    { path: "EventHandler", component: _pages_P8_EventHandler_P8_EventHandler_component__WEBPACK_IMPORTED_MODULE_11__["P8EventHandlerComponent"] },
    { path: "OnChangeEvent", component: _pages_P9_OnChangeEvent_P9_OnChangeEvent_component__WEBPACK_IMPORTED_MODULE_12__["P9OnChangeEventComponent"] },
    { path: "BindingStyle", component: _pages_P10_BindingStyle_P10_BindingStyle_component__WEBPACK_IMPORTED_MODULE_13__["P10BindingStyleComponent"] },
    { path: "BindingClass", component: _pages_P11_BindingClass_P11_BindingClass_component__WEBPACK_IMPORTED_MODULE_14__["P11BindingClassComponent"] },
    { path: "IfAndShow", component: _pages_P12_IfAndShow_P12_IfAndShow_component__WEBPACK_IMPORTED_MODULE_15__["P12IfAndShowComponent"] },
    { path: "ForEachLoop", component: _pages_P13_ForEachLoop_P13_ForEachLoop_component__WEBPACK_IMPORTED_MODULE_16__["P13ForEachLoopComponent"] },
    { path: "AddComponent", component: _pages_P14_AddComponent_P14_AddComponent_component__WEBPACK_IMPORTED_MODULE_17__["P14AddComponentComponent"] },
    { path: "ComponentAttribute", component: _pages_P15_ComponentAttribute_P15_ComponentAttribute_component__WEBPACK_IMPORTED_MODULE_18__["P15ComponentAttributeComponent"] },
    { path: "ComponentMethod", component: _pages_P16_ComponentMethod_P16_ComponentMethod_component__WEBPACK_IMPORTED_MODULE_19__["P16ComponentMethodComponent"] },
    { path: "StateContainer", component: _pages_P17_StateContainer_P17_StateContainer_component__WEBPACK_IMPORTED_MODULE_20__["P17StateContainerComponent"] },
    { path: "ReadJSON", component: _pages_P18_ReadJSON_P18_ReadJSON_component__WEBPACK_IMPORTED_MODULE_21__["P18ReadJSONComponent"] },
    { path: "ReadText", component: _pages_P19_ReadText_P19_ReadText_component__WEBPACK_IMPORTED_MODULE_22__["P19ReadTextComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

const template = `
<main style=display:flex>
	<NavMenu></NavMenu>
	<div class=v-hr></div>
	<div>
		<router-outlet></router-outlet>
		<CodeView></CodeView>
	</div>
</main>

<style>
.v-hr{
	margin: 0 10px;
	border-right: 5px solid #CCC;
	height: 98vh;
}
</style>
`;

let AppComponent = class AppComponent {
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-root",
        template: template
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_Index_Index_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/Index/Index.component */ "./src/app/pages/Index/Index.component.ts");
/* harmony import */ var _pages_P1_StyleBlock_P1_StyleBlock_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/P1_StyleBlock/P1_StyleBlock.component */ "./src/app/pages/P1_StyleBlock/P1_StyleBlock.component.ts");
/* harmony import */ var _pages_P2_ScriptBlock_P2_ScriptBlock_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/P2_ScriptBlock/P2_ScriptBlock.component */ "./src/app/pages/P2_ScriptBlock/P2_ScriptBlock.component.ts");
/* harmony import */ var _pages_P3_Formula_P3_Formula_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/P3_Formula/P3_Formula.component */ "./src/app/pages/P3_Formula/P3_Formula.component.ts");
/* harmony import */ var _pages_P4_LifeCycle_P4_LifeCycle_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/P4_LifeCycle/P4_LifeCycle.component */ "./src/app/pages/P4_LifeCycle/P4_LifeCycle.component.ts");
/* harmony import */ var _pages_P5_UseDOMAPI_P5_UseDOMAPI_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/P5_UseDOMAPI/P5_UseDOMAPI.component */ "./src/app/pages/P5_UseDOMAPI/P5_UseDOMAPI.component.ts");
/* harmony import */ var _pages_P6_BindingInput_P6_BindingInput_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/P6_BindingInput/P6_BindingInput.component */ "./src/app/pages/P6_BindingInput/P6_BindingInput.component.ts");
/* harmony import */ var _pages_P7_BindingInputOneWay_P7_BindingInputOneWay_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/P7_BindingInputOneWay/P7_BindingInputOneWay.component */ "./src/app/pages/P7_BindingInputOneWay/P7_BindingInputOneWay.component.ts");
/* harmony import */ var _pages_P8_EventHandler_P8_EventHandler_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/P8_EventHandler/P8_EventHandler.component */ "./src/app/pages/P8_EventHandler/P8_EventHandler.component.ts");
/* harmony import */ var _pages_P9_OnChangeEvent_P9_OnChangeEvent_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/P9_OnChangeEvent/P9_OnChangeEvent.component */ "./src/app/pages/P9_OnChangeEvent/P9_OnChangeEvent.component.ts");
/* harmony import */ var _pages_P10_BindingStyle_P10_BindingStyle_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/P10_BindingStyle/P10_BindingStyle.component */ "./src/app/pages/P10_BindingStyle/P10_BindingStyle.component.ts");
/* harmony import */ var _pages_P11_BindingClass_P11_BindingClass_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/P11_BindingClass/P11_BindingClass.component */ "./src/app/pages/P11_BindingClass/P11_BindingClass.component.ts");
/* harmony import */ var _pages_P12_IfAndShow_P12_IfAndShow_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/P12_IfAndShow/P12_IfAndShow.component */ "./src/app/pages/P12_IfAndShow/P12_IfAndShow.component.ts");
/* harmony import */ var _pages_P13_ForEachLoop_P13_ForEachLoop_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/P13_ForEachLoop/P13_ForEachLoop.component */ "./src/app/pages/P13_ForEachLoop/P13_ForEachLoop.component.ts");
/* harmony import */ var _pages_P14_AddComponent_P14_AddComponent_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/P14_AddComponent/P14_AddComponent.component */ "./src/app/pages/P14_AddComponent/P14_AddComponent.component.ts");
/* harmony import */ var _pages_P15_ComponentAttribute_P15_ComponentAttribute_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/P15_ComponentAttribute/P15_ComponentAttribute.component */ "./src/app/pages/P15_ComponentAttribute/P15_ComponentAttribute.component.ts");
/* harmony import */ var _pages_P16_ComponentMethod_P16_ComponentMethod_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/P16_ComponentMethod/P16_ComponentMethod.component */ "./src/app/pages/P16_ComponentMethod/P16_ComponentMethod.component.ts");
/* harmony import */ var _pages_P17_StateContainer_P17_StateContainer_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/P17_StateContainer/P17_StateContainer.component */ "./src/app/pages/P17_StateContainer/P17_StateContainer.component.ts");
/* harmony import */ var _pages_P18_ReadJSON_P18_ReadJSON_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/P18_ReadJSON/P18_ReadJSON.component */ "./src/app/pages/P18_ReadJSON/P18_ReadJSON.component.ts");
/* harmony import */ var _pages_P19_ReadText_P19_ReadText_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pages/P19_ReadText/P19_ReadText.component */ "./src/app/pages/P19_ReadText/P19_ReadText.component.ts");
/* harmony import */ var _components_NavMenu_NavMenu_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/NavMenu/NavMenu.component */ "./src/app/components/NavMenu/NavMenu.component.ts");
/* harmony import */ var _components_CodeView_CodeView_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/CodeView/CodeView.component */ "./src/app/components/CodeView/CodeView.component.ts");
/* harmony import */ var _components_ComponentA_ComponentA_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/ComponentA/ComponentA.component */ "./src/app/components/ComponentA/ComponentA.component.ts");
/* harmony import */ var _components_ComponentB_ComponentB_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/ComponentB/ComponentB.component */ "./src/app/components/ComponentB/ComponentB.component.ts");
/* harmony import */ var _components_ComponentC_ComponentC_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/ComponentC/ComponentC.component */ "./src/app/components/ComponentC/ComponentC.component.ts");
/* harmony import */ var _components_Toast_Toast_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/Toast/Toast.component */ "./src/app/components/Toast/Toast.component.ts");
/* harmony import */ var _components_BooksInput_BooksInput_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/BooksInput/BooksInput.component */ "./src/app/components/BooksInput/BooksInput.component.ts");


































let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _pages_Index_Index_component__WEBPACK_IMPORTED_MODULE_7__["IndexComponent"],
            _pages_P1_StyleBlock_P1_StyleBlock_component__WEBPACK_IMPORTED_MODULE_8__["P1StyleBlockComponent"],
            _pages_P2_ScriptBlock_P2_ScriptBlock_component__WEBPACK_IMPORTED_MODULE_9__["P2ScriptBlockComponent"],
            _pages_P3_Formula_P3_Formula_component__WEBPACK_IMPORTED_MODULE_10__["P3FormulaComponent"],
            _pages_P4_LifeCycle_P4_LifeCycle_component__WEBPACK_IMPORTED_MODULE_11__["P4LifeCycleComponent"],
            _pages_P5_UseDOMAPI_P5_UseDOMAPI_component__WEBPACK_IMPORTED_MODULE_12__["P5UseDOMAPIComponent"],
            _pages_P6_BindingInput_P6_BindingInput_component__WEBPACK_IMPORTED_MODULE_13__["P6BindingInputComponent"],
            _pages_P7_BindingInputOneWay_P7_BindingInputOneWay_component__WEBPACK_IMPORTED_MODULE_14__["P7BindingInputOneWayComponent"],
            _pages_P8_EventHandler_P8_EventHandler_component__WEBPACK_IMPORTED_MODULE_15__["P8EventHandlerComponent"],
            _pages_P9_OnChangeEvent_P9_OnChangeEvent_component__WEBPACK_IMPORTED_MODULE_16__["P9OnChangeEventComponent"],
            _pages_P10_BindingStyle_P10_BindingStyle_component__WEBPACK_IMPORTED_MODULE_17__["P10BindingStyleComponent"],
            _pages_P11_BindingClass_P11_BindingClass_component__WEBPACK_IMPORTED_MODULE_18__["P11BindingClassComponent"],
            _pages_P12_IfAndShow_P12_IfAndShow_component__WEBPACK_IMPORTED_MODULE_19__["P12IfAndShowComponent"],
            _pages_P13_ForEachLoop_P13_ForEachLoop_component__WEBPACK_IMPORTED_MODULE_20__["P13ForEachLoopComponent"],
            _pages_P14_AddComponent_P14_AddComponent_component__WEBPACK_IMPORTED_MODULE_21__["P14AddComponentComponent"],
            _pages_P15_ComponentAttribute_P15_ComponentAttribute_component__WEBPACK_IMPORTED_MODULE_22__["P15ComponentAttributeComponent"],
            _pages_P16_ComponentMethod_P16_ComponentMethod_component__WEBPACK_IMPORTED_MODULE_23__["P16ComponentMethodComponent"],
            _pages_P17_StateContainer_P17_StateContainer_component__WEBPACK_IMPORTED_MODULE_24__["P17StateContainerComponent"],
            _pages_P18_ReadJSON_P18_ReadJSON_component__WEBPACK_IMPORTED_MODULE_25__["P18ReadJSONComponent"],
            _pages_P19_ReadText_P19_ReadText_component__WEBPACK_IMPORTED_MODULE_26__["P19ReadTextComponent"],
            _components_NavMenu_NavMenu_component__WEBPACK_IMPORTED_MODULE_27__["NavMenuComponent"],
            _components_CodeView_CodeView_component__WEBPACK_IMPORTED_MODULE_28__["CodeViewComponent"],
            _components_ComponentA_ComponentA_component__WEBPACK_IMPORTED_MODULE_29__["ComponentAComponent"],
            _components_ComponentB_ComponentB_component__WEBPACK_IMPORTED_MODULE_30__["ComponentBComponent"],
            _components_ComponentC_ComponentC_component__WEBPACK_IMPORTED_MODULE_31__["ComponentCComponent"],
            _components_Toast_Toast_component__WEBPACK_IMPORTED_MODULE_32__["ToastComponent"],
            _components_BooksInput_BooksInput_component__WEBPACK_IMPORTED_MODULE_33__["BooksInputComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/BooksInput/BooksInput.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/BooksInput/BooksInput.component.ts ***!
  \***************************************************************/
/*! exports provided: BooksInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksInputComponent", function() { return BooksInputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store.service */ "./src/app/store.service.ts");

const template = `
<div>
	<div><textarea [(ngModel)]="bookList" id="bookList"></textarea></div>
	<button (click)="setBooks()">Set Books!</button>
</div>

<style>
#bookList{
	height: 300px;
	width: 300px;
}
</style>
`;


let BooksInputComponent = class BooksInputComponent {
    constructor(store) {
        this.store = store;
        this.bookList = `たのしいさんすう
たのしいこくご
たのしいどうとく
かぐやひめ
シンデレラ
うらしまたろう
かちかちやま`;
    }
    setBooks() {
        this.store.books = this.bookList.split(/\r|\n|\r\n/).filter(s => s != "");
        this.store.date = new Date();
        alert("setBooks!");
    }
};
BooksInputComponent.ctorParameters = () => [
    { type: _store_service__WEBPACK_IMPORTED_MODULE_2__["StoreService"] }
];
BooksInputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "BooksInput",
        template: template
    })
], BooksInputComponent);



/***/ }),

/***/ "./src/app/components/CodeView/CodeView.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/CodeView/CodeView.component.ts ***!
  \***********************************************************/
/*! exports provided: CodeViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeViewComponent", function() { return CodeViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");

const template = `
<div id=codeView>
	<div *ngFor="let c of codes">
		<h3>{{c.name}}</h3>
		<pre><code>{{c.code}}</code></pre>
	</div>
</div>

<style>
#codeView div{
	border: 1px double #000;
	margin: 10px 0;
	padding: 5px;
}
#codeView code{
	color: #0000FF;
	font-family: "M+ 1mn";
	line-height: 1em;
	tab-size: 4;
	-moz-tab-size: 4;
	cursor: text;
}
</style>
`;



let CodeViewComponent = class CodeViewComponent {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.codes = [];
        this.router.events.subscribe(event => {
            if (this.pageList && event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"])
                this.moveURL();
        });
    }
    moveURL() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var key = location.pathname.split("/").pop();
            this.codes = yield Promise.all(this.pageList[key].map((v) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                return ({
                    name: v == "$store" ? "store.service.ts" : v + ".component.ts",
                    code: yield new Promise(res => this.http.get(`./assets/code/${v}.txt?0`, { responseType: "text" }).subscribe(res))
                });
            })));
        });
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.pageList = yield new Promise(res => this.http.get("./assets/pageList.json?0").subscribe(res));
            yield this.moveURL();
        });
    }
};
CodeViewComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
CodeViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "CodeView",
        template: template
    })
], CodeViewComponent);



/***/ }),

/***/ "./src/app/components/ComponentA/ComponentA.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/ComponentA/ComponentA.component.ts ***!
  \***************************************************************/
/*! exports provided: ComponentAComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentAComponent", function() { return ComponentAComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

const template = `
<div>
	<h3>ComponentA</h3>
	<textarea></textarea>
</div>
`;

let ComponentAComponent = class ComponentAComponent {
};
ComponentAComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "ComponentA",
        template: template
    })
], ComponentAComponent);



/***/ }),

/***/ "./src/app/components/ComponentB/ComponentB.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/ComponentB/ComponentB.component.ts ***!
  \***************************************************************/
/*! exports provided: ComponentBComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentBComponent", function() { return ComponentBComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

const template = `
<div>
	<input id=chk type=checkbox>
	<label for=chk>ComponentB</label>
</div>
`;

let ComponentBComponent = class ComponentBComponent {
};
ComponentBComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "ComponentB",
        template: template
    })
], ComponentBComponent);



/***/ }),

/***/ "./src/app/components/ComponentC/ComponentC.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/ComponentC/ComponentC.component.ts ***!
  \***************************************************************/
/*! exports provided: ComponentCComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentCComponent", function() { return ComponentCComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

const template = `
<div [style.color]="color">
	Input Attribute={{msg}}
</div>
`;

let ComponentCComponent = class ComponentCComponent {
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ComponentCComponent.prototype, "msg", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ComponentCComponent.prototype, "color", void 0);
ComponentCComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "ComponentC",
        template: template
    })
], ComponentCComponent);



/***/ }),

/***/ "./src/app/components/NavMenu/NavMenu.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/NavMenu/NavMenu.component.ts ***!
  \*********************************************************/
/*! exports provided: NavMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavMenuComponent", function() { return NavMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

const template = `
<nav>
	<b style="color:#900;font-size:1.5em;">Angular Sample</b>
	<ol type="1" start="0">
		<li><a routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}" routerLink="/">HelloWorld</a></li>
		<li><a routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}" routerLink="/StyleBlock">StyleBlock</a></li>
		<li><a routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}" routerLink="/ScriptBlock">ScriptBlock</a></li>
		<li><a routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}" routerLink="/Formula">Formula</a></li>
		<li><a routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}" routerLink="/LifeCycle">LifeCycle</a></li>
		<li><a routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}" routerLink="/UseDOMAPI">UseDOMAPI</a></li>
		<li><a routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}" routerLink="/BindingInput">BindingInput</a></li>
		<li><a routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}" routerLink="/BindingInputOneWay">BindingInputOneWay</a></li>
		<li><a routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}" routerLink="/EventHandler">EventHandler</a></li>
		<li><a routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}" routerLink="/OnChangeEvent">OnChangeEvent</a></li>
		<li><a routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}" routerLink="/BindingStyle">BindingStyle</a></li>
		<li><a routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}" routerLink="/BindingClass">BindingClass</a></li>
		<li><a routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}" routerLink="/IfAndShow">IfAndShow</a></li>
		<li><a routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}" routerLink="/ForEachLoop">ForEachLoop</a></li>
		<li><a routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}" routerLink="/AddComponent">AddComponent</a></li>
		<li><a routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}" routerLink="/ComponentAttribute">ComponentAttribute</a></li>
		<li><a routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}" routerLink="/ComponentMethod">ComponentMethod</a></li>
		<li><a routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}" routerLink="/StateContainer">StateContainer</a></li>
		<li><a routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}" routerLink="/ReadJSON">ReadJSON</a></li>
		<li><a routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}" routerLink="/ReadText">ReadText</a></li>
	</ol>
	<div style="display:flex;flex-direction:column;">
		<b><a [href]="ve">Go Vue.js!</a></b>
		<b><a [href]="br">Go Blazor!</a></b>
		<b><a href="https://qiita.com/yosgspec/items/3cf93e70a81805d70d29">Qiita</a></b>
		<b><a href="https://github.com/yosgspec/VueVsBlazor">GitHug</a></b>
		<b><a href="/">Top Page</a></b>
	</div>
</nav>

<style>
.active{
	color: #FF0000;
	font-weight: bold;
}
</style>
`;

let NavMenuComponent = class NavMenuComponent {
    get ve() { return location.href.replace("/ng/", "/ve/"); }
    get br() { return location.href.replace("/ng/", "/br/"); }
};
NavMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "NavMenu",
        template: template
    })
], NavMenuComponent);



/***/ }),

/***/ "./src/app/components/Toast/Toast.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/Toast/Toast.component.ts ***!
  \*****************************************************/
/*! exports provided: ToastComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastComponent", function() { return ToastComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

const template = `
<dialog [open]="isShow">
	{{msg}}
</dialog>
`;

let ToastComponent = class ToastComponent {
    constructor() {
        this.isShow = false;
        this.msg = "";
    }
    show(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.msg = msg;
            this.isShow = true;
            yield new Promise(res => setTimeout(res, 1500));
            this.isShow = false;
        });
    }
};
ToastComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "Toast",
        template: template
    })
], ToastComponent);



/***/ }),

/***/ "./src/app/pages/Index/Index.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/Index/Index.component.ts ***!
  \************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

const template = `
<div>
	<h1>Hello Angular!</h1>
</div>
`;

let IndexComponent = class IndexComponent {
};
IndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "Index",
        template: template
    })
], IndexComponent);



/***/ }),

/***/ "./src/app/pages/P10_BindingStyle/P10_BindingStyle.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/P10_BindingStyle/P10_BindingStyle.component.ts ***!
  \**********************************************************************/
/*! exports provided: P10BindingStyleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P10BindingStyleComponent", function() { return P10BindingStyleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

const template = `
<div>
	<h1>Check: {{isChecked}}</h1>
	<input id=chk type=checkbox [(ngModel)]="isChecked">
	<label for=chk>CheckBox</label>
	<div [style.color]="isChecked? 'blue': 'red'">
		Change Style!
	</div>
</div>
`;

let P10BindingStyleComponent = class P10BindingStyleComponent {
    constructor() {
        this.isChecked = false;
    }
};
P10BindingStyleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "BindingStyle",
        template: template
    })
], P10BindingStyleComponent);



/***/ }),

/***/ "./src/app/pages/P11_BindingClass/P11_BindingClass.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/P11_BindingClass/P11_BindingClass.component.ts ***!
  \**********************************************************************/
/*! exports provided: P11BindingClassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P11BindingClassComponent", function() { return P11BindingClassComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

const template = `
<div>
	<h1>Check: {{isChecked}}</h1>
	<input id=chk type=checkbox [(ngModel)]="isChecked">
	<label for=chk>CheckBox</label>
	<div [class.clsA]="isChecked" [class.clsB]="!isChecked">
		Change Style!
	</div>
</div>

<style>
.clsA{
	color: blue;
	font-size: 1.5em;
	text-decoration: underline solid;
}

.clsB{
	color: red;
	font-size: 1.0em;
	font-style: italic;
}
</style>
`;

let P11BindingClassComponent = class P11BindingClassComponent {
    constructor() {
        this.isChecked = false;
    }
};
P11BindingClassComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "BindingClass",
        template: template
    })
], P11BindingClassComponent);



/***/ }),

/***/ "./src/app/pages/P12_IfAndShow/P12_IfAndShow.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/P12_IfAndShow/P12_IfAndShow.component.ts ***!
  \****************************************************************/
/*! exports provided: P12IfAndShowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P12IfAndShowComponent", function() { return P12IfAndShowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

const template = `
<div>
	<h1>Check: {{isChecked}}</h1>
	<input id=chk type=checkbox [(ngModel)]="isChecked">
	<label for=chk>CheckBox</label>
	<div *ngIf="isChecked">
		<input>
	</div>
	<div [style.display]="isChecked? '': 'none'">
		<input>
	</div>
</div>
`;

let P12IfAndShowComponent = class P12IfAndShowComponent {
    constructor() {
        this.isChecked = false;
    }
};
P12IfAndShowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "IfAndShow",
        template: template
    })
], P12IfAndShowComponent);



/***/ }),

/***/ "./src/app/pages/P13_ForEachLoop/P13_ForEachLoop.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/P13_ForEachLoop/P13_ForEachLoop.component.ts ***!
  \********************************************************************/
/*! exports provided: P13ForEachLoopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P13ForEachLoopComponent", function() { return P13ForEachLoopComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

const template = `
<div>
	<div *ngFor="let v of dict | keyvalue">
		<input [id]="v.key" type=checkbox [(ngModel)]="dict[v.key]">
		<label [for]="v.key">{{v.key}}</label>
	</div>
</div>
`;

let P13ForEachLoopComponent = class P13ForEachLoopComponent {
    constructor() {
        this.dict = {
            A: true,
            B: true,
            C: true,
            D: false,
            E: false
        };
    }
};
P13ForEachLoopComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "ForEachLoop",
        template: template
    })
], P13ForEachLoopComponent);



/***/ }),

/***/ "./src/app/pages/P14_AddComponent/P14_AddComponent.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/P14_AddComponent/P14_AddComponent.component.ts ***!
  \**********************************************************************/
/*! exports provided: P14AddComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P14AddComponentComponent", function() { return P14AddComponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

const template = `
<div>
	<ComponentA></ComponentA>
	<ComponentB></ComponentB>
</div>
`;

let P14AddComponentComponent = class P14AddComponentComponent {
};
P14AddComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "AddComponent",
        template: template
    })
], P14AddComponentComponent);



/***/ }),

/***/ "./src/app/pages/P15_ComponentAttribute/P15_ComponentAttribute.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/P15_ComponentAttribute/P15_ComponentAttribute.component.ts ***!
  \**********************************************************************************/
/*! exports provided: P15ComponentAttributeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P15ComponentAttributeComponent", function() { return P15ComponentAttributeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

const template = `
<div>
	<ComponentC msg="View Message" color="#FF00FF"></ComponentC>
</div>
`;

let P15ComponentAttributeComponent = class P15ComponentAttributeComponent {
};
P15ComponentAttributeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "ComponentAttribute",
        template: template
    })
], P15ComponentAttributeComponent);



/***/ }),

/***/ "./src/app/pages/P16_ComponentMethod/P16_ComponentMethod.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/P16_ComponentMethod/P16_ComponentMethod.component.ts ***!
  \****************************************************************************/
/*! exports provided: P16ComponentMethodComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P16ComponentMethodComponent", function() { return P16ComponentMethodComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _components_Toast_Toast_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Toast/Toast.component */ "./src/app/components/Toast/Toast.component.ts");

const template = `
<div>
	<Toast></Toast>
	<button (click)="viewToast()">Click Me!</button>
</div>
`;


let P16ComponentMethodComponent = class P16ComponentMethodComponent {
    viewToast() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.toast.show("View Torst!");
        });
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_components_Toast_Toast_component__WEBPACK_IMPORTED_MODULE_2__["ToastComponent"], { static: false })
], P16ComponentMethodComponent.prototype, "toast", void 0);
P16ComponentMethodComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "ComponentMethod",
        template: template
    })
], P16ComponentMethodComponent);



/***/ }),

/***/ "./src/app/pages/P17_StateContainer/P17_StateContainer.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/P17_StateContainer/P17_StateContainer.component.ts ***!
  \**************************************************************************/
/*! exports provided: P17StateContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P17StateContainerComponent", function() { return P17StateContainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store.service */ "./src/app/store.service.ts");

const template = `
<div>
	<BooksInput></BooksInput>
	<button (click)="getBooks()">Get Books!</button>
	<h3>BookLists ({{date}})</h3>
	<ul>
		<li *ngFor="let book of books">{{book}}</li>
	</ul>
</div>
`;


let P17StateContainerComponent = class P17StateContainerComponent {
    constructor(store) {
        this.store = store;
        this.books = [];
        this.date = null;
    }
    ;
    getBooks() {
        this.books = this.store.books;
        this.date = this.store.date;
    }
};
P17StateContainerComponent.ctorParameters = () => [
    { type: _store_service__WEBPACK_IMPORTED_MODULE_2__["StoreService"] }
];
P17StateContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "StateContainer",
        template: template
    })
], P17StateContainerComponent);



/***/ }),

/***/ "./src/app/pages/P18_ReadJSON/P18_ReadJSON.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/P18_ReadJSON/P18_ReadJSON.component.ts ***!
  \**************************************************************/
/*! exports provided: P18ReadJSONComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P18ReadJSONComponent", function() { return P18ReadJSONComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");

const template = `
<div>
	<h3>Read JSON</h3>
	<ul>
		<li *ngFor="let value of list">{{value}}</li>
	</ul>
</div>`;


let P18ReadJSONComponent = class P18ReadJSONComponent {
    constructor(http) {
        this.http = http;
        this.list = [];
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.list = yield new Promise(res => this.http.get("./assets/weapons.json?0").subscribe(res));
        });
    }
};
P18ReadJSONComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
P18ReadJSONComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "ReadJSON",
        template: template
    })
], P18ReadJSONComponent);



/***/ }),

/***/ "./src/app/pages/P19_ReadText/P19_ReadText.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/P19_ReadText/P19_ReadText.component.ts ***!
  \**************************************************************/
/*! exports provided: P19ReadTextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P19ReadTextComponent", function() { return P19ReadTextComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");

const template = `
<div>
	<h3>Read Text</h3>
	<pre>{{text}}</pre>
</div>
`;


let P19ReadTextComponent = class P19ReadTextComponent {
    constructor(http) {
        this.http = http;
        this.text = "";
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.text = yield new Promise(res => this.http.get("./assets/kimigayo.txt?0", { responseType: "text" }).subscribe(res));
        });
    }
};
P19ReadTextComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
P19ReadTextComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "ReadText",
        template: template
    })
], P19ReadTextComponent);



/***/ }),

/***/ "./src/app/pages/P1_StyleBlock/P1_StyleBlock.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/P1_StyleBlock/P1_StyleBlock.component.ts ***!
  \****************************************************************/
/*! exports provided: P1StyleBlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P1StyleBlockComponent", function() { return P1StyleBlockComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

const template = `
<div id=index>
	<h1>Hello Angular!</h1>
</div>

<style>
div#index{
	color: #0000FF;
}
</style>
`;

let P1StyleBlockComponent = class P1StyleBlockComponent {
};
P1StyleBlockComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "StyleBlock",
        template: template
    })
], P1StyleBlockComponent);



/***/ }),

/***/ "./src/app/pages/P2_ScriptBlock/P2_ScriptBlock.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/P2_ScriptBlock/P2_ScriptBlock.component.ts ***!
  \******************************************************************/
/*! exports provided: P2ScriptBlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P2ScriptBlockComponent", function() { return P2ScriptBlockComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

const template = `
<div>
	<h1>{{title}}</h1>
</div>
`;

let P2ScriptBlockComponent = class P2ScriptBlockComponent {
    constructor() {
        this.title = "Hello Vue.js!";
    }
};
P2ScriptBlockComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "ScriptBlock",
        template: template
    })
], P2ScriptBlockComponent);



/***/ }),

/***/ "./src/app/pages/P3_Formula/P3_Formula.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/P3_Formula/P3_Formula.component.ts ***!
  \**********************************************************/
/*! exports provided: P3FormulaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P3FormulaComponent", function() { return P3FormulaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

const template = `
<div>
	<h1>10!={{10*9*8*7*6*5*4*3*2*1}}</h1>
</div>
`;

let P3FormulaComponent = class P3FormulaComponent {
};
P3FormulaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "Formula",
        template: template
    })
], P3FormulaComponent);



/***/ }),

/***/ "./src/app/pages/P4_LifeCycle/P4_LifeCycle.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/P4_LifeCycle/P4_LifeCycle.component.ts ***!
  \**************************************************************/
/*! exports provided: P4LifeCycleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P4LifeCycleComponent", function() { return P4LifeCycleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

const template = `
<div>
	<h1>{{title}}</h1>
</div>
`;

let P4LifeCycleComponent = class P4LifeCycleComponent {
    constructor() {
        this.title = "Hello Angular!";
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield new Promise(res => setTimeout(res, 5000));
            this.title += " 5s passed!";
        });
    }
};
P4LifeCycleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "LifeCycle",
        template: template
    })
], P4LifeCycleComponent);



/***/ }),

/***/ "./src/app/pages/P5_UseDOMAPI/P5_UseDOMAPI.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/P5_UseDOMAPI/P5_UseDOMAPI.component.ts ***!
  \**************************************************************/
/*! exports provided: P5UseDOMAPIComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P5UseDOMAPIComponent", function() { return P5UseDOMAPIComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

const template = `
<div>
	<h1>Alert</h1>
</div>
`;

let P5UseDOMAPIComponent = class P5UseDOMAPIComponent {
    ngOnInit() {
        var title = document.title;
        alert(title);
    }
};
P5UseDOMAPIComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "UseDOMAPI",
        template: template
    })
], P5UseDOMAPIComponent);



/***/ }),

/***/ "./src/app/pages/P6_BindingInput/P6_BindingInput.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/P6_BindingInput/P6_BindingInput.component.ts ***!
  \********************************************************************/
/*! exports provided: P6BindingInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P6BindingInputComponent", function() { return P6BindingInputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

const template = `
<div>
	<h1>{{title}}</h1>
	<input [(ngModel)]="title">
</div>
`;

let P6BindingInputComponent = class P6BindingInputComponent {
    constructor() {
        this.title = "Hello Angular!";
    }
};
P6BindingInputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "BindingInput",
        template: template
    })
], P6BindingInputComponent);



/***/ }),

/***/ "./src/app/pages/P7_BindingInputOneWay/P7_BindingInputOneWay.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/P7_BindingInputOneWay/P7_BindingInputOneWay.component.ts ***!
  \********************************************************************************/
/*! exports provided: P7BindingInputOneWayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P7BindingInputOneWayComponent", function() { return P7BindingInputOneWayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

const template = `
<div>
	<h1>{{title}}</h1>
	<input [ngModel]="title">
</div>
`;

let P7BindingInputOneWayComponent = class P7BindingInputOneWayComponent {
    constructor() {
        this.title = "Hello Angular!";
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            for (;;) {
                yield new Promise(res => setTimeout(res, 2000));
                this.title += ">";
            }
        });
    }
};
P7BindingInputOneWayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "BindingInputOneWay",
        template: template
    })
], P7BindingInputOneWayComponent);



/***/ }),

/***/ "./src/app/pages/P8_EventHandler/P8_EventHandler.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/P8_EventHandler/P8_EventHandler.component.ts ***!
  \********************************************************************/
/*! exports provided: P8EventHandlerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P8EventHandlerComponent", function() { return P8EventHandlerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

const template = `
<div>
	<button (click)="openDialog()">Click Me!</button>
</div>
`;

let P8EventHandlerComponent = class P8EventHandlerComponent {
    constructor() {
        this.title = "Hello Angular!";
    }
    openDialog() {
        alert(this.title);
    }
};
P8EventHandlerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "EventHandler",
        template: template
    })
], P8EventHandlerComponent);



/***/ }),

/***/ "./src/app/pages/P9_OnChangeEvent/P9_OnChangeEvent.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/P9_OnChangeEvent/P9_OnChangeEvent.component.ts ***!
  \**********************************************************************/
/*! exports provided: P9OnChangeEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P9OnChangeEventComponent", function() { return P9OnChangeEventComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

const template = `
<div>
	<h1>Check: {{isChecked}}</h1>
	<input id=chk type=checkbox [(ngModel)]="chkChange">
	<label for=chk>CheckBox</label>
</div>
`;

let P9OnChangeEventComponent = class P9OnChangeEventComponent {
    constructor() {
        this.isChecked = false;
    }
    get chkChange() { return this.isChecked; }
    set chkChange(value) {
        this.isChecked = value;
        alert(`Check: ${this.isChecked}`);
    }
};
P9OnChangeEventComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "OnChangeEvent",
        template: template
    })
], P9OnChangeEventComponent);



/***/ }),

/***/ "./src/app/store.service.ts":
/*!**********************************!*\
  !*** ./src/app/store.service.ts ***!
  \**********************************/
/*! exports provided: StoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreService", function() { return StoreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let StoreService = class StoreService {
    constructor() {
        this.books = [];
        this.date = null;
    }
};
StoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], StoreService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\YOS_G-spec\Documents\script\webdata\gspectoolEx\VueVsBlazor\ng\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map