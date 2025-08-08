"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_themes_custom_app_login-page_login-page_component_ts"],{

/***/ 1591:
/*!******************************************************************!*\
  !*** ./src/themes/custom/app/login-page/login-page.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginPageComponent: () => (/* binding */ LoginPageComponent)
/* harmony export */ });
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var src_app_shared_log_in_themed_log_in_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/log-in/themed-log-in.component */ 46519);
/* harmony import */ var _app_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../app/login-page/login-page.component */ 40276);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);





/**
 * This component represents the login page
 */
class LoginPageComponent extends _app_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_1__.LoginPageComponent {
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵLoginPageComponent_BaseFactory;
      return function LoginPageComponent_Factory(t) {
        return (ɵLoginPageComponent_BaseFactory || (ɵLoginPageComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](LoginPageComponent)))(t || LoginPageComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: LoginPageComponent,
      selectors: [["ds-themed-login-page"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 9,
      vars: 7,
      consts: [[1, "container", "w-100", "h-100"], [1, "text-center", "mt-5", "row", "justify-content-center"], ["src", "assets/images/dspace-logo.svg", 1, "mb-4", "login-logo", 3, "alt"], [1, "h3", "mb-0", "font-weight-normal"], [3, "isStandalonePage"]],
      template: function LoginPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h1", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "ds-log-in", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 3, "repository.image.logo"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 5, "login.form.header"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("isStandalonePage", true);
        }
      },
      dependencies: [src_app_shared_log_in_themed_log_in_component__WEBPACK_IMPORTED_MODULE_0__.ThemedLogInComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n.login-logo[_ngcontent-%COMP%] {\n  height: var(--ds-login-logo-height);\n  width: var(--ds-login-logo-width);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQTtFQUNFLG1DQUFBO0VBQ0EsaUNBQUE7QUFDRiIsImZpbGUiOiJsb2dpbi1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi9cbi5sb2dpbi1sb2dvIHtcbiAgaGVpZ2h0OiB2YXIoLS1kcy1sb2dpbi1sb2dvLWhlaWdodCk7XG4gIHdpZHRoOiB2YXIoLS1kcy1sb2dpbi1sb2dvLXdpZHRoKTtcbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbG9naW4tcGFnZS9sb2dpbi1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBO0FBQ0E7RUFDRSxtQ0FBQTtFQUNBLGlDQUFBO0FBQ0Y7QUFDQSxvdUJBQW91QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovXG4ubG9naW4tbG9nbyB7XG4gIGhlaWdodDogdmFyKC0tZHMtbG9naW4tbG9nby1oZWlnaHQpO1xuICB3aWR0aDogdmFyKC0tZHMtbG9naW4tbG9nby13aWR0aCk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_themes_custom_app_login-page_login-page_component_ts.js.map