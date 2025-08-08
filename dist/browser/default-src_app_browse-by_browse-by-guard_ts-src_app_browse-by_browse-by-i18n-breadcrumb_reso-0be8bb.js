(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["default-src_app_browse-by_browse-by-guard_ts-src_app_browse-by_browse-by-i18n-breadcrumb_reso-0be8bb"],{

/***/ 2729:
/*!**********************************************!*\
  !*** ./src/app/browse-by/browse-by-guard.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

/***/ 84009:
/*!******************************************************************************!*\
  !*** ./src/app/browse-by/browse-by-switcher/browse-by-switcher.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 89266:
/*!*******************************************************************!*\
  !*** ./src/app/core/breadcrumbs/community-breadcrumb.resolver.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   communityBreadcrumbResolver: () => (/* binding */ communityBreadcrumbResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _community_page_community_page_resolver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../community-page/community-page.resolver */ 22269);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/empty.util */ 82777);
/* harmony import */ var _data_community_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/community-data.service */ 46660);
/* harmony import */ var _dso_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dso-breadcrumb.resolver */ 70025);
/* harmony import */ var _dso_breadcrumbs_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dso-breadcrumbs.service */ 67045);






/**
 * The resolve function that resolves the BreadcrumbConfig object for a Community
 */
const communityBreadcrumbResolver = (route, state, breadcrumbService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_dso_breadcrumbs_service__WEBPACK_IMPORTED_MODULE_4__.DSOBreadcrumbsService), dataService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_data_community_data_service__WEBPACK_IMPORTED_MODULE_2__.CommunityDataService)) => {
  const linksToFollow = _community_page_community_page_resolver__WEBPACK_IMPORTED_MODULE_0__.COMMUNITY_PAGE_LINKS_TO_FOLLOW;
  if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_1__.hasValue)(route.data.breadcrumbQueryParam) && (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_1__.hasValue)(route.queryParams[route.data.breadcrumbQueryParam])) {
    return (0,_dso_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_3__.DSOBreadcrumbResolverByUuid)(route, state, route.queryParams[route.data.breadcrumbQueryParam], breadcrumbService, dataService, ...linksToFollow);
  } else {
    return (0,_dso_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_3__.DSOBreadcrumbResolver)(route, state, breadcrumbService, dataService, ...linksToFollow);
  }
};

/***/ }),

/***/ 61434:
/*!*********************************************************************************!*\
  !*** ./src/app/shared/comcol/comcol-forms/comcol-form/comcol-form.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ComColFormComponent: () => (/* binding */ ComColFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng2-file-upload */ 61893);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 83485);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 27639);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 84975);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 85687);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 78374);
/* harmony import */ var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/auth/auth.service */ 67116);
/* harmony import */ var _core_cache_object_cache_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/cache/object-cache.service */ 41684);
/* harmony import */ var _core_data_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/data/request.service */ 32473);
/* harmony import */ var _core_shared_community_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/shared/community.model */ 10046);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/shared/operators */ 55757);
/* harmony import */ var _confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../confirmation-modal/confirmation-modal.component */ 9284);
/* harmony import */ var _empty_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../empty.util */ 82777);
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../form/form.component */ 99386);
/* harmony import */ var _notifications_notifications_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../notifications/notifications.service */ 69472);
/* harmony import */ var _upload_uploader_uploader_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../upload/uploader/uploader.component */ 18430);
/* harmony import */ var _upload_uploader_uploader_options_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../upload/uploader/uploader-options.model */ 32979);
/* harmony import */ var _utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../utils/follow-link-config.model */ 67600);
/* harmony import */ var _utils_var_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../utils/var.directive */ 18226);
/* harmony import */ var _comcol_page_logo_comcol_page_logo_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../comcol-page-logo/comcol-page-logo.component */ 31136);
/* harmony import */ var _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ng-dynamic-forms/core */ 94403);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 49966);






























function ComColFormComponent_ng_container_6_div_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 12)(1, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ComColFormComponent_ng_container_6_div_1_div_5_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.confirmLogoDeleteWithModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](3, 1, "community.edit.logo.delete.title"), " ");
  }
}
function ComColFormComponent_ng_container_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 7)(1, "div", 1)(2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](3, "ds-comcol-page-logo", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](5, ComColFormComponent_ng_container_6_div_1_div_5_Template, 4, 3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const logo_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().ngVar;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("alternateText", ctx_r1.type.value + ".logo.alt")("logo", logo_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", logo_r3);
  }
}
function ComColFormComponent_ng_container_6_div_2_ds_uploader_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ds-uploader", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("onCompleteItem", function ComColFormComponent_ng_container_6_div_2_ds_uploader_1_Template_ds_uploader_onCompleteItem_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.onCompleteItem());
    })("onUploadError", function ComColFormComponent_ng_container_6_div_2_ds_uploader_1_Template_ds_uploader_onUploadError_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.onUploadError());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ariaLabel", ctx_r1.type.value + ".browse.logo")("dropMsg", ctx_r1.type.value + ".edit.logo.upload")("dropOverDocumentMsg", ctx_r1.type.value + ".edit.logo.upload")("enableDragOverDocument", true)("uploadFilesOptions", ctx_r1.uploadFilesOptions);
  }
}
function ComColFormComponent_ng_container_6_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, ComColFormComponent_ng_container_6_div_2_ds_uploader_1_Template, 1, 5, "ds-uploader", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 1, ctx_r1.initializedUploaderOptions));
  }
}
function ComColFormComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, ComColFormComponent_ng_container_6_div_1_Template, 6, 3, "div", 5)(2, ComColFormComponent_ng_container_6_div_2_Template, 3, 3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const logo_r3 = ctx.ngVar;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", logo_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !logo_r3);
  }
}
function ComColFormComponent_ds_form_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ds-form", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("submitForm", function ComColFormComponent_ds_form_8_Template_ds_form_submitForm_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.onSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ComColFormComponent_ds_form_8_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.back.emit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formId", "comcol-form-id")("formModel", ctx_r1.formModel)("displayCancel", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](4, 4, ctx_r1.type.value + ".edit.return"), " ");
  }
}
/**
 * A form for creating and editing Communities or Collections
 */
