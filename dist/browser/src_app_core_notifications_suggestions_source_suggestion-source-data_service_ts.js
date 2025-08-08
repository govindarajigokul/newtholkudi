"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_app_core_notifications_suggestions_source_suggestion-source-data_service_ts"],{

/***/ 43371:
/*!*****************************************************************************************!*\
  !*** ./src/app/core/notifications/suggestions/source/suggestion-source-data.service.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SuggestionSourceDataService: () => (/* binding */ SuggestionSourceDataService)
/* harmony export */ });
/* harmony import */ var _shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/notifications/notifications.service */ 69472);
/* harmony import */ var _cache_builders_remote_data_build_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../cache/builders/remote-data-build.service */ 76799);
/* harmony import */ var _cache_object_cache_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../cache/object-cache.service */ 41684);
/* harmony import */ var _data_base_find_all_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../data/base/find-all-data */ 46787);
/* harmony import */ var _data_base_identifiable_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../data/base/identifiable-data.service */ 63897);
/* harmony import */ var _data_default_change_analyzer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../data/default-change-analyzer.service */ 55897);
/* harmony import */ var _data_request_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../data/request.service */ 32473);
/* harmony import */ var _shared_hal_endpoint_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/hal-endpoint.service */ 4910);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ 99797);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 94485);



















/**
 * Service that retrieves Suggestion Source data
 */
class SuggestionSourceDataService extends _data_base_identifiable_data_service__WEBPACK_IMPORTED_MODULE_4__.IdentifiableDataService {
  constructor(requestService, rdbService, store, objectCache, halService, notificationsService, http, comparator) {
    super('suggestionsources', requestService, rdbService, objectCache, halService);
    this.requestService = requestService;
    this.rdbService = rdbService;
    this.store = store;
    this.objectCache = objectCache;
    this.halService = halService;
    this.notificationsService = notificationsService;
    this.http = http;
    this.comparator = comparator;
    this.linkPath = 'suggestionsources';
    this.findAllData = new _data_base_find_all_data__WEBPACK_IMPORTED_MODULE_3__.FindAllDataImpl(this.linkPath, requestService, rdbService, objectCache, halService, this.responseMsToLive);
  }
  /**
   * Return the list of Suggestion source.
   *
   * @param options                     Find list options object.
   * @param useCachedVersionIfAvailable If this is true, the request will only be sent if there's
   *                                    no valid cached version. Defaults to true
   * @param reRequestOnStale            Whether or not the request should automatically be re-
   *                                    requested after the response becomes stale
   * @param linksToFollow               List of {@link FollowLinkConfig} that indicate which {@link HALLink}s should be automatically resolved.
   *
   * @return Observable<RemoteData<PaginatedList<QualityAssuranceSourceObject>>>
   *    The list of Quality Assurance source.
   */
  getSources(options = {}, useCachedVersionIfAvailable = true, reRequestOnStale = true, ...linksToFollow) {
    return this.findAll(options, useCachedVersionIfAvailable, reRequestOnStale, ...linksToFollow);
  }
  /**
   * Return a single Suggestoin source.
   *
   * @param id                          The Quality Assurance source id
   * @param useCachedVersionIfAvailable If this is true, the request will only be sent if there's
   *                                    no valid cached version. Defaults to true
   * @param reRequestOnStale            Whether or not the request should automatically be re-
   *                                    requested after the response becomes stale
   * @param linksToFollow               List of {@link FollowLinkConfig} that indicate which {@link HALLink}s should be automatically resolved.
   *
   * @return Observable<RemoteData<QualityAssuranceSourceObject>>    The Quality Assurance source.
   */
  getSource(id, useCachedVersionIfAvailable = true, reRequestOnStale = true, ...linksToFollow) {
    return this.findById(id, useCachedVersionIfAvailable, reRequestOnStale, ...linksToFollow);
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
  findAll(options = {}, useCachedVersionIfAvailable = true, reRequestOnStale = true, ...linksToFollow) {
    return this.findAllData.findAll(options, useCachedVersionIfAvailable, reRequestOnStale, ...linksToFollow);
  }
  static {
    this.ɵfac = function SuggestionSourceDataService_Factory(t) {
      return new (t || SuggestionSourceDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_data_request_service__WEBPACK_IMPORTED_MODULE_6__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_cache_builders_remote_data_build_service__WEBPACK_IMPORTED_MODULE_1__.RemoteDataBuildService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_9__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_cache_object_cache_service__WEBPACK_IMPORTED_MODULE_2__.ObjectCacheService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_shared_hal_endpoint_service__WEBPACK_IMPORTED_MODULE_7__.HALEndpointService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_0__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_data_default_change_analyzer_service__WEBPACK_IMPORTED_MODULE_5__.DefaultChangeAnalyzer));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
      token: SuggestionSourceDataService,
      factory: SuggestionSourceDataService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_core_notifications_suggestions_source_suggestion-source-data_service_ts.js.map