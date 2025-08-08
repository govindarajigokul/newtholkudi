(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_app_register-page_register-page-routes_ts"],{

/***/ 24475:
/*!****************************************************************************!*\
  !*** ./src/app/core/end-user-agreement/end-user-agreement-cookie.guard.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   endUserAgreementCookieGuard: () => (/* binding */ endUserAgreementCookieGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 17796);
/* harmony import */ var _end_user_agreement_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./end-user-agreement.guard */ 17366);
/* harmony import */ var _end_user_agreement_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./end-user-agreement.service */ 3636);




/**
 * Guard for preventing unauthorized access to certain pages
 * requiring the end user agreement to have been accepted in a cookie
 */
const endUserAgreementCookieGuard = (0,_end_user_agreement_guard__WEBPACK_IMPORTED_MODULE_0__.endUserAgreementGuard)(() => {
  const endUserAgreementService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_end_user_agreement_service__WEBPACK_IMPORTED_MODULE_1__.EndUserAgreementService);
  return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(endUserAgreementService.isCookieAccepted());
});

/***/ }),

/***/ 85442:
/*!**************************************************************************!*\
  !*** ./src/app/register-page/create-profile/create-profile.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateProfileComponent: () => (/* binding */ CreateProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 56106);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 88280);
/* harmony import */ var _core_auth_auth_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/auth/auth.actions */ 59836);
/* harmony import */ var _core_end_user_agreement_end_user_agreement_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/end-user-agreement/end-user-agreement.service */ 3636);
/* harmony import */ var _core_eperson_eperson_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/eperson/eperson-data.service */ 74449);
/* harmony import */ var _core_eperson_models_eperson_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/eperson/models/eperson.model */ 26349);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/shared/operators */ 55757);
/* harmony import */ var _profile_page_profile_page_security_form_profile_page_security_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../profile-page/profile-page-security-form/profile-page-security-form.component */ 13738);
/* harmony import */ var _shared_btn_disabled_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/btn-disabled.directive */ 60456);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/empty.util */ 82777);
/* harmony import */ var _shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/notifications/notifications.service */ 69472);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngrx/store */ 99797);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 14354);
























function CreateProfileComponent_div_0_div_25_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, "register-page.create-profile.identification.first-name.error"), " ");
  }
}
function CreateProfileComponent_div_0_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, CreateProfileComponent_div_0_div_25_span_1_Template, 3, 3, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.firstName.errors && ctx_r1.firstName.errors.required);
  }
}
function CreateProfileComponent_div_0_div_32_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, "register-page.create-profile.identification.last-name.error"), " ");
  }
}
function CreateProfileComponent_div_0_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, CreateProfileComponent_div_0_div_32_span_1_Template, 3, 3, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.lastName.errors && ctx_r1.lastName.errors.required);
  }
}
function CreateProfileComponent_div_0_option_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const lang_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", lang_r3.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](lang_r3.label);
  }
}
function CreateProfileComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 1)(1, "h3", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 3)(5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 5)(9, "div", 6)(10, "div", 7)(11, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](16, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "form", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngSubmit", function CreateProfileComponent_div_0_Template_form_ngSubmit_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.submitEperson());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "div", 11)(19, "div", 6)(20, "div", 7)(21, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](24, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](25, CreateProfileComponent_div_0_div_25_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "div", 6)(27, "div", 7)(28, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](30, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](31, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](32, CreateProfileComponent_div_0_div_32_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](33, "div", 6)(34, "div", 7)(35, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](37, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](38, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](39, "div", 6)(40, "div", 7)(41, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](43, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](44, "select", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](45, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](46, CreateProfileComponent_div_0_option_46_Template, 2, 2, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](47, "div", 3)(48, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](50, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](51, "div", 5)(52, "ds-profile-page-security-form", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("isInvalid", function CreateProfileComponent_div_0_Template_ds_profile_page_security_form_isInvalid_52_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.setInValid($event));
    })("passwordValue", function CreateProfileComponent_div_0_Template_ds_profile_page_security_form_passwordValue_52_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.setPasswordValue($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](53, "div", 6)(54, "div", 7)(55, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CreateProfileComponent_div_0_Template_button_click_55_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.submitEperson());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](57, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 22, "register-page.create-profile.header"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](7, 24, "register-page.create-profile.identification.header"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](13, 26, "register-page.create-profile.identification.email"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](16, 28, ctx_r1.registration$).email);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassMap"]("ng-invalid");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx_r1.userInfoForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](23, 30, "register-page.create-profile.identification.first-name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("className", ctx_r1.firstName.invalid && (ctx_r1.firstName.dirty || ctx_r1.firstName.touched) ? "form-control is-invalid" : "form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.firstName.invalid && (ctx_r1.firstName.dirty || ctx_r1.firstName.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](30, 32, "register-page.create-profile.identification.last-name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("className", ctx_r1.lastName.invalid && (ctx_r1.lastName.dirty || ctx_r1.lastName.touched) ? "form-control is-invalid" : "form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.lastName.invalid && (ctx_r1.lastName.dirty || ctx_r1.lastName.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](37, 34, "register-page.create-profile.identification.contact"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](43, 36, "register-page.create-profile.identification.language"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r1.activeLangs);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](50, 38, "register-page.create-profile.security.header"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("passwordCanBeEmpty", false)("FORM_PREFIX", "register-page.create-profile.security.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("dsBtnDisabled", ctx_r1.isInValidPassword || ctx_r1.userInfoForm.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](57, 40, "register-page.create-profile.submit"));
  }
}
/**
 * Component that renders the create profile page to be used by a user registering through a token
 */
