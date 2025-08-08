"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_app_community-page_edit-community-page_edit-community-page-routes_ts"],{

/***/ 14815:
/*!*******************************************************************************************************************!*\
  !*** ./src/app/community-page/edit-community-page/community-access-control/community-access-control.component.ts ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CommunityAccessControlComponent: () => (/* binding */ CommunityAccessControlComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/shared/operators */ 55757);
/* harmony import */ var _shared_access_control_form_container_access_control_form_container_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/access-control-form-container/access-control-form-container.component */ 43664);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 14354);







function CommunityAccessControlComponent_ds_access_control_form_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "ds-access-control-form-container", 1);
  }
  if (rf & 2) {
    const itemRD_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("itemRD", itemRD_r1)("showLimitToSpecificBitstreams", false);
  }
}
class CommunityAccessControlComponent {
  constructor(route) {
    this.route = route;
  }
  ngOnInit() {
    this.itemRD$ = this.route.parent.parent.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(data => data.dso)).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_0__.getFirstSucceededRemoteData)());
  }
  static {
    this.ɵfac = function CommunityAccessControlComponent_Factory(t) {
      return new (t || CommunityAccessControlComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: CommunityAccessControlComponent,
      selectors: [["ds-community-access-control"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 3,
      consts: [["titleMessage", "community-access-control-title", 3, "itemRD", "showLimitToSpecificBitstreams", 4, "ngIf"], ["titleMessage", "community-access-control-title", 3, "itemRD", "showLimitToSpecificBitstreams"]],
      template: function CommunityAccessControlComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, CommunityAccessControlComponent_ds_access_control_form_container_0_Template, 1, 2, "ds-access-control-form-container", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 1, ctx.itemRD$));
        }
      },
      dependencies: [_shared_access_control_form_container_access_control_form_container_component__WEBPACK_IMPORTED_MODULE_1__.AccessControlFormContainerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW11bml0eS1hY2Nlc3MtY29udHJvbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQSIsImZpbGUiOiJjb21tdW5pdHktYWNjZXNzLWNvbnRyb2wuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqLyJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tbXVuaXR5LXBhZ2UvZWRpdC1jb21tdW5pdHktcGFnZS9jb21tdW5pdHktYWNjZXNzLWNvbnRyb2wvY29tbXVuaXR5LWFjY2Vzcy1jb250cm9sLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBO0FBQ0EsZ21CQUFnbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqLyJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 9859:
/*!*******************************************************************************************************************!*\
  !*** ./src/app/community-page/edit-community-page/community-authorizations/community-authorizations.component.ts ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CommunityAuthorizationsComponent: () => (/* binding */ CommunityAuthorizationsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 46891);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var _shared_resource_policies_resource_policies_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/resource-policies/resource-policies.component */ 24380);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 14354);






/**
 * Component that handles the community Authorizations
 */
class CommunityAuthorizationsComponent {
  /**
   * Initialize instance variables
   *
   * @param {ActivatedRoute} route
   */
  constructor(route) {
    this.route = route;
  }
  /**
   * Initialize the component, setting up the community
   */
  ngOnInit() {
    this.dsoRD$ = this.route.parent.parent.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.first)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(data => data.dso));
  }
  static {
    this.ɵfac = function CommunityAuthorizationsComponent_Factory(t) {
      return new (t || CommunityAuthorizationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: CommunityAuthorizationsComponent,
      selectors: [["ds-community-authorizations"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
      decls: 3,
      vars: 4,
      consts: [[1, "container"], [3, "resourceType", "resourceUUID"]],
      template: function CommunityAuthorizationsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "ds-resource-policies", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          let tmp_1_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("resourceType", "community")("resourceUUID", (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 2, ctx.dsoRD$)) == null ? null : tmp_1_0.payload == null ? null : tmp_1_0.payload.id);
        }
      },
      dependencies: [_shared_resource_policies_resource_policies_component__WEBPACK_IMPORTED_MODULE_0__.ResourcePoliciesComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 3091:
/*!***************************************************************************************************!*\
  !*** ./src/app/community-page/edit-community-page/community-curate/community-curate.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CommunityCurateComponent: () => (/* binding */ CommunityCurateComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 78374);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 85687);
/* harmony import */ var _core_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/breadcrumbs/dso-name.service */ 96526);
/* harmony import */ var _curation_form_curation_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../curation-form/curation-form.component */ 3040);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/empty.util */ 82777);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 14354);











