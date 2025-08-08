"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_app_collection-page_edit-collection-page_edit-collection-page-routes_ts"],{

/***/ 48909:
/*!********************************************************************************************!*\
  !*** ./src/app/collection-page/collection-item-mapper/collection-item-mapper.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CollectionItemMapperComponent: () => (/* binding */ CollectionItemMapperComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 49966);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 83485);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 27639);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 84975);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs/operators */ 62997);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs/operators */ 78374);
/* harmony import */ var _core_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/breadcrumbs/dso-name.service */ 96526);
/* harmony import */ var _core_cache_models_sort_options_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/cache/models/sort-options.model */ 6238);
/* harmony import */ var _core_data_feature_authorization_feature_id__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/data/feature-authorization/feature-id */ 3970);
/* harmony import */ var _core_data_item_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/data/item-data.service */ 29326);
/* harmony import */ var _core_shared_dspace_object_type_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/shared/dspace-object-type.model */ 13864);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/shared/operators */ 55757);
/* harmony import */ var _core_shared_search_search_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/shared/search/search.service */ 55180);
/* harmony import */ var _core_shared_search_search_configuration_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/shared/search/search-configuration.service */ 68611);
/* harmony import */ var _my_dspace_page_my_dspace_configuration_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../my-dspace-page/my-dspace-configuration.service */ 787);
/* harmony import */ var _shared_animations_fade__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/animations/fade */ 50332);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/empty.util */ 82777);
/* harmony import */ var _shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/notifications/notifications.service */ 69472);
/* harmony import */ var _shared_object_select_item_select_item_select_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/object-select/item-select/item-select.component */ 21061);
/* harmony import */ var _shared_search_models_paginated_search_options_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/search/models/paginated-search-options.model */ 33550);
/* harmony import */ var _shared_search_form_themed_search_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/search-form/themed-search-form.component */ 18016);
/* harmony import */ var _shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../shared/utils/follow-link-config.model */ 67600);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/router */ 14354);































const _c0 = ["tabs"];
const _c1 = a0 => ({
  name: a0
});
function CollectionItemMapperComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 11)(1, "ds-item-select", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("confirm", function CollectionItemMapperComponent_ng_template_18_Template_ds_item_select_confirm_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r2.mapItems($event, true));
    })("cancel", function CollectionItemMapperComponent_ng_template_18_Template_ds_item_select_cancel_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r2.onCancel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("key", "browse")("dsoRD$", ctx_r2.collectionItemsRD$)("paginationOptions", (tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 7, ctx_r2.searchOptions$)) == null ? null : tmp_4_0.pagination)("confirmButton", "collection.edit.item-mapper.remove")("cancelButton", "collection.edit.item-mapper.cancel")("dangerConfirm", true)("hideCollection", true);
  }
}
function CollectionItemMapperComponent_ng_template_23_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div")(1, "ds-item-select", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("confirm", function CollectionItemMapperComponent_ng_template_23_div_6_Template_ds_item_select_confirm_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r2.mapItems($event));
    })("cancel", function CollectionItemMapperComponent_ng_template_23_div_6_Template_ds_item_select_cancel_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r2.onCancel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("key", "map")("dsoRD$", ctx_r2.mappedItemsRD$)("paginationOptions", (tmp_5_0 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 6, ctx_r2.searchOptions$)) == null ? null : tmp_5_0.pagination)("featureId", ctx_r2.FeatureIds.CanManageMappings)("confirmButton", "collection.edit.item-mapper.confirm")("cancelButton", "collection.edit.item-mapper.cancel");
  }
}
function CollectionItemMapperComponent_ng_template_23_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, "collection.edit.item-mapper.no-search"), " ");
  }
}
function CollectionItemMapperComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 13)(1, "div", 14)(2, "ds-search-form", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("submitSearch", function CollectionItemMapperComponent_ng_template_23_Template_ds_search_form_submitSearch_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r2.performedSearch = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](6, CollectionItemMapperComponent_ng_template_23_div_6_Template, 3, 8, "div", 16)(7, CollectionItemMapperComponent_ng_template_23_div_7_Template, 3, 3, "div", 17);
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("query", (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](3, 7, ctx_r2.searchOptions$)) == null ? null : tmp_2_0.query)("scope", (tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](4, 9, ctx_r2.searchOptions$)) == null ? null : tmp_3_0.scope)("currentUrl", "./")("inPlaceSearch", true)("searchPlaceholder", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](5, 11, "collection.edit.item-mapper.search-form.placeholder"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r2.performedSearch);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", !ctx_r2.performedSearch);
  }
}
/**
 * Component used to map items to a collection
 */
class CollectionItemMapperComponent {
  constructor(route, router, searchConfigService, searchService, notificationsService, itemDataService, translateService, dsoNameService) {
    this.route = route;
    this.router = router;
    this.searchConfigService = searchConfigService;
    this.searchService = searchService;
    this.notificationsService = notificationsService;
    this.itemDataService = itemDataService;
    this.translateService = translateService;
    this.dsoNameService = dsoNameService;
    this.FeatureIds = _core_data_feature_authorization_feature_id__WEBPACK_IMPORTED_MODULE_2__.FeatureID;
    /**
     * Sort on title ASC by default
     * @type {SortOptions}
     */
    this.defaultSortOptions = new _core_cache_models_sort_options_model__WEBPACK_IMPORTED_MODULE_1__.SortOptions('dc.title', _core_cache_models_sort_options_model__WEBPACK_IMPORTED_MODULE_1__.SortDirection.ASC);
    /**
     * Track whether at least one search has been performed or not
     * As soon as at least one search has been performed, we display the search results
     */
    this.performedSearch = false;
  }
  ngOnInit() {
    this.collectionRD$ = this.route.parent.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.map)(data => data.dso), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_5__.getFirstSucceededRemoteData)());
    this.collectionName$ = this.collectionRD$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.map)(rd => {
      return this.dsoNameService.getName(rd.payload);
    }));
    this.searchOptions$ = this.searchConfigService.paginatedSearchOptions;
    this.loadItemLists();
  }
  /**
   * Load collectionItemsRD$ with a fixed scope to only obtain the items this collection owns
   * Load mappedItemsRD$ to only obtain items this collection doesn't own
   */
  loadItemLists() {
    this.shouldUpdate$ = new rxjs__WEBPACK_IMPORTED_MODULE_18__.BehaviorSubject(true);
    const collectionAndOptions$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.combineLatest)(this.collectionRD$, this.searchOptions$, this.shouldUpdate$);
    this.collectionItemsRD$ = collectionAndOptions$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.switchMap)(([collectionRD, options, shouldUpdate]) => {
      if (shouldUpdate === true) {
        this.shouldUpdate$.next(false);
      }
      return this.itemDataService.findListByHref(collectionRD.payload._links.mappedItems.href, Object.assign(options, {
        currentPage: options.pagination.currentPage,
        elementsPerPage: options.pagination.pageSize,
        sort: this.defaultSortOptions
      }), !shouldUpdate, false, (0,_shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_15__.followLink)('owningCollection')).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_5__.getAllSucceededRemoteData)());
    }));
    this.mappedItemsRD$ = collectionAndOptions$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.switchMap)(([collectionRD, options, shouldUpdate]) => {
      return this.searchService.search(Object.assign(new _shared_search_models_paginated_search_options_model__WEBPACK_IMPORTED_MODULE_13__.PaginatedSearchOptions(options), {
        query: this.buildQuery(collectionRD.payload.id, options.query),
        scope: undefined,
        dsoTypes: [_core_shared_dspace_object_type_model__WEBPACK_IMPORTED_MODULE_4__.DSpaceObjectType.ITEM],
        sort: this.defaultSortOptions
      }), 10000, undefined, undefined, (0,_shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_15__.followLink)('owningCollection')).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_5__.toDSpaceObjectListRD)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.startWith)(undefined));
    }));
  }
  /**
   * Map/Unmap the selected items to the collection and display notifications
   * @param ids         The list of item UUID's to map/unmap to the collection
   * @param remove      Whether or not it's supposed to remove mappings
   */
  mapItems(ids, remove) {
    const responses$ = this.collectionRD$.pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_5__.getFirstSucceededRemoteData)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.map)(collectionRD => collectionRD.payload), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.switchMap)(collection => (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.combineLatest)(ids.map(id => {
      if (remove) {
        return this.itemDataService.removeMappingFromCollection(id, collection.id).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_5__.getFirstCompletedRemoteData)());
      } else {
        return this.itemDataService.mapToCollection(id, collection._links.self.href).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_5__.getFirstCompletedRemoteData)());
      }
    }))));
    this.showNotifications(responses$, remove);
  }
  /**
   * Display notifications
   * @param {Observable<RestResponse[]>} responses$   The responses after adding/removing a mapping
   * @param {boolean} remove                          Whether or not the goal was to remove mappings
   */
  showNotifications(responses$, remove) {
    const messageInsertion = remove ? 'unmap' : 'map';
    responses$.subscribe(responses => {
      const successful = responses.filter(response => response.hasSucceeded);
      const unsuccessful = responses.filter(response => response.hasFailed);
      if (successful.length > 0) {
        const successMessages = (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.combineLatest)(this.translateService.get(`collection.edit.item-mapper.notifications.${messageInsertion}.success.head`), this.translateService.get(`collection.edit.item-mapper.notifications.${messageInsertion}.success.content`, {
          amount: successful.length
        }));
        successMessages.subscribe(([head, content]) => {
          this.notificationsService.success(head, content);
        });
        this.shouldUpdate$.next(true);
      }
      if (unsuccessful.length > 0) {
        const unsuccessMessages = (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.combineLatest)(this.translateService.get(`collection.edit.item-mapper.notifications.${messageInsertion}.error.head`), this.translateService.get(`collection.edit.item-mapper.notifications.${messageInsertion}.error.content`, {
          amount: unsuccessful.length
        }));
        unsuccessMessages.subscribe(([head, content]) => {
          this.notificationsService.error(head, content);
        });
      }
      this.switchToFirstTab();
    });
  }
  /**
   * Clear url parameters on tab change (temporary fix until pagination is improved)
   * @param event
   */
  tabChange(event) {
    this.performedSearch = false;
    this.router.navigateByUrl(this.getCurrentUrl());
  }
  /**
   * Get current url without parameters
   * @returns {string}
   */
  getCurrentUrl() {
    if (this.router.url.indexOf('?') > -1) {
      return this.router.url.substring(0, this.router.url.indexOf('?'));
    }
    return this.router.url;
  }
  /**
   * Build a query where items that are already mapped to a collection are excluded from
   * @param collectionId    The collection's UUID
   * @param query           The query to add to it
   */
  buildQuery(collectionId, query) {
    const excludeColQuery = `-location.coll:\"${collectionId}\"`;
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_10__.isNotEmpty)(query)) {
      return `${excludeColQuery} AND ${query}`;
    } else {
      return excludeColQuery;
    }
  }
  /**
   * Switch the view to focus on the first tab
   */
  switchToFirstTab() {
    this.tabs.select('browseTab');
  }
  /**
   * When a cancel event is fired, return to the collection page
   */
  onCancel() {
    this.collectionRD$.pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_5__.getFirstSucceededRemoteData)(), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_5__.getRemoteDataPayload)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.take)(1)).subscribe(collection => {
      this.router.navigate(['/collections/', collection.id]);
    });
  }
  static {
    this.ɵfac = function CollectionItemMapperComponent_Factory(t) {
      return new (t || CollectionItemMapperComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_23__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_23__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_my_dspace_page_my_dspace_configuration_service__WEBPACK_IMPORTED_MODULE_8__.SEARCH_CONFIG_SERVICE), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_core_shared_search_search_service__WEBPACK_IMPORTED_MODULE_6__.SearchService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_11__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_core_data_item_data_service__WEBPACK_IMPORTED_MODULE_3__.ItemDataService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_core_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_0__.DSONameService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineComponent"]({
      type: CollectionItemMapperComponent,
      selectors: [["ds-collection-item-mapper"]],
      viewQuery: function CollectionItemMapperComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵloadQuery"]()) && (ctx.tabs = _t.first);
        }
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵProvidersFeature"]([{
        provide: _my_dspace_page_my_dspace_configuration_service__WEBPACK_IMPORTED_MODULE_8__.SEARCH_CONFIG_SERVICE,
        useClass: _core_shared_search_search_configuration_service__WEBPACK_IMPORTED_MODULE_7__.SearchConfigurationService
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵStandaloneFeature"]],
      decls: 25,
      vars: 24,
      consts: [["tabs", "ngbNav"], [1, "container"], [1, "row"], [1, "col-12"], ["id", "collection-name", 3, "innerHTML"], ["ngbNav", "", 1, "nav-tabs", 3, "navChange", "destroyOnHide"], ["role", "presentation", "data-test", "browseTab", 3, "ngbNavItem"], ["ngbNavLink", ""], ["ngbNavContent", ""], ["role", "presentation", "data-test", "mapTab", 3, "ngbNavItem"], [3, "ngbNavOutlet"], [1, "mt-2"], [1, "mt-2", 3, "confirm", "cancel", "key", "dsoRD$", "paginationOptions", "confirmButton", "cancelButton", "dangerConfirm", "hideCollection"], [1, "row", "mt-2"], [1, "col-12", "col-lg-6"], ["id", "search-form", 3, "submitSearch", "query", "scope", "currentUrl", "inPlaceSearch", "searchPlaceholder"], [4, "ngIf"], ["class", "alert alert-info w-100", "role", "alert", 4, "ngIf"], [1, "mt-2", 3, "confirm", "cancel", "key", "dsoRD$", "paginationOptions", "featureId", "confirmButton", "cancelButton"], ["role", "alert", 1, "alert", "alert-info", "w-100"]],
      template: function CollectionItemMapperComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](5, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](6, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](7, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](8, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](9, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](11, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](12, "ul", 5, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("navChange", function CollectionItemMapperComponent_Template_ul_navChange_12_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx.tabChange($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](14, "li", 6)(15, "a", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](17, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](18, CollectionItemMapperComponent_ng_template_18_Template, 3, 9, "ng-template", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](19, "li", 9)(20, "a", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](21);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](22, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](23, CollectionItemMapperComponent_ng_template_23_Template, 8, 13, "ng-template", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](24, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          const tabs_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵreference"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](5, 9, "collection.edit.item-mapper.head"));
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind2"](8, 13, "collection.edit.item-mapper.collection", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction1"](22, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](7, 11, ctx.collectionName$))), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsanitizeHtml"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](11, 16, "collection.edit.item-mapper.description"));
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("destroyOnHide", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngbNavItem", "browseTab");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](17, 18, "collection.edit.item-mapper.tabs.browse"));
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngbNavItem", "mapTab");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](22, 20, "collection.edit.item-mapper.tabs.map"));
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngbNavOutlet", tabs_r6);
        }
      },
      dependencies: [_shared_search_form_themed_search_form_component__WEBPACK_IMPORTED_MODULE_14__.ThemedSearchFormComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_25__.NgbNavModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_25__.NgbNavContent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_25__.NgbNav, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_25__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_25__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_25__.NgbNavOutlet, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_26__.AsyncPipe, _shared_object_select_item_select_item_select_component__WEBPACK_IMPORTED_MODULE_12__.ItemSelectComponent, _angular_common__WEBPACK_IMPORTED_MODULE_26__.NgIf],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGxlY3Rpb24taXRlbS1tYXBwZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQSIsImZpbGUiOiJjb2xsZWN0aW9uLWl0ZW0tbWFwcGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi9cbi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29sbGVjdGlvbi1wYWdlL2NvbGxlY3Rpb24taXRlbS1tYXBwZXIvY29sbGVjdGlvbi1pdGVtLW1hcHBlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBO0FBQ0EsNDZCQUE0NkIiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqL1xuLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi8iXSwic291cmNlUm9vdCI6IiJ9 */"],
      data: {
        animation: [_shared_animations_fade__WEBPACK_IMPORTED_MODULE_9__.fadeIn, _shared_animations_fade__WEBPACK_IMPORTED_MODULE_9__.fadeInOut]
      },
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 59993:
/*!***********************************************************************************************************************!*\
  !*** ./src/app/collection-page/edit-collection-page/collection-access-control/collection-access-control.component.ts ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CollectionAccessControlComponent: () => (/* binding */ CollectionAccessControlComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/shared/operators */ 55757);
