"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["default-src_app_shared_resource-policies_create_resource-policy-create_component_ts-src_app_s-cad6cd"],{

/***/ 55584:
/*!*************************************************************************************!*\
  !*** ./src/app/shared/resource-policies/create/resource-policy-create.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResourcePolicyCreateComponent: () => (/* binding */ ResourcePolicyCreateComponent)
/* harmony export */ });
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 83485);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 78374);
/* harmony import */ var _core_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/breadcrumbs/dso-name.service */ 96526);
/* harmony import */ var _core_resource_policy_resource_policy_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/resource-policy/resource-policy-data.service */ 25521);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/shared/operators */ 55757);
/* harmony import */ var _item_page_edit_item_page_edit_item_page_routing_paths__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../item-page/edit-item-page/edit-item-page.routing-paths */ 82055);
/* harmony import */ var _notifications_notifications_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../notifications/notifications.service */ 69472);
/* harmony import */ var _form_resource_policy_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../form/resource-policy-form.component */ 32843);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 14354);
















class ResourcePolicyCreateComponent {
  /**
   * Initialize instance variables
   *
   * @param {DSONameService} dsoNameService
   * @param {NotificationsService} notificationsService
   * @param {ResourcePolicyDataService} resourcePolicyService
   * @param {ActivatedRoute} route
   * @param {Router} router
   * @param {TranslateService} translate
   */
  constructor(dsoNameService, notificationsService, resourcePolicyService, route, router, translate) {
    this.dsoNameService = dsoNameService;
    this.notificationsService = notificationsService;
    this.resourcePolicyService = resourcePolicyService;
    this.route = route;
    this.router = router;
    this.translate = translate;
    /**
     * A boolean representing if a submission creation operation is pending
     * @type {BehaviorSubject<boolean>}
     */
    this.processing$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject(false);
  }
  /**
   * Initialize the component
   */
  ngOnInit() {
    this.route.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(data => data), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.take)(1)).subscribe(data => {
      this.targetResourceUUID = data.resourcePolicyTarget.payload.id;
      this.targetResourceName = this.dsoNameService.getName(data.resourcePolicyTarget.payload);
    });
  }
  /**
   * Return a boolean representing if an operation is pending
   *
   * @return {Observable<boolean>}
   */
  isProcessing() {
    return this.processing$.asObservable();
  }
  /**
   * Redirect to the authorizations page
   */
  redirectToAuthorizationsPage() {
    this.router.navigate([`../../${_item_page_edit_item_page_edit_item_page_routing_paths__WEBPACK_IMPORTED_MODULE_3__.ITEM_EDIT_AUTHORIZATIONS_PATH}`], {
      relativeTo: this.route
    });
  }
  /**
   * Create a new resource policy
   *
   * @param event The {{ResourcePolicyEvent}} emitted
   */
  createResourcePolicy(event) {
    this.processing$.next(true);
    let response$;
    if (event.target.type === 'eperson') {
      response$ = this.resourcePolicyService.create(event.object, this.targetResourceUUID, event.target.uuid);
    } else {
      response$ = this.resourcePolicyService.create(event.object, this.targetResourceUUID, null, event.target.uuid);
    }
    response$.pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_2__.getFirstCompletedRemoteData)()).subscribe(responseRD => {
      this.processing$.next(false);
      if (responseRD.hasSucceeded) {
        this.notificationsService.success(null, this.translate.get('resource-policies.create.page.success.content'));
        this.redirectToAuthorizationsPage();
      } else {
        this.notificationsService.error(null, this.translate.get('resource-policies.create.page.failure.content'));
      }
    });
  }
  static {
    this.ɵfac = function ResourcePolicyCreateComponent_Factory(t) {
      return new (t || ResourcePolicyCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_core_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_0__.DSONameService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_4__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_core_resource_policy_resource_policy_data_service__WEBPACK_IMPORTED_MODULE_1__.ResourcePolicyDataService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
      type: ResourcePolicyCreateComponent,
      selectors: [["ds-resource-policy-create"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵStandaloneFeature"]],
      decls: 5,
      vars: 5,
      consts: [[1, "container"], [1, "mb-3"], [3, "reset", "submit", "isProcessing"]],
      template: function ResourcePolicyCreateComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0)(1, "h4", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "ds-resource-policy-form", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("reset", function ResourcePolicyCreateComponent_Template_ds_resource_policy_form_reset_4_listener() {
            return ctx.redirectToAuthorizationsPage();
          })("submit", function ResourcePolicyCreateComponent_Template_ds_resource_policy_form_submit_4_listener($event) {
            return ctx.createResourcePolicy($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 3, "resource-policies.create.page.heading"), " ", ctx.targetResourceName, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("isProcessing", ctx.isProcessing());
        }
      },
      dependencies: [_form_resource_policy_form_component__WEBPACK_IMPORTED_MODULE_5__.ResourcePolicyFormComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 10676:
/*!*********************************************************************************!*\
  !*** ./src/app/shared/resource-policies/edit/resource-policy-edit.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResourcePolicyEditComponent: () => (/* binding */ ResourcePolicyEditComponent)
/* harmony export */ });
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 83485);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 17796);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 27639);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 78374);
/* harmony import */ var _core_resource_policy_models_resource_policy_resource_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/resource-policy/models/resource-policy.resource-type */ 88985);
/* harmony import */ var _core_resource_policy_resource_policy_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/resource-policy/resource-policy-data.service */ 25521);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/shared/operators */ 55757);
/* harmony import */ var _item_page_edit_item_page_edit_item_page_routing_paths__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../item-page/edit-item-page/edit-item-page.routing-paths */ 82055);
/* harmony import */ var _notifications_notifications_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../notifications/notifications.service */ 69472);
/* harmony import */ var _form_resource_policy_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../form/resource-policy-form.component */ 32843);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 14354);















