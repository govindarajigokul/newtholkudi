"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_app_admin_admin-reports_admin-reports-routes_ts"],{

/***/ 63452:
/*!*************************************************************!*\
  !*** ./src/app/admin/admin-reports/admin-reports-routes.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ROUTES: () => (/* binding */ ROUTES)
/* harmony export */ });
/* harmony import */ var _core_breadcrumbs_i18n_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/breadcrumbs/i18n-breadcrumb.resolver */ 72059);
/* harmony import */ var _filtered_collections_filtered_collections_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filtered-collections/filtered-collections.component */ 48042);
/* harmony import */ var _filtered_items_filtered_items_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filtered-items/filtered-items.component */ 20176);



const ROUTES = [{
  path: 'collections',
  resolve: {
    breadcrumb: _core_breadcrumbs_i18n_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_0__.i18nBreadcrumbResolver
  },
  data: {
    title: 'admin.reports.collections.title',
    breadcrumbKey: 'admin.reports.collections'
  },
  children: [{
    path: '',
    component: _filtered_collections_filtered_collections_component__WEBPACK_IMPORTED_MODULE_1__.FilteredCollectionsComponent
  }]
}, {
  path: 'queries',
  resolve: {
    breadcrumb: _core_breadcrumbs_i18n_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_0__.i18nBreadcrumbResolver
  },
  data: {
    title: 'admin.reports.items.title',
    breadcrumbKey: 'admin.reports.items'
  },
  children: [{
    path: '',
    component: _filtered_items_filtered_items_component__WEBPACK_IMPORTED_MODULE_2__.FilteredItemsComponent
  }]
}];

/***/ }),

/***/ 55743:
/*!***************************************************************************************!*\
  !*** ./src/app/admin/admin-reports/filtered-collections/filtered-collection.model.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilteredCollection: () => (/* binding */ FilteredCollection)
/* harmony export */ });
class FilteredCollection {
  constructor() {
    this.values = {};
  }
  clear() {
    this.label = '';
    this.handle = '';
    this.communityLabel = '';
    this.communityHandle = '';
    this.nbTotalItems = 0;
    this.values = {};
    this.allFiltersValue = 0;
  }
  deserialize(object) {
    this.clear();
    this.label = object.label;
    this.handle = object.handle;
    this.communityLabel = object.community_label;
    this.communityHandle = object.community_handle;
    this.nbTotalItems = object.nb_total_items;
    const valuesPerFilter = object.values;
    for (const filter in valuesPerFilter) {
      if (valuesPerFilter.hasOwnProperty(filter)) {
        this.values[filter] = valuesPerFilter[filter];
      }
    }
    this.allFiltersValue = object.all_filters_value;
  }
}

/***/ }),

/***/ 48042:
/*!********************************************************************************************!*\
  !*** ./src/app/admin/admin-reports/filtered-collections/filtered-collections.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilteredCollectionsComponent: () => (/* binding */ FilteredCollectionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 49966);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var src_app_core_data_rest_request_method__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/data/rest-request-method */ 43377);
/* harmony import */ var src_app_core_dspace_rest_dspace_rest_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/dspace-rest/dspace-rest.service */ 53778);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 88280);
/* harmony import */ var _filters_section_filters_section_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../filters-section/filters-section.component */ 77914);
/* harmony import */ var _filtered_collections_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filtered-collections.model */ 21112);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 56106);














const _c0 = ["acc"];
function FilteredCollectionsComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 1, "admin.reports.commons.filters"), " ");
  }
}
function FilteredCollectionsComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 1)(1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FilteredCollectionsComponent_ng_template_11_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.submit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "ds-filters", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FilteredCollectionsComponent_ng_template_11_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.submit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 3, "admin.reports.button.show-collections"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("filtersForm", ctx_r1.filtersFormGroup());
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](11, 5, "admin.reports.button.show-collections"));
  }
}
function FilteredCollectionsComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 1, "admin.reports.collections.collections-report"), " ");
  }
}
function FilteredCollectionsComponent_ng_template_14_th_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const filter_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "admin.reports.commons.filters." + ctx_r1.getGroup(filter_r3.key) + "." + filter_r3.key));
  }
}
function FilteredCollectionsComponent_ng_template_14_th_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const filter_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](filter_r4.value);
  }
}
function FilteredCollectionsComponent_ng_template_14_tr_25_td_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const filter_r5 = ctx.$implicit;
    const coll_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](coll_r6.values[filter_r5.key] || 0);
  }
}
function FilteredCollectionsComponent_ng_template_14_tr_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td")(2, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "td")(5, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, FilteredCollectionsComponent_ng_template_14_tr_25_td_11_Template, 2, 1, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](12, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const coll_r6 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("href", "/handle/", coll_r6.communityHandle, "", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](coll_r6.communityLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("href", "/handle/", coll_r6.handle, "", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](coll_r6.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](coll_r6.nbTotalItems);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](coll_r6.allFiltersValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](12, 9, ctx_r1.results.summary.values));
  }
}
function FilteredCollectionsComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "table", 15)(1, "thead")(2, "tr", 16)(3, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, FilteredCollectionsComponent_ng_template_14_th_15_Template, 3, 3, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](16, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "tr", 16)(18, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, FilteredCollectionsComponent_ng_template_14_th_22_Template, 2, 1, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](23, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, FilteredCollectionsComponent_ng_template_14_tr_25_Template, 13, 11, "tr", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 9, "admin.reports.collections.community"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](8, 11, "admin.reports.collections.collection"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](11, 13, "admin.reports.collections.nb_items"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](14, 15, "admin.reports.collections.match_all_selected_filters"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](16, 17, ctx_r1.results.summary.values));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.results.summary.nbTotalItems);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.results.summary.allFiltersValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](23, 19, ctx_r1.results.summary.values));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.results.collections);
  }
}
/**
 * Component representing the Filtered Collections content report
 */
