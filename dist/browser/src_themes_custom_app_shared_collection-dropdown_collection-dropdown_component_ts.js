"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_themes_custom_app_shared_collection-dropdown_collection-dropdown_component_ts"],{

/***/ 15733:
/*!*******************************************************************************************!*\
  !*** ./src/themes/custom/app/shared/collection-dropdown/collection-dropdown.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CollectionDropdownComponent: () => (/* binding */ CollectionDropdownComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 56106);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-infinite-scroll */ 21001);
/* harmony import */ var _app_shared_collection_dropdown_collection_dropdown_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../app/shared/collection-dropdown/collection-dropdown.component */ 14860);
/* harmony import */ var _app_shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../app/shared/loading/themed-loading.component */ 82394);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);










function CollectionDropdownComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6)(1, "input", 7, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CollectionDropdownComponent_div_0_Template_input_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 2, "submission.sections.general.search-collection"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r1.searchField);
  }
}
function CollectionDropdownComponent_li_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "submission.sections.general.no-collection"), " ");
  }
}
function CollectionDropdownComponent_ng_container_5_li_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r5.name, " ");
  }
}
function CollectionDropdownComponent_ng_container_5_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CollectionDropdownComponent_ng_container_5_li_1_Template_li_click_0_listener() {
      const listItem_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.onSelect(listItem_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CollectionDropdownComponent_ng_container_5_li_1_div_2_Template, 3, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const listItem_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("title", listItem_r4.collection.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", listItem_r4.communities);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](listItem_r4.collection.name);
  }
}
function CollectionDropdownComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CollectionDropdownComponent_ng_container_5_li_1_Template, 5, 3, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.searchListCollection);
  }
}
function CollectionDropdownComponent_li_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li")(1, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "ds-loading", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("message", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 1, "loading.default"));
  }
}
class CollectionDropdownComponent extends _app_shared_collection_dropdown_collection_dropdown_component__WEBPACK_IMPORTED_MODULE_0__.CollectionDropdownComponent {
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵCollectionDropdownComponent_BaseFactory;
      return function CollectionDropdownComponent_Factory(t) {
        return (ɵCollectionDropdownComponent_BaseFactory || (ɵCollectionDropdownComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](CollectionDropdownComponent)))(t || CollectionDropdownComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: CollectionDropdownComponent,
      selectors: [["ds-themed-collection-dropdown"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 8,
      vars: 13,
      consts: [["searchFieldEl", ""], ["class", "form-group w-100 pr-2 pl-2 my-2", 4, "ngIf"], [1, "dropdown-divider", "m-0"], ["role", "menu", "infiniteScroll", "", 1, "scrollable-menu", "p-0", "m-0", 3, "scroll", "scrolled", "infiniteScrollDistance", "infiniteScrollThrottle", "infiniteScrollUpDistance", "fromRoot", "scrollWindow"], ["class", "dropdown-item disabled", "role", "menuitem", 4, "ngIf"], [4, "ngIf"], [1, "form-group", "w-100", "pr-2", "pl-2", "my-2"], ["type", "search", 1, "form-control", "w-100", 3, "click", "placeholder", "formControl"], ["role", "menuitem", 1, "dropdown-item", "disabled"], ["class", "dropdown-item collection-item", "role", "menuitem", 3, "title", "click", 4, "ngFor", "ngForOf"], ["role", "menuitem", 1, "dropdown-item", "collection-item", 3, "click", "title"], [1, "list-unstyled", "mb-0"], ["class", "list-item text-truncate text-secondary", 4, "ngFor", "ngForOf"], [1, "list-item", "text-truncate", "text-primary", "font-weight-bold"], [1, "list-item", "text-truncate", "text-secondary"], ["aria-hidden", "true", 1, "fa", "fa-level-down"], [1, "dropdown-item", "disabled"], [3, "message"]],
      template: function CollectionDropdownComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, CollectionDropdownComponent_div_0_Template, 4, 4, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ul", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("scroll", function CollectionDropdownComponent_Template_ul_scroll_2_listener($event) {
            return ctx.onScroll($event);
          })("scrolled", function CollectionDropdownComponent_Template_ul_scrolled_2_listener() {
            return ctx.onScrollDown();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, CollectionDropdownComponent_li_3_Template, 3, 3, "li", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, CollectionDropdownComponent_ng_container_5_Template, 2, 1, "ng-container", 5)(6, CollectionDropdownComponent_li_6_Template, 4, 3, "li", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.searchField);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("infiniteScrollDistance", 1.5)("infiniteScrollThrottle", 0)("infiniteScrollUpDistance", 1.5)("fromRoot", true)("scrollWindow", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.searchListCollection == null ? null : ctx.searchListCollection.length) === 0 && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 9, ctx.isLoading) !== true);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.searchListCollection == null ? null : ctx.searchListCollection.length) > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 11, ctx.isLoading));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlDirective, ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_5__.InfiniteScrollModule, ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_5__.InfiniteScrollDirective, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgFor, _app_shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_1__.ThemedLoadingComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n.scrollable-menu[_ngcontent-%COMP%] {\n  height: auto;\n  max-height: var(--ds-dropdown-menu-max-height);\n  overflow-x: hidden;\n}\n\nli[_ngcontent-%COMP%]:not(:last-of-type), .dropdown-divider[_ngcontent-%COMP%] {\n  border-top: none;\n  border-bottom: var(--bs-dropdown-border-width) solid var(--bs-dropdown-border-color);\n}\n\n#collectionControlsDropdownMenu[_ngcontent-%COMP%] {\n  outline: 0;\n  left: 0 !important;\n  box-shadow: var(--bs-btn-focus-box-shadow);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGxlY3Rpb24tZHJvcGRvd24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQTtFQUNFLFlBQUE7RUFDQSw4Q0FBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxnQkFBQTtFQUNBLG9GQUFBO0FBRUY7O0FBQUE7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQ0FBQTtBQUdGIiwiZmlsZSI6ImNvbGxlY3Rpb24tZHJvcGRvd24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqL1xuLnNjcm9sbGFibGUtbWVudSB7XG4gIGhlaWdodDogYXV0bztcbiAgbWF4LWhlaWdodDogdmFyKC0tZHMtZHJvcGRvd24tbWVudS1tYXgtaGVpZ2h0KTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxubGk6bm90KDpsYXN0LW9mLXR5cGUpLCAuZHJvcGRvd24tZGl2aWRlciB7XG4gIGJvcmRlci10b3A6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IHZhcigtLWJzLWRyb3Bkb3duLWJvcmRlci13aWR0aCkgc29saWQgdmFyKC0tYnMtZHJvcGRvd24tYm9yZGVyLWNvbG9yKTtcbn1cbiNjb2xsZWN0aW9uQ29udHJvbHNEcm9wZG93bk1lbnUge1xuICBvdXRsaW5lOiAwO1xuICBsZWZ0OiAwICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IHZhcigtLWJzLWJ0bi1mb2N1cy1ib3gtc2hhZG93KTtcbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbGxlY3Rpb24tZHJvcGRvd24vY29sbGVjdGlvbi1kcm9wZG93bi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBO0VBQ0UsWUFBQTtFQUNBLDhDQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFDQTtFQUNFLGdCQUFBO0VBQ0Esb0ZBQUE7QUFFRjs7QUFBQTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLDBDQUFBO0FBR0Y7QUFDQSw0dkNBQTR2QyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovXG4uc2Nyb2xsYWJsZS1tZW51IHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXgtaGVpZ2h0OiB2YXIoLS1kcy1kcm9wZG93bi1tZW51LW1heC1oZWlnaHQpO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5saTpub3QoOmxhc3Qtb2YtdHlwZSksIC5kcm9wZG93bi1kaXZpZGVyIHtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogdmFyKC0tYnMtZHJvcGRvd24tYm9yZGVyLXdpZHRoKSBzb2xpZCB2YXIoLS1icy1kcm9wZG93bi1ib3JkZXItY29sb3IpO1xufVxuI2NvbGxlY3Rpb25Db250cm9sc0Ryb3Bkb3duTWVudSB7XG4gIG91dGxpbmU6IDA7XG4gIGxlZnQ6IDAgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogdmFyKC0tYnMtYnRuLWZvY3VzLWJveC1zaGFkb3cpO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_themes_custom_app_shared_collection-dropdown_collection-dropdown_component_ts.js.map