const _c0 = a0 => ({
  community: a0
});
/**
 * Component for managing a community's curation tasks
 */
class CommunityCurateComponent {
  constructor(route, dsoNameService) {
    this.route = route;
    this.dsoNameService = dsoNameService;
  }
  ngOnInit() {
    this.dsoRD$ = this.route.parent.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(data => data.dso));
    this.communityName$ = this.dsoRD$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)(rd => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_2__.hasValue)(rd)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(rd => {
      return this.dsoNameService.getName(rd.payload);
    }));
  }
  static {
    this.ɵfac = function CommunityCurateComponent_Factory(t) {
      return new (t || CommunityCurateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_0__.DSONameService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: CommunityCurateComponent,
      selectors: [["ds-community-curate"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵStandaloneFeature"]],
      decls: 7,
      vars: 11,
      consts: [[1, "container"], [3, "dsoHandle"]],
      template: function CommunityCurateComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "ds-curation-form", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](6, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          let tmp_1_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](4, 4, "community.curate.header", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](9, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 2, ctx.communityName$))));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dsoHandle", (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](6, 7, ctx.dsoRD$)) == null ? null : tmp_1_0.payload.handle);
        }
      },
      dependencies: [_curation_form_curation_form_component__WEBPACK_IMPORTED_MODULE_1__.CurationFormComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 4093:
/*!*******************************************************************************************************!*\
  !*** ./src/app/community-page/edit-community-page/community-metadata/community-metadata.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CommunityMetadataComponent: () => (/* binding */ CommunityMetadataComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _core_data_community_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/data/community-data.service */ 46660);
/* harmony import */ var _core_shared_community_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/shared/community.model */ 10046);
/* harmony import */ var _shared_comcol_comcol_forms_edit_comcol_page_comcol_metadata_comcol_metadata_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/comcol/comcol-forms/edit-comcol-page/comcol-metadata/comcol-metadata.component */ 63277);
/* harmony import */ var _shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/notifications/notifications.service */ 69472);
/* harmony import */ var _community_form_community_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../community-form/community-form.component */ 2076);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 96439);













/**
 * Component for editing a community's metadata
 */
class CommunityMetadataComponent extends _shared_comcol_comcol_forms_edit_comcol_page_comcol_metadata_comcol_metadata_component__WEBPACK_IMPORTED_MODULE_2__.ComcolMetadataComponent {
  constructor(communityDataService, router, route, notificationsService, translate) {
    super(communityDataService, router, route, notificationsService, translate);
    this.communityDataService = communityDataService;
    this.router = router;
    this.route = route;
    this.notificationsService = notificationsService;
    this.translate = translate;
    this.frontendURL = '/communities/';
    this.type = _core_shared_community_model__WEBPACK_IMPORTED_MODULE_1__.Community.type;
  }
  static {
    this.ɵfac = function CommunityMetadataComponent_Factory(t) {
      return new (t || CommunityMetadataComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_data_community_data_service__WEBPACK_IMPORTED_MODULE_0__.CommunityDataService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_3__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: CommunityMetadataComponent,
      selectors: [["ds-community-metadata"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 4,
      consts: [[3, "submitForm", "back", "finish", "dso", "isCreation"]],
      template: function CommunityMetadataComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ds-community-form", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("submitForm", function CommunityMetadataComponent_Template_ds_community_form_submitForm_0_listener($event) {
            return ctx.onSubmit($event);
          })("back", function CommunityMetadataComponent_Template_ds_community_form_back_0_listener() {
            return ctx.navigateToHomePage();
          })("finish", function CommunityMetadataComponent_Template_ds_community_form_finish_0_listener() {
            return ctx.navigateToHomePage();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          let tmp_0_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dso", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 2, ctx.dsoRD$)) == null ? null : tmp_0_0.payload)("isCreation", false);
        }
      },
      dependencies: [_community_form_community_form_component__WEBPACK_IMPORTED_MODULE_4__.CommunityFormComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 98965:
/*!*************************************************************************************************!*\
  !*** ./src/app/community-page/edit-community-page/community-roles/community-roles.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CommunityRolesComponent: () => (/* binding */ CommunityRolesComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 46891);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/shared/operators */ 55757);
/* harmony import */ var _shared_comcol_comcol_forms_edit_comcol_page_comcol_role_comcol_role_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/comcol/comcol-forms/edit-comcol-page/comcol-role/comcol-role.component */ 20273);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 14354);







function CommunityRolesComponent_ds_comcol_role_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "ds-comcol-role", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
  }
  if (rf & 2) {
    const comcolRole_r1 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dso", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 2, ctx_r1.community$))("comcolRole", comcolRole_r1);
  }
}
/**
 * Component for managing a community's roles
 */
