"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["default-src_app_shared_access-control-form-container_access-control-form-container_component_ts"],{

/***/ 82719:
/*!****************************************************************!*\
  !*** ./src/app/core/config/bulk-access-config-data.service.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BulkAccessConfigDataService: () => (/* binding */ BulkAccessConfigDataService)
/* harmony export */ });
/* harmony import */ var _cache_builders_remote_data_build_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cache/builders/remote-data-build.service */ 76799);
/* harmony import */ var _cache_object_cache_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cache/object-cache.service */ 41684);
/* harmony import */ var _data_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/request.service */ 32473);
/* harmony import */ var _shared_hal_endpoint_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/hal-endpoint.service */ 4910);
/* harmony import */ var _config_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config-data.service */ 78971);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 90310);










/**
 * Data Service responsible for retrieving Bulk Access Condition Options from the REST API
 */
class BulkAccessConfigDataService extends _config_data_service__WEBPACK_IMPORTED_MODULE_4__.ConfigDataService {
  constructor(requestService, rdbService, objectCache, halService) {
    super('bulkaccessconditionoptions', requestService, rdbService, objectCache, halService);
    this.requestService = requestService;
    this.rdbService = rdbService;
    this.objectCache = objectCache;
    this.halService = halService;
  }
  static {
    this.ɵfac = function BulkAccessConfigDataService_Factory(t) {
      return new (t || BulkAccessConfigDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_data_request_service__WEBPACK_IMPORTED_MODULE_2__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_cache_builders_remote_data_build_service__WEBPACK_IMPORTED_MODULE_0__.RemoteDataBuildService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_cache_object_cache_service__WEBPACK_IMPORTED_MODULE_1__.ObjectCacheService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_shared_hal_endpoint_service__WEBPACK_IMPORTED_MODULE_3__.HALEndpointService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
      token: BulkAccessConfigDataService,
      factory: BulkAccessConfigDataService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 78971:
/*!****************************************************!*\
  !*** ./src/app/core/config/config-data.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfigDataService: () => (/* binding */ ConfigDataService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var _data_base_identifiable_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/base/identifiable-data.service */ 63897);
/* harmony import */ var _shared_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/operators */ 55757);



/**
 * Abstract data service to retrieve configuration objects from the REST server.
 * Common logic for configuration objects should be implemented here.
 */
class ConfigDataService extends _data_base_identifiable_data_service__WEBPACK_IMPORTED_MODULE_0__.IdentifiableDataService {
  /**
   * Returns an observable of {@link RemoteData} of an object, based on an href, with a list of
   * {@link FollowLinkConfig}, to automatically resolve {@link HALLink}s of the object
   *
   * Throws an error if a configuration object cannot be retrieved.
   *
   * @param href                        The url of object we want to retrieve
   * @param useCachedVersionIfAvailable If this is true, the request will only be sent if there's
   *                                    no valid cached version. Defaults to true
   * @param reRequestOnStale            Whether or not the request should automatically be re-
   *                                    requested after the response becomes stale
   * @param linksToFollow               List of {@link FollowLinkConfig} that indicate which
   *                                    {@link HALLink}s should be automatically resolved
   */
  findByHref(href, useCachedVersionIfAvailable = true, reRequestOnStale = true, ...linksToFollow) {
    return super.findByHref(href, useCachedVersionIfAvailable, reRequestOnStale, ...linksToFollow).pipe((0,_shared_operators__WEBPACK_IMPORTED_MODULE_1__.getFirstCompletedRemoteData)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(rd => {
      if (rd.hasFailed) {
        throw new Error(`Couldn't retrieve the config`);
      } else {
        return rd;
      }
    }));
  }
  /**
   * Returns a config object by given name
   *
   * Throws an error if a configuration object cannot be retrieved.
   *
   * @param name                        The name of configuration to retrieve
   * @param useCachedVersionIfAvailable If this is true, the request will only be sent if there's
   *                                    no valid cached version. Defaults to true
   * @param reRequestOnStale            Whether or not the request should automatically be re-
   *                                    requested after the response becomes stale
   * @param linksToFollow               List of {@link FollowLinkConfig} that indicate which
   *                                    {@link HALLink}s should be automatically resolved
   */
  findByName(name, useCachedVersionIfAvailable = true, reRequestOnStale = true, ...linksToFollow) {
    return super.findById(name, useCachedVersionIfAvailable, reRequestOnStale, ...linksToFollow);
  }
}

/***/ }),

/***/ 76214:
/*!***********************************************************************************************************************!*\
  !*** ./src/app/shared/access-control-form-container/access-control-array-form/access-control-array-form.component.ts ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccessControlArrayFormComponent: () => (/* binding */ AccessControlArrayFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 56106);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 49966);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var _btn_disabled_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../btn-disabled.directive */ 60456);
/* harmony import */ var _date_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../date.util */ 63604);
/* harmony import */ var _to_date_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./to-date.pipe */ 12528);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 90310);











