"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_app_suggestions-page_suggestions-page-routes_ts"],{

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

/***/ 93896:
/*!***************************************************************************!*\
  !*** ./src/app/core/breadcrumbs/publication-claim-breadcrumb.resolver.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   publicationClaimBreadcrumbResolver: () => (/* binding */ publicationClaimBreadcrumbResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _publication_claim_breadcrumb_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./publication-claim-breadcrumb.service */ 42491);


const publicationClaimBreadcrumbResolver = (route, state, breadcrumbService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_publication_claim_breadcrumb_service__WEBPACK_IMPORTED_MODULE_0__.PublicationClaimBreadcrumbService)) => {
  const targetId = route.paramMap.get('targetId').split(':')[1];
  return {
    provider: breadcrumbService,
    key: targetId
  };
};

/***/ }),

/***/ 42491:
/*!**************************************************************************!*\
  !*** ./src/app/core/breadcrumbs/publication-claim-breadcrumb.service.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PublicationClaimBreadcrumbService: () => (/* binding */ PublicationClaimBreadcrumbService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 27639);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var _breadcrumbs_breadcrumb_breadcrumb_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../breadcrumbs/breadcrumb/breadcrumb.model */ 90839);
/* harmony import */ var _data_feature_authorization_authorization_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/feature-authorization/authorization-data.service */ 3675);
/* harmony import */ var _data_feature_authorization_feature_id__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/feature-authorization/feature-id */ 3970);
/* harmony import */ var _data_item_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/item-data.service */ 29326);
/* harmony import */ var _shared_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/operators */ 55757);
/* harmony import */ var _dso_name_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dso-name.service */ 96526);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 96439);














/**
 * Service to calculate Publication claims breadcrumbs
 */
class PublicationClaimBreadcrumbService {
  constructor(dataService, dsoNameService, tranlsateService, authorizationService) {
    this.dataService = dataService;
    this.dsoNameService = dsoNameService;
    this.tranlsateService = tranlsateService;
    this.authorizationService = authorizationService;
    this.ADMIN_PUBLICATION_CLAIMS_PATH = 'admin/notifications/publication-claim';
    this.ADMIN_PUBLICATION_CLAIMS_BREADCRUMB_KEY = 'admin.notifications.publicationclaim.page.title';
  }
  /**
   * Method to calculate the breadcrumbs
   * @param key The key used to resolve the breadcrumb
   */
  getBreadcrumbs(key) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.combineLatest)([this.dataService.findById(key).pipe((0,_shared_operators__WEBPACK_IMPORTED_MODULE_4__.getFirstCompletedRemoteData)()), this.authorizationService.isAuthorized(_data_feature_authorization_feature_id__WEBPACK_IMPORTED_MODULE_2__.FeatureID.AdministratorOf)]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(([item, isAdmin]) => {
      const itemName = this.dsoNameService.getName(item.payload);
      return isAdmin ? [new _breadcrumbs_breadcrumb_breadcrumb_model__WEBPACK_IMPORTED_MODULE_0__.Breadcrumb(this.tranlsateService.instant(this.ADMIN_PUBLICATION_CLAIMS_BREADCRUMB_KEY), this.ADMIN_PUBLICATION_CLAIMS_PATH), new _breadcrumbs_breadcrumb_breadcrumb_model__WEBPACK_IMPORTED_MODULE_0__.Breadcrumb(this.tranlsateService.instant('suggestion.suggestionFor.breadcrumb', {
        name: itemName
      }), undefined)] : [new _breadcrumbs_breadcrumb_breadcrumb_model__WEBPACK_IMPORTED_MODULE_0__.Breadcrumb(this.tranlsateService.instant('suggestion.suggestionFor.breadcrumb', {
        name: itemName
      }), undefined)];
    }));
  }
  static {
    this.ɵfac = function PublicationClaimBreadcrumbService_Factory(t) {
      return new (t || PublicationClaimBreadcrumbService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_data_item_data_service__WEBPACK_IMPORTED_MODULE_3__.ItemDataService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_dso_name_service__WEBPACK_IMPORTED_MODULE_5__.DSONameService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_data_feature_authorization_authorization_data_service__WEBPACK_IMPORTED_MODULE_1__.AuthorizationDataService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
      token: PublicationClaimBreadcrumbService,
      factory: PublicationClaimBreadcrumbService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 80293:
/*!***************************************************************************!*\
  !*** ./src/app/core/notifications/suggestions/models/suggestion.model.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Suggestion: () => (/* binding */ Suggestion)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 50694);
/* harmony import */ var cerialize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cerialize */ 52013);
/* harmony import */ var _cache_builders_build_decorators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../cache/builders/build-decorators */ 21921);
/* harmony import */ var _shared_metadata_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/metadata.models */ 14391);
/* harmony import */ var _shared_resource_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/resource-type */ 42547);
/* harmony import */ var _utilities_equals_decorators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utilities/equals.decorators */ 98688);
/* harmony import */ var _suggestion_objects_resource_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./suggestion-objects.resource-type */ 178);







/**
 * The interface representing the Suggestion Source model
 */
let Suggestion = class Suggestion {
  /**
   * A string representing the kind of object, e.g. community, item, …
   */
  static {
    this.type = _suggestion_objects_resource_type__WEBPACK_IMPORTED_MODULE_5__.SUGGESTION;
  }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([cerialize__WEBPACK_IMPORTED_MODULE_0__.autoserialize, (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", String)], Suggestion.prototype, "id", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([cerialize__WEBPACK_IMPORTED_MODULE_0__.autoserialize, (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", String)], Suggestion.prototype, "display", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([cerialize__WEBPACK_IMPORTED_MODULE_0__.autoserialize, (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", String)], Suggestion.prototype, "source", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([cerialize__WEBPACK_IMPORTED_MODULE_0__.autoserialize, (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", String)], Suggestion.prototype, "externalSourceUri", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([cerialize__WEBPACK_IMPORTED_MODULE_0__.autoserialize, (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", String)], Suggestion.prototype, "score", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([cerialize__WEBPACK_IMPORTED_MODULE_0__.autoserialize, (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", Object)], Suggestion.prototype, "evidences", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([_utilities_equals_decorators__WEBPACK_IMPORTED_MODULE_4__.excludeFromEquals, (0,cerialize__WEBPACK_IMPORTED_MODULE_0__.autoserializeAs)(_shared_metadata_models__WEBPACK_IMPORTED_MODULE_2__.MetadataMapSerializer), (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", _shared_metadata_models__WEBPACK_IMPORTED_MODULE_2__.MetadataMap)], Suggestion.prototype, "metadata", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([_utilities_equals_decorators__WEBPACK_IMPORTED_MODULE_4__.excludeFromEquals, cerialize__WEBPACK_IMPORTED_MODULE_0__.autoserialize, (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", _shared_resource_type__WEBPACK_IMPORTED_MODULE_3__.ResourceType)], Suggestion.prototype, "type", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([cerialize__WEBPACK_IMPORTED_MODULE_0__.deserialize, (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", Object)], Suggestion.prototype, "_links", void 0);
Suggestion = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([_cache_builders_build_decorators__WEBPACK_IMPORTED_MODULE_1__.typedObject], Suggestion);


/***/ }),

/***/ 84233:
/*!**********************************************************************************!*\
  !*** ./src/app/notifications/suggestion-actions/suggestion-actions.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SuggestionActionsComponent: () => (/* binding */ SuggestionActionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 49966);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 78374);
/* harmony import */ var _core_notifications_suggestions_models_suggestion_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/notifications/suggestions/models/suggestion.model */ 80293);
/* harmony import */ var _shared_btn_disabled_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/btn-disabled.directive */ 60456);
/* harmony import */ var _shared_dso_selector_modal_wrappers_create_item_parent_selector_themed_create_item_parent_selector_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/dso-selector/modal-wrappers/create-item-parent-selector/themed-create-item-parent-selector.component */ 52798);
/* harmony import */ var _shared_entity_dropdown_entity_dropdown_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/entity-dropdown/entity-dropdown.component */ 53948);












