(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["default-src_app_profile-page_profile-page-security-form_profile-page-security-form_component_-69ff5d"],{

/***/ 13738:
/*!*************************************************************************************************!*\
  !*** ./src/app/profile-page/profile-page-security-form/profile-page-security-form.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfilePageSecurityFormComponent: () => (/* binding */ ProfilePageSecurityFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-dynamic-forms/core */ 94403);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var _core_eperson_eperson_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/eperson/eperson-data.service */ 74449);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/shared/operators */ 55757);
/* harmony import */ var _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/alert/alert.component */ 16292);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/empty.util */ 82777);
/* harmony import */ var _shared_form_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/form/form.component */ 99386);
/* harmony import */ var _shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/notifications/notifications.service */ 69472);
















function ProfilePageSecurityFormComponent_ds_form_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "ds-form", 4);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formId", ctx_r0.FORM_PREFIX)("formModel", ctx_r0.formModel)("formGroup", ctx_r0.formGroup)("displaySubmit", false)("displayCancel", false);
  }
}
function ProfilePageSecurityFormComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, ctx_r0.FORM_PREFIX + "error.matching-passwords"));
  }
}
function ProfilePageSecurityFormComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, ctx_r0.FORM_PREFIX + "error.empty-password"));
  }
}
/**
 * Component for a user to edit their security information
 * Displays a form containing a password field and a confirmation of the password
 */
class ProfilePageSecurityFormComponent {
  constructor(formService, translate, epersonService, notificationsService) {
    this.formService = formService;
    this.translate = translate;
    this.epersonService = epersonService;
    this.notificationsService = notificationsService;
    /**
     * Emits the validity of the password
     */
    this.isInvalid = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    /**
     * Emits the value of the password
     */
    this.passwordValue = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    /**
     * Emits the value of the current-password
     */
    this.currentPasswordValue = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    /**
     * The form's input models
     */
    this.formModel = [new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_7__.DynamicInputModel({
      id: 'password',
      name: 'password',
      inputType: 'password',
      autoComplete: 'new-password'
    }), new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_7__.DynamicInputModel({
      id: 'passwordrepeat',
      name: 'passwordrepeat',
      inputType: 'password',
      autoComplete: 'new-password'
    })];
    /**
     * Indicates whether the "checkPasswordEmpty" needs to be added or not
     */
    this.passwordCanBeEmpty = true;
    this.subs = [];
  }
  ngOnInit() {
    if (this.FORM_PREFIX === 'profile.security.form.') {
      this.formModel.unshift(new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_7__.DynamicInputModel({
        id: 'current-password',
        name: 'current-password',
        inputType: 'password',
        required: true,
        autoComplete: 'current-password'
      }));
    }
    if (this.passwordCanBeEmpty) {
      this.formGroup = this.formService.createFormGroup(this.formModel, {
        validators: [this.checkPasswordsEqual]
      });
    } else {
      this.formGroup = this.formService.createFormGroup(this.formModel, {
        validators: [this.checkPasswordsEqual, this.checkPasswordEmpty]
      });
    }
    this.updateFieldTranslations();
    this.translate.onLangChange.subscribe(() => {
      this.updateFieldTranslations();
    });
    this.subs.push(this.formGroup.statusChanges.pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_1__.debounceTimeWorkaround)(300), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(status => status !== 'VALID')).subscribe(status => this.isInvalid.emit(status)));
    this.subs.push(this.formGroup.valueChanges.pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_1__.debounceTimeWorkaround)(300)).subscribe(valueChange => {
      this.passwordValue.emit(valueChange.password);
      if (this.FORM_PREFIX === 'profile.security.form.') {
        this.currentPasswordValue.emit(valueChange['current-password']);
      }
    }));
  }
  /**
   * Update the translations of the field labels
   */
  updateFieldTranslations() {
    this.formModel.forEach(fieldModel => {
      fieldModel.label = this.translate.instant(this.FORM_PREFIX + 'label.' + fieldModel.id);
    });
  }
  /**
   * Check if both password fields are filled in and equal
   * @param group The FormGroup to validate
   */
  checkPasswordsEqual(group) {
    const pass = group.get('password').value;
    const repeatPass = group.get('passwordrepeat').value;
    return pass === repeatPass ? null : {
      notSame: true
    };
  }
  /**
   * Checks if the password is empty
   * @param group The FormGroup to validate
   */
  checkPasswordEmpty(group) {
    const pass = group.get('password').value;
    return (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_3__.isEmpty)(pass) ? {
      emptyPassword: true
    } : null;
  }
  /**
   * Unsubscribe from all subscriptions
   */
  ngOnDestroy() {
    this.subs.filter(sub => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_3__.hasValue)(sub)).forEach(sub => sub.unsubscribe());
  }
  static {
    this.ɵfac = function ProfilePageSecurityFormComponent_Factory(t) {
      return new (t || ProfilePageSecurityFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_7__.DynamicFormService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_eperson_eperson_data_service__WEBPACK_IMPORTED_MODULE_0__.EPersonDataService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_5__.NotificationsService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: ProfilePageSecurityFormComponent,
      selectors: [["ds-profile-page-security-form"]],
      inputs: {
        passwordCanBeEmpty: "passwordCanBeEmpty",
        FORM_PREFIX: "FORM_PREFIX"
      },
      outputs: {
        isInvalid: "isInvalid",
        passwordValue: "passwordValue",
        currentPasswordValue: "currentPasswordValue"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵStandaloneFeature"]],
      decls: 6,
      vars: 7,
      consts: [[1, "mb-4", 3, "type"], [3, "formId", "formModel", "formGroup", "displaySubmit", "displayCancel", 4, "ngIf"], ["id", "notSame", "class", "container-fluid text-danger", 4, "ngIf"], ["id", "emptyPassword", "class", "container-fluid text-danger", 4, "ngIf"], [3, "formId", "formModel", "formGroup", "displaySubmit", "displayCancel"], ["id", "notSame", 1, "container-fluid", "text-danger"], ["id", "emptyPassword", 1, "container-fluid", "text-danger"]],
      template: function ProfilePageSecurityFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ds-alert", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ProfilePageSecurityFormComponent_ds_form_3_Template, 1, 5, "ds-form", 1)(4, ProfilePageSecurityFormComponent_div_4_Template, 3, 3, "div", 2)(5, ProfilePageSecurityFormComponent_div_5_Template, 3, 3, "div", 3);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("type", "alert-info");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 5, ctx.FORM_PREFIX + "info"));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.formModel);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.formGroup.hasError("notSame"));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx.formGroup.dirty || ctx.formGroup.touched) && ctx.formGroup.hasError("emptyPassword"));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _shared_form_form_component__WEBPACK_IMPORTED_MODULE_4__.FormComponent, _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_2__.AlertComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 96134:
/*!*****************************************************************************!*\
  !*** ./src/app/register-email-form/themed-registry-email-form.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemedRegisterEmailFormComponent: () => (/* binding */ ThemedRegisterEmailFormComponent)
/* harmony export */ });
/* harmony import */ var _shared_theme_support_themed_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/theme-support/themed.component */ 8886);
/* harmony import */ var _register_email_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register-email-form.component */ 48500);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);



