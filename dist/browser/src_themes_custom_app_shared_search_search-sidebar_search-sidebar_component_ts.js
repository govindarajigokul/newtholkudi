"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_themes_custom_app_shared_search_search-sidebar_search-sidebar_component_ts"],{

/***/ 26318:
/*!****************************************************************************************!*\
  !*** ./src/themes/custom/app/shared/search/search-sidebar/search-sidebar.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchSidebarComponent: () => (/* binding */ SearchSidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var _app_core_shared_search_search_configuration_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../app/core/shared/search/search-configuration.service */ 68611);
/* harmony import */ var _app_my_dspace_page_my_dspace_configuration_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../app/my-dspace-page/my-dspace-configuration.service */ 787);
/* harmony import */ var _app_shared_search_advanced_search_advanced_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../app/shared/search/advanced-search/advanced-search.component */ 77909);
/* harmony import */ var _app_shared_search_search_filters_themed_search_filters_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../app/shared/search/search-filters/themed-search-filters.component */ 75575);
/* harmony import */ var _app_shared_search_search_settings_themed_search_settings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../app/shared/search/search-settings/themed-search-settings.component */ 1669);
/* harmony import */ var _app_shared_search_search_sidebar_search_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../app/shared/search/search-sidebar/search-sidebar.component */ 9897);
/* harmony import */ var _app_shared_search_search_switch_configuration_search_switch_configuration_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../app/shared/search/search-switch-configuration/search-switch-configuration.component */ 32541);
/* harmony import */ var _app_shared_view_mode_switch_view_mode_switch_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../app/shared/view-mode-switch/view-mode-switch.component */ 35538);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 90310);
/**
 * The contents of this file are subject to the license and copyright
 * detailed in the LICENSE_ATMIRE and NOTICE_ATMIRE files at the root of the source
 * tree and available online at
 *
 * https://www.atmire.com/software-license/
 */












