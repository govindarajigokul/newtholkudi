"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["default-src_app_shared_subscriptions_subscription-modal_subscription-modal_component_ts"],{

/***/ 10781:
/*!*****************************************************************************************!*\
  !*** ./src/app/shared/subscriptions/subscription-modal/subscription-modal.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SubscriptionModalComponent: () => (/* binding */ SubscriptionModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 56106);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var lodash_findIndex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/findIndex */ 60245);
/* harmony import */ var lodash_findIndex__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_findIndex__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 83485);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 66853);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 70141);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs */ 27639);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 78374);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 74671);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 21252);
/* harmony import */ var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/auth/auth.service */ 67116);
/* harmony import */ var _core_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/breadcrumbs/dso-name.service */ 96526);
/* harmony import */ var _core_shared_dspace_object_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/shared/dspace-object.model */ 76829);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/shared/operators */ 55757);
/* harmony import */ var _alert_alert_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../alert/alert.component */ 16292);
/* harmony import */ var _btn_disabled_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../btn-disabled.directive */ 60456);
/* harmony import */ var _empty_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../empty.util */ 82777);
/* harmony import */ var _notifications_notifications_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../notifications/notifications.service */ 69472);
/* harmony import */ var _object_collection_shared_badges_type_badge_themed_type_badge_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../object-collection/shared/badges/type-badge/themed-type-badge.component */ 74448);
/* harmony import */ var _models_subscription_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../models/subscription.model */ 67478);
/* harmony import */ var _subscriptions_data_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../subscriptions-data.service */ 62355);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 49966);



























function SubscriptionModalComponent_form_0_span_12_ds_type_badge_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "ds-type-badge", 17);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("object", ctx_r1.dso);
  }
}
function SubscriptionModalComponent_form_0_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, SubscriptionModalComponent_form_0_span_12_ds_type_badge_1_Template, 1, 1, "ds-type-badge", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !!ctx_r1.dso);
  }
}
function SubscriptionModalComponent_form_0_fieldset_14_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const frequency_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("id", "checkbox-" + frequency_r3)("formControlName", frequency_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("for", "checkbox-" + frequency_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](4, 4, "subscriptions.modal.new-subscription-form.frequency." + frequency_r3));
  }
}
function SubscriptionModalComponent_form_0_fieldset_14_ds_alert_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "ds-alert", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("type", "alert-danger");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 2, "context-menu.actions.subscription.frequency.required"), " ");
  }
}
function SubscriptionModalComponent_form_0_fieldset_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "fieldset", 18)(1, "legend", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](5, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](6, SubscriptionModalComponent_form_0_fieldset_14_div_6_Template, 5, 6, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](7, SubscriptionModalComponent_form_0_fieldset_14_ds_alert_7_Template, 3, 4, "ds-alert", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const subscriptionType_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("formGroupName", subscriptionType_r4.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](3, 5, "subscriptions.modal.new-subscription-form.type." + subscriptionType_r4.key), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", subscriptionType_r4 == null ? null : subscriptionType_r4.value == null ? null : subscriptionType_r4.value.controls["subscriptionId"].value);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r1.frequencyDefaultValues);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !!ctx_r1.submitted && (subscriptionType_r4 == null ? null : subscriptionType_r4.value == null ? null : subscriptionType_r4.value.controls["frequencies"].errors == null ? null : subscriptionType_r4.value.controls["frequencies"].errors.required));
  }
}
function SubscriptionModalComponent_form_0_p_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 1, "subscriptions.modal.delete-info"));
  }
}
function SubscriptionModalComponent_form_0_span_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](3, 1, "subscriptions.modal.new-subscription-form.processing"), " ");
  }
}
function SubscriptionModalComponent_form_0_span_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 1, "subscriptions.modal.new-subscription-form.submit"), " ");
  }
}
function SubscriptionModalComponent_form_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "form", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngSubmit", function SubscriptionModalComponent_form_0_Template_form_ngSubmit_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.submit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 2)(2, "h4", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function SubscriptionModalComponent_form_0_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.activeModal.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "div", 6)(9, "p", 7)(10, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](12, SubscriptionModalComponent_form_0_span_12_Template, 2, 1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](14, SubscriptionModalComponent_form_0_fieldset_14_Template, 8, 7, "fieldset", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](15, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](16, SubscriptionModalComponent_form_0_p_16_Template, 3, 3, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](17, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](18, "div", 11)(19, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function SubscriptionModalComponent_form_0_Template_button_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.activeModal.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](22, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](23, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](24, SubscriptionModalComponent_form_0_span_24_Template, 4, 3, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](25, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](26, SubscriptionModalComponent_form_0_span_26_Template, 3, 3, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](27, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formGroup", ctx_r1.subscriptionForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](4, 10, "subscriptions.modal.title"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r1.dsoNameService.getName(ctx_r1.dso));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !!ctx_r1.dso);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](15, 12, ctx_r1.subscriptionForm == null ? null : ctx_r1.subscriptionForm.controls));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](17, 14, ctx_r1.showDeleteInfo$));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](21, 16, "subscriptions.modal.close"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("dsBtnDisabled", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](23, 18, ctx_r1.processing$) || !ctx_r1.isValid);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](25, 20, ctx_r1.processing$));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](27, 22, ctx_r1.processing$) !== true);
  }
}
/**
 * Modal that allows to manage the subscriptions for the selected item
 */
