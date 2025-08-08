"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_app_health-page_health-page-routes_ts"],{

/***/ 90839:
/*!************************************************************!*\
  !*** ./src/app/breadcrumbs/breadcrumb/breadcrumb.model.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Breadcrumb: () => (/* binding */ Breadcrumb)
/* harmony export */ });
/**
 * Class representing a single breadcrumb
 */
class Breadcrumb {
  constructor(
  /**
   * The display value of the breadcrumb
   */
  text,
  /**
   * The optional url of the breadcrumb
   */
  url) {
    this.text = text;
    this.url = url;
  }
}

/***/ }),

/***/ 72059:
/*!**************************************************************!*\
  !*** ./src/app/core/breadcrumbs/i18n-breadcrumb.resolver.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i18nBreadcrumbResolver: () => (/* binding */ i18nBreadcrumbResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/empty.util */ 82777);
/* harmony import */ var _shared_utils_route_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/utils/route.utils */ 30506);
/* harmony import */ var _i18n_breadcrumbs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./i18n-breadcrumbs.service */ 72943);




/**
 * Method for resolving an I18n breadcrumb configuration object
 * @param {ActivatedRouteSnapshot} route The current ActivatedRouteSnapshot
 * @param {RouterStateSnapshot} state The current RouterStateSnapshot
 * @param {I18nBreadcrumbsService} breadcrumbService
 * @returns BreadcrumbConfig object
 */
const i18nBreadcrumbResolver = (route, state, breadcrumbService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_i18n_breadcrumbs_service__WEBPACK_IMPORTED_MODULE_2__.I18nBreadcrumbsService)) => {
  const key = route.data.breadcrumbKey;
  if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_0__.hasNoValue)(key)) {
    throw new Error('You provided an i18nBreadcrumbResolver for url \"' + route.url + '\" but no breadcrumbKey in the route\'s data');
  }
  const fullPath = (0,_shared_utils_route_utils__WEBPACK_IMPORTED_MODULE_1__.currentPathFromSnapshot)(route);
  return {
    provider: breadcrumbService,
    key: key,
    url: fullPath
  };
};

/***/ }),

/***/ 72943:
/*!**************************************************************!*\
  !*** ./src/app/core/breadcrumbs/i18n-breadcrumbs.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BREADCRUMB_MESSAGE_POSTFIX: () => (/* binding */ BREADCRUMB_MESSAGE_POSTFIX),
/* harmony export */   I18nBreadcrumbsService: () => (/* binding */ I18nBreadcrumbsService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 17796);
/* harmony import */ var _breadcrumbs_breadcrumb_breadcrumb_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../breadcrumbs/breadcrumb/breadcrumb.model */ 90839);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);



/**
 * The postfix for i18n breadcrumbs
 */
const BREADCRUMB_MESSAGE_POSTFIX = '.breadcrumbs';
/**
 * Service to calculate i18n breadcrumbs for a single part of the route
 */
class I18nBreadcrumbsService {
  /**
   * Method to calculate the breadcrumbs
   * @param key The key used to resolve the breadcrumb
   * @param url The url to use as a link for this breadcrumb
   */
  getBreadcrumbs(key, url) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)([new _breadcrumbs_breadcrumb_breadcrumb_model__WEBPACK_IMPORTED_MODULE_0__.Breadcrumb(key + BREADCRUMB_MESSAGE_POSTFIX, url)]);
  }
  static {
    this.ɵfac = function I18nBreadcrumbsService_Factory(t) {
      return new (t || I18nBreadcrumbsService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: I18nBreadcrumbsService,
      factory: I18nBreadcrumbsService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 53543:
/*!**************************************************************************************************!*\
  !*** ./src/app/health-page/health-info/health-info-component/health-info-component.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HealthInfoComponentComponent: () => (/* binding */ HealthInfoComponentComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 49966);
/* harmony import */ var _shared_utils_object_ngfor_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/utils/object-ngfor.pipe */ 99390);
/* harmony import */ var _health_panel_health_component_health_component_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../health-panel/health-component/health-component.component */ 83253);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);






