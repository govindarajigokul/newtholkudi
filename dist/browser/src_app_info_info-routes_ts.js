(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_app_info_info-routes_ts"],{

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

/***/ 38088:
/*!*************************************************!*\
  !*** ./src/app/core/feedback/feedback.guard.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   feedbackGuard: () => (/* binding */ feedbackGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _data_feature_authorization_authorization_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/feature-authorization/authorization-data.service */ 3675);
/* harmony import */ var _data_feature_authorization_feature_id__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/feature-authorization/feature-id */ 3970);



/**
 * A guard for redirecting users to the feedback page if user is authorized
 */
const feedbackGuard = (route, state, authorizationService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_data_feature_authorization_authorization_data_service__WEBPACK_IMPORTED_MODULE_0__.AuthorizationDataService)) => {
  return authorizationService.isAuthorized(_data_feature_authorization_feature_id__WEBPACK_IMPORTED_MODULE_1__.FeatureID.CanSendFeedback);
};

/***/ }),

/***/ 7391:
/*!*********************************************************************!*\
  !*** ./src/app/info/about/about-content/about-content.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutContentComponent: () => (/* binding */ AboutContentComponent)
/* harmony export */ });
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 90310);



/**
 * Component displaying the contents of the About Statement
 */
class AboutContentComponent {
  static {
    this.ɵfac = function AboutContentComponent_Factory(t) {
      return new (t || AboutContentComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutContentComponent,
      selectors: [["ds-about-content"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 11,
      vars: 6,
      template: function AboutContentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p")(4, "em");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Last updated May 4, 2023");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Introduction to Tholkudi Programme");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "info.about.head"));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 4, "repository.title"), " (\"Company\" or \"We\") respects your privacy and is committed to protecting it through our compliance with this policy.");
        }
      },
      dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslatePipe],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LWNvbnRlbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUEiLCJmaWxlIjoiYWJvdXQtY29udGVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaW5mby9hYm91dC9hYm91dC1jb250ZW50L2Fib3V0LWNvbnRlbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQSxna0JBQWdrQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 54845:
/*!***********************************************!*\
  !*** ./src/app/info/about/about.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutComponent: () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _about_content_about_content_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about-content/about-content.component */ 7391);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 90310);


/**
 * Component displaying the About Statement
 */
class AboutComponent {
  static {
    this.ɵfac = function AboutComponent_Factory(t) {
      return new (t || AboutComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AboutComponent,
      selectors: [["ds-base-about"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 0,
      consts: [[1, "container"]],
      template: function AboutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ds-about-content");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      },
      dependencies: [_about_content_about_content_component__WEBPACK_IMPORTED_MODULE_0__.AboutContentComponent],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBIiwiZmlsZSI6ImFib3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi8iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaW5mby9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBLDRpQkFBNGlCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi8iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 90363:
/*!******************************************************!*\
  !*** ./src/app/info/about/themed-about.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemedAboutComponent: () => (/* binding */ ThemedAboutComponent)
/* harmony export */ });
/* harmony import */ var _shared_theme_support_themed_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/theme-support/themed.component */ 8886);
/* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.component */ 54845);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);



const _c0 = ["*"];
function ThemedAboutComponent_ng_template_0_Template(rf, ctx) {}
/**
 * Themed wrapper for AboutComponent
 */
class ThemedAboutComponent extends _shared_theme_support_themed_component__WEBPACK_IMPORTED_MODULE_0__.ThemedComponent {
  getComponentName() {
    return 'AboutComponent';
  }
  importThemedComponent(themeName) {
    return __webpack_require__(64055)(`./${themeName}/app/info/about/about.component`);
  }
  importUnthemedComponent() {
    return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./about.component */ 54845));
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵThemedAboutComponent_BaseFactory;
      return function ThemedAboutComponent_Factory(t) {
        return (ɵThemedAboutComponent_BaseFactory || (ɵThemedAboutComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](ThemedAboutComponent)))(t || ThemedAboutComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ThemedAboutComponent,
      selectors: [["ds-about"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      ngContentSelectors: _c0,
      decls: 5,
      vars: 0,
      consts: [["vcr", ""], ["content", ""]],
      template: function ThemedAboutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ThemedAboutComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
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

/***/ 53752:
/*!***************************************************************************!*\
  !*** ./src/app/info/credits/credits-content/credits-content.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreditsContentComponent: () => (/* binding */ CreditsContentComponent)
/* harmony export */ });
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 90310);



/**
 * Component displaying the contents of the Credits Statement
 */
class CreditsContentComponent {
  static {
    this.ɵfac = function CreditsContentComponent_Factory(t) {
      return new (t || CreditsContentComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CreditsContentComponent,
      selectors: [["ds-credits-content"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 8,
      vars: 3,
      template: function CreditsContentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p")(4, "em");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Last updated May 4, 2023");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Contributors");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "info.credits.head"));
        }
      },
      dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslatePipe],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWRpdHMtY29udGVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQSIsImZpbGUiOiJjcmVkaXRzLWNvbnRlbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqLyJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaW5mby9jcmVkaXRzL2NyZWRpdHMtY29udGVudC9jcmVkaXRzLWNvbnRlbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQSx3a0JBQXdrQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 70493:
/*!***************************************************!*\
  !*** ./src/app/info/credits/credits.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreditsComponent: () => (/* binding */ CreditsComponent)
/* harmony export */ });
/* harmony import */ var _credits_content_credits_content_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./credits-content/credits-content.component */ 53752);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 90310);


/**
 * Component displaying the Credits Statement
 */
class CreditsComponent {
  static {
    this.ɵfac = function CreditsComponent_Factory(t) {
      return new (t || CreditsComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CreditsComponent,
      selectors: [["ds-base-credits"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 0,
      consts: [[1, "container"]],
      template: function CreditsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ds-credits-content");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      },
      dependencies: [_credits_content_credits_content_component__WEBPACK_IMPORTED_MODULE_0__.CreditsContentComponent],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWRpdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUEiLCJmaWxlIjoiY3JlZGl0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaW5mby9jcmVkaXRzL2NyZWRpdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQSxnakJBQWdqQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 95525:
/*!**********************************************************!*\
  !*** ./src/app/info/credits/themed-credits.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemedCreditsComponent: () => (/* binding */ ThemedCreditsComponent)
/* harmony export */ });
/* harmony import */ var _shared_theme_support_themed_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/theme-support/themed.component */ 8886);
/* harmony import */ var _credits_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./credits.component */ 70493);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);



const _c0 = ["*"];
function ThemedCreditsComponent_ng_template_0_Template(rf, ctx) {}
/**
 * Themed wrapper for CreditsComponent
 */
