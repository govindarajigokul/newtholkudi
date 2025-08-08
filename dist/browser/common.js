"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["common"],{

/***/ 16734:
/*!********************************************************************************************!*\
  !*** ./src/app/admin/admin-ldn-services/ldn-services-data/ldn-itemfilters-data.service.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LdnItemfiltersService: () => (/* binding */ LdnItemfiltersService)
/* harmony export */ });
/* harmony import */ var _core_cache_builders_remote_data_build_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/cache/builders/remote-data-build.service */ 76799);
/* harmony import */ var _core_cache_object_cache_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/cache/object-cache.service */ 41684);
/* harmony import */ var _core_data_base_find_all_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/data/base/find-all-data */ 46787);
/* harmony import */ var _core_data_base_identifiable_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/data/base/identifiable-data.service */ 63897);
/* harmony import */ var _core_data_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/data/request.service */ 32473);
/* harmony import */ var _core_shared_hal_endpoint_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/shared/hal-endpoint.service */ 4910);
/* harmony import */ var _shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/notifications/notifications.service */ 69472);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 90310);













/**
 * A service responsible for fetching/sending data from/to the REST API on the itemfilters endpoint
 */
class LdnItemfiltersService extends _core_data_base_identifiable_data_service__WEBPACK_IMPORTED_MODULE_3__.IdentifiableDataService {
  constructor(requestService, rdbService, objectCache, halService, notificationsService) {
    super('itemfilters', requestService, rdbService, objectCache, halService);
    this.requestService = requestService;
    this.rdbService = rdbService;
    this.objectCache = objectCache;
    this.halService = halService;
    this.notificationsService = notificationsService;
    this.findAllData = new _core_data_base_find_all_data__WEBPACK_IMPORTED_MODULE_2__.FindAllDataImpl(this.linkPath, requestService, rdbService, objectCache, halService, this.responseMsToLive);
  }
  /**
   * Gets the endpoint URL for the itemfilters.
   *
   * @returns {string} - The endpoint URL.
   */
  getEndpoint() {
    return this.halService.getEndpoint(this.linkPath);
  }
  /**
   * Finds all itemfilters based on the provided options and link configurations.
   *
   * @param {FindListOptions} options - The options for finding a list of itemfilters.
   * @param {boolean} useCachedVersionIfAvailable - Whether to use the cached version if available.
   * @param {boolean} reRequestOnStale - Whether to re-request the data if it's stale.
   * @param {...FollowLinkConfig<Itemfilter>[]} linksToFollow - Configurations for following specific links.
   * @returns {Observable<RemoteData<PaginatedList<Itemfilter>>>} - An observable of remote data containing a paginated list of itemfilters.
   */
  findAll(options, useCachedVersionIfAvailable, reRequestOnStale, ...linksToFollow) {
    return this.findAllData.findAll(options, useCachedVersionIfAvailable, reRequestOnStale, ...linksToFollow);
  }
  static {
    this.ɵfac = function LdnItemfiltersService_Factory(t) {
      return new (t || LdnItemfiltersService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_core_data_request_service__WEBPACK_IMPORTED_MODULE_4__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_core_cache_builders_remote_data_build_service__WEBPACK_IMPORTED_MODULE_0__.RemoteDataBuildService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_core_cache_object_cache_service__WEBPACK_IMPORTED_MODULE_1__.ObjectCacheService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_core_shared_hal_endpoint_service__WEBPACK_IMPORTED_MODULE_5__.HALEndpointService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_6__.NotificationsService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
      token: LdnItemfiltersService,
      factory: LdnItemfiltersService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 54809:
/*!*************************************************************!*\
  !*** ./src/app/collection-page/collection-page.resolver.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   COLLECTION_PAGE_LINKS_TO_FOLLOW: () => (/* binding */ COLLECTION_PAGE_LINKS_TO_FOLLOW),
/* harmony export */   collectionPageResolver: () => (/* binding */ collectionPageResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 99797);
/* harmony import */ var _core_data_collection_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/data/collection-data.service */ 6983);
/* harmony import */ var _core_resolving_resolver_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/resolving/resolver.actions */ 81225);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/shared/operators */ 55757);
/* harmony import */ var _shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/utils/follow-link-config.model */ 67600);