class FilteredCollectionsComponent {
  constructor(formBuilder, restService) {
    this.formBuilder = formBuilder;
    this.restService = restService;
    this.results = new _filtered_collections_model__WEBPACK_IMPORTED_MODULE_4__.FilteredCollections();
  }
  ngOnInit() {
    this.queryForm = this.formBuilder.group({
      filters: _filters_section_filters_section_component__WEBPACK_IMPORTED_MODULE_3__.FiltersComponent.formGroup(this.formBuilder)
    });
  }
  filtersFormGroup() {
    return this.queryForm.get('filters');
  }
  getGroup(filterId) {
    return _filters_section_filters_section_component__WEBPACK_IMPORTED_MODULE_3__.FiltersComponent.getGroup(filterId).id;
  }
  submit() {
    this.getFilteredCollections().subscribe(response => {
      this.results.deserialize(response.payload);
      this.accordionComponent.expand('collections');
    });
  }
  getFilteredCollections() {
    let params = this.toQueryString();
    if (params.length > 0) {
      params = `?${params}`;
    }
    const scheme = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.rest.ssl ? 'https' : 'http';
    const urlRestApp = `${scheme}://${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.rest.host}:${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.rest.port}${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.rest.nameSpace}`;
    return this.restService.request(src_app_core_data_rest_request_method__WEBPACK_IMPORTED_MODULE_0__.RestRequestMethod.GET, `${urlRestApp}/api/contentreport/filteredcollections${params}`);
  }
  toQueryString() {
    const params = _filters_section_filters_section_component__WEBPACK_IMPORTED_MODULE_3__.FiltersComponent.toQueryString(this.queryForm.value.filters);
    return params;
  }
  static {
    this.ɵfac = function FilteredCollectionsComponent_Factory(t) {
      return new (t || FilteredCollectionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_dspace_rest_dspace_rest_service__WEBPACK_IMPORTED_MODULE_1__.DspaceRestService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: FilteredCollectionsComponent,
      selectors: [["ds-report-filtered-collections"]],
      viewQuery: function FilteredCollectionsComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.accordionComponent = _t.first);
        }
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵStandaloneFeature"]],
      decls: 15,
      vars: 4,
      consts: [["acc", "ngbAccordion"], [1, "container"], [1, "metadata-registry", "row"], [1, "col-12"], ["id", "header", 1, "border-bottom", "pb-2"], ["id", "metadatadiv"], ["activeIds", "filters", 3, "closeOthers"], ["id", "filters"], ["ngbPanelTitle", ""], ["ngbPanelContent", ""], ["id", "collections"], [1, "row"], [1, "col-3"], [1, "btn", "btn-primary", "mt-1", "col-6", 3, "click"], [3, "filtersForm"], ["id", "table", 1, "table", "table-striped"], [1, "header"], ["rowspan", "2"], [4, "ngFor", "ngForOf"], [1, "num"], ["class", "num", 4, "ngFor", "ngForOf"], ["rel", "noopener noreferrer", "target", "_blank", 3, "href"]],
      template: function FilteredCollectionsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "h1", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 5)(7, "ngb-accordion", 6, 0)(9, "ngb-panel", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, FilteredCollectionsComponent_ng_template_10_Template, 2, 3, "ng-template", 8)(11, FilteredCollectionsComponent_ng_template_11_Template, 12, 7, "ng-template", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "ngb-panel", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, FilteredCollectionsComponent_ng_template_13_Template, 2, 3, "ng-template", 8)(14, FilteredCollectionsComponent_ng_template_14_Template, 26, 21, "ng-template", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 2, "admin.reports.collections.head"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("closeOthers", true);
        }
      },
      dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbAccordionModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbAccordion, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbPanel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbPanelTitle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbPanelContent, _filters_section_filters_section_component__WEBPACK_IMPORTED_MODULE_3__.FiltersComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.KeyValuePipe, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n.num[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbHRlcmVkLWNvbGxlY3Rpb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBO0FBQ0E7RUFDRSxrQkFBQTtBQUNGIiwiZmlsZSI6ImZpbHRlcmVkLWNvbGxlY3Rpb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi9cbi5udW0ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWRtaW4vYWRtaW4tcmVwb3J0cy9maWx0ZXJlZC1jb2xsZWN0aW9ucy9maWx0ZXJlZC1jb2xsZWN0aW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBO0VBQ0Usa0JBQUE7QUFDRjtBQUNBLDRwQkFBNHBCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi9cbi5udW0ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 21112:
/*!****************************************************************************************!*\
  !*** ./src/app/admin/admin-reports/filtered-collections/filtered-collections.model.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilteredCollections: () => (/* binding */ FilteredCollections)
/* harmony export */ });
/* harmony import */ var _filtered_collection_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filtered-collection.model */ 55743);

class FilteredCollections {
  constructor() {
    this.collections = [];
    this.summary = new _filtered_collection_model__WEBPACK_IMPORTED_MODULE_0__.FilteredCollection();
  }
  clear() {
    this.collections.splice(0, this.collections.length);
    this.summary.clear();
  }
  deserialize(object) {
    this.clear();
    const summary = object.summary;
    this.summary.deserialize(summary);
    const collections = object.collections;
    for (let i = 0; i < collections.length; i++) {
      const collection = collections[i];
      const coll = new _filtered_collection_model__WEBPACK_IMPORTED_MODULE_0__.FilteredCollection();
      coll.deserialize(collection);
      this.collections.push(coll);
    }
  }
}

/***/ }),

/***/ 76549:
/*!****************************************************************************!*\
  !*** ./src/app/admin/admin-reports/filtered-items/filtered-items-model.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilteredItems: () => (/* binding */ FilteredItems)
/* harmony export */ });
class FilteredItems {
  constructor() {
    this.items = [];
  }
  clear() {
    this.items.splice(0, this.items.length);
  }
  deserialize(object, offset = 0) {
    this.clear();
    this.itemCount = object.itemCount;
    const items = object.items;
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      item.index = this.items.length + offset + 1;
      this.items.push(item);
    }
  }
}

/***/ }),

/***/ 20176:
/*!********************************************************************************!*\
  !*** ./src/app/admin/admin-reports/filtered-items/filtered-items.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilteredItemsComponent: () => (/* binding */ FilteredItemsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 56106);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 49966);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 6663);
/* harmony import */ var src_app_core_data_collection_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/data/collection-data.service */ 6983);
/* harmony import */ var src_app_core_data_community_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/data/community-data.service */ 46660);
/* harmony import */ var src_app_core_data_metadata_field_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/data/metadata-field-data.service */ 22151);
/* harmony import */ var src_app_core_data_metadata_schema_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/data/metadata-schema-data.service */ 58290);
/* harmony import */ var src_app_core_data_rest_request_method__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/data/rest-request-method */ 43377);
/* harmony import */ var src_app_core_dspace_rest_dspace_rest_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/dspace-rest/dspace-rest.service */ 53778);
/* harmony import */ var src_app_core_shared_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/shared/operators */ 55757);
/* harmony import */ var src_app_shared_empty_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/empty.util */ 82777);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ 88280);
/* harmony import */ var _shared_btn_disabled_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/btn-disabled.directive */ 60456);
/* harmony import */ var _filters_section_filters_section_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../filters-section/filters-section.component */ 77914);
/* harmony import */ var _filtered_items_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./filtered-items-model */ 76549);
/* harmony import */ var _option_vo_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./option-vo.model */ 91915);
/* harmony import */ var _preset_query_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./preset-query.model */ 79538);
/* harmony import */ var _query_predicate_model__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./query-predicate.model */ 56540);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 90310);





























