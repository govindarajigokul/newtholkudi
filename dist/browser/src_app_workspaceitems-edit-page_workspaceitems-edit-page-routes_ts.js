(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_app_workspaceitems-edit-page_workspaceitems-edit-page-routes_ts"],{

/***/ 8393:
/*!*************************************************************************************!*\
  !*** ./src/app/workspaceitems-edit-page/item-from-workspace-breadcrumb.resolver.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ItemFromWorkspaceBreadcrumbResolver: () => (/* binding */ ItemFromWorkspaceBreadcrumbResolver)
/* harmony export */ });
/* harmony import */ var _core_submission_resolver_submission_parent_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/submission/resolver/submission-parent-breadcrumb.resolver */ 26373);
/* harmony import */ var _core_submission_submission_parent_breadcrumb_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/submission/submission-parent-breadcrumb.service */ 44855);
/* harmony import */ var _core_submission_workspaceitem_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/submission/workspaceitem-data.service */ 24261);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 90310);






/**
 * This class represents a resolver that retrieves the breadcrumbs of the workspace item
 */
class ItemFromWorkspaceBreadcrumbResolver extends _core_submission_resolver_submission_parent_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_0__.SubmissionParentBreadcrumbResolver {
  constructor(dataService, breadcrumbService) {
    super(dataService, breadcrumbService);
    this.dataService = dataService;
    this.breadcrumbService = breadcrumbService;
  }
  static {
    this.ɵfac = function ItemFromWorkspaceBreadcrumbResolver_Factory(t) {
      return new (t || ItemFromWorkspaceBreadcrumbResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_core_submission_workspaceitem_data_service__WEBPACK_IMPORTED_MODULE_2__.WorkspaceitemDataService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_core_submission_submission_parent_breadcrumb_service__WEBPACK_IMPORTED_MODULE_1__.SubmissionParentBreadcrumbsService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: ItemFromWorkspaceBreadcrumbResolver,
      factory: ItemFromWorkspaceBreadcrumbResolver.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 74435:
/*!**************************************************************************!*\
  !*** ./src/app/workspaceitems-edit-page/item-from-workspace.resolver.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   itemFromWorkspaceResolver: () => (/* binding */ itemFromWorkspaceResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _core_submission_resolver_submission_object_resolver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/submission/resolver/submission-object.resolver */ 86098);
/* harmony import */ var _core_submission_workspaceitem_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/submission/workspaceitem-data.service */ 24261);



/**
 * This method represents a resolver that requests a specific item before the route is activated
 */
const itemFromWorkspaceResolver = (route, state, workspaceItemService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_core_submission_workspaceitem_data_service__WEBPACK_IMPORTED_MODULE_1__.WorkspaceitemDataService)) => {
  return (0,_core_submission_resolver_submission_object_resolver__WEBPACK_IMPORTED_MODULE_0__.SubmissionObjectResolver)(route, state, workspaceItemService);
};

/***/ }),

/***/ 27670:
/*!**************************************************************************!*\
  !*** ./src/app/workspaceitems-edit-page/workspace-item-page.resolver.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   workspaceItemPageResolver: () => (/* binding */ workspaceItemPageResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/shared/operators */ 55757);
/* harmony import */ var _core_submission_workspaceitem_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/submission/workspaceitem-data.service */ 24261);
/* harmony import */ var _shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/utils/follow-link-config.model */ 67600);




/**
 * Method for resolving a workflow item based on the parameters in the current route
 * @param {ActivatedRouteSnapshot} route The current ActivatedRouteSnapshot
 * @param {RouterStateSnapshot} state The current RouterStateSnapshot
 * @param {WorkspaceitemDataService} workspaceItemService
 * @returns Observable<<RemoteData<Item>> Emits the found workflow item based on the parameters in the current route,
 * or an error if something went wrong
 */
const workspaceItemPageResolver = (route, state, workspaceItemService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_core_submission_workspaceitem_data_service__WEBPACK_IMPORTED_MODULE_1__.WorkspaceitemDataService)) => {
  return workspaceItemService.findById(route.params.id, true, false, (0,_shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_2__.followLink)('item')).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_0__.getFirstCompletedRemoteData)());
};

/***/ }),

/***/ 17513:
/*!********************************************************************************************************************!*\
  !*** ./src/app/workspaceitems-edit-page/workspaceitems-delete-page/themed-workspaceitems-delete-page.component.ts ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemedWorkspaceItemsDeletePageComponent: () => (/* binding */ ThemedWorkspaceItemsDeletePageComponent)