class ThemedCreditsComponent extends _shared_theme_support_themed_component__WEBPACK_IMPORTED_MODULE_0__.ThemedComponent {
  getComponentName() {
    return 'CreditsComponent';
  }
  importThemedComponent(themeName) {
    return __webpack_require__(23169)(`./${themeName}/app/info/credits/credits.component`);
  }
  importUnthemedComponent() {
    return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./credits.component */ 70493));
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵThemedCreditsComponent_BaseFactory;
      return function ThemedCreditsComponent_Factory(t) {
        return (ɵThemedCreditsComponent_BaseFactory || (ɵThemedCreditsComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](ThemedCreditsComponent)))(t || ThemedCreditsComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ThemedCreditsComponent,
      selectors: [["ds-credits"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      ngContentSelectors: _c0,
      decls: 5,
      vars: 0,
      consts: [["vcr", ""], ["content", ""]],
      template: function ThemedCreditsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ThemedCreditsComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
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

/***/ 85914:
/*!************************************************************************************************************!*\
  !*** ./src/app/info/end-user-agreement/end-user-agreement-content/end-user-agreement-content.component.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EndUserAgreementContentComponent: () => (/* binding */ EndUserAgreementContentComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 90310);




const _c0 = () => ["/info/privacy"];
/**
 * Component displaying the contents of the End User Agreement
 */
class EndUserAgreementContentComponent {
  static {
    this.ɵfac = function EndUserAgreementContentComponent_Factory(t) {
      return new (t || EndUserAgreementContentComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EndUserAgreementContentComponent,
      selectors: [["ds-end-user-agreement-content"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 169,
      vars: 25,
      consts: [["fragment", "comment-a", "id", "ref-a", 3, "routerLink"], ["target", "_blank", "rel", "noopener noreferrer", 1, "link-contrast", 3, "routerLink"], ["fragment", "ref-a", "id", "comment-a", 1, "link-contrast", 3, "routerLink"], ["href", "https://github.com/DSpace/DSpace/blob/main/LICENSE", "target", "_blank", "rel", "noopener noreferrer", 1, "link-contrast"]],
      template: function EndUserAgreementContentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p")(4, "em");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Last updated May 4, 2023");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Agreement to terms");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Supplemental terms and conditions or documents that may be posted on the Site from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Terms of Use at any time and for any reason. We will alert you about any changes by updating the \"Last updated\" date of these Terms of Use, and you waive any right to receive specific notice of each such change. Please ensure that you check the applicable Terms every time you use our Site so that you understand which Terms apply. You will be subject to, and will be deemed to have been made aware of and to have accepted, the changes in any revised Terms of Use by your continued use of the Site after the date such revised Terms of Use are posted.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "The information provided on the Site is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Site from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Intellectual property rights");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "sup")(21, "a", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "[a]");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Provided that you are eligible to use the Site, you are granted a limited license to access and use the Site and to download or print a copy of any portion of the Content to which you have properly gained access solely for your personal, non-commercial use. We reserve all rights not expressly granted to you in and to the Site, the Content and the Marks.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "User representations");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Terms of Use; (4) you will not use the Site for any illegal or unauthorized purpose; and (5) your use of the Site will not violate any applicable law or regulation.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your account and refuse any and all current or future use of the Site (or any portion thereof).");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "User registration");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "You may be required to register with the Site. You agree to keep your password confidential and will be responsible for all use of your account and password. We reserve the right to remove, reclaim, or change a username you select if we determine, in our sole discretion, that such username is inappropriate, obscene, or otherwise objectionable.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Prohibited activities");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "As a user of the Site, you agree not to:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "ul")(43, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Systematically retrieve data or other content from the Site to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Circumvent, disable, or otherwise interfere with security-related features of the Site, including features that prevent or restrict the use or copying of any Content or enforce limitations on the use of the Site and/or the Content contained therein.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Site.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Use any information obtained from the Site in order to harass, abuse, or harm another person.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Make improper use of our support services or submit false reports of abuse or misconduct.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Use the Site in a manner inconsistent with any applicable laws or regulations.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Engage in unauthorized framing of or linking to the Site.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material, including excessive use of capital letters and spamming (continuous posting of repetitive text), that interferes with any party's uninterrupted use and enjoyment of the Site or modifies, impairs, disrupts, alters, or interferes with the use, features, functions, operation, or maintenance of the Site.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Delete the copyright or other proprietary rights notice from any Content.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Attempt to impersonate another user or person or use the username and password of another user.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Upload or transmit (or attempt to upload or to transmit) any material that acts as a passive or active information collection or transmission mechanism, including without limitation, clear graphics interchange formats (\"gifs\"), 1x1 pixels, web bugs, cookies, or other similar devices (sometimes referred to as \"spyware\" or \"passive collection mechanisms\" or \"pcms\").");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Interfere with, disrupt, or create an undue burden on the Site or the networks or services connected to the Site.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of the Site to you.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Attempt to bypass any measures of the Site designed to prevent or restrict access to the Site, or any portion of the Site.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Make any unauthorized use of the Site, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email or other forms of electronic communication, or creating user accounts by automated means or under false pretenses.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Use the Site as part of any effort to compete with us or otherwise use the Site and/or the Content for any revenue-generating endeavor or commercial enterprise.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "User generated contributions");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "The Site may provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials to us or on the Site, including but not limited to text, writings, video, audio, photographs, graphics, comments, suggestions, or personal information or other material (collectively, \"Contributions\"). Contributions may be viewable by other users of the Site and through third-party websites. As such, any Contributions you transmit may be treated as non-confidential and non-proprietary. When you create or make available any Contributions, you thereby represent and warrant that:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "ul")(82, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "The creation, distribution, transmission, public display, or performance, and the accessing, downloading, or copying of your Contributions do not and will not infringe the proprietary rights, including but not limited to the copyright, patent, trademark, trade secret, or moral rights of any third party.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "You are the creator and owner of or have the necessary licenses, rights, consents, releases, and permissions to use and to authorize us, the Site, and other users of the Site to use your Contributions in any manner contemplated by the Site and these Terms of Use.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "You have the written consent, release, and/or permission of each and every identifiable individual person in your Contributions to use the name or likeness of each and every such identifiable individual person to enable inclusion and use of your Contributions in any manner contemplated by the Site and these Terms of Use.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Your Contributions are not false, inaccurate, or misleading.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Your Contributions are not unsolicited or unauthorized advertising, promotional materials, pyramid schemes, chain letters, spam, mass mailings, or other forms of solicitation.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Your Contributions are not obscene, lewd, lascivious, filthy, violent, harassing, libelous, slanderous, or otherwise objectionable (as determined by us).");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Your Contributions do not ridicule, mock, disparage, intimidate, or abuse anyone.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Your Contributions are not used to harass or threaten (in the legal sense of those terms) any other person, do not create and are not used to promote violence against a specific person or class of people.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Your Contributions do not violate any applicable law, regulation, or rule.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Your Contributions do not violate the privacy or publicity rights of any third party.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Your Contributions do not violate any applicable law concerning child pornography, or otherwise intended to protect the health or well-being of minors.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Your Contributions do not include any offensive comments that are connected to race, national origin, gender, sexual preference, colour, religion, creed or physical handicap.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Your Contributions do not otherwise violate, or link to material that violates, any provision of these Terms of Use, or any applicable law or regulation.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Any use of the Site in violation of the foregoing violates these Terms of Use and may result in, among other things, termination or suspension of your rights to use the Site.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Site management");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "We reserve the right, but not the obligation, to: (1) monitor the Site for violations of these Terms of Use; (2) take appropriate legal action against anyone who, in our sole discretion, violates the law or these Terms of Use, including without limitation, reporting such user to law enforcement authorities; (3) in our sole discretion and without limitation, refuse, restrict access to, limit the availability of, or disable (to the extent technologically feasible) any of your Contributions or any portion thereof; (4) in our sole discretion and without limitation, notice, or liability, to remove from the Site or otherwise disable all files and content that are excessive in size or are in any way burdensome to our systems; and (5) otherwise manage the Site in a manner designed to protect our rights and property and to facilitate the proper functioning of the Site.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Privacy policy");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "We care about data privacy and security. Please review our ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "a", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Privacy Policy");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, ". By using the Site, you agree to be bound by our Privacy Policy, which is incorporated into these Terms of Use.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](123, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](124, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](125, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](126, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Term and termination");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "These Terms of Use shall remain in full force and effect while you use the Site. WITHOUT LIMITING ANY OTHER PROVISION OF THESE TERMS OF USE, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SITE (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE TERMS OF USE OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY TERMINATE YOUR USE OR PARTICIPATION IN THE SITE OR DELETE YOUR ACCOUNT AND ANY CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, IN OUR SOLE DISCRETION.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "If we terminate or suspend your account for any reason, you are prohibited from registering and creating a new account under your name, a fake or borrowed name, or the name of any third party, even if you may be acting on behalf of the third party. In addition to terminating or suspending your account, we reserve the right to take appropriate legal action, including without limitation pursuing civil, criminal, and injunctive redress.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Modifications and interruptions");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "We reserve the right to change, modify, or remove the contents of the Site at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Site. We also reserve the right to modify or discontinue all or part of the Site without notice at any time. We will not be liable to you or any third party for any modification, change, suspension, or discontinuance of the Site.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "We cannot guarantee the Site will be available at all times. We may experience hardware, software, or other problems or need to perform maintenance related to the Site, resulting in interruptions, delays, or errors. We reserve the right to change, revise, update, suspend, discontinue, or otherwise modify the Site at any time or for any reason without notice to you. You agree that we have no liability whatsoever for any loss, damage, or inconvenience caused by your inability to access or use the Site during any downtime or discontinuance of the Site. Nothing in these Terms of Use will be construed to obligate us to maintain and support the Site or to supply any corrections, updates, or releases in connection therewith.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Corrections");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "There may be information on the Site that contains typographical errors, inaccuracies, or omissions. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the information on the Site at any time, without prior notice.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Disclaimer");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "THE SITE IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SITE AND OUR SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SITE AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SITE'S CONTENT OR THE CONTENT OF ANY WEBSITES LINKED TO THE SITE AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY (1) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS, (2) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF THE SITE, (3) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN, (4) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE SITE, (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH THE SITE BY ANY THIRD PARTY, AND/OR (6) ANY ERRORS OR OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SITE. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE SITE, ANY HYPERLINKED WEBSITE, OR ANY WEBSITE OR MOBILE APPLICATION FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES. AS WITH THE PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR IN ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGMENT AND EXERCISE CAUTION WHERE APPROPRIATE.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "Limitations of liability");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SITE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "Indemnification");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys' fees and expenses, made by any third party due to or arising out of: (1) your Contributions; (2) use of the Site; (3) breach of these Terms of Use; (4) any breach of your representations and warranties set forth in these Terms of Use; (5) your violation of the rights of a third party, including but not limited to intellectual property rights; or (6) any overt harmful act toward any other user of the Site with whom you connected via the Site. Notwithstanding the foregoing, we reserve the right, at your expense, to assume the exclusive defense and control of any matter for which you are required to indemnify us, and you agree to cooperate, at your expense, with our defense of such claims. We will use reasonable efforts to notify you of any such claim, action, or proceeding which is subject to this indemnification upon becoming aware of it.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "User Data");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "We will maintain certain data that you transmit to the Site for the purpose of managing the performance of the Site, as well as data relating to your use of the Site. Although we perform regular routine backups of data, you are solely responsible for all data that you transmit or that relates to any activity you have undertaken using the Site. You agree that we shall have no liability to you for any loss or corruption of any such data, and you hereby waive any right of action against us arising from any such loss or corruption of such data.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "Miscellaneous");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "These Terms of Use and any policies or operating rules posted by us on the Site or in respect to the Site constitute the entire agreement and understanding between you and us. Our failure to exercise or enforce any right or provision of these Terms of Use shall not operate as a waiver of such right or provision. These Terms of Use operate to the fullest extent permissible by law. We may assign any or all of our rights and obligations to others at any time. We shall not be responsible or liable for any loss, damage, delay, or failure to act caused by any cause beyond our reasonable control. If any provision or part of a provision of these Terms of Use is determined to be unlawful, void, or unenforceable, that provision or part of the provision is deemed severable from these Terms of Use and does not affect the validity and enforceability of any remaining provisions. There is no joint venture, partnership, employment or agency relationship created between you and us as a result of these Terms of Use or use of the Site. You agree that these Terms of Use will not be construed against us by virtue of having drafted them. You hereby waive any and all defenses you may have based on the electronic form of these Terms of Use and the lack of signing by the parties hereto to execute these Terms of Use.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "p")(164, "a", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "[a]");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "\u00A0The DSpace software used to run this site is open source. Options for reuse and reproduction of the DSpace software is governed by its open source license: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "a", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "https://github.com/DSpace/DSpace/blob/main/LICENSE");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 10, "info.end-user-agreement.head"));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity (\"you\") and ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 12, "repository.title"), " (\"Company\", \"we\", \"us\", or \"our\"), concerning your access to and use of this website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the \"Site\"). You agree that by accessing the Site, you have read, understood, and agreed to be bound by all of these Terms of Use and any future amendments thereof.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the \"Content\") and the trademarks, service marks, and logos contained therein (the \"Marks\") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights and unfair competition laws of ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 14, "info.end-user-agreement.hosting-country"), ", international copyright laws, and international conventions. The Content and the Marks are provided on the Site \"AS IS\" for your information and personal use only. Except as expressly provided in these Terms of Use, no part of the Site and no Content");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ".");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](97);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](24, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate4"]("Please be advised the Site is hosted in ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](123, 16, "info.end-user-agreement.hosting-country"), ". If you access the Site from any other region of the world with laws or other requirements governing personal data collection, use, or disclosure that differ from applicable laws in ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](124, 18, "info.end-user-agreement.hosting-country"), ", then through your continued use of the Site, you are transferring your data to ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](125, 20, "info.end-user-agreement.hosting-country"), ", and you agree to have your data transferred to and processed in ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](126, 22, "info.end-user-agreement.hosting-country"), ".");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](42);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ".");
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVuZC11c2VyLWFncmVlbWVudC1jb250ZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBIiwiZmlsZSI6ImVuZC11c2VyLWFncmVlbWVudC1jb250ZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi8iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaW5mby9lbmQtdXNlci1hZ3JlZW1lbnQvZW5kLXVzZXItYWdyZWVtZW50LWNvbnRlbnQvZW5kLXVzZXItYWdyZWVtZW50LWNvbnRlbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQSxvbUJBQW9tQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 69339:
/*!*************************************************************************!*\
  !*** ./src/app/info/end-user-agreement/end-user-agreement.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EndUserAgreementComponent: () => (/* binding */ EndUserAgreementComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 56106);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 17796);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 84975);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 78374);
/* harmony import */ var _core_auth_auth_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/auth/auth.actions */ 59836);
/* harmony import */ var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/auth/auth.service */ 67116);
/* harmony import */ var _core_end_user_agreement_end_user_agreement_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/end-user-agreement/end-user-agreement.service */ 3636);
/* harmony import */ var _shared_btn_disabled_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/btn-disabled.directive */ 60456);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/empty.util */ 82777);
/* harmony import */ var _shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/notifications/notifications.service */ 69472);
/* harmony import */ var _end_user_agreement_content_end_user_agreement_content_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./end-user-agreement-content/end-user-agreement-content.component */ 85914);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngrx/store */ 99797);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 14354);





















const _c0 = () => ({
  standalone: true
});
/**
 * Component displaying the End User Agreement and an option to accept it
 */
