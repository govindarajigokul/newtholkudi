"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_app_core_config_submission-accesses-config-data_service_ts"],{

/***/ 78971:
/*!****************************************************!*\
  !*** ./src/app/core/config/config-data.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfigDataService: () => (/* binding */ ConfigDataService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var _data_base_identifiable_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/base/identifiable-data.service */ 63897);
/* harmony import */ var _shared_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/operators */ 55757);



/**
 * Abstract data service to retrieve configuration objects from the REST server.
 * Common logic for configuration objects should be implemented here.
 */
class ConfigDataService extends _data_base_identifiable_data_service__WEBPACK_IMPORTED_MODULE_0__.IdentifiableDataService {
  /**
   * Returns an observable of {@link RemoteData} of an object, based on an href, with a list of
   * {@link FollowLinkConfig}, to automatically resolve {@link HALLink}s of the object
   *
   * Throws an error if a configuration object cannot be retrieved.
   *
   * @param href                        The url of object we want to retrieve
   * @param useCachedVersionIfAvailable If this is true, the request will only be sent if there's
   *                                    no valid cached version. Defaults to true
   * @param reRequestOnStale            Whether or not the request should automatically be re-
   *                                    requested after the response becomes stale
   * @param linksToFollow               List of {@link FollowLinkConfig} that indicate which
   *                                    {@link HALLink}s should be automatically resolved
   */
  findByHref(href, useCachedVersionIfAvailable = true, reRequestOnStale = true, ...linksToFollow) {
    return super.findByHref(href, useCachedVersionIfAvailable, reRequestOnStale, ...linksToFollow).pipe((0,_shared_operators__WEBPACK_IMPORTED_MODULE_1__.getFirstCompletedRemoteData)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(rd => {
      if (rd.hasFailed) {
        throw new Error(`Couldn't retrieve the config`);
      } else {
        return rd;
      }
    }));
  }
  /**
   * Returns a config object by given name
   *
   * Throws an error if a configuration object cannot be retrieved.
   *
   * @param name                        The name of configuration to retrieve
   * @param useCachedVersionIfAvailable If this is true, the request will only be sent if there's
   *                                    no valid cached version. Defaults to true
   * @param reRequestOnStale            Whether or not the request should automatically be re-
   *                                    requested after the response becomes stale
   * @param linksToFollow               List of {@link FollowLinkConfig} that indicate which
   *                                    {@link HALLink}s should be automatically resolved
   */
  findByName(name, useCachedVersionIfAvailable = true, reRequestOnStale = true, ...linksToFollow) {
    return super.findById(name, useCachedVersionIfAvailable, reRequestOnStale, ...linksToFollow);
  }
}

/***/ }),

/***/ 4319:
/*!************************************************************************!*\
  !*** ./src/app/core/config/submission-accesses-config-data.service.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SubmissionAccessesConfigDataService: () => (/* binding */ SubmissionAccessesConfigDataService)
/* harmony export */ });
/* harmony import */ var _cache_builders_remote_data_build_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cache/builders/remote-data-build.service */ 76799);
/* harmony import */ var _cache_object_cache_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cache/object-cache.service */ 41684);
/* harmony import */ var _data_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/request.service */ 32473);
/* harmony import */ var _shared_hal_endpoint_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/hal-endpoint.service */ 4910);
/* harmony import */ var _config_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config-data.service */ 78971);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 90310);










/**
 * Provides methods to retrieve, from REST server, bitstream access conditions configurations applicable during the submission process.
 */
class SubmissionAccessesConfigDataService extends _config_data_service__WEBPACK_IMPORTED_MODULE_4__.ConfigDataService {
  constructor(requestService, rdbService, objectCache, halService) {
    super('submissionaccessoptions', requestService, rdbService, objectCache, halService);
    this.requestService = requestService;
    this.rdbService = rdbService;
    this.objectCache = objectCache;
    this.halService = halService;
  }
  /**
   * Returns an observable of {@link RemoteData} of an object, based on an href, with a list of
   * {@link FollowLinkConfig}, to automatically resolve {@link HALLink}s of the object
   *
   * Throws an error if a configuration object cannot be retrieved.
   *
   * @param href                        The url of object we want to retrieve
   * @param useCachedVersionIfAvailable If this is true, the request will only be sent if there's
   *                                    no valid cached version. Defaults to true
   * @param reRequestOnStale            Whether or not the request should automatically be re-
   *                                    requested after the response becomes stale
   * @param linksToFollow               List of {@link FollowLinkConfig} that indicate which
   *                                    {@link HALLink}s should be automatically resolved
   */
  findByHref(href, useCachedVersionIfAvailable = true, reRequestOnStale = true, ...linksToFollow) {
    return super.findByHref(href, useCachedVersionIfAvailable, reRequestOnStale, ...linksToFollow);
  }
  static {
    this.ɵfac = function SubmissionAccessesConfigDataService_Factory(t) {
      return new (t || SubmissionAccessesConfigDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_data_request_service__WEBPACK_IMPORTED_MODULE_2__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_cache_builders_remote_data_build_service__WEBPACK_IMPORTED_MODULE_0__.RemoteDataBuildService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_cache_object_cache_service__WEBPACK_IMPORTED_MODULE_1__.ObjectCacheService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_shared_hal_endpoint_service__WEBPACK_IMPORTED_MODULE_3__.HALEndpointService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
      token: SubmissionAccessesConfigDataService,
      factory: SubmissionAccessesConfigDataService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_core_config_submission-accesses-config-data_service_ts.js.map