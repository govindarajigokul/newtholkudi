"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["default-src_app_core_breadcrumbs_quality-assurance-breadcrumb_resolver_ts-src_app_notificatio-52f0a5"],{

/***/ 99998:
/*!***************************************************************************!*\
  !*** ./src/app/core/breadcrumbs/quality-assurance-breadcrumb.resolver.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   qualityAssuranceBreadcrumbResolver: () => (/* binding */ qualityAssuranceBreadcrumbResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _quality_assurance_breadcrumb_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quality-assurance-breadcrumb.service */ 70801);


const qualityAssuranceBreadcrumbResolver = (route, state, breadcrumbService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_quality_assurance_breadcrumb_service__WEBPACK_IMPORTED_MODULE_0__.QualityAssuranceBreadcrumbService)) => {
  const sourceId = route.paramMap.get('sourceId');
  const topicId = route.paramMap.get('topicId');
  let key = sourceId;
  if (topicId) {
    key += `:${topicId}`;
  }
  const fullPath = state.url;
  const url = fullPath.substring(0, fullPath.indexOf(sourceId));
  return {
    provider: breadcrumbService,
    key,
    url
  };
};

/***/ }),

/***/ 70801:
/*!**************************************************************************!*\
  !*** ./src/app/core/breadcrumbs/quality-assurance-breadcrumb.service.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QualityAssuranceBreadcrumbService: () => (/* binding */ QualityAssuranceBreadcrumbService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 17796);
/* harmony import */ var _breadcrumbs_breadcrumb_breadcrumb_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../breadcrumbs/breadcrumb/breadcrumb.model */ 90839);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 96439);





/**
 * Service to calculate QA breadcrumbs for a single part of the route
 */
class QualityAssuranceBreadcrumbService {
  constructor(translationService) {
    this.translationService = translationService;
    this.QUALITY_ASSURANCE_BREADCRUMB_KEY = 'admin.quality-assurance.breadcrumbs';
  }
  /**
   * Method to calculate the breadcrumbs
   * @param key The key used to resolve the breadcrumb
   * @param url The url to use as a link for this breadcrumb
   */
  getBreadcrumbs(key, url) {
    const args = key.split(':');
    const sourceId = args[0];
    const topicId = args.length > 2 ? args[args.length - 1] : args[1];
    if (topicId) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)([new _breadcrumbs_breadcrumb_breadcrumb_model__WEBPACK_IMPORTED_MODULE_0__.Breadcrumb(this.translationService.instant(this.QUALITY_ASSURANCE_BREADCRUMB_KEY), url), new _breadcrumbs_breadcrumb_breadcrumb_model__WEBPACK_IMPORTED_MODULE_0__.Breadcrumb(sourceId, `${url}${sourceId}`), new _breadcrumbs_breadcrumb_breadcrumb_model__WEBPACK_IMPORTED_MODULE_0__.Breadcrumb(topicId, undefined)]);
    } else {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)([new _breadcrumbs_breadcrumb_breadcrumb_model__WEBPACK_IMPORTED_MODULE_0__.Breadcrumb(this.translationService.instant(this.QUALITY_ASSURANCE_BREADCRUMB_KEY), url), new _breadcrumbs_breadcrumb_breadcrumb_model__WEBPACK_IMPORTED_MODULE_0__.Breadcrumb(sourceId, `${url}${sourceId}`)]);
    }
  }
  static {
    this.ɵfac = function QualityAssuranceBreadcrumbService_Factory(t) {
      return new (t || QualityAssuranceBreadcrumbService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: QualityAssuranceBreadcrumbService,
      factory: QualityAssuranceBreadcrumbService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

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

/***/ }),

/***/ 52828:
/*!**************************************************************!*\
  !*** ./src/app/notifications/notifications-state.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationsStateService: () => (/* binding */ NotificationsStateService)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ 99797);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var _qa_source_quality_assurance_source_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./qa/source/quality-assurance-source.actions */ 74566);
/* harmony import */ var _qa_topics_quality_assurance_topics_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./qa/topics/quality-assurance-topics.actions */ 79984);
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectors */ 10131);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 90310);







/**
 * The service handling the Notifications State.
 */
class NotificationsStateService {
  /**
   * Initialize the service variables.
   * @param {Store<SuggestionNotificationsState>} store
   */
  constructor(store) {
    this.store = store;
  }
  // Quality Assurance topics
  // --------------------------------------------------------------------------
  /**
   * Returns the list of Quality Assurance topics from the state.
   *
   * @return Observable<QualityAssuranceTopicObject>
   *    The list of Quality Assurance topics.
   */
  getQualityAssuranceTopics() {
    return this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.select)((0,_selectors__WEBPACK_IMPORTED_MODULE_2__.qualityAssuranceTopicsObjectSelector)()));
  }
  /**
   * Returns the information about the loading status of the Quality Assurance topics (if it's running or not).
   *
   * @return Observable<boolean>
   *    'true' if the topics are loading, 'false' otherwise.
   */
  isQualityAssuranceTopicsLoading() {
    return this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.select)(_selectors__WEBPACK_IMPORTED_MODULE_2__.isQualityAssuranceTopicsLoadedSelector), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(loaded => !loaded));
  }
  /**
   * Returns the information about the loading status of the Quality Assurance topics (whether or not they were loaded).
   *
   * @return Observable<boolean>
   *    'true' if the topics are loaded, 'false' otherwise.
   */
  isQualityAssuranceTopicsLoaded() {
    return this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.select)(_selectors__WEBPACK_IMPORTED_MODULE_2__.isQualityAssuranceTopicsLoadedSelector));
  }
  /**
   * Returns the information about the processing status of the Quality Assurance topics (if it's running or not).
   *
   * @return Observable<boolean>
   *    'true' if there are operations running on the topics (ex.: a REST call), 'false' otherwise.
   */
  isQualityAssuranceTopicsProcessing() {
    return this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.select)(_selectors__WEBPACK_IMPORTED_MODULE_2__.isQualityAssuranceTopicsProcessingSelector));
  }
  /**
   * Returns, from the state, the total available pages of the Quality Assurance topics.
   *
   * @return Observable<number>
   *    The number of the Quality Assurance topics pages.
   */
  getQualityAssuranceTopicsTotalPages() {
    return this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.select)(_selectors__WEBPACK_IMPORTED_MODULE_2__.getQualityAssuranceTopicsTotalPagesSelector));
  }
  /**
   * Returns the current page of the Quality Assurance topics, from the state.
   *
   * @return Observable<number>
   *    The number of the current Quality Assurance topics page.
   */
  getQualityAssuranceTopicsCurrentPage() {
    return this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.select)(_selectors__WEBPACK_IMPORTED_MODULE_2__.getQualityAssuranceTopicsCurrentPageSelector));
  }
  /**
   * Returns the total number of the Quality Assurance topics.
   *
   * @return Observable<number>
   *    The number of the Quality Assurance topics.
   */
  getQualityAssuranceTopicsTotals() {
    return this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.select)(_selectors__WEBPACK_IMPORTED_MODULE_2__.getQualityAssuranceTopicsTotalsSelector));
  }
  /**
   * Dispatch a request to change the Quality Assurance topics state, retrieving the topics from the server.
   *
   * @param elementsPerPage
   *    The number of the topics per page.
   * @param currentPage
   *    The number of the current page.
   */
  dispatchRetrieveQualityAssuranceTopics(elementsPerPage, currentPage, sourceId, targteId) {
    this.store.dispatch(new _qa_topics_quality_assurance_topics_actions__WEBPACK_IMPORTED_MODULE_1__.RetrieveAllTopicsAction(elementsPerPage, currentPage, sourceId, targteId));
  }
  // Quality Assurance source
  // --------------------------------------------------------------------------
  /**
   * Returns the list of Quality Assurance source from the state.
   *
   * @return Observable<QualityAssuranceSourceObject>
   *    The list of Quality Assurance source.
   */
  getQualityAssuranceSource() {
    return this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.select)((0,_selectors__WEBPACK_IMPORTED_MODULE_2__.qualityAssuranceSourceObjectSelector)()));
  }
  /**
   * Returns the information about the loading status of the Quality Assurance source (if it's running or not).
   *
   * @return Observable<boolean>
   *    'true' if the source are loading, 'false' otherwise.
   */
  isQualityAssuranceSourceLoading() {
    return this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.select)(_selectors__WEBPACK_IMPORTED_MODULE_2__.isQualityAssuranceSourceLoadedSelector), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(loaded => !loaded));
  }
  /**
   * Returns the information about the loading status of the Quality Assurance source (whether or not they were loaded).
   *
   * @return Observable<boolean>
   *    'true' if the source are loaded, 'false' otherwise.
   */
  isQualityAssuranceSourceLoaded() {
    return this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.select)(_selectors__WEBPACK_IMPORTED_MODULE_2__.isQualityAssuranceSourceLoadedSelector));
  }
  /**
   * Returns the information about the processing status of the Quality Assurance source (if it's running or not).
   *
   * @return Observable<boolean>
   *    'true' if there are operations running on the source (ex.: a REST call), 'false' otherwise.
   */
  isQualityAssuranceSourceProcessing() {
    return this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.select)(_selectors__WEBPACK_IMPORTED_MODULE_2__.isQualityAssuranceSourceProcessingSelector));
  }
  /**
   * Returns, from the state, the total available pages of the Quality Assurance source.
   *
   * @return Observable<number>
   *    The number of the Quality Assurance source pages.
   */
  getQualityAssuranceSourceTotalPages() {
    return this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.select)(_selectors__WEBPACK_IMPORTED_MODULE_2__.getQualityAssuranceSourceTotalPagesSelector));
  }
  /**
   * Returns the current page of the Quality Assurance source, from the state.
   *
   * @return Observable<number>
   *    The number of the current Quality Assurance source page.
   */
  getQualityAssuranceSourceCurrentPage() {
    return this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.select)(_selectors__WEBPACK_IMPORTED_MODULE_2__.getQualityAssuranceSourceCurrentPageSelector));
  }
  /**
   * Returns the total number of the Quality Assurance source.
   *
   * @return Observable<number>
   *    The number of the Quality Assurance source.
   */
  getQualityAssuranceSourceTotals() {
    return this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.select)(_selectors__WEBPACK_IMPORTED_MODULE_2__.getQualityAssuranceSourceTotalsSelector));
  }
  /**
   * Dispatch a request to change the Quality Assurance source state, retrieving the source from the server.
   *
   * @param elementsPerPage
   *    The number of the source per page.
   * @param currentPage
   *    The number of the current page.
   */
  dispatchRetrieveQualityAssuranceSource(elementsPerPage, currentPage) {
    this.store.dispatch(new _qa_source_quality_assurance_source_actions__WEBPACK_IMPORTED_MODULE_0__.RetrieveAllSourceAction(elementsPerPage, currentPage));
  }
  static {
    this.ɵfac = function NotificationsStateService_Factory(t) {
      return new (t || NotificationsStateService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.Store));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
      token: NotificationsStateService,
      factory: NotificationsStateService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 96830:
/*!********************************************************************************!*\
  !*** ./src/app/notifications/qa/events/ePerson-data/ePerson-data.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EPersonDataComponent: () => (/* binding */ EPersonDataComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _core_eperson_eperson_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/eperson/eperson-data.service */ 74449);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/shared/operators */ 55757);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);





function EPersonDataComponent_ng_container_0_ng_container_1_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const property_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ePersonData_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ePersonData_r2[property_r1], " ");
  }
}
function EPersonDataComponent_ng_container_0_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, EPersonDataComponent_ng_container_0_ng_container_1_ng_container_1_span_1_Template, 2, 1, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const property_r1 = ctx.$implicit;
    const ePersonData_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ePersonData_r2[property_r1]);
  }
}
function EPersonDataComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, EPersonDataComponent_ng_container_0_ng_container_1_ng_container_1_Template, 3, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.properties);
  }
}
function EPersonDataComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, EPersonDataComponent_ng_container_0_ng_container_1_Template, 2, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, ctx_r2.getEPersonData$()));
  }
}
/**
 * Represents the component for displaying ePerson data.
 */
class EPersonDataComponent {
  /**
   * Creates an instance of the EPersonDataComponent.
   * @param ePersonDataService The service for retrieving ePerson data.
   */
  constructor(ePersonDataService) {
    this.ePersonDataService = ePersonDataService;
  }
  /**
   * Retrieves the EPerson data based on the provided ePersonId.
   * @returns An Observable that emits the EPerson data.
   */
  getEPersonData$() {
    if (this.ePersonId) {
      return this.ePersonDataService.findById(this.ePersonId, true).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_1__.getFirstCompletedRemoteData)(), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_1__.getRemoteDataPayload)());
    }
  }
  static {
    this.ɵfac = function EPersonDataComponent_Factory(t) {
      return new (t || EPersonDataComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_eperson_eperson_data_service__WEBPACK_IMPORTED_MODULE_0__.EPersonDataService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: EPersonDataComponent,
      selectors: [["ds-eperson-data"]],
      inputs: {
        ePersonId: "ePersonId",
        properties: "properties"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 1,
      vars: 1,
      consts: [[4, "ngIf"], [4, "ngFor", "ngForOf"]],
      template: function EPersonDataComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, EPersonDataComponent_ng_container_0_Template, 3, 3, "ng-container", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.ePersonId);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgFor, _angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVQZXJzb24tZGF0YS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQSIsImZpbGUiOiJlUGVyc29uLWRhdGEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqLyJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbm90aWZpY2F0aW9ucy9xYS9ldmVudHMvZVBlcnNvbi1kYXRhL2VQZXJzb24tZGF0YS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBLGdrQkFBZ2tCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi8iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 61978:
/*!*******************************************************************************!*\
  !*** ./src/app/notifications/qa/events/quality-assurance-events.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QualityAssuranceEventsComponent: () => (/* binding */ QualityAssuranceEventsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 49966);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs */ 83485);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! rxjs */ 17796);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! rxjs */ 70141);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! rxjs */ 27639);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs/operators */ 21252);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! rxjs/operators */ 78374);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! rxjs/operators */ 84975);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! rxjs/operators */ 64785);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! rxjs/operators */ 74671);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! rxjs/operators */ 89800);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! rxjs/operators */ 80389);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 88280);
/* harmony import */ var _core_cache_models_sort_options_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/cache/models/sort-options.model */ 6238);
/* harmony import */ var _core_data_feature_authorization_authorization_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/data/feature-authorization/authorization-data.service */ 3675);
/* harmony import */ var _core_data_feature_authorization_feature_id__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/data/feature-authorization/feature-id */ 3970);
/* harmony import */ var _core_data_find_list_options_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/data/find-list-options.model */ 41023);
/* harmony import */ var _core_data_item_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/data/item-data.service */ 29326);
/* harmony import */ var _core_notifications_qa_events_quality_assurance_event_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/notifications/qa/events/quality-assurance-event-data.service */ 27450);
/* harmony import */ var _core_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/pagination/pagination.service */ 76896);
/* harmony import */ var _core_shared_metadata_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/shared/metadata.utils */ 39552);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/shared/operators */ 55757);
/* harmony import */ var _item_page_item_page_routing_paths__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../item-page/item-page-routing-paths */ 90887);
/* harmony import */ var _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/alert/alert.component */ 16292);
/* harmony import */ var _shared_btn_disabled_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/btn-disabled.directive */ 60456);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/empty.util */ 82777);
/* harmony import */ var _shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/loading/themed-loading.component */ 82394);
/* harmony import */ var _shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shared/notifications/notifications.service */ 69472);
/* harmony import */ var _shared_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../shared/pagination/pagination.component */ 40590);
/* harmony import */ var _shared_pagination_pagination_component_options_model__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../shared/pagination/pagination-component-options.model */ 23401);
/* harmony import */ var _shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../shared/utils/follow-link-config.model */ 67600);
/* harmony import */ var _project_entry_import_modal_project_entry_import_modal_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../project-entry-import-modal/project-entry-import-modal.component */ 5464);
/* harmony import */ var _ePerson_data_ePerson_data_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ePerson-data/ePerson-data.component */ 96830);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ 90310);




