/* harmony import */ var _shared_access_control_form_container_access_control_form_container_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/access-control-form-container/access-control-form-container.component */ 43664);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 14354);







function CollectionAccessControlComponent_ds_access_control_form_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "ds-access-control-form-container", 1);
  }
  if (rf & 2) {
    const itemRD_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("itemRD", itemRD_r1)("showLimitToSpecificBitstreams", false);
  }
}
class CollectionAccessControlComponent {
  constructor(route) {
    this.route = route;
  }
  ngOnInit() {
    this.itemRD$ = this.route.parent.parent.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(data => data.dso)).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_0__.getFirstSucceededRemoteData)());
  }
  static {
    this.ɵfac = function CollectionAccessControlComponent_Factory(t) {
      return new (t || CollectionAccessControlComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: CollectionAccessControlComponent,
      selectors: [["ds-collection-access-control"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 3,
      consts: [["titleMessage", "collection-access-control-title", 3, "itemRD", "showLimitToSpecificBitstreams", 4, "ngIf"], ["titleMessage", "collection-access-control-title", 3, "itemRD", "showLimitToSpecificBitstreams"]],
      template: function CollectionAccessControlComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, CollectionAccessControlComponent_ds_access_control_form_container_0_Template, 1, 2, "ds-access-control-form-container", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 1, ctx.itemRD$));
        }
      },
      dependencies: [_shared_access_control_form_container_access_control_form_container_component__WEBPACK_IMPORTED_MODULE_1__.AccessControlFormContainerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGxlY3Rpb24tYWNjZXNzLWNvbnRyb2wuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUEiLCJmaWxlIjoiY29sbGVjdGlvbi1hY2Nlc3MtY29udHJvbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29sbGVjdGlvbi1wYWdlL2VkaXQtY29sbGVjdGlvbi1wYWdlL2NvbGxlY3Rpb24tYWNjZXNzLWNvbnRyb2wvY29sbGVjdGlvbi1hY2Nlc3MtY29udHJvbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBLGdtQkFBZ21CIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi8iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 44301:
/*!***********************************************************************************************************************!*\
  !*** ./src/app/collection-page/edit-collection-page/collection-authorizations/collection-authorizations.component.ts ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CollectionAuthorizationsComponent: () => (/* binding */ CollectionAuthorizationsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 46891);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var _shared_resource_policies_resource_policies_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/resource-policies/resource-policies.component */ 24380);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 14354);






/**
 * Component that handles the Collection Authorizations
 */
class CollectionAuthorizationsComponent {
  /**
   * Initialize instance variables
   *
   * @param {ActivatedRoute} route
   */
  constructor(route) {
    this.route = route;
  }
  /**
   * Initialize the component, setting up the collection
   */
  ngOnInit() {
    this.dsoRD$ = this.route.parent.parent.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.first)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(data => data.dso));
  }
  static {
    this.ɵfac = function CollectionAuthorizationsComponent_Factory(t) {
      return new (t || CollectionAuthorizationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: CollectionAuthorizationsComponent,
      selectors: [["ds-collection-authorizations"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
      decls: 3,
      vars: 4,
      consts: [[1, "container"], [3, "resourceType", "resourceUUID"]],
      template: function CollectionAuthorizationsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "ds-resource-policies", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          let tmp_1_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("resourceType", "collection")("resourceUUID", (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 2, ctx.dsoRD$)) == null ? null : tmp_1_0.payload == null ? null : tmp_1_0.payload.id);
        }
      },
      dependencies: [_shared_resource_policies_resource_policies_component__WEBPACK_IMPORTED_MODULE_0__.ResourcePoliciesComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 87725:
/*!*******************************************************************************************************!*\
  !*** ./src/app/collection-page/edit-collection-page/collection-curate/collection-curate.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CollectionCurateComponent: () => (/* binding */ CollectionCurateComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 78374);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 85687);
/* harmony import */ var _core_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/breadcrumbs/dso-name.service */ 96526);
/* harmony import */ var _curation_form_curation_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../curation-form/curation-form.component */ 3040);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/empty.util */ 82777);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 14354);











const _c0 = a0 => ({
  collection: a0
});
/**
 * Component for managing a collection's curation tasks
 */
class CollectionCurateComponent {
  constructor(route, dsoNameService) {
    this.route = route;
    this.dsoNameService = dsoNameService;
  }
  ngOnInit() {
    this.dsoRD$ = this.route.parent.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(data => data.dso));
    this.collectionName$ = this.dsoRD$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)(rd => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_2__.hasValue)(rd)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(rd => {
      return this.dsoNameService.getName(rd.payload);
    }));
  }
  static {
    this.ɵfac = function CollectionCurateComponent_Factory(t) {
      return new (t || CollectionCurateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_0__.DSONameService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: CollectionCurateComponent,
      selectors: [["ds-collection-curate"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵStandaloneFeature"]],
      decls: 7,
      vars: 11,
      consts: [[1, "container"], [3, "dsoHandle"]],
      template: function CollectionCurateComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "ds-curation-form", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](6, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          let tmp_1_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](4, 4, "collection.curate.header", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](9, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 2, ctx.collectionName$))));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dsoHandle", (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](6, 7, ctx.dsoRD$)) == null ? null : tmp_1_0.payload.handle);
        }
      },
      dependencies: [_curation_form_curation_form_component__WEBPACK_IMPORTED_MODULE_1__.CurationFormComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 57785:
/*!***********************************************************************************************************!*\
  !*** ./src/app/collection-page/edit-collection-page/collection-metadata/collection-metadata.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CollectionMetadataComponent: () => (/* binding */ CollectionMetadataComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 27639);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 84975);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var _core_data_collection_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/data/collection-data.service */ 6983);
/* harmony import */ var _core_data_item_template_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/data/item-template-data.service */ 31827);
/* harmony import */ var _core_data_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/data/request.service */ 32473);
/* harmony import */ var _core_shared_collection_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/shared/collection.model */ 6041);
/* harmony import */ var _core_shared_item_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/shared/item.model */ 88318);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/shared/operators */ 55757);
/* harmony import */ var _shared_comcol_comcol_forms_edit_comcol_page_comcol_metadata_comcol_metadata_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/comcol/comcol-forms/edit-comcol-page/comcol-metadata/comcol-metadata.component */ 63277);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/empty.util */ 82777);
/* harmony import */ var _shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/notifications/notifications.service */ 69472);
/* harmony import */ var _shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/utils/var.directive */ 18226);
/* harmony import */ var _collection_form_collection_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../collection-form/collection-form.component */ 70087);
/* harmony import */ var _collection_page_routing_paths__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../collection-page-routing-paths */ 64611);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 90310);

