const _c0 = ["acc"];
function FilteredItemsComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](1, 1, "admin.reports.items.section.collectionSelector"), " ");
  }
}
function FilteredItemsComponent_ng_template_11_option_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("value", item_r2.id)("disabled", item_r2.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](2, 3, item_r2.name$));
  }
}
function FilteredItemsComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "select", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, FilteredItemsComponent_ng_template_11_option_1_Template, 3, 5, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](3, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function FilteredItemsComponent_ng_template_11_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.submit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r2.collections);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](6, 2, "admin.reports.items.run"));
  }
}
function FilteredItemsComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](1, 1, "admin.reports.items.section.metadataFieldQueries"), " ");
  }
}
function FilteredItemsComponent_ng_template_14_option_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("value", item_r5.id)("selected", item_r5.isDefault);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](2, 3, item_r5.label));
  }
}
function FilteredItemsComponent_ng_template_14_div_9_option_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("value", item_r7.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](2, 2, item_r7.name$));
  }
}
function FilteredItemsComponent_ng_template_14_div_9_option_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("value", item_r8.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](3, 4, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](2, 2, item_r8.name$)));
  }
}
function FilteredItemsComponent_ng_template_14_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 27)(1, "div", 28)(2, "div", 29)(3, "div", 30)(4, "select", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](5, FilteredItemsComponent_ng_template_14_div_9_option_5_Template, 3, 4, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "div", 33)(7, "select", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](8, FilteredItemsComponent_ng_template_14_div_9_option_8_Template, 4, 6, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](9, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](10, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](11, "div", 33)(12, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function FilteredItemsComponent_ng_template_14_div_9_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.addQueryPredicate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](13, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](14, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](15, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function FilteredItemsComponent_ng_template_14_div_9_Template_button_click_15_listener() {
      const i_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r6).index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.deleteQueryPredicate(i_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](16, "\u2013");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const pred_r10 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("formGroup", pred_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r2.metadataFieldsWithAny);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r2.predicates);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("dsBtnDisabled", ctx_r2.deleteQueryPredicateDisabled());
  }
}
function FilteredItemsComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "fieldset", 21)(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "select", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("change", function FilteredItemsComponent_ng_template_14_Template_select_change_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.setPresetQuery());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](5, FilteredItemsComponent_ng_template_14_option_5_Template, 3, 5, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](7, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](9, FilteredItemsComponent_ng_template_14_div_9_Template, 17, 4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](10, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](11, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](12, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function FilteredItemsComponent_ng_template_14_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.submit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](3, 4, "admin.reports.items.predefinedQueries"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r2.presetQueries);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r2.queryPredicatesArray().controls);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](14, 6, "admin.reports.items.run"));
  }
}
function FilteredItemsComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](1, 1, "admin.reports.items.section.limitPaginateQueries"), " ");
  }
}
function FilteredItemsComponent_ng_template_17_option_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("value", item_r12.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("selected", item_r12.isDefault);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](2, 3, item_r12.name$));
  }
}
function FilteredItemsComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 40)(1, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "div", 42)(5, "select", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](6, FilteredItemsComponent_ng_template_17_option_6_Template, 3, 5, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "div", 40)(8, "label", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](11, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](12, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](13, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](14, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](15, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function FilteredItemsComponent_ng_template_17_Template_button_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r11);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.submit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](3, 4, "admin.reports.items.limit"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r2.pageLimits);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](10, 6, "admin.reports.items.offset"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](17, 8, "admin.reports.items.run"));
  }
}
function FilteredItemsComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](1, 1, "admin.reports.commons.filters"), " ");
  }
}
function FilteredItemsComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function FilteredItemsComponent_ng_template_20_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r13);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.submit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](5, "ds-filters", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](7, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function FilteredItemsComponent_ng_template_20_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r13);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.submit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](4, 3, "admin.reports.items.run"));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("filtersForm", ctx_r2.filtersFormGroup());
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](10, 5, "admin.reports.items.run"));
  }
}
function FilteredItemsComponent_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](1, 1, "admin.reports.commons.additional-data"), " ");
  }
}
function FilteredItemsComponent_ng_template_23_option_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("value", item_r15.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](2, 2, item_r15.name$));
  }
}
function FilteredItemsComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 47)(1, "select", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](2, FilteredItemsComponent_ng_template_23_option_2_Template, 3, 4, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](4, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function FilteredItemsComponent_ng_template_23_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r14);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.submit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r2.metadataFields);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](7, 2, "admin.reports.items.run"));
  }
}
function FilteredItemsComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](1, 1, "admin.reports.collections.item-results"), " ");
  }
}
function FilteredItemsComponent_ng_template_26_th_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const field_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](field_r17);
  }
}
function FilteredItemsComponent_ng_template_26_tr_20_a_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate1"]("href", "/handle/", item_r18.owningCollection.handle, "", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](item_r18.owningCollection.name);
  }
}
function FilteredItemsComponent_ng_template_26_tr_20_a_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate1"]("href", "/handle/", item_r18.handle, "", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](item_r18.handle);
  }
}
function FilteredItemsComponent_ng_template_26_tr_20_td_11_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const mdvalue_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", mdvalue_r19.value || "", " ");
  }
}
function FilteredItemsComponent_ng_template_26_tr_20_td_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "td", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, FilteredItemsComponent_ng_template_26_tr_20_td_11_span_1_Template, 2, 1, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const field_r20 = ctx.$implicit;
    const item_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", item_r18.metadata[field_r20]);
  }
}
function FilteredItemsComponent_ng_template_26_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "tr")(1, "td", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](6, FilteredItemsComponent_ng_template_26_tr_20_a_6_Template, 2, 3, "a", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](8, FilteredItemsComponent_ng_template_26_tr_20_a_8_Template, 2, 3, "a", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](11, FilteredItemsComponent_ng_template_26_tr_20_td_11_Template, 2, 1, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r18 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](item_r18.index);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](item_r18.uuid);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r18.owningCollection);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r18.handle);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](item_r18.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r2.queryForm.value["additionalFields"]);
  }
}
function FilteredItemsComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "table", 49)(1, "thead")(2, "tr", 50)(3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](18, FilteredItemsComponent_ng_template_26_th_18_Template, 2, 1, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](19, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](20, FilteredItemsComponent_ng_template_26_tr_20_Template, 12, 6, "tr", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](21, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](22, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](24, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](25, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](26, "div")(27, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function FilteredItemsComponent_ng_template_26_Template_button_click_27_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r16);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.prevPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](29, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](30, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function FilteredItemsComponent_ng_template_26_Template_button_click_30_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r16);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.nextPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](32, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](33, "table", 54);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](5, 15, "admin.reports.items.number"));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](8, 17, "admin.reports.items.id"));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](11, 19, "admin.reports.items.collection"));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](14, 21, "admin.reports.items.handle"));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](17, 23, "admin.reports.items.title"));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r2.queryForm.value["additionalFields"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](21, 25, ctx_r2.results$));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate4"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](24, 27, "admin.reports.commons.page"), " ", ctx_r2.currentPage + 1, " ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](25, 29, "admin.reports.commons.of"), " ", ctx_r2.pageCount(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("dsBtnDisabled", !ctx_r2.canNavigatePrevious());
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](29, 31, "admin.reports.commons.previous-page"));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("dsBtnDisabled", !ctx_r2.canNavigateNext());
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](32, 33, "admin.reports.commons.next-page"));
  }
}
/**
 * Component representing the Filtered Items content report.
 */
