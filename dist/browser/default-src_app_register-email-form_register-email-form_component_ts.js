"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["default-src_app_register-email-form_register-email-form_component_ts"],{

/***/ 44996:
/*!***********************************************************!*\
  !*** ./src/app/core/data/eperson-registration.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EpersonRegistrationService: () => (/* binding */ EpersonRegistrationService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 94485);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 85687);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 47386);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/empty.util */ 82777);
/* harmony import */ var _cache_builders_remote_data_build_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cache/builders/remote-data-build.service */ 76799);
/* harmony import */ var _shared_hal_endpoint_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/hal-endpoint.service */ 4910);
/* harmony import */ var _shared_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/operators */ 55757);
/* harmony import */ var _shared_registration_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/registration.model */ 30104);
/* harmony import */ var _registration_response_parsing_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./registration-response-parsing.service */ 38942);
/* harmony import */ var _request_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./request.models */ 44446);
/* harmony import */ var _request_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./request.service */ 32473);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 90310);














/**
 * Service that will register a new email address and request a token
 */
class EpersonRegistrationService {
  constructor(requestService, rdbService, halService) {
    this.requestService = requestService;
    this.rdbService = rdbService;
    this.halService = halService;
    this.linkPath = 'registrations';
    this.searchByTokenPath = '/search/findByToken?token=';
  }
  /**
   * Retrieves the Registration endpoint
   */
  getRegistrationEndpoint() {
    return this.halService.getEndpoint(this.linkPath);
  }
  /**
   * Retrieves the endpoint to search by registration token
   */
  getTokenSearchEndpoint(token) {
    return this.halService.getEndpoint(this.linkPath).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.filter)(href => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_0__.isNotEmpty)(href)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(href => `${href}${this.searchByTokenPath}${token}`));
  }
  /**
   * Register a new email address
   * @param email
   * @param captchaToken the value of x-recaptcha-token header
   */
  registerEmail(email, captchaToken = null, type) {
    const registration = new _shared_registration_model__WEBPACK_IMPORTED_MODULE_4__.Registration();
    registration.email = email;
    const requestId = this.requestService.generateRequestId();
    const href$ = this.getRegistrationEndpoint();
    const options = Object.create({});
    let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpHeaders();
    if (captchaToken) {
      headers = headers.append('x-recaptcha-token', captchaToken);
    }
    options.headers = headers;
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_0__.hasValue)(type)) {
      options.params = type ? new _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpParams({
        fromString: 'accountRequestType=' + type
      }) : new _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpParams();
    }
    href$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.find)(href => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_0__.hasValue)(href)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(href => {
      const request = new _request_models__WEBPACK_IMPORTED_MODULE_6__.PostRequest(requestId, href, registration, options);
      this.requestService.send(request);
    })).subscribe();
    return this.rdbService.buildFromRequestUUID(requestId).pipe((0,_shared_operators__WEBPACK_IMPORTED_MODULE_3__.getFirstCompletedRemoteData)());
  }
  /**
   * Search a registration based on the provided token
   * @param token
   */
  searchByToken(token) {
    const requestId = this.requestService.generateRequestId();
    const href$ = this.getTokenSearchEndpoint(token).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.find)(href => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_0__.hasValue)(href)));
    href$.subscribe(href => {
      const request = new _request_models__WEBPACK_IMPORTED_MODULE_6__.GetRequest(requestId, href);
      Object.assign(request, {
        getResponseParser() {
          return _registration_response_parsing_service__WEBPACK_IMPORTED_MODULE_5__.RegistrationResponseParsingService;
        }
      });
      this.requestService.send(request, true);
    });
    return this.rdbService.buildSingle(href$).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(rd => {
      if (rd.hasSucceeded && (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_0__.hasValue)(rd.payload)) {
        return Object.assign(rd, {
          payload: Object.assign(rd.payload, {
            token
          })
        });
      } else {
        return rd;
      }
    }));
  }
  static {
    this.ɵfac = function EpersonRegistrationService_Factory(t) {
      return new (t || EpersonRegistrationService)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_request_service__WEBPACK_IMPORTED_MODULE_7__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_cache_builders_remote_data_build_service__WEBPACK_IMPORTED_MODULE_1__.RemoteDataBuildService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_shared_hal_endpoint_service__WEBPACK_IMPORTED_MODULE_2__.HALEndpointService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjectable"]({
      token: EpersonRegistrationService,
      factory: EpersonRegistrationService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 38942:
/*!********************************************************************!*\
  !*** ./src/app/core/data/registration-response-parsing.service.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegistrationResponseParsingService: () => (/* binding */ RegistrationResponseParsingService)
/* harmony export */ });
/* harmony import */ var _cache_response_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cache/response.models */ 13808);
/* harmony import */ var _shared_registration_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/registration.model */ 30104);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);



