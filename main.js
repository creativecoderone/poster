(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light  \">\n  <a (click)=\"caner = false\" class=\"navbar-brand\" href=\"#\">\n    <img src=\"./assets/logo.png\" alt=\"\"\n    style=\"width: 45px\" > &nbsp;  <span style=\"font-size: 22px; color: #40c4ff ;font-family: 'Alef', sans-serif; \">Everything96</span>\n  </a>\n  <!--<button class=\"navbar-toggler hidden-lg-up\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavId\" aria-controls=\"collapsibleNavId\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <i class='fas fa-align-justify'></i></button>-->\n  <!--<div class=\"collapse navbar-collapse\" id=\"collapsibleNavId\">\n    <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\n      <a class=\"nav-link\" href=\"#\" style=\"text-align: center;padding:5px;float: right\" (click)=\"canerIt()\">PlayGround</a>\n    </ul>\n  </div>-->\n</nav>\n<div class=\"\" *ngIf=\"!loader\">\n  <div class=\"container animated fadeInUp\" *ngIf=\"!caner\">\n    <app-sugar></app-sugar>\n  </div>\n  <div class=\"container animated fadeInUp\" *ngIf=\"caner\">\n    <app-can></app-can>\n  </div>\n  <div class=\"\" style=\"  margin: 30px;\">\n    <app-mug> </app-mug>\n  </div>\n  <br>\n</div>\n<!--<google-chart #chart [title]=\"title\" [type]=\"type\" [data]=\"data\" [columnNames]=\"columnNames\" [options]=\"options\" [width]=\"width\"\n    [height]=\"height\">\n  </google-chart>-->\n<div class=\"footer\" style=\"z-index: 99\" *ngIf=\"!loader\">\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <div class=\"text-center\">\n        <h6 class=\"text-center\">About</h6>\n        <div class=\"text-center\">\n          A platform to write code documents as bricks using <b (click)=\"canerIt()\" style=\"cursor: pointer;padding: 5px;margin:3px;\"\n            class=\"badge badge-dark\">PlayGround   <i class='fas fa-desktop'></i> </b>\n          <br> A serverless | databaseless application for content publishing.\n          <br>Protected under MIT Licence.\n          <br>All Rsights Reserved.\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"row\">\n        <!--<div class=\"col-md-4\">\n          <img src=\"./assets/logo.png\" alt=\"\" class=\"v\" style=\"width: 85px\">\n        </div>-->\n        <div class=\"col-md-12\">\n          <div class=\"ca animated bounceInUp\">\n            <br>\n            <h5 class=\"text-center\"> Everything96</h5>\n            <hr class=\"sdf\">\n            <div class=\"text-center\">Optimsed creative portal</div>\n            <div class=\"text-center\"> Copyright (c) 2019 MANOJKUMAR MUTHUKUMAR <small>by MIT</small>\n              <br>All Rights Reserved.\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <br>\n</div>\n<button class=\"prev\" (click)=\"canerIt()\">\n     <img src=\"https://cdn0.iconfinder.com/data/icons/simplicity/512/game_play-256.png\" style=\"width: 43px;padding:3px;\" alt=\"\"> </button>\n\n<img *ngIf=\"loader\" src=\"https://leerob.io/static/images/loading-placeholder-with-sass/final-result.gif\" class=\"loader2\"\n  alt=\"\">\n\n\n<img *ngIf=\"loader\" src=\"https://leerob.io/static/images/loading-placeholder-with-sass/final-result.gif\" class=\"loader2\"\n  alt=\"\">\n\n<img *ngIf=\"loader\" src=\"https://leerob.io/static/images/loading-placeholder-with-sass/final-result.gif\" class=\"loader2\"\n  alt=\"\">\n\n<img *ngIf=\"loader\" src=\"https://leerob.io/static/images/loading-placeholder-with-sass/final-result.gif\" class=\"loader2\"\n  alt=\"\">\n\n<div class=\"wm\">Everything96</div>\n\n<div class=\"progress-container\">\n  <div class=\"progress-bar\" id=\"myBar\"></div>\n</div>\n<div id=\"snackbar\">{{msg}}</div>\n<button onclick=\"topFunction()\" id=\"myTop\" title=\"\"><i class='fas fa-angle-double-up'></i></button>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".march {\n  margin: 3px; }\n\n.april {\n  padding: 10px;\n  margin: auto; }\n\nnav {\n  border-bottom: 2px solid #40c4ff; }\n\n.footer {\n  color: white;\n  margin-top: 16px;\n  background-color: black;\n  padding: 15px;\n  width: 100%;\n  border-top: 2px solid #40c4ff; }\n\n.footer h5,\n  .footer h6 {\n    color: #40c4ff; }\n\n.lic {\n  float: right; }\n\n.nav-link {\n  border: 1px solid white; }\n\n.v {\n  width: 100%;\n  margin: auto;\n  display: block;\n  padding: 10px; }\n\n.prev {\n  position: absolute;\n  border-radius: 10%;\n  top: 0;\n  right: 0;\n  border: 0px;\n  background-color: white;\n  margin: 10px; }\n\ni {\n  border: 0px; }\n\n.sdf {\n  border: 1px solid white;\n  margin: 10px; }\n\n.wm {\n  font-family: \"Alef\", sans-serif;\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n  position: fixed;\n  top: 45%;\n  opacity: 0.05;\n  z-index: 0;\n  cursor: vertical-text;\n  left: -8%;\n  font-size: 64px; }\n\n@media screen and (max-height: 768px) {\n  .wm {\n    display: none; } }\n\n.progress-container {\n  width: 100%;\n  height: 4px;\n  position: fixed;\n  top: 0;\n  background: #ccc; }\n\n.progress-bar {\n  height: 4px;\n  background: #40c4ff;\n  width: 0%; }\n\n.loader2 {\n  margin: auto;\n  display: block;\n  padding: 10px; }\n\n#myTop {\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  margin: 15px;\n  border-radius: 5px;\n  padding: 5px 10px 5px 10px;\n  background-color: #40c4ff;\n  color: white;\n  border: 1px solid #40c4ff;\n  box-shadow: 3px 3px 3px   gainsboro; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxtYW5vbXV0aFxcRGVza3RvcFxcV29ya0Zyb21IZXJlXFxTdGFydEhlcmVcXGFwcGxpY2F0aW9uLXdvcmtIZXJlXFxuZy1wcm8vc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVcsRUFDWjs7QUFDRDtFQUNFLGNBQWE7RUFDYixhQUFZLEVBQ2I7O0FBQ0Q7RUFDRSxpQ0FBZ0MsRUFDakM7O0FBQ0Q7RUFDRSxhQUFZO0VBQ1osaUJBQWdCO0VBQ2hCLHdCQUF1QjtFQUN2QixjQUFhO0VBQ2IsWUFBVztFQUNYLDhCQUE2QixFQUs5Qjs7QUFYRDs7SUFTSSxlQUFjLEVBQ2Y7O0FBRUg7RUFDRSxhQUFZLEVBRWI7O0FBQ0Q7RUFDRSx3QkFBdUIsRUFDeEI7O0FBQ0Q7RUFDRSxZQUFXO0VBQ1gsYUFBWTtFQUNaLGVBQWM7RUFDZCxjQUFhLEVBQ2Q7O0FBQ0Q7RUFDRSxtQkFBa0I7RUFDbEIsbUJBQWtCO0VBQ2xCLE9BQU07RUFDTixTQUFRO0VBRVIsWUFBVztFQUdYLHdCQUF1QjtFQUN2QixhQUFZLEVBQ2I7O0FBQ0Q7RUFDRSxZQUFXLEVBQ1o7O0FBQ0Q7RUFDRSx3QkFBdUI7RUFDdkIsYUFBWSxFQUNiOztBQUNEO0VBQ0UsZ0NBQStCO0VBQy9CLGtDQUF5QjtVQUF6QiwwQkFBeUI7RUFDekIsZ0JBQWU7RUFDZixTQUFRO0VBQ1IsY0FBYTtFQUNiLFdBQVU7RUFDVixzQkFBcUI7RUFDckIsVUFBUztFQUVULGdCQUFlLEVBQ2hCOztBQUNEO0VBQ0U7SUFDRSxjQUFhLEVBQ2QsRUFBQTs7QUFHSDtFQUNFLFlBQVc7RUFDWCxZQUFXO0VBQ1gsZ0JBQWU7RUFDZixPQUFNO0VBQ04saUJBQWdCLEVBQ2pCOztBQUVEO0VBQ0UsWUFBVztFQUNYLG9CQUFtQjtFQUNuQixVQUFTLEVBQ1Y7O0FBQ0Q7RUFDRSxhQUFZO0VBQ1osZUFBYztFQUNkLGNBQWEsRUFDZDs7QUFDRDtFQUNFLGdCQUFlO0VBQ2YsVUFBUztFQUNULFNBQVE7RUFDUixhQUFZO0VBQ1osbUJBQWtCO0VBQ2xCLDJCQUEwQjtFQUMxQiwwQkFBeUI7RUFDekIsYUFBWTtFQUNaLDBCQUF5QjtFQUN6QixvQ0FBbUMsRUFDcEMiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFyY2gge1xyXG4gIG1hcmdpbjogM3B4O1xyXG59XHJcbi5hcHJpbCB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxubmF2IHtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzQwYzRmZjtcclxufVxyXG4uZm9vdGVyIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luLXRvcDogMTZweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjNDBjNGZmO1xyXG4gIGg1LFxyXG4gIGg2IHtcclxuICAgIGNvbG9yOiAjNDBjNGZmO1xyXG4gIH1cclxufVxyXG4ubGljIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbn1cclxuLm5hdi1saW5rIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxufVxyXG4udiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuLnByZXYge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3JkZXItcmFkaXVzOiAxMCU7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIC8vIGZvbnQtc1xyXG4gIGJvcmRlcjogMHB4O1xyXG4gIC8vIGJveC1zaGFkb3c6IDNweCAzcHggNXB4IGdhaW5zYm9ybztcclxuICAvLyBib3JkZXI6IDFweCBzb2xpZCAjNDBjNGZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbjogMTBweDtcclxufVxyXG5pIHtcclxuICBib3JkZXI6IDBweDtcclxufVxyXG4uc2RmIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICBtYXJnaW46IDEwcHg7XHJcbn1cclxuLndtIHtcclxuICBmb250LWZhbWlseTogXCJBbGVmXCIsIHNhbnMtc2VyaWY7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiA0NSU7XHJcbiAgb3BhY2l0eTogMC4wNTtcclxuICB6LWluZGV4OiAwO1xyXG4gIGN1cnNvcjogdmVydGljYWwtdGV4dDtcclxuICBsZWZ0OiAtOCU7XHJcbiAgLy8gdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCA1MCUpO1xyXG4gIGZvbnQtc2l6ZTogNjRweDtcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNzY4cHgpIHtcclxuICAud20ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbi5wcm9ncmVzcy1jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNHB4O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgYmFja2dyb3VuZDogI2NjYztcclxufVxyXG5cclxuLnByb2dyZXNzLWJhciB7XHJcbiAgaGVpZ2h0OiA0cHg7XHJcbiAgYmFja2dyb3VuZDogIzQwYzRmZjtcclxuICB3aWR0aDogMCU7XHJcbn1cclxuLmxvYWRlcjIge1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbiNteVRvcCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMDtcclxuICByaWdodDogMDtcclxuICBtYXJnaW46IDE1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MGM0ZmY7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM0MGM0ZmY7XHJcbiAgYm94LXNoYWRvdzogM3B4IDNweCAzcHggICBnYWluc2Jvcm87XHJcbn1cclxuIl19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = "Swan paper";
        this.caner = false;
        this.type = "PieChart";
        this.data = [
            ["Firefox", 45.0],
            ["IE", 26.8],
            ["Chrome", 12.8],
            ["Safari", 8.5],
            ["Opera", 6.2],
            ["Others", 0.7]
        ];
        this.columnNames = ["Browser", "Percentage"];
        this.options = {
            colors: ["#e0440e", "#e6693e", "#ec8f6e", "#f3b49f", "#f6c7b6"],
            is3D: true
        };
        this.loader = false;
    }
    AppComponent.prototype.canerIt = function () {
        var _this = this;
        this.loader = true;
        setTimeout(function () {
            _this.loader = false;
            _this.caner = !_this.caner;
        }, 1000);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-clipboard */ "./node_modules/ngx-clipboard/fesm5/ngx-clipboard.js");
/* harmony import */ var angular_google_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-google-charts */ "./node_modules/angular-google-charts/fesm5/angular-google-charts.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _sugar_sugar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sugar/sugar.component */ "./src/app/sugar/sugar.component.ts");
/* harmony import */ var _can_can_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./can/can.component */ "./src/app/can/can.component.ts");
/* harmony import */ var _sanitaizer_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sanitaizer.pipe */ "./src/app/sanitaizer.pipe.ts");
/* harmony import */ var ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-filter-pipe */ "./node_modules/ngx-filter-pipe/esm5/ngx-filter-pipe.js");
/* harmony import */ var _sample_sample_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sample/sample.component */ "./src/app/sample/sample.component.ts");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var src_app_services_speech__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/services/speech */ "./src/app/services/speech.ts");
/* harmony import */ var _mug_mug_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./mug/mug.component */ "./src/app/mug/mug.component.ts");


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _sugar_sugar_component__WEBPACK_IMPORTED_MODULE_9__["SugarComponent"],
                _can_can_component__WEBPACK_IMPORTED_MODULE_10__["CanComponent"],
                _sanitaizer_pipe__WEBPACK_IMPORTED_MODULE_11__["SanitaizerPipe"],
                _sample_sample_component__WEBPACK_IMPORTED_MODULE_13__["SampleComponent"],
                _mug_mug_component__WEBPACK_IMPORTED_MODULE_16__["MugComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                angular_google_charts__WEBPACK_IMPORTED_MODULE_6__["GoogleChartsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_12__["FilterPipeModule"],
                ng2_search_filter__WEBPACK_IMPORTED_MODULE_14__["Ng2SearchPipeModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                ngx_clipboard__WEBPACK_IMPORTED_MODULE_5__["ClipboardModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ],
            exports: [_sanitaizer_pipe__WEBPACK_IMPORTED_MODULE_11__["SanitaizerPipe"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
            providers: [src_app_services_speech__WEBPACK_IMPORTED_MODULE_15__["SpeechRecognitionService"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/can/FONT.ts":
/*!*****************************!*\
  !*** ./src/app/can/FONT.ts ***!
  \*****************************/
/*! exports provided: FONT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FONT", function() { return FONT; });
var FONT = [
    "fas fa-address-book",
    "fas fa-address-card",
    "fas fa-adjust",
    "fas fa-align-center",
    "fas fa-align-justify",
    "fas fa-align-left",
    "fas fa-align-right",
    "fas fa-allergies",
    "fas fa-ambulance",
    "fas fa-american-sign-language-interpreting",
    "fas fa-anchor",
    "fas fa-angle-double-down",
    "fas fa-angle-double-left",
    "fas fa-angle-double-right",
    "fas fa-angle-double-up",
    "fas fa-angle-down",
    "fas fa-angle-left",
    "fas fa-angle-right",
    "fas fa-angle-up",
    "fas fa-archive",
    "fas fa-arrow-alt-circle-down",
    "fas fa-arrow-alt-circle-left",
    "fas fa-arrow-alt-circle-right",
    "fas fa-arrow-alt-circle-up",
    "fas fa-arrow-circle-down",
    "fas fa-arrow-circle-left",
    "fas fa-arrow-circle-right",
    "fas fa-arrow-circle-up",
    "fas fa-arrow-down",
    "fas fa-arrow-left",
    "fas fa-arrow-right",
    "fas fa-arrow-up",
    "fas fa-arrows-alt",
    "fas fa-arrows-alt-h",
    "fas fa-arrows-alt-v",
    "fas fa-assistive-listening-systems",
    "fas fa-asterisk",
    "fas fa-at",
    "fas fa-audio-description",
    "fas fa-backward",
    "fas fa-balance-scale",
    "fas fa-ban",
    "fas fa-band-aid",
    "fas fa-barcode",
    "fas fa-bars",
    "fas fa-baseball-ball",
    "fas fa-basketball-ball",
    "fas fa-bath",
    "fas fa-battery-empty",
    "fas fa-battery-full",
    "fas fa-battery-half",
    "fas fa-battery-quarter",
    "fas fa-battery-three-quarters",
    "fas fa-bed",
    "fas fa-beer",
    "fas fa-bell",
    "fas fa-bell-slash",
    "fas fa-bicycle",
    "fas fa-binoculars",
    "fas fa-birthday-cake",
    "fas fa-blind",
    "fas fa-bold",
    "fas fa-bolt",
    "fas fa-bomb",
    "fas fa-book",
    "fas fa-bookmark",
    "fas fa-bowling-ball",
    "fas fa-box",
    "fas fa-box-open",
    "fas fa-boxes",
    "fas fa-braille",
    "fas fa-briefcase",
    "fas fa-briefcase-medical",
    "fas fa-bug",
    "fas fa-building",
    "fas fa-bullhorn",
    "fas fa-bullseye",
    "fas fa-burn",
    "fas fa-bus",
    "fas fa-calculator",
    "fas fa-calendar",
    "fas fa-calendar-alt",
    "fas fa-calendar-check",
    "fas fa-calendar-minus",
    "fas fa-calendar-plus",
    "fas fa-calendar-times",
    "fas fa-camera",
    "fas fa-camera-retro",
    "fas fa-capsules",
    "fas fa-car",
    "fas fa-caret-down",
    "fas fa-caret-left",
    "fas fa-caret-right",
    "fas fa-caret-square-down",
    "fas fa-caret-square-left",
    "fas fa-caret-square-right",
    "fas fa-caret-square-up",
    "fas fa-caret-up",
    "fas fa-cart-arrow-down",
    "fas fa-cart-plus",
    "fas fa-certificate",
    "fas fa-chart-area",
    "fas fa-chart-bar",
    "fas fa-chart-line",
    "fas fa-chart-pie",
    "fas fa-check",
    "fas fa-check-circle",
    "fas fa-check-square",
    "fas fa-chess",
    "fas fa-chess-bishop",
    "fas fa-chess-board",
    "fas fa-chess-king",
    "fas fa-chess-knight",
    "fas fa-chess-pawn",
    "fas fa-chess-queen",
    "fas fa-chess-rook",
    "fas fa-chevron-circle-down",
    "fas fa-chevron-circle-left",
    "fas fa-chevron-circle-right",
    "fas fa-chevron-circle-up",
    "fas fa-chevron-down",
    "fas fa-chevron-left",
    "fas fa-chevron-right",
    "fas fa-chevron-up",
    "fas fa-child",
    "fas fa-circle",
    "fas fa-circle-notch",
    "fas fa-clipboard",
    "fas fa-clipboard-check",
    "fas fa-clipboard-list",
    "fas fa-clock",
    "fas fa-clone",
    "fas fa-closed-captioning",
    "fas fa-cloud",
    "fas fa-cloud-download-alt",
    "fas fa-cloud-upload-alt",
    "fas fa-code",
    "fas fa-code-branch",
    "fas fa-coffee",
    "fas fa-cog",
    "fas fa-cogs",
    "fas fa-columns",
    "fas fa-comment",
    "fas fa-comment-alt",
    "fas fa-comment-dots",
    "fas fa-comment-slash",
    "fas fa-comments",
    "fas fa-compass",
    "fas fa-compress",
    "fas fa-copy",
    "fas fa-copyright",
    "fas fa-couch",
    "fas fa-credit-card",
    "fas fa-crop",
    "fas fa-crosshairs",
    "fas fa-cube",
    "fas fa-cubes",
    "fas fa-cut",
    "fas fa-database",
    "fas fa-deaf",
    "fas fa-desktop",
    "fas fa-diagnoses",
    "fas fa-dna",
    "fas fa-dollar-sign",
    "fas fa-dolly",
    "fas fa-dolly-flatbed",
    "fas fa-donate",
    "fas fa-dot-circle",
    "fas fa-dove",
    "fas fa-download",
    "fas fa-edit",
    "fas fa-eject",
    "fas fa-ellipsis-h",
    "fas fa-ellipsis-v",
    "fas fa-envelope",
    "fas fa-envelope-open",
    "fas fa-envelope-square",
    "fas fa-eraser",
    "fas fa-euro-sign",
    "fas fa-exchange-alt",
    "fas fa-exclamation",
    "fas fa-exclamation-circle",
    "fas fa-exclamation-triangle",
    "fas fa-expand",
    "fas fa-expand-arrows-alt",
    "fas fa-external-link-alt",
    "fas fa-external-link-square-alt",
    "fas fa-eye",
    "fas fa-eye-dropper",
    "fas fa-eye-slash",
    "fas fa-fast-backward",
    "fas fa-fast-forward",
    "fas fa-fax",
    "fas fa-female",
    "fas fa-fighter-jet",
    "fas fa-file",
    "fas fa-file-alt",
    "fas fa-file-archive",
    "fas fa-file-audio",
    "fas fa-file-code",
    "fas fa-file-excel",
    "fas fa-file-image",
    "fas fa-file-medical",
    "fas fa-file-medical-alt",
    "fas fa-file-pdf",
    "fas fa-file-powerpoint",
    "fas fa-file-video",
    "fas fa-file-word",
    "fas fa-film",
    "fas fa-filter",
    "fas fa-fire",
    "fas fa-fire-extinguisher",
    "fas fa-first-aid",
    "fas fa-flag",
    "fas fa-flag-checkered",
    "fas fa-flask",
    "fas fa-folder",
    "fas fa-folder-open",
    "fas fa-font",
    "fas fa-football-ball",
    "fas fa-forward",
    "fas fa-frown",
    "fas fa-futbol",
    "fas fa-gamepad",
    "fas fa-gavel",
    "fas fa-gem",
    "fas fa-genderless",
    "fas fa-gift",
    "fas fa-glass-martini",
    "fas fa-globe",
    "fas fa-golf-ball",
    "fas fa-graduation-cap",
    "fas fa-h-square",
    "fas fa-hand-holding",
    "fas fa-hand-holding-heart",
    "fas fa-hand-holding-usd",
    "fas fa-hand-lizard",
    "fas fa-hand-paper",
    "fas fa-hand-peace",
    "fas fa-hand-point-down",
    "fas fa-hand-point-left",
    "fas fa-hand-point-right",
    "fas fa-hand-point-up",
    "fas fa-hand-pointer",
    "fas fa-hand-rock",
    "fas fa-hand-scissors",
    "fas fa-hand-spock",
    "fas fa-hands",
    "fas fa-hands-helping",
    "fas fa-handshake",
    "fas fa-hashtag",
    "fas fa-hdd",
    "fas fa-heading",
    "fas fa-headphones",
    "fas fa-heart",
    "fas fa-heartbeat",
    "fas fa-history",
    "fas fa-hockey-puck",
    "fas fa-home",
    "fas fa-hospital",
    "fas fa-hospital-alt",
    "fas fa-hospital-symbol",
    "fas fa-hourglass",
    "fas fa-hourglass-end",
    "fas fa-hourglass-half",
    "fas fa-hourglass-start",
    "fas fa-i-cursor",
    "fas fa-id-badge",
    "fas fa-id-card",
    "fas fa-id-card-alt",
    "fas fa-image",
    "fas fa-images",
    "fas fa-inbox",
    "fas fa-indent",
    "fas fa-industry",
    "fas fa-info",
    "fas fa-info-circle",
    "fas fa-italic",
    "fas fa-key",
    "fas fa-keyboard",
    "fas fa-language",
    "fas fa-laptop",
    "fas fa-leaf",
    "fas fa-lemon",
    "fas fa-level-down-alt",
    "fas fa-level-up-alt",
    "fas fa-life-ring",
    "fas fa-lightbulb",
    "fas fa-link",
    "fas fa-lira-sign",
    "fas fa-list",
    "fas fa-list-alt",
    "fas fa-list-ol",
    "fas fa-list-ul",
    "fas fa-location-arrow",
    "fas fa-lock",
    "fas fa-lock-open",
    "fas fa-long-arrow-alt-down",
    "fas fa-long-arrow-alt-left",
    "fas fa-long-arrow-alt-right",
    "fas fa-long-arrow-alt-up",
    "fas fa-low-vision",
    "fas fa-magic",
    "fas fa-magnet",
    "fas fa-male",
    "fas fa-map",
    "fas fa-map-marker",
    "fas fa-map-marker-alt",
    "fas fa-map-pin",
    "fas fa-map-signs",
    "fas fa-mars",
    "fas fa-mars-double",
    "fas fa-mars-stroke",
    "fas fa-mars-stroke-h",
    "fas fa-mars-stroke-v",
    "fas fa-medkit",
    "fas fa-meh",
    "fas fa-mercury",
    "fas fa-microchip",
    "fas fa-microphone",
    "fas fa-microphone-slash",
    "fas fa-minus",
    "fas fa-minus-circle",
    "fas fa-minus-square",
    "fas fa-mobile",
    "fas fa-mobile-alt",
    "fas fa-money-bill-alt",
    "fas fa-moon",
    "fas fa-motorcycle",
    "fas fa-mouse-pointer",
    "fas fa-music",
    "fas fa-neuter",
    "fas fa-newspaper",
    "fas fa-notes-medical",
    "fas fa-object-group",
    "fas fa-object-ungroup",
    "fas fa-outdent",
    "fas fa-paint-brush",
    "fas fa-pallet",
    "fas fa-paper-plane",
    "fas fa-paperclip",
    "fas fa-parachute-box",
    "fas fa-paragraph",
    "fas fa-paste",
    "fas fa-pause",
    "fas fa-pause-circle",
    "fas fa-paw",
    "fas fa-pen-square",
    "fas fa-pencil-alt",
    "fas fa-people-carry",
    "fas fa-percent",
    "fas fa-phone",
    "fas fa-phone-slash",
    "fas fa-phone-square",
    "fas fa-phone-volume",
    "fas fa-piggy-bank",
    "fas fa-pills",
    "fas fa-plane",
    "fas fa-play",
    "fas fa-play-circle",
    "fas fa-plug",
    "fas fa-plus",
    "fas fa-plus-circle",
    "fas fa-plus-square",
    "fas fa-podcast",
    "fas fa-poo",
    "fas fa-pound-sign",
    "fas fa-power-off",
    "fas fa-prescription-bottle",
    "fas fa-prescription-bottle-alt",
    "fas fa-print",
    "fas fa-procedures",
    "fas fa-puzzle-piece",
    "fas fa-qrcode",
    "fas fa-question",
    "fas fa-question-circle",
    "fas fa-quidditch",
    "fas fa-quote-left",
    "fas fa-quote-right",
    "fas fa-random",
    "fas fa-recycle",
    "fas fa-redo",
    "fas fa-redo-alt",
    "fas fa-registered",
    "fas fa-reply",
    "fas fa-reply-all",
    "fas fa-retweet",
    "fas fa-ribbon",
    "fas fa-road",
    "fas fa-rocket",
    "fas fa-rss",
    "fas fa-rss-square",
    "fas fa-ruble-sign",
    "fas fa-rupee-sign",
    "fas fa-save",
    "fas fa-search",
    "fas fa-search-minus",
    "fas fa-search-plus",
    "fas fa-seedling",
    "fas fa-server",
    "fas fa-share",
    "fas fa-share-alt",
    "fas fa-share-alt-square",
    "fas fa-share-square",
    "fas fa-shekel-sign",
    "fas fa-shield-alt",
    "fas fa-ship",
    "fas fa-shipping-fast",
    "fas fa-shopping-bag",
    "fas fa-shopping-basket",
    "fas fa-shopping-cart",
    "fas fa-shower",
    "fas fa-sign",
    "fas fa-sign-in-alt",
    "fas fa-sign-language",
    "fas fa-sign-out-alt",
    "fas fa-signal",
    "fas fa-sitemap",
    "fas fa-sliders-h",
    "fas fa-smile",
    "fas fa-smoking",
    "fas fa-snowflake",
    "fas fa-sort",
    "fas fa-sort-alpha-down",
    "fas fa-sort-alpha-up",
    "fas fa-sort-amount-down",
    "fas fa-sort-amount-up",
    "fas fa-sort-down",
    "fas fa-sort-numeric-down",
    "fas fa-sort-numeric-up",
    "fas fa-sort-up",
    "fas fa-space-shuttle",
    "fas fa-spinner",
    "fas fa-square",
    "fas fa-square-full",
    "fas fa-star",
    "fas fa-star-half",
    "fas fa-step-backward",
    "fas fa-step-forward",
    "fas fa-stethoscope",
    "fas fa-sticky-note",
    "fas fa-stop",
    "fas fa-stop-circle",
    "fas fa-stopwatch",
    "fas fa-street-view",
    "fas fa-strikethrough",
    "fas fa-subscript",
    "fas fa-subway",
    "fas fa-suitcase",
    "fas fa-sun",
    "fas fa-superscript",
    "fas fa-sync",
    "fas fa-sync-alt",
    "fas fa-syringe",
    "fas fa-table",
    "fas fa-table-tennis",
    "fas fa-tablet",
    "fas fa-tablet-alt",
    "fas fa-tablets",
    "fas fa-tachometer-alt",
    "fas fa-tag",
    "fas fa-tags",
    "fas fa-tape",
    "fas fa-tasks",
    "fas fa-taxi",
    "fas fa-terminal",
    "fas fa-text-height",
    "fas fa-text-width",
    "fas fa-th",
    "fas fa-th-large",
    "fas fa-th-list",
    "fas fa-thermometer",
    "fas fa-thermometer-empty",
    "fas fa-thermometer-full",
    "fas fa-thermometer-half",
    "fas fa-thermometer-quarter",
    "fas fa-thermometer-three-quarters",
    "fas fa-thumbs-down",
    "fas fa-thumbs-up",
    "fas fa-thumbtack",
    "fas fa-ticket-alt",
    "fas fa-times",
    "fas fa-times-circle",
    "fas fa-tint",
    "fas fa-toggle-off",
    "fas fa-toggle-on",
    "fas fa-trademark",
    "fas fa-train",
    "fas fa-transgender",
    "fas fa-transgender-alt",
    "fas fa-trash",
    "fas fa-trash-alt",
    "fas fa-tree",
    "fas fa-trophy",
    "fas fa-truck",
    "fas fa-truck-loading",
    "fas fa-truck-moving",
    "fas fa-tty",
    "fas fa-tv",
    "fas fa-umbrella",
    "fas fa-underline",
    "fas fa-undo",
    "fas fa-undo-alt",
    "fas fa-universal-access",
    "fas fa-university",
    "fas fa-unlink",
    "fas fa-unlock",
    "fas fa-unlock-alt",
    "fas fa-upload",
    "fas fa-user",
    "fas fa-user-circle",
    "fas fa-user-md",
    "fas fa-user-plus",
    "fas fa-user-secret",
    "fas fa-user-times",
    "fas fa-users",
    "fas fa-utensil-spoon",
    "fas fa-utensils",
    "fas fa-venus",
    "fas fa-venus-double",
    "fas fa-venus-mars",
    "fas fa-vial",
    "fas fa-vials",
    "fas fa-video",
    "fas fa-video-slash",
    "fas fa-volleyball-ball",
    "fas fa-volume-down",
    "fas fa-volume-off",
    "fas fa-volume-up",
    "fas fa-warehouse",
    "fas fa-weight",
    "fas fa-wheelchair",
    "fas fa-wifi",
    "fas fa-window-close",
    "fas fa-window-maximize",
    "fas fa-window-minimize",
    "fas fa-window-restore",
    "fas fa-wine-glass",
    "fas fa-won-sign",
    "fas fa-wrench",
    "fas fa-x-ray",
    "fas fa-yen-sign",
    "far fa-address-book",
    "far fa-address-card",
    "far fa-arrow-alt-circle-down",
    "far fa-arrow-alt-circle-left",
    "far fa-arrow-alt-circle-right",
    "far fa-arrow-alt-circle-up",
    "far fa-bell",
    "far fa-bell-slash",
    "far fa-bookmark",
    "far fa-building",
    "far fa-calendar",
    "far fa-calendar-alt",
    "far fa-calendar-check",
    "far fa-calendar-minus",
    "far fa-calendar-plus",
    "far fa-calendar-times",
    "far fa-caret-square-down",
    "far fa-caret-square-left",
    "far fa-caret-square-right",
    "far fa-caret-square-up",
    "far fa-chart-bar",
    "far fa-check-circle",
    "far fa-check-square",
    "far fa-circle",
    "far fa-clipboard",
    "far fa-clock",
    "far fa-clone",
    "far fa-closed-captioning",
    "far fa-comment",
    "far fa-comment-alt",
    "far fa-comments",
    "far fa-compass",
    "far fa-copy",
    "far fa-copyright",
    "far fa-credit-card",
    "far fa-dot-circle",
    "far fa-edit",
    "far fa-envelope",
    "far fa-envelope-open",
    "far fa-eye-slash",
    "far fa-file",
    "far fa-file-alt",
    "far fa-file-archive",
    "far fa-file-audio",
    "far fa-file-code",
    "far fa-file-excel",
    "far fa-file-image",
    "far fa-file-pdf",
    "far fa-file-powerpoint",
    "far fa-file-video",
    "far fa-file-word",
    "far fa-flag",
    "far fa-folder",
    "far fa-folder-open",
    "far fa-frown",
    "far fa-futbol",
    "far fa-gem",
    "far fa-hand-lizard",
    "far fa-hand-paper",
    "far fa-hand-peace",
    "far fa-hand-point-down",
    "far fa-hand-point-left",
    "far fa-hand-point-right",
    "far fa-hand-point-up",
    "far fa-hand-pointer",
    "far fa-hand-rock",
    "far fa-hand-scissors",
    "far fa-hand-spock",
    "far fa-handshake",
    "far fa-hdd",
    "far fa-heart",
    "far fa-hospital",
    "far fa-hourglass",
    "far fa-id-badge",
    "far fa-id-card",
    "far fa-image",
    "far fa-images",
    "far fa-keyboard",
    "far fa-lemon",
    "far fa-life-ring",
    "far fa-lightbulb",
    "far fa-list-alt",
    "far fa-map",
    "far fa-meh",
    "far fa-minus-square",
    "far fa-money-bill-alt",
    "far fa-moon",
    "far fa-newspaper",
    "far fa-object-group",
    "far fa-object-ungroup",
    "far fa-paper-plane",
    "far fa-pause-circle",
    "far fa-play-circle",
    "far fa-plus-square",
    "far fa-question-circle",
    "far fa-registered",
    "far fa-save",
    "far fa-share-square",
    "far fa-smile",
    "far fa-snowflake",
    "far fa-square",
    "far fa-star",
    "far fa-star-half",
    "far fa-sticky-note",
    "far fa-stop-circle",
    "far fa-sun",
    "far fa-thumbs-down",
    "far fa-thumbs-up",
    "far fa-times-circle",
    "far fa-trash-alt",
    "far fa-user",
    "far fa-user-circle",
    "far fa-window-close",
    "far fa-window-maximize",
    "far fa-window-minimize",
    "far fa-window-restore",
    "fab fa-500px",
    "fab fa-accessible-icon",
    "fab fa-accusoft",
    "fab fa-adn",
    "fab fa-adversal",
    "fab fa-affiliatetheme",
    "fab fa-algolia",
    "fab fa-amazon",
    "fab fa-amazon-pay",
    "fab fa-amilia",
    "fab fa-android",
    "fab fa-angellist",
    "fab fa-angrycreative",
    "fab fa-angular",
    "fab fa-app-store",
    "fab fa-app-store-ios",
    "fab fa-apper",
    "fab fa-apple",
    "fab fa-apple-pay",
    "fab fa-asymmetrik",
    "fab fa-audible",
    "fab fa-autoprefixer",
    "fab fa-avianex",
    "fab fa-aviato",
    "fab fa-aws",
    "fab fa-bandcamp",
    "fab fa-behance",
    "fab fa-behance-square",
    "fab fa-bimobject",
    "fab fa-bitbucket",
    "fab fa-bitcoin",
    "fab fa-bity",
    "fab fa-black-tie",
    "fab fa-blackberry",
    "fab fa-blogger",
    "fab fa-blogger-b",
    "fab fa-bluetooth",
    "fab fa-bluetooth-b",
    "fab fa-btc",
    "fab fa-buromobelexperte",
    "fab fa-buysellads",
    "fab fa-cc-amazon-pay",
    "fab fa-cc-amex",
    "fab fa-cc-apple-pay",
    "fab fa-cc-diners-club",
    "fab fa-cc-discover",
    "fab fa-cc-jcb",
    "fab fa-cc-mastercard",
    "fab fa-cc-paypal",
    "fab fa-cc-stripe",
    "fab fa-cc-visa",
    "fab fa-centercode",
    "fab fa-chrome",
    "fab fa-cloudscale",
    "fab fa-cloudsmith",
    "fab fa-cloudversify",
    "fab fa-codepen",
    "fab fa-codiepie",
    "fab fa-connectdevelop",
    "fab fa-contao",
    "fab fa-cpanel",
    "fab fa-creative-commons",
    "fab fa-css3",
    "fab fa-css3-alt",
    "fab fa-cuttlefish",
    "fab fa-d-and-d",
    "fab fa-dashcube",
    "fab fa-delicious",
    "fab fa-deploydog",
    "fab fa-deskpro",
    "fab fa-deviantart",
    "fab fa-digg",
    "fab fa-digital-ocean",
    "fab fa-discord",
    "fab fa-discourse",
    "fab fa-dochub",
    "fab fa-docker",
    "fab fa-draft2digital",
    "fab fa-dribbble",
    "fab fa-dribbble-square",
    "fab fa-dropbox",
    "fab fa-drupal",
    "fab fa-dyalog",
    "fab fa-earlybirds",
    "fab fa-edge",
    "fab fa-elementor",
    "fab fa-ember",
    "fab fa-empire",
    "fab fa-envira",
    "fab fa-erlang",
    "fab fa-ethereum",
    "fab fa-etsy",
    "fab fa-expeditedssl",
    "fab fa-facebook",
    "fab fa-facebook-f",
    "fab fa-facebook-messenger",
    "fab fa-facebook-square",
    "fab fa-firefox",
    "fab fa-first-order",
    "fab fa-firstdraft",
    "fab fa-flickr",
    "fab fa-flipboard",
    "fab fa-fly",
    "fab fa-font-awesome",
    "fab fa-font-awesome-alt",
    "fab fa-font-awesome-flag",
    "fab fa-fonticons",
    "fab fa-fonticons-fi",
    "fab fa-fort-awesome",
    "fab fa-fort-awesome-alt",
    "fab fa-forumbee",
    "fab fa-foursquare",
    "fab fa-free-code-camp",
    "fab fa-freebsd",
    "fab fa-get-pocket",
    "fab fa-gg",
    "fab fa-gg-circle",
    "fab fa-git",
    "fab fa-git-square",
    "fab fa-github",
    "fab fa-github-alt",
    "fab fa-github-square",
    "fab fa-gitkraken",
    "fab fa-gitlab",
    "fab fa-gitter",
    "fab fa-glide",
    "fab fa-glide-g",
    "fab fa-gofore",
    "fab fa-goodreads",
    "fab fa-goodreads-g",
    "fab fa-google",
    "fab fa-google-drive",
    "fab fa-google-play",
    "fab fa-google-plus",
    "fab fa-google-plus-g",
    "fab fa-google-plus-square",
    "fab fa-google-wallet",
    "fab fa-gratipay",
    "fab fa-grav",
    "fab fa-gripfire",
    "fab fa-grunt",
    "fab fa-gulp",
    "fab fa-hacker-news",
    "fab fa-hacker-news-square",
    "fab fa-hips",
    "fab fa-hire-a-helper",
    "fab fa-hooli",
    "fab fa-hotjar",
    "fab fa-houzz",
    "fab fa-html5",
    "fab fa-hubspot",
    "fab fa-imdb",
    "fab fa-instagram",
    "fab fa-internet-explorer",
    "fab fa-ioxhost",
    "fab fa-itunes",
    "fab fa-itunes-note",
    "fab fa-jenkins",
    "fab fa-joget",
    "fab fa-joomla",
    "fab fa-js",
    "fab fa-js-square",
    "fab fa-jsfiddle",
    "fab fa-keycdn",
    "fab fa-kickstarter",
    "fab fa-kickstarter-k",
    "fab fa-korvue",
    "fab fa-laravel",
    "fab fa-lastfm",
    "fab fa-lastfm-square",
    "fab fa-leanpub",
    "fab fa-less",
    "fab fa-line",
    "fab fa-linkedin",
    "fab fa-linkedin-in",
    "fab fa-linode",
    "fab fa-linux",
    "fab fa-lyft",
    "fab fa-magento",
    "fab fa-maxcdn",
    "fab fa-medapps",
    "fab fa-medium",
    "fab fa-medium-m",
    "fab fa-medrt",
    "fab fa-meetup",
    "fab fa-microsoft",
    "fab fa-mix",
    "fab fa-mixcloud",
    "fab fa-mizuni",
    "fab fa-modx",
    "fab fa-monero",
    "fab fa-napster",
    "fab fa-nintendo-switch",
    "fab fa-node",
    "fab fa-node-js",
    "fab fa-npm",
    "fab fa-ns8",
    "fab fa-nutritionix",
    "fab fa-odnoklassniki",
    "fab fa-odnoklassniki-square",
    "fab fa-opencart",
    "fab fa-openid",
    "fab fa-opera",
    "fab fa-optin-monster",
    "fab fa-osi",
    "fab fa-page4",
    "fab fa-pagelines",
    "fab fa-palfed",
    "fab fa-patreon",
    "fab fa-paypal",
    "fab fa-periscope",
    "fab fa-phabricator",
    "fab fa-phoenix-framework",
    "fab fa-php",
    "fab fa-pied-piper",
    "fab fa-pied-piper-alt",
    "fab fa-pied-piper-pp",
    "fab fa-pinterest",
    "fab fa-pinterest-p",
    "fab fa-pinterest-square",
    "fab fa-playstation",
    "fab fa-product-hunt",
    "fab fa-pushed",
    "fab fa-python",
    "fab fa-qq",
    "fab fa-quinscape",
    "fab fa-quora",
    "fab fa-ravelry",
    "fab fa-react",
    "fab fa-readme",
    "fab fa-rebel",
    "fab fa-red-river",
    "fab fa-reddit",
    "fab fa-reddit-alien",
    "fab fa-reddit-square",
    "fab fa-rendact",
    "fab fa-renren",
    "fab fa-replyd",
    "fab fa-resolving",
    "fab fa-rocketchat",
    "fab fa-rockrms",
    "fab fa-safari",
    "fab fa-sass",
    "fab fa-schlix",
    "fab fa-scribd",
    "fab fa-searchengin",
    "fab fa-sellcast",
    "fab fa-sellsy",
    "fab fa-servicestack",
    "fab fa-shirtsinbulk",
    "fab fa-simplybuilt",
    "fab fa-sistrix",
    "fab fa-skyatlas",
    "fab fa-skype",
    "fab fa-slack",
    "fab fa-slack-hash",
    "fab fa-slideshare",
    "fab fa-snapchat",
    "fab fa-snapchat-ghost",
    "fab fa-snapchat-square",
    "fab fa-soundcloud",
    "fab fa-speakap",
    "fab fa-spotify",
    "fab fa-stack-exchange",
    "fab fa-stack-overflow",
    "fab fa-staylinked",
    "fab fa-steam",
    "fab fa-steam-square",
    "fab fa-steam-symbol",
    "fab fa-sticker-mule",
    "fab fa-strava",
    "fab fa-stripe",
    "fab fa-stripe-s",
    "fab fa-studiovinari",
    "fab fa-stumbleupon",
    "fab fa-stumbleupon-circle",
    "fab fa-superpowers",
    "fab fa-supple",
    "fab fa-telegram",
    "fab fa-telegram-plane",
    "fab fa-tencent-weibo",
    "fab fa-themeisle",
    "fab fa-trello",
    "fab fa-tripadvisor",
    "fab fa-tumblr",
    "fab fa-tumblr-square",
    "fab fa-twitch",
    "fab fa-twitter",
    "fab fa-twitter-square",
    "fab fa-typo3",
    "fab fa-uber",
    "fab fa-uikit",
    "fab fa-uniregistry",
    "fab fa-untappd",
    "fab fa-usb",
    "fab fa-ussunnah",
    "fab fa-vaadin",
    "fab fa-viacoin",
    "fab fa-viadeo",
    "fab fa-viadeo-square",
    "fab fa-viber",
    "fab fa-vimeo",
    "fab fa-vimeo-square",
    "fab fa-vimeo-v",
    "fab fa-vine",
    "fab fa-vk",
    "fab fa-vnv",
    "fab fa-vuejs",
    "fab fa-weibo",
    "fab fa-weixin",
    "fab fa-whatsapp",
    "fab fa-whatsapp-square",
    "fab fa-whmcs",
    "fab fa-wikipedia-w",
    "fab fa-windows",
    "fab fa-wordpress",
    "fab fa-wordpress-simple",
    "fab fa-wpbeginner",
    "fab fa-wpexplorer",
    "fab fa-wpforms",
    "fab fa-xbox",
    "fab fa-xing",
    "fab fa-xing-square",
    "fab fa-y-combinator",
    "fab fa-yahoo",
    "fab fa-yandex",
    "fab fa-yandex-international",
    "fab fa-yelp",
    "fab fa-yoast",
    "fab fa-youtube",
    "fab fa-youtube-square"
];


/***/ }),

/***/ "./src/app/can/can.component.html":
/*!****************************************!*\
  !*** ./src/app/can/can.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated slideInUp\">\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <div class=\"container\">\n        <div class=\"card cxs\" style=\"border: 0px;\">\n          <br>\n          <ul class=\"nav nav-pills mb-3\" id=\"pills-tab\" role=\"tablist\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link active\" id=\"pills-home-tab\" data-toggle=\"pill\" href=\"#pills-home\" role=\"tab\" aria-controls=\"pills-home\"\n                aria-selected=\"true\"> <i class='fas fa-code'></i> 1</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" id=\"pills-profile-tab\" data-toggle=\"pill\" href=\"#pills-profile\" role=\"tab\" aria-controls=\"pills-profile\"\n                aria-selected=\"false\"> <i class='fas fa-external-link-alt'></i> 2</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" id=\"pills-contact-tab\" data-toggle=\"pill\" href=\"#pills-contact\" role=\"tab\" aria-controls=\"pills-contact\"\n                aria-selected=\"false\"><i class='fas fa-image'></i> 3</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" id=\"pills-code-tab\" data-toggle=\"pill\" href=\"#pills-code\" role=\"tab\" aria-controls=\"pills-code\" aria-selected=\"false\"> <i class='far fa-file-code'></i> 4</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" id=\"pills-icon-tab\" data-toggle=\"pill\" href=\"#pills-icon\" role=\"tab\" aria-controls=\"pills-icon\" aria-selected=\"false\"><i class='fas fa-font'></i> 5</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" id=\"pills-sty-tab\" data-toggle=\"pill\" href=\"#pills-sty\" role=\"tab\" aria-controls=\"pills-sty\" aria-selected=\"false\"><i class='fas fa-cogs'></i> 6</a>\n            </li>\n            <!--<li class=\"nav-item\">\n            <a class=\"nav-link\" id=\"pills-user-tab\" data-toggle=\"pill\" href=\"#pills-user\" role=\"tab\" aria-controls=\"pills-user\" aria-selected=\"false\"> <i class='far fa-user'></i></a>\n          </li>-->\n          </ul>\n          <div class=\"tab-content\" id=\"pills-tabContent\">\n            <div class=\"tab-pane fade show active\" id=\"pills-home\" role=\"tabpanel\" aria-labelledby=\"pills-home-tab\">\n              <div class=\"\">\n                <div class=\"form-group\">\n                  <label for=\"\">Enter text</label>\n                  <textarea class=\"form-control\" [(ngModel)]=\"texter\" placeholder=\"Content area\" name=\"\" id=\"\" rows=\"3\"></textarea>\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"\">Class (.)</label>\n                  <input type=\"text\" [(ngModel)]=\"classit\" class=\"form-control\" placeholder=\"Seperate class names by space\" name=\"asd\" id=\"\"\n                    aria-describedby=\"helpId\">\n                  <small id=\"helpId\" class=\"form-text text-muted\">Seperate by space</small>\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"\">Id (#)</label>\n                  <input type=\"text\" [(ngModel)]=\"idit\" class=\"form-control\" placeholder=\"Seperate class names by space\" name=\"asd\" id=\"\" aria-describedby=\"helpId\">\n                  <small id=\"helpId\" class=\"form-text text-muted\">Seperate by space</small>\n                </div>\n                <div class=\"text-center\">\n                  <div class=\"audio\">\n                    <i *ngIf=\"speech\" (click)=\"startSpeech('texter')\" class=\" vs fas fa-headphones-alt\"></i>\n                    <i *ngIf=\"!speech\" (click)=\"ngOnDestroy()\" class=\"vs text-dark fas fa-headphones-alt\"></i>\n                    <i class='fas vs fa-play' (click)=\"speak(texter)\"></i>\n                    <i class='fas vs fa-pause' (click)=\"pause()\"></i>\n                    <i class='fas vs fa-stop' (click)=\"resume()\"></i>\n                    <i class='far vs fa-play-circle' (click)=\"cancel()\"></i>\n                  </div>\n                  <span class=\"badge badge-dark\" (click)=\"genP()\">Paragraph</span>\n                  <span class=\"badge badge-dark\" (click)=\"genB()\">Bold</span>\n                  <span class=\"badge badge-dark\" (click)=\"genDiv()\">Div</span>\n                  <span class=\"badge badge-dark\" (click)=\"genSPAN()\">Span</span>\n                  <span class=\"badge badge-dark\" (click)=\"getCon()\">Container</span>\n                  <br>\n                  <span class=\"badge badge-danger\" (click)=\"getUl()\">UL</span>\n                  <span class=\"badge badge-danger\" (click)=\"getLi()\">LI</span>\n                  <span class=\"badge badge-danger\" (click)=\"outer='&nbsp;'\">SPACE</span>\n                  <span class=\"badge badge-danger\"  (click)=\"outer='&nbsp;&nbsp;&nbsp;&nbsp;'\">TAB</span>\n\n                  <!--<span class=\"badge badge-dark\" (click)=\"genA()\">A</span>-->\n                  <br>\n                  <span class=\"badge badge-primary\" (click)=\"genH(1)\">H1</span>\n                  <span class=\"badge badge-primary\" (click)=\"genH(2)\">H2</span>\n                  <span class=\"badge badge-primary\" (click)=\"genH(3)\">H3</span>\n                  <span class=\"badge badge-primary\" (click)=\"genH(4)\">H4</span>\n                  <span class=\"badge badge-primary\" (click)=\"genH(5)\">H5</span>\n                  <span class=\"badge badge-primary\" (click)=\"genH(6)\">H6</span>\n                  <br>\n                  <span class=\"badge badge-warning\" (click)=\"outer='&lt;br&gt;'\">BR</span>\n                  <span class=\"badge badge-warning\" (click)=\"outer='&lt;hr&gt;'\">HR</span> <br>\n                  <span class=\"badge badge-light\" (click)=\"classit = ' '\"> <i class=\"fas fa-bell\"></i> </span>\n                  <span class=\"badge badge-dark\" (click)=\"classit = 'alert alert-dark'\"> <i class=\"fas fa-bell\"></i> </span>\n                  <span class=\"badge badge-danger\" (click)=\"classit = 'alert alert-danger'\"> <i class=\"fas fa-bell\"></i> </span>\n                  <span class=\"badge badge-warning\" (click)=\"classit = 'alert alert-warning'\"> <i class=\"fas fa-bell\"></i> </span>\n                  <span class=\"badge badge-primary\" (click)=\"classit = 'alert alert-primary'\"> <i class=\"fas fa-bell\"></i> </span>\n                  <span class=\"badge badge-info\" (click)=\"classit = 'alert alert-info'\"> <i class=\"fas fa-bell\"></i> </span>\n                  <br>\n                  <span class=\"badge badge-light\" (click)=\"classit = ' '\"> <i class=\"fas fa-bell\"></i> </span>\n                  <span class=\"badge badge-dark\" (click)=\"classit = 'badge badge-dark'\"> <i class=\"fas fa-seedling\"></i> </span>\n                  <span class=\"badge badge-danger\" (click)=\"classit = 'badge badge-danger'\"> <i class=\"fas fa-seedling\"></i> </span>\n                  <span class=\"badge badge-warning\" (click)=\"classit = 'badge badge-warning'\"> <i class=\"fas fa-seedling\"></i> </span>\n                  <span class=\"badge badge-primary\" (click)=\"classit = 'badge badge-primary'\"> <i class=\"fas fa-seedling\"></i> </span>\n                  <span class=\"badge badge-info\" (click)=\"classit = 'badge badge-info'\"> <i class=\"fas fa-seedling\"></i> </span>\n                  <!---->\n                </div>\n              </div>\n            </div>\n            <div class=\"tab-pane fade\" id=\"pills-profile\" role=\"tabpanel\" aria-labelledby=\"pills-profile-tab\">\n              <div class=\"\">\n                <div class=\"form-group\">\n                  <label for=\"\">Anchor src link</label>\n                  <input type=\"text\" [(ngModel)]=\"anc.link\" class=\"form-control\" name=\"sdd\" id=\"\" aria-describedby=\"helpId\" placeholder=\"Anchor src link\">\n                  <small id=\"helpId\" class=\"form-text text-muted\">Use link without space</small>\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"\">Anchor class</label>\n                  <input type=\"text\" [(ngModel)]=\"anc.class\" class=\"form-control\" name=\"dfgfd\" id=\"\" aria-describedby=\"helpId\" placeholder=\"Anchor class\">\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"\">Anchor Id</label>\n                  <input type=\"text\" [(ngModel)]=\"anc.id\" class=\"form-control\" name=\"dfgdf\" id=\"\" aria-describedby=\"helpId\" placeholder=\"Anchor Id\">\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"\">Anchor text</label>\n                  <input type=\"text\" [(ngModel)]=\"anc.text\" class=\"form-control\" name=\"dfgdf\" id=\"\" aria-describedby=\"helpId\" placeholder=\"Anchor text\">\n                </div>\n                <button type=\"button\" (click)=\"getAnc()\" class=\"btn btn-light\" style=\"float: right\"> Get Anchor</button>\n              </div>\n            </div>\n            <div class=\"tab-pane fade\" id=\"pills-contact\" role=\"tabpanel\" aria-labelledby=\"pills-contact-tab\">\n              <div class=\"\">\n                <div class=\"form-group\">\n                  <label for=\"\">Image src link</label>\n                  <input type=\"text\" [(ngModel)]=\"img.link\" class=\"form-control\" name=\"sdd\" id=\"\" aria-describedby=\"helpId\" placeholder=\"Image src link\">\n                  <small id=\"helpId\" class=\"form-text text-muted\">Use link without space</small>\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"\">Image class</label>\n                  <input type=\"text\" [(ngModel)]=\"img.class\" class=\"form-control\" name=\"dfgfd\" id=\"\" aria-describedby=\"helpId\" placeholder=\"Image class\">\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"\">Image Id</label>\n                  <input type=\"text\" [(ngModel)]=\"img.id\" class=\"form-control\" name=\"dfgdf\" id=\"\" aria-describedby=\"helpId\" placeholder=\"Image Id\">\n                </div>\n                <button type=\"button\" (click)=\"getImg()\" class=\"btn btn-light\" style=\"float: right\"> Get Image</button>\n              </div>\n            </div>\n            <div class=\"tab-pane fade\" id=\"pills-code\" role=\"tabpanel\" aria-labelledby=\"pills-code-tab\">\n              <div class=\"\">\n                <div class=\"form-group\">\n                  <label for=\"\">Code</label>\n                  <textarea [(ngModel)]=\"code.text\" class=\"form-control\" rows='5' name=\"sdd\" id=\"\" aria-describedby=\"helpId\" placeholder=\"Code canvas\"></textarea>\n                  <small id=\"helpId\" class=\"form-text text-muted\">Canvas</small>\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"\">Code class</label>\n                  <input type=\"text\" [(ngModel)]=\"code.class\" class=\"form-control\" name=\"dfgfd\" id=\"\" aria-describedby=\"helpId\" placeholder=\"Code class\">\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"\">Code Rows</label>\n                  <input type=\"number\" [(ngModel)]=\"code.id\" class=\"form-control\" name=\"dfgdf\" id=\"\" aria-describedby=\"helpId\" placeholder=\"Code Rows\">\n                </div>\n                <button type=\"button\" (click)=\"getCode()\" class=\"btn btn-light\" style=\"float: right\"> Get code</button>\n              </div>\n            </div>\n            <div class=\"tab-pane fade\" id=\"pills-icon\" role=\"tabpanel\" aria-labelledby=\"pills-icon-tab\">\n              <div class=\"\">\n                <div class=\"form-group\">\n                  <label for=\"\">Font Awesome icons</label>\n                  <select class=\"form-control\" name=\"texter\" [(ngModel)]=\"fonter\" id=\"\">\n              <option *ngFor=\"let item of fonts; let i=index\" value=\"{{item}}\" >{{item}}\n                <i class=\"{{item}}\" style=\"float: right\"></i>\n              </option>\n            </select>\n                </div>\n                <br>\n                <div class=\"form-group\">\n                  <label for=\"\">Search icon</label>\n                  <input type=\"text\" [(ngModel)]=\"sea \" class=\"form-control\" name=\"sea\" id=\"\" aria-describedby=\"helpId\" placeholder=\"\">\n                  <small id=\"helpId\" class=\"form-text text-muted\">Search by icon name</small>\n                </div>\n                <div class=\"card ico card-body\">\n                  <div class=\"\">\n                    <div class=\"row\">\n                      <div class=\"col-1 text-center iii\" *ngFor=\"let item of fonts | filterBy: sea ; let i=index\" (click)=\"fonter = item\" (click)=\"getIcon()\">\n                        <span class=\"\" (click)=\"fonter = item\" (click)=\"getIcon()\">   <i class=\"{{item}}\" (click)=\"fonter = item\" (click)=\"getIcon()\"></i> </span>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <br>\n                <button type=\"button\" (click)=\"getIcon()\" class=\"btn btn-light\" style=\"float: right\"> Get Icon</button></div>\n            </div>\n            <div class=\"tab-pane fade\" id=\"pills-sty\" role=\"tabpanel\" aria-labelledby=\"pills-sty-tab\">\n              <div class=\"\">\n                <div class=\"form-group\">\n                  <label for=\"\">Css/Scss/Less Script</label>\n                  <textarea class=\"form-control\" placeholder=\"Place your style script\" [(ngModel)]=\"styler\" name=\"dfg\" id=\"\" rows=\"3\"></textarea>\n                </div>\n                <hr>\n                <button type=\"button\" (click)=\"getSty()\" class=\"btn btn-light\" style=\"float: right\"> Get Style Script</button>\n              </div>\n            </div>\n            <div class=\"tab-pane fade\" id=\"pills-user\" role=\"tabpanel\" aria-labelledby=\"pills-user-tab\">\n              <div class=\"\">\n                <div class=\"form-group\">\n                  <label for=\"\">User name</label>\n                  <input type=\"text\" [(ngModel)]=\"credit.username\" class=\"form-control\" name=\"\" id=\"\" aria-describedby=\"helpId\" placeholder=\"\">\n                  <small id=\"helpId\" class=\"form-text text-muted\">Pecuiliar username</small>\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"\">Full name</label>\n                  <input type=\"text\" [(ngModel)]=\"credit.fullname\" class=\"form-control\" name=\"\" id=\"\" aria-describedby=\"helpId\" placeholder=\"\">\n                  <small id=\"helpId\" class=\"form-text text-muted\">Full name</small>\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"\">Date</label>\n                  <input type=\"date\" [(ngModel)]=\"credit.date\" class=\"form-control\" name=\"\" id=\"\" aria-describedby=\"helpId\" placeholder=\"\">\n                </div>\n                <!--<button type=\"button\" (click)=\"getUser()\" class=\"btn btn-light\" style=\"float: right\"> User Card</button>-->\n              </div>\n            </div>\n          </div>\n          <br>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <br>\n      <div class=\"container\" *ngIf=\"board\">\n        <div class=\"animated pulse\">\n          <div class=\"form-group\">\n            <label for=\"\">Output</label>\n            <textarea class=\"form-control\" [(ngModel)]=\"outer\" name=\"\" id=\"\" rows=\"3\"></textarea>\n          </div>\n        </div>\n        <div [innerHTML]=\"outer|sanitaizer\"></div>\n        <!--<button type=\"button\" (click)=\"base = true\" (click)=\"outHtml()\" class=\"btn btn-light\" style=\"float: right\"> Base</button>-->\n        <a href=\"#preview\">\n         <button class=\"btn  btn-sm siv animated zoomInUp btn-info\" (click)=\"pred = !pred\" style=\"float: right;margin:2px;\">\n          <span *ngIf=\"!pred\">  <i class='fas fa-eye'></i> Preview</span>\n          <span *ngIf=\"pred\">  <i class='fas fa-eye'></i> Close Preview</span>\n          </button>\n      </a>\n        <button class=\"btn  siv btn-sm animated zoomInUp btn-warning\" style=\"float: right;margin:2px;\" ngxClipboard [cbContent]=\"outer\"> <i class='fas fa-copy'></i> Copy</button>\n        <button type=\"button\" (click)=\"addTag()\" class=\"btn siv animated zoomInUp btn-sm  btn-dark\" style=\"float: right;margin:2px;\"><i class='fas fa-plus'></i> Add</button>\n        <button type=\"button\" (click)=\"outer = ''\" class=\"btn siv animated zoomInUp btn-sm  btn-danger\" style=\"float: right;margin:2px;\"><i class='fas fa-eraser'></i> Erase</button>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-4\"> <button type=\"button\" (click)=\"gas = []\" (click)=\"baseHtml = ''\" (click)=\"outer = ''\" class=\"btn   siv btn-sm btn-block btn-danger\"\n          style=\"float: right\"><i class='fas fa-trash'></i> Clear</button>\n      </div>\n      <div class=\"col-md-4\">\n        <button class=\"btn siv btn-sm btn-block btn-warning\" (click)=\"copyday('Code copied  &amp; Id generated')\" (click)=\"lod()\"\n          (click)=\"ide = true\" [ngxClipboard]=\"inputTarget\"> <i class='fas fa-copy'></i> Copy</button>\n      </div>\n      <div class=\"col-md-4\">\n        <button class=\"btn siv btn-sm btn-block btn-dark\" (click)=\"copyday('Code copied  &amp; Id generated')\" (click)=\"lod()\" (click)=\"cardinfo.id =  makeid(6)\"\n          (click)=\"ide = true\" [ngxClipboard]=\"inputTarget\"> <i class='fas fa-copy'></i>  Transcript </button>\n      </div>\n    </div>\n    <div class=\"\" *ngIf=\"ide\">\n      <div class=\"form-group\" (click)=\"copyday('Filename copied')\" [ngxClipboard]=\"inputTarget4\">\n        <label for=\"\">File name</label>\n        <input type=\"text\" #inputTarget4 [(ngModel)]=\"cardinfo.id\" class=\"form-control\" readonly name=\"dfg\" id=\"\" aria-describedby=\"helpId\"\n          placeholder=\"\">\n        <small id=\"helpId\" class=\"form-text text-muted\">Use this ID as filename as {{ids}}.txt</small>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"\">Title</label>\n        <input type=\"text\" [(ngModel)]=\"cardinfo.title\" class=\"form-control\" name=\"\" id=\"sdsd\" aria-describedby=\"helpId\" placeholder=\"Title for the page\">\n      </div>\n      <button class=\"btn btn-sm btn-block btn-dark\" (click)=\"copyday('Copy Script for manipulating into Application')\" *ngIf=\"ide\"\n        [ngxClipboard]=\"inputTarget3\"> <i class=\"fas fa-copy\"></i> Copy script</button>\n      <div class=\"form-group\">\n        <label for=\"\">Script</label>\n        <textarea class=\"form-control\" #inputTarget3 name=\"\" id=\"\" rows=\"3\">\n            {{cardinfo|json}}\n          </textarea>\n      </div>\n    </div>\n\n    <div class=\"alert as text-center alert-warning\" *ngIf=\"copy\">\n      <b>{{msg}}</b>\n    </div>\n    <!--<div class=\"\" *ngFor=\"let item of gas; let i=index\">\n    <div class=\"base\">\n      {{item}}</div> <br>\n  </div>-->\n  </div>\n\n  <div class=\"animated pulse\">\n    <div class=\"container\">\n      <div class=\"\" *ngFor=\"let item of gas; let i=index\">\n        <div class=\"\">\n          <span (click)=\"removeAt(i)\" class=\"badge exit badge-warning\">X</span>\n          <span class=\"badge exit badge-dark\">{{i}}</span>\n          <div [innerHTML]=\"item|sanitaizer\"> </div> <br>\n        </div>\n      </div>\n    </div>\n  </div>\n  <br>\n  <div class=\"container \" [innerHTML]=\"renderer\"></div>\n</div>\n<div id=\"snackbar\">{{msg}}</div>\n\n<div class=\"card\">\n  <div class=\"card-header\">\n    <H4 class=\" text-dark\">Base</H4>\n  </div>\n  <div class=\"card-body\" style=\"padding: 2px;\">\n    <div class=\"form-group\">\n      <textarea class=\"form-control\" placeholder=\"Actual code\" style=\"border: 0px;\" #inputTarget name=\"\" [(ngModel)]=\"baseHtml\"\n        id=\"\" rows=\"3\"></textarea>\n    </div>\n  </div>\n</div>\n<div class=\"card animated zoomInUp\" style=\"  box-shadow: 0px 5px 5px 5px gainsboro;\" id=\"preview\" *ngIf=\"pred\">\n  <div class=\"card-header\">\n\n    <H4 class=\" text-dark\"> Preview Screen <i (click)=\"pred = false\" class='fas fa-eye'></i></H4>\n  </div>\n  <div class=\"card-body\">\n    <div class=\"container \" [innerHTML]=\"baseHtml\"></div>\n  </div>\n</div>\n\n<img *ngIf=\"loader\" style=\"width: 75px\" src=\"https://media1.giphy.com/media/rtRflhLVzbNWU/giphy.gif?cid=85b23e3f78cac52fedab6f25b1fe7e467e88ef275b322fa4&rid=giphy.gif\"\n  class=\"loader\" alt=\"\">\n"

/***/ }),

/***/ "./src/app/can/can.component.scss":
/*!****************************************!*\
  !*** ./src/app/can/can.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input {\n  border-radius: 0px; }\n\ntextarea {\n  border-radius: 0px; }\n\ninput:focus {\n  box-shadow: none;\n  outline: none; }\n\ntextarea:focus {\n  box-shadow: none;\n  outline: none; }\n\n::-webkit-input-placeholder {\n  color: #40c4ff;\n  font-size: 12px; }\n\n::-moz-selection {\n  color: lightcyan;\n  background-color: crimson;\n  border-radius: 15px; }\n\n::selection {\n  color: lightcyan;\n  background-color: crimson;\n  border-radius: 15px; }\n\n.card {\n  margin: 5px 0px 5px 0px; }\n\nbutton {\n  margin: 2px 0px 2px 0px; }\n\n.exit {\n  float: right;\n  margin: 5px;\n  cursor: pointer; }\n\n.cxs {\n  padding: 5px; }\n\n.base {\n  border-radius: 5px;\n  background-color: lightgray;\n  color: black;\n  padding: 5px;\n  margin: 3px; }\n\n.center {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 50%;\n  padding: 10px; }\n\n* {\n  word-wrap: break-word; }\n\nimg {\n  width: 50%; }\n\n.badge {\n  margin: 4px; }\n\n.alert {\n  width: 100%; }\n\n.code {\n  background-color: lightgray;\n  padding: 5px;\n  border-radius: 5px;\n  color: white; }\n\n.nav-item .active {\n  background-color: black;\n  box-shadow: 0px 5px 3px gainsboro; }\n\n.as {\n  margin: 3px;\n  padding: 7px; }\n\n.nav-link {\n  color: black;\n  font-weight: bold; }\n\n.ico {\n  height: 200px;\n  overflow: auto;\n  width: 100%; }\n\n.iii:hover {\n  background-color: black;\n  border-radius: 3px;\n  padding: 3px;\n  cursor: pointer;\n  color: white; }\n\nlabel {\n  color: crimson; }\n\ninput {\n  font-size: 12px; }\n\ninput:focus {\n  border: 1px solid black; }\n\ntextarea:focus {\n  border: 1px solid black; }\n\n.card-header {\n  background-color: white; }\n\n.nav-item > .active {\n  background-color: #40c4ff; }\n\n.siv {\n  background-color: #40c4ff;\n  color: white;\n  margin: auto;\n  border: none;\n  width: 100%;\n  margin-top: 3px;\n  margin-bottom: 3px; }\n\n.siv:hover {\n  background-color: white;\n  color: #40c4ff;\n  -webkit-transition: 0.5s color ease-in-out;\n  transition: 0.5s color ease-in-out; }\n\n.badge {\n  padding: 5px; }\n\n.vs {\n  color: #40c4ff;\n  margin: 3px;\n  padding: 8px;\n  cursor: pointer;\n  border: 1px solid #40c4ff;\n  border-radius: 5px;\n  padding: 3px; }\n\n.vs:hover {\n  color: white;\n  background-color: #40c4ff; }\n\n.badge {\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FuL0M6XFxVc2Vyc1xcbWFub211dGhcXERlc2t0b3BcXFdvcmtGcm9tSGVyZVxcU3RhcnRIZXJlXFxhcHBsaWNhdGlvbi13b3JrSGVyZVxcbmctcHJvL3NyY1xcYXBwXFxjYW5cXGNhbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFrQixFQUNuQjs7QUFDRDtFQUNFLG1CQUFrQixFQUNuQjs7QUFDRDtFQUNFLGlCQUFnQjtFQUNoQixjQUFhLEVBQ2Q7O0FBQ0Q7RUFDRSxpQkFBZ0I7RUFDaEIsY0FBYSxFQUNkOztBQUNEO0VBQ0UsZUFBYztFQUNkLGdCQUFlLEVBQ2hCOztBQUNEO0VBQ0UsaUJBQWdCO0VBQ2hCLDBCQUF5QjtFQUN6QixvQkFBbUIsRUFDcEI7O0FBSkQ7RUFDRSxpQkFBZ0I7RUFDaEIsMEJBQXlCO0VBQ3pCLG9CQUFtQixFQUNwQjs7QUFDRDtFQUNFLHdCQUF1QixFQUN4Qjs7QUFDRDtFQUNFLHdCQUF1QixFQUN4Qjs7QUFDRDtFQUNFLGFBQVk7RUFDWixZQUFXO0VBQ1gsZ0JBQWUsRUFDaEI7O0FBQ0Q7RUFDRSxhQUFZLEVBRWI7O0FBQ0Q7RUFDRSxtQkFBa0I7RUFDbEIsNEJBQTJCO0VBQzNCLGFBQVk7RUFDWixhQUFZO0VBQ1osWUFBVyxFQUNaOztBQUNEO0VBQ0UsZUFBYztFQUNkLGtCQUFpQjtFQUNqQixtQkFBa0I7RUFDbEIsV0FBVTtFQUNWLGNBQWEsRUFDZDs7QUFDRDtFQUNFLHNCQUFxQixFQUN0Qjs7QUFFRDtFQUNFLFdBQVUsRUFDWDs7QUFDRDtFQUNFLFlBQVcsRUFDWjs7QUFDRDtFQUNFLFlBQVcsRUFDWjs7QUFFRDtFQUNFLDRCQUEyQjtFQUMzQixhQUFZO0VBQ1osbUJBQWtCO0VBQ2xCLGFBQVksRUFDYjs7QUFDRDtFQUVJLHdCQUF1QjtFQUN2QixrQ0FBaUMsRUFDbEM7O0FBRUg7RUFDRSxZQUFXO0VBQ1gsYUFBWSxFQUNiOztBQUNEO0VBQ0UsYUFBWTtFQUNaLGtCQUFpQixFQUNsQjs7QUFDRDtFQUNFLGNBQWE7RUFDYixlQUFjO0VBQ2QsWUFBVyxFQUNaOztBQUVEO0VBQ0Usd0JBQXVCO0VBQ3ZCLG1CQUFrQjtFQUNsQixhQUFZO0VBQ1osZ0JBQWU7RUFDZixhQUFZLEVBQ2I7O0FBQ0Q7RUFDRSxlQUFjLEVBQ2Y7O0FBQ0Q7RUFDRSxnQkFBZSxFQUNoQjs7QUFDRDtFQUNFLHdCQUF1QixFQUN4Qjs7QUFFRDtFQUNFLHdCQUF1QixFQUN4Qjs7QUFDRDtFQUNFLHdCQUF1QixFQUN4Qjs7QUFDRDtFQUNFLDBCQUF5QixFQUMxQjs7QUFDRDtFQUNFLDBCQUF5QjtFQUN6QixhQUFZO0VBQ1osYUFBWTtFQUNaLGFBQVk7RUFFWixZQUFXO0VBQ1gsZ0JBQWU7RUFDZixtQkFBa0IsRUFDbkI7O0FBQ0Q7RUFDRSx3QkFBdUI7RUFDdkIsZUFBYztFQUVkLDJDQUFrQztFQUFsQyxtQ0FBa0MsRUFDbkM7O0FBQ0Q7RUFDRSxhQUFZLEVBQ2I7O0FBQ0Q7RUFDRSxlQUFjO0VBQ2QsWUFBVztFQUVYLGFBQVk7RUFDWixnQkFBZTtFQUNmLDBCQUF5QjtFQUN6QixtQkFBa0I7RUFDbEIsYUFBWSxFQUNiOztBQUNEO0VBQ0UsYUFBWTtFQUNaLDBCQUF5QixFQUMxQjs7QUFDRDtFQUNFLGdCQUFlLEVBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY2FuL2Nhbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0IHtcclxuICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbn1cclxudGV4dGFyZWEge1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweDtcclxufVxyXG5pbnB1dDpmb2N1cyB7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcbnRleHRhcmVhOmZvY3VzIHtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogIzQwYzRmZjtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuOjpzZWxlY3Rpb24ge1xyXG4gIGNvbG9yOiBsaWdodGN5YW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogY3JpbXNvbjtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG59XHJcbi5jYXJkIHtcclxuICBtYXJnaW46IDVweCAwcHggNXB4IDBweDtcclxufVxyXG5idXR0b24ge1xyXG4gIG1hcmdpbjogMnB4IDBweCAycHggMHB4O1xyXG59XHJcbi5leGl0IHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5jeHMge1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICAvLyAgIG1hcmdpbjogLTVweDtcclxufVxyXG4uYmFzZSB7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIG1hcmdpbjogM3B4O1xyXG59XHJcbi5jZW50ZXIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICB3aWR0aDogNTAlO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuKiB7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG59XHJcblxyXG5pbWcge1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuLmJhZGdlIHtcclxuICBtYXJnaW46IDRweDtcclxufVxyXG4uYWxlcnQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY29kZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5uYXYtaXRlbSB7XHJcbiAgLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGJveC1zaGFkb3c6IDBweCA1cHggM3B4IGdhaW5zYm9ybztcclxuICB9XHJcbn1cclxuLmFzIHtcclxuICBtYXJnaW46IDNweDtcclxuICBwYWRkaW5nOiA3cHg7XHJcbn1cclxuLm5hdi1saW5rIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmljbyB7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmlpaTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIHBhZGRpbmc6IDNweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbmxhYmVsIHtcclxuICBjb2xvcjogY3JpbXNvbjtcclxufVxyXG5pbnB1dCB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbmlucHV0OmZvY3VzIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxudGV4dGFyZWE6Zm9jdXMge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcbi5jYXJkLWhlYWRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuLm5hdi1pdGVtID4gLmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQwYzRmZjtcclxufVxyXG4uc2l2IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDBjNGZmO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIC8vICAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLXRvcDogM3B4O1xyXG4gIG1hcmdpbi1ib3R0b206IDNweDtcclxufVxyXG4uc2l2OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBjb2xvcjogIzQwYzRmZjtcclxuICAvLyBib3JkZXI6IDFweCBzb2xpZCAjNDBjNGZmO1xyXG4gIHRyYW5zaXRpb246IDAuNXMgY29sb3IgZWFzZS1pbi1vdXQ7XHJcbn1cclxuLmJhZGdlIHtcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuLnZzIHtcclxuICBjb2xvcjogIzQwYzRmZjtcclxuICBtYXJnaW46IDNweDtcclxuICAvLyBmb250LXNpemU6IDE2cHg7XHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjNDBjNGZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBwYWRkaW5nOiAzcHg7XHJcbn1cclxuLnZzOmhvdmVyIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQwYzRmZjtcclxufVxyXG4uYmFkZ2Uge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/can/can.component.ts":
/*!**************************************!*\
  !*** ./src/app/can/can.component.ts ***!
  \**************************************/
/*! exports provided: CanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanComponent", function() { return CanComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var html_formatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! html-formatter */ "./node_modules/html-formatter/index.js");
/* harmony import */ var html_formatter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(html_formatter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_can_FONT__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/can/FONT */ "./src/app/can/FONT.ts");
/* harmony import */ var src_app_services_speech__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/speech */ "./src/app/services/speech.ts");
/* harmony import */ var speak_tts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! speak-tts */ "./node_modules/speak-tts/lib/speak-tts.js");
/* harmony import */ var speak_tts__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(speak_tts__WEBPACK_IMPORTED_MODULE_6__);


