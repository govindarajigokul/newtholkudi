"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_app_access-control_access-control-routes_ts"],{

/***/ 93850:
/*!*********************************************************!*\
  !*** ./src/app/access-control/access-control-routes.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ROUTES: () => (/* binding */ ROUTES),
/* harmony export */   ValidateEmailErrorStateMatcher: () => (/* binding */ ValidateEmailErrorStateMatcher)
/* harmony export */ });
/* harmony import */ var _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-dynamic-forms/core */ 94403);
/* harmony import */ var _core_breadcrumbs_i18n_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/breadcrumbs/i18n-breadcrumb.resolver */ 72059);
/* harmony import */ var _core_data_feature_authorization_feature_authorization_guard_group_administrator_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/data/feature-authorization/feature-authorization-guard/group-administrator.guard */ 36673);
/* harmony import */ var _core_data_feature_authorization_feature_authorization_guard_site_administrator_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/data/feature-authorization/feature-authorization-guard/site-administrator.guard */ 36329);
/* harmony import */ var _access_control_routing_paths__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./access-control-routing-paths */ 25093);
/* harmony import */ var _bulk_access_bulk_access_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bulk-access/bulk-access.component */ 76023);
/* harmony import */ var _epeople_registry_epeople_registry_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./epeople-registry/epeople-registry.component */ 79077);
/* harmony import */ var _epeople_registry_eperson_form_eperson_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./epeople-registry/eperson-form/eperson-form.component */ 45223);
/* harmony import */ var _epeople_registry_eperson_resolver_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./epeople-registry/eperson-resolver.service */ 18066);
/* harmony import */ var _group_registry_group_form_group_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./group-registry/group-form/group-form.component */ 7511);
/* harmony import */ var _group_registry_group_page_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./group-registry/group-page.guard */ 60685);
/* harmony import */ var _group_registry_groups_registry_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./group-registry/groups-registry.component */ 17846);












/**
 * Condition for displaying error messages on email form field
 */
const ValidateEmailErrorStateMatcher = (control, model, hasFocus) => {
  return control.touched && !hasFocus || control.errors?.emailTaken && hasFocus;
};
const providers = [{
  provide: _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_11__.DYNAMIC_ERROR_MESSAGES_MATCHER,
  useValue: ValidateEmailErrorStateMatcher
}];
const ROUTES = [{
  path: _access_control_routing_paths__WEBPACK_IMPORTED_MODULE_3__.EPERSON_PATH,
  component: _epeople_registry_epeople_registry_component__WEBPACK_IMPORTED_MODULE_5__.EPeopleRegistryComponent,
  resolve: {
    breadcrumb: _core_breadcrumbs_i18n_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_0__.i18nBreadcrumbResolver
  },
  providers,
  data: {
    title: 'admin.access-control.epeople.title',
    breadcrumbKey: 'admin.access-control.epeople'
  },
  canActivate: [_core_data_feature_authorization_feature_authorization_guard_site_administrator_guard__WEBPACK_IMPORTED_MODULE_2__.siteAdministratorGuard]
}, {
  path: `${_access_control_routing_paths__WEBPACK_IMPORTED_MODULE_3__.EPERSON_PATH}/create`,
  component: _epeople_registry_eperson_form_eperson_form_component__WEBPACK_IMPORTED_MODULE_6__.EPersonFormComponent,
  resolve: {
    breadcrumb: _core_breadcrumbs_i18n_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_0__.i18nBreadcrumbResolver
  },
  providers,
  data: {
    title: 'admin.access-control.epeople.add.title',
    breadcrumbKey: 'admin.access-control.epeople.add'
  },
  canActivate: [_core_data_feature_authorization_feature_authorization_guard_site_administrator_guard__WEBPACK_IMPORTED_MODULE_2__.siteAdministratorGuard]
}, {
  path: `${_access_control_routing_paths__WEBPACK_IMPORTED_MODULE_3__.EPERSON_PATH}/:id/edit`,
  component: _epeople_registry_eperson_form_eperson_form_component__WEBPACK_IMPORTED_MODULE_6__.EPersonFormComponent,
  resolve: {
    breadcrumb: _core_breadcrumbs_i18n_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_0__.i18nBreadcrumbResolver,
    ePerson: _epeople_registry_eperson_resolver_service__WEBPACK_IMPORTED_MODULE_7__.EPersonResolver
  },
  providers,
  data: {
    title: 'admin.access-control.epeople.edit.title',
    breadcrumbKey: 'admin.access-control.epeople.edit'
  },
  canActivate: [_core_data_feature_authorization_feature_authorization_guard_site_administrator_guard__WEBPACK_IMPORTED_MODULE_2__.siteAdministratorGuard]
}, {
  path: _access_control_routing_paths__WEBPACK_IMPORTED_MODULE_3__.GROUP_PATH,
  component: _group_registry_groups_registry_component__WEBPACK_IMPORTED_MODULE_10__.GroupsRegistryComponent,
  resolve: {
    breadcrumb: _core_breadcrumbs_i18n_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_0__.i18nBreadcrumbResolver
  },
  providers,
  data: {
    title: 'admin.access-control.groups.title',
    breadcrumbKey: 'admin.access-control.groups'
  },
  canActivate: [_core_data_feature_authorization_feature_authorization_guard_group_administrator_guard__WEBPACK_IMPORTED_MODULE_1__.groupAdministratorGuard]
}, {
  path: `${_access_control_routing_paths__WEBPACK_IMPORTED_MODULE_3__.GROUP_PATH}/create`,
  component: _group_registry_group_form_group_form_component__WEBPACK_IMPORTED_MODULE_8__.GroupFormComponent,
  resolve: {
    breadcrumb: _core_breadcrumbs_i18n_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_0__.i18nBreadcrumbResolver
  },
  providers,
  data: {
    title: 'admin.access-control.groups.title.addGroup',
    breadcrumbKey: 'admin.access-control.groups.addGroup'
  },
  canActivate: [_core_data_feature_authorization_feature_authorization_guard_group_administrator_guard__WEBPACK_IMPORTED_MODULE_1__.groupAdministratorGuard]
}, {
  path: `${_access_control_routing_paths__WEBPACK_IMPORTED_MODULE_3__.GROUP_PATH}/:groupId/edit`,
  component: _group_registry_group_form_group_form_component__WEBPACK_IMPORTED_MODULE_8__.GroupFormComponent,
  resolve: {
    breadcrumb: _core_breadcrumbs_i18n_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_0__.i18nBreadcrumbResolver
  },
  providers,
  data: {
    title: 'admin.access-control.groups.title.singleGroup',
    breadcrumbKey: 'admin.access-control.groups.singleGroup'
  },
  canActivate: [_group_registry_group_page_guard__WEBPACK_IMPORTED_MODULE_9__.groupPageGuard]
}, {
  path: 'bulk-access',
  component: _bulk_access_bulk_access_component__WEBPACK_IMPORTED_MODULE_4__.BulkAccessComponent,
  resolve: {
    breadcrumb: _core_breadcrumbs_i18n_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_0__.i18nBreadcrumbResolver
  },
  data: {
    title: 'admin.access-control.bulk-access.title',
    breadcrumbKey: 'admin.access-control.bulk-access'
  },
  canActivate: [_core_data_feature_authorization_feature_authorization_guard_site_administrator_guard__WEBPACK_IMPORTED_MODULE_2__.siteAdministratorGuard]
}];

/***/ }),

/***/ 19727:
/*!***********************************************************************************!*\
  !*** ./src/app/access-control/bulk-access/browse/bulk-access-browse.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BulkAccessBrowseComponent: () => (/* binding */ BulkAccessBrowseComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 49966);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-pagination */ 67649);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 83485);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 64785);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var _core_data_paginated_list_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/data/paginated-list.model */ 96820);
/* harmony import */ var _core_shared_page_info_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/shared/page-info.model */ 32089);
/* harmony import */ var _core_shared_search_search_configuration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/shared/search/search-configuration.service */ 68611);
/* harmony import */ var _my_dspace_page_my_dspace_configuration_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../my-dspace-page/my-dspace-configuration.service */ 787);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/empty.util */ 82777);
/* harmony import */ var _shared_object_collection_shared_listable_object_listable_object_component_loader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/object-collection/shared/listable-object/listable-object-component-loader.component */ 17191);
/* harmony import */ var _shared_object_collection_shared_selectable_list_item_control_selectable_list_item_control_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/object-collection/shared/selectable-list-item-control/selectable-list-item-control.component */ 35323);
/* harmony import */ var _shared_object_list_selectable_list_selectable_list_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/object-list/selectable-list/selectable-list.service */ 13329);
/* harmony import */ var _shared_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/pagination/pagination.component */ 40590);
/* harmony import */ var _shared_pagination_pagination_component_options_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/pagination/pagination-component-options.model */ 23401);
/* harmony import */ var _shared_remote_data_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/remote-data.utils */ 43404);
/* harmony import */ var _shared_search_themed_search_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/search/themed-search.component */ 54992);
/* harmony import */ var _shared_utils_browser_only_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/utils/browser-only.pipe */ 75465);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 90310);
























const _c0 = a0 => ({
  number: a0
});
const _c1 = a0 => ({
  repeatable: true,
  listId: a0
});
const _c2 = (a0, a1, a2) => ({
  itemsPerPage: a0,
  currentPage: a1,
  totalItems: a2
});
function BulkAccessBrowseComponent_ng_template_3_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "span", 12);
  }
}
function BulkAccessBrowseComponent_ng_template_3_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "span", 13);
  }
}
function BulkAccessBrowseComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function BulkAccessBrowseComponent_ng_template_3_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      const acc_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](1);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](acc_r2.toggle("browse"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function BulkAccessBrowseComponent_ng_template_3_Template_button_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r1);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"]($event.preventDefault());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "div", 8)(5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](6, BulkAccessBrowseComponent_ng_template_3_span_6_Template, 1, 0, "span", 10)(7, BulkAccessBrowseComponent_ng_template_3_span_7_Template, 1, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    const acc_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵattribute"]("aria-expanded", acc_r2.isExpanded("browse"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](3, 4, "admin.access-control.bulk-access-browse.header"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", acc_r2.isExpanded("browse"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !acc_r2.isExpanded("browse"));
  }
}
function BulkAccessBrowseComponent_ng_template_4_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "ds-search", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("configuration", "administrativeBulkAccess")("selectable", true)("selectionConfig", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](4, _c1, ctx_r3.listId))("showThumbnails", false);
  }
}
function BulkAccessBrowseComponent_ng_template_4_ng_template_14_ul_4_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "li", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](1, "dsBrowserOnly");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "ds-selectable-list-item-control", 27)(3, "ds-listable-object-component-loader", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const object_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵattribute"]("data-test", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](1, 9, "list-object"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("index", i_r7)("object", object_r6)("selectionConfig", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](11, _c1, ctx_r3.listId));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("listID", ctx_r3.listId)("index", i_r7)("object", object_r6)("showThumbnails", false)("viewMode", "list");
  }
}
function BulkAccessBrowseComponent_ng_template_4_ng_template_14_ul_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ul", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, BulkAccessBrowseComponent_ng_template_4_ng_template_14_ul_4_li_1_Template, 4, 13, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](6, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](6, 9, (tmp_5_0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 1, ctx_r3.objectsSelected$)) == null ? null : tmp_5_0.payload == null ? null : tmp_5_0.payload.page, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction3"](12, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](3, 3, ctx_r3.paginationOptions$).pageSize, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](4, 5, ctx_r3.paginationOptions$).currentPage, (tmp_5_0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](5, 7, ctx_r3.objectsSelected$)) == null ? null : tmp_5_0.payload == null ? null : tmp_5_0.payload.page.length)));
  }
}
function BulkAccessBrowseComponent_ng_template_4_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ds-pagination", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("prev", function BulkAccessBrowseComponent_ng_template_4_ng_template_14_Template_ds_pagination_prev_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r5);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r3.pagePrev());
    })("next", function BulkAccessBrowseComponent_ng_template_4_ng_template_14_Template_ds_pagination_next_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r5);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r3.pageNext());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](4, BulkAccessBrowseComponent_ng_template_4_ng_template_14_ul_4_Template, 7, 16, "ul", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_8_0;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("paginationOptions", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](1, 5, ctx_r3.paginationOptions$))("collectionSize", (tmp_5_0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 7, ctx_r3.objectsSelected$)) == null ? null : tmp_5_0.payload == null ? null : tmp_5_0.payload.totalElements)("objects", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](3, 9, ctx_r3.objectsSelected$))("showPaginator", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (tmp_8_0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](5, 11, ctx_r3.objectsSelected$)) == null ? null : tmp_8_0.hasSucceeded);
  }
}
function BulkAccessBrowseComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 14)(1, "ul", 15, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayListener"]("activeIdChange", function BulkAccessBrowseComponent_ng_template_4_Template_ul_activeIdChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r3);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayBindingSet"](ctx_r3.activateId, $event) || (ctx_r3.activateId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "li", 16)(4, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](7, BulkAccessBrowseComponent_ng_template_4_ng_template_7_Template, 2, 6, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "li", 16)(9, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](11, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](12, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](14, BulkAccessBrowseComponent_ng_template_4_ng_template_14_Template, 6, 13, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](15, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_7_0;
    const nav_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](2);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayProperty"]("activeId", ctx_r3.activateId);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngbNavItem", "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](6, 6, "admin.access-control.bulk-access-browse.search.header"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngbNavItem", "selected");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](13, 12, "admin.access-control.bulk-access-browse.selected.header", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](15, _c0, ((tmp_7_0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](11, 8, ctx_r3.objectsSelected$)) == null ? null : tmp_7_0.payload == null ? null : tmp_7_0.payload.totalElements) ? (tmp_7_0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](12, 10, ctx_r3.objectsSelected$)) == null ? null : tmp_7_0.payload == null ? null : tmp_7_0.payload.totalElements : "0")), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngbNavOutlet", nav_r8);
  }
}
class BulkAccessBrowseComponent {
  constructor(selectableListService) {
    this.selectableListService = selectableListService;
    /**
     * The active nav id
     */
    this.activateId = 'search';
    /**
     * The list of the objects already selected
     */
    this.objectsSelected$ = new rxjs__WEBPACK_IMPORTED_MODULE_14__.BehaviorSubject(null);
    /**
     * The pagination options object used for the list of selected elements
     */
    this.paginationOptions$ = new rxjs__WEBPACK_IMPORTED_MODULE_14__.BehaviorSubject(Object.assign(new _shared_pagination_pagination_component_options_model__WEBPACK_IMPORTED_MODULE_9__.PaginationComponentOptions(), {
      id: 'bas',
      pageSize: 5,
      currentPage: 1
    }));
    /**
     * Array to track all subscriptions and unsubscribe them onDestroy
     */
    this.subs = [];
  }
  /**
   * Subscribe to selectable list updates
   */
  ngOnInit() {
    this.subs.push(this.selectableListService.getSelectableList(this.listId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)(list => this.generatePaginatedListBySelectedElements(list))).subscribe(this.objectsSelected$));
  }
  pageNext() {
    this.paginationOptions$.next(Object.assign(new _shared_pagination_pagination_component_options_model__WEBPACK_IMPORTED_MODULE_9__.PaginationComponentOptions(), this.paginationOptions$.value, {
      currentPage: this.paginationOptions$.value.currentPage + 1
    }));
  }
  pagePrev() {
    this.paginationOptions$.next(Object.assign(new _shared_pagination_pagination_component_options_model__WEBPACK_IMPORTED_MODULE_9__.PaginationComponentOptions(), this.paginationOptions$.value, {
      currentPage: this.paginationOptions$.value.currentPage - 1
    }));
  }
  calculatePageCount(pageSize, totalCount = 0) {
    // we suppose that if we have 0 items we want 1 empty page
    return totalCount < pageSize ? 1 : Math.ceil(totalCount / pageSize);
  }
  /**
   * Generate The RemoteData object containing the list of the selected elements
   * @param list
   * @private
   */
  generatePaginatedListBySelectedElements(list) {
    const pageInfo = new _core_shared_page_info_model__WEBPACK_IMPORTED_MODULE_1__.PageInfo({
      elementsPerPage: this.paginationOptions$.value.pageSize,
      totalElements: list?.selection.length,
      totalPages: this.calculatePageCount(this.paginationOptions$.value.pageSize, list?.selection.length),
      currentPage: this.paginationOptions$.value.currentPage
    });
    if (pageInfo.currentPage > pageInfo.totalPages) {
      pageInfo.currentPage = pageInfo.totalPages;
      this.paginationOptions$.next(Object.assign(new _shared_pagination_pagination_component_options_model__WEBPACK_IMPORTED_MODULE_9__.PaginationComponentOptions(), this.paginationOptions$.value, {
        currentPage: pageInfo.currentPage
      }));
    }
    return (0,_shared_remote_data_utils__WEBPACK_IMPORTED_MODULE_10__.createSuccessfulRemoteDataObject)((0,_core_data_paginated_list_model__WEBPACK_IMPORTED_MODULE_0__.buildPaginatedList)(pageInfo, list?.selection || []));
  }
  ngOnDestroy() {
    this.subs.filter(sub => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_4__.hasValue)(sub)).forEach(sub => sub.unsubscribe());
    this.selectableListService.deselectAll(this.listId);
  }
  static {
    this.ɵfac = function BulkAccessBrowseComponent_Factory(t) {
      return new (t || BulkAccessBrowseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_shared_object_list_selectable_list_selectable_list_service__WEBPACK_IMPORTED_MODULE_7__.SelectableListService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
      type: BulkAccessBrowseComponent,
      selectors: [["ds-bulk-access-browse"]],
      inputs: {
        listId: "listId"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵProvidersFeature"]([{
        provide: _my_dspace_page_my_dspace_configuration_service__WEBPACK_IMPORTED_MODULE_3__.SEARCH_CONFIG_SERVICE,
        useClass: _core_shared_search_search_configuration_service__WEBPACK_IMPORTED_MODULE_2__.SearchConfigurationService
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵStandaloneFeature"]],
      decls: 5,
      vars: 2,
      consts: [["acc", "ngbAccordion"], ["nav", "ngbNav"], [3, "activeIds"], [3, "id"], ["ngbPanelHeader", ""], ["ngbPanelContent", ""], ["ngbPanelToggle", "", "data-test", "browse", 1, "w-100", "d-flex", "gap-3", "justify-content-between", "collapse-toggle", 3, "click"], ["type", "button", "aria-controls", "bulk-access-browse-panel-content", 1, "btn", "btn-link", "p-0", 3, "click"], [1, "text-right", "d-flex", "gap-2"], [1, "d-flex", "my-auto"], ["class", "fas fa-chevron-up fa-fw", 4, "ngIf"], ["class", "fas fa-chevron-down fa-fw", 4, "ngIf"], [1, "fas", "fa-chevron-up", "fa-fw"], [1, "fas", "fa-chevron-down", "fa-fw"], ["id", "bulk-access-browse-panel-content"], ["ngbNav", "", 1, "nav-pills", 3, "activeIdChange", "activeId"], ["role", "presentation", 3, "ngbNavItem"], ["ngbNavLink", ""], ["ngbNavContent", ""], [1, "mt-5", 3, "ngbNavOutlet"], [1, "mx-n3"], [3, "configuration", "selectable", "selectionConfig", "showThumbnails"], [3, "prev", "next", "paginationOptions", "collectionSize", "objects", "showPaginator"], ["class", "list-unstyled ml-4", 4, "ngIf"], [1, "list-unstyled", "ml-4"], ["class", "mt-4 mb-4 d-flex", 4, "ngFor", "ngForOf"], [1, "mt-4", "mb-4", "d-flex"], [3, "index", "object", "selectionConfig"], [3, "listID", "index", "object", "showThumbnails", "viewMode"]],
      template: function BulkAccessBrowseComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ngb-accordion", 2, 0)(2, "ngb-panel", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](3, BulkAccessBrowseComponent_ng_template_3_Template, 8, 6, "ng-template", 4)(4, BulkAccessBrowseComponent_ng_template_4_Template, 16, 17, "ng-template", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("activeIds", "browse");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("id", "browse");
        }
      },
      dependencies: [_shared_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_8__.PaginationComponent, _angular_common__WEBPACK_IMPORTED_MODULE_17__.AsyncPipe, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbAccordionModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbAccordion, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbPanel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbPanelContent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbPanelHeader, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbNavModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbNavContent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbNav, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbNavOutlet, _shared_search_themed_search_component__WEBPACK_IMPORTED_MODULE_11__.ThemedSearchComponent, _shared_utils_browser_only_pipe__WEBPACK_IMPORTED_MODULE_12__.BrowserOnlyPipe, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, ngx_pagination__WEBPACK_IMPORTED_MODULE_20__.NgxPaginationModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_20__.PaginatePipe, _shared_object_collection_shared_selectable_list_item_control_selectable_list_item_control_component__WEBPACK_IMPORTED_MODULE_6__.SelectableListItemControlComponent, _shared_object_collection_shared_listable_object_listable_object_component_loader_component__WEBPACK_IMPORTED_MODULE_5__.ListableObjectComponentLoaderComponent],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1bGstYWNjZXNzLWJyb3dzZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQSIsImZpbGUiOiJidWxrLWFjY2Vzcy1icm93c2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqLyJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWNjZXNzLWNvbnRyb2wvYnVsay1hY2Nlc3MvYnJvd3NlL2J1bGstYWNjZXNzLWJyb3dzZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBLGdsQkFBZ2xCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi8iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 76023:
/*!*********************************************************************!*\
  !*** ./src/app/access-control/bulk-access/bulk-access.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BulkAccessComponent: () => (/* binding */ BulkAccessComponent)
/* harmony export */ });
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 83485);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 64785);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var _shared_access_control_form_container_bulk_access_control_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/access-control-form-container/bulk-access-control.service */ 54028);
/* harmony import */ var _shared_btn_disabled_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/btn-disabled.directive */ 60456);
/* harmony import */ var _shared_object_list_selectable_list_selectable_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/object-list/selectable-list/selectable-list.service */ 13329);
/* harmony import */ var _browse_bulk_access_browse_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./browse/bulk-access-browse.component */ 19727);
/* harmony import */ var _settings_bulk_access_settings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings/bulk-access-settings.component */ 66641);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 90310);












