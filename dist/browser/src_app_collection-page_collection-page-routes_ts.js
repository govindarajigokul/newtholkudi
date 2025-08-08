(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_app_collection-page_collection-page-routes_ts"],{

/***/ 70087:
/*!******************************************************************************!*\
  !*** ./src/app/collection-page/collection-form/collection-form.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CollectionFormComponent: () => (/* binding */ CollectionFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-dynamic-forms/core */ 94403);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var src_app_shared_empty_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/empty.util */ 82777);
/* harmony import */ var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/auth/auth.service */ 67116);
/* harmony import */ var _core_cache_object_cache_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/cache/object-cache.service */ 41684);
/* harmony import */ var _core_data_collection_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/data/collection-data.service */ 6983);
/* harmony import */ var _core_data_entity_type_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/data/entity-type-data.service */ 30077);
/* harmony import */ var _core_data_request_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/data/request.service */ 32473);
/* harmony import */ var _core_shared_collection_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/shared/collection.model */ 6041);
/* harmony import */ var _core_shared_item_relationships_item_type_resource_type__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/shared/item-relationships/item-type.resource-type */ 49623);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/shared/operators */ 55757);
/* harmony import */ var _shared_comcol_comcol_forms_comcol_form_comcol_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/comcol/comcol-forms/comcol-form/comcol-form.component */ 61434);
/* harmony import */ var _shared_comcol_comcol_page_logo_comcol_page_logo_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/comcol/comcol-page-logo/comcol-page-logo.component */ 31136);
/* harmony import */ var _shared_form_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/form/form.component */ 99386);
/* harmony import */ var _shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/notifications/notifications.service */ 69472);
/* harmony import */ var _shared_upload_uploader_uploader_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/upload/uploader/uploader.component */ 18430);
/* harmony import */ var _shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/utils/var.directive */ 18226);
/* harmony import */ var _collection_form_models__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./collection-form.models */ 31648);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 49966);































function CollectionFormComponent_ng_container_6_div_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 12)(1, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function CollectionFormComponent_ng_container_6_div_1_div_5_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.confirmLogoDeleteWithModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](3, 1, "community.edit.logo.delete.title"), " ");
  }
}
function CollectionFormComponent_ng_container_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 7)(1, "div", 1)(2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](3, "ds-comcol-page-logo", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](5, CollectionFormComponent_ng_container_6_div_1_div_5_Template, 4, 3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const logo_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().ngVar;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("alternateText", ctx_r1.type.value + ".logo.alt")("logo", logo_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", logo_r3);
  }
}
function CollectionFormComponent_ng_container_6_div_2_ds_uploader_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "ds-uploader", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("onCompleteItem", function CollectionFormComponent_ng_container_6_div_2_ds_uploader_1_Template_ds_uploader_onCompleteItem_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.onCompleteItem());
    })("onUploadError", function CollectionFormComponent_ng_container_6_div_2_ds_uploader_1_Template_ds_uploader_onUploadError_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.onUploadError());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ariaLabel", ctx_r1.type.value + ".browse.logo")("dropMsg", ctx_r1.type.value + ".edit.logo.upload")("dropOverDocumentMsg", ctx_r1.type.value + ".edit.logo.upload")("enableDragOverDocument", true)("uploadFilesOptions", ctx_r1.uploadFilesOptions);
  }
}
function CollectionFormComponent_ng_container_6_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, CollectionFormComponent_ng_container_6_div_2_ds_uploader_1_Template, 1, 5, "ds-uploader", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, ctx_r1.initializedUploaderOptions));
  }
}
function CollectionFormComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, CollectionFormComponent_ng_container_6_div_1_Template, 6, 3, "div", 5)(2, CollectionFormComponent_ng_container_6_div_2_Template, 3, 3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const logo_r3 = ctx.ngVar;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", logo_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", !logo_r3);
  }
}
function CollectionFormComponent_ds_form_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "ds-form", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("submitForm", function CollectionFormComponent_ds_form_8_Template_ds_form_submitForm_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.onSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function CollectionFormComponent_ds_form_8_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.back.emit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](2, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("formId", "comcol-form-id")("formModel", ctx_r1.formModel)("displayCancel", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](4, 4, ctx_r1.type.value + ".edit.return"), " ");
  }
}
/**
 * Form used for creating and editing collections
 */