function CollectionMetadataComponent_div_0_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function CollectionMetadataComponent_div_0_button_5_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.addItemTemplate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](4, 1, "collection.edit.template.add-button"), "");
  }
}
function CollectionMetadataComponent_div_0_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function CollectionMetadataComponent_div_0_button_6_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.deleteItemTemplate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](4, 1, "collection.edit.template.delete-button"), "");
  }
}
function CollectionMetadataComponent_div_0_button_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("routerLink", "/collections/" + ((tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](1, 2, ctx_r1.dsoRD$)) == null ? null : tmp_3_0.payload.uuid) + "/itemtemplate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](5, 4, "collection.edit.template.edit-button"), "");
  }
}
function CollectionMetadataComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 2)(1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](5, CollectionMetadataComponent_div_0_button_5_Template, 5, 3, "button", 5)(6, CollectionMetadataComponent_div_0_button_6_Template, 5, 3, "button", 6)(7, CollectionMetadataComponent_div_0_button_7_Template, 6, 6, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const itemTemplateRD_r4 = ctx.ngVar;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](3, 4, "collection.edit.template.label"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !(itemTemplateRD_r4 == null ? null : itemTemplateRD_r4.payload));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", itemTemplateRD_r4 == null ? null : itemTemplateRD_r4.payload);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", itemTemplateRD_r4 == null ? null : itemTemplateRD_r4.payload);
  }
}
/**
 * Component for editing a collection's metadata
 */
class CollectionMetadataComponent extends _shared_comcol_comcol_forms_edit_comcol_page_comcol_metadata_comcol_metadata_component__WEBPACK_IMPORTED_MODULE_6__.ComcolMetadataComponent {
  constructor(collectionDataService, itemTemplateService, router, route, notificationsService, translate, requestService, chd) {
    super(collectionDataService, router, route, notificationsService, translate);
    this.collectionDataService = collectionDataService;
    this.itemTemplateService = itemTemplateService;
    this.router = router;
    this.route = route;
    this.notificationsService = notificationsService;
    this.translate = translate;
    this.requestService = requestService;
    this.chd = chd;
    this.frontendURL = '/collections/';
    this.type = _core_shared_collection_model__WEBPACK_IMPORTED_MODULE_3__.Collection.type;
  }
  /**
   * Cheking if the navigation is done and if so, initialize the collection's item template,
   * to ensure that the item template is always up to date.
   * Check when a NavigationEnd event (URL change) or a Scroll event followed by a NavigationEnd event (refresh event), occurs
   */
  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_13__.NavigationEnd || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_13__.Scroll && event.routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_13__.NavigationEnd) {
        super.ngOnInit();
        this.initTemplateItem();
        this.chd.detectChanges();
      }
    });
  }
  /**
   * Initialize the collection's item template
   */
  initTemplateItem() {
    this.itemTemplateRD$ = this.dsoRD$.pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_5__.getFirstSucceededRemoteDataPayload)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.switchMap)(collection => this.itemTemplateService.findByCollectionID(collection.uuid)));
  }
  /**
   * Add a new item template to the collection and redirect to the item template edit page
   */
  addItemTemplate() {
    const collection$ = this.dsoRD$.pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_5__.getFirstSucceededRemoteDataPayload)());
    const template$ = collection$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.switchMap)(collection => this.itemTemplateService.createByCollectionID(new _core_shared_item_model__WEBPACK_IMPORTED_MODULE_4__.Item(), collection.uuid).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_5__.getFirstSucceededRemoteDataPayload)())));
    const templateHref$ = collection$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.switchMap)(collection => this.itemTemplateService.getCollectionEndpoint(collection.id)));
    (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.combineLatest)(collection$, template$, templateHref$).subscribe(([collection, template, templateHref]) => {
      this.requestService.setStaleByHrefSubstring(templateHref);
      this.router.navigate([(0,_collection_page_routing_paths__WEBPACK_IMPORTED_MODULE_11__.getCollectionItemTemplateRoute)(collection.uuid)]);
    });
  }
  /**
   * Delete the item template from the collection
   */
  deleteItemTemplate() {
    this.dsoRD$.pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_5__.getFirstSucceededRemoteDataPayload)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.switchMap)(collection => this.itemTemplateService.findByCollectionID(collection.uuid)), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_5__.getFirstSucceededRemoteDataPayload)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.switchMap)(template => {
      return this.itemTemplateService.delete(template.uuid);
    }), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_5__.getFirstCompletedRemoteData)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)(response => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_7__.hasValue)(response) && response.hasSucceeded)).subscribe(success => {
      if (success) {
        this.notificationsService.success(null, this.translate.get('collection.edit.template.notifications.delete.success'));
      } else {
        this.notificationsService.error(null, this.translate.get('collection.edit.template.notifications.delete.error'));
      }
      this.initTemplateItem();
    });
  }
  static {
    this.ɵfac = function CollectionMetadataComponent_Factory(t) {
      return new (t || CollectionMetadataComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_core_data_collection_data_service__WEBPACK_IMPORTED_MODULE_0__.CollectionDataService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_core_data_item_template_data_service__WEBPACK_IMPORTED_MODULE_1__.ItemTemplateDataService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_8__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_core_data_request_service__WEBPACK_IMPORTED_MODULE_2__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_12__.ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
      type: CollectionMetadataComponent,
      selectors: [["ds-collection-metadata"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵStandaloneFeature"]],
      decls: 4,
      vars: 7,
      consts: [["class", "container-fluid mb-2", 4, "ngVar"], [3, "submitForm", "back", "finish", "dso", "isCreation"], [1, "container-fluid", "mb-2"], [1, "d-inline-block", "mb-2"], [1, "button-row", "space-children-mr"], ["class", "btn btn-success", 3, "click", 4, "ngIf"], ["class", "btn btn-danger", 3, "click", 4, "ngIf"], ["class", "btn btn-primary", 3, "routerLink", 4, "ngIf"], [1, "btn", "btn-success", 3, "click"], ["aria-hidden", "true", 1, "fas", "fa-plus"], [1, "d-none", "d-sm-inline"], [1, "btn", "btn-danger", 3, "click"], ["aria-hidden", "true", 1, "fas", "fa-trash-alt"], [1, "btn", "btn-primary", 3, "routerLink"], ["aria-hidden", "true", 1, "fas", "fa-edit"]],
      template: function CollectionMetadataComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](0, CollectionMetadataComponent_div_0_Template, 8, 6, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](1, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "ds-collection-form", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("submitForm", function CollectionMetadataComponent_Template_ds_collection_form_submitForm_2_listener($event) {
            return ctx.onSubmit($event);
          })("back", function CollectionMetadataComponent_Template_ds_collection_form_back_2_listener() {
            return ctx.navigateToHomePage();
          })("finish", function CollectionMetadataComponent_Template_ds_collection_form_finish_2_listener() {
            return ctx.navigateToHomePage();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          let tmp_1_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngVar", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](1, 3, ctx.itemTemplateRD$));
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("dso", (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](3, 5, ctx.dsoRD$)) == null ? null : tmp_1_0.payload)("isCreation", false);
        }
      },
      dependencies: [_collection_form_collection_form_component__WEBPACK_IMPORTED_MODULE_10__.CollectionFormComponent, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_18__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_9__.VarDirective],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 10387:
/*!*****************************************************************************************************!*\
  !*** ./src/app/collection-page/edit-collection-page/collection-roles/collection-roles.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CollectionRolesComponent: () => (/* binding */ CollectionRolesComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 46891);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/shared/operators */ 55757);
/* harmony import */ var _shared_comcol_comcol_forms_edit_comcol_page_comcol_role_comcol_role_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/comcol/comcol-forms/edit-comcol-page/comcol-role/comcol-role.component */ 20273);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/empty.util */ 82777);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 14354);








function CollectionRolesComponent_ds_comcol_role_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "ds-comcol-role", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "async");
  }
  if (rf & 2) {
    const comcolRole_r1 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dso", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 2, ctx_r1.collection$))("comcolRole", comcolRole_r1);
  }
}
/**
 * Component for managing a collection's roles
 */
class CollectionRolesComponent {
  constructor(route) {
    this.route = route;
  }
  ngOnInit() {
    this.dsoRD$ = this.route.parent.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.first)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(data => data.dso));
    this.collection$ = this.dsoRD$.pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_0__.getFirstSucceededRemoteData)(), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_0__.getRemoteDataPayload)());
    this.comcolRoles$ = this.collection$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(collection => {
      let workflowGroups = (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_2__.hasValue)(collection._links.workflowGroups) ? collection._links.workflowGroups : [];
      if (!Array.isArray(workflowGroups)) {
        workflowGroups = [workflowGroups];
      }
      return [{
        name: 'collection-admin',
        href: collection._links.adminGroup.href
      }, {
        name: 'submitters',
        href: collection._links.submittersGroup.href
      }, {
        name: 'item_read',
        href: collection._links.itemReadGroup.href
      }, {
        name: 'bitstream_read',
        href: collection._links.bitstreamReadGroup.href
      }, ...workflowGroups];
    }));
  }
  static {
    this.ɵfac = function CollectionRolesComponent_Factory(t) {
      return new (t || CollectionRolesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: CollectionRolesComponent,
      selectors: [["ds-collection-roles"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 3,
      consts: [[3, "dso", "comcolRole", 4, "ngFor", "ngForOf"], [3, "dso", "comcolRole"]],
      template: function CollectionRolesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, CollectionRolesComponent_ds_comcol_role_0_Template, 2, 4, "ds-comcol-role", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "async");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 1, ctx.comcolRoles$));
        }
      },
      dependencies: [_shared_comcol_comcol_forms_edit_comcol_page_comcol_role_comcol_role_component__WEBPACK_IMPORTED_MODULE_1__.ComcolRoleComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 54160:
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/collection-page/edit-collection-page/collection-source/collection-source-controls/collection-source-controls.component.ts ***!
  \*******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CollectionSourceControlsComponent: () => (/* binding */ CollectionSourceControlsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 83485);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 84975);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 21252);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 85687);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var _core_data_bitstream_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/data/bitstream-data.service */ 42578);
/* harmony import */ var _core_data_collection_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/data/collection-data.service */ 6983);
/* harmony import */ var _core_data_processes_process_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/data/processes/process-data.service */ 87414);
/* harmony import */ var _core_data_processes_script_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/data/processes/script-data.service */ 32736);
/* harmony import */ var _core_data_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/data/request.service */ 32473);
/* harmony import */ var _core_shared_collection_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/shared/collection.model */ 6041);
/* harmony import */ var _core_shared_content_source_set_serializer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/shared/content-source-set-serializer */ 54559);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/shared/operators */ 55757);
/* harmony import */ var _process_page_processes_process_status_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../process-page/processes/process-status.model */ 31189);
/* harmony import */ var _shared_btn_disabled_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/btn-disabled.directive */ 60456);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/empty.util */ 82777);
/* harmony import */ var _shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/notifications/notifications.service */ 69472);
/* harmony import */ var _shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/utils/var.directive */ 18226);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common/http */ 94485);



