class ResourcePolicyEditComponent {
  /**
   * Initialize instance variables
   *
   * @param {NotificationsService} notificationsService
   * @param {ResourcePolicyDataService} resourcePolicyService
   * @param {ActivatedRoute} route
   * @param {Router} router
   * @param {TranslateService} translate
   */
  constructor(notificationsService, resourcePolicyService, route, router, translate) {
    this.notificationsService = notificationsService;
    this.resourcePolicyService = resourcePolicyService;
    this.route = route;
    this.router = router;
    this.translate = translate;
    /**
     * A boolean representing if a submission editing operation is pending
     * @type {BehaviorSubject<boolean>}
     */
    this.processing$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject(false);
  }
  /**
   * Initialize the component
   */
  ngOnInit() {
    this.route.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(data => data), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.take)(1)).subscribe(data => {
      this.resourcePolicy = data.resourcePolicy.payload;
    });
  }
  /**
   * Return a boolean representing if an operation is pending
   *
   * @return {Observable<boolean>}
   */
  isProcessing() {
    return this.processing$.asObservable();
  }
  /**
   * Redirect to the authorizations page
   */
  redirectToAuthorizationsPage() {
    this.router.navigate([`../../${_item_page_edit_item_page_edit_item_page_routing_paths__WEBPACK_IMPORTED_MODULE_3__.ITEM_EDIT_AUTHORIZATIONS_PATH}`], {
      relativeTo: this.route
    });
  }
  /**
   * Update a resource policy
   *
   * @param event The {{ResourcePolicyEvent}} emitted
   */
  updateResourcePolicy(event) {
    this.processing$.next(true);
    const updatedObject = Object.assign({}, event.object, {
      id: this.resourcePolicy.id,
      type: _core_resource_policy_models_resource_policy_resource_type__WEBPACK_IMPORTED_MODULE_0__.RESOURCE_POLICY.value,
      _links: this.resourcePolicy._links
    });
    const updateTargetSucceeded$ = event.updateTarget ? this.resourcePolicyService.updateTarget(this.resourcePolicy.id, this.resourcePolicy._links.self.href, event.target.uuid, event.target.type).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_2__.getFirstCompletedRemoteData)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(responseRD => responseRD && responseRD.hasSucceeded)) : (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(true);
    const updateResourcePolicySucceeded$ = this.resourcePolicyService.update(updatedObject).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_2__.getFirstCompletedRemoteData)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(responseRD => responseRD && responseRD.hasSucceeded));
    (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.combineLatest)([updateTargetSucceeded$, updateResourcePolicySucceeded$]).subscribe(([updateTargetSucceeded, updateResourcePolicySucceeded]) => {
      this.processing$.next(false);
      if (updateTargetSucceeded && updateResourcePolicySucceeded) {
        this.notificationsService.success(null, this.translate.get('resource-policies.edit.page.success.content'));
        this.redirectToAuthorizationsPage();
      } else if (updateResourcePolicySucceeded) {
        // everything except target has been updated
        this.notificationsService.error(null, this.translate.get('resource-policies.edit.page.target-failure.content'));
      } else if (updateTargetSucceeded) {
        // only target has been updated
        this.notificationsService.error(null, this.translate.get('resource-policies.edit.page.other-failure.content'));
      } else {
        // nothing has been updated
        this.notificationsService.error(null, this.translate.get('resource-policies.edit.page.failure.content'));
      }
    });
  }
  static {
    this.ɵfac = function ResourcePolicyEditComponent_Factory(t) {
      return new (t || ResourcePolicyEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_4__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_core_resource_policy_resource_policy_data_service__WEBPACK_IMPORTED_MODULE_1__.ResourcePolicyDataService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
      type: ResourcePolicyEditComponent,
      selectors: [["ds-resource-policy-edit"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵStandaloneFeature"]],
      decls: 5,
      vars: 6,
      consts: [[1, "container"], [1, "mb-3"], [3, "reset", "submit", "resourcePolicy", "isProcessing"]],
      template: function ResourcePolicyEditComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "ds-resource-policy-form", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("reset", function ResourcePolicyEditComponent_Template_ds_resource_policy_form_reset_4_listener() {
            return ctx.redirectToAuthorizationsPage();
          })("submit", function ResourcePolicyEditComponent_Template_ds_resource_policy_form_submit_4_listener($event) {
            return ctx.updateResourcePolicy($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 4, "resource-policies.edit.page.heading"), " ", ctx.resourcePolicy.id, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("resourcePolicy", ctx.resourcePolicy)("isProcessing", ctx.isProcessing());
        }
      },
      dependencies: [_form_resource_policy_form_component__WEBPACK_IMPORTED_MODULE_5__.ResourcePolicyFormComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslatePipe],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 57562:
/*!***********************************************************************************!*\
  !*** ./src/app/shared/resource-policies/entry/resource-policy-entry.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResourcePolicyEntryComponent: () => (/* binding */ ResourcePolicyEntryComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 56106);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var _access_control_access_control_routing_paths__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../access-control/access-control-routing-paths */ 25093);
/* harmony import */ var _core_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/breadcrumbs/dso-name.service */ 96526);
/* harmony import */ var _core_eperson_group_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/eperson/group-data.service */ 44494);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/shared/operators */ 55757);
/* harmony import */ var _date_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../date.util */ 63604);
/* harmony import */ var _empty_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../empty.util */ 82777);
/* harmony import */ var _utils_has_value_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/has-value.pipe */ 93120);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 14354);
/**
 * The contents of this file are subject to the license and copyright
 * detailed in the LICENSE and NOTICE files at the root of the source
 * tree and available online at
 *
 * http://www.dspace.org/license/
 */



















const _c0 = ["ds-resource-policy-entry", ""];
function ResourcePolicyEntryComponent_button_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ResourcePolicyEntryComponent_button_30_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.redirectToGroupEditPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 1, "resource-policies.table.headers.edit.group"));
  }
}
class ResourcePolicyEntryComponent {
  constructor(dsoNameService, groupService, route, router) {
    this.dsoNameService = dsoNameService;
    this.groupService = groupService;
    this.route = route;
    this.router = router;
    this.toggleCheckbox = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
  }
  ngOnInit() {
    this.epersonName$ = this.getName$(this.entry.policy.eperson);
    this.groupName$ = this.getName$(this.entry.policy.group);
  }
  getName$(dso$) {
    return dso$.pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_3__.getAllSucceededRemoteData)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(rd => {
      if ((0,_empty_util__WEBPACK_IMPORTED_MODULE_5__.hasValue)(rd?.payload)) {
        return this.dsoNameService.getName(rd.payload);
      }
      return undefined;
    }));
  }
  /**
   * Returns a date in simplified format (YYYY-MM-DD).
   *
   * @param date
   * @return a string with formatted date
   */
  formatDate(date) {
    return (0,_empty_util__WEBPACK_IMPORTED_MODULE_5__.isNotEmpty)(date) ? (0,_date_util__WEBPACK_IMPORTED_MODULE_4__.dateToString)((0,_date_util__WEBPACK_IMPORTED_MODULE_4__.stringToNgbDateStruct)(date)) : '';
  }
  /**
   * Redirect to resource policy editing page
   */
  redirectToResourcePolicyEditPage() {
    this.router.navigate([`./edit`], {
      relativeTo: this.route,
      queryParams: {
        policyId: this.entry.policy.id
      }
    });
  }
  /**
   * Redirect to group edit page
   */
  redirectToGroupEditPage() {
    this.groupService.findByHref(this.entry.policy._links.group.href, false).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_3__.getFirstSucceededRemoteDataPayload)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(group => group.id)).subscribe(groupUUID => {
      void this.router.navigate([(0,_access_control_access_control_routing_paths__WEBPACK_IMPORTED_MODULE_0__.getGroupEditRoute)(groupUUID)]);
    });
  }
  static {
    this.ɵfac = function ResourcePolicyEntryComponent_Factory(t) {
      return new (t || ResourcePolicyEntryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_1__.DSONameService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_eperson_group_data_service__WEBPACK_IMPORTED_MODULE_2__.GroupDataService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: ResourcePolicyEntryComponent,
      selectors: [["tr", "ds-resource-policy-entry", ""]],
      inputs: {
        entry: "entry"
      },
      outputs: {
        toggleCheckbox: "toggleCheckbox"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵStandaloneFeature"]],
      attrs: _c0,
      decls: 33,
      vars: 26,
      consts: [[1, "text-center"], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", 1, "custom-control-input", 3, "ngModelChange", "id", "ngModel"], [1, "custom-control-label", 3, "for"], [1, "sr-only"], ["scope", "row"], [1, "btn-group", "edit-field"], [1, "btn", "btn-outline-primary", "btn-sm", 3, "click", "title"], ["aria-hidden", "true", 1, "fas", "fa-edit", "fa-fw"], ["class", "btn btn-outline-primary btn-sm", 3, "title", "click", 4, "ngIf"], ["aria-hidden", "true", 1, "fas", "fa-users", "fa-fw"]],
      template: function ResourcePolicyEntryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 0)(1, "div", 1)(2, "input", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ResourcePolicyEntryComponent_Template_input_ngModelChange_2_listener($event) {
            return ctx.toggleCheckbox.emit($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "label", 3)(4, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "th", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](17, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](20, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "td", 0)(26, "div", 6)(27, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](28, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ResourcePolicyEntryComponent_Template_button_click_27_listener() {
            return ctx.redirectToResourcePolicyEditPage();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](29, "i", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](30, ResourcePolicyEntryComponent_button_30_Template, 3, 3, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](31, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](32, "dsHasValue");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("id", ctx.entry.id)("ngModel", ctx.entry.checked);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("for", ctx.entry.id);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](6, 14, ctx.entry.checked ? "resource-policies.table.headers.deselect" : "resource-policies.table.headers.select"));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.entry.id, "\n");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.entry.policy.name);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.entry.policy.policyType);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.entry.policy.action);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](17, 16, ctx.epersonName$), "\n");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](20, 18, ctx.groupName$), "\n");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.formatDate(ctx.entry.policy.startDate));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.formatDate(ctx.entry.policy.endDate));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](28, 20, "resource-policies.table.headers.edit.policy"));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](32, 24, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](31, 22, ctx.groupName$)));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _utils_has_value_pipe__WEBPACK_IMPORTED_MODULE_6__.HasValuePipe],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 32843:
/*!*********************************************************************************!*\
  !*** ./src/app/shared/resource-policies/form/resource-policy-form.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResourcePolicyFormComponent: () => (/* binding */ ResourcePolicyFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 49966);
/* harmony import */ var _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ng-dynamic-forms/core */ 94403);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 17796);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 83485);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 27639);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs/operators */ 85687);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs/operators */ 78374);
/* harmony import */ var _core_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/breadcrumbs/dso-name.service */ 96526);
/* harmony import */ var _core_data_request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/data/request.service */ 32473);
/* harmony import */ var _core_eperson_eperson_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/eperson/eperson-data.service */ 74449);
/* harmony import */ var _core_eperson_group_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/eperson/group-data.service */ 44494);
/* harmony import */ var _core_resource_policy_models_resource_policy_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/resource-policy/models/resource-policy.model */ 28235);
/* harmony import */ var _core_resource_policy_models_resource_policy_resource_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/resource-policy/models/resource-policy.resource-type */ 88985);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/shared/operators */ 55757);
/* harmony import */ var _btn_disabled_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../btn-disabled.directive */ 60456);
/* harmony import */ var _date_util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../date.util */ 63604);
/* harmony import */ var _empty_util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../empty.util */ 82777);
/* harmony import */ var _eperson_group_list_eperson_group_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../eperson-group-list/eperson-group-list.component */ 35800);
/* harmony import */ var _form_builder_ds_dynamic_form_ui_models_ds_dynamic_input_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../form/builder/ds-dynamic-form-ui/models/ds-dynamic-input.model */ 66733);
/* harmony import */ var _form_builder_ds_dynamic_form_ui_models_ds_dynamic_textarea_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../form/builder/ds-dynamic-form-ui/models/ds-dynamic-textarea.model */ 77485);
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../form/form.component */ 99386);
/* harmony import */ var _form_form_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../form/form.service */ 15390);
/* harmony import */ var _resource_policy_form_model__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./resource-policy-form.model */ 61654);































const _c0 = ["content"];
function ResourcePolicyFormComponent_ds_form_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "ds-form", 17, 2);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("formId", ctx_r1.formId)("formModel", ctx_r1.formModel)("displaySubmit", false)("displayCancel", false);
  }
}
function ResourcePolicyFormComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "ds-eperson-group-list", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("select", function ResourcePolicyFormComponent_ng_template_14_Template_ds_eperson_group_list_select_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.updateObjectSelected($event, true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
}
function ResourcePolicyFormComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "ds-eperson-group-list", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("select", function ResourcePolicyFormComponent_ng_template_19_Template_ds_eperson_group_list_select_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.updateObjectSelected($event, false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("isListOfEPerson", false);
  }
}
function ResourcePolicyFormComponent_span_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](3, 1, "submission.workflow.tasks.generic.processing"), " ");
  }
}
function ResourcePolicyFormComponent_span_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, "form.submit"), " ");
  }
}
function ResourcePolicyFormComponent_ng_template_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 21)(1, "h4", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](4, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ResourcePolicyFormComponent_ng_template_36_Template_button_click_4_listener() {
      const modal_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r5).$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](modal_r6.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](7, "div", 25)(8, "div", 26)(9, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](10, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](12, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](14, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](16, "div", 31)(17, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ResourcePolicyFormComponent_ng_template_36_Template_button_click_17_listener() {
      const modal_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r5).$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](modal_r6.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](3, 4, "resource-policies.form.eperson-group-list.modal.header"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](13, 6, ctx_r1.navActiveId === "eperson" ? "resource-policies.form.eperson-group-list.modal.text1.toGroup" : "resource-policies.form.eperson-group-list.modal.text1.toEPerson"), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](15, 8, "resource-policies.form.eperson-group-list.modal.text2"), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](19, 10, "resource-policies.form.eperson-group-list.modal.close"));
  }
}
/**
 * Component that show form for adding/editing a resource policy
 */
