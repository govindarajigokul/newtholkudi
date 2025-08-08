"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_themes_custom_app_shared_object-collection_shared_badges_access-status-badge_access-statu-f5960a"],{

/***/ 16953:
/*!***************************************************************************************************************************!*\
  !*** ./src/themes/custom/app/shared/object-collection/shared/badges/access-status-badge/access-status-badge.component.ts ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccessStatusBadgeComponent: () => (/* binding */ AccessStatusBadgeComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var src_app_shared_object_collection_shared_badges_access_status_badge_access_status_badge_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/object-collection/shared/badges/access-status-badge/access-status-badge.component */ 67604);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 90310);





function AccessStatusBadgeComponent_ng_container_0_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span")(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const accessStatus_r1 = ctx.ngIf;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"]("badge badge-secondary access-status-list-element-badge " + ctx_r1.accessStatusClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 3, accessStatus_r1));
  }
}
function AccessStatusBadgeComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AccessStatusBadgeComponent_ng_container_0_span_1_Template, 4, 5, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, ctx_r1.accessStatus$));
  }
}
class AccessStatusBadgeComponent extends src_app_shared_object_collection_shared_badges_access_status_badge_access_status_badge_component__WEBPACK_IMPORTED_MODULE_0__.AccessStatusBadgeComponent {
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵAccessStatusBadgeComponent_BaseFactory;
      return function AccessStatusBadgeComponent_Factory(t) {
        return (ɵAccessStatusBadgeComponent_BaseFactory || (ɵAccessStatusBadgeComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](AccessStatusBadgeComponent)))(t || AccessStatusBadgeComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AccessStatusBadgeComponent,
      selectors: [["ds-themed-access-status-badge"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 1,
      vars: 1,
      consts: [[4, "ngIf"]],
      template: function AccessStatusBadgeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, AccessStatusBadgeComponent_ng_container_0_Template, 3, 3, "ng-container", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showAccessStatus);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe],
      encapsulation: 2
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_themes_custom_app_shared_object-collection_shared_badges_access-status-badge_access-statu-f5960a.js.map