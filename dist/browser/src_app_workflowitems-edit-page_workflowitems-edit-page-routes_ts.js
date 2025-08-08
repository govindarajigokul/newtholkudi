(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_app_workflowitems-edit-page_workflowitems-edit-page-routes_ts"],{

/***/ 1871:
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/workflowitems-edit-page/advanced-workflow-action/advanced-workflow-action-page/advanced-workflow-action-page.component.ts ***!
  \*******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdvancedWorkflowActionPageComponent: () => (/* binding */ AdvancedWorkflowActionPageComponent)
/* harmony export */ });
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var _advanced_workflow_actions_loader_advanced_workflow_actions_loader_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../advanced-workflow-actions-loader/advanced-workflow-actions-loader.component */ 59233);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 14354);






/**
 * The Advanced Workflow page containing the correct {@link AdvancedWorkflowActionComponent}
 * based on the route parameters.
 */
class AdvancedWorkflowActionPageComponent {
  constructor(route) {
    this.route = route;
  }
  ngOnInit() {
    this.type = this.route.snapshot.queryParams.workflow;
  }
  static {
    this.ɵfac = function AdvancedWorkflowActionPageComponent_Factory(t) {
      return new (t || AdvancedWorkflowActionPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AdvancedWorkflowActionPageComponent,
      selectors: [["ds-advanced-workflow-action-page"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 5,
      vars: 4,
      consts: [[1, "container"], [3, "type"]],
      template: function AdvancedWorkflowActionPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "ds-advanced-workflow-actions-loader", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 2, "workflow-item." + ctx.type + ".header"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.type);
        }
      },
      dependencies: [_advanced_workflow_actions_loader_advanced_workflow_actions_loader_component__WEBPACK_IMPORTED_MODULE_0__.AdvancedWorkflowActionsLoaderComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkdmFuY2VkLXdvcmtmbG93LWFjdGlvbi1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBIiwiZmlsZSI6ImFkdmFuY2VkLXdvcmtmbG93LWFjdGlvbi1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi8iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvd29ya2Zsb3dpdGVtcy1lZGl0LXBhZ2UvYWR2YW5jZWQtd29ya2Zsb3ctYWN0aW9uL2FkdmFuY2VkLXdvcmtmbG93LWFjdGlvbi1wYWdlL2FkdmFuY2VkLXdvcmtmbG93LWFjdGlvbi1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBO0FBQ0EsNG1CQUE0bUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqLyJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 59233:
/*!*************************************************************************************************************************************************!*\
  !*** ./src/app/workflowitems-edit-page/advanced-workflow-action/advanced-workflow-actions-loader/advanced-workflow-actions-loader.component.ts ***!
  \*************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdvancedWorkflowActionsLoaderComponent: () => (/* binding */ AdvancedWorkflowActionsLoaderComponent)
/* harmony export */ });
/* harmony import */ var src_app_shared_abstract_component_loader_abstract_component_loader_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/abstract-component-loader/abstract-component-loader.component */ 22924);
/* harmony import */ var _app_routing_paths__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app-routing-paths */ 69799);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/empty.util */ 82777);
/* harmony import */ var _shared_mydspace_actions_claimed_task_switcher_claimed_task_actions_decorator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/mydspace-actions/claimed-task/switcher/claimed-task-actions-decorator */ 47696);
/* harmony import */ var _shared_theme_support_theme_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/theme-support/theme.service */ 19178);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 14354);










function AdvancedWorkflowActionsLoaderComponent_ng_template_0_Template(rf, ctx) {}
/**
 * Component for loading a {@link AdvancedWorkflowActionComponent} depending on the "{@link type}" input
 */