function CollectionSourceControlsComponent_div_0_div_1_button_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function CollectionSourceControlsComponent_div_0_div_1_button_31_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r1);
      const contentSource_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).ngVar;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.testConfiguration(contentSource_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("dsBtnDisabled", !ctx_r2.isEnabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](3, 2, "collection.source.controls.test.submit"));
  }
}
function CollectionSourceControlsComponent_div_0_div_1_button_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("dsBtnDisabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](4, 2, "collection.source.controls.test.running"));
  }
}
function CollectionSourceControlsComponent_div_0_div_1_button_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function CollectionSourceControlsComponent_div_0_div_1_button_35_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.importNow());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("dsBtnDisabled", !ctx_r2.isEnabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](3, 2, "collection.source.controls.import.submit"));
  }
}
function CollectionSourceControlsComponent_div_0_div_1_button_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("dsBtnDisabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](4, 2, "collection.source.controls.import.running"));
  }
}
function CollectionSourceControlsComponent_div_0_div_1_button_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function CollectionSourceControlsComponent_div_0_div_1_button_39_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.resetAndReimport());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("dsBtnDisabled", !ctx_r2.isEnabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](3, 2, "collection.source.controls.reset.submit"), "");
  }
}
function CollectionSourceControlsComponent_div_0_div_1_button_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("dsBtnDisabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](4, 2, "collection.source.controls.reset.running"), "");
  }
}
function CollectionSourceControlsComponent_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 2)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "div")(5, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "div")(11, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](17, "div")(18, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](24, "div")(25, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](27, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](28, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](30, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](31, CollectionSourceControlsComponent_div_0_div_1_button_31_Template, 4, 4, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](32, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](33, CollectionSourceControlsComponent_div_0_div_1_button_33_Template, 5, 4, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](34, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](35, CollectionSourceControlsComponent_div_0_div_1_button_35_Template, 4, 4, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](36, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](37, CollectionSourceControlsComponent_div_0_div_1_button_37_Template, 5, 4, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](38, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](39, CollectionSourceControlsComponent_div_0_div_1_button_39_Template, 4, 4, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](40, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](41, CollectionSourceControlsComponent_div_0_div_1_button_41_Template, 5, 4, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](42, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const contentSource_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().ngVar;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](3, 15, "collection.source.controls.head"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](7, 17, "collection.source.controls.harvest.status"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](contentSource_r2 == null ? null : contentSource_r2.harvestStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](13, 19, "collection.source.controls.harvest.start"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"]((contentSource_r2 == null ? null : contentSource_r2.harvestStartTime) ? contentSource_r2 == null ? null : contentSource_r2.harvestStartTime : _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](16, 21, "collection.source.controls.harvest.no-information"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](20, 23, "collection.source.controls.harvest.last"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"]((contentSource_r2 == null ? null : contentSource_r2.lastHarvested) ? contentSource_r2 == null ? null : contentSource_r2.lastHarvested : _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](23, 25, "collection.source.controls.harvest.no-information"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](27, 27, "collection.source.controls.harvest.message"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"]((contentSource_r2 == null ? null : contentSource_r2.message) ? contentSource_r2 == null ? null : contentSource_r2.message : _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](30, 29, "collection.source.controls.harvest.no-information"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](32, 31, ctx_r2.testConfigRunning$) !== true);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](34, 33, ctx_r2.testConfigRunning$));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](36, 35, ctx_r2.importRunning$) !== true);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](38, 37, ctx_r2.importRunning$));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](40, 39, ctx_r2.reImportRunning$) !== true);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](42, 41, ctx_r2.reImportRunning$));
  }
}
function CollectionSourceControlsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, CollectionSourceControlsComponent_div_0_div_1_Template, 43, 43, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r2.shouldShow);
  }
}
/**
 * Component that contains the controls to run, reset and test the harvest
 */
class CollectionSourceControlsComponent {
  constructor(scriptDataService, processDataService, requestService, notificationsService, collectionService, translateService, httpClient, bitstreamService) {
    this.scriptDataService = scriptDataService;
    this.processDataService = processDataService;
    this.requestService = requestService;
    this.notificationsService = notificationsService;
    this.collectionService = collectionService;
    this.translateService = translateService;
    this.httpClient = httpClient;
    this.bitstreamService = bitstreamService;
    this.subs = [];
    this.autoRefreshIDs = [];
    this.testConfigRunning$ = new rxjs__WEBPACK_IMPORTED_MODULE_14__.BehaviorSubject(false);
    this.importRunning$ = new rxjs__WEBPACK_IMPORTED_MODULE_14__.BehaviorSubject(false);
    this.reImportRunning$ = new rxjs__WEBPACK_IMPORTED_MODULE_14__.BehaviorSubject(false);
  }
  ngOnInit() {
    // ensure the contentSource gets updated after being set to stale
    this.contentSource$ = this.collectionService.findByHref(this.collection._links.self.href, false).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_7__.getAllSucceededRemoteDataPayload)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.switchMap)(collection => this.collectionService.getContentSource(collection.uuid, false)), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_7__.getAllSucceededRemoteDataPayload)());
  }
  /**
   * Tests the provided content source's configuration.
   * @param contentSource - The content source to be tested
   */
  testConfiguration(contentSource) {
    this.testConfigRunning$.next(true);
    this.subs.push(this.scriptDataService.invoke('harvest', [{
      name: '-g',
      value: null
    }, {
      name: '-a',
      value: contentSource.oaiSource
    }, {
      name: '-i',
      value: new _core_shared_content_source_set_serializer__WEBPACK_IMPORTED_MODULE_6__.ContentSourceSetSerializer().Serialize(contentSource.oaiSetId)
    }], []).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_7__.getFirstCompletedRemoteData)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.tap)(rd => {
      if (rd.hasFailed) {
        // show a notification when the script invocation fails
        this.notificationsService.error(this.translateService.get('collection.source.controls.test.submit.error'));
        this.testConfigRunning$.next(false);
      }
    }),
    // filter out responses that aren't successful since the pinging of the process only needs to happen when the invocation was successful.
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.filter)(rd => rd.hasSucceeded && (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_10__.hasValue)(rd.payload)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.switchMap)(rd => {
      this.autoRefreshIDs.push(rd.payload.processId);
      return this.processDataService.autoRefreshUntilCompletion(rd.payload.processId);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.map)(rd => rd.payload)).subscribe(process => {
      if (process.processStatus.toString() === _process_page_processes_process_status_model__WEBPACK_IMPORTED_MODULE_8__.ProcessStatus[_process_page_processes_process_status_model__WEBPACK_IMPORTED_MODULE_8__.ProcessStatus.FAILED].toString()) {
        this.notificationsService.error(this.translateService.get('collection.source.controls.test.failed'));
        this.testConfigRunning$.next(false);
      }
      if (process.processStatus.toString() === _process_page_processes_process_status_model__WEBPACK_IMPORTED_MODULE_8__.ProcessStatus[_process_page_processes_process_status_model__WEBPACK_IMPORTED_MODULE_8__.ProcessStatus.COMPLETED].toString()) {
        this.bitstreamService.findByHref(process._links.output.href).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_7__.getFirstSucceededRemoteDataPayload)()).subscribe(bitstream => {
          this.httpClient.get(bitstream._links.content.href, {
            responseType: 'text'
          }).subscribe(data => {
            const output = data.replaceAll(new RegExp('.*\\@(.*)', 'g'), '$1').replaceAll('The script has started', '').replaceAll('The script has completed', '');
            this.notificationsService.info(this.translateService.get('collection.source.controls.test.completed'), output);
          });
        });
        this.testConfigRunning$.next(false);
      }
    }));
  }
  /**
   * Start the harvest for the current collection
   */
  importNow() {
    this.importRunning$.next(true);
    this.subs.push(this.scriptDataService.invoke('harvest', [{
      name: '-r',
      value: null
    }, {
      name: '-c',
      value: this.collection.uuid
    }], []).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_7__.getFirstCompletedRemoteData)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.tap)(rd => {
      if (rd.hasFailed) {
        this.notificationsService.error(this.translateService.get('collection.source.controls.import.submit.error'));
        this.importRunning$.next(false);
      } else {
        this.notificationsService.success(this.translateService.get('collection.source.controls.import.submit.success'));
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.filter)(rd => rd.hasSucceeded && (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_10__.hasValue)(rd.payload)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.switchMap)(rd => {
      this.autoRefreshIDs.push(rd.payload.processId);
      return this.processDataService.autoRefreshUntilCompletion(rd.payload.processId);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.map)(rd => rd.payload)).subscribe(process => {
      if (process.processStatus.toString() === _process_page_processes_process_status_model__WEBPACK_IMPORTED_MODULE_8__.ProcessStatus[_process_page_processes_process_status_model__WEBPACK_IMPORTED_MODULE_8__.ProcessStatus.FAILED].toString()) {
        this.notificationsService.error(this.translateService.get('collection.source.controls.import.failed'));
        this.importRunning$.next(false);
      }
      if (process.processStatus.toString() === _process_page_processes_process_status_model__WEBPACK_IMPORTED_MODULE_8__.ProcessStatus[_process_page_processes_process_status_model__WEBPACK_IMPORTED_MODULE_8__.ProcessStatus.COMPLETED].toString()) {
        this.notificationsService.success(this.translateService.get('collection.source.controls.import.completed'));
        this.requestService.setStaleByHrefSubstring(this.collection._links.self.href);
        this.importRunning$.next(false);
      }
    }));
  }
  /**
   * Reset and reimport the current collection
   */
  resetAndReimport() {
    this.reImportRunning$.next(true);
    this.subs.push(this.scriptDataService.invoke('harvest', [{
      name: '-o',
      value: null
    }, {
      name: '-c',
      value: this.collection.uuid
    }], []).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_7__.getFirstCompletedRemoteData)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.tap)(rd => {
      if (rd.hasFailed) {
        this.notificationsService.error(this.translateService.get('collection.source.controls.reset.submit.error'));
        this.reImportRunning$.next(false);
      } else {
        this.notificationsService.success(this.translateService.get('collection.source.controls.reset.submit.success'));
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.filter)(rd => rd.hasSucceeded && (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_10__.hasValue)(rd.payload)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.switchMap)(rd => {
      this.autoRefreshIDs.push(rd.payload.processId);
      return this.processDataService.autoRefreshUntilCompletion(rd.payload.processId);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.map)(rd => rd.payload)).subscribe(process => {
      if (process.processStatus.toString() === _process_page_processes_process_status_model__WEBPACK_IMPORTED_MODULE_8__.ProcessStatus[_process_page_processes_process_status_model__WEBPACK_IMPORTED_MODULE_8__.ProcessStatus.FAILED].toString()) {
        this.notificationsService.error(this.translateService.get('collection.source.controls.reset.failed'));
        this.reImportRunning$.next(false);
      }
      if (process.processStatus.toString() === _process_page_processes_process_status_model__WEBPACK_IMPORTED_MODULE_8__.ProcessStatus[_process_page_processes_process_status_model__WEBPACK_IMPORTED_MODULE_8__.ProcessStatus.COMPLETED].toString()) {
        this.notificationsService.success(this.translateService.get('collection.source.controls.reset.completed'));
        this.requestService.setStaleByHrefSubstring(this.collection._links.self.href);
        this.reImportRunning$.next(false);
      }
    }));
  }
  ngOnDestroy() {
    this.subs.forEach(sub => {
      if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_10__.hasValue)(sub)) {
        sub.unsubscribe();
      }
    });
    this.autoRefreshIDs.forEach(id => {
      this.processDataService.stopAutoRefreshing(id);
    });
  }
  static {
    this.ɵfac = function CollectionSourceControlsComponent_Factory(t) {
      return new (t || CollectionSourceControlsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_core_data_processes_script_data_service__WEBPACK_IMPORTED_MODULE_3__.ScriptDataService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_core_data_processes_process_data_service__WEBPACK_IMPORTED_MODULE_2__.ProcessDataService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_core_data_request_service__WEBPACK_IMPORTED_MODULE_4__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_11__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_core_data_collection_data_service__WEBPACK_IMPORTED_MODULE_1__.CollectionDataService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_20__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_core_data_bitstream_data_service__WEBPACK_IMPORTED_MODULE_0__.BitstreamDataService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
      type: CollectionSourceControlsComponent,
      selectors: [["ds-collection-source-controls"]],
      inputs: {
        isEnabled: "isEnabled",
        collection: "collection",
        shouldShow: "shouldShow"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 3,
      consts: [[4, "ngVar"], ["class", "container-fluid space-children-mr", 4, "ngIf"], [1, "container-fluid", "space-children-mr"], [1, "font-weight-bold"], ["class", "btn btn-secondary", 3, "dsBtnDisabled", "click", 4, "ngIf"], ["class", "btn btn-secondary", 3, "dsBtnDisabled", 4, "ngIf"], ["class", "btn btn-primary", 3, "dsBtnDisabled", "click", 4, "ngIf"], ["class", "btn btn-primary", 3, "dsBtnDisabled", 4, "ngIf"], [1, "btn", "btn-secondary", 3, "click", "dsBtnDisabled"], [1, "btn", "btn-secondary", 3, "dsBtnDisabled"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm", "spinner-button"], [1, "btn", "btn-primary", 3, "click", "dsBtnDisabled"], [1, "d-none", "d-sm-inline"], [1, "btn", "btn-primary", 3, "dsBtnDisabled"]],
      template: function CollectionSourceControlsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](0, CollectionSourceControlsComponent_div_0_Template, 2, 1, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](1, "async");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngVar", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](1, 1, ctx.contentSource$));
        }
      },
      dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_21__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgIf, _shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_12__.VarDirective, _shared_btn_disabled_directive__WEBPACK_IMPORTED_MODULE_9__.BtnDisabledDirective],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n.spinner-button[_ngcontent-%COMP%] {\n  margin-bottom: calc((var(--bs-line-height-base) * 1rem - var(--bs-font-size-base)) / 2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGxlY3Rpb24tc291cmNlLWNvbnRyb2xzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBO0FBQ0E7RUFDRSx1RkFBQTtBQUNGIiwiZmlsZSI6ImNvbGxlY3Rpb24tc291cmNlLWNvbnRyb2xzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi9cbi5zcGlubmVyLWJ1dHRvbiB7XG4gIG1hcmdpbi1ib3R0b206IGNhbGMoKHZhcigtLWJzLWxpbmUtaGVpZ2h0LWJhc2UpICogMXJlbSAtIHZhcigtLWJzLWZvbnQtc2l6ZS1iYXNlKSkgLyAyKTtcbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29sbGVjdGlvbi1wYWdlL2VkaXQtY29sbGVjdGlvbi1wYWdlL2NvbGxlY3Rpb24tc291cmNlL2NvbGxlY3Rpb24tc291cmNlLWNvbnRyb2xzL2NvbGxlY3Rpb24tc291cmNlLWNvbnRyb2xzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBO0FBQ0E7RUFDRSx1RkFBQTtBQUNGO0FBQ0Esd3hCQUF3eEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqL1xuLnNwaW5uZXItYnV0dG9uIHtcbiAgbWFyZ2luLWJvdHRvbTogY2FsYygodmFyKC0tYnMtbGluZS1oZWlnaHQtYmFzZSkgKiAxcmVtIC0gdmFyKC0tYnMtZm9udC1zaXplLWJhc2UpKSAvIDIpO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 94241:
/*!*******************************************************************************************************!*\
  !*** ./src/app/collection-page/edit-collection-page/collection-source/collection-source.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CollectionSourceComponent: () => (/* binding */ CollectionSourceComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-dynamic-forms/core */ 94403);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/cloneDeep */ 46123);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 46891);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 84975);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 78374);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ 88280);