class ComColFormComponent {
  constructor(formService, translate, notificationsService, authService, requestService, objectCache, modalService) {
    this.formService = formService;
    this.translate = translate;
    this.notificationsService = notificationsService;
    this.authService = authService;
    this.requestService = requestService;
    this.objectCache = objectCache;
    this.modalService = modalService;
    /**
     * @type {string} Key prefix used to generate form labels
     */
    this.LABEL_KEY_PREFIX = '.form.';
    /**
     * @type {string} Key prefix used to generate form error messages
     */
    this.ERROR_KEY_PREFIX = '.form.errors.';
    /**
     * The uploader configuration options
     * @type {UploaderOptions}
     */
    this.uploadFilesOptions = Object.assign(new _upload_uploader_uploader_options_model__WEBPACK_IMPORTED_MODULE_10__.UploaderOptions(), {
      autoUpload: false
    });
    /**
     * Emits DSO and Uploader when the form is submitted
     */
    this.submitForm = new _angular_core__WEBPACK_IMPORTED_MODULE_14__.EventEmitter();
    /**
     * Event emitted on back
     */
    this.back = new _angular_core__WEBPACK_IMPORTED_MODULE_14__.EventEmitter();
    /**
     * Event emitted on finish
     */
    this.finish = new _angular_core__WEBPACK_IMPORTED_MODULE_14__.EventEmitter();
    /**
     * Observable keeping track whether the uploader has finished initializing
     * Used to start rendering the uploader component
     */
    this.initializedUploaderOptions = new rxjs__WEBPACK_IMPORTED_MODULE_15__.BehaviorSubject(false);
    /**
     * Array to track all subscriptions and unsubscribe them onDestroy
     * @type {Array}
     */
    this.subs = [];
    this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_16__.FileUploader(this.uploadFilesOptions);
    this.refreshDSO$ = new _angular_core__WEBPACK_IMPORTED_MODULE_14__.EventEmitter();
  }
  ngOnInit() {
    this.uploadFilesOptions.autoUpload = !this.isCreation;
    if ((0,_empty_util__WEBPACK_IMPORTED_MODULE_6__.hasValue)(this.formModel)) {
      this.formModel.forEach(fieldModel => {
        fieldModel.value = this.dso.firstMetadataValue(fieldModel.name);
      });
      this.formGroup = this.formService.createFormGroup(this.formModel);
      this.updateFieldTranslations();
      this.translate.onLangChange.subscribe(() => {
        this.updateFieldTranslations();
      });
      if ((0,_empty_util__WEBPACK_IMPORTED_MODULE_6__.hasValue)(this.dso.id)) {
        this.subs.push((0,rxjs__WEBPACK_IMPORTED_MODULE_17__.combineLatest)([this.dsoService.getLogoEndpoint(this.dso.id), this.dso.logo]).subscribe(([href, logoRD]) => {
          this.uploadFilesOptions.url = href;
          this.uploadFilesOptions.authToken = this.authService.buildAuthHeader();
          this.initializedUploaderOptions.next(true);
        }));
      } else {
        // Set a placeholder URL to not break the uploader component. This will be replaced once the object is created.
        this.uploadFilesOptions.url = 'placeholder';
        this.uploadFilesOptions.authToken = this.authService.buildAuthHeader();
        this.initializedUploaderOptions.next(true);
      }
    }
    this.subs.push(this.refreshDSO$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_18__.switchMap)(() => this.refreshDsoCache()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.filter)(rd => rd.hasSucceeded)).subscribe(({
      payload
    }) => this.dso = payload));
  }
  /**
   * Checks which new fields were added and sends the updated version of the DSO to the parent component
   */
  onSubmit() {
    const formMetadata = {};
    this.formModel.forEach(fieldModel => {
      const value = {
        value: fieldModel.value,
        language: null
      };
      if (formMetadata.hasOwnProperty(fieldModel.name)) {
        formMetadata[fieldModel.name].push(value);
      } else {
        formMetadata[fieldModel.name] = [value];
      }
    });
    const updatedDSO = Object.assign({}, this.dso, {
      metadata: {
        ...this.dso.metadata,
        ...formMetadata
      },
      type: _core_shared_community_model__WEBPACK_IMPORTED_MODULE_3__.Community.type
    });
    const operations = [];
    this.formModel.forEach(fieldModel => {
      if (fieldModel.value !== this.dso.firstMetadataValue(fieldModel.name)) {
        operations.push({
          op: 'replace',
          path: `/metadata/${fieldModel.name}`,
          value: {
            value: fieldModel.value,
            language: null
          }
        });
      }
    });
    if (this.isCreation) {
      this.submitForm.emit({
        dso: updatedDSO,
        uploader: (0,_empty_util__WEBPACK_IMPORTED_MODULE_6__.hasValue)(this.uploaderComponent) ? this.uploaderComponent.uploader : undefined,
        operations: operations
      });
    } else {
      this.submitForm.emit({
        dso: updatedDSO,
        operations: operations
      });
    }
  }
  /**
   * Used the update translations of errors and labels on init and on language change
   */
  updateFieldTranslations() {
    this.formModel.forEach(fieldModel => {
      fieldModel.label = this.translate.instant(this.type.value + this.LABEL_KEY_PREFIX + fieldModel.id);
      if ((0,_empty_util__WEBPACK_IMPORTED_MODULE_6__.isNotEmpty)(fieldModel.validators)) {
        fieldModel.errorMessages = {};
        Object.keys(fieldModel.validators).forEach(key => {
          fieldModel.errorMessages[key] = this.translate.instant(this.type.value + this.ERROR_KEY_PREFIX + fieldModel.id + '.' + key);
        });
      }
    });
  }
  /**
   * Helper method that confirms the deletion of the logo opening a confirmation modal
   */
  confirmLogoDeleteWithModal() {
    const modalRef = this.createConfirmationModal();
    this.subscribeToConfirmationResponse(modalRef);
  }
  /**
   * Creates and opens the confirmation modal
   * @returns Reference to the opened modal
   */
  createConfirmationModal() {
    const modalRef = this.modalService.open(_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_5__.ConfirmationModalComponent);
    modalRef.componentInstance.headerLabel = 'community-collection.edit.logo.delete.title';
    modalRef.componentInstance.infoLabel = 'confirmation-modal.delete-community-collection-logo.info';
    modalRef.componentInstance.cancelLabel = 'form.cancel';
    modalRef.componentInstance.confirmLabel = 'community-collection.edit.logo.delete.title';
    modalRef.componentInstance.confirmIcon = 'fas fa-trash';
    modalRef.componentInstance.brandColor = 'danger';
    return modalRef;
  }
  /**
   * Subscribes to the confirmation modal's response and calls the logo deletion handler if confirmed
   * @param modalRef References to the opened confirmation modal
   */
  subscribeToConfirmationResponse(modalRef) {
    modalRef.componentInstance.response.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.take)(1)).subscribe(confirmed => {
      if (confirmed) {
        this.handleLogoDeletion();
      }
    });
  }
  /**
   * Method that confirms the deletion of the logo, handling both possible outcomes
   */
  handleLogoDeletion() {
    if ((0,_empty_util__WEBPACK_IMPORTED_MODULE_6__.hasValue)(this.dso.id) && (0,_empty_util__WEBPACK_IMPORTED_MODULE_6__.hasValue)(this.dso._links.logo)) {
      this.dsoService.deleteLogo(this.dso).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_4__.getFirstCompletedRemoteData)()).subscribe(response => {
        const successMessageKey = `${this.type.value}.edit.logo.notifications.delete.success`;
        const errorMessageKey = `${this.type.value}.edit.logo.notifications.delete.error`;
        if (response.hasSucceeded) {
          this.handleSuccessfulDeletion(successMessageKey);
        } else {
          this.handleFailedDeletion(errorMessageKey, response.errorMessage);
        }
      });
    }
  }
  /**
   * Handles successful logo deletion
   * @param successMessageKey Translation key for success message
   */
  handleSuccessfulDeletion(successMessageKey) {
    this.refreshDSO$.next();
    this.notificationsService.success(this.translate.get(`${successMessageKey}.title`), this.translate.get(`${successMessageKey}.content`));
  }
  /**
   * Handles failed logo deletion
   * @param errorMessageKey Translation key for error message
   * @param errorMessage Error message from the response
   */
  handleFailedDeletion(errorMessageKey, errorMessage) {
    this.notificationsService.error(this.translate.get(`${errorMessageKey}.title`), errorMessage);
  }
  /**
   * Refresh the object's cache to obtain the latest version
   */
  refreshDsoCache() {
    this.clearDsoCache();
    return this.fetchUpdatedDso();
  }
  /**
   * Clears the cache related to the current dso
   */
  clearDsoCache() {
    this.requestService.setStaleByHrefSubstring(this.dso.id);
    this.objectCache.remove(this.dso._links.self.href);
  }
  /**
   * Fetches the latest data for the dso
   */
  fetchUpdatedDso() {
    return this.dsoService.findById(this.dso.id, false, true, (0,_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_11__.followLink)('logo')).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_4__.getFirstCompletedRemoteData)());
  }
  /**
   * The request was successful, display a success notification
   */
  onCompleteItem() {
    if ((0,_empty_util__WEBPACK_IMPORTED_MODULE_6__.hasValue)(this.dso.id)) {
      this.refreshDSO$.next();
    }
    if (this.isCreation) {
      this.finish.emit();
    }
    this.notificationsService.success(null, this.translate.get(this.type.value + '.edit.logo.notifications.add.success'));
  }
  /**
   * The request was unsuccessful, display an error notification
   */
  onUploadError() {
    this.notificationsService.error(null, this.translate.get(this.type.value + '.edit.logo.notifications.add.error'));
  }
  /**
   * Unsubscribe from open subscriptions
   */
  ngOnDestroy() {
    this.refreshDSO$.complete();
    this.subs.filter(subscription => (0,_empty_util__WEBPACK_IMPORTED_MODULE_6__.hasValue)(subscription)).forEach(subscription => subscription.unsubscribe());
  }
  static {
    this.ɵfac = function ComColFormComponent_Factory(t) {
      return new (t || ComColFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_21__.DynamicFormService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_8__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_core_data_request_service__WEBPACK_IMPORTED_MODULE_2__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_core_cache_object_cache_service__WEBPACK_IMPORTED_MODULE_1__.ObjectCacheService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__.NgbModal));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({
      type: ComColFormComponent,
      selectors: [["ds-comcol-form"]],
      viewQuery: function ComColFormComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_upload_uploader_uploader_component__WEBPACK_IMPORTED_MODULE_9__.UploaderComponent, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.uploaderComponent = _t.first);
        }
      },
      inputs: {
        dso: "dso",
        isCreation: "isCreation"
      },
      outputs: {
        submitForm: "submitForm",
        back: "back",
        finish: "finish"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵStandaloneFeature"]],
      decls: 9,
      vars: 7,
      consts: [[1, "container-fluid"], [1, "row"], [1, "col-12", "d-inline-block", "mb-1"], [4, "ngVar"], [3, "formId", "formModel", "displayCancel", "submitForm", 4, "ngIf"], ["class", "col-12 d-inline-block alert", "id", "logo-section", 4, "ngIf"], ["class", "col-12 d-inline-block", 4, "ngIf"], ["id", "logo-section", 1, "col-12", "d-inline-block", "alert"], [1, "col-8", "d-inline-block"], [3, "alternateText", "logo"], [1, "col-4", "d-inline-block"], ["class", "float-right", 4, "ngIf"], [1, "float-right"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], [1, "col-12", "d-inline-block"], [3, "ariaLabel", "dropMsg", "dropOverDocumentMsg", "enableDragOverDocument", "uploadFilesOptions", "onCompleteItem", "onUploadError", 4, "ngIf"], [3, "onCompleteItem", "onUploadError", "ariaLabel", "dropMsg", "dropOverDocumentMsg", "enableDragOverDocument", "uploadFilesOptions"], [3, "submitForm", "formId", "formModel", "displayCancel"], ["before", "", "type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], ["aria-hidden", "true", 1, "fas", "fa-arrow-left"]],
      template: function ComColFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](5, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](6, ComColFormComponent_ng_container_6_Template, 3, 2, "ng-container", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](7, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](8, ComColFormComponent_ds_form_8_Template, 5, 6, "ds-form", 4);
        }
        if (rf & 2) {
          let tmp_1_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](5, 3, ctx.type.value + ".edit.logo.label"));
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngVar", (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](7, 5, ctx.dso == null ? null : ctx.dso.logo)) == null ? null : tmp_1_0.payload);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.formModel);
        }
      },
      dependencies: [_form_form_component__WEBPACK_IMPORTED_MODULE_7__.FormComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__.TranslatePipe, _upload_uploader_uploader_component__WEBPACK_IMPORTED_MODULE_9__.UploaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_24__.AsyncPipe, _comcol_page_logo_comcol_page_logo_component__WEBPACK_IMPORTED_MODULE_13__.ComcolPageLogoComponent, _angular_common__WEBPACK_IMPORTED_MODULE_24__.NgIf, _utils_var_directive__WEBPACK_IMPORTED_MODULE_12__.VarDirective],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbWNvbC1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBIiwiZmlsZSI6ImNvbWNvbC1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi8iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbWNvbC9jb21jb2wtZm9ybXMvY29tY29sLWZvcm0vY29tY29sLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQSw0akJBQTRqQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 61084:
