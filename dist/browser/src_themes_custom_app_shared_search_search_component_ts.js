"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_themes_custom_app_shared_search_search_component_ts"],{

/***/ 18107:
/*!*****************************************************************!*\
  !*** ./src/themes/custom/app/shared/search/search.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchComponent: () => (/* binding */ SearchComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var _app_shared_animations_push__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../app/shared/animations/push */ 10214);
/* harmony import */ var _app_shared_search_search_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../app/shared/search/search.component */ 77766);
/* harmony import */ var _app_shared_search_search_labels_search_labels_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../app/shared/search/search-labels/search-labels.component */ 41073);
/* harmony import */ var _app_shared_search_search_results_themed_search_results_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../app/shared/search/search-results/themed-search-results.component */ 14131);
/* harmony import */ var _app_shared_search_search_sidebar_themed_search_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../app/shared/search/search-sidebar/themed-search-sidebar.component */ 79443);
/* harmony import */ var _app_shared_search_form_themed_search_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../app/shared/search-form/themed-search-form.component */ 18016);
/* harmony import */ var _app_shared_sidebar_page_with_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../app/shared/sidebar/page-with-sidebar.component */ 50919);
/* harmony import */ var _app_shared_view_mode_switch_view_mode_switch_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../app/shared/view-mode-switch/view-mode-switch.component */ 35538);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 90310);