/**
 * Parsing service responsible for parsing a Registration response
 */
class RegistrationResponseParsingService {
  parse(request, data) {
    const payload = data.payload;
    const registration = Object.assign(new _shared_registration_model__WEBPACK_IMPORTED_MODULE_1__.Registration(), payload);
    return new _cache_response_models__WEBPACK_IMPORTED_MODULE_0__.ParsedResponse(data.statusCode, undefined, registration);
  }
  static {
    this.ɵfac = function RegistrationResponseParsingService_Factory(t) {
      return new (t || RegistrationResponseParsingService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: RegistrationResponseParsingService,
      factory: RegistrationResponseParsingService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 48500:
/*!**********************************************************************!*\
  !*** ./src/app/register-email-form/register-email-form.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegisterEmailFormComponent: () => (/* binding */ RegisterEmailFormComponent),
/* harmony export */   TYPE_REQUEST_FORGOT: () => (/* binding */ TYPE_REQUEST_FORGOT),
/* harmony export */   TYPE_REQUEST_REGISTER: () => (/* binding */ TYPE_REQUEST_REGISTER)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 56106);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 83485);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 27639);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 84975);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 17796);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 78374);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 62997);
/* harmony import */ var _core_data_configuration_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/data/configuration-data.service */ 8917);
/* harmony import */ var _core_data_eperson_registration_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/data/eperson-registration.service */ 44996);
/* harmony import */ var _core_google_recaptcha_google_recaptcha_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/google-recaptcha/google-recaptcha.service */ 34826);
/* harmony import */ var _core_services_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/services/cookie.service */ 93130);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/shared/operators */ 55757);
/* harmony import */ var _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/alert/alert.component */ 16292);
/* harmony import */ var _shared_alert_alert_type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/alert/alert-type */ 47978);
/* harmony import */ var _shared_btn_disabled_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/btn-disabled.directive */ 60456);
/* harmony import */ var _shared_cookies_klaro_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/cookies/klaro.service */ 80566);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/empty.util */ 82777);
/* harmony import */ var _shared_google_recaptcha_google_recaptcha_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/google-recaptcha/google-recaptcha.component */ 40788);
/* harmony import */ var _shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/notifications/notifications.service */ 69472);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/router */ 14354);





