function SuggestionActionsComponent_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SuggestionActionsComponent_button_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.approveAndImportCollectionFixed());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 1, ctx_r2.approveAndImportLabel()), " ");
  }
}
function SuggestionActionsComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 11)(6, "ds-entity-dropdown", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectionChange", function SuggestionActionsComponent_ng_template_3_Template_ds_entity_dropdown_selectionChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.openDialog($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 1, ctx_r2.approveAndImportLabel()), " ");
  }
}
function SuggestionActionsComponent_button_9_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "suggestion.seeEvidence"), "");
  }
}
function SuggestionActionsComponent_button_9_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "suggestion.hideEvidence"), "");
  }
}
function SuggestionActionsComponent_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SuggestionActionsComponent_button_9_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.toggleSeeEvidences());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, SuggestionActionsComponent_button_9_ng_container_2_Template, 3, 3, "ng-container", 15)(3, SuggestionActionsComponent_button_9_ng_container_3_Template, 3, 3, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dsBtnDisabled", !ctx_r2.hasEvidence);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r2.seeEvidence);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.seeEvidence);
  }
}
/**
 * Show and trigger the actions to submit for a suggestion
 */
class SuggestionActionsComponent {
  constructor(modalService) {
    this.modalService = modalService;
    this.isBulk = false;
    this.hasEvidence = false;
    this.seeEvidence = false;
    this.isCollectionFixed = false;
    /**
     * The component is used to Delete suggestion
     */
    this.ignoreSuggestionClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    /**
     * The component is used to approve & import
     */
    this.approveAndImport = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    /**
     * The component is used to approve & import
     */
    this.seeEvidences = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
  }
  /**
   * Method called on clicking the button "approve & import", It opens a dialog for
   * select a collection and it emits an approveAndImport event.
   */
  openDialog(entity) {
    const modalRef = this.modalService.open(_shared_dso_selector_modal_wrappers_create_item_parent_selector_themed_create_item_parent_selector_component__WEBPACK_IMPORTED_MODULE_2__.ThemedCreateItemParentSelectorComponent);
    modalRef.componentInstance.emitOnly = true;
    modalRef.componentInstance.entityType = entity.label;
    modalRef.componentInstance.select.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.take)(1)).subscribe(collection => {
      this.approveAndImport.emit({
        suggestion: this.isBulk ? undefined : this.object,
        collectionId: collection.id
      });
    });
  }
  approveAndImportCollectionFixed() {
    this.approveAndImport.emit({
      suggestion: this.isBulk ? undefined : this.object,
      collectionId: null
    });
  }
  /**
   * Delete the suggestion
   */
  ignoreSuggestion() {
    this.ignoreSuggestionClicked.emit(this.isBulk ? undefined : this.object.id);
  }
  /**
   * Toggle See Evidence
   */
  toggleSeeEvidences() {
    this.seeEvidences.emit(!this.seeEvidence);
  }
  ignoreSuggestionLabel() {
    return this.isBulk ? 'suggestion.ignoreSuggestion.bulk' : 'suggestion.ignoreSuggestion';
  }
  approveAndImportLabel() {
    return this.isBulk ? 'suggestion.approveAndImport.bulk' : 'suggestion.approveAndImport';
  }
  static {
    this.ɵfac = function SuggestionActionsComponent_Factory(t) {
      return new (t || SuggestionActionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModal));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: SuggestionActionsComponent,
      selectors: [["ds-suggestion-actions"]],
      inputs: {
        object: "object",
        isBulk: "isBulk",
        hasEvidence: "hasEvidence",
        seeEvidence: "seeEvidence",
        isCollectionFixed: "isCollectionFixed"
      },
      outputs: {
        ignoreSuggestionClicked: "ignoreSuggestionClicked",
        approveAndImport: "approveAndImport",
        seeEvidences: "seeEvidences"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
      decls: 10,
      vars: 6,
      consts: [["chooseCollection", ""], [1, "d-inline"], ["ngbDropdown", "", 1, "d-inline"], ["class", "btn btn-success", "type", "button", 3, "click", 4, "ngIf", "ngIfElse"], [1, "btn", "btn-danger", "ml-2", 3, "click"], [1, "fa", "fa-ban"], ["class", "btn btn-info ml-2", 3, "dsBtnDisabled", "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-success", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-check"], ["id", "dropdownSubmission", "ngbDropdownToggle", "", "type", "button", 1, "btn", "btn-success"], [1, "caret"], ["ngbDropdownMenu", "", "id", "entityControlsDropdownMenu", "aria-labelledby", "dropdownSubmission", 1, "dropdown-menu"], [3, "selectionChange"], [1, "btn", "btn-info", "ml-2", 3, "click", "dsBtnDisabled"], [1, "fa", "fa-eye"], [4, "ngIf"]],
      template: function SuggestionActionsComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1)(1, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, SuggestionActionsComponent_button_2_Template, 4, 3, "button", 3)(3, SuggestionActionsComponent_ng_template_3_Template, 7, 3, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SuggestionActionsComponent_Template_button_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.ignoreSuggestion());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "i", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, SuggestionActionsComponent_button_9_Template, 4, 3, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          const chooseCollection_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isCollectionFixed)("ngIfElse", chooseCollection_r6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](8, 4, ctx.ignoreSuggestionLabel()), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isBulk);
        }
      },
      dependencies: [_shared_entity_dropdown_entity_dropdown_component__WEBPACK_IMPORTED_MODULE_3__.EntityDropdownComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbDropdownModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbDropdownMenu, _shared_btn_disabled_directive__WEBPACK_IMPORTED_MODULE_1__.BtnDisabledDirective],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1Z2dlc3Rpb24tYWN0aW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQSIsImZpbGUiOiJzdWdnZXN0aW9uLWFjdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqLyJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbm90aWZpY2F0aW9ucy9zdWdnZXN0aW9uLWFjdGlvbnMvc3VnZ2VzdGlvbi1hY3Rpb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBO0FBQ0EsZ2xCQUFnbEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqLyJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 40830:
/*!**************************************************************************************************************!*\
  !*** ./src/app/notifications/suggestion-list-element/suggestion-evidences/suggestion-evidences.component.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SuggestionEvidencesComponent: () => (/* binding */ SuggestionEvidencesComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var _shared_animations_fade__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/animations/fade */ 50332);
/* harmony import */ var _shared_utils_object_keys_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/utils/object-keys-pipe */ 11879);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);






function SuggestionEvidencesComponent_div_1_tr_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const evidence_r1 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.evidences[evidence_r1].score);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 3, evidence_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.evidences[evidence_r1].notes);
  }
}
function SuggestionEvidencesComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1)(1, "table", 2)(2, "thead")(3, "tr")(4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, SuggestionEvidencesComponent_div_1_tr_14_Template, 8, 5, "tr", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](15, "dsObjectKeys");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 4, "suggestion.evidence.score"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 6, "suggestion.evidence.type"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](12, 8, "suggestion.evidence.notes"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](15, 10, ctx_r1.evidences));
  }
}
/**
 * Show suggestion evidences such as score (authorScore, dateScore)
 */
