"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_themes_custom_app_shared_object-list_object-list_component_ts"],{

/***/ 16625:
/*!***************************************************************************!*\
  !*** ./src/themes/custom/app/shared/object-list/object-list.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ObjectListComponent: () => (/* binding */ ObjectListComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _app_shared_object_collection_shared_importable_list_item_control_importable_list_item_control_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../app/shared/object-collection/shared/importable-list-item-control/importable-list-item-control.component */ 88261);
/* harmony import */ var _app_shared_object_collection_shared_listable_object_listable_object_component_loader_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../app/shared/object-collection/shared/listable-object/listable-object-component-loader.component */ 17191);
/* harmony import */ var _app_shared_object_collection_shared_selectable_list_item_control_selectable_list_item_control_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../app/shared/object-collection/shared/selectable-list-item-control/selectable-list-item-control.component */ 35323);
/* harmony import */ var _app_shared_object_list_object_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../app/shared/object-list/object-list.component */ 52304);
/* harmony import */ var _app_shared_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../app/shared/pagination/pagination.component */ 40590);
/* harmony import */ var _app_shared_utils_browser_only_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../app/shared/utils/browser-only.pipe */ 75465);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 90310);








const _c0 = a0 => ({
  "ml-4": a0
});
function ObjectListComponent_ul_1_li_1_ds_selectable_list_item_control_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ds-selectable-list-item-control", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("deselectObject", function ObjectListComponent_ul_1_li_1_ds_selectable_list_item_control_2_Template_ds_selectable_list_item_control_deselectObject_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.deselectObject.emit($event));
    })("selectObject", function ObjectListComponent_ul_1_li_1_ds_selectable_list_item_control_2_Template_ds_selectable_list_item_control_selectObject_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.selectObject.emit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    const object_r5 = ctx_r3.$implicit;
    const i_r6 = ctx_r3.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("index", i_r6)("object", object_r5)("selectionConfig", ctx_r2.selectionConfig);
  }
}
function ObjectListComponent_ul_1_li_1_ds_importable_list_item_control_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ds-importable-list-item-control", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("importObject", function ObjectListComponent_ul_1_li_1_ds_importable_list_item_control_3_Template_ds_importable_list_item_control_importObject_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.importObject.emit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const object_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("object", object_r5)("importConfig", ctx_r2.importConfig);
  }
}
function ObjectListComponent_ul_1_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "dsBrowserOnly");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ObjectListComponent_ul_1_li_1_ds_selectable_list_item_control_2_Template, 1, 3, "ds-selectable-list-item-control", 5)(3, ObjectListComponent_ul_1_li_1_ds_importable_list_item_control_3_Template, 1, 2, "ds-importable-list-item-control", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "ds-listable-object-component-loader", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("contentChange", function ObjectListComponent_ul_1_li_1_Template_ds_listable_object_component_loader_contentChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.contentChange.emit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const object_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const last_r8 = ctx.last;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("border-bottom", ctx_r2.hasBorder && !last_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-test", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 11, "list-object"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.selectable);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.importable);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("object", object_r5)("viewMode", ctx_r2.viewMode)("index", i_r6)("context", ctx_r2.context)("linkType", ctx_r2.linkType)("listID", ctx_r2.selectionConfig == null ? null : ctx_r2.selectionConfig.listId);
  }
}
function ObjectListComponent_ul_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ul", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ObjectListComponent_ul_1_li_1_Template, 5, 13, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](2, _c0, ctx_r2.selectable));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.objects == null ? null : ctx_r2.objects.payload == null ? null : ctx_r2.objects.payload.page);
  }
}
/**
 * A component to display the "Browse By" section of a Community or Collection page
 * It expects the ID of the Community or Collection as input to be passed on as a scope
 */
