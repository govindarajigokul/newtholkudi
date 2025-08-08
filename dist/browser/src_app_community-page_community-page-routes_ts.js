(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_app_community-page_community-page-routes_ts"],{

/***/ 2076:
/*!***************************************************************************!*\
  !*** ./src/app/community-page/community-form/community-form.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CommunityFormComponent: () => (/* binding */ CommunityFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-dynamic-forms/core */ 94403);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 88280);
/* harmony import */ var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/auth/auth.service */ 67116);
/* harmony import */ var _core_cache_object_cache_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/cache/object-cache.service */ 41684);
/* harmony import */ var _core_data_community_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/data/community-data.service */ 46660);
/* harmony import */ var _core_data_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/data/request.service */ 32473);
/* harmony import */ var _core_shared_community_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/shared/community.model */ 10046);
/* harmony import */ var _shared_comcol_comcol_forms_comcol_form_comcol_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/comcol/comcol-forms/comcol-form/comcol-form.component */ 61434);
/* harmony import */ var _shared_comcol_comcol_page_logo_comcol_page_logo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/comcol/comcol-page-logo/comcol-page-logo.component */ 31136);
/* harmony import */ var _shared_form_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/form/form.component */ 99386);
/* harmony import */ var _shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/notifications/notifications.service */ 69472);
/* harmony import */ var _shared_upload_uploader_uploader_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/upload/uploader/uploader.component */ 18430);
/* harmony import */ var _shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/utils/var.directive */ 18226);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 49966);


























function CommunityFormComponent_ng_container_6_div_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 12)(1, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function CommunityFormComponent_ng_container_6_div_1_div_5_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.confirmLogoDeleteWithModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](3, 1, "community.edit.logo.delete.title"), " ");
  }
}
function CommunityFormComponent_ng_container_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 7)(1, "div", 1)(2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](3, "ds-comcol-page-logo", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](5, CommunityFormComponent_ng_container_6_div_1_div_5_Template, 4, 3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const logo_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().ngVar;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("alternateText", ctx_r1.type.value + ".logo.alt")("logo", logo_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", logo_r3);
  }
}
function CommunityFormComponent_ng_container_6_div_2_ds_uploader_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "ds-uploader", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("onCompleteItem", function CommunityFormComponent_ng_container_6_div_2_ds_uploader_1_Template_ds_uploader_onCompleteItem_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.onCompleteItem());
    })("onUploadError", function CommunityFormComponent_ng_container_6_div_2_ds_uploader_1_Template_ds_uploader_onUploadError_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.onUploadError());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ariaLabel", ctx_r1.type.value + ".browse.logo")("dropMsg", ctx_r1.type.value + ".edit.logo.upload")("dropOverDocumentMsg", ctx_r1.type.value + ".edit.logo.upload")("enableDragOverDocument", true)("uploadFilesOptions", ctx_r1.uploadFilesOptions);
  }
}
function CommunityFormComponent_ng_container_6_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, CommunityFormComponent_ng_container_6_div_2_ds_uploader_1_Template, 1, 5, "ds-uploader", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 1, ctx_r1.initializedUploaderOptions));
  }
}
function CommunityFormComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, CommunityFormComponent_ng_container_6_div_1_Template, 6, 3, "div", 5)(2, CommunityFormComponent_ng_container_6_div_2_Template, 3, 3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const logo_r3 = ctx.ngVar;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", logo_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !logo_r3);
  }
}
function CommunityFormComponent_ds_form_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "ds-form", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("submitForm", function CommunityFormComponent_ds_form_8_Template_ds_form_submitForm_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.onSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function CommunityFormComponent_ds_form_8_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.back.emit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formId", "comcol-form-id")("formModel", ctx_r1.formModel)("displayCancel", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](4, 4, ctx_r1.type.value + ".edit.return"), " ");
  }
}
/**
 * Form used for creating and editing communities
 */
class CommunityFormComponent extends _shared_comcol_comcol_forms_comcol_form_comcol_form_component__WEBPACK_IMPORTED_MODULE_6__.ComColFormComponent {
  constructor(formService, translate, notificationsService, authService, dsoService, requestService, objectCache, modalService) {
    super(formService, translate, notificationsService, authService, requestService, objectCache, modalService);
    this.formService = formService;
    this.translate = translate;
    this.notificationsService = notificationsService;
    this.authService = authService;
    this.dsoService = dsoService;
    this.requestService = requestService;
    this.objectCache = objectCache;
    this.modalService = modalService;
    /**
     * @type {Community} A new community when a community is being created, an existing Input community when a community is being edited
     */
    this.dso = new _core_shared_community_model__WEBPACK_IMPORTED_MODULE_5__.Community();
    /**
     * @type {Community.type} This is a community-type form
     */
    this.type = _core_shared_community_model__WEBPACK_IMPORTED_MODULE_5__.Community.type;
    /**
     * The dynamic form fields used for creating/editing a community
     * @type {(DynamicInputModel | DynamicTextAreaModel)[]}
     */
    this.formModel = [new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_13__.DynamicInputModel({
      id: 'title',
      name: 'dc.title',
      required: true,
      validators: {
        required: null
      },
      errorMessages: {
        required: 'Please enter a name for this title'
      }
    }), new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_13__.DynamicTextAreaModel({
      id: 'description',
      name: 'dc.description',
      spellCheck: _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.form.spellCheck
    }), new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_13__.DynamicTextAreaModel({
      id: 'abstract',
      name: 'dc.description.abstract',
      spellCheck: _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.form.spellCheck
    }), new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_13__.DynamicTextAreaModel({
      id: 'rights',
      name: 'dc.rights',
      spellCheck: _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.form.spellCheck
    }), new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_13__.DynamicTextAreaModel({
      id: 'tableofcontents',
      name: 'dc.description.tableofcontents',
      spellCheck: _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.form.spellCheck
    })];
  }
  ngOnChanges(changes) {
    const dsoChange = changes.dso;
    if (this.dso && dsoChange && !dsoChange.isFirstChange()) {
      super.ngOnInit();
    }
  }
  static {
    this.ɵfac = function CommunityFormComponent_Factory(t) {
      return new (t || CommunityFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_13__.DynamicFormService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_9__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_core_data_community_data_service__WEBPACK_IMPORTED_MODULE_3__.CommunityDataService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_core_data_request_service__WEBPACK_IMPORTED_MODULE_4__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_core_cache_object_cache_service__WEBPACK_IMPORTED_MODULE_2__.ObjectCacheService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbModal));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
      type: CommunityFormComponent,
      selectors: [["ds-community-form"]],
      inputs: {
        dso: "dso"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵStandaloneFeature"]],
      decls: 9,
      vars: 7,
      consts: [[1, "container-fluid"], [1, "row"], [1, "col-12", "d-inline-block", "mb-1"], [4, "ngVar"], [3, "formId", "formModel", "displayCancel", "submitForm", 4, "ngIf"], ["class", "col-12 d-inline-block alert", "id", "logo-section", 4, "ngIf"], ["class", "col-12 d-inline-block", 4, "ngIf"], ["id", "logo-section", 1, "col-12", "d-inline-block", "alert"], [1, "col-8", "d-inline-block"], [3, "alternateText", "logo"], [1, "col-4", "d-inline-block"], ["class", "float-right", 4, "ngIf"], [1, "float-right"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], [1, "col-12", "d-inline-block"], [3, "ariaLabel", "dropMsg", "dropOverDocumentMsg", "enableDragOverDocument", "uploadFilesOptions", "onCompleteItem", "onUploadError", 4, "ngIf"], [3, "onCompleteItem", "onUploadError", "ariaLabel", "dropMsg", "dropOverDocumentMsg", "enableDragOverDocument", "uploadFilesOptions"], [3, "submitForm", "formId", "formModel", "displayCancel"], ["before", "", "type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], ["aria-hidden", "true", 1, "fas", "fa-arrow-left"]],
      template: function CommunityFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](5, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](6, CommunityFormComponent_ng_container_6_Template, 3, 2, "ng-container", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](7, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](8, CommunityFormComponent_ds_form_8_Template, 5, 6, "ds-form", 4);
        }
        if (rf & 2) {
          let tmp_1_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](5, 3, ctx.type.value + ".edit.logo.label"));
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngVar", (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](7, 5, ctx.dso == null ? null : ctx.dso.logo)) == null ? null : tmp_1_0.payload);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.formModel);
        }
      },
      dependencies: [_shared_form_form_component__WEBPACK_IMPORTED_MODULE_8__.FormComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslatePipe, _shared_upload_uploader_uploader_component__WEBPACK_IMPORTED_MODULE_10__.UploaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_16__.AsyncPipe, _shared_comcol_comcol_page_logo_comcol_page_logo_component__WEBPACK_IMPORTED_MODULE_7__.ComcolPageLogoComponent, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_11__.VarDirective],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbWNvbC1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBIiwiZmlsZSI6ImNvbWNvbC1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi8iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbWNvbC9jb21jb2wtZm9ybXMvY29tY29sLWZvcm0vY29tY29sLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQSw0akJBQTRqQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 68602:
