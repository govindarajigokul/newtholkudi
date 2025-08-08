"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_themes_custom_app_item-page_full_full-item-page_component_ts"],{

/***/ 39325:
/*!**************************************************************************!*\
  !*** ./src/themes/custom/app/item-page/full/full-item-page.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FullItemPageComponent: () => (/* binding */ FullItemPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var _app_item_page_alerts_themed_item_alerts_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../app/item-page/alerts/themed-item-alerts.component */ 9130);
/* harmony import */ var _app_item_page_field_components_collections_collections_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../app/item-page/field-components/collections/collections.component */ 44616);
/* harmony import */ var _app_item_page_full_field_components_file_section_themed_full_file_section_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../app/item-page/full/field-components/file-section/themed-full-file-section.component */ 53996);
/* harmony import */ var _app_item_page_full_full_item_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../app/item-page/full/full-item-page.component */ 33242);
/* harmony import */ var _app_item_page_simple_field_components_specific_field_title_themed_item_page_field_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../app/item-page/simple/field-components/specific-field/title/themed-item-page-field.component */ 26077);
/* harmony import */ var _app_item_page_versions_item_versions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../app/item-page/versions/item-versions.component */ 10466);
/* harmony import */ var _app_item_page_versions_notice_item_versions_notice_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../app/item-page/versions/notice/item-versions-notice.component */ 80502);
/* harmony import */ var _app_shared_animations_fade__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../app/shared/animations/fade */ 50332);
/* harmony import */ var _app_shared_dso_page_dso_edit_menu_dso_edit_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../app/shared/dso-page/dso-edit-menu/dso-edit-menu.component */ 17807);
/* harmony import */ var _app_shared_error_error_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../app/shared/error/error.component */ 79632);
/* harmony import */ var _app_shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../app/shared/loading/themed-loading.component */ 82394);
/* harmony import */ var _app_shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../app/shared/utils/var.directive */ 18226);
/* harmony import */ var _app_statistics_angulartics_dspace_view_tracker_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../app/statistics/angulartics/dspace/view-tracker.component */ 57850);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 90310);


















const _c0 = a0 => [a0];
function FullItemPageComponent_div_0_div_1_div_1_div_4_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 18)(1, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](6, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 2, ctx_r0.itemPageRoute$)));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](4, 4, "item.page.link.simple"), " ");
  }
}
function FullItemPageComponent_div_0_div_1_div_1_div_4_ng_container_8_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const mdValue_r2 = ctx.$implicit;
    const mdEntry_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](mdEntry_r3.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](mdValue_r2.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](mdValue_r2.language);
  }
}
function FullItemPageComponent_div_0_div_1_div_1_div_4_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, FullItemPageComponent_div_0_div_1_div_1_div_4_ng_container_8_tr_1_Template, 7, 3, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const mdEntry_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", mdEntry_r3.value);
  }
}
function FullItemPageComponent_div_0_div_1_div_1_div_4_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 20)(1, "div", 21)(2, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FullItemPageComponent_div_0_div_1_div_1_div_4_div_14_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r4);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r0.back());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](3, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](5, 1, "item.page.return"), "");
  }
}
function FullItemPageComponent_div_0_div_1_div_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 9)(1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "ds-item-page-title-field", 11)(3, "ds-dso-edit-menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](4, FullItemPageComponent_div_0_div_1_div_1_div_4_div_4_Template, 5, 8, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "div", 13)(6, "table", 14)(7, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](8, FullItemPageComponent_div_0_div_1_div_1_div_4_ng_container_8_Template, 2, 1, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](10, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](11, "ds-item-page-full-file-section", 6)(12, "ds-item-page-collections", 6)(13, "ds-item-versions", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](14, FullItemPageComponent_div_0_div_1_div_1_div_4_div_14_Template, 6, 3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("item", item_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx_r0.fromSubmissionObject);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](10, 9, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](9, 7, ctx_r0.metadata$)));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("item", item_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("item", item_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("item", item_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r0.fromSubmissionObject);
  }
}
function FullItemPageComponent_div_0_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "ds-item-alerts", 6)(2, "ds-item-versions-notice", 6)(3, "ds-view-tracker", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](4, FullItemPageComponent_div_0_div_1_div_1_div_4_Template, 15, 11, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r5 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("item", item_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("item", item_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("object", item_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !item_r5.isWithdrawn || _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](5, 4, ctx_r0.isAdmin$));
  }
}
function FullItemPageComponent_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, FullItemPageComponent_div_0_div_1_div_1_Template, 6, 6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const itemRD_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().ngVar;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("@fadeInOut", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", itemRD_r6 == null ? null : itemRD_r6.payload);
  }
}
function FullItemPageComponent_div_0_ds_error_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "ds-error", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate"]("message", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](1, 1, "error.item"));
  }
}
function FullItemPageComponent_div_0_ds_loading_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "ds-loading", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate"]("message", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](1, 1, "loading.item"));
  }
}
function FullItemPageComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, FullItemPageComponent_div_0_div_1_Template, 2, 2, "div", 2)(2, FullItemPageComponent_div_0_ds_error_2_Template, 2, 3, "ds-error", 3)(3, FullItemPageComponent_div_0_ds_loading_3_Template, 2, 3, "ds-loading", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const itemRD_r6 = ctx.ngVar;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", itemRD_r6 == null ? null : itemRD_r6.hasSucceeded);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", itemRD_r6 == null ? null : itemRD_r6.hasFailed);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", itemRD_r6 == null ? null : itemRD_r6.isLoading);
  }
}
/**
 * This component renders a full item page.
 * The route parameter 'id' is used to request the item it represents.
 */