/**
 * The self links defined in this list are expected to be requested somewhere in the near future
 * Requesting them as embeds will limit the number of requests
 */
const COLLECTION_PAGE_LINKS_TO_FOLLOW = [(0,_shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_3__.followLink)('parentCommunity', {}, (0,_shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_3__.followLink)('parentCommunity')), (0,_shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_3__.followLink)('logo')];
/**
 * Method for resolving a collection based on the parameters in the current route
 * @param {ActivatedRouteSnapshot} route The current ActivatedRouteSnapshot
 * @param {RouterStateSnapshot} state The current RouterStateSnapshot
 * @param collectionService
 * @param store
 * @returns Observable<<RemoteData<Collection>> Emits the found collection based on the parameters in the current route,
 * or an error if something went wrong
 */
const collectionPageResolver = (route, state, collectionService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_core_data_collection_data_service__WEBPACK_IMPORTED_MODULE_0__.CollectionDataService), store = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store)) => {
  const collectionRD$ = collectionService.findById(route.params.id, true, false, ...COLLECTION_PAGE_LINKS_TO_FOLLOW).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_2__.getFirstCompletedRemoteData)());
  collectionRD$.subscribe(collectionRD => {
    store.dispatch(new _core_resolving_resolver_actions__WEBPACK_IMPORTED_MODULE_1__.ResolvedAction(state.url, collectionRD.payload));
  });
  return collectionRD$;
};

/***/ }),

/***/ 39974:
/*!*******************************************************************!*\
  !*** ./src/app/core/coar-notify/notify-info/notify-info.guard.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   notifyInfoGuard: () => (/* binding */ notifyInfoGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var _notify_info_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notify-info.service */ 42084);




const notifyInfoGuard = (route, state, notifyInfoService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_notify_info_service__WEBPACK_IMPORTED_MODULE_0__.NotifyInfoService), router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)) => {
  return notifyInfoService.isCoarConfigEnabled().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(isEnabled => isEnabled ? true : router.parseUrl('/404')));
};

/***/ }),

/***/ 90378:
/*!******************************************************!*\
  !*** ./src/app/core/data/identifier-data.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IdentifierDataService: () => (/* binding */ IdentifierDataService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 94485);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 84975);
/* harmony import */ var _shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/notifications/notifications.service */ 69472);
/* harmony import */ var _cache_builders_remote_data_build_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cache/builders/remote-data-build.service */ 76799);
/* harmony import */ var _cache_object_cache_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cache/object-cache.service */ 41684);
/* harmony import */ var _shared_hal_endpoint_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/hal-endpoint.service */ 4910);
/* harmony import */ var _shared_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/operators */ 55757);
/* harmony import */ var _shared_request_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/request.operators */ 91098);
/* harmony import */ var _base_base_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./base/base-data.service */ 49802);
/* harmony import */ var _configuration_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./configuration-data.service */ 8917);
/* harmony import */ var _default_change_analyzer_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./default-change-analyzer.service */ 55897);
/* harmony import */ var _request_models__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./request.models */ 44446);
/* harmony import */ var _request_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./request.service */ 32473);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngrx/store */ 99797);
























/**
 * The service handling all REST requests to get item identifiers like handles and DOIs
 * from the /identifiers endpoint, as well as the backend configuration that controls whether a 'Register DOI'
 * button appears for admins in the item status page
 */
