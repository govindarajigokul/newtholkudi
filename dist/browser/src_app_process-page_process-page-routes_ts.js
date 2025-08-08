"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_app_process-page_process-page-routes_ts"],{

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

/***/ 80752:
/*!********************************************************************************************!*\
  !*** ./src/app/process-page/detail/process-detail-field/process-detail-field.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProcessDetailFieldComponent: () => (/* binding */ ProcessDetailFieldComponent)
/* harmony export */ });
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 90310);



const _c0 = ["*"];
/**
 * A component displaying a single detail about a DSpace Process
 */
class ProcessDetailFieldComponent {
  static {
    this.ɵfac = function ProcessDetailFieldComponent_Factory(t) {
      return new (t || ProcessDetailFieldComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProcessDetailFieldComponent,
      selectors: [["ds-process-detail-field"]],
      inputs: {
        title: "title"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      ngContentSelectors: _c0,
      decls: 4,
      vars: 3,
      consts: [[1, "h3", "mt-4"]],
      template: function ProcessDetailFieldComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx.title));
        }
      },
      dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslatePipe],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 57794:
/*!*****************************************************************!*\
  !*** ./src/app/process-page/detail/process-detail.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProcessDetailComponent: () => (/* binding */ ProcessDetailComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs */ 83485);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs/operators */ 84975);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! rxjs/operators */ 85687);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! rxjs/operators */ 47386);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! rxjs/operators */ 62997);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! rxjs/operators */ 21252);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! rxjs/operators */ 78374);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! rxjs/operators */ 56731);
/* harmony import */ var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/auth/auth.service */ 67116);
/* harmony import */ var _core_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/breadcrumbs/dso-name.service */ 96526);
/* harmony import */ var _core_data_bitstream_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/data/bitstream-data.service */ 42578);
/* harmony import */ var _core_data_processes_process_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/data/processes/process-data.service */ 87414);
/* harmony import */ var _core_shared_authorized_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/shared/authorized.operators */ 308);
/* harmony import */ var _core_shared_dspace_object_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/shared/dspace-object.model */ 76829);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/shared/operators */ 55757);
/* harmony import */ var _core_url_combiner_url_combiner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/url-combiner/url-combiner */ 45663);
/* harmony import */ var _shared_alert_alert_type__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/alert/alert-type */ 47978);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/empty.util */ 82777);
/* harmony import */ var _shared_file_download_link_themed_file_download_link_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/file-download-link/themed-file-download-link.component */ 28836);
/* harmony import */ var _shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/loading/themed-loading.component */ 82394);
/* harmony import */ var _shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/notifications/notifications.service */ 69472);
/* harmony import */ var _shared_utils_file_size_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/utils/file-size-pipe */ 43525);
/* harmony import */ var _shared_utils_has_no_value_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/utils/has-no-value.pipe */ 22198);
/* harmony import */ var _shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../shared/utils/var.directive */ 18226);
/* harmony import */ var _process_page_resolver__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../process-page.resolver */ 9045);
/* harmony import */ var _process_page_routing_paths__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../process-page-routing.paths */ 1504);
/* harmony import */ var _processes_process_status_model__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../processes/process-status.model */ 31189);
/* harmony import */ var _process_detail_field_process_detail_field_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./process-detail-field/process-detail-field.component */ 80752);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/common/http */ 94485);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 49966);






































const _c0 = (a0, a1) => ({
  id: a0,
  name: a1
});
const _c1 = a0 => ({
  id: a0
});
function ProcessDetailComponent_div_0_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](3, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](2, 1, "process.detail.refreshing"), " ");
  }
}
function ProcessDetailComponent_div_0_ds_process_detail_field_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const argument_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate2"]("", argument_r1 == null ? null : argument_r1.name, " ", argument_r1 == null ? null : argument_r1.value, "");
  }
}
function ProcessDetailComponent_div_0_ds_process_detail_field_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "ds-process-detail-field", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](1, ProcessDetailComponent_div_0_ds_process_detail_field_11_div_1_Template, 2, 2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const process_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("title", "process.detail.arguments");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngForOf", process_r2 == null ? null : process_r2.parameters);
  }
}
function ProcessDetailComponent_div_0_div_12_ds_process_detail_field_1_ds_file_download_link_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "ds-file-download-link", 28)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](5, "dsFileSize");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const file_r3 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("bitstream", file_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](ctx_r3.getFileName(file_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"]("(", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](5, 3, file_r3 == null ? null : file_r3.sizeBytes), ")");
  }
}
function ProcessDetailComponent_div_0_div_12_ds_process_detail_field_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "ds-process-detail-field", 25)(1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](2, ProcessDetailComponent_div_0_div_12_ds_process_detail_field_1_ds_file_download_link_2_Template, 6, 5, "ds-file-download-link", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const files_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().ngVar;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("title", "process.detail.output-files");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngForOf", files_r5);
  }
}
function ProcessDetailComponent_div_0_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](1, ProcessDetailComponent_div_0_div_12_ds_process_detail_field_1_Template, 3, 2, "ds-process-detail-field", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const files_r5 = ctx.ngVar;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", files_r5 && (files_r5 == null ? null : files_r5.length) > 0);
  }
}
function ProcessDetailComponent_div_0_ds_process_detail_field_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "ds-process-detail-field", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const process_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().ngIf;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](1, 2, "process.detail.start-time"));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind3"](4, 4, process_r2.startTime, ctx_r3.dateFormat, "UTC"));
  }
}
function ProcessDetailComponent_div_0_ds_process_detail_field_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "ds-process-detail-field", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const process_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().ngIf;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](1, 2, "process.detail.end-time"));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind3"](4, 4, process_r2.endTime, ctx_r3.dateFormat, "UTC"));
  }
}
function ProcessDetailComponent_div_0_ds_process_detail_field_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "ds-process-detail-field", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const process_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](1, 2, "process.detail.status"));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](process_r2.processStatus);
  }
}
function ProcessDetailComponent_div_0_ds_process_detail_field_17_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function ProcessDetailComponent_div_0_ds_process_detail_field_17_button_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r6);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r3.showProcessOutputLogs());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](2, 1, "process.detail.logs.button"), " ");
  }
}
function ProcessDetailComponent_div_0_ds_process_detail_field_17_ds_loading_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](0, "ds-loading", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpropertyInterpolate"]("message", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](1, 1, "process.detail.logs.loading"));
  }
}
function ProcessDetailComponent_div_0_ds_process_detail_field_17_pre_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "pre", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](2, 1, ctx_r3.outputLogs$));
  }
}
function ProcessDetailComponent_div_0_ds_process_detail_field_17_p_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](2, 1, "process.detail.logs.none"), " ");
  }
}
function ProcessDetailComponent_div_0_ds_process_detail_field_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "ds-process-detail-field", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](1, ProcessDetailComponent_div_0_ds_process_detail_field_17_button_1_Template, 3, 3, "button", 33)(2, ProcessDetailComponent_div_0_ds_process_detail_field_17_ds_loading_2_Template, 2, 3, "ds-loading", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](4, ProcessDetailComponent_div_0_ds_process_detail_field_17_pre_4_Template, 3, 3, "pre", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](6, ProcessDetailComponent_div_0_ds_process_detail_field_17_p_6_Template, 3, 3, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](9, "dsHasNoValue");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](10, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_7_0;
    let tmp_8_0;
    const process_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().ngIf;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("title", "process.detail.output");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !ctx_r3.showOutputLogs && (process_r2 == null ? null : process_r2._links == null ? null : process_r2._links.output == null ? null : process_r2._links.output.href) !== undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](3, 5, ctx_r3.retrievingOutputLogs$));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r3.showOutputLogs && ((tmp_7_0 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](5, 7, ctx_r3.outputLogs$)) == null ? null : tmp_7_0.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](7, 9, ctx_r3.retrievingOutputLogs$) !== true && ctx_r3.showOutputLogs && _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](9, 13, _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](8, 11, ctx_r3.outputLogs$)) || ((tmp_8_0 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](10, 15, ctx_r3.outputLogs$)) == null ? null : tmp_8_0.length) === 0 || !process_r2._links.output);
  }
}
function ProcessDetailComponent_div_0_button_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function ProcessDetailComponent_div_0_button_23_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r7);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
      const deleteModal_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵreference"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r3.openDeleteModal(deleteModal_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](3, 1, "process.detail.delete.button"), " ");
  }
}
function ProcessDetailComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "h1", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](6, ProcessDetailComponent_div_0_div_6_Template, 4, 3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](8, "ds-process-detail-field", 7)(9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](11, ProcessDetailComponent_div_0_ds_process_detail_field_11_Template, 2, 2, "ds-process-detail-field", 8)(12, ProcessDetailComponent_div_0_div_12_Template, 2, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](13, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](14, ProcessDetailComponent_div_0_ds_process_detail_field_14_Template, 5, 8, "ds-process-detail-field", 10)(15, ProcessDetailComponent_div_0_ds_process_detail_field_15_Template, 5, 8, "ds-process-detail-field", 11)(16, ProcessDetailComponent_div_0_ds_process_detail_field_16_Template, 4, 4, "ds-process-detail-field", 12)(17, ProcessDetailComponent_div_0_ds_process_detail_field_17_Template, 11, 17, "ds-process-detail-field", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](18, "ds-process-detail-field", 14)(19, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](20, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](23, ProcessDetailComponent_div_0_button_23_Template, 4, 3, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](24, "div", 18)(25, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](27, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    let tmp_8_0;
    const process_r2 = ctx.ngIf;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind2"](5, 16, "process.detail.title", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction2"](27, _c0, process_r2 == null ? null : process_r2.processId, process_r2 == null ? null : process_r2.scriptName)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](7, 19, ctx_r3.isRefreshing$));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("title", "process.detail.script");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](process_r2 == null ? null : process_r2.scriptName);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", (process_r2 == null ? null : process_r2.parameters) && (process_r2 == null ? null : process_r2.parameters == null ? null : process_r2.parameters.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngVar", (tmp_8_0 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](13, 21, ctx_r3.filesRD$)) == null ? null : tmp_8_0.payload == null ? null : tmp_8_0.payload.page);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", process_r2 && process_r2.startTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", process_r2 && process_r2.endTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", process_r2 && process_r2.processStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r3.isProcessFinished(process_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("title", "process.detail.actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](30, _c1, process_r2 == null ? null : process_r2.processId));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](22, 23, "process.detail.create"));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r3.isProcessFinished(process_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("routerLink", "/processes");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](27, 25, "process.detail.back"));
  }
}
function ProcessDetailComponent_ng_template_2_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div")(1, "div", 44)(2, "div")(3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](6, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function ProcessDetailComponent_ng_template_2_div_0_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r9);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r3.closeModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](7, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](8, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](9, "div", 47)(10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](13, "div", 48)(14, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function ProcessDetailComponent_ng_template_2_div_0_Template_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r9);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r3.closeModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](17, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function ProcessDetailComponent_ng_template_2_div_0_Template_button_click_17_listener() {
      const process_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r9).ngIf;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r3.deleteProcess(process_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](5, 4, "process.detail.delete.header"));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](12, 6, "process.detail.delete.body"));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](16, 8, "process.detail.delete.cancel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](19, 10, "process.detail.delete.confirm"), " ");
  }
}
function ProcessDetailComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](0, ProcessDetailComponent_ng_template_2_div_0_Template, 20, 12, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](1, "async");
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](1, 1, ctx_r3.processRD$)) == null ? null : tmp_2_0.payload);
  }
}
/**
 * A component displaying detailed information about a DSpace Process
 */
