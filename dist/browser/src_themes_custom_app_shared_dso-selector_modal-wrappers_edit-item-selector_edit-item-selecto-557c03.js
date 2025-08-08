"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_themes_custom_app_shared_dso-selector_modal-wrappers_edit-item-selector_edit-item-selecto-557c03"],{

/***/ 94189:
/*!*********************************************************************************************************************!*\
  !*** ./src/themes/custom/app/shared/dso-selector/modal-wrappers/edit-item-selector/edit-item-selector.component.ts ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditItemSelectorComponent: () => (/* binding */ EditItemSelectorComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var src_app_shared_dso_selector_modal_wrappers_edit_item_selector_edit_item_selector_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/dso-selector/modal-wrappers/edit-item-selector/edit-item-selector.component */ 29380);
/* harmony import */ var _app_shared_dso_selector_dso_selector_dso_selector_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../app/shared/dso-selector/dso-selector/dso-selector.component */ 73183);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);






function EditItemSelectorComponent_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, ctx_r0.header));
  }
}
class EditItemSelectorComponent extends src_app_shared_dso_selector_modal_wrappers_edit_item_selector_edit_item_selector_component__WEBPACK_IMPORTED_MODULE_0__.EditItemSelectorComponent {
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵEditItemSelectorComponent_BaseFactory;
      return function EditItemSelectorComponent_Factory(t) {
        return (ɵEditItemSelectorComponent_BaseFactory || (ɵEditItemSelectorComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](EditItemSelectorComponent)))(t || EditItemSelectorComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: EditItemSelectorComponent,
      selectors: [["ds-themed-edit-item-selector"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 10,
      vars: 7,
      consts: [[1, "modal-header"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["class", "h5 px-2", 4, "ngIf"], [3, "onSelect", "currentDSOId", "types", "sort"], [1, "h5", "px-2"]],
      template: function EditItemSelectorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditItemSelectorComponent_Template_button_click_4_listener() {
            return ctx.close();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, EditItemSelectorComponent_span_8_Template, 3, 3, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "ds-dso-selector", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onSelect", function EditItemSelectorComponent_Template_ds_dso_selector_onSelect_9_listener($event) {
            return ctx.selectObject($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 5, "dso-selector." + ctx.action + "." + ctx.objectType.toString().toLowerCase() + ".head"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.header);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("currentDSOId", ctx.dsoRD == null ? null : ctx.dsoRD.payload.uuid)("types", ctx.selectorTypes)("sort", ctx.defaultSort);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _app_shared_dso_selector_dso_selector_dso_selector_component__WEBPACK_IMPORTED_MODULE_1__.DSOSelectorComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe],
      encapsulation: 2
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_themes_custom_app_shared_dso-selector_modal-wrappers_edit-item-selector_edit-item-selecto-557c03.js.map