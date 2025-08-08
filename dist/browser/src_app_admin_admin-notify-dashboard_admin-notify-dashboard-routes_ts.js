"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_app_admin_admin-notify-dashboard_admin-notify-dashboard-routes_ts"],{

/***/ 60962:
/*!*******************************************************************************!*\
  !*** ./src/app/admin/admin-notify-dashboard/admin-notify-dashboard-routes.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ROUTES: () => (/* binding */ ROUTES)
/* harmony export */ });
/* harmony import */ var _core_breadcrumbs_i18n_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/breadcrumbs/i18n-breadcrumb.resolver */ 72059);
/* harmony import */ var _core_coar_notify_notify_info_notify_info_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/coar-notify/notify-info/notify-info.guard */ 39974);
/* harmony import */ var _core_data_feature_authorization_feature_authorization_guard_site_administrator_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/data/feature-authorization/feature-authorization-guard/site-administrator.guard */ 36329);
/* harmony import */ var _admin_notify_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-notify-dashboard.component */ 4806);
/* harmony import */ var _admin_notify_logs_admin_notify_incoming_admin_notify_incoming_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin-notify-logs/admin-notify-incoming/admin-notify-incoming.component */ 21253);
/* harmony import */ var _admin_notify_logs_admin_notify_outgoing_admin_notify_outgoing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin-notify-logs/admin-notify-outgoing/admin-notify-outgoing.component */ 13353);






const ROUTES = [{
  canActivate: [_core_data_feature_authorization_feature_authorization_guard_site_administrator_guard__WEBPACK_IMPORTED_MODULE_2__.siteAdministratorGuard, _core_coar_notify_notify_info_notify_info_guard__WEBPACK_IMPORTED_MODULE_1__.notifyInfoGuard],
  path: '',
  resolve: {
    breadcrumb: _core_breadcrumbs_i18n_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_0__.i18nBreadcrumbResolver
  },
  component: _admin_notify_dashboard_component__WEBPACK_IMPORTED_MODULE_3__.AdminNotifyDashboardComponent,
  pathMatch: 'full',
  data: {
    title: 'admin.notify.dashboard.page.title',
    breadcrumbKey: 'admin.notify.dashboard'
  }
}, {
  path: 'inbound',
  resolve: {
    breadcrumb: _core_breadcrumbs_i18n_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_0__.i18nBreadcrumbResolver
  },
  component: _admin_notify_logs_admin_notify_incoming_admin_notify_incoming_component__WEBPACK_IMPORTED_MODULE_4__.AdminNotifyIncomingComponent,
  canActivate: [_core_data_feature_authorization_feature_authorization_guard_site_administrator_guard__WEBPACK_IMPORTED_MODULE_2__.siteAdministratorGuard, _core_coar_notify_notify_info_notify_info_guard__WEBPACK_IMPORTED_MODULE_1__.notifyInfoGuard],
  data: {
    title: 'admin.notify.dashboard.page.title',
    breadcrumbKey: 'admin.notify.dashboard'
  }
}, {
  path: 'outbound',
  resolve: {
    breadcrumb: _core_breadcrumbs_i18n_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_0__.i18nBreadcrumbResolver
  },
  component: _admin_notify_logs_admin_notify_outgoing_admin_notify_outgoing_component__WEBPACK_IMPORTED_MODULE_5__.AdminNotifyOutgoingComponent,
  canActivate: [_core_data_feature_authorization_feature_authorization_guard_site_administrator_guard__WEBPACK_IMPORTED_MODULE_2__.siteAdministratorGuard, _core_coar_notify_notify_info_notify_info_guard__WEBPACK_IMPORTED_MODULE_1__.notifyInfoGuard],
  data: {
    title: 'admin.notify.dashboard.page.title',
    breadcrumbKey: 'admin.notify.dashboard'
  }
}];

/***/ }),

/***/ 4806:
/*!**********************************************************************************!*\
  !*** ./src/app/admin/admin-notify-dashboard/admin-notify-dashboard.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminNotifyDashboardComponent: () => (/* binding */ AdminNotifyDashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 83485);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 80489);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var _config_app_config_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../config/app-config.interface */ 82640);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/shared/operators */ 55757);