function HealthInfoComponentComponent_div_0_div_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 15);
  }
}
function HealthInfoComponentComponent_div_0_div_1_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 16);
  }
}
function HealthInfoComponentComponent_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5)(1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HealthInfoComponentComponent_div_0_div_1_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const collapse_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](9);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](collapse_r2.toggle());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HealthInfoComponentComponent_div_0_div_1_Template_button_click_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event.preventDefault());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, HealthInfoComponentComponent_div_0_div_1_span_6_Template, 1, 0, "span", 9)(7, HealthInfoComponentComponent_div_0_div_1_span_7_Template, 1, 0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 11, 0)(10, "div", 12)(11, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "ds-health-info-component", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const collapse_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](9);
    const entry_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-expanded", !collapse_r2.collapsed)("aria-controls", "health-info-component-" + entry_r3.key + "-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 10, entry_r3.key), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", collapse_r2.collapsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !collapse_r2.collapsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", "health-info-component-" + entry_r3.key + "-content")("ngbCollapse", ctx_r3.isCollapsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("healthInfoComponent", entry_r3.value)("healthInfoComponentName", entry_r3.key)("isNested", true);
  }
}
function HealthInfoComponentComponent_div_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p", 17)(2, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const entry_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 2, ctx_r3.getPropertyLabel(entry_r3.key)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" : ", entry_r3.value, "");
  }
}
function HealthInfoComponentComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, HealthInfoComponentComponent_div_0_div_1_Template, 13, 12, "div", 3)(2, HealthInfoComponentComponent_div_0_ng_container_2_Template, 6, 4, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const entry_r3 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", entry_r3 && !ctx_r3.isPlainProperty(entry_r3.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", entry_r3 && ctx_r3.isPlainProperty(entry_r3.value));
  }
}
/**
 * Shows a health info object
 */
class HealthInfoComponentComponent extends _health_panel_health_component_health_component_component__WEBPACK_IMPORTED_MODULE_1__.HealthComponentComponent {
  constructor() {
    super(...arguments);
    /**
     * A boolean representing if div should start collapsed
     */
    this.isNested = false;
    /**
     * A boolean representing if div should start collapsed
     */
    this.isCollapsed = false;
  }
  /**
   * Check if the HealthInfoComponent is has only string property or contains object
   *
   * @param entry The HealthInfoComponent to check
   * @return boolean
   */
  isPlainProperty(entry) {
    return typeof entry === 'string';
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵHealthInfoComponentComponent_BaseFactory;
      return function HealthInfoComponentComponent_Factory(t) {
        return (ɵHealthInfoComponentComponent_BaseFactory || (ɵHealthInfoComponentComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](HealthInfoComponentComponent)))(t || HealthInfoComponentComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: HealthInfoComponentComponent,
      selectors: [["ds-health-info-component"]],
      inputs: {
        healthInfoComponent: "healthInfoComponent",
        healthInfoComponentName: "healthInfoComponentName",
        isNested: "isNested"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 3,
      consts: [["collapse", "ngbCollapse"], ["data-test", "collapse", 4, "ngFor", "ngForOf"], ["data-test", "collapse"], ["class", "mb-3 border-bottom", 4, "ngIf"], [4, "ngIf"], [1, "mb-3", "border-bottom"], [1, "w-100", "d-flex", "gap-3", "justify-content-between", "collapse-toggle", 3, "click"], ["type", "button", 1, "btn", "btn-link", "p-0", 3, "click"], [1, "d-flex", "my-auto"], ["class", "fas fa-chevron-down", 4, "ngIf"], ["class", "fas fa-chevron-up", 4, "ngIf"], [3, "id", "ngbCollapse"], [1, "card", "border-0"], [1, "card-body"], ["data-test", "info-component", 3, "healthInfoComponent", "healthInfoComponentName", "isNested"], [1, "fas", "fa-chevron-down"], [1, "fas", "fa-chevron-up"], ["data-test", "property"], [1, "font-weight-bold"]],
      template: function HealthInfoComponentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, HealthInfoComponentComponent_div_0_Template, 3, 2, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "dsObjNgFor");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 1, ctx.healthInfoComponent));
        }
      },
      dependencies: [HealthInfoComponentComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgFor, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbCollapseModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbCollapse, _angular_common__WEBPACK_IMPORTED_MODULE_3__.TitleCasePipe, _shared_utils_object_ngfor_pipe__WEBPACK_IMPORTED_MODULE_0__.ObjNgFor],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n.collapse-toggle[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWx0aC1pbmZvLWNvbXBvbmVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBO0VBQ0UsZUFBQTtBQUNGIiwiZmlsZSI6ImhlYWx0aC1pbmZvLWNvbXBvbmVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovXG4uY29sbGFwc2UtdG9nZ2xlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaGVhbHRoLXBhZ2UvaGVhbHRoLWluZm8vaGVhbHRoLWluZm8tY29tcG9uZW50L2hlYWx0aC1pbmZvLWNvbXBvbmVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBO0VBQ0UsZUFBQTtBQUNGO0FBQ0EsNHFCQUE0cUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqL1xuLmNvbGxhcHNlLXRvZ2dsZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 82633:
/*!******************************************************************!*\
  !*** ./src/app/health-page/health-info/health-info.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HealthInfoComponent: () => (/* binding */ HealthInfoComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 49966);