class ProcessDetailComponent {
  constructor(platformId, route, router, processService, bitstreamDataService, nameService, zone, authService, http, modalService, notificationsService, translateService) {
    this.platformId = platformId;
    this.route = route;
    this.router = router;
    this.processService = processService;
    this.bitstreamDataService = bitstreamDataService;
    this.nameService = nameService;
    this.zone = zone;
    this.authService = authService;
    this.http = http;
    this.modalService = modalService;
    this.notificationsService = notificationsService;
    this.translateService = translateService;
    /**
     * The AlertType enumeration
     * @type {AlertType}
     */
    this.AlertTypeEnum = _shared_alert_alert_type__WEBPACK_IMPORTED_MODULE_8__.AlertType;
    /**
     * The Process's Output logs
     */
    this.outputLogs$ = new rxjs__WEBPACK_IMPORTED_MODULE_21__.BehaviorSubject(undefined);
    /**
     * Boolean on whether or not to show the output logs
     */
    this.showOutputLogs = false;
    /**
     * When it's retrieving the output logs from backend, to show loading component
     */
    this.retrievingOutputLogs$ = new rxjs__WEBPACK_IMPORTED_MODULE_21__.BehaviorSubject(false);
    /**
     * Date format to use for start and end time of processes
     */
    this.dateFormat = 'yyyy-MM-dd HH:mm:ss ZZZZ';
  }
  /**
   * Initialize component properties
   * Display a 404 if the process doesn't exist
   */
  ngOnInit() {
    this.processRD$ = this.route.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.switchMap)(data => {
      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_23__.isPlatformBrowser)(this.platformId)) {
        this.autoRefreshingID = this.route.snapshot.params.id;
        return this.processService.autoRefreshUntilCompletion(this.autoRefreshingID, 5000, ..._process_page_resolver__WEBPACK_IMPORTED_MODULE_16__.PROCESS_PAGE_FOLLOW_LINKS);
      } else {
        return [data.process];
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_24__.filter)(() => !this.isDeleting), (0,_core_shared_authorized_operators__WEBPACK_IMPORTED_MODULE_4__.redirectOn4xx)(this.router, this.authService));
    this.isRefreshing$ = this.processRD$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_25__.find)(processRD => _core_data_processes_process_data_service__WEBPACK_IMPORTED_MODULE_3__.ProcessDataService.hasCompletedOrFailed(processRD.payload)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_26__.map)(() => false), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_27__.startWith)(true));
    this.filesRD$ = this.processRD$.pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_6__.getAllSucceededRemoteDataPayload)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.switchMap)(process => process.files));
  }
  /**
   * Make sure the autoRefreshUntilCompletion is cleaned up properly
   */
  ngOnDestroy() {
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_9__.hasValue)(this.autoRefreshingID)) {
      this.processService.stopAutoRefreshing(this.autoRefreshingID);
    }
  }
  /**
   * Get the name of a bitstream
   * @param bitstream
   */
  getFileName(bitstream) {
    return bitstream instanceof _core_shared_dspace_object_model__WEBPACK_IMPORTED_MODULE_5__.DSpaceObject ? this.nameService.getName(bitstream) : 'unknown';
  }
  /**
   * Retrieves the process logs, while setting the loading subject to true.
   * Sets the outputLogs when retrieved and sets the showOutputLogs boolean to show them and hide the button.
   */
  showProcessOutputLogs() {
    this.retrievingOutputLogs$.next(true);
    this.zone.runOutsideAngular(() => {
      const processOutputRD$ = this.processRD$.pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_6__.getFirstSucceededRemoteDataPayload)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.switchMap)(process => {
        return this.bitstreamDataService.findByHref(process._links.output.href, false);
      }));
      this.outputLogFileUrl$ = processOutputRD$.pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_6__.getFirstSucceededRemoteData)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_28__.tap)(processOutputFileRD => {
        if (processOutputFileRD.statusCode === 204) {
          this.zone.run(() => this.retrievingOutputLogs$.next(false));
          this.showOutputLogs = true;
        }
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.switchMap)(processOutput => {
        const url = processOutput.payload._links.content.href;
        return this.authService.getShortlivedToken().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_29__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_26__.map)(token => {
          return (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_9__.hasValue)(token) ? new _core_url_combiner_url_combiner__WEBPACK_IMPORTED_MODULE_7__.URLCombiner(url, `?authentication-token=${token}`).toString() : url;
        }));
      }));
    });
    this.outputLogFileUrl$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_29__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.switchMap)(url => {
      return this.getTextFile(url);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_30__.finalize)(() => this.zone.run(() => this.retrievingOutputLogs$.next(false)))).subscribe(logs => {
      this.outputLogs$.next(logs);
    });
  }
  getTextFile(filename) {
    // The Observable returned by get() is of type Observable<string>
    // because a text response was specified.
    // There's no need to pass a <string> type parameter to get().
    return this.http.get(filename, {
      responseType: 'text'
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_30__.finalize)(() => {
      this.showOutputLogs = true;
    }));
  }
  /**
   * Whether or not the given process has Completed or Failed status
   * @param process Process to check if completed or failed
   */
  isProcessFinished(process) {
    return (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_9__.hasValue)(process) && (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_9__.hasValue)(process.processStatus) && (process.processStatus.toString() === _processes_process_status_model__WEBPACK_IMPORTED_MODULE_18__.ProcessStatus[_processes_process_status_model__WEBPACK_IMPORTED_MODULE_18__.ProcessStatus.COMPLETED].toString() || process.processStatus.toString() === _processes_process_status_model__WEBPACK_IMPORTED_MODULE_18__.ProcessStatus[_processes_process_status_model__WEBPACK_IMPORTED_MODULE_18__.ProcessStatus.FAILED].toString());
  }
  /**
   * Delete the current process
   * @param process
   */
  deleteProcess(process) {
    this.isDeleting = true;
    this.processService.delete(process.processId).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_6__.getFirstCompletedRemoteData)()).subscribe(rd => {
      if (rd.hasSucceeded) {
        this.notificationsService.success(this.translateService.get('process.detail.delete.success'));
        this.closeModal();
        void this.router.navigateByUrl((0,_process_page_routing_paths__WEBPACK_IMPORTED_MODULE_17__.getProcessListRoute)());
      } else {
        this.notificationsService.error(this.translateService.get('process.detail.delete.error'));
        this.isDeleting = false;
      }
    });
  }
  /**
   * Open a given modal.
   * @param content   - the modal content.
   */
  openDeleteModal(content) {
    this.modalRef = this.modalService.open(content);
  }
  /**
   * Close the modal.
   */
  closeModal() {
    this.modalRef.close();
  }
  static {
    this.ɵfac = function ProcessDetailComponent_Factory(t) {
      return new (t || ProcessDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_20__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_31__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_31__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_core_data_processes_process_data_service__WEBPACK_IMPORTED_MODULE_3__.ProcessDataService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_core_data_bitstream_data_service__WEBPACK_IMPORTED_MODULE_2__.BitstreamDataService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_core_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_1__.DSONameService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_20__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_32__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_33__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_12__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_34__.TranslateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineComponent"]({
      type: ProcessDetailComponent,
      selectors: [["ds-process-detail"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵStandaloneFeature"]],
      decls: 4,
      vars: 3,
      consts: [["deleteModal", ""], ["class", "container", 4, "ngIf"], [1, "container"], [1, "row"], [1, "col-10"], [1, "flex-grow-1"], ["class", "col-2 refresh-counter", 4, "ngIf"], ["id", "process-name", 3, "title"], ["id", "process-arguments", 3, "title", 4, "ngIf"], [4, "ngVar"], ["id", "process-start-time", 3, "title", 4, "ngIf"], ["id", "process-end-time", 3, "title", 4, "ngIf"], ["id", "process-status", 3, "title", 4, "ngIf"], ["id", "process-output", 3, "title", 4, "ngIf"], ["id", "process-actions", 3, "title"], ["routerLink", "/processes/new", 1, "btn", "btn-success", "mr-2", 3, "queryParams"], [1, "fas", "fa-plus", "pr-2"], ["id", "delete", "class", "btn btn-danger", 3, "click", 4, "ngIf"], [2, "text-align", "right"], [1, "btn", "btn-outline-secondary", "mt-3", 3, "routerLink"], [1, "col-2", "refresh-counter"], [1, "fas", "fa-sync-alt", "fa-spin"], ["id", "process-arguments", 3, "title"], [4, "ngFor", "ngForOf"], ["id", "process-files", 3, "title", 4, "ngIf"], ["id", "process-files", 3, "title"], [1, "d-flex", "flex-column"], [3, "bitstream", 4, "ngFor", "ngForOf"], [3, "bitstream"], ["id", "process-start-time", 3, "title"], ["id", "process-end-time", 3, "title"], ["id", "process-status", 3, "title"], ["id", "process-output", 3, "title"], ["id", "showOutputButton", "class", "btn btn-primary", 3, "click", 4, "ngIf"], ["class", "ds-themed-loading", 3, "message", 4, "ngIf"], ["class", "font-weight-bold text-secondary bg-light p-3", "tabindex", "0", 4, "ngIf"], ["id", "no-output-logs-message", 4, "ngIf"], ["id", "showOutputButton", 1, "btn", "btn-primary", 3, "click"], [1, "ds-themed-loading", 3, "message"], ["tabindex", "0", 1, "font-weight-bold", "text-secondary", "bg-light", "p-3"], ["id", "no-output-logs-message"], ["id", "delete", 1, "btn", "btn-danger", 3, "click"], [1, "fas", "fa-trash", "pr-2"], [4, "ngIf"], [1, "modal-header"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "mt-4"], [1, "btn", "btn-primary", "mr-2", 3, "click"], ["id", "delete-confirm", 1, "btn", "btn-danger", 3, "click"]],
      template: function ProcessDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](0, ProcessDetailComponent_div_0_Template, 28, 32, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](1, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](2, ProcessDetailComponent_ng_template_2_Template, 2, 3, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplateRefExtractor"]);
        }
        if (rf & 2) {
          let tmp_1_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](1, 1, ctx.processRD$)) == null ? null : tmp_1_0.payload);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_23__.NgIf, _process_detail_field_process_detail_field_component__WEBPACK_IMPORTED_MODULE_19__.ProcessDetailFieldComponent, _angular_common__WEBPACK_IMPORTED_MODULE_23__.NgFor, _shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_15__.VarDirective, _shared_file_download_link_themed_file_download_link_component__WEBPACK_IMPORTED_MODULE_10__.ThemedFileDownloadLinkComponent, _shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_11__.ThemedLoadingComponent, _angular_router__WEBPACK_IMPORTED_MODULE_31__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_23__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_23__.DatePipe, _shared_utils_file_size_pipe__WEBPACK_IMPORTED_MODULE_13__.FileSizePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_34__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_34__.TranslatePipe, _shared_utils_has_no_value_pipe__WEBPACK_IMPORTED_MODULE_14__.HasNoValuePipe],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 96994:
/*!***********************************************************!*\
  !*** ./src/app/process-page/form/process-form-factory.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   controlContainerFactory: () => (/* binding */ controlContainerFactory)
/* harmony export */ });
function controlContainerFactory(controlContainer) {
  return controlContainer;
}

/***/ }),

/***/ 10104:
/*!*************************************************************!*\
  !*** ./src/app/process-page/form/process-form.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProcessFormComponent: () => (/* binding */ ProcessFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 56106);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var _core_data_processes_script_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/data/processes/script-data.service */ 32736);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/shared/operators */ 55757);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/empty.util */ 82777);
/* harmony import */ var _shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/notifications/notifications.service */ 69472);
/* harmony import */ var _process_page_routing_paths__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../process-page-routing.paths */ 1504);
/* harmony import */ var _processes_process_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../processes/process.model */ 98796);
/* harmony import */ var _scripts_script_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../scripts/script.model */ 24903);
/* harmony import */ var _process_parameters_process_parameters_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./process-parameters/process-parameters.component */ 65023);
/* harmony import */ var _script_help_script_help_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./script-help/script-help.component */ 88093);
/* harmony import */ var _scripts_select_scripts_select_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./scripts-select/scripts-select.component */ 40697);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 90310);




















const _c0 = () => ["/processes"];
function ProcessFormComponent_ds_script_help_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "ds-script-help", 13);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("script", ctx_r2.selectedScript);
  }
}
function ProcessFormComponent_div_18_li_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const missing_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](missing_r4);
  }
}
function ProcessFormComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, ProcessFormComponent_div_18_li_4_Template, 2, 1, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 2, "process.new.parameter.required.missing"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r2.missingParameters);
  }
}
/**
 * Component to create a new script
 */
class ProcessFormComponent {
  constructor(scriptService, notificationsService, translationService, router) {
    this.scriptService = scriptService;
    this.notificationsService = notificationsService;
    this.translationService = translationService;
    this.router = router;
    /**
     * The currently selected script
     */
    this.selectedScript = undefined;
    /**
     * The process to create
     */
    this.process = undefined;
    /**
     * The parameter values to use to start the process
     */
    this.parameters = [];
    /**
     * Optional files that are used as parameter values
     */
    this.files = [];
    /**
     * Contains the missing parameters on submission
     */
    this.missingParameters = [];
  }
  ngOnInit() {
    this.process = new _processes_process_model__WEBPACK_IMPORTED_MODULE_5__.Process();
  }
  /**
   * Validates the form, sets the parameters to correct values and invokes the script with the correct parameters
   * @param form
   */
  submitForm(form) {
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_2__.isEmpty)(this.parameters)) {
      this.parameters = [];
    }
    if (!this.validateForm(form) || this.isRequiredMissing()) {
      return;
    }
    const stringParameters = this.parameters.map(parameter => {
      return {
        name: parameter.name,
        value: this.checkValue(parameter)
      };
    });
    this.scriptService.invoke(this.selectedScript.id, stringParameters, this.files).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_1__.getFirstCompletedRemoteData)()).subscribe(rd => {
      if (rd.hasSucceeded) {
        const title = this.translationService.get('process.new.notification.success.title');
        const content = this.translationService.get('process.new.notification.success.content');
        this.notificationsService.success(title, content);
        this.sendBack(rd.payload);
      } else {
        const title = this.translationService.get('process.new.notification.error.title');
        const content = this.translationService.get('process.new.notification.error.content');
        this.notificationsService.error(title, content);
      }
    });
  }
  /**
   * Checks whether the parameter values are files
   * Replaces file parameters by strings and stores the files in a separate list
   * @param processParameter The parameter value to check
   */
  checkValue(processParameter) {
    if (typeof processParameter.value === 'object') {
      this.files = [...this.files, processParameter.value];
      return processParameter.value.name;
    }
    return processParameter.value;
  }
  /**
   * Validates the form
   * Returns false if the form is invalid
   * Returns true if the form is valid
   * @param form The NgForm object to validate
   */
  validateForm(form) {
    let valid = true;
    Object.keys(form.controls).forEach(key => {
      if (form.controls[key].invalid) {
        form.controls[key].markAsDirty();
        valid = false;
      }
    });
    return valid;
  }
  isRequiredMissing() {
    this.missingParameters = [];
    const setParams = this.parameters.map(param => param.name);
    const requiredParams = this.selectedScript.parameters.filter(param => param.mandatory);
    for (const rp of requiredParams) {
      if (!setParams.includes(rp.name)) {
        this.missingParameters.push(rp.name);
      }
    }
    return this.missingParameters.length > 0;
  }
  /**
   * Redirect the user to the processes overview page with the new process' ID,
   * so it can be highlighted in the overview table.
   * @param newProcess The newly created process
   * @private
   */
  sendBack(newProcess) {
    const extras = {
      queryParams: {
        new_process_id: newProcess.processId
      }
    };
    void this.router.navigate([(0,_process_page_routing_paths__WEBPACK_IMPORTED_MODULE_4__.getProcessListRoute)()], extras);
  }
  updateScript($event) {
    this.selectedScript = $event;
    this.parameters = undefined;
  }
  get generatedProcessName() {
    const paramsString = this.parameters?.map(p => {
      const value = this.parseValue(p.value);
      return (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_2__.isEmpty)(value) ? p.name : `${p.name} ${value}`;
    }).join(' ') || '';
    return (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_2__.isEmpty)(paramsString) ? this.selectedScript.name : `${this.selectedScript.name} ${paramsString}`;
  }
  parseValue(value) {
    if (typeof value === 'boolean') {
      return undefined;
    }
    if (value instanceof File) {
      return value.name;
    }
    return value?.toString();
  }
  static {
    this.ɵfac = function ProcessFormComponent_Factory(t) {
      return new (t || ProcessFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_data_processes_script_data_service__WEBPACK_IMPORTED_MODULE_0__.ScriptDataService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_3__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
      type: ProcessFormComponent,
      selectors: [["ds-process-form"]],
      inputs: {
        selectedScript: "selectedScript",
        process: "process",
        parameters: "parameters",
        headerKey: "headerKey"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵStandaloneFeature"]],
      decls: 19,
      vars: 16,
      consts: [["form", "ngForm"], [1, "container"], [1, "row"], [1, "col-12"], [1, "col-12", "col-md-6", "mb-2"], [3, "ngSubmit"], [3, "select", "script"], [3, "updateParameters", "initialParams", "script"], [1, "btn", "btn-danger", "float-left", 3, "routerLink"], ["type", "submit", 1, "btn", "btn-primary", "float-right"], [1, "col-12", "col-md-6"], [3, "script", 4, "ngIf"], ["class", "mt-3 alert alert-danger validation-error", 4, "ngIf"], [3, "script"], [1, "mt-3", "alert", "alert-danger", "validation-error"], [4, "ngFor", "ngForOf"]],
      template: function ProcessFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "h1", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 4)(6, "form", 5, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngSubmit", function ProcessFormComponent_Template_form_ngSubmit_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
            const form_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](7);
            return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx.submitForm(form_r2));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "ds-scripts-select", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("select", function ProcessFormComponent_Template_ds_scripts_select_select_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
            ctx.selectedScript = $event;
            return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx.parameters = undefined);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "ds-process-parameters", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("updateParameters", function ProcessFormComponent_Template_ds_process_parameters_updateParameters_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx.parameters = $event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](12, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](15, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](17, ProcessFormComponent_ds_script_help_17_Template, 1, 1, "ds-script-help", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](18, ProcessFormComponent_div_18_Template, 5, 4, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 9, ctx.headerKey), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("script", ctx.selectedScript);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("initialParams", ctx.parameters)("script", ctx.selectedScript);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](15, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](12, 11, "process.new.cancel"));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](15, 13, "process.new.submit"));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.selectedScript);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.missingParameters.length > 0);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgForm, _scripts_select_scripts_select_component__WEBPACK_IMPORTED_MODULE_9__.ScriptsSelectComponent, _process_parameters_process_parameters_component__WEBPACK_IMPORTED_MODULE_7__.ProcessParametersComponent, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLink, _script_help_script_help_component__WEBPACK_IMPORTED_MODULE_8__.ScriptHelpComponent, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgFor, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2Nlc3MtZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQSIsImZpbGUiOiJwcm9jZXNzLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqLyJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHJvY2Vzcy1wYWdlL2Zvcm0vcHJvY2Vzcy1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBO0FBQ0EsZ2tCQUFna0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqLyJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 65148:
/*!*****************************************************************************************************!*\
  !*** ./src/app/process-page/form/process-parameters/parameter-select/parameter-select.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ParameterSelectComponent: () => (/* binding */ ParameterSelectComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 56106);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var _processes_process_parameter_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../processes/process-parameter.model */ 73666);
