(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_app_import-external-page_import-external-page-routes_ts"],{

/***/ 71772:
/*!*********************************************************************!*\
  !*** ./src/app/import-external-page/import-external-page-routes.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ROUTES: () => (/* binding */ ROUTES)
/* harmony export */ });
/* harmony import */ var _core_auth_authenticated_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/auth/authenticated.guard */ 49347);
/* harmony import */ var _submission_import_external_themed_submission_import_external_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../submission/import-external/themed-submission-import-external.component */ 14174);


const ROUTES = [{
  canActivate: [_core_auth_authenticated_guard__WEBPACK_IMPORTED_MODULE_0__.authenticatedGuard],
  path: '',
  component: _submission_import_external_themed_submission_import_external_component__WEBPACK_IMPORTED_MODULE_1__.ThemedSubmissionImportExternalComponent,
  pathMatch: 'full',
  data: {
    title: 'submission.import-external.page.title'
  }
}];

/***/ }),

/***/ 63342:
/*!********************************************************************************************************************!*\
  !*** ./src/app/submission/import-external/import-external-preview/submission-import-external-preview.component.ts ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SubmissionImportExternalPreviewComponent: () => (/* binding */ SubmissionImportExternalPreviewComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 74671);
/* harmony import */ var _core_shared_external_source_entry_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/shared/external-source-entry.model */ 24881);
/* harmony import */ var _core_shared_metadata_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/shared/metadata.utils */ 39552);
/* harmony import */ var _shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/notifications/notifications.service */ 69472);
/* harmony import */ var _submission_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../submission.service */ 61010);
/* harmony import */ var _import_external_collection_submission_import_external_collection_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../import-external-collection/submission-import-external-collection.component */ 98794);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 49966);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 14354);
















function SubmissionImportExternalPreviewComponent_div_17_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const metadatum_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](metadatum_r1.value);
  }
}
function SubmissionImportExternalPreviewComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 5)(1, "p", 6)(2, "strong", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, SubmissionImportExternalPreviewComponent_div_17_ng_container_6_Template, 4, 1, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const metadata_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 2, "item.preview." + metadata_r2.key));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", metadata_r2.values);
  }
}
/**
 * This component display a preview of an external source item.
 */
class SubmissionImportExternalPreviewComponent {
  /**
   * Initialize the component variables.
   * @param {NgbActiveModal} activeModal
   * @param {SubmissionService} submissionService
   * @param {NgbModal} modalService
   * @param {Router} router
   * @param {NotificationsService} notificationService
   */
  constructor(activeModal, submissionService, modalService, router, notificationService) {
    this.activeModal = activeModal;
    this.submissionService = submissionService;
    this.modalService = modalService;
    this.router = router;
    this.notificationService = notificationService;
  }
  /**
   * Metadata initialization for HTML display.
   */
  ngOnInit() {
    this.metadataList = [];
    const metadataKeys = Object.keys(this.externalSourceEntry.metadata);
    metadataKeys.forEach(key => {
      this.metadataList.push({
        key: key,
        values: _core_shared_metadata_utils__WEBPACK_IMPORTED_MODULE_1__.Metadata.all(this.externalSourceEntry.metadata, key)
      });
    });
  }
  /**
   * Closes the modal.
   */
  closeMetadataModal() {
    this.activeModal.dismiss(false);
  }
  /**
   * Start the import of an entry by opening up a collection choice modal window.
   */
  import() {
    this.modalRef = this.modalService.open(_import_external_collection_submission_import_external_collection_component__WEBPACK_IMPORTED_MODULE_4__.SubmissionImportExternalCollectionComponent, {
      size: 'lg'
    });
    this.modalRef.componentInstance.entityType = this.labelPrefix;
    this.closeMetadataModal();
    this.modalRef.componentInstance.selectedEvent.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.mergeMap)(collectionListEntry => {
      return this.submissionService.createSubmissionFromExternalSource(this.externalSourceEntry._links.self.href, collectionListEntry.collection.id);
    })).subscribe(submissionObjects => {
      let isValid = false;
      if (submissionObjects.length === 1) {
        if (submissionObjects[0] !== null) {
          isValid = true;
          this.router.navigateByUrl('/workspaceitems/' + submissionObjects[0].id + '/edit');
        }
      }
      if (!isValid) {
        this.notificationService.error('submission.import-external.preview.error.import.title', 'submission.import-external.preview.error.import.body');
      }
      this.modalRef.close();
    });
  }
  static {
    this.ɵfac = function SubmissionImportExternalPreviewComponent_Factory(t) {
      return new (t || SubmissionImportExternalPreviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_submission_service__WEBPACK_IMPORTED_MODULE_3__.SubmissionService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_2__.NotificationsService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: SubmissionImportExternalPreviewComponent,
      selectors: [["ds-submission-import-external-preview"]],
      inputs: {
        externalSourceEntry: "externalSourceEntry"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵStandaloneFeature"]],
      decls: 27,
      vars: 10,
      consts: [[1, "modal-header"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "container"], [1, "row"], [1, "col-md-12"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "col-md-12", "text-right"], ["role", "button", 1, "btn", "btn-success", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-file-import"], [1, ""], [4, "ngFor", "ngForOf"]],
      template: function SubmissionImportExternalPreviewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SubmissionImportExternalPreviewComponent_Template_button_click_4_listener() {
            return ctx.closeMetadataModal();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 3)(8, "div", 4)(9, "div", 5)(10, "div", 6)(11, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](13, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 5)(15, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "hr");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, SubmissionImportExternalPreviewComponent_div_17_Template, 7, 4, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 5)(19, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "hr");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 5)(22, "div", 8)(23, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SubmissionImportExternalPreviewComponent_Template_button_click_23_listener() {
            return ctx.import();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](24, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](26, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 4, "submission.import-external.preview.title." + ctx.labelPrefix));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](13, 6, "submission.import-external.preview.subtitle"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.metadataList);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](26, 8, "submission.import-external.preview.button.import"), " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgFor, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n.close[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1Ym1pc3Npb24taW1wb3J0LWV4dGVybmFsLXByZXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQTtFQUNFLHdCQUFBO0FBQ0YiLCJmaWxlIjoic3VibWlzc2lvbi1pbXBvcnQtZXh0ZXJuYWwtcHJldmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovXG4uY2xvc2U6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc3VibWlzc2lvbi9pbXBvcnQtZXh0ZXJuYWwvaW1wb3J0LWV4dGVybmFsLXByZXZpZXcvc3VibWlzc2lvbi1pbXBvcnQtZXh0ZXJuYWwtcHJldmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBO0VBQ0Usd0JBQUE7QUFDRjtBQUNBLG90QkFBb3RCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi9cbi5jbG9zZTpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 21440:
/*!************************************************************************************************************************!*\
  !*** ./src/app/submission/import-external/import-external-searchbar/submission-import-external-searchbar.component.ts ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SubmissionImportExternalSearchbarComponent: () => (/* binding */ SubmissionImportExternalSearchbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 56106);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 49966);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-infinite-scroll */ 21001);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 17796);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 60494);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 21252);