const _c0 = (a0, a1) => ({
  topic: a0,
  source: a1
});
const _c1 = a0 => ["/items", a0];
const _c2 = () => ["email"];
function QualityAssuranceEventsComponent_ds_alert_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ds-alert", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("type", "alert-info");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](2, 2, "quality-assurance.events.description", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction2"](5, _c0, ctx_r0.selectedTopicName, ctx_r0.sourceId)), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsanitizeHtml"]);
  }
}
function QualityAssuranceEventsComponent_ds_alert_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ds-alert", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("type", "alert-info");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](2, 4, "quality-assurance.events.description-with-topic-and-target", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction2"](9, _c0, ctx_r0.selectedTopicName, ctx_r0.sourceId)), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("routerLink", ctx_r0.itemPageUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](5, 7, ctx_r0.getTargetItemTitle()));
  }
}
function QualityAssuranceEventsComponent_ds_loading_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](0, "ds-loading", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate"]("message", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](1, 1, "quality-assurance.loading"));
  }
}
function QualityAssuranceEventsComponent_ds_pagination_16_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](2, 1, "quality-assurance.noEvents"), " ");
  }
}
function QualityAssuranceEventsComponent_ds_pagination_16_div_5_th_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](2, 1, "quality-assurance.event.table.project-details"), " ");
  }
}
function QualityAssuranceEventsComponent_ds_pagination_16_div_5_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](3, 2, "quality-assurance.event.table.reasons"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](6, 4, "quality-assurance.event.table.person-who-requested"), " ");
  }
}
function QualityAssuranceEventsComponent_ds_pagination_16_div_5_tr_16_a_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const eventElement_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction1"](2, _c1, eventElement_r3 == null ? null : eventElement_r3.target == null ? null : eventElement_r3.target.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](eventElement_r3.title);
  }
}
function QualityAssuranceEventsComponent_ds_pagination_16_div_5_tr_16_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const eventElement_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](eventElement_r3.title);
  }
}
function QualityAssuranceEventsComponent_ds_pagination_16_div_5_tr_16_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div")(1, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "span", 35)(5, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const eventElement_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](3, 4, "quality-assurance.event.table.event.message.serviceUrl"));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("title", eventElement_r3.event.message.serviceId);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("href", eventElement_r3.event.message.serviceId, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](eventElement_r3.event.message.serviceId);
  }
}
function QualityAssuranceEventsComponent_ds_pagination_16_div_5_tr_16_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 37)(1, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "span", 38)(5, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const eventElement_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](3, 4, "quality-assurance.event.table.event.message.link"));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("title", eventElement_r3.event.message.href);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("href", eventElement_r3.event.message.href, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](eventElement_r3.event.message.href);
  }
}
function QualityAssuranceEventsComponent_ds_pagination_16_div_5_tr_16_td_8_a_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const eventElement_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate"]("href", ctx_r0.getPIDHref(eventElement_r3.event.message), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", eventElement_r3.event.message.value, " ");
  }
}
function QualityAssuranceEventsComponent_ds_pagination_16_div_5_tr_16_td_8_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const eventElement_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](eventElement_r3.event.message.value);
  }
}
function QualityAssuranceEventsComponent_ds_pagination_16_div_5_tr_16_td_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "td")(1, "p")(2, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](5, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](6, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](8, "p")(9, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](13, QualityAssuranceEventsComponent_ds_pagination_16_div_5_tr_16_td_8_a_13_Template, 2, 2, "a", 41)(14, QualityAssuranceEventsComponent_ds_pagination_16_div_5_tr_16_td_8_ng_template_14_Template, 2, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const noPID_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](15);
    const eventElement_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](4, 5, "quality-assurance.event.table.pidtype"));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](eventElement_r3.event.message.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](11, 7, "quality-assurance.event.table.pidvalue"));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r0.hasPIDHref(eventElement_r3.event.message))("ngIfElse", noPID_r4);
  }
}
function QualityAssuranceEventsComponent_ds_pagination_16_div_5_tr_16_td_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "td")(1, "p")(2, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](6, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const eventElement_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](4, 2, "quality-assurance.event.table.subjectValue"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](eventElement_r3.event.message.value);
  }
}
function QualityAssuranceEventsComponent_ds_pagination_16_div_5_tr_16_td_10_i_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](0, "i", 48);
  }
}
function QualityAssuranceEventsComponent_ds_pagination_16_div_5_tr_16_td_10_i_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](0, "i", 49);
  }
}
function QualityAssuranceEventsComponent_ds_pagination_16_div_5_tr_16_td_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "td")(1, "p", 43)(2, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](6, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](8, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function QualityAssuranceEventsComponent_ds_pagination_16_div_5_tr_16_td_10_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r0.showMore = !ctx_r0.showMore);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](9, QualityAssuranceEventsComponent_ds_pagination_16_div_5_tr_16_td_10_i_9_Template, 1, 0, "i", 46)(10, QualityAssuranceEventsComponent_ds_pagination_16_div_5_tr_16_td_10_i_10_Template, 1, 0, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const eventElement_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵclassProp"]("show", ctx_r0.showMore);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](4, 7, "quality-assurance.event.table.abstract"));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](eventElement_r3.event.message.abstract);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !ctx_r0.showMore);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r0.showMore);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](12, 9, ctx_r0.showMore ? "quality-assurance.event.table.less" : "quality-assurance.event.table.more"), " ");
  }
}
function QualityAssuranceEventsComponent_ds_pagination_16_div_5_tr_16_ng_container_11_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "span")(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const eventElement_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](eventElement_r3.event.message.reason);
  }
}
function QualityAssuranceEventsComponent_ds_pagination_16_div_5_tr_16_ng_container_11_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](1, "ds-eperson-data", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const eventElement_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ePersonId", eventElement_r3.event.originalId)("properties", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction0"](2, _c2));
  }
}
function QualityAssuranceEventsComponent_ds_pagination_16_div_5_tr_16_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "td")(2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](3, QualityAssuranceEventsComponent_ds_pagination_16_div_5_tr_16_ng_container_11_span_3_Template, 4, 1, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "td")(5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](6, QualityAssuranceEventsComponent_ds_pagination_16_div_5_tr_16_ng_container_11_span_6_Template, 2, 3, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const eventElement_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", eventElement_r3.event.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", eventElement_r3.event.originalId);
  }
}
function QualityAssuranceEventsComponent_ds_pagination_16_div_5_tr_16_td_12_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "span")(1, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](4, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const eventElement_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](3, 2, "quality-assurance.event.table.acronym"));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](eventElement_r3.event.message.acronym);
  }
}
function QualityAssuranceEventsComponent_ds_pagination_16_div_5_tr_16_td_12_span_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "span")(1, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](4, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const eventElement_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](3, 2, "quality-assurance.event.table.code"));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](eventElement_r3.event.message.code);
  }
}
function QualityAssuranceEventsComponent_ds_pagination_16_div_5_tr_16_td_12_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "span")(1, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](4, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const eventElement_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](3, 2, "quality-assurance.event.table.funder"));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](eventElement_r3.event.message.funder);
  }
}
function QualityAssuranceEventsComponent_ds_pagination_16_div_5_tr_16_td_12_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "span")(1, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](4, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const eventElement_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](3, 2, "quality-assurance.event.table.fundingProgram"));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](eventElement_r3.event.message.fundingProgram);
  }
}
function QualityAssuranceEventsComponent_ds_pagination_16_div_5_tr_16_td_12_span_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "span")(1, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](4, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const eventElement_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](3, 2, "quality-assurance.event.table.jurisdiction"));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](eventElement_r3.event.message.jurisdiction);
  }
}
function QualityAssuranceEventsComponent_ds_pagination_16_div_5_tr_16_td_12_a_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "a", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const eventElement_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate"]("title", eventElement_r3.projectTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction1"](3, _c1, eventElement_r3.projectId));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"]("", eventElement_r3.handle, " ");
  }
}
function QualityAssuranceEventsComponent_ds_pagination_16_div_5_tr_16_td_12_button_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function QualityAssuranceEventsComponent_ds_pagination_16_div_5_tr_16_td_12_button_23_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r6);
      const eventElement_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      ctx_r0.openModalLookup(eventElement_r3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](2, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const eventElement_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("dsBtnDisabled", eventElement_r3.isRunning);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](1, 2, "quality-assurance.event.modal.project.select"));
  }
}
function QualityAssuranceEventsComponent_ds_pagination_16_div_5_tr_16_td_12_button_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function QualityAssuranceEventsComponent_ds_pagination_16_div_5_tr_16_td_12_button_24_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r7);
      const eventElement_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r0.removeProject(eventElement_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](2, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const eventElement_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("dsBtnDisabled", eventElement_r3.isRunning);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](1, 2, "quality-assurance.event.modal.project.remove"));
  }
}
function QualityAssuranceEventsComponent_ds_pagination_16_div_5_tr_16_td_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "td")(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "p")(5, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](9, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](12, QualityAssuranceEventsComponent_ds_pagination_16_div_5_tr_16_td_12_span_12_Template, 8, 4, "span", 26)(13, QualityAssuranceEventsComponent_ds_pagination_16_div_5_tr_16_td_12_span_13_Template, 8, 4, "span", 26)(14, QualityAssuranceEventsComponent_ds_pagination_16_div_5_tr_16_td_12_span_14_Template, 8, 4, "span", 26)(15, QualityAssuranceEventsComponent_ds_pagination_16_div_5_tr_16_td_12_span_15_Template, 8, 4, "span", 26)(16, QualityAssuranceEventsComponent_ds_pagination_16_div_5_tr_16_td_12_span_16_Template, 7, 4, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](17, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](18, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](21, QualityAssuranceEventsComponent_ds_pagination_16_div_5_tr_16_td_12_a_21_Template, 2, 5, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](22, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](23, QualityAssuranceEventsComponent_ds_pagination_16_div_5_tr_16_td_12_button_23_Template, 3, 4, "button", 53)(24, QualityAssuranceEventsComponent_ds_pagination_16_div_5_tr_16_td_12_button_24_Template, 3, 4, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const eventElement_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](3, 15, "quality-assurance.event.table.suggestedProject"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](7, 17, "quality-assurance.event.table.project"));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate2"]("href", "", ctx_r0.sourceUrlForProjectSearch, "", eventElement_r3.event.message.sourceId, "", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](eventElement_r3.event.message.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", eventElement_r3.event.message.acronym);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", eventElement_r3.event.message.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", eventElement_r3.event.message.funder);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", eventElement_r3.event.message.fundingProgram);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", eventElement_r3.event.message.jurisdiction);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](20, 19, eventElement_r3.hasProject ? "quality-assurance.event.project.found" : "quality-assurance.event.project.notFound"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", eventElement_r3.hasProject);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !eventElement_r3.hasProject);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", eventElement_r3.hasProject);
  }
}
function QualityAssuranceEventsComponent_ds_pagination_16_div_5_tr_16_div_14_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function QualityAssuranceEventsComponent_ds_pagination_16_div_5_tr_16_div_14_button_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r9);
      const eventElement_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      const acceptModal_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](19);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r0.modalChoice("ACCEPTED", eventElement_r3, acceptModal_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](3, "i", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const eventElement_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate"]("ngbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](1, 3, "quality-assurance.event.action.import"));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("dsBtnDisabled", eventElement_r3.isRunning);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](2, 5, "quality-assurance.event.action.import"));
  }
}
function QualityAssuranceEventsComponent_ds_pagination_16_div_5_tr_16_div_14_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function QualityAssuranceEventsComponent_ds_pagination_16_div_5_tr_16_div_14_button_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r11);
      const eventElement_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r0.executeAction("ACCEPTED", eventElement_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](3, "i", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const eventElement_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate"]("ngbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](1, 3, "quality-assurance.event.action.accept"));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("dsBtnDisabled", eventElement_r3.isRunning);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](2, 5, "quality-assurance.event.action.accept"));
  }
}
function QualityAssuranceEventsComponent_ds_pagination_16_div_5_tr_16_div_14_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function QualityAssuranceEventsComponent_ds_pagination_16_div_5_tr_16_div_14_button_7_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r13);
      const eventElement_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      const rejectModal_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](23);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r0.openModal("REJECTED", eventElement_r3, rejectModal_r14));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](3, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const eventElement_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate"]("ngbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](1, 3, "quality-assurance.event.action.reject"));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("dsBtnDisabled", eventElement_r3.isRunning);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](2, 5, "quality-assurance.event.action.reject"));
  }
}
function QualityAssuranceEventsComponent_ds_pagination_16_div_5_tr_16_div_14_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function QualityAssuranceEventsComponent_ds_pagination_16_div_5_tr_16_div_14_button_9_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r15);
      const eventElement_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      const undoModal_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](25);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r0.openModal("UNDO", eventElement_r3, undoModal_r16));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](3, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const eventElement_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate"]("ngbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](1, 3, "quality-assurance.event.action.undo"));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("dsBtnDisabled", eventElement_r3.isRunning);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](2, 5, "quality-assurance.event.action.undo"));
  }
}
function QualityAssuranceEventsComponent_ds_pagination_16_div_5_tr_16_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, QualityAssuranceEventsComponent_ds_pagination_16_div_5_tr_16_div_14_button_1_Template, 4, 7, "button", 61)(2, QualityAssuranceEventsComponent_ds_pagination_16_div_5_tr_16_div_14_button_2_Template, 4, 7, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function QualityAssuranceEventsComponent_ds_pagination_16_div_5_tr_16_div_14_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r8);
      const eventElement_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      const ignoreModal_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](21);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r0.openModal("DISCARDED", eventElement_r3, ignoreModal_r12));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](6, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](7, QualityAssuranceEventsComponent_ds_pagination_16_div_5_tr_16_div_14_button_7_Template, 4, 7, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](9, QualityAssuranceEventsComponent_ds_pagination_16_div_5_tr_16_div_14_button_9_Template, 4, 7, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](10, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const eventElement_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r0.showTopic.indexOf("/PROJECT") !== -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r0.showTopic.indexOf("/PROJECT") === -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate"]("ngbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](4, 7, "quality-assurance.event.action.ignore"));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("dsBtnDisabled", eventElement_r3.isRunning);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](5, 9, "quality-assurance.event.action.ignore"));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](8, 11, ctx_r0.isAdmin$));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](10, 13, ctx_r0.isAdmin$) === false);
  }
}
function QualityAssuranceEventsComponent_ds_pagination_16_div_5_tr_16_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 60)(1, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function QualityAssuranceEventsComponent_ds_pagination_16_div_5_tr_16_div_16_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r17);
      const eventElement_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      const undoModal_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](25);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r0.openModal("UNDO", eventElement_r3, undoModal_r16));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](4, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const eventElement_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate"]("ngbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](2, 3, "quality-assurance.event.action.undo"));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("dsBtnDisabled", eventElement_r3.isRunning);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](3, 5, "quality-assurance.event.action.undo"));
  }
}
function QualityAssuranceEventsComponent_ds_pagination_16_div_5_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](4, QualityAssuranceEventsComponent_ds_pagination_16_div_5_tr_16_a_4_Template, 2, 4, "a", 30)(5, QualityAssuranceEventsComponent_ds_pagination_16_div_5_tr_16_span_5_Template, 2, 1, "span", 26)(6, QualityAssuranceEventsComponent_ds_pagination_16_div_5_tr_16_div_6_Template, 7, 6, "div", 26)(7, QualityAssuranceEventsComponent_ds_pagination_16_div_5_tr_16_div_7_Template, 7, 6, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](8, QualityAssuranceEventsComponent_ds_pagination_16_div_5_tr_16_td_8_Template, 16, 9, "td", 26)(9, QualityAssuranceEventsComponent_ds_pagination_16_div_5_tr_16_td_9_Template, 8, 4, "td", 26)(10, QualityAssuranceEventsComponent_ds_pagination_16_div_5_tr_16_td_10_Template, 13, 11, "td", 26)(11, QualityAssuranceEventsComponent_ds_pagination_16_div_5_tr_16_ng_container_11_Template, 7, 2, "ng-container", 26)(12, QualityAssuranceEventsComponent_ds_pagination_16_div_5_tr_16_td_12_Template, 25, 21, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](14, QualityAssuranceEventsComponent_ds_pagination_16_div_5_tr_16_div_14_Template, 11, 15, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](15, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](16, QualityAssuranceEventsComponent_ds_pagination_16_div_5_tr_16_div_16_Template, 5, 7, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](17, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const eventElement_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"]("", eventElement_r3 == null ? null : eventElement_r3.event == null ? null : eventElement_r3.event.trust, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", eventElement_r3 == null ? null : eventElement_r3.target);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !(eventElement_r3 == null ? null : eventElement_r3.target));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", eventElement_r3 == null ? null : eventElement_r3.event == null ? null : eventElement_r3.event.message == null ? null : eventElement_r3.event.message.serviceId);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", eventElement_r3 == null ? null : eventElement_r3.event == null ? null : eventElement_r3.event.message == null ? null : eventElement_r3.event.message.href);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r0.showTopic.indexOf("/PID") !== -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r0.showTopic.indexOf("/SUBJECT") !== -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r0.showTopic.indexOf("/ABSTRACT") !== -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r0.showTopic.indexOf("/REINSTATE") !== -1 || ctx_r0.showTopic.indexOf("/WITHDRAWN") !== -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r0.showTopic.indexOf("/PROJECT") !== -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](15, 12, ctx_r0.isAdmin$) || !ctx_r0.isReinstateWithdrawnRequest);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](17, 14, ctx_r0.isAdmin$) !== true && ctx_r0.isReinstateWithdrawnRequest);
  }
}
function QualityAssuranceEventsComponent_ds_pagination_16_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 21)(1, "table", 22)(2, "thead")(3, "tr")(4, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](10, QualityAssuranceEventsComponent_ds_pagination_16_div_5_th_10_Template, 3, 3, "th", 25)(11, QualityAssuranceEventsComponent_ds_pagination_16_div_5_ng_container_11_Template, 7, 6, "ng-container", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](12, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](15, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](16, QualityAssuranceEventsComponent_ds_pagination_16_div_5_tr_16_Template, 18, 16, "tr", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](17, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](6, 6, "quality-assurance.event.table.trust"));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](9, 8, "quality-assurance.event.table.publication"));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r0.hasDetailColumn() && ctx_r0.showTopic.indexOf("/PROJECT") !== -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r0.hasDetailColumn() && (ctx_r0.showTopic.indexOf("/REINSTATE") !== -1 || ctx_r0.showTopic.indexOf("/WITHDRAWN") !== -1));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](14, 10, "quality-assurance.event.table.actions"));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](17, 12, ctx_r0.eventsUpdated$));
  }
}
function QualityAssuranceEventsComponent_ds_pagination_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ds-pagination", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("paginationChange", function QualityAssuranceEventsComponent_ds_pagination_16_Template_ds_pagination_paginationChange_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r0.getQualityAssuranceEvents());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](3, QualityAssuranceEventsComponent_ds_pagination_16_div_3_Template, 3, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](5, QualityAssuranceEventsComponent_ds_pagination_16_div_5_Template, 18, 14, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_8_0;
    let tmp_9_0;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("paginationOptions", ctx_r0.paginationConfig)("collectionSize", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](1, 5, ctx_r0.totalElements$))("sortOptions", ctx_r0.paginationSortConfig);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ((tmp_8_0 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](4, 7, ctx_r0.eventsUpdated$)) == null ? null : tmp_8_0.length) === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ((tmp_9_0 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](6, 9, ctx_r0.eventsUpdated$)) == null ? null : tmp_9_0.length) !== 0);
  }
}
function QualityAssuranceEventsComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 68)(1, "h4", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "div", 70)(5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](8, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function QualityAssuranceEventsComponent_ng_template_18_Template_button_click_8_listener() {
      const modal_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r18).$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](modal_r19.close("do"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](9, "i", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](10, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](13, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function QualityAssuranceEventsComponent_ng_template_18_Template_button_click_13_listener() {
      const modal_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r18).$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](modal_r19.close("cancel"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](14, "i", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](15, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](3, 4, "quality-assurance.event.sure"));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](7, 6, "quality-assurance.event.accept.description"));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](12, 8, "quality-assurance.event.action.import"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](17, 10, "quality-assurance.event.action.cancel"), "");
  }
}
function QualityAssuranceEventsComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 68)(1, "h1", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "div", 70)(5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](8, "button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function QualityAssuranceEventsComponent_ng_template_20_Template_button_click_8_listener() {
      const modal_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r20).$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](modal_r21.close("do"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](9, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](10, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](13, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function QualityAssuranceEventsComponent_ng_template_20_Template_button_click_13_listener() {
      const modal_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r20).$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](modal_r21.close("cancel"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](14, "i", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](15, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](3, 4, "quality-assurance.event.sure"));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](7, 6, "quality-assurance.event.ignore.description"));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](12, 8, "quality-assurance.event.action.ignore"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](17, 10, "quality-assurance.event.action.cancel"), "");
  }
}
function QualityAssuranceEventsComponent_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 68)(1, "h1", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "div", 70)(5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](8, "button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function QualityAssuranceEventsComponent_ng_template_22_Template_button_click_8_listener() {
      const modal_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r22).$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](modal_r23.close("do"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](9, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](10, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](13, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function QualityAssuranceEventsComponent_ng_template_22_Template_button_click_13_listener() {
      const modal_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r22).$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](modal_r23.close("cancel"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](14, "i", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](15, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](3, 4, "quality-assurance.event.sure"));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](7, 6, "quality-assurance.event.reject.description"));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](12, 8, "quality-assurance.event.action.reject"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](17, 10, "quality-assurance.event.action.cancel"), "");
  }
}
function QualityAssuranceEventsComponent_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 68)(1, "h1", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "div", 70)(5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](8, "button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function QualityAssuranceEventsComponent_ng_template_24_Template_button_click_8_listener() {
      const modal_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r24).$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](modal_r25.close("do"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](9, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](10, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](13, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function QualityAssuranceEventsComponent_ng_template_24_Template_button_click_13_listener() {
      const modal_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r24).$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](modal_r25.close("cancel"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](14, "i", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](15, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](3, 4, "quality-assurance.event.sure"));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](7, 6, "quality-assurance.event.undo.description"));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](12, 8, "quality-assurance.event.action.undo"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](17, 10, "quality-assurance.event.action.cancel"), "");
  }
}
/**
 * Component to display the Quality Assurance event list.
 */