/* harmony import */ var _shared_utils_object_ngfor_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/utils/object-ngfor.pipe */ 99390);
/* harmony import */ var _health_panel_health_status_health_status_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../health-panel/health-status/health-status.component */ 35547);
/* harmony import */ var _health_info_component_health_info_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./health-info-component/health-info-component.component */ 53543);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 96439);









function HealthInfoComponent_ng_container_0_ngb_panel_3_ng_template_1_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 14);
  }
}
function HealthInfoComponent_ng_container_0_ngb_panel_3_ng_template_1_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 15);
  }
}
function HealthInfoComponent_ng_container_0_ngb_panel_3_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HealthInfoComponent_ng_container_0_ngb_panel_3_ng_template_1_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const entry_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      const acc_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](acc_r3.toggle(entry_r2.key));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HealthInfoComponent_ng_container_0_ngb_panel_3_ng_template_1_Template_button_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event.preventDefault());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "ds-health-status", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, HealthInfoComponent_ng_container_0_ngb_panel_3_ng_template_1_span_7_Template, 1, 0, "span", 12)(8, HealthInfoComponent_ng_container_0_ngb_panel_3_ng_template_1_span_8_Template, 1, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const entry_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const acc_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-expanded", acc_r3.isExpanded(entry_r2.key))("aria-controls", "health-info-" + entry_r2.key + "-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 6, ctx_r3.getPanelLabel(entry_r2.key)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("status", entry_r2.value == null ? null : entry_r2.value.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", acc_r3.isExpanded(entry_r2.key));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !acc_r3.isExpanded(entry_r2.key));
  }
}
function HealthInfoComponent_ng_container_0_ngb_panel_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "ds-health-info-component", 16);
  }
  if (rf & 2) {
    const entry_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("healthInfoComponentName", entry_r2.key)("healthInfoComponent", entry_r2.value)("id", "health-info-" + entry_r2.key + "-content");
  }
}
function HealthInfoComponent_ng_container_0_ngb_panel_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ngb-panel", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, HealthInfoComponent_ng_container_0_ngb_panel_3_ng_template_1_Template, 9, 8, "ng-template", 5)(2, HealthInfoComponent_ng_container_0_ngb_panel_3_ng_template_2_Template, 1, 3, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const entry_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", entry_r2.key);
  }
}
function HealthInfoComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ngb-accordion", 2, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, HealthInfoComponent_ng_container_0_ngb_panel_3_Template, 3, 1, "ngb-panel", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "dsObjNgFor");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("activeIds", ctx_r3.activeId);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 2, ctx_r3.healthInfoResponse));
  }
}
/**
 * A component to render a "health-info component" object.
 *
 * Note that the word "component" in "health-info component" doesn't refer to Angular use of the term
 * but rather to the components used in the response of the health endpoint of Spring's Actuator
 * API.
 */
class HealthInfoComponent {
  constructor(translate) {
    this.translate = translate;
  }
  ngOnInit() {
    this.activeId = Object.keys(this.healthInfoResponse)[0];
  }
  /**
   * Return translated label if exist for the given property
   *
   * @param panelKey
   */
  getPanelLabel(panelKey) {
    const translationKey = `health-page.section-info.${panelKey}.title`;
    const translation = this.translate.instant(translationKey);
    return translation === translationKey ? panelKey : translation;
  }
  static {
    this.ɵfac = function HealthInfoComponent_Factory(t) {
      return new (t || HealthInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: HealthInfoComponent,
      selectors: [["ds-health-info"]],
      inputs: {
        healthInfoResponse: "healthInfoResponse"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
      decls: 1,
      vars: 1,
      consts: [["acc", "ngbAccordion"], [4, "ngIf"], [3, "activeIds"], [3, "id", 4, "ngFor", "ngForOf"], [3, "id"], ["ngbPanelHeader", ""], ["ngbPanelContent", ""], ["ngbPanelToggle", "", "data-test", "info-component", 1, "w-100", "d-flex", "gap-3", "justify-content-between", "collapse-toggle", 3, "click"], ["type", "button", 1, "btn", "btn-link", "p-0", 3, "click"], [1, "text-right", "d-flex", "gap-2"], [3, "status"], [1, "d-flex", "my-auto"], ["class", "fas fa-chevron-up fa-fw", 4, "ngIf"], ["class", "fas fa-chevron-down fa-fw", 4, "ngIf"], [1, "fas", "fa-chevron-up", "fa-fw"], [1, "fas", "fa-chevron-down", "fa-fw"], [3, "healthInfoComponentName", "healthInfoComponent", "id"]],
      template: function HealthInfoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, HealthInfoComponent_ng_container_0_Template, 5, 4, "ng-container", 1);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.healthInfoResponse);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbAccordionModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbAccordion, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbPanel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbPanelContent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbPanelHeader, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgFor, _health_panel_health_status_health_status_component__WEBPACK_IMPORTED_MODULE_1__.HealthStatusComponent, _health_info_component_health_info_component_component__WEBPACK_IMPORTED_MODULE_2__.HealthInfoComponentComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.TitleCasePipe, _shared_utils_object_ngfor_pipe__WEBPACK_IMPORTED_MODULE_0__.ObjNgFor],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n.collapse-toggle[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWx0aC1pbmZvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBO0FBQ0E7RUFDRSxlQUFBO0FBQ0YiLCJmaWxlIjoiaGVhbHRoLWluZm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqL1xuLmNvbGxhcHNlLXRvZ2dsZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaGVhbHRoLXBhZ2UvaGVhbHRoLWluZm8vaGVhbHRoLWluZm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQTtFQUNFLGVBQUE7QUFDRjtBQUNBLGdwQkFBZ3BCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi9cbi5jb2xsYXBzZS10b2dnbGUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 29356:
/*!***************************************************!*\
  !*** ./src/app/health-page/health-page-routes.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ROUTES: () => (/* binding */ ROUTES)
/* harmony export */ });
/* harmony import */ var _core_breadcrumbs_i18n_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/breadcrumbs/i18n-breadcrumb.resolver */ 72059);
/* harmony import */ var _core_data_feature_authorization_feature_authorization_guard_site_administrator_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/data/feature-authorization/feature-authorization-guard/site-administrator.guard */ 36329);
/* harmony import */ var _health_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./health-page.component */ 48472);



