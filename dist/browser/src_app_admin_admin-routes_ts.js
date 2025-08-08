(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_app_admin_admin-routes_ts"],{

/***/ 73654:
/*!******************************************************************************!*\
  !*** ./src/app/admin/admin-curation-tasks/admin-curation-tasks.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminCurationTasksComponent: () => (/* binding */ AdminCurationTasksComponent)
/* harmony export */ });
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var _curation_form_curation_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../curation-form/curation-form.component */ 3040);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 90310);




/**
 * Component responsible for rendering the system wide Curation Task UI
 */
class AdminCurationTasksComponent {
  static {
    this.ɵfac = function AdminCurationTasksComponent_Factory(t) {
      return new (t || AdminCurationTasksComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AdminCurationTasksComponent,
      selectors: [["ds-admin-curation-task"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 5,
      vars: 3,
      consts: [[1, "container"]],
      template: function AdminCurationTasksComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "ds-curation-form");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 1, "admin.curation-tasks.header"));
        }
      },
      dependencies: [_curation_form_curation_form_component__WEBPACK_IMPORTED_MODULE_0__.CurationFormComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 42712:
/*!******************************************************************************!*\
  !*** ./src/app/admin/admin-import-batch-page/batch-import-page.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BatchImportPageComponent: () => (/* binding */ BatchImportPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 56106);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var ngx_ui_switch__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-ui-switch */ 74253);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 78374);
/* harmony import */ var _core_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/breadcrumbs/dso-name.service */ 96526);
/* harmony import */ var _core_data_processes_script_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/data/processes/script-data.service */ 32736);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/shared/operators */ 55757);
/* harmony import */ var _process_page_process_page_routing_paths__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../process-page/process-page-routing.paths */ 1504);
/* harmony import */ var _process_page_processes_process_parameter_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../process-page/processes/process-parameter.model */ 73666);
/* harmony import */ var _shared_dso_selector_modal_wrappers_import_batch_selector_import_batch_selector_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/dso-selector/modal-wrappers/import-batch-selector/import-batch-selector.component */ 55562);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/empty.util */ 82777);
/* harmony import */ var _shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/notifications/notifications.service */ 69472);
/* harmony import */ var _shared_upload_file_dropzone_no_uploader_file_dropzone_no_uploader_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/upload/file-dropzone-no-uploader/file-dropzone-no-uploader.component */ 2448);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 49966);


