/* harmony import */ var _core_cache_models_request_param_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/cache/models/request-param.model */ 53954);
/* harmony import */ var _core_data_external_source_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/data/external-source-data.service */ 57514);
/* harmony import */ var _core_data_find_list_options_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/data/find-list-options.model */ 41023);
/* harmony import */ var _core_data_paginated_list_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/data/paginated-list.model */ 96820);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/shared/operators */ 55757);
/* harmony import */ var _core_shared_page_info_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/shared/page-info.model */ 32089);
/* harmony import */ var _shared_btn_disabled_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/btn-disabled.directive */ 60456);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/empty.util */ 82777);
/* harmony import */ var _shared_host_window_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/host-window.service */ 57538);
/* harmony import */ var _shared_remote_data_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/remote-data.utils */ 43404);


























const _c0 = a0 => ({
  "input-group-append": a0
});
function SubmissionImportExternalSearchbarComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 10)(1, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("keyup.enter", function SubmissionImportExternalSearchbarComponent_div_0_Template_input_keyup_enter_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.searchString === "" ? null : ctx_r1.search());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayListener"]("ngModelChange", function SubmissionImportExternalSearchbarComponent_div_0_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayBindingSet"](ctx_r1.searchString, $event) || (ctx_r1.searchString = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 3, "submission.import-external.search.placeholder"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.searchString);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 5, "submission.import-external.search.placeholder"));
  }
}
function SubmissionImportExternalSearchbarComponent_input_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("keyup.enter", function SubmissionImportExternalSearchbarComponent_input_3_Template_input_keyup_enter_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.searchString === "" ? null : ctx_r1.search());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayListener"]("ngModelChange", function SubmissionImportExternalSearchbarComponent_input_3_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayBindingSet"](ctx_r1.searchString, $event) || (ctx_r1.searchString = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](1, 3, "submission.import-external.search.placeholder"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.searchString);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 5, "submission.import-external.search.placeholder"));
  }
}
function SubmissionImportExternalSearchbarComponent_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SubmissionImportExternalSearchbarComponent_button_14_Template_button_click_0_listener() {
      const source_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.makeSourceSelection(source_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const source_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, "submission.import-external.source." + (source_r5 == null ? null : source_r5.name)));
  }
}
function SubmissionImportExternalSearchbarComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 13)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 1, "submission.import-external.source.loading"));
  }
}
/**
 * This component builds the searchbar for the submission external import.
 */