class CreateProfileComponent {
  constructor(translateService, ePersonDataService, store, router, route, formBuilder, notificationsService, endUserAgreementService) {
    this.translateService = translateService;
    this.ePersonDataService = ePersonDataService;
    this.store = store;
    this.router = router;
    this.route = route;
    this.formBuilder = formBuilder;
    this.notificationsService = notificationsService;
    this.endUserAgreementService = endUserAgreementService;
    this.isInValidPassword = true;
    /**
     * Prefix for the notification messages of this security form
     */
    this.NOTIFICATIONS_PREFIX = 'register-page.create-profile.submit.';
  }
  ngOnInit() {
    this.registration$ = this.route.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(data => data.registration), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_5__.getFirstSucceededRemoteDataPayload)());
    this.registration$.subscribe(registration => {
      this.email = registration.email;
      this.token = registration.token;
    });
    this.activeLangs = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.languages.filter(MyLangConfig => MyLangConfig.active === true);
    this.userInfoForm = this.formBuilder.group({
      firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.UntypedFormControl('', {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]
      }),
      lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.UntypedFormControl('', {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]
      }),
      contactPhone: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.UntypedFormControl(''),
      language: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.UntypedFormControl('')
    });
  }
  /**
   * Sets the validity of the password based on a value emitted from the form
   * @param $event
   */
  setInValid($event) {
    this.isInValidPassword = $event || (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_8__.isEmpty)(this.password);
  }
  /**
   * Sets the value of the password based on a value emitted from the form
   * @param $event
   */
  setPasswordValue($event) {
    this.password = $event;
    this.isInValidPassword = this.isInValidPassword || (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_8__.isEmpty)(this.password);
  }
  get firstName() {
    return this.userInfoForm.get('firstName');
  }
  get lastName() {
    return this.userInfoForm.get('lastName');
  }
  get contactPhone() {
    return this.userInfoForm.get('contactPhone');
  }
  get language() {
    return this.userInfoForm.get('language');
  }
  /**
   * Submits the eperson to the service to be created.
   * The submission will not be made when the form or the password is not valid.
   */
  submitEperson() {
    if (!(this.userInfoForm.invalid || this.isInValidPassword)) {
      const values = {
        metadata: {
          'eperson.firstname': [{
            value: this.firstName.value
          }],
          'eperson.lastname': [{
            value: this.lastName.value
          }],
          'eperson.phone': [{
            value: this.contactPhone.value
          }],
          'eperson.language': [{
            value: this.language.value
          }]
        },
        email: this.email,
        password: this.password,
        canLogIn: true,
        requireCertificate: false
      };
      // If the End User Agreement cookie is accepted, add end-user agreement metadata to the user
      if (this.endUserAgreementService.isCookieAccepted()) {
        values.metadata[_core_end_user_agreement_end_user_agreement_service__WEBPACK_IMPORTED_MODULE_2__.END_USER_AGREEMENT_METADATA_FIELD] = [{
          value: String(true)
        }];
        this.endUserAgreementService.removeCookieAccepted();
      }
      const eperson = Object.assign(new _core_eperson_models_eperson_model__WEBPACK_IMPORTED_MODULE_4__.EPerson(), values);
      this.ePersonDataService.createEPersonForToken(eperson, this.token).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_5__.getFirstCompletedRemoteData)()).subscribe(rd => {
        if (rd.hasSucceeded) {
          this.notificationsService.success(this.translateService.get(this.NOTIFICATIONS_PREFIX + 'success.head'), this.translateService.get(this.NOTIFICATIONS_PREFIX + 'success.content'));
          this.store.dispatch(new _core_auth_auth_actions__WEBPACK_IMPORTED_MODULE_1__.AuthenticateAction(this.email, this.password));
          this.router.navigate(['/home']);
        } else {
          this.notificationsService.error(this.translateService.get(this.NOTIFICATIONS_PREFIX + 'error.head'), rd.errorMessage);
        }
      });
    }
  }
  static {
    this.ɵfac = function CreateProfileComponent_Factory(t) {
      return new (t || CreateProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_eperson_eperson_data_service__WEBPACK_IMPORTED_MODULE_3__.EPersonDataService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_14__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_12__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_9__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_end_user_agreement_end_user_agreement_service__WEBPACK_IMPORTED_MODULE_2__.EndUserAgreementService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
      type: CreateProfileComponent,
      selectors: [["ds-base-create-profile"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 3,
      consts: [["class", "container", 4, "ngIf"], [1, "container"], [1, "mb-4"], [1, "card", "mb-4"], [1, "card-header"], [1, "card-body"], [1, "row"], [1, "col-12"], ["for", "email", 1, "font-weight-bold", "mr-4"], ["id", "email"], [3, "ngSubmit", "formGroup"], [1, "form-group"], ["for", "firstName"], ["type", "text", "id", "firstName", "formControlName", "firstName", 3, "className"], ["class", "invalid-feedback show-feedback", 4, "ngIf"], ["for", "lastName"], ["id", "lastName", "formControlName", "lastName", 3, "className"], ["for", "contactPhone"], ["id", "contactPhone", "formControlName", "contactPhone", 1, "form-control"], ["for", "language"], ["id", "language", "formControlName", "language", 1, "form-control"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], [3, "isInvalid", "passwordValue", "passwordCanBeEmpty", "FORM_PREFIX"], [1, "btn", "btn-default", "btn-primary", 3, "click", "dsBtnDisabled"], [1, "invalid-feedback", "show-feedback"], [4, "ngIf"]],
      template: function CreateProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](0, CreateProfileComponent_div_0_Template, 58, 42, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](1, "async");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](1, 1, ctx.registration$));
        }
      },
      dependencies: [_profile_page_profile_page_security_form_profile_page_security_form_component__WEBPACK_IMPORTED_MODULE_6__.ProfilePageSecurityFormComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_16__.AsyncPipe, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, _shared_btn_disabled_directive__WEBPACK_IMPORTED_MODULE_7__.BtnDisabledDirective],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1wcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBIiwiZmlsZSI6ImNyZWF0ZS1wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi8iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcmVnaXN0ZXItcGFnZS9jcmVhdGUtcHJvZmlsZS9jcmVhdGUtcHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBLG9rQkFBb2tCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi8iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 64452:
/*!*********************************************************************************!*\
  !*** ./src/app/register-page/create-profile/themed-create-profile.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemedCreateProfileComponent: () => (/* binding */ ThemedCreateProfileComponent)
/* harmony export */ });
/* harmony import */ var _shared_theme_support_themed_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/theme-support/themed.component */ 8886);
/* harmony import */ var _create_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-profile.component */ 85442);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);



const _c0 = ["*"];
function ThemedCreateProfileComponent_ng_template_0_Template(rf, ctx) {}
/**
 * Themed wrapper for CreateProfileComponent
 */
class ThemedCreateProfileComponent extends _shared_theme_support_themed_component__WEBPACK_IMPORTED_MODULE_0__.ThemedComponent {
  getComponentName() {
    return 'CreateProfileComponent';
  }
  importThemedComponent(themeName) {
    return __webpack_require__(85748)(`./${themeName}/app/register-page/create-profile/create-profile.component`);
  }
  importUnthemedComponent() {
    return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./create-profile.component */ 85442));
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵThemedCreateProfileComponent_BaseFactory;
      return function ThemedCreateProfileComponent_Factory(t) {
        return (ɵThemedCreateProfileComponent_BaseFactory || (ɵThemedCreateProfileComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](ThemedCreateProfileComponent)))(t || ThemedCreateProfileComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ThemedCreateProfileComponent,
      selectors: [["ds-create-profile"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      ngContentSelectors: _c0,
      decls: 5,
      vars: 0,
      consts: [["vcr", ""], ["content", ""]],
      template: function ThemedCreateProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ThemedCreateProfileComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
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

/***/ 50974:
/*!**************************************************************************!*\
  !*** ./src/app/register-page/register-email/register-email.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegisterEmailComponent: () => (/* binding */ RegisterEmailComponent)
/* harmony export */ });
/* harmony import */ var src_app_register_email_form_themed_registry_email_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/register-email-form/themed-registry-email-form.component */ 96134);
/* harmony import */ var _register_email_form_register_email_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../register-email-form/register-email-form.component */ 48500);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);



/**
 * Component responsible the email registration step when registering as a new user
 */