const ROUTES = [{
  path: '',
  resolve: {
    breadcrumb: _core_breadcrumbs_i18n_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_0__.i18nBreadcrumbResolver
  },
  data: {
    breadcrumbKey: 'health',
    title: 'health-page.title'
  },
  canActivate: [_core_data_feature_authorization_feature_authorization_guard_site_administrator_guard__WEBPACK_IMPORTED_MODULE_1__.siteAdministratorGuard],
  component: _health_page_component__WEBPACK_IMPORTED_MODULE_2__.HealthPageComponent
}];

/***/ }),

/***/ 48472:
/*!******************************************************!*\
  !*** ./src/app/health-page/health-page.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HealthPageComponent: () => (/* binding */ HealthPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 49966);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 83485);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 78374);
/* harmony import */ var _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/alert/alert.component */ 16292);
/* harmony import */ var _shared_alert_alert_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/alert/alert-type */ 47978);
/* harmony import */ var _health_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./health.service */ 17764);
/* harmony import */ var _health_info_health_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./health-info/health-info.component */ 82633);
/* harmony import */ var _health_panel_health_panel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./health-panel/health-panel.component */ 11917);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 90310);














function HealthPageComponent_div_0_div_4_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "ds-health-panel", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("healthResponse", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, ctx_r0.healthResponse));
  }
}
function HealthPageComponent_div_0_div_4_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "ds-health-info", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("healthInfoResponse", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, ctx_r0.healthInfoResponse));
  }
}
function HealthPageComponent_div_0_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "ul", 5, 0)(3, "li", 6)(4, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, HealthPageComponent_div_0_div_4_ng_template_7_Template, 3, 3, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "li", 6)(9, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, HealthPageComponent_div_0_div_4_ng_template_12_Template, 3, 3, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const nav_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("activeId", "status");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngbNavItem", "status");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 6, "health-page.status-tab"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngbNavItem", "info");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](11, 8, "health-page.info-tab"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngbNavOutlet", nav_r2);
  }
}
function HealthPageComponent_div_0_ds_alert_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "ds-alert", 15);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("type", ctx_r0.AlertType.Error)("content", "health-page.error.msg");
  }
}
function HealthPageComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 2)(1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, HealthPageComponent_div_0_div_4_Template, 14, 10, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, HealthPageComponent_div_0_ds_alert_7_Template, 1, 2, "ds-alert", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 3, "health-page.heading"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 5, ctx_r0.healthResponse) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 7, ctx_r0.healthInfoResponse));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](8, 9, ctx_r0.healthResponse) === null || _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](9, 11, ctx_r0.healthInfoResponse) === null);
  }
}
class HealthPageComponent {
  constructor(healthDataService) {
    this.healthDataService = healthDataService;
    /**
     * Health info endpoint response
     */
    this.healthInfoResponse = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject(null);
    /**
     * Health endpoint response
     */
    this.healthResponse = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject(null);
    /**
     * Represent if the response from health status endpoint is already retrieved or not
     */
    this.healthResponseInitialised = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject(false);
    /**
     * Represent if the response from health info endpoint is already retrieved or not
     */
    this.healthInfoResponseInitialised = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject(false);
    this.AlertType = _shared_alert_alert_type__WEBPACK_IMPORTED_MODULE_1__.AlertType;
  }
  /**
   * Retrieve responses from rest
   */
  ngOnInit() {
    this.healthDataService.getHealth().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.take)(1)).subscribe({
      next: data => {
        this.healthResponse.next(data.payload);
        this.healthResponseInitialised.next(true);
      },
      error: () => {
        this.healthResponse.next(null);
        this.healthResponseInitialised.next(true);
      }
    });
    this.healthDataService.getInfo().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.take)(1)).subscribe({
      next: data => {
        this.healthInfoResponse.next(data.payload);
        this.healthInfoResponseInitialised.next(true);
      },
      error: () => {
        this.healthInfoResponse.next(null);
        this.healthInfoResponseInitialised.next(true);
      }
    });
  }
  static {
    this.ɵfac = function HealthPageComponent_Factory(t) {
      return new (t || HealthPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_health_service__WEBPACK_IMPORTED_MODULE_2__.HealthService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: HealthPageComponent,
      selectors: [["ds-health-page"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵStandaloneFeature"]],
      decls: 3,
      vars: 5,
      consts: [["nav", "ngbNav"], ["class", "container", 4, "ngIf"], [1, "container"], [4, "ngIf"], [3, "type", "content", 4, "ngIf"], ["ngbNav", "", 1, "nav-tabs", 3, "activeId"], ["role", "presentation", 3, "ngbNavItem"], ["data-test", "health-page.status-tab", "ngbNavLink", ""], ["ngbNavContent", ""], ["data-test", "health-page.info-tab", "ngbNavLink", ""], [1, "mt-2", 3, "ngbNavOutlet"], ["id", "status"], [3, "healthResponse"], ["id", "info"], [3, "healthInfoResponse"], [3, "type", "content"]],
      template: function HealthPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, HealthPageComponent_div_0_Template, 10, 13, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "async");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 1, ctx.healthResponseInitialised) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 3, ctx.healthInfoResponseInitialised));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbNavModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbNavContent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbNav, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbNavOutlet, _health_panel_health_panel_component__WEBPACK_IMPORTED_MODULE_4__.HealthPanelComponent, _health_info_health_info_component__WEBPACK_IMPORTED_MODULE_3__.HealthInfoComponent, _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_0__.AlertComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWx0aC1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBIiwiZmlsZSI6ImhlYWx0aC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi8iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaGVhbHRoLXBhZ2UvaGVhbHRoLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQSw0akJBQTRqQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 83253:
/*!*****************************************************************************************!*\
  !*** ./src/app/health-page/health-panel/health-component/health-component.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HealthComponentComponent: () => (/* binding */ HealthComponentComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 49966);