/* harmony import */ var _process_form_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../process-form-factory */ 96994);
/* harmony import */ var _parameter_value_input_parameter_value_input_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../parameter-value-input/parameter-value-input.component */ 8022);










function ParameterSelectComponent_option_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const param_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngValue", param_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", param_r2.nameLong || param_r2.name, " ");
  }
}
function ParameterSelectComponent_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ParameterSelectComponent_button_9_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.removeParameter.emit(ctx_r3.parameterValue));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 1, "process.new.delete-parameter"));
  }
}
function ParameterSelectComponent_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 10);
  }
}
/**
 * Component to select a single parameter for a process
 */
class ParameterSelectComponent {
  constructor() {
    /**
     * The current parameter value of the selected parameter
     */
    this.parameterValue = new _processes_process_parameter_model__WEBPACK_IMPORTED_MODULE_0__.ProcessParameter();
    /**
     * Emits the parameter value when it's removed
     */
    this.removeParameter = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    /**
     * Emits the updated parameter value when it changes
     */
    this.changeParameter = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
  }
  /**
   * Returns the script parameter based on the currently selected name
   */
  get selectedScriptParameter() {
    return this.parameters.find(parameter => parameter.name === this.selectedParameter);
  }
  /**
   * Return the currently selected parameter name
   */
  get selectedParameter() {
    return this.parameterValue ? this.parameterValue.name : undefined;
  }
  /**
   * Sets the currently selected parameter based on the provided parameter name
   * Emits the new value from the changeParameter output
   * @param value The parameter name to set
   */
  set selectedParameter(value) {
    this.parameterValue.name = value;
    this.selectedParameterValue = undefined;
    this.changeParameter.emit(this.parameterValue);
  }
  /**
   * Returns the currently selected parameter value
   */
  get selectedParameterValue() {
    return this.parameterValue ? this.parameterValue.value : undefined;
  }
  /**
   * Sets the currently selected value for the parameter
   * Emits the new value from the changeParameter output
   * @param value The parameter value to set
   */
  set selectedParameterValue(value) {
    this.parameterValue.value = value;
    this.changeParameter.emit(this.parameterValue);
  }
  static {
    this.ɵfac = function ParameterSelectComponent_Factory(t) {
      return new (t || ParameterSelectComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: ParameterSelectComponent,
      selectors: [["ds-parameter-select"]],
      inputs: {
        index: "index",
        parameterValue: "parameterValue",
        parameters: "parameters",
        removable: "removable"
      },
      outputs: {
        removeParameter: "removeParameter",
        changeParameter: "changeParameter"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([], [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ControlContainer,
        useFactory: _process_form_factory__WEBPACK_IMPORTED_MODULE_1__.controlContainerFactory,
        deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_3__.Optional(), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm]]
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
      decls: 11,
      vars: 16,
      consts: [["param", "ngModel"], [1, "form-row", "gap-2", "mb-2", "mx-0"], ["id", "process-parameters", 1, "form-control", "col", 3, "ngModelChange", "name", "ngModel"], [3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], [1, "d-block", "col", "px-0", 3, "updateValue", "initialValue", "parameter", "index"], ["class", "btn btn-danger col-1 remove-button", 3, "click", 4, "ngIf"], ["class", "col-1", 4, "ngIf"], [1, "btn", "btn-danger", "col-1", "remove-button", 3, "click"], [1, "fas", "fa-trash"], [1, "col-1"]],
      template: function ParameterSelectComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1)(1, "select", 2, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function ParameterSelectComponent_Template_select_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.selectedParameter, $event) || (ctx.selectedParameter = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "option", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, ParameterSelectComponent_option_7_Template, 2, 2, "option", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "ds-parameter-value-input", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("updateValue", function ParameterSelectComponent_Template_ds_parameter_value_input_updateValue_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.selectedParameterValue = $event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, ParameterSelectComponent_button_9_Template, 3, 3, "button", 6)(10, ParameterSelectComponent_span_10_Template, 1, 0, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("name", "parameter-", ctx.index, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedParameter);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 12, "process.new.select-parameter"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngValue", undefined);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 14, "process.new.add-parameter"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.parameters);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("initialValue", ctx.parameterValue.value)("parameter", ctx.selectedScriptParameter)("index", ctx.index);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.removable);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.removable);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgFor, _parameter_value_input_parameter_value_input_component__WEBPACK_IMPORTED_MODULE_2__.ParameterValueInputComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcmFtZXRlci1zZWxlY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUEiLCJmaWxlIjoicGFyYW1ldGVyLXNlbGVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHJvY2Vzcy1wYWdlL2Zvcm0vcHJvY2Vzcy1wYXJhbWV0ZXJzL3BhcmFtZXRlci1zZWxlY3QvcGFyYW1ldGVyLXNlbGVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBLHdrQkFBd2tCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi8iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 83216:
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/process-page/form/process-parameters/parameter-value-input/boolean-value-input/boolean-value-input.component.ts ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BooleanValueInputComponent: () => (/* binding */ BooleanValueInputComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 56106);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var _process_form_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../process-form-factory */ 96994);
/* harmony import */ var _value_input_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../value-input.component */ 97532);







/**
 * Represents the value of a boolean parameter
 */
class BooleanValueInputComponent extends _value_input_component__WEBPACK_IMPORTED_MODULE_1__.ValueInputComponent {
  ngOnInit() {
    this.updateValue.emit(true);
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵBooleanValueInputComponent_BaseFactory;
      return function BooleanValueInputComponent_Factory(t) {
        return (ɵBooleanValueInputComponent_BaseFactory || (ɵBooleanValueInputComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](BooleanValueInputComponent)))(t || BooleanValueInputComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: BooleanValueInputComponent,
      selectors: [["ds-boolean-value-input"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([], [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ControlContainer,
        useFactory: _process_form_factory__WEBPACK_IMPORTED_MODULE_0__.controlContainerFactory,
        deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_2__.Optional(), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm]]
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 7,
      consts: [["type", "hidden", "value", "true", 3, "name", "id"]],
      template: function BooleanValueInputComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "input", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "translate");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("name", "boolean-value-", ctx.index, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("id", "boolean-value-", ctx.index, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 5, "process.new.parameter.label"));
        }
      },
      dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb2xlYW4tdmFsdWUtaW5wdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUEiLCJmaWxlIjoiYm9vbGVhbi12YWx1ZS1pbnB1dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHJvY2Vzcy1wYWdlL2Zvcm0vcHJvY2Vzcy1wYXJhbWV0ZXJzL3BhcmFtZXRlci12YWx1ZS1pbnB1dC9ib29sZWFuLXZhbHVlLWlucHV0L2Jvb2xlYW4tdmFsdWUtaW5wdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQSxnbEJBQWdsQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 27895:
/*!***************************************************************************************************************************!*\
  !*** ./src/app/process-page/form/process-parameters/parameter-value-input/date-value-input/date-value-input.component.ts ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DateValueInputComponent: () => (/* binding */ DateValueInputComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 56106);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var _process_form_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../process-form-factory */ 96994);
/* harmony import */ var _value_input_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../value-input.component */ 97532);









function DateValueInputComponent_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "process.new.parameter.string.required"), " ");
  }
}
function DateValueInputComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DateValueInputComponent_div_3_div_1_Template, 3, 3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const string_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", string_r2.errors.required);
  }
}
/**
 * Represents the user inputted value of a date parameter
 */
class DateValueInputComponent extends _value_input_component__WEBPACK_IMPORTED_MODULE_1__.ValueInputComponent {
  ngOnInit() {
    this.value = this.initialValue;
  }
  setValue(value) {
    this.value = value;
    this.updateValue.emit(value);
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵDateValueInputComponent_BaseFactory;
      return function DateValueInputComponent_Factory(t) {
        return (ɵDateValueInputComponent_BaseFactory || (ɵDateValueInputComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](DateValueInputComponent)))(t || DateValueInputComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: DateValueInputComponent,
      selectors: [["ds-date-value-input"]],
      inputs: {
        initialValue: "initialValue"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([], [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ControlContainer,
        useFactory: _process_form_factory__WEBPACK_IMPORTED_MODULE_0__.controlContainerFactory,
        deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_2__.Optional(), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm]]
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 4,
      vars: 9,
      consts: [["string", "ngModel"], ["required", "", "type", "text", 1, "form-control", 3, "ngModelChange", "name", "id", "ngModel"], ["class", "alert alert-danger validation-error mb-0", 4, "ngIf"], [1, "alert", "alert-danger", "validation-error", "mb-0"], [4, "ngIf"]],
      template: function DateValueInputComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "input", 1, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function DateValueInputComponent_Template_input_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.setValue($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, DateValueInputComponent_div_3_Template, 2, 1, "div", 2);
        }
        if (rf & 2) {
          const string_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("name", "date-value-", ctx.index, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("id", "date-value-", ctx.index, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.value);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 7, "process.new.parameter.label"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", string_r2.invalid && (string_r2.dirty || string_r2.touched));
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: calc(var(--bs-spacer) / 2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGUtdmFsdWUtaW5wdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLCtCQUFBO0FBQ0YiLCJmaWxlIjoiZGF0ZS12YWx1ZS1pbnB1dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovXG46aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogY2FsYyh2YXIoLS1icy1zcGFjZXIpIC8gMik7XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHJvY2Vzcy1wYWdlL2Zvcm0vcHJvY2Vzcy1wYXJhbWV0ZXJzL3BhcmFtZXRlci12YWx1ZS1pbnB1dC9kYXRlLXZhbHVlLWlucHV0L2RhdGUtdmFsdWUtaW5wdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLCtCQUFBO0FBQ0Y7QUFDQSw0dkJBQTR2QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovXG46aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogY2FsYyh2YXIoLS1icy1zcGFjZXIpIC8gMik7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 69987:
/*!***************************************************************************************************************************!*\
  !*** ./src/app/process-page/form/process-parameters/parameter-value-input/file-value-input/file-value-input.component.ts ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FileValueInputComponent: () => (/* binding */ FileValueInputComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 56106);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var _shared_utils_file_value_accessor_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../shared/utils/file-value-accessor.directive */ 30889);
/* harmony import */ var _shared_utils_require_file_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../shared/utils/require-file.validator */ 10682);
/* harmony import */ var _process_form_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../process-form-factory */ 96994);
/* harmony import */ var _value_input_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../value-input.component */ 97532);











function FileValueInputComponent_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "process.new.parameter.file.required"), " ");
  }
}
function FileValueInputComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, FileValueInputComponent_div_8_div_1_Template, 3, 3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const file_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", file_r2.errors.required);
  }
}
/**
 * Represents the user inputted value of a file parameter
 */
class FileValueInputComponent extends _value_input_component__WEBPACK_IMPORTED_MODULE_3__.ValueInputComponent {
  setFile(files) {
    this.fileObject = files.length > 0 ? files[0] : undefined;
    this.updateValue.emit(this.fileObject);
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵFileValueInputComponent_BaseFactory;
      return function FileValueInputComponent_Factory(t) {
        return (ɵFileValueInputComponent_BaseFactory || (ɵFileValueInputComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetInheritedFactory"](FileValueInputComponent)))(t || FileValueInputComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: FileValueInputComponent,
      selectors: [["ds-file-value-input"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([], [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ControlContainer,
        useFactory: _process_form_factory__WEBPACK_IMPORTED_MODULE_2__.controlContainerFactory,
        deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_4__.Optional(), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm]]
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
      decls: 9,
      vars: 12,
      consts: [["file", "ngModel"], [1, "d-flex", "align-items-center", "m-0", 3, "for"], [1, "btn", "btn-primary"], [1, "file-name", "ml-1"], ["requireFile", "", "type", "file", 1, "form-control-file", "d-none", 3, "ngModelChange", "name", "id", "ngModel"], ["class", "alert alert-danger validation-error", 4, "ngIf"], [1, "alert", "alert-danger", "validation-error"], [4, "ngIf"]],
      template: function FileValueInputComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "label", 1)(1, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "input", 4, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function FileValueInputComponent_Template_input_ngModelChange_6_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.setFile($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, FileValueInputComponent_div_8_Template, 2, 1, "div", 5);
        }
        if (rf & 2) {
          const file_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("for", "file-upload-", ctx.index, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 10, "process.new.parameter.file.upload-button"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.fileObject == null ? null : ctx.fileObject.name);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("name", "file-upload-", ctx.index, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("id", "file-upload-", ctx.index, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.fileObject);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", file_r2.invalid && (file_r2.dirty || file_r2.touched));
        }
      },
      dependencies: [_shared_utils_file_value_accessor_directive__WEBPACK_IMPORTED_MODULE_0__.FileValueAccessorDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _shared_utils_require_file_validator__WEBPACK_IMPORTED_MODULE_1__.FileValidator, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n.file-name[_ngcontent-%COMP%] {\n  flex: 1;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGUtdmFsdWUtaW5wdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQTtFQUNFLE9BQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFDRiIsImZpbGUiOiJmaWxlLXZhbHVlLWlucHV0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi9cbi5maWxlLW5hbWUge1xuICBmbGV4OiAxO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHJvY2Vzcy1wYWdlL2Zvcm0vcHJvY2Vzcy1wYXJhbWV0ZXJzL3BhcmFtZXRlci12YWx1ZS1pbnB1dC9maWxlLXZhbHVlLWlucHV0L2ZpbGUtdmFsdWUtaW5wdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQTtFQUNFLE9BQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFDRjtBQUNBLHd4QkFBd3hCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi9cbi5maWxlLW5hbWUge1xuICBmbGV4OiAxO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 8022:
/*!***************************************************************************************************************!*\
  !*** ./src/app/process-page/form/process-parameters/parameter-value-input/parameter-value-input.component.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ParameterValueInputComponent: () => (/* binding */ ParameterValueInputComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 56106);
/* harmony import */ var _scripts_script_parameter_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../scripts/script-parameter.model */ 91681);
/* harmony import */ var _scripts_script_parameter_type_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../scripts/script-parameter-type.model */ 6748);
/* harmony import */ var _process_form_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../process-form-factory */ 96994);
/* harmony import */ var _boolean_value_input_boolean_value_input_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./boolean-value-input/boolean-value-input.component */ 83216);
/* harmony import */ var _date_value_input_date_value_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./date-value-input/date-value-input.component */ 27895);
/* harmony import */ var _file_value_input_file_value_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./file-value-input/file-value-input.component */ 69987);
/* harmony import */ var _string_value_input_string_value_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./string-value-input/string-value-input.component */ 56913);











function ParameterValueInputComponent_ds_string_value_input_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ds-string-value-input", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("updateValue", function ParameterValueInputComponent_ds_string_value_input_1_Template_ds_string_value_input_updateValue_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.updateValue.emit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("initialValue", ctx_r1.initialValue)("index", ctx_r1.index);
  }
}
function ParameterValueInputComponent_ds_string_value_input_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ds-string-value-input", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("updateValue", function ParameterValueInputComponent_ds_string_value_input_2_Template_ds_string_value_input_updateValue_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.updateValue.emit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("initialValue", ctx_r1.initialValue)("index", ctx_r1.index);
  }
}
function ParameterValueInputComponent_ds_date_value_input_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ds-date-value-input", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("updateValue", function ParameterValueInputComponent_ds_date_value_input_3_Template_ds_date_value_input_updateValue_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.updateValue.emit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("initialValue", ctx_r1.initialValue)("index", ctx_r1.index);
  }
}
function ParameterValueInputComponent_ds_file_value_input_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ds-file-value-input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("updateValue", function ParameterValueInputComponent_ds_file_value_input_4_Template_ds_file_value_input_updateValue_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.updateValue.emit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("index", ctx_r1.index);
  }
}
function ParameterValueInputComponent_ds_boolean_value_input_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ds-boolean-value-input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("updateValue", function ParameterValueInputComponent_ds_boolean_value_input_5_Template_ds_boolean_value_input_updateValue_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.updateValue.emit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("index", ctx_r1.index);
  }
}
/**
 * Component that renders the correct parameter value input based the script parameter's type
 */