class IdentifierDataService extends _base_base_data_service__WEBPACK_IMPORTED_MODULE_6__.BaseDataService {
  constructor(comparator, halService, http, notificationsService, objectCache, rdbService, requestService, store, configurationService) {
    super('identifiers', requestService, rdbService, objectCache, halService);
    this.comparator = comparator;
    this.halService = halService;
    this.http = http;
    this.notificationsService = notificationsService;
    this.objectCache = objectCache;
    this.rdbService = rdbService;
    this.requestService = requestService;
    this.store = store;
    this.configurationService = configurationService;
  }
  /**
   * Returns {@link RemoteData} of {@link IdentifierData} representing identifiers for this item
   * @param item  Item we are querying
   */
  getIdentifierDataFor(item) {
    return this.findByHref(item._links.identifiers.href, false, true);
  }
  /**
   * Should we allow registration of new DOIs via the item status page?
   */
  getIdentifierRegistrationConfiguration() {
    return this.configurationService.findByPropertyName('identifiers.item-status.register-doi').pipe((0,_shared_operators__WEBPACK_IMPORTED_MODULE_4__.getFirstCompletedRemoteData)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(propertyRD => propertyRD.hasSucceeded ? propertyRD.payload.values : []));
  }
  registerIdentifier(item, type) {
    const requestId = this.requestService.generateRequestId();
    return this.getEndpoint().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(endpointURL => {
      const options = Object.create({});
      let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpHeaders();
      headers = headers.append('Content-Type', 'text/uri-list');
      options.headers = headers;
      let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpParams();
      params = params.append('type', type);
      options.params = params;
      return new _request_models__WEBPACK_IMPORTED_MODULE_9__.PostRequest(requestId, endpointURL, item._links.self.href, options);
    }), (0,_shared_request_operators__WEBPACK_IMPORTED_MODULE_5__.sendRequest)(this.requestService), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.switchMap)(request => this.rdbService.buildFromRequestUUID(request.uuid)));
  }
  static {
    this.ɵfac = function IdentifierDataService_Factory(t) {
      return new (t || IdentifierDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_default_change_analyzer_service__WEBPACK_IMPORTED_MODULE_8__.DefaultChangeAnalyzer), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_shared_hal_endpoint_service__WEBPACK_IMPORTED_MODULE_3__.HALEndpointService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_0__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_cache_object_cache_service__WEBPACK_IMPORTED_MODULE_2__.ObjectCacheService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_cache_builders_remote_data_build_service__WEBPACK_IMPORTED_MODULE_1__.RemoteDataBuildService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_request_service__WEBPACK_IMPORTED_MODULE_10__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_15__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_configuration_data_service__WEBPACK_IMPORTED_MODULE_7__.ConfigurationDataService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjectable"]({
      token: IdentifierDataService,
      factory: IdentifierDataService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 11122:
/*!********************************************************!*\
  !*** ./src/app/core/data/item-request-data.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ItemRequestDataService: () => (/* binding */ ItemRequestDataService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 94485);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 85687);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 47386);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 64785);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/empty.util */ 82777);
/* harmony import */ var _cache_builders_remote_data_build_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cache/builders/remote-data-build.service */ 76799);
/* harmony import */ var _cache_object_cache_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cache/object-cache.service */ 41684);
/* harmony import */ var _shared_hal_endpoint_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/hal-endpoint.service */ 4910);
/* harmony import */ var _shared_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/operators */ 55757);
/* harmony import */ var _shared_request_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/request.operators */ 91098);
/* harmony import */ var _base_identifiable_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./base/identifiable-data.service */ 63897);
/* harmony import */ var _request_models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./request.models */ 44446);
/* harmony import */ var _request_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./request.service */ 32473);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 90310);
















/**
 * A service responsible for fetching/sending data from/to the REST API on the itemrequests endpoint
 */