class QualityAssuranceEventsComponent {
  /**
   * Initialize the component variables.
   * @param {ActivatedRoute} activatedRoute
   * @param {NgbModal} modalService
   * @param {NotificationsService} notificationsService
   * @param {QualityAssuranceEventDataService} qualityAssuranceEventRestService
   * @param {PaginationService} paginationService
   * @param {TranslateService} translateService
   * @param authorizationService
   * @param itemService
   */
  constructor(activatedRoute, modalService, notificationsService, qualityAssuranceEventRestService, paginationService, translateService, authorizationService, itemService) {
    this.activatedRoute = activatedRoute;
    this.modalService = modalService;
    this.notificationsService = notificationsService;
    this.qualityAssuranceEventRestService = qualityAssuranceEventRestService;
    this.paginationService = paginationService;
    this.translateService = translateService;
    this.authorizationService = authorizationService;
    this.itemService = itemService;
    /**
     * The pagination system configuration for HTML listing.
     * @type {PaginationComponentOptions}
     */
    this.paginationConfig = Object.assign(new _shared_pagination_pagination_component_options_model__WEBPACK_IMPORTED_MODULE_17__.PaginationComponentOptions(), {
      id: 'bep',
      currentPage: 1,
      pageSize: 10,
      pageSizeOptions: [5, 10, 20, 40, 60]
    });
    /**
     * The Quality Assurance event list sort options.
     * @type {SortOptions}
     */
    this.paginationSortConfig = new _core_cache_models_sort_options_model__WEBPACK_IMPORTED_MODULE_1__.SortOptions('trust', _core_cache_models_sort_options_model__WEBPACK_IMPORTED_MODULE_1__.SortDirection.DESC);
    /**
     * Array to save the presence of a project inside an Quality Assurance event.
     * @type {QualityAssuranceEventData[]>}
     */
    this.eventsUpdated$ = new rxjs__WEBPACK_IMPORTED_MODULE_22__.BehaviorSubject([]);
    /**
     * The total number of Quality Assurance events.
     * @type {Observable<number>}
     */
    this.totalElements$ = new rxjs__WEBPACK_IMPORTED_MODULE_22__.BehaviorSubject(null);
    /**
     * Contains the information about the loading status of the page.
     * @type {Observable<boolean>}
     */
    this.isEventPageLoading = new rxjs__WEBPACK_IMPORTED_MODULE_22__.BehaviorSubject(false);
    /**
     * Used to store the status of the 'Show more' button of the abstracts.
     * @type {boolean}
     */
    this.showMore = false;
    /**
     * The FindListOptions object
     */
    this.defaultConfig = Object.assign(new _core_data_find_list_options_model__WEBPACK_IMPORTED_MODULE_4__.FindListOptions(), {
      sort: this.paginationSortConfig
    });
    /**
     * Array to track all the component subscriptions. Useful to unsubscribe them with 'onDestroy'.
     * @type {Array}
     */
    this.subs = [];
  }
  /**
   * Component initialization.
   */
  ngOnInit() {
    this.isEventPageLoading.next(true);
    this.isAdmin$ = this.authorizationService.isAuthorized(_core_data_feature_authorization_feature_id__WEBPACK_IMPORTED_MODULE_3__.FeatureID.AdministratorOf);
    this.activatedRoute.paramMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.tap)(params => {
      this.sourceUrlForProjectSearch = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.qualityAssuranceConfig.sourceUrlMapForProjectSearch[params.get('sourceId')];
      this.sourceId = params.get('sourceId');
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_24__.map)(params => params.get('topicId')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_25__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_26__.switchMap)(id => {
      const regEx = /!/g;
      this.showTopic = id.replace(regEx, '/');
      this.topic = id;
      const splitList = this.showTopic?.split(':');
      this.targetId = splitList.length > 2 ? splitList.pop() : null;
      this.selectedTopicName = splitList[1];
      this.sourceId = splitList[0];
      return this.getQualityAssuranceEvents();
    })).subscribe({
      next: events => {
        this.eventsUpdated$.next(events);
        this.isEventPageLoading.next(false);
      },
      error: error => {
        this.isEventPageLoading.next(false);
      }
    });
  }
  /**
   * Check if table have a detail column
   */
  hasDetailColumn() {
    return this.showTopic.indexOf('/PROJECT') !== -1 || this.showTopic.indexOf('/PID') !== -1 || this.showTopic.indexOf('/SUBJECT') !== -1 || this.showTopic.indexOf('/WITHDRAWN') !== -1 || this.showTopic.indexOf('/REINSTATE') !== -1 || this.showTopic.indexOf('/ABSTRACT') !== -1;
  }
  /**
   * Checks if the current topic is related to a reinstate or withdrawn request.
   */
  get isReinstateWithdrawnRequest() {
    return this.showTopic.indexOf('/WITHDRAWN') !== -1 || this.showTopic.indexOf('/REINSTATE') !== -1;
  }
  /**
   * Open a modal or run the executeAction directly based on the presence of the project.
   *
   * @param {string} action
   *    the action (can be: ACCEPTED, REJECTED, DISCARDED, PENDING)
   * @param {QualityAssuranceEventData} eventData
   *    the Quality Assurance event data
   * @param {any} content
   *    Reference to the modal
   */
  modalChoice(action, eventData, content) {
    if (eventData.hasProject) {
      this.executeAction(action, eventData);
    } else {
      this.openModal(action, eventData, content);
    }
  }
  /**
   * Open the selected modal and performs the action if needed.
   *
   * @param {string} action
   *    the action (can be: ACCEPTED, REJECTED, DISCARDED, PENDING)
   * @param {QualityAssuranceEventData} eventData
   *    the Quality Assurance event data
   * @param {any} content
   *    Reference to the modal
   */
  openModal(action, eventData, content) {
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title'
    }).result.then(result => {
      if (result === 'do') {
        eventData.reason = this.selectedReason;
        this.executeAction(action, eventData);
      }
      this.selectedReason = null;
    }, _reason => {
      this.selectedReason = null;
    });
  }
  /**
   * Open a modal where the user can select the project.
   *
   * @param {QualityAssuranceEventData} eventData
   *    the Quality Assurance event item data
   */
  openModalLookup(eventData) {
    this.modalRef = this.modalService.open(_project_entry_import_modal_project_entry_import_modal_component__WEBPACK_IMPORTED_MODULE_19__.ProjectEntryImportModalComponent, {
      size: 'lg'
    });
    const modalComp = this.modalRef.componentInstance;
    modalComp.externalSourceEntry = eventData;
    modalComp.label = 'project';
    this.subs.push(modalComp.importedObject.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_25__.take)(1)).subscribe(object => {
      const projectTitle = _core_shared_metadata_utils__WEBPACK_IMPORTED_MODULE_8__.Metadata.first(object.indexableObject.metadata, 'dc.title');
      this.boundProject(eventData, object.indexableObject.id, projectTitle.value, object.indexableObject.handle);
    }));
  }
  /**
   * Performs the choosen action calling the REST service.
   *
   * @param {string} action
   *    the action (can be: ACCEPTED, REJECTED, DISCARDED, PENDING)
   * @param {QualityAssuranceEventData} eventData
   *    the Quality Assurance event data
   */
  executeAction(action, eventData) {
    eventData.isRunning = true;
    let operation;
    if (action === 'UNDO') {
      operation = this.delete(eventData);
    } else {
      operation = this.qualityAssuranceEventRestService.patchEvent(action, eventData.event, eventData.reason);
    }
    this.subs.push(operation.pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_9__.getFirstCompletedRemoteData)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_26__.switchMap)(rd => {
      if (rd.hasSucceeded) {
        this.notificationsService.success(this.translateService.instant('quality-assurance.event.action.saved'));
        return this.getQualityAssuranceEvents();
      } else {
        this.notificationsService.error(this.translateService.instant('quality-assurance.event.action.error'));
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_27__.of)(this.eventsUpdated$.value);
      }
    })).subscribe(events => {
      this.eventsUpdated$.next(events);
      eventData.isRunning = false;
    }));
  }
  /**
   * Bound a project to the publication described in the Quality Assurance event calling the REST service.
   *
   * @param {QualityAssuranceEventData} eventData
   *    the Quality Assurance event item data
   * @param {string} projectId
   *    the project Id to bound
   * @param {string} projectTitle
   *    the project title
   * @param {string} projectHandle
   *    the project handle
   */
  boundProject(eventData, projectId, projectTitle, projectHandle) {
    eventData.isRunning = true;
    this.subs.push(this.qualityAssuranceEventRestService.boundProject(eventData.id, projectId).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_9__.getFirstCompletedRemoteData)()).subscribe(rd => {
      if (rd.hasSucceeded) {
        this.notificationsService.success(this.translateService.instant('quality-assurance.event.project.bounded'));
        eventData.hasProject = true;
        eventData.projectTitle = projectTitle;
        eventData.handle = projectHandle;
        eventData.projectId = projectId;
      } else {
        this.notificationsService.error(this.translateService.instant('quality-assurance.event.project.error'));
      }
      eventData.isRunning = false;
    }));
  }
  /**
   * Remove the bounded project from the publication described in the Quality Assurance event calling the REST service.
   *
   * @param {QualityAssuranceEventData} eventData
   *    the Quality Assurance event data
   */
  removeProject(eventData) {
    eventData.isRunning = true;
    this.subs.push(this.qualityAssuranceEventRestService.removeProject(eventData.id).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_9__.getFirstCompletedRemoteData)()).subscribe(rd => {
      if (rd.hasSucceeded) {
        this.notificationsService.success(this.translateService.instant('quality-assurance.event.project.removed'));
        eventData.hasProject = false;
        eventData.projectTitle = null;
        eventData.handle = null;
        eventData.projectId = null;
      } else {
        this.notificationsService.error(this.translateService.instant('quality-assurance.event.project.error'));
      }
      eventData.isRunning = false;
    }));
  }
  /**
   * Check if the event has a valid href.
   * @param event
   */
  hasPIDHref(event) {
    return this.getPIDHref(event) !== null;
  }
  /**
   * Get the event pid href.
   * @param event
   */
  getPIDHref(event) {
    return event.pidHref;
  }
  /**
   * Dispatch the Quality Assurance events retrival.
   */
  getQualityAssuranceEvents() {
    return this.paginationService.getFindListOptions(this.paginationConfig.id, this.defaultConfig).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_28__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_26__.switchMap)(options => this.qualityAssuranceEventRestService.getEventsByTopic(this.topic, options, (0,_shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_18__.followLink)('target'), (0,_shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_18__.followLink)('related'))), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_9__.getFirstCompletedRemoteData)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_26__.switchMap)(rd => {
      if (rd.hasSucceeded) {
        this.totalElements$.next(rd.payload.totalElements);
        if (rd.payload?.page?.length > 0) {
          return this.fetchEvents(rd.payload.page);
        } else {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_27__.of)([]);
        }
      } else {
        throw new Error('Can\'t retrieve Quality Assurance events from the Broker events REST service');
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_25__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.tap)(() => {
      this.qualityAssuranceEventRestService.clearFindByTopicRequests();
    }));
  }
  /**
   * Unsubscribe from all subscriptions.
   */
  ngOnDestroy() {
    this.subs.filter(sub => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_13__.hasValue)(sub)).forEach(sub => sub.unsubscribe());
  }
  /**
   * Fetch Quality Assurance events in order to build proper QualityAssuranceEventData object.
   *
   * @param {QualityAssuranceEventObject[]} events
   *    the Quality Assurance event item
   * @return array of QualityAssuranceEventData
   */
  fetchEvents(events) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_29__.from)(events).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_30__.mergeMap)(event => {
      const related$ = event.related.pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_9__.getFirstCompletedRemoteData)());
      const target$ = event.target.pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_9__.getFirstCompletedRemoteData)());
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_31__.combineLatest)([related$, target$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_24__.map)(([relatedItemRD, targetItemRD]) => {
        const data = {
          event: event,
          id: event.id,
          title: event.title,
          hasProject: false,
          projectTitle: null,
          projectId: null,
          handle: null,
          reason: null,
          isRunning: false,
          target: targetItemRD?.hasSucceeded ? targetItemRD.payload : null
        };
        if (relatedItemRD?.hasSucceeded && relatedItemRD?.payload?.id) {
          data.hasProject = true;
          data.projectTitle = event.message.title;
          data.projectId = relatedItemRD?.payload?.id;
          data.handle = relatedItemRD?.payload?.handle;
        }
        return data;
      }));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_32__.scan)((acc, value) => [...acc, value], []), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_33__.last)());
  }
  /**
   * Deletes a quality assurance event.
   * @param qaEvent The quality assurance event to delete.
   * @returns An Observable of RemoteData containing NoContent.
   */
  delete(qaEvent) {
    return this.qualityAssuranceEventRestService.deleteQAEvent(qaEvent);
  }
  /**
   * Returns an Observable that emits the title of the target item.
   * The target item is retrieved by its ID using the itemService.
   * The title is extracted from the first metadata value of the item.
   * The item page URL is also set in the component.
   * @returns An Observable that emits the title of the target item.
   */
  getTargetItemTitle() {
    return this.itemService.findById(this.targetId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_25__.take)(1), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_9__.getFirstCompletedRemoteData)(), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_9__.getRemoteDataPayload)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.tap)(item => this.itemPageUrl = (0,_item_page_item_page_routing_paths__WEBPACK_IMPORTED_MODULE_10__.getItemPageRoute)(item)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_24__.map)(item => item.firstMetadataValue('dc.title')));
  }
  static {
    this.ɵfac = function QualityAssuranceEventsComponent_Factory(t) {
      return new (t || QualityAssuranceEventsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_34__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_35__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_15__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_core_notifications_qa_events_quality_assurance_event_data_service__WEBPACK_IMPORTED_MODULE_6__.QualityAssuranceEventDataService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_core_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_7__.PaginationService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_36__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_core_data_feature_authorization_authorization_data_service__WEBPACK_IMPORTED_MODULE_2__.AuthorizationDataService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_core_data_item_data_service__WEBPACK_IMPORTED_MODULE_5__.ItemDataService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineComponent"]({
      type: QualityAssuranceEventsComponent,
      selectors: [["ds-quality-assurance-events"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵStandaloneFeature"]],
      decls: 26,
      vars: 15,
      consts: [["acceptModal", ""], ["ignoreModal", ""], ["rejectModal", ""], ["undoModal", ""], ["noPID", ""], [1, "container"], [1, "row"], [1, "col-12"], [1, "border-bottom", "pb-2"], [1, "d-flex", "justify-content-between"], [3, "type", 4, "ngIf"], ["class", "container", 3, "message", 4, "ngIf"], [3, "paginationOptions", "collectionSize", "sortOptions", "paginationChange", 4, "ngIf"], [3, "type"], [3, "innerHTML"], ["target", "_blank", 3, "routerLink"], [1, "container", 3, "message"], [3, "paginationChange", "paginationOptions", "collectionSize", "sortOptions"], ["class", "alert alert-info w-100 mb-2 mt-2", "role", "alert", 4, "ngIf"], ["class", "table-responsive mt-2", 4, "ngIf"], ["role", "alert", 1, "alert", "alert-info", "w-100", "mb-2", "mt-2"], [1, "table-responsive", "mt-2"], ["id", "events", 1, "table", "table-striped", "table-hover", "table-bordered"], ["scope", "col", 1, "trust-col"], ["scope", "col", 1, "title-col"], ["scope", "col", "class", "content-col", 4, "ngIf"], [4, "ngIf"], ["scope", "col", 1, "button-col"], [4, "ngFor", "ngForOf"], ["scope", "col", 1, "content-col"], ["target", "_blank", "rel", "noopener noreferrer", 3, "routerLink", 4, "ngIf"], ["class", "d-flex align-items-center", 4, "ngIf"], ["class", "btn-group button-width", 4, "ngIf"], ["target", "_blank", "rel", "noopener noreferrer", 3, "routerLink"], [1, "small", "pr-1"], [3, "title"], ["target", "_blank", 3, "href"], [1, "d-flex", "align-items-center"], [1, "text-truncate", "d-inline-block", "w-75", 3, "title"], [1, "small"], [1, "badge", "badge-info"], ["rel", "noopener noreferrer", "target", "_blank", 3, "href", 4, "ngIf", "ngIfElse"], ["rel", "noopener noreferrer", "target", "_blank", 3, "href"], [1, "abstract-container"], [1, "text-ellipsis"], [1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], ["class", "fas fa-angle-down", 4, "ngIf"], ["class", "fas fa-angle-up", 4, "ngIf"], [1, "fas", "fa-angle-down"], [1, "fas", "fa-angle-up"], [3, "ePersonId", "properties"], ["target", "_blank", "rel", "noopener noreferrer", 3, "title", "routerLink", 4, "ngIf"], [1, "btn-group"], ["class", "btn btn-outline-primary btn-sm", 3, "dsBtnDisabled", "click", 4, "ngIf"], ["class", "btn btn-outline-danger btn-sm", 3, "dsBtnDisabled", "click", 4, "ngIf"], ["target", "_blank", "rel", "noopener noreferrer", 3, "title", "routerLink"], [1, "btn", "btn-outline-primary", "btn-sm", 3, "click", "dsBtnDisabled"], [1, "fas", "fa-search"], [1, "btn", "btn-outline-danger", "btn-sm", 3, "click", "dsBtnDisabled"], [1, "fas", "fa-trash-alt"], [1, "btn-group", "button-width"], ["class", "btn btn-outline-success btn-sm button-width", "container", "body", 3, "ngbTooltip", "dsBtnDisabled", "click", 4, "ngIf"], ["container", "body", 1, "btn", "btn-outline-dark", "btn-sm", "button-width", 3, "click", "ngbTooltip", "dsBtnDisabled"], [1, "fas", "fa-ban"], ["class", "btn btn-outline-danger btn-sm button-width", "container", "body", 3, "ngbTooltip", "dsBtnDisabled", "click", 4, "ngIf"], ["container", "body", 1, "btn", "btn-outline-success", "btn-sm", "button-width", 3, "click", "ngbTooltip", "dsBtnDisabled"], [1, "fas", "fa-check"], ["container", "body", 1, "btn", "btn-outline-danger", "btn-sm", "button-width", 3, "click", "ngbTooltip", "dsBtnDisabled"], [1, "modal-header"], ["id", "acceptModal", 1, "modal-title"], [1, "modal-body"], [1, "btn", "btn-outline-success", "float-right", 3, "click"], [1, "d-none", "d-sm-inline"], [1, "btn", "btn-outline-secondary", 3, "click"], [1, "fas", "fa-close"], ["id", "ignoreModal", 1, "modal-title", "h4"], [1, "btn", "btn-outline-danger", "float-right", 3, "click"], ["id", "rejectModal", 1, "modal-title", "h4"], ["id", "undoModal", 1, "modal-title", "h4"]],
      template: function QualityAssuranceEventsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 5)(1, "div", 6)(2, "div", 7)(3, "h1", 8)(4, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](6, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](7, QualityAssuranceEventsComponent_ds_alert_7_Template, 3, 8, "ds-alert", 10)(8, QualityAssuranceEventsComponent_ds_alert_8_Template, 6, 12, "ds-alert", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](9, "div", 6)(10, "div", 7)(11, "h2", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](13, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](14, QualityAssuranceEventsComponent_ds_loading_14_Template, 2, 3, "ds-loading", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](15, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](16, QualityAssuranceEventsComponent_ds_pagination_16_Template, 7, 11, "ds-pagination", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](17, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](18, QualityAssuranceEventsComponent_ng_template_18_Template, 18, 12, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplateRefExtractor"])(20, QualityAssuranceEventsComponent_ng_template_20_Template, 18, 12, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplateRefExtractor"])(22, QualityAssuranceEventsComponent_ng_template_22_Template, 18, 12, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplateRefExtractor"])(24, QualityAssuranceEventsComponent_ng_template_24_Template, 18, 12, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplateRefExtractor"]);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](6, 7, "notifications.events.title"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !ctx.targetId);
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx.targetId);
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](13, 9, "quality-assurance.events.topic"), " ", ctx.showTopic, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](15, 11, ctx.isEventPageLoading));
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](17, 13, ctx.isEventPageLoading) !== true);
        }
      },
      dependencies: [_shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_11__.AlertComponent, _angular_common__WEBPACK_IMPORTED_MODULE_37__.NgIf, _shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_14__.ThemedLoadingComponent, _shared_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_16__.PaginationComponent, _angular_common__WEBPACK_IMPORTED_MODULE_37__.NgFor, _angular_router__WEBPACK_IMPORTED_MODULE_34__.RouterLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_35__.NgbTooltipModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_35__.NgbTooltip, _angular_common__WEBPACK_IMPORTED_MODULE_37__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_36__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_36__.TranslatePipe, _ePerson_data_ePerson_data_component__WEBPACK_IMPORTED_MODULE_20__.EPersonDataComponent, _shared_btn_disabled_directive__WEBPACK_IMPORTED_MODULE_12__.BtnDisabledDirective],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n.button-col[_ngcontent-%COMP%], .trust-col[_ngcontent-%COMP%] {\n  width: 15%;\n}\n\n.title-col[_ngcontent-%COMP%] {\n  width: 30%;\n}\n\n.content-col[_ngcontent-%COMP%] {\n  width: 40%;\n}\n\n.button-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.abstract-container[_ngcontent-%COMP%] {\n  height: 76px;\n  overflow: hidden;\n}\n\n.text-ellipsis[_ngcontent-%COMP%] {\n  text-overflow: ellipsis;\n}\n\n.show[_ngcontent-%COMP%] {\n  overflow: visible;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1YWxpdHktYXNzdXJhbmNlLWV2ZW50cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBO0VBQ0UsVUFBQTtBQUNGOztBQUNBO0VBQ0UsVUFBQTtBQUVGOztBQUFBO0VBQ0UsVUFBQTtBQUdGOztBQURBO0VBQ0UsV0FBQTtBQUlGOztBQUZBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FBS0Y7O0FBSEE7RUFDRSx1QkFBQTtBQU1GOztBQUpBO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0FBT0YiLCJmaWxlIjoicXVhbGl0eS1hc3N1cmFuY2UtZXZlbnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi9cbi5idXR0b24tY29sLCAudHJ1c3QtY29sIHtcbiAgd2lkdGg6IDE1JTtcbn1cbi50aXRsZS1jb2wge1xuICB3aWR0aDogMzAlO1xufVxuLmNvbnRlbnQtY29sIHtcbiAgd2lkdGg6IDQwJTtcbn1cbi5idXR0b24td2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn1cbi5hYnN0cmFjdC1jb250YWluZXIge1xuICBoZWlnaHQ6IDc2cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4udGV4dC1lbGxpcHNpcyB7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuLnNob3cge1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgaGVpZ2h0OiBhdXRvO1xufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbm90aWZpY2F0aW9ucy9xYS9ldmVudHMvcXVhbGl0eS1hc3N1cmFuY2UtZXZlbnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBO0FBQ0E7RUFDRSxVQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxVQUFBO0FBRUY7O0FBQUE7RUFDRSxVQUFBO0FBR0Y7O0FBREE7RUFDRSxXQUFBO0FBSUY7O0FBRkE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUFLRjs7QUFIQTtFQUNFLHVCQUFBO0FBTUY7O0FBSkE7RUFDRSxpQkFBQTtFQUNBLFlBQUE7QUFPRjtBQUNBLGd1Q0FBZ3VDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi9cbi5idXR0b24tY29sLCAudHJ1c3QtY29sIHtcbiAgd2lkdGg6IDE1JTtcbn1cbi50aXRsZS1jb2wge1xuICB3aWR0aDogMzAlO1xufVxuLmNvbnRlbnQtY29sIHtcbiAgd2lkdGg6IDQwJTtcbn1cbi5idXR0b24td2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn1cbi5hYnN0cmFjdC1jb250YWluZXIge1xuICBoZWlnaHQ6IDc2cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4udGV4dC1lbGxpcHNpcyB7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuLnNob3cge1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgaGVpZ2h0OiBhdXRvO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 5464:
/*!*****************************************************************************************************!*\
  !*** ./src/app/notifications/qa/project-entry-import-modal/project-entry-import-modal.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImportType: () => (/* binding */ ImportType),