class ResourcePolicyFormComponent {
  /**
   * Initialize instance variables
   *
   * @param {DSONameService} dsoNameService
   * @param {EPersonDataService} ePersonService
   * @param {FormService} formService
   * @param {GroupDataService} groupService
   * @param {RequestService} requestService
   * @param modalService
   */
  constructor(dsoNameService, ePersonService, formService, groupService, requestService, modalService) {
    this.dsoNameService = dsoNameService;
    this.ePersonService = ePersonService;
    this.formService = formService;
    this.groupService = groupService;
    this.requestService = requestService;
    this.modalService = modalService;
    /**
     * A boolean representing if form submit operation is processing
     * @type {boolean}
     */
    this.isProcessing = (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.of)(false);
    /**
     * An event fired when form is canceled.
     * Event's payload is empty.
     */
    this.reset = new _angular_core__WEBPACK_IMPORTED_MODULE_16__.EventEmitter();
    /**
     * An event fired when form is submitted.
     * Event's payload equals to a new ResourcePolicy.
     */
    this.submit = new _angular_core__WEBPACK_IMPORTED_MODULE_16__.EventEmitter();
    /**
     * The name of the eperson or group that will be granted the permission
     * @type {BehaviorSubject<string>}
     */
    this.resourcePolicyTargetName$ = new rxjs__WEBPACK_IMPORTED_MODULE_18__.BehaviorSubject('');
    /**
     * Array to track all subscriptions and unsubscribe them onDestroy
     * @type {Array}
     */
    this.subs = [];
    this.resourcePolicyTargetUpdated = false;
  }
  /**
   * Initialize the component, setting up the form model
   */
  ngOnInit() {
    this.isActive = true;
    this.formId = this.formService.getUniqueId('resource-policy-form');
    this.formModel = this.buildResourcePolicyForm();
    if (this.isBeingEdited()) {
      const epersonRD$ = this.ePersonService.findByHref(this.resourcePolicy._links.eperson.href, false).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_6__.getFirstSucceededRemoteData)());
      const groupRD$ = this.groupService.findByHref(this.resourcePolicy._links.group.href, false).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_6__.getFirstSucceededRemoteData)());
      const dsoRD$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.combineLatest)([epersonRD$, groupRD$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.map)(rdArr => {
        return rdArr.find(rd => (0,_empty_util__WEBPACK_IMPORTED_MODULE_9__.isNotEmpty)(rd.payload));
      }), (0,_empty_util__WEBPACK_IMPORTED_MODULE_9__.hasValueOperator)());
      this.subs.push(dsoRD$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.filter)(() => this.isActive)).subscribe(dsoRD => {
        this.resourcePolicyGrant = dsoRD.payload;
        this.navActiveId = String(dsoRD.payload.type);
        this.resourcePolicyTargetName$.next(this.getResourcePolicyTargetName());
      }));
    }
  }
  /**
   * Method to check if the form status is valid or not
   *
   * @return Observable that emits the form status
   */
  isFormValid() {
    return this.formService.isValid(this.formId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.map)(isValid => isValid && (0,_empty_util__WEBPACK_IMPORTED_MODULE_9__.isNotEmpty)(this.resourcePolicyGrant)));
  }
  /**
   * Initialize the form model
   *
   * @return the form models
   */
  buildResourcePolicyForm() {
    const formModel = [];
    formModel.push(new _form_builder_ds_dynamic_form_ui_models_ds_dynamic_input_model__WEBPACK_IMPORTED_MODULE_11__.DsDynamicInputModel(_resource_policy_form_model__WEBPACK_IMPORTED_MODULE_15__.RESOURCE_POLICY_FORM_NAME_CONFIG), new _form_builder_ds_dynamic_form_ui_models_ds_dynamic_textarea_model__WEBPACK_IMPORTED_MODULE_12__.DsDynamicTextAreaModel(_resource_policy_form_model__WEBPACK_IMPORTED_MODULE_15__.RESOURCE_POLICY_FORM_DESCRIPTION_CONFIG), new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_22__.DynamicSelectModel(_resource_policy_form_model__WEBPACK_IMPORTED_MODULE_15__.RESOURCE_POLICY_FORM_POLICY_TYPE_CONFIG), new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_22__.DynamicSelectModel(_resource_policy_form_model__WEBPACK_IMPORTED_MODULE_15__.RESOURCE_POLICY_FORM_ACTION_TYPE_CONFIG));
    const startDateModel = new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_22__.DynamicDatePickerModel(_resource_policy_form_model__WEBPACK_IMPORTED_MODULE_15__.RESOURCE_POLICY_FORM_START_DATE_CONFIG, _resource_policy_form_model__WEBPACK_IMPORTED_MODULE_15__.RESOURCE_POLICY_FORM_START_DATE_LAYOUT);
    const endDateModel = new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_22__.DynamicDatePickerModel(_resource_policy_form_model__WEBPACK_IMPORTED_MODULE_15__.RESOURCE_POLICY_FORM_END_DATE_CONFIG, _resource_policy_form_model__WEBPACK_IMPORTED_MODULE_15__.RESOURCE_POLICY_FORM_END_DATE_LAYOUT);
    const dateGroupConfig = Object.assign({}, _resource_policy_form_model__WEBPACK_IMPORTED_MODULE_15__.RESOURCE_POLICY_FORM_DATE_GROUP_CONFIG, {
      group: []
    });
    dateGroupConfig.group.push(startDateModel, endDateModel);
    formModel.push(new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_22__.DynamicFormGroupModel(dateGroupConfig, _resource_policy_form_model__WEBPACK_IMPORTED_MODULE_15__.RESOURCE_POLICY_FORM_DATE_GROUP_LAYOUT));
    this.initModelsValue(formModel);
    return formModel;
  }
  /**
   * Setting up the form models value
   *
   * @return the form models
   */
  initModelsValue(formModel) {
    if (this.resourcePolicy) {
      formModel.forEach(model => {
        if (model.id === 'date') {
          if ((0,_empty_util__WEBPACK_IMPORTED_MODULE_9__.hasValue)(this.resourcePolicy.startDate)) {
            model.get(0).value = (0,_date_util__WEBPACK_IMPORTED_MODULE_8__.stringToNgbDateStruct)(this.resourcePolicy.startDate);
          }
          if ((0,_empty_util__WEBPACK_IMPORTED_MODULE_9__.hasValue)(this.resourcePolicy.endDate)) {
            model.get(1).value = (0,_date_util__WEBPACK_IMPORTED_MODULE_8__.stringToNgbDateStruct)(this.resourcePolicy.endDate);
          }
        } else {
          if (this.resourcePolicy.hasOwnProperty(model.id) && this.resourcePolicy[model.id]) {
            model.value = this.resourcePolicy[model.id];
          }
        }
      });
    }
    return formModel;
  }
  /**
   * Return a boolean representing If is possible to set policy grant
   *
   * @return true if is possible, false otherwise
   */
  isBeingEdited() {
    return !(0,_empty_util__WEBPACK_IMPORTED_MODULE_9__.isEmpty)(this.resourcePolicy);
  }
  /**
   * Return the name of the eperson or group that will be granted the permission
   *
   * @return the object name
   */
  getResourcePolicyTargetName() {
    return (0,_empty_util__WEBPACK_IMPORTED_MODULE_9__.isNotEmpty)(this.resourcePolicyGrant) ? this.dsoNameService.getName(this.resourcePolicyGrant) : '';
  }
  /**
   * Update reference to the eperson or group that will be granted the permission
   */
  updateObjectSelected(object, isEPerson) {
    this.resourcePolicyTargetUpdated = true;
    this.resourcePolicyGrant = object;
    this.resourcePolicyGrantType = isEPerson ? 'eperson' : 'group';
    this.resourcePolicyTargetName$.next(this.getResourcePolicyTargetName());
  }
  /**
   * Method called on reset
   * Emit a new reset Event
   */
  onReset() {
    this.reset.emit();
  }
  /**
   * Method called on submit.
   * Emit a new submit Event whether the form is valid
   */
  onSubmit() {
    this.formService.getFormData(this.formId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.take)(1)).subscribe(data => {
      const eventPayload = Object.create({});
      eventPayload.object = this.createResourcePolicyByFormData(data);
      eventPayload.target = {
        type: this.resourcePolicyGrantType,
        uuid: this.resourcePolicyGrant.id
      };
      eventPayload.updateTarget = this.resourcePolicyTargetUpdated;
      this.submit.emit(eventPayload);
    });
  }
  /**
   * Create e new ResourcePolicy by form data
   *
   * @return the new ResourcePolicy object
   */
  createResourcePolicyByFormData(data) {
    const resourcePolicy = new _core_resource_policy_models_resource_policy_model__WEBPACK_IMPORTED_MODULE_4__.ResourcePolicy();
    resourcePolicy.name = data.name ? data.name[0].value : null;
    resourcePolicy.description = data.description ? data.description[0].value : null;
    resourcePolicy.policyType = data.policyType ? data.policyType[0].value : null;
    resourcePolicy.action = data.action ? data.action[0].value : null;
    resourcePolicy.startDate = data.date && data.date.start ? (0,_date_util__WEBPACK_IMPORTED_MODULE_8__.dateToISOFormat)(data.date.start[0].value) : null;
    resourcePolicy.endDate = data.date && data.date.end ? (0,_date_util__WEBPACK_IMPORTED_MODULE_8__.dateToISOFormat)(data.date.end[0].value) : null;
    resourcePolicy.type = _core_resource_policy_models_resource_policy_resource_type__WEBPACK_IMPORTED_MODULE_5__.RESOURCE_POLICY;
    return resourcePolicy;
  }
  /**
   * Unsubscribe from all subscriptions
   */
  ngOnDestroy() {
    this.isActive = false;
    this.formModel = null;
    this.subs.filter(subscription => (0,_empty_util__WEBPACK_IMPORTED_MODULE_9__.hasValue)(subscription)).forEach(subscription => subscription.unsubscribe());
  }
  onNavChange(changeEvent) {
    // if a policy is being edited it should not be possible to switch between group and eperson
    if (this.isBeingEdited()) {
      changeEvent.preventDefault();
      this.modalService.open(this.content);
    }
  }
  static {
    this.ɵfac = function ResourcePolicyFormComponent_Factory(t) {
      return new (t || ResourcePolicyFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_core_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_0__.DSONameService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_core_eperson_eperson_data_service__WEBPACK_IMPORTED_MODULE_2__.EPersonDataService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_form_form_service__WEBPACK_IMPORTED_MODULE_14__.FormService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_core_eperson_group_data_service__WEBPACK_IMPORTED_MODULE_3__.GroupDataService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_core_data_request_service__WEBPACK_IMPORTED_MODULE_1__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__.NgbModal));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineComponent"]({
      type: ResourcePolicyFormComponent,
      selectors: [["ds-resource-policy-form"]],
      viewQuery: function ResourcePolicyFormComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
        }
      },
      inputs: {
        resourcePolicy: "resourcePolicy",
        isProcessing: "isProcessing"
      },
      outputs: {
        reset: "reset",
        submit: "submit"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵStandaloneFeature"]],
      decls: 38,
      vars: 34,
      consts: [["nav", "ngbNav"], ["content", ""], ["formRef", "formComponent"], [3, "formId", "formModel", "displaySubmit", "displayCancel", 4, "ngIf"], [1, "container-fluid"], ["for", "ResourcePolicyObject"], ["id", "ResourcePolicyObject", "type", "text", 1, "form-control", "mb-3", 3, "value"], ["ngbNav", "", 1, "nav-pills", 3, "activeIdChange", "navChange", "activeId"], ["role", "presentation", 3, "ngbNavItem"], ["ngbNavLink", ""], ["ngbNavContent", ""], [3, "ngbNavOutlet"], [1, "form-group", "row"], [1, "col", "text-right"], ["type", "reset", 1, "btn", "btn-default", 3, "click", "dsBtnDisabled"], ["type", "button", 1, "btn", "btn-primary", 3, "click", "dsBtnDisabled"], [4, "ngIf"], [3, "formId", "formModel", "displaySubmit", "displayCancel"], [3, "select"], [3, "select", "isListOfEPerson"], [1, "fas", "fa-circle-notch", "fa-spin"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "d-flex", "flex-row"], [1, "mr-3"], [1, "fas", "fa-info-circle", "fa-2x", "text-info"], [1, "font-weight-bold", 3, "innerHTML"], [3, "innerHTML"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"]],
      template: function ResourcePolicyFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, ResourcePolicyFormComponent_ds_form_1_Template, 2, 4, "ds-form", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "div", 4)(3, "label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](5, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](6, "input", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](7, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](8, "ul", 7, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayListener"]("activeIdChange", function ResourcePolicyFormComponent_Template_ul_activeIdChange_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayBindingSet"](ctx.navActiveId, $event) || (ctx.navActiveId = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("navChange", function ResourcePolicyFormComponent_Template_ul_navChange_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx.onNavChange($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](10, "li", 8)(11, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](13, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](14, ResourcePolicyFormComponent_ng_template_14_Template, 1, 0, "ng-template", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](15, "li", 8)(16, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](18, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](19, ResourcePolicyFormComponent_ng_template_19_Template, 1, 1, "ng-template", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](20, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](21, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](22, "hr");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](23, "div", 12)(24, "div", 13)(25, "button", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](26, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ResourcePolicyFormComponent_Template_button_click_25_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx.onReset());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](27);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](28, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](29, "button", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](30, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](31, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ResourcePolicyFormComponent_Template_button_click_29_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx.onSubmit());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](32, ResourcePolicyFormComponent_span_32_Template, 4, 3, "span", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](33, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](34, ResourcePolicyFormComponent_span_34_Template, 3, 3, "span", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](35, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](36, ResourcePolicyFormComponent_ng_template_36_Template, 20, 12, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplateRefExtractor"]);
        }
        if (rf & 2) {
          const nav_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵreference"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.formModel);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](5, 14, "resource-policies.form.eperson-group-list.label"));
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](7, 16, ctx.resourcePolicyTargetName$));
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayProperty"]("activeId", ctx.navActiveId);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngbNavItem", "eperson");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](13, 18, "resource-policies.form.eperson-group-list.tab.eperson"));
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngbNavItem", "group");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](18, 20, "resource-policies.form.eperson-group-list.tab.group"));
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngbNavOutlet", nav_r7);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("dsBtnDisabled", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](26, 22, ctx.isProcessing));
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](28, 24, "form.cancel"));
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("dsBtnDisabled", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](30, 26, ctx.isFormValid()) !== true || _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](31, 28, ctx.isProcessing));
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](33, 30, ctx.isProcessing));
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](35, 32, ctx.isProcessing) !== true);
        }
      },
      dependencies: [_form_form_component__WEBPACK_IMPORTED_MODULE_13__.FormComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__.NgbNavModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__.NgbNavContent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__.NgbNav, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__.NgbNavOutlet, _eperson_group_list_eperson_group_list_component__WEBPACK_IMPORTED_MODULE_10__.EpersonGroupListComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_26__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_26__.NgIf, _btn_disabled_directive__WEBPACK_IMPORTED_MODULE_7__.BtnDisabledDirective],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 61654:
/*!*****************************************************************************!*\
  !*** ./src/app/shared/resource-policies/form/resource-policy-form.model.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RESOURCE_POLICY_FORM_ACTION_TYPE_CONFIG: () => (/* binding */ RESOURCE_POLICY_FORM_ACTION_TYPE_CONFIG),
/* harmony export */   RESOURCE_POLICY_FORM_DATE_GROUP_CONFIG: () => (/* binding */ RESOURCE_POLICY_FORM_DATE_GROUP_CONFIG),
/* harmony export */   RESOURCE_POLICY_FORM_DATE_GROUP_LAYOUT: () => (/* binding */ RESOURCE_POLICY_FORM_DATE_GROUP_LAYOUT),
/* harmony export */   RESOURCE_POLICY_FORM_DESCRIPTION_CONFIG: () => (/* binding */ RESOURCE_POLICY_FORM_DESCRIPTION_CONFIG),
/* harmony export */   RESOURCE_POLICY_FORM_END_DATE_CONFIG: () => (/* binding */ RESOURCE_POLICY_FORM_END_DATE_CONFIG),
/* harmony export */   RESOURCE_POLICY_FORM_END_DATE_LAYOUT: () => (/* binding */ RESOURCE_POLICY_FORM_END_DATE_LAYOUT),
/* harmony export */   RESOURCE_POLICY_FORM_NAME_CONFIG: () => (/* binding */ RESOURCE_POLICY_FORM_NAME_CONFIG),
/* harmony export */   RESOURCE_POLICY_FORM_POLICY_TYPE_CONFIG: () => (/* binding */ RESOURCE_POLICY_FORM_POLICY_TYPE_CONFIG),
/* harmony export */   RESOURCE_POLICY_FORM_START_DATE_CONFIG: () => (/* binding */ RESOURCE_POLICY_FORM_START_DATE_CONFIG),
/* harmony export */   RESOURCE_POLICY_FORM_START_DATE_LAYOUT: () => (/* binding */ RESOURCE_POLICY_FORM_START_DATE_LAYOUT)
/* harmony export */ });
/* harmony import */ var _core_resource_policy_models_action_type_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/resource-policy/models/action-type.model */ 46355);
/* harmony import */ var _core_resource_policy_models_policy_type_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/resource-policy/models/policy-type.model */ 46251);