class ItemRequestDataService extends _base_identifiable_data_service__WEBPACK_IMPORTED_MODULE_6__.IdentifiableDataService {
  constructor(requestService, rdbService, objectCache, halService) {
    super('itemrequests', requestService, rdbService, objectCache, halService);
    this.requestService = requestService;
    this.rdbService = rdbService;
    this.objectCache = objectCache;
    this.halService = halService;
  }
  getItemRequestEndpoint() {
    return this.halService.getEndpoint(this.linkPath);
  }
  /**
   * Get the endpoint for an {@link ItemRequest} by their token
   * @param token
   */
  getItemRequestEndpointByToken(token) {
    return this.halService.getEndpoint(this.linkPath).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.filter)(href => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_0__.isNotEmpty)(href)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(href => `${href}/${token}`));
  }
  /**
   * Request a copy of an item
   * @param itemRequest
   */
  requestACopy(itemRequest) {
    const requestId = this.requestService.generateRequestId();
    const href$ = this.getItemRequestEndpoint();
    href$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.find)(href => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_0__.hasValue)(href)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(href => {
      const request = new _request_models__WEBPACK_IMPORTED_MODULE_7__.PostRequest(requestId, href, itemRequest);
      this.requestService.send(request);
    })).subscribe();
    return this.rdbService.buildFromRequestUUID(requestId).pipe((0,_shared_operators__WEBPACK_IMPORTED_MODULE_4__.getFirstCompletedRemoteData)());
  }
  /**
   * Deny the request of an item
   * @param token Token of the {@link ItemRequest}
   * @param email Email to send back to the user requesting the item
   */
  deny(token, email) {
    return this.process(token, email, false);
  }
  /**
   * Grant the request of an item
   * @param token Token of the {@link ItemRequest}
   * @param email Email to send back to the user requesting the item
   * @param suggestOpenAccess Whether or not to suggest the item to become open access
   */
  grant(token, email, suggestOpenAccess = false) {
    return this.process(token, email, true, suggestOpenAccess);
  }
  /**
   * Process the request of an item
   * @param token Token of the {@link ItemRequest}
   * @param email Email to send back to the user requesting the item
   * @param grant Grant or deny the request (true = grant, false = deny)
   * @param suggestOpenAccess Whether or not to suggest the item to become open access
   */
  process(token, email, grant, suggestOpenAccess = false) {
    const requestId = this.requestService.generateRequestId();
    this.getItemRequestEndpointByToken(token).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(endpointURL => {
      const options = Object.create({});
      let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpHeaders();
      headers = headers.append('Content-Type', 'application/json');
      options.headers = headers;
      return new _request_models__WEBPACK_IMPORTED_MODULE_7__.PutRequest(requestId, endpointURL, JSON.stringify({
        acceptRequest: grant,
        responseMessage: email.message,
        subject: email.subject,
        suggestOpenAccess
      }), options);
    }), (0,_shared_request_operators__WEBPACK_IMPORTED_MODULE_5__.sendRequest)(this.requestService)).subscribe();
    return this.rdbService.buildFromRequestUUID(requestId);
  }
  static {
    this.ɵfac = function ItemRequestDataService_Factory(t) {
      return new (t || ItemRequestDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_request_service__WEBPACK_IMPORTED_MODULE_8__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_cache_builders_remote_data_build_service__WEBPACK_IMPORTED_MODULE_1__.RemoteDataBuildService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_cache_object_cache_service__WEBPACK_IMPORTED_MODULE_2__.ObjectCacheService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_shared_hal_endpoint_service__WEBPACK_IMPORTED_MODULE_3__.HALEndpointService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjectable"]({
      token: ItemRequestDataService,
      factory: ItemRequestDataService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 10241:
/*!********************************************************!*\
  !*** ./src/app/core/feedback/feedback-data.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeedbackDataService: () => (/* binding */ FeedbackDataService)
/* harmony export */ });
/* harmony import */ var _shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/notifications/notifications.service */ 69472);
/* harmony import */ var _cache_builders_remote_data_build_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cache/builders/remote-data-build.service */ 76799);
/* harmony import */ var _cache_object_cache_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cache/object-cache.service */ 41684);
/* harmony import */ var _data_base_create_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/base/create-data */ 39280);
/* harmony import */ var _data_base_identifiable_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/base/identifiable-data.service */ 63897);
/* harmony import */ var _data_request_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/request.service */ 32473);
/* harmony import */ var _shared_hal_endpoint_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/hal-endpoint.service */ 4910);
/* harmony import */ var _shared_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/operators */ 55757);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ 99797);
















