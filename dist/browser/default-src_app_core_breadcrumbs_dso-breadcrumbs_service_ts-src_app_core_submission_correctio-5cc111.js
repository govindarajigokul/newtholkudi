"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["default-src_app_core_breadcrumbs_dso-breadcrumbs_service_ts-src_app_core_submission_correctio-5cc111"],{

/***/ 90839:
/*!************************************************************!*\
  !*** ./src/app/breadcrumbs/breadcrumb/breadcrumb.model.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 67045:
/*!*************************************************************!*\
  !*** ./src/app/core/breadcrumbs/dso-breadcrumbs.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DSOBreadcrumbsService: () => (/* binding */ DSOBreadcrumbsService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 17796);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 47386);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 84975);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var _app_routing_paths__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app-routing-paths */ 69799);
/* harmony import */ var _breadcrumbs_breadcrumb_breadcrumb_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../breadcrumbs/breadcrumb/breadcrumb.model */ 90839);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/empty.util */ 82777);
/* harmony import */ var _shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/utils/follow-link-config.model */ 67600);
/* harmony import */ var _cache_builders_link_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cache/builders/link.service */ 1321);
/* harmony import */ var _dso_name_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dso-name.service */ 96526);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 90310);











/**
 * Service to calculate DSpaceObject breadcrumbs for a single part of the route
 */
class DSOBreadcrumbsService {
  constructor(linkService, dsoNameService) {
    this.linkService = linkService;
    this.dsoNameService = dsoNameService;
  }
  /**
   * Method to recursively calculate the breadcrumbs
   * This method returns the name and url of the key and all its parent DSOs recursively, top down
   * @param key The key (a DSpaceObject) used to resolve the breadcrumb
   * @param url The url to use as a link for this breadcrumb
   */
  getBreadcrumbs(key, url) {
    const label = this.dsoNameService.getName(key);
    const crumb = new _breadcrumbs_breadcrumb_breadcrumb_model__WEBPACK_IMPORTED_MODULE_1__.Breadcrumb(label, url);
    const propertyName = key.getParentLinkKey();
    return this.linkService.resolveLink(key, (0,_shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_3__.followLink)(propertyName))[propertyName].pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.find)(parentRD => parentRD.hasSucceeded || parentRD.statusCode === 204), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(parentRD => {
      if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_2__.hasValue)(parentRD) && (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_2__.hasValue)(parentRD.payload)) {
        const parent = parentRD.payload;
        return this.getBreadcrumbs(parent, (0,_app_routing_paths__WEBPACK_IMPORTED_MODULE_0__.getDSORoute)(parent));
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)([]);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(breadcrumbs => [...breadcrumbs, crumb]));
  }
  static {
    this.ɵfac = function DSOBreadcrumbsService_Factory(t) {
      return new (t || DSOBreadcrumbsService)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_cache_builders_link_service__WEBPACK_IMPORTED_MODULE_4__.LinkService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_dso_name_service__WEBPACK_IMPORTED_MODULE_5__.DSONameService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjectable"]({
      token: DSOBreadcrumbsService,
      factory: DSOBreadcrumbsService.ɵfac,
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

/***/ }),

/***/ 76604:
/*!********************************************************************!*\
  !*** ./src/app/item-page/versions/item-versions-shared.service.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ItemVersionsSharedService: () => (/* binding */ ItemVersionsSharedService)
/* harmony export */ });
/* harmony import */ var _shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/notifications/notifications.service */ 69472);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 96439);





class ItemVersionsSharedService {
  constructor(notificationsService, translateService) {
    this.notificationsService = notificationsService;
    this.translateService = translateService;
  }
  static msg(key) {
    const translationPrefix = 'item.version.create.notification';
    return translationPrefix + '.' + key;
  }
  /**
   * Notify success/failure after creating a new version.
   *
   * @param newVersionRD the new version that has been created
   */
  notifyCreateNewVersion(newVersionRD) {
    const newVersionNumber = newVersionRD?.payload?.version;
    newVersionRD.hasSucceeded ? this.notificationsService.success(null, this.translateService.get(ItemVersionsSharedService.msg('success'), {
      version: newVersionNumber
    })) : this.notificationsService.error(null, this.translateService.get(ItemVersionsSharedService.msg(newVersionRD?.statusCode === 422 ? 'inProgress' : 'failure')));
  }
  static {
    this.ɵfac = function ItemVersionsSharedService_Factory(t) {
      return new (t || ItemVersionsSharedService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_0__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: ItemVersionsSharedService,
      factory: ItemVersionsSharedService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 13574:
/*!*********************************************************************************************************!*\
  !*** ./src/app/item-page/versions/item-versions-summary-modal/item-versions-summary-modal.component.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ItemVersionsSummaryModalComponent: () => (/* binding */ ItemVersionsSummaryModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 56106);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 83485);
/* harmony import */ var _shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/loading/themed-loading.component */ 82394);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 49966);











