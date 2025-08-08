(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_app_my-dspace-page_my-dspace-page-routes_ts"],{

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

/***/ 19124:
/*!*********************************************************!*\
  !*** ./src/app/my-dspace-page/my-dspace-page-routes.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ROUTES: () => (/* binding */ ROUTES)
/* harmony export */ });
/* harmony import */ var _core_breadcrumbs_i18n_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/breadcrumbs/i18n-breadcrumb.resolver */ 72059);
/* harmony import */ var _my_dspace_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-dspace.guard */ 25793);
/* harmony import */ var _themed_my_dspace_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./themed-my-dspace-page.component */ 76760);



const ROUTES = [{
  path: '',
  component: _themed_my_dspace_page_component__WEBPACK_IMPORTED_MODULE_2__.ThemedMyDSpacePageComponent,
  resolve: {
    breadcrumb: _core_breadcrumbs_i18n_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_0__.i18nBreadcrumbResolver
  },
  data: {
    title: 'mydspace.title',
    breadcrumbKey: 'mydspace'
  },
  canActivate: [_my_dspace_guard__WEBPACK_IMPORTED_MODULE_1__.myDSpaceGuard]
}];

/***/ }),

/***/ 25793:
/*!***************************************************!*\
  !*** ./src/app/my-dspace-page/my-dspace.guard.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   myDSpaceGuard: () => (/* binding */ myDSpaceGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 46891);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/empty.util */ 82777);
/* harmony import */ var _my_dspace_configuration_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-dspace-configuration.service */ 787);
/* harmony import */ var _my_dspace_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my-dspace-page.component */ 48752);






/**
 * Prevent unauthorized activating and loading of mydspace configuration
 */
const myDSpaceGuard = (route, state, configurationService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_my_dspace_configuration_service__WEBPACK_IMPORTED_MODULE_1__.MyDSpaceConfigurationService), router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)) => {
  return configurationService.getAvailableConfigurationTypes().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.first)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(configurationList => validateConfigurationParam(router, route.queryParamMap.get('configuration'), configurationList)));
};
/**
 * Check if the given configuration is present in the list of those available
 *
 * @param router
 *    the service router
 * @param configuration
 *    the configuration to validate
 * @param configurationList
 *    the list of available configuration
 *
 */
function validateConfigurationParam(router, configuration, configurationList) {
  const configurationDefault = configurationList[0];
  if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(configuration) || !configurationList.includes(configuration)) {
    // If configuration param is empty or is not included in available configurations redirect to a default configuration value
    const navigationExtras = {
      queryParams: {
        configuration: configurationDefault
      }
    };
    router.navigate([_my_dspace_page_component__WEBPACK_IMPORTED_MODULE_2__.MYDSPACE_ROUTE], navigationExtras);
    return false;
  } else {
    return true;
  }
}

/***/ }),

/***/ 76760:
/*!*******************************************************************!*\
  !*** ./src/app/my-dspace-page/themed-my-dspace-page.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemedMyDSpacePageComponent: () => (/* binding */ ThemedMyDSpacePageComponent)
/* harmony export */ });
/* harmony import */ var _shared_theme_support_themed_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/theme-support/themed.component */ 8886);
/* harmony import */ var _my_dspace_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-dspace-page.component */ 48752);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);



const _c0 = ["*"];
function ThemedMyDSpacePageComponent_ng_template_0_Template(rf, ctx) {}
/**
 * Themed wrapper for MyDSpacePageComponent
 */
class ThemedMyDSpacePageComponent extends _shared_theme_support_themed_component__WEBPACK_IMPORTED_MODULE_0__.ThemedComponent {
  getComponentName() {
    return 'MyDSpacePageComponent';
  }
  importThemedComponent(themeName) {
    return __webpack_require__(98966)(`./${themeName}/app/my-dspace-page/my-dspace-page.component`);
  }
  importUnthemedComponent() {
    return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./my-dspace-page.component */ 48752));
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵThemedMyDSpacePageComponent_BaseFactory;
      return function ThemedMyDSpacePageComponent_Factory(t) {
        return (ɵThemedMyDSpacePageComponent_BaseFactory || (ɵThemedMyDSpacePageComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](ThemedMyDSpacePageComponent)))(t || ThemedMyDSpacePageComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ThemedMyDSpacePageComponent,
      selectors: [["ds-my-dspace-page"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      ngContentSelectors: _c0,
      decls: 5,
      vars: 0,
      consts: [["vcr", ""], ["content", ""]],
      template: function ThemedMyDSpacePageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ThemedMyDSpacePageComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
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

/***/ 98966:
/*!********************************************************************************************************!*\
  !*** ./src/themes/ lazy ^\.\/.*\/app\/my\-dspace\-page\/my\-dspace\-page\.component$ namespace object ***!
  \********************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./custom/app/my-dspace-page/my-dspace-page.component": [
		24487,
		"src_themes_custom_app_my-dspace-page_my-dspace-page_component_ts"
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
webpackAsyncContext.id = 98966;
module.exports = webpackAsyncContext;

/***/ })

}]);
//# sourceMappingURL=src_app_my-dspace-page_my-dspace-page-routes_ts.js.map