class SubscriptionModalComponent {
  constructor(formBuilder, modalService, notificationsService, subscriptionService, activeModal, authService, translate, dsoNameService) {
    this.formBuilder = formBuilder;
    this.modalService = modalService;
    this.notificationsService = notificationsService;
    this.subscriptionService = subscriptionService;
    this.activeModal = activeModal;
    this.authService = authService;
    this.translate = translate;
    this.dsoNameService = dsoNameService;
    /**
     * A boolean representing if a request operation is pending
     * @type {BehaviorSubject<boolean>}
     */
    this.processing$ = new rxjs__WEBPACK_IMPORTED_MODULE_13__.BehaviorSubject(false);
    /**
     * If true, show a message explaining how to delete a subscription
     */
    this.showDeleteInfo$ = new rxjs__WEBPACK_IMPORTED_MODULE_13__.BehaviorSubject(false);
    /**
     * Used to show validation errors when user submits
     */
    this.submitted = false;
    /**
     * Types of subscription to be shown on select
     */
    this.subscriptionDefaultTypes = ['content'];
    /**
     * Frequencies to be shown as checkboxes
     */
    this.frequencyDefaultValues = ['D', 'W', 'M'];
    /**
     * True if form status has changed and at least one frequency is checked
     */
    this.isValid = false;
    /**
     * Event emitted when a given subscription has been updated
     */
    this.updateSubscription = new _angular_core__WEBPACK_IMPORTED_MODULE_12__.EventEmitter();
  }
  /**
   * When component starts initialize starting functionality
   */
  ngOnInit() {
    this.authService.getAuthenticatedUserFromStore().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(ePerson => ePerson.uuid), (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.shareReplay)({
      refCount: false
    })).subscribe(ePersonId => {
      this.ePersonId = ePersonId;
      if ((0,_empty_util__WEBPACK_IMPORTED_MODULE_7__.isNotEmpty)(this.subscription)) {
        this.initFormByGivenSubscription();
      } else {
        this.initFormByAllSubscriptions();
      }
    });
    this.subscriptionForm.valueChanges.subscribe(newValue => {
      let anyFrequencySelected = false;
      for (const f of this.frequencyDefaultValues) {
        anyFrequencySelected = anyFrequencySelected || newValue.content.frequencies[f];
      }
      this.isValid = anyFrequencySelected;
    });
  }
  initFormByAllSubscriptions() {
    this.subscriptionForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.UntypedFormGroup({});
    for (const t of this.subscriptionDefaultTypes) {
      const formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.UntypedFormGroup({});
      formGroup.addControl('subscriptionId', this.formBuilder.control(''));
      formGroup.addControl('frequencies', this.formBuilder.group({}));
      for (const f of this.frequencyDefaultValues) {
        formGroup.controls.frequencies.addControl(f, this.formBuilder.control(false));
      }
      this.subscriptionForm.addControl(t, formGroup);
    }
    this.initFormDataBySubscriptions();
  }
  /**
   * If the subscription is passed start the form with the information of subscription
   */
  initFormByGivenSubscription() {
    const formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.UntypedFormGroup({});
    formGroup.addControl('subscriptionId', this.formBuilder.control(this.subscription.id));
    formGroup.addControl('frequencies', this.formBuilder.group({}));
    formGroup.get('frequencies').addValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required);
    for (const f of this.frequencyDefaultValues) {
      const value = lodash_findIndex__WEBPACK_IMPORTED_MODULE_0___default()(this.subscription.subscriptionParameterList, ['value', f]) !== -1;
      formGroup.controls.frequencies.addControl(f, this.formBuilder.control(value));
    }
    this.subscriptionForm = this.formBuilder.group({
      [this.subscription.subscriptionType]: formGroup
    });
  }
  /**
   * Get subscriptions for the current ePerson & dso object relation.
   * If there are no subscriptions then start with an empty form.
   */
  initFormDataBySubscriptions() {
    this.processing$.next(true);
    this.subscriptionService.getSubscriptionsByPersonDSO(this.ePersonId, this.dso?.uuid).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_4__.getFirstSucceededRemoteDataPayload)()).subscribe({
      next: res => {
        if (res.pageInfo.totalElements > 0) {
          this.showDeleteInfo$.next(true);
          for (const subscription of res.page) {
            const type = subscription.subscriptionType;
            const subscriptionGroup = this.subscriptionForm.get(type);
            if ((0,_empty_util__WEBPACK_IMPORTED_MODULE_7__.isNotEmpty)(subscriptionGroup)) {
              subscriptionGroup.controls.subscriptionId.setValue(subscription.id);
              for (const parameter of subscription.subscriptionParameterList.filter(p => p.name === 'frequency')) {
                subscriptionGroup.controls.frequencies.controls[parameter.value]?.setValue(true);
              }
            }
          }
        }
        this.processing$.next(false);
      },
      error: err => {
        this.processing$.next(false);
      }
    });
  }
  /**
   * Create/update subscriptions if needed
   */
  submit() {
    this.submitted = true;
    const subscriptionTypes = Object.keys(this.subscriptionForm.controls);
    const subscriptionsToBeCreated = [];
    const subscriptionsToBeUpdated = [];
    subscriptionTypes.forEach(subscriptionType => {
      const subscriptionGroup = this.subscriptionForm.controls[subscriptionType];
      if (subscriptionGroup.touched && subscriptionGroup.dirty) {
        const body = this.createBody(subscriptionGroup.controls.subscriptionId.value, subscriptionType, subscriptionGroup.controls.frequencies);
        if ((0,_empty_util__WEBPACK_IMPORTED_MODULE_7__.isNotEmpty)(body.id)) {
          subscriptionsToBeUpdated.push(body);
        } else if ((0,_empty_util__WEBPACK_IMPORTED_MODULE_7__.isNotEmpty)(body.subscriptionParameterList)) {
          subscriptionsToBeCreated.push(body);
        }
      }
    });
    const toBeProcessed = [];
    if ((0,_empty_util__WEBPACK_IMPORTED_MODULE_7__.isNotEmpty)(subscriptionsToBeCreated)) {
      toBeProcessed.push((0,rxjs__WEBPACK_IMPORTED_MODULE_18__.from)(subscriptionsToBeCreated).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.mergeMap)(subscriptionBody => {
        return this.subscriptionService.createSubscription(subscriptionBody, this.ePersonId, this.dso.uuid).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_4__.getFirstCompletedRemoteData)());
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.tap)(res => {
        if (res.hasSucceeded) {
          const msg = this.translate.instant('subscriptions.modal.create.success', {
            type: res.payload.subscriptionType
          });
          this.notificationsService.success(null, msg);
        } else {
          this.notificationsService.error(null, this.translate.instant('subscriptions.modal.create.error'));
        }
      })));
    }
    if ((0,_empty_util__WEBPACK_IMPORTED_MODULE_7__.isNotEmpty)(subscriptionsToBeUpdated)) {
      toBeProcessed.push((0,rxjs__WEBPACK_IMPORTED_MODULE_18__.from)(subscriptionsToBeUpdated).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.mergeMap)(subscriptionBody => {
        return this.subscriptionService.updateSubscription(subscriptionBody, this.ePersonId, this.dso.uuid).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_4__.getFirstCompletedRemoteData)());
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.tap)(res => {
        if (res.hasSucceeded) {
          const msg = this.translate.instant('subscriptions.modal.update.success', {
            type: res.payload.subscriptionType
          });
          this.notificationsService.success(null, msg);
          if ((0,_empty_util__WEBPACK_IMPORTED_MODULE_7__.isNotEmpty)(this.subscription)) {
            this.updateSubscription.emit(res.payload);
          }
        } else {
          this.notificationsService.error(null, this.translate.instant('subscriptions.modal.update.error'));
        }
      })));
    }
    (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.combineLatest)([...toBeProcessed]).subscribe(res => {
      this.activeModal.close();
    });
  }
  createBody(subscriptionId, subscriptionType, frequencies) {
    const body = {
      id: (0,_empty_util__WEBPACK_IMPORTED_MODULE_7__.isNotEmpty)(subscriptionId) ? subscriptionId : null,
      subscriptionType: subscriptionType,
      subscriptionParameterList: []
    };
    for (const frequency of this.frequencyDefaultValues) {
      if (frequencies.value[frequency]) {
        body.subscriptionParameterList.push({
          name: 'frequency',
          value: frequency
        });
      }
    }
    return body;
  }
  static {
    this.ɵfac = function SubscriptionModalComponent_Factory(t) {
      return new (t || SubscriptionModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_17__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_8__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_subscriptions_data_service__WEBPACK_IMPORTED_MODULE_11__.SubscriptionsDataService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_core_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_2__.DSONameService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
      type: SubscriptionModalComponent,
      selectors: [["ds-subscription-modal"]],
      inputs: {
        dso: "dso",
        subscription: "subscription"
      },
      outputs: {
        updateSubscription: "updateSubscription"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵStandaloneFeature"]],
      decls: 1,
      vars: 1,
      consts: [["data-test", "subscription-form", 3, "formGroup", "ngSubmit", 4, "ngIf"], ["data-test", "subscription-form", 3, "ngSubmit", "formGroup"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "mb-3"], ["class", "float-right", 4, "ngIf"], ["class", "form-group form-row", 3, "formGroupName", 4, "ngFor", "ngForOf"], ["class", "text-muted", 4, "ngIf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], ["type", "submit", 1, "btn", "btn-success", 3, "dsBtnDisabled"], [4, "ngIf"], [1, "float-right"], [3, "object", 4, "ngIf"], [3, "object"], [1, "form-group", "form-row", 3, "formGroupName"], [1, "col-md-4", "col-form-label", "float-md-left", "pt-0"], [1, "col-md-8"], ["type", "hidden", "formControlName", "subscriptionId", 3, "value"], ["class", "form-check", "formGroupName", "frequencies", 4, "ngFor", "ngForOf"], [3, "type", 4, "ngIf"], ["formGroupName", "frequencies", 1, "form-check"], ["type", "checkbox", 1, "form-check-input", 3, "id", "formControlName"], [1, "form-check-label", 3, "for"], [3, "type"], [1, "text-muted"], [1, "fas", "fa-circle-notch", "fa-spin"]],
      template: function SubscriptionModalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](0, SubscriptionModalComponent_form_0_Template, 28, 24, "form", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.subscriptionForm);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_24__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormGroupName, _object_collection_shared_badges_type_badge_themed_type_badge_component__WEBPACK_IMPORTED_MODULE_9__.ThemedTypeBadgeComponent, _angular_common__WEBPACK_IMPORTED_MODULE_24__.NgFor, _alert_alert_component__WEBPACK_IMPORTED_MODULE_5__.AlertComponent, _angular_common__WEBPACK_IMPORTED_MODULE_24__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_24__.KeyValuePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__.TranslatePipe, _btn_disabled_directive__WEBPACK_IMPORTED_MODULE_6__.BtnDisabledDirective],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1YnNjcmlwdGlvbi1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQSIsImZpbGUiOiJzdWJzY3JpcHRpb24tbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqLyJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL3N1YnNjcmlwdGlvbnMvc3Vic2NyaXB0aW9uLW1vZGFsL3N1YnNjcmlwdGlvbi1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBLGdsQkFBZ2xCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi8iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 62355:
/*!********************************************************************!*\
  !*** ./src/app/shared/subscriptions/subscriptions-data.service.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SubscriptionsDataService: () => (/* binding */ SubscriptionsDataService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 78374);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 84975);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 85687);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs/operators */ 64785);
