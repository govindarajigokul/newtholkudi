"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_themes_custom_app_shared_form_builder_ds-dynamic-form-ui_relation-lookup-modal_external-s-db3f14"],{

/***/ 5924:
/*!*************************************************************************************************************************************************************************!*\
  !*** ./src/themes/custom/app/shared/form/builder/ds-dynamic-form-ui/relation-lookup-modal/external-source-tab/dynamic-lookup-relation-external-source-tab.component.ts ***!
  \*************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DsDynamicLookupRelationExternalSourceTabComponent: () => (/* binding */ DsDynamicLookupRelationExternalSourceTabComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var _app_core_shared_search_search_configuration_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../../app/core/shared/search/search-configuration.service */ 68611);
/* harmony import */ var _app_my_dspace_page_my_dspace_configuration_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../../app/my-dspace-page/my-dspace-configuration.service */ 787);
/* harmony import */ var _app_shared_animations_fade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../app/shared/animations/fade */ 50332);
/* harmony import */ var _app_shared_error_error_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../../app/shared/error/error.component */ 79632);
/* harmony import */ var _app_shared_form_builder_ds_dynamic_form_ui_relation_lookup_modal_external_source_tab_dynamic_lookup_relation_external_source_tab_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../../app/shared/form/builder/ds-dynamic-form-ui/relation-lookup-modal/external-source-tab/dynamic-lookup-relation-external-source-tab.component */ 24945);
/* harmony import */ var _app_shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../../../app/shared/loading/themed-loading.component */ 82394);
/* harmony import */ var _app_shared_object_collection_object_collection_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../../../app/shared/object-collection/object-collection.component */ 14828);
/* harmony import */ var _app_shared_page_size_selector_page_size_selector_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../../../app/shared/page-size-selector/page-size-selector.component */ 46580);
/* harmony import */ var _app_shared_search_form_themed_search_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../../../app/shared/search-form/themed-search-form.component */ 18016);
/* harmony import */ var _app_shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../../../app/shared/utils/var.directive */ 18226);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 90310);














