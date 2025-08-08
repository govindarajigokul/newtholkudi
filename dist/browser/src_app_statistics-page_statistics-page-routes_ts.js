(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_app_statistics-page_statistics-page-routes_ts"],{

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

/***/ 22269:
/*!***********************************************************!*\
  !*** ./src/app/community-page/community-page.resolver.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   COMMUNITY_PAGE_LINKS_TO_FOLLOW: () => (/* binding */ COMMUNITY_PAGE_LINKS_TO_FOLLOW),
/* harmony export */   communityPageResolver: () => (/* binding */ communityPageResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 99797);
/* harmony import */ var _core_data_community_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/data/community-data.service */ 46660);
/* harmony import */ var _core_resolving_resolver_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/resolving/resolver.actions */ 81225);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/shared/operators */ 55757);
/* harmony import */ var _shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/utils/follow-link-config.model */ 67600);






/**
 * The self links defined in this list are expected to be requested somewhere in the near future
 * Requesting them as embeds will limit the number of requests
 */
const COMMUNITY_PAGE_LINKS_TO_FOLLOW = [(0,_shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_3__.followLink)('logo'), (0,_shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_3__.followLink)('subcommunities'), (0,_shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_3__.followLink)('collections'), (0,_shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_3__.followLink)('parentCommunity')];
/**
 * Method for resolving a community based on the parameters in the current route
 * @param {ActivatedRouteSnapshot} route The current ActivatedRouteSnapshot
 * @param {RouterStateSnapshot} state The current RouterStateSnapshot
 * @param {CommunityDataService} communityService
 * @param {Store} store
 * @returns Observable<<RemoteData<Community>> Emits the found community based on the parameters in the current route,
 * or an error if something went wrong
 */
const communityPageResolver = (route, state, communityService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_core_data_community_data_service__WEBPACK_IMPORTED_MODULE_0__.CommunityDataService), store = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store)) => {
  const communityRD$ = communityService.findById(route.params.id, true, false, ...COMMUNITY_PAGE_LINKS_TO_FOLLOW).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_2__.getFirstCompletedRemoteData)());
  communityRD$.subscribe(communityRD => {
    store.dispatch(new _core_resolving_resolver_actions__WEBPACK_IMPORTED_MODULE_1__.ResolvedAction(state.url, communityRD.payload));
  });
  return communityRD$;
};

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

/***/ 89929:
/*!***************************************************************************************************************!*\
  !*** ./src/app/core/data/feature-authorization/feature-authorization-guard/statistics-administrator.guard.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   statisticsAdministratorGuard: () => (/* binding */ statisticsAdministratorGuard)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 17796);
/* harmony import */ var _feature_id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../feature-id */ 3970);
/* harmony import */ var _single_feature_authorization_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./single-feature-authorization.guard */ 89673);



/**
 * Prevent unauthorized activating and loading of routes when the current authenticated user doesn't have group
 * management rights
 */
const statisticsAdministratorGuard = (0,_single_feature_authorization_guard__WEBPACK_IMPORTED_MODULE_1__.singleFeatureAuthorizationGuard)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(_feature_id__WEBPACK_IMPORTED_MODULE_0__.FeatureID.CanViewUsageStatistics));

/***/ }),

/***/ 81225:
/*!****************************************************!*\
  !*** ./src/app/core/resolving/resolver.actions.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResolvedAction: () => (/* binding */ ResolvedAction),
/* harmony export */   ResolverActionTypes: () => (/* binding */ ResolverActionTypes)
/* harmony export */ });
/* harmony import */ var _shared_ngrx_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/ngrx/type */ 91000);

const ResolverActionTypes = {
  RESOLVED: (0,_shared_ngrx_type__WEBPACK_IMPORTED_MODULE_0__.type)('dspace/resolver/RESOLVED')
};
/**
 * An action that indicates a route object has been resolved.
 *
 * It isn't used in a reducer for now. Its purpose is to be able to be notified that an object
 * has been resolved in an effect.
 */
class ResolvedAction {
  constructor(url, dso) {
    this.type = ResolverActionTypes.RESOLVED;
    this.payload = {
      url,
      dso
    };
  }
}

/***/ }),

/***/ 26699:
/*!****************************************************************************************************!*\
  !*** ./src/app/statistics-page/collection-statistics-page/collection-statistics-page.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CollectionStatisticsPageComponent: () => (/* binding */ CollectionStatisticsPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var _shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/loading/themed-loading.component */ 82394);
/* harmony import */ var _shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/utils/var.directive */ 18226);
/* harmony import */ var _statistics_page_statistics_page_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../statistics-page/statistics-page.directive */ 60624);
/* harmony import */ var _statistics_table_statistics_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../statistics-table/statistics-table.component */ 58372);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 90310);









