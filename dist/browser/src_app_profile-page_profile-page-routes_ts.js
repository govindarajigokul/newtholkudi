(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_app_profile-page_profile-page-routes_ts"],{

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

/***/ 98480:
/*!*********************************************************************************************!*\
  !*** ./src/app/profile-page/profile-claim-item-modal/profile-claim-item-modal.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfileClaimItemModalComponent: () => (/* binding */ ProfileClaimItemModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 83485);
/* harmony import */ var _core_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/breadcrumbs/dso-name.service */ 96526);
/* harmony import */ var _core_shared_dspace_object_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/shared/dspace-object.model */ 76829);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/shared/operators */ 55757);
/* harmony import */ var _core_shared_view_mode_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/shared/view-mode.model */ 78448);
/* harmony import */ var _item_page_item_page_routing_paths__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../item-page/item-page-routing-paths */ 90887);
/* harmony import */ var _shared_btn_disabled_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/btn-disabled.directive */ 60456);
/* harmony import */ var _shared_dso_selector_modal_wrappers_dso_selector_modal_wrapper_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/dso-selector/modal-wrappers/dso-selector-modal-wrapper.component */ 54705);
/* harmony import */ var _shared_object_collection_collection_element_link_type__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/object-collection/collection-element-link.type */ 7581);
/* harmony import */ var _shared_object_collection_shared_listable_object_listable_object_component_loader_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/object-collection/shared/listable-object/listable-object-component-loader.component */ 17191);
/* harmony import */ var _profile_claim_profile_claim_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../profile-claim/profile-claim.service */ 8526);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 49966);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 14354);






















function ProfileClaimItemModalComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 9)(1, "button", 16, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ProfileClaimItemModalComponent_div_14_Template_button_click_1_listener() {
      const listEntry_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r2.selectItem(listEntry_r2.indexableObject));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "ds-listable-object-component-loader", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const listEntry_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("title", ctx_r2.dsoNameService.getName(listEntry_r2.indexableObject));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("object", listEntry_r2)("viewMode", ctx_r2.viewMode)("linkType", ctx_r2.linkTypes.None);
  }
}
/**
 * Component representing a modal that show a list of suggested profile item to claim
 */
class ProfileClaimItemModalComponent extends _shared_dso_selector_modal_wrappers_dso_selector_modal_wrapper_component__WEBPACK_IMPORTED_MODULE_6__.DSOSelectorModalWrapperComponent {
  constructor(activeModal, route, router, profileClaimService, dsoNameService) {
    super(activeModal, route);
    this.activeModal = activeModal;
    this.route = route;
    this.router = router;
    this.profileClaimService = profileClaimService;
    this.dsoNameService = dsoNameService;
    /**
     * List of suggested profiles, if any
     */
    this.listEntries$ = new rxjs__WEBPACK_IMPORTED_MODULE_11__.BehaviorSubject(null);
    /**
     * The view mode of the listed objects
     */
    this.viewMode = _core_shared_view_mode_model__WEBPACK_IMPORTED_MODULE_3__.ViewMode.ListElement;
    /**
     * The available link types
     */
    this.linkTypes = _shared_object_collection_collection_element_link_type__WEBPACK_IMPORTED_MODULE_7__.CollectionElementLinkType;
    /**
     * A boolean representing form checkbox status
     */
    this.checked = false;
    /**
     * An event fired when user click on submit button
     */
    this.create = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter();
  }
  /**
   * Retrieve suggested profiles, if any
   */
  ngOnInit() {
    this.profileClaimService.searchForSuggestions(this.dso).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_2__.getFirstCompletedRemoteData)()).subscribe(result => this.listEntries$.next(result));
  }
  /**
   * Close modal and Navigate to given DSO
   *
   * @param dso
   */
  selectItem(dso) {
    this.close();
    this.navigate(dso);
  }
  /**
   * Navigate to given DSO
   *
   * @param dso
   */
  navigate(dso) {
    this.router.navigate([(0,_item_page_item_page_routing_paths__WEBPACK_IMPORTED_MODULE_4__.getItemPageRoute)(dso)]);
  }
  /**
   * Change the status of form's checkbox
   */
  toggleCheckbox() {
    this.checked = !this.checked;
  }
  /**
   * Emit an event when profile should be created from scratch
   */
  createFromScratch() {
    this.create.emit();
    this.close();
  }
  static {
    this.ɵfac = function ProfileClaimItemModalComponent_Factory(t) {
      return new (t || ProfileClaimItemModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_profile_claim_profile_claim_service__WEBPACK_IMPORTED_MODULE_9__.ProfileClaimService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_0__.DSONameService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
      type: ProfileClaimItemModalComponent,
      selectors: [["ds-profile-claim-item-modal"]],
      inputs: {
        dso: "dso"
      },
      outputs: {
        create: "create"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵStandaloneFeature"]],
      decls: 27,
      vars: 17,
      consts: [["listEntryElement", ""], [1, "modal-header"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["role", "alert", 1, "alert", "alert-info"], [1, "dropdown-divider"], [1, "scrollable-menu", "list-group", "container"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "row"], [1, "col-md", "mt-2"], [1, "modal-footer"], [1, "mr-5"], ["type", "checkbox", 3, "change", "checked"], ["type", "submit", 1, "btn", "btn-primary", "ml-5", "mr-2", 3, "click", "dsBtnDisabled"], [1, "fas", "fa-plus"], [1, "list-group-item", "list-group-item-action", "border-0", "list-entry", 3, "click", "title"], [3, "object", "viewMode", "linkType"]],
      template: function ProfileClaimItemModalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div")(1, "div", 1)(2, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ProfileClaimItemModalComponent_Template_button_click_5_listener() {
            return ctx.close();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 4)(9, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](11, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](12, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](14, ProfileClaimItemModalComponent_div_14_Template, 4, 4, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](15, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](17, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "div", 11)(19, "div", 12)(20, "input", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function ProfileClaimItemModalComponent_Template_input_change_20_listener() {
            return ctx.toggleCheckbox();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](21);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](22, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "button", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ProfileClaimItemModalComponent_Template_button_click_23_listener() {
            return ctx.createFromScratch();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](24, "i", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](25);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](26, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          let tmp_2_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 7, "dso-selector.claim.item.head"));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](11, 9, "dso-selector.claim.item.body"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](15, 11, ctx.listEntries$)) == null ? null : tmp_2_0.payload.page);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("checked", ctx.checked);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](22, 13, "dso-selector.claim.item.not-mine-label"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("dsBtnDisabled", !ctx.checked);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](26, 15, "dso-selector.claim.item.create-from-scratch"), " ");
        }
      },
      dependencies: [_shared_object_collection_shared_listable_object_listable_object_component_loader_component__WEBPACK_IMPORTED_MODULE_8__.ListableObjectComponentLoaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_14__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _shared_btn_disabled_directive__WEBPACK_IMPORTED_MODULE_5__.BtnDisabledDirective],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 8526:
/*!*********************************************************************!*\
  !*** ./src/app/profile-page/profile-claim/profile-claim.service.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfileClaimService: () => (/* binding */ ProfileClaimService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 17796);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/shared/operators */ 55757);
/* harmony import */ var _core_shared_search_search_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/shared/search/search.service */ 55180);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/empty.util */ 82777);
/* harmony import */ var _shared_remote_data_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/remote-data.utils */ 43404);
/* harmony import */ var _shared_search_models_paginated_search_options_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/search/models/paginated-search-options.model */ 33550);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 90310);









/**
 * Service that handle profiles claim.
 */
