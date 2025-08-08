"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_themes_custom_app_community-page_community-page_component_ts"],{

/***/ 17431:
/*!**************************************************************************!*\
  !*** ./src/themes/custom/app/community-page/community-page.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CommunityPageComponent: () => (/* binding */ CommunityPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var _app_community_page_community_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../app/community-page/community-page.component */ 5548);
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

















function CommunityPageComponent_div_0_div_1_div_1_ds_comcol_page_logo_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "ds-comcol-page-logo", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");
  }
  if (rf & 2) {
    let tmp_6_0;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("logo", (tmp_6_0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](1, 2, ctx_r0.logoRD$)) == null ? null : tmp_6_0.payload)("alternateText", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 4, "community.logo"));
  }
}
function CommunityPageComponent_div_0_div_1_div_1_footer_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "footer", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "ds-comcol-page-content", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const communityPayload_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("content", communityPayload_r2.copyrightText)("hasInnerHtml", true);
  }
}
function CommunityPageComponent_div_0_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "ds-view-tracker", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "div", 7)(3, "header", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](4, "ds-comcol-page-header", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](5, CommunityPageComponent_div_0_div_1_div_1_ds_comcol_page_logo_5_Template, 3, 6, "ds-comcol-page-logo", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](6, "ds-comcol-page-handle", 11)(7, "ds-comcol-page-content", 12)(8, "ds-comcol-page-content", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](9, "ds-dso-edit-menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "section", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](11, "ds-comcol-page-browse-by", 15)(12, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](13, CommunityPageComponent_div_0_div_1_div_1_footer_13_Template, 2, 2, "footer", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const communityPayload_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("object", communityPayload_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("name", ctx_r0.dsoNameService.getName(communityPayload_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r0.logoRD$);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("content", communityPayload_r2.handle)("title", "community.page.handle");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("content", communityPayload_r2.introductoryText)("hasInnerHtml", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("content", communityPayload_r2.sidebarText)("hasInnerHtml", true)("title", "community.page.news");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("id", communityPayload_r2.id)("contentType", communityPayload_r2.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", communityPayload_r2.copyrightText);
  }
}
function CommunityPageComponent_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, CommunityPageComponent_div_0_div_1_div_1_Template, 14, 13, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const communityRD_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().ngVar;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("@fadeInOut", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", communityRD_r3 == null ? null : communityRD_r3.payload);
  }
}
function CommunityPageComponent_div_0_ds_error_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "ds-error", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("message", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](1, 1, "error.community"));
  }
}
function CommunityPageComponent_div_0_ds_loading_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "ds-loading", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("message", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](1, 1, "loading.community"));
  }
}
function CommunityPageComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, CommunityPageComponent_div_0_div_1_Template, 2, 2, "div", 2)(2, CommunityPageComponent_div_0_ds_error_2_Template, 2, 3, "ds-error", 3)(3, CommunityPageComponent_div_0_ds_loading_3_Template, 2, 3, "ds-loading", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const communityRD_r3 = ctx.ngVar;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", communityRD_r3 == null ? null : communityRD_r3.hasSucceeded);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", communityRD_r3 == null ? null : communityRD_r3.hasFailed);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", communityRD_r3 == null ? null : communityRD_r3.isLoading);
  }
}
/**
 * This component represents a detail page for a single community
 */
class CommunityPageComponent extends _app_community_page_community_page_component__WEBPACK_IMPORTED_MODULE_0__.CommunityPageComponent {
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵCommunityPageComponent_BaseFactory;
      return function CommunityPageComponent_Factory(t) {
        return (ɵCommunityPageComponent_BaseFactory || (ɵCommunityPageComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetInheritedFactory"](CommunityPageComponent)))(t || CommunityPageComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
      type: CommunityPageComponent,
      selectors: [["ds-themed-community-page"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 3,
      consts: [["class", "container", 4, "ngVar"], [1, "container"], ["class", "community-page", 4, "ngIf"], [3, "message", 4, "ngIf"], [1, "community-page"], [4, "ngIf"], [3, "object"], [1, "d-flex", "flex-row", "border-bottom", "mb-4", "pb-4"], [1, "comcol-header", "mr-auto"], [3, "name"], [3, "logo", "alternateText", 4, "ngIf"], [3, "content", "title"], [3, "content", "hasInnerHtml"], [3, "content", "hasInnerHtml", "title"], [1, "comcol-page-browse-section"], [3, "id", "contentType"], ["class", "border-top my-5 pt-4", 4, "ngIf"], [3, "logo", "alternateText"], [1, "border-top", "my-5", "pt-4"], [3, "message"]],
      template: function CommunityPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](0, CommunityPageComponent_div_0_Template, 4, 3, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](1, "async");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngVar", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](1, 1, ctx.communityRD$));
        }
      },
      dependencies: [_app_shared_comcol_comcol_page_content_themed_comcol_page_content_component__WEBPACK_IMPORTED_MODULE_3__.ThemedComcolPageContentComponent, _app_shared_error_error_component__WEBPACK_IMPORTED_MODULE_8__.ErrorComponent, _app_shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_9__.ThemedLoadingComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslatePipe, _app_shared_comcol_comcol_page_browse_by_themed_comcol_page_browse_by_component__WEBPACK_IMPORTED_MODULE_2__.ThemedComcolPageBrowseByComponent, _app_shared_dso_page_dso_edit_menu_dso_edit_menu_component__WEBPACK_IMPORTED_MODULE_7__.DsoEditMenuComponent, _app_shared_comcol_comcol_page_handle_themed_comcol_page_handle_component__WEBPACK_IMPORTED_MODULE_4__.ThemedComcolPageHandleComponent, _app_shared_comcol_comcol_page_logo_comcol_page_logo_component__WEBPACK_IMPORTED_MODULE_6__.ComcolPageLogoComponent, _app_shared_comcol_comcol_page_header_comcol_page_header_component__WEBPACK_IMPORTED_MODULE_5__.ComcolPageHeaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.AsyncPipe, _app_statistics_angulartics_dspace_view_tracker_component__WEBPACK_IMPORTED_MODULE_11__.ViewTrackerComponent, _app_shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_10__.VarDirective, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW11bml0eS1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBIiwiZmlsZSI6ImNvbW11bml0eS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi8iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tbXVuaXR5LXBhZ2UvY29tbXVuaXR5LXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQSxva0JBQW9rQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
      data: {
        animation: [_app_shared_animations_fade__WEBPACK_IMPORTED_MODULE_1__.fadeInOut]
      },
      changeDetection: 0
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_themes_custom_app_community-page_community-page_component_ts.js.map