const _c0 = ["dsBulkSettings"];
class BulkAccessComponent {
  constructor(bulkAccessControlService, selectableListService) {
    this.bulkAccessControlService = bulkAccessControlService;
    this.selectableListService = selectableListService;
    /**
     * The selection list id
     */
    this.listId = 'bulk-access-list';
    /**
     * The list of the objects already selected
     */
    this.objectsSelected$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject([]);
    /**
     * Array to track all subscriptions and unsubscribe them onDestroy
     */
    this.subs = [];
  }
  ngOnInit() {
    this.subs.push(this.selectableListService.getSelectableList(this.listId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(list => this.generateIdListBySelectedElements(list))).subscribe(this.objectsSelected$));
  }
  canExport() {
    return this.objectsSelected$.value?.length > 0;
  }
  /**
   * Reset the form to its initial state
   * This will also reset the state of the child components (bitstream and item access)
   */
  reset() {
    this.settings.reset();
  }
  /**
   * Submit the form
   * This will create a payload file and execute the script
   */
  submit() {
    const settings = this.settings.getValue();
    const bitstreamAccess = settings.bitstream;
    const itemAccess = settings.item;
    const {
      file
    } = this.bulkAccessControlService.createPayloadFile({
      bitstreamAccess,
      itemAccess,
      state: settings.state
    });
    this.bulkAccessControlService.executeScript(this.objectsSelected$.value || [], file).subscribe();
  }
  /**
   * Generate The RemoteData object containing the list of the selected elements
   * @param list
   * @private
   */
  generateIdListBySelectedElements(list) {
    return list?.selection?.map(entry => entry.indexableObject.uuid);
  }
  static {
    this.ɵfac = function BulkAccessComponent_Factory(t) {
      return new (t || BulkAccessComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_access_control_form_container_bulk_access_control_service__WEBPACK_IMPORTED_MODULE_0__.BulkAccessControlService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_object_list_selectable_list_selectable_list_service__WEBPACK_IMPORTED_MODULE_2__.SelectableListService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
      type: BulkAccessComponent,
      selectors: [["ds-bulk-access"]],
      viewQuery: function BulkAccessComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.settings = _t.first);
        }
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵStandaloneFeature"]],
      decls: 16,
      vars: 11,
      consts: [["dsBulkSettings", ""], [1, "container"], [3, "listId"], [1, "clearfix", "mb-3"], [1, "d-flex", "justify-content-end"], [1, "btn", "btn-outline-primary", "mr-3", 3, "click"], [1, "btn", "btn-primary", 3, "click", "dsBtnDisabled"]],
      template: function BulkAccessComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 1)(1, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "ds-bulk-access-browse", 2)(5, "div", 3)(6, "ds-bulk-access-settings", null, 0)(8, "hr");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 4)(10, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BulkAccessComponent_Template_button_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx.reset());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](12, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BulkAccessComponent_Template_button_click_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx.submit());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](15, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 5, "admin.access-control.bulk-access.title"));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("listId", ctx.listId);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](12, 7, "access-control-cancel"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("dsBtnDisabled", !ctx.canExport());
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](15, 9, "access-control-execute"), " ");
        }
      },
      dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe, _settings_bulk_access_settings_component__WEBPACK_IMPORTED_MODULE_4__.BulkAccessSettingsComponent, _browse_bulk_access_browse_component__WEBPACK_IMPORTED_MODULE_3__.BulkAccessBrowseComponent, _shared_btn_disabled_directive__WEBPACK_IMPORTED_MODULE_1__.BtnDisabledDirective],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1bGstYWNjZXNzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBIiwiZmlsZSI6ImJ1bGstYWNjZXNzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi8iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWNjZXNzLWNvbnRyb2wvYnVsay1hY2Nlc3MvYnVsay1hY2Nlc3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQSw0akJBQTRqQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 66641:
/*!***************************************************************************************!*\
  !*** ./src/app/access-control/bulk-access/settings/bulk-access-settings.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BulkAccessSettingsComponent: () => (/* binding */ BulkAccessSettingsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 49966);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var _shared_access_control_form_container_access_control_form_container_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/access-control-form-container/access-control-form-container.component */ 43664);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 90310);







const _c0 = ["dsAccessControlForm"];
function BulkAccessSettingsComponent_ng_template_3_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 12);
  }
}
function BulkAccessSettingsComponent_ng_template_3_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 13);
  }
}
function BulkAccessSettingsComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BulkAccessSettingsComponent_ng_template_3_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      const acc_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](acc_r2.toggle("settings"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BulkAccessSettingsComponent_ng_template_3_Template_button_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event.preventDefault());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 8)(5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, BulkAccessSettingsComponent_ng_template_3_span_6_Template, 1, 0, "span", 10)(7, BulkAccessSettingsComponent_ng_template_3_span_7_Template, 1, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const acc_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-expanded", acc_r2.isExpanded("settings"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, "admin.access-control.bulk-access-settings.header"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", acc_r2.isExpanded("settings"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !acc_r2.isExpanded("settings"));
  }
}
function BulkAccessSettingsComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ds-access-control-form-container", 14, 1);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showSubmit", false);
  }
}
class BulkAccessSettingsComponent {
  /**
   * Will be used from a parent component to read the value of the form
   */
  getValue() {
    return this.controlForm.getFormValue();
  }
  /**
   * Reset the form to its initial state
   * This will also reset the state of the child components (bitstream and item access)
   */
  reset() {
    this.controlForm.reset();
  }
  static {
    this.ɵfac = function BulkAccessSettingsComponent_Factory(t) {
      return new (t || BulkAccessSettingsComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: BulkAccessSettingsComponent,
      selectors: [["ds-bulk-access-settings"]],
      viewQuery: function BulkAccessSettingsComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.controlForm = _t.first);
        }
      },
      exportAs: ["dsBulkSettings"],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 5,
      vars: 2,
      consts: [["acc", "ngbAccordion"], ["dsAccessControlForm", ""], [3, "activeIds"], [3, "id"], ["ngbPanelHeader", ""], ["ngbPanelContent", ""], ["ngbPanelToggle", "", "data-test", "settings", 1, "w-100", "d-flex", "gap-3", "justify-content-between", "collapse-toggle", 3, "click"], ["type", "button", "aria-controls", "bulk-access-settings-panel-content", 1, "btn", "btn-link", "p-0", 3, "click"], [1, "text-right", "d-flex", "gap-2"], [1, "d-flex", "my-auto"], ["class", "fas fa-chevron-up fa-fw", 4, "ngIf"], ["class", "fas fa-chevron-down fa-fw", 4, "ngIf"], [1, "fas", "fa-chevron-up", "fa-fw"], [1, "fas", "fa-chevron-down", "fa-fw"], ["id", "bulk-access-settings-panel-content", 3, "showSubmit"]],
      template: function BulkAccessSettingsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngb-accordion", 2, 0)(2, "ngb-panel", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, BulkAccessSettingsComponent_ng_template_3_Template, 8, 6, "ng-template", 4)(4, BulkAccessSettingsComponent_ng_template_4_Template, 2, 1, "ng-template", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("activeIds", "settings");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", "settings");
        }
      },
      dependencies: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbAccordionModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbAccordion, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbPanel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbPanelContent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbPanelHeader, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _shared_access_control_form_container_access_control_form_container_component__WEBPACK_IMPORTED_MODULE_0__.AccessControlFormContainerComponent],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1bGstYWNjZXNzLXNldHRpbmdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBIiwiZmlsZSI6ImJ1bGstYWNjZXNzLXNldHRpbmdzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi8iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWNjZXNzLWNvbnRyb2wvYnVsay1hY2Nlc3Mvc2V0dGluZ3MvYnVsay1hY2Nlc3Mtc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQSxvbEJBQW9sQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 79077:
/*!*******************************************************************************!*\
  !*** ./src/app/access-control/epeople-registry/epeople-registry.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EPeopleRegistryComponent: () => (/* binding */ EPeopleRegistryComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/forms */ 56106);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 83485);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs */ 27639);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 84975);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs/operators */ 78374);
/* harmony import */ var _core_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/breadcrumbs/dso-name.service */ 96526);
/* harmony import */ var _core_data_feature_authorization_authorization_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/data/feature-authorization/authorization-data.service */ 3675);
/* harmony import */ var _core_data_feature_authorization_feature_id__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/data/feature-authorization/feature-id */ 3970);
/* harmony import */ var _core_data_paginated_list_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/data/paginated-list.model */ 96820);
/* harmony import */ var _core_data_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/data/request.service */ 32473);
/* harmony import */ var _core_eperson_eperson_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/eperson/eperson-data.service */ 74449);
/* harmony import */ var _core_eperson_models_eperson_dto_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/eperson/models/eperson-dto.model */ 79145);
/* harmony import */ var _core_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/pagination/pagination.service */ 76896);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/shared/operators */ 55757);
/* harmony import */ var _core_shared_page_info_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/shared/page-info.model */ 32089);
/* harmony import */ var _shared_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/confirmation-modal/confirmation-modal.component */ 9284);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/empty.util */ 82777);
/* harmony import */ var _shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/loading/themed-loading.component */ 82394);
/* harmony import */ var _shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/notifications/notifications.service */ 69472);
/* harmony import */ var _shared_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/pagination/pagination.component */ 40590);
/* harmony import */ var _shared_pagination_pagination_component_options_model__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../shared/pagination/pagination-component-options.model */ 23401);
/* harmony import */ var _access_control_routing_paths__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../access-control-routing-paths */ 25093);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 49966);



































const _c0 = a0 => ({
  "table-primary": a0
});
const _c1 = a0 => ({
  name: a0
});
function EPeopleRegistryComponent_ds_loading_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "ds-loading");
  }
}
function EPeopleRegistryComponent_ds_pagination_41_tr_19_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function EPeopleRegistryComponent_ds_pagination_41_tr_19_button_13_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r1);
      const epersonDto_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r2.deleteEPerson(epersonDto_r2.eperson));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](2, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const epersonDto_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind2"](1, 1, ctx_r2.labelPrefix + "table.edit.buttons.remove", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction1"](4, _c1, ctx_r2.dsoNameService.getName(epersonDto_r2.eperson))));
  }
}
function EPeopleRegistryComponent_ds_pagination_41_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "tr", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](8, "td")(9, "div", 29)(10, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](12, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](13, EPeopleRegistryComponent_ds_pagination_41_tr_19_button_13_Template, 3, 6, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const epersonDto_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction1"](12, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](1, 7, ctx_r2.activeEPerson$) === epersonDto_r2.eperson));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](epersonDto_r2.eperson.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](ctx_r2.dsoNameService.getName(epersonDto_r2.eperson));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](epersonDto_r2.eperson.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind2"](11, 9, ctx_r2.labelPrefix + "table.edit.buttons.edit", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction1"](14, _c1, ctx_r2.dsoNameService.getName(epersonDto_r2.eperson))));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("routerLink", ctx_r2.getEditEPeoplePage(epersonDto_r2.eperson.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", epersonDto_r2.ableToDelete);
  }
}
function EPeopleRegistryComponent_ds_pagination_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "ds-pagination", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](2, "div", 24)(3, "table", 25)(4, "thead")(5, "tr")(6, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](9, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](12, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](18, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](19, EPeopleRegistryComponent_ds_pagination_41_tr_19_Template, 14, 16, "tr", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](20, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_9_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("paginationOptions", ctx_r2.config)("collectionSize", (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](1, 9, ctx_r2.pageInfoState$)) == null ? null : tmp_2_0.totalElements)("hideGear", true)("hidePagerWhenSinglePage", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](8, 11, ctx_r2.labelPrefix + "table.id"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](11, 13, ctx_r2.labelPrefix + "table.name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](14, 15, ctx_r2.labelPrefix + "table.email"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](17, 17, ctx_r2.labelPrefix + "table.edit"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngForOf", (tmp_9_0 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](20, 19, ctx_r2.ePeopleDto$)) == null ? null : tmp_9_0.page);
  }
}
function EPeopleRegistryComponent_div_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 1, ctx_r2.labelPrefix + "no-items"), " ");
  }
}
/**
 * A component used for managing all existing epeople within the repository.
 * The admin can create, edit or delete epeople here.
 */
class EPeopleRegistryComponent {
  constructor(epersonService, translateService, notificationsService, authorizationService, formBuilder, router, modalService, paginationService, requestService, dsoNameService) {
    this.epersonService = epersonService;
    this.translateService = translateService;
    this.notificationsService = notificationsService;
    this.authorizationService = authorizationService;
    this.formBuilder = formBuilder;
    this.router = router;
    this.modalService = modalService;
    this.paginationService = paginationService;
    this.requestService = requestService;
    this.dsoNameService = dsoNameService;
    this.labelPrefix = 'admin.access-control.epeople.';
    /**
     * A list of all the current EPeople within the repository or the result of the search
     */
    this.ePeople$ = new rxjs__WEBPACK_IMPORTED_MODULE_18__.BehaviorSubject((0,_core_data_paginated_list_model__WEBPACK_IMPORTED_MODULE_3__.buildPaginatedList)(new _core_shared_page_info_model__WEBPACK_IMPORTED_MODULE_9__.PageInfo(), []));
    /**
     * A BehaviorSubject with the list of EpersonDtoModel objects made from the EPeople in the repository or
     * as the result of the search
     */
    this.ePeopleDto$ = new rxjs__WEBPACK_IMPORTED_MODULE_18__.BehaviorSubject({});
    /**
     * An observable for the pageInfo, needed to pass to the pagination component
     */
    this.pageInfoState$ = new rxjs__WEBPACK_IMPORTED_MODULE_18__.BehaviorSubject(undefined);
    /**
     * A boolean representing if a search is pending
     */
    this.searching$ = new rxjs__WEBPACK_IMPORTED_MODULE_18__.BehaviorSubject(false);
    /**
     * Pagination config used to display the list of epeople
     */
    this.config = Object.assign(new _shared_pagination_pagination_component_options_model__WEBPACK_IMPORTED_MODULE_15__.PaginationComponentOptions(), {
      id: 'elp',
      pageSize: 5,
      currentPage: 1
    });
    /**
     * List of subscriptions
     */
    this.subs = [];
    this.currentSearchQuery = '';
    this.currentSearchScope = 'metadata';
    this.searchForm = this.formBuilder.group({
      scope: 'metadata',
      query: ''
    });
  }
  ngOnInit() {
    this.initialisePage();
  }
  /**
   * This method will initialise the page
   */
  initialisePage() {
    this.searching$.next(true);
    this.search({
      scope: this.currentSearchScope,
      query: this.currentSearchQuery
    });
    this.activeEPerson$ = this.epersonService.getActiveEPerson();
    this.subs.push(this.ePeople$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.switchMap)(epeople => {
      if (epeople.pageInfo.totalElements > 0) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_20__.combineLatest)(epeople.page.map(eperson => {
          return this.authorizationService.isAuthorized(_core_data_feature_authorization_feature_id__WEBPACK_IMPORTED_MODULE_2__.FeatureID.CanDelete, (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_11__.hasValue)(eperson) ? eperson.self : undefined).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.map)(authorized => {
            const epersonDtoModel = new _core_eperson_models_eperson_dto_model__WEBPACK_IMPORTED_MODULE_6__.EpersonDtoModel();
            epersonDtoModel.ableToDelete = authorized;
            epersonDtoModel.eperson = eperson;
            return epersonDtoModel;
          }));
        })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.map)(dtos => {
          return (0,_core_data_paginated_list_model__WEBPACK_IMPORTED_MODULE_3__.buildPaginatedList)(epeople.pageInfo, dtos);
        }));
      } else {
        // if it's empty, simply forward the empty list
        return [epeople];
      }
    })).subscribe(value => {
      this.searching$.next(false);
      this.ePeopleDto$.next(value);
      this.pageInfoState$.next(value.pageInfo);
    }));
  }
  /**
   * Search in the EPeople by metadata (default) or email
   * @param data  Contains scope and query param
   */
  search(data) {
    this.searching$.next(true);
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_11__.hasValue)(this.findListOptionsSub)) {
      this.findListOptionsSub.unsubscribe();
    }
    this.findListOptionsSub = this.paginationService.getCurrentPagination(this.config.id, this.config).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.switchMap)(findListOptions => {
      const query = data.query;
      const scope = data.scope;
      if (query != null && this.currentSearchQuery !== query) {
        void this.router.navigate([(0,_access_control_routing_paths__WEBPACK_IMPORTED_MODULE_16__.getEPersonsRoute)()], {
          queryParamsHandling: 'merge'
        });
        this.currentSearchQuery = query;
        this.paginationService.resetPage(this.config.id);
      }
      if (scope != null && this.currentSearchScope !== scope) {
        void this.router.navigate([(0,_access_control_routing_paths__WEBPACK_IMPORTED_MODULE_16__.getEPersonsRoute)()], {
          queryParamsHandling: 'merge'
        });
        this.currentSearchScope = scope;
        this.paginationService.resetPage(this.config.id);
      }
      return this.epersonService.searchByScope(this.currentSearchScope, this.currentSearchQuery, {
        currentPage: findListOptions.currentPage,
        elementsPerPage: findListOptions.pageSize
      });
    }), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_8__.getAllSucceededRemoteData)()).subscribe(peopleRD => {
      this.ePeople$.next(peopleRD.payload);
      this.pageInfoState$.next(peopleRD.payload.pageInfo);
    });
  }
  /**
   * Deletes EPerson, show notification on success/failure & updates EPeople list
   */
  deleteEPerson(ePerson) {
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_11__.hasValue)(ePerson.id)) {
      const modalRef = this.modalService.open(_shared_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_10__.ConfirmationModalComponent);
      modalRef.componentInstance.name = this.dsoNameService.getName(ePerson);
      modalRef.componentInstance.headerLabel = 'confirmation-modal.delete-eperson.header';
      modalRef.componentInstance.infoLabel = 'confirmation-modal.delete-eperson.info';
      modalRef.componentInstance.cancelLabel = 'confirmation-modal.delete-eperson.cancel';
      modalRef.componentInstance.confirmLabel = 'confirmation-modal.delete-eperson.confirm';
      modalRef.componentInstance.brandColor = 'danger';
      modalRef.componentInstance.confirmIcon = 'fas fa-trash';
      modalRef.componentInstance.response.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.take)(1)).subscribe(confirm => {
        if (confirm) {
          if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_11__.hasValue)(ePerson.id)) {
            this.epersonService.deleteEPerson(ePerson).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_8__.getFirstCompletedRemoteData)()).subscribe(restResponse => {
              if (restResponse.hasSucceeded) {
                this.notificationsService.success(this.translateService.get(this.labelPrefix + 'notification.deleted.success', {
                  name: this.dsoNameService.getName(ePerson)
                }));
              } else {
                this.notificationsService.error(this.translateService.get(this.labelPrefix + 'notification.deleted.success', {
                  id: ePerson.id,
                  statusCode: restResponse.statusCode,
                  errorMessage: restResponse.errorMessage
                }));
              }
            });
          }
        }
      });
    }
  }
  /**
   * Unsub all subscriptions
   */
  ngOnDestroy() {
    this.cleanupSubscribes();
    this.paginationService.clearPagination(this.config.id);
  }
  cleanupSubscribes() {
    this.subs.filter(sub => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_11__.hasValue)(sub)).forEach(sub => sub.unsubscribe());
  }
  /**
   * Reset all input-fields to be empty and search all search
   */
  clearFormAndResetResult() {
    this.searchForm.patchValue({
      query: ''
    });
    this.search({
      query: ''
    });
  }
  getEditEPeoplePage(id) {
    return (0,_access_control_routing_paths__WEBPACK_IMPORTED_MODULE_16__.getEPersonEditRoute)(id);
  }
  static {
    this.ɵfac = function EPeopleRegistryComponent_Factory(t) {
      return new (t || EPeopleRegistryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_core_eperson_eperson_data_service__WEBPACK_IMPORTED_MODULE_5__.EPersonDataService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_13__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_core_data_feature_authorization_authorization_data_service__WEBPACK_IMPORTED_MODULE_1__.AuthorizationDataService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_24__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_25__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_core_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_7__.PaginationService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_core_data_request_service__WEBPACK_IMPORTED_MODULE_4__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_core_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_0__.DSONameService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineComponent"]({
      type: EPeopleRegistryComponent,
      selectors: [["ds-epeople-registry"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵStandaloneFeature"]],
      decls: 46,
      vars: 40,
      consts: [[1, "container"], [1, "epeople-registry", "row"], [1, "col-12"], [1, "d-flex", "justify-content-between", "border-bottom", "mb-3"], ["id", "header", 1, "pb-2"], [1, "mr-auto", "btn", "btn-success", "addEPerson-button", 3, "routerLink"], [1, "fas", "fa-plus"], [1, "d-none", "d-sm-inline", "ml-1"], ["id", "search", 1, "border-bottom", "pb-2"], [1, "d-flex", "justify-content-between", 3, "ngSubmit", "formGroup"], ["name", "scope", "id", "scope", "formControlName", "scope", "aria-label", "Search scope", 1, "form-control"], ["value", "metadata"], ["value", "email"], [1, "flex-grow-1", "mr-3", "ml-3"], [1, "form-group", "input-group"], ["type", "text", "name", "query", "id", "query", "formControlName", "query", 1, "form-control", 3, "placeholder"], [1, "input-group-append"], ["type", "submit", 1, "search-button", "btn", "btn-primary"], [1, "fas", "fa-search"], [1, "search-button", "btn", "btn-secondary", 3, "click"], [4, "ngIf"], [3, "paginationOptions", "collectionSize", "hideGear", "hidePagerWhenSinglePage", 4, "ngIf"], ["class", "alert alert-info w-100 mb-2", "role", "alert", 4, "ngIf"], [3, "paginationOptions", "collectionSize", "hideGear", "hidePagerWhenSinglePage"], [1, "table-responsive"], ["id", "epeople", 1, "table", "table-striped", "table-hover", "table-bordered"], ["scope", "col"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], [1, "btn-group", "edit-field"], [1, "btn", "btn-outline-primary", "btn-sm", "access-control-editEPersonButton", 3, "routerLink", "title"], [1, "fas", "fa-edit", "fa-fw"], ["class", "delete-button btn btn-outline-danger btn-sm access-control-deleteEPersonButton", 3, "title", "click", 4, "ngIf"], [1, "delete-button", "btn", "btn-outline-danger", "btn-sm", "access-control-deleteEPersonButton", 3, "click", "title"], [1, "fas", "fa-trash-alt", "fa-fw"], ["role", "alert", 1, "alert", "alert-info", "w-100", "mb-2"]],
      template: function EPeopleRegistryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](6, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](7, "div")(8, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](9, "i", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](10, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](12, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](13, "h2", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](15, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](16, "form", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ngSubmit", function EPeopleRegistryComponent_Template_form_ngSubmit_16_listener() {
            return ctx.search(ctx.searchForm.value);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](17, "div")(18, "select", 10)(19, "option", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](21, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](22, "option", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](23);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](24, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](25, "div", 13)(26, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](27, "input", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](28, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](29, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](30, "span", 16)(31, "button", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](32, "i", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](33);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](34, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](35, "div")(36, "button", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function EPeopleRegistryComponent_Template_button_click_36_listener() {
            return ctx.clearFormAndResetResult();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](37);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](38, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](39, EPeopleRegistryComponent_ds_loading_39_Template, 1, 0, "ds-loading", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](40, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](41, EPeopleRegistryComponent_ds_pagination_41_Template, 21, 21, "ds-pagination", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](42, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](43, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](44, EPeopleRegistryComponent_div_44_Template, 3, 3, "div", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](45, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          let tmp_12_0;
          let tmp_13_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](6, 14, ctx.labelPrefix + "head"));
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("routerLink", "create");
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](12, 16, ctx.labelPrefix + "button.add"));
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](15, 18, ctx.labelPrefix + "search.head"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("formGroup", ctx.searchForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](21, 20, ctx.labelPrefix + "search.scope.metadata"));
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](24, 22, ctx.labelPrefix + "search.scope.email"));
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](28, 24, ctx.labelPrefix + "search.placeholder"));
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](29, 26, ctx.labelPrefix + "search.placeholder"));
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](34, 28, ctx.labelPrefix + "search.button"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](38, 30, ctx.labelPrefix + "button.see-all"));
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](40, 32, ctx.searching$));
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ((tmp_12_0 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](42, 34, ctx.pageInfoState$)) == null ? null : tmp_12_0.totalElements) > 0 && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](43, 36, ctx.searching$) !== true);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ((tmp_13_0 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](45, 38, ctx.pageInfoState$)) == null ? null : tmp_13_0.totalElements) === 0);
        }
      },
      dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__.TranslatePipe, _angular_router__WEBPACK_IMPORTED_MODULE_25__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_25__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_27__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_27__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_24__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_24__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_24__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_24__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormControlName, _shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_12__.ThemedLoadingComponent, _shared_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_14__.PaginationComponent, _angular_common__WEBPACK_IMPORTED_MODULE_27__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_27__.NgForOf],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 45223:
/*!****************************************************************************************!*\
  !*** ./src/app/access-control/epeople-registry/eperson-form/eperson-form.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EPersonFormComponent: () => (/* binding */ EPersonFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ng-dynamic-forms/core */ 94403);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! rxjs */ 27639);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! rxjs */ 17796);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! rxjs/operators */ 47943);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! rxjs/operators */ 84975);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! rxjs/operators */ 78374);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! rxjs/operators */ 56731);
/* harmony import */ var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/auth/auth.service */ 67116);
/* harmony import */ var _core_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/breadcrumbs/dso-name.service */ 96526);
/* harmony import */ var _core_data_eperson_registration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/data/eperson-registration.service */ 44996);
/* harmony import */ var _core_data_feature_authorization_authorization_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/data/feature-authorization/authorization-data.service */ 3675);
/* harmony import */ var _core_data_feature_authorization_feature_id__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/data/feature-authorization/feature-id */ 3970);
/* harmony import */ var _core_data_request_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/data/request.service */ 32473);
/* harmony import */ var _core_eperson_eperson_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/eperson/eperson-data.service */ 74449);
/* harmony import */ var _core_eperson_group_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/eperson/group-data.service */ 44494);
/* harmony import */ var _core_eperson_models_eperson_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/eperson/models/eperson.model */ 26349);
/* harmony import */ var _core_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/pagination/pagination.service */ 76896);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../core/shared/operators */ 55757);
/* harmony import */ var _register_email_form_register_email_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../register-email-form/register-email-form.component */ 48500);
/* harmony import */ var _shared_btn_disabled_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/btn-disabled.directive */ 60456);
/* harmony import */ var _shared_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/confirmation-modal/confirmation-modal.component */ 9284);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/empty.util */ 82777);
/* harmony import */ var _shared_form_builder_form_builder_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shared/form/builder/form-builder.service */ 1216);
/* harmony import */ var _shared_form_form_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../shared/form/form.component */ 99386);
/* harmony import */ var _shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../shared/loading/themed-loading.component */ 82394);
/* harmony import */ var _shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../shared/notifications/notifications.service */ 69472);
/* harmony import */ var _shared_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../shared/pagination/pagination.component */ 40590);
/* harmony import */ var _shared_pagination_pagination_component_options_model__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../shared/pagination/pagination-component-options.model */ 23401);
/* harmony import */ var _shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../shared/utils/follow-link-config.model */ 67600);
/* harmony import */ var _shared_utils_has_no_value_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../shared/utils/has-no-value.pipe */ 22198);
/* harmony import */ var _access_control_routing_paths__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../access-control-routing-paths */ 25093);
/* harmony import */ var _validators_email_taken_validator__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./validators/email-taken.validator */ 40224);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 49966);















































const _c0 = a0 => [a0];
function EPersonFormComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](0, "div");
  }
}
function EPersonFormComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "h1", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipeBind1"](2, 1, ctx_r1.messagePrefix + ".create"));
  }
}
function EPersonFormComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "h1", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipeBind1"](2, 1, ctx_r1.messagePrefix + ".edit"));
  }
}
function EPersonFormComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "div", 15)(1, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵlistener"]("click", function EPersonFormComponent_div_15_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵresetView"](ctx_r1.resetPassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](3, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("dsBtnDisabled", _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipeBind1"](2, 2, ctx_r1.canReset$) !== true);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipeBind1"](5, 4, "admin.access-control.epeople.actions.reset"), " ");
  }
}
function EPersonFormComponent_div_16_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵlistener"]("click", function EPersonFormComponent_div_16_button_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵresetView"](ctx_r1.impersonate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](1, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipeBind1"](3, 1, "admin.access-control.epeople.actions.impersonate"), " ");
  }
}
function EPersonFormComponent_div_16_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵlistener"]("click", function EPersonFormComponent_div_16_button_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵresetView"](ctx_r1.stopImpersonating());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](1, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipeBind1"](3, 1, "admin.access-control.epeople.actions.stop-impersonating"), " ");
  }
}
function EPersonFormComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](1, EPersonFormComponent_div_16_button_1_Template, 4, 3, "button", 18)(2, EPersonFormComponent_div_16_button_2_Template, 4, 3, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", !ctx_r1.isImpersonated);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ctx_r1.isImpersonated);
  }
}
function EPersonFormComponent_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵlistener"]("click", function EPersonFormComponent_button_18_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵresetView"](ctx_r1.delete());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](1, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipeBind1"](3, 1, "admin.access-control.epeople.actions.delete"), " ");
  }
}
function EPersonFormComponent_ds_loading_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](0, "ds-loading", 23);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("showMessage", false);
  }
}
function EPersonFormComponent_div_21_ds_loading_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](0, "ds-loading", 23);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("showMessage", false);
  }
}
function EPersonFormComponent_div_21_ds_pagination_7_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "tr")(1, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](3, "td", 31)(4, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵlistener"]("click", function EPersonFormComponent_div_21_ds_pagination_7_tr_16_Template_a_click_4_listener() {
      const group_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵrestoreView"](_r8).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵresetView"](ctx_r1.groupsDataService.startEditingNewGroup(group_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](6, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_9_0;
    const group_r9 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate"](group_r9.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpureFunction1"](6, _c0, ctx_r1.groupsDataService.getGroupEditPageRouterLink(group_r9)));
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate1"](" ", ctx_r1.dsoNameService.getName(group_r9), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate1"](" ", ctx_r1.dsoNameService.getName((tmp_9_0 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipeBind1"](8, 4, group_r9.object)) == null ? null : tmp_9_0.payload), " ");
  }
}
function EPersonFormComponent_div_21_ds_pagination_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "ds-pagination", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵlistener"]("pageChange", function EPersonFormComponent_div_21_ds_pagination_7_Template_ds_pagination_pageChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵresetView"](ctx_r1.onPageChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](2, "div", 27)(3, "table", 28)(4, "thead")(5, "tr")(6, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](9, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](12, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](15, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](16, EPersonFormComponent_div_21_ds_pagination_7_tr_16_Template, 9, 8, "tr", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipe"](17, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_11_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("paginationOptions", ctx_r1.config)("collectionSize", (tmp_5_0 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipeBind1"](1, 8, ctx_r1.groups$)) == null ? null : tmp_5_0.payload == null ? null : tmp_5_0.payload.totalElements)("hideGear", true)("hidePagerWhenSinglePage", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipeBind1"](8, 10, ctx_r1.messagePrefix + ".table.id"));
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipeBind1"](11, 12, ctx_r1.messagePrefix + ".table.name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipeBind1"](14, 14, ctx_r1.messagePrefix + ".table.collectionOrCommunity"));
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngForOf", (tmp_11_0 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipeBind1"](17, 16, ctx_r1.groups$)) == null ? null : tmp_11_0.payload == null ? null : tmp_11_0.payload.page);
  }
}
function EPersonFormComponent_div_21_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "div", 33)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](4, "div")(5, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipeBind1"](3, 3, ctx_r1.messagePrefix + ".memberOfNoGroups"));
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpureFunction1"](7, _c0, ctx_r1.groupsDataService.getGroupRegistryRouterLink()));
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipeBind1"](7, 5, ctx_r1.messagePrefix + ".goToGroups"));
  }
}
function EPersonFormComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "div")(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](4, EPersonFormComponent_div_21_ds_loading_4_Template, 1, 1, "ds-loading", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipe"](6, "dsHasNoValue");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](7, EPersonFormComponent_div_21_ds_pagination_7_Template, 18, 18, "ds-pagination", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](9, EPersonFormComponent_div_21_div_9_Template, 8, 9, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipe"](10, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_6_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipeBind1"](3, 4, ctx_r1.messagePrefix + ".groupsEPersonIsMemberOf"));
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipeBind1"](6, 8, _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipeBind1"](5, 6, ctx_r1.groups$)));
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ((tmp_5_0 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipeBind1"](8, 10, ctx_r1.groups$)) == null ? null : tmp_5_0.payload == null ? null : tmp_5_0.payload.totalElements) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ((tmp_6_0 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipeBind1"](10, 12, ctx_r1.groups$)) == null ? null : tmp_6_0.payload == null ? null : tmp_6_0.payload.totalElements) === 0);
  }
}
/**
 * A form used for creating and editing EPeople
 */