/*!***********************************************************************************************!*\
  !*** ./src/app/shared/comcol/comcol-forms/create-comcol-page/create-comcol-page.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateComColPageComponent: () => (/* binding */ CreateComColPageComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 83485);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 17796);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 78374);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 74671);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 21252);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var _app_routing_paths__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../app-routing-paths */ 69799);
/* harmony import */ var _core_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/breadcrumbs/dso-name.service */ 96526);
/* harmony import */ var _core_cache_models_request_param_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/cache/models/request-param.model */ 53954);
/* harmony import */ var _core_data_comcol_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/data/comcol-data.service */ 3440);
/* harmony import */ var _core_data_community_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/data/community-data.service */ 46660);
/* harmony import */ var _core_data_request_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/data/request.service */ 32473);
/* harmony import */ var _core_services_route_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/services/route.service */ 27297);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/shared/operators */ 55757);
/* harmony import */ var _empty_util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../empty.util */ 82777);
/* harmony import */ var _notifications_notifications_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../notifications/notifications.service */ 69472);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-translate/core */ 96439);























/**
 * Component representing the create page for communities and collections
 */
class CreateComColPageComponent {
  constructor(dsoDataService, dsoNameService, parentDataService, routeService, router, notificationsService, translate, requestService) {
    this.dsoDataService = dsoDataService;
    this.dsoNameService = dsoNameService;
    this.parentDataService = parentDataService;
    this.routeService = routeService;
    this.router = router;
    this.notificationsService = notificationsService;
    this.translate = translate;
    this.requestService = requestService;
    /**
     * The
     */
    this.isLoading$ = new rxjs__WEBPACK_IMPORTED_MODULE_10__.BehaviorSubject(false);
  }
  ngOnInit() {
    this.parentUUID$ = this.routeService.getQueryParameterValue('parent');
    this.parentUUID$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.take)(1)).subscribe(parentID => {
      if ((0,_empty_util__WEBPACK_IMPORTED_MODULE_8__.isNotEmpty)(parentID)) {
        this.parentRD$ = this.parentDataService.findById(parentID);
      }
    });
  }
  /**
   * Creates a new DSO based on the submitted user data and navigates to the new object's home page
   * @param event   The event returned by the community/collection form. Contains the new dso and logo uploader
   */
  onSubmit(event) {
    this.isLoading$.next(true);
    const dso = event.dso;
    const uploader = event.uploader;
    this.parentUUID$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.mergeMap)(uuid => {
      const params = uuid ? [new _core_cache_models_request_param_model__WEBPACK_IMPORTED_MODULE_2__.RequestParam('parent', uuid)] : [];
      return this.dsoDataService.create(dso, ...params).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_7__.getFirstSucceededRemoteDataPayload)());
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.mergeMap)(dsoRD => {
      if ((0,_empty_util__WEBPACK_IMPORTED_MODULE_8__.isNotUndefined)(dsoRD)) {
        this.newUUID = dsoRD.uuid;
        if (uploader.queue.length > 0) {
          return this.dsoDataService.getLogoEndpoint(this.newUUID).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.tap)(href => {
            uploader.options.url = href;
            uploader.onCompleteAll = () => {
              this.isLoading$.next(false);
              this.navigateToNewPage();
              this.notificationsService.success(null, this.translate.get(this.type.value + '.create.notifications.success'));
            };
            uploader.uploadAll();
          }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.map)(() => false));
        } else {
          this.dsoDataService.refreshCache(dsoRD);
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.of)(true);
        }
      }
    })).subscribe(notify => {
      if (notify) {
        this.isLoading$.next(false);
        this.navigateToNewPage();
        this.notificationsService.success(null, this.translate.get(this.type.value + '.create.notifications.success'));
      }
    });
  }
  /**
   * Navigate to home page
   */
  navigateToHome() {
    this.router.navigate([(0,_app_routing_paths__WEBPACK_IMPORTED_MODULE_0__.getHomePageRoute)()]);
  }
  /**
   * Navigate to the page of the newly created object
   */
  navigateToNewPage() {
    if ((0,_empty_util__WEBPACK_IMPORTED_MODULE_8__.hasValue)(this.newUUID)) {
      this.router.navigate([this.frontendURL + this.newUUID]);
    }
  }
  static {
    this.ɵfac = function CreateComColPageComponent_Factory(t) {
      return new (t || CreateComColPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_core_data_comcol_data_service__WEBPACK_IMPORTED_MODULE_3__.ComColDataService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_core_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_1__.DSONameService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_core_data_community_data_service__WEBPACK_IMPORTED_MODULE_4__.CommunityDataService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_core_services_route_service__WEBPACK_IMPORTED_MODULE_6__.RouteService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_17__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_9__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_core_data_request_service__WEBPACK_IMPORTED_MODULE_5__.RequestService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineComponent"]({
      type: CreateComColPageComponent,
      selectors: [["ds-create-comcol"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵStandaloneFeature"]],
      decls: 0,
      vars: 0,
      template: function CreateComColPageComponent_Template(rf, ctx) {},
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 55326:
/*!***********************************************************************************************!*\
  !*** ./src/app/shared/comcol/comcol-forms/delete-comcol-page/delete-comcol-page.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeleteComColPageComponent: () => (/* binding */ DeleteComColPageComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 83485);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 46891);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var _core_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/breadcrumbs/dso-name.service */ 96526);
/* harmony import */ var _core_data_comcol_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/data/comcol-data.service */ 3440);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/shared/operators */ 55757);
/* harmony import */ var _notifications_notifications_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../notifications/notifications.service */ 69472);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 96439);