const policyTypeList = [{
  label: _core_resource_policy_models_policy_type_model__WEBPACK_IMPORTED_MODULE_1__.PolicyType.TYPE_SUBMISSION,
  value: _core_resource_policy_models_policy_type_model__WEBPACK_IMPORTED_MODULE_1__.PolicyType.TYPE_SUBMISSION
}, {
  label: _core_resource_policy_models_policy_type_model__WEBPACK_IMPORTED_MODULE_1__.PolicyType.TYPE_WORKFLOW,
  value: _core_resource_policy_models_policy_type_model__WEBPACK_IMPORTED_MODULE_1__.PolicyType.TYPE_WORKFLOW
}, {
  label: _core_resource_policy_models_policy_type_model__WEBPACK_IMPORTED_MODULE_1__.PolicyType.TYPE_INHERITED,
  value: _core_resource_policy_models_policy_type_model__WEBPACK_IMPORTED_MODULE_1__.PolicyType.TYPE_INHERITED
}, {
  label: _core_resource_policy_models_policy_type_model__WEBPACK_IMPORTED_MODULE_1__.PolicyType.TYPE_CUSTOM,
  value: _core_resource_policy_models_policy_type_model__WEBPACK_IMPORTED_MODULE_1__.PolicyType.TYPE_CUSTOM
}];
const policyActionList = [{
  label: _core_resource_policy_models_action_type_model__WEBPACK_IMPORTED_MODULE_0__.ActionType.READ.toString(),
  value: _core_resource_policy_models_action_type_model__WEBPACK_IMPORTED_MODULE_0__.ActionType.READ
}, {
  label: _core_resource_policy_models_action_type_model__WEBPACK_IMPORTED_MODULE_0__.ActionType.WRITE.toString(),
  value: _core_resource_policy_models_action_type_model__WEBPACK_IMPORTED_MODULE_0__.ActionType.WRITE
}, {
  label: _core_resource_policy_models_action_type_model__WEBPACK_IMPORTED_MODULE_0__.ActionType.REMOVE.toString(),
  value: _core_resource_policy_models_action_type_model__WEBPACK_IMPORTED_MODULE_0__.ActionType.REMOVE
}, {
  label: _core_resource_policy_models_action_type_model__WEBPACK_IMPORTED_MODULE_0__.ActionType.ADMIN.toString(),
  value: _core_resource_policy_models_action_type_model__WEBPACK_IMPORTED_MODULE_0__.ActionType.ADMIN
}, {
  label: _core_resource_policy_models_action_type_model__WEBPACK_IMPORTED_MODULE_0__.ActionType.DELETE.toString(),
  value: _core_resource_policy_models_action_type_model__WEBPACK_IMPORTED_MODULE_0__.ActionType.DELETE
}, {
  label: _core_resource_policy_models_action_type_model__WEBPACK_IMPORTED_MODULE_0__.ActionType.WITHDRAWN_READ.toString(),
  value: _core_resource_policy_models_action_type_model__WEBPACK_IMPORTED_MODULE_0__.ActionType.WITHDRAWN_READ
}, {
  label: _core_resource_policy_models_action_type_model__WEBPACK_IMPORTED_MODULE_0__.ActionType.DEFAULT_BITSTREAM_READ.toString(),
  value: _core_resource_policy_models_action_type_model__WEBPACK_IMPORTED_MODULE_0__.ActionType.DEFAULT_BITSTREAM_READ
}, {
  label: _core_resource_policy_models_action_type_model__WEBPACK_IMPORTED_MODULE_0__.ActionType.DEFAULT_ITEM_READ.toString(),
  value: _core_resource_policy_models_action_type_model__WEBPACK_IMPORTED_MODULE_0__.ActionType.DEFAULT_ITEM_READ
}];
const RESOURCE_POLICY_FORM_NAME_CONFIG = {
  id: 'name',
  label: 'resource-policies.form.name.label',
  maxLength: 30,
  hint: 'resource-policies.form.name.hint',
  metadataFields: [],
  repeatable: false,
  submissionId: '',
  hasSelectableMetadata: false
};
const RESOURCE_POLICY_FORM_DESCRIPTION_CONFIG = {
  id: 'description',
  label: 'resource-policies.form.description.label',
  metadataFields: [],
  repeatable: false,
  rows: 10,
  submissionId: '',
  hasSelectableMetadata: false
};
const RESOURCE_POLICY_FORM_POLICY_TYPE_CONFIG = {
  id: 'policyType',
  label: 'resource-policies.form.policy-type.label',
  options: policyTypeList,
  required: true,
  validators: {
    required: null
  },
  errorMessages: {
    required: 'resource-policies.form.policy-type.required'
  }
};
const RESOURCE_POLICY_FORM_ACTION_TYPE_CONFIG = {
  id: 'action',
  label: 'resource-policies.form.action-type.label',
  options: policyActionList,
  required: true,
  validators: {
    required: null
  },
  errorMessages: {
    required: 'resource-policies.form.action-type.required'
  }
};
const RESOURCE_POLICY_FORM_DATE_GROUP_CONFIG = {
  id: 'date',
  group: []
};
const RESOURCE_POLICY_FORM_DATE_GROUP_LAYOUT = {
  element: {
    control: 'form-row'
  }
};
const RESOURCE_POLICY_FORM_START_DATE_CONFIG = {
  id: 'start',
  label: 'resource-policies.form.date.start.label',
  placeholder: 'resource-policies.form.date.start.label',
  inline: false,
  toggleIcon: 'far fa-calendar-alt'
};
const RESOURCE_POLICY_FORM_START_DATE_LAYOUT = {
  element: {
    container: 'p-0',
    label: 'col-form-label'
  },
  grid: {
    host: 'col-md-6'
  }
};
const RESOURCE_POLICY_FORM_END_DATE_CONFIG = {
  id: 'end',
  label: 'resource-policies.form.date.end.label',
  placeholder: 'resource-policies.form.date.end.label',
  inline: false,
  toggleIcon: 'far fa-calendar-alt'
};
const RESOURCE_POLICY_FORM_END_DATE_LAYOUT = {
  element: {
    container: 'p-0',
    label: 'col-form-label'
  },
  grid: {
    host: 'col-md-6'
  }
};

/***/ }),

/***/ 45539:
/*!***************************************************************************************!*\
  !*** ./src/app/shared/resource-policies/resolvers/resource-policy-target.resolver.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resourcePolicyTargetResolver: () => (/* binding */ resourcePolicyTargetResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 84975);
/* harmony import */ var _config_app_config_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../config/app-config.interface */ 82640);
/* harmony import */ var _core_lazy_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/lazy-data-service */ 4047);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/shared/operators */ 55757);
/* harmony import */ var _core_shared_resource_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/shared/resource-type */ 42547);
/* harmony import */ var _empty_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../empty.util */ 82777);








/**
 * Method for resolving an item based on the parameters in the current route
 * @param {ActivatedRouteSnapshot} route The current ActivatedRouteSnapshot
 * @param {RouterStateSnapshot} state The current RouterStateSnapshot
 * @param dataServiceMap
 * @param parentInjector
 * @param router
 * @returns Observable<<RemoteData<Item>> Emits the found item based on the parameters in the current route,
 * or an error if something went wrong
 */
const resourcePolicyTargetResolver = (route, state, dataServiceMap = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_config_app_config_interface__WEBPACK_IMPORTED_MODULE_0__.APP_DATA_SERVICES_MAP), parentInjector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injector), router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router)) => {
  const targetType = route.queryParamMap.get('targetType');
  const policyTargetId = route.queryParamMap.get('policyTargetId');
  if ((0,_empty_util__WEBPACK_IMPORTED_MODULE_4__.isEmpty)(targetType) || (0,_empty_util__WEBPACK_IMPORTED_MODULE_4__.isEmpty)(policyTargetId)) {
    router.navigateByUrl('/404', {
      skipLocationChange: true
    });
  }
  const resourceType = new _core_shared_resource_type__WEBPACK_IMPORTED_MODULE_3__.ResourceType(targetType);
  const lazyProvider$ = (0,_core_lazy_data_service__WEBPACK_IMPORTED_MODULE_1__.lazyDataService)(dataServiceMap, resourceType.value, parentInjector);
  return lazyProvider$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(dataService => {
    return dataService.findById(policyTargetId);
  }), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_2__.getFirstCompletedRemoteData)());
};

/***/ }),

/***/ 92117:
/*!********************************************************************************!*\
  !*** ./src/app/shared/resource-policies/resolvers/resource-policy.resolver.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resourcePolicyResolver: () => (/* binding */ resourcePolicyResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _core_resource_policy_resource_policy_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/resource-policy/resource-policy-data.service */ 25521);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/shared/operators */ 55757);
/* harmony import */ var _empty_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../empty.util */ 82777);
/* harmony import */ var _utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/follow-link-config.model */ 67600);