const _c0 = a0 => ({
  domains: a0
});
function RegisterEmailFormComponent_p_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 2, ctx_r0.MESSAGE_PREFIX + ".info.maildomain"), " ", ctx_r0.validMailDomains.join(", "), " ");
  }
}
function RegisterEmailFormComponent_div_17_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 1, ctx_r0.MESSAGE_PREFIX + ".email.error.required"), " ");
  }
}
function RegisterEmailFormComponent_div_17_span_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](2, 1, ctx_r0.MESSAGE_PREFIX + ".email.error.not-valid-domain", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](4, _c0, ctx_r0.validMailDomains.join(", "))), " ");
  }
}
function RegisterEmailFormComponent_div_17_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](3, RegisterEmailFormComponent_div_17_span_2_ng_container_3_Template, 3, 6, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 2, ctx_r0.MESSAGE_PREFIX + ".email.error.not-email-form"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r0.validMailDomains.length > 0);
  }
}
function RegisterEmailFormComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, RegisterEmailFormComponent_div_17_span_1_Template, 3, 3, "span", 14)(2, RegisterEmailFormComponent_div_17_span_2_Template, 4, 4, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r0.email.errors && ctx_r0.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r0.email.errors && (ctx_r0.email.errors.pattern && ctx_r0.typeRequest === ctx_r0.TYPE_REQUEST_REGISTER || ctx_r0.email.errors.email));
  }
}
function RegisterEmailFormComponent_ds_alert_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "ds-alert", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "p", 20)(4, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function RegisterEmailFormComponent_ds_alert_21_Template_a_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r0.klaroService.showSettings());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("type", ctx_r0.AlertTypeEnum.Warning);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 3, ctx_r0.MESSAGE_PREFIX + ".google-recaptcha.must-accept-cookies"), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](6, 5, ctx_r0.MESSAGE_PREFIX + ".google-recaptcha.open-cookie-settings"));
  }
}
function RegisterEmailFormComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 22)(1, "ds-google-recaptcha", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("executeRecaptcha", function RegisterEmailFormComponent_div_22_Template_ds_google_recaptcha_executeRecaptcha_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r0.register($event));
    })("checkboxChecked", function RegisterEmailFormComponent_div_22_Template_ds_google_recaptcha_checkboxChecked_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r0.onCheckboxChecked($event));
    })("showNotification", function RegisterEmailFormComponent_div_22_Template_ds_google_recaptcha_showNotification_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r0.showNotification($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("captchaMode", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 1, ctx_r0.googleRecaptchaService.captchaMode()));
  }
}
function RegisterEmailFormComponent_ng_container_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function RegisterEmailFormComponent_ng_container_24_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r4);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r0.register());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("dsBtnDisabled", ctx_r0.form.invalid || ctx_r0.registrationVerification && !ctx_r0.isRecaptchaCookieAccepted() || ctx_r0.disableUntilChecked);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](3, 2, ctx_r0.MESSAGE_PREFIX + ".submit"), " ");
  }
}
function RegisterEmailFormComponent_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function RegisterEmailFormComponent_ng_template_27_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r0.executeRecaptcha());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("dsBtnDisabled", ctx_r0.form.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 2, ctx_r0.MESSAGE_PREFIX + ".submit"), " ");
  }
}
const TYPE_REQUEST_FORGOT = 'forgot';
const TYPE_REQUEST_REGISTER = 'register';
/**
 * Component responsible to render an email registration form.
 */
