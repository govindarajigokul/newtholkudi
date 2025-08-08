"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_app_core_data_metadata-schema-data_service_ts"],{

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

/***/ })

}]);
//# sourceMappingURL=src_app_core_data_metadata-schema-data_service_ts.js.map