/* harmony import */ var _core_shared_search_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/shared/search/search.service */ 55180);
/* harmony import */ var _core_shared_search_search_configuration_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/shared/search/search-configuration.service */ 68611);
/* harmony import */ var _my_dspace_page_my_dspace_configuration_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../my-dspace-page/my-dspace-configuration.service */ 787);
/* harmony import */ var _shared_pagination_pagination_component_options_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/pagination/pagination-component-options.model */ 23401);
/* harmony import */ var _shared_search_models_paginated_search_options_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/search/models/paginated-search-options.model */ 33550);
/* harmony import */ var _admin_notify_metrics_admin_notify_metrics_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin-notify-metrics/admin-notify-metrics.component */ 81827);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 90310);
















const _c0 = () => ({
  view: "table"
});
function AdminNotifyDashboardComponent_ds_admin_notify_metrics_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "ds-admin-notify-metrics", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "async");
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("boxesConfig", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 1, ctx_r0.notifyMetricsRows$));
  }
}
/**
 * Component used for visual representation and search of LDN messages for Admins
 */
class AdminNotifyDashboardComponent {
  constructor(appConfig, searchService) {
    this.appConfig = appConfig;
    this.searchService = searchService;
    this.notifyMetricsRows$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.BehaviorSubject([]);
    this.singleResultOptions = Object.assign(new _shared_pagination_pagination_component_options_model__WEBPACK_IMPORTED_MODULE_5__.PaginationComponentOptions(), {
      id: 'single-result-options',
      pageSize: 1
    });
  }
  ngOnInit() {
    this.metricsConfig = this.appConfig.notifyMetrics;
    const mertricsRowsConfigurations = this.metricsConfig.map(row => row.boxes).map(boxes => boxes.map(box => box.config).filter(config => !!config));
    const flatConfigurations = [].concat(...mertricsRowsConfigurations.map(config => config));
    const searchConfigurations = flatConfigurations.map(config => Object.assign(new _shared_search_models_paginated_search_options_model__WEBPACK_IMPORTED_MODULE_6__.PaginatedSearchOptions({}), {
      configuration: config,
      pagination: this.singleResultOptions
    }));
    (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.forkJoin)(searchConfigurations.map(config => this.searchService.search(config).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_1__.getFirstCompletedRemoteData)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(response => this.mapSearchObjectsToMetricsBox(config.configuration, response.payload))))).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(metricBoxes => this.mapUpdatedBoxesToMetricsRows(metricBoxes))).subscribe(metricBoxes => {
      this.notifyMetricsRows$.next(metricBoxes);
    });
  }
  /**
   * Function to map received SearchObjects to notify boxes config
   *
   * @param searchObject The object to map
   * @private
   */
  mapSearchObjectsToMetricsBox(configuration, searchObject) {
    const count = searchObject.pageInfo.totalElements;
    const metricsBoxes = [].concat(...this.metricsConfig.map(config => config.boxes));
    return {
      ...metricsBoxes.find(box => box.config === configuration),
      count
    };
  }
  /**
   * Function to map updated boxes with count to each row of the configuration
   *
   * @param boxesWithCount The object to map
   * @private
   */
  mapUpdatedBoxesToMetricsRows(boxesWithCount) {
    return this.metricsConfig.map(row => {
      return {
        ...row,
        boxes: row.boxes.map(rowBox => boxesWithCount.find(boxWithCount => boxWithCount.config === rowBox.config))
      };
    });
  }
  static {
    this.ɵfac = function AdminNotifyDashboardComponent_Factory(t) {
      return new (t || AdminNotifyDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_config_app_config_interface__WEBPACK_IMPORTED_MODULE_0__.APP_CONFIG), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_shared_search_search_service__WEBPACK_IMPORTED_MODULE_2__.SearchService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
      type: AdminNotifyDashboardComponent,
      selectors: [["ds-admin-notify-dashboard"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵProvidersFeature"]([{
        provide: _my_dspace_page_my_dspace_configuration_service__WEBPACK_IMPORTED_MODULE_4__.SEARCH_CONFIG_SERVICE,
        useClass: _core_shared_search_search_configuration_service__WEBPACK_IMPORTED_MODULE_3__.SearchConfigurationService
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵStandaloneFeature"]],
      decls: 26,
      vars: 24,
      consts: [[1, "container"], [1, "row"], [1, "col-12"], [1, "border-bottom", "pb-2"], [1, "my-4"], [1, "nav", "nav-tabs"], [1, "nav-item"], [1, "nav-link", "active"], [1, "nav-link", 3, "routerLink", "queryParams"], [1, "mt-2"], [3, "boxesConfig", 4, "ngIf"], [3, "boxesConfig"]],
      template: function AdminNotifyDashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](8, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div")(10, "ul", 5)(11, "li", 6)(12, "a", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](14, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "li", 6)(16, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](18, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "li", 6)(20, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](22, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](24, AdminNotifyDashboardComponent_ds_admin_notify_metrics_24_Template, 2, 3, "ds-admin-notify-metrics", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](25, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          let tmp_9_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 10, "admin-notify-dashboard.title"));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](8, 12, "admin-notify-dashboard.description"));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](14, 14, "admin-notify-dashboard.metrics"));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", "inbound")("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](22, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](18, 16, "admin.notify.dashboard.inbound-logs"));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", "outbound")("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](23, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](22, 18, "admin.notify.dashboard.outbound-logs"));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (tmp_9_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](25, 20, ctx.notifyMetricsRows$)) == null ? null : tmp_9_0.length);
        }
      },
      dependencies: [_admin_notify_metrics_admin_notify_metrics_component__WEBPACK_IMPORTED_MODULE_7__.AdminNotifyMetricsComponent, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_13__.AsyncPipe],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 21253:
/*!*************************************************************************************************************************!*\
  !*** ./src/app/admin/admin-notify-dashboard/admin-notify-logs/admin-notify-incoming/admin-notify-incoming.component.ts ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminNotifyIncomingComponent: () => (/* binding */ AdminNotifyIncomingComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var _core_shared_search_search_configuration_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/shared/search/search-configuration.service */ 68611);
/* harmony import */ var _my_dspace_page_my_dspace_configuration_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../my-dspace-page/my-dspace-configuration.service */ 787);
/* harmony import */ var _admin_notify_logs_result_admin_notify_logs_result_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../admin-notify-logs-result/admin-notify-logs-result.component */ 3405);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 90310);








