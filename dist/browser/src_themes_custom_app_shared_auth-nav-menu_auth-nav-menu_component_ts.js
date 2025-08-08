"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_themes_custom_app_shared_auth-nav-menu_auth-nav-menu_component_ts"],{

/***/ 5789:
/*!*******************************************************************************!*\
  !*** ./src/themes/custom/app/shared/auth-nav-menu/auth-nav-menu.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthNavMenuComponent: () => (/* binding */ AuthNavMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 49966);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var src_app_shared_auth_nav_menu_user_menu_themed_user_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/auth-nav-menu/user-menu/themed-user-menu.component */ 28619);
/* harmony import */ var src_app_shared_log_in_themed_log_in_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/log-in/themed-log-in.component */ 46519);
/* harmony import */ var _app_shared_animations_fade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../app/shared/animations/fade */ 50332);
/* harmony import */ var _app_shared_auth_nav_menu_auth_nav_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../app/shared/auth-nav-menu/auth-nav-menu.component */ 56292);
/* harmony import */ var _app_shared_utils_browser_only_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../app/shared/utils/browser-only.pipe */ 75465);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 90310);












const _c0 = a0 => ({
  "pl-3 pr-3": a0
});
function AuthNavMenuComponent_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AuthNavMenuComponent_div_0_div_1_Template_div_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 8, 1)(3, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "dsBrowserOnly");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AuthNavMenuComponent_div_0_div_1_Template_a_click_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event.preventDefault());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "ds-log-in", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const loginDrop_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](2);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("@fadeInOut", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 8, "nav.login"))("data-test", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 10, "login-menu"))("aria-expanded", loginDrop_r2.isOpen());
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](7, 12, "nav.login"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](18, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](9, 14, ctx_r2.loading)));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](10, 16, "nav.login"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("isStandalonePage", false);
  }
}
function AuthNavMenuComponent_div_0_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 12)(1, "div", 8, 2)(3, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "dsBrowserOnly");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AuthNavMenuComponent_div_0_div_4_Template_a_click_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event.preventDefault());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 15)(9, "ds-user-menu", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("changedRoute", function AuthNavMenuComponent_div_0_div_4_Template_ds_user_menu_changedRoute_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const loggedInDrop_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](loggedInDrop_r5.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("@fadeInOut", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 5, "nav.user-profile-menu-and-logout"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 7, "nav.user-profile-menu-and-logout"))("data-test", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 9, "user-menu"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("inExpandableNavbar", false);
  }
}
function AuthNavMenuComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AuthNavMenuComponent_div_0_div_1_Template, 12, 20, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, AuthNavMenuComponent_div_0_div_4_Template, 10, 11, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 2, ctx_r2.isAuthenticated) !== true && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 4, ctx_r2.showAuth));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 6, ctx_r2.isAuthenticated) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 8, ctx_r2.showAuth));
  }
}
function AuthNavMenuComponent_ng_template_2_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "(current)");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "nav.login"), "");
  }
}
function AuthNavMenuComponent_ng_template_2_a_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "(current)");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 2, "nav.logout"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 4, "nav.logout"));
  }
}
function AuthNavMenuComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AuthNavMenuComponent_ng_template_2_a_1_Template, 5, 3, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, AuthNavMenuComponent_ng_template_2_a_3_Template, 6, 6, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 2, ctx_r2.isAuthenticated) !== true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 4, ctx_r2.isAuthenticated));
  }
}
/**
 * Component representing the {@link AuthNavMenuComponent} of a page
 */