class RegisterEmailComponent {
  constructor() {
    this.typeRequest = _register_email_form_register_email_form_component__WEBPACK_IMPORTED_MODULE_1__.TYPE_REQUEST_REGISTER;
  }
  static {
    this.ɵfac = function RegisterEmailComponent_Factory(t) {
      return new (t || RegisterEmailComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: RegisterEmailComponent,
      selectors: [["ds-base-register-email"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 1,
      vars: 2,
      consts: [[3, "MESSAGE_PREFIX", "typeRequest"]],
      template: function RegisterEmailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "ds-register-email-form", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("MESSAGE_PREFIX", "register-page.registration")("typeRequest", ctx.typeRequest);
        }
      },
      dependencies: [src_app_register_email_form_themed_registry_email_form_component__WEBPACK_IMPORTED_MODULE_0__.ThemedRegisterEmailFormComponent],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLWVtYWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBIiwiZmlsZSI6InJlZ2lzdGVyLWVtYWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi8iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcmVnaXN0ZXItcGFnZS9yZWdpc3Rlci1lbWFpbC9yZWdpc3Rlci1lbWFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBLG9rQkFBb2tCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi8iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 42916:
/*!*********************************************************************************!*\
  !*** ./src/app/register-page/register-email/themed-register-email.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemedRegisterEmailComponent: () => (/* binding */ ThemedRegisterEmailComponent)
/* harmony export */ });
/* harmony import */ var _shared_theme_support_themed_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/theme-support/themed.component */ 8886);
/* harmony import */ var _register_email_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register-email.component */ 50974);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);



const _c0 = ["*"];
function ThemedRegisterEmailComponent_ng_template_0_Template(rf, ctx) {}
/**
 * Themed wrapper for RegisterEmailComponent
 */
class ThemedRegisterEmailComponent extends _shared_theme_support_themed_component__WEBPACK_IMPORTED_MODULE_0__.ThemedComponent {
  getComponentName() {
    return 'RegisterEmailComponent';
  }
  importThemedComponent(themeName) {
    return __webpack_require__(72200)(`./${themeName}/app/register-page/register-email/register-email.component`);
  }
  importUnthemedComponent() {
    return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./register-email.component */ 50974));
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵThemedRegisterEmailComponent_BaseFactory;
      return function ThemedRegisterEmailComponent_Factory(t) {
        return (ɵThemedRegisterEmailComponent_BaseFactory || (ɵThemedRegisterEmailComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](ThemedRegisterEmailComponent)))(t || ThemedRegisterEmailComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ThemedRegisterEmailComponent,
      selectors: [["ds-register-email"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      ngContentSelectors: _c0,
      decls: 5,
      vars: 0,
      consts: [["vcr", ""], ["content", ""]],
      template: function ThemedRegisterEmailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ThemedRegisterEmailComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
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

/***/ 66108:
/*!*******************************************************!*\
  !*** ./src/app/register-page/register-page-routes.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ROUTES: () => (/* binding */ ROUTES)
/* harmony export */ });
/* harmony import */ var _core_end_user_agreement_end_user_agreement_cookie_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/end-user-agreement/end-user-agreement-cookie.guard */ 24475);
/* harmony import */ var _create_profile_themed_create_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-profile/themed-create-profile.component */ 64452);
/* harmony import */ var _register_email_themed_register_email_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register-email/themed-register-email.component */ 42916);
/* harmony import */ var _registration_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./registration.guard */ 15694);




const ROUTES = [{
  path: '',
  component: _register_email_themed_register_email_component__WEBPACK_IMPORTED_MODULE_2__.ThemedRegisterEmailComponent,
  data: {
    title: 'register-email.title'
  }
}, {
  path: ':token',
  component: _create_profile_themed_create_profile_component__WEBPACK_IMPORTED_MODULE_1__.ThemedCreateProfileComponent,
  canActivate: [_registration_guard__WEBPACK_IMPORTED_MODULE_3__.registrationGuard, _core_end_user_agreement_end_user_agreement_cookie_guard__WEBPACK_IMPORTED_MODULE_0__.endUserAgreementCookieGuard]
}];

/***/ }),

/***/ 85748:
/*!**********************************************************************************************************************!*\
  !*** ./src/themes/ lazy ^\.\/.*\/app\/register\-page\/create\-profile\/create\-profile\.component$ namespace object ***!
  \**********************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./custom/app/register-page/create-profile/create-profile.component": [
		83697,
		"src_themes_custom_app_register-page_create-profile_create-profile_component_ts"
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
webpackAsyncContext.id = 85748;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 72200:
/*!**********************************************************************************************************************!*\
  !*** ./src/themes/ lazy ^\.\/.*\/app\/register\-page\/register\-email\/register\-email\.component$ namespace object ***!
  \**********************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./custom/app/register-page/register-email/register-email.component": [
		92433,
		"src_themes_custom_app_register-page_register-email_register-email_component_ts"
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
webpackAsyncContext.id = 72200;
module.exports = webpackAsyncContext;

/***/ })

}]);
//# sourceMappingURL=src_app_register-page_register-page-routes_ts.js.map