/*!**********************************************************************!*\
  !*** ./src/app/community-page/community-page-administrator.guard.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   communityPageAdministratorGuard: () => (/* binding */ communityPageAdministratorGuard)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 17796);
/* harmony import */ var _core_data_feature_authorization_feature_authorization_guard_dso_page_single_feature_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/data/feature-authorization/feature-authorization-guard/dso-page-single-feature.guard */ 6056);
/* harmony import */ var _core_data_feature_authorization_feature_id__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/data/feature-authorization/feature-id */ 3970);
/* harmony import */ var _community_page_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./community-page.resolver */ 22269);




/**
 * Guard for preventing unauthorized access to certain {@link Community} pages requiring administrator rights
 * Check administrator authorization rights
 */
const communityPageAdministratorGuard = (0,_core_data_feature_authorization_feature_authorization_guard_dso_page_single_feature_guard__WEBPACK_IMPORTED_MODULE_0__.dsoPageSingleFeatureGuard)(() => _community_page_resolver__WEBPACK_IMPORTED_MODULE_2__.communityPageResolver, () => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(_core_data_feature_authorization_feature_id__WEBPACK_IMPORTED_MODULE_1__.FeatureID.AdministratorOf));

/***/ }),

/***/ 2368:
/*!*********************************************************!*\
  !*** ./src/app/community-page/community-page-routes.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ROUTES: () => (/* binding */ ROUTES)
/* harmony export */ });
/* harmony import */ var _browse_by_browse_by_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../browse-by/browse-by-guard */ 2729);
/* harmony import */ var _browse_by_browse_by_i18n_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../browse-by/browse-by-i18n-breadcrumb.resolver */ 71959);
/* harmony import */ var _core_auth_authenticated_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/auth/authenticated.guard */ 49347);
/* harmony import */ var _core_breadcrumbs_community_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/breadcrumbs/community-breadcrumb.resolver */ 89266);
/* harmony import */ var _core_breadcrumbs_i18n_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/breadcrumbs/i18n-breadcrumb.resolver */ 72059);
/* harmony import */ var _shared_comcol_sections_comcol_browse_by_comcol_browse_by_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/comcol/sections/comcol-browse-by/comcol-browse-by.component */ 10695);
/* harmony import */ var _shared_comcol_sections_comcol_search_section_comcol_search_section_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/comcol/sections/comcol-search-section/comcol-search-section.component */ 59397);
/* harmony import */ var _shared_dso_page_dso_edit_menu_resolver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/dso-page/dso-edit-menu.resolver */ 19964);
/* harmony import */ var _shared_menu_menu_item_type_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/menu/menu-item-type.model */ 34237);
/* harmony import */ var _community_page_resolver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./community-page.resolver */ 22269);
/* harmony import */ var _community_page_administrator_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./community-page-administrator.guard */ 68602);
/* harmony import */ var _community_page_routing_paths__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./community-page-routing-paths */ 54671);
/* harmony import */ var _create_community_page_create_community_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./create-community-page/create-community-page.component */ 28126);
/* harmony import */ var _create_community_page_create_community_page_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./create-community-page/create-community-page.guard */ 42388);
/* harmony import */ var _delete_community_page_delete_community_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./delete-community-page/delete-community-page.component */ 26994);
/* harmony import */ var _sections_sub_com_col_section_sub_com_col_section_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./sections/sub-com-col-section/sub-com-col-section.component */ 40523);
/* harmony import */ var _themed_community_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./themed-community-page.component */ 68648);

















const ROUTES = [{
  path: _community_page_routing_paths__WEBPACK_IMPORTED_MODULE_11__.COMMUNITY_CREATE_PATH,
  children: [{
    path: '',
    component: _create_community_page_create_community_page_component__WEBPACK_IMPORTED_MODULE_12__.CreateCommunityPageComponent,
    resolve: {
      breadcrumb: _core_breadcrumbs_i18n_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_4__.i18nBreadcrumbResolver
    },
    data: {
      breadcrumbKey: 'community.create'
    }
  }],
  canActivate: [_core_auth_authenticated_guard__WEBPACK_IMPORTED_MODULE_2__.authenticatedGuard, _create_community_page_create_community_page_guard__WEBPACK_IMPORTED_MODULE_13__.createCommunityPageGuard],
  data: {
    breadcrumbQueryParam: 'parent'
  },
  resolve: {
    breadcrumb: _core_breadcrumbs_community_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_3__.communityBreadcrumbResolver
  },
  runGuardsAndResolvers: 'always'
}, {
  path: ':id',
  resolve: {
    dso: _community_page_resolver__WEBPACK_IMPORTED_MODULE_9__.communityPageResolver,
    breadcrumb: _core_breadcrumbs_community_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_3__.communityBreadcrumbResolver
  },
  runGuardsAndResolvers: 'always',
  children: [{
    path: _community_page_routing_paths__WEBPACK_IMPORTED_MODULE_11__.COMMUNITY_EDIT_PATH,
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_core_resource-policy_resource-policy-data_service_ts"), __webpack_require__.e("default-node_modules_ngx-ui-switch_fesm2020_ngx-ui-switch_mjs"), __webpack_require__.e("default-src_app_shared_resource-policies_create_resource-policy-create_component_ts-src_app_s-cad6cd"), __webpack_require__.e("default-src_app_shared_access-control-form-container_access-control-form-container_component_ts"), __webpack_require__.e("default-src_app_shared_comcol_comcol-forms_edit-comcol-page_comcol-metadata_comcol-metadata_c-ddac2e"), __webpack_require__.e("src_app_community-page_edit-community-page_edit-community-page-routes_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./edit-community-page/edit-community-page-routes */ 51494)).then(m => m.ROUTES),
    canActivate: [_community_page_administrator_guard__WEBPACK_IMPORTED_MODULE_10__.communityPageAdministratorGuard]
  }, {
    path: 'delete',
    pathMatch: 'full',
    component: _delete_community_page_delete_community_page_component__WEBPACK_IMPORTED_MODULE_14__.DeleteCommunityPageComponent,
    canActivate: [_core_auth_authenticated_guard__WEBPACK_IMPORTED_MODULE_2__.authenticatedGuard]
  }, {
    path: '',
    component: _themed_community_page_component__WEBPACK_IMPORTED_MODULE_16__.ThemedCommunityPageComponent,
    resolve: {
      menu: _shared_dso_page_dso_edit_menu_resolver__WEBPACK_IMPORTED_MODULE_7__.dsoEditMenuResolver
    },
    children: [{
      path: '',
      pathMatch: 'full',
      component: _shared_comcol_sections_comcol_search_section_comcol_search_section_component__WEBPACK_IMPORTED_MODULE_6__.ComcolSearchSectionComponent
    }, {
      path: 'subcoms-cols',
      pathMatch: 'full',
      component: _sections_sub_com_col_section_sub_com_col_section_component__WEBPACK_IMPORTED_MODULE_15__.SubComColSectionComponent,
      resolve: {
        breadcrumb: _core_breadcrumbs_i18n_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_4__.i18nBreadcrumbResolver
      },
      data: {
        breadcrumbKey: 'community.subcoms-cols'
      }
    }, {
      path: 'browse/:id',
      pathMatch: 'full',
      component: _shared_comcol_sections_comcol_browse_by_comcol_browse_by_component__WEBPACK_IMPORTED_MODULE_5__.ComcolBrowseByComponent,
      canActivate: [_browse_by_browse_by_guard__WEBPACK_IMPORTED_MODULE_0__.browseByGuard],
      resolve: {
        breadcrumb: _browse_by_browse_by_i18n_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_1__.browseByI18nBreadcrumbResolver
      },
      data: {
        breadcrumbKey: 'browse.metadata'
      }
    }]
  }],
  data: {
    menu: {
      public: [{
        id: 'statistics_community_:id',
        active: true,
        visible: true,
        index: 2,
        model: {
          type: _shared_menu_menu_item_type_model__WEBPACK_IMPORTED_MODULE_8__.MenuItemType.LINK,
          text: 'menu.section.statistics',
          link: 'statistics/communities/:id/'
        }
      }]
    }
  }
}];

