"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["default-src_app_core_resource-policy_resource-policy-data_service_ts"],{

/***/ 25521:
/*!**********************************************************************!*\
  !*** ./src/app/core/resource-policy/resource-policy-data.service.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResourcePolicyDataService: () => (/* binding */ ResourcePolicyDataService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common/http */ 94485);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs/operators */ 46891);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/empty.util */ 82777);
/* harmony import */ var _shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/notifications/notifications.service */ 69472);
/* harmony import */ var _cache_builders_remote_data_build_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cache/builders/remote-data-build.service */ 76799);
/* harmony import */ var _cache_models_request_param_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cache/models/request-param.model */ 53954);
/* harmony import */ var _cache_object_cache_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cache/object-cache.service */ 41684);
/* harmony import */ var _data_base_create_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/base/create-data */ 39280);
/* harmony import */ var _data_base_delete_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data/base/delete-data */ 13617);
/* harmony import */ var _data_base_identifiable_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../data/base/identifiable-data.service */ 63897);
/* harmony import */ var _data_base_patch_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../data/base/patch-data */ 87158);
/* harmony import */ var _data_base_search_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../data/base/search-data */ 35108);
/* harmony import */ var _data_default_change_analyzer_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../data/default-change-analyzer.service */ 55897);
/* harmony import */ var _data_find_list_options_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../data/find-list-options.model */ 41023);
/* harmony import */ var _data_request_models__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../data/request.models */ 44446);
/* harmony import */ var _data_request_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../data/request.service */ 32473);
/* harmony import */ var _data_status_code_only_response_parsing_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../data/status-code-only-response-parsing.service */ 14410);
/* harmony import */ var _eperson_eperson_data_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../eperson/eperson-data.service */ 74449);
/* harmony import */ var _eperson_group_data_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../eperson/group-data.service */ 44494);
/* harmony import */ var _shared_hal_endpoint_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../shared/hal-endpoint.service */ 4910);
/* harmony import */ var _shared_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../shared/operators */ 55757);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ 90310);






























/**
 * A service responsible for fetching/sending data from/to the REST API on the resourcepolicies endpoint
 */