// import formatter from "html-formatter";




 // es6
var speech = new speak_tts__WEBPACK_IMPORTED_MODULE_6___default.a(); // will throw an exception if not browser supported
if (speech.hasBrowserSupport()) {
    // returns a boolean
    console.log("speech synthesis supported");
}
var CanComponent = /** @class */ (function () {
    function CanComponent(http, speechRecognitionService) {
        this.http = http;
        this.speechRecognitionService = speechRecognitionService;
        this.speech = true;
        this.msg = "Some msg";
        this.img = {
            link: "",
            class: "center",
            id: ""
        };
        this.anc = {
            link: "",
            class: "center",
            id: "",
            text: ""
        };
        this.credit = {
            username: "",
            fullname: "",
            date: ""
        };
        this.code = {
            text: "",
            class: "",
            id: " "
        };
        this.cardinfo = {
            id: "",
            title: "Angular intro",
            version: "0.1"
        };
        this.fonts = src_app_can_FONT__WEBPACK_IMPORTED_MODULE_4__["FONT"];
        this.gas = [];
        this.texter = "";
        this.copy = false;
        this.pred = false;
        this.classit = "";
        this.idit = "";
        this.sea = "";
    }
    CanComponent.prototype.ngOnDestroy = function () {
        this.speech = true;
        this.speechRecognitionService.DestroySpeechObject();
    };
    CanComponent.prototype.startSpeech = function () {
        var _this = this;
        this.speech = false;
        this.speechRecognitionService.record().subscribe(function (value) {
            _this.texter = value;
            console.log(value);
            _this.snacks(value);
        }, function (err) {
            console.log(err);
            if (err.error === "no-speech") {
                _this.speech = true;
                console.log("--restatring service--");
            }
        }
        // ,
        // () => {
        //   this.speech = true;
        //   console.log("--complete--");
        //   // this.startSpeech();
        // }
        );
    };
    CanComponent.prototype.ngOnInit = function () {
        speech
            .init({
            volume: 1,
            lang: "en-GB",
            rate: 1,
            pitch: 1,
            voice: "Google UK English Male",
            splitSentences: true,
            listeners: {
                onvoiceschanged: function (voices) {
                    // console.log("Event voiceschanged", voices);
                }
            }
        })
            .then(function (data) {
            // The "data" object contains the list of available voices and the voice synthesis params
            console.log("Speech is ready, voices are available", data);
        })
            .catch(function (e) {
            console.error("An error occured while initializing : ", e);
        });
    };
    CanComponent.prototype.speak = function (t) {
        speech
            .speak({
            text: t
        })
            .then(function () {
            console.log("Success !");
        })
            .catch(function (e) {
            console.error("An error occurred :", e);
        });
    };
    CanComponent.prototype.pause = function () {
        speak_tts__WEBPACK_IMPORTED_MODULE_6___default.a.pause();
    };
    CanComponent.prototype.cancel = function () {
        speak_tts__WEBPACK_IMPORTED_MODULE_6___default.a.cancel();
    };
    CanComponent.prototype.resume = function () {
        speak_tts__WEBPACK_IMPORTED_MODULE_6___default.a.resume();
    };
    CanComponent.prototype.copyday = function (msg) {
        var _this = this;
        this.copy = true;
        this.msg = msg;
        setTimeout(function () {
            _this.copy = false;
        }, 10000);
    };
    CanComponent.prototype.addTag = function () {
        this.gas.push(this.outer);
        this.outHtml();
    };
    CanComponent.prototype.removeAt = function (i) {
        console.log(i);
        this.gas.splice(i, 1);
        this.outHtml();
    };
    CanComponent.prototype.getIcon = function () {
        this.board = true;
        this.outer = "<i class='" + this.fonter + "'></i>";
        this.outHtml();
    };
    CanComponent.prototype.getSty = function () {
        this.board = true;
        this.outer = "<style>" + this.styler + "</style>";
        this.outHtml();
    };
    CanComponent.prototype.getCode = function () {
        this.board = true;
        this.code.text = this.code.text.replace(/(^[ \t]*\n)/gm, "");
        this.code.text = html_formatter__WEBPACK_IMPORTED_MODULE_3___default.a.render(this.code.text);
        // this.code.text = this.code.text.replace([/</], "&lt;");
        // this.code.text = this.code.text.replace([/>/], "&gt;");
        this.outer =
            "<textarea class='code " +
                this.code.class +
                " form-control' rows='" +
                this.code.id +
                "' >" +
                this.code.text +
                "</textarea><br>";
        this.outHtml();
    };
    CanComponent.prototype.getImg = function () {
        this.board = true;
        this.outer =
            "<img style='width:50%;margin:auto;display:block;padding:10px;' src='" +
                this.img.link +
                "' class='" +
                this.img.class +
                "' id='" +
                this.img.id +
                "' /><br>";
        this.outHtml();
    };
    CanComponent.prototype.getAnc = function () {
        this.board = true;
        this.outer =
            "<a href='" +
                this.anc.link +
                "' class='" +
                this.anc.class +
                "' id='" +
                this.anc.id +
                "' >" +
                this.anc.text +
                "</a>";
        this.outHtml();
    };
    CanComponent.prototype.getCon = function () {
        this.board = true;
        this.outer =
            "<div class='container " +
                this.classit +
                "' id='" +
                this.idit +
                "' >" +
                this.texter +
                "</div><br>";
        this.outHtml();
    };
    CanComponent.prototype.getUl = function () {
        this.board = true;
        this.outer =
            "<ul class='list-group " +
                this.classit +
                "' id='" +
                this.idit +
                "' >" +
                this.texter +
                "</ul><br>";
        this.outHtml();
    };
    CanComponent.prototype.getLi = function () {
        this.board = true;
        this.outer =
            "<li class='list-group-item " +
                this.classit +
                "' id='" +
                this.idit +
                "' >" +
                this.texter +
                "</li> ";
        this.outHtml();
    };
    CanComponent.prototype.genP = function () {
        this.board = true;
        this.outer =
            "<p class='" +
                this.classit +
                "' id='" +
                this.idit +
                "' >" +
                this.texter +
                "</p><br>";
        this.outHtml();
    };
    CanComponent.prototype.lod = function () {
        var _this = this;
        this.loader = true;
        setTimeout(function () {
            _this.loader = false;
        }, 2500);
    };
    CanComponent.prototype.genB = function () {
        this.board = true;
        this.outer = "<b>" + this.texter + "</b>";
        this.outHtml();
    };
    CanComponent.prototype.genSPAN = function () {
        this.board = true;
        this.outer =
            "<span class='" +
                this.classit +
                "' id='" +
                this.idit +
                "' >" +
                this.texter +
                "</span><br>";
        this.outHtml();
    };
    CanComponent.prototype.genDiv = function () {
        this.board = true;
        this.outer =
            "<div class='" +
                this.classit +
                "' id='" +
                this.idit +
                "'>" +
                this.texter +
                "</div><br>";
        this.outHtml();
    };
    CanComponent.prototype.genH = function (u) {
        this.board = true;
        this.outer =
            "<h" +
                u +
                " class='" +
                this.classit +
                "' id='" +
                this.idit +
                "' " +
                ">" +
                this.texter +
                "</h" +
                u +
                "><br>";
        this.outHtml();
    };
    CanComponent.prototype.genA = function () {
        this.board = true;
        this.outer =
            "<a class='" +
                this.classit +
                "' id='" +
                this.idit +
                "' href='" +
                this.texter +
                "' >" +
                this.texter +
                "</a>";
        this.outHtml();
    };
    CanComponent.prototype.outHtml = function () {
        this.base = true;
        // this.ide = true;
        // this.ids = this.makeid(6);
        this.texter = "";
        this.baseHtml = this.gas.join(" ");
        this.baseHtml = html_formatter__WEBPACK_IMPORTED_MODULE_3___default.a.render(this.baseHtml);
    };
    CanComponent.prototype.genBR = function () {
        this.board = true;
        this.outer = "<br>";
    };
    CanComponent.prototype.makeid = function (length) {
        var result = "";
        var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    };
    CanComponent.prototype.snacks = function (msg) {
        // Get the snackbar DIV
        var x = document.getElementById("snackbar");
        this.msg = msg;
        // Add the "show" class to DIV
        x.className = "show";
        // After 3 seconds, remove the show class from DIV
        setTimeout(function () {
            x.className = x.className.replace("show", "");
        }, 5000);
    };
    CanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-can",
            template: __webpack_require__(/*! ./can.component.html */ "./src/app/can/can.component.html"),
            styles: [__webpack_require__(/*! ./can.component.scss */ "./src/app/can/can.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            src_app_services_speech__WEBPACK_IMPORTED_MODULE_5__["SpeechRecognitionService"]])
    ], CanComponent);
    return CanComponent;
}());



