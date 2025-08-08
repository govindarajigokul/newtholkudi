"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_app_core_notifications_qa_events_quality-assurance-event-data_service_ts"],{

/***/ 27450:
/*!**************************************************************************************!*\
  !*** ./src/app/core/notifications/qa/events/quality-assurance-event-data.service.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QualityAssuranceEventDataService: () => (/* binding */ QualityAssuranceEventDataService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ 94485);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 47386);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 78374);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 84975);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/empty.util */ 82777);
/* harmony import */ var _shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/notifications/notifications.service */ 69472);
/* harmony import */ var _cache_builders_remote_data_build_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../cache/builders/remote-data-build.service */ 76799);
/* harmony import */ var _cache_models_request_param_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../cache/models/request-param.model */ 53954);
/* harmony import */ var _cache_object_cache_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../cache/object-cache.service */ 41684);
/* harmony import */ var _data_base_create_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../data/base/create-data */ 39280);
/* harmony import */ var _data_base_delete_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../data/base/delete-data */ 13617);
/* harmony import */ var _data_base_identifiable_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../data/base/identifiable-data.service */ 63897);
/* harmony import */ var _data_base_patch_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../data/base/patch-data */ 87158);
/* harmony import */ var _data_base_search_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../data/base/search-data */ 35108);
/* harmony import */ var _data_default_change_analyzer_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../data/default-change-analyzer.service */ 55897);
/* harmony import */ var _data_request_models__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../data/request.models */ 44446);
/* harmony import */ var _data_request_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../data/request.service */ 32473);
/* harmony import */ var _shared_hal_endpoint_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/hal-endpoint.service */ 4910);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 90310);























/**
 * The service handling all Quality Assurance topic REST requests.
 */
