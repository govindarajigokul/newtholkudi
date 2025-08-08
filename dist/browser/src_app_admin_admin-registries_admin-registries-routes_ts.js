"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_app_admin_admin-registries_admin-registries-routes_ts"],{

/***/ 46016:
/*!*******************************************************************!*\
  !*** ./src/app/admin/admin-registries/admin-registries-routes.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ROUTES: () => (/* binding */ ROUTES)
/* harmony export */ });
/* harmony import */ var _core_breadcrumbs_i18n_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/breadcrumbs/i18n-breadcrumb.resolver */ 72059);
/* harmony import */ var _admin_registries_routing_paths__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-registries-routing-paths */ 26479);
/* harmony import */ var _metadata_registry_metadata_registry_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./metadata-registry/metadata-registry.component */ 41404);
/* harmony import */ var _metadata_schema_metadata_schema_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./metadata-schema/metadata-schema.component */ 7964);




const ROUTES = [{
  path: 'metadata',
  resolve: {
    breadcrumb: _core_breadcrumbs_i18n_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_0__.i18nBreadcrumbResolver
  },
  data: {
    title: 'admin.registries.metadata.title',
    breadcrumbKey: 'admin.registries.metadata'
  },
  children: [{
    path: '',
    component: _metadata_registry_metadata_registry_component__WEBPACK_IMPORTED_MODULE_2__.MetadataRegistryComponent
  }, {
    path: ':schemaName',
    resolve: {
      breadcrumb: _core_breadcrumbs_i18n_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_0__.i18nBreadcrumbResolver
    },
    component: _metadata_schema_metadata_schema_component__WEBPACK_IMPORTED_MODULE_3__.MetadataSchemaComponent,
    data: {
      title: 'admin.registries.schema.title',
      breadcrumbKey: 'admin.registries.schema'
    }
  }]
}, {
  path: _admin_registries_routing_paths__WEBPACK_IMPORTED_MODULE_1__.BITSTREAMFORMATS_MODULE_PATH,
  resolve: {
    breadcrumb: _core_breadcrumbs_i18n_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_0__.i18nBreadcrumbResolver
  },
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_admin_admin-registries_bitstream-formats_bitstream-formats-routes_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./bitstream-formats/bitstream-formats-routes */ 83240)).then(m => m.ROUTES),
  data: {
    title: 'admin.registries.bitstream-formats.title',
    breadcrumbKey: 'admin.registries.bitstream-formats'
  }
}];

/***/ }),

/***/ 26479:
/*!**************************************************************************!*\
  !*** ./src/app/admin/admin-registries/admin-registries-routing-paths.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BITSTREAMFORMATS_MODULE_PATH: () => (/* binding */ BITSTREAMFORMATS_MODULE_PATH),
/* harmony export */   getBitstreamFormatsModuleRoute: () => (/* binding */ getBitstreamFormatsModuleRoute)
/* harmony export */ });
/* harmony import */ var _core_url_combiner_url_combiner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/url-combiner/url-combiner */ 45663);
/* harmony import */ var _admin_routing_paths__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../admin-routing-paths */ 47483);


const BITSTREAMFORMATS_MODULE_PATH = 'bitstream-formats';
function getBitstreamFormatsModuleRoute() {
  return new _core_url_combiner_url_combiner__WEBPACK_IMPORTED_MODULE_0__.URLCombiner((0,_admin_routing_paths__WEBPACK_IMPORTED_MODULE_1__.getRegistriesModuleRoute)(), BITSTREAMFORMATS_MODULE_PATH).toString();
}

/***/ }),

/***/ 41404:
/*!*****************************************************************************************!*\
  !*** ./src/app/admin/admin-registries/metadata-registry/metadata-registry.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MetadataRegistryComponent: () => (/* binding */ MetadataRegistryComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 83485);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 2782);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 85687);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 84975);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 78374);
/* harmony import */ var _core_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/pagination/pagination.service */ 76896);
/* harmony import */ var _core_registry_registry_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/registry/registry.service */ 67558);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/shared/operators */ 55757);
/* harmony import */ var _shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/notifications/notifications.service */ 69472);
/* harmony import */ var _shared_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/pagination/pagination.component */ 40590);
/* harmony import */ var _shared_pagination_pagination_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/pagination/pagination.utils */ 57324);
/* harmony import */ var _shared_pagination_pagination_component_options_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/pagination/pagination-component-options.model */ 23401);
/* harmony import */ var _metadata_schema_form_metadata_schema_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./metadata-schema-form/metadata-schema-form.component */ 39818);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 90310);


















