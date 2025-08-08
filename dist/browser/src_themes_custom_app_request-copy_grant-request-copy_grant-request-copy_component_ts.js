"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_themes_custom_app_request-copy_grant-request-copy_grant-request-copy_component_ts"],{

/***/ 88611:
/*!***********************************************************************************************!*\
  !*** ./src/themes/custom/app/request-copy/grant-request-copy/grant-request-copy.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GrantRequestCopyComponent: () => (/* binding */ GrantRequestCopyComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 56106);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var src_app_request_copy_grant_request_copy_grant_request_copy_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/request-copy/grant-request-copy/grant-request-copy.component */ 3218);
/* harmony import */ var _app_request_copy_email_request_copy_themed_email_request_copy_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../app/request-copy/email-request-copy/themed-email-request-copy.component */ 54676);
/* harmony import */ var _app_shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../app/shared/loading/themed-loading.component */ 82394);
/* harmony import */ var _app_shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../app/shared/utils/var.directive */ 18226);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 90310);










function GrantRequestCopyComponent_div_0_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ds-email-request-copy", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("send", function GrantRequestCopyComponent_div_0_div_4_Template_ds_email_request_copy_send_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.grant($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "form", 5)(11, "div", 6)(12, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function GrantRequestCopyComponent_div_0_div_4_Template_input_ngModelChange_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.suggestOpenAccess, $event) || (ctx_r1.suggestOpenAccess = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 6, "grant-request-copy.intro"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("subject", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 8, ctx_r1.subject$))("message", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 10, ctx_r1.message$));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](9, 12, "grant-deny-request-copy.email.permissions.info"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.suggestOpenAccess);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](15, 14, "grant-deny-request-copy.email.permissions.label"));
  }
}
function GrantRequestCopyComponent_div_0_ds_loading_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "ds-loading");
  }
}
function GrantRequestCopyComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1)(1, "h3", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, GrantRequestCopyComponent_div_0_div_4_Template, 16, 16, "div", 3)(5, GrantRequestCopyComponent_div_0_ds_loading_5_Template, 1, 0, "ds-loading", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const itemRequestRD_r3 = ctx.ngVar;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 3, "grant-request-copy.header"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", itemRequestRD_r3 && itemRequestRD_r3.hasSucceeded);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !itemRequestRD_r3 || (itemRequestRD_r3 == null ? null : itemRequestRD_r3.isLoading));
  }
}
class GrantRequestCopyComponent extends src_app_request_copy_grant_request_copy_grant_request_copy_component__WEBPACK_IMPORTED_MODULE_0__.GrantRequestCopyComponent {
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵGrantRequestCopyComponent_BaseFactory;
      return function GrantRequestCopyComponent_Factory(t) {
        return (ɵGrantRequestCopyComponent_BaseFactory || (ɵGrantRequestCopyComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetInheritedFactory"](GrantRequestCopyComponent)))(t || GrantRequestCopyComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: GrantRequestCopyComponent,
      selectors: [["ds-themed-grant-request-copy"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 3,
      consts: [["class", "container", 4, "ngVar"], [1, "container"], [1, "mb-4"], [4, "ngIf"], [3, "send", "subject", "message"], [1, "mb-3"], [1, "form-check"], ["type", "checkbox", "value", "", "id", "permissions", "name", "permissions", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["for", "permissions", 1, "form-check-label"]],
      template: function GrantRequestCopyComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, GrantRequestCopyComponent_div_0_Template, 6, 5, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "async");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngVar", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 1, ctx.itemRequestRD$));
        }
      },
      dependencies: [_app_shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_3__.VarDirective, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _app_request_copy_email_request_copy_themed_email_request_copy_component__WEBPACK_IMPORTED_MODULE_1__.ThemedEmailRequestCopyComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm, _app_shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_2__.ThemedLoadingComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe],
      encapsulation: 2
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_themes_custom_app_request-copy_grant-request-copy_grant-request-copy_component_ts.js.map