/**
 * Method for resolving an item based on the parameters in the current route
 * @param {ActivatedRouteSnapshot} route The current ActivatedRouteSnapshot
 * @param {RouterStateSnapshot} state The current RouterStateSnapshot
 * @param {Router} router
 * @param {ResourcePolicyDataService} resourcePolicyService
 * @returns Observable<<RemoteData<Item>> Emits the found item based on the parameters in the current route,
 * or an error if something went wrong
 */
const resourcePolicyResolver = (route, state, router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), resourcePolicyService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_core_resource_policy_resource_policy_data_service__WEBPACK_IMPORTED_MODULE_0__.ResourcePolicyDataService)) => {
  const policyId = route.queryParamMap.get('policyId');
  if ((0,_empty_util__WEBPACK_IMPORTED_MODULE_2__.isEmpty)(policyId)) {
    router.navigateByUrl('/404', {
      skipLocationChange: true
    });
  }
  return resourcePolicyService.findById(policyId, true, false, (0,_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_3__.followLink)('eperson'), (0,_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_3__.followLink)('group')).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_1__.getFirstCompletedRemoteData)());
};

/***/ }),

/***/ 24380:
/*!*************************************************************************!*\
  !*** ./src/app/shared/resource-policies/resource-policies.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResourcePoliciesComponent: () => (/* binding */ ResourcePoliciesComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 83485);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 70141);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 85687);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 19819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 64785);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 19847);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 89800);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 78374);
/* harmony import */ var _core_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/breadcrumbs/dso-name.service */ 96526);
/* harmony import */ var _core_data_request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/data/request.service */ 32473);
/* harmony import */ var _core_eperson_eperson_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/eperson/eperson-data.service */ 74449);
/* harmony import */ var _core_eperson_group_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/eperson/group-data.service */ 44494);
/* harmony import */ var _core_resource_policy_resource_policy_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/resource-policy/resource-policy-data.service */ 25521);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/shared/operators */ 55757);
/* harmony import */ var _btn_disabled_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../btn-disabled.directive */ 60456);
/* harmony import */ var _empty_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../empty.util */ 82777);
/* harmony import */ var _notifications_notifications_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../notifications/notifications.service */ 69472);
/* harmony import */ var _utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/follow-link-config.model */ 67600);
/* harmony import */ var _entry_resource_policy_entry_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./entry/resource-policy-entry.component */ 57562);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ 14354);


























function ResourcePoliciesComponent_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" (", ctx_r0.resourceUUID, ") ");
  }
}
function ResourcePoliciesComponent_span_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "submission.workflow.tasks.generic.processing"), " ");
  }
}
function ResourcePoliciesComponent_span_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "resource-policies.delete.btn"), " ");
  }
}
function ResourcePoliciesComponent_tr_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tr", 14)(1, "th")(2, "div", 15)(3, "input", 16, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("change", function ResourcePoliciesComponent_tr_27_Template_input_change_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r0.selectAllCheckbox($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "label", 17)(6, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](21, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](24, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](26, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](27, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](29, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](30, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](32, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](33, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](35, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const selectAllBtn_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](4);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("id", "selectAll_" + ctx_r0.resourceUUID);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("for", "selectAll_" + ctx_r0.resourceUUID);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](8, 12, selectAllBtn_r3.checked ? "resource-policies.table.headers.deselect-all" : "resource-policies.table.headers.select-all"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](11, 14, "resource-policies.table.headers.id"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](14, 16, "resource-policies.table.headers.name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](17, 18, "resource-policies.table.headers.policyType"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](20, 20, "resource-policies.table.headers.action"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](23, 22, "resource-policies.table.headers.eperson"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](26, 24, "resource-policies.table.headers.group"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](29, 26, "resource-policies.table.headers.date.start"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](32, 28, "resource-policies.table.headers.date.end"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](35, 30, "resource-policies.table.headers.edit"));
  }
}
function ResourcePoliciesComponent_tbody_29_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("toggleCheckbox", function ResourcePoliciesComponent_tbody_29_tr_1_Template_tr_toggleCheckbox_0_listener($event) {
      const entry_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r0.selectCheckbox(entry_r5, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const entry_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("entry", entry_r5);
  }
}
function ResourcePoliciesComponent_tbody_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, ResourcePoliciesComponent_tbody_29_tr_1_Template, 1, 1, "tr", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 1, ctx_r0.getResourcePolicies()));
  }
}
/**
 * Component that shows the policies for given resource
 */