class FilteredItemsComponent {
  constructor(communityService, collectionService, metadataSchemaService, metadataFieldService, translateService, formBuilder, restService) {
    this.communityService = communityService;
    this.collectionService = collectionService;
    this.metadataSchemaService = metadataSchemaService;
    this.metadataFieldService = metadataFieldService;
    this.translateService = translateService;
    this.formBuilder = formBuilder;
    this.restService = restService;
    this.currentPage = 0;
    this.results = new _filtered_items_model__WEBPACK_IMPORTED_MODULE_11__.FilteredItems();
  }
  ngOnInit() {
    this.loadCollections();
    this.loadPresetQueries();
    this.loadMetadataFields();
    this.loadPredicates();
    this.loadPageLimits();
    const formQueryPredicates = [new _query_predicate_model__WEBPACK_IMPORTED_MODULE_14__.QueryPredicate().toFormGroup(this.formBuilder)];
    this.queryForm = this.formBuilder.group({
      collections: this.formBuilder.control([''], []),
      presetQuery: this.formBuilder.control('new', []),
      queryPredicates: this.formBuilder.array(formQueryPredicates),
      pageLimit: this.formBuilder.control('10', []),
      filters: _filters_section_filters_section_component__WEBPACK_IMPORTED_MODULE_10__.FiltersComponent.formGroup(this.formBuilder),
      additionalFields: this.formBuilder.control([], [])
    });
  }
  loadCollections() {
    this.collections = [];
    const wholeRepo$ = this.translateService.stream('admin.reports.items.wholeRepo');
    this.collections.push(_option_vo_model__WEBPACK_IMPORTED_MODULE_12__.OptionVO.collectionLoc('', wholeRepo$));
    this.communityService.findAll({
      elementsPerPage: 10000,
      currentPage: 1
    }).pipe((0,src_app_core_shared_operators__WEBPACK_IMPORTED_MODULE_6__.getFirstSucceededRemoteListPayload)()).subscribe(communitiesRest => {
      communitiesRest.forEach(community => {
        const commVO = _option_vo_model__WEBPACK_IMPORTED_MODULE_12__.OptionVO.collection(community.uuid, community.name, true);
        this.collections.push(commVO);
        this.collectionService.findByParent(community.uuid, {
          elementsPerPage: 10000,
          currentPage: 1
        }).pipe((0,src_app_core_shared_operators__WEBPACK_IMPORTED_MODULE_6__.getFirstSucceededRemoteListPayload)()).subscribe(collectionsRest => {
          collectionsRest.filter(collection => collection.firstMetadataValue('dspace.entity.type') === 'Publication').forEach(collection => {
            const collVO = _option_vo_model__WEBPACK_IMPORTED_MODULE_12__.OptionVO.collection(collection.uuid, '–' + collection.name);
            this.collections.push(collVO);
          });
        });
      });
    });
  }
  loadPresetQueries() {
    this.presetQueries = [_preset_query_model__WEBPACK_IMPORTED_MODULE_13__.PresetQuery.of('new', 'admin.reports.items.preset.new', []), _preset_query_model__WEBPACK_IMPORTED_MODULE_13__.PresetQuery.of('q1', 'admin.reports.items.preset.hasNoTitle', [_query_predicate_model__WEBPACK_IMPORTED_MODULE_14__.QueryPredicate.of('dc.title', _query_predicate_model__WEBPACK_IMPORTED_MODULE_14__.QueryPredicate.DOES_NOT_EXIST)]), _preset_query_model__WEBPACK_IMPORTED_MODULE_13__.PresetQuery.of('q2', 'admin.reports.items.preset.hasNoIdentifierUri', [_query_predicate_model__WEBPACK_IMPORTED_MODULE_14__.QueryPredicate.of('dc.identifier.uri', _query_predicate_model__WEBPACK_IMPORTED_MODULE_14__.QueryPredicate.DOES_NOT_EXIST)]), _preset_query_model__WEBPACK_IMPORTED_MODULE_13__.PresetQuery.of('q3', 'admin.reports.items.preset.hasCompoundSubject', [_query_predicate_model__WEBPACK_IMPORTED_MODULE_14__.QueryPredicate.of('dc.subject.*', _query_predicate_model__WEBPACK_IMPORTED_MODULE_14__.QueryPredicate.LIKE, '%;%')]), _preset_query_model__WEBPACK_IMPORTED_MODULE_13__.PresetQuery.of('q4', 'admin.reports.items.preset.hasCompoundAuthor', [_query_predicate_model__WEBPACK_IMPORTED_MODULE_14__.QueryPredicate.of('dc.contributor.author', _query_predicate_model__WEBPACK_IMPORTED_MODULE_14__.QueryPredicate.LIKE, '% and %')]), _preset_query_model__WEBPACK_IMPORTED_MODULE_13__.PresetQuery.of('q5', 'admin.reports.items.preset.hasCompoundCreator', [_query_predicate_model__WEBPACK_IMPORTED_MODULE_14__.QueryPredicate.of('dc.creator', _query_predicate_model__WEBPACK_IMPORTED_MODULE_14__.QueryPredicate.LIKE, '% and %')]), _preset_query_model__WEBPACK_IMPORTED_MODULE_13__.PresetQuery.of('q6', 'admin.reports.items.preset.hasUrlInDescription', [_query_predicate_model__WEBPACK_IMPORTED_MODULE_14__.QueryPredicate.of('dc.description', _query_predicate_model__WEBPACK_IMPORTED_MODULE_14__.QueryPredicate.MATCHES, '^.*(http://|https://|mailto:).*$')]), _preset_query_model__WEBPACK_IMPORTED_MODULE_13__.PresetQuery.of('q7', 'admin.reports.items.preset.hasFullTextInProvenance', [_query_predicate_model__WEBPACK_IMPORTED_MODULE_14__.QueryPredicate.of('dc.description.provenance', _query_predicate_model__WEBPACK_IMPORTED_MODULE_14__.QueryPredicate.MATCHES, '^.*No\. of bitstreams(.|\r|\n|\r\n)*\.(PDF|pdf|DOC|doc|PPT|ppt|DOCX|docx|PPTX|pptx).*$')]), _preset_query_model__WEBPACK_IMPORTED_MODULE_13__.PresetQuery.of('q8', 'admin.reports.items.preset.hasNonFullTextInProvenance', [_query_predicate_model__WEBPACK_IMPORTED_MODULE_14__.QueryPredicate.of('dc.description.provenance', _query_predicate_model__WEBPACK_IMPORTED_MODULE_14__.QueryPredicate.DOES_NOT_MATCH, '^.*No\. of bitstreams(.|\r|\n|\r\n)*\.(PDF|pdf|DOC|doc|PPT|ppt|DOCX|docx|PPTX|pptx).*$')]), _preset_query_model__WEBPACK_IMPORTED_MODULE_13__.PresetQuery.of('q9', 'admin.reports.items.preset.hasEmptyMetadata', [_query_predicate_model__WEBPACK_IMPORTED_MODULE_14__.QueryPredicate.of('*', _query_predicate_model__WEBPACK_IMPORTED_MODULE_14__.QueryPredicate.MATCHES, '^\s*$')]), _preset_query_model__WEBPACK_IMPORTED_MODULE_13__.PresetQuery.of('q10', 'admin.reports.items.preset.hasUnbreakingDataInDescription', [_query_predicate_model__WEBPACK_IMPORTED_MODULE_14__.QueryPredicate.of('dc.description.*', _query_predicate_model__WEBPACK_IMPORTED_MODULE_14__.QueryPredicate.MATCHES, '^.*[^\s]{50,}.*$')]), _preset_query_model__WEBPACK_IMPORTED_MODULE_13__.PresetQuery.of('q12', 'admin.reports.items.preset.hasXmlEntityInMetadata', [_query_predicate_model__WEBPACK_IMPORTED_MODULE_14__.QueryPredicate.of('*', _query_predicate_model__WEBPACK_IMPORTED_MODULE_14__.QueryPredicate.MATCHES, '^.*&#.*$')]), _preset_query_model__WEBPACK_IMPORTED_MODULE_13__.PresetQuery.of('q13', 'admin.reports.items.preset.hasNonAsciiCharInMetadata', [_query_predicate_model__WEBPACK_IMPORTED_MODULE_14__.QueryPredicate.of('*', _query_predicate_model__WEBPACK_IMPORTED_MODULE_14__.QueryPredicate.MATCHES, '^.*[^[:ascii:]].*$')])];
  }
  loadMetadataFields() {
    this.metadataFields = [];
    this.metadataFieldsWithAny = [];
    const anyField$ = this.translateService.stream('admin.reports.items.anyField');
    this.metadataFieldsWithAny.push(_option_vo_model__WEBPACK_IMPORTED_MODULE_12__.OptionVO.itemLoc('*', anyField$));
    this.metadataSchemaService.findAll({
      elementsPerPage: 10000,
      currentPage: 1
    }).pipe((0,src_app_core_shared_operators__WEBPACK_IMPORTED_MODULE_6__.getFirstSucceededRemoteListPayload)()).subscribe(schemasRest => {
      schemasRest.forEach(schema => {
        this.metadataFieldService.findBySchema(schema, {
          elementsPerPage: 10000,
          currentPage: 1
        }).pipe((0,src_app_core_shared_operators__WEBPACK_IMPORTED_MODULE_6__.getFirstSucceededRemoteListPayload)()).subscribe(fieldsRest => {
          fieldsRest.forEach(field => {
            let fieldName = schema.prefix + '.' + field.toString();
            let fieldVO = _option_vo_model__WEBPACK_IMPORTED_MODULE_12__.OptionVO.item(fieldName, fieldName);
            this.metadataFields.push(fieldVO);
            this.metadataFieldsWithAny.push(fieldVO);
            if ((0,src_app_shared_empty_util__WEBPACK_IMPORTED_MODULE_7__.isEmpty)(field.qualifier)) {
              fieldName = schema.prefix + '.' + field.element + '.*';
              fieldVO = _option_vo_model__WEBPACK_IMPORTED_MODULE_12__.OptionVO.item(fieldName, fieldName);
              this.metadataFieldsWithAny.push(fieldVO);
            }
          });
        });
      });
    });
  }
  loadPredicates() {
    this.predicates = [_option_vo_model__WEBPACK_IMPORTED_MODULE_12__.OptionVO.item(_query_predicate_model__WEBPACK_IMPORTED_MODULE_14__.QueryPredicate.EXISTS, 'admin.reports.items.predicate.exists'), _option_vo_model__WEBPACK_IMPORTED_MODULE_12__.OptionVO.item(_query_predicate_model__WEBPACK_IMPORTED_MODULE_14__.QueryPredicate.DOES_NOT_EXIST, 'admin.reports.items.predicate.doesNotExist'), _option_vo_model__WEBPACK_IMPORTED_MODULE_12__.OptionVO.item(_query_predicate_model__WEBPACK_IMPORTED_MODULE_14__.QueryPredicate.EQUALS, 'admin.reports.items.predicate.equals'), _option_vo_model__WEBPACK_IMPORTED_MODULE_12__.OptionVO.item(_query_predicate_model__WEBPACK_IMPORTED_MODULE_14__.QueryPredicate.DOES_NOT_EQUAL, 'admin.reports.items.predicate.doesNotEqual'), _option_vo_model__WEBPACK_IMPORTED_MODULE_12__.OptionVO.item(_query_predicate_model__WEBPACK_IMPORTED_MODULE_14__.QueryPredicate.LIKE, 'admin.reports.items.predicate.like'), _option_vo_model__WEBPACK_IMPORTED_MODULE_12__.OptionVO.item(_query_predicate_model__WEBPACK_IMPORTED_MODULE_14__.QueryPredicate.NOT_LIKE, 'admin.reports.items.predicate.notLike'), _option_vo_model__WEBPACK_IMPORTED_MODULE_12__.OptionVO.item(_query_predicate_model__WEBPACK_IMPORTED_MODULE_14__.QueryPredicate.CONTAINS, 'admin.reports.items.predicate.contains'), _option_vo_model__WEBPACK_IMPORTED_MODULE_12__.OptionVO.item(_query_predicate_model__WEBPACK_IMPORTED_MODULE_14__.QueryPredicate.DOES_NOT_CONTAIN, 'admin.reports.items.predicate.doesNotContain'), _option_vo_model__WEBPACK_IMPORTED_MODULE_12__.OptionVO.item(_query_predicate_model__WEBPACK_IMPORTED_MODULE_14__.QueryPredicate.MATCHES, 'admin.reports.items.predicate.matches'), _option_vo_model__WEBPACK_IMPORTED_MODULE_12__.OptionVO.item(_query_predicate_model__WEBPACK_IMPORTED_MODULE_14__.QueryPredicate.DOES_NOT_MATCH, 'admin.reports.items.predicate.doesNotMatch')];
  }
  loadPageLimits() {
    this.pageLimits = [_option_vo_model__WEBPACK_IMPORTED_MODULE_12__.OptionVO.item('10', '10'), _option_vo_model__WEBPACK_IMPORTED_MODULE_12__.OptionVO.item('25', '25'), _option_vo_model__WEBPACK_IMPORTED_MODULE_12__.OptionVO.item('50', '50'), _option_vo_model__WEBPACK_IMPORTED_MODULE_12__.OptionVO.item('100', '100')];
  }
  queryPredicatesArray() {
    return this.queryForm.get('queryPredicates');
  }
  addQueryPredicate(newItem = new _query_predicate_model__WEBPACK_IMPORTED_MODULE_14__.QueryPredicate().toFormGroup(this.formBuilder)) {
    this.queryPredicatesArray().push(newItem);
  }
  deleteQueryPredicateDisabled() {
    return this.queryPredicatesArray().length < 2;
  }
  deleteQueryPredicate(index, nbToDelete = 1) {
    if (index > -1) {
      this.queryPredicatesArray().removeAt(index);
    }
  }
  setPresetQuery() {
    const queryField = this.queryForm.controls.presetQuery;
    const value = queryField.value;
    const query = this.presetQueries.find(q => q.id === value);
    if (query !== undefined) {
      this.queryPredicatesArray().clear();
      query.predicates.map(qp => qp.toFormGroup(this.formBuilder)).forEach(qp => this.addQueryPredicate(qp));
      if (query.predicates.length === 0) {
        this.addQueryPredicate(new _query_predicate_model__WEBPACK_IMPORTED_MODULE_14__.QueryPredicate().toFormGroup(this.formBuilder));
      }
    }
  }
  filtersFormGroup() {
    return this.queryForm.get('filters');
  }
  pageSize() {
    const form = this.queryForm.value;
    return form.pageLimit;
  }
  canNavigatePrevious() {
    return this.currentPage > 0;
  }
  prevPage() {
    if (this.canNavigatePrevious()) {
      this.currentPage--;
      this.resubmit();
    }
  }
  pageCount() {
    const total = this.results.itemCount || 0;
    return Math.ceil(total / this.pageSize());
  }
  canNavigateNext() {
    return this.currentPage + 1 < this.pageCount();
  }
  nextPage() {
    if (this.canNavigateNext()) {
      this.currentPage++;
      this.resubmit();
    }
  }
  submit() {
    this.accordionComponent.expand('itemResults');
    this.currentPage = 0;
    this.resubmit();
  }
  resubmit() {
    this.results$ = this.getFilteredItems().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_16__.map)(response => {
      const offset = this.currentPage * this.pageSize();
      this.results.deserialize(response.payload, offset);
      return this.results.items;
    }));
  }
  getFilteredItems() {
    let params = this.toQueryString();
    if (params.length > 0) {
      params = `?${params}`;
    }
    const scheme = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment.rest.ssl ? 'https' : 'http';
    const urlRestApp = `${scheme}://${src_environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment.rest.host}:${src_environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment.rest.port}${src_environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment.rest.nameSpace}`;
    return this.restService.request(src_app_core_data_rest_request_method__WEBPACK_IMPORTED_MODULE_4__.RestRequestMethod.GET, `${urlRestApp}/api/contentreport/filtereditems${params}`);
  }
  toQueryString() {
    let params = `pageNumber=${this.currentPage}&pageLimit=${this.pageSize()}`;
    const colls = this.queryForm.value.collections;
    for (let i = 0; i < colls.length; i++) {
      params += `&collections=${colls[i]}`;
    }
    const preds = this.queryForm.value.queryPredicates;
    for (let i = 0; i < preds.length; i++) {
      const field = preds[i].field;
      const op = preds[i].operator;
      const value = preds[i].value;
      params += `&queryPredicates=${field}:${op}`;
      if (value) {
        params += `:${value}`;
      }
    }
    const filters = _filters_section_filters_section_component__WEBPACK_IMPORTED_MODULE_10__.FiltersComponent.toQueryString(this.queryForm.value.filters);
    if (filters.length > 0) {
      params += `&${filters}`;
    }
    const addFlds = this.queryForm.value.additionalFields;
    for (let i = 0; i < addFlds.length; i++) {
      params += `&additionalFields=${addFlds[i]}`;
    }
    return params;
  }
  static {
    this.ɵfac = function FilteredItemsComponent_Factory(t) {
      return new (t || FilteredItemsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_core_data_community_data_service__WEBPACK_IMPORTED_MODULE_1__.CommunityDataService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_core_data_collection_data_service__WEBPACK_IMPORTED_MODULE_0__.CollectionDataService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_core_data_metadata_schema_data_service__WEBPACK_IMPORTED_MODULE_3__.MetadataSchemaDataService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_core_data_metadata_field_data_service__WEBPACK_IMPORTED_MODULE_2__.MetadataFieldDataService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_core_dspace_rest_dspace_rest_service__WEBPACK_IMPORTED_MODULE_5__.DspaceRestService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({
      type: FilteredItemsComponent,
      selectors: [["ds-report-filtered-items"]],
      viewQuery: function FilteredItemsComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵloadQuery"]()) && (ctx.accordionComponent = _t.first);
        }
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵStandaloneFeature"]],
      decls: 27,
      vars: 5,
      consts: [["acc", "ngbAccordion"], [1, "container"], [1, "metadata-registry", "row"], [1, "col-12"], ["id", "header", 1, "border-bottom", "pb-2"], ["id", "querydiv", 3, "formGroup"], ["activeIds", "collectionSelector", 3, "closeOthers"], ["id", "collectionSelector"], ["ngbPanelTitle", ""], ["ngbPanelContent", ""], ["id", "metadataFieldQueries"], ["id", "limitPaginateQueries"], ["id", "filters"], ["id", "additionalData"], ["id", "itemResults"], ["id", "collSel", "name", "collSel", "multiple", "multiple", "size", "10", "formControlName", "collections", 1, "form-control"], [3, "value", "disabled", 4, "ngFor", "ngForOf"], [1, "row"], [1, "col-3"], [1, "btn", "btn-primary", "mt-1", "col-6", 3, "click"], [3, "value", "disabled"], ["id", "predefqueries", 1, "form-group"], ["id", "predefselect", "formControlName", "presetQuery", 1, "form-control", 3, "change"], [3, "value", "selected", 4, "ngFor", "ngForOf"], ["id", "queries"], ["class", "metadata", 4, "ngFor", "ngForOf"], [3, "value", "selected"], [1, "metadata"], [1, "form-group", 3, "formGroup"], [1, "form-row"], [1, "col-4"], ["formControlName", "field", 1, "form-control"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-auto"], ["formControlName", "operator", 1, "form-control"], [1, "col"], ["formControlName", "value", 1, "form-control"], [1, "btn", "btn-light", 3, "click"], [1, "btn", "btn-light", 3, "click", "dsBtnDisabled"], [3, "value"], [1, "row", "align-items-center"], ["for", "limit", 1, "col-sm-2", "col-form-label"], [1, "col-6"], ["id", "limit", "name", "limit", "formControlName", "pageLimit", 1, "form-control", "col-6"], ["for", "offset", 1, "col-sm-2", "col-form-label"], ["id", "offset", "name", "offset", "value", "0", 1, "form-control", "col-6"], [3, "filtersForm"], ["id", "show-fields"], ["name", "show_fields", "multiple", "multiple", "size", "8", "formControlName", "additionalFields", 1, "form-control"], ["id", "table", 1, "table", "table-striped"], [1, "header"], [4, "ngFor", "ngForOf"], ["id", "prev", 1, "btn", "btn-light", 3, "click", "dsBtnDisabled"], ["id", "next", 1, "btn", "btn-light", 3, "click", "dsBtnDisabled"], ["id", "itemtable", 1, "sortable"], [1, "num"], ["rel", "noopener noreferrer", "target", "_blank", 3, "href", 4, "ngIf"], ["class", "num", 4, "ngFor", "ngForOf"], ["rel", "noopener noreferrer", "target", "_blank", 3, "href"]],
      template: function FilteredItemsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "h1", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](5, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "div", 5)(7, "ngb-accordion", 6, 0)(9, "ngb-panel", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](10, FilteredItemsComponent_ng_template_10_Template, 2, 3, "ng-template", 8)(11, FilteredItemsComponent_ng_template_11_Template, 7, 4, "ng-template", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](12, "ngb-panel", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](13, FilteredItemsComponent_ng_template_13_Template, 2, 3, "ng-template", 8)(14, FilteredItemsComponent_ng_template_14_Template, 15, 8, "ng-template", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](15, "ngb-panel", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](16, FilteredItemsComponent_ng_template_16_Template, 2, 3, "ng-template", 8)(17, FilteredItemsComponent_ng_template_17_Template, 18, 10, "ng-template", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](18, "ngb-panel", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](19, FilteredItemsComponent_ng_template_19_Template, 2, 3, "ng-template", 8)(20, FilteredItemsComponent_ng_template_20_Template, 11, 7, "ng-template", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](21, "ngb-panel", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](22, FilteredItemsComponent_ng_template_22_Template, 2, 3, "ng-template", 8)(23, FilteredItemsComponent_ng_template_23_Template, 8, 4, "ng-template", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](24, "ngb-panel", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](25, FilteredItemsComponent_ng_template_25_Template, 2, 3, "ng-template", 8)(26, FilteredItemsComponent_ng_template_26_Template, 34, 35, "ng-template", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](5, 3, "admin.reports.items.head"));
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("formGroup", ctx.queryForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("closeOthers", true);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.SelectMultipleControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControlName, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__.NgbAccordionModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__.NgbAccordion, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__.NgbPanel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__.NgbPanelTitle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__.NgbPanelContent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_20__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgForOf, _filters_section_filters_section_component__WEBPACK_IMPORTED_MODULE_10__.FiltersComponent, _shared_btn_disabled_directive__WEBPACK_IMPORTED_MODULE_9__.BtnDisabledDirective],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n.num[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbHRlcmVkLWl0ZW1zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBO0FBQ0E7RUFDRSxrQkFBQTtBQUNGIiwiZmlsZSI6ImZpbHRlcmVkLWl0ZW1zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi9cbi5udW0ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWRtaW4vYWRtaW4tcmVwb3J0cy9maWx0ZXJlZC1pdGVtcy9maWx0ZXJlZC1pdGVtcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBO0VBQ0Usa0JBQUE7QUFDRjtBQUNBLDRvQkFBNG9CIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi9cbi5udW0ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 91915:
/*!***********************************************************************!*\
  !*** ./src/app/admin/admin-reports/filtered-items/option-vo.model.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OptionVO: () => (/* binding */ OptionVO)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 18718);

/**
 * Component representing an option in each selectable list of values
 * used in the Filtered Items report query interface
 */
class OptionVO {
  constructor() {
    this.disabled = false;
  }
  static collection(id, name, disabled = false) {
    const opt = new OptionVO();
    opt.id = id;
    opt.name$ = OptionVO.toObservable(name);
    opt.disabled = disabled;
    return opt;
  }
  static collectionLoc(id, name$, disabled = false) {
    const opt = new OptionVO();
    opt.id = id;
    opt.name$ = name$;
    opt.disabled = disabled;
    return opt;
  }
  static item(id, name) {
    const opt = new OptionVO();
    opt.id = id;
    opt.name$ = OptionVO.toObservable(name);
    return opt;
  }
  static itemLoc(id, name$) {
    const opt = new OptionVO();
    opt.id = id;
    opt.name$ = name$;
    return opt;
  }
  static toObservable(value) {
    return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable(subscriber => {
      subscriber.next(value);
      subscriber.complete();
    });
  }
}

/***/ }),

/***/ 79538:
/*!**************************************************************************!*\
  !*** ./src/app/admin/admin-reports/filtered-items/preset-query.model.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PresetQuery: () => (/* binding */ PresetQuery)