/**
 * Component representing the delete page for communities and collections
 */
class DeleteComColPageComponent {
  constructor(dsoDataService, dsoNameService, router, route, notifications, translate) {
    this.dsoDataService = dsoDataService;
    this.dsoNameService = dsoNameService;
    this.router = router;
    this.route = route;
    this.notifications = notifications;
    this.translate = translate;
    /**
     * A boolean representing if a delete operation is pending
     * @type {BehaviorSubject<boolean>}
     */
    this.processing$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(false);
  }
  ngOnInit() {
    this.dsoRD$ = this.route.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.first)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(data => data.dso));
  }
  /**
   * @param {TDomain} dso The DSO to delete
   * Deletes an existing DSO and redirects to the home page afterwards, showing a notification that states whether or not the deletion was successful
   */
  onConfirm(dso) {
    this.processing$.next(true);
    this.dsoDataService.delete(dso.id).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_2__.getFirstCompletedRemoteData)()).subscribe(response => {
      if (response.hasSucceeded) {
        const successMessage = this.translate.instant(dso.type + '.delete.notification.success');
        this.notifications.success(successMessage);
      } else {
        const errorMessage = this.translate.instant(dso.type + '.delete.notification.fail');
        this.notifications.error(errorMessage);
      }
      this.router.navigate(['/']);
    });
  }
  /**
   * @param {TDomain} dso The DSO for which the delete action was canceled
   * When a delete is canceled, the user is redirected to the DSO's edit page
   */
  onCancel(dso) {
    this.router.navigate([this.frontendURL + '/' + dso.uuid + '/edit']);
  }
  static {
    this.ɵfac = function DeleteComColPageComponent_Factory(t) {
      return new (t || DeleteComColPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_data_comcol_data_service__WEBPACK_IMPORTED_MODULE_1__.ComColDataService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_0__.DSONameService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_3__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: DeleteComColPageComponent,
      selectors: [["ds-delete-comcol"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵStandaloneFeature"]],
      decls: 0,
      vars: 0,
      template: function DeleteComColPageComponent_Template(rf, ctx) {},
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 52292:
/*!****************************************************************************************!*\
  !*** ./src/app/shared/comcol/comcol-page-browse-by/comcol-page-browse-by.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ComcolPageBrowseByComponent: () => (/* binding */ ComcolPageBrowseByComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 56106);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 83485);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 27639);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 62997);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 85687);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 64785);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 78374);