/***/ }),

/***/ "./src/app/mug/mug.component.html":
/*!****************************************!*\
  !*** ./src/app/mug/mug.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container cdc  animated fadeInUp\">\n  <h4 class=\"text-center\">What is What.?</h4>\n  <div class=\"row\">\n    <div class=\"col-md-2\">\n      <div class=\"circle text-center\">\n        <div class=\"text\">\n          Playground\n        </div>\n        <div class=\"lir\"></div>\n        <div class=\"lil\"></div>\n        <img src=\"https://cdn0.iconfinder.com/data/icons/simplicity/512/game_play-256.png\" alt=\"\" class=\"imgg\">\n      </div>\n    </div>\n\n    <div class=\"col-md-2\">\n      <div class=\"circle\">\n        <div class=\"text\">\n          HTML Page\n        </div>\n        <div class=\"lir\"></div>\n        <div class=\"lil\"></div>\n        <img src=\"https://cdn1.iconfinder.com/data/icons/scenarium-vol-9/128/017_html_code_website_editor-128.png\" alt=\"\" class=\"imgg\">\n      </div>\n    </div>\n    <div class=\"col-md-2\">\n      <div class=\"circle\">\n        <div class=\"text\">\n          Easy navigation\n        </div>\n        <div class=\"lir\"></div>\n        <div class=\"lil\"></div>\n        <img src=\"https://cdn0.iconfinder.com/data/icons/leto-blue-web-marketing-content-2/64/_-114-256.png\" alt=\"\" class=\"imgg\">\n      </div>\n    </div>\n    <div class=\"col-md-2\">\n      <div class=\"circle\">\n        <div class=\"text\">\n          Code base\n        </div>\n        <div class=\"lir\"></div>\n        <div class=\"lil\"></div>\n        <img src=\"https://cdn1.iconfinder.com/data/icons/internet-security-3/64/x-03-256.png\" alt=\"\" class=\"imgg\">\n      </div>\n    </div>\n    <div class=\"col-md-2\">\n      <div class=\"circle\">\n        <div class=\"text\">\n          Learning\n        </div>\n        <div class=\"lir\"></div>\n        <div class=\"lil\"></div>\n        <img src=\"https://cdn3.iconfinder.com/data/icons/education-science-vol-1/68/Abc_board_learning_icon-256.png\" alt=\"\" class=\"imgg\">\n      </div>\n    </div>\n    <div class=\"col-md-2\">\n      <div class=\"circle\">\n        <div class=\"text\">\n          Text to Voice\n        </div>\n        <div class=\"lir\"></div>\n        <div class=\"lil\"></div>\n        <img src=\"https://cdn1.iconfinder.com/data/icons/biometrics-new-2-line/128/voice-recognition_voice_recognition_voice_waves-256.png\"\n          alt=\"\" class=\"imgg\">\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/mug/mug.component.scss":
/*!****************************************!*\
  !*** ./src/app/mug/mug.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".circle {\n  background: white;\n  /* fallback for old browsers */\n  border-radius: 50%;\n  width: 100px;\n  height: 100px;\n  margin: auto;\n  margin-top: 30px;\n  box-shadow: 0px 5px 5px 5px gainsboro;\n  cursor: pointer;\n  display: block;\n  border: 1px solid #fff;\n  -webkit-transition: border 2s ease, -webkit-transform 1s ease-in-out;\n  transition: border 2s ease, -webkit-transform 1s ease-in-out;\n  transition: transform 1s ease-in-out, border 2s ease;\n  transition: transform 1s ease-in-out, border 2s ease, -webkit-transform 1s ease-in-out; }\n  .circle .imgg {\n    width: 65px;\n    display: block;\n    -webkit-transform: display 2s ease;\n            transform: display 2s ease;\n    margin: auto;\n    margin-top: 15px; }\n  .circle .text {\n    text-align: center;\n    vertical-align: middle;\n    line-height: 100px;\n    display: none;\n    color: #e91e63;\n    -webkit-transition: display 1s ease-in-out;\n    transition: display 1s ease-in-out; }\n  .lir {\n  height: 2px;\n  width: 50px;\n  display: block;\n  position: absolute;\n  top: 100%;\n  right: 50%;\n  background-color: #03a9f4;\n  -webkit-transition: width 1s ease-in-out;\n  transition: width 1s ease-in-out; }\n  .lil {\n  height: 2px;\n  width: 50px;\n  display: block;\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  background-color: #e91e63;\n  -webkit-transition: width 1s ease-in-out;\n  transition: width 1s ease-in-out; }\n  .circle:hover .lir {\n  width: 0px;\n  -webkit-transition: width 1s ease-in;\n  transition: width 1s ease-in; }\n  .circle:hover .lil {\n  width: 0px;\n  -webkit-transition: width 1s ease-in;\n  transition: width 1s ease-in; }\n  .circle:hover {\n  border: 2px solid;\n  border-top-color: #03a9f4;\n  border-left-color: #e91e63;\n  border-bottom-color: #03a9f4;\n  border-right-color: #e91e63;\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n  -webkit-transition: -webkit-transform 1s ease-in-out;\n  transition: -webkit-transform 1s ease-in-out;\n  transition: transform 1s ease-in-out;\n  transition: transform 1s ease-in-out, -webkit-transform 1s ease-in-out; }\n  .circle:hover .text {\n  display: block;\n  -webkit-transform: rotate(-90deg);\n          transform: rotate(-90deg);\n  -webkit-transition: -webkit-transform 1s ease-in;\n  transition: -webkit-transform 1s ease-in;\n  transition: transform 1s ease-in;\n  transition: transform 1s ease-in, -webkit-transform 1s ease-in; }\n  .circle:hover .imgg {\n  display: none; }\n  .cdc {\n  border-radius: 5px;\n  padding: 20px;\n  margin-top: 10px;\n  border: 2px solid;\n  border-top-color: #03a9f4;\n  border-left-color: #e91e63;\n  border-bottom-color: #03a9f4;\n  border-right-color: #e91e63; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXVnL0M6XFxVc2Vyc1xcbWFub211dGhcXERlc2t0b3BcXFdvcmtGcm9tSGVyZVxcU3RhcnRIZXJlXFxhcHBsaWNhdGlvbi13b3JrSGVyZVxcbmctcHJvL3NyY1xcYXBwXFxtdWdcXG11Zy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFpQjtFQUFFLCtCQUErQjtFQUNsRCxtQkFBa0I7RUFDbEIsYUFBWTtFQUNaLGNBQWE7RUFDYixhQUFZO0VBQ1osaUJBQWdCO0VBRWhCLHNDQUFxQztFQUVyQyxnQkFBZTtFQUNmLGVBQWM7RUFDZCx1QkFBc0I7RUFDdEIscUVBQW9EO0VBQXBELDZEQUFvRDtFQUFwRCxxREFBb0Q7RUFBcEQsdUZBQW9ELEVBZ0JyRDtFQTdCRDtJQWVJLFlBQVc7SUFDWCxlQUFjO0lBQ2QsbUNBQTBCO1lBQTFCLDJCQUEwQjtJQUMxQixhQUFZO0lBQ1osaUJBQWdCLEVBQ2pCO0VBcEJIO0lBc0JJLG1CQUFrQjtJQUNsQix1QkFBc0I7SUFDdEIsbUJBQWtCO0lBQ2xCLGNBQWE7SUFDYixlQUFjO0lBQ2QsMkNBQWtDO0lBQWxDLG1DQUFrQyxFQUNuQztFQUVIO0VBQ0UsWUFBVztFQUNYLFlBQVc7RUFFWCxlQUFjO0VBQ2QsbUJBQWtCO0VBQ2xCLFVBQVM7RUFDVCxXQUFVO0VBQ1YsMEJBQXlCO0VBQ3pCLHlDQUFnQztFQUFoQyxpQ0FBZ0MsRUFDakM7RUFDRDtFQUNFLFlBQVc7RUFDWCxZQUFXO0VBQ1gsZUFBYztFQUNkLG1CQUFrQjtFQUNsQixVQUFTO0VBQ1QsVUFBUztFQUNULDBCQUF5QjtFQUN6Qix5Q0FBZ0M7RUFBaEMsaUNBQWdDLEVBQ2pDO0VBQ0Q7RUFDRSxXQUFVO0VBQ1YscUNBQTRCO0VBQTVCLDZCQUE0QixFQUM3QjtFQUNEO0VBQ0UsV0FBVTtFQUNWLHFDQUE0QjtFQUE1Qiw2QkFBNEIsRUFDN0I7RUFDRDtFQUNFLGtCQUFpQjtFQUNqQiwwQkFBeUI7RUFDekIsMkJBQTBCO0VBQzFCLDZCQUE0QjtFQUM1Qiw0QkFBMkI7RUFDM0IsaUNBQXdCO1VBQXhCLHlCQUF3QjtFQUN4QixxREFBb0M7RUFBcEMsNkNBQW9DO0VBQXBDLHFDQUFvQztFQUFwQyx1RUFBb0MsRUFDckM7RUFDRDtFQUNFLGVBQWM7RUFDZCxrQ0FBeUI7VUFBekIsMEJBQXlCO0VBQ3pCLGlEQUFnQztFQUFoQyx5Q0FBZ0M7RUFBaEMsaUNBQWdDO0VBQWhDLCtEQUFnQyxFQUNqQztFQUNEO0VBQ0UsY0FBYSxFQUNkO0VBQ0Q7RUFDRSxtQkFBa0I7RUFDbEIsY0FBYTtFQUNiLGlCQUFnQjtFQUNoQixrQkFBaUI7RUFDakIsMEJBQXlCO0VBQ3pCLDJCQUEwQjtFQUMxQiw2QkFBNEI7RUFDNUIsNEJBQTJCLEVBQzVCIiwiZmlsZSI6InNyYy9hcHAvbXVnL211Zy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaXJjbGUge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlOyAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIC8vIG1hcmdpbi1ib3R0b206IDIwcHg7ICBib3gtc2hhZG93OiAzcHggM3B4IDVweCBnYWluc2Jvcm87XHJcbiAgYm94LXNoYWRvdzogMHB4IDVweCA1cHggNXB4IGdhaW5zYm9ybztcclxuXHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGVhc2UtaW4tb3V0LCBib3JkZXIgMnMgZWFzZTtcclxuICAuaW1nZyB7XHJcbiAgICB3aWR0aDogNjVweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdHJhbnNmb3JtOiBkaXNwbGF5IDJzIGVhc2U7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIH1cclxuICAudGV4dCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEwMHB4O1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIGNvbG9yOiAjZTkxZTYzO1xyXG4gICAgdHJhbnNpdGlvbjogZGlzcGxheSAxcyBlYXNlLWluLW91dDtcclxuICB9XHJcbn1cclxuLmxpciB7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgLy8gICBtYXJnaW46IGF1dG87XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTAwJTtcclxuICByaWdodDogNTAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwM2E5ZjQ7XHJcbiAgdHJhbnNpdGlvbjogd2lkdGggMXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuLmxpbCB7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTAwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5MWU2MztcclxuICB0cmFuc2l0aW9uOiB3aWR0aCAxcyBlYXNlLWluLW91dDtcclxufVxyXG4uY2lyY2xlOmhvdmVyIC5saXIge1xyXG4gIHdpZHRoOiAwcHg7XHJcbiAgdHJhbnNpdGlvbjogd2lkdGggMXMgZWFzZS1pbjtcclxufVxyXG4uY2lyY2xlOmhvdmVyIC5saWwge1xyXG4gIHdpZHRoOiAwcHg7XHJcbiAgdHJhbnNpdGlvbjogd2lkdGggMXMgZWFzZS1pbjtcclxufVxyXG4uY2lyY2xlOmhvdmVyIHtcclxuICBib3JkZXI6IDJweCBzb2xpZDtcclxuICBib3JkZXItdG9wLWNvbG9yOiAjMDNhOWY0O1xyXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjZTkxZTYzO1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICMwM2E5ZjQ7XHJcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjZTkxZTYzO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuLmNpcmNsZTpob3ZlciAudGV4dCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZS1pbjtcclxufVxyXG4uY2lyY2xlOmhvdmVyIC5pbWdnIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5jZGMge1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQ7XHJcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzAzYTlmNDtcclxuICBib3JkZXItbGVmdC1jb2xvcjogI2U5MWU2MztcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiAjMDNhOWY0O1xyXG4gIGJvcmRlci1yaWdodC1jb2xvcjogI2U5MWU2MztcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/mug/mug.component.ts":