function BatchImportPageComponent_p_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " selected collection: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function BatchImportPageComponent_p_7_Template_a_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.removeDspaceObject());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r1.getDspaceObjectName());
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](7, 2, "admin.batch-import.page.remove"));
  }
}
function BatchImportPageComponent_ds_file_dropzone_no_uploader_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ds-file-dropzone-no-uploader", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onFileAdded", function BatchImportPageComponent_ds_file_dropzone_no_uploader_27_Template_ds_file_dropzone_no_uploader_onFileAdded_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.setFile($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("dropMessageLabel", "admin.batch-import.page.dropMsg")("dropMessageLabelReplacement", "admin.batch-import.page.dropMsgReplace");
  }
}
function BatchImportPageComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 18)(1, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayListener"]("ngModelChange", function BatchImportPageComponent_div_28_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayBindingSet"](ctx_r1.fileURL, $event) || (ctx_r1.fileURL = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 2, "admin.metadata-import.page.urlMsg"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.fileURL);
  }
}
class BatchImportPageComponent {
  constructor(location, translate, notificationsService, scriptDataService, router, modalService, dsoNameService) {
    this.location = location;
    this.translate = translate;
    this.notificationsService = notificationsService;
    this.scriptDataService = scriptDataService;
    this.router = router;
    this.modalService = modalService;
    this.dsoNameService = dsoNameService;
    /**
     * The validate only flag
     */
    this.validateOnly = true;
    /**
     * dso object for community or collection
     */
    this.dso = null;
    /**
     * The flag between upload and url
     */
    this.isUpload = true;
  }
  /**
   * Set file
   * @param file
   */
  setFile(file) {
    this.fileObject = file;
  }
  /**
   * When return button is pressed go to previous location
   */
  onReturn() {
    this.location.back();
  }
  selectCollection() {
    const modalRef = this.modalService.open(_shared_dso_selector_modal_wrappers_import_batch_selector_import_batch_selector_component__WEBPACK_IMPORTED_MODULE_5__.ImportBatchSelectorComponent);
    modalRef.componentInstance.response.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.take)(1)).subscribe(dso => {
      this.dso = dso || null;
    });
  }
  /**
   * Starts import-metadata script with --zip fileName (and the selected file)
   */
  importMetadata() {
    if (this.fileObject == null && (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_6__.isEmpty)(this.fileURL)) {
      if (this.isUpload) {
        this.notificationsService.error(this.translate.get('admin.metadata-import.page.error.addFile'));
      } else {
        this.notificationsService.error(this.translate.get('admin.metadata-import.page.error.addFileUrl'));
      }
    } else {
      const parameterValues = [Object.assign(new _process_page_processes_process_parameter_model__WEBPACK_IMPORTED_MODULE_4__.ProcessParameter(), {
        name: '--add'
      })];
      if (this.isUpload) {
        parameterValues.push(Object.assign(new _process_page_processes_process_parameter_model__WEBPACK_IMPORTED_MODULE_4__.ProcessParameter(), {
          name: '--zip',
          value: this.fileObject.name
        }));
      } else {
        this.fileObject = null;
        parameterValues.push(Object.assign(new _process_page_processes_process_parameter_model__WEBPACK_IMPORTED_MODULE_4__.ProcessParameter(), {
          name: '--url',
          value: this.fileURL
        }));
      }
      if (this.dso) {
        parameterValues.push(Object.assign(new _process_page_processes_process_parameter_model__WEBPACK_IMPORTED_MODULE_4__.ProcessParameter(), {
          name: '--collection',
          value: this.dso.uuid
        }));
      }
      if (this.validateOnly) {
        parameterValues.push(Object.assign(new _process_page_processes_process_parameter_model__WEBPACK_IMPORTED_MODULE_4__.ProcessParameter(), {
          name: '-v',
          value: true
        }));
      }
      this.scriptDataService.invoke(_core_data_processes_script_data_service__WEBPACK_IMPORTED_MODULE_1__.BATCH_IMPORT_SCRIPT_NAME, parameterValues, [this.fileObject]).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_2__.getFirstCompletedRemoteData)()).subscribe(rd => {
        if (rd.hasSucceeded) {
          const title = this.translate.get('process.new.notification.success.title');
          const content = this.translate.get('process.new.notification.success.content');
          this.notificationsService.success(title, content);
          if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_6__.isNotEmpty)(rd.payload)) {
            this.router.navigateByUrl((0,_process_page_process_page_routing_paths__WEBPACK_IMPORTED_MODULE_3__.getProcessDetailRoute)(rd.payload.processId));
          }
        } else {
          if (rd.statusCode === 413) {
            const title = this.translate.get('process.new.notification.error.title');
            const content = this.translate.get('process.new.notification.error.max-upload.content');
            this.notificationsService.error(title, content);
          } else {
            const title = this.translate.get('process.new.notification.error.title');
            const content = this.translate.get('process.new.notification.error.content');
            this.notificationsService.error(title, content);
          }
        }
      });
    }
  }
  /**
   * return selected dspace object name
  */
  getDspaceObjectName() {
    if (this.dso) {
      return this.dsoNameService.getName(this.dso);
    }
    return null;
  }
  /**
   * remove selected dso object
   */
  removeDspaceObject() {
    this.dso = null;
  }
  /**
   * toggle the flag between upload and url
   */
  toggleUpload() {
    this.isUpload = !this.isUpload;
  }
  static {
    this.ɵfac = function BatchImportPageComponent_Factory(t) {
      return new (t || BatchImportPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_7__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_core_data_processes_script_data_service__WEBPACK_IMPORTED_MODULE_1__.ScriptDataService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_core_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_0__.DSONameService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
      type: BatchImportPageComponent,
      selectors: [["ds-batch-import-page"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵStandaloneFeature"]],
      decls: 36,
      vars: 35,
      consts: [[1, "container"], ["id", "header"], [4, "ngIf"], [1, "btn", "btn-primary", 3, "click"], [1, "form-group"], [1, "form-check"], ["type", "checkbox", "id", "validateOnly", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["for", "validateOnly", 1, "form-check-label"], ["id", "validateOnlyHelpBlock", 1, "form-text", "text-muted"], ["color", "#ebebeb", 3, "change", "checkedLabel", "uncheckedLabel", "checked"], [1, "form-text", "text-muted"], ["data-test", "file-dropzone", 3, "dropMessageLabel", "dropMessageLabelReplacement", "onFileAdded", 4, "ngIf"], ["class", "form-group mt-2", 4, "ngIf"], [1, "space-children-mr"], ["id", "backButton", 1, "btn", "btn-secondary", 3, "click"], ["id", "proceedButton", 1, "btn", "btn-primary", 3, "click"], ["href", "javascript:void(0)", 3, "click"], ["data-test", "file-dropzone", 3, "onFileAdded", "dropMessageLabel", "dropMessageLabelReplacement"], [1, "form-group", "mt-2"], ["type", "text", "data-test", "file-url-input", 1, "form-control", 3, "ngModelChange", "placeholder", "ngModel"]],
      template: function BatchImportPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](6, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](7, BatchImportPageComponent_p_7_Template, 8, 4, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "p")(9, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function BatchImportPageComponent_Template_button_click_9_listener() {
            return ctx.selectCollection();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](11, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "div", 4)(13, "div", 5)(14, "input", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayListener"]("ngModelChange", function BatchImportPageComponent_Template_input_ngModelChange_14_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayBindingSet"](ctx.validateOnly, $event) || (ctx.validateOnly = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "label", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](17, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "small", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](20, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "ui-switch", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](22, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](23, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function BatchImportPageComponent_Template_ui_switch_change_21_listener() {
            return ctx.toggleUpload();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "small", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](25);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](26, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](27, BatchImportPageComponent_ds_file_dropzone_no_uploader_27_Template, 1, 2, "ds-file-dropzone-no-uploader", 11)(28, BatchImportPageComponent_div_28_Template, 3, 4, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "div", 13)(30, "button", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function BatchImportPageComponent_Template_button_click_30_listener() {
            return ctx.onReturn();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](31);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](32, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](33, "button", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function BatchImportPageComponent_Template_button_click_33_listener() {
            return ctx.importMetadata();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](34);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](35, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 15, "admin.batch-import.page.header"));
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](6, 17, "admin.batch-import.page.help"));
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.dso);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](11, 19, "admin.metadata-import.page.button.select-collection"));
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayProperty"]("ngModel", ctx.validateOnly);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](17, 21, "admin.metadata-import.page.validateOnly"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](20, 23, "admin.batch-import.page.validateOnly.hint"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("checkedLabel", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](22, 25, "admin.metadata-import.page.toggle.upload"))("uncheckedLabel", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](23, 27, "admin.metadata-import.page.toggle.url"))("checked", ctx.isUpload);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](26, 29, "admin.batch-import.page.toggle.help"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.isUpload);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.isUpload);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](32, 31, "admin.metadata-import.page.button.return"));
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](35, 33, "admin.metadata-import.page.button.proceed"));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslatePipe, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgModel, ngx_ui_switch__WEBPACK_IMPORTED_MODULE_16__.UiSwitchModule, ngx_ui_switch__WEBPACK_IMPORTED_MODULE_16__.UiSwitchComponent, _shared_upload_file_dropzone_no_uploader_file_dropzone_no_uploader_component__WEBPACK_IMPORTED_MODULE_8__.FileDropzoneNoUploaderComponent],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 45706:
/*!************************************************************************************!*\
  !*** ./src/app/admin/admin-import-metadata-page/metadata-import-page.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MetadataImportPageComponent: () => (/* binding */ MetadataImportPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 56106);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var _core_data_processes_script_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/data/processes/script-data.service */ 32736);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/shared/operators */ 55757);
