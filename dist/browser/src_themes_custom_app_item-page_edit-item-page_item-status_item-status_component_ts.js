"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_themes_custom_app_item-page_edit-item-page_item-status_item-status_component_ts"],{

/***/ 13382:
/*!*********************************************************************************************!*\
  !*** ./src/themes/custom/app/item-page/edit-item-page/item-status/item-status.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ItemStatusComponent: () => (/* binding */ ItemStatusComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var _app_item_page_edit_item_page_item_operation_item_operation_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../app/item-page/edit-item-page/item-operation/item-operation.component */ 37223);
/* harmony import */ var _app_item_page_edit_item_page_item_status_item_status_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../app/item-page/edit-item-page/item-status/item-status.component */ 3915);
/* harmony import */ var _app_shared_animations_fade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../app/shared/animations/fade */ 50332);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 90310);








const _c0 = a0 => ({
  "pt-3": a0
});
function ItemStatusComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7)(1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const statusKey_r1 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 4, "item.edit.tabs.status.labels." + statusKey_r1), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("id", "status-", statusKey_r1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.statusData[statusKey_r1], " ");
  }
}
function ItemStatusComponent_div_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const identifier_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", identifier_r3.identifierType.toLocaleUpperCase(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", identifier_r3.value, " (", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 3, "item.edit.identifiers.doi.status." + identifier_r3.identifierStatus), ")");
  }
}
function ItemStatusComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ItemStatusComponent_div_5_div_1_Template, 6, 5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const identifier_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", identifier_r3.identifierType === "doi");
  }
}
function ItemStatusComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "ds-item-operation", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const operation_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c0, operation_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("operation", operation_r4);
  }
}
class ItemStatusComponent extends _app_item_page_edit_item_page_item_status_item_status_component__WEBPACK_IMPORTED_MODULE_1__.ItemStatusComponent {
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵItemStatusComponent_BaseFactory;
      return function ItemStatusComponent_Factory(t) {
        return (ɵItemStatusComponent_BaseFactory || (ɵItemStatusComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](ItemStatusComponent)))(t || ItemStatusComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: ItemStatusComponent,
      selectors: [["ds-themed-item-status"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
      decls: 17,
      vars: 19,
      consts: [[1, "mt-2"], [1, "row"], ["class", "w-100 pt-1", 4, "ngFor", "ngForOf"], [1, "col-12", "col-md-3", "float-left", "status-label", "font-weight-bold"], ["id", "status-itemPage", 1, "col-12", "col-md-9", "float-left", "status-data"], [3, "routerLink"], ["class", "w-100", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "w-100", "pt-1"], [1, "col-12", "col-md-9", "float-left", "status-data", 3, "id"], [4, "ngIf"], [1, "col-12", "col-md-9", "float-left", "status-label", "font-weight-bold"], [1, "w-100", 3, "ngClass"], [3, "operation"]],
      template: function ItemStatusComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, ItemStatusComponent_div_4_Template, 6, 6, "div", 2)(5, ItemStatusComponent_div_5_Template, 2, 1, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 4)(11, "a", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](14, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, ItemStatusComponent_div_15_Template, 2, 4, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](16, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 7, "item.edit.tabs.status.description"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.statusDataKeys);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 9, ctx.identifiers$));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](9, 11, "item.edit.tabs.status.labels.itemPage"), ": ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](12, 13, ctx.itemPageRoute$));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](14, 15, ctx.itemPageRoute$));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](16, 17, ctx.operations$));
        }
      },
      dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _app_item_page_edit_item_page_item_operation_item_operation_component__WEBPACK_IMPORTED_MODULE_0__.ItemOperationComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass],
      encapsulation: 2,
      data: {
        animation: [_app_shared_animations_fade__WEBPACK_IMPORTED_MODULE_2__.fadeIn, _app_shared_animations_fade__WEBPACK_IMPORTED_MODULE_2__.fadeInOut]
      }
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_themes_custom_app_item-page_edit-item-page_item-status_item-status_component_ts.js.map