class FullItemPageComponent extends _app_item_page_full_full_item_page_component__WEBPACK_IMPORTED_MODULE_3__.FullItemPageComponent {
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵFullItemPageComponent_BaseFactory;
      return function FullItemPageComponent_Factory(t) {
        return (ɵFullItemPageComponent_BaseFactory || (ɵFullItemPageComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetInheritedFactory"](FullItemPageComponent)))(t || FullItemPageComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
      type: FullItemPageComponent,
      selectors: [["ds-themed-full-item-page"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 3,
      consts: [["class", "container", 4, "ngVar"], [1, "container"], ["class", "item-page", 4, "ngIf"], [3, "message", 4, "ngIf"], [1, "item-page"], [4, "ngIf"], [3, "item"], [3, "object"], ["class", "full-item-info", 4, "ngIf"], [1, "full-item-info"], [1, "d-flex", "flex-row"], [1, "mr-auto", 3, "item"], ["class", "simple-view-link my-3", 4, "ngIf"], [1, "table-responsive"], [1, "table", "table-striped"], [4, "ngFor", "ngForOf"], [1, "mt-2", 3, "item"], ["class", "button-row bottom", 4, "ngIf"], [1, "simple-view-link", "my-3"], [1, "btn", "btn-outline-primary", 3, "routerLink"], [1, "button-row", "bottom"], [1, "text-right"], [1, "btn", "btn-outline-secondary", "mr-1", 3, "click"], [1, "fas", "fa-arrow-left"], [3, "message"]],
      template: function FullItemPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](0, FullItemPageComponent_div_0_Template, 4, 3, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](1, "async");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngVar", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](1, 1, ctx.itemRD$));
        }
      },
      dependencies: [_app_shared_error_error_component__WEBPACK_IMPORTED_MODULE_9__.ErrorComponent, _app_shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_10__.ThemedLoadingComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslatePipe, _app_item_page_full_field_components_file_section_themed_full_file_section_component__WEBPACK_IMPORTED_MODULE_2__.ThemedFullFileSectionComponent, _app_item_page_field_components_collections_collections_component__WEBPACK_IMPORTED_MODULE_1__.CollectionsComponent, _app_item_page_versions_item_versions_component__WEBPACK_IMPORTED_MODULE_5__.ItemVersionsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_15__.KeyValuePipe, _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterLink, _app_item_page_simple_field_components_specific_field_title_themed_item_page_field_component__WEBPACK_IMPORTED_MODULE_4__.ThemedItemPageTitleFieldComponent, _app_shared_dso_page_dso_edit_menu_dso_edit_menu_component__WEBPACK_IMPORTED_MODULE_8__.DsoEditMenuComponent, _app_item_page_versions_notice_item_versions_notice_component__WEBPACK_IMPORTED_MODULE_6__.ItemVersionsNoticeComponent, _app_statistics_angulartics_dspace_view_tracker_component__WEBPACK_IMPORTED_MODULE_12__.ViewTrackerComponent, _app_item_page_alerts_themed_item_alerts_component__WEBPACK_IMPORTED_MODULE_0__.ThemedItemAlertsComponent, _app_shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_11__.VarDirective],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   div.simple-view-link[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n[_nghost-%COMP%]   div.simple-view-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  min-width: 25%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZ1bGwtaXRlbS1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBO0FBQ0E7RUFDRSxrQkFBQTtBQUNGOztBQUNBO0VBQ0UsY0FBQTtBQUVGIiwiZmlsZSI6ImZ1bGwtaXRlbS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi9cbjpob3N0IGRpdi5zaW1wbGUtdmlldy1saW5rIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuOmhvc3QgZGl2LnNpbXBsZS12aWV3LWxpbmsgYSB7XG4gIG1pbi13aWR0aDogMjUlO1xufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaXRlbS1wYWdlL2Z1bGwvZnVsbC1pdGVtLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxjQUFBO0FBRUY7QUFDQSxneEJBQWd4QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovXG46aG9zdCBkaXYuc2ltcGxlLXZpZXctbGluayB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbjpob3N0IGRpdi5zaW1wbGUtdmlldy1saW5rIGEge1xuICBtaW4td2lkdGg6IDI1JTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"],
      data: {
        animation: [_app_shared_animations_fade__WEBPACK_IMPORTED_MODULE_7__.fadeInOut]
      },
      changeDetection: 0
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_themes_custom_app_item-page_full_full-item-page_component_ts.js.map