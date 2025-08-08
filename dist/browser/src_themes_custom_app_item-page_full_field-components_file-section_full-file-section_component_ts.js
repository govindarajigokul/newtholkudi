"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_themes_custom_app_item-page_full_field-components_file-section_full-file-section_component_ts"],{

/***/ 42991:
/*!***********************************************************************************************************!*\
  !*** ./src/themes/custom/app/item-page/full/field-components/file-section/full-file-section.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FullFileSectionComponent: () => (/* binding */ FullFileSectionComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var _app_item_page_full_field_components_file_section_full_file_section_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../app/item-page/full/field-components/file-section/full-file-section.component */ 14826);
/* harmony import */ var _app_shared_file_download_link_themed_file_download_link_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../app/shared/file-download-link/themed-file-download-link.component */ 28836);
/* harmony import */ var _app_shared_metadata_field_wrapper_metadata_field_wrapper_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../app/shared/metadata-field-wrapper/metadata-field-wrapper.component */ 79222);
/* harmony import */ var _app_shared_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../app/shared/pagination/pagination.component */ 40590);
/* harmony import */ var _app_shared_utils_file_size_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../app/shared/utils/file-size-pipe */ 43525);
/* harmony import */ var _app_shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../app/shared/utils/var.directive */ 18226);
/* harmony import */ var _app_thumbnail_themed_thumbnail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../app/thumbnail/themed-thumbnail.component */ 97402);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 90310);











