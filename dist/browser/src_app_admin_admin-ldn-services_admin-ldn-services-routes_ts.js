"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_app_admin_admin-ldn-services_admin-ldn-services-routes_ts"],{

/***/ 43776:
/*!***********************************************************************!*\
  !*** ./src/app/admin/admin-ldn-services/admin-ldn-services-routes.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ROUTES: () => (/* binding */ ROUTES)
/* harmony export */ });
/* harmony import */ var _core_breadcrumbs_i18n_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/breadcrumbs/i18n-breadcrumb.resolver */ 72059);
/* harmony import */ var _core_breadcrumbs_navigation_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/breadcrumbs/navigation-breadcrumb.resolver */ 17885);
/* harmony import */ var _ldn_service_form_ldn_service_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ldn-service-form/ldn-service-form.component */ 86182);
/* harmony import */ var _ldn_services_directory_ldn_services_directory_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ldn-services-directory/ldn-services-directory.component */ 61794);




const moduleRoutes = [{
  path: '',
  pathMatch: 'full',
  component: _ldn_services_directory_ldn_services_directory_component__WEBPACK_IMPORTED_MODULE_3__.LdnServicesOverviewComponent,
  resolve: {
    breadcrumb: _core_breadcrumbs_i18n_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_0__.i18nBreadcrumbResolver
  },
  data: {
    title: 'ldn-registered-services.title',
    breadcrumbKey: 'ldn-registered-services.new'
  }
}, {
  path: 'new',
  resolve: {
    breadcrumb: _core_breadcrumbs_navigation_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_1__.navigationBreadcrumbResolver
  },
  component: _ldn_service_form_ldn_service_form_component__WEBPACK_IMPORTED_MODULE_2__.LdnServiceFormComponent,
  data: {
    title: 'ldn-register-new-service.title',
    breadcrumbKey: 'ldn-register-new-service'
  }
}, {
  path: 'edit/:serviceId',
  resolve: {
    breadcrumb: _core_breadcrumbs_navigation_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_1__.navigationBreadcrumbResolver
  },
  component: _ldn_service_form_ldn_service_form_component__WEBPACK_IMPORTED_MODULE_2__.LdnServiceFormComponent,
  data: {
    title: 'ldn-edit-service.title',
    breadcrumbKey: 'ldn-edit-service'
  }
}];
const ROUTES = moduleRoutes.map(route => {
  return {
    ...route,
    data: {
      ...route.data,
      relatedRoutes: moduleRoutes.filter(relatedRoute => relatedRoute.path !== route.path).map(relatedRoute => {
        return {
          path: relatedRoute.path,
          data: relatedRoute.data
        };
      })
    }
  };
});

/***/ }),

/***/ 86182:
/*!*****************************************************************************************!*\
  !*** ./src/app/admin/admin-ldn-services/ldn-service-form/ldn-service-form.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LdnServiceFormComponent: () => (/* binding */ LdnServiceFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/animations */ 40262);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 56106);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 49966);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 63268);
/* harmony import */ var _core_data_find_list_options_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/data/find-list-options.model */ 41023);
/* harmony import */ var _core_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/pagination/pagination.service */ 76896);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/shared/operators */ 55757);
/* harmony import */ var _shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/notifications/notifications.service */ 69472);
/* harmony import */ var _shared_utils_ipV4_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/utils/ipV4.validator */ 33749);
/* harmony import */ var _ldn_services_data_ldn_itemfilters_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ldn-services-data/ldn-itemfilters-data.service */ 16734);
/* harmony import */ var _ldn_services_data_ldn_services_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ldn-services-data/ldn-services-data.service */ 68630);
/* harmony import */ var _ldn_services_model_ldn_service_resource_type__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ldn-services-model/ldn-service.resource-type */ 29009);
/* harmony import */ var _ldn_services_model_ldn_service_patterns_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ldn-services-model/ldn-service-patterns.model */ 62361);
/* harmony import */ var _ldn_services_patterns_ldn_service_coar_patterns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ldn-services-patterns/ldn-service-coar-patterns */ 58102);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 14354);



























const _c0 = ["confirmModal"];
const _c1 = ["resetFormModal"];
const _c2 = [[["", "before", ""]]];
const _c3 = ["[before]"];
function LdnServiceFormComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 37)(1, "label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](5, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function LdnServiceFormComponent_div_7_Template_div_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r2.toggleEnabled());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](7, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 3, "ldn-service-status"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("checked", ctx_r2.formModel.get("enabled").value);
  }
}
function LdnServiceFormComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, "ldn-new-service.form.error.name"), " ");
  }
}
function LdnServiceFormComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, "ldn-new-service.form.error.url"), " ");
  }
}
function LdnServiceFormComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, "ldn-new-service.form.error.score"), " ");
  }
}
function LdnServiceFormComponent_div_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, "ldn-new-service.form.error.ipRange"), " ");
  }
}
function LdnServiceFormComponent_div_56_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, "ldn-new-service.form.error.ldnurl"), " ");
  }
}
function LdnServiceFormComponent_div_56_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, "ldn-new-service.form.error.ldnurl.ldnUrlAlreadyAssociated"), " ");
  }
}
function LdnServiceFormComponent_div_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, LdnServiceFormComponent_div_56_div_1_Template, 3, 3, "div", 11)(2, LdnServiceFormComponent_div_56_div_2_Template, 3, 3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r2.formModel.get("ldnUrl").errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r2.formModel.get("ldnUrl").errors["ldnUrlAlreadyAssociated"]);
  }
}
function LdnServiceFormComponent_div_57_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 44)(2, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 47)(6, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 2, "ldn-new-service.form.label.ItemFilter"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](8, 4, "ldn-new-service.form.label.automatic"));
  }
}
function LdnServiceFormComponent_div_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 43)(1, "div", 44)(2, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, LdnServiceFormComponent_div_57_ng_container_5_Template, 9, 6, "ng-container", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](6, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 2, "ldn-new-service.form.label.inboundPattern"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx_r2.formModel.get("notifyServiceInboundPatterns")["controls"][0]) == null ? null : tmp_3_0.value == null ? null : tmp_3_0.value.pattern);
  }
}
function LdnServiceFormComponent_div_58_div_1_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function LdnServiceFormComponent_div_58_div_1_button_12_Template_button_click_0_listener($event) {
      const pattern_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r6).$implicit;
      const i_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      ctx_r2.selectInboundPattern(pattern_r7, i_r8);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const pattern_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](1, 2, "ldn-service.form.pattern." + pattern_r7 + ".description"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 4, "ldn-service.form.pattern." + pattern_r7 + ".label"));
  }
}
function LdnServiceFormComponent_div_58_div_1_ng_container_14_button_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function LdnServiceFormComponent_div_58_div_1_ng_container_14_button_15_Template_button_click_0_listener($event) {
      const constraint_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r11).$implicit;
      const i_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      ctx_r2.selectInboundItemFilter(constraint_r12.id, i_r8);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const constraint_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 1, constraint_r12.id + ".label"));
  }
}
function LdnServiceFormComponent_div_58_div_1_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 65, 2)(3, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "i", 54)(5, "input", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function LdnServiceFormComponent_div_58_div_1_ng_container_14_Template_input_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r9);
      const inboundItemfilterDropdown_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](inboundItemfilterDropdown_r10.open());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "div", 69)(10, "div", 57)(11, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function LdnServiceFormComponent_div_58_div_1_ng_container_14_Template_button_click_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r9);
      const i_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      ctx_r2.selectInboundItemFilter("", i_r8);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](15, LdnServiceFormComponent_div_58_div_1_ng_container_14_button_15_Template, 4, 3, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](16, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    let tmp_14_0;
    const i_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate1"]("id", "constraint", i_r8, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("readonly", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](6, 8, "ldn-service-input-inbound-item-filter-dropdown"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("readonly", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](8, 10, "ldn-service-input-inbound-item-filter-dropdown"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](14, 12, "ldn-service.control-constaint-select-none"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", (tmp_14_0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](16, 14, ctx_r2.itemFiltersRD$)) == null ? null : tmp_14_0.payload == null ? null : tmp_14_0.payload.page);
  }
}
function LdnServiceFormComponent_div_58_div_1_button_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function LdnServiceFormComponent_div_58_div_1_button_24_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r13);
      const i_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r2.unmarkForInboundPatternDeletion(i_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "i", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](1, 1, "ldn-service-button-unmark-inbound-deletion"));
  }
}
function LdnServiceFormComponent_div_58_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](1, 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 51)(3, "div", 44)(4, "div", 52, 1)(6, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](7, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function LdnServiceFormComponent_div_58_div_1_Template_input_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r4);
      const inboundPatternDropdown_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](inboundPatternDropdown_r5.open());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "div", 56)(11, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](12, LdnServiceFormComponent_div_58_div_1_button_12_Template, 5, 6, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](14, LdnServiceFormComponent_div_58_div_1_ng_container_14_Template, 17, 16, "ng-container", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](16, "input", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function LdnServiceFormComponent_div_58_div_1_Template_div_click_17_listener() {
      const i_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r4).index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r2.toggleAutomatic(i_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](18, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "div", 46)(20, "div", 60)(21, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function LdnServiceFormComponent_div_58_div_1_Template_button_click_21_listener() {
      const i_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r4).index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r2.markForInboundPatternDeletion(i_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](23, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](24, LdnServiceFormComponent_div_58_div_1_button_24_Template, 3, 3, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r8 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("marked-for-deletion", ctx_r2.markedForDeletionInboundPattern.includes(i_r8));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroupName", i_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate1"]("id", "additionalInboundPattern", i_r8, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("readonly", true)("value", ctx_r2.selectedInboundPatterns);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](9, 20, "ldn-service-input-inbound-pattern-dropdown"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r2.inboundPatterns);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r2.formModel.get("notifyServiceInboundPatterns")["controls"][i_r8].value.pattern);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵstyleProp"]("visibility", ctx_r2.formModel.get("notifyServiceInboundPatterns")["controls"][i_r8].value.pattern ? "visible" : "hidden");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate1"]("id", "automatic", i_r8, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate1"]("name", "automatic", i_r8, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("checked", ctx_r2.formModel.get("notifyServiceInboundPatterns." + i_r8 + ".automatic").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](22, 22, "ldn-service-button-mark-inbound-deletion"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r2.markedForDeletionInboundPattern.includes(i_r8));
  }
}
function LdnServiceFormComponent_div_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, LdnServiceFormComponent_div_58_div_1_Template, 25, 24, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r2.formModel.get("notifyServiceInboundPatterns")["controls"]);
  }
}
function LdnServiceFormComponent_ng_template_75_h4_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, "service.overview.edit.modal"));
  }
}
function LdnServiceFormComponent_ng_template_75_h4_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, "service.overview.create.modal"));
  }
}
function LdnServiceFormComponent_ng_template_75_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, "service.overview.edit.body"), " ");
  }
}
function LdnServiceFormComponent_ng_template_75_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, "service.overview.create.body"), " ");
  }
}
function LdnServiceFormComponent_ng_template_75_div_10_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function LdnServiceFormComponent_ng_template_75_div_10_button_4_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r16);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r2.patchService());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, "service.detail.update"), " ");
  }
}
function LdnServiceFormComponent_ng_template_75_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div")(1, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function LdnServiceFormComponent_ng_template_75_div_10_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r15);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r2.closeModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, LdnServiceFormComponent_ng_template_75_div_10_button_4_Template, 3, 3, "button", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 2, "service.detail.return"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r2.isNewService);
  }
}
function LdnServiceFormComponent_ng_template_75_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div")(1, "button", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function LdnServiceFormComponent_ng_template_75_div_11_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r17);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r2.closeModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "button", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function LdnServiceFormComponent_ng_template_75_div_11_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r17);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r2.createService());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 2, "service.refuse.create"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](6, 4, "service.confirm.create"), " ");
  }
}
function LdnServiceFormComponent_ng_template_75_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, LdnServiceFormComponent_ng_template_75_h4_1_Template, 3, 3, "h4", 29)(2, LdnServiceFormComponent_ng_template_75_h4_2_Template, 3, 3, "h4", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "button", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function LdnServiceFormComponent_ng_template_75_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r14);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r2.closeModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](7, LdnServiceFormComponent_ng_template_75_div_7_Template, 3, 3, "div", 29)(8, LdnServiceFormComponent_ng_template_75_span_8_Template, 3, 3, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](10, LdnServiceFormComponent_ng_template_75_div_10_Template, 5, 4, "div", 29)(11, LdnServiceFormComponent_ng_template_75_div_11_Template, 7, 6, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r2.isNewService);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r2.isNewService);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r2.isNewService);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r2.isNewService);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r2.isNewService);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r2.isNewService);
  }
}
/**
 * Component for editing LDN service through a form that allows to create or edit the properties of a service
 */