class ProfileClaimService {
  constructor(searchService) {
    this.searchService = searchService;
  }
  /**
   * Returns true if it is possible to suggest profiles to be claimed to the given eperson.
   *
   * @param eperson the eperson
   */
  hasProfilesToSuggest(eperson) {
    return this.searchForSuggestions(eperson).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_0__.getFirstCompletedRemoteData)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(rd => {
      return (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_2__.isNotEmpty)(rd) && rd.hasSucceeded && rd.payload?.page?.length > 0;
    }));
  }
  /**
   * Returns profiles that could be associated with the given user.
   *
   * @param eperson the user
   */
  searchForSuggestions(eperson) {
    const query = this.personQueryData(eperson);
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_2__.isEmpty)(query)) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)((0,_shared_remote_data_utils__WEBPACK_IMPORTED_MODULE_3__.createNoContentRemoteDataObject)());
    }
    return this.lookup(query);
  }
  /**
   * Search object by the given query.
   *
   * @param query the query for the search
   */
  lookup(query) {
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_2__.isEmpty)(query)) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)((0,_shared_remote_data_utils__WEBPACK_IMPORTED_MODULE_3__.createNoContentRemoteDataObject)());
    }
    return this.searchService.search(new _shared_search_models_paginated_search_options_model__WEBPACK_IMPORTED_MODULE_4__.PaginatedSearchOptions({
      configuration: 'eperson_claims',
      query: query
    }), null, false, true);
  }
  /**
   * Return the search query for person lookup, from the given eperson
   *
   * @param eperson The eperson to use for the lookup
   */
  personQueryData(eperson) {
    if (eperson && eperson.email) {
      return 'person.email:' + eperson.email;
    } else {
      return null;
    }
  }
  static {
    this.ɵfac = function ProfileClaimService_Factory(t) {
      return new (t || ProfileClaimService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_core_shared_search_search_service__WEBPACK_IMPORTED_MODULE_1__.SearchService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
      token: ProfileClaimService,
      factory: ProfileClaimService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 82932:
/*!*************************************************************************************************!*\
  !*** ./src/app/profile-page/profile-page-metadata-form/profile-page-metadata-form.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfilePageMetadataFormComponent: () => (/* binding */ ProfilePageMetadataFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-dynamic-forms/core */ 94403);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/cloneDeep */ 46123);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ 88280);
/* harmony import */ var _core_eperson_eperson_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/eperson/eperson-data.service */ 74449);
/* harmony import */ var _core_eperson_models_eperson_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/eperson/models/eperson.model */ 26349);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/shared/operators */ 55757);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/empty.util */ 82777);
/* harmony import */ var _shared_form_builder_form_builder_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/form/builder/form-builder.service */ 1216);
/* harmony import */ var _shared_form_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/form/form.component */ 99386);
/* harmony import */ var _shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/notifications/notifications.service */ 69472);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 96439);

















function ProfilePageMetadataFormComponent_ds_form_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "ds-form", 1);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formId", "profile-page-metadata-form-id")("formModel", ctx_r0.formModel)("formGroup", ctx_r0.formGroup)("displaySubmit", false)("displayCancel", false);
  }
}
/**
 * Component for a user to edit their metadata
 * Displays a form containing:
 * - readonly email field,
 * - required first name text field
 * - required last name text field
 * - phone text field
 * - language dropdown
 */
class ProfilePageMetadataFormComponent {
  constructor(formBuilderService, translate, epersonService, notificationsService) {
    this.formBuilderService = formBuilderService;
    this.translate = translate;
    this.epersonService = epersonService;
    this.notificationsService = notificationsService;
    /**
     * The form's input models
     */
    this.formModel = [new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_10__.DynamicInputModel({
      id: 'email',
      name: 'email',
      readOnly: true,
      disabled: true
    }), new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_10__.DynamicInputModel({
      id: 'firstname',
      name: 'eperson.firstname',
      required: true,
      validators: {
        required: null
      },
      errorMessages: {
        required: 'This field is required'
      },
      autoComplete: 'given-name'
    }), new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_10__.DynamicInputModel({
      id: 'lastname',
      name: 'eperson.lastname',
      required: true,
      validators: {
        required: null
      },
      errorMessages: {
        required: 'This field is required'
      },
      autoComplete: 'family-name'
    }), new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_10__.DynamicInputModel({
      id: 'phone',
      name: 'eperson.phone',
      autoComplete: 'tel'
    }), new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_10__.DynamicSelectModel({
      id: 'language',
      name: 'eperson.language'
    })];
    /**
     * Prefix for the form's label messages of this component
     */
    this.LABEL_PREFIX = 'profile.metadata.form.label.';
    /**
     * Prefix for the form's error messages of this component
     */
    this.ERROR_PREFIX = 'profile.metadata.form.error.';
    /**
     * Prefix for the notification messages of this component
     */
    this.NOTIFICATION_PREFIX = 'profile.metadata.form.notifications.';
  }
  ngOnInit() {
    this.activeLangs = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.languages.filter(MyLangConfig => MyLangConfig.active === true);
    this.setFormValues();
    this.updateFieldTranslations();
    this.translate.onLangChange.subscribe(() => {
      this.updateFieldTranslations();
    });
  }
  /**
   * Loop over all the form's input models and set their values depending on the user's metadata
   * Create the FormGroup
   */
  setFormValues() {
    this.formModel.forEach(fieldModel => {
      if (fieldModel.name === 'email') {
        fieldModel.value = this.user.email;
      } else {
        fieldModel.value = this.user.firstMetadataValue(fieldModel.name);
      }
      if (fieldModel.id === 'language') {
        fieldModel.options = this.activeLangs.map(langConfig => Object.assign({
          value: langConfig.code,
          label: langConfig.label
        }));
      }
    });
    this.formGroup = this.formBuilderService.createFormGroup(this.formModel);
  }
  /**
   * Update the translations of the field labels and error messages
   */
  updateFieldTranslations() {
    this.formModel.forEach(fieldModel => {
      fieldModel.label = this.translate.instant(this.LABEL_PREFIX + fieldModel.id);
      if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_5__.isNotEmpty)(fieldModel.validators)) {
        fieldModel.errorMessages = {};
        Object.keys(fieldModel.validators).forEach(key => {
          fieldModel.errorMessages[key] = this.translate.instant(this.ERROR_PREFIX + fieldModel.id + '.' + key);
        });
      }
    });
  }
  /**
   * Update the user's metadata
   *
   * Sends a patch request for updating the user's metadata when at least one value changed or got added/removed and the
   * form is valid.
   * Nothing happens when the form is invalid or no metadata changed.
   *
   * Returns false when nothing happened.
   */
  updateProfile() {
    if (!this.formGroup.valid) {
      return false;
    }
    const newMetadata = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0___default()(this.user.metadata);
    let changed = false;
    this.formModel.filter(fieldModel => fieldModel.id !== 'email').forEach(fieldModel => {
      if (newMetadata.hasOwnProperty(fieldModel.name) && newMetadata[fieldModel.name].length > 0) {
        if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_5__.hasValue)(fieldModel.value)) {
          if (newMetadata[fieldModel.name][0].value !== fieldModel.value) {
            newMetadata[fieldModel.name][0].value = fieldModel.value;
            changed = true;
          }
        } else {
          newMetadata[fieldModel.name] = [];
          changed = true;
        }
      } else if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_5__.hasValue)(fieldModel.value)) {
        newMetadata[fieldModel.name] = [{
          value: fieldModel.value,
          language: null
        }];
        changed = true;
      }
    });
    if (changed) {
      this.epersonService.update(Object.assign(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0___default()(this.user), {
        metadata: newMetadata
      })).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_4__.getFirstSucceededRemoteData)(), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_4__.getRemoteDataPayload)()).subscribe(user => {
        this.user = user;
        this.setFormValues();
        this.notificationsService.success(this.translate.instant(this.NOTIFICATION_PREFIX + 'success.title'), this.translate.instant(this.NOTIFICATION_PREFIX + 'success.content'));
      });
    }
    return changed;
  }
  static {
    this.ɵfac = function ProfilePageMetadataFormComponent_Factory(t) {
      return new (t || ProfilePageMetadataFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_shared_form_builder_form_builder_service__WEBPACK_IMPORTED_MODULE_6__.FormBuilderService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_core_eperson_eperson_data_service__WEBPACK_IMPORTED_MODULE_2__.EPersonDataService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_8__.NotificationsService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
      type: ProfilePageMetadataFormComponent,
      selectors: [["ds-base-profile-page-metadata-form"]],
      inputs: {
        user: "user"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵStandaloneFeature"]],
      decls: 1,
      vars: 1,
      consts: [[3, "formId", "formModel", "formGroup", "displaySubmit", "displayCancel", 4, "ngIf"], [3, "formId", "formModel", "formGroup", "displaySubmit", "displayCancel"]],
      template: function ProfilePageMetadataFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, ProfilePageMetadataFormComponent_ds_form_0_Template, 1, 5, "ds-form", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.formModel);
        }
      },
      dependencies: [_shared_form_form_component__WEBPACK_IMPORTED_MODULE_7__.FormComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 87370:
/*!********************************************************************************************************!*\
  !*** ./src/app/profile-page/profile-page-metadata-form/themed-profile-page-metadata-form.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemedProfilePageMetadataFormComponent: () => (/* binding */ ThemedProfilePageMetadataFormComponent)
/* harmony export */ });
/* harmony import */ var _core_eperson_models_eperson_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/eperson/models/eperson.model */ 26349);
/* harmony import */ var _shared_theme_support_themed_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/theme-support/themed.component */ 8886);
/* harmony import */ var _profile_page_metadata_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile-page-metadata-form.component */ 82932);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 90310);