/* harmony import */ var _core_data_collection_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/data/collection-data.service */ 6983);
/* harmony import */ var _core_data_object_updates_object_updates_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/data/object-updates/object-updates.service */ 59033);
/* harmony import */ var _core_data_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/data/request.service */ 32473);
/* harmony import */ var _core_shared_content_source_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/shared/content-source.model */ 70568);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/shared/operators */ 55757);
/* harmony import */ var _shared_btn_disabled_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/btn-disabled.directive */ 60456);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/empty.util */ 82777);
/* harmony import */ var _shared_form_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/form/form.component */ 99386);
/* harmony import */ var _shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/loading/themed-loading.component */ 82394);
/* harmony import */ var _shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/notifications/notifications.service */ 69472);
/* harmony import */ var _shared_trackable_abstract_trackable_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/trackable/abstract-trackable.component */ 45969);
/* harmony import */ var _collection_source_controls_collection_source_controls_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./collection-source-controls/collection-source-controls.component */ 54160);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ 14354);




























function CollectionSourceComponent_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function CollectionSourceComponent_button_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.discard());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("dsBtnDisabled", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](1, 2, ctx_r1.hasChanges$) !== true);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](5, 4, "item.edit.metadata.discard-button"), "");
  }
}
function CollectionSourceComponent_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function CollectionSourceComponent_button_4_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.reinstate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](4, 1, "item.edit.metadata.reinstate-button"), "");
  }
}
function CollectionSourceComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 18)(1, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("change", function CollectionSourceComponent_div_15_Template_input_change_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.changeExternalSource());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("checked", (ctx_r1.contentSource == null ? null : ctx_r1.contentSource.harvestType) !== ctx_r1.harvestTypeNone);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](4, 2, "collection.edit.tabs.source.external"));
  }
}
function CollectionSourceComponent_ds_loading_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "ds-loading", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("message", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](1, 1, "loading.content-source"));
  }
}
function CollectionSourceComponent_h3_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 1, "collection.edit.tabs.source.form.head"));
  }
}
function CollectionSourceComponent_ds_form_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ds-form", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("dfChange", function CollectionSourceComponent_ds_form_19_Template_ds_form_dfChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.onChange($event));
    })("submitForm", function CollectionSourceComponent_ds_form_19_Template_ds_form_submitForm_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.onSubmit());
    })("cancel", function CollectionSourceComponent_ds_form_19_Template_ds_form_cancel_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.onCancel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formId", "collection-source-form-id")("formGroup", ctx_r1.formGroup)("formModel", ctx_r1.formModel)("formLayout", ctx_r1.formLayout)("displaySubmit", false)("displayCancel", false);
  }
}
function CollectionSourceComponent_div_20_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function CollectionSourceComponent_div_20_button_4_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.discard());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("dsBtnDisabled", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](1, 2, ctx_r1.hasChanges$) !== true);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](5, 4, "item.edit.metadata.discard-button"), "");
  }
}
function CollectionSourceComponent_div_20_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function CollectionSourceComponent_div_20_button_6_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.reinstate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](4, 1, "item.edit.metadata.reinstate-button"), "");
  }
}
function CollectionSourceComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 23)(1, "div", 10)(2, "div", 24)(3, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](4, CollectionSourceComponent_div_20_button_4_Template, 6, 6, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](6, CollectionSourceComponent_div_20_button_6_Template, 5, 3, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function CollectionSourceComponent_div_20_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.onSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](10, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](5, 4, ctx_r1.isReinstatable$) !== true);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](7, 6, ctx_r1.isReinstatable$));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("dsBtnDisabled", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](9, 8, ctx_r1.hasChanges$) !== true || !ctx_r1.isValid() || ctx_r1.initialHarvestType === ctx_r1.harvestTypeNone && ctx_r1.contentSource.harvestType === ctx_r1.initialHarvestType);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](13, 10, "item.edit.metadata.save-button"), "");
  }
}
/**
 * Component for managing the content source of the collection
 */