const _c0 = a0 => ({
  "table-primary": a0
});
const _c1 = a0 => [a0];
function MetadataRegistryComponent_ds_pagination_10_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "td")(3, "label", 16)(4, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function MetadataRegistryComponent_ds_pagination_10_tr_20_Template_input_change_4_listener($event) {
      const schema_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.selectMetadataSchema(schema_r2, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MetadataRegistryComponent_ds_pagination_10_tr_20_Template_td_click_10_listener() {
      const schema_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.editSchema(schema_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MetadataRegistryComponent_ds_pagination_10_tr_20_Template_td_click_13_listener() {
      const schema_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.editSchema(schema_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MetadataRegistryComponent_ds_pagination_10_tr_20_Template_td_click_16_listener() {
      const schema_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.editSchema(schema_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    const schema_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](17, _c0, ((tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 9, ctx_r2.activeMetadataSchema$)) == null ? null : tmp_3_0.id) === schema_r2.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("checked", (tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 11, ctx_r2.selectedMetadataSchemaIDs$)) == null ? null : tmp_4_0.includes(schema_r2.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](9, 15, ((tmp_5_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](8, 13, ctx_r2.selectedMetadataSchemaIDs$)) == null ? null : tmp_5_0.includes(schema_r2.id)) ? "admin.registries.metadata.schemas.deselect" : "admin.registries.metadata.schemas.select"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](19, _c1, schema_r2.prefix));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](schema_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](21, _c1, schema_r2.prefix));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](schema_r2.namespace);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](23, _c1, schema_r2.prefix));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](schema_r2.prefix);
  }
}
function MetadataRegistryComponent_ds_pagination_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ds-pagination", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 10)(3, "table", 11)(4, "thead")(5, "tr")(6, "th", 12)(7, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](20, MetadataRegistryComponent_ds_pagination_10_tr_20_Template, 19, 25, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](21, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_9_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("paginationOptions", ctx_r2.config)("collectionSize", (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 9, ctx_r2.metadataSchemas)) == null ? null : tmp_2_0.payload == null ? null : tmp_2_0.payload.totalElements)("hideGear", true)("hidePagerWhenSinglePage", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](9, 11, "admin.registries.metadata.schemas.table.selected"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](12, 13, "admin.registries.metadata.schemas.table.id"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](15, 15, "admin.registries.metadata.schemas.table.namespace"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](18, 17, "admin.registries.metadata.schemas.table.name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", (tmp_9_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](21, 19, ctx_r2.metadataSchemas)) == null ? null : tmp_9_0.payload == null ? null : tmp_9_0.payload.page);
  }
}
function MetadataRegistryComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "admin.registries.metadata.schemas.no-items"), " ");
  }
}
function MetadataRegistryComponent_button_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MetadataRegistryComponent_button_15_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.deleteSchemas());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "admin.registries.metadata.schemas.table.delete"));
  }
}
/**
 * A component used for managing all existing metadata schemas within the repository.
 * The admin can create, edit or delete metadata schemas here.
 */