class CommunityRolesComponent {
  constructor(route) {
    this.route = route;
  }
  ngOnInit() {
    this.dsoRD$ = this.route.parent.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.first)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(data => data.dso));
    this.community$ = this.dsoRD$.pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_0__.getFirstSucceededRemoteData)(), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_0__.getRemoteDataPayload)());
    /**
     * The different roles for the community.
     */
    this.comcolRoles$ = this.community$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(community => [{
      name: 'community-admin',
      href: community._links.adminGroup.href
    }]));
  }
  static {
    this.ɵfac = function CommunityRolesComponent_Factory(t) {
      return new (t || CommunityRolesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: CommunityRolesComponent,
      selectors: [["ds-community-roles"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 3,
      consts: [[3, "dso", "comcolRole", 4, "ngFor", "ngForOf"], [3, "dso", "comcolRole"]],
      template: function CommunityRolesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, CommunityRolesComponent_ds_comcol_role_0_Template, 2, 4, "ds-comcol-role", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 1, ctx.comcolRoles$));
        }
      },
      dependencies: [_shared_comcol_comcol_forms_edit_comcol_page_comcol_role_comcol_role_component__WEBPACK_IMPORTED_MODULE_1__.ComcolRoleComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 51494:
/*!**********************************************************************************!*\
  !*** ./src/app/community-page/edit-community-page/edit-community-page-routes.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ROUTES: () => (/* binding */ ROUTES)
/* harmony export */ });
/* harmony import */ var _core_breadcrumbs_i18n_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/breadcrumbs/i18n-breadcrumb.resolver */ 72059);
/* harmony import */ var _core_data_feature_authorization_feature_authorization_guard_community_administrator_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/data/feature-authorization/feature-authorization-guard/community-administrator.guard */ 39083);
/* harmony import */ var _shared_resource_policies_create_resource_policy_create_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/resource-policies/create/resource-policy-create.component */ 55584);
/* harmony import */ var _shared_resource_policies_edit_resource_policy_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/resource-policies/edit/resource-policy-edit.component */ 10676);
/* harmony import */ var _shared_resource_policies_resolvers_resource_policy_resolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/resource-policies/resolvers/resource-policy.resolver */ 92117);
/* harmony import */ var _shared_resource_policies_resolvers_resource_policy_target_resolver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/resource-policies/resolvers/resource-policy-target.resolver */ 45539);
/* harmony import */ var _community_access_control_community_access_control_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./community-access-control/community-access-control.component */ 14815);
/* harmony import */ var _community_authorizations_community_authorizations_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./community-authorizations/community-authorizations.component */ 9859);
/* harmony import */ var _community_curate_community_curate_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./community-curate/community-curate.component */ 3091);
/* harmony import */ var _community_metadata_community_metadata_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./community-metadata/community-metadata.component */ 4093);
/* harmony import */ var _community_roles_community_roles_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./community-roles/community-roles.component */ 98965);
/* harmony import */ var _edit_community_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./edit-community-page.component */ 66890);












/**
 * Routing module that handles the routing for the Edit Community page administrator functionality
 */