/***/ }),

/***/ 5548:
/*!************************************************************!*\
  !*** ./src/app/community-page/community-page.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CommunityPageComponent: () => (/* binding */ CommunityPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs/operators */ 85687);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs/operators */ 74671);
/* harmony import */ var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/auth/auth.service */ 67116);
/* harmony import */ var _core_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/breadcrumbs/dso-name.service */ 96526);
/* harmony import */ var _core_data_feature_authorization_authorization_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/data/feature-authorization/authorization-data.service */ 3675);
/* harmony import */ var _core_data_feature_authorization_feature_id__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/data/feature-authorization/feature-id */ 3970);
/* harmony import */ var _core_shared_authorized_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/shared/authorized.operators */ 308);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/shared/operators */ 55757);
/* harmony import */ var _shared_animations_fade__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/animations/fade */ 50332);
/* harmony import */ var _shared_comcol_comcol_page_browse_by_themed_comcol_page_browse_by_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/comcol/comcol-page-browse-by/themed-comcol-page-browse-by.component */ 20538);
/* harmony import */ var _shared_comcol_comcol_page_content_themed_comcol_page_content_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/comcol/comcol-page-content/themed-comcol-page-content.component */ 76072);
/* harmony import */ var _shared_comcol_comcol_page_handle_themed_comcol_page_handle_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/comcol/comcol-page-handle/themed-comcol-page-handle.component */ 57632);
/* harmony import */ var _shared_comcol_comcol_page_header_comcol_page_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/comcol/comcol-page-header/comcol-page-header.component */ 23348);
/* harmony import */ var _shared_comcol_comcol_page_logo_comcol_page_logo_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/comcol/comcol-page-logo/comcol-page-logo.component */ 31136);
/* harmony import */ var _shared_dso_page_dso_edit_menu_dso_edit_menu_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/dso-page/dso-edit-menu/dso-edit-menu.component */ 17807);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/empty.util */ 82777);
/* harmony import */ var _shared_error_error_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../shared/error/error.component */ 79632);
/* harmony import */ var _shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../shared/loading/themed-loading.component */ 82394);
/* harmony import */ var _shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../shared/utils/var.directive */ 18226);
/* harmony import */ var _statistics_angulartics_dspace_view_tracker_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../statistics/angulartics/dspace/view-tracker.component */ 57850);
/* harmony import */ var _community_page_routing_paths__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./community-page-routing-paths */ 54671);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 90310);





























function CommunityPageComponent_div_0_div_1_div_1_ds_comcol_page_logo_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "ds-comcol-page-logo", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](2, "translate");
  }
  if (rf & 2) {
    let tmp_6_0;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("logo", (tmp_6_0 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](1, 2, ctx_r0.logoRD$)) == null ? null : tmp_6_0.payload)("alternateText", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](2, 4, "community.logo"));
  }
}
function CommunityPageComponent_div_0_div_1_div_1_footer_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "footer", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "ds-comcol-page-content", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const communityPayload_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("content", communityPayload_r2.copyrightText)("hasInnerHtml", true);
  }
}
function CommunityPageComponent_div_0_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "ds-view-tracker", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "div", 7)(3, "header", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](4, "ds-comcol-page-header", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](5, CommunityPageComponent_div_0_div_1_div_1_ds_comcol_page_logo_5_Template, 3, 6, "ds-comcol-page-logo", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](6, "ds-comcol-page-handle", 11)(7, "ds-comcol-page-content", 12)(8, "ds-comcol-page-content", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](9, "ds-dso-edit-menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](10, "section", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](11, "ds-comcol-page-browse-by", 15)(12, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](13, CommunityPageComponent_div_0_div_1_div_1_footer_13_Template, 2, 2, "footer", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const communityPayload_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("object", communityPayload_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("name", ctx_r0.dsoNameService.getName(communityPayload_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r0.logoRD$);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("content", communityPayload_r2.handle)("title", "community.page.handle");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("content", communityPayload_r2.introductoryText)("hasInnerHtml", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("content", communityPayload_r2.sidebarText)("hasInnerHtml", true)("title", "community.page.news");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("id", communityPayload_r2.id)("contentType", communityPayload_r2.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", communityPayload_r2.copyrightText);
  }
}
function CommunityPageComponent_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, CommunityPageComponent_div_0_div_1_div_1_Template, 14, 13, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const communityRD_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().ngVar;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("@fadeInOut", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", communityRD_r3 == null ? null : communityRD_r3.payload);
  }
}
function CommunityPageComponent_div_0_ds_error_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "ds-error", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("message", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](1, 1, "error.community"));
  }
}
function CommunityPageComponent_div_0_ds_loading_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "ds-loading", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("message", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](1, 1, "loading.community"));
  }
}
function CommunityPageComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, CommunityPageComponent_div_0_div_1_Template, 2, 2, "div", 2)(2, CommunityPageComponent_div_0_ds_error_2_Template, 2, 3, "ds-error", 3)(3, CommunityPageComponent_div_0_ds_loading_3_Template, 2, 3, "ds-loading", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const communityRD_r3 = ctx.ngVar;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", communityRD_r3 == null ? null : communityRD_r3.hasSucceeded);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", communityRD_r3 == null ? null : communityRD_r3.hasFailed);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", communityRD_r3 == null ? null : communityRD_r3.isLoading);
  }
}
/**
 * This component represents a detail page for a single community
 */