class AdvancedWorkflowActionsLoaderComponent extends src_app_shared_abstract_component_loader_abstract_component_loader_component__WEBPACK_IMPORTED_MODULE_0__.AbstractComponentLoaderComponent {
  constructor(themeService, router) {
    super(themeService);
    this.themeService = themeService;
    this.router = router;
    this.inputNames = [...this.inputNames, 'type'];
  }
  ngOnInit() {
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_2__.hasValue)(this.getComponent())) {
      super.ngOnInit();
    } else {
      void this.router.navigate([_app_routing_paths__WEBPACK_IMPORTED_MODULE_1__.PAGE_NOT_FOUND_PATH]);
    }
  }
  getComponent() {
    return (0,_shared_mydspace_actions_claimed_task_switcher_claimed_task_actions_decorator__WEBPACK_IMPORTED_MODULE_3__.getAdvancedComponentByWorkflowTaskOption)(this.type);
  }
  static {
    this.ɵfac = function AdvancedWorkflowActionsLoaderComponent_Factory(t) {
      return new (t || AdvancedWorkflowActionsLoaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_theme_support_theme_service__WEBPACK_IMPORTED_MODULE_4__.ThemeService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: AdvancedWorkflowActionsLoaderComponent,
      selectors: [["ds-advanced-workflow-actions-loader"]],
      inputs: {
        type: "type"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 0,
      consts: [["DynamicComponentLoader", ""], ["dsDynamicComponentLoader", ""]],
      template: function AdvancedWorkflowActionsLoaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, AdvancedWorkflowActionsLoaderComponent_ng_template_0_Template, 0, 0, "ng-template", 1, 0, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        }
      },
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 19337:
/*!***********************************************************************************!*\
  !*** ./src/app/workflowitems-edit-page/item-from-workflow-breadcrumb.resolver.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ItemFromWorkflowBreadcrumbResolver: () => (/* binding */ ItemFromWorkflowBreadcrumbResolver)
/* harmony export */ });
/* harmony import */ var _core_submission_resolver_submission_parent_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/submission/resolver/submission-parent-breadcrumb.resolver */ 26373);
/* harmony import */ var _core_submission_submission_parent_breadcrumb_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/submission/submission-parent-breadcrumb.service */ 44855);
/* harmony import */ var _core_submission_workflowitem_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/submission/workflowitem-data.service */ 52837);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 90310);






/**
 * This class represents a resolver that retrieves the breadcrumbs of the workflow item
 */
class ItemFromWorkflowBreadcrumbResolver extends _core_submission_resolver_submission_parent_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_0__.SubmissionParentBreadcrumbResolver {
  constructor(dataService, breadcrumbService) {
    super(dataService, breadcrumbService);
    this.dataService = dataService;
    this.breadcrumbService = breadcrumbService;
  }
  static {
    this.ɵfac = function ItemFromWorkflowBreadcrumbResolver_Factory(t) {
      return new (t || ItemFromWorkflowBreadcrumbResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_core_submission_workflowitem_data_service__WEBPACK_IMPORTED_MODULE_2__.WorkflowItemDataService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_core_submission_submission_parent_breadcrumb_service__WEBPACK_IMPORTED_MODULE_1__.SubmissionParentBreadcrumbsService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: ItemFromWorkflowBreadcrumbResolver,
      factory: ItemFromWorkflowBreadcrumbResolver.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 70915:
/*!************************************************************************!*\
  !*** ./src/app/workflowitems-edit-page/item-from-workflow.resolver.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   itemFromWorkflowResolver: () => (/* binding */ itemFromWorkflowResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _core_submission_resolver_submission_object_resolver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/submission/resolver/submission-object.resolver */ 86098);
/* harmony import */ var _core_submission_workflowitem_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/submission/workflowitem-data.service */ 52837);



const itemFromWorkflowResolver = (route, state, workflowItemService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_core_submission_workflowitem_data_service__WEBPACK_IMPORTED_MODULE_1__.WorkflowItemDataService)) => {
  return (0,_core_submission_resolver_submission_object_resolver__WEBPACK_IMPORTED_MODULE_0__.SubmissionObjectResolver)(route, state, workflowItemService);
};

/***/ }),