/* harmony import */ var _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/alert/alert.component */ 16292);
/* harmony import */ var _shared_alert_alert_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/alert/alert-type */ 47978);
/* harmony import */ var _shared_utils_object_ngfor_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/utils/object-ngfor.pipe */ 99390);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 96439);









function HealthComponentComponent_ng_container_0_div_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 13);
  }
}
function HealthComponentComponent_ng_container_0_div_1_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 14);
  }
}
function HealthComponentComponent_ng_container_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 3)(1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HealthComponentComponent_ng_container_0_div_1_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const collapse_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](9);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](collapse_r2.toggle());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HealthComponentComponent_ng_container_0_div_1_Template_button_click_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event.preventDefault());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, HealthComponentComponent_ng_container_0_div_1_span_6_Template, 1, 0, "span", 7)(7, HealthComponentComponent_ng_container_0_div_1_span_7_Template, 1, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 9, 0)(10, "div", 10)(11, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "ds-health-component", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const entry_r3 = ctx.$implicit;
    const collapse_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](9);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-expanded", !collapse_r2.collapsed)("aria-controls", "health-component-" + entry_r3.key + "content");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 9, entry_r3.key), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", collapse_r2.collapsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !collapse_r2.collapsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", "health-component-" + entry_r3.key + "content")("ngbCollapse", ctx_r3.isCollapsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("healthComponent", entry_r3.value)("healthComponentName", entry_r3.key);
  }
}
function HealthComponentComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, HealthComponentComponent_ng_container_0_div_1_Template, 13, 11, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "dsObjNgFor");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, ctx_r3.healthComponent == null ? null : ctx_r3.healthComponent.components));
  }
}
function HealthComponentComponent_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16)(1, "p", 17)(2, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 2, ctx_r3.getPropertyLabel(item_r5.key)));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" : ", item_r5.value, "");
  }
}
function HealthComponentComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, HealthComponentComponent_ng_container_1_div_1_Template, 6, 4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "dsObjNgFor");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, ctx_r3.healthComponent == null ? null : ctx_r3.healthComponent.details));
  }
}
function HealthComponentComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "ds-alert", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("content", "health-page.section.no-issues")("type", ctx_r3.AlertTypeEnum.Info);
  }
}
/**
 * A component to render a "health component" object.
 *
 * Note that the word "component" in "health component" doesn't refer to Angular use of the term
 * but rather to the components used in the response of the health endpoint of Spring's Actuator
 * API.
 */