const ROUTES = [{
  path: '',
  resolve: {
    breadcrumb: _core_breadcrumbs_i18n_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_0__.i18nBreadcrumbResolver
  },
  data: {
    breadcrumbKey: 'community.edit'
  },
  component: _edit_community_page_component__WEBPACK_IMPORTED_MODULE_11__.EditCommunityPageComponent,
  canActivate: [_core_data_feature_authorization_feature_authorization_guard_community_administrator_guard__WEBPACK_IMPORTED_MODULE_1__.communityAdministratorGuard],
  children: [{
    path: '',
    redirectTo: 'metadata',
    pathMatch: 'full'
  }, {
    path: 'metadata',
    component: _community_metadata_community_metadata_component__WEBPACK_IMPORTED_MODULE_9__.CommunityMetadataComponent,
    data: {
      title: 'community.edit.tabs.metadata.title',
      hideReturnButton: true,
      showBreadcrumbs: true
    }
  }, {
    path: 'roles',
    component: _community_roles_community_roles_component__WEBPACK_IMPORTED_MODULE_10__.CommunityRolesComponent,
    data: {
      title: 'community.edit.tabs.roles.title',
      showBreadcrumbs: true
    }
  }, {
    path: 'curate',
    component: _community_curate_community_curate_component__WEBPACK_IMPORTED_MODULE_8__.CommunityCurateComponent,
    data: {
      title: 'community.edit.tabs.curate.title',
      showBreadcrumbs: true
    }
  }, {
    path: 'access-control',
    component: _community_access_control_community_access_control_component__WEBPACK_IMPORTED_MODULE_6__.CommunityAccessControlComponent,
    data: {
      title: 'collection.edit.tabs.access-control.title',
      showBreadcrumbs: true
    }
  }, {
    path: 'authorizations',
    data: {
      showBreadcrumbs: true
    },
    children: [{
      path: 'create',
      resolve: {
        resourcePolicyTarget: _shared_resource_policies_resolvers_resource_policy_target_resolver__WEBPACK_IMPORTED_MODULE_5__.resourcePolicyTargetResolver
      },
      component: _shared_resource_policies_create_resource_policy_create_component__WEBPACK_IMPORTED_MODULE_2__.ResourcePolicyCreateComponent,
      data: {
        title: 'resource-policies.create.page.title'
      }
    }, {
      path: 'edit',
      resolve: {
        resourcePolicy: _shared_resource_policies_resolvers_resource_policy_resolver__WEBPACK_IMPORTED_MODULE_4__.resourcePolicyResolver
      },
      component: _shared_resource_policies_edit_resource_policy_edit_component__WEBPACK_IMPORTED_MODULE_3__.ResourcePolicyEditComponent,
      data: {
        title: 'resource-policies.edit.page.title'
      }
    }, {
      path: '',
      component: _community_authorizations_community_authorizations_component__WEBPACK_IMPORTED_MODULE_7__.CommunityAuthorizationsComponent,
      data: {
        title: 'community.edit.tabs.authorizations.title',
        showBreadcrumbs: true,
        hideReturnButton: true
      }
    }]
  }]
}];

/***/ }),

/***/ 66890:
/*!*************************************************************************************!*\
  !*** ./src/app/community-page/edit-community-page/edit-community-page.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditCommunityPageComponent: () => (/* binding */ EditCommunityPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var _shared_comcol_comcol_forms_edit_comcol_page_edit_comcol_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/comcol/comcol-forms/edit-comcol-page/edit-comcol-page.component */ 5880);
/* harmony import */ var _community_page_routing_paths__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../community-page-routing-paths */ 54671);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);








const _c0 = a0 => ({
  "active": a0
});
const _c1 = a0 => [a0];
function EditCommunityPageComponent_li_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 14)(1, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const page_r1 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](7, _c0, page_r1 === ctx_r1.currentPage))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](9, _c1, "./" + page_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-selected", page_r1 === ctx_r1.currentPage)("data-test", page_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 5, ctx_r1.type + ".edit.tabs." + page_r1 + ".head"), " ");
  }
}
function EditCommunityPageComponent_a_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", ctx_r1.getPageUrl((tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 2, ctx_r1.dsoRD$)) == null ? null : tmp_1_0.payload));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 4, ctx_r1.type + ".edit.return"), " ");
  }
}
/**
 * Component that represents the page where a user can edit an existing Community
 */
