"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_themes_custom_app_item-page_simple_field-components_file-section_file-section_component_ts"],{

/***/ 38072:
/*!********************************************************************************************************!*\
  !*** ./src/themes/custom/app/item-page/simple/field-components/file-section/file-section.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FileSectionComponent: () => (/* binding */ FileSectionComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var _app_item_page_simple_field_components_file_section_file_section_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../app/item-page/simple/field-components/file-section/file-section.component */ 1231);
/* harmony import */ var _app_shared_animations_slide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../app/shared/animations/slide */ 621);
/* harmony import */ var _app_shared_file_download_link_themed_file_download_link_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../app/shared/file-download-link/themed-file-download-link.component */ 28836);
/* harmony import */ var _app_shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../app/shared/loading/themed-loading.component */ 82394);
/* harmony import */ var _app_shared_metadata_field_wrapper_metadata_field_wrapper_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../app/shared/metadata-field-wrapper/metadata-field-wrapper.component */ 79222);
/* harmony import */ var _app_shared_utils_file_size_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../app/shared/utils/file-size-pipe */ 43525);
/* harmony import */ var _app_shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../app/shared/utils/var.directive */ 18226);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 90310);












function FileSectionComponent_ng_container_0_ds_metadata_field_wrapper_1_ds_file_download_link_3_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "item.page.bitstreams.primary"));
  }
}
function FileSectionComponent_ng_container_0_ds_metadata_field_wrapper_1_ds_file_download_link_3_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "span", 12);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("innerHTML", ctx_r0.separator, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeHtml"]);
  }
}
function FileSectionComponent_ng_container_0_ds_metadata_field_wrapper_1_ds_file_download_link_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ds-file-download-link", 8)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, FileSectionComponent_ng_container_0_ds_metadata_field_wrapper_1_ds_file_download_link_3_span_2_Template, 3, 3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "dsFileSize");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, FileSectionComponent_ng_container_0_ds_metadata_field_wrapper_1_ds_file_download_link_3_span_7_Template, 1, 1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const file_r2 = ctx.$implicit;
    const last_r3 = ctx.last;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("bitstream", file_r2)("item", ctx_r0.item);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.primaryBitsreamId === file_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r0.dsoNameService.getName(file_r2), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" (", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](6, 6, file_r2 == null ? null : file_r2.sizeBytes), ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !last_r3);
  }
}
function FileSectionComponent_ng_container_0_ds_metadata_field_wrapper_1_ds_loading_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "ds-loading", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("message", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 2, "loading.default"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("showMessage", false);
  }
}
function FileSectionComponent_ng_container_0_ds_metadata_field_wrapper_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 14)(1, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function FileSectionComponent_ng_container_0_ds_metadata_field_wrapper_1_div_5_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.getNextPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 1, "item.page.bitstreams.view-more"));
  }
}
function FileSectionComponent_ng_container_0_ds_metadata_field_wrapper_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 16)(1, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function FileSectionComponent_ng_container_0_ds_metadata_field_wrapper_1_div_6_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      ctx_r0.currentPage = undefined;
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.getNextPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 1, "item.page.bitstreams.collapse"));
  }
}
function FileSectionComponent_ng_container_0_ds_metadata_field_wrapper_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ds-metadata-field-wrapper", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, FileSectionComponent_ng_container_0_ds_metadata_field_wrapper_1_ds_file_download_link_3_Template, 8, 8, "ds-file-download-link", 4)(4, FileSectionComponent_ng_container_0_ds_metadata_field_wrapper_1_ds_loading_4_Template, 2, 4, "ds-loading", 5)(5, FileSectionComponent_ng_container_0_ds_metadata_field_wrapper_1_div_5_Template, 4, 3, "div", 6)(6, FileSectionComponent_ng_container_0_ds_metadata_field_wrapper_1_div_6_Template, 4, 3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const bitstreams_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().ngVar;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 5, ctx_r0.label));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", bitstreams_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r0.isLastPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.isLastPage && ctx_r0.currentPage !== 1);
  }
}
function FileSectionComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, FileSectionComponent_ng_container_0_ds_metadata_field_wrapper_1_Template, 7, 7, "ds-metadata-field-wrapper", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const bitstreams_r6 = ctx.ngVar;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (bitstreams_r6 == null ? null : bitstreams_r6.length) > 0);
  }
}
class FileSectionComponent extends _app_item_page_simple_field_components_file_section_file_section_component__WEBPACK_IMPORTED_MODULE_0__.FileSectionComponent {
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵFileSectionComponent_BaseFactory;
      return function FileSectionComponent_Factory(t) {
        return (ɵFileSectionComponent_BaseFactory || (ɵFileSectionComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetInheritedFactory"](FileSectionComponent)))(t || FileSectionComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: FileSectionComponent,
      selectors: [["ds-themed-item-page-file-section"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 3,
      consts: [[4, "ngVar"], [3, "label", 4, "ngIf"], [3, "label"], [1, "file-section"], [3, "bitstream", "item", 4, "ngFor", "ngForOf"], [3, "message", "showMessage", 4, "ngIf"], ["class", "mt-1", "id", "view-more", 4, "ngIf"], ["class", "mt-1", "id", "collapse", 4, "ngIf"], [3, "bitstream", "item"], ["class", "badge badge-primary", 4, "ngIf"], [3, "innerHTML", 4, "ngIf"], [1, "badge", "badge-primary"], [3, "innerHTML"], [3, "message", "showMessage"], ["id", "view-more", 1, "mt-1"], [1, "bitstream-view-more", "btn", "btn-outline-secondary", "btn-sm", 3, "click"], ["id", "collapse", 1, "mt-1"], [1, "bitstream-collapse", "btn", "btn-outline-secondary", "btn-sm", 3, "click"]],
      template: function FileSectionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, FileSectionComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "async");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngVar", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 1, ctx.bitstreams$));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe, _app_shared_file_download_link_themed_file_download_link_component__WEBPACK_IMPORTED_MODULE_2__.ThemedFileDownloadLinkComponent, _app_shared_metadata_field_wrapper_metadata_field_wrapper_component__WEBPACK_IMPORTED_MODULE_4__.MetadataFieldWrapperComponent, _app_shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_3__.ThemedLoadingComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe, _app_shared_utils_file_size_pipe__WEBPACK_IMPORTED_MODULE_5__.FileSizePipe, _app_shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_6__.VarDirective],
      encapsulation: 2,
      data: {
        animation: [_app_shared_animations_slide__WEBPACK_IMPORTED_MODULE_1__.slideSidebarPadding]
      }
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_themes_custom_app_item-page_simple_field-components_file-section_file-section_component_ts.js.map