/* harmony import */ var _process_page_process_page_routing_paths__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../process-page/process-page-routing.paths */ 1504);
/* harmony import */ var _process_page_processes_process_parameter_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../process-page/processes/process-parameter.model */ 73666);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/empty.util */ 82777);
/* harmony import */ var _shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/notifications/notifications.service */ 69472);
/* harmony import */ var _shared_upload_file_dropzone_no_uploader_file_dropzone_no_uploader_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/upload/file-dropzone-no-uploader/file-dropzone-no-uploader.component */ 2448);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 14354);


















/**
 * Component that represents a metadata import page for administrators
 */
class MetadataImportPageComponent {
  constructor(location, translate, notificationsService, scriptDataService, router) {
    this.location = location;
    this.translate = translate;
    this.notificationsService = notificationsService;
    this.scriptDataService = scriptDataService;
    this.router = router;
    /**
     * The validate only flag
     */
    this.validateOnly = true;
  }
  /**
   * Set file
   * @param file
   */
  setFile(file) {
    this.fileObject = file;
  }
  /**
   * When return button is pressed go to previous location
   */
  onReturn() {
    this.location.back();
  }
  /**
   * Starts import-metadata script with -f fileName (and the selected file)
   */
  importMetadata() {
    if (this.fileObject == null) {
      this.notificationsService.error(this.translate.get('admin.metadata-import.page.error.addFile'));
    } else {
      const parameterValues = [Object.assign(new _process_page_processes_process_parameter_model__WEBPACK_IMPORTED_MODULE_3__.ProcessParameter(), {
        name: '-f',
        value: this.fileObject.name
      })];
      if (this.validateOnly) {
        parameterValues.push(Object.assign(new _process_page_processes_process_parameter_model__WEBPACK_IMPORTED_MODULE_3__.ProcessParameter(), {
          name: '-v',
          value: true
        }));
      }
      this.scriptDataService.invoke(_core_data_processes_script_data_service__WEBPACK_IMPORTED_MODULE_0__.METADATA_IMPORT_SCRIPT_NAME, parameterValues, [this.fileObject]).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_1__.getFirstCompletedRemoteData)()).subscribe(rd => {
        if (rd.hasSucceeded) {
          const title = this.translate.get('process.new.notification.success.title');
          const content = this.translate.get('process.new.notification.success.content');
          this.notificationsService.success(title, content);
          if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_4__.isNotEmpty)(rd.payload)) {
            this.router.navigateByUrl((0,_process_page_process_page_routing_paths__WEBPACK_IMPORTED_MODULE_2__.getProcessDetailRoute)(rd.payload.processId));
          }
        } else {
          const title = this.translate.get('process.new.notification.error.title');
          const content = this.translate.get('process.new.notification.error.content');
          this.notificationsService.error(title, content);
        }
      });
    }
  }
  static {
    this.ɵfac = function MetadataImportPageComponent_Factory(t) {
      return new (t || MetadataImportPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_5__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_data_processes_script_data_service__WEBPACK_IMPORTED_MODULE_0__.ScriptDataService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: MetadataImportPageComponent,
      selectors: [["ds-base-metadata-import-page"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵStandaloneFeature"]],
      decls: 24,
      vars: 21,
      consts: [[1, "container"], ["id", "header"], [1, "form-group"], [1, "form-check"], ["type", "checkbox", "id", "validateOnly", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["for", "validateOnly", 1, "form-check-label"], ["id", "validateOnlyHelpBlock", 1, "form-text", "text-muted"], [3, "onFileAdded", "dropMessageLabel", "dropMessageLabelReplacement"], [1, "space-children-mr"], ["id", "backButton", 1, "btn", "btn-secondary", 3, "click"], ["id", "proceedButton", 1, "btn", "btn-primary", 3, "click"]],
      template: function MetadataImportPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 2)(8, "div", 3)(9, "input", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function MetadataImportPageComponent_Template_input_ngModelChange_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.validateOnly, $event) || (ctx.validateOnly = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](12, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "small", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](15, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "ds-file-dropzone-no-uploader", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onFileAdded", function MetadataImportPageComponent_Template_ds_file_dropzone_no_uploader_onFileAdded_16_listener($event) {
            return ctx.setFile($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 8)(18, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MetadataImportPageComponent_Template_button_click_18_listener() {
            return ctx.onReturn();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](20, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MetadataImportPageComponent_Template_button_click_21_listener() {
            return ctx.importMetadata();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](23, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 9, "admin.metadata-import.page.header"));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](6, 11, "admin.metadata-import.page.help"));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx.validateOnly);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](12, 13, "admin.metadata-import.page.validateOnly"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](15, 15, "admin.metadata-import.page.validateOnly.hint"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dropMessageLabel", "admin.metadata-import.page.dropMsg")("dropMessageLabelReplacement", "admin.metadata-import.page.dropMsgReplace");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](20, 17, "admin.metadata-import.page.button.return"));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](23, 19, "admin.metadata-import.page.button.proceed"));
        }
      },
      dependencies: [_shared_upload_file_dropzone_no_uploader_file_dropzone_no_uploader_component__WEBPACK_IMPORTED_MODULE_6__.FileDropzoneNoUploaderComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 89106:
/*!*******************************************************************************************!*\
  !*** ./src/app/admin/admin-import-metadata-page/themed-metadata-import-page.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemedMetadataImportPageComponent: () => (/* binding */ ThemedMetadataImportPageComponent)
/* harmony export */ });
/* harmony import */ var _shared_theme_support_themed_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/theme-support/themed.component */ 8886);
/* harmony import */ var _metadata_import_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./metadata-import-page.component */ 45706);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);



