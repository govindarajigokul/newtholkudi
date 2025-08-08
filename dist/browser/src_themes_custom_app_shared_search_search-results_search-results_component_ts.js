"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_themes_custom_app_shared_search_search-results_search-results_component_ts"],{

/***/ 27826:
/*!****************************************************************************************!*\
  !*** ./src/themes/custom/app/shared/search/search-results/search-results.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchResultsComponent: () => (/* binding */ SearchResultsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-skeleton-loader */ 17391);
/* harmony import */ var _app_shared_animations_fade__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../app/shared/animations/fade */ 50332);
/* harmony import */ var _app_shared_error_error_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../app/shared/error/error.component */ 79632);
/* harmony import */ var _app_shared_object_collection_object_collection_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../app/shared/object-collection/object-collection.component */ 14828);
/* harmony import */ var _app_shared_search_search_export_csv_search_export_csv_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../app/shared/search/search-export-csv/search-export-csv.component */ 53009);
/* harmony import */ var _app_shared_search_search_results_search_results_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../app/shared/search/search-results/search-results.component */ 42837);
/* harmony import */ var _app_shared_search_search_results_search_results_skeleton_search_results_skeleton_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../app/shared/search/search-results/search-results-skeleton/search-results-skeleton.component */ 84081);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 90310);