class EndUserAgreementComponent {
  constructor(endUserAgreementService, notificationsService, translate, authService, store, router, route) {
    this.endUserAgreementService = endUserAgreementService;
    this.notificationsService = notificationsService;
    this.translate = translate;
    this.authService = authService;
    this.store = store;
    this.router = router;
    this.route = route;
    /**
     * Whether or not the user agreement has been accepted
     */
    this.accepted = false;
  }
  /**
   * Initialize the component
   */
  ngOnInit() {
    this.initAccepted();
  }
  /**
   * Initialize the "accepted" property of this component by checking if the current user has accepted it before
   */
  initAccepted() {
    this.endUserAgreementService.hasCurrentUserOrCookieAcceptedAgreement(false).subscribe(accepted => {
      this.accepted = accepted;
    });
  }
  /**
   * Submit the form
   * Set the End User Agreement, display a notification and (optionally) redirect the user back to their original destination
   */
  submit() {
    this.endUserAgreementService.setUserAcceptedAgreement(this.accepted).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(success => {
      if (success) {
        this.notificationsService.success(this.translate.instant('info.end-user-agreement.accept.success'));
        return this.route.queryParams.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(params => params.redirect));
      } else {
        this.notificationsService.error(this.translate.instant('info.end-user-agreement.accept.error'));
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(undefined);
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.take)(1)).subscribe(redirectUrl => {
      if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_4__.isNotEmpty)(redirectUrl)) {
        this.router.navigateByUrl(decodeURIComponent(redirectUrl));
      }
    });
  }
  /**
   * Cancel the agreement
   * If the user is logged in, this will log them out
   * If the user is not logged in, they will be redirected to the homepage
   */
  cancel() {
    this.authService.isAuthenticated().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.take)(1)).subscribe(authenticated => {
      if (authenticated) {
        this.store.dispatch(new _core_auth_auth_actions__WEBPACK_IMPORTED_MODULE_0__.LogOutAction());
      } else {
        this.router.navigate(['home']);
      }
    });
  }
  static {
    this.ɵfac = function EndUserAgreementComponent_Factory(t) {
      return new (t || EndUserAgreementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_core_end_user_agreement_end_user_agreement_service__WEBPACK_IMPORTED_MODULE_2__.EndUserAgreementService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_5__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_13__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
      type: EndUserAgreementComponent,
      selectors: [["ds-base-end-user-agreement"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵStandaloneFeature"]],
      decls: 14,
      vars: 13,
      consts: [[1, "container"], ["novalidate", "", 1, "form-user-agreement-accept", "mt-4", 3, "ngSubmit"], ["type", "checkbox", "id", "user-agreement-accept", 1, "ml-1", "mr-2", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["for", "user-agreement-accept", 1, "col-form-label-lg"], [1, "d-flex", "mt-4"], ["id", "button-cancel", "type", "button", 1, "btn", "btn-outline-secondary", "mr-auto", 3, "click"], ["id", "button-save", "type", "submit", 1, "btn", "btn-primary", 3, "dsBtnDisabled"]],
      template: function EndUserAgreementComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "ds-end-user-agreement-content");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "form", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngSubmit", function EndUserAgreementComponent_Template_form_ngSubmit_2_listener() {
            return ctx.submit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "input", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayListener"]("ngModelChange", function EndUserAgreementComponent_Template_input_ngModelChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayBindingSet"](ctx.accepted, $event) || (ctx.accepted = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "label", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](6, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "div", 4)(8, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function EndUserAgreementComponent_Template_button_click_8_listener() {
            return ctx.cancel();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](10, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](13, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayProperty"]("ngModel", ctx.accepted);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](12, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](6, 6, "info.end-user-agreement.accept"));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](10, 8, "info.end-user-agreement.buttons.cancel"));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("dsBtnDisabled", !ctx.accepted);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](13, 10, "info.end-user-agreement.buttons.save"));
        }
      },
      dependencies: [_end_user_agreement_content_end_user_agreement_content_component__WEBPACK_IMPORTED_MODULE_6__.EndUserAgreementContentComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgForm, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslatePipe, _shared_btn_disabled_directive__WEBPACK_IMPORTED_MODULE_3__.BtnDisabledDirective],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\ninput#user-agreement-accept[_ngcontent-%COMP%] {\n  \n\n  -ms-transform: scale(1.6); \n\n  -moz-transform: scale(1.6); \n\n  -webkit-transform: scale(1.6); \n\n  -o-transform: scale(1.6); \n\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVuZC11c2VyLWFncmVlbWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBO0VBQ0UsMkJBQUE7RUFDQSx5QkFBQSxFQUFBLE9BQUE7RUFDQSwwQkFBQSxFQUFBLE9BQUE7RUFDQSw2QkFBQSxFQUFBLHNCQUFBO0VBQ0Esd0JBQUEsRUFBQSxVQUFBO0VBQ0EsYUFBQTtBQUNGIiwiZmlsZSI6ImVuZC11c2VyLWFncmVlbWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovXG5pbnB1dCN1c2VyLWFncmVlbWVudC1hY2NlcHQge1xuICAvKiBMYXJnZS1zaXplZCBDaGVja2JveGVzICovXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuNik7IC8qIElFICovXG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxLjYpOyAvKiBGRiAqL1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS42KTsgLyogU2FmYXJpIGFuZCBDaHJvbWUgKi9cbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxLjYpOyAvKiBPcGVyYSAqL1xuICBwYWRkaW5nOiAxMHB4O1xufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaW5mby9lbmQtdXNlci1hZ3JlZW1lbnQvZW5kLXVzZXItYWdyZWVtZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBO0FBQ0E7RUFDRSwyQkFBQTtFQUNBLHlCQUFBLEVBQUEsT0FBQTtFQUNBLDBCQUFBLEVBQUEsT0FBQTtFQUNBLDZCQUFBLEVBQUEsc0JBQUE7RUFDQSx3QkFBQSxFQUFBLFVBQUE7RUFDQSxhQUFBO0FBQ0Y7QUFDQSx3a0NBQXdrQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovXG5pbnB1dCN1c2VyLWFncmVlbWVudC1hY2NlcHQge1xuICAvKiBMYXJnZS1zaXplZCBDaGVja2JveGVzICovXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuNik7IC8qIElFICovXG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxLjYpOyAvKiBGRiAqL1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS42KTsgLyogU2FmYXJpIGFuZCBDaHJvbWUgKi9cbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxLjYpOyAvKiBPcGVyYSAqL1xuICBwYWRkaW5nOiAxMHB4O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 87643:
/*!********************************************************************************!*\
  !*** ./src/app/info/end-user-agreement/themed-end-user-agreement.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemedEndUserAgreementComponent: () => (/* binding */ ThemedEndUserAgreementComponent)
/* harmony export */ });
/* harmony import */ var _shared_theme_support_themed_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/theme-support/themed.component */ 8886);
/* harmony import */ var _end_user_agreement_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./end-user-agreement.component */ 69339);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);



const _c0 = ["*"];
function ThemedEndUserAgreementComponent_ng_template_0_Template(rf, ctx) {}
/**
 * Themed wrapper for EndUserAgreementComponent
 */
class ThemedEndUserAgreementComponent extends _shared_theme_support_themed_component__WEBPACK_IMPORTED_MODULE_0__.ThemedComponent {
  getComponentName() {
    return 'EndUserAgreementComponent';
  }
  importThemedComponent(themeName) {
    return __webpack_require__(66519)(`./${themeName}/app/info/end-user-agreement/end-user-agreement.component`);
  }
  importUnthemedComponent() {
    return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./end-user-agreement.component */ 69339));
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵThemedEndUserAgreementComponent_BaseFactory;
      return function ThemedEndUserAgreementComponent_Factory(t) {
        return (ɵThemedEndUserAgreementComponent_BaseFactory || (ɵThemedEndUserAgreementComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](ThemedEndUserAgreementComponent)))(t || ThemedEndUserAgreementComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ThemedEndUserAgreementComponent,
      selectors: [["ds-end-user-agreement"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      ngContentSelectors: _c0,
      decls: 5,
      vars: 0,
      consts: [["vcr", ""], ["content", ""]],
      template: function ThemedEndUserAgreementComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ThemedEndUserAgreementComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
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

/***/ 37234:
/*!************************************************************************!*\
  !*** ./src/app/info/feedback/feedback-form/feedback-form.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeedbackFormComponent: () => (/* binding */ FeedbackFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 56106);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 78374);
/* harmony import */ var _app_routing_paths__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../app-routing-paths */ 69799);
/* harmony import */ var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/auth/auth.service */ 67116);
/* harmony import */ var _core_feedback_feedback_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/feedback/feedback-data.service */ 10241);
/* harmony import */ var _core_services_route_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/route.service */ 27297);
/* harmony import */ var _core_services_window_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/services/window.service */ 1676);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/shared/operators */ 55757);
/* harmony import */ var _core_url_combiner_url_combiner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/url-combiner/url-combiner */ 45663);
/* harmony import */ var _shared_btn_disabled_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/btn-disabled.directive */ 60456);
/* harmony import */ var _shared_error_error_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/error/error.component */ 79632);
/* harmony import */ var _shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/notifications/notifications.service */ 69472);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 14354);
























function FeedbackFormComponent_div_19_ds_error_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "ds-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("message", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](1, 1, "info.feedback.error.email.required"));
  }
}
function FeedbackFormComponent_div_19_ds_error_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "ds-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("message", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](1, 1, "info.feedback.error.email.required"));
  }
}
function FeedbackFormComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 15)(1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, FeedbackFormComponent_div_19_ds_error_2_Template, 2, 3, "ds-error", 17)(3, FeedbackFormComponent_div_19_ds_error_3_Template, 2, 3, "ds-error", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.feedbackForm.controls.email.errors == null ? null : ctx_r0.feedbackForm.controls.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.feedbackForm.controls.email.errors == null ? null : ctx_r0.feedbackForm.controls.email.errors.pattern);
  }
}
function FeedbackFormComponent_div_27_ds_error_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "ds-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("message", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](1, 1, "info.feedback.error.message.required"));
  }
}
function FeedbackFormComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 15)(1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, FeedbackFormComponent_div_27_ds_error_2_Template, 2, 3, "ds-error", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.feedbackForm.controls.message.errors == null ? null : ctx_r0.feedbackForm.controls.message.errors.required);
  }
}
/**
 * Component displaying the contents of the Feedback Statement
 */