class SuggestionEvidencesComponent {
  static {
    this.ɵfac = function SuggestionEvidencesComponent_Factory(t) {
      return new (t || SuggestionEvidencesComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: SuggestionEvidencesComponent,
      selectors: [["ds-suggestion-evidences"]],
      inputs: {
        evidences: "evidences"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 1,
      consts: [["class", "table-responsive", 4, "ngIf"], [1, "table-responsive"], [1, "table"], [4, "ngFor", "ngForOf"]],
      template: function SuggestionEvidencesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SuggestionEvidencesComponent_div_1_Template, 16, 12, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.evidences);
        }
      },
      dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgFor, _shared_utils_object_keys_pipe__WEBPACK_IMPORTED_MODULE_1__.ObjectKeysPipe],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1Z2dlc3Rpb24tZXZpZGVuY2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBIiwiZmlsZSI6InN1Z2dlc3Rpb24tZXZpZGVuY2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi8iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbm90aWZpY2F0aW9ucy9zdWdnZXN0aW9uLWxpc3QtZWxlbWVudC9zdWdnZXN0aW9uLWV2aWRlbmNlcy9zdWdnZXN0aW9uLWV2aWRlbmNlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBLG9sQkFBb2xCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi8iXSwic291cmNlUm9vdCI6IiJ9 */"],
      data: {
        animation: [_shared_animations_fade__WEBPACK_IMPORTED_MODULE_0__.fadeIn]
      }
    });
  }
}

/***/ }),

/***/ 51575:
/*!********************************************************************************************!*\
  !*** ./src/app/notifications/suggestion-list-element/suggestion-list-element.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SuggestionListElementComponent: () => (/* binding */ SuggestionListElementComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var src_app_core_notifications_suggestions_models_suggestion_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/notifications/suggestions/models/suggestion.model */ 80293);
/* harmony import */ var _themes_custom_app_shared_object_list_search_result_list_element_item_search_result_item_types_item_item_search_result_list_element_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../themes/custom/app/shared/object-list/search-result-list-element/item-search-result/item-types/item/item-search-result-list-element.component */ 32707);
/* harmony import */ var _core_shared_item_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/shared/item.model */ 88318);
/* harmony import */ var _shared_animations_fade__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/animations/fade */ 50332);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/empty.util */ 82777);
/* harmony import */ var _suggestion_actions_suggestion_actions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../suggestion-actions/suggestion-actions.component */ 84233);
/* harmony import */ var _suggestion_evidences_suggestion_evidences_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./suggestion-evidences/suggestion-evidences.component */ 40830);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 49966);














function SuggestionListElementComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 11)(1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "ds-suggestion-evidences", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("evidences", ctx_r0.object.evidences);
  }
}
/**
 * Show all the suggestions by researcher
 */
class SuggestionListElementComponent {
  /**
   * Initialize instance variables
   *
   * @param {NgbModal} modalService
   */
  constructor(modalService) {
    this.modalService = modalService;
    this.isSelected = false;
    this.isCollectionFixed = false;
    this.seeEvidence = false;
    /**
     * The component is used to Delete suggestion
     */
    this.ignoreSuggestionClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    /**
     * The component is used to approve & import
     */
    this.approveAndImport = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    /**
     * New value whether the element is selected
     */
    this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
  }
  ngOnInit() {
    this.listableObject = {
      indexableObject: Object.assign(new _core_shared_item_model__WEBPACK_IMPORTED_MODULE_2__.Item(), {
        id: this.object.id,
        metadata: this.object.metadata
      }),
      hitHighlights: {}
    };
  }
  /**
   * Approve and import the suggestion
   */
  onApproveAndImport(event) {
    this.approveAndImport.emit(event);
  }
  /**
   * Delete the suggestion
   */
  onIgnoreSuggestion(suggestionId) {
    this.ignoreSuggestionClicked.emit(suggestionId);
  }
  /**
   * Change is selected value.
   */
  changeSelected(event) {
    this.isSelected = event.target.checked;
    this.selected.next(this.isSelected);
  }
  /**
   * See the Evidence
   */
  hasEvidences() {
    return (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_4__.isNotEmpty)(this.object.evidences);
  }
  /**
   * Set the see evidence variable.
   */
  onSeeEvidences(seeEvidence) {
    this.seeEvidence = seeEvidence;
  }
  static {
    this.ɵfac = function SuggestionListElementComponent_Factory(t) {
      return new (t || SuggestionListElementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModal));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: SuggestionListElementComponent,
      selectors: [["ds-suggestion-list-item"]],
      inputs: {
        object: "object",
        isSelected: "isSelected",
        isCollectionFixed: "isCollectionFixed"
      },
      outputs: {
        ignoreSuggestionClicked: "ignoreSuggestionClicked",
        approveAndImport: "approveAndImport",
        selected: "selected"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵStandaloneFeature"]],
      decls: 18,
      vars: 15,
      consts: [[1, "container"], [1, "row"], [1, "col-1", "text-center", "align-self-center"], [1, ""], ["type", "checkbox", 1, "form-check-input", 3, "change", "checked"], [1, "col-2", "text-center", "align-self-center"], [1, "suggestion-score"], [1, "col"], [3, "showLabel", "showThumbnails", "object", "linkType"], [1, "parent", "mt-2", 3, "approveAndImport", "seeEvidences", "ignoreSuggestionClicked", "hasEvidence", "seeEvidence", "object", "isCollectionFixed"], ["class", "mt-2 row", 4, "ngIf"], [1, "mt-2", "row"], [1, "col", "offset-3"], [3, "evidences"]],
      template: function SuggestionListElementComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "input", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function SuggestionListElementComponent_Template_input_change_4_listener($event) {
            return ctx.changeSelected($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 5)(6, "div", 3)(7, "div")(8, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](10, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](14, "ds-item-search-result-list-element", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "ds-suggestion-actions", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("approveAndImport", function SuggestionListElementComponent_Template_ds_suggestion_actions_approveAndImport_15_listener($event) {
            return ctx.onApproveAndImport($event);
          })("seeEvidences", function SuggestionListElementComponent_Template_ds_suggestion_actions_seeEvidences_15_listener($event) {
            return ctx.onSeeEvidences($event);
          })("ignoreSuggestionClicked", function SuggestionListElementComponent_Template_ds_suggestion_actions_ignoreSuggestionClicked_15_listener($event) {
            return ctx.onIgnoreSuggestion($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, SuggestionListElementComponent_div_16_Template, 3, 1, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](17, "hr");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx.isSelected);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("aria-label", ctx.object.display);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](10, 13, "suggestion.totalScore"), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.object.score);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("showLabel", false)("showThumbnails", false)("object", ctx.listableObject)("linkType", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hasEvidence", ctx.hasEvidences())("seeEvidence", ctx.seeEvidence)("object", ctx.object)("isCollectionFixed", ctx.isCollectionFixed);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.seeEvidence);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe, _themes_custom_app_shared_object_list_search_result_list_element_item_search_result_item_types_item_item_search_result_list_element_component__WEBPACK_IMPORTED_MODULE_1__.ItemSearchResultListElementComponent, _suggestion_actions_suggestion_actions_component__WEBPACK_IMPORTED_MODULE_5__.SuggestionActionsComponent, _suggestion_evidences_suggestion_evidences_component__WEBPACK_IMPORTED_MODULE_6__.SuggestionEvidencesComponent],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n.issue-date[_ngcontent-%COMP%] {\n  color: #c8c8c8;\n}\n\n.parent[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n\n.import[_ngcontent-%COMP%] {\n  flex: initial;\n}\n\n.suggestion-score[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1Z2dlc3Rpb24tbGlzdC1lbGVtZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBO0FBQ0E7RUFDRSxjQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxhQUFBO0VBQ0EsU0FBQTtBQUVGOztBQUFBO0VBQ0UsYUFBQTtBQUdGOztBQURBO0VBQ0UsaUJBQUE7QUFJRiIsImZpbGUiOiJzdWdnZXN0aW9uLWxpc3QtZWxlbWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovXG4uaXNzdWUtZGF0ZSB7XG4gIGNvbG9yOiAjYzhjOGM4O1xufVxuLnBhcmVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTBweDtcbn1cbi5pbXBvcnQge1xuICBmbGV4OiBpbml0aWFsO1xufVxuLnN1Z2dlc3Rpb24tc2NvcmUge1xuICBmb250LXNpemU6IDEuNXJlbTtcbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbm90aWZpY2F0aW9ucy9zdWdnZXN0aW9uLWxpc3QtZWxlbWVudC9zdWdnZXN0aW9uLWxpc3QtZWxlbWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBO0VBQ0UsY0FBQTtBQUNGOztBQUNBO0VBQ0UsYUFBQTtFQUNBLFNBQUE7QUFFRjs7QUFBQTtFQUNFLGFBQUE7QUFHRjs7QUFEQTtFQUNFLGlCQUFBO0FBSUY7QUFDQSxnN0JBQWc3QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovXG4uaXNzdWUtZGF0ZSB7XG4gIGNvbG9yOiAjYzhjOGM4O1xufVxuLnBhcmVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTBweDtcbn1cbi5pbXBvcnQge1xuICBmbGV4OiBpbml0aWFsO1xufVxuLnN1Z2dlc3Rpb24tc2NvcmUge1xuICBmb250LXNpemU6IDEuNXJlbTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"],
      data: {
        animation: [_shared_animations_fade__WEBPACK_IMPORTED_MODULE_3__.fadeIn]
      }
    });
  }
}

