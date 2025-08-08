"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_themes_custom_app_admin_admin-import-metadata-page_metadata-import-page_component_ts"],{

/***/ 77413:
/*!**************************************************************************************************!*\
  !*** ./src/themes/custom/app/admin/admin-import-metadata-page/metadata-import-page.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MetadataImportPageComponent: () => (/* binding */ MetadataImportPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 56106);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var _app_admin_admin_import_metadata_page_metadata_import_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../app/admin/admin-import-metadata-page/metadata-import-page.component */ 45706);
/* harmony import */ var _app_shared_upload_file_dropzone_no_uploader_file_dropzone_no_uploader_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../app/shared/upload/file-dropzone-no-uploader/file-dropzone-no-uploader.component */ 2448);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);







class MetadataImportPageComponent extends _app_admin_admin_import_metadata_page_metadata_import_page_component__WEBPACK_IMPORTED_MODULE_0__.MetadataImportPageComponent {
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵMetadataImportPageComponent_BaseFactory;
      return function MetadataImportPageComponent_Factory(t) {
        return (ɵMetadataImportPageComponent_BaseFactory || (ɵMetadataImportPageComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](MetadataImportPageComponent)))(t || MetadataImportPageComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: MetadataImportPageComponent,
      selectors: [["ds-themed-metadata-import-page"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 24,
      vars: 21,
      consts: [[1, "container"], ["id", "header"], [1, "form-group"], [1, "form-check"], ["type", "checkbox", "id", "validateOnly", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["for", "validateOnly", 1, "form-check-label"], ["id", "validateOnlyHelpBlock", 1, "form-text", "text-muted"], [3, "onFileAdded", "dropMessageLabel", "dropMessageLabelReplacement"], [1, "space-children-mr"], ["id", "backButton", 1, "btn", "btn-secondary", 3, "click"], ["id", "proceedButton", 1, "btn", "btn-primary", 3, "click"]],
      template: function MetadataImportPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 2)(8, "div", 3)(9, "input", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function MetadataImportPageComponent_Template_input_ngModelChange_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.validateOnly, $event) || (ctx.validateOnly = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "small", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](15, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "ds-file-dropzone-no-uploader", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onFileAdded", function MetadataImportPageComponent_Template_ds_file_dropzone_no_uploader_onFileAdded_16_listener($event) {
            return ctx.setFile($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 8)(18, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MetadataImportPageComponent_Template_button_click_18_listener() {
            return ctx.onReturn();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](20, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MetadataImportPageComponent_Template_button_click_21_listener() {
            return ctx.importMetadata();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](23, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 9, "admin.metadata-import.page.header"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 11, "admin.metadata-import.page.help"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.validateOnly);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](12, 13, "admin.metadata-import.page.validateOnly"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](15, 15, "admin.metadata-import.page.validateOnly.hint"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dropMessageLabel", "admin.metadata-import.page.dropMsg")("dropMessageLabelReplacement", "admin.metadata-import.page.dropMsgReplace");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](20, 17, "admin.metadata-import.page.button.return"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](23, 19, "admin.metadata-import.page.button.proceed"));
        }
      },
      dependencies: [_app_shared_upload_file_dropzone_no_uploader_file_dropzone_no_uploader_component__WEBPACK_IMPORTED_MODULE_1__.FileDropzoneNoUploaderComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe],
      encapsulation: 2
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_themes_custom_app_admin_admin-import-metadata-page_metadata-import-page_component_ts.js.map