class CollectionSourceComponent extends _shared_trackable_abstract_trackable_component__WEBPACK_IMPORTED_MODULE_12__.AbstractTrackableComponent {
  constructor(objectUpdatesService, notificationsService, translateService, router, location, formService, route, collectionService, requestService) {
    super(objectUpdatesService, notificationsService, translateService, router);
    this.objectUpdatesService = objectUpdatesService;
    this.notificationsService = notificationsService;
    this.translateService = translateService;
    this.router = router;
    this.location = location;
    this.formService = formService;
    this.route = route;
    this.collectionService = collectionService;
    this.requestService = requestService;
    /**
     * @type {string} Key prefix used to generate form labels
     */
    this.LABEL_KEY_PREFIX = 'collection.edit.tabs.source.form.';
    /**
     * @type {string} Key prefix used to generate form error messages
     */
    this.ERROR_KEY_PREFIX = 'collection.edit.tabs.source.form.errors.';
    /**
     * @type {string} Key prefix used to generate form option labels
     */
    this.OPTIONS_KEY_PREFIX = 'collection.edit.tabs.source.form.options.';
    /**
     * The Dynamic Input Model for the OAI Provider
     */
    this.oaiSourceModel = new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_15__.DynamicInputModel({
      id: 'oaiSource',
      name: 'oaiSource',
      required: true,
      validators: {
        required: null
      },
      errorMessages: {
        required: 'You must provide a set id of the target collection.'
      }
    });
    /**
     * The Dynamic Input Model for the OAI Set
     */
    this.oaiSetIdModel = new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_15__.DynamicInputModel({
      id: 'oaiSetId',
      name: 'oaiSetId'
    });
    /**
     * The Dynamic Input Model for the Metadata Format used
     */
    this.metadataConfigIdModel = new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_15__.DynamicSelectModel({
      id: 'metadataConfigId',
      name: 'metadataConfigId'
    });
    /**
     * The Dynamic Input Model for the type of harvesting
     */
    this.harvestTypeModel = new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_15__.DynamicRadioGroupModel({
      id: 'harvestType',
      name: 'harvestType',
      options: [{
        value: _core_shared_content_source_model__WEBPACK_IMPORTED_MODULE_5__.ContentSourceHarvestType.Metadata
      }, {
        value: _core_shared_content_source_model__WEBPACK_IMPORTED_MODULE_5__.ContentSourceHarvestType.MetadataAndRef
      }, {
        value: _core_shared_content_source_model__WEBPACK_IMPORTED_MODULE_5__.ContentSourceHarvestType.MetadataAndBitstreams
      }]
    });
    /**
     * All input models in a simple array for easier iterations
     */
    this.inputModels = [this.oaiSourceModel, this.oaiSetIdModel, this.metadataConfigIdModel, this.harvestTypeModel];
    /**
     * The dynamic form fields used for editing the content source of a collection
     * @type {(DynamicInputModel | DynamicTextAreaModel)[]}
     */
    this.formModel = [new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_15__.DynamicFormGroupModel({
      id: 'oaiSourceContainer',
      group: [this.oaiSourceModel]
    }), new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_15__.DynamicFormGroupModel({
      id: 'oaiSetContainer',
      group: [this.oaiSetIdModel, this.metadataConfigIdModel]
    }), new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_15__.DynamicFormGroupModel({
      id: 'harvestTypeContainer',
      group: [this.harvestTypeModel]
    })];
    /**
     * Layout used for structuring the form inputs
     */
    this.formLayout = {
      oaiSource: {
        grid: {
          host: 'col-12 d-inline-block'
        }
      },
      oaiSetId: {
        grid: {
          host: 'col col-sm-6 d-inline-block'
        }
      },
      metadataConfigId: {
        grid: {
          host: 'col col-sm-6 d-inline-block'
        }
      },
      harvestType: {
        grid: {
          host: 'col-12',
          option: 'btn-outline-secondary'
        }
      },
      oaiSetContainer: {
        grid: {
          host: 'row'
        }
      },
      oaiSourceContainer: {
        grid: {
          host: 'row'
        }
      },
      harvestTypeContainer: {
        grid: {
          host: 'row'
        }
      }
    };
    /**
     * The content harvesting type used when harvesting is disabled
     */
    this.harvestTypeNone = _core_shared_content_source_model__WEBPACK_IMPORTED_MODULE_5__.ContentSourceHarvestType.None;
    /**
     * The previously selected harvesting type
     * Used for switching between ContentSourceHarvestType.None and the previously selected value when enabling / disabling harvesting
     * Defaults to ContentSourceHarvestType.Metadata
     */
    this.previouslySelectedHarvestType = _core_shared_content_source_model__WEBPACK_IMPORTED_MODULE_5__.ContentSourceHarvestType.Metadata;
    /**
     * Notifications displayed after clicking submit
     * These are cleaned up every time a user submits the form to prevent error or other notifications from staying active
     * while they shouldn't be.
     */
    this.displayedNotifications = [];
    this.subs = [];
  }
  /**
   * Initialize properties to setup the Field Update and Form
   */
  ngOnInit() {
    super.ngOnInit();
    this.notificationsPrefix = 'collection.edit.tabs.source.notifications.';
    this.discardTimeOut = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.collection.edit.undoTimeout;
    this.formGroup = this.formService.createFormGroup(this.formModel);
    this.collectionRD$ = this.route.parent.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.first)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.map)(data => data.dso));
    this.collectionRD$.pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_6__.getFirstSucceededRemoteData)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.map)(col => col.payload.uuid), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.switchMap)(uuid => this.collectionService.getContentSource(uuid)), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_6__.getFirstCompletedRemoteData)()).subscribe(rd => {
      this.initializeOriginalContentSource(rd.payload);
    });
    this.updateFieldTranslations();
    this.subs.push(this.translateService.onLangChange.subscribe(() => {
      this.updateFieldTranslations();
    }));
  }
  /**
   * Initialize the Field Update and subscribe on it to fire updates to the form whenever it changes
   */
  initializeOriginalContentSource(contentSource) {
    this.contentSource = contentSource;
    this.initialHarvestType = contentSource.harvestType;
    this.initializeMetadataConfigs();
    const initialContentSource = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0___default()(this.contentSource);
    this.objectUpdatesService.initialize(this.url, [initialContentSource], new Date());
    this.update$ = this.objectUpdatesService.getFieldUpdates(this.url, [initialContentSource]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.map)(updates => updates[initialContentSource.uuid]));
    this.subs.push(this.update$.subscribe(update => {
      if (update) {
        const field = update.field;
        let configId;
        if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_8__.hasValue)(this.contentSource) && (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_8__.isNotEmpty)(this.contentSource.metadataConfigs)) {
          configId = this.contentSource.metadataConfigs[0].id;
        }
        if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_8__.hasValue)(field) && (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_8__.hasValue)(field.metadataConfigId)) {
          configId = field.metadataConfigId;
        }
        if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_8__.hasValue)(field)) {
          this.formGroup.patchValue({
            oaiSourceContainer: {
              oaiSource: field.oaiSource
            },
            oaiSetContainer: {
              oaiSetId: field.oaiSetId,
              metadataConfigId: configId
            },
            harvestTypeContainer: {
              harvestType: field.harvestType
            }
          });
          this.contentSource = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0___default()(field);
        }
        this.contentSource.metadataConfigId = configId;
      }
    }));
  }
  /**
   * Fill the metadataConfigIdModel's options using the contentSource's metadataConfigs property
   */
  initializeMetadataConfigs() {
    this.metadataConfigIdModel.options = this.contentSource.metadataConfigs.map(metadataConfig => Object.assign({
      value: metadataConfig.id,
      label: metadataConfig.label
    }));
    if (this.metadataConfigIdModel.options.length > 0) {
      this.formGroup.patchValue({
        oaiSetContainer: {
          metadataConfigId: this.metadataConfigIdModel.options[0].value
        }
      });
    }
  }
  /**
   * Used the update translations of errors and labels on init and on language change
   */
  updateFieldTranslations() {
    this.inputModels.forEach(fieldModel => {
      this.updateFieldTranslation(fieldModel);
    });
  }
  /**
   * Update the translations of a DynamicInputModel
   * @param fieldModel
   */
  updateFieldTranslation(fieldModel) {
    fieldModel.label = this.translateService.instant(this.LABEL_KEY_PREFIX + fieldModel.id);
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_8__.isNotEmpty)(fieldModel.validators)) {
      fieldModel.errorMessages = {};
      Object.keys(fieldModel.validators).forEach(key => {
        fieldModel.errorMessages[key] = this.translateService.instant(this.ERROR_KEY_PREFIX + fieldModel.id + '.' + key);
      });
    }
    if (fieldModel instanceof _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_15__.DynamicOptionControlModel) {
      if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_8__.isNotEmpty)(fieldModel.options)) {
        fieldModel.options.forEach(option => {
          if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_8__.hasNoValue)(option.label)) {
            option.label = this.translateService.instant(this.OPTIONS_KEY_PREFIX + fieldModel.id + '.' + option.value);
          }
        });
      }
    }
  }
  /**
   * Fired whenever the form receives an update and makes sure the Content Source and field update is up-to-date with the changes
   * @param event
   */
  onChange(event) {
    this.updateContentSourceField(event.model, true);
    this.saveFieldUpdate();
  }
  /**
   * Submit the edited Content Source to the REST API, re-initialize the field update and display a notification
   */
  onSubmit() {
    // Remove cached harvester request to allow for latest harvester to be displayed when switching tabs
    this.collectionRD$.pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_6__.getFirstSucceededRemoteData)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.map)(col => col.payload.uuid), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.switchMap)(uuid => this.collectionService.getHarvesterEndpoint(uuid)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.take)(1)).subscribe(endpoint => this.requestService.removeByHrefSubstring(endpoint));
    this.requestService.setStaleByHrefSubstring(this.contentSource._links.self.href);
    // Update harvester
    this.collectionRD$.pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_6__.getFirstSucceededRemoteData)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.map)(col => col.payload.uuid), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.switchMap)(uuid => this.collectionService.updateContentSource(uuid, this.contentSource)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.take)(1)).subscribe(result => {
      if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_8__.hasValue)(result.harvestType)) {
        this.clearNotifications();
        this.initializeOriginalContentSource(result);
        this.displayedNotifications.push(this.notificationsService.success(this.getNotificationTitle('saved'), this.getNotificationContent('saved')));
      } else {
        this.displayedNotifications.push(result);
      }
    });
  }
  /**
   * Cancel the edit and return to the previous page
   */
  onCancel() {
    this.location.back();
  }
  /**
   * Is the current form valid to be submitted ?
   */
  isValid() {
    return this.contentSource.harvestType === _core_shared_content_source_model__WEBPACK_IMPORTED_MODULE_5__.ContentSourceHarvestType.None || this.formGroup.valid;
  }
  /**
   * Switch the external source on or off and fire a field update
   */
  changeExternalSource() {
    if (this.contentSource.harvestType === _core_shared_content_source_model__WEBPACK_IMPORTED_MODULE_5__.ContentSourceHarvestType.None) {
      this.contentSource.harvestType = this.previouslySelectedHarvestType;
    } else {
      this.previouslySelectedHarvestType = this.contentSource.harvestType;
      this.contentSource.harvestType = _core_shared_content_source_model__WEBPACK_IMPORTED_MODULE_5__.ContentSourceHarvestType.None;
    }
    this.updateContentSource(false);
  }
  /**
   * Loop over all inputs and update the Content Source with their value
   * @param updateHarvestType   When set to false, the harvestType of the contentSource will be ignored in the update
   */
  updateContentSource(updateHarvestType) {
    this.inputModels.forEach(fieldModel => {
      this.updateContentSourceField(fieldModel, updateHarvestType);
    });
    this.saveFieldUpdate();
  }
  /**
   * Update the Content Source with the value from a DynamicInputModel
   * @param fieldModel          The fieldModel to fetch the value from and update the contentSource with
   * @param updateHarvestType   When set to false, the harvestType of the contentSource will be ignored in the update
   */
  updateContentSourceField(fieldModel, updateHarvestType) {
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_8__.hasValue)(fieldModel.value) && !(fieldModel.id === this.harvestTypeModel.id && !updateHarvestType)) {
      this.contentSource[fieldModel.id] = fieldModel.value;
    }
  }
  /**
   * Save the current Content Source to the Object Updates cache
   */
  saveFieldUpdate() {
    this.objectUpdatesService.saveAddFieldUpdate(this.url, lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0___default()(this.contentSource));
  }
  /**
   * Clear possible active notifications
   */
  clearNotifications() {
    this.displayedNotifications.forEach(notification => {
      this.notificationsService.remove(notification);
    });
    this.displayedNotifications = [];
  }
  /**
   * Make sure open subscriptions are closed
   */
  ngOnDestroy() {
    this.subs.forEach(sub => sub.unsubscribe());
  }
  static {
    this.ɵfac = function CollectionSourceComponent_Factory(t) {
      return new (t || CollectionSourceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_core_data_object_updates_object_updates_service__WEBPACK_IMPORTED_MODULE_3__.ObjectUpdatesService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_11__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_21__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_22__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_15__.DynamicFormService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_21__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_core_data_collection_data_service__WEBPACK_IMPORTED_MODULE_2__.CollectionDataService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_core_data_request_service__WEBPACK_IMPORTED_MODULE_4__.RequestService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({
      type: CollectionSourceComponent,
      selectors: [["ds-collection-source"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵStandaloneFeature"]],
      decls: 24,
      vars: 27,
      consts: [[1, "container-fluid"], [1, "d-inline-block", "float-right", "space-children-mr"], ["class", " btn btn-danger", 3, "dsBtnDisabled", "click", 4, "ngIf"], ["class", "btn btn-warning", 3, "click", 4, "ngIf"], [1, "btn", "btn-primary", 3, "click", "dsBtnDisabled"], [1, "fas", "fa-save"], [1, "d-none", "d-sm-inline"], ["class", "form-check mb-4", 4, "ngIf"], [3, "message", 4, "ngIf"], [4, "ngIf"], [1, "row"], [3, "formId", "formGroup", "formModel", "formLayout", "displaySubmit", "displayCancel", "dfChange", "submitForm", "cancel", 4, "ngIf"], ["class", "container mt-2", 4, "ngIf"], [3, "isEnabled", "shouldShow", "collection"], [1, "btn", "btn-danger", 3, "click", "dsBtnDisabled"], [1, "fas", "fa-times"], [1, "btn", "btn-warning", 3, "click"], [1, "fas", "fa-undo-alt"], [1, "form-check", "mb-4"], ["type", "checkbox", "id", "externalSourceCheck", 1, "form-check-input", 3, "change", "checked"], ["for", "externalSourceCheck", 1, "form-check-label"], [3, "message"], [3, "dfChange", "submitForm", "cancel", "formId", "formGroup", "formModel", "formLayout", "displaySubmit", "displayCancel"], [1, "container", "mt-2"], [1, "col-12"], [1, "d-inline-block", "float-right", "ml-1", "space-children-mr"]],
      template: function CollectionSourceComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, CollectionSourceComponent_button_2_Template, 6, 6, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](3, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](4, CollectionSourceComponent_button_4_Template, 5, 3, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](5, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](7, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function CollectionSourceComponent_Template_button_click_6_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](8, "i", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](11, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](12, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](14, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](15, CollectionSourceComponent_div_15_Template, 5, 4, "div", 7)(16, CollectionSourceComponent_ds_loading_16_Template, 2, 3, "ds-loading", 8)(17, CollectionSourceComponent_h3_17_Template, 3, 3, "h3", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](18, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](19, CollectionSourceComponent_ds_form_19_Template, 1, 6, "ds-form", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](20, CollectionSourceComponent_div_20_Template, 14, 12, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](21, "ds-collection-source-controls", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](22, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](23, "async");
        }
        if (rf & 2) {
          let tmp_12_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](3, 13, ctx.isReinstatable$) !== true);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](5, 15, ctx.isReinstatable$));
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("dsBtnDisabled", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](7, 17, ctx.hasChanges$) !== true || !ctx.isValid() || ctx.initialHarvestType === ctx.harvestTypeNone && ctx.contentSource.harvestType === ctx.initialHarvestType);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](11, 19, "item.edit.metadata.save-button"), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](14, 21, "collection.edit.tabs.source.head"));
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.contentSource);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx.contentSource);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.contentSource && (ctx.contentSource == null ? null : ctx.contentSource.harvestType) !== ctx.harvestTypeNone);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.formGroup && ctx.contentSource && (ctx.contentSource == null ? null : ctx.contentSource.harvestType) !== ctx.harvestTypeNone);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", (ctx.contentSource == null ? null : ctx.contentSource.harvestType) !== ctx.harvestTypeNone);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("isEnabled", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](22, 23, ctx.hasChanges$) !== true)("shouldShow", (ctx.contentSource == null ? null : ctx.contentSource.harvestType) !== ctx.harvestTypeNone)("collection", (tmp_12_0 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](23, 25, ctx.collectionRD$)) == null ? null : tmp_12_0.payload);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_22__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgIf, _shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_10__.ThemedLoadingComponent, _shared_form_form_component__WEBPACK_IMPORTED_MODULE_9__.FormComponent, _collection_source_controls_collection_source_controls_component__WEBPACK_IMPORTED_MODULE_13__.CollectionSourceControlsComponent, _shared_btn_disabled_directive__WEBPACK_IMPORTED_MODULE_7__.BtnDisabledDirective],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 70593:
/*!*************************************************************************************!*\
  !*** ./src/app/collection-page/edit-collection-page/edit-collection-page-routes.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ROUTES: () => (/* binding */ ROUTES)