/***/ }),

/***/ 11879:
/*!**************************************************!*\
  !*** ./src/app/shared/utils/object-keys-pipe.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ObjectKeysPipe: () => (/* binding */ ObjectKeysPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 90310);

/**
 * Pipe for parsing all keys of an object to an array of key-value pairs
 */
class ObjectKeysPipe {
  /**
   * @param value An object
   * @returns {any} Array with all keys the input object
   */
  transform(value) {
    const keys = [];
    Object.keys(value).forEach(k => keys.push(k));
    return keys;
  }
  static {
    this.ɵfac = function ObjectKeysPipe_Factory(t) {
      return new (t || ObjectKeysPipe)();
    };
  }
  static {
    this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "dsObjectKeys",
      type: ObjectKeysPipe,
      pure: true,
      standalone: true
    });
  }
}

/***/ }),

/***/ 16376:
/*!*************************************************************!*\
  !*** ./src/app/suggestions-page/suggestions-page-routes.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ROUTES: () => (/* binding */ ROUTES)
/* harmony export */ });
/* harmony import */ var _core_auth_authenticated_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/auth/authenticated.guard */ 49347);
/* harmony import */ var _core_breadcrumbs_publication_claim_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/breadcrumbs/publication-claim-breadcrumb.resolver */ 93896);
/* harmony import */ var _suggestions_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./suggestions-page.component */ 50036);
/* harmony import */ var _suggestions_page_resolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./suggestions-page.resolver */ 42757);




const ROUTES = [{
  path: ':targetId',
  resolve: {
    suggestionTargets: _suggestions_page_resolver__WEBPACK_IMPORTED_MODULE_3__.suggestionsPageResolver,
    breadcrumb: _core_breadcrumbs_publication_claim_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_1__.publicationClaimBreadcrumbResolver //i18nBreadcrumbResolver
  },
  data: {
    title: 'admin.notifications.publicationclaim.page.title',
    breadcrumbKey: 'admin.notifications.publicationclaim',
    showBreadcrumbsFluid: false
  },
  canActivate: [_core_auth_authenticated_guard__WEBPACK_IMPORTED_MODULE_0__.authenticatedGuard],
  runGuardsAndResolvers: 'always',
  component: _suggestions_page_component__WEBPACK_IMPORTED_MODULE_2__.SuggestionsPageComponent
}];

/***/ }),

/***/ 50036:
/*!****************************************************************!*\
  !*** ./src/app/suggestions-page/suggestions-page.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SuggestionsPageComponent: () => (/* binding */ SuggestionsPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 83485);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! rxjs */ 27639);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs/operators */ 21252);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs/operators */ 84975);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs/operators */ 64785);
/* harmony import */ var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/auth/auth.service */ 67116);
/* harmony import */ var _core_cache_models_sort_options_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/cache/models/sort-options.model */ 6238);
/* harmony import */ var _core_data_find_list_options_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/data/find-list-options.model */ 41023);
/* harmony import */ var _core_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/pagination/pagination.service */ 76896);
/* harmony import */ var _core_shared_authorized_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/shared/authorized.operators */ 308);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/shared/operators */ 55757);
/* harmony import */ var _core_submission_workspaceitem_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/submission/workspaceitem-data.service */ 24261);
/* harmony import */ var _notifications_suggestion_actions_suggestion_actions_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../notifications/suggestion-actions/suggestion-actions.component */ 84233);
/* harmony import */ var _notifications_suggestion_list_element_suggestion_list_element_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../notifications/suggestion-list-element/suggestion-list-element.component */ 51575);
/* harmony import */ var _notifications_suggestion_targets_suggestion_targets_state_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../notifications/suggestion-targets/suggestion-targets.state.service */ 6324);
/* harmony import */ var _notifications_suggestions_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../notifications/suggestions.service */ 67977);
/* harmony import */ var _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/alert/alert.component */ 16292);
/* harmony import */ var _shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/loading/themed-loading.component */ 82394);
/* harmony import */ var _shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/notifications/notifications.service */ 69472);
/* harmony import */ var _shared_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../shared/pagination/pagination.component */ 40590);
/* harmony import */ var _shared_pagination_pagination_component_options_model__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../shared/pagination/pagination-component-options.model */ 23401);
/* harmony import */ var _shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../shared/utils/var.directive */ 18226);
/* harmony import */ var _workflowitems_edit_page_workflowitems_edit_page_routing_paths__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../workflowitems-edit-page/workflowitems-edit-page-routing-paths */ 79951);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 90310);
































