"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_themes_custom_app_submission_sections_upload_file_section-upload-file_component_ts"],{

/***/ 9286:
/*!************************************************************************************************!*\
  !*** ./src/themes/custom/app/submission/sections/upload/file/section-upload-file.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SubmissionSectionUploadFileComponent: () => (/* binding */ SubmissionSectionUploadFileComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var src_app_submission_sections_upload_file_section_upload_file_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/submission/sections/upload/file/section-upload-file.component */ 96258);
/* harmony import */ var _app_shared_btn_disabled_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../app/shared/btn-disabled.directive */ 60456);
/* harmony import */ var _app_shared_file_download_link_themed_file_download_link_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../app/shared/file-download-link/themed-file-download-link.component */ 28836);
/* harmony import */ var _app_submission_sections_upload_file_view_section_upload_file_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../app/submission/sections/upload/file/view/section-upload-file-view.component */ 79674);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 90310);








const _c0 = a0 => ({
  fileName: a0
});
function SubmissionSectionUploadFileComponent_ng_container_0_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](2, 1, "submission.sections.upload.primary.make", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](4, _c0, ctx_r1.fileName)));
  }
}
function SubmissionSectionUploadFileComponent_ng_container_0_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](2, 1, "submission.sections.upload.primary.remove", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](4, _c0, ctx_r1.fileName)));
  }
}
function SubmissionSectionUploadFileComponent_ng_container_0_i_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 21);
  }
}
function SubmissionSectionUploadFileComponent_ng_container_0_i_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 22);
  }
}
function SubmissionSectionUploadFileComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function SubmissionSectionUploadFileComponent_ng_container_0_Template_input_change_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.togglePrimaryBitstream($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, SubmissionSectionUploadFileComponent_ng_container_0_span_7_Template, 3, 6, "span", 7)(8, SubmissionSectionUploadFileComponent_ng_container_0_span_8_Template, 3, 6, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 8)(10, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "ds-submission-section-upload-file-view", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "ds-file-download-link", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SubmissionSectionUploadFileComponent_ng_container_0_Template_button_click_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      $event.preventDefault();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.editBitstreamData());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](22, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SubmissionSectionUploadFileComponent_ng_container_0_Template_button_click_20_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      const content_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](2);
      $event.preventDefault();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.confirmDelete(content_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, SubmissionSectionUploadFileComponent_ng_container_0_i_24_Template, 1, 0, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](25, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, SubmissionSectionUploadFileComponent_ng_container_0_i_26_Template, 1, 0, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](27, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](28, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("id", "primaryBitstream", ctx_r1.fileIndex, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 20, ctx_r1.processingSaveStatus$))("checked", ctx_r1.isPrimary);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("for", "primaryBitstream", ctx_r1.fileIndex, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r1.isPrimary);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.isPrimary);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("fileData", ctx_r1.fileData);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("cssClasses", "btn btn-link-focus")("isBlank", true)("bitstream", ctx_r1.getBitstream())("enableRequestACopy", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](17, 22, "submission.sections.upload.edit.title"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](18, 24, "submission.sections.upload.edit.title"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](21, 26, "submission.sections.upload.delete.confirm.title"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dsBtnDisabled", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](22, 28, ctx_r1.processingDelete$));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](23, 30, "submission.sections.upload.delete.confirm.title"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](25, 32, ctx_r1.processingDelete$));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](27, 34, ctx_r1.processingDelete$) !== true);
  }
}
function SubmissionSectionUploadFileComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 23)(1, "h4", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SubmissionSectionUploadFileComponent_ng_template_1_Template_button_click_4_listener() {
      const d_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4).dismiss;
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](d_r5("cancel"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 27)(8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 28)(12, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SubmissionSectionUploadFileComponent_ng_template_1_Template_button_click_12_listener() {
      const c_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4).close;
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](c_r6("cancel"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SubmissionSectionUploadFileComponent_ng_template_1_Template_button_click_15_listener() {
      const c_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4).close;
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](c_r6("ok"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 4, "submission.sections.upload.delete.confirm.title"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](10, 6, "submission.sections.upload.delete.confirm.info"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](14, 8, "submission.sections.upload.delete.confirm.cancel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](17, 10, "submission.sections.upload.delete.confirm.submit"));
  }
}
/**
 * This component represents a single bitstream contained in the submission
 */
class SubmissionSectionUploadFileComponent extends src_app_submission_sections_upload_file_section_upload_file_component__WEBPACK_IMPORTED_MODULE_0__.SubmissionSectionUploadFileComponent {
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵSubmissionSectionUploadFileComponent_BaseFactory;
      return function SubmissionSectionUploadFileComponent_Factory(t) {
        return (ɵSubmissionSectionUploadFileComponent_BaseFactory || (ɵSubmissionSectionUploadFileComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetInheritedFactory"](SubmissionSectionUploadFileComponent)))(t || SubmissionSectionUploadFileComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: SubmissionSectionUploadFileComponent,
      selectors: [["ds-themed-submission-upload-section-file"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
      decls: 3,
      vars: 1,
      consts: [["content", ""], [4, "ngIf"], [1, "row"], [1, "col-md-2", "d-flex", "justify-content-center", "align-items-center"], [1, "custom-control", "custom-switch"], ["type", "checkbox", 1, "custom-control-input", 3, "change", "id", "disabled", "checked"], [1, "custom-control-label", 3, "for"], ["class", "sr-only", 4, "ngIf"], [1, "col-md-10"], [1, "float-left", "w-75"], [3, "fileData"], [1, "float-right", "w-15"], [3, "cssClasses", "isBlank", "bitstream", "enableRequestACopy"], ["aria-hidden", "true", 1, "fa", "fa-download", "fa-2x", "text-normal"], [1, "btn", "btn-link-focus", 3, "click", "title"], [1, "fa", "fa-edit", "fa-2x", "text-normal"], [1, "btn", "btn-link-focus", 3, "click", "title", "dsBtnDisabled"], ["class", "fas fa-circle-notch fa-spin fa-2x text-danger", 4, "ngIf"], ["class", "fa fa-trash fa-2x text-danger", 4, "ngIf"], [1, "clearfix"], [1, "sr-only"], [1, "fas", "fa-circle-notch", "fa-spin", "fa-2x", "text-danger"], [1, "fa", "fa-trash", "fa-2x", "text-danger"], [1, "modal-header"], [1, "modal-title", "text-danger"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-danger", 3, "click"]],
      template: function SubmissionSectionUploadFileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, SubmissionSectionUploadFileComponent_ng_container_0_Template, 29, 36, "ng-container", 1)(1, SubmissionSectionUploadFileComponent_ng_template_1_Template, 18, 12, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.fileData);
        }
      },
      dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe, _app_submission_sections_upload_file_view_section_upload_file_view_component__WEBPACK_IMPORTED_MODULE_3__.SubmissionSectionUploadFileViewComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe, _app_shared_file_download_link_themed_file_download_link_component__WEBPACK_IMPORTED_MODULE_2__.ThemedFileDownloadLinkComponent, _app_shared_btn_disabled_directive__WEBPACK_IMPORTED_MODULE_1__.BtnDisabledDirective],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlY3Rpb24tdXBsb2FkLWZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUEiLCJmaWxlIjoic2VjdGlvbi11cGxvYWQtZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc3VibWlzc2lvbi9zZWN0aW9ucy91cGxvYWQvZmlsZS9zZWN0aW9uLXVwbG9hZC1maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBO0FBQ0EsZ2xCQUFnbEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqLyJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_themes_custom_app_submission_sections_upload_file_section-upload-file_component_ts.js.map