const _c0 = ["*"];
function ThemedMetadataImportPageComponent_ng_template_0_Template(rf, ctx) {}
/**
 * Themed wrapper for {@link MetadataImportPageComponent}.
 */
class ThemedMetadataImportPageComponent extends _shared_theme_support_themed_component__WEBPACK_IMPORTED_MODULE_0__.ThemedComponent {
  getComponentName() {
    return 'MetadataImportPageComponent';
  }
  importThemedComponent(themeName) {
    return __webpack_require__(63324)(`./${themeName}/app/admin/admin-import-metadata-page/metadata-import-page.component`);
  }
  importUnthemedComponent() {
    return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./metadata-import-page.component */ 45706));
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵThemedMetadataImportPageComponent_BaseFactory;
      return function ThemedMetadataImportPageComponent_Factory(t) {
        return (ɵThemedMetadataImportPageComponent_BaseFactory || (ɵThemedMetadataImportPageComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](ThemedMetadataImportPageComponent)))(t || ThemedMetadataImportPageComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ThemedMetadataImportPageComponent,
      selectors: [["ds-metadata-import-page"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      ngContentSelectors: _c0,
      decls: 5,
      vars: 0,
      consts: [["vcr", ""], ["content", ""]],
      template: function ThemedMetadataImportPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ThemedMetadataImportPageComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
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

/***/ 23228:
/*!***************************************!*\
  !*** ./src/app/admin/admin-routes.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ROUTES: () => (/* binding */ ROUTES)
/* harmony export */ });
/* harmony import */ var _core_breadcrumbs_i18n_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/breadcrumbs/i18n-breadcrumb.resolver */ 72059);
/* harmony import */ var _admin_curation_tasks_admin_curation_tasks_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-curation-tasks/admin-curation-tasks.component */ 73654);
/* harmony import */ var _admin_import_batch_page_batch_import_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-import-batch-page/batch-import-page.component */ 42712);
/* harmony import */ var _admin_import_metadata_page_themed_metadata_import_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-import-metadata-page/themed-metadata-import-page.component */ 89106);
/* harmony import */ var _admin_routing_paths__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin-routing-paths */ 47483);
/* harmony import */ var _admin_search_page_admin_search_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin-search-page/admin-search-page.component */ 91440);
/* harmony import */ var _admin_workflow_page_admin_workflow_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin-workflow-page/admin-workflow-page.component */ 76576);