class FeedbackFormComponent {
  constructor(_window, routeService, fb, notificationsService, translate, feedbackDataService, authService, router) {
    this._window = _window;
    this.routeService = routeService;
    this.fb = fb;
    this.notificationsService = notificationsService;
    this.translate = translate;
    this.feedbackDataService = feedbackDataService;
    this.authService = authService;
    this.router = router;
    /**
     * Form builder created used from the feedback from
     */
    this.feedbackForm = this.fb.group({
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
      page: ['']
    });
  }
  /**
   * On init check if user is logged in and use its email if so
   */
  ngOnInit() {
    this.authService.getAuthenticatedUserFromStore().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.take)(1)).subscribe(user => {
      if (user) {
        this.feedbackForm.patchValue({
          email: user.email
        });
      }
    });
    this.routeService.getPreviousUrl().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.take)(1)).subscribe(url => {
      if (!url) {
        url = (0,_app_routing_paths__WEBPACK_IMPORTED_MODULE_0__.getHomePageRoute)();
      }
      const relatedUrl = new _core_url_combiner_url_combiner__WEBPACK_IMPORTED_MODULE_6__.URLCombiner(this._window.nativeWindow.origin, url).toString();
      this.feedbackForm.patchValue({
        page: relatedUrl
      });
    });
  }
  /**
   * Function to create the feedback from form values
   */
  createFeedback() {
    const url = this.feedbackForm.value.page.replace(this._window.nativeWindow.origin, '');
    this.feedbackDataService.create(this.feedbackForm.value).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_5__.getFirstCompletedRemoteData)()).subscribe(response => {
      if (response.isSuccess) {
        this.notificationsService.success(this.translate.instant('info.feedback.create.success'));
        this.feedbackForm.reset();
        this.router.navigateByUrl(url);
      }
    });
  }
  static {
    this.ɵfac = function FeedbackFormComponent_Factory(t) {
      return new (t || FeedbackFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_services_window_service__WEBPACK_IMPORTED_MODULE_4__.NativeWindowService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_services_route_service__WEBPACK_IMPORTED_MODULE_3__.RouteService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_9__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_feedback_feedback_data_service__WEBPACK_IMPORTED_MODULE_2__.FeedbackDataService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
      type: FeedbackFormComponent,
      selectors: [["ds-base-feedback-form"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵStandaloneFeature"]],
      decls: 43,
      vars: 34,
      consts: [[1, "row", "row-offcanvas", "row-offcanvas-right"], [1, "col-xs-12", "col-sm-12", "col-md-9"], [1, "col", "p-0", 3, "ngSubmit", "formGroup"], [1, "row", "mt-3"], [1, "control-group", "col-sm-12"], ["for", "email", 1, "control-label"], ["id", "email", "name", "email", "type", "text", "value", "", "formControlName", "email", "autofocus", "autofocus", 1, "form-control", 3, "title"], [1, "text-muted"], ["class", "row", 4, "ngIf"], ["for", "comments", 1, "control-label"], ["id", "comments", "formControlName", "message", "name", "message", "cols", "20", "rows", "5", 1, "form-control"], ["for", "page", 1, "control-label"], ["id", "page", "readonly", "", "name", "page", "type", "text", "value", "", "formControlName", "page", "autofocus", "autofocus", 1, "form-control", 3, "title"], [1, "control-group", "col-sm-12", "text-right"], ["name", "submit", "type", "submit", 1, "btn", "btn-primary", 3, "dsBtnDisabled"], [1, "row"], [1, "col-sm-12", "alert"], [3, "message", 4, "ngIf"], [3, "message"]],
      template: function FeedbackFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](7, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "form", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngSubmit", function FeedbackFormComponent_Template_form_ngSubmit_8_listener() {
            return ctx.createFeedback();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "div", 3)(10, "div", 4)(11, "label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](13, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](14, "input", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](15, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "small", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](18, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](19, FeedbackFormComponent_div_19_Template, 4, 2, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "div", 3)(21, "div", 4)(22, "label", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](23);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](24, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "textarea", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](26, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](27, FeedbackFormComponent_div_27_Template, 3, 1, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "div", 3)(29, "div", 4)(30, "label", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](31);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](32, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](33, "input", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](34, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](35, "small", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](36);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](37, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](38, "div", 3)(39, "div", 13)(40, "button", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](41);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](42, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 14, "info.feedback.head"));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](7, 16, "info.feedback.info"));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx.feedbackForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](13, 18, "info.feedback.email-label"), "\u00A0");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](15, 20, "info.feedback.email_help"));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](18, 22, "info.feedback.email_help"));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.feedbackForm.controls.email.invalid && (ctx.feedbackForm.controls.email.dirty || ctx.feedbackForm.controls.email.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](24, 24, "info.feedback.comments"), ":\u00A0");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.feedbackForm.controls.message.invalid && (ctx.feedbackForm.controls.message.dirty || ctx.feedbackForm.controls.message.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](32, 26, "info.feedback.page-label"), "\u00A0");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](34, 28, "info.feedback.page_help"));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](37, 30, "info.feedback.page_help"));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("dsBtnDisabled", !ctx.feedbackForm.valid);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](42, 32, "info.feedback.send"));
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _shared_error_error_component__WEBPACK_IMPORTED_MODULE_8__.ErrorComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslatePipe, _shared_btn_disabled_directive__WEBPACK_IMPORTED_MODULE_7__.BtnDisabledDirective],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\nds-error[_ngcontent-%COMP%] {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZlZWRiYWNrLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQTtFQUNFLFVBQUE7QUFDRiIsImZpbGUiOiJmZWVkYmFjay1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi9cbmRzLWVycm9yIHtcbiAgY29sb3I6IHJlZDtcbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaW5mby9mZWVkYmFjay9mZWVkYmFjay1mb3JtL2ZlZWRiYWNrLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQTtFQUNFLFVBQUE7QUFDRjtBQUNBLG9vQkFBb29CIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi9cbmRzLWVycm9yIHtcbiAgY29sb3I6IHJlZDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 9721:
/*!*******************************************************************************!*\
  !*** ./src/app/info/feedback/feedback-form/themed-feedback-form.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemedFeedbackFormComponent: () => (/* binding */ ThemedFeedbackFormComponent)
/* harmony export */ });
/* harmony import */ var _shared_theme_support_themed_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/theme-support/themed.component */ 8886);
/* harmony import */ var _feedback_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feedback-form.component */ 37234);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);



const _c0 = ["*"];
function ThemedFeedbackFormComponent_ng_template_0_Template(rf, ctx) {}
/**
 * Themed wrapper for {@link FeedbackFormComponent}
 */
class ThemedFeedbackFormComponent extends _shared_theme_support_themed_component__WEBPACK_IMPORTED_MODULE_0__.ThemedComponent {
  getComponentName() {
    return 'FeedbackFormComponent';
  }
  importThemedComponent(themeName) {
    return __webpack_require__(5209)(`./${themeName}/app/info/feedback/feedback-form/feedback-form.component`);
  }
  importUnthemedComponent() {
    return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./feedback-form.component */ 37234));
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵThemedFeedbackFormComponent_BaseFactory;
      return function ThemedFeedbackFormComponent_Factory(t) {
        return (ɵThemedFeedbackFormComponent_BaseFactory || (ɵThemedFeedbackFormComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](ThemedFeedbackFormComponent)))(t || ThemedFeedbackFormComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ThemedFeedbackFormComponent,
      selectors: [["ds-feedback-form"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      ngContentSelectors: _c0,
      decls: 5,
      vars: 0,
      consts: [["vcr", ""], ["content", ""]],
      template: function ThemedFeedbackFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ThemedFeedbackFormComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
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

/***/ 14549:
/*!*****************************************************!*\
  !*** ./src/app/info/feedback/feedback.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeedbackComponent: () => (/* binding */ FeedbackComponent)
/* harmony export */ });
/* harmony import */ var _feedback_form_themed_feedback_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feedback-form/themed-feedback-form.component */ 9721);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 90310);


/**
 * Component displaying the Feedback Statement
 */
class FeedbackComponent {
  static {
    this.ɵfac = function FeedbackComponent_Factory(t) {
      return new (t || FeedbackComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: FeedbackComponent,
      selectors: [["ds-base-feedback"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 0,
      consts: [[1, "container"]],
      template: function FeedbackComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ds-feedback-form");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      },
      dependencies: [_feedback_form_themed_feedback_form_component__WEBPACK_IMPORTED_MODULE_0__.ThemedFeedbackFormComponent],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZlZWRiYWNrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBIiwiZmlsZSI6ImZlZWRiYWNrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi8iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaW5mby9mZWVkYmFjay9mZWVkYmFjay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBLG9qQkFBb2pCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi8iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 25232:
/*!************************************************************!*\
  !*** ./src/app/info/feedback/themed-feedback.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemedFeedbackComponent: () => (/* binding */ ThemedFeedbackComponent)
/* harmony export */ });
/* harmony import */ var _shared_theme_support_themed_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/theme-support/themed.component */ 8886);
/* harmony import */ var _feedback_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feedback.component */ 14549);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);



const _c0 = ["*"];
function ThemedFeedbackComponent_ng_template_0_Template(rf, ctx) {}
/**
 * Themed wrapper for FeedbackComponent
 */
class ThemedFeedbackComponent extends _shared_theme_support_themed_component__WEBPACK_IMPORTED_MODULE_0__.ThemedComponent {
  getComponentName() {
    return 'FeedbackComponent';
  }
  importThemedComponent(themeName) {
    return __webpack_require__(77971)(`./${themeName}/app/info/feedback/feedback.component`);
  }
  importUnthemedComponent() {
    return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./feedback.component */ 14549));
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵThemedFeedbackComponent_BaseFactory;
      return function ThemedFeedbackComponent_Factory(t) {
        return (ɵThemedFeedbackComponent_BaseFactory || (ɵThemedFeedbackComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](ThemedFeedbackComponent)))(t || ThemedFeedbackComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ThemedFeedbackComponent,
      selectors: [["ds-feedback"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      ngContentSelectors: _c0,
      decls: 5,
      vars: 0,
      consts: [["vcr", ""], ["content", ""]],
      template: function ThemedFeedbackComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ThemedFeedbackComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
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

/***/ 43857:
/*!******************************************************************!*\
  !*** ./src/app/info/help/help-content/help-content.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HelpContentComponent: () => (/* binding */ HelpContentComponent)
/* harmony export */ });
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 90310);


/**
 * Component displaying the contents of the Help Statement
 */
