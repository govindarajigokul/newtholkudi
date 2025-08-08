"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_app_shared_subscriptions_subscriptions-data_service_ts"],{

/***/ 62355:
/*!********************************************************************!*\
  !*** ./src/app/shared/subscriptions/subscriptions-data.service.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SubscriptionsDataService: () => (/* binding */ SubscriptionsDataService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 78374);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 84975);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 85687);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs/operators */ 64785);
/* harmony import */ var src_app_core_shared_request_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/shared/request.operators */ 91098);
/* harmony import */ var _core_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/breadcrumbs/dso-name.service */ 96526);
/* harmony import */ var _core_cache_builders_remote_data_build_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/cache/builders/remote-data-build.service */ 76799);
/* harmony import */ var _core_cache_models_request_param_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/cache/models/request-param.model */ 53954);
/* harmony import */ var _core_cache_object_cache_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/cache/object-cache.service */ 41684);
/* harmony import */ var _core_data_base_delete_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/data/base/delete-data */ 13617);
/* harmony import */ var _core_data_base_identifiable_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/data/base/identifiable-data.service */ 63897);
/* harmony import */ var _core_data_base_search_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/data/base/search-data */ 35108);
/* harmony import */ var _core_data_dso_change_analyzer_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/data/dso-change-analyzer.service */ 12598);
/* harmony import */ var _core_data_find_list_options_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/data/find-list-options.model */ 41023);
/* harmony import */ var _core_data_request_models__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/data/request.models */ 44446);
/* harmony import */ var _core_data_request_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../core/data/request.service */ 32473);
/* harmony import */ var _core_shared_hal_endpoint_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../core/shared/hal-endpoint.service */ 4910);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../core/shared/operators */ 55757);
/* harmony import */ var _empty_util__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../empty.util */ 82777);
/* harmony import */ var _notifications_notifications_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../notifications/notifications.service */ 69472);
/* harmony import */ var _utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../utils/follow-link-config.model */ 67600);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common/http */ 94485);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ngrx/store */ 99797);






























/**
 * Provides methods to retrieve subscription resources from the REST API related CRUD actions.
 */
