"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_themes_custom_app_collection-page_edit-item-template-page_edit-item-template-page_component_ts"],{

/***/ 1928:
/*!************************************************************************************************************!*\
  !*** ./src/themes/custom/app/collection-page/edit-item-template-page/edit-item-template-page.component.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditItemTemplatePageComponent: () => (/* binding */ EditItemTemplatePageComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var _app_collection_page_edit_item_template_page_edit_item_template_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../app/collection-page/edit-item-template-page/edit-item-template-page.component */ 64767);
/* harmony import */ var _app_dso_shared_dso_edit_metadata_themed_dso_edit_metadata_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../app/dso-shared/dso-edit-metadata/themed-dso-edit-metadata.component */ 13707);
/* harmony import */ var _app_shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../app/shared/alert/alert.component */ 16292);
/* harmony import */ var _app_shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../app/shared/loading/themed-loading.component */ 82394);
/* harmony import */ var _app_shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../app/shared/utils/var.directive */ 18226);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 90310);










const _c0 = a0 => ({
  collection: a0
});
function EditItemTemplatePageComponent_div_0_div_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h1", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "ds-dso-edit-metadata", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const itemRD_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().ngVar;
    const collection_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().ngVar;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](3, 5, "collection.edit.template.head", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](10, _c0, ctx_r2.dsoNameService.getName(collection_r2))));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("updateDataService", ctx_r2.itemTemplateService)("dso", itemRD_r1 == null ? null : itemRD_r1.payload);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx_r2.getCollectionEditUrl(collection_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](7, 8, "collection.edit.template.cancel"));
  }
}
function EditItemTemplatePageComponent_div_0_div_2_ds_loading_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "ds-loading", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("message", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 1, "collection.edit.template.loading"));
  }
}
function EditItemTemplatePageComponent_div_0_div_2_ds_alert_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "ds-alert", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("type", ctx_r2.AlertTypeEnum.Error)("content", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 2, "collection.edit.template.error"));
  }
}
function EditItemTemplatePageComponent_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, EditItemTemplatePageComponent_div_0_div_2_ng_container_1_Template, 8, 12, "ng-container", 5)(2, EditItemTemplatePageComponent_div_0_div_2_ds_loading_2_Template, 2, 3, "ds-loading", 6)(3, EditItemTemplatePageComponent_div_0_div_2_ds_alert_3_Template, 2, 4, "ds-alert", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const itemRD_r1 = ctx.ngVar;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", itemRD_r1 == null ? null : itemRD_r1.hasSucceeded);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", itemRD_r1 == null ? null : itemRD_r1.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", itemRD_r1 == null ? null : itemRD_r1.hasFailed);
  }
}
function EditItemTemplatePageComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 1)(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, EditItemTemplatePageComponent_div_0_div_2_Template, 4, 3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngVar", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 1, ctx_r2.itemRD$));
  }
}
/**
 * Component for editing the item template of a collection
 */
class EditItemTemplatePageComponent extends _app_collection_page_edit_item_template_page_edit_item_template_page_component__WEBPACK_IMPORTED_MODULE_0__.EditItemTemplatePageComponent {
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵEditItemTemplatePageComponent_BaseFactory;
      return function EditItemTemplatePageComponent_Factory(t) {
        return (ɵEditItemTemplatePageComponent_BaseFactory || (ɵEditItemTemplatePageComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetInheritedFactory"](EditItemTemplatePageComponent)))(t || EditItemTemplatePageComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: EditItemTemplatePageComponent,
      selectors: [["ds-themed-edit-item-template-page"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 3,
      consts: [["class", "container", 4, "ngVar"], [1, "container"], [1, "row"], ["class", "col-12", 4, "ngVar"], [1, "col-12"], [4, "ngIf"], [3, "message", 4, "ngIf"], [3, "type", "content", 4, "ngIf"], [1, "border-bottom"], [3, "updateDataService", "dso"], [1, "btn", "btn-outline-secondary", 3, "routerLink"], [3, "message"], [3, "type", "content"]],
      template: function EditItemTemplatePageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, EditItemTemplatePageComponent_div_0_Template, 4, 3, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "async");
        }
        if (rf & 2) {
          let tmp_0_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngVar", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 1, ctx.collectionRD$)) == null ? null : tmp_0_0.payload);
        }
      },
      dependencies: [_app_dso_shared_dso_edit_metadata_themed_dso_edit_metadata_component__WEBPACK_IMPORTED_MODULE_1__.ThemedDsoEditMetadataComponent, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe, _app_shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_4__.VarDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe, _app_shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_3__.ThemedLoadingComponent, _app_shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_2__.AlertComponent],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtaXRlbS10ZW1wbGF0ZS1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBIiwiZmlsZSI6ImVkaXQtaXRlbS10ZW1wbGF0ZS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi8iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy90aGVtZXMvY3VzdG9tL2FwcC9jb2xsZWN0aW9uLXBhZ2UvZWRpdC1pdGVtLXRlbXBsYXRlLXBhZ2UvZWRpdC1pdGVtLXRlbXBsYXRlLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQSw0bEJBQTRsQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_themes_custom_app_collection-page_edit-item-template-page_edit-item-template-page_component_ts.js.map