const _c0 = () => ({
  view: "table",
  configuration: "NOTIFY.outgoing"
});
class AdminNotifyIncomingComponent {
  constructor(searchConfigService) {
    this.searchConfigService = searchConfigService;
  }
  static {
    this.ɵfac = function AdminNotifyIncomingComponent_Factory(t) {
      return new (t || AdminNotifyIncomingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_my_dspace_page_my_dspace_configuration_service__WEBPACK_IMPORTED_MODULE_1__.SEARCH_CONFIG_SERVICE));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: AdminNotifyIncomingComponent,
      selectors: [["ds-admin-notify-incoming"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{
        provide: _my_dspace_page_my_dspace_configuration_service__WEBPACK_IMPORTED_MODULE_1__.SEARCH_CONFIG_SERVICE,
        useClass: _core_shared_search_search_configuration_service__WEBPACK_IMPORTED_MODULE_0__.SearchConfigurationService
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
      decls: 22,
      vars: 17,
      consts: [[1, "container"], [1, "row"], [1, "col-12"], [1, "border-bottom", "pb-2"], [1, "nav", "nav-tabs"], [1, "nav-item"], [1, "nav-link", 3, "routerLink"], [1, "nav-link", "active"], [1, "nav-link", 3, "routerLink", "queryParams"], [3, "defaultConfiguration"]],
      template: function AdminNotifyIncomingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div")(7, "div")(8, "ul", 4)(9, "li", 5)(10, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "li", 5)(14, "a", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](16, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "li", 5)(18, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](20, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "ds-admin-notify-logs-result", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 8, "admin-notify-dashboard.title"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", "../");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](12, 10, "admin-notify-dashboard.metrics"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](16, 12, "admin.notify.dashboard.inbound-logs"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", "../outbound")("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](16, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](20, 14, "admin.notify.dashboard.outbound-logs"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("defaultConfiguration", "NOTIFY.incoming");
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _admin_notify_logs_result_admin_notify_logs_result_component__WEBPACK_IMPORTED_MODULE_2__.AdminNotifyLogsResultComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 3405:
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/admin/admin-notify-dashboard/admin-notify-logs/admin-notify-logs-result/admin-notify-logs-result.component.ts ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminNotifyLogsResultComponent: () => (/* binding */ AdminNotifyLogsResultComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var _core_shared_context_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/shared/context.model */ 26292);
/* harmony import */ var _core_shared_search_search_configuration_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/shared/search/search-configuration.service */ 68611);
/* harmony import */ var _core_shared_view_mode_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/shared/view-mode.model */ 78448);
/* harmony import */ var _my_dspace_page_my_dspace_configuration_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../my-dspace-page/my-dspace-configuration.service */ 787);
/* harmony import */ var _shared_search_search_labels_search_labels_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/search/search-labels/search-labels.component */ 41073);
/* harmony import */ var _shared_search_themed_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/search/themed-search.component */ 54992);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 14354);














