"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_themes_custom_app_shared_log-in_log-in_component_ts"],{

/***/ 74267:
/*!*****************************************************************!*\
  !*** ./src/themes/custom/app/shared/log-in/log-in.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LogInComponent: () => (/* binding */ LogInComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var src_app_shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/loading/themed-loading.component */ 82394);
/* harmony import */ var src_app_shared_log_in_container_log_in_container_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/log-in/container/log-in-container.component */ 91956);
/* harmony import */ var _app_shared_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../app/shared/log-in/log-in.component */ 38790);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 90310);





function LogInComponent_ds_loading_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "ds-loading", 2);
  }
}
function LogInComponent_div_3_ng_container_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 7);
  }
}
function LogInComponent_div_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "ds-log-in-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, LogInComponent_div_3_ng_container_1_div_2_Template, 1, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const authMethod_r1 = ctx.$implicit;
    const last_r2 = ctx.last;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("authMethod", authMethod_r1)("isStandalonePage", ctx_r2.isStandalonePage);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !last_r2);
  }
}
function LogInComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, LogInComponent_div_3_ng_container_1_Template, 3, 3, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, ctx_r2.authMethods));
  }
}
class LogInComponent extends _app_shared_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_2__.LogInComponent {
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵLogInComponent_BaseFactory;
      return function LogInComponent_Factory(t) {
        return (ɵLogInComponent_BaseFactory || (ɵLogInComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](LogInComponent)))(t || LogInComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: LogInComponent,
      selectors: [["ds-themed-log-in"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
      decls: 6,
      vars: 10,
      consts: [["class", "m-5", 4, "ngIf"], ["class", "px-4 py-3 mx-auto login-container", 4, "ngIf"], [1, "m-5"], [1, "px-4", "py-3", "mx-auto", "login-container"], [4, "ngFor", "ngForOf"], [3, "authMethod", "isStandalonePage"], ["class", "dropdown-divider my-2", 4, "ngIf"], [1, "dropdown-divider", "my-2"]],
      template: function LogInComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, LogInComponent_ds_loading_0_Template, 1, 0, "ds-loading", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, LogInComponent_div_3_Template, 3, 3, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "async");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 2, ctx.loading) || _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 4, ctx.isAuthenticated));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 6, ctx.loading) !== true && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 8, ctx.isAuthenticated) !== true);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, src_app_shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_0__.ThemedLoadingComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgFor, src_app_shared_log_in_container_log_in_container_component__WEBPACK_IMPORTED_MODULE_1__.LogInContainerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n.login-container[_ngcontent-%COMP%] {\n  max-width: 350px;\n}\n\na[_ngcontent-%COMP%] {\n  white-space: normal;\n  padding: 0.25rem 0.75rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZy1pbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFDQTtFQUNFLG1CQUFBO0VBQ0Esd0JBQUE7QUFFRiIsImZpbGUiOiJsb2ctaW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqL1xuLmxvZ2luLWNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogMzUwcHg7XG59XG5hIHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgcGFkZGluZzogMC4yNXJlbSAwLjc1cmVtO1xufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2xvZy1pbi9sb2ctaW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxtQkFBQTtFQUNBLHdCQUFBO0FBRUY7QUFDQSxvd0JBQW93QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovXG4ubG9naW4tY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiAzNTBweDtcbn1cbmEge1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBwYWRkaW5nOiAwLjI1cmVtIDAuNzVyZW07XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_themes_custom_app_shared_log-in_log-in_component_ts.js.map