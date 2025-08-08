"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_themes_custom_app_search-navbar_search-navbar_component_ts"],{

/***/ 31704:
/*!************************************************************************!*\
  !*** ./src/themes/custom/app/search-navbar/search-navbar.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchNavbarComponent: () => (/* binding */ SearchNavbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 56106);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var _app_search_navbar_search_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../app/search-navbar/search-navbar.component */ 73940);
/* harmony import */ var _app_shared_utils_browser_only_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../app/shared/utils/browser-only.pipe */ 75465);
/* harmony import */ var _app_shared_utils_click_outside_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app/shared/utils/click-outside.directive */ 46301);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 90310);








class SearchNavbarComponent extends _app_search_navbar_search_navbar_component__WEBPACK_IMPORTED_MODULE_0__.SearchNavbarComponent {
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵSearchNavbarComponent_BaseFactory;
      return function SearchNavbarComponent_Factory(t) {
        return (ɵSearchNavbarComponent_BaseFactory || (ɵSearchNavbarComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](SearchNavbarComponent)))(t || SearchNavbarComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: SearchNavbarComponent,
      selectors: [["ds-themed-search-navbar"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
      decls: 13,
      vars: 23,
      consts: [["searchInput", ""], [3, "dsClickOutside", "title"], [1, "d-inline-block", "position-relative"], ["autocomplete", "on", 1, "d-flex", 3, "ngSubmit", "formGroup"], ["name", "query", "formControlName", "query", "type", "text", 1, "bg-transparent", "position-absolute", "form-control", "dropdown-menu-right", "pl-1", "pr-4", 3, "placeholder", "tabIndex"], ["type", "button", 1, "submit-icon", "btn", "btn-link", "btn-link-inline", 3, "click"], [1, "fas", "fa-search", "fa-lg", "fa-fw"]],
      template: function SearchNavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("dsClickOutside", function SearchNavbarComponent_Template_div_dsClickOutside_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.collapse());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2)(3, "form", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function SearchNavbarComponent_Template_form_ngSubmit_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.onSubmit(ctx.searchForm.value));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "input", 4, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "dsBrowserOnly");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "dsBrowserOnly");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SearchNavbarComponent_Template_button_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.searchExpanded ? ctx.onSubmit(ctx.searchForm.value) : ctx.expand());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "em", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 11, "nav.search"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.searchForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("display", ctx.searchExpanded ? "inline-block" : "none");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", ctx.searchExpanded ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 13, "nav.search") : "");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@toggleAnimation", ctx.isExpanded)("tabIndex", ctx.searchExpanded ? 0 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 15, "nav.search"))("data-test", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](8, 17, "header-search-box"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](10, 19, "nav.search.button"))("data-test", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](11, 21, "header-search-icon"));
        }
      },
      dependencies: [_app_shared_utils_click_outside_directive__WEBPACK_IMPORTED_MODULE_2__.ClickOutsideDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe, _app_shared_utils_browser_only_pipe__WEBPACK_IMPORTED_MODULE_1__.BrowserOnlyPipe],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\ninput[type=text][_ngcontent-%COMP%] {\n  margin-top: calc(-0.5 * var(--bs-font-size-base));\n  background-color: #fff !important;\n  border-color: var(--ds-header-icon-color);\n}\n\ninput[type=text].collapsed[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.submit-icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: sticky;\n  top: 0;\n  border: 0 !important;\n  color: var(--ds-header-icon-color);\n}\n\n.submit-icon[_ngcontent-%COMP%]:hover, .submit-icon[_ngcontent-%COMP%]:focus {\n  color: var(--ds-header-icon-color-hover);\n}\n\n@media screen and (max-width: 768px) {\n  .query[_ngcontent-%COMP%]:focus {\n    max-width: 250px !important;\n    width: 40vw !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC1uYXZiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQTtFQUNFLGlEQUFBO0VBQ0EsaUNBQUE7RUFDQSx5Q0FBQTtBQUNGOztBQUNBO0VBQ0UsVUFBQTtBQUVGOztBQUFBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0NBQUE7QUFHRjs7QUFEQTtFQUNFLHdDQUFBO0FBSUY7O0FBRkE7RUFDRTtJQUNFLDJCQUFBO0lBQ0Esc0JBQUE7RUFLRjtBQUNGIiwiZmlsZSI6InNlYXJjaC1uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqL1xuaW5wdXRbdHlwZT10ZXh0XSB7XG4gIG1hcmdpbi10b3A6IGNhbGMoLTAuNSAqIHZhcigtLWJzLWZvbnQtc2l6ZS1iYXNlKSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1kcy1oZWFkZXItaWNvbi1jb2xvcik7XG59XG5pbnB1dFt0eXBlPXRleHRdLmNvbGxhcHNlZCB7XG4gIG9wYWNpdHk6IDA7XG59XG4uc3VibWl0LWljb24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB2YXIoLS1kcy1oZWFkZXItaWNvbi1jb2xvcik7XG59XG4uc3VibWl0LWljb246aG92ZXIsIC5zdWJtaXQtaWNvbjpmb2N1cyB7XG4gIGNvbG9yOiB2YXIoLS1kcy1oZWFkZXItaWNvbi1jb2xvci1ob3Zlcik7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAucXVlcnk6Zm9jdXMge1xuICAgIG1heC13aWR0aDogMjUwcHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogNDB2dyAhaW1wb3J0YW50O1xuICB9XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2VhcmNoLW5hdmJhci9zZWFyY2gtbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBO0FBQ0E7RUFDRSxpREFBQTtFQUNBLGlDQUFBO0VBQ0EseUNBQUE7QUFDRjs7QUFDQTtFQUNFLFVBQUE7QUFFRjs7QUFBQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxvQkFBQTtFQUNBLGtDQUFBO0FBR0Y7O0FBREE7RUFDRSx3Q0FBQTtBQUlGOztBQUZBO0VBQ0U7SUFDRSwyQkFBQTtJQUNBLHNCQUFBO0VBS0Y7QUFDRjtBQUNBLGdqREFBZ2pEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi9cbmlucHV0W3R5cGU9dGV4dF0ge1xuICBtYXJnaW4tdG9wOiBjYWxjKC0wLjUgKiB2YXIoLS1icy1mb250LXNpemUtYmFzZSkpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZHMtaGVhZGVyLWljb24tY29sb3IpO1xufVxuaW5wdXRbdHlwZT10ZXh0XS5jb2xsYXBzZWQge1xuICBvcGFjaXR5OiAwO1xufVxuLnN1Ym1pdC1pY29uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIGJvcmRlcjogMCAhaW1wb3J0YW50O1xuICBjb2xvcjogdmFyKC0tZHMtaGVhZGVyLWljb24tY29sb3IpO1xufVxuLnN1Ym1pdC1pY29uOmhvdmVyLCAuc3VibWl0LWljb246Zm9jdXMge1xuICBjb2xvcjogdmFyKC0tZHMtaGVhZGVyLWljb24tY29sb3ItaG92ZXIpO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnF1ZXJ5OmZvY3VzIHtcbiAgICBtYXgtd2lkdGg6IDI1MHB4ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDQwdncgIWltcG9ydGFudDtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_themes_custom_app_search-navbar_search-navbar_component_ts.js.map