/* harmony import */ var _collection_page_collection_page_routing_paths__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../collection-page/collection-page-routing-paths */ 64611);
/* harmony import */ var _community_page_community_page_routing_paths__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../community-page/community-page-routing-paths */ 54671);
/* harmony import */ var _core_browse_browse_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/browse/browse.service */ 37864);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/shared/operators */ 55757);
/* harmony import */ var _empty_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../empty.util */ 82777);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 90310);
















function ComcolPageBrowseByComponent_nav_3_a_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_7_0;
    const option_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ((tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 6, ctx_r2.currentOption$)) == null ? null : tmp_4_0.id) === option_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", option_r2.routerLink)("queryParams", option_r2.params);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("aria-current", ((tmp_7_0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 8, ctx_r2.currentOption$)) == null ? null : tmp_7_0.id) === option_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 10, option_r2.label), " ");
  }
}
function ComcolPageBrowseByComponent_nav_3_option_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_5_0;
    const option_r4 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", option_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("selected", ((tmp_5_0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 3, ctx_r2.currentOption$)) == null ? null : tmp_5_0.id) === option_r4.id ? "selected" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 5, option_r4.label), " ");
  }
}
function ComcolPageBrowseByComponent_nav_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nav", 2)(1, "div", 3)(2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, ComcolPageBrowseByComponent_nav_3_a_3_Template, 5, 12, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 6)(5, "select", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function ComcolPageBrowseByComponent_nav_3_Template_select_change_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.onSelectChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, ComcolPageBrowseByComponent_nav_3_option_6_Template, 4, 7, "option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const allOptions_r5 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", allOptions_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", allOptions_r5);
  }
}
/**
 * A component to display the "Browse By" section of a Community or Collection page
 * It expects the ID of the Community or Collection as input to be passed on as a scope
 */
class ComcolPageBrowseByComponent {
  constructor(router, browseService) {
    this.router = router;
    this.browseService = browseService;
    this.currentOption$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject(undefined);
    this.subs = [];
  }
  ngOnInit() {
    this.allOptions$ = this.browseService.getBrowseDefinitions().pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_3__.getFirstCompletedRemoteData)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(browseDefListRD => {
      const allOptions = [];
      if (browseDefListRD.hasSucceeded) {
        let comColRoute;
        if (this.contentType === 'collection') {
          comColRoute = (0,_collection_page_collection_page_routing_paths__WEBPACK_IMPORTED_MODULE_0__.getCollectionPageRoute)(this.id);
          allOptions.push({
            id: 'search',
            label: 'collection.page.browse.search.head',
            routerLink: comColRoute
          });
        } else if (this.contentType === 'community') {
          comColRoute = (0,_community_page_community_page_routing_paths__WEBPACK_IMPORTED_MODULE_1__.getCommunityPageRoute)(this.id);
          allOptions.push({
            id: 'search',
            label: 'collection.page.browse.search.head',
            routerLink: comColRoute
          });
          allOptions.push({
            id: 'comcols',
            label: 'community.all-lists.head',
            routerLink: `${comColRoute}/subcoms-cols`
          });
        }
        allOptions.push(...browseDefListRD.payload.page.map(config => ({
          id: `browse_${config.id}`,
          label: `browse.comcol.by.${config.id}`,
          routerLink: `${comColRoute}/browse/${config.id}`
        })));
      }
      return allOptions;
    }));
    this.subs.push((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.combineLatest)([this.allOptions$, this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.startWith)(this.router), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.filter)(next => (0,_empty_util__WEBPACK_IMPORTED_MODULE_4__.isNotEmpty)(next?.url) || next?.type === _angular_router__WEBPACK_IMPORTED_MODULE_11__.EventType.Scroll), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(next => next?.url || next.routerEvent.urlAfterRedirects), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.distinctUntilChanged)())]).subscribe(([navOptions, url]) => {
      for (const option of navOptions) {
        if (option.routerLink === url?.split('?')[0]) {
          this.currentOption$.next(option);
        }
      }
    }));
  }
  ngOnDestroy() {
    this.subs.forEach(sub => sub.unsubscribe());
  }
  onSelectChange(event) {
    this.allOptions$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.take)(1)).subscribe(allOptions => {
      for (const option of allOptions) {
        if (option.id === event.target.value) {
          this.currentOption$.next(option[0]);
          void this.router.navigate([option.routerLink], {
            queryParams: option.params
          });
          break;
        }
      }
    });
  }
  static {
    this.ɵfac = function ComcolPageBrowseByComponent_Factory(t) {
      return new (t || ComcolPageBrowseByComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_browse_browse_service__WEBPACK_IMPORTED_MODULE_2__.BrowseService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: ComcolPageBrowseByComponent,
      selectors: [["ds-base-comcol-page-browse-by"]],
      inputs: {
        id: "id",
        contentType: "contentType"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵStandaloneFeature"]],
      decls: 5,
      vars: 6,
      consts: [[1, "comcol-browse-label"], ["class", "comcol-browse mb-4", "aria-label", "Browse Community or Collection", 4, "ngIf"], ["aria-label", "Browse Community or Collection", 1, "comcol-browse", "mb-4"], [1, "d-none", "d-sm-block"], ["role", "tablist", 1, "list-group", "list-group-horizontal"], ["class", "list-group-item", "role", "tab", 3, "routerLink", "queryParams", "active", 4, "ngFor", "ngForOf"], [1, "d-block", "d-sm-none"], ["name", "browse-type", "aria-label", "Browse Community or Collection", 1, "form-control", 3, "change"], [3, "value", 4, "ngFor", "ngForOf"], ["role", "tab", 1, "list-group-item", 3, "routerLink", "queryParams"], [3, "value"]],
      template: function ComcolPageBrowseByComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h2", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, ComcolPageBrowseByComponent_nav_3_Template, 7, 2, "nav", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "async");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 2, "browse.comcol.head"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 4, ctx.allOptions$));
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLink, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_15__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbWNvbC1wYWdlLWJyb3dzZS1ieS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQSIsImZpbGUiOiJjb21jb2wtcGFnZS1icm93c2UtYnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqLyJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbWNvbC9jb21jb2wtcGFnZS1icm93c2UtYnkvY29tY29sLXBhZ2UtYnJvd3NlLWJ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBO0FBQ0Esd2xCQUF3bEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqLyJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 20538:
/*!***********************************************************************************************!*\
  !*** ./src/app/shared/comcol/comcol-page-browse-by/themed-comcol-page-browse-by.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemedComcolPageBrowseByComponent: () => (/* binding */ ThemedComcolPageBrowseByComponent)
/* harmony export */ });
/* harmony import */ var _theme_support_themed_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../theme-support/themed.component */ 8886);
/* harmony import */ var _comcol_page_browse_by_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comcol-page-browse-by.component */ 52292);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);