const _c0 = a0 => ["/entities/person/", a0];
const _c1 = a0 => [a0];
function SuggestionsPageComponent_ng_container_3_ds_loading_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "ds-loading");
  }
}
function SuggestionsPageComponent_ng_container_3_div_3_ds_suggestion_actions_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "ds-suggestion-actions", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("approveAndImport", function SuggestionsPageComponent_ng_container_3_div_3_ds_suggestion_actions_14_Template_ds_suggestion_actions_approveAndImport_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r2.approveAndImportAllSelected($event));
    })("ignoreSuggestionClicked", function SuggestionsPageComponent_ng_container_3_div_3_ds_suggestion_actions_14_Template_ds_suggestion_actions_ignoreSuggestionClicked_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r2.ignoreSuggestionAllSelected());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const suggestionsRD_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).ngVar;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("isBulk", true)("isCollectionFixed", ctx_r2.isCollectionFixed(suggestionsRD_r2.page));
  }
}
function SuggestionsPageComponent_ng_container_3_div_3_i_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "i", 13);
  }
}
function SuggestionsPageComponent_ng_container_3_div_3_ds_pagination_16_li_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "li", 17)(1, "ds-suggestion-list-item", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("ignoreSuggestionClicked", function SuggestionsPageComponent_ng_container_3_div_3_ds_pagination_16_li_2_Template_ds_suggestion_list_item_ignoreSuggestionClicked_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r2.ignoreSuggestion($event));
    })("selected", function SuggestionsPageComponent_ng_container_3_div_3_ds_pagination_16_li_2_Template_ds_suggestion_list_item_selected_1_listener($event) {
      const object_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r2.onSelected(object_r7, $event));
    })("approveAndImport", function SuggestionsPageComponent_ng_container_3_div_3_ds_pagination_16_li_2_Template_ds_suggestion_list_item_approveAndImport_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r2.approveAndImport($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const object_r7 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("object", object_r7)("isSelected", !!ctx_r2.selectedSuggestions[object_r7.id])("isCollectionFixed", ctx_r2.isCollectionFixed(_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction1"](3, _c1, object_r7)));
  }
}
function SuggestionsPageComponent_ng_container_3_div_3_ds_pagination_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "ds-pagination", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("paginationChange", function SuggestionsPageComponent_ng_container_3_div_3_ds_pagination_16_Template_ds_pagination_paginationChange_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r2.onPaginationChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "ul", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](2, SuggestionsPageComponent_ng_container_3_div_3_ds_pagination_16_li_2_Template, 2, 5, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const suggestionsRD_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).ngVar;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("paginationOptions", ctx_r2.paginationOptions)("sortOptions", ctx_r2.paginationSortConfig)("collectionSize", suggestionsRD_r2 == null ? null : suggestionsRD_r2.pageInfo == null ? null : suggestionsRD_r2.pageInfo.totalElements)("hideGear", false)("hidePagerWhenSinglePage", false)("hidePaginationDetail", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", suggestionsRD_r2 == null ? null : suggestionsRD_r2.page);
  }
}
function SuggestionsPageComponent_ng_container_3_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div")(1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](9, "div", 7)(10, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function SuggestionsPageComponent_ng_container_3_div_3_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r1);
      const suggestionsRD_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().ngVar;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r2.onToggleSelectAll(suggestionsRD_r2.page));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](11, "Select / Deselect All");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](12, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](14, SuggestionsPageComponent_ng_container_3_div_3_ds_suggestion_actions_14_Template, 1, 2, "ds-suggestion-actions", 9)(15, SuggestionsPageComponent_ng_container_3_div_3_i_15_Template, 1, 0, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](16, SuggestionsPageComponent_ng_container_3_div_3_ds_pagination_16_Template, 3, 7, "ds-pagination", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](17, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](3, 9, "suggestion.suggestionFor"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction1"](17, _c0, ctx_r2.researcherUuid));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r2.researcherName);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](7, 11, "suggestion.from.source"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](8, 13, ctx_r2.translateSuggestionSource()), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"]("(", ctx_r2.getSelectedSuggestionsCount(), ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r2.getSelectedSuggestionsCount() > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r2.isBulkOperationPending);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](17, 15, ctx_r2.processing$) !== true);
  }
}
function SuggestionsPageComponent_ng_container_3_ds_alert_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "ds-alert", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("type", "alert-info");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 2, "suggestion.count.missing"), " ");
  }
}
function SuggestionsPageComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, SuggestionsPageComponent_ng_container_3_ds_loading_1_Template, 1, 0, "ds-loading", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](3, SuggestionsPageComponent_ng_container_3_div_3_Template, 18, 19, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](5, SuggestionsPageComponent_ng_container_3_ds_alert_5_Template, 3, 4, "ds-alert", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const suggestionsRD_r2 = ctx.ngVar;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 3, ctx_r2.processing$));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](4, 5, ctx_r2.processing$) !== true && (suggestionsRD_r2 == null ? null : suggestionsRD_r2.pageInfo == null ? null : suggestionsRD_r2.pageInfo.totalElements) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](6, 7, ctx_r2.processing$) !== true && ((suggestionsRD_r2 == null ? null : suggestionsRD_r2.pageInfo == null ? null : suggestionsRD_r2.pageInfo.totalElements) === 0 || !suggestionsRD_r2));
  }
}
/**
 * Component used to visualize one of the suggestions from the publication claim page or from the notification pop up
 */