class SubscriptionsDataService extends _core_data_base_identifiable_data_service__WEBPACK_IMPORTED_MODULE_6__.IdentifiableDataService {
  constructor(comparator, http, notificationsService, requestService, rdbService, store, objectCache, halService, nameService) {
    super('subscriptions', requestService, rdbService, objectCache, halService);
    this.comparator = comparator;
    this.http = http;
    this.notificationsService = notificationsService;
    this.requestService = requestService;
    this.rdbService = rdbService;
    this.store = store;
    this.objectCache = objectCache;
    this.halService = halService;
    this.nameService = nameService;
    this.findByEpersonLinkPath = 'findByEPerson';
    this.searchData = new _core_data_base_search_data__WEBPACK_IMPORTED_MODULE_7__.SearchDataImpl(this.linkPath, requestService, rdbService, objectCache, halService, this.responseMsToLive);
    this.deleteData = new _core_data_base_delete_data__WEBPACK_IMPORTED_MODULE_5__.DeleteDataImpl(this.linkPath, requestService, rdbService, objectCache, halService, notificationsService, this.responseMsToLive, this.constructIdEndpoint);
  }
  /**
   * Get subscriptions for a given item or community or collection & eperson.
   *
   * @param eperson The eperson to search for
   * @param uuid The uuid of the dsobjcet to search for
   */
  getSubscriptionsByPersonDSO(eperson, uuid) {
    const optionsWithObject = Object.assign(new _core_data_find_list_options_model__WEBPACK_IMPORTED_MODULE_9__.FindListOptions(), {
      searchParams: [new _core_cache_models_request_param_model__WEBPACK_IMPORTED_MODULE_3__.RequestParam('resource', uuid), new _core_cache_models_request_param_model__WEBPACK_IMPORTED_MODULE_3__.RequestParam('eperson_id', eperson)]
    });
    return this.searchData.searchBy('findByEPersonAndDso', optionsWithObject, false, true);
  }
  /**
   * Create a subscription for a given item or community or collection.
   *
   * @param subscription The subscription to create
   * @param ePerson The ePerson to create for
   * @param uuid The uuid of the dsobjcet to create for
   */
  createSubscription(subscription, ePerson, uuid) {
    return this.halService.getEndpoint(this.linkPath).pipe((0,_empty_util__WEBPACK_IMPORTED_MODULE_14__.isNotEmptyOperator)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.map)(endpointUrl => `${endpointUrl}?resource=${uuid}&eperson_id=${ePerson}`), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.map)(endpointURL => new _core_data_request_models__WEBPACK_IMPORTED_MODULE_10__.CreateRequest(this.requestService.generateRequestId(), endpointURL, JSON.stringify(subscription))), (0,src_app_core_shared_request_operators__WEBPACK_IMPORTED_MODULE_0__.sendRequest)(this.requestService), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.switchMap)(restRequest => this.rdbService.buildFromRequestUUID(restRequest.uuid)), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_13__.getFirstCompletedRemoteData)());
  }
  /**
   * Update a subscription for a given item or community or collection.
   *
   * @param subscription The subscription to update
   * @param ePerson The ePerson to update for
   * @param uuid The uuid of the dsobjcet to update for
   */
  updateSubscription(subscription, ePerson, uuid) {
    return this.halService.getEndpoint(this.linkPath).pipe((0,_empty_util__WEBPACK_IMPORTED_MODULE_14__.isNotEmptyOperator)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.map)(endpointUrl => `${endpointUrl}/${subscription.id}?resource=${uuid}&eperson_id=${ePerson}`), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.map)(endpointURL => new _core_data_request_models__WEBPACK_IMPORTED_MODULE_10__.PutRequest(this.requestService.generateRequestId(), endpointURL, JSON.stringify(subscription))), (0,src_app_core_shared_request_operators__WEBPACK_IMPORTED_MODULE_0__.sendRequest)(this.requestService), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.switchMap)(restRequest => this.rdbService.buildFromRequestUUID(restRequest.uuid)), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_13__.getFirstCompletedRemoteData)());
  }
  /**
   * Deletes the subscription with a give id
   *
   * @param id  the id of Subscription to delete
   */
  deleteSubscription(id) {
    return this.halService.getEndpoint(this.linkPath).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.filter)(href => (0,_empty_util__WEBPACK_IMPORTED_MODULE_14__.isNotEmpty)(href)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.switchMap)(endpointUrl => this.deleteData.delete(id)), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_13__.getFirstCompletedRemoteData)());
  }
  /**
   * Retrieves the list of subscription with {@link dSpaceObject} and {@link ePerson}
   *
   * @param options                     options for the find all request
   */
  findAllSubscriptions(options) {
    return this.findAllData.findAll(options, true, true, (0,_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_16__.followLink)('resource'), (0,_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_16__.followLink)('eperson'));
  }
  /**
   * Retrieves the list of subscription with {@link dSpaceObject} and {@link ePerson}
   *
   * @param ePersonId  The eperson id
   * @param options    The options for the find all request
   */
  findByEPerson(ePersonId, options) {
    const optionsWithObject = Object.assign(new _core_data_find_list_options_model__WEBPACK_IMPORTED_MODULE_9__.FindListOptions(), options, {
      searchParams: [new _core_cache_models_request_param_model__WEBPACK_IMPORTED_MODULE_3__.RequestParam('uuid', ePersonId)]
    });
    // return this.searchData.searchBy(this.findByEpersonLinkPath, optionsWithObject, true, true, followLink('dSpaceObject'), followLink('ePerson'));
    return this.getEndpoint().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.map)(href => `${href}/search/${this.findByEpersonLinkPath}`), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.switchMap)(href => this.findListByHref(href, optionsWithObject, false, true, (0,_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_16__.followLink)('resource'), (0,_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_16__.followLink)('eperson'))));
  }
  static {
    this.ɵfac = function SubscriptionsDataService_Factory(t) {
      return new (t || SubscriptionsDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵinject"](_core_data_dso_change_analyzer_service__WEBPACK_IMPORTED_MODULE_8__.DSOChangeAnalyzer), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_23__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵinject"](_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_15__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵinject"](_core_data_request_service__WEBPACK_IMPORTED_MODULE_11__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵinject"](_core_cache_builders_remote_data_build_service__WEBPACK_IMPORTED_MODULE_2__.RemoteDataBuildService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_24__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵinject"](_core_cache_object_cache_service__WEBPACK_IMPORTED_MODULE_4__.ObjectCacheService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵinject"](_core_shared_hal_endpoint_service__WEBPACK_IMPORTED_MODULE_12__.HALEndpointService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵinject"](_core_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_1__.DSONameService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineInjectable"]({
      token: SubscriptionsDataService,
      factory: SubscriptionsDataService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_shared_subscriptions_subscriptions-data_service_ts.js.map