/* harmony export */ });
class PresetQuery {
  static of(id, label, predicates) {
    const query = new PresetQuery();
    query.id = id;
    query.label = label;
    query.predicates = predicates;
    return query;
  }
}

/***/ }),

/***/ 56540:
/*!*****************************************************************************!*\
  !*** ./src/app/admin/admin-reports/filtered-items/query-predicate.model.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QueryPredicate: () => (/* binding */ QueryPredicate)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 56106);

class QueryPredicate {
  constructor() {
    this.field = '*';
  }
  static {
    this.EXISTS = 'exists';
  }
  static {
    this.DOES_NOT_EXIST = 'doesnt_exist';
  }
  static {
    this.EQUALS = 'equals';
  }
  static {
    this.DOES_NOT_EQUAL = 'not_equals';
  }
  static {
    this.LIKE = 'like';
  }
  static {
    this.NOT_LIKE = 'not_like';
  }
  static {
    this.CONTAINS = 'contains';
  }
  static {
    this.DOES_NOT_CONTAIN = 'doesnt_contain';
  }
  static {
    this.MATCHES = 'matches';
  }
  static {
    this.DOES_NOT_MATCH = 'doesnt_match';
  }
  static of(field, operator, value = '') {
    const pred = new QueryPredicate();
    pred.field = field;
    pred.operator = operator;
    pred.value = value;
    return pred;
  }
  toFormGroup(formBuilder) {
    return formBuilder.group({
      field: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl(this.field),
      operator: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl(this.operator),
      value: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl(this.value)
    });
  }
}