function AdminNotifyLogsResultComponent_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AdminNotifyLogsResultComponent_button_8_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.resetDefaultConfiguration());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, " \u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 3, "admin-notify-logs." + _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, ctx_r1.selectedSearchConfig$)), " ");
  }
}
/**
 * Component for visualization of search page and related results for the logs of the Notify dashboard
 */
class AdminNotifyLogsResultComponent {
  constructor(searchConfigService, router, route) {
    this.searchConfigService = searchConfigService;
    this.router = router;
    this.route = route;
    this.context = _core_shared_context_model__WEBPACK_IMPORTED_MODULE_0__.Context.CoarNotify;
  }
  ngOnInit() {
    this.selectedSearchConfig$ = this.searchConfigService.getCurrentConfiguration(this.defaultConfiguration);
    this.isInbound$ = this.selectedSearchConfig$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(config => config.startsWith('NOTIFY.incoming')));
  }
  /**
   * Reset route state to default configuration
   */
  resetDefaultConfiguration() {
    //Idle navigation to trigger rendering of result on same page
    this.router.navigateByUrl('/', {
      skipLocationChange: true
    }).then(() => {
      this.router.navigate([this.getResolvedUrl(this.route.snapshot)], {
        queryParams: {
          configuration: this.defaultConfiguration,
          view: _core_shared_view_mode_model__WEBPACK_IMPORTED_MODULE_2__.ViewMode.Table
        }
      });
    });
  }
  /**
   * Get resolved url from route
   *
   * @param route url path
   * @returns url path
   */
  getResolvedUrl(route) {
    return route.pathFromRoot.map(v => v.url.map(segment => segment.toString()).join('/')).join('/');
  }
  static {
    this.ɵfac = function AdminNotifyLogsResultComponent_Factory(t) {
      return new (t || AdminNotifyLogsResultComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_my_dspace_page_my_dspace_configuration_service__WEBPACK_IMPORTED_MODULE_3__.SEARCH_CONFIG_SERVICE), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: AdminNotifyLogsResultComponent,
      selectors: [["ds-admin-notify-logs-result"]],
      inputs: {
        defaultConfiguration: "defaultConfiguration"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵProvidersFeature"]([{
        provide: _my_dspace_page_my_dspace_configuration_service__WEBPACK_IMPORTED_MODULE_3__.SEARCH_CONFIG_SERVICE,
        useClass: _core_shared_search_search_configuration_service__WEBPACK_IMPORTED_MODULE_1__.SearchConfigurationService
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵStandaloneFeature"]],
      decls: 14,
      vars: 15,
      consts: [[1, "container", "my-4"], [1, "row"], [1, "col-12", "col-md-3", "text-left", "h4"], [1, "col-md-9"], [1, "h4"], ["class", "badge badge-primary mr-1 mb-1", 3, "click", 4, "ngIf"], [3, "inPlaceSearch"], [3, "configuration", "showViewModes", "searchEnabled", "context"], [1, "badge", "badge-primary", "mr-1", "mb-1", 3, "click"]],
      template: function AdminNotifyLogsResultComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 3)(7, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, AdminNotifyLogsResultComponent_button_8_Template, 6, 5, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](9, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "ds-search-labels", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "ds-search", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](13, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 9, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 7, ctx.isInbound$) ? "admin.notify.dashboard.inbound" : "admin.notify.dashboard.outbound"));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](9, 11, ctx.selectedSearchConfig$) !== ctx.defaultConfiguration);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("inPlaceSearch", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("configuration", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](13, 13, ctx.selectedSearchConfig$))("showViewModes", false)("searchEnabled", false)("context", ctx.context);
        }
      },
      dependencies: [_shared_search_search_labels_search_labels_component__WEBPACK_IMPORTED_MODULE_4__.SearchLabelsComponent, _shared_search_themed_search_component__WEBPACK_IMPORTED_MODULE_5__.ThemedSearchComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 13353:
/*!*************************************************************************************************************************!*\
  !*** ./src/app/admin/admin-notify-dashboard/admin-notify-logs/admin-notify-outgoing/admin-notify-outgoing.component.ts ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminNotifyOutgoingComponent: () => (/* binding */ AdminNotifyOutgoingComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var _core_shared_search_search_configuration_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/shared/search/search-configuration.service */ 68611);
