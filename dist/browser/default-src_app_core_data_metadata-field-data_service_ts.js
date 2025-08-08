"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["default-src_app_core_data_metadata-field-data_service_ts"],{

/***/ 22151:
/*!**********************************************************!*\
  !*** ./src/app/core/data/metadata-field-data.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MetadataFieldDataService: () => (/* binding */ MetadataFieldDataService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 78374);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/empty.util */ 82777);
/* harmony import */ var _shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/notifications/notifications.service */ 69472);
/* harmony import */ var _cache_builders_remote_data_build_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cache/builders/remote-data-build.service */ 76799);
/* harmony import */ var _cache_models_request_param_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cache/models/request-param.model */ 53954);
/* harmony import */ var _cache_object_cache_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cache/object-cache.service */ 41684);
/* harmony import */ var _shared_hal_endpoint_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/hal-endpoint.service */ 4910);
/* harmony import */ var _base_create_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./base/create-data */ 39280);
/* harmony import */ var _base_delete_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./base/delete-data */ 13617);
/* harmony import */ var _base_identifiable_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./base/identifiable-data.service */ 63897);
/* harmony import */ var _base_put_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./base/put-data */ 91967);
/* harmony import */ var _base_search_data__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./base/search-data */ 35108);
/* harmony import */ var _find_list_options_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./find-list-options.model */ 41023);
/* harmony import */ var _request_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./request.service */ 32473);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 90310);




















/**
 * A service responsible for fetching/sending data from/to the REST API on the metadatafields endpoint
 */