/* harmony import */ var src_app_core_shared_request_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/shared/request.operators */ 91098);
/* harmony import */ var _core_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/breadcrumbs/dso-name.service */ 96526);
/* harmony import */ var _core_cache_builders_remote_data_build_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/cache/builders/remote-data-build.service */ 76799);
/* harmony import */ var _core_cache_models_request_param_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/cache/models/request-param.model */ 53954);
/* harmony import */ var _core_cache_object_cache_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/cache/object-cache.service */ 41684);
/* harmony import */ var _core_data_base_delete_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/data/base/delete-data */ 13617);
/* harmony import */ var _core_data_base_identifiable_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/data/base/identifiable-data.service */ 63897);
/* harmony import */ var _core_data_base_search_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/data/base/search-data */ 35108);
/* harmony import */ var _core_data_dso_change_analyzer_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/data/dso-change-analyzer.service */ 12598);
/* harmony import */ var _core_data_find_list_options_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/data/find-list-options.model */ 41023);
/* harmony import */ var _core_data_request_models__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/data/request.models */ 44446);
/* harmony import */ var _core_data_request_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../core/data/request.service */ 32473);
/* harmony import */ var _core_shared_hal_endpoint_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../core/shared/hal-endpoint.service */ 4910);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../core/shared/operators */ 55757);
/* harmony import */ var _empty_util__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../empty.util */ 82777);
/* harmony import */ var _notifications_notifications_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../notifications/notifications.service */ 69472);
/* harmony import */ var _utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../utils/follow-link-config.model */ 67600);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common/http */ 94485);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ngrx/store */ 99797);






