class CollectionFormComponent extends _shared_comcol_comcol_forms_comcol_form_comcol_form_component__WEBPACK_IMPORTED_MODULE_9__.ComColFormComponent {
  constructor(formService, translate, notificationsService, authService, dsoService, requestService, objectCache, entityTypeService, chd, modalService) {
    super(formService, translate, notificationsService, authService, requestService, objectCache, modalService);
    this.formService = formService;
    this.translate = translate;
    this.notificationsService = notificationsService;
    this.authService = authService;
    this.dsoService = dsoService;
    this.requestService = requestService;
    this.objectCache = objectCache;
    this.entityTypeService = entityTypeService;
    this.chd = chd;
    this.modalService = modalService;
    /**
     * @type {Collection} A new collection when a collection is being created, an existing Input collection when a collection is being edited
     */
    this.dso = new _core_shared_collection_model__WEBPACK_IMPORTED_MODULE_6__.Collection();
    /**
     * @type {Collection.type} This is a collection-type form
     */
    this.type = _core_shared_collection_model__WEBPACK_IMPORTED_MODULE_6__.Collection.type;
    /**
     * The dynamic form field used for entity type selection
     * @type {DynamicSelectModel<string>}
     */
    this.entityTypeSelection = new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_17__.DynamicSelectModel(_collection_form_models__WEBPACK_IMPORTED_MODULE_15__.collectionFormEntityTypeSelectionConfig);
  }
  ngOnInit() {
    if ((0,src_app_shared_empty_util__WEBPACK_IMPORTED_MODULE_0__.hasNoValue)(this.formModel) && (0,src_app_shared_empty_util__WEBPACK_IMPORTED_MODULE_0__.isNotNull)(this.dso)) {
      this.initializeForm();
    }
  }
  /**
   * Detect changes to the dso and initialize the form,
   * if the dso changes, exists and it is not the first change
   */
  ngOnChanges(changes) {
    const dsoChange = changes.dso;
    if (this.dso && dsoChange && !dsoChange.isFirstChange()) {
      this.initializeForm();
    }
  }
  initializeForm() {
    let currentRelationshipValue;
    if (this.dso && this.dso.metadata) {
      currentRelationshipValue = this.dso.metadata['dspace.entity.type'];
    }
    const entities$ = this.entityTypeService.findAll({
      elementsPerPage: 100,
      currentPage: 1
    }).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_8__.getFirstSucceededRemoteListPayload)());
    // retrieve all entity types to populate the dropdowns selection
    entities$.subscribe(entityTypes => {
      entityTypes = entityTypes.filter(type => type.label !== _core_shared_item_relationships_item_type_resource_type__WEBPACK_IMPORTED_MODULE_7__.NONE_ENTITY_TYPE);
      entityTypes.forEach((type, index) => {
        this.entityTypeSelection.add({
          disabled: false,
          label: type.label,
          value: type.label
        });
        if (currentRelationshipValue && currentRelationshipValue.length > 0 && currentRelationshipValue[0].value === type.label) {
          this.entityTypeSelection.select(index);
          this.entityTypeSelection.disabled = true;
        }
      });
      this.formModel = entityTypes.length === 0 ? _collection_form_models__WEBPACK_IMPORTED_MODULE_15__.collectionFormModels : [..._collection_form_models__WEBPACK_IMPORTED_MODULE_15__.collectionFormModels, this.entityTypeSelection];
      super.ngOnInit();
      this.chd.detectChanges();
    });
  }
  static {
    this.ɵfac = function CollectionFormComponent_Factory(t) {
      return new (t || CollectionFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_17__.DynamicFormService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_12__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_core_data_collection_data_service__WEBPACK_IMPORTED_MODULE_3__.CollectionDataService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_core_data_request_service__WEBPACK_IMPORTED_MODULE_5__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_core_cache_object_cache_service__WEBPACK_IMPORTED_MODULE_2__.ObjectCacheService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_core_data_entity_type_data_service__WEBPACK_IMPORTED_MODULE_4__.EntityTypeDataService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_16__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__.NgbModal));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineComponent"]({
      type: CollectionFormComponent,
      selectors: [["ds-collection-form"]],
      inputs: {
        dso: "dso"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵStandaloneFeature"]],
      decls: 9,
      vars: 7,
      consts: [[1, "container-fluid"], [1, "row"], [1, "col-12", "d-inline-block", "mb-1"], [4, "ngVar"], [3, "formId", "formModel", "displayCancel", "submitForm", 4, "ngIf"], ["class", "col-12 d-inline-block alert", "id", "logo-section", 4, "ngIf"], ["class", "col-12 d-inline-block", 4, "ngIf"], ["id", "logo-section", 1, "col-12", "d-inline-block", "alert"], [1, "col-8", "d-inline-block"], [3, "alternateText", "logo"], [1, "col-4", "d-inline-block"], ["class", "float-right", 4, "ngIf"], [1, "float-right"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], [1, "col-12", "d-inline-block"], [3, "ariaLabel", "dropMsg", "dropOverDocumentMsg", "enableDragOverDocument", "uploadFilesOptions", "onCompleteItem", "onUploadError", 4, "ngIf"], [3, "onCompleteItem", "onUploadError", "ariaLabel", "dropMsg", "dropOverDocumentMsg", "enableDragOverDocument", "uploadFilesOptions"], [3, "submitForm", "formId", "formModel", "displayCancel"], ["before", "", "type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], ["aria-hidden", "true", 1, "fas", "fa-arrow-left"]],
      template: function CollectionFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](5, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](6, CollectionFormComponent_ng_container_6_Template, 3, 2, "ng-container", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](7, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](8, CollectionFormComponent_ds_form_8_Template, 5, 6, "ds-form", 4);
        }
        if (rf & 2) {
          let tmp_1_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](5, 3, ctx.type.value + ".edit.logo.label"));
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngVar", (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](7, 5, ctx.dso == null ? null : ctx.dso.logo)) == null ? null : tmp_1_0.payload);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.formModel);
        }
      },
      dependencies: [_shared_form_form_component__WEBPACK_IMPORTED_MODULE_11__.FormComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslatePipe, _shared_upload_uploader_uploader_component__WEBPACK_IMPORTED_MODULE_13__.UploaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_20__.AsyncPipe, _shared_comcol_comcol_page_logo_comcol_page_logo_component__WEBPACK_IMPORTED_MODULE_10__.ComcolPageLogoComponent, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgIf, _shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_14__.VarDirective],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbWNvbC1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBIiwiZmlsZSI6ImNvbWNvbC1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi8iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbWNvbC9jb21jb2wtZm9ybXMvY29tY29sLWZvcm0vY29tY29sLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQSw0akJBQTRqQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 31648:
/*!***************************************************************************!*\
  !*** ./src/app/collection-page/collection-form/collection-form.models.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   collectionFormEntityTypeSelectionConfig: () => (/* binding */ collectionFormEntityTypeSelectionConfig),
/* harmony export */   collectionFormModels: () => (/* binding */ collectionFormModels)
/* harmony export */ });
/* harmony import */ var _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-dynamic-forms/core */ 94403);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 88280);


const collectionFormEntityTypeSelectionConfig = {
  id: 'entityType',
  name: 'dspace.entity.type',
  disabled: false
};
/**
 * The dynamic form fields used for creating/editing a collection
 * @type {(DynamicInputModel | DynamicTextAreaModel)[]}
 */
const collectionFormModels = [new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_1__.DynamicInputModel({
  id: 'title',
  name: 'dc.title',
  required: true,
  validators: {
    required: null
  },
  errorMessages: {
    required: 'Please enter a name for this title'
  }
}), new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_1__.DynamicTextAreaModel({
  id: 'description',
  name: 'dc.description',
  spellCheck: _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.form.spellCheck
}), new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_1__.DynamicTextAreaModel({
  id: 'abstract',
  name: 'dc.description.abstract',
  spellCheck: _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.form.spellCheck
}), new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_1__.DynamicTextAreaModel({
  id: 'rights',
  name: 'dc.rights',
  spellCheck: _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.form.spellCheck
}), new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_1__.DynamicTextAreaModel({
  id: 'tableofcontents',
  name: 'dc.description.tableofcontents',
  spellCheck: _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.form.spellCheck
}), new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_1__.DynamicTextAreaModel({
  id: 'license',
  name: 'dc.rights.license',
  spellCheck: _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.form.spellCheck
})];

/***/ }),

/***/ 82678:
/*!************************************************************************!*\
  !*** ./src/app/collection-page/collection-page-administrator.guard.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   collectionPageAdministratorGuard: () => (/* binding */ collectionPageAdministratorGuard)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 17796);
/* harmony import */ var _core_data_feature_authorization_feature_authorization_guard_dso_page_single_feature_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/data/feature-authorization/feature-authorization-guard/dso-page-single-feature.guard */ 6056);
/* harmony import */ var _core_data_feature_authorization_feature_id__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/data/feature-authorization/feature-id */ 3970);
/* harmony import */ var _collection_page_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./collection-page.resolver */ 54809);




/**
 * Guard for preventing unauthorized access to certain {@link Collection} pages requiring administrator rights
 * Check administrator authorization rights
 */
const collectionPageAdministratorGuard = (0,_core_data_feature_authorization_feature_authorization_guard_dso_page_single_feature_guard__WEBPACK_IMPORTED_MODULE_0__.dsoPageSingleFeatureGuard)(() => _collection_page_resolver__WEBPACK_IMPORTED_MODULE_2__.collectionPageResolver, () => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(_core_data_feature_authorization_feature_id__WEBPACK_IMPORTED_MODULE_1__.FeatureID.AdministratorOf));

/***/ }),

/***/ 27156:
/*!***********************************************************!*\
  !*** ./src/app/collection-page/collection-page-routes.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ROUTES: () => (/* binding */ ROUTES)