/* harmony export */ });
/* harmony import */ var _shared_theme_support_themed_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/theme-support/themed.component */ 8886);
/* harmony import */ var _workspaceitems_delete_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./workspaceitems-delete-page.component */ 9015);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);



const _c0 = ["*"];
function ThemedWorkspaceItemsDeletePageComponent_ng_template_0_Template(rf, ctx) {}
/**
 * Themed wrapper for {@link WorkspaceItemsDeletePageComponent}
 */
class ThemedWorkspaceItemsDeletePageComponent extends _shared_theme_support_themed_component__WEBPACK_IMPORTED_MODULE_0__.ThemedComponent {
  getComponentName() {
    return 'WorkspaceItemsDeletePageComponent';
  }
  importThemedComponent(themeName) {
    return __webpack_require__(72447)(`./${themeName}/app/workspaceitems-edit-page/workspaceitems-delete-page/workspaceitems-delete-page.component`);
  }
  importUnthemedComponent() {
    return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./workspaceitems-delete-page.component */ 9015));
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵThemedWorkspaceItemsDeletePageComponent_BaseFactory;
      return function ThemedWorkspaceItemsDeletePageComponent_Factory(t) {
        return (ɵThemedWorkspaceItemsDeletePageComponent_BaseFactory || (ɵThemedWorkspaceItemsDeletePageComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](ThemedWorkspaceItemsDeletePageComponent)))(t || ThemedWorkspaceItemsDeletePageComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ThemedWorkspaceItemsDeletePageComponent,
      selectors: [["ds-workspace-items-delete"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      ngContentSelectors: _c0,
      decls: 5,
      vars: 0,
      consts: [["vcr", ""], ["content", ""]],
      template: function ThemedWorkspaceItemsDeletePageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ThemedWorkspaceItemsDeletePageComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
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

/***/ 9015:
/*!*************************************************************************************************************!*\
  !*** ./src/app/workspaceitems-edit-page/workspaceitems-delete-page/workspaceitems-delete-page.component.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WorkspaceItemsDeletePageComponent: () => (/* binding */ WorkspaceItemsDeletePageComponent)
/* harmony export */ });
/* harmony import */ var D_phasetwo_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 70650);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 6663);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 78374);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 84975);
/* harmony import */ var _core_services_route_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/route.service */ 27297);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/shared/operators */ 55757);
/* harmony import */ var _core_submission_workspaceitem_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/submission/workspaceitem-data.service */ 24261);
/* harmony import */ var _item_page_edit_item_page_modify_item_overview_modify_item_overview_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../item-page/edit-item-page/modify-item-overview/modify-item-overview.component */ 13933);
/* harmony import */ var _shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/notifications/notifications.service */ 69472);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 49966);



