const _c0 = a0 => ({
  scope: a0
});
function CollectionStatisticsPageComponent_ng_container_1_h1_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h1", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const scope_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().ngVar;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("id", scope_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](2, 2, "statistics.header", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](5, _c0, ctx_r1.getName(scope_r1))), " ");
  }
}
function CollectionStatisticsPageComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CollectionStatisticsPageComponent_ng_container_1_h1_1_Template, 3, 7, "h1", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const scope_r1 = ctx.ngVar;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", scope_r1);
  }
}
function CollectionStatisticsPageComponent_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "ds-loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
}
function CollectionStatisticsPageComponent_ng_container_3_ng_container_2_ds_statistics_table_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "ds-statistics-table", 6);
  }
  if (rf & 2) {
    const report_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("m-2 ", report_r3.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("report", report_r3);
  }
}
function CollectionStatisticsPageComponent_ng_container_3_ng_container_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "statistics.page.no-data"), " ");
  }
}
function CollectionStatisticsPageComponent_ng_container_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CollectionStatisticsPageComponent_ng_container_3_ng_container_2_ds_statistics_table_1_Template, 1, 4, "ds-statistics-table", 5)(2, CollectionStatisticsPageComponent_ng_container_3_ng_container_2_div_2_Template, 3, 3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const reports_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().ngVar;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", reports_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 2, ctx_r1.hasData$) !== true);
  }
}
function CollectionStatisticsPageComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CollectionStatisticsPageComponent_ng_container_3_ng_container_1_Template, 2, 0, "ng-container", 4)(2, CollectionStatisticsPageComponent_ng_container_3_ng_container_2_Template, 4, 4, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const reports_r4 = ctx.ngVar;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !reports_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", reports_r4);
  }
}
/**
 * Component representing the statistics page for a collection.
 */
class CollectionStatisticsPageComponent extends _statistics_page_statistics_page_directive__WEBPACK_IMPORTED_MODULE_2__.StatisticsPageDirective {
  constructor() {
    super(...arguments);
    /**
     * The report types to show on this statistics page.
     */
    this.types = ['TotalVisits', 'TotalVisitsPerMonth', 'TopCountries', 'TopCities'];
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵCollectionStatisticsPageComponent_BaseFactory;
      return function CollectionStatisticsPageComponent_Factory(t) {
        return (ɵCollectionStatisticsPageComponent_BaseFactory || (ɵCollectionStatisticsPageComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetInheritedFactory"](CollectionStatisticsPageComponent)))(t || CollectionStatisticsPageComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: CollectionStatisticsPageComponent,
      selectors: [["ds-base-collection-statistics-page"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
      decls: 5,
      vars: 6,
      consts: [[1, "container"], [4, "ngVar"], ["class", "header", 3, "id", 4, "ngIf"], [1, "header", 3, "id"], [4, "ngIf"], [3, "report", "class", 4, "ngFor", "ngForOf"], [3, "report"]],
      template: function CollectionStatisticsPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CollectionStatisticsPageComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, CollectionStatisticsPageComponent_ng_container_3_Template, 3, 2, "ng-container", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngVar", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 2, ctx.scope$));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngVar", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 4, ctx.reports$));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe, _shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_1__.VarDirective, _shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_0__.ThemedLoadingComponent, _statistics_table_statistics_table_component__WEBPACK_IMPORTED_MODULE_3__.StatisticsTableComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGxlY3Rpb24tc3RhdGlzdGljcy1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBIiwiZmlsZSI6ImNvbGxlY3Rpb24tc3RhdGlzdGljcy1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi8iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc3RhdGlzdGljcy1wYWdlL2NvbGxlY3Rpb24tc3RhdGlzdGljcy1wYWdlL2NvbGxlY3Rpb24tc3RhdGlzdGljcy1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBO0FBQ0Esb21CQUFvbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqLyJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 97978:
/*!***********************************************************************************************************!*\
  !*** ./src/app/statistics-page/collection-statistics-page/themed-collection-statistics-page.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemedCollectionStatisticsPageComponent: () => (/* binding */ ThemedCollectionStatisticsPageComponent)
/* harmony export */ });
/* harmony import */ var _shared_theme_support_themed_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/theme-support/themed.component */ 8886);
/* harmony import */ var _collection_statistics_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./collection-statistics-page.component */ 26699);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);



const _c0 = ["*"];
function ThemedCollectionStatisticsPageComponent_ng_template_0_Template(rf, ctx) {}
/**
 * Themed wrapper for CollectionStatisticsPageComponent
 */
class ThemedCollectionStatisticsPageComponent extends _shared_theme_support_themed_component__WEBPACK_IMPORTED_MODULE_0__.ThemedComponent {
  getComponentName() {
    return 'CollectionStatisticsPageComponent';
  }
  importThemedComponent(themeName) {
    return __webpack_require__(61916)(`./${themeName}/app/statistics-page/collection-statistics-page/collection-statistics-page.component`);
  }
  importUnthemedComponent() {
    return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./collection-statistics-page.component */ 26699));
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵThemedCollectionStatisticsPageComponent_BaseFactory;
      return function ThemedCollectionStatisticsPageComponent_Factory(t) {
        return (ɵThemedCollectionStatisticsPageComponent_BaseFactory || (ɵThemedCollectionStatisticsPageComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](ThemedCollectionStatisticsPageComponent)))(t || ThemedCollectionStatisticsPageComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ThemedCollectionStatisticsPageComponent,
      selectors: [["ds-collection-statistics-page"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      ngContentSelectors: _c0,
      decls: 5,
      vars: 0,
      consts: [["vcr", ""], ["content", ""]],
      template: function ThemedCollectionStatisticsPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ThemedCollectionStatisticsPageComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
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

/***/ 66462:
/*!**************************************************************************************************!*\
  !*** ./src/app/statistics-page/community-statistics-page/community-statistics-page.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CommunityStatisticsPageComponent: () => (/* binding */ CommunityStatisticsPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var _shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/loading/themed-loading.component */ 82394);
/* harmony import */ var _shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/utils/var.directive */ 18226);
/* harmony import */ var _statistics_page_statistics_page_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../statistics-page/statistics-page.directive */ 60624);
/* harmony import */ var _statistics_table_statistics_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../statistics-table/statistics-table.component */ 58372);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 90310);









