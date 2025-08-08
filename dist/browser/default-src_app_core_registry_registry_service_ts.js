"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["default-src_app_core_registry_registry_service_ts"],{

/***/ 58290:
/*!***********************************************************!*\
  !*** ./src/app/core/data/metadata-schema-data.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MetadataSchemaDataService: () => (/* binding */ MetadataSchemaDataService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 21252);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/empty.util */ 82777);
/* harmony import */ var _shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/notifications/notifications.service */ 69472);
/* harmony import */ var _cache_builders_remote_data_build_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cache/builders/remote-data-build.service */ 76799);
/* harmony import */ var _cache_object_cache_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cache/object-cache.service */ 41684);
/* harmony import */ var _shared_hal_endpoint_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/hal-endpoint.service */ 4910);
/* harmony import */ var _base_create_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./base/create-data */ 39280);
/* harmony import */ var _base_delete_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./base/delete-data */ 13617);
/* harmony import */ var _base_find_all_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./base/find-all-data */ 46787);
/* harmony import */ var _base_identifiable_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./base/identifiable-data.service */ 63897);
/* harmony import */ var _base_put_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./base/put-data */ 91967);
/* harmony import */ var _request_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./request.service */ 32473);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 90310);


















/**
 * A service responsible for fetching/sending data from/to the REST API on the metadataschemas endpoint
 */
class MetadataSchemaDataService extends _base_identifiable_data_service__WEBPACK_IMPORTED_MODULE_8__.IdentifiableDataService {
  constructor(requestService, rdbService, objectCache, halService, notificationsService) {
    super('metadataschemas', requestService, rdbService, objectCache, halService);
    this.requestService = requestService;
    this.rdbService = rdbService;
    this.objectCache = objectCache;
    this.halService = halService;
    this.notificationsService = notificationsService;
    this.createData = new _base_create_data__WEBPACK_IMPORTED_MODULE_5__.CreateDataImpl(this.linkPath, requestService, rdbService, objectCache, halService, notificationsService, this.responseMsToLive);
    this.putData = new _base_put_data__WEBPACK_IMPORTED_MODULE_9__.PutDataImpl(this.linkPath, requestService, rdbService, objectCache, halService, this.responseMsToLive);
    this.deleteData = new _base_delete_data__WEBPACK_IMPORTED_MODULE_6__.DeleteDataImpl(this.linkPath, requestService, rdbService, objectCache, halService, notificationsService, this.responseMsToLive, this.constructIdEndpoint);
    this.findAllData = new _base_find_all_data__WEBPACK_IMPORTED_MODULE_7__.FindAllDataImpl(this.linkPath, requestService, rdbService, objectCache, halService, this.responseMsToLive);
  }
  /**
   * Create or Update a MetadataSchema
   *  If the MetadataSchema contains an id, it is assumed the schema already exists and is updated instead
   *  Since creating or updating is nearly identical, the only real difference is the request (and slight difference in endpoint):
   *  - On creation, a CreateRequest is used
   *  - On update, a PutRequest is used
   * @param schema    The MetadataSchema to create or update
   */
  createOrUpdateMetadataSchema(schema) {
    const isUpdate = (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_0__.hasValue)(schema.id);
    if (isUpdate) {
      return this.putData.put(schema);
    } else {
      return this.createData.create(schema);
    }
  }
  /**
   * Clear all metadata schema requests
   * Used for refreshing lists after adding/updating/removing a metadata schema in the registry
   */
  clearRequests() {
    return this.getBrowseEndpoint().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(href => this.requestService.removeByHrefSubstring(href)));
  }
  /**
   * Returns {@link RemoteData} of all object with a list of {@link FollowLinkConfig}, to indicate which embedded
   * info should be added to the objects
   *
   * @param options                     Find list options object
   * @param useCachedVersionIfAvailable If this is true, the request will only be sent if there's
   *                                    no valid cached version. Defaults to true
   * @param reRequestOnStale            Whether or not the request should automatically be re-
   *                                    requested after the response becomes stale
   * @param linksToFollow               List of {@link FollowLinkConfig} that indicate which
   *                                    {@link HALLink}s should be automatically resolved
   * @return {Observable<RemoteData<PaginatedList<T>>>}
   *    Return an observable that emits object list
   */
  findAll(options, useCachedVersionIfAvailable, reRequestOnStale, ...linksToFollow) {
    return this.findAllData.findAll(options, useCachedVersionIfAvailable, reRequestOnStale, ...linksToFollow);
  }
  /**
   * Delete an existing object on the server
   * @param   objectId The id of the object to be removed
   * @param   copyVirtualMetadata (optional parameter) the identifiers of the relationship types for which the virtual
   *                            metadata should be saved as real metadata
   * @return  A RemoteData observable with an empty payload, but still representing the state of the request: statusCode,
   *          errorMessage, timeCompleted, etc
   */
  delete(objectId, copyVirtualMetadata) {
    return this.deleteData.delete(objectId, copyVirtualMetadata);
  }
  /**
   * Delete an existing object on the server
   * @param   href The self link of the object to be removed
   * @param   copyVirtualMetadata (optional parameter) the identifiers of the relationship types for which the virtual
   *                            metadata should be saved as real metadata
   * @return  A RemoteData observable with an empty payload, but still representing the state of the request: statusCode,
   *          errorMessage, timeCompleted, etc
   *          Only emits once all request related to the DSO has been invalidated.
   */
  deleteByHref(href, copyVirtualMetadata) {
    return this.deleteData.deleteByHref(href, copyVirtualMetadata);
  }
  static {
    this.ɵfac = function MetadataSchemaDataService_Factory(t) {
      return new (t || MetadataSchemaDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_request_service__WEBPACK_IMPORTED_MODULE_10__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_cache_builders_remote_data_build_service__WEBPACK_IMPORTED_MODULE_2__.RemoteDataBuildService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_cache_object_cache_service__WEBPACK_IMPORTED_MODULE_3__.ObjectCacheService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_shared_hal_endpoint_service__WEBPACK_IMPORTED_MODULE_4__.HALEndpointService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_1__.NotificationsService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjectable"]({
      token: MetadataSchemaDataService,
      factory: MetadataSchemaDataService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 67558:
/*!***************************************************!*\
  !*** ./src/app/core/registry/registry.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegistryService: () => (/* binding */ RegistryService)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ 99797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 27639);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 74671);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 21252);
