"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_themes_custom_app_admin_admin-sidebar_admin-sidebar_component_ts"],{

/***/ 87323:
/*!******************************************************************************!*\
  !*** ./src/themes/custom/app/admin/admin-sidebar/admin-sidebar.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminSidebarComponent: () => (/* binding */ AdminSidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 49966);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var _app_admin_admin_sidebar_admin_sidebar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../app/admin/admin-sidebar/admin-sidebar.component */ 43832);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 90310);







const _c0 = (a0, a1, a2) => ({
  "expanded": a0,
  "collapsed": a1,
  "transitioning": a2
});
const _c1 = (a0, a1) => ({
  collapsedWidth: a0,
  expandedWidth: a1
});
const _c2 = (a0, a1) => ({
  value: a0,
  params: a1
});
function AdminSidebarComponent_nav_0_ng_container_18_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
function AdminSidebarComponent_nav_0_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AdminSidebarComponent_nav_0_ng_container_18_ng_container_1_Template, 1, 0, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const section_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngComponentOutlet", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, ctx_r1.sectionMap$).get(section_r3.id).component)("ngComponentOutletInjector", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, ctx_r1.sectionMap$).get(section_r3.id).injector);
  }
}
function AdminSidebarComponent_nav_0_i_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, "menu.section.icon.pin"));
  }
}
function AdminSidebarComponent_nav_0_i_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, "menu.section.icon.unpin"));
  }
}
function AdminSidebarComponent_nav_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("@slideSidebar.done", function AdminSidebarComponent_nav_0_Template_nav_animation_slideSidebar_done_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.finishSlide($event));
    })("@slideSidebar.start", function AdminSidebarComponent_nav_0_Template_nav_animation_slideSidebar_start_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.startSlide($event));
    })("mouseenter", function AdminSidebarComponent_nav_0_Template_nav_mouseenter_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.handleMouseEnter($event));
    })("mouseleave", function AdminSidebarComponent_nav_0_Template_nav_mouseleave_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.handleMouseLeave($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 2)(6, "div", 3)(7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6)(11, "div", 7)(12, "h4", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 9)(16, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, AdminSidebarComponent_nav_0_ng_container_18_Template, 4, 6, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 12)(21, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminSidebarComponent_nav_0_Template_a_click_21_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.toggle($event));
    })("keyup.space", function AdminSidebarComponent_nav_0_Template_a_keyup_space_21_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.toggle($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, AdminSidebarComponent_nav_0_i_23_Template, 2, 3, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](24, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, AdminSidebarComponent_nav_0_i_25_Template, 2, 3, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](26, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 6)(28, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](30, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](31, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](34, _c0, ctx_r1.sidebarOpen, ctx_r1.sidebarClosed, ctx_r1.sidebarTransitioning))("@slideSidebar", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](41, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 10, ctx_r1.sidebarExpanded) !== true ? "collapsed" : "expanded", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](38, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 12, ctx_r1.collapsedSidebarWidth$), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 14, ctx_r1.expandedSidebarWidth$))));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 16, "menu.header.nav.description"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 18, "menu.header.image.logo"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 20, "menu.header.admin"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 22, "menu.header.admin.description"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](19, 24, ctx_r1.sections));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](24, 26, ctx_r1.menuCollapsed));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](26, 28, ctx_r1.menuCollapsed) !== true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](31, 32, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](30, 30, ctx_r1.menuCollapsed) ? "menu.section.pin" : "menu.section.unpin"), " ");
  }
}
/**
 * Component representing the admin sidebar
 */
