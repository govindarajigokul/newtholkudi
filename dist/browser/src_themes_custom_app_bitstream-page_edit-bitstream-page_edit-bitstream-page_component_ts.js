"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_themes_custom_app_bitstream-page_edit-bitstream-page_edit-bitstream-page_component_ts"],{

/***/ 84957:
/*!***************************************************************************************************!*\
  !*** ./src/themes/custom/app/bitstream-page/edit-bitstream-page/edit-bitstream-page.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditBitstreamPageComponent: () => (/* binding */ EditBitstreamPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var _app_bitstream_page_edit_bitstream_page_edit_bitstream_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../app/bitstream-page/edit-bitstream-page/edit-bitstream-page.component */ 51736);
/* harmony import */ var _app_shared_error_error_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../app/shared/error/error.component */ 79632);
/* harmony import */ var _app_shared_form_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../app/shared/form/form.component */ 99386);
/* harmony import */ var _app_shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../app/shared/loading/themed-loading.component */ 82394);
/* harmony import */ var _app_shared_utils_file_size_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../app/shared/utils/file-size-pipe */ 43525);
/* harmony import */ var _app_shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../app/shared/utils/var.directive */ 18226);
/* harmony import */ var _app_thumbnail_themed_thumbnail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../app/thumbnail/themed-thumbnail.component */ 97402);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 90310);












const _c0 = a0 => ["/bitstreams", a0, "authorizations"];
function EditBitstreamPageComponent_ng_container_0_div_2_ds_form_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ds-form", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("submitForm", function EditBitstreamPageComponent_ng_container_0_div_2_ds_form_12_Template_ds_form_submitForm_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.onSubmit());
    })("cancel", function EditBitstreamPageComponent_ng_container_0_div_2_ds_form_12_Template_ds_form_cancel_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.onCancel());
    })("dfChange", function EditBitstreamPageComponent_ng_container_0_div_2_ds_form_12_Template_ds_form_dfChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.onChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 13)(2, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const bitstreamRD_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).ngVar;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formId", "edit-bitstream-form-id")("formGroup", ctx_r1.formGroup)("formModel", ctx_r1.formModel)("formLayout", ctx_r1.formLayout)("submitLabel", "form.save");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](9, _c0, bitstreamRD_r3 == null ? null : bitstreamRD_r3.payload == null ? null : bitstreamRD_r3.payload.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](4, 7, "bitstream.edit.authorizations.link"));
  }
}
function EditBitstreamPageComponent_ng_container_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 4)(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "ds-thumbnail", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 7)(4, "div", 1)(5, "div", 4)(6, "div", 8)(7, "h1", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](11, "dsFileSize");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, EditBitstreamPageComponent_ng_container_0_div_2_ds_form_12_Template, 5, 11, "ds-form", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const bitstreamRD_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().ngVar;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("thumbnail", bitstreamRD_r3 == null ? null : bitstreamRD_r3.payload);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", ctx_r1.dsoNameService.getName(bitstreamRD_r3 == null ? null : bitstreamRD_r3.payload), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("(", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](11, 4, bitstreamRD_r3 == null ? null : bitstreamRD_r3.payload == null ? null : bitstreamRD_r3.payload.sizeBytes), ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.formGroup);
  }
}
function EditBitstreamPageComponent_ng_container_0_ds_error_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "ds-error", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("message", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 1, "error.bitstream"));
  }
}
function EditBitstreamPageComponent_ng_container_0_ds_loading_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "ds-loading", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("message", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 1, "loading.bitstream"));
  }
}
function EditBitstreamPageComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, EditBitstreamPageComponent_ng_container_0_div_2_Template, 13, 6, "div", 2)(3, EditBitstreamPageComponent_ng_container_0_ds_error_3_Template, 2, 3, "ds-error", 3)(4, EditBitstreamPageComponent_ng_container_0_ds_loading_4_Template, 2, 3, "ds-loading", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const bitstreamRD_r3 = ctx.ngVar;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", bitstreamRD_r3 == null ? null : bitstreamRD_r3.hasSucceeded);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", bitstreamRD_r3 == null ? null : bitstreamRD_r3.hasFailed);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !bitstreamRD_r3 || (bitstreamRD_r3 == null ? null : bitstreamRD_r3.isLoading));
  }
}
class EditBitstreamPageComponent extends _app_bitstream_page_edit_bitstream_page_edit_bitstream_page_component__WEBPACK_IMPORTED_MODULE_0__.EditBitstreamPageComponent {
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵEditBitstreamPageComponent_BaseFactory;
      return function EditBitstreamPageComponent_Factory(t) {
        return (ɵEditBitstreamPageComponent_BaseFactory || (ɵEditBitstreamPageComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetInheritedFactory"](EditBitstreamPageComponent)))(t || EditBitstreamPageComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: EditBitstreamPageComponent,
      selectors: [["ds-themed-edit-bitstream-page"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 3,
      consts: [[4, "ngVar"], [1, "container"], ["class", "row", 4, "ngIf"], [3, "message", 4, "ngIf"], [1, "row"], [1, "col-md-2"], [3, "thumbnail"], [1, "col-md-10"], [1, "col-12"], [1, "h2"], [1, "text-muted"], [3, "formId", "formGroup", "formModel", "formLayout", "submitLabel", "submitForm", "cancel", "dfChange", 4, "ngIf"], [3, "submitForm", "cancel", "dfChange", "formId", "formGroup", "formModel", "formLayout", "submitLabel"], ["additional", "", 1, "container", "py-3"], [3, "routerLink"], [3, "message"]],
      template: function EditBitstreamPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, EditBitstreamPageComponent_ng_container_0_Template, 5, 3, "ng-container", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "async");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngVar", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 1, ctx.bitstreamRD$));
        }
      },
      dependencies: [_app_shared_form_form_component__WEBPACK_IMPORTED_MODULE_2__.FormComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _app_shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_5__.VarDirective, _app_thumbnail_themed_thumbnail_component__WEBPACK_IMPORTED_MODULE_6__.ThemedThumbnailComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLink, _app_shared_error_error_component__WEBPACK_IMPORTED_MODULE_1__.ErrorComponent, _app_shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_3__.ThemedLoadingComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe, _app_shared_utils_file_size_pipe__WEBPACK_IMPORTED_MODULE_4__.FileSizePipe],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtYml0c3RyZWFtLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUEiLCJmaWxlIjoiZWRpdC1iaXRzdHJlYW0tcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYml0c3RyZWFtLXBhZ2UvZWRpdC1iaXRzdHJlYW0tcGFnZS9lZGl0LWJpdHN0cmVhbS1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBO0FBQ0EsZ2xCQUFnbEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqLyJdLCJzb3VyY2VSb290IjoiIn0= */"],
      changeDetection: 0
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_themes_custom_app_bitstream-page_edit-bitstream-page_edit-bitstream-page_component_ts.js.map