class LdnServiceFormComponent {
  constructor(ldnServicesService, ldnItemFiltersService, formBuilder, router, route, cdRef, modalService, notificationService, translateService, paginationService) {
    this.ldnServicesService = ldnServicesService;
    this.ldnItemFiltersService = ldnItemFiltersService;
    this.formBuilder = formBuilder;
    this.router = router;
    this.route = route;
    this.cdRef = cdRef;
    this.modalService = modalService;
    this.notificationService = notificationService;
    this.translateService = translateService;
    this.paginationService = paginationService;
    this.inboundPatterns = _ldn_services_patterns_ldn_service_coar_patterns__WEBPACK_IMPORTED_MODULE_9__.notifyPatterns;
    this.config = Object.assign(new _core_data_find_list_options_model__WEBPACK_IMPORTED_MODULE_0__.FindListOptions(), {
      elementsPerPage: 20
    });
    this.markedForDeletionInboundPattern = [];
    this.deletedInboundPatterns = [];
    this.selectPatternDefaultLabelI18Key = 'ldn-service.form.label.placeholder.default-select';
    this.formModel = this.formBuilder.group({
      id: [''],
      name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
      description: [''],
      url: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
      ldnUrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
      lowerIp: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, new _shared_utils_ipV4_validator__WEBPACK_IMPORTED_MODULE_4__.IpV4Validator()]],
      upperIp: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, new _shared_utils_ipV4_validator__WEBPACK_IMPORTED_MODULE_4__.IpV4Validator()]],
      score: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.pattern('^0*(\.[0-9]+)?$|^1(\.0+)?$')]],
      inboundPattern: [''],
      constraintPattern: [''],
      enabled: [''],
      type: _ldn_services_model_ldn_service_resource_type__WEBPACK_IMPORTED_MODULE_7__.LDN_SERVICE.value
    });
  }
  ngOnInit() {
    this.routeSubscription = this.route.params.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.combineLatestWith)(this.route.url)).subscribe(([params, segment]) => {
      this.serviceId = params.serviceId;
      this.isNewService = segment[0].path === 'new';
      this.formModel.addControl('notifyServiceInboundPatterns', this.formBuilder.array([this.createInboundPatternFormGroup()]));
      this.areControlsInitialized = true;
      if (this.serviceId && !this.isNewService) {
        this.fetchServiceData(this.serviceId);
      }
    });
    this.setItemFilters();
  }
  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }
  /**
   * Sets item filters using LDN item filters service
   */
  setItemFilters() {
    this.itemFiltersRD$ = this.ldnItemFiltersService.findAll().pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_2__.getFirstCompletedRemoteData)());
  }
  /**
   * Handles the creation of an LDN service by retrieving and validating form fields,
   * and submitting the form data to the LDN services endpoint.
   */
  createService() {
    this.formModel.markAllAsTouched();
    if (this.formModel.invalid) {
      this.closeModal();
      return;
    }
    this.formModel.value.notifyServiceInboundPatterns = this.formModel.value.notifyServiceInboundPatterns.map(pattern => {
      const {
        patternLabel,
        ...rest
      } = pattern;
      delete rest.constraintFormatted;
      return rest;
    });
    const values = {
      ...this.formModel.value,
      enabled: true
    };
    const ldnServiceData = this.ldnServicesService.create(values);
    ldnServiceData.pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_2__.getFirstCompletedRemoteData)()).subscribe(rd => {
      if (rd.hasSucceeded) {
        this.notificationService.success(this.translateService.get('ldn-service-notification.created.success.title'), this.translateService.get('ldn-service-notification.created.success.body'));
        this.closeModal();
        this.sendBack();
      } else {
        if (!this.formModel.errors) {
          this.setLdnUrlError();
        }
        this.notificationService.error(this.translateService.get('ldn-service-notification.created.failure.title'), this.translateService.get('ldn-service-notification.created.failure.body'));
        this.closeModal();
      }
    });
  }
  /**
   * Checks if at least one pattern in the specified form array has a value.
   *
   * @param {FormArray} formArray - The form array containing patterns to check.
   * @returns {boolean} - True if at least one pattern has a value, otherwise false.
   */
  checkPatterns(formArray) {
    for (let i = 0; i < formArray.length; i++) {
      const pattern = formArray.at(i).get('pattern').value;
      if (pattern) {
        return true;
      }
    }
    return false;
  }
  /**
   * Fetches LDN service data by ID and updates the form
   * @param serviceId - The ID of the LDN service
   */
  fetchServiceData(serviceId) {
    this.ldnServicesService.findById(serviceId).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_2__.getFirstCompletedRemoteData)()).subscribe(data => {
      if (data.hasSucceeded) {
        this.ldnService = data.payload;
        this.formModel.patchValue({
          id: this.ldnService.id,
          name: this.ldnService.name,
          description: this.ldnService.description,
          url: this.ldnService.url,
          score: this.ldnService.score,
          ldnUrl: this.ldnService.ldnUrl,
          type: this.ldnService.type,
          enabled: this.ldnService.enabled,
          lowerIp: this.ldnService.lowerIp,
          upperIp: this.ldnService.upperIp
        });
        this.filterPatternObjectsAndAssignLabel('notifyServiceInboundPatterns');
        const notifyServiceInboundPatternsFormArray = this.formModel.get('notifyServiceInboundPatterns');
        notifyServiceInboundPatternsFormArray.controls.forEach(control => {
          const controlFormGroup = control;
          const controlConstraint = controlFormGroup.get('constraint').value;
          controlFormGroup.patchValue({
            constraintFormatted: controlConstraint ? this.translateService.instant(controlConstraint + '.label') : ''
          });
        });
      }
    });
  }
  /**
   * Filters pattern objects, initializes form groups, assigns labels, and adds them to the specified form array so the correct string is shown in the dropdown.
   * @param formArrayName - The name of the form array to be populated
   */
  filterPatternObjectsAndAssignLabel(formArrayName) {
    const PatternsArray = this.formModel.get(formArrayName);
    PatternsArray.clear();
    const servicesToUse = [...this.ldnService.notifyServiceInboundPatterns];
    if (servicesToUse.length === 0) {
      servicesToUse.push({
        pattern: '',
        constraint: '',
        automatic: 'false'
      });
    }
    servicesToUse.forEach(patternObj => {
      const patternFormGroup = this.initializeInboundPatternFormGroup();
      const patternLabel = patternObj?.pattern ? 'ldn-service.form.pattern.' + patternObj?.pattern + '.label' : 'ldn-service.form.label.placeholder.default-select';
      const newPatternObjWithLabel = Object.assign(new _ldn_services_model_ldn_service_patterns_model__WEBPACK_IMPORTED_MODULE_8__.NotifyServicePattern(), {
        ...patternObj,
        patternLabel: this.translateService.instant(patternLabel)
      });
      patternFormGroup.patchValue(newPatternObjWithLabel);
      PatternsArray.push(patternFormGroup);
      this.cdRef.detectChanges();
    });
  }
  /**
   * Generates an array of patch operations based on form changes
   * @returns Array of patch operations
   */
  generatePatchOperations() {
    const patchOperations = [];
    this.createReplaceOperation(patchOperations, 'name', '/name');
    this.createReplaceOperation(patchOperations, 'description', '/description');
    this.createReplaceOperation(patchOperations, 'ldnUrl', '/ldnurl');
    this.createReplaceOperation(patchOperations, 'url', '/url');
    this.createReplaceOperation(patchOperations, 'score', '/score');
    this.createReplaceOperation(patchOperations, 'lowerIp', '/lowerIp');
    this.createReplaceOperation(patchOperations, 'upperIp', '/upperIp');
    this.handlePatterns(patchOperations, 'notifyServiceInboundPatterns');
    this.deletedInboundPatterns.forEach(index => {
      const removeOperation = {
        op: 'remove',
        path: `notifyServiceInboundPatterns[${index}]`
      };
      patchOperations.push(removeOperation);
    });
    return patchOperations;
  }
  /**
   * Submits the form by opening the confirmation modal
   */
  onSubmit() {
    this.openConfirmModal(this.confirmModal);
  }
  /**
   * Adds a new inbound pattern form group to the array of inbound patterns in the form
   */
  addInboundPattern() {
    const notifyServiceInboundPatternsArray = this.formModel.get('notifyServiceInboundPatterns');
    notifyServiceInboundPatternsArray.push(this.createInboundPatternFormGroup());
  }
  /**
   * Selects an inbound pattern by updating its values based on the provided pattern value and index
   * @param patternValue - The selected pattern value
   * @param index - The index of the inbound pattern in the array
   */
  selectInboundPattern(patternValue, index) {
    const patternArray = this.formModel.get('notifyServiceInboundPatterns');
    patternArray.controls[index].patchValue({
      pattern: patternValue
    });
    patternArray.controls[index].patchValue({
      patternLabel: this.translateService.instant('ldn-service.form.pattern.' + patternValue + '.label')
    });
  }
  /**
   * Selects an inbound item filter by updating its value based on the provided filter value and index
   * @param filterValue - The selected filter value
   * @param index - The index of the inbound pattern in the array
   */
  selectInboundItemFilter(filterValue, index) {
    const filterArray = this.formModel.get('notifyServiceInboundPatterns');
    filterArray.controls[index].patchValue({
      constraint: filterValue,
      constraintFormatted: this.translateService.instant((filterValue !== '' ? filterValue : 'ldn.no-filter') + '.label')
    });
    filterArray.markAllAsTouched();
  }
  /**
   * Toggles the automatic property of an inbound pattern at the specified index
   * @param i - The index of the inbound pattern in the array
   */
  toggleAutomatic(i) {
    const automaticControl = this.formModel.get(`notifyServiceInboundPatterns.${i}.automatic`);
    if (automaticControl) {
      automaticControl.markAsTouched();
      automaticControl.setValue(!automaticControl.value);
    }
  }
  /**
   * Toggles the enabled status of the LDN service by sending a patch request
   */
  toggleEnabled() {
    const newStatus = !this.formModel.get('enabled').value;
    const patchOperation = {
      op: 'replace',
      path: '/enabled',
      value: newStatus
    };
    this.ldnServicesService.patch(this.ldnService, [patchOperation]).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_2__.getFirstCompletedRemoteData)()).subscribe(() => {
      this.formModel.get('enabled').setValue(newStatus);
      this.cdRef.detectChanges();
    });
  }
  /**
   * Closes the modal
   */
  closeModal() {
    this.modalRef.close();
    this.cdRef.detectChanges();
  }
  /**
   * Opens a confirmation modal with the specified content
   * @param content - The content to be displayed in the modal
   */
  openConfirmModal(content) {
    this.modalRef = this.modalService.open(content);
  }
  /**
   * Patches the LDN service by retrieving and sending patch operations generated in generatePatchOperations()
   */
  patchService() {
    this.deleteMarkedInboundPatterns();
    const patchOperations = this.generatePatchOperations();
    this.formModel.markAllAsTouched();
    // If the form is invalid, close the modal and return
    if (this.formModel.invalid) {
      this.closeModal();
      return;
    }
    this.ldnServicesService.patch(this.ldnService, patchOperations).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_2__.getFirstCompletedRemoteData)()).subscribe(rd => {
      if (rd.hasSucceeded) {
        this.closeModal();
        this.sendBack();
        this.notificationService.success(this.translateService.get('admin.registries.services-formats.modify.success.head'), this.translateService.get('admin.registries.services-formats.modify.success.content'));
      } else {
        if (!this.formModel.errors) {
          this.setLdnUrlError();
        }
        this.notificationService.error(this.translateService.get('admin.registries.services-formats.modify.failure.head'), this.translateService.get('admin.registries.services-formats.modify.failure.content'));
        this.closeModal();
      }
    });
  }
  /**
   * Resets the form and navigates back to the LDN services page
   */
  resetFormAndLeave() {
    this.sendBack();
  }
  /**
   * Marks the specified inbound pattern for deletion
   * @param index - The index of the inbound pattern in the array
   */
  markForInboundPatternDeletion(index) {
    if (!this.markedForDeletionInboundPattern.includes(index)) {
      this.markedForDeletionInboundPattern.push(index);
    }
  }
  /**
   * Unmarks the specified inbound pattern for deletion
   * @param index - The index of the inbound pattern in the array
   */
  unmarkForInboundPatternDeletion(index) {
    const i = this.markedForDeletionInboundPattern.indexOf(index);
    if (i !== -1) {
      this.markedForDeletionInboundPattern.splice(i, 1);
    }
  }
  /**
   * Deletes marked inbound patterns from the form model
   */
  deleteMarkedInboundPatterns() {
    this.markedForDeletionInboundPattern.sort((a, b) => b - a);
    const patternsArray = this.formModel.get('notifyServiceInboundPatterns');
    for (const index of this.markedForDeletionInboundPattern) {
      if (index >= 0 && index < patternsArray.length) {
        const patternGroup = patternsArray.at(index);
        const patternValue = patternGroup.value;
        if (patternValue.isNew) {
          patternsArray.removeAt(index);
        } else {
          this.deletedInboundPatterns.push(index);
        }
      }
    }
    this.markedForDeletionInboundPattern = [];
  }
  /**
   * Creates a replace operation and adds it to the patch operations if the form control is dirty
   * @param patchOperations - The array to store patch operations
   * @param formControlName - The name of the form control
   * @param path - The JSON Patch path for the operation
   */
  createReplaceOperation(patchOperations, formControlName, path) {
    if (this.formModel.get(formControlName).dirty) {
      patchOperations.push({
        op: 'replace',
        path,
        value: this.formModel.get(formControlName).value.toString()
      });
    }
  }
  /**
   * Handles patterns in the form array, checking if an add or replace operations is required
   * @param patchOperations - The array to store patch operations
   * @param formArrayName - The name of the form array
   */
  handlePatterns(patchOperations, formArrayName) {
    const patternsArray = this.formModel.get(formArrayName);
    for (let i = 0; i < patternsArray.length; i++) {
      const patternGroup = patternsArray.at(i);
      const patternValue = patternGroup.value;
      delete patternValue.constraintFormatted;
      if (patternGroup.touched && patternGroup.valid) {
        delete patternValue?.patternLabel;
        if (patternValue.isNew) {
          delete patternValue.isNew;
          const addOperation = {
            op: 'add',
            path: `${formArrayName}/-`,
            value: patternValue
          };
          patchOperations.push(addOperation);
        } else {
          const replaceOperation = {
            op: 'replace',
            path: `${formArrayName}[${i}]`,
            value: patternValue
          };
          patchOperations.push(replaceOperation);
        }
      }
    }
  }
  /**
   * Navigates back to the LDN services page
   */
  sendBack() {
    this.router.navigateByUrl('admin/ldn/services');
  }
  /**
   * Creates a form group for inbound patterns
   * @returns The form group for inbound patterns
   */
  createInboundPatternFormGroup() {
    const inBoundFormGroup = {
      pattern: '',
      patternLabel: this.translateService.instant(this.selectPatternDefaultLabelI18Key),
      constraint: '',
      constraintFormatted: '',
      automatic: false,
      isNew: true
    };
    if (this.isNewService) {
      delete inBoundFormGroup.isNew;
    }
    return this.formBuilder.group(inBoundFormGroup);
  }
  /**
   * Initializes an existing form group for inbound patterns
   * @returns The initialized form group for inbound patterns
   */
  initializeInboundPatternFormGroup() {
    return this.formBuilder.group({
      pattern: '',
      patternLabel: '',
      constraint: '',
      constraintFormatted: '',
      automatic: ''
    });
  }
  /**
   * set ldnUrl error in case of unprocessable entity and provided value
   */
  setLdnUrlError() {
    const control = this.formModel.controls.ldnUrl;
    const controlErrors = control.errors || {};
    control.setErrors({
      ...controlErrors,
      ldnUrlAlreadyAssociated: true
    });
  }
  static {
    this.ɵfac = function LdnServiceFormComponent_Factory(t) {
      return new (t || LdnServiceFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ldn_services_data_ldn_services_data_service__WEBPACK_IMPORTED_MODULE_6__.LdnServicesService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ldn_services_data_ldn_itemfilters_data_service__WEBPACK_IMPORTED_MODULE_5__.LdnItemfiltersService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_3__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_1__.PaginationService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
      type: LdnServiceFormComponent,
      selectors: [["ds-ldn-service-form"]],
      viewQuery: function LdnServiceFormComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c0, 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c1, 7);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.confirmModal = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.resetFormModal = _t.first);
        }
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵStandaloneFeature"]],
      ngContentSelectors: _c3,
      decls: 77,
      vars: 77,
      consts: [["confirmModal", ""], ["inboundPatternDropdown", "ngbDropdown"], ["inboundItemfilterDropdown", "ngbDropdown"], [1, "container"], [3, "ngSubmit", "formGroup"], [1, "d-flex"], [1, "flex-grow-1"], ["class", "toggle-switch-container", 4, "ngIf"], [1, "mb-5"], ["for", "name", 1, "font-weight-bold"], ["formControlName", "name", "id", "name", "name", "name", "type", "text", 1, "form-control", 3, "placeholder"], ["class", "error-text", 4, "ngIf"], [1, "mb-5", "mt-5", "d-flex", "flex-column"], ["for", "description", 1, "font-weight-bold"], ["formControlName", "description", "id", "description", "name", "description", 1, "form-control", 3, "placeholder"], [1, "mb-5", "mt-5"], [1, "d-flex", "align-items-center"], [1, "d-flex", "flex-column", "w-50", "mr-2"], ["for", "url", 1, "font-weight-bold"], ["formControlName", "url", "id", "url", "name", "url", "type", "text", 1, "form-control", 3, "placeholder"], [1, "d-flex", "flex-column", "w-50"], ["for", "score", 1, "font-weight-bold"], ["formControlName", "score", "id", "score", "name", "score", "min", "0", "max", "1", "step", ".01", "type", "number", 1, "form-control", 3, "placeholder"], ["for", "lowerIp", 1, "font-weight-bold"], ["formControlName", "lowerIp", "id", "lowerIp", "name", "lowerIp", "type", "text", 1, "form-control", "mr-2", 3, "placeholder"], ["formControlName", "upperIp", "id", "upperIp", "name", "upperIp", "type", "text", 1, "form-control", 3, "placeholder"], [1, "text-muted"], ["for", "ldnUrl", 1, "font-weight-bold"], ["formControlName", "ldnUrl", "id", "ldnUrl", "name", "ldnUrl", "type", "text", 1, "form-control", 3, "placeholder"], [4, "ngIf"], ["class", "row mb-1 mt-5", 4, "ngIf"], [1, "add-pattern-link", "mb-2", 3, "click"], [1, "form-group", "row"], [1, "col", "text-right", "space-children-mr"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], ["type", "submit", 1, "btn", "btn-primary"], [1, "fas", "fa-save"], [1, "toggle-switch-container"], ["for", "enabled", 1, "status-label", "font-weight-bold"], ["formControlName", "enabled", "hidden", "", "id", "enabled", "name", "enabled", "type", "checkbox"], [1, "toggle-switch", 3, "click"], [1, "slider"], [1, "error-text"], [1, "row", "mb-1", "mt-5"], [1, "col"], [1, "font-weight-bold"], [1, "col-sm-2"], [1, "col-sm-1"], ["formGroupName", "notifyServiceInboundPatterns", 3, "marked-for-deletion", 4, "ngFor", "ngForOf"], ["formGroupName", "notifyServiceInboundPatterns"], [3, "formGroupName"], [1, "row", "mb-1", "align-items-center"], ["display", "dynamic", "ngbDropdown", "", "placement", "top-start", 1, "w-80", 3, "id"], ["role", "combobox", "aria-expanded", "false", "aria-controls", "inboundPatternDropdownButton", 1, "position-relative", "right-addon"], ["aria-hidden", "true", "ngbDropdownToggle", "", 1, "position-absolute", "scrollable-dropdown-toggle"], ["formControlName", "patternLabel", "id", "inboundPatternDropdownButton", "ngbDropdownAnchor", "", "type", "text", 1, "form-control", "w-80", "scrollable-dropdown-input", 3, "click", "readonly", "value"], ["aria-labelledby", "inboundPatternDropdownButton", "ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-menu-top", "w-100"], ["role", "listbox", 1, "scrollable-menu"], ["class", "dropdown-item collection-item text-truncate w-100", "ngbDropdownItem", "", "type", "button", 3, "title", "click", 4, "ngFor", "ngForOf"], ["formControlName", "automatic", "hidden", "", "type", "checkbox", 3, "id", "name"], [1, "btn-group"], ["type", "button", 1, "btn", "btn-outline-dark", "trash-button", 3, "click", "title"], [1, "fas", "fa-trash"], ["class", "btn btn-warning ", "type", "button", 3, "title", "click", 4, "ngIf"], ["ngbDropdownItem", "", "type", "button", 1, "dropdown-item", "collection-item", "text-truncate", "w-100", 3, "click", "title"], ["ngbDropdown", "", "placement", "top-start", 1, "w-100", 3, "id"], ["aria-expanded", "false", "aria-controls", "inboundItemfilterDropdown", "role", "combobox", 1, "position-relative", "right-addon"], ["formControlName", "constraint", "id", "inboundItemfilterDropdown", "ngbDropdownAnchor", "", "type", "text", 1, "form-control", "d-none", "w-100", "scrollable-dropdown-input", 3, "readonly"], ["formControlName", "constraintFormatted", "id", "inboundItemfilterDropdownPrettified", "ngbDropdownAnchor", "", "type", "text", 1, "form-control", "w-100", "scrollable-dropdown-input", 3, "click", "readonly"], ["aria-labelledby", "inboundItemfilterDropdownButton", "ngbDropdownMenu", "", 1, "dropdown-menu", "scrollable-dropdown-menu", "w-100"], ["ngbDropdownItem", "", "type", "button", 1, "dropdown-item", "collection-item", "text-truncate", "w-100", 3, "click"], ["class", "dropdown-item collection-item text-truncate w-100", "ngbDropdownItem", "", "type", "button", 3, "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-warning", 3, "click", "title"], [1, "fas", "fa-undo"], [1, "modal-header"], ["aria-label", "Close", "type", "button", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], ["id", "delete-confirm-edit", 1, "btn", "btn-outline-secondary", "mr-2", 3, "click"], ["class", "btn btn-primary", 3, "click", 4, "ngIf"], [1, "btn", "btn-primary", 3, "click"], ["id", "delete-confirm-new", 1, "btn", "btn-outline-secondary", "mr-2", 3, "click"]],
      template: function LdnServiceFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵprojectionDef"](_c2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 3)(1, "form", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngSubmit", function LdnServiceFormComponent_Template_form_ngSubmit_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx.onSubmit());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 5)(3, "h1", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](5, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](6, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](7, LdnServiceFormComponent_div_7_Template, 8, 5, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 8)(9, "label", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](11, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](12, "input", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](13, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](14, LdnServiceFormComponent_div_14_Template, 3, 3, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "div", 12)(16, "label", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](18, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](19, "textarea", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](20, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "div", 15)(22, "div", 16)(23, "div", 17)(24, "label", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](25);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](26, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](27, "input", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](28, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](29, LdnServiceFormComponent_div_29_Template, 3, 3, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "div", 20)(31, "label", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](32);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](33, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](34, "input", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](35, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](36, LdnServiceFormComponent_div_36_Template, 3, 3, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](37, "div", 15)(38, "label", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](39);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](40, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](41, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](42, "input", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](43, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](44, "input", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](45, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](46, LdnServiceFormComponent_div_46_Template, 3, 3, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](47, "div", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](48);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](49, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](50, "div", 15)(51, "label", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](52);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](53, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](54, "input", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](55, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](56, LdnServiceFormComponent_div_56_Template, 3, 2, "div", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](57, LdnServiceFormComponent_div_57_Template, 7, 4, "div", 30)(58, LdnServiceFormComponent_div_58_Template, 2, 1, "div", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](59, "span", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function LdnServiceFormComponent_Template_span_click_59_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx.addInboundPattern());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](60);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](61, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](62, "hr");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](63, "div", 32)(64, "div", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵprojection"](65);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](66, "button", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function LdnServiceFormComponent_Template_button_click_66_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx.resetFormAndLeave());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](67, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](68);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](69, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](70, "button", 35)(71, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](72, "i", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](73);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](74, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](75, LdnServiceFormComponent_ng_template_75_Template, 12, 6, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx.formModel);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx.isNewService ? _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](5, 39, "ldn-create-service.title") : _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](6, 41, "ldn-edit-registered-service.title"));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.isNewService);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](11, 43, "ldn-new-service.form.label.name"));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("invalid-field", ctx.formModel.get("name").invalid && ctx.formModel.get("name").touched);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](13, 45, "ldn-new-service.form.placeholder.name"));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.formModel.get("name").invalid && ctx.formModel.get("name").touched);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](18, 47, "ldn-new-service.form.label.description"));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](20, 49, "ldn-new-service.form.placeholder.description"));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](26, 51, "ldn-new-service.form.label.url"));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("invalid-field", ctx.formModel.get("url").invalid && ctx.formModel.get("url").touched);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](28, 53, "ldn-new-service.form.placeholder.url"));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.formModel.get("url").invalid && ctx.formModel.get("url").touched);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](33, 55, "ldn-new-service.form.label.score"));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("invalid-field", ctx.formModel.get("score").invalid && ctx.formModel.get("score").touched);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](35, 57, "ldn-new-service.form.placeholder.score"));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.formModel.get("score").invalid && ctx.formModel.get("score").touched);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](40, 59, "ldn-new-service.form.label.ip-range"));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("invalid-field", ctx.formModel.get("lowerIp").invalid && ctx.formModel.get("lowerIp").touched);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](43, 61, "ldn-new-service.form.placeholder.lowerIp"));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("invalid-field", ctx.formModel.get("upperIp").invalid && ctx.formModel.get("upperIp").touched);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](45, 63, "ldn-new-service.form.placeholder.upperIp"));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.formModel.get("lowerIp").invalid && ctx.formModel.get("lowerIp").touched || ctx.formModel.get("upperIp").invalid && ctx.formModel.get("upperIp").touched);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](49, 65, "ldn-new-service.form.hint.ipRange"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](53, 67, "ldn-new-service.form.label.ldnUrl"));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("invalid-field", ctx.formModel.get("ldnUrl").invalid && ctx.formModel.get("ldnUrl").touched);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](55, 69, "ldn-new-service.form.placeholder.ldnUrl"));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.formModel.get("ldnUrl").invalid && ctx.formModel.get("ldnUrl").touched);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.areControlsInitialized);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.areControlsInitialized);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](61, 71, "ldn-new-service.form.label.addPattern"));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](69, 73, "submission.general.back.submit"), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](74, 75, "ldn-new-service.form.label.submit"), "");
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.MaxValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupName, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbDropdownModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbDropdownAnchor, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbDropdownMenu, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbDropdownItem, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_16__.AsyncPipe],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n.ds-form-input-addon[_ngcontent-%COMP%] {\n  border-top-right-radius: 0 !important;\n  border-bottom-right-radius: 0 !important;\n  border-right: 0 !important;\n}\n\n.ds-form-input-btn[_ngcontent-%COMP%] {\n  border: var(--bs-input-btn-border-width) solid var(--bs-input-border-color);\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  border-left: 0;\n}\n\n.ds-form-input-btn[_ngcontent-%COMP%]:focus {\n  box-shadow: none !important;\n}\n\nbutton.ds-form-add-more[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: none !important;\n}\n\n.ds-form-input-value[_ngcontent-%COMP%] {\n  border-top-left-radius: 0 !important;\n  border-bottom-left-radius: 0 !important;\n}\n\n\n\n.fa-spin[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n\n\n\n.left-addon[_ngcontent-%COMP%]   .far[_ngcontent-%COMP%], .left-addon[_ngcontent-%COMP%]   .fas[_ngcontent-%COMP%], .left-addon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  left: 0;\n}\n\n.right-addon[_ngcontent-%COMP%]   .far[_ngcontent-%COMP%], .right-addon[_ngcontent-%COMP%]   .fas[_ngcontent-%COMP%], .right-addon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  right: 0;\n}\n\n\n\n.left-addon[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding-left: calc(var(--bs-spacer) * 2.25);\n}\n\n.right-addon[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding-right: calc(var(--bs-spacer) * 2.25);\n}\n\n.scrollable-menu[_ngcontent-%COMP%] {\n  height: auto;\n  max-height: var(--ds-dropdown-menu-max-height);\n  overflow-x: hidden;\n}\n\n.collection-item[_ngcontent-%COMP%] {\n  border-bottom: var(--bs-dropdown-border-width) solid var(--bs-dropdown-border-color);\n}\n\n.scrollable-dropdown-loading[_ngcontent-%COMP%] {\n  background-color: var(--bs-primary);\n  color: white;\n  height: calc(var(--bs-spacer) * 2) !important;\n  line-height: calc(var(--bs-spacer) * 2);\n  position: sticky;\n  bottom: 0;\n}\n\n.scrollable-dropdown-menu[_ngcontent-%COMP%] {\n  left: 0 !important;\n  margin-bottom: var(--bs-spacer);\n  z-index: 1000;\n}\n\n.scrollable-dropdown-toggle[_ngcontent-%COMP%] {\n  padding: 0.7rem 0.7rem 0 0.7rem;\n}\n\n.scrollable-dropdown-input[readonly][_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n\n.toggle-icon[_ngcontent-%COMP%] {\n  padding: 0.7rem 0.7rem 0 0.7rem;\n}\n\n.ds-form-input-addon[_ngcontent-%COMP%] {\n  border-top-right-radius: 0 !important;\n  border-bottom-right-radius: 0 !important;\n  border-right: 0 !important;\n}\n\n.ds-form-input-btn[_ngcontent-%COMP%] {\n  border: var(--bs-input-btn-border-width) solid var(--bs-input-border-color);\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  border-left: 0;\n}\n\n.ds-form-input-btn[_ngcontent-%COMP%]:focus {\n  box-shadow: none !important;\n}\n\nbutton.ds-form-add-more[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: none !important;\n}\n\n.ds-form-input-value[_ngcontent-%COMP%] {\n  border-top-left-radius: 0 !important;\n  border-bottom-left-radius: 0 !important;\n}\n\n\n\n.fa-spin[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n\n\n\n.left-addon[_ngcontent-%COMP%]   .far[_ngcontent-%COMP%], .left-addon[_ngcontent-%COMP%]   .fas[_ngcontent-%COMP%], .left-addon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  left: 0;\n}\n\n.right-addon[_ngcontent-%COMP%]   .far[_ngcontent-%COMP%], .right-addon[_ngcontent-%COMP%]   .fas[_ngcontent-%COMP%], .right-addon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  right: 0;\n}\n\n\n\n.left-addon[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding-left: calc(var(--bs-spacer) * 2.25);\n}\n\n.right-addon[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding-right: calc(var(--bs-spacer) * 2.25);\n}\n\nform[_ngcontent-%COMP%] {\n  font-size: 14px;\n  position: relative;\n}\n\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  max-width: 100%;\n  width: 100%;\n  padding: 8px;\n  font-size: 14px;\n}\n\noption[_ngcontent-%COMP%]:not(:first-child) {\n  font-weight: bold;\n}\n\n.trash-button[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  height: 200px;\n  resize: none;\n}\n\n.add-pattern-link[_ngcontent-%COMP%] {\n  color: #0048ff;\n  cursor: pointer;\n}\n\n.remove-pattern-link[_ngcontent-%COMP%] {\n  color: #e34949;\n  cursor: pointer;\n  margin-left: 10px;\n}\n\n.status-checkbox[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n\n.invalid-field[_ngcontent-%COMP%] {\n  border: 1px solid red;\n  color: #000000;\n}\n\n.error-text[_ngcontent-%COMP%] {\n  color: red;\n  font-size: 0.8em;\n  margin-top: 5px;\n}\n\n.toggle-switch[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  opacity: 0.8;\n  position: relative;\n  width: 60px;\n  height: 30px;\n  background-color: #ccc;\n  border-radius: 15px;\n  cursor: pointer;\n  transition: background-color 0.3s;\n}\n\n.toggle-switch.checked[_ngcontent-%COMP%] {\n  background-color: #24cc9a;\n}\n\n.slider[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background-color: #fff;\n  transition: transform 0.3s;\n}\n\n.toggle-switch[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n  border-radius: 50%;\n  margin: 0 auto;\n}\n\n.toggle-switch.checked[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%] {\n  transform: translateX(30px);\n}\n\n.toggle-switch-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-end;\n  margin-top: 10px;\n}\n\n.small-text[_ngcontent-%COMP%] {\n  font-size: 0.7em;\n  color: #888;\n}\n\n.toggle-switch[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin-top: 3px;\n  margin-right: 3px;\n}\n\n.label-box[_ngcontent-%COMP%] {\n  margin-left: 11px;\n}\n\n.label-box-2[_ngcontent-%COMP%] {\n  margin-left: 14px;\n}\n\n.label-box-3[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n\n.submission-form-footer[_ngcontent-%COMP%] {\n  border-radius: var(--bs-card-border-radius);\n  bottom: 0;\n  background-color: var(--bs-gray-400);\n  padding: calc(var(--bs-spacer) / 2);\n  z-index: calc(var(--ds-submission-footer-z-index) + 1);\n}\n\n.marked-for-deletion[_ngcontent-%COMP%] {\n  background-color: rgb(243, 183, 189);\n}\n\n.dropdown-menu-top[_ngcontent-%COMP%], .scrollable-dropdown-menu[_ngcontent-%COMP%] {\n  z-index: var(--ds-submission-footer-z-index);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxkbi1zZXJ2aWNlLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQTtFQUNFLHFDQUFBO0VBQ0Esd0NBQUE7RUFDQSwwQkFBQTtBQUNGOztBQUNBO0VBQ0UsMkVBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0EsY0FBQTtBQUVGOztBQUFBO0VBQ0UsMkJBQUE7QUFHRjs7QUFEQTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtBQUlGOztBQUZBO0VBQ0Usb0NBQUE7RUFDQSx1Q0FBQTtBQUtGOztBQUhBLGtCQUFBO0FBQ0E7RUFDRSxvQkFBQTtBQU1GOztBQUpBLGtCQUFBO0FBQ0E7RUFDRSxPQUFBO0FBT0Y7O0FBTEE7RUFDRSxRQUFBO0FBUUY7O0FBTkEsaUJBQUE7QUFDQTtFQUNFLDJDQUFBO0FBU0Y7O0FBUEE7RUFDRSw0Q0FBQTtBQVVGOztBQVJBO0VBQ0UsWUFBQTtFQUNBLDhDQUFBO0VBQ0Esa0JBQUE7QUFXRjs7QUFUQTtFQUNFLG9GQUFBO0FBWUY7O0FBVkE7RUFDRSxtQ0FBQTtFQUNBLFlBQUE7RUFDQSw2Q0FBQTtFQUNBLHVDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0FBYUY7O0FBWEE7RUFDRSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsYUFBQTtBQWNGOztBQVpBO0VBQ0UsK0JBQUE7QUFlRjs7QUFiQTtFQUNFLHNCQUFBO0FBZ0JGOztBQWRBO0VBQ0UsK0JBQUE7QUFpQkY7O0FBZkE7RUFDRSxxQ0FBQTtFQUNBLHdDQUFBO0VBQ0EsMEJBQUE7QUFrQkY7O0FBaEJBO0VBQ0UsMkVBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0EsY0FBQTtBQW1CRjs7QUFqQkE7RUFDRSwyQkFBQTtBQW9CRjs7QUFsQkE7RUFDRSxhQUFBO0VBQ0EsMkJBQUE7QUFxQkY7O0FBbkJBO0VBQ0Usb0NBQUE7RUFDQSx1Q0FBQTtBQXNCRjs7QUFwQkEsa0JBQUE7QUFDQTtFQUNFLG9CQUFBO0FBdUJGOztBQXJCQSxrQkFBQTtBQUNBO0VBQ0UsT0FBQTtBQXdCRjs7QUF0QkE7RUFDRSxRQUFBO0FBeUJGOztBQXZCQSxpQkFBQTtBQUNBO0VBQ0UsMkNBQUE7QUEwQkY7O0FBeEJBO0VBQ0UsNENBQUE7QUEyQkY7O0FBekJBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FBNEJGOztBQTFCQTs7RUFFRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBNkJGOztBQTNCQTtFQUNFLGlCQUFBO0FBOEJGOztBQTVCQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBK0JGOztBQTdCQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FBZ0NGOztBQTlCQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBaUNGOztBQS9CQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFrQ0Y7O0FBaENBO0VBQ0UsZUFBQTtBQW1DRjs7QUFqQ0E7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUFvQ0Y7O0FBbENBO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQXFDRjs7QUFuQ0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7QUFzQ0Y7O0FBcENBO0VBQ0UseUJBQUE7QUF1Q0Y7O0FBckNBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtBQXdDRjs7QUF0Q0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQXlDRjs7QUF2Q0E7RUFDRSwyQkFBQTtBQTBDRjs7QUF4Q0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUEyQ0Y7O0FBekNBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FBNENGOztBQTFDQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUE2Q0Y7O0FBM0NBO0VBQ0UsaUJBQUE7QUE4Q0Y7O0FBNUNBO0VBQ0UsaUJBQUE7QUErQ0Y7O0FBN0NBO0VBQ0UsZ0JBQUE7QUFnREY7O0FBOUNBO0VBQ0UsMkNBQUE7RUFDQSxTQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtFQUNBLHNEQUFBO0FBaURGOztBQS9DQTtFQUNFLG9DQUFBO0FBa0RGOztBQWhEQTtFQUNFLDRDQUFBO0FBbURGIiwiZmlsZSI6Imxkbi1zZXJ2aWNlLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqL1xuLmRzLWZvcm0taW5wdXQtYWRkb24ge1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMCAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMCAhaW1wb3J0YW50O1xuICBib3JkZXItcmlnaHQ6IDAgIWltcG9ydGFudDtcbn1cbi5kcy1mb3JtLWlucHV0LWJ0biB7XG4gIGJvcmRlcjogdmFyKC0tYnMtaW5wdXQtYnRuLWJvcmRlci13aWR0aCkgc29saWQgdmFyKC0tYnMtaW5wdXQtYm9yZGVyLWNvbG9yKTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLWxlZnQ6IDA7XG59XG4uZHMtZm9ybS1pbnB1dC1idG46Zm9jdXMge1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG5idXR0b24uZHMtZm9ybS1hZGQtbW9yZTpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cbi5kcy1mb3JtLWlucHV0LXZhbHVlIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMCAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG59XG4vKiBzdHlsZSBmYS1zcGluICovXG4uZmEtc3BpbiB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuLyogYWxpZ24gZmEtc3BpbiAqL1xuLmxlZnQtYWRkb24gLmZhciwgLmxlZnQtYWRkb24gLmZhcywgLmxlZnQtYWRkb24gaSB7XG4gIGxlZnQ6IDA7XG59XG4ucmlnaHQtYWRkb24gLmZhciwgLnJpZ2h0LWFkZG9uIC5mYXMsIC5yaWdodC1hZGRvbiBpIHtcbiAgcmlnaHQ6IDA7XG59XG4vKiBhZGQgcGFkZGluZyAgKi9cbi5sZWZ0LWFkZG9uIGlucHV0IHtcbiAgcGFkZGluZy1sZWZ0OiBjYWxjKHZhcigtLWJzLXNwYWNlcikgKiAyLjI1KTtcbn1cbi5yaWdodC1hZGRvbiBpbnB1dCB7XG4gIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tYnMtc3BhY2VyKSAqIDIuMjUpO1xufVxuLnNjcm9sbGFibGUtbWVudSB7XG4gIGhlaWdodDogYXV0bztcbiAgbWF4LWhlaWdodDogdmFyKC0tZHMtZHJvcGRvd24tbWVudS1tYXgtaGVpZ2h0KTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuLmNvbGxlY3Rpb24taXRlbSB7XG4gIGJvcmRlci1ib3R0b206IHZhcigtLWJzLWRyb3Bkb3duLWJvcmRlci13aWR0aCkgc29saWQgdmFyKC0tYnMtZHJvcGRvd24tYm9yZGVyLWNvbG9yKTtcbn1cbi5zY3JvbGxhYmxlLWRyb3Bkb3duLWxvYWRpbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1icy1wcmltYXJ5KTtcbiAgY29sb3I6IHdoaXRlO1xuICBoZWlnaHQ6IGNhbGModmFyKC0tYnMtc3BhY2VyKSAqIDIpICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiBjYWxjKHZhcigtLWJzLXNwYWNlcikgKiAyKTtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgYm90dG9tOiAwO1xufVxuLnNjcm9sbGFibGUtZHJvcGRvd24tbWVudSB7XG4gIGxlZnQ6IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tYnMtc3BhY2VyKTtcbiAgei1pbmRleDogMTAwMDtcbn1cbi5zY3JvbGxhYmxlLWRyb3Bkb3duLXRvZ2dsZSB7XG4gIHBhZGRpbmc6IDAuN3JlbSAwLjdyZW0gMCAwLjdyZW07XG59XG4uc2Nyb2xsYWJsZS1kcm9wZG93bi1pbnB1dFtyZWFkb25seV0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuLnRvZ2dsZS1pY29uIHtcbiAgcGFkZGluZzogMC43cmVtIDAuN3JlbSAwIDAuN3JlbTtcbn1cbi5kcy1mb3JtLWlucHV0LWFkZG9uIHtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAgIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDAgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG59XG4uZHMtZm9ybS1pbnB1dC1idG4ge1xuICBib3JkZXI6IHZhcigtLWJzLWlucHV0LWJ0bi1ib3JkZXItd2lkdGgpIHNvbGlkIHZhcigtLWJzLWlucHV0LWJvcmRlci1jb2xvcik7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG4gIGJvcmRlci1sZWZ0OiAwO1xufVxuLmRzLWZvcm0taW5wdXQtYnRuOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuYnV0dG9uLmRzLWZvcm0tYWRkLW1vcmU6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG4uZHMtZm9ybS1pbnB1dC12YWx1ZSB7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAgIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMCAhaW1wb3J0YW50O1xufVxuLyogc3R5bGUgZmEtc3BpbiAqL1xuLmZhLXNwaW4ge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi8qIGFsaWduIGZhLXNwaW4gKi9cbi5sZWZ0LWFkZG9uIC5mYXIsIC5sZWZ0LWFkZG9uIC5mYXMsIC5sZWZ0LWFkZG9uIGkge1xuICBsZWZ0OiAwO1xufVxuLnJpZ2h0LWFkZG9uIC5mYXIsIC5yaWdodC1hZGRvbiAuZmFzLCAucmlnaHQtYWRkb24gaSB7XG4gIHJpZ2h0OiAwO1xufVxuLyogYWRkIHBhZGRpbmcgICovXG4ubGVmdC1hZGRvbiBpbnB1dCB7XG4gIHBhZGRpbmctbGVmdDogY2FsYyh2YXIoLS1icy1zcGFjZXIpICogMi4yNSk7XG59XG4ucmlnaHQtYWRkb24gaW5wdXQge1xuICBwYWRkaW5nLXJpZ2h0OiBjYWxjKHZhcigtLWJzLXNwYWNlcikgKiAyLjI1KTtcbn1cbmZvcm0ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbmlucHV0LFxuc2VsZWN0IHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogOHB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5vcHRpb246bm90KDpmaXJzdC1jaGlsZCkge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi50cmFzaC1idXR0b24ge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxudGV4dGFyZWEge1xuICBoZWlnaHQ6IDIwMHB4O1xuICByZXNpemU6IG5vbmU7XG59XG4uYWRkLXBhdHRlcm4tbGluayB7XG4gIGNvbG9yOiAjMDA0OGZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucmVtb3ZlLXBhdHRlcm4tbGluayB7XG4gIGNvbG9yOiAjZTM0OTQ5O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLnN0YXR1cy1jaGVja2JveCB7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cbi5pbnZhbGlkLWZpZWxkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICBjb2xvcjogIzAwMDAwMDtcbn1cbi5lcnJvci10ZXh0IHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuLnRvZ2dsZS1zd2l0Y2gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBvcGFjaXR5OiAwLjg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XG59XG4udG9nZ2xlLXN3aXRjaC5jaGVja2VkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0Y2M5YTtcbn1cbi5zbGlkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XG59XG4udG9nZ2xlLXN3aXRjaCAuc2xpZGVyIHtcbiAgd2lkdGg6IDIycHg7XG4gIGhlaWdodDogMjJweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi50b2dnbGUtc3dpdGNoLmNoZWNrZWQgLnNsaWRlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzMHB4KTtcbn1cbi50b2dnbGUtc3dpdGNoLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLnNtYWxsLXRleHQge1xuICBmb250LXNpemU6IDAuN2VtO1xuICBjb2xvcjogIzg4ODtcbn1cbi50b2dnbGUtc3dpdGNoIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tdG9wOiAzcHg7XG4gIG1hcmdpbi1yaWdodDogM3B4O1xufVxuLmxhYmVsLWJveCB7XG4gIG1hcmdpbi1sZWZ0OiAxMXB4O1xufVxuLmxhYmVsLWJveC0yIHtcbiAgbWFyZ2luLWxlZnQ6IDE0cHg7XG59XG4ubGFiZWwtYm94LTMge1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuLnN1Ym1pc3Npb24tZm9ybS1mb290ZXIge1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1icy1jYXJkLWJvcmRlci1yYWRpdXMpO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJzLWdyYXktNDAwKTtcbiAgcGFkZGluZzogY2FsYyh2YXIoLS1icy1zcGFjZXIpIC8gMik7XG4gIHotaW5kZXg6IGNhbGModmFyKC0tZHMtc3VibWlzc2lvbi1mb290ZXItei1pbmRleCkgKyAxKTtcbn1cbi5tYXJrZWQtZm9yLWRlbGV0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0Mi41OTQ5MzY3MDg5LCAxODMuNDA1MDYzMjkxMSwgMTg5LjA3NTk0OTM2NzEpO1xufVxuLmRyb3Bkb3duLW1lbnUtdG9wLCAuc2Nyb2xsYWJsZS1kcm9wZG93bi1tZW51IHtcbiAgei1pbmRleDogdmFyKC0tZHMtc3VibWlzc2lvbi1mb290ZXItei1pbmRleCk7XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWRtaW4vYWRtaW4tbGRuLXNlcnZpY2VzL2xkbi1zZXJ2aWNlLWZvcm0vbGRuLXNlcnZpY2UtZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBO0VBQ0UscUNBQUE7RUFDQSx3Q0FBQTtFQUNBLDBCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSwyRUFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxjQUFBO0FBRUY7O0FBQUE7RUFDRSwyQkFBQTtBQUdGOztBQURBO0VBQ0UsYUFBQTtFQUNBLDJCQUFBO0FBSUY7O0FBRkE7RUFDRSxvQ0FBQTtFQUNBLHVDQUFBO0FBS0Y7O0FBSEEsa0JBQUE7QUFDQTtFQUNFLG9CQUFBO0FBTUY7O0FBSkEsa0JBQUE7QUFDQTtFQUNFLE9BQUE7QUFPRjs7QUFMQTtFQUNFLFFBQUE7QUFRRjs7QUFOQSxpQkFBQTtBQUNBO0VBQ0UsMkNBQUE7QUFTRjs7QUFQQTtFQUNFLDRDQUFBO0FBVUY7O0FBUkE7RUFDRSxZQUFBO0VBQ0EsOENBQUE7RUFDQSxrQkFBQTtBQVdGOztBQVRBO0VBQ0Usb0ZBQUE7QUFZRjs7QUFWQTtFQUNFLG1DQUFBO0VBQ0EsWUFBQTtFQUNBLDZDQUFBO0VBQ0EsdUNBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7QUFhRjs7QUFYQTtFQUNFLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxhQUFBO0FBY0Y7O0FBWkE7RUFDRSwrQkFBQTtBQWVGOztBQWJBO0VBQ0Usc0JBQUE7QUFnQkY7O0FBZEE7RUFDRSwrQkFBQTtBQWlCRjs7QUFmQTtFQUNFLHFDQUFBO0VBQ0Esd0NBQUE7RUFDQSwwQkFBQTtBQWtCRjs7QUFoQkE7RUFDRSwyRUFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxjQUFBO0FBbUJGOztBQWpCQTtFQUNFLDJCQUFBO0FBb0JGOztBQWxCQTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtBQXFCRjs7QUFuQkE7RUFDRSxvQ0FBQTtFQUNBLHVDQUFBO0FBc0JGOztBQXBCQSxrQkFBQTtBQUNBO0VBQ0Usb0JBQUE7QUF1QkY7O0FBckJBLGtCQUFBO0FBQ0E7RUFDRSxPQUFBO0FBd0JGOztBQXRCQTtFQUNFLFFBQUE7QUF5QkY7O0FBdkJBLGlCQUFBO0FBQ0E7RUFDRSwyQ0FBQTtBQTBCRjs7QUF4QkE7RUFDRSw0Q0FBQTtBQTJCRjs7QUF6QkE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUE0QkY7O0FBMUJBOztFQUVFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUE2QkY7O0FBM0JBO0VBQ0UsaUJBQUE7QUE4QkY7O0FBNUJBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUErQkY7O0FBN0JBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUFnQ0Y7O0FBOUJBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUFpQ0Y7O0FBL0JBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQWtDRjs7QUFoQ0E7RUFDRSxlQUFBO0FBbUNGOztBQWpDQTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQW9DRjs7QUFsQ0E7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBcUNGOztBQW5DQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQ0FBQTtBQXNDRjs7QUFwQ0E7RUFDRSx5QkFBQTtBQXVDRjs7QUFyQ0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0FBd0NGOztBQXRDQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBeUNGOztBQXZDQTtFQUNFLDJCQUFBO0FBMENGOztBQXhDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQTJDRjs7QUF6Q0E7RUFDRSxnQkFBQTtFQUNBLFdBQUE7QUE0Q0Y7O0FBMUNBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQTZDRjs7QUEzQ0E7RUFDRSxpQkFBQTtBQThDRjs7QUE1Q0E7RUFDRSxpQkFBQTtBQStDRjs7QUE3Q0E7RUFDRSxnQkFBQTtBQWdERjs7QUE5Q0E7RUFDRSwyQ0FBQTtFQUNBLFNBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0VBQ0Esc0RBQUE7QUFpREY7O0FBL0NBO0VBQ0Usb0NBQUE7QUFrREY7O0FBaERBO0VBQ0UsNENBQUE7QUFtREY7QUFDQSx3MVNBQXcxUyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovXG4uZHMtZm9ybS1pbnB1dC1hZGRvbiB7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yaWdodDogMCAhaW1wb3J0YW50O1xufVxuLmRzLWZvcm0taW5wdXQtYnRuIHtcbiAgYm9yZGVyOiB2YXIoLS1icy1pbnB1dC1idG4tYm9yZGVyLXdpZHRoKSBzb2xpZCB2YXIoLS1icy1pbnB1dC1ib3JkZXItY29sb3IpO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xuICBib3JkZXItbGVmdDogMDtcbn1cbi5kcy1mb3JtLWlucHV0LWJ0bjpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cbmJ1dHRvbi5kcy1mb3JtLWFkZC1tb3JlOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuLmRzLWZvcm0taW5wdXQtdmFsdWUge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDAgIWltcG9ydGFudDtcbn1cbi8qIHN0eWxlIGZhLXNwaW4gKi9cbi5mYS1zcGluIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4vKiBhbGlnbiBmYS1zcGluICovXG4ubGVmdC1hZGRvbiAuZmFyLCAubGVmdC1hZGRvbiAuZmFzLCAubGVmdC1hZGRvbiBpIHtcbiAgbGVmdDogMDtcbn1cbi5yaWdodC1hZGRvbiAuZmFyLCAucmlnaHQtYWRkb24gLmZhcywgLnJpZ2h0LWFkZG9uIGkge1xuICByaWdodDogMDtcbn1cbi8qIGFkZCBwYWRkaW5nICAqL1xuLmxlZnQtYWRkb24gaW5wdXQge1xuICBwYWRkaW5nLWxlZnQ6IGNhbGModmFyKC0tYnMtc3BhY2VyKSAqIDIuMjUpO1xufVxuLnJpZ2h0LWFkZG9uIGlucHV0IHtcbiAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1icy1zcGFjZXIpICogMi4yNSk7XG59XG4uc2Nyb2xsYWJsZS1tZW51IHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXgtaGVpZ2h0OiB2YXIoLS1kcy1kcm9wZG93bi1tZW51LW1heC1oZWlnaHQpO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG4uY29sbGVjdGlvbi1pdGVtIHtcbiAgYm9yZGVyLWJvdHRvbTogdmFyKC0tYnMtZHJvcGRvd24tYm9yZGVyLXdpZHRoKSBzb2xpZCB2YXIoLS1icy1kcm9wZG93bi1ib3JkZXItY29sb3IpO1xufVxuLnNjcm9sbGFibGUtZHJvcGRvd24tbG9hZGluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJzLXByaW1hcnkpO1xuICBjb2xvcjogd2hpdGU7XG4gIGhlaWdodDogY2FsYyh2YXIoLS1icy1zcGFjZXIpICogMikgIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IGNhbGModmFyKC0tYnMtc3BhY2VyKSAqIDIpO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICBib3R0b206IDA7XG59XG4uc2Nyb2xsYWJsZS1kcm9wZG93bi1tZW51IHtcbiAgbGVmdDogMCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1icy1zcGFjZXIpO1xuICB6LWluZGV4OiAxMDAwO1xufVxuLnNjcm9sbGFibGUtZHJvcGRvd24tdG9nZ2xlIHtcbiAgcGFkZGluZzogMC43cmVtIDAuN3JlbSAwIDAuN3JlbTtcbn1cbi5zY3JvbGxhYmxlLWRyb3Bkb3duLWlucHV0W3JlYWRvbmx5XSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG4udG9nZ2xlLWljb24ge1xuICBwYWRkaW5nOiAwLjdyZW0gMC43cmVtIDAgMC43cmVtO1xufVxuLmRzLWZvcm0taW5wdXQtYWRkb24ge1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMCAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMCAhaW1wb3J0YW50O1xuICBib3JkZXItcmlnaHQ6IDAgIWltcG9ydGFudDtcbn1cbi5kcy1mb3JtLWlucHV0LWJ0biB7XG4gIGJvcmRlcjogdmFyKC0tYnMtaW5wdXQtYnRuLWJvcmRlci13aWR0aCkgc29saWQgdmFyKC0tYnMtaW5wdXQtYm9yZGVyLWNvbG9yKTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLWxlZnQ6IDA7XG59XG4uZHMtZm9ybS1pbnB1dC1idG46Zm9jdXMge1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG5idXR0b24uZHMtZm9ybS1hZGQtbW9yZTpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cbi5kcy1mb3JtLWlucHV0LXZhbHVlIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMCAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG59XG4vKiBzdHlsZSBmYS1zcGluICovXG4uZmEtc3BpbiB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuLyogYWxpZ24gZmEtc3BpbiAqL1xuLmxlZnQtYWRkb24gLmZhciwgLmxlZnQtYWRkb24gLmZhcywgLmxlZnQtYWRkb24gaSB7XG4gIGxlZnQ6IDA7XG59XG4ucmlnaHQtYWRkb24gLmZhciwgLnJpZ2h0LWFkZG9uIC5mYXMsIC5yaWdodC1hZGRvbiBpIHtcbiAgcmlnaHQ6IDA7XG59XG4vKiBhZGQgcGFkZGluZyAgKi9cbi5sZWZ0LWFkZG9uIGlucHV0IHtcbiAgcGFkZGluZy1sZWZ0OiBjYWxjKHZhcigtLWJzLXNwYWNlcikgKiAyLjI1KTtcbn1cbi5yaWdodC1hZGRvbiBpbnB1dCB7XG4gIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tYnMtc3BhY2VyKSAqIDIuMjUpO1xufVxuZm9ybSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuaW5wdXQsXG5zZWxlY3Qge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA4cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbm9wdGlvbjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnRyYXNoLWJ1dHRvbiB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG59XG50ZXh0YXJlYSB7XG4gIGhlaWdodDogMjAwcHg7XG4gIHJlc2l6ZTogbm9uZTtcbn1cbi5hZGQtcGF0dGVybi1saW5rIHtcbiAgY29sb3I6ICMwMDQ4ZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5yZW1vdmUtcGF0dGVybi1saW5rIHtcbiAgY29sb3I6ICNlMzQ5NDk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4uc3RhdHVzLWNoZWNrYm94IHtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuLmludmFsaWQtZmllbGQge1xuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuLmVycm9yLXRleHQge1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDAuOGVtO1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG4udG9nZ2xlLXN3aXRjaCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG9wYWNpdHk6IDAuODtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcbn1cbi50b2dnbGUtc3dpdGNoLmNoZWNrZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjRjYzlhO1xufVxuLnNsaWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcbn1cbi50b2dnbGUtc3dpdGNoIC5zbGlkZXIge1xuICB3aWR0aDogMjJweDtcbiAgaGVpZ2h0OiAyMnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLnRvZ2dsZS1zd2l0Y2guY2hlY2tlZCAuc2xpZGVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDMwcHgpO1xufVxuLnRvZ2dsZS1zd2l0Y2gtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uc21hbGwtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMC43ZW07XG4gIGNvbG9yOiAjODg4O1xufVxuLnRvZ2dsZS1zd2l0Y2gge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi10b3A6IDNweDtcbiAgbWFyZ2luLXJpZ2h0OiAzcHg7XG59XG4ubGFiZWwtYm94IHtcbiAgbWFyZ2luLWxlZnQ6IDExcHg7XG59XG4ubGFiZWwtYm94LTIge1xuICBtYXJnaW4tbGVmdDogMTRweDtcbn1cbi5sYWJlbC1ib3gtMyB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG4uc3VibWlzc2lvbi1mb3JtLWZvb3RlciB7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJzLWNhcmQtYm9yZGVyLXJhZGl1cyk7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnMtZ3JheS00MDApO1xuICBwYWRkaW5nOiBjYWxjKHZhcigtLWJzLXNwYWNlcikgLyAyKTtcbiAgei1pbmRleDogY2FsYyh2YXIoLS1kcy1zdWJtaXNzaW9uLWZvb3Rlci16LWluZGV4KSArIDEpO1xufVxuLm1hcmtlZC1mb3ItZGVsZXRpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQyLjU5NDkzNjcwODksIDE4My40MDUwNjMyOTExLCAxODkuMDc1OTQ5MzY3MSk7XG59XG4uZHJvcGRvd24tbWVudS10b3AsIC5zY3JvbGxhYmxlLWRyb3Bkb3duLW1lbnUge1xuICB6LWluZGV4OiB2YXIoLS1kcy1zdWJtaXNzaW9uLWZvb3Rlci16LWluZGV4KTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"],
      data: {
        animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_17__.trigger)('toggleAnimation', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_17__.state)('true', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_17__.style)({})), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_17__.state)('false', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_17__.style)({})), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_17__.transition)('true <=> false', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_17__.animate)('300ms ease-in'))])]
      }
    });
  }
}

