"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["default-src_app_core_data_processes_process-data_service_ts"],{

/***/ 87414:
/*!*************************************************************!*\
  !*** ./src/app/core/data/processes/process-data.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProcessDataService: () => (/* binding */ ProcessDataService),
/* harmony export */   TIMER_FACTORY: () => (/* binding */ TIMER_FACTORY)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 84975);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 85687);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 47386);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 64785);
/* harmony import */ var src_app_process_page_processes_process_status_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/process-page/processes/process-status.model */ 31189);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/empty.util */ 82777);
/* harmony import */ var _shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/notifications/notifications.service */ 69472);
/* harmony import */ var _cache_builders_remote_data_build_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../cache/builders/remote-data-build.service */ 76799);
/* harmony import */ var _cache_object_cache_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../cache/object-cache.service */ 41684);
/* harmony import */ var _shared_hal_endpoint_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/hal-endpoint.service */ 4910);
/* harmony import */ var _shared_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/operators */ 55757);
/* harmony import */ var _base_delete_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../base/delete-data */ 13617);
/* harmony import */ var _base_find_all_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../base/find-all-data */ 46787);
/* harmony import */ var _base_identifiable_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../base/identifiable-data.service */ 63897);
/* harmony import */ var _base_search_data__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../base/search-data */ 35108);
/* harmony import */ var _bitstream_data_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../bitstream-data.service */ 42578);
/* harmony import */ var _request_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../request.service */ 32473);






















/**
 * Create an InjectionToken for the default JS setTimeout function, purely so we can mock it during
 * testing. (fakeAsync isn't working for this case)
 */
