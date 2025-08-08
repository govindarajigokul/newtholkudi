"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_themes_custom_app_submission_import-external_submission-import-external_component_ts"],{

/***/ 33207:
/*!**************************************************************************************************!*\
  !*** ./src/themes/custom/app/submission/import-external/submission-import-external.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SubmissionImportExternalComponent: () => (/* binding */ SubmissionImportExternalComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var _app_shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../app/shared/alert/alert.component */ 16292);
/* harmony import */ var _app_shared_animations_fade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../app/shared/animations/fade */ 50332);
/* harmony import */ var _app_shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../app/shared/loading/themed-loading.component */ 82394);
/* harmony import */ var _app_shared_object_collection_object_collection_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../app/shared/object-collection/object-collection.component */ 14828);
/* harmony import */ var _app_shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../app/shared/utils/var.directive */ 18226);
/* harmony import */ var _app_submission_import_external_import_external_searchbar_submission_import_external_searchbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../app/submission/import-external/import-external-searchbar/submission-import-external-searchbar.component */ 21440);
/* harmony import */ var _app_submission_import_external_submission_import_external_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../app/submission/import-external/submission-import-external.component */ 63232);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 90310);












const _c0 = () => ["/mydspace"];
const _c1 = (a0, a1) => ({
  repeatable: a0,
  listId: a1
});
function SubmissionImportExternalComponent_div_7_div_1_ng_container_1_h2_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "submission.sections.describe.relationship-lookup.selection-tab.title"));
  }
}
function SubmissionImportExternalComponent_div_7_div_1_ng_container_1_ds_viewable_collection_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ds-viewable-collection", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("importObject", function SubmissionImportExternalComponent_div_7_div_1_ng_container_1_ds_viewable_collection_2_Template_ds_viewable_collection_importObject_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.import($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const entriesRD_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().ngVar;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("@fadeIn", undefined)("objects", entriesRD_r3)("selectionConfig", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](8, _c1, ctx_r1.repeatable, ctx_r1.listId))("config", ctx_r1.initialPagination)("hideGear", true)("context", ctx_r1.context)("importable", true)("importConfig", ctx_r1.importConfig);
  }
}
function SubmissionImportExternalComponent_div_7_div_1_ng_container_1_ds_loading_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "ds-loading", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("message", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 1, "loading.search-results"));
  }
}
function SubmissionImportExternalComponent_div_7_div_1_ng_container_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 17)(1, "ds-alert", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("type", ctx_r1.AlertType.Info);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 2, "search.results.empty"));
  }
}
function SubmissionImportExternalComponent_div_7_div_1_ng_container_1_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 19)(1, "ds-alert", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("type", ctx_r1.AlertType.Info);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 2, "search.results.response.500"));
  }
}
function SubmissionImportExternalComponent_div_7_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, SubmissionImportExternalComponent_div_7_div_1_ng_container_1_h2_1_Template, 3, 3, "h2", 10)(2, SubmissionImportExternalComponent_div_7_div_1_ng_container_1_ds_viewable_collection_2_Template, 1, 11, "ds-viewable-collection", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, SubmissionImportExternalComponent_div_7_div_1_ng_container_1_ds_loading_4_Template, 2, 3, "ds-loading", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, SubmissionImportExternalComponent_div_7_div_1_ng_container_1_div_6_Template, 4, 4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, SubmissionImportExternalComponent_div_7_div_1_ng_container_1_div_8_Template, 4, 4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const entriesRD_r3 = ctx.ngVar;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", entriesRD_r3 && (entriesRD_r3 == null ? null : entriesRD_r3.payload == null ? null : entriesRD_r3.payload.page == null ? null : entriesRD_r3.payload.page.length) !== 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (entriesRD_r3 == null ? null : entriesRD_r3.hasSucceeded) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 5, ctx_r1.isLoading$) !== true && (entriesRD_r3 == null ? null : entriesRD_r3.payload == null ? null : entriesRD_r3.payload.page == null ? null : entriesRD_r3.payload.page.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](5, 7, ctx_r1.isLoading$));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](7, 9, ctx_r1.isLoading$) !== true && (entriesRD_r3 == null ? null : entriesRD_r3.payload == null ? null : entriesRD_r3.payload.page == null ? null : entriesRD_r3.payload.page.length) === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](9, 11, ctx_r1.isLoading$) !== true && entriesRD_r3.statusCode === 500);
  }
}
function SubmissionImportExternalComponent_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, SubmissionImportExternalComponent_div_7_div_1_ng_container_1_Template, 10, 13, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngVar", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, ctx_r1.entriesRD$));
  }
}
function SubmissionImportExternalComponent_div_7_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 2)(1, "ds-alert", 18)(2, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("type", ctx_r1.AlertType.Info);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](4, 2, "submission.import-external.page.hint"));
  }
}
function SubmissionImportExternalComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, SubmissionImportExternalComponent_div_7_div_1_Template, 3, 3, "div", 8)(2, SubmissionImportExternalComponent_div_7_div_2_Template, 5, 4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.reload$.value.sourceId !== "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.reload$.value.sourceId === "");
  }
}
/**
 * This component allows to submit a new workspaceitem importing the data from an external source.
 */