class MetadataRegistryComponent {
  constructor(registryService, notificationsService, paginationService, translateService) {
    this.registryService = registryService;
    this.notificationsService = notificationsService;
    this.paginationService = paginationService;
    this.translateService = translateService;
    /**
     * Pagination config used to display the list of metadata schemas
     */
    this.config = Object.assign(new _shared_pagination_pagination_component_options_model__WEBPACK_IMPORTED_MODULE_6__.PaginationComponentOptions(), {
      id: 'rm',
      pageSize: 25
    });
    /**
     * Whether the list of MetadataSchemas needs an update
     */
    this.needsUpdate$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.BehaviorSubject(true);
    this.subscriptions = [];
  }
  ngOnInit() {
    this.activeMetadataSchema$ = this.registryService.getActiveMetadataSchema();
    this.selectedMetadataSchemaIDs$ = this.registryService.getSelectedMetadataSchemas().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(schemas => schemas.map(schema => schema.id)));
    this.updateSchemas();
  }
  /**
   * Update the list of schemas by fetching it from the rest api or cache
   */
  updateSchemas() {
    this.metadataSchemas = this.needsUpdate$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.filter)(update => update === true), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.switchMap)(() => this.paginationService.getCurrentPagination(this.config.id, this.config)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.switchMap)(currentPagination => this.registryService.getMetadataSchemas((0,_shared_pagination_pagination_utils__WEBPACK_IMPORTED_MODULE_5__.toFindListOptions)(currentPagination))));
  }
  /**
   * Force-update the list of schemas by first clearing the cache related to metadata schemas, then performing
   * a new REST call
   */
  forceUpdateSchemas() {
    this.needsUpdate$.next(true);
  }
  /**
   * Start editing the selected metadata schema
   * @param schema
   */
  editSchema(schema) {
    this.subscriptions.push(this.activeMetadataSchema$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.take)(1)).subscribe(activeSchema => {
      if (schema === activeSchema) {
        this.registryService.cancelEditMetadataSchema();
      } else {
        this.registryService.editMetadataSchema(schema);
      }
    }));
  }
  /**
   * Select a metadata schema within the list (checkbox)
   * @param schema
   * @param event
   */
  selectMetadataSchema(schema, event) {
    event.target.checked ? this.registryService.selectMetadataSchema(schema) : this.registryService.deselectMetadataSchema(schema);
  }
  /**
   * Delete all the selected metadata schemas
   */
  deleteSchemas() {
    this.subscriptions.push(this.selectedMetadataSchemaIDs$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.switchMap)(schemaIDs => (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.zip)(schemaIDs.map(schemaID => this.registryService.deleteMetadataSchema(schemaID).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_2__.getFirstCompletedRemoteData)()))))).subscribe(responses => {
      const successResponses = responses.filter(response => response.hasSucceeded);
      const failedResponses = responses.filter(response => response.hasFailed);
      if (successResponses.length > 0) {
        this.showNotification(true, successResponses.length);
      }
      if (failedResponses.length > 0) {
        this.showNotification(false, failedResponses.length);
      }
      this.registryService.deselectAllMetadataSchema();
      this.registryService.cancelEditMetadataSchema();
    }));
  }
  /**
   * Show notifications for an amount of deleted metadata schemas
   * @param success   Whether or not the notification should be a success message (error message when false)
   * @param amount    The amount of deleted metadata schemas
   */
  showNotification(success, amount) {
    const prefix = 'admin.registries.schema.notification';
    const suffix = success ? 'success' : 'failure';
    const head = this.translateService.instant(success ? `${prefix}.${suffix}` : `${prefix}.${suffix}`);
    const content = this.translateService.instant(`${prefix}.deleted.${suffix}`, {
      amount: amount
    });
    if (success) {
      this.notificationsService.success(head, content);
    } else {
      this.notificationsService.error(head, content);
    }
  }
  ngOnDestroy() {
    this.paginationService.clearPagination(this.config.id);
    this.subscriptions.map(subscription => subscription.unsubscribe());
  }
  static {
    this.ɵfac = function MetadataRegistryComponent_Factory(t) {
      return new (t || MetadataRegistryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_registry_registry_service__WEBPACK_IMPORTED_MODULE_1__.RegistryService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_3__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_0__.PaginationService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
      type: MetadataRegistryComponent,
      selectors: [["ds-metadata-registry"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵStandaloneFeature"]],
      decls: 17,
      vars: 15,
      consts: [[1, "container"], [1, "metadata-registry", "row"], [1, "col-12"], ["id", "header", 1, "border-bottom", "pb-2"], ["id", "description", 1, "pb-2"], [3, "submitForm"], [3, "paginationOptions", "collectionSize", "hideGear", "hidePagerWhenSinglePage", 4, "ngIf"], ["class", "alert alert-info w-100 mb-2", "role", "alert", 4, "ngIf"], ["type", "submit", "class", "btn btn-danger float-right", 3, "click", 4, "ngIf"], [3, "paginationOptions", "collectionSize", "hideGear", "hidePagerWhenSinglePage"], [1, "table-responsive"], ["id", "metadata-schemas", 1, "table", "table-striped", "table-hover"], ["scope", "col"], [1, "sr-only"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], [1, "mb-0"], ["type", "checkbox", 3, "change", "checked"], [1, "selectable-row", 3, "click"], [3, "routerLink"], ["role", "alert", 1, "alert", "alert-info", "w-100", "mb-2"], ["type", "submit", 1, "btn", "btn-danger", "float-right", 3, "click"]],
      template: function MetadataRegistryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](8, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "ds-metadata-schema-form", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("submitForm", function MetadataRegistryComponent_Template_ds_metadata_schema_form_submitForm_9_listener() {
            return ctx.forceUpdateSchemas();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, MetadataRegistryComponent_ds_pagination_10_Template, 22, 21, "ds-pagination", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](11, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](12, MetadataRegistryComponent_div_12_Template, 3, 3, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](13, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](15, MetadataRegistryComponent_button_15_Template, 3, 3, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](16, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          let tmp_2_0;
          let tmp_3_0;
          let tmp_4_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 5, "admin.registries.metadata.head"));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](8, 7, "admin.registries.metadata.description"));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ((tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](11, 9, ctx.metadataSchemas)) == null ? null : tmp_2_0.payload == null ? null : tmp_2_0.payload.totalElements) > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ((tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](13, 11, ctx.metadataSchemas)) == null ? null : tmp_3_0.payload == null ? null : tmp_3_0.payload.totalElements) === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ((tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](16, 13, ctx.metadataSchemas)) == null ? null : tmp_4_0.payload == null ? null : tmp_4_0.payload.page == null ? null : tmp_4_0.payload.page.length) > 0);
        }
      },
      dependencies: [_metadata_schema_form_metadata_schema_form_component__WEBPACK_IMPORTED_MODULE_7__.MetadataSchemaFormComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_16__.AsyncPipe, _shared_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_4__.PaginationComponent, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterLink],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n.selectable-row[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n[_nghost-%COMP%]     #metadatadataschemagroup {\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGFkYXRhLXJlZ2lzdHJ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBO0FBQ0E7RUFDRSxlQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxhQUFBO0FBRUYiLCJmaWxlIjoibWV0YWRhdGEtcmVnaXN0cnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqL1xuLnNlbGVjdGFibGUtcm93OmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuOmhvc3QgOjpuZy1kZWVwICNtZXRhZGF0YWRhdGFzY2hlbWFncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWRtaW4vYWRtaW4tcmVnaXN0cmllcy9tZXRhZGF0YS1yZWdpc3RyeS9tZXRhZGF0YS1yZWdpc3RyeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBO0VBQ0UsZUFBQTtBQUNGOztBQUNBO0VBQ0UsYUFBQTtBQUVGO0FBQ0Esd3hCQUF3eEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqL1xuLnNlbGVjdGFibGUtcm93OmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuOmhvc3QgOjpuZy1kZWVwICNtZXRhZGF0YWRhdGFzY2hlbWFncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 39818:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/admin/admin-registries/metadata-registry/metadata-schema-form/metadata-schema-form.component.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MetadataSchemaFormComponent: () => (/* binding */ MetadataSchemaFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-dynamic-forms/core */ 94403);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 78374);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 84975);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var _core_metadata_metadata_schema_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/metadata/metadata-schema.model */ 32872);
/* harmony import */ var _core_registry_registry_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/registry/registry.service */ 67558);
/* harmony import */ var _shared_form_builder_form_builder_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/form/builder/form-builder.service */ 1216);
/* harmony import */ var _shared_form_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/form/form.component */ 99386);













function MetadataSchemaFormComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div");
  }
}
function MetadataSchemaFormComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, ctx_r1.messagePrefix + ".create"));
  }
}
function MetadataSchemaFormComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, ctx_r1.messagePrefix + ".edit"));
  }
}
/**
 * A form used for creating and editing metadata schemas
 */
