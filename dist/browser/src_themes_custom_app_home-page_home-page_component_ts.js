"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_themes_custom_app_home-page_home-page_component_ts"],{

/***/ 90279:
/*!****************************************************************!*\
  !*** ./src/themes/custom/app/home-page/home-page.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomePageComponent: () => (/* binding */ HomePageComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var _app_home_page_home_coar_home_coar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../app/home-page/home-coar/home-coar.component */ 79306);
/* harmony import */ var _app_home_page_home_news_themed_home_news_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../app/home-page/home-news/themed-home-news.component */ 34234);
/* harmony import */ var _app_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app/home-page/home-page.component */ 6792);
/* harmony import */ var _app_home_page_recent_item_list_recent_item_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../app/home-page/recent-item-list/recent-item-list.component */ 26728);
/* harmony import */ var _app_home_page_top_level_community_list_themed_top_level_community_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../app/home-page/top-level-community-list/themed-top-level-community-list.component */ 75014);
/* harmony import */ var _app_notifications_suggestions_popup_suggestions_popup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../app/notifications/suggestions-popup/suggestions-popup.component */ 95939);
/* harmony import */ var _app_search_page_themed_configuration_search_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../app/search-page/themed-configuration-search-page.component */ 4021);
/* harmony import */ var _app_shared_search_form_themed_search_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../app/shared/search-form/themed-search-form.component */ 18016);
/* harmony import */ var _app_statistics_angulartics_dspace_view_tracker_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../app/statistics/angulartics/dspace/view-tracker.component */ 57850);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 90310);













function HomePageComponent_ds_configuration_search_page_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainer"](0, 5);
  }
}
function HomePageComponent_ds_configuration_search_page_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ds-configuration-search-page", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, HomePageComponent_ds_configuration_search_page_2_ng_container_1_Template, 1, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    const homeContent_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("sideBarWidth", 3)("showViewModes", false)("searchEnabled", false)("inPlaceSearch", false)("showScopeSelector", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngTemplateOutlet", homeContent_r1);
  }
}
function HomePageComponent_div_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainer"](0);
  }
}
function HomePageComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, HomePageComponent_div_3_ng_container_1_Template, 1, 0, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    const homeContent_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngTemplateOutlet", homeContent_r1);
  }
}
function HomePageComponent_ng_template_5_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "ds-view-tracker", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const site_r2 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("object", site_r2);
  }
}
function HomePageComponent_ng_template_5_ds_recent_item_list_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "ds-recent-item-list");
  }
}
function HomePageComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, HomePageComponent_ng_template_5_ng_container_0_Template, 2, 1, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "ds-search-form", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "ds-top-level-community-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, HomePageComponent_ng_template_5_ds_recent_item_list_5_Template, 1, 0, "ds-recent-item-list", 8);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](1, 4, ctx_r2.site$));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("inPlaceSearch", false)("searchPlaceholder", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 6, "home.search-form.placeholder"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.recentSubmissionspageSize > 0);
  }
}
class HomePageComponent extends _app_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__.HomePageComponent {
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵHomePageComponent_BaseFactory;
      return function HomePageComponent_Factory(t) {
        return (ɵHomePageComponent_BaseFactory || (ɵHomePageComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetInheritedFactory"](HomePageComponent)))(t || HomePageComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
      type: HomePageComponent,
      selectors: [["ds-themed-home-page"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵStandaloneFeature"]],
      decls: 7,
      vars: 2,
      consts: [["homeContent", ""], [3, "sideBarWidth", "showViewModes", "searchEnabled", "inPlaceSearch", "showScopeSelector", 4, "ngIf"], ["class", "container", 4, "ngIf"], [3, "sideBarWidth", "showViewModes", "searchEnabled", "inPlaceSearch", "showScopeSelector"], ["searchContentTop", "", 4, "ngTemplateOutlet"], ["searchContentTop", ""], [1, "container"], [4, "ngTemplateOutlet"], [4, "ngIf"], [3, "inPlaceSearch", "searchPlaceholder"], [3, "object"]],
      template: function HomePageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "ds-home-coar")(1, "ds-home-news");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, HomePageComponent_ds_configuration_search_page_2_Template, 2, 6, "ds-configuration-search-page", 1)(3, HomePageComponent_div_3_Template, 2, 1, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "ds-suggestions-popup");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, HomePageComponent_ng_template_5_Template, 6, 8, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.showDiscoverFilters);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.showDiscoverFilters);
        }
      },
      dependencies: [_app_home_page_home_news_themed_home_news_component__WEBPACK_IMPORTED_MODULE_1__.ThemedHomeNewsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _app_statistics_angulartics_dspace_view_tracker_component__WEBPACK_IMPORTED_MODULE_8__.ViewTrackerComponent, _app_shared_search_form_themed_search_form_component__WEBPACK_IMPORTED_MODULE_7__.ThemedSearchFormComponent, _app_home_page_top_level_community_list_themed_top_level_community_list_component__WEBPACK_IMPORTED_MODULE_4__.ThemedTopLevelCommunityListComponent, _app_home_page_recent_item_list_recent_item_list_component__WEBPACK_IMPORTED_MODULE_3__.RecentItemListComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe, _app_notifications_suggestions_popup_suggestions_popup_component__WEBPACK_IMPORTED_MODULE_5__.SuggestionsPopupComponent, _app_search_page_themed_configuration_search_page_component__WEBPACK_IMPORTED_MODULE_6__.ThemedConfigurationSearchPageComponent, _app_home_page_home_coar_home_coar_component__WEBPACK_IMPORTED_MODULE_0__.HomeCoarComponent],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n@media (max-width: 991.98px) {\n  ds-themed-configuration-search-page[_ngcontent-%COMP%]    + .container[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBO0VBQ0U7SUFDRSxXQUFBO0lBQ0EsZUFBQTtFQUNGO0FBQ0YiLCJmaWxlIjoiaG9tZS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTEuOThweCkge1xuICBkcy10aGVtZWQtY29uZmlndXJhdGlvbi1zZWFyY2gtcGFnZSArIC5jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogbm9uZTtcbiAgfVxufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBO0VBQ0U7SUFDRSxXQUFBO0lBQ0EsZUFBQTtFQUNGO0FBQ0Y7QUFDQSxneUJBQWd5QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovXG5AbWVkaWEgKG1heC13aWR0aDogOTkxLjk4cHgpIHtcbiAgZHMtdGhlbWVkLWNvbmZpZ3VyYXRpb24tc2VhcmNoLXBhZ2UgKyAuY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IG5vbmU7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_themes_custom_app_home-page_home-page_component_ts.js.map