/* harmony import */ var _my_dspace_page_my_dspace_configuration_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../my-dspace-page/my-dspace-configuration.service */ 787);
/* harmony import */ var _admin_notify_logs_result_admin_notify_logs_result_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../admin-notify-logs-result/admin-notify-logs-result.component */ 3405);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 90310);








const _c0 = () => ({
  view: "table",
  configuration: "NOTIFY.incoming"
});
class AdminNotifyOutgoingComponent {
  constructor(searchConfigService) {
    this.searchConfigService = searchConfigService;
  }
  static {
    this.ɵfac = function AdminNotifyOutgoingComponent_Factory(t) {
      return new (t || AdminNotifyOutgoingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_my_dspace_page_my_dspace_configuration_service__WEBPACK_IMPORTED_MODULE_1__.SEARCH_CONFIG_SERVICE));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: AdminNotifyOutgoingComponent,
      selectors: [["ds-admin-notify-outgoing"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{
        provide: _my_dspace_page_my_dspace_configuration_service__WEBPACK_IMPORTED_MODULE_1__.SEARCH_CONFIG_SERVICE,
        useClass: _core_shared_search_search_configuration_service__WEBPACK_IMPORTED_MODULE_0__.SearchConfigurationService
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
      decls: 22,
      vars: 17,
      consts: [[1, "container"], [1, "row"], [1, "col-12"], [1, "border-bottom", "pb-2"], [1, "nav", "nav-tabs"], [1, "nav-item"], [1, "nav-link", 3, "routerLink"], [1, "nav-link", 3, "routerLink", "queryParams"], [1, "nav-link", "active"], [3, "defaultConfiguration"]],
      template: function AdminNotifyOutgoingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div")(7, "div")(8, "ul", 4)(9, "li", 5)(10, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "li", 5)(14, "a", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](16, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "li", 5)(18, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](20, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "ds-admin-notify-logs-result", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 8, "admin-notify-dashboard.title"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", "../");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](12, 10, "admin-notify-dashboard.metrics"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", "../inbound")("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](16, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](16, 12, "admin.notify.dashboard.inbound-logs"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](20, 14, "admin.notify.dashboard.outbound-logs"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("defaultConfiguration", "NOTIFY.outgoing");
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _admin_notify_logs_result_admin_notify_logs_result_component__WEBPACK_IMPORTED_MODULE_2__.AdminNotifyLogsResultComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 81827:
/*!*****************************************************************************************************!*\
  !*** ./src/app/admin/admin-notify-dashboard/admin-notify-metrics/admin-notify-metrics.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminNotifyMetricsComponent: () => (/* binding */ AdminNotifyMetricsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var _core_shared_view_mode_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/shared/view-mode.model */ 78448);
/* harmony import */ var _shared_notification_box_notification_box_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/notification-box/notification-box.component */ 65352);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 14354);








function AdminNotifyMetricsComponent_div_0_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5)(1, "ds-notification-box", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selectedBoxConfig", function AdminNotifyMetricsComponent_div_0_div_5_Template_ds_notification_box_selectedBoxConfig_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.navigateToSelectedSearchConfig($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const box_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("boxConfig", box_r3);
  }
}
function AdminNotifyMetricsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1)(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, AdminNotifyMetricsComponent_div_0_div_5_Template, 2, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 2, row_r4.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", row_r4.boxes);
  }
}
/**
 * Component used to display the number of notification for each configured box in the notifyMetrics section
 */
