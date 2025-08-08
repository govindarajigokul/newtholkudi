(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_app_logout-page_logout-page-routes_ts"],{

/***/ 87332:
/*!***************************************************!*\
  !*** ./src/app/logout-page/logout-page-routes.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ROUTES: () => (/* binding */ ROUTES)
/* harmony export */ });
/* harmony import */ var _core_auth_authenticated_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/auth/authenticated.guard */ 49347);
/* harmony import */ var _themed_logout_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./themed-logout-page.component */ 86266);


const ROUTES = [{
  canActivate: [_core_auth_authenticated_guard__WEBPACK_IMPORTED_MODULE_0__.authenticatedGuard],
  path: '',
  component: _themed_logout_page_component__WEBPACK_IMPORTED_MODULE_1__.ThemedLogoutPageComponent,
  data: {
    title: 'logout.title'
  }
}];

/***/ }),

/***/ 16640:
/*!******************************************************!*\
  !*** ./src/app/logout-page/logout-page.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LogoutPageComponent: () => (/* binding */ LogoutPageComponent)
/* harmony export */ });
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var _shared_log_out_log_out_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/log-out/log-out.component */ 61980);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 90310);




class LogoutPageComponent {
  static {
    this.ɵfac = function LogoutPageComponent_Factory(t) {
      return new (t || LogoutPageComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: LogoutPageComponent,
      selectors: [["ds-base-logout-page"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 9,
      vars: 6,
      consts: [[1, "container", "w-100", "h-100"], [1, "text-center", "mt-5", "row", "justify-content-md-center"], [1, "mx-auto"], ["src", "assets/images/dspace-logo.svg", 1, "mb-4", "login-logo", 3, "alt"], [1, "h3", "mb-0", "font-weight-normal"]],
      template: function LogoutPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h1", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "ds-log-out");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 2, "repository.image.logo"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 4, "logout.form.header"));
        }
      },
      dependencies: [_shared_log_out_log_out_component__WEBPACK_IMPORTED_MODULE_0__.LogOutComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n.login-logo[_ngcontent-%COMP%] {\n  height: var(--ds-login-logo-height);\n  width: var(--ds-login-logo-width);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ291dC1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBO0FBQ0E7RUFDRSxtQ0FBQTtFQUNBLGlDQUFBO0FBQ0YiLCJmaWxlIjoibG9nb3V0LXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqL1xuLmxvZ2luLWxvZ28ge1xuICBoZWlnaHQ6IHZhcigtLWRzLWxvZ2luLWxvZ28taGVpZ2h0KTtcbiAgd2lkdGg6IHZhcigtLWRzLWxvZ2luLWxvZ28td2lkdGgpO1xufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbG9nb3V0LXBhZ2UvbG9nb3V0LXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQTtFQUNFLG1DQUFBO0VBQ0EsaUNBQUE7QUFDRjtBQUNBLHd1QkFBd3VCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi9cbi5sb2dpbi1sb2dvIHtcbiAgaGVpZ2h0OiB2YXIoLS1kcy1sb2dpbi1sb2dvLWhlaWdodCk7XG4gIHdpZHRoOiB2YXIoLS1kcy1sb2dpbi1sb2dvLXdpZHRoKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 86266:
/*!*************************************************************!*\
  !*** ./src/app/logout-page/themed-logout-page.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemedLogoutPageComponent: () => (/* binding */ ThemedLogoutPageComponent)
/* harmony export */ });
/* harmony import */ var _shared_theme_support_themed_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/theme-support/themed.component */ 8886);
/* harmony import */ var _logout_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logout-page.component */ 16640);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);



const _c0 = ["*"];
function ThemedLogoutPageComponent_ng_template_0_Template(rf, ctx) {}
/**
 * Themed wrapper for LogoutPageComponent
 */
class ThemedLogoutPageComponent extends _shared_theme_support_themed_component__WEBPACK_IMPORTED_MODULE_0__.ThemedComponent {
  getComponentName() {
    return 'LogoutPageComponent';
  }
  importThemedComponent(themeName) {
    return __webpack_require__(29910)(`./${themeName}/app/logout-page/logout-page.component`);
  }
  importUnthemedComponent() {
    return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./logout-page.component */ 16640));
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵThemedLogoutPageComponent_BaseFactory;
      return function ThemedLogoutPageComponent_Factory(t) {
        return (ɵThemedLogoutPageComponent_BaseFactory || (ɵThemedLogoutPageComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](ThemedLogoutPageComponent)))(t || ThemedLogoutPageComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ThemedLogoutPageComponent,
      selectors: [["ds-logout-page"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      ngContentSelectors: _c0,
      decls: 5,
      vars: 0,
      consts: [["vcr", ""], ["content", ""]],
      template: function ThemedLogoutPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ThemedLogoutPageComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", null, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      },
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 29910:
/*!************************************************************************************************!*\
  !*** ./src/themes/ lazy ^\.\/.*\/app\/logout\-page\/logout\-page\.component$ namespace object ***!
  \************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./custom/app/logout-page/logout-page.component": [
		35647,
		"src_themes_custom_app_logout-page_logout-page_component_ts"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 29910;
module.exports = webpackAsyncContext;

/***/ })

}]);
//# sourceMappingURL=src_app_logout-page_logout-page-routes_ts.js.map