class SubmissionImportExternalSearchbarComponent {
  /**
   * Initialize the component variables.
   * @param {ExternalSourceDataService} externalService
   * @param {ChangeDetectorRef} cdr
   * @param {HostWindowService} windowService
   */
  constructor(externalService, cdr, windowService) {
    this.externalService = externalService;
    this.cdr = cdr;
    this.windowService = windowService;
    /**
     * The external sources loading status.
     */
    this.sourceListLoading = false;
    /**
     * The external source data to use to perform the search.
     */
    this.externalSourceData = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter();
  }
  /**
   * Component initialization and retrieve first page of external sources.
   */
  ngOnInit() {
    this.selectedElement = {
      id: '',
      name: 'loading'
    };
    this.searchString = '';
    this.sourceList = [];
    this.findListOptions = Object.assign({}, new _core_data_find_list_options_model__WEBPACK_IMPORTED_MODULE_2__.FindListOptions(), {
      elementsPerPage: 5,
      currentPage: 1,
      searchParams: [new _core_cache_models_request_param_model__WEBPACK_IMPORTED_MODULE_0__.RequestParam('entityType', this.initExternalSourceData.entity)]
    });
    this.externalService.searchBy('findByEntityType', this.findListOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.catchError)(() => {
      const pageInfo = new _core_shared_page_info_model__WEBPACK_IMPORTED_MODULE_5__.PageInfo();
      const paginatedList = (0,_core_data_paginated_list_model__WEBPACK_IMPORTED_MODULE_3__.buildPaginatedList)(pageInfo, []);
      const paginatedListRD = (0,_shared_remote_data_utils__WEBPACK_IMPORTED_MODULE_9__.createSuccessfulRemoteDataObject)(paginatedList);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.of)(paginatedListRD);
    }), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_4__.getFirstSucceededRemoteDataPayload)()).subscribe(externalSource => {
      externalSource.page.forEach(element => {
        this.sourceList.push({
          id: element.id,
          name: element.name
        });
        if (this.initExternalSourceData.sourceId === element.id) {
          this.selectedElement = {
            id: element.id,
            name: element.name
          };
          this.searchString = this.initExternalSourceData.query;
        }
      });
      if (this.selectedElement.id === '') {
        this.selectedElement = this.sourceList[0];
      }
      this.pageInfo = externalSource.pageInfo;
      this.cdr.detectChanges();
    });
    this.isXsOrSm$ = this.windowService.isXsOrSm();
  }
  /**
   * Set the selected external source.
   */
  makeSourceSelection(source) {
    this.selectedElement = source;
  }
  /**
   * Load the next pages of external sources.
   */
  onScroll() {
    if (!this.sourceListLoading && this.pageInfo.currentPage + 1 <= this.pageInfo.totalPages) {
      this.sourceListLoading = true;
      this.findListOptions = Object.assign({}, new _core_data_find_list_options_model__WEBPACK_IMPORTED_MODULE_2__.FindListOptions(), {
        elementsPerPage: 5,
        currentPage: this.findListOptions.currentPage + 1,
        searchParams: [new _core_cache_models_request_param_model__WEBPACK_IMPORTED_MODULE_0__.RequestParam('entityType', this.initExternalSourceData.entity)]
      });
      this.externalService.searchBy('findByEntityType', this.findListOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.catchError)(() => {
        const pageInfo = new _core_shared_page_info_model__WEBPACK_IMPORTED_MODULE_5__.PageInfo();
        const paginatedList = (0,_core_data_paginated_list_model__WEBPACK_IMPORTED_MODULE_3__.buildPaginatedList)(pageInfo, []);
        const paginatedListRD = (0,_shared_remote_data_utils__WEBPACK_IMPORTED_MODULE_9__.createSuccessfulRemoteDataObject)(paginatedList);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.of)(paginatedListRD);
      }), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_4__.getFirstSucceededRemoteData)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.tap)(() => this.sourceListLoading = false)).subscribe(externalSource => {
        externalSource.payload.page.forEach(element => {
          this.sourceList.push({
            id: element.id,
            name: element.name
          });
        });
        this.pageInfo = externalSource.payload.pageInfo;
        this.cdr.detectChanges();
      });
    }
  }
  /**
   * Passes the search parameters to the parent component.
   */
  search() {
    this.externalSourceData.emit({
      entity: this.initExternalSourceData.entity,
      sourceId: this.selectedElement.id,
      query: this.searchString
    });
  }
  /**
   * Unsubscribe from all subscriptions
   */
  ngOnDestroy() {
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_7__.hasValue)(this.sub)) {
      this.sub.unsubscribe();
    }
  }
  static {
    this.ɵfac = function SubmissionImportExternalSearchbarComponent_Factory(t) {
      return new (t || SubmissionImportExternalSearchbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_data_external_source_data_service__WEBPACK_IMPORTED_MODULE_1__.ExternalSourceDataService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_shared_host_window_service__WEBPACK_IMPORTED_MODULE_8__.HostWindowService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
      type: SubmissionImportExternalSearchbarComponent,
      selectors: [["ds-submission-import-external-searchbar"]],
      inputs: {
        initExternalSourceData: "initExternalSourceData"
      },
      outputs: {
        externalSourceData: "externalSourceData"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵStandaloneFeature"]],
      decls: 20,
      vars: 32,
      consts: [["class", "input-group mb-2", 4, "ngIf"], [1, "input-group", "mb-5"], ["type", "text", "class", "form-control", 3, "ngModel", "placeholder", "keyup.enter", "ngModelChange", 4, "ngIf"], ["ngbDropdown", "", "role", "group", 3, "ngClass"], ["ngbDropdownToggle", "", 1, "btn", "btn-outline-secondary", "w-fx", 3, "title"], ["ngbDropdownMenu", "", "aria-haspopup", "true", "aria-expanded", "false", 1, "dropdown-menu", "scrollable-dropdown-menu", "w-100"], ["infiniteScroll", "", 1, "scrollable-menu", 3, "scrolled", "infiniteScrollDistance", "infiniteScrollThrottle", "scrollWindow"], ["ngbDropdownItem", "", "class", "dropdown-item text-truncate", 3, "click", 4, "ngFor", "ngForOf"], ["ngbDropdownItem", "", "class", "scrollable-dropdown-loading text-center", 4, "ngIf"], ["type", "button", 1, "btn", "btn-primary", 3, "click", "title", "dsBtnDisabled"], [1, "input-group", "mb-2"], ["type", "text", 1, "form-control", 3, "keyup.enter", "ngModelChange", "ngModel", "placeholder"], ["ngbDropdownItem", "", 1, "dropdown-item", "text-truncate", 3, "click"], ["ngbDropdownItem", "", 1, "scrollable-dropdown-loading", "text-center"]],
      template: function SubmissionImportExternalSearchbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](0, SubmissionImportExternalSearchbarComponent_div_0_Template, 4, 7, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](1, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, SubmissionImportExternalSearchbarComponent_input_3_Template, 3, 7, "input", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](6, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](8, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](9, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](11, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "ul", 5)(13, "li", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("scrolled", function SubmissionImportExternalSearchbarComponent_Template_li_scrolled_13_listener() {
            return ctx.onScroll();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](14, SubmissionImportExternalSearchbarComponent_button_14_Template, 3, 3, "button", 7)(15, SubmissionImportExternalSearchbarComponent_div_15_Template, 4, 3, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](17, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SubmissionImportExternalSearchbarComponent_Template_button_click_16_listener() {
            return ctx.search();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](19, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](1, 14, ctx.isXsOrSm$));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 16, ctx.isXsOrSm$) !== true);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](30, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](6, 18, ctx.isXsOrSm$) !== true));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](8, 20, "submission.import-external.search.source.hint"));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](9, 22, "submission.import-external.search.source.hint"));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](11, 24, "submission.import-external.source." + (ctx.selectedElement == null ? null : ctx.selectedElement.name)), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("infiniteScrollDistance", 2)("infiniteScrollThrottle", 50)("scrollWindow", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.sourceList);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.sourceListLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("title", ctx.searchString === "" ? _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](17, 26, "submission.import-external.search.button.hint") : "")("dsBtnDisabled", ctx.searchString === "");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](19, 28, "submission.import-external.search.button"));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslatePipe, ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_16__.InfiniteScrollModule, ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_16__.InfiniteScrollDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbDropdownModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbDropdownMenu, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbDropdownItem, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgModel, _shared_btn_disabled_directive__WEBPACK_IMPORTED_MODULE_6__.BtnDisabledDirective],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n.input-group-append[_ngcontent-%COMP%]:last-child    > .btn[_ngcontent-%COMP%]:not(:last-child):not(.dropdown-toggle) {\n  margin-left: -1px;\n  border-radius: 0 0.25rem 0.25rem 0;\n}\n\n.input-group-append[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%] {\n  border-radius: 0;\n}\n\n.w-fx[_ngcontent-%COMP%] {\n  min-width: 200px;\n}\n\n.scrollable-menu[_ngcontent-%COMP%] {\n  height: auto;\n  max-height: calc(var(--ds-dropdown-menu-max-height) / 2);\n  overflow-x: hidden;\n}\n\n.scrollable-dropdown-loading[_ngcontent-%COMP%] {\n  background-color: var(--bs-primary);\n  color: white;\n  height: calc(var(--bs-spacer) * 2) !important;\n  line-height: calc(var(--bs-spacer) * 2);\n  position: sticky;\n  bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1Ym1pc3Npb24taW1wb3J0LWV4dGVybmFsLXNlYXJjaGJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBO0VBQ0UsaUJBQUE7RUFDQSxrQ0FBQTtBQUNGOztBQUNBO0VBQ0UsZ0JBQUE7QUFFRjs7QUFBQTtFQUNFLGdCQUFBO0FBR0Y7O0FBREE7RUFDRSxZQUFBO0VBQ0Esd0RBQUE7RUFDQSxrQkFBQTtBQUlGOztBQUZBO0VBQ0UsbUNBQUE7RUFDQSxZQUFBO0VBQ0EsNkNBQUE7RUFDQSx1Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtBQUtGIiwiZmlsZSI6InN1Ym1pc3Npb24taW1wb3J0LWV4dGVybmFsLXNlYXJjaGJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovXG4uaW5wdXQtZ3JvdXAtYXBwZW5kOmxhc3QtY2hpbGQgPiAuYnRuOm5vdCg6bGFzdC1jaGlsZCk6bm90KC5kcm9wZG93bi10b2dnbGUpIHtcbiAgbWFyZ2luLWxlZnQ6IC0xcHg7XG4gIGJvcmRlci1yYWRpdXM6IDAgMC4yNXJlbSAwLjI1cmVtIDA7XG59XG4uaW5wdXQtZ3JvdXAtYXBwZW5kIC5kcm9wZG93bi10b2dnbGUge1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuLnctZngge1xuICBtaW4td2lkdGg6IDIwMHB4O1xufVxuLnNjcm9sbGFibGUtbWVudSB7XG4gIGhlaWdodDogYXV0bztcbiAgbWF4LWhlaWdodDogY2FsYyh2YXIoLS1kcy1kcm9wZG93bi1tZW51LW1heC1oZWlnaHQpIC8gMik7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cbi5zY3JvbGxhYmxlLWRyb3Bkb3duLWxvYWRpbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1icy1wcmltYXJ5KTtcbiAgY29sb3I6IHdoaXRlO1xuICBoZWlnaHQ6IGNhbGModmFyKC0tYnMtc3BhY2VyKSAqIDIpICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiBjYWxjKHZhcigtLWJzLXNwYWNlcikgKiAyKTtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgYm90dG9tOiAwO1xufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc3VibWlzc2lvbi9pbXBvcnQtZXh0ZXJuYWwvaW1wb3J0LWV4dGVybmFsLXNlYXJjaGJhci9zdWJtaXNzaW9uLWltcG9ydC1leHRlcm5hbC1zZWFyY2hiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQTtFQUNFLGlCQUFBO0VBQ0Esa0NBQUE7QUFDRjs7QUFDQTtFQUNFLGdCQUFBO0FBRUY7O0FBQUE7RUFDRSxnQkFBQTtBQUdGOztBQURBO0VBQ0UsWUFBQTtFQUNBLHdEQUFBO0VBQ0Esa0JBQUE7QUFJRjs7QUFGQTtFQUNFLG1DQUFBO0VBQ0EsWUFBQTtFQUNBLDZDQUFBO0VBQ0EsdUNBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7QUFLRjtBQUNBLGdwREFBZ3BEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi9cbi5pbnB1dC1ncm91cC1hcHBlbmQ6bGFzdC1jaGlsZCA+IC5idG46bm90KDpsYXN0LWNoaWxkKTpub3QoLmRyb3Bkb3duLXRvZ2dsZSkge1xuICBtYXJnaW4tbGVmdDogLTFweDtcbiAgYm9yZGVyLXJhZGl1czogMCAwLjI1cmVtIDAuMjVyZW0gMDtcbn1cbi5pbnB1dC1ncm91cC1hcHBlbmQgLmRyb3Bkb3duLXRvZ2dsZSB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG4udy1meCB7XG4gIG1pbi13aWR0aDogMjAwcHg7XG59XG4uc2Nyb2xsYWJsZS1tZW51IHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXgtaGVpZ2h0OiBjYWxjKHZhcigtLWRzLWRyb3Bkb3duLW1lbnUtbWF4LWhlaWdodCkgLyAyKTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuLnNjcm9sbGFibGUtZHJvcGRvd24tbG9hZGluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJzLXByaW1hcnkpO1xuICBjb2xvcjogd2hpdGU7XG4gIGhlaWdodDogY2FsYyh2YXIoLS1icy1zcGFjZXIpICogMikgIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IGNhbGModmFyKC0tYnMtc3BhY2VyKSAqIDIpO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICBib3R0b206IDA7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 63232:
/*!************************************************************************************!*\
  !*** ./src/app/submission/import-external/submission-import-external.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SubmissionImportExternalComponent: () => (/* binding */ SubmissionImportExternalComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs */ 83485);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs */ 27639);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs/operators */ 78374);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs/operators */ 85687);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! rxjs/operators */ 84975);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! rxjs/operators */ 21252);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! rxjs/operators */ 74671);