function WorkspaceItemsDeletePageComponent_ds_modify_item_overview_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "ds-modify-item-overview", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "async");
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("item", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 1, ctx_r1.dso$));
  }
}
function WorkspaceItemsDeletePageComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 7)(1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function WorkspaceItemsDeletePageComponent_ng_template_12_Template_button_click_4_listener() {
      const d_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4).dismiss;
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](d_r5("cancel"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 11)(8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 12)(12, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function WorkspaceItemsDeletePageComponent_ng_template_12_Template_button_click_12_listener() {
      const c_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4).close;
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](c_r6("cancel"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function WorkspaceItemsDeletePageComponent_ng_template_12_Template_button_click_15_listener() {
      const c_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4).close;
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](c_r6("ok"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 4, "workspace-item.delete.header"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](10, 6, "submission.general.discard.confirm.info"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](14, 8, "submission.general.discard.confirm.cancel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](17, 10, "submission.general.discard.confirm.submit"));
  }
}
class WorkspaceItemsDeletePageComponent {
  constructor(activatedRoute, router, routeService, workspaceItemService, notificationsService, translationService, location, modalService) {
    this.activatedRoute = activatedRoute;
    this.router = router;
    this.routeService = routeService;
    this.workspaceItemService = workspaceItemService;
    this.notificationsService = notificationsService;
    this.translationService = translationService;
    this.location = location;
    this.modalService = modalService;
  }
  ngOnInit() {
    this.wsi$ = this.activatedRoute.data.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(data => data.wsi), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_2__.getRemoteDataPayload)());
    this.dso$ = this.activatedRoute.data.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(data => data.dso), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_2__.getRemoteDataPayload)());
    this.previousQueryParameters = this.location.getState().previousQueryParams;
  }
  /**
   * Navigates to the previous url
   * If there's not previous url, it continues to the mydspace page instead
   */
  previousPage() {
    this.routeService.getPreviousUrl().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.take)(1)).subscribe(url => {
      let params = {};
      if (!url) {
        url = '/mydspace';
        params = this.previousQueryParameters;
      }
      if (url.split('?').length > 1) {
        for (const param of url.split('?')[1].split('&')) {
          params[param.split('=')[0]] = decodeURIComponent(param.split('=')[1]);
        }
      }
      void this.router.navigate([url.split('?')[0]], {
        queryParams: params
      });
    });
  }
  /**
   * Open the modal to confirm the deletion of the workspaceitem
   */
  confirmDelete(content) {
    var _this = this;
    return (0,D_phasetwo_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.modalService.open(content).result.then(result => {
        if (result === 'ok') {
          _this.sendDeleteRequest();
        }
      });
    })();
  }
  /**
   * Delete the target workspaceitem object
   */
  sendDeleteRequest() {
    this.wsi$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.switchMap)(wsi => this.workspaceItemService.delete(wsi.id).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_2__.getFirstCompletedRemoteData)()))).subscribe(response => {
      if (response.hasSucceeded) {
        const title = this.translationService.get('workspace-item.delete.notification.success.title');
        const content = this.translationService.get('workspace-item.delete.title');
        this.notificationsService.success(title, content);
        this.previousPage();
      } else {
        const title = this.translationService.get('workspace-item.delete.notification.error.title');
        const content = this.translationService.get('workspace-item.delete.notification.error.content');
        this.notificationsService.error(title, content);
      }
    });
  }
  static {
    this.ɵfac = function WorkspaceItemsDeletePageComponent_Factory(t) {
      return new (t || WorkspaceItemsDeletePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_services_route_service__WEBPACK_IMPORTED_MODULE_1__.RouteService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_submission_workspaceitem_data_service__WEBPACK_IMPORTED_MODULE_3__.WorkspaceitemDataService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_5__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_12__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbModal));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: WorkspaceItemsDeletePageComponent,
      selectors: [["ds-base-workspaceitems-delete-page"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵStandaloneFeature"]],
      decls: 14,
      vars: 12,
      consts: [["content", ""], [1, "container"], [3, "item", 4, "ngIf"], [1, "btn", "btn-default", 3, "click"], [1, "btn", "btn-danger", 3, "click"], ["id", "delete-modal"], [3, "item"], [1, "modal-header"], [1, "modal-title", "text-danger", "h4"], ["type", "button", "id", "delete_close", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", "id", "delete_cancel", 1, "btn", "btn-secondary", 3, "click"], ["type", "button", "id", "delete_confirm", 1, "btn", "btn-danger", 3, "click"]],
      template: function WorkspaceItemsDeletePageComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 1)(1, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, WorkspaceItemsDeletePageComponent_ds_modify_item_overview_4_Template, 2, 3, "ds-modify-item-overview", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function WorkspaceItemsDeletePageComponent_Template_button_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.previousPage());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](8, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function WorkspaceItemsDeletePageComponent_Template_button_click_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            const content_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](13);
            $event.preventDefault();
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.confirmDelete(content_r3));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](11, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, WorkspaceItemsDeletePageComponent_ng_template_12_Template, 18, 12, "ng-template", 5, 0, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 4, "workspace-item.delete.header"));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 6, ctx.dso$));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](8, 8, "workspace-item.delete.button.cancel"));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](11, 10, "workspace-item.delete.button.confirm"));
        }
      },
      dependencies: [_item_page_edit_item_page_modify_item_overview_modify_item_overview_component__WEBPACK_IMPORTED_MODULE_4__.ModifyItemOverviewComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.AsyncPipe],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]     ds-modify-item-overview table {\n  display: inline-table !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmtzcGFjZWl0ZW1zLWRlbGV0ZS1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBO0FBQ0E7RUFDRSxnQ0FBQTtBQUNGIiwiZmlsZSI6IndvcmtzcGFjZWl0ZW1zLWRlbGV0ZS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi9cbjpob3N0IDo6bmctZGVlcCBkcy1tb2RpZnktaXRlbS1vdmVydmlldyB0YWJsZSB7XG4gIGRpc3BsYXk6IGlubGluZS10YWJsZSAhaW1wb3J0YW50O1xufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvd29ya3NwYWNlaXRlbXMtZWRpdC1wYWdlL3dvcmtzcGFjZWl0ZW1zLWRlbGV0ZS1wYWdlL3dvcmtzcGFjZWl0ZW1zLWRlbGV0ZS1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBO0FBQ0E7RUFDRSxnQ0FBQTtBQUNGO0FBQ0Esd3ZCQUF3dkIiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqL1xuOmhvc3QgOjpuZy1kZWVwIGRzLW1vZGlmeS1pdGVtLW92ZXJ2aWV3IHRhYmxlIHtcbiAgZGlzcGxheTogaW5saW5lLXRhYmxlICFpbXBvcnRhbnQ7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 19394:
/*!*****************************************************************************!*\
  !*** ./src/app/workspaceitems-edit-page/workspaceitems-edit-page-routes.ts ***!
  \*****************************************************************************/
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
/* harmony import */ var _item_from_workspace_resolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./item-from-workspace.resolver */ 74435);
/* harmony import */ var _item_from_workspace_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./item-from-workspace-breadcrumb.resolver */ 8393);
/* harmony import */ var _workspace_item_page_resolver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./workspace-item-page.resolver */ 27670);
/* harmony import */ var _workspaceitems_delete_page_themed_workspaceitems_delete_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./workspaceitems-delete-page/themed-workspaceitems-delete-page.component */ 17513);