class QualityAssuranceEventDataService extends _data_base_identifiable_data_service__WEBPACK_IMPORTED_MODULE_7__.IdentifiableDataService {
  /**
   * Initialize service variables
   * @param {RequestService} requestService
   * @param {RemoteDataBuildService} rdbService
   * @param {ObjectCacheService} objectCache
   * @param {HALEndpointService} halService
   * @param {NotificationsService} notificationsService
   * @param {DefaultChangeAnalyzer<QualityAssuranceEventObject>} comparator
   */
  constructor(requestService, rdbService, objectCache, halService, notificationsService, comparator) {
    super('qualityassuranceevents', requestService, rdbService, objectCache, halService);
    this.requestService = requestService;
    this.rdbService = rdbService;
    this.objectCache = objectCache;
    this.halService = halService;
    this.notificationsService = notificationsService;
    this.comparator = comparator;
    this.createData = new _data_base_create_data__WEBPACK_IMPORTED_MODULE_5__.CreateDataImpl(this.linkPath, requestService, rdbService, objectCache, halService, notificationsService, this.responseMsToLive);
    this.deleteData = new _data_base_delete_data__WEBPACK_IMPORTED_MODULE_6__.DeleteDataImpl(this.linkPath, requestService, rdbService, objectCache, halService, notificationsService, this.responseMsToLive, this.constructIdEndpoint);
    this.patchData = new _data_base_patch_data__WEBPACK_IMPORTED_MODULE_8__.PatchDataImpl(this.linkPath, requestService, rdbService, objectCache, halService, comparator, this.responseMsToLive, this.constructIdEndpoint);
    this.searchData = new _data_base_search_data__WEBPACK_IMPORTED_MODULE_9__.SearchDataImpl(this.linkPath, requestService, rdbService, objectCache, halService, this.responseMsToLive);
  }
  /**
   * Return the list of Quality Assurance events by topic.
   *
   * @param topic
   *    The Quality Assurance topic
   * @param options
   *    Find list options object.
   * @param linksToFollow
   *    List of {@link FollowLinkConfig} that indicate which {@link HALLink}s should be automatically resolved.
   * @return Observable<RemoteData<PaginatedList<QualityAssuranceEventObject>>>
   *    The list of Quality Assurance events.
   */
  getEventsByTopic(topic, options = {}, ...linksToFollow) {
    options.searchParams = [new _cache_models_request_param_model__WEBPACK_IMPORTED_MODULE_3__.RequestParam('topic', topic)];
    return this.searchData.searchBy('findByTopic', options, true, true, ...linksToFollow);
  }
  /**
   * Service for retrieving Quality Assurance events by topic and target.
   * @param options (Optional) The search options to use when retrieving the events.
   * @param linksToFollow (Optional) The links to follow when retrieving the events.
   * @returns An observable of the remote data containing the paginated list of Quality Assurance events.
   */
  searchEventsByTopic(options = {}, ...linksToFollow) {
    return this.searchData.searchBy('findByTopic', options, true, true, ...linksToFollow);
  }
  /**
   * Clear findByTopic requests from cache
   */
  clearFindByTopicRequests() {
    this.requestService.setStaleByHrefSubstring('findByTopic');
  }
  /**
   * Return a single Quality Assurance event.
   *
   * @param id
   *    The Quality Assurance event id
   * @param linksToFollow
   *    List of {@link FollowLinkConfig} that indicate which {@link HALLink}s should be automatically resolved
   * @return Observable<RemoteData<QualityAssuranceEventObject>>
   *    The Quality Assurance event.
   */
  getEvent(id, ...linksToFollow) {
    return this.findById(id, true, true, ...linksToFollow);
  }
  /**
   * Save the new status of a Quality Assurance event.
   *
   * @param status
   *    The new status
   * @param dso QualityAssuranceEventObject
   *    The event item
   * @param reason
   *    The optional reason (not used for now; for future implementation)
   * @return Observable<RestResponse>
   *    The REST response.
   */
  patchEvent(status, dso, reason) {
    const operation = [{
      path: '/status',
      op: 'replace',
      value: status
    }];
    return this.patchData.patch(dso, operation);
  }
  /**
   * Bound a project to a Quality Assurance event publication.
   *
   * @param itemId
   *    The Id of the Quality Assurance event
   * @param projectId
   *    The project Id to bound
   * @return Observable<RestResponse>
   *    The REST response.
   */
  boundProject(itemId, projectId) {
    return this.postOnRelated(itemId, projectId);
  }
  /**
   * Remove a project from a Quality Assurance event publication.
   *
   * @param itemId
   *    The Id of the Quality Assurance event
   * @return Observable<RestResponse>
   *    The REST response.
   */
  removeProject(itemId) {
    return this.deleteOnRelated(itemId);
  }
  /**
   * Perform a delete operation on an endpoint related item. Ex.: endpoint/<itemId>/related
   * @param objectId The item id
   * @return the RestResponse as an Observable
   */
  deleteOnRelated(objectId) {
    const requestId = this.requestService.generateRequestId();
    const hrefObs = this.getIDHrefObs(objectId);
    hrefObs.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.find)(href => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_0__.hasValue)(href))).subscribe(href => {
      const request = new _data_request_models__WEBPACK_IMPORTED_MODULE_11__.DeleteByIDRequest(requestId, href + '/related', objectId);
      if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_0__.hasValue)(this.responseMsToLive)) {
        request.responseMsToLive = this.responseMsToLive;
      }
      this.requestService.send(request);
    });
    return this.rdbService.buildFromRequestUUID(requestId);
  }
  /**
   * Perform a post on an endpoint related item with ID. Ex.: endpoint/<itemId>/related?item=<relatedItemId>
   * @param objectId The item id
   * @param relatedItemId The related item Id
   * @param body The optional POST body
   * @return the RestResponse as an Observable
   */
  postOnRelated(objectId, relatedItemId, body) {
    const requestId = this.requestService.generateRequestId();
    const hrefObs = this.getIDHrefObs(objectId);
    hrefObs.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.take)(1)).subscribe(href => {
      const request = new _data_request_models__WEBPACK_IMPORTED_MODULE_11__.PostRequest(requestId, href + '/related?item=' + relatedItemId, body);
      if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_0__.hasValue)(this.responseMsToLive)) {
        request.responseMsToLive = this.responseMsToLive;
      }
      this.requestService.send(request);
    });
    return this.rdbService.buildFromRequestUUID(requestId);
  }
  /**
   * Perform a post on an endpoint related to correction type
   * @param data the data to post
   * @returns the RestResponse as an Observable
   */
  postData(target, correctionType, related, reason) {
    const requestId = this.requestService.generateRequestId();
    const href$ = this.getBrowseEndpoint();
    return href$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.switchMap)(href => {
      const options = Object.create({});
      let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpHeaders();
      headers = headers.append('Content-Type', 'application/json');
      options.headers = headers;
      let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpParams();
      params = params.append('target', target).append('correctionType', correctionType);
      options.params = params;
      const request = new _data_request_models__WEBPACK_IMPORTED_MODULE_11__.PostRequest(requestId, href, {
        'reason': reason
      }, options);
      if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_0__.hasValue)(this.responseMsToLive)) {
        request.responseMsToLive = this.responseMsToLive;
      }
      this.requestService.send(request);
      return this.rdbService.buildFromRequestUUID(requestId);
    }));
  }
  deleteQAEvent(qaEvent) {
    return this.deleteData.delete(qaEvent.id);
  }
  static {
    this.ɵfac = function QualityAssuranceEventDataService_Factory(t) {
      return new (t || QualityAssuranceEventDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵinject"](_data_request_service__WEBPACK_IMPORTED_MODULE_12__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵinject"](_cache_builders_remote_data_build_service__WEBPACK_IMPORTED_MODULE_2__.RemoteDataBuildService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵinject"](_cache_object_cache_service__WEBPACK_IMPORTED_MODULE_4__.ObjectCacheService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵinject"](_shared_hal_endpoint_service__WEBPACK_IMPORTED_MODULE_13__.HALEndpointService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵinject"](_shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_1__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵinject"](_data_default_change_analyzer_service__WEBPACK_IMPORTED_MODULE_10__.DefaultChangeAnalyzer));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineInjectable"]({
      token: QualityAssuranceEventDataService,
      factory: QualityAssuranceEventDataService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_core_notifications_qa_events_quality-assurance-event-data_service_ts.js.map