/* harmony export */   ProjectEntryImportModalComponent: () => (/* binding */ ProjectEntryImportModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 56106);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 17796);
/* harmony import */ var _core_shared_context_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/shared/context.model */ 26292);
/* harmony import */ var _core_shared_search_search_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/shared/search/search.service */ 55180);
/* harmony import */ var _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/alert/alert.component */ 16292);
/* harmony import */ var _shared_btn_disabled_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/btn-disabled.directive */ 60456);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/empty.util */ 82777);
/* harmony import */ var _shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/loading/themed-loading.component */ 82394);
/* harmony import */ var _shared_object_collection_collection_element_link_type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/object-collection/collection-element-link.type */ 7581);
/* harmony import */ var _shared_object_list_selectable_list_selectable_list_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/object-list/selectable-list/selectable-list.service */ 13329);
/* harmony import */ var _shared_pagination_pagination_component_options_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/pagination/pagination-component-options.model */ 23401);
/* harmony import */ var _shared_search_models_paginated_search_options_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/search/models/paginated-search-options.model */ 33550);
/* harmony import */ var _shared_search_search_results_themed_search_results_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/search/search-results/themed-search-results.component */ 14131);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 49966);
























const _c0 = a0 => ({
  repeatable: false,
  listId: a0
});
function ProjectEntryImportModalComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "div", 5)(5, "div", 6)(6, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 3, ctx_r0.labelPrefix + ctx_r0.label + ".bountToLocal"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("routerLink", "/items/{{externalSourceEntry.projectId}}");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r0.externalSourceEntry.projectTitle, " ");
  }
}
function ProjectEntryImportModalComponent_ds_loading_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "ds-loading", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("message", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](1, 1, "loading.search-results"));
  }
}
function ProjectEntryImportModalComponent_ds_search_results_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ds-search-results", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("deselectObject", function ProjectEntryImportModalComponent_ds_search_results_32_Template_ds_search_results_deselectObject_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r0.deselectEntity());
    })("selectObject", function ProjectEntryImportModalComponent_ds_search_results_32_Template_ds_search_results_selectObject_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r0.selectEntity($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("searchResults", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](1, 10, ctx_r0.localEntitiesRD$))("sortConfig", ctx_r0.searchOptions == null ? null : ctx_r0.searchOptions.sort)("searchConfig", ctx_r0.searchOptions)("selectable", true)("disableHeader", true)("hidePaginationDetail", false)("selectionConfig", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](12, _c0, ctx_r0.entityListId))("showCsvExport", false)("linkType", ctx_r0.linkTypes.ExternalLink)("context", ctx_r0.context);
  }
}
function ProjectEntryImportModalComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "ds-alert", 21)(2, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("type", "alert-info");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](4, 2, ctx_r0.labelPrefix + ctx_r0.label + ".notFound"));
  }
}
/**
 * The possible types of import for the external entry
 */