class ObjectListComponent extends _app_shared_object_list_object_list_component__WEBPACK_IMPORTED_MODULE_3__.ObjectListComponent {
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵObjectListComponent_BaseFactory;
      return function ObjectListComponent_Factory(t) {
        return (ɵObjectListComponent_BaseFactory || (ɵObjectListComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetInheritedFactory"](ObjectListComponent)))(t || ObjectListComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: ObjectListComponent,
      selectors: [["ds-themed-object-list"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 9,
      consts: [[3, "pageChange", "pageSizeChange", "sortDirectionChange", "sortFieldChange", "paginationChange", "prev", "next", "paginationOptions", "collectionSize", "objects", "sortOptions", "hideGear", "hidePagerWhenSinglePage", "hidePaginationDetail", "showPaginator"], ["class", "list-unstyled", "data-test", "objects", 3, "ngClass", 4, "ngIf"], ["data-test", "objects", 1, "list-unstyled", 3, "ngClass"], ["class", "mt-4 mb-4 d-flex", 3, "border-bottom", 4, "ngFor", "ngForOf"], [1, "mt-4", "mb-4", "d-flex"], [3, "index", "object", "selectionConfig", "deselectObject", "selectObject", 4, "ngIf"], [3, "object", "importConfig", "importObject", 4, "ngIf"], [3, "contentChange", "object", "viewMode", "index", "context", "linkType", "listID"], [3, "deselectObject", "selectObject", "index", "object", "selectionConfig"], [3, "importObject", "object", "importConfig"]],
      template: function ObjectListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ds-pagination", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("pageChange", function ObjectListComponent_Template_ds_pagination_pageChange_0_listener($event) {
            return ctx.onPageChange($event);
          })("pageSizeChange", function ObjectListComponent_Template_ds_pagination_pageSizeChange_0_listener($event) {
            return ctx.onPageSizeChange($event);
          })("sortDirectionChange", function ObjectListComponent_Template_ds_pagination_sortDirectionChange_0_listener($event) {
            return ctx.onSortDirectionChange($event);
          })("sortFieldChange", function ObjectListComponent_Template_ds_pagination_sortFieldChange_0_listener($event) {
            return ctx.onSortFieldChange($event);
          })("paginationChange", function ObjectListComponent_Template_ds_pagination_paginationChange_0_listener($event) {
            return ctx.onPaginationChange($event);
          })("prev", function ObjectListComponent_Template_ds_pagination_prev_0_listener() {
            return ctx.goPrev();
          })("next", function ObjectListComponent_Template_ds_pagination_next_0_listener() {
            return ctx.goNext();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ObjectListComponent_ul_1_Template, 2, 4, "ul", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("paginationOptions", ctx.config)("collectionSize", ctx.objects == null ? null : ctx.objects.payload == null ? null : ctx.objects.payload.totalElements)("objects", ctx.objects)("sortOptions", ctx.sortConfig)("hideGear", ctx.hideGear)("hidePagerWhenSinglePage", ctx.hidePagerWhenSinglePage)("hidePaginationDetail", ctx.hidePaginationDetail)("showPaginator", ctx.showPaginator);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.objects == null ? null : ctx.objects.hasSucceeded);
        }
      },
      dependencies: [_app_shared_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_4__.PaginationComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgFor, _app_shared_object_collection_shared_selectable_list_item_control_selectable_list_item_control_component__WEBPACK_IMPORTED_MODULE_2__.SelectableListItemControlComponent, _app_shared_object_collection_shared_importable_list_item_control_importable_list_item_control_component__WEBPACK_IMPORTED_MODULE_0__.ImportableListItemControlComponent, _app_shared_object_collection_shared_listable_object_listable_object_component_loader_component__WEBPACK_IMPORTED_MODULE_1__.ListableObjectComponentLoaderComponent, _app_shared_utils_browser_only_pipe__WEBPACK_IMPORTED_MODULE_5__.BrowserOnlyPipe],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\nds-selectable-list-item-control[_ngcontent-%COMP%] {\n  z-index: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9iamVjdC1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBO0FBQ0E7RUFDRSxVQUFBO0FBQ0YiLCJmaWxlIjoib2JqZWN0LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqL1xuZHMtc2VsZWN0YWJsZS1saXN0LWl0ZW0tY29udHJvbCB7XG4gIHotaW5kZXg6IDE7XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL29iamVjdC1saXN0L29iamVjdC1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBO0FBQ0E7RUFDRSxVQUFBO0FBQ0Y7QUFDQSw0cEJBQTRwQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovXG5kcy1zZWxlY3RhYmxlLWxpc3QtaXRlbS1jb250cm9sIHtcbiAgei1pbmRleDogMTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_themes_custom_app_shared_object-list_object-list_component_ts.js.map