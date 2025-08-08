"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_themes_custom_app_navbar_expandable-navbar-section_expandable-navbar-section_component_ts"],{

/***/ 61754:
/*!*******************************************************************************************************!*\
  !*** ./src/themes/custom/app/navbar/expandable-navbar-section/expandable-navbar-section.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExpandableNavbarSectionComponent: () => (/* binding */ ExpandableNavbarSectionComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _app_navbar_expandable_navbar_section_expandable_navbar_section_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../app/navbar/expandable-navbar-section/expandable-navbar-section.component */ 58499);
/* harmony import */ var _app_shared_animations_slide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../app/shared/animations/slide */ 621);
/* harmony import */ var _app_shared_utils_hover_outside_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../app/shared/utils/hover-outside.directive */ 79803);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 90310);






function ExpandableNavbarSectionComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0);
  }
}
function ExpandableNavbarSectionComponent_div_8_div_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0);
  }
}
function ExpandableNavbarSectionComponent_div_8_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ExpandableNavbarSectionComponent_div_8_div_2_ng_container_1_Template, 1, 0, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const subSection_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngComponentOutlet", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 2, ctx_r1.sectionMap$).get(subSection_r3.id).component)("ngComponentOutletInjector", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 4, ctx_r1.sectionMap$).get(subSection_r3.id).injector);
  }
}
function ExpandableNavbarSectionComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ExpandableNavbarSectionComponent_div_8_Template_div_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.deactivateSection($event));
    })("dsHoverOutside", function ExpandableNavbarSectionComponent_div_8_Template_div_dsHoverOutside_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.deactivateSection($event, false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ExpandableNavbarSectionComponent_div_8_div_2_Template, 4, 6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", ctx_r1.expandableNavbarSectionId())("dsHoverOutsideOfParentSelector", "#expandable-navbar-section-" + ctx_r1.section.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@slide", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 4, ctx_r1.subSections$));
  }
}
class ExpandableNavbarSectionComponent extends _app_navbar_expandable_navbar_section_expandable_navbar_section_component__WEBPACK_IMPORTED_MODULE_0__.ExpandableNavbarSectionComponent {
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵExpandableNavbarSectionComponent_BaseFactory;
      return function ExpandableNavbarSectionComponent_Factory(t) {
        return (ɵExpandableNavbarSectionComponent_BaseFactory || (ɵExpandableNavbarSectionComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](ExpandableNavbarSectionComponent)))(t || ExpandableNavbarSectionComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: ExpandableNavbarSectionComponent,
      selectors: [["ds-themed-expandable-navbar-section"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
      decls: 10,
      vars: 16,
      consts: [["data-test", "navbar-section-wrapper", 1, "ds-menu-item-wrapper", "text-md-center", 3, "mouseenter", "mouseleave", "id"], ["href", "javascript:void(0);", "routerLinkActive", "active", "role", "menuitem", "aria-haspopup", "menu", "data-test", "navbar-section-toggler", 1, "d-flex", "flex-row", "flex-nowrap", "align-items-center", "gapx-1", "ds-menu-toggler-wrapper", 3, "keyup.enter", "keyup.space", "click", "keydown"], [1, "flex-fill"], [4, "ngComponentOutlet", "ngComponentOutletInjector"], ["aria-hidden", "true", 1, "fas", "fa-caret-down", "fa-xs", "toggle-menu-icon"], ["role", "menu", "class", "dropdown-menu show nav-dropdown-menu m-0 shadow-none border-top-0 px-3 px-md-0 pt-0 pt-md-1", 3, "id", "dsHoverOutsideOfParentSelector", "click", "dsHoverOutside", 4, "ngIf"], ["role", "menu", 1, "dropdown-menu", "show", "nav-dropdown-menu", "m-0", "shadow-none", "border-top-0", "px-3", "px-md-0", "pt-0", "pt-md-1", 3, "click", "dsHoverOutside", "id", "dsHoverOutsideOfParentSelector"], ["role", "presentation"], ["class", "text-nowrap", "role", "presentation", 4, "ngFor", "ngForOf"], ["role", "presentation", 1, "text-nowrap"]],
      template: function ExpandableNavbarSectionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("mouseenter", function ExpandableNavbarSectionComponent_Template_div_mouseenter_0_listener($event) {
            return ctx.onMouseEnter($event);
          })("mouseleave", function ExpandableNavbarSectionComponent_Template_div_mouseleave_0_listener($event) {
            return ctx.onMouseLeave($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyup.enter", function ExpandableNavbarSectionComponent_Template_a_keyup_enter_1_listener($event) {
            return ctx.toggleSection($event);
          })("keyup.space", function ExpandableNavbarSectionComponent_Template_a_keyup_space_1_listener($event) {
            return ctx.toggleSection($event);
          })("click", function ExpandableNavbarSectionComponent_Template_a_click_1_listener($event) {
            return ctx.toggleSection($event);
          })("keydown", function ExpandableNavbarSectionComponent_Template_a_keydown_1_listener($event) {
            return ctx.keyDown($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, ExpandableNavbarSectionComponent_ng_container_4_Template, 1, 0, "ng-container", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "i", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, ExpandableNavbarSectionComponent_div_8_Template, 4, 6, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", "expandable-navbar-section-" + ctx.section.id);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("disabled", ctx.section.model == null ? null : ctx.section.model.disabled);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-expanded", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 8, ctx.active$).valueOf())("aria-controls", ctx.expandableNavbarSectionId());
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngComponentOutlet", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 10, ctx.sectionMap$).get(ctx.section.id).component)("ngComponentOutletInjector", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 12, ctx.sectionMap$).get(ctx.section.id).injector);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](9, 14, ctx.active$).valueOf() === true);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe, _app_shared_utils_hover_outside_directive__WEBPACK_IMPORTED_MODULE_2__.HoverOutsideDirective, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgComponentOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgFor, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkActive],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   .ds-menu-item-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n[_nghost-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n@media (max-width: 767.98px) {\n  [_nghost-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n    border: 0;\n    background-color: var(--ds-expandable-navbar-bg);\n  }\n}\n@media (min-width: 768px) {\n  [_nghost-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n    background-color: var(--ds-navbar-dropdown-bg);\n  }\n}\n[_nghost-%COMP%]   .toggle-menu-icon[_ngcontent-%COMP%], [_nghost-%COMP%]   .toggle-menu-icon[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGFuZGFibGUtbmF2YmFyLXNlY3Rpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxnQkFBQTtBQUVGOztBQUFBO0VBQ0U7SUFDRSxTQUFBO0lBQ0EsZ0RBQUE7RUFHRjtBQUNGO0FBREE7RUFDRTtJQUNFLHlCQUFBO0lBQ0EsMEJBQUE7SUFDQSw4Q0FBQTtFQUdGO0FBQ0Y7QUFEQTtFQUNFLHFCQUFBO0FBR0YiLCJmaWxlIjoiZXhwYW5kYWJsZS1uYXZiYXItc2VjdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovXG46aG9zdCAuZHMtbWVudS1pdGVtLXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG46aG9zdCAuZHJvcGRvd24tbWVudSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcbiAgOmhvc3QgLmRyb3Bkb3duLW1lbnUge1xuICAgIGJvcmRlcjogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kcy1leHBhbmRhYmxlLW5hdmJhci1iZyk7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICA6aG9zdCAuZHJvcGRvd24tbWVudSB7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kcy1uYXZiYXItZHJvcGRvd24tYmcpO1xuICB9XG59XG46aG9zdCAudG9nZ2xlLW1lbnUtaWNvbiwgOmhvc3QgLnRvZ2dsZS1tZW51LWljb246aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbmF2YmFyL2V4cGFuZGFibGUtbmF2YmFyLXNlY3Rpb24vZXhwYW5kYWJsZS1uYXZiYXItc2VjdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBO0VBQ0Usa0JBQUE7QUFDRjs7QUFDQTtFQUNFLGdCQUFBO0FBRUY7O0FBQUE7RUFDRTtJQUNFLFNBQUE7SUFDQSxnREFBQTtFQUdGO0FBQ0Y7QUFEQTtFQUNFO0lBQ0UseUJBQUE7SUFDQSwwQkFBQTtJQUNBLDhDQUFBO0VBR0Y7QUFDRjtBQURBO0VBQ0UscUJBQUE7QUFHRjtBQUNBLDQ5Q0FBNDlDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi9cbjpob3N0IC5kcy1tZW51LWl0ZW0td3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbjpob3N0IC5kcm9wZG93bi1tZW51IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjcuOThweCkge1xuICA6aG9zdCAuZHJvcGRvd24tbWVudSB7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRzLWV4cGFuZGFibGUtbmF2YmFyLWJnKTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIDpob3N0IC5kcm9wZG93bi1tZW51IHtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRzLW5hdmJhci1kcm9wZG93bi1iZyk7XG4gIH1cbn1cbjpob3N0IC50b2dnbGUtbWVudS1pY29uLCA6aG9zdCAudG9nZ2xlLW1lbnUtaWNvbjpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"],
      data: {
        animation: [_app_shared_animations_slide__WEBPACK_IMPORTED_MODULE_1__.slide]
      }
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_themes_custom_app_navbar_expandable-navbar-section_expandable-navbar-section_component_ts.js.map