/* harmony import */ var src_app_shared_alert_alert_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/alert/alert-type */ 47978);
/* harmony import */ var _core_data_external_source_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/data/external-source-data.service */ 57514);
/* harmony import */ var _core_data_paginated_list_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/data/paginated-list.model */ 96820);
/* harmony import */ var _core_services_route_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/route.service */ 27297);
/* harmony import */ var _core_shared_context_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/shared/context.model */ 26292);
/* harmony import */ var _core_shared_item_relationships_item_type_resource_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/shared/item-relationships/item-type.resource-type */ 49623);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/shared/operators */ 55757);
/* harmony import */ var _core_shared_page_info_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/shared/page-info.model */ 32089);
/* harmony import */ var _core_shared_search_search_configuration_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/shared/search/search-configuration.service */ 68611);
/* harmony import */ var _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/alert/alert.component */ 16292);
/* harmony import */ var _shared_animations_fade__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/animations/fade */ 50332);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/empty.util */ 82777);
/* harmony import */ var _shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/loading/themed-loading.component */ 82394);
/* harmony import */ var _shared_object_collection_object_collection_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/object-collection/object-collection.component */ 14828);
/* harmony import */ var _shared_pagination_pagination_component_options_model__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/pagination/pagination-component-options.model */ 23401);
/* harmony import */ var _shared_remote_data_utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../shared/remote-data.utils */ 43404);
/* harmony import */ var _shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../shared/utils/var.directive */ 18226);
/* harmony import */ var _import_external_preview_submission_import_external_preview_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./import-external-preview/submission-import-external-preview.component */ 63342);
/* harmony import */ var _import_external_searchbar_submission_import_external_searchbar_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./import-external-searchbar/submission-import-external-searchbar.component */ 21440);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 49966);
































