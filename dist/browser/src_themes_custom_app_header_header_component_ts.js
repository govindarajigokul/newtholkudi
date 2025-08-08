"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_themes_custom_app_header_header_component_ts"],{

/***/ 75559:
/*!**********************************************************!*\
  !*** ./src/themes/custom/app/header/header.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 49966);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var src_app_shared_lang_switch_themed_lang_switch_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/lang-switch/themed-lang-switch.component */ 28068);
/* harmony import */ var _app_header_context_help_toggle_context_help_toggle_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../app/header/context-help-toggle/context-help-toggle.component */ 20968);
/* harmony import */ var _app_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app/header/header.component */ 34912);
/* harmony import */ var _app_search_navbar_themed_search_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../app/search-navbar/themed-search-navbar.component */ 3224);
/* harmony import */ var _app_shared_auth_nav_menu_themed_auth_nav_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../app/shared/auth-nav-menu/themed-auth-nav-menu.component */ 44002);
/* harmony import */ var _app_shared_impersonate_navbar_impersonate_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../app/shared/impersonate-navbar/impersonate-navbar.component */ 34458);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 90310);













function HeaderComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 6)(1, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function HeaderComponent_div_12_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.toggleNavbar());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "nav.toggle"));
  }
}
/**
 * Represents the header with the logo and simple navigation
 */