/***/ }),

/***/ 61794:
/*!*****************************************************************************************************!*\
  !*** ./src/app/admin/admin-ldn-services/ldn-services-directory/ldn-services-directory.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LdnServicesOverviewComponent: () => (/* binding */ LdnServicesOverviewComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 84975);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var src_app_admin_admin_ldn_services_ldn_services_data_ldn_services_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/admin/admin-ldn-services/ldn-services-data/ldn-services-data.service */ 68630);
/* harmony import */ var src_app_core_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/pagination/pagination.service */ 76896);
/* harmony import */ var _core_data_find_list_options_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/data/find-list-options.model */ 41023);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/shared/operators */ 55757);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/empty.util */ 82777);
/* harmony import */ var _shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/notifications/notifications.service */ 69472);
/* harmony import */ var _shared_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/pagination/pagination.component */ 40590);
/* harmony import */ var _shared_pagination_pagination_component_options_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/pagination/pagination-component-options.model */ 23401);
/* harmony import */ var _shared_truncatable_truncatable_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/truncatable/truncatable.component */ 21308);
/* harmony import */ var _shared_truncatable_truncatable_part_truncatable_part_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/truncatable/truncatable-part/truncatable-part.component */ 41100);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 49966);






















const _c0 = ["deleteModal"];
const _c1 = (a0, a1) => ({
  "status-enabled": a0,
  "status-disabled": a1
});
const _c2 = a0 => ["/admin/ldn/services/edit/", a0];
function LdnServicesOverviewComponent_ds_pagination_10_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr")(1, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "td")(4, "ds-truncatable", 14)(5, "ds-truncatable-part", 15)(6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "td")(9, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function LdnServicesOverviewComponent_ds_pagination_10_tr_19_Template_span_click_9_listener() {
      const ldnService_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r2.toggleStatus(ldnService_r2, ctx_r2.ldnServicesService));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "td")(16, "div", 17)(17, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function LdnServicesOverviewComponent_ds_pagination_10_tr_19_Template_button_click_17_listener() {
      const ldnService_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r2.selectServiceToDelete(ldnService_r2.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](19, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](22, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ldnService_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ldnService_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("id", ldnService_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("id", ldnService_r2.id)("minLines", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ldnService_r2.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](23, _c1, ldnService_r2.enabled, !ldnService_r2.enabled))("title", ldnService_r2.enabled ? _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](10, 11, "ldn-service.overview.table.clickToDisable") : _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](11, 13, "ldn-service.overview.table.clickToEnable"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ldnService_r2.enabled ? _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](13, 15, "ldn-service.overview.table.enabled") : _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](14, 17, "ldn-service.overview.table.disabled"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](18, 19, "ldn-service-overview-select-delete"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](26, _c2, ldnService_r2.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](21, 21, "ldn-service-overview-select-edit"));
  }
}
function LdnServicesOverviewComponent_ds_pagination_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ds-pagination", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 9)(3, "table", 10)(4, "thead")(5, "tr")(6, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](19, LdnServicesOverviewComponent_ds_pagination_10_tr_19_Template, 23, 28, "tr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](20, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_10_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("collectionSize", (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](1, 9, ctx_r2.ldnServicesRD$)) == null ? null : tmp_2_0.payload == null ? null : tmp_2_0.payload.totalElements)("hideGear", true)("hidePagerWhenSinglePage", true)("paginationOptions", ctx_r2.pageConfig);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](8, 11, "service.overview.table.name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](11, 13, "service.overview.table.description"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](14, 15, "service.overview.table.status"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](17, 17, "service.overview.table.actions"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", (tmp_10_0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](20, 19, ctx_r2.ldnServicesRD$)) == null ? null : tmp_10_0.payload == null ? null : tmp_10_0.payload.page);
  }
}
function LdnServicesOverviewComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div")(1, "div", 22)(2, "div")(3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function LdnServicesOverviewComponent_ng_template_12_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r2.closeModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "div", 25)(11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "div", 26)(15, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function LdnServicesOverviewComponent_ng_template_12_Template_button_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r2.closeModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function LdnServicesOverviewComponent_ng_template_12_Template_button_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r2.deleteSelected(ctx_r2.selectedServiceId.toString(), ctx_r2.ldnServicesService));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](5, 7, "service.overview.delete.header"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](7, 9, "ldn-service-overview-close-modal"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](13, 11, "service.overview.delete.body"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](16, 13, "ldn-service-overview-close-modal"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](18, 15, "service.detail.delete.cancel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](20, 17, "ldn-service-overview-select-delete"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](22, 19, "service.overview.delete"), " ");
  }
}
/**
 * The `LdnServicesOverviewComponent` is a component that provides an overview of LDN (Linked Data Notifications) services.
 * It displays a paginated list of LDN services, allows users to edit and delete services,
 * toggle the status of each service directly form the page and allows for creation of new services redirecting the user on the creation/edit form
 */