const _c0 = ["*"];
function ThemedProfilePageMetadataFormComponent_ng_template_0_Template(rf, ctx) {}
/**
 * Themed wrapper for {@link ProfilePageMetadataFormComponent}
 */
class ThemedProfilePageMetadataFormComponent extends _shared_theme_support_themed_component__WEBPACK_IMPORTED_MODULE_1__.ThemedComponent {
  constructor() {
    super(...arguments);
    this.inAndOutputNames = ['user'];
  }
  getComponentName() {
    return 'ProfilePageMetadataFormComponent';
  }
  importThemedComponent(themeName) {
    return __webpack_require__(46020)(`./${themeName}/app/profile-page/profile-page-metadata-form/profile-page-metadata-form.component`);
  }
  importUnthemedComponent() {
    return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./profile-page-metadata-form.component */ 82932));
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵThemedProfilePageMetadataFormComponent_BaseFactory;
      return function ThemedProfilePageMetadataFormComponent_Factory(t) {
        return (ɵThemedProfilePageMetadataFormComponent_BaseFactory || (ɵThemedProfilePageMetadataFormComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](ThemedProfilePageMetadataFormComponent)))(t || ThemedProfilePageMetadataFormComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: ThemedProfilePageMetadataFormComponent,
      selectors: [["ds-profile-page-metadata-form"]],
      inputs: {
        user: "user"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
      ngContentSelectors: _c0,
      decls: 5,
      vars: 0,
      consts: [["vcr", ""], ["content", ""]],
      template: function ThemedProfilePageMetadataFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ThemedProfilePageMetadataFormComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", null, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      },
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 12474:
/*!*****************************************************************************************************!*\
  !*** ./src/app/profile-page/profile-page-researcher-form/profile-page-researcher-form.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfilePageResearcherFormComponent: () => (/* binding */ ProfilePageResearcherFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var ngx_ui_switch__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-ui-switch */ 74253);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 83485);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 78374);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 84975);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 21252);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 74671);
/* harmony import */ var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/auth/auth.service */ 67116);
/* harmony import */ var _core_eperson_models_eperson_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/eperson/models/eperson.model */ 26349);
/* harmony import */ var _core_profile_researcher_profile_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/profile/researcher-profile-data.service */ 98926);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/shared/operators */ 55757);
/* harmony import */ var _shared_btn_disabled_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/btn-disabled.directive */ 60456);
/* harmony import */ var _shared_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/confirmation-modal/confirmation-modal.component */ 9284);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/empty.util */ 82777);
/* harmony import */ var _shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/notifications/notifications.service */ 69472);
/* harmony import */ var _shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/utils/follow-link-config.model */ 67600);
/* harmony import */ var _shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/utils/var.directive */ 18226);
/* harmony import */ var _profile_claim_profile_claim_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../profile-claim/profile-claim.service */ 8526);
/* harmony import */ var _profile_claim_item_modal_profile_claim_item_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../profile-claim-item-modal/profile-claim-item-modal.component */ 98480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 49966);




























function ProfilePageResearcherFormComponent_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div")(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "p", 3)(5, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "ui-switch", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("change", function ProfilePageResearcherFormComponent_div_0_div_1_Template_ui_switch_change_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
      const researcherProfile_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().ngVar;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r2.toggleProfileVisibility(researcherProfile_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const researcherProfile_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().ngVar;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](3, 5, "researcher.profile.associated"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](7, 7, "researcher.profile.status"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("checkedLabel", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](9, 9, "researcher.profile.public.visibility"))("uncheckedLabel", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](10, 11, "researcher.profile.private.visibility"))("checked", researcherProfile_r2.visible);
  }
}
function ProfilePageResearcherFormComponent_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div")(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](3, 1, "researcher.profile.not.associated"));
  }
}
function ProfilePageResearcherFormComponent_div_0_button_3_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](3, 1, "researcher.profile.action.processing"), " ");
  }
}
function ProfilePageResearcherFormComponent_div_0_button_3_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" \u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](3, 1, "researcher.profile.create.new"), " ");
  }
}
function ProfilePageResearcherFormComponent_div_0_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ProfilePageResearcherFormComponent_div_0_button_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r2.createProfile());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, ProfilePageResearcherFormComponent_div_0_button_3_span_2_Template, 4, 3, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](4, ProfilePageResearcherFormComponent_div_0_button_3_span_4_Template, 4, 3, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("dsBtnDisabled", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](1, 3, ctx_r2.isProcessingCreate()));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](3, 5, ctx_r2.isProcessingCreate()));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](5, 7, ctx_r2.isProcessingCreate()) !== true);
  }
}
function ProfilePageResearcherFormComponent_div_0_ng_container_4_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](3, 1, "researcher.profile.action.processing"), " ");
  }
}
function ProfilePageResearcherFormComponent_div_0_ng_container_4_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" \u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](3, 1, "researcher.profile.delete"), " ");
  }
}
function ProfilePageResearcherFormComponent_div_0_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ProfilePageResearcherFormComponent_div_0_ng_container_4_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r5);
      const researcherProfile_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().ngVar;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r2.viewProfile(researcherProfile_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ProfilePageResearcherFormComponent_div_0_ng_container_4_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r5);
      const researcherProfile_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().ngVar;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r2.deleteProfile(researcherProfile_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](6, ProfilePageResearcherFormComponent_div_0_ng_container_4_span_6_Template, 4, 3, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](8, ProfilePageResearcherFormComponent_div_0_ng_container_4_span_8_Template, 4, 3, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const researcherProfile_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().ngVar;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("dsBtnDisabled", !researcherProfile_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](4, 5, "researcher.profile.view"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("dsBtnDisabled", !researcherProfile_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](7, 7, ctx_r2.isProcessingDelete()));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](9, 9, ctx_r2.isProcessingDelete()) !== true);
  }
}
function ProfilePageResearcherFormComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, ProfilePageResearcherFormComponent_div_0_div_1_Template, 11, 13, "div", 1)(2, ProfilePageResearcherFormComponent_div_0_div_2_Template, 4, 3, "div", 1)(3, ProfilePageResearcherFormComponent_div_0_button_3_Template, 6, 9, "button", 2)(4, ProfilePageResearcherFormComponent_div_0_ng_container_4_Template, 10, 11, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const researcherProfile_r2 = ctx.ngVar;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", researcherProfile_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !researcherProfile_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !researcherProfile_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", researcherProfile_r2);
  }
}
/**
 * Component for a user to create/delete or change their researcher profile.
 */
