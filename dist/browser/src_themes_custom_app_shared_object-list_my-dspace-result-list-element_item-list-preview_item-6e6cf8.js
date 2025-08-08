"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_themes_custom_app_shared_object-list_my-dspace-result-list-element_item-list-preview_item-6e6cf8"],{

/***/ 6455:
/*!*********************************************************************************************************************************!*\
  !*** ./src/themes/custom/app/shared/object-list/my-dspace-result-list-element/item-list-preview/item-list-preview.component.ts ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ItemListPreviewComponent: () => (/* binding */ ItemListPreviewComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var _app_shared_animations_fade__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../app/shared/animations/fade */ 50332);
/* harmony import */ var _app_shared_object_collection_shared_badges_themed_badges_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../app/shared/object-collection/shared/badges/themed-badges.component */ 55309);
/* harmony import */ var _app_shared_object_collection_shared_mydspace_item_collection_item_collection_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../app/shared/object-collection/shared/mydspace-item-collection/item-collection.component */ 47598);
/* harmony import */ var _app_shared_object_collection_shared_mydspace_item_submitter_item_submitter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../app/shared/object-collection/shared/mydspace-item-submitter/item-submitter.component */ 21546);
/* harmony import */ var _app_shared_object_list_my_dspace_result_list_element_item_list_preview_item_list_preview_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../app/shared/object-list/my-dspace-result-list-element/item-list-preview/item-list-preview.component */ 56577);
/* harmony import */ var _app_shared_truncatable_truncatable_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../app/shared/truncatable/truncatable.component */ 21308);
/* harmony import */ var _app_shared_truncatable_truncatable_part_truncatable_part_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../app/shared/truncatable/truncatable-part/truncatable-part.component */ 41100);
/* harmony import */ var _app_thumbnail_themed_thumbnail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../app/thumbnail/themed-thumbnail.component */ 97402);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 90310);












