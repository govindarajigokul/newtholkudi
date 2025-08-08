"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_themes_custom_app_shared_auth-nav-menu_user-menu_user-menu_component_ts"],{

/***/ 95208:
/*!*************************************************************************************!*\
  !*** ./src/themes/custom/app/shared/auth-nav-menu/user-menu/user-menu.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserMenuComponent: () => (/* binding */ UserMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var src_app_shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/loading/themed-loading.component */ 82394);
/* harmony import */ var src_app_shared_log_out_log_out_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/log-out/log-out.component */ 61980);
/* harmony import */ var _app_shared_auth_nav_menu_user_menu_user_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../app/shared/auth-nav-menu/user-menu/user-menu.component */ 51609);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 90310);








const _c0 = a0 => [a0];
function UserMenuComponent_ds_loading_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "ds-loading");
  }
}
function UserMenuComponent_ul_2_ng_container_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "ds-log-out", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
}
function UserMenuComponent_ul_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ul", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UserMenuComponent_ul_2_Template_li_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.onMenuItemClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UserMenuComponent_ul_2_Template_li_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.onMenuItemClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UserMenuComponent_ul_2_Template_li_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.onMenuItemClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, UserMenuComponent_ul_2_ng_container_21_Template, 4, 0, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r1.inExpandableNavbar ? "user-menu-mobile pb-2 mb-2 border-bottom" : "user-menu-dropdown");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 11, "nav.user-profile-menu-and-logout"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.dsoNameService.getName(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 13, ctx_r1.user$)), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"]((tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](8, 15, ctx_r1.user$)) == null ? null : tmp_4_0.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](23, _c0, ctx_r1.profileRoute));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](12, 17, "nav.profile"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](25, _c0, ctx_r1.mydspaceRoute));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](16, 19, "nav.mydspace"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](27, _c0, ctx_r1.subscriptionsRoute));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](20, 21, "nav.subscriptions"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r1.inExpandableNavbar);
  }
}
/**
 * Component representing the {@link UserMenuComponent} of a page
 */