/*!**************************************!*\
  !*** ./src/app/mug/mug.component.ts ***!
  \**************************************/
/*! exports provided: MugComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MugComponent", function() { return MugComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MugComponent = /** @class */ (function () {
    function MugComponent() {
    }
    MugComponent.prototype.ngOnInit = function () {
    };
    MugComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mug',
            template: __webpack_require__(/*! ./mug.component.html */ "./src/app/mug/mug.component.html"),
            styles: [__webpack_require__(/*! ./mug.component.scss */ "./src/app/mug/mug.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MugComponent);
    return MugComponent;
}());



/***/ }),

/***/ "./src/app/sample/sample.component.html":
/*!**********************************************!*\
  !*** ./src/app/sample/sample.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  sample works!\n</p>\n"

/***/ }),

/***/ "./src/app/sample/sample.component.scss":
/*!**********************************************!*\
  !*** ./src/app/sample/sample.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NhbXBsZS9zYW1wbGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/sample/sample.component.ts":
/*!********************************************!*\
  !*** ./src/app/sample/sample.component.ts ***!
  \********************************************/
/*! exports provided: SampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SampleComponent", function() { return SampleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SampleComponent = /** @class */ (function () {
    function SampleComponent() {
    }
    SampleComponent.prototype.ngOnInit = function () {
    };
    SampleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sample',
            template: __webpack_require__(/*! ./sample.component.html */ "./src/app/sample/sample.component.html"),
            styles: [__webpack_require__(/*! ./sample.component.scss */ "./src/app/sample/sample.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SampleComponent);
    return SampleComponent;
}());



/***/ }),