class MetadataSchemaFormComponent {
  constructor(registryService, formBuilderService, translateService) {
    this.registryService = registryService;
    this.formBuilderService = formBuilderService;
    this.translateService = translateService;
    /**
     * A unique id used for ds-form
     */
    this.formId = 'metadata-schema-form';
    /**
     * The prefix for all messages related to this form
     */
    this.messagePrefix = 'admin.registries.metadata.form';
    /**
     * Layout used for structuring the form inputs
     */
    this.formLayout = {
      name: {
        grid: {
          host: 'col col-sm-6 d-inline-block'
        }
      },
      namespace: {
        grid: {
          host: 'col col-sm-6 d-inline-block'
        }
      }
    };
    /**
     * An EventEmitter that's fired whenever the form is being submitted
     */
    this.submitForm = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.subscriptions = [];
  }
  ngOnInit() {
    this.name = new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_5__.DynamicInputModel({
      id: 'name',
      label: this.translateService.instant(`${this.messagePrefix}.name`),
      name: 'name',
      validators: {
        required: null,
        pattern: '^[^. ,]*$',
        maxLength: 32
      },
      required: true,
      errorMessages: {
        pattern: 'error.validation.metadata.name.invalid-pattern',
        maxLength: 'error.validation.metadata.name.max-length'
      }
    });
    this.namespace = new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_5__.DynamicInputModel({
      id: 'namespace',
      label: this.translateService.instant(`${this.messagePrefix}.namespace`),
      name: 'namespace',
      validators: {
        required: null,
        maxLength: 256
      },
      required: true,
      errorMessages: {
        maxLength: 'error.validation.metadata.namespace.max-length'
      }
    });
    this.formModel = [new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_5__.DynamicFormGroupModel({
      id: 'metadatadataschemagroup',
      group: [this.namespace, this.name]
    })];
    this.formGroup = this.formBuilderService.createFormGroup(this.formModel);
    this.activeMetadataSchema$ = this.registryService.getActiveMetadataSchema();
    this.subscriptions.push(this.activeMetadataSchema$.subscribe(schema => {
      if (schema == null) {
        this.clearFields();
      } else {
        this.formGroup.patchValue({
          metadatadataschemagroup: {
            name: schema.prefix,
            namespace: schema.namespace
          }
        });
        this.name.disabled = true;
      }
    }));
  }
  /**
   * Stop editing the currently selected metadata schema
   */
  onCancel() {
    this.registryService.cancelEditMetadataSchema();
  }
  /**
   * Submit the form
   * When the schema has an id attached -> Edit the schema
   * When the schema has no id attached -> Create new schema
   * Emit the updated/created schema using the EventEmitter submitForm
   */
  onSubmit() {
    this.activeMetadataSchema$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(schema => {
      const metadataValues = {
        prefix: this.name.value,
        namespace: this.namespace.value
      };
      if (schema == null) {
        return this.registryService.createOrUpdateMetadataSchema(Object.assign(new _core_metadata_metadata_schema_model__WEBPACK_IMPORTED_MODULE_0__.MetadataSchema(), metadataValues));
      } else {
        return this.registryService.createOrUpdateMetadataSchema(Object.assign(new _core_metadata_metadata_schema_model__WEBPACK_IMPORTED_MODULE_0__.MetadataSchema(), schema, {
          namespace: metadataValues.namespace
        }));
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(updatedOrCreatedSchema => this.registryService.clearMetadataSchemaRequests().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(() => updatedOrCreatedSchema)))).subscribe(updatedOrCreatedSchema => {
      this.submitForm.emit(updatedOrCreatedSchema);
      this.clearFields();
      this.registryService.cancelEditMetadataSchema();
    });
  }
  /**
   * Reset all input-fields to be empty
   */
  clearFields() {
    this.formGroup.reset('metadatadataschemagroup');
    this.name.disabled = false;
  }
  /**
   * Cancel the current edit when component is destroyed
   */
  ngOnDestroy() {
    this.onCancel();
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
  static {
    this.ɵfac = function MetadataSchemaFormComponent_Factory(t) {
      return new (t || MetadataSchemaFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_registry_registry_service__WEBPACK_IMPORTED_MODULE_1__.RegistryService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_form_builder_form_builder_service__WEBPACK_IMPORTED_MODULE_2__.FormBuilderService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: MetadataSchemaFormComponent,
      selectors: [["ds-metadata-schema-form"]],
      outputs: {
        submitForm: "submitForm"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
      decls: 7,
      vars: 9,
      consts: [["createHeader", ""], ["editheader", ""], [4, "ngIf", "ngIfThen", "ngIfElse"], [3, "cancel", "submitForm", "formId", "formModel", "formGroup", "formLayout"]],
      template: function MetadataSchemaFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, MetadataSchemaFormComponent_div_0_Template, 1, 0, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, MetadataSchemaFormComponent_ng_template_2_Template, 3, 3, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"])(4, MetadataSchemaFormComponent_ng_template_4_Template, 3, 3, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "ds-form", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("cancel", function MetadataSchemaFormComponent_Template_ds_form_cancel_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.onCancel());
          })("submitForm", function MetadataSchemaFormComponent_Template_ds_form_submitForm_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.onSubmit());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          const createHeader_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](3);
          const editheader_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 7, ctx.activeMetadataSchema$))("ngIfThen", editheader_r4)("ngIfElse", createHeader_r3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formId", ctx.formId)("formModel", ctx.formModel)("formGroup", ctx.formGroup)("formLayout", ctx.formLayout);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe, _shared_form_form_component__WEBPACK_IMPORTED_MODULE_3__.FormComponent],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 65932:
/*!*************************************************************************************************************!*\
  !*** ./src/app/admin/admin-registries/metadata-schema/metadata-field-form/metadata-field-form.component.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MetadataFieldFormComponent: () => (/* binding */ MetadataFieldFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-dynamic-forms/core */ 94403);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 27639);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 78374);