class ProfilePageResearcherFormComponent {
  constructor(researcherProfileService, profileClaimService, translationService, notificationService, authService, router, modalService) {
    this.researcherProfileService = researcherProfileService;
    this.profileClaimService = profileClaimService;
    this.translationService = translationService;
    this.notificationService = notificationService;
    this.authService = authService;
    this.router = router;
    this.modalService = modalService;
    /**
     * The researcher profile to show.
     */
    this.researcherProfile$ = new rxjs__WEBPACK_IMPORTED_MODULE_13__.BehaviorSubject(null);
    /**
     * A boolean representing if a delete operation is pending
     * @type {BehaviorSubject<boolean>}
     */
    this.processingDelete$ = new rxjs__WEBPACK_IMPORTED_MODULE_13__.BehaviorSubject(false);
    /**
     * A boolean representing if a create delete operation is pending
     * @type {BehaviorSubject<boolean>}
     */
    this.processingCreate$ = new rxjs__WEBPACK_IMPORTED_MODULE_13__.BehaviorSubject(false);
  }
  /**
   * Initialize the component searching the current user researcher profile.
   */
  ngOnInit() {
    // Retrieve researcherProfile if exists
    this.initResearchProfile();
  }
  /**
   * Create a new profile for the current user.
   */
  createProfile() {
    this.processingCreate$.next(true);
    this.authService.getAuthenticatedUserFromStore().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.switchMap)(currentUser => this.profileClaimService.hasProfilesToSuggest(currentUser))).subscribe(hasProfilesToSuggest => {
      if (hasProfilesToSuggest) {
        this.processingCreate$.next(false);
        const modal = this.modalService.open(_profile_claim_item_modal_profile_claim_item_modal_component__WEBPACK_IMPORTED_MODULE_11__.ProfileClaimItemModalComponent);
        modal.componentInstance.dso = this.user;
        modal.componentInstance.create.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.take)(1)).subscribe(() => {
          this.createProfileFromScratch();
        });
      } else {
        this.createProfileFromScratch();
      }
    });
  }
  /**
   * Navigate to the items section to show the profile item details.
   *
   * @param researcherProfile the current researcher profile
   */
  viewProfile(researcherProfile) {
    if (this.researcherProfileItemId != null) {
      this.router.navigate(['items', this.researcherProfileItemId]);
    }
  }
  /**
   * Delete the given researcher profile.
   *
   * @param researcherProfile the profile to delete
   */
  deleteProfile(researcherProfile) {
    const modalRef = this.modalService.open(_shared_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_5__.ConfirmationModalComponent);
    modalRef.componentInstance.headerLabel = 'confirmation-modal.delete-profile.header';
    modalRef.componentInstance.infoLabel = 'confirmation-modal.delete-profile.info';
    modalRef.componentInstance.cancelLabel = 'confirmation-modal.delete-profile.cancel';
    modalRef.componentInstance.confirmLabel = 'confirmation-modal.delete-profile.confirm';
    modalRef.componentInstance.brandColor = 'danger';
    modalRef.componentInstance.confirmIcon = 'fas fa-trash';
    modalRef.componentInstance.response.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.take)(1)).subscribe(confirm => {
      if (confirm) {
        this.processingDelete$.next(true);
        this.researcherProfileService.delete(researcherProfile.id).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_3__.getFirstCompletedRemoteData)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)(response => response.isSuccess)).subscribe(deleted => {
          if (deleted) {
            this.researcherProfile$.next(null);
            this.researcherProfileItemId = null;
          }
          this.processingDelete$.next(false);
        });
      }
    });
  }
  /**
   * Toggle the visibility of the given researcher profile.
   *
   * @param researcherProfile the profile to update
   */
  toggleProfileVisibility(researcherProfile) {
    this.researcherProfileService.setVisibility(researcherProfile, !researcherProfile.visible).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_3__.getFirstCompletedRemoteData)()).subscribe(rd => {
      if (rd.hasSucceeded) {
        this.researcherProfile$.next(rd.payload);
      } else {
        this.notificationService.error(null, this.translationService.get('researcher.profile.change-visibility.fail'));
      }
    });
  }
  /**
   * Return a boolean representing if a delete operation is pending.
   *
   * @return {Observable<boolean>}
   */
  isProcessingDelete() {
    return this.processingDelete$.asObservable();
  }
  /**
   * Return a boolean representing if a create operation is pending.
   *
   * @return {Observable<boolean>}
   */
  isProcessingCreate() {
    return this.processingCreate$.asObservable();
  }
  /**
   * Create a new profile related to the current user from scratch.
   */
  createProfileFromScratch() {
    this.processingCreate$.next(true);
    this.researcherProfileService.create().pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_3__.getFirstCompletedRemoteData)()).subscribe(remoteData => {
      this.processingCreate$.next(false);
      if (remoteData.isSuccess) {
        this.initResearchProfile();
        this.notificationService.success(null, this.translationService.get('researcher.profile.create.success'));
      } else {
        this.notificationService.error(null, this.translationService.get('researcher.profile.create.fail'));
      }
    });
  }
  /**
   * Initializes the researcherProfile and researcherProfileItemId attributes using the profile of the current user.
   */
  initResearchProfile() {
    this.researcherProfileService.findById(this.user.id, false, true, (0,_shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_8__.followLink)('item')).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_3__.getFirstSucceededRemoteDataPayload)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.tap)(researcherProfile => this.researcherProfile$.next(researcherProfile)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.mergeMap)(researcherProfile => this.researcherProfileService.findRelatedItemId(researcherProfile))).subscribe(itemId => {
      if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_6__.isNotEmpty)(itemId)) {
        this.researcherProfileItemId = itemId;
      }
    });
  }
  static {
    this.ɵfac = function ProfilePageResearcherFormComponent_Factory(t) {
      return new (t || ProfilePageResearcherFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_core_profile_researcher_profile_data_service__WEBPACK_IMPORTED_MODULE_2__.ResearcherProfileDataService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_profile_claim_profile_claim_service__WEBPACK_IMPORTED_MODULE_10__.ProfileClaimService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_7__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_20__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__.NgbModal));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
      type: ProfilePageResearcherFormComponent,
      selectors: [["ds-profile-page-researcher-form"]],
      inputs: {
        user: "user"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 3,
      consts: [[4, "ngVar"], [4, "ngIf"], ["class", "btn btn-primary mr-2", 3, "dsBtnDisabled", "click", 4, "ngIf"], [1, "align-items-center", "researcher-profile-switch"], [1, "mr-3"], [3, "change", "checkedLabel", "uncheckedLabel", "checked"], [1, "btn", "btn-primary", "mr-2", 3, "click", "dsBtnDisabled"], [1, "fas", "fa-circle-notch", "fa-spin"], [1, "fas", "fa-plus"], [1, "fas", "fa-info-circle"], [1, "btn", "btn-danger", 3, "click", "dsBtnDisabled"], [1, "fas", "fa-trash-alt"]],
      template: function ProfilePageResearcherFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](0, ProfilePageResearcherFormComponent_div_0_Template, 5, 4, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](1, "async");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngVar", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](1, 1, ctx.researcherProfile$));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_22__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_22__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslatePipe, ngx_ui_switch__WEBPACK_IMPORTED_MODULE_23__.UiSwitchModule, ngx_ui_switch__WEBPACK_IMPORTED_MODULE_23__.UiSwitchComponent, _shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_9__.VarDirective, _shared_btn_disabled_directive__WEBPACK_IMPORTED_MODULE_4__.BtnDisabledDirective],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 55624:
/*!*****************************************************!*\
  !*** ./src/app/profile-page/profile-page-routes.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ROUTES: () => (/* binding */ ROUTES)