const _c0 = a0 => ({
  scope: a0
});
function CommunityStatisticsPageComponent_ng_container_1_h1_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h1", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const scope_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().ngVar;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("id", scope_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](2, 2, "statistics.header", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](5, _c0, ctx_r1.getName(scope_r1))), " ");
  }
}
function CommunityStatisticsPageComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CommunityStatisticsPageComponent_ng_container_1_h1_1_Template, 3, 7, "h1", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const scope_r1 = ctx.ngVar;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", scope_r1);
  }
}
function CommunityStatisticsPageComponent_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "ds-loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
}
function CommunityStatisticsPageComponent_ng_container_3_ng_container_2_ds_statistics_table_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "ds-statistics-table", 6);
  }
  if (rf & 2) {
    const report_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("m-2 ", report_r3.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("report", report_r3);
  }
}
function CommunityStatisticsPageComponent_ng_container_3_ng_container_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "statistics.page.no-data"), " ");
  }
}
function CommunityStatisticsPageComponent_ng_container_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CommunityStatisticsPageComponent_ng_container_3_ng_container_2_ds_statistics_table_1_Template, 1, 4, "ds-statistics-table", 5)(2, CommunityStatisticsPageComponent_ng_container_3_ng_container_2_div_2_Template, 3, 3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const reports_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().ngVar;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", reports_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 2, ctx_r1.hasData$) !== true);
  }
}
function CommunityStatisticsPageComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CommunityStatisticsPageComponent_ng_container_3_ng_container_1_Template, 2, 0, "ng-container", 4)(2, CommunityStatisticsPageComponent_ng_container_3_ng_container_2_Template, 4, 4, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const reports_r4 = ctx.ngVar;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !reports_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", reports_r4);
  }
}
/**
 * Component representing the statistics page for a community.
 */
class CommunityStatisticsPageComponent extends _statistics_page_statistics_page_directive__WEBPACK_IMPORTED_MODULE_2__.StatisticsPageDirective {
  constructor() {
    super(...arguments);
    /**
     * The report types to show on this statistics page.
     */
    this.types = ['TotalVisits', 'TotalVisitsPerMonth', 'TopCountries', 'TopCities'];
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵCommunityStatisticsPageComponent_BaseFactory;
      return function CommunityStatisticsPageComponent_Factory(t) {
        return (ɵCommunityStatisticsPageComponent_BaseFactory || (ɵCommunityStatisticsPageComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetInheritedFactory"](CommunityStatisticsPageComponent)))(t || CommunityStatisticsPageComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: CommunityStatisticsPageComponent,
      selectors: [["ds-base-community-statistics-page"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
      decls: 5,
      vars: 6,
      consts: [[1, "container"], [4, "ngVar"], ["class", "header", 3, "id", 4, "ngIf"], [1, "header", 3, "id"], [4, "ngIf"], [3, "report", "class", 4, "ngFor", "ngForOf"], [3, "report"]],
      template: function CommunityStatisticsPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CommunityStatisticsPageComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, CommunityStatisticsPageComponent_ng_container_3_Template, 3, 2, "ng-container", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngVar", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 2, ctx.scope$));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngVar", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 4, ctx.reports$));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe, _shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_1__.VarDirective, _shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_0__.ThemedLoadingComponent, _statistics_table_statistics_table_component__WEBPACK_IMPORTED_MODULE_3__.StatisticsTableComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW11bml0eS1zdGF0aXN0aWNzLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUEiLCJmaWxlIjoiY29tbXVuaXR5LXN0YXRpc3RpY3MtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc3RhdGlzdGljcy1wYWdlL2NvbW11bml0eS1zdGF0aXN0aWNzLXBhZ2UvY29tbXVuaXR5LXN0YXRpc3RpY3MtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBLGdtQkFBZ21CIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi8iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 18334:
/*!*********************************************************************************************************!*\
  !*** ./src/app/statistics-page/community-statistics-page/themed-community-statistics-page.component.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemedCommunityStatisticsPageComponent: () => (/* binding */ ThemedCommunityStatisticsPageComponent)
/* harmony export */ });
/* harmony import */ var _shared_theme_support_themed_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/theme-support/themed.component */ 8886);
/* harmony import */ var _community_statistics_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./community-statistics-page.component */ 66462);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);



const _c0 = ["*"];
function ThemedCommunityStatisticsPageComponent_ng_template_0_Template(rf, ctx) {}
/**
 * Themed wrapper for CommunityStatisticsPageComponent
 */