/* harmony import */ var _core_metadata_metadata_field_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/metadata/metadata-field.model */ 52733);
/* harmony import */ var _core_metadata_metadata_schema_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/metadata/metadata-schema.model */ 32872);
/* harmony import */ var _core_registry_registry_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/registry/registry.service */ 67558);
/* harmony import */ var _shared_form_builder_form_builder_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/form/builder/form-builder.service */ 1216);
/* harmony import */ var _shared_form_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/form/form.component */ 99386);















function MetadataFieldFormComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "div");
  }
}
function MetadataFieldFormComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, ctx_r1.messagePrefix + ".create"));
  }
}
function MetadataFieldFormComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, ctx_r1.messagePrefix + ".edit"));
  }
}
/**
 * A form used for creating and editing metadata fields
 */
class MetadataFieldFormComponent {
  constructor(registryService, formBuilderService, translateService) {
    this.registryService = registryService;
    this.formBuilderService = formBuilderService;
    this.translateService = translateService;
    /**
     * A unique id used for ds-form
     */
    this.formId = 'metadata-field-form';
    /**
     * The prefix for all messages related to this form
     */
    this.messagePrefix = 'admin.registries.schema.form';
    /**
     * Layout used for structuring the form inputs
     */
    this.formLayout = {
      element: {
        grid: {
          host: 'col col-sm-6 d-inline-block'
        }
      },
      qualifier: {
        grid: {
          host: 'col col-sm-6 d-inline-block'
        }
      },
      scopeNote: {
        grid: {
          host: 'col col-sm-12 d-inline-block'
        }
      }
    };
    /**
     * An EventEmitter that's fired whenever the form is being submitted
     */
    this.submitForm = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
  }
  /**
   * Initialize the component, setting up the necessary Models for the dynamic form
   */
  ngOnInit() {
    (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.combineLatest)([this.translateService.get(`${this.messagePrefix}.element`), this.translateService.get(`${this.messagePrefix}.qualifier`), this.translateService.get(`${this.messagePrefix}.scopenote`)]).subscribe(([element, qualifier, scopenote]) => {
      this.element = new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_7__.DynamicInputModel({
        id: 'element',
        label: element,
        name: 'element',
        validators: {
          required: null,
          pattern: '^[^. ,]*$',
          maxLength: 64
        },
        required: true,
        errorMessages: {
          pattern: 'error.validation.metadata.element.invalid-pattern',
          maxLength: 'error.validation.metadata.element.max-length'
        }
      });
      this.qualifier = new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_7__.DynamicInputModel({
        id: 'qualifier',
        label: qualifier,
        name: 'qualifier',
        validators: {
          pattern: '^[^. ,]*$',
          maxLength: 64
        },
        required: false,
        errorMessages: {
          pattern: 'error.validation.metadata.qualifier.invalid-pattern',
          maxLength: 'error.validation.metadata.qualifier.max-length'
        }
      });
      this.scopeNote = new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_7__.DynamicTextAreaModel({
        id: 'scopeNote',
        label: scopenote,
        name: 'scopeNote',
        required: false,
        rows: 5
      });
      this.formModel = [new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_7__.DynamicFormGroupModel({
        id: 'metadatadatafieldgroup',
        group: [this.element, this.qualifier, this.scopeNote]
      })];
      this.formGroup = this.formBuilderService.createFormGroup(this.formModel);
      this.registryService.getActiveMetadataField().subscribe(field => {
        if (field == null) {
          this.clearFields();
        } else {
          this.formGroup.patchValue({
            metadatadatafieldgroup: {
              element: field.element,
              qualifier: field.qualifier,
              scopeNote: field.scopeNote
            }
          });
          this.element.disabled = true;
          this.qualifier.disabled = true;
        }
      });
    });
  }
  /**
   * Stop editing the currently selected metadata field
   */
  onCancel() {
    this.registryService.cancelEditMetadataField();
  }
  /**
   * Submit the form
   * When the field has an id attached -> Edit the field
   * When the field has no id attached -> Create new field
   * Emit the updated/created field using the EventEmitter submitForm
   */
  onSubmit() {
    this.registryService.getActiveMetadataField().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.take)(1)).subscribe(field => {
      if (field == null) {
        this.registryService.createMetadataField(Object.assign(new _core_metadata_metadata_field_model__WEBPACK_IMPORTED_MODULE_0__.MetadataField(), {
          element: this.element.value,
          qualifier: this.qualifier.value,
          scopeNote: this.scopeNote.value
        }), this.metadataSchema).subscribe(newField => {
          this.submitForm.emit(newField);
        });
      } else {
        this.registryService.updateMetadataField(Object.assign(new _core_metadata_metadata_field_model__WEBPACK_IMPORTED_MODULE_0__.MetadataField(), field, {
          id: field.id,
          element: field.element,
          qualifier: field.qualifier,
          scopeNote: this.scopeNote.value
        })).subscribe(updatedField => {
          this.submitForm.emit(updatedField);
        });
      }
      this.clearFields();
      this.registryService.cancelEditMetadataField();
    });
  }
  /**
   * Reset all input-fields to be empty
   */
  clearFields() {
    this.formGroup.reset('metadatadatafieldgroup');
    this.element.disabled = false;
    this.qualifier.disabled = false;
  }
  /**
   * Cancel the current edit when component is destroyed
   */
  ngOnDestroy() {
    this.onCancel();
  }
  static {
    this.ɵfac = function MetadataFieldFormComponent_Factory(t) {
      return new (t || MetadataFieldFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_registry_registry_service__WEBPACK_IMPORTED_MODULE_2__.RegistryService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_form_builder_form_builder_service__WEBPACK_IMPORTED_MODULE_3__.FormBuilderService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: MetadataFieldFormComponent,
      selectors: [["ds-metadata-field-form"]],
      inputs: {
        metadataSchema: "metadataSchema"
      },
      outputs: {
        submitForm: "submitForm"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵStandaloneFeature"]],
      decls: 7,
      vars: 9,
      consts: [["createHeader", ""], ["editheader", ""], [4, "ngIf", "ngIfThen", "ngIfElse"], [3, "cancel", "submit", "formId", "formModel", "formLayout", "formGroup"]],
      template: function MetadataFieldFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, MetadataFieldFormComponent_div_0_Template, 1, 0, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, MetadataFieldFormComponent_ng_template_2_Template, 3, 3, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"])(4, MetadataFieldFormComponent_ng_template_4_Template, 3, 3, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "ds-form", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("cancel", function MetadataFieldFormComponent_Template_ds_form_cancel_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.onCancel());
          })("submit", function MetadataFieldFormComponent_Template_ds_form_submit_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.onSubmit());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          const createHeader_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](3);
          const editheader_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 7, ctx.registryService.getActiveMetadataField()))("ngIfThen", editheader_r4)("ngIfElse", createHeader_r3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formId", ctx.formId)("formModel", ctx.formModel)("formLayout", ctx.formLayout)("formGroup", ctx.formGroup);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _shared_form_form_component__WEBPACK_IMPORTED_MODULE_4__.FormComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 7964:
/*!*************************************************************************************!*\
  !*** ./src/app/admin/admin-registries/metadata-schema/metadata-schema.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MetadataSchemaComponent: () => (/* binding */ MetadataSchemaComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 83485);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 27639);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 17796);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 2782);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 84975);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 78374);