/**
 * Service for checking and managing the feedback
 */
class FeedbackDataService extends _data_base_identifiable_data_service__WEBPACK_IMPORTED_MODULE_4__.IdentifiableDataService {
  constructor(requestService, rdbService, store, objectCache, halService, notificationsService) {
    super('feedbacks', requestService, rdbService, objectCache, halService);
    this.requestService = requestService;
    this.rdbService = rdbService;
    this.store = store;
    this.objectCache = objectCache;
    this.halService = halService;
    this.notificationsService = notificationsService;
    this.createData = new _data_base_create_data__WEBPACK_IMPORTED_MODULE_3__.CreateDataImpl(this.linkPath, requestService, rdbService, objectCache, halService, notificationsService, this.responseMsToLive);
  }
  /**
   * Get feedback from its id
   * @param uuid string the id of the feedback
   */
  getFeedback(uuid) {
    return this.findById(uuid).pipe((0,_shared_operators__WEBPACK_IMPORTED_MODULE_7__.getFirstSucceededRemoteData)(), (0,_shared_operators__WEBPACK_IMPORTED_MODULE_7__.getRemoteDataPayload)());
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
  static {
    this.ɵfac = function FeedbackDataService_Factory(t) {
      return new (t || FeedbackDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_data_request_service__WEBPACK_IMPORTED_MODULE_5__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_cache_builders_remote_data_build_service__WEBPACK_IMPORTED_MODULE_1__.RemoteDataBuildService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_9__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_cache_object_cache_service__WEBPACK_IMPORTED_MODULE_2__.ObjectCacheService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_shared_hal_endpoint_service__WEBPACK_IMPORTED_MODULE_6__.HALEndpointService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_0__.NotificationsService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
      token: FeedbackDataService,
      factory: FeedbackDataService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 52326:
/*!**********************************************************!*\
  !*** ./src/app/core/orcid/orcid-history-data.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrcidHistoryDataService: () => (/* binding */ OrcidHistoryDataService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 94485);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 84975);
/* harmony import */ var _cache_builders_remote_data_build_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cache/builders/remote-data-build.service */ 76799);
/* harmony import */ var _cache_object_cache_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cache/object-cache.service */ 41684);
/* harmony import */ var _data_base_identifiable_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/base/identifiable-data.service */ 63897);
/* harmony import */ var _data_request_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/request.models */ 44446);
/* harmony import */ var _data_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/request.service */ 32473);
/* harmony import */ var _shared_hal_endpoint_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/hal-endpoint.service */ 4910);
/* harmony import */ var _shared_request_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/request.operators */ 91098);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 90310);














/**
 * A service that provides methods to make REST requests with Orcid History endpoint.
 */
