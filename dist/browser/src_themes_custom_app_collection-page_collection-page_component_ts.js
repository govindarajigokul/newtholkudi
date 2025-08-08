"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_themes_custom_app_collection-page_collection-page_component_ts"],{

/***/ 39751:
/*!****************************************************************************!*\
  !*** ./src/themes/custom/app/collection-page/collection-page.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CollectionPageComponent: () => (/* binding */ CollectionPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var _app_collection_page_collection_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../app/collection-page/collection-page.component */ 22864);
/* harmony import */ var _app_shared_animations_fade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../app/shared/animations/fade */ 50332);
/* harmony import */ var _app_shared_comcol_comcol_page_browse_by_themed_comcol_page_browse_by_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app/shared/comcol/comcol-page-browse-by/themed-comcol-page-browse-by.component */ 20538);
/* harmony import */ var _app_shared_comcol_comcol_page_content_themed_comcol_page_content_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../app/shared/comcol/comcol-page-content/themed-comcol-page-content.component */ 76072);
/* harmony import */ var _app_shared_comcol_comcol_page_handle_themed_comcol_page_handle_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../app/shared/comcol/comcol-page-handle/themed-comcol-page-handle.component */ 57632);
/* harmony import */ var _app_shared_comcol_comcol_page_header_comcol_page_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../app/shared/comcol/comcol-page-header/comcol-page-header.component */ 23348);
/* harmony import */ var _app_shared_comcol_comcol_page_logo_comcol_page_logo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../app/shared/comcol/comcol-page-logo/comcol-page-logo.component */ 31136);
/* harmony import */ var _app_shared_dso_page_dso_edit_menu_dso_edit_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../app/shared/dso-page/dso-edit-menu/dso-edit-menu.component */ 17807);
/* harmony import */ var _app_shared_error_error_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../app/shared/error/error.component */ 79632);
/* harmony import */ var _app_shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../app/shared/loading/themed-loading.component */ 82394);
/* harmony import */ var _app_shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../app/shared/utils/var.directive */ 18226);
/* harmony import */ var _app_statistics_angulartics_dspace_view_tracker_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../app/statistics/angulartics/dspace/view-tracker.component */ 57850);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 90310);

















function CollectionPageComponent_div_1_div_1_div_1_ds_comcol_page_logo_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "ds-comcol-page-logo", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");
  }
  if (rf & 2) {
    let tmp_6_0;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("logo", (tmp_6_0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](1, 2, ctx_r0.logoRD$)) == null ? null : tmp_6_0.payload)("alternateText", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 4, "collection.logo"));
  }
}
function CollectionPageComponent_div_1_div_1_div_1_footer_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "footer", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "ds-comcol-page-content", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const collection_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("content", collection_r2.copyrightText)("hasInnerHtml", true);
  }
}
function CollectionPageComponent_div_1_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "ds-view-tracker", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "div", 6)(3, "header", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](4, "ds-comcol-page-header", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](5, CollectionPageComponent_div_1_div_1_div_1_ds_comcol_page_logo_5_Template, 3, 6, "ds-comcol-page-logo", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](6, "ds-comcol-page-handle", 10)(7, "ds-comcol-page-content", 11)(8, "ds-comcol-page-content", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](9, "ds-dso-edit-menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "section", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](11, "ds-comcol-page-browse-by", 14)(12, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](13, CollectionPageComponent_div_1_div_1_div_1_footer_13_Template, 2, 2, "footer", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const collection_r2 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("object", collection_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("name", ctx_r0.dsoNameService.getName(collection_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r0.logoRD$);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("content", collection_r2.handle)("title", "collection.page.handle");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("content", collection_r2.introductoryText)("hasInnerHtml", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("content", collection_r2.sidebarText)("hasInnerHtml", true)("title", "collection.page.news");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("id", collection_r2.id)("contentType", collection_r2.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", collection_r2.copyrightText);
  }
}
function CollectionPageComponent_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, CollectionPageComponent_div_1_div_1_div_1_Template, 14, 13, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const collectionRD_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().ngVar;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("@fadeInOut", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", collectionRD_r3 == null ? null : collectionRD_r3.payload);
  }
}
function CollectionPageComponent_div_1_ds_error_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "ds-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("message", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](1, 1, "error.collection"));
  }
}
function CollectionPageComponent_div_1_ds_loading_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "ds-loading", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("message", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](1, 1, "loading.collection"));
  }
}
function CollectionPageComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, CollectionPageComponent_div_1_div_1_Template, 2, 2, "div", 3)(2, CollectionPageComponent_div_1_ds_error_2_Template, 2, 3, "ds-error", 4)(3, CollectionPageComponent_div_1_ds_loading_3_Template, 2, 3, "ds-loading", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const collectionRD_r3 = ctx.ngVar;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", collectionRD_r3 == null ? null : collectionRD_r3.hasSucceeded);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", collectionRD_r3 == null ? null : collectionRD_r3.hasFailed);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", collectionRD_r3 == null ? null : collectionRD_r3.isLoading);
  }
}
/**
 * This component represents a detail page for a single collection
 */