/* harmony import */ var _core_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/pagination/pagination.service */ 76896);
/* harmony import */ var _core_registry_registry_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/registry/registry.service */ 67558);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/shared/operators */ 55757);
/* harmony import */ var _shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/notifications/notifications.service */ 69472);
/* harmony import */ var _shared_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/pagination/pagination.component */ 40590);
/* harmony import */ var _shared_pagination_pagination_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/pagination/pagination.utils */ 57324);
/* harmony import */ var _shared_pagination_pagination_component_options_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/pagination/pagination-component-options.model */ 23401);
/* harmony import */ var _shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/utils/var.directive */ 18226);
/* harmony import */ var _metadata_field_form_metadata_field_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./metadata-field-form/metadata-field-form.component */ 65932);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 90310);




















const _c0 = a0 => ({
  namespace: a0
});
const _c1 = () => ["/admin/registries/metadata"];
const _c2 = a0 => ({
  "table-primary": a0
});
function MetadataSchemaComponent_div_2_ng_container_11_ds_pagination_1_tr_19_td_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td")(1, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function MetadataSchemaComponent_div_2_ng_container_11_ds_pagination_1_tr_19_td_2_Template_input_change_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r4);
      const field_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.selectMetadataField(field_r5, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const selected_r6 = ctx.ngVar;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("checked", selected_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 2, selected_r6 ? "admin.registries.schema.fields.deselect" : "admin.registries.schema.fields.select"));
  }
}
function MetadataSchemaComponent_div_2_ng_container_11_ds_pagination_1_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, MetadataSchemaComponent_div_2_ng_container_11_ds_pagination_1_tr_19_td_2_Template, 3, 4, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function MetadataSchemaComponent_div_2_ng_container_11_ds_pagination_1_tr_19_Template_td_click_4_listener() {
      const field_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.editField(field_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function MetadataSchemaComponent_div_2_ng_container_11_ds_pagination_1_tr_19_Template_td_click_6_listener() {
      const field_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.editField(field_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function MetadataSchemaComponent_div_2_ng_container_11_ds_pagination_1_tr_19_Template_td_click_8_listener() {
      const field_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.editField(field_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_7_0;
    let tmp_8_0;
    const field_r5 = ctx.$implicit;
    const schema_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3).ngVar;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](11, _c2, ((tmp_7_0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](1, 7, ctx_r1.activeField$)) == null ? null : tmp_7_0.id) === field_r5.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngVar", (tmp_8_0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 9, ctx_r1.selectedMetadataFieldIDs$)) == null ? null : tmp_8_0.includes(field_r5.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](field_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate3"]("", schema_r7 == null ? null : schema_r7.prefix, ".", field_r5.element, "", field_r5.qualifier ? "." + field_r5.qualifier : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](field_r5.scopeNote);
  }
}
function MetadataSchemaComponent_div_2_ng_container_11_ds_pagination_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ds-pagination", 12)(1, "div", 13)(2, "table", 14)(3, "thead")(4, "tr")(5, "th")(6, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](19, MetadataSchemaComponent_div_2_ng_container_11_ds_pagination_1_tr_19_Template, 10, 13, "tr", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const fields_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().ngVar;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("paginationOptions", ctx_r1.config)("collectionSize", fields_r8 == null ? null : fields_r8.totalElements)("hideGear", false)("hidePagerWhenSinglePage", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](8, 9, "admin.registries.schema.fields.table.selected"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](11, 11, "admin.registries.schema.fields.table.id"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](14, 13, "admin.registries.schema.fields.table.field"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](17, 15, "admin.registries.schema.fields.table.scopenote"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", fields_r8 == null ? null : fields_r8.page);
  }
}
function MetadataSchemaComponent_div_2_ng_container_11_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, "admin.registries.schema.fields.no-items"), " ");
  }
}
function MetadataSchemaComponent_div_2_ng_container_11_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function MetadataSchemaComponent_div_2_ng_container_11_button_7_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.deleteFields());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, "admin.registries.schema.fields.table.delete"));
  }
}
function MetadataSchemaComponent_div_2_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, MetadataSchemaComponent_div_2_ng_container_11_ds_pagination_1_Template, 20, 17, "ds-pagination", 8)(2, MetadataSchemaComponent_div_2_ng_container_11_div_2_Template, 3, 3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div")(4, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](7, MetadataSchemaComponent_div_2_ng_container_11_button_7_Template, 3, 3, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const fields_r8 = ctx.ngVar;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (fields_r8 == null ? null : fields_r8.totalElements) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (fields_r8 == null ? null : fields_r8.totalElements) === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](7, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](6, 5, "admin.registries.schema.return"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (fields_r8 == null ? null : fields_r8.page == null ? null : fields_r8.page.length) > 0);
  }
}
function MetadataSchemaComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 3)(1, "h1", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "ds-metadata-field-form", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("submitForm", function MetadataSchemaComponent_div_2_Template_ds_metadata_field_form_submitForm_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.forceUpdateFields());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](11, MetadataSchemaComponent_div_2_ng_container_11_Template, 8, 8, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](12, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_6_0;
    const schema_r7 = ctx.ngVar;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 6, "admin.registries.schema.head"), ": \"", schema_r7 == null ? null : schema_r7.prefix, "\"");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](6, 8, "admin.registries.schema.description", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](15, _c0, schema_r7 == null ? null : schema_r7.namespace)));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("metadataSchema", schema_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](10, 11, "admin.registries.schema.fields.head"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngVar", (tmp_6_0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](12, 13, ctx_r1.metadataFields$)) == null ? null : tmp_6_0.payload);
  }
}
/**
 * A component used for managing all existing metadata fields within the current metadata schema.
 * The admin can create, edit or delete metadata fields here.
 */
