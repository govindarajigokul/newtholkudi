"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_app_browse-by_browse-by-page-routes_ts"],{

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

/***/ 29248:
/*!****************************************************************!*\
  !*** ./src/app/browse-by/browse-by-dso-breadcrumb.resolver.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   browseByDSOBreadcrumbResolver: () => (/* binding */ browseByDSOBreadcrumbResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var _app_routing_paths__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app-routing-paths */ 69799);
/* harmony import */ var _core_breadcrumbs_dso_breadcrumbs_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/breadcrumbs/dso-breadcrumbs.service */ 67045);
/* harmony import */ var _core_data_dspace_object_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/data/dspace-object-data.service */ 13989);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/shared/operators */ 55757);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/empty.util */ 82777);







/**
 * Method for resolving a breadcrumb config object
 * @param {ActivatedRouteSnapshot} route The current ActivatedRouteSnapshot
 * @param {RouterStateSnapshot} state The current RouterStateSnapshot
 * @param {DSOBreadcrumbsService} breadcrumbService
 * @param {DSpaceObjectDataService} dataService
 * @returns BreadcrumbConfig object
 */
const browseByDSOBreadcrumbResolver = (route, state, breadcrumbService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_core_breadcrumbs_dso_breadcrumbs_service__WEBPACK_IMPORTED_MODULE_1__.DSOBreadcrumbsService), dataService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_core_data_dspace_object_data_service__WEBPACK_IMPORTED_MODULE_2__.DSpaceObjectDataService)) => {
  const uuid = route.queryParams.scope;
  if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_4__.hasValue)(uuid)) {
    return dataService.findById(uuid).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_3__.getFirstSucceededRemoteData)(), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_3__.getRemoteDataPayload)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(object => {
      return {
        provider: breadcrumbService,
        key: object,
        url: (0,_app_routing_paths__WEBPACK_IMPORTED_MODULE_0__.getDSORoute)(object)
      };
    }));
  }
  return undefined;
};

/***/ }),

/***/ 2729:
/*!**********************************************!*\
  !*** ./src/app/browse-by/browse-by-guard.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   browseByGuard: () => (/* binding */ browseByGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 17796);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 84975);
/* harmony import */ var _app_routing_paths__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app-routing-paths */ 69799);
/* harmony import */ var _core_browse_browse_definition_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/browse/browse-definition-data.service */ 42673);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/shared/operators */ 55757);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/empty.util */ 82777);









const browseByGuard = (route, state, browseDefinitionService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_core_browse_browse_definition_data_service__WEBPACK_IMPORTED_MODULE_1__.BrowseDefinitionDataService), router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), translate = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService)) => {
  const title = route.data.title;
  const id = route.params.id || route.queryParams.id || route.data.id;
  let browseDefinition$;
  if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_3__.hasNoValue)(route.data.browseDefinition) && (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_3__.hasValue)(id)) {
    browseDefinition$ = browseDefinitionService.findById(id).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_2__.getFirstCompletedRemoteData)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(browseDefinitionRD => browseDefinitionRD.payload));
  } else {
    browseDefinition$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(route.data.browseDefinition);
  }
  const scope = route.queryParams.scope ?? route.parent?.params.id;
  const value = route.queryParams.value;
  const metadataTranslated = translate.instant(`browse.metadata.${id}`);
  return browseDefinition$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(browseDefinition => {
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_3__.hasValue)(browseDefinition)) {
      route.data = createData(title, id, browseDefinition, metadataTranslated, value, route, scope);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(true);
    } else {
      void router.navigate([_app_routing_paths__WEBPACK_IMPORTED_MODULE_0__.PAGE_NOT_FOUND_PATH]);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(false);
    }
  }));
};
function createData(title, id, browseDefinition, field, value, route, scope) {
  return Object.assign({}, route.data, {
    title: title,
    id: id,
    browseDefinition: browseDefinition,
    field: field,
    value: (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_3__.hasValue)(value) ? `"${value}"` : '',
    scope: scope
  });
}

/***/ }),

/***/ 71959:
/*!*****************************************************************!*\
  !*** ./src/app/browse-by/browse-by-i18n-breadcrumb.resolver.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   browseByI18nBreadcrumbResolver: () => (/* binding */ browseByI18nBreadcrumbResolver)
/* harmony export */ });
/* harmony import */ var _core_breadcrumbs_i18n_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/breadcrumbs/i18n-breadcrumb.resolver */ 72059);