const _c0 = ["*"];
function ThemedRegisterEmailFormComponent_ng_template_0_Template(rf, ctx) {}
/**
 * Themed wrapper for {@link RegisterEmailFormComponent}
 */
class ThemedRegisterEmailFormComponent extends _shared_theme_support_themed_component__WEBPACK_IMPORTED_MODULE_0__.ThemedComponent {
  constructor() {
    super(...arguments);
    this.inAndOutputNames = ['MESSAGE_PREFIX', 'typeRequest'];
  }
  getComponentName() {
    return 'RegisterEmailFormComponent';
  }
  importThemedComponent(themeName) {
    return __webpack_require__(41546)(`./${themeName}/app/register-email-form/register-email-form.component`);
  }
  importUnthemedComponent() {
    return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./register-email-form.component */ 48500));
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵThemedRegisterEmailFormComponent_BaseFactory;
      return function ThemedRegisterEmailFormComponent_Factory(t) {
        return (ɵThemedRegisterEmailFormComponent_BaseFactory || (ɵThemedRegisterEmailFormComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](ThemedRegisterEmailFormComponent)))(t || ThemedRegisterEmailFormComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ThemedRegisterEmailFormComponent,
      selectors: [["ds-register-email-form"]],
      inputs: {
        MESSAGE_PREFIX: "MESSAGE_PREFIX",
        typeRequest: "typeRequest"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      ngContentSelectors: _c0,
      decls: 5,
      vars: 0,
      consts: [["vcr", ""], ["content", ""]],
      template: function ThemedRegisterEmailFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ThemedRegisterEmailFormComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
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

/***/ 15694:
/*!*****************************************************!*\
  !*** ./src/app/register-page/registration.guard.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   registrationGuard: () => (/* binding */ registrationGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/auth/auth.service */ 67116);
/* harmony import */ var _core_data_eperson_registration_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/data/eperson-registration.service */ 44996);
/* harmony import */ var _core_shared_authorized_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/shared/authorized.operators */ 308);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/shared/operators */ 55757);







/**
 * A guard responsible for redirecting to 4xx pages upon retrieving a Registration object
 * The guard also adds the resulting RemoteData<Registration> object to the route's data for further usage in components
 * The reason this is a guard and not a resolver, is because it has to run before the EndUserAgreementCookieGuard
 */
const registrationGuard = (route, state, authService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), epersonRegistrationService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_core_data_eperson_registration_service__WEBPACK_IMPORTED_MODULE_1__.EpersonRegistrationService), router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)) => {
  const token = route.params.token;
  return epersonRegistrationService.searchByToken(token).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_3__.getFirstCompletedRemoteData)(), (0,_core_shared_authorized_operators__WEBPACK_IMPORTED_MODULE_2__.redirectOn4xx)(router, authService), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(rd => {
    route.data = {
      ...route.data,
      registration: rd
    };
    return rd.hasSucceeded;
  }));
};

/***/ }),

/***/ 41546:
/*!******************************************************************************************************************!*\
  !*** ./src/themes/ lazy ^\.\/.*\/app\/register\-email\-form\/register\-email\-form\.component$ namespace object ***!
  \******************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./custom/app/register-email-form/register-email-form.component": [
		11995,
		"src_themes_custom_app_register-email-form_register-email-form_component_ts"
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
webpackAsyncContext.id = 41546;
module.exports = webpackAsyncContext;

/***/ })

}]);
//# sourceMappingURL=default-src_app_profile-page_profile-page-security-form_profile-page-security-form_component_-69ff5d.js.map