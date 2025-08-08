"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_themes_custom_app_shared_object-collection_shared_badges_my-dspace-status-badge_my-dspace-ffcbf3"],{

/***/ 67635:
/*!*********************************************************************************************************************************!*\
  !*** ./src/themes/custom/app/shared/object-collection/shared/badges/my-dspace-status-badge/my-dspace-status-badge.component.ts ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MyDSpaceStatusBadgeComponent: () => (/* binding */ MyDSpaceStatusBadgeComponent)
/* harmony export */ });
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var src_app_shared_object_collection_shared_badges_my_dspace_status_badge_my_dspace_status_badge_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/object-collection/shared/badges/my-dspace-status-badge/my-dspace-status-badge.component */ 14430);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 90310);




class MyDSpaceStatusBadgeComponent extends src_app_shared_object_collection_shared_badges_my_dspace_status_badge_my_dspace_status_badge_component__WEBPACK_IMPORTED_MODULE_0__.MyDSpaceStatusBadgeComponent {
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵMyDSpaceStatusBadgeComponent_BaseFactory;
      return function MyDSpaceStatusBadgeComponent_Factory(t) {
        return (ɵMyDSpaceStatusBadgeComponent_BaseFactory || (ɵMyDSpaceStatusBadgeComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](MyDSpaceStatusBadgeComponent)))(t || MyDSpaceStatusBadgeComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: MyDSpaceStatusBadgeComponent,
      selectors: [["ds-themed-my-dspace-status-badge"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 4,
      vars: 4,
      consts: [[3, "className"]],
      template: function MyDSpaceStatusBadgeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "span", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("className", ctx.badgeClass);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 2, "mydspace.status." + ctx.badgeContent), " ");
        }
      },
      dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LWRzcGFjZS1zdGF0dXMtYmFkZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUEiLCJmaWxlIjoibXktZHNwYWNlLXN0YXR1cy1iYWRnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL29iamVjdC1jb2xsZWN0aW9uL3NoYXJlZC9iYWRnZXMvbXktZHNwYWNlLXN0YXR1cy1iYWRnZS9teS1kc3BhY2Utc3RhdHVzLWJhZGdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBO0FBQ0Esd2xCQUF3bEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqLyJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_themes_custom_app_shared_object-collection_shared_badges_my-dspace-status-badge_my-dspace-ffcbf3.js.map