class ParameterValueInputComponent {
  constructor() {
    /**
     * Emits the value of the input when its updated
     */
    this.updateValue = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    /**
     * The available script parameter types
     */
    this.parameterTypes = _scripts_script_parameter_type_model__WEBPACK_IMPORTED_MODULE_1__.ScriptParameterType;
  }
  static {
    this.ɵfac = function ParameterValueInputComponent_Factory(t) {
      return new (t || ParameterValueInputComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: ParameterValueInputComponent,
      selectors: [["ds-parameter-value-input"]],
      inputs: {
        index: "index",
        parameter: "parameter",
        initialValue: "initialValue"
      },
      outputs: {
        updateValue: "updateValue"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([], [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ControlContainer,
        useFactory: _process_form_factory__WEBPACK_IMPORTED_MODULE_2__.controlContainerFactory,
        deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_7__.Optional(), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgForm]]
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵStandaloneFeature"]],
      decls: 6,
      vars: 6,
      consts: [[3, "ngSwitch"], [3, "initialValue", "index", "updateValue", 4, "ngSwitchCase"], [3, "index", "updateValue", 4, "ngSwitchCase"], [3, "updateValue", "initialValue", "index"], [3, "updateValue", "index"]],
      template: function ParameterValueInputComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ParameterValueInputComponent_ds_string_value_input_1_Template, 1, 2, "ds-string-value-input", 1)(2, ParameterValueInputComponent_ds_string_value_input_2_Template, 1, 2, "ds-string-value-input", 1)(3, ParameterValueInputComponent_ds_date_value_input_3_Template, 1, 2, "ds-date-value-input", 1)(4, ParameterValueInputComponent_ds_file_value_input_4_Template, 1, 1, "ds-file-value-input", 2)(5, ParameterValueInputComponent_ds_boolean_value_input_5_Template, 1, 1, "ds-boolean-value-input", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitch", ctx.parameter == null ? null : ctx.parameter.type);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitchCase", ctx.parameterTypes.STRING);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitchCase", ctx.parameterTypes.OUTPUT);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitchCase", ctx.parameterTypes.DATE);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitchCase", ctx.parameterTypes.FILE);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitchCase", ctx.parameterTypes.BOOLEAN);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgSwitchCase, _string_value_input_string_value_input_component__WEBPACK_IMPORTED_MODULE_6__.StringValueInputComponent, _date_value_input_date_value_input_component__WEBPACK_IMPORTED_MODULE_4__.DateValueInputComponent, _file_value_input_file_value_input_component__WEBPACK_IMPORTED_MODULE_5__.FileValueInputComponent, _boolean_value_input_boolean_value_input_component__WEBPACK_IMPORTED_MODULE_3__.BooleanValueInputComponent],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcmFtZXRlci12YWx1ZS1pbnB1dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQSIsImZpbGUiOiJwYXJhbWV0ZXItdmFsdWUtaW5wdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqLyJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHJvY2Vzcy1wYWdlL2Zvcm0vcHJvY2Vzcy1wYXJhbWV0ZXJzL3BhcmFtZXRlci12YWx1ZS1pbnB1dC9wYXJhbWV0ZXItdmFsdWUtaW5wdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQSx3bEJBQXdsQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 56913:
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/process-page/form/process-parameters/parameter-value-input/string-value-input/string-value-input.component.ts ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StringValueInputComponent: () => (/* binding */ StringValueInputComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 56106);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var _process_form_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../process-form-factory */ 96994);
/* harmony import */ var _value_input_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../value-input.component */ 97532);









function StringValueInputComponent_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "process.new.parameter.string.required"), " ");
  }
}
function StringValueInputComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, StringValueInputComponent_div_3_div_1_Template, 3, 3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const string_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", string_r2.errors.required);
  }
}
/**
 * Represents the user inputted value of a string parameter
 */
class StringValueInputComponent extends _value_input_component__WEBPACK_IMPORTED_MODULE_1__.ValueInputComponent {
  ngOnInit() {
    this.value = this.initialValue;
  }
  setValue(value) {
    this.value = value;
    this.updateValue.emit(value);
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵStringValueInputComponent_BaseFactory;
      return function StringValueInputComponent_Factory(t) {
        return (ɵStringValueInputComponent_BaseFactory || (ɵStringValueInputComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](StringValueInputComponent)))(t || StringValueInputComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: StringValueInputComponent,
      selectors: [["ds-string-value-input"]],
      inputs: {
        initialValue: "initialValue"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([], [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ControlContainer,
        useFactory: _process_form_factory__WEBPACK_IMPORTED_MODULE_0__.controlContainerFactory,
        deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_2__.Optional(), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm]]
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 4,
      vars: 9,
      consts: [["string", "ngModel"], ["required", "", "type", "text", 1, "form-control", 3, "ngModelChange", "name", "id", "ngModel"], ["class", "alert alert-danger validation-error mb-0", 4, "ngIf"], [1, "alert", "alert-danger", "validation-error", "mb-0"], [4, "ngIf"]],
      template: function StringValueInputComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "input", 1, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function StringValueInputComponent_Template_input_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.setValue($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, StringValueInputComponent_div_3_Template, 2, 1, "div", 2);
        }
        if (rf & 2) {
          const string_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("name", "string-value-", ctx.index, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("id", "string-value-", ctx.index, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.value);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 7, "process.new.parameter.label"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", string_r2.invalid && (string_r2.dirty || string_r2.touched));
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: calc(var(--bs-spacer) / 2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy12YWx1ZS1pbnB1dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsK0JBQUE7QUFDRiIsImZpbGUiOiJzdHJpbmctdmFsdWUtaW5wdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqL1xuOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IGNhbGModmFyKC0tYnMtc3BhY2VyKSAvIDIpO1xufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHJvY2Vzcy1wYWdlL2Zvcm0vcHJvY2Vzcy1wYXJhbWV0ZXJzL3BhcmFtZXRlci12YWx1ZS1pbnB1dC9zdHJpbmctdmFsdWUtaW5wdXQvc3RyaW5nLXZhbHVlLWlucHV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSwrQkFBQTtBQUNGO0FBQ0Esb3dCQUFvd0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqL1xuOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IGNhbGModmFyKC0tYnMtc3BhY2VyKSAvIDIpO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 97532:
/*!*****************************************************************************************************!*\
  !*** ./src/app/process-page/form/process-parameters/parameter-value-input/value-input.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ValueInputComponent: () => (/* binding */ ValueInputComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 90310);


/**
 * Abstract class that represents value input components
 */
class ValueInputComponent {
  constructor() {
    /**
     * Used by the subclasses to emit the value when it's updated
     */
    this.updateValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  static {
    this.ɵfac = function ValueInputComponent_Factory(t) {
      return new (t || ValueInputComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ValueInputComponent,
      selectors: [["ds-value-input"]],
      inputs: {
        index: "index"
      },
      outputs: {
        updateValue: "updateValue"
      },
      decls: 0,
      vars: 0,
      template: function ValueInputComponent_Template(rf, ctx) {},
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 65023:
/*!**************************************************************************************!*\
  !*** ./src/app/process-page/form/process-parameters/process-parameters.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProcessParametersComponent: () => (/* binding */ ProcessParametersComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 56106);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/empty.util */ 82777);
/* harmony import */ var _processes_process_parameter_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../processes/process-parameter.model */ 73666);
/* harmony import */ var _scripts_script_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../scripts/script.model */ 24903);
/* harmony import */ var _process_form_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../process-form-factory */ 96994);
/* harmony import */ var _parameter_select_parameter_select_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parameter-select/parameter-select.component */ 65148);











function ProcessParametersComponent_div_0_ds_parameter_select_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ds-parameter-select", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("removeParameter", function ProcessParametersComponent_div_0_ds_parameter_select_4_Template_ds_parameter_select_removeParameter_0_listener() {
      const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1).index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.removeParameter(i_r2));
    })("changeParameter", function ProcessParametersComponent_div_0_ds_parameter_select_4_Template_ds_parameter_select_changeParameter_0_listener($event) {
      const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1).index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.updateParameter($event, i_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const value_r4 = ctx.$implicit;
    const i_r2 = ctx.index;
    const last_r5 = ctx.last;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("parameters", ctx_r2.script.parameters)("parameterValue", value_r4)("removable", !last_r5)("index", i_r2);
  }
}
function ProcessParametersComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 1)(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, ProcessParametersComponent_div_0_ds_parameter_select_4_Template, 1, 4, "ds-parameter-select", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 2, "process.new.select-parameters"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r2.parameterValues);
  }
}
/**
 * Component that represents the selected list of parameters for a script
 */
class ProcessParametersComponent {
  constructor() {
    /**
     * Emits the parameter values when they're updated
     */
    this.updateParameters = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
  }
  ngOnInit() {
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_0__.hasValue)(this.initialParams)) {
      this.parameterValues = this.initialParams;
    }
  }
  /**
   * Makes sure the parameters are reset when the script changes
   * @param changes
   */
  ngOnChanges(changes) {
    if (changes.script) {
      this.initParameters();
    }
  }
  /**
   * Empties the parameter values
   * Initializes the first parameter value
   */
  initParameters() {
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_0__.hasValue)(this.initialParams)) {
      this.parameterValues = this.initialParams;
    } else {
      this.parameterValues = [];
      this.initializeParameter();
    }
  }
  /**
   * Updates a single parameter value using its new value and index
   * Adds a new parameter when the last of the parameter values is changed
   * @param processParameter The new value of the parameter
   * @param index The index of the parameter
   */
  updateParameter(processParameter, index) {
    this.parameterValues[index] = processParameter;
    if (index === this.parameterValues.length - 1) {
      this.addParameter();
    }
    this.updateParameters.emit(this.parameterValues.filter(param => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_0__.hasValue)(param.name)));
  }
  /**
   * Removes a parameter value from the list
   * @param index The index of the parameter to remove
   */
  removeParameter(index) {
    this.parameterValues = this.parameterValues.filter((value, i) => i !== index);
    this.updateParameters.emit(this.parameterValues.filter(param => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_0__.hasValue)(param.name)));
  }
  /**
   * Initializes parameter values based on the selected script
   */
  initializeParameter() {
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_0__.hasValue)(this.script)) {
      this.parameterValues = this.script.parameters.filter(param => param.mandatory).map(parameter => Object.assign(new _processes_process_parameter_model__WEBPACK_IMPORTED_MODULE_1__.ProcessParameter(), {
        name: parameter.name
      }));
    }
    this.addParameter();
  }
  /**
   * Adds an empty parameter value to the end of the list
   */
  addParameter() {
    this.parameterValues = [...this.parameterValues, new _processes_process_parameter_model__WEBPACK_IMPORTED_MODULE_1__.ProcessParameter()];
  }
  static {
    this.ɵfac = function ProcessParametersComponent_Factory(t) {
      return new (t || ProcessParametersComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: ProcessParametersComponent,
      selectors: [["ds-process-parameters"]],
      inputs: {
        script: "script",
        initialParams: "initialParams"
      },
      outputs: {
        updateParameters: "updateParameters"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([], [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ControlContainer,
        useFactory: _process_form_factory__WEBPACK_IMPORTED_MODULE_3__.controlContainerFactory,
        deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_5__.Optional(), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm]]
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵStandaloneFeature"]],
      decls: 1,
      vars: 1,
      consts: [["class", "form-group", "data-testID", "parameters-select-container", 4, "ngIf"], ["data-testID", "parameters-select-container", 1, "form-group"], [3, "parameters", "parameterValue", "removable", "index", "removeParameter", "changeParameter", 4, "ngFor", "ngForOf"], [3, "removeParameter", "changeParameter", "parameters", "parameterValue", "removable", "index"]],
      template: function ProcessParametersComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, ProcessParametersComponent_div_0_Template, 5, 4, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.script == null ? null : ctx.script.parameters == null ? null : ctx.script.parameters.length);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgFor, _parameter_select_parameter_select_component__WEBPACK_IMPORTED_MODULE_4__.ParameterSelectComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2Nlc3MtcGFyYW1ldGVycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQSIsImZpbGUiOiJwcm9jZXNzLXBhcmFtZXRlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqLyJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHJvY2Vzcy1wYWdlL2Zvcm0vcHJvY2Vzcy1wYXJhbWV0ZXJzL3Byb2Nlc3MtcGFyYW1ldGVycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBLGdsQkFBZ2xCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi8iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 88093:
/*!************************************************************************!*\
  !*** ./src/app/process-page/form/script-help/script-help.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScriptHelpComponent: () => (/* binding */ ScriptHelpComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var _scripts_script_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../scripts/script.model */ 24903);
/* harmony import */ var _scripts_script_parameter_type_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../scripts/script-parameter-type.model */ 6748);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);






function ScriptHelpComponent_tr_6_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
  }
}
function ScriptHelpComponent_tr_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ScriptHelpComponent_tr_6_ng_container_3_Template, 1, 0, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const param_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const type_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", param_r1.name, " ", param_r1.nameLong, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", type_r2)("ngTemplateOutletContext", param_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](param_r1.description);
  }
}
function ScriptHelpComponent_ng_template_7_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("<", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "process.new.parameter.type.value"), ">");
  }
}
function ScriptHelpComponent_ng_template_7_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("<", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "process.new.parameter.type.value"), ">");
  }
}
function ScriptHelpComponent_ng_template_7_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("<", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "process.new.parameter.type.value"), ">");
  }
}
function ScriptHelpComponent_ng_template_7_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("<", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "process.new.parameter.type.file"), ">");
  }
}
function ScriptHelpComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ScriptHelpComponent_ng_template_7_span_1_Template, 3, 3, "span", 7)(2, ScriptHelpComponent_ng_template_7_span_2_Template, 3, 3, "span", 7)(3, ScriptHelpComponent_ng_template_7_span_3_Template, 3, 3, "span", 7)(4, ScriptHelpComponent_ng_template_7_span_4_Template, 3, 3, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const type_r3 = ctx.type;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", type_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", ctx_r3.parameterTypes.DATE);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", ctx_r3.parameterTypes.STRING);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", ctx_r3.parameterTypes.OUTPUT);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", ctx_r3.parameterTypes.FILE);
  }
}
/**
 * Components that represents a help section for the script use and parameters
 */
class ScriptHelpComponent {
  constructor() {
    /**
     * The available script parameter types
     */
    this.parameterTypes = _scripts_script_parameter_type_model__WEBPACK_IMPORTED_MODULE_1__.ScriptParameterType;
  }
  static {
    this.ɵfac = function ScriptHelpComponent_Factory(t) {
      return new (t || ScriptHelpComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ScriptHelpComponent,
      selectors: [["ds-script-help"]],
      inputs: {
        script: "script"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 9,
      vars: 3,
      consts: [["type", ""], [1, "text-secondary"], [1, "table-borderless", "mt-3"], [4, "ngFor", "ngForOf"], [1, "align-top", "text-nowrap"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngSwitch"], [4, "ngSwitchCase"]],
      template: function ScriptHelpComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1)(1, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "table", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, ScriptHelpComponent_tr_6_Template, 6, 5, "tr", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, ScriptHelpComponent_ng_template_7_Template, 5, 5, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.script == null ? null : ctx.script.name);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.script == null ? null : ctx.script.description);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.script == null ? null : ctx.script.parameters);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgFor, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgSwitchCase, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC1oZWxwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBIiwiZmlsZSI6InNjcmlwdC1oZWxwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi8iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHJvY2Vzcy1wYWdlL2Zvcm0vc2NyaXB0LWhlbHAvc2NyaXB0LWhlbHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQSw0akJBQTRqQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 40697:
/*!******************************************************************************!*\
  !*** ./src/app/process-page/form/scripts-select/scripts-select.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScriptsSelectComponent: () => (/* binding */ ScriptsSelectComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 56106);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 49966);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-infinite-scroll */ 21001);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 83485);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 21252);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var _core_data_processes_script_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/data/processes/script-data.service */ 32736);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/shared/operators */ 55757);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/empty.util */ 82777);