class HeaderComponent extends _app_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent {
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵHeaderComponent_BaseFactory;
      return function HeaderComponent_Factory(t) {
        return (ɵHeaderComponent_BaseFactory || (ɵHeaderComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetInheritedFactory"](HeaderComponent)))(t || HeaderComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["ds-themed-header"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵStandaloneFeature"]],
      decls: 14,
      vars: 8,
      consts: [[1, "container"], [1, "d-flex", "flex-row", "justify-content-between"], ["routerLink", "/home", 1, "navbar-brand", "my-2"], [1, "header-logo", 3, "src", "alt"], ["role", "navigation", 1, "navbar", "navbar-light", "navbar-expand-md", "flex-shrink-0", "px-0"], ["class", "pl-2", 4, "ngIf"], [1, "pl-2"], ["type", "button", "aria-controls", "collapsingNav", "aria-expanded", "false", 1, "navbar-toggler", "px-0", 3, "click"], ["aria-hidden", "true", 1, "fas", "fa-bars", "fa-fw", "toggler-icon"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "header")(1, "div", 0)(2, "div", 1)(3, "a", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "img", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "nav", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](6, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "ds-search-navbar")(8, "ds-lang-switch")(9, "ds-context-help-toggle")(10, "ds-auth-nav-menu")(11, "ds-impersonate-navbar");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, HeaderComponent_div_12_Template, 4, 3, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](13, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx.currentLogo.src, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"])("alt", ctx.currentLogo.alt);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](6, 4, "nav.user.description"));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](13, 6, ctx.isMobile$));
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, src_app_shared_lang_switch_themed_lang_switch_component__WEBPACK_IMPORTED_MODULE_0__.ThemedLangSwitchComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbDropdownModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbNavbar, _app_search_navbar_themed_search_navbar_component__WEBPACK_IMPORTED_MODULE_3__.ThemedSearchNavbarComponent, _app_header_context_help_toggle_context_help_toggle_component__WEBPACK_IMPORTED_MODULE_1__.ContextHelpToggleComponent, _app_shared_auth_nav_menu_themed_auth_nav_menu_component__WEBPACK_IMPORTED_MODULE_4__.ThemedAuthNavMenuComponent, _app_shared_impersonate_navbar_impersonate_navbar_component__WEBPACK_IMPORTED_MODULE_5__.ImpersonateNavbarComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   header[_ngcontent-%COMP%] {\n  background-color: var(--ds-header-bg);\n}\n\n[_nghost-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], [_nghost-%COMP%]   .header-logo[_ngcontent-%COMP%] {\n  max-height: var(--ds-header-logo-height);\n  max-width: 200px;\n  width: auto;\n  height: auto;\n}\n\n@media (max-width: 767.98px) {\n  [_nghost-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], [_nghost-%COMP%]   .header-logo[_ngcontent-%COMP%] {\n    max-width: 150px;\n    max-height: 40px;\n  }\n}\n[_nghost-%COMP%]   .navbar-toggler[_ngcontent-%COMP%] {\n  border: none;\n  color: var(--ds-header-icon-color);\n}\n\n[_nghost-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]:hover, [_nghost-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]:focus {\n  color: var(--ds-header-icon-color-hover);\n}\n\n[_nghost-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]   .toggler-icon[_ngcontent-%COMP%] {\n  width: 1.5em;\n  height: 1.5em;\n  line-height: 1.5;\n}\n\n[_nghost-%COMP%]   .navbar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: calc(var(--bs-spacer) / 3);\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBO0VBQ0UscUNBQUE7QUFDRjs7QUFDQTs7RUFFRSx3Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFFRjs7QUFBQTtFQUNFOztJQUVFLGdCQUFBO0lBQ0EsZ0JBQUE7RUFHRjtBQUNGO0FBREE7RUFDRSxZQUFBO0VBQ0Esa0NBQUE7QUFHRjs7QUFEQTtFQUNFLHdDQUFBO0FBSUY7O0FBRkE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBS0Y7O0FBSEE7RUFDRSxhQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQkFBQTtBQU1GIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovXG46aG9zdCBoZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kcy1oZWFkZXItYmcpO1xufVxuOmhvc3QgLm5hdmJhci1icmFuZCBpbWcsXG46aG9zdCAuaGVhZGVyLWxvZ28ge1xuICBtYXgtaGVpZ2h0OiB2YXIoLS1kcy1oZWFkZXItbG9nby1oZWlnaHQpO1xuICBtYXgtd2lkdGg6IDIwMHB4O1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XG4gIDpob3N0IC5uYXZiYXItYnJhbmQgaW1nLFxuICA6aG9zdCAuaGVhZGVyLWxvZ28ge1xuICAgIG1heC13aWR0aDogMTUwcHg7XG4gICAgbWF4LWhlaWdodDogNDBweDtcbiAgfVxufVxuOmhvc3QgLm5hdmJhci10b2dnbGVyIHtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogdmFyKC0tZHMtaGVhZGVyLWljb24tY29sb3IpO1xufVxuOmhvc3QgLm5hdmJhci10b2dnbGVyOmhvdmVyLCA6aG9zdCAubmF2YmFyLXRvZ2dsZXI6Zm9jdXMge1xuICBjb2xvcjogdmFyKC0tZHMtaGVhZGVyLWljb24tY29sb3ItaG92ZXIpO1xufVxuOmhvc3QgLm5hdmJhci10b2dnbGVyIC50b2dnbGVyLWljb24ge1xuICB3aWR0aDogMS41ZW07XG4gIGhlaWdodDogMS41ZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG46aG9zdCAubmF2YmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiBjYWxjKHZhcigtLWJzLXNwYWNlcikgLyAzKTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBO0VBQ0UscUNBQUE7QUFDRjs7QUFDQTs7RUFFRSx3Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFFRjs7QUFBQTtFQUNFOztJQUVFLGdCQUFBO0lBQ0EsZ0JBQUE7RUFHRjtBQUNGO0FBREE7RUFDRSxZQUFBO0VBQ0Esa0NBQUE7QUFHRjs7QUFEQTtFQUNFLHdDQUFBO0FBSUY7O0FBRkE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBS0Y7O0FBSEE7RUFDRSxhQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQkFBQTtBQU1GO0FBQ0EsNDFEQUE0MUQiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqL1xuOmhvc3QgaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZHMtaGVhZGVyLWJnKTtcbn1cbjpob3N0IC5uYXZiYXItYnJhbmQgaW1nLFxuOmhvc3QgLmhlYWRlci1sb2dvIHtcbiAgbWF4LWhlaWdodDogdmFyKC0tZHMtaGVhZGVyLWxvZ28taGVpZ2h0KTtcbiAgbWF4LXdpZHRoOiAyMDBweDtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogYXV0bztcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjcuOThweCkge1xuICA6aG9zdCAubmF2YmFyLWJyYW5kIGltZyxcbiAgOmhvc3QgLmhlYWRlci1sb2dvIHtcbiAgICBtYXgtd2lkdGg6IDE1MHB4O1xuICAgIG1heC1oZWlnaHQ6IDQwcHg7XG4gIH1cbn1cbjpob3N0IC5uYXZiYXItdG9nZ2xlciB7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHZhcigtLWRzLWhlYWRlci1pY29uLWNvbG9yKTtcbn1cbjpob3N0IC5uYXZiYXItdG9nZ2xlcjpob3ZlciwgOmhvc3QgLm5hdmJhci10b2dnbGVyOmZvY3VzIHtcbiAgY29sb3I6IHZhcigtLWRzLWhlYWRlci1pY29uLWNvbG9yLWhvdmVyKTtcbn1cbjpob3N0IC5uYXZiYXItdG9nZ2xlciAudG9nZ2xlci1pY29uIHtcbiAgd2lkdGg6IDEuNWVtO1xuICBoZWlnaHQ6IDEuNWVtO1xuICBsaW5lLWhlaWdodDogMS41O1xufVxuOmhvc3QgLm5hdmJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogY2FsYyh2YXIoLS1icy1zcGFjZXIpIC8gMyk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_themes_custom_app_header_header_component_ts.js.map