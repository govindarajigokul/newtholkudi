"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["default-src_app_shared_comcol_comcol-forms_edit-comcol-page_comcol-metadata_comcol-metadata_c-ddac2e"],{

/***/ 30565:
/*!***********************************************!*\
  !*** ./src/app/core/shared/hal-link.model.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HALLink: () => (/* binding */ HALLink)
/* harmony export */ });
/**
 * A single link in the _links section of a {@link HALResource}
 */
class HALLink {}

/***/ }),

/***/ 63277:
/*!**********************************************************************************************************!*\
  !*** ./src/app/shared/comcol/comcol-forms/edit-comcol-page/comcol-metadata/comcol-metadata.component.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ComcolMetadataComponent: () => (/* binding */ ComcolMetadataComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 78374);
/* harmony import */ var _core_data_comcol_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/data/comcol-data.service */ 3440);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/shared/operators */ 55757);
/* harmony import */ var _empty_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../empty.util */ 82777);
/* harmony import */ var _notifications_notifications_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../notifications/notifications.service */ 69472);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 96439);












class ComcolMetadataComponent {
  constructor(dsoDataService, router, route, notificationsService, translate) {
    this.dsoDataService = dsoDataService;
    this.router = router;
    this.route = route;
    this.notificationsService = notificationsService;
    this.translate = translate;
  }
  ngOnInit() {
    this.dsoRD$ = this.route.parent.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(data => data.dso));
  }
  /**
   * Updates an existing DSO based on the submitted user data and navigates to the edited object's home page
   * @param event   The event returned by the community/collection form. Contains the new dso and logo uploader
   */
  onSubmit(event) {
    if (!(0,_empty_util__WEBPACK_IMPORTED_MODULE_2__.isEmpty)(event.operations)) {
      this.dsoDataService.patch(event.dso, event.operations).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_1__.getFirstCompletedRemoteData)()).subscribe(response => {
        if (response.hasSucceeded) {
          this.router.navigate([this.frontendURL, event.dso.uuid]); // todo: ok not to await this?
          this.notificationsService.success(null, this.translate.get(`${this.type.value}.edit.notifications.success`));
        } else if (response.statusCode === 403) {
          this.notificationsService.error(null, this.translate.get(`${this.type.value}.edit.notifications.unauthorized`));
        } else {
          this.notificationsService.error(null, this.translate.get(`${this.type.value}.edit.notifications.error`));
        }
      });
    } else {
      this.router.navigate([this.frontendURL, event.dso.uuid]);
    }
  }
  /**
   * Navigate to the relative DSO page
   */
  navigateToHomePage() {
    this.dsoRD$.pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_1__.getFirstSucceededRemoteData)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.take)(1)).subscribe(dsoRD => {
      this.router.navigate([this.frontendURL + dsoRD.payload.id]);
    });
  }
  static {
    this.ɵfac = function ComcolMetadataComponent_Factory(t) {
      return new (t || ComcolMetadataComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_data_comcol_data_service__WEBPACK_IMPORTED_MODULE_0__.ComColDataService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_3__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: ComcolMetadataComponent,
      selectors: [["ds-comcol-metadata"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵStandaloneFeature"]],
      decls: 0,
      vars: 0,
      template: function ComcolMetadataComponent_Template(rf, ctx) {},
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 20273:
/*!**************************************************************************************************!*\
  !*** ./src/app/shared/comcol/comcol-forms/edit-comcol-page/comcol-role/comcol-role.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ComcolRoleComponent: () => (/* binding */ ComcolRoleComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 83485);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 84975);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 85687);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var _access_control_access_control_routing_paths__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../access-control/access-control-routing-paths */ 25093);
/* harmony import */ var _core_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/breadcrumbs/dso-name.service */ 96526);
/* harmony import */ var _core_data_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core/data/request.service */ 32473);
/* harmony import */ var _core_eperson_group_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/eperson/group-data.service */ 44494);
/* harmony import */ var _core_shared_hal_link_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/shared/hal-link.model */ 30565);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/shared/operators */ 55757);
/* harmony import */ var _alert_alert_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../alert/alert.component */ 16292);
/* harmony import */ var _empty_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../empty.util */ 82777);
/* harmony import */ var _loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../loading/themed-loading.component */ 82394);
/* harmony import */ var _notifications_notifications_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../notifications/notifications.service */ 69472);
/* harmony import */ var _utils_has_no_value_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../utils/has-no-value.pipe */ 22198);
/* harmony import */ var _utils_var_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../utils/var.directive */ 18226);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 90310);