class HealthComponentComponent {
  constructor(translate) {
    this.translate = translate;
    this.AlertTypeEnum = _shared_alert_alert_type__WEBPACK_IMPORTED_MODULE_1__.AlertType;
    /**
     * A boolean representing if div should start collapsed
     */
    this.isCollapsed = false;
  }
  /**
   * Return translated label if exist for the given property
   *
   * @param property
   */
  getPropertyLabel(property) {
    const translationKey = `health-page.property.${property}`;
    const translation = this.translate.instant(translationKey);
    return translation === translationKey ? property : translation;
  }
  static {
    this.ɵfac = function HealthComponentComponent_Factory(t) {
      return new (t || HealthComponentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: HealthComponentComponent,
      selectors: [["ds-health-component"]],
      inputs: {
        healthComponent: "healthComponent",
        healthComponentName: "healthComponentName"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
      decls: 3,
      vars: 3,
      consts: [["collapse", "ngbCollapse"], [4, "ngIf"], ["class", "mb-3 border-bottom", "data-test", "collapse", 4, "ngFor", "ngForOf"], ["data-test", "collapse", 1, "mb-3", "border-bottom"], [1, "w-100", "d-flex", "gap-3", "justify-content-between", "collapse-toggle", 3, "click"], ["type", "button", 1, "btn", "btn-link", "p-0", 3, "click"], [1, "d-flex", "my-auto"], ["class", "fas fa-chevron-down", 4, "ngIf"], ["class", "fas fa-chevron-up", 4, "ngIf"], [3, "id", "ngbCollapse"], [1, "card", "border-0"], [1, "card-body"], [3, "healthComponent", "healthComponentName"], [1, "fas", "fa-chevron-down"], [1, "fas", "fa-chevron-up"], ["data-test", "details", 4, "ngFor", "ngForOf"], ["data-test", "details"], ["data-test", "property"], [1, "font-weight-bold"], [3, "content", "type"]],
      template: function HealthComponentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, HealthComponentComponent_ng_container_0_Template, 3, 3, "ng-container", 1)(1, HealthComponentComponent_ng_container_1_Template, 3, 3, "ng-container", 1)(2, HealthComponentComponent_ng_container_2_Template, 2, 2, "ng-container", 1);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.healthComponent == null ? null : ctx.healthComponent.components);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.healthComponent == null ? null : ctx.healthComponent.details);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !(ctx.healthComponent == null ? null : ctx.healthComponent.details) && !(ctx.healthComponent == null ? null : ctx.healthComponent.components));
        }
      },
      dependencies: [HealthComponentComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgFor, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbCollapseModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbCollapse, _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_0__.AlertComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.TitleCasePipe, _shared_utils_object_ngfor_pipe__WEBPACK_IMPORTED_MODULE_2__.ObjNgFor],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n.collapse-toggle[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWx0aC1jb21wb25lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQTtFQUNFLGVBQUE7QUFDRiIsImZpbGUiOiJoZWFsdGgtY29tcG9uZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi9cbi5jb2xsYXBzZS10b2dnbGUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaGVhbHRoLXBhZ2UvaGVhbHRoLXBhbmVsL2hlYWx0aC1jb21wb25lbnQvaGVhbHRoLWNvbXBvbmVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBO0VBQ0UsZUFBQTtBQUNGO0FBQ0EsNHBCQUE0cEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqL1xuLmNvbGxhcHNlLXRvZ2dsZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 11917:
/*!********************************************************************!*\
  !*** ./src/app/health-page/health-panel/health-panel.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HealthPanelComponent: () => (/* binding */ HealthPanelComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 49966);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var _shared_utils_object_ngfor_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/utils/object-ngfor.pipe */ 99390);
/* harmony import */ var _health_component_health_component_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./health-component/health-component.component */ 83253);
/* harmony import */ var _health_status_health_status_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./health-status/health-status.component */ 35547);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 90310);