class OrcidHistoryDataService extends _data_base_identifiable_data_service__WEBPACK_IMPORTED_MODULE_2__.IdentifiableDataService {
  constructor(requestService, rdbService, objectCache, halService) {
    super('orcidhistories', requestService, rdbService, objectCache, halService, 10 * 1000);
    this.requestService = requestService;
    this.rdbService = rdbService;
    this.objectCache = objectCache;
    this.halService = halService;
  }
  sendToORCID(orcidQueue) {
    const requestId = this.requestService.generateRequestId();
    return this.getEndpoint().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(endpointURL => {
      const options = Object.create({});
      let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpHeaders();
      headers = headers.append('Content-Type', 'text/uri-list');
      options.headers = headers;
      return new _data_request_models__WEBPACK_IMPORTED_MODULE_3__.PostRequest(requestId, endpointURL, orcidQueue._links.self.href, options);
    }), (0,_shared_request_operators__WEBPACK_IMPORTED_MODULE_6__.sendRequest)(this.requestService), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(request => this.rdbService.buildFromRequestUUID(request.uuid)));
  }
  static {
    this.ɵfac = function OrcidHistoryDataService_Factory(t) {
      return new (t || OrcidHistoryDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_data_request_service__WEBPACK_IMPORTED_MODULE_4__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_cache_builders_remote_data_build_service__WEBPACK_IMPORTED_MODULE_0__.RemoteDataBuildService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_cache_object_cache_service__WEBPACK_IMPORTED_MODULE_1__.ObjectCacheService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_shared_hal_endpoint_service__WEBPACK_IMPORTED_MODULE_5__.HALEndpointService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjectable"]({
      token: OrcidHistoryDataService,
      factory: OrcidHistoryDataService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 53067:
/*!********************************************************!*\
  !*** ./src/app/core/orcid/orcid-queue-data.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrcidQueueDataService: () => (/* binding */ OrcidQueueDataService)
/* harmony export */ });
/* harmony import */ var _shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/notifications/notifications.service */ 69472);
/* harmony import */ var _cache_builders_remote_data_build_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cache/builders/remote-data-build.service */ 76799);
/* harmony import */ var _cache_models_request_param_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cache/models/request-param.model */ 53954);
/* harmony import */ var _cache_object_cache_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cache/object-cache.service */ 41684);
/* harmony import */ var _data_base_delete_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/base/delete-data */ 13617);
/* harmony import */ var _data_base_identifiable_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/base/identifiable-data.service */ 63897);
/* harmony import */ var _data_base_search_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data/base/search-data */ 35108);
/* harmony import */ var _data_request_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../data/request.service */ 32473);
/* harmony import */ var _shared_hal_endpoint_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/hal-endpoint.service */ 4910);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 90310);















/**
 * A service that provides methods to make REST requests with Orcid Queue endpoint.
 */
class OrcidQueueDataService extends _data_base_identifiable_data_service__WEBPACK_IMPORTED_MODULE_5__.IdentifiableDataService {
  constructor(requestService, rdbService, objectCache, halService, notificationsService) {
    super('orcidqueues', requestService, rdbService, objectCache, halService, 10 * 1000);
    this.requestService = requestService;
    this.rdbService = rdbService;
    this.objectCache = objectCache;
    this.halService = halService;
    this.notificationsService = notificationsService;
    this.searchData = new _data_base_search_data__WEBPACK_IMPORTED_MODULE_6__.SearchDataImpl(this.linkPath, requestService, rdbService, objectCache, halService, this.responseMsToLive);
    this.deleteData = new _data_base_delete_data__WEBPACK_IMPORTED_MODULE_4__.DeleteDataImpl(this.linkPath, requestService, rdbService, objectCache, halService, notificationsService, this.responseMsToLive, this.constructIdEndpoint);
  }
  /**
   * @param itemId                      It represent an Id of profileItem
   * @param paginationOptions           The pagination options object
   * @param useCachedVersionIfAvailable If this is true, the request will only be sent if there's
   *                                    no valid cached version. Defaults to true
   * @param reRequestOnStale            Whether or not the request should automatically be re-
   *                                    requested after the response becomes stale
   * @returns { OrcidQueue }
   */
  searchByProfileItemId(itemId, paginationOptions, useCachedVersionIfAvailable = true, reRequestOnStale = true) {
    return this.searchData.searchBy('findByProfileItem', {
      searchParams: [new _cache_models_request_param_model__WEBPACK_IMPORTED_MODULE_2__.RequestParam('profileItemId', itemId)],
      elementsPerPage: paginationOptions.pageSize,
      currentPage: paginationOptions.currentPage
    }, useCachedVersionIfAvailable, reRequestOnStale);
  }
  /**
   * @param orcidQueueId represents a id of orcid queue
   * @returns { NoContent }
   */
  deleteById(orcidQueueId) {
    return this.deleteData.delete(orcidQueueId.toString());
  }
  /**
   * This method will set linkPath to stale
   */
  clearFindByProfileItemRequests() {
    this.requestService.setStaleByHrefSubstring(this.linkPath + '/search/findByProfileItem');
  }
  static {
    this.ɵfac = function OrcidQueueDataService_Factory(t) {
      return new (t || OrcidQueueDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_data_request_service__WEBPACK_IMPORTED_MODULE_7__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_cache_builders_remote_data_build_service__WEBPACK_IMPORTED_MODULE_1__.RemoteDataBuildService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_cache_object_cache_service__WEBPACK_IMPORTED_MODULE_3__.ObjectCacheService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_shared_hal_endpoint_service__WEBPACK_IMPORTED_MODULE_8__.HALEndpointService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_0__.NotificationsService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
      token: OrcidQueueDataService,
      factory: OrcidQueueDataService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 41516:
/*!**************************************************************!*\
  !*** ./src/app/core/statistics/usage-report-data.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UsageReportDataService: () => (/* binding */ UsageReportDataService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var _cache_builders_remote_data_build_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cache/builders/remote-data-build.service */ 76799);
/* harmony import */ var _cache_models_request_param_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cache/models/request-param.model */ 53954);
/* harmony import */ var _cache_object_cache_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cache/object-cache.service */ 41684);
/* harmony import */ var _data_base_identifiable_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/base/identifiable-data.service */ 63897);
/* harmony import */ var _data_base_search_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/base/search-data */ 35108);
/* harmony import */ var _data_request_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/request.service */ 32473);
/* harmony import */ var _shared_hal_endpoint_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/hal-endpoint.service */ 4910);
/* harmony import */ var _shared_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/operators */ 55757);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 90310);