class ThemedCommunityStatisticsPageComponent extends _shared_theme_support_themed_component__WEBPACK_IMPORTED_MODULE_0__.ThemedComponent {
  getComponentName() {
    return 'CommunityStatisticsPageComponent';
  }
  importThemedComponent(themeName) {
    return __webpack_require__(34888)(`./${themeName}/app/statistics-page/community-statistics-page/community-statistics-page.component`);
  }
  importUnthemedComponent() {
    return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./community-statistics-page.component */ 66462));
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵThemedCommunityStatisticsPageComponent_BaseFactory;
      return function ThemedCommunityStatisticsPageComponent_Factory(t) {
        return (ɵThemedCommunityStatisticsPageComponent_BaseFactory || (ɵThemedCommunityStatisticsPageComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](ThemedCommunityStatisticsPageComponent)))(t || ThemedCommunityStatisticsPageComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ThemedCommunityStatisticsPageComponent,
      selectors: [["ds-community-statistics-page"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      ngContentSelectors: _c0,
      decls: 5,
      vars: 0,
      consts: [["vcr", ""], ["content", ""]],
      template: function ThemedCommunityStatisticsPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ThemedCommunityStatisticsPageComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
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

/***/ 63782:
/*!****************************************************************************************!*\
  !*** ./src/app/statistics-page/item-statistics-page/item-statistics-page.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ItemStatisticsPageComponent: () => (/* binding */ ItemStatisticsPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var _shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/loading/themed-loading.component */ 82394);
/* harmony import */ var _shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/utils/var.directive */ 18226);
/* harmony import */ var _statistics_page_statistics_page_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../statistics-page/statistics-page.directive */ 60624);
/* harmony import */ var _statistics_table_statistics_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../statistics-table/statistics-table.component */ 58372);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 90310);









const _c0 = a0 => ({
  scope: a0
});
function ItemStatisticsPageComponent_ng_container_1_h1_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h1", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const scope_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().ngVar;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("id", scope_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](2, 2, "statistics.header", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](5, _c0, ctx_r1.getName(scope_r1))), " ");
  }
}
function ItemStatisticsPageComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ItemStatisticsPageComponent_ng_container_1_h1_1_Template, 3, 7, "h1", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const scope_r1 = ctx.ngVar;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", scope_r1);
  }
}
function ItemStatisticsPageComponent_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "ds-loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
}
function ItemStatisticsPageComponent_ng_container_3_ng_container_2_ds_statistics_table_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "ds-statistics-table", 6);
  }
  if (rf & 2) {
    const report_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("m-2 ", report_r3.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("report", report_r3);
  }
}
function ItemStatisticsPageComponent_ng_container_3_ng_container_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "statistics.page.no-data"), " ");
  }
}
function ItemStatisticsPageComponent_ng_container_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ItemStatisticsPageComponent_ng_container_3_ng_container_2_ds_statistics_table_1_Template, 1, 4, "ds-statistics-table", 5)(2, ItemStatisticsPageComponent_ng_container_3_ng_container_2_div_2_Template, 3, 3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const reports_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().ngVar;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", reports_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 2, ctx_r1.hasData$) !== true);
  }
}
function ItemStatisticsPageComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ItemStatisticsPageComponent_ng_container_3_ng_container_1_Template, 2, 0, "ng-container", 4)(2, ItemStatisticsPageComponent_ng_container_3_ng_container_2_Template, 4, 4, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const reports_r4 = ctx.ngVar;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !reports_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", reports_r4);
  }
}
/**
 * Component representing the statistics page for an item.
 */
class ItemStatisticsPageComponent extends _statistics_page_statistics_page_directive__WEBPACK_IMPORTED_MODULE_2__.StatisticsPageDirective {
  constructor() {
    super(...arguments);
    /**
     * The report types to show on this statistics page.
     */
    this.types = ['TotalVisits', 'TotalVisitsPerMonth', 'TotalDownloads', 'TopCountries', 'TopCities'];
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵItemStatisticsPageComponent_BaseFactory;
      return function ItemStatisticsPageComponent_Factory(t) {
        return (ɵItemStatisticsPageComponent_BaseFactory || (ɵItemStatisticsPageComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetInheritedFactory"](ItemStatisticsPageComponent)))(t || ItemStatisticsPageComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: ItemStatisticsPageComponent,
      selectors: [["ds-base-item-statistics-page"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
      decls: 5,
      vars: 6,
      consts: [[1, "container"], [4, "ngVar"], ["class", "header", 3, "id", 4, "ngIf"], [1, "header", 3, "id"], [4, "ngIf"], [3, "report", "class", 4, "ngFor", "ngForOf"], [3, "report"]],
      template: function ItemStatisticsPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ItemStatisticsPageComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ItemStatisticsPageComponent_ng_container_3_Template, 3, 2, "ng-container", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngVar", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 2, ctx.scope$));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngVar", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 4, ctx.reports$));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe, _shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_1__.VarDirective, _shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_0__.ThemedLoadingComponent, _statistics_table_statistics_table_component__WEBPACK_IMPORTED_MODULE_3__.StatisticsTableComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW0tc3RhdGlzdGljcy1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBIiwiZmlsZSI6Iml0ZW0tc3RhdGlzdGljcy1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi8iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc3RhdGlzdGljcy1wYWdlL2l0ZW0tc3RhdGlzdGljcy1wYWdlL2l0ZW0tc3RhdGlzdGljcy1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBO0FBQ0Esb2xCQUFvbEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqLyJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 48774:
/*!***********************************************************************************************!*\
  !*** ./src/app/statistics-page/item-statistics-page/themed-item-statistics-page.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemedItemStatisticsPageComponent: () => (/* binding */ ThemedItemStatisticsPageComponent)
/* harmony export */ });
/* harmony import */ var _shared_theme_support_themed_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/theme-support/themed.component */ 8886);
/* harmony import */ var _item_statistics_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item-statistics-page.component */ 63782);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);