class CollectionPageComponent extends _app_collection_page_collection_page_component__WEBPACK_IMPORTED_MODULE_0__.CollectionPageComponent {
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵCollectionPageComponent_BaseFactory;
      return function CollectionPageComponent_Factory(t) {
        return (ɵCollectionPageComponent_BaseFactory || (ɵCollectionPageComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetInheritedFactory"](CollectionPageComponent)))(t || CollectionPageComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
      type: CollectionPageComponent,
      selectors: [["ds-themed-collection-page"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵStandaloneFeature"]],
      decls: 3,
      vars: 3,
      consts: [[1, "container"], ["class", "collection-page", 4, "ngVar"], [1, "collection-page"], [4, "ngIf"], [3, "message", 4, "ngIf"], [3, "object"], [1, "d-flex", "flex-row", "border-bottom", "mb-4", "pb-4"], [1, "comcol-header", "mr-auto"], [3, "name"], [3, "logo", "alternateText", 4, "ngIf"], [3, "content", "title"], [3, "content", "hasInnerHtml"], [3, "content", "hasInnerHtml", "title"], [1, "comcol-page-browse-section"], [3, "id", "contentType"], ["class", "border-top my-5 pt-4", 4, "ngIf"], [3, "logo", "alternateText"], [1, "border-top", "my-5", "pt-4"], [3, "message"]],
      template: function CollectionPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, CollectionPageComponent_div_1_Template, 4, 3, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngVar", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 1, ctx.collectionRD$));
        }
      },
      dependencies: [_app_shared_comcol_comcol_page_content_themed_comcol_page_content_component__WEBPACK_IMPORTED_MODULE_3__.ThemedComcolPageContentComponent, _app_shared_error_error_component__WEBPACK_IMPORTED_MODULE_8__.ErrorComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _app_shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_9__.ThemedLoadingComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslatePipe, _app_statistics_angulartics_dspace_view_tracker_component__WEBPACK_IMPORTED_MODULE_11__.ViewTrackerComponent, _app_shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_10__.VarDirective, _angular_common__WEBPACK_IMPORTED_MODULE_13__.AsyncPipe, _app_shared_comcol_comcol_page_header_comcol_page_header_component__WEBPACK_IMPORTED_MODULE_5__.ComcolPageHeaderComponent, _app_shared_comcol_comcol_page_logo_comcol_page_logo_component__WEBPACK_IMPORTED_MODULE_6__.ComcolPageLogoComponent, _app_shared_comcol_comcol_page_handle_themed_comcol_page_handle_component__WEBPACK_IMPORTED_MODULE_4__.ThemedComcolPageHandleComponent, _app_shared_dso_page_dso_edit_menu_dso_edit_menu_component__WEBPACK_IMPORTED_MODULE_7__.DsoEditMenuComponent, _app_shared_comcol_comcol_page_browse_by_themed_comcol_page_browse_by_component__WEBPACK_IMPORTED_MODULE_2__.ThemedComcolPageBrowseByComponent, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterOutlet],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGxlY3Rpb24tcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQSIsImZpbGUiOiJjb2xsZWN0aW9uLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqLyJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29sbGVjdGlvbi1wYWdlL2NvbGxlY3Rpb24tcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBLHdrQkFBd2tCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi8iXSwic291cmNlUm9vdCI6IiJ9 */"],
      data: {
        animation: [_app_shared_animations_fade__WEBPACK_IMPORTED_MODULE_1__.fadeIn, _app_shared_animations_fade__WEBPACK_IMPORTED_MODULE_1__.fadeInOut]
      },
      changeDetection: 0
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_themes_custom_app_collection-page_collection-page_component_ts.js.map