/***/ 62115:
/*!*******************************************************************************************************!*\
  !*** ./src/app/workflowitems-edit-page/workflow-item-delete/themed-workflow-item-delete.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemedWorkflowItemDeleteComponent: () => (/* binding */ ThemedWorkflowItemDeleteComponent)
/* harmony export */ });
/* harmony import */ var _shared_theme_support_themed_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/theme-support/themed.component */ 8886);
/* harmony import */ var _workflow_item_delete_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./workflow-item-delete.component */ 14245);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);



const _c0 = ["*"];
function ThemedWorkflowItemDeleteComponent_ng_template_0_Template(rf, ctx) {}
/**
 * Themed wrapper for WorkflowItemDeleteComponent
 */
class ThemedWorkflowItemDeleteComponent extends _shared_theme_support_themed_component__WEBPACK_IMPORTED_MODULE_0__.ThemedComponent {
  getComponentName() {
    return 'WorkflowItemDeleteComponent';
  }
  importThemedComponent(themeName) {
    return __webpack_require__(1479)(`./${themeName}/app/workflowitems-edit-page/workflow-item-delete/workflow-item-delete.component`);
  }
  importUnthemedComponent() {
    return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./workflow-item-delete.component */ 14245));
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵThemedWorkflowItemDeleteComponent_BaseFactory;
      return function ThemedWorkflowItemDeleteComponent_Factory(t) {
        return (ɵThemedWorkflowItemDeleteComponent_BaseFactory || (ɵThemedWorkflowItemDeleteComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](ThemedWorkflowItemDeleteComponent)))(t || ThemedWorkflowItemDeleteComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ThemedWorkflowItemDeleteComponent,
      selectors: [["ds-workflow-item-delete"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      ngContentSelectors: _c0,
      decls: 5,
      vars: 0,
      consts: [["vcr", ""], ["content", ""]],
      template: function ThemedWorkflowItemDeleteComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ThemedWorkflowItemDeleteComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", null, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      },
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 14245:
/*!************************************************************************************************!*\
  !*** ./src/app/workflowitems-edit-page/workflow-item-delete/workflow-item-delete.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WorkflowItemDeleteComponent: () => (/* binding */ WorkflowItemDeleteComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var _core_data_request_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/data/request.service */ 32473);
/* harmony import */ var _core_services_route_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/route.service */ 27297);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/shared/operators */ 55757);
/* harmony import */ var _core_submission_workflowitem_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/submission/workflowitem-data.service */ 52837);
/* harmony import */ var _item_page_edit_item_page_modify_item_overview_modify_item_overview_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../item-page/edit-item-page/modify-item-overview/modify-item-overview.component */ 13933);
/* harmony import */ var _shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/notifications/notifications.service */ 69472);
/* harmony import */ var _shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/utils/var.directive */ 18226);
/* harmony import */ var _workflow_item_action_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../workflow-item-action-page.component */ 43782);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 14354);




















function WorkflowItemDeleteComponent_div_0_ds_modify_item_overview_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "ds-modify-item-overview", 5);
  }
  if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().ngVar;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("item", item_r2);
  }
}
function WorkflowItemDeleteComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 1)(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, WorkflowItemDeleteComponent_div_0_ds_modify_item_overview_4_Template, 1, 1, "ds-modify-item-overview", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function WorkflowItemDeleteComponent_div_0_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.previousPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function WorkflowItemDeleteComponent_div_0_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.performAction());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r2 = ctx.ngVar;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 4, "workflow-item." + ctx_r2.type + ".header"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", item_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](7, 6, "workflow-item." + ctx_r2.type + ".button.cancel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](10, 8, "workflow-item." + ctx_r2.type + ".button.confirm"));
  }
}
/**
 * Component representing a page to delete a workflow item
 */
