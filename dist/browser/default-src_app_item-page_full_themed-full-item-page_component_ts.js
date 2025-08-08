(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["default-src_app_item-page_full_themed-full-item-page_component_ts"],{

/***/ 69380:
/*!******************************************************************!*\
  !*** ./src/app/core/data/notify-services-status-data.service.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotifyRequestsStatusDataService: () => (/* binding */ NotifyRequestsStatusDataService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 6663);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 78374);
/* harmony import */ var _cache_builders_remote_data_build_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cache/builders/remote-data-build.service */ 76799);
/* harmony import */ var _cache_object_cache_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cache/object-cache.service */ 41684);
/* harmony import */ var _shared_hal_endpoint_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/hal-endpoint.service */ 4910);
/* harmony import */ var _base_identifiable_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base/identifiable-data.service */ 63897);
/* harmony import */ var _request_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./request.models */ 44446);
/* harmony import */ var _request_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./request.service */ 32473);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 90310);












class NotifyRequestsStatusDataService extends _base_identifiable_data_service__WEBPACK_IMPORTED_MODULE_3__.IdentifiableDataService {
  constructor(requestService, rdbService, objectCache, halService) {
    super('notifyrequests', requestService, rdbService, objectCache, halService);
    this.requestService = requestService;
    this.rdbService = rdbService;
    this.objectCache = objectCache;
    this.halService = halService;
  }
  /**
   * Retrieves the status of notify requests for a specific item.
   * @param itemUuid The UUID of the item.
   * @returns An Observable that emits the remote data containing the notify requests status.
   */
  getNotifyRequestsStatus(itemUuid) {
    const href$ = this.getEndpoint().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(url => url + '/' + itemUuid));
    href$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.take)(1)).subscribe(url => {
      const request = new _request_models__WEBPACK_IMPORTED_MODULE_4__.GetRequest(this.requestService.generateRequestId(), url);
      this.requestService.send(request, true);
    });
    return this.rdbService.buildFromHref(href$);
  }
  static {
    this.ɵfac = function NotifyRequestsStatusDataService_Factory(t) {
      return new (t || NotifyRequestsStatusDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_request_service__WEBPACK_IMPORTED_MODULE_5__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_cache_builders_remote_data_build_service__WEBPACK_IMPORTED_MODULE_0__.RemoteDataBuildService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_cache_object_cache_service__WEBPACK_IMPORTED_MODULE_1__.ObjectCacheService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_shared_hal_endpoint_service__WEBPACK_IMPORTED_MODULE_2__.HALEndpointService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
      token: NotifyRequestsStatusDataService,
      factory: NotifyRequestsStatusDataService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 38308:
/*!*******************************************************!*\
  !*** ./src/app/core/data/signposting-data.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignpostingDataService: () => (/* binding */ SignpostingDataService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 17796);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 60494);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var _config_app_config_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../config/app-config.interface */ 82640);
/* harmony import */ var _dspace_rest_dspace_rest_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dspace-rest/dspace-rest.service */ 53778);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 90310);






/**
 * Service responsible for handling requests related to the Signposting endpoint
 */