const _c0 = [[["", "searchContentTop", ""]], [["", "additionalSearchOptions", ""]]];
const _c1 = ["[searchContentTop]", "[additionalSearchOptions]"];
function SearchComponent_div_0_3_ng_template_0_Template(rf, ctx) {}
function SearchComponent_div_0_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, SearchComponent_div_0_3_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function SearchComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 6)(1, "div", 7)(2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, SearchComponent_div_0_3_Template, 1, 0, null, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    const searchForm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngTemplateOutlet", searchForm_r1);
  }
}
function SearchComponent_div_2_1_ng_template_0_Template(rf, ctx) {}
function SearchComponent_div_2_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, SearchComponent_div_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function SearchComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, SearchComponent_div_2_1_Template, 1, 0, null, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    const searchContent_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngTemplateOutlet", searchContent_r2);
  }
}
function SearchComponent_ds_page_with_sidebar_4_1_ng_template_0_Template(rf, ctx) {}
function SearchComponent_ds_page_with_sidebar_4_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, SearchComponent_ds_page_with_sidebar_4_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function SearchComponent_ds_page_with_sidebar_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ds-page-with-sidebar", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, SearchComponent_ds_page_with_sidebar_4_1_Template, 1, 0, null, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    const searchContent_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](7);
    const sidebarContent_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("id", "search-page")("sideBarWidth", ctx_r2.sideBarWidth)("sidebarContent", sidebarContent_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngTemplateOutlet", searchContent_r2);
  }
}
function SearchComponent_ng_template_6_div_1_ng_container_1_1_ng_template_0_Template(rf, ctx) {}
function SearchComponent_ng_template_6_div_1_ng_container_1_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, SearchComponent_ng_template_6_div_1_ng_container_1_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function SearchComponent_ng_template_6_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, SearchComponent_ng_template_6_div_1_ng_container_1_1_Template, 1, 0, null, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    const searchForm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngTemplateOutlet", searchForm_r1);
  }
}
function SearchComponent_ng_template_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, SearchComponent_ng_template_6_div_1_ng_container_1_Template, 2, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵprojection"](2, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.searchEnabled);
  }
}
function SearchComponent_ng_template_6_ds_view_mode_switch_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "ds-view-mode-switch", 18);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("viewModeList", ctx_r2.viewModeList)("inPlaceSearch", ctx_r2.inPlaceSearch);
  }
}
function SearchComponent_ng_template_6_ds_search_results_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ds-search-results", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("contentChange", function SearchComponent_ng_template_6_ds_search_results_11_Template_ds_search_results_contentChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.onContentChange($event));
    })("deselectObject", function SearchComponent_ng_template_6_ds_search_results_11_Template_ds_search_results_deselectObject_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.deselectObject.emit($event));
    })("selectObject", function SearchComponent_ng_template_6_ds_search_results_11_Template_ds_search_results_selectObject_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.selectObject.emit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("searchResults", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 10, ctx_r2.resultsRD$))("searchConfig", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 12, ctx_r2.searchOptions$))("configuration", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 14, ctx_r2.currentConfiguration$))("disableHeader", !ctx_r2.searchEnabled)("linkType", ctx_r2.linkType)("context", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 16, ctx_r2.currentContext$))("selectable", ctx_r2.selectable)("selectionConfig", ctx_r2.selectionConfig)("showCsvExport", ctx_r2.showCsvExport)("showThumbnails", ctx_r2.showThumbnails);
  }
}
function SearchComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, SearchComponent_ng_template_6_div_1_Template, 3, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 12)(4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, SearchComponent_ng_template_6_ds_view_mode_switch_5_Template, 1, 2, "ds-view-mode-switch", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SearchComponent_ng_template_6_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.openSidebar());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵprojection"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](11, SearchComponent_ng_template_6_ds_search_results_11_Template, 5, 18, "ds-search-results", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 4, ctx_r2.isXsOrSm$) !== true);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.inPlaceSearch && ctx_r2.showViewModes);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](9, 6, "search.sidebar.open"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.inPlaceSearch);
  }
}
function SearchComponent_ng_template_8_ds_search_sidebar_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ds-search-sidebar", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("changeConfiguration", function SearchComponent_ng_template_8_ds_search_sidebar_0_Template_ds_search_sidebar_changeConfiguration_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.changeContext($event.context));
    })("changeViewMode", function SearchComponent_ng_template_8_ds_search_sidebar_0_Template_ds_search_sidebar_changeViewMode_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.changeViewMode());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_10_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("configurationList", ctx_r2.configurationList)("configuration", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 12, ctx_r2.currentConfiguration$))("currentScope", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 14, ctx_r2.currentScope$))("filters", ctx_r2.filtersRD$.asObservable())("refreshFilters", ctx_r2.refreshFilters)("resultCount", (tmp_10_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 16, ctx_r2.resultsRD$)) == null ? null : tmp_10_0.payload == null ? null : tmp_10_0.payload.totalElements)("searchOptions", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 18, ctx_r2.searchOptions$))("sortOptionsList", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 20, ctx_r2.sortOptionsList$))("currentSortOption", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](6, 22, ctx_r2.currentSortOptions$))("inPlaceSearch", ctx_r2.inPlaceSearch)("viewModeList", ctx_r2.viewModeList)("showViewModes", ctx_r2.showViewModes);
  }
}
function SearchComponent_ng_template_8_ds_search_sidebar_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ds-search-sidebar", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("toggleSidebar", function SearchComponent_ng_template_8_ds_search_sidebar_2_Template_ds_search_sidebar_toggleSidebar_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r8);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.closeSidebar());
    })("changeConfiguration", function SearchComponent_ng_template_8_ds_search_sidebar_2_Template_ds_search_sidebar_changeConfiguration_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r8);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.changeContext($event.context));
    })("changeViewMode", function SearchComponent_ng_template_8_ds_search_sidebar_2_Template_ds_search_sidebar_changeViewMode_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r8);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.changeViewMode());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_10_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("configurationList", ctx_r2.configurationList)("configuration", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 12, ctx_r2.currentConfiguration$))("currentScope", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 14, ctx_r2.currentScope$))("filters", ctx_r2.filtersRD$.asObservable())("refreshFilters", ctx_r2.refreshFilters)("resultCount", (tmp_10_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 16, ctx_r2.resultsRD$)) == null ? null : tmp_10_0.payload == null ? null : tmp_10_0.payload.totalElements)("searchOptions", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 18, ctx_r2.searchOptions$))("sortOptionsList", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 20, ctx_r2.sortOptionsList$))("currentSortOption", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](6, 22, ctx_r2.currentSortOptions$))("inPlaceSearch", ctx_r2.inPlaceSearch)("viewModeList", ctx_r2.viewModeList)("showViewModes", ctx_r2.showViewModes);
  }
}
function SearchComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, SearchComponent_ng_template_8_ds_search_sidebar_0_Template, 7, 24, "ds-search-sidebar", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, SearchComponent_ng_template_8_ds_search_sidebar_2_Template, 7, 24, "ds-search-sidebar", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "async");
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 2, ctx_r2.isXsOrSm$) !== true);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 4, ctx_r2.isXsOrSm$));
  }
}
function SearchComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "ds-search-form", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 25)(5, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "ds-search-labels", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("query", (tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 8, ctx_r2.searchOptions$)) == null ? null : tmp_4_0.query)("scope", (tmp_5_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 10, ctx_r2.searchOptions$)) == null ? null : tmp_5_0.scope)("hideScopeInUrl", ctx_r2.hideScopeInUrl)("currentUrl", ctx_r2.searchLink)("showScopeSelector", ctx_r2.showScopeSelector)("inPlaceSearch", ctx_r2.inPlaceSearch)("searchPlaceholder", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 12, ctx_r2.searchFormPlaceholder));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("inPlaceSearch", ctx_r2.inPlaceSearch);
  }
}
class SearchComponent extends _app_shared_search_search_component__WEBPACK_IMPORTED_MODULE_1__.SearchComponent {
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵSearchComponent_BaseFactory;
      return function SearchComponent_Factory(t) {
        return (ɵSearchComponent_BaseFactory || (ɵSearchComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetInheritedFactory"](SearchComponent)))(t || SearchComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
      type: SearchComponent,
      selectors: [["ds-themed-search"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵStandaloneFeature"]],
      ngContentSelectors: _c1,
      decls: 12,
      vars: 9,
      consts: [["searchContent", ""], ["sidebarContent", ""], ["searchForm", ""], ["class", "container", 4, "ngIf"], [4, "ngIf"], [3, "id", "sideBarWidth", "sidebarContent", 4, "ngIf"], [1, "container"], [1, "row"], [1, "col-12"], [4, "ngTemplateOutlet"], [3, "id", "sideBarWidth", "sidebarContent"], ["class", "col-12", 4, "ngIf"], ["id", "search-content", 1, "col-12"], [1, "d-block", "d-md-none", "search-controls", "clearfix"], [3, "viewModeList", "inPlaceSearch", 4, "ngIf"], ["aria-controls", "#search-body", 1, "btn", "btn-outline-primary", "float-right", "open-sidebar", 3, "click"], [1, "fas", "fa-sliders"], [3, "searchResults", "searchConfig", "configuration", "disableHeader", "linkType", "context", "selectable", "selectionConfig", "showCsvExport", "showThumbnails", "contentChange", "deselectObject", "selectObject", 4, "ngIf"], [3, "viewModeList", "inPlaceSearch"], [3, "contentChange", "deselectObject", "selectObject", "searchResults", "searchConfig", "configuration", "disableHeader", "linkType", "context", "selectable", "selectionConfig", "showCsvExport", "showThumbnails"], ["id", "search-sidebar", 3, "configurationList", "configuration", "currentScope", "filters", "refreshFilters", "resultCount", "searchOptions", "sortOptionsList", "currentSortOption", "inPlaceSearch", "viewModeList", "showViewModes", "changeConfiguration", "changeViewMode", 4, "ngIf"], ["id", "search-sidebar-sm", 3, "configurationList", "configuration", "currentScope", "filters", "refreshFilters", "resultCount", "searchOptions", "sortOptionsList", "currentSortOption", "inPlaceSearch", "viewModeList", "showViewModes", "toggleSidebar", "changeConfiguration", "changeViewMode", 4, "ngIf"], ["id", "search-sidebar", 3, "changeConfiguration", "changeViewMode", "configurationList", "configuration", "currentScope", "filters", "refreshFilters", "resultCount", "searchOptions", "sortOptionsList", "currentSortOption", "inPlaceSearch", "viewModeList", "showViewModes"], ["id", "search-sidebar-sm", 3, "toggleSidebar", "changeConfiguration", "changeViewMode", "configurationList", "configuration", "currentScope", "filters", "refreshFilters", "resultCount", "searchOptions", "sortOptionsList", "currentSortOption", "inPlaceSearch", "viewModeList", "showViewModes"], ["id", "search-form", 3, "query", "scope", "hideScopeInUrl", "currentUrl", "showScopeSelector", "inPlaceSearch", "searchPlaceholder"], [1, "row", "mb-3", "mb-md-1"], [1, "labels", "col-12"], [3, "inPlaceSearch"]],
      template: function SearchComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵprojectionDef"](_c0);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, SearchComponent_div_0_Template, 4, 1, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, SearchComponent_div_2_Template, 2, 1, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, SearchComponent_ds_page_with_sidebar_4_Template, 2, 4, "ds-page-with-sidebar", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, SearchComponent_ng_template_6_Template, 12, 8, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"])(8, SearchComponent_ng_template_8_Template, 4, 6, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"])(10, SearchComponent_ng_template_10_Template, 7, 14, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.searchEnabled && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 3, ctx.isXsOrSm$));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.showSidebar && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 5, ctx.initialized$));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.showSidebar && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 7, ctx.initialized$));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgTemplateOutlet, _app_shared_sidebar_page_with_sidebar_component__WEBPACK_IMPORTED_MODULE_6__.PageWithSidebarComponent, _app_shared_search_form_themed_search_form_component__WEBPACK_IMPORTED_MODULE_5__.ThemedSearchFormComponent, _app_shared_search_search_results_themed_search_results_component__WEBPACK_IMPORTED_MODULE_3__.ThemedSearchResultsComponent, _app_shared_search_search_sidebar_themed_search_sidebar_component__WEBPACK_IMPORTED_MODULE_4__.ThemedSearchSidebarComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe, _app_shared_search_search_labels_search_labels_component__WEBPACK_IMPORTED_MODULE_2__.SearchLabelsComponent, _app_shared_view_mode_switch_view_mode_switch_component__WEBPACK_IMPORTED_MODULE_7__.ViewModeSwitchComponent],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n@media (max-width: 991.98px) {\n  .container[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: none;\n  }\n}\n  .search-controls {\n  margin-bottom: var(--bs-spacer);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBO0VBQ0U7SUFDRSxXQUFBO0lBQ0EsZUFBQTtFQUNGO0FBQ0Y7QUFDQTtFQUNFLCtCQUFBO0FBQ0YiLCJmaWxlIjoic2VhcmNoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTEuOThweCkge1xuICAuY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IG5vbmU7XG4gIH1cbn1cbjo6bmctZGVlcCAuc2VhcmNoLWNvbnRyb2xzIHtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tYnMtc3BhY2VyKTtcbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQTtFQUNFO0lBQ0UsV0FBQTtJQUNBLGVBQUE7RUFDRjtBQUNGO0FBQ0E7RUFDRSwrQkFBQTtBQUNGO0FBQ0EsNDFCQUE0MUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogbm9uZTtcbiAgfVxufVxuOjpuZy1kZWVwIC5zZWFyY2gtY29udHJvbHMge1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1icy1zcGFjZXIpO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"],
      data: {
        animation: [_app_shared_animations_push__WEBPACK_IMPORTED_MODULE_0__.pushInOut]
      },
      changeDetection: 0
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_themes_custom_app_shared_search_search_component_ts.js.map