/* harmony export */ });
/* harmony import */ var _browse_by_browse_by_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../browse-by/browse-by-guard */ 2729);
/* harmony import */ var _browse_by_browse_by_i18n_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../browse-by/browse-by-i18n-breadcrumb.resolver */ 71959);
/* harmony import */ var _core_auth_authenticated_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/auth/authenticated.guard */ 49347);
/* harmony import */ var _core_breadcrumbs_collection_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/breadcrumbs/collection-breadcrumb.resolver */ 75395);
/* harmony import */ var _core_breadcrumbs_community_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/breadcrumbs/community-breadcrumb.resolver */ 89266);
/* harmony import */ var _core_breadcrumbs_i18n_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/breadcrumbs/i18n-breadcrumb.resolver */ 72059);
/* harmony import */ var _shared_comcol_sections_comcol_browse_by_comcol_browse_by_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/comcol/sections/comcol-browse-by/comcol-browse-by.component */ 10695);
/* harmony import */ var _shared_comcol_sections_comcol_search_section_comcol_search_section_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/comcol/sections/comcol-search-section/comcol-search-section.component */ 59397);
/* harmony import */ var _shared_dso_page_dso_edit_menu_resolver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/dso-page/dso-edit-menu.resolver */ 19964);
/* harmony import */ var _shared_menu_menu_item_type_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/menu/menu-item-type.model */ 34237);
/* harmony import */ var _collection_page_resolver__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./collection-page.resolver */ 54809);
/* harmony import */ var _collection_page_administrator_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./collection-page-administrator.guard */ 82678);
/* harmony import */ var _collection_page_routing_paths__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./collection-page-routing-paths */ 64611);
/* harmony import */ var _create_collection_page_create_collection_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./create-collection-page/create-collection-page.component */ 19675);
/* harmony import */ var _create_collection_page_create_collection_page_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./create-collection-page/create-collection-page.guard */ 20181);
/* harmony import */ var _delete_collection_page_delete_collection_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./delete-collection-page/delete-collection-page.component */ 40757);
/* harmony import */ var _edit_item_template_page_item_template_page_resolver__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./edit-item-template-page/item-template-page.resolver */ 189);
/* harmony import */ var _edit_item_template_page_themed_edit_item_template_page_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./edit-item-template-page/themed-edit-item-template-page.component */ 16537);
/* harmony import */ var _themed_collection_page_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./themed-collection-page.component */ 48502);



















const ROUTES = [{
  path: _collection_page_routing_paths__WEBPACK_IMPORTED_MODULE_12__.COLLECTION_CREATE_PATH,
  canActivate: [_core_auth_authenticated_guard__WEBPACK_IMPORTED_MODULE_2__.authenticatedGuard, _create_collection_page_create_collection_page_guard__WEBPACK_IMPORTED_MODULE_14__.createCollectionPageGuard],
  children: [{
    path: '',
    component: _create_collection_page_create_collection_page_component__WEBPACK_IMPORTED_MODULE_13__.CreateCollectionPageComponent,
    resolve: {
      breadcrumb: _core_breadcrumbs_i18n_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_5__.i18nBreadcrumbResolver
    },
    data: {
      breadcrumbKey: 'collection.create'
    }
  }],
  data: {
    breadcrumbQueryParam: 'parent'
  },
  resolve: {
    breadcrumb: _core_breadcrumbs_community_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_4__.communityBreadcrumbResolver
  },
  runGuardsAndResolvers: 'always'
}, {
  path: ':id',
  resolve: {
    dso: _collection_page_resolver__WEBPACK_IMPORTED_MODULE_10__.collectionPageResolver,
    breadcrumb: _core_breadcrumbs_collection_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_3__.collectionBreadcrumbResolver
  },
  runGuardsAndResolvers: 'always',
  children: [{
    path: _collection_page_routing_paths__WEBPACK_IMPORTED_MODULE_12__.COLLECTION_EDIT_PATH,
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_core_resource-policy_resource-policy-data_service_ts"), __webpack_require__.e("default-node_modules_ngx-ui-switch_fesm2020_ngx-ui-switch_mjs"), __webpack_require__.e("default-src_app_shared_resource-policies_create_resource-policy-create_component_ts-src_app_s-cad6cd"), __webpack_require__.e("default-src_app_shared_access-control-form-container_access-control-form-container_component_ts"), __webpack_require__.e("default-src_app_core_data_processes_process-data_service_ts"), __webpack_require__.e("default-src_app_curation-form_curation-form_component_ts-src_app_shared_object-select_object--9a5a68"), __webpack_require__.e("default-src_app_shared_comcol_comcol-forms_edit-comcol-page_comcol-metadata_comcol-metadata_c-ddac2e"), __webpack_require__.e("src_app_collection-page_edit-collection-page_edit-collection-page-routes_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./edit-collection-page/edit-collection-page-routes */ 70593)).then(m => m.ROUTES),
    canActivate: [_collection_page_administrator_guard__WEBPACK_IMPORTED_MODULE_11__.collectionPageAdministratorGuard]
  }, {
    path: 'delete',
    pathMatch: 'full',
    component: _delete_collection_page_delete_collection_page_component__WEBPACK_IMPORTED_MODULE_15__.DeleteCollectionPageComponent,
    canActivate: [_core_auth_authenticated_guard__WEBPACK_IMPORTED_MODULE_2__.authenticatedGuard]
  }, {
    path: _collection_page_routing_paths__WEBPACK_IMPORTED_MODULE_12__.ITEMTEMPLATE_PATH,
    component: _edit_item_template_page_themed_edit_item_template_page_component__WEBPACK_IMPORTED_MODULE_17__.ThemedEditItemTemplatePageComponent,
    canActivate: [_core_auth_authenticated_guard__WEBPACK_IMPORTED_MODULE_2__.authenticatedGuard],
    resolve: {
      item: _edit_item_template_page_item_template_page_resolver__WEBPACK_IMPORTED_MODULE_16__.itemTemplatePageResolver,
      breadcrumb: _core_breadcrumbs_i18n_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_5__.i18nBreadcrumbResolver
    },
    data: {
      title: 'collection.edit.template.title',
      breadcrumbKey: 'collection.edit.template'
    }
  }, {
    path: '',
    component: _themed_collection_page_component__WEBPACK_IMPORTED_MODULE_18__.ThemedCollectionPageComponent,
    resolve: {
      menu: _shared_dso_page_dso_edit_menu_resolver__WEBPACK_IMPORTED_MODULE_8__.dsoEditMenuResolver
    },
    children: [{
      path: '',
      pathMatch: 'full',
      component: _shared_comcol_sections_comcol_search_section_comcol_search_section_component__WEBPACK_IMPORTED_MODULE_7__.ComcolSearchSectionComponent
    }, {
      path: 'browse/:id',
      pathMatch: 'full',
      component: _shared_comcol_sections_comcol_browse_by_comcol_browse_by_component__WEBPACK_IMPORTED_MODULE_6__.ComcolBrowseByComponent,
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
        id: 'statistics_collection_:id',
        active: true,
        visible: true,
        index: 2,
        model: {
          type: _shared_menu_menu_item_type_model__WEBPACK_IMPORTED_MODULE_9__.MenuItemType.LINK,
          text: 'menu.section.statistics',
          link: 'statistics/collections/:id/'
        }
      }]
    }
  }
}];

/***/ }),