class WorkflowItemDeleteComponent extends _workflow_item_action_page_component__WEBPACK_IMPORTED_MODULE_7__.WorkflowItemActionPageDirective {
  constructor(route, workflowItemService, router, routeService, notificationsService, translationService, requestService, location) {
    super(route, workflowItemService, router, routeService, notificationsService, translationService, requestService, location);
    this.route = route;
    this.workflowItemService = workflowItemService;
    this.router = router;
    this.routeService = routeService;
    this.notificationsService = notificationsService;
    this.translationService = translationService;
    this.requestService = requestService;
    this.location = location;
  }
  /**
   * Returns the type of page
   */
  getType() {
    return 'delete';
  }
  /**
   * Performs the action of this workflow item action page
   * @param id The id of the WorkflowItem
   */
  sendRequest(id) {
    return this.workflowItemService.delete(id).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_2__.getFirstCompletedRemoteData)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(response => response.hasSucceeded));
  }
  static {
    this.ɵfac = function WorkflowItemDeleteComponent_Factory(t) {
      return new (t || WorkflowItemDeleteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_submission_workflowitem_data_service__WEBPACK_IMPORTED_MODULE_3__.WorkflowItemDataService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_services_route_service__WEBPACK_IMPORTED_MODULE_1__.RouteService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_5__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_data_request_service__WEBPACK_IMPORTED_MODULE_0__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_12__.Location));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
      type: WorkflowItemDeleteComponent,
      selectors: [["ds-base-workflow-item-delete"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 3,
      consts: [["class", "container", 4, "ngVar"], [1, "container"], [3, "item", 4, "ngIf"], [1, "btn", "btn-default", 3, "click"], [1, "btn", "btn-danger", 3, "click"], [3, "item"]],
      template: function WorkflowItemDeleteComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, WorkflowItemDeleteComponent_div_0_Template, 11, 10, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "async");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngVar", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 1, ctx.item$));
        }
      },
      dependencies: [_shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_6__.VarDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.AsyncPipe, _item_page_edit_item_page_modify_item_overview_modify_item_overview_component__WEBPACK_IMPORTED_MODULE_4__.ModifyItemOverviewComponent],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 56976:
/*!************************************************************************!*\
  !*** ./src/app/workflowitems-edit-page/workflow-item-page.resolver.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   workflowItemPageResolver: () => (/* binding */ workflowItemPageResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/shared/operators */ 55757);
/* harmony import */ var _core_submission_workflowitem_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/submission/workflowitem-data.service */ 52837);
/* harmony import */ var _shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/utils/follow-link-config.model */ 67600);




const workflowItemPageResolver = (route, state, workflowItemService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_core_submission_workflowitem_data_service__WEBPACK_IMPORTED_MODULE_1__.WorkflowItemDataService)) => {
  return workflowItemService.findById(route.params.id, true, false, (0,_shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_2__.followLink)('item')).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_0__.getFirstCompletedRemoteData)());
};

/***/ }),

/***/ 77805:
/*!*************************************************************************************************************!*\
  !*** ./src/app/workflowitems-edit-page/workflow-item-send-back/themed-workflow-item-send-back.component.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemedWorkflowItemSendBackComponent: () => (/* binding */ ThemedWorkflowItemSendBackComponent)
/* harmony export */ });
/* harmony import */ var _shared_theme_support_themed_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/theme-support/themed.component */ 8886);
/* harmony import */ var _workflow_item_send_back_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./workflow-item-send-back.component */ 63569);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);



const _c0 = ["*"];
function ThemedWorkflowItemSendBackComponent_ng_template_0_Template(rf, ctx) {}
/**
 * Themed wrapper for WorkflowItemActionPageComponent
 */