/* harmony import */ var _admin_admin_registries_metadata_registry_metadata_registry_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../admin/admin-registries/metadata-registry/metadata-registry.actions */ 86628);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/empty.util */ 82777);
/* harmony import */ var _shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/notifications/notifications.service */ 69472);
/* harmony import */ var _cache_models_request_param_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cache/models/request-param.model */ 53954);
/* harmony import */ var _data_find_list_options_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/find-list-options.model */ 41023);
/* harmony import */ var _data_metadata_field_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/metadata-field-data.service */ 22151);
/* harmony import */ var _data_metadata_schema_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data/metadata-schema-data.service */ 58290);
/* harmony import */ var _shared_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/operators */ 55757);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 96439);


















const metadataRegistryStateSelector = state => state.metadataRegistry;
const editMetadataSchemaSelector = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_8__.createSelector)(metadataRegistryStateSelector, metadataState => metadataState.editSchema);
const selectedMetadataSchemasSelector = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_8__.createSelector)(metadataRegistryStateSelector, metadataState => metadataState.selectedSchemas);
const editMetadataFieldSelector = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_8__.createSelector)(metadataRegistryStateSelector, metadataState => metadataState.editField);
const selectedMetadataFieldsSelector = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_8__.createSelector)(metadataRegistryStateSelector, metadataState => metadataState.selectedFields);
/**
 * Service for registry related CRUD actions such as metadata schema, metadata field and bitstream format
 */