/***/ }),

/***/ 45751:
/*!***************************************************************************!*\
  !*** ./src/app/admin/admin-reports/filters-section/filter-group.model.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterGroup: () => (/* binding */ FilterGroup)
/* harmony export */ });
class FilterGroup {
  constructor(id, filters) {
    this.filters = filters;
    this.id = id;
    this.key = 'admin.reports.commons.filters.' + id;
    filters.forEach(filter => {
      filter.key = this.key + '.' + filter.id;
      if (filter.hasTooltip) {
        filter.tooltipKey = filter.key + '.tooltip';
      }
    });
  }
}

/***/ }),

/***/ 34661:
/*!*********************************************************************!*\
  !*** ./src/app/admin/admin-reports/filters-section/filter.model.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Filter: () => (/* binding */ Filter)
/* harmony export */ });
class Filter {
  constructor(id, hasTooltip = false) {
    this.id = id;
    this.hasTooltip = hasTooltip;
  }
}

/***/ }),

/***/ 77914:
/*!**********************************************************************************!*\
  !*** ./src/app/admin/admin-reports/filters-section/filters-section.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FiltersComponent: () => (/* binding */ FiltersComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 56106);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var _filter_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter.model */ 34661);
/* harmony import */ var _filter_group_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter-group.model */ 45751);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);