var ImportType;
(function (ImportType) {
  ImportType["None"] = "None";
  ImportType["LocalEntity"] = "LocalEntity";
  ImportType["LocalAuthority"] = "LocalAuthority";
  ImportType["NewEntity"] = "NewEntity";
  ImportType["NewAuthority"] = "NewAuthority";
})(ImportType || (ImportType = {}));
/**
 * Component to display a modal window for linking a project to an Quality Assurance event
 * Shows information about the selected project and a selectable list.
 */
class ProjectEntryImportModalComponent {
  /**
   * Initialize the component variables.
   * @param {NgbActiveModal} modal
   * @param {SearchService} searchService
   * @param {SelectableListService} selectService
   */
  constructor(modal, searchService, selectService) {
    this.modal = modal;
    this.searchService = searchService;
    this.selectService = selectService;
    /**
     * The number of results per page
     */
    this.pageSize = 3;
    /**
     * The prefix for every i18n key within this modal
     */
    this.labelPrefix = 'quality-assurance.event.modal.';
    /**
     * The search configuration to retrieve project
     */
    this.configuration = 'funding';
    /**
     * Information about the data loading status
     */
    this.isLoading$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.of)(true);
    /**
     * The context we're currently in (submission)
     */
    this.context = _core_shared_context_model__WEBPACK_IMPORTED_MODULE_0__.Context.EntitySearchModalWithNameVariants;
    /**
     * List ID for selecting local entities
     */
    this.entityListId = 'notifications-project-bound';
    /**
     * List ID for selecting local authorities
     */
    this.authorityListId = 'notifications-project-bound-authority';
    /**
     * ImportType enum
     */
    this.importType = ImportType;
    /**
     * The type of link to render in listable elements
     */
    this.linkTypes = _shared_object_collection_collection_element_link_type__WEBPACK_IMPORTED_MODULE_6__.CollectionElementLinkType;
    /**
     * The type of import the user currently has selected
     */
    this.selectedImportType = ImportType.None;
    /**
     * An project has been selected, send it to the parent component
     */
    this.importedObject = new _angular_core__WEBPACK_IMPORTED_MODULE_11__.EventEmitter();
    /**
     * Array to track all the component subscriptions. Useful to unsubscribe them with 'onDestroy'.
     * @type {Array}
     */
    this.subs = [];
  }
  /**
   * Component intitialization.
   */
  ngOnInit() {
    this.pagination = Object.assign(new _shared_pagination_pagination_component_options_model__WEBPACK_IMPORTED_MODULE_8__.PaginationComponentOptions(), {
      id: 'notifications-project-bound',
      pageSize: this.pageSize
    });
    this.projectTitle = this.externalSourceEntry.projectTitle !== null ? this.externalSourceEntry.projectTitle : this.externalSourceEntry.event.message.title;
    this.searchOptions = Object.assign(new _shared_search_models_paginated_search_options_model__WEBPACK_IMPORTED_MODULE_9__.PaginatedSearchOptions({
      configuration: this.configuration,
      query: this.projectTitle,
      pagination: this.pagination
    }));
    this.localEntitiesRD$ = this.searchService.search(this.searchOptions);
    this.subs.push(this.localEntitiesRD$.subscribe(() => this.isLoading$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.of)(false)));
  }
  /**
   * Close the modal.
   */
  close() {
    this.deselectAllLists();
    this.modal.close();
  }
  /**
   * Perform a project search by title.
   */
  search(searchTitle) {
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_4__.isNotEmpty)(searchTitle)) {
      const filterRegEx = /[:]/g;
      this.isLoading$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.of)(true);
      this.searchOptions = Object.assign(new _shared_search_models_paginated_search_options_model__WEBPACK_IMPORTED_MODULE_9__.PaginatedSearchOptions({
        configuration: this.configuration,
        query: searchTitle ? searchTitle.replace(filterRegEx, '') : searchTitle,
        pagination: this.pagination
      }));
      this.localEntitiesRD$ = this.searchService.search(this.searchOptions);
      this.subs.push(this.localEntitiesRD$.subscribe(() => this.isLoading$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.of)(false)));
    }
  }
  /**
   * Perform the bound of the project.
   */
  bound() {
    if (this.selectedEntity !== undefined) {
      this.importedObject.emit(this.selectedEntity);
    }
    this.selectedImportType = ImportType.None;
    this.deselectAllLists();
    this.close();
  }
  /**
   * Deselected a local entity
   */
  deselectEntity() {
    this.selectedEntity = undefined;
    if (this.selectedImportType === ImportType.LocalEntity) {
      this.selectedImportType = ImportType.None;
    }
  }
  /**
   * Selected a local entity
   * @param entity
   */
  selectEntity(entity) {
    this.selectedEntity = entity;
    this.selectedImportType = ImportType.LocalEntity;
  }
  /**
   * Deselect every element from both entity and authority lists
   */
  deselectAllLists() {
    this.selectService.deselectAll(this.entityListId);
    this.selectService.deselectAll(this.authorityListId);
  }
  /**
   * Unsubscribe from all subscriptions.
   */
  ngOnDestroy() {
    this.deselectAllLists();
    this.subs.filter(sub => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_4__.hasValue)(sub)).forEach(sub => sub.unsubscribe());
  }
  static {
    this.ɵfac = function ProjectEntryImportModalComponent_Factory(t) {
      return new (t || ProjectEntryImportModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_core_shared_search_search_service__WEBPACK_IMPORTED_MODULE_1__.SearchService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_shared_object_list_selectable_list_selectable_list_service__WEBPACK_IMPORTED_MODULE_7__.SelectableListService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
      type: ProjectEntryImportModalComponent,
      selectors: [["ds-project-entry-import-modal"]],
      inputs: {
        externalSourceEntry: "externalSourceEntry"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵStandaloneFeature"]],
      decls: 47,
      vars: 44,
      consts: [[1, "modal-header"], ["id", "modal-title", 1, "modal-title"], ["type", "button", "aria-label", "Close button", "aria-describedby", "modal-title", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "mb-3"], [1, "text-truncate"], ["target", "_blank", 3, "routerLink"], [4, "ngIf"], ["id", "project-entities", 1, "mb-3"], ["id", "project-search", 1, "input-group", "mb-3"], ["type", "text", "aria-label", "", "aria-describedby", "", 1, "form-control", 3, "keyup.enter", "ngModelChange", "ngModel", "placeholder"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click", "dsBtnDisabled"], ["type", "button", 1, "btn", "btn-primary", 3, "click", "dsBtnDisabled"], [3, "message", 4, "ngIf"], [3, "searchResults", "sortConfig", "searchConfig", "selectable", "disableHeader", "hidePaginationDetail", "selectionConfig", "showCsvExport", "linkType", "context", "deselectObject", "selectObject", 4, "ngIf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], [3, "message"], [3, "deselectObject", "selectObject", "searchResults", "sortConfig", "searchConfig", "selectable", "disableHeader", "hidePaginationDetail", "selectionConfig", "showCsvExport", "linkType", "context"], [3, "type"], [1, "lead", "mb-0"]],
      template: function ProjectEntryImportModalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 0)(1, "h4", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ProjectEntryImportModalComponent_Template_button_click_4_listener() {
            return ctx.close();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "div", 4)(8, "small");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](10, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "div", 5)(12, "div", 6)(13, "a", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](15, ProjectEntryImportModalComponent_div_15_Template, 8, 5, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](16, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](18, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](19, "div", 9)(20, "div", 10)(21, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](22, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("keyup.enter", function ProjectEntryImportModalComponent_Template_input_keyup_enter_21_listener() {
            return ctx.search(ctx.projectTitle);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayListener"]("ngModelChange", function ProjectEntryImportModalComponent_Template_input_ngModelChange_21_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayBindingSet"](ctx.projectTitle, $event) || (ctx.projectTitle = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](23, "div", 12)(24, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ProjectEntryImportModalComponent_Template_button_click_24_listener() {
            return ctx.projectTitle = "";
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](25);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](26, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](27, "button", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ProjectEntryImportModalComponent_Template_button_click_27_listener() {
            return ctx.search(ctx.projectTitle);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](28);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](29, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](30, ProjectEntryImportModalComponent_ds_loading_30_Template, 2, 3, "ds-loading", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](31, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](32, ProjectEntryImportModalComponent_ds_search_results_32_Template, 2, 14, "ds-search-results", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](33, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](34, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](35, ProjectEntryImportModalComponent_div_35_Template, 5, 4, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](36, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](37, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](38, "div", 17)(39, "div")(40, "button", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ProjectEntryImportModalComponent_Template_button_click_40_listener() {
            return ctx.close();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](41);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](42, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](43, "div")(44, "button", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ProjectEntryImportModalComponent_Template_button_click_44_listener() {
            return ctx.bound();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](45);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](46, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          let tmp_13_0;
          let tmp_14_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 18, ctx.labelPrefix + ctx.label + ".title"));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](10, 20, ctx.labelPrefix + ctx.label + ".publication"));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("routerLink", "/items/{{(externalSourceEntry.event.target|async)?.payload?.id}}");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx.externalSourceEntry.title, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.externalSourceEntry.projectTitle);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](18, 22, ctx.labelPrefix + ctx.label + ".select"));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](22, 24, ctx.labelPrefix + ctx.label + ".placeholder"));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayProperty"]("ngModel", ctx.projectTitle);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("dsBtnDisabled", ctx.projectTitle === "");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](26, 26, ctx.labelPrefix + ctx.label + ".clear"));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("dsBtnDisabled", ctx.projectTitle === "");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](29, 28, ctx.labelPrefix + ctx.label + ".search"));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](31, 30, ctx.isLoading$));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ((tmp_13_0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](33, 32, ctx.localEntitiesRD$)) == null ? null : tmp_13_0.payload == null ? null : tmp_13_0.payload.page == null ? null : tmp_13_0.payload.page.length) > 0 && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](34, 34, ctx.isLoading$) !== true);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ((tmp_14_0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](36, 36, ctx.localEntitiesRD$)) == null ? null : tmp_14_0.payload == null ? null : tmp_14_0.payload.page == null ? null : tmp_14_0.payload.page.length) < 1 && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](37, 38, ctx.isLoading$) !== true);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](42, 40, ctx.labelPrefix + ctx.label + ".cancel"));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("dsBtnDisabled", ctx.selectedImportType === ctx.importType.None);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](46, 42, ctx.labelPrefix + ctx.label + ".bound"));
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgModel, _shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_5__.ThemedLoadingComponent, _shared_search_search_results_themed_search_results_component__WEBPACK_IMPORTED_MODULE_10__.ThemedSearchResultsComponent, _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_2__.AlertComponent, _angular_common__WEBPACK_IMPORTED_MODULE_15__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslatePipe, _shared_btn_disabled_directive__WEBPACK_IMPORTED_MODULE_3__.BtnDisabledDirective],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n.modal-footer[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QtZW50cnktaW1wb3J0LW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBO0FBQ0E7RUFDRSw4QkFBQTtBQUNGIiwiZmlsZSI6InByb2plY3QtZW50cnktaW1wb3J0LW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi9cbi5tb2RhbC1mb290ZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbm90aWZpY2F0aW9ucy9xYS9wcm9qZWN0LWVudHJ5LWltcG9ydC1tb2RhbC9wcm9qZWN0LWVudHJ5LWltcG9ydC1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBO0VBQ0UsOEJBQUE7QUFDRjtBQUNBLHdzQkFBd3NCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi9cbi5tb2RhbC1mb290ZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 91706:
/*!*******************************************************************************!*\
  !*** ./src/app/notifications/qa/source/quality-assurance-source.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QualityAssuranceSourceComponent: () => (/* binding */ QualityAssuranceSourceComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 78374);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 64785);
/* harmony import */ var _core_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/pagination/pagination.service */ 76896);
/* harmony import */ var _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/alert/alert.component */ 16292);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/empty.util */ 82777);
/* harmony import */ var _shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/loading/themed-loading.component */ 82394);
/* harmony import */ var _shared_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/pagination/pagination.component */ 40590);
/* harmony import */ var _shared_pagination_pagination_component_options_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/pagination/pagination-component-options.model */ 23401);
/* harmony import */ var _notifications_state_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../notifications-state.service */ 52828);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 90310);















const _c0 = a0 => ({
  param: a0
});
const _c1 = a0 => [a0];
function QualityAssuranceSourceComponent_ds_loading_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "ds-loading", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("message", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 1, "quality-assurance.loading"));
  }
}
function QualityAssuranceSourceComponent_ds_pagination_14_ds_loading_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "ds-loading", 12);
  }
}
function QualityAssuranceSourceComponent_ds_pagination_14_ng_container_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "quality-assurance.noSource"), " ");
  }
}
function QualityAssuranceSourceComponent_ds_pagination_14_ng_container_4_div_3_tr_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "td")(7, "div", 20)(8, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](12, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const sourceElement_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](sourceElement_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](5, 5, sourceElement_r3.lastEvent, "dd/MM/yyyy hh:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](9, 8, "quality-assurance.source-list.button.detail", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](11, _c0, sourceElement_r3.id)));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](13, _c1, sourceElement_r3.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](sourceElement_r3.totalEvents);
  }
}
function QualityAssuranceSourceComponent_ds_pagination_14_ng_container_4_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 16)(1, "table", 17)(2, "thead")(3, "tr")(4, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, QualityAssuranceSourceComponent_ds_pagination_14_ng_container_4_div_3_tr_14_Template, 13, 15, "tr", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](15, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](6, 4, "quality-assurance.table.source"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](9, 6, "quality-assurance.table.last-event"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](12, 8, "quality-assurance.table.actions"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](15, 10, ctx_r1.sources$));
  }
}
function QualityAssuranceSourceComponent_ds_pagination_14_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, QualityAssuranceSourceComponent_ds_pagination_14_ng_container_4_div_1_Template, 3, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, QualityAssuranceSourceComponent_ds_pagination_14_ng_container_4_div_3_Template, 16, 12, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ((tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 2, ctx_r1.sources$)) == null ? null : tmp_2_0.length) === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ((tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](4, 4, ctx_r1.sources$)) == null ? null : tmp_3_0.length) !== 0);
  }
}
function QualityAssuranceSourceComponent_ds_pagination_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ds-pagination", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("paginationChange", function QualityAssuranceSourceComponent_ds_pagination_14_Template_ds_pagination_paginationChange_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.getQualityAssuranceSource());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, QualityAssuranceSourceComponent_ds_pagination_14_ds_loading_2_Template, 1, 0, "ds-loading", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, QualityAssuranceSourceComponent_ds_pagination_14_ng_container_4_Template, 5, 6, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("paginationOptions", ctx_r1.paginationConfig)("collectionSize", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 6, ctx_r1.totalElements$))("hideGear", false)("hideSortOptions", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 8, ctx_r1.isSourceProcessing()));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](5, 10, ctx_r1.isSourceProcessing()) !== true);
  }
}
/**
 * Component to display the Quality Assurance source list.
 */