/***/ 22864:
/*!**************************************************************!*\
  !*** ./src/app/collection-page/collection-page.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CollectionPageComponent: () => (/* binding */ CollectionPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs/operators */ 78374);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs/operators */ 85687);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs/operators */ 74671);
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
/* harmony import */ var _collection_page_routing_paths__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./collection-page-routing-paths */ 64611);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 90310);





























function CollectionPageComponent_div_1_div_1_div_1_ds_comcol_page_logo_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "ds-comcol-page-logo", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](2, "translate");
  }
  if (rf & 2) {
    let tmp_6_0;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("logo", (tmp_6_0 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](1, 2, ctx_r0.logoRD$)) == null ? null : tmp_6_0.payload)("alternateText", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](2, 4, "collection.logo"));
  }
}
function CollectionPageComponent_div_1_div_1_div_1_footer_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "footer", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "ds-comcol-page-content", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const collection_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("content", collection_r2.copyrightText)("hasInnerHtml", true);
  }
}
function CollectionPageComponent_div_1_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "ds-view-tracker", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "div", 6)(3, "header", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](4, "ds-comcol-page-header", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](5, CollectionPageComponent_div_1_div_1_div_1_ds_comcol_page_logo_5_Template, 3, 6, "ds-comcol-page-logo", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](6, "ds-comcol-page-handle", 10)(7, "ds-comcol-page-content", 11)(8, "ds-comcol-page-content", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](9, "ds-dso-edit-menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](10, "section", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](11, "ds-comcol-page-browse-by", 14)(12, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](13, CollectionPageComponent_div_1_div_1_div_1_footer_13_Template, 2, 2, "footer", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const collection_r2 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("object", collection_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("name", ctx_r0.dsoNameService.getName(collection_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r0.logoRD$);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("content", collection_r2.handle)("title", "collection.page.handle");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("content", collection_r2.introductoryText)("hasInnerHtml", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("content", collection_r2.sidebarText)("hasInnerHtml", true)("title", "collection.page.news");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("id", collection_r2.id)("contentType", collection_r2.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", collection_r2.copyrightText);
  }
}
function CollectionPageComponent_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, CollectionPageComponent_div_1_div_1_div_1_Template, 14, 13, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const collectionRD_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().ngVar;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("@fadeInOut", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", collectionRD_r3 == null ? null : collectionRD_r3.payload);
  }
}
function CollectionPageComponent_div_1_ds_error_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "ds-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("message", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](1, 1, "error.collection"));
  }
}
function CollectionPageComponent_div_1_ds_loading_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "ds-loading", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("message", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](1, 1, "loading.collection"));
  }
}
function CollectionPageComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, CollectionPageComponent_div_1_div_1_Template, 2, 2, "div", 3)(2, CollectionPageComponent_div_1_ds_error_2_Template, 2, 3, "ds-error", 4)(3, CollectionPageComponent_div_1_ds_loading_3_Template, 2, 3, "ds-loading", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const collectionRD_r3 = ctx.ngVar;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", collectionRD_r3 == null ? null : collectionRD_r3.hasSucceeded);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", collectionRD_r3 == null ? null : collectionRD_r3.hasFailed);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", collectionRD_r3 == null ? null : collectionRD_r3.isLoading);
  }
}
class CollectionPageComponent {
  constructor(route, router, authService, authorizationDataService, dsoNameService) {
    this.route = route;
    this.router = router;
    this.authService = authService;
    this.authorizationDataService = authorizationDataService;
    this.dsoNameService = dsoNameService;
  }
  ngOnInit() {
    this.collectionRD$ = this.route.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.map)(data => data.dso), (0,_core_shared_authorized_operators__WEBPACK_IMPORTED_MODULE_4__.redirectOn4xx)(this.router, this.authService), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.take)(1));
    this.logoRD$ = this.collectionRD$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.map)(rd => rd.payload), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.filter)(collection => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_13__.hasValue)(collection)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.mergeMap)(collection => collection.logo));
    this.isCollectionAdmin$ = this.authorizationDataService.isAuthorized(_core_data_feature_authorization_feature_id__WEBPACK_IMPORTED_MODULE_3__.FeatureID.IsCollectionAdmin);
    this.collectionPageRoute$ = this.collectionRD$.pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_5__.getAllSucceededRemoteDataPayload)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.map)(collection => (0,_collection_page_routing_paths__WEBPACK_IMPORTED_MODULE_18__.getCollectionPageRoute)(collection.id)));
  }
  isNotEmpty(object) {
    return (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_13__.isNotEmpty)(object);
  }
  static {
    this.ɵfac = function CollectionPageComponent_Factory(t) {
      return new (t || CollectionPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_24__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_24__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_core_data_feature_authorization_authorization_data_service__WEBPACK_IMPORTED_MODULE_2__.AuthorizationDataService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_core_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_1__.DSONameService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineComponent"]({
      type: CollectionPageComponent,
      selectors: [["ds-base-collection-page"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵStandaloneFeature"]],
      decls: 3,
      vars: 3,
      consts: [[1, "container"], ["class", "collection-page", 4, "ngVar"], [1, "collection-page"], [4, "ngIf"], [3, "message", 4, "ngIf"], [3, "object"], [1, "d-flex", "flex-row", "border-bottom", "mb-4", "pb-4"], [1, "comcol-header", "mr-auto"], [3, "name"], [3, "logo", "alternateText", 4, "ngIf"], [3, "content", "title"], [3, "content", "hasInnerHtml"], [3, "content", "hasInnerHtml", "title"], [1, "comcol-page-browse-section"], [3, "id", "contentType"], ["class", "border-top my-5 pt-4", 4, "ngIf"], [3, "logo", "alternateText"], [1, "border-top", "my-5", "pt-4"], [3, "message"]],
      template: function CollectionPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, CollectionPageComponent_div_1_Template, 4, 3, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](2, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngVar", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](2, 1, ctx.collectionRD$));
        }
      },
      dependencies: [_shared_comcol_comcol_page_content_themed_comcol_page_content_component__WEBPACK_IMPORTED_MODULE_8__.ThemedComcolPageContentComponent, _shared_error_error_component__WEBPACK_IMPORTED_MODULE_14__.ErrorComponent, _angular_common__WEBPACK_IMPORTED_MODULE_25__.NgIf, _shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_15__.ThemedLoadingComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__.TranslatePipe, _statistics_angulartics_dspace_view_tracker_component__WEBPACK_IMPORTED_MODULE_17__.ViewTrackerComponent, _shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_16__.VarDirective, _angular_common__WEBPACK_IMPORTED_MODULE_25__.AsyncPipe, _shared_comcol_comcol_page_header_comcol_page_header_component__WEBPACK_IMPORTED_MODULE_10__.ComcolPageHeaderComponent, _shared_comcol_comcol_page_logo_comcol_page_logo_component__WEBPACK_IMPORTED_MODULE_11__.ComcolPageLogoComponent, _shared_comcol_comcol_page_handle_themed_comcol_page_handle_component__WEBPACK_IMPORTED_MODULE_9__.ThemedComcolPageHandleComponent, _shared_dso_page_dso_edit_menu_dso_edit_menu_component__WEBPACK_IMPORTED_MODULE_12__.DsoEditMenuComponent, _shared_comcol_comcol_page_browse_by_themed_comcol_page_browse_by_component__WEBPACK_IMPORTED_MODULE_7__.ThemedComcolPageBrowseByComponent, _angular_router__WEBPACK_IMPORTED_MODULE_24__.RouterOutlet],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGxlY3Rpb24tcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQSIsImZpbGUiOiJjb2xsZWN0aW9uLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqLyJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29sbGVjdGlvbi1wYWdlL2NvbGxlY3Rpb24tcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBLHdrQkFBd2tCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi8iXSwic291cmNlUm9vdCI6IiJ9 */"],
      data: {
        animation: [_shared_animations_fade__WEBPACK_IMPORTED_MODULE_6__.fadeIn, _shared_animations_fade__WEBPACK_IMPORTED_MODULE_6__.fadeInOut]
      },
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 19675:
/*!********************************************************************************************!*\
  !*** ./src/app/collection-page/create-collection-page/create-collection-page.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateCollectionPageComponent: () => (/* binding */ CreateCollectionPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var _core_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/breadcrumbs/dso-name.service */ 96526);
/* harmony import */ var _core_data_collection_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/data/collection-data.service */ 6983);
/* harmony import */ var _core_data_community_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/data/community-data.service */ 46660);
/* harmony import */ var _core_data_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/data/request.service */ 32473);
/* harmony import */ var _core_services_route_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/services/route.service */ 27297);
/* harmony import */ var _core_shared_collection_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/shared/collection.model */ 6041);
/* harmony import */ var _shared_comcol_comcol_forms_create_comcol_page_create_comcol_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/comcol/comcol-forms/create-comcol-page/create-comcol-page.component */ 61084);
/* harmony import */ var _shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/loading/themed-loading.component */ 82394);
/* harmony import */ var _shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/notifications/notifications.service */ 69472);
/* harmony import */ var _collection_form_collection_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../collection-form/collection-form.component */ 70087);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 14354);






















