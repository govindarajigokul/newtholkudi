"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_themes_custom_app_shared_browse-by_browse-by_component_ts"],{

/***/ 84281:
/*!***********************************************************************!*\
  !*** ./src/themes/custom/app/shared/browse-by/browse-by.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BrowseByComponent: () => (/* binding */ BrowseByComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var src_app_shared_error_error_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/error/error.component */ 79632);
/* harmony import */ var src_app_shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/loading/themed-loading.component */ 82394);
/* harmony import */ var src_app_shared_object_collection_object_collection_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/object-collection/object-collection.component */ 14828);
/* harmony import */ var src_app_shared_results_back_button_themed_results_back_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/results-back-button/themed-results-back-button.component */ 4420);
/* harmony import */ var src_app_shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/utils/var.directive */ 18226);
/* harmony import */ var _app_shared_animations_fade__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../app/shared/animations/fade */ 50332);
/* harmony import */ var _app_shared_browse_by_browse_by_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../app/shared/browse-by/browse-by.component */ 22192);
/* harmony import */ var _app_shared_starts_with_starts_with_loader_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../app/shared/starts-with/starts-with-loader.component */ 31956);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 90310);












function BrowseByComponent_ng_container_0_h1_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, ctx_r0.title));
  }
}
function BrowseByComponent_ng_container_0_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "ds-results-back-button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("back", ctx_r0.back)("buttonLabel", ctx_r0.buttonLabel);
  }
}
function BrowseByComponent_ng_container_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, BrowseByComponent_ng_container_0_div_3_div_1_Template, 2, 2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "ds-viewable-collection", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("prev", function BrowseByComponent_ng_container_0_div_3_Template_ds_viewable_collection_prev_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r0.goPrev());
    })("next", function BrowseByComponent_ng_container_0_div_3_Template_ds_viewable_collection_next_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r0.goNext());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const objects_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().ngVar;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 6, ctx_r0.shouldDisplayResetButton$));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("config", ctx_r0.paginationConfig)("sortConfig", ctx_r0.sortConfig)("showPaginator", ctx_r0.showPaginator)("objects", objects_r3);
  }
}
function BrowseByComponent_ng_container_0_ds_loading_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "ds-loading", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("message", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 1, "loading.browse-by"));
  }
}
function BrowseByComponent_ng_container_0_ds_error_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "ds-error", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("message", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 1, "error.browse-by"));
  }
}
function BrowseByComponent_ng_container_0_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "ds-results-back-button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("back", ctx_r0.back)("buttonLabel", ctx_r0.buttonLabel);
  }
}
function BrowseByComponent_ng_container_0_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, BrowseByComponent_ng_container_0_div_6_div_1_Template, 2, 2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 2, ctx_r0.shouldDisplayResetButton$));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 4, "browse.empty"), " ");
  }
}
function BrowseByComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, BrowseByComponent_ng_container_0_h1_1_Template, 3, 3, "h1", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "ds-starts-with-loader", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, BrowseByComponent_ng_container_0_div_3_Template, 4, 8, "div", 1)(4, BrowseByComponent_ng_container_0_ds_loading_4_Template, 2, 3, "ds-loading", 3)(5, BrowseByComponent_ng_container_0_ds_error_5_Template, 2, 3, "ds-error", 3)(6, BrowseByComponent_ng_container_0_div_6_Template, 6, 6, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const objects_r3 = ctx.ngVar;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.displayTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("paginationId", ctx_r0.paginationConfig == null ? null : ctx_r0.paginationConfig.id)("startsWithOptions", ctx_r0.startsWithOptions)("type", ctx_r0.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (objects_r3 == null ? null : objects_r3.hasSucceeded) && !(objects_r3 == null ? null : objects_r3.isLoading) && (objects_r3 == null ? null : objects_r3.payload == null ? null : objects_r3.payload.page.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !objects_r3 || (objects_r3 == null ? null : objects_r3.isLoading));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", objects_r3 == null ? null : objects_r3.hasFailed);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !(objects_r3 == null ? null : objects_r3.isLoading) && (objects_r3 == null ? null : objects_r3.payload == null ? null : objects_r3.payload.page.length) === 0);
  }
}
class BrowseByComponent extends _app_shared_browse_by_browse_by_component__WEBPACK_IMPORTED_MODULE_6__.BrowseByComponent {
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵBrowseByComponent_BaseFactory;
      return function BrowseByComponent_Factory(t) {
        return (ɵBrowseByComponent_BaseFactory || (ɵBrowseByComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetInheritedFactory"](BrowseByComponent)))(t || BrowseByComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
      type: BrowseByComponent,
      selectors: [["ds-themed-browse-by"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 3,
      consts: [[4, "ngVar"], [4, "ngIf"], [3, "paginationId", "startsWithOptions", "type"], [3, "message", 4, "ngIf"], ["class", "mb-2 reset", 4, "ngIf"], [3, "prev", "next", "config", "sortConfig", "showPaginator", "objects"], [1, "mb-2", "reset"], [3, "back", "buttonLabel"], [3, "message"], ["class", "d-inline-block mb-4 reset", 4, "ngIf"], ["role", "alert", 1, "alert", "alert-info", "w-100"], [1, "d-inline-block", "mb-4", "reset"]],
      template: function BrowseByComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, BrowseByComponent_ng_container_0_Template, 7, 8, "ng-container", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "async");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngVar", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 1, ctx.objects$));
        }
      },
      dependencies: [src_app_shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_4__.VarDirective, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, src_app_shared_results_back_button_themed_results_back_button_component__WEBPACK_IMPORTED_MODULE_3__.ThemedResultsBackButtonComponent, src_app_shared_object_collection_object_collection_component__WEBPACK_IMPORTED_MODULE_2__.ObjectCollectionComponent, src_app_shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_1__.ThemedLoadingComponent, src_app_shared_error_error_component__WEBPACK_IMPORTED_MODULE_0__.ErrorComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe, _app_shared_starts_with_starts_with_loader_component__WEBPACK_IMPORTED_MODULE_7__.StartsWithLoaderComponent],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]::after {\n  display: none;\n}\n\n[_nghost-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  padding-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJyb3dzZS1ieS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBO0VBQ0UsYUFBQTtBQUNGOztBQUNBO0VBQ0Usa0JBQUE7QUFFRiIsImZpbGUiOiJicm93c2UtYnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqL1xuOmhvc3QgLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuOmhvc3QgLmRyb3Bkb3duLWl0ZW0ge1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2Jyb3dzZS1ieS9icm93c2UtYnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQTtFQUNFLGFBQUE7QUFDRjs7QUFDQTtFQUNFLGtCQUFBO0FBRUY7QUFDQSx3dkJBQXd2QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovXG46aG9zdCAuZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG46aG9zdCAuZHJvcGRvd24taXRlbSB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"],
      data: {
        animation: [_app_shared_animations_fade__WEBPACK_IMPORTED_MODULE_5__.fadeIn, _app_shared_animations_fade__WEBPACK_IMPORTED_MODULE_5__.fadeInOut]
      }
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_themes_custom_app_shared_browse-by_browse-by_component_ts.js.map