class HelpContentComponent {
  static {
    this.ɵfac = function HelpContentComponent_Factory(t) {
      return new (t || HelpContentComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HelpContentComponent,
      selectors: [["ds-help-content"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 826,
      vars: 0,
      consts: [["lang", "en"], ["charset", "UTF-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], [1, "toc"], ["href", "/info/help#introduction"], ["href", "/info/help#basic-search"], ["href", "/info/help#advanced-search"], ["href", "/info/help#search-operators"], ["href", "/info/help#filters"], ["href", "/info/help#filter-date"], ["href", "/info/help#filter-author"], ["href", "/info/help#filter-subject"], ["href", "/info/help#filter-collection"], ["href", "/info/help#filter-document-type"], ["href", "/info/help#filter-access-rights"], ["href", "/info/help#sorting"], ["href", "/info/help#boolean-operators"], ["href", "/info/help#phrases"], ["href", "/info/help#wildcards"], ["href", "/info/help#field-search"], ["href", "/info/help#facet-navigation"], ["href", "/info/help#saving-searches"], ["href", "/info/help#tips"], ["id", "introduction"], [1, "note"], ["id", "basic-search"], [1, "search-box"], ["type", "text", "placeholder", "Search DSpace", 2, "width", "80%", "padding", "8px"], [2, "padding", "8px", "background-color", "#1976D2", "color", "white", "border", "none", "border-radius", "3px"], [1, "example"], [1, "tip"], ["id", "advanced-search"], [2, "padding", "5px"], ["type", "text", "placeholder", "Enter search terms", 2, "width", "100%", "padding", "5px"], ["colspan", "3"], ["id", "search-operators"], ["id", "filters"], ["id", "filter-date"], ["id", "filter-author"], ["id", "filter-subject"], ["id", "filter-collection"], ["id", "filter-document-type"], ["id", "filter-access-rights"], ["id", "sorting"], ["id", "boolean-operators"], ["id", "phrases"], ["id", "wildcards"], ["id", "field-search"], ["id", "facet-navigation"], ["id", "saving-searches"], ["id", "tips"], [2, "margin-top", "50px", "padding", "20px", "background-color", "#f5f5f5", "border-radius", "5px", "text-align", "center"]],
      template: function HelpContentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0)(1, "head");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1)(3, "meta", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "title");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "DSpace 8 Search Features and Filters Guide");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "body")(7, "header")(8, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "DSpace 8 Search Features and Filters Guide");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "A comprehensive guide to effectively search and filter content in DSpace 8");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3)(13, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Table of Contents");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul")(16, "li")(17, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Introduction");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li")(20, "a", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Basic Search");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li")(23, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Advanced Search");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li")(26, "a", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Search Operators");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li")(29, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Search Filters");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "ul")(32, "li")(33, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Date Filters");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li")(36, "a", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Author Filters");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li")(39, "a", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Subject Filters");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li")(42, "a", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Collection Filters");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li")(45, "a", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Document Type Filters");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li")(48, "a", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Access Rights Filters");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li")(51, "a", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Sorting Results");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li")(54, "a", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Boolean Operators");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li")(57, "a", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Phrase Searching");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "li")(60, "a", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Wildcards and Truncation");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li")(63, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Field-Specific Searching");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li")(66, "a", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Facet Navigation");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li")(69, "a", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Saving Searches");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "li")(72, "a", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Search Tips and Best Practices");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "section", 23)(75, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Introduction");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "DSpace 8 provides powerful search capabilities to help you discover and access digital content efficiently. This guide covers all search features and filters available in DSpace 8, complete with examples to help you craft effective searches.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 24)(80, "p")(81, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Note:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " DSpace 8 uses Apache Solr as its search engine, offering fast and flexible search functionality with advanced features like faceted searching, real-time indexing, and robust text analysis.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "section", 25)(85, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Basic Search");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "The basic search in DSpace 8 allows you to quickly search across all metadata fields. The search box is typically located at the top of the DSpace interface.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "input", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "button", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Search");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 29)(94, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Basic Search Examples:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "ul")(97, "li")(98, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "climate change");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, " - Finds items containing both \"climate\" and \"change\" in any metadata field");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "li")(102, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "neural networks");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, " - Searches for items about neural networks");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "li")(106, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "COVID-19 vaccine");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, " - Retrieves items related to COVID-19 vaccines");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 30)(110, "p")(111, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Tip:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, " By default, basic search looks across all searchable fields including title, author, abstract, keywords, and full text (if available).");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "section", 31)(115, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Advanced Search");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Advanced search provides more control over your search by allowing you to specify fields, combine search terms with different operators, and apply multiple filters simultaneously.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 29)(120, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Advanced Search Form Example:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "table")(123, "tr")(124, "td")(125, "select", 32)(126, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Title");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Author");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Subject");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Abstract");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Series");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Identifier");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "td")(139, "select", 32)(140, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Contains");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "Equals");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "Starts with");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "Ends with");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "input", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "tr")(151, "td", 34)(152, "select", 32)(153, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "AND");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "OR");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "NOT");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "tr")(160, "td")(161, "select", 32)(162, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "Author");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "Title");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "Subject");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "Abstract");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "Series");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "Identifier");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "td")(175, "select", 32)(176, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "Contains");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "Equals");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "Starts with");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "Ends with");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](185, "input", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 29)(187, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "Advanced Search Examples:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "ul")(190, "li")(191, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "Title contains \"quantum computing\" AND Author equals \"Nielsen, Michael\"");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, " - Finds items with \"quantum computing\" in the title authored by Michael Nielsen");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "li")(195, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "Abstract contains \"climate change\" AND Subject contains \"policy\" AND Date issued is after \"2020\"");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, " - Retrieves recent climate change policy papers");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "li")(199, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "Title starts with \"Artificial\" AND Subject contains \"ethics\" NOT Author contains \"Smith\"");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, " - Finds items about artificial intelligence ethics not authored by anyone named Smith");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "section", 35)(203, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "Search Operators");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "DSpace 8 supports various operators to refine your search queries.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "table")(208, "tr")(209, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "Operator");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "Function");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, "Example");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "tr")(216, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "AND");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, "Finds items containing both terms");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, "blockchain AND finance");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "tr")(223, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "OR");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, "Finds items containing either term");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, "covid OR coronavirus");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "tr")(230, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, "NOT");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, "Excludes items containing the specified term");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "climate NOT policy");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "tr")(237, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, "+");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, "Term must be present");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "+quantum computing");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "tr")(244, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, "-");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, "Term must not be present");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, "artificial intelligence -ethics");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "tr")(251, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, "\" \"");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, "Searches for an exact phrase");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, "\"machine learning\"");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "tr")(258, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](261, "Wildcard for multiple characters");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](263, "neuro*");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "tr")(265, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266, "?");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, "Wildcard for a single character");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, "wom?n");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "tr")(272, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](273, "~n");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](275, "Fuzzy search with similarity (n is 0-2)");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](277, "algorithm~1");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "tr")(279, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](280, "~n");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, "Proximity search for phrases (n is number of words)");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284, "\"climate change\"~3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "div", 29)(286, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, "Search Operator Examples:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "ul")(289, "li")(290, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](291, "machine AND learning NOT supervised");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](292, " - Finds items about machine learning excluding those focused on supervised learning");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "li")(294, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](295, "\"big data\" OR \"data mining\"");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](296, " - Retrieves items containing either phrase");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "li")(298, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](299, "cell~ biology");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](300, " - Performs a fuzzy search for \"cell\" (matching \"cells\", \"sell\", etc.) along with \"biology\"");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "li")(302, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](303, "\"renewable energy\"~5");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](304, " - Finds items where \"renewable\" and \"energy\" appear within 5 words of each other");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "section", 36)(306, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](307, "Search Filters");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](309, "DSpace 8 offers various filters to narrow down search results based on specific criteria.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "section", 37)(311, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](312, "Date Filters");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](314, "Filter results by publication or submission date.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "div", 29)(316, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](317, "Date Filter Examples:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "ul")(319, "li")(320, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](321, "Date range: 2020-01-01 to 2023-12-31");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](322, " - Limits results to items published between 2020 and 2023");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "li")(324, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](325, "Last 5 years");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](326, " - Shows only items from the past five years");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "li")(328, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](329, "Before 2010");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](330, " - Displays items published before 2010");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "li")(332, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](333, "2022");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](334, " - Retrieves items from just the year 2022");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "div", 30)(336, "p")(337, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](338, "Tip:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](339, " You can also use date operators in advanced search with ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](341, "dateIssued:[2018-01-01 TO 2020-12-31]");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](342, " for more precise control.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "section", 38)(344, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](345, "Author Filters");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](347, "Narrow results by author or contributor.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](348, "div", 29)(349, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](350, "Author Filter Examples:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "ul")(352, "li")(353, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](354, "Smith, John");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](355, " - Shows only items authored by John Smith");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "li")(357, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](358, "Department of Physics");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](359, " - Filters results to items from the Physics Department");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](360, "li")(361, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](362, "Multiple selection: Smith, John + Johnson, Mary");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](363, " - Retrieves items authored by either John Smith or Mary Johnson");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](364, "li")(365, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](366, "ORCID: 0000-0002-1825-0097");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](367, " - Finds items by the author with this ORCID identifier");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](368, "section", 39)(369, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](370, "Subject Filters");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](372, "Filter results by subject keywords or classifications.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](373, "div", 29)(374, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](375, "Subject Filter Examples:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](376, "ul")(377, "li")(378, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](379, "Artificial Intelligence");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](380, " - Shows items tagged with this subject");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](381, "li")(382, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](383, "Multiple selection: Climate Change + Environmental Policy");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](384, " - Finds items tagged with either subject");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](385, "li")(386, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](387, "Computer Science > Machine Learning");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](388, " - Retrieves items within this hierarchical subject classification");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](389, "li")(390, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](391, "COVID-19");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](392, " - Displays items tagged with this specific subject");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](393, "section", 40)(394, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](395, "Collection Filters");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](396, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](397, "Limit results to specific collections or communities.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](398, "div", 29)(399, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](400, "Collection Filter Examples:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](401, "ul")(402, "li")(403, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](404, "Research Articles");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](405, " - Shows only items from the Research Articles collection");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](406, "li")(407, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](408, "Faculty of Science");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](409, " - Retrieves items from all collections within the Faculty of Science community");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](410, "li")(411, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](412, "Conference Proceedings");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](413, " - Limits results to items in the Conference Proceedings collection");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](414, "li")(415, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](416, "Multiple selection: Theses + Dissertations");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](417, " - Shows items from either collection");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](418, "section", 41)(419, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](420, "Document Type Filters");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](421, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](422, "Filter results by the type of resource.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](423, "div", 29)(424, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](425, "Document Type Filter Examples:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](426, "ul")(427, "li")(428, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](429, "Article");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](430, " - Shows only journal articles");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](431, "li")(432, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](433, "Thesis");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](434, " - Retrieves only theses");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](435, "li")(436, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](437, "Conference Paper");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](438, " - Limits results to conference papers");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](439, "li")(440, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](441, "Multiple selection: Book + Book Chapter");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](442, " - Shows either books or book chapters");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](443, "li")(444, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](445, "Dataset");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](446, " - Retrieves only research datasets");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](447, "section", 42)(448, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](449, "Access Rights Filters");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](450, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](451, "Filter results based on access permissions.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](452, "div", 29)(453, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](454, "Access Rights Filter Examples:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](455, "ul")(456, "li")(457, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](458, "Open Access");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](459, " - Shows only items with unrestricted access");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](460, "li")(461, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](462, "Restricted");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](463, " - Retrieves items with limited access");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](464, "li")(465, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](466, "Embargoed");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](467, " - Shows items currently under embargo");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](468, "li")(469, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](470, "Metadata Only");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](471, " - Displays items where only metadata is accessible");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](472, "section", 43)(473, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](474, "Sorting Results");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](475, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](476, "DSpace 8 allows you to sort search results based on various criteria.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](477, "div", 29)(478, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](479, "Sorting Options:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](480, "ul")(481, "li")(482, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](483, "Relevance");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](484, " - Default sort, items most closely matching your search query appear first");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](485, "li")(486, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](487, "Title (A-Z/Z-A)");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](488, " - Alphabetical sorting by title");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](489, "li")(490, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](491, "Date (newest/oldest)");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](492, " - Chronological sorting by publication date");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](493, "li")(494, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](495, "Author (A-Z/Z-A)");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](496, " - Alphabetical sorting by first author");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](497, "li")(498, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](499, "Issue Date (newest/oldest)");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](500, " - Sort by when item was issued");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](501, "li")(502, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](503, "Most downloads");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](504, " - Sort by popularity based on download count");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](505, "div", 30)(506, "p")(507, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](508, "Tip:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](509, " When looking for the most recent research, sort by \"Date (newest first)\" to see the latest publications at the top.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](510, "section", 44)(511, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](512, "Boolean Operators");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](513, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](514, "DSpace 8 supports Boolean operators (AND, OR, NOT) to create complex search queries.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](515, "div", 29)(516, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](517, "Boolean Operator Examples:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](518, "ul")(519, "li")(520, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](521, "(climate AND change) OR (global AND warming)");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](522, " - Finds items about either climate change or global warming");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](523, "li")(524, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](525, "cancer AND (treatment OR therapy) NOT surgery");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](526, " - Retrieves items about cancer treatments or therapies excluding surgical approaches");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](527, "li")(528, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](529, "renewable AND (solar OR wind OR hydro) NOT nuclear");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](530, " - Finds items about renewable energy sources excluding nuclear");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](531, "li")(532, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](533, "(COVID-19 OR coronavirus) AND (vaccine AND effectiveness)");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](534, " - Retrieves items about COVID-19 vaccine effectiveness");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](535, "div", 24)(536, "p")(537, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](538, "Note:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](539, " Boolean operators must be capitalized (AND, OR, NOT) to be recognized as operators. When not capitalized, they are treated as regular search terms.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](540, "section", 45)(541, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](542, "Phrase Searching");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](543, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](544, "Use quotation marks to search for exact phrases in DSpace 8.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](545, "div", 29)(546, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](547, "Phrase Search Examples:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](548, "ul")(549, "li")(550, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](551, "\"artificial intelligence\"");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](552, " - Finds items containing this exact phrase");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](553, "li")(554, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](555, "\"climate change\" AND \"public policy\"");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](556, " - Retrieves items containing both phrases");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](557, "li")(558, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](559, "\"quantum computing\" NOT \"quantum mechanics\"");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](560, " - Finds items about quantum computing that don't mention quantum mechanics");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](561, "li")(562, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](563, "\"Internet of Things\" AND \"security challenges\"");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](564, " - Retrieves items containing both phrases");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](565, "div", 30)(566, "p")(567, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](568, "Tip:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](569, " For phrases with common words, using quotation marks ensures more relevant results by searching for the exact phrase rather than individual terms.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](570, "section", 46)(571, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](572, "Wildcards and Truncation");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](573, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](574, "DSpace 8 supports wildcards for more flexible searching.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](575, "div", 29)(576, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](577, "Wildcard Examples:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](578, "ul")(579, "li")(580, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](581, "environ*");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](582, " - Matches environment, environmental, environments, etc.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](583, "li")(584, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](585, "wom?n");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](586, " - Matches woman and women");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](587, "li")(588, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](589, "colo*r");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](590, " - Matches color, colour, colorimeter, etc.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](591, "li")(592, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](593, "econom*");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](594, " - Matches economy, economic, economics, economical, etc.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](595, "li")(596, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](597, "neuro???ence");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](598, " - Matches neuroscience with any three characters in the middle");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](599, "div", 24)(600, "p")(601, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](602, "Note:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](603, " The asterisk (*) replaces zero or more characters, while the question mark (?) replaces exactly one character.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](604, "section", 47)(605, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](606, "Field-Specific Searching");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](607, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](608, "DSpace 8 allows you to search specific metadata fields using field prefixes.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](609, "div", 29)(610, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](611, "Field Search Examples:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](612, "ul")(613, "li")(614, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](615, "title:\"deep learning\"");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](616, " - Searches only in the title field for the phrase \"deep learning\"");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](617, "li")(618, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](619, "author:Smith AND subject:physics");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](620, " - Finds items authored by Smith in the field of physics");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](621, "li")(622, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](623, "abstract:climate AND dateIssued:[2020 TO 2023]");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](624, " - Retrieves items with \"climate\" in the abstract published between 2020 and 2023");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](625, "li")(626, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](627, "publisher:Elsevier AND title:neural");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](628, " - Finds items published by Elsevier with \"neural\" in the title");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](629, "li")(630, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](631, "subject:\"machine learning\" AND author:Johnson");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](632, " - Retrieves machine learning papers by author Johnson");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](633, "table")(634, "tr")(635, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](636, "Common Field Prefixes");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](637, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](638, "Description");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](639, "tr")(640, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](641, "title:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](642, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](643, "Searches in item titles");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](644, "tr")(645, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](646, "author:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](647, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](648, "Searches for specific authors");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](649, "tr")(650, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](651, "subject:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](652, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](653, "Searches in subject keywords");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](654, "tr")(655, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](656, "abstract:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](657, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](658, "Searches in item abstracts");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](659, "tr")(660, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](661, "dateIssued:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](662, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](663, "Searches by publication date");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](664, "tr")(665, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](666, "publisher:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](667, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](668, "Searches by publisher name");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](669, "tr")(670, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](671, "language:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](672, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](673, "Searches by content language");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](674, "tr")(675, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](676, "identifier:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](677, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](678, "Searches for specific identifiers (DOI, ISBN, etc.)");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](679, "section", 48)(680, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](681, "Facet Navigation");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](682, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](683, "DSpace 8 provides faceted navigation to refine search results dynamically.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](684, "div", 29)(685, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](686, "Facet Navigation Example:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](687, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](688, "After searching for \"climate change\", the facet navigation panel might show:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](689, "ul")(690, "li")(691, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](692, "Author facet:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](693, "ul")(694, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](695, "Smith, John (42)");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](696, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](697, "Johnson, Sarah (28)");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](698, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](699, "Williams, David (17)");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](700, "li")(701, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](702, "Subject facet:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](703, "ul")(704, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](705, "Environmental Science (63)");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](706, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](707, "Climate Policy (35)");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](708, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](709, "Global Warming (29)");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](710, "li")(711, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](712, "Date facet:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](713, "ul")(714, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](715, "2020-2023 (87)");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](716, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](717, "2015-2019 (64)");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](718, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](719, "2010-2014 (31)");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](720, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](721, "Clicking on \"Smith, John\" under Author would refine results to show only climate change items by John Smith.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](722, "div", 30)(723, "p")(724, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](725, "Tip:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](726, " You can combine multiple facets (e.g., select both an author and a date range) to narrow down results more precisely.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](727, "section", 49)(728, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](729, "Saving Searches");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](730, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](731, "DSpace 8 allows registered users to save searches for future use.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](732, "div", 29)(733, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](734, "How to Save a Search:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](735, "ol")(736, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](737, "Perform your search and apply desired filters");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](738, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](739, "Click the \"Save this search\" button (usually represented by a bookmark or star icon)");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](740, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](741, "Enter a name for your saved search");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](742, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](743, "Choose whether to receive email alerts for new matching items (optional)");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](744, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](745, "Click \"Save\"");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](746, "div", 29)(747, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](748, "Saved Search Examples:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](749, "ul")(750, "li")(751, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](752, "\"Recent AI Ethics Papers\"");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](753, " - Saved search for \"ethics\" AND \"artificial intelligence\" with date filter for last 2 years");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](754, "li")(755, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](756, "\"My Department's Publications\"");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](757, " - Saved search filtering by a specific department and recent years");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](758, "li")(759, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](760, "\"COVID Vaccine Research\"");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](761, " - Saved search for COVID-19 vaccine research with alerts for new content");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](762, "section", 50)(763, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](764, "Search Tips and Best Practices");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](765, "div", 30)(766, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](767, "General Search Tips:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](768, "ul")(769, "li")(770, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](771, "Start broad, then narrow:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](772, " Begin with broader search terms, then use filters to refine results");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](773, "li")(774, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](775, "Use synonyms:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](776, " Try different terms for the same concept (e.g., \"global warming\" OR \"climate change\")");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](777, "li")(778, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](779, "Check spelling:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](780, " DSpace 8 has limited spelling correction, so verify your spelling");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](781, "li")(782, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](783, "Use specific fields:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](784, " Search specific fields (title:, author:) for more precise results");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](785, "li")(786, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](787, "Combine approaches:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](788, " Use both filters and Boolean operators for complex searches");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](789, "li")(790, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](791, "Leverage facets:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](792, " After an initial search, use facets to drill down into results");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](793, "li")(794, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](795, "Utilize phrase searching:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](796, " Put multi-word concepts in quotation marks");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](797, "li")(798, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](799, "Save successful searches:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](800, " When you find an effective search strategy, save it for future use");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](801, "div", 29)(802, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](803, "Search Strategy Examples:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](804, "ul")(805, "li")(806, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](807, "For a literature review:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](808, " Start with broader topic terms, then use facets to focus on recent years, specific authors, or methodologies");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](809, "li")(810, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](811, "For finding specific research:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](812, " Use field-specific searching with author names and keywords in the title or abstract");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](813, "li")(814, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](815, "For interdisciplinary topics:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](816, " Use OR between related discipline terms (e.g., \"AI\" OR \"artificial intelligence\" AND \"ethics\" OR \"moral\")");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](817, "li")(818, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](819, "For comprehensive searches:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](820, " Use wildcards and synonyms to capture variations (e.g., econom* AND (develop* OR grow*))");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](821, "footer", 51)(822, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](823, "This comprehensive guide covers the search features and filters available in DSpace 8. For further assistance, please contact your repository administrator.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](824, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](825, "Last updated: May 19, 2025");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        }
      },
      dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateModule],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbHAtY29udGVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQSIsImZpbGUiOiJoZWxwLWNvbnRlbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqLyJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaW5mby9oZWxwL2hlbHAtY29udGVudC9oZWxwLWNvbnRlbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQSxna0JBQWdrQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovIl0sInNvdXJjZVJvb3QiOiIifQ== */", "body[_ngcontent-%COMP%] {\n            font-family: Arial, sans-serif;\n            line-height: 1.6;\n            color: #333;\n            max-width: 1200px;\n            margin: 0 auto;\n            padding: 20px;\n        }\n        header[_ngcontent-%COMP%] {\n            background-color: #1976D2;\n            color: white;\n            padding: 20px;\n            text-align: center;\n            border-radius: 5px;\n            margin-bottom: 30px;\n        }\n        h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%] {\n            color: #1976D2;\n        }\n        h2[_ngcontent-%COMP%] {\n            border-bottom: 2px solid #1976D2;\n            padding-bottom: 10px;\n            margin-top: 40px;\n        }\n        .example[_ngcontent-%COMP%] {\n            background-color: #f5f5f5;\n            border-left: 4px solid #1976D2;\n            padding: 15px;\n            margin: 20px 0;\n            border-radius: 0 5px 5px 0;\n        }\n        .example[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n            margin-top: 0;\n        }\n        .note[_ngcontent-%COMP%] {\n            background-color: #fff8e1;\n            border-left: 4px solid #ffc107;\n            padding: 15px;\n            margin: 20px 0;\n            border-radius: 0 5px 5px 0;\n        }\n        .tip[_ngcontent-%COMP%] {\n            background-color: #e8f5e9;\n            border-left: 4px solid #4caf50;\n            padding: 15px;\n            margin: 20px 0;\n            border-radius: 0 5px 5px 0;\n        }\n        code[_ngcontent-%COMP%] {\n            background-color: #f0f0f0;\n            padding: 2px 5px;\n            border-radius: 3px;\n            font-family: Consolas, Monaco, 'Courier New', monospace;\n        }\n        .search-box[_ngcontent-%COMP%] {\n            border: 1px solid #ccc;\n            padding: 10px;\n            border-radius: 5px;\n            margin: 15px 0;\n            background-color: #f9f9f9;\n        }\n        table[_ngcontent-%COMP%] {\n            border-collapse: collapse;\n            width: 100%;\n            margin: 20px 0;\n        }\n        th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n            border: 1px solid #ddd;\n            padding: 8px;\n            text-align: left;\n        }\n        th[_ngcontent-%COMP%] {\n            background-color: #f2f2f2;\n        }\n        tr[_ngcontent-%COMP%]:nth-child(even) {\n            background-color: #f9f9f9;\n        }\n        img[_ngcontent-%COMP%] {\n            max-width: 100%;\n            height: auto;\n            display: block;\n            margin: 20px auto;\n            border: 1px solid #ddd;\n            border-radius: 5px;\n        }\n        .toc[_ngcontent-%COMP%] {\n            background-color: #f5f5f5;\n            padding: 15px;\n            border-radius: 5px;\n            margin: 20px 0;\n        }\n        .toc[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n            list-style-type: none;\n            padding-left: 20px;\n        }\n        .toc[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n            text-decoration: none;\n            color: #1976D2;\n        }\n        .toc[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n            text-decoration: underline;\n        }"]
    });
  }
}

