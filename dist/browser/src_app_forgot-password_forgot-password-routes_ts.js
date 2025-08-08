(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_app_forgot-password_forgot-password-routes_ts"],{

/***/ 83648:
/*!*********************************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password-email/forgot-email.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ForgotEmailComponent: () => (/* binding */ ForgotEmailComponent)
/* harmony export */ });
/* harmony import */ var src_app_register_email_form_themed_registry_email_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/register-email-form/themed-registry-email-form.component */ 96134);
/* harmony import */ var _register_email_form_register_email_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../register-email-form/register-email-form.component */ 48500);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);



/**
 * Component responsible the forgot password email step
 */
class ForgotEmailComponent {
  constructor() {
    this.typeRequest = _register_email_form_register_email_form_component__WEBPACK_IMPORTED_MODULE_1__.TYPE_REQUEST_FORGOT;
  }
  static {
    this.ɵfac = function ForgotEmailComponent_Factory(t) {
      return new (t || ForgotEmailComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ForgotEmailComponent,
      selectors: [["ds-base-forgot-email"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 1,
      vars: 2,
      consts: [[3, "MESSAGE_PREFIX", "typeRequest"]],
      template: function ForgotEmailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "ds-register-email-form", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("MESSAGE_PREFIX", "forgot-email.form")("typeRequest", ctx.typeRequest);
        }
      },
      dependencies: [src_app_register_email_form_themed_registry_email_form_component__WEBPACK_IMPORTED_MODULE_0__.ThemedRegisterEmailFormComponent],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmdvdC1lbWFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQSIsImZpbGUiOiJmb3Jnb3QtZW1haWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqLyJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC1lbWFpbC9mb3Jnb3QtZW1haWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQSxna0JBQWdrQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 40602:
/*!****************************************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password-email/themed-forgot-email.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemedForgotEmailComponent: () => (/* binding */ ThemedForgotEmailComponent)
/* harmony export */ });
/* harmony import */ var _shared_theme_support_themed_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/theme-support/themed.component */ 8886);
/* harmony import */ var _forgot_email_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgot-email.component */ 83648);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);



const _c0 = ["*"];
function ThemedForgotEmailComponent_ng_template_0_Template(rf, ctx) {}
/**
 * Themed wrapper for ForgotEmailComponent
 */
class ThemedForgotEmailComponent extends _shared_theme_support_themed_component__WEBPACK_IMPORTED_MODULE_0__.ThemedComponent {
  getComponentName() {
    return 'ForgotEmailComponent';
  }
  importThemedComponent(themeName) {
    return __webpack_require__(45265)(`./${themeName}/app/forgot-password/forgot-password-email/forgot-email.component`);
  }
  importUnthemedComponent() {
    return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./forgot-email.component */ 83648));
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵThemedForgotEmailComponent_BaseFactory;
      return function ThemedForgotEmailComponent_Factory(t) {
        return (ɵThemedForgotEmailComponent_BaseFactory || (ɵThemedForgotEmailComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](ThemedForgotEmailComponent)))(t || ThemedForgotEmailComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ThemedForgotEmailComponent,
      selectors: [["ds-forgot-email"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      ngContentSelectors: _c0,
      decls: 5,
      vars: 0,
      consts: [["vcr", ""], ["content", ""]],
      template: function ThemedForgotEmailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ThemedForgotEmailComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
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

/***/ 33938:
/*!****************************************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password-form/forgot-password-form.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ForgotPasswordFormComponent: () => (/* binding */ ForgotPasswordFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var _core_auth_auth_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/auth/auth.actions */ 59836);
/* harmony import */ var _core_eperson_eperson_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/eperson/eperson-data.service */ 74449);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/shared/operators */ 55757);
/* harmony import */ var _profile_page_profile_page_security_form_profile_page_security_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../profile-page/profile-page-security-form/profile-page-security-form.component */ 13738);
/* harmony import */ var _shared_btn_disabled_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/btn-disabled.directive */ 60456);
/* harmony import */ var _shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/notifications/notifications.service */ 69472);
/* harmony import */ var _shared_utils_browser_only_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/utils/browser-only.pipe */ 75465);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ 99797);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 14354);


















function ForgotPasswordFormComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 1)(1, "h1", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 3)(5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 5)(9, "div", 6)(10, "div", 7)(11, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](15, "dsBrowserOnly");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](17, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 3)(19, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "div", 5)(23, "ds-profile-page-security-form", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("isInvalid", function ForgotPasswordFormComponent_div_0_Template_ds_profile_page_security_form_isInvalid_23_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.setInValid($event));
    })("passwordValue", function ForgotPasswordFormComponent_div_0_Template_ds_profile_page_security_form_passwordValue_23_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.setPasswordValue($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "div", 6)(25, "div", 7)(26, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ForgotPasswordFormComponent_div_0_Template_button_click_26_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.submit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](28, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 10, "forgot-password.form.head"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](7, 12, "forgot-password.form.identification.header"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](13, 14, "forgot-password.form.identification.email"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("data-test", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](15, 16, "email"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](17, 18, ctx_r1.registration$).email);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](21, 20, "forgot-password.form.card.security"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("passwordCanBeEmpty", false)("FORM_PREFIX", "forgot-password.form.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dsBtnDisabled", ctx_r1.isInValid);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](28, 22, "forgot-password.form.submit"));
  }
}
/**
 * Component for a user to enter a new password for a forgot token.
 */
class ForgotPasswordFormComponent {
  constructor(ePersonDataService, translateService, notificationsService, store, router, route) {
    this.ePersonDataService = ePersonDataService;
    this.translateService = translateService;
    this.notificationsService = notificationsService;
    this.store = store;
    this.router = router;
    this.route = route;
    this.isInValid = true;
    /**
     * Prefix for the notification messages of this component
     */
    this.NOTIFICATIONS_PREFIX = 'forgot-password.form.notification';
  }
  ngOnInit() {
    this.registration$ = this.route.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(data => data.registration), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_2__.getFirstSucceededRemoteDataPayload)());
    this.registration$.subscribe(registration => {
      this.email = registration.email;
      this.token = registration.token;
      this.user = registration.user;
    });
  }
  setInValid($event) {
    this.isInValid = $event;
  }
  setPasswordValue($event) {
    this.password = $event;
  }
  /**
   * Submits the password to the eperson service to be updated.
   * The submission will not be made when the form is not valid.
   */
  submit() {
    if (!this.isInValid) {
      this.ePersonDataService.patchPasswordWithToken(this.user, this.token, this.password).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_2__.getFirstCompletedRemoteData)()).subscribe(response => {
        if (response.hasSucceeded) {
          this.notificationsService.success(this.translateService.instant(this.NOTIFICATIONS_PREFIX + '.success.title'), this.translateService.instant(this.NOTIFICATIONS_PREFIX + '.success.content'));
          this.store.dispatch(new _core_auth_auth_actions__WEBPACK_IMPORTED_MODULE_0__.AuthenticateAction(this.email, this.password));
          this.router.navigate(['/home']);
        } else {
          this.notificationsService.error(this.translateService.instant(this.NOTIFICATIONS_PREFIX + '.error.title'), response.errorMessage);
        }
      });
    }
  }
  static {
    this.ɵfac = function ForgotPasswordFormComponent_Factory(t) {
      return new (t || ForgotPasswordFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_eperson_eperson_data_service__WEBPACK_IMPORTED_MODULE_1__.EPersonDataService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_5__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_10__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: ForgotPasswordFormComponent,
      selectors: [["ds-base-forgot-password-form"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 3,
      consts: [["class", "container", 4, "ngIf"], [1, "container"], [1, "mb-4"], [1, "card", "mb-4"], [1, "card-header"], [1, "card-body"], [1, "row"], [1, "col-12"], [1, "font-weight-bold"], [3, "isInvalid", "passwordValue", "passwordCanBeEmpty", "FORM_PREFIX"], [1, "btn", "btn-default", "btn-primary", 3, "click", "dsBtnDisabled"]],
      template: function ForgotPasswordFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, ForgotPasswordFormComponent_div_0_Template, 29, 24, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "async");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 1, ctx.registration$));
        }
      },
      dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe, _shared_utils_browser_only_pipe__WEBPACK_IMPORTED_MODULE_6__.BrowserOnlyPipe, _profile_page_profile_page_security_form_profile_page_security_form_component__WEBPACK_IMPORTED_MODULE_3__.ProfilePageSecurityFormComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _shared_btn_disabled_directive__WEBPACK_IMPORTED_MODULE_4__.BtnDisabledDirective],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmdvdC1wYXNzd29yZC1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBIiwiZmlsZSI6ImZvcmdvdC1wYXNzd29yZC1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi8iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC1mb3JtL2ZvcmdvdC1wYXNzd29yZC1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBO0FBQ0Esb2xCQUFvbEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqLyJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 17916:
/*!***********************************************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password-form/themed-forgot-password-form.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemedForgotPasswordFormComponent: () => (/* binding */ ThemedForgotPasswordFormComponent)
/* harmony export */ });
/* harmony import */ var _shared_theme_support_themed_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/theme-support/themed.component */ 8886);
/* harmony import */ var _forgot_password_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgot-password-form.component */ 33938);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);



const _c0 = ["*"];
function ThemedForgotPasswordFormComponent_ng_template_0_Template(rf, ctx) {}
/**
 * Themed wrapper for ForgotPasswordFormComponent
 */
class ThemedForgotPasswordFormComponent extends _shared_theme_support_themed_component__WEBPACK_IMPORTED_MODULE_0__.ThemedComponent {
  getComponentName() {
    return 'ForgotPasswordFormComponent';
  }
  importThemedComponent(themeName) {
    return __webpack_require__(15706)(`./${themeName}/app/forgot-password/forgot-password-form/forgot-password-form.component`);
  }
  importUnthemedComponent() {
    return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./forgot-password-form.component */ 33938));
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵThemedForgotPasswordFormComponent_BaseFactory;
      return function ThemedForgotPasswordFormComponent_Factory(t) {
        return (ɵThemedForgotPasswordFormComponent_BaseFactory || (ɵThemedForgotPasswordFormComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](ThemedForgotPasswordFormComponent)))(t || ThemedForgotPasswordFormComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ThemedForgotPasswordFormComponent,
      selectors: [["ds-forgot-password-form"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      ngContentSelectors: _c0,
      decls: 5,
      vars: 0,
      consts: [["vcr", ""], ["content", ""]],
      template: function ThemedForgotPasswordFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ThemedForgotPasswordFormComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
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

/***/ 76716:
/*!***********************************************************!*\
  !*** ./src/app/forgot-password/forgot-password-routes.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ROUTES: () => (/* binding */ ROUTES)
/* harmony export */ });
/* harmony import */ var _register_page_registration_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../register-page/registration.guard */ 15694);
/* harmony import */ var _forgot_password_email_themed_forgot_email_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgot-password-email/themed-forgot-email.component */ 40602);
/* harmony import */ var _forgot_password_form_themed_forgot_password_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forgot-password-form/themed-forgot-password-form.component */ 17916);



const ROUTES = [{
  path: '',
  component: _forgot_password_email_themed_forgot_email_component__WEBPACK_IMPORTED_MODULE_1__.ThemedForgotEmailComponent,
  data: {
    title: 'forgot-password.title'
  }
}, {
  path: ':token',
  component: _forgot_password_form_themed_forgot_password_form_component__WEBPACK_IMPORTED_MODULE_2__.ThemedForgotPasswordFormComponent,
  canActivate: [_register_page_registration_guard__WEBPACK_IMPORTED_MODULE_0__.registrationGuard]
}];

/***/ }),

/***/ 45265:
/*!******************************************************************************************************************************!*\
  !*** ./src/themes/ lazy ^\.\/.*\/app\/forgot\-password\/forgot\-password\-email\/forgot\-email\.component$ namespace object ***!
  \******************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./custom/app/forgot-password/forgot-password-email/forgot-email.component": [
		82217,
		"src_themes_custom_app_forgot-password_forgot-password-email_forgot-email_component_ts"
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
webpackAsyncContext.id = 45265;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 15706:
/*!**************************************************************************************************************************************!*\
  !*** ./src/themes/ lazy ^\.\/.*\/app\/forgot\-password\/forgot\-password\-form\/forgot\-password\-form\.component$ namespace object ***!
  \**************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./custom/app/forgot-password/forgot-password-form/forgot-password-form.component": [
		42873,
		"src_themes_custom_app_forgot-password_forgot-password-form_forgot-password-form_component_ts"
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
webpackAsyncContext.id = 15706;
module.exports = webpackAsyncContext;

/***/ })

}]);
//# sourceMappingURL=src_app_forgot-password_forgot-password-routes_ts.js.map