const _c0 = ["ngForm"];
function AccessControlArrayFormComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "access-control-no-access-conditions-warning-message"), " ");
  }
}
function AccessControlArrayFormComponent_ng_container_3_option_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", option_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", option_r5.name, " ");
  }
}
function AccessControlArrayFormComponent_ng_container_3_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 21)(1, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 17)(5, "input", 22, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "toDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function AccessControlArrayFormComponent_ng_container_3_div_13_Template_input_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
      const control_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](control_r3.startDate, $event) || (control_r3.startDate = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 23)(9, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AccessControlArrayFormComponent_ng_container_3_div_13_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
      const d_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](6);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](d_r7.toggle());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "small", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const control_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const ngForm_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("for", "accesscontrolstartdate-", control_r3.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 11, "access-control-option-start-date"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("id", "accesscontrolstartdate-", control_r3.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("name", "startDate-", control_r3.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", control_r3.startDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("maxDate", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 13, control_r3.maxStartDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dsBtnDisabled", ngForm_r8.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](12, 15, "access-control-option-start-date-note"), " ");
  }
}
function AccessControlArrayFormComponent_ng_container_3_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 21)(1, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 17)(5, "input", 22, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "toDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function AccessControlArrayFormComponent_ng_container_3_div_14_Template_input_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      const control_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](control_r3.endDate, $event) || (control_r3.endDate = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 23)(9, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AccessControlArrayFormComponent_ng_container_3_div_14_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      const d1_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](6);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](d1_r10.toggle());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "small", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const control_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const ngForm_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("for", "accesscontrolenddate-", control_r3.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 11, "access-control-option-end-date"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("id", "accesscontrolenddate-", control_r3.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("name", "endDate-", control_r3.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", control_r3.endDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("maxDate", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 13, control_r3.maxEndDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dsBtnDisabled", ngForm_r8.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](12, 15, "access-control-option-end-date-note"), " ");
  }
}
function AccessControlArrayFormComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 8)(2, "div", 9)(3, "div")(4, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "select", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function AccessControlArrayFormComponent_ng_container_3_Template_select_ngModelChange_7_listener($event) {
      const control_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](control_r3.itemName, $event) || (control_r3.itemName = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AccessControlArrayFormComponent_ng_container_3_Template_select_ngModelChange_7_listener($event) {
      const control_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.accessControlChanged(control_r3, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, AccessControlArrayFormComponent_ng_container_3_option_9_Template, 2, 2, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "small", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, AccessControlArrayFormComponent_ng_container_3_div_13_Template, 13, 17, "div", 15)(14, AccessControlArrayFormComponent_ng_container_3_div_14_Template, 13, 17, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div")(16, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 17)(19, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AccessControlArrayFormComponent_ng_container_3_Template_button_click_19_listener() {
      const control_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.removeAccessControlItem(control_r3.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const control_r3 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const ngForm_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("ngModelGroup", "access-control-item-", control_r3.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("for", "accesscontroloption-", control_r3.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 17, "access-control-option-label"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("id", "accesscontroloption-", control_r3.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("name", "itemName-", control_r3.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ngForm_r8.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", control_r3.itemName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r3.dropdownOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](12, 19, "access-control-option-note"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", control_r3.hasStartDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", control_r3.hasEndDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dsBtnDisabled", ngForm_r8.disabled || ctx_r3.form.accessControls.length === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](20, 21, "access-control-remove"));
  }
}
class AccessControlArrayFormComponent {
  constructor() {
    this.dropdownOptions = [];
    this.form = {
      accessControls: [emptyAccessControlItem()] // Start with one empty access control item
    };
    this.formDisabled = true;
    /**
     * Disable the form.
     * This will be used to disable the form from the parent component.
     */
    this.disable = () => {
      this.ngForm.form.disable();
      this.formDisabled = true;
    };
    /**
     * Enable the form.
     * This will be used to enable the form from the parent component.
     */
    this.enable = () => {
      this.ngForm.form.enable();
      this.formDisabled = false;
    };
  }
  ngOnInit() {
    this.disable(); // Disable the form by default
  }
  get allControlsAreEmpty() {
    return this.form.accessControls.every(x => x.itemName === null || x.itemName === '');
  }
  get showWarning() {
    return this.mode === 'replace' && this.allControlsAreEmpty && !this.formDisabled;
  }
  /**
   * Add a new access control item to the form.
   * Start and end date are disabled by default.
   * @param itemName The name of the item to add
   */
  addAccessControlItem(itemName = null) {
    this.form.accessControls = [...this.form.accessControls, {
      ...emptyAccessControlItem(),
      itemName
    }];
  }
  /**
   * Remove an access control item from the form.
   * @param ngModelGroup
   * @param index
   */
  removeAccessControlItem(id) {
    this.form.accessControls = this.form.accessControls.filter(item => item.id !== id);
  }
  /**
   * Get the value of the form.
   * This will be used to read the form value from the parent component.
   * @return The form value
   */
  getValue() {
    return this.form.accessControls.filter(x => x.itemName !== null && x.itemName !== '').map(x => ({
      name: x.itemName,
      startDate: x.startDate ? (0,_date_util__WEBPACK_IMPORTED_MODULE_1__.dateToISOFormat)(x.startDate) : null,
      endDate: x.endDate ? (0,_date_util__WEBPACK_IMPORTED_MODULE_1__.dateToISOFormat)(x.endDate) : null
    }));
  }
  /**
   * Set the value of the form from the parent component.
   */
  reset() {
    this.form.accessControls = [];
    // Add an empty access control item by default
    this.addAccessControlItem();
    this.disable();
  }
  accessControlChanged(control, selectedItem) {
    const item = this.dropdownOptions.find(x => x.name === selectedItem);
    control.startDate = null;
    control.endDate = null;
    control.hasStartDate = item?.hasStartDate || false;
    control.hasEndDate = item?.hasEndDate || false;
    control.maxStartDate = item?.maxStartDate || null;
    control.maxEndDate = item?.maxEndDate || null;
  }
  trackById(index, item) {
    return item.id;
  }
  static {
    this.ɵfac = function AccessControlArrayFormComponent_Factory(t) {
      return new (t || AccessControlArrayFormComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: AccessControlArrayFormComponent,
      selectors: [["ds-access-control-array-form"]],
      viewQuery: function AccessControlArrayFormComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 7);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.ngForm = _t.first);
        }
      },
      inputs: {
        dropdownOptions: "dropdownOptions",
        mode: "mode",
        type: "type"
      },
      exportAs: ["accessControlArrayForm"],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
      decls: 8,
      vars: 9,
      consts: [["ngForm", "ngForm"], ["d", "ngbDatepicker"], ["d1", "ngbDatepicker"], ["class", "alert alert-warning", 4, "ngIf"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["type", "button", 1, "btn", "btn-outline-primary", "mt-3", 3, "click", "id", "dsBtnDisabled"], [1, "fas", "fa-plus"], [1, "alert", "alert-warning"], [1, "access-control-item", "mt-3", 3, "ngModelGroup"], [1, "d-flex", "flex-column"], [3, "for"], [1, "form-control", 3, "ngModelChange", "id", "disabled", "ngModel", "name"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "form-text", "text-muted"], ["class", "mt-3", 4, "ngIf"], ["aria-hidden", "true", 1, "mb-2", "d-inline-block"], [1, "input-group"], ["type", "button", 1, "btn", "btn-outline-danger", 3, "click", "dsBtnDisabled"], [1, "fas", "fa-trash"], [3, "value"], [1, "mt-3"], ["placeholder", "yyyy-mm-dd", "ngbDatepicker", "", "placement", "top-start top-end bottom-start bottom-end", 1, "form-control", 3, "ngModelChange", "id", "ngModel", "name", "maxDate"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-outline-secondary", "fas", "fa-calendar", 3, "click", "dsBtnDisabled"]],
      template: function AccessControlArrayFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", null, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, AccessControlArrayFormComponent_div_2_Template, 3, 3, "div", 3)(3, AccessControlArrayFormComponent_ng_container_3_Template, 22, 23, "ng-container", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AccessControlArrayFormComponent_Template_button_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.addAccessControlItem());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "i", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          const ngForm_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showWarning);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.form.accessControls)("ngForTrackBy", ctx.trackById);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("id", "add-btn-", ctx.type, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dsBtnDisabled", ngForm_r8.disabled);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 7, "access-control-add-more"), " ");
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModelGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgFor, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbDatepickerModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbInputDatepicker, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe, _to_date_pipe__WEBPACK_IMPORTED_MODULE_2__.ToDatePipe, _btn_disabled_directive__WEBPACK_IMPORTED_MODULE_0__.BtnDisabledDirective],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n.access-control-item[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 50px;\n  grid-gap: 10px;\n  padding-bottom: 15px;\n  border-bottom: 2px dotted grey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY2Vzcy1jb250cm9sLWFycmF5LWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQTtFQUNFLGFBQUE7RUFDQSwrQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLDhCQUFBO0FBQ0YiLCJmaWxlIjoiYWNjZXNzLWNvbnRyb2wtYXJyYXktZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovXG4uYWNjZXNzLWNvbnRyb2wtaXRlbSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDUwcHg7XG4gIGdyaWQtZ2FwOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IGRvdHRlZCBncmV5O1xufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2FjY2Vzcy1jb250cm9sLWZvcm0tY29udGFpbmVyL2FjY2Vzcy1jb250cm9sLWFycmF5LWZvcm0vYWNjZXNzLWNvbnRyb2wtYXJyYXktZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBO0VBQ0UsYUFBQTtFQUNBLCtCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsOEJBQUE7QUFDRjtBQUNBLDQ0QkFBNDRCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi9cbi5hY2Nlc3MtY29udHJvbC1pdGVtIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNTBweDtcbiAgZ3JpZC1nYXA6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICBib3JkZXItYm90dG9tOiAycHggZG90dGVkIGdyZXk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}
const emptyAccessControlItem = () => ({
  id: randomID(),
  itemName: null,
  startDate: null,
  hasStartDate: false,
  maxStartDate: null,
  endDate: null,
  hasEndDate: false,
  maxEndDate: null
});
const randomID = () => Math.floor(Math.random() * 1000000);

/***/ }),

/***/ 12528:
/*!************************************************************************************************!*\
  !*** ./src/app/shared/access-control-form-container/access-control-array-form/to-date.pipe.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ToDatePipe: () => (/* binding */ ToDatePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 90310);

class ToDatePipe {
  transform(dateValue) {
    if (!dateValue) {
      return null;
    }
    const date = new Date(dateValue);
    return {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate()
    };
  }
  static {
    this.ɵfac = function ToDatePipe_Factory(t) {
      return new (t || ToDatePipe)();
    };
  }
  static {
    this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "toDate",
      type: ToDatePipe,
      pure: false,
      standalone: true
    });
  }
}