class QualityAssuranceSourceComponent {
  /**
   * Initialize the component variables.
   * @param {PaginationService} paginationService
   * @param {NotificationsStateService} notificationsStateService
   */
  constructor(paginationService, notificationsStateService) {
    this.paginationService = paginationService;
    this.notificationsStateService = notificationsStateService;
    /**
     * The pagination system configuration for HTML listing.
     * @type {PaginationComponentOptions}
     */
    this.paginationConfig = Object.assign(new _shared_pagination_pagination_component_options_model__WEBPACK_IMPORTED_MODULE_5__.PaginationComponentOptions(), {
      id: 'btp',
      pageSize: 10,
      pageSizeOptions: [5, 10, 20, 40, 60]
    });
    /**
     * Array to track all the component subscriptions. Useful to unsubscribe them with 'onDestroy'.
     * @type {Array}
     */
    this.subs = [];
  }
  /**
   * Component initialization.
   */
  ngOnInit() {
    this.sources$ = this.notificationsStateService.getQualityAssuranceSource();
    this.totalElements$ = this.notificationsStateService.getQualityAssuranceSourceTotals();
  }
  /**
   * First Quality Assurance source loading after view initialization.
   */
  ngAfterViewInit() {
    this.subs.push(this.notificationsStateService.isQualityAssuranceSourceLoaded().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.take)(1)).subscribe(() => {
      this.getQualityAssuranceSource();
    }));
  }
  /**
   * Returns the information about the loading status of the Quality Assurance source (if it's running or not).
   *
   * @return Observable<boolean>
   *    'true' if the source are loading, 'false' otherwise.
   */
  isSourceLoading() {
    return this.notificationsStateService.isQualityAssuranceSourceLoading();
  }
  /**
   * Returns the information about the processing status of the Quality Assurance source (if it's running or not).
   *
   * @return Observable<boolean>
   *    'true' if there are operations running on the source (ex.: a REST call), 'false' otherwise.
   */
  isSourceProcessing() {
    return this.notificationsStateService.isQualityAssuranceSourceProcessing();
  }
  /**
   * Dispatch the Quality Assurance source retrival.
   */
  getQualityAssuranceSource() {
    this.paginationService.getCurrentPagination(this.paginationConfig.id, this.paginationConfig).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.distinctUntilChanged)()).subscribe(options => {
      this.notificationsStateService.dispatchRetrieveQualityAssuranceSource(options.pageSize, options.currentPage);
    });
  }
  /**
   * Update pagination Config from route params
   *
   * @param eventsRouteParams
   */
  updatePaginationFromRouteParams(eventsRouteParams) {
    if (eventsRouteParams.currentPage) {
      this.paginationConfig.currentPage = eventsRouteParams.currentPage;
    }
    if (eventsRouteParams.pageSize) {
      if (this.paginationConfig.pageSizeOptions.includes(eventsRouteParams.pageSize)) {
        this.paginationConfig.pageSize = eventsRouteParams.pageSize;
      } else {
        this.paginationConfig.pageSize = this.paginationConfig.pageSizeOptions[0];
      }
    }
  }
  /**
   * Unsubscribe from all subscriptions.
   */
  ngOnDestroy() {
    this.subs.filter(sub => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_2__.hasValue)(sub)).forEach(sub => sub.unsubscribe());
  }
  static {
    this.ɵfac = function QualityAssuranceSourceComponent_Factory(t) {
      return new (t || QualityAssuranceSourceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_0__.PaginationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_notifications_state_service__WEBPACK_IMPORTED_MODULE_6__.NotificationsStateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: QualityAssuranceSourceComponent,
      selectors: [["ds-quality-assurance-source"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵStandaloneFeature"]],
      decls: 16,
      vars: 14,
      consts: [[1, "container"], [1, "row"], [1, "col-12"], [1, "border-bottom", "pb-2"], [3, "type", "content"], [1, "h4", "border-bottom", "pb-2"], ["class", "container", 3, "message", 4, "ngIf"], [3, "paginationOptions", "collectionSize", "hideGear", "hideSortOptions", "paginationChange", 4, "ngIf"], [1, "container", 3, "message"], [3, "paginationChange", "paginationOptions", "collectionSize", "hideGear", "hideSortOptions"], ["class", "container", "message", "'quality-assurance.loading' | translate", 4, "ngIf"], [4, "ngIf"], ["message", "'quality-assurance.loading' | translate", 1, "container"], ["class", "alert alert-info w-100 mb-2 mt-2", "role", "alert", 4, "ngIf"], ["class", "table-responsive mt-2", 4, "ngIf"], ["role", "alert", 1, "alert", "alert-info", "w-100", "mb-2", "mt-2"], [1, "table-responsive", "mt-2"], ["id", "epeople", 1, "table", "table-striped", "table-hover", "table-bordered"], ["scope", "col"], [4, "ngFor", "ngForOf"], [1, "btn-group", "edit-field"], [1, "btn", "btn-outline-primary", "btn-sm", 3, "title", "routerLink"], [1, "badge", "badge-info"], [1, "fas", "fa-info", "fa-fw"]],
      template: function QualityAssuranceSourceComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "ds-alert", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 1)(8, "div", 2)(9, "h2", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](11, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, QualityAssuranceSourceComponent_ds_loading_12_Template, 2, 3, "ds-loading", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](13, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, QualityAssuranceSourceComponent_ds_pagination_14_Template, 6, 12, "ds-pagination", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](15, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](5, 6, "quality-assurance.title"));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("type", "alert-info")("content", "quality-assurance.source.description");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](11, 8, "quality-assurance.source"));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](13, 10, ctx.isSourceLoading()));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](15, 12, ctx.isSourceLoading()) !== true);
        }
      },
      dependencies: [_shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_1__.AlertComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_3__.ThemedLoadingComponent, _shared_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_4__.PaginationComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgFor, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1YWxpdHktYXNzdXJhbmNlLXNvdXJjZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQSIsImZpbGUiOiJxdWFsaXR5LWFzc3VyYW5jZS1zb3VyY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqLyJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbm90aWZpY2F0aW9ucy9xYS9zb3VyY2UvcXVhbGl0eS1hc3N1cmFuY2Utc291cmNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBO0FBQ0EsZ21CQUFnbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqLyJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 88008:
/*!*******************************************************************************!*\
  !*** ./src/app/notifications/qa/topics/quality-assurance-topics.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QualityAssuranceTopicsComponent: () => (/* binding */ QualityAssuranceTopicsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 21252);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 78374);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 64785);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var _admin_admin_routing_paths__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../admin/admin-routing-paths */ 47483);
/* harmony import */ var _core_data_item_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/data/item-data.service */ 29326);
/* harmony import */ var _core_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/pagination/pagination.service */ 76896);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/shared/operators */ 55757);
/* harmony import */ var _item_page_item_page_routing_paths__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../item-page/item-page-routing-paths */ 90887);
/* harmony import */ var _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/alert/alert.component */ 16292);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/empty.util */ 82777);
/* harmony import */ var _shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/loading/themed-loading.component */ 82394);
/* harmony import */ var _shared_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/pagination/pagination.component */ 40590);
/* harmony import */ var _shared_pagination_pagination_component_options_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/pagination/pagination-component-options.model */ 23401);
/* harmony import */ var _notifications_state_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../notifications-state.service */ 52828);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 90310);





















const _c0 = a0 => ({
  source: a0
});
const _c1 = a0 => ({
  param: a0
});
const _c2 = (a0, a1, a2) => [a0, a1, a2];
function QualityAssuranceTopicsComponent_ds_alert_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ds-alert", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("type", "alert-info");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](2, 2, "quality-assurance.topics.description", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](5, _c0, ctx_r0.sourceId)));
  }
}
function QualityAssuranceTopicsComponent_ds_alert_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ds-alert", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("type", "alert-info");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](2, 4, "quality-assurance.topics.description-with-target", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](9, _c0, ctx_r0.sourceId)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("routerLink", ctx_r0.itemPageUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](5, 7, ctx_r0.getTargetItemTitle()));
  }
}
function QualityAssuranceTopicsComponent_ds_loading_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "ds-loading", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("message", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](1, 1, "quality-assurance.loading"));
  }
}
function QualityAssuranceTopicsComponent_ds_pagination_15_ds_loading_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "ds-loading", 13);
  }
}
function QualityAssuranceTopicsComponent_ds_pagination_15_ng_container_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 1, "quality-assurance.noTopics"), " ");
  }
}
function QualityAssuranceTopicsComponent_ds_pagination_15_ng_container_4_div_3_tr_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "td")(7, "div", 21)(8, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](12, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const topicElement_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](topicElement_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](5, 5, topicElement_r3.lastEvent, "dd/MM/yyyy hh:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](9, 8, "quality-assurance.topics-list.button.detail", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](11, _c1, topicElement_r3.name)));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction3"](13, _c2, ctx_r0.getQualityAssuranceRoute(), ctx_r0.sourceId, topicElement_r3.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](topicElement_r3.totalEvents);
  }
}
function QualityAssuranceTopicsComponent_ds_pagination_15_ng_container_4_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 17)(1, "table", 18)(2, "thead")(3, "tr")(4, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](14, QualityAssuranceTopicsComponent_ds_pagination_15_ng_container_4_div_3_tr_14_Template, 13, 17, "tr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](15, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](6, 4, "quality-assurance.table.topic"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](9, 6, "quality-assurance.table.last-event"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](12, 8, "quality-assurance.table.actions"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](15, 10, ctx_r0.topics$));
  }
}
function QualityAssuranceTopicsComponent_ds_pagination_15_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, QualityAssuranceTopicsComponent_ds_pagination_15_ng_container_4_div_1_Template, 3, 3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](3, QualityAssuranceTopicsComponent_ds_pagination_15_ng_container_4_div_3_Template, 16, 12, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ((tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 2, ctx_r0.topics$)) == null ? null : tmp_2_0.length) === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ((tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](4, 4, ctx_r0.topics$)) == null ? null : tmp_3_0.length) !== 0);
  }
}
function QualityAssuranceTopicsComponent_ds_pagination_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ds-pagination", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("paginationChange", function QualityAssuranceTopicsComponent_ds_pagination_15_Template_ds_pagination_paginationChange_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r0.getQualityAssuranceTopics(ctx_r0.sourceId, ctx_r0.targetId));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, QualityAssuranceTopicsComponent_ds_pagination_15_ds_loading_2_Template, 1, 0, "ds-loading", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](4, QualityAssuranceTopicsComponent_ds_pagination_15_ng_container_4_Template, 5, 6, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("paginationOptions", ctx_r0.paginationConfig)("collectionSize", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](1, 6, ctx_r0.totalElements$))("hideGear", false)("hideSortOptions", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 8, ctx_r0.isTopicsProcessing()));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](5, 10, ctx_r0.isTopicsProcessing()) !== true);
  }
}
/**
 * Component to display the Quality Assurance topic list.
 */
class QualityAssuranceTopicsComponent {
  /**
   * Initialize the component variables.
   * @param {PaginationService} paginationService
   * @param {ActivatedRoute} activatedRoute
   * @param itemService
   * @param {NotificationsStateService} notificationsStateService
   * @param router
   */
  constructor(paginationService, activatedRoute, itemService, notificationsStateService, router) {
    this.paginationService = paginationService;
    this.activatedRoute = activatedRoute;
    this.itemService = itemService;
    this.notificationsStateService = notificationsStateService;
    this.router = router;
    /**
     * The pagination system configuration for HTML listing.
     * @type {PaginationComponentOptions}
     */
    this.paginationConfig = Object.assign(new _shared_pagination_pagination_component_options_model__WEBPACK_IMPORTED_MODULE_9__.PaginationComponentOptions(), {
      id: 'btp',
      pageSize: 10,
      pageSizeOptions: [5, 10, 20, 40, 60]
    });
    /**
     * Array to track all the component subscriptions. Useful to unsubscribe them with 'onDestroy'.
     * @type {Array}
     */
    this.subs = [];
    this.sourceId = this.activatedRoute.snapshot.params.sourceId;
    this.targetId = this.activatedRoute.snapshot.params.targetId;
  }
  /**
   * Component initialization.
   */
  ngOnInit() {
    this.topics$ = this.notificationsStateService.getQualityAssuranceTopics().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.tap)(topics => {
      const forward = this.activatedRoute.snapshot.queryParams?.forward === 'true';
      if (topics.length === 1 && forward) {
        // If there is only one topic, navigate to the first topic automatically
        this.router.navigate([this.getQualityAssuranceRoute(), this.sourceId, topics[0].id]);
      }
    }));
    this.totalElements$ = this.notificationsStateService.getQualityAssuranceTopicsTotals();
  }
  /**
   * First Quality Assurance topics loading after view initialization.
   */
  ngAfterViewInit() {
    this.subs.push(this.notificationsStateService.isQualityAssuranceTopicsLoaded().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.take)(1)).subscribe(() => {
      this.getQualityAssuranceTopics(this.sourceId, this.targetId);
    }));
  }
  /**
   * Returns the information about the loading status of the Quality Assurance topics (if it's running or not).
   *
   * @return Observable<boolean>
   *    'true' if the topics are loading, 'false' otherwise.
   */
  isTopicsLoading() {
    return this.notificationsStateService.isQualityAssuranceTopicsLoading();
  }
  /**
   * Returns the information about the processing status of the Quality Assurance topics (if it's running or not).
   *
   * @return Observable<boolean>
   *    'true' if there are operations running on the topics (ex.: a REST call), 'false' otherwise.
   */
  isTopicsProcessing() {
    return this.notificationsStateService.isQualityAssuranceTopicsProcessing();
  }
  /**
   * Dispatch the Quality Assurance topics retrival.
   */
  getQualityAssuranceTopics(source, target) {
    this.subs.push(this.paginationService.getCurrentPagination(this.paginationConfig.id, this.paginationConfig).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.distinctUntilChanged)()).subscribe(options => {
      this.notificationsStateService.dispatchRetrieveQualityAssuranceTopics(options.pageSize, options.currentPage, source, target);
    }));
  }
  /**
   * Update pagination Config from route params
   *
   * @param eventsRouteParams
   */
  updatePaginationFromRouteParams(eventsRouteParams) {
    if (eventsRouteParams.currentPage) {
      this.paginationConfig.currentPage = eventsRouteParams.currentPage;
    }
    if (eventsRouteParams.pageSize) {
      if (this.paginationConfig.pageSizeOptions.includes(eventsRouteParams.pageSize)) {
        this.paginationConfig.pageSize = eventsRouteParams.pageSize;
      } else {
        this.paginationConfig.pageSize = this.paginationConfig.pageSizeOptions[0];
      }
    }
  }
  /**
   * Returns an Observable that emits the title of the target item.
   * The target item is retrieved by its ID using the itemService.
   * The title is extracted from the first metadata value of the item.
   * The item page URL is also set in the component.
   * @returns An Observable that emits the title of the target item.
   */
  getTargetItemTitle() {
    return this.itemService.findById(this.targetId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.take)(1), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_3__.getFirstCompletedRemoteData)(), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_3__.getRemoteDataPayload)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.tap)(item => this.itemPageUrl = (0,_item_page_item_page_routing_paths__WEBPACK_IMPORTED_MODULE_4__.getItemPageRoute)(item)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(item => item.firstMetadataValue('dc.title')));
  }
  /**
   * Returns the page route for the given item.
   * @param item The item to get the page route for.
   * @returns The page route for the given item.
   */
  getItemPageRoute(item) {
    return (0,_item_page_item_page_routing_paths__WEBPACK_IMPORTED_MODULE_4__.getItemPageRoute)(item);
  }
  /**
   * Returns the quality assurance route.
   * @returns The quality assurance route.
   */
  getQualityAssuranceRoute() {
    return (0,_admin_admin_routing_paths__WEBPACK_IMPORTED_MODULE_0__.getNotificatioQualityAssuranceRoute)();
  }
  /**
   * Unsubscribe from all subscriptions.
   */
  ngOnDestroy() {
    this.subs.filter(sub => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_6__.hasValue)(sub)).forEach(sub => sub.unsubscribe());
  }
  static {
    this.ɵfac = function QualityAssuranceTopicsComponent_Factory(t) {
      return new (t || QualityAssuranceTopicsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_core_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_2__.PaginationService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_core_data_item_data_service__WEBPACK_IMPORTED_MODULE_1__.ItemDataService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_notifications_state_service__WEBPACK_IMPORTED_MODULE_10__.NotificationsStateService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
      type: QualityAssuranceTopicsComponent,
      selectors: [["ds-quality-assurance-topic"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵStandaloneFeature"]],
      decls: 17,
      vars: 14,
      consts: [[1, "container"], [1, "row"], [1, "col-12"], [1, "border-bottom", "pb-2"], [3, "type", 4, "ngIf"], ["class", "container", 3, "message", 4, "ngIf"], [3, "paginationOptions", "collectionSize", "hideGear", "hideSortOptions", "paginationChange", 4, "ngIf"], [3, "type"], [3, "routerLink"], [1, "container", 3, "message"], [3, "paginationChange", "paginationOptions", "collectionSize", "hideGear", "hideSortOptions"], ["class", "container", "message", "'quality-assurance.loading' | translate", 4, "ngIf"], [4, "ngIf"], ["message", "'quality-assurance.loading' | translate", 1, "container"], ["class", "alert alert-info w-100 mb-2 mt-2", "role", "alert", 4, "ngIf"], ["class", "table-responsive mt-2", 4, "ngIf"], ["role", "alert", 1, "alert", "alert-info", "w-100", "mb-2", "mt-2"], [1, "table-responsive", "mt-2"], ["id", "epeople", 1, "table", "table-striped", "table-hover", "table-bordered"], ["scope", "col"], [4, "ngFor", "ngForOf"], [1, "btn-group", "edit-field"], [1, "btn", "btn-outline-primary", "btn-sm", 3, "title", "routerLink"], [1, "badge", "badge-info"], [1, "fas", "fa-info", "fa-fw"]],
      template: function QualityAssuranceTopicsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](5, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](6, QualityAssuranceTopicsComponent_ds_alert_6_Template, 3, 7, "ds-alert", 4)(7, QualityAssuranceTopicsComponent_ds_alert_7_Template, 6, 11, "ds-alert", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "div", 1)(9, "div", 2)(10, "h2", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](12, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](13, QualityAssuranceTopicsComponent_ds_loading_13_Template, 2, 3, "ds-loading", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](14, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](15, QualityAssuranceTopicsComponent_ds_pagination_15_Template, 6, 12, "ds-pagination", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](16, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](5, 6, "quality-assurance.title"));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx.targetId);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.targetId);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](12, 8, "quality-assurance.topics"));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](14, 10, ctx.isTopicsLoading()));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](16, 12, ctx.isTopicsLoading()) !== true);
        }
      },
      dependencies: [_shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_5__.AlertComponent, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_7__.ThemedLoadingComponent, _shared_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_8__.PaginationComponent, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgFor, _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_17__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_17__.DatePipe],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1YWxpdHktYXNzdXJhbmNlLXRvcGljcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQSIsImZpbGUiOiJxdWFsaXR5LWFzc3VyYW5jZS10b3BpY3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqLyJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbm90aWZpY2F0aW9ucy9xYS90b3BpY3MvcXVhbGl0eS1hc3N1cmFuY2UtdG9waWNzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBO0FBQ0EsZ21CQUFnbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqLyJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 10131:
/*!********************************************!*\
  !*** ./src/app/notifications/selectors.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getQualityAssuranceSourceCurrentPageSelector: () => (/* binding */ getQualityAssuranceSourceCurrentPageSelector),
/* harmony export */   getQualityAssuranceSourceTotalPagesSelector: () => (/* binding */ getQualityAssuranceSourceTotalPagesSelector),
/* harmony export */   getQualityAssuranceSourceTotalsSelector: () => (/* binding */ getQualityAssuranceSourceTotalsSelector),
/* harmony export */   getQualityAssuranceTopicsCurrentPageSelector: () => (/* binding */ getQualityAssuranceTopicsCurrentPageSelector),
/* harmony export */   getQualityAssuranceTopicsTotalPagesSelector: () => (/* binding */ getQualityAssuranceTopicsTotalPagesSelector),
/* harmony export */   getQualityAssuranceTopicsTotalsSelector: () => (/* binding */ getQualityAssuranceTopicsTotalsSelector),
/* harmony export */   isQualityAssuranceSourceLoadedSelector: () => (/* binding */ isQualityAssuranceSourceLoadedSelector),
/* harmony export */   isQualityAssuranceSourceProcessingSelector: () => (/* binding */ isQualityAssuranceSourceProcessingSelector),
/* harmony export */   isQualityAssuranceTopicsLoadedSelector: () => (/* binding */ isQualityAssuranceTopicsLoadedSelector),
/* harmony export */   isQualityAssuranceTopicsProcessingSelector: () => (/* binding */ isQualityAssuranceTopicsProcessingSelector),
/* harmony export */   qualityAssuranceSourceObjectSelector: () => (/* binding */ qualityAssuranceSourceObjectSelector),
/* harmony export */   qualityAssuranceSourceStateSelector: () => (/* binding */ qualityAssuranceSourceStateSelector),
/* harmony export */   qualityAssuranceTopicsObjectSelector: () => (/* binding */ qualityAssuranceTopicsObjectSelector),
/* harmony export */   qualityAssuranceTopicsStateSelector: () => (/* binding */ qualityAssuranceTopicsStateSelector)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 99797);
/* harmony import */ var _shared_selector_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/selector.util */ 96127);
/* harmony import */ var _notifications_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notifications.reducer */ 54995);



/**
 * Returns the Notifications state.
 * @function _getNotificationsState
 * @param {AppState} state Top level state.
 * @return {SuggestionNotificationsState}
 */
const _getNotificationsState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createFeatureSelector)('suggestionNotifications');
// Quality Assurance topics
// ----------------------------------------------------------------------------
/**
 * Returns the Quality Assurance topics State.
 * @function qualityAssuranceTopicsStateSelector
 * @return {QualityAssuranceTopicState}
 */
function qualityAssuranceTopicsStateSelector() {
  return (0,_shared_selector_util__WEBPACK_IMPORTED_MODULE_0__.subStateSelector)(_notifications_reducer__WEBPACK_IMPORTED_MODULE_1__.suggestionNotificationsSelector, 'qaTopic');
}
/**
 * Returns the Quality Assurance topics list.
 * @function qualityAssuranceTopicsObjectSelector
 * @return {QualityAssuranceTopicObject[]}
 */
function qualityAssuranceTopicsObjectSelector() {
  return (0,_shared_selector_util__WEBPACK_IMPORTED_MODULE_0__.subStateSelector)(qualityAssuranceTopicsStateSelector(), 'topics');
}
/**
 * Returns true if the Quality Assurance topics are loaded.
 * @function isQualityAssuranceTopicsLoadedSelector
 * @return {boolean}
 */
const isQualityAssuranceTopicsLoadedSelector = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(_getNotificationsState, state => state.qaTopic.loaded);
/**
 * Returns true if the deduplication sets are processing.
 * @function isDeduplicationSetsProcessingSelector
 * @return {boolean}
 */
const isQualityAssuranceTopicsProcessingSelector = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(_getNotificationsState, state => state.qaTopic.processing);
/**
 * Returns the total available pages of Quality Assurance topics.
 * @function getQualityAssuranceTopicsTotalPagesSelector
 * @return {number}
 */
const getQualityAssuranceTopicsTotalPagesSelector = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(_getNotificationsState, state => state.qaTopic.totalPages);
/**
 * Returns the current page of Quality Assurance topics.
 * @function getQualityAssuranceTopicsCurrentPageSelector
 * @return {number}
 */
const getQualityAssuranceTopicsCurrentPageSelector = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(_getNotificationsState, state => state.qaTopic.currentPage);
/**
 * Returns the total number of Quality Assurance topics.
 * @function getQualityAssuranceTopicsTotalsSelector
 * @return {number}
 */
const getQualityAssuranceTopicsTotalsSelector = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(_getNotificationsState, state => state.qaTopic.totalElements);
// Quality Assurance source
// ----------------------------------------------------------------------------
/**
 * Returns the Quality Assurance source State.
 * @function qualityAssuranceSourceStateSelector
 * @return {QualityAssuranceSourceState}
 */
function qualityAssuranceSourceStateSelector() {
  return (0,_shared_selector_util__WEBPACK_IMPORTED_MODULE_0__.subStateSelector)(_notifications_reducer__WEBPACK_IMPORTED_MODULE_1__.suggestionNotificationsSelector, 'qaSource');
}
/**
 * Returns the Quality Assurance source list.
 * @function qualityAssuranceSourceObjectSelector
 * @return {QualityAssuranceSourceObject[]}
 */
function qualityAssuranceSourceObjectSelector() {
  return (0,_shared_selector_util__WEBPACK_IMPORTED_MODULE_0__.subStateSelector)(qualityAssuranceSourceStateSelector(), 'source');
}
/**
 * Returns true if the Quality Assurance source are loaded.
 * @function isQualityAssuranceSourceLoadedSelector
 * @return {boolean}
 */
const isQualityAssuranceSourceLoadedSelector = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(_getNotificationsState, state => state.qaSource.loaded);
/**
 * Returns true if the deduplication sets are processing.
 * @function isDeduplicationSetsProcessingSelector
 * @return {boolean}
 */
const isQualityAssuranceSourceProcessingSelector = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(_getNotificationsState, state => state.qaSource.processing);
/**
 * Returns the total available pages of Quality Assurance source.
 * @function getQualityAssuranceSourceTotalPagesSelector
 * @return {number}
 */
const getQualityAssuranceSourceTotalPagesSelector = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(_getNotificationsState, state => state.qaSource.totalPages);
/**
 * Returns the current page of Quality Assurance source.
 * @function getQualityAssuranceSourceCurrentPageSelector
 * @return {number}
 */
const getQualityAssuranceSourceCurrentPageSelector = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(_getNotificationsState, state => state.qaSource.currentPage);
/**
 * Returns the total number of Quality Assurance source.
 * @function getQualityAssuranceSourceTotalsSelector
 * @return {number}
 */
const getQualityAssuranceSourceTotalsSelector = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(_getNotificationsState, state => state.qaSource.totalElements);

/***/ }),

/***/ 29751:
/*!***************************************************************************************************!*\
  !*** ./src/app/notifications/suggestion-targets/publication-claim/publication-claim.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PublicationClaimComponent: () => (/* binding */ PublicationClaimComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 78374);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 64785);
/* harmony import */ var _core_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/pagination/pagination.service */ 76896);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/empty.util */ 82777);
/* harmony import */ var _shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/loading/themed-loading.component */ 82394);
/* harmony import */ var _shared_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/pagination/pagination.component */ 40590);
/* harmony import */ var _shared_pagination_pagination_component_options_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/pagination/pagination-component-options.model */ 23401);
/* harmony import */ var _suggestions_page_suggestions_page_routing_paths__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../suggestions-page/suggestions-page-routing-paths */ 24215);
/* harmony import */ var _suggestions_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../suggestions.service */ 67977);
/* harmony import */ var _suggestion_targets_state_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../suggestion-targets.state.service */ 6324);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 90310);


















const _c0 = a0 => ["/entities/person/", a0];
const _c1 = a0 => ({
  total: a0
});
function PublicationClaimComponent_ds_loading_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "ds-loading", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("message", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 1, "suggestion.loading"));
  }
}
function PublicationClaimComponent_ds_pagination_8_ds_loading_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "ds-loading", 10);
  }
}
function PublicationClaimComponent_ds_pagination_8_ng_container_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "suggestion.noTargets"), " ");
  }
}
function PublicationClaimComponent_ds_pagination_8_ng_container_4_div_3_tr_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr", 16)(1, "td")(2, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "td")(5, "div", 20)(6, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function PublicationClaimComponent_ds_pagination_8_ng_container_4_div_3_tr_11_Template_button_click_6_listener() {
      const targetElement_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.redirectToSuggestions(targetElement_r4.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](11, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const targetElement_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](10, _c0, ctx_r1.getTargetUuid(targetElement_r4)));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](targetElement_r4.display);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](7, 4, "suggestion.button.review.title", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](12, _c1, targetElement_r4.total.toString())) + targetElement_r4.display);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](10, 7, "suggestion.button.review", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](14, _c1, targetElement_r4.total.toString())), " ");
  }
}
function PublicationClaimComponent_ds_pagination_8_ng_container_4_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 14)(1, "table", 15)(2, "thead")(3, "tr", 16)(4, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](11, PublicationClaimComponent_ds_pagination_8_ng_container_4_div_3_tr_11_Template, 12, 16, "tr", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](12, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](6, 3, "suggestion.table.name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](9, 5, "suggestion.table.actions"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](12, 7, ctx_r1.targets$));
  }
}
function PublicationClaimComponent_ds_pagination_8_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, PublicationClaimComponent_ds_pagination_8_ng_container_4_div_1_Template, 3, 3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, PublicationClaimComponent_ds_pagination_8_ng_container_4_div_3_Template, 13, 9, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ((tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 2, ctx_r1.targets$)) == null ? null : tmp_2_0.length) === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ((tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 4, ctx_r1.targets$)) == null ? null : tmp_3_0.length) !== 0);
  }
}
function PublicationClaimComponent_ds_pagination_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ds-pagination", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("paginationChange", function PublicationClaimComponent_ds_pagination_8_Template_ds_pagination_paginationChange_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.getSuggestionTargets());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, PublicationClaimComponent_ds_pagination_8_ds_loading_2_Template, 1, 0, "ds-loading", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, PublicationClaimComponent_ds_pagination_8_ng_container_4_Template, 5, 6, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("paginationOptions", ctx_r1.paginationConfig)("collectionSize", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 6, ctx_r1.totalElements$))("hideGear", false)("retainScrollPosition", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 8, ctx_r1.isTargetsProcessing()));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 10, ctx_r1.isTargetsProcessing()) !== true);
  }
}
/**
 * Component to display the Suggestion Target list.
 */
