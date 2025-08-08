"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_themes_custom_app_search-page_search-page_component_ts"],{

/***/ 76559:
/*!********************************************************************!*\
  !*** ./src/themes/custom/app/search-page/search-page.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchPageComponent: () => (/* binding */ SearchPageComponent)
/* harmony export */ });
/* harmony import */ var src_app_my_dspace_page_my_dspace_configuration_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/my-dspace-page/my-dspace-configuration.service */ 787);
/* harmony import */ var _app_core_shared_search_search_configuration_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../app/core/shared/search/search-configuration.service */ 68611);
/* harmony import */ var _app_search_page_search_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app/search-page/search-page.component */ 67464);
/* harmony import */ var _app_shared_search_themed_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../app/shared/search/themed-search.component */ 54992);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 90310);





/**
 * This component represents the whole search page
 * It renders search results depending on the current search options
 */
class SearchPageComponent extends _app_search_page_search_page_component__WEBPACK_IMPORTED_MODULE_2__.SearchPageComponent {
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵSearchPageComponent_BaseFactory;
      return function SearchPageComponent_Factory(t) {
        return (ɵSearchPageComponent_BaseFactory || (ɵSearchPageComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetInheritedFactory"](SearchPageComponent)))(t || SearchPageComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: SearchPageComponent,
      selectors: [["ds-themed-search-page"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([{
        provide: src_app_my_dspace_page_my_dspace_configuration_service__WEBPACK_IMPORTED_MODULE_0__.SEARCH_CONFIG_SERVICE,
        useClass: _app_core_shared_search_search_configuration_service__WEBPACK_IMPORTED_MODULE_1__.SearchConfigurationService
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
      decls: 1,
      vars: 2,
      consts: [[3, "showCsvExport", "trackStatistics"]],
      template: function SearchPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "ds-search", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("showCsvExport", true)("trackStatistics", true);
        }
      },
      dependencies: [_app_shared_search_themed_search_component__WEBPACK_IMPORTED_MODULE_3__.ThemedSearchComponent],
      encapsulation: 2
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_themes_custom_app_search-page_search-page_component_ts.js.map