const _c0 = ["*"];
function ThemedItemStatisticsPageComponent_ng_template_0_Template(rf, ctx) {}
/**
 * Themed wrapper for ItemStatisticsPageComponent
 */
class ThemedItemStatisticsPageComponent extends _shared_theme_support_themed_component__WEBPACK_IMPORTED_MODULE_0__.ThemedComponent {
  getComponentName() {
    return 'ItemStatisticsPageComponent';
  }
  importThemedComponent(themeName) {
    return __webpack_require__(69564)(`./${themeName}/app/statistics-page/item-statistics-page/item-statistics-page.component`);
  }
  importUnthemedComponent() {
    return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./item-statistics-page.component */ 63782));
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵThemedItemStatisticsPageComponent_BaseFactory;
      return function ThemedItemStatisticsPageComponent_Factory(t) {
        return (ɵThemedItemStatisticsPageComponent_BaseFactory || (ɵThemedItemStatisticsPageComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](ThemedItemStatisticsPageComponent)))(t || ThemedItemStatisticsPageComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ThemedItemStatisticsPageComponent,
      selectors: [["ds-item-statistics-page"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      ngContentSelectors: _c0,
      decls: 5,
      vars: 0,
      consts: [["vcr", ""], ["content", ""]],
      template: function ThemedItemStatisticsPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ThemedItemStatisticsPageComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
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

/***/ 77466:
/*!****************************************************************************************!*\
  !*** ./src/app/statistics-page/site-statistics-page/site-statistics-page.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SiteStatisticsPageComponent: () => (/* binding */ SiteStatisticsPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 84975);
/* harmony import */ var _core_data_site_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/data/site-data.service */ 5090);
/* harmony import */ var _shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/loading/themed-loading.component */ 82394);
/* harmony import */ var _shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/utils/var.directive */ 18226);
/* harmony import */ var _statistics_page_statistics_page_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../statistics-page/statistics-page.directive */ 60624);
/* harmony import */ var _statistics_table_statistics_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../statistics-table/statistics-table.component */ 58372);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 90310);












const _c0 = a0 => ({
  scope: a0
});
function SiteStatisticsPageComponent_ng_container_1_h1_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h1", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const scope_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().ngVar;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("id", scope_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](2, 2, "statistics.header", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](5, _c0, ctx_r1.getName(scope_r1))), " ");
  }
}
function SiteStatisticsPageComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SiteStatisticsPageComponent_ng_container_1_h1_1_Template, 3, 7, "h1", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const scope_r1 = ctx.ngVar;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", scope_r1);
  }
}
function SiteStatisticsPageComponent_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "ds-loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
}
function SiteStatisticsPageComponent_ng_container_3_ng_container_2_ds_statistics_table_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "ds-statistics-table", 6);
  }
  if (rf & 2) {
    const report_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("m-2 ", report_r3.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("report", report_r3);
  }
}
function SiteStatisticsPageComponent_ng_container_3_ng_container_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "statistics.page.no-data"), " ");
  }
}
function SiteStatisticsPageComponent_ng_container_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SiteStatisticsPageComponent_ng_container_3_ng_container_2_ds_statistics_table_1_Template, 1, 4, "ds-statistics-table", 5)(2, SiteStatisticsPageComponent_ng_container_3_ng_container_2_div_2_Template, 3, 3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const reports_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().ngVar;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", reports_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 2, ctx_r1.hasData$) !== true);
  }
}
function SiteStatisticsPageComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SiteStatisticsPageComponent_ng_container_3_ng_container_1_Template, 2, 0, "ng-container", 4)(2, SiteStatisticsPageComponent_ng_container_3_ng_container_2_Template, 4, 4, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const reports_r4 = ctx.ngVar;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !reports_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", reports_r4);
  }
}
/**
 * Component representing the site-wide statistics page.
 */