class EPersonFormComponent {
  constructor(changeDetectorRef, epersonService, groupsDataService, formBuilderService, translateService, notificationsService, authService, authorizationService, modalService, paginationService, requestService, epersonRegistrationService, dsoNameService, route, router) {
    this.changeDetectorRef = changeDetectorRef;
    this.epersonService = epersonService;
    this.groupsDataService = groupsDataService;
    this.formBuilderService = formBuilderService;
    this.translateService = translateService;
    this.notificationsService = notificationsService;
    this.authService = authService;
    this.authorizationService = authorizationService;
    this.modalService = modalService;
    this.paginationService = paginationService;
    this.requestService = requestService;
    this.epersonRegistrationService = epersonRegistrationService;
    this.dsoNameService = dsoNameService;
    this.route = route;
    this.router = router;
    this.labelPrefix = 'admin.access-control.epeople.form.';
    /**
     * A unique id used for ds-form
     */
    this.formId = 'eperson-form';
    /**
     * The labelPrefix for all messages related to this form
     */
    this.messagePrefix = 'admin.access-control.epeople.form';
    /**
     * Layout used for structuring the form inputs
     */
    this.formLayout = {
      firstName: {
        grid: {
          host: 'row'
        }
      },
      lastName: {
        grid: {
          host: 'row'
        }
      },
      email: {
        grid: {
          host: 'row'
        }
      },
      canLogIn: {
        grid: {
          host: 'col col-sm-6 d-inline-block'
        }
      },
      requireCertificate: {
        grid: {
          host: 'col col-sm-6 d-inline-block'
        }
      }
    };
    /**
     * An EventEmitter that's fired whenever the form is being submitted
     */
    this.submitForm = new _angular_core__WEBPACK_IMPORTED_MODULE_25__.EventEmitter();
    /**
     * An EventEmitter that's fired whenever the form is cancelled
     */
    this.cancelForm = new _angular_core__WEBPACK_IMPORTED_MODULE_25__.EventEmitter();
    /**
     * List of subscriptions
     */
    this.subs = [];
    /**
     * Pagination config used to display the list of groups
     */
    this.config = Object.assign(new _shared_pagination_pagination_component_options_model__WEBPACK_IMPORTED_MODULE_20__.PaginationComponentOptions(), {
      id: 'gem',
      pageSize: 5,
      currentPage: 1
    });
    /**
     * Whether or not this EPerson is currently being impersonated
     */
    this.isImpersonated = false;
    /**
     * A boolean that indicate if to display EPersonForm's Rest password button
     */
    this.displayResetPassword = false;
    /**
     * A string that indicate the label of Submit button
     */
    this.submitLabel = 'form.create';
  }
  ngOnInit() {
    this.activeEPerson$ = this.epersonService.getActiveEPerson();
    this.subs.push(this.activeEPerson$.subscribe(eperson => {
      this.epersonInitial = eperson;
      if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_14__.hasValue)(eperson)) {
        this.isImpersonated = this.authService.isImpersonatingUser(eperson.id);
        this.displayResetPassword = true;
        this.submitLabel = 'form.submit';
      }
    }));
    this.initialisePage();
  }
  /**
   * This method will initialise the page
   */
  initialisePage() {
    if (this.route.snapshot.params.id) {
      this.subs.push(this.epersonService.findById(this.route.snapshot.params.id).subscribe(ePersonRD => {
        this.epersonService.editEPerson(ePersonRD.payload);
      }));
    }
    this.firstName = new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_26__.DynamicInputModel({
      id: 'firstName',
      label: this.translateService.instant(`${this.messagePrefix}.firstName`),
      name: 'firstName',
      validators: {
        required: null
      },
      required: true
    });
    this.lastName = new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_26__.DynamicInputModel({
      id: 'lastName',
      label: this.translateService.instant(`${this.messagePrefix}.lastName`),
      name: 'lastName',
      validators: {
        required: null
      },
      required: true
    });
    this.email = new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_26__.DynamicInputModel({
      id: 'email',
      label: this.translateService.instant(`${this.messagePrefix}.email`),
      name: 'email',
      validators: {
        required: null,
        pattern: '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'
      },
      required: true,
      errorMessages: {
        emailTaken: 'error.validation.emailTaken',
        pattern: 'error.validation.NotValidEmail'
      },
      hint: this.translateService.instant(`${this.messagePrefix}.emailHint`)
    });
    this.canLogIn = new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_26__.DynamicCheckboxModel({
      id: 'canLogIn',
      label: this.translateService.instant(`${this.messagePrefix}.canLogIn`),
      name: 'canLogIn',
      value: this.epersonInitial != null ? this.epersonInitial.canLogIn : true
    });
    this.requireCertificate = new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_26__.DynamicCheckboxModel({
      id: 'requireCertificate',
      label: this.translateService.instant(`${this.messagePrefix}.requireCertificate`),
      name: 'requireCertificate',
      value: this.epersonInitial != null ? this.epersonInitial.requireCertificate : false
    });
    this.formModel = [this.firstName, this.lastName, this.email, this.canLogIn, this.requireCertificate];
    this.formGroup = this.formBuilderService.createFormGroup(this.formModel);
    this.subs.push(this.activeEPerson$.subscribe(eperson => {
      if (eperson != null) {
        this.groups$ = this.groupsDataService.findListByHref(eperson._links.groups.href, {
          currentPage: 1,
          elementsPerPage: this.config.pageSize
        }, undefined, undefined, (0,_shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_21__.followLink)('object'));
      }
      this.formGroup.patchValue({
        firstName: eperson != null ? eperson.firstMetadataValue('eperson.firstname') : '',
        lastName: eperson != null ? eperson.firstMetadataValue('eperson.lastname') : '',
        email: eperson != null ? eperson.email : '',
        canLogIn: eperson != null ? eperson.canLogIn : true,
        requireCertificate: eperson != null ? eperson.requireCertificate : false
      });
      if (eperson === null && !!this.formGroup.controls.email) {
        this.formGroup.controls.email.setAsyncValidators(_validators_email_taken_validator__WEBPACK_IMPORTED_MODULE_24__.ValidateEmailNotTaken.createValidator(this.epersonService));
        this.emailValueChangeSubscribe = this.email.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_27__.debounceTime)(300)).subscribe(() => {
          this.changeDetectorRef.detectChanges();
        });
      }
    }));
    this.groups$ = this.activeEPerson$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_28__.switchMap)(eperson => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_29__.combineLatest)([(0,rxjs__WEBPACK_IMPORTED_MODULE_30__.of)(eperson), this.paginationService.getFindListOptions(this.config.id, {
        currentPage: 1,
        elementsPerPage: this.config.pageSize
      })]);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_28__.switchMap)(([eperson, findListOptions]) => {
      if (eperson != null) {
        return this.groupsDataService.findListByHref(eperson._links.groups.href, findListOptions, true, true, (0,_shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_21__.followLink)('object'));
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_30__.of)(undefined);
    }));
    this.groupsPageInfoState$ = this.groups$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_31__.map)(groupsRD => groupsRD.payload.pageInfo));
    this.canImpersonate$ = this.activeEPerson$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_28__.switchMap)(eperson => {
      if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_14__.hasValue)(eperson)) {
        return this.authorizationService.isAuthorized(_core_data_feature_authorization_feature_id__WEBPACK_IMPORTED_MODULE_4__.FeatureID.LoginOnBehalfOf, eperson.self);
      } else {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_30__.of)(false);
      }
    }));
    this.canDelete$ = this.activeEPerson$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_28__.switchMap)(eperson => this.authorizationService.isAuthorized(_core_data_feature_authorization_feature_id__WEBPACK_IMPORTED_MODULE_4__.FeatureID.CanDelete, (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_14__.hasValue)(eperson) ? eperson.self : undefined)));
    this.canReset$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_30__.of)(true);
  }
  /**
   * Stop editing the currently selected eperson
   */
  onCancel() {
    this.epersonService.cancelEditEPerson();
    this.cancelForm.emit();
    void this.router.navigate([(0,_access_control_routing_paths__WEBPACK_IMPORTED_MODULE_23__.getEPersonsRoute)()]);
  }
  /**
   * Submit the form
   * When the eperson has an id attached -> Edit the eperson
   * When the eperson has no id attached -> Create new eperson
   * Emit the updated/created eperson using the EventEmitter submitForm
   */
  onSubmit() {
    this.activeEPerson$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_32__.take)(1)).subscribe(ePerson => {
      const values = {
        metadata: {
          'eperson.firstname': [{
            value: this.firstName.value
          }],
          'eperson.lastname': [{
            value: this.lastName.value
          }]
        },
        email: this.email.value,
        canLogIn: this.canLogIn.value,
        requireCertificate: this.requireCertificate.value
      };
      if (ePerson == null) {
        this.createNewEPerson(values);
      } else {
        this.editEPerson(ePerson, values);
      }
    });
  }
  /**
   * Creates new EPerson based on given values from form
   * @param values
   */
  createNewEPerson(values) {
    const ePersonToCreate = Object.assign(new _core_eperson_models_eperson_model__WEBPACK_IMPORTED_MODULE_8__.EPerson(), values);
    const response = this.epersonService.create(ePersonToCreate);
    response.pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_10__.getFirstCompletedRemoteData)()).subscribe(rd => {
      if (rd.hasSucceeded) {
        this.notificationsService.success(this.translateService.get(this.labelPrefix + 'notification.created.success', {
          name: this.dsoNameService.getName(ePersonToCreate)
        }));
        this.submitForm.emit(ePersonToCreate);
        this.epersonService.clearEPersonRequests();
        void this.router.navigateByUrl((0,_access_control_routing_paths__WEBPACK_IMPORTED_MODULE_23__.getEPersonsRoute)());
      } else {
        this.notificationsService.error(this.translateService.get(this.labelPrefix + 'notification.created.failure', {
          name: this.dsoNameService.getName(ePersonToCreate)
        }));
        this.cancelForm.emit();
      }
    });
    this.showNotificationIfEmailInUse(ePersonToCreate, 'created');
  }
  /**
   * Edits existing EPerson based on given values from form and old EPerson
   * @param ePerson   ePerson to edit
   * @param values    new ePerson values (of form)
   */
  editEPerson(ePerson, values) {
    const editedEperson = Object.assign(new _core_eperson_models_eperson_model__WEBPACK_IMPORTED_MODULE_8__.EPerson(), {
      id: ePerson.id,
      metadata: {
        'eperson.firstname': [{
          value: this.firstName.value ? this.firstName.value : ePerson.firstMetadataValue('eperson.firstname')
        }],
        'eperson.lastname': [{
          value: this.lastName.value ? this.lastName.value : ePerson.firstMetadataValue('eperson.lastname')
        }]
      },
      email: (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_14__.hasValue)(values.email) ? values.email : ePerson.email,
      canLogIn: (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_14__.hasValue)(values.canLogIn) ? values.canLogIn : ePerson.canLogIn,
      requireCertificate: (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_14__.hasValue)(values.requireCertificate) ? values.requireCertificate : ePerson.requireCertificate,
      _links: ePerson._links
    });
    const response = this.epersonService.updateEPerson(editedEperson);
    response.pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_10__.getFirstCompletedRemoteData)()).subscribe(rd => {
      if (rd.hasSucceeded) {
        this.notificationsService.success(this.translateService.get(this.labelPrefix + 'notification.edited.success', {
          name: this.dsoNameService.getName(editedEperson)
        }));
        this.submitForm.emit(editedEperson);
        void this.router.navigateByUrl((0,_access_control_routing_paths__WEBPACK_IMPORTED_MODULE_23__.getEPersonsRoute)());
      } else {
        this.notificationsService.error(this.translateService.get(this.labelPrefix + 'notification.edited.failure', {
          name: this.dsoNameService.getName(editedEperson)
        }));
        this.cancelForm.emit();
      }
    });
    if (values.email != null && values.email !== ePerson.email) {
      this.showNotificationIfEmailInUse(editedEperson, 'edited');
    }
  }
  /**
   * Event triggered when the user changes page
   * @param event
   */
  onPageChange(event) {
    this.updateGroups({
      currentPage: event,
      elementsPerPage: this.config.pageSize
    });
  }
  /**
   * Start impersonating the EPerson
   */
  impersonate() {
    this.authService.impersonate(this.epersonInitial.id);
    this.isImpersonated = true;
  }
  /**
   * Deletes the EPerson from the Repository. The EPerson will be the only that this form is showing.
   * It'll either show a success or error message depending on whether the delete was successful or not.
   */
  delete() {
    this.activeEPerson$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_32__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_28__.switchMap)(eperson => {
      const modalRef = this.modalService.open(_shared_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_13__.ConfirmationModalComponent);
      modalRef.componentInstance.name = this.dsoNameService.getName(eperson);
      modalRef.componentInstance.headerLabel = 'confirmation-modal.delete-eperson.header';
      modalRef.componentInstance.infoLabel = 'confirmation-modal.delete-eperson.info';
      modalRef.componentInstance.cancelLabel = 'confirmation-modal.delete-eperson.cancel';
      modalRef.componentInstance.confirmLabel = 'confirmation-modal.delete-eperson.confirm';
      modalRef.componentInstance.brandColor = 'danger';
      modalRef.componentInstance.confirmIcon = 'fas fa-trash';
      return modalRef.componentInstance.response.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_32__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_28__.switchMap)(confirm => {
        if (confirm && (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_14__.hasValue)(eperson.id)) {
          this.canDelete$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_30__.of)(false);
          return this.epersonService.deleteEPerson(eperson).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_10__.getFirstCompletedRemoteData)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_31__.map)(restResponse => ({
            restResponse,
            eperson
          })));
        } else {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_30__.of)(null);
        }
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_33__.finalize)(() => this.canDelete$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_30__.of)(true)));
    })).subscribe(({
      restResponse,
      eperson
    }) => {
      if (restResponse?.hasSucceeded) {
        this.notificationsService.success(this.translateService.get(this.labelPrefix + 'notification.deleted.success', {
          name: this.dsoNameService.getName(eperson)
        }));
        void this.router.navigate([(0,_access_control_routing_paths__WEBPACK_IMPORTED_MODULE_23__.getEPersonsRoute)()]);
      } else {
        this.notificationsService.error(`Error occurred when trying to delete EPerson with id: ${eperson?.id} with code: ${restResponse?.statusCode} and message: ${restResponse?.errorMessage}`);
      }
      this.cancelForm.emit();
    });
  }
  /**
   * Stop impersonating the EPerson
   */
  stopImpersonating() {
    this.authService.stopImpersonatingAndRefresh();
    this.isImpersonated = false;
  }
  /**
   * Sends an email to current eperson address with the information
   * to reset password
   */
  resetPassword() {
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_14__.hasValue)(this.epersonInitial.email)) {
      this.epersonRegistrationService.registerEmail(this.epersonInitial.email, null, _register_email_form_register_email_form_component__WEBPACK_IMPORTED_MODULE_11__.TYPE_REQUEST_FORGOT).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_10__.getFirstCompletedRemoteData)()).subscribe(response => {
        if (response.hasSucceeded) {
          this.notificationsService.success(this.translateService.get('admin.access-control.epeople.actions.reset'), this.translateService.get('forgot-email.form.success.content', {
            email: this.epersonInitial.email
          }));
        } else {
          this.notificationsService.error(this.translateService.get('forgot-email.form.error.head'), this.translateService.get('forgot-email.form.error.content', {
            email: this.epersonInitial.email
          }));
        }
      });
    }
  }
  /**
   * Cancel the current edit when component is destroyed & unsub all subscriptions
   */
  ngOnDestroy() {
    this.subs.filter(sub => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_14__.hasValue)(sub)).forEach(sub => sub.unsubscribe());
    this.paginationService.clearPagination(this.config.id);
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_14__.hasValue)(this.emailValueChangeSubscribe)) {
      this.emailValueChangeSubscribe.unsubscribe();
    }
  }
  /**
   * Checks for the given ePerson if there is already an ePerson in the system with that email
   * and shows notification if this is the case
   * @param ePerson               ePerson values to check
   * @param notificationSection   whether in create or edit
   */
  showNotificationIfEmailInUse(ePerson, notificationSection) {
    // Relevant message for email in use
    this.subs.push(this.epersonService.searchByScope('email', ePerson.email, {
      currentPage: 1,
      elementsPerPage: 0
    }).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_10__.getFirstSucceededRemoteData)(), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_10__.getRemoteDataPayload)()).subscribe(list => {
      if (list.totalElements > 0) {
        this.notificationsService.error(this.translateService.get(this.labelPrefix + 'notification.' + notificationSection + '.failure.emailInUse', {
          name: this.dsoNameService.getName(ePerson),
          email: ePerson.email
        }));
      }
    }));
  }
  /**
   * Update the list of groups by fetching it from the rest api or cache
   */
  updateGroups(options) {
    this.subs.push(this.activeEPerson$.subscribe(eperson => {
      this.groups$ = this.groupsDataService.findListByHref(eperson._links.groups.href, options);
    }));
  }
  static {
    this.ɵfac = function EPersonFormComponent_Factory(t) {
      return new (t || EPersonFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_25__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](_core_eperson_eperson_data_service__WEBPACK_IMPORTED_MODULE_6__.EPersonDataService), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](_core_eperson_group_data_service__WEBPACK_IMPORTED_MODULE_7__.GroupDataService), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](_shared_form_builder_form_builder_service__WEBPACK_IMPORTED_MODULE_15__.FormBuilderService), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_34__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](_shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_18__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](_core_data_feature_authorization_authorization_data_service__WEBPACK_IMPORTED_MODULE_3__.AuthorizationDataService), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_35__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](_core_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_9__.PaginationService), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](_core_data_request_service__WEBPACK_IMPORTED_MODULE_5__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](_core_data_eperson_registration_service__WEBPACK_IMPORTED_MODULE_2__.EpersonRegistrationService), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](_core_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_1__.DSONameService), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_36__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_36__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdefineComponent"]({
      type: EPersonFormComponent,
      selectors: [["ds-eperson-form"]],
      outputs: {
        submitForm: "submitForm",
        cancelForm: "cancelForm"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵStandaloneFeature"]],
      decls: 23,
      vars: 25,
      consts: [["createHeader", ""], ["editHeader", ""], [1, "container"], [1, "group-form", "row"], [1, "col-12"], [4, "ngIf", "ngIfThen", "ngIfElse"], [3, "submitForm", "formId", "formModel", "formGroup", "formLayout", "displayCancel", "submitLabel"], ["before", "", 1, "btn-group"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], [1, "fas", "fa-arrow-left"], ["between", "", "class", "btn-group", 4, "ngIf"], ["after", "", "class", "btn btn-danger delete-button", "type", "button", 3, "click", 4, "ngIf"], [3, "showMessage", 4, "ngIf"], [4, "ngIf"], [1, "border-bottom", "pb-2"], ["between", "", 1, "btn-group"], ["type", "button", 1, "btn", "btn-primary", 3, "click", "dsBtnDisabled"], [1, "fa", "fa-key"], ["class", "btn btn-primary", "type", "button", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "fa", "fa-user-secret"], ["after", "", "type", "button", 1, "btn", "btn-danger", "delete-button", 3, "click"], [1, "fas", "fa-trash"], [3, "showMessage"], [3, "paginationOptions", "collectionSize", "hideGear", "hidePagerWhenSinglePage", "pageChange", 4, "ngIf"], ["class", "alert alert-info w-100 mb-2", "role", "alert", 4, "ngIf"], [3, "pageChange", "paginationOptions", "collectionSize", "hideGear", "hidePagerWhenSinglePage"], [1, "table-responsive"], ["id", "groups", 1, "table", "table-striped", "table-hover", "table-bordered"], ["scope", "col", 1, "align-middle"], [4, "ngFor", "ngForOf"], [1, "align-middle"], [3, "click", "routerLink"], ["role", "alert", 1, "alert", "alert-info", "w-100", "mb-2"], [1, "btn", "btn-primary", 3, "routerLink"]],
      template: function EPersonFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](3, EPersonFormComponent_div_3_Template, 1, 0, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipe"](4, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](5, EPersonFormComponent_ng_template_5_Template, 3, 3, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplateRefExtractor"])(7, EPersonFormComponent_ng_template_7_Template, 3, 3, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](9, "ds-form", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵlistener"]("submitForm", function EPersonFormComponent_Template_ds_form_submitForm_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵresetView"](ctx.onSubmit());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](10, "div", 7)(11, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵlistener"]("click", function EPersonFormComponent_Template_button_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵresetView"](ctx.onCancel());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](12, "i", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipe"](14, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](15, EPersonFormComponent_div_15_Template, 6, 6, "div", 10)(16, EPersonFormComponent_div_16_Template, 3, 2, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipe"](17, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](18, EPersonFormComponent_button_18_Template, 4, 3, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipe"](19, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](20, EPersonFormComponent_ds_loading_20_Template, 1, 1, "ds-loading", 12)(21, EPersonFormComponent_div_21_Template, 11, 14, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipe"](22, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          const createHeader_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵreference"](6);
          const editHeader_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵreference"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipeBind1"](4, 15, ctx.activeEPerson$))("ngIfThen", editHeader_r11)("ngIfElse", createHeader_r10);
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("formId", ctx.formId)("formModel", ctx.formModel)("formGroup", ctx.formGroup)("formLayout", ctx.formLayout)("displayCancel", false)("submitLabel", ctx.submitLabel);
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipeBind1"](14, 17, ctx.messagePrefix + ".return"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ctx.displayResetPassword);
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipeBind1"](17, 19, ctx.canImpersonate$));
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipeBind1"](19, 21, ctx.canDelete$));
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", !ctx.formGroup);
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipeBind1"](22, 23, ctx.activeEPerson$));
        }
      },
      dependencies: [_shared_form_form_component__WEBPACK_IMPORTED_MODULE_16__.FormComponent, _angular_common__WEBPACK_IMPORTED_MODULE_37__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_37__.NgFor, _angular_common__WEBPACK_IMPORTED_MODULE_37__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_34__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_34__.TranslatePipe, _shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_17__.ThemedLoadingComponent, _shared_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_19__.PaginationComponent, _angular_router__WEBPACK_IMPORTED_MODULE_36__.RouterLink, _shared_utils_has_no_value_pipe__WEBPACK_IMPORTED_MODULE_22__.HasNoValuePipe, _shared_btn_disabled_directive__WEBPACK_IMPORTED_MODULE_12__.BtnDisabledDirective],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 40224:
/*!**************************************************************************************************!*\
  !*** ./src/app/access-control/epeople-registry/eperson-form/validators/email-taken.validator.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ValidateEmailNotTaken: () => (/* binding */ ValidateEmailNotTaken)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/shared/operators */ 55757);


class ValidateEmailNotTaken {
  /**
   * This method will create the validator with the ePersonDataService requested from component
   * @param ePersonDataService the service with DI in the component that this validator is being utilized.
   */
  static createValidator(ePersonDataService) {
    return control => {
      return ePersonDataService.getEPersonByEmail(control.value).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_0__.getFirstSucceededRemoteData)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
        return res.payload ? {
          emailTaken: true
        } : null;
      }));
    };
  }
}

/***/ }),

/***/ 18066:
/*!*****************************************************************************!*\
  !*** ./src/app/access-control/epeople-registry/eperson-resolver.service.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EPERSON_EDIT_FOLLOW_LINKS: () => (/* binding */ EPERSON_EDIT_FOLLOW_LINKS),
/* harmony export */   EPersonResolver: () => (/* binding */ EPersonResolver)
/* harmony export */ });
/* harmony import */ var _core_eperson_eperson_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/eperson/eperson-data.service */ 74449);
/* harmony import */ var _core_resolving_resolver_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/resolving/resolver.actions */ 81225);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/shared/operators */ 55757);
/* harmony import */ var _shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/utils/follow-link-config.model */ 67600);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 99797);








const EPERSON_EDIT_FOLLOW_LINKS = [(0,_shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_3__.followLink)('groups')];
/**
 * This class represents a resolver that requests a specific {@link EPerson} before the route is activated
 */
class EPersonResolver {
  constructor(ePersonService, store) {
    this.ePersonService = ePersonService;
    this.store = store;
  }
  /**
   * Method for resolving a {@link EPerson} based on the parameters in the current route
   * @param {ActivatedRouteSnapshot} route The current ActivatedRouteSnapshot
   * @param {RouterStateSnapshot} state The current RouterStateSnapshot
   * @returns `Observable<<RemoteData<EPerson>>` Emits the found {@link EPerson} based on the parameters in the current
   * route, or an error if something went wrong
   */
  resolve(route, state) {
    const ePersonRD$ = this.ePersonService.findById(route.params.id, true, false, ...EPERSON_EDIT_FOLLOW_LINKS).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_2__.getFirstCompletedRemoteData)());
    ePersonRD$.subscribe(ePersonRD => {
      this.store.dispatch(new _core_resolving_resolver_actions__WEBPACK_IMPORTED_MODULE_1__.ResolvedAction(state.url, ePersonRD.payload));
    });
    return ePersonRD$;
  }
  static {
    this.ɵfac = function EPersonResolver_Factory(t) {
      return new (t || EPersonResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_core_eperson_eperson_data_service__WEBPACK_IMPORTED_MODULE_0__.EPersonDataService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: EPersonResolver,
      factory: EPersonResolver.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 7511:
/*!**********************************************************************************!*\
  !*** ./src/app/access-control/group-registry/group-form/group-form.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GroupFormComponent: () => (/* binding */ GroupFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @ng-dynamic-forms/core */ 94403);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! rxjs */ 27639);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! rxjs/operators */ 84975);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! rxjs/operators */ 47943);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! rxjs/operators */ 78374);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 88280);
/* harmony import */ var _collection_page_collection_page_routing_paths__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../collection-page/collection-page-routing-paths */ 64611);
/* harmony import */ var _community_page_community_page_routing_paths__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../community-page/community-page-routing-paths */ 54671);
/* harmony import */ var _core_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/breadcrumbs/dso-name.service */ 96526);
/* harmony import */ var _core_data_dspace_object_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/data/dspace-object-data.service */ 13989);
/* harmony import */ var _core_data_feature_authorization_authorization_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/data/feature-authorization/authorization-data.service */ 3675);
/* harmony import */ var _core_data_feature_authorization_feature_id__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/data/feature-authorization/feature-id */ 3970);
/* harmony import */ var _core_data_request_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/data/request.service */ 32473);
/* harmony import */ var _core_eperson_group_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/eperson/group-data.service */ 44494);
/* harmony import */ var _core_eperson_models_group_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/eperson/models/group.model */ 31924);
/* harmony import */ var _core_shared_collection_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../core/shared/collection.model */ 6041);
/* harmony import */ var _core_shared_community_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../core/shared/community.model */ 10046);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../core/shared/operators */ 55757);
/* harmony import */ var _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/alert/alert.component */ 16292);
/* harmony import */ var _shared_alert_alert_type__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/alert/alert-type */ 47978);
/* harmony import */ var _shared_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shared/confirmation-modal/confirmation-modal.component */ 9284);
/* harmony import */ var _shared_context_help_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../shared/context-help.directive */ 3194);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../shared/empty.util */ 82777);
/* harmony import */ var _shared_form_builder_form_builder_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../shared/form/builder/form-builder.service */ 1216);
/* harmony import */ var _shared_form_form_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../shared/form/form.component */ 99386);
/* harmony import */ var _shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../shared/notifications/notifications.service */ 69472);
/* harmony import */ var _shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../shared/utils/follow-link-config.model */ 67600);
/* harmony import */ var _access_control_routing_paths__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../access-control-routing-paths */ 25093);
/* harmony import */ var _members_list_members_list_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./members-list/members-list.component */ 72796);
/* harmony import */ var _subgroup_list_subgroups_list_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./subgroup-list/subgroups-list.component */ 80931);
/* harmony import */ var _validators_group_exists_validator__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./validators/group-exists.validator */ 68478);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 49966);













































const _c0 = () => ["right", "bottom"];
const _c1 = a0 => ({
  content: "admin.access-control.groups.form.tooltip.editGroupPage",
  id: "edit-group-page",
  iconPlacement: "right",
  tooltipPlacement: a0
});
const _c2 = (a0, a1, a2) => ({
  name: a0,
  comcol: a1,
  comcolEditRolesRoute: a2
});
function GroupFormComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](0, "div");
  }
}
function GroupFormComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "h1", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipeBind1"](2, 1, ctx_r1.messagePrefix + ".head.create"));
  }
}
function GroupFormComponent_ng_template_7_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipeBind1"](2, 1, ctx_r1.messagePrefix + ".head.edit"), " ");
  }
}
function GroupFormComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "h1", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](1, GroupFormComponent_ng_template_7_span_1_Template, 3, 3, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("dsContextHelp", _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpureFunction1"](2, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpureFunction0"](1, _c0)));
  }
}
function GroupFormComponent_ng_container_9_ds_alert_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](0, "ds-alert", 15);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("type", ctx_r1.AlertType.Warning)("content", ctx_r1.messagePrefix + ".alert.permanent");
  }
}
function GroupFormComponent_ng_container_9_ng_container_2_ds_alert_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](0, "ds-alert", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipe"](2, "translate");
  }
  if (rf & 2) {
    const activeGroupLinkedDSO_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]().ngIf;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("type", ctx_r1.AlertType.Warning)("content", _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipeBind2"](2, 4, ctx_r1.messagePrefix + ".alert.workflowGroup", _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpureFunction3"](7, _c2, ctx_r1.dsoNameService.getName(activeGroupLinkedDSO_r3), activeGroupLinkedDSO_r3.type, _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipeBind1"](1, 2, ctx_r1.linkedEditRolesRoute$))));
  }
}
function GroupFormComponent_ng_container_9_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](1, GroupFormComponent_ng_container_9_ng_container_2_ds_alert_1_Template, 3, 11, "ds-alert", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipeBind1"](2, 1, ctx_r1.canEdit$) !== true);
  }
}
function GroupFormComponent_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](1, GroupFormComponent_ng_container_9_ds_alert_1_Template, 1, 2, "ds-alert", 14)(2, GroupFormComponent_ng_container_9_ng_container_2_Template, 3, 3, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const groupBeingEdited_r4 = ctx.ngIf;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", groupBeingEdited_r4 == null ? null : groupBeingEdited_r4.permanent);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipeBind1"](3, 2, ctx_r1.activeGroupLinkedDSO$));
  }
}
function GroupFormComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 16)(1, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function GroupFormComponent_div_17_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx_r1.delete());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](2, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipeBind1"](4, 1, ctx_r1.messagePrefix + ".actions.delete"), " ");
  }
}
function GroupFormComponent_ng_container_20_ds_members_list_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](0, "ds-members-list", 21);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("messagePrefix", ctx_r1.messagePrefix + ".members-list");
  }
}
function GroupFormComponent_ng_container_20_ds_subgroups_list_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](0, "ds-subgroups-list", 21);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("messagePrefix", ctx_r1.messagePrefix + ".subgroups-list");
  }
}
function GroupFormComponent_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](2, GroupFormComponent_ng_container_20_ds_members_list_2_Template, 1, 1, "ds-members-list", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](3, GroupFormComponent_ng_container_20_ds_subgroups_list_3_Template, 1, 1, "ds-subgroups-list", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const groupBeingEdited_r6 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", groupBeingEdited_r6 !== undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", groupBeingEdited_r6 !== undefined);
  }
}
/**
 * A form used for creating and editing groups
 */