const _c0 = a0 => ({
  parent: a0
});
function CreateCollectionPageComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 1)(1, "div", 3)(2, "div", 4)(3, "h1", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "ds-collection-form", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("submitForm", function CreateCollectionPageComponent_div_0_Template_ds_collection_form_submitForm_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.onSubmit($event));
    })("back", function CreateCollectionPageComponent_div_0_Template_ds_collection_form_back_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.navigateToHome());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](6, 4, "collection.create.sub-head", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](7, _c0, ctx_r1.dsoNameService.getName((tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](5, 2, ctx_r1.parentRD$)) == null ? null : tmp_1_0.payload))));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("isCreation", true);
  }
}
function CreateCollectionPageComponent_ds_loading_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "ds-loading");
  }
}
/**
 * Component that represents the page where a user can create a new Collection
 */
class CreateCollectionPageComponent extends _shared_comcol_comcol_forms_create_comcol_page_create_comcol_page_component__WEBPACK_IMPORTED_MODULE_6__.CreateComColPageComponent {
  constructor(dsoNameService, communityDataService, collectionDataService, routeService, router, notificationsService, translate, requestService) {
    super(collectionDataService, dsoNameService, communityDataService, routeService, router, notificationsService, translate, requestService);
    this.dsoNameService = dsoNameService;
    this.communityDataService = communityDataService;
    this.collectionDataService = collectionDataService;
    this.routeService = routeService;
    this.router = router;
    this.notificationsService = notificationsService;
    this.translate = translate;
    this.requestService = requestService;
    this.frontendURL = '/collections/';
    this.type = _core_shared_collection_model__WEBPACK_IMPORTED_MODULE_5__.Collection.type;
  }
  static {
    this.ɵfac = function CreateCollectionPageComponent_Factory(t) {
      return new (t || CreateCollectionPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_0__.DSONameService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_data_community_data_service__WEBPACK_IMPORTED_MODULE_2__.CommunityDataService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_data_collection_data_service__WEBPACK_IMPORTED_MODULE_1__.CollectionDataService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_services_route_service__WEBPACK_IMPORTED_MODULE_4__.RouteService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_8__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_data_request_service__WEBPACK_IMPORTED_MODULE_3__.RequestService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
      type: CreateCollectionPageComponent,
      selectors: [["ds-create-collection"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵStandaloneFeature"]],
      decls: 5,
      vars: 6,
      consts: [["class", "container", 4, "ngIf"], [1, "container"], [4, "ngIf"], [1, "row"], [1, "col-12", "pb-4"], ["id", "sub-header", 1, "border-bottom", "pb-2"], [3, "submitForm", "back", "isCreation"]],
      template: function CreateCollectionPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](0, CreateCollectionPageComponent_div_0_Template, 8, 9, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](1, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, CreateCollectionPageComponent_ds_loading_3_Template, 1, 0, "ds-loading", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](1, 2, ctx.isLoading$) === false);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 4, ctx.isLoading$));
        }
      },
      dependencies: [_collection_form_collection_form_component__WEBPACK_IMPORTED_MODULE_9__.CollectionFormComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_13__.AsyncPipe, _shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_7__.ThemedLoadingComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1jb2xsZWN0aW9uLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUEiLCJmaWxlIjoiY3JlYXRlLWNvbGxlY3Rpb24tcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29sbGVjdGlvbi1wYWdlL2NyZWF0ZS1jb2xsZWN0aW9uLXBhZ2UvY3JlYXRlLWNvbGxlY3Rpb24tcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBLHdsQkFBd2xCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi8iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 20181:
/*!****************************************************************************************!*\
  !*** ./src/app/collection-page/create-collection-page/create-collection-page.guard.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createCollectionPageGuard: () => (/* binding */ createCollectionPageGuard)
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
 * True when either a parent ID query parameter has been provided and the parent ID resolves to a valid parent community
 * Reroutes to a 404 page when the page cannot be activated
 */
const createCollectionPageGuard = (route, state, communityService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_core_data_community_data_service__WEBPACK_IMPORTED_MODULE_0__.CommunityDataService), router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)) => {
  const parentID = route.queryParams.parent;
  if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_2__.hasNoValue)(parentID)) {
    router.navigate(['/404']);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(false);
  }
  return communityService.findById(parentID).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_1__.getFirstCompletedRemoteData)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(communityRD => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_2__.hasValue)(communityRD) && communityRD.hasSucceeded && (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_2__.hasValue)(communityRD.payload)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(isValid => {
    if (!isValid) {
      router.navigate(['/404']);
    }
  }));
};

/***/ }),

/***/ 40757:
/*!********************************************************************************************!*\
  !*** ./src/app/collection-page/delete-collection-page/delete-collection-page.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeleteCollectionPageComponent: () => (/* binding */ DeleteCollectionPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var _core_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/breadcrumbs/dso-name.service */ 96526);
/* harmony import */ var _core_data_collection_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/data/collection-data.service */ 6983);
/* harmony import */ var _shared_btn_disabled_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/btn-disabled.directive */ 60456);
/* harmony import */ var _shared_comcol_comcol_forms_delete_comcol_page_delete_comcol_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/comcol/comcol-forms/delete-comcol-page/delete-comcol-page.component */ 55326);
/* harmony import */ var _shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/notifications/notifications.service */ 69472);
/* harmony import */ var _shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/utils/var.directive */ 18226);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 14354);