class LdnServicesOverviewComponent {
  constructor(ldnServicesService, paginationService, modalService, cdRef, notificationService, translateService) {
    this.ldnServicesService = ldnServicesService;
    this.paginationService = paginationService;
    this.modalService = modalService;
    this.cdRef = cdRef;
    this.notificationService = notificationService;
    this.translateService = translateService;
    this.selectedServiceId = null;
    this.servicesData = [];
    this.config = Object.assign(new _core_data_find_list_options_model__WEBPACK_IMPORTED_MODULE_2__.FindListOptions(), {
      elementsPerPage: 10
    });
    this.pageConfig = Object.assign(new _shared_pagination_pagination_component_options_model__WEBPACK_IMPORTED_MODULE_7__.PaginationComponentOptions(), {
      id: 'po',
      pageSize: 10
    });
  }
  ngOnInit() {
    this.setLdnServices();
  }
  /**
   * Sets up the LDN services by fetching and observing the paginated list of services.
   */
  setLdnServices() {
    this.ldnServicesRD$ = this.paginationService.getFindListOptions(this.pageConfig.id, this.config).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.switchMap)(config => this.ldnServicesService.findAll(config, false, false).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_3__.getFirstCompletedRemoteData)())));
  }
  ngOnDestroy() {
    this.paginationService.clearPagination(this.pageConfig.id);
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_4__.hasValue)(this.isProcessingSub)) {
      this.isProcessingSub.unsubscribe();
    }
  }
  /**
   * Opens the delete confirmation modal.
   *
   * @param {any} content - The content of the modal.
   */
  openDeleteModal(content) {
    this.modalRef = this.modalService.open(content);
  }
  /**
   * Closes the currently open modal and triggers change detection.
   */
  closeModal() {
    this.modalRef.close();
    this.cdRef.detectChanges();
  }
  /**
   * Sets the selected LDN service ID for deletion and opens the delete confirmation modal.
   *
   * @param {number} serviceId - The ID of the service to be deleted.
   */
  selectServiceToDelete(serviceId) {
    this.selectedServiceId = serviceId;
    this.openDeleteModal(this.deleteModal);
  }
  /**
   * Deletes the selected LDN service.
   *
   * @param {string} serviceId - The ID of the service to be deleted.
   * @param {LdnServicesService} ldnServicesService - The service for managing LDN services.
   */
  deleteSelected(serviceId, ldnServicesService) {
    if (this.selectedServiceId !== null) {
      ldnServicesService.delete(serviceId).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_3__.getFirstCompletedRemoteData)()).subscribe(rd => {
        if (rd.hasSucceeded) {
          this.servicesData = this.servicesData.filter(service => service.id !== serviceId);
          this.ldnServicesRD$ = this.ldnServicesRD$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(remoteData => {
            if (remoteData.hasSucceeded) {
              remoteData.payload.page = remoteData.payload.page.filter(service => service.id.toString() !== serviceId);
            }
            return remoteData;
          }));
          this.cdRef.detectChanges();
          this.closeModal();
          this.notificationService.success(this.translateService.get('ldn-service-delete.notification.success.title'), this.translateService.get('ldn-service-delete.notification.success.content'));
        } else {
          this.notificationService.error(this.translateService.get('ldn-service-delete.notification.error.title'), this.translateService.get('ldn-service-delete.notification.error.content'));
          this.cdRef.detectChanges();
        }
      });
    }
  }
  /**
   * Toggles the status (enabled/disabled) of an LDN service.
   *
   * @param {any} ldnService - The LDN service object.
   * @param {LdnServicesService} ldnServicesService - The service for managing LDN services.
   */
  toggleStatus(ldnService, ldnServicesService) {
    const newStatus = !ldnService.enabled;
    const originalStatus = ldnService.enabled;
    const patchOperation = {
      op: 'replace',
      path: '/enabled',
      value: newStatus
    };
    ldnServicesService.patch(ldnService, [patchOperation]).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_3__.getFirstCompletedRemoteData)()).subscribe(rd => {
      if (rd.hasSucceeded) {
        ldnService.enabled = newStatus;
        this.notificationService.success(this.translateService.get('ldn-enable-service.notification.success.title'), this.translateService.get('ldn-enable-service.notification.success.content'));
      } else {
        ldnService.enabled = originalStatus;
        this.notificationService.error(this.translateService.get('ldn-enable-service.notification.error.title'), this.translateService.get('ldn-enable-service.notification.error.content'));
      }
    });
  }
  static {
    this.ɵfac = function LdnServicesOverviewComponent_Factory(t) {
      return new (t || LdnServicesOverviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_admin_admin_ldn_services_ldn_services_data_ldn_services_data_service__WEBPACK_IMPORTED_MODULE_0__.LdnServicesService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_core_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_1__.PaginationService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_5__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
      type: LdnServicesOverviewComponent,
      selectors: [["ds-ldn-services-directory"]],
      viewQuery: function LdnServicesOverviewComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c0, 7);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.deleteModal = _t.first);
        }
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵStandaloneFeature"]],
      decls: 14,
      vars: 9,
      consts: [["deleteModal", ""], [1, "container"], [1, "d-flex"], [1, "flex-grow-1"], [1, "d-flex", "justify-content-end"], ["routerLink", "/admin/ldn/services/new", 1, "btn", "btn-success"], [1, "fas", "fa-plus", "pr-2"], [3, "collectionSize", "hideGear", "hidePagerWhenSinglePage", "paginationOptions", 4, "ngIf"], [3, "collectionSize", "hideGear", "hidePagerWhenSinglePage", "paginationOptions"], [1, "table-responsive"], [1, "table", "table-striped", "table-hover"], ["scope", "col"], [4, "ngFor", "ngForOf"], [1, "col-3"], [3, "id"], [3, "id", "minLines"], [1, "status-indicator", 3, "click", "ngClass", "title"], [1, "btn-group"], [1, "btn", "btn-outline-danger", 3, "click"], [1, "fas", "fa-trash"], [1, "btn", "btn-outline-dark", 3, "routerLink"], [1, "fas", "fa-edit"], [1, "modal-header"], ["aria-label", "Close", "type", "button", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "mt-4", "text-right"], [1, "btn", "btn-outline-secondary", "mr-2", 3, "click"], ["id", "delete-confirm", 1, "btn", "btn-danger", 3, "click"]],
      template: function LdnServicesOverviewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "h1", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 4)(6, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](7, "i", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](9, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](10, LdnServicesOverviewComponent_ds_pagination_10_Template, 21, 21, "ds-pagination", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](11, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](12, LdnServicesOverviewComponent_ng_template_12_Template, 23, 21, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
        }
        if (rf & 2) {
          let tmp_3_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 3, "ldn-registered-services.title"));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](9, 5, "process.overview.new"));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ((tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](11, 7, ctx.ldnServicesRD$)) == null ? null : tmp_3_0.payload == null ? null : tmp_3_0.payload.totalElements) > 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgFor, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_15__.AsyncPipe, _shared_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_6__.PaginationComponent, _shared_truncatable_truncatable_component__WEBPACK_IMPORTED_MODULE_8__.TruncatableComponent, _shared_truncatable_truncatable_part_truncatable_part_component__WEBPACK_IMPORTED_MODULE_9__.TruncatablePartComponent, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterLink],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n.status-indicator[_ngcontent-%COMP%] {\n  padding: 2.5px 25px 2.5px 25px;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: background-color 0.5s;\n}\n\n.status-enabled[_ngcontent-%COMP%] {\n  background-color: #daf7a6;\n  color: #4f5359;\n  font-size: 85%;\n  font-weight: bold;\n}\n\n.status-enabled[_ngcontent-%COMP%]:hover {\n  background-color: #faa0a0;\n}\n\n.status-disabled[_ngcontent-%COMP%] {\n  background-color: #faa0a0;\n  color: #4f5359;\n  font-size: 85%;\n  font-weight: bold;\n}\n\n.status-disabled[_ngcontent-%COMP%]:hover {\n  background-color: #daf7a6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxkbi1zZXJ2aWNlcy1kaXJlY3RvcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQTtFQUNFLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7QUFDRjs7QUFDQTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUVGOztBQUFBO0VBQ0UseUJBQUE7QUFHRjs7QUFEQTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUlGOztBQUZBO0VBQ0UseUJBQUE7QUFLRiIsImZpbGUiOiJsZG4tc2VydmljZXMtZGlyZWN0b3J5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi9cbi5zdGF0dXMtaW5kaWNhdG9yIHtcbiAgcGFkZGluZzogMi41cHggMjVweCAyLjVweCAyNXB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjVzO1xufVxuLnN0YXR1cy1lbmFibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RhZjdhNjtcbiAgY29sb3I6ICM0ZjUzNTk7XG4gIGZvbnQtc2l6ZTogODUlO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5zdGF0dXMtZW5hYmxlZDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWEwYTA7XG59XG4uc3RhdHVzLWRpc2FibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhYTBhMDtcbiAgY29sb3I6ICM0ZjUzNTk7XG4gIGZvbnQtc2l6ZTogODUlO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5zdGF0dXMtZGlzYWJsZWQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGFmN2E2O1xufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWRtaW4vYWRtaW4tbGRuLXNlcnZpY2VzL2xkbi1zZXJ2aWNlcy1kaXJlY3RvcnkvbGRuLXNlcnZpY2VzLWRpcmVjdG9yeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBO0VBQ0UsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQ0FBQTtBQUNGOztBQUNBO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBRUY7O0FBQUE7RUFDRSx5QkFBQTtBQUdGOztBQURBO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBSUY7O0FBRkE7RUFDRSx5QkFBQTtBQUtGO0FBQ0EsNCtDQUE0K0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqL1xuLnN0YXR1cy1pbmRpY2F0b3Ige1xuICBwYWRkaW5nOiAyLjVweCAyNXB4IDIuNXB4IDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNXM7XG59XG4uc3RhdHVzLWVuYWJsZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGFmN2E2O1xuICBjb2xvcjogIzRmNTM1OTtcbiAgZm9udC1zaXplOiA4NSU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnN0YXR1cy1lbmFibGVkOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhYTBhMDtcbn1cbi5zdGF0dXMtZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFhMGEwO1xuICBjb2xvcjogIzRmNTM1OTtcbiAgZm9udC1zaXplOiA4NSU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnN0YXR1cy1kaXNhYmxlZDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkYWY3YTY7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 62361:
/*!*******************************************************************************************!*\
  !*** ./src/app/admin/admin-ldn-services/ldn-services-model/ldn-service-patterns.model.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotifyServicePattern: () => (/* binding */ NotifyServicePattern)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 50694);
