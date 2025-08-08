"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_themes_custom_app_submission_form_submission-upload-files_submission-upload-files_component_ts"],{

/***/ 19247:
/*!************************************************************************************************************!*\
  !*** ./src/themes/custom/app/submission/form/submission-upload-files/submission-upload-files.component.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SubmissionUploadFilesComponent: () => (/* binding */ SubmissionUploadFilesComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _app_shared_upload_uploader_uploader_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../app/shared/upload/uploader/uploader.component */ 18430);
/* harmony import */ var _app_submission_form_submission_upload_files_submission_upload_files_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../app/submission/form/submission-upload-files/submission-upload-files.component */ 93256);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);




function SubmissionUploadFilesComponent_ds_uploader_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ds-uploader", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onCompleteItem", function SubmissionUploadFilesComponent_ds_uploader_0_Template_ds_uploader_onCompleteItem_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.onCompleteItem($event));
    })("onUploadError", function SubmissionUploadFilesComponent_ds_uploader_0_Template_ds_uploader_onUploadError_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.onUploadError());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dropMsg", ctx_r1.dropMsg)("dropOverDocumentMsg", ctx_r1.dropOverDocumentMsg)("enableDragOverDocument", ctx_r1.enableDragOverDocument)("onBeforeUpload", ctx_r1.onBeforeUpload)("uploadFilesOptions", ctx_r1.uploadFilesOptions);
  }
}
class SubmissionUploadFilesComponent extends _app_submission_form_submission_upload_files_submission_upload_files_component__WEBPACK_IMPORTED_MODULE_1__.SubmissionUploadFilesComponent {
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵSubmissionUploadFilesComponent_BaseFactory;
      return function SubmissionUploadFilesComponent_Factory(t) {
        return (ɵSubmissionUploadFilesComponent_BaseFactory || (ɵSubmissionUploadFilesComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](SubmissionUploadFilesComponent)))(t || SubmissionUploadFilesComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: SubmissionUploadFilesComponent,
      selectors: [["ds-themed-submission-upload-files"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 1,
      vars: 1,
      consts: [[3, "dropMsg", "dropOverDocumentMsg", "enableDragOverDocument", "onBeforeUpload", "uploadFilesOptions", "onCompleteItem", "onUploadError", 4, "ngIf"], [3, "onCompleteItem", "onUploadError", "dropMsg", "dropOverDocumentMsg", "enableDragOverDocument", "onBeforeUpload", "uploadFilesOptions"]],
      template: function SubmissionUploadFilesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, SubmissionUploadFilesComponent_ds_uploader_0_Template, 1, 5, "ds-uploader", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.uploadFilesOptions.url);
        }
      },
      dependencies: [_app_shared_upload_uploader_uploader_component__WEBPACK_IMPORTED_MODULE_0__.UploaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf],
      encapsulation: 2
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_themes_custom_app_submission_form_submission-upload-files_submission-upload-files_component_ts.js.map