const _c0 = a0 => ({
  dso: a0
});
function DeleteCollectionPageComponent_ng_container_2_span_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 1, "collection.delete.processing"), "");
  }
}
function DeleteCollectionPageComponent_ng_container_2_span_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 1, "collection.delete.confirm"), "");
  }
}
function DeleteCollectionPageComponent_ng_container_2_Template(rf, ctx) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DeleteCollectionPageComponent_ng_container_2_Template_button_click_10_listener() {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DeleteCollectionPageComponent_ng_container_2_Template_button_click_15_listener() {
      const dso_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1).ngVar;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.onConfirm(dso_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, DeleteCollectionPageComponent_ng_container_2_span_17_Template, 4, 3, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](18, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, DeleteCollectionPageComponent_ng_container_2_span_19_Template, 4, 3, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](20, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const dso_r2 = ctx.ngVar;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 7, "collection.delete.head"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](7, 9, "collection.delete.text", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](22, _c0, ctx_r2.dsoNameService.getName(dso_r2))));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dsBtnDisabled", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](11, 12, ctx_r2.processing$));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](14, 14, "collection.delete.cancel"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dsBtnDisabled", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](16, 16, ctx_r2.processing$));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](18, 18, ctx_r2.processing$));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](20, 20, ctx_r2.processing$) !== true);
  }
}
/**
 * Component that represents the page where a user can delete an existing Collection
 */
class DeleteCollectionPageComponent extends _shared_comcol_comcol_forms_delete_comcol_page_delete_comcol_page_component__WEBPACK_IMPORTED_MODULE_3__.DeleteComColPageComponent {
  constructor(dsoDataService, dsoNameService, router, route, notifications, translate) {
    super(dsoDataService, dsoNameService, router, route, notifications, translate);
    this.dsoDataService = dsoDataService;
    this.dsoNameService = dsoNameService;
    this.router = router;
    this.route = route;
    this.notifications = notifications;
    this.translate = translate;
    this.frontendURL = '/collections/';
  }
  static {
    this.ɵfac = function DeleteCollectionPageComponent_Factory(t) {
      return new (t || DeleteCollectionPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_data_collection_data_service__WEBPACK_IMPORTED_MODULE_1__.CollectionDataService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_0__.DSONameService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_4__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: DeleteCollectionPageComponent,
      selectors: [["ds-delete-collection"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵStandaloneFeature"]],
      decls: 4,
      vars: 3,
      consts: [[1, "container"], [1, "row"], [4, "ngVar"], [1, "col-12", "pb-4"], ["id", "header", 1, "border-bottom", "pb-2"], [1, "pb-2"], [1, "form-group", "row"], [1, "col", "text-right", "space-children-mr"], [1, "btn", "btn-outline-secondary", 3, "click", "dsBtnDisabled"], [1, "fas", "fa-times"], [1, "btn", "btn-danger", 3, "click", "dsBtnDisabled"], [4, "ngIf"], [1, "fas", "fa-circle-notch", "fa-spin"], [1, "fas", "fa-trash"]],
      template: function DeleteCollectionPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, DeleteCollectionPageComponent_ng_container_2_Template, 21, 24, "ng-container", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          let tmp_0_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngVar", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 1, ctx.dsoRD$)) == null ? null : tmp_0_0.payload);
        }
      },
      dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_5__.VarDirective, _shared_btn_disabled_directive__WEBPACK_IMPORTED_MODULE_2__.BtnDisabledDirective],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbGV0ZS1jb2xsZWN0aW9uLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUEiLCJmaWxlIjoiZGVsZXRlLWNvbGxlY3Rpb24tcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29sbGVjdGlvbi1wYWdlL2RlbGV0ZS1jb2xsZWN0aW9uLXBhZ2UvZGVsZXRlLWNvbGxlY3Rpb24tcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBLHdsQkFBd2xCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi8iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 64767:
/*!**********************************************************************************************!*\
  !*** ./src/app/collection-page/edit-item-template-page/edit-item-template-page.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditItemTemplatePageComponent: () => (/* binding */ EditItemTemplatePageComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 46891);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 84975);
/* harmony import */ var _core_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/breadcrumbs/dso-name.service */ 96526);
/* harmony import */ var _core_data_item_template_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/data/item-template-data.service */ 31827);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/shared/operators */ 55757);
/* harmony import */ var _dso_shared_dso_edit_metadata_themed_dso_edit_metadata_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../dso-shared/dso-edit-metadata/themed-dso-edit-metadata.component */ 13707);
/* harmony import */ var _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/alert/alert.component */ 16292);
/* harmony import */ var _shared_alert_alert_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/alert/alert-type */ 47978);
/* harmony import */ var _shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/loading/themed-loading.component */ 82394);
/* harmony import */ var _shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/utils/var.directive */ 18226);
/* harmony import */ var _collection_page_routing_paths__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../collection-page-routing-paths */ 64611);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 90310);


















const _c0 = a0 => ({
  collection: a0
});
function EditItemTemplatePageComponent_div_0_div_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "h1", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "ds-dso-edit-metadata", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const itemRD_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().ngVar;
    const collection_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().ngVar;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](3, 5, "collection.edit.template.head", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](10, _c0, ctx_r2.dsoNameService.getName(collection_r2))));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("updateDataService", ctx_r2.itemTemplateService)("dso", itemRD_r1 == null ? null : itemRD_r1.payload);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx_r2.getCollectionEditUrl(collection_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](7, 8, "collection.edit.template.cancel"));
  }
}
function EditItemTemplatePageComponent_div_0_div_2_ds_loading_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "ds-loading", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("message", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](1, 1, "collection.edit.template.loading"));
  }
}
function EditItemTemplatePageComponent_div_0_div_2_ds_alert_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "ds-alert", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("type", ctx_r2.AlertTypeEnum.Error)("content", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](1, 2, "collection.edit.template.error"));
  }
}
function EditItemTemplatePageComponent_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, EditItemTemplatePageComponent_div_0_div_2_ng_container_1_Template, 8, 12, "ng-container", 5)(2, EditItemTemplatePageComponent_div_0_div_2_ds_loading_2_Template, 2, 3, "ds-loading", 6)(3, EditItemTemplatePageComponent_div_0_div_2_ds_alert_3_Template, 2, 4, "ds-alert", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const itemRD_r1 = ctx.ngVar;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", itemRD_r1 == null ? null : itemRD_r1.hasSucceeded);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", itemRD_r1 == null ? null : itemRD_r1.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", itemRD_r1 == null ? null : itemRD_r1.hasFailed);
  }
}
function EditItemTemplatePageComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 1)(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, EditItemTemplatePageComponent_div_0_div_2_Template, 4, 3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngVar", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 1, ctx_r2.itemRD$));
  }
}
/**
 * Component for editing the item template of a collection
 */