const ROUTES = [{
  path: '',
  redirectTo: '/home',
  pathMatch: 'full'
}, {
  path: ':id',
  resolve: {
    breadcrumb: _item_from_workspace_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_5__.ItemFromWorkspaceBreadcrumbResolver,
    wsi: _workspace_item_page_resolver__WEBPACK_IMPORTED_MODULE_6__.workspaceItemPageResolver
  },
  children: [{
    canActivate: [_core_auth_authenticated_guard__WEBPACK_IMPORTED_MODULE_0__.authenticatedGuard],
    path: 'edit',
    component: _submission_edit_themed_submission_edit_component__WEBPACK_IMPORTED_MODULE_3__.ThemedSubmissionEditComponent,
    resolve: {
      breadcrumb: _core_breadcrumbs_i18n_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_1__.i18nBreadcrumbResolver
    },
    data: {
      title: 'submission.edit.title',
      breadcrumbKey: 'submission.edit'
    }
  }, {
    canActivate: [_core_auth_authenticated_guard__WEBPACK_IMPORTED_MODULE_0__.authenticatedGuard],
    path: 'view',
    component: _item_page_full_themed_full_item_page_component__WEBPACK_IMPORTED_MODULE_2__.ThemedFullItemPageComponent,
    resolve: {
      dso: _item_from_workspace_resolver__WEBPACK_IMPORTED_MODULE_4__.itemFromWorkspaceResolver,
      breadcrumb: _core_breadcrumbs_i18n_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_1__.i18nBreadcrumbResolver
    },
    data: {
      title: 'workspace-item.view.title',
      breadcrumbKey: 'workspace-item.view'
    }
  }, {
    canActivate: [_core_auth_authenticated_guard__WEBPACK_IMPORTED_MODULE_0__.authenticatedGuard],
    path: 'delete',
    component: _workspaceitems_delete_page_themed_workspaceitems_delete_page_component__WEBPACK_IMPORTED_MODULE_7__.ThemedWorkspaceItemsDeletePageComponent,
    resolve: {
      dso: _item_from_workspace_resolver__WEBPACK_IMPORTED_MODULE_4__.itemFromWorkspaceResolver,
      breadcrumb: _core_breadcrumbs_i18n_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_1__.i18nBreadcrumbResolver
    },
    data: {
      title: 'workspace-item.delete',
      breadcrumbKey: 'workspace-item.delete'
    }
  }]
}];

/***/ }),

/***/ 72447:
/*!************************************************************************************************************************************************************!*\
  !*** ./src/themes/ lazy ^\.\/.*\/app\/workspaceitems\-edit\-page\/workspaceitems\-delete\-page\/workspaceitems\-delete\-page\.component$ namespace object ***!
  \************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./custom/app/workspaceitems-edit-page/workspaceitems-delete-page/workspaceitems-delete-page.component": [
		12202,
		"src_themes_custom_app_workspaceitems-edit-page_workspaceitems-delete-page_workspaceitems-dele-246dd2"
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
webpackAsyncContext.id = 72447;
module.exports = webpackAsyncContext;

/***/ })

}]);
//# sourceMappingURL=src_app_workspaceitems-edit-page_workspaceitems-edit-page-routes_ts.js.map