/* harmony import */ var _shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/loading/themed-loading.component */ 82394);
/* harmony import */ var _scripts_script_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../scripts/script.model */ 24903);
/* harmony import */ var _process_form_factory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../process-form-factory */ 96994);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 14354);






















const _c0 = () => ({
  standalone: true
});
function ScriptsSelectComponent_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ScriptsSelectComponent_button_7_Template_button_click_0_listener() {
      const script_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r3.onSelect(script_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const script_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("title", script_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](script_r3.name);
  }
}
function ScriptsSelectComponent_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "ds-loading", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("message", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 1, "loading.default"));
  }
}
function ScriptsSelectComponent_div_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "process.new.select-script.required"), " ");
  }
}
function ScriptsSelectComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ScriptsSelectComponent_div_11_div_1_Template, 3, 3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    const script_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", script_r5.errors.required);
  }
}
const SCRIPT_QUERY_PARAMETER = 'script';
/**
 * Component used to select a script
 */
class ScriptsSelectComponent {
  constructor(scriptService, router, route) {
    this.scriptService = scriptService;
    this.router = router;
    this.route = route;
    /**
     * Emits the selected script when the selection changes
     */
    this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    /**
     * All available scripts
     */
    this.scripts = [];
    this._isLastPage = false;
    this.scriptOptions = {
      elementsPerPage: 20,
      currentPage: 1
    };
    this.isLoading$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject(false);
  }
  /**
   * Sets all available scripts
   * Checks if the route contains a script ID and auto selects this scripts
   */
  ngOnInit() {
    this.loadScripts();
  }
  /**
   * Load the scripts and check if the route contains a script
   */
  loadScripts() {
    if (this.isLoading$.value) {
      return;
    }
    this.isLoading$.next(true);
    this.subscription = this.scriptService.findAll(this.scriptOptions).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_1__.getFirstCompletedRemoteData)(), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_1__.getRemoteDataPayload)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.tap)(paginatedList => {
      this._isLastPage = paginatedList?.pageInfo?.currentPage >= paginatedList?.pageInfo?.totalPages;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(paginatedList => paginatedList.page)).subscribe(newScripts => {
      this.scripts = [...this.scripts, ...newScripts];
      this.isLoading$.next(false);
      const param = this.route.snapshot.queryParams[SCRIPT_QUERY_PARAMETER];
      if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_2__.hasValue)(param)) {
        this._selectedScript = this.scripts.find(script => script.id === param);
        this.select.emit(this._selectedScript);
      }
    });
  }
  /**
   * Load more scripts when the user scrolls to the bottom of the list
   * @param event The scroll event
   */
  onScroll(event) {
    if (event.target.scrollTop + event.target.clientHeight >= event.target.scrollHeight) {
      if (!this.isLoading$.value && !this._isLastPage) {
        this.scriptOptions.currentPage++;
        this.loadScripts();
      }
    }
  }
  /**
   * Returns the identifier of the selected script
   */
  get selectedScript() {
    return this._selectedScript ? this._selectedScript.id : undefined;
  }
  /**
   * Sets the currently selected script by navigating to the correct route using the scripts ID
   * @param value The identifier of the script
   */
  set selectedScript(value) {
    this.router.navigate([], {
      queryParams: {
        [SCRIPT_QUERY_PARAMETER]: value
      }
    });
  }
  selectScript(script) {
    this._selectedScript = script;
  }
  onSelect(newScript) {
    this.selectScript(newScript);
    // this._selectedScript = newScript;
    this.select.emit(newScript);
    this.selectedScript = newScript.name;
  }
  set script(value) {
    this._selectedScript = value;
  }
  ngOnDestroy() {
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_2__.hasValue)(this.subscription)) {
      this.subscription.unsubscribe();
    }
  }
  static {
    this.ɵfac = function ScriptsSelectComponent_Factory(t) {
      return new (t || ScriptsSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_data_processes_script_data_service__WEBPACK_IMPORTED_MODULE_0__.ScriptDataService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: ScriptsSelectComponent,
      selectors: [["ds-scripts-select"]],
      inputs: {
        script: "script"
      },
      outputs: {
        select: "select"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵProvidersFeature"]([], [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ControlContainer,
        useFactory: _process_form_factory__WEBPACK_IMPORTED_MODULE_5__.controlContainerFactory,
        deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_6__.Optional(), _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgForm]]
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵStandaloneFeature"]],
      decls: 12,
      vars: 16,
      consts: [["script", "ngModel"], [1, "d-flex", "w-100", "flex-column", "gap-3"], ["ngbDropdown", "", 1, "d-flex"], ["id", "process-script", "required", "", "ngbDropdownToggle", "", "role", "combobox", 1, "form-control", 3, "ngModel", "placeholder", "ngModelOptions"], ["ngbDropdownMenu", "", "aria-labelledby", "process-script", "role", "menu", "infiniteScroll", "", 1, "w-100", "scrollable-menu", 3, "scroll", "infiniteScrollDistance", "infiniteScrollThrottle", "infiniteScrollUpDistance", "fromRoot", "scrollWindow"], ["class", "dropdown-item", "role", "menuitem", "type", "button", 3, "title", "click", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "alert alert-danger validation-error", 4, "ngIf"], ["role", "menuitem", "type", "button", 1, "dropdown-item", 3, "click", "title"], [1, "text-truncate"], ["role", "menuitem", 1, "dropdown-item", "disabled"], [3, "message"], [1, "alert", "alert-danger", "validation-error"]],
      template: function ScriptsSelectComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 1)(1, "div")(2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "input", 3, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("scroll", function ScriptsSelectComponent_Template_div_scroll_6_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.onScroll($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, ScriptsSelectComponent_button_7_Template, 3, 2, "button", 5)(8, ScriptsSelectComponent_ng_container_8_Template, 4, 3, "ng-container", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](9, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, ScriptsSelectComponent_div_11_Template, 2, 1, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          const script_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 11, "process.new.select-script.placeholder"));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.selectedScript)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](15, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("infiniteScrollDistance", 5)("infiniteScrollThrottle", 300)("infiniteScrollUpDistance", 1.5)("fromRoot", true)("scrollWindow", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.scripts);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](9, 13, ctx.isLoading$));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", script_r5.invalid && (script_r5.dirty || script_r5.touched));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgFor, _angular_common__WEBPACK_IMPORTED_MODULE_12__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslatePipe, ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_14__.InfiniteScrollModule, ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_14__.InfiniteScrollDirective, _shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_3__.ThemedLoadingComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbDropdownModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbDropdownMenu],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n.dropdown-item[_ngcontent-%COMP%] {\n  padding: 0.35rem 1rem;\n}\n\n.dropdown-item[_ngcontent-%COMP%]:active {\n  color: white !important;\n}\n\n.scrollable-menu[_ngcontent-%COMP%] {\n  height: auto;\n  max-height: var(--ds-dropdown-menu-max-height);\n  overflow-x: hidden;\n}\n\nli[_ngcontent-%COMP%]:not(:last-of-type)   .dropdown-item[_ngcontent-%COMP%] {\n  border-bottom: var(--bs-dropdown-border-width) solid var(--bs-dropdown-border-color);\n}\n\n#entityControlsDropdownMenu[_ngcontent-%COMP%] {\n  outline: 0;\n  left: 0 !important;\n  box-shadow: var(--bs-btn-focus-box-shadow);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdHMtc2VsZWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBO0FBQ0E7RUFDRSxxQkFBQTtBQUNGOztBQUNBO0VBQ0UsdUJBQUE7QUFFRjs7QUFBQTtFQUNFLFlBQUE7RUFDQSw4Q0FBQTtFQUNBLGtCQUFBO0FBR0Y7O0FBREE7RUFDRSxvRkFBQTtBQUlGOztBQUZBO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsMENBQUE7QUFLRiIsImZpbGUiOiJzY3JpcHRzLXNlbGVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovXG4uZHJvcGRvd24taXRlbSB7XG4gIHBhZGRpbmc6IDAuMzVyZW0gMXJlbTtcbn1cbi5kcm9wZG93bi1pdGVtOmFjdGl2ZSB7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuLnNjcm9sbGFibGUtbWVudSB7XG4gIGhlaWdodDogYXV0bztcbiAgbWF4LWhlaWdodDogdmFyKC0tZHMtZHJvcGRvd24tbWVudS1tYXgtaGVpZ2h0KTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxubGk6bm90KDpsYXN0LW9mLXR5cGUpIC5kcm9wZG93bi1pdGVtIHtcbiAgYm9yZGVyLWJvdHRvbTogdmFyKC0tYnMtZHJvcGRvd24tYm9yZGVyLXdpZHRoKSBzb2xpZCB2YXIoLS1icy1kcm9wZG93bi1ib3JkZXItY29sb3IpO1xufVxuI2VudGl0eUNvbnRyb2xzRHJvcGRvd25NZW51IHtcbiAgb3V0bGluZTogMDtcbiAgbGVmdDogMCAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiB2YXIoLS1icy1idG4tZm9jdXMtYm94LXNoYWRvdyk7XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHJvY2Vzcy1wYWdlL2Zvcm0vc2NyaXB0cy1zZWxlY3Qvc2NyaXB0cy1zZWxlY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQTtFQUNFLHFCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSx1QkFBQTtBQUVGOztBQUFBO0VBQ0UsWUFBQTtFQUNBLDhDQUFBO0VBQ0Esa0JBQUE7QUFHRjs7QUFEQTtFQUNFLG9GQUFBO0FBSUY7O0FBRkE7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQ0FBQTtBQUtGO0FBQ0EsNDNDQUE0M0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqL1xuLmRyb3Bkb3duLWl0ZW0ge1xuICBwYWRkaW5nOiAwLjM1cmVtIDFyZW07XG59XG4uZHJvcGRvd24taXRlbTphY3RpdmUge1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cbi5zY3JvbGxhYmxlLW1lbnUge1xuICBoZWlnaHQ6IGF1dG87XG4gIG1heC1oZWlnaHQ6IHZhcigtLWRzLWRyb3Bkb3duLW1lbnUtbWF4LWhlaWdodCk7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cbmxpOm5vdCg6bGFzdC1vZi10eXBlKSAuZHJvcGRvd24taXRlbSB7XG4gIGJvcmRlci1ib3R0b206IHZhcigtLWJzLWRyb3Bkb3duLWJvcmRlci13aWR0aCkgc29saWQgdmFyKC0tYnMtZHJvcGRvd24tYm9yZGVyLWNvbG9yKTtcbn1cbiNlbnRpdHlDb250cm9sc0Ryb3Bkb3duTWVudSB7XG4gIG91dGxpbmU6IDA7XG4gIGxlZnQ6IDAgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogdmFyKC0tYnMtYnRuLWZvY3VzLWJveC1zaGFkb3cpO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 90474:
/*!***********************************************************!*\
  !*** ./src/app/process-page/new/new-process.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NewProcessComponent: () => (/* binding */ NewProcessComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 84975);
/* harmony import */ var _core_cache_builders_link_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/cache/builders/link.service */ 1321);
/* harmony import */ var _core_data_processes_process_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/data/processes/process-data.service */ 87414);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/shared/operators */ 55757);
/* harmony import */ var _shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/utils/follow-link-config.model */ 67600);
/* harmony import */ var _shared_utils_has_value_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/utils/has-value.pipe */ 93120);
/* harmony import */ var _shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/utils/var.directive */ 18226);
/* harmony import */ var _form_process_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../form/process-form.component */ 10104);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 14354);














function NewProcessComponent_ng_container_0_ds_process_form_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "ds-process-form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "async");
  }
  if (rf & 2) {
    const process_r1 = ctx.ngVar;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("selectedScript", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 2, ctx_r1.script$))("parameters", process_r1.parameters);
  }
}
function NewProcessComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, NewProcessComponent_ng_container_0_ds_process_form_1_Template, 2, 4, "ds-process-form", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngVar", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, ctx_r1.fromExisting$));
  }
}
function NewProcessComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "ds-process-form", 4);
  }
}
/**
 * Component to create a new script
 */
class NewProcessComponent {
  constructor(route, processService, linkService) {
    this.route = route;
    this.processService = processService;
    this.linkService = linkService;
  }
  /**
   * If there's an id parameter, use this the process with this identifier as presets for the form
   */
  ngOnInit() {
    const id = this.route.snapshot.queryParams.id;
    if (id) {
      this.fromExisting$ = this.processService.findById(id).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_2__.getFirstSucceededRemoteDataPayload)());
      this.script$ = this.fromExisting$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(process => this.linkService.resolveLink(process, (0,_shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_3__.followLink)('script'))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(process => process.script), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_2__.getFirstSucceededRemoteDataPayload)());
    }
  }
  static {
    this.ɵfac = function NewProcessComponent_Factory(t) {
      return new (t || NewProcessComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_data_processes_process_data_service__WEBPACK_IMPORTED_MODULE_1__.ProcessDataService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_cache_builders_link_service__WEBPACK_IMPORTED_MODULE_0__.LinkService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: NewProcessComponent,
      selectors: [["ds-new-process"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵStandaloneFeature"]],
      decls: 5,
      vars: 6,
      consts: [["newProcess", ""], [4, "ngIf", "ngIfElse"], ["headerKey", "process.new.header", 3, "selectedScript", "parameters", 4, "ngVar"], ["headerKey", "process.new.header", 3, "selectedScript", "parameters"], ["headerKey", "process.new.header"]],
      template: function NewProcessComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, NewProcessComponent_ng_container_0_Template, 3, 3, "ng-container", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "dsHasValue");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, NewProcessComponent_ng_template_3_Template, 1, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        }
        if (rf & 2) {
          const newProcess_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 4, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 2, ctx.fromExisting$)))("ngIfElse", newProcess_r3);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_5__.VarDirective, _form_process_form_component__WEBPACK_IMPORTED_MODULE_6__.ProcessFormComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.AsyncPipe, _shared_utils_has_value_pipe__WEBPACK_IMPORTED_MODULE_4__.HasValuePipe],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldy1wcm9jZXNzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBIiwiZmlsZSI6Im5ldy1wcm9jZXNzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi8iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHJvY2Vzcy1wYWdlL25ldy9uZXctcHJvY2Vzcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBLDRqQkFBNGpCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi8iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 83543:
/*!**********************************************************************!*\
  !*** ./src/app/process-page/overview/process-bulk-delete.service.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProcessBulkDeleteService: () => (/* binding */ ProcessBulkDeleteService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 83485);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 70141);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 1702);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 19847);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 21252);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 85687);
/* harmony import */ var _core_data_processes_process_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/data/processes/process-data.service */ 87414);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/shared/operators */ 55757);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/empty.util */ 82777);
/* harmony import */ var _shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/notifications/notifications.service */ 69472);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 96439);











