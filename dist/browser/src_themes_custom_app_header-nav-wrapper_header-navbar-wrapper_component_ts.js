"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_themes_custom_app_header-nav-wrapper_header-navbar-wrapper_component_ts"],{

/***/ 66520:
/*!*************************************************************************************!*\
  !*** ./src/themes/custom/app/header-nav-wrapper/header-navbar-wrapper.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderNavbarWrapperComponent: () => (/* binding */ HeaderNavbarWrapperComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _app_header_themed_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../app/header/themed-header.component */ 95960);
/* harmony import */ var _app_header_nav_wrapper_header_navbar_wrapper_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../app/header-nav-wrapper/header-navbar-wrapper.component */ 78221);
/* harmony import */ var _app_navbar_themed_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app/navbar/themed-navbar.component */ 77632);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 90310);





const _c0 = a0 => ({
  "open": a0
});
/**
 * This component represents a wrapper for the horizontal navbar and the header
 */
class HeaderNavbarWrapperComponent extends _app_header_nav_wrapper_header_navbar_wrapper_component__WEBPACK_IMPORTED_MODULE_1__.HeaderNavbarWrapperComponent {
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵHeaderNavbarWrapperComponent_BaseFactory;
      return function HeaderNavbarWrapperComponent_Factory(t) {
        return (ɵHeaderNavbarWrapperComponent_BaseFactory || (ɵHeaderNavbarWrapperComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](HeaderNavbarWrapperComponent)))(t || HeaderNavbarWrapperComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: HeaderNavbarWrapperComponent,
      selectors: [["ds-themed-header-navbar-wrapper"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
      decls: 4,
      vars: 5,
      consts: [["id", "header-navbar-wrapper", 3, "ngClass"]],
      template: function HeaderNavbarWrapperComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "ds-header")(3, "ds-navbar");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](3, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 1, ctx.isNavBarCollapsed$) !== true));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _app_header_themed_header_component__WEBPACK_IMPORTED_MODULE_0__.ThemedHeaderComponent, _app_navbar_themed_navbar_component__WEBPACK_IMPORTED_MODULE_2__.ThemedNavbarComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%] {\n  position: relative;\n}\n\n[_nghost-%COMP%]   div#header-navbar-wrapper[_ngcontent-%COMP%] {\n  border-bottom: 1px var(--ds-header-navbar-border-bottom-color) solid;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci1uYXZiYXItd3JhcHBlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBO0VBQ0Usa0JBQUE7QUFDRjs7QUFDQTtFQUNFLG9FQUFBO0FBRUYiLCJmaWxlIjoiaGVhZGVyLW5hdmJhci13cmFwcGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi9cbjpob3N0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuOmhvc3QgZGl2I2hlYWRlci1uYXZiYXItd3JhcHBlciB7XG4gIGJvcmRlci1ib3R0b206IDFweCB2YXIoLS1kcy1oZWFkZXItbmF2YmFyLWJvcmRlci1ib3R0b20tY29sb3IpIHNvbGlkO1xufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaGVhZGVyLW5hdi13cmFwcGVyL2hlYWRlci1uYXZiYXItd3JhcHBlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBO0VBQ0Usa0JBQUE7QUFDRjs7QUFDQTtFQUNFLG9FQUFBO0FBRUY7QUFDQSxvMUJBQW8xQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovXG46aG9zdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbjpob3N0IGRpdiNoZWFkZXItbmF2YmFyLXdyYXBwZXIge1xuICBib3JkZXItYm90dG9tOiAxcHggdmFyKC0tZHMtaGVhZGVyLW5hdmJhci1ib3JkZXItYm90dG9tLWNvbG9yKSBzb2xpZDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_themes_custom_app_header-nav-wrapper_header-navbar-wrapper_component_ts.js.map