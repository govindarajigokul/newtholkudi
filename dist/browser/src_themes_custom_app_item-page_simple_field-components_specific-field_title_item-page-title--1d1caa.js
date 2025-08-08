"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_themes_custom_app_item-page_simple_field-components_specific-field_title_item-page-title--1d1caa"],{

/***/ 1739:
/*!*************************************************************************************************************************!*\
  !*** ./src/themes/custom/app/item-page/simple/field-components/specific-field/title/item-page-title-field.component.ts ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ItemPageTitleFieldComponent: () => (/* binding */ ItemPageTitleFieldComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var _app_item_page_simple_field_components_specific_field_title_item_page_title_field_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../app/item-page/simple/field-components/specific-field/title/item-page-title-field.component */ 42458);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 90310);





function ItemPageTitleFieldComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const type_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, type_r1.toLowerCase() + ".page.titleprefix"), " ");
  }
}
class ItemPageTitleFieldComponent extends _app_item_page_simple_field_components_specific_field_title_item_page_title_field_component__WEBPACK_IMPORTED_MODULE_0__.ItemPageTitleFieldComponent {
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵItemPageTitleFieldComponent_BaseFactory;
      return function ItemPageTitleFieldComponent_Factory(t) {
        return (ɵItemPageTitleFieldComponent_BaseFactory || (ɵItemPageTitleFieldComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](ItemPageTitleFieldComponent)))(t || ItemPageTitleFieldComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ItemPageTitleFieldComponent,
      selectors: [["ds-themed-item-page-title-field"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 4,
      vars: 2,
      consts: [[1, "item-page-title-field"], ["class", "d-inline", 4, "ngIf"], [1, "dont-break-out"], [1, "d-inline"]],
      template: function ItemPageTitleFieldComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ItemPageTitleFieldComponent_div_1_Template, 3, 3, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.item.firstMetadataValue("dspace.entity.type"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.dsoNameService.getName(ctx.item));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe],
      encapsulation: 2
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_themes_custom_app_item-page_simple_field-components_specific-field_title_item-page-title--1d1caa.js.map