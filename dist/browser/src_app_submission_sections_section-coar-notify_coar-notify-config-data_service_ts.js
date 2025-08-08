"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_app_submission_sections_section-coar-notify_coar-notify-config-data_service_ts"],{

/***/ 69184:
/*!********************************************************************************************!*\
  !*** ./src/app/submission/sections/section-coar-notify/coar-notify-config-data.service.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CoarNotifyConfigDataService: () => (/* binding */ CoarNotifyConfigDataService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 78374);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var _core_cache_builders_remote_data_build_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/cache/builders/remote-data-build.service */ 76799);
/* harmony import */ var _core_cache_object_cache_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/cache/object-cache.service */ 41684);
/* harmony import */ var _core_data_base_create_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/data/base/create-data */ 39280);
/* harmony import */ var _core_data_base_delete_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/data/base/delete-data */ 13617);
/* harmony import */ var _core_data_base_find_all_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/data/base/find-all-data */ 46787);
/* harmony import */ var _core_data_base_identifiable_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/data/base/identifiable-data.service */ 63897);
/* harmony import */ var _core_data_base_patch_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/data/base/patch-data */ 87158);
/* harmony import */ var _core_data_request_models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/data/request.models */ 44446);
/* harmony import */ var _core_data_request_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/data/request.service */ 32473);
/* harmony import */ var _core_shared_hal_endpoint_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/shared/hal-endpoint.service */ 4910);
/* harmony import */ var _core_url_combiner_url_combiner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../core/url-combiner/url-combiner */ 45663);
/* harmony import */ var _shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/notifications/notifications.service */ 69472);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 90310);



















/**
 * A service responsible for fetching/sending data from/to the REST API on the CoarNotifyConfig endpoint
 */
class CoarNotifyConfigDataService extends _core_data_base_identifiable_data_service__WEBPACK_IMPORTED_MODULE_5__.IdentifiableDataService {
  constructor(requestService, rdbService, objectCache, halService, notificationsService) {
    super('submissioncoarnotifyconfigs', requestService, rdbService, objectCache, halService);
    this.requestService = requestService;
    this.rdbService = rdbService;
    this.objectCache = objectCache;
    this.halService = halService;
    this.notificationsService = notificationsService;
    this.findAllData = new _core_data_base_find_all_data__WEBPACK_IMPORTED_MODULE_4__.FindAllDataImpl(this.linkPath, requestService, rdbService, objectCache, halService, this.responseMsToLive);
    this.deleteData = new _core_data_base_delete_data__WEBPACK_IMPORTED_MODULE_3__.DeleteDataImpl(this.linkPath, requestService, rdbService, objectCache, halService, notificationsService, this.responseMsToLive, this.constructIdEndpoint);
    this.patchData = new _core_data_base_patch_data__WEBPACK_IMPORTED_MODULE_6__.PatchDataImpl(this.linkPath, requestService, rdbService, objectCache, halService, this.comparator, this.responseMsToLive, this.constructIdEndpoint);
    this.createData = new _core_data_base_create_data__WEBPACK_IMPORTED_MODULE_2__.CreateDataImpl(this.linkPath, requestService, rdbService, objectCache, halService, notificationsService, this.responseMsToLive);
  }
  create(object, ...params) {
    return this.createData.create(object, ...params);
  }
  patch(object, operations) {
    return this.patchData.patch(object, operations);
  }
  update(object) {
    return this.patchData.update(object);
  }
  commitUpdates(method) {
    return this.patchData.commitUpdates(method);
  }
  createPatchFromCache(object) {
    return this.patchData.createPatchFromCache(object);
  }
  findAll(options, useCachedVersionIfAvailable, reRequestOnStale, ...linksToFollow) {
    return this.findAllData.findAll(options, useCachedVersionIfAvailable, reRequestOnStale, ...linksToFollow);
  }
  delete(objectId, copyVirtualMetadata) {
    return this.deleteData.delete(objectId, copyVirtualMetadata);
  }
  deleteByHref(href, copyVirtualMetadata) {
    return this.deleteData.deleteByHref(href, copyVirtualMetadata);
  }
  invoke(serviceName, serviceId, files) {
    const requestId = this.requestService.generateRequestId();
    this.getBrowseEndpoint().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(endpoint => new _core_url_combiner_url_combiner__WEBPACK_IMPORTED_MODULE_10__.URLCombiner(endpoint, serviceName, 'submissioncoarnotifyconfigmodel', serviceId).toString()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(endpoint => {
      const body = this.getInvocationFormData(files);
      return new _core_data_request_models__WEBPACK_IMPORTED_MODULE_7__.MultipartPostRequest(requestId, endpoint, body);
    })).subscribe(request => this.requestService.send(request));
    return this.rdbService.buildFromRequestUUID(requestId);
  }
  getInvocationFormData(files) {
    const form = new FormData();
    files.forEach(file => {
      form.append('file', file);
    });
    return form;
  }
  static {
    this.ɵfac = function CoarNotifyConfigDataService_Factory(t) {
      return new (t || CoarNotifyConfigDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_core_data_request_service__WEBPACK_IMPORTED_MODULE_8__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_core_cache_builders_remote_data_build_service__WEBPACK_IMPORTED_MODULE_0__.RemoteDataBuildService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_core_cache_object_cache_service__WEBPACK_IMPORTED_MODULE_1__.ObjectCacheService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_core_shared_hal_endpoint_service__WEBPACK_IMPORTED_MODULE_9__.HALEndpointService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_11__.NotificationsService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjectable"]({
      token: CoarNotifyConfigDataService,
      factory: CoarNotifyConfigDataService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_submission_sections_section-coar-notify_coar-notify-config-data_service_ts.js.map