class CommunityPageComponent {
  constructor(route, router, authService, authorizationDataService, dsoNameService) {
    this.route = route;
    this.router = router;
    this.authService = authService;
    this.authorizationDataService = authorizationDataService;
    this.dsoNameService = dsoNameService;
  }
  ngOnInit() {
    this.communityRD$ = this.route.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.map)(data => data.dso), (0,_core_shared_authorized_operators__WEBPACK_IMPORTED_MODULE_4__.redirectOn4xx)(this.router, this.authService));
    this.logoRD$ = this.communityRD$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.map)(rd => rd.payload), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.filter)(community => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_13__.hasValue)(community)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.mergeMap)(community => community.logo));
    this.communityPageRoute$ = this.communityRD$.pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_5__.getAllSucceededRemoteDataPayload)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.map)(community => (0,_community_page_routing_paths__WEBPACK_IMPORTED_MODULE_18__.getCommunityPageRoute)(community.id)));
    this.isCommunityAdmin$ = this.authorizationDataService.isAuthorized(_core_data_feature_authorization_feature_id__WEBPACK_IMPORTED_MODULE_3__.FeatureID.IsCommunityAdmin);
  }
  static {
    this.ɵfac = function CommunityPageComponent_Factory(t) {
      return new (t || CommunityPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_23__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_23__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_core_data_feature_authorization_authorization_data_service__WEBPACK_IMPORTED_MODULE_2__.AuthorizationDataService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_core_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_1__.DSONameService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineComponent"]({
      type: CommunityPageComponent,
      selectors: [["ds-base-community-page"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 3,
      consts: [["class", "container", 4, "ngVar"], [1, "container"], ["class", "community-page", 4, "ngIf"], [3, "message", 4, "ngIf"], [1, "community-page"], [4, "ngIf"], [3, "object"], [1, "d-flex", "flex-row", "border-bottom", "mb-4", "pb-4"], [1, "comcol-header", "mr-auto"], [3, "name"], [3, "logo", "alternateText", 4, "ngIf"], [3, "content", "title"], [3, "content", "hasInnerHtml"], [3, "content", "hasInnerHtml", "title"], [1, "comcol-page-browse-section"], [3, "id", "contentType"], ["class", "border-top my-5 pt-4", 4, "ngIf"], [3, "logo", "alternateText"], [1, "border-top", "my-5", "pt-4"], [3, "message"]],
      template: function CommunityPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](0, CommunityPageComponent_div_0_Template, 4, 3, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](1, "async");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngVar", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](1, 1, ctx.communityRD$));
        }
      },
      dependencies: [_shared_comcol_comcol_page_content_themed_comcol_page_content_component__WEBPACK_IMPORTED_MODULE_8__.ThemedComcolPageContentComponent, _shared_error_error_component__WEBPACK_IMPORTED_MODULE_14__.ErrorComponent, _shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_15__.ThemedLoadingComponent, _angular_common__WEBPACK_IMPORTED_MODULE_24__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__.TranslatePipe, _shared_comcol_comcol_page_browse_by_themed_comcol_page_browse_by_component__WEBPACK_IMPORTED_MODULE_7__.ThemedComcolPageBrowseByComponent, _shared_dso_page_dso_edit_menu_dso_edit_menu_component__WEBPACK_IMPORTED_MODULE_12__.DsoEditMenuComponent, _shared_comcol_comcol_page_handle_themed_comcol_page_handle_component__WEBPACK_IMPORTED_MODULE_9__.ThemedComcolPageHandleComponent, _shared_comcol_comcol_page_logo_comcol_page_logo_component__WEBPACK_IMPORTED_MODULE_11__.ComcolPageLogoComponent, _shared_comcol_comcol_page_header_comcol_page_header_component__WEBPACK_IMPORTED_MODULE_10__.ComcolPageHeaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_24__.AsyncPipe, _statistics_angulartics_dspace_view_tracker_component__WEBPACK_IMPORTED_MODULE_17__.ViewTrackerComponent, _shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_16__.VarDirective, _angular_router__WEBPACK_IMPORTED_MODULE_23__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_23__.RouterModule],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW11bml0eS1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBIiwiZmlsZSI6ImNvbW11bml0eS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi8iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tbXVuaXR5LXBhZ2UvY29tbXVuaXR5LXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQSxva0JBQW9rQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
      data: {
        animation: [_shared_animations_fade__WEBPACK_IMPORTED_MODULE_6__.fadeInOut]
      },
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 28126:
/*!*****************************************************************************************!*\
  !*** ./src/app/community-page/create-community-page/create-community-page.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateCommunityPageComponent: () => (/* binding */ CreateCommunityPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var _core_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/breadcrumbs/dso-name.service */ 96526);
/* harmony import */ var _core_data_community_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/data/community-data.service */ 46660);
/* harmony import */ var _core_data_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/data/request.service */ 32473);
/* harmony import */ var _core_services_route_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/route.service */ 27297);
/* harmony import */ var _core_shared_community_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/shared/community.model */ 10046);
/* harmony import */ var _shared_comcol_comcol_forms_create_comcol_page_create_comcol_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/comcol/comcol-forms/create-comcol-page/create-comcol-page.component */ 61084);
/* harmony import */ var _shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/loading/themed-loading.component */ 82394);
/* harmony import */ var _shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/notifications/notifications.service */ 69472);
/* harmony import */ var _shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/utils/var.directive */ 18226);
/* harmony import */ var _community_form_community_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../community-form/community-form.component */ 2076);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 14354);





















const _c0 = a0 => ({
  parent: a0
});
function CreateCommunityPageComponent_div_0_ng_container_3_h1_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "h1", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, "community.create.head"));
  }
}
function CreateCommunityPageComponent_div_0_ng_container_3_h1_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "h1", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const parent_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().ngVar;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](2, 1, "community.create.sub-head", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](4, _c0, ctx_r2.dsoNameService.getName(parent_r2))));
  }
}
function CreateCommunityPageComponent_div_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, CreateCommunityPageComponent_div_0_ng_container_3_h1_1_Template, 3, 3, "h1", 7)(2, CreateCommunityPageComponent_div_0_ng_container_3_h1_2_Template, 3, 6, "h1", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const parent_r2 = ctx.ngVar;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !parent_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", parent_r2);
  }
}
function CreateCommunityPageComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 1)(1, "div", 3)(2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, CreateCommunityPageComponent_div_0_ng_container_3_Template, 3, 2, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "ds-community-form", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("submitForm", function CreateCommunityPageComponent_div_0_Template_ds_community_form_submitForm_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r2.onSubmit($event));
    })("back", function CreateCommunityPageComponent_div_0_Template_ds_community_form_back_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r2.navigateToHome());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngVar", (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 2, ctx_r2.parentRD$)) == null ? null : tmp_1_0.payload);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("isCreation", true);
  }
}
function CreateCommunityPageComponent_ds_loading_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "ds-loading");
  }
}
/**
 * Component that represents the page where a user can create a new Community
 */
class CreateCommunityPageComponent extends _shared_comcol_comcol_forms_create_comcol_page_create_comcol_page_component__WEBPACK_IMPORTED_MODULE_5__.CreateComColPageComponent {
  constructor(communityDataService, dsoNameService, routeService, router, notificationsService, translate, requestService) {
    super(communityDataService, dsoNameService, communityDataService, routeService, router, notificationsService, translate, requestService);
    this.communityDataService = communityDataService;
    this.dsoNameService = dsoNameService;
    this.routeService = routeService;
    this.router = router;
    this.notificationsService = notificationsService;
    this.translate = translate;
    this.requestService = requestService;
    this.frontendURL = '/communities/';
    this.type = _core_shared_community_model__WEBPACK_IMPORTED_MODULE_4__.Community.type;
  }
  static {
    this.ɵfac = function CreateCommunityPageComponent_Factory(t) {
      return new (t || CreateCommunityPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_data_community_data_service__WEBPACK_IMPORTED_MODULE_1__.CommunityDataService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_0__.DSONameService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_services_route_service__WEBPACK_IMPORTED_MODULE_3__.RouteService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_7__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_data_request_service__WEBPACK_IMPORTED_MODULE_2__.RequestService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
      type: CreateCommunityPageComponent,
      selectors: [["ds-create-community"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵStandaloneFeature"]],
      decls: 5,
      vars: 6,
      consts: [["class", "container", 4, "ngIf"], [1, "container"], [4, "ngIf"], [1, "row"], [1, "col-12", "pb-4"], [4, "ngVar"], [3, "submitForm", "back", "isCreation"], ["id", "header", "class", "border-bottom p-2", 4, "ngIf"], ["id", "sub-header", "class", "border-bottom pb-2", 4, "ngIf"], ["id", "header", 1, "border-bottom", "p-2"], ["id", "sub-header", 1, "border-bottom", "pb-2"]],
      template: function CreateCommunityPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](0, CreateCommunityPageComponent_div_0_Template, 6, 4, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](1, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, CreateCommunityPageComponent_ds_loading_3_Template, 1, 0, "ds-loading", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](1, 2, ctx.isLoading$) === false);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 4, ctx.isLoading$));
        }
      },
      dependencies: [_community_form_community_form_component__WEBPACK_IMPORTED_MODULE_9__.CommunityFormComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslatePipe, _shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_8__.VarDirective, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.AsyncPipe, _shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_6__.ThemedLoadingComponent],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1jb21tdW5pdHktcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQSIsImZpbGUiOiJjcmVhdGUtY29tbXVuaXR5LXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqLyJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tbXVuaXR5LXBhZ2UvY3JlYXRlLWNvbW11bml0eS1wYWdlL2NyZWF0ZS1jb21tdW5pdHktcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBLHdsQkFBd2xCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi8iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 42388:
/*!*************************************************************************************!*\
  !*** ./src/app/community-page/create-community-page/create-community-page.guard.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createCommunityPageGuard: () => (/* binding */ createCommunityPageGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 17796);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 21252);
/* harmony import */ var _core_data_community_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/data/community-data.service */ 46660);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/shared/operators */ 55757);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/empty.util */ 82777);







/**
 * True when either NO parent ID query parameter has been provided, or the parent ID resolves to a valid parent community
 * Reroutes to a 404 page when the page cannot be activated
 */
const createCommunityPageGuard = (route, state, communityService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_core_data_community_data_service__WEBPACK_IMPORTED_MODULE_0__.CommunityDataService), router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)) => {
  const parentID = route.queryParams.parent;
  if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_2__.hasNoValue)(parentID)) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(true);
  }
  return communityService.findById(parentID).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_1__.getFirstCompletedRemoteData)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(communityRD => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_2__.hasValue)(communityRD) && communityRD.hasSucceeded && (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_2__.hasValue)(communityRD.payload)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(isValid => {
    if (!isValid) {
      router.navigate(['/404']);
    }
  }));
};

/***/ }),

/***/ 26994:
/*!*****************************************************************************************!*\
  !*** ./src/app/community-page/delete-community-page/delete-community-page.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeleteCommunityPageComponent: () => (/* binding */ DeleteCommunityPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var _core_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/breadcrumbs/dso-name.service */ 96526);
/* harmony import */ var _core_data_community_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/data/community-data.service */ 46660);
/* harmony import */ var _shared_btn_disabled_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/btn-disabled.directive */ 60456);
/* harmony import */ var _shared_comcol_comcol_forms_delete_comcol_page_delete_comcol_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/comcol/comcol-forms/delete-comcol-page/delete-comcol-page.component */ 55326);
/* harmony import */ var _shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/notifications/notifications.service */ 69472);
/* harmony import */ var _shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/utils/var.directive */ 18226);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 14354);















const _c0 = a0 => ({
  dso: a0
});
function DeleteCommunityPageComponent_ng_container_2_span_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 1, "community.delete.processing"), "");
  }
}
function DeleteCommunityPageComponent_ng_container_2_span_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 1, "community.delete.confirm"), "");
  }
}
function DeleteCommunityPageComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 3)(2, "h1", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 6)(9, "div", 7)(10, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](11, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DeleteCommunityPageComponent_ng_container_2_Template_button_click_10_listener() {
      const dso_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1).ngVar;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.onCancel(dso_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](16, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DeleteCommunityPageComponent_ng_container_2_Template_button_click_15_listener() {
      const dso_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1).ngVar;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.onConfirm(dso_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, DeleteCommunityPageComponent_ng_container_2_span_17_Template, 4, 3, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](18, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, DeleteCommunityPageComponent_ng_container_2_span_19_Template, 4, 3, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](20, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const dso_r2 = ctx.ngVar;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 7, "community.delete.head"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](7, 9, "community.delete.text", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](22, _c0, ctx_r2.dsoNameService.getName(dso_r2))));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dsBtnDisabled", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](11, 12, ctx_r2.processing$));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](14, 14, "community.delete.cancel"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dsBtnDisabled", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](16, 16, ctx_r2.processing$));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](18, 18, ctx_r2.processing$));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](20, 20, ctx_r2.processing$) !== true);
  }
}
/**
 * Component that represents the page where a user can delete an existing Community
 */
class DeleteCommunityPageComponent extends _shared_comcol_comcol_forms_delete_comcol_page_delete_comcol_page_component__WEBPACK_IMPORTED_MODULE_3__.DeleteComColPageComponent {
  constructor(dsoDataService, dsoNameService, router, route, notifications, translate) {
    super(dsoDataService, dsoNameService, router, route, notifications, translate);
    this.dsoDataService = dsoDataService;
    this.dsoNameService = dsoNameService;
    this.router = router;
    this.route = route;
    this.notifications = notifications;
    this.translate = translate;
    this.frontendURL = '/communities/';
  }
  static {
    this.ɵfac = function DeleteCommunityPageComponent_Factory(t) {
      return new (t || DeleteCommunityPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_data_community_data_service__WEBPACK_IMPORTED_MODULE_1__.CommunityDataService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_0__.DSONameService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_4__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: DeleteCommunityPageComponent,
      selectors: [["ds-delete-community"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵStandaloneFeature"]],
      decls: 4,
      vars: 3,
      consts: [[1, "container"], [1, "row"], [4, "ngVar"], [1, "col-12", "pb-4"], ["id", "header", 1, "border-bottom", "pb-2"], [1, "pb-2"], [1, "form-group", "row"], [1, "col", "text-right", "space-children-mr"], [1, "btn", "btn-outline-secondary", 3, "click", "dsBtnDisabled"], ["aria-hidden", "true", 1, "fas", "fa-times"], [1, "btn", "btn-danger", 3, "click", "dsBtnDisabled"], [4, "ngIf"], ["aria-hidden", "true", 1, "fas", "fa-circle-notch", "fa-spin"], ["aria-hidden", "true", 1, "fas", "fa-trash"]],
      template: function DeleteCommunityPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, DeleteCommunityPageComponent_ng_container_2_Template, 21, 24, "ng-container", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          let tmp_0_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngVar", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 1, ctx.dsoRD$)) == null ? null : tmp_0_0.payload);
        }
      },
      dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe, _shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_5__.VarDirective, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _shared_btn_disabled_directive__WEBPACK_IMPORTED_MODULE_2__.BtnDisabledDirective],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbGV0ZS1jb21tdW5pdHktcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQSIsImZpbGUiOiJkZWxldGUtY29tbXVuaXR5LXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqLyJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tbXVuaXR5LXBhZ2UvZGVsZXRlLWNvbW11bml0eS1wYWdlL2RlbGV0ZS1jb21tdW5pdHktcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBLHdsQkFBd2xCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi8iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 90187:
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/community-page/sections/sub-com-col-section/sub-collection-list/community-page-sub-collection-list.component.ts ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CommunityPageSubCollectionListComponent: () => (/* binding */ CommunityPageSubCollectionListComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 83485);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 27639);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 84975);
/* harmony import */ var _core_cache_models_sort_options_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/cache/models/sort-options.model */ 6238);
/* harmony import */ var _core_data_collection_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/data/collection-data.service */ 6983);
/* harmony import */ var _core_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/pagination/pagination.service */ 76896);
/* harmony import */ var _core_shared_community_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/shared/community.model */ 10046);
/* harmony import */ var _shared_animations_fade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/animations/fade */ 50332);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/empty.util */ 82777);
/* harmony import */ var _shared_error_error_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/error/error.component */ 79632);
/* harmony import */ var _shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/loading/themed-loading.component */ 82394);
/* harmony import */ var _shared_object_collection_object_collection_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/object-collection/object-collection.component */ 14828);
/* harmony import */ var _shared_pagination_pagination_component_options_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/pagination/pagination-component-options.model */ 23401);
/* harmony import */ var _shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/utils/var.directive */ 18226);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 14354);





