class SuggestionsPageComponent {
  constructor(authService, notificationService, paginationService, route, router, suggestionService, suggestionTargetsStateService, translateService, workspaceItemService) {
    this.authService = authService;
    this.notificationService = notificationService;
    this.paginationService = paginationService;
    this.route = route;
    this.router = router;
    this.suggestionService = suggestionService;
    this.suggestionTargetsStateService = suggestionTargetsStateService;
    this.translateService = translateService;
    this.workspaceItemService = workspaceItemService;
    /**
     * The pagination configuration
     */
    this.paginationOptions = Object.assign(new _shared_pagination_pagination_component_options_model__WEBPACK_IMPORTED_MODULE_15__.PaginationComponentOptions(), {
      id: 'sp',
      pageSizeOptions: [5, 10, 20, 40, 60]
    });
    /**
     * The sorting configuration
     */
    this.paginationSortConfig = new _core_cache_models_sort_options_model__WEBPACK_IMPORTED_MODULE_1__.SortOptions('trust', _core_cache_models_sort_options_model__WEBPACK_IMPORTED_MODULE_1__.SortDirection.DESC);
    /**
     * The FindListOptions object
     */
    this.defaultConfig = Object.assign(new _core_data_find_list_options_model__WEBPACK_IMPORTED_MODULE_2__.FindListOptions(), {
      sort: this.paginationSortConfig
    });
    /**
     * A boolean representing if results are loading
     */
    this.processing$ = new rxjs__WEBPACK_IMPORTED_MODULE_19__.BehaviorSubject(false);
    /**
     * A list of remote data objects of suggestions
     */
    this.suggestionsRD$ = new rxjs__WEBPACK_IMPORTED_MODULE_19__.BehaviorSubject({});
    this.selectedSuggestions = {};
    this.isBulkOperationPending = false;
  }
  ngOnInit() {
    this.targetRD$ = this.route.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.map)(data => data.suggestionTargets), (0,_core_shared_authorized_operators__WEBPACK_IMPORTED_MODULE_4__.redirectOn4xx)(this.router, this.authService));
    this.targetId$ = this.targetRD$.pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_5__.getFirstSucceededRemoteDataPayload)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.map)(target => target.id));
    this.targetRD$.pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_5__.getFirstSucceededRemoteDataPayload)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.tap)(suggestionTarget => {
      this.suggestionTarget = suggestionTarget;
      this.suggestionId = suggestionTarget.id;
      this.researcherName = suggestionTarget.display;
      this.suggestionSource = suggestionTarget.source;
      this.researcherUuid = this.suggestionService.getTargetUuid(suggestionTarget);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.switchMap)(() => this.updatePage())).subscribe();
    this.suggestionTargetsStateService.dispatchMarkUserSuggestionsAsVisitedAction();
  }
  /**
   * Called when one of the pagination settings is changed
   */
  onPaginationChange() {
    this.updatePage().subscribe();
  }
  /**
   * Update the list of suggestions
   */
  updatePage() {
    this.processing$.next(true);
    const pageConfig$ = this.paginationService.getFindListOptions(this.paginationOptions.id, this.defaultConfig).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.distinctUntilChanged)());
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_24__.combineLatest)([this.targetId$, pageConfig$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.switchMap)(([targetId, config]) => {
      return this.suggestionService.getSuggestions(targetId, config.elementsPerPage, config.currentPage, config.sort);
    }), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_5__.getFirstCompletedRemoteData)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.tap)(resultsRD => {
      this.processing$.next(false);
      if (resultsRD.hasSucceeded) {
        this.suggestionsRD$.next(resultsRD.payload);
      } else {
        this.suggestionsRD$.next(null);
      }
      this.suggestionService.clearSuggestionRequests();
    }));
  }
  /**
   * Used to delete a suggestion.
   * @suggestionId
   */
  ignoreSuggestion(suggestionId) {
    this.suggestionService.ignoreSuggestion(suggestionId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.tap)(() => this.suggestionTargetsStateService.dispatchRefreshUserSuggestionsAction()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.switchMap)(() => this.updatePage())).subscribe();
  }
  /**
   * Used to delete all selected suggestions.
   */
  ignoreSuggestionAllSelected() {
    this.isBulkOperationPending = true;
    this.suggestionService.ignoreSuggestionMultiple(Object.values(this.selectedSuggestions)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.tap)(results => {
      this.suggestionTargetsStateService.dispatchRefreshUserSuggestionsAction();
      this.isBulkOperationPending = false;
      this.selectedSuggestions = {};
      if (results.success > 0) {
        this.notificationService.success(this.translateService.get('suggestion.ignoreSuggestion.bulk.success', {
          count: results.success
        }));
      }
      if (results.fails > 0) {
        this.notificationService.error(this.translateService.get('suggestion.ignoreSuggestion.bulk.error', {
          count: results.fails
        }));
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.switchMap)(() => this.updatePage())).subscribe();
  }
  /**
   * Used to approve & import.
   * @param event contains the suggestion and the target collection
   */
  approveAndImport(event) {
    this.suggestionService.approveAndImport(this.workspaceItemService, event.suggestion, event.collectionId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.tap)(workspaceitem => {
      const content = this.translateService.instant('suggestion.approveAndImport.success', {
        url: (0,_workflowitems_edit_page_workflowitems_edit_page_routing_paths__WEBPACK_IMPORTED_MODULE_17__.getWorkspaceItemEditRoute)(workspaceitem.id)
      });
      this.notificationService.success('', content, {
        timeOut: 0
      }, true);
      this.suggestionTargetsStateService.dispatchRefreshUserSuggestionsAction();
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.switchMap)(() => this.updatePage())).subscribe();
  }
  /**
   * Used to approve & import all selected suggestions.
   * @param event contains the target collection
   */
  approveAndImportAllSelected(event) {
    this.isBulkOperationPending = true;
    this.suggestionService.approveAndImportMultiple(this.workspaceItemService, Object.values(this.selectedSuggestions), event.collectionId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.tap)(results => {
      this.suggestionTargetsStateService.dispatchRefreshUserSuggestionsAction();
      this.isBulkOperationPending = false;
      this.selectedSuggestions = {};
      if (results.success > 0) {
        this.notificationService.success(this.translateService.get('suggestion.approveAndImport.bulk.success', {
          count: results.success
        }));
      }
      if (results.fails > 0) {
        this.notificationService.error(this.translateService.get('suggestion.approveAndImport.bulk.error', {
          count: results.fails
        }));
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.switchMap)(() => this.updatePage())).subscribe();
  }
  /**
   * When a specific suggestion is selected.
   * @param object the suggestions
   * @param selected the new selected value for the suggestion
   */
  onSelected(object, selected) {
    if (selected) {
      this.selectedSuggestions[object.id] = object;
    } else {
      delete this.selectedSuggestions[object.id];
    }
  }
  /**
   * When Toggle Select All occurs.
   * @param suggestions all the visible suggestions inside the page
   */
  onToggleSelectAll(suggestions) {
    if (this.getSelectedSuggestionsCount() > 0) {
      this.selectedSuggestions = {};
    } else {
      suggestions.forEach(suggestion => {
        this.selectedSuggestions[suggestion.id] = suggestion;
      });
    }
  }
  /**
   * The current number of selected suggestions.
   */
  getSelectedSuggestionsCount() {
    return Object.keys(this.selectedSuggestions).length;
  }
  /**
   * Return true if all the suggestion are configured with the same fixed collection in the configuration.
   * @param suggestions
   */
  isCollectionFixed(suggestions) {
    return this.suggestionService.isCollectionFixed(suggestions);
  }
  /**
   * Label to be used to translate the suggestion source.
   */
  translateSuggestionSource() {
    return this.suggestionService.translateSuggestionSource(this.suggestionSource);
  }
  /**
   * Label to be used to translate the suggestion type.
   */
  translateSuggestionType() {
    return this.suggestionService.translateSuggestionType(this.suggestionSource);
  }
  static {
    this.ɵfac = function SuggestionsPageComponent_Factory(t) {
      return new (t || SuggestionsPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_13__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_core_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_3__.PaginationService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_25__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_25__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_notifications_suggestions_service__WEBPACK_IMPORTED_MODULE_10__.SuggestionsService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_notifications_suggestion_targets_suggestion_targets_state_service__WEBPACK_IMPORTED_MODULE_9__.SuggestionTargetsStateService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_core_submission_workspaceitem_data_service__WEBPACK_IMPORTED_MODULE_6__.WorkspaceitemDataService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineComponent"]({
      type: SuggestionsPageComponent,
      selectors: [["ds-suggestion-page"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵStandaloneFeature"]],
      decls: 5,
      vars: 3,
      consts: [[1, "container"], [1, "row"], [1, "col-12"], [4, "ngVar"], [4, "ngIf"], [3, "type", 4, "ngIf"], ["target", "_blank", 3, "routerLink"], [1, "mb-3", "mt-3"], [1, "btn", "mr-2", "btn-light", 3, "click"], ["class", "m-2", 3, "isBulk", "isCollectionFixed", "approveAndImport", "ignoreSuggestionClicked", 4, "ngIf"], ["class", "fas fa-circle-notch fa-spin", 4, "ngIf"], [3, "paginationOptions", "sortOptions", "collectionSize", "hideGear", "hidePagerWhenSinglePage", "hidePaginationDetail", "paginationChange", 4, "ngIf"], [1, "m-2", 3, "approveAndImport", "ignoreSuggestionClicked", "isBulk", "isCollectionFixed"], [1, "fas", "fa-circle-notch", "fa-spin"], [3, "paginationChange", "paginationOptions", "sortOptions", "collectionSize", "hideGear", "hidePagerWhenSinglePage", "hidePaginationDetail"], [1, "list-unstyled"], ["class", "mt-4 mb-4", 4, "ngFor", "ngForOf"], [1, "mt-4", "mb-4"], [3, "ignoreSuggestionClicked", "selected", "approveAndImport", "object", "isSelected", "isCollectionFixed"], [3, "type"]],
      template: function SuggestionsPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](3, SuggestionsPageComponent_ng_container_3_Template, 7, 9, "ng-container", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](4, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngVar", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](4, 1, ctx.suggestionsRD$));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_27__.AsyncPipe, _shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_16__.VarDirective, _angular_common__WEBPACK_IMPORTED_MODULE_27__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_25__.RouterLink, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__.TranslatePipe, _notifications_suggestion_actions_suggestion_actions_component__WEBPACK_IMPORTED_MODULE_7__.SuggestionActionsComponent, _shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_12__.ThemedLoadingComponent, _shared_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_14__.PaginationComponent, _notifications_suggestion_list_element_suggestion_list_element_component__WEBPACK_IMPORTED_MODULE_8__.SuggestionListElementComponent, _angular_common__WEBPACK_IMPORTED_MODULE_27__.NgForOf, _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_11__.AlertComponent],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1Z2dlc3Rpb25zLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUEiLCJmaWxlIjoic3VnZ2VzdGlvbnMtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc3VnZ2VzdGlvbnMtcGFnZS9zdWdnZXN0aW9ucy1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBO0FBQ0Esd2tCQUF3a0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqLyJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 42757:
/*!***************************************************************!*\
  !*** ./src/app/suggestions-page/suggestions-page.resolver.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   suggestionsPageResolver: () => (/* binding */ suggestionsPageResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _core_notifications_suggestions_target_suggestion_target_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/notifications/suggestions/target/suggestion-target-data.service */ 94791);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/shared/operators */ 55757);



/**
 * Method for resolving a suggestion target based on the parameters in the current route
 * @param {ActivatedRouteSnapshot} route The current ActivatedRouteSnapshot
 * @param {RouterStateSnapshot} state The current RouterStateSnapshot
 * @param {SuggestionTargetDataService} suggestionsDataService
 * @returns Observable<<RemoteData<Collection>> Emits the found collection based on the parameters in the current route,
 * or an error if something went wrong
 */
const suggestionsPageResolver = (route, state, suggestionsDataService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_core_notifications_suggestions_target_suggestion_target_data_service__WEBPACK_IMPORTED_MODULE_0__.SuggestionTargetDataService)) => {
  return suggestionsDataService.getTargetById(route.params.targetId).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_1__.getFirstCompletedRemoteData)());
};

/***/ }),