const TIMER_FACTORY = new _angular_core__WEBPACK_IMPORTED_MODULE_13__.InjectionToken('timer', {
  providedIn: 'root',
  factory: () => setTimeout
});
class ProcessDataService extends _base_identifiable_data_service__WEBPACK_IMPORTED_MODULE_9__.IdentifiableDataService {
  constructor(requestService, rdbService, objectCache, halService, bitstreamDataService, notificationsService, zone, timer) {
    super('processes', requestService, rdbService, objectCache, halService);
    this.requestService = requestService;
    this.rdbService = rdbService;
    this.objectCache = objectCache;
    this.halService = halService;
    this.bitstreamDataService = bitstreamDataService;
    this.notificationsService = notificationsService;
    this.zone = zone;
    this.timer = timer;
    this.activelyBeingPolled = new Map();
    this.subs = new Map();
    this.findAllData = new _base_find_all_data__WEBPACK_IMPORTED_MODULE_8__.FindAllDataImpl(this.linkPath, requestService, rdbService, objectCache, halService, this.responseMsToLive);
    this.deleteData = new _base_delete_data__WEBPACK_IMPORTED_MODULE_7__.DeleteDataImpl(this.linkPath, requestService, rdbService, objectCache, halService, notificationsService, this.responseMsToLive, this.constructIdEndpoint);
    this.searchData = new _base_search_data__WEBPACK_IMPORTED_MODULE_10__.SearchDataImpl(this.linkPath, requestService, rdbService, objectCache, halService, this.responseMsToLive);
  }
  /**
   * Return true if the given process has the given status
   * @protected
   */
  static statusIs(process, status) {
    return (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_1__.hasValue)(process) && process.processStatus === status;
  }
  /**
   * Return true if the given process has the status COMPLETED or FAILED
   */
  static hasCompletedOrFailed(process) {
    return ProcessDataService.statusIs(process, src_app_process_page_processes_process_status_model__WEBPACK_IMPORTED_MODULE_0__.ProcessStatus.COMPLETED) || ProcessDataService.statusIs(process, src_app_process_page_processes_process_status_model__WEBPACK_IMPORTED_MODULE_0__.ProcessStatus.FAILED);
  }
  /**
   * Get the endpoint for the files of the process
   * @param processId The ID of the process
   */
  getFilesEndpoint(processId) {
    return this.getBrowseEndpoint().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.switchMap)(href => this.halService.getEndpoint('files', `${href}/${processId}`)));
  }
  /**
   * Get a process' output files
   * @param processId The ID of the process
   */
  getFiles(processId) {
    const href$ = this.getFilesEndpoint(processId);
    return this.bitstreamDataService.findListByHref(href$);
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
   * @param searchMethod                The search method for the Process
   * @param options                     The FindListOptions object
   * @param useCachedVersionIfAvailable If this is true, the request will only be sent if there's
   *                                    no valid cached version. Defaults to true.
   * @param reRequestOnStale            Whether the request should automatically be re-
   *                                    requested after the response becomes stale.
   * @param linksToFollow               List of {@link FollowLinkConfig} that indicate which
   *                                    {@link HALLink}s should automatically be resolved.
   * @return {Observable<RemoteData<PaginatedList<Process>>>}
   *    Return an observable that emits a paginated list of processes
   */
  searchBy(searchMethod, options, useCachedVersionIfAvailable, reRequestOnStale, ...linksToFollow) {
    return this.searchData.searchBy(searchMethod, options, useCachedVersionIfAvailable, reRequestOnStale, ...linksToFollow);
  }
  /**
   * @param id                          The id for this auto-refreshing search. Used to stop
   *                                    auto-refreshing afterwards, and ensure we're not
   *                                    auto-refreshing the same thing multiple times.
   * @param searchMethod                The search method for the Process
   * @param options                     The FindListOptions object
   * @param pollingIntervalInMs         The interval by which the search will be repeated
   * @param linksToFollow               List of {@link FollowLinkConfig} that indicate which
   *                                    {@link HALLink}s should automatically be resolved.
   * @return {Observable<RemoteData<PaginatedList<Process>>>}
   *    Return an observable that emits a paginated list of processes every interval
   */
  autoRefreshingSearchBy(id, searchMethod, options, pollingIntervalInMs = 5000, ...linksToFollow) {
    const result$ = this.searchBy(searchMethod, options, true, true, ...linksToFollow).pipe((0,_shared_operators__WEBPACK_IMPORTED_MODULE_6__.getAllCompletedRemoteData)());
    const sub = result$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.filter)(() => !this.activelyBeingPolled.has(id))).subscribe(processListRd => {
      this.clearCurrentTimeout(id);
      const nextTimeout = this.timer(() => {
        this.activelyBeingPolled.delete(id);
        this.requestService.setStaleByHrefSubstring(processListRd.payload._links.self.href);
      }, pollingIntervalInMs);
      this.activelyBeingPolled.set(id, nextTimeout);
    });
    this.subs.set(id, sub);
    return result$;
  }
  /**
   * Stop auto-refreshing the request with the given id
   * @param id the id of the request to stop automatically refreshing
   */
  stopAutoRefreshing(id) {
    this.clearCurrentTimeout(id);
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_1__.hasValue)(this.subs.get(id))) {
      this.subs.get(id).unsubscribe();
      this.subs.delete(id);
    }
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
   * Clear the timeout for the given id, if that timeout exists
   * @protected
   */
  clearCurrentTimeout(id) {
    const timeout = this.activelyBeingPolled.get(id);
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_1__.hasValue)(timeout)) {
      clearTimeout(timeout);
    }
    this.activelyBeingPolled.delete(id);
  }
  /**
   * Poll the process with the given ID, using the given interval, until that process either
   * completes successfully or fails
   *
   * Return an Observable<RemoteData> for the Process. Note that this will also emit while the
   * process is still running. It will only emit again when the process (not the RemoteData!) changes
   * status. That makes it more convenient to retrieve that process for a component: you can replace
   * a findByID call with this method, rather than having to do a separate findById, and then call
   * this method
   *
   * @param processId           The ID of the {@link Process} to poll
   * @param pollingIntervalInMs The interval for how often the request needs to be polled
   * @param linksToFollow       List of {@link FollowLinkConfig} that indicate which {@link HALLink}s should be
   *                            automatically resolved
   */
  autoRefreshUntilCompletion(processId, pollingIntervalInMs = 5000, ...linksToFollow) {
    const process$ = this.findById(processId, true, true, ...linksToFollow).pipe((0,_shared_operators__WEBPACK_IMPORTED_MODULE_6__.getAllCompletedRemoteData)());
    // Create a subscription that marks the data as stale if the process hasn't been completed and
    // the polling interval time has been exceeded.
    const sub = process$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.filter)(processRD => !ProcessDataService.hasCompletedOrFailed(processRD.payload) && !this.activelyBeingPolled.has(processId))).subscribe(processRD => {
      this.clearCurrentTimeout(processId);
      if (processRD.hasSucceeded) {
        const nextTimeout = this.timer(() => {
          this.activelyBeingPolled.delete(processId);
          this.invalidateByHref(processRD.payload._links.self.href);
        }, pollingIntervalInMs);
        this.activelyBeingPolled.set(processId, nextTimeout);
      }
    });
    this.subs.set(processId, sub);
    // When the process completes create a one off subscription (the `find` completes the
    // observable) that unsubscribes the previous one, removes the processId from the list of
    // processes being polled and clears any running timeouts
    process$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.find)(processRD => ProcessDataService.hasCompletedOrFailed(processRD.payload))).subscribe(() => {
      this.stopAutoRefreshing(processId);
    });
    return process$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.distinctUntilChanged)((previous, current) => previous.payload?.processStatus === current.payload?.processStatus));
  }
  static {
    this.ɵfac = function ProcessDataService_Factory(t) {
      return new (t || ProcessDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_request_service__WEBPACK_IMPORTED_MODULE_12__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_cache_builders_remote_data_build_service__WEBPACK_IMPORTED_MODULE_3__.RemoteDataBuildService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_cache_object_cache_service__WEBPACK_IMPORTED_MODULE_4__.ObjectCacheService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_shared_hal_endpoint_service__WEBPACK_IMPORTED_MODULE_5__.HALEndpointService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_bitstream_data_service__WEBPACK_IMPORTED_MODULE_11__.BitstreamDataService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_2__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_13__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](TIMER_FACTORY));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjectable"]({
      token: ProcessDataService,
      factory: ProcessDataService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=default-src_app_core_data_processes_process-data_service_ts.js.map