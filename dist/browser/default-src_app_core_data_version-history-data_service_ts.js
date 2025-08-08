"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["default-src_app_core_data_version-history-data_service_ts"],{

/***/ 81783:
/*!***************************************************!*\
  !*** ./src/app/core/data/version-data.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VersionDataService: () => (/* binding */ VersionDataService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 80560);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 84975);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/empty.util */ 82777);
/* harmony import */ var _shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/utils/follow-link-config.model */ 67600);
/* harmony import */ var _cache_builders_remote_data_build_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cache/builders/remote-data-build.service */ 76799);
/* harmony import */ var _cache_object_cache_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cache/object-cache.service */ 41684);
/* harmony import */ var _shared_hal_endpoint_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/hal-endpoint.service */ 4910);
/* harmony import */ var _shared_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/operators */ 55757);
/* harmony import */ var _base_identifiable_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./base/identifiable-data.service */ 63897);
/* harmony import */ var _base_patch_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./base/patch-data */ 87158);
/* harmony import */ var _default_change_analyzer_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./default-change-analyzer.service */ 55897);
/* harmony import */ var _request_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./request.service */ 32473);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 90310);


















/**
 * Service responsible for handling requests related to the Version object
 */
class VersionDataService extends _base_identifiable_data_service__WEBPACK_IMPORTED_MODULE_6__.IdentifiableDataService {
  constructor(requestService, rdbService, objectCache, halService, comparator) {
    super('versions', requestService, rdbService, objectCache, halService);
    this.requestService = requestService;
    this.rdbService = rdbService;
    this.objectCache = objectCache;
    this.halService = halService;
    this.comparator = comparator;
    this.patchData = new _base_patch_data__WEBPACK_IMPORTED_MODULE_7__.PatchDataImpl(this.linkPath, requestService, rdbService, objectCache, halService, comparator, this.responseMsToLive, this.constructIdEndpoint);
  }
  /**
   * Get the version history for the given version
   * @param version
   * @param useCachedVersionIfAvailable If this is true, the request will only be sent if there's
   *                                    no valid cached version. Defaults to true
   * @param reRequestOnStale            Whether or not the request should automatically be re-
   *                                    requested after the response becomes stale
   */
  getHistoryFromVersion(version, useCachedVersionIfAvailable = false, reRequestOnStale = true) {
    return (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_0__.isNotEmpty)(version) ? this.findById(version.id, useCachedVersionIfAvailable, reRequestOnStale, (0,_shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_1__.followLink)('versionhistory')).pipe((0,_shared_operators__WEBPACK_IMPORTED_MODULE_5__.getFirstSucceededRemoteDataPayload)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.switchMap)(res => res.versionhistory), (0,_shared_operators__WEBPACK_IMPORTED_MODULE_5__.getFirstSucceededRemoteDataPayload)()) : rxjs__WEBPACK_IMPORTED_MODULE_11__.EMPTY;
  }
  /**
   * Get the ID of the version history for the given version
   * @param version
   */
  getHistoryIdFromVersion(version) {
    return this.getHistoryFromVersion(version).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(versionHistory => versionHistory.id));
  }
  /**
   * Send a patch request for a specified object
   * @param {T} object The object to send a patch request for
   * @param {Operation[]} operations The patch operations to be performed
   */
  patch(object, operations) {
    return this.patchData.patch(object, operations);
  }
  /**
   * Add a new patch to the object cache
   * The patch is derived from the differences between the given object and its version in the object cache
   * @param {DSpaceObject} object The given object
   */
  update(object) {
    return this.patchData.update(object);
  }
  /**
   * Commit current object changes to the server
   * @param method The RestRequestMethod for which de server sync buffer should be committed
   */
  commitUpdates(method) {
    this.patchData.commitUpdates(method);
  }
  /**
   * Return a list of operations representing the difference between an object and its latest value in the cache.
   * @param object  the object to resolve to a list of patch operations
   */
  createPatchFromCache(object) {
    return this.patchData.createPatchFromCache(object);
  }
  static {
    this.ɵfac = function VersionDataService_Factory(t) {
      return new (t || VersionDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_request_service__WEBPACK_IMPORTED_MODULE_9__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_cache_builders_remote_data_build_service__WEBPACK_IMPORTED_MODULE_2__.RemoteDataBuildService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_cache_object_cache_service__WEBPACK_IMPORTED_MODULE_3__.ObjectCacheService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_shared_hal_endpoint_service__WEBPACK_IMPORTED_MODULE_4__.HALEndpointService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_default_change_analyzer_service__WEBPACK_IMPORTED_MODULE_8__.DefaultChangeAnalyzer));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjectable"]({
      token: VersionDataService,
      factory: VersionDataService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 93860:
/*!***********************************************************!*\
  !*** ./src/app/core/data/version-history-data.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VersionHistoryDataService: () => (/* binding */ VersionHistoryDataService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 94485);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 27639);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 17796);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 84975);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 78374);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 47386);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 85687);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/empty.util */ 82777);