class SiteStatisticsPageComponent extends _statistics_page_statistics_page_directive__WEBPACK_IMPORTED_MODULE_3__.StatisticsPageDirective {
  constructor(siteService) {
    super();
    this.siteService = siteService;
    /**
     * The report types to show on this statistics page.
     */
    this.types = ['TotalVisits'];
  }
  getScope$() {
    return this.siteService.find();
  }
  getReports$() {
    return this.scope$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(scope => this.usageReportService.searchStatistics(scope._links.self.href, 0, 10)));
  }
  static {
    this.ɵfac = function SiteStatisticsPageComponent_Factory(t) {
      return new (t || SiteStatisticsPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_data_site_data_service__WEBPACK_IMPORTED_MODULE_0__.SiteDataService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: SiteStatisticsPageComponent,
      selectors: [["ds-base-site-statistics-page"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵStandaloneFeature"]],
      decls: 5,
      vars: 6,
      consts: [[1, "container"], [4, "ngVar"], ["class", "header", 3, "id", 4, "ngIf"], [1, "header", 3, "id"], [4, "ngIf"], [3, "report", "class", 4, "ngFor", "ngForOf"], [3, "report"]],
      template: function SiteStatisticsPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SiteStatisticsPageComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, SiteStatisticsPageComponent_ng_container_3_Template, 3, 2, "ng-container", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngVar", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 2, ctx.scope$));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngVar", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 4, ctx.reports$));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe, _shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_2__.VarDirective, _shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_1__.ThemedLoadingComponent, _statistics_table_statistics_table_component__WEBPACK_IMPORTED_MODULE_4__.StatisticsTableComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpdGUtc3RhdGlzdGljcy1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBIiwiZmlsZSI6InNpdGUtc3RhdGlzdGljcy1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi8iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc3RhdGlzdGljcy1wYWdlL3NpdGUtc3RhdGlzdGljcy1wYWdlL3NpdGUtc3RhdGlzdGljcy1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBO0FBQ0Esb2xCQUFvbEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqLyJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 53138:
/*!***********************************************************************************************!*\
  !*** ./src/app/statistics-page/site-statistics-page/themed-site-statistics-page.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemedSiteStatisticsPageComponent: () => (/* binding */ ThemedSiteStatisticsPageComponent)
/* harmony export */ });
/* harmony import */ var _shared_theme_support_themed_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/theme-support/themed.component */ 8886);
/* harmony import */ var _site_statistics_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./site-statistics-page.component */ 77466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);



const _c0 = ["*"];
function ThemedSiteStatisticsPageComponent_ng_template_0_Template(rf, ctx) {}
/**
 * Themed wrapper for SiteStatisticsPageComponent
 */
class ThemedSiteStatisticsPageComponent extends _shared_theme_support_themed_component__WEBPACK_IMPORTED_MODULE_0__.ThemedComponent {
  getComponentName() {
    return 'SiteStatisticsPageComponent';
  }
  importThemedComponent(themeName) {
    return __webpack_require__(83952)(`./${themeName}/app/statistics-page/site-statistics-page/site-statistics-page.component`);
  }
  importUnthemedComponent() {
    return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./site-statistics-page.component */ 77466));
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵThemedSiteStatisticsPageComponent_BaseFactory;
      return function ThemedSiteStatisticsPageComponent_Factory(t) {
        return (ɵThemedSiteStatisticsPageComponent_BaseFactory || (ɵThemedSiteStatisticsPageComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](ThemedSiteStatisticsPageComponent)))(t || ThemedSiteStatisticsPageComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ThemedSiteStatisticsPageComponent,
      selectors: [["ds-site-statistics-page"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      ngContentSelectors: _c0,
      decls: 5,
      vars: 0,
      consts: [["vcr", ""], ["content", ""]],
      template: function ThemedSiteStatisticsPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ThemedSiteStatisticsPageComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
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

/***/ 47896:
/*!***********************************************************!*\
  !*** ./src/app/statistics-page/statistics-page-routes.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ROUTES: () => (/* binding */ ROUTES)
/* harmony export */ });
/* harmony import */ var _collection_page_collection_page_resolver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../collection-page/collection-page.resolver */ 54809);
/* harmony import */ var _community_page_community_page_resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../community-page/community-page.resolver */ 22269);
/* harmony import */ var _core_breadcrumbs_i18n_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/breadcrumbs/i18n-breadcrumb.resolver */ 72059);
/* harmony import */ var _core_data_feature_authorization_feature_authorization_guard_statistics_administrator_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/data/feature-authorization/feature-authorization-guard/statistics-administrator.guard */ 89929);
/* harmony import */ var _item_page_item_resolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../item-page/item.resolver */ 56273);
/* harmony import */ var _collection_statistics_page_themed_collection_statistics_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./collection-statistics-page/themed-collection-statistics-page.component */ 97978);
/* harmony import */ var _community_statistics_page_themed_community_statistics_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./community-statistics-page/themed-community-statistics-page.component */ 18334);
/* harmony import */ var _item_statistics_page_themed_item_statistics_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./item-statistics-page/themed-item-statistics-page.component */ 48774);
/* harmony import */ var _site_statistics_page_themed_site_statistics_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./site-statistics-page/themed-site-statistics-page.component */ 53138);









