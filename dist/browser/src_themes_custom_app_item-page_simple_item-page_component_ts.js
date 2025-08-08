"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_themes_custom_app_item-page_simple_item-page_component_ts"],{

/***/ 37078:
/*!***********************************************************************!*\
  !*** ./src/themes/custom/app/item-page/simple/item-page.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ItemPageComponent: () => (/* binding */ ItemPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var _app_item_page_alerts_themed_item_alerts_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../app/item-page/alerts/themed-item-alerts.component */ 9130);
/* harmony import */ var _app_item_page_simple_item_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../app/item-page/simple/item-page.component */ 91459);
/* harmony import */ var _app_item_page_simple_notify_requests_status_notify_requests_status_component_notify_requests_status_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../app/item-page/simple/notify-requests-status/notify-requests-status-component/notify-requests-status.component */ 36359);
/* harmony import */ var _app_item_page_simple_qa_event_notification_qa_event_notification_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../app/item-page/simple/qa-event-notification/qa-event-notification.component */ 2613);
/* harmony import */ var _app_item_page_versions_item_versions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../app/item-page/versions/item-versions.component */ 10466);
/* harmony import */ var _app_item_page_versions_notice_item_versions_notice_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../app/item-page/versions/notice/item-versions-notice.component */ 80502);
/* harmony import */ var _app_shared_animations_fade__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../app/shared/animations/fade */ 50332);
/* harmony import */ var _app_shared_error_error_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../app/shared/error/error.component */ 79632);
/* harmony import */ var _app_shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../app/shared/loading/themed-loading.component */ 82394);
/* harmony import */ var _app_shared_object_collection_shared_listable_object_listable_object_component_loader_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../app/shared/object-collection/shared/listable-object/listable-object-component-loader.component */ 17191);
/* harmony import */ var _app_shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../app/shared/utils/var.directive */ 18226);
/* harmony import */ var _app_statistics_angulartics_dspace_view_tracker_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../app/statistics/angulartics/dspace/view-tracker.component */ 57850);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 90310);
















function ItemPageComponent_div_0_div_1_div_1_ds_listable_object_component_loader_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "ds-listable-object-component-loader", 11);
  }
  if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().ngIf;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("object", item_r1)("viewMode", ctx_r1.viewMode);
  }
}
function ItemPageComponent_div_0_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "ds-item-alerts", 6)(2, "ds-qa-event-notification", 6)(3, "ds-notify-requests-status", 7)(4, "ds-item-versions-notice", 6)(5, "ds-view-tracker", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](6, ItemPageComponent_div_0_div_1_div_1_ds_listable_object_component_loader_6_Template, 1, 2, "ds-listable-object-component-loader", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](8, "ds-item-versions", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r1 = ctx.ngIf;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("item", item_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("item", item_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("itemUuid", item_r1.uuid);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("item", item_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("object", item_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !item_r1.isWithdrawn || _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](7, 8, ctx_r1.isAdmin$));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("item", item_r1)("displayActions", false);
  }
}
function ItemPageComponent_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, ItemPageComponent_div_0_div_1_div_1_Template, 9, 10, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const itemRD_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().ngVar;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("@fadeInOut", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", itemRD_r3 == null ? null : itemRD_r3.payload);
  }
}
function ItemPageComponent_div_0_ds_error_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "ds-error", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("message", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](1, 1, "error.item"));
  }
}
function ItemPageComponent_div_0_ds_loading_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "ds-loading", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("message", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](1, 1, "loading.item"));
  }
}
function ItemPageComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, ItemPageComponent_div_0_div_1_Template, 2, 2, "div", 2)(2, ItemPageComponent_div_0_ds_error_2_Template, 2, 3, "ds-error", 3)(3, ItemPageComponent_div_0_ds_loading_3_Template, 2, 3, "ds-loading", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const itemRD_r3 = ctx.ngVar;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", itemRD_r3 == null ? null : itemRD_r3.hasSucceeded);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", itemRD_r3 == null ? null : itemRD_r3.hasFailed);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", itemRD_r3 == null ? null : itemRD_r3.isLoading);
  }
}
/**
 * This component renders a simple item page.
 * The route parameter 'id' is used to request the item it represents.
 * All fields of the item that should be displayed, are defined in its template.
 */
class ItemPageComponent extends _app_item_page_simple_item_page_component__WEBPACK_IMPORTED_MODULE_1__.ItemPageComponent {
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵItemPageComponent_BaseFactory;
      return function ItemPageComponent_Factory(t) {
        return (ɵItemPageComponent_BaseFactory || (ɵItemPageComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetInheritedFactory"](ItemPageComponent)))(t || ItemPageComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
      type: ItemPageComponent,
      selectors: [["ds-themed-item-page"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 3,
      consts: [["class", "container", 4, "ngVar"], [1, "container"], ["class", "item-page", 4, "ngIf"], [3, "message", 4, "ngIf"], [1, "item-page"], [4, "ngIf"], [3, "item"], [3, "itemUuid"], [3, "object"], [3, "object", "viewMode", 4, "ngIf"], [1, "mt-2", 3, "item", "displayActions"], [3, "object", "viewMode"], [3, "message"]],
      template: function ItemPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](0, ItemPageComponent_div_0_Template, 4, 3, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](1, "async");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngVar", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](1, 1, ctx.itemRD$));
        }
      },
      dependencies: [_app_shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_10__.VarDirective, _app_item_page_alerts_themed_item_alerts_component__WEBPACK_IMPORTED_MODULE_0__.ThemedItemAlertsComponent, _app_item_page_versions_notice_item_versions_notice_component__WEBPACK_IMPORTED_MODULE_5__.ItemVersionsNoticeComponent, _app_statistics_angulartics_dspace_view_tracker_component__WEBPACK_IMPORTED_MODULE_11__.ViewTrackerComponent, _app_shared_object_collection_shared_listable_object_listable_object_component_loader_component__WEBPACK_IMPORTED_MODULE_9__.ListableObjectComponentLoaderComponent, _app_item_page_versions_item_versions_component__WEBPACK_IMPORTED_MODULE_4__.ItemVersionsComponent, _app_shared_error_error_component__WEBPACK_IMPORTED_MODULE_7__.ErrorComponent, _app_shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_8__.ThemedLoadingComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_14__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _app_item_page_simple_notify_requests_status_notify_requests_status_component_notify_requests_status_component__WEBPACK_IMPORTED_MODULE_2__.NotifyRequestsStatusComponent, _app_item_page_simple_qa_event_notification_qa_event_notification_component__WEBPACK_IMPORTED_MODULE_3__.QaEventNotificationComponent],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n@media (max-width: 991.98px) {\n  .container[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW0tcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBO0VBQ0U7SUFDRSxXQUFBO0lBQ0EsZUFBQTtFQUNGO0FBQ0YiLCJmaWxlIjoiaXRlbS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTEuOThweCkge1xuICAuY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IG5vbmU7XG4gIH1cbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaXRlbS1wYWdlL3NpbXBsZS9pdGVtLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQTtFQUNFO0lBQ0UsV0FBQTtJQUNBLGVBQUE7RUFDRjtBQUNGO0FBQ0EsNHVCQUE0dUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogbm9uZTtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0= */"],
      data: {
        animation: [_app_shared_animations_fade__WEBPACK_IMPORTED_MODULE_6__.fadeInOut]
      },
      changeDetection: 0
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_themes_custom_app_item-page_simple_item-page_component_ts.js.map