/* harmony import */ var cerialize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cerialize */ 52013);


/**
 * A single notify service pattern and his properties
 */
class NotifyServicePattern {}
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([cerialize__WEBPACK_IMPORTED_MODULE_0__.autoserialize, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:type", String)], NotifyServicePattern.prototype, "pattern", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([cerialize__WEBPACK_IMPORTED_MODULE_0__.autoserialize, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:type", String)], NotifyServicePattern.prototype, "constraint", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([cerialize__WEBPACK_IMPORTED_MODULE_0__.autoserialize, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:type", String)], NotifyServicePattern.prototype, "automatic", void 0);

/***/ }),

/***/ 58102:
/*!*********************************************************************************************!*\
  !*** ./src/app/admin/admin-ldn-services/ldn-services-patterns/ldn-service-coar-patterns.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   notifyPatterns: () => (/* binding */ notifyPatterns)
/* harmony export */ });
/**
 * All available patterns for LDN service creation.
 * They are used to populate a dropdown in the LDN service form creation
 */
const notifyPatterns = ['request-endorsement', 'request-ingest', 'request-review', 'announce-relationship'];

/***/ }),

/***/ 17885:
/*!********************************************************************!*\
  !*** ./src/app/core/breadcrumbs/navigation-breadcrumb.resolver.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   navigationBreadcrumbResolver: () => (/* binding */ navigationBreadcrumbResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _navigation_breadcrumb_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigation-breadcrumb.service */ 71876);