/***/ }),

/***/ 61843:
/*!****************************************************************************************************!*\
  !*** ./src/app/shared/access-control-form-container/access-control-form-container-intial-state.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createAccessControlInitialFormState: () => (/* binding */ createAccessControlInitialFormState)
/* harmony export */ });
const createAccessControlInitialFormState = () => ({
  item: {
    toggleStatus: false,
    accessMode: 'replace'
  },
  bitstream: {
    toggleStatus: false,
    accessMode: 'replace',
    changesLimit: 'all',
    // 'all' | 'selected'
    selectedBitstreams: []
  }
});

/***/ }),

/***/ 43664:
/*!*************************************************************************************************!*\
  !*** ./src/app/shared/access-control-form-container/access-control-form-container.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccessControlFormContainerComponent: () => (/* binding */ AccessControlFormContainerComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ 56106);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var ngx_ui_switch__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-ui-switch */ 74253);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 66853);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 19847);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 78374);
/* harmony import */ var _core_config_bulk_access_config_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/config/bulk-access-config-data.service */ 82719);
/* harmony import */ var _core_data_remote_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/data/remote-data */ 1716);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/shared/operators */ 55757);
/* harmony import */ var _alert_alert_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../alert/alert.component */ 16292);
/* harmony import */ var _alert_alert_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../alert/alert-type */ 47978);
/* harmony import */ var _btn_disabled_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../btn-disabled.directive */ 60456);
/* harmony import */ var _object_list_selectable_list_selectable_list_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../object-list/selectable-list/selectable-list.service */ 13329);
/* harmony import */ var _access_control_array_form_access_control_array_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./access-control-array-form/access-control-array-form.component */ 76214);
/* harmony import */ var _access_control_form_container_intial_state__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./access-control-form-container-intial-state */ 61843);
/* harmony import */ var _bulk_access_control_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./bulk-access-control.service */ 54028);
/* harmony import */ var _item_access_control_select_bitstreams_modal_item_access_control_select_bitstreams_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./item-access-control-select-bitstreams-modal/item-access-control-select-bitstreams-modal.component */ 22202);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 49966);



