const _c0 = a0 => ({
  version: a0
});
function ItemVersionsSummaryModalComponent_div_0_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, "item.version.create.modal.text.startingFrom", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, ctx_r1.versionNumber)), " ");
  }
}
function ItemVersionsSummaryModalComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ItemVersionsSummaryModalComponent_div_0_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.onModalClose());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5)(8, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ItemVersionsSummaryModalComponent_div_0_span_11_Template, 3, 6, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 8)(13, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function ItemVersionsSummaryModalComponent_div_0_Template_input_ngModelChange_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r1.newVersionSummary, $event) || (ctx_r1.newVersionSummary = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup.enter", function ItemVersionsSummaryModalComponent_div_0_Template_input_keyup_enter_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.onModalSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 11)(19, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ItemVersionsSummaryModalComponent_div_0_Template_button_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.onModalClose());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](25, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ItemVersionsSummaryModalComponent_div_0_Template_button_click_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.onModalSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](28, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 10, "item.version.create.modal.header"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 12, "item.version.create.modal.text"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.firstVersion);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 14, "item.version.create.modal.form.summary.label"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 16, "item.version.create.modal.form.summary.placeholder"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.newVersionSummary);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 18, "item.version.create.modal.button.cancel.tooltip"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](23, 20, "item.version.create.modal.button.cancel"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](25, 22, "item.version.create.modal.button.confirm.tooltip"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](28, 24, "item.version.create.modal.button.confirm"), " ");
  }
}
function ItemVersionsSummaryModalComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 5)(4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "ds-loading", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 3, "item.version.create.modal.submitted.header"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 5, "item.version.create.modal.submitted.text"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showMessage", false);
  }
}
class ItemVersionsSummaryModalComponent {
  constructor(activeModal) {
    this.activeModal = activeModal;
    this.firstVersion = true;
    this.createVersionEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  }
  ngOnInit() {
    this.submitted$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(false);
  }
  onModalClose() {
    this.activeModal.dismiss();
  }
  beforeDismiss() {
    // prevent the modal from being dismissed after version creation is initiated
    return !this.submitted$.getValue();
  }
  onModalSubmit() {
    this.createVersionEvent.emit(this.newVersionSummary);
    this.submitted$.next(true);
    // NOTE: the caller of this modal is responsible for closing it,
    //       e.g. after the version creation POST request completed.
  }
  static {
    this.ɵfac = function ItemVersionsSummaryModalComponent_Factory(t) {
      return new (t || ItemVersionsSummaryModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbActiveModal));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ItemVersionsSummaryModalComponent,
      selectors: [["ds-item-versions-summary-modal"]],
      outputs: {
        createVersionEvent: "createVersionEvent"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 4,
      vars: 4,
      consts: [["waiting", ""], [4, "ngIf", "ngIfElse"], [1, "modal-header"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "pb-2"], [4, "ngIf"], [1, "form-group"], ["for", "summary"], ["type", "text", "id", "summary", 1, "form-control", 3, "ngModelChange", "keyup.enter", "ngModel", "placeholder"], [1, "modal-footer", "space-children-mr"], ["type", "button", 1, "btn", "btn-outline-secondary", "btn-sm", "ml-0", 3, "click", "title"], [1, "fas", "fa-times", "fa-fw"], ["type", "submit", 1, "btn", "btn-success", "btn-sm", "ml-0", 3, "click", "title"], [1, "fas", "fa-check", "fa-fw"], [1, "d-flex", "justify-content-center"], [3, "showMessage"]],
      template: function ItemVersionsSummaryModalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ItemVersionsSummaryModalComponent_div_0_Template, 29, 26, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ItemVersionsSummaryModalComponent_ng_template_2_Template, 9, 7, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        }
        if (rf & 2) {
          const waiting_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 2, ctx.submitted$) !== true)("ngIfElse", waiting_r3);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_0__.ThemedLoadingComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW0tdmVyc2lvbnMtc3VtbWFyeS1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQSIsImZpbGUiOiJpdGVtLXZlcnNpb25zLXN1bW1hcnktbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqLyJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaXRlbS1wYWdlL3ZlcnNpb25zL2l0ZW0tdmVyc2lvbnMtc3VtbWFyeS1tb2RhbC9pdGVtLXZlcnNpb25zLXN1bW1hcnktbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQSx3bUJBQXdtQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 81637:
/*!******************************************************************************************!*\
  !*** ./src/app/shared/correction-suggestion/item-withdrawn-reinstate-modal.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ItemWithdrawnReinstateModalComponent: () => (/* binding */ ItemWithdrawnReinstateModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 56106);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 83485);
