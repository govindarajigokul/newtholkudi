"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_themes_custom_app_shared_object-detail_my-dspace-result-detail-element_item-detail-previe-af3e23"],{

/***/ 69585:
/*!*************************************************************************************************************************************************************************!*\
  !*** ./src/themes/custom/app/shared/object-detail/my-dspace-result-detail-element/item-detail-preview/item-detail-preview-field/item-detail-preview-field.component.ts ***!
  \*************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ItemDetailPreviewFieldComponent: () => (/* binding */ ItemDetailPreviewFieldComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var _app_shared_metadata_field_wrapper_metadata_field_wrapper_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../app/shared/metadata-field-wrapper/metadata-field-wrapper.component */ 79222);
/* harmony import */ var _app_shared_object_detail_my_dspace_result_detail_element_item_detail_preview_item_detail_preview_field_item_detail_preview_field_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../app/shared/object-detail/my-dspace-result-detail-element/item-detail-preview/item-detail-preview-field/item-detail-preview-field.component */ 3736);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);






function ItemDetailPreviewFieldComponent_ng_container_2_span_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 4);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx_r0.separator, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
  }
}
function ItemDetailPreviewFieldComponent_ng_container_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ItemDetailPreviewFieldComponent_ng_container_2_span_1_span_2_Template, 1, 1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const mdValue_r2 = ctx.$implicit;
    const last_r3 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", mdValue_r2, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !last_r3);
  }
}
function ItemDetailPreviewFieldComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ItemDetailPreviewFieldComponent_ng_container_2_span_1_Template, 3, 2, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.allMetadataValues(ctx_r0.metadata));
  }
}
function ItemDetailPreviewFieldComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 1, ctx_r0.placeholder));
  }
}
class ItemDetailPreviewFieldComponent extends _app_shared_object_detail_my_dspace_result_detail_element_item_detail_preview_item_detail_preview_field_item_detail_preview_field_component__WEBPACK_IMPORTED_MODULE_1__.ItemDetailPreviewFieldComponent {
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵItemDetailPreviewFieldComponent_BaseFactory;
      return function ItemDetailPreviewFieldComponent_Factory(t) {
        return (ɵItemDetailPreviewFieldComponent_BaseFactory || (ɵItemDetailPreviewFieldComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](ItemDetailPreviewFieldComponent)))(t || ItemDetailPreviewFieldComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ItemDetailPreviewFieldComponent,
      selectors: [["ds-themed-item-detail-preview-field"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 4,
      vars: 5,
      consts: [[3, "label"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "innerHTML", 4, "ngIf"], [3, "innerHTML"], [1, "text-muted"]],
      template: function ItemDetailPreviewFieldComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ds-metadata-field-wrapper", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ItemDetailPreviewFieldComponent_ng_container_2_Template, 2, 1, "ng-container", 1)(3, ItemDetailPreviewFieldComponent_ng_container_3_Template, 4, 3, "ng-container", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 3, ctx.label));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.item.hasMetadata(ctx.metadata));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.item.hasMetadata(ctx.metadata));
        }
      },
      dependencies: [_app_shared_metadata_field_wrapper_metadata_field_wrapper_component__WEBPACK_IMPORTED_MODULE_0__.MetadataFieldWrapperComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgFor, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe],
      encapsulation: 2
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_themes_custom_app_shared_object-detail_my-dspace-result-detail-element_item-detail-previe-af3e23.js.map