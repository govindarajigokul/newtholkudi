"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_app_quality-assurance-notifications-pages_notifications-pages-routes_ts"],{

/***/ 90839:
/*!************************************************************!*\
  !*** ./src/app/breadcrumbs/breadcrumb/breadcrumb.model.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 42784:
/*!*************************************************************************************!*\
  !*** ./src/app/quality-assurance-notifications-pages/notifications-pages-routes.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ROUTES: () => (/* binding */ ROUTES)
/* harmony export */ });
/* harmony import */ var _core_auth_authenticated_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/auth/authenticated.guard */ 49347);
/* harmony import */ var _core_breadcrumbs_i18n_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/breadcrumbs/i18n-breadcrumb.resolver */ 72059);
/* harmony import */ var _core_breadcrumbs_quality_assurance_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/breadcrumbs/quality-assurance-breadcrumb.resolver */ 99998);
/* harmony import */ var _notifications_pages_routing_paths__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notifications-pages-routing-paths */ 82575);
/* harmony import */ var _notifications_suggestion_targets_page_notifications_suggestion_targets_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notifications-suggestion-targets-page/notifications-suggestion-targets-page.component */ 30022);
/* harmony import */ var _notifications_suggestion_targets_page_notifications_suggestion_targets_page_resolver_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notifications-suggestion-targets-page/notifications-suggestion-targets-page-resolver.service */ 1647);
/* harmony import */ var _quality_assurance_events_page_quality_assurance_events_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./quality-assurance-events-page/quality-assurance-events-page.component */ 93362);
/* harmony import */ var _quality_assurance_events_page_quality_assurance_events_page_resolver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./quality-assurance-events-page/quality-assurance-events-page.resolver */ 83527);
/* harmony import */ var _quality_assurance_source_page_component_quality_assurance_source_data_resolver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./quality-assurance-source-page-component/quality-assurance-source-data.resolver */ 93084);
/* harmony import */ var _quality_assurance_source_page_component_quality_assurance_source_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./quality-assurance-source-page-component/quality-assurance-source-page.component */ 50884);
/* harmony import */ var _quality_assurance_source_page_component_quality_assurance_source_page_resolver_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./quality-assurance-source-page-component/quality-assurance-source-page-resolver.service */ 89473);
/* harmony import */ var _quality_assurance_topics_page_quality_assurance_topics_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./quality-assurance-topics-page/quality-assurance-topics-page.component */ 41466);
/* harmony import */ var _quality_assurance_topics_page_quality_assurance_topics_page_resolver_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./quality-assurance-topics-page/quality-assurance-topics-page-resolver.service */ 87499);













const ROUTES = [{
  canActivate: [_core_auth_authenticated_guard__WEBPACK_IMPORTED_MODULE_0__.authenticatedGuard],
  path: `${_notifications_pages_routing_paths__WEBPACK_IMPORTED_MODULE_3__.NOTIFICATIONS_RECITER_SUGGESTION_PATH}`,
  component: _notifications_suggestion_targets_page_notifications_suggestion_targets_page_component__WEBPACK_IMPORTED_MODULE_4__.NotificationsSuggestionTargetsPageComponent,
  pathMatch: 'full',
  resolve: {
    breadcrumb: _core_breadcrumbs_i18n_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_1__.i18nBreadcrumbResolver,
    reciterSuggestionTargetParams: _notifications_suggestion_targets_page_notifications_suggestion_targets_page_resolver_service__WEBPACK_IMPORTED_MODULE_5__.AdminNotificationsPublicationClaimPageResolver
  },
  data: {
    title: 'admin.notifications.recitersuggestion.page.title',
    breadcrumbKey: 'admin.notifications.recitersuggestion',
    showBreadcrumbsFluid: false
  }
}, {
  canActivate: [_core_auth_authenticated_guard__WEBPACK_IMPORTED_MODULE_0__.authenticatedGuard],
  path: `${_notifications_pages_routing_paths__WEBPACK_IMPORTED_MODULE_3__.QUALITY_ASSURANCE_EDIT_PATH}/:sourceId`,
  component: _quality_assurance_topics_page_quality_assurance_topics_page_component__WEBPACK_IMPORTED_MODULE_11__.QualityAssuranceTopicsPageComponent,
  pathMatch: 'full',
  resolve: {
    breadcrumb: _core_breadcrumbs_quality_assurance_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_2__.qualityAssuranceBreadcrumbResolver,
    openaireQualityAssuranceTopicsParams: _quality_assurance_topics_page_quality_assurance_topics_page_resolver_service__WEBPACK_IMPORTED_MODULE_12__.QualityAssuranceTopicsPageResolver
  },
  data: {
    title: 'admin.quality-assurance.page.title',
    breadcrumbKey: 'admin.quality-assurance',
    showBreadcrumbsFluid: false
  }
}, {
  canActivate: [_core_auth_authenticated_guard__WEBPACK_IMPORTED_MODULE_0__.authenticatedGuard],
  path: `${_notifications_pages_routing_paths__WEBPACK_IMPORTED_MODULE_3__.QUALITY_ASSURANCE_EDIT_PATH}/:sourceId/target/:targetId`,
  component: _quality_assurance_topics_page_quality_assurance_topics_page_component__WEBPACK_IMPORTED_MODULE_11__.QualityAssuranceTopicsPageComponent,
  pathMatch: 'full',
  resolve: {
    breadcrumb: _core_breadcrumbs_i18n_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_1__.i18nBreadcrumbResolver,
    openaireQualityAssuranceTopicsParams: _quality_assurance_topics_page_quality_assurance_topics_page_resolver_service__WEBPACK_IMPORTED_MODULE_12__.QualityAssuranceTopicsPageResolver
  },
  data: {
    title: 'admin.quality-assurance.page.title',
    breadcrumbKey: 'admin.quality-assurance',
    showBreadcrumbsFluid: false
  }
}, {
  canActivate: [_core_auth_authenticated_guard__WEBPACK_IMPORTED_MODULE_0__.authenticatedGuard],
  path: `${_notifications_pages_routing_paths__WEBPACK_IMPORTED_MODULE_3__.QUALITY_ASSURANCE_EDIT_PATH}`,
  component: _quality_assurance_source_page_component_quality_assurance_source_page_component__WEBPACK_IMPORTED_MODULE_9__.QualityAssuranceSourcePageComponent,
  pathMatch: 'full',
  resolve: {
    breadcrumb: _core_breadcrumbs_i18n_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_1__.i18nBreadcrumbResolver,
    openaireQualityAssuranceSourceParams: _quality_assurance_source_page_component_quality_assurance_source_page_resolver_service__WEBPACK_IMPORTED_MODULE_10__.QualityAssuranceSourcePageResolver,
    sourceData: _quality_assurance_source_page_component_quality_assurance_source_data_resolver__WEBPACK_IMPORTED_MODULE_8__.qualityAssuranceSourceDataResolver
  },
  data: {
    title: 'admin.notifications.source.breadcrumbs',
    breadcrumbKey: 'admin.notifications.source',
    showBreadcrumbsFluid: false
  }
}, {
  canActivate: [_core_auth_authenticated_guard__WEBPACK_IMPORTED_MODULE_0__.authenticatedGuard],
  path: `${_notifications_pages_routing_paths__WEBPACK_IMPORTED_MODULE_3__.QUALITY_ASSURANCE_EDIT_PATH}/:sourceId/:topicId`,
  component: _quality_assurance_events_page_quality_assurance_events_page_component__WEBPACK_IMPORTED_MODULE_6__.QualityAssuranceEventsPageComponent,
  pathMatch: 'full',
  resolve: {
    breadcrumb: _core_breadcrumbs_quality_assurance_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_2__.qualityAssuranceBreadcrumbResolver,
    openaireQualityAssuranceEventsParams: _quality_assurance_events_page_quality_assurance_events_page_resolver__WEBPACK_IMPORTED_MODULE_7__.qualityAssuranceEventsPageResolver
  },
  data: {
    title: 'admin.notifications.event.page.title',
    breadcrumbKey: 'admin.notifications.event',
    showBreadcrumbsFluid: false
  }
}];

