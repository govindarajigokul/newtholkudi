"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_themes_custom_app_root_root_component_ts"],{

/***/ 83469:
/*!******************************************************!*\
  !*** ./src/themes/custom/app/root/root.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RootComponent: () => (/* binding */ RootComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var _app_admin_admin_sidebar_themed_admin_sidebar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../app/admin/admin-sidebar/themed-admin-sidebar.component */ 61242);
/* harmony import */ var _app_breadcrumbs_themed_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../app/breadcrumbs/themed-breadcrumbs.component */ 46754);
/* harmony import */ var _app_footer_themed_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app/footer/themed-footer.component */ 74920);
/* harmony import */ var _app_header_nav_wrapper_themed_header_navbar_wrapper_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../app/header-nav-wrapper/themed-header-navbar-wrapper.component */ 77529);
/* harmony import */ var _app_root_root_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../app/root/root.component */ 87114);
/* harmony import */ var _app_shared_animations_slide__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../app/shared/animations/slide */ 621);
/* harmony import */ var _app_shared_live_region_live_region_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../app/shared/live-region/live-region.component */ 98776);
/* harmony import */ var _app_shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../app/shared/loading/themed-loading.component */ 82394);
/* harmony import */ var _app_shared_notifications_notifications_board_notifications_board_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../app/shared/notifications/notifications-board/notifications-board.component */ 70595);
/* harmony import */ var _app_system_wide_alert_alert_banner_system_wide_alert_banner_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../app/system-wide-alert/alert-banner/system-wide-alert-banner.component */ 58429);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 90310);















const _c0 = (a0, a1) => ({
  collapsedWidth: a0,
  expandedWidth: a1
});
const _c1 = (a0, a1) => ({
  value: a0,
  params: a1
});
function RootComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "ds-loading", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("showMessage", false);
  }
}
function RootComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "ds-loading", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("showMessage", false);
  }
}
class RootComponent extends _app_root_root_component__WEBPACK_IMPORTED_MODULE_4__.RootComponent {
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵRootComponent_BaseFactory;
      return function RootComponent_Factory(t) {
        return (ɵRootComponent_BaseFactory || (ɵRootComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetInheritedFactory"](RootComponent)))(t || RootComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
      type: RootComponent,
      selectors: [["ds-themed-root"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵStandaloneFeature"]],
      decls: 22,
      vars: 30,
      consts: [["id", "skip-to-main-content", 1, "sr-only", 3, "click"], [1, "outer-wrapper", 3, "ngClass"], [3, "expandedSidebarWidth$", "collapsedSidebarWidth$"], [1, "inner-wrapper"], ["id", "main-content", 1, "my-cs"], ["class", "container d-flex justify-content-center align-items-center h-100", 4, "ngIf"], [3, "options"], ["class", "ds-full-screen-loader", 4, "ngIf"], [1, "container", "d-flex", "justify-content-center", "align-items-center", "h-100"], [3, "showMessage"], [1, "ds-full-screen-loader"]],
      template: function RootComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function RootComponent_Template_button_click_0_listener() {
            return ctx.skipToMainContent();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](5, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](6, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](7, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](8, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](9, "ds-admin-sidebar", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](11, "ds-system-wide-alert-banner")(12, "ds-header-navbar-wrapper")(13, "ds-breadcrumbs");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "main", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](15, RootComponent_div_15_Template, 2, 1, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](17, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](18, "ds-footer");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](19, "ds-notifications-board", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](20, RootComponent_div_20_Template, 2, 1, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](21, "ds-live-region");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 12, "root.skip-to-content"), "\n");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("d-none", ctx.shouldShowFullscreenLoader);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 14, ctx.browserOsClasses.asObservable()))("@slideSidebarPadding", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](27, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](5, 16, ctx.isSidebarVisible$) !== true ? "hidden" : _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](6, 18, ctx.slideSidebarOver$) ? "unpinned" : "pinned", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](24, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](7, 20, ctx.collapsedSidebarWidth$), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](8, 22, ctx.expandedSidebarWidth$))));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("expandedSidebarWidth$", ctx.expandedSidebarWidth$)("collapsedSidebarWidth$", ctx.collapsedSidebarWidth$);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.shouldShowRouteLoader);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("d-none", ctx.shouldShowRouteLoader);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("options", ctx.notificationOptions);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.shouldShowFullscreenLoader);
        }
      },
      dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe, _app_admin_admin_sidebar_themed_admin_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.ThemedAdminSidebarComponent, _app_system_wide_alert_alert_banner_system_wide_alert_banner_component__WEBPACK_IMPORTED_MODULE_9__.SystemWideAlertBannerComponent, _app_header_nav_wrapper_themed_header_navbar_wrapper_component__WEBPACK_IMPORTED_MODULE_3__.ThemedHeaderNavbarWrapperComponent, _app_breadcrumbs_themed_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_1__.ThemedBreadcrumbsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _app_shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_7__.ThemedLoadingComponent, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterOutlet, _app_footer_themed_footer_component__WEBPACK_IMPORTED_MODULE_2__.ThemedFooterComponent, _app_shared_notifications_notifications_board_notifications_board_component__WEBPACK_IMPORTED_MODULE_8__.NotificationsBoardComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.AsyncPipe, _app_shared_live_region_live_region_component__WEBPACK_IMPORTED_MODULE_6__.LiveRegionComponent],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n#skip-to-main-content[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -40px;\n  left: 0;\n  opacity: 0;\n  transition: opacity 0.3s;\n  z-index: calc(var(--ds-nav-z-index) + 1);\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n#skip-to-main-content[_ngcontent-%COMP%]:focus {\n  opacity: 1;\n  top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvb3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0Esd0JBQUE7RUFDQSx3Q0FBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtBQUNGOztBQUNBO0VBQ0UsVUFBQTtFQUNBLE1BQUE7QUFFRiIsImZpbGUiOiJyb290LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi9cbiNza2lwLXRvLW1haW4tY29udGVudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtNDBweDtcbiAgbGVmdDogMDtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzO1xuICB6LWluZGV4OiBjYWxjKHZhcigtLWRzLW5hdi16LWluZGV4KSArIDEpO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbn1cbiNza2lwLXRvLW1haW4tY29udGVudDpmb2N1cyB7XG4gIG9wYWNpdHk6IDE7XG4gIHRvcDogMDtcbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcm9vdC9yb290LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBO0FBQ0E7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLHdCQUFBO0VBQ0Esd0NBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7QUFDRjs7QUFDQTtFQUNFLFVBQUE7RUFDQSxNQUFBO0FBRUY7QUFDQSw0b0NBQTRvQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovXG4jc2tpcC10by1tYWluLWNvbnRlbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTQwcHg7XG4gIGxlZnQ6IDA7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcztcbiAgei1pbmRleDogY2FsYyh2YXIoLS1kcy1uYXYtei1pbmRleCkgKyAxKTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG59XG4jc2tpcC10by1tYWluLWNvbnRlbnQ6Zm9jdXMge1xuICBvcGFjaXR5OiAxO1xuICB0b3A6IDA7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"],
      data: {
        animation: [_app_shared_animations_slide__WEBPACK_IMPORTED_MODULE_5__.slideSidebarPadding]
      }
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_themes_custom_app_root_root_component_ts.js.map