class EditItemTemplatePageComponent {
  constructor(route, itemTemplateService, dsoNameService) {
    this.route = route;
    this.itemTemplateService = itemTemplateService;
    this.dsoNameService = dsoNameService;
    /**
     * The AlertType enumeration
     * @type {AlertType}
     */
    this.AlertTypeEnum = _shared_alert_alert_type__WEBPACK_IMPORTED_MODULE_5__.AlertType;
  }
  ngOnInit() {
    this.collectionRD$ = this.route.parent.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.first)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(data => data.dso));
    this.itemRD$ = this.collectionRD$.pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_2__.getFirstSucceededRemoteDataPayload)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.switchMap)(collection => this.itemTemplateService.findByCollectionID(collection.id)));
  }
  /**
   * Get the URL to the collection's edit page
   * @param collection
   */
  getCollectionEditUrl(collection) {
    if (collection) {
      return (0,_collection_page_routing_paths__WEBPACK_IMPORTED_MODULE_8__.getCollectionEditRoute)(collection.uuid);
    } else {
      return '';
    }
  }
  static {
    this.ɵfac = function EditItemTemplatePageComponent_Factory(t) {
      return new (t || EditItemTemplatePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_core_data_item_template_data_service__WEBPACK_IMPORTED_MODULE_1__.ItemTemplateDataService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_core_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_0__.DSONameService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
      type: EditItemTemplatePageComponent,
      selectors: [["ds-base-edit-item-template-page"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 3,
      consts: [["class", "container", 4, "ngVar"], [1, "container"], [1, "row"], ["class", "col-12", 4, "ngVar"], [1, "col-12"], [4, "ngIf"], [3, "message", 4, "ngIf"], [3, "type", "content", 4, "ngIf"], [1, "border-bottom"], [3, "updateDataService", "dso"], [1, "btn", "btn-outline-secondary", 3, "routerLink"], [3, "message"], [3, "type", "content"]],
      template: function EditItemTemplatePageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, EditItemTemplatePageComponent_div_0_Template, 4, 3, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](1, "async");
        }
        if (rf & 2) {
          let tmp_0_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngVar", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](1, 1, ctx.collectionRD$)) == null ? null : tmp_0_0.payload);
        }
      },
      dependencies: [_dso_shared_dso_edit_metadata_themed_dso_edit_metadata_component__WEBPACK_IMPORTED_MODULE_3__.ThemedDsoEditMetadataComponent, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_14__.AsyncPipe, _shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_7__.VarDirective, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslatePipe, _shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_6__.ThemedLoadingComponent, _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_4__.AlertComponent],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 189:
/*!****************************************************************************************!*\
  !*** ./src/app/collection-page/edit-item-template-page/item-template-page.resolver.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   itemTemplatePageResolver: () => (/* binding */ itemTemplatePageResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _core_data_item_template_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/data/item-template-data.service */ 31827);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/shared/operators */ 55757);
/* harmony import */ var _shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/utils/follow-link-config.model */ 67600);




const itemTemplatePageResolver = (route, state, itemTemplateService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_core_data_item_template_data_service__WEBPACK_IMPORTED_MODULE_0__.ItemTemplateDataService)) => {
  return itemTemplateService.findByCollectionID(route.params.id, true, false, (0,_shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_2__.followLink)('templateItemOf')).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_1__.getFirstCompletedRemoteData)());
};

/***/ }),

/***/ 16537:
/*!*****************************************************************************************************!*\
  !*** ./src/app/collection-page/edit-item-template-page/themed-edit-item-template-page.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemedEditItemTemplatePageComponent: () => (/* binding */ ThemedEditItemTemplatePageComponent)
/* harmony export */ });
/* harmony import */ var _shared_theme_support_themed_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/theme-support/themed.component */ 8886);
/* harmony import */ var _edit_item_template_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-item-template-page.component */ 64767);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);



const _c0 = ["*"];
function ThemedEditItemTemplatePageComponent_ng_template_0_Template(rf, ctx) {}
/**
 * Component for editing the item template of a collection
 */
class ThemedEditItemTemplatePageComponent extends _shared_theme_support_themed_component__WEBPACK_IMPORTED_MODULE_0__.ThemedComponent {
  getComponentName() {
    return 'EditItemTemplatePageComponent';
  }
  importThemedComponent(themeName) {
    return __webpack_require__(46563)(`./${themeName}/app/collection-page/edit-item-template-page/edit-item-template-page.component`);
  }
  importUnthemedComponent() {
    return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./edit-item-template-page.component */ 64767));
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵThemedEditItemTemplatePageComponent_BaseFactory;
      return function ThemedEditItemTemplatePageComponent_Factory(t) {
        return (ɵThemedEditItemTemplatePageComponent_BaseFactory || (ɵThemedEditItemTemplatePageComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](ThemedEditItemTemplatePageComponent)))(t || ThemedEditItemTemplatePageComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ThemedEditItemTemplatePageComponent,
      selectors: [["ds-edit-item-template-page"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      ngContentSelectors: _c0,
      decls: 5,
      vars: 0,
      consts: [["vcr", ""], ["content", ""]],
      template: function ThemedEditItemTemplatePageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ThemedEditItemTemplatePageComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
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

/***/ 48502:
/*!*********************************************************************!*\
  !*** ./src/app/collection-page/themed-collection-page.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemedCollectionPageComponent: () => (/* binding */ ThemedCollectionPageComponent)
/* harmony export */ });
/* harmony import */ var _shared_theme_support_themed_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/theme-support/themed.component */ 8886);
/* harmony import */ var _collection_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./collection-page.component */ 22864);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);



const _c0 = ["*"];
function ThemedCollectionPageComponent_ng_template_0_Template(rf, ctx) {}
/**
 * Themed wrapper for CollectionPageComponent
 */
class ThemedCollectionPageComponent extends _shared_theme_support_themed_component__WEBPACK_IMPORTED_MODULE_0__.ThemedComponent {
  getComponentName() {
    return 'CollectionPageComponent';
  }
  importThemedComponent(themeName) {
    return __webpack_require__(19862)(`./${themeName}/app/collection-page/collection-page.component`);
  }
  importUnthemedComponent() {
    return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./collection-page.component */ 22864));
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵThemedCollectionPageComponent_BaseFactory;
      return function ThemedCollectionPageComponent_Factory(t) {
        return (ɵThemedCollectionPageComponent_BaseFactory || (ɵThemedCollectionPageComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](ThemedCollectionPageComponent)))(t || ThemedCollectionPageComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ThemedCollectionPageComponent,
      selectors: [["ds-collection-page"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      ngContentSelectors: _c0,
      decls: 5,
      vars: 0,
      consts: [["vcr", ""], ["content", ""]],
      template: function ThemedCollectionPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ThemedCollectionPageComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
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

/***/ 75395:
/*!********************************************************************!*\
  !*** ./src/app/core/breadcrumbs/collection-breadcrumb.resolver.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   collectionBreadcrumbResolver: () => (/* binding */ collectionBreadcrumbResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _collection_page_collection_page_resolver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../collection-page/collection-page.resolver */ 54809);
/* harmony import */ var _data_collection_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/collection-data.service */ 6983);
/* harmony import */ var _dso_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dso-breadcrumb.resolver */ 70025);
/* harmony import */ var _dso_breadcrumbs_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dso-breadcrumbs.service */ 67045);





/**
 * The resolve function that resolves the BreadcrumbConfig object for a Collection
 */