class AdminNotifyMetricsComponent {
  constructor(router) {
    this.router = router;
    this.incomingConfiguration = 'NOTIFY.incoming';
    this.involvedItemsSuffix = 'involvedItems';
    this.inboundPath = '/inbound';
    this.outboundPath = '/outbound';
    this.adminSearchPath = '/admin/search';
  }
  navigateToSelectedSearchConfig(searchConfig) {
    const isRelatedItemsConfig = searchConfig.endsWith(this.involvedItemsSuffix);
    if (isRelatedItemsConfig) {
      this.router.navigate([this.adminSearchPath], {
        queryParams: {
          configuration: searchConfig,
          view: _core_shared_view_mode_model__WEBPACK_IMPORTED_MODULE_0__.ViewMode.ListElement
        }
      });
      return;
    }
    const isIncomingConfig = searchConfig.startsWith(this.incomingConfiguration);
    const selectedPath = isIncomingConfig ? this.inboundPath : this.outboundPath;
    this.router.navigate([`${this.router.url}${selectedPath}`], {
      queryParams: {
        configuration: searchConfig,
        view: _core_shared_view_mode_model__WEBPACK_IMPORTED_MODULE_0__.ViewMode.Table
      }
    });
  }
  static {
    this.ɵfac = function AdminNotifyMetricsComponent_Factory(t) {
      return new (t || AdminNotifyMetricsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: AdminNotifyMetricsComponent,
      selectors: [["ds-admin-notify-metrics"]],
      inputs: {
        boxesConfig: "boxesConfig"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 1,
      vars: 1,
      consts: [["class", "mb-5", 4, "ngFor", "ngForOf"], [1, "mb-5"], [1, "mb-2"], [1, "row", "justify-content-between"], ["class", "col-sm", 4, "ngFor", "ngForOf"], [1, "col-sm"], [3, "selectedBoxConfig", "boxConfig"]],
      template: function AdminNotifyMetricsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, AdminNotifyMetricsComponent_div_0_Template, 6, 4, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.boxesConfig);
        }
      },
      dependencies: [_shared_notification_box_notification_box_component__WEBPACK_IMPORTED_MODULE_1__.NotificationBoxComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 65352:
/*!***********************************************************************!*\
  !*** ./src/app/shared/notification-box/notification-box.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationBoxComponent: () => (/* binding */ NotificationBoxComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 50694);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var _admin_admin_notify_dashboard_models_admin_notify_message_search_result_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../admin/admin-notify-dashboard/models/admin-notify-message-search-result.model */ 40887);
/* harmony import */ var _core_shared_view_mode_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/shared/view-mode.model */ 78448);
/* harmony import */ var _hover_class_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hover-class.directive */ 59458);
/* harmony import */ var _object_collection_shared_listable_object_listable_object_decorator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../object-collection/shared/listable-object/listable-object.decorator */ 81569);