/***/ 32707:
/*!*************************************************************************************************************************************************************!*\
  !*** ./src/themes/custom/app/shared/object-list/search-result-list-element/item-search-result/item-types/item/item-search-result-list-element.component.ts ***!
  \*************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ItemSearchResultListElementComponent: () => (/* binding */ ItemSearchResultListElementComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 50694);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _app_core_shared_context_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../../app/core/shared/context.model */ 26292);
/* harmony import */ var _app_core_shared_view_mode_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../../app/core/shared/view-mode.model */ 78448);
/* harmony import */ var _app_shared_object_collection_shared_badges_themed_badges_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../app/shared/object-collection/shared/badges/themed-badges.component */ 55309);
/* harmony import */ var _app_shared_object_collection_shared_item_search_result_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../../app/shared/object-collection/shared/item-search-result.model */ 27442);
/* harmony import */ var _app_shared_object_collection_shared_listable_object_listable_object_decorator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../../app/shared/object-collection/shared/listable-object/listable-object.decorator */ 81569);
/* harmony import */ var _app_shared_object_list_search_result_list_element_item_search_result_item_types_item_item_search_result_list_element_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../../../app/shared/object-list/search-result-list-element/item-search-result/item-types/item/item-search-result-list-element.component */ 94418);
/* harmony import */ var _app_shared_truncatable_truncatable_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../../../app/shared/truncatable/truncatable.component */ 21308);
/* harmony import */ var _app_shared_truncatable_truncatable_part_truncatable_part_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../../../app/shared/truncatable/truncatable-part/truncatable-part.component */ 41100);
/* harmony import */ var _app_thumbnail_themed_thumbnail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../../../app/thumbnail/themed-thumbnail.component */ 97402);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 90310);













