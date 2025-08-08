"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_themes_custom_app_shared_form_builder_ds-dynamic-form-ui_relation-lookup-modal_search-tab-b4dc26"],{

/***/ 37558:
/*!*******************************************************************************************************************************************************!*\
  !*** ./src/themes/custom/app/shared/form/builder/ds-dynamic-form-ui/relation-lookup-modal/search-tab/dynamic-lookup-relation-search-tab.component.ts ***!
  \*******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DsDynamicLookupRelationSearchTabComponent: () => (/* binding */ DsDynamicLookupRelationSearchTabComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 49966);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var _app_core_shared_search_search_configuration_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../../app/core/shared/search/search-configuration.service */ 68611);
/* harmony import */ var _app_my_dspace_page_my_dspace_configuration_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../../app/my-dspace-page/my-dspace-configuration.service */ 787);
/* harmony import */ var _app_shared_form_builder_ds_dynamic_form_ui_relation_lookup_modal_search_tab_dynamic_lookup_relation_search_tab_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../app/shared/form/builder/ds-dynamic-form-ui/relation-lookup-modal/search-tab/dynamic-lookup-relation-search-tab.component */ 26091);
/* harmony import */ var _app_shared_search_themed_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../../app/shared/search/themed-search.component */ 54992);
/* harmony import */ var _app_shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../../app/shared/utils/var.directive */ 18226);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 90310);