const _c0 = ["bitstreamAccessCmp"];
const _c1 = ["itemAccessCmp"];
const _c2 = () => [];
function AccessControlFormContainerComponent_ds_alert_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "ds-alert", 29);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("type", ctx_r1.AlertType.Info)("content", ctx_r1.titleMessage);
  }
}
function AccessControlFormContainerComponent_div_43_button_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function AccessControlFormContainerComponent_div_43_button_15_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.openSelectBitstreamsModal(ctx_r1.itemRD.payload));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("dsBtnDisabled", !ctx_r1.state.bitstream.toggleStatus || ctx_r1.state.bitstream.changesLimit !== "selected");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](1, 2, "access-control-bitstreams-select"));
  }
}
function AccessControlFormContainerComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 11)(1, "fieldset", 30)(2, "legend", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "div", 14)(6, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayListener"]("ngModelChange", function AccessControlFormContainerComponent_div_43_Template_input_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayBindingSet"](ctx_r1.state.bitstream.changesLimit, $event) || (ctx_r1.state.bitstream.changesLimit = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "div", 14)(11, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayListener"]("ngModelChange", function AccessControlFormContainerComponent_div_43_Template_input_ngModelChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayBindingSet"](ctx_r1.state.bitstream.changesLimit, $event) || (ctx_r1.state.bitstream.changesLimit = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](15, AccessControlFormContainerComponent_div_43_button_15_Template, 3, 4, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](4, 9, "access-control-limit-to-specific"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", !ctx_r1.state.bitstream.toggleStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.state.bitstream.changesLimit);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](9, 11, "access-control-process-all-bitstreams"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", !ctx_r1.state.bitstream.toggleStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.state.bitstream.changesLimit);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate2"](" ", ctx_r1.state.bitstream.selectedBitstreams.length, " ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](14, 13, "access-control-bitstreams-selected"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.itemRD);
  }
}
function AccessControlFormContainerComponent_hr_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "hr");
  }
}
function AccessControlFormContainerComponent_div_67_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 39)(1, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function AccessControlFormContainerComponent_div_67_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.reset());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function AccessControlFormContainerComponent_div_67_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.submit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 3, "access-control-cancel"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("dsBtnDisabled", !ctx_r1.state.item.toggleStatus && !ctx_r1.state.bitstream.toggleStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](6, 5, "access-control-execute"), " ");
  }
}
class AccessControlFormContainerComponent {
  constructor(bulkAccessConfigService, bulkAccessControlService, selectableListService, modalService, cdr) {
    this.bulkAccessConfigService = bulkAccessConfigService;
    this.bulkAccessControlService = bulkAccessControlService;
    this.selectableListService = selectableListService;
    this.modalService = modalService;
    this.cdr = cdr;
    /**
     * Will be used to determine if we need to show the limit changes to specific bitstreams radio buttons
     */
    this.showLimitToSpecificBitstreams = false;
    /**
     * The title message of the access control form (translate key)
     */
    this.titleMessage = '';
    /**
     * Whether to show the submit and cancel button
     * We want to hide these buttons when the form is
     * used in an accordion, and we want to show buttons somewhere else
     */
    this.showSubmit = true;
    this.AlertType = _alert_alert_type__WEBPACK_IMPORTED_MODULE_4__.AlertType;
    this.state = (0,_access_control_form_container_intial_state__WEBPACK_IMPORTED_MODULE_8__.createAccessControlInitialFormState)();
    this.dropdownData$ = this.bulkAccessConfigService.findByName('default').pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_2__.getFirstCompletedRemoteData)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(configRD => configRD.hasSucceeded ? configRD.payload : null), (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.shareReplay)({
      refCount: false,
      bufferSize: 1
    }));
  }
  /**
   * Will be used from a parent component to read the value of the form
   */
  getFormValue() {
    console.log({
      bitstream: this.bitstreamAccessCmp.getValue(),
      item: this.itemAccessCmp.getValue(),
      state: this.state
    });
    return {
      bitstream: this.bitstreamAccessCmp.getValue(),
      item: this.itemAccessCmp.getValue(),
      state: this.state
    };
  }
  /**
   * Reset the form to its initial state
   * This will also reset the state of the child components (bitstream and item access)
   */
  reset() {
    this.bitstreamAccessCmp.reset();
    this.itemAccessCmp.reset();
    this.state = (0,_access_control_form_container_intial_state__WEBPACK_IMPORTED_MODULE_8__.createAccessControlInitialFormState)();
  }
  /**
   * Submit the form
   * This will create a payload file and execute the script
   */
  submit() {
    const bitstreamAccess = this.bitstreamAccessCmp.getValue();
    const itemAccess = this.itemAccessCmp.getValue();
    const {
      file
    } = this.bulkAccessControlService.createPayloadFile({
      bitstreamAccess,
      itemAccess,
      state: this.state
    });
    this.bulkAccessControlService.executeScript([this.itemRD.payload.uuid], file).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.take)(1)).subscribe(res => {
      console.log('success', res);
    });
  }
  /**
   * Handle the status change of the access control form (item or bitstream)
   * This will enable/disable the access control form for the item or bitstream
   * @param type The type of the access control form (item or bitstream)
   * @param active boolean indicating whether the access control form should be enabled or disabled
   */
  handleStatusChange(type, active) {
    if (type === 'bitstream') {
      active ? this.bitstreamAccessCmp.enable() : this.bitstreamAccessCmp.disable();
    } else if (type === 'item') {
      active ? this.itemAccessCmp.enable() : this.itemAccessCmp.disable();
    }
  }
  /**
   * Open the modal to select bitstreams for which to change the access control
   * This will open the modal and pass the currently selected bitstreams
   * @param item The item for which to change the access control
   */
  openSelectBitstreamsModal(item) {
    const ref = this.modalService.open(_item_access_control_select_bitstreams_modal_item_access_control_select_bitstreams_modal_component__WEBPACK_IMPORTED_MODULE_10__.ItemAccessControlSelectBitstreamsModalComponent);
    ref.componentInstance.selectedBitstreams = this.state.bitstream.selectedBitstreams;
    ref.componentInstance.item = item;
    ref.closed.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_15__.concatMap)(() => this.selectableListService.getSelectableList(_item_access_control_select_bitstreams_modal_item_access_control_select_bitstreams_modal_component__WEBPACK_IMPORTED_MODULE_10__.ITEM_ACCESS_CONTROL_SELECT_BITSTREAMS_LIST_ID)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.take)(1)).subscribe(list => {
      this.state.bitstream.selectedBitstreams = list?.selection || [];
      this.cdr.detectChanges();
    });
  }
  ngOnDestroy() {
    this.selectableListService.deselectAll(_item_access_control_select_bitstreams_modal_item_access_control_select_bitstreams_modal_component__WEBPACK_IMPORTED_MODULE_10__.ITEM_ACCESS_CONTROL_SELECT_BITSTREAMS_LIST_ID);
  }
  static {
    this.ɵfac = function AccessControlFormContainerComponent_Factory(t) {
      return new (t || AccessControlFormContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_core_config_bulk_access_config_data_service__WEBPACK_IMPORTED_MODULE_0__.BulkAccessConfigDataService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_bulk_access_control_service__WEBPACK_IMPORTED_MODULE_9__.BulkAccessControlService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_object_list_selectable_list_selectable_list_service__WEBPACK_IMPORTED_MODULE_6__.SelectableListService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_11__.ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
      type: AccessControlFormContainerComponent,
      selectors: [["ds-access-control-form-container"]],
      viewQuery: function AccessControlFormContainerComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c0, 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c1, 7);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.bitstreamAccessCmp = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.itemAccessCmp = _t.first);
        }
      },
      inputs: {
        showLimitToSpecificBitstreams: "showLimitToSpecificBitstreams",
        titleMessage: "titleMessage",
        itemRD: "itemRD",
        showSubmit: "showSubmit"
      },
      exportAs: ["dsAccessControlForm"],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵStandaloneFeature"]],
      decls: 68,
      vars: 62,
      consts: [["itemAccessCmp", ""], ["bitstreamAccessCmp", ""], [1, "container"], [1, "card", "border-0"], [1, "card-body"], ["class", "d-block pb-3", 3, "type", "content", 4, "ngIf"], [1, "row"], [1, "col-12", "col-md-6", "border-right", "d-flex", "flex-column", "justify-content-between"], [1, "d-flex", "align-items-center"], [1, "h3", "mb-0", "mr-4"], [3, "ngModelChange", "ariaLabel", "ngModel"], [1, "row", "mt-3"], [1, "h4", "col-12", "col-md-3"], [1, "col-12", "col-md-8"], [1, "form-check"], ["type", "radio", "name", "itemMode", "id", "itemReplace", "value", "replace", 1, "form-check-input", 3, "ngModelChange", "disabled", "ngModel"], ["for", "itemReplace", 1, "form-check-label"], ["type", "radio", "name", "itemMode", "id", "itemAdd", "value", "add", 1, "form-check-input", 3, "ngModelChange", "disabled", "ngModel"], ["for", "itemAdd", 1, "form-check-label"], [1, "h4", "mt-3"], [3, "type", "mode", "dropdownOptions"], [1, "col-12", "col-md-6", "d-flex", "flex-column", "justify-content-between"], ["class", "row mt-3", 4, "ngIf"], ["type", "radio", "name", "bitstreamMode", "id", "bitstreamReplace", "value", "replace", 1, "form-check-input", 3, "ngModelChange", "disabled", "ngModel"], ["for", "bitstreamReplace", 1, "form-check-label"], ["type", "radio", "name", "bitstreamMode", "id", "bitstreamAdd", "value", "add", 1, "form-check-input", 3, "ngModelChange", "disabled", "ngModel"], ["for", "bitstreamAdd", 1, "form-check-label"], [4, "ngIf"], ["class", "d-flex justify-content-end", 4, "ngIf"], [1, "d-block", "pb-3", 3, "type", "content"], [1, "col-12"], [1, "h4"], ["type", "radio", "name", "changesLimit", "id", "processAll", "value", "all", 1, "form-check-input", 3, "ngModelChange", "disabled", "ngModel"], ["for", "processAll", 1, "form-check-label"], ["type", "radio", "name", "changesLimit", "id", "processSelected", "value", "selected", 1, "form-check-input", "mt-2", 3, "ngModelChange", "disabled", "ngModel"], ["for", "processSelected", 1, "form-check-label"], ["class", "btn btn-outline-dark border-0", "type", "button", 3, "dsBtnDisabled", "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-outline-dark", "border-0", 3, "click", "dsBtnDisabled"], [1, "fa", "fa-search"], [1, "d-flex", "justify-content-end"], ["type", "button", 1, "btn", "btn-outline-primary", "mr-3", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "click", "dsBtnDisabled"]],
      template: function AccessControlFormContainerComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](3, AccessControlFormContainerComponent_ds_alert_3_Template, 1, 2, "ds-alert", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "div", 6)(5, "div", 7)(6, "div")(7, "div", 8)(8, "h2", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](10, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "ui-switch", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](12, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayListener"]("ngModelChange", function AccessControlFormContainerComponent_Template_ui_switch_ngModelChange_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayBindingSet"](ctx.state.item.toggleStatus, $event) || (ctx.state.item.toggleStatus = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function AccessControlFormContainerComponent_Template_ui_switch_ngModelChange_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx.handleStatusChange("item", $event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "fieldset", 11)(14, "legend", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](16, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](17, "div", 13)(18, "div", 14)(19, "input", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayListener"]("ngModelChange", function AccessControlFormContainerComponent_Template_input_ngModelChange_19_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayBindingSet"](ctx.state.item.accessMode, $event) || (ctx.state.item.accessMode = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](20, "label", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](21);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](22, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](23, "div", 14)(24, "input", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayListener"]("ngModelChange", function AccessControlFormContainerComponent_Template_input_ngModelChange_24_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayBindingSet"](ctx.state.item.accessMode, $event) || (ctx.state.item.accessMode = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](25, "label", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](26);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](27, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](28, "div")(29, "h3", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](30);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](31, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](32, "ds-access-control-array-form", 20, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](34, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](35, "div", 21)(36, "div")(37, "div", 8)(38, "h2", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](39);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](40, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](41, "ui-switch", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](42, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayListener"]("ngModelChange", function AccessControlFormContainerComponent_Template_ui_switch_ngModelChange_41_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayBindingSet"](ctx.state.bitstream.toggleStatus, $event) || (ctx.state.bitstream.toggleStatus = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function AccessControlFormContainerComponent_Template_ui_switch_ngModelChange_41_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx.handleStatusChange("bitstream", $event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](43, AccessControlFormContainerComponent_div_43_Template, 16, 15, "div", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](44, "fieldset", 11)(45, "legend", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](46);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](47, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](48, "div", 13)(49, "div", 14)(50, "input", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayListener"]("ngModelChange", function AccessControlFormContainerComponent_Template_input_ngModelChange_50_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayBindingSet"](ctx.state.bitstream.accessMode, $event) || (ctx.state.bitstream.accessMode = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](51, "label", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](52);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](53, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](54, "div", 14)(55, "input", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayListener"]("ngModelChange", function AccessControlFormContainerComponent_Template_input_ngModelChange_55_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayBindingSet"](ctx.state.bitstream.accessMode, $event) || (ctx.state.bitstream.accessMode = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](56, "label", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](57);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](58, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](59, "div")(60, "h3", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](61);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](62, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](63, "ds-access-control-array-form", 20, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](65, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](66, AccessControlFormContainerComponent_hr_66_Template, 1, 0, "hr", 27)(67, AccessControlFormContainerComponent_div_67_Template, 7, 7, "div", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          let tmp_16_0;
          let tmp_31_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.titleMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](10, 32, "access-control-item-header-toggle"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ariaLabel", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](12, 34, ctx.state.bitstream.toggleStatus ? "access-control-item-toggle.disable" : "access-control-item-toggle.enable"));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayProperty"]("ngModel", ctx.state.item.toggleStatus);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](16, 36, "access-control-mode"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", !ctx.state.item.toggleStatus);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayProperty"]("ngModel", ctx.state.item.accessMode);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](22, 38, "access-control-replace-all"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", !ctx.state.item.toggleStatus);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayProperty"]("ngModel", ctx.state.item.accessMode);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](27, 40, "access-control-add-to-existing"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](31, 42, "access-control-access-conditions"));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("type", "item")("mode", ctx.state.item.accessMode)("dropdownOptions", ((tmp_16_0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](34, 44, ctx.dropdownData$)) == null ? null : tmp_16_0.itemAccessConditionOptions) || _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](60, _c2));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](40, 46, "access-control-bitstream-header-toggle"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ariaLabel", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](42, 48, ctx.state.bitstream.toggleStatus ? "access-control-bitstream-toggle.disable" : "access-control-bitstream-toggle.enable"));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayProperty"]("ngModel", ctx.state.bitstream.toggleStatus);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.showLimitToSpecificBitstreams);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](47, 50, "access-control-mode"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", !ctx.state.bitstream.toggleStatus);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayProperty"]("ngModel", ctx.state.bitstream.accessMode);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](53, 52, "access-control-replace-all"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", !ctx.state.bitstream.toggleStatus);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayProperty"]("ngModel", ctx.state.bitstream.accessMode);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](58, 54, "access-control-add-to-existing"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](62, 56, "access-control-access-conditions"));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("type", "bitstream")("mode", ctx.state.bitstream.accessMode)("dropdownOptions", ((tmp_31_0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](65, 58, ctx.dropdownData$)) == null ? null : tmp_31_0.bitstreamAccessConditionOptions) || _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](61, _c2));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.showSubmit);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.showSubmit);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _alert_alert_component__WEBPACK_IMPORTED_MODULE_3__.AlertComponent, ngx_ui_switch__WEBPACK_IMPORTED_MODULE_18__.UiSwitchModule, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgModel, ngx_ui_switch__WEBPACK_IMPORTED_MODULE_18__.UiSwitchComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormsModule, _access_control_array_form_access_control_array_form_component__WEBPACK_IMPORTED_MODULE_7__.AccessControlArrayFormComponent, _angular_common__WEBPACK_IMPORTED_MODULE_17__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__.TranslatePipe, _btn_disabled_directive__WEBPACK_IMPORTED_MODULE_5__.BtnDisabledDirective],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY2Vzcy1jb250cm9sLWZvcm0tY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBIiwiZmlsZSI6ImFjY2Vzcy1jb250cm9sLWZvcm0tY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi8iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2FjY2Vzcy1jb250cm9sLWZvcm0tY29udGFpbmVyL2FjY2Vzcy1jb250cm9sLWZvcm0tY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBO0FBQ0EsNG1CQUE0bUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqLyJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 54028:
/*!*************************************************************************************!*\
  !*** ./src/app/shared/access-control-form-container/bulk-access-control.service.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BulkAccessControlService: () => (/* binding */ BulkAccessControlService),
/* harmony export */   convertToBulkAccessControlFileModel: () => (/* binding */ convertToBulkAccessControlFileModel)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var _core_data_processes_script_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/data/processes/script-data.service */ 32736);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/shared/operators */ 55757);
/* harmony import */ var _process_page_process_page_routing_paths__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../process-page/process-page-routing.paths */ 1504);
/* harmony import */ var _empty_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../empty.util */ 82777);
/* harmony import */ var _notifications_notifications_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../notifications/notifications.service */ 69472);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 96439);













/**
 * This service is used to create a payload file and execute the bulk access control script
 */
class BulkAccessControlService {
  constructor(notificationsService, router, scriptService, translationService) {
    this.notificationsService = notificationsService;
    this.router = router;
    this.scriptService = scriptService;
    this.translationService = translationService;
  }
  /**
   * Create a payload file from the given payload and return the file and the url to the file
   * The created file will be used as input for the bulk access control script
   * @param payload The payload to create the file from
   */
  createPayloadFile(payload) {
    const content = convertToBulkAccessControlFileModel(payload);
    const blob = new Blob([JSON.stringify(content, null, 2)], {
      type: 'application/json'
    });
    const file = new File([blob], 'data.json', {
      type: 'application/json'
    });
    const url = URL.createObjectURL(file);
    return {
      url,
      file
    };
  }
  /**
   * Execute the bulk access control script with the given uuids and file
   * @param uuids
   * @param file
   */
  executeScript(uuids, file) {
    console.log('execute', {
      uuids,
      file
    });
    const params = [{
      name: '-f',
      value: file.name
    }];
    uuids.forEach(uuid => {
      params.push({
        name: '-u',
        value: uuid
      });
    });
    return this.scriptService.invoke('bulk-access-control', params, [file]).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_1__.getFirstCompletedRemoteData)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(rd => {
      if (rd.hasSucceeded) {
        const title = this.translationService.get('process.new.notification.success.title');
        const content = this.translationService.get('process.new.notification.success.content');
        this.notificationsService.success(title, content);
        if ((0,_empty_util__WEBPACK_IMPORTED_MODULE_3__.isNotEmpty)(rd.payload)) {
          this.router.navigateByUrl((0,_process_page_process_page_routing_paths__WEBPACK_IMPORTED_MODULE_2__.getProcessDetailRoute)(rd.payload.processId));
        }
        return true;
      } else {
        const title = this.translationService.get('process.new.notification.error.title');
        const content = this.translationService.get('process.new.notification.error.content');
        this.notificationsService.error(title, content);
        return false;
      }
    }));
  }
  static {
    this.ɵfac = function BulkAccessControlService_Factory(t) {
      return new (t || BulkAccessControlService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_4__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_core_data_processes_script_data_service__WEBPACK_IMPORTED_MODULE_0__.ScriptDataService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
      token: BulkAccessControlService,
      factory: BulkAccessControlService.ɵfac,
      providedIn: 'root'
    });
  }
}
/**
 * Convert the given payload to a BulkAccessControlFileModel
 * @param payload
 */