const ROUTES = [{
  path: _admin_routing_paths__WEBPACK_IMPORTED_MODULE_4__.NOTIFICATIONS_MODULE_PATH,
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_core_breadcrumbs_quality-assurance-breadcrumb_resolver_ts-src_app_notificatio-52f0a5"), __webpack_require__.e("src_app_admin_admin-notifications_admin-notifications-routes_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./admin-notifications/admin-notifications-routes */ 32476)).then(m => m.ROUTES)
}, {
  path: _admin_routing_paths__WEBPACK_IMPORTED_MODULE_4__.REGISTRIES_MODULE_PATH,
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_core_data_metadata-field-data_service_ts"), __webpack_require__.e("default-src_app_core_registry_registry_service_ts"), __webpack_require__.e("src_app_admin_admin-registries_admin-registries-routes_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./admin-registries/admin-registries-routes */ 46016)).then(m => m.ROUTES)
}, {
  path: 'search',
  resolve: {
    breadcrumb: _core_breadcrumbs_i18n_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_0__.i18nBreadcrumbResolver
  },
  component: _admin_search_page_admin_search_page_component__WEBPACK_IMPORTED_MODULE_5__.AdminSearchPageComponent,
  data: {
    title: 'admin.search.title',
    breadcrumbKey: 'admin.search'
  }
}, {
  path: 'workflow',
  resolve: {
    breadcrumb: _core_breadcrumbs_i18n_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_0__.i18nBreadcrumbResolver
  },
  component: _admin_workflow_page_admin_workflow_page_component__WEBPACK_IMPORTED_MODULE_6__.AdminWorkflowPageComponent,
  data: {
    title: 'admin.workflow.title',
    breadcrumbKey: 'admin.workflow'
  }
}, {
  path: 'curation-tasks',
  resolve: {
    breadcrumb: _core_breadcrumbs_i18n_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_0__.i18nBreadcrumbResolver
  },
  component: _admin_curation_tasks_admin_curation_tasks_component__WEBPACK_IMPORTED_MODULE_1__.AdminCurationTasksComponent,
  data: {
    title: 'admin.curation-tasks.title',
    breadcrumbKey: 'admin.curation-tasks'
  }
}, {
  path: 'metadata-import',
  resolve: {
    breadcrumb: _core_breadcrumbs_i18n_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_0__.i18nBreadcrumbResolver
  },
  component: _admin_import_metadata_page_themed_metadata_import_page_component__WEBPACK_IMPORTED_MODULE_3__.ThemedMetadataImportPageComponent,
  data: {
    title: 'admin.metadata-import.title',
    breadcrumbKey: 'admin.metadata-import'
  }
}, {
  path: 'batch-import',
  resolve: {
    breadcrumb: _core_breadcrumbs_i18n_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_0__.i18nBreadcrumbResolver
  },
  component: _admin_import_batch_page_batch_import_page_component__WEBPACK_IMPORTED_MODULE_2__.BatchImportPageComponent,
  data: {
    title: 'admin.batch-import.title',
    breadcrumbKey: 'admin.batch-import'
  }
}, {
  path: 'system-wide-alert',
  resolve: {
    breadcrumb: _core_breadcrumbs_i18n_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_0__.i18nBreadcrumbResolver
  },
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_system-wide-alert_system-wide-alert-routes_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../system-wide-alert/system-wide-alert-routes */ 67460)).then(m => m.ROUTES),
  data: {
    title: 'admin.system-wide-alert.title',
    breadcrumbKey: 'admin.system-wide-alert'
  }
}, {
  path: _admin_routing_paths__WEBPACK_IMPORTED_MODULE_4__.LDN_PATH,
  children: [{
    path: '',
    pathMatch: 'full',
    redirectTo: 'services'
  }, {
    path: 'services',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_admin_admin-ldn-services_admin-ldn-services-routes_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./admin-ldn-services/admin-ldn-services-routes */ 43776)).then(m => m.ROUTES)
  }]
}, {
  path: _admin_routing_paths__WEBPACK_IMPORTED_MODULE_4__.REPORTS_MODULE_PATH,
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_core_data_metadata-field-data_service_ts"), __webpack_require__.e("src_app_admin_admin-reports_admin-reports-routes_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./admin-reports/admin-reports-routes */ 63452)).then(m => m.ROUTES)
}, {
  path: _admin_routing_paths__WEBPACK_IMPORTED_MODULE_4__.NOTIFY_DASHBOARD_MODULE_PATH,
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_admin_admin-notify-dashboard_admin-notify-dashboard-routes_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./admin-notify-dashboard/admin-notify-dashboard-routes */ 60962)).then(m => m.ROUTES)
}];

/***/ }),

/***/ 91440:
/*!************************************************************************!*\
  !*** ./src/app/admin/admin-search-page/admin-search-page.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminSearchPageComponent: () => (/* binding */ AdminSearchPageComponent)
/* harmony export */ });
/* harmony import */ var _core_shared_context_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/shared/context.model */ 26292);
/* harmony import */ var _search_page_themed_configuration_search_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../search-page/themed-configuration-search-page.component */ 4021);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);



/**
 * Component that represents a search page for administrators
 */
class AdminSearchPageComponent {
  constructor() {
    /**
     * The context of this page
     */
    this.context = _core_shared_context_model__WEBPACK_IMPORTED_MODULE_0__.Context.AdminSearch;
  }
  static {
    this.ɵfac = function AdminSearchPageComponent_Factory(t) {
      return new (t || AdminSearchPageComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: AdminSearchPageComponent,
      selectors: [["ds-admin-search-page"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 1,
      vars: 1,
      consts: [["configuration", "administrativeView", 3, "context"]],
      template: function AdminSearchPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "ds-configuration-search-page", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("context", ctx.context);
        }
      },
      dependencies: [_search_page_themed_configuration_search_page_component__WEBPACK_IMPORTED_MODULE_1__.ThemedConfigurationSearchPageComponent],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLXNlYXJjaC1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBIiwiZmlsZSI6ImFkbWluLXNlYXJjaC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi8iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWRtaW4vYWRtaW4tc2VhcmNoLXBhZ2UvYWRtaW4tc2VhcmNoLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQSw0a0JBQTRrQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 76576:
/*!****************************************************************************!*\
  !*** ./src/app/admin/admin-workflow-page/admin-workflow-page.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminWorkflowPageComponent: () => (/* binding */ AdminWorkflowPageComponent)
/* harmony export */ });
/* harmony import */ var _core_shared_context_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/shared/context.model */ 26292);
/* harmony import */ var _search_page_themed_configuration_search_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../search-page/themed-configuration-search-page.component */ 4021);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);



/**
 * Component that represents a workflow item search page for administrators
 */