function CommunityPageSubCollectionListComponent_ng_container_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "ds-viewable-collection", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const subCollectionsRD_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().ngVar;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 6, "community.sub-collection-list.head"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("config", ctx_r1.config)("sortConfig", ctx_r1.sortConfig)("objects", subCollectionsRD_r1)("hideGear", false);
  }
}
function CommunityPageSubCollectionListComponent_ng_container_0_ds_error_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "ds-error", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("message", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](1, 1, "error.sub-collections"));
  }
}
function CommunityPageSubCollectionListComponent_ng_container_0_ds_loading_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "ds-loading", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("message", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](1, 1, "loading.sub-collections"));
  }
}
function CommunityPageSubCollectionListComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, CommunityPageSubCollectionListComponent_ng_container_0_div_1_Template, 5, 8, "div", 1)(2, CommunityPageSubCollectionListComponent_ng_container_0_ds_error_2_Template, 2, 3, "ds-error", 2)(3, CommunityPageSubCollectionListComponent_ng_container_0_ds_loading_3_Template, 2, 3, "ds-loading", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const subCollectionsRD_r1 = ctx.ngVar;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", (subCollectionsRD_r1 == null ? null : subCollectionsRD_r1.hasSucceeded) && (subCollectionsRD_r1 == null ? null : subCollectionsRD_r1.payload.totalElements) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", subCollectionsRD_r1 == null ? null : subCollectionsRD_r1.hasFailed);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", subCollectionsRD_r1 == null ? null : subCollectionsRD_r1.isLoading);
  }
}
class CommunityPageSubCollectionListComponent {
  constructor(cds, paginationService, route) {
    this.cds = cds;
    this.paginationService = paginationService;
    this.route = route;
    /**
     * The pagination id
     */
    this.pageId = 'cmcl';
    /**
     * A list of remote data objects of communities' collections
     */
    this.subCollectionsRDObs = new rxjs__WEBPACK_IMPORTED_MODULE_12__.BehaviorSubject({});
    this.subscriptions = [];
  }
  ngOnInit() {
    this.config = new _shared_pagination_pagination_component_options_model__WEBPACK_IMPORTED_MODULE_9__.PaginationComponentOptions();
    this.config.id = this.pageId;
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_5__.hasValue)(this.pageSize)) {
      this.config.pageSize = this.pageSize;
    } else {
      this.config.pageSize = this.route.snapshot.queryParams[this.pageId + '.rpp'] ?? this.config.pageSize;
    }
    this.config.currentPage = this.route.snapshot.queryParams[this.pageId + '.page'] ?? 1;
    this.sortConfig = new _core_cache_models_sort_options_model__WEBPACK_IMPORTED_MODULE_0__.SortOptions('dc.title', _core_cache_models_sort_options_model__WEBPACK_IMPORTED_MODULE_0__.SortDirection[this.route.snapshot.queryParams[this.pageId + '.sd']] ?? _core_cache_models_sort_options_model__WEBPACK_IMPORTED_MODULE_0__.SortDirection.ASC);
    this.initPage();
  }
  /**
   * Initialise the list of collections
   */
  initPage() {
    const pagination$ = this.paginationService.getCurrentPagination(this.config.id, this.config);
    const sort$ = this.paginationService.getCurrentSort(this.config.id, this.sortConfig);
    this.subscriptions.push((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.combineLatest)([pagination$, sort$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.switchMap)(([currentPagination, currentSort]) => {
      return this.cds.findByParent(this.community.id, {
        currentPage: currentPagination.currentPage,
        elementsPerPage: currentPagination.pageSize,
        sort: {
          field: currentSort.field,
          direction: currentSort.direction
        }
      });
    })).subscribe(results => {
      this.subCollectionsRDObs.next(results);
    }));
  }
  ngOnDestroy() {
    this.paginationService.clearPagination(this.config?.id);
    this.subscriptions.map(subscription => subscription.unsubscribe());
  }
  static {
    this.ɵfac = function CommunityPageSubCollectionListComponent_Factory(t) {
      return new (t || CommunityPageSubCollectionListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_core_data_collection_data_service__WEBPACK_IMPORTED_MODULE_1__.CollectionDataService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_core_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_2__.PaginationService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.ActivatedRoute));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
      type: CommunityPageSubCollectionListComponent,
      selectors: [["ds-base-community-page-sub-collection-list"]],
      inputs: {
        community: "community",
        pageSize: "pageSize"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 3,
      consts: [[4, "ngVar"], [4, "ngIf"], [3, "message", 4, "ngIf"], [3, "config", "sortConfig", "objects", "hideGear"], [3, "message"]],
      template: function CommunityPageSubCollectionListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](0, CommunityPageSubCollectionListComponent_ng_container_0_Template, 4, 3, "ng-container", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](1, "async");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngVar", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](1, 1, ctx.subCollectionsRDObs));
        }
      },
      dependencies: [_shared_object_collection_object_collection_component__WEBPACK_IMPORTED_MODULE_8__.ObjectCollectionComponent, _shared_error_error_component__WEBPACK_IMPORTED_MODULE_6__.ErrorComponent, _shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_7__.ThemedLoadingComponent, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_16__.AsyncPipe, _shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_10__.VarDirective],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW11bml0eS1wYWdlLXN1Yi1jb2xsZWN0aW9uLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUEiLCJmaWxlIjoiY29tbXVuaXR5LXBhZ2Utc3ViLWNvbGxlY3Rpb24tbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tbXVuaXR5LXBhZ2Uvc2VjdGlvbnMvc3ViLWNvbS1jb2wtc2VjdGlvbi9zdWItY29sbGVjdGlvbi1saXN0L2NvbW11bml0eS1wYWdlLXN1Yi1jb2xsZWN0aW9uLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQSx3bkJBQXduQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
      data: {
        animation: [_shared_animations_fade__WEBPACK_IMPORTED_MODULE_4__.fadeIn]
      }
    });
  }
}

/***/ }),

/***/ 67699:
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/community-page/sections/sub-com-col-section/sub-collection-list/themed-community-page-sub-collection-list.component.ts ***!
  \****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemedCollectionPageSubCollectionListComponent: () => (/* binding */ ThemedCollectionPageSubCollectionListComponent)
/* harmony export */ });
/* harmony import */ var _core_shared_community_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/shared/community.model */ 10046);
/* harmony import */ var _shared_theme_support_themed_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/theme-support/themed.component */ 8886);
/* harmony import */ var _community_page_sub_collection_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./community-page-sub-collection-list.component */ 90187);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 90310);




