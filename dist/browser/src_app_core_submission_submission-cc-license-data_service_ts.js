"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_app_core_submission_submission-cc-license-data_service_ts"],{

/***/ 73138:
/*!***********************************************************************!*\
  !*** ./src/app/core/submission/submission-cc-license-data.service.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SubmissionCcLicenseDataService: () => (/* binding */ SubmissionCcLicenseDataService)
/* harmony export */ });
/* harmony import */ var _cache_builders_remote_data_build_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cache/builders/remote-data-build.service */ 76799);
/* harmony import */ var _cache_object_cache_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cache/object-cache.service */ 41684);
/* harmony import */ var _data_base_base_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/base/base-data.service */ 49802);
/* harmony import */ var _data_base_find_all_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/base/find-all-data */ 46787);
/* harmony import */ var _data_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/request.service */ 32473);
/* harmony import */ var _shared_hal_endpoint_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/hal-endpoint.service */ 4910);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 90310);











class SubmissionCcLicenseDataService extends _data_base_base_data_service__WEBPACK_IMPORTED_MODULE_2__.BaseDataService {
  constructor(requestService, rdbService, objectCache, halService) {
    super('submissioncclicenses', requestService, rdbService, objectCache, halService);
    this.requestService = requestService;
    this.rdbService = rdbService;
    this.objectCache = objectCache;
    this.halService = halService;
    this.linkPath = 'submissioncclicenses';
    this.findAllData = new _data_base_find_all_data__WEBPACK_IMPORTED_MODULE_3__.FindAllDataImpl(this.linkPath, requestService, rdbService, objectCache, halService, this.responseMsToLive);
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
  static {
    this.ɵfac = function SubmissionCcLicenseDataService_Factory(t) {
      return new (t || SubmissionCcLicenseDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_data_request_service__WEBPACK_IMPORTED_MODULE_4__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_cache_builders_remote_data_build_service__WEBPACK_IMPORTED_MODULE_0__.RemoteDataBuildService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_cache_object_cache_service__WEBPACK_IMPORTED_MODULE_1__.ObjectCacheService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_shared_hal_endpoint_service__WEBPACK_IMPORTED_MODULE_5__.HALEndpointService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
      token: SubmissionCcLicenseDataService,
      factory: SubmissionCcLicenseDataService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_core_submission_submission-cc-license-data_service_ts.js.map