class EditCommunityPageComponent extends _shared_comcol_comcol_forms_edit_comcol_page_edit_comcol_page_component__WEBPACK_IMPORTED_MODULE_0__.EditComColPageComponent {
  constructor(router, route) {
    super(router, route);
    this.router = router;
    this.route = route;
    this.type = 'community';
  }
  /**
   * Get the community page url
   * @param community The community for which the url is requested
   */
  getPageUrl(community) {
    return (0,_community_page_routing_paths__WEBPACK_IMPORTED_MODULE_1__.getCommunityPageRoute)(community.id);
  }
  static {
    this.ɵfac = function EditCommunityPageComponent_Factory(t) {
      return new (t || EditCommunityPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: EditCommunityPageComponent,
      selectors: [["ds-edit-community"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 21,
      vars: 11,
      consts: [[1, "container"], [1, "row"], [1, "col-12"], [1, "d-flex", "justify-content-between", "border-bottom"], [1, "my-auto"], ["data-test", "delete-button", 1, "btn", "btn-danger", 3, "routerLink"], ["aria-hidden", "true", 1, "fas", "fa-trash"], [1, "pt-2"], ["role", "tablist", 1, "nav", "nav-tabs", "justify-content-start", "mb-2"], ["class", "nav-item", "role", "presentation", 4, "ngFor", "ngForOf"], [1, "tab-pane", "active"], [1, "mb-4"], [1, "col-12", "text-right"], ["class", "btn btn-outline-secondary", 3, "routerLink", 4, "ngIf"], ["role", "presentation", 1, "nav-item"], ["role", "tab", 1, "nav-link", 3, "ngClass", "routerLink"], [1, "btn", "btn-outline-secondary", 3, "routerLink"], ["aria-hidden", "true", 1, "fas", "fa-arrow-left"]],
      template: function EditCommunityPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 4)(8, "a", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "i", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 7)(14, "ul", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, EditCommunityPageComponent_li_15_Template, 4, 11, "li", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 10)(17, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, EditCommunityPageComponent_a_20_Template, 5, 6, "a", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        }
        if (rf & 2) {
          let tmp_1_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 5, ctx.type + ".edit.head"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", (ctx.type === "community" ? "/communities/" : "/collections/") + ((tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 7, ctx.dsoRD$)) == null ? null : tmp_1_0.payload.uuid) + "/delete");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](12, 9, ctx.type + ".edit.delete"), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.pages);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.hideReturnButton);
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 39083:
/*!**************************************************************************************************************!*\
  !*** ./src/app/core/data/feature-authorization/feature-authorization-guard/community-administrator.guard.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   communityAdministratorGuard: () => (/* binding */ communityAdministratorGuard)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 17796);
/* harmony import */ var _feature_id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../feature-id */ 3970);
/* harmony import */ var _single_feature_authorization_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./single-feature-authorization.guard */ 89673);



/**
 * Prevent unauthorized activating and loading of routes when the current authenticated user
 * isn't a Community administrator
 * Check group management rights
 */
const communityAdministratorGuard = (0,_single_feature_authorization_guard__WEBPACK_IMPORTED_MODULE_1__.singleFeatureAuthorizationGuard)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(_feature_id__WEBPACK_IMPORTED_MODULE_0__.FeatureID.IsCommunityAdmin));

/***/ }),

/***/ 3040:
/*!**********************************************************!*\
  !*** ./src/app/curation-form/curation-form.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CURATION_CFG: () => (/* binding */ CURATION_CFG),
/* harmony export */   CurationFormComponent: () => (/* binding */ CurationFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 56106);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var _core_data_configuration_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/data/configuration-data.service */ 8917);
/* harmony import */ var _core_data_processes_script_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/data/processes/script-data.service */ 32736);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/shared/operators */ 55757);
/* harmony import */ var _process_page_process_page_routing_paths__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../process-page/process-page-routing.paths */ 1504);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/empty.util */ 82777);
/* harmony import */ var _shared_handle_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/handle.service */ 73335);
/* harmony import */ var _shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/notifications/notifications.service */ 69472);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 14354);





















function CurationFormComponent_option_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const task_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", task_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 2, "curation-task.task." + task_r1 + ".label"), " ");
  }
}
function CurationFormComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 3)(1, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "small", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 2, "curation.form.handle.label"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](7, 4, "curation.form.handle.hint"));
  }
}
const CURATION_CFG = 'plugin.named.org.dspace.curate.CurationTask';
/**
 * Component responsible for rendering the Curation Task form
 */