class GroupFormComponent {
  constructor(groupDataService, dSpaceObjectDataService, formBuilderService, translateService, notificationsService, route, router, authorizationService, modalService, requestService, changeDetectorRef, dsoNameService) {
    this.groupDataService = groupDataService;
    this.dSpaceObjectDataService = dSpaceObjectDataService;
    this.formBuilderService = formBuilderService;
    this.translateService = translateService;
    this.notificationsService = notificationsService;
    this.route = route;
    this.router = router;
    this.authorizationService = authorizationService;
    this.modalService = modalService;
    this.requestService = requestService;
    this.changeDetectorRef = changeDetectorRef;
    this.dsoNameService = dsoNameService;
    this.messagePrefix = 'admin.access-control.groups.form';
    /**
     * A unique id used for ds-form
     */
    this.formId = 'group-form';
    /**
     * Layout used for structuring the form inputs
     */
    this.formLayout = {
      groupName: {
        grid: {
          host: 'row'
        }
      },
      groupDescription: {
        grid: {
          host: 'row'
        }
      }
    };
    /**
     * An EventEmitter that's fired whenever the form is being submitted
     */
    this.submitForm = new _angular_core__WEBPACK_IMPORTED_MODULE_26__.EventEmitter();
    /**
     * An EventEmitter that's fired whenever the form is cancelled
     */
    this.cancelForm = new _angular_core__WEBPACK_IMPORTED_MODULE_26__.EventEmitter();
    /**
     * List of subscriptions
     */
    this.subs = [];
    /**
     * The AlertType enumeration
     */
    this.AlertType = _shared_alert_alert_type__WEBPACK_IMPORTED_MODULE_14__.AlertType;
  }
  ngOnInit() {
    if (this.route.snapshot.params.groupId !== 'newGroup') {
      this.setActiveGroup(this.route.snapshot.params.groupId);
    }
    this.activeGroup$ = this.groupDataService.getActiveGroup();
    this.activeGroupLinkedDSO$ = this.getActiveGroupLinkedDSO();
    this.linkedEditRolesRoute$ = this.getLinkedEditRolesRoute();
    this.canEdit$ = this.activeGroupLinkedDSO$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_27__.switchMap)(dso => {
      if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_17__.hasValue)(dso)) {
        return [false];
      } else {
        return this.activeGroup$.pipe((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_17__.hasValueOperator)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_27__.switchMap)(group => this.authorizationService.isAuthorized(_core_data_feature_authorization_feature_id__WEBPACK_IMPORTED_MODULE_6__.FeatureID.CanDelete, group.self)));
      }
    }));
    this.initialisePage();
  }
  initialisePage() {
    const groupNameModel = new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_28__.DynamicInputModel({
      id: 'groupName',
      label: this.translateService.instant(`${this.messagePrefix}.groupName`),
      name: 'groupName',
      validators: {
        required: null
      },
      required: true
    });
    const groupCommunityModel = new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_28__.DynamicInputModel({
      id: 'groupCommunity',
      label: this.translateService.instant(`${this.messagePrefix}.groupCommunity`),
      name: 'groupCommunity',
      required: false,
      readOnly: true
    });
    const groupDescriptionModel = new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_28__.DynamicTextAreaModel({
      id: 'groupDescription',
      label: this.translateService.instant(`${this.messagePrefix}.groupDescription`),
      name: 'groupDescription',
      required: false,
      spellCheck: _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.form.spellCheck
    });
    this.formModel = [groupNameModel, groupDescriptionModel];
    this.formGroup = this.formBuilderService.createFormGroup(this.formModel);
    this.groupName = this.formGroup.get('groupName');
    this.groupDescription = this.formGroup.get('groupDescription');
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_17__.hasValue)(this.groupName)) {
      this.groupName.setAsyncValidators(_validators_group_exists_validator__WEBPACK_IMPORTED_MODULE_25__.ValidateGroupExists.createValidator(this.groupDataService));
      this.groupNameValueChangeSubscribe = this.groupName.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_29__.debounceTime)(300)).subscribe(() => {
        this.changeDetectorRef.detectChanges();
      });
    }
    this.subs.push((0,rxjs__WEBPACK_IMPORTED_MODULE_30__.combineLatest)([this.activeGroup$, this.canEdit$, this.activeGroupLinkedDSO$]).subscribe(([activeGroup, canEdit, linkedObject]) => {
      if (activeGroup != null) {
        // Disable group name exists validator
        this.formGroup.controls.groupName.clearAsyncValidators();
        if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_17__.isNotEmpty)(linkedObject?.name)) {
          if (!this.formGroup.controls.groupCommunity) {
            this.formBuilderService.insertFormGroupControl(1, this.formGroup, this.formModel, groupCommunityModel);
            this.groupDescription = this.formGroup.get('groupCommunity');
          }
          this.formGroup.patchValue({
            groupName: activeGroup.name,
            groupCommunity: linkedObject?.name ?? '',
            groupDescription: activeGroup.firstMetadataValue('dc.description')
          });
        } else {
          this.formModel = [groupNameModel, groupDescriptionModel];
          this.formGroup.patchValue({
            groupName: activeGroup.name,
            groupDescription: activeGroup.firstMetadataValue('dc.description')
          });
        }
        if (!canEdit || activeGroup.permanent) {
          this.formGroup.disable();
        } else {
          this.formGroup.enable();
        }
      }
    }));
  }
  /**
   * Stop editing the currently selected group
   */
  onCancel() {
    this.groupDataService.cancelEditGroup();
    this.cancelForm.emit();
    void this.router.navigate([(0,_access_control_routing_paths__WEBPACK_IMPORTED_MODULE_22__.getGroupsRoute)()]);
  }
  /**
   * Submit the form
   * When the eperson has an id attached -> Edit the eperson
   * When the eperson has no id attached -> Create new eperson
   * Emit the updated/created eperson using the EventEmitter submitForm
   */
  onSubmit() {
    this.activeGroup$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_31__.take)(1)).subscribe(group => {
      if (group === null) {
        this.createNewGroup({
          name: this.groupName.value,
          metadata: {
            'dc.description': [{
              value: this.groupDescription.value
            }]
          }
        });
      } else {
        this.editGroup(group);
      }
    });
  }
  /**
   * Creates new Group based on given values from form
   * @param values
   */
  createNewGroup(values) {
    const groupToCreate = Object.assign(new _core_eperson_models_group_model__WEBPACK_IMPORTED_MODULE_9__.Group(), values);
    this.groupDataService.create(groupToCreate).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_12__.getFirstCompletedRemoteData)()).subscribe(rd => {
      if (rd.hasSucceeded) {
        this.notificationsService.success(this.translateService.get(this.messagePrefix + '.notification.created.success', {
          name: groupToCreate.name
        }));
        this.submitForm.emit(groupToCreate);
        if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_17__.isNotEmpty)(rd.payload)) {
          const groupSelfLink = rd.payload._links.self.href;
          this.setActiveGroupWithLink(groupSelfLink);
          this.groupDataService.clearGroupsRequests();
          void this.router.navigateByUrl((0,_access_control_routing_paths__WEBPACK_IMPORTED_MODULE_22__.getGroupEditRoute)(rd.payload.uuid));
        }
      } else {
        this.notificationsService.error(this.translateService.get(this.messagePrefix + '.notification.created.failure', {
          name: groupToCreate.name
        }));
        this.showNotificationIfNameInUse(groupToCreate, 'created');
        this.cancelForm.emit();
      }
    });
  }
  /**
   * Checks for the given group if there is already a group in the system with that group name and shows error if that
   * is the case
   * @param group                 group to check
   * @param notificationSection   whether in create or edit
   */
  showNotificationIfNameInUse(group, notificationSection) {
    // Relevant message for group name in use
    this.subs.push(this.groupDataService.searchGroups(group.name, {
      currentPage: 1,
      elementsPerPage: 0
    }).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_12__.getFirstSucceededRemoteData)(), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_12__.getRemoteDataPayload)()).subscribe(list => {
      if (list.totalElements > 0) {
        this.notificationsService.error(this.translateService.get(this.messagePrefix + '.notification.' + notificationSection + '.failure.groupNameInUse', {
          name: this.dsoNameService.getName(group)
        }));
      }
    }));
  }
  /**
   * Edit existing Group based on given values from form and old Group
   * @param group   Group to edit and old values contained within
   */
  editGroup(group) {
    let operations = [];
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_17__.hasValue)(this.groupDescription.value)) {
      operations = [...operations, {
        op: 'add',
        path: '/metadata/dc.description',
        value: this.groupDescription.value
      }];
    }
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_17__.hasValue)(this.groupName.value)) {
      operations = [...operations, {
        op: 'replace',
        path: '/name',
        value: this.groupName.value
      }];
    }
    this.groupDataService.patch(group, operations).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_12__.getFirstCompletedRemoteData)()).subscribe(rd => {
      if (rd.hasSucceeded) {
        this.notificationsService.success(this.translateService.get(this.messagePrefix + '.notification.edited.success', {
          name: this.dsoNameService.getName(rd.payload)
        }));
        this.submitForm.emit(rd.payload);
      } else {
        this.notificationsService.error(this.translateService.get(this.messagePrefix + '.notification.edited.failure', {
          name: this.dsoNameService.getName(group)
        }));
        this.cancelForm.emit();
      }
    });
  }
  /**
   * Start editing the selected group
   * @param groupId   ID of group to set as active
   */
  setActiveGroup(groupId) {
    this.groupDataService.cancelEditGroup();
    this.groupDataService.findById(groupId).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_12__.getFirstSucceededRemoteData)(), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_12__.getRemoteDataPayload)()).subscribe(group => {
      this.groupDataService.editGroup(group);
    });
  }
  /**
   * Start editing the selected group
   * @param groupSelfLink   SelfLink of group to set as active
   */
  setActiveGroupWithLink(groupSelfLink) {
    this.activeGroup$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_31__.take)(1)).subscribe(activeGroup => {
      if (activeGroup === null) {
        this.groupDataService.cancelEditGroup();
        this.groupDataService.findByHref(groupSelfLink, false, false, (0,_shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_21__.followLink)('subgroups'), (0,_shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_21__.followLink)('epersons'), (0,_shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_21__.followLink)('object')).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_12__.getFirstSucceededRemoteData)(), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_12__.getRemoteDataPayload)()).subscribe(group => {
          this.groupDataService.editGroup(group);
        });
      }
    });
  }
  /**
   * Deletes the Group from the Repository. The Group will be the only that this form is showing.
   * It'll either show a success or error message depending on whether the delete was successful or not.
   */
  delete() {
    this.activeGroup$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_31__.take)(1)).subscribe(group => {
      const modalRef = this.modalService.open(_shared_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_15__.ConfirmationModalComponent);
      modalRef.componentInstance.name = this.dsoNameService.getName(group);
      modalRef.componentInstance.headerLabel = this.messagePrefix + '.delete-group.modal.header';
      modalRef.componentInstance.infoLabel = this.messagePrefix + '.delete-group.modal.info';
      modalRef.componentInstance.cancelLabel = this.messagePrefix + '.delete-group.modal.cancel';
      modalRef.componentInstance.confirmLabel = this.messagePrefix + '.delete-group.modal.confirm';
      modalRef.componentInstance.brandColor = 'danger';
      modalRef.componentInstance.confirmIcon = 'fas fa-trash';
      modalRef.componentInstance.response.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_31__.take)(1)).subscribe(confirm => {
        if (confirm) {
          if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_17__.hasValue)(group.id)) {
            this.groupDataService.delete(group.id).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_12__.getFirstCompletedRemoteData)()).subscribe(rd => {
              if (rd.hasSucceeded) {
                this.notificationsService.success(this.translateService.get(this.messagePrefix + '.notification.deleted.success', {
                  name: this.dsoNameService.getName(group)
                }));
                this.onCancel();
              } else {
                this.notificationsService.error(this.translateService.get(this.messagePrefix + '.notification.deleted.failure.title', {
                  name: this.dsoNameService.getName(group)
                }), this.translateService.get(this.messagePrefix + '.notification.deleted.failure.content', {
                  cause: rd.errorMessage
                }));
              }
            });
          }
        }
      });
    });
  }
  /**
   * Cancel the current edit when component is destroyed & unsub all subscriptions
   */
  ngOnDestroy() {
    this.groupDataService.cancelEditGroup();
    this.subs.filter(sub => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_17__.hasValue)(sub)).forEach(sub => sub.unsubscribe());
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_17__.hasValue)(this.groupNameValueChangeSubscribe)) {
      this.groupNameValueChangeSubscribe.unsubscribe();
    }
  }
  /**
   * Get the active {@link Group}'s linked object if it has one ({@link Community} or {@link Collection} linked to a
   * workflow group)
   */
  getActiveGroupLinkedDSO() {
    return this.activeGroup$.pipe((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_17__.hasValueOperator)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_27__.switchMap)(group => {
      if (group.object === undefined) {
        return this.dSpaceObjectDataService.findByHref(group._links.object.href);
      }
      return group.object;
    }), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_12__.getAllCompletedRemoteData)(), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_12__.getRemoteDataPayload)());
  }
  /**
   * Get the route to the edit roles tab of the active {@link Group}'s linked object (community or collection linked
   * to a workflow group) if it has one
   */
  getLinkedEditRolesRoute() {
    return this.activeGroupLinkedDSO$.pipe((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_17__.hasValueOperator)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_32__.map)(dso => {
      switch (dso.type) {
        case _core_shared_community_model__WEBPACK_IMPORTED_MODULE_11__.Community.type.value:
          return (0,_community_page_community_page_routing_paths__WEBPACK_IMPORTED_MODULE_2__.getCommunityEditRolesRoute)(dso.id);
        case _core_shared_collection_model__WEBPACK_IMPORTED_MODULE_10__.Collection.type.value:
          return (0,_collection_page_collection_page_routing_paths__WEBPACK_IMPORTED_MODULE_1__.getCollectionEditRolesRoute)(dso.id);
      }
    }));
  }
  static {
    this.ɵfac = function GroupFormComponent_Factory(t) {
      return new (t || GroupFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](_core_eperson_group_data_service__WEBPACK_IMPORTED_MODULE_8__.GroupDataService), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](_core_data_dspace_object_data_service__WEBPACK_IMPORTED_MODULE_4__.DSpaceObjectDataService), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](_shared_form_builder_form_builder_service__WEBPACK_IMPORTED_MODULE_18__.FormBuilderService), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_33__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](_shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_20__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_34__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_34__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](_core_data_feature_authorization_authorization_data_service__WEBPACK_IMPORTED_MODULE_5__.AuthorizationDataService), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_35__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](_core_data_request_service__WEBPACK_IMPORTED_MODULE_7__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_26__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](_core_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_3__.DSONameService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdefineComponent"]({
      type: GroupFormComponent,
      selectors: [["ds-group-form"]],
      hostBindings: function GroupFormComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("beforeunload", function GroupFormComponent_beforeunload_HostBindingHandler() {
            return ctx.ngOnDestroy();
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresolveWindow"]);
        }
      },
      outputs: {
        submitForm: "submitForm",
        cancelForm: "cancelForm"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵStandaloneFeature"]],
      decls: 22,
      vars: 24,
      consts: [["createHeader", ""], ["editHeader", ""], [1, "container"], [1, "group-form", "row"], [1, "col-12"], [4, "ngIf", "ngIfThen", "ngIfElse"], [4, "ngIf"], [3, "submitForm", "formId", "formModel", "formGroup", "formLayout", "displayCancel"], ["before", "", 1, "btn-group"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], [1, "fas", "fa-arrow-left"], ["after", "", "class", "btn-group", 4, "ngIf"], [1, "border-bottom", "pb-2"], [4, "dsContextHelp"], [3, "type", "content", 4, "ngIf"], [3, "type", "content"], ["after", "", 1, "btn-group"], ["type", "button", 1, "btn", "btn-danger", "delete-button", 3, "click"], [1, "fa", "fa-trash"], [1, "mb-5"], [3, "messagePrefix", 4, "ngIf"], [3, "messagePrefix"]],
      template: function GroupFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](3, GroupFormComponent_div_3_Template, 1, 0, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipe"](4, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](5, GroupFormComponent_ng_template_5_Template, 3, 3, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplateRefExtractor"])(7, GroupFormComponent_ng_template_7_Template, 2, 4, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplateRefExtractor"])(9, GroupFormComponent_ng_container_9_Template, 4, 4, "ng-container", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipe"](10, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](11, "ds-form", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("submitForm", function GroupFormComponent_Template_ds_form_submitForm_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx.onSubmit());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](12, "div", 8)(13, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function GroupFormComponent_Template_button_click_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresetView"](ctx.onCancel());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](14, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipe"](16, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](17, GroupFormComponent_div_17_Template, 5, 3, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipe"](18, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipe"](19, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](20, GroupFormComponent_ng_container_20_Template, 4, 2, "ng-container", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipe"](21, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          let tmp_12_0;
          const createHeader_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵreference"](6);
          const editHeader_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵreference"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipeBind1"](4, 12, ctx.activeGroup$))("ngIfThen", editHeader_r8)("ngIfElse", createHeader_r7);
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipeBind1"](10, 14, ctx.activeGroup$));
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("formId", ctx.formId)("formModel", ctx.formModel)("formGroup", ctx.formGroup)("formLayout", ctx.formLayout)("displayCancel", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipeBind1"](16, 16, ctx.messagePrefix + ".return"), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipeBind1"](18, 18, ctx.canEdit$) && !((tmp_12_0 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipeBind1"](19, 20, ctx.activeGroup$)) == null ? null : tmp_12_0.permanent));
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipeBind1"](21, 22, ctx.activeGroup$));
        }
      },
      dependencies: [_shared_form_form_component__WEBPACK_IMPORTED_MODULE_19__.FormComponent, _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_13__.AlertComponent, _angular_common__WEBPACK_IMPORTED_MODULE_36__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_36__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_33__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_33__.TranslatePipe, _shared_context_help_directive__WEBPACK_IMPORTED_MODULE_16__.ContextHelpDirective, _members_list_members_list_component__WEBPACK_IMPORTED_MODULE_23__.MembersListComponent, _subgroup_list_subgroups_list_component__WEBPACK_IMPORTED_MODULE_24__.SubgroupsListComponent],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 80931:
/*!****************************************************************************************************!*\
  !*** ./src/app/access-control/group-registry/group-form/subgroup-list/subgroups-list.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SubgroupsListComponent: () => (/* binding */ SubgroupsListComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 56106);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 83485);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 84975);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 78374);
/* harmony import */ var _core_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/breadcrumbs/dso-name.service */ 96526);
/* harmony import */ var _core_eperson_group_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/eperson/group-data.service */ 44494);
/* harmony import */ var _core_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/pagination/pagination.service */ 76896);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/shared/operators */ 55757);
/* harmony import */ var _shared_context_help_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/context-help.directive */ 3194);
/* harmony import */ var _shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/notifications/notifications.service */ 69472);
/* harmony import */ var _shared_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/pagination/pagination.component */ 40590);
/* harmony import */ var _shared_pagination_pagination_component_options_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/pagination/pagination-component-options.model */ 23401);
/* harmony import */ var _shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/utils/follow-link-config.model */ 67600);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 90310);























