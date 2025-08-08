"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_themes_custom_app_item-page_simple_metadata-representation-list_metadata-representation-l-dac313"],{

/***/ 32890:
/*!***********************************************************************************************************************!*\
  !*** ./src/themes/custom/app/item-page/simple/metadata-representation-list/metadata-representation-list.component.ts ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MetadataRepresentationListComponent: () => (/* binding */ MetadataRepresentationListComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var _app_item_page_simple_metadata_representation_list_metadata_representation_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../app/item-page/simple/metadata-representation-list/metadata-representation-list.component */ 12063);
/* harmony import */ var _app_shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../app/shared/loading/themed-loading.component */ 82394);
/* harmony import */ var _app_shared_metadata_field_wrapper_metadata_field_wrapper_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../app/shared/metadata-field-wrapper/metadata-field-wrapper.component */ 79222);
/* harmony import */ var _app_shared_metadata_representation_metadata_representation_loader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../app/shared/metadata-representation/metadata-representation-loader.component */ 32272);
/* harmony import */ var _app_shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../app/shared/utils/var.directive */ 18226);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 90310);









const _c0 = a0 => ({
  amount: a0
});
function MetadataRepresentationListComponent_ng_container_1_ng_container_1_ds_metadata_representation_loader_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "ds-metadata-representation-loader", 6);
  }
  if (rf & 2) {
    const rep_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("mdRepresentation", rep_r1);
  }
}
function MetadataRepresentationListComponent_ng_container_1_ng_container_1_ds_loading_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "ds-loading", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("message", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 1, "loading.default"));
  }
}
function MetadataRepresentationListComponent_ng_container_1_ng_container_1_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 11)(1, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function MetadataRepresentationListComponent_ng_container_1_ng_container_1_div_3_div_1_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.increase());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](3, 1, "item.page.related-items.view-more", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](4, _c0, ctx_r2.total - ctx_r2.objects.length * ctx_r2.incrementBy < ctx_r2.incrementBy ? ctx_r2.total - ctx_r2.objects.length * ctx_r2.incrementBy : ctx_r2.incrementBy)));
  }
}
function MetadataRepresentationListComponent_ng_container_1_ng_container_1_div_3_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 13)(1, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function MetadataRepresentationListComponent_ng_container_1_ng_container_1_div_3_div_2_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.decrease());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const representations_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).ngVar;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](3, 1, "item.page.related-items.view-less", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](4, _c0, representations_r5 == null ? null : representations_r5.length)));
  }
}
function MetadataRepresentationListComponent_ng_container_1_ng_container_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, MetadataRepresentationListComponent_ng_container_1_ng_container_1_div_3_div_1_Template, 4, 6, "div", 9)(2, MetadataRepresentationListComponent_ng_container_1_ng_container_1_div_3_div_2_Template, 4, 6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.objects.length * ctx_r2.incrementBy < ctx_r2.total);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.objects.length > 1);
  }
}
function MetadataRepresentationListComponent_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, MetadataRepresentationListComponent_ng_container_1_ng_container_1_ds_metadata_representation_loader_1_Template, 1, 1, "ds-metadata-representation-loader", 3)(2, MetadataRepresentationListComponent_ng_container_1_ng_container_1_ds_loading_2_Template, 2, 3, "ds-loading", 4)(3, MetadataRepresentationListComponent_ng_container_1_ng_container_1_div_3_Template, 3, 2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const representations_r5 = ctx.ngVar;
    const i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", representations_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", i_r6 + 1 === ctx_r2.objects.length && i_r6 > 0 && (!representations_r5 || (representations_r5 == null ? null : representations_r5.length) === 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", i_r6 + 1 === ctx_r2.objects.length && (representations_r5 == null ? null : representations_r5.length) > 0);
  }
}
function MetadataRepresentationListComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, MetadataRepresentationListComponent_ng_container_1_ng_container_1_Template, 4, 3, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const objectPage_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngVar", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, objectPage_r7));
  }
}
class MetadataRepresentationListComponent extends _app_item_page_simple_metadata_representation_list_metadata_representation_list_component__WEBPACK_IMPORTED_MODULE_0__.MetadataRepresentationListComponent {
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵMetadataRepresentationListComponent_BaseFactory;
      return function MetadataRepresentationListComponent_Factory(t) {
        return (ɵMetadataRepresentationListComponent_BaseFactory || (ɵMetadataRepresentationListComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetInheritedFactory"](MetadataRepresentationListComponent)))(t || MetadataRepresentationListComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: MetadataRepresentationListComponent,
      selectors: [["ds-themed-metadata-representation-list"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 2,
      consts: [[3, "label"], [4, "ngFor", "ngForOf"], [4, "ngVar"], [3, "mdRepresentation", 4, "ngFor", "ngForOf"], [3, "message", 4, "ngIf"], ["class", "d-inline-block w-100 mt-2", 4, "ngIf"], [3, "mdRepresentation"], [3, "message"], [1, "d-inline-block", "w-100", "mt-2"], ["class", "float-left", 4, "ngIf"], ["class", "float-right", 4, "ngIf"], [1, "float-left"], [1, "btn", "btn-link", "btn-link-inline", 3, "click"], [1, "float-right"]],
      template: function MetadataRepresentationListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ds-metadata-field-wrapper", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, MetadataRepresentationListComponent_ng_container_1_Template, 3, 3, "ng-container", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("label", ctx.label);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.objects);
        }
      },
      dependencies: [_app_shared_metadata_field_wrapper_metadata_field_wrapper_component__WEBPACK_IMPORTED_MODULE_2__.MetadataFieldWrapperComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgFor, _app_shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_4__.VarDirective, _app_shared_metadata_representation_metadata_representation_loader_component__WEBPACK_IMPORTED_MODULE_3__.MetadataRepresentationLoaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _app_shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_1__.ThemedLoadingComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe],
      encapsulation: 2
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_themes_custom_app_item-page_simple_metadata-representation-list_metadata-representation-l-dac313.js.map