class CurationFormComponent {
  constructor(scriptDataService, configurationDataService, notificationsService, translateService, handleService, router, cdr) {
    this.scriptDataService = scriptDataService;
    this.configurationDataService = configurationDataService;
    this.notificationsService = notificationsService;
    this.translateService = translateService;
    this.handleService = handleService;
    this.router = router;
    this.cdr = cdr;
    this.subs = [];
  }
  ngOnDestroy() {
    this.subs.forEach(sub => sub.unsubscribe());
  }
  ngOnInit() {
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormGroup({
      task: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormControl(''),
      handle: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormControl('')
    });
    this.config = this.configurationDataService.findByPropertyName(CURATION_CFG);
    this.subs.push(this.config.pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_2__.getFirstSucceededRemoteDataPayload)()).subscribe(configProperties => {
      this.tasks = configProperties.values.filter(value => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_4__.isNotEmpty)(value) && value.includes('=')).map(value => value.split('=')[1].trim());
      this.form.get('task').patchValue(this.tasks[0]);
      this.cdr.detectChanges();
    }));
  }
  /**
   * Determines whether the inputted dsoHandle has a value
   */
  hasHandleValue() {
    return (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_4__.hasValue)(this.dsoHandle);
  }
  /**
   * Submit the selected taskName and handle to the script data service to run the corresponding curation script
   * Navigate to the process page on success
   */
  submit() {
    const taskName = this.form.get('task').value;
    let handle$;
    if (this.hasHandleValue()) {
      handle$ = this.handleService.normalizeHandle(this.dsoHandle).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(handle => {
        if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_4__.isEmpty)(handle)) {
          this.notificationsService.error(this.translateService.get('curation.form.submit.error.head'), this.translateService.get('curation.form.submit.error.invalid-handle'));
        }
        return handle;
      }));
    } else {
      handle$ = this.handleService.normalizeHandle(this.form.get('handle').value).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(handle => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_4__.isEmpty)(handle) ? 'all' : handle));
    }
    this.subs.push(handle$.subscribe(handle => {
      if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_4__.hasValue)(handle)) {
        this.subs.push(this.scriptDataService.invoke('curate', [{
          name: '-t',
          value: taskName
        }, {
          name: '-i',
          value: handle
        }], []).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_2__.getFirstCompletedRemoteData)()).subscribe(rd => {
          if (rd.hasSucceeded) {
            this.notificationsService.success(this.translateService.get('curation.form.submit.success.head'), this.translateService.get('curation.form.submit.success.content'));
            void this.router.navigateByUrl((0,_process_page_process_page_routing_paths__WEBPACK_IMPORTED_MODULE_3__.getProcessDetailRoute)(rd.payload.processId));
          } else {
            this.notificationsService.error(this.translateService.get('curation.form.submit.error.head'), this.translateService.get('curation.form.submit.error.content'));
          }
        }));
      }
    }));
  }
  static {
    this.ɵfac = function CurationFormComponent_Factory(t) {
      return new (t || CurationFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_data_processes_script_data_service__WEBPACK_IMPORTED_MODULE_1__.ScriptDataService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_data_configuration_data_service__WEBPACK_IMPORTED_MODULE_0__.ConfigurationDataService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_6__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_handle_service__WEBPACK_IMPORTED_MODULE_5__.HandleService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: CurationFormComponent,
      selectors: [["ds-curation-form"]],
      inputs: {
        dsoHandle: "dsoHandle"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵStandaloneFeature"]],
      decls: 13,
      vars: 9,
      consts: [[3, "ngSubmit", "formGroup"], [1, "form-group"], [1, "row", "mb-2"], [1, "col-12", "col-sm-6"], ["for", "task", 1, "font-weight-bold"], ["id", "task", "formControlName", "task", 1, "form-control"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "col-12 col-sm-6", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-default", "btn-primary"], [3, "value"], ["for", "handle", 1, "font-weight-bold"], ["id", "handle", "formControlName", "handle", 1, "form-control"], [1, "text-muted"]],
      template: function CurationFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "form", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function CurationFormComponent_Template_form_ngSubmit_0_listener() {
            return ctx.submit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "label", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "select", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, CurationFormComponent_option_8_Template, 3, 4, "option", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, CurationFormComponent_div_9_Template, 8, 6, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](12, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.form);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](6, 5, "curation.form.task-select.label"));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.tasks);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.hasHandleValue());
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](12, 7, "curation.form.submit"));
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgFor, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe],
      encapsulation: 2
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_community-page_edit-community-page_edit-community-page-routes_ts.js.map