/**
 * Service to facilitate removing processes in bulk.
 */
class ProcessBulkDeleteService {
  constructor(processDataService, notificationsService, translateService) {
    this.processDataService = processDataService;
    this.notificationsService = notificationsService;
    this.translateService = translateService;
    /**
     * Array to track the processes to be deleted
     */
    this.processesToDelete = [];
    /**
     * Behavior subject to track whether the delete is processing
     * @protected
     */
    this.isProcessingBehaviorSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(false);
  }
  /**
   * Add or remove a process id to/from the list
   * If the id is already present it will be removed, otherwise it will be added.
   *
   * @param processId - The process id to add or remove
   */
  toggleDelete(processId) {
    if (this.isToBeDeleted(processId)) {
      this.processesToDelete.splice(this.processesToDelete.indexOf(processId), 1);
    } else {
      this.processesToDelete.push(processId);
    }
  }
  /**
   * Checks if the provided process id is present in the to be deleted list
   * @param processId
   */
  isToBeDeleted(processId) {
    return this.processesToDelete.includes(processId);
  }
  /**
   * Clear the list of processes to be deleted
   */
  clearAllProcesses() {
    this.processesToDelete.splice(0);
  }
  /**
   * Get the amount of processes selected for deletion
   */
  getAmountOfSelectedProcesses() {
    return this.processesToDelete.length;
  }
  /**
   * Returns a behavior subject to indicate whether the bulk delete is processing
   */
  isProcessing$() {
    return this.isProcessingBehaviorSubject;
  }
  /**
   * Returns whether there currently are values selected for deletion
   */
  hasSelected() {
    return (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_2__.isNotEmpty)(this.processesToDelete);
  }
  /**
   * Delete all selected processes one by one
   * When the deletion for a process fails, an error notification will be shown with the process id,
   * but it will continue deleting the other processes.
   * At the end it will show a notification stating the amount of successful deletes
   * The successfully deleted processes will be removed from the list of selected values, the failed ones will be retained.
   */
  deleteSelectedProcesses() {
    this.isProcessingBehaviorSubject.next(true);
    (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.from)([...this.processesToDelete]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.concatMap)(processId => {
      return this.processDataService.delete(processId).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_1__.getFirstCompletedRemoteData)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(rd => {
        if (rd.hasFailed) {
          this.notificationsService.error(this.translateService.get('process.bulk.delete.error.head'), this.translateService.get('process.bulk.delete.error.body', {
            processId: processId
          }));
        } else {
          this.toggleDelete(processId);
        }
      }));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.filter)(rd => rd.hasSucceeded), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.count)()).subscribe(value => {
      this.notificationsService.success(this.translateService.get('process.bulk.delete.success', {
        count: value
      }));
      this.isProcessingBehaviorSubject.next(false);
    });
  }
  static {
    this.ɵfac = function ProcessBulkDeleteService_Factory(t) {
      return new (t || ProcessBulkDeleteService)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_core_data_processes_process_data_service__WEBPACK_IMPORTED_MODULE_0__.ProcessDataService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_3__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjectable"]({
      token: ProcessBulkDeleteService,
      factory: ProcessBulkDeleteService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 45918:
/*!*********************************************************************!*\
  !*** ./src/app/process-page/overview/process-overview.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProcessOverviewComponent: () => (/* binding */ ProcessOverviewComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var _shared_btn_disabled_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/btn-disabled.directive */ 60456);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/empty.util */ 82777);
/* harmony import */ var _processes_process_status_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../processes/process-status.model */ 31189);
/* harmony import */ var _process_bulk_delete_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./process-bulk-delete.service */ 83543);
/* harmony import */ var _process_overview_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./process-overview.service */ 69762);
/* harmony import */ var _table_process_overview_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./table/process-overview-table.component */ 80130);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 49966);
















const _c0 = a0 => ({
  count: a0
});
function ProcessOverviewComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainer"](0);
  }
}
function ProcessOverviewComponent_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainer"](0);
  }
}
function ProcessOverviewComponent_ng_template_12_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProcessOverviewComponent_ng_template_12_button_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.processBulkDeleteService.clearAllProcesses());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 1, "process.overview.delete.clear"), " ");
  }
}
function ProcessOverviewComponent_ng_template_12_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProcessOverviewComponent_ng_template_12_button_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      const deleteModal_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](15);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.openDeleteModal(deleteModal_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](3, 1, "process.overview.delete", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](4, _c0, ctx_r1.processBulkDeleteService.getAmountOfSelectedProcesses())), " ");
  }
}
function ProcessOverviewComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ProcessOverviewComponent_ng_template_12_button_1_Template, 4, 3, "button", 10)(2, ProcessOverviewComponent_ng_template_12_button_2_Template, 4, 6, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.processBulkDeleteService.hasSelected());
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.processBulkDeleteService.hasSelected());
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](6, 3, "process.overview.new"));
  }
}
function ProcessOverviewComponent_ng_template_14_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](2, 1, "process.overview.delete.body", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](4, _c0, ctx_r1.processBulkDeleteService.getAmountOfSelectedProcesses())));
  }
}
function ProcessOverviewComponent_ng_template_14_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](4, 1, "process.overview.delete.processing", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](4, _c0, ctx_r1.processBulkDeleteService.getAmountOfSelectedProcesses())), "");
  }
}
function ProcessOverviewComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "div", 18)(2, "div")(3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProcessOverviewComponent_ng_template_14_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.closeModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, ProcessOverviewComponent_ng_template_14_div_10_Template, 3, 6, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](11, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, ProcessOverviewComponent_ng_template_14_div_12_Template, 5, 6, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](13, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 24)(15, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](16, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProcessOverviewComponent_ng_template_14_Template_button_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.closeModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](20, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProcessOverviewComponent_ng_template_14_Template_button_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.deleteSelected());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 7, "process.overview.delete.header"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](11, 9, ctx_r1.processBulkDeleteService.isProcessing$()) !== true);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](13, 11, ctx_r1.processBulkDeleteService.isProcessing$()));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dsBtnDisabled", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](16, 13, ctx_r1.processBulkDeleteService.isProcessing$()));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](18, 15, "process.detail.delete.cancel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dsBtnDisabled", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](20, 17, ctx_r1.processBulkDeleteService.isProcessing$()));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](22, 19, "process.overview.delete", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](22, _c0, ctx_r1.processBulkDeleteService.getAmountOfSelectedProcesses())), " ");
  }
}
/**
 * Component displaying a list of all processes in a paginated table
 */
class ProcessOverviewComponent {
  constructor(processOverviewService, modalService, processBulkDeleteService) {
    this.processOverviewService = processOverviewService;
    this.modalService = modalService;
    this.processBulkDeleteService = processBulkDeleteService;
    // Enums are redeclared here so they can be used in the template
    this.ProcessStatus = _processes_process_status_model__WEBPACK_IMPORTED_MODULE_2__.ProcessStatus;
    this.ProcessSortField = _process_overview_service__WEBPACK_IMPORTED_MODULE_4__.ProcessSortField;
  }
  ngOnInit() {
    this.processBulkDeleteService.clearAllProcesses();
  }
  ngOnDestroy() {
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_1__.hasValue)(this.isProcessingSub)) {
      this.isProcessingSub.unsubscribe();
    }
  }
  /**
   * Open a given modal.
   * @param content   - the modal content.
   */
  openDeleteModal(content) {
    this.modalRef = this.modalService.open(content);
  }
  /**
   * Close the modal.
   */
  closeModal() {
    this.modalRef.close();
  }
  /**
   * Delete the previously selected processes using the processBulkDeleteService
   * After the deletion has started, subscribe to the isProcessing$ and when it is set
   * to false after the processing is done, close the modal and reinitialise the processes
   */
  deleteSelected() {
    this.processBulkDeleteService.deleteSelectedProcesses();
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_1__.hasValue)(this.isProcessingSub)) {
      this.isProcessingSub.unsubscribe();
    }
    this.isProcessingSub = this.processBulkDeleteService.isProcessing$().subscribe(isProcessing => {
      if (!isProcessing) {
        this.closeModal();
      }
    });
  }
  static {
    this.ɵfac = function ProcessOverviewComponent_Factory(t) {
      return new (t || ProcessOverviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_process_overview_service__WEBPACK_IMPORTED_MODULE_4__.ProcessOverviewService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_process_bulk_delete_service__WEBPACK_IMPORTED_MODULE_3__.ProcessBulkDeleteService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: ProcessOverviewComponent,
      selectors: [["ds-process-overview"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵStandaloneFeature"]],
      decls: 16,
      vars: 19,
      consts: [["buttons", ""], ["deleteModal", ""], [1, "container"], [1, "d-flex"], [1, "flex-grow-1"], [4, "ngTemplateOutlet"], [1, "sections"], [3, "processStatus", "useAutoRefreshingSearchBy", "getInfoValueMethod"], [3, "processStatus", "sortField", "useAutoRefreshingSearchBy", "getInfoValueMethod"], [1, "d-flex", "justify-content-end", "mb-2"], ["class", "btn btn-primary mr-2", 3, "click", 4, "ngIf"], ["class", "btn btn-danger mr-2", 3, "click", 4, "ngIf"], ["routerLink", "/processes/new", 1, "btn", "btn-success"], [1, "fas", "fa-plus", "pr-2"], [1, "btn", "btn-primary", "mr-2", 3, "click"], [1, "fas", "fa-undo", "pr-2"], [1, "btn", "btn-danger", "mr-2", 3, "click"], [1, "fas", "fa-trash", "pr-2"], [1, "modal-header"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [4, "ngIf"], ["class", "alert alert-info", 4, "ngIf"], [1, "mt-4"], [1, "btn", "btn-primary", "mr-2", 3, "click", "dsBtnDisabled"], ["id", "delete-confirm", 1, "btn", "btn-danger", 3, "click", "dsBtnDisabled"], [1, "alert", "alert-info"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm", "spinner-button"]],
      template: function ProcessOverviewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "h1", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, ProcessOverviewComponent_ng_container_5_Template, 1, 0, "ng-container", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "ds-process-overview-table", 7)(8, "ds-process-overview-table", 7)(9, "ds-process-overview-table", 8)(10, "ds-process-overview-table", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, ProcessOverviewComponent_ng_container_11_Template, 1, 0, "ng-container", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, ProcessOverviewComponent_ng_template_12_Template, 7, 5, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"])(14, ProcessOverviewComponent_ng_template_14_Template, 23, 24, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        }
        if (rf & 2) {
          const buttons_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 17, "process.overview.title"));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngTemplateOutlet", buttons_r6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("processStatus", ctx.ProcessStatus.RUNNING)("useAutoRefreshingSearchBy", true)("getInfoValueMethod", ctx.processOverviewService.timeStarted);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("processStatus", ctx.ProcessStatus.SCHEDULED)("useAutoRefreshingSearchBy", true)("getInfoValueMethod", ctx.processOverviewService.timeCreated);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("processStatus", ctx.ProcessStatus.COMPLETED)("sortField", ctx.ProcessSortField.endTime)("useAutoRefreshingSearchBy", true)("getInfoValueMethod", ctx.processOverviewService.timeCompleted);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("processStatus", ctx.ProcessStatus.FAILED)("sortField", ctx.ProcessSortField.endTime)("useAutoRefreshingSearchBy", true)("getInfoValueMethod", ctx.processOverviewService.timeCompleted);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngTemplateOutlet", buttons_r6);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgTemplateOutlet, _table_process_overview_table_component__WEBPACK_IMPORTED_MODULE_5__.ProcessOverviewTableComponent, _shared_btn_disabled_directive__WEBPACK_IMPORTED_MODULE_0__.BtnDisabledDirective],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 69762:
/*!*******************************************************************!*\
  !*** ./src/app/process-page/overview/process-overview.service.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProcessOverviewService: () => (/* binding */ ProcessOverviewService),
/* harmony export */   ProcessSortField: () => (/* binding */ ProcessSortField)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _core_cache_models_request_param_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/cache/models/request-param.model */ 53954);
/* harmony import */ var _core_cache_models_sort_options_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/cache/models/sort-options.model */ 6238);
/* harmony import */ var _core_data_find_list_options_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/data/find-list-options.model */ 41023);
/* harmony import */ var _core_data_processes_process_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/data/processes/process-data.service */ 87414);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/empty.util */ 82777);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 90310);








/**
 * The sortable fields for processes
 * See [the endpoint documentation]{@link https://github.com/DSpace/RestContract/blob/main/processes-endpoint.md#search-processes-by-property}
 * for details.
 */
var ProcessSortField;
(function (ProcessSortField) {
  ProcessSortField["creationTime"] = "creationTime";
  ProcessSortField["startTime"] = "startTime";
  ProcessSortField["endTime"] = "endTime";
})(ProcessSortField || (ProcessSortField = {}));
/**
 * Service to manage the processes displayed in the
 * {@Link ProcessOverviewComponent} and the {@Link ProcessOverviewTableComponent}
 */
class ProcessOverviewService {
  constructor(processDataService) {
    this.processDataService = processDataService;
    /**
     * Date format to use for start and end time of processes
     */
    this.dateFormat = 'yyyy-MM-dd HH:mm:ss';
    this.datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe('en-US');
    this.timeCreated = process => this.datePipe.transform(process.creationTime, this.dateFormat, 'UTC');
    this.timeCompleted = process => this.datePipe.transform(process.endTime, this.dateFormat, 'UTC');
    this.timeStarted = process => this.datePipe.transform(process.startTime, this.dateFormat, 'UTC');
  }
  /**
   * Retrieve processes by their status
   * @param processStatus              The status for which to retrieve processes
   * @param findListOptions            The FindListOptions object
   * @param autoRefreshingIntervalInMs Optional: The interval by which to automatically refresh the retrieved processes.
   * Leave empty or set to null to only retrieve the processes once.
   */
  getProcessesByProcessStatus(processStatus, findListOptions, autoRefreshingIntervalInMs = null) {
    const requestParam = new _core_cache_models_request_param_model__WEBPACK_IMPORTED_MODULE_0__.RequestParam('processStatus', processStatus);
    const options = Object.assign(new _core_data_find_list_options_model__WEBPACK_IMPORTED_MODULE_2__.FindListOptions(), {
      searchParams: [requestParam],
      elementsPerPage: 5
    }, findListOptions);
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_4__.hasValue)(autoRefreshingIntervalInMs) && autoRefreshingIntervalInMs > 0) {
      this.processDataService.stopAutoRefreshing(processStatus);
      return this.processDataService.autoRefreshingSearchBy(processStatus, 'byProperty', options, autoRefreshingIntervalInMs);
    } else {
      return this.processDataService.searchBy('byProperty', options);
    }
  }
  /**
   * Stop auto-refreshing the process with the given status
   * @param processStatus the processStatus of the request to stop automatically refreshing
   */
  stopAutoRefreshing(processStatus) {
    this.processDataService.stopAutoRefreshing(processStatus);
  }
  /**
   * Map the provided paginationOptions to FindListOptions
   * @param paginationOptions the PaginationComponentOptions to map
   * @param sortField the field on which the processes are sorted
   */
  getFindListOptions(paginationOptions, sortField) {
    const sortOptions = new _core_cache_models_sort_options_model__WEBPACK_IMPORTED_MODULE_1__.SortOptions(sortField, _core_cache_models_sort_options_model__WEBPACK_IMPORTED_MODULE_1__.SortDirection.DESC);
    return Object.assign(new _core_data_find_list_options_model__WEBPACK_IMPORTED_MODULE_2__.FindListOptions(), {
      currentPage: paginationOptions.currentPage,
      elementsPerPage: paginationOptions.pageSize,
      sort: sortOptions
    });
  }
  static {
    this.ɵfac = function ProcessOverviewService_Factory(t) {
      return new (t || ProcessOverviewService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_core_data_processes_process_data_service__WEBPACK_IMPORTED_MODULE_3__.ProcessDataService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
      token: ProcessOverviewService,
      factory: ProcessOverviewService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 80130:
/*!*********************************************************************************!*\
  !*** ./src/app/process-page/overview/table/process-overview-table.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProcessOverviewTableComponent: () => (/* binding */ ProcessOverviewTableComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 49966);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 83485);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs */ 70141);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs */ 74671);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 78374);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs/operators */ 84975);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! rxjs/operators */ 50047);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! rxjs/operators */ 85687);
