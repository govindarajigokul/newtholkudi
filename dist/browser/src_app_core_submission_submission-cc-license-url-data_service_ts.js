"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_app_core_submission_submission-cc-license-url-data_service_ts"],{

/***/ 79914:
/*!***************************************************************************!*\
  !*** ./src/app/core/submission/submission-cc-license-url-data.service.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SubmissionCcLicenseUrlDataService: () => (/* binding */ SubmissionCcLicenseUrlDataService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 84975);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var _cache_builders_remote_data_build_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cache/builders/remote-data-build.service */ 76799);
/* harmony import */ var _cache_models_request_param_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cache/models/request-param.model */ 53954);
/* harmony import */ var _cache_object_cache_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cache/object-cache.service */ 41684);
/* harmony import */ var _data_base_base_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/base/base-data.service */ 49802);
/* harmony import */ var _data_base_search_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/base/search-data */ 35108);
/* harmony import */ var _data_request_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/request.service */ 32473);
/* harmony import */ var _shared_hal_endpoint_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/hal-endpoint.service */ 4910);
/* harmony import */ var _shared_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/operators */ 55757);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 90310);














class SubmissionCcLicenseUrlDataService extends _data_base_base_data_service__WEBPACK_IMPORTED_MODULE_3__.BaseDataService {
  constructor(requestService, rdbService, objectCache, halService) {
    super('submissioncclicenseUrls-search', requestService, rdbService, objectCache, halService);
    this.requestService = requestService;
    this.rdbService = rdbService;
    this.objectCache = objectCache;
    this.halService = halService;
    this.searchData = new _data_base_search_data__WEBPACK_IMPORTED_MODULE_4__.SearchDataImpl(this.linkPath, requestService, rdbService, objectCache, halService, this.responseMsToLive, (href, searchMethod) => `${href}/${searchMethod}`);
  }
  /**
   * Get the link to the Creative Commons license corresponding to the given type and options.
   * @param ccLicense   the Creative Commons license type
   * @param options     the selected options of the license fields
   */
  getCcLicenseLink(ccLicense, options) {
    return this.searchData.getSearchByHref('rightsByQuestions', {
      searchParams: [new _cache_models_request_param_model__WEBPACK_IMPORTED_MODULE_1__.RequestParam('license', ccLicense.id), ...ccLicense.fields.map(field => new _cache_models_request_param_model__WEBPACK_IMPORTED_MODULE_1__.RequestParam(`answer_${field.id}`, options.get(field).id))]
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.switchMap)(href => this.findByHref(href)), (0,_shared_operators__WEBPACK_IMPORTED_MODULE_7__.getFirstSucceededRemoteData)(), (0,_shared_operators__WEBPACK_IMPORTED_MODULE_7__.getRemoteDataPayload)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(response => response.url));
  }
  /**
   * Make a new FindListRequest with given search method
   *
   * @param searchMethod                The search method for the object
   * @param options                     The [[FindListOptions]] object
   * @param useCachedVersionIfAvailable If this is true, the request will only be sent if there's
   *                                    no valid cached version. Defaults to true
   * @param reRequestOnStale            Whether or not the request should automatically be re-
   *                                    requested after the response becomes stale
   * @param linksToFollow               List of {@link FollowLinkConfig} that indicate which
   *                                    {@link HALLink}s should be automatically resolved
   * @return {Observable<RemoteData<PaginatedList<T>>}
   *    Return an observable that emits response from the server
   */
  searchBy(searchMethod, options, useCachedVersionIfAvailable, reRequestOnStale, ...linksToFollow) {
    return this.searchData.searchBy(searchMethod, options, useCachedVersionIfAvailable, reRequestOnStale, ...linksToFollow);
  }
  static {
    this.ɵfac = function SubmissionCcLicenseUrlDataService_Factory(t) {
      return new (t || SubmissionCcLicenseUrlDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_data_request_service__WEBPACK_IMPORTED_MODULE_5__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_cache_builders_remote_data_build_service__WEBPACK_IMPORTED_MODULE_0__.RemoteDataBuildService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_cache_object_cache_service__WEBPACK_IMPORTED_MODULE_2__.ObjectCacheService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_shared_hal_endpoint_service__WEBPACK_IMPORTED_MODULE_6__.HALEndpointService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjectable"]({
      token: SubmissionCcLicenseUrlDataService,
      factory: SubmissionCcLicenseUrlDataService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_core_submission_submission-cc-license-url-data_service_ts.js.map