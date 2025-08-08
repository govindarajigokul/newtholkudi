"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_themes_custom_app_shared_search_search-settings_search-settings_component_ts"],{

/***/ 13622:
/*!******************************************************************************************!*\
  !*** ./src/themes/custom/app/shared/search/search-settings/search-settings.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchSettingsComponent: () => (/* binding */ SearchSettingsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 56106);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var _app_core_shared_search_search_configuration_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../app/core/shared/search/search-configuration.service */ 68611);
/* harmony import */ var _app_my_dspace_page_my_dspace_configuration_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../app/my-dspace-page/my-dspace-configuration.service */ 787);
/* harmony import */ var _app_shared_page_size_selector_page_size_selector_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../app/shared/page-size-selector/page-size-selector.component */ 46580);
/* harmony import */ var _app_shared_search_search_settings_search_settings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../app/shared/search/search-settings/search-settings.component */ 93125);
/* harmony import */ var _app_shared_sidebar_sidebar_dropdown_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../app/shared/sidebar/sidebar-dropdown.component */ 80270);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 90310);
/**
 * The contents of this file are subject to the license and copyright
 * detailed in the LICENSE_ATMIRE and NOTICE_ATMIRE files at the root of the source
 * tree and available online at
 *
 * https://www.atmire.com/software-license/
 */











function SearchSettingsComponent_ds_sidebar_dropdown_5_option_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const sortOptionsEntry_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", sortOptionsEntry_r3.field + "," + sortOptionsEntry_r3.direction.toString())("selected", sortOptionsEntry_r3.field === (ctx_r1.currentSortOption == null ? null : ctx_r1.currentSortOption.field) && sortOptionsEntry_r3.direction === (ctx_r1.currentSortOption == null ? null : ctx_r1.currentSortOption.direction) ? "selected" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 3, "sorting." + sortOptionsEntry_r3.field + "." + sortOptionsEntry_r3.direction), " ");
  }
}
function SearchSettingsComponent_ds_sidebar_dropdown_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ds-sidebar-dropdown", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("changed", function SearchSettingsComponent_ds_sidebar_dropdown_5_Template_ds_sidebar_dropdown_changed_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.reloadOrder($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SearchSettingsComponent_ds_sidebar_dropdown_5_option_1_Template, 3, 5, "option", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("id", "search-sidebar-sort")("label", "search.sidebar.settings.sort-by");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.sortOptionsList);
  }
}
class SearchSettingsComponent extends _app_shared_search_search_settings_search_settings_component__WEBPACK_IMPORTED_MODULE_3__.SearchSettingsComponent {
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵSearchSettingsComponent_BaseFactory;
      return function SearchSettingsComponent_Factory(t) {
        return (ɵSearchSettingsComponent_BaseFactory || (ɵSearchSettingsComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetInheritedFactory"](SearchSettingsComponent)))(t || SearchSettingsComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: SearchSettingsComponent,
      selectors: [["ds-themed-search-settings"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([{
        provide: _app_my_dspace_page_my_dspace_configuration_service__WEBPACK_IMPORTED_MODULE_1__.SEARCH_CONFIG_SERVICE,
        useClass: _app_core_shared_search_search_configuration_service__WEBPACK_IMPORTED_MODULE_0__.SearchConfigurationService
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵStandaloneFeature"]],
      decls: 7,
      vars: 4,
      consts: [[1, "result-order-settings"], [3, "id", "label", "changed", 4, "ngIf"], [3, "changed", "id", "label"], [3, "value", "selected", 4, "ngFor", "ngForOf"], [3, "value", "selected"]],
      template: function SearchSettingsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, SearchSettingsComponent_ds_sidebar_dropdown_5_Template, 2, 3, "ds-sidebar-dropdown", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "ds-page-size-selector");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 2, "search.sidebar.settings.title"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.sortOptionsList);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _app_shared_sidebar_sidebar_dropdown_component__WEBPACK_IMPORTED_MODULE_4__.SidebarDropdownComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgFor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgSelectMultipleOption"], _app_shared_page_size_selector_page_size_selector_component__WEBPACK_IMPORTED_MODULE_2__.PageSizeSelectorComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n.setting-option[_ngcontent-%COMP%] {\n  border: 1px solid var(--bs-light);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC1zZXR0aW5ncy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBO0VBQ0UsaUNBQUE7QUFDRiIsImZpbGUiOiJzZWFyY2gtc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqL1xuLnNldHRpbmctb3B0aW9uIHtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYnMtbGlnaHQpO1xufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL3NlYXJjaC9zZWFyY2gtc2V0dGluZ3Mvc2VhcmNoLXNldHRpbmdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBO0FBQ0E7RUFDRSxpQ0FBQTtBQUNGO0FBQ0Esb3JCQUFvckIiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqL1xuLnNldHRpbmctb3B0aW9uIHtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYnMtbGlnaHQpO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_themes_custom_app_shared_search_search-settings_search-settings_component_ts.js.map