function ComcolRoleComponent_div_2_ds_loading_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "ds-loading");
  }
}
function ComcolRoleComponent_div_2_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 1, "comcol-role.edit.no-group"), " ");
  }
}
function ComcolRoleComponent_div_2_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](3, 3, "comcol-role.edit." + ((tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 1, ctx_r0.comcolRole$)) == null ? null : tmp_3_0.name) + ".anonymous-group"), " ");
  }
}
function ComcolRoleComponent_div_2_a_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const group_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().ngVar;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](1, 2, ctx_r0.editGroupLink$));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r0.dsoNameService.getName(group_r2), " ");
  }
}
function ComcolRoleComponent_div_2_button_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ComcolRoleComponent_div_2_button_21_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r0.create());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](3, 1, "comcol-role.edit.create"), " ");
  }
}
function ComcolRoleComponent_div_2_button_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ComcolRoleComponent_div_2_button_23_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r4);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r0.create());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 1, "comcol-role.edit.restrict"), " ");
  }
}
function ComcolRoleComponent_div_2_button_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ComcolRoleComponent_div_2_button_25_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r0.delete());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](3, 1, "comcol-role.edit.delete"), " ");
  }
}
function ComcolRoleComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 1)(1, "h2", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 3)(5, "ds-alert", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "div", 5)(10, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](11, ComcolRoleComponent_div_2_ds_loading_11_Template, 1, 0, "ds-loading", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](12, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](13, "dsHasNoValue");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](14, ComcolRoleComponent_div_2_div_14_Template, 3, 3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](15, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](16, ComcolRoleComponent_div_2_div_16_Template, 4, 5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](17, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](18, ComcolRoleComponent_div_2_a_18_Template, 3, 4, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](19, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](20, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](21, ComcolRoleComponent_div_2_button_21_Template, 4, 3, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](22, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](23, ComcolRoleComponent_div_2_button_23_Template, 3, 3, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](24, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](25, ComcolRoleComponent_div_2_button_25_Template, 4, 3, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](26, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](3, 10, ctx_r0.roleName$), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("type", "alert-info");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](8, 14, "comcol-role.edit." + ((tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](7, 12, ctx_r0.comcolRole$)) == null ? null : tmp_4_0.name) + ".description"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](13, 18, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](12, 16, ctx_r0.groupRD$)));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](15, 20, ctx_r0.hasNoGroup$));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](17, 22, ctx_r0.hasAnonymousGroup$));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](19, 24, ctx_r0.hasCustomGroup$));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](22, 26, ctx_r0.hasNoGroup$));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](24, 28, ctx_r0.hasAnonymousGroup$));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](26, 30, ctx_r0.hasCustomGroup$));
  }
}
/**
 * Component for managing a community or collection role.
 */