/**
 * Method for resolving an I18n breadcrumb configuration object
 * @param {ActivatedRouteSnapshot} route The current ActivatedRouteSnapshot
 * @param {RouterStateSnapshot} state The current RouterStateSnapshot
 * @param {NavigationBreadcrumbsService} breadcrumbService
 * @returns BreadcrumbConfig object
 */
const navigationBreadcrumbResolver = (route, state, breadcrumbService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_navigation_breadcrumb_service__WEBPACK_IMPORTED_MODULE_0__.NavigationBreadcrumbsService)) => {
  const parentRoutes = [];
  getParentRoutes(route, parentRoutes);
  const relatedRoutes = route.data.relatedRoutes;
  const parentPaths = parentRoutes.map(parent => parent.routeConfig?.path);
  const relatedParentRoutes = relatedRoutes.filter(relatedRoute => parentPaths.includes(relatedRoute.path));
  const baseUrlSegmentPath = route.parent.url[route.parent.url.length - 1].path;
  const baseUrl = state.url.substring(0, state.url.lastIndexOf(baseUrlSegmentPath) + baseUrlSegmentPath.length);
  const combinedParentBreadcrumbKeys = relatedParentRoutes.reduce((previous, current) => {
    return `${previous}:${current.data.breadcrumbKey}`;
  }, route.data.breadcrumbKey);
  const combinedUrls = relatedParentRoutes.reduce((previous, current) => {
    return `${previous}:${baseUrl}${current.path}`;
  }, state.url);
  return {
    provider: breadcrumbService,
    key: combinedParentBreadcrumbKeys,
    url: combinedUrls
  };
};
/**
 * Method to collect all parent routes snapshot from current route snapshot
 * @param {ActivatedRouteSnapshot} route The current ActivatedRouteSnapshot
 * @param {ActivatedRouteSnapshot[]} parentRoutes
 */