class PublicationClaimComponent {
  /**
   * Initialize the component variables.
   * @param {PaginationService} paginationService
   * @param {SuggestionTargetsStateService} suggestionTargetsStateService
   * @param {SuggestionsService} suggestionService
   * @param {Router} router
   */
  constructor(paginationService, suggestionTargetsStateService, suggestionService, router) {
    this.paginationService = paginationService;
    this.suggestionTargetsStateService = suggestionTargetsStateService;
    this.suggestionService = suggestionService;
    this.router = router;
    /**
     * The source for which to list targets
     */
    this.source = '';
    /**
     * The pagination system configuration for HTML listing.
     * @type {PaginationComponentOptions}
     */
    this.paginationConfig = Object.assign(new _shared_pagination_pagination_component_options_model__WEBPACK_IMPORTED_MODULE_4__.PaginationComponentOptions(), {
      id: 'stp_' + this.source,
      pageSizeOptions: [5, 10, 20, 40, 60]
    });
    /**
     * Array to track all the component subscriptions. Useful to unsubscribe them with 'onDestroy'.
     * @type {Array}
     */
    this.subs = [];
  }
  /**
   * Component initialization.
   */
  ngOnInit() {
    this.targets$ = this.suggestionTargetsStateService.getSuggestionTargets(this.source);
    this.totalElements$ = this.suggestionTargetsStateService.getSuggestionTargetsTotals(this.source);
  }
  /**
   * First Suggestion Targets loading after view initialization.
   */
  ngAfterViewInit() {
    this.subs.push(this.suggestionTargetsStateService.isSuggestionTargetsLoaded(this.source).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.take)(1)).subscribe(() => {
      this.getSuggestionTargets();
    }));
  }
  /**
   * Returns the information about the loading status of the Suggestion Targets (if it's running or not).
   *
   * @return Observable<boolean>
   *    'true' if the targets are loading, 'false' otherwise.
   */
  isTargetsLoading() {
    return this.suggestionTargetsStateService.isSuggestionTargetsLoading(this.source);
  }
  /**
   * Returns the information about the processing status of the Suggestion Targets (if it's running or not).
   *
   * @return Observable<boolean>
   *    'true' if there are operations running on the targets (ex.: a REST call), 'false' otherwise.
   */
  isTargetsProcessing() {
    return this.suggestionTargetsStateService.isSuggestionTargetsProcessing(this.source);
  }
  /**
   * Redirect to suggestion page.
   *
   * @param {string} id
   *    the id of suggestion target
   */
  redirectToSuggestions(id) {
    this.router.navigate([(0,_suggestions_page_suggestions_page_routing_paths__WEBPACK_IMPORTED_MODULE_5__.getSuggestionPageRoute)(id)]);
  }
  /**
   * Unsubscribe from all subscriptions.
   */
  ngOnDestroy() {
    this.suggestionTargetsStateService.dispatchClearSuggestionTargetsAction(this.source);
    this.subs.filter(sub => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_1__.hasValue)(sub)).forEach(sub => sub.unsubscribe());
  }
  /**
   * Dispatch the Suggestion Targets retrival.
   */
  getSuggestionTargets() {
    this.paginationService.getCurrentPagination(this.paginationConfig.id, this.paginationConfig).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.take)(1)).subscribe(options => {
      this.suggestionTargetsStateService.dispatchRetrieveSuggestionTargets(this.source, options.pageSize, options.currentPage);
    });
  }
  getTargetUuid(target) {
    return this.suggestionService.getTargetUuid(target);
  }
  static {
    this.ɵfac = function PublicationClaimComponent_Factory(t) {
      return new (t || PublicationClaimComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_0__.PaginationService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_suggestion_targets_state_service__WEBPACK_IMPORTED_MODULE_7__.SuggestionTargetsStateService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_suggestions_service__WEBPACK_IMPORTED_MODULE_6__.SuggestionsService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
      type: PublicationClaimComponent,
      selectors: [["ds-publication-claim"]],
      inputs: {
        source: "source"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵStandaloneFeature"]],
      decls: 10,
      vars: 9,
      consts: [[1, "container"], [1, "row"], [1, "col-12"], ["id", "header", 1, "border-bottom", "pb-2"], ["class", "container", 3, "message", 4, "ngIf"], [3, "paginationOptions", "collectionSize", "hideGear", "retainScrollPosition", "paginationChange", 4, "ngIf"], [1, "container", 3, "message"], [3, "paginationChange", "paginationOptions", "collectionSize", "hideGear", "retainScrollPosition"], ["class", "container", "message", "'suggestion.loading' | translate", 4, "ngIf"], [4, "ngIf"], ["message", "'suggestion.loading' | translate", 1, "container"], ["class", "alert alert-info w-100 mb-2 mt-2", "role", "alert", 4, "ngIf"], ["class", "table-responsive mt-2", 4, "ngIf"], ["role", "alert", 1, "alert", "alert-info", "w-100", "mb-2", "mt-2"], [1, "table-responsive", "mt-2"], ["id", "epeople", 1, "table", "table-striped", "table-hover", "table-bordered"], [1, "text-center"], ["scope", "col"], ["class", "text-center", 4, "ngFor", "ngForOf"], ["target", "_blank", 3, "routerLink"], [1, "btn-group", "edit-field"], [1, "btn", "btn-outline-primary", "btn-sm", 3, "click", "title"], [1, "fas", "fa-lightbulb"]],
      template: function PublicationClaimComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, PublicationClaimComponent_ds_loading_6_Template, 2, 3, "ds-loading", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](7, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, PublicationClaimComponent_ds_pagination_8_Template, 6, 12, "ds-pagination", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](9, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 3, "suggestion.title"));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](7, 5, ctx.isTargetsLoading()));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](9, 7, ctx.isTargetsLoading()) !== true);
        }
      },
      dependencies: [_shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_2__.ThemedLoadingComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslatePipe, _shared_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_3__.PaginationComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgFor, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLink],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1YmxpY2F0aW9uLWNsYWltLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBIiwiZmlsZSI6InB1YmxpY2F0aW9uLWNsYWltLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi8iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbm90aWZpY2F0aW9ucy9zdWdnZXN0aW9uLXRhcmdldHMvcHVibGljYXRpb24tY2xhaW0vcHVibGljYXRpb24tY2xhaW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQSw0a0JBQTRrQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 1647:
/*!*******************************************************************************************************************************************************!*\
  !*** ./src/app/quality-assurance-notifications-pages/notifications-suggestion-targets-page/notifications-suggestion-targets-page-resolver.service.ts ***!
  \*******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminNotificationsPublicationClaimPageResolver: () => (/* binding */ AdminNotificationsPublicationClaimPageResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 90310);

/**
 * This class represents a resolver that retrieve the route data before the route is activated.
 */
class AdminNotificationsPublicationClaimPageResolver {
  /**
   * Method for resolving the parameters in the current route.
   * @param {ActivatedRouteSnapshot} route The current ActivatedRouteSnapshot
   * @param {RouterStateSnapshot} state The current RouterStateSnapshot
   * @returns AdminNotificationsSuggestionTargetsPageParams Emits the route parameters
   */
  resolve(route, state) {
    return {
      pageId: route.queryParams.pageId,
      pageSize: parseInt(route.queryParams.pageSize, 10),
      currentPage: parseInt(route.queryParams.page, 10)
    };
  }
  static {
    this.ɵfac = function AdminNotificationsPublicationClaimPageResolver_Factory(t) {
      return new (t || AdminNotificationsPublicationClaimPageResolver)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AdminNotificationsPublicationClaimPageResolver,
      factory: AdminNotificationsPublicationClaimPageResolver.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 93362:
/*!********************************************************************************************************************************!*\
  !*** ./src/app/quality-assurance-notifications-pages/quality-assurance-events-page/quality-assurance-events-page.component.ts ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QualityAssuranceEventsPageComponent: () => (/* binding */ QualityAssuranceEventsPageComponent)
/* harmony export */ });
/* harmony import */ var _notifications_qa_events_quality_assurance_events_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../notifications/qa/events/quality-assurance-events.component */ 61978);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 90310);


/**
 * Component for the page that show the QA events related to a specific topic.
 */
class QualityAssuranceEventsPageComponent {
  static {
    this.ɵfac = function QualityAssuranceEventsPageComponent_Factory(t) {
      return new (t || QualityAssuranceEventsPageComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: QualityAssuranceEventsPageComponent,
      selectors: [["ds-quality-assurance-events-page"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 1,
      vars: 0,
      template: function QualityAssuranceEventsPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ds-quality-assurance-events");
        }
      },
      dependencies: [_notifications_qa_events_quality_assurance_events_component__WEBPACK_IMPORTED_MODULE_0__.QualityAssuranceEventsComponent],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 83527:
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/quality-assurance-notifications-pages/quality-assurance-events-page/quality-assurance-events-page.resolver.ts ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   qualityAssuranceEventsPageResolver: () => (/* binding */ qualityAssuranceEventsPageResolver)
/* harmony export */ });
/**
 * Method for resolving the parameters in the current route.
 * @param {ActivatedRouteSnapshot} route The current ActivatedRouteSnapshot
 * @param {RouterStateSnapshot} state The current RouterStateSnapshot
 * @returns AdminQualityAssuranceEventsPageParams Emits the route parameters
 */
const qualityAssuranceEventsPageResolver = (route, state) => {
  return {
    pageId: route.queryParams.pageId,
    pageSize: parseInt(route.queryParams.pageSize, 10),
    currentPage: parseInt(route.queryParams.page, 10)
  };
};

/***/ }),

/***/ 93084:
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/quality-assurance-notifications-pages/quality-assurance-source-page-component/quality-assurance-source-data.resolver.ts ***!
  \*****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   qualityAssuranceSourceDataResolver: () => (/* binding */ qualityAssuranceSourceDataResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var _config_app_config_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../config/app-config.interface */ 82640);
/* harmony import */ var _notifications_qa_source_quality_assurance_source_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../notifications/qa/source/quality-assurance-source.service */ 13246);





/**
 * Method for resolving the parameters in the current route.
 * @param {ActivatedRouteSnapshot} route The current ActivatedRouteSnapshot
 * @param {RouterStateSnapshot} state The current RouterStateSnapshot
 * @param router
 * @param qualityAssuranceSourceService
 * @param appConfig
 * @returns Observable<QualityAssuranceSourceObject[]>
 */
const qualityAssuranceSourceDataResolver = (route, state, router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), qualityAssuranceSourceService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_notifications_qa_source_quality_assurance_source_service__WEBPACK_IMPORTED_MODULE_1__.QualityAssuranceSourceService), appConfig = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_config_app_config_interface__WEBPACK_IMPORTED_MODULE_0__.APP_CONFIG)) => {
  const pageSize = appConfig.qualityAssuranceConfig.pageSize;
  return qualityAssuranceSourceService.getSources(pageSize, 0).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(sources => {
    if (sources.page.length === 1) {
      router.navigate([getResolvedUrl(route) + '/' + sources.page[0].id]);
    }
    return sources.page;
  }));
};
/**
 *
 * @param route url path
 * @returns url path
 */
function getResolvedUrl(route) {
  return route.pathFromRoot.map(v => v.url.map(segment => segment.toString()).join('/')).join('/');
}

/***/ }),

/***/ 89473:
/*!*************************************************************************************************************************************************!*\
  !*** ./src/app/quality-assurance-notifications-pages/quality-assurance-source-page-component/quality-assurance-source-page-resolver.service.ts ***!
  \*************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QualityAssuranceSourcePageResolver: () => (/* binding */ QualityAssuranceSourcePageResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 90310);

/**
 * This class represents a resolver that retrieve the route data before the route is activated.
 */
class QualityAssuranceSourcePageResolver {
  /**
   * Method for resolving the parameters in the current route.
   * @param {ActivatedRouteSnapshot} route The current ActivatedRouteSnapshot
   * @param {RouterStateSnapshot} state The current RouterStateSnapshot
   * @returns AdminQualityAssuranceSourcePageParams Emits the route parameters
   */
  resolve(route, state) {
    return {
      pageId: route.queryParams.pageId,
      pageSize: parseInt(route.queryParams.pageSize, 10),
      currentPage: parseInt(route.queryParams.page, 10)
    };
  }
  static {
    this.ɵfac = function QualityAssuranceSourcePageResolver_Factory(t) {
      return new (t || QualityAssuranceSourcePageResolver)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: QualityAssuranceSourcePageResolver,
      factory: QualityAssuranceSourcePageResolver.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 50884:
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/quality-assurance-notifications-pages/quality-assurance-source-page-component/quality-assurance-source-page.component.ts ***!
  \******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QualityAssuranceSourcePageComponent: () => (/* binding */ QualityAssuranceSourcePageComponent)
/* harmony export */ });
/* harmony import */ var _notifications_qa_source_quality_assurance_source_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../notifications/qa/source/quality-assurance-source.component */ 91706);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 90310);


/**
 * Component for the page that show the QA sources.
 */
class QualityAssuranceSourcePageComponent {
  static {
    this.ɵfac = function QualityAssuranceSourcePageComponent_Factory(t) {
      return new (t || QualityAssuranceSourcePageComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: QualityAssuranceSourcePageComponent,
      selectors: [["ds-quality-assurance-source-page-component"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 1,
      vars: 0,
      template: function QualityAssuranceSourcePageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ds-quality-assurance-source");
        }
      },
      dependencies: [_notifications_qa_source_quality_assurance_source_component__WEBPACK_IMPORTED_MODULE_0__.QualityAssuranceSourceComponent],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 87499:
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/quality-assurance-notifications-pages/quality-assurance-topics-page/quality-assurance-topics-page-resolver.service.ts ***!
  \***************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QualityAssuranceTopicsPageResolver: () => (/* binding */ QualityAssuranceTopicsPageResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 90310);

/**
 * This class represents a resolver that retrieve the route data before the route is activated.
 */
class QualityAssuranceTopicsPageResolver {
  /**
   * Method for resolving the parameters in the current route.
   * @param {ActivatedRouteSnapshot} route The current ActivatedRouteSnapshot
   * @param {RouterStateSnapshot} state The current RouterStateSnapshot
   * @returns AdminQualityAssuranceTopicsPageParams Emits the route parameters
   */
  resolve(route, state) {
    return {
      pageId: route.queryParams.pageId,
      pageSize: parseInt(route.queryParams.pageSize, 10),
      currentPage: parseInt(route.queryParams.page, 10)
    };
  }
  static {
    this.ɵfac = function QualityAssuranceTopicsPageResolver_Factory(t) {
      return new (t || QualityAssuranceTopicsPageResolver)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: QualityAssuranceTopicsPageResolver,
      factory: QualityAssuranceTopicsPageResolver.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 41466:
/*!********************************************************************************************************************************!*\
  !*** ./src/app/quality-assurance-notifications-pages/quality-assurance-topics-page/quality-assurance-topics-page.component.ts ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QualityAssuranceTopicsPageComponent: () => (/* binding */ QualityAssuranceTopicsPageComponent)
/* harmony export */ });
/* harmony import */ var _notifications_qa_topics_quality_assurance_topics_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../notifications/qa/topics/quality-assurance-topics.component */ 88008);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 90310);


/**
 * Component for the page that show the QA topics related to a specific source.
 */
class QualityAssuranceTopicsPageComponent {
  static {
    this.ɵfac = function QualityAssuranceTopicsPageComponent_Factory(t) {
      return new (t || QualityAssuranceTopicsPageComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: QualityAssuranceTopicsPageComponent,
      selectors: [["ds-notification-qa-page"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 1,
      vars: 0,
      template: function QualityAssuranceTopicsPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ds-quality-assurance-topic");
        }
      },
      dependencies: [_notifications_qa_topics_quality_assurance_topics_component__WEBPACK_IMPORTED_MODULE_0__.QualityAssuranceTopicsComponent],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 96127:
/*!*****************************************!*\
  !*** ./src/app/shared/selector.util.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   keySelector: () => (/* binding */ keySelector),
/* harmony export */   subStateSelector: () => (/* binding */ subStateSelector)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 99797);
/* harmony import */ var _empty_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./empty.util */ 82777);


/**
 * Export a function to return a subset of the state by key
 */
function keySelector(parentSelector, subState, key) {
  return (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(parentSelector, state => {
    if ((0,_empty_util__WEBPACK_IMPORTED_MODULE_0__.hasValue)(state) && (0,_empty_util__WEBPACK_IMPORTED_MODULE_0__.hasValue)(state[subState])) {
      return state[subState][key];
    } else {
      return undefined;
    }
  });
}
/**
 * Export a function to return a subset of the state
 */
function subStateSelector(parentSelector, subState) {
  return (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(parentSelector, state => {
    if ((0,_empty_util__WEBPACK_IMPORTED_MODULE_0__.hasValue)(state) && (0,_empty_util__WEBPACK_IMPORTED_MODULE_0__.hasValue)(state[subState])) {
      return state[subState];
    } else {
      return undefined;
    }
  });
}

/***/ })

}]);
//# sourceMappingURL=default-src_app_core_breadcrumbs_quality-assurance-breadcrumb_resolver_ts-src_app_notificatio-52f0a5.js.map