const _c0 = ["*"];
function ThemedCollectionPageSubCollectionListComponent_ng_template_0_Template(rf, ctx) {}
class ThemedCollectionPageSubCollectionListComponent extends _shared_theme_support_themed_component__WEBPACK_IMPORTED_MODULE_1__.ThemedComponent {
  constructor() {
    super(...arguments);
    this.inAndOutputNames = ['community', 'pageSize'];
  }
  getComponentName() {
    return 'CommunityPageSubCollectionListComponent';
  }
  importThemedComponent(themeName) {
    return __webpack_require__(60771)(`./${themeName}/app/community-page/sections/sub-com-col-section/sub-collection-list/community-page-sub-collection-list.component`);
  }
  importUnthemedComponent() {
    return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./community-page-sub-collection-list.component */ 90187));
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵThemedCollectionPageSubCollectionListComponent_BaseFactory;
      return function ThemedCollectionPageSubCollectionListComponent_Factory(t) {
        return (ɵThemedCollectionPageSubCollectionListComponent_BaseFactory || (ɵThemedCollectionPageSubCollectionListComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](ThemedCollectionPageSubCollectionListComponent)))(t || ThemedCollectionPageSubCollectionListComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: ThemedCollectionPageSubCollectionListComponent,
      selectors: [["ds-community-page-sub-collection-list"]],
      inputs: {
        community: "community",
        pageSize: "pageSize"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
      ngContentSelectors: _c0,
      decls: 5,
      vars: 0,
      consts: [["vcr", ""], ["content", ""]],
      template: function ThemedCollectionPageSubCollectionListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ThemedCollectionPageSubCollectionListComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", null, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      },
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 40523:
/*!**********************************************************************************************!*\
  !*** ./src/app/community-page/sections/sub-com-col-section/sub-com-col-section.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SubComColSectionComponent: () => (/* binding */ SubComColSectionComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var _sub_collection_list_themed_community_page_sub_collection_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sub-collection-list/themed-community-page-sub-collection-list.component */ 67699);
/* harmony import */ var _sub_community_list_themed_community_page_sub_community_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sub-community-list/themed-community-page-sub-community-list.component */ 18607);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 14354);







function SubComColSectionComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "ds-community-page-sub-community-list", 1)(2, "ds-community-page-sub-collection-list", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const community_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("community", community_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("community", community_r1);
  }
}
class SubComColSectionComponent {
  constructor(route) {
    this.route = route;
  }
  ngOnInit() {
    this.community$ = this.route.parent.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(data => data.dso.payload));
  }
  static {
    this.ɵfac = function SubComColSectionComponent_Factory(t) {
      return new (t || SubComColSectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: SubComColSectionComponent,
      selectors: [["ds-sub-com-col-section"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 3,
      consts: [[4, "ngIf"], [3, "community"]],
      template: function SubComColSectionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, SubComColSectionComponent_ng_container_0_Template, 3, 2, "ng-container", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 1, ctx.community$));
        }
      },
      dependencies: [_sub_community_list_themed_community_page_sub_community_list_component__WEBPACK_IMPORTED_MODULE_1__.ThemedCommunityPageSubCommunityListComponent, _sub_collection_list_themed_community_page_sub_collection_list_component__WEBPACK_IMPORTED_MODULE_0__.ThemedCollectionPageSubCollectionListComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1Yi1jb20tY29sLXNlY3Rpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUEiLCJmaWxlIjoic3ViLWNvbS1jb2wtc2VjdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tbXVuaXR5LXBhZ2Uvc2VjdGlvbnMvc3ViLWNvbS1jb2wtc2VjdGlvbi9zdWItY29tLWNvbC1zZWN0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBO0FBQ0EsZ2xCQUFnbEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqLyJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 57525:
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/community-page/sections/sub-com-col-section/sub-community-list/community-page-sub-community-list.component.ts ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CommunityPageSubCommunityListComponent: () => (/* binding */ CommunityPageSubCommunityListComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 83485);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 27639);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 84975);
/* harmony import */ var _core_cache_models_sort_options_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/cache/models/sort-options.model */ 6238);
/* harmony import */ var _core_data_community_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/data/community-data.service */ 46660);
/* harmony import */ var _core_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/pagination/pagination.service */ 76896);
/* harmony import */ var _core_shared_community_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/shared/community.model */ 10046);
/* harmony import */ var _shared_animations_fade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/animations/fade */ 50332);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/empty.util */ 82777);
/* harmony import */ var _shared_error_error_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/error/error.component */ 79632);
/* harmony import */ var _shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/loading/themed-loading.component */ 82394);
/* harmony import */ var _shared_object_collection_object_collection_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/object-collection/object-collection.component */ 14828);
/* harmony import */ var _shared_pagination_pagination_component_options_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/pagination/pagination-component-options.model */ 23401);
/* harmony import */ var _shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/utils/var.directive */ 18226);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 14354);





















function CommunityPageSubCommunityListComponent_ng_container_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "ds-viewable-collection", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const subCommunitiesRD_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().ngVar;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 6, "community.sub-community-list.head"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("config", ctx_r1.config)("sortConfig", ctx_r1.sortConfig)("objects", subCommunitiesRD_r1)("hideGear", false);
  }
}
function CommunityPageSubCommunityListComponent_ng_container_0_ds_error_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "ds-error", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("message", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](1, 1, "error.sub-communities"));
  }
}
function CommunityPageSubCommunityListComponent_ng_container_0_ds_loading_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "ds-loading", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("message", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](1, 1, "loading.sub-communities"));
  }
}
function CommunityPageSubCommunityListComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, CommunityPageSubCommunityListComponent_ng_container_0_div_1_Template, 5, 8, "div", 1)(2, CommunityPageSubCommunityListComponent_ng_container_0_ds_error_2_Template, 2, 3, "ds-error", 2)(3, CommunityPageSubCommunityListComponent_ng_container_0_ds_loading_3_Template, 2, 3, "ds-loading", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const subCommunitiesRD_r1 = ctx.ngVar;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", (subCommunitiesRD_r1 == null ? null : subCommunitiesRD_r1.hasSucceeded) && (subCommunitiesRD_r1 == null ? null : subCommunitiesRD_r1.payload.totalElements) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", subCommunitiesRD_r1 == null ? null : subCommunitiesRD_r1.hasFailed);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", subCommunitiesRD_r1 == null ? null : subCommunitiesRD_r1.isLoading);
  }
}
/**
 * Component to render the sub-communities of a Community
 */
class CommunityPageSubCommunityListComponent {
  constructor(cds, paginationService, route) {
    this.cds = cds;
    this.paginationService = paginationService;
    this.route = route;
    /**
     * The pagination id
     */
    this.pageId = 'cmscm';
    /**
     * A list of remote data objects of communities' collections
     */
    this.subCommunitiesRDObs = new rxjs__WEBPACK_IMPORTED_MODULE_12__.BehaviorSubject({});
    this.subscriptions = [];
  }
  ngOnInit() {
    this.config = new _shared_pagination_pagination_component_options_model__WEBPACK_IMPORTED_MODULE_9__.PaginationComponentOptions();
    this.config.id = this.pageId;
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_5__.hasValue)(this.pageSize)) {
      this.config.pageSize = this.pageSize;
    } else {
      this.config.pageSize = this.route.snapshot.queryParams[this.pageId + '.rpp'] ?? this.config.pageSize;
    }
    this.config.currentPage = this.route.snapshot.queryParams[this.pageId + '.page'] ?? 1;
    this.sortConfig = new _core_cache_models_sort_options_model__WEBPACK_IMPORTED_MODULE_0__.SortOptions('dc.title', _core_cache_models_sort_options_model__WEBPACK_IMPORTED_MODULE_0__.SortDirection[this.route.snapshot.queryParams[this.pageId + '.sd']] ?? _core_cache_models_sort_options_model__WEBPACK_IMPORTED_MODULE_0__.SortDirection.ASC);
    this.initPage();
  }
  /**
   * Update the list of sub-communities
   */
  initPage() {
    const pagination$ = this.paginationService.getCurrentPagination(this.config.id, this.config);
    const sort$ = this.paginationService.getCurrentSort(this.config.id, this.sortConfig);
    this.subscriptions.push((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.combineLatest)([pagination$, sort$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.switchMap)(([currentPagination, currentSort]) => {
      return this.cds.findByParent(this.community.id, {
        currentPage: currentPagination.currentPage,
        elementsPerPage: currentPagination.pageSize,
        sort: {
          field: currentSort.field,
          direction: currentSort.direction
        }
      });
    })).subscribe(results => {
      this.subCommunitiesRDObs.next(results);
    }));
  }
  ngOnDestroy() {
    this.paginationService.clearPagination(this.config?.id);
    this.subscriptions.map(subscription => subscription.unsubscribe());
  }
  static {
    this.ɵfac = function CommunityPageSubCommunityListComponent_Factory(t) {
      return new (t || CommunityPageSubCommunityListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_core_data_community_data_service__WEBPACK_IMPORTED_MODULE_1__.CommunityDataService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_core_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_2__.PaginationService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.ActivatedRoute));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
      type: CommunityPageSubCommunityListComponent,
      selectors: [["ds-base-community-page-sub-community-list"]],
      inputs: {
        community: "community",
        pageSize: "pageSize"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 3,
      consts: [[4, "ngVar"], [4, "ngIf"], [3, "message", 4, "ngIf"], [3, "config", "sortConfig", "objects", "hideGear"], [3, "message"]],
      template: function CommunityPageSubCommunityListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](0, CommunityPageSubCommunityListComponent_ng_container_0_Template, 4, 3, "ng-container", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](1, "async");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngVar", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](1, 1, ctx.subCommunitiesRDObs));
        }
      },
      dependencies: [_shared_error_error_component__WEBPACK_IMPORTED_MODULE_6__.ErrorComponent, _shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_7__.ThemedLoadingComponent, _shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_10__.VarDirective, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _shared_object_collection_object_collection_component__WEBPACK_IMPORTED_MODULE_8__.ObjectCollectionComponent, _angular_common__WEBPACK_IMPORTED_MODULE_16__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslatePipe],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW11bml0eS1wYWdlLXN1Yi1jb21tdW5pdHktbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQSIsImZpbGUiOiJjb21tdW5pdHktcGFnZS1zdWItY29tbXVuaXR5LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqLyJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tbXVuaXR5LXBhZ2Uvc2VjdGlvbnMvc3ViLWNvbS1jb2wtc2VjdGlvbi9zdWItY29tbXVuaXR5LWxpc3QvY29tbXVuaXR5LXBhZ2Utc3ViLWNvbW11bml0eS1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBO0FBQ0Esd25CQUF3bkIiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqLyJdLCJzb3VyY2VSb290IjoiIn0= */"],
      data: {
        animation: [_shared_animations_fade__WEBPACK_IMPORTED_MODULE_4__.fadeIn]
      }
    });
  }
}