const _c0 = (a0, a1) => ({
  repeatable: a0,
  listId: a1
});
function DsDynamicLookupRelationExternalSourceTabComponent_ng_container_14_ds_viewable_collection_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ds-viewable-collection", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("importObject", function DsDynamicLookupRelationExternalSourceTabComponent_ng_container_14_ds_viewable_collection_1_Template_ds_viewable_collection_importObject_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.import($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const entriesRD_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().ngVar;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("@fadeIn", undefined)("objects", entriesRD_r3)("selectionConfig", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](10, _c0, ctx_r1.repeatable, ctx_r1.listId))("config", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](1, 8, ctx_r1.currentPagination$))("hideGear", true)("context", ctx_r1.context)("importable", true)("importConfig", ctx_r1.importConfig);
  }
}
function DsDynamicLookupRelationExternalSourceTabComponent_ng_container_14_ds_loading_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "ds-loading", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("message", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](1, 1, "loading.search-results"));
  }
}
function DsDynamicLookupRelationExternalSourceTabComponent_ng_container_14_ds_error_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "ds-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("message", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](1, 1, "error.search-results"));
  }
}
function DsDynamicLookupRelationExternalSourceTabComponent_ng_container_14_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, "search.results.empty"), " ");
  }
}
function DsDynamicLookupRelationExternalSourceTabComponent_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, DsDynamicLookupRelationExternalSourceTabComponent_ng_container_14_ds_viewable_collection_1_Template, 2, 13, "ds-viewable-collection", 5)(2, DsDynamicLookupRelationExternalSourceTabComponent_ng_container_14_ds_loading_2_Template, 2, 3, "ds-loading", 6)(3, DsDynamicLookupRelationExternalSourceTabComponent_ng_container_14_ds_error_3_Template, 2, 3, "ds-error", 6)(4, DsDynamicLookupRelationExternalSourceTabComponent_ng_container_14_div_4_Template, 3, 3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const entriesRD_r3 = ctx.ngVar;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (entriesRD_r3 == null ? null : entriesRD_r3.hasSucceeded) && !(entriesRD_r3 == null ? null : entriesRD_r3.isLoading) && (entriesRD_r3 == null ? null : entriesRD_r3.payload == null ? null : entriesRD_r3.payload.page == null ? null : entriesRD_r3.payload.page.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !entriesRD_r3 || (entriesRD_r3 == null ? null : entriesRD_r3.isLoading));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (entriesRD_r3 == null ? null : entriesRD_r3.hasFailed) && (!(entriesRD_r3 == null ? null : entriesRD_r3.errorMessage) || (entriesRD_r3 == null ? null : entriesRD_r3.statusCode) !== 400));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (entriesRD_r3 == null ? null : entriesRD_r3.payload == null ? null : entriesRD_r3.payload.page == null ? null : entriesRD_r3.payload.page.length) === 0 || (entriesRD_r3 == null ? null : entriesRD_r3.statusCode) === 400);
  }
}
class DsDynamicLookupRelationExternalSourceTabComponent extends _app_shared_form_builder_ds_dynamic_form_ui_relation_lookup_modal_external_source_tab_dynamic_lookup_relation_external_source_tab_component__WEBPACK_IMPORTED_MODULE_4__.DsDynamicLookupRelationExternalSourceTabComponent {
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵDsDynamicLookupRelationExternalSourceTabComponent_BaseFactory;
      return function DsDynamicLookupRelationExternalSourceTabComponent_Factory(t) {
        return (ɵDsDynamicLookupRelationExternalSourceTabComponent_BaseFactory || (ɵDsDynamicLookupRelationExternalSourceTabComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetInheritedFactory"](DsDynamicLookupRelationExternalSourceTabComponent)))(t || DsDynamicLookupRelationExternalSourceTabComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
      type: DsDynamicLookupRelationExternalSourceTabComponent,
      selectors: [["ds-themed-dynamic-lookup-relation-external-source-tab"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵProvidersFeature"]([{
        provide: _app_my_dspace_page_my_dspace_configuration_service__WEBPACK_IMPORTED_MODULE_1__.SEARCH_CONFIG_SERVICE,
        useClass: _app_core_shared_search_search_configuration_service__WEBPACK_IMPORTED_MODULE_0__.SearchConfigurationService
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵStandaloneFeature"]],
      decls: 16,
      vars: 16,
      consts: [[1, "row"], [1, "col-4"], [1, "col-8"], [3, "query", "inPlaceSearch", "searchPlaceholder"], [4, "ngVar"], [3, "objects", "selectionConfig", "config", "hideGear", "context", "importable", "importConfig", "importObject", 4, "ngIf"], [3, "message", 4, "ngIf"], ["id", "empty-external-entry-list", 4, "ngIf"], [3, "importObject", "objects", "selectionConfig", "config", "hideGear", "context", "importable", "importConfig"], [3, "message"], ["id", "empty-external-entry-list"]],
      template: function DsDynamicLookupRelationExternalSourceTabComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](5, "ds-page-size-selector");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](7, "ds-search-form", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](8, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](9, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "div")(11, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](13, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](14, DsDynamicLookupRelationExternalSourceTabComponent_ng_container_14_Template, 5, 4, "ng-container", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](15, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          let tmp_1_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 6, "submission.sections.describe.relationship-lookup.selection-tab.settings"));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("query", (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](8, 8, ctx.searchConfigService.paginatedSearchOptions)) == null ? null : tmp_1_0.query)("inPlaceSearch", true)("searchPlaceholder", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](9, 10, "submission.sections.describe.relationship-lookup.selection-tab.search-form.placeholder"));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](13, 12, "submission.sections.describe.relationship-lookup.selection-tab.title." + ctx.externalSource.id));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngVar", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](15, 14, ctx.entriesRD$));
        }
      },
      dependencies: [_app_shared_search_form_themed_search_form_component__WEBPACK_IMPORTED_MODULE_8__.ThemedSearchFormComponent, _app_shared_page_size_selector_page_size_selector_component__WEBPACK_IMPORTED_MODULE_7__.PageSizeSelectorComponent, _app_shared_object_collection_object_collection_component__WEBPACK_IMPORTED_MODULE_6__.ObjectCollectionComponent, _app_shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_9__.VarDirective, _angular_common__WEBPACK_IMPORTED_MODULE_11__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslatePipe, _app_shared_error_error_component__WEBPACK_IMPORTED_MODULE_3__.ErrorComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _app_shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_5__.ThemedLoadingComponent],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImR5bmFtaWMtbG9va3VwLXJlbGF0aW9uLWV4dGVybmFsLXNvdXJjZS10YWIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUEiLCJmaWxlIjoiZHluYW1pYy1sb29rdXAtcmVsYXRpb24tZXh0ZXJuYWwtc291cmNlLXRhYi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2Zvcm0vYnVpbGRlci9kcy1keW5hbWljLWZvcm0tdWkvcmVsYXRpb24tbG9va3VwLW1vZGFsL2V4dGVybmFsLXNvdXJjZS10YWIvZHluYW1pYy1sb29rdXAtcmVsYXRpb24tZXh0ZXJuYWwtc291cmNlLXRhYi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBLGdwQkFBZ3BCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi8iXSwic291cmNlUm9vdCI6IiJ9 */"],
      data: {
        animation: [_app_shared_animations_fade__WEBPACK_IMPORTED_MODULE_2__.fadeIn, _app_shared_animations_fade__WEBPACK_IMPORTED_MODULE_2__.fadeInOut]
      }
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_themes_custom_app_shared_form_builder_ds-dynamic-form-ui_relation-lookup-modal_external-s-db3f14.js.map