const ROUTES = [{
  path: '',
  resolve: {
    breadcrumb: _core_breadcrumbs_i18n_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_2__.i18nBreadcrumbResolver
  },
  data: {
    title: 'statistics.title',
    breadcrumbKey: 'statistics'
  },
  children: [{
    path: '',
    component: _site_statistics_page_themed_site_statistics_page_component__WEBPACK_IMPORTED_MODULE_8__.ThemedSiteStatisticsPageComponent
  }],
  canActivate: [_core_data_feature_authorization_feature_authorization_guard_statistics_administrator_guard__WEBPACK_IMPORTED_MODULE_3__.statisticsAdministratorGuard]
}, {
  path: `items/:id`,
  resolve: {
    scope: _item_page_item_resolver__WEBPACK_IMPORTED_MODULE_4__.itemResolver,
    breadcrumb: _core_breadcrumbs_i18n_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_2__.i18nBreadcrumbResolver
  },
  data: {
    title: 'statistics.title',
    breadcrumbKey: 'statistics'
  },
  component: _item_statistics_page_themed_item_statistics_page_component__WEBPACK_IMPORTED_MODULE_7__.ThemedItemStatisticsPageComponent,
  canActivate: [_core_data_feature_authorization_feature_authorization_guard_statistics_administrator_guard__WEBPACK_IMPORTED_MODULE_3__.statisticsAdministratorGuard]
}, {
  path: `collections/:id`,
  resolve: {
    scope: _collection_page_collection_page_resolver__WEBPACK_IMPORTED_MODULE_0__.collectionPageResolver,
    breadcrumb: _core_breadcrumbs_i18n_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_2__.i18nBreadcrumbResolver
  },
  data: {
    title: 'statistics.title',
    breadcrumbKey: 'statistics'
  },
  component: _collection_statistics_page_themed_collection_statistics_page_component__WEBPACK_IMPORTED_MODULE_5__.ThemedCollectionStatisticsPageComponent,
  canActivate: [_core_data_feature_authorization_feature_authorization_guard_statistics_administrator_guard__WEBPACK_IMPORTED_MODULE_3__.statisticsAdministratorGuard]
}, {
  path: `communities/:id`,
  resolve: {
    scope: _community_page_community_page_resolver__WEBPACK_IMPORTED_MODULE_1__.communityPageResolver,
    breadcrumb: _core_breadcrumbs_i18n_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_2__.i18nBreadcrumbResolver
  },
  data: {
    title: 'statistics.title',
    breadcrumbKey: 'statistics'
  },
  component: _community_statistics_page_themed_community_statistics_page_component__WEBPACK_IMPORTED_MODULE_6__.ThemedCommunityStatisticsPageComponent,
  canActivate: [_core_data_feature_authorization_feature_authorization_guard_statistics_administrator_guard__WEBPACK_IMPORTED_MODULE_3__.statisticsAdministratorGuard]
}];

/***/ }),

/***/ 60624:
/*!******************************************************************************!*\
  !*** ./src/app/statistics-page/statistics-page/statistics-page.directive.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StatisticsPageDirective: () => (/* binding */ StatisticsPageDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 27639);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 84975);
/* harmony import */ var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/auth/auth.service */ 67116);
/* harmony import */ var _core_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/breadcrumbs/dso-name.service */ 96526);
/* harmony import */ var _core_shared_authorized_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/shared/authorized.operators */ 308);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/shared/operators */ 55757);
/* harmony import */ var _core_statistics_usage_report_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/statistics/usage-report-data.service */ 41516);










/**
 * Class representing an abstract statistics page component.
 */
class StatisticsPageDirective {
  constructor() {
    this.route = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute);
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router);
    this.usageReportService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_core_statistics_usage_report_data_service__WEBPACK_IMPORTED_MODULE_4__.UsageReportDataService);
    this.nameService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_core_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_1__.DSONameService);
    this.authService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService);
  }
  ngOnInit() {
    this.scope$ = this.getScope$();
    this.reports$ = this.getReports$();
    this.hasData$ = this.reports$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(reports => reports.some(report => report.points.length > 0)));
  }
  /**
   * Get the scope dso for this statistics page, as an Observable.
   */
  getScope$() {
    return this.route.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(data => data.scope), (0,_core_shared_authorized_operators__WEBPACK_IMPORTED_MODULE_2__.redirectOn4xx)(this.router, this.authService), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_3__.getFirstSucceededRemoteData)(), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_3__.getRemoteDataPayload)());
  }
  /**
   * Get the usage reports for this statistics page, as an Observable list
   */
  getReports$() {
    return this.scope$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.switchMap)(scope => (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.combineLatest)(this.types.map(type => this.usageReportService.getStatistic(scope.id, type)))));
  }
  /**
   * Get the name of the scope dso.
   * @param scope the scope dso to get the name for
   */
  getName(scope) {
    return this.nameService.getName(scope);
  }
  static {
    this.ɵfac = function StatisticsPageDirective_Factory(t) {
      return new (t || StatisticsPageDirective)();
    };
  }
  static {
    this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineDirective"]({
      type: StatisticsPageDirective
    });
  }
}

/***/ }),

/***/ 58372:
/*!********************************************************************************!*\
  !*** ./src/app/statistics-page/statistics-table/statistics-table.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StatisticsTableComponent: () => (/* binding */ StatisticsTableComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 17796);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var _core_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/breadcrumbs/dso-name.service */ 96526);
/* harmony import */ var _core_data_dspace_object_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/data/dspace-object-data.service */ 13989);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/shared/operators */ 55757);
/* harmony import */ var _core_statistics_models_usage_report_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/statistics/models/usage-report.model */ 12070);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/empty.util */ 82777);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 90310);













function StatisticsTableComponent_div_0_th_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const header_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("", header_r1, "-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", header_r1, " ");
  }
}
function StatisticsTableComponent_div_0_tr_9_td_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const header_r2 = ctx.$implicit;
    const point_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate2"]("", point_r3.id, "-", header_r2, "-data");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", point_r3.values[header_r2], " ");
  }
}
function StatisticsTableComponent_div_0_tr_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, StatisticsTableComponent_div_0_tr_9_td_4_Template, 2, 5, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const point_r3 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("", point_r3.id, "-data");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 5, ctx_r3.getLabel(point_r3)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r3.headers);
  }
}
function StatisticsTableComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 1)(1, "h2", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "table", 2)(5, "tbody")(6, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, StatisticsTableComponent_div_0_th_8_Template, 2, 4, "th", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, StatisticsTableComponent_div_0_tr_9_Template, 5, 7, "tr", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 4, "statistics.table.title." + ctx_r3.report.reportType), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-test", ctx_r3.report.reportType);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r3.headers);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r3.report.points);
  }
}
/**
 * Component representing a statistics table for a given usage report.
 */
