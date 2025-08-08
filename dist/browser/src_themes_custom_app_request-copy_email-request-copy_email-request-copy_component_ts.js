"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_themes_custom_app_request-copy_email-request-copy_email-request-copy_component_ts"],{

/***/ 80663:
/*!***********************************************************************************************!*\
  !*** ./src/themes/custom/app/request-copy/email-request-copy/email-request-copy.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmailRequestCopyComponent: () => (/* binding */ EmailRequestCopyComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 56106);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var src_app_request_copy_email_request_copy_email_request_copy_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/request-copy/email-request-copy/email-request-copy.component */ 42178);
/* harmony import */ var _app_shared_btn_disabled_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../app/shared/btn-disabled.directive */ 60456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);








const _c0 = ["*"];
const _c1 = a0 => ({
  "is-invalid": a0
});
function EmailRequestCopyComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "grant-deny-request-copy.email.subject.empty"), " ");
  }
}
class EmailRequestCopyComponent extends src_app_request_copy_email_request_copy_email_request_copy_component__WEBPACK_IMPORTED_MODULE_0__.EmailRequestCopyComponent {
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵEmailRequestCopyComponent_BaseFactory;
      return function EmailRequestCopyComponent_Factory(t) {
        return (ɵEmailRequestCopyComponent_BaseFactory || (ɵEmailRequestCopyComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](EmailRequestCopyComponent)))(t || EmailRequestCopyComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: EmailRequestCopyComponent,
      selectors: [["ds-themed-email-request-copy"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      ngContentSelectors: _c0,
      decls: 24,
      vars: 25,
      consts: [[1, "form-group"], ["for", "subject"], ["type", "text", "id", "subject", "name", "subject", 1, "form-control", 3, "ngModelChange", "ngClass", "ngModel"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "message"], ["id", "message", "rows", "8", "name", "message", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "d-flex", "flex-row-reverse"], [1, "btn", "btn-primary", 3, "click", "dsBtnDisabled", "title"], [1, "fas", "fa-envelope"], [1, "btn", "btn-outline-secondary", "mr-1", 3, "click", "title"], [1, "fas", "fa-arrow-left"], [1, "invalid-feedback"]],
      template: function EmailRequestCopyComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form")(1, "div", 0)(2, "label", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "input", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function EmailRequestCopyComponent_Template_input_ngModelChange_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.subject, $event) || (ctx.subject = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, EmailRequestCopyComponent_div_6_Template, 3, 3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 0)(8, "label", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "textarea", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function EmailRequestCopyComponent_Template_textarea_ngModelChange_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.message, $event) || (ctx.message = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 6)(14, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](15, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmailRequestCopyComponent_Template_button_click_14_listener() {
            return ctx.submit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "i", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](18, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](20, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmailRequestCopyComponent_Template_button_click_19_listener() {
            return ctx.return();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](23, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 11, "grant-deny-request-copy.email.subject"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](23, _c1, !ctx.subject || ctx.subject.length === 0));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.subject);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.subject || ctx.subject.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](10, 13, "grant-deny-request-copy.email.message"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.message);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](15, 15, "grant-deny-request-copy.email.send"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dsBtnDisabled", !ctx.subject || ctx.subject.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](18, 17, "grant-deny-request-copy.email.send"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](20, 19, "grant-deny-request-copy.email.back"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](23, 21, "grant-deny-request-copy.email.back"), " ");
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe, _app_shared_btn_disabled_directive__WEBPACK_IMPORTED_MODULE_1__.BtnDisabledDirective],
      encapsulation: 2
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_themes_custom_app_request-copy_email-request-copy_email-request-copy_component_ts.js.map