const _c0 = () => ["/mydspace"];
const _c1 = (a0, a1) => ({
  repeatable: a0,
  listId: a1
});
function SubmissionImportExternalComponent_div_7_div_1_ng_container_1_h2_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](2, 1, "submission.sections.describe.relationship-lookup.selection-tab.title"));
  }
}
function SubmissionImportExternalComponent_div_7_div_1_ng_container_1_ds_viewable_collection_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "ds-viewable-collection", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("importObject", function SubmissionImportExternalComponent_div_7_div_1_ng_container_1_ds_viewable_collection_2_Template_ds_viewable_collection_importObject_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.import($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const entriesRD_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().ngVar;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("@fadeIn", undefined)("objects", entriesRD_r3)("selectionConfig", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction2"](8, _c1, ctx_r1.repeatable, ctx_r1.listId))("config", ctx_r1.initialPagination)("hideGear", true)("context", ctx_r1.context)("importable", true)("importConfig", ctx_r1.importConfig);
  }
}
function SubmissionImportExternalComponent_div_7_div_1_ng_container_1_ds_loading_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "ds-loading", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("message", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](1, 1, "loading.search-results"));
  }
}
function SubmissionImportExternalComponent_div_7_div_1_ng_container_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 17)(1, "ds-alert", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("type", ctx_r1.AlertType.Info);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](3, 2, "search.results.empty"));
  }
}
function SubmissionImportExternalComponent_div_7_div_1_ng_container_1_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 19)(1, "ds-alert", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("type", ctx_r1.AlertType.Info);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](3, 2, "search.results.response.500"));
  }
}
function SubmissionImportExternalComponent_div_7_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, SubmissionImportExternalComponent_div_7_div_1_ng_container_1_h2_1_Template, 3, 3, "h2", 10)(2, SubmissionImportExternalComponent_div_7_div_1_ng_container_1_ds_viewable_collection_2_Template, 1, 11, "ds-viewable-collection", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](4, SubmissionImportExternalComponent_div_7_div_1_ng_container_1_ds_loading_4_Template, 2, 3, "ds-loading", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](6, SubmissionImportExternalComponent_div_7_div_1_ng_container_1_div_6_Template, 4, 4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](8, SubmissionImportExternalComponent_div_7_div_1_ng_container_1_div_8_Template, 4, 4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const entriesRD_r3 = ctx.ngVar;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", entriesRD_r3 && (entriesRD_r3 == null ? null : entriesRD_r3.payload == null ? null : entriesRD_r3.payload.page == null ? null : entriesRD_r3.payload.page.length) !== 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", (entriesRD_r3 == null ? null : entriesRD_r3.hasSucceeded) && _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](3, 5, ctx_r1.isLoading$) !== true && (entriesRD_r3 == null ? null : entriesRD_r3.payload == null ? null : entriesRD_r3.payload.page == null ? null : entriesRD_r3.payload.page.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](5, 7, ctx_r1.isLoading$));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](7, 9, ctx_r1.isLoading$) !== true && (entriesRD_r3 == null ? null : entriesRD_r3.payload == null ? null : entriesRD_r3.payload.page == null ? null : entriesRD_r3.payload.page.length) === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](9, 11, ctx_r1.isLoading$) !== true && entriesRD_r3.statusCode === 500);
  }
}
function SubmissionImportExternalComponent_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, SubmissionImportExternalComponent_div_7_div_1_ng_container_1_Template, 10, 13, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngVar", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](2, 1, ctx_r1.entriesRD$));
  }
}
function SubmissionImportExternalComponent_div_7_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 2)(1, "ds-alert", 18)(2, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("type", ctx_r1.AlertType.Info);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](4, 2, "submission.import-external.page.hint"));
  }
}
function SubmissionImportExternalComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, SubmissionImportExternalComponent_div_7_div_1_Template, 3, 3, "div", 8)(2, SubmissionImportExternalComponent_div_7_div_2_Template, 5, 4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.reload$.value.sourceId !== "");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.reload$.value.sourceId === "");
  }
}
/**
 * This component allows to submit a new workspaceitem importing the data from an external source.
 */
