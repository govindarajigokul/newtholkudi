"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_app_system-wide-alert_system-wide-alert-routes_ts"],{

/***/ 19841:
/*!**********************************************************************************!*\
  !*** ./src/app/system-wide-alert/alert-form/system-wide-alert-form.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SystemWideAlertFormComponent: () => (/* binding */ SystemWideAlertFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 56106);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 49966);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var date_fns_tz__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! date-fns-tz */ 83731);
/* harmony import */ var date_fns_tz__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(date_fns_tz__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var ngx_ui_switch__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-ui-switch */ 74253);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 83485);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 85687);
/* harmony import */ var _core_data_request_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/data/request.service */ 32473);
/* harmony import */ var _core_data_system_wide_alert_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/data/system-wide-alert-data.service */ 27795);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/shared/operators */ 55757);
/* harmony import */ var _shared_btn_disabled_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/btn-disabled.directive */ 60456);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/empty.util */ 82777);
/* harmony import */ var _shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/notifications/notifications.service */ 69472);
/* harmony import */ var _system_wide_alert_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../system-wide-alert.model */ 30398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 14354);

























const _c0 = a0 => ({
  days: a0
});
const _c1 = a0 => ({
  hours: a0
});
const _c2 = a0 => ({
  minutes: a0
});
function SystemWideAlertFormComponent_div_18_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "system-wide-alert.form.error.message"), " ");
  }
}
function SystemWideAlertFormComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, SystemWideAlertFormComponent_div_18_span_1_Template, 3, 3, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.formMessage.errors);
  }
}
function SystemWideAlertFormComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "div", 8)(2, "div", 24)(3, "div", 25)(4, "input", 26, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function SystemWideAlertFormComponent_div_27_Template_input_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r0.date, $event) || (ctx_r0.date = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function SystemWideAlertFormComponent_div_27_Template_input_ngModelChange_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.updatePreviewTime());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SystemWideAlertFormComponent_div_27_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r2);
      const d_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](d_r3.toggle());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 28)(9, "div", 25)(10, "ngb-timepicker", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function SystemWideAlertFormComponent_div_27_Template_ngb_timepicker_ngModelChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r0.time, $event) || (ctx_r0.time = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function SystemWideAlertFormComponent_div_27_Template_ngb_timepicker_ngModelChange_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.updatePreviewTime());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 30)(12, "div", 25)(13, "ngb-timepicker", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function SystemWideAlertFormComponent_div_27_Template_ngb_timepicker_ngModelChange_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r0.time, $event) || (ctx_r0.time = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function SystemWideAlertFormComponent_div_27_Template_ngb_timepicker_ngModelChange_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.updatePreviewTime());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("minDate", ctx_r0.minDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](7, 5, "system-wide-alert-form.select-date-by-calendar"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.time);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.time);
  }
}
function SystemWideAlertFormComponent_div_33_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "system-wide-alert-banner.countdown.prefix"), " ");
  }
}
function SystemWideAlertFormComponent_div_33_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](2, 1, "system-wide-alert-banner.countdown.days", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](4, _c0, ctx_r0.previewDays)), " ");
  }
}
function SystemWideAlertFormComponent_div_33_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](2, 1, "system-wide-alert-banner.countdown.hours", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](4, _c1, ctx_r0.previewHours)), " ");
  }
}
function SystemWideAlertFormComponent_div_33_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](2, 1, "system-wide-alert-banner.countdown.minutes", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](4, _c2, ctx_r0.previewMinutes)), " ");
  }
}
function SystemWideAlertFormComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "div", 8)(2, "div", 6)(3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 31)(7, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, SystemWideAlertFormComponent_div_33_span_8_Template, 3, 3, "span", 15)(9, SystemWideAlertFormComponent_div_33_span_9_Template, 3, 6, "span", 15)(10, SystemWideAlertFormComponent_div_33_span_10_Template, 3, 6, "span", 15)(11, SystemWideAlertFormComponent_div_33_span_11_Template, 3, 6, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](12, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](5, 6, "system-wide-alert.form.label.preview"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.previewDays > 0 || ctx_r0.previewHours > 0 || ctx_r0.previewMinutes > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.previewDays > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.previewDays > 0 || ctx_r0.previewHours > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.previewDays > 0 || ctx_r0.previewHours > 0 || ctx_r0.previewMinutes > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("innerHTML", ctx_r0.formMessage.value, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeHtml"]);
  }
}
/**
 * Component responsible for rendering the form to update a system-wide alert
 */
