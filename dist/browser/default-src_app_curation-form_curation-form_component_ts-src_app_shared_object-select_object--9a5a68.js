"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["default-src_app_curation-form_curation-form_component_ts-src_app_shared_object-select_object--9a5a68"],{

/***/ 59033:
/*!********************************************************************!*\
  !*** ./src/app/core/data/object-updates/object-updates.service.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ObjectUpdatesService: () => (/* binding */ ObjectUpdatesService)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 99797);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 84975);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 85687);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 64785);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 78374);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/empty.util */ 82777);
/* harmony import */ var _core_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core.selectors */ 47797);
/* harmony import */ var _field_change_type_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./field-change-type.model */ 25103);
/* harmony import */ var _object_updates_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./object-updates.actions */ 16105);
/* harmony import */ var _object_updates_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./object-updates.reducer */ 66898);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 90310);










function objectUpdatesStateSelector() {
  return (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.createSelector)(_core_selectors__WEBPACK_IMPORTED_MODULE_1__.coreSelector, state => state['cache/object-updates']);
}
function filterByUrlObjectUpdatesStateSelector(url) {
  return (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.createSelector)(objectUpdatesStateSelector(), state => state[url]);
}
function filterByUrlAndUUIDFieldStateSelector(url, uuid) {
  return (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.createSelector)(filterByUrlObjectUpdatesStateSelector(url), state => state.fieldStates[uuid]);
}
function virtualMetadataSourceSelector(url, source) {
  return (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.createSelector)(filterByUrlObjectUpdatesStateSelector(url), state => state.virtualMetadataSources[source]);
}
/**
 * Service that dispatches and reads from the ObjectUpdates' state in the store
 */