const _c0 = a0 => [a0];
const _c1 = () => ["dc.contributor.author", "dc.creator", "dc.contributor.*"];
function ItemSearchResultListElementComponent_div_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "ds-thumbnail", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("target", ctx_r0.linkType === ctx_r0.linkTypes.ExternalLink ? "_blank" : "_self")("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](7, _c0, ctx_r0.itemPageRoute));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵattribute"]("rel", ctx_r0.linkType === ctx_r0.linkTypes.ExternalLink ? "noopener noreferrer" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("thumbnail", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 5, ctx_r0.dso == null ? null : ctx_r0.dso.thumbnail))("limitWidth", true);
  }
}
function ItemSearchResultListElementComponent_div_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "ds-thumbnail", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("thumbnail", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 2, ctx_r0.dso == null ? null : ctx_r0.dso.thumbnail))("limitWidth", true);
  }
}
function ItemSearchResultListElementComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, ItemSearchResultListElementComponent_div_1_a_1_Template, 3, 9, "a", 7)(2, ItemSearchResultListElementComponent_div_1_span_2_Template, 3, 4, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.linkType !== ctx_r0.linkTypes.None);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.linkType === ctx_r0.linkTypes.None);
  }
}
function ItemSearchResultListElementComponent_ds_badges_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "ds-badges", 12);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("object", ctx_r0.dso)("context", ctx_r0.context)("showAccessStatus", true);
  }
}
function ItemSearchResultListElementComponent_ds_truncatable_5_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "a", 21);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("target", ctx_r0.linkType === ctx_r0.linkTypes.ExternalLink ? "_blank" : "_self")("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](4, _c0, ctx_r0.itemPageRoute))("innerHTML", ctx_r0.dsoTitle, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵattribute"]("rel", ctx_r0.linkType === ctx_r0.linkTypes.ExternalLink ? "noopener noreferrer" : null);
  }
}
function ItemSearchResultListElementComponent_ds_truncatable_5_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "span", 22);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("innerHTML", ctx_r0.dsoTitle, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeHtml"]);
  }
}
function ItemSearchResultListElementComponent_ds_truncatable_5_ng_container_5_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "span", 25);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("innerHTML", ctx_r0.firstMetadataValue("dc.publisher"), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeHtml"]);
  }
}
function ItemSearchResultListElementComponent_ds_truncatable_5_ng_container_5_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function ItemSearchResultListElementComponent_ds_truncatable_5_ng_container_5_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "span", 26);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("innerHTML", ctx_r0.firstMetadataValue("dc.date.issued"), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeHtml"]);
  }
}
function ItemSearchResultListElementComponent_ds_truncatable_5_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " (");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, ItemSearchResultListElementComponent_ds_truncatable_5_ng_container_5_span_2_Template, 1, 1, "span", 23)(3, ItemSearchResultListElementComponent_ds_truncatable_5_ng_container_5_span_3_Template, 2, 0, "span", 18)(4, ItemSearchResultListElementComponent_ds_truncatable_5_ng_container_5_span_4_Template, 1, 1, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.dso.firstMetadataValue("dc.publisher"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.dso.firstMetadataValue("dc.publisher") && ctx_r0.dso.firstMetadataValue("dc.date.issued"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.dso.firstMetadataValue("dc.date.issued"));
  }
}
function ItemSearchResultListElementComponent_ds_truncatable_5_span_6_span_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "; ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function ItemSearchResultListElementComponent_ds_truncatable_5_span_6_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span")(1, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, ItemSearchResultListElementComponent_ds_truncatable_5_span_6_span_1_span_3_Template, 2, 0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const author_r2 = ctx.$implicit;
    const last_r3 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("innerHTML", author_r2, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("innerHTML", author_r2, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !last_r3);
  }
}
function ItemSearchResultListElementComponent_ds_truncatable_5_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, ItemSearchResultListElementComponent_ds_truncatable_5_span_6_span_1_Template, 4, 3, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r0.allMetadataValues(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](1, _c1)));
  }
}
function ItemSearchResultListElementComponent_ds_truncatable_5_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 30)(1, "ds-truncatable-part", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("id", ctx_r0.dso.id)("minLines", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("innerHTML", ctx_r0.firstMetadataValue("dc.description.abstract"), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeHtml"]);
  }
}
function ItemSearchResultListElementComponent_ds_truncatable_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ds-truncatable", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, ItemSearchResultListElementComponent_ds_truncatable_5_a_1_Template, 1, 6, "a", 14)(2, ItemSearchResultListElementComponent_ds_truncatable_5_span_2_Template, 1, 1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "span", 16)(4, "ds-truncatable-part", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, ItemSearchResultListElementComponent_ds_truncatable_5_ng_container_5_Template, 6, 3, "ng-container", 18)(6, ItemSearchResultListElementComponent_ds_truncatable_5_span_6_Template, 2, 2, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](7, ItemSearchResultListElementComponent_ds_truncatable_5_div_7_Template, 3, 3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("id", ctx_r0.dso.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.linkType !== ctx_r0.linkTypes.None);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.linkType === ctx_r0.linkTypes.None);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("id", ctx_r0.dso.id)("minLines", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.dso.firstMetadataValue("dc.publisher") || ctx_r0.dso.firstMetadataValue("dc.date.issued"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.dso.allMetadata(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](8, _c1)).length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.dso.firstMetadataValue("dc.description.abstract"));
  }
}
let ItemSearchResultListElementComponent = class ItemSearchResultListElementComponent extends _app_shared_object_list_search_result_list_element_item_search_result_item_types_item_item_search_result_list_element_component__WEBPACK_IMPORTED_MODULE_5__.ItemSearchResultListElementComponent {
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵItemSearchResultListElementComponent_BaseFactory;
      return function ItemSearchResultListElementComponent_Factory(t) {
        return (ɵItemSearchResultListElementComponent_BaseFactory || (ɵItemSearchResultListElementComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetInheritedFactory"](ItemSearchResultListElementComponent)))(t || ItemSearchResultListElementComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
      type: ItemSearchResultListElementComponent,
      selectors: [["ds-item-search-result-list-element"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵStandaloneFeature"]],
      decls: 6,
      vars: 4,
      consts: [[1, "row"], ["class", "col-3 col-md-2", 4, "ngIf"], [3, "ngClass"], [1, "d-flex"], [3, "object", "context", "showAccessStatus", 4, "ngIf"], [3, "id", 4, "ngIf"], [1, "col-3", "col-md-2"], ["class", "dont-break-out", 3, "target", "routerLink", 4, "ngIf"], ["class", "dont-break-out", 4, "ngIf"], [1, "dont-break-out", 3, "target", "routerLink"], [3, "thumbnail", "limitWidth"], [1, "dont-break-out"], [3, "object", "context", "showAccessStatus"], [3, "id"], ["class", "lead item-list-title dont-break-out", 3, "target", "routerLink", "innerHTML", 4, "ngIf"], ["class", "lead item-list-title dont-break-out", 3, "innerHTML", 4, "ngIf"], [1, "text-muted"], [3, "id", "minLines"], [4, "ngIf"], ["class", "item-list-authors", 4, "ngIf"], ["class", "item-list-abstract", 4, "ngIf"], [1, "lead", "item-list-title", "dont-break-out", 3, "target", "routerLink", "innerHTML"], [1, "lead", "item-list-title", "dont-break-out", 3, "innerHTML"], ["class", "item-list-publisher", 3, "innerHTML", 4, "ngIf"], ["class", "item-list-date", 3, "innerHTML", 4, "ngIf"], [1, "item-list-publisher", 3, "innerHTML"], [1, "item-list-date", 3, "innerHTML"], [1, "item-list-authors"], [4, "ngFor", "ngForOf"], [3, "innerHTML"], [1, "item-list-abstract"]],
      template: function ItemSearchResultListElementComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, ItemSearchResultListElementComponent_div_1_Template, 3, 2, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 2)(3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, ItemSearchResultListElementComponent_ds_badges_4_Template, 1, 3, "ds-badges", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, ItemSearchResultListElementComponent_ds_truncatable_5_Template, 8, 9, "ds-truncatable", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.showThumbnails);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", ctx.showThumbnails ? "col-9" : "col-md-12");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.showLabel);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.object !== undefined && ctx.object !== null);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLink, _app_thumbnail_themed_thumbnail_component__WEBPACK_IMPORTED_MODULE_8__.ThemedThumbnailComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _app_shared_object_collection_shared_badges_themed_badges_component__WEBPACK_IMPORTED_MODULE_2__.ThemedBadgesComponent, _app_shared_truncatable_truncatable_component__WEBPACK_IMPORTED_MODULE_6__.TruncatableComponent, _app_shared_truncatable_truncatable_part_truncatable_part_component__WEBPACK_IMPORTED_MODULE_7__.TruncatablePartComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgFor, _angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.item-list-supervision[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW0tc2VhcmNoLXJlc3VsdC1saXN0LWVsZW1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBO0VBQ0UsZUFBQTtBQUNGIiwiZmlsZSI6Iml0ZW0tc2VhcmNoLXJlc3VsdC1saXN0LWVsZW1lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqL1xuLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi9cbi5pdGVtLWxpc3Qtc3VwZXJ2aXNpb24gYSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL29iamVjdC1saXN0L3NlYXJjaC1yZXN1bHQtbGlzdC1lbGVtZW50L2l0ZW0tc2VhcmNoLXJlc3VsdC9pdGVtLXR5cGVzL2l0ZW0vaXRlbS1zZWFyY2gtcmVzdWx0LWxpc3QtZWxlbWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBO0FBQ0E7RUFDRSxlQUFBO0FBQ0Y7QUFDQSxvaUNBQW9pQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovXG4vKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqL1xuLml0ZW0tbGlzdC1zdXBlcnZpc2lvbiBhIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
};
ItemSearchResultListElementComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_app_shared_object_collection_shared_listable_object_listable_object_decorator__WEBPACK_IMPORTED_MODULE_4__.listableObjectComponent)('PublicationSearchResult', _app_core_shared_view_mode_model__WEBPACK_IMPORTED_MODULE_1__.ViewMode.ListElement, _app_core_shared_context_model__WEBPACK_IMPORTED_MODULE_0__.Context.Any, 'custom'), (0,_app_shared_object_collection_shared_listable_object_listable_object_decorator__WEBPACK_IMPORTED_MODULE_4__.listableObjectComponent)(_app_shared_object_collection_shared_item_search_result_model__WEBPACK_IMPORTED_MODULE_3__.ItemSearchResult, _app_core_shared_view_mode_model__WEBPACK_IMPORTED_MODULE_1__.ViewMode.ListElement, _app_core_shared_context_model__WEBPACK_IMPORTED_MODULE_0__.Context.Any, 'custom')], ItemSearchResultListElementComponent);


/***/ })

}]);
//# sourceMappingURL=src_app_suggestions-page_suggestions-page-routes_ts.js.map