function HealthPanelComponent_ngb_panel_6_ng_template_1_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 15);
  }
}
function HealthPanelComponent_ngb_panel_6_ng_template_1_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 16);
  }
}
function HealthPanelComponent_ngb_panel_6_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HealthPanelComponent_ngb_panel_6_ng_template_1_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const entry_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      const acc_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](acc_r3.toggle(entry_r2.key));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HealthPanelComponent_ngb_panel_6_ng_template_1_Template_button_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event.preventDefault());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "ds-health-status", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, HealthPanelComponent_ngb_panel_6_ng_template_1_span_7_Template, 1, 0, "span", 13)(8, HealthPanelComponent_ngb_panel_6_ng_template_1_span_8_Template, 1, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const entry_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const acc_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-expanded", acc_r3.isExpanded(entry_r2.key))("aria-controls", "health-panel-" + entry_r2.key + "-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 6, ctx_r3.getPanelLabel(entry_r2.key)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("status", entry_r2.value == null ? null : entry_r2.value.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", acc_r3.isExpanded(entry_r2.key));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !acc_r3.isExpanded(entry_r2.key));
  }
}
function HealthPanelComponent_ngb_panel_6_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "ds-health-component", 17);
  }
  if (rf & 2) {
    const entry_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("healthComponent", entry_r2.value)("healthComponentName", entry_r2.key)("id", "health-panel-" + entry_r2.key + "-content");
  }
}
function HealthPanelComponent_ngb_panel_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ngb-panel", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, HealthPanelComponent_ngb_panel_6_ng_template_1_Template, 9, 8, "ng-template", 6)(2, HealthPanelComponent_ngb_panel_6_ng_template_2_Template, 1, 3, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const entry_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", entry_r2.key);
  }
}
/**
 * Show the health panel
 */
class HealthPanelComponent {
  constructor(translate) {
    this.translate = translate;
  }
  ngOnInit() {
    this.activeId = Object.keys(this.healthResponse.components)[0];
  }
  /**
   * Return translated label if exist for the given property
   *
   * @param panelKey
   */
  getPanelLabel(panelKey) {
    const translationKey = `health-page.section.${panelKey}.title`;
    const translation = this.translate.instant(translationKey);
    return translation === translationKey ? panelKey : translation;
  }
  static {
    this.ɵfac = function HealthPanelComponent_Factory(t) {
      return new (t || HealthPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: HealthPanelComponent,
      selectors: [["ds-health-panel"]],
      inputs: {
        healthResponse: "healthResponse"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
      decls: 8,
      vars: 8,
      consts: [["acc", "ngbAccordion"], [1, "h4"], [1, "d-inline-flex", 3, "status"], [3, "activeIds"], [3, "id", 4, "ngFor", "ngForOf"], [3, "id"], ["ngbPanelHeader", ""], ["ngbPanelContent", ""], ["ngbPanelToggle", "", "data-test", "component", 1, "w-100", "d-flex", "gap-3", "justify-content-between", "collapse-toggle", 3, "click"], ["type", "button", 1, "btn", "btn-link", "p-0", 3, "click"], [1, "text-right", "d-flex", "gap-2"], [3, "status"], [1, "d-flex", "my-auto"], ["class", "fas fa-chevron-up fa-fw", 4, "ngIf"], ["class", "fas fa-chevron-down fa-fw", 4, "ngIf"], [1, "fas", "fa-chevron-up", "fa-fw"], [1, "fas", "fa-chevron-down", "fa-fw"], ["role", "presentation", 3, "healthComponent", "healthComponentName", "id"]],
      template: function HealthPanelComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "ds-health-status", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ngb-accordion", 3, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, HealthPanelComponent_ngb_panel_6_Template, 3, 1, "ngb-panel", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "dsObjNgFor");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 4, "health-page.status"), ": ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("status", ctx.healthResponse.status);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("activeIds", ctx.activeId);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 6, ctx.healthResponse.components));
        }
      },
      dependencies: [_health_status_health_status_component__WEBPACK_IMPORTED_MODULE_2__.HealthStatusComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbAccordionModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbAccordion, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbPanel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbPanelContent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbPanelHeader, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgFor, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _health_component_health_component_component__WEBPACK_IMPORTED_MODULE_1__.HealthComponentComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.TitleCasePipe, _shared_utils_object_ngfor_pipe__WEBPACK_IMPORTED_MODULE_0__.ObjNgFor, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n.collapse-toggle[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWx0aC1wYW5lbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBO0VBQ0UsZUFBQTtBQUNGIiwiZmlsZSI6ImhlYWx0aC1wYW5lbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovXG4uY29sbGFwc2UtdG9nZ2xlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaGVhbHRoLXBhZ2UvaGVhbHRoLXBhbmVsL2hlYWx0aC1wYW5lbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBO0VBQ0UsZUFBQTtBQUNGO0FBQ0Esb3BCQUFvcEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqL1xuLmNvbGxhcHNlLXRvZ2dsZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 35547:
/*!***********************************************************************************!*\
  !*** ./src/app/health-page/health-panel/health-status/health-status.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HealthStatusComponent: () => (/* binding */ HealthStatusComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 49966);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var _models_health_component_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/health-component.model */ 19967);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 90310);