/**
 * Method for resolving a browse-by i18n breadcrumb configuration object
 * @param {ActivatedRouteSnapshot} route The current ActivatedRouteSnapshot
 * @param {RouterStateSnapshot} state The current RouterStateSnapshot
 * @returns BreadcrumbConfig object for a browse-by page
 */
const browseByI18nBreadcrumbResolver = (route, state) => {
  const extendedBreadcrumbKey = route.data.breadcrumbKey + '.' + route.params.id;
  route.data = Object.assign({}, route.data, {
    breadcrumbKey: extendedBreadcrumbKey
  });
  return (0,_core_breadcrumbs_i18n_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_0__.i18nBreadcrumbResolver)(route, state);
};

/***/ }),

/***/ 96500:
/*!****************************************************!*\
  !*** ./src/app/browse-by/browse-by-page-routes.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ROUTES: () => (/* binding */ ROUTES)
/* harmony export */ });
/* harmony import */ var _browse_by_dso_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./browse-by-dso-breadcrumb.resolver */ 29248);
/* harmony import */ var _browse_by_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./browse-by-guard */ 2729);
/* harmony import */ var _browse_by_i18n_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./browse-by-i18n-breadcrumb.resolver */ 71959);
/* harmony import */ var _browse_by_page_browse_by_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./browse-by-page/browse-by-page.component */ 25125);




const ROUTES = [{
  path: '',
  resolve: {
    breadcrumb: _browse_by_dso_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_0__.browseByDSOBreadcrumbResolver
  },
  children: [{
    path: ':id',
    component: _browse_by_page_browse_by_page_component__WEBPACK_IMPORTED_MODULE_3__.BrowseByPageComponent,
    canActivate: [_browse_by_guard__WEBPACK_IMPORTED_MODULE_1__.browseByGuard],
    resolve: {
      breadcrumb: _browse_by_i18n_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_2__.browseByI18nBreadcrumbResolver
    },
    data: {
      title: 'browse.title.page',
      breadcrumbKey: 'browse.metadata'
    }
  }]
}];

/***/ }),

/***/ 25125:
/*!**********************************************************************!*\
  !*** ./src/app/browse-by/browse-by-page/browse-by-page.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BrowseByPageComponent: () => (/* binding */ BrowseByPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var _browse_by_switcher_browse_by_switcher_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../browse-by-switcher/browse-by-switcher.component */ 84009);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 14354);






class BrowseByPageComponent {
  constructor(route) {
    this.route = route;
  }
  /**
   * Fetch the correct browse-by component by using the relevant config from the route data
   */
  ngOnInit() {
    this.browseByType$ = this.route.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(data => ({
      type: data.browseDefinition.getRenderType()
    })));
  }
  static {
    this.ɵfac = function BrowseByPageComponent_Factory(t) {
      return new (t || BrowseByPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: BrowseByPageComponent,
      selectors: [["ds-browse-by-page"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 3,
      vars: 3,
      consts: [[1, "container"], [3, "browseByType"]],
      template: function BrowseByPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "ds-browse-by-switcher", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("browseByType", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, ctx.browseByType$));
        }
      },
      dependencies: [_browse_by_switcher_browse_by_switcher_component__WEBPACK_IMPORTED_MODULE_0__.BrowseBySwitcherComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJyb3dzZS1ieS1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBIiwiZmlsZSI6ImJyb3dzZS1ieS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi8iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYnJvd3NlLWJ5L2Jyb3dzZS1ieS1wYWdlL2Jyb3dzZS1ieS1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBO0FBQ0Esb2tCQUFva0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqLyJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 84009:
/*!******************************************************************************!*\
  !*** ./src/app/browse-by/browse-by-switcher/browse-by-switcher.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BrowseBySwitcherComponent: () => (/* binding */ BrowseBySwitcherComponent)
/* harmony export */ });
/* harmony import */ var _core_shared_context_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/shared/context.model */ 26292);
/* harmony import */ var _shared_abstract_component_loader_abstract_component_loader_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/abstract-component-loader/abstract-component-loader.component */ 22924);
/* harmony import */ var _shared_abstract_component_loader_dynamic_component_loader_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/abstract-component-loader/dynamic-component-loader.directive */ 92827);
/* harmony import */ var _browse_by_decorator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./browse-by-decorator */ 58298);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 90310);