class ObjectUpdatesService {
  constructor(store, injector) {
    this.store = store;
    this.injector = injector;
  }
  /**
   * Method to dispatch an InitializeFieldsAction to the store
   * @param url The page's URL for which the changes are being mapped
   * @param fields The initial fields for the page's object
   * @param lastModified The date the object was last modified
   * @param patchOperationService A {@link PatchOperationService} used for creating a patch
   */
  initialize(url, fields, lastModified, patchOperationService) {
    this.store.dispatch(new _object_updates_actions__WEBPACK_IMPORTED_MODULE_3__.InitializeFieldsAction(url, fields, lastModified, patchOperationService));
  }
  /**
   * Method to dispatch an AddFieldUpdateAction to the store
   * @param url The page's URL for which the changes are saved
   * @param field An updated field for the page's object
   * @param changeType The last type of change applied to this field
   */
  saveFieldUpdate(url, field, changeType) {
    this.store.dispatch(new _object_updates_actions__WEBPACK_IMPORTED_MODULE_3__.AddFieldUpdateAction(url, field, changeType));
  }
  /**
   * Request the ObjectUpdatesEntry state for a specific URL
   * @param url The URL to filter by
   */
  getObjectEntry(url) {
    return this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.select)(filterByUrlObjectUpdatesStateSelector(url)));
  }
  /**
   * Request the getFieldState state for a specific URL and UUID
   * @param url The URL to filter by
   * @param uuid The field's UUID to filter by
   */
  getFieldState(url, uuid) {
    return this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.select)(filterByUrlAndUUIDFieldStateSelector(url, uuid)));
  }
  /**
   * Method that combines the state's updates with the initial values (when there's no update) to create
   * a FieldUpdates object
   * @param url The URL of the page for which the FieldUpdates should be requested
   * @param initialFields The initial values of the fields
   * @param ignoreStates  Ignore the fieldStates to loop over the fieldUpdates instead
   */
  getFieldUpdates(url, initialFields, ignoreStates) {
    const objectUpdates = this.getObjectEntry(url);
    return objectUpdates.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(objectEntry => {
      const fieldUpdates = {};
      if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_0__.hasValue)(objectEntry)) {
        Object.keys(ignoreStates ? objectEntry.fieldUpdates : objectEntry.fieldStates).forEach(uuid => {
          fieldUpdates[uuid] = objectEntry.fieldUpdates[uuid];
        });
      }
      return this.getFieldUpdatesExclusive(url, initialFields).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(fieldUpdatesExclusive => {
        Object.keys(fieldUpdatesExclusive).forEach(uuid => {
          fieldUpdates[uuid] = fieldUpdatesExclusive[uuid];
        });
        return fieldUpdates;
      }));
    }));
  }
  /**
   * Method that combines the state's updates (excluding updates that aren't part of the initialFields) with
   * the initial values (when there's no update) to create a FieldUpdates object
   * @param url The URL of the page for which the FieldUpdates should be requested
   * @param initialFields The initial values of the fields
   */
  getFieldUpdatesExclusive(url, initialFields) {
    const objectUpdates = this.getObjectEntry(url);
    return objectUpdates.pipe((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_0__.hasValueOperator)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(objectEntry => {
      const fieldUpdates = {};
      for (const object of initialFields) {
        let fieldUpdate = objectEntry.fieldUpdates[object.uuid];
        if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(fieldUpdate)) {
          fieldUpdate = {
            field: object,
            changeType: undefined
          };
        }
        fieldUpdates[object.uuid] = fieldUpdate;
      }
      return fieldUpdates;
    }));
  }
  /**
   * Method to check if a specific field is currently editable in the store
   * @param url The URL of the page on which the field resides
   * @param uuid The UUID of the field
   */
  isEditable(url, uuid) {
    const fieldState$ = this.getFieldState(url, uuid);
    return fieldState$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.filter)(fieldState => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_0__.hasValue)(fieldState)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(fieldState => fieldState.editable), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.distinctUntilChanged)());
  }
  /**
   * Method to check if a specific field is currently valid in the store
   * @param url The URL of the page on which the field resides
   * @param uuid The UUID of the field
   */
  isValid(url, uuid) {
    const fieldState$ = this.getFieldState(url, uuid);
    return fieldState$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.filter)(fieldState => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_0__.hasValue)(fieldState)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(fieldState => fieldState.isValid), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.distinctUntilChanged)());
  }
  /**
   * Method to check if a specific page is currently valid in the store
   * @param url The URL of the page
   */
  isValidPage(url) {
    const objectUpdates = this.getObjectEntry(url);
    return objectUpdates.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(entry => {
      return Object.values(entry.fieldStates).findIndex(state => !state.isValid) < 0;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.distinctUntilChanged)());
  }
  /**
   * Calls the saveFieldUpdate method with FieldChangeType.ADD
   * @param url The page's URL for which the changes are saved
   * @param field An updated field for the page's object
   */
  saveAddFieldUpdate(url, field) {
    const update$ = this.getFieldUpdatesExclusive(url, [field]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.filter)(fieldUpdates => fieldUpdates[field.uuid].changeType === _field_change_type_model__WEBPACK_IMPORTED_MODULE_2__.FieldChangeType.ADD), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(() => true));
    this.saveFieldUpdate(url, field, _field_change_type_model__WEBPACK_IMPORTED_MODULE_2__.FieldChangeType.ADD);
    return update$;
  }
  /**
   * Calls the saveFieldUpdate method with FieldChangeType.REMOVE
   * @param url The page's URL for which the changes are saved
   * @param field An updated field for the page's object
   */
  saveRemoveFieldUpdate(url, field) {
    const update$ = this.getFieldUpdatesExclusive(url, [field]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.filter)(fieldUpdates => fieldUpdates[field.uuid].changeType === _field_change_type_model__WEBPACK_IMPORTED_MODULE_2__.FieldChangeType.REMOVE), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(() => true));
    this.saveFieldUpdate(url, field, _field_change_type_model__WEBPACK_IMPORTED_MODULE_2__.FieldChangeType.REMOVE);
    return update$;
  }
  /**
   * Calls the saveFieldUpdate method with FieldChangeType.UPDATE
   * @param url The page's URL for which the changes are saved
   * @param field An updated field for the page's object
   */
  saveChangeFieldUpdate(url, field) {
    this.saveFieldUpdate(url, field, _field_change_type_model__WEBPACK_IMPORTED_MODULE_2__.FieldChangeType.UPDATE);
  }
  /**
   * Check whether the virtual metadata of a given item is selected to be saved as real metadata
   * @param url           The URL of the page on which the field resides
   * @param relationship  The id of the relationship for which to check whether the virtual metadata is selected to be
   *                      saved as real metadata
   * @param item          The id of the item for which to check whether the virtual metadata is selected to be
   *                      saved as real metadata
   */
  isSelectedVirtualMetadata(url, relationship, item) {
    return this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.select)(virtualMetadataSourceSelector(url, relationship)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(virtualMetadataSource => virtualMetadataSource && virtualMetadataSource[item]));
  }
  /**
   * Method to dispatch a SelectVirtualMetadataAction to the store
   * @param url The page's URL for which the changes are saved
   * @param relationship the relationship for which virtual metadata is selected
   * @param uuid the selection identifier, can either be the item uuid or the relationship type uuid
   * @param selected whether or not to select the virtual metadata to be saved
   */
  setSelectedVirtualMetadata(url, relationship, uuid, selected) {
    this.store.dispatch(new _object_updates_actions__WEBPACK_IMPORTED_MODULE_3__.SelectVirtualMetadataAction(url, relationship, uuid, selected));
  }
  /**
   * Dispatches a SetEditableFieldUpdateAction to the store to set a field's editable state
   * @param url The URL of the page on which the field resides
   * @param uuid The UUID of the field that should be set
   * @param editable The new value of editable in the store for this field
   */
  setEditableFieldUpdate(url, uuid, editable) {
    this.store.dispatch(new _object_updates_actions__WEBPACK_IMPORTED_MODULE_3__.SetEditableFieldUpdateAction(url, uuid, editable));
  }
  /**
   * Dispatches a SetValidFieldUpdateAction to the store to set a field's isValid state
   * @param url The URL of the page on which the field resides
   * @param uuid The UUID of the field that should be set
   * @param valid The new value of isValid in the store for this field
   */
  setValidFieldUpdate(url, uuid, valid) {
    this.store.dispatch(new _object_updates_actions__WEBPACK_IMPORTED_MODULE_3__.SetValidFieldUpdateAction(url, uuid, valid));
  }
  /**
   * Method to dispatch an DiscardObjectUpdatesAction to the store
   * @param url The page's URL for which the changes should be discarded
   * @param undoNotification The notification which is should possibly be canceled
   */
  discardFieldUpdates(url, undoNotification) {
    this.store.dispatch(new _object_updates_actions__WEBPACK_IMPORTED_MODULE_3__.DiscardObjectUpdatesAction(url, undoNotification));
  }
  /**
   * Method to dispatch a DiscardObjectUpdatesAction to the store with discardAll set to true
   * @param url The page's URL for which the changes should be discarded
   * @param undoNotification The notification which is should possibly be canceled
   */
  discardAllFieldUpdates(url, undoNotification) {
    this.store.dispatch(new _object_updates_actions__WEBPACK_IMPORTED_MODULE_3__.DiscardObjectUpdatesAction(url, undoNotification, true));
  }
  /**
   * Method to dispatch an ReinstateObjectUpdatesAction to the store
   * @param url The page's URL for which the changes should be reinstated
   */
  reinstateFieldUpdates(url) {
    this.store.dispatch(new _object_updates_actions__WEBPACK_IMPORTED_MODULE_3__.ReinstateObjectUpdatesAction(url));
  }
  /**
   * Method to dispatch an RemoveFieldUpdateAction to the store
   * @param url The page's URL for which the changes should be removed
   * @param uuid The UUID of the field that should be set
   */
  removeSingleFieldUpdate(url, uuid) {
    this.store.dispatch(new _object_updates_actions__WEBPACK_IMPORTED_MODULE_3__.RemoveFieldUpdateAction(url, uuid));
  }
  /**
   * Method that combines the state's updates with the initial values (when there's no update) to create
   * a list of updates fields
   * @param url The URL of the page for which the updated fields should be requested
   * @param initialFields The initial values of the fields
   */
  getUpdatedFields(url, initialFields) {
    const objectUpdates = this.getObjectEntry(url);
    return objectUpdates.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(objectEntry => {
      const fields = [];
      Object.keys(objectEntry.fieldStates).forEach(uuid => {
        const fieldUpdate = objectEntry.fieldUpdates[uuid];
        if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_0__.hasNoValue)(fieldUpdate) || fieldUpdate.changeType !== _field_change_type_model__WEBPACK_IMPORTED_MODULE_2__.FieldChangeType.REMOVE) {
          let field;
          if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_0__.isNotEmpty)(fieldUpdate)) {
            field = fieldUpdate.field;
          } else {
            field = initialFields.find(object => object.uuid === uuid);
          }
          fields.push(field);
        }
      });
      return fields;
    }));
  }
  /**
   * Checks if the page currently has updates in the store or not
   * @param url The page's url to check for in the store
   */
  hasUpdates(url) {
    return this.getObjectEntry(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(objectEntry => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_0__.hasValue)(objectEntry) && (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_0__.isNotEmpty)(objectEntry.fieldUpdates)));
  }
  /**
   * Checks if the page currently is reinstatable in the store or not
   * @param url The page's url to check for in the store
   */
  isReinstatable(url) {
    return this.hasUpdates(url + _object_updates_reducer__WEBPACK_IMPORTED_MODULE_4__.OBJECT_UPDATES_TRASH_PATH);
  }
  /**
   * Request the current lastModified date stored for the updates in the store
   * @param url The page's url to check for in the store
   */
  getLastModified(url) {
    return this.getObjectEntry(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(entry => entry.lastModified));
  }
  /**
   * Create a patch from the current object-updates state
   * The {@link ObjectUpdatesEntry} should contain a patchOperationService, in order to define how a patch should
   * be created. If it doesn't, an empty patch will be returned.
   * @param url The URL of the page for which the patch should be created
   */
  createPatch(url) {
    return this.getObjectEntry(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(entry => {
      let patch = [];
      if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_0__.hasValue)(entry.patchOperationService)) {
        patch = this.injector.get(entry.patchOperationService).fieldUpdatesToPatchOperations(entry.fieldUpdates);
      }
      return patch;
    }));
  }
  static {
    this.ɵfac = function ObjectUpdatesService_Factory(t) {
      return new (t || ObjectUpdatesService)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_11__.Injector));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjectable"]({
      token: ObjectUpdatesService,
      factory: ObjectUpdatesService.ɵfac,
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

