"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_themes_custom_app_community-page_sections_sub-com-col-section_sub-community-list_communit-279ab0"],{

/***/ 98836:
/*!*********************************************************************************************************************************************!*\
  !*** ./src/themes/custom/app/community-page/sections/sub-com-col-section/sub-community-list/community-page-sub-community-list.component.ts ***!
  \*********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CommunityPageSubCommunityListComponent: () => (/* binding */ CommunityPageSubCommunityListComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var _app_community_page_sections_sub_com_col_section_sub_community_list_community_page_sub_community_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../app/community-page/sections/sub-com-col-section/sub-community-list/community-page-sub-community-list.component */ 57525);
/* harmony import */ var _app_shared_error_error_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../app/shared/error/error.component */ 79632);
/* harmony import */ var _app_shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../app/shared/loading/themed-loading.component */ 82394);
/* harmony import */ var _app_shared_object_collection_object_collection_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../app/shared/object-collection/object-collection.component */ 14828);
/* harmony import */ var _app_shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../app/shared/utils/var.directive */ 18226);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 90310);









function CommunityPageSubCommunityListComponent_ng_container_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "ds-viewable-collection", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const subCommunitiesRD_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().ngVar;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 6, "community.sub-community-list.head"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("config", ctx_r1.config)("sortConfig", ctx_r1.sortConfig)("objects", subCommunitiesRD_r1)("hideGear", false);
  }
}
function CommunityPageSubCommunityListComponent_ng_container_0_ds_error_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "ds-error", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("message", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 1, "error.sub-communities"));
  }
}
function CommunityPageSubCommunityListComponent_ng_container_0_ds_loading_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "ds-loading", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("message", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 1, "loading.sub-communities"));
  }
}
function CommunityPageSubCommunityListComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CommunityPageSubCommunityListComponent_ng_container_0_div_1_Template, 5, 8, "div", 1)(2, CommunityPageSubCommunityListComponent_ng_container_0_ds_error_2_Template, 2, 3, "ds-error", 2)(3, CommunityPageSubCommunityListComponent_ng_container_0_ds_loading_3_Template, 2, 3, "ds-loading", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const subCommunitiesRD_r1 = ctx.ngVar;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (subCommunitiesRD_r1 == null ? null : subCommunitiesRD_r1.hasSucceeded) && (subCommunitiesRD_r1 == null ? null : subCommunitiesRD_r1.payload.totalElements) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", subCommunitiesRD_r1 == null ? null : subCommunitiesRD_r1.hasFailed);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", subCommunitiesRD_r1 == null ? null : subCommunitiesRD_r1.isLoading);
  }
}
class CommunityPageSubCommunityListComponent extends _app_community_page_sections_sub_com_col_section_sub_community_list_community_page_sub_community_list_component__WEBPACK_IMPORTED_MODULE_0__.CommunityPageSubCommunityListComponent {
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵCommunityPageSubCommunityListComponent_BaseFactory;
      return function CommunityPageSubCommunityListComponent_Factory(t) {
        return (ɵCommunityPageSubCommunityListComponent_BaseFactory || (ɵCommunityPageSubCommunityListComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetInheritedFactory"](CommunityPageSubCommunityListComponent)))(t || CommunityPageSubCommunityListComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: CommunityPageSubCommunityListComponent,
      selectors: [["ds-themed-community-page-sub-community-list"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 3,
      consts: [[4, "ngVar"], [4, "ngIf"], [3, "message", 4, "ngIf"], [3, "config", "sortConfig", "objects", "hideGear"], [3, "message"]],
      template: function CommunityPageSubCommunityListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, CommunityPageSubCommunityListComponent_ng_container_0_Template, 4, 3, "ng-container", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "async");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngVar", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 1, ctx.subCommunitiesRDObs));
        }
      },
      dependencies: [_app_shared_error_error_component__WEBPACK_IMPORTED_MODULE_1__.ErrorComponent, _app_shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_2__.ThemedLoadingComponent, _app_shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_4__.VarDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _app_shared_object_collection_object_collection_component__WEBPACK_IMPORTED_MODULE_3__.ObjectCollectionComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW11bml0eS1wYWdlLXN1Yi1jb21tdW5pdHktbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQSIsImZpbGUiOiJjb21tdW5pdHktcGFnZS1zdWItY29tbXVuaXR5LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqLyJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tbXVuaXR5LXBhZ2Uvc2VjdGlvbnMvc3ViLWNvbS1jb2wtc2VjdGlvbi9zdWItY29tbXVuaXR5LWxpc3QvY29tbXVuaXR5LXBhZ2Utc3ViLWNvbW11bml0eS1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBO0FBQ0Esd25CQUF3bkIiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqLyJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_themes_custom_app_community-page_sections_sub-com-col-section_sub-community-list_communit-279ab0.js.map