const _c0 = () => ["top", "right", "bottom"];
const _c1 = a0 => ({
  content: "admin.access-control.groups.form.tooltip.editGroup.addSubgroups",
  id: "edit-group-add-subgroups",
  iconPlacement: "right",
  tooltipPlacement: a0
});
const _c2 = a0 => [a0];
const _c3 = a0 => ({
  name: a0
});
function SubgroupsListComponent_ds_pagination_7_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr")(1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "td", 18)(4, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function SubgroupsListComponent_ds_pagination_7_tr_19_Template_a_click_4_listener() {
      const group_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.groupDataService.startEditingNewGroup(group_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "td", 18)(10, "div", 20)(11, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function SubgroupsListComponent_ds_pagination_7_tr_19_Template_button_click_11_listener() {
      const group_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.deleteSubgroupFromGroup(group_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](13, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    let tmp_6_0;
    const group_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](group_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](10, _c2, ctx_r2.groupDataService.getGroupEditPageRouterLink(group_r2)));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r2.dsoNameService.getName(group_r2), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r2.dsoNameService.getName((tmp_6_0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](8, 5, group_r2.object)) == null ? null : tmp_6_0.payload));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](12, 7, ctx_r2.messagePrefix + ".table.edit.buttons.remove", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](12, _c3, ctx_r2.dsoNameService.getName(group_r2))));
  }
}
function SubgroupsListComponent_ds_pagination_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ds-pagination", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 14)(3, "table", 15)(4, "thead")(5, "tr")(6, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](19, SubgroupsListComponent_ds_pagination_7_tr_19_Template, 14, 14, "tr", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](20, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_9_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("paginationOptions", ctx_r2.config)("collectionSize", (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](1, 9, ctx_r2.subGroups$)) == null ? null : tmp_2_0.payload == null ? null : tmp_2_0.payload.totalElements)("hideGear", true)("hidePagerWhenSinglePage", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](8, 11, ctx_r2.messagePrefix + ".table.id"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](11, 13, ctx_r2.messagePrefix + ".table.name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](14, 15, ctx_r2.messagePrefix + ".table.collectionOrCommunity"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](17, 17, ctx_r2.messagePrefix + ".table.edit"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", (tmp_9_0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](20, 19, ctx_r2.subGroups$)) == null ? null : tmp_9_0.payload == null ? null : tmp_9_0.payload.page);
  }
}
function SubgroupsListComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, ctx_r2.messagePrefix + ".no-subgroups-yet"), " ");
  }
}
function SubgroupsListComponent_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, ctx_r2.messagePrefix + ".search.head"), " ");
  }
}
function SubgroupsListComponent_ds_pagination_26_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr")(1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "td", 18)(4, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function SubgroupsListComponent_ds_pagination_26_tr_19_Template_a_click_4_listener() {
      const group_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.groupDataService.startEditingNewGroup(group_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "td", 18)(10, "div", 20)(11, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function SubgroupsListComponent_ds_pagination_26_tr_19_Template_button_click_11_listener() {
      const group_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.addSubgroupToGroup(group_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](13, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    let tmp_6_0;
    const group_r5 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](group_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](10, _c2, ctx_r2.groupDataService.getGroupEditPageRouterLink(group_r5)));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r2.dsoNameService.getName(group_r5), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r2.dsoNameService.getName((tmp_6_0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](8, 5, group_r5.object)) == null ? null : tmp_6_0.payload));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](12, 7, ctx_r2.messagePrefix + ".table.edit.buttons.add", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](12, _c3, ctx_r2.dsoNameService.getName(group_r5))));
  }
}
function SubgroupsListComponent_ds_pagination_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ds-pagination", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 14)(3, "table", 24)(4, "thead")(5, "tr")(6, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](19, SubgroupsListComponent_ds_pagination_26_tr_19_Template, 14, 14, "tr", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](20, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_9_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("paginationOptions", ctx_r2.configSearch)("collectionSize", (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](1, 9, ctx_r2.searchResults$)) == null ? null : tmp_2_0.payload == null ? null : tmp_2_0.payload.totalElements)("hideGear", true)("hidePagerWhenSinglePage", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](8, 11, ctx_r2.messagePrefix + ".table.id"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](11, 13, ctx_r2.messagePrefix + ".table.name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](14, 15, ctx_r2.messagePrefix + ".table.collectionOrCommunity"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](17, 17, ctx_r2.messagePrefix + ".table.edit"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", (tmp_9_0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](20, 19, ctx_r2.searchResults$)) == null ? null : tmp_9_0.payload == null ? null : tmp_9_0.payload.page);
  }
}
function SubgroupsListComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, ctx_r2.messagePrefix + ".no-items"), " ");
  }
}
/**
 * Keys to keep track of specific subscriptions
 */
var SubKey;
(function (SubKey) {
  SubKey[SubKey["Members"] = 0] = "Members";
  SubKey[SubKey["ActiveGroup"] = 1] = "ActiveGroup";
  SubKey[SubKey["SearchResults"] = 2] = "SearchResults";
})(SubKey || (SubKey = {}));
/**
 * The list of subgroups in the edit group page
 */
class SubgroupsListComponent {
  constructor(groupDataService, translateService, notificationsService, formBuilder, paginationService, router, dsoNameService) {
    this.groupDataService = groupDataService;
    this.translateService = translateService;
    this.notificationsService = notificationsService;
    this.formBuilder = formBuilder;
    this.paginationService = paginationService;
    this.router = router;
    this.dsoNameService = dsoNameService;
    /**
     * Result of search groups, initially all groups
     */
    this.searchResults$ = new rxjs__WEBPACK_IMPORTED_MODULE_10__.BehaviorSubject(undefined);
    /**
     * List of all subgroups of group being edited
     */
    this.subGroups$ = new rxjs__WEBPACK_IMPORTED_MODULE_10__.BehaviorSubject(undefined);
    /**
     * Map of active subscriptions
     */
    this.subs = new Map();
    /**
     * Pagination config used to display the list of groups that are result of groups search
     */
    this.configSearch = Object.assign(new _shared_pagination_pagination_component_options_model__WEBPACK_IMPORTED_MODULE_7__.PaginationComponentOptions(), {
      id: 'ssgl',
      pageSize: 5,
      currentPage: 1
    });
    /**
     * Pagination config used to display the list of subgroups of currently active group being edited
     */
    this.config = Object.assign(new _shared_pagination_pagination_component_options_model__WEBPACK_IMPORTED_MODULE_7__.PaginationComponentOptions(), {
      id: 'sgl',
      pageSize: 5,
      currentPage: 1
    });
    this.currentSearchQuery = '';
  }
  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      query: ''
    });
    this.subs.set(SubKey.ActiveGroup, this.groupDataService.getActiveGroup().subscribe(activeGroup => {
      if (activeGroup != null) {
        this.groupBeingEdited = activeGroup;
        this.retrieveSubGroups();
        this.search({
          query: ''
        });
      }
    }));
    this.subGroupsPageInfoState$ = this.subGroups$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(subGroupsRD => subGroupsRD?.payload?.pageInfo));
  }
  /**
   * Retrieve the Subgroups that are members of the group
   *
   * @param page the number of the page to retrieve
   * @private
   */
  retrieveSubGroups() {
    this.unsubFrom(SubKey.Members);
    this.subs.set(SubKey.Members, this.paginationService.getCurrentPagination(this.config.id, this.config).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.switchMap)(config => this.groupDataService.findListByHref(this.groupBeingEdited._links.subgroups.href, {
      currentPage: config.currentPage,
      elementsPerPage: config.pageSize
    }, true, true, (0,_shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_8__.followLink)('object')))).subscribe(rd => {
      this.subGroups$.next(rd);
    }));
  }
  /**
   * Deletes given subgroup from the group currently being edited
   * @param subgroup  Group we want to delete from the subgroups of the group currently being edited
   */
  deleteSubgroupFromGroup(subgroup) {
    this.groupDataService.getActiveGroup().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.take)(1)).subscribe(activeGroup => {
      if (activeGroup != null) {
        const response = this.groupDataService.deleteSubGroupFromGroup(activeGroup, subgroup);
        this.showNotifications('deleteSubgroup', response, this.dsoNameService.getName(subgroup), activeGroup);
        // Reload search results (if there is an active query).
        // This will potentially add this deleted subgroup into the list of search results.
        if (this.currentSearchQuery != null) {
          this.search({
            query: this.currentSearchQuery
          });
        }
      } else {
        this.notificationsService.error(this.translateService.get(this.messagePrefix + '.notification.failure.noActiveGroup'));
      }
    });
  }
  /**
   * Adds given subgroup to the group currently being edited
   * @param subgroup  Subgroup to add to group currently being edited
   */
  addSubgroupToGroup(subgroup) {
    this.groupDataService.getActiveGroup().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.take)(1)).subscribe(activeGroup => {
      if (activeGroup != null) {
        if (activeGroup.uuid !== subgroup.uuid) {
          const response = this.groupDataService.addSubGroupToGroup(activeGroup, subgroup);
          this.showNotifications('addSubgroup', response, this.dsoNameService.getName(subgroup), activeGroup);
          // Reload search results (if there is an active query).
          // This will potentially remove this added subgroup from search results.
          if (this.currentSearchQuery != null) {
            this.search({
              query: this.currentSearchQuery
            });
          }
        } else {
          this.notificationsService.error(this.translateService.get(this.messagePrefix + '.notification.failure.subgroupToAddIsActiveGroup'));
        }
      } else {
        this.notificationsService.error(this.translateService.get(this.messagePrefix + '.notification.failure.noActiveGroup'));
      }
    });
  }
  /**
   * Search all non-member groups (searches by group name and by uuid exact match).  Used to search for
   * groups that could be added to current group as a subgroup.
   * @param data  Contains query param
   */
  search(data) {
    this.unsubFrom(SubKey.SearchResults);
    this.subs.set(SubKey.SearchResults, this.paginationService.getCurrentPagination(this.configSearch.id, this.configSearch).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.switchMap)(paginationOptions => {
      const query = data.query;
      if (query != null && this.currentSearchQuery !== query && this.groupBeingEdited) {
        this.currentSearchQuery = query;
        this.paginationService.resetPage(this.configSearch.id);
      }
      this.searchDone = true;
      return this.groupDataService.searchNonMemberGroups(this.currentSearchQuery, this.groupBeingEdited.id, {
        currentPage: paginationOptions.currentPage,
        elementsPerPage: paginationOptions.pageSize
      }, false, true, (0,_shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_8__.followLink)('object'));
    }), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_3__.getAllCompletedRemoteData)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(rd => {
      if (rd.hasFailed) {
        this.notificationsService.error(this.translateService.get(this.messagePrefix + '.notification.failure', {
          cause: rd.errorMessage
        }));
      } else {
        return rd;
      }
    })).subscribe(rd => {
      this.searchResults$.next(rd);
    }));
  }
  /**
   * Unsubscribe from a subscription if it's still subscribed, and remove it from the map of
   * active subscriptions
   *
   * @param key The key of the subscription to unsubscribe from
   * @private
   */
  unsubFrom(key) {
    if (this.subs.has(key)) {
      this.subs.get(key).unsubscribe();
      this.subs.delete(key);
    }
  }
  /**
   * unsub all subscriptions
   */
  ngOnDestroy() {
    for (const key of this.subs.keys()) {
      this.unsubFrom(key);
    }
    this.paginationService.clearPagination(this.config.id);
    this.paginationService.clearPagination(this.configSearch.id);
  }
  /**
   * Shows a notification based on the success/failure of the request
   * @param messageSuffix   Suffix for message
   * @param response        RestResponse observable containing success/failure request
   * @param nameObject      Object request was about
   * @param activeGroup     Group currently being edited
   */
  showNotifications(messageSuffix, response, nameObject, activeGroup) {
    response.pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_3__.getFirstCompletedRemoteData)()).subscribe(rd => {
      if (rd.hasSucceeded) {
        this.notificationsService.success(this.translateService.get(this.messagePrefix + '.notification.success.' + messageSuffix, {
          name: nameObject
        }));
        this.groupDataService.clearGroupLinkRequests(activeGroup._links.subgroups.href);
      } else {
        this.notificationsService.error(this.translateService.get(this.messagePrefix + '.notification.failure.' + messageSuffix, {
          name: nameObject
        }));
      }
    });
  }
  /**
   * Reset all input-fields to be empty and search all search
   */
  clearFormAndResetResult() {
    this.searchForm.patchValue({
      query: ''
    });
    this.search({
      query: ''
    });
  }
  static {
    this.ɵfac = function SubgroupsListComponent_Factory(t) {
      return new (t || SubgroupsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_core_eperson_group_data_service__WEBPACK_IMPORTED_MODULE_1__.GroupDataService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_5__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_15__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_core_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_2__.PaginationService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_core_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_0__.DSONameService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
      type: SubgroupsListComponent,
      selectors: [["ds-subgroups-list"]],
      inputs: {
        messagePrefix: "messagePrefix"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵStandaloneFeature"]],
      decls: 30,
      vars: 29,
      consts: [[1, "border-bottom", "pb-2"], [3, "paginationOptions", "collectionSize", "hideGear", "hidePagerWhenSinglePage", 4, "ngIf"], ["class", "alert alert-info w-100 mb-2", "role", "alert", 4, "ngIf"], ["id", "search", 1, "border-bottom", "pb-2"], [4, "dsContextHelp"], [1, "d-flex", "justify-content-between", 3, "ngSubmit", "formGroup"], [1, "flex-grow-1", "mr-3"], [1, "form-group", "input-group", "mr-3"], ["type", "text", "name", "query", "id", "query", "formControlName", "query", "aria-label", "Search input", 1, "form-control"], [1, "input-group-append"], ["type", "submit", 1, "search-button", "btn", "btn-primary"], [1, "fas", "fa-search"], [1, "btn", "btn-secondary", "float-right", 3, "click"], [3, "paginationOptions", "collectionSize", "hideGear", "hidePagerWhenSinglePage"], [1, "table-responsive"], ["id", "subgroupsOfGroup", 1, "table", "table-striped", "table-hover", "table-bordered"], ["scope", "col", 1, "align-middle"], [4, "ngFor", "ngForOf"], [1, "align-middle"], [3, "click", "routerLink"], [1, "btn-group", "edit-field"], [1, "btn", "btn-outline-danger", "btn-sm", "deleteButton", 3, "click", "title"], [1, "fas", "fa-trash-alt", "fa-fw"], ["role", "alert", 1, "alert", "alert-info", "w-100", "mb-2"], ["id", "groupsSearch", 1, "table", "table-striped", "table-hover", "table-bordered"], [1, "btn", "btn-outline-primary", "btn-sm", "addButton", 3, "click", "title"], [1, "fas", "fa-plus", "fa-fw"]],
      template: function SubgroupsListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "h3", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](6, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](7, SubgroupsListComponent_ds_pagination_7_Template, 21, 21, "ds-pagination", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](8, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](9, SubgroupsListComponent_div_9_Template, 3, 3, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](10, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "h4", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](12, SubgroupsListComponent_span_12_Template, 3, 3, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "form", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngSubmit", function SubgroupsListComponent_Template_form_ngSubmit_13_listener() {
            return ctx.search(ctx.searchForm.value);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "div", 6)(15, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](16, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "span", 9)(18, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](19, "i", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](21, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "div")(23, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function SubgroupsListComponent_Template_button_click_23_listener() {
            return ctx.clearFormAndResetResult();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](24);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](25, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](26, SubgroupsListComponent_ds_pagination_26_Template, 21, 21, "ds-pagination", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](27, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](28, SubgroupsListComponent_div_28_Template, 3, 3, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](29, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        }
        if (rf & 2) {
          let tmp_2_0;
          let tmp_3_0;
          let tmp_8_0;
          let tmp_9_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 10, ctx.messagePrefix + ".head"));
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](6, 12, ctx.messagePrefix + ".headSubgroups"));
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ((tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](8, 14, ctx.subGroups$)) == null ? null : tmp_2_0.payload == null ? null : tmp_2_0.payload.totalElements) > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ((tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](10, 16, ctx.subGroups$)) == null ? null : tmp_3_0.payload == null ? null : tmp_3_0.payload.totalElements) === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("dsContextHelp", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](27, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](26, _c0)));
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx.searchForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](21, 18, ctx.messagePrefix + ".search.button"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](25, 20, ctx.messagePrefix + ".button.see-all"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ((tmp_8_0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](27, 22, ctx.searchResults$)) == null ? null : tmp_8_0.payload == null ? null : tmp_8_0.payload.totalElements) > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ((tmp_9_0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](29, 24, ctx.searchResults$)) == null ? null : tmp_9_0.payload == null ? null : tmp_9_0.payload.totalElements) === 0 && ctx.searchDone);
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_17__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, _shared_context_help_directive__WEBPACK_IMPORTED_MODULE_4__.ContextHelpDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslatePipe, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControlName, _shared_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_6__.PaginationComponent, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 68478:
/*!***********************************************************************************************!*\
  !*** ./src/app/access-control/group-registry/group-form/validators/group-exists.validator.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ValidateGroupExists: () => (/* binding */ ValidateGroupExists)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/shared/operators */ 55757);


class ValidateGroupExists {
  /**
   * This method will create the validator with the groupDataService requested from component
   * @param groupDataService the service with DI in the component that this validator is being utilized.
   * @return Observable<ValidationErrors | null>
   */
  static createValidator(groupDataService) {
    return control => {
      return groupDataService.searchGroups(control.value, {
        currentPage: 1,
        elementsPerPage: 100
      }).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_0__.getFirstSucceededRemoteListPayload)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(groups => {
        return groups.filter(group => group.name === control.value);
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(groups => {
        return groups.length > 0 ? {
          groupExists: true
        } : null;
      }));
    };
  }
}

/***/ }),

/***/ 60685:
/*!*******************************************************************!*\
  !*** ./src/app/access-control/group-registry/group-page.guard.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   groupPageGuard: () => (/* binding */ groupPageGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 17796);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var _core_data_feature_authorization_feature_authorization_guard_some_feature_authorization_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/data/feature-authorization/feature-authorization-guard/some-feature-authorization.guard */ 51581);
/* harmony import */ var _core_data_feature_authorization_feature_id__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/data/feature-authorization/feature-id */ 3970);
/* harmony import */ var _core_shared_hal_endpoint_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/shared/hal-endpoint.service */ 4910);






const defaultGroupPageGetObjectUrl = (route, state) => {
  const halEndpointService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_core_shared_hal_endpoint_service__WEBPACK_IMPORTED_MODULE_2__.HALEndpointService);
  const groupsEndpoint = 'groups';
  return halEndpointService.getEndpoint(groupsEndpoint).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(groupsUrl => `${groupsUrl}/${route?.params?.groupId}`));
};
const groupPageGuard = (getObjectUrl = defaultGroupPageGetObjectUrl, getEPersonUuid) => (0,_core_data_feature_authorization_feature_authorization_guard_some_feature_authorization_guard__WEBPACK_IMPORTED_MODULE_0__.someFeatureAuthorizationGuard)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)([_core_data_feature_authorization_feature_id__WEBPACK_IMPORTED_MODULE_1__.FeatureID.CanManageGroup]), getObjectUrl, getEPersonUuid);

/***/ }),

/***/ 17846:
/*!****************************************************************************!*\
  !*** ./src/app/access-control/group-registry/groups-registry.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GroupsRegistryComponent: () => (/* binding */ GroupsRegistryComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/forms */ 56106);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 49966);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs */ 83485);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs */ 17796);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! rxjs */ 27639);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! rxjs */ 80560);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs/operators */ 21252);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs/operators */ 84975);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! rxjs/operators */ 42562);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! rxjs/operators */ 60494);
/* harmony import */ var _core_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/breadcrumbs/dso-name.service */ 96526);
/* harmony import */ var _core_data_dspace_object_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/data/dspace-object-data.service */ 13989);
/* harmony import */ var _core_data_feature_authorization_authorization_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/data/feature-authorization/authorization-data.service */ 3675);
/* harmony import */ var _core_data_feature_authorization_feature_id__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/data/feature-authorization/feature-id */ 3970);
/* harmony import */ var _core_data_paginated_list_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/data/paginated-list.model */ 96820);
/* harmony import */ var _core_data_request_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/data/request.service */ 32473);
/* harmony import */ var _core_eperson_eperson_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/eperson/eperson-data.service */ 74449);
/* harmony import */ var _core_eperson_group_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/eperson/group-data.service */ 44494);
/* harmony import */ var _core_eperson_models_group_dto_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/eperson/models/group-dto.model */ 57608);
/* harmony import */ var _core_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/pagination/pagination.service */ 76896);
/* harmony import */ var _core_services_route_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/services/route.service */ 27297);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../core/shared/operators */ 55757);
/* harmony import */ var _shared_btn_disabled_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/btn-disabled.directive */ 60456);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/empty.util */ 82777);
/* harmony import */ var _shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/loading/themed-loading.component */ 82394);
/* harmony import */ var _shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../shared/notifications/notifications.service */ 69472);
/* harmony import */ var _shared_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../shared/pagination/pagination.component */ 40590);
/* harmony import */ var _shared_pagination_pagination_component_options_model__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../shared/pagination/pagination-component-options.model */ 23401);
/* harmony import */ var _shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../shared/utils/follow-link-config.model */ 67600);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 90310);







































const _c0 = a0 => ({
  name: a0
});
function GroupsRegistryComponent_ds_loading_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "ds-loading");
  }
}
function GroupsRegistryComponent_ds_pagination_33_tr_22_button_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](2, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const groupDto_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind2"](1, 2, ctx_r1.messagePrefix + "table.edit.buttons.edit", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction1"](5, _c0, ctx_r1.dsoNameService.getName(groupDto_r1.group))));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("routerLink", ctx_r1.groupService.getGroupEditPageRouterLink(groupDto_r1.group));
  }
}
function GroupsRegistryComponent_ds_pagination_33_tr_22_button_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](2, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("dsBtnDisabled", true)("ngbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](1, 2, "admin.access-control.epeople.table.edit.buttons.edit-disabled"));
  }
}
function GroupsRegistryComponent_ds_pagination_33_tr_22_button_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function GroupsRegistryComponent_ds_pagination_33_tr_22_button_15_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r3);
      const groupDto_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.deleteGroup(groupDto_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](2, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const groupDto_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind2"](1, 1, ctx_r1.messagePrefix + "table.edit.buttons.remove", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction1"](4, _c0, ctx_r1.dsoNameService.getName(groupDto_r1.group))));
  }
}
function GroupsRegistryComponent_ds_pagination_33_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](10, "td")(11, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](12, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](13, GroupsRegistryComponent_ds_pagination_33_tr_22_button_13_Template, 3, 7, "button", 27)(14, GroupsRegistryComponent_ds_pagination_33_tr_22_button_14_Template, 3, 4, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](15, GroupsRegistryComponent_ds_pagination_33_tr_22_button_15_Template, 3, 6, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    let tmp_5_0;
    const groupDto_r1 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](groupDto_r1.group.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](ctx_r1.dsoNameService.getName(groupDto_r1.group));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](ctx_r1.dsoNameService.getName((tmp_5_0 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](7, 8, groupDto_r1.group.object)) == null ? null : tmp_5_0.payload));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"]((groupDto_r1.epersons == null ? null : groupDto_r1.epersons.totalElements) + (groupDto_r1.subgroups == null ? null : groupDto_r1.subgroups.totalElements));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngSwitch", groupDto_r1.ableToEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngSwitchCase", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngSwitchCase", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", !(groupDto_r1.group == null ? null : groupDto_r1.group.permanent) && groupDto_r1.ableToDelete);
  }
}
function GroupsRegistryComponent_ds_pagination_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "ds-pagination", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "div", 21)(3, "table", 22)(4, "thead")(5, "tr")(6, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](9, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](12, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](15, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](21, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](22, GroupsRegistryComponent_ds_pagination_33_tr_22_Template, 16, 10, "tr", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](23, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_10_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("paginationOptions", ctx_r1.config)("collectionSize", (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](1, 10, ctx_r1.pageInfoState$)) == null ? null : tmp_2_0.totalElements)("hideGear", true)("hidePagerWhenSinglePage", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](8, 12, ctx_r1.messagePrefix + "table.id"));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](11, 14, ctx_r1.messagePrefix + "table.name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](14, 16, ctx_r1.messagePrefix + "table.collectionOrCommunity"));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](17, 18, ctx_r1.messagePrefix + "table.members"));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](20, 20, ctx_r1.messagePrefix + "table.edit"));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", (tmp_10_0 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](23, 22, ctx_r1.groupsDto$)) == null ? null : tmp_10_0.page);
  }
}
function GroupsRegistryComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](2, 1, ctx_r1.messagePrefix + "no-items"), " ");
  }
}
/**
 * A component used for managing all existing groups within the repository.
 * The admin can create, edit or delete groups here.
 */