/***/ 79666:
/*!*************************************************************!*\
  !*** ./src/app/shared/object-select/object-select.model.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DSpaceObjectSelect: () => (/* binding */ DSpaceObjectSelect)
/* harmony export */ });
/**
 * Class used to collect all the data that that is used by the {@link ObjectSelectComponent} in the HTML.
 */
class DSpaceObjectSelect {}

/***/ }),

/***/ 62172:
/*!***************************************************************!*\
  !*** ./src/app/shared/object-select/object-select.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ObjectSelectService: () => (/* binding */ ObjectSelectService),
/* harmony export */   keyAndIdSelector: () => (/* binding */ keyAndIdSelector)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 99797);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var _empty_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../empty.util */ 82777);
/* harmony import */ var _object_select_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./object-select.actions */ 65580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 90310);






const objectSelectionsStateSelector = state => state.objectSelection;
const objectSelectionListStateSelector = state => state.objectSelection;
/**
 * Service that takes care of selecting and deselecting objects
 */
class ObjectSelectService {
  constructor(store, appStore) {
    this.store = store;
    this.appStore = appStore;
  }
  /**
   * Request the current selection of a given object in a given list
   * @param {string} key The key of the list where the selection resides in
   * @param {string} id The UUID of the object
   * @returns {Observable<boolean>} Emits the current selection state of the given object, if it's unavailable, return false
   */
  getSelected(key, id) {
    return this.store.select(selectionByKeyAndIdSelector(key, id)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(object => {
      if (object) {
        return object.checked;
      } else {
        return false;
      }
    }));
  }
  /**
   * Request the current selection of all objects within a specific list
   * @returns {Observable<boolean>} Emits the current selection state of all objects
   */
  getAllSelected(key) {
    return this.appStore.select(objectSelectionListStateSelector).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(state => {
      if ((0,_empty_util__WEBPACK_IMPORTED_MODULE_0__.hasValue)(state[key])) {
        return Object.keys(state[key]).filter(id => state[key][id].checked);
      } else {
        return [];
      }
    }));
  }
  /**
   * Dispatches an initial select action to the store for a given object in a given list
   * @param {string} key The key of the list to select the object in
   * @param {string} id The UUID of the object to select
   */
  initialSelect(key, id) {
    this.store.dispatch(new _object_select_actions__WEBPACK_IMPORTED_MODULE_1__.ObjectSelectionInitialSelectAction(key, id));
  }
  /**
   * Dispatches an initial deselect action to the store for a given object in a given list
   * @param {string} key The key of the list to deselect the object in
   * @param {string} id The UUID of the object to deselect
   */
  initialDeselect(key, id) {
    this.store.dispatch(new _object_select_actions__WEBPACK_IMPORTED_MODULE_1__.ObjectSelectionInitialDeselectAction(key, id));
  }
  /**
   * Dispatches a select action to the store for a given object in a given list
   * @param {string} key The key of the list to select the object in
   * @param {string} id The UUID of the object to select
   */
  select(key, id) {
    this.store.dispatch(new _object_select_actions__WEBPACK_IMPORTED_MODULE_1__.ObjectSelectionSelectAction(key, id));
  }
  /**
   * Dispatches a deselect action to the store for a given object in a given list
   * @param {string} key The key of the list to deselect the object in
   * @param {string} id The UUID of the object to deselect
   */
  deselect(key, id) {
    this.store.dispatch(new _object_select_actions__WEBPACK_IMPORTED_MODULE_1__.ObjectSelectionDeselectAction(key, id));
  }
  /**
   * Dispatches a switch action to the store for a given object in a given list
   * @param {string} key The key of the list to select the object in
   * @param {string} id The UUID of the object to select
   */
  switch(key, id) {
    this.store.dispatch(new _object_select_actions__WEBPACK_IMPORTED_MODULE_1__.ObjectSelectionSwitchAction(key, id));
  }
  /**
   * Dispatches a reset action to the store for all objects (in a list)
   * @param {string} key The key of the list to clear all selections for
   */
  reset(key) {
    this.store.dispatch(new _object_select_actions__WEBPACK_IMPORTED_MODULE_1__.ObjectSelectionResetAction(key, null));
  }
  static {
    this.ɵfac = function ObjectSelectService_Factory(t) {
      return new (t || ObjectSelectService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.Store));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: ObjectSelectService,
      factory: ObjectSelectService.ɵfac,
      providedIn: 'root'
    });
  }
}
function selectionByKeyAndIdSelector(key, id) {
  return keyAndIdSelector(key, id);
}
function keyAndIdSelector(key, id) {
  return (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.createSelector)(objectSelectionsStateSelector, state => {
    if ((0,_empty_util__WEBPACK_IMPORTED_MODULE_0__.hasValue)(state) && (0,_empty_util__WEBPACK_IMPORTED_MODULE_0__.hasValue)(state[key])) {
      return state[key][id];
    } else {
      return undefined;
    }
  });
}