class SignpostingDataService {
  constructor(appConfig, restService) {
    this.appConfig = appConfig;
    this.restService = restService;
  }
  /**
   * Retrieve the list of signposting links related to the given resource's id
   *
   * @param uuid
   */
  getLinks(uuid) {
    const baseUrl = `${this.appConfig.rest.baseUrl}`;
    return this.restService.get(`${baseUrl}/signposting/links/${uuid}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(err => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)([]);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(res => res.statusCode === 200 ? res.payload : []));
  }
  static {
    this.ɵfac = function SignpostingDataService_Factory(t) {
      return new (t || SignpostingDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_config_app_config_interface__WEBPACK_IMPORTED_MODULE_0__.APP_CONFIG), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_dspace_rest_dspace_rest_service__WEBPACK_IMPORTED_MODULE_1__.DspaceRestService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
      token: SignpostingDataService,
      factory: SignpostingDataService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 97042:
/*!***********************************************************!*\
  !*** ./src/app/item-page/alerts/item-alerts.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ItemAlertsComponent: () => (/* binding */ ItemAlertsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 6663);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 27639);
/* harmony import */ var src_app_core_shared_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/shared/operators */ 55757);
/* harmony import */ var _core_data_feature_authorization_authorization_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/data/feature-authorization/authorization-data.service */ 3675);
/* harmony import */ var _core_data_feature_authorization_feature_id__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/data/feature-authorization/feature-id */ 3970);
/* harmony import */ var _core_shared_item_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/shared/item.model */ 88318);
/* harmony import */ var _core_submission_correctiontype_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/submission/correctiontype-data.service */ 75447);
/* harmony import */ var _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/alert/alert.component */ 16292);
/* harmony import */ var _shared_alert_alert_type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/alert/alert-type */ 47978);
/* harmony import */ var _shared_dso_page_dso_withdrawn_reinstate_service_dso_withdrawn_reinstate_modal_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/dso-page/dso-withdrawn-reinstate-service/dso-withdrawn-reinstate-modal.service */ 60833);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 90310);


















function ItemAlertsComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "ds-alert", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("type", ctx_r0.AlertTypeEnum.Warning)("content", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 2, "item.alerts.private"));
  }
}
function ItemAlertsComponent_div_2_a_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ItemAlertsComponent_div_2_a_10_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r0.openReinstateModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "item.alerts.reinstate-request"));
  }
}
function ItemAlertsComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 4)(1, "ds-alert", 5)(2, "div", 6)(3, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 8)(7, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, ItemAlertsComponent_div_2_a_10_Template, 3, 3, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](11, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("type", ctx_r0.AlertTypeEnum.Warning);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 4, "item.alerts.withdrawn"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](9, 6, "404.link.home-page"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](11, 8, ctx_r0.showReinstateButton$));
  }
}
/**
 * Component displaying alerts for an item
 */
class ItemAlertsComponent {
  constructor(authService, dsoWithdrawnReinstateModalService, correctionTypeDataService) {
    this.authService = authService;
    this.dsoWithdrawnReinstateModalService = dsoWithdrawnReinstateModalService;
    this.correctionTypeDataService = correctionTypeDataService;
    /**
     * The AlertType enumeration
     * @type {AlertType}
     */
    this.AlertTypeEnum = _shared_alert_alert_type__WEBPACK_IMPORTED_MODULE_6__.AlertType;
  }
  ngOnChanges(changes) {
    if (changes.item?.currentValue.withdrawn && this.showReinstateButton$) {
      this.showReinstateButton$ = this.shouldShowReinstateButton();
    }
  }
  /**
   * Determines whether to show the reinstate button.
   * The button is shown if the user is not an admin and the item has a reinstate request.
   * @returns An Observable that emits a boolean value indicating whether to show the reinstate button.
   */
  shouldShowReinstateButton() {
    const correction$ = this.correctionTypeDataService.findByItem(this.item.uuid, true).pipe((0,src_app_core_shared_operators__WEBPACK_IMPORTED_MODULE_0__.getFirstCompletedRemoteData)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.map)(correctionTypeRD => correctionTypeRD.hasSucceeded ? correctionTypeRD.payload.page : []));
    const isAdmin$ = this.authService.isAuthorized(_core_data_feature_authorization_feature_id__WEBPACK_IMPORTED_MODULE_2__.FeatureID.AdministratorOf);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.combineLatest)([isAdmin$, correction$]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.map)(([isAdmin, correction]) => {
      return !isAdmin && correction.some(correctionType => correctionType.topic === _shared_dso_page_dso_withdrawn_reinstate_service_dso_withdrawn_reinstate_modal_service__WEBPACK_IMPORTED_MODULE_7__.REQUEST_REINSTATE);
    }));
  }
  /**
   * Opens the reinstate modal for the item.
   */
  openReinstateModal() {
    this.dsoWithdrawnReinstateModalService.openCreateWithdrawnReinstateModal(this.item, 'request-reinstate', this.item.isArchived);
  }
  static {
    this.ɵfac = function ItemAlertsComponent_Factory(t) {
      return new (t || ItemAlertsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_data_feature_authorization_authorization_data_service__WEBPACK_IMPORTED_MODULE_1__.AuthorizationDataService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_dso_page_dso_withdrawn_reinstate_service_dso_withdrawn_reinstate_modal_service__WEBPACK_IMPORTED_MODULE_7__.DsoWithdrawnReinstateModalService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_submission_correctiontype_data_service__WEBPACK_IMPORTED_MODULE_4__.CorrectionTypeDataService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
      type: ItemAlertsComponent,
      selectors: [["ds-base-item-alerts"]],
      inputs: {
        item: "item"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵStandaloneFeature"]],
      decls: 3,
      vars: 2,
      consts: [["class", "private-warning", 4, "ngIf"], ["class", "withdrawn-warning", 4, "ngIf"], [1, "private-warning"], [3, "type", "content"], [1, "withdrawn-warning"], [3, "type"], [1, "d-flex", "justify-content-between", "flex-wrap"], [1, "align-self-center"], [1, "gap-2", "d-flex"], ["routerLink", "/home", 1, "btn", "btn-primary", "btn-sm"], ["class", "btn btn-primary btn-sm", 3, "click", 4, "ngIf"], [1, "btn", "btn-primary", "btn-sm", 3, "click"]],
      template: function ItemAlertsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, ItemAlertsComponent_div_1_Template, 3, 4, "div", 0)(2, ItemAlertsComponent_div_2_Template, 12, 10, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.item && !ctx.item.isDiscoverable);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.item && ctx.item.isWithdrawn);
        }
      },
      dependencies: [_shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_5__.AlertComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslatePipe, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_11__.AsyncPipe],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW0tYWxlcnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBIiwiZmlsZSI6Iml0ZW0tYWxlcnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi8iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaXRlbS1wYWdlL2FsZXJ0cy9pdGVtLWFsZXJ0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBLDRqQkFBNGpCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi8iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 9130:
/*!******************************************************************!*\
  !*** ./src/app/item-page/alerts/themed-item-alerts.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemedItemAlertsComponent: () => (/* binding */ ThemedItemAlertsComponent)
/* harmony export */ });
/* harmony import */ var _core_shared_item_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/shared/item.model */ 88318);
/* harmony import */ var _shared_theme_support_themed_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/theme-support/themed.component */ 8886);
/* harmony import */ var _item_alerts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./item-alerts.component */ 97042);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 90310);




const _c0 = ["*"];
function ThemedItemAlertsComponent_ng_template_0_Template(rf, ctx) {}
/**
 * Themed wrapper for {@link ItemAlertsComponent}
 */
class ThemedItemAlertsComponent extends _shared_theme_support_themed_component__WEBPACK_IMPORTED_MODULE_1__.ThemedComponent {
  constructor() {
    super(...arguments);
    this.inAndOutputNames = ['item'];
  }
  getComponentName() {
    return 'ItemAlertsComponent';
  }
  importThemedComponent(themeName) {
    return __webpack_require__(42176)(`./${themeName}/app/item-page/alerts/item-alerts.component`);
  }
  importUnthemedComponent() {
    return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./item-alerts.component */ 97042));
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵThemedItemAlertsComponent_BaseFactory;
      return function ThemedItemAlertsComponent_Factory(t) {
        return (ɵThemedItemAlertsComponent_BaseFactory || (ɵThemedItemAlertsComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](ThemedItemAlertsComponent)))(t || ThemedItemAlertsComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: ThemedItemAlertsComponent,
      selectors: [["ds-item-alerts"]],
      inputs: {
        item: "item"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
      ngContentSelectors: _c0,
      decls: 5,
      vars: 0,
      consts: [["vcr", ""], ["content", ""]],
      template: function ThemedItemAlertsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ThemedItemAlertsComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
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

/***/ 14826:
/*!*********************************************************************************************!*\
  !*** ./src/app/item-page/full/field-components/file-section/full-file-section.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FullFileSectionComponent: () => (/* binding */ FullFileSectionComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 84975);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 21252);
/* harmony import */ var src_config_app_config_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/config/app-config.interface */ 82640);
/* harmony import */ var _core_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/breadcrumbs/dso-name.service */ 96526);
/* harmony import */ var _core_data_bitstream_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/data/bitstream-data.service */ 42578);
/* harmony import */ var _core_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/pagination/pagination.service */ 76896);
/* harmony import */ var _core_shared_item_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/shared/item.model */ 88318);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/empty.util */ 82777);
/* harmony import */ var _shared_file_download_link_themed_file_download_link_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/file-download-link/themed-file-download-link.component */ 28836);
/* harmony import */ var _shared_metadata_field_wrapper_metadata_field_wrapper_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/metadata-field-wrapper/metadata-field-wrapper.component */ 79222);
/* harmony import */ var _shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/notifications/notifications.service */ 69472);
/* harmony import */ var _shared_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/pagination/pagination.component */ 40590);
/* harmony import */ var _shared_pagination_pagination_component_options_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/pagination/pagination-component-options.model */ 23401);
/* harmony import */ var _shared_utils_file_size_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/utils/file-size-pipe */ 43525);
/* harmony import */ var _shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/utils/follow-link-config.model */ 67600);
/* harmony import */ var _shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/utils/var.directive */ 18226);
/* harmony import */ var _thumbnail_themed_thumbnail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../thumbnail/themed-thumbnail.component */ 97402);
/* harmony import */ var _simple_field_components_file_section_file_section_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../simple/field-components/file-section/file-section.component */ 1231);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 90310);

























function FullFileSectionComponent_div_2_div_1_ds_pagination_4_div_1_ng_container_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "dt", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](4, "dd", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const file_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](3, 2, "item.page.filesection.description"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](file_r1.firstMetadataValue("dc.description"));
  }
}
function FullFileSectionComponent_div_2_div_1_ds_pagination_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 7)(1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](2, "ds-thumbnail", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](4, "div", 10)(5, "dl", 11)(6, "dt", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](9, "dd", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](11, "dt", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](14, "dd", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](16, "dsFileSize");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](17, "dt", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](20, "dd", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](22, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](23, FullFileSectionComponent_div_2_div_1_ds_pagination_4_div_1_ng_container_23_Template, 6, 4, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](24, "div", 14)(25, "ds-file-download-link", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](27, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    let tmp_6_0;
    let tmp_12_0;
    const file_r1 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("thumbnail", (tmp_6_0 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](3, 11, file_r1.thumbnail)) == null ? null : tmp_6_0.payload);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](8, 13, "item.page.filesection.name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx_r1.dsoNameService.getName(file_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](13, 15, "item.page.filesection.size"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](16, 17, file_r1.sizeBytes));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](19, 19, "item.page.filesection.format"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"]((tmp_12_0 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](22, 21, file_r1.format)) == null ? null : tmp_12_0.payload == null ? null : tmp_12_0.payload.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", file_r1.hasMetadata("dc.description"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("bitstream", file_r1)("item", ctx_r1.item);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](27, 23, "item.page.filesection.download"), " ");
  }
}
function FullFileSectionComponent_div_2_div_1_ds_pagination_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "ds-pagination", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, FullFileSectionComponent_div_2_div_1_ds_pagination_4_div_1_Template, 28, 25, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const originals_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2).ngVar;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("hideGear", true)("hidePagerWhenSinglePage", true)("paginationOptions", ctx_r1.originalOptions)("collectionSize", originals_r3 == null ? null : originals_r3.totalElements)("retainScrollPosition", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", originals_r3 == null ? null : originals_r3.page);
  }
}
function FullFileSectionComponent_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div")(1, "h3", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](4, FullFileSectionComponent_div_2_div_1_ds_pagination_4_Template, 2, 6, "ds-pagination", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const originals_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().ngVar;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](3, 2, "item.page.filesection.original.bundle"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", (originals_r3 == null ? null : originals_r3.page == null ? null : originals_r3.page.length) > 0);
  }
}
function FullFileSectionComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, FullFileSectionComponent_div_2_div_1_Template, 5, 4, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const originals_r3 = ctx.ngVar;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r1.hasValuesInBundle(originals_r3));
  }
}
function FullFileSectionComponent_div_4_div_1_ds_pagination_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 17)(1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](2, "ds-thumbnail", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](4, "div", 10)(5, "dl", 11)(6, "dt", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](9, "dd", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](11, "dt", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](14, "dd", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](16, "dsFileSize");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](17, "dt", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](20, "dd", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](22, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](23, "dt", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](25, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](26, "dd", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](28, "div", 14)(29, "ds-file-download-link", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](31, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    let tmp_6_0;
    let tmp_12_0;
    const file_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("thumbnail", (tmp_6_0 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](3, 12, file_r4.thumbnail)) == null ? null : tmp_6_0.payload);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](8, 14, "item.page.filesection.name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx_r1.dsoNameService.getName(file_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](13, 16, "item.page.filesection.size"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](16, 18, file_r4.sizeBytes));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](19, 20, "item.page.filesection.format"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"]((tmp_12_0 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](22, 22, file_r4.format)) == null ? null : tmp_12_0.payload == null ? null : tmp_12_0.payload.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](25, 24, "item.page.filesection.description"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](file_r4.firstMetadataValue("dc.description"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("bitstream", file_r4)("item", ctx_r1.item);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](31, 26, "item.page.filesection.download"), " ");
  }
}
function FullFileSectionComponent_div_4_div_1_ds_pagination_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "ds-pagination", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, FullFileSectionComponent_div_4_div_1_ds_pagination_4_div_1_Template, 32, 28, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const licenses_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2).ngVar;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("hideGear", true)("hidePagerWhenSinglePage", true)("paginationOptions", ctx_r1.licenseOptions)("collectionSize", licenses_r5 == null ? null : licenses_r5.totalElements)("retainScrollPosition", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", licenses_r5 == null ? null : licenses_r5.page);
  }
}
function FullFileSectionComponent_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div")(1, "h3", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](4, FullFileSectionComponent_div_4_div_1_ds_pagination_4_Template, 2, 6, "ds-pagination", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const licenses_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().ngVar;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](3, 2, "item.page.filesection.license.bundle"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", (licenses_r5 == null ? null : licenses_r5.page == null ? null : licenses_r5.page.length) > 0);
  }
}
function FullFileSectionComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, FullFileSectionComponent_div_4_div_1_Template, 5, 4, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const licenses_r5 = ctx.ngVar;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r1.hasValuesInBundle(licenses_r5));
  }
}
/**
 * This component renders the file section of the item
 * inside a 'ds-metadata-field-wrapper' component.
 */
class FullFileSectionComponent extends _simple_field_components_file_section_file_section_component__WEBPACK_IMPORTED_MODULE_15__.FileSectionComponent {
  constructor(bitstreamDataService, notificationsService, translateService, paginationService, dsoNameService, appConfig) {
    super(bitstreamDataService, notificationsService, translateService, dsoNameService, appConfig);
    this.notificationsService = notificationsService;
    this.translateService = translateService;
    this.paginationService = paginationService;
    this.dsoNameService = dsoNameService;
    this.appConfig = appConfig;
    this.originalOptions = Object.assign(new _shared_pagination_pagination_component_options_model__WEBPACK_IMPORTED_MODULE_10__.PaginationComponentOptions(), {
      id: 'obo',
      currentPage: 1,
      pageSize: this.appConfig.item.bitstream.pageSize
    });
    this.licenseOptions = Object.assign(new _shared_pagination_pagination_component_options_model__WEBPACK_IMPORTED_MODULE_10__.PaginationComponentOptions(), {
      id: 'lbo',
      currentPage: 1,
      pageSize: this.appConfig.item.bitstream.pageSize
    });
  }
  ngOnInit() {
    this.initialize();
  }
  initialize() {
    this.originals$ = this.paginationService.getCurrentPagination(this.originalOptions.id, this.originalOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.switchMap)(options => this.bitstreamDataService.findAllByItemAndBundleName(this.item, 'ORIGINAL', {
      elementsPerPage: options.pageSize,
      currentPage: options.currentPage
    }, true, true, (0,_shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_12__.followLink)('format'), (0,_shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_12__.followLink)('thumbnail'))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.tap)(rd => {
      if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_5__.hasValue)(rd.errorMessage)) {
        this.notificationsService.error(this.translateService.get('file-section.error.header'), `${rd.statusCode} ${rd.errorMessage}`);
      }
    }));
    this.licenses$ = this.paginationService.getCurrentPagination(this.licenseOptions.id, this.licenseOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.switchMap)(options => this.bitstreamDataService.findAllByItemAndBundleName(this.item, 'LICENSE', {
      elementsPerPage: options.pageSize,
      currentPage: options.currentPage
    }, true, true, (0,_shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_12__.followLink)('format'), (0,_shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_12__.followLink)('thumbnail'))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.tap)(rd => {
      if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_5__.hasValue)(rd.errorMessage)) {
        this.notificationsService.error(this.translateService.get('file-section.error.header'), `${rd.statusCode} ${rd.errorMessage}`);
      }
    }));
  }
  hasValuesInBundle(bundle) {
    return (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_5__.hasValue)(bundle) && !(0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_5__.isEmpty)(bundle.page);
  }
  ngOnDestroy() {
    this.paginationService.clearPagination(this.originalOptions.id);
    this.paginationService.clearPagination(this.licenseOptions.id);
  }
  static {
    this.ɵfac = function FullFileSectionComponent_Factory(t) {
      return new (t || FullFileSectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_core_data_bitstream_data_service__WEBPACK_IMPORTED_MODULE_2__.BitstreamDataService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_8__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_core_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_3__.PaginationService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_core_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_1__.DSONameService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_config_app_config_interface__WEBPACK_IMPORTED_MODULE_0__.APP_CONFIG));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineComponent"]({
      type: FullFileSectionComponent,
      selectors: [["ds-base-item-page-full-file-section"]],
      inputs: {
        item: "item"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵStandaloneFeature"]],
      decls: 6,
      vars: 9,
      consts: [[3, "label"], [4, "ngVar"], [4, "ngIf"], [1, "h5", "simple-view-element-header"], [3, "hideGear", "hidePagerWhenSinglePage", "paginationOptions", "collectionSize", "retainScrollPosition", 4, "ngIf"], [3, "hideGear", "hidePagerWhenSinglePage", "paginationOptions", "collectionSize", "retainScrollPosition"], ["class", "file-section row mb-3", 4, "ngFor", "ngForOf"], [1, "file-section", "row", "mb-3"], [1, "col-3"], [3, "thumbnail"], [1, "col-7"], [1, "row"], [1, "col-md-4"], [1, "col-md-8"], [1, "col-2"], [3, "bitstream", "item"], ["class", "file-section row", 4, "ngFor", "ngForOf"], [1, "file-section", "row"]],
      template: function FullFileSectionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "ds-metadata-field-wrapper", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](1, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](2, FullFileSectionComponent_div_2_Template, 2, 1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](3, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](4, FullFileSectionComponent_div_4_Template, 2, 1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](5, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          let tmp_1_0;
          let tmp_2_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](1, 3, ctx.label));
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngVar", (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](3, 5, ctx.originals$)) == null ? null : tmp_1_0.payload);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngVar", (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](5, 7, ctx.licenses$)) == null ? null : tmp_2_0.payload);
        }
      },
      dependencies: [_shared_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_9__.PaginationComponent, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_20__.AsyncPipe, _shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_13__.VarDirective, _thumbnail_themed_thumbnail_component__WEBPACK_IMPORTED_MODULE_14__.ThemedThumbnailComponent, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgForOf, _shared_file_download_link_themed_file_download_link_component__WEBPACK_IMPORTED_MODULE_6__.ThemedFileDownloadLinkComponent, _shared_utils_file_size_pipe__WEBPACK_IMPORTED_MODULE_11__.FileSizePipe, _shared_metadata_field_wrapper_metadata_field_wrapper_component__WEBPACK_IMPORTED_MODULE_7__.MetadataFieldWrapperComponent],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n@media screen and (min-width: 768px) {\n  dt[_ngcontent-%COMP%] {\n    text-align: right;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZ1bGwtZmlsZS1zZWN0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBO0FBQ0E7RUFDRTtJQUNFLGlCQUFBO0VBQ0Y7QUFDRiIsImZpbGUiOiJmdWxsLWZpbGUtc2VjdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICBkdCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIH1cbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaXRlbS1wYWdlL2Z1bGwvZmllbGQtY29tcG9uZW50cy9maWxlLXNlY3Rpb24vZnVsbC1maWxlLXNlY3Rpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQTtFQUNFO0lBQ0UsaUJBQUE7RUFDRjtBQUNGO0FBQ0EsZ3VCQUFndUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgZHQge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 53996:
/*!****************************************************************************************************!*\
  !*** ./src/app/item-page/full/field-components/file-section/themed-full-file-section.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemedFullFileSectionComponent: () => (/* binding */ ThemedFullFileSectionComponent)
/* harmony export */ });
/* harmony import */ var _core_shared_item_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/shared/item.model */ 88318);
/* harmony import */ var _shared_theme_support_themed_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/theme-support/themed.component */ 8886);
/* harmony import */ var _full_file_section_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./full-file-section.component */ 14826);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 90310);




const _c0 = ["*"];
function ThemedFullFileSectionComponent_ng_template_0_Template(rf, ctx) {}
/**
 * Themed wrapper for {@link FullFileSectionComponent}
 */
class ThemedFullFileSectionComponent extends _shared_theme_support_themed_component__WEBPACK_IMPORTED_MODULE_1__.ThemedComponent {
  constructor() {
    super(...arguments);
    this.inAndOutputNames = ['item'];
  }
  getComponentName() {
    return 'FullFileSectionComponent';
  }
  importThemedComponent(themeName) {
    return __webpack_require__(63614)(`./${themeName}/app/item-page/full/field-components/file-section/full-file-section.component`);
  }
  importUnthemedComponent() {
    return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./full-file-section.component */ 14826));
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵThemedFullFileSectionComponent_BaseFactory;
      return function ThemedFullFileSectionComponent_Factory(t) {
        return (ɵThemedFullFileSectionComponent_BaseFactory || (ɵThemedFullFileSectionComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](ThemedFullFileSectionComponent)))(t || ThemedFullFileSectionComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: ThemedFullFileSectionComponent,
      selectors: [["ds-item-page-full-file-section"]],
      inputs: {
        item: "item"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
      ngContentSelectors: _c0,
      decls: 5,
      vars: 0,
      consts: [["vcr", ""], ["content", ""]],
      template: function ThemedFullFileSectionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ThemedFullFileSectionComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
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

/***/ 33242:
/*!************************************************************!*\
  !*** ./src/app/item-page/full/full-item-page.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FullItemPageComponent: () => (/* binding */ FullItemPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs/operators */ 85687);
/* harmony import */ var _core_coar_notify_notify_info_notify_info_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/coar-notify/notify-info/notify-info.service */ 42084);
/* harmony import */ var _core_data_feature_authorization_authorization_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/data/feature-authorization/authorization-data.service */ 3675);
/* harmony import */ var _core_data_item_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/data/item-data.service */ 29326);
/* harmony import */ var _core_data_signposting_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/data/signposting-data.service */ 38308);
/* harmony import */ var _core_services_link_head_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/services/link-head.service */ 8865);
/* harmony import */ var _core_services_server_response_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/services/server-response.service */ 7337);
/* harmony import */ var _shared_animations_fade__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/animations/fade */ 50332);
/* harmony import */ var _shared_dso_page_dso_edit_menu_dso_edit_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/dso-page/dso-edit-menu/dso-edit-menu.component */ 17807);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/empty.util */ 82777);
/* harmony import */ var _shared_error_error_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/error/error.component */ 79632);
/* harmony import */ var _shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/loading/themed-loading.component */ 82394);
/* harmony import */ var _shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/utils/var.directive */ 18226);
/* harmony import */ var _statistics_angulartics_dspace_view_tracker_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../statistics/angulartics/dspace/view-tracker.component */ 57850);
/* harmony import */ var _alerts_themed_item_alerts_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../alerts/themed-item-alerts.component */ 9130);
/* harmony import */ var _field_components_collections_collections_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../field-components/collections/collections.component */ 44616);
/* harmony import */ var _simple_field_components_specific_field_title_themed_item_page_field_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../simple/field-components/specific-field/title/themed-item-page-field.component */ 26077);
/* harmony import */ var _simple_item_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../simple/item-page.component */ 91459);
/* harmony import */ var _versions_item_versions_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../versions/item-versions.component */ 10466);
/* harmony import */ var _versions_notice_item_versions_notice_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../versions/notice/item-versions-notice.component */ 80502);
/* harmony import */ var _field_components_file_section_themed_full_file_section_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./field-components/file-section/themed-full-file-section.component */ 53996);



































const _c0 = a0 => [a0];
function FullItemPageComponent_div_0_div_1_div_1_div_4_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 18)(1, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](6, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](2, 2, ctx_r0.itemPageRoute$)));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](4, 4, "item.page.link.simple"), " ");
  }
}
function FullItemPageComponent_div_0_div_1_div_1_div_4_ng_container_8_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const mdValue_r2 = ctx.$implicit;
    const mdEntry_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](mdEntry_r3.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](mdValue_r2.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](mdValue_r2.language);
  }
}
function FullItemPageComponent_div_0_div_1_div_1_div_4_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](1, FullItemPageComponent_div_0_div_1_div_1_div_4_ng_container_8_tr_1_Template, 7, 3, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const mdEntry_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngForOf", mdEntry_r3.value);
  }
}
function FullItemPageComponent_div_0_div_1_div_1_div_4_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 20)(1, "div", 21)(2, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function FullItemPageComponent_div_0_div_1_div_1_div_4_div_14_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r4);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r0.back());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](3, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](5, 1, "item.page.return"), "");
  }
}
function FullItemPageComponent_div_0_div_1_div_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 9)(1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](2, "ds-item-page-title-field", 11)(3, "ds-dso-edit-menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](4, FullItemPageComponent_div_0_div_1_div_1_div_4_div_4_Template, 5, 8, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](5, "div", 13)(6, "table", 14)(7, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](8, FullItemPageComponent_div_0_div_1_div_1_div_4_ng_container_8_Template, 2, 1, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](10, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](11, "ds-item-page-full-file-section", 6)(12, "ds-item-page-collections", 6)(13, "ds-item-versions", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](14, FullItemPageComponent_div_0_div_1_div_1_div_4_div_14_Template, 6, 3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("item", item_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !ctx_r0.fromSubmissionObject);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](10, 9, _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](9, 7, ctx_r0.metadata$)));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("item", item_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("item", item_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("item", item_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r0.fromSubmissionObject);
  }
}
function FullItemPageComponent_div_0_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "ds-item-alerts", 6)(2, "ds-item-versions-notice", 6)(3, "ds-view-tracker", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](4, FullItemPageComponent_div_0_div_1_div_1_div_4_Template, 15, 11, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r5 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("item", item_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("item", item_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("object", item_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !item_r5.isWithdrawn || _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](5, 4, ctx_r0.isAdmin$));
  }
}
function FullItemPageComponent_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](1, FullItemPageComponent_div_0_div_1_div_1_Template, 6, 6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const itemRD_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().ngVar;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("@fadeInOut", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", itemRD_r6 == null ? null : itemRD_r6.payload);
  }
}
function FullItemPageComponent_div_0_ds_error_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](0, "ds-error", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpropertyInterpolate"]("message", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](1, 1, "error.item"));
  }
}
function FullItemPageComponent_div_0_ds_loading_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](0, "ds-loading", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpropertyInterpolate"]("message", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](1, 1, "loading.item"));
  }
}
function FullItemPageComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](1, FullItemPageComponent_div_0_div_1_Template, 2, 2, "div", 2)(2, FullItemPageComponent_div_0_ds_error_2_Template, 2, 3, "ds-error", 3)(3, FullItemPageComponent_div_0_ds_loading_3_Template, 2, 3, "ds-loading", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const itemRD_r6 = ctx.ngVar;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", itemRD_r6 == null ? null : itemRD_r6.hasSucceeded);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", itemRD_r6 == null ? null : itemRD_r6.hasFailed);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", itemRD_r6 == null ? null : itemRD_r6.isLoading);
  }
}
/**
 * This component renders a full item page.
 * The route parameter 'id' is used to request the item it represents.
 */
class FullItemPageComponent extends _simple_item_page_component__WEBPACK_IMPORTED_MODULE_16__.ItemPageComponent {
  constructor(route, router, items, authorizationService, _location, responseService, signpostingDataService, linkHeadService, notifyInfoService, platformId) {
    super(route, router, items, authorizationService, responseService, signpostingDataService, linkHeadService, notifyInfoService, platformId);
    this.route = route;
    this.router = router;
    this.items = items;
    this.authorizationService = authorizationService;
    this._location = _location;
    this.responseService = responseService;
    this.signpostingDataService = signpostingDataService;
    this.linkHeadService = linkHeadService;
    this.notifyInfoService = notifyInfoService;
    this.platformId = platformId;
    /**
     * True when the itemRD has been originated from its workspaceite/workflowitem, false otherwise.
     */
    this.fromSubmissionObject = false;
    this.subs = [];
  }
  /*** AoT inheritance fix, will hopefully be resolved in the near future **/
  ngOnInit() {
    super.ngOnInit();
    this.metadata$ = this.itemRD$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.map)(rd => rd.payload), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.filter)(item => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_8__.hasValue)(item)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.map)(item => item.metadata));
    this.subs.push(this.route.data.subscribe(data => {
      this.fromSubmissionObject = (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_8__.hasValue)(data.wfi) || (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_8__.hasValue)(data.wsi);
    }));
  }
  /**
   * Navigate back in browser history.
   */
  back() {
    this._location.back();
  }
  ngOnDestroy() {
    this.subs.filter(sub => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_8__.hasValue)(sub)).forEach(sub => sub.unsubscribe());
  }
  static {
    this.ɵfac = function FullItemPageComponent_Factory(t) {
      return new (t || FullItemPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_23__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_23__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_core_data_item_data_service__WEBPACK_IMPORTED_MODULE_2__.ItemDataService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_core_data_feature_authorization_authorization_data_service__WEBPACK_IMPORTED_MODULE_1__.AuthorizationDataService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_24__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_core_services_server_response_service__WEBPACK_IMPORTED_MODULE_5__.ServerResponseService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_core_data_signposting_data_service__WEBPACK_IMPORTED_MODULE_3__.SignpostingDataService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_core_services_link_head_service__WEBPACK_IMPORTED_MODULE_4__.LinkHeadService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_core_coar_notify_notify_info_notify_info_service__WEBPACK_IMPORTED_MODULE_0__.NotifyInfoService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_20__.PLATFORM_ID));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineComponent"]({
      type: FullItemPageComponent,
      selectors: [["ds-base-full-item-page"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 3,
      consts: [["class", "container", 4, "ngVar"], [1, "container"], ["class", "item-page", 4, "ngIf"], [3, "message", 4, "ngIf"], [1, "item-page"], [4, "ngIf"], [3, "item"], [3, "object"], ["class", "full-item-info", 4, "ngIf"], [1, "full-item-info"], [1, "d-flex", "flex-row"], [1, "mr-auto", 3, "item"], ["class", "simple-view-link my-3", 4, "ngIf"], [1, "table-responsive"], [1, "table", "table-striped"], [4, "ngFor", "ngForOf"], [1, "mt-2", 3, "item"], ["class", "button-row bottom", 4, "ngIf"], [1, "simple-view-link", "my-3"], [1, "btn", "btn-outline-primary", 3, "routerLink"], [1, "button-row", "bottom"], [1, "text-right"], [1, "btn", "btn-outline-secondary", "mr-1", 3, "click"], [1, "fas", "fa-arrow-left"], [3, "message"]],
      template: function FullItemPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](0, FullItemPageComponent_div_0_Template, 4, 3, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](1, "async");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngVar", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](1, 1, ctx.itemRD$));
        }
      },
      dependencies: [_shared_error_error_component__WEBPACK_IMPORTED_MODULE_9__.ErrorComponent, _shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_10__.ThemedLoadingComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__.TranslatePipe, _field_components_file_section_themed_full_file_section_component__WEBPACK_IMPORTED_MODULE_19__.ThemedFullFileSectionComponent, _field_components_collections_collections_component__WEBPACK_IMPORTED_MODULE_14__.CollectionsComponent, _versions_item_versions_component__WEBPACK_IMPORTED_MODULE_17__.ItemVersionsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_24__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_24__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_24__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_24__.KeyValuePipe, _angular_router__WEBPACK_IMPORTED_MODULE_23__.RouterLink, _simple_field_components_specific_field_title_themed_item_page_field_component__WEBPACK_IMPORTED_MODULE_15__.ThemedItemPageTitleFieldComponent, _shared_dso_page_dso_edit_menu_dso_edit_menu_component__WEBPACK_IMPORTED_MODULE_7__.DsoEditMenuComponent, _versions_notice_item_versions_notice_component__WEBPACK_IMPORTED_MODULE_18__.ItemVersionsNoticeComponent, _statistics_angulartics_dspace_view_tracker_component__WEBPACK_IMPORTED_MODULE_12__.ViewTrackerComponent, _alerts_themed_item_alerts_component__WEBPACK_IMPORTED_MODULE_13__.ThemedItemAlertsComponent, _shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_11__.VarDirective],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   div.simple-view-link[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n[_nghost-%COMP%]   div.simple-view-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  min-width: 25%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZ1bGwtaXRlbS1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBO0FBQ0E7RUFDRSxrQkFBQTtBQUNGOztBQUNBO0VBQ0UsY0FBQTtBQUVGIiwiZmlsZSI6ImZ1bGwtaXRlbS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi9cbjpob3N0IGRpdi5zaW1wbGUtdmlldy1saW5rIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuOmhvc3QgZGl2LnNpbXBsZS12aWV3LWxpbmsgYSB7XG4gIG1pbi13aWR0aDogMjUlO1xufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaXRlbS1wYWdlL2Z1bGwvZnVsbC1pdGVtLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxjQUFBO0FBRUY7QUFDQSxneEJBQWd4QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovXG46aG9zdCBkaXYuc2ltcGxlLXZpZXctbGluayB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbjpob3N0IGRpdi5zaW1wbGUtdmlldy1saW5rIGEge1xuICBtaW4td2lkdGg6IDI1JTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"],
      data: {
        animation: [_shared_animations_fade__WEBPACK_IMPORTED_MODULE_6__.fadeInOut]
      },
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 10870:
/*!*******************************************************************!*\
  !*** ./src/app/item-page/full/themed-full-item-page.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemedFullItemPageComponent: () => (/* binding */ ThemedFullItemPageComponent)
/* harmony export */ });
/* harmony import */ var _shared_theme_support_themed_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/theme-support/themed.component */ 8886);
/* harmony import */ var _full_item_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./full-item-page.component */ 33242);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);



const _c0 = ["*"];
function ThemedFullItemPageComponent_ng_template_0_Template(rf, ctx) {}
/**
 * Themed wrapper for FullItemPageComponent
 */
class ThemedFullItemPageComponent extends _shared_theme_support_themed_component__WEBPACK_IMPORTED_MODULE_0__.ThemedComponent {
  getComponentName() {
    return 'FullItemPageComponent';
  }
  importThemedComponent(themeName) {
    return __webpack_require__(4872)(`./${themeName}/app/item-page/full/full-item-page.component`);
  }
  importUnthemedComponent() {
    return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./full-item-page.component */ 33242));
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵThemedFullItemPageComponent_BaseFactory;
      return function ThemedFullItemPageComponent_Factory(t) {
        return (ɵThemedFullItemPageComponent_BaseFactory || (ɵThemedFullItemPageComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](ThemedFullItemPageComponent)))(t || ThemedFullItemPageComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ThemedFullItemPageComponent,
      selectors: [["ds-full-item-page"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      ngContentSelectors: _c0,
      decls: 5,
      vars: 0,
      consts: [["vcr", ""], ["content", ""]],
      template: function ThemedFullItemPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ThemedFullItemPageComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
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

/***/ 91459:
/*!*********************************************************!*\
  !*** ./src/app/item-page/simple/item-page.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ItemPageComponent: () => (/* binding */ ItemPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! rxjs */ 27639);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! rxjs */ 17796);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! rxjs/operators */ 78374);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! rxjs/operators */ 84975);
/* harmony import */ var src_app_core_coar_notify_notify_info_notify_info_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/coar-notify/notify-info/notify-info.service */ 42084);
/* harmony import */ var _core_data_feature_authorization_authorization_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/data/feature-authorization/authorization-data.service */ 3675);
/* harmony import */ var _core_data_feature_authorization_feature_id__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/data/feature-authorization/feature-id */ 3970);
/* harmony import */ var _core_data_item_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/data/item-data.service */ 29326);
/* harmony import */ var _core_data_signposting_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/data/signposting-data.service */ 38308);
/* harmony import */ var _core_services_link_head_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/services/link-head.service */ 8865);
/* harmony import */ var _core_services_server_response_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/services/server-response.service */ 7337);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/shared/operators */ 55757);
/* harmony import */ var _core_shared_view_mode_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/shared/view-mode.model */ 78448);
/* harmony import */ var _shared_animations_fade__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/animations/fade */ 50332);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/empty.util */ 82777);
/* harmony import */ var _shared_error_error_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/error/error.component */ 79632);
/* harmony import */ var _shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/loading/themed-loading.component */ 82394);
/* harmony import */ var _shared_object_collection_shared_listable_object_listable_object_component_loader_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/object-collection/shared/listable-object/listable-object-component-loader.component */ 17191);
/* harmony import */ var _shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/utils/var.directive */ 18226);
/* harmony import */ var _statistics_angulartics_dspace_view_tracker_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../statistics/angulartics/dspace/view-tracker.component */ 57850);
/* harmony import */ var _alerts_themed_item_alerts_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../alerts/themed-item-alerts.component */ 9130);
/* harmony import */ var _item_page_routing_paths__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../item-page-routing-paths */ 90887);
/* harmony import */ var _versions_item_versions_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../versions/item-versions.component */ 10466);
/* harmony import */ var _versions_notice_item_versions_notice_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../versions/notice/item-versions-notice.component */ 80502);
/* harmony import */ var _notify_requests_status_notify_requests_status_component_notify_requests_status_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./notify-requests-status/notify-requests-status-component/notify-requests-status.component */ 36359);
/* harmony import */ var _qa_event_notification_qa_event_notification_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./qa-event-notification/qa-event-notification.component */ 2613);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/router */ 14354);





































function ItemPageComponent_div_0_div_1_div_1_ds_listable_object_component_loader_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](0, "ds-listable-object-component-loader", 11);
  }
  if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]().ngIf;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("object", item_r1)("viewMode", ctx_r1.viewMode);
  }
}
function ItemPageComponent_div_0_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](1, "ds-item-alerts", 6)(2, "ds-qa-event-notification", 6)(3, "ds-notify-requests-status", 7)(4, "ds-item-versions-notice", 6)(5, "ds-view-tracker", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](6, ItemPageComponent_div_0_div_1_div_1_ds_listable_object_component_loader_6_Template, 1, 2, "ds-listable-object-component-loader", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](8, "ds-item-versions", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r1 = ctx.ngIf;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("item", item_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("item", item_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("itemUuid", item_r1.uuid);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("item", item_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("object", item_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", !item_r1.isWithdrawn || _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](7, 8, ctx_r1.isAdmin$));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("item", item_r1)("displayActions", false);
  }
}
function ItemPageComponent_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](1, ItemPageComponent_div_0_div_1_div_1_Template, 9, 10, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const itemRD_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]().ngVar;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("@fadeInOut", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", itemRD_r3 == null ? null : itemRD_r3.payload);
  }
}
function ItemPageComponent_div_0_ds_error_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](0, "ds-error", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpropertyInterpolate"]("message", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](1, 1, "error.item"));
  }
}
function ItemPageComponent_div_0_ds_loading_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](0, "ds-loading", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpropertyInterpolate"]("message", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](1, 1, "loading.item"));
  }
}
function ItemPageComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](1, ItemPageComponent_div_0_div_1_Template, 2, 2, "div", 2)(2, ItemPageComponent_div_0_ds_error_2_Template, 2, 3, "ds-error", 3)(3, ItemPageComponent_div_0_ds_loading_3_Template, 2, 3, "ds-loading", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const itemRD_r3 = ctx.ngVar;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", itemRD_r3 == null ? null : itemRD_r3.hasSucceeded);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", itemRD_r3 == null ? null : itemRD_r3.hasFailed);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", itemRD_r3 == null ? null : itemRD_r3.isLoading);
  }
}
/**
 * This component renders a simple item page.
 * The route parameter 'id' is used to request the item it represents.
 * All fields of the item that should be displayed, are defined in its template.
 */
class ItemPageComponent {
  constructor(route, router, items, authorizationService, responseService, signpostingDataService, linkHeadService, notifyInfoService, platformId) {
    this.route = route;
    this.router = router;
    this.items = items;
    this.authorizationService = authorizationService;
    this.responseService = responseService;
    this.signpostingDataService = signpostingDataService;
    this.linkHeadService = linkHeadService;
    this.notifyInfoService = notifyInfoService;
    this.platformId = platformId;
    /**
     * The view-mode we're currently on
     */
    this.viewMode = _core_shared_view_mode_model__WEBPACK_IMPORTED_MODULE_8__.ViewMode.StandalonePage;
    /**
     * Contains a list of SignpostingLink related to the item
     */
    this.signpostingLinks = [];
    /**
     * An array of LinkDefinition objects representing inbox links for the item page.
     */
    this.inboxTags = [];
    this.coarRestApiUrls = [];
    this.initPageLinks();
  }
  /**
   * Initialize instance variables
   */
  ngOnInit() {
    this.itemRD$ = this.route.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.map)(data => data.dso));
    this.itemPageRoute$ = this.itemRD$.pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_7__.getAllSucceededRemoteDataPayload)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.map)(item => (0,_item_page_routing_paths__WEBPACK_IMPORTED_MODULE_17__.getItemPageRoute)(item)));
    this.isAdmin$ = this.authorizationService.isAuthorized(_core_data_feature_authorization_feature_id__WEBPACK_IMPORTED_MODULE_2__.FeatureID.AdministratorOf);
  }
  /**
   * Create page links if any are retrieved by signposting endpoint
   *
   * @private
   */
  initPageLinks() {
    this.route.params.subscribe(params => {
      (0,rxjs__WEBPACK_IMPORTED_MODULE_24__.combineLatest)([this.signpostingDataService.getLinks(params.id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_25__.take)(1)), this.getCoarLdnLocalInboxUrls()]).subscribe(([signpostingLinks, coarRestApiUrls]) => {
        let links = '';
        this.signpostingLinks = signpostingLinks;
        signpostingLinks.forEach(link => {
          links = links + ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_10__.isNotEmpty)(links) ? ', ' : '') + `<${link.href}> ; rel="${link.rel}"` + ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_10__.isNotEmpty)(link.type) ? ` ; type="${link.type}" ` : ' ');
          let tag = {
            href: link.href,
            rel: link.rel
          };
          if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_10__.isNotEmpty)(link.type)) {
            tag = Object.assign(tag, {
              type: link.type
            });
          }
          this.linkHeadService.addTag(tag);
        });
        if (coarRestApiUrls.length > 0) {
          const inboxLinks = this.initPageInboxLinks(coarRestApiUrls);
          links = links + ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_10__.isNotEmpty)(links) ? ', ' : '') + inboxLinks;
        }
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_26__.isPlatformServer)(this.platformId)) {
          this.responseService.setHeader('Link', links);
        }
      });
    });
  }
  /**
   * Sets the COAR LDN local inbox URL if COAR configuration is enabled.
   * If the COAR LDN local inbox URL is retrieved successfully, initializes the page inbox links.
   */
  getCoarLdnLocalInboxUrls() {
    return this.notifyInfoService.isCoarConfigEnabled().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_27__.switchMap)(coarLdnEnabled => {
      if (coarLdnEnabled) {
        return this.notifyInfoService.getCoarLdnLocalInboxUrls();
      } else {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_28__.of)([]);
      }
    }));
  }
  /**
   * Initializes the page inbox links.
   * @param coarRestApiUrls - An array of COAR REST API URLs.
   */
  initPageInboxLinks(coarRestApiUrls) {
    const rel = this.notifyInfoService.getInboxRelationLink();
    let links = '';
    coarRestApiUrls.forEach(coarRestApiUrl => {
      // Add link to head
      const tag = {
        href: coarRestApiUrl,
        rel: rel
      };
      this.inboxTags.push(tag);
      this.linkHeadService.addTag(tag);
      links = links + ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_10__.isNotEmpty)(links) ? ', ' : '') + `<${coarRestApiUrl}> ; rel="${rel}"`;
    });
    return links;
  }
  ngOnDestroy() {
    this.signpostingLinks.forEach(link => {
      this.linkHeadService.removeTag(`href='${link.href}'`);
    });
    this.inboxTags.forEach(link => {
      this.linkHeadService.removeTag(`href='${link.href}'`);
    });
  }
  static {
    this.ɵfac = function ItemPageComponent_Factory(t) {
      return new (t || ItemPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_29__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_29__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_core_data_item_data_service__WEBPACK_IMPORTED_MODULE_3__.ItemDataService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_core_data_feature_authorization_authorization_data_service__WEBPACK_IMPORTED_MODULE_1__.AuthorizationDataService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_core_services_server_response_service__WEBPACK_IMPORTED_MODULE_6__.ServerResponseService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_core_data_signposting_data_service__WEBPACK_IMPORTED_MODULE_4__.SignpostingDataService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_core_services_link_head_service__WEBPACK_IMPORTED_MODULE_5__.LinkHeadService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](src_app_core_coar_notify_notify_info_notify_info_service__WEBPACK_IMPORTED_MODULE_0__.NotifyInfoService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_22__.PLATFORM_ID));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineComponent"]({
      type: ItemPageComponent,
      selectors: [["ds-base-item-page"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 3,
      consts: [["class", "container", 4, "ngVar"], [1, "container"], ["class", "item-page", 4, "ngIf"], [3, "message", 4, "ngIf"], [1, "item-page"], [4, "ngIf"], [3, "item"], [3, "itemUuid"], [3, "object"], [3, "object", "viewMode", 4, "ngIf"], [1, "mt-2", 3, "item", "displayActions"], [3, "object", "viewMode"], [3, "message"]],
      template: function ItemPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](0, ItemPageComponent_div_0_Template, 4, 3, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](1, "async");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngVar", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](1, 1, ctx.itemRD$));
        }
      },
      dependencies: [_shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_14__.VarDirective, _alerts_themed_item_alerts_component__WEBPACK_IMPORTED_MODULE_16__.ThemedItemAlertsComponent, _versions_notice_item_versions_notice_component__WEBPACK_IMPORTED_MODULE_19__.ItemVersionsNoticeComponent, _statistics_angulartics_dspace_view_tracker_component__WEBPACK_IMPORTED_MODULE_15__.ViewTrackerComponent, _shared_object_collection_shared_listable_object_listable_object_component_loader_component__WEBPACK_IMPORTED_MODULE_13__.ListableObjectComponentLoaderComponent, _versions_item_versions_component__WEBPACK_IMPORTED_MODULE_18__.ItemVersionsComponent, _shared_error_error_component__WEBPACK_IMPORTED_MODULE_11__.ErrorComponent, _shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_12__.ThemedLoadingComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_30__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_30__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_26__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_26__.NgIf, _notify_requests_status_notify_requests_status_component_notify_requests_status_component__WEBPACK_IMPORTED_MODULE_20__.NotifyRequestsStatusComponent, _qa_event_notification_qa_event_notification_component__WEBPACK_IMPORTED_MODULE_21__.QaEventNotificationComponent],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n@media (max-width: 991.98px) {\n  .container[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW0tcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBO0VBQ0U7SUFDRSxXQUFBO0lBQ0EsZUFBQTtFQUNGO0FBQ0YiLCJmaWxlIjoiaXRlbS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTEuOThweCkge1xuICAuY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IG5vbmU7XG4gIH1cbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaXRlbS1wYWdlL3NpbXBsZS9pdGVtLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQTtFQUNFO0lBQ0UsV0FBQTtJQUNBLGVBQUE7RUFDRjtBQUNGO0FBQ0EsNHVCQUE0dUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogbm9uZTtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0= */"],
      data: {
        animation: [_shared_animations_fade__WEBPACK_IMPORTED_MODULE_9__.fadeInOut]
      },
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 36359:
/*!******************************************************************************************************************************!*\
  !*** ./src/app/item-page/simple/notify-requests-status/notify-requests-status-component/notify-requests-status.component.ts ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotifyRequestsStatusComponent: () => (/* binding */ NotifyRequestsStatusComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 85687);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 6663);
/* harmony import */ var _core_data_notify_services_status_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/data/notify-services-status-data.service */ 69380);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/shared/operators */ 55757);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/empty.util */ 82777);
/* harmony import */ var _request_status_alert_box_request_status_alert_box_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../request-status-alert-box/request-status-alert-box.component */ 78381);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 90310);








function NotifyRequestsStatusComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "ds-request-status-alert-box", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const entry_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("status", entry_r1.key)("data", entry_r1.value);
  }
}
function NotifyRequestsStatusComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, NotifyRequestsStatusComponent_ng_container_0_ng_container_1_Template, 2, 2, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 3, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, ctx_r1.requestMap$)));
  }
}
/**
 * Component to show an alert box for each update in th Notify feature (e.g. COAR updates)
 */
class NotifyRequestsStatusComponent {
  constructor(notifyInfoService) {
    this.notifyInfoService = notifyInfoService;
  }
  ngOnInit() {
    this.requestMap$ = this.notifyInfoService.getNotifyRequestsStatus(this.itemUuid).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_1__.getFirstCompletedRemoteData)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.filter)(data => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_2__.hasValue)(data)), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_1__.getRemoteDataPayload)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.filter)(data => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_2__.hasValue)(data)), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(data => {
      return this.groupDataByStatus(data);
    }));
  }
  /**
   * Groups the notify requests status data by status.
   * @param notifyRequestsStatus The notify requests status data.
   */
  groupDataByStatus(notifyRequestsStatus) {
    const statusMap = new Map();
    notifyRequestsStatus.notifyStatus?.forEach(notifyStatus => {
      const status = notifyStatus.status;
      if (!statusMap.has(status)) {
        statusMap.set(status, []);
      }
      statusMap.get(status)?.push(notifyStatus);
    });
    return statusMap;
  }
  static {
    this.ɵfac = function NotifyRequestsStatusComponent_Factory(t) {
      return new (t || NotifyRequestsStatusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_data_notify_services_status_data_service__WEBPACK_IMPORTED_MODULE_0__.NotifyRequestsStatusDataService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: NotifyRequestsStatusComponent,
      selectors: [["ds-notify-requests-status"]],
      inputs: {
        itemUuid: "itemUuid"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 3,
      consts: [[4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "status", "data"]],
      template: function NotifyRequestsStatusComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, NotifyRequestsStatusComponent_ng_container_0_Template, 4, 5, "ng-container", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "async");
        }
        if (rf & 2) {
          let tmp_0_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 1, ctx.requestMap$)) == null ? null : tmp_0_0.size) > 0);
        }
      },
      dependencies: [_request_status_alert_box_request_status_alert_box_component__WEBPACK_IMPORTED_MODULE_3__.RequestStatusAlertBoxComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.KeyValuePipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmeS1yZXF1ZXN0cy1zdGF0dXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUEiLCJmaWxlIjoibm90aWZ5LXJlcXVlc3RzLXN0YXR1cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaXRlbS1wYWdlL3NpbXBsZS9ub3RpZnktcmVxdWVzdHMtc3RhdHVzL25vdGlmeS1yZXF1ZXN0cy1zdGF0dXMtY29tcG9uZW50L25vdGlmeS1yZXF1ZXN0cy1zdGF0dXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQSx3bEJBQXdsQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 3846:
/*!*******************************************************************************!*\
  !*** ./src/app/item-page/simple/notify-requests-status/notify-status.enum.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RequestStatusEnum: () => (/* binding */ RequestStatusEnum)
/* harmony export */ });
var RequestStatusEnum;
(function (RequestStatusEnum) {
  RequestStatusEnum["ACCEPTED"] = "ACCEPTED";
  RequestStatusEnum["REJECTED"] = "REJECTED";
  RequestStatusEnum["REQUESTED"] = "REQUESTED";
})(RequestStatusEnum || (RequestStatusEnum = {}));

/***/ }),

/***/ 78381:
/*!************************************************************************************************************************!*\
  !*** ./src/app/item-page/simple/notify-requests-status/request-status-alert-box/request-status-alert-box.component.ts ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RequestStatusAlertBoxComponent: () => (/* binding */ RequestStatusAlertBoxComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var _shared_truncatable_truncatable_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/truncatable/truncatable.component */ 21308);
/* harmony import */ var _shared_truncatable_truncatable_part_truncatable_part_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/truncatable/truncatable-part/truncatable-part.component */ 41100);
/* harmony import */ var _notify_status_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../notify-status.enum */ 3846);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 90310);







const _c0 = a0 => ({
  "align-items-center": a0
});
const _c1 = (a0, a1, a2) => ({
  serviceName: a0,
  serviceUrl: a1,
  offerType: a2
});
function RequestStatusAlertBoxComponent_ng_container_0_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const request_r1 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 1, ctx_r1.displayOptions.text, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](4, _c1, request_r1.serviceName, request_r1.serviceUrl, request_r1.offerType)), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
  }
}
function RequestStatusAlertBoxComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "ds-truncatable", 3)(4, "ds-truncatable-part", 4)(5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, RequestStatusAlertBoxComponent_ng_container_0_ng_container_6_Template, 3, 8, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("alert d-flex flex-row sections-gap ", ctx_r1.displayOptions.alertType, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](8, _c0, ctx_r1.data.length === 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", ctx_r1.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", ctx_r1.status)("minLines", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.data);
  }
}
/**
 * Represents a component that displays the status of a request.
 */
class RequestStatusAlertBoxComponent {
  constructor() {
    /**
     * The input data for the request status alert box component.
     * @type {NotifyStatuses[]}
     */
    this.data = [];
  }
  ngOnInit() {
    this.prepareDataToDisplay();
  }
  /**
   * Prepares the data to be displayed based on the current status.
   */
  prepareDataToDisplay() {
    switch (this.status) {
      case _notify_status_enum__WEBPACK_IMPORTED_MODULE_2__.RequestStatusEnum.ACCEPTED:
        this.displayOptions = {
          alertType: 'alert-info',
          text: 'request-status-alert-box.accepted'
        };
        break;
      case _notify_status_enum__WEBPACK_IMPORTED_MODULE_2__.RequestStatusEnum.REJECTED:
        this.displayOptions = {
          alertType: 'alert-danger',
          text: 'request-status-alert-box.rejected'
        };
        break;
      case _notify_status_enum__WEBPACK_IMPORTED_MODULE_2__.RequestStatusEnum.REQUESTED:
        this.displayOptions = {
          alertType: 'alert-warning',
          text: 'request-status-alert-box.requested'
        };
        break;
    }
  }
  static {
    this.ɵfac = function RequestStatusAlertBoxComponent_Factory(t) {
      return new (t || RequestStatusAlertBoxComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: RequestStatusAlertBoxComponent,
      selectors: [["ds-request-status-alert-box"]],
      inputs: {
        status: "status",
        data: "data"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
      decls: 1,
      vars: 1,
      consts: [[4, "ngIf"], [3, "ngClass"], ["src", "assets/images/qa-coar-notify-logo.png", "alt", "notify logo", 1, "source-logo"], [3, "id"], [3, "id", "minLines"], [1, "w-100", "d-flex", "flex-column"], [4, "ngFor", "ngForOf"], [3, "innerHTML"]],
      template: function RequestStatusAlertBoxComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, RequestStatusAlertBoxComponent_ng_container_0_Template, 7, 10, "ng-container", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.data == null ? null : ctx.data.length) > 0 && ctx.displayOptions);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _shared_truncatable_truncatable_part_truncatable_part_component__WEBPACK_IMPORTED_MODULE_1__.TruncatablePartComponent, _shared_truncatable_truncatable_component__WEBPACK_IMPORTED_MODULE_0__.TruncatableComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n.source-logo[_ngcontent-%COMP%] {\n  max-height: var(--ds-header-logo-height);\n}\n\n.sections-gap[_ngcontent-%COMP%] {\n  gap: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcXVlc3Qtc3RhdHVzLWFsZXJ0LWJveC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBO0VBQ0Usd0NBQUE7QUFDRjs7QUFDQTtFQUNFLFNBQUE7QUFFRiIsImZpbGUiOiJyZXF1ZXN0LXN0YXR1cy1hbGVydC1ib3guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqL1xuLnNvdXJjZS1sb2dvIHtcbiAgbWF4LWhlaWdodDogdmFyKC0tZHMtaGVhZGVyLWxvZ28taGVpZ2h0KTtcbn1cbi5zZWN0aW9ucy1nYXAge1xuICBnYXA6IDFyZW07XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaXRlbS1wYWdlL3NpbXBsZS9ub3RpZnktcmVxdWVzdHMtc3RhdHVzL3JlcXVlc3Qtc3RhdHVzLWFsZXJ0LWJveC9yZXF1ZXN0LXN0YXR1cy1hbGVydC1ib3guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQTtFQUNFLHdDQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxTQUFBO0FBRUY7QUFDQSx3eEJBQXd4QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovXG4uc291cmNlLWxvZ28ge1xuICBtYXgtaGVpZ2h0OiB2YXIoLS1kcy1oZWFkZXItbG9nby1oZWlnaHQpO1xufVxuLnNlY3Rpb25zLWdhcCB7XG4gIGdhcDogMXJlbTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"],
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 2613:
/*!*******************************************************************************************!*\
  !*** ./src/app/item-page/simple/qa-event-notification/qa-event-notification.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QaEventNotificationComponent: () => (/* binding */ QaEventNotificationComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 60494);
/* harmony import */ var _admin_admin_routing_paths__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../admin/admin-routing-paths */ 47483);
/* harmony import */ var _core_cache_models_request_param_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/cache/models/request-param.model */ 53954);
/* harmony import */ var _core_notifications_qa_source_quality_assurance_source_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/notifications/qa/source/quality-assurance-source-data.service */ 61723);
/* harmony import */ var _core_shared_item_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/shared/item.model */ 88318);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/shared/operators */ 55757);
/* harmony import */ var _shared_utils_split_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/utils/split.pipe */ 86964);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 90310);














const _c0 = a0 => ({
  num: a0
});
const _c1 = (a0, a1, a2) => [a0, a1, "target", a2];
const _c2 = () => ({
  forward: true
});
function QaEventNotificationComponent_ng_container_0_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 3)(1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "dsSplit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 6)(5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](9, "dsSplit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const source_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate1"]("src", "assets/images/qa-", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](3, 8, source_r1.id, ":")[0], "-logo.png", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate1"]("alt", "", source_r1.id, " logo");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](7, 11, "item.qa-event-notification.check.notification-info", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](19, _c0, source_r1.totalEvents)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction3"](21, _c1, ctx_r1.getQualityAssuranceRoute(), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](9, 14, source_r1.id, ":")[0], ctx_r1.item.id))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](25, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](11, 17, "item.qa-event-notification-info.check.button"), " ");
  }
}
function QaEventNotificationComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, QaEventNotificationComponent_ng_container_0_ng_container_1_div_1_Template, 12, 26, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const source_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", source_r1.totalEvents > 0);
  }
}
function QaEventNotificationComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, QaEventNotificationComponent_ng_container_0_ng_container_1_Template, 2, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const sources_r3 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", sources_r3);
  }
}
/**
 * Component for displaying quality assurance event notifications for an item.
 */
class QaEventNotificationComponent {
  constructor(qualityAssuranceSourceDataService) {
    this.qualityAssuranceSourceDataService = qualityAssuranceSourceDataService;
  }
  /**
    * Detect changes to the item input and update the sources$ observable.
   */
  ngOnChanges(changes) {
    if (changes.item && changes.item.currentValue.uuid !== changes.item.previousValue?.uuid) {
      this.sources$ = this.getQualityAssuranceSources$();
    }
  }
  /**
   * Returns an Observable of QualityAssuranceSourceObject[] for the current item.
   * @returns An Observable of QualityAssuranceSourceObject[] for the current item.
   * Note: sourceId is composed as: id: "sourceName:<target>"
   */
  getQualityAssuranceSources$() {
    const findListTopicOptions = {
      searchParams: [new _core_cache_models_request_param_model__WEBPACK_IMPORTED_MODULE_1__.RequestParam('target', this.item.uuid)]
    };
    return this.qualityAssuranceSourceDataService.getSourcesByTarget(findListTopicOptions, false).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_4__.getFirstCompletedRemoteData)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(data => {
      if (data.hasSucceeded) {
        return data.payload.page;
      }
      return [];
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.catchError)(() => []));
  }
  /**
   * Returns the quality assurance route.
   * @returns The quality assurance route.
   */
  getQualityAssuranceRoute() {
    return (0,_admin_admin_routing_paths__WEBPACK_IMPORTED_MODULE_0__.getNotificatioQualityAssuranceRoute)();
  }
  static {
    this.ɵfac = function QaEventNotificationComponent_Factory(t) {
      return new (t || QaEventNotificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_notifications_qa_source_quality_assurance_source_data_service__WEBPACK_IMPORTED_MODULE_2__.QualityAssuranceSourceDataService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: QaEventNotificationComponent,
      selectors: [["ds-qa-event-notification"]],
      inputs: {
        item: "item"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵProvidersFeature"]([_core_notifications_qa_source_quality_assurance_source_data_service__WEBPACK_IMPORTED_MODULE_2__.QualityAssuranceSourceDataService]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 3,
      consts: [[4, "ngIf"], [4, "ngFor", "ngForOf"], ["class", "alert alert-info d-flex flex-row", 4, "ngIf"], [1, "alert", "alert-info", "d-flex", "flex-row"], [1, "source-logo-container"], ["onerror", "this.src='assets/images/dspace-logo.svg'", 1, "source-logo", 3, "src", "alt"], [1, "w-100", "d-flex", "justify-content-between"], [1, "pl-4", "align-self-center"], [1, "btn", "btn-primary", "align-self-center", 3, "routerLink", "queryParams"]],
      template: function QaEventNotificationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, QaEventNotificationComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "async");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 1, ctx.sources$));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLink, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe, _shared_utils_split_pipe__WEBPACK_IMPORTED_MODULE_5__.SplitPipe],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n.source-logo[_ngcontent-%COMP%] {\n  max-height: var(--ds-header-logo-height);\n}\n\n.source-logo-container[_ngcontent-%COMP%] {\n  width: var(--ds-qa-logo-width);\n  display: flex;\n  justify-content: center;\n}\n\n.sections-gap[_ngcontent-%COMP%] {\n  gap: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInFhLWV2ZW50LW5vdGlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBO0VBQ0Usd0NBQUE7QUFDRjs7QUFDQTtFQUNFLDhCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBRUY7O0FBQUE7RUFDRSxTQUFBO0FBR0YiLCJmaWxlIjoicWEtZXZlbnQtbm90aWZpY2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi9cbi5zb3VyY2UtbG9nbyB7XG4gIG1heC1oZWlnaHQ6IHZhcigtLWRzLWhlYWRlci1sb2dvLWhlaWdodCk7XG59XG4uc291cmNlLWxvZ28tY29udGFpbmVyIHtcbiAgd2lkdGg6IHZhcigtLWRzLXFhLWxvZ28td2lkdGgpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5zZWN0aW9ucy1nYXAge1xuICBnYXA6IDFyZW07XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaXRlbS1wYWdlL3NpbXBsZS9xYS1ldmVudC1ub3RpZmljYXRpb24vcWEtZXZlbnQtbm90aWZpY2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBO0FBQ0E7RUFDRSx3Q0FBQTtBQUNGOztBQUNBO0VBQ0UsOEJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFFRjs7QUFBQTtFQUNFLFNBQUE7QUFHRjtBQUNBLDQ5QkFBNDlCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi9cbi5zb3VyY2UtbG9nbyB7XG4gIG1heC1oZWlnaHQ6IHZhcigtLWRzLWhlYWRlci1sb2dvLWhlaWdodCk7XG59XG4uc291cmNlLWxvZ28tY29udGFpbmVyIHtcbiAgd2lkdGg6IHZhcigtLWRzLXFhLWxvZ28td2lkdGgpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5zZWN0aW9ucy1nYXAge1xuICBnYXA6IDFyZW07XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"],
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 66718:
/*!*******************************************************************************************************!*\
  !*** ./src/app/item-page/versions/item-versions-delete-modal/item-versions-delete-modal.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ItemVersionsDeleteModalComponent: () => (/* binding */ ItemVersionsDeleteModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 49966);






const _c0 = a0 => ({
  version: a0
});
class ItemVersionsDeleteModalComponent {
  constructor(activeModal) {
    this.activeModal = activeModal;
    /**
     * An event fired when the cancel or confirm button is clicked, with respectively false or true
     */
    this.response = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  onModalClose() {
    this.response.emit(false);
    this.activeModal.dismiss();
  }
  onModalSubmit() {
    this.response.emit(true);
    this.activeModal.close();
  }
  static {
    this.ɵfac = function ItemVersionsDeleteModalComponent_Factory(t) {
      return new (t || ItemVersionsDeleteModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbActiveModal));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ItemVersionsDeleteModalComponent,
      selectors: [["ds-item-versions-delete-modal"]],
      outputs: {
        response: "response"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 22,
      vars: 21,
      consts: [[1, "modal-header"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "pb-2"], [1, "modal-footer"], [1, "btn", "btn-outline-secondary", "btn-sm", "cancel", 3, "click", "title"], [1, "fas", "fa-times", "fa-fw"], [1, "btn", "btn-danger", "btn-sm", "confirm", 3, "click", "title"], [1, "fas", "fa-check", "fa-fw"]],
      template: function ItemVersionsDeleteModalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemVersionsDeleteModalComponent_Template_button_click_4_listener() {
            return ctx.onModalClose();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3)(8, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5)(12, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemVersionsDeleteModalComponent_Template_button_click_12_listener() {
            return ctx.onModalClose();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemVersionsDeleteModalComponent_Template_button_click_17_listener() {
            return ctx.onModalSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 6, "item.version.delete.modal.header"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 8, "item.version.delete.modal.text", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c0, ctx.versionNumber)));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 11, "item.version.delete.modal.button.cancel.tooltip"));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 13, "item.version.delete.modal.button.cancel"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 15, "item.version.delete.modal.button.confirm.tooltip"));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 17, "item.version.delete.modal.button.confirm"), " ");
        }
      },
      dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW0tdmVyc2lvbnMtZGVsZXRlLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBIiwiZmlsZSI6Iml0ZW0tdmVyc2lvbnMtZGVsZXRlLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi8iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaXRlbS1wYWdlL3ZlcnNpb25zL2l0ZW0tdmVyc2lvbnMtZGVsZXRlLW1vZGFsL2l0ZW0tdmVyc2lvbnMtZGVsZXRlLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBO0FBQ0Esb21CQUFvbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqLyJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 84334:
/*!*********************************************************************************************************************!*\
  !*** ./src/app/item-page/versions/item-versions-row-element-version/item-versions-row-element-version.component.ts ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ItemVersionsRowElementVersionComponent: () => (/* binding */ ItemVersionsRowElementVersionComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 17796);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs */ 19847);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs */ 27639);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 84975);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs/operators */ 74671);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs/operators */ 21252);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! rxjs/operators */ 78374);
/* harmony import */ var _core_data_feature_authorization_authorization_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/data/feature-authorization/authorization-data.service */ 3675);
/* harmony import */ var _core_data_feature_authorization_feature_id__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/data/feature-authorization/feature-id */ 3970);
/* harmony import */ var _core_data_item_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/data/item-data.service */ 29326);
/* harmony import */ var _core_data_version_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/data/version-data.service */ 81783);
/* harmony import */ var _core_data_version_history_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/data/version-history-data.service */ 93860);
/* harmony import */ var _core_shared_item_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/shared/item.model */ 88318);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/shared/operators */ 55757);
/* harmony import */ var _core_shared_version_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/shared/version.model */ 2035);
/* harmony import */ var _core_submission_workflowitem_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/submission/workflowitem-data.service */ 52837);
/* harmony import */ var _core_submission_workspaceitem_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/submission/workspaceitem-data.service */ 24261);
/* harmony import */ var _shared_btn_disabled_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/btn-disabled.directive */ 60456);
/* harmony import */ var _shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/notifications/notifications.service */ 69472);
/* harmony import */ var _item_page_routing_paths__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../item-page-routing-paths */ 90887);
/* harmony import */ var _item_versions_delete_modal_item_versions_delete_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../item-versions-delete-modal/item-versions-delete-modal.component */ 66718);
/* harmony import */ var _item_versions_shared_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../item-versions-shared.service */ 76604);
/* harmony import */ var _item_versions_summary_modal_item_versions_summary_modal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../item-versions-summary-modal/item-versions-summary-modal.component */ 13574);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 49966);



































function ItemVersionsRowElementVersionComponent_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "span");
  }
}
function ItemVersionsRowElementVersionComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("routerLink", ctx_r0.getVersionRoute(ctx_r0.version.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx_r0.version.version);
  }
}
function ItemVersionsRowElementVersionComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", ctx_r0.version.version, " ");
  }
}
function ItemVersionsRowElementVersionComponent_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
}
function ItemVersionsRowElementVersionComponent_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, "item.version.history.table.workspaceItem"), " ");
  }
}
function ItemVersionsRowElementVersionComponent_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, "item.version.history.table.workflowItem"), " ");
  }
}
function ItemVersionsRowElementVersionComponent_div_14_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ItemVersionsRowElementVersionComponent_div_14_button_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r0.editWorkspaceItem(ctx_r0.workspaceId$));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](2, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](1, 1, "item.version.history.table.action.editWorkspaceItem"));
  }
}
function ItemVersionsRowElementVersionComponent_div_14_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ItemVersionsRowElementVersionComponent_div_14_ng_container_3_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r0.createNewVersion(ctx_r0.version));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](3, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 2, ctx_r0.createVersionTitle));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("dsBtnDisabled", ctx_r0.isAnyBeingEdited() || ctx_r0.hasDraftVersion);
  }
}
function ItemVersionsRowElementVersionComponent_div_14_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ItemVersionsRowElementVersionComponent_div_14_ng_container_5_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r4);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r0.deleteVersion(ctx_r0.version, ctx_r0.version.id === ctx_r0.itemVersion.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](3, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 3, "item.version.history.table.action.deleteVersion"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngClass", ctx_r0.isAnyBeingEdited() ? "btn-outline-primary" : "btn-outline-danger")("dsBtnDisabled", ctx_r0.isAnyBeingEdited());
  }
}
function ItemVersionsRowElementVersionComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, ItemVersionsRowElementVersionComponent_div_14_button_1_Template, 3, 3, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](3, ItemVersionsRowElementVersionComponent_div_14_ng_container_3_Template, 4, 4, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](5, ItemVersionsRowElementVersionComponent_div_14_ng_container_5_Template, 4, 5, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 3, ctx_r0.workspaceId$));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](4, 5, ctx_r0.canCreateVersion$));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](6, 7, ctx_r0.canDeleteVersion$));
  }
}
class ItemVersionsRowElementVersionComponent {
  constructor(workspaceItemDataService, workflowItemDataService, router, itemService, authorizationService, itemVersionShared, versionHistoryService, versionService, notificationsService, translateService, modalService) {
    this.workspaceItemDataService = workspaceItemDataService;
    this.workflowItemDataService = workflowItemDataService;
    this.router = router;
    this.itemService = itemService;
    this.authorizationService = authorizationService;
    this.itemVersionShared = itemVersionShared;
    this.versionHistoryService = versionHistoryService;
    this.versionService = versionService;
    this.notificationsService = notificationsService;
    this.translateService = translateService;
    this.modalService = modalService;
    this.versionsHistoryChange = new _angular_core__WEBPACK_IMPORTED_MODULE_16__.EventEmitter();
  }
  ngOnInit() {
    this.workspaceId$ = this.getWorkspaceId(this.version.item);
    this.workflowId$ = this.getWorkflowId(this.version.item);
    this.canDeleteVersion$ = this.canDeleteVersion(this.version);
    this.canCreateVersion$ = this.authorizationService.isAuthorized(_core_data_feature_authorization_feature_id__WEBPACK_IMPORTED_MODULE_1__.FeatureID.CanCreateVersion, this.item.self);
    this.createVersionTitle = this.hasDraftVersion ? 'item.version.history.table.action.hasDraft' : 'item.version.history.table.action.newVersion';
  }
  /**
   * Get the ID of the workspace item, if present, otherwise return undefined
   * @param versionItem the item for which retrieve the workspace item id
   */
  getWorkspaceId(versionItem) {
    if (!this.hasDraftVersion) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.of)(undefined);
    }
    return versionItem.pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_6__.getFirstSucceededRemoteDataPayload)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.map)(item => item.uuid), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.switchMap)(itemUuid => this.workspaceItemDataService.findByItem(itemUuid, true)), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_6__.getFirstCompletedRemoteData)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.map)(res => res?.payload?.id));
  }
  /**
   * Get the ID of the workflow item, if present, otherwise return undefined
   * @param versionItem the item for which retrieve the workspace item id
   */
  getWorkflowId(versionItem) {
    return this.getWorkspaceId(versionItem).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_20__.concatMap)(workspaceId => {
      if (workspaceId) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.of)(undefined);
      }
      return versionItem.pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_6__.getFirstSucceededRemoteDataPayload)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.map)(item => item.uuid), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.switchMap)(itemUuid => this.workflowItemDataService.findByItem(itemUuid, true)), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_6__.getFirstCompletedRemoteData)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.map)(res => res?.payload?.id));
    }));
  }
  /**
   * redirect to the edit page of the workspace item
   * @param id$ the id of the workspace item
   */
  editWorkspaceItem(id$) {
    id$.subscribe(id => {
      void this.router.navigateByUrl('workspaceitems/' + id + '/edit');
    });
  }
  /**
   * Check if the current user can delete the version
   * @param version
   */
  canDeleteVersion(version) {
    return this.authorizationService.isAuthorized(_core_data_feature_authorization_feature_id__WEBPACK_IMPORTED_MODULE_1__.FeatureID.CanDeleteVersion, version.self);
  }
  /**
   * Get the route to the specified version
   * @param versionId the ID of the version for which the route will be retrieved
   */
  getVersionRoute(versionId) {
    return (0,_item_page_routing_paths__WEBPACK_IMPORTED_MODULE_12__.getItemVersionRoute)(versionId);
  }
  /**
   * Creates a new version starting from the specified one
   * @param version the version from which a new one will be created
   */
  createNewVersion(version) {
    const versionNumber = version.version;
    // Open modal and set current version number
    const activeModal = this.modalService.open(_item_versions_summary_modal_item_versions_summary_modal_component__WEBPACK_IMPORTED_MODULE_15__.ItemVersionsSummaryModalComponent);
    activeModal.componentInstance.versionNumber = versionNumber;
    // On createVersionEvent emitted create new version and notify
    activeModal.componentInstance.createVersionEvent.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.mergeMap)(summary => (0,rxjs__WEBPACK_IMPORTED_MODULE_22__.combineLatest)([(0,rxjs__WEBPACK_IMPORTED_MODULE_17__.of)(summary), version.item.pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_6__.getFirstSucceededRemoteDataPayload)())])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.mergeMap)(([summary, item]) => this.versionHistoryService.createVersion(item._links.self.href, summary)), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_6__.getFirstCompletedRemoteData)(),
    // close model (should be displaying loading/waiting indicator) when version creation failed/succeeded
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.tap)(() => activeModal.close()),
    // show success/failure notification
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.tap)(newVersionRD => {
      this.itemVersionShared.notifyCreateNewVersion(newVersionRD);
      if (newVersionRD.hasSucceeded) {
        const versionHistory$ = this.versionService.getHistoryFromVersion(version).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.tap)(versionHistory => {
          this.itemService.invalidateItemCache(this.item.uuid);
          this.versionHistoryService.invalidateVersionHistoryCache(versionHistory.id);
        }));
        this.versionsHistoryChange.emit(versionHistory$);
      }
    }),
    // get workspace item
    (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_6__.getFirstSucceededRemoteDataPayload)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.switchMap)(newVersion => this.itemService.findByHref(newVersion._links.item.href)), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_6__.getFirstSucceededRemoteDataPayload)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.switchMap)(newVersionItem => this.workspaceItemDataService.findByItem(newVersionItem.uuid, true, false)), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_6__.getFirstSucceededRemoteDataPayload)()).subscribe(wsItem => {
      const wsiId = wsItem.id;
      const route = 'workspaceitems/' + wsiId + '/edit';
      this.router.navigateByUrl(route);
    });
  }
  /**
   * Deletes the specified version, notify the success/failure and redirect to latest version
   * @param version the version to be deleted
   * @param redirectToLatest force the redirect to the latest version in the history
   */
  deleteVersion(version, redirectToLatest) {
    const successMessageKey = 'item.version.delete.notification.success';
    const failureMessageKey = 'item.version.delete.notification.failure';
    const versionNumber = version.version;
    const versionItem$ = version.item;
    // Open modal
    const activeModal = this.modalService.open(_item_versions_delete_modal_item_versions_delete_modal_component__WEBPACK_IMPORTED_MODULE_13__.ItemVersionsDeleteModalComponent);
    activeModal.componentInstance.versionNumber = version.version;
    activeModal.componentInstance.firstVersion = false;
    // On modal submit/dismiss
    activeModal.componentInstance.response.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_24__.take)(1)).subscribe(ok => {
      if (ok) {
        versionItem$.pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_6__.getFirstSucceededRemoteDataPayload)(),
        // Retrieve version history
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.mergeMap)(item => (0,rxjs__WEBPACK_IMPORTED_MODULE_22__.combineLatest)([(0,rxjs__WEBPACK_IMPORTED_MODULE_17__.of)(item), this.versionHistoryService.getVersionHistoryFromVersion$(version)])),
        // Delete item
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.mergeMap)(([item, versionHistory]) => (0,rxjs__WEBPACK_IMPORTED_MODULE_22__.combineLatest)([this.deleteItemAndGetResult$(item), (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.of)(versionHistory)])),
        // Retrieve new latest version
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.mergeMap)(([deleteItemResult, versionHistory]) => (0,rxjs__WEBPACK_IMPORTED_MODULE_22__.combineLatest)([(0,rxjs__WEBPACK_IMPORTED_MODULE_17__.of)(deleteItemResult), this.versionHistoryService.getLatestVersionItemFromHistory$(versionHistory).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.tap)(() => {
          this.versionsHistoryChange.emit((0,rxjs__WEBPACK_IMPORTED_MODULE_17__.of)(versionHistory));
        }))]))).subscribe(([deleteHasSucceeded, newLatestVersionItem]) => {
          // Notify operation result and redirect to latest item
          if (deleteHasSucceeded) {
            this.notificationsService.success(null, this.translateService.get(successMessageKey, {
              'version': versionNumber
            }));
          } else {
            this.notificationsService.error(null, this.translateService.get(failureMessageKey, {
              'version': versionNumber
            }));
          }
          if (redirectToLatest) {
            const path = (0,_item_page_routing_paths__WEBPACK_IMPORTED_MODULE_12__.getItemEditVersionhistoryRoute)(newLatestVersionItem);
            this.router.navigateByUrl(path);
          }
        });
      }
    });
  }
  /**
   * Delete the item and get the result of the operation
   * @param item
   */
  deleteItemAndGetResult$(item) {
    return this.itemService.delete(item.id).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_6__.getFirstCompletedRemoteData)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.map)(deleteItemRes => deleteItemRes.hasSucceeded), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_24__.take)(1));
  }
  /**
   * True when a version is being edited
   * (used to disable buttons for other versions)
   */
  isAnyBeingEdited() {
    return this.versionBeingEditedNumber != null;
  }
  static {
    this.ɵfac = function ItemVersionsRowElementVersionComponent_Factory(t) {
      return new (t || ItemVersionsRowElementVersionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_core_submission_workspaceitem_data_service__WEBPACK_IMPORTED_MODULE_9__.WorkspaceitemDataService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_core_submission_workflowitem_data_service__WEBPACK_IMPORTED_MODULE_8__.WorkflowItemDataService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_25__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_core_data_item_data_service__WEBPACK_IMPORTED_MODULE_2__.ItemDataService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_core_data_feature_authorization_authorization_data_service__WEBPACK_IMPORTED_MODULE_0__.AuthorizationDataService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_item_versions_shared_service__WEBPACK_IMPORTED_MODULE_14__.ItemVersionsSharedService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_core_data_version_history_data_service__WEBPACK_IMPORTED_MODULE_4__.VersionHistoryDataService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_core_data_version_data_service__WEBPACK_IMPORTED_MODULE_3__.VersionDataService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_11__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_27__.NgbModal));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineComponent"]({
      type: ItemVersionsRowElementVersionComponent,
      selectors: [["ds-item-versions-row-element-version"]],
      inputs: {
        hasDraftVersion: "hasDraftVersion",
        version: "version",
        itemVersion: "itemVersion",
        item: "item",
        displayActions: "displayActions",
        versionBeingEditedNumber: "versionBeingEditedNumber"
      },
      outputs: {
        versionsHistoryChange: "versionsHistoryChange"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵStandaloneFeature"]],
      decls: 15,
      vars: 15,
      consts: [["versionNumberWithLink", ""], ["versionNumberWithoutLink", ""], [1, "left-column"], [4, "ngIf", "ngIfThen", "ngIfElse"], [4, "ngIf"], ["class", "text-light badge badge-primary ml-3", 4, "ngIf"], ["class", "text-light badge badge-info ml-3", 4, "ngIf"], [1, "right-column"], ["class", "btn-group edit-field space-children-mr", 4, "ngIf"], [3, "routerLink"], [1, "text-light", "badge", "badge-primary", "ml-3"], [1, "text-light", "badge", "badge-info", "ml-3"], [1, "btn-group", "edit-field", "space-children-mr"], ["class", "btn btn-outline-primary btn-sm version-row-element-edit", 3, "title", "click", 4, "ngIf"], [1, "btn", "btn-outline-primary", "btn-sm", "version-row-element-edit", 3, "click", "title"], [1, "fas", "fa-pencil-alt", "fa-fw"], [1, "btn", "btn-outline-primary", "btn-sm", "version-row-element-create", 3, "click", "dsBtnDisabled", "title"], [1, "fas", "fa-code-branch", "fa-fw"], [1, "btn", "btn-sm", "version-row-element-delete", 3, "click", "ngClass", "dsBtnDisabled", "title"], [1, "fas", "fa-trash", "fa-fw"]],
      template: function ItemVersionsRowElementVersionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, ItemVersionsRowElementVersionComponent_span_1_Template, 1, 0, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](3, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](4, ItemVersionsRowElementVersionComponent_ng_template_4_Template, 2, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplateRefExtractor"])(6, ItemVersionsRowElementVersionComponent_ng_template_6_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplateRefExtractor"])(8, ItemVersionsRowElementVersionComponent_span_8_Template, 2, 0, "span", 4)(9, ItemVersionsRowElementVersionComponent_span_9_Template, 3, 3, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](10, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](11, ItemVersionsRowElementVersionComponent_span_11_Template, 3, 3, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](12, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](13, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](14, ItemVersionsRowElementVersionComponent_div_14_Template, 7, 9, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          const versionNumberWithLink_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵreference"](5);
          const versionNumberWithoutLink_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵreference"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 7, ctx.workspaceId$) || _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](3, 9, ctx.workflowId$))("ngIfThen", versionNumberWithoutLink_r6)("ngIfElse", versionNumberWithLink_r5);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", (ctx.version == null ? null : ctx.version.id) === (ctx.itemVersion == null ? null : ctx.itemVersion.id));
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](10, 11, ctx.workspaceId$));
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](12, 13, ctx.workflowId$));
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.displayActions);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_28__.AsyncPipe, _angular_router__WEBPACK_IMPORTED_MODULE_25__.RouterLink, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_28__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_28__.NgIf, _shared_btn_disabled_directive__WEBPACK_IMPORTED_MODULE_10__.BtnDisabledDirective],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n.left-column[_ngcontent-%COMP%] {\n  float: left;\n  text-align: left;\n}\n\n.right-column[_ngcontent-%COMP%] {\n  float: right;\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW0tdmVyc2lvbnMtcm93LWVsZW1lbnQtdmVyc2lvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7QUFFRiIsImZpbGUiOiJpdGVtLXZlcnNpb25zLXJvdy1lbGVtZW50LXZlcnNpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqL1xuLmxlZnQtY29sdW1uIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4ucmlnaHQtY29sdW1uIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaXRlbS1wYWdlL3ZlcnNpb25zL2l0ZW0tdmVyc2lvbnMtcm93LWVsZW1lbnQtdmVyc2lvbi9pdGVtLXZlcnNpb25zLXJvdy1lbGVtZW50LXZlcnNpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUNBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0FBRUY7QUFDQSxvMkJBQW8yQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovXG4ubGVmdC1jb2x1bW4ge1xuICBmbG9hdDogbGVmdDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5yaWdodC1jb2x1bW4ge1xuICBmbG9hdDogcmlnaHQ7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 10466:
/*!***************************************************************!*\
  !*** ./src/app/item-page/versions/item-versions.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ItemVersionsComponent: () => (/* binding */ ItemVersionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/forms */ 56106);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs */ 27639);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 84975);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs/operators */ 62997);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! rxjs/operators */ 78374);
/* harmony import */ var _core_data_configuration_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/data/configuration-data.service */ 8917);
/* harmony import */ var _core_data_feature_authorization_authorization_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/data/feature-authorization/authorization-data.service */ 3675);
/* harmony import */ var _core_data_feature_authorization_feature_id__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/data/feature-authorization/feature-id */ 3970);
/* harmony import */ var _core_data_version_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/data/version-data.service */ 81783);
/* harmony import */ var _core_data_version_history_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/data/version-history-data.service */ 93860);
/* harmony import */ var _core_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/pagination/pagination.service */ 76896);
/* harmony import */ var _core_shared_item_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/shared/item.model */ 88318);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/shared/operators */ 55757);
/* harmony import */ var _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/alert/alert.component */ 16292);
/* harmony import */ var _shared_alert_alert_type__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/alert/alert-type */ 47978);
/* harmony import */ var _shared_btn_disabled_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/btn-disabled.directive */ 60456);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/empty.util */ 82777);
/* harmony import */ var _shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/notifications/notifications.service */ 69472);
/* harmony import */ var _shared_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/pagination/pagination.component */ 40590);
/* harmony import */ var _shared_pagination_pagination_component_options_model__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/pagination/pagination-component-options.model */ 23401);
/* harmony import */ var _shared_search_models_paginated_search_options_model__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../shared/search/models/paginated-search-options.model */ 33550);
/* harmony import */ var _shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../shared/utils/follow-link-config.model */ 67600);
/* harmony import */ var _item_page_routing_paths__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../item-page-routing-paths */ 90887);
/* harmony import */ var _item_versions_row_element_version_item_versions_row_element_version_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./item-versions-row-element-version/item-versions-row-element-version.component */ 84334);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 90310);

































const _c0 = a0 => ({
  version: a0
});
function ItemVersionsComponent_div_0_div_1_h2_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "h2", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](2, 1, "item.version.history.head"));
  }
}
function ItemVersionsComponent_div_0_div_1_ds_pagination_5_th_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](2, 1, "item.version.history.table.editor"));
  }
}
function ItemVersionsComponent_div_0_div_1_ds_pagination_5_tr_16_td_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const versionDTO_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", versionDTO_r4.version.submitterName, " ");
  }
}
function ItemVersionsComponent_div_0_div_1_ds_pagination_5_tr_16_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainer"](0);
  }
}
function ItemVersionsComponent_div_0_div_1_ds_pagination_5_tr_16_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const versionDTO_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](versionDTO_r4.version.summary);
  }
}
function ItemVersionsComponent_div_0_div_1_ds_pagination_5_tr_16_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayListener"]("ngModelChange", function ItemVersionsComponent_div_0_div_1_ds_pagination_5_tr_16_ng_template_14_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayBindingSet"](ctx_r1.versionBeingEditedSummary, $event) || (ctx_r1.versionBeingEditedSummary = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("keyup.enter", function ItemVersionsComponent_div_0_div_1_ds_pagination_5_tr_16_ng_template_14_Template_input_keyup_enter_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.onSummarySubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.versionBeingEditedSummary);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](1, 2, "item.version.history.table.action.editSummary"));
  }
}
function ItemVersionsComponent_div_0_div_1_ds_pagination_5_tr_16_div_16_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function ItemVersionsComponent_div_0_div_1_ds_pagination_5_tr_16_div_16_ng_container_1_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](6);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.disableVersionEditing());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](3, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function ItemVersionsComponent_div_0_div_1_ds_pagination_5_tr_16_div_16_ng_container_1_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](6);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.onSummarySubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](6, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](2, 2, "item.version.history.table.action.discardSummary"));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](5, 4, "item.version.history.table.action.saveSummary"));
  }
}
function ItemVersionsComponent_div_0_div_1_ds_pagination_5_tr_16_div_16_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function ItemVersionsComponent_div_0_div_1_ds_pagination_5_tr_16_div_16_ng_template_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r7);
      const versionDTO_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.enableVersionEditing(versionDTO_r4.version));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](2, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](1, 2, "item.version.history.table.action.editSummary"));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("dsBtnDisabled", ctx_r1.isAnyBeingEdited());
  }
}
function ItemVersionsComponent_div_0_div_1_ds_pagination_5_tr_16_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, ItemVersionsComponent_div_0_div_1_ds_pagination_5_tr_16_div_16_ng_container_1_Template, 7, 6, "ng-container", 28)(2, ItemVersionsComponent_div_0_div_1_ds_pagination_5_tr_16_div_16_ng_template_2_Template, 3, 4, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const notThisBeingEdited_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](3);
    const versionDTO_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.isThisBeingEdited(versionDTO_r4.version))("ngIfElse", notThisBeingEdited_r8);
  }
}
function ItemVersionsComponent_div_0_div_1_ds_pagination_5_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "tr", 16)(1, "td", 17)(2, "ds-item-versions-row-element-version", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("versionsHistoryChange", function ItemVersionsComponent_div_0_div_1_ds_pagination_5_tr_16_Template_ds_item_versions_row_element_version_versionsHistoryChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.getAllVersions($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](4, ItemVersionsComponent_div_0_div_1_ds_pagination_5_tr_16_td_4_Template, 2, 1, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](6, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](9, "td", 21)(10, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](11, ItemVersionsComponent_div_0_div_1_ds_pagination_5_tr_16_ng_container_11_Template, 1, 0, "ng-container", 23)(12, ItemVersionsComponent_div_0_div_1_ds_pagination_5_tr_16_ng_template_12_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplateRefExtractor"])(14, ItemVersionsComponent_div_0_div_1_ds_pagination_5_tr_16_ng_template_14_Template, 2, 4, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](16, ItemVersionsComponent_div_0_div_1_ds_pagination_5_tr_16_div_16_Template, 4, 2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](17, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const versionDTO_r4 = ctx.$implicit;
    const showSummary_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](13);
    const editSummary_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](15);
    const itemVersion_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2).ngIf;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("id", "version-row-" + versionDTO_r4.version.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("hasDraftVersion", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](3, 13, ctx_r1.hasDraftVersion$))("version", versionDTO_r4.version)("item", ctx_r1.item)("displayActions", ctx_r1.displayActions)("itemVersion", itemVersion_r11)("versionBeingEditedNumber", ctx_r1.versionBeingEditedNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](5, 15, ctx_r1.showSubmitter$));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind2"](8, 17, versionDTO_r4.version.created, "yyyy-MM-dd HH:mm:ss"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.isThisBeingEdited(versionDTO_r4.version))("ngIfThen", editSummary_r10)("ngIfElse", showSummary_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](17, 20, ctx_r1.displayActions && versionDTO_r4.canEditVersion));
  }
}
function ItemVersionsComponent_div_0_div_1_ds_pagination_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "ds-pagination", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("paginationChange", function ItemVersionsComponent_div_0_div_1_ds_pagination_5_Template_ds_pagination_paginationChange_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.onPageChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "table", 12)(2, "thead")(3, "tr")(4, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](7, ItemVersionsComponent_div_0_div_1_ds_pagination_5_th_7_Template, 3, 3, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](9, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](12, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](15, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](16, ItemVersionsComponent_div_0_div_1_ds_pagination_5_tr_16_Template, 18, 22, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](17, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const versionsDTO_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2).ngIf;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("hideGear", true)("hidePagerWhenSinglePage", true)("paginationOptions", ctx_r1.options)("collectionSize", versionsDTO_r12.totalElements)("retainScrollPosition", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](6, 11, "item.version.history.table.version"));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](8, 13, ctx_r1.showSubmitter$));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](11, 15, "item.version.history.table.date"));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](14, 17, "item.version.history.table.summary"));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", versionsDTO_r12.versionDTOs);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"]("*\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](19, 19, "item.version.history.selected"), "");
  }
}
function ItemVersionsComponent_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, ItemVersionsComponent_div_0_div_1_h2_1_Template, 3, 3, "h2", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "ds-alert", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](5, ItemVersionsComponent_div_0_div_1_ds_pagination_5_Template, 20, 21, "ds-pagination", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const itemVersion_r11 = ctx.ngIf;
    const versionsDTO_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().ngIf;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.displayTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("type", ctx_r1.AlertTypeEnum.Info);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind2"](4, 4, "item.version.history.selected.alert", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction1"](7, _c0, itemVersion_r11.version)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", versionsDTO_r12.versionDTOs.length > 0);
  }
}
function ItemVersionsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, ItemVersionsComponent_div_0_div_1_Template, 6, 9, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", (tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](2, 1, ctx_r1.versionRD$)) == null ? null : tmp_3_0.payload);
  }
}
function ItemVersionsComponent_ng_template_2_ds_alert_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "ds-alert", 36);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("content", "item.version.history.empty")("type", ctx_r1.AlertTypeEnum.Info);
  }
}
function ItemVersionsComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](0, ItemVersionsComponent_ng_template_2_ds_alert_0_Template, 1, 2, "ds-alert", 35);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.displayWhenEmpty);
  }
}
/**
 * Component listing all available versions of the history the provided item is a part of
 */
class ItemVersionsComponent {
  constructor(versionHistoryService, versionService, paginationService, notificationsService, translateService, authorizationService, configurationService) {
    this.versionHistoryService = versionHistoryService;
    this.versionService = versionService;
    this.paginationService = paginationService;
    this.notificationsService = notificationsService;
    this.translateService = translateService;
    this.authorizationService = authorizationService;
    this.configurationService = configurationService;
    /**
     * An option to display the list of versions, even when there aren't any.
     * Instead of the table, an alert will be displayed, notifying the user there are no other versions present
     * for the current item.
     */
    this.displayWhenEmpty = false;
    /**
     * Whether or not to display the title
     */
    this.displayTitle = true;
    /**
     * Array of active subscriptions
     */
    this.subs = [];
    /**
     * The AlertType enumeration
     * @type {AlertType}
     */
    this.AlertTypeEnum = _shared_alert_alert_type__WEBPACK_IMPORTED_MODULE_9__.AlertType;
    /**
     * Show submitter in version history table
     */
    this.showSubmitter$ = this.showSubmitter();
    /**
     * The amount of versions to display per page
     */
    this.pageSize = 10;
    /**
     * The page options to use for fetching the versions
     * Start at page 1 and always use the set page size
     */
    this.options = Object.assign(new _shared_pagination_pagination_component_options_model__WEBPACK_IMPORTED_MODULE_14__.PaginationComponentOptions(), {
      id: 'ivo',
      currentPage: 1,
      pageSize: this.pageSize
    });
  }
  /**
   * True when a version is being edited
   * (used to disable buttons for other versions)
   */
  isAnyBeingEdited() {
    return this.versionBeingEditedNumber != null;
  }
  /**
   * True if the specified version is being edited
   * (used to show input field and to change buttons for specified version)
   */
  isThisBeingEdited(version) {
    return version?.version === this.versionBeingEditedNumber;
  }
  /**
   * Enables editing for the specified version
   */
  enableVersionEditing(version) {
    this.versionBeingEditedSummary = version?.summary;
    this.versionBeingEditedNumber = version?.version;
    this.versionBeingEditedId = version?.id;
  }
  /**
   * Disables editing for the specified version and discards all pending changes
   */
  disableVersionEditing() {
    this.versionBeingEditedSummary = undefined;
    this.versionBeingEditedNumber = undefined;
    this.versionBeingEditedId = undefined;
  }
  /**
   * Applies changes to version currently being edited
   */
  onSummarySubmit() {
    const successMessageKey = 'item.version.edit.notification.success';
    const failureMessageKey = 'item.version.edit.notification.failure';
    this.versionService.findById(this.versionBeingEditedId).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_7__.getFirstSucceededRemoteData)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.switchMap)(findRes => {
      const payload = findRes.payload;
      const summary = {
        summary: this.versionBeingEditedSummary
      };
      const updatedVersion = Object.assign({}, payload, summary);
      return this.versionService.update(updatedVersion).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_7__.getFirstCompletedRemoteData)());
    })).subscribe(updatedVersionRD => {
      if (updatedVersionRD.hasSucceeded) {
        this.notificationsService.success(null, this.translateService.get(successMessageKey, {
          'version': this.versionBeingEditedNumber
        }));
        this.getAllVersions(this.versionHistory$);
      } else {
        this.notificationsService.warning(null, this.translateService.get(failureMessageKey, {
          'version': this.versionBeingEditedNumber
        }));
      }
      this.disableVersionEditing();
    });
  }
  /**
   * Check is the current user can edit the version summary
   * @param version
   */
  canEditVersion$(version) {
    return this.authorizationService.isAuthorized(_core_data_feature_authorization_feature_id__WEBPACK_IMPORTED_MODULE_2__.FeatureID.CanEditVersion, version.self);
  }
  /**
   * Show submitter in version history table
   */
  showSubmitter() {
    const includeSubmitter$ = this.configurationService.findByPropertyName('versioning.item.history.include.submitter').pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_7__.getFirstSucceededRemoteDataPayload)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.map)(configurationProperty => configurationProperty.values[0]), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.startWith)(false));
    const isAdmin$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_23__.combineLatest)([this.authorizationService.isAuthorized(_core_data_feature_authorization_feature_id__WEBPACK_IMPORTED_MODULE_2__.FeatureID.IsCollectionAdmin), this.authorizationService.isAuthorized(_core_data_feature_authorization_feature_id__WEBPACK_IMPORTED_MODULE_2__.FeatureID.IsCommunityAdmin), this.authorizationService.isAuthorized(_core_data_feature_authorization_feature_id__WEBPACK_IMPORTED_MODULE_2__.FeatureID.AdministratorOf)]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.map)(([isCollectionAdmin, isCommunityAdmin, isSiteAdmin]) => {
      return isCollectionAdmin || isCommunityAdmin || isSiteAdmin;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_24__.take)(1));
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_23__.combineLatest)([includeSubmitter$, isAdmin$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.map)(([includeSubmitter, isAdmin]) => {
      return includeSubmitter && isAdmin;
    }));
  }
  /**
   * Get all versions for the given version history and store them in versionRD$
   * @param versionHistory$
   */
  getAllVersions(versionHistory$) {
    const currentPagination = this.paginationService.getCurrentPagination(this.options.id, this.options);
    this.versionsDTO$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_23__.combineLatest)([versionHistory$, currentPagination]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.switchMap)(([versionHistory, options]) => {
      return this.versionHistoryService.getVersions(versionHistory.id, new _shared_search_models_paginated_search_options_model__WEBPACK_IMPORTED_MODULE_15__.PaginatedSearchOptions({
        pagination: Object.assign({}, options, {
          currentPage: options.currentPage
        })
      }), false, true, (0,_shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_16__.followLink)('item'), (0,_shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_16__.followLink)('eperson'));
    }), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_7__.getFirstCompletedRemoteData)(), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_7__.getRemoteDataPayload)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.map)(versions => ({
      totalElements: versions.totalElements,
      versionDTOs: (versions?.page ?? []).map(version => ({
        version: version,
        canEditVersion: this.canEditVersion$(version)
      }))
    })));
  }
  /**
   * Updates the page
   */
  onPageChange() {
    this.getAllVersions(this.versionHistory$);
  }
  /**
   * Initialize all observables
   */
  ngOnInit() {
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_11__.hasValue)(this.item.version)) {
      this.versionRD$ = this.item.version;
      this.versionHistoryRD$ = this.versionRD$.pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_7__.getAllSucceededRemoteData)(), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_7__.getRemoteDataPayload)(), (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_11__.hasValueOperator)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.switchMap)(version => version.versionhistory));
      this.versionHistory$ = this.versionHistoryRD$.pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_7__.getFirstSucceededRemoteDataPayload)(), (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_11__.hasValueOperator)());
      // If there is a draft item in the version history the 'Create version' button is disabled and a different tooltip message is shown
      this.hasDraftVersion$ = this.versionHistoryRD$.pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_7__.getFirstSucceededRemoteDataPayload)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.map)(res => Boolean(res?.draftVersion)));
      this.getAllVersions(this.versionHistory$);
      this.hasEpersons$ = this.versionsDTO$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.map)(versionsDTO => versionsDTO.versionDTOs.filter(versionDTO => versionDTO.version.eperson !== undefined).length > 0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.startWith)(false));
      this.itemPageRoutes$ = this.versionsDTO$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.switchMap)(versionsDTO => (0,rxjs__WEBPACK_IMPORTED_MODULE_23__.combineLatest)(versionsDTO.versionDTOs.map(versionDTO => versionDTO.version.item.pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_7__.getAllSucceededRemoteDataPayload)())))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.map)(versions => {
        const itemPageRoutes = {};
        versions.forEach(item => itemPageRoutes[item.uuid] = (0,_item_page_routing_paths__WEBPACK_IMPORTED_MODULE_17__.getItemPageRoute)(item));
        return itemPageRoutes;
      }));
    }
  }
  ngOnDestroy() {
    this.cleanupSubscribes();
    this.paginationService.clearPagination(this.options.id);
  }
  /**
   * Unsub all subscriptions
   */
  cleanupSubscribes() {
    this.subs.filter(sub => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_11__.hasValue)(sub)).forEach(sub => sub.unsubscribe());
  }
  static {
    this.ɵfac = function ItemVersionsComponent_Factory(t) {
      return new (t || ItemVersionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_core_data_version_history_data_service__WEBPACK_IMPORTED_MODULE_4__.VersionHistoryDataService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_core_data_version_data_service__WEBPACK_IMPORTED_MODULE_3__.VersionDataService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_core_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_5__.PaginationService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_12__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_core_data_feature_authorization_authorization_data_service__WEBPACK_IMPORTED_MODULE_1__.AuthorizationDataService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_core_data_configuration_data_service__WEBPACK_IMPORTED_MODULE_0__.ConfigurationDataService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineComponent"]({
      type: ItemVersionsComponent,
      selectors: [["ds-item-versions"]],
      inputs: {
        item: "item",
        displayWhenEmpty: "displayWhenEmpty",
        displayTitle: "displayTitle",
        displayActions: "displayActions"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵStandaloneFeature"]],
      decls: 4,
      vars: 4,
      consts: [["noItemVersion", ""], ["showSummary", ""], ["editSummary", ""], ["notThisBeingEdited", ""], ["class", "mb-2", 4, "ngIf", "ngIfElse"], [1, "mb-2"], [4, "ngIf"], ["class", "h4", 4, "ngIf"], [3, "type"], [3, "hideGear", "hidePagerWhenSinglePage", "paginationOptions", "collectionSize", "retainScrollPosition", "paginationChange", 4, "ngIf"], [1, "h4"], [3, "paginationChange", "hideGear", "hidePagerWhenSinglePage", "paginationOptions", "collectionSize", "retainScrollPosition"], [1, "table", "table-striped", "table-bordered", "align-middle", "my-2"], ["scope", "col"], ["scope", "col", 4, "ngIf"], [3, "id", 4, "ngFor", "ngForOf"], [3, "id"], [1, "version-row-element-version"], [3, "versionsHistoryChange", "hasDraftVersion", "version", "item", "displayActions", "itemVersion", "versionBeingEditedNumber"], ["class", "version-row-element-editor", 4, "ngIf"], [1, "version-row-element-date"], [1, "version-row-element-summary"], [1, "float-left"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["class", "float-right btn-group edit-field space-children-mr", 4, "ngIf"], [1, "version-row-element-editor"], ["type", "text", 1, "form-control", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "float-right", "btn-group", "edit-field", "space-children-mr"], [4, "ngIf", "ngIfElse"], [1, "btn", "btn-sm", "btn-outline-warning", 3, "click", "title"], [1, "fas", "fa-undo-alt", "fa-fw"], [1, "btn", "btn-outline-success", "btn-sm", 3, "click", "title"], [1, "fas", "fa-check", "fa-fw"], [1, "btn", "btn-outline-primary", "btn-sm", "version-row-element-edit", 3, "click", "dsBtnDisabled", "title"], [1, "fas", "fa-edit", "fa-fw"], [3, "content", "type", 4, "ngIf"], [3, "content", "type"]],
      template: function ItemVersionsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](0, ItemVersionsComponent_div_0_Template, 3, 3, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](1, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](2, ItemVersionsComponent_ng_template_2_Template, 1, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplateRefExtractor"]);
        }
        if (rf & 2) {
          const noItemVersion_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](1, 2, ctx.versionsDTO$))("ngIfElse", noItemVersion_r13);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_26__.NgIf, _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_8__.AlertComponent, _shared_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_13__.PaginationComponent, _angular_common__WEBPACK_IMPORTED_MODULE_26__.NgFor, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_26__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_26__.DatePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__.TranslatePipe, _item_versions_row_element_version_item_versions_row_element_version_component__WEBPACK_IMPORTED_MODULE_18__.ItemVersionsRowElementVersionComponent, _shared_btn_disabled_directive__WEBPACK_IMPORTED_MODULE_10__.BtnDisabledDirective],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW0tdmVyc2lvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUEiLCJmaWxlIjoiaXRlbS12ZXJzaW9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaXRlbS1wYWdlL3ZlcnNpb25zL2l0ZW0tdmVyc2lvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQSxna0JBQWdrQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 80502:
/*!*****************************************************************************!*\
  !*** ./src/app/item-page/versions/notice/item-versions-notice.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ItemVersionsNoticeComponent: () => (/* binding */ ItemVersionsNoticeComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 80560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 17796);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 84975);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 62997);
/* harmony import */ var _core_data_version_history_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/data/version-history-data.service */ 93860);
/* harmony import */ var _core_shared_item_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/shared/item.model */ 88318);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/shared/operators */ 55757);
/* harmony import */ var _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/alert/alert.component */ 16292);
/* harmony import */ var _shared_alert_alert_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/alert/alert-type */ 47978);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/empty.util */ 82777);
/* harmony import */ var _item_page_routing_paths__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../item-page-routing-paths */ 90887);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 90310);














const _c0 = a0 => ({
  destination: a0
});
function ItemVersionsNoticeComponent_ds_alert_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "ds-alert", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("content", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](3, 7, "item.version.notice", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](10, _c0, ctx_r0.getItemPage((tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 5, (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 3, ctx_r0.latestVersion$)) == null ? null : tmp_1_0.item)) == null ? null : tmp_1_0.payload))))("dismissible", false)("type", ctx_r0.AlertTypeEnum.Warning);
  }
}
/**
 * Component for displaying a warning notice when the item is not the latest version within its version history
 * The notice contains a link to the latest version's item page
 */
class ItemVersionsNoticeComponent {
  constructor(versionHistoryService) {
    this.versionHistoryService = versionHistoryService;
    /**
     * Pagination options to fetch a single version on the first page (this is the latest version in the history)
     */
    /**
     * The AlertType enumeration
     * @type {AlertType}
     */
    this.AlertTypeEnum = _shared_alert_alert_type__WEBPACK_IMPORTED_MODULE_4__.AlertType;
  }
  /**
   * Initialize the component's observables
   */
  ngOnInit() {
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_5__.hasValue)(this.item.version)) {
      this.versionRD$ = this.item.version;
      this.versionHistoryRD$ = this.versionRD$.pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_2__.getAllSucceededRemoteData)(), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_2__.getRemoteDataPayload)(), (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_5__.hasValueOperator)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.switchMap)(version => version.versionhistory));
      this.latestVersion$ = this.versionHistoryRD$.pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_2__.getFirstCompletedRemoteData)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.switchMap)(vhRD => {
        if (vhRD.hasSucceeded) {
          return this.versionHistoryService.getLatestVersionFromHistory$(vhRD.payload);
        } else {
          return rxjs__WEBPACK_IMPORTED_MODULE_9__.EMPTY;
        }
      }));
      this.showLatestVersionNotice$ = this.versionRD$.pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_2__.getFirstCompletedRemoteData)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.switchMap)(versionRD => {
        if (versionRD.hasSucceeded) {
          return this.versionHistoryService.isLatest$(versionRD.payload).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(isLatest => isLatest != null && !isLatest));
        } else {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)(false);
        }
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.startWith)(false));
    }
  }
  /**
   * Get the item page url
   * @param item The item for which the url is requested
   */
  getItemPage(item) {
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_5__.hasValue)(item)) {
      return (0,_item_page_routing_paths__WEBPACK_IMPORTED_MODULE_6__.getItemPageRoute)(item);
    }
  }
  static {
    this.ɵfac = function ItemVersionsNoticeComponent_Factory(t) {
      return new (t || ItemVersionsNoticeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_data_version_history_data_service__WEBPACK_IMPORTED_MODULE_0__.VersionHistoryDataService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: ItemVersionsNoticeComponent,
      selectors: [["ds-item-versions-notice"]],
      inputs: {
        item: "item"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 3,
      consts: [[3, "content", "dismissible", "type", 4, "ngIf"], [3, "content", "dismissible", "type"]],
      template: function ItemVersionsNoticeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, ItemVersionsNoticeComponent_ds_alert_0_Template, 4, 12, "ds-alert", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "async");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 1, ctx.showLatestVersionNotice$) === true);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_3__.AlertComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslatePipe],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 86964:
/*!********************************************!*\
  !*** ./src/app/shared/utils/split.pipe.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SplitPipe: () => (/* binding */ SplitPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 90310);

/**
 * Custom pipe to split a string into an array of substrings based on a specified separator.
 * @param value - The string to be split.
 * @param separator - The separator used to split the string.
 * @returns An array of substrings.
 */
class SplitPipe {
  transform(value, separator) {
    return value.split(separator);
  }
  static {
    this.ɵfac = function SplitPipe_Factory(t) {
      return new (t || SplitPipe)();
    };
  }
  static {
    this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "dsSplit",
      type: SplitPipe,
      pure: true,
      standalone: true
    });
  }
}

/***/ }),

/***/ 42176:
/*!******************************************************************************************************!*\
  !*** ./src/themes/ lazy ^\.\/.*\/app\/item\-page\/alerts\/item\-alerts\.component$ namespace object ***!
  \******************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./custom/app/item-page/alerts/item-alerts.component": [
		5215,
		"src_themes_custom_app_item-page_alerts_item-alerts_component_ts"
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
webpackAsyncContext.id = 42176;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 63614:
/*!*********************************************************************************************************************************************!*\
  !*** ./src/themes/ lazy ^\.\/.*\/app\/item\-page\/full\/field\-components\/file\-section\/full\-file\-section\.component$ namespace object ***!
  \*********************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./custom/app/item-page/full/field-components/file-section/full-file-section.component": [
		42991,
		"src_themes_custom_app_item-page_full_field-components_file-section_full-file-section_component_ts"
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
webpackAsyncContext.id = 63614;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 4872:
/*!********************************************************************************************************!*\
  !*** ./src/themes/ lazy ^\.\/.*\/app\/item\-page\/full\/full\-item\-page\.component$ namespace object ***!
  \********************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./custom/app/item-page/full/full-item-page.component": [
		39325,
		"src_themes_custom_app_item-page_full_full-item-page_component_ts"
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
webpackAsyncContext.id = 4872;
module.exports = webpackAsyncContext;

/***/ })

}]);
//# sourceMappingURL=default-src_app_item-page_full_themed-full-item-page_component_ts.js.map