/* harmony import */ var _core_data_feature_authorization_authorization_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/data/feature-authorization/authorization-data.service */ 3675);
/* harmony import */ var _loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../loading/themed-loading.component */ 82394);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 49966);













function ItemWithdrawnReinstateModalComponent_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ItemWithdrawnReinstateModalComponent_div_0_div_1_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.onModalClose());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "item.qa.withdrawn.modal.header"), " ");
  }
}
function ItemWithdrawnReinstateModalComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ItemWithdrawnReinstateModalComponent_div_0_div_1_Template, 6, 3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 4)(3, "div", 5)(4, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "textarea", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function ItemWithdrawnReinstateModalComponent_div_0_Template_textarea_ngModelChange_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx_r2.reason, $event) || (ctx_r2.reason = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 8)(16, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ItemWithdrawnReinstateModalComponent_div_0_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.onModalClose());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ItemWithdrawnReinstateModalComponent_div_0_Template_button_click_21_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.onModalSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](25, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](26, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const reinstateHeader_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.canWithdraw)("ngIfElse", reinstateHeader_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.canWithdraw ? _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 10, "qa-withdrawn.create.modal.form.summary.label") : _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 12, "qa-reinstate.create.modal.form.summary.label"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.canWithdraw ? _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](10, 14, "qa-withdrawn.create.modal.form.summary2.label") : _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 16, "qa-reinstate.create.modal.form.summary2.label"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", ctx_r2.canWithdraw ? _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](13, 18, "qa-withdrown.modal.form.summary.placeholder") : _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](14, 20, "qa-reinstate.modal.form.summary.placeholder"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.reason);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](17, 22, "item.qa.withdrawn-reinstate.create.modal.button.cancel.tooltip"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](20, 24, "item.qa.withdrawn-reinstate.create.modal.button.cancel"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](22, 26, "item.qa.withdrawn-reinstate.modal.button.confirm.tooltip"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r2.canWithdraw ? _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](25, 28, "qa-withdrown.create.modal.button.confirm") : _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](26, 30, "qa-reinstate.create.modal.button.confirm"), " ");
  }
}
function ItemWithdrawnReinstateModalComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 4)(4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "ds-loading", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 2, "item.qa.withdrawn.modal.submitted.header"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("showMessage", false);
  }
}
function ItemWithdrawnReinstateModalComponent_ng_template_4_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ItemWithdrawnReinstateModalComponent_ng_template_4_div_0_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.onModalClose());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "item.qa.reinstate.modal.header"), " ");
  }
}
function ItemWithdrawnReinstateModalComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ItemWithdrawnReinstateModalComponent_ng_template_4_div_0_Template, 6, 3, "div", 18);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r2.canWithdraw);
  }
}
/**
 * Represents a modal component for withdrawing or reinstating an item.
 * Implements the ModalBeforeDismiss interface.
 */