class RegisterEmailFormComponent {
  captchaVersion() {
    return this.googleRecaptchaService.captchaVersion();
  }
  captchaMode() {
    return this.googleRecaptchaService.captchaMode();
  }
  constructor(epersonRegistrationService, notificationService, translateService, router, formBuilder, configService, googleRecaptchaService, cookieService, klaroService, changeDetectorRef, notificationsService) {
    this.epersonRegistrationService = epersonRegistrationService;
    this.notificationService = notificationService;
    this.translateService = translateService;
    this.router = router;
    this.formBuilder = formBuilder;
    this.configService = configService;
    this.googleRecaptchaService = googleRecaptchaService;
    this.cookieService = cookieService;
    this.klaroService = klaroService;
    this.changeDetectorRef = changeDetectorRef;
    this.notificationsService = notificationsService;
    /**
     * Type of register request to be done, register new email or forgot password (same endpoint)
     */
    this.typeRequest = null;
    this.AlertTypeEnum = _shared_alert_alert_type__WEBPACK_IMPORTED_MODULE_6__.AlertType;
    /**
     * registration verification configuration
     */
    this.registrationVerification = false;
    /**
     * Return true if the user completed the reCaptcha verification (checkbox mode)
     */
    this.checkboxCheckedSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_13__.BehaviorSubject(false);
    this.disableUntilChecked = true;
    this.TYPE_REQUEST_REGISTER = TYPE_REQUEST_REGISTER;
    this.subscriptions = [];
  }
  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
  ngOnInit() {
    const validators = [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.email,
    // Regex pattern borrowed from HTML5 specs for a valid email address:
    // https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address
    _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.pattern('^[a-zA-Z0-9.!#$%&\'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$')];
    this.form = this.formBuilder.group({
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.UntypedFormControl('', {
        validators: validators
      })
    });
    this.validMailDomains = [];
    if (this.typeRequest === TYPE_REQUEST_REGISTER) {
      this.subscriptions.push(this.configService.findByPropertyName('authentication-password.domain.valid').pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_4__.getAllSucceededRemoteDataPayload)()).subscribe(remoteData => {
        this.validMailDomains = remoteData.values;
        for (const remoteValue of remoteData.values) {
          if (this.validMailDomains.length !== 0) {
            this.form.get('email').setValidators([...validators, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.pattern(this.validMailDomains.map(domain => '(^.*' + domain.replace(new RegExp('\\.', 'g'), '\\.') + '$)').join('|'))]);
            this.form.updateValueAndValidity();
          }
        }
        this.changeDetectorRef.detectChanges();
      }));
    }
    this.subscriptions.push(this.configService.findByPropertyName('registration.verification.enabled').pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_4__.getFirstSucceededRemoteDataPayload)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(res => res?.values[0].toLowerCase() === 'true')).subscribe(res => {
      this.registrationVerification = res;
    }));
    this.subscriptions.push(this.disableUntilCheckedFcn().subscribe(res => {
      this.disableUntilChecked = res;
      this.changeDetectorRef.detectChanges();
    }));
  }
  /**
   * execute the captcha function for v2 invisible
   */
  executeRecaptcha() {
    this.googleRecaptchaService.executeRecaptcha();
  }
  /**
   * Register an email address
   */
  register(tokenV2) {
    if (!this.form.invalid) {
      if (this.registrationVerification) {
        this.subscriptions.push((0,rxjs__WEBPACK_IMPORTED_MODULE_16__.combineLatest)([this.captchaVersion(), this.captchaMode()]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_17__.switchMap)(([captchaVersion, captchaMode]) => {
          if (captchaVersion === 'v3') {
            return this.googleRecaptchaService.getRecaptchaToken('register_email');
          } else if (captchaVersion === 'v2' && captchaMode === 'checkbox') {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.of)(this.googleRecaptchaService.getRecaptchaTokenResponse());
          } else if (captchaVersion === 'v2' && captchaMode === 'invisible') {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.of)(tokenV2);
          } else {
            console.error(`Invalid reCaptcha configuration: version = ${captchaVersion}, mode = ${captchaMode}`);
            this.showNotification('error');
          }
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.take)(1)).subscribe(token => {
          if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_9__.isNotEmpty)(token)) {
            this.registration(token);
          } else {
            console.error('reCaptcha error');
            this.showNotification('error');
          }
        }));
      } else {
        this.registration();
      }
    }
  }
  /**
   * Registration of an email address
   */
  registration(captchaToken = null) {
    const registerEmail$ = captchaToken ? this.epersonRegistrationService.registerEmail(this.email.value, captchaToken, this.typeRequest) : this.epersonRegistrationService.registerEmail(this.email.value, null, this.typeRequest);
    this.subscriptions.push(registerEmail$.subscribe(response => {
      if (response.hasSucceeded) {
        this.notificationService.success(this.translateService.get(`${this.MESSAGE_PREFIX}.success.head`), this.translateService.get(`${this.MESSAGE_PREFIX}.success.content`, {
          email: this.email.value
        }));
        this.router.navigate(['/home']);
      } else if (response.statusCode === 422) {
        this.notificationService.error(this.translateService.get(`${this.MESSAGE_PREFIX}.error.head`), this.translateService.get(`${this.MESSAGE_PREFIX}.error.maildomain`, {
          domains: this.validMailDomains.join(', ')
        }));
      } else {
        this.notificationService.error(this.translateService.get(`${this.MESSAGE_PREFIX}.error.head`), this.translateService.get(`${this.MESSAGE_PREFIX}.error.content`, {
          email: this.email.value
        }));
      }
    }));
  }
  /**
   * Return true if the user has accepted the required cookies for reCaptcha
   */
  isRecaptchaCookieAccepted() {
    const klaroAnonymousCookie = this.cookieService.get('klaro-anonymous');
    return (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_9__.isNotEmpty)(klaroAnonymousCookie) ? klaroAnonymousCookie[_core_google_recaptcha_google_recaptcha_service__WEBPACK_IMPORTED_MODULE_2__.CAPTCHA_NAME] : false;
  }
  /**
   * Return true if the user has not completed the reCaptcha verification (checkbox mode)
   */
  disableUntilCheckedFcn() {
    const checked$ = this.checkboxCheckedSubject$.asObservable();
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.combineLatest)([this.captchaVersion(), this.captchaMode(), checked$]).pipe(
    // disable if checkbox is not checked or if reCaptcha is not in v2 checkbox mode
    (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.switchMap)(([captchaVersion, captchaMode, checked]) => captchaVersion === 'v2' && captchaMode === 'checkbox' ? (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.of)(!checked) : (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.of)(false)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.startWith)(true));
  }
  get email() {
    return this.form.get('email');
  }
  onCheckboxChecked(checked) {
    this.checkboxCheckedSubject$.next(checked);
  }
  /**
   * Show a notification to the user
   * @param key
   */
  showNotification(key) {
    const notificationTitle = this.translateService.get(this.MESSAGE_PREFIX + '.google-recaptcha.notification.title');
    const notificationErrorMsg = this.translateService.get(this.MESSAGE_PREFIX + '.google-recaptcha.notification.message.error');
    const notificationExpiredMsg = this.translateService.get(this.MESSAGE_PREFIX + '.google-recaptcha.notification.message.expired');
    switch (key) {
      case 'expired':
        this.notificationsService.warning(notificationTitle, notificationExpiredMsg);
        break;
      case 'error':
        this.notificationsService.error(notificationTitle, notificationErrorMsg);
        break;
      default:
        console.warn(`Unimplemented notification '${key}' from reCaptcha service`);
    }
  }
  static {
    this.ɵfac = function RegisterEmailFormComponent_Factory(t) {
      return new (t || RegisterEmailFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_core_data_eperson_registration_service__WEBPACK_IMPORTED_MODULE_1__.EpersonRegistrationService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_11__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_22__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_14__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_core_data_configuration_data_service__WEBPACK_IMPORTED_MODULE_0__.ConfigurationDataService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_core_google_recaptcha_google_recaptcha_service__WEBPACK_IMPORTED_MODULE_2__.GoogleRecaptchaService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_core_services_cookie_service__WEBPACK_IMPORTED_MODULE_3__.CookieService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_shared_cookies_klaro_service__WEBPACK_IMPORTED_MODULE_8__.KlaroService, 8), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_12__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_11__.NotificationsService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
      type: RegisterEmailFormComponent,
      selectors: [["ds-base-register-email-form"]],
      inputs: {
        MESSAGE_PREFIX: "MESSAGE_PREFIX",
        typeRequest: "typeRequest"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵStandaloneFeature"]],
      decls: 29,
      vars: 33,
      consts: [["v2Invisible", ""], [1, "container"], [4, "ngIf"], [3, "formGroup"], [1, "form-group"], [1, "row"], [1, "col-12"], ["for", "email", 1, "font-weight-bold"], ["type", "text", "id", "email", "formControlName", "email", 3, "className"], ["class", "invalid-feedback show-feedback", 4, "ngIf"], [3, "type", 4, "ngIf"], ["class", "my-3", 4, "ngIf"], [4, "ngIf", "ngIfElse"], [1, "invalid-feedback", "show-feedback"], ["id", "email-errors-required", 4, "ngIf"], ["id", "email-error-not-valid", 4, "ngIf"], ["id", "email-errors-required"], ["id", "email-error-not-valid"], [3, "type"], [1, "m-0", 3, "innerHTML"], [1, "m-0"], ["href", "javascript:void(0);", 3, "click"], [1, "my-3"], [3, "executeRecaptcha", "checkboxChecked", "showNotification", "captchaMode"], [1, "btn", "btn-primary", 3, "click", "dsBtnDisabled"]],
      template: function RegisterEmailFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 1)(1, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](6, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](7, RegisterEmailFormComponent_p_7_Template, 3, 4, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "form", 3)(9, "div", 4)(10, "div", 5)(11, "div", 6)(12, "label", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](14, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](15, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](16, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](17, RegisterEmailFormComponent_div_17_Template, 3, 2, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](18, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](20, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](21, RegisterEmailFormComponent_ds_alert_21_Template, 7, 7, "ds-alert", 10)(22, RegisterEmailFormComponent_div_22_Template, 3, 3, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](23, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](24, RegisterEmailFormComponent_ng_container_24_Template, 4, 4, "ng-container", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](25, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](26, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](27, RegisterEmailFormComponent_ng_template_27_Template, 3, 4, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          const v2Invisible_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](28);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](3, 17, ctx.MESSAGE_PREFIX + ".header"));
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](6, 19, ctx.MESSAGE_PREFIX + ".info"));
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.validMailDomains.length !== 0 && ctx.typeRequest === ctx.TYPE_REQUEST_REGISTER);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassMap"]("ng-invalid");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formGroup", ctx.form);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](14, 21, ctx.MESSAGE_PREFIX + ".email"));
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("className", ctx.email.invalid && (ctx.email.dirty || ctx.email.touched) ? "form-control is-invalid" : "form-control");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](16, 23, ctx.MESSAGE_PREFIX + ".aria.label"))("aria-describedby", !ctx.email.errors ? "" : ctx.email.errors.required ? "email-errors-required" : "email-error-not-valid")("aria-invalid", ctx.email.invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.email.invalid && (ctx.email.dirty || ctx.email.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](20, 25, ctx.MESSAGE_PREFIX + ".email.hint"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.registrationVerification && !ctx.isRecaptchaCookieAccepted());
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.isRecaptchaCookieAccepted() && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](23, 27, ctx.googleRecaptchaService.captchaVersion()) === "v2");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx.registrationVerification || _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](25, 29, ctx.googleRecaptchaService.captchaVersion()) !== "v2" && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](26, 31, ctx.googleRecaptchaService.captchaMode()) === "invisible")("ngIfElse", v2Invisible_r6);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_23__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControlName, _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_5__.AlertComponent, _shared_google_recaptcha_google_recaptcha_component__WEBPACK_IMPORTED_MODULE_10__.GoogleRecaptchaComponent, _angular_common__WEBPACK_IMPORTED_MODULE_23__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__.TranslatePipe, _shared_btn_disabled_directive__WEBPACK_IMPORTED_MODULE_7__.BtnDisabledDirective],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 40788:
/*!***********************************************************************!*\
  !*** ./src/app/shared/google-recaptcha/google-recaptcha.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GoogleRecaptchaComponent: () => (/* binding */ GoogleRecaptchaComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var src_app_core_services_window_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/window.service */ 1676);