function FiltersComponent_fieldset_18_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const filter_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("id", "flt-", filter_r1.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", filter_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("formControlName", filter_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("for", "flt-", filter_r1.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 8, filter_r1.tooltipKey));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 10, filter_r1.key));
  }
}
function FiltersComponent_fieldset_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "fieldset", 0)(1, "legend");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](4, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, FiltersComponent_fieldset_18_div_5_Template, 6, 12, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const group_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 3, group_r2.key));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r2.filtersForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", group_r2.filters);
  }
}
/**
 * Component representing the Query Filters section used in both
 * Filtered Collections and Filtered Items content reports
 */
class FiltersComponent {
  static {
    this.FILTERS = [new _filter_group_model__WEBPACK_IMPORTED_MODULE_1__.FilterGroup('property', [new _filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter('is_item'), new _filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter('is_withdrawn'), new _filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter('is_not_withdrawn'), new _filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter('is_discoverable'), new _filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter('is_not_discoverable')]), new _filter_group_model__WEBPACK_IMPORTED_MODULE_1__.FilterGroup('bitstream', [new _filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter('has_multiple_originals'), new _filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter('has_no_originals'), new _filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter('has_one_original')]), new _filter_group_model__WEBPACK_IMPORTED_MODULE_1__.FilterGroup('bitstream_mime', [new _filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter('has_doc_original'), new _filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter('has_image_original'), new _filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter('has_unsupp_type'), new _filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter('has_mixed_original'), new _filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter('has_pdf_original'), new _filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter('has_jpg_original'), new _filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter('has_small_pdf'), new _filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter('has_large_pdf'), new _filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter('has_doc_without_text')]), new _filter_group_model__WEBPACK_IMPORTED_MODULE_1__.FilterGroup('mime', [new _filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter('has_only_supp_image_type'), new _filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter('has_unsupp_image_type'), new _filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter('has_only_supp_doc_type'), new _filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter('has_unsupp_doc_type')]), new _filter_group_model__WEBPACK_IMPORTED_MODULE_1__.FilterGroup('bundle', [new _filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter('has_unsupported_bundle'), new _filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter('has_small_thumbnail'), new _filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter('has_original_without_thumbnail'), new _filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter('has_invalid_thumbnail_name'), new _filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter('has_non_generated_thumb'), new _filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter('no_license'), new _filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter('has_license_documentation')]), new _filter_group_model__WEBPACK_IMPORTED_MODULE_1__.FilterGroup('permission', [new _filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter('has_restricted_original', true), new _filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter('has_restricted_thumbnail', true), new _filter_model__WEBPACK_IMPORTED_MODULE_0__.Filter('has_restricted_metadata', true)])];
  }
  static formGroup(formBuilder) {
    const fields = {};
    const allFilters = FiltersComponent.FILTERS;
    for (let i = 0; i < allFilters.length; i++) {
      const group = allFilters[i];
      for (let j = 0; j < group.filters.length; j++) {
        const filter = group.filters[j];
        fields[filter.id] = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(false);
      }
    }
    return formBuilder.group(fields);
  }
  static getFilter(filterId) {
    const allFilters = FiltersComponent.FILTERS;
    for (let i = 0; i < allFilters.length; i++) {
      const group = allFilters[i];
      for (let j = 0; j < group.filters.length; j++) {
        const filter = group.filters[j];
        if (filter.id === filterId) {
          return filter;
        }
      }
    }
    return undefined;
  }
  static getGroup(filterId) {
    const allFilters = FiltersComponent.FILTERS;
    for (let i = 0; i < allFilters.length; i++) {
      const group = allFilters[i];
      for (let j = 0; j < group.filters.length; j++) {
        const filter = group.filters[j];
        if (filter.id === filterId) {
          return group;
        }
      }
    }
    return undefined;
  }
  static toQueryString(filters) {
    let params = '';
    let first = true;
    for (const key in filters) {
      if (filters[key]) {
        if (first) {
          first = false;
        } else {
          params += '&';
        }
        params += `filters=${key}`;
      }
    }
    return params;
  }
  allFilters() {
    return FiltersComponent.FILTERS;
  }
  setAllFilters(value) {
    // I don't know why, but patchValue() with individual controls doesn't work.
    // I therefore use setValue() with the whole set, which mercifully works...
    const fields = {};
    const allFilters = FiltersComponent.FILTERS;
    for (let i = 0; i < allFilters.length; i++) {
      const group = allFilters[i];
      for (let j = 0; j < group.filters.length; j++) {
        const filter = group.filters[j];
        fields[filter.id] = value;
      }
    }
    this.filtersForm.setValue(fields);
  }
  selectAll() {
    this.setAllFilters(true);
  }
  deselectAll() {
    this.setAllFilters(false);
  }
  static {
    this.ɵfac = function FiltersComponent_Factory(t) {
      return new (t || FiltersComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: FiltersComponent,
      selectors: [["ds-filters"]],
      inputs: {
        filtersForm: "filtersForm"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 19,
      vars: 7,
      consts: [[1, "row", "row-cols-2"], [1, "col-12"], [1, "col-1"], ["id", "btnSelectAllFilters", 1, "btn", "btn-light", "mt-1", "col-4", 3, "click"], [1, "col-2"], ["id", "btnDeselectAllFilters", 1, "btn", "btn-light", "mt-1", "col-4", 3, "click"], ["class", "row row-cols-2", 4, "ngFor", "ngForOf"], [3, "formGroup"], ["class", "col-6", 4, "ngFor", "ngForOf"], [1, "col-6"], ["type", "checkbox", 1, "form-check-input", "col-1", "align-baseline", 3, "id", "value", "formControlName"], [1, "col-11", "align-middle", 3, "for", "title"]],
      template: function FiltersComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "fieldset", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\u00A0");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\u00A0");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FiltersComponent_Template_button_click_6_listener() {
            return ctx.selectAll();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "\u00A0");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FiltersComponent_Template_button_click_11_listener() {
            return ctx.deselectAll();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](13, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "\u00A0");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "span", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "\u00A0");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, FiltersComponent_fieldset_18_Template, 6, 5, "fieldset", 6);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 3, "admin.reports.commons.filters.select_all"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](13, 5, "admin.reports.commons.filters.deselect_all"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.allFilters());
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbHRlcnMtc2VjdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQSIsImZpbGUiOiJmaWx0ZXJzLXNlY3Rpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqLyJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWRtaW4vYWRtaW4tcmVwb3J0cy9maWx0ZXJzLXNlY3Rpb24vZmlsdGVycy1zZWN0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBO0FBQ0Esd2tCQUF3a0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqLyJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 58290:
/*!***********************************************************!*\
  !*** ./src/app/core/data/metadata-schema-data.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MetadataSchemaDataService: () => (/* binding */ MetadataSchemaDataService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 21252);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/empty.util */ 82777);