class MetadataSchemaComponent {
  constructor(registryService, route, notificationsService, paginationService, translateService) {
    this.registryService = registryService;
    this.route = route;
    this.notificationsService = notificationsService;
    this.paginationService = paginationService;
    this.translateService = translateService;
    /**
     * Pagination config used to display the list of metadata fields
     */
    this.config = Object.assign(new _shared_pagination_pagination_component_options_model__WEBPACK_IMPORTED_MODULE_6__.PaginationComponentOptions(), {
      id: 'rm',
      pageSize: 25,
      pageSizeOptions: [25, 50, 100, 200]
    });
    /**
     * Whether or not the list of MetadataFields needs an update
     */
    this.needsUpdate$ = new rxjs__WEBPACK_IMPORTED_MODULE_10__.BehaviorSubject(true);
    this.subscriptions = [];
  }
  ngOnInit() {
    this.metadataSchema$ = this.registryService.getMetadataSchemaByPrefix(this.route.snapshot.params.schemaName).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_2__.getFirstSucceededRemoteDataPayload)());
    this.activeField$ = this.registryService.getActiveMetadataField();
    this.selectedMetadataFieldIDs$ = this.registryService.getSelectedMetadataFields().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(metadataFields => metadataFields.map(metadataField => metadataField.id)));
    this.updateFields();
  }
  /**
   * Update the list of fields by fetching it from the rest api or cache
   */
  updateFields() {
    this.metadataFields$ = this.paginationService.getCurrentPagination(this.config.id, this.config).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.switchMap)(currentPagination => (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.combineLatest)([this.metadataSchema$, this.needsUpdate$, (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.of)(currentPagination)])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.switchMap)(([schema, update, currentPagination]) => {
      if (update) {
        this.needsUpdate$.next(false);
      }
      return this.registryService.getMetadataFieldsBySchema(schema, (0,_shared_pagination_pagination_utils__WEBPACK_IMPORTED_MODULE_5__.toFindListOptions)(currentPagination), !update, true);
    }));
  }
  /**
   * Force-update the list of fields by first clearing the cache related to metadata fields, then performing
   * a new REST call
   */
  forceUpdateFields() {
    this.registryService.clearMetadataFieldRequests();
    this.needsUpdate$.next(true);
  }
  /**
   * Start editing the selected metadata field
   * @param field
   */
  editField(field) {
    this.subscriptions.push(this.activeField$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.take)(1)).subscribe(activeField => {
      if (field === activeField) {
        this.registryService.cancelEditMetadataField();
      } else {
        this.registryService.editMetadataField(field);
      }
    }));
  }
  /**
   * Select a metadata field within the list (checkbox)
   * @param field
   * @param event
   */
  selectMetadataField(field, event) {
    event.target.checked ? this.registryService.selectMetadataField(field) : this.registryService.deselectMetadataField(field);
  }
  /**
   * Delete all the selected metadata fields
   */
  deleteFields() {
    this.subscriptions.push(this.selectedMetadataFieldIDs$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.switchMap)(fieldIDs => (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.zip)(fieldIDs.map(fieldID => this.registryService.deleteMetadataField(fieldID).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_2__.getFirstCompletedRemoteData)()))))).subscribe(responses => {
      const successResponses = responses.filter(response => response.hasSucceeded);
      const failedResponses = responses.filter(response => response.hasFailed);
      if (successResponses.length > 0) {
        this.showNotification(true, successResponses.length);
      }
      if (failedResponses.length > 0) {
        this.showNotification(false, failedResponses.length);
      }
      this.registryService.deselectAllMetadataField();
      this.registryService.cancelEditMetadataField();
    }));
  }
  /**
   * Show notifications for an amount of deleted metadata fields
   * @param success   Whether or not the notification should be a success message (error message when false)
   * @param amount    The amount of deleted metadata fields
   */
  showNotification(success, amount) {
    const prefix = 'admin.registries.schema.notification';
    const suffix = success ? 'success' : 'failure';
    const head = this.translateService.instant(success ? `${prefix}.${suffix}` : `${prefix}.${suffix}`);
    const content = this.translateService.instant(`${prefix}.field.deleted.${suffix}`, {
      amount: amount
    });
    if (success) {
      this.notificationsService.success(head, content);
    } else {
      this.notificationsService.error(head, content);
    }
  }
  ngOnDestroy() {
    this.paginationService.clearPagination(this.config.id);
    this.registryService.deselectAllMetadataField();
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
  static {
    this.ɵfac = function MetadataSchemaComponent_Factory(t) {
      return new (t || MetadataSchemaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_core_registry_registry_service__WEBPACK_IMPORTED_MODULE_1__.RegistryService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_17__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_3__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_core_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_0__.PaginationService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
      type: MetadataSchemaComponent,
      selectors: [["ds-metadata-schema"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵStandaloneFeature"]],
      decls: 4,
      vars: 3,
      consts: [[1, "container"], [1, "metadata-schema", "row"], ["class", "col-12", 4, "ngVar"], [1, "col-12"], ["id", "header", 1, "border-bottom", "pb-2"], ["id", "description", 1, "pb-2"], [3, "submitForm", "metadataSchema"], [4, "ngVar"], [3, "paginationOptions", "collectionSize", "hideGear", "hidePagerWhenSinglePage", 4, "ngIf"], ["class", "alert alert-info w-100 mb-2", "role", "alert", 4, "ngIf"], [1, "btn", "btn-primary", 3, "routerLink"], ["type", "submit", "class", "btn btn-danger float-right", 3, "click", 4, "ngIf"], [3, "paginationOptions", "collectionSize", "hideGear", "hidePagerWhenSinglePage"], [1, "table-responsive"], ["id", "metadata-fields", 1, "table", "table-striped", "table-hover"], [1, "sr-only"], ["scope", "col"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], [1, "selectable-row", 3, "click"], ["type", "checkbox", 3, "change", "checked"], ["role", "alert", 1, "alert", "alert-info", "w-100", "mb-2"], ["type", "submit", 1, "btn", "btn-danger", "float-right", 3, "click"]],
      template: function MetadataSchemaComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, MetadataSchemaComponent_div_2_Template, 13, 17, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngVar", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 1, ctx.metadataSchema$));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.AsyncPipe, _shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_7__.VarDirective, _metadata_field_form_metadata_field_form_component__WEBPACK_IMPORTED_MODULE_8__.MetadataFieldFormComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslatePipe, _shared_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_4__.PaginationComponent, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterLink],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n.selectable-row[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n[_nghost-%COMP%]     #metadatadatafieldgroup {\n  display: flex;\n  flex-wrap: wrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGFkYXRhLXNjaGVtYS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBO0VBQ0UsZUFBQTtBQUNGOztBQUNBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7QUFFRiIsImZpbGUiOiJtZXRhZGF0YS1zY2hlbWEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqL1xuLnNlbGVjdGFibGUtcm93OmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuOmhvc3QgOjpuZy1kZWVwICNtZXRhZGF0YWRhdGFmaWVsZGdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWRtaW4vYWRtaW4tcmVnaXN0cmllcy9tZXRhZGF0YS1zY2hlbWEvbWV0YWRhdGEtc2NoZW1hLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBO0FBQ0E7RUFDRSxlQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBQUVGO0FBQ0EsNHpCQUE0ekIiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqL1xuLnNlbGVjdGFibGUtcm93OmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuOmhvc3QgOjpuZy1kZWVwICNtZXRhZGF0YWRhdGFmaWVsZGdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 57324:
/*!*******************************************************!*\
  !*** ./src/app/shared/pagination/pagination.utils.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toFindListOptions: () => (/* binding */ toFindListOptions)
/* harmony export */ });
/* harmony import */ var _core_data_find_list_options_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/data/find-list-options.model */ 41023);

/**
 * Transform a PaginationComponentOptions object into a FindListOptions object
 * @param pagination  The PaginationComponentOptions to transform
 * @param original    An original FindListOptions object to start from
 */
function toFindListOptions(pagination, original) {
  return Object.assign(new _core_data_find_list_options_model__WEBPACK_IMPORTED_MODULE_0__.FindListOptions(), original, {
    currentPage: pagination.currentPage,
    elementsPerPage: pagination.pageSize
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_admin_admin-registries_admin-registries-routes_ts.js.map