/***/ }),

/***/ 59053:
/*!*********************************************!*\
  !*** ./src/app/info/help/help.component.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HelpComponent: () => (/* binding */ HelpComponent)
/* harmony export */ });
/* harmony import */ var _help_content_help_content_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./help-content/help-content.component */ 43857);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 90310);


/**
 * Component displaying the Help Statement
 */
class HelpComponent {
  static {
    this.ɵfac = function HelpComponent_Factory(t) {
      return new (t || HelpComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: HelpComponent,
      selectors: [["ds-base-help"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 0,
      consts: [[1, "container"]],
      template: function HelpComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ds-help-content");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      },
      dependencies: [_help_content_help_content_component__WEBPACK_IMPORTED_MODULE_0__.HelpContentComponent],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUEiLCJmaWxlIjoiaGVscC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaW5mby9oZWxwL2hlbHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQSx3aUJBQXdpQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 21427:
/*!****************************************************!*\
  !*** ./src/app/info/help/themed-help.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemedHelpComponent: () => (/* binding */ ThemedHelpComponent)
/* harmony export */ });
/* harmony import */ var _shared_theme_support_themed_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/theme-support/themed.component */ 8886);
/* harmony import */ var _help_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./help.component */ 59053);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);



const _c0 = ["*"];
function ThemedHelpComponent_ng_template_0_Template(rf, ctx) {}
/**
 * Themed wrapper for HelpComponent
 */