/* harmony import */ var _core_data_configuration_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/data/configuration-data.service */ 8917);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/shared/operators */ 55757);
/* harmony import */ var _empty_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../empty.util */ 82777);









class GoogleRecaptchaComponent {
  constructor(_window, configService) {
    this._window = _window;
    this.configService = configService;
    /**
     * An EventEmitter that's fired whenever the form is being submitted
     */
    this.executeRecaptcha = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.checkboxChecked = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.showNotification = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.dataCallbackFcn = $event => {
      switch (this.captchaMode) {
        case 'invisible':
          this.executeRecaptcha.emit($event);
          break;
        case 'checkbox':
          this.checkboxChecked.emit((0,_empty_util__WEBPACK_IMPORTED_MODULE_3__.isNotEmpty)($event));
          break;
        default:
          console.error(`Invalid reCaptcha mode '${this.captchaMode}`);
          this.showNotification.emit('error');
      }
    };
    this.expiredCallbackFcn = () => {
      this.checkboxChecked.emit(false);
      this.showNotification.emit('expired');
    };
    this.errorCallbackFcn = () => {
      this.showNotification.emit('error');
    };
  }
  /**
   * Retrieve the google recaptcha site key
   */
  ngOnInit() {
    this.recaptchaKey$ = this.configService.findByPropertyName('google.recaptcha.key.site').pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_2__.getFirstSucceededRemoteDataPayload)());
    this._window.nativeWindow.dataCallback = this.dataCallbackFcn;
    this._window.nativeWindow.expiredCallback = this.expiredCallbackFcn;
    this._window.nativeWindow.errorCallback = this.errorCallbackFcn;
  }
  static {
    this.ɵfac = function GoogleRecaptchaComponent_Factory(t) {
      return new (t || GoogleRecaptchaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_window_service__WEBPACK_IMPORTED_MODULE_0__.NativeWindowService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_data_configuration_data_service__WEBPACK_IMPORTED_MODULE_1__.ConfigurationDataService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: GoogleRecaptchaComponent,
      selectors: [["ds-google-recaptcha"]],
      inputs: {
        captchaMode: "captchaMode"
      },
      outputs: {
        executeRecaptcha: "executeRecaptcha",
        checkboxChecked: "checkboxChecked",
        showNotification: "showNotification"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 7,
      consts: [[1, "g-recaptcha"]],
      template: function GoogleRecaptchaComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "async");
        }
        if (rf & 2) {
          let tmp_3_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("data-callback", "dataCallback")("data-expired-callback", "expiredCallback")("data-error-callback", "errorCallback")("data-sitekey", (tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 5, ctx.recaptchaKey$)) == null ? null : tmp_3_0.values[0])("data-size", ctx.captchaMode === "invisible" ? "invisible" : null);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdvb2dsZS1yZWNhcHRjaGEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUEiLCJmaWxlIjoiZ29vZ2xlLXJlY2FwdGNoYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2dvb2dsZS1yZWNhcHRjaGEvZ29vZ2xlLXJlY2FwdGNoYS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBLHdrQkFBd2tCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi8iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=default-src_app_register-email-form_register-email-form_component_ts.js.map