const _c0 = () => ["/search"];
const _c1 = a0 => ({
  query: a0
});
function SearchResultsComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 6)(2, "div", 7)(3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "ngx-skeleton-loader", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("count", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 1, ctx_r0.activeFilters$).length);
  }
}
function SearchResultsComponent_h1_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, ctx_r0.configuration ? ctx_r0.configuration + ".search.results.head" : "search.results.head"));
  }
}
function SearchResultsComponent_ds_search_export_csv_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "ds-search-export-csv", 10);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("searchConfig", ctx_r0.searchConfig);
  }
}
function SearchResultsComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "ds-viewable-collection", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("contentChange", function SearchResultsComponent_div_6_Template_ds_viewable_collection_contentChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r0.contentChange.emit($event));
    })("deselectObject", function SearchResultsComponent_div_6_Template_ds_viewable_collection_deselectObject_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r0.deselectObject.emit($event));
    })("selectObject", function SearchResultsComponent_div_6_Template_ds_viewable_collection_selectObject_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r0.selectObject.emit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("config", ctx_r0.searchConfig.pagination)("sortConfig", ctx_r0.searchConfig.sort)("objects", ctx_r0.searchResults)("hideGear", true)("selectable", ctx_r0.selectable)("selectionConfig", ctx_r0.selectionConfig)("linkType", ctx_r0.linkType)("context", ctx_r0.context)("hidePaginationDetail", ctx_r0.hidePaginationDetail)("showThumbnails", ctx_r0.showThumbnails);
  }
}
function SearchResultsComponent_ds_search_results_skeleton_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "ds-search-results-skeleton", 12);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("showThumbnails", ctx_r0.showThumbnails)("numberOfResults", ctx_r0.searchConfig.pagination.pageSize);
  }
}
function SearchResultsComponent_ds_error_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "ds-error", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("message", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 1, ctx_r0.errorMessageLabel()));
  }
}
function SearchResultsComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 4, "search.results.no-results"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](8, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](9, _c1, ctx_r0.surroundStringWithQuotes(ctx_r0.searchConfig == null ? null : ctx_r0.searchConfig.query)));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 6, "search.results.no-results-link"), " ");
  }
}
class SearchResultsComponent extends _app_shared_search_search_results_search_results_component__WEBPACK_IMPORTED_MODULE_4__.SearchResultsComponent {
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵSearchResultsComponent_BaseFactory;
      return function SearchResultsComponent_Factory(t) {
        return (ɵSearchResultsComponent_BaseFactory || (ɵSearchResultsComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetInheritedFactory"](SearchResultsComponent)))(t || SearchResultsComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: SearchResultsComponent,
      selectors: [["ds-themed-search-results"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵStandaloneFeature"]],
      decls: 10,
      vars: 11,
      consts: [[1, "row"], [1, "d-flex", "justify-content-between"], [4, "ngIf"], [3, "searchConfig", 4, "ngIf"], [3, "showThumbnails", "numberOfResults", 4, "ngIf"], [3, "message", 4, "ngIf"], [1, "col-12"], [1, "filters-badge-skeleton-container"], [1, "filter-badge-skeleton"], [3, "count"], [3, "searchConfig"], [3, "contentChange", "deselectObject", "selectObject", "config", "sortConfig", "objects", "hideGear", "selectable", "selectionConfig", "linkType", "context", "hidePaginationDetail", "showThumbnails"], [3, "showThumbnails", "numberOfResults"], [3, "message"], ["queryParamsHandling", "merge", 3, "routerLink", "queryParams"]],
      template: function SearchResultsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, SearchResultsComponent_Conditional_0_Template, 6, 3, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, SearchResultsComponent_h1_4_Template, 3, 3, "h1", 2)(5, SearchResultsComponent_ds_search_export_csv_5_Template, 1, 1, "ds-search-export-csv", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, SearchResultsComponent_div_6_Template, 2, 11, "div", 2)(7, SearchResultsComponent_ds_search_results_skeleton_7_Template, 1, 2, "ds-search-results-skeleton", 4)(8, SearchResultsComponent_ds_error_8_Template, 2, 3, "ds-error", 5)(9, SearchResultsComponent_div_9_Template, 6, 11, "div", 2);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](0, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 7, ctx.activeFilters$).length > 0 && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 9, ctx.appliedFilters$).length === 0 ? 0 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.disableHeader);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.showCsvExport);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.searchResults && (ctx.searchResults == null ? null : ctx.searchResults.hasSucceeded) && !(ctx.searchResults == null ? null : ctx.searchResults.isLoading) && (ctx.searchResults == null ? null : ctx.searchResults.payload == null ? null : ctx.searchResults.payload.page.length) > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isLoading());
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.showError());
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx.searchResults == null ? null : ctx.searchResults.payload == null ? null : ctx.searchResults.payload.page.length) === 0 || (ctx.searchResults == null ? null : ctx.searchResults.statusCode) === 400);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe, _app_shared_error_error_component__WEBPACK_IMPORTED_MODULE_1__.ErrorComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_8__.NgxSkeletonLoaderModule, ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_8__.NgxSkeletonLoaderComponent, _app_shared_object_collection_object_collection_component__WEBPACK_IMPORTED_MODULE_2__.ObjectCollectionComponent, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLink, _app_shared_search_search_export_csv_search_export_csv_component__WEBPACK_IMPORTED_MODULE_3__.SearchExportCsvComponent, _app_shared_search_search_results_search_results_skeleton_search_results_skeleton_component__WEBPACK_IMPORTED_MODULE_5__.SearchResultsSkeletonComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]     .filter-badge-skeleton ngx-skeleton-loader .skeleton-loader {\n  background-color: var(--bs-light);\n  box-shadow: none;\n  width: var(--ds-search-skeleton-filter-badge-width);\n  height: var(--ds-search-skeleton-badge-height);\n  margin-bottom: 0;\n  margin-right: calc(var(--bs-spacer) / 4);\n}\n\n[_nghost-%COMP%]     .filters-badge-skeleton-container {\n  display: flex;\n  max-height: var(--ds-search-skeleton-badge-height);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC1yZXN1bHRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBO0FBQ0E7RUFDRSxpQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsbURBQUE7RUFDQSw4Q0FBQTtFQUNBLGdCQUFBO0VBQ0Esd0NBQUE7QUFDRjs7QUFDQTtFQUNFLGFBQUE7RUFDQSxrREFBQTtBQUVGIiwiZmlsZSI6InNlYXJjaC1yZXN1bHRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi9cbjpob3N0IDo6bmctZGVlcCAuZmlsdGVyLWJhZGdlLXNrZWxldG9uIG5neC1za2VsZXRvbi1sb2FkZXIgLnNrZWxldG9uLWxvYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJzLWxpZ2h0KTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgd2lkdGg6IHZhcigtLWRzLXNlYXJjaC1za2VsZXRvbi1maWx0ZXItYmFkZ2Utd2lkdGgpO1xuICBoZWlnaHQ6IHZhcigtLWRzLXNlYXJjaC1za2VsZXRvbi1iYWRnZS1oZWlnaHQpO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBtYXJnaW4tcmlnaHQ6IGNhbGModmFyKC0tYnMtc3BhY2VyKSAvIDQpO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5maWx0ZXJzLWJhZGdlLXNrZWxldG9uLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1heC1oZWlnaHQ6IHZhcigtLWRzLXNlYXJjaC1za2VsZXRvbi1iYWRnZS1oZWlnaHQpO1xufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL3NlYXJjaC9zZWFyY2gtcmVzdWx0cy9zZWFyY2gtcmVzdWx0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBO0VBQ0UsaUNBQUE7RUFDQSxnQkFBQTtFQUNBLG1EQUFBO0VBQ0EsOENBQUE7RUFDQSxnQkFBQTtFQUNBLHdDQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxhQUFBO0VBQ0Esa0RBQUE7QUFFRjtBQUNBLG95Q0FBb3lDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi9cbjpob3N0IDo6bmctZGVlcCAuZmlsdGVyLWJhZGdlLXNrZWxldG9uIG5neC1za2VsZXRvbi1sb2FkZXIgLnNrZWxldG9uLWxvYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJzLWxpZ2h0KTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgd2lkdGg6IHZhcigtLWRzLXNlYXJjaC1za2VsZXRvbi1maWx0ZXItYmFkZ2Utd2lkdGgpO1xuICBoZWlnaHQ6IHZhcigtLWRzLXNlYXJjaC1za2VsZXRvbi1iYWRnZS1oZWlnaHQpO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBtYXJnaW4tcmlnaHQ6IGNhbGModmFyKC0tYnMtc3BhY2VyKSAvIDQpO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5maWx0ZXJzLWJhZGdlLXNrZWxldG9uLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1heC1oZWlnaHQ6IHZhcigtLWRzLXNlYXJjaC1za2VsZXRvbi1iYWRnZS1oZWlnaHQpO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"],
      data: {
        animation: [_app_shared_animations_fade__WEBPACK_IMPORTED_MODULE_0__.fadeIn, _app_shared_animations_fade__WEBPACK_IMPORTED_MODULE_0__.fadeInOut]
      }
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_themes_custom_app_shared_search_search-results_search-results_component_ts.js.map