class StatisticsTableComponent {
  constructor(dsoService, nameService, translateService) {
    this.dsoService = dsoService;
    this.nameService = nameService;
    this.translateService = translateService;
  }
  ngOnInit() {
    this.hasData = this.report.points.length > 0;
    if (this.hasData) {
      this.headers = Object.keys(this.report.points[0].values);
    }
  }
  /**
   * Get the row label to display for a statistics point.
   * @param point the statistics point to get the label for
   */
  getLabel(point) {
    switch (this.report.reportType) {
      case 'TotalVisits':
        return this.dsoService.findById(point.id).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_2__.getFinishedRemoteData)(), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_2__.getRemoteDataPayload)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(item => !(0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_4__.isEmpty)(item) ? this.nameService.getName(item) : this.translateService.instant('statistics.table.no-name')));
      case 'TopCities':
      case 'topCountries':
      default:
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(point.label);
    }
  }
  static {
    this.ɵfac = function StatisticsTableComponent_Factory(t) {
      return new (t || StatisticsTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_data_dspace_object_data_service__WEBPACK_IMPORTED_MODULE_1__.DSpaceObjectDataService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_0__.DSONameService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: StatisticsTableComponent,
      selectors: [["ds-statistics-table"]],
      inputs: {
        report: "report"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵStandaloneFeature"]],
      decls: 1,
      vars: 1,
      consts: [["class", "m-1", 4, "ngIf"], [1, "m-1"], [1, "table", "table-striped"], ["scope", "col", 3, "class", 4, "ngFor", "ngForOf"], [3, "class", 4, "ngFor", "ngForOf"], ["scope", "col"], ["scope", "row", "data-test", "statistics-label"]],
      template: function StatisticsTableComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, StatisticsTableComponent_div_0_Template, 10, 6, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.hasData);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgFor, _angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n}\n\ntd[_ngcontent-%COMP%] {\n  width: 50px;\n  max-width: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRpc3RpY3MtdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQTtFQUNFLGVBQUE7QUFDRjs7QUFDQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FBRUYiLCJmaWxlIjoic3RhdGlzdGljcy10YWJsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovXG50aCwgdGQge1xuICBwYWRkaW5nOiAwLjVyZW07XG59XG50ZCB7XG4gIHdpZHRoOiA1MHB4O1xuICBtYXgtd2lkdGg6IDUwcHg7XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc3RhdGlzdGljcy1wYWdlL3N0YXRpc3RpY3MtdGFibGUvc3RhdGlzdGljcy10YWJsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBO0VBQ0UsZUFBQTtBQUNGOztBQUNBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUFFRjtBQUNBLG92QkFBb3ZCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi9cbnRoLCB0ZCB7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbn1cbnRkIHtcbiAgd2lkdGg6IDUwcHg7XG4gIG1heC13aWR0aDogNTBweDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 61916:
/*!**************************************************************************************************************************************************!*\
  !*** ./src/themes/ lazy ^\.\/.*\/app\/statistics\-page\/collection\-statistics\-page\/collection\-statistics\-page\.component$ namespace object ***!
  \**************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./custom/app/statistics-page/collection-statistics-page/collection-statistics-page.component": [
		77371,
		"src_themes_custom_app_statistics-page_collection-statistics-page_collection-statistics-page_c-9ddab3"
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
webpackAsyncContext.id = 61916;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 34888:
/*!************************************************************************************************************************************************!*\
  !*** ./src/themes/ lazy ^\.\/.*\/app\/statistics\-page\/community\-statistics\-page\/community\-statistics\-page\.component$ namespace object ***!
  \************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./custom/app/statistics-page/community-statistics-page/community-statistics-page.component": [
		70417,
		"src_themes_custom_app_statistics-page_community-statistics-page_community-statistics-page_com-097481"
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
webpackAsyncContext.id = 34888;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 69564:
/*!**************************************************************************************************************************************!*\
  !*** ./src/themes/ lazy ^\.\/.*\/app\/statistics\-page\/item\-statistics\-page\/item\-statistics\-page\.component$ namespace object ***!
  \**************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./custom/app/statistics-page/item-statistics-page/item-statistics-page.component": [
		56345,
		"src_themes_custom_app_statistics-page_item-statistics-page_item-statistics-page_component_ts"
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
webpackAsyncContext.id = 69564;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 83952:
/*!**************************************************************************************************************************************!*\
  !*** ./src/themes/ lazy ^\.\/.*\/app\/statistics\-page\/site\-statistics\-page\/site\-statistics\-page\.component$ namespace object ***!
  \**************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./custom/app/statistics-page/site-statistics-page/site-statistics-page.component": [
		91921,
		"src_themes_custom_app_statistics-page_site-statistics-page_site-statistics-page_component_ts"
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
webpackAsyncContext.id = 83952;
module.exports = webpackAsyncContext;

/***/ })

}]);
//# sourceMappingURL=src_app_statistics-page_statistics-page-routes_ts.js.map