const _c0 = ["*"];
function ThemedComcolPageBrowseByComponent_ng_template_0_Template(rf, ctx) {}
/**
 * Themed wrapper for ComcolPageBrowseByComponent
 */
class ThemedComcolPageBrowseByComponent extends _theme_support_themed_component__WEBPACK_IMPORTED_MODULE_0__.ThemedComponent {
  constructor() {
    super(...arguments);
    this.inAndOutputNames = ['id', 'contentType'];
  }
  getComponentName() {
    return 'ComcolPageBrowseByComponent';
  }
  importThemedComponent(themeName) {
    return __webpack_require__(7754)(`./${themeName}/app/shared/comcol/comcol-page-browse-by/comcol-page-browse-by.component`);
  }
  importUnthemedComponent() {
    return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./comcol-page-browse-by.component */ 52292));
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵThemedComcolPageBrowseByComponent_BaseFactory;
      return function ThemedComcolPageBrowseByComponent_Factory(t) {
        return (ɵThemedComcolPageBrowseByComponent_BaseFactory || (ɵThemedComcolPageBrowseByComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](ThemedComcolPageBrowseByComponent)))(t || ThemedComcolPageBrowseByComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ThemedComcolPageBrowseByComponent,
      selectors: [["ds-comcol-page-browse-by"]],
      inputs: {
        id: "id",
        contentType: "contentType"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      ngContentSelectors: _c0,
      decls: 5,
      vars: 0,
      consts: [["vcr", ""], ["content", ""]],
      template: function ThemedComcolPageBrowseByComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ThemedComcolPageBrowseByComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
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

/***/ 2688:
/*!************************************************************************************!*\
  !*** ./src/app/shared/comcol/comcol-page-content/comcol-page-content.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ComcolPageContentComponent: () => (/* binding */ ComcolPageContentComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 90310);




function ComcolPageContentComponent_div_0_h2_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r0.title));
  }
}
function ComcolPageContentComponent_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 4);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx_r0.content, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
  }
}
function ComcolPageContentComponent_div_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.content);
  }
}
function ComcolPageContentComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ComcolPageContentComponent_div_0_h2_1_Template, 3, 3, "h2", 2)(2, ComcolPageContentComponent_div_0_div_2_Template, 1, 1, "div", 3)(3, ComcolPageContentComponent_div_0_div_3_Template, 2, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.hasInnerHtml);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.hasInnerHtml);
  }
}
/**
 * This component renders any content inside of this component.
 * If there is a title set it will render the title.
 * If hasInnerHtml is true the content will be handled as html.
 * To see how it is used see collection-page or community-page.
 */
class ComcolPageContentComponent {
  static {
    this.ɵfac = function ComcolPageContentComponent_Factory(t) {
      return new (t || ComcolPageContentComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ComcolPageContentComponent,
      selectors: [["ds-base-comcol-page-content"]],
      inputs: {
        title: "title",
        content: "content",
        hasInnerHtml: "hasInnerHtml"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 1,
      vars: 1,
      consts: [["class", "content-with-optional-title mb-2", 4, "ngIf"], [1, "content-with-optional-title", "mb-2"], [4, "ngIf"], [3, "innerHtml", 4, "ngIf"], [3, "innerHtml"]],
      template: function ComcolPageContentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ComcolPageContentComponent_div_0_Template, 4, 3, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.content);
        }
      },
      dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbWNvbC1wYWdlLWNvbnRlbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUEiLCJmaWxlIjoiY29tY29sLXBhZ2UtY29udGVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbWNvbC9jb21jb2wtcGFnZS1jb250ZW50L2NvbWNvbC1wYWdlLWNvbnRlbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQSxnbEJBQWdsQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 76072:
/*!*******************************************************************************************!*\
  !*** ./src/app/shared/comcol/comcol-page-content/themed-comcol-page-content.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemedComcolPageContentComponent: () => (/* binding */ ThemedComcolPageContentComponent)
/* harmony export */ });
/* harmony import */ var _theme_support_themed_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../theme-support/themed.component */ 8886);
/* harmony import */ var _comcol_page_content_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comcol-page-content.component */ 2688);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);



const _c0 = ["*"];
function ThemedComcolPageContentComponent_ng_template_0_Template(rf, ctx) {}
/**
 * Themed wrapper for {@link ComcolPageContentComponent}
 */
class ThemedComcolPageContentComponent extends _theme_support_themed_component__WEBPACK_IMPORTED_MODULE_0__.ThemedComponent {
  constructor() {
    super(...arguments);
    this.inAndOutputNames = ['title', 'content', 'hasInnerHtml'];
  }
  getComponentName() {
    return 'ComcolPageContentComponent';
  }
  importThemedComponent(themeName) {
    return __webpack_require__(41454)(`./${themeName}/app/shared/comcol/comcol-page-content/comcol-page-content.component`);
  }
  importUnthemedComponent() {
    return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./comcol-page-content.component */ 2688));
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵThemedComcolPageContentComponent_BaseFactory;
      return function ThemedComcolPageContentComponent_Factory(t) {
        return (ɵThemedComcolPageContentComponent_BaseFactory || (ɵThemedComcolPageContentComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](ThemedComcolPageContentComponent)))(t || ThemedComcolPageContentComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ThemedComcolPageContentComponent,
      selectors: [["ds-comcol-page-content"]],
      inputs: {
        title: "title",
        content: "content",
        hasInnerHtml: "hasInnerHtml"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      ngContentSelectors: _c0,
      decls: 5,
      vars: 0,
      consts: [["vcr", ""], ["content", ""]],
      template: function ThemedComcolPageContentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ThemedComcolPageContentComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
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

/***/ 2282:
/*!**********************************************************************************!*\
  !*** ./src/app/shared/comcol/comcol-page-handle/comcol-page-handle.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ComcolPageHandleComponent: () => (/* binding */ ComcolPageHandleComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 90310);




function ComcolPageHandleComponent_p_0_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r0.title));
  }
}
function ComcolPageHandleComponent_p_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ComcolPageHandleComponent_p_0_span_1_Template, 3, 3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r0.getHandle(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.getHandle());
  }
}
/**
 * This component builds a URL from the value of "handle"
 */