class MetadataFieldDataService extends _base_identifiable_data_service__WEBPACK_IMPORTED_MODULE_8__.IdentifiableDataService {
  constructor(requestService, rdbService, objectCache, halService, notificationsService) {
    super('metadatafields', requestService, rdbService, objectCache, halService);
    this.requestService = requestService;
    this.rdbService = rdbService;
    this.objectCache = objectCache;
    this.halService = halService;
    this.notificationsService = notificationsService;
    this.searchBySchemaLinkPath = 'bySchema';
    this.searchByFieldNameLinkPath = 'byFieldName';
    this.createData = new _base_create_data__WEBPACK_IMPORTED_MODULE_6__.CreateDataImpl(this.linkPath, requestService, rdbService, objectCache, halService, notificationsService, this.responseMsToLive);
    this.searchData = new _base_search_data__WEBPACK_IMPORTED_MODULE_10__.SearchDataImpl(this.linkPath, requestService, rdbService, objectCache, halService, this.responseMsToLive);
    this.putData = new _base_put_data__WEBPACK_IMPORTED_MODULE_9__.PutDataImpl(this.linkPath, requestService, rdbService, objectCache, halService, this.responseMsToLive);
    this.deleteData = new _base_delete_data__WEBPACK_IMPORTED_MODULE_7__.DeleteDataImpl(this.linkPath, requestService, rdbService, objectCache, halService, notificationsService, this.responseMsToLive, this.constructIdEndpoint);
  }
  /**
   * Find metadata fields belonging to a metadata schema
   * @param schema                      The metadata schema to list fields for
   * @param options                     The options info used to retrieve the fields
   * @param useCachedVersionIfAvailable If this is true, the request will only be sent if there's
   *                                    no valid cached version. Defaults to true
   * @param reRequestOnStale            Whether or not the request should automatically be re-
   *                                    requested after the response becomes stale
   * @param linksToFollow               List of {@link FollowLinkConfig} that indicate which
   *                                    {@link HALLink}s should be automatically resolved
   */
  findBySchema(schema, options = {}, useCachedVersionIfAvailable = true, reRequestOnStale = true, ...linksToFollow) {
    const optionsWithSchema = Object.assign(new _find_list_options_model__WEBPACK_IMPORTED_MODULE_11__.FindListOptions(), options, {
      searchParams: [new _cache_models_request_param_model__WEBPACK_IMPORTED_MODULE_3__.RequestParam('schema', schema.prefix)]
    });
    return this.searchBy(this.searchBySchemaLinkPath, optionsWithSchema, useCachedVersionIfAvailable, reRequestOnStale, ...linksToFollow);
  }
  /**
   * Find metadata fields with either the partial metadata field name (e.g. "dc.ti") as query or an exact match to
   * at least the schema, element or qualifier
   * @param schema    optional; an exact match of the prefix of the metadata schema (e.g. "dc", "dcterms", "eperson")
   * @param element   optional; an exact match of the field's element (e.g. "contributor", "title")
   * @param qualifier optional; an exact match of the field's qualifier (e.g. "author", "alternative")
   * @param query     optional (if any of schema, element or qualifier used) - part of the fully qualified field,
   * should start with the start of the schema, element or qualifier (e.g. “dc.ti”, “contributor”, “auth”, “contributor.ot”)
   * @param exactName optional; the exact fully qualified field, should use the syntax schema.element.qualifier or
   * schema.element if no qualifier exists (e.g. "dc.title", "dc.contributor.author"). It will only return one value
   * if there's an exact match
   * @param options   The options info used to retrieve the fields
   * @param useCachedVersionIfAvailable If this is true, the request will only be sent if there's no valid cached version. Defaults to true
   * @param reRequestOnStale  Whether or not the request should automatically be re-requested after the response becomes stale
   * @param linksToFollow List of {@link FollowLinkConfig} that indicate which {@link HALLink}s should be automatically resolved
   */
  searchByFieldNameParams(schema, element, qualifier, query, exactName, options = {}, useCachedVersionIfAvailable = true, reRequestOnStale = true, ...linksToFollow) {
    const optionParams = Object.assign(new _find_list_options_model__WEBPACK_IMPORTED_MODULE_11__.FindListOptions(), options, {
      searchParams: [new _cache_models_request_param_model__WEBPACK_IMPORTED_MODULE_3__.RequestParam('schema', (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_0__.hasValue)(schema) ? schema : ''), new _cache_models_request_param_model__WEBPACK_IMPORTED_MODULE_3__.RequestParam('element', (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_0__.hasValue)(element) ? element : ''), new _cache_models_request_param_model__WEBPACK_IMPORTED_MODULE_3__.RequestParam('qualifier', (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_0__.hasValue)(qualifier) ? qualifier : ''), new _cache_models_request_param_model__WEBPACK_IMPORTED_MODULE_3__.RequestParam('query', (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_0__.hasValue)(query) ? query : ''), new _cache_models_request_param_model__WEBPACK_IMPORTED_MODULE_3__.RequestParam('exactName', (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_0__.hasValue)(exactName) ? exactName : '')]
    });
    return this.searchBy(this.searchByFieldNameLinkPath, optionParams, useCachedVersionIfAvailable, reRequestOnStale, ...linksToFollow);
  }
  /**
   * Finds a specific metadata field by name.
   * @param exactFieldName  The exact fully qualified field, should use the syntax schema.element.qualifier or
   * schema.element if no qualifier exists (e.g. "dc.title", "dc.contributor.author"). It will only return one value
   * if there's an exact match, empty list if there is no exact match.
   */
  findByExactFieldName(exactFieldName) {
    return this.searchByFieldNameParams(null, null, null, null, exactFieldName, null);
  }
  /**
   * Clear all metadata field requests
   * Used for refreshing lists after adding/updating/removing a metadata field from a metadata schema
   */
  clearRequests() {
    this.getBrowseEndpoint().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.take)(1)).subscribe(href => {
      this.requestService.setStaleByHrefSubstring(href);
    });
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
  /**
   * Send a PUT request for the specified object
   *
   * @param object The object to send a put request for.
   */
  put(object) {
    return this.putData.put(object);
  }
  /**
   * Create a new object on the server, and store the response in the object cache
   *
   * @param object    The object to create
   * @param params    Array with additional params to combine with query string
   */
  create(object, ...params) {
    return this.createData.create(object, ...params);
  }
  /**
   * Make a new FindListRequest with given search method
   *
   * @param searchMethod                The search method for the object
   * @param options                     The [[FindListOptions]] object
   * @param useCachedVersionIfAvailable If this is true, the request will only be sent if there's
   *                                    no valid cached version. Defaults to true
   * @param reRequestOnStale            Whether or not the request should automatically be re-
   *                                    requested after the response becomes stale
   * @param linksToFollow               List of {@link FollowLinkConfig} that indicate which
   *                                    {@link HALLink}s should be automatically resolved
   * @return {Observable<RemoteData<PaginatedList<T>>}
   *    Return an observable that emits response from the server
   */
  searchBy(searchMethod, options, useCachedVersionIfAvailable, reRequestOnStale, ...linksToFollow) {
    return this.searchData.searchBy(searchMethod, options, useCachedVersionIfAvailable, reRequestOnStale, ...linksToFollow);
  }
  static {
    this.ɵfac = function MetadataFieldDataService_Factory(t) {
      return new (t || MetadataFieldDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_request_service__WEBPACK_IMPORTED_MODULE_12__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_cache_builders_remote_data_build_service__WEBPACK_IMPORTED_MODULE_2__.RemoteDataBuildService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_cache_object_cache_service__WEBPACK_IMPORTED_MODULE_4__.ObjectCacheService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_shared_hal_endpoint_service__WEBPACK_IMPORTED_MODULE_5__.HALEndpointService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_1__.NotificationsService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjectable"]({
      token: MetadataFieldDataService,
      factory: MetadataFieldDataService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=default-src_app_core_data_metadata-field-data_service_ts.js.map