class AdminWorkflowPageComponent {
  constructor() {
    /**
     * The context of this page
     */
    this.context = _core_shared_context_model__WEBPACK_IMPORTED_MODULE_0__.Context.AdminWorkflowSearch;
  }
  static {
    this.ɵfac = function AdminWorkflowPageComponent_Factory(t) {
      return new (t || AdminWorkflowPageComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: AdminWorkflowPageComponent,
      selectors: [["ds-admin-workflow-page"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 1,
      vars: 1,
      consts: [["configuration", "supervision", 3, "context"]],
      template: function AdminWorkflowPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "ds-configuration-search-page", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("context", ctx.context);
        }
      },
      dependencies: [_search_page_themed_configuration_search_page_component__WEBPACK_IMPORTED_MODULE_1__.ThemedConfigurationSearchPageComponent],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLXdvcmtmbG93LXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUEiLCJmaWxlIjoiYWRtaW4td29ya2Zsb3ctcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWRtaW4vYWRtaW4td29ya2Zsb3ctcGFnZS9hZG1pbi13b3JrZmxvdy1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBO0FBQ0EsZ2xCQUFnbEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqLyJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 90839:
/*!************************************************************!*\
  !*** ./src/app/breadcrumbs/breadcrumb/breadcrumb.model.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 3040:
/*!**********************************************************!*\
  !*** ./src/app/curation-form/curation-form.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ }),

/***/ 55562:
/*!*************************************************************************************************************!*\
  !*** ./src/app/shared/dso-selector/modal-wrappers/import-batch-selector/import-batch-selector.component.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImportBatchSelectorComponent: () => (/* binding */ ImportBatchSelectorComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 17796);
/* harmony import */ var _core_shared_collection_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/shared/collection.model */ 6041);
/* harmony import */ var _core_shared_dspace_object_type_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/shared/dspace-object-type.model */ 13864);
/* harmony import */ var _dso_selector_dso_selector_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dso-selector/dso-selector.component */ 73183);
/* harmony import */ var _dso_selector_modal_wrapper_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dso-selector-modal-wrapper.component */ 54705);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 49966);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 14354);














function ImportBatchSelectorComponent_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, ctx_r0.header));
  }
}
/**
 * Component to wrap a list of existing dso's inside a modal
 * Used to choose a dso from to import metadata of
 */
class ImportBatchSelectorComponent extends _dso_selector_modal_wrapper_component__WEBPACK_IMPORTED_MODULE_3__.DSOSelectorModalWrapperComponent {
  constructor(activeModal, route) {
    super(activeModal, route);
    this.activeModal = activeModal;
    this.route = route;
    this.objectType = _core_shared_dspace_object_type_model__WEBPACK_IMPORTED_MODULE_1__.DSpaceObjectType.DSPACEOBJECT;
    this.selectorTypes = [_core_shared_dspace_object_type_model__WEBPACK_IMPORTED_MODULE_1__.DSpaceObjectType.COLLECTION];
    this.action = _dso_selector_modal_wrapper_component__WEBPACK_IMPORTED_MODULE_3__.SelectorActionType.IMPORT_BATCH;
    /**
     * An event fired when the modal is closed
     */
    this.response = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
  }
  /**
   * If the dso is a collection:
   */
  navigate(dso) {
    if (dso instanceof _core_shared_collection_model__WEBPACK_IMPORTED_MODULE_0__.Collection) {
      this.response.emit(dso);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(null);
    }
    this.response.emit(null);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(null);
  }
  static {
    this.ɵfac = function ImportBatchSelectorComponent_Factory(t) {
      return new (t || ImportBatchSelectorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: ImportBatchSelectorComponent,
      selectors: [["ds-import-batch-selector"]],
      outputs: {
        response: "response"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
      decls: 10,
      vars: 7,
      consts: [[1, "modal-header"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["class", "h5 px-2", 4, "ngIf"], [3, "onSelect", "currentDSOId", "types", "sort"], [1, "h5", "px-2"]],
      template: function ImportBatchSelectorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ImportBatchSelectorComponent_Template_button_click_4_listener() {
            return ctx.close();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, ImportBatchSelectorComponent_span_8_Template, 3, 3, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "ds-dso-selector", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onSelect", function ImportBatchSelectorComponent_Template_ds_dso_selector_onSelect_9_listener($event) {
            return ctx.selectObject($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 5, "dso-selector." + ctx.action + "." + ctx.objectType.toString().toLowerCase() + ".head"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.header);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("currentDSOId", ctx.dsoRD == null ? null : ctx.dsoRD.payload.uuid)("types", ctx.selectorTypes)("sort", ctx.defaultSort);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _dso_selector_dso_selector_component__WEBPACK_IMPORTED_MODULE_2__.DSOSelectorComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 2448:
/*!************************************************************************************************!*\
  !*** ./src/app/shared/upload/file-dropzone-no-uploader/file-dropzone-no-uploader.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FileDropzoneNoUploaderComponent: () => (/* binding */ FileDropzoneNoUploaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 56106);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/uniqueId */ 75084);
/* harmony import */ var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-file-upload */ 61893);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 17796);
/* harmony import */ var _uploader_uploader_options_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../uploader/uploader-options.model */ 32979);












function FileDropzoneNoUploaderComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8)(1, "div", 9)(2, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 1, ctx_r0.dropMessageLabel));
  }
}
function FileDropzoneNoUploaderComponent_p_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.fileObject == null ? null : ctx_r0.fileObject.name, " ");
  }
}
/**
 * Component to have a file dropzone without that dropping/choosing a file in browse automatically triggers
 * the uploader, instead an event is emitted with the file that was added.
 *
 * Here only one file is allowed to be selected, so if one is selected/dropped the message changes to a
 * replace message.
 */