class SubmissionImportExternalComponent {
  /**
   * Initialize the component variables.
   * @param {SearchConfigurationService} searchConfigService
   * @param {ExternalSourceDataService} externalService
   * @param {RouteService} routeService
   * @param {Router} router
   * @param {NgbModal} modalService
   */
  constructor(searchConfigService, externalService, routeService, router, modalService) {
    this.searchConfigService = searchConfigService;
    this.externalService = externalService;
    this.routeService = routeService;
    this.router = router;
    this.modalService = modalService;
    /**
     * The displayed list of entries
     */
    this.entriesRD$ = new rxjs__WEBPACK_IMPORTED_MODULE_20__.BehaviorSubject(null);
    /**
     * TRUE if the REST service is called to retrieve the external source items
     */
    this.isLoading$ = new rxjs__WEBPACK_IMPORTED_MODULE_20__.BehaviorSubject(false);
    this.reload$ = new rxjs__WEBPACK_IMPORTED_MODULE_20__.BehaviorSubject({
      entity: '',
      query: '',
      sourceId: ''
    });
    /**
     * The initial pagination options
     */
    this.initialPagination = Object.assign(new _shared_pagination_pagination_component_options_model__WEBPACK_IMPORTED_MODULE_14__.PaginationComponentOptions(), {
      id: 'spc',
      pageSize: 10
    });
    /**
     * The subscription to unsubscribe
     */
    this.subs = [];
    this.AlertType = src_app_shared_alert_alert_type__WEBPACK_IMPORTED_MODULE_0__.AlertType;
  }
  /**
   * Get the entries for the selected external source and set initial configuration.
   */
  ngOnInit() {
    this.listId = 'list-submission-external-sources';
    this.context = _core_shared_context_model__WEBPACK_IMPORTED_MODULE_4__.Context.EntitySearchModalWithNameVariants;
    this.repeatable = false;
    this.routeData = {
      entity: '',
      sourceId: '',
      query: ''
    };
    this.importConfig = {
      buttonLabel: 'submission.sections.describe.relationship-lookup.external-source.import-button-title.' + this.label
    };
    this.entriesRD$ = new rxjs__WEBPACK_IMPORTED_MODULE_20__.BehaviorSubject((0,_shared_remote_data_utils__WEBPACK_IMPORTED_MODULE_15__.createSuccessfulRemoteDataObject)((0,_core_data_paginated_list_model__WEBPACK_IMPORTED_MODULE_2__.buildPaginatedList)(new _core_shared_page_info_model__WEBPACK_IMPORTED_MODULE_7__.PageInfo(), [])));
    this.isLoading$ = new rxjs__WEBPACK_IMPORTED_MODULE_20__.BehaviorSubject(false);
    this.subs.push((0,rxjs__WEBPACK_IMPORTED_MODULE_21__.combineLatest)([this.routeService.getQueryParameterValue('entity'), this.routeService.getQueryParameterValue('sourceId'), this.routeService.getQueryParameterValue('query')]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.take)(1)).subscribe(([entity, sourceId, query]) => {
      this.reload$.next({
        entity: entity || _core_shared_item_relationships_item_type_resource_type__WEBPACK_IMPORTED_MODULE_5__.NONE_ENTITY_TYPE,
        query: query,
        sourceId: sourceId
      });
      this.selectLabel(entity);
      this.retrieveExternalSources();
    }));
  }
  /**
   * Get the data from the searchbar and changes the router data.
   */
  getExternalSourceData(event) {
    this.router.navigate([], {
      queryParams: event,
      replaceUrl: true
    }).then(() => {
      this.reload$.next(event);
      this.retrieveExternalSources();
    });
  }
  /**
   * Display an item preview by opening up an import modal window.
   * @param entry The entry to import
   */
  import(entry) {
    this.modalRef = this.modalService.open(_import_external_preview_submission_import_external_preview_component__WEBPACK_IMPORTED_MODULE_17__.SubmissionImportExternalPreviewComponent, {
      size: 'lg'
    });
    const modalComp = this.modalRef.componentInstance;
    modalComp.externalSourceEntry = entry;
    modalComp.labelPrefix = this.label;
  }
  /**
   * Unsubscribe from all subscriptions
   */
  ngOnDestroy() {
    this.subs.filter(sub => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_11__.hasValue)(sub)).forEach(sub => sub.unsubscribe());
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_11__.hasValue)(this.retrieveExternalSourcesSub)) {
      this.retrieveExternalSourcesSub.unsubscribe();
    }
  }
  /**
   * Retrieve external source entries.
   */
  retrieveExternalSources() {
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_11__.hasValue)(this.retrieveExternalSourcesSub)) {
      this.retrieveExternalSourcesSub.unsubscribe();
    }
    this.retrieveExternalSourcesSub = this.reload$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.filter)(sourceQueryObject => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_11__.isNotEmpty)(sourceQueryObject.sourceId) && (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_11__.isNotEmpty)(sourceQueryObject.query)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_24__.switchMap)(sourceQueryObject => {
      const query = sourceQueryObject.query;
      this.routeData = sourceQueryObject;
      return this.searchConfigService.paginatedSearchOptions.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_25__.tap)(() => this.isLoading$.next(true)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.filter)(searchOptions => searchOptions.query === query), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_26__.mergeMap)(searchOptions => this.externalService.getExternalSourceEntries(this.routeData.sourceId, searchOptions).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_6__.getFinishedRemoteData)())));
    })).subscribe(rdData => {
      this.entriesRD$.next(rdData);
      this.isLoading$.next(false);
    });
  }
  /**
   * Set the correct button label, depending on the entity.
   *
   * @param entity The entity name
   */
  selectLabel(entity) {
    this.label = entity;
    this.importConfig = {
      buttonLabel: 'submission.sections.describe.relationship-lookup.external-source.import-button-title.' + this.label
    };
  }
  static {
    this.ɵfac = function SubmissionImportExternalComponent_Factory(t) {
      return new (t || SubmissionImportExternalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_core_shared_search_search_configuration_service__WEBPACK_IMPORTED_MODULE_8__.SearchConfigurationService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_core_data_external_source_data_service__WEBPACK_IMPORTED_MODULE_1__.ExternalSourceDataService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_core_services_route_service__WEBPACK_IMPORTED_MODULE_3__.RouteService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_27__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_28__.NgbModal));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineComponent"]({
      type: SubmissionImportExternalComponent,
      selectors: [["ds-base-submission-import-external"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵStandaloneFeature"]],
      decls: 15,
      vars: 10,
      consts: [[1, "container"], [1, "row"], [1, "col-md-12"], ["id", "header", 1, "pb-2"], [3, "externalSourceData", "initExternalSourceData"], ["class", "row", 4, "ngIf"], ["role", "button", 1, "btn", "btn-outline-secondary", 3, "routerLink"], ["aria-hidden", "true", 1, "fa", "fa-chevron-left"], ["class", "col-md-12", 4, "ngIf"], [4, "ngVar"], [4, "ngIf"], [3, "objects", "selectionConfig", "config", "hideGear", "context", "importable", "importConfig", "importObject", 4, "ngIf"], [3, "message", 4, "ngIf"], ["data-test", "empty-external-entry-list", 4, "ngIf"], ["data-test", "empty-external-error-500", 4, "ngIf"], [3, "importObject", "objects", "selectionConfig", "config", "hideGear", "context", "importable", "importConfig"], [3, "message"], ["data-test", "empty-external-entry-list"], [3, "type"], ["data-test", "empty-external-error-500"], [1, "lead", "mb-0"]],
      template: function SubmissionImportExternalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](5, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](6, "ds-submission-import-external-searchbar", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("externalSourceData", function SubmissionImportExternalComponent_Template_ds_submission_import_external_searchbar_externalSourceData_6_listener($event) {
            return ctx.getExternalSourceData($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](7, SubmissionImportExternalComponent_div_7_Template, 3, 2, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](8, "div", 1)(9, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](10, "hr");
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](11, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](12, "i", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](14, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](5, 5, "submission.import-external.title" + (ctx.label ? "." + ctx.label : "")));
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("initExternalSourceData", ctx.reload$.value);
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.reload$.value.entity);
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction0"](9, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](14, 7, "submission.import-external.back-to-my-dspace"), " ");
        }
      },
      dependencies: [_shared_object_collection_object_collection_component__WEBPACK_IMPORTED_MODULE_13__.ObjectCollectionComponent, _shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_12__.ThemedLoadingComponent, _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_9__.AlertComponent, _angular_common__WEBPACK_IMPORTED_MODULE_29__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_29__.AsyncPipe, _import_external_searchbar_submission_import_external_searchbar_component__WEBPACK_IMPORTED_MODULE_18__.SubmissionImportExternalSearchbarComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_30__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_30__.TranslatePipe, _shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_16__.VarDirective, _angular_router__WEBPACK_IMPORTED_MODULE_27__.RouterLink],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1Ym1pc3Npb24taW1wb3J0LWV4dGVybmFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBIiwiZmlsZSI6InN1Ym1pc3Npb24taW1wb3J0LWV4dGVybmFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi8iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc3VibWlzc2lvbi9pbXBvcnQtZXh0ZXJuYWwvc3VibWlzc2lvbi1pbXBvcnQtZXh0ZXJuYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQSxvbUJBQW9tQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
      data: {
        animation: [_shared_animations_fade__WEBPACK_IMPORTED_MODULE_10__.fadeIn]
      }
    });
  }
}