function getParentRoutes(route, parentRoutes) {
  if (route.parent) {
    parentRoutes.push(route.parent);
    getParentRoutes(route.parent, parentRoutes);
  }
}

/***/ }),

/***/ 71876:
/*!*******************************************************************!*\
  !*** ./src/app/core/breadcrumbs/navigation-breadcrumb.service.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BREADCRUMB_MESSAGE_POSTFIX: () => (/* binding */ BREADCRUMB_MESSAGE_POSTFIX),
/* harmony export */   NavigationBreadcrumbsService: () => (/* binding */ NavigationBreadcrumbsService)
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
class NavigationBreadcrumbsService {
  /**
   * Method to calculate the breadcrumbs
   * @param key The key used to resolve the breadcrumb
   * @param url The url to use as a link for this breadcrumb
   */
  getBreadcrumbs(key, url) {
    const keys = key.split(':');
    const urls = url.split(':');
    const breadcrumbs = keys.map((currentKey, index) => new _breadcrumbs_breadcrumb_breadcrumb_model__WEBPACK_IMPORTED_MODULE_0__.Breadcrumb(currentKey + BREADCRUMB_MESSAGE_POSTFIX, urls[index]));
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(breadcrumbs.reverse());
  }
  static {
    this.ɵfac = function NavigationBreadcrumbsService_Factory(t) {
      return new (t || NavigationBreadcrumbsService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: NavigationBreadcrumbsService,
      factory: NavigationBreadcrumbsService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 33749:
/*!************************************************!*\
  !*** ./src/app/shared/utils/ipV4.validator.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IpV4Validator: () => (/* binding */ IpV4Validator)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 56106);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 90310);


/**
 * Validator to validate if an Ip is in the right format
 */
class IpV4Validator {
  validate(formControl) {
    const ipv4Regex = /^(\d{1,3}\.){3}\d{1,3}$/;
    const ipValue = formControl.value;
    const ipParts = ipValue?.split('.');
    if (ipv4Regex.test(ipValue) && ipParts.every(part => parseInt(part, 10) <= 255)) {
      return null;
    }
    return {
      isValidIp: false
    };
  }
  static {
    this.ɵfac = function IpV4Validator_Factory(t) {
      return new (t || IpV4Validator)();
    };
  }
  static {
    this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: IpV4Validator,
      selectors: [["", "ipV4format", ""]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALIDATORS,
        useExisting: IpV4Validator,
        multi: true
      }])]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_admin_admin-ldn-services_admin-ldn-services-routes_ts.js.map