class FileDropzoneNoUploaderComponent {
  constructor() {
    /**
     * The function to call when file is added
     */
    this.onFileAdded = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    /**
     * The uploader configuration options
     * @type {UploaderOptions}
     */
    this.uploadFilesOptions = Object.assign(new _uploader_uploader_options_model__WEBPACK_IMPORTED_MODULE_1__.UploaderOptions(), {
      // URL needs to contain something to not produce any errors. We are using onFileDrop; not the uploader
      url: 'placeholder'
    });
  }
  /**
   * Method provided by Angular. Invoked after the constructor.
   */
  ngOnInit() {
    this.uploaderId = 'ds-drag-and-drop-uploader' + lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0___default()();
    this.isOverDocumentDropZone = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(false);
    this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__.FileUploader({
      // required, but using onFileDrop, not uploader
      url: 'placeholder'
    });
  }
  onDrop(event) {
    event.preventDefault();
    event.stopPropagation();
  }
  onDragOver(event) {
    // Show drop area on the page
    event.preventDefault();
    event.stopPropagation();
    if (event.target.tagName !== 'HTML') {
      this.isOverDocumentDropZone = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(true);
    }
  }
  /**
   * Called when files are dragged on the window document drop area.
   */
  fileOverDocument(isOver) {
    if (!isOver) {
      this.isOverDocumentDropZone = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(isOver);
    }
  }
  handleFileInput(event) {
    const input = event.target;
    if (input.files && input.files.length > 0) {
      this.setFile(input.files);
    }
  }
  /**
   * Set file
   * @param files
   */
  setFile(files) {
    this.fileObject = files.length > 0 ? files[0] : undefined;
    this.onFileAdded.emit(this.fileObject);
  }
  static {
    this.ɵfac = function FileDropzoneNoUploaderComponent_Factory(t) {
      return new (t || FileDropzoneNoUploaderComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: FileDropzoneNoUploaderComponent,
      selectors: [["ds-file-dropzone-no-uploader"]],
      hostBindings: function FileDropzoneNoUploaderComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("drop", function FileDropzoneNoUploaderComponent_drop_HostBindingHandler($event) {
            return ctx.onDrop($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"])("dragover", function FileDropzoneNoUploaderComponent_dragover_HostBindingHandler($event) {
            return ctx.onDragOver($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"]);
        }
      },
      inputs: {
        dropMessageLabel: "dropMessageLabel",
        dropMessageLabelReplacement: "dropMessageLabelReplacement"
      },
      outputs: {
        onFileAdded: "onFileAdded"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 16,
      vars: 18,
      consts: [["ng2FileDrop", "", 1, "ds-document-drop-zone", "position-fixed", "h-100", "w-100", 3, "onFileDrop", "fileOver", "uploader"], ["class", "ds-document-drop-zone-inner position-fixed h-100 w-100 p-2", 4, "ngIf"], [1, "well", "ds-base-drop-zone", "mt-1", "mb-3", "text-muted", "p-2"], ["class", "text-center m-0 p-0 d-flex justify-content-center align-items-center", 4, "ngIf"], [1, "text-center", "m-0", "p-0", "d-flex", "justify-content-center", "align-items-center"], ["aria-hidden", "true", 1, "fas", "fa-cloud-upload"], [1, "btn", "btn-link", "m-0", "p-0", "ml-1"], ["type", "file", "name", "file-upload", "id", "file-upload", 1, "form-control-file", "d-none", 3, "change"], [1, "ds-document-drop-zone-inner", "position-fixed", "h-100", "w-100", "p-2"], [1, "ds-document-drop-zone-inner-content", "position-relative", "d-flex", "flex-column", "justify-content-center", "text-center", "h-100", "w-100"], [1, "text-primary"]],
      template: function FileDropzoneNoUploaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onFileDrop", function FileDropzoneNoUploaderComponent_Template_div_onFileDrop_0_listener($event) {
            return ctx.setFile($event);
          })("fileOver", function FileDropzoneNoUploaderComponent_Template_div_fileOver_0_listener($event) {
            return ctx.fileOverDocument($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, FileDropzoneNoUploaderComponent_div_2_Template, 5, 3, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, FileDropzoneNoUploaderComponent_p_5_Template, 2, 1, "p", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p", 4)(7, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "i", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "label", 6)(13, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function FileDropzoneNoUploaderComponent_Template_input_change_13_listener($event) {
            return ctx.handleFileInput($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](15, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ds-document-drop-zone-active", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 8, ctx.isOverDocumentDropZone));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("uploader", ctx.uploader);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 10, ctx.isOverDocumentDropZone));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.fileObject);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](10, 12, ctx.fileObject === null || ctx.fileObject === undefined ? ctx.dropMessageLabel : ctx.dropMessageLabelReplacement), " ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 14, "uploader.or"), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](15, 16, "uploader.browse"), " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe, ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__.FileUploadModule, ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__.FileDropDirective],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n.ds-base-drop-zone[_ngcontent-%COMP%] {\n  border: 2px dashed var(--bs-gray-600);\n}\n\n.ds-document-drop-zone[_ngcontent-%COMP%] {\n  top: 0;\n  left: 0;\n  z-index: -1;\n  display: block;\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity 0.3s ease, visibility 0.3s ease;\n}\n\n.ds-document-drop-zone-active[_ngcontent-%COMP%] {\n  z-index: var(--ds-drop-zone-area-z-index) !important;\n  opacity: 1;\n  visibility: visible;\n}\n\n.ds-document-drop-zone-inner[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.7);\n  z-index: var(--ds-drop-zone-area-inner-z-index);\n  top: 0;\n  left: 0;\n}\n\n.ds-document-drop-zone-inner-content[_ngcontent-%COMP%] {\n  border: 4px dashed var(--bs-primary);\n  z-index: var(--ds-drop-zone-area-inner-z-index);\n}\n\n.ds-document-drop-zone-inner-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: calc(var(--bs-font-size-lg) * 2.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGUtZHJvcHpvbmUtbm8tdXBsb2FkZXIuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBO0VBQ0UscUNBQUE7QUFDRjs7QUFDQTtFQUNFLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxtREFBQTtBQUVGOztBQUFBO0VBQ0Usb0RBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUFHRjs7QUFEQTtFQUNFLDBDQUFBO0VBQ0EsK0NBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtBQUlGOztBQUZBO0VBQ0Usb0NBQUE7RUFDQSwrQ0FBQTtBQUtGOztBQUhBO0VBQ0UsNkNBQUE7QUFNRiIsImZpbGUiOiJmaWxlLWRyb3B6b25lLW5vLXVwbG9hZGVyLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqL1xuLmRzLWJhc2UtZHJvcC16b25lIHtcbiAgYm9yZGVyOiAycHggZGFzaGVkIHZhcigtLWJzLWdyYXktNjAwKTtcbn1cbi5kcy1kb2N1bWVudC1kcm9wLXpvbmUge1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IC0xO1xuICBkaXNwbGF5OiBibG9jaztcbiAgb3BhY2l0eTogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZSwgdmlzaWJpbGl0eSAwLjNzIGVhc2U7XG59XG4uZHMtZG9jdW1lbnQtZHJvcC16b25lLWFjdGl2ZSB7XG4gIHotaW5kZXg6IHZhcigtLWRzLWRyb3Atem9uZS1hcmVhLXotaW5kZXgpICFpbXBvcnRhbnQ7XG4gIG9wYWNpdHk6IDE7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG4uZHMtZG9jdW1lbnQtZHJvcC16b25lLWlubmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xuICB6LWluZGV4OiB2YXIoLS1kcy1kcm9wLXpvbmUtYXJlYS1pbm5lci16LWluZGV4KTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xufVxuLmRzLWRvY3VtZW50LWRyb3Atem9uZS1pbm5lci1jb250ZW50IHtcbiAgYm9yZGVyOiA0cHggZGFzaGVkIHZhcigtLWJzLXByaW1hcnkpO1xuICB6LWluZGV4OiB2YXIoLS1kcy1kcm9wLXpvbmUtYXJlYS1pbm5lci16LWluZGV4KTtcbn1cbi5kcy1kb2N1bWVudC1kcm9wLXpvbmUtaW5uZXItY29udGVudCBwIHtcbiAgZm9udC1zaXplOiBjYWxjKHZhcigtLWJzLWZvbnQtc2l6ZS1sZykgKiAyLjUpO1xufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL3VwbG9hZC9maWxlLWRyb3B6b25lLW5vLXVwbG9hZGVyL2ZpbGUtZHJvcHpvbmUtbm8tdXBsb2FkZXIuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBO0VBQ0UscUNBQUE7QUFDRjs7QUFDQTtFQUNFLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxtREFBQTtBQUVGOztBQUFBO0VBQ0Usb0RBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUFHRjs7QUFEQTtFQUNFLDBDQUFBO0VBQ0EsK0NBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtBQUlGOztBQUZBO0VBQ0Usb0NBQUE7RUFDQSwrQ0FBQTtBQUtGOztBQUhBO0VBQ0UsNkNBQUE7QUFNRjtBQUNBLDQ1REFBNDVEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi9cbi5kcy1iYXNlLWRyb3Atem9uZSB7XG4gIGJvcmRlcjogMnB4IGRhc2hlZCB2YXIoLS1icy1ncmF5LTYwMCk7XG59XG4uZHMtZG9jdW1lbnQtZHJvcC16b25lIHtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAtMTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG9wYWNpdHk6IDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2UsIHZpc2liaWxpdHkgMC4zcyBlYXNlO1xufVxuLmRzLWRvY3VtZW50LWRyb3Atem9uZS1hY3RpdmUge1xuICB6LWluZGV4OiB2YXIoLS1kcy1kcm9wLXpvbmUtYXJlYS16LWluZGV4KSAhaW1wb3J0YW50O1xuICBvcGFjaXR5OiAxO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuLmRzLWRvY3VtZW50LWRyb3Atem9uZS1pbm5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbiAgei1pbmRleDogdmFyKC0tZHMtZHJvcC16b25lLWFyZWEtaW5uZXItei1pbmRleCk7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn1cbi5kcy1kb2N1bWVudC1kcm9wLXpvbmUtaW5uZXItY29udGVudCB7XG4gIGJvcmRlcjogNHB4IGRhc2hlZCB2YXIoLS1icy1wcmltYXJ5KTtcbiAgei1pbmRleDogdmFyKC0tZHMtZHJvcC16b25lLWFyZWEtaW5uZXItei1pbmRleCk7XG59XG4uZHMtZG9jdW1lbnQtZHJvcC16b25lLWlubmVyLWNvbnRlbnQgcCB7XG4gIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1icy1mb250LXNpemUtbGcpICogMi41KTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 63324:
/*!**********************************************************************************************************************************!*\
  !*** ./src/themes/ lazy ^\.\/.*\/app\/admin\/admin\-import\-metadata\-page\/metadata\-import\-page\.component$ namespace object ***!
  \**********************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./custom/app/admin/admin-import-metadata-page/metadata-import-page.component": [
		77413,
		"src_themes_custom_app_admin_admin-import-metadata-page_metadata-import-page_component_ts"
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
webpackAsyncContext.id = 63324;
module.exports = webpackAsyncContext;

/***/ })

}]);
//# sourceMappingURL=src_app_admin_admin-routes_ts.js.map