/***/ }),

/***/ 14174:
/*!*******************************************************************************************!*\
  !*** ./src/app/submission/import-external/themed-submission-import-external.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemedSubmissionImportExternalComponent: () => (/* binding */ ThemedSubmissionImportExternalComponent)
/* harmony export */ });
/* harmony import */ var _shared_theme_support_themed_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/theme-support/themed.component */ 8886);
/* harmony import */ var _submission_import_external_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./submission-import-external.component */ 63232);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);



const _c0 = ["*"];
function ThemedSubmissionImportExternalComponent_ng_template_0_Template(rf, ctx) {}
/**
 * Themed wrapper for SubmissionImportExternalComponent
 */
class ThemedSubmissionImportExternalComponent extends _shared_theme_support_themed_component__WEBPACK_IMPORTED_MODULE_0__.ThemedComponent {
  getComponentName() {
    return 'SubmissionImportExternalComponent';
  }
  importThemedComponent(themeName) {
    return __webpack_require__(83068)(`./${themeName}/app/submission/import-external/submission-import-external.component`);
  }
  importUnthemedComponent() {
    return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./submission-import-external.component */ 63232));
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵThemedSubmissionImportExternalComponent_BaseFactory;
      return function ThemedSubmissionImportExternalComponent_Factory(t) {
        return (ɵThemedSubmissionImportExternalComponent_BaseFactory || (ɵThemedSubmissionImportExternalComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](ThemedSubmissionImportExternalComponent)))(t || ThemedSubmissionImportExternalComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ThemedSubmissionImportExternalComponent,
      selectors: [["ds-submission-import-external"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      ngContentSelectors: _c0,
      decls: 5,
      vars: 0,
      consts: [["vcr", ""], ["content", ""]],
      template: function ThemedSubmissionImportExternalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ThemedSubmissionImportExternalComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
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

/***/ 83068:
/*!********************************************************************************************************************************!*\
  !*** ./src/themes/ lazy ^\.\/.*\/app\/submission\/import\-external\/submission\-import\-external\.component$ namespace object ***!
  \********************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./custom/app/submission/import-external/submission-import-external.component": [
		33207,
		"src_themes_custom_app_submission_import-external_submission-import-external_component_ts"
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
webpackAsyncContext.id = 83068;
module.exports = webpackAsyncContext;

/***/ })

}]);
//# sourceMappingURL=src_app_import-external-page_import-external-page-routes_ts.js.map