class UserMenuComponent extends _app_shared_auth_nav_menu_user_menu_user_menu_component__WEBPACK_IMPORTED_MODULE_2__.UserMenuComponent {
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵUserMenuComponent_BaseFactory;
      return function UserMenuComponent_Factory(t) {
        return (ɵUserMenuComponent_BaseFactory || (ɵUserMenuComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](UserMenuComponent)))(t || UserMenuComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: UserMenuComponent,
      selectors: [["ds-themed-user-menu"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
      decls: 4,
      vars: 6,
      consts: [[4, "ngIf"], ["class", "user-menu", "role", "menu", "id", "user-menu-dropdown", 3, "ngClass", 4, "ngIf"], ["role", "menu", "id", "user-menu-dropdown", 1, "user-menu", 3, "ngClass"], ["role", "presentation", 1, "ds-menu-item-wrapper", "username-email-wrapper"], [1, "text-muted"], ["role", "presentation", 1, "ds-menu-item-wrapper", 3, "click"], ["role", "menuitem", "routerLinkActive", "active", 1, "ds-menu-item", 3, "routerLink"], ["aria-hidden", "true", 1, "dropdown-divider"], ["role", "presentation", 1, "ds-menu-item-wrapper"], ["data-test", "log-out-component"]],
      template: function UserMenuComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, UserMenuComponent_ds_loading_0_Template, 1, 0, "ds-loading", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, UserMenuComponent_ul_2_Template, 22, 29, "ul", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "async");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 2, ctx.loading$));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 4, ctx.loading$) !== true);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, src_app_shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_0__.ThemedLoadingComponent, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, src_app_shared_log_out_log_out_component__WEBPACK_IMPORTED_MODULE_1__.LogOutComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   ul.user-menu[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n[_nghost-%COMP%]   ul.user-menu.user-menu-dropdown[_ngcontent-%COMP%]   .ds-menu-item-wrapper[_ngcontent-%COMP%]   a.ds-menu-item[_ngcontent-%COMP%], [_nghost-%COMP%]   ul.user-menu.user-menu-dropdown[_ngcontent-%COMP%]   .ds-menu-item-wrapper.username-email-wrapper[_ngcontent-%COMP%] {\n  padding: var(--ds-user-menu-item-vertical-padding) var(--ds-user-menu-dropdown-padding);\n}\n\n[_nghost-%COMP%]   ul.user-menu.user-menu-dropdown[_ngcontent-%COMP%]   .ds-menu-item-wrapper[_ngcontent-%COMP%]   a.ds-menu-item[_ngcontent-%COMP%] {\n  display: block;\n  color: var(--ds-expandable-navbar-link-color);\n}\n\n[_nghost-%COMP%]   ul.user-menu.user-menu-dropdown[_ngcontent-%COMP%]   .ds-menu-item-wrapper[_ngcontent-%COMP%]   a.ds-menu-item[_ngcontent-%COMP%]:hover {\n  color: var(--ds-expandable-navbar-link-color-hover);\n  background-color: var(--ds-user-menu-dropdown-link-background-hover);\n}\n\n[_nghost-%COMP%]   ul.user-menu.user-menu-mobile[_ngcontent-%COMP%]   .ds-menu-item-wrapper[_ngcontent-%COMP%] {\n  padding-top: var(--ds-user-menu-item-vertical-padding);\n  padding-bottom: var(--ds-user-menu-item-vertical-padding);\n}\n\n[_nghost-%COMP%]   ul.user-menu.user-menu-mobile[_ngcontent-%COMP%]   .ds-menu-item[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n[_nghost-%COMP%]   ul.user-menu.user-menu-mobile[_ngcontent-%COMP%]   .ds-menu-item[_ngcontent-%COMP%], [_nghost-%COMP%]   ul.user-menu.user-menu-mobile[_ngcontent-%COMP%]   .ds-menu-toggler-wrapper[_ngcontent-%COMP%] {\n  color: var(--ds-expandable-navbar-link-color) !important;\n}\n\n[_nghost-%COMP%]   ul.user-menu.user-menu-mobile[_ngcontent-%COMP%]   .ds-menu-item[_ngcontent-%COMP%]:hover, [_nghost-%COMP%]   ul.user-menu.user-menu-mobile[_ngcontent-%COMP%]   .ds-menu-item[_ngcontent-%COMP%]:focus, [_nghost-%COMP%]   ul.user-menu.user-menu-mobile[_ngcontent-%COMP%]   .ds-menu-toggler-wrapper[_ngcontent-%COMP%]:hover, [_nghost-%COMP%]   ul.user-menu.user-menu-mobile[_ngcontent-%COMP%]   .ds-menu-toggler-wrapper[_ngcontent-%COMP%]:focus {\n  color: var(--ds-expandable-navbar-link-background-hover) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBO0VBQ0UsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUNBO0VBQ0UsdUZBQUE7QUFFRjs7QUFBQTtFQUNFLGNBQUE7RUFDQSw2Q0FBQTtBQUdGOztBQURBO0VBQ0UsbURBQUE7RUFDQSxvRUFBQTtBQUlGOztBQUZBO0VBQ0Usc0RBQUE7RUFDQSx5REFBQTtBQUtGOztBQUhBO0VBQ0UscUJBQUE7QUFNRjs7QUFKQTtFQUNFLHdEQUFBO0FBT0Y7O0FBTEE7RUFDRSxtRUFBQTtBQVFGIiwiZmlsZSI6InVzZXItbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovXG46aG9zdCB1bC51c2VyLW1lbnUge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG46aG9zdCB1bC51c2VyLW1lbnUudXNlci1tZW51LWRyb3Bkb3duIC5kcy1tZW51LWl0ZW0td3JhcHBlciBhLmRzLW1lbnUtaXRlbSwgOmhvc3QgdWwudXNlci1tZW51LnVzZXItbWVudS1kcm9wZG93biAuZHMtbWVudS1pdGVtLXdyYXBwZXIudXNlcm5hbWUtZW1haWwtd3JhcHBlciB7XG4gIHBhZGRpbmc6IHZhcigtLWRzLXVzZXItbWVudS1pdGVtLXZlcnRpY2FsLXBhZGRpbmcpIHZhcigtLWRzLXVzZXItbWVudS1kcm9wZG93bi1wYWRkaW5nKTtcbn1cbjpob3N0IHVsLnVzZXItbWVudS51c2VyLW1lbnUtZHJvcGRvd24gLmRzLW1lbnUtaXRlbS13cmFwcGVyIGEuZHMtbWVudS1pdGVtIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiB2YXIoLS1kcy1leHBhbmRhYmxlLW5hdmJhci1saW5rLWNvbG9yKTtcbn1cbjpob3N0IHVsLnVzZXItbWVudS51c2VyLW1lbnUtZHJvcGRvd24gLmRzLW1lbnUtaXRlbS13cmFwcGVyIGEuZHMtbWVudS1pdGVtOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLWRzLWV4cGFuZGFibGUtbmF2YmFyLWxpbmstY29sb3ItaG92ZXIpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kcy11c2VyLW1lbnUtZHJvcGRvd24tbGluay1iYWNrZ3JvdW5kLWhvdmVyKTtcbn1cbjpob3N0IHVsLnVzZXItbWVudS51c2VyLW1lbnUtbW9iaWxlIC5kcy1tZW51LWl0ZW0td3JhcHBlciB7XG4gIHBhZGRpbmctdG9wOiB2YXIoLS1kcy11c2VyLW1lbnUtaXRlbS12ZXJ0aWNhbC1wYWRkaW5nKTtcbiAgcGFkZGluZy1ib3R0b206IHZhcigtLWRzLXVzZXItbWVudS1pdGVtLXZlcnRpY2FsLXBhZGRpbmcpO1xufVxuOmhvc3QgdWwudXNlci1tZW51LnVzZXItbWVudS1tb2JpbGUgLmRzLW1lbnUtaXRlbSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbjpob3N0IHVsLnVzZXItbWVudS51c2VyLW1lbnUtbW9iaWxlIC5kcy1tZW51LWl0ZW0sIDpob3N0IHVsLnVzZXItbWVudS51c2VyLW1lbnUtbW9iaWxlIC5kcy1tZW51LXRvZ2dsZXItd3JhcHBlciB7XG4gIGNvbG9yOiB2YXIoLS1kcy1leHBhbmRhYmxlLW5hdmJhci1saW5rLWNvbG9yKSAhaW1wb3J0YW50O1xufVxuOmhvc3QgdWwudXNlci1tZW51LnVzZXItbWVudS1tb2JpbGUgLmRzLW1lbnUtaXRlbTpob3ZlciwgOmhvc3QgdWwudXNlci1tZW51LnVzZXItbWVudS1tb2JpbGUgLmRzLW1lbnUtaXRlbTpmb2N1cywgOmhvc3QgdWwudXNlci1tZW51LnVzZXItbWVudS1tb2JpbGUgLmRzLW1lbnUtdG9nZ2xlci13cmFwcGVyOmhvdmVyLCA6aG9zdCB1bC51c2VyLW1lbnUudXNlci1tZW51LW1vYmlsZSAuZHMtbWVudS10b2dnbGVyLXdyYXBwZXI6Zm9jdXMge1xuICBjb2xvcjogdmFyKC0tZHMtZXhwYW5kYWJsZS1uYXZiYXItbGluay1iYWNrZ3JvdW5kLWhvdmVyKSAhaW1wb3J0YW50O1xufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2F1dGgtbmF2LW1lbnUvdXNlci1tZW51L3VzZXItbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBO0VBQ0UsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUNBO0VBQ0UsdUZBQUE7QUFFRjs7QUFBQTtFQUNFLGNBQUE7RUFDQSw2Q0FBQTtBQUdGOztBQURBO0VBQ0UsbURBQUE7RUFDQSxvRUFBQTtBQUlGOztBQUZBO0VBQ0Usc0RBQUE7RUFDQSx5REFBQTtBQUtGOztBQUhBO0VBQ0UscUJBQUE7QUFNRjs7QUFKQTtFQUNFLHdEQUFBO0FBT0Y7O0FBTEE7RUFDRSxtRUFBQTtBQVFGO0FBQ0EsZ3hGQUFneEYiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqL1xuOmhvc3QgdWwudXNlci1tZW51IHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuOmhvc3QgdWwudXNlci1tZW51LnVzZXItbWVudS1kcm9wZG93biAuZHMtbWVudS1pdGVtLXdyYXBwZXIgYS5kcy1tZW51LWl0ZW0sIDpob3N0IHVsLnVzZXItbWVudS51c2VyLW1lbnUtZHJvcGRvd24gLmRzLW1lbnUtaXRlbS13cmFwcGVyLnVzZXJuYW1lLWVtYWlsLXdyYXBwZXIge1xuICBwYWRkaW5nOiB2YXIoLS1kcy11c2VyLW1lbnUtaXRlbS12ZXJ0aWNhbC1wYWRkaW5nKSB2YXIoLS1kcy11c2VyLW1lbnUtZHJvcGRvd24tcGFkZGluZyk7XG59XG46aG9zdCB1bC51c2VyLW1lbnUudXNlci1tZW51LWRyb3Bkb3duIC5kcy1tZW51LWl0ZW0td3JhcHBlciBhLmRzLW1lbnUtaXRlbSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogdmFyKC0tZHMtZXhwYW5kYWJsZS1uYXZiYXItbGluay1jb2xvcik7XG59XG46aG9zdCB1bC51c2VyLW1lbnUudXNlci1tZW51LWRyb3Bkb3duIC5kcy1tZW51LWl0ZW0td3JhcHBlciBhLmRzLW1lbnUtaXRlbTpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1kcy1leHBhbmRhYmxlLW5hdmJhci1saW5rLWNvbG9yLWhvdmVyKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZHMtdXNlci1tZW51LWRyb3Bkb3duLWxpbmstYmFja2dyb3VuZC1ob3Zlcik7XG59XG46aG9zdCB1bC51c2VyLW1lbnUudXNlci1tZW51LW1vYmlsZSAuZHMtbWVudS1pdGVtLXdyYXBwZXIge1xuICBwYWRkaW5nLXRvcDogdmFyKC0tZHMtdXNlci1tZW51LWl0ZW0tdmVydGljYWwtcGFkZGluZyk7XG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1kcy11c2VyLW1lbnUtaXRlbS12ZXJ0aWNhbC1wYWRkaW5nKTtcbn1cbjpob3N0IHVsLnVzZXItbWVudS51c2VyLW1lbnUtbW9iaWxlIC5kcy1tZW51LWl0ZW0ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG46aG9zdCB1bC51c2VyLW1lbnUudXNlci1tZW51LW1vYmlsZSAuZHMtbWVudS1pdGVtLCA6aG9zdCB1bC51c2VyLW1lbnUudXNlci1tZW51LW1vYmlsZSAuZHMtbWVudS10b2dnbGVyLXdyYXBwZXIge1xuICBjb2xvcjogdmFyKC0tZHMtZXhwYW5kYWJsZS1uYXZiYXItbGluay1jb2xvcikgIWltcG9ydGFudDtcbn1cbjpob3N0IHVsLnVzZXItbWVudS51c2VyLW1lbnUtbW9iaWxlIC5kcy1tZW51LWl0ZW06aG92ZXIsIDpob3N0IHVsLnVzZXItbWVudS51c2VyLW1lbnUtbW9iaWxlIC5kcy1tZW51LWl0ZW06Zm9jdXMsIDpob3N0IHVsLnVzZXItbWVudS51c2VyLW1lbnUtbW9iaWxlIC5kcy1tZW51LXRvZ2dsZXItd3JhcHBlcjpob3ZlciwgOmhvc3QgdWwudXNlci1tZW51LnVzZXItbWVudS1tb2JpbGUgLmRzLW1lbnUtdG9nZ2xlci13cmFwcGVyOmZvY3VzIHtcbiAgY29sb3I6IHZhcigtLWRzLWV4cGFuZGFibGUtbmF2YmFyLWxpbmstYmFja2dyb3VuZC1ob3ZlcikgIWltcG9ydGFudDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_themes_custom_app_shared_auth-nav-menu_user-menu_user-menu_component_ts.js.map