class ItemWithdrawnReinstateModalComponent {
  constructor(activeModal, authorizationService) {
    this.activeModal = activeModal;
    this.authorizationService = authorizationService;
    /**
     * BehaviorSubject that represents the submitted state.
     * Emits a boolean value indicating whether the form has been submitted or not.
     */
    this.submitted$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(false);
    /**
     * Event emitter for creating a QA event.
     * @event createQAEvent
     */
    this.createQAEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
  }
  /**
   * Closes the modal.
   */
  onModalClose() {
    this.activeModal.close();
  }
  /**
   * Determines whether the modal can be dismissed.
   * @returns {boolean} True if the modal can be dismissed, false otherwise.
   */
  beforeDismiss() {
    // prevent the modal from being dismissed after version creation is initiated
    return !this.submitted$.getValue();
  }
  /**
   * Handles the submission of the modal form.
   * Emits the reason for withdrawal or reinstatement through the createQAEvent output.
   */
  onModalSubmit() {
    this.submitted$.next(true);
    this.createQAEvent.emit(this.reason);
  }
  /**
   * Sets the withdrawal state of the component.
   * @param state The new withdrawal state.
   */
  setWithdraw(state) {
    this.canWithdraw = state;
  }
  static {
    this.ɵfac = function ItemWithdrawnReinstateModalComponent_Factory(t) {
      return new (t || ItemWithdrawnReinstateModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_data_feature_authorization_authorization_data_service__WEBPACK_IMPORTED_MODULE_0__.AuthorizationDataService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ItemWithdrawnReinstateModalComponent,
      selectors: [["ds-item-withdrawn-reinstate-modal"]],
      outputs: {
        createQAEvent: "createQAEvent"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 6,
      vars: 4,
      consts: [["waiting", ""], ["reinstateHeader", ""], [4, "ngIf", "ngIfElse"], ["class", "modal-header", 4, "ngIf", "ngIfElse"], [1, "modal-body"], [1, "form-group"], ["for", "reason"], ["id", "reason", "rows", "6", "name", "message", 1, "form-control", 3, "ngModelChange", "ngModel", "placeholder"], [1, "modal-footer", "space-children-mr"], ["type", "button", 1, "btn", "btn-outline-secondary", "btn-sm", "ml-0", 3, "click", "title"], [1, "fas", "fa-times", "fa-fw"], ["type", "submit", 1, "btn", "btn-success", "btn-sm", "ml-0", 3, "click", "title"], [1, "fas", "fa-check", "fa-fw"], [1, "modal-header"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "d-flex", "justify-content-center"], [3, "showMessage"], ["class", "modal-header", 4, "ngIf"]],
      template: function ItemWithdrawnReinstateModalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ItemWithdrawnReinstateModalComponent_div_0_Template, 27, 32, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ItemWithdrawnReinstateModalComponent_ng_template_2_Template, 6, 4, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"])(4, ItemWithdrawnReinstateModalComponent_ng_template_4_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        }
        if (rf & 2) {
          const waiting_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 2, ctx.submitted$) !== true)("ngIfElse", waiting_r6);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe, _loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_1__.ThemedLoadingComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW0td2l0aGRyYXduLXJlaW5zdGF0ZS1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQSIsImZpbGUiOiJpdGVtLXdpdGhkcmF3bi1yZWluc3RhdGUtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqLyJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvcnJlY3Rpb24tc3VnZ2VzdGlvbi9pdGVtLXdpdGhkcmF3bi1yZWluc3RhdGUtbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQSxnbkJBQWduQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 60833:
/*!**********************************************************************************************************!*\
  !*** ./src/app/shared/dso-page/dso-withdrawn-reinstate-service/dso-withdrawn-reinstate-modal.service.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DsoWithdrawnReinstateModalService: () => (/* binding */ DsoWithdrawnReinstateModalService),
/* harmony export */   REQUEST_REINSTATE: () => (/* binding */ REQUEST_REINSTATE),
/* harmony export */   REQUEST_WITHDRAWN: () => (/* binding */ REQUEST_WITHDRAWN)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 78374);
/* harmony import */ var _core_data_feature_authorization_authorization_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/data/feature-authorization/authorization-data.service */ 3675);
/* harmony import */ var _core_data_item_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/data/item-data.service */ 29326);
/* harmony import */ var _core_notifications_qa_events_quality_assurance_event_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/notifications/qa/events/quality-assurance-event-data.service */ 27450);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/shared/operators */ 55757);
/* harmony import */ var _correction_suggestion_item_withdrawn_reinstate_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../correction-suggestion/item-withdrawn-reinstate-modal.component */ 81637);
/* harmony import */ var _notifications_notifications_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../notifications/notifications.service */ 69472);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 49966);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 96439);


















const REQUEST_WITHDRAWN = 'REQUEST/WITHDRAWN';
const REQUEST_REINSTATE = 'REQUEST/REINSTATE';
/**
 * Service for managing the withdrawn/reinstate modal for a DSO.
 */
