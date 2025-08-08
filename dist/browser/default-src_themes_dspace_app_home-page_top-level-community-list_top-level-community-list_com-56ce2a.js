"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["default-src_themes_dspace_app_home-page_top-level-community-list_top-level-community-list_com-56ce2a"],{

/***/ 49076:
/*!********************************************************************************************************!*\
  !*** ./src/themes/dspace/app/home-page/top-level-community-list/top-level-community-list.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TopLevelCommunityListComponent: () => (/* binding */ TopLevelCommunityListComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var src_config_app_config_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/config/app-config.interface */ 82640);
/* harmony import */ var _app_home_page_top_level_community_list_top_level_community_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../app/home-page/top-level-community-list/top-level-community-list.component */ 45670);
/* harmony import */ var _app_core_data_community_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../app/core/data/community-data.service */ 46660);
/* harmony import */ var _app_core_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../app/core/pagination/pagination.service */ 76896);
/* harmony import */ var _app_shared_error_error_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../app/shared/error/error.component */ 79632);
/* harmony import */ var _app_shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../app/shared/loading/themed-loading.component */ 82394);
/* harmony import */ var _app_shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../app/shared/utils/var.directive */ 18226);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 14354);















function TopLevelCommunityListComponent_ng_container_0_div_1_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TopLevelCommunityListComponent_ng_container_0_div_1_button_7_Template_button_click_0_listener() {
      const community_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.navigateToCommunity(community_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const community_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("aria-label", "Browse " + community_r2.name + " content");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](community_r2.name);
  }
}
function TopLevelCommunityListComponent_ng_container_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "div", 3)(2, "h3", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 5)(6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, TopLevelCommunityListComponent_ng_container_0_div_1_button_7_Template, 3, 2, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const communitiesRD_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().ngVar;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](4, 2, "home.top-level-communities.head"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", communitiesRD_r4.payload.page);
  }
}
function TopLevelCommunityListComponent_ng_container_0_ds_error_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "ds-error", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("message", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 1, "error.top-level-communities"));
  }
}
function TopLevelCommunityListComponent_ng_container_0_ds_loading_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "ds-loading", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("message", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 1, "loading.top-level-communities"));
  }
}
function TopLevelCommunityListComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, TopLevelCommunityListComponent_ng_container_0_div_1_Template, 8, 4, "div", 1)(2, TopLevelCommunityListComponent_ng_container_0_ds_error_2_Template, 2, 3, "ds-error", 2)(3, TopLevelCommunityListComponent_ng_container_0_ds_loading_3_Template, 2, 3, "ds-loading", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const communitiesRD_r4 = ctx.ngVar;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", communitiesRD_r4 == null ? null : communitiesRD_r4.hasSucceeded);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", communitiesRD_r4 == null ? null : communitiesRD_r4.hasFailed);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", communitiesRD_r4 == null ? null : communitiesRD_r4.isLoading);
  }
}
class TopLevelCommunityListComponent extends _app_home_page_top_level_community_list_top_level_community_list_component__WEBPACK_IMPORTED_MODULE_1__.TopLevelCommunityListComponent {
  constructor(appConfig, cds, paginationService, router) {
    super(appConfig, cds, paginationService);
    this.router = router;
    // Override config to show all communities without pagination
    this.config.pageSize = 100; // Large number to show all
  }
  /**
   * Navigate to the community page
   */
  navigateToCommunity(community) {
    this.router.navigate(['/communities', community.uuid]);
  }
  static {
    this.ɵfac = function TopLevelCommunityListComponent_Factory(t) {
      return new (t || TopLevelCommunityListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_config_app_config_interface__WEBPACK_IMPORTED_MODULE_0__.APP_CONFIG), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_app_core_data_community_data_service__WEBPACK_IMPORTED_MODULE_2__.CommunityDataService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_app_core_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_3__.PaginationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: TopLevelCommunityListComponent,
      selectors: [["ds-top-level-community-list"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 3,
      consts: [[4, "ngVar"], [4, "ngIf"], [3, "message", 4, "ngIf"], [1, "tribal-archive-container"], [1, "tribal-archive-title"], [1, "community-buttons-section"], [1, "community-buttons-container"], ["class", "community-btn", 3, "click", 4, "ngFor", "ngForOf"], [1, "community-btn", 3, "click"], [1, "community-name"], [3, "message"]],
      template: function TopLevelCommunityListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, TopLevelCommunityListComponent_ng_container_0_Template, 4, 3, "ng-container", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "async");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngVar", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 1, ctx.communitiesRD$));
        }
      },
      dependencies: [_app_shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_6__.VarDirective, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _app_shared_error_error_component__WEBPACK_IMPORTED_MODULE_4__.ErrorComponent, _app_shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_5__.ThemedLoadingComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n@font-face {\n  font-family: \"Akhand-Bold\";\n  src: url('Akhand-Bold-BF642a3156ce54d.otf') format(\"opentype\");\n  font-weight: bold;\n  font-style: normal;\n}\n.tribal-archive-title[_ngcontent-%COMP%] {\n  font-family: \"Akhand-Bold\", Arial, sans-serif;\n  font-size: 1.9rem;\n  font-weight: bold;\n  text-align: center;\n  color: rgba(255, 255, 255, 0.9);\n  background-color: #6c2c34;\n  padding: 6px 18px;\n  border-radius: 25px;\n  margin: 0;\n  display: block;\n  width: -moz-fit-content;\n  width: fit-content;\n  border: 3px solid #fff4ec;\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);\n  letter-spacing: 0.5px;\n  line-height: 1.2;\n}\n\n.tribal-archive-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  text-align: center;\n  margin: 15px 0;\n}\n\n.community-buttons-section[_ngcontent-%COMP%] {\n  margin: 40px 0 0 0;\n  padding: 30px;\n  background: transparent;\n}\n\n.community-buttons-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 15px;\n  max-width: 1200px;\n  margin: 0 auto;\n  justify-content: center;\n}\n\n.community-btn[_ngcontent-%COMP%] {\n  background: #f4f0e6;\n  border: none;\n  border-radius: 30px;\n  padding: 12px 24px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  box-shadow: 0 3px 8px rgba(139, 69, 19, 0.3);\n  text-align: center;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: auto;\n  white-space: nowrap;\n}\n\n.community-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 5px 12px rgba(139, 69, 19, 0.4);\n  background: #f0ebe0;\n}\n\n.community-btn[_ngcontent-%COMP%]:active {\n  transform: translateY(0px);\n  box-shadow: 0 2px 6px rgba(139, 69, 19, 0.3);\n}\n\n.community-name[_ngcontent-%COMP%] {\n  color: #2c1810;\n  font-family: \"Akhand-Bold\", sans-serif;\n  font-weight: bold;\n  font-size: 1rem;\n  line-height: 1.2;\n}\n\n@media (max-width: 1024px) {\n  .community-buttons-container[_ngcontent-%COMP%] {\n    gap: 12px;\n  }\n}\n@media (max-width: 768px) {\n  .community-buttons-container[_ngcontent-%COMP%] {\n    gap: 10px;\n  }\n  .community-btn[_ngcontent-%COMP%] {\n    padding: 10px 18px;\n    border-radius: 25px;\n  }\n  .community-name[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n  .tribal-archive-title[_ngcontent-%COMP%] {\n    font-size: 1.4rem;\n    padding: 12px 30px;\n  }\n}\n@media (max-width: 480px) {\n  .community-buttons-container[_ngcontent-%COMP%] {\n    gap: 8px;\n  }\n  .community-btn[_ngcontent-%COMP%] {\n    padding: 8px 16px;\n    border-radius: 20px;\n  }\n  .community-name[_ngcontent-%COMP%] {\n    font-size: 0.85rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvcC1sZXZlbC1jb21tdW5pdHktbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBO0VBQ0UsMEJBQUE7RUFDQSw4REFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFDRjtBQUNBO0VBQ0UsNkNBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUNBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFFRjs7QUFBQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBR0Y7O0FBREE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtBQUlGOztBQUZBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLDRDQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFLRjs7QUFIQTtFQUNFLDJCQUFBO0VBQ0EsNkNBQUE7RUFDQSxtQkFBQTtBQU1GOztBQUpBO0VBQ0UsMEJBQUE7RUFDQSw0Q0FBQTtBQU9GOztBQUxBO0VBQ0UsY0FBQTtFQUNBLHNDQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFRRjs7QUFOQTtFQUNFO0lBQ0UsU0FBQTtFQVNGO0FBQ0Y7QUFQQTtFQUNFO0lBQ0UsU0FBQTtFQVNGO0VBUEE7SUFDRSxrQkFBQTtJQUNBLG1CQUFBO0VBU0Y7RUFQQTtJQUNFLGlCQUFBO0VBU0Y7RUFQQTtJQUNFLGlCQUFBO0lBQ0Esa0JBQUE7RUFTRjtBQUNGO0FBUEE7RUFDRTtJQUNFLFFBQUE7RUFTRjtFQVBBO0lBQ0UsaUJBQUE7SUFDQSxtQkFBQTtFQVNGO0VBUEE7SUFDRSxrQkFBQTtFQVNGO0FBQ0YiLCJmaWxlIjoidG9wLWxldmVsLWNvbW11bml0eS1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJBa2hhbmQtQm9sZFwiO1xuICBzcmM6IHVybChcIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy90aG9sa3VkaS1hc3NldHMvZm9udHMvQWtoYW5kLUJvbGQtQkY2NDJhMzE1NmNlNTRkLm90ZlwiKSBmb3JtYXQoXCJvcGVudHlwZVwiKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbi50cmliYWwtYXJjaGl2ZS10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFraGFuZC1Cb2xkXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEuOXJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZjMmMzNDtcbiAgcGFkZGluZzogNnB4IDE4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIG1hcmdpbjogMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgYm9yZGVyOiAzcHggc29saWQgI2ZmZjRlYztcbiAgYm94LXNoYWRvdzogMCA2cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbn1cbi50cmliYWwtYXJjaGl2ZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAxNXB4IDA7XG59XG4uY29tbXVuaXR5LWJ1dHRvbnMtc2VjdGlvbiB7XG4gIG1hcmdpbjogNDBweCAwIDAgMDtcbiAgcGFkZGluZzogMzBweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG4uY29tbXVuaXR5LWJ1dHRvbnMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDE1cHg7XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uY29tbXVuaXR5LWJ0biB7XG4gIGJhY2tncm91bmQ6ICNmNGYwZTY7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgcGFkZGluZzogMTJweCAyNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDhweCByZ2JhKDEzOSwgNjksIDE5LCAwLjMpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IGF1dG87XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4uY29tbXVuaXR5LWJ0bjpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgYm94LXNoYWRvdzogMCA1cHggMTJweCByZ2JhKDEzOSwgNjksIDE5LCAwLjQpO1xuICBiYWNrZ3JvdW5kOiAjZjBlYmUwO1xufVxuLmNvbW11bml0eS1idG46YWN0aXZlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDZweCByZ2JhKDEzOSwgNjksIDE5LCAwLjMpO1xufVxuLmNvbW11bml0eS1uYW1lIHtcbiAgY29sb3I6ICMyYzE4MTA7XG4gIGZvbnQtZmFtaWx5OiBcIkFraGFuZC1Cb2xkXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDFyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5jb21tdW5pdHktYnV0dG9ucy1jb250YWluZXIge1xuICAgIGdhcDogMTJweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jb21tdW5pdHktYnV0dG9ucy1jb250YWluZXIge1xuICAgIGdhcDogMTBweDtcbiAgfVxuICAuY29tbXVuaXR5LWJ0biB7XG4gICAgcGFkZGluZzogMTBweCAxOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIH1cbiAgLmNvbW11bml0eS1uYW1lIHtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgfVxuICAudHJpYmFsLWFyY2hpdmUtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgIHBhZGRpbmc6IDEycHggMzBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5jb21tdW5pdHktYnV0dG9ucy1jb250YWluZXIge1xuICAgIGdhcDogOHB4O1xuICB9XG4gIC5jb21tdW5pdHktYnRuIHtcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICB9XG4gIC5jb21tdW5pdHktbmFtZSB7XG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICB9XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy90aGVtZXMvZHNwYWNlL2FwcC9ob21lLXBhZ2UvdG9wLWxldmVsLWNvbW11bml0eS1saXN0L3RvcC1sZXZlbC1jb21tdW5pdHktbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBO0VBQ0UsMEJBQUE7RUFDQSw4REFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFDRjtBQUNBO0VBQ0UsNkNBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUNBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFFRjs7QUFBQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBR0Y7O0FBREE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtBQUlGOztBQUZBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLDRDQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFLRjs7QUFIQTtFQUNFLDJCQUFBO0VBQ0EsNkNBQUE7RUFDQSxtQkFBQTtBQU1GOztBQUpBO0VBQ0UsMEJBQUE7RUFDQSw0Q0FBQTtBQU9GOztBQUxBO0VBQ0UsY0FBQTtFQUNBLHNDQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFRRjs7QUFOQTtFQUNFO0lBQ0UsU0FBQTtFQVNGO0FBQ0Y7QUFQQTtFQUNFO0lBQ0UsU0FBQTtFQVNGO0VBUEE7SUFDRSxrQkFBQTtJQUNBLG1CQUFBO0VBU0Y7RUFQQTtJQUNFLGlCQUFBO0VBU0Y7RUFQQTtJQUNFLGlCQUFBO0lBQ0Esa0JBQUE7RUFTRjtBQUNGO0FBUEE7RUFDRTtJQUNFLFFBQUE7RUFTRjtFQVBBO0lBQ0UsaUJBQUE7SUFDQSxtQkFBQTtFQVNGO0VBUEE7SUFDRSxrQkFBQTtFQVNGO0FBQ0Y7QUFFQSw0OEpBQTQ4SiIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQWtoYW5kLUJvbGRcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvdGhvbGt1ZGktYXNzZXRzL2ZvbnRzL0FraGFuZC1Cb2xkLUJGNjQyYTMxNTZjZTU0ZC5vdGZcIikgZm9ybWF0KFwib3BlbnR5cGVcIik7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG4udHJpYmFsLWFyY2hpdmUtdGl0bGUge1xuICBmb250LWZhbWlseTogXCJBa2hhbmQtQm9sZFwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxLjlyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2YzJjMzQ7XG4gIHBhZGRpbmc6IDZweCAxOHB4O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBtYXJnaW46IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIGJvcmRlcjogM3B4IHNvbGlkICNmZmY0ZWM7XG4gIGJveC1zaGFkb3c6IDAgNnB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG59XG4udHJpYmFsLWFyY2hpdmUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMTVweCAwO1xufVxuLmNvbW11bml0eS1idXR0b25zLXNlY3Rpb24ge1xuICBtYXJnaW46IDQwcHggMCAwIDA7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuLmNvbW11bml0eS1idXR0b25zLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiAxNXB4O1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmNvbW11bml0eS1idG4ge1xuICBiYWNrZ3JvdW5kOiAjZjRmMGU2O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIHBhZGRpbmc6IDEycHggMjRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICBib3gtc2hhZG93OiAwIDNweCA4cHggcmdiYSgxMzksIDY5LCAxOSwgMC4zKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiBhdXRvO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLmNvbW11bml0eS1idG46aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDEycHggcmdiYSgxMzksIDY5LCAxOSwgMC40KTtcbiAgYmFja2dyb3VuZDogI2YwZWJlMDtcbn1cbi5jb21tdW5pdHktYnRuOmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICBib3gtc2hhZG93OiAwIDJweCA2cHggcmdiYSgxMzksIDY5LCAxOSwgMC4zKTtcbn1cbi5jb21tdW5pdHktbmFtZSB7XG4gIGNvbG9yOiAjMmMxODEwO1xuICBmb250LWZhbWlseTogXCJBa2hhbmQtQm9sZFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBsaW5lLWhlaWdodDogMS4yO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAuY29tbXVuaXR5LWJ1dHRvbnMtY29udGFpbmVyIHtcbiAgICBnYXA6IDEycHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuY29tbXVuaXR5LWJ1dHRvbnMtY29udGFpbmVyIHtcbiAgICBnYXA6IDEwcHg7XG4gIH1cbiAgLmNvbW11bml0eS1idG4ge1xuICAgIHBhZGRpbmc6IDEwcHggMThweDtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICB9XG4gIC5jb21tdW5pdHktbmFtZSB7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gIH1cbiAgLnRyaWJhbC1hcmNoaXZlLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICBwYWRkaW5nOiAxMnB4IDMwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuY29tbXVuaXR5LWJ1dHRvbnMtY29udGFpbmVyIHtcbiAgICBnYXA6IDhweDtcbiAgfVxuICAuY29tbXVuaXR5LWJ0biB7XG4gICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgfVxuICAuY29tbXVuaXR5LW5hbWUge1xuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=default-src_themes_dspace_app_home-page_top-level-community-list_top-level-community-list_com-56ce2a.js.map