function SearchSidebarComponent_ds_view_mode_switch_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ds-view-mode-switch", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("changeViewMode", function SearchSidebarComponent_ds_view_mode_switch_11_Template_ds_view_mode_switch_changeViewMode_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.changeViewMode.emit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("viewModeList", ctx_r1.viewModeList);
  }
}
function SearchSidebarComponent_ds_search_switch_configuration_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ds-search-switch-configuration", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("changeConfiguration", function SearchSidebarComponent_ds_search_switch_configuration_13_Template_ds_search_switch_configuration_changeConfiguration_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.changeConfiguration.emit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("configurationList", ctx_r1.configurationList)("defaultConfiguration", ctx_r1.configuration)("inPlaceSearch", ctx_r1.inPlaceSearch);
  }
}
function SearchSidebarComponent_ds_advanced_search_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "ds-advanced-search", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "async");
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("configuration", ctx_r1.configuration)("filtersConfig", (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 3, ctx_r1.filters)) == null ? null : tmp_2_0.payload)("scope", ctx_r1.currentScope);
  }
}
function SearchSidebarComponent_ds_search_settings_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "ds-search-settings", 14);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("currentSortOption", ctx_r1.currentSortOption)("sortOptionsList", ctx_r1.sortOptionsList);
  }
}
class SearchSidebarComponent extends _app_shared_search_search_sidebar_search_sidebar_component__WEBPACK_IMPORTED_MODULE_5__.SearchSidebarComponent {
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵSearchSidebarComponent_BaseFactory;
      return function SearchSidebarComponent_Factory(t) {
        return (ɵSearchSidebarComponent_BaseFactory || (ɵSearchSidebarComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetInheritedFactory"](SearchSidebarComponent)))(t || SearchSidebarComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
      type: SearchSidebarComponent,
      selectors: [["ds-themed-search-sidebar"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵProvidersFeature"]([{
        provide: _app_my_dspace_page_my_dspace_configuration_service__WEBPACK_IMPORTED_MODULE_1__.SEARCH_CONFIG_SERVICE,
        useClass: _app_core_shared_search_search_configuration_service__WEBPACK_IMPORTED_MODULE_0__.SearchConfigurationService
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵStandaloneFeature"]],
      decls: 18,
      vars: 21,
      consts: [["id", "sidebar-options", 1, "d-block", "d-md-none", "search-controls", "clearfix"], [1, "results"], ["aria-controls", "search-content", 1, "btn", "btn-outline-primary", "float-right", "close-sidebar", 3, "click"], [1, "fas", "fa-arrow-right"], ["id", "search-sidebar-content"], ["class", "d-none d-md-block", 3, "viewModeList", "changeViewMode", 4, "ngIf"], [1, "sidebar-content"], [3, "configurationList", "defaultConfiguration", "inPlaceSearch", "changeConfiguration", 4, "ngIf"], [3, "currentScope", "currentConfiguration", "filters", "refreshFilters", "inPlaceSearch"], [3, "configuration", "filtersConfig", "scope", 4, "ngIf"], [3, "currentSortOption", "sortOptionsList", 4, "ngIf"], [1, "d-none", "d-md-block", 3, "changeViewMode", "viewModeList"], [3, "changeConfiguration", "configurationList", "defaultConfiguration", "inPlaceSearch"], [3, "configuration", "filtersConfig", "scope"], [3, "currentSortOption", "sortOptionsList"]],
      template: function SearchSidebarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "div", 0)(2, "small", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SearchSidebarComponent_Template_button_click_5_listener() {
            return ctx.toggleSidebar.emit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "i", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](9, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](11, SearchSidebarComponent_ds_view_mode_switch_11_Template, 1, 1, "ds-view-mode-switch", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](13, SearchSidebarComponent_ds_search_switch_configuration_13_Template, 1, 3, "ds-search-switch-configuration", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](14, "ds-search-filters", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](15, SearchSidebarComponent_ds_advanced_search_15_Template, 2, 5, "ds-advanced-search", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](16, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](17, SearchSidebarComponent_ds_search_settings_17_Template, 1, 2, "ds-search-settings", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", ctx.resultCount, " ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 13, "search.sidebar.results"), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](6, 15, "search.sidebar.close"));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](9, 17, "search.sidebar.close"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.showViewModes);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.configurationList);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("currentScope", ctx.currentScope)("currentConfiguration", ctx.configuration)("filters", ctx.filters)("refreshFilters", ctx.refreshFilters)("inPlaceSearch", ctx.inPlaceSearch);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.inPlaceSearch && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](16, 19, ctx.showAdvancedSearch$) === true);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.inPlaceSearch);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _app_shared_view_mode_switch_view_mode_switch_component__WEBPACK_IMPORTED_MODULE_7__.ViewModeSwitchComponent, _app_shared_search_search_switch_configuration_search_switch_configuration_component__WEBPACK_IMPORTED_MODULE_6__.SearchSwitchConfigurationComponent, _app_shared_search_search_filters_themed_search_filters_component__WEBPACK_IMPORTED_MODULE_3__.ThemedSearchFiltersComponent, _app_shared_search_search_settings_themed_search_settings_component__WEBPACK_IMPORTED_MODULE_4__.ThemedSearchSettingsComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe, _app_shared_search_advanced_search_advanced_search_component__WEBPACK_IMPORTED_MODULE_2__.AdvancedSearchComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   .results[_ngcontent-%COMP%] {\n  line-height: var(--ds-button-height);\n}\n\n[_nghost-%COMP%]   ds-view-mode-switch[_ngcontent-%COMP%] {\n  margin-bottom: var(--bs-spacer);\n}\n\n[_nghost-%COMP%]   .sidebar-content[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(:last-child):not(ds-search-switch-configuration) {\n  margin-bottom: calc(4 * var(--bs-spacer));\n  display: block;\n}\n\n[_nghost-%COMP%]   ds-search-switch-configuration[_ngcontent-%COMP%] {\n  margin-bottom: calc(2 * var(--bs-spacer));\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC1zaWRlYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBO0FBQ0E7RUFDRSxvQ0FBQTtBQUNGOztBQUNBO0VBQ0UsK0JBQUE7QUFFRjs7QUFBQTtFQUNFLHlDQUFBO0VBQ0EsY0FBQTtBQUdGOztBQURBO0VBQ0UseUNBQUE7RUFDQSxjQUFBO0FBSUYiLCJmaWxlIjoic2VhcmNoLXNpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqL1xuOmhvc3QgLnJlc3VsdHMge1xuICBsaW5lLWhlaWdodDogdmFyKC0tZHMtYnV0dG9uLWhlaWdodCk7XG59XG46aG9zdCBkcy12aWV3LW1vZGUtc3dpdGNoIHtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tYnMtc3BhY2VyKTtcbn1cbjpob3N0IC5zaWRlYmFyLWNvbnRlbnQgPiAqOm5vdCg6bGFzdC1jaGlsZCk6bm90KGRzLXNlYXJjaC1zd2l0Y2gtY29uZmlndXJhdGlvbikge1xuICBtYXJnaW4tYm90dG9tOiBjYWxjKDQgKiB2YXIoLS1icy1zcGFjZXIpKTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG46aG9zdCBkcy1zZWFyY2gtc3dpdGNoLWNvbmZpZ3VyYXRpb24ge1xuICBtYXJnaW4tYm90dG9tOiBjYWxjKDIgKiB2YXIoLS1icy1zcGFjZXIpKTtcbiAgZGlzcGxheTogYmxvY2s7XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL3NlYXJjaC9zZWFyY2gtc2lkZWJhci9zZWFyY2gtc2lkZWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBO0VBQ0Usb0NBQUE7QUFDRjs7QUFDQTtFQUNFLCtCQUFBO0FBRUY7O0FBQUE7RUFDRSx5Q0FBQTtFQUNBLGNBQUE7QUFHRjs7QUFEQTtFQUNFLHlDQUFBO0VBQ0EsY0FBQTtBQUlGO0FBQ0Esd3RDQUF3dEMiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqL1xuOmhvc3QgLnJlc3VsdHMge1xuICBsaW5lLWhlaWdodDogdmFyKC0tZHMtYnV0dG9uLWhlaWdodCk7XG59XG46aG9zdCBkcy12aWV3LW1vZGUtc3dpdGNoIHtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tYnMtc3BhY2VyKTtcbn1cbjpob3N0IC5zaWRlYmFyLWNvbnRlbnQgPiAqOm5vdCg6bGFzdC1jaGlsZCk6bm90KGRzLXNlYXJjaC1zd2l0Y2gtY29uZmlndXJhdGlvbikge1xuICBtYXJnaW4tYm90dG9tOiBjYWxjKDQgKiB2YXIoLS1icy1zcGFjZXIpKTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG46aG9zdCBkcy1zZWFyY2gtc3dpdGNoLWNvbmZpZ3VyYXRpb24ge1xuICBtYXJnaW4tYm90dG9tOiBjYWxjKDIgKiB2YXIoLS1icy1zcGFjZXIpKTtcbiAgZGlzcGxheTogYmxvY2s7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_themes_custom_app_shared_search_search-sidebar_search-sidebar_component_ts.js.map