class ThemedHelpComponent extends _shared_theme_support_themed_component__WEBPACK_IMPORTED_MODULE_0__.ThemedComponent {
  getComponentName() {
    return 'HelpComponent';
  }
  importThemedComponent(themeName) {
    return __webpack_require__(52787)(`./${themeName}/app/info/help/help.component`);
  }
  importUnthemedComponent() {
    return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./help.component */ 59053));
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵThemedHelpComponent_BaseFactory;
      return function ThemedHelpComponent_Factory(t) {
        return (ɵThemedHelpComponent_BaseFactory || (ɵThemedHelpComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](ThemedHelpComponent)))(t || ThemedHelpComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ThemedHelpComponent,
      selectors: [["ds-help"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      ngContentSelectors: _c0,
      decls: 5,
      vars: 0,
      consts: [["vcr", ""], ["content", ""]],
      template: function ThemedHelpComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ThemedHelpComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
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

/***/ 90:
/*!*************************************!*\
  !*** ./src/app/info/info-routes.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ROUTES: () => (/* binding */ ROUTES)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 88280);
/* harmony import */ var _core_breadcrumbs_i18n_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/breadcrumbs/i18n-breadcrumb.resolver */ 72059);
/* harmony import */ var _core_coar_notify_notify_info_notify_info_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/coar-notify/notify-info/notify-info.guard */ 39974);
/* harmony import */ var _core_feedback_feedback_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/feedback/feedback.guard */ 38088);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/empty.util */ 82777);
/* harmony import */ var _end_user_agreement_themed_end_user_agreement_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./end-user-agreement/themed-end-user-agreement.component */ 87643);
/* harmony import */ var _feedback_themed_feedback_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./feedback/themed-feedback.component */ 25232);
/* harmony import */ var _info_routing_paths__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./info-routing-paths */ 16805);
/* harmony import */ var _notify_info_notify_info_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./notify-info/notify-info.component */ 36741);
/* harmony import */ var _about_themed_about_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./about/themed-about.component */ 90363);
/* harmony import */ var _credits_themed_credits_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./credits/themed-credits.component */ 95525);
/* harmony import */ var _help_themed_help_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./help/themed-help.component */ 21427);
/* harmony import */ var _privacy_themed_privacy_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./privacy/themed-privacy.component */ 6817);













const ROUTES = [{
  path: _info_routing_paths__WEBPACK_IMPORTED_MODULE_7__.FEEDBACK_PATH,
  component: _feedback_themed_feedback_component__WEBPACK_IMPORTED_MODULE_6__.ThemedFeedbackComponent,
  resolve: {
    breadcrumb: _core_breadcrumbs_i18n_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_1__.i18nBreadcrumbResolver
  },
  data: {
    title: 'info.feedback.title',
    breadcrumbKey: 'info.feedback'
  },
  canActivate: [_core_feedback_feedback_guard__WEBPACK_IMPORTED_MODULE_3__.feedbackGuard]
}, _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.info.enableEndUserAgreement ? {
  path: _info_routing_paths__WEBPACK_IMPORTED_MODULE_7__.END_USER_AGREEMENT_PATH,
  component: _end_user_agreement_themed_end_user_agreement_component__WEBPACK_IMPORTED_MODULE_5__.ThemedEndUserAgreementComponent,
  resolve: {
    breadcrumb: _core_breadcrumbs_i18n_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_1__.i18nBreadcrumbResolver
  },
  data: {
    title: 'info.end-user-agreement.title',
    breadcrumbKey: 'info.end-user-agreement'
  }
} : undefined, _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.info.enableAboutStatement ? {
  path: _info_routing_paths__WEBPACK_IMPORTED_MODULE_7__.ABOUT_PATH,
  component: _about_themed_about_component__WEBPACK_IMPORTED_MODULE_9__.ThemedAboutComponent,
  resolve: {
    breadcrumb: _core_breadcrumbs_i18n_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_1__.i18nBreadcrumbResolver
  },
  data: {
    title: 'info.about.title',
    breadcrumbKey: 'info.about'
  }
} : undefined, _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.info.enableCreditsStatement ? {
  path: _info_routing_paths__WEBPACK_IMPORTED_MODULE_7__.CREDITS_PATH,
  component: _credits_themed_credits_component__WEBPACK_IMPORTED_MODULE_10__.ThemedCreditsComponent,
  resolve: {
    breadcrumb: _core_breadcrumbs_i18n_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_1__.i18nBreadcrumbResolver
  },
  data: {
    title: 'info.credits.title',
    breadcrumbKey: 'info.credits'
  }
} : undefined, _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.info.enableHelpStatement ? {
  path: _info_routing_paths__WEBPACK_IMPORTED_MODULE_7__.HELP_PATH,
  component: _help_themed_help_component__WEBPACK_IMPORTED_MODULE_11__.ThemedHelpComponent,
  resolve: {
    breadcrumb: _core_breadcrumbs_i18n_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_1__.i18nBreadcrumbResolver
  },
  data: {
    title: 'info.help.title',
    breadcrumbKey: 'info.help'
  }
} : undefined, _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.info.enablePrivacyStatement ? {
  path: _info_routing_paths__WEBPACK_IMPORTED_MODULE_7__.PRIVACY_PATH,
  component: _privacy_themed_privacy_component__WEBPACK_IMPORTED_MODULE_12__.ThemedPrivacyComponent,
  resolve: {
    breadcrumb: _core_breadcrumbs_i18n_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_1__.i18nBreadcrumbResolver
  },
  data: {
    title: 'info.privacy.title',
    breadcrumbKey: 'info.privacy'
  }
} : undefined, _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.info.enableCOARNotifySupport ? {
  path: _info_routing_paths__WEBPACK_IMPORTED_MODULE_7__.COAR_NOTIFY_SUPPORT,
  component: _notify_info_notify_info_component__WEBPACK_IMPORTED_MODULE_8__.NotifyInfoComponent,
  canActivate: [_core_coar_notify_notify_info_notify_info_guard__WEBPACK_IMPORTED_MODULE_2__.notifyInfoGuard],
  resolve: {
    breadcrumb: _core_breadcrumbs_i18n_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_1__.i18nBreadcrumbResolver
  },
  data: {
    title: 'info.coar-notify-support.title',
    breadcrumbKey: 'info.coar-notify-support'
  }
} : undefined].filter(route => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_4__.hasValue)(route));

/***/ }),

/***/ 36741:
/*!***********************************************************!*\
  !*** ./src/app/info/notify-info/notify-info.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotifyInfoComponent: () => (/* binding */ NotifyInfoComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6663);
/* harmony import */ var _core_coar_notify_notify_info_notify_info_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/coar-notify/notify-info/notify-info.service */ 42084);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);








const _c0 = a0 => ({
  ldnInboxUrl: a0
});
/**
 * Component for displaying COAR notification information.
 */
class NotifyInfoComponent {
  constructor(notifyInfoService) {
    this.notifyInfoService = notifyInfoService;
  }
  ngOnInit() {
    this.coarRestApiUrls$ = this.notifyInfoService.getCoarLdnLocalInboxUrls().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(urls => urls.map(url => `<a href="${url}" target="_blank">${url}</a>`).join(', ')));
  }
  static {
    this.ɵfac = function NotifyInfoComponent_Factory(t) {
      return new (t || NotifyInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_coar_notify_notify_info_notify_info_service__WEBPACK_IMPORTED_MODULE_0__.NotifyInfoService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: NotifyInfoComponent,
      selectors: [["ds-notify-info"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 21,
      vars: 26,
      consts: [[1, "container"], [3, "innerHTML"], ["routerLink", "/info/feedback"]],
      template: function NotifyInfoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "p", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "p", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](14, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](17, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "a", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](20, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 7, "coar-notify-support.title"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 9, "coar-notify-support-title.content"), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 11, "coar-notify-support.ldn-inbox.title"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](11, 15, "coar-notify-support.ldn-inbox.content", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](24, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](10, 13, ctx.coarRestApiUrls$))), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](14, 18, "coar-notify-support.message-moderation.title"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](17, 20, "coar-notify-support.message-moderation.content"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](20, 22, "coar-notify-support.message-moderation.feedback-form"));
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmeS1pbmZvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBIiwiZmlsZSI6Im5vdGlmeS1pbmZvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi8iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaW5mby9ub3RpZnktaW5mby9ub3RpZnktaW5mby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBLDRqQkFBNGpCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi8iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 10814:
/*!***************************************************************************!*\
  !*** ./src/app/info/privacy/privacy-content/privacy-content.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrivacyContentComponent: () => (/* binding */ PrivacyContentComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 90310);