/***/ "./src/app/sanitaizer.pipe.ts":
/*!************************************!*\
  !*** ./src/app/sanitaizer.pipe.ts ***!
  \************************************/
/*! exports provided: SanitaizerPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SanitaizerPipe", function() { return SanitaizerPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var SanitaizerPipe = /** @class */ (function () {
    function SanitaizerPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SanitaizerPipe.prototype.transform = function (value) {
        return this.sanitizer.bypassSecurityTrustHtml(value);
    };
    SanitaizerPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: "sanitaizer"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], SanitaizerPipe);
    return SanitaizerPipe;
}());



/***/ }),

/***/ "./src/app/services/speech.ts":
/*!************************************!*\
  !*** ./src/app/services/speech.ts ***!
  \************************************/
/*! exports provided: SpeechRecognitionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeechRecognitionService", function() { return SpeechRecognitionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var SpeechRecognitionService = /** @class */ (function () {
    function SpeechRecognitionService(zone) {
        this.zone = zone;
    }
    SpeechRecognitionService.prototype.record = function () {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            var webkitSpeechRecognition = window.webkitSpeechRecognition;
            _this.speechRecognition = new webkitSpeechRecognition();
            _this.speechRecognition.continuous = true;
            _this.speechRecognition.lang = "en-us";
            _this.speechRecognition.maxAlternatives = 1;
            _this.speechRecognition.onresult = function (speech) {
                var term = "";
                if (speech.results) {
                    var result = speech.results[speech.resultIndex];
                    var transcript = result[0].transcript;
                    if (result.isFinal) {
                        if (result[0].confidence < 0.3) {
                            console.log("Unrecognized result - Please try again");
                        }
                        else {
                            term = lodash__WEBPACK_IMPORTED_MODULE_2__["trim"](transcript);
                            console.log("Did you said? -> " +
                                term +
                                " , If not then say something else...");
                        }
                    }
                }
                _this.zone.run(function () {
                    observer.next(term);
                });
            };
            _this.speechRecognition.onerror = function (error) {
                observer.error(error);
            };
            _this.speechRecognition.onend = function () {
                observer.complete();
            };
            _this.speechRecognition.start();
            console.log("Say something - We are listening !!!");
        });
    };
    SpeechRecognitionService.prototype.DestroySpeechObject = function () {
        if (this.speechRecognition) {
            this.speechRecognition.stop();
        }
    };
    SpeechRecognitionService.prototype.compareTwoStrings = function (first1, second1) {
        var first = first1.replace(/\s+/g, "");
        var second = second1.replace(/\s+/g, "");
        if (!first.length && !second.length) {
            return 1;
        } // if both are empty strings
        if (!first.length || !second.length) {
            return 0;
        } // if only one is empty string
        if (first === second) {
            return 1;
        } // identical
        if (first.length === 1 && second.length === 1) {
            return 0;
        } // both are 1-letter strings
        if (first.length < 2 || second.length < 2) {
            return 0;
        } // if either is a 1-letter string
        var firstBigrams = new Map();
        for (var i = 0; i < first.length - 1; i++) {
            var bigram = first.substring(i, i + 2);
            var count = firstBigrams.has(bigram) ? firstBigrams.get(bigram) + 1 : 1;
            firstBigrams.set(bigram, count);
        }
        var intersectionSize = 0;
        for (var i = 0; i < second.length - 1; i++) {
            var bigram = second.substring(i, i + 2);
            var count = firstBigrams.has(bigram) ? firstBigrams.get(bigram) : 0;
            if (count > 0) {
                firstBigrams.set(bigram, count - 1);
                intersectionSize++;
            }
        }
        return 2.0 * intersectionSize / (first.length + second.length - 2);
    };
    SpeechRecognitionService.prototype.findBestMatch = function (mainString, targetStrings) {
        var ratings = [];
        var bestMatchIndex = 0;
        for (var i = 0; i < targetStrings.length; i++) {
            var currentTargetString = targetStrings[i];
            var currentRating = this.compareTwoStrings(mainString, currentTargetString);
            ratings.push({ target: currentTargetString, rating: currentRating });
            if (currentRating > ratings[bestMatchIndex].rating) {
                bestMatchIndex = i;
            }
        }
        var bestMatch = ratings[bestMatchIndex];
        return { ratings: ratings, bestMatch: bestMatch, bestMatchIndex: bestMatchIndex };
    };
    SpeechRecognitionService.prototype.areArgsValid = function (mainString, targetStrings) {
        if (typeof mainString !== "string") {
            return false;
        }
        if (!Array.isArray(targetStrings)) {
            return false;
        }
        if (!targetStrings.length) {
            return false;
        }
        if (targetStrings.find(function (s) { return typeof s !== "string"; })) {
            return false;
        }
        return true;
    };
    SpeechRecognitionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], SpeechRecognitionService);
    return SpeechRecognitionService;
}());