class SubmissionImportExternalComponent extends _app_submission_import_external_submission_import_external_component__WEBPACK_IMPORTED_MODULE_6__.SubmissionImportExternalComponent {
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵSubmissionImportExternalComponent_BaseFactory;
      return function SubmissionImportExternalComponent_Factory(t) {
        return (ɵSubmissionImportExternalComponent_BaseFactory || (ɵSubmissionImportExternalComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetInheritedFactory"](SubmissionImportExternalComponent)))(t || SubmissionImportExternalComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: SubmissionImportExternalComponent,
      selectors: [["ds-themed-submission-import-external"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵStandaloneFeature"]],
      decls: 15,
      vars: 10,
      consts: [[1, "container"], [1, "row"], [1, "col-md-12"], ["id", "header", 1, "pb-2"], [3, "externalSourceData", "initExternalSourceData"], ["class", "row", 4, "ngIf"], ["role", "button", 1, "btn", "btn-outline-secondary", 3, "routerLink"], ["aria-hidden", "true", 1, "fa", "fa-chevron-left"], ["class", "col-md-12", 4, "ngIf"], [4, "ngVar"], [4, "ngIf"], [3, "objects", "selectionConfig", "config", "hideGear", "context", "importable", "importConfig", "importObject", 4, "ngIf"], [3, "message", 4, "ngIf"], ["data-test", "empty-external-entry-list", 4, "ngIf"], ["data-test", "empty-external-error-500", 4, "ngIf"], [3, "importObject", "objects", "selectionConfig", "config", "hideGear", "context", "importable", "importConfig"], [3, "message"], ["data-test", "empty-external-entry-list"], [3, "type"], ["data-test", "empty-external-error-500"], [1, "lead", "mb-0"]],
      template: function SubmissionImportExternalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "ds-submission-import-external-searchbar", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("externalSourceData", function SubmissionImportExternalComponent_Template_ds_submission_import_external_searchbar_externalSourceData_6_listener($event) {
            return ctx.getExternalSourceData($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, SubmissionImportExternalComponent_div_7_Template, 3, 2, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 1)(9, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "hr");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](12, "i", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](14, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](5, 5, "submission.import-external.title" + (ctx.label ? "." + ctx.label : "")));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("initExternalSourceData", ctx.reload$.value);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.reload$.value.entity);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](9, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](14, 7, "submission.import-external.back-to-my-dspace"), " ");
        }
      },
      dependencies: [_app_shared_object_collection_object_collection_component__WEBPACK_IMPORTED_MODULE_3__.ObjectCollectionComponent, _app_shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_2__.ThemedLoadingComponent, _app_shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_0__.AlertComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe, _app_submission_import_external_import_external_searchbar_submission_import_external_searchbar_component__WEBPACK_IMPORTED_MODULE_5__.SubmissionImportExternalSearchbarComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe, _app_shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_4__.VarDirective, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLink],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1Ym1pc3Npb24taW1wb3J0LWV4dGVybmFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBIiwiZmlsZSI6InN1Ym1pc3Npb24taW1wb3J0LWV4dGVybmFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi8iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc3VibWlzc2lvbi9pbXBvcnQtZXh0ZXJuYWwvc3VibWlzc2lvbi1pbXBvcnQtZXh0ZXJuYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQSxvbUJBQW9tQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
      data: {
        animation: [_app_shared_animations_fade__WEBPACK_IMPORTED_MODULE_1__.fadeIn]
      }
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_themes_custom_app_submission_import-external_submission-import-external_component_ts.js.map