/* harmony export */ });
/* harmony import */ var _core_breadcrumbs_i18n_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/breadcrumbs/i18n-breadcrumb.resolver */ 72059);
/* harmony import */ var _core_data_feature_authorization_feature_authorization_guard_collection_administrator_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/data/feature-authorization/feature-authorization-guard/collection-administrator.guard */ 10866);
/* harmony import */ var _shared_resource_policies_create_resource_policy_create_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/resource-policies/create/resource-policy-create.component */ 55584);
/* harmony import */ var _shared_resource_policies_edit_resource_policy_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/resource-policies/edit/resource-policy-edit.component */ 10676);
/* harmony import */ var _shared_resource_policies_resolvers_resource_policy_resolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/resource-policies/resolvers/resource-policy.resolver */ 92117);
/* harmony import */ var _shared_resource_policies_resolvers_resource_policy_target_resolver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/resource-policies/resolvers/resource-policy-target.resolver */ 45539);
/* harmony import */ var _collection_item_mapper_collection_item_mapper_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../collection-item-mapper/collection-item-mapper.component */ 48909);
/* harmony import */ var _collection_access_control_collection_access_control_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./collection-access-control/collection-access-control.component */ 59993);
/* harmony import */ var _collection_authorizations_collection_authorizations_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./collection-authorizations/collection-authorizations.component */ 44301);
/* harmony import */ var _collection_curate_collection_curate_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./collection-curate/collection-curate.component */ 87725);
/* harmony import */ var _collection_metadata_collection_metadata_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./collection-metadata/collection-metadata.component */ 57785);
/* harmony import */ var _collection_roles_collection_roles_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./collection-roles/collection-roles.component */ 10387);
/* harmony import */ var _collection_source_collection_source_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./collection-source/collection-source.component */ 94241);
/* harmony import */ var _edit_collection_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./edit-collection-page.component */ 30227);














/**
 * Routing module that handles the routing for the Edit Collection page administrator functionality
 */
const ROUTES = [{
  path: '',
  resolve: {
    breadcrumb: _core_breadcrumbs_i18n_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_0__.i18nBreadcrumbResolver
  },
  data: {
    breadcrumbKey: 'collection.edit'
  },
  component: _edit_collection_page_component__WEBPACK_IMPORTED_MODULE_13__.EditCollectionPageComponent,
  canActivate: [_core_data_feature_authorization_feature_authorization_guard_collection_administrator_guard__WEBPACK_IMPORTED_MODULE_1__.collectionAdministratorGuard],
  children: [{
    path: '',
    redirectTo: 'metadata',
    pathMatch: 'full'
  }, {
    path: 'metadata',
    component: _collection_metadata_collection_metadata_component__WEBPACK_IMPORTED_MODULE_10__.CollectionMetadataComponent,
    data: {
      title: 'collection.edit.tabs.metadata.title',
      hideReturnButton: true,
      showBreadcrumbs: true
    }
  }, {
    path: 'roles',
    component: _collection_roles_collection_roles_component__WEBPACK_IMPORTED_MODULE_11__.CollectionRolesComponent,
    data: {
      title: 'collection.edit.tabs.roles.title',
      showBreadcrumbs: true
    }
  }, {
    path: 'source',
    component: _collection_source_collection_source_component__WEBPACK_IMPORTED_MODULE_12__.CollectionSourceComponent,
    data: {
      title: 'collection.edit.tabs.source.title',
      showBreadcrumbs: true
    }
  }, {
    path: 'curate',
    component: _collection_curate_collection_curate_component__WEBPACK_IMPORTED_MODULE_9__.CollectionCurateComponent,
    data: {
      title: 'collection.edit.tabs.curate.title',
      showBreadcrumbs: true
    }
  }, {
    path: 'access-control',
    component: _collection_access_control_collection_access_control_component__WEBPACK_IMPORTED_MODULE_7__.CollectionAccessControlComponent,
    data: {
      title: 'collection.edit.tabs.access-control.title',
      showBreadcrumbs: true
    }
  }, {
    path: 'authorizations',
    data: {
      showBreadcrumbs: true
    },
    children: [{
      path: 'create',
      resolve: {
        resourcePolicyTarget: _shared_resource_policies_resolvers_resource_policy_target_resolver__WEBPACK_IMPORTED_MODULE_5__.resourcePolicyTargetResolver
      },
      component: _shared_resource_policies_create_resource_policy_create_component__WEBPACK_IMPORTED_MODULE_2__.ResourcePolicyCreateComponent,
      data: {
        title: 'resource-policies.create.page.title'
      }
    }, {
      path: 'edit',
      resolve: {
        resourcePolicy: _shared_resource_policies_resolvers_resource_policy_resolver__WEBPACK_IMPORTED_MODULE_4__.resourcePolicyResolver
      },
      component: _shared_resource_policies_edit_resource_policy_edit_component__WEBPACK_IMPORTED_MODULE_3__.ResourcePolicyEditComponent,
      data: {
        title: 'resource-policies.edit.page.title'
      }
    }, {
      path: '',
      component: _collection_authorizations_collection_authorizations_component__WEBPACK_IMPORTED_MODULE_8__.CollectionAuthorizationsComponent,
      data: {
        title: 'collection.edit.tabs.authorizations.title',
        showBreadcrumbs: true
      }
    }]
  }, {
    path: 'mapper',
    component: _collection_item_mapper_collection_item_mapper_component__WEBPACK_IMPORTED_MODULE_6__.CollectionItemMapperComponent,
    data: {
      title: 'collection.edit.tabs.item-mapper.title',
      hideReturnButton: true,
      showBreadcrumbs: true
    }
  }]
}];

/***/ }),

/***/ 30227:
/*!****************************************************************************************!*\
  !*** ./src/app/collection-page/edit-collection-page/edit-collection-page.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditCollectionPageComponent: () => (/* binding */ EditCollectionPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var _shared_comcol_comcol_forms_edit_comcol_page_edit_comcol_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/comcol/comcol-forms/edit-comcol-page/edit-comcol-page.component */ 5880);
/* harmony import */ var _collection_page_routing_paths__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../collection-page-routing-paths */ 64611);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);








const _c0 = a0 => ({
  "active": a0
});
const _c1 = a0 => [a0];
function EditCollectionPageComponent_li_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 14)(1, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const page_r1 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](7, _c0, page_r1 === ctx_r1.currentPage))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](9, _c1, "./" + page_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-selected", page_r1 === ctx_r1.currentPage)("data-test", page_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 5, ctx_r1.type + ".edit.tabs." + page_r1 + ".head"), " ");
  }
}
function EditCollectionPageComponent_a_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", ctx_r1.getPageUrl((tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 2, ctx_r1.dsoRD$)) == null ? null : tmp_1_0.payload));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 4, ctx_r1.type + ".edit.return"), " ");
  }
}
/**
 * Component that represents the page where a user can edit an existing Collection
 */
class EditCollectionPageComponent extends _shared_comcol_comcol_forms_edit_comcol_page_edit_comcol_page_component__WEBPACK_IMPORTED_MODULE_0__.EditComColPageComponent {
  constructor(router, route) {
    super(router, route);
    this.router = router;
    this.route = route;
    this.type = 'collection';
  }
  /**
   * Get the collection page url
   * @param collection The collection for which the url is requested
   */
  getPageUrl(collection) {
    return (0,_collection_page_routing_paths__WEBPACK_IMPORTED_MODULE_1__.getCollectionPageRoute)(collection.id);
  }
  static {
    this.ɵfac = function EditCollectionPageComponent_Factory(t) {
      return new (t || EditCollectionPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: EditCollectionPageComponent,
      selectors: [["ds-edit-collection"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 21,
      vars: 11,
      consts: [[1, "container"], [1, "row"], [1, "col-12"], [1, "d-flex", "justify-content-between", "border-bottom"], [1, "my-auto"], ["data-test", "delete-button", 1, "btn", "btn-danger", 3, "routerLink"], ["aria-hidden", "true", 1, "fas", "fa-trash"], [1, "pt-2"], ["role", "tablist", 1, "nav", "nav-tabs", "justify-content-start", "mb-2"], ["class", "nav-item", "role", "presentation", 4, "ngFor", "ngForOf"], [1, "tab-pane", "active"], [1, "mb-4"], [1, "col-12", "text-right"], ["class", "btn btn-outline-secondary", 3, "routerLink", 4, "ngIf"], ["role", "presentation", 1, "nav-item"], ["role", "tab", 1, "nav-link", 3, "ngClass", "routerLink"], [1, "btn", "btn-outline-secondary", 3, "routerLink"], ["aria-hidden", "true", 1, "fas", "fa-arrow-left"]],
      template: function EditCollectionPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 4)(8, "a", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "i", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 7)(14, "ul", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, EditCollectionPageComponent_li_15_Template, 4, 11, "li", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 10)(17, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, EditCollectionPageComponent_a_20_Template, 5, 6, "a", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        }
        if (rf & 2) {
          let tmp_1_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 5, ctx.type + ".edit.head"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", (ctx.type === "community" ? "/communities/" : "/collections/") + ((tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 7, ctx.dsoRD$)) == null ? null : tmp_1_0.payload.uuid) + "/delete");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](12, 9, ctx.type + ".edit.delete"), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.pages);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.hideReturnButton);
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 10866:
/*!***************************************************************************************************************!*\
  !*** ./src/app/core/data/feature-authorization/feature-authorization-guard/collection-administrator.guard.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   collectionAdministratorGuard: () => (/* binding */ collectionAdministratorGuard)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 17796);
/* harmony import */ var _feature_id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../feature-id */ 3970);
/* harmony import */ var _single_feature_authorization_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./single-feature-authorization.guard */ 89673);



/**
 * Prevent unauthorized activating and loading of routes when the current authenticated user
 * isn't a Collection administrator
 * Check group management rights
 */
const collectionAdministratorGuard = (0,_single_feature_authorization_guard__WEBPACK_IMPORTED_MODULE_1__.singleFeatureAuthorizationGuard)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(_feature_id__WEBPACK_IMPORTED_MODULE_0__.FeatureID.IsCollectionAdmin));

/***/ }),