function BrowseBySwitcherComponent_ng_template_0_Template(rf, ctx) {}
class BrowseBySwitcherComponent extends _shared_abstract_component_loader_abstract_component_loader_component__WEBPACK_IMPORTED_MODULE_1__.AbstractComponentLoaderComponent {
  constructor() {
    super(...arguments);
    this.inputNamesDependentForComponent = ['context', 'browseByType'];
    this.inputNames = ['context', 'browseByType', 'displayTitle', 'scope'];
  }
  getComponent() {
    return (0,_browse_by_decorator__WEBPACK_IMPORTED_MODULE_3__.getComponentByBrowseByType)(this.browseByType.type, this.context, this.themeService.getThemeName());
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵBrowseBySwitcherComponent_BaseFactory;
      return function BrowseBySwitcherComponent_Factory(t) {
        return (ɵBrowseBySwitcherComponent_BaseFactory || (ɵBrowseBySwitcherComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetInheritedFactory"](BrowseBySwitcherComponent)))(t || BrowseBySwitcherComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: BrowseBySwitcherComponent,
      selectors: [["ds-browse-by-switcher"]],
      inputs: {
        context: "context",
        browseByType: "browseByType",
        displayTitle: "displayTitle",
        scope: "scope"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 0,
      consts: [["DynamicComponentLoader", ""], ["dsDynamicComponentLoader", ""]],
      template: function BrowseBySwitcherComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, BrowseBySwitcherComponent_ng_template_0_Template, 0, 0, "ng-template", 1, 0, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        }
      },
      dependencies: [_shared_abstract_component_loader_dynamic_component_loader_directive__WEBPACK_IMPORTED_MODULE_2__.DynamicComponentLoaderDirective],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 67045:
/*!*************************************************************!*\
  !*** ./src/app/core/breadcrumbs/dso-breadcrumbs.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DSOBreadcrumbsService: () => (/* binding */ DSOBreadcrumbsService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 17796);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 47386);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 84975);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var _app_routing_paths__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app-routing-paths */ 69799);
/* harmony import */ var _breadcrumbs_breadcrumb_breadcrumb_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../breadcrumbs/breadcrumb/breadcrumb.model */ 90839);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/empty.util */ 82777);
/* harmony import */ var _shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/utils/follow-link-config.model */ 67600);
/* harmony import */ var _cache_builders_link_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cache/builders/link.service */ 1321);
/* harmony import */ var _dso_name_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dso-name.service */ 96526);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 90310);











/**
 * Service to calculate DSpaceObject breadcrumbs for a single part of the route
 */
class DSOBreadcrumbsService {
  constructor(linkService, dsoNameService) {
    this.linkService = linkService;
    this.dsoNameService = dsoNameService;
  }
  /**
   * Method to recursively calculate the breadcrumbs
   * This method returns the name and url of the key and all its parent DSOs recursively, top down
   * @param key The key (a DSpaceObject) used to resolve the breadcrumb
   * @param url The url to use as a link for this breadcrumb
   */
  getBreadcrumbs(key, url) {
    const label = this.dsoNameService.getName(key);
    const crumb = new _breadcrumbs_breadcrumb_breadcrumb_model__WEBPACK_IMPORTED_MODULE_1__.Breadcrumb(label, url);
    const propertyName = key.getParentLinkKey();
    return this.linkService.resolveLink(key, (0,_shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_3__.followLink)(propertyName))[propertyName].pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.find)(parentRD => parentRD.hasSucceeded || parentRD.statusCode === 204), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(parentRD => {
      if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_2__.hasValue)(parentRD) && (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_2__.hasValue)(parentRD.payload)) {
        const parent = parentRD.payload;
        return this.getBreadcrumbs(parent, (0,_app_routing_paths__WEBPACK_IMPORTED_MODULE_0__.getDSORoute)(parent));
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)([]);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(breadcrumbs => [...breadcrumbs, crumb]));
  }
  static {
    this.ɵfac = function DSOBreadcrumbsService_Factory(t) {
      return new (t || DSOBreadcrumbsService)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_cache_builders_link_service__WEBPACK_IMPORTED_MODULE_4__.LinkService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_dso_name_service__WEBPACK_IMPORTED_MODULE_5__.DSONameService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjectable"]({
      token: DSOBreadcrumbsService,
      factory: DSOBreadcrumbsService.ɵfac,
      providedIn: 'root'
    });
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

/***/ })

}]);
//# sourceMappingURL=src_app_browse-by_browse-by-page-routes_ts.js.map