/***/ }),

/***/ 99929:
/*!*******************************************************************************!*\
  !*** ./src/app/shared/object-select/object-select/object-select.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ObjectSelectComponent: () => (/* binding */ ObjectSelectComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 17796);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 62997);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 78374);
/* harmony import */ var _core_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/breadcrumbs/dso-name.service */ 96526);
/* harmony import */ var _core_cache_models_sort_options_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/cache/models/sort-options.model */ 6238);
/* harmony import */ var _core_data_feature_authorization_authorization_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/data/feature-authorization/authorization-data.service */ 3675);
/* harmony import */ var _core_data_feature_authorization_feature_id__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/data/feature-authorization/feature-id */ 3970);
/* harmony import */ var _pagination_pagination_component_options_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pagination/pagination-component-options.model */ 23401);
/* harmony import */ var _object_select_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../object-select.service */ 62172);













/**
 * An abstract component used to select DSpaceObjects from a specific list and returning the UUIDs of the selected DSpaceObjects
 */
class ObjectSelectComponent {
  constructor(objectSelectService, authorizationService, dsoNameService) {
    this.objectSelectService = objectSelectService;
    this.authorizationService = authorizationService;
    this.dsoNameService = dsoNameService;
    /**
     * An event fired when the cancel button is clicked
     */
    this.cancel = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    /**
     * EventEmitter to return the selected UUIDs when the confirm button is pressed
     * @type {EventEmitter<string[]>}
     */
    this.confirm = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    /**
     * Whether or not to render the confirm button as danger (for example if confirm deletes objects)
     * Defaults to false
     */
    this.dangerConfirm = false;
  }
  ngOnInit() {
    this.selectedIds$ = this.objectSelectService.getAllSelected(this.key);
  }
  ngOnDestroy() {
    this.objectSelectService.reset(this.key);
  }
  /**
   * Switch the state of a checkbox
   * @param {string} id
   */
  switch(id) {
    this.objectSelectService.switch(this.key, id);
  }
  /**
   * Get the current state of a checkbox
   * @param {string} id   The dso's UUID
   * @returns {Observable<boolean>}
   */
  getSelected(id) {
    return this.objectSelectService.getSelected(this.key, id);
  }
  /**
   * Return if the item can be selected or not due to authorization check.
   */
  canSelect(item) {
    if (!this.featureId) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(true);
    }
    return this.authorizationService.isAuthorized(this.featureId, item.self).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.startWith)(false));
  }
  /**
   * Called when the confirm button is pressed
   * Sends the selected UUIDs to the parent component
   */
  confirmSelected() {
    this.selectedIds$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.take)(1)).subscribe(ids => {
      this.confirm.emit(ids);
      this.objectSelectService.reset(this.key);
    });
  }
  /**
   * Fire a cancel event
   */
  onCancel() {
    this.cancel.emit();
  }
  static {
    this.ɵfac = function ObjectSelectComponent_Factory(t) {
      return new (t || ObjectSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_object_select_service__WEBPACK_IMPORTED_MODULE_5__.ObjectSelectService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_data_feature_authorization_authorization_data_service__WEBPACK_IMPORTED_MODULE_2__.AuthorizationDataService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_0__.DSONameService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: ObjectSelectComponent,
      selectors: [["ds-object-select-abstract"]],
      inputs: {
        key: "key",
        dsoRD$: "dsoRD$",
        paginationOptions: "paginationOptions",
        sortOptions: "sortOptions",
        confirmButton: "confirmButton",
        featureId: "featureId",
        cancelButton: "cancelButton",
        dangerConfirm: "dangerConfirm"
      },
      outputs: {
        cancel: "cancel",
        confirm: "confirm"
      },
      decls: 0,
      vars: 0,
      template: function ObjectSelectComponent_Template(rf, ctx) {},
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 45969:
/*!******************************************************************!*\
  !*** ./src/app/shared/trackable/abstract-trackable.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbstractTrackableComponent: () => (/* binding */ AbstractTrackableComponent)
/* harmony export */ });
/* harmony import */ var _core_data_object_updates_object_updates_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/data/object-updates/object-updates.service */ 59033);
/* harmony import */ var _notifications_notifications_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../notifications/notifications.service */ 69472);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 14354);