class SystemWideAlertFormComponent {
  constructor(systemWideAlertDataService, notificationsService, router, requestService, translateService) {
    this.systemWideAlertDataService = systemWideAlertDataService;
    this.notificationsService = notificationsService;
    this.router = router;
    this.requestService = requestService;
    this.translateService = translateService;
    /**
     * Behaviour subject to track whether the counter is enabled
     */
    this.counterEnabled$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject(false);
  }
  ngOnInit() {
    this.systemWideAlert$ = this.systemWideAlertDataService.findAll().pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_2__.getFirstCompletedRemoteData)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(rd => {
      if (rd.hasSucceeded) {
        return rd.payload;
      } else {
        this.notificationsService.error('system-wide-alert-form.retrieval.error');
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(payload => payload.page), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.filter)(page => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_4__.isNotEmpty)(page)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(page => page[0]));
    this.createForm();
    const currentDate = new Date();
    this.minDate = {
      year: currentDate.getFullYear(),
      month: currentDate.getMonth() + 1,
      day: currentDate.getDate()
    };
    this.systemWideAlert$.subscribe(alert => {
      this.currentAlert = alert;
      this.initFormValues(alert);
    });
  }
  /**
   * Creates the form with empty values
   */
  createForm() {
    this.alertForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.UntypedFormBuilder().group({
      formMessage: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.UntypedFormControl('', {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]
      }),
      formActive: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.UntypedFormControl(false)
    });
    this.setDateTime(new Date());
  }
  /**
   * Sets the form values based on the values retrieve from the provided system-wide alert
   * @param alert   - System-wide alert to use to init the form
   */
  initFormValues(alert) {
    this.formMessage.patchValue(alert.message);
    this.formActive.patchValue(alert.active);
    const countDownTo = (0,date_fns_tz__WEBPACK_IMPORTED_MODULE_12__.zonedTimeToUtc)(alert.countdownTo, 'UTC');
    if (countDownTo.getTime() - new Date().getTime() > 0) {
      this.counterEnabled$.next(true);
      this.setDateTime(countDownTo);
    }
  }
  /**
   * Set whether the system-wide alert is active
   * Will also save the info in the current system-wide alert
   * @param active
   */
  setActive(active) {
    this.formActive.patchValue(active);
    this.save(false);
  }
  /**
   * Set whether the countdown timer is enabled or disabled. This will also update the counter in the preview
   * @param enabled   - Whether the countdown timer is enabled or disabled.
   */
  setCounterEnabled(enabled) {
    this.counterEnabled$.next(enabled);
    if (!enabled) {
      this.previewMinutes = 0;
      this.previewHours = 0;
      this.previewDays = 0;
    } else {
      this.updatePreviewTime();
    }
  }
  setDateTime(dateToSet) {
    this.time = {
      hour: dateToSet.getHours(),
      minute: dateToSet.getMinutes()
    };
    this.date = {
      year: dateToSet.getFullYear(),
      month: dateToSet.getMonth() + 1,
      day: dateToSet.getDate()
    };
    this.updatePreviewTime();
  }
  /**
   * Update the preview time based on the configured countdown date and the current time
   */
  updatePreviewTime() {
    const countDownTo = new Date(this.date.year, this.date.month - 1, this.date.day, this.time.hour, this.time.minute);
    const timeDifference = countDownTo.getTime() - new Date().getTime();
    this.allocateTimeUnits(timeDifference);
  }
  /**
   * Helper method to push how many days, hours and minutes are left in the countdown to their respective behaviour subject
   * @param timeDifference  - The time difference to calculate and push the time units for
   */
  allocateTimeUnits(timeDifference) {
    this.previewMinutes = Math.floor(timeDifference / (1000 * 60) % 60);
    this.previewHours = Math.floor(timeDifference / (1000 * 60 * 60) % 24);
    this.previewDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  }
  get formMessage() {
    return this.alertForm.get('formMessage');
  }
  get formActive() {
    return this.alertForm.get('formActive');
  }
  /**
   * Save the system-wide alert present in the form
   * When no alert is present yet on the server, a new one will be created
   * When one already exists, the existing one will be updated
   *
   * @param navigateToHomePage  - Whether the user should be navigated back on successful save or not
   */
  save(navigateToHomePage = true) {
    const alert = new _system_wide_alert_model__WEBPACK_IMPORTED_MODULE_6__.SystemWideAlert();
    alert.message = this.formMessage.value;
    alert.active = this.formActive.value;
    if (this.counterEnabled$.getValue()) {
      const countDownTo = new Date(this.date.year, this.date.month - 1, this.date.day, this.time.hour, this.time.minute);
      alert.countdownTo = (0,date_fns_tz__WEBPACK_IMPORTED_MODULE_12__.utcToZonedTime)(countDownTo, 'UTC').toUTCString();
    } else {
      alert.countdownTo = null;
    }
    if (this.alertForm.valid) {
      if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_4__.hasValue)(this.currentAlert)) {
        const updatedAlert = Object.assign(new _system_wide_alert_model__WEBPACK_IMPORTED_MODULE_6__.SystemWideAlert(), this.currentAlert, alert);
        this.handleResponse(this.systemWideAlertDataService.put(updatedAlert), 'system-wide-alert.form.update', navigateToHomePage);
      } else {
        this.handleResponse(this.systemWideAlertDataService.create(alert), 'system-wide-alert.form.create', navigateToHomePage);
      }
    }
  }
  handleResponse(response$, messagePrefix, navigateToHomePage) {
    response$.pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_2__.getFirstCompletedRemoteData)()).subscribe(response => {
      if (response.hasSucceeded) {
        this.notificationsService.success(this.translateService.get(`${messagePrefix}.success`));
        this.requestService.setStaleByHrefSubstring('systemwidealerts');
        if (navigateToHomePage) {
          this.back();
        }
      } else {
        this.notificationsService.error(this.translateService.get(`${messagePrefix}.error`, response.errorMessage));
      }
    });
  }
  /**
   * Navigate back to the homepage
   */
  back() {
    this.router.navigate(['/home']);
  }
  static {
    this.ɵfac = function SystemWideAlertFormComponent_Factory(t) {
      return new (t || SystemWideAlertFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_data_system_wide_alert_data_service__WEBPACK_IMPORTED_MODULE_1__.SystemWideAlertDataService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_5__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_data_request_service__WEBPACK_IMPORTED_MODULE_0__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: SystemWideAlertFormComponent,
      selectors: [["ds-system-wide-alert-form"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵStandaloneFeature"]],
      decls: 43,
      vars: 41,
      consts: [["d", "ngbDatepicker"], [1, "container"], ["id", "header"], [3, "formGroup"], [1, "form-group"], [1, "row", "mb-2"], [1, "col"], [3, "change", "checkedLabel", "uncheckedLabel", "checked"], [1, "row"], ["for", "formMessage"], ["id", "formMessage", "rows", "5", "formControlName", "formMessage", 3, "className"], ["class", "invalid-feedback show-feedback", 4, "ngIf"], [1, "col", "mb-2", "d-flex", "align-items-end"], ["size", "small", 3, "change", "ariaLabel", "checked"], [1, "ml-2"], [4, "ngIf"], [1, "mb-2"], [1, "text-muted"], [1, "btn-row", "float-right", "space-children-mr", "mt-2"], [1, "btn", "btn-outline-secondary", 3, "click"], [1, "fas", "fa-arrow-left"], [1, "btn", "btn-primary", 3, "click", "dsBtnDisabled"], [1, "fa", "fa-save"], [1, "invalid-feedback", "show-feedback"], [1, "col-sm-12", "col-md-6"], [1, "input-group"], ["placeholder", "yyyy-mm-dd", "name", "dp", "ngbDatepicker", "", 1, "form-control", 3, "ngModelChange", "ngModel", "minDate"], ["type", "button", 1, "btn", "btn-outline-secondary", "fas", "fa-calendar", 3, "click"], [1, "col-12", "d-md-none"], [3, "ngModelChange", "ngModel"], [1, "d-none", "d-md-block", "col-md-6", "timepicker-margin"], [1, "rounded-0", "alert", "alert-warning"], [1, "font-weight-bold"], [3, "innerHTML"]],
      template: function SystemWideAlertFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 1)(1, "h1", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "ui-switch", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](9, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](10, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function SystemWideAlertFormComponent_Template_ui_switch_change_8_listener($event) {
            return ctx.setActive($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 8)(12, "div", 6)(13, "label", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](15, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "textarea", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "                ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, SystemWideAlertFormComponent_div_18_Template, 2, 1, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 8)(20, "div", 12)(21, "ui-switch", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](22, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](23, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function SystemWideAlertFormComponent_Template_ui_switch_change_21_listener($event) {
            return ctx.setCounterEnabled($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "span", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](26, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](27, SystemWideAlertFormComponent_div_27_Template, 14, 7, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](28, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "div", 16)(30, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](32, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](33, SystemWideAlertFormComponent_div_33_Template, 13, 8, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "div", 18)(35, "button", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SystemWideAlertFormComponent_Template_button_click_35_listener() {
            return ctx.back();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](36, "i", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](37);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](38, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "button", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SystemWideAlertFormComponent_Template_button_click_39_listener() {
            return ctx.save();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](40, "i", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](41);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](42, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 19, "system-wide-alert.form.header"));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"]("ng-invalid");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.alertForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checkedLabel", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](9, 21, "system-wide-alert.form.label.active"))("uncheckedLabel", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](10, 23, "system-wide-alert.form.label.inactive"))("checked", ctx.formActive.value);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](15, 25, "system-wide-alert.form.label.message"));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("className", ctx.formMessage.invalid && (ctx.formMessage.dirty || ctx.formMessage.touched) ? "form-control is-invalid" : "form-control");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.formMessage.invalid && (ctx.formMessage.dirty || ctx.formMessage.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ariaLabel", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](22, 27, "system-wide-alert.form.label.countdownTo.enable"))("checked", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](23, 29, ctx.counterEnabled$));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](26, 31, "system-wide-alert.form.label.countdownTo.enable"));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](28, 33, ctx.counterEnabled$));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](32, 35, "system-wide-alert.form.label.countdownTo.hint"));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.formMessage.value);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](38, 37, "system-wide-alert.form.cancel"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dsBtnDisabled", ctx.alertForm.invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](42, 39, "system-wide-alert.form.save"), " ");
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControlName, ngx_ui_switch__WEBPACK_IMPORTED_MODULE_15__.UiSwitchModule, ngx_ui_switch__WEBPACK_IMPORTED_MODULE_15__.UiSwitchComponent, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbDatepickerModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbInputDatepicker, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbTimepickerModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbTimepicker, _angular_common__WEBPACK_IMPORTED_MODULE_16__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslatePipe, _shared_btn_disabled_directive__WEBPACK_IMPORTED_MODULE_3__.BtnDisabledDirective],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n.timepicker-margin[_ngcontent-%COMP%] {\n  margin-top: -38px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN5c3RlbS13aWRlLWFsZXJ0LWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQTtFQUNFLGlCQUFBO0FBQ0YiLCJmaWxlIjoic3lzdGVtLXdpZGUtYWxlcnQtZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovXG4udGltZXBpY2tlci1tYXJnaW4ge1xuICBtYXJnaW4tdG9wOiAtMzhweDtcbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc3lzdGVtLXdpZGUtYWxlcnQvYWxlcnQtZm9ybS9zeXN0ZW0td2lkZS1hbGVydC1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBO0FBQ0E7RUFDRSxpQkFBQTtBQUNGO0FBQ0Esb3JCQUFvckIiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqL1xuLnRpbWVwaWNrZXItbWFyZ2luIHtcbiAgbWFyZ2luLXRvcDogLTM4cHg7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 67460:
/*!***************************************************************!*\
  !*** ./src/app/system-wide-alert/system-wide-alert-routes.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ROUTES: () => (/* binding */ ROUTES)
/* harmony export */ });
/* harmony import */ var _core_data_feature_authorization_feature_authorization_guard_site_administrator_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/data/feature-authorization/feature-authorization-guard/site-administrator.guard */ 36329);
/* harmony import */ var _alert_form_system_wide_alert_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert-form/system-wide-alert-form.component */ 19841);


const ROUTES = [{
  path: '',
  canActivate: [_core_data_feature_authorization_feature_authorization_guard_site_administrator_guard__WEBPACK_IMPORTED_MODULE_0__.siteAdministratorGuard],
  component: _alert_form_system_wide_alert_form_component__WEBPACK_IMPORTED_MODULE_1__.SystemWideAlertFormComponent
}];

/***/ })

}]);
//# sourceMappingURL=src_app_system-wide-alert_system-wide-alert-routes_ts.js.map