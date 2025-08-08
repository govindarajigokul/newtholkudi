"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_themes_custom_app_shared_lang-switch_lang-switch_component_ts"],{

/***/ 1237:
/*!***************************************************************************!*\
  !*** ./src/themes/custom/app/shared/lang-switch/lang-switch.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LangSwitchComponent: () => (/* binding */ LangSwitchComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 49966);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var _app_shared_lang_switch_lang_switch_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../app/shared/lang-switch/lang-switch.component */ 31580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 90310);







function LangSwitchComponent_div_0_li_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 7, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup.enter", function LangSwitchComponent_div_0_li_7_Template_li_keyup_enter_0_listener() {
      const lang_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.useLang(lang_r3));
    })("click", function LangSwitchComponent_div_0_li_7_Template_li_click_0_listener() {
      const lang_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.useLang(lang_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const lang_r3 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", lang_r3 === ctx_r3.translate.currentLang);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r3.langLabel(lang_r3), " ");
  }
}
function LangSwitchComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2)(1, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LangSwitchComponent_div_0_Template_a_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event.preventDefault());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ul", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, LangSwitchComponent_div_0_li_7_Template, 3, 3, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 4, "nav.language"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 6, "nav.language"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 8, "nav.language"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.translate.getLangs());
  }
}
class LangSwitchComponent extends _app_shared_lang_switch_lang_switch_component__WEBPACK_IMPORTED_MODULE_0__.LangSwitchComponent {
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵLangSwitchComponent_BaseFactory;
      return function LangSwitchComponent_Factory(t) {
        return (ɵLangSwitchComponent_BaseFactory || (ɵLangSwitchComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](LangSwitchComponent)))(t || LangSwitchComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: LangSwitchComponent,
      selectors: [["ds-themed-lang-switch"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 1,
      vars: 1,
      consts: [["langSelect", ""], ["ngbDropdown", "", "class", "navbar-nav", "display", "dynamic", "placement", "bottom-right", 4, "ngIf"], ["ngbDropdown", "", "display", "dynamic", "placement", "bottom-right", 1, "navbar-nav"], ["href", "javascript:void(0);", "role", "menuitem", "aria-controls", "language-menu-list", "aria-haspopup", "menu", "data-toggle", "dropdown", "ngbDropdownToggle", "", "data-test", "lang-switch", "tabindex", "0", 3, "click", "title"], [1, "fas", "fa-globe-asia", "fa-lg", "fa-fw"], ["ngbDropdownMenu", "", "id", "language-menu-list", "role", "menu", 1, "dropdown-menu"], ["class", "dropdown-item", "tabindex", "0", "role", "menuitem", 3, "active", "keyup.enter", "click", 4, "ngFor", "ngForOf"], ["tabindex", "0", "role", "menuitem", 1, "dropdown-item", 3, "keyup.enter", "click"]],
      template: function LangSwitchComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, LangSwitchComponent_div_0_Template, 8, 10, "div", 1);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.moreThanOneLanguage);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbDropdownModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbDropdownMenu, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgFor, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n.dropdown-toggle[_ngcontent-%COMP%]::after {\n  display: none;\n}\n\n.dropdown-toggle[_ngcontent-%COMP%] {\n  color: var(--ds-header-icon-color);\n}\n\n.dropdown-toggle[_ngcontent-%COMP%]:hover, .dropdown-toggle[_ngcontent-%COMP%]:focus {\n  color: var(--ds-header-icon-color-hover);\n}\n\n.dropdown-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhbmctc3dpdGNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBO0FBQ0E7RUFDRSxhQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxrQ0FBQTtBQUVGOztBQUFBO0VBQ0Usd0NBQUE7QUFHRjs7QUFEQTtFQUNFLGVBQUE7QUFJRiIsImZpbGUiOiJsYW5nLXN3aXRjaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovXG4uZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uZHJvcGRvd24tdG9nZ2xlIHtcbiAgY29sb3I6IHZhcigtLWRzLWhlYWRlci1pY29uLWNvbG9yKTtcbn1cbi5kcm9wZG93bi10b2dnbGU6aG92ZXIsIC5kcm9wZG93bi10b2dnbGU6Zm9jdXMge1xuICBjb2xvcjogdmFyKC0tZHMtaGVhZGVyLWljb24tY29sb3ItaG92ZXIpO1xufVxuLmRyb3Bkb3duLWl0ZW0ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2xhbmctc3dpdGNoL2xhbmctc3dpdGNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBO0FBQ0E7RUFDRSxhQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxrQ0FBQTtBQUVGOztBQUFBO0VBQ0Usd0NBQUE7QUFHRjs7QUFEQTtFQUNFLGVBQUE7QUFJRjtBQUNBLHcvQkFBdy9CIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi9cbi5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5kcm9wZG93bi10b2dnbGUge1xuICBjb2xvcjogdmFyKC0tZHMtaGVhZGVyLWljb24tY29sb3IpO1xufVxuLmRyb3Bkb3duLXRvZ2dsZTpob3ZlciwgLmRyb3Bkb3duLXRvZ2dsZTpmb2N1cyB7XG4gIGNvbG9yOiB2YXIoLS1kcy1oZWFkZXItaWNvbi1jb2xvci1ob3Zlcik7XG59XG4uZHJvcGRvd24taXRlbSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_themes_custom_app_shared_lang-switch_lang-switch_component_ts.js.map