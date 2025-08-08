"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_themes_custom_app_shared_search_search-filters_search-filters_component_ts"],{

/***/ 4072:
/*!****************************************************************************************!*\
  !*** ./src/themes/custom/app/shared/search/search-filters/search-filters.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchFiltersComponent: () => (/* binding */ SearchFiltersComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-skeleton-loader */ 17391);
/* harmony import */ var _app_core_shared_search_search_configuration_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../app/core/shared/search/search-configuration.service */ 68611);
/* harmony import */ var _app_my_dspace_page_my_dspace_configuration_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../app/my-dspace-page/my-dspace-configuration.service */ 787);
/* harmony import */ var _app_shared_search_search_filters_search_filter_search_filter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../app/shared/search/search-filters/search-filter/search-filter.component */ 49660);
/* harmony import */ var _app_shared_search_search_filters_search_filters_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../app/shared/search/search-filters/search-filters.component */ 1903);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 90310);
/**
 * The contents of this file are subject to the license and copyright
 * detailed in the LICENSE_ATMIRE and NOTICE_ATMIRE files at the root of the source
 * tree and available online at
 *
 * https://www.atmire.com/software-license/
 */











const _forTrack0 = ($index, $item) => $item.name;
const _c0 = a0 => [a0];
function SearchFiltersComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, ctx_r0.filterLabel + ".filters.head"));
  }
}
function SearchFiltersComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, ctx_r0.filterLabel + ".filters.head"));
  }
}
function SearchFiltersComponent_Conditional_2_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ds-search-filter", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("isVisibilityComputed", function SearchFiltersComponent_Conditional_2_For_3_Template_ds_search_filter_isVisibilityComputed_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r0.countFiltersWithComputedVisibility($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const filter_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("scope", ctx_r0.currentScope)("filter", filter_r3)("inPlaceSearch", ctx_r0.inPlaceSearch)("refreshFilters", ctx_r0.refreshFilters);
  }
}
function SearchFiltersComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterCreate"](2, SearchFiltersComponent_Conditional_2_For_3_Template, 1, 4, "ds-search-filter", 3, _forTrack0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("visually-hidden", ctx_r0.filtersWithComputedVisibility !== ((tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 2, ctx_r0.filters)) == null ? null : tmp_1_0.payload == null ? null : tmp_1_0.payload.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeater"]((tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 4, ctx_r0.filters)) == null ? null : tmp_2_0.payload);
  }
}
function SearchFiltersComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "ngx-skeleton-loader", 1);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("count", ctx_r0.defaultFilterCount);
  }
}
function SearchFiltersComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SearchFiltersComponent_Conditional_6_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r0.minimizeFilters());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](7, _c0, ctx_r0.searchLink))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 3, ctx_r0.clearParams));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 5, "search.filters.reset"), " ");
  }
}
class SearchFiltersComponent extends _app_shared_search_search_filters_search_filters_component__WEBPACK_IMPORTED_MODULE_3__.SearchFiltersComponent {
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵSearchFiltersComponent_BaseFactory;
      return function SearchFiltersComponent_Factory(t) {
        return (ɵSearchFiltersComponent_BaseFactory || (ɵSearchFiltersComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetInheritedFactory"](SearchFiltersComponent)))(t || SearchFiltersComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: SearchFiltersComponent,
      selectors: [["ds-themed-search-filters"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([{
        provide: _app_my_dspace_page_my_dspace_configuration_service__WEBPACK_IMPORTED_MODULE_1__.SEARCH_CONFIG_SERVICE,
        useClass: _app_core_shared_search_search_configuration_service__WEBPACK_IMPORTED_MODULE_0__.SearchConfigurationService
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
      decls: 7,
      vars: 8,
      consts: [[3, "visually-hidden"], [3, "count"], ["queryParamsHandling", "merge", "role", "button", 1, "btn", "btn-primary", 3, "routerLink", "queryParams"], [3, "scope", "filter", "inPlaceSearch", "refreshFilters"], [3, "isVisibilityComputed", "scope", "filter", "inPlaceSearch", "refreshFilters"], ["queryParamsHandling", "merge", "role", "button", 1, "btn", "btn-primary", 3, "click", "routerLink", "queryParams"], [1, "fas", "fa-undo"]],
      template: function SearchFiltersComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, SearchFiltersComponent_Conditional_0_Template, 3, 3, "h3")(1, SearchFiltersComponent_Conditional_1_Template, 3, 3)(2, SearchFiltersComponent_Conditional_2_Template, 5, 6, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, SearchFiltersComponent_Conditional_4_Template, 1, 1, "ngx-skeleton-loader", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, SearchFiltersComponent_Conditional_6_Template, 5, 9, "button", 2);
        }
        if (rf & 2) {
          let tmp_1_0;
          let tmp_2_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](0, ctx.inPlaceSearch ? 0 : 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](2, ((tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 4, ctx.filters)) == null ? null : tmp_1_0.hasSucceeded) ? 2 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](4, ctx.filtersWithComputedVisibility !== ((tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 6, ctx.filters)) == null ? null : tmp_2_0.payload == null ? null : tmp_2_0.payload.length) ? 4 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](6, ctx.inPlaceSearch ? 6 : -1);
        }
      },
      dependencies: [_app_shared_search_search_filters_search_filter_search_filter_component__WEBPACK_IMPORTED_MODULE_2__.SearchFilterComponent, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe, ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_8__.NgxSkeletonLoaderModule, ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_8__.NgxSkeletonLoaderComponent],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]     ngx-skeleton-loader .skeleton-loader {\n  height: var(--ds-filters-skeleton-height);\n  margin-bottom: var(--ds-filters-skeleton-spacing);\n  padding: var(--ds-filters-skeleton-spacing);\n  background-color: var(--bs-light);\n  box-shadow: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC1maWx0ZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBO0FBQ0EscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQTtFQUNFLHlDQUFBO0VBQ0EsaURBQUE7RUFDQSwyQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0JBQUE7QUFDRiIsImZpbGUiOiJzZWFyY2gtZmlsdGVycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovXG4vKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqL1xuOmhvc3QgOjpuZy1kZWVwIG5neC1za2VsZXRvbi1sb2FkZXIgLnNrZWxldG9uLWxvYWRlciB7XG4gIGhlaWdodDogdmFyKC0tZHMtZmlsdGVycy1za2VsZXRvbi1oZWlnaHQpO1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1kcy1maWx0ZXJzLXNrZWxldG9uLXNwYWNpbmcpO1xuICBwYWRkaW5nOiB2YXIoLS1kcy1maWx0ZXJzLXNrZWxldG9uLXNwYWNpbmcpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1icy1saWdodCk7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL3NlYXJjaC9zZWFyY2gtZmlsdGVycy9zZWFyY2gtZmlsdGVycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBO0FBQ0E7RUFDRSx5Q0FBQTtFQUNBLGlEQUFBO0VBQ0EsMkNBQUE7RUFDQSxpQ0FBQTtFQUNBLGdCQUFBO0FBQ0Y7QUFDQSxnMUNBQWcxQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovXG4vKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqL1xuOmhvc3QgOjpuZy1kZWVwIG5neC1za2VsZXRvbi1sb2FkZXIgLnNrZWxldG9uLWxvYWRlciB7XG4gIGhlaWdodDogdmFyKC0tZHMtZmlsdGVycy1za2VsZXRvbi1oZWlnaHQpO1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1kcy1maWx0ZXJzLXNrZWxldG9uLXNwYWNpbmcpO1xuICBwYWRkaW5nOiB2YXIoLS1kcy1maWx0ZXJzLXNrZWxldG9uLXNwYWNpbmcpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1icy1saWdodCk7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_themes_custom_app_shared_search_search-filters_search-filters_component_ts.js.map