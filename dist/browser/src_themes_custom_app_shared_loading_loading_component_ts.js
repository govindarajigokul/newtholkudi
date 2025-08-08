"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_themes_custom_app_shared_loading_loading_component_ts"],{

/***/ 86905:
/*!*******************************************************************!*\
  !*** ./src/themes/custom/app/shared/loading/loading.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoadingComponent: () => (/* binding */ LoadingComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _app_shared_loading_loading_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../app/shared/loading/loading.component */ 32280);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 90310);



function LoadingComponent_div_0_label_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.message);
  }
}
function LoadingComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LoadingComponent_div_0_label_1_Template, 2, 1, "label", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "span", 4)(4, "span", 5)(5, "span", 6)(6, "span", 7)(7, "span", 8)(8, "span", 9)(9, "span", 10)(10, "span", 11)(11, "span", 12)(12, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.showMessage && ctx_r0.message);
  }
}
function LoadingComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.message);
  }
}
class LoadingComponent extends _app_shared_loading_loading_component__WEBPACK_IMPORTED_MODULE_0__.LoadingComponent {
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵLoadingComponent_BaseFactory;
      return function LoadingComponent_Factory(t) {
        return (ɵLoadingComponent_BaseFactory || (ɵLoadingComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](LoadingComponent)))(t || LoadingComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: LoadingComponent,
      selectors: [["ds-themed-loading"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 2,
      consts: [[4, "ngIf"], ["class", "spinner spinner-border", "role", "status", "aria-live", "polite", 4, "ngIf"], ["aria-live", "polite", 4, "ngIf"], ["aria-hidden", "true", 1, "loader"], [1, "l-1"], [1, "l-2"], [1, "l-3"], [1, "l-4"], [1, "l-5"], [1, "l-6"], [1, "l-7"], [1, "l-8"], [1, "l-9"], [1, "l-10"], ["aria-live", "polite"], ["role", "status", "aria-live", "polite", 1, "spinner", "spinner-border"], [1, "sr-only"]],
      template: function LoadingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, LoadingComponent_div_0_Template, 13, 1, "div", 0)(1, LoadingComponent_div_1_Template, 3, 1, "div", 1);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.spinner);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.spinner);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n.loader[_ngcontent-%COMP%] {\n  margin: 0px 25px;\n}\n\nspan[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0 auto;\n}\n\nspan[class*=l-][_ngcontent-%COMP%] {\n  height: 4px;\n  width: 4px;\n  background: #000;\n  display: inline-block;\n  margin: 12px 2px;\n  border-radius: 100%;\n  -webkit-border-radius: 100%;\n  -moz-border-radius: 100%;\n  -webkit-animation: _ngcontent-%COMP%_loader 2s infinite;\n  -webkit-animation-timing-function: cubic-bezier(0.03, 0.615, 0.995, 0.415);\n  -webkit-animation-fill-mode: both;\n  -moz-animation: loader 2s infinite;\n  -moz-animation-timing-function: cubic-bezier(0.03, 0.615, 0.995, 0.415);\n  -moz-animation-fill-mode: both;\n  -ms-animation: loader 2s infinite;\n  -ms-animation-timing-function: cubic-bezier(0.03, 0.615, 0.995, 0.415);\n  -ms-animation-fill-mode: both;\n  animation: _ngcontent-%COMP%_loader 2s infinite;\n  animation-timing-function: cubic-bezier(0.03, 0.615, 0.995, 0.415);\n  animation-fill-mode: both;\n}\n\nspan.l-1[_ngcontent-%COMP%] {\n  animation-delay: 1s;\n  -ms-animation-delay: 1s;\n  -moz-animation-delay: 1s;\n}\n\nspan.l-2[_ngcontent-%COMP%] {\n  animation-delay: 0.9s;\n  -ms-animation-delay: 0.9s;\n  -moz-animation-delay: 0.9s;\n}\n\nspan.l-3[_ngcontent-%COMP%] {\n  animation-delay: 0.8s;\n  -ms-animation-delay: 0.8s;\n  -moz-animation-delay: 0.8s;\n}\n\nspan.l-4[_ngcontent-%COMP%] {\n  animation-delay: 0.7s;\n  -ms-animation-delay: 0.7s;\n  -moz-animation-delay: 0.7s;\n}\n\nspan.l-5[_ngcontent-%COMP%] {\n  animation-delay: 0.6s;\n  -ms-animation-delay: 0.6s;\n  -moz-animation-delay: 0.6s;\n}\n\nspan.l-6[_ngcontent-%COMP%] {\n  animation-delay: 0.5s;\n  -ms-animation-delay: 0.5s;\n  -moz-animation-delay: 0.5s;\n}\n\nspan.l-7[_ngcontent-%COMP%] {\n  animation-delay: 0.4s;\n  -ms-animation-delay: 0.4s;\n  -moz-animation-delay: 0.4s;\n}\n\nspan.l-8[_ngcontent-%COMP%] {\n  animation-delay: 0.3s;\n  -ms-animation-delay: 0.3s;\n  -moz-animation-delay: 0.3s;\n}\n\nspan.l-9[_ngcontent-%COMP%] {\n  animation-delay: 0.2s;\n  -ms-animation-delay: 0.2s;\n  -moz-animation-delay: 0.2s;\n}\n\nspan.l-9[_ngcontent-%COMP%] {\n  animation-delay: 0.1s;\n  -ms-animation-delay: 0.1s;\n  -moz-animation-delay: 0.1s;\n}\n\nspan.l-10[_ngcontent-%COMP%] {\n  animation-delay: 0s;\n  -ms-animation-delay: 0s;\n  -moz-animation-delay: 0s;\n}\n\n@keyframes _ngcontent-%COMP%_loader {\n  0% {\n    transform: translateX(-30px);\n    opacity: 0;\n  }\n  25% {\n    opacity: 1;\n  }\n  50% {\n    transform: translateX(30px);\n    opacity: 0;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n.spinner[_ngcontent-%COMP%] {\n  color: var(--bs-gray-600);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxjQUFBO0VBQ0EsY0FBQTtBQUVGOztBQUFBO0VBQ0UsV0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQ0FBQTtFQUNBLDBFQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQ0FBQTtFQUNBLHVFQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQ0FBQTtFQUNBLHNFQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLGtFQUFBO0VBQ0EseUJBQUE7QUFHRjs7QUFEQTtFQUNFLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtBQUlGOztBQUZBO0VBQ0UscUJBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0FBS0Y7O0FBSEE7RUFDRSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7QUFNRjs7QUFKQTtFQUNFLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtBQU9GOztBQUxBO0VBQ0UscUJBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0FBUUY7O0FBTkE7RUFDRSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7QUFTRjs7QUFQQTtFQUNFLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtBQVVGOztBQVJBO0VBQ0UscUJBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0FBV0Y7O0FBVEE7RUFDRSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7QUFZRjs7QUFWQTtFQUNFLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtBQWFGOztBQVhBO0VBQ0UsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHdCQUFBO0FBY0Y7O0FBWkE7RUFDRTtJQUNFLDRCQUFBO0lBQ0EsVUFBQTtFQWVGO0VBYkE7SUFDRSxVQUFBO0VBZUY7RUFiQTtJQUNFLDJCQUFBO0lBQ0EsVUFBQTtFQWVGO0VBYkE7SUFDRSxVQUFBO0VBZUY7QUFDRjtBQWJBO0VBQ0UseUJBQUE7QUFlRiIsImZpbGUiOiJsb2FkaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi9cbi5sb2FkZXIge1xuICBtYXJnaW46IDBweCAyNXB4O1xufVxuc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbnNwYW5bY2xhc3MqPWwtXSB7XG4gIGhlaWdodDogNHB4O1xuICB3aWR0aDogNHB4O1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMTJweCAycHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAxMDAlO1xuICAtd2Via2l0LWFuaW1hdGlvbjogbG9hZGVyIDJzIGluZmluaXRlO1xuICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjAzLCAwLjYxNSwgMC45OTUsIDAuNDE1KTtcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xuICAtbW96LWFuaW1hdGlvbjogbG9hZGVyIDJzIGluZmluaXRlO1xuICAtbW96LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjAzLCAwLjYxNSwgMC45OTUsIDAuNDE1KTtcbiAgLW1vei1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xuICAtbXMtYW5pbWF0aW9uOiBsb2FkZXIgMnMgaW5maW5pdGU7XG4gIC1tcy1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4wMywgMC42MTUsIDAuOTk1LCAwLjQxNSk7XG4gIC1tcy1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xuICBhbmltYXRpb246IGxvYWRlciAycyBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMDMsIDAuNjE1LCAwLjk5NSwgMC40MTUpO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xufVxuc3Bhbi5sLTEge1xuICBhbmltYXRpb24tZGVsYXk6IDFzO1xuICAtbXMtYW5pbWF0aW9uLWRlbGF5OiAxcztcbiAgLW1vei1hbmltYXRpb24tZGVsYXk6IDFzO1xufVxuc3Bhbi5sLTIge1xuICBhbmltYXRpb24tZGVsYXk6IDAuOXM7XG4gIC1tcy1hbmltYXRpb24tZGVsYXk6IDAuOXM7XG4gIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAwLjlzO1xufVxuc3Bhbi5sLTMge1xuICBhbmltYXRpb24tZGVsYXk6IDAuOHM7XG4gIC1tcy1hbmltYXRpb24tZGVsYXk6IDAuOHM7XG4gIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAwLjhzO1xufVxuc3Bhbi5sLTQge1xuICBhbmltYXRpb24tZGVsYXk6IDAuN3M7XG4gIC1tcy1hbmltYXRpb24tZGVsYXk6IDAuN3M7XG4gIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAwLjdzO1xufVxuc3Bhbi5sLTUge1xuICBhbmltYXRpb24tZGVsYXk6IDAuNnM7XG4gIC1tcy1hbmltYXRpb24tZGVsYXk6IDAuNnM7XG4gIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xufVxuc3Bhbi5sLTYge1xuICBhbmltYXRpb24tZGVsYXk6IDAuNXM7XG4gIC1tcy1hbmltYXRpb24tZGVsYXk6IDAuNXM7XG4gIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAwLjVzO1xufVxuc3Bhbi5sLTcge1xuICBhbmltYXRpb24tZGVsYXk6IDAuNHM7XG4gIC1tcy1hbmltYXRpb24tZGVsYXk6IDAuNHM7XG4gIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAwLjRzO1xufVxuc3Bhbi5sLTgge1xuICBhbmltYXRpb24tZGVsYXk6IDAuM3M7XG4gIC1tcy1hbmltYXRpb24tZGVsYXk6IDAuM3M7XG4gIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAwLjNzO1xufVxuc3Bhbi5sLTkge1xuICBhbmltYXRpb24tZGVsYXk6IDAuMnM7XG4gIC1tcy1hbmltYXRpb24tZGVsYXk6IDAuMnM7XG4gIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAwLjJzO1xufVxuc3Bhbi5sLTkge1xuICBhbmltYXRpb24tZGVsYXk6IDAuMXM7XG4gIC1tcy1hbmltYXRpb24tZGVsYXk6IDAuMXM7XG4gIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAwLjFzO1xufVxuc3Bhbi5sLTEwIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAwcztcbiAgLW1zLWFuaW1hdGlvbi1kZWxheTogMHM7XG4gIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAwcztcbn1cbkBrZXlmcmFtZXMgbG9hZGVyIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMzBweCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAyNSUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMzBweCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG4uc3Bpbm5lciB7XG4gIGNvbG9yOiB2YXIoLS1icy1ncmF5LTYwMCk7XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2xvYWRpbmcvbG9hZGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFDQTtFQUNFLGNBQUE7RUFDQSxjQUFBO0FBRUY7O0FBQUE7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSx3QkFBQTtFQUNBLHFDQUFBO0VBQ0EsMEVBQUE7RUFDQSxpQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsdUVBQUE7RUFDQSw4QkFBQTtFQUNBLGlDQUFBO0VBQ0Esc0VBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0VBQUE7RUFDQSx5QkFBQTtBQUdGOztBQURBO0VBQ0UsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHdCQUFBO0FBSUY7O0FBRkE7RUFDRSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7QUFLRjs7QUFIQTtFQUNFLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtBQU1GOztBQUpBO0VBQ0UscUJBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0FBT0Y7O0FBTEE7RUFDRSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7QUFRRjs7QUFOQTtFQUNFLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtBQVNGOztBQVBBO0VBQ0UscUJBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0FBVUY7O0FBUkE7RUFDRSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7QUFXRjs7QUFUQTtFQUNFLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtBQVlGOztBQVZBO0VBQ0UscUJBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0FBYUY7O0FBWEE7RUFDRSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esd0JBQUE7QUFjRjs7QUFaQTtFQUNFO0lBQ0UsNEJBQUE7SUFDQSxVQUFBO0VBZUY7RUFiQTtJQUNFLFVBQUE7RUFlRjtFQWJBO0lBQ0UsMkJBQUE7SUFDQSxVQUFBO0VBZUY7RUFiQTtJQUNFLFVBQUE7RUFlRjtBQUNGO0FBYkE7RUFDRSx5QkFBQTtBQWVGO0FBQ0EsNHBKQUE0cEoiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqL1xuLmxvYWRlciB7XG4gIG1hcmdpbjogMHB4IDI1cHg7XG59XG5zcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuc3BhbltjbGFzcyo9bC1dIHtcbiAgaGVpZ2h0OiA0cHg7XG4gIHdpZHRoOiA0cHg7XG4gIGJhY2tncm91bmQ6ICMwMDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAxMnB4IDJweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMDAlO1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBsb2FkZXIgMnMgaW5maW5pdGU7XG4gIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMDMsIDAuNjE1LCAwLjk5NSwgMC40MTUpO1xuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG4gIC1tb3otYW5pbWF0aW9uOiBsb2FkZXIgMnMgaW5maW5pdGU7XG4gIC1tb3otYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMDMsIDAuNjE1LCAwLjk5NSwgMC40MTUpO1xuICAtbW96LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG4gIC1tcy1hbmltYXRpb246IGxvYWRlciAycyBpbmZpbml0ZTtcbiAgLW1zLWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjAzLCAwLjYxNSwgMC45OTUsIDAuNDE1KTtcbiAgLW1zLWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG4gIGFuaW1hdGlvbjogbG9hZGVyIDJzIGluZmluaXRlO1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4wMywgMC42MTUsIDAuOTk1LCAwLjQxNSk7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG59XG5zcGFuLmwtMSB7XG4gIGFuaW1hdGlvbi1kZWxheTogMXM7XG4gIC1tcy1hbmltYXRpb24tZGVsYXk6IDFzO1xuICAtbW96LWFuaW1hdGlvbi1kZWxheTogMXM7XG59XG5zcGFuLmwtMiB7XG4gIGFuaW1hdGlvbi1kZWxheTogMC45cztcbiAgLW1zLWFuaW1hdGlvbi1kZWxheTogMC45cztcbiAgLW1vei1hbmltYXRpb24tZGVsYXk6IDAuOXM7XG59XG5zcGFuLmwtMyB7XG4gIGFuaW1hdGlvbi1kZWxheTogMC44cztcbiAgLW1zLWFuaW1hdGlvbi1kZWxheTogMC44cztcbiAgLW1vei1hbmltYXRpb24tZGVsYXk6IDAuOHM7XG59XG5zcGFuLmwtNCB7XG4gIGFuaW1hdGlvbi1kZWxheTogMC43cztcbiAgLW1zLWFuaW1hdGlvbi1kZWxheTogMC43cztcbiAgLW1vei1hbmltYXRpb24tZGVsYXk6IDAuN3M7XG59XG5zcGFuLmwtNSB7XG4gIGFuaW1hdGlvbi1kZWxheTogMC42cztcbiAgLW1zLWFuaW1hdGlvbi1kZWxheTogMC42cztcbiAgLW1vei1hbmltYXRpb24tZGVsYXk6IDAuNnM7XG59XG5zcGFuLmwtNiB7XG4gIGFuaW1hdGlvbi1kZWxheTogMC41cztcbiAgLW1zLWFuaW1hdGlvbi1kZWxheTogMC41cztcbiAgLW1vei1hbmltYXRpb24tZGVsYXk6IDAuNXM7XG59XG5zcGFuLmwtNyB7XG4gIGFuaW1hdGlvbi1kZWxheTogMC40cztcbiAgLW1zLWFuaW1hdGlvbi1kZWxheTogMC40cztcbiAgLW1vei1hbmltYXRpb24tZGVsYXk6IDAuNHM7XG59XG5zcGFuLmwtOCB7XG4gIGFuaW1hdGlvbi1kZWxheTogMC4zcztcbiAgLW1zLWFuaW1hdGlvbi1kZWxheTogMC4zcztcbiAgLW1vei1hbmltYXRpb24tZGVsYXk6IDAuM3M7XG59XG5zcGFuLmwtOSB7XG4gIGFuaW1hdGlvbi1kZWxheTogMC4ycztcbiAgLW1zLWFuaW1hdGlvbi1kZWxheTogMC4ycztcbiAgLW1vei1hbmltYXRpb24tZGVsYXk6IDAuMnM7XG59XG5zcGFuLmwtOSB7XG4gIGFuaW1hdGlvbi1kZWxheTogMC4xcztcbiAgLW1zLWFuaW1hdGlvbi1kZWxheTogMC4xcztcbiAgLW1vei1hbmltYXRpb24tZGVsYXk6IDAuMXM7XG59XG5zcGFuLmwtMTAge1xuICBhbmltYXRpb24tZGVsYXk6IDBzO1xuICAtbXMtYW5pbWF0aW9uLWRlbGF5OiAwcztcbiAgLW1vei1hbmltYXRpb24tZGVsYXk6IDBzO1xufVxuQGtleWZyYW1lcyBsb2FkZXIge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zMHB4KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDI1JSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzMHB4KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbi5zcGlubmVyIHtcbiAgY29sb3I6IHZhcigtLWJzLWdyYXktNjAwKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_themes_custom_app_shared_loading_loading_component_ts.js.map