const _c0 = (a0, a1) => ({
  repeatable: a0,
  listId: a1
});
function DsDynamicLookupRelationSearchTabComponent_ds_search_0_div_1_button_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 1, "submission.sections.describe.relationship-lookup.search-tab.loading"));
  }
}
function DsDynamicLookupRelationSearchTabComponent_ds_search_0_div_1_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 12)(1, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DsDynamicLookupRelationSearchTabComponent_ds_search_0_div_1_div_8_Template_button_click_1_listener() {
      const resultsRD_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3).ngVar;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.selectPage(resultsRD_r4 == null ? null : resultsRD_r4.page));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DsDynamicLookupRelationSearchTabComponent_ds_search_0_div_1_div_8_Template_button_click_4_listener() {
      const resultsRD_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3).ngVar;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.deselectPage(resultsRD_r4 == null ? null : resultsRD_r4.page));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 2, "submission.sections.describe.relationship-lookup.search-tab.select-page"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 4, "submission.sections.describe.relationship-lookup.search-tab.deselect-page"));
  }
}
function DsDynamicLookupRelationSearchTabComponent_ds_search_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 3)(1, "div", 4)(2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, DsDynamicLookupRelationSearchTabComponent_ds_search_0_div_1_button_3_Template, 5, 3, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 7)(5, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, DsDynamicLookupRelationSearchTabComponent_ds_search_0_div_1_div_8_Template, 7, 6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.selectAllLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", ctx_r1.selectAllLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](7, 4, "submission.sections.describe.relationship-lookup.toggle-dropdown"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngVar", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](9, 6, ctx_r1.resultsRD$));
  }
}
function DsDynamicLookupRelationSearchTabComponent_ds_search_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ds-search", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("resultFound", function DsDynamicLookupRelationSearchTabComponent_ds_search_0_Template_ds_search_resultFound_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.onResultFound($event));
    })("deselectObject", function DsDynamicLookupRelationSearchTabComponent_ds_search_0_Template_ds_search_deselectObject_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.deselectObject.emit($event));
    })("selectObject", function DsDynamicLookupRelationSearchTabComponent_ds_search_0_Template_ds_search_selectObject_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.selectObject.emit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, DsDynamicLookupRelationSearchTabComponent_ds_search_0_div_1_Template, 10, 8, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("configuration", ctx_r1.relationship.searchConfiguration)("context", ctx_r1.context)("fixedFilterQuery", ctx_r1.relationship.filter)("hiddenQuery", ctx_r1.hiddenQuery)("inPlaceSearch", true)("linkType", ctx_r1.linkTypes.ExternalLink)("searchFormPlaceholder", "submission.sections.describe.relationship-lookup.search-tab.search-form.placeholder")("selectable", true)("selectionConfig", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](13, _c0, ctx_r1.repeatable, ctx_r1.listId))("showScopeSelector", false)("showViewModes", false)("query", ctx_r1.query);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.repeatable);
  }
}
class DsDynamicLookupRelationSearchTabComponent extends _app_shared_form_builder_ds_dynamic_form_ui_relation_lookup_modal_search_tab_dynamic_lookup_relation_search_tab_component__WEBPACK_IMPORTED_MODULE_2__.DsDynamicLookupRelationSearchTabComponent {
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵDsDynamicLookupRelationSearchTabComponent_BaseFactory;
      return function DsDynamicLookupRelationSearchTabComponent_Factory(t) {
        return (ɵDsDynamicLookupRelationSearchTabComponent_BaseFactory || (ɵDsDynamicLookupRelationSearchTabComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetInheritedFactory"](DsDynamicLookupRelationSearchTabComponent)))(t || DsDynamicLookupRelationSearchTabComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: DsDynamicLookupRelationSearchTabComponent,
      selectors: [["ds-themed-dynamic-lookup-relation-search-tab"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([{
        provide: _app_my_dspace_page_my_dspace_configuration_service__WEBPACK_IMPORTED_MODULE_1__.SEARCH_CONFIG_SERVICE,
        useClass: _app_core_shared_search_search_configuration_service__WEBPACK_IMPORTED_MODULE_0__.SearchConfigurationService
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵStandaloneFeature"]],
      decls: 1,
      vars: 1,
      consts: [[3, "configuration", "context", "fixedFilterQuery", "hiddenQuery", "inPlaceSearch", "linkType", "searchFormPlaceholder", "selectable", "selectionConfig", "showScopeSelector", "showViewModes", "query", "resultFound", "deselectObject", "selectObject", 4, "ngIf"], [3, "resultFound", "deselectObject", "selectObject", "configuration", "context", "fixedFilterQuery", "hiddenQuery", "inPlaceSearch", "linkType", "searchFormPlaceholder", "selectable", "selectionConfig", "showScopeSelector", "showViewModes", "query"], ["additionalSearchOptions", "", "class", "position-absolute", 4, "ngIf"], ["additionalSearchOptions", "", 1, "position-absolute"], [1, "input-group", "mb-3"], ["ngbDropdown", "", 1, "input-group", "dropdown-button"], ["type", "button", "class", "btn btn-outline-secondary rounded-right", 4, "ngIf"], ["id", "resultdropdown", "type", "button", "ngbDropdownToggle", "", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-outline-secondary", "dropdown-toggle-split", 3, "hidden"], [1, "sr-only"], ["ngbDropdownMenu", "", "aria-labelledby", "resultdropdown", 4, "ngVar"], ["type", "button", 1, "btn", "btn-outline-secondary", "rounded-right"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm"], ["ngbDropdownMenu", "", "aria-labelledby", "resultdropdown"], [1, "dropdown-item", 3, "click"]],
      template: function DsDynamicLookupRelationSearchTabComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, DsDynamicLookupRelationSearchTabComponent_ds_search_0_Template, 2, 16, "ds-search", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.relationship.searchConfiguration && ctx.context);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe, _app_shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_4__.VarDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbDropdownModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbDropdownMenu, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _app_shared_search_themed_search_component__WEBPACK_IMPORTED_MODULE_3__.ThemedSearchComponent],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n.position-absolute[_ngcontent-%COMP%] {\n  right: var(--bs-spacer);\n}\n\n.dropdown-button[_ngcontent-%COMP%] {\n  z-index: 3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImR5bmFtaWMtbG9va3VwLXJlbGF0aW9uLXNlYXJjaC10YWIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQTtFQUNFLHVCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxVQUFBO0FBRUYiLCJmaWxlIjoiZHluYW1pYy1sb29rdXAtcmVsYXRpb24tc2VhcmNoLXRhYi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovXG4ucG9zaXRpb24tYWJzb2x1dGUge1xuICByaWdodDogdmFyKC0tYnMtc3BhY2VyKTtcbn1cbi5kcm9wZG93bi1idXR0b24ge1xuICB6LWluZGV4OiAzO1xufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2Zvcm0vYnVpbGRlci9kcy1keW5hbWljLWZvcm0tdWkvcmVsYXRpb24tbG9va3VwLW1vZGFsL3NlYXJjaC10YWIvZHluYW1pYy1sb29rdXAtcmVsYXRpb24tc2VhcmNoLXRhYi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBO0VBQ0UsdUJBQUE7QUFDRjs7QUFDQTtFQUNFLFVBQUE7QUFFRjtBQUNBLDR5QkFBNHlCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi9cbi5wb3NpdGlvbi1hYnNvbHV0ZSB7XG4gIHJpZ2h0OiB2YXIoLS1icy1zcGFjZXIpO1xufVxuLmRyb3Bkb3duLWJ1dHRvbiB7XG4gIHotaW5kZXg6IDM7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_themes_custom_app_shared_form_builder_ds-dynamic-form-ui_relation-lookup-modal_search-tab-b4dc26.js.map