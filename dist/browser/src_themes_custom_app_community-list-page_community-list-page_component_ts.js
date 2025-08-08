"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_themes_custom_app_community-list-page_community-list-page_component_ts"],{

/***/ 9783:
/*!************************************************************************************!*\
  !*** ./src/themes/custom/app/community-list-page/community-list-page.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CommunityListPageComponent: () => (/* binding */ CommunityListPageComponent)
/* harmony export */ });
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var _app_community_list_page_community_list_themed_community_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../app/community-list-page/community-list/themed-community-list.component */ 30737);
/* harmony import */ var _app_community_list_page_community_list_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../app/community-list-page/community-list-page.component */ 41456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);





/**
 * Page with title and the community list tree, as described in community-list.component;
 * navigated to with community-list.page.routing.module
 */
class CommunityListPageComponent extends _app_community_list_page_community_list_page_component__WEBPACK_IMPORTED_MODULE_1__.CommunityListPageComponent {
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵCommunityListPageComponent_BaseFactory;
      return function CommunityListPageComponent_Factory(t) {
        return (ɵCommunityListPageComponent_BaseFactory || (ɵCommunityListPageComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](CommunityListPageComponent)))(t || CommunityListPageComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: CommunityListPageComponent,
      selectors: [["ds-themed-community-list-page"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 5,
      vars: 3,
      consts: [[1, "container"]],
      template: function CommunityListPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "ds-community-list");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 1, "communityList.title"));
        }
      },
      dependencies: [_app_community_list_page_community_list_themed_community_list_component__WEBPACK_IMPORTED_MODULE_0__.ThemedCommunityListComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe],
      encapsulation: 2
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_themes_custom_app_community-list-page_community-list-page_component_ts.js.map