const collectionBreadcrumbResolver = (route, state, breadcrumbService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_dso_breadcrumbs_service__WEBPACK_IMPORTED_MODULE_3__.DSOBreadcrumbsService), dataService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_data_collection_data_service__WEBPACK_IMPORTED_MODULE_1__.CollectionDataService)) => {
  const linksToFollow = _collection_page_collection_page_resolver__WEBPACK_IMPORTED_MODULE_0__.COLLECTION_PAGE_LINKS_TO_FOLLOW;
  return (0,_dso_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_2__.DSOBreadcrumbResolver)(route, state, breadcrumbService, dataService, ...linksToFollow);
};

/***/ }),

/***/ 31827:
/*!*********************************************************!*\
  !*** ./src/app/core/data/item-template-data.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ItemTemplateDataService: () => (/* binding */ ItemTemplateDataService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 84975);
/* harmony import */ var _shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/notifications/notifications.service */ 69472);
/* harmony import */ var _browse_browse_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../browse/browse.service */ 37864);
/* harmony import */ var _cache_builders_remote_data_build_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cache/builders/remote-data-build.service */ 76799);
/* harmony import */ var _cache_object_cache_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cache/object-cache.service */ 41684);
/* harmony import */ var _shared_hal_endpoint_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/hal-endpoint.service */ 4910);
/* harmony import */ var _base_create_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./base/create-data */ 39280);
/* harmony import */ var _base_identifiable_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./base/identifiable-data.service */ 63897);
/* harmony import */ var _bundle_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bundle-data.service */ 81443);
/* harmony import */ var _collection_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./collection-data.service */ 6983);
/* harmony import */ var _dso_change_analyzer_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dso-change-analyzer.service */ 12598);
/* harmony import */ var _item_data_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./item-data.service */ 29326);
/* harmony import */ var _request_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./request.service */ 32473);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 90310);























/**
 * Data service for interacting with Item templates via their Collection
 */
class CollectionItemTemplateDataService extends _base_identifiable_data_service__WEBPACK_IMPORTED_MODULE_6__.IdentifiableDataService {
  constructor(requestService, rdbService, objectCache, halService, notificationsService, collectionService) {
    super('itemtemplates', requestService, rdbService, objectCache, halService, undefined);
    this.requestService = requestService;
    this.rdbService = rdbService;
    this.objectCache = objectCache;
    this.halService = halService;
    this.notificationsService = notificationsService;
    this.collectionService = collectionService;
    // We only intend to use createOnEndpoint, so this inner data service feature doesn't need an endpoint at all
    this.createData = new _base_create_data__WEBPACK_IMPORTED_MODULE_5__.CreateDataImpl(undefined, requestService, rdbService, objectCache, halService, notificationsService, this.responseMsToLive);
  }
  /**
   * Create an observable for the HREF of a specific object based on its identifier
   *
   * Overridden to ensure that {@link findById} works with Collection IDs and points to the template.
   * @param collectionID  the ID of a Collection
   */
  getIDHrefObs(collectionID) {
    return this.collectionService.getIDHrefObs(collectionID).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.switchMap)(href => this.halService.getEndpoint('itemtemplate', href)));
  }
  /**
   * Create a new item template for a Collection by ID
   * @param item
   * @param collectionID
   */
  createTemplate(item, collectionID) {
    return this.createData.createOnEndpoint(item, this.getIDHrefObs(collectionID));
  }
}
/**
 * A service responsible for fetching/sending data from/to the REST API on a collection's itemtemplates endpoint
 */
class ItemTemplateDataService extends _item_data_service__WEBPACK_IMPORTED_MODULE_10__.BaseItemDataService {
  constructor(requestService, rdbService, objectCache, halService, notificationsService, comparator, browseService, bundleService, collectionService) {
    super('itemtemplates', requestService, rdbService, objectCache, halService, notificationsService, comparator, browseService, bundleService);
    this.requestService = requestService;
    this.rdbService = rdbService;
    this.objectCache = objectCache;
    this.halService = halService;
    this.notificationsService = notificationsService;
    this.comparator = comparator;
    this.browseService = browseService;
    this.bundleService = bundleService;
    this.collectionService = collectionService;
    this.byCollection = new CollectionItemTemplateDataService(requestService, rdbService, objectCache, halService, notificationsService, collectionService);
  }
  /**
   * Find an item template by collection ID
   * @param collectionID
   * @param useCachedVersionIfAvailable If this is true, the request will only be sent if there's
   *                                    no valid cached version. Defaults to true
   * @param reRequestOnStale            Whether or not the request should automatically be re-
   *                                    requested after the response becomes stale
   * @param linksToFollow               List of {@link FollowLinkConfig} that indicate which
   *                                    {@link HALLink}s should be automatically resolved
   */
  findByCollectionID(collectionID, useCachedVersionIfAvailable = true, reRequestOnStale = true, ...linksToFollow) {
    return this.byCollection.findById(collectionID, useCachedVersionIfAvailable, reRequestOnStale, ...linksToFollow);
  }
  /**
   * Create a new item template for a collection by ID
   * @param item
   * @param collectionID
   */
  createByCollectionID(item, collectionID) {
    return this.byCollection.createTemplate(item, collectionID);
  }
  /**
   * Get the endpoint based on a collection
   * @param collectionID  The ID of the collection to base the endpoint on
   */
  getCollectionEndpoint(collectionID) {
    return this.byCollection.getIDHrefObs(collectionID);
  }
  static {
    this.ɵfac = function ItemTemplateDataService_Factory(t) {
      return new (t || ItemTemplateDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_request_service__WEBPACK_IMPORTED_MODULE_11__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_cache_builders_remote_data_build_service__WEBPACK_IMPORTED_MODULE_2__.RemoteDataBuildService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_cache_object_cache_service__WEBPACK_IMPORTED_MODULE_3__.ObjectCacheService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_shared_hal_endpoint_service__WEBPACK_IMPORTED_MODULE_4__.HALEndpointService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_0__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_dso_change_analyzer_service__WEBPACK_IMPORTED_MODULE_9__.DSOChangeAnalyzer), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_browse_browse_service__WEBPACK_IMPORTED_MODULE_1__.BrowseService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_bundle_data_service__WEBPACK_IMPORTED_MODULE_7__.BundleDataService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_collection_data_service__WEBPACK_IMPORTED_MODULE_8__.CollectionDataService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjectable"]({
      token: ItemTemplateDataService,
      factory: ItemTemplateDataService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 19862:
/*!********************************************************************************************************!*\
  !*** ./src/themes/ lazy ^\.\/.*\/app\/collection\-page\/collection\-page\.component$ namespace object ***!
  \********************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./custom/app/collection-page/collection-page.component": [
		39751,
		"src_themes_custom_app_collection-page_collection-page_component_ts"
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
webpackAsyncContext.id = 19862;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 46563:
/*!**********************************************************************************************************************************************!*\
  !*** ./src/themes/ lazy ^\.\/.*\/app\/collection\-page\/edit\-item\-template\-page\/edit\-item\-template\-page\.component$ namespace object ***!
  \**********************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./custom/app/collection-page/edit-item-template-page/edit-item-template-page.component": [
		1928,
		"src_themes_custom_app_collection-page_edit-item-template-page_edit-item-template-page_component_ts"
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
webpackAsyncContext.id = 46563;
module.exports = webpackAsyncContext;

/***/ })

}]);
//# sourceMappingURL=src_app_collection-page_collection-page-routes_ts.js.map