class ThemedWorkflowItemSendBackComponent extends _shared_theme_support_themed_component__WEBPACK_IMPORTED_MODULE_0__.ThemedComponent {
  getComponentName() {
    return 'WorkflowItemSendBackComponent';
  }
  importThemedComponent(themeName) {
    return __webpack_require__(49991)(`./${themeName}/app/workflowitems-edit-page/workflow-item-send-back/workflow-item-send-back.component`);
  }
  importUnthemedComponent() {
    return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./workflow-item-send-back.component */ 63569));
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵThemedWorkflowItemSendBackComponent_BaseFactory;
      return function ThemedWorkflowItemSendBackComponent_Factory(t) {
        return (ɵThemedWorkflowItemSendBackComponent_BaseFactory || (ɵThemedWorkflowItemSendBackComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](ThemedWorkflowItemSendBackComponent)))(t || ThemedWorkflowItemSendBackComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ThemedWorkflowItemSendBackComponent,
      selectors: [["ds-workflow-item-send-back"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      ngContentSelectors: _c0,
      decls: 5,
      vars: 0,
      consts: [["vcr", ""], ["content", ""]],
      template: function ThemedWorkflowItemSendBackComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ThemedWorkflowItemSendBackComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", null, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      },
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 63569:
/*!******************************************************************************************************!*\
  !*** ./src/app/workflowitems-edit-page/workflow-item-send-back/workflow-item-send-back.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WorkflowItemSendBackComponent: () => (/* binding */ WorkflowItemSendBackComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var _core_data_request_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/data/request.service */ 32473);
/* harmony import */ var _core_services_route_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/route.service */ 27297);
/* harmony import */ var _core_submission_workflowitem_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/submission/workflowitem-data.service */ 52837);
/* harmony import */ var _item_page_edit_item_page_modify_item_overview_modify_item_overview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../item-page/edit-item-page/modify-item-overview/modify-item-overview.component */ 13933);
/* harmony import */ var _shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/notifications/notifications.service */ 69472);
/* harmony import */ var _shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/utils/var.directive */ 18226);
/* harmony import */ var _workflow_item_action_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../workflow-item-action-page.component */ 43782);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 14354);


















function WorkflowItemSendBackComponent_div_0_ds_modify_item_overview_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "ds-modify-item-overview", 5);
  }
  if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().ngVar;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("item", item_r2);
  }
}
function WorkflowItemSendBackComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 1)(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, WorkflowItemSendBackComponent_div_0_ds_modify_item_overview_4_Template, 1, 1, "ds-modify-item-overview", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function WorkflowItemSendBackComponent_div_0_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.previousPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function WorkflowItemSendBackComponent_div_0_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.performAction());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r2 = ctx.ngVar;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 4, "workflow-item." + ctx_r2.type + ".header"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", item_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](7, 6, "workflow-item." + ctx_r2.type + ".button.cancel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](10, 8, "workflow-item." + ctx_r2.type + ".button.confirm"));
  }
}
/**
 * Component representing a page to send back a workflow item to the submitter
 */
class WorkflowItemSendBackComponent extends _workflow_item_action_page_component__WEBPACK_IMPORTED_MODULE_6__.WorkflowItemActionPageDirective {
  constructor(route, workflowItemService, router, routeService, notificationsService, translationService, requestService, location) {
    super(route, workflowItemService, router, routeService, notificationsService, translationService, requestService, location);
    this.route = route;
    this.workflowItemService = workflowItemService;
    this.router = router;
    this.routeService = routeService;
    this.notificationsService = notificationsService;
    this.translationService = translationService;
    this.requestService = requestService;
    this.location = location;
  }
  /**
   * Returns the type of page
   */
  getType() {
    return 'send-back';
  }
  /**
   * Performs the action of this workflow item action page
   * @param id The id of the WorkflowItem
   */
  sendRequest(id) {
    return this.workflowItemService.sendBack(id);
  }
  static {
    this.ɵfac = function WorkflowItemSendBackComponent_Factory(t) {
      return new (t || WorkflowItemSendBackComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_submission_workflowitem_data_service__WEBPACK_IMPORTED_MODULE_2__.WorkflowItemDataService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_services_route_service__WEBPACK_IMPORTED_MODULE_1__.RouteService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_4__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_data_request_service__WEBPACK_IMPORTED_MODULE_0__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__.Location));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: WorkflowItemSendBackComponent,
      selectors: [["ds-base-workflow-item-send-back"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 3,
      consts: [["class", "container", 4, "ngVar"], [1, "container"], [3, "item", 4, "ngIf"], [1, "btn", "btn-default", 3, "click"], [1, "btn", "btn-danger", 3, "click"], [3, "item"]],
      template: function WorkflowItemSendBackComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, WorkflowItemSendBackComponent_div_0_Template, 11, 10, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "async");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngVar", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 1, ctx.item$));
        }
      },
      dependencies: [_shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_5__.VarDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe, _item_page_edit_item_page_modify_item_overview_modify_item_overview_component__WEBPACK_IMPORTED_MODULE_3__.ModifyItemOverviewComponent],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 3424:
/*!***************************************************************************!*\
  !*** ./src/app/workflowitems-edit-page/workflowitems-edit-page-routes.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ROUTES: () => (/* binding */ ROUTES)