/**
 * A service to retrieve {@link UsageReport}s from the REST API
 */
class UsageReportDataService extends _data_base_identifiable_data_service__WEBPACK_IMPORTED_MODULE_3__.IdentifiableDataService {
  constructor(requestService, rdbService, halService, objectCache) {
    super('usagereports', requestService, rdbService, objectCache, halService);
    this.requestService = requestService;
    this.rdbService = rdbService;
    this.halService = halService;
    this.objectCache = objectCache;
    this.searchData = new _data_base_search_data__WEBPACK_IMPORTED_MODULE_4__.SearchDataImpl(this.linkPath, requestService, rdbService, objectCache, halService, this.responseMsToLive);
  }
  getStatistic(scope, type) {
    return this.findById(`${scope}_${type}`).pipe((0,_shared_operators__WEBPACK_IMPORTED_MODULE_7__.getFirstSucceededRemoteData)(), (0,_shared_operators__WEBPACK_IMPORTED_MODULE_7__.getRemoteDataPayload)());
  }
  searchStatistics(uri, page, size) {
    return this.searchBy('object', {
      searchParams: [new _cache_models_request_param_model__WEBPACK_IMPORTED_MODULE_1__.RequestParam('uri', uri)],
      currentPage: page,
      elementsPerPage: size
    }, true, false).pipe((0,_shared_operators__WEBPACK_IMPORTED_MODULE_7__.getFirstSucceededRemoteData)(), (0,_shared_operators__WEBPACK_IMPORTED_MODULE_7__.getRemoteDataPayload)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(list => list.page));
  }
  searchBy(searchMethod, options, useCachedVersionIfAvailable, reRequestOnStale, ...linksToFollow) {
    return this.searchData.searchBy(searchMethod, options, useCachedVersionIfAvailable, reRequestOnStale, ...linksToFollow);
  }
  static {
    this.ɵfac = function UsageReportDataService_Factory(t) {
      return new (t || UsageReportDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_data_request_service__WEBPACK_IMPORTED_MODULE_5__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_cache_builders_remote_data_build_service__WEBPACK_IMPORTED_MODULE_0__.RemoteDataBuildService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_shared_hal_endpoint_service__WEBPACK_IMPORTED_MODULE_6__.HALEndpointService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_cache_object_cache_service__WEBPACK_IMPORTED_MODULE_2__.ObjectCacheService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
      token: UsageReportDataService,
      factory: UsageReportDataService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 56273:
/*!********************************************!*\
  !*** ./src/app/item-page/item.resolver.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getItemPageLinksToFollow: () => (/* binding */ getItemPageLinksToFollow),
/* harmony export */   itemResolver: () => (/* binding */ itemResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ 99797);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 88280);
/* harmony import */ var _core_data_item_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/data/item-data.service */ 29326);
/* harmony import */ var _core_resolving_resolver_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/resolving/resolver.actions */ 81225);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/shared/operators */ 55757);
/* harmony import */ var _shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/utils/follow-link-config.model */ 67600);







