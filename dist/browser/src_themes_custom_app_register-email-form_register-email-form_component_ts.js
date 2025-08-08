"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_themes_custom_app_register-email-form_register-email-form_component_ts"],{

/***/ 11995:
/*!************************************************************************************!*\
  !*** ./src/themes/custom/app/register-email-form/register-email-form.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegisterEmailFormComponent: () => (/* binding */ RegisterEmailFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 56106);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var src_app_shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/alert/alert.component */ 16292);
/* harmony import */ var src_app_shared_google_recaptcha_google_recaptcha_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/google-recaptcha/google-recaptcha.component */ 40788);
/* harmony import */ var _app_register_email_form_register_email_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app/register-email-form/register-email-form.component */ 48500);
/* harmony import */ var _app_shared_btn_disabled_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../app/shared/btn-disabled.directive */ 60456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 90310);










const _c0 = a0 => ({
  domains: a0
});
function RegisterEmailFormComponent_p_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 2, ctx_r0.MESSAGE_PREFIX + ".info.maildomain"), " ", ctx_r0.validMailDomains.join(", "), " ");
  }
}
function RegisterEmailFormComponent_div_17_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, ctx_r0.MESSAGE_PREFIX + ".email.error.required"), " ");
  }
}
function RegisterEmailFormComponent_div_17_span_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](2, 1, ctx_r0.MESSAGE_PREFIX + ".email.error.not-valid-domain", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](4, _c0, ctx_r0.validMailDomains.join(", "))), " ");
  }
}
function RegisterEmailFormComponent_div_17_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, RegisterEmailFormComponent_div_17_span_2_ng_container_3_Template, 3, 6, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 2, ctx_r0.MESSAGE_PREFIX + ".email.error.not-email-form"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.validMailDomains.length > 0);
  }
}
function RegisterEmailFormComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, RegisterEmailFormComponent_div_17_span_1_Template, 3, 3, "span", 14)(2, RegisterEmailFormComponent_div_17_span_2_Template, 4, 4, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.email.errors && ctx_r0.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.email.errors && (ctx_r0.email.errors.pattern && ctx_r0.typeRequest === ctx_r0.TYPE_REQUEST_REGISTER || ctx_r0.email.errors.email));
  }
}
function RegisterEmailFormComponent_ds_alert_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ds-alert", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p", 20)(4, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RegisterEmailFormComponent_ds_alert_21_Template_a_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r0.klaroService.showSettings());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("type", ctx_r0.AlertTypeEnum.Warning);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 3, ctx_r0.MESSAGE_PREFIX + ".google-recaptcha.must-accept-cookies"), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 5, ctx_r0.MESSAGE_PREFIX + ".google-recaptcha.open-cookie-settings"));
  }
}
function RegisterEmailFormComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 22)(1, "ds-google-recaptcha", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("executeRecaptcha", function RegisterEmailFormComponent_div_22_Template_ds_google_recaptcha_executeRecaptcha_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r0.register($event));
    })("checkboxChecked", function RegisterEmailFormComponent_div_22_Template_ds_google_recaptcha_checkboxChecked_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r0.onCheckboxChecked($event));
    })("showNotification", function RegisterEmailFormComponent_div_22_Template_ds_google_recaptcha_showNotification_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r0.showNotification($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("captchaMode", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, ctx_r0.googleRecaptchaService.captchaMode()));
  }
}
function RegisterEmailFormComponent_ng_container_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RegisterEmailFormComponent_ng_container_24_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r0.register());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dsBtnDisabled", ctx_r0.form.invalid || ctx_r0.registrationVerification && !ctx_r0.isRecaptchaCookieAccepted() || ctx_r0.disableUntilChecked);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 2, ctx_r0.MESSAGE_PREFIX + ".submit"), " ");
  }
}
function RegisterEmailFormComponent_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RegisterEmailFormComponent_ng_template_27_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r0.executeRecaptcha());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dsBtnDisabled", ctx_r0.form.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 2, ctx_r0.MESSAGE_PREFIX + ".submit"), " ");
  }
}
class RegisterEmailFormComponent extends _app_register_email_form_register_email_form_component__WEBPACK_IMPORTED_MODULE_2__.RegisterEmailFormComponent {
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵRegisterEmailFormComponent_BaseFactory;
      return function RegisterEmailFormComponent_Factory(t) {
        return (ɵRegisterEmailFormComponent_BaseFactory || (ɵRegisterEmailFormComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetInheritedFactory"](RegisterEmailFormComponent)))(t || RegisterEmailFormComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: RegisterEmailFormComponent,
      selectors: [["ds-themed-register-email-form"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
      decls: 29,
      vars: 33,
      consts: [["v2Invisible", ""], [1, "container"], [4, "ngIf"], [3, "formGroup"], [1, "form-group"], [1, "row"], [1, "col-12"], ["for", "email", 1, "font-weight-bold"], ["type", "text", "id", "email", "formControlName", "email", 3, "className"], ["class", "invalid-feedback show-feedback", 4, "ngIf"], [3, "type", 4, "ngIf"], ["class", "my-3", 4, "ngIf"], [4, "ngIf", "ngIfElse"], [1, "invalid-feedback", "show-feedback"], ["id", "email-errors-required", 4, "ngIf"], ["id", "email-error-not-valid", 4, "ngIf"], ["id", "email-errors-required"], ["id", "email-error-not-valid"], [3, "type"], [1, "m-0", 3, "innerHTML"], [1, "m-0"], ["href", "javascript:void(0);", 3, "click"], [1, "my-3"], [3, "executeRecaptcha", "checkboxChecked", "showNotification", "captchaMode"], [1, "btn", "btn-primary", 3, "click", "dsBtnDisabled"]],
      template: function RegisterEmailFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1)(1, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, RegisterEmailFormComponent_p_7_Template, 3, 4, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "form", 3)(9, "div", 4)(10, "div", 5)(11, "div", 6)(12, "label", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](14, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](16, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, RegisterEmailFormComponent_div_17_Template, 3, 2, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](20, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, RegisterEmailFormComponent_ds_alert_21_Template, 7, 7, "ds-alert", 10)(22, RegisterEmailFormComponent_div_22_Template, 3, 3, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](23, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, RegisterEmailFormComponent_ng_container_24_Template, 4, 4, "ng-container", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](25, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](26, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, RegisterEmailFormComponent_ng_template_27_Template, 3, 4, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          const v2Invisible_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](28);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 17, ctx.MESSAGE_PREFIX + ".header"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 19, ctx.MESSAGE_PREFIX + ".info"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.validMailDomains.length !== 0 && ctx.typeRequest === ctx.TYPE_REQUEST_REGISTER);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"]("ng-invalid");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.form);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](14, 21, ctx.MESSAGE_PREFIX + ".email"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("className", ctx.email.invalid && (ctx.email.dirty || ctx.email.touched) ? "form-control is-invalid" : "form-control");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](16, 23, ctx.MESSAGE_PREFIX + ".aria.label"))("aria-describedby", !ctx.email.errors ? "" : ctx.email.errors.required ? "email-errors-required" : "email-error-not-valid")("aria-invalid", ctx.email.invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.email.invalid && (ctx.email.dirty || ctx.email.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](20, 25, ctx.MESSAGE_PREFIX + ".email.hint"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.registrationVerification && !ctx.isRecaptchaCookieAccepted());
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isRecaptchaCookieAccepted() && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](23, 27, ctx.googleRecaptchaService.captchaVersion()) === "v2");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.registrationVerification || _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](25, 29, ctx.googleRecaptchaService.captchaVersion()) !== "v2" && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](26, 31, ctx.googleRecaptchaService.captchaMode()) === "invisible")("ngIfElse", v2Invisible_r6);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, src_app_shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_0__.AlertComponent, src_app_shared_google_recaptcha_google_recaptcha_component__WEBPACK_IMPORTED_MODULE_1__.GoogleRecaptchaComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe, _app_shared_btn_disabled_directive__WEBPACK_IMPORTED_MODULE_3__.BtnDisabledDirective],
      encapsulation: 2
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_themes_custom_app_register-email-form_register-email-form_component_ts.js.map