const _c0 = a0 => ({
  "lead": true,
  "text-muted": a0
});
const _c1 = () => ["dc.contributor.author", "dc.creator", "dc.contributor.*"];
const _c2 = a0 => ({
  "text-muted": a0
});
function ItemListPreviewComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "ds-thumbnail", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("thumbnail", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 2, ctx_r0.item == null ? null : ctx_r0.item.thumbnail))("limitWidth", true);
  }
}
function ItemListPreviewComponent_div_3_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "span", 19);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("innerHTML", ctx_r0.item.firstMetadataValue("dc.publisher") + ", ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeHtml"]);
  }
}
function ItemListPreviewComponent_div_3_span_13_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "mydspace.results.no-authors"));
  }
}
function ItemListPreviewComponent_div_3_span_13_span_2_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "; ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function ItemListPreviewComponent_div_3_span_13_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span")(1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, ItemListPreviewComponent_div_3_span_13_span_2_span_3_Template, 2, 0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const author_r2 = ctx.$implicit;
    const last_r3 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("innerHTML", author_r2, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("innerHTML", author_r2, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !last_r3);
  }
}
function ItemListPreviewComponent_div_3_span_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, ItemListPreviewComponent_div_3_span_13_span_1_Template, 3, 3, "span", 3)(2, ItemListPreviewComponent_div_3_span_13_span_2_Template, 4, 3, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.item.allMetadataValues(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](2, _c1)).length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r0.item.allMetadataValues(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](3, _c1)));
  }
}
function ItemListPreviewComponent_div_3_ds_item_submitter_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "ds-item-submitter", 18);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("object", ctx_r0.object.indexableObject);
  }
}
function ItemListPreviewComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "ds-badges", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "ds-truncatable", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "h2", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div")(6, "span", 10)(7, "ds-truncatable-part", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, " (");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, ItemListPreviewComponent_div_3_span_9_Template, 1, 1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](10, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](13, ItemListPreviewComponent_div_3_span_13_Template, 3, 4, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "ds-truncatable-part", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](15, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](17, ItemListPreviewComponent_div_3_ds_item_submitter_17_Template, 1, 1, "ds-item-submitter", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](18, "ds-item-collection", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("@fadeInOut", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("object", ctx_r0.item)("context", ctx_r0.badgeContext)("showAccessStatus", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("id", ctx_r0.item.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("innerHTML", ctx_r0.dsoTitle, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeHtml"])("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](22, _c0, !ctx_r0.item.firstMetadataValue("dc.title")));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("id", ctx_r0.item.id)("minLines", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.item.hasMetadata("dc.publisher"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("innerHTML", ctx_r0.item.firstMetadataValue("dc.date.issued") || _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](11, 18, "mydspace.results.no-date"), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.item.hasMetadata(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](24, _c1)));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("id", ctx_r0.item.id)("minLines", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](25, _c2, !ctx_r0.item.firstMetadataValue("dc.description.abstract")))("innerHTML", ctx_r0.item.firstMetadataValue("dc.description.abstract") || _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](16, 20, "mydspace.results.no-abstract"), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.showSubmitter);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("object", ctx_r0.object.indexableObject);
  }
}
class ItemListPreviewComponent extends _app_shared_object_list_my_dspace_result_list_element_item_list_preview_item_list_preview_component__WEBPACK_IMPORTED_MODULE_4__.ItemListPreviewComponent {
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵItemListPreviewComponent_BaseFactory;
      return function ItemListPreviewComponent_Factory(t) {
        return (ɵItemListPreviewComponent_BaseFactory || (ɵItemListPreviewComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetInheritedFactory"](ItemListPreviewComponent)))(t || ItemListPreviewComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
      type: ItemListPreviewComponent,
      selectors: [["ds-themed-item-list-preview"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵStandaloneFeature"]],
      decls: 4,
      vars: 3,
      consts: [[1, "row"], ["class", "col-3 col-md-2", 4, "ngIf"], [3, "ngClass"], [4, "ngIf"], [1, "col-3", "col-md-2"], [3, "thumbnail", "limitWidth"], [1, "d-flex"], [3, "object", "context", "showAccessStatus"], [3, "id"], [3, "innerHTML", "ngClass"], [1, "text-muted"], [3, "id", "minLines"], ["class", "item-list-publisher", 3, "innerHTML", 4, "ngIf"], [1, "item-list-date", 3, "innerHTML"], ["class", "item-list-authors", 4, "ngIf"], [1, "item-list-abstract", 3, "id", "minLines"], [3, "ngClass", "innerHTML"], [3, "object", 4, "ngIf"], [3, "object"], [1, "item-list-publisher", 3, "innerHTML"], [1, "item-list-authors"], [4, "ngFor", "ngForOf"], [3, "innerHTML"]],
      template: function ItemListPreviewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, ItemListPreviewComponent_div_1_Template, 3, 4, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, ItemListPreviewComponent_div_3_Template, 19, 27, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.showThumbnails);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", ctx.showThumbnails ? "col-9" : "col-md-12");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.item);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe, _app_shared_object_collection_shared_mydspace_item_collection_item_collection_component__WEBPACK_IMPORTED_MODULE_2__.ItemCollectionComponent, _app_shared_object_collection_shared_mydspace_item_submitter_item_submitter_component__WEBPACK_IMPORTED_MODULE_3__.ItemSubmitterComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgFor, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _app_shared_object_collection_shared_badges_themed_badges_component__WEBPACK_IMPORTED_MODULE_1__.ThemedBadgesComponent, _app_thumbnail_themed_thumbnail_component__WEBPACK_IMPORTED_MODULE_7__.ThemedThumbnailComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe, _app_shared_truncatable_truncatable_component__WEBPACK_IMPORTED_MODULE_5__.TruncatableComponent, _app_shared_truncatable_truncatable_part_truncatable_part_component__WEBPACK_IMPORTED_MODULE_6__.TruncatablePartComponent],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW0tbGlzdC1wcmV2aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBIiwiZmlsZSI6Iml0ZW0tbGlzdC1wcmV2aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi8iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL29iamVjdC1saXN0L215LWRzcGFjZS1yZXN1bHQtbGlzdC1lbGVtZW50L2l0ZW0tbGlzdC1wcmV2aWV3L2l0ZW0tbGlzdC1wcmV2aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBO0FBQ0EsNGtCQUE0a0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqLyJdLCJzb3VyY2VSb290IjoiIn0= */"],
      data: {
        animation: [_app_shared_animations_fade__WEBPACK_IMPORTED_MODULE_0__.fadeInOut]
      }
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_themes_custom_app_shared_object-list_my-dspace-result-list-element_item-list-preview_item-6e6cf8.js.map