/* harmony import */ var _shared_pagination_pagination_component_options_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/pagination/pagination-component-options.model */ 23401);
/* harmony import */ var _shared_search_models_paginated_search_options_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/search/models/paginated-search-options.model */ 33550);
/* harmony import */ var _shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/utils/follow-link-config.model */ 67600);
/* harmony import */ var _cache_builders_remote_data_build_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cache/builders/remote-data-build.service */ 76799);
/* harmony import */ var _cache_object_cache_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../cache/object-cache.service */ 41684);
/* harmony import */ var _shared_hal_endpoint_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/hal-endpoint.service */ 4910);
/* harmony import */ var _shared_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/operators */ 55757);
/* harmony import */ var _base_identifiable_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./base/identifiable-data.service */ 63897);
/* harmony import */ var _request_models__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./request.models */ 44446);
/* harmony import */ var _request_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./request.service */ 32473);
/* harmony import */ var _version_data_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./version-data.service */ 81783);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 90310);





















/**
 * Service responsible for handling requests related to the VersionHistory object
 */
class VersionHistoryDataService extends _base_identifiable_data_service__WEBPACK_IMPORTED_MODULE_8__.IdentifiableDataService {
  constructor(requestService, rdbService, objectCache, halService, versionDataService) {
    super('versionhistories', requestService, rdbService, objectCache, halService);
    this.requestService = requestService;
    this.rdbService = rdbService;
    this.objectCache = objectCache;
    this.halService = halService;
    this.versionDataService = versionDataService;
    this.versionsEndpoint = 'versions';
  }
  /**
   * Get the endpoint for browsing versions
   */
  getBrowseEndpoint(options = {}, linkPath) {
    return this.halService.getEndpoint(this.linkPath);
  }
  /**
   * Get the versions endpoint for a version history
   * @param versionHistoryId
   */
  getVersionsEndpoint(versionHistoryId) {
    return this.getBrowseEndpoint().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.switchMap)(href => this.halService.getEndpoint(this.versionsEndpoint, `${href}/${versionHistoryId}`)));
  }
  /**
   * Get a version history's versions using paginated search options
   * @param versionHistoryId            The version history's ID
   * @param searchOptions               The search options to use
   * @param useCachedVersionIfAvailable If this is true, the request will only be sent if there's
   *                                    no valid cached version. Defaults to true
   * @param reRequestOnStale            Whether or not the request should automatically be re-
   *                                    requested after the response becomes stale
   * @param linksToFollow               List of {@link FollowLinkConfig} that indicate which
   *                                    {@link HALLink}s should be automatically resolved
   */
  getVersions(versionHistoryId, searchOptions, useCachedVersionIfAvailable = true, reRequestOnStale = true, ...linksToFollow) {
    const hrefObs = this.getVersionsEndpoint(versionHistoryId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(href => searchOptions ? searchOptions.toRestUrl(href) : href));
    return this.versionDataService.findListByHref(hrefObs, undefined, useCachedVersionIfAvailable, reRequestOnStale, ...linksToFollow);
  }
  /**
   * Create a new version for an item
   * @param itemHref the item for which create a new version
   * @param summary the summary of the new version
   */
  createVersion(itemHref, summary) {
    const requestId = this.requestService.generateRequestId();
    const requestOptions = Object.create({});
    let requestHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpHeaders();
    requestHeaders = requestHeaders.append('Content-Type', 'text/uri-list');
    requestOptions.headers = requestHeaders;
    this.halService.getEndpoint(this.versionsEndpoint).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(endpointUrl => summary?.length > 0 ? `${endpointUrl}?summary=${summary}` : `${endpointUrl}`), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.find)(href => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_0__.hasValue)(href))).subscribe(href => {
      const request = new _request_models__WEBPACK_IMPORTED_MODULE_9__.PostRequest(requestId, href, itemHref, requestOptions);
      if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_0__.hasValue)(this.responseMsToLive)) {
        request.responseMsToLive = this.responseMsToLive;
      }
      this.requestService.send(request);
    });
    return this.rdbService.buildFromRequestUUIDAndAwait(requestId, versionRD => (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.combineLatest)([this.requestService.setStaleByHrefSubstring(versionRD.payload._links.self.href), this.requestService.setStaleByHrefSubstring(versionRD.payload._links.versionhistory.href)])).pipe((0,_shared_operators__WEBPACK_IMPORTED_MODULE_7__.getFirstCompletedRemoteData)());
  }
  /**
   * Get the latest version in a version history
   * @param versionHistory
   */
  getLatestVersionFromHistory$(versionHistory) {
    // Pagination options to fetch a single version on the first page (this is the latest version in the history)
    const latestVersionOptions = Object.assign(new _shared_pagination_pagination_component_options_model__WEBPACK_IMPORTED_MODULE_1__.PaginationComponentOptions(), {
      id: 'item-newest-version-options',
      currentPage: 1,
      pageSize: 1
    });
    const latestVersionSearch = new _shared_search_models_paginated_search_options_model__WEBPACK_IMPORTED_MODULE_2__.PaginatedSearchOptions({
      pagination: latestVersionOptions
    });
    return this.getVersions(versionHistory.id, latestVersionSearch, false, true, (0,_shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_3__.followLink)('item')).pipe((0,_shared_operators__WEBPACK_IMPORTED_MODULE_7__.getAllSucceededRemoteData)(), (0,_shared_operators__WEBPACK_IMPORTED_MODULE_7__.getRemoteDataPayload)(), (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_0__.hasValueOperator)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.filter)(versions => versions.page.length > 0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(versions => versions.page[0]));
  }
  /**
   * Get the latest version (return null if the specified version is null)
   * @param version
   */
  getLatestVersion$(version) {
    // retrieve again version, including with versionHistory
    return version.id ? this.versionDataService.findById(version.id, false, true, (0,_shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_3__.followLink)('versionhistory')).pipe((0,_shared_operators__WEBPACK_IMPORTED_MODULE_7__.getFirstSucceededRemoteDataPayload)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.switchMap)(res => res.versionhistory), (0,_shared_operators__WEBPACK_IMPORTED_MODULE_7__.getFirstSucceededRemoteDataPayload)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.switchMap)(versionHistoryRD => this.getLatestVersionFromHistory$(versionHistoryRD))) : (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.of)(null);
  }
  /**
   * Check if the given version is the latest (return null if `version` is null)
   * @param version
   * @returns `true` if the specified version is the latest one, `false` otherwise, or `null` if the specified version is null
   */
  isLatest$(version) {
    return version ? this.getLatestVersion$(version).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.switchMap)(latestVersion => (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.of)(version.version === latestVersion.version))) : (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.of)(null);
  }
  /**
   * Check if a worskpace item exists in the version history (return null if there is no version history)
   * @param versionHref the href of the version
   * @returns `true` if a workspace item exists, `false` otherwise, or `null` if a version history does not exist
   */
  hasDraftVersion$(versionHref) {
    return this.versionDataService.findByHref(versionHref, false, true, (0,_shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_3__.followLink)('versionhistory')).pipe((0,_shared_operators__WEBPACK_IMPORTED_MODULE_7__.getFirstCompletedRemoteData)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.switchMap)(versionRD => {
      if (versionRD.hasSucceeded && !versionRD.hasNoContent && (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_0__.hasValue)(versionRD.payload)) {
        return versionRD.payload.versionhistory.pipe((0,_shared_operators__WEBPACK_IMPORTED_MODULE_7__.getFirstCompletedRemoteData)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(versionHistoryRD => {
          if (versionHistoryRD.hasSucceeded && !versionHistoryRD.hasNoContent) {
            return versionHistoryRD.payload.draftVersion;
          } else {
            return false;
          }
        }));
      } else {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.of)(false);
      }
    }));
  }
  /**
   * Get the item of the latest version in a version history
   * @param versionHistory
   */
  getLatestVersionItemFromHistory$(versionHistory) {
    return this.getLatestVersionFromHistory$(versionHistory).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.switchMap)(newLatestVersion => newLatestVersion.item), (0,_shared_operators__WEBPACK_IMPORTED_MODULE_7__.getFirstSucceededRemoteDataPayload)());
  }
  /**
   * Get the item of the latest version from any version in the version history
   * @param version
   */
  getVersionHistoryFromVersion$(version) {
    return this.versionDataService.getHistoryIdFromVersion(version).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.switchMap)(res => this.findById(res)), (0,_shared_operators__WEBPACK_IMPORTED_MODULE_7__.getFirstSucceededRemoteDataPayload)());
  }
  /**
   * Invalidate the cache of the version history
   * @param versionHistoryID
   */
  invalidateVersionHistoryCache(versionHistoryID) {
    this.requestService.setStaleByHrefSubstring('versioning/versionhistories/' + versionHistoryID);
  }
  static {
    this.ɵfac = function VersionHistoryDataService_Factory(t) {
      return new (t || VersionHistoryDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵinject"](_request_service__WEBPACK_IMPORTED_MODULE_10__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵinject"](_cache_builders_remote_data_build_service__WEBPACK_IMPORTED_MODULE_4__.RemoteDataBuildService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵinject"](_cache_object_cache_service__WEBPACK_IMPORTED_MODULE_5__.ObjectCacheService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵinject"](_shared_hal_endpoint_service__WEBPACK_IMPORTED_MODULE_6__.HALEndpointService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵinject"](_version_data_service__WEBPACK_IMPORTED_MODULE_11__.VersionDataService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineInjectable"]({
      token: VersionHistoryDataService,
      factory: VersionHistoryDataService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=default-src_app_core_data_version-history-data_service_ts.js.map