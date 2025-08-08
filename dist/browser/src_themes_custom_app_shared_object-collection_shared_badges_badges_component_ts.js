"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_themes_custom_app_shared_object-collection_shared_badges_badges_component_ts"],{

/***/ 67830:
/*!******************************************************************************************!*\
  !*** ./src/themes/custom/app/shared/object-collection/shared/badges/badges.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BadgesComponent: () => (/* binding */ BadgesComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var src_app_shared_object_collection_shared_badges_badges_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/object-collection/shared/badges/badges.component */ 22285);
/* harmony import */ var _app_shared_object_collection_shared_badges_access_status_badge_themed_access_status_badge_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../app/shared/object-collection/shared/badges/access-status-badge/themed-access-status-badge.component */ 34272);
/* harmony import */ var _app_shared_object_collection_shared_badges_my_dspace_status_badge_themed_my_dspace_status_badge_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../app/shared/object-collection/shared/badges/my-dspace-status-badge/themed-my-dspace-status-badge.component */ 38968);
/* harmony import */ var _app_shared_object_collection_shared_badges_status_badge_themed_status_badge_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../app/shared/object-collection/shared/badges/status-badge/themed-status-badge.component */ 13760);
/* harmony import */ var _app_shared_object_collection_shared_badges_type_badge_themed_type_badge_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../app/shared/object-collection/shared/badges/type-badge/themed-type-badge.component */ 74448);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 90310);







function BadgesComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "ds-my-dspace-status-badge", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("context", ctx_r0.context);
  }
}
function BadgesComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "ds-access-status-badge", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("object", ctx_r0.object);
  }
}
class BadgesComponent extends src_app_shared_object_collection_shared_badges_badges_component__WEBPACK_IMPORTED_MODULE_0__.BadgesComponent {
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵBadgesComponent_BaseFactory;
      return function BadgesComponent_Factory(t) {
        return (ɵBadgesComponent_BaseFactory || (ɵBadgesComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetInheritedFactory"](BadgesComponent)))(t || BadgesComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: BadgesComponent,
      selectors: [["ds-themed-badges"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵStandaloneFeature"]],
      decls: 5,
      vars: 4,
      consts: [[3, "object"], [4, "ngIf"], [1, "pr-1", 3, "object"], [3, "context"]],
      template: function BadgesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "ds-status-badge", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, BadgesComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "ds-type-badge", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, BadgesComponent_ng_container_4_Template, 2, 1, "ng-container", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("object", ctx.object);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isMyDSpaceStatus);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("object", ctx.object);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showAccessStatus);
        }
      },
      dependencies: [_app_shared_object_collection_shared_badges_status_badge_themed_status_badge_component__WEBPACK_IMPORTED_MODULE_3__.ThemedStatusBadgeComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _app_shared_object_collection_shared_badges_my_dspace_status_badge_themed_my_dspace_status_badge_component__WEBPACK_IMPORTED_MODULE_2__.ThemedMyDSpaceStatusBadgeComponent, _app_shared_object_collection_shared_badges_type_badge_themed_type_badge_component__WEBPACK_IMPORTED_MODULE_4__.ThemedTypeBadgeComponent, _app_shared_object_collection_shared_badges_access_status_badge_themed_access_status_badge_component__WEBPACK_IMPORTED_MODULE_1__.ThemedAccessStatusBadgeComponent],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhZGdlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQSIsImZpbGUiOiJiYWRnZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqLyJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL29iamVjdC1jb2xsZWN0aW9uL3NoYXJlZC9iYWRnZXMvYmFkZ2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBO0FBQ0EsZ2pCQUFnakIiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqLyJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_themes_custom_app_shared_object-collection_shared_badges_badges_component_ts.js.map