function FullFileSectionComponent_div_2_div_1_ds_pagination_4_div_1_ng_container_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "dt", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "dd", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const file_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 2, "item.page.filesection.description"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](file_r1.firstMetadataValue("dc.description"));
  }
}
function FullFileSectionComponent_div_2_div_1_ds_pagination_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 7)(1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "ds-thumbnail", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 10)(5, "dl", 11)(6, "dt", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "dd", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "dt", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "dd", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](16, "dsFileSize");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "dt", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "dd", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](22, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](23, FullFileSectionComponent_div_2_div_1_ds_pagination_4_div_1_ng_container_23_Template, 6, 4, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "div", 14)(25, "ds-file-download-link", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](27, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    let tmp_6_0;
    let tmp_12_0;
    const file_r1 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("thumbnail", (tmp_6_0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 11, file_r1.thumbnail)) == null ? null : tmp_6_0.payload);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](8, 13, "item.page.filesection.name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.dsoNameService.getName(file_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](13, 15, "item.page.filesection.size"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](16, 17, file_r1.sizeBytes));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](19, 19, "item.page.filesection.format"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"]((tmp_12_0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](22, 21, file_r1.format)) == null ? null : tmp_12_0.payload == null ? null : tmp_12_0.payload.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", file_r1.hasMetadata("dc.description"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("bitstream", file_r1)("item", ctx_r1.item);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](27, 23, "item.page.filesection.download"), " ");
  }
}
function FullFileSectionComponent_div_2_div_1_ds_pagination_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ds-pagination", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, FullFileSectionComponent_div_2_div_1_ds_pagination_4_div_1_Template, 28, 25, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const originals_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).ngVar;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hideGear", true)("hidePagerWhenSinglePage", true)("paginationOptions", ctx_r1.originalOptions)("collectionSize", originals_r3 == null ? null : originals_r3.totalElements)("retainScrollPosition", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", originals_r3 == null ? null : originals_r3.page);
  }
}
function FullFileSectionComponent_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "h3", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, FullFileSectionComponent_div_2_div_1_ds_pagination_4_Template, 2, 6, "ds-pagination", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const originals_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().ngVar;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 2, "item.page.filesection.original.bundle"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (originals_r3 == null ? null : originals_r3.page == null ? null : originals_r3.page.length) > 0);
  }
}
function FullFileSectionComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, FullFileSectionComponent_div_2_div_1_Template, 5, 4, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const originals_r3 = ctx.ngVar;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.hasValuesInBundle(originals_r3));
  }
}
function FullFileSectionComponent_div_4_div_1_ds_pagination_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 17)(1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "ds-thumbnail", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 10)(5, "dl", 11)(6, "dt", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "dd", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "dt", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "dd", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](16, "dsFileSize");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "dt", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "dd", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](22, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "dt", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](25, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "dd", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "div", 14)(29, "ds-file-download-link", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](31, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    let tmp_6_0;
    let tmp_12_0;
    const file_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("thumbnail", (tmp_6_0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 12, file_r4.thumbnail)) == null ? null : tmp_6_0.payload);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](8, 14, "item.page.filesection.name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.dsoNameService.getName(file_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](13, 16, "item.page.filesection.size"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](16, 18, file_r4.sizeBytes));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](19, 20, "item.page.filesection.format"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"]((tmp_12_0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](22, 22, file_r4.format)) == null ? null : tmp_12_0.payload == null ? null : tmp_12_0.payload.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](25, 24, "item.page.filesection.description"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](file_r4.firstMetadataValue("dc.description"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("bitstream", file_r4)("item", ctx_r1.item);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](31, 26, "item.page.filesection.download"), " ");
  }
}
function FullFileSectionComponent_div_4_div_1_ds_pagination_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ds-pagination", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, FullFileSectionComponent_div_4_div_1_ds_pagination_4_div_1_Template, 32, 28, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const licenses_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).ngVar;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hideGear", true)("hidePagerWhenSinglePage", true)("paginationOptions", ctx_r1.licenseOptions)("collectionSize", licenses_r5 == null ? null : licenses_r5.totalElements)("retainScrollPosition", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", licenses_r5 == null ? null : licenses_r5.page);
  }
}
function FullFileSectionComponent_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "h3", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, FullFileSectionComponent_div_4_div_1_ds_pagination_4_Template, 2, 6, "ds-pagination", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const licenses_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().ngVar;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 2, "item.page.filesection.license.bundle"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (licenses_r5 == null ? null : licenses_r5.page == null ? null : licenses_r5.page.length) > 0);
  }
}
function FullFileSectionComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, FullFileSectionComponent_div_4_div_1_Template, 5, 4, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const licenses_r5 = ctx.ngVar;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.hasValuesInBundle(licenses_r5));
  }
}
class FullFileSectionComponent extends _app_item_page_full_field_components_file_section_full_file_section_component__WEBPACK_IMPORTED_MODULE_0__.FullFileSectionComponent {
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵFullFileSectionComponent_BaseFactory;
      return function FullFileSectionComponent_Factory(t) {
        return (ɵFullFileSectionComponent_BaseFactory || (ɵFullFileSectionComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetInheritedFactory"](FullFileSectionComponent)))(t || FullFileSectionComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: FullFileSectionComponent,
      selectors: [["ds-themed-item-page-full-file-section"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵStandaloneFeature"]],
      decls: 6,
      vars: 9,
      consts: [[3, "label"], [4, "ngVar"], [4, "ngIf"], [1, "h5", "simple-view-element-header"], [3, "hideGear", "hidePagerWhenSinglePage", "paginationOptions", "collectionSize", "retainScrollPosition", 4, "ngIf"], [3, "hideGear", "hidePagerWhenSinglePage", "paginationOptions", "collectionSize", "retainScrollPosition"], ["class", "file-section row mb-3", 4, "ngFor", "ngForOf"], [1, "file-section", "row", "mb-3"], [1, "col-3"], [3, "thumbnail"], [1, "col-7"], [1, "row"], [1, "col-md-4"], [1, "col-md-8"], [1, "col-2"], [3, "bitstream", "item"], ["class", "file-section row", 4, "ngFor", "ngForOf"], [1, "file-section", "row"]],
      template: function FullFileSectionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ds-metadata-field-wrapper", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, FullFileSectionComponent_div_2_Template, 2, 1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, FullFileSectionComponent_div_4_Template, 2, 1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          let tmp_1_0;
          let tmp_2_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 3, ctx.label));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngVar", (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 5, ctx.originals$)) == null ? null : tmp_1_0.payload);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngVar", (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](5, 7, ctx.licenses$)) == null ? null : tmp_2_0.payload);
        }
      },
      dependencies: [_app_shared_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_3__.PaginationComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe, _app_shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_5__.VarDirective, _app_thumbnail_themed_thumbnail_component__WEBPACK_IMPORTED_MODULE_6__.ThemedThumbnailComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _app_shared_file_download_link_themed_file_download_link_component__WEBPACK_IMPORTED_MODULE_1__.ThemedFileDownloadLinkComponent, _app_shared_utils_file_size_pipe__WEBPACK_IMPORTED_MODULE_4__.FileSizePipe, _app_shared_metadata_field_wrapper_metadata_field_wrapper_component__WEBPACK_IMPORTED_MODULE_2__.MetadataFieldWrapperComponent],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n@media screen and (min-width: 768px) {\n  dt[_ngcontent-%COMP%] {\n    text-align: right;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZ1bGwtZmlsZS1zZWN0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBO0FBQ0E7RUFDRTtJQUNFLGlCQUFBO0VBQ0Y7QUFDRiIsImZpbGUiOiJmdWxsLWZpbGUtc2VjdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICBkdCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIH1cbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaXRlbS1wYWdlL2Z1bGwvZmllbGQtY29tcG9uZW50cy9maWxlLXNlY3Rpb24vZnVsbC1maWxlLXNlY3Rpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQTtFQUNFO0lBQ0UsaUJBQUE7RUFDRjtBQUNGO0FBQ0EsZ3VCQUFndUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgZHQge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_themes_custom_app_item-page_full_field-components_file-section_full-file-section_component_ts.js.map