/***/ }),

/***/ "./src/app/sugar/sugar.component.html":
/*!********************************************!*\
  !*** ./src/app/sugar/sugar.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"april\" *ngIf=\"!loader\">\n  <div class=\"row\">\n\n    <div class=\"col-md-12\">\n      <div class=\"carder\">\n        <!--*ngFor=\"let item of lister; let i=index\" id=\"{{item.id}}\"-->\n        <div class=\"animated fadeInLeft\">\n          <div class=\"\">\n            <br> <br>\n            <h3>\n              {{itemtitle}}\n            </h3>\n            <div class=\"base animated fadeInLeft\" [innerHTML]=\"renderer|sanitaizer\">\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div>\n  <br><br>\n  <img *ngIf=\"loader\" src=\"https://leerob.io/static/images/loading-placeholder-with-sass/final-result.gif\" class=\"loader2\"\n    alt=\"\">\n</div>\n<div>\n  <img *ngIf=\"loader\" src=\"https://leerob.io/static/images/loading-placeholder-with-sass/final-result.gif\" class=\"loader2\"\n    alt=\"\">\n</div>\n<div>\n  <img *ngIf=\"loader\" src=\"https://leerob.io/static/images/loading-placeholder-with-sass/final-result.gif\" class=\"loader2\"\n    alt=\"\">\n</div>\n<div>\n  <img *ngIf=\"loader\" src=\"https://leerob.io/static/images/loading-placeholder-with-sass/final-result.gif\" class=\"loader2\"\n    alt=\"\">\n</div>\n<div>\n  <img *ngIf=\"loader\" src=\"https://leerob.io/static/images/loading-placeholder-with-sass/final-result.gif\" class=\"loader2\"\n    alt=\"\">\n</div>\n<div id=\"myNav\" class=\"overlay\">\n  <a href=\"javascript:void(0)\" class=\"closebtn\" (click)=\"closeNav()\">&times;</a>\n  <div class=\"overlay-content\">\n    <div class=\"form-group\">\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"search\" name=\"sa4e\" id=\"\" aria-describedby=\"helpId\" placeholder=\"Search term\">\n    </div>\n    <div class=\"fixede\">\n      <div class=\"\">\n        <button style=\"margin: 3px;\" (click)=\"closeNav()\" type=\"button\" *ngFor=\"let item of lister | filter: search; let i=index\"\n          (click)=\"getRender(i)\" class=\"badge cd badge-dark\"> {{item.title}}</button>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"\">\n  <button type=\"button\" *ngIf=\"!nav\" (click)=\"openNav()\" class=\"btn icc btn-dark btn-sm\"> \n <i class='fas fa-sliders-h'></i> </button>\n  <button type=\"button\" *ngIf=\"nav\" (click)=\"closeNav()\" class=\"btn icc btn-dark btn-sm\"><i class='fas fa-sliders-h'></i></button>\n\n\n  <i *ngIf=\"!loader\" class='fas rt fa-arrow-circle-right' (click)=\"ins()\"></i>\n  <i *ngIf=\"!loader\" class='fas lt fa-arrow-circle-left' (click)=\"dis()\"></i>\n\n\n  <i *ngIf=\"speech\" (click)=\"startSpeech('lister')\" class=\"vs fas fa-headphones-alt\"></i>\n  <i *ngIf=\"!speech\" (click)=\"ngOnDestroy()\" class=\"vs text-dark fas fa-headphones-alt\"></i>\n</div>\n<div id=\"snackbar\">{{msg}}</div>\n<div class=\"identity fd\">\n  <a target=\"blank\" [href]=\"'https://github.com/creativecoderone/poster/blob/master/'+itemid+'.txt'\"><i class='fas fa-external-link-alt'></i> </a>\n</div>\n"

/***/ }),

