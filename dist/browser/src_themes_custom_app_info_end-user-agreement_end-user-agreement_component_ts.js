"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_themes_custom_app_info_end-user-agreement_end-user-agreement_component_ts"],{

/***/ 67058:
/*!***************************************************************************************!*\
  !*** ./src/themes/custom/app/info/end-user-agreement/end-user-agreement.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EndUserAgreementComponent: () => (/* binding */ EndUserAgreementComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 56106);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var _app_info_end_user_agreement_end_user_agreement_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../app/info/end-user-agreement/end-user-agreement.component */ 69339);
/* harmony import */ var _app_info_end_user_agreement_end_user_agreement_content_end_user_agreement_content_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../app/info/end-user-agreement/end-user-agreement-content/end-user-agreement-content.component */ 85914);
/* harmony import */ var _app_shared_btn_disabled_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../app/shared/btn-disabled.directive */ 60456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 90310);








const _c0 = () => ({
  standalone: true
});
/**
 * Component displaying the End User Agreement and an option to accept it
 */
class EndUserAgreementComponent extends _app_info_end_user_agreement_end_user_agreement_component__WEBPACK_IMPORTED_MODULE_0__.EndUserAgreementComponent {
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵEndUserAgreementComponent_BaseFactory;
      return function EndUserAgreementComponent_Factory(t) {
        return (ɵEndUserAgreementComponent_BaseFactory || (ɵEndUserAgreementComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](EndUserAgreementComponent)))(t || EndUserAgreementComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: EndUserAgreementComponent,
      selectors: [["ds-themed-end-user-agreement"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
      decls: 14,
      vars: 13,
      consts: [[1, "container"], ["novalidate", "", 1, "form-user-agreement-accept", "mt-4", 3, "ngSubmit"], ["type", "checkbox", "id", "user-agreement-accept", 1, "ml-1", "mr-2", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["for", "user-agreement-accept", 1, "col-form-label-lg"], [1, "d-flex", "mt-4"], ["id", "button-cancel", "type", "button", 1, "btn", "btn-outline-secondary", "mr-auto", 3, "click"], ["id", "button-save", "type", "submit", 1, "btn", "btn-primary", 3, "dsBtnDisabled"]],
      template: function EndUserAgreementComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "ds-end-user-agreement-content");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "form", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function EndUserAgreementComponent_Template_form_ngSubmit_2_listener() {
            return ctx.submit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "input", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function EndUserAgreementComponent_Template_input_ngModelChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.accepted, $event) || (ctx.accepted = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "label", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 4)(8, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EndUserAgreementComponent_Template_button_click_8_listener() {
            return ctx.cancel();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.accepted);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](12, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 6, "info.end-user-agreement.accept"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](10, 8, "info.end-user-agreement.buttons.cancel"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dsBtnDisabled", !ctx.accepted);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](13, 10, "info.end-user-agreement.buttons.save"));
        }
      },
      dependencies: [_app_info_end_user_agreement_end_user_agreement_content_end_user_agreement_content_component__WEBPACK_IMPORTED_MODULE_1__.EndUserAgreementContentComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe, _app_shared_btn_disabled_directive__WEBPACK_IMPORTED_MODULE_2__.BtnDisabledDirective],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\ninput#user-agreement-accept[_ngcontent-%COMP%] {\n  \n\n  -ms-transform: scale(1.6); \n\n  -moz-transform: scale(1.6); \n\n  -webkit-transform: scale(1.6); \n\n  -o-transform: scale(1.6); \n\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVuZC11c2VyLWFncmVlbWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBO0VBQ0UsMkJBQUE7RUFDQSx5QkFBQSxFQUFBLE9BQUE7RUFDQSwwQkFBQSxFQUFBLE9BQUE7RUFDQSw2QkFBQSxFQUFBLHNCQUFBO0VBQ0Esd0JBQUEsRUFBQSxVQUFBO0VBQ0EsYUFBQTtBQUNGIiwiZmlsZSI6ImVuZC11c2VyLWFncmVlbWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovXG5pbnB1dCN1c2VyLWFncmVlbWVudC1hY2NlcHQge1xuICAvKiBMYXJnZS1zaXplZCBDaGVja2JveGVzICovXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuNik7IC8qIElFICovXG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxLjYpOyAvKiBGRiAqL1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS42KTsgLyogU2FmYXJpIGFuZCBDaHJvbWUgKi9cbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxLjYpOyAvKiBPcGVyYSAqL1xuICBwYWRkaW5nOiAxMHB4O1xufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaW5mby9lbmQtdXNlci1hZ3JlZW1lbnQvZW5kLXVzZXItYWdyZWVtZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBO0FBQ0E7RUFDRSwyQkFBQTtFQUNBLHlCQUFBLEVBQUEsT0FBQTtFQUNBLDBCQUFBLEVBQUEsT0FBQTtFQUNBLDZCQUFBLEVBQUEsc0JBQUE7RUFDQSx3QkFBQSxFQUFBLFVBQUE7RUFDQSxhQUFBO0FBQ0Y7QUFDQSx3a0NBQXdrQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovXG5pbnB1dCN1c2VyLWFncmVlbWVudC1hY2NlcHQge1xuICAvKiBMYXJnZS1zaXplZCBDaGVja2JveGVzICovXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuNik7IC8qIElFICovXG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxLjYpOyAvKiBGRiAqL1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS42KTsgLyogU2FmYXJpIGFuZCBDaHJvbWUgKi9cbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxLjYpOyAvKiBPcGVyYSAqL1xuICBwYWRkaW5nOiAxMHB4O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_themes_custom_app_info_end-user-agreement_end-user-agreement_component_ts.js.map