/***/ }),

/***/ 82575:
/*!********************************************************************************************!*\
  !*** ./src/app/quality-assurance-notifications-pages/notifications-pages-routing-paths.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NOTIFICATIONS_RECITER_SUGGESTION_PATH: () => (/* binding */ NOTIFICATIONS_RECITER_SUGGESTION_PATH),
/* harmony export */   QUALITY_ASSURANCE_EDIT_PATH: () => (/* binding */ QUALITY_ASSURANCE_EDIT_PATH),
/* harmony export */   getQualityAssuranceEditRoute: () => (/* binding */ getQualityAssuranceEditRoute)
/* harmony export */ });
const QUALITY_ASSURANCE_EDIT_PATH = 'quality-assurance';
const NOTIFICATIONS_RECITER_SUGGESTION_PATH = 'suggestion-targets';
function getQualityAssuranceEditRoute() {
  return `/${QUALITY_ASSURANCE_EDIT_PATH}`;
}

/***/ }),

/***/ 30022:
/*!************************************************************************************************************************************************!*\
  !*** ./src/app/quality-assurance-notifications-pages/notifications-suggestion-targets-page/notifications-suggestion-targets-page.component.ts ***!
  \************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationsSuggestionTargetsPageComponent: () => (/* binding */ NotificationsSuggestionTargetsPageComponent)
/* harmony export */ });
/* harmony import */ var _notifications_suggestion_targets_publication_claim_publication_claim_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../notifications/suggestion-targets/publication-claim/publication-claim.component */ 29751);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 90310);


class NotificationsSuggestionTargetsPageComponent {
  static {
    this.ɵfac = function NotificationsSuggestionTargetsPageComponent_Factory(t) {
      return new (t || NotificationsSuggestionTargetsPageComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: NotificationsSuggestionTargetsPageComponent,
      selectors: [["ds-notifications-reciter-page"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 1,
      vars: 1,
      consts: [[3, "source"]],
      template: function NotificationsSuggestionTargetsPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ds-publication-claim", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("source", "openaire");
        }
      },
      dependencies: [_notifications_suggestion_targets_publication_claim_publication_claim_component__WEBPACK_IMPORTED_MODULE_0__.PublicationClaimComponent],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmaWNhdGlvbnMtc3VnZ2VzdGlvbi10YXJnZXRzLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUEiLCJmaWxlIjoibm90aWZpY2F0aW9ucy1zdWdnZXN0aW9uLXRhcmdldHMtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcXVhbGl0eS1hc3N1cmFuY2Utbm90aWZpY2F0aW9ucy1wYWdlcy9ub3RpZmljYXRpb25zLXN1Z2dlc3Rpb24tdGFyZ2V0cy1wYWdlL25vdGlmaWNhdGlvbnMtc3VnZ2VzdGlvbi10YXJnZXRzLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQSxnb0JBQWdvQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_quality-assurance-notifications-pages_notifications-pages-routes_ts.js.map