class DsoWithdrawnReinstateModalService {
  constructor(router, modalService, itemService, notificationsService, authorizationService, translateService, qaEventDataService) {
    this.router = router;
    this.modalService = modalService;
    this.itemService = itemService;
    this.notificationsService = notificationsService;
    this.authorizationService = authorizationService;
    this.translateService = translateService;
    this.qaEventDataService = qaEventDataService;
  }
  /**
   * Open the create withdrawn modal for the provided dso
   */
  openCreateWithdrawnReinstateModal(dso, correctionType, state) {
    const target = dso.id;
    // Open modal
    const activeModal = this.modalService.open(_correction_suggestion_item_withdrawn_reinstate_modal_component__WEBPACK_IMPORTED_MODULE_4__.ItemWithdrawnReinstateModalComponent);
    activeModal.componentInstance.setWithdraw(state);
    activeModal.componentInstance.createQAEvent.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1)).subscribe(reasone => {
      this.sendQARequest(target, correctionType, reasone);
      activeModal.close();
    });
  }
  /**
   * Sends a quality assurance request.
   *
   * @param target - The target - the item's UUID.
   * @param correctionType - The type of correction.
   * @param reason - The reason for the request.
   * Reloads the current page in order to update the withdrawn/reinstate button.
   * and desplay a notification box.
   */
  sendQARequest(target, correctionType, reason) {
    this.qaEventDataService.postData(target, correctionType, '', reason).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_3__.getFirstCompletedRemoteData)()).subscribe(res => {
      if (res.hasSucceeded) {
        const message = correctionType === 'request-withdrawn' ? 'correction-type.manage-relation.action.notification.withdrawn' : 'correction-type.manage-relation.action.notification.reinstate';
        this.notificationsService.success(this.translateService.get(message));
        this.authorizationService.invalidateAuthorizationsRequestCache();
        this.reloadPage(true);
      } else {
        this.notificationsService.error(this.translateService.get('correction-type.manage-relation.action.notification.error'));
      }
    });
  }
  /**
   * Reloads the current page or navigates to a specified URL.
   * @param self - A boolean indicating whether to reload the current page (true) or navigate to a specified URL (false).
   * @param urlToNavigateTo - The URL to navigate to if `self` is false.
   * skipLocationChange:true means dont update the url to / when navigating
   */
  reloadPage(self, urlToNavigateTo) {
    const url = self ? this.router.url : urlToNavigateTo;
    this.router.navigateByUrl('/', {
      skipLocationChange: true
    }).then(() => {
      this.router.navigate([`/${url}`]);
    });
  }
  static {
    this.ɵfac = function DsoWithdrawnReinstateModalService_Factory(t) {
      return new (t || DsoWithdrawnReinstateModalService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_core_data_item_data_service__WEBPACK_IMPORTED_MODULE_1__.ItemDataService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_5__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_core_data_feature_authorization_authorization_data_service__WEBPACK_IMPORTED_MODULE_0__.AuthorizationDataService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_core_notifications_qa_events_quality_assurance_event_data_service__WEBPACK_IMPORTED_MODULE_2__.QualityAssuranceEventDataService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
      token: DsoWithdrawnReinstateModalService,
      factory: DsoWithdrawnReinstateModalService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 57850:
/*!*************************************************************************!*\
  !*** ./src/app/statistics/angulartics/dspace/view-tracker.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ViewTrackerComponent: () => (/* binding */ ViewTrackerComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 78374);
/* harmony import */ var _core_services_referrer_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services/referrer.service */ 88091);
/* harmony import */ var _core_shared_dspace_object_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/shared/dspace-object.model */ 76829);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/empty.util */ 82777);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var angulartics2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angulartics2 */ 74681);








/**
 * This component triggers a page view statistic
 */
class ViewTrackerComponent {
  constructor(angulartics2, referrerService) {
    this.angulartics2 = angulartics2;
    this.referrerService = referrerService;
  }
  ngOnInit() {
    this.sub = this.referrerService.getReferrer().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1)).subscribe(referrer => {
      this.angulartics2.eventTrack.next({
        action: 'page_view',
        properties: {
          object: this.object,
          referrer
        }
      });
    });
  }
  ngOnDestroy() {
    // unsubscribe in the case that this component is destroyed before
    // this.referrerService.getReferrer() has emitted
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_2__.hasValue)(this.sub)) {
      this.sub.unsubscribe();
    }
  }
  static {
    this.ɵfac = function ViewTrackerComponent_Factory(t) {
      return new (t || ViewTrackerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](angulartics2__WEBPACK_IMPORTED_MODULE_5__.Angulartics2), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_referrer_service__WEBPACK_IMPORTED_MODULE_0__.ReferrerService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: ViewTrackerComponent,
      selectors: [["ds-view-tracker"]],
      inputs: {
        object: "object"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
      decls: 1,
      vars: 0,
      template: function ViewTrackerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0, "\u00A0\n");
        }
      },
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXctdHJhY2tlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBO0VBQ0UsYUFBQTtBQUNGIiwiZmlsZSI6InZpZXctdHJhY2tlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovXG46aG9zdCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc3RhdGlzdGljcy9hbmd1bGFydGljcy9kc3BhY2Uvdmlldy10cmFja2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBO0FBQ0E7RUFDRSxhQUFBO0FBQ0Y7QUFDQSxnb0JBQWdvQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovXG46aG9zdCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=default-src_app_core_breadcrumbs_dso-breadcrumbs_service_ts-src_app_core_submission_correctio-5cc111.js.map