/* harmony import */ var src_app_core_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/pagination/pagination.service */ 76896);
/* harmony import */ var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/auth/auth.service */ 67116);
/* harmony import */ var _core_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/breadcrumbs/dso-name.service */ 96526);
/* harmony import */ var _core_data_paginated_list_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/data/paginated-list.model */ 96820);
/* harmony import */ var _core_eperson_eperson_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/eperson/eperson-data.service */ 74449);
/* harmony import */ var _core_services_route_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/services/route.service */ 27297);
/* harmony import */ var _core_shared_authorized_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/shared/authorized.operators */ 308);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/shared/operators */ 55757);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/empty.util */ 82777);
/* harmony import */ var _shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/loading/themed-loading.component */ 82394);
/* harmony import */ var _shared_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/pagination/pagination.component */ 40590);
/* harmony import */ var _shared_pagination_pagination_component_options_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/pagination/pagination-component-options.model */ 23401);
/* harmony import */ var _shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/utils/var.directive */ 18226);
/* harmony import */ var _processes_process_status_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../processes/process-status.model */ 31189);
/* harmony import */ var _process_bulk_delete_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../process-bulk-delete.service */ 83543);
/* harmony import */ var _process_overview_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../process-overview.service */ 69762);


































const _c0 = a0 => ["/processes/", a0];
function ProcessOverviewTableComponent_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const processesRD_r3 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", processesRD_r3 == null ? null : processesRD_r3.payload == null ? null : processesRD_r3.payload.totalElements, " ");
  }
}
function ProcessOverviewTableComponent_ng_container_11_ds_loading_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "ds-loading");
  }
}
function ProcessOverviewTableComponent_ng_container_11_ds_pagination_2_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "tr")(1, "td")(2, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](4, "td")(5, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](11, "td")(12, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ProcessOverviewTableComponent_ng_container_11_ds_pagination_2_tr_22_Template_button_click_12_listener() {
      const tableEntry_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r5.processBulkDeleteService.toggleDelete(tableEntry_r5.process.processId));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](14, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const tableEntry_r5 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵclassMap"](ctx_r5.getRowClass(tableEntry_r5.process));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction1"](11, _c0, tableEntry_r5.process.processId));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](tableEntry_r5.process.processId);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction1"](13, _c0, tableEntry_r5.process.processId));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](tableEntry_r5.process.scriptName);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](tableEntry_r5.user);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](tableEntry_r5.info);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](13, 9, "process.overview.delete-process"));
  }
}
function ProcessOverviewTableComponent_ng_container_11_ds_pagination_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "ds-pagination", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "div", 13)(3, "table", 14)(4, "thead")(5, "tr")(6, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](9, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](12, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](15, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](18, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](21, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](22, ProcessOverviewTableComponent_ng_container_11_ds_pagination_2_tr_22_Template, 15, 15, "tr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const processesRD_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().ngVar;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("paginationOptions", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](1, 10, ctx_r5.paginationOptions$))("collectionSize", processesRD_r7 == null ? null : processesRD_r7.payload == null ? null : processesRD_r7.payload.totalElements)("retainScrollPosition", true)("hideGear", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](8, 12, "process.overview.table.id"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](11, 14, "process.overview.table.name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](14, 16, "process.overview.table.user"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](17, 18, "process.overview.table." + ctx_r5.processStatus.toLowerCase() + ".info"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](20, 20, "process.overview.table.actions"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", processesRD_r7 == null ? null : processesRD_r7.payload == null ? null : processesRD_r7.payload.page);
  }
}
function ProcessOverviewTableComponent_ng_container_11_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div")(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](3, 1, "process.overview.table.empty"));
  }
}
function ProcessOverviewTableComponent_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, ProcessOverviewTableComponent_ng_container_11_ds_loading_1_Template, 1, 0, "ds-loading", 10)(2, ProcessOverviewTableComponent_ng_container_11_ds_pagination_2_Template, 23, 22, "ds-pagination", 11)(3, ProcessOverviewTableComponent_ng_container_11_div_3_Template, 4, 3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const processesRD_r7 = ctx.ngVar;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", !processesRD_r7 || processesRD_r7.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", (processesRD_r7 == null ? null : processesRD_r7.payload == null ? null : processesRD_r7.payload.totalElements) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", (processesRD_r7 == null ? null : processesRD_r7.payload == null ? null : processesRD_r7.payload.totalElements) === 0);
  }
}
const NEW_PROCESS_PARAM = 'new_process_id';
class ProcessOverviewTableComponent {
  constructor(processOverviewService, processBulkDeleteService, ePersonDataService, dsoNameService, paginationService, routeService, router, auth, translateService, platformId) {
    this.processOverviewService = processOverviewService;
    this.processBulkDeleteService = processBulkDeleteService;
    this.ePersonDataService = ePersonDataService;
    this.dsoNameService = dsoNameService;
    this.paginationService = paginationService;
    this.routeService = routeService;
    this.router = router;
    this.auth = auth;
    this.translateService = translateService;
    this.platformId = platformId;
    /**
     * The field on which the processes in this table are sorted
     * {@link ProcessSortField.creationTime} by default as every single process has a creation time,
     * but not every process has a start or end time
     */
    this.sortField = _process_overview_service__WEBPACK_IMPORTED_MODULE_15__.ProcessSortField.creationTime;
    /**
     * Whether to use auto refresh for the processes shown in this table.
     */
    this.useAutoRefreshingSearchBy = false;
    /**
     * The interval by which to refresh if autoRefreshing is enabled
     */
    this.autoRefreshInterval = 5000;
    /**
     * Whether the table is collapsed
     */
    this.isCollapsed = false;
    /**
     * List of subscriptions
     */
    this.subs = [];
  }
  ngOnInit() {
    // Only auto refresh on browsers
    if (!(0,_angular_common__WEBPACK_IMPORTED_MODULE_17__.isPlatformBrowser)(this.platformId)) {
      this.useAutoRefreshingSearchBy = false;
    }
    this.routeService.getQueryParameterValue(NEW_PROCESS_PARAM).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.take)(1)).subscribe(id => {
      this.newProcessId = id;
    });
    // Creates an ID from the first 2 characters of the process status.
    // Should two process status values ever start with the same substring,
    // increase the number of characters until the ids are distinct.
    this.paginationId = this.processStatus.toLowerCase().substring(0, 2);
    const defaultPaginationOptions = Object.assign(new _shared_pagination_pagination_component_options_model__WEBPACK_IMPORTED_MODULE_11__.PaginationComponentOptions(), {
      id: this.paginationId,
      pageSize: 5
    });
    // Get the current pagination from the route
    this.paginationOptions$ = this.paginationService.getCurrentPagination(this.paginationId, defaultPaginationOptions);
    this.processesRD$ = new rxjs__WEBPACK_IMPORTED_MODULE_19__.BehaviorSubject(undefined);
    // Once we have the pagination, retrieve the processes matching the process type and the pagination
    //
    // Reasoning why this monstrosity is the way it is:
    // To avoid having to recalculate the names of the submitters every time the page reloads, these have to be
    // retrieved beforehand and stored with the process. This is where the ProcessOverviewTableEntry interface comes in.
    // By storing the process together with the submitters name and the additional information to be shown in the table,
    // the template can be as dumb as possible. As the retrieval of the name also is done through an observable, this
    // complicates the construction of the data a bit though.
    // The reason why we store these as RemoteData<PaginatedList<ProcessOverviewTableEntry>> and not simply as
    // ProcessOverviewTableEntry[] is as follows:
    // When storing the PaginatedList<Process> and ProcessOverviewTableEntry[] separately, there is a small delay
    // between the update of the paginatedList and the entryArray. This results in the processOverviewPage showing
    // no processes for a split second every time the processes are updated which in turn causes the different
    // sections of the page to jump around. By combining these and causing the page to update only once this is avoided.
    this.subs.push(this.paginationOptions$.pipe(
    // Map the paginationOptions to findListOptions
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.map)(paginationOptions => this.processOverviewService.getFindListOptions(paginationOptions, this.sortField)),
    // Use the findListOptions to retrieve the relevant processes every interval
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.switchMap)(findListOptions => this.processOverviewService.getProcessesByProcessStatus(this.processStatus, findListOptions, this.useAutoRefreshingSearchBy ? this.autoRefreshInterval : null)),
    // Redirect the user when he is logged out
    (0,_core_shared_authorized_operators__WEBPACK_IMPORTED_MODULE_6__.redirectOn4xx)(this.router, this.auth), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_7__.getAllCompletedRemoteData)(),
    // Map RemoteData<PaginatedList<Process>> to RemoteData<PaginatedList<ProcessOverviewTableEntry>>
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.switchMap)(processesRD => {
      // Create observable emitting all processes one by one
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_22__.from)(processesRD.payload.page).pipe(
      // Map every Process to ProcessOverviewTableEntry
      (0,rxjs__WEBPACK_IMPORTED_MODULE_23__.mergeMap)(process => {
        return this.getEPersonName(process.userId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.map)(name => {
          return {
            process: process,
            user: name,
            info: this.getInfoValueMethod(process)
          };
        }));
      }),
      // Collect processOverviewTableEntries into array
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_24__.toArray)(),
      // Create RemoteData<PaginatedList<ProcessOverviewTableEntry>>
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.map)(entries => {
        const entriesPL = Object.assign(new _core_data_paginated_list_model__WEBPACK_IMPORTED_MODULE_3__.PaginatedList(), processesRD.payload, {
          page: entries
        });
        const entriesRD = Object.assign({}, processesRD, {
          payload: entriesPL
        });
        return entriesRD;
      }));
    })).subscribe(next => {
      this.processesRD$.next(next);
    }));
    // Collapse this section when the number of processes is zero the first time processes are retrieved
    this.subs.push(this.processesRD$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_25__.filter)(processListRd => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_8__.hasValue)(processListRd)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.take)(1)).subscribe(processesRD => {
      if (!(processesRD.payload.totalElements > 0)) {
        this.isCollapsed = true;
      }
    }));
  }
  /**
   * Get the name of an EPerson by ID
   * @param id  ID of the EPerson
   */
  getEPersonName(id) {
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_8__.isNotEmpty)(id)) {
      return this.ePersonDataService.findById(id).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_7__.getFirstCompletedRemoteData)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.switchMap)(rd => {
        if (rd.hasSucceeded) {
          return [this.dsoNameService.getName(rd.payload)];
        } else {
          return this.translateService.get('process.overview.unknown.user');
        }
      }));
    } else {
      return this.translateService.get('process.overview.unknown.user');
    }
  }
  /**
   * Get the css class for a row depending on the state of the process
   * @param process
   */
  getRowClass(process) {
    if (this.processBulkDeleteService.isToBeDeleted(process.processId)) {
      return 'table-danger';
    } else if (this.newProcessId === process.processId) {
      return 'table-info';
    } else {
      return '';
    }
  }
  ngOnDestroy() {
    this.subs.filter(sub => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_8__.hasValue)(sub)).forEach(sub => sub.unsubscribe());
    this.processOverviewService.stopAutoRefreshing(this.processStatus);
  }
  static {
    this.ɵfac = function ProcessOverviewTableComponent_Factory(t) {
      return new (t || ProcessOverviewTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_process_overview_service__WEBPACK_IMPORTED_MODULE_15__.ProcessOverviewService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_process_bulk_delete_service__WEBPACK_IMPORTED_MODULE_14__.ProcessBulkDeleteService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_core_eperson_eperson_data_service__WEBPACK_IMPORTED_MODULE_4__.EPersonDataService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_core_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_2__.DSONameService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_core_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_0__.PaginationService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_core_services_route_service__WEBPACK_IMPORTED_MODULE_5__.RouteService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_26__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_16__.PLATFORM_ID));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineComponent"]({
      type: ProcessOverviewTableComponent,
      selectors: [["ds-process-overview-table"]],
      inputs: {
        processStatus: "processStatus",
        sortField: "sortField",
        useAutoRefreshingSearchBy: "useAutoRefreshingSearchBy",
        autoRefreshInterval: "autoRefreshInterval",
        getInfoValueMethod: "getInfoValueMethod"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵStandaloneFeature"]],
      decls: 13,
      vars: 12,
      consts: [["collapse", "ngbCollapse"], [1, "mb-4"], ["role", "button", 1, "d-flex", 3, "click"], [1, "flex-grow-1"], ["class", "badge badge-pill badge-primary badge-nb-processes", 4, "ngIf"], [1, "ml-2", "toggle-icon"], [1, "fas", 3, "ngClass"], ["ngbCollapse", "", 3, "ngbCollapse"], [4, "ngVar"], [1, "badge", "badge-pill", "badge-primary", "badge-nb-processes"], [4, "ngIf"], [3, "paginationOptions", "collectionSize", "retainScrollPosition", "hideGear", 4, "ngIf"], [3, "paginationOptions", "collectionSize", "retainScrollPosition", "hideGear"], [1, "table-responsive", "mt-1"], [1, "table", "table-striped", "table-hover"], ["scope", "col", 1, "id-header"], ["scope", "col", 1, "name-header"], ["scope", "col", 1, "user-header"], ["scope", "col", 1, "info-header"], ["scope", "col", 1, "actions-header"], [3, "class", 4, "ngFor", "ngForOf"], [3, "routerLink"], [1, "btn", "btn-outline-danger", 3, "click"], [1, "fas", "fa-trash"]],
      template: function ProcessOverviewTableComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 1)(1, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ProcessOverviewTableComponent_Template_div_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r1);
            const collapse_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵreference"](10);
            return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](collapse_r2.toggle());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "h2", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](4, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](5, ProcessOverviewTableComponent_span_5_Template, 2, 1, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](6, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](7, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](8, "i", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](9, "div", 7, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](11, ProcessOverviewTableComponent_ng_container_11_Template, 4, 3, "ng-container", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](12, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          const collapse_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵreference"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵattribute"]("aria-expanded", !collapse_r2.collapsed);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](4, 6, "process.overview.table." + ctx.processStatus.toLowerCase() + ".title"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](6, 8, ctx.processesRD$));
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngClass", collapse_r2.collapsed ? "fa-angle-right" : "fa-angle-down");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngbCollapse", ctx.isCollapsed);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngVar", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](12, 10, ctx.processesRD$));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.NgClass, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_28__.NgbCollapseModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_28__.NgbCollapse, _angular_common__WEBPACK_IMPORTED_MODULE_17__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__.TranslatePipe, _shared_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_10__.PaginationComponent, _angular_router__WEBPACK_IMPORTED_MODULE_26__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_9__.ThemedLoadingComponent, _shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_12__.VarDirective],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n.toggle-icon[_ngcontent-%COMP%] {\n  font-size: calc(var(--bs-small-font-size) * 0.6);\n}\n\n.badge-nb-processes[_ngcontent-%COMP%] {\n  font-size: var(--ds-process-overview-table-nb-processes-badge-size);\n  vertical-align: middle;\n}\n\n.id-header[_ngcontent-%COMP%] {\n  width: var(--ds-process-overview-table-id-column-width);\n}\n\n.name-header[_ngcontent-%COMP%] {\n  width: var(--ds-process-overview-table-name-column-width);\n}\n\n.user-header[_ngcontent-%COMP%] {\n  width: var(--ds-process-overview-table-user-column-width);\n}\n\n.info-header[_ngcontent-%COMP%] {\n  width: var(--ds-process-overview-table-info-column-width);\n}\n\n.actions-header[_ngcontent-%COMP%] {\n  width: var(--ds-process-overview-table-actions-column-width);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2Nlc3Mtb3ZlcnZpZXctdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQTtFQUNFLGdEQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxtRUFBQTtFQUNBLHNCQUFBO0FBRUY7O0FBQUE7RUFDRSx1REFBQTtBQUdGOztBQURBO0VBQ0UseURBQUE7QUFJRjs7QUFGQTtFQUNFLHlEQUFBO0FBS0Y7O0FBSEE7RUFDRSx5REFBQTtBQU1GOztBQUpBO0VBQ0UsNERBQUE7QUFPRiIsImZpbGUiOiJwcm9jZXNzLW92ZXJ2aWV3LXRhYmxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi9cbi50b2dnbGUtaWNvbiB7XG4gIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1icy1zbWFsbC1mb250LXNpemUpICogMC42KTtcbn1cbi5iYWRnZS1uYi1wcm9jZXNzZXMge1xuICBmb250LXNpemU6IHZhcigtLWRzLXByb2Nlc3Mtb3ZlcnZpZXctdGFibGUtbmItcHJvY2Vzc2VzLWJhZGdlLXNpemUpO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLmlkLWhlYWRlciB7XG4gIHdpZHRoOiB2YXIoLS1kcy1wcm9jZXNzLW92ZXJ2aWV3LXRhYmxlLWlkLWNvbHVtbi13aWR0aCk7XG59XG4ubmFtZS1oZWFkZXIge1xuICB3aWR0aDogdmFyKC0tZHMtcHJvY2Vzcy1vdmVydmlldy10YWJsZS1uYW1lLWNvbHVtbi13aWR0aCk7XG59XG4udXNlci1oZWFkZXIge1xuICB3aWR0aDogdmFyKC0tZHMtcHJvY2Vzcy1vdmVydmlldy10YWJsZS11c2VyLWNvbHVtbi13aWR0aCk7XG59XG4uaW5mby1oZWFkZXIge1xuICB3aWR0aDogdmFyKC0tZHMtcHJvY2Vzcy1vdmVydmlldy10YWJsZS1pbmZvLWNvbHVtbi13aWR0aCk7XG59XG4uYWN0aW9ucy1oZWFkZXIge1xuICB3aWR0aDogdmFyKC0tZHMtcHJvY2Vzcy1vdmVydmlldy10YWJsZS1hY3Rpb25zLWNvbHVtbi13aWR0aCk7XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHJvY2Vzcy1wYWdlL292ZXJ2aWV3L3RhYmxlL3Byb2Nlc3Mtb3ZlcnZpZXctdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQTtFQUNFLGdEQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxtRUFBQTtFQUNBLHNCQUFBO0FBRUY7O0FBQUE7RUFDRSx1REFBQTtBQUdGOztBQURBO0VBQ0UseURBQUE7QUFJRjs7QUFGQTtFQUNFLHlEQUFBO0FBS0Y7O0FBSEE7RUFDRSx5REFBQTtBQU1GOztBQUpBO0VBQ0UsNERBQUE7QUFPRjtBQUNBLHdsREFBd2xEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi9cbi50b2dnbGUtaWNvbiB7XG4gIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1icy1zbWFsbC1mb250LXNpemUpICogMC42KTtcbn1cbi5iYWRnZS1uYi1wcm9jZXNzZXMge1xuICBmb250LXNpemU6IHZhcigtLWRzLXByb2Nlc3Mtb3ZlcnZpZXctdGFibGUtbmItcHJvY2Vzc2VzLWJhZGdlLXNpemUpO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLmlkLWhlYWRlciB7XG4gIHdpZHRoOiB2YXIoLS1kcy1wcm9jZXNzLW92ZXJ2aWV3LXRhYmxlLWlkLWNvbHVtbi13aWR0aCk7XG59XG4ubmFtZS1oZWFkZXIge1xuICB3aWR0aDogdmFyKC0tZHMtcHJvY2Vzcy1vdmVydmlldy10YWJsZS1uYW1lLWNvbHVtbi13aWR0aCk7XG59XG4udXNlci1oZWFkZXIge1xuICB3aWR0aDogdmFyKC0tZHMtcHJvY2Vzcy1vdmVydmlldy10YWJsZS11c2VyLWNvbHVtbi13aWR0aCk7XG59XG4uaW5mby1oZWFkZXIge1xuICB3aWR0aDogdmFyKC0tZHMtcHJvY2Vzcy1vdmVydmlldy10YWJsZS1pbmZvLWNvbHVtbi13aWR0aCk7XG59XG4uYWN0aW9ucy1oZWFkZXIge1xuICB3aWR0aDogdmFyKC0tZHMtcHJvY2Vzcy1vdmVydmlldy10YWJsZS1hY3Rpb25zLWNvbHVtbi13aWR0aCk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 48239:
/*!*************************************************************!*\
  !*** ./src/app/process-page/process-breadcrumb.resolver.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   processBreadcrumbResolver: () => (/* binding */ processBreadcrumbResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var _core_data_processes_process_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/data/processes/process-data.service */ 87414);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/shared/operators */ 55757);