/***/ 21061:
/*!***************************************************************************!*\
  !*** ./src/app/shared/object-select/item-select/item-select.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ItemSelectComponent: () => (/* binding */ ItemSelectComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 56106);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/shared/operators */ 55757);
/* harmony import */ var _item_page_item_page_routing_paths__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../item-page/item-page-routing-paths */ 90887);
/* harmony import */ var _btn_disabled_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../btn-disabled.directive */ 60456);
/* harmony import */ var _empty_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../empty.util */ 82777);
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../error/error.component */ 79632);
/* harmony import */ var _loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../loading/themed-loading.component */ 82394);
/* harmony import */ var _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pagination/pagination.component */ 40590);
/* harmony import */ var _utils_var_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/var.directive */ 18226);
/* harmony import */ var _object_select_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../object-select.model */ 79666);
/* harmony import */ var _object_select_object_select_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../object-select/object-select.component */ 99929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 90310);


















const _c0 = () => ["dc.contributor.author", "dc.creator", "dc.contributor.*"];
const _c1 = a0 => ["/collections", a0];
const _c2 = (a0, a1) => ({
  "btn-danger": a0,
  "btn-primary": a1
});
function ItemSelectComponent_ng_container_0_ds_pagination_1_th_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, "item.select.table.collection"));
  }
}
function ItemSelectComponent_ng_container_0_ds_pagination_1_tr_17_td_7_span_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const collection_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().ngVar;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](2, _c1, collection_r4 == null ? null : collection_r4.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r2.dsoNameService.getName(collection_r4), " ");
  }
}
function ItemSelectComponent_ng_container_0_ds_pagination_1_tr_17_td_7_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, ItemSelectComponent_ng_container_0_ds_pagination_1_tr_17_td_7_span_1_a_1_Template, 2, 4, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const collection_r4 = ctx.ngVar;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", collection_r4);
  }
}
function ItemSelectComponent_ng_container_0_ds_pagination_1_tr_17_td_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, ItemSelectComponent_ng_container_0_ds_pagination_1_tr_17_td_7_span_1_Template, 2, 1, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_7_0;
    const selectItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngVar", (tmp_7_0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, selectItem_r2.dso.owningCollection)) == null ? null : tmp_7_0.payload);
  }
}
function ItemSelectComponent_ng_container_0_ds_pagination_1_tr_17_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const selectItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](selectItem_r2.dso.firstMetadataValue(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](1, _c0)));
  }
}
function ItemSelectComponent_ng_container_0_ds_pagination_1_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr")(1, "td")(2, "input", 12, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function ItemSelectComponent_ng_container_0_ds_pagination_1_tr_17_Template_input_change_2_listener() {
      const selectItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r2.switch(selectItem_r2.dso.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](7, ItemSelectComponent_ng_container_0_ds_pagination_1_tr_17_td_7_Template, 3, 3, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](9, ItemSelectComponent_ng_container_0_ds_pagination_1_tr_17_span_9_Template, 2, 2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "td")(11, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const selectItem_r2 = ctx.$implicit;
    const selectItemBtn_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](3);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("name", selectItem_r2.dso.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 8, selectItem_r2.canSelect$) === false)("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](5, 10, selectItem_r2.selected$));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](6, 12, selectItemBtn_r5.checked ? "item.select.table.deselect" : "item.select.table.select"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r2.hideCollection);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", selectItem_r2.dso.hasMetadata(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](14, _c0)));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", selectItem_r2.route);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r2.dsoNameService.getName(selectItem_r2.dso));
  }
}
function ItemSelectComponent_ng_container_0_ds_pagination_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ds-pagination", 5)(1, "div", 6)(2, "table", 7)(3, "thead")(4, "tr")(5, "th")(6, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](9, ItemSelectComponent_ng_container_0_ds_pagination_1_th_9_Template, 3, 3, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](17, ItemSelectComponent_ng_container_0_ds_pagination_1_tr_17_Template, 13, 15, "tr", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](18, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const itemsRD_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().ngVar;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("paginationOptions", ctx_r2.paginationOptions)("sortOptions", ctx_r2.sortOptions)("collectionSize", itemsRD_r6 == null ? null : itemsRD_r6.payload == null ? null : itemsRD_r6.payload.totalElements)("hidePagerWhenSinglePage", true)("hideGear", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](8, 10, "item.select.table.selected"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r2.hideCollection);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](12, 12, "item.select.table.author"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](15, 14, "item.select.table.title"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](18, 16, ctx_r2.selectItems$));
  }
}
function ItemSelectComponent_ng_container_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, "item.select.empty"), " ");
  }
}
function ItemSelectComponent_ng_container_0_ds_error_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "ds-error", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("message", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](1, 1, "error.items"));
  }
}
function ItemSelectComponent_ng_container_0_ds_loading_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "ds-loading", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("message", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](1, 1, "loading.items"));
  }
}
function ItemSelectComponent_ng_container_0_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div")(1, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ItemSelectComponent_ng_container_0_div_5_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r2.onCancel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ItemSelectComponent_ng_container_0_div_5_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r2.confirmSelected());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const selectedIds_r8 = ctx.ngVar;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 4, ctx_r2.cancelButton));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](8, _c2, ctx_r2.dangerConfirm, !ctx_r2.dangerConfirm))("dsBtnDisabled", (selectedIds_r8 == null ? null : selectedIds_r8.length) === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](6, 6, ctx_r2.confirmButton), " ");
  }
}
function ItemSelectComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, ItemSelectComponent_ng_container_0_ds_pagination_1_Template, 19, 18, "ds-pagination", 2)(2, ItemSelectComponent_ng_container_0_div_2_Template, 3, 3, "div", 3)(3, ItemSelectComponent_ng_container_0_ds_error_3_Template, 2, 3, "ds-error", 4)(4, ItemSelectComponent_ng_container_0_ds_loading_4_Template, 2, 3, "ds-loading", 4)(5, ItemSelectComponent_ng_container_0_div_5_Template, 7, 11, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const itemsRD_r6 = ctx.ngVar;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (itemsRD_r6 == null ? null : itemsRD_r6.payload == null ? null : itemsRD_r6.payload.totalElements) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (itemsRD_r6 == null ? null : itemsRD_r6.payload == null ? null : itemsRD_r6.payload.totalElements) === 0 || (itemsRD_r6 == null ? null : itemsRD_r6.payload == null ? null : itemsRD_r6.payload.page == null ? null : itemsRD_r6.payload.page.length) === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", itemsRD_r6 == null ? null : itemsRD_r6.hasFailed);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !itemsRD_r6 || (itemsRD_r6 == null ? null : itemsRD_r6.isLoading));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngVar", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](6, 5, ctx_r2.selectedIds$));
  }
}
/**
 * A component used to select items from a specific list and returning the UUIDs of the selected items
 */
class ItemSelectComponent extends _object_select_object_select_component__WEBPACK_IMPORTED_MODULE_9__.ObjectSelectComponent {
  constructor() {
    super(...arguments);
    /**
     * Whether or not to hide the collection column
     */
    this.hideCollection = false;
  }
  ngOnInit() {
    super.ngOnInit();
    if (!(0,_empty_util__WEBPACK_IMPORTED_MODULE_3__.isNotEmpty)(this.confirmButton)) {
      this.confirmButton = 'item.select.confirm';
    }
    this.selectItems$ = this.dsoRD$.pipe((0,_empty_util__WEBPACK_IMPORTED_MODULE_3__.hasValueOperator)(), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_0__.getAllSucceededRemoteDataPayload)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(items => items.page.map(item => Object.assign(new _object_select_model__WEBPACK_IMPORTED_MODULE_8__.DSpaceObjectSelect(), {
      dso: item,
      canSelect$: this.canSelect(item),
      selected$: this.getSelected(item.id),
      route: (0,_item_page_item_page_routing_paths__WEBPACK_IMPORTED_MODULE_1__.getItemPageRoute)(item)
    }))));
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵItemSelectComponent_BaseFactory;
      return function ItemSelectComponent_Factory(t) {
        return (ɵItemSelectComponent_BaseFactory || (ɵItemSelectComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetInheritedFactory"](ItemSelectComponent)))(t || ItemSelectComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
      type: ItemSelectComponent,
      selectors: [["ds-item-select"]],
      inputs: {
        hideCollection: "hideCollection"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 3,
      consts: [["selectItemBtn", ""], [4, "ngVar"], [3, "paginationOptions", "sortOptions", "collectionSize", "hidePagerWhenSinglePage", "hideGear", 4, "ngIf"], ["class", "alert alert-info w-100", "role", "alert", 4, "ngIf"], [3, "message", 4, "ngIf"], [3, "paginationOptions", "sortOptions", "collectionSize", "hidePagerWhenSinglePage", "hideGear"], [1, "table-responsive", "mt-2"], ["id", "item-select", 1, "table", "table-striped", "table-hover"], [1, "sr-only"], ["scope", "col", 4, "ngIf"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["type", "checkbox", 1, "item-checkbox", 3, "change", "disabled", "ngModel", "name"], [4, "ngIf"], [3, "routerLink"], [3, "routerLink", 4, "ngIf"], ["role", "alert", 1, "alert", "alert-info", "w-100"], [3, "message"], [1, "btn", "btn-outline-secondary", "item-cancel", "float-left", 3, "click"], [1, "btn", "item-confirm", "float-right", 3, "click", "ngClass", "dsBtnDisabled"]],
      template: function ItemSelectComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](0, ItemSelectComponent_ng_container_0_Template, 7, 7, "ng-container", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](1, "async");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngVar", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](1, 1, ctx.dsoRD$));
        }
      },
      dependencies: [_utils_var_directive__WEBPACK_IMPORTED_MODULE_7__.VarDirective, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_6__.PaginationComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgFor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgModel, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterLink, _error_error_component__WEBPACK_IMPORTED_MODULE_4__.ErrorComponent, _loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_5__.ThemedLoadingComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_12__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslatePipe, _btn_disabled_directive__WEBPACK_IMPORTED_MODULE_2__.BtnDisabledDirective],
      encapsulation: 2
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_collection-page_edit-collection-page_edit-collection-page-routes_ts.js.map