/**
 * Provides methods to retrieve subscription resources from the REST API related CRUD actions.
 */
class SubscriptionsDataService extends _core_data_base_identifiable_data_service__WEBPACK_IMPORTED_MODULE_6__.IdentifiableDataService {
  constructor(comparator, http, notificationsService, requestService, rdbService, store, objectCache, halService, nameService) {
    super('subscriptions', requestService, rdbService, objectCache, halService);
    this.comparator = comparator;
    this.http = http;
    this.notificationsService = notificationsService;
    this.requestService = requestService;
    this.rdbService = rdbService;
    this.store = store;
    this.objectCache = objectCache;
    this.halService = halService;
    this.nameService = nameService;
    this.findByEpersonLinkPath = 'findByEPerson';
    this.searchData = new _core_data_base_search_data__WEBPACK_IMPORTED_MODULE_7__.SearchDataImpl(this.linkPath, requestService, rdbService, objectCache, halService, this.responseMsToLive);
    this.deleteData = new _core_data_base_delete_data__WEBPACK_IMPORTED_MODULE_5__.DeleteDataImpl(this.linkPath, requestService, rdbService, objectCache, halService, notificationsService, this.responseMsToLive, this.constructIdEndpoint);
  }
  /**
   * Get subscriptions for a given item or community or collection & eperson.
   *
   * @param eperson The eperson to search for
   * @param uuid The uuid of the dsobjcet to search for
   */
  getSubscriptionsByPersonDSO(eperson, uuid) {
    const optionsWithObject = Object.assign(new _core_data_find_list_options_model__WEBPACK_IMPORTED_MODULE_9__.FindListOptions(), {
      searchParams: [new _core_cache_models_request_param_model__WEBPACK_IMPORTED_MODULE_3__.RequestParam('resource', uuid), new _core_cache_models_request_param_model__WEBPACK_IMPORTED_MODULE_3__.RequestParam('eperson_id', eperson)]
    });
    return this.searchData.searchBy('findByEPersonAndDso', optionsWithObject, false, true);
  }
  /**
   * Create a subscription for a given item or community or collection.
   *
   * @param subscription The subscription to create
   * @param ePerson The ePerson to create for
   * @param uuid The uuid of the dsobjcet to create for
   */
  createSubscription(subscription, ePerson, uuid) {
    return this.halService.getEndpoint(this.linkPath).pipe((0,_empty_util__WEBPACK_IMPORTED_MODULE_14__.isNotEmptyOperator)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.map)(endpointUrl => `${endpointUrl}?resource=${uuid}&eperson_id=${ePerson}`), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.map)(endpointURL => new _core_data_request_models__WEBPACK_IMPORTED_MODULE_10__.CreateRequest(this.requestService.generateRequestId(), endpointURL, JSON.stringify(subscription))), (0,src_app_core_shared_request_operators__WEBPACK_IMPORTED_MODULE_0__.sendRequest)(this.requestService), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.switchMap)(restRequest => this.rdbService.buildFromRequestUUID(restRequest.uuid)), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_13__.getFirstCompletedRemoteData)());
  }
  /**
   * Update a subscription for a given item or community or collection.
   *
   * @param subscription The subscription to update
   * @param ePerson The ePerson to update for
   * @param uuid The uuid of the dsobjcet to update for
   */
  updateSubscription(subscription, ePerson, uuid) {
    return this.halService.getEndpoint(this.linkPath).pipe((0,_empty_util__WEBPACK_IMPORTED_MODULE_14__.isNotEmptyOperator)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.map)(endpointUrl => `${endpointUrl}/${subscription.id}?resource=${uuid}&eperson_id=${ePerson}`), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.map)(endpointURL => new _core_data_request_models__WEBPACK_IMPORTED_MODULE_10__.PutRequest(this.requestService.generateRequestId(), endpointURL, JSON.stringify(subscription))), (0,src_app_core_shared_request_operators__WEBPACK_IMPORTED_MODULE_0__.sendRequest)(this.requestService), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.switchMap)(restRequest => this.rdbService.buildFromRequestUUID(restRequest.uuid)), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_13__.getFirstCompletedRemoteData)());
  }
  /**
   * Deletes the subscription with a give id
   *
   * @param id  the id of Subscription to delete
   */
  deleteSubscription(id) {
    return this.halService.getEndpoint(this.linkPath).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.filter)(href => (0,_empty_util__WEBPACK_IMPORTED_MODULE_14__.isNotEmpty)(href)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.switchMap)(endpointUrl => this.deleteData.delete(id)), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_13__.getFirstCompletedRemoteData)());
  }
  /**
   * Retrieves the list of subscription with {@link dSpaceObject} and {@link ePerson}
   *
   * @param options                     options for the find all request
   */
  findAllSubscriptions(options) {
    return this.findAllData.findAll(options, true, true, (0,_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_16__.followLink)('resource'), (0,_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_16__.followLink)('eperson'));
  }
  /**
   * Retrieves the list of subscription with {@link dSpaceObject} and {@link ePerson}
   *
   * @param ePersonId  The eperson id
   * @param options    The options for the find all request
   */
  findByEPerson(ePersonId, options) {
    const optionsWithObject = Object.assign(new _core_data_find_list_options_model__WEBPACK_IMPORTED_MODULE_9__.FindListOptions(), options, {
      searchParams: [new _core_cache_models_request_param_model__WEBPACK_IMPORTED_MODULE_3__.RequestParam('uuid', ePersonId)]
    });
    // return this.searchData.searchBy(this.findByEpersonLinkPath, optionsWithObject, true, true, followLink('dSpaceObject'), followLink('ePerson'));
    return this.getEndpoint().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.map)(href => `${href}/search/${this.findByEpersonLinkPath}`), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.switchMap)(href => this.findListByHref(href, optionsWithObject, false, true, (0,_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_16__.followLink)('resource'), (0,_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_16__.followLink)('eperson'))));
  }
  static {
    this.ɵfac = function SubscriptionsDataService_Factory(t) {
      return new (t || SubscriptionsDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵinject"](_core_data_dso_change_analyzer_service__WEBPACK_IMPORTED_MODULE_8__.DSOChangeAnalyzer), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_23__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵinject"](_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_15__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵinject"](_core_data_request_service__WEBPACK_IMPORTED_MODULE_11__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵinject"](_core_cache_builders_remote_data_build_service__WEBPACK_IMPORTED_MODULE_2__.RemoteDataBuildService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_24__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵinject"](_core_cache_object_cache_service__WEBPACK_IMPORTED_MODULE_4__.ObjectCacheService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵinject"](_core_shared_hal_endpoint_service__WEBPACK_IMPORTED_MODULE_12__.HALEndpointService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵinject"](_core_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_1__.DSONameService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineInjectable"]({
      token: SubscriptionsDataService,
      factory: SubscriptionsDataService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=default-src_app_shared_subscriptions_subscription-modal_subscription-modal_component_ts.js.map