class ResourcePoliciesComponent {
  /**
   * Initialize instance variables
   *
   * @param {ChangeDetectorRef} cdr
   * @param {DSONameService} dsoNameService
   * @param {EPersonDataService} ePersonService
   * @param {GroupDataService} groupService
   * @param {NotificationsService} notificationsService
   * @param {RequestService} requestService
   * @param {ResourcePolicyDataService} resourcePolicyService
   * @param {ActivatedRoute} route
   * @param {Router} router
   * @param {TranslateService} translate
   */
  constructor(cdr, dsoNameService, ePersonService, groupService, notificationsService, requestService, resourcePolicyService, route, router, translate) {
    this.cdr = cdr;
    this.dsoNameService = dsoNameService;
    this.ePersonService = ePersonService;
    this.groupService = groupService;
    this.notificationsService = notificationsService;
    this.requestService = requestService;
    this.resourcePolicyService = resourcePolicyService;
    this.route = route;
    this.router = router;
    this.translate = translate;
    /**
     * A boolean representing if a submission delete operation is pending
     * @type {BehaviorSubject<boolean>}
     */
    this.processingDelete$ = new rxjs__WEBPACK_IMPORTED_MODULE_12__.BehaviorSubject(false);
    /**
     * The list of policies for given resource
     * @type {BehaviorSubject<ResourcePolicyCheckboxEntry[]>}
     */
    this.resourcePoliciesEntries$ = new rxjs__WEBPACK_IMPORTED_MODULE_12__.BehaviorSubject([]);
    /**
     * Array to track all subscriptions and unsubscribe them onDestroy
     * @type {Array}
     */
    this.subs = [];
  }
  /**
   * Initialize the component, setting up the resource's policies
   */
  ngOnInit() {
    this.isActive = true;
    this.initResourcePolicyList();
  }
  /**
   * Check if there are any selected resource's policies to be deleted
   *
   * @return {Observable<boolean>}
   */
  canDelete() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.from)(this.resourcePoliciesEntries$.value).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.filter)(entry => entry.checked), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.reduce)((acc, value) => [...acc, value], []), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)(entries => (0,_empty_util__WEBPACK_IMPORTED_MODULE_7__.isNotEmpty)(entries)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.distinctUntilChanged)());
  }
  /**
   * Delete the selected resource's policies
   */
  deleteSelectedResourcePolicies() {
    this.processingDelete$.next(true);
    const policiesToDelete = this.resourcePoliciesEntries$.value.filter(entry => entry.checked);
    this.subs.push((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.from)(policiesToDelete).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.concatMap)(entry => this.resourcePolicyService.delete(entry.policy.id)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.scan)((acc, value) => [...acc, value], []), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.filter)(results => results.length === policiesToDelete.length), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.take)(1)).subscribe(results => {
      const failureResults = results.filter(result => !result);
      if ((0,_empty_util__WEBPACK_IMPORTED_MODULE_7__.isEmpty)(failureResults)) {
        this.notificationsService.success(null, this.translate.get('resource-policies.delete.success.content'));
      } else {
        this.notificationsService.error(null, this.translate.get('resource-policies.delete.failure.content'));
      }
      this.processingDelete$.next(false);
    }));
  }
  /**
   * Return all resource's policies
   *
   * @return an observable that emits all resource's policies
   */
  getResourcePolicies() {
    return this.resourcePoliciesEntries$.asObservable();
  }
  /**
   * Initialize the resource's policies list
   */
  initResourcePolicyList() {
    this.subs.push(this.resourcePolicyService.searchByResource(this.resourceUUID, null, false, true, (0,_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_9__.followLink)('eperson'), (0,_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_9__.followLink)('group')).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.filter)(() => this.isActive), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_5__.getAllSucceededRemoteData)()).subscribe(result => {
      const entries = result.payload.page.map(policy => ({
        id: policy.id,
        policy: policy,
        checked: false
      }));
      this.resourcePoliciesEntries$.next(entries);
      // TODO detectChanges still needed?
      this.cdr.detectChanges();
    }));
  }
  /**
   * Return a boolean representing if a delete operation is pending
   *
   * @return {Observable<boolean>}
   */
  isProcessingDelete() {
    return this.processingDelete$.asObservable();
  }
  /**
   * Redirect to resource policy creation page
   */
  redirectToResourcePolicyCreatePage() {
    this.router.navigate([`./create`], {
      relativeTo: this.route,
      queryParams: {
        policyTargetId: this.resourceUUID,
        targetType: this.resourceType
      }
    });
  }
  /**
   * Select/unselect all checkbox in the list
   */
  selectAllCheckbox(event) {
    const checked = event.target.checked;
    this.resourcePoliciesEntries$.value.forEach(entry => entry.checked = checked);
  }
  /**
   * Select/unselect checkbox
   */
  selectCheckbox(policyEntry, checked) {
    policyEntry.checked = checked;
  }
  /**
   * Unsubscribe from all subscriptions
   */
  ngOnDestroy() {
    this.isActive = false;
    this.resourcePoliciesEntries$ = null;
    this.subs.filter(subscription => (0,_empty_util__WEBPACK_IMPORTED_MODULE_7__.hasValue)(subscription)).forEach(subscription => subscription.unsubscribe());
  }
  static {
    this.ɵfac = function ResourcePoliciesComponent_Factory(t) {
      return new (t || ResourcePoliciesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_11__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_core_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_0__.DSONameService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_core_eperson_eperson_data_service__WEBPACK_IMPORTED_MODULE_2__.EPersonDataService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_core_eperson_group_data_service__WEBPACK_IMPORTED_MODULE_3__.GroupDataService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_8__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_core_data_request_service__WEBPACK_IMPORTED_MODULE_1__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_core_resource_policy_resource_policy_data_service__WEBPACK_IMPORTED_MODULE_4__.ResourcePolicyDataService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_21__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_21__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__.TranslateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
      type: ResourcePoliciesComponent,
      selectors: [["ds-resource-policies"]],
      inputs: {
        resourceUUID: "resourceUUID",
        resourceType: "resourceType",
        resourceName: "resourceName"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵStandaloneFeature"]],
      decls: 31,
      vars: 34,
      consts: [["selectAllBtn", ""], [1, "table-responsive"], [1, "table", "table-striped", "table-bordered", "table-hover"], ["colspan", "10"], [1, "d-flex", "justify-content-between", "align-items-center", "m-0"], [1, "text-info"], [4, "ngIf"], [1, "space-children-mr", "flex-shrink-0"], [1, "btn", "btn-danger", "p-1", 3, "click", "dsBtnDisabled", "title"], [1, "btn", "btn-success", "p-1", 3, "click", "dsBtnDisabled", "title"], ["aria-hidden", "true", 1, "fas", "fa-plus"], ["class", "text-center", 4, "ngIf"], ["aria-hidden", "true", 1, "fas", "fa-circle-notch", "fa-spin"], ["aria-hidden", "true", 1, "fas", "fa-trash-alt", "fa-fw"], [1, "text-center"], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", 1, "custom-control-input", 3, "change", "id"], [1, "custom-control-label", 3, "for"], [1, "sr-only"], ["ds-resource-policy-entry", "", 3, "entry", "toggleCheckbox", 4, "ngFor", "ngForOf"], ["ds-resource-policy-entry", "", 3, "toggleCheckbox", "entry"]],
      template: function ResourcePoliciesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 1)(1, "table", 2)(2, "thead")(3, "tr")(4, "th", 3)(5, "div", 4)(6, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](8, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](11, ResourcePoliciesComponent_ng_container_11_Template, 2, 1, "ng-container", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "div", 7)(13, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](14, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](15, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](16, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ResourcePoliciesComponent_Template_button_click_13_listener() {
            return ctx.deleteSelectedResourcePolicies();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](17, ResourcePoliciesComponent_span_17_Template, 4, 3, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](18, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](19, ResourcePoliciesComponent_span_19_Template, 4, 3, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](20, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](21, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](22, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](23, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ResourcePoliciesComponent_Template_button_click_21_listener() {
            return ctx.redirectToResourcePolicyCreatePage();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](24, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](25);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](26, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](27, ResourcePoliciesComponent_tr_27_Template, 36, 32, "tr", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](28, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](29, ResourcePoliciesComponent_tbody_29_Template, 3, 3, "tbody", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](30, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          let tmp_10_0;
          let tmp_11_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](8, 12, "resource-policies.table.headers.title.for." + ctx.resourceType), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx.resourceName, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.resourceType !== "item");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("dsBtnDisabled", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](14, 14, ctx.canDelete()) !== true || _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](15, 16, ctx.isProcessingDelete()))("title", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](16, 18, "resource-policies.delete.btn.title"));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](18, 20, ctx.isProcessingDelete()));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](20, 22, ctx.isProcessingDelete()) !== true);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("dsBtnDisabled", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](22, 24, ctx.isProcessingDelete()))("title", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](23, 26, "resource-policies.add.for." + ctx.resourceType));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](26, 28, "resource-policies.add.button"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ((tmp_10_0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](28, 30, ctx.getResourcePolicies())) == null ? null : tmp_10_0.length) > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ((tmp_11_0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](30, 32, ctx.getResourcePolicies())) == null ? null : tmp_11_0.length) > 0);
        }
      },
      dependencies: [_entry_resource_policy_entry_component__WEBPACK_IMPORTED_MODULE_10__.ResourcePolicyEntryComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_23__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_23__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_23__.NgForOf, _btn_disabled_directive__WEBPACK_IMPORTED_MODULE_6__.BtnDisabledDirective],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\ntd[_ngcontent-%COMP%]   .btn-link[_ngcontent-%COMP%]:focus {\n  box-shadow: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlLXBvbGljaWVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBO0FBQ0E7RUFDRSwyQkFBQTtBQUNGIiwiZmlsZSI6InJlc291cmNlLXBvbGljaWVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi9cbnRkIC5idG4tbGluazpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL3Jlc291cmNlLXBvbGljaWVzL3Jlc291cmNlLXBvbGljaWVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBO0FBQ0E7RUFDRSwyQkFBQTtBQUNGO0FBQ0Esb3JCQUFvckIiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqL1xudGQgLmJ0bi1saW5rOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 93120:
/*!************************************************!*\
  !*** ./src/app/shared/utils/has-value.pipe.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HasValuePipe: () => (/* binding */ HasValuePipe)
/* harmony export */ });
/* harmony import */ var _empty_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../empty.util */ 82777);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 90310);


/**
 * Returns true if the passed value is not null or undefined.
 */
class HasValuePipe {
  transform(value) {
    return (0,_empty_util__WEBPACK_IMPORTED_MODULE_0__.hasValue)(value);
  }
  static {
    this.ɵfac = function HasValuePipe_Factory(t) {
      return new (t || HasValuePipe)();
    };
  }
  static {
    this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "dsHasValue",
      type: HasValuePipe,
      pure: true,
      standalone: true
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=default-src_app_shared_resource-policies_create_resource-policy-create_component_ts-src_app_s-cad6cd.js.map