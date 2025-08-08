(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_app_login-page_login-page-routes_ts"],{

/***/ 90839:
/*!************************************************************!*\
  !*** ./src/app/breadcrumbs/breadcrumb/breadcrumb.model.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Breadcrumb: () => (/* binding */ Breadcrumb)
/* harmony export */ });
/**
 * Class representing a single breadcrumb
 */
class Breadcrumb {
  constructor(
  /**
   * The display value of the breadcrumb
   */
  text,
  /**
   * The optional url of the breadcrumb
   */
  url) {
    this.text = text;
    this.url = url;
  }
}

/***/ }),

/***/ 72059:
/*!**************************************************************!*\
  !*** ./src/app/core/breadcrumbs/i18n-breadcrumb.resolver.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i18nBreadcrumbResolver: () => (/* binding */ i18nBreadcrumbResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/empty.util */ 82777);
/* harmony import */ var _shared_utils_route_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/utils/route.utils */ 30506);
/* harmony import */ var _i18n_breadcrumbs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./i18n-breadcrumbs.service */ 72943);




/**
 * Method for resolving an I18n breadcrumb configuration object
 * @param {ActivatedRouteSnapshot} route The current ActivatedRouteSnapshot
 * @param {RouterStateSnapshot} state The current RouterStateSnapshot
 * @param {I18nBreadcrumbsService} breadcrumbService
 * @returns BreadcrumbConfig object
 */
const i18nBreadcrumbResolver = (route, state, breadcrumbService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_i18n_breadcrumbs_service__WEBPACK_IMPORTED_MODULE_2__.I18nBreadcrumbsService)) => {
  const key = route.data.breadcrumbKey;
  if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_0__.hasNoValue)(key)) {
    throw new Error('You provided an i18nBreadcrumbResolver for url \"' + route.url + '\" but no breadcrumbKey in the route\'s data');
  }
  const fullPath = (0,_shared_utils_route_utils__WEBPACK_IMPORTED_MODULE_1__.currentPathFromSnapshot)(route);
  return {
    provider: breadcrumbService,
    key: key,
    url: fullPath
  };
};

/***/ }),

/***/ 72943:
/*!**************************************************************!*\
  !*** ./src/app/core/breadcrumbs/i18n-breadcrumbs.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BREADCRUMB_MESSAGE_POSTFIX: () => (/* binding */ BREADCRUMB_MESSAGE_POSTFIX),
/* harmony export */   I18nBreadcrumbsService: () => (/* binding */ I18nBreadcrumbsService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 17796);
/* harmony import */ var _breadcrumbs_breadcrumb_breadcrumb_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../breadcrumbs/breadcrumb/breadcrumb.model */ 90839);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);



/**
 * The postfix for i18n breadcrumbs
 */
const BREADCRUMB_MESSAGE_POSTFIX = '.breadcrumbs';
/**
 * Service to calculate i18n breadcrumbs for a single part of the route
 */
class I18nBreadcrumbsService {
  /**
   * Method to calculate the breadcrumbs
   * @param key The key used to resolve the breadcrumb
   * @param url The url to use as a link for this breadcrumb
   */
  getBreadcrumbs(key, url) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)([new _breadcrumbs_breadcrumb_breadcrumb_model__WEBPACK_IMPORTED_MODULE_0__.Breadcrumb(key + BREADCRUMB_MESSAGE_POSTFIX, url)]);
  }
  static {
    this.ɵfac = function I18nBreadcrumbsService_Factory(t) {
      return new (t || I18nBreadcrumbsService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: I18nBreadcrumbsService,
      factory: I18nBreadcrumbsService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 97240:
/*!*************************************************!*\
  !*** ./src/app/login-page/login-page-routes.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ROUTES: () => (/* binding */ ROUTES)
/* harmony export */ });
/* harmony import */ var _core_breadcrumbs_i18n_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/breadcrumbs/i18n-breadcrumb.resolver */ 72059);
/* harmony import */ var _themed_login_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./themed-login-page.component */ 32664);


const ROUTES = [{
  path: '',
  pathMatch: 'full',
  component: _themed_login_page_component__WEBPACK_IMPORTED_MODULE_1__.ThemedLoginPageComponent,
  resolve: {
    breadcrumb: _core_breadcrumbs_i18n_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_0__.i18nBreadcrumbResolver
  },
  data: {
    breadcrumbKey: 'login',
    title: 'login.title'
  }
}];

/***/ }),

/***/ 40276:
/*!****************************************************!*\
  !*** ./src/app/login-page/login-page.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginPageComponent: () => (/* binding */ LoginPageComponent)
/* harmony export */ });
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 27639);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 85687);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 78374);
/* harmony import */ var _core_auth_auth_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/auth/auth.actions */ 59836);
/* harmony import */ var _core_auth_models_auth_token_info_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/auth/models/auth-token-info.model */ 69160);
/* harmony import */ var _core_auth_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/auth/selectors */ 38169);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/empty.util */ 82777);
/* harmony import */ var _shared_log_in_themed_log_in_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/log-in/themed-log-in.component */ 46519);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ 99797);














/**
 * This component represents the login page
 */