/* harmony import */ var _shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/utils/follow-link-config.model */ 67600);
/* harmony import */ var _process_breadcrumbs_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./process-breadcrumbs.service */ 16547);






/**
 * Method for resolving a process based on the parameters in the current route
 * @param {ActivatedRouteSnapshot} route The current ActivatedRouteSnapshot
 * @param {RouterStateSnapshot} state The current RouterStateSnapshot
 * @param breadcrumbService
 * @param processService
 * @returns Observable<<RemoteData<Process>> Emits the found process based on the parameters in the current route,
 * or an error if something went wrong
 */
const processBreadcrumbResolver = (route, state, breadcrumbService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_process_breadcrumbs_service__WEBPACK_IMPORTED_MODULE_3__.ProcessBreadcrumbsService), processService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_core_data_processes_process_data_service__WEBPACK_IMPORTED_MODULE_0__.ProcessDataService)) => {
  const id = route.params.id;
  return processService.findById(route.params.id, true, false, (0,_shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_2__.followLink)('script')).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_1__.getFirstCompletedRemoteData)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(object => {
    const fullPath = state.url;
    const url = fullPath.substring(0, fullPath.indexOf(id)).concat(id);
    return {
      provider: breadcrumbService,
      key: object.payload,
      url: url
    };
  }));
};

/***/ }),

/***/ 16547:
/*!*************************************************************!*\
  !*** ./src/app/process-page/process-breadcrumbs.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProcessBreadcrumbsService: () => (/* binding */ ProcessBreadcrumbsService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 17796);
/* harmony import */ var _breadcrumbs_breadcrumb_breadcrumb_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../breadcrumbs/breadcrumb/breadcrumb.model */ 90839);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/empty.util */ 82777);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 90310);




/**
 * Service to calculate process breadcrumbs for a single part of the route
 */
class ProcessBreadcrumbsService {
  /**
   * Method to calculate the breadcrumbs
   * @param key The key used to resolve the breadcrumb
   * @param url The url to use as a link for this breadcrumb
   */
  getBreadcrumbs(key, url) {
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_1__.hasValue)(key)) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)([new _breadcrumbs_breadcrumb_breadcrumb_model__WEBPACK_IMPORTED_MODULE_0__.Breadcrumb(key.processId + ' - ' + key.scriptName, url)]);
    } else {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)([]);
    }
  }
  static {
    this.ɵfac = function ProcessBreadcrumbsService_Factory(t) {
      return new (t || ProcessBreadcrumbsService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: ProcessBreadcrumbsService,
      factory: ProcessBreadcrumbsService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 54952:
/*!*****************************************************!*\
  !*** ./src/app/process-page/process-page-routes.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ROUTES: () => (/* binding */ ROUTES)
/* harmony export */ });
/* harmony import */ var _core_auth_authenticated_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/auth/authenticated.guard */ 49347);
/* harmony import */ var _core_breadcrumbs_i18n_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/breadcrumbs/i18n-breadcrumb.resolver */ 72059);
/* harmony import */ var _detail_process_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detail/process-detail.component */ 57794);
/* harmony import */ var _new_new_process_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new/new-process.component */ 90474);
/* harmony import */ var _overview_process_overview_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./overview/process-overview.component */ 45918);
/* harmony import */ var _process_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./process-breadcrumb.resolver */ 48239);
/* harmony import */ var _process_page_resolver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./process-page.resolver */ 9045);







const ROUTES = [{
  path: '',
  resolve: {
    breadcrumb: _core_breadcrumbs_i18n_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_1__.i18nBreadcrumbResolver
  },
  data: {
    breadcrumbKey: 'process.overview'
  },
  canActivate: [_core_auth_authenticated_guard__WEBPACK_IMPORTED_MODULE_0__.authenticatedGuard],
  children: [{
    path: '',
    component: _overview_process_overview_component__WEBPACK_IMPORTED_MODULE_4__.ProcessOverviewComponent,
    data: {
      title: 'process.overview.title'
    }
  }, {
    path: 'new',
    component: _new_new_process_component__WEBPACK_IMPORTED_MODULE_3__.NewProcessComponent,
    resolve: {
      breadcrumb: _core_breadcrumbs_i18n_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_1__.i18nBreadcrumbResolver
    },
    data: {
      title: 'process.new.title',
      breadcrumbKey: 'process.new'
    }
  }, {
    path: ':id',
    component: _detail_process_detail_component__WEBPACK_IMPORTED_MODULE_2__.ProcessDetailComponent,
    resolve: {
      process: _process_page_resolver__WEBPACK_IMPORTED_MODULE_6__.processPageResolver,
      breadcrumb: _process_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_5__.processBreadcrumbResolver
    }
  }]
}];

/***/ }),

/***/ 9045:
/*!*******************************************************!*\
  !*** ./src/app/process-page/process-page.resolver.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PROCESS_PAGE_FOLLOW_LINKS: () => (/* binding */ PROCESS_PAGE_FOLLOW_LINKS),
/* harmony export */   processPageResolver: () => (/* binding */ processPageResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _core_data_processes_process_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/data/processes/process-data.service */ 87414);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/shared/operators */ 55757);
/* harmony import */ var _shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/utils/follow-link-config.model */ 67600);




const PROCESS_PAGE_FOLLOW_LINKS = [(0,_shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_2__.followLink)('files')];
/**
 * Method for resolving a process based on the parameters in the current route
 * @param {ActivatedRouteSnapshot} route The current ActivatedRouteSnapshot
 * @param {RouterStateSnapshot} state The current RouterStateSnapshot
 * @param {ProcessDataService} processService
 * @returns Observable<<RemoteData<Process>> Emits the found process based on the parameters in the current route,
 * or an error if something went wrong
 */
const processPageResolver = (route, state, processService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_core_data_processes_process_data_service__WEBPACK_IMPORTED_MODULE_0__.ProcessDataService)) => {
  return processService.findById(route.params.id, false, true, ...PROCESS_PAGE_FOLLOW_LINKS).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_1__.getFirstCompletedRemoteData)());
};

/***/ }),

/***/ 6748:
/*!*********************************************************************!*\
  !*** ./src/app/process-page/scripts/script-parameter-type.model.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScriptParameterType: () => (/* binding */ ScriptParameterType)
/* harmony export */ });
/**
 * List of parameter types used for scripts
 */
var ScriptParameterType;
(function (ScriptParameterType) {
  ScriptParameterType["STRING"] = "String";
  ScriptParameterType["DATE"] = "date";
  ScriptParameterType["BOOLEAN"] = "boolean";
  ScriptParameterType["FILE"] = "InputStream";
  ScriptParameterType["OUTPUT"] = "OutputStream";
})(ScriptParameterType || (ScriptParameterType = {}));

/***/ }),

/***/ 91681:
/*!****************************************************************!*\
  !*** ./src/app/process-page/scripts/script-parameter.model.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScriptParameter: () => (/* binding */ ScriptParameter)
/* harmony export */ });
/**
 * A parameter that can be used when running a script
 */
class ScriptParameter {}

/***/ }),

/***/ 30889:
/*!***************************************************************!*\
  !*** ./src/app/shared/utils/file-value-accessor.directive.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FileValueAccessorDirective: () => (/* binding */ FileValueAccessorDirective)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 56106);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 90310);


/**
 * Value accessor directive for inputs of type 'file'
 */
class FileValueAccessorDirective {
  constructor() {
    this.onChange = _ => {};
    this.onTouched = () => {};
  }
  writeValue(value) {}
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  static {
    this.ɵfac = function FileValueAccessorDirective_Factory(t) {
      return new (t || FileValueAccessorDirective)();
    };
  }
  static {
    this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: FileValueAccessorDirective,
      selectors: [["input", "type", "file"]],
      hostBindings: function FileValueAccessorDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FileValueAccessorDirective_change_HostBindingHandler($event) {
            return ctx.onChange($event.target.files);
          })("blur", function FileValueAccessorDirective_blur_HostBindingHandler() {
            return ctx.onTouched();
          });
        }
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
        useExisting: FileValueAccessorDirective,
        multi: true
      }])]
    });
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

/***/ 93120:
/*!************************************************!*\
  !*** ./src/app/shared/utils/has-value.pipe.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HasValuePipe: () => (/* binding */ HasValuePipe)
/* harmony export */ });
/* harmony import */ var _empty_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../empty.util */ 82777);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 90310);


/**
 * Returns true if the passed value is not null or undefined.
 */
class HasValuePipe {
  transform(value) {
    return (0,_empty_util__WEBPACK_IMPORTED_MODULE_0__.hasValue)(value);
  }
  static {
    this.ɵfac = function HasValuePipe_Factory(t) {
      return new (t || HasValuePipe)();
    };
  }
  static {
    this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "dsHasValue",
      type: HasValuePipe,
      pure: true,
      standalone: true
    });
  }
}

/***/ }),

/***/ 10682:
/*!********************************************************!*\
  !*** ./src/app/shared/utils/require-file.validator.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FileValidator: () => (/* binding */ FileValidator)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 56106);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 90310);


/**
 * Validator directive to validate if a file is selected
 */
class FileValidator {
  static validate(c) {
    return c.value == null || c.value.length === 0 ? {
      required: true
    } : null;
  }
  validate(c) {
    return FileValidator.validate(c);
  }
  static {
    this.ɵfac = function FileValidator_Factory(t) {
      return new (t || FileValidator)();
    };
  }
  static {
    this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: FileValidator,
      selectors: [["", "requireFile", ""]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALIDATORS,
        useExisting: FileValidator,
        multi: true
      }])]
    });
  }
}

/***/ }),

/***/ 1702:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/count.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   count: () => (/* binding */ count)
/* harmony export */ });
/* harmony import */ var _reduce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reduce */ 19819);

function count(predicate) {
  return (0,_reduce__WEBPACK_IMPORTED_MODULE_0__.reduce)((total, value, i) => !predicate || predicate(value, i) ? total + 1 : total, 0);
}

/***/ })

}]);
//# sourceMappingURL=src_app_process-page_process-page-routes_ts.js.map