/* harmony export */ });
/* harmony import */ var _core_auth_authenticated_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/auth/authenticated.guard */ 49347);
/* harmony import */ var _core_breadcrumbs_i18n_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/breadcrumbs/i18n-breadcrumb.resolver */ 72059);
/* harmony import */ var _item_page_full_themed_full_item_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../item-page/full/themed-full-item-page.component */ 10870);
/* harmony import */ var _submission_edit_themed_submission_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../submission/edit/themed-submission-edit.component */ 83558);
/* harmony import */ var _advanced_workflow_action_advanced_workflow_action_page_advanced_workflow_action_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./advanced-workflow-action/advanced-workflow-action-page/advanced-workflow-action-page.component */ 1871);
/* harmony import */ var _item_from_workflow_resolver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./item-from-workflow.resolver */ 70915);
/* harmony import */ var _item_from_workflow_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./item-from-workflow-breadcrumb.resolver */ 19337);
/* harmony import */ var _workflow_item_delete_themed_workflow_item_delete_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./workflow-item-delete/themed-workflow-item-delete.component */ 62115);
/* harmony import */ var _workflow_item_page_resolver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./workflow-item-page.resolver */ 56976);
/* harmony import */ var _workflow_item_send_back_themed_workflow_item_send_back_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./workflow-item-send-back/themed-workflow-item-send-back.component */ 77805);
/* harmony import */ var _workflowitems_edit_page_routing_paths__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./workflowitems-edit-page-routing-paths */ 79951);