const _c0 = () => ["/info/end-user-agreement"];
/**
 * Component displaying the contents of the Privacy Statement
 */
class PrivacyContentComponent {
  static {
    this.ɵfac = function PrivacyContentComponent_Factory(t) {
      return new (t || PrivacyContentComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PrivacyContentComponent,
      selectors: [["ds-privacy-content"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 139,
      vars: 8,
      consts: [["target", "_blank", "rel", "noopener noreferrer", 1, "link-contrast", 3, "routerLink"]],
      template: function PrivacyContentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p")(4, "em");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Last updated May 4, 2023");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Introduction");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "This policy describes the types of information we may collect from you or that you may provide when you visit this website (our \"Website\") and our practices for collecting, using, maintaining, protecting, and disclosing that information.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "This policy applies to information we collect:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul")(16, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "On this Website.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "In email, text, and other electronic messages between you and this Website.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "It does not apply to information collected by:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ul")(23, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "us offline or through any other means, including on any other website operated by Company or any third party; or");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "any third party, including through any application or content (including advertising) that may link to or be accessible from or on the Website.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Please read this policy carefully to understand our policies and practices regarding your information and how we will treat it. If you do not agree with our policies and practices, your choice is not to use our Website. By accessing or using this Website, you agree to this privacy policy. This policy may change from time to time. Your continued use of this Website after we make changes is deemed to be acceptance of those changes, so please check the policy periodically for updates.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Children under the age of 13");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Our Website is not intended for children under 13 years of age. No one under age 13 may provide any personal information to or on the Website. We do not knowingly collect personal information from children under 13. If you are under 13, do not use or provide any information on this Website or provide any information about yourself to us, including your name, address, telephone number, email address, or any screen name or username you may use. If we learn we have collected or received personal information from a child under 13 without verification of parental consent, we will delete that information.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Information we collect about you and how we collect it");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "We collect several types of information from and about users of our Website, including information:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "ul")(38, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "by which you may be personally identified, such as name, email address, telephone number, or any other identifier by which you may be contacted online or offline (\"personal information\"); and/or");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "about your internet connection, the equipment you use to access our Website and usage details.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "We collect this information:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "ul")(45, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "directly from you when you provide it to us.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "automatically as you navigate through the site. Information collected automatically may include usage details, IP addresses, and information collected through cookies, web beacons, and other tracking technologies; and/or");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "from third parties, for example, our business partners.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Information you provide to us");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "The information we collect on or through our Website may include:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "ul")(56, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Information that you provide by filling in forms on our Website. We may also ask you for information when you report a problem with our Website.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Records and copies of your correspondence (including email addresses), if you contact us.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Your responses to surveys that we might ask you to complete for research purpose.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Information we collect through automatic data collection technologies");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "As you navigate through and interact with our Website, we may use automatic data collection technologies to collect certain information about your equipment, browsing actions, and patterns, including:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "ul")(67, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Details of your visits to our Website, including traffic data, location data, logs, and other communication data and the resources that you access and use on the Website.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Information about your computer and internet connection, including your IP address, operating system, and browser type.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "The information we collect automatically is statistical data and does not include personal information, but we may maintain it or associate it with personal information we collect in other ways or receive from third parties. It helps us to improve our Website and to deliver a better and more personalized service, including by enabling us to:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "ul")(74, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Estimate our audience size and usage patterns.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Store information about your preferences, allowing us to customize our Website according to your individual interests.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Speed up your searches.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Recognize you when you return to our Website.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "The technologies we use for this automatic data collection may include:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "ul")(85, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Cookies (or browser cookies). A cookie is a small file placed on the hard drive of your computer. You may refuse to accept browser cookies by activating the appropriate setting on your browser. However, if you select this setting you may be unable to access certain parts of our Website. Unless you have adjusted your browser setting so that it will refuse cookies, our system will issue cookies when you direct your browser to our Website.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "How we use your information");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "We use information that we collect about you or that you provide to us, including any personal information:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "ul")(92, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "To present our Website and its contents to you.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "To provide you with information, products, or services that you request from us.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "To fulfill any other purpose for which you provide it.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "To carry out our obligations and enforce our rights arising from any contracts entered into between you and us, including for billing and collection.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "To notify you about changes to our Website or any products or services we offer or provide through it.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "In any other way we may describe when you provide the information.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "For any other purpose with your consent.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Disclosure of your information");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "We may disclose aggregated information about our users, and information that does not identify any individual, without restriction.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "We may disclose personal information that we collect or you provide as described in this privacy policy:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "ul")(113, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "To contractors, service providers, and other third parties we use to support our business and who are bound by contractual obligations to keep personal information confidential and use it only for the purposes for which we disclose it to them.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "To a buyer or other successor in the event of a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Company's assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which personal information held by Company about our Website users is among the assets transferred.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "To fulfill the purpose for which you provide it.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "For any other purpose disclosed by us when you provide the information.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "With your consent.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "We may also disclose your personal information:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "ul")(126, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "To comply with any court order, law, or legal process, including to respond to any government or regulatory request.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "To enforce or apply our ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "a", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "End User Agreement");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, " and other agreements, including for billing and collection purposes.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "If we believe disclosure is necessary or appropriate to protect the rights, property, or safety of the Company, our customers, or others.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Changes to our privacy policy");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "It is our policy to post any changes we make to our privacy policy on this page. The date the privacy policy was last revised is identified at the top of the page. You are responsible for periodically visiting our Website and this privacy policy to check for any changes.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 3, "info.privacy.head"));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 5, "repository.title"), " (\"Company\" or \"We\") respects your privacy and is committed to protecting it through our compliance with this policy.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](121);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaXZhY3ktY29udGVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQSIsImZpbGUiOiJwcml2YWN5LWNvbnRlbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqLyJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaW5mby9wcml2YWN5L3ByaXZhY3ktY29udGVudC9wcml2YWN5LWNvbnRlbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQSx3a0JBQXdrQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 72229:
/*!***************************************************!*\
  !*** ./src/app/info/privacy/privacy.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrivacyComponent: () => (/* binding */ PrivacyComponent)
/* harmony export */ });
/* harmony import */ var _privacy_content_privacy_content_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./privacy-content/privacy-content.component */ 10814);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 90310);


/**
 * Component displaying the Privacy Statement
 */
class PrivacyComponent {
  static {
    this.ɵfac = function PrivacyComponent_Factory(t) {
      return new (t || PrivacyComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: PrivacyComponent,
      selectors: [["ds-base-privacy"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 0,
      consts: [[1, "container"]],
      template: function PrivacyComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ds-privacy-content");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      },
      dependencies: [_privacy_content_privacy_content_component__WEBPACK_IMPORTED_MODULE_0__.PrivacyContentComponent],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaXZhY3kuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUEiLCJmaWxlIjoicHJpdmFjeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaW5mby9wcml2YWN5L3ByaXZhY3kuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQSxnakJBQWdqQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 6817:
/*!**********************************************************!*\
  !*** ./src/app/info/privacy/themed-privacy.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemedPrivacyComponent: () => (/* binding */ ThemedPrivacyComponent)
/* harmony export */ });
/* harmony import */ var _shared_theme_support_themed_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/theme-support/themed.component */ 8886);
/* harmony import */ var _privacy_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./privacy.component */ 72229);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);



const _c0 = ["*"];
function ThemedPrivacyComponent_ng_template_0_Template(rf, ctx) {}
/**
 * Themed wrapper for PrivacyComponent
 */
class ThemedPrivacyComponent extends _shared_theme_support_themed_component__WEBPACK_IMPORTED_MODULE_0__.ThemedComponent {
  getComponentName() {
    return 'PrivacyComponent';
  }
  importThemedComponent(themeName) {
    return __webpack_require__(56581)(`./${themeName}/app/info/privacy/privacy.component`);
  }
  importUnthemedComponent() {
    return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./privacy.component */ 72229));
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵThemedPrivacyComponent_BaseFactory;
      return function ThemedPrivacyComponent_Factory(t) {
        return (ɵThemedPrivacyComponent_BaseFactory || (ɵThemedPrivacyComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](ThemedPrivacyComponent)))(t || ThemedPrivacyComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ThemedPrivacyComponent,
      selectors: [["ds-privacy"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      ngContentSelectors: _c0,
      decls: 5,
      vars: 0,
      consts: [["vcr", ""], ["content", ""]],
      template: function ThemedPrivacyComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ThemedPrivacyComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
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

/***/ 64055:
/*!****************************************************************************************!*\
  !*** ./src/themes/ lazy ^\.\/.*\/app\/info\/about\/about\.component$ namespace object ***!
  \****************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./custom/app/info/about/about.component": [
		57092,
		"src_themes_custom_app_info_about_about_component_ts"
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
webpackAsyncContext.id = 64055;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 23169:
/*!********************************************************************************************!*\
  !*** ./src/themes/ lazy ^\.\/.*\/app\/info\/credits\/credits\.component$ namespace object ***!
  \********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./custom/app/info/credits/credits.component": [
		46516,
		"src_themes_custom_app_info_credits_credits_component_ts"
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
webpackAsyncContext.id = 23169;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 66519:
/*!**********************************************************************************************************************!*\
  !*** ./src/themes/ lazy ^\.\/.*\/app\/info\/end\-user\-agreement\/end\-user\-agreement\.component$ namespace object ***!
  \**********************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./custom/app/info/end-user-agreement/end-user-agreement.component": [
		67058,
		"src_themes_custom_app_info_end-user-agreement_end-user-agreement_component_ts"
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
webpackAsyncContext.id = 66519;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 5209:
/*!********************************************************************************************************************!*\
  !*** ./src/themes/ lazy ^\.\/.*\/app\/info\/feedback\/feedback\-form\/feedback\-form\.component$ namespace object ***!
  \********************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./custom/app/info/feedback/feedback-form/feedback-form.component": [
		30622,
		"src_themes_custom_app_info_feedback_feedback-form_feedback-form_component_ts"
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
webpackAsyncContext.id = 5209;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 77971:
/*!**********************************************************************************************!*\
  !*** ./src/themes/ lazy ^\.\/.*\/app\/info\/feedback\/feedback\.component$ namespace object ***!
  \**********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./custom/app/info/feedback/feedback.component": [
		94643,
		"src_themes_custom_app_info_feedback_feedback_component_ts"
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
webpackAsyncContext.id = 77971;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 52787:
/*!**************************************************************************************!*\
  !*** ./src/themes/ lazy ^\.\/.*\/app\/info\/help\/help\.component$ namespace object ***!
  \**************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./custom/app/info/help/help.component": [
		80976,
		"src_themes_custom_app_info_help_help_component_ts"
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
webpackAsyncContext.id = 52787;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 56581:
/*!********************************************************************************************!*\
  !*** ./src/themes/ lazy ^\.\/.*\/app\/info\/privacy\/privacy\.component$ namespace object ***!
  \********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./custom/app/info/privacy/privacy.component": [
		42444,
		"src_themes_custom_app_info_privacy_privacy_component_ts"
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
webpackAsyncContext.id = 56581;
module.exports = webpackAsyncContext;

/***/ })

}]);
//# sourceMappingURL=src_app_info_info-routes_ts.js.map