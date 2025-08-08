"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_app_core_data_notify-services-status-data_service_ts"],{

/***/ 69380:
/*!******************************************************************!*\
  !*** ./src/app/core/data/notify-services-status-data.service.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotifyRequestsStatusDataService: () => (/* binding */ NotifyRequestsStatusDataService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 6663);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 78374);
/* harmony import */ var _cache_builders_remote_data_build_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cache/builders/remote-data-build.service */ 76799);
/* harmony import */ var _cache_object_cache_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cache/object-cache.service */ 41684);
/* harmony import */ var _shared_hal_endpoint_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/hal-endpoint.service */ 4910);
/* harmony import */ var _base_identifiable_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base/identifiable-data.service */ 63897);
/* harmony import */ var _request_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./request.models */ 44446);
/* harmony import */ var _request_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./request.service */ 32473);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 90310);












class NotifyRequestsStatusDataService extends _base_identifiable_data_service__WEBPACK_IMPORTED_MODULE_3__.IdentifiableDataService {
  constructor(requestService, rdbService, objectCache, halService) {
    super('notifyrequests', requestService, rdbService, objectCache, halService);
    this.requestService = requestService;
    this.rdbService = rdbService;
    this.objectCache = objectCache;
    this.halService = halService;
  }
  /**
   * Retrieves the status of notify requests for a specific item.
   * @param itemUuid The UUID of the item.
   * @returns An Observable that emits the remote data containing the notify requests status.
   */
  getNotifyRequestsStatus(itemUuid) {
    const href$ = this.getEndpoint().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(url => url + '/' + itemUuid));
    href$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.take)(1)).subscribe(url => {
      const request = new _request_models__WEBPACK_IMPORTED_MODULE_4__.GetRequest(this.requestService.generateRequestId(), url);
      this.requestService.send(request, true);
    });
    return this.rdbService.buildFromHref(href$);
  }
  static {
    this.ɵfac = function NotifyRequestsStatusDataService_Factory(t) {
      return new (t || NotifyRequestsStatusDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_request_service__WEBPACK_IMPORTED_MODULE_5__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_cache_builders_remote_data_build_service__WEBPACK_IMPORTED_MODULE_0__.RemoteDataBuildService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_cache_object_cache_service__WEBPACK_IMPORTED_MODULE_1__.ObjectCacheService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_shared_hal_endpoint_service__WEBPACK_IMPORTED_MODULE_2__.HALEndpointService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
      token: NotifyRequestsStatusDataService,
      factory: NotifyRequestsStatusDataService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_core_data_notify-services-status-data_service_ts.js.map