class LoginPageComponent {
  /**
   * Initialize instance variables
   *
   * @param {ActivatedRoute} route
   * @param {Store<AppState>} store
   */
  constructor(route, store) {
    this.route = route;
    this.store = store;
  }
  /**
   * Initialize instance variables
   */
  ngOnInit() {
    const queryParamsObs = this.route.queryParams;
    const authenticated = this.store.select(_core_auth_selectors__WEBPACK_IMPORTED_MODULE_2__.isAuthenticated);
    this.sub = (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.combineLatest)(queryParamsObs, authenticated).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.filter)(([params, auth]) => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_3__.isNotEmpty)(params.token) || (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_3__.isNotEmpty)(params.expired)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.take)(1)).subscribe(([params, auth]) => {
      const token = params.token;
      let authToken;
      if (!auth) {
        if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_3__.isNotEmpty)(token)) {
          authToken = new _core_auth_models_auth_token_info_model__WEBPACK_IMPORTED_MODULE_1__.AuthTokenInfo(token);
          this.store.dispatch(new _core_auth_auth_actions__WEBPACK_IMPORTED_MODULE_0__.AuthenticatedAction(authToken));
        } else if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_3__.isNotEmpty)(params.expired)) {
          this.store.dispatch(new _core_auth_auth_actions__WEBPACK_IMPORTED_MODULE_0__.AddAuthenticationMessageAction('auth.messages.expired'));
        }
      } else {
        if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_3__.isNotEmpty)(token)) {
          authToken = new _core_auth_models_auth_token_info_model__WEBPACK_IMPORTED_MODULE_1__.AuthTokenInfo(token);
          this.store.dispatch(new _core_auth_auth_actions__WEBPACK_IMPORTED_MODULE_0__.AuthenticationSuccessAction(authToken));
        }
      }
    });
  }
  /**
   * Unsubscribe from subscription
   */
  ngOnDestroy() {
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_3__.hasValue)(this.sub)) {
      this.sub.unsubscribe();
    }
    // Clear all authentication messages when leaving login page
    this.store.dispatch(new _core_auth_auth_actions__WEBPACK_IMPORTED_MODULE_0__.ResetAuthenticationMessagesAction());
  }
  static {
    this.ɵfac = function LoginPageComponent_Factory(t) {
      return new (t || LoginPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_10__.Store));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
      type: LoginPageComponent,
      selectors: [["ds-base-login-page"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵStandaloneFeature"]],
      decls: 9,
      vars: 7,
      consts: [[1, "container", "w-100", "h-100"], [1, "text-center", "mt-5", "row", "justify-content-center"], ["src", "assets/images/dspace-logo.svg", 1, "mb-4", "login-logo", 3, "alt"], [1, "h3", "mb-0", "font-weight-normal"], [3, "isStandalonePage"]],
      template: function LoginPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "img", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "h1", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](7, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "ds-log-in", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 3, "repository.image.logo"));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](7, 5, "login.form.header"));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("isStandalonePage", true);
        }
      },
      dependencies: [_shared_log_in_themed_log_in_component__WEBPACK_IMPORTED_MODULE_4__.ThemedLogInComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n.login-logo[_ngcontent-%COMP%] {\n  height: var(--ds-login-logo-height);\n  width: var(--ds-login-logo-width);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQTtFQUNFLG1DQUFBO0VBQ0EsaUNBQUE7QUFDRiIsImZpbGUiOiJsb2dpbi1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi9cbi5sb2dpbi1sb2dvIHtcbiAgaGVpZ2h0OiB2YXIoLS1kcy1sb2dpbi1sb2dvLWhlaWdodCk7XG4gIHdpZHRoOiB2YXIoLS1kcy1sb2dpbi1sb2dvLXdpZHRoKTtcbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbG9naW4tcGFnZS9sb2dpbi1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBO0FBQ0E7RUFDRSxtQ0FBQTtFQUNBLGlDQUFBO0FBQ0Y7QUFDQSxvdUJBQW91QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovXG4ubG9naW4tbG9nbyB7XG4gIGhlaWdodDogdmFyKC0tZHMtbG9naW4tbG9nby1oZWlnaHQpO1xuICB3aWR0aDogdmFyKC0tZHMtbG9naW4tbG9nby13aWR0aCk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 32664:
/*!***********************************************************!*\
  !*** ./src/app/login-page/themed-login-page.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemedLoginPageComponent: () => (/* binding */ ThemedLoginPageComponent)
/* harmony export */ });
/* harmony import */ var _shared_theme_support_themed_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/theme-support/themed.component */ 8886);
/* harmony import */ var _login_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-page.component */ 40276);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);



const _c0 = ["*"];
function ThemedLoginPageComponent_ng_template_0_Template(rf, ctx) {}
/**
 * Themed wrapper for LoginPageComponent
 */
class ThemedLoginPageComponent extends _shared_theme_support_themed_component__WEBPACK_IMPORTED_MODULE_0__.ThemedComponent {
  getComponentName() {
    return 'LoginPageComponent';
  }
  importThemedComponent(themeName) {
    return __webpack_require__(37826)(`./${themeName}/app/login-page/login-page.component`);
  }
  importUnthemedComponent() {
    return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./login-page.component */ 40276));
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵThemedLoginPageComponent_BaseFactory;
      return function ThemedLoginPageComponent_Factory(t) {
        return (ɵThemedLoginPageComponent_BaseFactory || (ɵThemedLoginPageComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](ThemedLoginPageComponent)))(t || ThemedLoginPageComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ThemedLoginPageComponent,
      selectors: [["ds-login-page"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      ngContentSelectors: _c0,
      decls: 5,
      vars: 0,
      consts: [["vcr", ""], ["content", ""]],
      template: function ThemedLoginPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ThemedLoginPageComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
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

/***/ 37826:
/*!**********************************************************************************************!*\
  !*** ./src/themes/ lazy ^\.\/.*\/app\/login\-page\/login\-page\.component$ namespace object ***!
  \**********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./custom/app/login-page/login-page.component": [
		1591,
		"src_themes_custom_app_login-page_login-page_component_ts"
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
webpackAsyncContext.id = 37826;
module.exports = webpackAsyncContext;

/***/ })

}]);
//# sourceMappingURL=src_app_login-page_login-page-routes_ts.js.map