class ComcolPageHandleComponent {
  getHandle() {
    return this.content;
  }
  static {
    this.ɵfac = function ComcolPageHandleComponent_Factory(t) {
      return new (t || ComcolPageHandleComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ComcolPageHandleComponent,
      selectors: [["ds-base-comcol-page-handle"]],
      inputs: {
        title: "title",
        content: "content"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 1,
      vars: 1,
      consts: [["class", "d-flex flex-wrap gapx-2 text-break", 4, "ngIf"], [1, "d-flex", "flex-wrap", "gapx-2", "text-break"], ["class", "mb-0", 4, "ngIf"], [3, "href"], [1, "mb-0"]],
      template: function ComcolPageHandleComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ComcolPageHandleComponent_p_0_Template, 4, 3, "p", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.content);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbWNvbC1wYWdlLWhhbmRsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQSIsImZpbGUiOiJjb21jb2wtcGFnZS1oYW5kbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqLyJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbWNvbC9jb21jb2wtcGFnZS1oYW5kbGUvY29tY29sLXBhZ2UtaGFuZGxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBO0FBQ0EsZ2xCQUFnbEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqLyJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 57632:
/*!*****************************************************************************************!*\
  !*** ./src/app/shared/comcol/comcol-page-handle/themed-comcol-page-handle.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemedComcolPageHandleComponent: () => (/* binding */ ThemedComcolPageHandleComponent)
/* harmony export */ });
/* harmony import */ var _theme_support_themed_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../theme-support/themed.component */ 8886);
/* harmony import */ var _comcol_page_handle_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comcol-page-handle.component */ 2282);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);



const _c0 = ["*"];
function ThemedComcolPageHandleComponent_ng_template_0_Template(rf, ctx) {}
/**
 * Themed wrapper for BreadcrumbsComponent
 */
class ThemedComcolPageHandleComponent extends _theme_support_themed_component__WEBPACK_IMPORTED_MODULE_0__.ThemedComponent {
  constructor() {
    super(...arguments);
    this.inAndOutputNames = ['title', 'content'];
  }
  getComponentName() {
    return 'ComcolPageHandleComponent';
  }
  importThemedComponent(themeName) {
    return __webpack_require__(85830)(`./${themeName}/app/shared/comcol/comcol-page-handle/comcol-page-handle.component`);
  }
  importUnthemedComponent() {
    return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./comcol-page-handle.component */ 2282));
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵThemedComcolPageHandleComponent_BaseFactory;
      return function ThemedComcolPageHandleComponent_Factory(t) {
        return (ɵThemedComcolPageHandleComponent_BaseFactory || (ɵThemedComcolPageHandleComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](ThemedComcolPageHandleComponent)))(t || ThemedComcolPageHandleComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ThemedComcolPageHandleComponent,
      selectors: [["ds-comcol-page-handle"]],
      inputs: {
        title: "title",
        content: "content"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      ngContentSelectors: _c0,
      decls: 5,
      vars: 0,
      consts: [["vcr", ""], ["content", ""]],
      template: function ThemedComcolPageHandleComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ThemedComcolPageHandleComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
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

/***/ 23348:
/*!**********************************************************************************!*\
  !*** ./src/app/shared/comcol/comcol-page-header/comcol-page-header.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ComcolPageHeaderComponent: () => (/* binding */ ComcolPageHeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 90310);


function ComcolPageHeaderComponent_h1_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.name);
  }
}
class ComcolPageHeaderComponent {
  static {
    this.ɵfac = function ComcolPageHeaderComponent_Factory(t) {
      return new (t || ComcolPageHeaderComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ComcolPageHeaderComponent,
      selectors: [["ds-comcol-page-header"]],
      inputs: {
        name: "name"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 1,
      vars: 1,
      consts: [[4, "ngIf"]],
      template: function ComcolPageHeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ComcolPageHeaderComponent_h1_0_Template, 2, 1, "h1", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.name);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbWNvbC1wYWdlLWhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQSIsImZpbGUiOiJjb21jb2wtcGFnZS1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqLyJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbWNvbC9jb21jb2wtcGFnZS1oZWFkZXIvY29tY29sLXBhZ2UtaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBO0FBQ0EsZ2xCQUFnbEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqLyJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 31136:
/*!******************************************************************************!*\
  !*** ./src/app/shared/comcol/comcol-page-logo/comcol-page-logo.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ComcolPageLogoComponent: () => (/* binding */ ComcolPageLogoComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _core_shared_bitstream_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/shared/bitstream.model */ 33376);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 90310);



function ComcolPageLogoComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1)(1, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("error", function ComcolPageLogoComponent_div_0_Template_img_error_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.errorHandler($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r1.logo._links.content.href, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("alt", ctx_r1.alternateText ? ctx_r1.alternateText : null);
  }
}
class ComcolPageLogoComponent {
  constructor() {
    /**
     * The default 'holder.js' image
     */
    this.holderSource = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2293%22%20height%3D%22120%22%20viewBox%3D%220%200%2093%20120%22%20preserveAspectRatio%3D%22none%22%3E%3C!--%0ASource%20URL%3A%20holder.js%2F93x120%3Ftext%3DNo%20Thumbnail%0ACreated%20with%20Holder.js%202.8.2.%0ALearn%20more%20at%20http%3A%2F%2Fholderjs.com%0A(c)%202012-2015%20Ivan%20Malopinsky%20-%20http%3A%2F%2Fimsky.co%0A--%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%3C!%5BCDATA%5B%23holder_1543e460b05%20text%20%7B%20fill%3A%23AAAAAA%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%5D%5D%3E%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1543e460b05%22%3E%3Crect%20width%3D%2293%22%20height%3D%22120%22%20fill%3D%22%23EEEEEE%22%2F%3E%3Cg%3E%3Ctext%20x%3D%2235.6171875%22%20y%3D%2257%22%3ENo%3C%2Ftext%3E%3Ctext%20x%3D%2210.8125%22%20y%3D%2272%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E';
  }
  errorHandler(event) {
    event.currentTarget.src = this.holderSource;
  }
  static {
    this.ɵfac = function ComcolPageLogoComponent_Factory(t) {
      return new (t || ComcolPageLogoComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ComcolPageLogoComponent,
      selectors: [["ds-comcol-page-logo"]],
      inputs: {
        logo: "logo",
        alternateText: "alternateText"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 1,
      vars: 1,
      consts: [["class", "dso-logo mb-3", 4, "ngIf"], [1, "dso-logo", "mb-3"], [1, "w-100", "img-fluid", 3, "error", "src"]],
      template: function ComcolPageLogoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ComcolPageLogoComponent_div_0_Template, 2, 2, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.logo);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\nimg[_ngcontent-%COMP%] {\n  max-width: var(--ds-comcol-logo-max-width);\n  max-height: var(--ds-comcol-logo-max-height);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbWNvbC1wYWdlLWxvZ28uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQTtFQUNFLDBDQUFBO0VBQ0EsNENBQUE7QUFDRiIsImZpbGUiOiJjb21jb2wtcGFnZS1sb2dvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi9cbmltZyB7XG4gIG1heC13aWR0aDogdmFyKC0tZHMtY29tY29sLWxvZ28tbWF4LXdpZHRoKTtcbiAgbWF4LWhlaWdodDogdmFyKC0tZHMtY29tY29sLWxvZ28tbWF4LWhlaWdodCk7XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbWNvbC9jb21jb2wtcGFnZS1sb2dvL2NvbWNvbC1wYWdlLWxvZ28uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQTtFQUNFLDBDQUFBO0VBQ0EsNENBQUE7QUFDRjtBQUNBLGd3QkFBZ3dCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi9cbmltZyB7XG4gIG1heC13aWR0aDogdmFyKC0tZHMtY29tY29sLWxvZ28tbWF4LXdpZHRoKTtcbiAgbWF4LWhlaWdodDogdmFyKC0tZHMtY29tY29sLWxvZ28tbWF4LWhlaWdodCk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 10695:
/*!***************************************************************************************!*\
  !*** ./src/app/shared/comcol/sections/comcol-browse-by/comcol-browse-by.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ComcolBrowseByComponent: () => (/* binding */ ComcolBrowseByComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var _browse_by_browse_by_switcher_browse_by_switcher_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../browse-by/browse-by-switcher/browse-by-switcher.component */ 84009);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 14354);






class ComcolBrowseByComponent {
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
    this.scope$ = this.route.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(data => data.scope));
  }
  static {
    this.ɵfac = function ComcolBrowseByComponent_Factory(t) {
      return new (t || ComcolBrowseByComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ComcolBrowseByComponent,
      selectors: [["ds-comcol-browse-by"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 3,
      vars: 7,
      consts: [[3, "browseByType", "displayTitle", "scope"]],
      template: function ComcolBrowseByComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "ds-browse-by-switcher", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("browseByType", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 3, ctx.browseByType$))("displayTitle", false)("scope", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 5, ctx.scope$));
        }
      },
      dependencies: [_browse_by_browse_by_switcher_browse_by_switcher_component__WEBPACK_IMPORTED_MODULE_0__.BrowseBySwitcherComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbWNvbC1icm93c2UtYnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUEiLCJmaWxlIjoiY29tY29sLWJyb3dzZS1ieS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbWNvbC9zZWN0aW9ucy9jb21jb2wtYnJvd3NlLWJ5L2NvbWNvbC1icm93c2UtYnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQSx3a0JBQXdrQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 59397:
/*!*************************************************************************************************!*\
  !*** ./src/app/shared/comcol/sections/comcol-search-section/comcol-search-section.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ComcolSearchSectionComponent: () => (/* binding */ ComcolSearchSectionComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var _config_app_config_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../config/app-config.interface */ 82640);
/* harmony import */ var _core_shared_search_search_configuration_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/shared/search/search-configuration.service */ 68611);
/* harmony import */ var _my_dspace_page_my_dspace_configuration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../my-dspace-page/my-dspace-configuration.service */ 787);
/* harmony import */ var _empty_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../empty.util */ 82777);
/* harmony import */ var _search_themed_search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../search/themed-search.component */ 54992);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 14354);