const _c0 = a0 => ({
  "background-color": a0
});
const _c1 = a0 => ({
  "color": a0
});
function NotificationBoxComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NotificationBoxComponent_div_0_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.onClick(ctx_r1.boxConfig));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2)(3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](10, _c0, ctx_r1.boxConfig.color))("dsHoverClass", "shadow-lg")("title", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 6, ctx_r1.boxConfig.description));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](12, _c1, ctx_r1.boxConfig.textColor));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"]((tmp_5_0 = ctx_r1.boxConfig.count) !== null && tmp_5_0 !== undefined ? tmp_5_0 : 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 8, ctx_r1.boxConfig.title));
  }
}
let NotificationBoxComponent = class NotificationBoxComponent {
  constructor() {
    this.selectedBoxConfig = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
  }
  onClick(boxConfig) {
    this.selectedBoxConfig.emit(boxConfig.config);
  }
  static {
    this.ɵfac = function NotificationBoxComponent_Factory(t) {
      return new (t || NotificationBoxComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: NotificationBoxComponent,
      selectors: [["ds-notification-box"]],
      inputs: {
        boxConfig: "boxConfig"
      },
      outputs: {
        selectedBoxConfig: "selectedBoxConfig"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
      decls: 1,
      vars: 1,
      consts: [["role", "button", "class", "w-100 h-100 pt-4 pb-3 px-2 box-container", 3, "ngStyle", "dsHoverClass", "title", "click", 4, "ngIf"], ["role", "button", 1, "w-100", "h-100", "pt-4", "pb-3", "px-2", "box-container", 3, "click", "ngStyle", "dsHoverClass", "title"], [1, "d-flex", "flex-column", "justify-content-center", "align-items-center", 3, "ngStyle"], [1, "mb-3", "font-weight-bold", "box-counter"], [1, "font-weight-bold", "d-flex", "justify-content-center", "w-100"]],
      template: function NotificationBoxComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, NotificationBoxComponent_div_0_Template, 8, 14, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.boxConfig);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgStyle, _hover_class_directive__WEBPACK_IMPORTED_MODULE_2__.HoverClassDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n.box-container[_ngcontent-%COMP%] {\n  min-width: max-content;\n}\n\n.box-counter[_ngcontent-%COMP%] {\n  font-size: calc(var(--bs-font-size-lg) * 1.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmaWNhdGlvbi1ib3guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQTtFQUNFLHNCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSw2Q0FBQTtBQUVGIiwiZmlsZSI6Im5vdGlmaWNhdGlvbi1ib3guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqL1xuLmJveC1jb250YWluZXIge1xuICBtaW4td2lkdGg6IG1heC1jb250ZW50O1xufVxuLmJveC1jb3VudGVyIHtcbiAgZm9udC1zaXplOiBjYWxjKHZhcigtLWJzLWZvbnQtc2l6ZS1sZykgKiAxLjUpO1xufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL25vdGlmaWNhdGlvbi1ib3gvbm90aWZpY2F0aW9uLWJveC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBO0VBQ0Usc0JBQUE7QUFDRjs7QUFDQTtFQUNFLDZDQUFBO0FBRUY7QUFDQSxneUJBQWd5QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovXG4uYm94LWNvbnRhaW5lciB7XG4gIG1pbi13aWR0aDogbWF4LWNvbnRlbnQ7XG59XG4uYm94LWNvdW50ZXIge1xuICBmb250LXNpemU6IGNhbGModmFyKC0tYnMtZm9udC1zaXplLWxnKSAqIDEuNSk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
};
NotificationBoxComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_object_collection_shared_listable_object_listable_object_decorator__WEBPACK_IMPORTED_MODULE_3__.listableObjectComponent)(_admin_admin_notify_dashboard_models_admin_notify_message_search_result_model__WEBPACK_IMPORTED_MODULE_0__.AdminNotifySearchResult, _core_shared_view_mode_model__WEBPACK_IMPORTED_MODULE_1__.ViewMode.ListElement)], NotificationBoxComponent);


/***/ })

}]);
//# sourceMappingURL=src_app_admin_admin-notify-dashboard_admin-notify-dashboard-routes_ts.js.map