/***/ "./src/app/sugar/sugar.component.scss":
/*!********************************************!*\
  !*** ./src/app/sugar/sugar.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".lister {\n  padding: 10px;\n  margin: 3px;\n  background-color: white;\n  border: 1px solid black;\n  cursor: pointer;\n  text-align: center; }\n  .lister a {\n    text-decoration: none;\n    color: white; }\n  input {\n  margin: 3px;\n  border-radius: 0px;\n  width: 80%;\n  margin: auto; }\n  input:focus {\n  border: none;\n  outline: none;\n  box-shadow: none;\n  border: 1px solid black;\n  border-radius: 5px;\n  -webkit-transition: 1s border-radius ease-in-out;\n  transition: 1s border-radius ease-in-out; }\n  .lister:hover {\n  color: white;\n  border: 1px solid white;\n  background-color: black;\n  -webkit-transition: 1s border ease-in-out;\n  transition: 1s border ease-in-out; }\n  .lister:hover a {\n    text-decoration: none;\n    color: black; }\n  .carder {\n  height: 100%;\n  overflow: auto; }\n  .over {\n  overflow: auto; }\n  .base {\n  padding: 10px; }\n  .identity {\n  float: right;\n  margin: 10px 20px 10px 0px; }\n  div,\np,\nli,\nh5,\nh6 {\n  margin-bottom: 10px; }\n  .overlay {\n  height: 100%;\n  width: 0;\n  position: fixed;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  background-color: #40c4ff;\n  overflow-x: hidden;\n  -webkit-transition: 0.5s;\n  transition: 0.5s; }\n  .overlay-content {\n  position: absolute;\n  top: 120px;\n  text-align: center;\n  margin-top: 30px; }\n  .overlay a {\n  padding: 8px;\n  text-decoration: none;\n  font-size: 36px;\n  color: #818181;\n  display: block;\n  -webkit-transition: 0.3s;\n  transition: 0.3s; }\n  .overlay a:hover,\n.overlay a:focus {\n  color: #f1f1f1; }\n  .overlay .closebtn {\n  position: absolute;\n  top: 20px;\n  right: 45px;\n  font-size: 60px; }\n  @media screen and (max-height: 450px) {\n  .overlay a {\n    font-size: 20px; }\n  .overlay .closebtn {\n    font-size: 40px;\n    top: 15px;\n    right: 35px; } }\n  .icc {\n  position: fixed;\n  top: 0;\n  left: 40px;\n  border: 0px;\n  box-shadow: none;\n  background-color: #40c4ff;\n  margin: 10px;\n  z-index: 99; }\n  .icc i {\n    font-size: 18px; }\n  i {\n  border: 0px; }\n  .fd {\n  position: fixed;\n  top: 0;\n  background-color: #40c4ff;\n  color: white;\n  border-radius: 5px;\n  padding: 3px;\n  left: 95px;\n  z-index: 99;\n  padding: 5px;\n  border: 1px solid #40c4ff; }\n  .fd a {\n    color: white;\n    font-size: 10px;\n    padding: 5px;\n    text-decoration: none; }\n  .rt {\n  position: fixed;\n  top: 0;\n  right: 8px;\n  margin: 15px;\n  font-size: 20px;\n  color: #40c4ff; }\n  .lt {\n  position: fixed;\n  top: 0;\n  font-size: 20px;\n  right: 40px;\n  -webkit-transform: scale(1);\n          transform: scale(1);\n  margin: 15px;\n  color: #40c4ff; }\n  .rt,\n.lt {\n  border-radius: 50%;\n  border: 2px solid white; }\n  .rt:hover,\n.lt:hover {\n  cursor: pointer;\n  -webkit-animation: transform 2s ease-in-out;\n          animation: transform 2s ease-in-out; }\n  .loader2 {\n  margin: auto;\n  display: block;\n  padding: 10px;\n  width: 75%; }\n  .vs {\n  position: fixed;\n  top: 0;\n  left: 0;\n  border: 0px;\n  background-color: #40c4ff;\n  color: white;\n  padding: 5px;\n  border-radius: 5px;\n  border: 1px solid #40c4ff;\n  font-size: 20px;\n  margin: 10px;\n  z-index: 99; }\n  .vs:hover {\n  color: white;\n  background-color: #40c4ff; }\n  .cd {\n  box-shadow: none;\n  border: none;\n  padding: 3px;\n  font-family: \"Alef\", sans-serif;\n  font-size: 12px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VnYXIvQzpcXFVzZXJzXFxtYW5vbXV0aFxcRGVza3RvcFxcV29ya0Zyb21IZXJlXFxTdGFydEhlcmVcXGFwcGxpY2F0aW9uLXdvcmtIZXJlXFxuZy1wcm8vc3JjXFxhcHBcXHN1Z2FyXFxzdWdhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWE7RUFDYixZQUFXO0VBRVgsd0JBQXVCO0VBQ3ZCLHdCQUF1QjtFQUN2QixnQkFBZTtFQUNmLG1CQUFrQixFQUtuQjtFQVpEO0lBU0ksc0JBQXFCO0lBQ3JCLGFBQVksRUFDYjtFQUVIO0VBQ0UsWUFBVztFQUNYLG1CQUFrQjtFQUNsQixXQUFVO0VBQ1YsYUFBWSxFQUNiO0VBQ0Q7RUFDRSxhQUFZO0VBQ1osY0FBYTtFQUNiLGlCQUFnQjtFQUNoQix3QkFBdUI7RUFDdkIsbUJBQWtCO0VBQ2xCLGlEQUF3QztFQUF4Qyx5Q0FBd0MsRUFDekM7RUFDRDtFQUNFLGFBQVk7RUFDWix3QkFBdUI7RUFDdkIsd0JBQXVCO0VBQ3ZCLDBDQUFpQztFQUFqQyxrQ0FBaUMsRUFLbEM7RUFURDtJQU1JLHNCQUFxQjtJQUNyQixhQUFZLEVBQ2I7RUFHSDtFQUNFLGFBQVk7RUFDWixlQUFjLEVBQ2Y7RUFDRDtFQUNFLGVBQWMsRUFDZjtFQUVEO0VBQ0UsY0FBYSxFQUNkO0VBRUQ7RUFDRSxhQUFZO0VBQ1osMkJBQTBCLEVBQzNCO0VBQ0Q7Ozs7O0VBS0Usb0JBQW1CLEVBQ3BCO0VBRUQ7RUFDRSxhQUFZO0VBQ1osU0FBUTtFQUNSLGdCQUFlO0VBQ2YsV0FBVTtFQUNWLE9BQU07RUFDTixRQUFPO0VBQ1AsMEJBQXlCO0VBQ3pCLG1CQUFrQjtFQUNsQix5QkFBZ0I7RUFBaEIsaUJBQWdCLEVBQ2pCO0VBRUQ7RUFDRSxtQkFBa0I7RUFDbEIsV0FBVTtFQUVWLG1CQUFrQjtFQUNsQixpQkFBZ0IsRUFDakI7RUFFRDtFQUNFLGFBQVk7RUFDWixzQkFBcUI7RUFDckIsZ0JBQWU7RUFDZixlQUFjO0VBQ2QsZUFBYztFQUNkLHlCQUFnQjtFQUFoQixpQkFBZ0IsRUFDakI7RUFFRDs7RUFFRSxlQUFjLEVBQ2Y7RUFFRDtFQUNFLG1CQUFrQjtFQUNsQixVQUFTO0VBQ1QsWUFBVztFQUNYLGdCQUFlLEVBQ2hCO0VBRUQ7RUFDRTtJQUNFLGdCQUFlLEVBQ2hCO0VBQ0Q7SUFDRSxnQkFBZTtJQUNmLFVBQVM7SUFDVCxZQUFXLEVBQ1osRUFBQTtFQUVIO0VBQ0UsZ0JBQWU7RUFDZixPQUFNO0VBQ04sV0FBVTtFQUVWLFlBQVc7RUFDWCxpQkFBZ0I7RUFDaEIsMEJBQXlCO0VBQ3pCLGFBQVk7RUFDWixZQUFXLEVBS1o7RUFkRDtJQVdJLGdCQUFlLEVBRWhCO0VBRUg7RUFDRSxZQUFXLEVBQ1o7RUFDRDtFQUNFLGdCQUFlO0VBQ2YsT0FBTTtFQUNOLDBCQUF5QjtFQUN6QixhQUFZO0VBQ1osbUJBQWtCO0VBQ2xCLGFBQVk7RUFDWixXQUFVO0VBQ1YsWUFBVztFQUNYLGFBQVk7RUFDWiwwQkFBeUIsRUFTMUI7RUFuQkQ7SUFjSSxhQUFZO0lBQ1osZ0JBQWU7SUFDZixhQUFZO0lBQ1osc0JBQXFCLEVBQ3RCO0VBRUg7RUFDRSxnQkFBZTtFQUNmLE9BQU07RUFDTixXQUFVO0VBQ1YsYUFBWTtFQUNaLGdCQUFlO0VBQ2YsZUFBYyxFQUVmO0VBQ0Q7RUFDRSxnQkFBZTtFQUNmLE9BQU07RUFDTixnQkFBZTtFQUNmLFlBQVc7RUFFWCw0QkFBbUI7VUFBbkIsb0JBQW1CO0VBQ25CLGFBQVk7RUFDWixlQUFjLEVBQ2Y7RUFDRDs7RUFFRSxtQkFBa0I7RUFDbEIsd0JBQXVCLEVBRXhCO0VBQ0Q7O0VBR0UsZ0JBQWU7RUFDZiw0Q0FBbUM7VUFBbkMsb0NBQW1DLEVBQ3BDO0VBQ0Q7RUFDRSxhQUFZO0VBQ1osZUFBYztFQUNkLGNBQWE7RUFDYixXQUFVLEVBQ1g7RUFDRDtFQUNFLGdCQUFlO0VBQ2YsT0FBTTtFQUNOLFFBQU87RUFDUCxZQUFXO0VBQ1gsMEJBQXlCO0VBQ3pCLGFBQVk7RUFDWixhQUFZO0VBQ1osbUJBQWtCO0VBQ2xCLDBCQUF5QjtFQUV6QixnQkFBZTtFQUNmLGFBQVk7RUFDWixZQUFXLEVBQ1o7RUFFRDtFQUNFLGFBQVk7RUFDWiwwQkFBeUIsRUFDMUI7RUFDRDtFQUNFLGlCQUFnQjtFQUNoQixhQUFZO0VBQ1osYUFBWTtFQUNaLGdDQUErQjtFQUMvQixnQkFBZSxFQUNoQiIsImZpbGUiOiJzcmMvYXBwL3N1Z2FyL3N1Z2FyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpc3RlciB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBtYXJnaW46IDNweDtcclxuICAvLyB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICBjdXJzb3I6IHBvaW50ZXI7IC8vIGhlaWdodDogMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG59XHJcbmlucHV0IHtcclxuICBtYXJnaW46IDNweDtcclxuICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuaW5wdXQ6Zm9jdXMge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHRyYW5zaXRpb246IDFzIGJvcmRlci1yYWRpdXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuLmxpc3Rlcjpob3ZlciB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlOyAvLyB0ZXh0LWFsaWduOiByaWdodDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsgLy8gaGVpZ2h0OiAxMDBweDtcclxuICB0cmFuc2l0aW9uOiAxcyBib3JkZXIgZWFzZS1pbi1vdXQ7XHJcbiAgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG59XHJcblxyXG4uY2FyZGVyIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuLm92ZXIge1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4uYmFzZSB7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLmlkZW50aXR5IHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgbWFyZ2luOiAxMHB4IDIwcHggMTBweCAwcHg7XHJcbn1cclxuZGl2LFxyXG5wLFxyXG5saSxcclxuaDUsXHJcbmg2IHtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4ub3ZlcmxheSB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAwO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiAxO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MGM0ZmY7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb246IDAuNXM7XHJcbn1cclxuXHJcbi5vdmVybGF5LWNvbnRlbnQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDEyMHB4O1xyXG4gIC8vIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcblxyXG4ub3ZlcmxheSBhIHtcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMzZweDtcclxuICBjb2xvcjogIzgxODE4MTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB0cmFuc2l0aW9uOiAwLjNzO1xyXG59XHJcblxyXG4ub3ZlcmxheSBhOmhvdmVyLFxyXG4ub3ZlcmxheSBhOmZvY3VzIHtcclxuICBjb2xvcjogI2YxZjFmMTtcclxufVxyXG5cclxuLm92ZXJsYXkgLmNsb3NlYnRuIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAyMHB4O1xyXG4gIHJpZ2h0OiA0NXB4O1xyXG4gIGZvbnQtc2l6ZTogNjBweDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDQ1MHB4KSB7XHJcbiAgLm92ZXJsYXkgYSB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG4gIC5vdmVybGF5IC5jbG9zZWJ0biB7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICB0b3A6IDE1cHg7XHJcbiAgICByaWdodDogMzVweDtcclxuICB9XHJcbn1cclxuLmljYyB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiA0MHB4O1xyXG4gIC8vIGJveC1zaGFkb3c6IDEwIDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgYm9yZGVyOiAwcHg7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDBjNGZmO1xyXG4gIG1hcmdpbjogMTBweDtcclxuICB6LWluZGV4OiA5OTtcclxuICBpIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIC8vIHBhZGRpbmc6IDVweDtcclxuICB9XHJcbn1cclxuaSB7XHJcbiAgYm9yZGVyOiAwcHg7XHJcbn1cclxuLmZkIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MGM0ZmY7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBwYWRkaW5nOiAzcHg7XHJcbiAgbGVmdDogOTVweDtcclxuICB6LWluZGV4OiA5OTtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzQwYzRmZjtcclxuICAvLyBib3gtc2hhZG93OiAzcHggM3B4IDVweCBnYWluc2Jvcm87XHJcblxyXG4gIGEge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxufVxyXG4ucnQge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDhweDtcclxuICBtYXJnaW46IDE1cHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGNvbG9yOiAjNDBjNGZmO1xyXG4gIC8vIGJveC1zaGFkb3c6IDNweCAzcHggNXB4IGdhaW5zYm9ybztcclxufVxyXG4ubHQge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIHJpZ2h0OiA0MHB4O1xyXG4gIC8vIGJveC1zaGFkb3c6IDNweCAzcHggNXB4IGdhaW5zYm9ybztcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIG1hcmdpbjogMTVweDtcclxuICBjb2xvcjogIzQwYzRmZjtcclxufVxyXG4ucnQsXHJcbi5sdCB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xyXG4gIC8vIHBhZGRpbmc6IDNweDtcclxufVxyXG4ucnQ6aG92ZXIsXHJcbi5sdDpob3ZlciB7XHJcbiAgLy8gdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBhbmltYXRpb246IHRyYW5zZm9ybSAycyBlYXNlLWluLW91dDtcclxufVxyXG4ubG9hZGVyMiB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgd2lkdGg6IDc1JTtcclxufVxyXG4udnMge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBib3JkZXI6IDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDBjNGZmO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM0MGM0ZmY7XHJcbiAgLy8gYm94LXNoYWRvdzogM3B4IDNweCA1cHggZ2FpbnNib3JvO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgei1pbmRleDogOTk7XHJcbn1cclxuXHJcbi52czpob3ZlciB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MGM0ZmY7XHJcbn1cclxuLmNkIHtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBwYWRkaW5nOiAzcHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiQWxlZlwiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/sugar/sugar.component.ts":
/*!******************************************!*\
  !*** ./src/app/sugar/sugar.component.ts ***!
  \******************************************/