class GroupsRegistryComponent {
  constructor(groupService, ePersonDataService, dSpaceObjectDataService, translateService, notificationsService, formBuilder, routeService, authorizationService, paginationService, requestService, dsoNameService) {
    this.groupService = groupService;
    this.ePersonDataService = ePersonDataService;
    this.dSpaceObjectDataService = dSpaceObjectDataService;
    this.translateService = translateService;
    this.notificationsService = notificationsService;
    this.formBuilder = formBuilder;
    this.routeService = routeService;
    this.authorizationService = authorizationService;
    this.paginationService = paginationService;
    this.requestService = requestService;
    this.dsoNameService = dsoNameService;
    this.messagePrefix = 'admin.access-control.groups.';
    /**
     * Pagination config used to display the list of groups
     */
    this.config = Object.assign(new _shared_pagination_pagination_component_options_model__WEBPACK_IMPORTED_MODULE_17__.PaginationComponentOptions(), {
      id: 'gl',
      pageSize: 5,
      currentPage: 1
    });
    /**
     * A BehaviorSubject with the list of GroupDtoModel objects made from the Groups in the repository or
     * as the result of the search
     */
    this.groupsDto$ = new rxjs__WEBPACK_IMPORTED_MODULE_20__.BehaviorSubject({});
    this.deletedGroupsIds = [];
    /**
     * An observable for the pageInfo, needed to pass to the pagination component
     */
    this.pageInfoState$ = new rxjs__WEBPACK_IMPORTED_MODULE_20__.BehaviorSubject(undefined);
    /**
     * A boolean representing if a search is pending
     */
    this.loading$ = new rxjs__WEBPACK_IMPORTED_MODULE_20__.BehaviorSubject(false);
    /**
     * List of subscriptions
     */
    this.subs = [];
    this.currentSearchQuery = '';
    this.searchForm = this.formBuilder.group({
      query: this.currentSearchQuery
    });
  }
  ngOnInit() {
    this.search({
      query: this.currentSearchQuery
    });
  }
  /**
   * Search in the groups (searches by group name and by uuid exact match)
   * @param data  Contains query param
   */
  search(data) {
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_13__.hasValue)(this.searchSub)) {
      this.searchSub.unsubscribe();
      this.subs = this.subs.filter(sub => sub !== this.searchSub);
    }
    this.searchSub = this.paginationService.getCurrentPagination(this.config.id, this.config).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.tap)(() => this.loading$.next(true)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.switchMap)(paginationOptions => {
      const query = data.query;
      if (query != null && this.currentSearchQuery !== query) {
        this.currentSearchQuery = query;
        this.paginationService.updateRouteWithUrl(this.config.id, [], {
          page: 1
        });
      }
      return this.groupService.searchGroups(this.currentSearchQuery.trim(), {
        currentPage: paginationOptions.currentPage,
        elementsPerPage: paginationOptions.pageSize
      }, true, true, (0,_shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_18__.followLink)('object'));
    }), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_11__.getAllSucceededRemoteData)(), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_11__.getRemoteDataPayload)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.switchMap)(groups => {
      if (groups.page.length === 0) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_23__.of)((0,_core_data_paginated_list_model__WEBPACK_IMPORTED_MODULE_4__.buildPaginatedList)(groups.pageInfo, []));
      }
      return this.authorizationService.isAuthorized(_core_data_feature_authorization_feature_id__WEBPACK_IMPORTED_MODULE_3__.FeatureID.AdministratorOf).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.switchMap)(isSiteAdmin => {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_24__.combineLatest)([...groups.page.map(group => {
          if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_13__.hasValue)(group) && !this.deletedGroupsIds.includes(group.id)) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_24__.combineLatest)([this.authorizationService.isAuthorized(_core_data_feature_authorization_feature_id__WEBPACK_IMPORTED_MODULE_3__.FeatureID.CanDelete, group.self), this.canManageGroup$(isSiteAdmin, group), this.hasLinkedDSO(group), this.getSubgroups(group), this.getMembers(group)]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_25__.map)(([canDelete, canManageGroup, hasLinkedDSO, subgroups, members]) => {
              const groupDtoModel = new _core_eperson_models_group_dto_model__WEBPACK_IMPORTED_MODULE_8__.GroupDtoModel();
              groupDtoModel.ableToDelete = canDelete && !hasLinkedDSO;
              groupDtoModel.ableToEdit = canManageGroup;
              groupDtoModel.group = group;
              groupDtoModel.subgroups = subgroups.payload;
              groupDtoModel.epersons = members.payload;
              return groupDtoModel;
            }));
          } else {
            return rxjs__WEBPACK_IMPORTED_MODULE_26__.EMPTY;
          }
        })]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_27__.defaultIfEmpty)([]), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_25__.map)(dtos => {
          return (0,_core_data_paginated_list_model__WEBPACK_IMPORTED_MODULE_4__.buildPaginatedList)(groups.pageInfo, dtos);
        }));
      }));
    })).subscribe(value => {
      this.groupsDto$.next(value);
      this.pageInfoState$.next(value.pageInfo);
      this.loading$.next(false);
    });
    this.subs.push(this.searchSub);
  }
  canManageGroup$(isSiteAdmin, group) {
    if (isSiteAdmin) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_23__.of)(true);
    } else {
      return this.authorizationService.isAuthorized(_core_data_feature_authorization_feature_id__WEBPACK_IMPORTED_MODULE_3__.FeatureID.CanManageGroup, group.self);
    }
  }
  /**
   * Delete Group
   */
  deleteGroup(group) {
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_13__.hasValue)(group.group.id)) {
      this.groupService.delete(group.group.id).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_11__.getFirstCompletedRemoteData)()).subscribe(rd => {
        if (rd.hasSucceeded) {
          this.deletedGroupsIds = [...this.deletedGroupsIds, group.group.id];
          this.notificationsService.success(this.translateService.get(this.messagePrefix + 'notification.deleted.success', {
            name: this.dsoNameService.getName(group.group)
          }));
        } else {
          this.notificationsService.error(this.translateService.get(this.messagePrefix + 'notification.deleted.failure.title', {
            name: this.dsoNameService.getName(group.group)
          }), this.translateService.get(this.messagePrefix + 'notification.deleted.failure.content', {
            cause: rd.errorMessage
          }));
        }
      });
    }
  }
  /**
   * Get the members (epersons embedded value of a group)
   * NOTE: At this time we only grab the *first* member in order to receive the `totalElements` value
   * needed for our HTML template.
   * @param group
   */
  getMembers(group) {
    return this.ePersonDataService.findListByHref(group._links.epersons.href, {
      currentPage: 1,
      elementsPerPage: 1
    }).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_11__.getFirstSucceededRemoteData)());
  }
  /**
   * Get the subgroups (groups embedded value of a group)
   * NOTE: At this time we only grab the *first* subgroup in order to receive the `totalElements` value
   * needed for our HTML template.
   * @param group
   */
  getSubgroups(group) {
    return this.groupService.findListByHref(group._links.subgroups.href, {
      currentPage: 1,
      elementsPerPage: 1
    }).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_11__.getFirstSucceededRemoteData)());
  }
  /**
   * Check if group has a linked object (community or collection linked to a workflow group)
   * @param group
   */
  hasLinkedDSO(group) {
    return this.dSpaceObjectDataService.findByHref(group._links.object.href).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_11__.getFirstSucceededRemoteData)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_25__.map)(rd => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_13__.hasValue)(rd) && (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_13__.hasValue)(rd.payload)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_28__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_23__.of)(false)));
  }
  /**
   * Reset all input-fields to be empty and search all search
   */
  clearFormAndResetResult() {
    this.searchForm.patchValue({
      query: ''
    });
    this.search({
      query: ''
    });
  }
  /**
   * Unsub all subscriptions
   */
  ngOnDestroy() {
    this.cleanupSubscribes();
    this.paginationService.clearPagination(this.config.id);
  }
  cleanupSubscribes() {
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_13__.hasValue)(this.paginationSub)) {
      this.paginationSub.unsubscribe();
    }
    this.subs.filter(sub => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_13__.hasValue)(sub)).forEach(sub => sub.unsubscribe());
    this.paginationService.clearPagination(this.config.id);
  }
  static {
    this.ɵfac = function GroupsRegistryComponent_Factory(t) {
      return new (t || GroupsRegistryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_core_eperson_group_data_service__WEBPACK_IMPORTED_MODULE_7__.GroupDataService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_core_eperson_eperson_data_service__WEBPACK_IMPORTED_MODULE_6__.EPersonDataService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_core_data_dspace_object_data_service__WEBPACK_IMPORTED_MODULE_1__.DSpaceObjectDataService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_15__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_30__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_core_services_route_service__WEBPACK_IMPORTED_MODULE_10__.RouteService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_core_data_feature_authorization_authorization_data_service__WEBPACK_IMPORTED_MODULE_2__.AuthorizationDataService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_core_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_9__.PaginationService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_core_data_request_service__WEBPACK_IMPORTED_MODULE_5__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_core_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_0__.DSONameService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineComponent"]({
      type: GroupsRegistryComponent,
      selectors: [["ds-groups-registry"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵStandaloneFeature"]],
      decls: 38,
      vars: 34,
      consts: [[1, "container"], [1, "groups-registry", "row"], [1, "col-12"], [1, "d-flex", "justify-content-between", "border-bottom", "mb-3"], ["id", "header", 1, "pb-2"], [1, "mr-auto", "btn", "btn-success", 3, "routerLink"], [1, "fas", "fa-plus"], [1, "d-none", "d-sm-inline", "ml-1"], ["id", "search", 1, "border-bottom", "pb-2"], [1, "d-flex", "justify-content-between", 3, "ngSubmit", "formGroup"], [1, "flex-grow-1", "mr-3"], [1, "form-group", "input-group"], ["type", "text", "name", "query", "id", "query", "formControlName", "query", 1, "form-control", 3, "placeholder"], [1, "input-group-append"], ["type", "submit", 1, "search-button", "btn", "btn-primary"], [1, "fas", "fa-search"], [1, "btn", "btn-secondary", 3, "click"], [4, "ngIf"], [3, "paginationOptions", "collectionSize", "hideGear", "hidePagerWhenSinglePage", 4, "ngIf"], ["class", "alert alert-info w-100 mb-2", "role", "alert", 4, "ngIf"], [3, "paginationOptions", "collectionSize", "hideGear", "hidePagerWhenSinglePage"], [1, "table-responsive"], ["id", "groups", 1, "table", "table-striped", "table-hover", "table-bordered"], ["scope", "col"], [4, "ngFor", "ngForOf"], [1, "btn-group", "edit-field"], [3, "ngSwitch"], ["class", "btn btn-outline-primary btn-sm btn-edit", 3, "routerLink", "title", 4, "ngSwitchCase"], ["class", "btn btn-outline-primary btn-sm btn-edit", "placement", "left", 3, "dsBtnDisabled", "ngbTooltip", 4, "ngSwitchCase"], ["class", "btn btn-outline-danger btn-sm btn-delete", 3, "title", "click", 4, "ngIf"], [1, "btn", "btn-outline-primary", "btn-sm", "btn-edit", 3, "routerLink", "title"], [1, "fas", "fa-edit", "fa-fw"], ["placement", "left", 1, "btn", "btn-outline-primary", "btn-sm", "btn-edit", 3, "dsBtnDisabled", "ngbTooltip"], [1, "btn", "btn-outline-danger", "btn-sm", "btn-delete", 3, "click", "title"], [1, "fas", "fa-trash-alt", "fa-fw"], ["role", "alert", 1, "alert", "alert-info", "w-100", "mb-2"]],
      template: function GroupsRegistryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](6, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](7, "div")(8, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](9, "i", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](10, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](12, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](13, "h2", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](15, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](16, "form", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ngSubmit", function GroupsRegistryComponent_Template_form_ngSubmit_16_listener() {
            return ctx.search(ctx.searchForm.value);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](17, "div", 10)(18, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](19, "input", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](20, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](21, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](22, "span", 13)(23, "button", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](24, "i", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](25);
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](26, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](27, "div")(28, "button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function GroupsRegistryComponent_Template_button_click_28_listener() {
            return ctx.clearFormAndResetResult();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](29);
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](30, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](31, GroupsRegistryComponent_ds_loading_31_Template, 1, 0, "ds-loading", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](32, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](33, GroupsRegistryComponent_ds_pagination_33_Template, 24, 24, "ds-pagination", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](34, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](35, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](36, GroupsRegistryComponent_div_36_Template, 3, 3, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](37, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          let tmp_10_0;
          let tmp_11_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](6, 12, ctx.messagePrefix + "head"));
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("routerLink", "create");
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](12, 14, ctx.messagePrefix + "button.add"));
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](15, 16, ctx.messagePrefix + "search.head"));
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("formGroup", ctx.searchForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](20, 18, ctx.messagePrefix + "search.placeholder"));
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](21, 20, ctx.messagePrefix + "search.placeholder"));
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](26, 22, ctx.messagePrefix + "search.button"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](30, 24, ctx.messagePrefix + "button.see-all"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](32, 26, ctx.loading$));
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ((tmp_10_0 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](34, 28, ctx.pageInfoState$)) == null ? null : tmp_10_0.totalElements) > 0 && _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](35, 30, ctx.loading$) !== true);
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ((tmp_11_0 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](37, 32, ctx.pageInfoState$)) == null ? null : tmp_11_0.totalElements) === 0);
        }
      },
      dependencies: [_shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_14__.ThemedLoadingComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__.TranslatePipe, _angular_router__WEBPACK_IMPORTED_MODULE_31__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_30__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_30__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_30__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_30__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_30__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_30__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_30__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_32__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_32__.NgIf, _shared_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_16__.PaginationComponent, _angular_common__WEBPACK_IMPORTED_MODULE_32__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_32__.NgSwitchCase, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_33__.NgbTooltipModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_33__.NgbTooltip, _angular_common__WEBPACK_IMPORTED_MODULE_32__.NgForOf, _shared_btn_disabled_directive__WEBPACK_IMPORTED_MODULE_12__.BtnDisabledDirective],
      encapsulation: 2
    });
  }
}

/***/ }),

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

/***/ 57608:
/*!********************************************************!*\
  !*** ./src/app/core/eperson/models/group-dto.model.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GroupDtoModel: () => (/* binding */ GroupDtoModel)
/* harmony export */ });
/**
 * This class serves as a Data Transfer Model that contains the Group, whether or not it's able to be deleted and its members
 */
class GroupDtoModel {}

/***/ }),

/***/ 81225:
/*!****************************************************!*\
  !*** ./src/app/core/resolving/resolver.actions.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 22198:
/*!***************************************************!*\
  !*** ./src/app/shared/utils/has-no-value.pipe.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HasNoValuePipe: () => (/* binding */ HasNoValuePipe)
/* harmony export */ });
/* harmony import */ var _empty_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../empty.util */ 82777);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 90310);


/**
 * Returns true if the passed value is null or undefined.
 */
class HasNoValuePipe {
  transform(value) {
    return (0,_empty_util__WEBPACK_IMPORTED_MODULE_0__.hasNoValue)(value);
  }
  static {
    this.ɵfac = function HasNoValuePipe_Factory(t) {
      return new (t || HasNoValuePipe)();
    };
  }
  static {
    this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "dsHasNoValue",
      type: HasNoValuePipe,
      pure: true,
      standalone: true
    });
  }
}

/***/ }),

/***/ 67649:
/*!*****************************************************************!*\
  !*** ./node_modules/ngx-pagination/fesm2020/ngx-pagination.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NgxPaginationModule: () => (/* binding */ NgxPaginationModule),
/* harmony export */   PaginatePipe: () => (/* binding */ PaginatePipe),
/* harmony export */   PaginationControlsComponent: () => (/* binding */ PaginationControlsComponent),
/* harmony export */   PaginationControlsDirective: () => (/* binding */ PaginationControlsDirective),
/* harmony export */   PaginationService: () => (/* binding */ PaginationService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 61142);