const convertToBulkAccessControlFileModel = payload => {
  const finalPayload = {};
  const itemEnabled = payload.state.item.toggleStatus;
  const bitstreamEnabled = payload.state.bitstream.toggleStatus;
  if (itemEnabled) {
    finalPayload.item = {
      mode: payload.state.item.accessMode,
      accessConditions: payload.itemAccess
    };
  }
  if (bitstreamEnabled) {
    const constraints = {
      uuid: []
    };
    if (bitstreamEnabled && payload.state.bitstream.changesLimit === 'selected') {
      // @ts-ignore
      constraints.uuid = payload.state.bitstream.selectedBitstreams.map(x => x.id);
    }
    finalPayload.bitstream = {
      constraints,
      mode: payload.state.bitstream.accessMode,
      accessConditions: payload.bitstreamAccess
    };
  }
  return finalPayload;
};

/***/ }),

/***/ 22202:
/*!***********************************************************************************************************************************************************!*\
  !*** ./src/app/shared/access-control-form-container/item-access-control-select-bitstreams-modal/item-access-control-select-bitstreams-modal.component.ts ***!
  \***********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ITEM_ACCESS_CONTROL_SELECT_BITSTREAMS_LIST_ID: () => (/* binding */ ITEM_ACCESS_CONTROL_SELECT_BITSTREAMS_LIST_ID),