/*! exports provided: SugarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SugarComponent", function() { return SugarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_services_speech__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/speech */ "./src/app/services/speech.ts");




var SugarComponent = /** @class */ (function () {
    function SugarComponent(http, speechRecognitionService) {
        this.http = http;
        this.speechRecognitionService = speechRecognitionService;
        this.speech = true;
        this.nav = false;
        this.box = [];
        this.loader = false;
    }
    SugarComponent.prototype.ngOnDestroy = function () {
        this.speech = true;
        this.speechRecognitionService.DestroySpeechObject();
    };
    SugarComponent.prototype.startSpeech = function () {
        var _this = this;
        this.speech = false;
        this.speechRecognitionService.record().subscribe(function (value) {
            // this.texter = value;
            console.log(value);
            _this.snacks(value);
            var res = _this.speechRecognitionService.findBestMatch(value, _this.box);
            _this.getRender(res["bestMatchIndex"]);
        }, function (err) {
            console.log(err);
            if (err.error === "no-speech") {
                _this.speech = true;
                console.log("--restatring service--");
            }
        }, function () {
            _this.speech = true;
            console.log("--complete--");
            // this.startSpeech();
        });
    };
    SugarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loader = true;
        this.iii = 0;
        this.http
            .get("https://raw.githubusercontent.com/creativecoderone/poster/master/menu.json")
            .subscribe(function (data) {
            _this.lister = data;
            // console.log(data);
            _this.itemid = _this.lister[0]["id"];
            _this.itemtitle = _this.lister[0]["title"];
            for (var key in _this.lister) {
                if (_this.lister.hasOwnProperty(key)) {
                    var element = _this.lister[key];
                    _this.box.push(element["title"]);
                }
            }
            _this.http
                .get("https://raw.githubusercontent.com/creativecoderone/poster/master/" +
                _this.lister[0]["id"] +
                ".txt", { responseType: "text" })
                .subscribe(function (data2) {
                _this.loader = false;
                _this.renderer = data2;
            });
        }, function (err) { });
    };
    SugarComponent.prototype.getRender = function (index) {
        var _this = this;
        // this.loader = true;
        this.itemid = this.lister[index]["id"];
        this.itemtitle = this.lister[index]["title"];
        this.http
            .get("https://raw.githubusercontent.com/creativecoderone/poster/master/" +
            this.lister[index]["id"] +
            ".txt", { responseType: "text" })
            .subscribe(function (data2) {
            _this.iii = index;
            _this.loader = false;
            _this.renderer = data2;
        }, function (err) { });
        return index;
    };
    SugarComponent.prototype.openNav = function () {
        this.nav = true;
        document.getElementById("myNav").style.width = "100%";
    };
    SugarComponent.prototype.closeNav = function () {
        this.nav = false;
        document.getElementById("myNav").style.width = "0%";
    };
    SugarComponent.prototype.ins = function () {
        var _this = this;
        // console.log("inc", this.iii);
        if (this.iii < this.lister.length - 1) {
            this.loader = true;
            this.iii = this.iii + 1;
            this.itemid = this.lister[this.iii]["id"];
            this.itemtitle = this.lister[this.iii]["title"];
            this.http
                .get("https://raw.githubusercontent.com/creativecoderone/poster/master/" +
                this.lister[this.iii]["id"] +
                ".txt", { responseType: "text" })
                .subscribe(function (data2) {
                _this.loader = false;
                _this.snacks(_this.itemtitle);
                _this.renderer = data2;
            }, function (err) { });
        }
    };
    SugarComponent.prototype.dis = function () {
        var _this = this;
        // console.log("dis", this.iii);
        if (this.iii > 0) {
            this.loader = true;
            this.iii = this.iii - 1;
            this.itemid = this.lister[this.iii]["id"];
            this.itemtitle = this.lister[this.iii]["title"];
            this.http
                .get("https://raw.githubusercontent.com/creativecoderone/poster/master/" +
                this.lister[this.iii]["id"] +
                ".txt", { responseType: "text" })
                .subscribe(function (data2) {
                _this.loader = false;
                _this.snacks(_this.itemtitle);
                _this.renderer = data2;
            }, function (err) { });
        }
    };
    SugarComponent.prototype.snacks = function (msg) {
        // Get the snackbar DIV
        var x = document.getElementById("snackbar");
        this.msg = msg;
        // Add the "show" class to DIV
        x.className = "show";
        // After 3 seconds, remove the show class from DIV
        setTimeout(function () {
            x.className = x.className.replace("show", "");
        }, 5000);
    };
    SugarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-sugar",
            template: __webpack_require__(/*! ./sugar.component.html */ "./src/app/sugar/sugar.component.html"),
            styles: [__webpack_require__(/*! ./sugar.component.scss */ "./src/app/sugar/sugar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            src_app_services_speech__WEBPACK_IMPORTED_MODULE_3__["SpeechRecognitionService"]])
    ], SugarComponent);
    return SugarComponent;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\manomuth\Desktop\WorkFromHere\StartHere\application-workHere\ng-pro\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map