"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_themes_custom_app_navbar_navbar_component_ts"],{

/***/ 77069:
/*!**********************************************************!*\
  !*** ./src/themes/custom/app/navbar/navbar.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavbarComponent: () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 49966);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var src_app_shared_auth_nav_menu_user_menu_themed_user_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/auth-nav-menu/user-menu/themed-user-menu.component */ 28619);
/* harmony import */ var _app_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../app/navbar/navbar.component */ 67454);
/* harmony import */ var _app_shared_animations_slide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app/shared/animations/slide */ 621);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 90310);









const _c0 = a0 => ({
  "open": a0
});
function NavbarComponent_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "ds-user-menu", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("inExpandableNavbar", true);
  }
}
function NavbarComponent_ng_container_13_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0);
  }
}
function NavbarComponent_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, NavbarComponent_ng_container_13_ng_container_1_Template, 1, 0, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const section_r1 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngComponentOutlet", (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 2, ctx_r1.sectionMap$).get(section_r1.id)) == null ? null : tmp_2_0.component)("ngComponentOutletInjector", (tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 4, ctx_r1.sectionMap$).get(section_r1.id)) == null ? null : tmp_3_0.injector);
  }
}
/**
 * Component representing the public navbar
 */
class NavbarComponent extends _app_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__.NavbarComponent {
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵNavbarComponent_BaseFactory;
      return function NavbarComponent_Factory(t) {
        return (ɵNavbarComponent_BaseFactory || (ɵNavbarComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](NavbarComponent)))(t || NavbarComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: NavbarComponent,
      selectors: [["ds-themed-navbar"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
      decls: 15,
      vars: 25,
      consts: [["role", "navigation", "id", "main-navbar", 1, "navbar", "navbar-light", "navbar-expand-md", "px-md-0", "pt-md-0", "pt-3", "navbar-container", 3, "ngClass"], [1, "navbar-inner-container", "w-100"], [1, "w-100"], ["id", "collapsingNav"], [4, "ngIf"], [1, "navbar-nav", "align-items-md-center", "mr-auto", "shadow-none", "gapx-3"], [4, "ngFor", "ngForOf"], [3, "inExpandableNavbar"], [4, "ngComponentOutlet", "ngComponentOutletInjector"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nav", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 2)(8, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, NavbarComponent_ng_container_9_Template, 2, 1, "ng-container", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, NavbarComponent_ng_container_13_Template, 4, 6, "ng-container", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](14, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](23, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 7, ctx.menuCollapsed) !== true))("@slideMobileNav", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 9, ctx.windowService.isXsOrSm()) !== true ? "default" : _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 11, ctx.menuCollapsed) ? "collapsed" : "expanded");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 13, "nav.main.description"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("container", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 15, ctx.isMobile$) !== true);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](10, 17, ctx.isMobile$) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](11, 19, ctx.isAuthenticated$));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](14, 21, ctx.sections));
        }
      },
      dependencies: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbDropdownModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbNavbar, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, src_app_shared_auth_nav_menu_user_menu_themed_user_menu_component__WEBPACK_IMPORTED_MODULE_0__.ThemedUserMenuComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgFor, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgComponentOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%] {\n  --ds-expandable-navbar-height: auto;\n  \n\n  \n\n}\n\n[_nghost-%COMP%]   nav.navbar[_ngcontent-%COMP%] {\n  background-color: var(--ds-navbar-bg);\n  align-items: baseline;\n  padding: 0;\n}\n\n@media screen and (max-width: 767.98px) {\n  [_nghost-%COMP%]   .navbar[_ngcontent-%COMP%] {\n    width: 100vw;\n    background-color: var(--bs-white);\n    position: absolute;\n    overflow: hidden;\n    height: 0;\n    z-index: var(--ds-nav-z-index);\n  }\n  [_nghost-%COMP%]   .navbar.open[_ngcontent-%COMP%] {\n    height: auto;\n    min-height: 100vh;\n    border-bottom: 1px var(--ds-header-navbar-border-bottom-color) solid;\n  }\n}\n@media screen and (min-width: 768px) {\n  [_nghost-%COMP%]   .reset-padding-md[_ngcontent-%COMP%] {\n    margin-left: calc(var(--bs-spacer) / -1);\n    margin-right: calc(var(--bs-spacer) / -1);\n  }\n}\n@media screen and (max-width: 767.98px) {\n  [_nghost-%COMP%]   .navbar-expand-md.navbar-container[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n  [_nghost-%COMP%]   .navbar-expand-md.navbar-container[_ngcontent-%COMP%]    > .navbar-inner-container[_ngcontent-%COMP%] {\n    padding: 0 var(--bs-spacer);\n  }\n}\n[_nghost-%COMP%]   #main-navbar[_ngcontent-%COMP%]     .ds-menu-item, [_nghost-%COMP%]   #main-navbar[_ngcontent-%COMP%]     .ds-menu-toggler-wrapper {\n  white-space: nowrap;\n  text-decoration: none;\n}\n\n[_nghost-%COMP%]   #main-navbar[_ngcontent-%COMP%]     .dropdown-menu {\n  padding: 0.5rem !important;\n}\n\n[_nghost-%COMP%]   #main-navbar[_ngcontent-%COMP%]     .ds-menu-item {\n  display: block;\n  color: var(--ds-navbar-link-color);\n  padding: 0.5rem 0;\n}\n\n[_nghost-%COMP%]   #main-navbar[_ngcontent-%COMP%]     .ds-menu-item:hover, [_nghost-%COMP%]   #main-navbar[_ngcontent-%COMP%]     .ds-menu-item:focus {\n  color: var(--ds-navbar-link-color-hover);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBO0VBQ0UsbUNBQUE7RUFDQSwwQkFBQTtFQUNBLDZFQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxxQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtBQUVGOztBQUFBO0VBQ0U7SUFDRSxZQUFBO0lBQ0EsaUNBQUE7SUFDQSxrQkFBQTtJQUNBLGdCQUFBO0lBQ0EsU0FBQTtJQUNBLDhCQUFBO0VBR0Y7RUFEQTtJQUNFLFlBQUE7SUFDQSxpQkFBQTtJQUNBLG9FQUFBO0VBR0Y7QUFDRjtBQURBO0VBQ0U7SUFDRSx3Q0FBQTtJQUNBLHlDQUFBO0VBR0Y7QUFDRjtBQURBO0VBQ0U7SUFDRSxVQUFBO0VBR0Y7RUFEQTtJQUNFLDJCQUFBO0VBR0Y7QUFDRjtBQURBO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtBQUdGOztBQURBO0VBQ0UsMEJBQUE7QUFJRjs7QUFGQTtFQUNFLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLGlCQUFBO0FBS0Y7O0FBSEE7RUFDRSx3Q0FBQTtBQU1GIiwiZmlsZSI6Im5hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovXG46aG9zdCB7XG4gIC0tZHMtZXhwYW5kYWJsZS1uYXZiYXItaGVpZ2h0OiBhdXRvO1xuICAvKiogTW9iaWxlIG1lbnUgc3R5bGluZyAqKi9cbiAgLyogVE9ETyByZW1vdmUgd2hlbiBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvaXNzdWVzLzI0NzI2IGlzIGZpeGVkICovXG59XG46aG9zdCBuYXYubmF2YmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZHMtbmF2YmFyLWJnKTtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICBwYWRkaW5nOiAwO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcbiAgOmhvc3QgLm5hdmJhciB7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJzLXdoaXRlKTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBoZWlnaHQ6IDA7XG4gICAgei1pbmRleDogdmFyKC0tZHMtbmF2LXotaW5kZXgpO1xuICB9XG4gIDpob3N0IC5uYXZiYXIub3BlbiB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIGJvcmRlci1ib3R0b206IDFweCB2YXIoLS1kcy1oZWFkZXItbmF2YmFyLWJvcmRlci1ib3R0b20tY29sb3IpIHNvbGlkO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICA6aG9zdCAucmVzZXQtcGFkZGluZy1tZCB7XG4gICAgbWFyZ2luLWxlZnQ6IGNhbGModmFyKC0tYnMtc3BhY2VyKSAvIC0xKTtcbiAgICBtYXJnaW4tcmlnaHQ6IGNhbGModmFyKC0tYnMtc3BhY2VyKSAvIC0xKTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcbiAgOmhvc3QgLm5hdmJhci1leHBhbmQtbWQubmF2YmFyLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuICA6aG9zdCAubmF2YmFyLWV4cGFuZC1tZC5uYXZiYXItY29udGFpbmVyID4gLm5hdmJhci1pbm5lci1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDAgdmFyKC0tYnMtc3BhY2VyKTtcbiAgfVxufVxuOmhvc3QgI21haW4tbmF2YmFyIDo6bmctZGVlcCAuZHMtbWVudS1pdGVtLCA6aG9zdCAjbWFpbi1uYXZiYXIgOjpuZy1kZWVwIC5kcy1tZW51LXRvZ2dsZXItd3JhcHBlciB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbjpob3N0ICNtYWluLW5hdmJhciA6Om5nLWRlZXAgLmRyb3Bkb3duLW1lbnUge1xuICBwYWRkaW5nOiAwLjVyZW0gIWltcG9ydGFudDtcbn1cbjpob3N0ICNtYWluLW5hdmJhciA6Om5nLWRlZXAgLmRzLW1lbnUtaXRlbSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogdmFyKC0tZHMtbmF2YmFyLWxpbmstY29sb3IpO1xuICBwYWRkaW5nOiAwLjVyZW0gMDtcbn1cbjpob3N0ICNtYWluLW5hdmJhciA6Om5nLWRlZXAgLmRzLW1lbnUtaXRlbTpob3ZlciwgOmhvc3QgI21haW4tbmF2YmFyIDo6bmctZGVlcCAuZHMtbWVudS1pdGVtOmZvY3VzIHtcbiAgY29sb3I6IHZhcigtLWRzLW5hdmJhci1saW5rLWNvbG9yLWhvdmVyKTtcbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBO0VBQ0UsbUNBQUE7RUFDQSwwQkFBQTtFQUNBLDZFQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxxQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtBQUVGOztBQUFBO0VBQ0U7SUFDRSxZQUFBO0lBQ0EsaUNBQUE7SUFDQSxrQkFBQTtJQUNBLGdCQUFBO0lBQ0EsU0FBQTtJQUNBLDhCQUFBO0VBR0Y7RUFEQTtJQUNFLFlBQUE7SUFDQSxpQkFBQTtJQUNBLG9FQUFBO0VBR0Y7QUFDRjtBQURBO0VBQ0U7SUFDRSx3Q0FBQTtJQUNBLHlDQUFBO0VBR0Y7QUFDRjtBQURBO0VBQ0U7SUFDRSxVQUFBO0VBR0Y7RUFEQTtJQUNFLDJCQUFBO0VBR0Y7QUFDRjtBQURBO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtBQUdGOztBQURBO0VBQ0UsMEJBQUE7QUFJRjs7QUFGQTtFQUNFLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLGlCQUFBO0FBS0Y7O0FBSEE7RUFDRSx3Q0FBQTtBQU1GO0FBQ0Esb29HQUFvb0ciLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqL1xuOmhvc3Qge1xuICAtLWRzLWV4cGFuZGFibGUtbmF2YmFyLWhlaWdodDogYXV0bztcbiAgLyoqIE1vYmlsZSBtZW51IHN0eWxpbmcgKiovXG4gIC8qIFRPRE8gcmVtb3ZlIHdoZW4gaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2lzc3Vlcy8yNDcyNiBpcyBmaXhlZCAqL1xufVxuOmhvc3QgbmF2Lm5hdmJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRzLW5hdmJhci1iZyk7XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgcGFkZGluZzogMDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XG4gIDpob3N0IC5uYXZiYXIge1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1icy13aGl0ZSk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgaGVpZ2h0OiAwO1xuICAgIHotaW5kZXg6IHZhcigtLWRzLW5hdi16LWluZGV4KTtcbiAgfVxuICA6aG9zdCAubmF2YmFyLm9wZW4ge1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggdmFyKC0tZHMtaGVhZGVyLW5hdmJhci1ib3JkZXItYm90dG9tLWNvbG9yKSBzb2xpZDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgOmhvc3QgLnJlc2V0LXBhZGRpbmctbWQge1xuICAgIG1hcmdpbi1sZWZ0OiBjYWxjKHZhcigtLWJzLXNwYWNlcikgLyAtMSk7XG4gICAgbWFyZ2luLXJpZ2h0OiBjYWxjKHZhcigtLWJzLXNwYWNlcikgLyAtMSk7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XG4gIDpob3N0IC5uYXZiYXItZXhwYW5kLW1kLm5hdmJhci1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbiAgOmhvc3QgLm5hdmJhci1leHBhbmQtbWQubmF2YmFyLWNvbnRhaW5lciA+IC5uYXZiYXItaW5uZXItY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAwIHZhcigtLWJzLXNwYWNlcik7XG4gIH1cbn1cbjpob3N0ICNtYWluLW5hdmJhciA6Om5nLWRlZXAgLmRzLW1lbnUtaXRlbSwgOmhvc3QgI21haW4tbmF2YmFyIDo6bmctZGVlcCAuZHMtbWVudS10b2dnbGVyLXdyYXBwZXIge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG46aG9zdCAjbWFpbi1uYXZiYXIgOjpuZy1kZWVwIC5kcm9wZG93bi1tZW51IHtcbiAgcGFkZGluZzogMC41cmVtICFpbXBvcnRhbnQ7XG59XG46aG9zdCAjbWFpbi1uYXZiYXIgOjpuZy1kZWVwIC5kcy1tZW51LWl0ZW0ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6IHZhcigtLWRzLW5hdmJhci1saW5rLWNvbG9yKTtcbiAgcGFkZGluZzogMC41cmVtIDA7XG59XG46aG9zdCAjbWFpbi1uYXZiYXIgOjpuZy1kZWVwIC5kcy1tZW51LWl0ZW06aG92ZXIsIDpob3N0ICNtYWluLW5hdmJhciA6Om5nLWRlZXAgLmRzLW1lbnUtaXRlbTpmb2N1cyB7XG4gIGNvbG9yOiB2YXIoLS1kcy1uYXZiYXItbGluay1jb2xvci1ob3Zlcik7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"],
      data: {
        animation: [_app_shared_animations_slide__WEBPACK_IMPORTED_MODULE_2__.slideMobileNav]
      }
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_themes_custom_app_navbar_navbar_component_ts.js.map