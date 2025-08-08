"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_themes_dspace_app_home-page_home-news_home-news_component_ts"],{

/***/ 31264:
/*!**************************************************************************!*\
  !*** ./src/themes/dspace/app/home-page/home-news/home-news.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeNewsComponent: () => (/* binding */ HomeNewsComponent)
/* harmony export */ });
/* harmony import */ var _app_home_page_home_news_home_news_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../app/home-page/home-news/home-news.component */ 52178);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 90310);


class HomeNewsComponent extends _app_home_page_home_news_home_news_component__WEBPACK_IMPORTED_MODULE_0__.HomeNewsComponent {
  constructor() {
    super(...arguments);
    this.zoom = 1;
  }
  zoomIn() {
    if (this.zoom < 3) {
      // Maximum zoom level
      this.zoom += 0.1;
    }
  }
  zoomOut() {
    if (this.zoom > 0.2) {
      // Minimum zoom level
      this.zoom -= 0.1;
    }
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵHomeNewsComponent_BaseFactory;
      return function HomeNewsComponent_Factory(t) {
        return (ɵHomeNewsComponent_BaseFactory || (ɵHomeNewsComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](HomeNewsComponent)))(t || HomeNewsComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: HomeNewsComponent,
      selectors: [["ds-themed-home-news"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 0,
      vars: 0,
      template: function HomeNewsComponent_Template(rf, ctx) {},
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtbmV3cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBLHNFQUFBO0FBQ0E7RUFDRSxjQUFBO0FBQ0YiLCJmaWxlIjoiaG9tZS1uZXdzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi9cbi8qIEhvbWUgbmV3cyBjb21wb25lbnQgc3R5bGVzIGNsZWFuZWQgdXAgLSBvbGQgc2xpZGVyIHN0eWxlcyByZW1vdmVkICovXG46aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy90aGVtZXMvZHNwYWNlL2FwcC9ob21lLXBhZ2UvaG9tZS1uZXdzL2hvbWUtbmV3cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBLHNFQUFBO0FBQ0E7RUFDRSxjQUFBO0FBQ0Y7QUFDQSw0dUJBQTR1QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovXG4vKiBIb21lIG5ld3MgY29tcG9uZW50IHN0eWxlcyBjbGVhbmVkIHVwIC0gb2xkIHNsaWRlciBzdHlsZXMgcmVtb3ZlZCAqL1xuOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_themes_dspace_app_home-page_home-news_home-news_component_ts.js.map