/* harmony export */   ItemAccessControlSelectBitstreamsModalComponent: () => (/* binding */ ItemAccessControlSelectBitstreamsModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 83485);
/* harmony import */ var src_app_core_shared_context_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/shared/context.model */ 26292);
/* harmony import */ var _core_data_bitstream_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/data/bitstream-data.service */ 42578);
/* harmony import */ var _core_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/pagination/pagination.service */ 76896);
/* harmony import */ var _core_shared_item_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/shared/item.model */ 88318);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/shared/operators */ 55757);
/* harmony import */ var _empty_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../empty.util */ 82777);
/* harmony import */ var _object_collection_object_collection_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../object-collection/object-collection.component */ 14828);
/* harmony import */ var _pagination_pagination_component_options_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pagination/pagination-component-options.model */ 23401);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 49966);

















const _c0 = a0 => ({
  repeatable: true,
  listId: a0
});
function ItemAccessControlSelectBitstreamsModalComponent_ng_container_8_ds_viewable_collection_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ds-viewable-collection", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("pageChange", function ItemAccessControlSelectBitstreamsModalComponent_ng_container_8_ds_viewable_collection_1_Template_ds_viewable_collection_pageChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.loadForPage($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().ngIf;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("config", ctx_r1.paginationConfig)("context", ctx_r1.context)("objects", data_r3)("selectable", true)("selectionConfig", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](6, _c0, ctx_r1.LIST_ID))("showPaginator", true);
  }
}
function ItemAccessControlSelectBitstreamsModalComponent_ng_container_8_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "access-control-select-bitstreams-modal.no-items"), " ");
  }
}
function ItemAccessControlSelectBitstreamsModalComponent_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, ItemAccessControlSelectBitstreamsModalComponent_ng_container_8_ds_viewable_collection_1_Template, 1, 8, "ds-viewable-collection", 8)(2, ItemAccessControlSelectBitstreamsModalComponent_ng_container_8_div_2_Template, 3, 3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const data_r3 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", data_r3.payload.page.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", data_r3 && data_r3.payload.page.length === 0);
  }
}
const ITEM_ACCESS_CONTROL_SELECT_BITSTREAMS_LIST_ID = 'item-access-control-select-bitstreams';
class ItemAccessControlSelectBitstreamsModalComponent {
  constructor(bitstreamService, paginationService, translateService, activeModal) {
    this.bitstreamService = bitstreamService;
    this.paginationService = paginationService;
    this.translateService = translateService;
    this.activeModal = activeModal;
    this.LIST_ID = ITEM_ACCESS_CONTROL_SELECT_BITSTREAMS_LIST_ID;
    this.selectedBitstreams = [];
    this.data$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.BehaviorSubject(null);
    this.pageSize = 5;
    this.context = src_app_core_shared_context_model__WEBPACK_IMPORTED_MODULE_0__.Context.Bitstream;
  }
  ngOnInit() {
    this.loadForPage(1);
    this.paginationConfig = new _pagination_pagination_component_options_model__WEBPACK_IMPORTED_MODULE_7__.PaginationComponentOptions();
    this.paginationConfig.id = 'iacsbm';
    this.paginationConfig.currentPage = 1;
    if ((0,_empty_util__WEBPACK_IMPORTED_MODULE_5__.hasValue)(this.pageSize)) {
      this.paginationConfig.pageSize = this.pageSize;
    }
  }
  loadForPage(page) {
    this.bitstreamService.findAllByItemAndBundleName(this.item, 'ORIGINAL', {
      currentPage: page
    }, false).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_4__.getFirstCompletedRemoteData)()).subscribe(this.data$);
  }
  static {
    this.ɵfac = function ItemAccessControlSelectBitstreamsModalComponent_Factory(t) {
      return new (t || ItemAccessControlSelectBitstreamsModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_data_bitstream_data_service__WEBPACK_IMPORTED_MODULE_1__.BitstreamDataService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_2__.PaginationService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbActiveModal));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
      type: ItemAccessControlSelectBitstreamsModalComponent,
      selectors: [["ds-item-access-control-select-bitstreams-modal"]],
      inputs: {
        item: "item",
        selectedBitstreams: "selectedBitstreams"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵStandaloneFeature"]],
      decls: 14,
      vars: 9,
      consts: [[1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [4, "ngIf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-dark", 3, "click"], [3, "config", "context", "objects", "selectable", "selectionConfig", "showPaginator", "pageChange", 4, "ngIf"], ["class", "alert alert-info w-100", "role", "alert", 4, "ngIf"], [3, "pageChange", "config", "context", "objects", "selectable", "selectionConfig", "showPaginator"], ["role", "alert", 1, "alert", "alert-info", "w-100"]],
      template: function ItemAccessControlSelectBitstreamsModalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "h4", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ItemAccessControlSelectBitstreamsModalComponent_Template_button_click_4_listener() {
            return ctx.activeModal.dismiss("Cross click");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, ItemAccessControlSelectBitstreamsModalComponent_ng_container_8_Template, 3, 2, "ng-container", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](9, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 6)(11, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ItemAccessControlSelectBitstreamsModalComponent_Template_button_click_11_listener() {
            return ctx.activeModal.close("Close click");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](13, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 3, "access-control-select-bitstreams-modal.title"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](9, 5, ctx.data$));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](13, 7, "access-control-select-bitstreams-modal.close"), " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _object_collection_object_collection_component__WEBPACK_IMPORTED_MODULE_6__.ObjectCollectionComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW0tYWNjZXNzLWNvbnRyb2wtc2VsZWN0LWJpdHN0cmVhbXMtbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUEiLCJmaWxlIjoiaXRlbS1hY2Nlc3MtY29udHJvbC1zZWxlY3QtYml0c3RyZWFtcy1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2FjY2Vzcy1jb250cm9sLWZvcm0tY29udGFpbmVyL2l0ZW0tYWNjZXNzLWNvbnRyb2wtc2VsZWN0LWJpdHN0cmVhbXMtbW9kYWwvaXRlbS1hY2Nlc3MtY29udHJvbC1zZWxlY3QtYml0c3RyZWFtcy1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBLGdwQkFBZ3BCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi8iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=default-src_app_shared_access-control-form-container_access-control-form-container_component_ts.js.map