/* harmony export */ });
/* harmony import */ var _core_breadcrumbs_i18n_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/breadcrumbs/i18n-breadcrumb.resolver */ 72059);
/* harmony import */ var _themed_profile_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./themed-profile-page.component */ 36016);


const ROUTES = [{
  path: '',
  pathMatch: 'full',
  component: _themed_profile_page_component__WEBPACK_IMPORTED_MODULE_1__.ThemedProfilePageComponent,
  resolve: {
    breadcrumb: _core_breadcrumbs_i18n_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_0__.i18nBreadcrumbResolver
  },
  data: {
    breadcrumbKey: 'profile',
    title: 'profile.title'
  }
}];

/***/ }),

/***/ 13738:
/*!*************************************************************************************************!*\
  !*** ./src/app/profile-page/profile-page-security-form/profile-page-security-form.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfilePageSecurityFormComponent: () => (/* binding */ ProfilePageSecurityFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-dynamic-forms/core */ 94403);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var _core_eperson_eperson_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/eperson/eperson-data.service */ 74449);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/shared/operators */ 55757);
/* harmony import */ var _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/alert/alert.component */ 16292);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/empty.util */ 82777);
/* harmony import */ var _shared_form_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/form/form.component */ 99386);
/* harmony import */ var _shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/notifications/notifications.service */ 69472);
















function ProfilePageSecurityFormComponent_ds_form_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "ds-form", 4);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formId", ctx_r0.FORM_PREFIX)("formModel", ctx_r0.formModel)("formGroup", ctx_r0.formGroup)("displaySubmit", false)("displayCancel", false);
  }
}
function ProfilePageSecurityFormComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, ctx_r0.FORM_PREFIX + "error.matching-passwords"));
  }
}
function ProfilePageSecurityFormComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, ctx_r0.FORM_PREFIX + "error.empty-password"));
  }
}
/**
 * Component for a user to edit their security information
 * Displays a form containing a password field and a confirmation of the password
 */
class ProfilePageSecurityFormComponent {
  constructor(formService, translate, epersonService, notificationsService) {
    this.formService = formService;
    this.translate = translate;
    this.epersonService = epersonService;
    this.notificationsService = notificationsService;
    /**
     * Emits the validity of the password
     */
    this.isInvalid = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    /**
     * Emits the value of the password
     */
    this.passwordValue = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    /**
     * Emits the value of the current-password
     */
    this.currentPasswordValue = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    /**
     * The form's input models
     */
    this.formModel = [new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_7__.DynamicInputModel({
      id: 'password',
      name: 'password',
      inputType: 'password',
      autoComplete: 'new-password'
    }), new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_7__.DynamicInputModel({
      id: 'passwordrepeat',
      name: 'passwordrepeat',
      inputType: 'password',
      autoComplete: 'new-password'
    })];
    /**
     * Indicates whether the "checkPasswordEmpty" needs to be added or not
     */
    this.passwordCanBeEmpty = true;
    this.subs = [];
  }
  ngOnInit() {
    if (this.FORM_PREFIX === 'profile.security.form.') {
      this.formModel.unshift(new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_7__.DynamicInputModel({
        id: 'current-password',
        name: 'current-password',
        inputType: 'password',
        required: true,
        autoComplete: 'current-password'
      }));
    }
    if (this.passwordCanBeEmpty) {
      this.formGroup = this.formService.createFormGroup(this.formModel, {
        validators: [this.checkPasswordsEqual]
      });
    } else {
      this.formGroup = this.formService.createFormGroup(this.formModel, {
        validators: [this.checkPasswordsEqual, this.checkPasswordEmpty]
      });
    }
    this.updateFieldTranslations();
    this.translate.onLangChange.subscribe(() => {
      this.updateFieldTranslations();
    });
    this.subs.push(this.formGroup.statusChanges.pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_1__.debounceTimeWorkaround)(300), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(status => status !== 'VALID')).subscribe(status => this.isInvalid.emit(status)));
    this.subs.push(this.formGroup.valueChanges.pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_1__.debounceTimeWorkaround)(300)).subscribe(valueChange => {
      this.passwordValue.emit(valueChange.password);
      if (this.FORM_PREFIX === 'profile.security.form.') {
        this.currentPasswordValue.emit(valueChange['current-password']);
      }
    }));
  }
  /**
   * Update the translations of the field labels
   */
  updateFieldTranslations() {
    this.formModel.forEach(fieldModel => {
      fieldModel.label = this.translate.instant(this.FORM_PREFIX + 'label.' + fieldModel.id);
    });
  }
  /**
   * Check if both password fields are filled in and equal
   * @param group The FormGroup to validate
   */
  checkPasswordsEqual(group) {
    const pass = group.get('password').value;
    const repeatPass = group.get('passwordrepeat').value;
    return pass === repeatPass ? null : {
      notSame: true
    };
  }
  /**
   * Checks if the password is empty
   * @param group The FormGroup to validate
   */
  checkPasswordEmpty(group) {
    const pass = group.get('password').value;
    return (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_3__.isEmpty)(pass) ? {
      emptyPassword: true
    } : null;
  }
  /**
   * Unsubscribe from all subscriptions
   */
  ngOnDestroy() {
    this.subs.filter(sub => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_3__.hasValue)(sub)).forEach(sub => sub.unsubscribe());
  }
  static {
    this.ɵfac = function ProfilePageSecurityFormComponent_Factory(t) {
      return new (t || ProfilePageSecurityFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_7__.DynamicFormService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_eperson_eperson_data_service__WEBPACK_IMPORTED_MODULE_0__.EPersonDataService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_5__.NotificationsService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: ProfilePageSecurityFormComponent,
      selectors: [["ds-profile-page-security-form"]],
      inputs: {
        passwordCanBeEmpty: "passwordCanBeEmpty",
        FORM_PREFIX: "FORM_PREFIX"
      },
      outputs: {
        isInvalid: "isInvalid",
        passwordValue: "passwordValue",
        currentPasswordValue: "currentPasswordValue"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵStandaloneFeature"]],
      decls: 6,
      vars: 7,
      consts: [[1, "mb-4", 3, "type"], [3, "formId", "formModel", "formGroup", "displaySubmit", "displayCancel", 4, "ngIf"], ["id", "notSame", "class", "container-fluid text-danger", 4, "ngIf"], ["id", "emptyPassword", "class", "container-fluid text-danger", 4, "ngIf"], [3, "formId", "formModel", "formGroup", "displaySubmit", "displayCancel"], ["id", "notSame", 1, "container-fluid", "text-danger"], ["id", "emptyPassword", 1, "container-fluid", "text-danger"]],
      template: function ProfilePageSecurityFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ds-alert", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ProfilePageSecurityFormComponent_ds_form_3_Template, 1, 5, "ds-form", 1)(4, ProfilePageSecurityFormComponent_div_4_Template, 3, 3, "div", 2)(5, ProfilePageSecurityFormComponent_div_5_Template, 3, 3, "div", 3);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("type", "alert-info");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 5, ctx.FORM_PREFIX + "info"));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.formModel);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.formGroup.hasError("notSame"));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx.formGroup.dirty || ctx.formGroup.touched) && ctx.formGroup.hasError("emptyPassword"));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _shared_form_form_component__WEBPACK_IMPORTED_MODULE_4__.FormComponent, _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_2__.AlertComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 60676:
/*!********************************************************!*\
  !*** ./src/app/profile-page/profile-page.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfilePageComponent: () => (/* binding */ ProfilePageComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs */ 83485);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs/operators */ 85687);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs/operators */ 84975);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! rxjs/operators */ 21252);