class ResourcePolicyDataService extends _data_base_identifiable_data_service__WEBPACK_IMPORTED_MODULE_7__.IdentifiableDataService {
  constructor(requestService, rdbService, objectCache, halService, notificationsService, comparator, ePersonService, groupService) {
    super('resourcepolicies', requestService, rdbService, objectCache, halService);
    this.requestService = requestService;
    this.rdbService = rdbService;
    this.objectCache = objectCache;
    this.halService = halService;
    this.notificationsService = notificationsService;
    this.comparator = comparator;
    this.ePersonService = ePersonService;
    this.groupService = groupService;
    this.searchByEPersonMethod = 'eperson';
    this.searchByGroupMethod = 'group';
    this.searchByResourceMethod = 'resource';
    this.createData = new _data_base_create_data__WEBPACK_IMPORTED_MODULE_5__.CreateDataImpl(this.linkPath, requestService, rdbService, objectCache, halService, notificationsService, this.responseMsToLive);
    this.searchData = new _data_base_search_data__WEBPACK_IMPORTED_MODULE_9__.SearchDataImpl(this.linkPath, requestService, rdbService, objectCache, halService, this.responseMsToLive);
    this.patchData = new _data_base_patch_data__WEBPACK_IMPORTED_MODULE_8__.PatchDataImpl(this.linkPath, requestService, rdbService, objectCache, halService, comparator, this.responseMsToLive, this.constructIdEndpoint);
    this.deleteData = new _data_base_delete_data__WEBPACK_IMPORTED_MODULE_6__.DeleteDataImpl(this.linkPath, requestService, rdbService, objectCache, halService, notificationsService, this.responseMsToLive, this.constructIdEndpoint);
  }
  /**
   * Create a new ResourcePolicy on the server, and store the response
   * in the object cache
   *
   * @param {ResourcePolicy} resourcePolicy
   *    The resource policy to create
   * @param {string} resourceUUID
   *    The uuid of the resource target of the policy
   * @param {string} epersonUUID
   *    The uuid of the eperson that will be grant of the permission. Exactly one of eperson or group is required
   * @param {string} groupUUID
   *    The uuid of the group that will be grant of the permission. Exactly one of eperson or group is required
   */
  create(resourcePolicy, resourceUUID, epersonUUID, groupUUID) {
    const params = [];
    params.push(new _cache_models_request_param_model__WEBPACK_IMPORTED_MODULE_3__.RequestParam('resource', resourceUUID));
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_0__.isNotEmpty)(epersonUUID)) {
      params.push(new _cache_models_request_param_model__WEBPACK_IMPORTED_MODULE_3__.RequestParam('eperson', epersonUUID));
    } else if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_0__.isNotEmpty)(groupUUID)) {
      params.push(new _cache_models_request_param_model__WEBPACK_IMPORTED_MODULE_3__.RequestParam('group', groupUUID));
    }
    return this.createData.create(resourcePolicy, ...params);
  }
  /**
   * Delete an existing ResourcePolicy on the server
   *
   * @param resourcePolicyID The resource policy's id to be removed
   * @return an observable that emits true when the deletion was successful, false when it failed
   */
  delete(resourcePolicyID) {
    return this.deleteData.delete(resourcePolicyID).pipe((0,_shared_operators__WEBPACK_IMPORTED_MODULE_18__.getFirstCompletedRemoteData)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.map)(response => response.hasSucceeded));
  }
  /**
   * Add a new patch to the object cache
   * The patch is derived from the differences between the given object and its version in the object cache
   * @param {ResourcePolicy} object The given object
   */
  update(object) {
    return this.patchData.update(object);
  }
  /**
   * Return the defaultAccessConditions {@link ResourcePolicy} list for a given {@link Collection}
   *
   * @param collection the {@link Collection} to retrieve the defaultAccessConditions for
   * @param findListOptions the {@link FindListOptions} for the request
   */
  getDefaultAccessConditionsFor(collection, findListOptions) {
    return this.findListByHref(collection._links.defaultAccessConditions.href, findListOptions);
  }
  /**
   * Return the {@link ResourcePolicy} list for a {@link EPerson}
   *
   * @param UUID                        UUID of a given {@link EPerson}
   * @param resourceUUID                Limit the returned policies to the specified DSO
   * @param useCachedVersionIfAvailable If this is true, the request will only be sent if there's
   *                                    no valid cached version. Defaults to true
   * @param reRequestOnStale            Whether or not the request should automatically be re-
   *                                    requested after the response becomes stale
   * @param linksToFollow               List of {@link FollowLinkConfig} that indicate which
   *                                    {@link HALLink}s should be automatically resolved
   */
  searchByEPerson(UUID, resourceUUID, useCachedVersionIfAvailable = true, reRequestOnStale = true, ...linksToFollow) {
    const options = new _data_find_list_options_model__WEBPACK_IMPORTED_MODULE_11__.FindListOptions();
    options.searchParams = [new _cache_models_request_param_model__WEBPACK_IMPORTED_MODULE_3__.RequestParam('uuid', UUID)];
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_0__.isNotEmpty)(resourceUUID)) {
      options.searchParams.push(new _cache_models_request_param_model__WEBPACK_IMPORTED_MODULE_3__.RequestParam('resource', resourceUUID));
    }
    return this.searchData.searchBy(this.searchByEPersonMethod, options, useCachedVersionIfAvailable, reRequestOnStale, ...linksToFollow);
  }
  /**
   * Return the {@link ResourcePolicy} list for a {@link Group}
   *
   * @param UUID                        UUID of a given {@link Group}
   * @param resourceUUID                Limit the returned policies to the specified DSO
   * @param useCachedVersionIfAvailable If this is true, the request will only be sent if there's
   *                                    no valid cached version. Defaults to true
   * @param reRequestOnStale            Whether or not the request should automatically be re-
   *                                    requested after the response becomes stale
   * @param linksToFollow               List of {@link FollowLinkConfig} that indicate which
   *                                    {@link HALLink}s should be automatically resolved
   */
  searchByGroup(UUID, resourceUUID, useCachedVersionIfAvailable = true, reRequestOnStale = true, ...linksToFollow) {
    const options = new _data_find_list_options_model__WEBPACK_IMPORTED_MODULE_11__.FindListOptions();
    options.searchParams = [new _cache_models_request_param_model__WEBPACK_IMPORTED_MODULE_3__.RequestParam('uuid', UUID)];
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_0__.isNotEmpty)(resourceUUID)) {
      options.searchParams.push(new _cache_models_request_param_model__WEBPACK_IMPORTED_MODULE_3__.RequestParam('resource', resourceUUID));
    }
    return this.searchData.searchBy(this.searchByGroupMethod, options, useCachedVersionIfAvailable, reRequestOnStale, ...linksToFollow);
  }
  /**
   * Return the {@link ResourcePolicy} list for a given DSO
   *
   * @param UUID              UUID of a given DSO
   * @param action            Limit the returned policies to the specified {@link ActionType}
   * @param useCachedVersionIfAvailable If this is true, the request will only be sent if there's
   *                                    no valid cached version. Defaults to true
   * @param reRequestOnStale            Whether or not the request should automatically be re-
   *                                    requested after the response becomes stale
   * @param linksToFollow               List of {@link FollowLinkConfig} that indicate which
   *                                    {@link HALLink}s should be automatically resolved
   */
  searchByResource(UUID, action, useCachedVersionIfAvailable = true, reRequestOnStale = true, ...linksToFollow) {
    const options = new _data_find_list_options_model__WEBPACK_IMPORTED_MODULE_11__.FindListOptions();
    options.searchParams = [new _cache_models_request_param_model__WEBPACK_IMPORTED_MODULE_3__.RequestParam('uuid', UUID)];
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_0__.isNotEmpty)(action)) {
      options.searchParams.push(new _cache_models_request_param_model__WEBPACK_IMPORTED_MODULE_3__.RequestParam('action', action));
    }
    return this.searchData.searchBy(this.searchByResourceMethod, options, useCachedVersionIfAvailable, reRequestOnStale, ...linksToFollow);
  }
  /**
   * Update the target of the resource policy
   * @param resourcePolicyId the ID of the resource policy
   * @param resourcePolicyHref the link to the resource policy
   * @param targetUUID the UUID of the target to which the permission is being granted
   * @param targetType the type of the target (eperson or group) to which the permission is being granted
   */
  updateTarget(resourcePolicyId, resourcePolicyHref, targetUUID, targetType) {
    const targetService = targetType === 'eperson' ? this.ePersonService : this.groupService;
    const targetEndpoint$ = targetService.getIDHrefObs(targetUUID);
    const options = Object.create({});
    let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_20__.HttpHeaders();
    headers = headers.append('Content-Type', 'text/uri-list');
    options.headers = headers;
    const requestId = this.requestService.generateRequestId();
    targetEndpoint$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.first)()).subscribe(targetEndpoint => {
      const resourceEndpoint = resourcePolicyHref + '/' + targetType;
      const request = new _data_request_models__WEBPACK_IMPORTED_MODULE_12__.PutRequest(requestId, resourceEndpoint, targetEndpoint, options);
      Object.assign(request, {
        getResponseParser() {
          return _data_status_code_only_response_parsing_service__WEBPACK_IMPORTED_MODULE_14__.StatusCodeOnlyResponseParsingService;
        }
      });
      this.requestService.send(request);
    });
    return this.rdbService.buildFromRequestUUIDAndAwait(requestId, () => this.invalidateByHref(resourcePolicyHref));
  }
  static {
    this.ɵfac = function ResourcePolicyDataService_Factory(t) {
      return new (t || ResourcePolicyDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵinject"](_data_request_service__WEBPACK_IMPORTED_MODULE_13__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵinject"](_cache_builders_remote_data_build_service__WEBPACK_IMPORTED_MODULE_2__.RemoteDataBuildService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵinject"](_cache_object_cache_service__WEBPACK_IMPORTED_MODULE_4__.ObjectCacheService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵinject"](_shared_hal_endpoint_service__WEBPACK_IMPORTED_MODULE_17__.HALEndpointService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵinject"](_shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_1__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵinject"](_data_default_change_analyzer_service__WEBPACK_IMPORTED_MODULE_10__.DefaultChangeAnalyzer), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵinject"](_eperson_eperson_data_service__WEBPACK_IMPORTED_MODULE_15__.EPersonDataService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵinject"](_eperson_group_data_service__WEBPACK_IMPORTED_MODULE_16__.GroupDataService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineInjectable"]({
      token: ResourcePolicyDataService,
      factory: ResourcePolicyDataService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=default-src_app_core_resource-policy_resource-policy-data_service_ts.js.map