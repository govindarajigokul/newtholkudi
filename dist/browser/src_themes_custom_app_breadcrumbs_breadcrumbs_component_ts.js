"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_themes_custom_app_breadcrumbs_breadcrumbs_component_ts"],{

/***/ 20335:
/*!********************************************************************!*\
  !*** ./src/themes/custom/app/breadcrumbs/breadcrumbs.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BreadcrumbsComponent: () => (/* binding */ BreadcrumbsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 49966);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var _app_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../app/breadcrumbs/breadcrumbs.component */ 87832);
/* harmony import */ var _app_shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../app/shared/utils/var.directive */ 18226);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);









const _c0 = () => ({
  text: "home.breadcrumbs",
  url: "/"
});
function BreadcrumbsComponent_ng_container_0_nav_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
  }
}
function BreadcrumbsComponent_ng_container_0_nav_1_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
  }
}
function BreadcrumbsComponent_ng_container_0_nav_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, BreadcrumbsComponent_ng_container_0_nav_1_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const bc_r1 = ctx.$implicit;
    const last_r2 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    const breadcrumb_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);
    const activeBreadcrumb_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", !last_r2 ? breadcrumb_r3 : activeBreadcrumb_r4)("ngTemplateOutletContext", bc_r1);
  }
}
function BreadcrumbsComponent_ng_container_0_nav_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nav", 4)(1, "ol", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, BreadcrumbsComponent_ng_container_0_nav_1_ng_container_2_Template, 1, 0, "ng-container", 6)(3, BreadcrumbsComponent_ng_container_0_nav_1_ng_container_3_Template, 2, 2, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const breadcrumbs_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().ngVar;
    const breadcrumb_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);
    const activeBreadcrumb_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", (breadcrumbs_r5 == null ? null : breadcrumbs_r5.length) > 0 ? breadcrumb_r3 : activeBreadcrumb_r4)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](3, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", breadcrumbs_r5);
  }
}
function BreadcrumbsComponent_ng_container_0_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 8)(1, "div", 9)(2, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const text_r6 = ctx.text;
    const url_r7 = ctx.url;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", url_r7)("ngbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 3, text_r6));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 5, text_r6));
  }
}
function BreadcrumbsComponent_ng_container_0_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 11)(1, "div", 9)(2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const text_r8 = ctx.text;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 1, text_r8));
  }
}
function BreadcrumbsComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, BreadcrumbsComponent_ng_container_0_nav_1_Template, 4, 4, "nav", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, BreadcrumbsComponent_ng_container_0_ng_template_3_Template, 6, 7, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"])(5, BreadcrumbsComponent_ng_container_0_ng_template_5_Template, 5, 3, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, ctx_r8.showBreadcrumbs$));
  }
}
/**
 * Component representing the breadcrumbs of a page
 */