/* harmony import */ var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/auth/auth.service */ 67116);
/* harmony import */ var _core_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/breadcrumbs/dso-name.service */ 96526);
/* harmony import */ var _core_data_configuration_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/data/configuration-data.service */ 8917);
/* harmony import */ var _core_data_feature_authorization_authorization_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/data/feature-authorization/authorization-data.service */ 3675);
/* harmony import */ var _core_data_feature_authorization_feature_id__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/data/feature-authorization/feature-id */ 3970);
/* harmony import */ var _core_eperson_eperson_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/eperson/eperson-data.service */ 74449);
/* harmony import */ var _core_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/pagination/pagination.service */ 76896);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/shared/operators */ 55757);
/* harmony import */ var _notifications_suggestions_notification_suggestions_notification_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../notifications/suggestions-notification/suggestions-notification.component */ 85343);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/empty.util */ 82777);
/* harmony import */ var _shared_error_error_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/error/error.component */ 79632);
/* harmony import */ var _shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/loading/themed-loading.component */ 82394);
/* harmony import */ var _shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/notifications/notifications.service */ 69472);
/* harmony import */ var _shared_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/pagination/pagination.component */ 40590);
/* harmony import */ var _shared_pagination_pagination_component_options_model__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../shared/pagination/pagination-component-options.model */ 23401);
/* harmony import */ var _shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../shared/utils/follow-link-config.model */ 67600);
/* harmony import */ var _shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../shared/utils/var.directive */ 18226);
/* harmony import */ var _profile_page_metadata_form_themed_profile_page_metadata_form_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./profile-page-metadata-form/themed-profile-page-metadata-form.component */ 87370);
/* harmony import */ var _profile_page_researcher_form_profile_page_researcher_form_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./profile-page-researcher-form/profile-page-researcher-form.component */ 12474);
/* harmony import */ var _profile_page_security_form_profile_page_security_form_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./profile-page-security-form/profile-page-security-form.component */ 13738);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 90310);

































function ProfilePageComponent_ng_container_0_div_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](1, "div", 6)(2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](5, "div", 8)(6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](7, "ds-profile-page-researcher-form", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](8, "ds-suggestions-notification");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const user_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2).ngVar;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](4, 2, "profile.card.researcher"));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("user", user_r2);
  }
}
function ProfilePageComponent_ng_container_0_div_1_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 15)(1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](4, "div", 8)(5, "ds-profile-page-security-form", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("isInvalid", function ProfilePageComponent_ng_container_0_div_1_div_12_Template_ds_profile_page_security_form_isInvalid_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r3);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r3.setInvalid($event));
    })("passwordValue", function ProfilePageComponent_ng_container_0_div_1_div_12_Template_ds_profile_page_security_form_passwordValue_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r3);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r3.setPasswordValue($event));
    })("currentPasswordValue", function ProfilePageComponent_ng_container_0_div_1_div_12_Template_ds_profile_page_security_form_currentPasswordValue_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r3);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r3.setCurrentPasswordValue($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](3, 2, "profile.card.security"));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("FORM_PREFIX", "profile.security.form.");
  }
}
function ProfilePageComponent_ng_container_0_div_1_ng_container_19_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainer"](0);
  }
}
function ProfilePageComponent_ng_container_0_div_1_ng_container_19_ng_template_2_ds_pagination_0_ng_container_1_div_1_li_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const group_r5 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](ctx_r3.dsoNameService.getName(group_r5));
  }
}
function ProfilePageComponent_ng_container_0_div_1_ng_container_19_ng_template_2_ds_pagination_0_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div")(1, "h2", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](4, "ul", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](5, ProfilePageComponent_ng_container_0_div_1_ng_container_19_ng_template_2_ds_pagination_0_ng_container_1_div_1_li_5_Template, 2, 1, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const groups_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](3, 2, "profile.groups.head"));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngForOf", groups_r6);
  }
}
function ProfilePageComponent_ng_container_0_div_1_ng_container_19_ng_template_2_ds_pagination_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](1, ProfilePageComponent_ng_container_0_div_1_ng_container_19_ng_template_2_ds_pagination_0_ng_container_1_div_1_Template, 6, 4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const groups_r6 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", (groups_r6 == null ? null : groups_r6.length) > 0);
  }
}
function ProfilePageComponent_ng_container_0_div_1_ng_container_19_ng_template_2_ds_pagination_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "ds-pagination", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](1, ProfilePageComponent_ng_container_0_div_1_ng_container_19_ng_template_2_ds_pagination_0_ng_container_1_Template, 2, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const groupsRD_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2).ngIf;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("hideGear", true)("hidePagerWhenSinglePage", true)("hidePaginationDetail", true)("paginationOptions", ctx_r3.optionsGroupsPagination)("collectionSize", groupsRD_r7 == null ? null : groupsRD_r7.payload == null ? null : groupsRD_r7.payload.totalElements);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", groupsRD_r7 == null ? null : groupsRD_r7.payload == null ? null : groupsRD_r7.payload.page);
  }
}
function ProfilePageComponent_ng_container_0_div_1_ng_container_19_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](0, ProfilePageComponent_ng_container_0_div_1_ng_container_19_ng_template_2_ds_pagination_0_Template, 2, 6, "ds-pagination", 19);
  }
  if (rf & 2) {
    const groupsRD_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", groupsRD_r7 == null ? null : groupsRD_r7.payload);
  }
}
function ProfilePageComponent_ng_container_0_div_1_ng_container_19_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](0, "ds-loading", 25);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("showMessage", false);
  }
}
function ProfilePageComponent_ng_container_0_div_1_ng_container_19_ds_error_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](0, "ds-error", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpropertyInterpolate"]("message", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](1, 1, "error.profile-groups"));
  }
}
function ProfilePageComponent_ng_container_0_div_1_ng_container_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](1, ProfilePageComponent_ng_container_0_div_1_ng_container_19_ng_container_1_Template, 1, 0, "ng-container", 17)(2, ProfilePageComponent_ng_container_0_div_1_ng_container_19_ng_template_2_Template, 1, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplateRefExtractor"])(4, ProfilePageComponent_ng_container_0_div_1_ng_container_19_ng_template_4_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplateRefExtractor"])(6, ProfilePageComponent_ng_container_0_div_1_ng_container_19_ds_error_6_Template, 2, 3, "ds-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const groupsRD_r7 = ctx.ngIf;
    const content_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵreference"](3);
    const loader_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngTemplateOutlet", (groupsRD_r7 == null ? null : groupsRD_r7.isLoading) ? loader_r9 : content_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", groupsRD_r7 == null ? null : groupsRD_r7.hasFailed);
  }
}
function ProfilePageComponent_ng_container_0_div_1_ng_container_21_div_1_li_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const specialGroup_r10 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"](" ", ctx_r3.dsoNameService.getName(specialGroup_r10), " ");
  }
}
function ProfilePageComponent_ng_container_0_div_1_ng_container_21_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 28)(1, "h2", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](4, "ul", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](5, ProfilePageComponent_ng_container_0_div_1_ng_container_21_div_1_li_5_Template, 2, 1, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const specialGroups_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().ngVar;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](3, 2, "profile.special.groups.head"));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngForOf", specialGroups_r11);
  }
}
function ProfilePageComponent_ng_container_0_div_1_ng_container_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](1, ProfilePageComponent_ng_container_0_div_1_ng_container_21_div_1_Template, 6, 4, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const specialGroups_r11 = ctx.ngVar;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", (specialGroups_r11 == null ? null : specialGroups_r11.length) > 0);
  }
}
function ProfilePageComponent_ng_container_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 4)(1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](4, ProfilePageComponent_ng_container_0_div_1_ng_container_4_Template, 9, 4, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](6, "div", 6)(7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](10, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](11, "ds-profile-page-metadata-form", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](12, ProfilePageComponent_ng_container_0_div_1_div_12_Template, 6, 4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](13, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](14, "div", 11)(15, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function ProfilePageComponent_ng_container_0_div_1_Template_button_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r1);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r3.updateProfile());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](16, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](19, ProfilePageComponent_ng_container_0_div_1_ng_container_19_Template, 7, 2, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](20, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](21, ProfilePageComponent_ng_container_0_div_1_ng_container_21_Template, 2, 1, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](22, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_10_0;
    const user_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().ngVar;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](3, 8, "profile.title"));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](5, 10, ctx_r3.isResearcherProfileEnabled$));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](9, 12, "profile.card.identify"));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("user", user_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](13, 14, ctx_r3.canChangePassword$));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](18, 16, "profile.form.submit"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](20, 18, ctx_r3.groupsRD$));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngVar", (tmp_10_0 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](22, 20, ctx_r3.specialGroupsRD$)) == null ? null : tmp_10_0.payload == null ? null : tmp_10_0.payload.page);
  }
}
function ProfilePageComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](1, ProfilePageComponent_ng_container_0_div_1_Template, 23, 22, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const user_r2 = ctx.ngVar;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", user_r2);
  }
}
/**
 * Component for a user to edit their profile information
 */