const ROUTES = [{
  path: ':id',
  resolve: {
    breadcrumb: _item_from_workflow_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_6__.ItemFromWorkflowBreadcrumbResolver,
    wfi: _workflow_item_page_resolver__WEBPACK_IMPORTED_MODULE_8__.workflowItemPageResolver
  },
  children: [{
    canActivate: [_core_auth_authenticated_guard__WEBPACK_IMPORTED_MODULE_0__.authenticatedGuard],
    path: _workflowitems_edit_page_routing_paths__WEBPACK_IMPORTED_MODULE_10__.WORKFLOW_ITEM_EDIT_PATH,
    component: _submission_edit_themed_submission_edit_component__WEBPACK_IMPORTED_MODULE_3__.ThemedSubmissionEditComponent,
    resolve: {
      breadcrumb: _core_breadcrumbs_i18n_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_1__.i18nBreadcrumbResolver
    },
    data: {
      title: 'workflow-item.edit.title',
      breadcrumbKey: 'workflow-item.edit',
      collectionModifiable: false
    }
  }, {
    canActivate: [_core_auth_authenticated_guard__WEBPACK_IMPORTED_MODULE_0__.authenticatedGuard],
    path: _workflowitems_edit_page_routing_paths__WEBPACK_IMPORTED_MODULE_10__.WORKFLOW_ITEM_VIEW_PATH,
    component: _item_page_full_themed_full_item_page_component__WEBPACK_IMPORTED_MODULE_2__.ThemedFullItemPageComponent,
    resolve: {
      dso: _item_from_workflow_resolver__WEBPACK_IMPORTED_MODULE_5__.itemFromWorkflowResolver,
      breadcrumb: _core_breadcrumbs_i18n_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_1__.i18nBreadcrumbResolver
    },
    data: {
      title: 'workflow-item.view.title',
      breadcrumbKey: 'workflow-item.view'
    }
  }, {
    canActivate: [_core_auth_authenticated_guard__WEBPACK_IMPORTED_MODULE_0__.authenticatedGuard],
    path: _workflowitems_edit_page_routing_paths__WEBPACK_IMPORTED_MODULE_10__.WORKFLOW_ITEM_DELETE_PATH,
    component: _workflow_item_delete_themed_workflow_item_delete_component__WEBPACK_IMPORTED_MODULE_7__.ThemedWorkflowItemDeleteComponent,
    resolve: {
      breadcrumb: _core_breadcrumbs_i18n_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_1__.i18nBreadcrumbResolver
    },
    data: {
      title: 'workflow-item.delete.title',
      breadcrumbKey: 'workflow-item.edit'
    }
  }, {
    canActivate: [_core_auth_authenticated_guard__WEBPACK_IMPORTED_MODULE_0__.authenticatedGuard],
    path: _workflowitems_edit_page_routing_paths__WEBPACK_IMPORTED_MODULE_10__.WORKFLOW_ITEM_SEND_BACK_PATH,
    component: _workflow_item_send_back_themed_workflow_item_send_back_component__WEBPACK_IMPORTED_MODULE_9__.ThemedWorkflowItemSendBackComponent,
    resolve: {
      breadcrumb: _core_breadcrumbs_i18n_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_1__.i18nBreadcrumbResolver
    },
    data: {
      title: 'workflow-item.send-back.title',
      breadcrumbKey: 'workflow-item.edit'
    }
  }, {
    canActivate: [_core_auth_authenticated_guard__WEBPACK_IMPORTED_MODULE_0__.authenticatedGuard],
    path: _workflowitems_edit_page_routing_paths__WEBPACK_IMPORTED_MODULE_10__.ADVANCED_WORKFLOW_PATH,
    component: _advanced_workflow_action_advanced_workflow_action_page_advanced_workflow_action_page_component__WEBPACK_IMPORTED_MODULE_4__.AdvancedWorkflowActionPageComponent,
    resolve: {
      breadcrumb: _core_breadcrumbs_i18n_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_1__.i18nBreadcrumbResolver
    },
    data: {
      title: 'workflow-item.advanced.title',
      breadcrumbKey: 'workflow-item.edit'
    }
  }]
}];

/***/ }),

/***/ 1479:
/*!***********************************************************************************************************************************************!*\
  !*** ./src/themes/ lazy ^\.\/.*\/app\/workflowitems\-edit\-page\/workflow\-item\-delete\/workflow\-item\-delete\.component$ namespace object ***!
  \***********************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./custom/app/workflowitems-edit-page/workflow-item-delete/workflow-item-delete.component": [
		42438,
		"src_themes_custom_app_workflowitems-edit-page_workflow-item-delete_workflow-item-delete_compo-e22128"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 1479;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 49991:
/*!*******************************************************************************************************************************************************!*\
  !*** ./src/themes/ lazy ^\.\/.*\/app\/workflowitems\-edit\-page\/workflow\-item\-send\-back\/workflow\-item\-send\-back\.component$ namespace object ***!
  \*******************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./custom/app/workflowitems-edit-page/workflow-item-send-back/workflow-item-send-back.component": [
		78778,
		"src_themes_custom_app_workflowitems-edit-page_workflow-item-send-back_workflow-item-send-back-25d77c"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 49991;
module.exports = webpackAsyncContext;

/***/ })

}]);
//# sourceMappingURL=src_app_workflowitems-edit-page_workflowitems-edit-page-routes_ts.js.map