/***/ }),

/***/ 18607:
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/community-page/sections/sub-com-col-section/sub-community-list/themed-community-page-sub-community-list.component.ts ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemedCommunityPageSubCommunityListComponent: () => (/* binding */ ThemedCommunityPageSubCommunityListComponent)
/* harmony export */ });
/* harmony import */ var _core_shared_community_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/shared/community.model */ 10046);
/* harmony import */ var _shared_theme_support_themed_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/theme-support/themed.component */ 8886);
/* harmony import */ var _community_page_sub_community_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./community-page-sub-community-list.component */ 57525);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 90310);




const _c0 = ["*"];
function ThemedCommunityPageSubCommunityListComponent_ng_template_0_Template(rf, ctx) {}
class ThemedCommunityPageSubCommunityListComponent extends _shared_theme_support_themed_component__WEBPACK_IMPORTED_MODULE_1__.ThemedComponent {
  constructor() {
    super(...arguments);
    this.inAndOutputNames = ['community', 'pageSize'];
  }
  getComponentName() {
    return 'CommunityPageSubCommunityListComponent';
  }
  importThemedComponent(themeName) {
    return __webpack_require__(24427)(`./${themeName}/app/community-page/sections/sub-com-col-section/sub-community-list/community-page-sub-community-list.component`);
  }
  importUnthemedComponent() {
    return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./community-page-sub-community-list.component */ 57525));
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵThemedCommunityPageSubCommunityListComponent_BaseFactory;
      return function ThemedCommunityPageSubCommunityListComponent_Factory(t) {
        return (ɵThemedCommunityPageSubCommunityListComponent_BaseFactory || (ɵThemedCommunityPageSubCommunityListComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](ThemedCommunityPageSubCommunityListComponent)))(t || ThemedCommunityPageSubCommunityListComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: ThemedCommunityPageSubCommunityListComponent,
      selectors: [["ds-community-page-sub-community-list"]],
      inputs: {
        community: "community",
        pageSize: "pageSize"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
      ngContentSelectors: _c0,
      decls: 5,
      vars: 0,
      consts: [["vcr", ""], ["content", ""]],
      template: function ThemedCommunityPageSubCommunityListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ThemedCommunityPageSubCommunityListComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", null, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      },
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 68648:
/*!*******************************************************************!*\
  !*** ./src/app/community-page/themed-community-page.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemedCommunityPageComponent: () => (/* binding */ ThemedCommunityPageComponent)
/* harmony export */ });
/* harmony import */ var _shared_theme_support_themed_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/theme-support/themed.component */ 8886);
/* harmony import */ var _community_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./community-page.component */ 5548);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);



const _c0 = ["*"];
function ThemedCommunityPageComponent_ng_template_0_Template(rf, ctx) {}
/**
 * Themed wrapper for CommunityPageComponent
 */
class ThemedCommunityPageComponent extends _shared_theme_support_themed_component__WEBPACK_IMPORTED_MODULE_0__.ThemedComponent {
  getComponentName() {
    return 'CommunityPageComponent';
  }
  importThemedComponent(themeName) {
    return __webpack_require__(76098)(`./${themeName}/app/community-page/community-page.component`);
  }
  importUnthemedComponent() {
    return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./community-page.component */ 5548));
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵThemedCommunityPageComponent_BaseFactory;
      return function ThemedCommunityPageComponent_Factory(t) {
        return (ɵThemedCommunityPageComponent_BaseFactory || (ɵThemedCommunityPageComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](ThemedCommunityPageComponent)))(t || ThemedCommunityPageComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ThemedCommunityPageComponent,
      selectors: [["ds-community-page"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      ngContentSelectors: _c0,
      decls: 5,
      vars: 0,
      consts: [["vcr", ""], ["content", ""]],
      template: function ThemedCommunityPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ThemedCommunityPageComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
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

/***/ 72059:
/*!**************************************************************!*\
  !*** ./src/app/core/breadcrumbs/i18n-breadcrumb.resolver.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

/***/ 76098:
/*!******************************************************************************************************!*\
  !*** ./src/themes/ lazy ^\.\/.*\/app\/community\-page\/community\-page\.component$ namespace object ***!
  \******************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./custom/app/community-page/community-page.component": [
		17431,
		"src_themes_custom_app_community-page_community-page_component_ts"
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
webpackAsyncContext.id = 76098;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 60771:
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./src/themes/ lazy ^\.\/.*\/app\/community\-page\/sections\/sub\-com\-col\-section\/sub\-collection\-list\/community\-page\-sub\-collection\-list\.component$ namespace object ***!
  \**************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./custom/app/community-page/sections/sub-com-col-section/sub-collection-list/community-page-sub-collection-list.component": [
		71082,
		"src_themes_custom_app_community-page_sections_sub-com-col-section_sub-collection-list_communi-ea924d"
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
webpackAsyncContext.id = 60771;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 24427:
/*!************************************************************************************************************************************************************************************!*\
  !*** ./src/themes/ lazy ^\.\/.*\/app\/community\-page\/sections\/sub\-com\-col\-section\/sub\-community\-list\/community\-page\-sub\-community\-list\.component$ namespace object ***!
  \************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./custom/app/community-page/sections/sub-com-col-section/sub-community-list/community-page-sub-community-list.component": [
		98836,
		"src_themes_custom_app_community-page_sections_sub-com-col-section_sub-community-list_communit-279ab0"
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
webpackAsyncContext.id = 24427;
module.exports = webpackAsyncContext;

/***/ })

}]);
//# sourceMappingURL=src_app_community-page_community-page-routes_ts.js.map