class AdminSidebarComponent extends _app_admin_admin_sidebar_admin_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.AdminSidebarComponent {
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵAdminSidebarComponent_BaseFactory;
      return function AdminSidebarComponent_Factory(t) {
        return (ɵAdminSidebarComponent_BaseFactory || (ɵAdminSidebarComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](AdminSidebarComponent)))(t || AdminSidebarComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AdminSidebarComponent,
      selectors: [["ds-themed-admin-sidebar"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 3,
      consts: [["class", "navbar navbar-dark p-0 vh-100", "id", "admin-sidebar", 3, "ngClass", "mouseenter", "mouseleave", 4, "ngIf"], ["id", "admin-sidebar", 1, "navbar", "navbar-dark", "p-0", "vh-100", 3, "mouseenter", "mouseleave", "ngClass"], ["id", "sidebar-header-container", "aria-hidden", "true", 1, "sidebar-full-width-container"], [1, "sidebar-section-wrapper"], [1, "sidebar-fixed-element-wrapper"], ["id", "admin-sidebar-logo", "src", "assets/images/dspace-logo-mini.svg", "aria-hidden", "true", 3, "alt"], [1, "sidebar-collapsible-element-outer-wrapper"], [1, "sidebar-collapsible-element-inner-wrapper", "sidebar-item"], [1, "my-1"], ["id", "sidebar-top-level-items-container", 1, "sidebar-full-width-container"], ["id", "sidebar-top-level-items", "role", "menubar", 1, "sidebar-full-width-container"], [4, "ngFor", "ngForOf"], ["id", "sidebar-collapse-toggle-container", 1, "sidebar-full-width-container"], ["id", "sidebar-collapse-toggle", "href", "javascript:void(0);", 1, "sidebar-section-wrapper", "sidebar-full-width-container", 3, "click", "keyup.space"], ["class", "fas fa-fw fa-angle-double-right", 3, "title", 4, "ngIf"], ["class", "fas fa-fw fa-angle-double-left", 3, "title", 4, "ngIf"], [4, "ngComponentOutlet", "ngComponentOutletInjector"], [1, "fas", "fa-fw", "fa-angle-double-right", 3, "title"], [1, "fas", "fa-fw", "fa-angle-double-left", 3, "title"]],
      template: function AdminSidebarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, AdminSidebarComponent_nav_0_Template, 32, 44, "nav", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx.menuVisible));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbDropdownModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbNavbar, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgFor, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgComponentOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_2__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe],
      styles: ["@charset \"UTF-8\";\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%] {\n  \n\n  \n\n\n\n\n\n\n\n\n\n  position: fixed;\n  left: 0;\n  top: 0;\n  z-index: var(--ds-sidebar-z-index);\n  \n\n}\n\n[_nghost-%COMP%]   nav#admin-sidebar[_ngcontent-%COMP%] {\n  max-width: var(--ds-admin-sidebar-fixed-element-width);\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n}\n\n[_nghost-%COMP%]   nav#admin-sidebar[_ngcontent-%COMP%]   div#sidebar-top-level-items-container[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\n[_nghost-%COMP%]   nav#admin-sidebar[_ngcontent-%COMP%]   div#sidebar-top-level-items-container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: var(--ds-dark-scrollbar-width);\n  height: 3px;\n}\n\n[_nghost-%COMP%]   nav#admin-sidebar[_ngcontent-%COMP%]   div#sidebar-top-level-items-container[_ngcontent-%COMP%]::-webkit-scrollbar-button {\n  background-color: var(--ds-dark-scrollbar-bg);\n}\n\n[_nghost-%COMP%]   nav#admin-sidebar[_ngcontent-%COMP%]   div#sidebar-top-level-items-container[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background-color: var(--ds-dark-scrollbar-alt-bg);\n}\n\n[_nghost-%COMP%]   nav#admin-sidebar[_ngcontent-%COMP%]   div#sidebar-top-level-items-container[_ngcontent-%COMP%]::-webkit-scrollbar-track-piece {\n  background-color: var(--ds-dark-scrollbar-bg);\n}\n\n[_nghost-%COMP%]   nav#admin-sidebar[_ngcontent-%COMP%]   div#sidebar-top-level-items-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  height: 50px;\n  background-color: var(--ds-dark-scrollbar-fg);\n  border-radius: 3px;\n}\n\n[_nghost-%COMP%]   nav#admin-sidebar[_ngcontent-%COMP%]   div#sidebar-top-level-items-container[_ngcontent-%COMP%]::-webkit-scrollbar-corner {\n  background-color: var(--ds-dark-scrollbar-alt-bg);\n}\n\n[_nghost-%COMP%]   nav#admin-sidebar[_ngcontent-%COMP%]   div#sidebar-top-level-items-container[_ngcontent-%COMP%]::-webkit-resizer {\n  background-color: var(--ds-dark-scrollbar-bg);\n}\n\n[_nghost-%COMP%]   nav#admin-sidebar[_ngcontent-%COMP%]   img#admin-sidebar-logo[_ngcontent-%COMP%] {\n  height: var(--ds-admin-sidebar-logo-height);\n}\n\n[_nghost-%COMP%]   nav#admin-sidebar[_ngcontent-%COMP%]     .sidebar-full-width-container {\n  width: 100%;\n  padding-left: 0;\n  padding-right: 0;\n  margin-left: 0;\n  margin-right: 0;\n}\n\n[_nghost-%COMP%]   nav#admin-sidebar[_ngcontent-%COMP%]     .sidebar-item {\n  padding-top: var(--ds-admin-sidebar-item-padding);\n  padding-bottom: var(--ds-admin-sidebar-item-padding);\n}\n\n[_nghost-%COMP%]   nav#admin-sidebar[_ngcontent-%COMP%]     .sidebar-section-wrapper {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  align-items: stretch;\n}\n\n[_nghost-%COMP%]   nav#admin-sidebar[_ngcontent-%COMP%]     .sidebar-section-wrapper > .sidebar-fixed-element-wrapper {\n  min-width: var(--ds-admin-sidebar-fixed-element-width);\n  flex: 1 1 auto;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n\n[_nghost-%COMP%]   nav#admin-sidebar[_ngcontent-%COMP%]     .sidebar-section-wrapper > .sidebar-collapsible-element-outer-wrapper {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n  max-width: calc(100% - var(--ds-admin-sidebar-fixed-element-width));\n  padding-left: var(--ds-dark-scrollbar-width);\n  overflow-x: hidden;\n}\n\n[_nghost-%COMP%]   nav#admin-sidebar[_ngcontent-%COMP%]     .sidebar-section-wrapper > .sidebar-collapsible-element-outer-wrapper > .sidebar-collapsible-element-inner-wrapper {\n  min-width: calc(var(--ds-admin-sidebar-collapsible-element-width) - var(--ds-dark-scrollbar-width));\n  height: 100%;\n  padding-right: var(--ds-admin-sidebar-item-padding);\n}\n\n[_nghost-%COMP%]   nav#admin-sidebar[_ngcontent-%COMP%] {\n  background-color: var(--ds-admin-sidebar-bg);\n}\n\n[_nghost-%COMP%]   nav#admin-sidebar[_ngcontent-%COMP%]     {\n  color: white;\n}\n\n[_nghost-%COMP%]   nav#admin-sidebar[_ngcontent-%COMP%]     a {\n  color: var(--ds-admin-sidebar-link-color);\n  text-decoration: none;\n}\n\n[_nghost-%COMP%]   nav#admin-sidebar[_ngcontent-%COMP%]     a:hover, [_nghost-%COMP%]   nav#admin-sidebar[_ngcontent-%COMP%]     a:focus {\n  color: var(--ds-admin-sidebar-link-hover-color);\n}\n\n[_nghost-%COMP%]   nav#admin-sidebar[_ngcontent-%COMP%]   div#sidebar-header-container[_ngcontent-%COMP%] {\n  background-color: var(--ds-admin-sidebar-header-bg);\n}\n\n[_nghost-%COMP%]   nav#admin-sidebar[_ngcontent-%COMP%]   div#sidebar-header-container[_ngcontent-%COMP%]   .sidebar-fixed-element-wrapper[_ngcontent-%COMP%] {\n  background-color: var(--ds-admin-sidebar-header-bg);\n}\n\n  .browser-firefox-windows {\n  --ds-dark-scrollbar-width: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLXNpZGViYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQ2hCLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBO0FBQ0E7RUFDRSw4QkFBQTtFQUNBOzs7Ozs7OztJQUFBO0VBU0EsZUFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUNBO0VBQ0Usc0RBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBQUVGOztBQUFBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFHRjs7QUFEQTtFQUNFLHFDQUFBO0VBQ0EsV0FBQTtBQUlGOztBQUZBO0VBQ0UsNkNBQUE7QUFLRjs7QUFIQTtFQUNFLGlEQUFBO0FBTUY7O0FBSkE7RUFDRSw2Q0FBQTtBQU9GOztBQUxBO0VBQ0UsWUFBQTtFQUNBLDZDQUFBO0VBQ0Esa0JBQUE7QUFRRjs7QUFOQTtFQUNFLGlEQUFBO0FBU0Y7O0FBUEE7RUFDRSw2Q0FBQTtBQVVGOztBQVJBO0VBQ0UsMkNBQUE7QUFXRjs7QUFUQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQVlGOztBQVZBO0VBQ0UsaURBQUE7RUFDQSxvREFBQTtBQWFGOztBQVhBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQWNGOztBQVpBO0VBQ0Usc0RBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQWVGOztBQWJBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLG1FQUFBO0VBQ0EsNENBQUE7RUFDQSxrQkFBQTtBQWdCRjs7QUFkQTtFQUNFLG1HQUFBO0VBQ0EsWUFBQTtFQUNBLG1EQUFBO0FBaUJGOztBQWZBO0VBQ0UsNENBQUE7QUFrQkY7O0FBaEJBO0VBQ0UsWUFBQTtBQW1CRjs7QUFqQkE7RUFDRSx5Q0FBQTtFQUNBLHFCQUFBO0FBb0JGOztBQWxCQTtFQUNFLCtDQUFBO0FBcUJGOztBQW5CQTtFQUNFLG1EQUFBO0FBc0JGOztBQXBCQTtFQUNFLG1EQUFBO0FBdUJGOztBQXJCQTtFQUNFLCtCQUFBO0FBd0JGIiwiZmlsZSI6ImFkbWluLXNpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqL1xuOmhvc3Qge1xuICAvKiBTSURFQkFSIFNJWkUgQU5EIFBPU0lUSU9OICovXG4gIC8qIFNpZGViYXIgaGllcmFyY2h5OlxuICAgwqcgbmF2XG4gICAgIMKnIC5zaWRlYmFyLWZ1bGwtd2lkdGgtY29udGFpbmVyIChhbnkgT1BUSU9OQUwgZnVsbCB3aWR0aCBlbGVtZW50IHdpdGggbm8gaG9yaXpvbnRhbCBtYXJnaW4gb3IgcGFkZGluZyAtIGl0IGNhbiBiZSBuZXN0ZWQpXG4gICAgICAgwqcgLnNpZGViYXItc2VjdGlvbi13cmFwcGVyXG4gICAgICAgICDCpyAuc2lkZWJhci1maXhlZC1lbGVtZW50LXdyYXBwZXJcbiAgICAgICAgIMKnIC5zaWRlYmFyLWNvbGxhcHNpYmxlLWVsZW1lbnQtb3V0ZXItd3JhcHBlclxuICAgICAgICAgICDCpyAuc2lkZWJhci1jb2xsYXBzaWJsZS1lbGVtZW50LWlubmVyLXdyYXBwZXJcbiAgICAgICAgICAgICDCpyAuc2lkZWJhci1pdGVtXG4gICAqL1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgei1pbmRleDogdmFyKC0tZHMtc2lkZWJhci16LWluZGV4KTtcbiAgLyogU0lERUJBUiBTVFlMRSAqL1xufVxuOmhvc3QgbmF2I2FkbWluLXNpZGViYXIge1xuICBtYXgtd2lkdGg6IHZhcigtLWRzLWFkbWluLXNpZGViYXItZml4ZWQtZWxlbWVudC13aWR0aCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXgtd3JhcDogbm93cmFwO1xufVxuOmhvc3QgbmF2I2FkbWluLXNpZGViYXIgZGl2I3NpZGViYXItdG9wLWxldmVsLWl0ZW1zLWNvbnRhaW5lciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG46aG9zdCBuYXYjYWRtaW4tc2lkZWJhciBkaXYjc2lkZWJhci10b3AtbGV2ZWwtaXRlbXMtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiB2YXIoLS1kcy1kYXJrLXNjcm9sbGJhci13aWR0aCk7XG4gIGhlaWdodDogM3B4O1xufVxuOmhvc3QgbmF2I2FkbWluLXNpZGViYXIgZGl2I3NpZGViYXItdG9wLWxldmVsLWl0ZW1zLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZHMtZGFyay1zY3JvbGxiYXItYmcpO1xufVxuOmhvc3QgbmF2I2FkbWluLXNpZGViYXIgZGl2I3NpZGViYXItdG9wLWxldmVsLWl0ZW1zLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kcy1kYXJrLXNjcm9sbGJhci1hbHQtYmcpO1xufVxuOmhvc3QgbmF2I2FkbWluLXNpZGViYXIgZGl2I3NpZGViYXItdG9wLWxldmVsLWl0ZW1zLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2stcGllY2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kcy1kYXJrLXNjcm9sbGJhci1iZyk7XG59XG46aG9zdCBuYXYjYWRtaW4tc2lkZWJhciBkaXYjc2lkZWJhci10b3AtbGV2ZWwtaXRlbXMtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZHMtZGFyay1zY3JvbGxiYXItZmcpO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG46aG9zdCBuYXYjYWRtaW4tc2lkZWJhciBkaXYjc2lkZWJhci10b3AtbGV2ZWwtaXRlbXMtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci1jb3JuZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kcy1kYXJrLXNjcm9sbGJhci1hbHQtYmcpO1xufVxuOmhvc3QgbmF2I2FkbWluLXNpZGViYXIgZGl2I3NpZGViYXItdG9wLWxldmVsLWl0ZW1zLWNvbnRhaW5lcjo6LXdlYmtpdC1yZXNpemVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZHMtZGFyay1zY3JvbGxiYXItYmcpO1xufVxuOmhvc3QgbmF2I2FkbWluLXNpZGViYXIgaW1nI2FkbWluLXNpZGViYXItbG9nbyB7XG4gIGhlaWdodDogdmFyKC0tZHMtYWRtaW4tc2lkZWJhci1sb2dvLWhlaWdodCk7XG59XG46aG9zdCBuYXYjYWRtaW4tc2lkZWJhciA6Om5nLWRlZXAgLnNpZGViYXItZnVsbC13aWR0aC1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xuICBtYXJnaW4tbGVmdDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuOmhvc3QgbmF2I2FkbWluLXNpZGViYXIgOjpuZy1kZWVwIC5zaWRlYmFyLWl0ZW0ge1xuICBwYWRkaW5nLXRvcDogdmFyKC0tZHMtYWRtaW4tc2lkZWJhci1pdGVtLXBhZGRpbmcpO1xuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tZHMtYWRtaW4tc2lkZWJhci1pdGVtLXBhZGRpbmcpO1xufVxuOmhvc3QgbmF2I2FkbWluLXNpZGViYXIgOjpuZy1kZWVwIC5zaWRlYmFyLXNlY3Rpb24td3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbn1cbjpob3N0IG5hdiNhZG1pbi1zaWRlYmFyIDo6bmctZGVlcCAuc2lkZWJhci1zZWN0aW9uLXdyYXBwZXIgPiAuc2lkZWJhci1maXhlZC1lbGVtZW50LXdyYXBwZXIge1xuICBtaW4td2lkdGg6IHZhcigtLWRzLWFkbWluLXNpZGViYXItZml4ZWQtZWxlbWVudC13aWR0aCk7XG4gIGZsZXg6IDEgMSBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbjpob3N0IG5hdiNhZG1pbi1zaWRlYmFyIDo6bmctZGVlcCAuc2lkZWJhci1zZWN0aW9uLXdyYXBwZXIgPiAuc2lkZWJhci1jb2xsYXBzaWJsZS1lbGVtZW50LW91dGVyLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIG1heC13aWR0aDogY2FsYygxMDAlIC0gdmFyKC0tZHMtYWRtaW4tc2lkZWJhci1maXhlZC1lbGVtZW50LXdpZHRoKSk7XG4gIHBhZGRpbmctbGVmdDogdmFyKC0tZHMtZGFyay1zY3JvbGxiYXItd2lkdGgpO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG46aG9zdCBuYXYjYWRtaW4tc2lkZWJhciA6Om5nLWRlZXAgLnNpZGViYXItc2VjdGlvbi13cmFwcGVyID4gLnNpZGViYXItY29sbGFwc2libGUtZWxlbWVudC1vdXRlci13cmFwcGVyID4gLnNpZGViYXItY29sbGFwc2libGUtZWxlbWVudC1pbm5lci13cmFwcGVyIHtcbiAgbWluLXdpZHRoOiBjYWxjKHZhcigtLWRzLWFkbWluLXNpZGViYXItY29sbGFwc2libGUtZWxlbWVudC13aWR0aCkgLSB2YXIoLS1kcy1kYXJrLXNjcm9sbGJhci13aWR0aCkpO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmctcmlnaHQ6IHZhcigtLWRzLWFkbWluLXNpZGViYXItaXRlbS1wYWRkaW5nKTtcbn1cbjpob3N0IG5hdiNhZG1pbi1zaWRlYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZHMtYWRtaW4tc2lkZWJhci1iZyk7XG59XG46aG9zdCBuYXYjYWRtaW4tc2lkZWJhciA6Om5nLWRlZXAge1xuICBjb2xvcjogd2hpdGU7XG59XG46aG9zdCBuYXYjYWRtaW4tc2lkZWJhciA6Om5nLWRlZXAgYSB7XG4gIGNvbG9yOiB2YXIoLS1kcy1hZG1pbi1zaWRlYmFyLWxpbmstY29sb3IpO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG46aG9zdCBuYXYjYWRtaW4tc2lkZWJhciA6Om5nLWRlZXAgYTpob3ZlciwgOmhvc3QgbmF2I2FkbWluLXNpZGViYXIgOjpuZy1kZWVwIGE6Zm9jdXMge1xuICBjb2xvcjogdmFyKC0tZHMtYWRtaW4tc2lkZWJhci1saW5rLWhvdmVyLWNvbG9yKTtcbn1cbjpob3N0IG5hdiNhZG1pbi1zaWRlYmFyIGRpdiNzaWRlYmFyLWhlYWRlci1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kcy1hZG1pbi1zaWRlYmFyLWhlYWRlci1iZyk7XG59XG46aG9zdCBuYXYjYWRtaW4tc2lkZWJhciBkaXYjc2lkZWJhci1oZWFkZXItY29udGFpbmVyIC5zaWRlYmFyLWZpeGVkLWVsZW1lbnQtd3JhcHBlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRzLWFkbWluLXNpZGViYXItaGVhZGVyLWJnKTtcbn1cbjo6bmctZGVlcCAuYnJvd3Nlci1maXJlZm94LXdpbmRvd3Mge1xuICAtLWRzLWRhcmstc2Nyb2xsYmFyLXdpZHRoOiAyMHB4O1xufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWRtaW4vYWRtaW4tc2lkZWJhci9hZG1pbi1zaWRlYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUNoQixxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBO0VBQ0UsOEJBQUE7RUFDQTs7Ozs7Ozs7SUFBQTtFQVNBLGVBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFDQTtFQUNFLHNEQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUFFRjs7QUFBQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBR0Y7O0FBREE7RUFDRSxxQ0FBQTtFQUNBLFdBQUE7QUFJRjs7QUFGQTtFQUNFLDZDQUFBO0FBS0Y7O0FBSEE7RUFDRSxpREFBQTtBQU1GOztBQUpBO0VBQ0UsNkNBQUE7QUFPRjs7QUFMQTtFQUNFLFlBQUE7RUFDQSw2Q0FBQTtFQUNBLGtCQUFBO0FBUUY7O0FBTkE7RUFDRSxpREFBQTtBQVNGOztBQVBBO0VBQ0UsNkNBQUE7QUFVRjs7QUFSQTtFQUNFLDJDQUFBO0FBV0Y7O0FBVEE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFZRjs7QUFWQTtFQUNFLGlEQUFBO0VBQ0Esb0RBQUE7QUFhRjs7QUFYQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFjRjs7QUFaQTtFQUNFLHNEQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFlRjs7QUFiQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxtRUFBQTtFQUNBLDRDQUFBO0VBQ0Esa0JBQUE7QUFnQkY7O0FBZEE7RUFDRSxtR0FBQTtFQUNBLFlBQUE7RUFDQSxtREFBQTtBQWlCRjs7QUFmQTtFQUNFLDRDQUFBO0FBa0JGOztBQWhCQTtFQUNFLFlBQUE7QUFtQkY7O0FBakJBO0VBQ0UseUNBQUE7RUFDQSxxQkFBQTtBQW9CRjs7QUFsQkE7RUFDRSwrQ0FBQTtBQXFCRjs7QUFuQkE7RUFDRSxtREFBQTtBQXNCRjs7QUFwQkE7RUFDRSxtREFBQTtBQXVCRjs7QUFyQkE7RUFDRSwrQkFBQTtBQXdCRjtBQUNBLG9yT0FBb3JPIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi9cbjpob3N0IHtcbiAgLyogU0lERUJBUiBTSVpFIEFORCBQT1NJVElPTiAqL1xuICAvKiBTaWRlYmFyIGhpZXJhcmNoeTpcbiAgIMOCwqcgbmF2XG4gICAgIMOCwqcgLnNpZGViYXItZnVsbC13aWR0aC1jb250YWluZXIgKGFueSBPUFRJT05BTCBmdWxsIHdpZHRoIGVsZW1lbnQgd2l0aCBubyBob3Jpem9udGFsIG1hcmdpbiBvciBwYWRkaW5nIC0gaXQgY2FuIGJlIG5lc3RlZClcbiAgICAgICDDgsKnIC5zaWRlYmFyLXNlY3Rpb24td3JhcHBlclxuICAgICAgICAgw4LCpyAuc2lkZWJhci1maXhlZC1lbGVtZW50LXdyYXBwZXJcbiAgICAgICAgIMOCwqcgLnNpZGViYXItY29sbGFwc2libGUtZWxlbWVudC1vdXRlci13cmFwcGVyXG4gICAgICAgICAgIMOCwqcgLnNpZGViYXItY29sbGFwc2libGUtZWxlbWVudC1pbm5lci13cmFwcGVyXG4gICAgICAgICAgICAgw4LCpyAuc2lkZWJhci1pdGVtXG4gICAqL1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgei1pbmRleDogdmFyKC0tZHMtc2lkZWJhci16LWluZGV4KTtcbiAgLyogU0lERUJBUiBTVFlMRSAqL1xufVxuOmhvc3QgbmF2I2FkbWluLXNpZGViYXIge1xuICBtYXgtd2lkdGg6IHZhcigtLWRzLWFkbWluLXNpZGViYXItZml4ZWQtZWxlbWVudC13aWR0aCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXgtd3JhcDogbm93cmFwO1xufVxuOmhvc3QgbmF2I2FkbWluLXNpZGViYXIgZGl2I3NpZGViYXItdG9wLWxldmVsLWl0ZW1zLWNvbnRhaW5lciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG46aG9zdCBuYXYjYWRtaW4tc2lkZWJhciBkaXYjc2lkZWJhci10b3AtbGV2ZWwtaXRlbXMtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiB2YXIoLS1kcy1kYXJrLXNjcm9sbGJhci13aWR0aCk7XG4gIGhlaWdodDogM3B4O1xufVxuOmhvc3QgbmF2I2FkbWluLXNpZGViYXIgZGl2I3NpZGViYXItdG9wLWxldmVsLWl0ZW1zLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZHMtZGFyay1zY3JvbGxiYXItYmcpO1xufVxuOmhvc3QgbmF2I2FkbWluLXNpZGViYXIgZGl2I3NpZGViYXItdG9wLWxldmVsLWl0ZW1zLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kcy1kYXJrLXNjcm9sbGJhci1hbHQtYmcpO1xufVxuOmhvc3QgbmF2I2FkbWluLXNpZGViYXIgZGl2I3NpZGViYXItdG9wLWxldmVsLWl0ZW1zLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2stcGllY2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kcy1kYXJrLXNjcm9sbGJhci1iZyk7XG59XG46aG9zdCBuYXYjYWRtaW4tc2lkZWJhciBkaXYjc2lkZWJhci10b3AtbGV2ZWwtaXRlbXMtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZHMtZGFyay1zY3JvbGxiYXItZmcpO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG46aG9zdCBuYXYjYWRtaW4tc2lkZWJhciBkaXYjc2lkZWJhci10b3AtbGV2ZWwtaXRlbXMtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci1jb3JuZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kcy1kYXJrLXNjcm9sbGJhci1hbHQtYmcpO1xufVxuOmhvc3QgbmF2I2FkbWluLXNpZGViYXIgZGl2I3NpZGViYXItdG9wLWxldmVsLWl0ZW1zLWNvbnRhaW5lcjo6LXdlYmtpdC1yZXNpemVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZHMtZGFyay1zY3JvbGxiYXItYmcpO1xufVxuOmhvc3QgbmF2I2FkbWluLXNpZGViYXIgaW1nI2FkbWluLXNpZGViYXItbG9nbyB7XG4gIGhlaWdodDogdmFyKC0tZHMtYWRtaW4tc2lkZWJhci1sb2dvLWhlaWdodCk7XG59XG46aG9zdCBuYXYjYWRtaW4tc2lkZWJhciA6Om5nLWRlZXAgLnNpZGViYXItZnVsbC13aWR0aC1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xuICBtYXJnaW4tbGVmdDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuOmhvc3QgbmF2I2FkbWluLXNpZGViYXIgOjpuZy1kZWVwIC5zaWRlYmFyLWl0ZW0ge1xuICBwYWRkaW5nLXRvcDogdmFyKC0tZHMtYWRtaW4tc2lkZWJhci1pdGVtLXBhZGRpbmcpO1xuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tZHMtYWRtaW4tc2lkZWJhci1pdGVtLXBhZGRpbmcpO1xufVxuOmhvc3QgbmF2I2FkbWluLXNpZGViYXIgOjpuZy1kZWVwIC5zaWRlYmFyLXNlY3Rpb24td3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbn1cbjpob3N0IG5hdiNhZG1pbi1zaWRlYmFyIDo6bmctZGVlcCAuc2lkZWJhci1zZWN0aW9uLXdyYXBwZXIgPiAuc2lkZWJhci1maXhlZC1lbGVtZW50LXdyYXBwZXIge1xuICBtaW4td2lkdGg6IHZhcigtLWRzLWFkbWluLXNpZGViYXItZml4ZWQtZWxlbWVudC13aWR0aCk7XG4gIGZsZXg6IDEgMSBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbjpob3N0IG5hdiNhZG1pbi1zaWRlYmFyIDo6bmctZGVlcCAuc2lkZWJhci1zZWN0aW9uLXdyYXBwZXIgPiAuc2lkZWJhci1jb2xsYXBzaWJsZS1lbGVtZW50LW91dGVyLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIG1heC13aWR0aDogY2FsYygxMDAlIC0gdmFyKC0tZHMtYWRtaW4tc2lkZWJhci1maXhlZC1lbGVtZW50LXdpZHRoKSk7XG4gIHBhZGRpbmctbGVmdDogdmFyKC0tZHMtZGFyay1zY3JvbGxiYXItd2lkdGgpO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG46aG9zdCBuYXYjYWRtaW4tc2lkZWJhciA6Om5nLWRlZXAgLnNpZGViYXItc2VjdGlvbi13cmFwcGVyID4gLnNpZGViYXItY29sbGFwc2libGUtZWxlbWVudC1vdXRlci13cmFwcGVyID4gLnNpZGViYXItY29sbGFwc2libGUtZWxlbWVudC1pbm5lci13cmFwcGVyIHtcbiAgbWluLXdpZHRoOiBjYWxjKHZhcigtLWRzLWFkbWluLXNpZGViYXItY29sbGFwc2libGUtZWxlbWVudC13aWR0aCkgLSB2YXIoLS1kcy1kYXJrLXNjcm9sbGJhci13aWR0aCkpO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmctcmlnaHQ6IHZhcigtLWRzLWFkbWluLXNpZGViYXItaXRlbS1wYWRkaW5nKTtcbn1cbjpob3N0IG5hdiNhZG1pbi1zaWRlYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZHMtYWRtaW4tc2lkZWJhci1iZyk7XG59XG46aG9zdCBuYXYjYWRtaW4tc2lkZWJhciA6Om5nLWRlZXAge1xuICBjb2xvcjogd2hpdGU7XG59XG46aG9zdCBuYXYjYWRtaW4tc2lkZWJhciA6Om5nLWRlZXAgYSB7XG4gIGNvbG9yOiB2YXIoLS1kcy1hZG1pbi1zaWRlYmFyLWxpbmstY29sb3IpO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG46aG9zdCBuYXYjYWRtaW4tc2lkZWJhciA6Om5nLWRlZXAgYTpob3ZlciwgOmhvc3QgbmF2I2FkbWluLXNpZGViYXIgOjpuZy1kZWVwIGE6Zm9jdXMge1xuICBjb2xvcjogdmFyKC0tZHMtYWRtaW4tc2lkZWJhci1saW5rLWhvdmVyLWNvbG9yKTtcbn1cbjpob3N0IG5hdiNhZG1pbi1zaWRlYmFyIGRpdiNzaWRlYmFyLWhlYWRlci1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kcy1hZG1pbi1zaWRlYmFyLWhlYWRlci1iZyk7XG59XG46aG9zdCBuYXYjYWRtaW4tc2lkZWJhciBkaXYjc2lkZWJhci1oZWFkZXItY29udGFpbmVyIC5zaWRlYmFyLWZpeGVkLWVsZW1lbnQtd3JhcHBlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRzLWFkbWluLXNpZGViYXItaGVhZGVyLWJnKTtcbn1cbjo6bmctZGVlcCAuYnJvd3Nlci1maXJlZm94LXdpbmRvd3Mge1xuICAtLWRzLWRhcmstc2Nyb2xsYmFyLXdpZHRoOiAyMHB4O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_themes_custom_app_admin_admin-sidebar_admin-sidebar_component_ts.js.map