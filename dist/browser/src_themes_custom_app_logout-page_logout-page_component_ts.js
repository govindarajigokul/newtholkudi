"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_themes_custom_app_logout-page_logout-page_component_ts"],{

/***/ 35647:
/*!********************************************************************!*\
  !*** ./src/themes/custom/app/logout-page/logout-page.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LogoutPageComponent: () => (/* binding */ LogoutPageComponent)
/* harmony export */ });
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var _app_logout_page_logout_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../app/logout-page/logout-page.component */ 16640);
/* harmony import */ var _app_shared_log_out_log_out_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../app/shared/log-out/log-out.component */ 61980);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);





class LogoutPageComponent extends _app_logout_page_logout_page_component__WEBPACK_IMPORTED_MODULE_0__.LogoutPageComponent {
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵLogoutPageComponent_BaseFactory;
      return function LogoutPageComponent_Factory(t) {
        return (ɵLogoutPageComponent_BaseFactory || (ɵLogoutPageComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](LogoutPageComponent)))(t || LogoutPageComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: LogoutPageComponent,
      selectors: [["ds-themed-logout-page"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 9,
      vars: 6,
      consts: [[1, "container", "w-100", "h-100"], [1, "text-center", "mt-5", "row", "justify-content-md-center"], [1, "mx-auto"], ["src", "assets/images/dspace-logo.svg", 1, "mb-4", "login-logo", 3, "alt"], [1, "h3", "mb-0", "font-weight-normal"]],
      template: function LogoutPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h1", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "ds-log-out");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 2, "repository.image.logo"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 4, "logout.form.header"));
        }
      },
      dependencies: [_app_shared_log_out_log_out_component__WEBPACK_IMPORTED_MODULE_1__.LogOutComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n.login-logo[_ngcontent-%COMP%] {\n  height: var(--ds-login-logo-height);\n  width: var(--ds-login-logo-width);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ291dC1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBO0FBQ0E7RUFDRSxtQ0FBQTtFQUNBLGlDQUFBO0FBQ0YiLCJmaWxlIjoibG9nb3V0LXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqL1xuLmxvZ2luLWxvZ28ge1xuICBoZWlnaHQ6IHZhcigtLWRzLWxvZ2luLWxvZ28taGVpZ2h0KTtcbiAgd2lkdGg6IHZhcigtLWRzLWxvZ2luLWxvZ28td2lkdGgpO1xufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbG9nb3V0LXBhZ2UvbG9nb3V0LXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQTtFQUNFLG1DQUFBO0VBQ0EsaUNBQUE7QUFDRjtBQUNBLHd1QkFBd3VCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi9cbi5sb2dpbi1sb2dvIHtcbiAgaGVpZ2h0OiB2YXIoLS1kcy1sb2dpbi1sb2dvLWhlaWdodCk7XG4gIHdpZHRoOiB2YXIoLS1kcy1sb2dpbi1sb2dvLXdpZHRoKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_themes_custom_app_logout-page_logout-page_component_ts.js.map