class BreadcrumbsComponent extends _app_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbsComponent {
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵBreadcrumbsComponent_BaseFactory;
      return function BreadcrumbsComponent_Factory(t) {
        return (ɵBreadcrumbsComponent_BaseFactory || (ɵBreadcrumbsComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](BreadcrumbsComponent)))(t || BreadcrumbsComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: BreadcrumbsComponent,
      selectors: [["ds-themed-breadcrumbs"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 3,
      consts: [["breadcrumb", ""], ["activeBreadcrumb", ""], [4, "ngVar"], ["aria-label", "breadcrumb", "class", "nav-breadcrumb", 4, "ngIf"], ["aria-label", "breadcrumb", 1, "nav-breadcrumb"], [1, "container", "breadcrumb", "my-0"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngFor", "ngForOf"], [1, "breadcrumb-item"], [1, "breadcrumb-item-limiter"], ["placement", "bottom", 1, "text-truncate", 3, "routerLink", "ngbTooltip"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "text-truncate"]],
      template: function BreadcrumbsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, BreadcrumbsComponent_ng_container_0_Template, 7, 3, "ng-container", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngVar", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 1, ctx.breadcrumbs$));
        }
      },
      dependencies: [_app_shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_1__.VarDirective, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgFor, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbTooltipModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbTooltip, _angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe],
      styles: ["@charset \"UTF-8\";\n\n\n\n\n\n\n\n\n\n\n\n\n.nav-breadcrumb[_ngcontent-%COMP%] {\n  background-color: var(--ds-breadcrumb-bg);\n}\n\n.breadcrumb[_ngcontent-%COMP%] {\n  border-radius: 0;\n  padding-bottom: calc(var(--ds-content-spacing) / 2);\n  padding-top: calc(var(--ds-content-spacing) / 2);\n  background-color: var(--ds-breadcrumb-bg);\n}\n\nli.breadcrumb-item[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.breadcrumb-item-limiter[_ngcontent-%COMP%] {\n  display: inline-block;\n  max-width: var(--ds-breadcrumb-max-length);\n}\n\n.breadcrumb-item-limiter[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  max-width: 100%;\n  display: block;\n}\n\nli.breadcrumb-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--ds-breadcrumb-link-color);\n}\n\nli.breadcrumb-item.active[_ngcontent-%COMP%] {\n  color: var(--ds-breadcrumb-link-active-color);\n}\n\n.breadcrumb-item[_ngcontent-%COMP%]    + .breadcrumb-item[_ngcontent-%COMP%]::before {\n  display: block;\n  content: \"\u2022\" !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJyZWFkY3J1bWJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUNoQixxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBO0VBQ0UseUNBQUE7QUFDRjs7QUFDQTtFQUNFLGdCQUFBO0VBQ0EsbURBQUE7RUFDQSxnREFBQTtFQUNBLHlDQUFBO0FBRUY7O0FBQUE7RUFDRSxhQUFBO0FBR0Y7O0FBREE7RUFDRSxxQkFBQTtFQUNBLDBDQUFBO0FBSUY7O0FBRkE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQUtGOztBQUhBO0VBQ0Usc0NBQUE7QUFNRjs7QUFKQTtFQUNFLDZDQUFBO0FBT0Y7O0FBTEE7RUFDRSxjQUFBO0VBQ0EsdUJBQUE7QUFRRiIsImZpbGUiOiJicmVhZGNydW1icy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovXG4ubmF2LWJyZWFkY3J1bWIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kcy1icmVhZGNydW1iLWJnKTtcbn1cbi5icmVhZGNydW1iIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tZHMtY29udGVudC1zcGFjaW5nKSAvIDIpO1xuICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1kcy1jb250ZW50LXNwYWNpbmcpIC8gMik7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRzLWJyZWFkY3J1bWItYmcpO1xufVxubGkuYnJlYWRjcnVtYi1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5icmVhZGNydW1iLWl0ZW0tbGltaXRlciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWF4LXdpZHRoOiB2YXIoLS1kcy1icmVhZGNydW1iLW1heC1sZW5ndGgpO1xufVxuLmJyZWFkY3J1bWItaXRlbS1saW1pdGVyID4gKiB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5saS5icmVhZGNydW1iLWl0ZW0gYSB7XG4gIGNvbG9yOiB2YXIoLS1kcy1icmVhZGNydW1iLWxpbmstY29sb3IpO1xufVxubGkuYnJlYWRjcnVtYi1pdGVtLmFjdGl2ZSB7XG4gIGNvbG9yOiB2YXIoLS1kcy1icmVhZGNydW1iLWxpbmstYWN0aXZlLWNvbG9yKTtcbn1cbi5icmVhZGNydW1iLWl0ZW0gKyAuYnJlYWRjcnVtYi1pdGVtOjpiZWZvcmUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29udGVudDogXCLigKJcIiAhaW1wb3J0YW50O1xufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYnJlYWRjcnVtYnMvYnJlYWRjcnVtYnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQ2hCLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBO0FBQ0E7RUFDRSx5Q0FBQTtBQUNGOztBQUNBO0VBQ0UsZ0JBQUE7RUFDQSxtREFBQTtFQUNBLGdEQUFBO0VBQ0EseUNBQUE7QUFFRjs7QUFBQTtFQUNFLGFBQUE7QUFHRjs7QUFEQTtFQUNFLHFCQUFBO0VBQ0EsMENBQUE7QUFJRjs7QUFGQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBS0Y7O0FBSEE7RUFDRSxzQ0FBQTtBQU1GOztBQUpBO0VBQ0UsNkNBQUE7QUFPRjs7QUFMQTtFQUNFLGNBQUE7RUFDQSx1QkFBQTtBQVFGO0FBQ0EsNDNEQUE0M0QiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqL1xuLm5hdi1icmVhZGNydW1iIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZHMtYnJlYWRjcnVtYi1iZyk7XG59XG4uYnJlYWRjcnVtYiB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLWRzLWNvbnRlbnQtc3BhY2luZykgLyAyKTtcbiAgcGFkZGluZy10b3A6IGNhbGModmFyKC0tZHMtY29udGVudC1zcGFjaW5nKSAvIDIpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kcy1icmVhZGNydW1iLWJnKTtcbn1cbmxpLmJyZWFkY3J1bWItaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uYnJlYWRjcnVtYi1pdGVtLWxpbWl0ZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1heC13aWR0aDogdmFyKC0tZHMtYnJlYWRjcnVtYi1tYXgtbGVuZ3RoKTtcbn1cbi5icmVhZGNydW1iLWl0ZW0tbGltaXRlciA+ICoge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxubGkuYnJlYWRjcnVtYi1pdGVtIGEge1xuICBjb2xvcjogdmFyKC0tZHMtYnJlYWRjcnVtYi1saW5rLWNvbG9yKTtcbn1cbmxpLmJyZWFkY3J1bWItaXRlbS5hY3RpdmUge1xuICBjb2xvcjogdmFyKC0tZHMtYnJlYWRjcnVtYi1saW5rLWFjdGl2ZS1jb2xvcik7XG59XG4uYnJlYWRjcnVtYi1pdGVtICsgLmJyZWFkY3J1bWItaXRlbTo6YmVmb3JlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbnRlbnQ6IFwiw6LCgMKiXCIgIWltcG9ydGFudDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_themes_custom_app_breadcrumbs_breadcrumbs_component_ts.js.map