/**
 * Abstract Component that is able to track changes made in the inheriting component using the ObjectUpdateService
 */
class AbstractTrackableComponent {
  constructor(objectUpdatesService, notificationsService, translateService, router) {
    this.objectUpdatesService = objectUpdatesService;
    this.notificationsService = notificationsService;
    this.translateService = translateService;
    this.router = router;
    this.notificationsPrefix = 'static-pages.form.notification';
  }
  ngOnInit() {
    this.url = this.router.url.split('?')[0];
    this.hasChanges$ = this.hasChanges();
    this.isReinstatable$ = this.isReinstatable();
  }
  /**
   * Request the object updates service to discard all current changes to this item
   * Shows a notification to remind the user that they can undo this
   */
  discard() {
    const undoNotification = this.notificationsService.info(this.getNotificationTitle('discarded'), this.getNotificationContent('discarded'), {
      timeOut: this.discardTimeOut
    });
    this.objectUpdatesService.discardFieldUpdates(this.url, undoNotification);
  }
  /**
   * Request the object updates service to undo discarding all changes to this item
   */
  reinstate() {
    this.objectUpdatesService.reinstateFieldUpdates(this.url);
  }
  /**
   * Checks whether or not the object is currently reinstatable
   */
  isReinstatable() {
    return this.objectUpdatesService.isReinstatable(this.url);
  }
  /**
   * Checks whether or not there are currently updates for this object
   */
  hasChanges() {
    return this.objectUpdatesService.hasUpdates(this.url);
  }
  /**
   * Get translated notification title
   * @param key
   */
  getNotificationTitle(key) {
    return this.translateService.instant(this.notificationsPrefix + key + '.title');
  }
  /**
   * Get translated notification content
   * @param key
   */
  getNotificationContent(key) {
    return this.translateService.instant(this.notificationsPrefix + key + '.content');
  }
  static {
    this.ɵfac = function AbstractTrackableComponent_Factory(t) {
      return new (t || AbstractTrackableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_data_object_updates_object_updates_service__WEBPACK_IMPORTED_MODULE_0__.ObjectUpdatesService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_1__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: AbstractTrackableComponent,
      selectors: [["ds-abstract-trackable"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 0,
      vars: 0,
      template: function AbstractTrackableComponent_Template(rf, ctx) {},
      encapsulation: 2
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=default-src_app_curation-form_curation-form_component_ts-src_app_shared_object-select_object--9a5a68.js.map