class ProfilePageComponent {
  constructor(authService, notificationsService, translate, epersonService, authorizationService, configurationService, dsoNameService, paginationService) {
    this.authService = authService;
    this.notificationsService = notificationsService;
    this.translate = translate;
    this.epersonService = epersonService;
    this.authorizationService = authorizationService;
    this.configurationService = configurationService;
    this.dsoNameService = dsoNameService;
    this.paginationService = paginationService;
    /**
     * Prefix for the notification messages of this component
     */
    this.NOTIFICATIONS_PREFIX = 'profile.notifications.';
    /**
     * Prefix for the notification messages of this security form
     */
    this.PASSWORD_NOTIFICATIONS_PREFIX = 'profile.security.form.notifications.';
    /**
     * Default configuration for group pagination
     **/
    this.optionsGroupsPagination = Object.assign(new _shared_pagination_pagination_component_options_model__WEBPACK_IMPORTED_MODULE_14__.PaginationComponentOptions(), {
      id: 'page_groups',
      currentPage: 1,
      pageSize: 20
    });
    this.isResearcherProfileEnabled$ = new rxjs__WEBPACK_IMPORTED_MODULE_21__.BehaviorSubject(false);
  }
  ngOnInit() {
    this.user$ = this.authService.getAuthenticatedUserFromStore().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.filter)(user => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_9__.hasValue)(user.id)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.switchMap)(user => this.epersonService.findById(user.id, true, true, (0,_shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_15__.followLink)('groups'))), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_7__.getAllSucceededRemoteData)(), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_7__.getRemoteDataPayload)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_24__.tap)(user => this.currentUser = user));
    this.groupsRD$ = this.paginationService.getCurrentPagination(this.optionsGroupsPagination.id, this.optionsGroupsPagination).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.switchMap)(pageOptions => {
      return this.epersonService.findById(this.currentUser.id, true, true, (0,_shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_15__.followLink)('groups', {
        findListOptions: {
          elementsPerPage: pageOptions.pageSize,
          currentPage: pageOptions.currentPage
        }
      }));
    }), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_7__.getAllCompletedRemoteData)(), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_7__.getRemoteDataPayload)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.switchMap)(user => user?.groups));
    this.canChangePassword$ = this.user$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.switchMap)(user => this.authorizationService.isAuthorized(_core_data_feature_authorization_feature_id__WEBPACK_IMPORTED_MODULE_4__.FeatureID.CanChangePassword, user._links.self.href)));
    this.specialGroupsRD$ = this.authService.getSpecialGroupsFromAuthStatus();
    this.configurationService.findByPropertyName('researcher-profile.entity-type').pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_7__.getFirstCompletedRemoteData)()).subscribe(configRD => {
      this.isResearcherProfileEnabled$.next(configRD.hasSucceeded && configRD.payload.values.length > 0);
    });
  }
  /**
   * Fire an update on both the metadata and security forms
   * Show a warning notification when no changes were made in both forms
   */
  updateProfile() {
    const metadataChanged = this.metadataForm.compRef.instance.updateProfile();
    const securityChanged = this.updateSecurity();
    if (!metadataChanged && !securityChanged) {
      this.notificationsService.warning(this.translate.instant(this.NOTIFICATIONS_PREFIX + 'warning.no-changes.title'), this.translate.instant(this.NOTIFICATIONS_PREFIX + 'warning.no-changes.content'));
    }
  }
  /**
   * Sets the validity of the password based on an emitted of the form
   * @param $event
   */
  setInvalid($event) {
    this.invalidSecurity = $event;
  }
  /**
   * Update the user's security details
   *
   * Sends a patch request for changing the user's password when a new password is present and the password confirmation
   * matches the new password.
   * Nothing happens when no passwords are filled in.
   * An error notification is displayed when the password confirmation does not match the new password.
   *
   * Returns false when the password was empty
   */
  updateSecurity() {
    const passEntered = (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_9__.isNotEmpty)(this.password);
    const validCurrentPassword = (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_9__.isNotEmpty)(this.currentPassword);
    if (validCurrentPassword && !passEntered) {
      this.notificationsService.error(this.translate.instant(this.PASSWORD_NOTIFICATIONS_PREFIX + 'error.general'));
    }
    if (!this.invalidSecurity && passEntered) {
      const operations = [{
        'op': 'add',
        'path': '/password',
        'value': {
          'new_password': this.password,
          'current_password': this.currentPassword
        }
      }];
      this.epersonService.patch(this.currentUser, operations).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_7__.getFirstCompletedRemoteData)()).subscribe(response => {
        if (response.hasSucceeded) {
          this.notificationsService.success(this.translate.instant(this.PASSWORD_NOTIFICATIONS_PREFIX + 'success.title'), this.translate.instant(this.PASSWORD_NOTIFICATIONS_PREFIX + 'success.content'));
        } else {
          this.notificationsService.error(this.translate.instant(this.PASSWORD_NOTIFICATIONS_PREFIX + 'error.title'), this.getPasswordErrorMessage(response));
        }
      });
    }
    return passEntered;
  }
  /**
   * Set the password value based on the value emitted from the security form
   * @param $event
   */
  setPasswordValue($event) {
    this.password = $event;
  }
  /**
   * Set the current-password value based on the value emitted from the security form
   * @param $event
   */
  setCurrentPasswordValue($event) {
    this.currentPassword = $event;
  }
  /**
   * Submit of the security form that triggers the updateProfile method
   */
  submit() {
    this.updateProfile();
  }
  /**
   * Returns an error message from a password validation request with a specific reason or
   * a default message without specific reason.
   * @param response from the validation password patch request.
   */
  getPasswordErrorMessage(response) {
    if (response.hasFailed && (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_9__.isNotEmpty)(response.errorMessage)) {
      // Response has a specific error message. Show this message in the error notification.
      return this.translate.instant(response.errorMessage);
    }
    // Show default error message notification.
    return this.translate.instant(this.PASSWORD_NOTIFICATIONS_PREFIX + 'error.change-failed');
  }
  static {
    this.ɵfac = function ProfilePageComponent_Factory(t) {
      return new (t || ProfilePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_12__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_core_eperson_eperson_data_service__WEBPACK_IMPORTED_MODULE_5__.EPersonDataService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_core_data_feature_authorization_authorization_data_service__WEBPACK_IMPORTED_MODULE_3__.AuthorizationDataService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_core_data_configuration_data_service__WEBPACK_IMPORTED_MODULE_2__.ConfigurationDataService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_core_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_1__.DSONameService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_core_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_6__.PaginationService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineComponent"]({
      type: ProfilePageComponent,
      selectors: [["ds-base-profile-page"]],
      viewQuery: function ProfilePageComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵviewQuery"](_profile_page_metadata_form_themed_profile_page_metadata_form_component__WEBPACK_IMPORTED_MODULE_17__.ThemedProfilePageMetadataFormComponent, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵloadQuery"]()) && (ctx.metadataForm = _t.first);
        }
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 3,
      consts: [["content", ""], ["loader", ""], [4, "ngVar"], ["class", "container", 4, "ngIf"], [1, "container"], [4, "ngIf"], [1, "card", "mb-4"], [1, "card-header"], [1, "card-body"], [3, "user"], ["class", "card mb-4 security-section", 4, "ngIf"], [1, "col-12", "text-right", "pr-0"], [1, "btn", "btn-primary", 3, "click"], [1, "fas", "fa-edit"], [1, "mb-4"], [1, "card", "mb-4", "security-section"], [3, "isInvalid", "passwordValue", "currentPasswordValue", "FORM_PREFIX"], [4, "ngTemplateOutlet"], [3, "message", 4, "ngIf"], [3, "hideGear", "hidePagerWhenSinglePage", "hidePaginationDetail", "paginationOptions", "collectionSize", 4, "ngIf"], [3, "hideGear", "hidePagerWhenSinglePage", "hidePaginationDetail", "paginationOptions", "collectionSize"], [1, "mt-4"], [1, "list-group", "list-group-flush"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], [1, "list-group-item"], [3, "showMessage"], [3, "message"], ["data-test", "specialGroups", 4, "ngIf"], ["data-test", "specialGroups"]],
      template: function ProfilePageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](0, ProfilePageComponent_ng_container_0_Template, 2, 1, "ng-container", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](1, "async");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngVar", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](1, 1, ctx.user$));
        }
      },
      dependencies: [_profile_page_metadata_form_themed_profile_page_metadata_form_component__WEBPACK_IMPORTED_MODULE_17__.ThemedProfilePageMetadataFormComponent, _profile_page_security_form_profile_page_security_form_component__WEBPACK_IMPORTED_MODULE_19__.ProfilePageSecurityFormComponent, _angular_common__WEBPACK_IMPORTED_MODULE_26__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__.TranslatePipe, _profile_page_researcher_form_profile_page_researcher_form_component__WEBPACK_IMPORTED_MODULE_18__.ProfilePageResearcherFormComponent, _shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_16__.VarDirective, _angular_common__WEBPACK_IMPORTED_MODULE_26__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_26__.NgForOf, _notifications_suggestions_notification_suggestions_notification_component__WEBPACK_IMPORTED_MODULE_8__.SuggestionsNotificationComponent, _angular_common__WEBPACK_IMPORTED_MODULE_26__.NgTemplateOutlet, _shared_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_13__.PaginationComponent, _shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_11__.ThemedLoadingComponent, _shared_error_error_component__WEBPACK_IMPORTED_MODULE_10__.ErrorComponent],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQSIsImZpbGUiOiJwcm9maWxlLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqLyJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHJvZmlsZS1wYWdlL3Byb2ZpbGUtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBLGdrQkFBZ2tCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi8iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 36016:
/*!***************************************************************!*\
  !*** ./src/app/profile-page/themed-profile-page.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemedProfilePageComponent: () => (/* binding */ ThemedProfilePageComponent)
/* harmony export */ });
/* harmony import */ var _shared_theme_support_themed_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/theme-support/themed.component */ 8886);
/* harmony import */ var _profile_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile-page.component */ 60676);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);



const _c0 = ["*"];
function ThemedProfilePageComponent_ng_template_0_Template(rf, ctx) {}
/**
 * Themed wrapper for ProfilePageComponent
 */
class ThemedProfilePageComponent extends _shared_theme_support_themed_component__WEBPACK_IMPORTED_MODULE_0__.ThemedComponent {
  getComponentName() {
    return 'ProfilePageComponent';
  }
  importThemedComponent(themeName) {
    return __webpack_require__(86930)(`./${themeName}/app/profile-page/profile-page.component`);
  }
  importUnthemedComponent() {
    return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./profile-page.component */ 60676));
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵThemedProfilePageComponent_BaseFactory;
      return function ThemedProfilePageComponent_Factory(t) {
        return (ɵThemedProfilePageComponent_BaseFactory || (ɵThemedProfilePageComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](ThemedProfilePageComponent)))(t || ThemedProfilePageComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ThemedProfilePageComponent,
      selectors: [["ds-profile-page"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      ngContentSelectors: _c0,
      decls: 5,
      vars: 0,
      consts: [["vcr", ""], ["content", ""]],
      template: function ThemedProfilePageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ThemedProfilePageComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
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

/***/ 46020:
/*!*************************************************************************************************************************************************!*\
  !*** ./src/themes/ lazy ^\.\/.*\/app\/profile\-page\/profile\-page\-metadata\-form\/profile\-page\-metadata\-form\.component$ namespace object ***!
  \*************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./custom/app/profile-page/profile-page-metadata-form/profile-page-metadata-form.component": [
		22961,
		"src_themes_custom_app_profile-page_profile-page-metadata-form_profile-page-metadata-form_comp-31d6bd"
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
webpackAsyncContext.id = 46020;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 86930:
/*!**************************************************************************************************!*\
  !*** ./src/themes/ lazy ^\.\/.*\/app\/profile\-page\/profile\-page\.component$ namespace object ***!
  \**************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./custom/app/profile-page/profile-page.component": [
		37879,
		"src_themes_custom_app_profile-page_profile-page_component_ts"
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
webpackAsyncContext.id = 86930;
module.exports = webpackAsyncContext;

/***/ })

}]);
//# sourceMappingURL=src_app_profile-page_profile-page-routes_ts.js.map