class RegistryService {
  constructor(store, notificationsService, translateService, metadataSchemaService, metadataFieldService) {
    this.store = store;
    this.notificationsService = notificationsService;
    this.translateService = translateService;
    this.metadataSchemaService = metadataSchemaService;
    this.metadataFieldService = metadataFieldService;
  }
  /**
   * Retrieves all metadata schemas
   * @param options           The options used to retrieve the schemas
   * @param useCachedVersionIfAvailable If this is true, the request will only be sent if there's
   *                                    no valid cached version. Defaults to true
   * @param reRequestOnStale            Whether or not the request should automatically be re-
   *                                    requested after the response becomes stale
   * @param linksToFollow               List of {@link FollowLinkConfig} that indicate which
   *                                    {@link HALLink}s should be automatically resolved
   */
  getMetadataSchemas(options = {}, useCachedVersionIfAvailable = true, reRequestOnStale = true, ...linksToFollow) {
    return this.metadataSchemaService.findAll(options, useCachedVersionIfAvailable, reRequestOnStale, ...linksToFollow);
  }
  /**
   * Retrieves a metadata schema by its prefix
   * @param prefix                      The prefux of the schema to find
   * @param useCachedVersionIfAvailable If this is true, the request will only be sent if there's
   *                                    no valid cached version. Defaults to true
   * @param reRequestOnStale            Whether or not the request should automatically be re-
   *                                    requested after the response becomes stale
   * @param linksToFollow               List of {@link FollowLinkConfig} that indicate which
   *                                    {@link HALLink}s should be automatically resolved
   */
  getMetadataSchemaByPrefix(prefix, useCachedVersionIfAvailable = true, reRequestOnStale = true, ...linksToFollow) {
    // Temporary options to get ALL metadataschemas until there's a rest api endpoint for fetching a specific schema
    const options = Object.assign(new _data_find_list_options_model__WEBPACK_IMPORTED_MODULE_4__.FindListOptions(), {
      elementsPerPage: 10000
    });
    return this.getMetadataSchemas(options).pipe((0,_shared_operators__WEBPACK_IMPORTED_MODULE_7__.getFirstSucceededRemoteDataPayload)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(schemas => schemas.page), (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_1__.isNotEmptyOperator)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(schemas => schemas.filter(schema => schema.prefix === prefix)[0]), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.mergeMap)(schema => this.metadataSchemaService.findById(`${schema.id}`, useCachedVersionIfAvailable, reRequestOnStale, ...linksToFollow)));
  }
  /**
   * retrieves all metadata fields that belong to a certain metadata schema
   * @param schema                      The schema to filter by
   * @param options                     The options info used to retrieve the fields
   * @param useCachedVersionIfAvailable If this is true, the request will only be sent if there's
   *                                    no valid cached version. Defaults to true
   * @param reRequestOnStale            Whether or not the request should automatically be re-
   *                                    requested after the response becomes stale
   * @param linksToFollow               List of {@link FollowLinkConfig} that indicate which
   *                                    {@link HALLink}s should be automatically resolved
   */
  getMetadataFieldsBySchema(schema, options = {}, useCachedVersionIfAvailable = true, reRequestOnStale = true, ...linksToFollow) {
    return this.metadataFieldService.findBySchema(schema, options, useCachedVersionIfAvailable, reRequestOnStale, ...linksToFollow);
  }
  editMetadataSchema(schema) {
    this.store.dispatch(new _admin_admin_registries_metadata_registry_metadata_registry_actions__WEBPACK_IMPORTED_MODULE_0__.MetadataRegistryEditSchemaAction(schema));
  }
  /**
   * Method to cancel editing a metadata schema, dispatches a cancel schema action
   */
  cancelEditMetadataSchema() {
    this.store.dispatch(new _admin_admin_registries_metadata_registry_metadata_registry_actions__WEBPACK_IMPORTED_MODULE_0__.MetadataRegistryCancelSchemaAction());
  }
  /**
   * Method to retrieve the metadata schema that are currently being edited
   */
  getActiveMetadataSchema() {
    return this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_8__.select)(editMetadataSchemaSelector));
  }
  /**
   * Method to select a metadata schema, dispatches a select schema action
   * @param schema The schema that's being selected
   */
  selectMetadataSchema(schema) {
    this.store.dispatch(new _admin_admin_registries_metadata_registry_metadata_registry_actions__WEBPACK_IMPORTED_MODULE_0__.MetadataRegistrySelectSchemaAction(schema));
  }
  /**
   * Method to deselect a metadata schema, dispatches a deselect schema action
   * @param schema The schema that's it being deselected
   */
  deselectMetadataSchema(schema) {
    this.store.dispatch(new _admin_admin_registries_metadata_registry_metadata_registry_actions__WEBPACK_IMPORTED_MODULE_0__.MetadataRegistryDeselectSchemaAction(schema));
  }
  /**
   * Method to deselect all currently selected metadata schema, dispatches a deselect all schema action
   */
  deselectAllMetadataSchema() {
    this.store.dispatch(new _admin_admin_registries_metadata_registry_metadata_registry_actions__WEBPACK_IMPORTED_MODULE_0__.MetadataRegistryDeselectAllSchemaAction());
  }
  /**
   * Method to retrieve the metadata schemas that are currently selected
   */
  getSelectedMetadataSchemas() {
    return this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_8__.select)(selectedMetadataSchemasSelector));
  }
  /**
   * Method to start editing a metadata field, dispatches an edit field action
   * @param field The field that's being edited
   */
  editMetadataField(field) {
    this.store.dispatch(new _admin_admin_registries_metadata_registry_metadata_registry_actions__WEBPACK_IMPORTED_MODULE_0__.MetadataRegistryEditFieldAction(field));
  }
  /**
   * Method to cancel editing a metadata field, dispatches a cancel field action
   */
  cancelEditMetadataField() {
    this.store.dispatch(new _admin_admin_registries_metadata_registry_metadata_registry_actions__WEBPACK_IMPORTED_MODULE_0__.MetadataRegistryCancelFieldAction());
  }
  /**
   * Method to retrieve the metadata field that are currently being edited
   */
  getActiveMetadataField() {
    return this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_8__.select)(editMetadataFieldSelector));
  }
  /**
   * Method to select a metadata field, dispatches a select field action
   * @param field The field that's being selected
   */
  selectMetadataField(field) {
    this.store.dispatch(new _admin_admin_registries_metadata_registry_metadata_registry_actions__WEBPACK_IMPORTED_MODULE_0__.MetadataRegistrySelectFieldAction(field));
  }
  /**
   * Method to deselect a metadata field, dispatches a deselect field action
   * @param field The field that's it being deselected
   */
  deselectMetadataField(field) {
    this.store.dispatch(new _admin_admin_registries_metadata_registry_metadata_registry_actions__WEBPACK_IMPORTED_MODULE_0__.MetadataRegistryDeselectFieldAction(field));
  }
  /**
   * Method to deselect all currently selected metadata fields, dispatches a deselect all field action
   */
  deselectAllMetadataField() {
    this.store.dispatch(new _admin_admin_registries_metadata_registry_metadata_registry_actions__WEBPACK_IMPORTED_MODULE_0__.MetadataRegistryDeselectAllFieldAction());
  }
  /**
   * Method to retrieve the metadata fields that are currently selected
   */
  getSelectedMetadataFields() {
    return this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_8__.select)(selectedMetadataFieldsSelector));
  }
  /**
   * Create or Update a MetadataSchema
   *  If the MetadataSchema contains an id, it is assumed the schema already exists and is updated instead
   *  Since creating or updating is nearly identical, the only real difference is the request (and slight difference in endpoint):
   *  - On creation, a CreateRequest is used
   *  - On update, a PutRequest is used
   * @param schema    The MetadataSchema to create or update
   */
  createOrUpdateMetadataSchema(schema) {
    const isUpdate = (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_1__.hasValue)(schema.id);
    return this.metadataSchemaService.createOrUpdateMetadataSchema(schema).pipe((0,_shared_operators__WEBPACK_IMPORTED_MODULE_7__.getFirstSucceededRemoteDataPayload)(), (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_1__.hasValueOperator)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(() => {
      this.showNotifications(true, isUpdate, false, {
        prefix: schema.prefix
      });
    }));
  }
  /**
   * Method to delete a metadata schema
   * @param id The id of the metadata schema to delete
   */
  deleteMetadataSchema(id) {
    return this.metadataSchemaService.delete(`${id}`);
  }
  /**
   * Method that clears a cached metadata schema request and returns its REST url
   */
  clearMetadataSchemaRequests() {
    return this.metadataSchemaService.clearRequests();
  }
  /**
   * Create a MetadataField
   *
   * @param field    The MetadataField to create
   * @param schema   The MetadataSchema to create the field in
   */
  createMetadataField(field, schema) {
    if (!field.qualifier) {
      field.qualifier = null;
    }
    return this.metadataFieldService.create(field, new _cache_models_request_param_model__WEBPACK_IMPORTED_MODULE_3__.RequestParam('schemaId', schema.id)).pipe((0,_shared_operators__WEBPACK_IMPORTED_MODULE_7__.getFirstSucceededRemoteDataPayload)(), (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_1__.hasValueOperator)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(() => {
      this.showNotifications(true, false, true, {
        field: field.toString()
      });
    }));
  }
  /**
   * Update a MetadataField
   *
   * @param field    The MetadataField to update
   */
  updateMetadataField(field) {
    if (!field.qualifier) {
      field.qualifier = null;
    }
    return this.metadataFieldService.put(field).pipe((0,_shared_operators__WEBPACK_IMPORTED_MODULE_7__.getFirstSucceededRemoteDataPayload)(), (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_1__.hasValueOperator)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(() => {
      this.showNotifications(true, true, true, {
        field: field.toString()
      });
    }));
  }
  /**
   * Method to delete a metadata field
   * @param id The id of the metadata field to delete
   */
  deleteMetadataField(id) {
    return this.metadataFieldService.delete(`${id}`);
  }
  /**
   * Method that clears a cached metadata field request and returns its REST url
   */
  clearMetadataFieldRequests() {
    this.metadataFieldService.clearRequests();
  }
  showNotifications(success, edited, isField, options) {
    const prefix = 'admin.registries.schema.notification';
    const suffix = success ? 'success' : 'failure';
    const editedString = edited ? 'edited' : 'created';
    const messages = (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.combineLatest)(this.translateService.get(success ? `${prefix}.${suffix}` : `${prefix}.${suffix}`), this.translateService.get(`${prefix}${isField ? '.field' : ''}.${editedString}`, options));
    messages.subscribe(([head, content]) => {
      if (success) {
        this.notificationsService.success(head, content);
      } else {
        this.notificationsService.error(head, content);
      }
    });
  }
  /**
   * Retrieve a filtered paginated list of metadata fields
   * @param query {string}              The query to use for the metadata field name, can be part of
   *                                    the fully qualified field, should start with the start of
   *                                    the schema, element or qualifier (e.g. “dc.ti”,
   *                                    “contributor”, “auth”, “contributor.ot”)
   * @param useCachedVersionIfAvailable If this is true, the request will only be sent if there's
   *                                    no valid cached version. Defaults to true
   * @param reRequestOnStale            Whether or not the request should automatically be re-
   *                                    requested after the response becomes stale
   * @param linksToFollow               List of {@link FollowLinkConfig} that indicate which
   *                                    {@link HALLink}s should be automatically resolved
   * @returns an observable that emits a remote data object with a page of metadata fields that match the query
   */
  queryMetadataFields(query, options = {}, useCachedVersionIfAvailable = true, reRequestOnStale = true, ...linksToFollow) {
    return this.metadataFieldService.searchByFieldNameParams(null, null, null, query, null, options, useCachedVersionIfAvailable, reRequestOnStale, ...linksToFollow);
  }
  static {
    this.ɵfac = function RegistryService_Factory(t) {
      return new (t || RegistryService)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_8__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_2__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_data_metadata_schema_data_service__WEBPACK_IMPORTED_MODULE_6__.MetadataSchemaDataService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_data_metadata_field_data_service__WEBPACK_IMPORTED_MODULE_5__.MetadataFieldDataService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjectable"]({
      token: RegistryService,
      factory: RegistryService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=default-src_app_core_registry_registry_service_ts.js.map