"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_app_core_data_version-data_service_ts"],{

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

/***/ })

}]);
//# sourceMappingURL=src_app_core_data_version-data_service_ts.js.map