function HealthStatusComponent_i_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("ngbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, "health-page.status.ok.info"));
  }
}
function HealthStatusComponent_i_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("ngbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, "health-page.status.warning.info"));
  }
}
function HealthStatusComponent_i_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("ngbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, "health-page.status.error.info"));
  }
}
/**
 * Show a health status object
 */
class HealthStatusComponent {
  constructor() {
    /**
     * Health Status
     */
    this.HealthStatus = _models_health_component_model__WEBPACK_IMPORTED_MODULE_0__.HealthStatus;
  }
  static {
    this.ɵfac = function HealthStatusComponent_Factory(t) {
      return new (t || HealthStatusComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: HealthStatusComponent,
      selectors: [["ds-health-status"]],
      inputs: {
        status: "status"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 4,
      vars: 4,
      consts: [[3, "ngSwitch"], ["class", "fa fa-check-circle text-success my-auto", "container", "body", 3, "ngbTooltip", 4, "ngSwitchCase"], ["class", "fa fa-exclamation-triangle text-warning my-auto", "container", "body", 3, "ngbTooltip", 4, "ngSwitchCase"], ["class", "fa fa-times-circle text-danger my-auto", "container", "body", 3, "ngbTooltip", 4, "ngSwitchCase"], ["container", "body", 1, "fa", "fa-check-circle", "text-success", "my-auto", 3, "ngbTooltip"], ["container", "body", 1, "fa", "fa-exclamation-triangle", "text-warning", "my-auto", 3, "ngbTooltip"], ["container", "body", 1, "fa", "fa-times-circle", "text-danger", "my-auto", 3, "ngbTooltip"]],
      template: function HealthStatusComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HealthStatusComponent_i_1_Template, 2, 3, "i", 1)(2, HealthStatusComponent_i_2_Template, 2, 3, "i", 2)(3, HealthStatusComponent_i_3_Template, 2, 3, "i", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", ctx.status);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", ctx.HealthStatus.UP);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", ctx.HealthStatus.UP_WITH_ISSUES);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", ctx.HealthStatus.DOWN);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgSwitchCase, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbTooltipModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbTooltip, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%] {\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWx0aC1zdGF0dXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQTtFQUNFLGFBQUE7QUFDRiIsImZpbGUiOiJoZWFsdGgtc3RhdHVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi9cbjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaGVhbHRoLXBhZ2UvaGVhbHRoLXBhbmVsL2hlYWx0aC1zdGF0dXMvaGVhbHRoLXN0YXR1cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBO0VBQ0UsYUFBQTtBQUNGO0FBQ0Esb29CQUFvb0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqL1xuOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 17764:
/*!***********************************************!*\
  !*** ./src/app/health-page/health.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HealthService: () => (/* binding */ HealthService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 84975);
/* harmony import */ var _core_dspace_rest_dspace_rest_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/dspace-rest/dspace-rest.service */ 53778);
/* harmony import */ var _core_shared_hal_endpoint_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/shared/hal-endpoint.service */ 4910);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 90310);






class HealthService {
  constructor(halService, restService) {
    this.halService = halService;
    this.restService = restService;
  }
  /**
     * @returns health data
     */
  getHealth() {
    return this.halService.getEndpoint('/actuator').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(restURL => restURL + '/health'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.switchMap)(endpoint => this.restService.get(endpoint)));
  }
  /**
     * @returns information of server
     */
  getInfo() {
    return this.halService.getEndpoint('/actuator').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(restURL => restURL + '/info'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.switchMap)(endpoint => this.restService.get(endpoint)));
  }
  static {
    this.ɵfac = function HealthService_Factory(t) {
      return new (t || HealthService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_core_shared_hal_endpoint_service__WEBPACK_IMPORTED_MODULE_1__.HALEndpointService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_core_dspace_rest_dspace_rest_service__WEBPACK_IMPORTED_MODULE_0__.DspaceRestService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: HealthService,
      factory: HealthService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 19967:
/*!**************************************************************!*\
  !*** ./src/app/health-page/models/health-component.model.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HealthStatus: () => (/* binding */ HealthStatus)
/* harmony export */ });
/**
 * Interface for Health Status
 */
var HealthStatus;
(function (HealthStatus) {
  HealthStatus["UP"] = "UP";
  HealthStatus["UP_WITH_ISSUES"] = "UP_WITH_ISSUES";
  HealthStatus["DOWN"] = "DOWN";
})(HealthStatus || (HealthStatus = {}));

/***/ })

}]);
//# sourceMappingURL=src_app_health-page_health-page-routes_ts.js.map