function PaginationControlsComponent_ul_3_li_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function PaginationControlsComponent_ul_3_li_1_a_1_Template_a_keyup_enter_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      const p_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](p_r3.previous());
    })("click", function PaginationControlsComponent_ul_3_li_1_a_1_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      const p_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](p_r3.previous());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.previousLabel, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.screenReaderPageLabel);
  }
}
function PaginationControlsComponent_ul_3_li_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.previousLabel, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.screenReaderPageLabel);
  }
}
function PaginationControlsComponent_ul_3_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PaginationControlsComponent_ul_3_li_1_a_1_Template, 4, 2, "a", 10)(2, PaginationControlsComponent_ul_3_li_1_span_2_Template, 4, 2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const p_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", p_r3.isFirstPage());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", 1 < p_r3.getCurrent());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", p_r3.isFirstPage());
  }
}
function PaginationControlsComponent_ul_3_li_4_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function PaginationControlsComponent_ul_3_li_4_a_1_Template_a_keyup_enter_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const page_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      const p_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](p_r3.setCurrent(page_r6.value));
    })("click", function PaginationControlsComponent_ul_3_li_4_a_1_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const page_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      const p_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](p_r3.setCurrent(page_r6.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const page_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r3.screenReaderPageLabel, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](page_r6.label === "..." ? page_r6.label : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 2, page_r6.label, ""));
  }
}
function PaginationControlsComponent_ul_3_li_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 16)(2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const page_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r3.screenReaderCurrentLabel, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](page_r6.label === "..." ? page_r6.label : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 2, page_r6.label, ""));
  }
}
function PaginationControlsComponent_ul_3_li_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PaginationControlsComponent_ul_3_li_4_a_1_Template, 6, 5, "a", 10)(2, PaginationControlsComponent_ul_3_li_4_ng_container_2_Template, 7, 5, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const page_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const p_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("current", p_r3.getCurrent() === page_r6.value)("ellipsis", page_r6.label === "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", p_r3.getCurrent() !== page_r6.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", p_r3.getCurrent() === page_r6.value);
  }
}
function PaginationControlsComponent_ul_3_li_5_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function PaginationControlsComponent_ul_3_li_5_a_1_Template_a_keyup_enter_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      const p_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](p_r3.next());
    })("click", function PaginationControlsComponent_ul_3_li_5_a_1_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      const p_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](p_r3.next());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.nextLabel, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.screenReaderPageLabel);
  }
}
function PaginationControlsComponent_ul_3_li_5_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.nextLabel, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.screenReaderPageLabel);
  }
}
function PaginationControlsComponent_ul_3_li_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PaginationControlsComponent_ul_3_li_5_a_1_Template, 4, 2, "a", 10)(2, PaginationControlsComponent_ul_3_li_5_span_2_Template, 4, 2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const p_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", p_r3.isLastPage());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !p_r3.isLastPage());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", p_r3.isLastPage());
  }
}
function PaginationControlsComponent_ul_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PaginationControlsComponent_ul_3_li_1_Template, 3, 4, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PaginationControlsComponent_ul_3_li_4_Template, 3, 6, "li", 7)(5, PaginationControlsComponent_ul_3_li_5_Template, 3, 4, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const p_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("responsive", ctx_r3.responsive);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.directionLinks);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", p_r3.getCurrent(), " / ", p_r3.getLastPage(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", p_r3.pages)("ngForTrackBy", ctx_r3.trackByIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.directionLinks);
  }
}
class PaginationService {
  constructor() {
    this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.instances = {};
    this.DEFAULT_ID = 'DEFAULT_PAGINATION_ID';
  }
  defaultId() {
    return this.DEFAULT_ID;
  }
  /**
   * Register a PaginationInstance with this service. Returns a
   * boolean value signifying whether the instance is new or
   * updated (true = new or updated, false = unchanged).
   */
  register(instance) {
    if (instance.id == null) {
      instance.id = this.DEFAULT_ID;
    }
    if (!this.instances[instance.id]) {
      this.instances[instance.id] = instance;
      return true;
    } else {
      return this.updateInstance(instance);
    }
  }
  /**
   * Check each property of the instance and update any that have changed. Return
   * true if any changes were made, else return false.
   */
  updateInstance(instance) {
    let changed = false;
    for (let prop in this.instances[instance.id]) {
      if (instance[prop] !== this.instances[instance.id][prop]) {
        this.instances[instance.id][prop] = instance[prop];
        changed = true;
      }
    }
    return changed;
  }
  /**
   * Returns the current page number.
   */
  getCurrentPage(id) {
    if (this.instances[id]) {
      return this.instances[id].currentPage;
    }
    return 1;
  }
  /**
   * Sets the current page number.
   */
  setCurrentPage(id, page) {
    if (this.instances[id]) {
      let instance = this.instances[id];
      let maxPage = Math.ceil(instance.totalItems / instance.itemsPerPage);
      if (page <= maxPage && 1 <= page) {
        this.instances[id].currentPage = page;
        this.change.emit(id);
      }
    }
  }
  /**
   * Sets the value of instance.totalItems
   */
  setTotalItems(id, totalItems) {
    if (this.instances[id] && 0 <= totalItems) {
      this.instances[id].totalItems = totalItems;
      this.change.emit(id);
    }
  }
  /**
   * Sets the value of instance.itemsPerPage.
   */
  setItemsPerPage(id, itemsPerPage) {
    if (this.instances[id]) {
      this.instances[id].itemsPerPage = itemsPerPage;
      this.change.emit(id);
    }
  }
  /**
   * Returns a clone of the pagination instance object matching the id. If no
   * id specified, returns the instance corresponding to the default id.
   */
  getInstance(id = this.DEFAULT_ID) {
    if (this.instances[id]) {
      return this.clone(this.instances[id]);
    }
    return {};
  }
  /**
   * Perform a shallow clone of an object.
   */
  clone(obj) {
    var target = {};
    for (var i in obj) {
      if (obj.hasOwnProperty(i)) {
        target[i] = obj[i];
      }
    }
    return target;
  }
}
const LARGE_NUMBER = Number.MAX_SAFE_INTEGER;
class PaginatePipe {
  constructor(service) {
    this.service = service;
    // store the values from the last time the pipe was invoked
    this.state = {};
  }
  transform(collection, args) {
    // When an observable is passed through the AsyncPipe, it will output
    // `null` until the subscription resolves. In this case, we want to
    // use the cached data from the `state` object to prevent the NgFor
    // from flashing empty until the real values arrive.
    if (!(collection instanceof Array)) {
      let _id = args.id || this.service.defaultId();
      if (this.state[_id]) {
        return this.state[_id].slice;
      } else {
        return collection;
      }
    }
    let serverSideMode = args.totalItems && args.totalItems !== collection.length;
    let instance = this.createInstance(collection, args);
    let id = instance.id;
    let start, end;
    let perPage = instance.itemsPerPage;
    let emitChange = this.service.register(instance);
    if (!serverSideMode && collection instanceof Array) {
      perPage = +perPage || LARGE_NUMBER;
      start = (instance.currentPage - 1) * perPage;
      end = start + perPage;
      let isIdentical = this.stateIsIdentical(id, collection, start, end);
      if (isIdentical) {
        return this.state[id].slice;
      } else {
        let slice = collection.slice(start, end);
        this.saveState(id, collection, slice, start, end);
        this.service.change.emit(id);
        return slice;
      }
    } else {
      if (emitChange) {
        this.service.change.emit(id);
      }
      // save the state for server-side collection to avoid null
      // flash as new data loads.
      this.saveState(id, collection, collection, start, end);
      return collection;
    }
  }
  /**
   * Create an PaginationInstance object, using defaults for any optional properties not supplied.
   */
  createInstance(collection, config) {
    this.checkConfig(config);
    return {
      id: config.id != null ? config.id : this.service.defaultId(),
      itemsPerPage: +config.itemsPerPage || 0,
      currentPage: +config.currentPage || 1,
      totalItems: +config.totalItems || collection.length
    };
  }
  /**
   * Ensure the argument passed to the filter contains the required properties.
   */
  checkConfig(config) {
    const required = ['itemsPerPage', 'currentPage'];
    const missing = required.filter(prop => !(prop in config));
    if (0 < missing.length) {
      throw new Error(`PaginatePipe: Argument is missing the following required properties: ${missing.join(', ')}`);
    }
  }
  /**
   * To avoid returning a brand new array each time the pipe is run, we store the state of the sliced
   * array for a given id. This means that the next time the pipe is run on this collection & id, we just
   * need to check that the collection, start and end points are all identical, and if so, return the
   * last sliced array.
   */
  saveState(id, collection, slice, start, end) {
    this.state[id] = {
      collection,
      size: collection.length,
      slice,
      start,
      end
    };
  }
  /**
   * For a given id, returns true if the collection, size, start and end values are identical.
   */
  stateIsIdentical(id, collection, start, end) {
    let state = this.state[id];
    if (!state) {
      return false;
    }
    let isMetaDataIdentical = state.size === collection.length && state.start === start && state.end === end;
    if (!isMetaDataIdentical) {
      return false;
    }
    return state.slice.every((element, index) => element === collection[start + index]);
  }
}
PaginatePipe.ɵfac = function PaginatePipe_Factory(t) {
  return new (t || PaginatePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](PaginationService, 16));
};
PaginatePipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "paginate",
  type: PaginatePipe,
  pure: false
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaginatePipe, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
    args: [{
      name: 'paginate',
      pure: false
    }]
  }], function () {
    return [{
      type: PaginationService
    }];
  }, null);
})();

/**
 * The default template and styles for the pagination links are borrowed directly
 * from Zurb Foundation 6: http://foundation.zurb.com/sites/docs/pagination.html
 */
const DEFAULT_TEMPLATE = `
    <pagination-template  #p="paginationApi"
                         [id]="id"
                         [maxSize]="maxSize"
                         (pageChange)="pageChange.emit($event)"
                         (pageBoundsCorrection)="pageBoundsCorrection.emit($event)">
    <nav role="navigation" [attr.aria-label]="screenReaderPaginationLabel">
    <ul class="ngx-pagination" 
        [class.responsive]="responsive"
        *ngIf="!(autoHide && p.pages.length <= 1)">

        <li class="pagination-previous" [class.disabled]="p.isFirstPage()" *ngIf="directionLinks"> 
            <a tabindex="0" *ngIf="1 < p.getCurrent()" (keyup.enter)="p.previous()" (click)="p.previous()">
                {{ previousLabel }} <span class="show-for-sr">{{ screenReaderPageLabel }}</span>
            </a>
            <span *ngIf="p.isFirstPage()" aria-disabled="true">
                {{ previousLabel }} <span class="show-for-sr">{{ screenReaderPageLabel }}</span>
            </span>
        </li> 

        <li class="small-screen">
            {{ p.getCurrent() }} / {{ p.getLastPage() }}
        </li>

        <li [class.current]="p.getCurrent() === page.value" 
            [class.ellipsis]="page.label === '...'"
            *ngFor="let page of p.pages; trackBy: trackByIndex">
            <a tabindex="0" (keyup.enter)="p.setCurrent(page.value)" (click)="p.setCurrent(page.value)" *ngIf="p.getCurrent() !== page.value">
                <span class="show-for-sr">{{ screenReaderPageLabel }} </span>
                <span>{{ (page.label === '...') ? page.label : (page.label | number:'') }}</span>
            </a>
            <ng-container *ngIf="p.getCurrent() === page.value">
              <span aria-live="polite">
                <span class="show-for-sr">{{ screenReaderCurrentLabel }} </span>
                <span>{{ (page.label === '...') ? page.label : (page.label | number:'') }}</span> 
              </span>
            </ng-container>
        </li>

        <li class="pagination-next" [class.disabled]="p.isLastPage()" *ngIf="directionLinks">
            <a tabindex="0" *ngIf="!p.isLastPage()" (keyup.enter)="p.next()" (click)="p.next()">
                 {{ nextLabel }} <span class="show-for-sr">{{ screenReaderPageLabel }}</span>
            </a>
            <span *ngIf="p.isLastPage()" aria-disabled="true">
                 {{ nextLabel }} <span class="show-for-sr">{{ screenReaderPageLabel }}</span>
            </span>
        </li>

    </ul>
    </nav>
    </pagination-template>
    `;
const DEFAULT_STYLES = `
.ngx-pagination {
  margin-left: 0;
  margin-bottom: 1rem; }
  .ngx-pagination::before, .ngx-pagination::after {
    content: ' ';
    display: table; }
  .ngx-pagination::after {
    clear: both; }
  .ngx-pagination li {
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    margin-right: 0.0625rem;
    border-radius: 0; }
  .ngx-pagination li {
    display: inline-block; }
  .ngx-pagination a,
  .ngx-pagination button {
    color: #0a0a0a; 
    display: block;
    padding: 0.1875rem 0.625rem;
    border-radius: 0; }
    .ngx-pagination a:hover,
    .ngx-pagination button:hover {
      background: #e6e6e6; }
  .ngx-pagination .current {
    padding: 0.1875rem 0.625rem;
    background: #2199e8;
    color: #fefefe;
    cursor: default; }
  .ngx-pagination .disabled {
    padding: 0.1875rem 0.625rem;
    color: #cacaca;
    cursor: default; } 
    .ngx-pagination .disabled:hover {
      background: transparent; }
  .ngx-pagination a, .ngx-pagination button {
    cursor: pointer; }

.ngx-pagination .pagination-previous a::before,
.ngx-pagination .pagination-previous.disabled::before { 
  content: '«';
  display: inline-block;
  margin-right: 0.5rem; }

.ngx-pagination .pagination-next a::after,
.ngx-pagination .pagination-next.disabled::after {
  content: '»';
  display: inline-block;
  margin-left: 0.5rem; }

.ngx-pagination .show-for-sr {
  position: absolute !important;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0); }
.ngx-pagination .small-screen {
  display: none; }
@media screen and (max-width: 601px) {
  .ngx-pagination.responsive .small-screen {
    display: inline-block; } 
  .ngx-pagination.responsive li:not(.small-screen):not(.pagination-previous):not(.pagination-next) {
    display: none; }
}
  `;

/**
 * This directive is what powers all pagination controls components, including the default one.
 * It exposes an API which is hooked up to the PaginationService to keep the PaginatePipe in sync
 * with the pagination controls.
 */
class PaginationControlsDirective {
  constructor(service, changeDetectorRef) {
    this.service = service;
    this.changeDetectorRef = changeDetectorRef;
    this.maxSize = 7;
    this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.pageBoundsCorrection = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.pages = [];
    this.changeSub = this.service.change.subscribe(id => {
      if (this.id === id) {
        this.updatePageLinks();
        this.changeDetectorRef.markForCheck();
        this.changeDetectorRef.detectChanges();
      }
    });
  }
  ngOnInit() {
    if (this.id === undefined) {
      this.id = this.service.defaultId();
    }
    this.updatePageLinks();
  }
  ngOnChanges(changes) {
    this.updatePageLinks();
  }
  ngOnDestroy() {
    this.changeSub.unsubscribe();
  }
  /**
   * Go to the previous page
   */
  previous() {
    this.checkValidId();
    this.setCurrent(this.getCurrent() - 1);
  }
  /**
   * Go to the next page
   */
  next() {
    this.checkValidId();
    this.setCurrent(this.getCurrent() + 1);
  }
  /**
   * Returns true if current page is first page
   */
  isFirstPage() {
    return this.getCurrent() === 1;
  }
  /**
   * Returns true if current page is last page
   */
  isLastPage() {
    return this.getLastPage() === this.getCurrent();
  }
  /**
   * Set the current page number.
   */
  setCurrent(page) {
    this.pageChange.emit(page);
  }
  /**
   * Get the current page number.
   */
  getCurrent() {
    return this.service.getCurrentPage(this.id);
  }
  /**
   * Returns the last page number
   */
  getLastPage() {
    let inst = this.service.getInstance(this.id);
    if (inst.totalItems < 1) {
      // when there are 0 or fewer (an error case) items, there are no "pages" as such,
      // but it makes sense to consider a single, empty page as the last page.
      return 1;
    }
    return Math.ceil(inst.totalItems / inst.itemsPerPage);
  }
  getTotalItems() {
    return this.service.getInstance(this.id).totalItems;
  }
  checkValidId() {
    if (this.service.getInstance(this.id).id == null) {
      console.warn(`PaginationControlsDirective: the specified id "${this.id}" does not match any registered PaginationInstance`);
    }
  }
  /**
   * Updates the page links and checks that the current page is valid. Should run whenever the
   * PaginationService.change stream emits a value matching the current ID, or when any of the
   * input values changes.
   */
  updatePageLinks() {
    let inst = this.service.getInstance(this.id);
    const correctedCurrentPage = this.outOfBoundCorrection(inst);
    if (correctedCurrentPage !== inst.currentPage) {
      setTimeout(() => {
        this.pageBoundsCorrection.emit(correctedCurrentPage);
        this.pages = this.createPageArray(inst.currentPage, inst.itemsPerPage, inst.totalItems, this.maxSize);
      });
    } else {
      this.pages = this.createPageArray(inst.currentPage, inst.itemsPerPage, inst.totalItems, this.maxSize);
    }
  }
  /**
   * Checks that the instance.currentPage property is within bounds for the current page range.
   * If not, return a correct value for currentPage, or the current value if OK.
   */
  outOfBoundCorrection(instance) {
    const totalPages = Math.ceil(instance.totalItems / instance.itemsPerPage);
    if (totalPages < instance.currentPage && 0 < totalPages) {
      return totalPages;
    } else if (instance.currentPage < 1) {
      return 1;
    }
    return instance.currentPage;
  }
  /**
   * Returns an array of Page objects to use in the pagination controls.
   */
  createPageArray(currentPage, itemsPerPage, totalItems, paginationRange) {
    // paginationRange could be a string if passed from attribute, so cast to number.
    paginationRange = +paginationRange;
    let pages = [];
    // Return 1 as default page number
    // Make sense to show 1 instead of empty when there are no items
    const totalPages = Math.max(Math.ceil(totalItems / itemsPerPage), 1);
    const halfWay = Math.ceil(paginationRange / 2);
    const isStart = currentPage <= halfWay;
    const isEnd = totalPages - halfWay < currentPage;
    const isMiddle = !isStart && !isEnd;
    let ellipsesNeeded = paginationRange < totalPages;
    let i = 1;
    while (i <= totalPages && i <= paginationRange) {
      let label;
      let pageNumber = this.calculatePageNumber(i, currentPage, paginationRange, totalPages);
      let openingEllipsesNeeded = i === 2 && (isMiddle || isEnd);
      let closingEllipsesNeeded = i === paginationRange - 1 && (isMiddle || isStart);
      if (ellipsesNeeded && (openingEllipsesNeeded || closingEllipsesNeeded)) {
        label = '...';
      } else {
        label = pageNumber;
      }
      pages.push({
        label: label,
        value: pageNumber
      });
      i++;
    }
    return pages;
  }
  /**
   * Given the position in the sequence of pagination links [i],
   * figure out what page number corresponds to that position.
   */
  calculatePageNumber(i, currentPage, paginationRange, totalPages) {
    let halfWay = Math.ceil(paginationRange / 2);
    if (i === paginationRange) {
      return totalPages;
    } else if (i === 1) {
      return i;
    } else if (paginationRange < totalPages) {
      if (totalPages - halfWay < currentPage) {
        return totalPages - paginationRange + i;
      } else if (halfWay < currentPage) {
        return currentPage - halfWay + i;
      } else {
        return i;
      }
    } else {
      return i;
    }
  }
}
PaginationControlsDirective.ɵfac = function PaginationControlsDirective_Factory(t) {
  return new (t || PaginationControlsDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](PaginationService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
};
PaginationControlsDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: PaginationControlsDirective,
  selectors: [["pagination-template"], ["", "pagination-template", ""]],
  inputs: {
    id: "id",
    maxSize: "maxSize"
  },
  outputs: {
    pageChange: "pageChange",
    pageBoundsCorrection: "pageBoundsCorrection"
  },
  exportAs: ["paginationApi"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaginationControlsDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'pagination-template,[pagination-template]',
      exportAs: 'paginationApi'
    }]
  }], function () {
    return [{
      type: PaginationService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }];
  }, {
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    maxSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    pageChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    pageBoundsCorrection: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();
function coerceToBoolean(input) {
  return !!input && input !== 'false';
}
/**
 * The default pagination controls component. Actually just a default implementation of a custom template.
 */
class PaginationControlsComponent {
  constructor() {
    this.maxSize = 7;
    this.previousLabel = 'Previous';
    this.nextLabel = 'Next';
    this.screenReaderPaginationLabel = 'Pagination';
    this.screenReaderPageLabel = 'page';
    this.screenReaderCurrentLabel = `You're on page`;
    this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.pageBoundsCorrection = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this._directionLinks = true;
    this._autoHide = false;
    this._responsive = false;
  }
  get directionLinks() {
    return this._directionLinks;
  }
  set directionLinks(value) {
    this._directionLinks = coerceToBoolean(value);
  }
  get autoHide() {
    return this._autoHide;
  }
  set autoHide(value) {
    this._autoHide = coerceToBoolean(value);
  }
  get responsive() {
    return this._responsive;
  }
  set responsive(value) {
    this._responsive = coerceToBoolean(value);
  }
  trackByIndex(index) {
    return index;
  }
}
PaginationControlsComponent.ɵfac = function PaginationControlsComponent_Factory(t) {
  return new (t || PaginationControlsComponent)();
};
PaginationControlsComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: PaginationControlsComponent,
  selectors: [["pagination-controls"]],
  inputs: {
    id: "id",
    maxSize: "maxSize",
    directionLinks: "directionLinks",
    autoHide: "autoHide",
    responsive: "responsive",
    previousLabel: "previousLabel",
    nextLabel: "nextLabel",
    screenReaderPaginationLabel: "screenReaderPaginationLabel",
    screenReaderPageLabel: "screenReaderPageLabel",
    screenReaderCurrentLabel: "screenReaderCurrentLabel"
  },
  outputs: {
    pageChange: "pageChange",
    pageBoundsCorrection: "pageBoundsCorrection"
  },
  decls: 4,
  vars: 4,
  consts: [["p", "paginationApi"], [3, "pageChange", "pageBoundsCorrection", "id", "maxSize"], ["role", "navigation"], ["class", "ngx-pagination", 3, "responsive", 4, "ngIf"], [1, "ngx-pagination"], ["class", "pagination-previous", 3, "disabled", 4, "ngIf"], [1, "small-screen"], [3, "current", "ellipsis", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "pagination-next", 3, "disabled", 4, "ngIf"], [1, "pagination-previous"], ["tabindex", "0", 3, "keyup.enter", "click", 4, "ngIf"], ["aria-disabled", "true", 4, "ngIf"], ["tabindex", "0", 3, "keyup.enter", "click"], [1, "show-for-sr"], ["aria-disabled", "true"], [4, "ngIf"], ["aria-live", "polite"], [1, "pagination-next"]],
  template: function PaginationControlsComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pagination-template", 1, 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function PaginationControlsComponent_Template_pagination_template_pageChange_0_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.pageChange.emit($event));
      })("pageBoundsCorrection", function PaginationControlsComponent_Template_pagination_template_pageBoundsCorrection_0_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.pageBoundsCorrection.emit($event));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PaginationControlsComponent_ul_3_Template, 6, 8, "ul", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      const p_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.id)("maxSize", ctx.maxSize);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.screenReaderPaginationLabel);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.autoHide && p_r3.pages.length <= 1));
    }
  },
  dependencies: [PaginationControlsDirective, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.DecimalPipe],
  styles: [".ngx-pagination{margin-left:0;margin-bottom:1rem}.ngx-pagination:before,.ngx-pagination:after{content:\" \";display:table}.ngx-pagination:after{clear:both}.ngx-pagination li{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;margin-right:.0625rem;border-radius:0}.ngx-pagination li{display:inline-block}.ngx-pagination a,.ngx-pagination button{color:#0a0a0a;display:block;padding:.1875rem .625rem;border-radius:0}.ngx-pagination a:hover,.ngx-pagination button:hover{background:#e6e6e6}.ngx-pagination .current{padding:.1875rem .625rem;background:#2199e8;color:#fefefe;cursor:default}.ngx-pagination .disabled{padding:.1875rem .625rem;color:#cacaca;cursor:default}.ngx-pagination .disabled:hover{background:transparent}.ngx-pagination a,.ngx-pagination button{cursor:pointer}.ngx-pagination .pagination-previous a:before,.ngx-pagination .pagination-previous.disabled:before{content:\"\\ab\";display:inline-block;margin-right:.5rem}.ngx-pagination .pagination-next a:after,.ngx-pagination .pagination-next.disabled:after{content:\"\\bb\";display:inline-block;margin-left:.5rem}.ngx-pagination .show-for-sr{position:absolute!important;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0)}.ngx-pagination .small-screen{display:none}@media screen and (max-width: 601px){.ngx-pagination.responsive .small-screen{display:inline-block}.ngx-pagination.responsive li:not(.small-screen):not(.pagination-previous):not(.pagination-next){display:none}}\n"],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaginationControlsComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'pagination-controls',
      template: DEFAULT_TEMPLATE,
      styles: [DEFAULT_STYLES],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None
    }]
  }], null, {
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    maxSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    directionLinks: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    autoHide: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    responsive: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    previousLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nextLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    screenReaderPaginationLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    screenReaderPageLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    screenReaderCurrentLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    pageChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    pageBoundsCorrection: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();
class NgxPaginationModule {}
NgxPaginationModule.ɵfac = function NgxPaginationModule_Factory(t) {
  return new (t || NgxPaginationModule)();
};
NgxPaginationModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: NgxPaginationModule
});
NgxPaginationModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  providers: [PaginationService],
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxPaginationModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule],
      declarations: [PaginatePipe, PaginationControlsComponent, PaginationControlsDirective],
      providers: [PaginationService],
      exports: [PaginatePipe, PaginationControlsComponent, PaginationControlsDirective]
    }]
  }], null, null);
})();

/*
 * Public API Surface of ngx-pagination
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=src_app_access-control_access-control-routes_ts.js.map