/**
 * The search tab on community & collection pages
 */
class ComcolSearchSectionComponent {
  constructor(appConfig, route) {
    this.appConfig = appConfig;
    this.route = route;
  }
  ngOnInit() {
    this.comcol$ = this.route.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(data => data.dso.payload));
    this.showSidebar$ = this.comcol$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(comcol => (0,_empty_util__WEBPACK_IMPORTED_MODULE_3__.hasValue)(comcol) && this.appConfig[comcol.type].searchSection.showSidebar));
  }
  static {
    this.ɵfac = function ComcolSearchSectionComponent_Factory(t) {
      return new (t || ComcolSearchSectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_config_app_config_interface__WEBPACK_IMPORTED_MODULE_0__.APP_CONFIG), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: ComcolSearchSectionComponent,
      selectors: [["ds-comcol-search-section"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵProvidersFeature"]([{
        provide: _my_dspace_page_my_dspace_configuration_service__WEBPACK_IMPORTED_MODULE_2__.SEARCH_CONFIG_SERVICE,
        useClass: _core_shared_search_search_configuration_service__WEBPACK_IMPORTED_MODULE_1__.SearchConfigurationService
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵStandaloneFeature"]],
      decls: 4,
      vars: 11,
      consts: [[3, "configuration", "showSidebar", "showScopeSelector", "hideScopeInUrl", "scope"]],
      template: function ComcolSearchSectionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "ds-search", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "async");
        }
        if (rf & 2) {
          let tmp_0_0;
          let tmp_4_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("configuration", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 5, ctx.comcol$)) == null ? null : tmp_0_0.type)("showSidebar", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 7, ctx.showSidebar$))("showScopeSelector", false)("hideScopeInUrl", true)("scope", (tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 9, ctx.comcol$)) == null ? null : tmp_4_0.id);
        }
      },
      dependencies: [_search_themed_search_component__WEBPACK_IMPORTED_MODULE_4__.ThemedSearchComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbWNvbC1zZWFyY2gtc2VjdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQSIsImZpbGUiOiJjb21jb2wtc2VhcmNoLXNlY3Rpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqLyJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbWNvbC9zZWN0aW9ucy9jb21jb2wtc2VhcmNoLXNlY3Rpb24vY29tY29sLXNlYXJjaC1zZWN0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBO0FBQ0Esd2xCQUF3bEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqLyJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 7754:
/*!****************************************************************************************************************************************!*\
  !*** ./src/themes/ lazy ^\.\/.*\/app\/shared\/comcol\/comcol\-page\-browse\-by\/comcol\-page\-browse\-by\.component$ namespace object ***!
  \****************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./custom/app/shared/comcol/comcol-page-browse-by/comcol-page-browse-by.component": [
		69019,
		"src_themes_custom_app_shared_comcol_comcol-page-browse-by_comcol-page-browse-by_component_ts"
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
webpackAsyncContext.id = 7754;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 41454:
/*!**********************************************************************************************************************************!*\
  !*** ./src/themes/ lazy ^\.\/.*\/app\/shared\/comcol\/comcol\-page\-content\/comcol\-page\-content\.component$ namespace object ***!
  \**********************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./custom/app/shared/comcol/comcol-page-content/comcol-page-content.component": [
		14727,
		"src_themes_custom_app_shared_comcol_comcol-page-content_comcol-page-content_component_ts"
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
webpackAsyncContext.id = 41454;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 85830:
/*!********************************************************************************************************************************!*\
  !*** ./src/themes/ lazy ^\.\/.*\/app\/shared\/comcol\/comcol\-page\-handle\/comcol\-page\-handle\.component$ namespace object ***!
  \********************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./custom/app/shared/comcol/comcol-page-handle/comcol-page-handle.component": [
		86409,
		"src_themes_custom_app_shared_comcol_comcol-page-handle_comcol-page-handle_component_ts"
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
webpackAsyncContext.id = 85830;
module.exports = webpackAsyncContext;

/***/ })

}]);
//# sourceMappingURL=default-src_app_browse-by_browse-by-guard_ts-src_app_browse-by_browse-by-i18n-breadcrumb_reso-0be8bb.js.map