/* harmony import */ var _shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/notifications/notifications.service */ 69472);
/* harmony import */ var _cache_builders_remote_data_build_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cache/builders/remote-data-build.service */ 76799);
/* harmony import */ var _cache_object_cache_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cache/object-cache.service */ 41684);
/* harmony import */ var _shared_hal_endpoint_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/hal-endpoint.service */ 4910);
/* harmony import */ var _base_create_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./base/create-data */ 39280);
/* harmony import */ var _base_delete_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./base/delete-data */ 13617);
/* harmony import */ var _base_find_all_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./base/find-all-data */ 46787);
/* harmony import */ var _base_identifiable_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./base/identifiable-data.service */ 63897);
/* harmony import */ var _base_put_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./base/put-data */ 91967);
/* harmony import */ var _request_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./request.service */ 32473);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 90310);


















/**
 * A service responsible for fetching/sending data from/to the REST API on the metadataschemas endpoint
 */
class MetadataSchemaDataService extends _base_identifiable_data_service__WEBPACK_IMPORTED_MODULE_8__.IdentifiableDataService {
  constructor(requestService, rdbService, objectCache, halService, notificationsService) {
    super('metadataschemas', requestService, rdbService, objectCache, halService);
    this.requestService = requestService;
    this.rdbService = rdbService;
    this.objectCache = objectCache;
    this.halService = halService;
    this.notificationsService = notificationsService;
    this.createData = new _base_create_data__WEBPACK_IMPORTED_MODULE_5__.CreateDataImpl(this.linkPath, requestService, rdbService, objectCache, halService, notificationsService, this.responseMsToLive);
    this.putData = new _base_put_data__WEBPACK_IMPORTED_MODULE_9__.PutDataImpl(this.linkPath, requestService, rdbService, objectCache, halService, this.responseMsToLive);
    this.deleteData = new _base_delete_data__WEBPACK_IMPORTED_MODULE_6__.DeleteDataImpl(this.linkPath, requestService, rdbService, objectCache, halService, notificationsService, this.responseMsToLive, this.constructIdEndpoint);
    this.findAllData = new _base_find_all_data__WEBPACK_IMPORTED_MODULE_7__.FindAllDataImpl(this.linkPath, requestService, rdbService, objectCache, halService, this.responseMsToLive);
  }
  /**
   * Create or Update a MetadataSchema
   *  If the MetadataSchema contains an id, it is assumed the schema already exists and is updated instead
   *  Since creating or updating is nearly identical, the only real difference is the request (and slight difference in endpoint):
   *  - On creation, a CreateRequest is used
   *  - On update, a PutRequest is used
   * @param schema    The MetadataSchema to create or update
   */
  createOrUpdateMetadataSchema(schema) {
    const isUpdate = (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_0__.hasValue)(schema.id);
    if (isUpdate) {
      return this.putData.put(schema);
    } else {
      return this.createData.create(schema);
    }
  }
  /**
   * Clear all metadata schema requests
   * Used for refreshing lists after adding/updating/removing a metadata schema in the registry
   */
  clearRequests() {
    return this.getBrowseEndpoint().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(href => this.requestService.removeByHrefSubstring(href)));
  }
  /**
   * Returns {@link RemoteData} of all object with a list of {@link FollowLinkConfig}, to indicate which embedded
   * info should be added to the objects
   *
   * @param options                     Find list options object
   * @param useCachedVersionIfAvailable If this is true, the request will only be sent if there's
   *                                    no valid cached version. Defaults to true
   * @param reRequestOnStale            Whether or not the request should automatically be re-
   *                                    requested after the response becomes stale
   * @param linksToFollow               List of {@link FollowLinkConfig} that indicate which
   *                                    {@link HALLink}s should be automatically resolved
   * @return {Observable<RemoteData<PaginatedList<T>>>}
   *    Return an observable that emits object list
   */
  findAll(options, useCachedVersionIfAvailable, reRequestOnStale, ...linksToFollow) {
    return this.findAllData.findAll(options, useCachedVersionIfAvailable, reRequestOnStale, ...linksToFollow);
  }
  /**
   * Delete an existing object on the server
   * @param   objectId The id of the object to be removed
   * @param   copyVirtualMetadata (optional parameter) the identifiers of the relationship types for which the virtual
   *                            metadata should be saved as real metadata
   * @return  A RemoteData observable with an empty payload, but still representing the state of the request: statusCode,
   *          errorMessage, timeCompleted, etc
   */
  delete(objectId, copyVirtualMetadata) {
    return this.deleteData.delete(objectId, copyVirtualMetadata);
  }
  /**
   * Delete an existing object on the server
   * @param   href The self link of the object to be removed
   * @param   copyVirtualMetadata (optional parameter) the identifiers of the relationship types for which the virtual
   *                            metadata should be saved as real metadata
   * @return  A RemoteData observable with an empty payload, but still representing the state of the request: statusCode,
   *          errorMessage, timeCompleted, etc
   *          Only emits once all request related to the DSO has been invalidated.
   */
  deleteByHref(href, copyVirtualMetadata) {
    return this.deleteData.deleteByHref(href, copyVirtualMetadata);
  }
  static {
    this.ɵfac = function MetadataSchemaDataService_Factory(t) {
      return new (t || MetadataSchemaDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_request_service__WEBPACK_IMPORTED_MODULE_10__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_cache_builders_remote_data_build_service__WEBPACK_IMPORTED_MODULE_2__.RemoteDataBuildService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_cache_object_cache_service__WEBPACK_IMPORTED_MODULE_3__.ObjectCacheService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_shared_hal_endpoint_service__WEBPACK_IMPORTED_MODULE_4__.HALEndpointService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_1__.NotificationsService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjectable"]({
      token: MetadataSchemaDataService,
      factory: MetadataSchemaDataService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_admin_admin-reports_admin-reports-routes_ts.js.map