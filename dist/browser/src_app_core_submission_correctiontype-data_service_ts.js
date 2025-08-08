"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_app_core_submission_correctiontype-data_service_ts"],{

/***/ 75447:
/*!****************************************************************!*\
  !*** ./src/app/core/submission/correctiontype-data.service.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CorrectionTypeDataService: () => (/* binding */ CorrectionTypeDataService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 6663);
/* harmony import */ var _shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/notifications/notifications.service */ 69472);
/* harmony import */ var _cache_builders_remote_data_build_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cache/builders/remote-data-build.service */ 76799);
/* harmony import */ var _cache_models_request_param_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cache/models/request-param.model */ 53954);
/* harmony import */ var _cache_object_cache_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cache/object-cache.service */ 41684);
/* harmony import */ var _data_base_identifiable_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/base/identifiable-data.service */ 63897);
/* harmony import */ var _data_base_search_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/base/search-data */ 35108);
/* harmony import */ var _data_find_list_options_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data/find-list-options.model */ 41023);
/* harmony import */ var _data_request_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../data/request.service */ 32473);
/* harmony import */ var _shared_hal_endpoint_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/hal-endpoint.service */ 4910);
/* harmony import */ var _shared_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/operators */ 55757);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 90310);

















/**
 * A service that provides methods to make REST requests with correctiontypes endpoint.
 */
class CorrectionTypeDataService extends _data_base_identifiable_data_service__WEBPACK_IMPORTED_MODULE_4__.IdentifiableDataService {
  constructor(requestService, rdbService, objectCache, halService, notificationsService) {
    super('correctiontypes', requestService, rdbService, objectCache, halService);
    this.requestService = requestService;
    this.rdbService = rdbService;
    this.objectCache = objectCache;
    this.halService = halService;
    this.notificationsService = notificationsService;
    this.linkPath = 'correctiontypes';
    this.searchByTopic = 'findByTopic';
    this.searchFindByItem = 'findByItem';
    this.searchData = new _data_base_search_data__WEBPACK_IMPORTED_MODULE_5__.SearchDataImpl(this.linkPath, requestService, rdbService, objectCache, halService, this.responseMsToLive);
  }
  /**
   * Get the correction type by id
   * @param id the id of the correction type
   * @param useCachedVersionIfAvailable use the cached version if available
   * @param reRequestOnStale re-request on stale
   * @returns {Observable<RemoteData<CorrectionType>>} the correction type
   */
  getCorrectionTypeById(id, useCachedVersionIfAvailable = true, reRequestOnStale = true) {
    return this.findById(id, useCachedVersionIfAvailable, reRequestOnStale);
  }
  /**
   * Search for the correction types for the item
   * @param itemUuid the uuid of the item
   * @param useCachedVersionIfAvailable use the cached version if available
   * @returns the list of correction types for the item
   */
  findByItem(itemUuid, useCachedVersionIfAvailable) {
    const options = new _data_find_list_options_model__WEBPACK_IMPORTED_MODULE_6__.FindListOptions();
    options.searchParams = [new _cache_models_request_param_model__WEBPACK_IMPORTED_MODULE_2__.RequestParam('uuid', itemUuid)];
    return this.searchData.searchBy(this.searchFindByItem, options, useCachedVersionIfAvailable);
  }
  /**
   * Find the correction type for the topic
   * @param topic the topic of the correction type to search for
   * @param useCachedVersionIfAvailable use the cached version if available
   * @param reRequestOnStale re-request on stale
   * @returns the correction type for the topic
   */
  findByTopic(topic, useCachedVersionIfAvailable = true, reRequestOnStale = true) {
    const options = new _data_find_list_options_model__WEBPACK_IMPORTED_MODULE_6__.FindListOptions();
    options.searchParams = [new _cache_models_request_param_model__WEBPACK_IMPORTED_MODULE_2__.RequestParam('topic', topic)];
    return this.searchData.searchBy(this.searchByTopic, options, useCachedVersionIfAvailable, reRequestOnStale).pipe((0,_shared_operators__WEBPACK_IMPORTED_MODULE_9__.getAllSucceededRemoteDataPayload)(), (0,_shared_operators__WEBPACK_IMPORTED_MODULE_9__.getPaginatedListPayload)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.map)(list => {
      return list[0];
    }));
  }
  static {
    this.ɵfac = function CorrectionTypeDataService_Factory(t) {
      return new (t || CorrectionTypeDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_data_request_service__WEBPACK_IMPORTED_MODULE_7__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_cache_builders_remote_data_build_service__WEBPACK_IMPORTED_MODULE_1__.RemoteDataBuildService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_cache_object_cache_service__WEBPACK_IMPORTED_MODULE_3__.ObjectCacheService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_shared_hal_endpoint_service__WEBPACK_IMPORTED_MODULE_8__.HALEndpointService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_0__.NotificationsService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjectable"]({
      token: CorrectionTypeDataService,
      factory: CorrectionTypeDataService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_core_submission_correctiontype-data_service_ts.js.map