class ComcolRoleComponent {
  constructor(requestService, groupService, notificationsService, translateService, dsoNameService) {
    this.requestService = requestService;
    this.groupService = groupService;
    this.notificationsService = notificationsService;
    this.translateService = translateService;
    this.dsoNameService = dsoNameService;
    /**
     * The role to manage
     */
    this.comcolRole$ = new rxjs__WEBPACK_IMPORTED_MODULE_13__.BehaviorSubject(undefined);
  }
  /**
   * The link to the related group.
   */
  get groupLink() {
    return this.comcolRole.href;
  }
  /**
   * The role to manage
   */
  set comcolRole(newRole) {
    this.comcolRole$.next(newRole);
  }
  get comcolRole() {
    return this.comcolRole$.getValue();
  }
  /**
   * Create a group for this community or collection role.
   */
  create() {
    this.groupService.createComcolGroup(this.dso, this.comcolRole.name, this.groupLink).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_5__.getFirstCompletedRemoteData)()).subscribe(rd => {
      if (rd.hasSucceeded) {
        this.groupService.clearGroupsRequests();
        this.requestService.setStaleByHrefSubstring(this.comcolRole.href);
      } else {
        this.notificationsService.error(this.roleName$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.switchMap)(role => this.translateService.get('comcol-role.edit.create.error.title', {
          role
        }))), `${rd.statusCode} ${rd.errorMessage}`);
      }
    });
  }
  /**
   * Delete the group for this community or collection role.
   */
  delete() {
    this.groupService.deleteComcolGroup(this.groupLink).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_5__.getFirstCompletedRemoteData)()).subscribe(rd => {
      if (rd.hasSucceeded) {
        this.groupService.clearGroupsRequests();
        this.requestService.setStaleByHrefSubstring(this.comcolRole.href);
      } else {
        this.notificationsService.error(this.roleName$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.switchMap)(role => this.translateService.get('comcol-role.edit.delete.error.title', {
          role
        }))), rd.errorMessage);
      }
    });
  }
  ngOnInit() {
    this.groupRD$ = this.comcolRole$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.filter)(role => (0,_empty_util__WEBPACK_IMPORTED_MODULE_7__.hasValue)(role)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.switchMap)(role => this.groupService.findByHref(role.href)), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_5__.getAllCompletedRemoteData)());
    this.group$ = this.groupRD$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)(rd => {
      if ((0,_empty_util__WEBPACK_IMPORTED_MODULE_7__.hasValue)(rd.payload)) {
        return rd.payload;
      } else {
        return undefined;
      }
    }));
    this.editGroupLink$ = this.group$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)(group => (0,_empty_util__WEBPACK_IMPORTED_MODULE_7__.hasValue)(group) ? (0,_access_control_access_control_routing_paths__WEBPACK_IMPORTED_MODULE_0__.getGroupEditRoute)(group.id) : undefined));
    this.hasNoGroup$ = this.group$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)(group => (0,_empty_util__WEBPACK_IMPORTED_MODULE_7__.hasNoValue)(group)));
    this.hasAnonymousGroup$ = this.group$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)(group => (0,_empty_util__WEBPACK_IMPORTED_MODULE_7__.hasValue)(group) && group.name === 'Anonymous'));
    this.hasCustomGroup$ = this.group$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)(group => (0,_empty_util__WEBPACK_IMPORTED_MODULE_7__.hasValue)(group) && group.name !== 'Anonymous'));
    this.roleName$ = this.translateService.get(`comcol-role.edit.${this.comcolRole.name}.name`);
  }
  static {
    this.ɵfac = function ComcolRoleComponent_Factory(t) {
      return new (t || ComcolRoleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_core_data_request_service__WEBPACK_IMPORTED_MODULE_2__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_core_eperson_group_data_service__WEBPACK_IMPORTED_MODULE_3__.GroupDataService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_9__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_core_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_1__.DSONameService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
      type: ComcolRoleComponent,
      selectors: [["ds-comcol-role"]],
      inputs: {
        dso: "dso",
        comcolRole: "comcolRole"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵStandaloneFeature"]],
      decls: 4,
      vars: 8,
      consts: [["class", "card-body d-flex flex-column", 4, "ngVar"], [1, "card-body", "d-flex", "flex-column"], [1, "h4", "w-100"], [1, "mt-2", "mb-2"], [3, "type"], [1, "d-flex", "flex-md-row", "justify-content-between", "flex-column"], [1, "w-100", "d-flex", "align-items-center"], [4, "ngIf"], [3, "routerLink", 4, "ngIf"], [1, "flex-shrink-0"], ["class", "btn btn-primary create", 3, "click", 4, "ngIf"], ["class", "btn btn-primary restrict", 3, "click", 4, "ngIf"], ["class", "btn btn-danger delete", 3, "click", 4, "ngIf"], [3, "routerLink"], [1, "btn", "btn-primary", "create", 3, "click"], ["aria-hidden", "true", 1, "fas", "fa-plus"], [1, "btn", "btn-primary", "restrict", 3, "click"], [1, "btn", "btn-danger", "delete", 3, "click"], ["aria-hidden", "true", 1, "fas", "fa-trash"]],
      template: function ComcolRoleComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](1, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, ComcolRoleComponent_div_2_Template, 27, 32, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          let tmp_0_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassMapInterpolate1"]("card p-2 m-3 ", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](1, 4, ctx.comcolRole$)) == null ? null : tmp_0_0.name, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngVar", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](3, 6, ctx.group$));
        }
      },
      dependencies: [_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_8__.ThemedLoadingComponent, _alert_alert_component__WEBPACK_IMPORTED_MODULE_6__.AlertComponent, _angular_common__WEBPACK_IMPORTED_MODULE_18__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterLink, _utils_var_directive__WEBPACK_IMPORTED_MODULE_11__.VarDirective, _utils_has_no_value_pipe__WEBPACK_IMPORTED_MODULE_10__.HasNoValuePipe],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbWNvbC1yb2xlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBIiwiZmlsZSI6ImNvbWNvbC1yb2xlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi8iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbWNvbC9jb21jb2wtZm9ybXMvZWRpdC1jb21jb2wtcGFnZS9jb21jb2wtcm9sZS9jb21jb2wtcm9sZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBLDRqQkFBNGpCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi8iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 5880:
/*!*******************************************************************************************!*\
  !*** ./src/app/shared/comcol/comcol-forms/edit-comcol-page/edit-comcol-page.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditComColPageComponent: () => (/* binding */ EditComColPageComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var _empty_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../empty.util */ 82777);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 14354);





/**
 * Component representing the edit page for communities and collections
 */
class EditComColPageComponent {
  constructor(router, route) {
    this.router = router;
    this.route = route;
    this.router.events.subscribe(() => this.initPageParamsByRoute());
  }
  ngOnInit() {
    this.initPageParamsByRoute();
    this.pages = this.route.routeConfig.children.map(child => child.path).filter(path => (0,_empty_util__WEBPACK_IMPORTED_MODULE_0__.isNotEmpty)(path)); // ignore reroutes
    this.dsoRD$ = this.route.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(data => data.dso));
  }
  /**
   * Get the dso's page url
   * This method is expected to be overridden in the edit community/collection page components
   * @param dso The DSpaceObject for which the url is requested
   */
  getPageUrl(dso) {
    return this.router.url;
  }
  /**
   * Set page params depending on the route
   */
  initPageParamsByRoute() {
    this.currentPage = this.route.snapshot.firstChild.routeConfig.path;
    this.hideReturnButton = this.route.routeConfig.children.find(child => child.path === this.currentPage).data.hideReturnButton;
  }
  static {
    this.ɵfac = function EditComColPageComponent_Factory(t) {
      return new (t || EditComColPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: EditComColPageComponent,
      selectors: [["ds-edit-comcol"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 0,
      vars: 0,
      template: function EditComColPageComponent_Template(rf, ctx) {},
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 22198:
/*!***************************************************!*\
  !*** ./src/app/shared/utils/has-no-value.pipe.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HasNoValuePipe: () => (/* binding */ HasNoValuePipe)
/* harmony export */ });
/* harmony import */ var _empty_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../empty.util */ 82777);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 90310);


/**
 * Returns true if the passed value is null or undefined.
 */
class HasNoValuePipe {
  transform(value) {
    return (0,_empty_util__WEBPACK_IMPORTED_MODULE_0__.hasNoValue)(value);
  }
  static {
    this.ɵfac = function HasNoValuePipe_Factory(t) {
      return new (t || HasNoValuePipe)();
    };
  }
  static {
    this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "dsHasNoValue",
      type: HasNoValuePipe,
      pure: true,
      standalone: true
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=default-src_app_shared_comcol_comcol-forms_edit-comcol-page_comcol-metadata_comcol-metadata_c-ddac2e.js.map