class AuthNavMenuComponent extends _app_shared_auth_nav_menu_auth_nav_menu_component__WEBPACK_IMPORTED_MODULE_3__.AuthNavMenuComponent {
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵAuthNavMenuComponent_BaseFactory;
      return function AuthNavMenuComponent_Factory(t) {
        return (ɵAuthNavMenuComponent_BaseFactory || (ɵAuthNavMenuComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetInheritedFactory"](AuthNavMenuComponent)))(t || AuthNavMenuComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: AuthNavMenuComponent,
      selectors: [["ds-themed-auth-nav-menu"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵStandaloneFeature"]],
      decls: 4,
      vars: 4,
      consts: [["mobileButtons", ""], ["loginDrop", "ngbDropdown"], ["loggedInDrop", "ngbDropdown"], ["class", "navbar-nav mr-auto", "data-test", "auth-nav", 4, "ngIf", "ngIfElse"], ["data-test", "auth-nav", 1, "navbar-nav", "mr-auto"], ["class", "nav-item", 3, "click", 4, "ngIf"], ["class", "nav-item", 4, "ngIf"], [1, "nav-item", 3, "click"], ["ngbDropdown", "", "display", "dynamic", "placement", "bottom-right", 1, "d-inline-block"], ["href", "javascript:void(0);", "role", "menuitem", "aria-haspopup", "menu", "aria-controls", "loginDropdownMenu", "ngbDropdownToggle", "", 1, "dropdownLogin", "px-0.5", 3, "click"], ["id", "loginDropdownMenu", "ngbDropdownMenu", "", "role", "menu", 3, "ngClass"], [3, "isStandalonePage"], [1, "nav-item"], ["href", "javascript:void(0);", "role", "menuitem", "aria-controls", "user-menu-dropdown", "ngbDropdownToggle", "", 1, "dropdownLogout", "px-1", 3, "click", "title"], [1, "fas", "fa-user-circle", "fa-lg", "fa-fw"], ["id", "logoutDropdownMenu", "ngbDropdownMenu", ""], [3, "changedRoute", "inExpandableNavbar"], ["data-test", "auth-nav"], ["routerLink", "/login", "routerLinkActive", "active", "class", "loginLink px-0.5", "role", "button", 4, "ngIf"], ["role", "button", "routerLink", "/logout", "routerLinkActive", "active", "class", "logoutLink px-1", 3, "title", 4, "ngIf"], ["routerLink", "/login", "routerLinkActive", "active", "role", "button", 1, "loginLink", "px-0.5"], [1, "sr-only"], ["role", "button", "routerLink", "/logout", "routerLinkActive", "active", 1, "logoutLink", "px-1", 3, "title"], [1, "fas", "fa-sign-out-alt", "fa-lg", "fa-fw"]],
      template: function AuthNavMenuComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, AuthNavMenuComponent_div_0_Template, 7, 10, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, AuthNavMenuComponent_ng_template_2_Template, 5, 6, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        }
        if (rf & 2) {
          const mobileButtons_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 2, ctx.isMobile$) !== true)("ngIfElse", mobileButtons_r6);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbDropdownModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbDropdownMenu, src_app_shared_log_in_themed_log_in_component__WEBPACK_IMPORTED_MODULE_1__.ThemedLogInComponent, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkActive, src_app_shared_auth_nav_menu_user_menu_themed_user_menu_component__WEBPACK_IMPORTED_MODULE_0__.ThemedUserMenuComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe, _app_shared_utils_browser_only_pipe__WEBPACK_IMPORTED_MODULE_4__.BrowserOnlyPipe],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n#loginDropdownMenu[_ngcontent-%COMP%], #logoutDropdownMenu[_ngcontent-%COMP%] {\n  min-width: 330px;\n  z-index: 1002;\n}\n\n#loginDropdownMenu[_ngcontent-%COMP%] {\n  min-height: 75px;\n}\n\n.dropdown-item.active[_ngcontent-%COMP%], .dropdown-item[_ngcontent-%COMP%]:active, .dropdown-item[_ngcontent-%COMP%]:hover, .dropdown-item[_ngcontent-%COMP%]:focus {\n  background-color: transparent !important;\n}\n\n.loginLink[_ngcontent-%COMP%], .dropdownLogin[_ngcontent-%COMP%], .logoutLink[_ngcontent-%COMP%], .dropdownLogout[_ngcontent-%COMP%] {\n  color: var(--ds-header-icon-color);\n}\n\n.loginLink[_ngcontent-%COMP%]:hover, .loginLink[_ngcontent-%COMP%]:focus, .dropdownLogin[_ngcontent-%COMP%]:hover, .dropdownLogin[_ngcontent-%COMP%]:focus, .logoutLink[_ngcontent-%COMP%]:hover, .logoutLink[_ngcontent-%COMP%]:focus, .dropdownLogout[_ngcontent-%COMP%]:hover, .dropdownLogout[_ngcontent-%COMP%]:focus {\n  color: var(--ds-header-icon-color-hover);\n}\n\n.dropdownLogin[_ngcontent-%COMP%]:not(:focus-visible).active, .dropdownLogin[_ngcontent-%COMP%]:not(:focus-visible):active, .dropdownLogin[_ngcontent-%COMP%]:not(:focus-visible).active:focus, .dropdownLogin[_ngcontent-%COMP%]:not(:focus-visible):active:focus, .dropdownLogout[_ngcontent-%COMP%]:not(:focus-visible).active, .dropdownLogout[_ngcontent-%COMP%]:not(:focus-visible):active, .dropdownLogout[_ngcontent-%COMP%]:not(:focus-visible).active:focus, .dropdownLogout[_ngcontent-%COMP%]:not(:focus-visible):active:focus {\n  box-shadow: unset;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgtbmF2LW1lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUNBO0VBQ0UsZ0JBQUE7QUFFRjs7QUFBQTs7RUFFRSx3Q0FBQTtBQUdGOztBQURBO0VBQ0Usa0NBQUE7QUFJRjs7QUFGQTtFQUNFLHdDQUFBO0FBS0Y7O0FBSEE7RUFDRSxpQkFBQTtBQU1GIiwiZmlsZSI6ImF1dGgtbmF2LW1lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqL1xuI2xvZ2luRHJvcGRvd25NZW51LCAjbG9nb3V0RHJvcGRvd25NZW51IHtcbiAgbWluLXdpZHRoOiAzMzBweDtcbiAgei1pbmRleDogMTAwMjtcbn1cbiNsb2dpbkRyb3Bkb3duTWVudSB7XG4gIG1pbi1oZWlnaHQ6IDc1cHg7XG59XG4uZHJvcGRvd24taXRlbS5hY3RpdmUsIC5kcm9wZG93bi1pdGVtOmFjdGl2ZSxcbi5kcm9wZG93bi1pdGVtOmhvdmVyLCAuZHJvcGRvd24taXRlbTpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG4ubG9naW5MaW5rLCAuZHJvcGRvd25Mb2dpbiwgLmxvZ291dExpbmssIC5kcm9wZG93bkxvZ291dCB7XG4gIGNvbG9yOiB2YXIoLS1kcy1oZWFkZXItaWNvbi1jb2xvcik7XG59XG4ubG9naW5MaW5rOmhvdmVyLCAubG9naW5MaW5rOmZvY3VzLCAuZHJvcGRvd25Mb2dpbjpob3ZlciwgLmRyb3Bkb3duTG9naW46Zm9jdXMsIC5sb2dvdXRMaW5rOmhvdmVyLCAubG9nb3V0TGluazpmb2N1cywgLmRyb3Bkb3duTG9nb3V0OmhvdmVyLCAuZHJvcGRvd25Mb2dvdXQ6Zm9jdXMge1xuICBjb2xvcjogdmFyKC0tZHMtaGVhZGVyLWljb24tY29sb3ItaG92ZXIpO1xufVxuLmRyb3Bkb3duTG9naW46bm90KDpmb2N1cy12aXNpYmxlKS5hY3RpdmUsIC5kcm9wZG93bkxvZ2luOm5vdCg6Zm9jdXMtdmlzaWJsZSk6YWN0aXZlLCAuZHJvcGRvd25Mb2dpbjpub3QoOmZvY3VzLXZpc2libGUpLmFjdGl2ZTpmb2N1cywgLmRyb3Bkb3duTG9naW46bm90KDpmb2N1cy12aXNpYmxlKTphY3RpdmU6Zm9jdXMsIC5kcm9wZG93bkxvZ291dDpub3QoOmZvY3VzLXZpc2libGUpLmFjdGl2ZSwgLmRyb3Bkb3duTG9nb3V0Om5vdCg6Zm9jdXMtdmlzaWJsZSk6YWN0aXZlLCAuZHJvcGRvd25Mb2dvdXQ6bm90KDpmb2N1cy12aXNpYmxlKS5hY3RpdmU6Zm9jdXMsIC5kcm9wZG93bkxvZ291dDpub3QoOmZvY3VzLXZpc2libGUpOmFjdGl2ZTpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IHVuc2V0O1xufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2F1dGgtbmF2LW1lbnUvYXV0aC1uYXYtbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxnQkFBQTtBQUVGOztBQUFBOztFQUVFLHdDQUFBO0FBR0Y7O0FBREE7RUFDRSxrQ0FBQTtBQUlGOztBQUZBO0VBQ0Usd0NBQUE7QUFLRjs7QUFIQTtFQUNFLGlCQUFBO0FBTUY7QUFDQSxvaUVBQW9pRSIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovXG4jbG9naW5Ecm9wZG93bk1lbnUsICNsb2dvdXREcm9wZG93bk1lbnUge1xuICBtaW4td2lkdGg6IDMzMHB4O1xuICB6LWluZGV4OiAxMDAyO1xufVxuI2xvZ2luRHJvcGRvd25NZW51IHtcbiAgbWluLWhlaWdodDogNzVweDtcbn1cbi5kcm9wZG93bi1pdGVtLmFjdGl2ZSwgLmRyb3Bkb3duLWl0ZW06YWN0aXZlLFxuLmRyb3Bkb3duLWl0ZW06aG92ZXIsIC5kcm9wZG93bi1pdGVtOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cbi5sb2dpbkxpbmssIC5kcm9wZG93bkxvZ2luLCAubG9nb3V0TGluaywgLmRyb3Bkb3duTG9nb3V0IHtcbiAgY29sb3I6IHZhcigtLWRzLWhlYWRlci1pY29uLWNvbG9yKTtcbn1cbi5sb2dpbkxpbms6aG92ZXIsIC5sb2dpbkxpbms6Zm9jdXMsIC5kcm9wZG93bkxvZ2luOmhvdmVyLCAuZHJvcGRvd25Mb2dpbjpmb2N1cywgLmxvZ291dExpbms6aG92ZXIsIC5sb2dvdXRMaW5rOmZvY3VzLCAuZHJvcGRvd25Mb2dvdXQ6aG92ZXIsIC5kcm9wZG93bkxvZ291dDpmb2N1cyB7XG4gIGNvbG9yOiB2YXIoLS1kcy1oZWFkZXItaWNvbi1jb2xvci1ob3Zlcik7XG59XG4uZHJvcGRvd25Mb2dpbjpub3QoOmZvY3VzLXZpc2libGUpLmFjdGl2ZSwgLmRyb3Bkb3duTG9naW46bm90KDpmb2N1cy12aXNpYmxlKTphY3RpdmUsIC5kcm9wZG93bkxvZ2luOm5vdCg6Zm9jdXMtdmlzaWJsZSkuYWN0aXZlOmZvY3VzLCAuZHJvcGRvd25Mb2dpbjpub3QoOmZvY3VzLXZpc2libGUpOmFjdGl2ZTpmb2N1cywgLmRyb3Bkb3duTG9nb3V0Om5vdCg6Zm9jdXMtdmlzaWJsZSkuYWN0aXZlLCAuZHJvcGRvd25Mb2dvdXQ6bm90KDpmb2N1cy12aXNpYmxlKTphY3RpdmUsIC5kcm9wZG93bkxvZ291dDpub3QoOmZvY3VzLXZpc2libGUpLmFjdGl2ZTpmb2N1cywgLmRyb3Bkb3duTG9nb3V0Om5vdCg6Zm9jdXMtdmlzaWJsZSk6YWN0aXZlOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogdW5zZXQ7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"],
      data: {
        animation: [_app_shared_animations_fade__WEBPACK_IMPORTED_MODULE_2__.fadeInOut, _app_shared_animations_fade__WEBPACK_IMPORTED_MODULE_2__.fadeOut]
      }
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_themes_custom_app_shared_auth-nav-menu_auth-nav-menu_component_ts.js.map