/**
 * The self links defined in this list are expected to be requested somewhere in the near future
 * Requesting them as embeds will limit the number of requests
 */
function getItemPageLinksToFollow() {
  const followLinks = [(0,_shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_4__.followLink)('owningCollection', {}, (0,_shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_4__.followLink)('parentCommunity', {}, (0,_shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_4__.followLink)('parentCommunity'))), (0,_shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_4__.followLink)('relationships'), (0,_shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_4__.followLink)('version', {}, (0,_shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_4__.followLink)('versionhistory')), (0,_shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_4__.followLink)('thumbnail')];
  if (_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.item.showAccessStatuses) {
    followLinks.push((0,_shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_4__.followLink)('accessStatus'));
  }
  return followLinks;
}
const itemResolver = (route, state, itemService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_core_data_item_data_service__WEBPACK_IMPORTED_MODULE_1__.ItemDataService), store = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.Store)) => {
  const itemRD$ = itemService.findById(route.params.id, true, false, ...getItemPageLinksToFollow()).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_3__.getFirstCompletedRemoteData)());
  itemRD$.subscribe(itemRD => {
    store.dispatch(new _core_resolving_resolver_actions__WEBPACK_IMPORTED_MODULE_2__.ResolvedAction(state.url, itemRD.payload));
  });
  return itemRD$;
};

/***/ }),

/***/ 43039:
/*!************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/combineLatest.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   combineLatest: () => (/* binding */ combineLatest)
/* harmony export */ });
/* harmony import */ var _observable_combineLatest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../observable/combineLatest */ 27639);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/lift */ 92411);
/* harmony import */ var _util_argsOrArgArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/argsOrArgArray */ 2863);
/* harmony import */ var _util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/mapOneOrManyArgs */ 77915);
/* harmony import */ var _util_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/pipe */ 84362);
/* harmony import */ var _util_args__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/args */ 3851);






function combineLatest(...args) {
  const resultSelector = (0,_util_args__WEBPACK_IMPORTED_MODULE_0__.popResultSelector)(args);
  return resultSelector ? (0,_util_pipe__WEBPACK_IMPORTED_MODULE_1__.pipe)(combineLatest(...args), (0,_util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_2__.mapOneOrManyArgs)(resultSelector)) : (0,_util_lift__WEBPACK_IMPORTED_MODULE_3__.operate)((source, subscriber) => {
    (0,_observable_combineLatest__WEBPACK_IMPORTED_MODULE_4__.combineLatestInit)([source, ...(0,_util_argsOrArgArray__WEBPACK_IMPORTED_MODULE_5__.argsOrArgArray)(args)])(subscriber);
  });
}

/***/ }),

/***/ 63268:
/*!****************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/combineLatestWith.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   combineLatestWith: () => (/* binding */ combineLatestWith)
/* harmony export */ });
/* harmony import */ var _combineLatest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./combineLatest */ 43039);

function combineLatestWith(...otherSources) {
  return (0,_combineLatest__WEBPACK_IMPORTED_MODULE_0__.combineLatest)(...otherSources);
}

/***/ })

}]);
//# sourceMappingURL=common.js.map