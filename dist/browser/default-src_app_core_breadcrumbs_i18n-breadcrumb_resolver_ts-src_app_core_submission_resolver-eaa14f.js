(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["default-src_app_core_breadcrumbs_i18n-breadcrumb_resolver_ts-src_app_core_submission_resolver-eaa14f"],{

/***/ 72059:
/*!**************************************************************!*\
  !*** ./src/app/core/breadcrumbs/i18n-breadcrumb.resolver.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i18nBreadcrumbResolver: () => (/* binding */ i18nBreadcrumbResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/empty.util */ 82777);
/* harmony import */ var _shared_utils_route_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/utils/route.utils */ 30506);
/* harmony import */ var _i18n_breadcrumbs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./i18n-breadcrumbs.service */ 72943);




/**
 * Method for resolving an I18n breadcrumb configuration object
 * @param {ActivatedRouteSnapshot} route The current ActivatedRouteSnapshot
 * @param {RouterStateSnapshot} state The current RouterStateSnapshot
 * @param {I18nBreadcrumbsService} breadcrumbService
 * @returns BreadcrumbConfig object
 */
const i18nBreadcrumbResolver = (route, state, breadcrumbService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_i18n_breadcrumbs_service__WEBPACK_IMPORTED_MODULE_2__.I18nBreadcrumbsService)) => {
  const key = route.data.breadcrumbKey;
  if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_0__.hasNoValue)(key)) {
    throw new Error('You provided an i18nBreadcrumbResolver for url \"' + route.url + '\" but no breadcrumbKey in the route\'s data');
  }
  const fullPath = (0,_shared_utils_route_utils__WEBPACK_IMPORTED_MODULE_1__.currentPathFromSnapshot)(route);
  return {
    provider: breadcrumbService,
    key: key,
    url: fullPath
  };
};

/***/ }),

/***/ 72943:
/*!**************************************************************!*\
  !*** ./src/app/core/breadcrumbs/i18n-breadcrumbs.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BREADCRUMB_MESSAGE_POSTFIX: () => (/* binding */ BREADCRUMB_MESSAGE_POSTFIX),
/* harmony export */   I18nBreadcrumbsService: () => (/* binding */ I18nBreadcrumbsService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 17796);
/* harmony import */ var _breadcrumbs_breadcrumb_breadcrumb_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../breadcrumbs/breadcrumb/breadcrumb.model */ 90839);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);



/**
 * The postfix for i18n breadcrumbs
 */
const BREADCRUMB_MESSAGE_POSTFIX = '.breadcrumbs';
/**
 * Service to calculate i18n breadcrumbs for a single part of the route
 */
class I18nBreadcrumbsService {
  /**
   * Method to calculate the breadcrumbs
   * @param key The key used to resolve the breadcrumb
   * @param url The url to use as a link for this breadcrumb
   */
  getBreadcrumbs(key, url) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)([new _breadcrumbs_breadcrumb_breadcrumb_model__WEBPACK_IMPORTED_MODULE_0__.Breadcrumb(key + BREADCRUMB_MESSAGE_POSTFIX, url)]);
  }
  static {
    this.ɵfac = function I18nBreadcrumbsService_Factory(t) {
      return new (t || I18nBreadcrumbsService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: I18nBreadcrumbsService,
      factory: I18nBreadcrumbsService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 78971:
/*!****************************************************!*\
  !*** ./src/app/core/config/config-data.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

/***/ }),

/***/ 43928:
/*!*********************************************************************!*\
  !*** ./src/app/core/config/submission-forms-config-data.service.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SubmissionFormsConfigDataService: () => (/* binding */ SubmissionFormsConfigDataService)
/* harmony export */ });
/* harmony import */ var _cache_builders_remote_data_build_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cache/builders/remote-data-build.service */ 76799);
/* harmony import */ var _cache_object_cache_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cache/object-cache.service */ 41684);
/* harmony import */ var _data_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/request.service */ 32473);
/* harmony import */ var _shared_hal_endpoint_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/hal-endpoint.service */ 4910);
/* harmony import */ var _config_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config-data.service */ 78971);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 90310);










/**
 * Data service to retrieve submission form configuration objects from the REST server.
 */
class SubmissionFormsConfigDataService extends _config_data_service__WEBPACK_IMPORTED_MODULE_4__.ConfigDataService {
  constructor(requestService, rdbService, objectCache, halService) {
    super('submissionforms', requestService, rdbService, objectCache, halService);
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
    this.ɵfac = function SubmissionFormsConfigDataService_Factory(t) {
      return new (t || SubmissionFormsConfigDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_data_request_service__WEBPACK_IMPORTED_MODULE_2__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_cache_builders_remote_data_build_service__WEBPACK_IMPORTED_MODULE_0__.RemoteDataBuildService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_cache_object_cache_service__WEBPACK_IMPORTED_MODULE_1__.ObjectCacheService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_shared_hal_endpoint_service__WEBPACK_IMPORTED_MODULE_3__.HALEndpointService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
      token: SubmissionFormsConfigDataService,
      factory: SubmissionFormsConfigDataService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 51345:
/*!***********************************************************************!*\
  !*** ./src/app/core/config/submission-uploads-config-data.service.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SubmissionUploadsConfigDataService: () => (/* binding */ SubmissionUploadsConfigDataService)
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
class SubmissionUploadsConfigDataService extends _config_data_service__WEBPACK_IMPORTED_MODULE_4__.ConfigDataService {
  constructor(requestService, rdbService, objectCache, halService) {
    super('submissionuploads', requestService, rdbService, objectCache, halService);
    this.requestService = requestService;
    this.rdbService = rdbService;
    this.objectCache = objectCache;
    this.halService = halService;
  }
  findByHref(href, useCachedVersionIfAvailable = true, reRequestOnStale = true, ...linksToFollow) {
    return super.findByHref(href, useCachedVersionIfAvailable, reRequestOnStale, ...linksToFollow);
  }
  static {
    this.ɵfac = function SubmissionUploadsConfigDataService_Factory(t) {
      return new (t || SubmissionUploadsConfigDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_data_request_service__WEBPACK_IMPORTED_MODULE_2__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_cache_builders_remote_data_build_service__WEBPACK_IMPORTED_MODULE_0__.RemoteDataBuildService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_cache_object_cache_service__WEBPACK_IMPORTED_MODULE_1__.ObjectCacheService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_shared_hal_endpoint_service__WEBPACK_IMPORTED_MODULE_3__.HALEndpointService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
      token: SubmissionUploadsConfigDataService,
      factory: SubmissionUploadsConfigDataService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 17184:
/*!**************************************************************************!*\
  !*** ./src/app/core/json-patch/builder/json-patch-operations-builder.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JsonPatchOperationsBuilder: () => (/* binding */ JsonPatchOperationsBuilder)
/* harmony export */ });
/* harmony import */ var _shared_date_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/date.util */ 63604);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/empty.util */ 82777);
/* harmony import */ var _shared_form_builder_models_form_field_language_value_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/form/builder/models/form-field-language-value.model */ 43903);
/* harmony import */ var _shared_form_builder_models_form_field_metadata_value_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/form/builder/models/form-field-metadata-value.model */ 61280);
/* harmony import */ var _submission_vocabularies_models_vocabulary_entry_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../submission/vocabularies/models/vocabulary-entry.model */ 43235);
/* harmony import */ var _json_patch_operations_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../json-patch-operations.actions */ 98107);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ 99797);









/**
 * Provides methods to dispatch JsonPatch Operations Actions
 */
class JsonPatchOperationsBuilder {
  constructor(store) {
    this.store = store;
  }
  /**
   * Dispatches a new NewPatchAddOperationAction
   *
   * @param path
   *    a JsonPatchOperationPathObject representing path
   * @param value
   *    The value to update the referenced path
   * @param first
   *    A boolean representing if the value to be added is the first of an array
   * @param plain
   *    A boolean representing if the value to be added is a plain text value
   */
  add(path, value, first = false, plain = false) {
    this.store.dispatch(new _json_patch_operations_actions__WEBPACK_IMPORTED_MODULE_5__.NewPatchAddOperationAction(path.rootElement, path.subRootElement, path.path, this.prepareValue(value, plain, first)));
  }
  /**
   * Dispatches a new NewPatchReplaceOperationAction
   *
   * @param path
   *    a JsonPatchOperationPathObject representing path
   * @param value
   *    the value to update the referenced path
   * @param plain
   *    a boolean representing if the value to be added is a plain text value
   */
  replace(path, value, plain = false) {
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_1__.hasNoValue)(value) || typeof value === 'object' && (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_1__.hasNoValue)(value.value)) {
      this.remove(path);
    } else {
      this.store.dispatch(new _json_patch_operations_actions__WEBPACK_IMPORTED_MODULE_5__.NewPatchReplaceOperationAction(path.rootElement, path.subRootElement, path.path, this.prepareValue(value, plain, false)));
    }
  }
  /**
   * Dispatch a new NewPatchMoveOperationAction
   *
   * @param path
   *    the new path tho move to
   * @param prevPath
   *    the original path to move from
   */
  move(path, prevPath) {
    this.store.dispatch(new _json_patch_operations_actions__WEBPACK_IMPORTED_MODULE_5__.NewPatchMoveOperationAction(path.rootElement, path.subRootElement, prevPath, path.path));
  }
  /**
   * Dispatches a new NewPatchRemoveOperationAction
   *
   * @param path
   *    a JsonPatchOperationPathObject representing path
   */
  remove(path) {
    this.store.dispatch(new _json_patch_operations_actions__WEBPACK_IMPORTED_MODULE_5__.NewPatchRemoveOperationAction(path.rootElement, path.subRootElement, path.path));
  }
  /**
   * Dispatches a new FlushPatchOperationAction
   *
   * @param path
   *    a JsonPatchOperationPathObject representing path
   */
  flushOperation(path) {
    this.store.dispatch(new _json_patch_operations_actions__WEBPACK_IMPORTED_MODULE_5__.FlushPatchOperationAction(path.rootElement, path.subRootElement, path.path));
  }
  prepareValue(value, plain, first) {
    let operationValue = null;
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_1__.hasValue)(value)) {
      if (plain) {
        operationValue = value;
      } else {
        if (Array.isArray(value)) {
          operationValue = [];
          value.forEach(entry => {
            if (typeof entry === 'object') {
              operationValue.push(this.prepareObjectValue(entry));
            } else {
              operationValue.push(new _shared_form_builder_models_form_field_metadata_value_model__WEBPACK_IMPORTED_MODULE_3__.FormFieldMetadataValueObject(entry));
            }
          });
        } else if (typeof value === 'object') {
          operationValue = this.prepareObjectValue(value);
        } else {
          operationValue = new _shared_form_builder_models_form_field_metadata_value_model__WEBPACK_IMPORTED_MODULE_3__.FormFieldMetadataValueObject(value);
        }
      }
    }
    return first && !Array.isArray(operationValue) ? [operationValue] : operationValue;
  }
  prepareObjectValue(value) {
    let operationValue = Object.create({});
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_1__.isEmpty)(value) || value instanceof _shared_form_builder_models_form_field_metadata_value_model__WEBPACK_IMPORTED_MODULE_3__.FormFieldMetadataValueObject) {
      operationValue = value;
    } else if (value instanceof Date) {
      operationValue = new _shared_form_builder_models_form_field_metadata_value_model__WEBPACK_IMPORTED_MODULE_3__.FormFieldMetadataValueObject((0,_shared_date_util__WEBPACK_IMPORTED_MODULE_0__.dateToISOFormat)(value));
    } else if (value instanceof _submission_vocabularies_models_vocabulary_entry_model__WEBPACK_IMPORTED_MODULE_4__.VocabularyEntry) {
      operationValue = this.prepareAuthorityValue(value);
    } else if (value instanceof _shared_form_builder_models_form_field_language_value_model__WEBPACK_IMPORTED_MODULE_2__.FormFieldLanguageValueObject) {
      operationValue = new _shared_form_builder_models_form_field_metadata_value_model__WEBPACK_IMPORTED_MODULE_3__.FormFieldMetadataValueObject(value.value, value.language);
    } else if (value.hasOwnProperty('authority')) {
      operationValue = new _shared_form_builder_models_form_field_metadata_value_model__WEBPACK_IMPORTED_MODULE_3__.FormFieldMetadataValueObject(value.value, value.language, value.authority);
    } else if ((0,_shared_date_util__WEBPACK_IMPORTED_MODULE_0__.isNgbDateStruct)(value)) {
      operationValue = new _shared_form_builder_models_form_field_metadata_value_model__WEBPACK_IMPORTED_MODULE_3__.FormFieldMetadataValueObject((0,_shared_date_util__WEBPACK_IMPORTED_MODULE_0__.dateToString)(value));
    } else if (value.hasOwnProperty('value')) {
      operationValue = new _shared_form_builder_models_form_field_metadata_value_model__WEBPACK_IMPORTED_MODULE_3__.FormFieldMetadataValueObject(value.value);
    } else {
      Object.keys(value).forEach(key => {
        if (typeof value[key] === 'object') {
          operationValue[key] = this.prepareObjectValue(value[key]);
        } else {
          operationValue[key] = value[key];
        }
      });
    }
    return operationValue;
  }
  prepareAuthorityValue(value) {
    let operationValue;
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_1__.isNotEmpty)(value.authority)) {
      operationValue = new _shared_form_builder_models_form_field_metadata_value_model__WEBPACK_IMPORTED_MODULE_3__.FormFieldMetadataValueObject(value.value, value.language, value.authority);
    } else {
      operationValue = new _shared_form_builder_models_form_field_metadata_value_model__WEBPACK_IMPORTED_MODULE_3__.FormFieldMetadataValueObject(value.value, value.language);
    }
    return operationValue;
  }
  static {
    this.ɵfac = function JsonPatchOperationsBuilder_Factory(t) {
      return new (t || JsonPatchOperationsBuilder)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.Store));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
      token: JsonPatchOperationsBuilder,
      factory: JsonPatchOperationsBuilder.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 34376:
/*!***********************************************************************************!*\
  !*** ./src/app/core/submission/models/workspaceitem-section-upload-file.model.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WorkspaceitemSectionUploadFileObject: () => (/* binding */ WorkspaceitemSectionUploadFileObject)
/* harmony export */ });
/**
 * An interface to represent submission's upload section file entry.
 */
class WorkspaceitemSectionUploadFileObject {}

/***/ }),

/***/ 27482:
/*!************************************************************************!*\
  !*** ./src/app/core/submission/resolver/submission-links-to-follow.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SUBMISSION_LINKS_TO_FOLLOW: () => (/* binding */ SUBMISSION_LINKS_TO_FOLLOW)
/* harmony export */ });
/* harmony import */ var _shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/utils/follow-link-config.model */ 67600);

/**
 * The self links defined in this list are expected to be requested somewhere in the near future
 * Requesting them as embeds will limit the number of requests
 *
 * Needs to be in a separate file to prevent circular dependencies in webpack.
 */
const SUBMISSION_LINKS_TO_FOLLOW = [(0,_shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_0__.followLink)('item'), (0,_shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_0__.followLink)('collection')];

/***/ }),

/***/ 86098:
/*!************************************************************************!*\
  !*** ./src/app/core/submission/resolver/submission-object.resolver.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SubmissionObjectResolver: () => (/* binding */ SubmissionObjectResolver)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 84975);
/* harmony import */ var _shared_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/operators */ 55757);
/* harmony import */ var _submission_links_to_follow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./submission-links-to-follow */ 27482);



/**
 * Method for resolving an item based on the parameters in the current route
 * @param {ActivatedRouteSnapshot} route The current ActivatedRouteSnapshot
 * @param {RouterStateSnapshot} state The current RouterStateSnapshot
 * @param {IdentifiableDataService<SubmissionObject> } dataService
 * @returns Observable<<RemoteData<Item>> Emits the found item based on the parameters in the current route,
 * or an error if something went wrong
 */
const SubmissionObjectResolver = (route, state, dataService) => {
  return dataService.findById(route.params.id, true, false, ..._submission_links_to_follow__WEBPACK_IMPORTED_MODULE_1__.SUBMISSION_LINKS_TO_FOLLOW).pipe((0,_shared_operators__WEBPACK_IMPORTED_MODULE_0__.getFirstCompletedRemoteData)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.switchMap)(wfiRD => wfiRD.payload.item), (0,_shared_operators__WEBPACK_IMPORTED_MODULE_0__.getFirstCompletedRemoteData)());
};

/***/ }),

/***/ 26373:
/*!***********************************************************************************!*\
  !*** ./src/app/core/submission/resolver/submission-parent-breadcrumb.resolver.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SubmissionParentBreadcrumbResolver: () => (/* binding */ SubmissionParentBreadcrumbResolver)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var _shared_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/operators */ 55757);
/* harmony import */ var _submission_links_to_follow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./submission-links-to-follow */ 27482);



/**
 * This class represents a resolver that requests a specific item before the route is activated
 */
class SubmissionParentBreadcrumbResolver {
  constructor(dataService, breadcrumbService) {
    this.dataService = dataService;
    this.breadcrumbService = breadcrumbService;
  }
  /**
   * Method for resolving an item based on the parameters in the current route
   * @param {ActivatedRouteSnapshot} route The current ActivatedRouteSnapshot
   * @param {RouterStateSnapshot} state The current RouterStateSnapshot
   * @returns Observable<<RemoteData<Item>> Emits the found item based on the parameters in the current route,
   * or an error if something went wrong
   */
  resolve(route, state) {
    return this.dataService.findById(route.params.id, true, false, ..._submission_links_to_follow__WEBPACK_IMPORTED_MODULE_1__.SUBMISSION_LINKS_TO_FOLLOW).pipe((0,_shared_operators__WEBPACK_IMPORTED_MODULE_0__.getFirstCompletedRemoteData)(), (0,_shared_operators__WEBPACK_IMPORTED_MODULE_0__.getRemoteDataPayload)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(submissionObject => ({
      provider: this.breadcrumbService,
      key: submissionObject
    })));
  }
}

/***/ }),

/***/ 73138:
/*!***********************************************************************!*\
  !*** ./src/app/core/submission/submission-cc-license-data.service.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ }),

/***/ 79914:
/*!***************************************************************************!*\
  !*** ./src/app/core/submission/submission-cc-license-url-data.service.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ }),

/***/ 44855:
/*!*************************************************************************!*\
  !*** ./src/app/core/submission/submission-parent-breadcrumb.service.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SubmissionParentBreadcrumbsService: () => (/* binding */ SubmissionParentBreadcrumbsService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 17796);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 27639);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 84975);
/* harmony import */ var _app_routing_paths__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app-routing-paths */ 69799);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/empty.util */ 82777);
/* harmony import */ var _submission_submission_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../submission/submission.service */ 61010);
/* harmony import */ var _breadcrumbs_dso_breadcrumbs_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../breadcrumbs/dso-breadcrumbs.service */ 67045);
/* harmony import */ var _breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../breadcrumbs/dso-name.service */ 96526);
/* harmony import */ var _data_collection_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/collection-data.service */ 6983);
/* harmony import */ var _shared_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/operators */ 55757);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 90310);













/**
 * Service to calculate the parent {@link DSpaceObject} breadcrumbs for a {@link SubmissionObject}
 */
class SubmissionParentBreadcrumbsService {
  constructor(dsoNameService, dsoBreadcrumbsService, submissionService, collectionService) {
    this.dsoNameService = dsoNameService;
    this.dsoBreadcrumbsService = dsoBreadcrumbsService;
    this.submissionService = submissionService;
    this.collectionService = collectionService;
  }
  /**
   * Creates the parent breadcrumb structure for {@link SubmissionObject}s. It also automatically recreates the
   * parent breadcrumb structure when you change a {@link SubmissionObject}'s by dispatching a
   * {@link ChangeSubmissionCollectionAction}.
   *
   * @param submissionObject The {@link SubmissionObject} for which the parent breadcrumb structure needs to be created
   */
  getBreadcrumbs(submissionObject) {
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_1__.isEmpty)(submissionObject)) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)([]);
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.combineLatest)([submissionObject.collection.pipe((0,_shared_operators__WEBPACK_IMPORTED_MODULE_6__.getFirstCompletedRemoteData)(), (0,_shared_operators__WEBPACK_IMPORTED_MODULE_6__.getRemoteDataPayload)()), this.submissionService.getSubmissionCollectionId(submissionObject.id)]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.switchMap)(([collection, latestCollectionId]) => {
      if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_1__.hasValue)(latestCollectionId)) {
        return this.collectionService.findById(latestCollectionId).pipe((0,_shared_operators__WEBPACK_IMPORTED_MODULE_6__.getFirstCompletedRemoteData)(), (0,_shared_operators__WEBPACK_IMPORTED_MODULE_6__.getRemoteDataPayload)());
      } else {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(collection);
      }
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.switchMap)(collection => this.dsoBreadcrumbsService.getBreadcrumbs(collection, (0,_app_routing_paths__WEBPACK_IMPORTED_MODULE_0__.getDSORoute)(collection))));
  }
  static {
    this.ɵfac = function SubmissionParentBreadcrumbsService_Factory(t) {
      return new (t || SubmissionParentBreadcrumbsService)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_4__.DSONameService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_breadcrumbs_dso_breadcrumbs_service__WEBPACK_IMPORTED_MODULE_3__.DSOBreadcrumbsService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_submission_submission_service__WEBPACK_IMPORTED_MODULE_2__.SubmissionService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_data_collection_data_service__WEBPACK_IMPORTED_MODULE_5__.CollectionDataService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjectable"]({
      token: SubmissionParentBreadcrumbsService,
      factory: SubmissionParentBreadcrumbsService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 6308:
/*!*********************************************************!*\
  !*** ./src/app/shared/ds-select/ds-select.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DsSelectComponent: () => (/* binding */ DsSelectComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 49966);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var _btn_disabled_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../btn-disabled.directive */ 60456);








const _c0 = [[["", 8, "selection"]], [["", 8, "menu"]]];
const _c1 = [".selection", ".menu"];
function DsSelectComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4)(1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 1, ctx_r0.label), " ");
  }
}
/**
 * Component which represent a DSpace dropdown selector.
 */
class DsSelectComponent {
  constructor() {
    /**
     * Emits an event when the dropdown selector is opened or closed.
     */
    this.toggled = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    /**
     * Emits an event when the dropdown selector or closed.
     */
    this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  }
  static {
    this.ɵfac = function DsSelectComponent_Factory(t) {
      return new (t || DsSelectComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: DsSelectComponent,
      selectors: [["ds-select"]],
      inputs: {
        label: "label",
        disabled: "disabled"
      },
      outputs: {
        toggled: "toggled",
        close: "close"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      ngContentSelectors: _c1,
      decls: 8,
      vars: 2,
      consts: [["ngbDropdown", "", 1, "btn-group", 3, "openChange"], ["class", "input-group-prepend", 4, "ngIf"], ["aria-describedby", "dsSelectMenuLabel", "id", "dsSelectMenuButton", "ngbDropdownToggle", "", 1, "btn", "btn-outline-primary", "selection", 3, "blur", "click", "dsBtnDisabled"], ["ngbDropdownMenu", "", "id", "dsSelectDropdownMenu", "aria-labelledby", "dsSelectMenuButton", 1, "dropdown-menu"], [1, "input-group-prepend"], ["id", "dsSelectMenuLabel", 1, "input-group-text"]],
      template: function DsSelectComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("openChange", function DsSelectComponent_Template_div_openChange_1_listener($event) {
            return ctx.toggled.emit($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DsSelectComponent_div_2_Template, 4, 3, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("blur", function DsSelectComponent_Template_button_blur_3_listener($event) {
            return ctx.close.emit($event);
          })("click", function DsSelectComponent_Template_button_click_3_listener($event) {
            return ctx.close.emit($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3)(6, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](7, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.label);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dsBtnDisabled", ctx.disabled);
        }
      },
      dependencies: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbDropdownModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbDropdownMenu, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe, _btn_disabled_directive__WEBPACK_IMPORTED_MODULE_0__.BtnDisabledDirective],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRzLXNlbGVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQSIsImZpbGUiOiJkcy1zZWxlY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqLyJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2RzLXNlbGVjdC9kcy1zZWxlY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQSx3akJBQXdqQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 43903:
/*!*******************************************************************************!*\
  !*** ./src/app/shared/form/builder/models/form-field-language-value.model.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormFieldLanguageValueObject: () => (/* binding */ FormFieldLanguageValueObject)
/* harmony export */ });
class FormFieldLanguageValueObject {
  constructor(value, language) {
    this.value = value;
    this.language = language;
  }
}

/***/ }),

/***/ 63571:
/*!********************************************************************************!*\
  !*** ./src/app/shared/form/builder/models/form-field-previous-value-object.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormFieldPreviousValueObject: () => (/* binding */ FormFieldPreviousValueObject)
/* harmony export */ });
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isEqual */ 21016);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_0__);

class FormFieldPreviousValueObject {
  constructor(path = null, value = null) {
    this._path = path;
    this._value = value;
  }
  get path() {
    return this._path;
  }
  set path(path) {
    this._path = path;
  }
  get value() {
    return this._value;
  }
  set value(value) {
    this._value = value;
  }
  delete() {
    this._value = null;
    this._path = null;
  }
  isPathEqual(path) {
    return this._path && lodash_isEqual__WEBPACK_IMPORTED_MODULE_0___default()(this._path, path);
  }
}

/***/ }),

/***/ 61228:
/*!***********************************************!*\
  !*** ./src/app/shared/utils/truncate.pipe.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TruncatePipe: () => (/* binding */ TruncatePipe)
/* harmony export */ });
/* harmony import */ var _empty_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../empty.util */ 82777);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 90310);


/**
 * Pipe to truncate a value in Angular. (Take a substring, starting at 0)
 * Default value: 10
 */
class TruncatePipe {
  /**
   *
   */
  transform(value, args) {
    if ((0,_empty_util__WEBPACK_IMPORTED_MODULE_0__.hasValue)(value)) {
      const limit = args && args.length > 0 ? parseInt(args[0], 10) : 10; // 10 as default truncate value
      return value.length > limit ? value.substring(0, limit) + '...' : value;
    } else {
      return value;
    }
  }
  static {
    this.ɵfac = function TruncatePipe_Factory(t) {
      return new (t || TruncatePipe)();
    };
  }
  static {
    this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "dsTruncate",
      type: TruncatePipe,
      pure: true,
      standalone: true
    });
  }
}

/***/ }),

/***/ 67026:
/*!**************************************************************!*\
  !*** ./src/app/submission/edit/submission-edit.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SubmissionEditComponent: () => (/* binding */ SubmissionEditComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 83485);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 84975);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 85687);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 47943);
/* harmony import */ var _core_data_item_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/data/item-data.service */ 29326);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/shared/operators */ 55757);
/* harmony import */ var _core_submission_submission_json_patch_operations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/submission/submission-json-patch-operations.service */ 61183);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/empty.util */ 82777);
/* harmony import */ var _shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/notifications/notifications.service */ 69472);
/* harmony import */ var _form_submission_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../form/submission-form.component */ 85390);
/* harmony import */ var _submission_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../submission.service */ 61010);
/* harmony import */ var _utils_parseSectionErrors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/parseSectionErrors */ 7020);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 96439);




















/**
 * This component allows to edit an existing workspaceitem/workflowitem.
 */
class SubmissionEditComponent {
  /**
   * Initialize instance variables
   *
   * @param {ChangeDetectorRef} changeDetectorRef
   * @param {NotificationsService} notificationsService
   * @param {ActivatedRoute} route
   * @param {Router} router
   * @param {ItemDataService} itemDataService
   * @param {SubmissionService} submissionService
   * @param {TranslateService} translate
   * @param {SubmissionJsonPatchOperationsService} submissionJsonPatchOperationsService
   */
  constructor(changeDetectorRef, notificationsService, route, router, itemDataService, submissionService, translate, submissionJsonPatchOperationsService) {
    this.changeDetectorRef = changeDetectorRef;
    this.notificationsService = notificationsService;
    this.route = route;
    this.router = router;
    this.itemDataService = itemDataService;
    this.submissionService = submissionService;
    this.translate = translate;
    this.submissionJsonPatchOperationsService = submissionJsonPatchOperationsService;
    /**
     * Checks if the collection can be modifiable by the user
     * @type {booelan}
     */
    this.collectionModifiable = null;
    /**
     * Array to track all subscriptions and unsubscribe them onDestroy
     * @type {Array}
     */
    this.subs = [];
    /**
     * BehaviorSubject containing the self link to the item for this submission
     * @private
     */
    this.itemLink$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject(undefined);
  }
  /**
   * Retrieve workspaceitem/workflowitem from server and initialize all instance variables
   */
  ngOnInit() {
    this.collectionModifiable = this.route.snapshot.data?.collectionModifiable ?? null;
    this.subs.push(this.route.paramMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(params => this.submissionService.retrieveSubmission(params.get('id'))),
    // NOTE new submission is retrieved on the browser side only, so get null on server side rendering
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.filter)(submissionObjectRD => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_3__.isNotNull)(submissionObjectRD))).subscribe(submissionObjectRD => {
      if (submissionObjectRD.hasSucceeded) {
        if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_3__.isEmpty)(submissionObjectRD.payload)) {
          this.notificationsService.info(null, this.translate.get('submission.general.cannot_submit'));
          this.router.navigate(['/mydspace']);
        } else {
          const {
            errors
          } = submissionObjectRD.payload;
          this.submissionErrors = (0,_utils_parseSectionErrors__WEBPACK_IMPORTED_MODULE_7__["default"])(errors);
          this.submissionId = submissionObjectRD.payload.id.toString();
          this.collectionId = submissionObjectRD.payload.collection.id;
          this.selfUrl = submissionObjectRD.payload._links.self.href;
          this.sections = submissionObjectRD.payload.sections;
          this.itemLink$.next(submissionObjectRD.payload._links.item.href);
          this.item = submissionObjectRD.payload.item;
          this.submissionDefinition = submissionObjectRD.payload.submissionDefinition;
        }
      } else {
        if (submissionObjectRD.statusCode === 404) {
          // redirect to not found page
          this.router.navigate(['/404'], {
            skipLocationChange: true
          });
        }
        // TODO handle generic error
      }
    }), this.itemLink$.pipe((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_3__.isNotEmptyOperator)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(itemLink => this.itemDataService.findByHref(itemLink)), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_1__.getAllSucceededRemoteData)(),
    // Multiple sources can update the item in quick succession.
    // We only want to rerender the form if the item is unchanged for some time
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.debounceTime)(300)).subscribe(itemRd => {
      this.item = itemRd.payload;
      this.changeDetectorRef.detectChanges();
    }));
  }
  /**
   * Unsubscribe from all subscriptions
   */
  ngOnDestroy() {
    this.subs.filter(sub => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_3__.hasValue)(sub)).forEach(sub => sub.unsubscribe());
    this.submissionJsonPatchOperationsService.deletePendingJsonPatchOperations();
  }
  static {
    this.ɵfac = function SubmissionEditComponent_Factory(t) {
      return new (t || SubmissionEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_12__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_4__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_core_data_item_data_service__WEBPACK_IMPORTED_MODULE_0__.ItemDataService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_submission_service__WEBPACK_IMPORTED_MODULE_6__.SubmissionService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_core_submission_submission_json_patch_operations_service__WEBPACK_IMPORTED_MODULE_2__.SubmissionJsonPatchOperationsService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
      type: SubmissionEditComponent,
      selectors: [["ds-base-submission-edit"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 8,
      consts: [[1, "submission-submit-container"], [3, "collectionId", "sections", "selfUrl", "submissionDefinition", "submissionErrors", "item", "collectionModifiable", "submissionId"]],
      template: function SubmissionEditComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "ds-submission-form", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("collectionId", ctx.collectionId)("sections", ctx.sections)("selfUrl", ctx.selfUrl)("submissionDefinition", ctx.submissionDefinition)("submissionErrors", ctx.submissionErrors)("item", ctx.item)("collectionModifiable", ctx.collectionModifiable)("submissionId", ctx.submissionId);
        }
      },
      dependencies: [_form_submission_form_component__WEBPACK_IMPORTED_MODULE_5__.SubmissionFormComponent],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1Ym1pc3Npb24tZWRpdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQSIsImZpbGUiOiJzdWJtaXNzaW9uLWVkaXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqLyJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc3VibWlzc2lvbi9lZGl0L3N1Ym1pc3Npb24tZWRpdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBLHdrQkFBd2tCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi8iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 83558:
/*!*********************************************************************!*\
  !*** ./src/app/submission/edit/themed-submission-edit.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemedSubmissionEditComponent: () => (/* binding */ ThemedSubmissionEditComponent)
/* harmony export */ });
/* harmony import */ var _shared_theme_support_themed_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/theme-support/themed.component */ 8886);
/* harmony import */ var _submission_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./submission-edit.component */ 67026);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);



const _c0 = ["*"];
function ThemedSubmissionEditComponent_ng_template_0_Template(rf, ctx) {}
class ThemedSubmissionEditComponent extends _shared_theme_support_themed_component__WEBPACK_IMPORTED_MODULE_0__.ThemedComponent {
  getComponentName() {
    return 'SubmissionEditComponent';
  }
  importThemedComponent(themeName) {
    return __webpack_require__(9048)(`./${themeName}/app/submission/edit/submission-edit.component`);
  }
  importUnthemedComponent() {
    return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./submission-edit.component */ 67026));
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵThemedSubmissionEditComponent_BaseFactory;
      return function ThemedSubmissionEditComponent_Factory(t) {
        return (ɵThemedSubmissionEditComponent_BaseFactory || (ɵThemedSubmissionEditComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](ThemedSubmissionEditComponent)))(t || ThemedSubmissionEditComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ThemedSubmissionEditComponent,
      selectors: [["ds-submission-edit"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      ngContentSelectors: _c0,
      decls: 5,
      vars: 0,
      consts: [["vcr", ""], ["content", ""]],
      template: function ThemedSubmissionEditComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ThemedSubmissionEditComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", null, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      },
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 28534:
/*!************************************************************************************!*\
  !*** ./src/app/submission/form/collection/submission-form-collection.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SubmissionFormCollectionComponent: () => (/* binding */ SubmissionFormCollectionComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 49966);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 83485);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 17796);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 47386);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 74671);
/* harmony import */ var _core_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/breadcrumbs/dso-name.service */ 96526);
/* harmony import */ var _core_data_collection_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/data/collection-data.service */ 6983);
/* harmony import */ var _core_json_patch_builder_json_patch_operation_path_combiner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/json-patch/builder/json-patch-operation-path-combiner */ 92409);
/* harmony import */ var _core_json_patch_builder_json_patch_operations_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/json-patch/builder/json-patch-operations-builder */ 17184);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/shared/operators */ 55757);
/* harmony import */ var _core_submission_submission_json_patch_operations_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/submission/submission-json-patch-operations.service */ 61183);
/* harmony import */ var _shared_btn_disabled_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/btn-disabled.directive */ 60456);
/* harmony import */ var _shared_collection_dropdown_collection_dropdown_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/collection-dropdown/collection-dropdown.component */ 14860);
/* harmony import */ var _shared_collection_dropdown_themed_collection_dropdown_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/collection-dropdown/themed-collection-dropdown.component */ 90934);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/empty.util */ 82777);
/* harmony import */ var _sections_sections_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../sections/sections.service */ 72147);
/* harmony import */ var _sections_sections_type__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../sections/sections-type */ 88643);
/* harmony import */ var _submission_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../submission.service */ 61010);





























function SubmissionFormCollectionComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 3)(1, "div", 4)(2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "div", 6)(6, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](4, 2, "submission.sections.general.collection"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](8, 4, ctx_r0.selectedCollectionName$));
  }
}
function SubmissionFormCollectionComponent_div_3_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function SubmissionFormCollectionComponent_div_3_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 1, ctx_r0.selectedCollectionName$));
  }
}
function SubmissionFormCollectionComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 7, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("openChange", function SubmissionFormCollectionComponent_div_3_Template_div_openChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r0.toggled($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "div", 4)(3, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("blur", function SubmissionFormCollectionComponent_div_3_Template_button_blur_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r0.onClose());
    })("click", function SubmissionFormCollectionComponent_div_3_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r0.onClose());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](8, SubmissionFormCollectionComponent_div_3_span_8_Template, 2, 0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](10, SubmissionFormCollectionComponent_div_3_span_10_Template, 3, 3, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](11, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "div", 11)(13, "ds-collection-dropdown", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("selectionChange", function SubmissionFormCollectionComponent_div_3_Template_ds_collection_dropdown_selectionChange_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r0.onSelect($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](5, 4, "submission.sections.general.collection"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("dsBtnDisabled", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](7, 6, ctx_r0.processingChange$) || ctx_r0.collectionModifiable === false || ctx_r0.isReadonly);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](9, 8, ctx_r0.processingChange$));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](11, 10, ctx_r0.processingChange$) !== true);
  }
}
/**
 * This component allows to show the current collection the submission belonging to and to change it.
 */
class SubmissionFormCollectionComponent {
  constructor(cdr, collectionDataService, operationsBuilder, operationsService, submissionService, sectionsService, dsoNameService) {
    this.cdr = cdr;
    this.collectionDataService = collectionDataService;
    this.operationsBuilder = operationsBuilder;
    this.operationsService = operationsService;
    this.submissionService = submissionService;
    this.sectionsService = sectionsService;
    this.dsoNameService = dsoNameService;
    /**
     * Checks if the collection can be modifiable by the user
     * @type {booelan}
     */
    this.collectionModifiable = null;
    /**
     * Flag to indicate if the submission dropdown is read only
     */
    this.isReadonly = false;
    /**
     * An event fired when a different collection is selected.
     * Event's payload equals to new SubmissionObject.
     */
    this.collectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_13__.EventEmitter();
    /**
     * A boolean representing if a collection change operation is processing
     * @type {BehaviorSubject<boolean>}
     */
    this.processingChange$ = new rxjs__WEBPACK_IMPORTED_MODULE_14__.BehaviorSubject(false);
    /**
     * Array to track all subscriptions and unsubscribe them onDestroy
     * @type {Array}
     */
    this.subs = [];
  }
  /**
   * Initialize collection list
   */
  ngOnChanges(changes) {
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_9__.hasValue)(changes.currentCollectionId) && (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_9__.hasValue)(changes.currentCollectionId.currentValue)) {
      this.selectedCollectionId = this.currentCollectionId;
      this.selectedCollectionName$ = this.collectionDataService.findById(this.currentCollectionId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.find)(collectionRD => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_9__.isNotEmpty)(collectionRD.payload)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)(collectionRD => this.dsoNameService.getName(collectionRD.payload)));
    }
  }
  /**
   * Initialize all instance variables
   */
  ngOnInit() {
    this.pathCombiner = new _core_json_patch_builder_json_patch_operation_path_combiner__WEBPACK_IMPORTED_MODULE_2__.JsonPatchOperationPathCombiner('sections', 'collection');
    this.available$ = this.sectionsService.isSectionTypeAvailable(this.submissionId, _sections_sections_type__WEBPACK_IMPORTED_MODULE_11__.SectionsType.Collection);
  }
  /**
   * Unsubscribe from all subscriptions
   */
  ngOnDestroy() {
    this.subs.filter(sub => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_9__.hasValue)(sub)).forEach(sub => sub.unsubscribe());
  }
  /**
   * Emit a [collectionChange] event when a new collection is selected from list
   *
   * @param event
   *    the selected [CollectionListEntryItem]
   */
  onSelect(event) {
    this.processingChange$.next(true);
    this.operationsBuilder.replace(this.pathCombiner.getPath(), event.collection.id, true);
    this.subs.push(this.operationsService.jsonPatchByResourceID(this.submissionService.getSubmissionObjectLinkName(), this.submissionId, 'sections', 'collection').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.mergeMap)(submissionObject => {
      // retrieve the full submission object with embeds
      return this.submissionService.retrieveSubmission(submissionObject[0].id).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_4__.getFirstSucceededRemoteDataPayload)());
    })).subscribe(submissionObject => {
      this.selectedCollectionId = event.collection.id;
      this.selectedCollectionName$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.of)(event.collection.name);
      this.collectionChange.emit(submissionObject);
      this.submissionService.changeSubmissionCollection(this.submissionId, event.collection.id);
      this.processingChange$.next(false);
      this.cdr.detectChanges();
    }));
  }
  /**
   * Reset search form control on dropdown menu close
   */
  onClose() {
    this.collectionDropdown?.reset();
  }
  /**
   * Reset search form control when dropdown menu is closed
   *
   * @param isOpen
   *    Representing if the dropdown menu is open or not.
   */
  toggled(isOpen) {
    if (!isOpen) {
      this.collectionDropdown?.reset();
    }
  }
  static {
    this.ɵfac = function SubmissionFormCollectionComponent_Factory(t) {
      return new (t || SubmissionFormCollectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_13__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_core_data_collection_data_service__WEBPACK_IMPORTED_MODULE_1__.CollectionDataService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_core_json_patch_builder_json_patch_operations_builder__WEBPACK_IMPORTED_MODULE_3__.JsonPatchOperationsBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_core_submission_submission_json_patch_operations_service__WEBPACK_IMPORTED_MODULE_5__.SubmissionJsonPatchOperationsService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_submission_service__WEBPACK_IMPORTED_MODULE_12__.SubmissionService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_sections_sections_service__WEBPACK_IMPORTED_MODULE_10__.SectionsService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_core_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_0__.DSONameService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
      type: SubmissionFormCollectionComponent,
      selectors: [["ds-submission-form-collection"]],
      viewQuery: function SubmissionFormCollectionComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_shared_collection_dropdown_collection_dropdown_component__WEBPACK_IMPORTED_MODULE_7__.CollectionDropdownComponent, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.collectionDropdown = _t.first);
        }
      },
      inputs: {
        currentCollectionId: "currentCollectionId",
        currentDefinition: "currentDefinition",
        collectionModifiable: "collectionModifiable",
        submissionId: "submissionId",
        isReadonly: "isReadonly"
      },
      outputs: {
        collectionChange: "collectionChange"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵStandaloneFeature"]],
      decls: 5,
      vars: 6,
      consts: [["collectionControls", "ngbDropdown"], ["class", "input-group mb-3", 4, "ngIf"], ["ngbDropdown", "", "class", "btn-group input-group", 3, "openChange", 4, "ngIf"], [1, "input-group", "mb-3"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "input-group-append"], ["ngbDropdown", "", 1, "btn-group", "input-group", 3, "openChange"], ["id", "collectionControlsMenuLabel", 1, "input-group-text"], ["aria-describedby", "collectionControlsMenuLabel", "id", "collectionControlsMenuButton", "ngbDropdownToggle", "", 1, "btn", "btn-outline-primary", 3, "blur", "click", "dsBtnDisabled"], [4, "ngIf"], ["ngbDropdownMenu", "", "id", "collectionControlsDropdownMenu", "aria-labelledby", "collectionControlsMenuButton", 1, "dropdown-menu", "p-0"], [3, "selectionChange"], [1, "fas", "fa-circle-notch", "fa-spin"]],
      template: function SubmissionFormCollectionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, SubmissionFormCollectionComponent_div_1_Template, 9, 6, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](3, SubmissionFormCollectionComponent_div_3_Template, 14, 12, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](4, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 2, ctx.available$) !== true);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](4, 4, ctx.available$));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_19__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__.TranslatePipe, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__.NgbDropdownModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__.NgbDropdownMenu, _shared_collection_dropdown_themed_collection_dropdown_component__WEBPACK_IMPORTED_MODULE_8__.ThemedCollectionDropdownComponent, _shared_btn_disabled_directive__WEBPACK_IMPORTED_MODULE_6__.BtnDisabledDirective],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n.scrollable-menu[_ngcontent-%COMP%] {\n  height: auto;\n  max-height: var(--ds-dropdown-menu-max-height);\n  overflow-x: hidden;\n}\n\n.collection-item[_ngcontent-%COMP%] {\n  border-bottom: var(--bs-dropdown-border-width) solid var(--bs-dropdown-border-color);\n}\n\n#collectionControlsDropdownMenu[_ngcontent-%COMP%] {\n  outline: 0;\n  left: 0 !important;\n  box-shadow: var(--bs-btn-focus-box-shadow);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1Ym1pc3Npb24tZm9ybS1jb2xsZWN0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBO0FBQ0E7RUFDRSxZQUFBO0VBQ0EsOENBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUNBO0VBQ0Usb0ZBQUE7QUFFRjs7QUFBQTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLDBDQUFBO0FBR0YiLCJmaWxlIjoic3VibWlzc2lvbi1mb3JtLWNvbGxlY3Rpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqL1xuLnNjcm9sbGFibGUtbWVudSB7XG4gIGhlaWdodDogYXV0bztcbiAgbWF4LWhlaWdodDogdmFyKC0tZHMtZHJvcGRvd24tbWVudS1tYXgtaGVpZ2h0KTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuLmNvbGxlY3Rpb24taXRlbSB7XG4gIGJvcmRlci1ib3R0b206IHZhcigtLWJzLWRyb3Bkb3duLWJvcmRlci13aWR0aCkgc29saWQgdmFyKC0tYnMtZHJvcGRvd24tYm9yZGVyLWNvbG9yKTtcbn1cbiNjb2xsZWN0aW9uQ29udHJvbHNEcm9wZG93bk1lbnUge1xuICBvdXRsaW5lOiAwO1xuICBsZWZ0OiAwICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IHZhcigtLWJzLWJ0bi1mb2N1cy1ib3gtc2hhZG93KTtcbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc3VibWlzc2lvbi9mb3JtL2NvbGxlY3Rpb24vc3VibWlzc2lvbi1mb3JtLWNvbGxlY3Rpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQTtFQUNFLFlBQUE7RUFDQSw4Q0FBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxvRkFBQTtBQUVGOztBQUFBO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsMENBQUE7QUFHRjtBQUNBLG9zQ0FBb3NDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi9cbi5zY3JvbGxhYmxlLW1lbnUge1xuICBoZWlnaHQ6IGF1dG87XG4gIG1heC1oZWlnaHQ6IHZhcigtLWRzLWRyb3Bkb3duLW1lbnUtbWF4LWhlaWdodCk7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cbi5jb2xsZWN0aW9uLWl0ZW0ge1xuICBib3JkZXItYm90dG9tOiB2YXIoLS1icy1kcm9wZG93bi1ib3JkZXItd2lkdGgpIHNvbGlkIHZhcigtLWJzLWRyb3Bkb3duLWJvcmRlci1jb2xvcik7XG59XG4jY29sbGVjdGlvbkNvbnRyb2xzRHJvcGRvd25NZW51IHtcbiAgb3V0bGluZTogMDtcbiAgbGVmdDogMCAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiB2YXIoLS1icy1idG4tZm9jdXMtYm94LXNoYWRvdyk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 70812:
/*!****************************************************************************!*\
  !*** ./src/app/submission/form/footer/submission-form-footer.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SubmissionFormFooterComponent: () => (/* binding */ SubmissionFormFooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 17796);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var _core_submission_submission_rest_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/submission/submission-rest.service */ 67625);
/* harmony import */ var _core_submission_submission_scope_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/submission/submission-scope-type */ 83085);
/* harmony import */ var _shared_btn_disabled_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/btn-disabled.directive */ 60456);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/empty.util */ 82777);
/* harmony import */ var _shared_utils_browser_only_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/utils/browser-only.pipe */ 75465);
/* harmony import */ var _submission_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../submission.service */ 61010);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 49966);


















function SubmissionFormFooterComponent_div_0_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "dsBrowserOnly");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SubmissionFormFooterComponent_div_0_button_2_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      const content_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](2);
      $event.preventDefault();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.confirmDiscard(content_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dsBtnDisabled", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 3, ctx_r2.processingSaveStatus) || _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 5, ctx_r2.processingDepositStatus));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-test", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 7, "discard"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](6, 9, "submission.general.discard.submit"), " ");
  }
}
function SubmissionFormFooterComponent_div_0_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 1, "submission.general.info.saved"), " ");
  }
}
function SubmissionFormFooterComponent_div_0_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 1, "submission.general.info.pending-changes"), " ");
  }
}
function SubmissionFormFooterComponent_div_0_div_13_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Saving...");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("width", "100%");
  }
}
function SubmissionFormFooterComponent_div_0_div_13_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Depositing...");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("width", "100%");
  }
}
function SubmissionFormFooterComponent_div_0_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 17)(1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, SubmissionFormFooterComponent_div_0_div_13_div_2_Template, 2, 2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, SubmissionFormFooterComponent_div_0_div_13_div_4_Template, 2, 2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 2, ctx_r2.processingSaveStatus));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 4, ctx_r2.processingDepositStatus));
  }
}
function SubmissionFormFooterComponent_div_0_button_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "dsBrowserOnly");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SubmissionFormFooterComponent_div_0_button_35_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.deposit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dsBtnDisabled", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 3, ctx_r2.processingSaveStatus) || _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 5, ctx_r2.processingDepositStatus));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-test", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 7, "deposit"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](7, 9, "submission.general.deposit"), "");
  }
}
function SubmissionFormFooterComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 2)(1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, SubmissionFormFooterComponent_div_0_button_2_Template, 7, 11, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, SubmissionFormFooterComponent_div_0_span_5_Template, 4, 3, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, SubmissionFormFooterComponent_div_0_span_9_Template, 4, 3, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](10, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](11, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](12, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, SubmissionFormFooterComponent_div_0_div_13_Template, 6, 6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](14, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](15, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 8)(17, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](18, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](19, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](20, "dsBrowserOnly");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SubmissionFormFooterComponent_div_0_Template_button_click_17_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.save($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](22, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](24, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](26, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](27, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](28, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](29, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](30, "dsBrowserOnly");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SubmissionFormFooterComponent_div_0_Template_button_click_25_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.saveLater($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](32, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](34, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](35, SubmissionFormFooterComponent_div_0_button_35_Template, 8, 11, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](36, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 15, ctx_r2.showDepositAndDiscard));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](6, 17, ctx_r2.hasUnsavedModification) !== true && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](7, 19, ctx_r2.processingSaveStatus) !== true && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](8, 21, ctx_r2.processingDepositStatus) !== true);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](10, 23, ctx_r2.hasUnsavedModification) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](11, 25, ctx_r2.processingSaveStatus) !== true && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](12, 27, ctx_r2.processingDepositStatus) !== true);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](14, 29, ctx_r2.processingSaveStatus) || _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](15, 31, ctx_r2.processingDepositStatus));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dsBtnDisabled", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](18, 33, ctx_r2.processingSaveStatus) || _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](19, 35, ctx_r2.hasUnsavedModification) !== true);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-test", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](20, 37, "save"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](24, 39, "submission.general.save"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("btn-primary", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](26, 41, ctx_r2.showDepositAndDiscard) !== true)("btn-secondary", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](27, 43, ctx_r2.showDepositAndDiscard));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dsBtnDisabled", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](28, 45, ctx_r2.processingSaveStatus) || _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](29, 47, ctx_r2.processingDepositStatus));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-test", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](30, 49, "save-for-later"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](34, 51, "submission.general.save-later"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](36, 53, ctx_r2.showDepositAndDiscard));
  }
}
function SubmissionFormFooterComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 23)(1, "h4", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SubmissionFormFooterComponent_ng_template_1_Template_button_click_4_listener() {
      const d_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6).dismiss;
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](d_r7("cancel"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 27)(8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 28)(12, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SubmissionFormFooterComponent_ng_template_1_Template_button_click_12_listener() {
      const c_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6).close;
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](c_r8("cancel"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SubmissionFormFooterComponent_ng_template_1_Template_button_click_15_listener() {
      const c_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6).close;
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](c_r8("ok"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 4, "submission.general.discard.confirm.title"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](10, 6, "submission.general.discard.confirm.info"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](14, 8, "submission.general.discard.confirm.cancel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](17, 10, "submission.general.discard.confirm.submit"));
  }
}
/**
 * This component represents submission form footer bar.
 */
class SubmissionFormFooterComponent {
  /**
   * Initialize instance variables
   *
   * @param {NgbModal} modalService
   * @param {SubmissionRestService} restService
   * @param {SubmissionService} submissionService
   */
  constructor(modalService, restService, submissionService) {
    this.modalService = modalService;
    this.restService = restService;
    this.submissionService = submissionService;
    /**
     * A boolean representing if submission form is valid or not
     * @type {Observable<boolean>}
     */
    this.submissionIsInvalid = (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(true);
  }
  /**
   * Initialize all instance variables
   */
  ngOnChanges(changes) {
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_3__.isNotEmpty)(this.submissionId)) {
      this.submissionIsInvalid = this.submissionService.getSubmissionStatus(this.submissionId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(isValid => isValid === false));
      this.processingSaveStatus = this.submissionService.getSubmissionSaveProcessingStatus(this.submissionId);
      this.processingDepositStatus = this.submissionService.getSubmissionDepositProcessingStatus(this.submissionId);
      this.showDepositAndDiscard = (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(this.submissionService.getSubmissionScope() === _core_submission_submission_scope_type__WEBPACK_IMPORTED_MODULE_1__.SubmissionScopeType.WorkspaceItem);
      this.hasUnsavedModification = this.submissionService.hasUnsavedModification();
    }
  }
  /**
   * Dispatch a submission save action
   */
  save(event) {
    this.submissionService.dispatchSave(this.submissionId, true);
  }
  /**
   * Dispatch a submission save for later action
   */
  saveLater(event) {
    this.submissionService.dispatchSaveForLater(this.submissionId);
  }
  /**
   * Dispatch a submission deposit action
   */
  deposit(event) {
    this.submissionService.dispatchDeposit(this.submissionId);
  }
  /**
   * Dispatch a submission discard action
   */
  confirmDiscard(content) {
    this.modalService.open(content).result.then(result => {
      if (result === 'ok') {
        this.submissionService.dispatchDiscard(this.submissionId);
      }
    });
  }
  static {
    this.ɵfac = function SubmissionFormFooterComponent_Factory(t) {
      return new (t || SubmissionFormFooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_submission_submission_rest_service__WEBPACK_IMPORTED_MODULE_0__.SubmissionRestService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_submission_service__WEBPACK_IMPORTED_MODULE_5__.SubmissionService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: SubmissionFormFooterComponent,
      selectors: [["ds-submission-form-footer"]],
      inputs: {
        submissionId: "submissionId"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵStandaloneFeature"]],
      decls: 3,
      vars: 1,
      consts: [["content", ""], ["class", "row", 4, "ngIf"], [1, "row"], [1, "col"], ["type", "button", "id", "discard", "class", "btn btn-danger", 3, "dsBtnDisabled", "click", 4, "ngIf"], [1, "col", "text-right", "d-flex", "justify-content-end", "align-items-center"], [4, "ngIf"], ["class", "col d-flex justify-content-end align-items-center", 4, "ngIf"], [1, "ml-2", "space-children-mr"], ["type", "button", "id", "save", 1, "btn", "btn-secondary", 3, "click", "dsBtnDisabled"], [1, "fas", "fa-save"], ["type", "button", "id", "saveForLater", 1, "btn", 3, "click", "dsBtnDisabled"], ["type", "button", "id", "deposit", "class", "btn btn-success", 3, "dsBtnDisabled", "click", 4, "ngIf"], ["type", "button", "id", "discard", 1, "btn", "btn-danger", 3, "click", "dsBtnDisabled"], [1, "fas", "fa-trash"], [1, "fas", "fa-check-circle"], [1, "fas", "fa-exclamation-circle"], [1, "col", "d-flex", "justify-content-end", "align-items-center"], [1, "progress", "w-75"], ["class", "progress-bar progress-bar-striped progress-bar-animated bg-info", "role", "progressbar", "aria-valuenow", "100", "aria-valuemin", "0", "aria-valuemax", "100", 3, "width", 4, "ngIf"], ["role", "progressbar", "aria-valuenow", "100", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-striped", "progress-bar-animated", "bg-info"], ["type", "button", "id", "deposit", 1, "btn", "btn-success", 3, "click", "dsBtnDisabled"], [1, "fas", "fa-plus"], [1, "modal-header"], [1, "modal-title", "text-danger"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer", "space-children-mr"], ["type", "button", "id", "discard_cancel", 1, "btn", "btn-secondary", 3, "click"], ["type", "button", "id", "discard_submit", 1, "btn", "btn-danger", 3, "click"]],
      template: function SubmissionFormFooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, SubmissionFormFooterComponent_div_0_Template, 37, 55, "div", 1)(1, SubmissionFormFooterComponent_ng_template_1_Template, 18, 12, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !!ctx.submissionId);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe, _shared_utils_browser_only_pipe__WEBPACK_IMPORTED_MODULE_4__.BrowserOnlyPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe, _shared_btn_disabled_directive__WEBPACK_IMPORTED_MODULE_2__.BtnDisabledDirective],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1Ym1pc3Npb24tZm9ybS1mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUEiLCJmaWxlIjoic3VibWlzc2lvbi1mb3JtLWZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc3VibWlzc2lvbi9mb3JtL2Zvb3Rlci9zdWJtaXNzaW9uLWZvcm0tZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBO0FBQ0Esd2xCQUF3bEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqLyJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 95912:
/*!**************************************************************************************!*\
  !*** ./src/app/submission/form/section-add/submission-form-section-add.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SubmissionFormSectionAddComponent: () => (/* binding */ SubmissionFormSectionAddComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 49966);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var _shared_btn_disabled_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/btn-disabled.directive */ 60456);
/* harmony import */ var _shared_host_window_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/host-window.service */ 57538);
/* harmony import */ var _sections_sections_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../sections/sections.service */ 72147);
/* harmony import */ var _submission_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../submission.service */ 61010);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 90310);















const _c0 = a0 => ({
  "w-100": a0
});
function SubmissionFormSectionAddComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dsBtnDisabled", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 3, ctx_r0.hasSections$) !== true)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](9, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 5, ctx_r0.windowService.isXs())));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 7, "submission.sections.general.add-more"), " ");
  }
}
function SubmissionFormSectionAddComponent_button_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "submission.sections.general.no-sections"), " ");
  }
}
function SubmissionFormSectionAddComponent_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SubmissionFormSectionAddComponent_button_8_Template_button_click_0_listener() {
      const listItem_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r0.addSection(listItem_r3.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const listItem_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "submission.sections." + listItem_r3.header), " ");
  }
}
/**
 * This component allow to add any new section to submission form
 */
class SubmissionFormSectionAddComponent {
  /**
   * Initialize instance variables
   *
   * @param {SectionsService} sectionService
   * @param {SubmissionService} submissionService
   * @param {HostWindowService} windowService
   */
  constructor(sectionService, submissionService, windowService) {
    this.sectionService = sectionService;
    this.submissionService = submissionService;
    this.windowService = windowService;
  }
  /**
   * Initialize all instance variables
   */
  ngOnInit() {
    this.sectionList$ = this.submissionService.getDisabledSectionsList(this.submissionId);
    this.hasSections$ = this.sectionList$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(list => list.length > 0));
  }
  /**
   * Dispatch an action to add a new section
   */
  addSection(sectionId) {
    this.sectionService.addSection(this.submissionId, sectionId);
  }
  static {
    this.ɵfac = function SubmissionFormSectionAddComponent_Factory(t) {
      return new (t || SubmissionFormSectionAddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_sections_sections_service__WEBPACK_IMPORTED_MODULE_2__.SectionsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_submission_service__WEBPACK_IMPORTED_MODULE_3__.SubmissionService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_host_window_service__WEBPACK_IMPORTED_MODULE_1__.HostWindowService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: SubmissionFormSectionAddComponent,
      selectors: [["ds-submission-form-section-add"]],
      inputs: {
        collectionId: "collectionId",
        submissionId: "submissionId"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
      decls: 10,
      vars: 17,
      consts: [["sectionAdd", "ngbDropdown"], ["ngbDropdown", "", "placement", "bottom-right", 1, "d-inline-block", 3, "ngClass"], [4, "ngIf"], ["ngbDropdownMenu", "", "aria-labelledby", "sectionControls", 1, "sections-dropdown-menu", 3, "ngClass"], ["class", "dropdown-item disabled", 4, "ngIf"], ["class", "dropdown-item", 3, "click", 4, "ngFor", "ngForOf"], ["id", "sectionControls", "ngbDropdownToggle", "", 1, "btn", "btn-outline-primary", "dropdown-toggle", 3, "dsBtnDisabled", "ngClass"], ["aria-hidden", "true", 1, "fa", "fa-plus"], [1, "dropdown-item", "disabled"], [1, "dropdown-item", 3, "click"]],
      template: function SubmissionFormSectionAddComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, SubmissionFormSectionAddComponent_ng_container_2_Template, 7, 11, "ng-container", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, SubmissionFormSectionAddComponent_button_6_Template, 3, 3, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, SubmissionFormSectionAddComponent_button_8_Template, 3, 3, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](9, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](13, _c0, ctx.windowService.isXs()));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 5, ctx.hasSections$));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](15, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 7, ctx.windowService.isXs())));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 9, ctx.hasSections$) !== true);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](9, 11, ctx.sectionList$));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbDropdownModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbDropdownMenu, _shared_btn_disabled_directive__WEBPACK_IMPORTED_MODULE_0__.BtnDisabledDirective],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n.dropdown-toggle[_ngcontent-%COMP%]::after {\n  display: none;\n}\n\n.sections-dropdown-menu[_ngcontent-%COMP%] {\n  z-index: var(--ds-submission-header-z-index);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1Ym1pc3Npb24tZm9ybS1zZWN0aW9uLWFkZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBO0VBQ0UsYUFBQTtBQUNGOztBQUNBO0VBQ0UsNENBQUE7QUFFRiIsImZpbGUiOiJzdWJtaXNzaW9uLWZvcm0tc2VjdGlvbi1hZGQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqL1xuLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnNlY3Rpb25zLWRyb3Bkb3duLW1lbnUge1xuICB6LWluZGV4OiB2YXIoLS1kcy1zdWJtaXNzaW9uLWhlYWRlci16LWluZGV4KTtcbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc3VibWlzc2lvbi9mb3JtL3NlY3Rpb24tYWRkL3N1Ym1pc3Npb24tZm9ybS1zZWN0aW9uLWFkZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBO0VBQ0UsYUFBQTtBQUNGOztBQUNBO0VBQ0UsNENBQUE7QUFFRjtBQUNBLHcwQkFBdzBCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi9cbi5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5zZWN0aW9ucy1kcm9wZG93bi1tZW51IHtcbiAgei1pbmRleDogdmFyKC0tZHMtc3VibWlzc2lvbi1oZWFkZXItei1pbmRleCk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 85390:
/*!**************************************************************!*\
  !*** ./src/app/submission/form/submission-form.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SubmissionFormComponent: () => (/* binding */ SubmissionFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isEqual */ 21016);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 17796);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 85687);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs/operators */ 64785);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs/operators */ 84975);
/* harmony import */ var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/auth/auth.service */ 67116);
/* harmony import */ var _core_config_models_config_submission_definitions_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/config/models/config-submission-definitions.model */ 91951);
/* harmony import */ var _core_shared_hal_endpoint_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/shared/hal-endpoint.service */ 4910);
/* harmony import */ var _core_shared_item_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/shared/item.model */ 88318);
/* harmony import */ var _core_submission_models_workspaceitem_sections_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/submission/models/workspaceitem-sections.model */ 98704);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/empty.util */ 82777);
/* harmony import */ var _shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/loading/themed-loading.component */ 82394);
/* harmony import */ var _shared_upload_uploader_uploader_options_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/upload/uploader/uploader-options.model */ 32979);
/* harmony import */ var _sections_container_section_container_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../sections/container/section-container.component */ 97984);
/* harmony import */ var _sections_sections_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../sections/sections.service */ 72147);
/* harmony import */ var _sections_sections_type__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../sections/sections-type */ 88643);
/* harmony import */ var _sections_visibility_type__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../sections/visibility-type */ 14723);
/* harmony import */ var _submission_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../submission.service */ 61010);
/* harmony import */ var _collection_submission_form_collection_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./collection/submission-form-collection.component */ 28534);
/* harmony import */ var _footer_submission_form_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./footer/submission-form-footer.component */ 70812);
/* harmony import */ var _section_add_submission_form_section_add_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./section-add/submission-form-section-add.component */ 95912);
/* harmony import */ var _submission_upload_files_themed_submission_upload_files_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./submission-upload-files/themed-submission-upload-files.component */ 32650);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 90310);




























function SubmissionFormComponent_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](1, "ds-submission-upload-files", 13)(2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("submissionId", ctx_r0.submissionId)("collectionId", ctx_r0.collectionId)("uploadFilesOptions", ctx_r0.uploadFilesOptions);
  }
}
function SubmissionFormComponent_div_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "ds-submission-form-collection", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("collectionChange", function SubmissionFormComponent_div_1_ng_container_4_Template_ds_submission_form_collection_collectionChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r0.onCollectionChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("currentCollectionId", ctx_r0.collectionId)("currentDefinition", ctx_r0.definitionId)("submissionId", ctx_r0.submissionId)("collectionModifiable", ctx_r0.collectionModifiable)("isReadonly", ctx_r0.isSectionReadonly);
  }
}
function SubmissionFormComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, SubmissionFormComponent_div_1_div_1_Template, 3, 3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](4, SubmissionFormComponent_div_1_ng_container_4_Template, 2, 5, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](6, "ds-submission-form-section-add", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 4, ctx_r0.uploadEnabled$));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !ctx_r0.isSectionHidden);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("collectionId", ctx_r0.collectionId)("submissionId", ctx_r0.submissionId);
  }
}
function SubmissionFormComponent_ds_loading_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "ds-loading", 16);
  }
}
function SubmissionFormComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](1, "ds-submission-section-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const object_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("collectionId", ctx_r0.collectionId)("submissionId", ctx_r0.submissionId)("sectionData", object_r3);
  }
}
function SubmissionFormComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](1, "ds-submission-form-footer", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("submissionId", ctx_r0.submissionId);
  }
}
/**
 * This component represents the submission form.
 */
class SubmissionFormComponent {
  /**
   * Initialize instance variables
   *
   * @param {AuthService} authService
   * @param {ChangeDetectorRef} changeDetectorRef
   * @param {HALEndpointService} halService
   * @param {SubmissionService} submissionService
   * @param {SectionsService} sectionsService
   */
  constructor(authService, changeDetectorRef, halService, submissionService, sectionsService) {
    this.authService = authService;
    this.changeDetectorRef = changeDetectorRef;
    this.halService = halService;
    this.submissionService = submissionService;
    this.sectionsService = sectionsService;
    /**
     * Checks if the collection can be modifiable by the user
     * @type {boolean}
     */
    this.collectionModifiable = null;
    /**
     * A boolean representing if a submission form is pending
     * @type {Observable<boolean>}
     */
    this.loading = (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.of)(true);
    /**
     * The uploader configuration options
     * @type {UploaderOptions}
     */
    this.uploadFilesOptions = new _shared_upload_uploader_uploader_options_model__WEBPACK_IMPORTED_MODULE_8__.UploaderOptions();
    /**
     * Array to track all subscriptions and unsubscribe them onDestroy
     * @type {Array}
     */
    this.subs = [];
    this.isActive = true;
  }
  /**
   * Initialize all instance variables and retrieve form configuration
   */
  ngOnChanges(changes) {
    if (changes.collectionId && this.collectionId && changes.submissionId && this.submissionId) {
      this.isActive = true;
      // retrieve submission's section list
      this.submissionSections = this.submissionService.getSubmissionObject(this.submissionId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.filter)(() => this.isActive), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.map)(submission => submission.isLoading), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.map)(isLoading => isLoading), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.switchMap)(isLoading => {
        if (!isLoading) {
          return this.getSectionsList();
        } else {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.of)([]);
        }
      }));
      this.uploadEnabled$ = this.sectionsService.isSectionTypeAvailable(this.submissionId, _sections_sections_type__WEBPACK_IMPORTED_MODULE_11__.SectionsType.Upload);
      // check if is submission loading
      this.loading = this.submissionService.getSubmissionObject(this.submissionId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.filter)(() => this.isActive), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.map)(submission => submission.isLoading), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.map)(isLoading => isLoading), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.distinctUntilChanged)());
      // init submission state
      this.subs.push(this.halService.getEndpoint(this.submissionService.getSubmissionObjectLinkName()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.filter)(href => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_6__.isNotEmpty)(href)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.distinctUntilChanged)()).subscribe(endpointURL => {
        this.uploadFilesOptions.authToken = this.authService.buildAuthHeader();
        this.uploadFilesOptions.url = endpointURL.concat(`/${this.submissionId}`);
        this.definitionId = this.submissionDefinition.name;
        this.submissionService.dispatchInit(this.collectionId, this.submissionId, this.selfUrl, this.submissionDefinition, this.sections, this.item, this.submissionErrors);
        this.changeDetectorRef.detectChanges();
      }));
      // start auto save
      this.submissionService.startAutoSave(this.submissionId);
    }
  }
  /**
   *  Returns the visibility object of the collection section
   */
  getCollectionVisibility() {
    const submissionSectionModel = this.submissionDefinition.sections.page.find(section => lodash_isEqual__WEBPACK_IMPORTED_MODULE_0___default()(section.sectionType, _sections_sections_type__WEBPACK_IMPORTED_MODULE_11__.SectionsType.Collection));
    return (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_6__.isNotUndefined)(submissionSectionModel.visibility) ? submissionSectionModel.visibility : null;
  }
  /**
   * Getter to see if the collection section visibility is hidden
   */
  get isSectionHidden() {
    const visibility = this.getCollectionVisibility();
    return (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_6__.hasValue)(visibility) && lodash_isEqual__WEBPACK_IMPORTED_MODULE_0___default()(visibility.main, _sections_visibility_type__WEBPACK_IMPORTED_MODULE_12__.VisibilityType.HIDDEN) && lodash_isEqual__WEBPACK_IMPORTED_MODULE_0___default()(visibility.other, _sections_visibility_type__WEBPACK_IMPORTED_MODULE_12__.VisibilityType.HIDDEN);
  }
  /**
   * Getter to see if the collection section visibility is readonly
   */
  get isSectionReadonly() {
    const visibility = this.getCollectionVisibility();
    return (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_6__.hasValue)(visibility) && lodash_isEqual__WEBPACK_IMPORTED_MODULE_0___default()(visibility.main, _sections_visibility_type__WEBPACK_IMPORTED_MODULE_12__.VisibilityType.READONLY) && lodash_isEqual__WEBPACK_IMPORTED_MODULE_0___default()(visibility.other, _sections_visibility_type__WEBPACK_IMPORTED_MODULE_12__.VisibilityType.READONLY);
  }
  /**
   * Unsubscribe from all subscriptions, destroy instance variables
   * and reset submission state
   */
  ngOnDestroy() {
    this.isActive = false;
    this.submissionService.stopAutoSave();
    this.submissionService.resetAllSubmissionObjects();
    this.subs.filter(subscription => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_6__.hasValue)(subscription)).forEach(subscription => subscription.unsubscribe());
  }
  /**
   * On collection change reset submission state in case of it has a different
   * submission definition
   *
   * @param submissionObject
   *    new submission object
   */
  onCollectionChange(submissionObject) {
    this.collectionId = submissionObject.collection.id;
    if (this.definitionId !== submissionObject.submissionDefinition.name) {
      this.sections = submissionObject.sections;
      this.submissionDefinition = submissionObject.submissionDefinition;
      this.definitionId = this.submissionDefinition.name;
      this.submissionService.resetSubmissionObject(this.collectionId, this.submissionId, submissionObject._links.self.href, this.submissionDefinition, this.sections, this.item);
    } else {
      this.changeDetectorRef.detectChanges();
    }
  }
  /**
   * Check if submission form is loading
   */
  isLoading() {
    return this.loading;
  }
  /**
   * Check if submission form is loading
   */
  getSectionsList() {
    return this.submissionService.getSubmissionSections(this.submissionId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.filter)(sections => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_6__.isNotEmpty)(sections)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.map)(sections => sections.filter(section => !lodash_isEqual__WEBPACK_IMPORTED_MODULE_0___default()(section.sectionType, _sections_sections_type__WEBPACK_IMPORTED_MODULE_11__.SectionsType.Collection))));
  }
  static {
    this.ɵfac = function SubmissionFormComponent_Factory(t) {
      return new (t || SubmissionFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_18__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_core_shared_hal_endpoint_service__WEBPACK_IMPORTED_MODULE_3__.HALEndpointService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_submission_service__WEBPACK_IMPORTED_MODULE_13__.SubmissionService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_sections_sections_service__WEBPACK_IMPORTED_MODULE_10__.SectionsService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineComponent"]({
      type: SubmissionFormComponent,
      selectors: [["ds-submission-form"]],
      inputs: {
        collectionId: "collectionId",
        item: "item",
        collectionModifiable: "collectionModifiable",
        sections: "sections",
        submissionErrors: "submissionErrors",
        selfUrl: "selfUrl",
        submissionDefinition: "submissionDefinition",
        submissionId: "submissionId"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵStandaloneFeature"]],
      decls: 10,
      vars: 12,
      consts: [[1, "container-fluid"], ["class", "submission-form-header mb-3 d-flex flex-wrap position-sticky", 4, "ngIf"], [1, "submission-form-content"], ["message", "Loading...", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["class", "submission-form-footer mt-3 mb-3 position-sticky", 4, "ngIf"], [1, "submission-form-header", "mb-3", "d-flex", "flex-wrap", "position-sticky"], ["class", "w-100", 4, "ngIf"], [1, "submission-form-header-item", "mb-3", "mb-sm-0", "flex-sm-grow-1", "flex-md-grow-0"], [4, "ngIf"], [1, "submission-form-header-item", "text-right"], [3, "collectionId", "submissionId"], [1, "w-100"], [3, "submissionId", "collectionId", "uploadFilesOptions"], [1, "clearfix"], [3, "collectionChange", "currentCollectionId", "currentDefinition", "submissionId", "collectionModifiable", "isReadonly"], ["message", "Loading..."], [3, "collectionId", "submissionId", "sectionData"], [1, "submission-form-footer", "mt-3", "mb-3", "position-sticky"], [3, "submissionId"]],
      template: function SubmissionFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, SubmissionFormComponent_div_1_Template, 7, 6, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](4, SubmissionFormComponent_ds_loading_4_Template, 1, 0, "ds-loading", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](5, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](6, SubmissionFormComponent_ng_container_6_Template, 2, 3, "ng-container", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](7, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](8, SubmissionFormComponent_div_8_Template, 2, 1, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](9, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 4, ctx.isLoading()) !== true);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](5, 6, ctx.isLoading()));
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](7, 8, ctx.submissionSections));
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](9, 10, ctx.isLoading()) !== true);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_24__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_24__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_24__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_24__.AsyncPipe, _shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_7__.ThemedLoadingComponent, _sections_container_section_container_component__WEBPACK_IMPORTED_MODULE_9__.SubmissionSectionContainerComponent, _footer_submission_form_footer_component__WEBPACK_IMPORTED_MODULE_15__.SubmissionFormFooterComponent, _submission_upload_files_themed_submission_upload_files_component__WEBPACK_IMPORTED_MODULE_17__.ThemedSubmissionUploadFilesComponent, _collection_submission_form_collection_component__WEBPACK_IMPORTED_MODULE_14__.SubmissionFormCollectionComponent, _section_add_submission_form_section_add_component__WEBPACK_IMPORTED_MODULE_16__.SubmissionFormSectionAddComponent],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n.submission-form-header[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.97);\n  padding: calc(var(--bs-spacer) / 2) 0 calc(var(--bs-spacer) / 2) 0;\n  top: 0;\n  z-index: var(--ds-submission-header-z-index);\n}\n\n.submission-form-header-item[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n\n.submission-form-footer[_ngcontent-%COMP%] {\n  border-radius: var(--bs-card-border-radius);\n  bottom: 0;\n  background-color: var(--bs-gray-400);\n  padding: calc(var(--bs-spacer) / 2);\n  z-index: var(--ds-submission-footer-z-index);\n}\n\n.btn-link-focus[_ngcontent-%COMP%] {\n  font-weight: 400;\n  color: #1F7293;\n  text-decoration: none;\n}\n\n.btn-link-focus[_ngcontent-%COMP%]:hover {\n  color: rgb(18, 65, 84);\n  text-decoration: underline;\n}\n\n.btn-link-focus[_ngcontent-%COMP%]:disabled, .btn-link-focus.disabled[_ngcontent-%COMP%] {\n  color: #6c757d;\n  pointer-events: none;\n}\n\n.btn-link-focus[_ngcontent-%COMP%]:focus, .btn-link-focus.focus[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1Ym1pc3Npb24tZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBO0VBQ0UsMkNBQUE7RUFDQSxrRUFBQTtFQUNBLE1BQUE7RUFDQSw0Q0FBQTtBQUNGOztBQUNBO0VBQ0UsWUFBQTtBQUVGOztBQUFBO0VBQ0UsMkNBQUE7RUFDQSxTQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtFQUNBLDRDQUFBO0FBR0Y7O0FBREE7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQUlGOztBQUZBO0VBQ0Usc0JBQUE7RUFDQSwwQkFBQTtBQUtGOztBQUhBO0VBQ0UsY0FBQTtFQUNBLG9CQUFBO0FBTUY7O0FBSkE7RUFDRSwwQkFBQTtBQU9GIiwiZmlsZSI6InN1Ym1pc3Npb24tZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovXG4uc3VibWlzc2lvbi1mb3JtLWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45Nyk7XG4gIHBhZGRpbmc6IGNhbGModmFyKC0tYnMtc3BhY2VyKSAvIDIpIDAgY2FsYyh2YXIoLS1icy1zcGFjZXIpIC8gMikgMDtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiB2YXIoLS1kcy1zdWJtaXNzaW9uLWhlYWRlci16LWluZGV4KTtcbn1cbi5zdWJtaXNzaW9uLWZvcm0taGVhZGVyLWl0ZW0ge1xuICBmbGV4LWdyb3c6IDE7XG59XG4uc3VibWlzc2lvbi1mb3JtLWZvb3RlciB7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJzLWNhcmQtYm9yZGVyLXJhZGl1cyk7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnMtZ3JheS00MDApO1xuICBwYWRkaW5nOiBjYWxjKHZhcigtLWJzLXNwYWNlcikgLyAyKTtcbiAgei1pbmRleDogdmFyKC0tZHMtc3VibWlzc2lvbi1mb290ZXItei1pbmRleCk7XG59XG4uYnRuLWxpbmstZm9jdXMge1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogIzFGNzI5MztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmJ0bi1saW5rLWZvY3VzOmhvdmVyIHtcbiAgY29sb3I6IHJnYigxNy42NzY5NjYyOTIxLCA2NS4wMDU2MTc5Nzc1LCA4My44MjMwMzM3MDc5KTtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG4uYnRuLWxpbmstZm9jdXM6ZGlzYWJsZWQsIC5idG4tbGluay1mb2N1cy5kaXNhYmxlZCB7XG4gIGNvbG9yOiAjNmM3NTdkO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi5idG4tbGluay1mb2N1czpmb2N1cywgLmJ0bi1saW5rLWZvY3VzLmZvY3VzIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc3VibWlzc2lvbi9mb3JtL3N1Ym1pc3Npb24tZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBO0VBQ0UsMkNBQUE7RUFDQSxrRUFBQTtFQUNBLE1BQUE7RUFDQSw0Q0FBQTtBQUNGOztBQUNBO0VBQ0UsWUFBQTtBQUVGOztBQUFBO0VBQ0UsMkNBQUE7RUFDQSxTQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtFQUNBLDRDQUFBO0FBR0Y7O0FBREE7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQUlGOztBQUZBO0VBQ0Usc0JBQUE7RUFDQSwwQkFBQTtBQUtGOztBQUhBO0VBQ0UsY0FBQTtFQUNBLG9CQUFBO0FBTUY7O0FBSkE7RUFDRSwwQkFBQTtBQU9GO0FBQ0Esd2pFQUF3akUiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqL1xuLnN1Ym1pc3Npb24tZm9ybS1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTcpO1xuICBwYWRkaW5nOiBjYWxjKHZhcigtLWJzLXNwYWNlcikgLyAyKSAwIGNhbGModmFyKC0tYnMtc3BhY2VyKSAvIDIpIDA7XG4gIHRvcDogMDtcbiAgei1pbmRleDogdmFyKC0tZHMtc3VibWlzc2lvbi1oZWFkZXItei1pbmRleCk7XG59XG4uc3VibWlzc2lvbi1mb3JtLWhlYWRlci1pdGVtIHtcbiAgZmxleC1ncm93OiAxO1xufVxuLnN1Ym1pc3Npb24tZm9ybS1mb290ZXIge1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1icy1jYXJkLWJvcmRlci1yYWRpdXMpO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJzLWdyYXktNDAwKTtcbiAgcGFkZGluZzogY2FsYyh2YXIoLS1icy1zcGFjZXIpIC8gMik7XG4gIHotaW5kZXg6IHZhcigtLWRzLXN1Ym1pc3Npb24tZm9vdGVyLXotaW5kZXgpO1xufVxuLmJ0bi1saW5rLWZvY3VzIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICMxRjcyOTM7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5idG4tbGluay1mb2N1czpob3ZlciB7XG4gIGNvbG9yOiByZ2IoMTcuNjc2OTY2MjkyMSwgNjUuMDA1NjE3OTc3NSwgODMuODIzMDMzNzA3OSk7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuLmJ0bi1saW5rLWZvY3VzOmRpc2FibGVkLCAuYnRuLWxpbmstZm9jdXMuZGlzYWJsZWQge1xuICBjb2xvcjogIzZjNzU3ZDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4uYnRuLWxpbmstZm9jdXM6Zm9jdXMsIC5idG4tbGluay1mb2N1cy5mb2N1cyB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 93256:
/*!**********************************************************************************************!*\
  !*** ./src/app/submission/form/submission-upload-files/submission-upload-files.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SubmissionUploadFilesComponent: () => (/* binding */ SubmissionUploadFilesComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 17796);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 46891);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 78374);
/* harmony import */ var _core_submission_submission_json_patch_operations_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/submission/submission-json-patch-operations.service */ 61183);
/* harmony import */ var _core_submission_submission_response_parsing_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/submission/submission-response-parsing.service */ 97313);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/empty.util */ 82777);
/* harmony import */ var _shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/notifications/notifications.service */ 69472);
/* harmony import */ var _shared_upload_uploader_uploader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/upload/uploader/uploader.component */ 18430);
/* harmony import */ var _shared_upload_uploader_uploader_options_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/upload/uploader/uploader-options.model */ 32979);
/* harmony import */ var _sections_sections_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../sections/sections.service */ 72147);
/* harmony import */ var _sections_sections_type__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../sections/sections-type */ 88643);
/* harmony import */ var _submission_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../submission.service */ 61010);
/* harmony import */ var _utils_parseSectionErrors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/parseSectionErrors */ 7020);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 96439);




















function SubmissionUploadFilesComponent_ds_uploader_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ds-uploader", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("onCompleteItem", function SubmissionUploadFilesComponent_ds_uploader_0_Template_ds_uploader_onCompleteItem_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.onCompleteItem($event));
    })("onUploadError", function SubmissionUploadFilesComponent_ds_uploader_0_Template_ds_uploader_onUploadError_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.onUploadError());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("dropMsg", ctx_r1.dropMsg)("dropOverDocumentMsg", ctx_r1.dropOverDocumentMsg)("enableDragOverDocument", ctx_r1.enableDragOverDocument)("onBeforeUpload", ctx_r1.onBeforeUpload)("uploadFilesOptions", ctx_r1.uploadFilesOptions);
  }
}
/**
 * This component represents the drop zone that provides to add files to the submission.
 */
class SubmissionUploadFilesComponent {
  /**
   * Initialize instance variables
   *
   * @param {NotificationsService} notificationsService
   * @param {SubmissionJsonPatchOperationsService} operationsService
   * @param {SectionsService} sectionService
   * @param {SubmissionService} submissionService
   * @param {TranslateService} translate
   */
  constructor(notificationsService, operationsService, sectionService, submissionService, translate) {
    this.notificationsService = notificationsService;
    this.operationsService = operationsService;
    this.sectionService = sectionService;
    this.submissionService = submissionService;
    this.translate = translate;
    /**
     * A boolean representing if is possible to active drop zone over the document page
     * @type {boolean}
     */
    this.enableDragOverDocument = true;
    /**
     * i18n message label
     * @type {string}
     */
    this.dropOverDocumentMsg = 'submission.sections.upload.drop-message';
    /**
     * i18n message label
     * @type {string}
     */
    this.dropMsg = 'submission.sections.upload.drop-message';
    /**
     * Array to track all subscriptions and unsubscribe them onDestroy
     * @type {Array}
     */
    this.subs = [];
    /**
     * A boolean representing if upload functionality is enabled
     * @type {boolean}
     */
    this.uploadEnabled = (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)(false);
    /**
     * Save submission before to upload a file
     */
    this.onBeforeUpload = () => {
      const sub = this.operationsService.jsonPatchByResourceType(this.submissionService.getSubmissionObjectLinkName(), this.submissionId, 'sections').subscribe();
      this.subs.push(sub);
      return sub;
    };
  }
  /**
   * Check if upload functionality is enabled
   */
  ngOnChanges() {
    this.uploadEnabled = this.sectionService.isSectionTypeAvailable(this.submissionId, _sections_sections_type__WEBPACK_IMPORTED_MODULE_7__.SectionsType.Upload);
  }
  /**
   * Parse the submission object retrieved from REST after upload
   *
   * @param workspaceitem
   *    The submission object retrieved from REST
   */
  onCompleteItem(workspaceitem) {
    // Checks if upload section is enabled so do upload
    this.subs.push(this.uploadEnabled.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.first)()).subscribe(isUploadEnabled => {
      if (isUploadEnabled) {
        const {
          sections
        } = workspaceitem;
        const {
          errors
        } = workspaceitem;
        const errorsList = (0,_utils_parseSectionErrors__WEBPACK_IMPORTED_MODULE_9__["default"])(errors);
        if (sections && (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_2__.isNotEmpty)(sections)) {
          Object.keys(sections).forEach(sectionId => {
            const sectionData = (0,_core_submission_submission_response_parsing_service__WEBPACK_IMPORTED_MODULE_1__.normalizeSectionData)(sections[sectionId]);
            const sectionErrors = errorsList[sectionId];
            this.sectionService.isSectionType(this.submissionId, sectionId, _sections_sections_type__WEBPACK_IMPORTED_MODULE_7__.SectionsType.Upload).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.take)(1)).subscribe(isUpload => {
              if (isUpload) {
                // Look for errors on upload
                if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_2__.isEmpty)(sectionErrors)) {
                  this.notificationsService.success(null, this.translate.get('submission.sections.upload.upload-successful'));
                } else {
                  this.notificationsService.error(null, this.translate.get('submission.sections.upload.upload-failed'));
                }
              }
            });
            this.sectionService.updateSectionData(this.submissionId, sectionId, sectionData, sectionErrors, sectionErrors);
          });
        }
      }
    }));
  }
  /**
   * Show error notification on upload fails
   */
  onUploadError() {
    this.notificationsService.error(null, this.translate.get('submission.sections.upload.upload-failed'));
  }
  /**
   * Unsubscribe from all subscriptions
   */
  ngOnDestroy() {
    this.subs.filter(subscription => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_2__.hasValue)(subscription)).forEach(subscription => subscription.unsubscribe());
  }
  static {
    this.ɵfac = function SubmissionUploadFilesComponent_Factory(t) {
      return new (t || SubmissionUploadFilesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_3__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_submission_submission_json_patch_operations_service__WEBPACK_IMPORTED_MODULE_0__.SubmissionJsonPatchOperationsService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_sections_sections_service__WEBPACK_IMPORTED_MODULE_6__.SectionsService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_submission_service__WEBPACK_IMPORTED_MODULE_8__.SubmissionService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
      type: SubmissionUploadFilesComponent,
      selectors: [["ds-base-submission-upload-files"]],
      inputs: {
        collectionId: "collectionId",
        submissionId: "submissionId",
        uploadFilesOptions: "uploadFilesOptions"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵStandaloneFeature"]],
      decls: 1,
      vars: 1,
      consts: [[3, "dropMsg", "dropOverDocumentMsg", "enableDragOverDocument", "onBeforeUpload", "uploadFilesOptions", "onCompleteItem", "onUploadError", 4, "ngIf"], [3, "onCompleteItem", "onUploadError", "dropMsg", "dropOverDocumentMsg", "enableDragOverDocument", "onBeforeUpload", "uploadFilesOptions"]],
      template: function SubmissionUploadFilesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](0, SubmissionUploadFilesComponent_ds_uploader_0_Template, 1, 5, "ds-uploader", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.uploadFilesOptions.url);
        }
      },
      dependencies: [_shared_upload_uploader_uploader_component__WEBPACK_IMPORTED_MODULE_4__.UploaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 32650:
/*!*****************************************************************************************************!*\
  !*** ./src/app/submission/form/submission-upload-files/themed-submission-upload-files.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemedSubmissionUploadFilesComponent: () => (/* binding */ ThemedSubmissionUploadFilesComponent)
/* harmony export */ });
/* harmony import */ var _shared_theme_support_themed_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/theme-support/themed.component */ 8886);
/* harmony import */ var _shared_upload_uploader_uploader_options_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/upload/uploader/uploader-options.model */ 32979);
/* harmony import */ var _submission_upload_files_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./submission-upload-files.component */ 93256);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 90310);




const _c0 = ["*"];
function ThemedSubmissionUploadFilesComponent_ng_template_0_Template(rf, ctx) {}
/**
 * Themed wrapper for {@link SubmissionUploadFilesComponent}
 */
class ThemedSubmissionUploadFilesComponent extends _shared_theme_support_themed_component__WEBPACK_IMPORTED_MODULE_0__.ThemedComponent {
  constructor() {
    super(...arguments);
    this.inAndOutputNames = ['collectionId', 'submissionId', 'uploadFilesOptions'];
  }
  getComponentName() {
    return 'SubmissionUploadFilesComponent';
  }
  importThemedComponent(themeName) {
    return __webpack_require__(28767)(`./${themeName}/app/submission/form/submission-upload-files/submission-upload-files.component.ts`);
  }
  importUnthemedComponent() {
    return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./submission-upload-files.component */ 93256));
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵThemedSubmissionUploadFilesComponent_BaseFactory;
      return function ThemedSubmissionUploadFilesComponent_Factory(t) {
        return (ɵThemedSubmissionUploadFilesComponent_BaseFactory || (ɵThemedSubmissionUploadFilesComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](ThemedSubmissionUploadFilesComponent)))(t || ThemedSubmissionUploadFilesComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: ThemedSubmissionUploadFilesComponent,
      selectors: [["ds-submission-upload-files"]],
      inputs: {
        collectionId: "collectionId",
        submissionId: "submissionId",
        uploadFilesOptions: "uploadFilesOptions"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
      ngContentSelectors: _c0,
      decls: 5,
      vars: 0,
      consts: [["vcr", ""], ["content", ""]],
      template: function ThemedSubmissionUploadFilesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ThemedSubmissionUploadFilesComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", null, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      },
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 25386:
/*!****************************************************************************!*\
  !*** ./src/app/submission/sections/accesses/section-accesses.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SubmissionSectionAccessesComponent: () => (/* binding */ SubmissionSectionAccessesComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-dynamic-forms/core */ 94403);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs */ 27639);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs */ 17796);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 78374);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 85687);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 74671);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var _core_config_submission_accesses_config_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/config/submission-accesses-config-data.service */ 4319);
/* harmony import */ var _core_json_patch_builder_json_patch_operation_path_combiner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/json-patch/builder/json-patch-operation-path-combiner */ 92409);
/* harmony import */ var _core_json_patch_builder_json_patch_operations_builder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/json-patch/builder/json-patch-operations-builder */ 17184);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/shared/operators */ 55757);
/* harmony import */ var _core_submission_submission_json_patch_operations_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/submission/submission-json-patch-operations.service */ 61183);
/* harmony import */ var _shared_date_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/date.util */ 63604);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/empty.util */ 82777);
/* harmony import */ var _shared_form_builder_form_builder_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/form/builder/form-builder.service */ 1216);
/* harmony import */ var _shared_form_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/form/form.component */ 99386);
/* harmony import */ var _shared_form_form_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/form/form.service */ 15390);
/* harmony import */ var _form_section_form_operations_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../form/section-form-operations.service */ 71343);
/* harmony import */ var _models_section_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../models/section.model */ 70507);
/* harmony import */ var _sections_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../sections.service */ 72147);
/* harmony import */ var _section_accesses_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./section-accesses.model */ 76440);
/* harmony import */ var _section_accesses_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./section-accesses.service */ 46670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ngx-translate/core */ 96439);






























const _c0 = ["formRef"];
function SubmissionSectionAccessesComponent_ds_form_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ds-form", 2, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("dfChange", function SubmissionSectionAccessesComponent_ds_form_0_Template_ds_form_dfChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.onChange($event));
    })("removeArrayItem", function SubmissionSectionAccessesComponent_ds_form_0_Template_ds_form_removeArrayItem_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.onRemove($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("formId", ctx_r1.formId)("formModel", ctx_r1.formModel)("displaySubmit", false)("displayCancel", false);
  }
}
/**
 * This component represents a section for managing item's access conditions.
 */
class SubmissionSectionAccessesComponent extends _models_section_model__WEBPACK_IMPORTED_MODULE_11__.SectionModelComponent {
  /**
   * Initialize instance variables
   *
   * @param {SectionsService} sectionService
   * @param {SectionDataObject} injectedSectionData
   * @param {FormService} formService
   * @param {JsonPatchOperationsBuilder} operationsBuilder
   * @param {SectionFormOperationsService} formOperationsService
   * @param {FormBuilderService} formBuilderService
   * @param {TranslateService} translate
   * @param {SubmissionAccessesConfigDataService} accessesConfigService
   * @param {SectionAccessesService} accessesService
   * @param {SubmissionJsonPatchOperationsService} operationsService
   * @param {string} injectedSubmissionId
   */
  constructor(sectionService, formBuilderService, accessesConfigService, accessesService, formOperationsService, operationsBuilder, formService, translate, operationsService, injectedSectionData, injectedSubmissionId) {
    super(undefined, injectedSectionData, injectedSubmissionId);
    this.sectionService = sectionService;
    this.formBuilderService = formBuilderService;
    this.accessesConfigService = accessesConfigService;
    this.accessesService = accessesService;
    this.formOperationsService = formOperationsService;
    this.operationsBuilder = operationsBuilder;
    this.formService = formService;
    this.translate = translate;
    this.operationsService = operationsService;
    this.injectedSectionData = injectedSectionData;
    this.injectedSubmissionId = injectedSubmissionId;
    /**
     * Array to track all subscriptions and unsubscribe them onDestroy
     * @type {Array}
     */
    this.subs = [];
  }
  /**
   * Initialize form model values
   *
   * @param formModel
   *    The form model
   */
  initModelData(formModel) {
    this.accessesData.accessConditions.forEach((accessCondition, index) => {
      Array.of('name', 'startDate', 'endDate').filter(key => accessCondition.hasOwnProperty(key) && (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_6__.isNotEmpty)(accessCondition[key])).forEach(key => {
        const metadataModel = this.formBuilderService.findById(key, formModel, index);
        if (metadataModel) {
          if (metadataModel.type === _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_16__.DYNAMIC_FORM_CONTROL_TYPE_DATEPICKER) {
            const date = new Date(accessCondition[key]);
            metadataModel.value = {
              year: date.getUTCFullYear(),
              month: date.getUTCMonth() + 1,
              day: date.getUTCDate()
            };
          } else {
            metadataModel.value = accessCondition[key];
          }
        }
      });
    });
  }
  /**
   * Method called when a form dfChange event is fired.
   * Dispatch form operations based on changes.
   */
  onChange(event) {
    if (event.model.type === _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_16__.DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX) {
      const path = this.formOperationsService.getFieldPathSegmentedFromChangeEvent(event);
      const value = this.formOperationsService.getFieldValueFromChangeEvent(event);
      this.operationsBuilder.replace(this.pathCombiner.getPath(path), value.value, true);
    } else {
      if (event.model.id === _section_accesses_model__WEBPACK_IMPORTED_MODULE_13__.FORM_ACCESS_CONDITION_TYPE_CONFIG.id) {
        // Clear previous state when switching through different access conditions
        const startDateControl = event.control.parent.get('startDate');
        const endDateControl = event.control.parent.get('endDate');
        startDateControl?.markAsUntouched();
        endDateControl?.markAsUntouched();
        startDateControl?.setValue(null);
        endDateControl?.setValue(null);
        event.control.parent.markAsDirty();
      }
      // validate form
      this.formService.validateAllFormFields(this.formRef.formGroup);
      this.formService.isValid(this.formId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.filter)(isValid => isValid), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.mergeMap)(() => this.formService.getFormData(this.formId)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.take)(1)).subscribe(formData => {
        const accessConditionsToSave = [];
        formData.accessCondition.map(accessConditions => accessConditions.accessConditionGroup).filter(accessCondition => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_6__.isNotEmpty)(accessCondition)).forEach(accessCondition => {
          let accessConditionOpt;
          this.availableAccessConditionOptions.filter(element => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_6__.isNotNull)(accessCondition.name) && element.name === accessCondition.name[0].value).forEach(element => accessConditionOpt = element);
          if (accessConditionOpt) {
            const currentAccessCondition = Object.assign({}, accessCondition);
            currentAccessCondition.name = this.retrieveValueFromField(accessCondition.name);
            /* When start and end date fields are deactivated, their values may be still present in formData,
            therefore it is necessary to delete them if they're not allowed by the current access condition option. */
            if (!accessConditionOpt.hasStartDate) {
              delete currentAccessCondition.startDate;
            } else if (accessCondition.startDate) {
              const startDate = this.retrieveValueFromField(accessCondition.startDate);
              currentAccessCondition.startDate = (0,_shared_date_util__WEBPACK_IMPORTED_MODULE_5__.dateToISOFormat)(startDate);
            }
            if (!accessConditionOpt.hasEndDate) {
              delete currentAccessCondition.endDate;
            } else if (accessCondition.endDate) {
              const endDate = this.retrieveValueFromField(accessCondition.endDate);
              currentAccessCondition.endDate = (0,_shared_date_util__WEBPACK_IMPORTED_MODULE_5__.dateToISOFormat)(endDate);
            }
            accessConditionsToSave.push(currentAccessCondition);
          }
        });
        this.operationsBuilder.add(this.pathCombiner.getPath('accessConditions'), accessConditionsToSave, true);
      });
    }
  }
  /**
   * Method called when a form removeArrayItem event is fired.
   * Dispatch remove form operations based on changes.
   */
  onRemove(event) {
    const fieldIndex = this.formOperationsService.getArrayIndexFromEvent(event);
    const fieldPath = 'accessConditions/' + fieldIndex;
    this.operationsBuilder.remove(this.pathCombiner.getPath(fieldPath));
  }
  /**
   * Unsubscribe from all subscriptions
   */
  onSectionDestroy() {
    this.subs.filter(subscription => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_6__.hasValue)(subscription)).forEach(subscription => subscription.unsubscribe());
  }
  /**
   * Initialize all instance variables and retrieve collection default access conditions
   */
  onSectionInit() {
    this.pathCombiner = new _core_json_patch_builder_json_patch_operation_path_combiner__WEBPACK_IMPORTED_MODULE_1__.JsonPatchOperationPathCombiner('sections', this.sectionData.id);
    this.formId = this.formService.getUniqueId(this.sectionData.id);
    const config$ = this.accessesConfigService.findByHref(this.sectionData.config, true, false).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_3__.getFirstSucceededRemoteData)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.map)(config => config.payload));
    const accessData$ = this.accessesService.getAccessesData(this.submissionId, this.sectionData.id);
    (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.combineLatest)([config$, accessData$]).subscribe(([config, accessData]) => {
      this.availableAccessConditionOptions = (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_6__.isNotEmpty)(config.accessConditionOptions) ? config.accessConditionOptions : [];
      this.canChangeDiscoverable = !!config.canChangeDiscoverable;
      this.accessesData = accessData;
      this.formModel = this.buildFileEditForm();
    });
  }
  /**
   * Get section status
   *
   * @return Observable<boolean>
   *     the section status
   */
  getSectionStatus() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_22__.of)(true);
  }
  /**
   * Initialize form model
   */
  buildFileEditForm() {
    const formModel = [];
    if (this.canChangeDiscoverable) {
      const discoverableCheckboxConfig = Object.assign({}, _section_accesses_model__WEBPACK_IMPORTED_MODULE_13__.ACCESS_FORM_CHECKBOX_CONFIG, {
        label: this.translate.instant('submission.sections.accesses.form.discoverable-label'),
        hint: this.translate.instant('submission.sections.accesses.form.discoverable-description'),
        value: this.accessesData.discoverable
      });
      formModel.push(new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_16__.DynamicCheckboxModel(discoverableCheckboxConfig, _section_accesses_model__WEBPACK_IMPORTED_MODULE_13__.ACCESS_FORM_CHECKBOX_LAYOUT));
    }
    const accessConditionTypeModelConfig = Object.assign({}, _section_accesses_model__WEBPACK_IMPORTED_MODULE_13__.FORM_ACCESS_CONDITION_TYPE_CONFIG);
    const accessConditionsArrayConfig = Object.assign({}, _section_accesses_model__WEBPACK_IMPORTED_MODULE_13__.ACCESS_CONDITIONS_FORM_ARRAY_CONFIG);
    const accessConditionTypeOptions = [];
    for (const accessCondition of this.availableAccessConditionOptions) {
      accessConditionTypeOptions.push({
        label: accessCondition.name,
        value: accessCondition.name
      });
    }
    accessConditionTypeModelConfig.options = accessConditionTypeOptions;
    // Dynamically assign of relation in config. For startDate and endDate.
    const startDateCondition = [];
    const endDateCondition = [];
    let maxStartDate;
    let maxEndDate;
    this.availableAccessConditionOptions.forEach(condition => {
      if (condition.hasStartDate) {
        startDateCondition.push({
          id: 'name',
          value: condition.name
        });
        if (condition.maxStartDate) {
          const min = new Date(condition.maxStartDate);
          maxStartDate = {
            year: min.getUTCFullYear(),
            month: min.getUTCMonth() + 1,
            day: min.getUTCDate()
          };
        }
      }
      if (condition.hasEndDate) {
        endDateCondition.push({
          id: 'name',
          value: condition.name
        });
        if (condition.maxEndDate) {
          const max = new Date(condition.maxEndDate);
          maxEndDate = {
            year: max.getUTCFullYear(),
            month: max.getUTCMonth() + 1,
            day: max.getUTCDate()
          };
        }
      }
    });
    const confStart = {
      relations: [{
        match: _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_16__.MATCH_ENABLED,
        operator: _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_16__.OR_OPERATOR,
        when: startDateCondition
      }]
    };
    const confEnd = {
      relations: [{
        match: _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_16__.MATCH_ENABLED,
        operator: _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_16__.OR_OPERATOR,
        when: endDateCondition
      }]
    };
    const hasStartDate = startDateCondition.length > 0;
    const hasEndDate = endDateCondition.length > 0;
    accessConditionsArrayConfig.groupFactory = () => {
      const type = new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_16__.DynamicSelectModel(accessConditionTypeModelConfig, _section_accesses_model__WEBPACK_IMPORTED_MODULE_13__.FORM_ACCESS_CONDITION_TYPE_LAYOUT);
      const startDateConfig = Object.assign({}, _section_accesses_model__WEBPACK_IMPORTED_MODULE_13__.FORM_ACCESS_CONDITION_START_DATE_CONFIG, confStart);
      if (maxStartDate) {
        startDateConfig.max = maxStartDate;
      }
      const endDateConfig = Object.assign({}, _section_accesses_model__WEBPACK_IMPORTED_MODULE_13__.FORM_ACCESS_CONDITION_END_DATE_CONFIG, confEnd);
      if (maxEndDate) {
        endDateConfig.max = maxEndDate;
      }
      const startDate = new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_16__.DynamicDatePickerModel(startDateConfig, _section_accesses_model__WEBPACK_IMPORTED_MODULE_13__.FORM_ACCESS_CONDITION_START_DATE_LAYOUT);
      const endDate = new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_16__.DynamicDatePickerModel(endDateConfig, _section_accesses_model__WEBPACK_IMPORTED_MODULE_13__.FORM_ACCESS_CONDITION_END_DATE_LAYOUT);
      const accessConditionGroupConfig = Object.assign({}, _section_accesses_model__WEBPACK_IMPORTED_MODULE_13__.ACCESS_CONDITION_GROUP_CONFIG);
      accessConditionGroupConfig.group = [type];
      if (hasStartDate) {
        accessConditionGroupConfig.group.push(startDate);
      }
      if (hasEndDate) {
        accessConditionGroupConfig.group.push(endDate);
      }
      return [new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_16__.DynamicFormGroupModel(accessConditionGroupConfig, _section_accesses_model__WEBPACK_IMPORTED_MODULE_13__.ACCESS_CONDITION_GROUP_LAYOUT)];
    };
    // Number of access conditions blocks in form
    accessConditionsArrayConfig.initialCount = (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_6__.isNotEmpty)(this.accessesData.accessConditions) ? this.accessesData.accessConditions.length : 1;
    formModel.push(new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_16__.DynamicFormArrayModel(accessConditionsArrayConfig, _section_accesses_model__WEBPACK_IMPORTED_MODULE_13__.ACCESS_CONDITIONS_FORM_ARRAY_LAYOUT));
    this.initModelData(formModel);
    return formModel;
  }
  retrieveValueFromField(field) {
    const temp = Array.isArray(field) ? field[0] : field;
    return temp ? temp.value : undefined;
  }
  static {
    this.ɵfac = function SubmissionSectionAccessesComponent_Factory(t) {
      return new (t || SubmissionSectionAccessesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_sections_service__WEBPACK_IMPORTED_MODULE_12__.SectionsService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_shared_form_builder_form_builder_service__WEBPACK_IMPORTED_MODULE_7__.FormBuilderService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_core_config_submission_accesses_config_data_service__WEBPACK_IMPORTED_MODULE_0__.SubmissionAccessesConfigDataService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_section_accesses_service__WEBPACK_IMPORTED_MODULE_14__.SectionAccessesService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_form_section_form_operations_service__WEBPACK_IMPORTED_MODULE_10__.SectionFormOperationsService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_core_json_patch_builder_json_patch_operations_builder__WEBPACK_IMPORTED_MODULE_2__.JsonPatchOperationsBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_shared_form_form_service__WEBPACK_IMPORTED_MODULE_9__.FormService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_core_submission_submission_json_patch_operations_service__WEBPACK_IMPORTED_MODULE_4__.SubmissionJsonPatchOperationsService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"]('sectionDataProvider'), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"]('submissionIdProvider'));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({
      type: SubmissionSectionAccessesComponent,
      selectors: [["ds-section-accesses"]],
      viewQuery: function SubmissionSectionAccessesComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵloadQuery"]()) && (ctx.formRef = _t.first);
        }
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵStandaloneFeature"]],
      decls: 1,
      vars: 1,
      consts: [["formRef", "formComponent"], [3, "formId", "formModel", "displaySubmit", "displayCancel", "dfChange", "removeArrayItem", 4, "ngIf"], [3, "dfChange", "removeArrayItem", "formId", "formModel", "displaySubmit", "displayCancel"]],
      template: function SubmissionSectionAccessesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](0, SubmissionSectionAccessesComponent_ds_form_0_Template, 2, 4, "ds-form", 1);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !!ctx.formModel);
        }
      },
      dependencies: [_shared_form_form_component__WEBPACK_IMPORTED_MODULE_8__.FormComponent, _angular_common__WEBPACK_IMPORTED_MODULE_24__.NgIf],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n  .access-condition-group {\n  position: relative;\n  top: -2.3rem;\n  margin-bottom: -2.3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlY3Rpb24tYWNjZXNzZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FBQ0YiLCJmaWxlIjoic2VjdGlvbi1hY2Nlc3Nlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovXG46Om5nLWRlZXAgLmFjY2Vzcy1jb25kaXRpb24tZ3JvdXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTIuM3JlbTtcbiAgbWFyZ2luLWJvdHRvbTogLTIuM3JlbTtcbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc3VibWlzc2lvbi9zZWN0aW9ucy9hY2Nlc3Nlcy9zZWN0aW9uLWFjY2Vzc2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBO0FBQ0E7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQUNGO0FBQ0EsZ3hCQUFneEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqL1xuOjpuZy1kZWVwIC5hY2Nlc3MtY29uZGl0aW9uLWdyb3VwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0yLjNyZW07XG4gIG1hcmdpbi1ib3R0b206IC0yLjNyZW07XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 76440:
/*!************************************************************************!*\
  !*** ./src/app/submission/sections/accesses/section-accesses.model.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ACCESS_CONDITIONS_FORM_ARRAY_CONFIG: () => (/* binding */ ACCESS_CONDITIONS_FORM_ARRAY_CONFIG),
/* harmony export */   ACCESS_CONDITIONS_FORM_ARRAY_LAYOUT: () => (/* binding */ ACCESS_CONDITIONS_FORM_ARRAY_LAYOUT),
/* harmony export */   ACCESS_CONDITION_GROUP_CONFIG: () => (/* binding */ ACCESS_CONDITION_GROUP_CONFIG),
/* harmony export */   ACCESS_CONDITION_GROUP_LAYOUT: () => (/* binding */ ACCESS_CONDITION_GROUP_LAYOUT),
/* harmony export */   ACCESS_FORM_CHECKBOX_CONFIG: () => (/* binding */ ACCESS_FORM_CHECKBOX_CONFIG),
/* harmony export */   ACCESS_FORM_CHECKBOX_LAYOUT: () => (/* binding */ ACCESS_FORM_CHECKBOX_LAYOUT),
/* harmony export */   FORM_ACCESS_CONDITION_END_DATE_CONFIG: () => (/* binding */ FORM_ACCESS_CONDITION_END_DATE_CONFIG),
/* harmony export */   FORM_ACCESS_CONDITION_END_DATE_LAYOUT: () => (/* binding */ FORM_ACCESS_CONDITION_END_DATE_LAYOUT),
/* harmony export */   FORM_ACCESS_CONDITION_START_DATE_CONFIG: () => (/* binding */ FORM_ACCESS_CONDITION_START_DATE_CONFIG),
/* harmony export */   FORM_ACCESS_CONDITION_START_DATE_LAYOUT: () => (/* binding */ FORM_ACCESS_CONDITION_START_DATE_LAYOUT),
/* harmony export */   FORM_ACCESS_CONDITION_TYPE_CONFIG: () => (/* binding */ FORM_ACCESS_CONDITION_TYPE_CONFIG),
/* harmony export */   FORM_ACCESS_CONDITION_TYPE_LAYOUT: () => (/* binding */ FORM_ACCESS_CONDITION_TYPE_LAYOUT)
/* harmony export */ });
/* harmony import */ var _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-dynamic-forms/core */ 94403);

const ACCESS_FORM_CHECKBOX_CONFIG = {
  id: 'discoverable',
  name: 'discoverable'
};
const ACCESS_FORM_CHECKBOX_LAYOUT = {
  element: {
    container: 'custom-control custom-checkbox pl-1',
    control: 'custom-control-input',
    label: 'custom-control-label pt-1'
  }
};
const ACCESS_CONDITION_GROUP_CONFIG = {
  id: 'accessConditionGroup',
  group: []
};
const ACCESS_CONDITION_GROUP_LAYOUT = {
  element: {
    host: 'form-group access-condition-group col',
    container: 'pl-1 pr-1',
    control: 'form-row '
  }
};
const ACCESS_CONDITIONS_FORM_ARRAY_CONFIG = {
  id: 'accessCondition',
  groupFactory: null
};
const ACCESS_CONDITIONS_FORM_ARRAY_LAYOUT = {
  grid: {
    group: 'form-row pt-4'
  }
};
const FORM_ACCESS_CONDITION_TYPE_CONFIG = {
  id: 'name',
  label: 'submission.sections.accesses.form.access-condition-label',
  hint: 'submission.sections.accesses.form.access-condition-hint',
  options: []
};
const FORM_ACCESS_CONDITION_TYPE_LAYOUT = {
  element: {
    host: 'col-12',
    label: 'col-form-label name-label'
  }
};
const FORM_ACCESS_CONDITION_START_DATE_CONFIG = {
  id: 'startDate',
  label: 'submission.sections.accesses.form.from-label',
  hint: 'submission.sections.accesses.form.from-hint',
  placeholder: 'submission.sections.accesses.form.from-placeholder',
  inline: false,
  toggleIcon: 'far fa-calendar-alt',
  relations: [{
    match: _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__.MATCH_ENABLED,
    operator: _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__.OR_OPERATOR,
    when: []
  }],
  required: true,
  validators: {
    required: null
  },
  errorMessages: {
    required: 'submission.sections.accesses.form.date-required-from'
  }
};
const FORM_ACCESS_CONDITION_START_DATE_LAYOUT = {
  element: {
    label: 'col-form-label'
  },
  grid: {
    host: 'col-6'
  }
};
const FORM_ACCESS_CONDITION_END_DATE_CONFIG = {
  id: 'endDate',
  label: 'submission.sections.accesses.form.until-label',
  hint: 'submission.sections.accesses.form.until-hint',
  placeholder: 'submission.sections.accesses.form.until-placeholder',
  inline: false,
  toggleIcon: 'far fa-calendar-alt',
  relations: [{
    match: _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__.MATCH_ENABLED,
    operator: _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__.OR_OPERATOR,
    when: []
  }],
  required: true,
  validators: {
    required: null
  },
  errorMessages: {
    required: 'submission.sections.accesses.form.date-required-until'
  }
};
const FORM_ACCESS_CONDITION_END_DATE_LAYOUT = {
  element: {
    label: 'col-form-label'
  },
  grid: {
    host: 'col-6'
  }
};

/***/ }),

/***/ 46670:
/*!**************************************************************************!*\
  !*** ./src/app/submission/sections/accesses/section-accesses.service.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SectionAccessesService: () => (/* binding */ SectionAccessesService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 85687);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 64785);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/empty.util */ 82777);
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../selectors */ 645);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 99797);






/**
 * A service that provides methods to handle submission item's accesses condition state.
 */
class SectionAccessesService {
  /**
   * Initialize service variables
   *
   * @param {Store<SubmissionState>} store
   */
  constructor(store) {
    this.store = store;
  }
  /**
   * Return item's accesses condition state.
   *
   * @param submissionId
   *    The submission id
   * @param sectionId
   *    The section id
   * @returns {Observable}
   *    Emits bitstream's metadata
   */
  getAccessesData(submissionId, sectionId) {
    return this.store.select((0,_selectors__WEBPACK_IMPORTED_MODULE_1__.submissionSectionDataFromIdSelector)(submissionId, sectionId)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.filter)(state => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_0__.isNotUndefined)(state)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.distinctUntilChanged)());
  }
  static {
    this.ɵfac = function SectionAccessesService_Factory(t) {
      return new (t || SectionAccessesService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: SectionAccessesService,
      factory: SectionAccessesService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 11402:
/*!********************************************************************************************!*\
  !*** ./src/app/submission/sections/cc-license/submission-section-cc-licenses.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SubmissionSectionCcLicensesComponent: () => (/* binding */ SubmissionSectionCcLicensesComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/forms */ 56106);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 49966);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-infinite-scroll */ 21001);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 17796);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 85687);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 64785);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 78374);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 21252);
/* harmony import */ var _core_data_configuration_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/data/configuration-data.service */ 8917);
/* harmony import */ var _core_json_patch_builder_json_patch_operation_path_combiner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/json-patch/builder/json-patch-operation-path-combiner */ 92409);
/* harmony import */ var _core_json_patch_builder_json_patch_operations_builder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/json-patch/builder/json-patch-operations-builder */ 17184);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/shared/operators */ 55757);
/* harmony import */ var _core_submission_models_submission_cc_license_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/submission/models/submission-cc-license.model */ 62572);
/* harmony import */ var _core_submission_submission_cc_license_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/submission/submission-cc-license-data.service */ 73138);
/* harmony import */ var _core_submission_submission_cc_license_url_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/submission/submission-cc-license-url-data.service */ 79914);
/* harmony import */ var _shared_ds_select_ds_select_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/ds-select/ds-select.component */ 6308);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/empty.util */ 82777);
/* harmony import */ var _shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/loading/themed-loading.component */ 82394);
/* harmony import */ var _shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/utils/var.directive */ 18226);
/* harmony import */ var _models_section_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../models/section.model */ 70507);
/* harmony import */ var _sections_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../sections.service */ 72147);
/* harmony import */ var _sections_type__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../sections-type */ 88643);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 90310);
































const _forTrack0 = ($index, $item) => $item.id;
const _c0 = () => ({
  standalone: true
});
function SubmissionSectionCcLicensesComponent_Conditional_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 1, "submission.sections.ccLicense.none"), " ");
  }
}
function SubmissionSectionCcLicensesComponent_Conditional_0_Conditional_8_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function SubmissionSectionCcLicensesComponent_Conditional_0_Conditional_8_For_1_Template_button_click_0_listener() {
      const license_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.selectCcLicense(license_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const license_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", license_r4.name, " ");
  }
}
function SubmissionSectionCcLicensesComponent_Conditional_0_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrepeaterCreate"](0, SubmissionSectionCcLicensesComponent_Conditional_0_Conditional_8_For_1_Template, 2, 1, "button", 8, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrepeater"](ctx_r1.submissionCcLicenses);
  }
}
function SubmissionSectionCcLicensesComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 2)(1, "div", 4)(2, "input", 5, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayListener"]("ngModelChange", function SubmissionSectionCcLicensesComponent_Conditional_0_Template_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayBindingSet"](ctx_r1.selectedCcLicense.name, $event) || (ctx_r1.selectedCcLicense.name = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("scroll", function SubmissionSectionCcLicensesComponent_Conditional_0_Template_div_scroll_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.onScroll($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](7, SubmissionSectionCcLicensesComponent_Conditional_0_Conditional_7_Template, 3, 3, "button", 7)(8, SubmissionSectionCcLicensesComponent_Conditional_0_Conditional_8_Template, 2, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("placeholder", !ctx_r1.storedCcLicenseLink ? _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](4, 9, "submission.sections.ccLicense.select") : _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](5, 11, "submission.sections.ccLicense.change"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.selectedCcLicense.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](13, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("infiniteScrollDistance", 5)("infiniteScrollThrottle", 300)("infiniteScrollUpDistance", 1.5)("fromRoot", true)("scrollWindow", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵconditional"](7, (ctx_r1.submissionCcLicenses == null ? null : ctx_r1.submissionCcLicenses.length) === 0 ? 7 : 8);
  }
}
function SubmissionSectionCcLicensesComponent_ng_container_1_div_1_ng_template_6_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 11)(1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const value_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", value_r8.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("innerHTML", value_r8.description, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsanitizeHtml"]);
  }
}
function SubmissionSectionCcLicensesComponent_ng_container_1_div_1_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div")(1, "div", 16)(2, "div")(3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](5, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function SubmissionSectionCcLicensesComponent_ng_container_1_div_1_ng_template_6_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.closeInfoModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](10, SubmissionSectionCcLicensesComponent_ng_container_1_div_1_ng_template_6_div_10_Template, 4, 2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const field_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", field_r9.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("innerHTML", field_r9.description, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", field_r9.enums);
  }
}
function SubmissionSectionCcLicensesComponent_ng_container_1_div_1_ds_select_8_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().ngVar;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", option_r10.label, " ");
  }
}
function SubmissionSectionCcLicensesComponent_ng_container_1_div_1_ds_select_8_ng_container_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 1, "submission.sections.ccLicense.option.select"), " ");
  }
}
function SubmissionSectionCcLicensesComponent_ng_container_1_div_1_ds_select_8_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, SubmissionSectionCcLicensesComponent_ng_container_1_div_1_ds_select_8_ng_container_1_span_1_Template, 2, 1, "span", 3)(2, SubmissionSectionCcLicensesComponent_ng_container_1_div_1_ds_select_8_ng_container_1_span_2_Template, 3, 3, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const option_r10 = ctx.ngVar;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", option_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !option_r10);
  }
}
function SubmissionSectionCcLicensesComponent_ng_container_1_div_1_ds_select_8_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function SubmissionSectionCcLicensesComponent_ng_container_1_div_1_ds_select_8_button_4_Template_button_click_0_listener() {
      const option_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r11).$implicit;
      const field_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.selectOption(ctx_r1.getSelectedCcLicense(), field_r9, option_r12));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", option_r12.label, " ");
  }
}
function SubmissionSectionCcLicensesComponent_ng_container_1_div_1_ds_select_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ds-select", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, SubmissionSectionCcLicensesComponent_ng_container_1_div_1_ds_select_8_ng_container_1_Template, 3, 2, "ng-container", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](2, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](4, SubmissionSectionCcLicensesComponent_ng_container_1_div_1_ds_select_8_button_4_Template, 2, 1, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const field_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", field_r9.id === "jurisdiction" && ctx_r1.defaultJurisdiction !== undefined && ctx_r1.defaultJurisdiction !== "none");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngVar", ctx_r1.getSelectedOption(ctx_r1.getSelectedCcLicense(), field_r9));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", field_r9.enums);
  }
}
function SubmissionSectionCcLicensesComponent_ng_container_1_div_1_ng_container_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 29)(1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function SubmissionSectionCcLicensesComponent_ng_container_1_div_1_ng_container_9_div_1_Template_div_click_1_listener() {
      const option_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r13).$implicit;
      const field_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.selectOption(ctx_r1.getSelectedCcLicense(), field_r9, option_r14));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const option_r14 = ctx.$implicit;
    const field_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("title", option_r14.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("checked", ctx_r1.isSelectedOption(ctx_r1.getSelectedCcLicense(), field_r9, option_r14));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](option_r14.label);
  }
}
function SubmissionSectionCcLicensesComponent_ng_container_1_div_1_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, SubmissionSectionCcLicensesComponent_ng_container_1_div_1_ng_container_9_div_1_Template, 5, 3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const field_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", field_r9.enums);
  }
}
function SubmissionSectionCcLicensesComponent_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 11)(1, "div", 12)(2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function SubmissionSectionCcLicensesComponent_ng_container_1_div_1_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r5);
      const infoModal_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.openInfoModal(infoModal_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](5, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](6, SubmissionSectionCcLicensesComponent_ng_container_1_div_1_ng_template_6_Template, 11, 3, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"])(8, SubmissionSectionCcLicensesComponent_ng_container_1_div_1_ds_select_8_Template, 5, 3, "ds-select", 15)(9, SubmissionSectionCcLicensesComponent_ng_container_1_div_1_ng_container_9_Template, 2, 1, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const field_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵclassMapInterpolate1"]("font-weight-bold ", field_r9.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", field_r9.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", (field_r9.enums == null ? null : field_r9.enums.length) > 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", (field_r9.enums == null ? null : field_r9.enums.length) <= 5);
  }
}
function SubmissionSectionCcLicensesComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, SubmissionSectionCcLicensesComponent_ng_container_1_div_1_Template, 10, 6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r1.getSelectedCcLicense().fields);
  }
}
function SubmissionSectionCcLicensesComponent_ng_container_2_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "ds-loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function SubmissionSectionCcLicensesComponent_ng_container_2_ng_container_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 34)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "div", 36)(7, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function SubmissionSectionCcLicensesComponent_ng_container_2_ng_container_1_div_2_Template_div_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r15);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.setAccepted(!ctx_r1.accepted));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](8, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const licenseLink_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().ngVar;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](3, 5, "submission.sections.ccLicense.link"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("href", licenseLink_r16, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", licenseLink_r16, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("checked", ctx_r1.accepted);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](11, 7, "submission.sections.ccLicense.confirmation"), "");
  }
}
function SubmissionSectionCcLicensesComponent_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, SubmissionSectionCcLicensesComponent_ng_container_2_ng_container_1_div_1_Template, 2, 0, "div", 3)(2, SubmissionSectionCcLicensesComponent_ng_container_2_ng_container_1_div_2_Template, 12, 9, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const licenseLink_r16 = ctx.ngVar;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !licenseLink_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", licenseLink_r16);
  }
}
function SubmissionSectionCcLicensesComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, SubmissionSectionCcLicensesComponent_ng_container_2_ng_container_1_Template, 3, 2, "ng-container", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngVar", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 1, ctx_r1.getCcLicenseLink$()));
  }
}
/**
 * This component represents the submission section to select the Creative Commons license.
 */
class SubmissionSectionCcLicensesComponent extends _models_section_model__WEBPACK_IMPORTED_MODULE_11__.SectionModelComponent {
  /**
   * The Creative Commons link saved in the workspace item.
   */
  get storedCcLicenseLink() {
    return this.data.uri;
  }
  /**
   * The accepted state for the selected Creative Commons license.
   */
  get accepted() {
    if (this.data.accepted === undefined) {
      return !!this.data.uri;
    }
    return this.data.accepted;
  }
  constructor(modalService, sectionService, submissionCcLicensesDataService, submissionCcLicenseUrlDataService, operationsBuilder, configService, ref, injectedCollectionId, injectedSectionData, injectedSubmissionId) {
    super(injectedCollectionId, injectedSectionData, injectedSubmissionId);
    this.modalService = modalService;
    this.sectionService = sectionService;
    this.submissionCcLicensesDataService = submissionCcLicensesDataService;
    this.submissionCcLicenseUrlDataService = submissionCcLicenseUrlDataService;
    this.operationsBuilder = operationsBuilder;
    this.configService = configService;
    this.ref = ref;
    this.injectedCollectionId = injectedCollectionId;
    this.injectedSectionData = injectedSectionData;
    this.injectedSubmissionId = injectedSubmissionId;
    /**
     * A boolean representing if this section is loading
     * @type {boolean}
     */
    this.isLoading = true;
    /**
     * The list of Subscriptions this component subscribes to.
     */
    this.subscriptions = [];
    /**
     * Cache of the available Creative Commons licenses.
     */
    this.submissionCcLicenses = [];
    /**
     * The currently selected cc licence
     */
    this.selectedCcLicense = new _core_submission_models_submission_cc_license_model__WEBPACK_IMPORTED_MODULE_4__.SubmissionCcLicence();
    /**
     * Options for paginated data loading
     */
    this.ccLicenceOptions = {
      elementsPerPage: 20,
      currentPage: 1
    };
  }
  /**
   * The data of this section.
   */
  get data() {
    return this.sectionData.data;
  }
  /**
   * Select a given Creative Commons license.
   * @param ccLicense the Creative Commons license to select.
   */
  selectCcLicense(ccLicense) {
    if (this.selectedCcLicense.id === ccLicense.id) {
      return;
    }
    this.selectedCcLicense = ccLicense;
    this.setAccepted(false);
    this.updateSectionData({
      ccLicense: {
        id: ccLicense.id,
        fields: {}
      },
      uri: undefined
    });
  }
  /**
   * Get the selected Creative Commons license.
   */
  getSelectedCcLicense() {
    if (!this.submissionCcLicenses || !this.data.ccLicense) {
      return null;
    }
    return this.submissionCcLicenses.filter(ccLicense => ccLicense.id === this.data.ccLicense.id)[0];
  }
  /**
   * Select an option for a given license field.
   * @param ccLicense   the related Creative Commons license.
   * @param field       the field for which to select an option.
   * @param option      the option to select.
   */
  selectOption(ccLicense, field, option) {
    if (this.isSelectedOption(ccLicense, field, option)) {
      return;
    }
    this.updateSectionData({
      ccLicense: {
        id: ccLicense.id,
        fields: Object.assign({}, this.data.ccLicense.fields, {
          [field.id]: option
        })
      },
      accepted: false
    });
  }
  /**
   * Get the selected option for a given license field.
   * @param ccLicense   the related Creative Commons license.
   * @param field       the field for which to get the selected option value.
   */
  getSelectedOption(ccLicense, field) {
    if (field.id === 'jurisdiction' && this.defaultJurisdiction !== undefined && this.defaultJurisdiction !== 'none') {
      return field.enums.find(option => option.id === this.defaultJurisdiction);
    }
    return this.data.ccLicense.fields[field.id];
  }
  /**
   * Whether a given option is selected for a given Creative Commons license field.
   * @param ccLicense   the related Creative Commons license.
   * @param field       the field for which to check whether the option is selected.
   * @param option      the option for which to check whether it is selected.
   */
  isSelectedOption(ccLicense, field, option) {
    return this.getSelectedOption(ccLicense, field) && this.getSelectedOption(ccLicense, field).id === option.id;
  }
  /**
   * Get the link to the Creative Commons license corresponding with the selected options.
   */
  getCcLicenseLink$() {
    if (this.storedCcLicenseLink) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.of)(this.storedCcLicenseLink);
    }
    if (!this.getSelectedCcLicense() || this.getSelectedCcLicense().fields.some(field => !this.getSelectedOption(this.getSelectedCcLicense(), field))) {
      return undefined;
    }
    const selectedCcLicense = this.getSelectedCcLicense();
    return this.submissionCcLicenseUrlDataService.getCcLicenseLink(selectedCcLicense, new Map(selectedCcLicense.fields.map(field => [field, this.getSelectedOption(selectedCcLicense, field)])));
  }
  /**
   * Open a given info modal.
   * @param content   the modal content.
   */
  openInfoModal(content) {
    this.modalRef = this.modalService.open(content);
  }
  /**
   * Close the info modal.
   */
  closeInfoModal() {
    this.modalRef.close();
  }
  /**
   * Get section status
   *
   * @return Observable<boolean>
   *     the section status
   */
  getSectionStatus() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.of)(this.accepted);
  }
  /**
   * Unsubscribe from all subscriptions
   */
  onSectionDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
  /**
   * Initialize the section.
   */
  onSectionInit() {
    this.pathCombiner = new _core_json_patch_builder_json_patch_operation_path_combiner__WEBPACK_IMPORTED_MODULE_1__.JsonPatchOperationPathCombiner('sections', this.sectionData.id);
    this.subscriptions.push(this.sectionService.getSectionState(this.submissionId, this.sectionData.id, _sections_type__WEBPACK_IMPORTED_MODULE_13__.SectionsType.CcLicense).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.filter)(sectionState => {
      return (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_8__.isNotEmpty)(sectionState) && ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_8__.isNotEmpty)(sectionState.data) || (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_8__.isNotEmpty)(sectionState.errorsToShow));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.map)(sectionState => sectionState.data)).subscribe(data => {
      if (this.data.accepted !== data.accepted) {
        const path = this.pathCombiner.getPath('uri');
        if (data.accepted) {
          this.getCcLicenseLink$().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.take)(1)).subscribe(link => {
            this.operationsBuilder.add(path, link.toString(), false, true);
          });
        } else if (this.data.uri) {
          this.operationsBuilder.remove(path);
        }
      }
      this.sectionData.data = data;
    }), this.configService.findByPropertyName('cc.license.jurisdiction').pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_3__.getFirstCompletedRemoteData)(), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_3__.getRemoteDataPayload)()).subscribe(remoteData => {
      if (remoteData === undefined || remoteData.values.length === 0) {
        // No value configured, use blank value (International jurisdiction)
        this.defaultJurisdiction = '';
      } else {
        this.defaultJurisdiction = remoteData.values[0];
      }
    }));
    this.loadCcLicences();
  }
  /**
   * Set the accepted state for the Creative Commons license.
   * @param accepted  the accepted state for the cc license.
   */
  setAccepted(accepted) {
    this.updateSectionData({
      accepted
    });
    this.updateSectionStatus();
  }
  /**
   * Update the section data for this section.
   */
  updateSectionData(data) {
    this.sectionService.updateSectionData(this.submissionId, this.sectionData.id, Object.assign({}, this.data, data));
  }
  onScroll(event) {
    if (event.target.scrollTop + event.target.clientHeight >= event.target.scrollHeight) {
      if (!this.isLoading && !this._isLastPage) {
        this.ccLicenceOptions.currentPage++;
        this.loadCcLicences();
      }
    }
  }
  loadCcLicences() {
    this.isLoading = true;
    this.subscriptions.push(this.submissionCcLicensesDataService.findAll(this.ccLicenceOptions).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_3__.getFirstSucceededRemoteDataPayload)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.tap)(response => this._isLastPage = response.pageInfo.currentPage === response.pageInfo.totalPages), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.map)(list => list.page)).subscribe(licenses => {
      this.submissionCcLicenses = [...this.submissionCcLicenses, ...licenses];
      this.isLoading = false;
      this.ref.detectChanges();
    }));
  }
  static {
    this.ɵfac = function SubmissionSectionCcLicensesComponent_Factory(t) {
      return new (t || SubmissionSectionCcLicensesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_sections_service__WEBPACK_IMPORTED_MODULE_12__.SectionsService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_core_submission_submission_cc_license_data_service__WEBPACK_IMPORTED_MODULE_5__.SubmissionCcLicenseDataService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_core_submission_submission_cc_license_url_data_service__WEBPACK_IMPORTED_MODULE_6__.SubmissionCcLicenseUrlDataService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_core_json_patch_builder_json_patch_operations_builder__WEBPACK_IMPORTED_MODULE_2__.JsonPatchOperationsBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_core_data_configuration_data_service__WEBPACK_IMPORTED_MODULE_0__.ConfigurationDataService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_14__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"]('collectionIdProvider'), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"]('sectionDataProvider'), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"]('submissionIdProvider'));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({
      type: SubmissionSectionCcLicensesComponent,
      selectors: [["ds-submission-section-cc-licenses"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵStandaloneFeature"]],
      decls: 3,
      vars: 3,
      consts: [["script", "ngModel"], ["infoModal", ""], [1, "mb-4", "ccLicense-select"], [4, "ngIf"], ["ngbDropdown", ""], ["id", "cc-license-dropdown", "ngbDropdownToggle", "", "role", "combobox", 1, "form-control", 3, "ngModelChange", "ngModel", "placeholder", "ngModelOptions"], ["ngbDropdownMenu", "", "aria-labelledby", "cc-license-dropdown", "role", "menu", "infiniteScroll", "", 1, "w-100", "scrollable-menu", 3, "scroll", "infiniteScrollDistance", "infiniteScrollThrottle", "infiniteScrollUpDistance", "fromRoot", "scrollWindow"], [1, "dropdown-item", "disabled"], [1, "dropdown-item"], [1, "dropdown-item", 3, "click"], ["class", "mb-4", 4, "ngFor", "ngForOf"], [1, "mb-4"], [1, "d-flex", "flex-row"], [1, "btn", "btn-outline-info", "btn-sm", "ml-2", 3, "click"], [1, "fas", "fa-question"], [3, "disabled", 4, "ngIf"], [1, "modal-header", "mb-4"], [3, "innerHTML"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "font-weight-light", 3, "innerHTML"], [3, "disabled"], ["class", "selection", 4, "ngVar"], [1, "menu"], [1, "options-select-menu", "overflow-auto"], ["class", "dropdown-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "selection"], ["class", "d-flex flex-row m-1", 4, "ngFor", "ngForOf"], [1, "d-flex", "flex-row", "m-1"], [3, "click"], ["type", "radio", 1, "mr-1", 3, "title", "checked"], [4, "ngVar"], ["class", "mt-2 p-4 bg-light text-dark", 4, "ngIf"], [1, "mt-2", "p-4", "bg-light", "text-dark"], ["target", "_blank", "rel", "noopener noreferrer", 1, "license-link", 3, "href"], [1, "m-2"], ["type", "checkbox", "title", "accepted", 1, "mr-2", 3, "checked"]],
      template: function SubmissionSectionCcLicensesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](0, SubmissionSectionCcLicensesComponent_Conditional_0_Template, 9, 14, "div", 2)(1, SubmissionSectionCcLicensesComponent_ng_container_1_Template, 2, 1, "ng-container", 3)(2, SubmissionSectionCcLicensesComponent_ng_container_2_Template, 3, 3, "ng-container", 3);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵconditional"](0, ctx.submissionCcLicenses ? 0 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.getSelectedCcLicense());
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.getCcLicenseLink$());
        }
      },
      dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_23__.NgIf, _shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_9__.ThemedLoadingComponent, _angular_common__WEBPACK_IMPORTED_MODULE_23__.AsyncPipe, _shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_10__.VarDirective, _angular_common__WEBPACK_IMPORTED_MODULE_23__.NgForOf, _shared_ds_select_ds_select_component__WEBPACK_IMPORTED_MODULE_7__.DsSelectComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__.NgbDropdownModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__.NgbDropdownMenu, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.NgModel, ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_25__.InfiniteScrollModule, ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_25__.InfiniteScrollDirective],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n.options-select-menu[_ngcontent-%COMP%] {\n  max-height: 25vh;\n}\n\n.ccLicense-select[_ngcontent-%COMP%] {\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.scrollable-menu[_ngcontent-%COMP%] {\n  height: auto;\n  max-height: var(--ds-dropdown-menu-max-height);\n  overflow-x: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1Ym1pc3Npb24tc2VjdGlvbi1jYy1saWNlbnNlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFDQTtFQUNFLHVCQUFBO0VBQUEsa0JBQUE7QUFFRjs7QUFBQTtFQUNFLFlBQUE7RUFDQSw4Q0FBQTtFQUNBLGtCQUFBO0FBR0YiLCJmaWxlIjoic3VibWlzc2lvbi1zZWN0aW9uLWNjLWxpY2Vuc2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi9cbi5vcHRpb25zLXNlbGVjdC1tZW51IHtcbiAgbWF4LWhlaWdodDogMjV2aDtcbn1cbi5jY0xpY2Vuc2Utc2VsZWN0IHtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xufVxuLnNjcm9sbGFibGUtbWVudSB7XG4gIGhlaWdodDogYXV0bztcbiAgbWF4LWhlaWdodDogdmFyKC0tZHMtZHJvcGRvd24tbWVudS1tYXgtaGVpZ2h0KTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc3VibWlzc2lvbi9zZWN0aW9ucy9jYy1saWNlbnNlL3N1Ym1pc3Npb24tc2VjdGlvbi1jYy1saWNlbnNlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFDQTtFQUNFLHVCQUFBO0VBQUEsa0JBQUE7QUFFRjs7QUFBQTtFQUNFLFlBQUE7RUFDQSw4Q0FBQTtFQUNBLGtCQUFBO0FBR0Y7QUFFQSx3Z0NBQXdnQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovXG4ub3B0aW9ucy1zZWxlY3QtbWVudSB7XG4gIG1heC1oZWlnaHQ6IDI1dmg7XG59XG4uY2NMaWNlbnNlLXNlbGVjdCB7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbn1cbi5zY3JvbGxhYmxlLW1lbnUge1xuICBoZWlnaHQ6IGF1dG87XG4gIG1heC1oZWlnaHQ6IHZhcigtLWRzLWRyb3Bkb3duLW1lbnUtbWF4LWhlaWdodCk7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 97984:
/*!******************************************************************************!*\
  !*** ./src/app/submission/sections/container/section-container.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SubmissionSectionContainerComponent: () => (/* binding */ SubmissionSectionContainerComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 49966);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/alert/alert.component */ 16292);
/* harmony import */ var _shared_alert_alert_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/alert/alert-type */ 47978);
/* harmony import */ var _sections_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sections.directive */ 96405);
/* harmony import */ var _sections_decorator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sections-decorator */ 3830);











const _c0 = ["sectionRef"];
const _c1 = a0 => ({
  "section-focus": a0
});
const _c2 = a0 => ({
  "text-white": a0
});
const _c3 = a0 => ({
  sectionHeader: a0
});
function SubmissionSectionContainerComponent_ngb_accordion_2_ng_template_3_i_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 2, "submission.sections.status.warnings.title"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 4, "submission.sections.status.warnings.aria"));
  }
}
function SubmissionSectionContainerComponent_ngb_accordion_2_ng_template_3_i_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 2, "submission.sections.status.errors.title"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 4, "submission.sections.status.errors.aria"));
  }
}
function SubmissionSectionContainerComponent_ngb_accordion_2_ng_template_3_i_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 2, "submission.sections.status.valid.title"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 4, "submission.sections.status.valid.aria"));
  }
}
function SubmissionSectionContainerComponent_ngb_accordion_2_ng_template_3_i_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 2, "submission.sections.status.info.title"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 4, "submission.sections.status.info.aria"));
  }
}
function SubmissionSectionContainerComponent_ngb_accordion_2_ng_template_3_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "span", 22);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    const sectionRef_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](1, _c2, sectionRef_r2.isInfo()));
  }
}
function SubmissionSectionContainerComponent_ngb_accordion_2_ng_template_3_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "span", 23);
  }
}
function SubmissionSectionContainerComponent_ngb_accordion_2_ng_template_3_a_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SubmissionSectionContainerComponent_ngb_accordion_2_ng_template_3_a_16_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r3.removeSection($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function SubmissionSectionContainerComponent_ngb_accordion_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, SubmissionSectionContainerComponent_ngb_accordion_2_ng_template_3_i_4_Template, 3, 6, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, SubmissionSectionContainerComponent_ngb_accordion_2_ng_template_3_i_6_Template, 3, 6, "i", 11)(7, SubmissionSectionContainerComponent_ngb_accordion_2_ng_template_3_i_7_Template, 3, 6, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, SubmissionSectionContainerComponent_ngb_accordion_2_ng_template_3_i_9_Template, 3, 6, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, SubmissionSectionContainerComponent_ngb_accordion_2_ng_template_3_span_14_Template, 1, 3, "span", 15)(15, SubmissionSectionContainerComponent_ngb_accordion_2_ng_template_3_span_15_Template, 1, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, SubmissionSectionContainerComponent_ngb_accordion_2_ng_template_3_a_16_Template, 2, 0, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    const sectionRef_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](24, _c2, sectionRef_r2.isInfo()));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 11, "submission.sections." + ctx_r3.sectionData.header));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 13, sectionRef_r2.isValid()) !== true && !sectionRef_r2.hasErrors() && !sectionRef_r2.isInfo());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", sectionRef_r2.hasErrors() && !sectionRef_r2.isInfo());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](8, 15, sectionRef_r2.isValid()) && !sectionRef_r2.hasErrors() && !sectionRef_r2.isInfo());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", sectionRef_r2.isInfo());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](11, 17, sectionRef_r2.isOpen() ? "submission.sections.toggle.close" : "submission.sections.toggle.open"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](13, 21, sectionRef_r2.isOpen() ? "submission.sections.toggle.aria.close" : "submission.sections.toggle.aria.open", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](26, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](12, 19, "submission.sections." + ctx_r3.sectionData.header))));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", sectionRef_r2.isOpen());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !sectionRef_r2.isOpen());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !sectionRef_r2.isMandatory());
  }
}
function SubmissionSectionContainerComponent_ngb_accordion_2_ng_template_4_div_0_ds_alert_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ds-alert", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("close", function SubmissionSectionContainerComponent_ngb_accordion_2_ng_template_4_div_0_ds_alert_1_Template_ds_alert_close_0_listener() {
      const i_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6).index;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4);
      const sectionRef_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](sectionRef_r2.removeError(i_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const error_r8 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("content", error_r8)("dismissible", true)("type", ctx_r3.AlertTypeEnum.Error);
  }
}
function SubmissionSectionContainerComponent_ngb_accordion_2_ng_template_4_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SubmissionSectionContainerComponent_ngb_accordion_2_ng_template_4_div_0_ds_alert_1_Template, 1, 3, "ds-alert", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    const sectionRef_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("id", "sectionGenericError_", ctx_r3.sectionData.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", sectionRef_r2.getErrors());
  }
}
function SubmissionSectionContainerComponent_ngb_accordion_2_ng_template_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
  }
}
function SubmissionSectionContainerComponent_ngb_accordion_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, SubmissionSectionContainerComponent_ngb_accordion_2_ng_template_4_div_0_Template, 2, 3, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SubmissionSectionContainerComponent_ngb_accordion_2_ng_template_4_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      const sectionRef_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](sectionRef_r2.setFocus($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, SubmissionSectionContainerComponent_ngb_accordion_2_ng_template_4_ng_container_2_Template, 1, 0, "ng-container", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    const sectionRef_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", sectionRef_r2.hasGenericErrors());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("id", "sectionContent_", ctx_r3.sectionData.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngComponentOutlet", ctx_r3.getSectionContent())("ngComponentOutletInjector", ctx_r3.objectInjector);
  }
}
function SubmissionSectionContainerComponent_ngb_accordion_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ngb-accordion", 4, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("panelChange", function SubmissionSectionContainerComponent_ngb_accordion_2_Template_ngb_accordion_panelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      const sectionRef_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](sectionRef_r2.sectionChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "ngb-panel", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, SubmissionSectionContainerComponent_ngb_accordion_2_ng_template_3_Template, 17, 28, "ng-template", 6)(4, SubmissionSectionContainerComponent_ngb_accordion_2_ng_template_4_Template, 3, 5, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const sectionRef_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("activeIds", ctx_r3.sectionData.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("destroyOnHide", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("id", ctx_r3.sectionData.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("type", sectionRef_r2.isInfo() ? "info" : "");
  }
}
/**
 * This component represents a section that contains the submission license form.
 */
class SubmissionSectionContainerComponent {
  /**
   * Initialize instance variables
   *
   * @param {Injector} injector
   */
  constructor(injector) {
    this.injector = injector;
    /**
     * The AlertType enumeration
     * @type {AlertType}
     */
    this.AlertTypeEnum = _shared_alert_alert_type__WEBPACK_IMPORTED_MODULE_1__.AlertType;
  }
  /**
   * Initialize all instance variables
   */
  ngOnInit() {
    this.objectInjector = _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injector.create({
      providers: [{
        provide: 'collectionIdProvider',
        useFactory: () => this.collectionId,
        deps: []
      }, {
        provide: 'sectionDataProvider',
        useFactory: () => this.sectionData,
        deps: []
      }, {
        provide: 'submissionIdProvider',
        useFactory: () => this.submissionId,
        deps: []
      }],
      parent: this.injector
    });
  }
  /**
   * Remove section from submission form
   *
   * @param event
   *    the event emitted
   */
  removeSection(event) {
    event.preventDefault();
    event.stopPropagation();
    this.sectionRef.removeSection(this.submissionId, this.sectionData.id);
  }
  /**
   * Find the correct component based on the section's type
   */
  getSectionContent() {
    return (0,_sections_decorator__WEBPACK_IMPORTED_MODULE_3__.rendersSectionType)(this.sectionData.sectionType);
  }
  static {
    this.ɵfac = function SubmissionSectionContainerComponent_Factory(t) {
      return new (t || SubmissionSectionContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injector));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: SubmissionSectionContainerComponent,
      selectors: [["ds-submission-section-container"]],
      viewQuery: function SubmissionSectionContainerComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.sectionRef = _t.first);
        }
      },
      inputs: {
        collectionId: "collectionId",
        sectionData: "sectionData",
        submissionId: "submissionId"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
      decls: 4,
      vars: 11,
      consts: [["sectionRef", "sectionRef"], ["acc", "ngbAccordion"], ["dsSection", "", 3, "ngClass", "mandatory", "submissionId", "sectionType", "sectionId"], [3, "activeIds", "destroyOnHide", "panelChange", 4, "ngIf"], [3, "panelChange", "activeIds", "destroyOnHide"], [3, "id", "type"], ["ngbPanelTitle", ""], ["ngbPanelContent", ""], ["tabindex", "0", 1, "float-left", "section-title", 3, "ngClass"], [1, "d-inline-block", "float-right"], ["class", "fas fa-exclamation-circle text-warning mr-3", "role", "img", 3, "title", 4, "ngIf"], ["class", "fas fa-exclamation-circle text-danger mr-3", "role", "img", 3, "title", 4, "ngIf"], ["class", "fas fa-check-circle text-success mr-3", "role", "img", 3, "title", 4, "ngIf"], ["class", "fas fa-info-circle mr-3 text-white", "role", "img", 3, "title", 4, "ngIf"], ["tabindex", "0", "role", "button", 1, "close", 3, "title"], ["class", "fas fa-chevron-up fa-fw", 3, "ngClass", 4, "ngIf"], ["class", "fas fa-chevron-down fa-fw", 4, "ngIf"], ["href", "javascript:void(0);", "class", "close mr-3", 3, "click", 4, "ngIf"], ["role", "img", 1, "fas", "fa-exclamation-circle", "text-warning", "mr-3", 3, "title"], ["role", "img", 1, "fas", "fa-exclamation-circle", "text-danger", "mr-3", 3, "title"], ["role", "img", 1, "fas", "fa-check-circle", "text-success", "mr-3", 3, "title"], ["role", "img", 1, "fas", "fa-info-circle", "mr-3", "text-white", 3, "title"], [1, "fas", "fa-chevron-up", "fa-fw", 3, "ngClass"], [1, "fas", "fa-chevron-down", "fa-fw"], ["href", "javascript:void(0);", 1, "close", "mr-3", 3, "click"], ["aria-hidden", "true", "tabindex", "0", 1, "fas", "fa-trash-o"], [3, "id", 4, "ngIf"], [3, "click", "id"], [4, "ngComponentOutlet", "ngComponentOutletInjector"], [3, "id"], [3, "content", "dismissible", "type", "close", 4, "ngFor", "ngForOf"], [3, "close", "content", "dismissible", "type"]],
      template: function SubmissionSectionContainerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 2, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, SubmissionSectionContainerComponent_ngb_accordion_2_Template, 5, 4, "ngb-accordion", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          const sectionRef_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](9, _c1, sectionRef_r2.isSectionActive()))("mandatory", ctx.sectionData.mandatory)("submissionId", ctx.submissionId)("sectionType", ctx.sectionData.sectionType)("sectionId", ctx.sectionData.id);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("id", "section_" + ctx.sectionData.id);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 7, sectionRef_r2.isEnabled()));
        }
      },
      dependencies: [_shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_0__.AlertComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbAccordionModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbAccordion, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbPanel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbPanelTitle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbPanelContent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgComponentOutlet, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe, _sections_directive__WEBPACK_IMPORTED_MODULE_2__.SectionsDirective],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]     .card {\n  margin-bottom: var(--ds-submission-sections-margin-bottom);\n  overflow: unset;\n}\n\n.section-focus[_ngcontent-%COMP%] {\n  border-radius: var(--bs-border-radius);\n  box-shadow: var(--bs-btn-focus-box-shadow);\n}\n\n[_nghost-%COMP%]     .card:first-of-type {\n  border-bottom: var(--bs-card-border-width) solid var(--bs-card-border-color) !important;\n  border-bottom-left-radius: var(--bs-card-border-radius) !important;\n  border-bottom-right-radius: var(--bs-card-border-radius) !important;\n}\n\n[_nghost-%COMP%]     .card-header button {\n  box-shadow: none !important;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlY3Rpb24tY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBO0FBQ0E7RUFDRSwwREFBQTtFQUNBLGVBQUE7QUFDRjs7QUFDQTtFQUNFLHNDQUFBO0VBQ0EsMENBQUE7QUFFRjs7QUFBQTtFQUNFLHVGQUFBO0VBQ0Esa0VBQUE7RUFDQSxtRUFBQTtBQUdGOztBQURBO0VBQ0UsMkJBQUE7RUFDQSxXQUFBO0FBSUYiLCJmaWxlIjoic2VjdGlvbi1jb250YWluZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqL1xuOmhvc3QgOjpuZy1kZWVwIC5jYXJkIHtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tZHMtc3VibWlzc2lvbi1zZWN0aW9ucy1tYXJnaW4tYm90dG9tKTtcbiAgb3ZlcmZsb3c6IHVuc2V0O1xufVxuLnNlY3Rpb24tZm9jdXMge1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1icy1ib3JkZXItcmFkaXVzKTtcbiAgYm94LXNoYWRvdzogdmFyKC0tYnMtYnRuLWZvY3VzLWJveC1zaGFkb3cpO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5jYXJkOmZpcnN0LW9mLXR5cGUge1xuICBib3JkZXItYm90dG9tOiB2YXIoLS1icy1jYXJkLWJvcmRlci13aWR0aCkgc29saWQgdmFyKC0tYnMtY2FyZC1ib3JkZXItY29sb3IpICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IHZhcigtLWJzLWNhcmQtYm9yZGVyLXJhZGl1cykgIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IHZhcigtLWJzLWNhcmQtYm9yZGVyLXJhZGl1cykgIWltcG9ydGFudDtcbn1cbjpob3N0IDo6bmctZGVlcCAuY2FyZC1oZWFkZXIgYnV0dG9uIHtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc3VibWlzc2lvbi9zZWN0aW9ucy9jb250YWluZXIvc2VjdGlvbi1jb250YWluZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQTtFQUNFLDBEQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUNBO0VBQ0Usc0NBQUE7RUFDQSwwQ0FBQTtBQUVGOztBQUFBO0VBQ0UsdUZBQUE7RUFDQSxrRUFBQTtFQUNBLG1FQUFBO0FBR0Y7O0FBREE7RUFDRSwyQkFBQTtFQUNBLFdBQUE7QUFJRjtBQUNBLHdoREFBd2hEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi9cbjpob3N0IDo6bmctZGVlcCAuY2FyZCB7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLWRzLXN1Ym1pc3Npb24tc2VjdGlvbnMtbWFyZ2luLWJvdHRvbSk7XG4gIG92ZXJmbG93OiB1bnNldDtcbn1cbi5zZWN0aW9uLWZvY3VzIHtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYnMtYm9yZGVyLXJhZGl1cyk7XG4gIGJveC1zaGFkb3c6IHZhcigtLWJzLWJ0bi1mb2N1cy1ib3gtc2hhZG93KTtcbn1cbjpob3N0IDo6bmctZGVlcCAuY2FyZDpmaXJzdC1vZi10eXBlIHtcbiAgYm9yZGVyLWJvdHRvbTogdmFyKC0tYnMtY2FyZC1ib3JkZXItd2lkdGgpIHNvbGlkIHZhcigtLWJzLWNhcmQtYm9yZGVyLWNvbG9yKSAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiB2YXIoLS1icy1jYXJkLWJvcmRlci1yYWRpdXMpICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiB2YXIoLS1icy1jYXJkLWJvcmRlci1yYWRpdXMpICFpbXBvcnRhbnQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLmNhcmQtaGVhZGVyIGJ1dHRvbiB7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCU7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 51398:
/*!********************************************************************************!*\
  !*** ./src/app/submission/sections/duplicates/section-duplicates.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SubmissionSectionDuplicatesComponent: () => (/* binding */ SubmissionSectionDuplicatesComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 17796);
/* harmony import */ var _core_shared_metadata_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/shared/metadata.utils */ 39552);
/* harmony import */ var _core_url_combiner_url_combiner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/url-combiner/url-combiner */ 45663);
/* harmony import */ var _item_page_item_page_routing_paths__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../item-page/item-page-routing-paths */ 90887);
/* harmony import */ var _shared_alert_alert_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/alert/alert-type */ 47978);
/* harmony import */ var _shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/utils/var.directive */ 18226);
/* harmony import */ var _submission_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../submission.service */ 61010);
/* harmony import */ var _models_section_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/section.model */ 70507);
/* harmony import */ var _sections_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sections.service */ 72147);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 90310);















function SubmissionSectionDuplicatesComponent_div_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 1, "submission.sections.duplicates.none"));
  }
}
function SubmissionSectionDuplicatesComponent_div_0_ng_container_2_div_4_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const metadatum_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 2, "item.preview." + metadatum_r1.key), " ", metadatum_r1.value, " ");
  }
}
function SubmissionSectionDuplicatesComponent_div_0_ng_container_2_div_4_p_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "submission.sections.duplicates.in-workspace"));
  }
}
function SubmissionSectionDuplicatesComponent_div_0_ng_container_2_div_4_p_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "submission.sections.duplicates.in-workflow"));
  }
}
function SubmissionSectionDuplicatesComponent_div_0_ng_container_2_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 6)(1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, SubmissionSectionDuplicatesComponent_div_0_ng_container_2_div_4_div_3_Template, 3, 4, "div", 8)(4, SubmissionSectionDuplicatesComponent_div_0_ng_container_2_div_4_p_4_Template, 3, 3, "p", 2)(5, SubmissionSectionDuplicatesComponent_div_0_ng_container_2_div_4_p_5_Template, 3, 3, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const dupe_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("href", ctx_r2.getItemLink(dupe_r2.uuid), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](dupe_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r2.Metadata.toViewModelList(dupe_r2.metadata));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", dupe_r2.workspaceItemId);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", dupe_r2.workflowItemId);
  }
}
function SubmissionSectionDuplicatesComponent_div_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, SubmissionSectionDuplicatesComponent_div_0_ng_container_2_div_4_Template, 6, 5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const data_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().ngVar;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 2, "submission.sections.duplicates.detected"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", data_r4 == null ? null : data_r4.potentialDuplicates);
  }
}
function SubmissionSectionDuplicatesComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, SubmissionSectionDuplicatesComponent_div_0_ng_container_1_Template, 4, 3, "ng-container", 2)(2, SubmissionSectionDuplicatesComponent_div_0_ng_container_2_Template, 5, 4, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r4 = ctx.ngVar;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (data_r4 == null ? null : data_r4.potentialDuplicates.length) === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (data_r4 == null ? null : data_r4.potentialDuplicates.length) > 0);
  }
}
/**
 * Detect duplicates step
 *
 * @author Kim Shepherd
 */
class SubmissionSectionDuplicatesComponent extends _models_section_model__WEBPACK_IMPORTED_MODULE_6__.SectionModelComponent {
  /**
   * Initialize instance variables.
   *
   * @param {TranslateService} translate
   * @param {SectionsService} sectionService
   * @param {SubmissionService} submissionService
   * @param {string} injectedCollectionId
   * @param {SectionDataObject} injectedSectionData
   * @param {string} injectedSubmissionId
   */
  constructor(translate, sectionService, submissionService, injectedCollectionId, injectedSectionData, injectedSubmissionId) {
    super(injectedCollectionId, injectedSectionData, injectedSubmissionId);
    this.translate = translate;
    this.sectionService = sectionService;
    this.submissionService = submissionService;
    this.injectedCollectionId = injectedCollectionId;
    this.injectedSectionData = injectedSectionData;
    this.injectedSubmissionId = injectedSubmissionId;
    this.Metadata = _core_shared_metadata_utils__WEBPACK_IMPORTED_MODULE_0__.Metadata;
    /**
     * The Alert categories.
     * @type {AlertType}
     */
    this.AlertTypeEnum = _shared_alert_alert_type__WEBPACK_IMPORTED_MODULE_3__.AlertType;
    /**
     * Variable to track if the section is loading.
     * @type {boolean}
     */
    this.isLoading = true;
    /**
     * Array to track all subscriptions and unsubscribe them onDestroy
     * @type {Array}
     */
    this.subs = [];
  }
  ngOnInit() {
    super.ngOnInit();
  }
  /**
   * Initialize all instance variables and retrieve configuration.
   */
  onSectionInit() {
    this.isLoading = false;
  }
  /**
   * Check if identifier section has read-only visibility
   */
  isReadOnly() {
    return true;
  }
  /**
   * Unsubscribe from all subscriptions, if needed.
   */
  onSectionDestroy() {
    return;
  }
  /**
   * Get section status. Because this simple component never requires human interaction, this is basically
   * always going to be the opposite of "is this section still loading". This is not the place for API response
   * error checking but determining whether the step can 'proceed'.
   *
   * @return Observable<boolean>
   *     the section status
   */
  getSectionStatus() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(!this.isLoading);
  }
  /**
   * Get duplicate data as observable from the section data
   */
  getDuplicateData() {
    return this.sectionService.getSectionData(this.submissionId, this.sectionData.id, this.sectionData.sectionType);
  }
  /**
   * Construct and return an item link for use with a preview item stub
   * @param uuid
   */
  getItemLink(uuid) {
    return new _core_url_combiner_url_combiner__WEBPACK_IMPORTED_MODULE_1__.URLCombiner((0,_item_page_item_page_routing_paths__WEBPACK_IMPORTED_MODULE_2__.getItemModuleRoute)(), uuid).toString();
  }
  static {
    this.ɵfac = function SubmissionSectionDuplicatesComponent_Factory(t) {
      return new (t || SubmissionSectionDuplicatesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_sections_service__WEBPACK_IMPORTED_MODULE_7__.SectionsService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_submission_service__WEBPACK_IMPORTED_MODULE_5__.SubmissionService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"]('collectionIdProvider'), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"]('sectionDataProvider'), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"]('submissionIdProvider'));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
      type: SubmissionSectionDuplicatesComponent,
      selectors: [["ds-submission-section-duplicates"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 3,
      consts: [["class", "text-sm-left", 4, "ngVar"], [1, "text-sm-left"], [4, "ngIf"], [1, "alert", "alert-success", "w-100"], [1, "alert", "alert-warning", "w-100"], ["class", "ds-duplicate", 4, "ngFor", "ngForOf"], [1, "ds-duplicate"], ["target", "_blank", 3, "href"], [4, "ngFor", "ngForOf"]],
      template: function SubmissionSectionDuplicatesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, SubmissionSectionDuplicatesComponent_div_0_Template, 3, 2, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "async");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngVar", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 1, ctx.getDuplicateData()));
        }
      },
      dependencies: [_shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_4__.VarDirective, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 71343:
/*!*****************************************************************************!*\
  !*** ./src/app/submission/sections/form/section-form-operations.service.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SectionFormOperationsService: () => (/* binding */ SectionFormOperationsService)
/* harmony export */ });
/* harmony import */ var _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-dynamic-forms/core */ 94403);
/* harmony import */ var fast_json_patch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fast-json-patch */ 99171);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isEqual */ 21016);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/isObject */ 34761);
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isObject__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_json_patch_builder_json_patch_operations_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/json-patch/builder/json-patch-operations-builder */ 17184);
/* harmony import */ var _core_submission_vocabularies_models_vocabulary_entry_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/submission/vocabularies/models/vocabulary-entry.model */ 43235);
/* harmony import */ var _core_submission_vocabularies_models_vocabulary_entry_detail_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/submission/vocabularies/models/vocabulary-entry-detail.model */ 36599);
/* harmony import */ var _shared_date_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/date.util */ 63604);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/empty.util */ 82777);
/* harmony import */ var _shared_form_builder_form_builder_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/form/builder/form-builder.service */ 1216);
/* harmony import */ var _shared_form_builder_models_form_field_language_value_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/form/builder/models/form-field-language-value.model */ 43903);
/* harmony import */ var _shared_form_builder_models_form_field_metadata_value_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/form/builder/models/form-field-metadata-value.model */ 61280);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 90310);















/**
 * The service handling all form section operations
 */
class SectionFormOperationsService {
  /**
   * Initialize service variables
   *
   * @param {FormBuilderService} formBuilder
   * @param {JsonPatchOperationsBuilder} operationsBuilder
   */
  constructor(formBuilder, operationsBuilder) {
    this.formBuilder = formBuilder;
    this.operationsBuilder = operationsBuilder;
  }
  /**
   * Dispatch properly method based on form operation type
   *
   * @param pathCombiner
   *    the [[JsonPatchOperationPathCombiner]] object for the specified operation
   * @param event
   *    the [[DynamicFormControlEvent]] for the specified operation
   * @param previousValue
   *    the [[FormFieldPreviousValueObject]] for the specified operation
   * @param hasStoredValue
   *    representing if field value related to the specified operation has stored value
   */
  dispatchOperationsFromEvent(pathCombiner, event, previousValue, hasStoredValue) {
    switch (event.type) {
      case 'remove':
        this.dispatchOperationsFromRemoveEvent(pathCombiner, event, previousValue);
        break;
      case 'change':
        this.dispatchOperationsFromChangeEvent(pathCombiner, event, previousValue, hasStoredValue);
        break;
      case 'move':
        this.dispatchOperationsFromMoveEvent(pathCombiner, event, previousValue);
        break;
      default:
        break;
    }
  }
  /**
   * Return index if specified field is part of fields array
   *
   * @param event
   *    the [[DynamicFormControlEvent]] | CustomEvent for the specified operation
   * @return number
   *    the array index is part of array, zero otherwise
   */
  getArrayIndexFromEvent(event) {
    let fieldIndex;
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_7__.isNotEmpty)(event)) {
      if ((0,_ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_11__.isDynamicFormControlEvent)(event)) {
        // This is the case of a default insertItem/removeItem event
        if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_7__.isNull)(event.context)) {
          // Check whether model is part of an Array of group
          if (this.isPartOfArrayOfGroup(event.model)) {
            fieldIndex = event.model.parent.parent.index;
          }
        } else {
          fieldIndex = event.context.index;
        }
      } else {
        // This is the case of a custom event which contains indexes information
        fieldIndex = event?.index;
      }
    }
    // if field index is undefined model is not part of array of fields
    return (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_7__.isNotUndefined)(fieldIndex) ? fieldIndex : 0;
  }
  /**
   * Check if specified model is part of array of group
   *
   * @param model
   *    the [[DynamicFormControlModel]] model
   * @return boolean
   *    true if is part of array, false otherwise
   */
  isPartOfArrayOfGroup(model) {
    return (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_7__.isNotNull)(model.parent) && model.parent.type === _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_11__.DYNAMIC_FORM_CONTROL_TYPE_GROUP && model.parent.parent && model.parent.parent.context && model.parent.parent.context.type === _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_11__.DYNAMIC_FORM_CONTROL_TYPE_ARRAY;
  }
  /**
   * Return a map for the values of a Qualdrop field
   *
   * @param event
   *    the [[DynamicFormControlEvent]] for the specified operation
   * @return Map<string, any>
   *    the map of values
   */
  getQualdropValueMap(event) {
    const metadataValueMap = new Map();
    const context = this.formBuilder.isQualdropGroup(event.model) ? event.model.parent.context : event.model.parent.parent.context;
    context.groups.forEach(arrayModel => {
      const groupModel = arrayModel.group[0];
      const metadataValueList = metadataValueMap.get(groupModel.qualdropId) ? metadataValueMap.get(groupModel.qualdropId) : [];
      if (groupModel.value) {
        metadataValueList.push(groupModel.value);
        metadataValueMap.set(groupModel.qualdropId, metadataValueList);
      }
    });
    return metadataValueMap;
  }
  /**
   * Return the absolute path for the field interesting in the specified operation
   *
   * @param event
   *    the [[DynamicFormControlEvent]] for the specified operation
   * @return string
   *    the field path
   */
  getFieldPathFromEvent(event) {
    const fieldIndex = this.getArrayIndexFromEvent(event);
    const fieldId = this.getFieldPathSegmentedFromChangeEvent(event);
    return (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_7__.isNotUndefined)(fieldIndex) ? fieldId + '/' + fieldIndex : fieldId;
  }
  /**
   * Return the absolute path for the Qualdrop field interesting in the specified operation
   *
   * @param event
   *    the [[DynamicFormControlEvent]] for the specified operation
   * @return string
   *    the field path
   */
  getQualdropItemPathFromEvent(event) {
    const fieldIndex = this.getArrayIndexFromEvent(event);
    const metadataValueMap = new Map();
    let path = null;
    const context = this.formBuilder.isQualdropGroup(event.model) ? event.model.parent.context : event.model.parent.parent.context;
    context.groups.forEach((arrayModel, index) => {
      const groupModel = arrayModel.group[0];
      const metadataValueList = metadataValueMap.get(groupModel.qualdropId) ? metadataValueMap.get(groupModel.qualdropId) : [];
      if (groupModel.value) {
        metadataValueList.push(groupModel.value);
        metadataValueMap.set(groupModel.qualdropId, metadataValueList);
      }
      if (index === fieldIndex) {
        path = groupModel.qualdropId + '/' + (metadataValueList.length - 1);
      }
    });
    return path;
  }
  /**
   * Return the segmented path for the field interesting in the specified change operation
   *
   * @param event
   *    the [[DynamicFormControlEvent]] for the specified operation
   * @return string
   *    the field path
   */
  getFieldPathSegmentedFromChangeEvent(event) {
    let fieldId;
    if (this.formBuilder.isQualdropGroup(event.model)) {
      fieldId = event.model.qualdropId;
    } else if (this.formBuilder.isQualdropGroup(event.model.parent)) {
      fieldId = event.model.parent.qualdropId;
    } else {
      fieldId = this.formBuilder.getId(event.model);
    }
    return fieldId;
  }
  /**
   * Return the value of the field interesting in the specified change operation
   *
   * @param event
   *    the [[DynamicFormControlEvent]] for the specified operation
   * @return any
   *    the field value
   */
  getFieldValueFromChangeEvent(event) {
    let fieldValue;
    const value = event.model.value;
    if (this.formBuilder.isModelInCustomGroup(event.model)) {
      fieldValue = event.model.parent.value;
    } else if (this.formBuilder.isRelationGroup(event.model)) {
      fieldValue = event.model.getGroupValue();
    } else if (event.model.hasLanguages) {
      const language = event.model.language;
      if (event.model.hasAuthority) {
        if (Array.isArray(value)) {
          value.forEach((authority, index) => {
            authority = Object.assign(new _core_submission_vocabularies_models_vocabulary_entry_model__WEBPACK_IMPORTED_MODULE_4__.VocabularyEntry(), authority, {
              language
            });
            value[index] = authority;
          });
          fieldValue = value;
        } else {
          fieldValue = Object.assign(new _core_submission_vocabularies_models_vocabulary_entry_model__WEBPACK_IMPORTED_MODULE_4__.VocabularyEntry(), value, {
            language
          });
        }
      } else {
        // Language without Authority (input, textArea)
        fieldValue = new _shared_form_builder_models_form_field_metadata_value_model__WEBPACK_IMPORTED_MODULE_10__.FormFieldMetadataValueObject(value, language);
      }
    } else if ((0,_shared_date_util__WEBPACK_IMPORTED_MODULE_6__.isNgbDateStruct)(value)) {
      fieldValue = new _shared_form_builder_models_form_field_metadata_value_model__WEBPACK_IMPORTED_MODULE_10__.FormFieldMetadataValueObject((0,_shared_date_util__WEBPACK_IMPORTED_MODULE_6__.dateToString)(value));
    } else if (value instanceof _shared_form_builder_models_form_field_language_value_model__WEBPACK_IMPORTED_MODULE_9__.FormFieldLanguageValueObject || value instanceof _core_submission_vocabularies_models_vocabulary_entry_model__WEBPACK_IMPORTED_MODULE_4__.VocabularyEntry || value instanceof _core_submission_vocabularies_models_vocabulary_entry_detail_model__WEBPACK_IMPORTED_MODULE_5__.VocabularyEntryDetail || lodash_isObject__WEBPACK_IMPORTED_MODULE_2___default()(value)) {
      fieldValue = value;
    } else {
      fieldValue = new _shared_form_builder_models_form_field_metadata_value_model__WEBPACK_IMPORTED_MODULE_10__.FormFieldMetadataValueObject(value);
    }
    return fieldValue;
  }
  /**
   * Return a map for the values of an array of field
   *
   * @param items
   *    the list of items
   * @return Map<string, any>
   *    the map of values
   */
  getValueMap(items) {
    const metadataValueMap = new Map();
    items.forEach(item => {
      Object.keys(item).forEach(key => {
        const metadataValueList = metadataValueMap.get(key) ? metadataValueMap.get(key) : [];
        metadataValueList.push(item[key]);
        metadataValueMap.set(key, metadataValueList);
      });
    });
    return metadataValueMap;
  }
  /**
   * Handle form remove operations
   *
   * @param pathCombiner
   *    the [[JsonPatchOperationPathCombiner]] object for the specified operation
   * @param event
   *    the [[DynamicFormControlEvent]] for the specified operation
   * @param previousValue
   *    the [[FormFieldPreviousValueObject]] for the specified operation
   */
  dispatchOperationsFromRemoveEvent(pathCombiner, event, previousValue) {
    const path = this.getFieldPathFromEvent(event);
    const value = this.getFieldValueFromChangeEvent(event);
    if (this.formBuilder.isQualdropGroup(event.model)) {
      this.dispatchOperationsFromMap(this.getQualdropValueMap(event), pathCombiner, event, previousValue);
    } else if (event.context && event.context instanceof _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_11__.DynamicFormArrayGroupModel) {
      // Model is a DynamicRowArrayModel
      this.handleArrayGroupPatch(pathCombiner, event, event.context.context, previousValue);
    } else if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_7__.isNotEmpty)(value) && typeof value === 'string' || (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_7__.isNotEmpty)(value) && value instanceof _shared_form_builder_models_form_field_metadata_value_model__WEBPACK_IMPORTED_MODULE_10__.FormFieldMetadataValueObject && value.hasValue()) {
      this.operationsBuilder.remove(pathCombiner.getPath(path));
    }
  }
  /**
   * Handle form add operations
   *
   * @param pathCombiner
   *    the [[JsonPatchOperationPathCombiner]] object for the specified operation
   * @param event
   *    the [[DynamicFormControlEvent]] for the specified operation
   */
  dispatchOperationsFromAddEvent(pathCombiner, event) {
    const path = this.getFieldPathSegmentedFromChangeEvent(event);
    const value = (0,fast_json_patch__WEBPACK_IMPORTED_MODULE_0__.deepClone)(this.getFieldValueFromChangeEvent(event));
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_7__.isNotEmpty)(value)) {
      value.place = this.getArrayIndexFromEvent(event);
      if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_7__.hasValue)(event.group) && (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_7__.hasValue)(event.group.value)) {
        const valuesInGroup = event.group.value.map(g => Object.values(g)).reduce((accumulator, currentValue) => accumulator.concat(currentValue)).filter(v => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_7__.isNotEmpty)(v));
        if (valuesInGroup.length === 1) {
          // The first add for a field needs to be a different PATCH operation
          // for some reason
          this.operationsBuilder.add(pathCombiner.getPath([path]), [value], false);
        } else {
          this.operationsBuilder.add(pathCombiner.getPath([path, '-']), value, false);
        }
      }
    }
  }
  /**
   * Handle form change operations
   *
   * @param pathCombiner
   *    the [[JsonPatchOperationPathCombiner]] object for the specified operation
   * @param event
   *    the [[DynamicFormControlEvent]] for the specified operation
   * @param previousValue
   *    the [[FormFieldPreviousValueObject]] for the specified operation
   * @param hasStoredValue
   *    representing if field value related to the specified operation has stored value
   */
  dispatchOperationsFromChangeEvent(pathCombiner, event, previousValue, hasStoredValue) {
    if (event.context && event.context instanceof _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_11__.DynamicFormArrayGroupModel) {
      // Model is a DynamicRowArrayModel
      this.handleArrayGroupPatch(pathCombiner, event, event.context.context, previousValue);
      return;
    }
    const path = this.getFieldPathFromEvent(event);
    const segmentedPath = this.getFieldPathSegmentedFromChangeEvent(event);
    const value = this.getFieldValueFromChangeEvent(event);
    // Detect which operation must be dispatched
    if (this.formBuilder.isQualdropGroup(event.model.parent) || this.formBuilder.isQualdropGroup(event.model)) {
      // It's a qualdrup model
      this.dispatchOperationsFromMap(this.getQualdropValueMap(event), pathCombiner, event, previousValue);
    } else if (this.formBuilder.isRelationGroup(event.model)) {
      // It's a relation model
      this.dispatchOperationsFromMap(this.getValueMap(value), pathCombiner, event, previousValue);
    } else if (this.formBuilder.hasArrayGroupValue(event.model)) {
      // Model has as value an array, so dispatch an add operation with entire block of values
      this.operationsBuilder.add(pathCombiner.getPath(segmentedPath), value, true);
    } else if (previousValue.isPathEqual(this.formBuilder.getPath(event.model)) || hasStoredValue && (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_7__.isNotEmpty)(previousValue.value)) {
      // Here model has a previous value changed or stored in the server
      if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_7__.hasValue)(event.$event) && (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_7__.hasValue)(event.$event.previousIndex)) {
        if (event.$event.previousIndex < 0) {
          this.operationsBuilder.add(pathCombiner.getPath(segmentedPath), value, true);
        } else {
          const moveTo = pathCombiner.getPath(path);
          const moveFrom = pathCombiner.getPath(segmentedPath + '/' + event.$event.previousIndex);
          if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_7__.isNotEmpty)(moveFrom.path) && (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_7__.isNotEmpty)(moveTo.path) && moveFrom.path !== moveTo.path) {
            this.operationsBuilder.move(moveTo, moveFrom.path);
          }
        }
      } else if (!value.hasValue()) {
        // New value is empty, so dispatch a remove operation
        if (this.getArrayIndexFromEvent(event) === 0) {
          this.operationsBuilder.remove(pathCombiner.getPath(segmentedPath));
        } else {
          this.operationsBuilder.remove(pathCombiner.getPath(path));
        }
      } else {
        // New value is not equal from the previous one, so dispatch a replace operation
        this.operationsBuilder.replace(pathCombiner.getPath(path), value);
      }
      previousValue.delete();
    } else if (value.hasValue()) {
      // Here model has no previous value but a new one
      if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_7__.isUndefined)(this.getArrayIndexFromEvent(event)) || this.getArrayIndexFromEvent(event) === 0) {
        // Model is single field or is part of an array model but is the first item,
        // so dispatch an add operation that initialize the values of a specific metadata
        this.operationsBuilder.add(pathCombiner.getPath(segmentedPath), value, true);
      } else {
        // Model is part of an array model but is not the first item,
        // so dispatch an add operation that add a value to an existent metadata
        this.operationsBuilder.add(pathCombiner.getPath(path), value);
      }
    }
  }
  /**
   * Handle form operations interesting a field with a map as value
   *
   * @param valueMap
   *    map of values
   * @param pathCombiner
   *    the [[JsonPatchOperationPathCombiner]] object for the specified operation
   * @param event
   *    the [[DynamicFormControlEvent]] for the specified operation
   * @param previousValue
   *    the [[FormFieldPreviousValueObject]] for the specified operation
   */
  dispatchOperationsFromMap(valueMap, pathCombiner, event, previousValue) {
    const currentValueMap = valueMap;
    if (event.type === 'remove') {
      const path = this.getQualdropItemPathFromEvent(event);
      this.operationsBuilder.remove(pathCombiner.getPath(path));
    } else {
      if (previousValue.isPathEqual(this.formBuilder.getPath(event.model))) {
        previousValue.value.forEach((entry, index) => {
          const currentValue = currentValueMap.get(index);
          if (currentValue) {
            if (!lodash_isEqual__WEBPACK_IMPORTED_MODULE_1___default()(entry, currentValue)) {
              this.operationsBuilder.add(pathCombiner.getPath(index), currentValue, true);
            }
            currentValueMap.delete(index);
          } else if (!currentValue) {
            this.operationsBuilder.remove(pathCombiner.getPath(index));
          }
        });
      }
      currentValueMap.forEach((entry, index) => {
        if (entry.length === 1 && (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_7__.isNull)(entry[0])) {
          // The last item of the group has been deleted so make a remove op
          this.operationsBuilder.remove(pathCombiner.getPath(index));
        } else {
          this.operationsBuilder.add(pathCombiner.getPath(index), entry, true);
        }
      });
    }
    previousValue.delete();
  }
  /**
   * Handle form move operations
   *
   * @param pathCombiner
   *    the [[JsonPatchOperationPathCombiner]] object for the specified operation
   * @param event
   *    the [[DynamicFormControlEvent]] for the specified operation
   * @param previousValue
   *    the [[FormFieldPreviousValueObject]] for the specified operation
   */
  dispatchOperationsFromMoveEvent(pathCombiner, event, previousValue) {
    return this.handleArrayGroupPatch(pathCombiner, event.$event, event.$event.arrayModel, previousValue);
  }
  /**
   * Specific patch handler for a DynamicRowArrayModel.
   * Configure a Patch ADD with the current array value.
   * @param pathCombiner
   *    the [[JsonPatchOperationPathCombiner]] object for the specified operation
   * @param event
   *    the [[DynamicFormControlEvent]] for the specified operation
   * @param model
   *    the [[DynamicRowArrayModel]] model
   * @param previousValue
   *    the [[FormFieldPreviousValueObject]] for the specified operation
   */
  handleArrayGroupPatch(pathCombiner, event, model, previousValue) {
    const arrayValue = this.formBuilder.getValueFromModel([model]);
    const segmentedPath = this.getFieldPathSegmentedFromChangeEvent(event);
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_7__.isNotEmpty)(arrayValue)) {
      this.operationsBuilder.add(pathCombiner.getPath(segmentedPath), arrayValue[segmentedPath], false);
    } else if (previousValue.isPathEqual(this.formBuilder.getPath(event.model))) {
      this.operationsBuilder.remove(pathCombiner.getPath(segmentedPath));
    }
  }
  static {
    this.ɵfac = function SectionFormOperationsService_Factory(t) {
      return new (t || SectionFormOperationsService)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_shared_form_builder_form_builder_service__WEBPACK_IMPORTED_MODULE_8__.FormBuilderService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_core_json_patch_builder_json_patch_operations_builder__WEBPACK_IMPORTED_MODULE_3__.JsonPatchOperationsBuilder));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjectable"]({
      token: SectionFormOperationsService,
      factory: SectionFormOperationsService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 18370:
/*!********************************************************************!*\
  !*** ./src/app/submission/sections/form/section-form.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SubmissionSectionFormComponent: () => (/* binding */ SubmissionSectionFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var lodash_findIndex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/findIndex */ 60245);
/* harmony import */ var lodash_findIndex__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_findIndex__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isEqual */ 21016);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! rxjs */ 27639);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! rxjs/operators */ 21252);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! rxjs/operators */ 74671);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! rxjs/operators */ 78374);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! rxjs/operators */ 47386);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! rxjs/operators */ 64785);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! rxjs/operators */ 85687);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ 88280);
/* harmony import */ var _core_cache_object_cache_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/cache/object-cache.service */ 41684);
/* harmony import */ var _core_config_submission_forms_config_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/config/submission-forms-config-data.service */ 43928);
/* harmony import */ var _core_data_request_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/data/request.service */ 32473);
/* harmony import */ var _core_json_patch_builder_json_patch_operation_path_combiner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/json-patch/builder/json-patch-operation-path-combiner */ 92409);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/shared/operators */ 55757);
/* harmony import */ var _core_submission_models_workflowitem_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/submission/models/workflowitem.model */ 25567);
/* harmony import */ var _core_submission_models_workspaceitem_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/submission/models/workspaceitem.model */ 91581);
/* harmony import */ var _core_submission_submission_object_data_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../core/submission/submission-object-data.service */ 49903);
/* harmony import */ var _core_submission_submission_scope_type__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../core/submission/submission-scope-type */ 83085);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/empty.util */ 82777);
/* harmony import */ var _shared_form_builder_form_builder_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/form/builder/form-builder.service */ 1216);
/* harmony import */ var _shared_form_builder_models_form_field_previous_value_object__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/form/builder/models/form-field-previous-value-object */ 63571);
/* harmony import */ var _shared_form_form_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shared/form/form.component */ 99386);
/* harmony import */ var _shared_form_form_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../shared/form/form.service */ 15390);
/* harmony import */ var _shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../shared/loading/themed-loading.component */ 82394);
/* harmony import */ var _shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../shared/notifications/notifications.service */ 69472);
/* harmony import */ var _shared_object_util__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../shared/object.util */ 80597);
/* harmony import */ var _shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../shared/utils/follow-link-config.model */ 67600);
/* harmony import */ var _submission_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../submission.service */ 61010);
/* harmony import */ var _models_section_model__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../models/section.model */ 70507);
/* harmony import */ var _sections_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../sections.service */ 72147);
/* harmony import */ var _section_form_operations_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./section-form-operations.service */ 71343);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @ngx-translate/core */ 96439);










































const _c0 = ["formRef"];
function SubmissionSectionFormComponent_ds_loading_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](0, "ds-loading", 3);
  }
}
function SubmissionSectionFormComponent_ds_form_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "ds-form", 4, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵlistener"]("dfChange", function SubmissionSectionFormComponent_ds_form_1_Template_ds_form_dfChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵresetView"](ctx_r1.onChange($event));
    })("dfFocus", function SubmissionSectionFormComponent_ds_form_1_Template_ds_form_dfFocus_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵresetView"](ctx_r1.onFocus($event));
    })("remove", function SubmissionSectionFormComponent_ds_form_1_Template_ds_form_remove_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵresetView"](ctx_r1.onRemove($event));
    })("ngbEvent", function SubmissionSectionFormComponent_ds_form_1_Template_ds_form_ngbEvent_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵresetView"](ctx_r1.onCustomEvent($event));
    })("removeArrayItem", function SubmissionSectionFormComponent_ds_form_1_Template_ds_form_removeArrayItem_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵresetView"](ctx_r1.onRemove($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("formId", ctx_r1.formId)("formModel", ctx_r1.formModel)("displaySubmit", false)("displayCancel", false);
  }
}
/**
 * This component represents a section that contains a Form.
 */
class SubmissionSectionFormComponent extends _models_section_model__WEBPACK_IMPORTED_MODULE_22__.SectionModelComponent {
  /**
   * Initialize instance variables
   *
   * @param {ChangeDetectorRef} cdr
   * @param {FormBuilderService} formBuilderService
   * @param {SectionFormOperationsService} formOperationsService
   * @param {FormService} formService
   * @param {SubmissionFormsConfigDataService} formConfigService
   * @param {NotificationsService} notificationsService
   * @param {SectionsService} sectionService
   * @param {SubmissionService} submissionService
   * @param {TranslateService} translate
   * @param {SubmissionObjectDataService} submissionObjectService
   * @param {ObjectCacheService} objectCache
   * @param {RequestService} requestService
   * @param {string} injectedCollectionId
   * @param {SectionDataObject} injectedSectionData
   * @param {string} injectedSubmissionId
   */
  constructor(cdr, formBuilderService, formOperationsService, formService, formConfigService, notificationsService, sectionService, submissionService, translate, submissionObjectService, objectCache, requestService, injectedCollectionId, injectedSectionData, injectedSubmissionId) {
    super(injectedCollectionId, injectedSectionData, injectedSubmissionId);
    this.cdr = cdr;
    this.formBuilderService = formBuilderService;
    this.formOperationsService = formOperationsService;
    this.formService = formService;
    this.formConfigService = formConfigService;
    this.notificationsService = notificationsService;
    this.sectionService = sectionService;
    this.submissionService = submissionService;
    this.translate = translate;
    this.submissionObjectService = submissionObjectService;
    this.objectCache = objectCache;
    this.requestService = requestService;
    this.injectedCollectionId = injectedCollectionId;
    this.injectedSectionData = injectedSectionData;
    this.injectedSubmissionId = injectedSubmissionId;
    /**
     * A boolean representing if this section is updating
     * @type {boolean}
     */
    this.isUpdating = false;
    /**
     * A boolean representing if this section is loading
     * @type {boolean}
     */
    this.isLoading = true;
    /**
     * A map representing all field on their way to be removed
     * @type {Map}
     */
    this.fieldsOnTheirWayToBeRemoved = new Map();
    /**
     * The form data
     * @type {any}
     */
    this.formData = Object.create({});
    /**
     * The [FormFieldPreviousValueObject] object
     * @type {FormFieldPreviousValueObject}
     */
    this.previousValue = new _shared_form_builder_models_form_field_previous_value_object__WEBPACK_IMPORTED_MODULE_14__.FormFieldPreviousValueObject();
    /**
     * The list of Subscription
     * @type {Array}
     */
    this.subs = [];
    /**
     * A flag representing if this section is readonly
     */
    this.isSectionReadonly = false;
  }
  /**
   * Initialize all instance variables and retrieve form configuration
   */
  onSectionInit() {
    this.pathCombiner = new _core_json_patch_builder_json_patch_operation_path_combiner__WEBPACK_IMPORTED_MODULE_6__.JsonPatchOperationPathCombiner('sections', this.sectionData.id);
    this.formId = this.formService.getUniqueId(this.sectionData.id);
    this.sectionService.dispatchSetSectionFormId(this.submissionId, this.sectionData.id, this.formId);
    this.formConfigService.findByHref(this.sectionData.config).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_26__.map)(configData => configData.payload), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_27__.tap)(config => this.formConfig = config), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_28__.mergeMap)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_29__.combineLatest)([this.sectionService.getSectionData(this.submissionId, this.sectionData.id, this.sectionData.sectionType), this.submissionObjectService.findById(this.submissionId, true, false, (0,_shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_20__.followLink)('item')).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_7__.getFirstSucceededRemoteData)(), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_7__.getRemoteDataPayload)()), this.sectionService.isSectionReadOnly(this.submissionId, this.sectionData.id, this.submissionService.getSubmissionScope())])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_30__.take)(1)).subscribe(([sectionData, submissionObject, isSectionReadOnly]) => {
      if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_12__.isUndefined)(this.formModel)) {
        // this.sectionData.errorsToShow = [];
        this.submissionObject = submissionObject;
        this.isSectionReadonly = isSectionReadOnly;
        // Is the first loading so init form
        this.initForm(sectionData, this.sectionData.errorsToShow, this.sectionData.serverValidationErrors);
        this.sectionData.data = sectionData;
        this.subscriptions();
        this.isLoading = false;
        this.cdr.detectChanges();
      }
    });
  }
  /**
   * Unsubscribe from all subscriptions
   */
  onSectionDestroy() {
    this.subs.filter(subscription => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_12__.hasValue)(subscription)).forEach(subscription => subscription.unsubscribe());
  }
  /**
   * Get section status
   *
   * @return Observable<boolean>
   *     the section status
   */
  getSectionStatus() {
    const formStatus$ = this.formService.isValid(this.formId);
    const serverValidationStatus$ = this.sectionService.getSectionServerErrors(this.submissionId, this.sectionData.id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_26__.map)(validationErrors => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_12__.isEmpty)(validationErrors)));
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_29__.combineLatest)([formStatus$, serverValidationStatus$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_26__.map)(([formValidation, serverSideValidation]) => formValidation && serverSideValidation));
  }
  /**
   * Check if the section data has been enriched by the server
   *
   * @param sectionData
   *    the section data retrieved from the server
   */
  hasMetadataEnrichment(sectionData) {
    const sectionDataToCheck = {};
    Object.keys(sectionData).forEach(key => {
      // todo: removing Relationships works due to a bug -- dspace.entity.type is included in sectionData, which is what triggers the update;
      //       if we use this.sectionMetadata.includes(key), this field is filtered out and removed Relationships won't disappear from the form.
      if (this.inCurrentSubmissionScope(key)) {
        sectionDataToCheck[key] = sectionData[key];
      }
    });
    const diffResult = [];
    // compare current form data state with section data retrieved from store
    const diffObj = (0,_shared_object_util__WEBPACK_IMPORTED_MODULE_19__.difference)(sectionDataToCheck, this.formData);
    // iterate over differences to check whether they are actually different
    Object.keys(diffObj).forEach(key => {
      diffObj[key].forEach(value => {
        // the findIndex extra check excludes values already present in the form but in different positions
        if (value.hasOwnProperty('value') && lodash_findIndex__WEBPACK_IMPORTED_MODULE_0___default()(this.formData[key], {
          value: value.value
        }) < 0) {
          diffResult.push(value);
        }
      });
    });
    return (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_12__.isNotEmpty)(diffResult);
  }
  /**
   * Whether a specific field is editable in the current scope. Unscoped fields always return true.
   * @private
   */
  inCurrentSubmissionScope(field) {
    const scope = this.formConfig?.rows.find(row => {
      if (row.fields?.[0]?.selectableMetadata) {
        return row.fields?.[0]?.selectableMetadata?.[0]?.metadata === field;
      } else if (row.fields?.[0]?.selectableRelationship) {
        return row.fields?.[0]?.selectableRelationship.relationshipType === field.replace(/^relationship\./g, '');
      } else {
        return false;
      }
    })?.fields?.[0]?.scope;
    switch (scope) {
      case _core_submission_submission_scope_type__WEBPACK_IMPORTED_MODULE_11__.SubmissionScopeType.WorkspaceItem.valueOf():
        {
          return this.submissionObject.type === _core_submission_models_workspaceitem_model__WEBPACK_IMPORTED_MODULE_9__.WorkspaceItem.type.value;
        }
      case _core_submission_submission_scope_type__WEBPACK_IMPORTED_MODULE_11__.SubmissionScopeType.WorkflowItem.valueOf():
        {
          return this.submissionObject.type === _core_submission_models_workflowitem_model__WEBPACK_IMPORTED_MODULE_8__.WorkflowItem.type.value;
        }
      default:
        {
          return true;
        }
    }
  }
  /**
   * Initialize form model
   *
   * @param sectionData
   *    the section data retrieved from the server
   */
  initForm(sectionData, errorsToShow, serverValidationErrors) {
    try {
      this.formModel = this.formBuilderService.modelFromConfiguration(this.submissionId, this.formConfig, this.collectionId, sectionData, this.submissionService.getSubmissionScope(), this.isSectionReadonly);
      const sectionMetadata = this.sectionService.computeSectionConfiguredMetadata(this.formConfig);
      this.sectionService.updateSectionData(this.submissionId, this.sectionData.id, sectionData, errorsToShow, serverValidationErrors, sectionMetadata);
    } catch (e) {
      const msg = this.translate.instant('error.submission.sections.init-form-error') + e.toString();
      const sectionError = {
        message: msg,
        path: '/sections/' + this.sectionData.id
      };
      if (e instanceof Error) {
        console.error(e.stack);
      }
      this.sectionService.setSectionError(this.submissionId, this.sectionData.id, sectionError);
    }
  }
  /**
   * Update form model
   *
   * @param sectionState
   *    the section state retrieved from the server
   */
  updateForm(sectionState) {
    const sectionData = sectionState.data;
    const errors = sectionState.errorsToShow;
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_12__.isNotEmpty)(sectionData) && !lodash_isEqual__WEBPACK_IMPORTED_MODULE_1___default()(sectionData, this.sectionData.data)) {
      this.sectionData.data = sectionData;
      if (this.hasMetadataEnrichment(sectionData)) {
        this.isUpdating = true;
        this.formModel = null;
        this.cdr.detectChanges();
        this.initForm(sectionData, errors, sectionState.serverValidationErrors);
        this.checksForErrors(errors);
        this.isUpdating = false;
        this.cdr.detectChanges();
      } else if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_12__.isNotEmpty)(errors) || (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_12__.isNotEmpty)(this.sectionData.errorsToShow)) {
        this.checksForErrors(errors);
      }
    } else if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_12__.isNotEmpty)(errors) || (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_12__.isNotEmpty)(this.sectionData.errorsToShow)) {
      this.checksForErrors(errors);
    }
  }
  /**
   * Check if there are form validation error retrieved from server
   *
   * @param errors
   *    the section errors retrieved from the server
   */
  checksForErrors(errors) {
    this.formService.isFormInitialized(this.formId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_31__.find)(status => status === true && !this.isUpdating)).subscribe(() => {
      this.sectionService.checkSectionErrors(this.submissionId, this.sectionData.id, this.formId, errors, this.sectionData.errorsToShow);
      this.sectionData.errorsToShow = errors;
      this.cdr.detectChanges();
    });
  }
  /**
   * Initialize all subscriptions
   */
  subscriptions() {
    this.subs.push(
    /**
     * Subscribe to form's data
     */
    this.formService.getFormData(this.formId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_32__.distinctUntilChanged)()).subscribe(formData => {
      this.formData = formData;
    }),
    /**
     * Subscribe to section state
     */
    this.sectionService.getSectionState(this.submissionId, this.sectionData.id, this.sectionData.sectionType).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_33__.filter)(sectionState => {
      return (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_12__.isNotEmpty)(sectionState) && ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_12__.isNotEmpty)(sectionState.data) || (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_12__.isNotEmpty)(sectionState.errorsToShow));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_32__.distinctUntilChanged)()).subscribe(sectionState => {
      this.fieldsOnTheirWayToBeRemoved = new Map();
      this.sectionMetadata = sectionState.metadata;
      this.updateForm(sectionState);
    }));
  }
  /**
   * Method called when a form dfChange event is fired.
   * Dispatch form operations based on changes.
   *
   * @param event
   *    the [[DynamicFormControlEvent]] emitted
   */
  onChange(event) {
    this.formOperationsService.dispatchOperationsFromEvent(this.pathCombiner, event, this.previousValue, this.hasStoredValue(this.formBuilderService.getId(event.model), this.formOperationsService.getArrayIndexFromEvent(event)));
    const metadata = this.formOperationsService.getFieldPathSegmentedFromChangeEvent(event);
    const value = this.formOperationsService.getFieldValueFromChangeEvent(event);
    if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.submission.autosave.metadata.indexOf(metadata) !== -1 && (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_12__.isNotEmpty)(value) || this.hasRelatedCustomError(metadata)) {
      this.submissionService.dispatchSave(this.submissionId);
    }
  }
  hasRelatedCustomError(medatata) {
    const index = lodash_findIndex__WEBPACK_IMPORTED_MODULE_0___default()(this.sectionData.errorsToShow, {
      path: this.pathCombiner.getPath(medatata).path
    });
    if (index !== -1) {
      const error = this.sectionData.errorsToShow[index];
      const validator = error.message.replace('error.validation.', '');
      return !_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.form.validatorMap.hasOwnProperty(validator);
    } else {
      return false;
    }
  }
  /**
   * Method called when a form dfFocus event is fired.
   * Initialize [FormFieldPreviousValueObject] instance.
   *
   * @param event
   *    the [[DynamicFormControlEvent]] emitted
   */
  onFocus(event) {
    const value = this.formOperationsService.getFieldValueFromChangeEvent(event);
    const path = this.formBuilderService.getPath(event.model);
    if (this.formBuilderService.hasMappedGroupValue(event.model)) {
      this.previousValue.path = path;
      this.previousValue.value = this.formOperationsService.getQualdropValueMap(event);
    } else if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_12__.isNotEmpty)(value) && (typeof value === 'object' && (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_12__.isNotEmpty)(value.value) || typeof value === 'string')) {
      this.previousValue.path = path;
      this.previousValue.value = value;
    }
  }
  /**
   * Method called when a form remove event is fired.
   * Dispatch form operations based on changes.
   *
   * @param event
   *    the [[DynamicFormControlEvent]] emitted
   */
  onRemove(event) {
    const fieldId = this.formBuilderService.getId(event.model);
    const fieldIndex = this.formOperationsService.getArrayIndexFromEvent(event);
    // Keep track that this field will be removed
    if (this.fieldsOnTheirWayToBeRemoved.has(fieldId)) {
      const indexes = this.fieldsOnTheirWayToBeRemoved.get(fieldId);
      indexes.push(fieldIndex);
      this.fieldsOnTheirWayToBeRemoved.set(fieldId, indexes);
    } else {
      this.fieldsOnTheirWayToBeRemoved.set(fieldId, [fieldIndex]);
    }
    this.formOperationsService.dispatchOperationsFromEvent(this.pathCombiner, event, this.previousValue, this.hasStoredValue(fieldId, fieldIndex));
  }
  /**
   * Check if the specified form field has already a value stored
   *
   * @param fieldId
   *    the section data retrieved from the serverù
   * @param index
   *    the section data retrieved from the server
   */
  hasStoredValue(fieldId, index) {
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_12__.isNotEmpty)(this.sectionData.data)) {
      return this.sectionData.data.hasOwnProperty(fieldId) && (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_12__.isNotEmpty)(this.sectionData.data[fieldId][index]) && !this.isFieldToRemove(fieldId, index);
    } else {
      return false;
    }
  }
  /**
   * Check if the specified field is on the way to be removed
   *
   * @param fieldId
   *    the section data retrieved from the serverù
   * @param index
   *    the section data retrieved from the server
   */
  isFieldToRemove(fieldId, index) {
    return this.fieldsOnTheirWayToBeRemoved.has(fieldId) && this.fieldsOnTheirWayToBeRemoved.get(fieldId).includes(index);
  }
  /**
   * Handle the customEvent (ex. drag-drop move event).
   * The customEvent is stored inside event.$event
   * @param $event
   */
  onCustomEvent(event) {
    this.formOperationsService.dispatchOperationsFromEvent(this.pathCombiner, event, this.previousValue, null);
  }
  static {
    this.ɵfac = function SubmissionSectionFormComponent_Factory(t) {
      return new (t || SubmissionSectionFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_25__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](_shared_form_builder_form_builder_service__WEBPACK_IMPORTED_MODULE_13__.FormBuilderService), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](_section_form_operations_service__WEBPACK_IMPORTED_MODULE_24__.SectionFormOperationsService), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](_shared_form_form_service__WEBPACK_IMPORTED_MODULE_16__.FormService), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](_core_config_submission_forms_config_data_service__WEBPACK_IMPORTED_MODULE_4__.SubmissionFormsConfigDataService), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](_shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_18__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](_sections_service__WEBPACK_IMPORTED_MODULE_23__.SectionsService), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](_submission_service__WEBPACK_IMPORTED_MODULE_21__.SubmissionService), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_34__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](_core_submission_submission_object_data_service__WEBPACK_IMPORTED_MODULE_10__.SubmissionObjectDataService), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](_core_cache_object_cache_service__WEBPACK_IMPORTED_MODULE_3__.ObjectCacheService), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](_core_data_request_service__WEBPACK_IMPORTED_MODULE_5__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"]('collectionIdProvider'), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"]('sectionDataProvider'), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"]('submissionIdProvider'));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdefineComponent"]({
      type: SubmissionSectionFormComponent,
      selectors: [["ds-submission-section-form"]],
      viewQuery: function SubmissionSectionFormComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵloadQuery"]()) && (ctx.formRef = _t.first);
        }
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 2,
      consts: [["formRef", "formComponent"], ["message", "Loading...", 4, "ngIf"], [3, "formId", "formModel", "displaySubmit", "displayCancel", "dfChange", "dfFocus", "remove", "ngbEvent", "removeArrayItem", 4, "ngIf"], ["message", "Loading..."], [3, "dfChange", "dfFocus", "remove", "ngbEvent", "removeArrayItem", "formId", "formModel", "displaySubmit", "displayCancel"]],
      template: function SubmissionSectionFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](0, SubmissionSectionFormComponent_ds_loading_0_Template, 1, 0, "ds-loading", 1)(1, SubmissionSectionFormComponent_ds_form_1_Template, 2, 4, "ds-form", 2);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", !ctx.isLoading && ctx.formModel);
        }
      },
      dependencies: [_shared_form_form_component__WEBPACK_IMPORTED_MODULE_15__.FormComponent, _shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_17__.ThemedLoadingComponent, _angular_common__WEBPACK_IMPORTED_MODULE_35__.NgIf],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlY3Rpb24tZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQSIsImZpbGUiOiJzZWN0aW9uLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqLyJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc3VibWlzc2lvbi9zZWN0aW9ucy9mb3JtL3NlY3Rpb24tZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBLGdrQkFBZ2tCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi8iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 37332:
/*!**********************************************************************************!*\
  !*** ./src/app/submission/sections/identifiers/section-identifiers.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SubmissionSectionIdentifiersComponent: () => (/* binding */ SubmissionSectionIdentifiersComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 18718);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 17796);
/* harmony import */ var _shared_alert_alert_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/alert/alert-type */ 47978);
/* harmony import */ var _shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/utils/var.directive */ 18226);
/* harmony import */ var _submission_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../submission.service */ 61010);
/* harmony import */ var _models_section_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/section.model */ 70507);
/* harmony import */ var _sections_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sections.service */ 72147);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 90310);












function SubmissionSectionIdentifiersComponent_ng_container_0_ng_container_1_ng_container_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const identifier_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 2, "submission.sections.identifiers." + identifier_r1.identifierType + "_label"), " ", identifier_r1.value, "");
  }
}
function SubmissionSectionIdentifiersComponent_ng_container_0_ng_container_1_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SubmissionSectionIdentifiersComponent_ng_container_0_ng_container_1_ng_container_6_ng_container_1_Template, 4, 4, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const identifier_r1 = ctx.$implicit;
    const identifierData_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).ngVar;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", identifierData_r2.displayTypes.includes(identifier_r1.identifierType) && identifier_r1.value);
  }
}
function SubmissionSectionIdentifiersComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div")(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, SubmissionSectionIdentifiersComponent_ng_container_0_ng_container_1_ng_container_6_Template, 2, 1, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const identifierData_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().ngVar;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 2, "submission.sections.identifiers.info"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", identifierData_r2.identifiers);
  }
}
function SubmissionSectionIdentifiersComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SubmissionSectionIdentifiersComponent_ng_container_0_ng_container_1_Template, 7, 4, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const identifierData_r2 = ctx.ngVar;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", identifierData_r2 && identifierData_r2.identifiers);
  }
}
/**
 * This simple component displays DOI, handle and other identifiers that are already minted for the item in
 * a workflow / submission section.
 * ShowMintIdentifierStep will attempt to reserve an identifier before injecting result data for this component.
 *
 * @author Kim Shepherd
 */
class SubmissionSectionIdentifiersComponent extends _models_section_model__WEBPACK_IMPORTED_MODULE_3__.SectionModelComponent {
  /**
   * Initialize instance variables.
   *
   * @param {TranslateService} translate
   * @param {SectionsService} sectionService
   * @param {SubmissionService} submissionService
   * @param {string} injectedCollectionId
   * @param {SectionDataObject} injectedSectionData
   * @param {string} injectedSubmissionId
   */
  constructor(translate, sectionService, submissionService, injectedCollectionId, injectedSectionData, injectedSubmissionId) {
    super(injectedCollectionId, injectedSectionData, injectedSubmissionId);
    this.translate = translate;
    this.sectionService = sectionService;
    this.submissionService = submissionService;
    this.injectedCollectionId = injectedCollectionId;
    this.injectedSectionData = injectedSectionData;
    this.injectedSubmissionId = injectedSubmissionId;
    /**
     * The Alert categories.
     * @type {AlertType}
     */
    this.AlertTypeEnum = _shared_alert_alert_type__WEBPACK_IMPORTED_MODULE_0__.AlertType;
    /**
     * Variable to track if the section is loading.
     * @type {boolean}
     */
    this.isLoading = true;
    /**
     * Observable identifierData subject
     * @type {Observable<WorkspaceitemSectionIdentifiersObject>}
     */
    this.identifierData$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Observable();
    /**
     * Array to track all subscriptions and unsubscribe them onDestroy
     * @type {Array}
     */
    this.subs = [];
  }
  ngOnInit() {
    super.ngOnInit();
  }
  /**
   * Initialize all instance variables and retrieve configuration.
   */
  onSectionInit() {
    this.isLoading = false;
    this.identifierData$ = this.getIdentifierData();
  }
  /**
   * Check if identifier section has read-only visibility
   */
  isReadOnly() {
    return true;
  }
  /**
   * Unsubscribe from all subscriptions, if needed.
   */
  onSectionDestroy() {
    return;
  }
  /**
   * Get section status. Because this simple component never requires human interaction, this is basically
   * always going to be the opposite of "is this section still loading". This is not the place for API response
   * error checking but determining whether the step can 'proceed'.
   *
   * @return Observable<boolean>
   *     the section status
   */
  getSectionStatus() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(!this.isLoading);
  }
  /**
   * Get identifier data (from the REST service) as a simple object with doi, handle, otherIdentifiers variables
   * and as an observable so it can update in real-time.
   */
  getIdentifierData() {
    return this.sectionService.getSectionData(this.submissionId, this.sectionData.id, this.sectionData.sectionType);
  }
  static {
    this.ɵfac = function SubmissionSectionIdentifiersComponent_Factory(t) {
      return new (t || SubmissionSectionIdentifiersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_sections_service__WEBPACK_IMPORTED_MODULE_4__.SectionsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_submission_service__WEBPACK_IMPORTED_MODULE_2__.SubmissionService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"]('collectionIdProvider'), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"]('sectionDataProvider'), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"]('submissionIdProvider'));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: SubmissionSectionIdentifiersComponent,
      selectors: [["ds-submission-section-identifiers"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 3,
      consts: [[4, "ngVar"], [4, "ngIf"], [4, "ngFor", "ngForOf"]],
      template: function SubmissionSectionIdentifiersComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, SubmissionSectionIdentifiersComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "async");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngVar", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 1, ctx.getIdentifierData()));
        }
      },
      dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe, _shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_1__.VarDirective],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 4520:
/*!**************************************************************************!*\
  !*** ./src/app/submission/sections/license/section-license.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SubmissionSectionLicenseComponent: () => (/* binding */ SubmissionSectionLicenseComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 85687);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 74671);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 47386);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 62997);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 78374);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 64785);
/* harmony import */ var _core_data_collection_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/data/collection-data.service */ 6983);
/* harmony import */ var _core_json_patch_builder_json_patch_operation_path_combiner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/json-patch/builder/json-patch-operation-path-combiner */ 92409);
/* harmony import */ var _core_json_patch_builder_json_patch_operations_builder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/json-patch/builder/json-patch-operations-builder */ 17184);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/empty.util */ 82777);
/* harmony import */ var _shared_form_builder_form_builder_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/form/builder/form-builder.service */ 1216);
/* harmony import */ var _shared_form_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/form/form.component */ 99386);
/* harmony import */ var _shared_form_form_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/form/form.service */ 15390);
/* harmony import */ var _shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/utils/follow-link-config.model */ 67600);
/* harmony import */ var _submission_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../submission.service */ 61010);
/* harmony import */ var _form_section_form_operations_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../form/section-form-operations.service */ 71343);
/* harmony import */ var _models_section_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../models/section.model */ 70507);
/* harmony import */ var _sections_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../sections.service */ 72147);
/* harmony import */ var _section_license_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./section-license.model */ 37574);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ngx-translate/core */ 96439);


























const _c0 = ["formRef"];
function SubmissionSectionLicenseComponent_ds_form_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ds-form", 3, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("dfChange", function SubmissionSectionLicenseComponent_ds_form_4_Template_ds_form_dfChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.onChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("formId", ctx_r1.formId)("formModel", ctx_r1.formModel)("formLayout", ctx_r1.formLayout)("displaySubmit", ctx_r1.displaySubmit)("displayCancel", false);
  }
}
/**
 * This component represents a section that contains the submission license form.
 */
class SubmissionSectionLicenseComponent extends _models_section_model__WEBPACK_IMPORTED_MODULE_10__.SectionModelComponent {
  /**
   * Initialize instance variables
   *
   * @param {ChangeDetectorRef} changeDetectorRef
   * @param {CollectionDataService} collectionDataService
   * @param {FormBuilderService} formBuilderService
   * @param {SectionFormOperationsService} formOperationsService
   * @param {FormService} formService
   * @param {JsonPatchOperationsBuilder} operationsBuilder
   * @param {SectionsService} sectionService
   * @param {SubmissionService} submissionService
   * @param {TranslateService} translateService
   * @param {string} injectedCollectionId
   * @param {SectionDataObject} injectedSectionData
   * @param {string} injectedSubmissionId
   */
  constructor(changeDetectorRef, collectionDataService, formBuilderService, formOperationsService, formService, operationsBuilder, sectionService, submissionService, translateService, injectedCollectionId, injectedSectionData, injectedSubmissionId) {
    super(injectedCollectionId, injectedSectionData, injectedSubmissionId);
    this.changeDetectorRef = changeDetectorRef;
    this.collectionDataService = collectionDataService;
    this.formBuilderService = formBuilderService;
    this.formOperationsService = formOperationsService;
    this.formService = formService;
    this.operationsBuilder = operationsBuilder;
    this.sectionService = sectionService;
    this.submissionService = submissionService;
    this.translateService = translateService;
    this.injectedCollectionId = injectedCollectionId;
    this.injectedSectionData = injectedSectionData;
    this.injectedSubmissionId = injectedSubmissionId;
    /**
     * The [[DynamicFormLayout]] object
     * @type {DynamicFormLayout}
     */
    this.formLayout = _section_license_model__WEBPACK_IMPORTED_MODULE_12__.SECTION_LICENSE_FORM_LAYOUT;
    /**
     * A boolean representing if to show form submit and cancel buttons
     * @type {boolean}
     */
    this.displaySubmit = false;
    /**
     * Array to track all subscriptions and unsubscribe them onDestroy
     * @type {Array}
     */
    this.subs = [];
  }
  /**
   * Initialize all instance variables and retrieve submission license
   */
  onSectionInit() {
    this.pathCombiner = new _core_json_patch_builder_json_patch_operation_path_combiner__WEBPACK_IMPORTED_MODULE_1__.JsonPatchOperationPathCombiner('sections', this.sectionData.id);
    this.formId = this.formService.getUniqueId(this.sectionData.id);
    this.formModel = this.formBuilderService.fromJSON(_section_license_model__WEBPACK_IMPORTED_MODULE_12__.SECTION_LICENSE_FORM_MODEL);
    const model = this.formBuilderService.findById('granted', this.formModel);
    // Translate checkbox label
    if (model.label) {
      model.label = this.translateService.instant(model.label);
    }
    // Retrieve license accepted status
    model.value = this.sectionData.data.granted;
    this.licenseText$ = this.collectionDataService.findById(this.collectionId, true, true, (0,_shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_7__.followLink)('license')).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.filter)(collectionData => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_3__.isNotUndefined)(collectionData.payload)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.mergeMap)(collectionData => collectionData.payload.license), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.find)(licenseData => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_3__.isNotUndefined)(licenseData.payload)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.map)(licenseData => licenseData.payload.text), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.startWith)(''));
    this.subs.push(
    // Disable checkbox whether it's in workflow or item scope
    this.sectionService.isSectionReadOnly(this.submissionId, this.sectionData.id, this.submissionService.getSubmissionScope()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.filter)(isReadOnly => isReadOnly)).subscribe(() => {
      model.disabled = true;
    }), this.sectionService.getSectionErrors(this.submissionId, this.sectionData.id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.filter)(errors => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_3__.isNotEmpty)(errors)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.distinctUntilChanged)()).subscribe(errors => {
      // parse errors
      const newErrors = errors.map(error => {
        // When the error path is only on the section,
        // replace it with the path to the form field to display error also on the form
        if (error.path === '/sections/license') {
          // check whether license is not accepted
          if (!model.checked) {
            return Object.assign({}, error, {
              path: '/sections/license/granted'
            });
          } else {
            return null;
          }
        } else {
          return error;
        }
      }).filter(error => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_3__.isNotNull)(error));
      if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_3__.isNotEmpty)(newErrors)) {
        this.sectionService.checkSectionErrors(this.submissionId, this.sectionData.id, this.formId, newErrors);
        this.sectionData.errors = errors;
      } else {
        // Remove any section's errors
        this.sectionService.dispatchRemoveSectionErrors(this.submissionId, this.sectionData.id);
      }
    }));
  }
  ngAfterViewChecked() {
    this.changeDetectorRef.detectChanges();
  }
  /**
   * Get section status
   *
   * @return Observable<boolean>
   *     the section status
   */
  getSectionStatus() {
    const model = this.formBuilderService.findById('granted', this.formModel);
    return model.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.map)(value => value === true), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.startWith)(model.value));
  }
  /**
   * Method called when a form dfChange event is fired.
   * Dispatch form operations based on changes.
   */
  onChange(event) {
    const path = this.formOperationsService.getFieldPathSegmentedFromChangeEvent(event);
    const value = this.formOperationsService.getFieldValueFromChangeEvent(event);
    if (value) {
      this.operationsBuilder.add(this.pathCombiner.getPath(path), value.value.toString(), false, true);
      // Remove any section's errors
      this.sectionService.dispatchRemoveSectionErrors(this.submissionId, this.sectionData.id);
    } else {
      this.operationsBuilder.remove(this.pathCombiner.getPath(path));
    }
    this.submissionService.dispatchSaveSection(this.submissionId, this.sectionData.id);
  }
  /**
   * Unsubscribe from all subscriptions
   */
  onSectionDestroy() {
    this.subs.filter(subscription => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_3__.hasValue)(subscription)).forEach(subscription => subscription.unsubscribe());
  }
  static {
    this.ɵfac = function SubmissionSectionLicenseComponent_Factory(t) {
      return new (t || SubmissionSectionLicenseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_13__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_core_data_collection_data_service__WEBPACK_IMPORTED_MODULE_0__.CollectionDataService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_shared_form_builder_form_builder_service__WEBPACK_IMPORTED_MODULE_4__.FormBuilderService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_form_section_form_operations_service__WEBPACK_IMPORTED_MODULE_9__.SectionFormOperationsService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_shared_form_form_service__WEBPACK_IMPORTED_MODULE_6__.FormService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_core_json_patch_builder_json_patch_operations_builder__WEBPACK_IMPORTED_MODULE_2__.JsonPatchOperationsBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_sections_service__WEBPACK_IMPORTED_MODULE_11__.SectionsService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_submission_service__WEBPACK_IMPORTED_MODULE_8__.SubmissionService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"]('collectionIdProvider'), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"]('sectionDataProvider'), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"]('submissionIdProvider'));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
      type: SubmissionSectionLicenseComponent,
      selectors: [["ds-submission-section-license"]],
      viewQuery: function SubmissionSectionLicenseComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.formRef = _t.first);
        }
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵProvidersFeature"]([]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵStandaloneFeature"]],
      decls: 5,
      vars: 4,
      consts: [["formRef", "formComponent"], [1, "mb-5", "preserve-line-breaks", 3, "innerHTML"], [3, "formId", "formModel", "formLayout", "displaySubmit", "displayCancel", "dfChange", 4, "ngIf"], [3, "dfChange", "formId", "formModel", "formLayout", "displaySubmit", "displayCancel"]],
      template: function SubmissionSectionLicenseComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "span", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](1, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "br")(3, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](4, SubmissionSectionLicenseComponent_ds_form_4_Template, 2, 5, "ds-form", 2);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](1, 2, ctx.licenseText$), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsanitizeHtml"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.formModel);
        }
      },
      dependencies: [_shared_form_form_component__WEBPACK_IMPORTED_MODULE_5__.FormComponent, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_22__.AsyncPipe],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlY3Rpb24tbGljZW5zZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQSIsImZpbGUiOiJzZWN0aW9uLWxpY2Vuc2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqLyJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc3VibWlzc2lvbi9zZWN0aW9ucy9saWNlbnNlL3NlY3Rpb24tbGljZW5zZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBLHdrQkFBd2tCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi8iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 37574:
/*!**********************************************************************!*\
  !*** ./src/app/submission/sections/license/section-license.model.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SECTION_LICENSE_FORM_LAYOUT: () => (/* binding */ SECTION_LICENSE_FORM_LAYOUT),
/* harmony export */   SECTION_LICENSE_FORM_MODEL: () => (/* binding */ SECTION_LICENSE_FORM_MODEL)
/* harmony export */ });
const SECTION_LICENSE_FORM_LAYOUT = {
  granted: {
    element: {
      container: 'custom-control custom-checkbox pl-1',
      control: 'custom-control-input',
      label: 'custom-control-label pt-1'
    }
  }
};
const SECTION_LICENSE_FORM_MODEL = [{
  id: 'granted',
  label: 'submission.sections.license.granted-label',
  required: true,
  value: false,
  validators: {
    required: null
  },
  errorMessages: {
    required: 'submission.sections.license.required',
    notgranted: 'submission.sections.license.notgranted'
  },
  type: 'CHECKBOX'
}];

/***/ }),

/***/ 70507:
/*!*************************************************************!*\
  !*** ./src/app/submission/sections/models/section.model.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SectionModelComponent: () => (/* binding */ SectionModelComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 85687);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 62997);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/empty.util */ 82777);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 90310);



/**
 * An abstract model class for a submission edit form section.
 */
class SectionModelComponent {
  /**
   * Initialize instance variables
   *
   * @param {string} injectedCollectionId
   * @param {SectionDataObject} injectedSectionData
   * @param {string} injectedSubmissionId
   */
  constructor(injectedCollectionId, injectedSectionData, injectedSubmissionId) {
    this.injectedCollectionId = injectedCollectionId;
    this.injectedSectionData = injectedSectionData;
    this.injectedSubmissionId = injectedSubmissionId;
    this.collectionId = injectedCollectionId;
    this.sectionData = injectedSectionData;
    this.submissionId = injectedSubmissionId;
  }
  /**
   * Call abstract methods on component init
   */
  ngOnInit() {
    this.onSectionInit();
    this.updateSectionStatus();
  }
  /**
   * Subscribe to section status
   */
  updateSectionStatus() {
    this.sectionStatusSub = this.getSectionStatus().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(sectionStatus => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_0__.isNotUndefined)(sectionStatus)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.startWith)(true)).subscribe(sectionStatus => {
      this.sectionService.setSectionStatus(this.submissionId, this.sectionData.id, sectionStatus);
    });
  }
  /**
   * Unsubscribe from all subscriptions and Call abstract methods on component destroy
   */
  ngOnDestroy() {
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_0__.hasValue)(this.sectionStatusSub)) {
      this.sectionStatusSub.unsubscribe();
    }
    this.onSectionDestroy();
  }
  static {
    this.ɵfac = function SectionModelComponent_Factory(t) {
      return new (t || SectionModelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"]('collectionIdProvider'), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"]('sectionDataProvider'), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"]('submissionIdProvider'));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: SectionModelComponent,
      selectors: [["ds-section-model"]],
      decls: 0,
      vars: 0,
      template: function SectionModelComponent_Template(rf, ctx) {},
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 69184:
/*!********************************************************************************************!*\
  !*** ./src/app/submission/sections/section-coar-notify/coar-notify-config-data.service.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ }),

/***/ 54778:
/*!******************************************************************************************!*\
  !*** ./src/app/submission/sections/section-coar-notify/section-coar-notify.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SubmissionSectionCoarNotifyComponent: () => (/* binding */ SubmissionSectionCoarNotifyComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 49966);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-infinite-scroll */ 21001);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 21252);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 85687);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 78374);
/* harmony import */ var _admin_admin_ldn_services_ldn_services_data_ldn_services_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../admin/admin-ldn-services/ldn-services-data/ldn-services-data.service */ 68630);
/* harmony import */ var _core_json_patch_builder_json_patch_operation_path_combiner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/json-patch/builder/json-patch-operation-path-combiner */ 92409);
/* harmony import */ var _core_json_patch_builder_json_patch_operations_builder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/json-patch/builder/json-patch-operations-builder */ 17184);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/shared/operators */ 55757);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/empty.util */ 82777);
/* harmony import */ var _models_section_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/section.model */ 70507);
/* harmony import */ var _sections_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sections.service */ 72147);
/* harmony import */ var _coar_notify_config_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./coar-notify-config-data.service */ 69184);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 90310);






















const _c0 = a0 => ({
  "border-danger": a0
});
const _c1 = a0 => ({
  "bg-light": a0
});
const _c2 = a0 => ({
  pattern: a0
});
function SubmissionSectionCoarNotifyComponent_ng_container_1_div_1_div_1_div_4_div_1_button_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "submission.section.section-coar-notify.dropdown.no-data"), " ");
  }
}
function SubmissionSectionCoarNotifyComponent_ng_container_1_div_1_div_1_div_4_div_1_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SubmissionSectionCoarNotifyComponent_ng_container_1_div_1_div_1_div_4_div_1_button_12_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r3);
      const serviceIndex_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().index;
      const ldnPattern_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3).$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r5.onChange(ldnPattern_r5.pattern, serviceIndex_r4, null));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "submission.section.section-coar-notify.dropdown.select-none"), " ");
  }
}
function SubmissionSectionCoarNotifyComponent_ng_container_1_div_1_div_1_div_4_div_1_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SubmissionSectionCoarNotifyComponent_ng_container_1_div_1_div_1_div_4_div_1_button_14_Template_button_click_0_listener() {
      const serviceOption_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r7).$implicit;
      const serviceIndex_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().index;
      const ldnPattern_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3).$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r5.onChange(ldnPattern_r5.pattern, serviceIndex_r4, serviceOption_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const serviceOption_r8 = ctx.$implicit;
    const serviceIndex_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().index;
    const ldnPattern_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3).$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](3, _c1, (ctx_r5.ldnServiceByPattern[ldnPattern_r5.pattern].services[serviceIndex_r4] == null ? null : ctx_r5.ldnServiceByPattern[ldnPattern_r5.pattern].services[serviceIndex_r4].id) === serviceOption_r8.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", serviceOption_r8.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", serviceOption_r8.description, " ");
  }
}
function SubmissionSectionCoarNotifyComponent_ng_container_1_div_1_div_1_div_4_div_1_button_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SubmissionSectionCoarNotifyComponent_ng_container_1_div_1_div_1_div_4_div_1_button_16_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r9);
      const serviceIndex_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().index;
      const ldnPattern_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3).$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r5.removeService(ldnPattern_r5, serviceIndex_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const serviceIndex_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("mt-2", serviceIndex_r4 > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 4, "form.remove"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 6, "form.remove"));
  }
}
function SubmissionSectionCoarNotifyComponent_ng_container_1_div_1_div_1_div_4_div_1_small_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "small", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ldnPattern_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](2, 1, "submission.section.section-coar-notify.small.notification", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](4, _c2, ldnPattern_r5.pattern)), " ");
  }
}
function SubmissionSectionCoarNotifyComponent_ng_container_1_div_1_div_1_div_4_div_1_ng_container_18_small_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "small", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const error_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, error_r10.message), " ");
  }
}
function SubmissionSectionCoarNotifyComponent_ng_container_1_div_1_div_1_div_4_div_1_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, SubmissionSectionCoarNotifyComponent_ng_container_1_div_1_div_1_div_4_div_1_ng_container_18_small_1_Template, 3, 3, "small", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const serviceIndex_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().index;
    const ldnPattern_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3).$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, ctx_r5.getShownSectionErrors$(ldnPattern_r5.pattern, serviceIndex_r4)));
  }
}
function SubmissionSectionCoarNotifyComponent_ng_container_1_div_1_div_1_div_4_div_1_div_20_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const serviceIndex_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).index;
    const ldnPattern_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3).$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r5.ldnServiceByPattern[ldnPattern_r5.pattern].services[serviceIndex_r4].description, " ");
  }
}
function SubmissionSectionCoarNotifyComponent_ng_container_1_div_1_div_1_div_4_div_1_div_20_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "submission.section.section-coar-notify.selection.no-description"), " ");
  }
}
function SubmissionSectionCoarNotifyComponent_ng_container_1_div_1_div_1_div_4_div_1_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 31)(1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 34)(4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, SubmissionSectionCoarNotifyComponent_ng_container_1_div_1_div_1_div_4_div_1_div_20_div_7_Template, 2, 1, "div", 35)(8, SubmissionSectionCoarNotifyComponent_ng_container_1_div_1_div_1_div_4_div_1_div_20_ng_template_8_Template, 3, 3, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const noDesc_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](9);
    const serviceIndex_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().index;
    const ldnPattern_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3).$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](6, 3, "submission.section.section-coar-notify.selection.description"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r5.ldnServiceByPattern[ldnPattern_r5.pattern].services[serviceIndex_r4] == null ? null : ctx_r5.ldnServiceByPattern[ldnPattern_r5.pattern].services[serviceIndex_r4].description)("ngIfElse", noDesc_r11);
  }
}
function SubmissionSectionCoarNotifyComponent_ng_container_1_div_1_div_1_div_4_div_1_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 8)(1, "div", 37)(2, "div", 34)(3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 1, "submission.section.section-coar-notify.notification.error"), " ");
  }
}
function SubmissionSectionCoarNotifyComponent_ng_container_1_div_1_div_1_div_4_div_1_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SubmissionSectionCoarNotifyComponent_ng_container_1_div_1_div_1_div_4_div_1_div_24_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r12);
      const ldnPattern_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4).$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r5.addNewService(ldnPattern_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 1, "submission.sections.general.add-more"), " ");
  }
}
function SubmissionSectionCoarNotifyComponent_ng_container_1_div_1_div_1_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "div", 8)(2, "div", 9, 0)(4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SubmissionSectionCoarNotifyComponent_ng_container_1_div_1_div_1_div_4_div_1_Template_input_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
      const myDropdown_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](myDropdown_r2.open());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 13)(9, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, SubmissionSectionCoarNotifyComponent_ng_container_1_div_1_div_1_div_4_div_1_button_10_Template, 3, 3, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](11, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](12, SubmissionSectionCoarNotifyComponent_ng_container_1_div_1_div_1_div_4_div_1_button_12_Template, 3, 3, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](13, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](14, SubmissionSectionCoarNotifyComponent_ng_container_1_div_1_div_1_div_4_div_1_button_14_Template, 5, 5, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](15, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](16, SubmissionSectionCoarNotifyComponent_ng_container_1_div_1_div_1_div_4_div_1_button_16_Template, 5, 8, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](17, SubmissionSectionCoarNotifyComponent_ng_container_1_div_1_div_1_div_4_div_1_small_17_Template, 3, 6, "small", 19)(18, SubmissionSectionCoarNotifyComponent_ng_container_1_div_1_div_1_div_4_div_1_ng_container_18_Template, 3, 3, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](19, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](20, SubmissionSectionCoarNotifyComponent_ng_container_1_div_1_div_1_div_4_div_1_div_20_Template, 10, 5, "div", 20)(21, SubmissionSectionCoarNotifyComponent_ng_container_1_div_1_div_1_div_4_div_1_div_21_Template, 6, 3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](22, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](24, SubmissionSectionCoarNotifyComponent_ng_container_1_div_1_div_1_div_4_div_1_div_24_Template, 4, 3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_13_0;
    let tmp_19_0;
    let tmp_20_0;
    let tmp_24_0;
    let tmp_26_0;
    const serviceIndex_r4 = ctx.index;
    const ldnPattern_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3).$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("mt-2", serviceIndex_r4 > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("aria-label", ldnPattern_r5.pattern + ".dropdown");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("readonly", true)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](31, _c0, ((tmp_13_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](7, 19, ctx_r5.getShownSectionErrors$(ldnPattern_r5.pattern, serviceIndex_r4))) == null ? null : tmp_13_0.length) > 0))("value", ctx_r5.ldnServiceByPattern[ldnPattern_r5.pattern].services[serviceIndex_r4] == null ? null : ctx_r5.ldnServiceByPattern[ldnPattern_r5.pattern].services[serviceIndex_r4].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("aria-label", ldnPattern_r5.pattern + ".dropdownanchor");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("infiniteScrollDistance", 2)("infiniteScrollThrottle", 50)("scrollWindow", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ((tmp_19_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](11, 21, ctx_r5.filterServices(ldnPattern_r5.pattern))) == null ? null : tmp_19_0.length) === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ((tmp_20_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](13, 23, ctx_r5.filterServices(ldnPattern_r5.pattern))) == null ? null : tmp_20_0.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](15, 25, ctx_r5.filterServices(ldnPattern_r5.pattern)));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r5.ldnServiceByPattern[ldnPattern_r5.pattern].services.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r5.ldnServiceByPattern[ldnPattern_r5.pattern].services[serviceIndex_r4] && serviceIndex_r4 === ctx_r5.ldnServiceByPattern[ldnPattern_r5.pattern].services.length - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ((tmp_24_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](19, 27, ctx_r5.getShownSectionErrors$(ldnPattern_r5.pattern, serviceIndex_r4))) == null ? null : tmp_24_0.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r5.ldnServiceByPattern[ldnPattern_r5.pattern].services[serviceIndex_r4]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ((tmp_26_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](22, 29, ctx_r5.getShownSectionErrors$(ldnPattern_r5.pattern, serviceIndex_r4))) == null ? null : tmp_26_0.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ldnPattern_r5.multipleRequest && serviceIndex_r4 === ctx_r5.ldnServiceByPattern[ldnPattern_r5.pattern].services.length - 1);
  }
}
function SubmissionSectionCoarNotifyComponent_ng_container_1_div_1_div_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, SubmissionSectionCoarNotifyComponent_ng_container_1_div_1_div_1_div_4_div_1_Template, 25, 33, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ldnPattern_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r5.ldnServiceByPattern[ldnPattern_r5.pattern].services);
  }
}
function SubmissionSectionCoarNotifyComponent_ng_container_1_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, SubmissionSectionCoarNotifyComponent_ng_container_1_div_1_div_1_div_4_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ldnPattern_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 2, "submission.section.section-coar-notify.control." + ldnPattern_r5.pattern + ".label"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r5.ldnServiceByPattern[ldnPattern_r5.pattern] == null ? null : ctx_r5.ldnServiceByPattern[ldnPattern_r5.pattern].services.length);
  }
}
function SubmissionSectionCoarNotifyComponent_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, SubmissionSectionCoarNotifyComponent_ng_container_1_div_1_div_1_Template, 5, 4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ldnPattern_r5 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ((tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, ctx_r5.filterServices(ldnPattern_r5.pattern))) == null ? null : tmp_4_0.length) > 0);
  }
}
function SubmissionSectionCoarNotifyComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, SubmissionSectionCoarNotifyComponent_ng_container_1_div_1_Template, 3, 3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r5.patterns);
  }
}
function SubmissionSectionCoarNotifyComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 1, "submission.section.section-coar-notify.info.no-pattern"), " ");
  }
}
/**
 * This component represents a section that contains the submission section-coar-notify form.
 */
class SubmissionSectionCoarNotifyComponent extends _models_section_model__WEBPACK_IMPORTED_MODULE_5__.SectionModelComponent {
  constructor(ldnServicesService,
  // protected formOperationsService: SectionFormOperationsService,
  operationsBuilder, sectionService, coarNotifyConfigDataService, chd, injectedCollectionId, injectedSectionData, injectedSubmissionId) {
    super(injectedCollectionId, injectedSectionData, injectedSubmissionId);
    this.ldnServicesService = ldnServicesService;
    this.operationsBuilder = operationsBuilder;
    this.sectionService = sectionService;
    this.coarNotifyConfigDataService = coarNotifyConfigDataService;
    this.chd = chd;
    this.injectedCollectionId = injectedCollectionId;
    this.injectedSectionData = injectedSectionData;
    this.injectedSubmissionId = injectedSubmissionId;
    this.hasSectionData = false;
    /**
     * Contains an array of string patterns.
     */
    this.patterns = [];
    /**
     * An object that maps string keys to arrays of LdnService objects.
     * Used to store LdnService objects by pattern.
     */
    this.ldnServiceByPattern = {};
    /**
     * A map representing all services for each pattern
     * {
     *  'pattern': {
     *   'index': 'service.id'
     *   }
     * }
     *
     * @type {{ [key: string]: {[key: number]: number} }}
     * @memberof SubmissionSectionCoarNotifyComponent
     */
    this.previousServices = {};
    /**
     * A map representing all field on their way to be removed
     * @type {Map}
     */
    this.fieldsOnTheirWayToBeRemoved = new Map();
    /**
     * Array to track all subscriptions and unsubscribe them onDestroy
     * @type {Array}
     */
    this.subs = [];
    this.filteredServicesByPattern = {};
  }
  /**
   * Initialize all instance variables
   */
  onSectionInit() {
    this.setCoarNotifyConfig();
    this.getSectionServerErrorsAndSetErrorsToDisplay();
    this.pathCombiner = new _core_json_patch_builder_json_patch_operation_path_combiner__WEBPACK_IMPORTED_MODULE_1__.JsonPatchOperationPathCombiner('sections', this.sectionData.id);
  }
  /**
   * Method called when section is initialized
   * Retriev available NotifyConfigs
   */
  setCoarNotifyConfig() {
    this.subs.push(this.coarNotifyConfigDataService.findAll().pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_3__.getFirstCompletedRemoteData)()).subscribe(data => {
      if (data.hasSucceeded) {
        this.patterns = data.payload.page[0].patterns;
        this.initSelectedServicesByPattern();
      }
    }));
  }
  /**
   * Handles the change event of a select element.
   * @param pattern - The pattern of the select element.
   * @param index - The index of the select element.
   * @param selectedService - The selected LDN service.
   */
  onChange(pattern, index, selectedService) {
    // do nothing if the selected value is the same as the previous one
    if (this.ldnServiceByPattern[pattern].services[index]?.id === selectedService?.id) {
      return;
    }
    // initialize the previousServices object for the pattern if it does not exist
    if (!this.previousServices[pattern]) {
      this.previousServices[pattern] = {
        services: [],
        allowsMultipleRequests: this.patterns.find(ldnPattern => ldnPattern.pattern === pattern)?.multipleRequest
      };
    }
    // store the previous value
    this.previousServices[pattern].services[index] = this.ldnServiceByPattern[pattern].services[index];
    // set the new value
    this.ldnServiceByPattern[pattern].services[index] = selectedService;
    const hasPrevValueStored = (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_4__.hasValue)(this.previousServices[pattern].services[index]) && this.previousServices[pattern].services[index].id !== selectedService?.id;
    if (hasPrevValueStored) {
      // when there is a previous value stored and it is different from the new one
      this.operationsBuilder.flushOperation(this.pathCombiner.getPath([pattern, '-']));
      if (this.filteredServicesByPattern[pattern]?.includes(this.previousServices[pattern].services[index])) {
        this.operationsBuilder.remove(this.pathCombiner.getPath([pattern, index.toString()]));
      }
    }
    if (!hasPrevValueStored || selectedService?.id && hasPrevValueStored) {
      // add the path when there is no previous value stored
      this.operationsBuilder.add(this.pathCombiner.getPath([pattern, '-']), [selectedService.id], false, true);
    }
    // set the previous value to the new value
    this.previousServices[pattern].services[index] = this.ldnServiceByPattern[pattern].services[index];
    this.sectionService.dispatchRemoveSectionErrors(this.submissionId, this.sectionData.id);
    this.chd.detectChanges();
  }
  /**
   * Initializes the selected services by pattern.
   * Loops through each pattern and filters the services based on the pattern.
   * If the section data has a value for the pattern, it adds the service to the selected services by pattern.
   * If the section data does not have a value for the pattern, it adds a null service to the selected services by pattern,
   * so that the select element is initialized with a null value and to display the default select input.
   */
  initSelectedServicesByPattern() {
    this.patterns.forEach(ldnPattern => {
      if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_4__.hasValue)(this.sectionData.data[ldnPattern.pattern])) {
        this.subs.push(this.filterServices(ldnPattern.pattern).subscribe(services => {
          if (!this.ldnServiceByPattern[ldnPattern.pattern]) {
            this.ldnServiceByPattern[ldnPattern.pattern] = {
              services: [],
              allowsMultipleRequests: ldnPattern.multipleRequest
            };
          }
          this.ldnServiceByPattern[ldnPattern.pattern].services = services.filter(service => {
            const selection = this.sectionData.data[ldnPattern.pattern].find(s => s.id === service.id);
            this.addService(ldnPattern, selection);
            return this.sectionData.data[ldnPattern.pattern].includes(service.uuid);
          });
        }));
      } else {
        this.ldnServiceByPattern[ldnPattern.pattern] = {
          services: [],
          allowsMultipleRequests: ldnPattern.multipleRequest
        };
        this.addService(ldnPattern, null);
      }
    });
  }
  /**
   * Adds a new service to the selected services for the given pattern.
   * @param ldnPattern - The pattern to add the new service to.
   * @param newService - The new service to add.
   */
  addService(ldnPattern, newService) {
    // Your logic to add a new service to the selected services for the pattern
    // Example: Push the newService to the array corresponding to the pattern
    if (!this.ldnServiceByPattern[ldnPattern.pattern]) {
      this.ldnServiceByPattern[ldnPattern.pattern] = {
        services: [],
        allowsMultipleRequests: ldnPattern.multipleRequest
      };
    }
    this.ldnServiceByPattern[ldnPattern.pattern].services.push(newService);
  }
  /**
   * Removes the service at the specified index from the array corresponding to the pattern.
   * @param ldnPattern - The LDN pattern from which to remove the service
   * @param serviceIndex - the service index to remove
   */
  removeService(ldnPattern, serviceIndex) {
    if (this.ldnServiceByPattern[ldnPattern.pattern]) {
      // Remove the service at the specified index from the array
      this.ldnServiceByPattern[ldnPattern.pattern].services.splice(serviceIndex, 1);
      this.previousServices[ldnPattern.pattern]?.services.splice(serviceIndex, 1);
      this.operationsBuilder.flushOperation(this.pathCombiner.getPath([ldnPattern.pattern, '-']));
      this.sectionService.dispatchRemoveSectionErrors(this.submissionId, this.sectionData.id);
    }
    if (!this.ldnServiceByPattern[ldnPattern.pattern].services.length) {
      this.addNewService(ldnPattern);
    }
  }
  /**
   * Method called when dropdowns for the section are initialized
   * Retrieve services with corresponding patterns to the dropdowns.
   */
  filterServices(pattern) {
    return this.ldnServicesService.findByInboundPattern(pattern).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_3__.getFirstCompletedRemoteData)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.tap)(rd => {
      if (rd.hasFailed) {
        throw new Error(`Failed to retrieve services for pattern ${pattern}`);
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.filter)(rd => rd.hasSucceeded), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_3__.getRemoteDataPayload)(), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_3__.getPaginatedListPayload)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.tap)(res => {
      if (!this.filteredServicesByPattern[pattern]) {
        this.filteredServicesByPattern[pattern] = [];
      }
      if (this.filteredServicesByPattern[pattern].length === 0) {
        this.filteredServicesByPattern[pattern].push(...res);
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(res => res.filter(service => {
      if (!this.hasSectionData) {
        this.hasSectionData = this.hasInboundPattern(service, pattern);
      }
      return this.hasInboundPattern(service, pattern);
    })));
  }
  /**
   * Checks if the given service has the specified inbound pattern type.
   * @param service - The service to check.
   * @param patternType - The inbound pattern type to look for.
   * @returns True if the service has the specified inbound pattern type, false otherwise.
   */
  hasInboundPattern(service, patternType) {
    return service.notifyServiceInboundPatterns.some(pattern => {
      return pattern.pattern === patternType;
    });
  }
  /**
   * Retrieves server errors for the current section and sets them to display.
   * @returns An Observable that emits the validation errors for the current section.
   */
  getSectionServerErrorsAndSetErrorsToDisplay() {
    this.subs.push(this.sectionService.getSectionServerErrors(this.submissionId, this.sectionData.id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.filter)(validationErrors => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_4__.isNotEmpty)(validationErrors))).subscribe(validationErrors => {
      if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_4__.isNotEmpty)(validationErrors)) {
        validationErrors.forEach(error => {
          this.sectionService.setSectionError(this.submissionId, this.sectionData.id, error);
        });
      }
    }));
  }
  /**
   * Returns an observable of the errors for the current section that match the given pattern and index.
   * @param pattern - The pattern to match against the error paths.
   * @param index - The index to match against the error paths.
   * @returns An observable of the errors for the current section that match the given pattern and index.
   */
  getShownSectionErrors$(pattern, index) {
    return this.sectionService.getShownSectionErrors(this.submissionId, this.sectionData.id, this.sectionData.sectionType).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.filter)(validationErrors => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_4__.isNotEmpty)(validationErrors)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(validationErrors => {
      return validationErrors.filter(error => {
        const path = `${pattern}/${index}`;
        return error.path.includes(path);
      });
    }));
  }
  /**
   * @returns An observable that emits a boolean indicating whether the section has any server errors or not.
   */
  getSectionStatus() {
    return this.sectionService.getSectionServerErrors(this.submissionId, this.sectionData.id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(validationErrors => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_4__.isEmpty)(validationErrors)));
  }
  /**
   * Unsubscribe from all subscriptions
   */
  onSectionDestroy() {
    this.subs.filter(subscription => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_4__.hasValue)(subscription)).forEach(subscription => subscription.unsubscribe());
  }
  /**
   * Add new row to dropdown for multiple service selection
   * @param ldnPattern - the related LDN pattern where the service is added
   */
  addNewService(ldnPattern) {
    //idle new service for new selection
    this.ldnServiceByPattern[ldnPattern.pattern].services.push(null);
  }
  static {
    this.ɵfac = function SubmissionSectionCoarNotifyComponent_Factory(t) {
      return new (t || SubmissionSectionCoarNotifyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_admin_admin_ldn_services_ldn_services_data_ldn_services_data_service__WEBPACK_IMPORTED_MODULE_0__.LdnServicesService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_json_patch_builder_json_patch_operations_builder__WEBPACK_IMPORTED_MODULE_2__.JsonPatchOperationsBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_sections_service__WEBPACK_IMPORTED_MODULE_6__.SectionsService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_coar_notify_config_data_service__WEBPACK_IMPORTED_MODULE_7__.CoarNotifyConfigDataService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"]('collectionIdProvider'), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"]('sectionDataProvider'), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"]('submissionIdProvider'));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
      type: SubmissionSectionCoarNotifyComponent,
      selectors: [["ds-submission-section-coar-notify"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵProvidersFeature"]([_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbDropdown]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵStandaloneFeature"]],
      decls: 3,
      vars: 2,
      consts: [["myDropdown", "ngbDropdown"], ["noDesc", ""], [1, "container-fluid"], [4, "ngIf"], ["class", "col", 4, "ngFor", "ngForOf"], [1, "col"], [1, "row", "col-form-label"], [4, "ngFor", "ngForOf"], [1, "row"], ["ngbDropdown", "", 1, "flex-grow-1"], [1, "position-relative", "right-addon"], ["ngbDropdownToggle", "", "aria-hidden", "true", 1, "position-absolute", "scrollable-dropdown-toggle"], ["type", "text", 1, "form-control", "w-100", "scrollable-dropdown-input", 3, "click", "readonly", "ngClass", "value"], ["ngbDropdownMenu", "", "aria-haspopup", "true", "aria-expanded", "false", 1, "dropdown-menu", "scrollable-dropdown-menu", "w-100"], ["role", "listbox", "infiniteScroll", "", 1, "scrollable-menu", 3, "infiniteScrollDistance", "infiniteScrollThrottle", "scrollWindow"], ["class", "dropdown-item collection-item text-truncate w-100", 4, "ngIf"], ["class", "dropdown-item collection-item text-truncate w-100", 3, "click", 4, "ngIf"], ["class", "dropdown-item collection-item text-truncate w-100", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["type", "button", "class", "btn btn-secondary ml-2", "role", "button", 3, "mt-2", "title", "click", 4, "ngIf"], ["class", "row text-muted", 4, "ngIf"], ["class", "row mt-1", 4, "ngIf"], ["class", "row", 4, "ngIf"], ["class", "btn btn-link mt-2 pl-0", 3, "click", 4, "ngIf"], [1, "dropdown-item", "collection-item", "text-truncate", "w-100"], [1, "dropdown-item", "collection-item", "text-truncate", "w-100", 3, "click"], [1, "dropdown-item", "collection-item", "text-truncate", "w-100", 3, "click", "ngClass"], ["type", "button", "role", "button", 1, "btn", "btn-secondary", "ml-2", 3, "click", "title"], ["aria-hidden", "true", 1, "fas", "fa-trash"], [1, "row", "text-muted"], ["class", "row text-danger", 4, "ngFor", "ngForOf"], [1, "row", "text-danger"], [1, "row", "mt-1"], [1, "alert", "alert-info", "w-100", "d-flex", "align-items-center", "flex-row"], [1, "fa-solid", "fa-circle-info", "fa-xl", "ml-2"], [1, "ml-4"], [4, "ngIf", "ngIfElse"], [1, "text-muted"], [1, "alert", "alert-danger", "w-100", "d-flex", "align-items-center", "flex-row"], [1, "btn", "btn-link", "mt-2", "pl-0", 3, "click"], [1, "fas", "fa-plus"]],
      template: function SubmissionSectionCoarNotifyComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, SubmissionSectionCoarNotifyComponent_ng_container_1_Template, 2, 1, "ng-container", 3)(2, SubmissionSectionCoarNotifyComponent_ng_container_2_Template, 4, 3, "ng-container", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx.patterns == null ? null : ctx.patterns.length) > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.hasSectionData);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslatePipe, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbDropdownModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbDropdownMenu, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgClass, ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_16__.InfiniteScrollModule, ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_16__.InfiniteScrollDirective],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n.ds-form-input-addon[_ngcontent-%COMP%] {\n  border-top-right-radius: 0 !important;\n  border-bottom-right-radius: 0 !important;\n  border-right: 0 !important;\n}\n\n.ds-form-input-btn[_ngcontent-%COMP%] {\n  border: var(--bs-input-btn-border-width) solid var(--bs-input-border-color);\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  border-left: 0;\n}\n\n.ds-form-input-btn[_ngcontent-%COMP%]:focus {\n  box-shadow: none !important;\n}\n\nbutton.ds-form-add-more[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: none !important;\n}\n\n.ds-form-input-value[_ngcontent-%COMP%] {\n  border-top-left-radius: 0 !important;\n  border-bottom-left-radius: 0 !important;\n}\n\n\n\n.fa-spin[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n\n\n\n.left-addon[_ngcontent-%COMP%]   .far[_ngcontent-%COMP%], .left-addon[_ngcontent-%COMP%]   .fas[_ngcontent-%COMP%], .left-addon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  left: 0;\n}\n\n.right-addon[_ngcontent-%COMP%]   .far[_ngcontent-%COMP%], .right-addon[_ngcontent-%COMP%]   .fas[_ngcontent-%COMP%], .right-addon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  right: 0;\n}\n\n\n\n.left-addon[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding-left: calc(var(--bs-spacer) * 2.25);\n}\n\n.right-addon[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding-right: calc(var(--bs-spacer) * 2.25);\n}\n\n.scrollable-menu[_ngcontent-%COMP%] {\n  height: auto;\n  max-height: var(--ds-dropdown-menu-max-height);\n  overflow-x: hidden;\n}\n\n.collection-item[_ngcontent-%COMP%] {\n  border-bottom: var(--bs-dropdown-border-width) solid var(--bs-dropdown-border-color);\n}\n\n.scrollable-dropdown-loading[_ngcontent-%COMP%] {\n  background-color: var(--bs-primary);\n  color: white;\n  height: calc(var(--bs-spacer) * 2) !important;\n  line-height: calc(var(--bs-spacer) * 2);\n  position: sticky;\n  bottom: 0;\n}\n\n.scrollable-dropdown-menu[_ngcontent-%COMP%] {\n  left: 0 !important;\n  margin-bottom: var(--bs-spacer);\n  z-index: 1000;\n}\n\n.scrollable-dropdown-toggle[_ngcontent-%COMP%] {\n  padding: 0.7rem 0.7rem 0 0.7rem;\n}\n\n.scrollable-dropdown-input[readonly][_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n\n.toggle-icon[_ngcontent-%COMP%] {\n  padding: 0.7rem 0.7rem 0 0.7rem;\n}\n\n.ds-form-input-addon[_ngcontent-%COMP%] {\n  border-top-right-radius: 0 !important;\n  border-bottom-right-radius: 0 !important;\n  border-right: 0 !important;\n}\n\n.ds-form-input-btn[_ngcontent-%COMP%] {\n  border: var(--bs-input-btn-border-width) solid var(--bs-input-border-color);\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  border-left: 0;\n}\n\n.ds-form-input-btn[_ngcontent-%COMP%]:focus {\n  box-shadow: none !important;\n}\n\nbutton.ds-form-add-more[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: none !important;\n}\n\n.ds-form-input-value[_ngcontent-%COMP%] {\n  border-top-left-radius: 0 !important;\n  border-bottom-left-radius: 0 !important;\n}\n\n\n\n.fa-spin[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n\n\n\n.left-addon[_ngcontent-%COMP%]   .far[_ngcontent-%COMP%], .left-addon[_ngcontent-%COMP%]   .fas[_ngcontent-%COMP%], .left-addon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  left: 0;\n}\n\n.right-addon[_ngcontent-%COMP%]   .far[_ngcontent-%COMP%], .right-addon[_ngcontent-%COMP%]   .fas[_ngcontent-%COMP%], .right-addon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  right: 0;\n}\n\n\n\n.left-addon[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding-left: calc(var(--bs-spacer) * 2.25);\n}\n\n.right-addon[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding-right: calc(var(--bs-spacer) * 2.25);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlY3Rpb24tY29hci1ub3RpZnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQTtFQUNFLHFDQUFBO0VBQ0Esd0NBQUE7RUFDQSwwQkFBQTtBQUNGOztBQUNBO0VBQ0UsMkVBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0EsY0FBQTtBQUVGOztBQUFBO0VBQ0UsMkJBQUE7QUFHRjs7QUFEQTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtBQUlGOztBQUZBO0VBQ0Usb0NBQUE7RUFDQSx1Q0FBQTtBQUtGOztBQUhBLGtCQUFBO0FBQ0E7RUFDRSxvQkFBQTtBQU1GOztBQUpBLGtCQUFBO0FBQ0E7RUFDRSxPQUFBO0FBT0Y7O0FBTEE7RUFDRSxRQUFBO0FBUUY7O0FBTkEsaUJBQUE7QUFDQTtFQUNFLDJDQUFBO0FBU0Y7O0FBUEE7RUFDRSw0Q0FBQTtBQVVGOztBQVJBO0VBQ0UsWUFBQTtFQUNBLDhDQUFBO0VBQ0Esa0JBQUE7QUFXRjs7QUFUQTtFQUNFLG9GQUFBO0FBWUY7O0FBVkE7RUFDRSxtQ0FBQTtFQUNBLFlBQUE7RUFDQSw2Q0FBQTtFQUNBLHVDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0FBYUY7O0FBWEE7RUFDRSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsYUFBQTtBQWNGOztBQVpBO0VBQ0UsK0JBQUE7QUFlRjs7QUFiQTtFQUNFLHNCQUFBO0FBZ0JGOztBQWRBO0VBQ0UsK0JBQUE7QUFpQkY7O0FBZkE7RUFDRSxxQ0FBQTtFQUNBLHdDQUFBO0VBQ0EsMEJBQUE7QUFrQkY7O0FBaEJBO0VBQ0UsMkVBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0EsY0FBQTtBQW1CRjs7QUFqQkE7RUFDRSwyQkFBQTtBQW9CRjs7QUFsQkE7RUFDRSxhQUFBO0VBQ0EsMkJBQUE7QUFxQkY7O0FBbkJBO0VBQ0Usb0NBQUE7RUFDQSx1Q0FBQTtBQXNCRjs7QUFwQkEsa0JBQUE7QUFDQTtFQUNFLG9CQUFBO0FBdUJGOztBQXJCQSxrQkFBQTtBQUNBO0VBQ0UsT0FBQTtBQXdCRjs7QUF0QkE7RUFDRSxRQUFBO0FBeUJGOztBQXZCQSxpQkFBQTtBQUNBO0VBQ0UsMkNBQUE7QUEwQkY7O0FBeEJBO0VBQ0UsNENBQUE7QUEyQkYiLCJmaWxlIjoic2VjdGlvbi1jb2FyLW5vdGlmeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovXG4uZHMtZm9ybS1pbnB1dC1hZGRvbiB7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yaWdodDogMCAhaW1wb3J0YW50O1xufVxuLmRzLWZvcm0taW5wdXQtYnRuIHtcbiAgYm9yZGVyOiB2YXIoLS1icy1pbnB1dC1idG4tYm9yZGVyLXdpZHRoKSBzb2xpZCB2YXIoLS1icy1pbnB1dC1ib3JkZXItY29sb3IpO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xuICBib3JkZXItbGVmdDogMDtcbn1cbi5kcy1mb3JtLWlucHV0LWJ0bjpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cbmJ1dHRvbi5kcy1mb3JtLWFkZC1tb3JlOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuLmRzLWZvcm0taW5wdXQtdmFsdWUge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDAgIWltcG9ydGFudDtcbn1cbi8qIHN0eWxlIGZhLXNwaW4gKi9cbi5mYS1zcGluIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4vKiBhbGlnbiBmYS1zcGluICovXG4ubGVmdC1hZGRvbiAuZmFyLCAubGVmdC1hZGRvbiAuZmFzLCAubGVmdC1hZGRvbiBpIHtcbiAgbGVmdDogMDtcbn1cbi5yaWdodC1hZGRvbiAuZmFyLCAucmlnaHQtYWRkb24gLmZhcywgLnJpZ2h0LWFkZG9uIGkge1xuICByaWdodDogMDtcbn1cbi8qIGFkZCBwYWRkaW5nICAqL1xuLmxlZnQtYWRkb24gaW5wdXQge1xuICBwYWRkaW5nLWxlZnQ6IGNhbGModmFyKC0tYnMtc3BhY2VyKSAqIDIuMjUpO1xufVxuLnJpZ2h0LWFkZG9uIGlucHV0IHtcbiAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1icy1zcGFjZXIpICogMi4yNSk7XG59XG4uc2Nyb2xsYWJsZS1tZW51IHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXgtaGVpZ2h0OiB2YXIoLS1kcy1kcm9wZG93bi1tZW51LW1heC1oZWlnaHQpO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG4uY29sbGVjdGlvbi1pdGVtIHtcbiAgYm9yZGVyLWJvdHRvbTogdmFyKC0tYnMtZHJvcGRvd24tYm9yZGVyLXdpZHRoKSBzb2xpZCB2YXIoLS1icy1kcm9wZG93bi1ib3JkZXItY29sb3IpO1xufVxuLnNjcm9sbGFibGUtZHJvcGRvd24tbG9hZGluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJzLXByaW1hcnkpO1xuICBjb2xvcjogd2hpdGU7XG4gIGhlaWdodDogY2FsYyh2YXIoLS1icy1zcGFjZXIpICogMikgIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IGNhbGModmFyKC0tYnMtc3BhY2VyKSAqIDIpO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICBib3R0b206IDA7XG59XG4uc2Nyb2xsYWJsZS1kcm9wZG93bi1tZW51IHtcbiAgbGVmdDogMCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1icy1zcGFjZXIpO1xuICB6LWluZGV4OiAxMDAwO1xufVxuLnNjcm9sbGFibGUtZHJvcGRvd24tdG9nZ2xlIHtcbiAgcGFkZGluZzogMC43cmVtIDAuN3JlbSAwIDAuN3JlbTtcbn1cbi5zY3JvbGxhYmxlLWRyb3Bkb3duLWlucHV0W3JlYWRvbmx5XSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG4udG9nZ2xlLWljb24ge1xuICBwYWRkaW5nOiAwLjdyZW0gMC43cmVtIDAgMC43cmVtO1xufVxuLmRzLWZvcm0taW5wdXQtYWRkb24ge1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMCAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMCAhaW1wb3J0YW50O1xuICBib3JkZXItcmlnaHQ6IDAgIWltcG9ydGFudDtcbn1cbi5kcy1mb3JtLWlucHV0LWJ0biB7XG4gIGJvcmRlcjogdmFyKC0tYnMtaW5wdXQtYnRuLWJvcmRlci13aWR0aCkgc29saWQgdmFyKC0tYnMtaW5wdXQtYm9yZGVyLWNvbG9yKTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLWxlZnQ6IDA7XG59XG4uZHMtZm9ybS1pbnB1dC1idG46Zm9jdXMge1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG5idXR0b24uZHMtZm9ybS1hZGQtbW9yZTpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cbi5kcy1mb3JtLWlucHV0LXZhbHVlIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMCAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG59XG4vKiBzdHlsZSBmYS1zcGluICovXG4uZmEtc3BpbiB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuLyogYWxpZ24gZmEtc3BpbiAqL1xuLmxlZnQtYWRkb24gLmZhciwgLmxlZnQtYWRkb24gLmZhcywgLmxlZnQtYWRkb24gaSB7XG4gIGxlZnQ6IDA7XG59XG4ucmlnaHQtYWRkb24gLmZhciwgLnJpZ2h0LWFkZG9uIC5mYXMsIC5yaWdodC1hZGRvbiBpIHtcbiAgcmlnaHQ6IDA7XG59XG4vKiBhZGQgcGFkZGluZyAgKi9cbi5sZWZ0LWFkZG9uIGlucHV0IHtcbiAgcGFkZGluZy1sZWZ0OiBjYWxjKHZhcigtLWJzLXNwYWNlcikgKiAyLjI1KTtcbn1cbi5yaWdodC1hZGRvbiBpbnB1dCB7XG4gIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tYnMtc3BhY2VyKSAqIDIuMjUpO1xufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc3VibWlzc2lvbi9zZWN0aW9ucy9zZWN0aW9uLWNvYXItbm90aWZ5L3NlY3Rpb24tY29hci1ub3RpZnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQTtFQUNFLHFDQUFBO0VBQ0Esd0NBQUE7RUFDQSwwQkFBQTtBQUNGOztBQUNBO0VBQ0UsMkVBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0EsY0FBQTtBQUVGOztBQUFBO0VBQ0UsMkJBQUE7QUFHRjs7QUFEQTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtBQUlGOztBQUZBO0VBQ0Usb0NBQUE7RUFDQSx1Q0FBQTtBQUtGOztBQUhBLGtCQUFBO0FBQ0E7RUFDRSxvQkFBQTtBQU1GOztBQUpBLGtCQUFBO0FBQ0E7RUFDRSxPQUFBO0FBT0Y7O0FBTEE7RUFDRSxRQUFBO0FBUUY7O0FBTkEsaUJBQUE7QUFDQTtFQUNFLDJDQUFBO0FBU0Y7O0FBUEE7RUFDRSw0Q0FBQTtBQVVGOztBQVJBO0VBQ0UsWUFBQTtFQUNBLDhDQUFBO0VBQ0Esa0JBQUE7QUFXRjs7QUFUQTtFQUNFLG9GQUFBO0FBWUY7O0FBVkE7RUFDRSxtQ0FBQTtFQUNBLFlBQUE7RUFDQSw2Q0FBQTtFQUNBLHVDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0FBYUY7O0FBWEE7RUFDRSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsYUFBQTtBQWNGOztBQVpBO0VBQ0UsK0JBQUE7QUFlRjs7QUFiQTtFQUNFLHNCQUFBO0FBZ0JGOztBQWRBO0VBQ0UsK0JBQUE7QUFpQkY7O0FBZkE7RUFDRSxxQ0FBQTtFQUNBLHdDQUFBO0VBQ0EsMEJBQUE7QUFrQkY7O0FBaEJBO0VBQ0UsMkVBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0EsY0FBQTtBQW1CRjs7QUFqQkE7RUFDRSwyQkFBQTtBQW9CRjs7QUFsQkE7RUFDRSxhQUFBO0VBQ0EsMkJBQUE7QUFxQkY7O0FBbkJBO0VBQ0Usb0NBQUE7RUFDQSx1Q0FBQTtBQXNCRjs7QUFwQkEsa0JBQUE7QUFDQTtFQUNFLG9CQUFBO0FBdUJGOztBQXJCQSxrQkFBQTtBQUNBO0VBQ0UsT0FBQTtBQXdCRjs7QUF0QkE7RUFDRSxRQUFBO0FBeUJGOztBQXZCQSxpQkFBQTtBQUNBO0VBQ0UsMkNBQUE7QUEwQkY7O0FBeEJBO0VBQ0UsNENBQUE7QUEyQkY7QUFDQSxnMEtBQWcwSyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovXG4uZHMtZm9ybS1pbnB1dC1hZGRvbiB7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yaWdodDogMCAhaW1wb3J0YW50O1xufVxuLmRzLWZvcm0taW5wdXQtYnRuIHtcbiAgYm9yZGVyOiB2YXIoLS1icy1pbnB1dC1idG4tYm9yZGVyLXdpZHRoKSBzb2xpZCB2YXIoLS1icy1pbnB1dC1ib3JkZXItY29sb3IpO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xuICBib3JkZXItbGVmdDogMDtcbn1cbi5kcy1mb3JtLWlucHV0LWJ0bjpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cbmJ1dHRvbi5kcy1mb3JtLWFkZC1tb3JlOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuLmRzLWZvcm0taW5wdXQtdmFsdWUge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDAgIWltcG9ydGFudDtcbn1cbi8qIHN0eWxlIGZhLXNwaW4gKi9cbi5mYS1zcGluIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4vKiBhbGlnbiBmYS1zcGluICovXG4ubGVmdC1hZGRvbiAuZmFyLCAubGVmdC1hZGRvbiAuZmFzLCAubGVmdC1hZGRvbiBpIHtcbiAgbGVmdDogMDtcbn1cbi5yaWdodC1hZGRvbiAuZmFyLCAucmlnaHQtYWRkb24gLmZhcywgLnJpZ2h0LWFkZG9uIGkge1xuICByaWdodDogMDtcbn1cbi8qIGFkZCBwYWRkaW5nICAqL1xuLmxlZnQtYWRkb24gaW5wdXQge1xuICBwYWRkaW5nLWxlZnQ6IGNhbGModmFyKC0tYnMtc3BhY2VyKSAqIDIuMjUpO1xufVxuLnJpZ2h0LWFkZG9uIGlucHV0IHtcbiAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1icy1zcGFjZXIpICogMi4yNSk7XG59XG4uc2Nyb2xsYWJsZS1tZW51IHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXgtaGVpZ2h0OiB2YXIoLS1kcy1kcm9wZG93bi1tZW51LW1heC1oZWlnaHQpO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG4uY29sbGVjdGlvbi1pdGVtIHtcbiAgYm9yZGVyLWJvdHRvbTogdmFyKC0tYnMtZHJvcGRvd24tYm9yZGVyLXdpZHRoKSBzb2xpZCB2YXIoLS1icy1kcm9wZG93bi1ib3JkZXItY29sb3IpO1xufVxuLnNjcm9sbGFibGUtZHJvcGRvd24tbG9hZGluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJzLXByaW1hcnkpO1xuICBjb2xvcjogd2hpdGU7XG4gIGhlaWdodDogY2FsYyh2YXIoLS1icy1zcGFjZXIpICogMikgIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IGNhbGModmFyKC0tYnMtc3BhY2VyKSAqIDIpO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICBib3R0b206IDA7XG59XG4uc2Nyb2xsYWJsZS1kcm9wZG93bi1tZW51IHtcbiAgbGVmdDogMCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1icy1zcGFjZXIpO1xuICB6LWluZGV4OiAxMDAwO1xufVxuLnNjcm9sbGFibGUtZHJvcGRvd24tdG9nZ2xlIHtcbiAgcGFkZGluZzogMC43cmVtIDAuN3JlbSAwIDAuN3JlbTtcbn1cbi5zY3JvbGxhYmxlLWRyb3Bkb3duLWlucHV0W3JlYWRvbmx5XSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG4udG9nZ2xlLWljb24ge1xuICBwYWRkaW5nOiAwLjdyZW0gMC43cmVtIDAgMC43cmVtO1xufVxuLmRzLWZvcm0taW5wdXQtYWRkb24ge1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMCAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMCAhaW1wb3J0YW50O1xuICBib3JkZXItcmlnaHQ6IDAgIWltcG9ydGFudDtcbn1cbi5kcy1mb3JtLWlucHV0LWJ0biB7XG4gIGJvcmRlcjogdmFyKC0tYnMtaW5wdXQtYnRuLWJvcmRlci13aWR0aCkgc29saWQgdmFyKC0tYnMtaW5wdXQtYm9yZGVyLWNvbG9yKTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLWxlZnQ6IDA7XG59XG4uZHMtZm9ybS1pbnB1dC1idG46Zm9jdXMge1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG5idXR0b24uZHMtZm9ybS1hZGQtbW9yZTpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cbi5kcy1mb3JtLWlucHV0LXZhbHVlIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMCAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG59XG4vKiBzdHlsZSBmYS1zcGluICovXG4uZmEtc3BpbiB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuLyogYWxpZ24gZmEtc3BpbiAqL1xuLmxlZnQtYWRkb24gLmZhciwgLmxlZnQtYWRkb24gLmZhcywgLmxlZnQtYWRkb24gaSB7XG4gIGxlZnQ6IDA7XG59XG4ucmlnaHQtYWRkb24gLmZhciwgLnJpZ2h0LWFkZG9uIC5mYXMsIC5yaWdodC1hZGRvbiBpIHtcbiAgcmlnaHQ6IDA7XG59XG4vKiBhZGQgcGFkZGluZyAgKi9cbi5sZWZ0LWFkZG9uIGlucHV0IHtcbiAgcGFkZGluZy1sZWZ0OiBjYWxjKHZhcigtLWJzLXNwYWNlcikgKiAyLjI1KTtcbn1cbi5yaWdodC1hZGRvbiBpbnB1dCB7XG4gIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tYnMtc3BhY2VyKSAqIDIuMjUpO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 3830:
/*!***********************************************************!*\
  !*** ./src/app/submission/sections/sections-decorator.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderSectionFor: () => (/* binding */ renderSectionFor),
/* harmony export */   rendersSectionType: () => (/* binding */ rendersSectionType)
/* harmony export */ });
/* harmony import */ var _accesses_section_accesses_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accesses/section-accesses.component */ 25386);
/* harmony import */ var _cc_license_submission_section_cc_licenses_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cc-license/submission-section-cc-licenses.component */ 11402);
/* harmony import */ var _duplicates_section_duplicates_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./duplicates/section-duplicates.component */ 51398);
/* harmony import */ var _form_section_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form/section-form.component */ 18370);
/* harmony import */ var _identifiers_section_identifiers_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./identifiers/section-identifiers.component */ 37332);
/* harmony import */ var _license_section_license_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./license/section-license.component */ 4520);
/* harmony import */ var _section_coar_notify_section_coar_notify_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./section-coar-notify/section-coar-notify.component */ 54778);
/* harmony import */ var _sections_type__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sections-type */ 88643);
/* harmony import */ var _sherpa_policies_section_sherpa_policies_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sherpa-policies/section-sherpa-policies.component */ 9804);
/* harmony import */ var _upload_section_upload_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./upload/section-upload.component */ 85228);










const submissionSectionsMap = new Map();
submissionSectionsMap.set(_sections_type__WEBPACK_IMPORTED_MODULE_7__.SectionsType.AccessesCondition, _accesses_section_accesses_component__WEBPACK_IMPORTED_MODULE_0__.SubmissionSectionAccessesComponent);
submissionSectionsMap.set(_sections_type__WEBPACK_IMPORTED_MODULE_7__.SectionsType.License, _license_section_license_component__WEBPACK_IMPORTED_MODULE_5__.SubmissionSectionLicenseComponent);
submissionSectionsMap.set(_sections_type__WEBPACK_IMPORTED_MODULE_7__.SectionsType.CcLicense, _cc_license_submission_section_cc_licenses_component__WEBPACK_IMPORTED_MODULE_1__.SubmissionSectionCcLicensesComponent);
submissionSectionsMap.set(_sections_type__WEBPACK_IMPORTED_MODULE_7__.SectionsType.SherpaPolicies, _sherpa_policies_section_sherpa_policies_component__WEBPACK_IMPORTED_MODULE_8__.SubmissionSectionSherpaPoliciesComponent);
submissionSectionsMap.set(_sections_type__WEBPACK_IMPORTED_MODULE_7__.SectionsType.Upload, _upload_section_upload_component__WEBPACK_IMPORTED_MODULE_9__.SubmissionSectionUploadComponent);
submissionSectionsMap.set(_sections_type__WEBPACK_IMPORTED_MODULE_7__.SectionsType.SubmissionForm, _form_section_form_component__WEBPACK_IMPORTED_MODULE_3__.SubmissionSectionFormComponent);
submissionSectionsMap.set(_sections_type__WEBPACK_IMPORTED_MODULE_7__.SectionsType.Identifiers, _identifiers_section_identifiers_component__WEBPACK_IMPORTED_MODULE_4__.SubmissionSectionIdentifiersComponent);
submissionSectionsMap.set(_sections_type__WEBPACK_IMPORTED_MODULE_7__.SectionsType.CoarNotify, _section_coar_notify_section_coar_notify_component__WEBPACK_IMPORTED_MODULE_6__.SubmissionSectionCoarNotifyComponent);
submissionSectionsMap.set(_sections_type__WEBPACK_IMPORTED_MODULE_7__.SectionsType.Duplicates, _duplicates_section_duplicates_component__WEBPACK_IMPORTED_MODULE_2__.SubmissionSectionDuplicatesComponent);
/**
 * @deprecated
 */
function renderSectionFor(sectionType) {
  return function decorator(objectElement) {
    if (!objectElement) {
      return;
    }
    submissionSectionsMap.set(sectionType, objectElement);
  };
}
function rendersSectionType(sectionType) {
  return submissionSectionsMap.get(sectionType);
}

/***/ }),

/***/ 96405:
/*!***********************************************************!*\
  !*** ./src/app/submission/sections/sections.directive.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SectionsDirective: () => (/* binding */ SectionsDirective)
/* harmony export */ });
/* harmony import */ var lodash_uniq__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/uniq */ 14515);
/* harmony import */ var lodash_uniq__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_uniq__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/empty.util */ 82777);
/* harmony import */ var _submission_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../submission.service */ 61010);
/* harmony import */ var _utils_parseSectionErrorPaths__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/parseSectionErrorPaths */ 90049);
/* harmony import */ var _sections_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sections.service */ 72147);
/* harmony import */ var _sections_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sections-type */ 88643);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 90310);











/**
 * Directive for handling generic section functionality
 */
class SectionsDirective {
  /**
   * Initialize instance variables
   *
   * @param {ChangeDetectorRef} changeDetectorRef
   * @param {SubmissionService} submissionService
   * @param {SectionsService} sectionService
   */
  constructor(changeDetectorRef, submissionService, sectionService) {
    this.changeDetectorRef = changeDetectorRef;
    this.submissionService = submissionService;
    this.sectionService = sectionService;
    /**
     * A boolean representing if section is mandatory
     * @type {boolean}
     */
    this.mandatory = true;
    /**
     * The list of generic errors related to the section
     * @type {Array}
     */
    this.genericSectionErrors = [];
    /**
     * The list of all errors related to the element belonging to this section
     * @type {Array}
     */
    this.allSectionErrors = [];
    /**
     * A boolean representing if section is active
     * @type {boolean}
     */
    this.active = true;
    /**
     * A boolean representing the panel collapsible state: opened (true) or closed (false)
     * @type {boolean}
     */
    this.sectionState = this.mandatory;
    /**
     * Array to track all subscriptions and unsubscribe them onDestroy
     * @type {Array}
     */
    this.subs = [];
  }
  /**
   * Initialize instance variables
   */
  ngOnInit() {
    this.valid = this.sectionService.isSectionValid(this.submissionId, this.sectionId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(valid => {
      if (valid) {
        this.resetErrors();
      }
      return valid;
    }));
    this.subs.push(this.sectionService.getShownSectionErrors(this.submissionId, this.sectionId, this.sectionType).subscribe(errors => {
      if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_1__.isNotEmpty)(errors)) {
        errors.forEach(errorItem => {
          const parsedErrors = (0,_utils_parseSectionErrorPaths__WEBPACK_IMPORTED_MODULE_3__["default"])(errorItem.path);
          parsedErrors.forEach(error => {
            if (!error.fieldId) {
              this.genericSectionErrors = lodash_uniq__WEBPACK_IMPORTED_MODULE_0___default()(this.genericSectionErrors.concat(errorItem.message));
            } else {
              this.allSectionErrors.push(errorItem.message);
            }
          });
        });
      } else {
        this.resetErrors();
      }
    }), this.submissionService.getActiveSectionId(this.submissionId).subscribe(activeSectionId => {
      const previousActive = this.active;
      this.active = activeSectionId === this.sectionId;
      if (previousActive !== this.active) {
        this.changeDetectorRef.detectChanges();
        // If section is no longer active dispatch save action
        if (!this.active && (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_1__.isNotNull)(activeSectionId)) {
          this.submissionService.dispatchSave(this.submissionId);
        }
      }
    }));
    this.enabled = this.sectionService.isSectionEnabled(this.submissionId, this.sectionId);
  }
  /**
   * Unsubscribe from all subscriptions
   */
  ngOnDestroy() {
    this.subs.filter(subscription => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_1__.hasValue)(subscription)).forEach(subscription => subscription.unsubscribe());
  }
  /**
   * Change section state
   *
   * @param event
   *    the event emitted
   */
  sectionChange(event) {
    this.sectionState = event.nextState;
  }
  /**
   * Check if section panel is open
   *
   * @returns {boolean}
   *    Returns true when section panel is open
   */
  isOpen() {
    return this.sectionState;
  }
  /**
   * Check if section is mandatory
   *
   * @returns {boolean}
   *    Returns true when section is mandatory
   */
  isMandatory() {
    return this.mandatory;
  }
  /**
   * Check if section panel is active
   *
   * @returns {boolean}
   *    Returns true when section panel is active
   */
  isSectionActive() {
    return this.active;
  }
  /**
   * Check if section is enabled
   *
   * @returns {Observable<boolean>}
   *    Emits true whenever section is enabled
   */
  isEnabled() {
    return this.enabled;
  }
  /**
   * Check if section is valid
   *
   * @returns {Observable<boolean>}
   *    Emits true whenever section is valid
   */
  isValid() {
    return this.valid;
  }
  /**
   * Remove section panel from submission form
   *
   * @param submissionId
   *    the submission id
   * @param sectionId
   *    the section id
   * @returns {Observable<boolean>}
   *    Emits true whenever section is valid
   */
  removeSection(submissionId, sectionId) {
    this.sectionService.removeSection(submissionId, sectionId);
  }
  /**
   * Check if section has only generic errors
   *
   * @returns {boolean}
   *    Returns true when section has only generic errors
   */
  hasGenericErrors() {
    return this.genericSectionErrors && this.genericSectionErrors.length > 0;
  }
  /**
   * Check if section has errors
   *
   * @returns {boolean}
   *    Returns true when section has errors
   */
  hasErrors() {
    return this.genericSectionErrors && this.genericSectionErrors.length > 0 || this.allSectionErrors && this.allSectionErrors.length > 0;
  }
  /**
   * Return section errors
   *
   * @returns {Array}
   *    Returns section errors list
   */
  getErrors() {
    return this.genericSectionErrors;
  }
  /**
   * Set form focus to this section panel
   *
   * @param event
   *    The event emitted
   */
  setFocus(event) {
    if (!this.active) {
      this.submissionService.setActiveSection(this.submissionId, this.sectionId);
    }
  }
  /**
   * Check if section is information
   *
   * @returns {Observable<boolean>}
   *    Emits true whenever section is information
   */
  isInfo() {
    return this.sectionService.getIsInformational(this.sectionType);
  }
  /**
   * Remove error from list
   *
   * @param index
   *    The error array key
   */
  removeError(index) {
    this.genericSectionErrors.splice(index);
  }
  /**
   * Remove all errors from list
   */
  resetErrors() {
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_1__.isNotEmpty)(this.genericSectionErrors)) {
      this.sectionService.dispatchRemoveSectionErrors(this.submissionId, this.sectionId);
    }
    this.genericSectionErrors = [];
    this.allSectionErrors = [];
  }
  static {
    this.ɵfac = function SectionsDirective_Factory(t) {
      return new (t || SectionsDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_submission_service__WEBPACK_IMPORTED_MODULE_2__.SubmissionService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_sections_service__WEBPACK_IMPORTED_MODULE_4__.SectionsService));
    };
  }
  static {
    this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
      type: SectionsDirective,
      selectors: [["", "dsSection", ""]],
      inputs: {
        mandatory: "mandatory",
        sectionId: "sectionId",
        sectionType: "sectionType",
        submissionId: "submissionId"
      },
      exportAs: ["sectionRef"],
      standalone: true
    });
  }
}

/***/ }),

/***/ 66717:
/*!******************************************************************************************************!*\
  !*** ./src/app/submission/sections/sherpa-policies/content-accordion/content-accordion.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContentAccordionComponent: () => (/* binding */ ContentAccordionComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 49966);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 90310);






function ContentAccordionComponent_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r2.version.embargo.amount, " ", ctx_r2.version.embargo == null ? null : ctx_r2.version.embargo.units[0], "");
  }
}
function ContentAccordionComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "submission.sections.sherpa.publisher.policy.noembargo"), "");
  }
}
function ContentAccordionComponent_span_13_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("+", ctx_r2.version.locations.length - 1, "");
  }
}
function ContentAccordionComponent_span_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ContentAccordionComponent_span_13_span_2_Template, 2, 1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.version.locations[0], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.version.locations.length > 1);
  }
}
function ContentAccordionComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "submission.sections.sherpa.publisher.policy.nolocation"));
  }
}
function ContentAccordionComponent_span_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 18);
  }
}
function ContentAccordionComponent_span_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 19);
  }
}
function ContentAccordionComponent_div_21_div_1_p_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r2.version.embargo.amount, " ", ctx_r2.version.embargo.units, "");
  }
}
function ContentAccordionComponent_div_21_div_1_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "submission.sections.sherpa.publisher.policy.noembargo"));
  }
}
function ContentAccordionComponent_div_21_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22)(1, "div", 23)(2, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ContentAccordionComponent_div_21_div_1_p_7_Template, 2, 2, "p", 26)(8, ContentAccordionComponent_div_21_div_1_ng_template_8_Template, 3, 3, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const noEmbargo_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 3, "submission.sections.sherpa.publisher.policy.embargo"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r2.version.embargo)("ngIfElse", noEmbargo_r4);
  }
}
function ContentAccordionComponent_div_21_div_2_p_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const license_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](license_r5);
  }
}
function ContentAccordionComponent_div_21_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22)(1, "div", 23)(2, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ContentAccordionComponent_div_21_div_2_p_7_Template, 2, 1, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 2, "submission.sections.sherpa.publisher.policy.license"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.version.licenses);
  }
}
function ContentAccordionComponent_div_21_div_3_p_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const prerequisite_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](prerequisite_r6);
  }
}
function ContentAccordionComponent_div_21_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22)(1, "div", 23)(2, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ContentAccordionComponent_div_21_div_3_p_7_Template, 2, 1, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 2, "submission.sections.sherpa.publisher.policy.prerequisites"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.version.prerequisites);
  }
}
function ContentAccordionComponent_div_21_div_4_p_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const location_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](location_r7);
  }
}
function ContentAccordionComponent_div_21_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22)(1, "div", 23)(2, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ContentAccordionComponent_div_21_div_4_p_7_Template, 2, 1, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 2, "submission.sections.sherpa.publisher.policy.location"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.version.locations);
  }
}
function ContentAccordionComponent_div_21_div_5_p_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const condition_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](condition_r8);
  }
}
function ContentAccordionComponent_div_21_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22)(1, "div", 23)(2, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ContentAccordionComponent_div_21_div_5_p_7_Template, 2, 1, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 2, "submission.sections.sherpa.publisher.policy.conditions"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.version.conditions);
  }
}
function ContentAccordionComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContentAccordionComponent_div_21_div_1_Template, 10, 5, "div", 21)(2, ContentAccordionComponent_div_21_div_2_Template, 8, 4, "div", 21)(3, ContentAccordionComponent_div_21_div_3_Template, 8, 4, "div", 21)(4, ContentAccordionComponent_div_21_div_4_Template, 8, 4, "div", 21)(5, ContentAccordionComponent_div_21_div_5_Template, 8, 4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!(ctx_r2.version == null ? null : ctx_r2.version.embargo) && !!(ctx_r2.version == null ? null : ctx_r2.version.embargo.amount));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!(ctx_r2.version == null ? null : ctx_r2.version.licenses) && ctx_r2.version.licenses.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!(ctx_r2.version == null ? null : ctx_r2.version.prerequisites) && ctx_r2.version.prerequisites.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!(ctx_r2.version == null ? null : ctx_r2.version.locations) && ctx_r2.version.locations.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!(ctx_r2.version == null ? null : ctx_r2.version.conditions) && ctx_r2.version.conditions.length > 0);
  }
}
/**
 * This component represents a section that contains the inner accordions for the publisher policy versions.
 */
class ContentAccordionComponent {
  constructor() {
    /**
     * A boolean representing if div should start collapsed
     */
    this.isCollapsed = true;
  }
  static {
    this.ɵfac = function ContentAccordionComponent_Factory(t) {
      return new (t || ContentAccordionComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContentAccordionComponent,
      selectors: [["ds-content-accordion"]],
      inputs: {
        version: "version"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 22,
      vars: 15,
      consts: [["noEmbargoTitle", ""], ["noLocations", ""], ["collapse", "ngbCollapse"], ["noEmbargo", ""], ["data-test", "collapse", 1, "mb-3", "border-bottom"], [1, "w-100", "d-flex", "justify-content-between", "collapse-toggle", 3, "click"], [1, "d-flex"], ["type", "button", "aria-controls", "collapseExample", 1, "btn", "btn-link", "p-0", "mr-4", 3, "click"], [4, "ngIf", "ngIfElse"], [1, "m-1", "ml-4"], [1, "far", "fa-folder-open"], [1, "d-inline-block"], ["class", "fas fa-chevron-down", 4, "ngIf"], ["class", "fas fa-chevron-up", 4, "ngIf"], [3, "ngbCollapse"], ["class", "ml-4", 4, "ngIf"], [1, "fas", "fa-hourglass-half"], [4, "ngIf"], [1, "fas", "fa-chevron-down"], [1, "fas", "fa-chevron-up"], [1, "ml-4"], ["class", "row", 4, "ngIf"], [1, "row"], [1, "col-4"], [1, "m-1"], [1, "col-6"], ["class", "m-1", 4, "ngIf", "ngIfElse"], [1, "fas", "fa-certificate"], ["class", "m-1", 4, "ngFor", "ngForOf"], [1, "fas", "fa-exclamation-circle"], [1, "fas", "fa-tasks"]],
      template: function ContentAccordionComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4)(1, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContentAccordionComponent_Template_div_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            const collapse_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](collapse_r2.toggle());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6)(3, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContentAccordionComponent_Template_button_click_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event.preventDefault());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "titlecase");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ContentAccordionComponent_span_8_Template, 3, 2, "span", 8)(9, ContentAccordionComponent_ng_template_9_Template, 4, 3, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ContentAccordionComponent_span_13_Template, 3, 2, "span", 8)(14, ContentAccordionComponent_ng_template_14_Template, 3, 3, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ContentAccordionComponent_span_17_Template, 1, 0, "span", 12)(18, ContentAccordionComponent_span_18_Template, 1, 0, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14, 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ContentAccordionComponent_div_21_Template, 6, 5, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          const noEmbargoTitle_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
          const noLocations_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
          const collapse_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !collapse_r2.collapsed);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 11, ctx.version.articleVersion), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 13, "submission.sections.sherpa.publisher.policy.version"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!(ctx.version == null ? null : ctx.version.embargo) && !!(ctx.version == null ? null : ctx.version.embargo.amount))("ngIfElse", noEmbargoTitle_r9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!(ctx.version == null ? null : ctx.version.locations) && ctx.version.locations.length > 0)("ngIfElse", noLocations_r10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", collapse_r2.collapsed);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !collapse_r2.collapsed);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", ctx.isCollapsed);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx.version);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbCollapseModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbCollapse, _angular_common__WEBPACK_IMPORTED_MODULE_1__.TitleCasePipe],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRlbnQtYWNjb3JkaW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBIiwiZmlsZSI6ImNvbnRlbnQtYWNjb3JkaW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi8iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc3VibWlzc2lvbi9zZWN0aW9ucy9zaGVycGEtcG9saWNpZXMvY29udGVudC1hY2NvcmRpb24vY29udGVudC1hY2NvcmRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQSw0a0JBQTRrQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 68535:
/*!************************************************************************************************************!*\
  !*** ./src/app/submission/sections/sherpa-policies/metadata-information/metadata-information.component.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MetadataInformationComponent: () => (/* binding */ MetadataInformationComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 90310);




function MetadataInformationComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5)(6, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 2, "submission.sections.sherpa.record.information.id"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.metadata.id, " ");
  }
}
function MetadataInformationComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5)(6, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 2, "submission.sections.sherpa.record.information.date.created"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 4, ctx_r0.metadata.dateCreated, "d MMMM Y H:mm:ss zzzz"), " ");
  }
}
function MetadataInformationComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5)(6, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 2, "submission.sections.sherpa.record.information.date.modified"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 4, ctx_r0.metadata.dateModified, "d MMMM Y H:mm:ss zzzz"), " ");
  }
}
function MetadataInformationComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5)(6, "p", 4)(7, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, "submission.sections.sherpa.record.information.uri"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r0.metadata.uri, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.metadata.uri);
  }
}
/**
 * This component represents a section that contains the matadata informations.
 */
class MetadataInformationComponent {
  static {
    this.ɵfac = function MetadataInformationComponent_Factory(t) {
      return new (t || MetadataInformationComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MetadataInformationComponent,
      selectors: [["ds-metadata-information"]],
      inputs: {
        metadata: "metadata"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 5,
      vars: 4,
      consts: [[1, "ml-4"], ["class", "row", 4, "ngIf"], [1, "row"], [1, "col-4"], [1, "m-1"], [1, "col-8"], ["target", "_blank", 3, "href"]],
      template: function MetadataInformationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MetadataInformationComponent_div_1_Template, 8, 4, "div", 1)(2, MetadataInformationComponent_div_2_Template, 9, 7, "div", 1)(3, MetadataInformationComponent_div_3_Template, 9, 7, "div", 1)(4, MetadataInformationComponent_div_4_Template, 9, 5, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!(ctx.metadata == null ? null : ctx.metadata.id));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!(ctx.metadata == null ? null : ctx.metadata.dateCreated));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!(ctx.metadata == null ? null : ctx.metadata.dateModified));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!(ctx.metadata == null ? null : ctx.metadata.uri));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_1__.DatePipe],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGFkYXRhLWluZm9ybWF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBIiwiZmlsZSI6Im1ldGFkYXRhLWluZm9ybWF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi8iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc3VibWlzc2lvbi9zZWN0aW9ucy9zaGVycGEtcG9saWNpZXMvbWV0YWRhdGEtaW5mb3JtYXRpb24vbWV0YWRhdGEtaW5mb3JtYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQSxvbEJBQW9sQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 86069:
/*!******************************************************************************************************************!*\
  !*** ./src/app/submission/sections/sherpa-policies/publication-information/publication-information.component.ts ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PublicationInformationComponent: () => (/* binding */ PublicationInformationComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 90310);




function PublicationInformationComponent_div_1_p_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const title_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", title_r1, " ");
  }
}
function PublicationInformationComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PublicationInformationComponent_div_1_p_6_Template, 2, 1, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 2, "submission.sections.sherpa.publication.information.title"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.journal.titles);
  }
}
function PublicationInformationComponent_div_2_p_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const issn_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", issn_r3, " ");
  }
}
function PublicationInformationComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PublicationInformationComponent_div_2_p_6_Template, 2, 1, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 2, "submission.sections.sherpa.publication.information.issns"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.journal.issns);
  }
}
function PublicationInformationComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3)(6, "p", 4)(7, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, "submission.sections.sherpa.publication.information.url"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r1.journal.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.journal.url, " ");
  }
}
function PublicationInformationComponent_div_4_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3)(1, "p", 4)(2, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const publisher_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", publisher_r4.uri, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", publisher_r4.name, " ");
  }
}
function PublicationInformationComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PublicationInformationComponent_div_4_div_5_Template, 4, 2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 2, "submission.sections.sherpa.publication.information.publishers"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.journal.publishers);
  }
}
function PublicationInformationComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3)(6, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 2, "submission.sections.sherpa.publication.information.romeoPub"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.journal.romeoPub, " ");
  }
}
function PublicationInformationComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3)(6, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 2, "submission.sections.sherpa.publication.information.zetoPub"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.journal.zetoPub, " ");
  }
}
/**
 * This component represents a section that contains the journal publication information.
 */
class PublicationInformationComponent {
  static {
    this.ɵfac = function PublicationInformationComponent_Factory(t) {
      return new (t || PublicationInformationComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PublicationInformationComponent,
      selectors: [["ds-publication-information"]],
      inputs: {
        journal: "journal"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 7,
      vars: 6,
      consts: [[1, "ml-4"], ["class", "row", 4, "ngIf"], [1, "row"], [1, "col-4"], [1, "m-1"], ["class", "m-1", 4, "ngFor", "ngForOf"], ["target", "_blank", "rel", "noopener noreferrer", 3, "href"], ["class", "col-4", 4, "ngFor", "ngForOf"]],
      template: function PublicationInformationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PublicationInformationComponent_div_1_Template, 7, 4, "div", 1)(2, PublicationInformationComponent_div_2_Template, 7, 4, "div", 1)(3, PublicationInformationComponent_div_3_Template, 9, 5, "div", 1)(4, PublicationInformationComponent_div_4_Template, 6, 4, "div", 1)(5, PublicationInformationComponent_div_5_Template, 8, 4, "div", 1)(6, PublicationInformationComponent_div_6_Template, 8, 4, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!(ctx.journal == null ? null : ctx.journal.titles) && ctx.journal.titles.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!(ctx.journal == null ? null : ctx.journal.issns) && ctx.journal.issns.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!(ctx.journal == null ? null : ctx.journal.url));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!(ctx.journal == null ? null : ctx.journal.publishers) && ctx.journal.publishers.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!(ctx.journal == null ? null : ctx.journal.romeoPub));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!(ctx.journal == null ? null : ctx.journal.zetoPub));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1YmxpY2F0aW9uLWluZm9ybWF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBIiwiZmlsZSI6InB1YmxpY2F0aW9uLWluZm9ybWF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi8iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc3VibWlzc2lvbi9zZWN0aW9ucy9zaGVycGEtcG9saWNpZXMvcHVibGljYXRpb24taW5mb3JtYXRpb24vcHVibGljYXRpb24taW5mb3JtYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQSw0bEJBQTRsQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 50717:
/*!****************************************************************************************************!*\
  !*** ./src/app/submission/sections/sherpa-policies/publisher-policy/publisher-policy.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PublisherPolicyComponent: () => (/* binding */ PublisherPolicyComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var _shared_alert_alert_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/alert/alert-type */ 47978);
/* harmony import */ var _content_accordion_content_accordion_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../content-accordion/content-accordion.component */ 66717);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);






function PublisherPolicyComponent_ds_content_accordion_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "ds-content-accordion", 3);
  }
  if (rf & 2) {
    const permittedVersions_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("version", permittedVersions_r1);
  }
}
function PublisherPolicyComponent_div_2_li_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li")(1, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const url_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", url_r2.key, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](url_r2.value);
  }
}
function PublisherPolicyComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4)(1, "div", 5)(2, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, PublisherPolicyComponent_div_2_li_6_Template, 3, 2, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 2, "submission.sections.sherpa.publisher.policy.more.information"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 4, ctx_r2.policy.urls));
  }
}
/**
 * This component represents a section that contains the publisher policy informations.
 */
class PublisherPolicyComponent {
  constructor() {
    /**
     * The AlertType enumeration
     * @type {AlertType}
     */
    this.AlertTypeEnum = _shared_alert_alert_type__WEBPACK_IMPORTED_MODULE_0__.AlertType;
  }
  static {
    this.ɵfac = function PublisherPolicyComponent_Factory(t) {
      return new (t || PublisherPolicyComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: PublisherPolicyComponent,
      selectors: [["ds-publisher-policy"]],
      inputs: {
        policy: "policy"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 3,
      vars: 2,
      consts: [[1, "ml-4"], [3, "version", 4, "ngFor", "ngForOf"], ["class", "row", 4, "ngIf"], [3, "version"], [1, "row"], [1, "col-12"], [1, "m-1"], [4, "ngFor", "ngForOf"], ["target", "_blank", "rel", "noopener noreferrer", 3, "href"]],
      template: function PublisherPolicyComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, PublisherPolicyComponent_ds_content_accordion_1_Template, 1, 1, "ds-content-accordion", 1)(2, PublisherPolicyComponent_div_2_Template, 8, 6, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.policy.permittedVersions);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !!(ctx.policy == null ? null : ctx.policy.urls));
        }
      },
      dependencies: [_content_accordion_content_accordion_component__WEBPACK_IMPORTED_MODULE_1__.ContentAccordionComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_4__.KeyValuePipe, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1Ymxpc2hlci1wb2xpY3kuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUEiLCJmaWxlIjoicHVibGlzaGVyLXBvbGljeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc3VibWlzc2lvbi9zZWN0aW9ucy9zaGVycGEtcG9saWNpZXMvcHVibGlzaGVyLXBvbGljeS9wdWJsaXNoZXItcG9saWN5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBO0FBQ0Esd2tCQUF3a0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqLyJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 9804:
/*!******************************************************************************************!*\
  !*** ./src/app/submission/sections/sherpa-policies/section-sherpa-policies.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SubmissionSectionSherpaPoliciesComponent: () => (/* binding */ SubmissionSectionSherpaPoliciesComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 49966);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 83485);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 17796);
/* harmony import */ var _core_json_patch_builder_json_patch_operation_path_combiner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/json-patch/builder/json-patch-operation-path-combiner */ 92409);
/* harmony import */ var _core_json_patch_builder_json_patch_operations_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/json-patch/builder/json-patch-operations-builder */ 17184);
/* harmony import */ var _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/alert/alert.component */ 16292);
/* harmony import */ var _shared_alert_alert_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/alert/alert-type */ 47978);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/empty.util */ 82777);
/* harmony import */ var _shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/utils/var.directive */ 18226);
/* harmony import */ var _submission_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../submission.service */ 61010);
/* harmony import */ var _models_section_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/section.model */ 70507);
/* harmony import */ var _sections_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../sections.service */ 72147);
/* harmony import */ var _metadata_information_metadata_information_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./metadata-information/metadata-information.component */ 68535);
/* harmony import */ var _publication_information_publication_information_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./publication-information/publication-information.component */ 86069);
/* harmony import */ var _publisher_policy_publisher_policy_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./publisher-policy/publisher-policy.component */ 50717);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 90310);






















function SubmissionSectionSherpaPoliciesComponent_ds_alert_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "ds-alert", 4);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("type", "alert-info")("content", "submission.sections.sherpa-policy.title-empty");
  }
}
function SubmissionSectionSherpaPoliciesComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 5)(1, "ds-alert", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div")(5, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function SubmissionSectionSherpaPoliciesComponent_div_1_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.refresh());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](7, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("type", "alert-info");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](3, 3, "submission.sections.sherpa.publisher.policy.description"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](9, 5, "submission.sections.sherpa.publisher.policy.refresh"), " ");
  }
}
function SubmissionSectionSherpaPoliciesComponent_ng_container_2_ng_container_1_ng_container_1_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "span", 21);
  }
}
function SubmissionSectionSherpaPoliciesComponent_ng_container_2_ng_container_1_ng_container_1_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "span", 22);
  }
}
function SubmissionSectionSherpaPoliciesComponent_ng_container_2_ng_container_1_ng_container_1_div_12_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "span", 21);
  }
}
function SubmissionSectionSherpaPoliciesComponent_ng_container_2_ng_container_1_ng_container_1_div_12_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "span", 22);
  }
}
function SubmissionSectionSherpaPoliciesComponent_ng_container_2_ng_container_1_ng_container_1_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 11)(1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function SubmissionSectionSherpaPoliciesComponent_ng_container_2_ng_container_1_ng_container_1_div_12_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r6);
      const collapse_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](9);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](collapse_r7.toggle());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function SubmissionSectionSherpaPoliciesComponent_ng_container_2_ng_container_1_ng_container_1_div_12_Template_button_click_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r6);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"]($event.preventDefault());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](6, SubmissionSectionSherpaPoliciesComponent_ng_container_2_ng_container_1_ng_container_1_div_12_span_6_Template, 1, 0, "span", 15)(7, SubmissionSectionSherpaPoliciesComponent_ng_container_2_ng_container_1_ng_container_1_div_12_span_7_Template, 1, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "div", 17, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](10, "ds-publisher-policy", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const policy_r8 = ctx.$implicit;
    const collapse_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](9);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵattribute"]("aria-expanded", !collapse_r7.collapsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](4, 6, "submission.sections.sherpa.publisher.policy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", collapse_r7.collapsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !collapse_r7.collapsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngbCollapse", ctx_r1.isCollapsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("policy", policy_r8);
  }
}
function SubmissionSectionSherpaPoliciesComponent_ng_container_2_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 11)(2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function SubmissionSectionSherpaPoliciesComponent_ng_container_2_ng_container_1_ng_container_1_Template_div_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r4);
      const collapse_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](10);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](collapse_r5.toggle());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function SubmissionSectionSherpaPoliciesComponent_ng_container_2_ng_container_1_ng_container_1_Template_button_click_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"]($event.preventDefault());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](7, SubmissionSectionSherpaPoliciesComponent_ng_container_2_ng_container_1_ng_container_1_span_7_Template, 1, 0, "span", 15)(8, SubmissionSectionSherpaPoliciesComponent_ng_container_2_ng_container_1_ng_container_1_span_8_Template, 1, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "div", 17, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](11, "ds-publication-information", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](12, SubmissionSectionSherpaPoliciesComponent_ng_container_2_ng_container_1_ng_container_1_div_12_Template, 11, 8, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const journal_r9 = ctx.$implicit;
    const collapse_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](10);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵattribute"]("aria-expanded", !collapse_r5.collapsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](5, 7, "submission.sections.sherpa.publication.information"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", collapse_r5.collapsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !collapse_r5.collapsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngbCollapse", ctx_r1.isCollapsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("journal", journal_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", journal_r9.policies);
  }
}
function SubmissionSectionSherpaPoliciesComponent_ng_container_2_ng_container_1_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "span", 21);
  }
}
function SubmissionSectionSherpaPoliciesComponent_ng_container_2_ng_container_1_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "span", 22);
  }
}
function SubmissionSectionSherpaPoliciesComponent_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, SubmissionSectionSherpaPoliciesComponent_ng_container_2_ng_container_1_ng_container_1_Template, 13, 9, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "div", 11)(3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function SubmissionSectionSherpaPoliciesComponent_ng_container_2_ng_container_1_Template_div_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r3);
      const collapse_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](11);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](collapse_r10.toggle());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function SubmissionSectionSherpaPoliciesComponent_ng_container_2_ng_container_1_Template_button_click_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"]($event.preventDefault());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](8, SubmissionSectionSherpaPoliciesComponent_ng_container_2_ng_container_1_span_8_Template, 1, 0, "span", 15)(9, SubmissionSectionSherpaPoliciesComponent_ng_container_2_ng_container_1_span_9_Template, 1, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "div", 17, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](12, "ds-metadata-information", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const collapse_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](11);
    const sherpaData_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().ngVar;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", sherpaData_r11.journals);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵattribute"]("aria-expanded", !collapse_r10.collapsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](6, 7, "submission.sections.sherpa.record.information"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", collapse_r10.collapsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !collapse_r10.collapsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngbCollapse", ctx_r1.isCollapsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("metadata", sherpaData_r11.metadata);
  }
}
function SubmissionSectionSherpaPoliciesComponent_ng_container_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "ds-alert", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const sherpaData_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().ngVar;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("type", ctx_r1.AlertTypeEnum.Error)("content", !!sherpaData_r11.message ? sherpaData_r11.message : _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 2, "submission.sections.sherpa.error.message"));
  }
}
function SubmissionSectionSherpaPoliciesComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, SubmissionSectionSherpaPoliciesComponent_ng_container_2_ng_container_1_Template, 13, 9, "ng-container", 9)(2, SubmissionSectionSherpaPoliciesComponent_ng_container_2_ng_container_2_Template, 3, 4, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const sherpaData_r11 = ctx.ngVar;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r1.hasNoData() && !!sherpaData_r11 && !sherpaData_r11.error);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !!sherpaData_r11 && sherpaData_r11.error);
  }
}
/**
 * This component represents a section for the sherpa policy informations structure.
 */
class SubmissionSectionSherpaPoliciesComponent extends _models_section_model__WEBPACK_IMPORTED_MODULE_7__.SectionModelComponent {
  /**
   * Initialize instance variables
   *
   * @param {SectionsService} sectionService
   * @param {SectionDataObject} injectedSectionData
   * @param {JsonPatchOperationsBuilder} operationsBuilder
   * @param {SubmissionService} submissionService
   * @param {string} injectedSubmissionId
   */
  constructor(sectionService, operationsBuilder, submissionService, injectedSectionData, injectedSubmissionId) {
    super(undefined, injectedSectionData, injectedSubmissionId);
    this.sectionService = sectionService;
    this.operationsBuilder = operationsBuilder;
    this.submissionService = submissionService;
    this.injectedSectionData = injectedSectionData;
    this.injectedSubmissionId = injectedSubmissionId;
    /**
     * The accesses section data
     * @type {WorkspaceitemSectionAccessesObject}
     */
    this.sherpaPoliciesData$ = new rxjs__WEBPACK_IMPORTED_MODULE_13__.BehaviorSubject(null);
    /**
     * Array to track all subscriptions and unsubscribe them onDestroy
     * @type {Array}
     */
    this.subs = [];
    /**
     * A boolean representing if div should start collapsed
     */
    this.isCollapsed = false;
    /**
     * The AlertType enumeration
     * @type {AlertType}
     */
    this.AlertTypeEnum = _shared_alert_alert_type__WEBPACK_IMPORTED_MODULE_3__.AlertType;
  }
  /**
   * Unsubscribe from all subscriptions
   */
  onSectionDestroy() {
    this.subs.filter(subscription => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_4__.hasValue)(subscription)).forEach(subscription => subscription.unsubscribe());
  }
  /**
   * Initialize all instance variables and retrieve collection default access conditions
   */
  onSectionInit() {
    this.pathCombiner = new _core_json_patch_builder_json_patch_operation_path_combiner__WEBPACK_IMPORTED_MODULE_0__.JsonPatchOperationPathCombiner('sections', this.sectionData.id);
    this.subs.push(this.sectionService.getSectionData(this.submissionId, this.sectionData.id, this.sectionData.sectionType).subscribe(sherpaPolicies => {
      this.sherpaPoliciesData$.next(sherpaPolicies);
    }));
  }
  /**
   * Get section status
   *
   * @return Observable<boolean>
   *     the section status
   */
  getSectionStatus() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.of)(true);
  }
  /**
   * Check if section has no data
   */
  hasNoData() {
    return (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_4__.isEmpty)(this.sherpaPoliciesData$.value);
  }
  /**
   * Refresh sherpa information
   */
  refresh() {
    this.operationsBuilder.remove(this.pathCombiner.getPath('retrievalTime'));
    this.submissionService.dispatchSaveSection(this.submissionId, this.sectionData.id);
  }
  static {
    this.ɵfac = function SubmissionSectionSherpaPoliciesComponent_Factory(t) {
      return new (t || SubmissionSectionSherpaPoliciesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_sections_service__WEBPACK_IMPORTED_MODULE_8__.SectionsService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_core_json_patch_builder_json_patch_operations_builder__WEBPACK_IMPORTED_MODULE_1__.JsonPatchOperationsBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_submission_service__WEBPACK_IMPORTED_MODULE_6__.SubmissionService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"]('sectionDataProvider'), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"]('submissionIdProvider'));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
      type: SubmissionSectionSherpaPoliciesComponent,
      selectors: [["ds-section-sherpa-policies"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵStandaloneFeature"]],
      decls: 4,
      vars: 5,
      consts: [["collapse", "ngbCollapse"], [3, "type", "content", 4, "ngIf"], ["class", "d-flex flex-column flex-nowrap mt-2 mb-4", 4, "ngIf"], [4, "ngVar"], [3, "type", "content"], [1, "d-flex", "flex-column", "flex-nowrap", "mt-2", "mb-4"], [3, "type"], ["type", "button", "data-test", "refresh-btn", 1, "btn", "btn-secondary", "float-right", 3, "click"], [1, "fas", "fa-sync"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["data-test", "collapse", 1, "mb-3", "border-bottom"], [1, "w-100", "d-flex", "justify-content-between", "collapse-toggle", "mb-3", 3, "click"], ["type", "button", "aria-controls", "collapseExample", 1, "btn", "btn-link", "p-0", 3, "click"], [1, "d-inline-block"], ["class", "fas fa-chevron-down", 4, "ngIf"], ["class", "fas fa-chevron-up", 4, "ngIf"], [3, "ngbCollapse"], [3, "metadata"], [3, "journal"], ["class", "mb-3 border-bottom", "data-test", "collapse", 4, "ngFor", "ngForOf"], [1, "fas", "fa-chevron-down"], [1, "fas", "fa-chevron-up"], [3, "policy"]],
      template: function SubmissionSectionSherpaPoliciesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](0, SubmissionSectionSherpaPoliciesComponent_ds_alert_0_Template, 1, 2, "ds-alert", 1)(1, SubmissionSectionSherpaPoliciesComponent_div_1_Template, 10, 7, "div", 2)(2, SubmissionSectionSherpaPoliciesComponent_ng_container_2_Template, 3, 2, "ng-container", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "async");
        }
        if (rf & 2) {
          let tmp_2_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.hasNoData());
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx.hasNoData());
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngVar", (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](3, 3, ctx.sherpaPoliciesData$)) == null ? null : tmp_2_0.sherpaResponse);
        }
      },
      dependencies: [_metadata_information_metadata_information_component__WEBPACK_IMPORTED_MODULE_9__.MetadataInformationComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbCollapseModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbCollapse, _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_2__.AlertComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslatePipe, _publisher_policy_publisher_policy_component__WEBPACK_IMPORTED_MODULE_11__.PublisherPolicyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _publication_information_publication_information_component__WEBPACK_IMPORTED_MODULE_10__.PublicationInformationComponent, _angular_common__WEBPACK_IMPORTED_MODULE_17__.AsyncPipe, _shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_5__.VarDirective, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlY3Rpb24tc2hlcnBhLXBvbGljaWVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBIiwiZmlsZSI6InNlY3Rpb24tc2hlcnBhLXBvbGljaWVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi8iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc3VibWlzc2lvbi9zZWN0aW9ucy9zaGVycGEtcG9saWNpZXMvc2VjdGlvbi1zaGVycGEtcG9saWNpZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQSw0bEJBQTRsQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 94338:
/*!**********************************************************************************************************************!*\
  !*** ./src/app/submission/sections/upload/accessConditions/submission-section-upload-access-conditions.component.ts ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SubmissionSectionUploadAccessConditionsComponent: () => (/* binding */ SubmissionSectionUploadAccessConditionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _core_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/breadcrumbs/dso-name.service */ 96526);
/* harmony import */ var _core_eperson_group_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/eperson/group-data.service */ 44494);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/shared/operators */ 55757);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/empty.util */ 82777);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 90310);








function SubmissionSectionUploadAccessConditionsComponent_ng_container_0_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const accessCondition_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate3"](" ", accessCondition_r1.name, " ", accessCondition_r1.startDate, " ", accessCondition_r1.endDate, " ");
  }
}
function SubmissionSectionUploadAccessConditionsComponent_ng_container_0_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const accessCondition_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", accessCondition_r1.name, " from ", accessCondition_r1.endDate, "");
  }
}
function SubmissionSectionUploadAccessConditionsComponent_ng_container_0_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const accessCondition_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", accessCondition_r1.name, " until ", accessCondition_r1.startDate, "");
  }
}
function SubmissionSectionUploadAccessConditionsComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SubmissionSectionUploadAccessConditionsComponent_ng_container_0_span_1_Template, 2, 3, "span", 1)(2, SubmissionSectionUploadAccessConditionsComponent_ng_container_0_span_2_Template, 2, 2, "span", 1)(3, SubmissionSectionUploadAccessConditionsComponent_ng_container_0_span_3_Template, 2, 2, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const accessCondition_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", accessCondition_r1.action === "DEFAULT_BITSTREAM_READ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", accessCondition_r1.name === "lease");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", accessCondition_r1.name === "embargo");
  }
}
/**
 * This component represents a badge that describe an access condition
 */
class SubmissionSectionUploadAccessConditionsComponent {
  constructor(dsoNameService, groupService) {
    this.dsoNameService = dsoNameService;
    this.groupService = groupService;
    /**
     * The list of access conditions
     * @type {Array}
     */
    this.accessConditionsList = [];
  }
  /**
   * Retrieve access conditions list
   */
  ngOnInit() {
    this.accessConditions.forEach(accessCondition => {
      if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_3__.isEmpty)(accessCondition.name)) {
        this.groupService.findByHref(accessCondition._links.group.href).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_2__.getFirstCompletedRemoteData)()).subscribe(rd => {
          if (rd.hasSucceeded) {
            const group = rd.payload;
            const accessConditionEntry = Object.assign({}, accessCondition);
            accessConditionEntry.name = this.dsoNameService.getName(group);
            this.accessConditionsList.push(accessConditionEntry);
          }
        });
      } else {
        this.accessConditionsList.push(accessCondition);
      }
    });
  }
  static {
    this.ɵfac = function SubmissionSectionUploadAccessConditionsComponent_Factory(t) {
      return new (t || SubmissionSectionUploadAccessConditionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_0__.DSONameService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_eperson_group_data_service__WEBPACK_IMPORTED_MODULE_1__.GroupDataService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: SubmissionSectionUploadAccessConditionsComponent,
      selectors: [["ds-submission-section-upload-access-conditions"]],
      inputs: {
        accessConditions: "accessConditions"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
      decls: 1,
      vars: 1,
      consts: [[4, "ngFor", "ngForOf"], ["class", "badge badge-primary mt-3 mr-2", 4, "ngIf"], ["class", "badge badge-dark mt-3 mr-2", 4, "ngIf"], [1, "badge", "badge-primary", "mt-3", "mr-2"], [1, "badge", "badge-dark", "mt-3", "mr-2"]],
      template: function SubmissionSectionUploadAccessConditionsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, SubmissionSectionUploadAccessConditionsComponent_ng_container_0_Template, 5, 3, "ng-container", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.accessConditionsList);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 82632:
/*!********************************************************************************************!*\
  !*** ./src/app/submission/sections/upload/file/edit/section-upload-file-edit.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SubmissionSectionUploadFileEditComponent: () => (/* binding */ SubmissionSectionUploadFileEditComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-dynamic-forms/core */ 94403);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 78374);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 85687);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 74671);
/* harmony import */ var src_app_shared_form_builder_ds_dynamic_form_ui_models_custom_switch_custom_switch_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/form/builder/ds-dynamic-form-ui/models/custom-switch/custom-switch.model */ 37636);
/* harmony import */ var _core_json_patch_builder_json_patch_operations_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/json-patch/builder/json-patch-operations-builder */ 17184);
/* harmony import */ var _core_submission_submission_json_patch_operations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core/submission/submission-json-patch-operations.service */ 61183);
/* harmony import */ var _shared_btn_disabled_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/btn-disabled.directive */ 60456);
/* harmony import */ var _shared_date_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/date.util */ 63604);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/empty.util */ 82777);
/* harmony import */ var _shared_form_builder_form_builder_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/form/builder/form-builder.service */ 1216);
/* harmony import */ var _shared_form_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/form/form.component */ 99386);
/* harmony import */ var _shared_form_form_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/form/form.service */ 15390);
/* harmony import */ var _submission_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../submission.service */ 61010);
/* harmony import */ var _section_upload_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../section-upload.service */ 84580);
/* harmony import */ var _section_upload_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../section-upload-constants */ 1149);
/* harmony import */ var _section_upload_file_edit_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./section-upload-file-edit.model */ 7366);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 49966);




























const _c0 = ["formRef"];
function SubmissionSectionUploadFileEditComponent_ds_form_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ds-form", 7, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("submitForm", function SubmissionSectionUploadFileEditComponent_ds_form_9_Template_ds_form_submitForm_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.onSubmit());
    })("cancel", function SubmissionSectionUploadFileEditComponent_ds_form_9_Template_ds_form_cancel_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.onModalClose());
    })("dfChange", function SubmissionSectionUploadFileEditComponent_ds_form_9_Template_ds_form_dfChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.onChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("formId", ctx_r1.formId)("formModel", ctx_r1.formModel)("displaySubmit", !ctx_r1.isSaving)("displayCancel", !ctx_r1.isSaving);
  }
}
/**
 * This component represents the edit form for bitstream
 */
class SubmissionSectionUploadFileEditComponent {
  /**
   * Initialize instance variables
   *
   * @param activeModal
   * @param {ChangeDetectorRef} cdr
   * @param {FormBuilderService} formBuilderService
   * @param {FormService} formService
   * @param {SubmissionService} submissionService
   * @param {JsonPatchOperationsBuilder} operationsBuilder
   * @param {SubmissionJsonPatchOperationsService} operationsService
   * @param {SectionUploadService} uploadService
   */
  constructor(activeModal, cdr, formBuilderService, formService, submissionService, operationsBuilder, operationsService, uploadService) {
    this.activeModal = activeModal;
    this.cdr = cdr;
    this.formBuilderService = formBuilderService;
    this.formService = formService;
    this.submissionService = submissionService;
    this.operationsBuilder = operationsBuilder;
    this.operationsService = operationsService;
    this.uploadService = uploadService;
    /**
     * The list of all available metadata
     */
    this.formMetadata = [];
    /**
     * When `true` form controls are deactivated
     */
    this.isSaving = false;
    this.subscriptions = [];
  }
  /**
   * Initialize form model values
   *
   * @param formModel
   *    The form model
   */
  initModelData(formModel) {
    const primaryBitstreamModel = this.formBuilderService.findById('primary', formModel, this.fileIndex);
    primaryBitstreamModel.value = this.isPrimary || false;
    this.fileData.accessConditions.forEach((accessCondition, index) => {
      Array.of('name', 'startDate', 'endDate').filter(key => accessCondition.hasOwnProperty(key) && (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_5__.isNotEmpty)(accessCondition[key])).forEach(key => {
        const metadataModel = this.formBuilderService.findById(key, formModel, index);
        if (metadataModel) {
          if (metadataModel.type === _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_14__.DYNAMIC_FORM_CONTROL_TYPE_DATEPICKER) {
            const date = new Date(accessCondition[key]);
            metadataModel.value = {
              year: date.getUTCFullYear(),
              month: date.getUTCMonth() + 1,
              day: date.getUTCDate()
            };
          } else {
            metadataModel.value = accessCondition[key];
          }
        }
      });
    });
  }
  /**
   * Dispatch form model update when changing an access condition
   *
   * @param event
   *    The event emitted
   */
  onChange(event) {
    if (event.model.id === 'name') {
      this.setOptions(event.model, event.control);
    }
  }
  onModalClose() {
    this.activeModal.dismiss();
  }
  onSubmit() {
    this.isSaving = true;
    this.saveBitstreamData();
  }
  /**
   * Update `startDate`, 'groupUUID' and 'endDate' model
   *
   * @param model
   *    The [[DynamicFormControlModel]] object
   * @param control
   *    The [[FormControl]] object
   */
  setOptions(model, control) {
    let accessCondition = null;
    this.availableAccessConditionOptions.filter(element => element.name === control.value).forEach(element => accessCondition = element);
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_5__.isNotEmpty)(accessCondition)) {
      const startDateControl = control.parent.get('startDate');
      const endDateControl = control.parent.get('endDate');
      // Clear previous state
      startDateControl?.markAsUntouched();
      endDateControl?.markAsUntouched();
      startDateControl?.setValue(null);
      control.parent.markAsDirty();
      endDateControl?.setValue(null);
    }
  }
  /**
   * Dispatch form model init
   */
  ngOnInit() {
    if (this.fileData && this.formId) {
      this.formModel = this.buildFileEditForm();
      this.cdr.detectChanges();
    }
  }
  ngOnDestroy() {
    this.unsubscribeAll();
  }
  retrieveValueFromField(field) {
    const temp = Array.isArray(field) ? field[0] : field;
    return temp ? temp.value : undefined;
  }
  /**
   * Initialize form model
   */
  buildFileEditForm() {
    const configDescr = Object.assign({}, this.configMetadataForm.rows[0].fields[0]);
    configDescr.repeatable = false;
    const configForm = Object.assign({}, this.configMetadataForm, {
      fields: Object.assign([], this.configMetadataForm.rows[0].fields[0], [this.configMetadataForm.rows[0].fields[0], configDescr])
    });
    const formModel = [];
    formModel.push(new src_app_shared_form_builder_ds_dynamic_form_ui_models_custom_switch_custom_switch_model__WEBPACK_IMPORTED_MODULE_0__.DynamicCustomSwitchModel(_section_upload_file_edit_model__WEBPACK_IMPORTED_MODULE_12__.BITSTREAM_FORM_PRIMARY, _section_upload_file_edit_model__WEBPACK_IMPORTED_MODULE_12__.BITSTREAM_FORM_PRIMARY_LAYOUT));
    const metadataGroupModelConfig = Object.assign({}, _section_upload_file_edit_model__WEBPACK_IMPORTED_MODULE_12__.BITSTREAM_METADATA_FORM_GROUP_CONFIG);
    metadataGroupModelConfig.group = this.formBuilderService.modelFromConfiguration(this.submissionId, configForm, this.collectionId, this.fileData.metadata, this.submissionService.getSubmissionScope());
    formModel.push(new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_14__.DynamicFormGroupModel(metadataGroupModelConfig, _section_upload_file_edit_model__WEBPACK_IMPORTED_MODULE_12__.BITSTREAM_METADATA_FORM_GROUP_LAYOUT));
    const accessConditionTypeModelConfig = Object.assign({}, _section_upload_file_edit_model__WEBPACK_IMPORTED_MODULE_12__.BITSTREAM_FORM_ACCESS_CONDITION_TYPE_CONFIG);
    const accessConditionsArrayConfig = Object.assign({}, _section_upload_file_edit_model__WEBPACK_IMPORTED_MODULE_12__.BITSTREAM_ACCESS_CONDITIONS_FORM_ARRAY_CONFIG);
    const accessConditionTypeOptions = [];
    if (this.collectionPolicyType === _section_upload_constants__WEBPACK_IMPORTED_MODULE_11__.POLICY_DEFAULT_WITH_LIST) {
      for (const accessCondition of this.availableAccessConditionOptions) {
        accessConditionTypeOptions.push({
          label: accessCondition.name,
          value: accessCondition.name
        });
      }
      accessConditionTypeModelConfig.options = accessConditionTypeOptions;
      // Dynamically assign of relation in config. For startDate and endDate.
      const startDateCondition = [];
      const endDateCondition = [];
      let maxStartDate;
      let maxEndDate;
      this.availableAccessConditionOptions.forEach(condition => {
        if (condition.hasStartDate) {
          startDateCondition.push({
            id: 'name',
            value: condition.name
          });
          if (condition.maxStartDate) {
            const min = new Date(condition.maxStartDate);
            maxStartDate = {
              year: min.getUTCFullYear(),
              month: min.getUTCMonth() + 1,
              day: min.getUTCDate()
            };
          }
        }
        if (condition.hasEndDate) {
          endDateCondition.push({
            id: 'name',
            value: condition.name
          });
          if (condition.maxEndDate) {
            const max = new Date(condition.maxEndDate);
            maxEndDate = {
              year: max.getUTCFullYear(),
              month: max.getUTCMonth() + 1,
              day: max.getUTCDate()
            };
          }
        }
      });
      const confStart = {
        relations: [{
          match: _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_14__.MATCH_ENABLED,
          operator: _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_14__.OR_OPERATOR,
          when: startDateCondition
        }]
      };
      const confEnd = {
        relations: [{
          match: _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_14__.MATCH_ENABLED,
          operator: _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_14__.OR_OPERATOR,
          when: endDateCondition
        }]
      };
      const hasStartDate = startDateCondition.length > 0;
      const hasEndDate = endDateCondition.length > 0;
      accessConditionsArrayConfig.groupFactory = () => {
        const type = new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_14__.DynamicSelectModel(accessConditionTypeModelConfig, _section_upload_file_edit_model__WEBPACK_IMPORTED_MODULE_12__.BITSTREAM_FORM_ACCESS_CONDITION_TYPE_LAYOUT);
        const startDateConfig = Object.assign({}, _section_upload_file_edit_model__WEBPACK_IMPORTED_MODULE_12__.BITSTREAM_FORM_ACCESS_CONDITION_START_DATE_CONFIG, confStart);
        if (maxStartDate) {
          startDateConfig.max = maxStartDate;
        }
        const endDateConfig = Object.assign({}, _section_upload_file_edit_model__WEBPACK_IMPORTED_MODULE_12__.BITSTREAM_FORM_ACCESS_CONDITION_END_DATE_CONFIG, confEnd);
        if (maxEndDate) {
          endDateConfig.max = maxEndDate;
        }
        const startDate = new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_14__.DynamicDatePickerModel(startDateConfig, _section_upload_file_edit_model__WEBPACK_IMPORTED_MODULE_12__.BITSTREAM_FORM_ACCESS_CONDITION_START_DATE_LAYOUT);
        const endDate = new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_14__.DynamicDatePickerModel(endDateConfig, _section_upload_file_edit_model__WEBPACK_IMPORTED_MODULE_12__.BITSTREAM_FORM_ACCESS_CONDITION_END_DATE_LAYOUT);
        const accessConditionGroupConfig = Object.assign({}, _section_upload_file_edit_model__WEBPACK_IMPORTED_MODULE_12__.BITSTREAM_ACCESS_CONDITION_GROUP_CONFIG);
        accessConditionGroupConfig.group = [type];
        if (hasStartDate) {
          accessConditionGroupConfig.group.push(startDate);
        }
        if (hasEndDate) {
          accessConditionGroupConfig.group.push(endDate);
        }
        return [new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_14__.DynamicFormGroupModel(accessConditionGroupConfig, _section_upload_file_edit_model__WEBPACK_IMPORTED_MODULE_12__.BITSTREAM_ACCESS_CONDITION_GROUP_LAYOUT)];
      };
      // Number of access conditions blocks in form
      accessConditionsArrayConfig.initialCount = (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_5__.isNotEmpty)(this.fileData.accessConditions) ? this.fileData.accessConditions.length : 1;
      formModel.push(new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_14__.DynamicFormArrayModel(accessConditionsArrayConfig, _section_upload_file_edit_model__WEBPACK_IMPORTED_MODULE_12__.BITSTREAM_ACCESS_CONDITIONS_FORM_ARRAY_LAYOUT));
    }
    this.initModelData(formModel);
    return formModel;
  }
  /**
   * Save bitstream metadata
   */
  saveBitstreamData() {
    const pathFragment = ['files', this.fileIndex];
    // validate form
    this.formService.validateAllFormFields(this.formRef.formGroup);
    const saveBitstreamDataSubscription = this.formService.isValid(this.formId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.filter)(isValid => isValid), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.mergeMap)(() => this.formService.getFormData(this.formId)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.mergeMap)(formData => {
      this.uploadService.updatePrimaryBitstreamOperation(this.pathCombiner.getPath('primary'), this.isPrimary, formData.primary[0], this.fileId);
      // collect bitstream metadata
      Object.keys(formData.metadata).filter(key => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_5__.isNotEmpty)(formData.metadata[key])).forEach(key => {
        const metadataKey = key.replace(/_/g, '.');
        const path = `metadata/${metadataKey}`;
        this.operationsBuilder.add(this.pathCombiner.getPath([...pathFragment, path]), formData.metadata[key], true);
      });
      Object.keys(this.fileData.metadata).filter(key => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_5__.isNotEmpty)(this.fileData.metadata[key])).filter(key => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_5__.hasNoValue)(formData.metadata[key])).filter(key => this.formMetadata.includes(key)).forEach(key => {
        const metadataKey = key.replace(/_/g, '.');
        const path = `metadata/${metadataKey}`;
        this.operationsBuilder.remove(this.pathCombiner.getPath([...pathFragment, path]));
      });
      const accessConditionsToSave = [];
      if (formData.hasOwnProperty('accessConditions')) {
        formData.accessConditions.filter(accessConditions => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_5__.isNotNull)(accessConditions)).map(accessConditions => accessConditions.accessConditionGroup).filter(accessCondition => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_5__.isNotEmpty)(accessCondition)).forEach(accessCondition => {
          let accessConditionOpt;
          this.availableAccessConditionOptions.filter(element => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_5__.isNotNull)(accessCondition.name) && element.name === accessCondition.name[0].value).forEach(element => accessConditionOpt = element);
          if (accessConditionOpt) {
            const currentAccessCondition = Object.assign({}, accessCondition);
            currentAccessCondition.name = this.retrieveValueFromField(accessCondition.name);
            /* When start and end date fields are deactivated, their values may be still present in formData,
            therefore it is necessary to delete them if they're not allowed by the current access condition option. */
            if (!accessConditionOpt.hasStartDate) {
              delete currentAccessCondition.startDate;
            } else if (accessCondition.startDate) {
              const startDate = this.retrieveValueFromField(accessCondition.startDate);
              // Clamp the start date to the maximum, if any, since the
              // datepicker sometimes exceeds it.
              let startDateDate = new Date(startDate);
              if (accessConditionOpt.maxStartDate) {
                const maxStartDateDate = new Date(accessConditionOpt.maxStartDate);
                if (startDateDate > maxStartDateDate) {
                  startDateDate = maxStartDateDate;
                }
              }
              currentAccessCondition.startDate = (0,_shared_date_util__WEBPACK_IMPORTED_MODULE_4__.dateToISOFormat)(startDateDate);
            }
            if (!accessConditionOpt.hasEndDate) {
              delete currentAccessCondition.endDate;
            } else if (accessCondition.endDate) {
              const endDate = this.retrieveValueFromField(accessCondition.endDate);
              // Clamp the end date to the maximum, if any, since the
              // datepicker sometimes exceeds it.
              let endDateDate = new Date(endDate);
              if (accessConditionOpt.maxEndDate) {
                const maxEndDateDate = new Date(accessConditionOpt.maxEndDate);
                if (endDateDate > maxEndDateDate) {
                  endDateDate = maxEndDateDate;
                }
              }
              currentAccessCondition.endDate = (0,_shared_date_util__WEBPACK_IMPORTED_MODULE_4__.dateToISOFormat)(endDateDate);
            }
            accessConditionsToSave.push(currentAccessCondition);
          }
        });
      }
      if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_5__.isNotEmpty)(accessConditionsToSave)) {
        this.operationsBuilder.add(this.pathCombiner.getPath([...pathFragment, 'accessConditions']), accessConditionsToSave, true);
      }
      // dispatch a PATCH request to save metadata
      return this.operationsService.jsonPatchByResourceID(this.submissionService.getSubmissionObjectLinkName(), this.submissionId, this.pathCombiner.rootElement, this.pathCombiner.subRootElement);
    })).subscribe(result => {
      const section = result[0].sections[this.sectionId];
      if (!section) {
        return;
      }
      const uploadSection = section;
      this.uploadService.updateFilePrimaryBitstream(this.submissionId, this.sectionId, uploadSection.primary);
      Object.keys(uploadSection.files).filter(key => uploadSection.files[key].uuid === this.fileId).forEach(key => this.uploadService.updateFileData(this.submissionId, this.sectionId, this.fileId, uploadSection.files[key]));
      this.isSaving = false;
      this.activeModal.close();
    });
    this.subscriptions.push(saveBitstreamDataSubscription);
  }
  unsubscribeAll() {
    this.subscriptions.filter(sub => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_5__.hasValue)(sub)).forEach(sub => sub.unsubscribe());
  }
  static {
    this.ɵfac = function SubmissionSectionUploadFileEditComponent_Factory(t) {
      return new (t || SubmissionSectionUploadFileEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_13__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_shared_form_builder_form_builder_service__WEBPACK_IMPORTED_MODULE_6__.FormBuilderService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_shared_form_form_service__WEBPACK_IMPORTED_MODULE_8__.FormService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_submission_service__WEBPACK_IMPORTED_MODULE_9__.SubmissionService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_core_json_patch_builder_json_patch_operations_builder__WEBPACK_IMPORTED_MODULE_1__.JsonPatchOperationsBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_core_submission_submission_json_patch_operations_service__WEBPACK_IMPORTED_MODULE_2__.SubmissionJsonPatchOperationsService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_section_upload_service__WEBPACK_IMPORTED_MODULE_10__.SectionUploadService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
      type: SubmissionSectionUploadFileEditComponent,
      selectors: [["ds-submission-section-upload-file-edit"]],
      viewQuery: function SubmissionSectionUploadFileEditComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.formRef = _t.first);
        }
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵStandaloneFeature"]],
      decls: 10,
      vars: 5,
      consts: [["formRef", "formComponent"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click", "dsBtnDisabled"], ["aria-hidden", "true"], [1, "modal-body"], [3, "formId", "formModel", "displaySubmit", "displayCancel", "submitForm", "cancel", "dfChange", 4, "ngIf"], [3, "submitForm", "cancel", "dfChange", "formId", "formModel", "displaySubmit", "displayCancel"]],
      template: function SubmissionSectionUploadFileEditComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div")(1, "div", 1)(2, "h4", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](4, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function SubmissionSectionUploadFileEditComponent_Template_button_click_5_listener() {
            return ctx.onModalClose();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](7, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](9, SubmissionSectionUploadFileEditComponent_ds_form_9_Template, 2, 4, "ds-form", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](4, 3, "submission.sections.upload.edit.title"));
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("dsBtnDisabled", ctx.isSaving);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.formModel);
        }
      },
      dependencies: [_shared_form_form_component__WEBPACK_IMPORTED_MODULE_7__.FormComponent, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__.TranslatePipe, _shared_btn_disabled_directive__WEBPACK_IMPORTED_MODULE_3__.BtnDisabledDirective],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n  .access-condition-group {\n  position: relative;\n  top: -2.3rem;\n  margin-bottom: -2.3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlY3Rpb24tdXBsb2FkLWZpbGUtZWRpdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUFDRiIsImZpbGUiOiJzZWN0aW9uLXVwbG9hZC1maWxlLWVkaXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqL1xuOjpuZy1kZWVwIC5hY2Nlc3MtY29uZGl0aW9uLWdyb3VwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0yLjNyZW07XG4gIG1hcmdpbi1ib3R0b206IC0yLjNyZW07XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc3VibWlzc2lvbi9zZWN0aW9ucy91cGxvYWQvZmlsZS9lZGl0L3NlY3Rpb24tdXBsb2FkLWZpbGUtZWRpdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUFDRjtBQUNBLG95QkFBb3lCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi9cbjo6bmctZGVlcCAuYWNjZXNzLWNvbmRpdGlvbi1ncm91cCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMi4zcmVtO1xuICBtYXJnaW4tYm90dG9tOiAtMi4zcmVtO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 7366:
/*!****************************************************************************************!*\
  !*** ./src/app/submission/sections/upload/file/edit/section-upload-file-edit.model.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BITSTREAM_ACCESS_CONDITIONS_FORM_ARRAY_CONFIG: () => (/* binding */ BITSTREAM_ACCESS_CONDITIONS_FORM_ARRAY_CONFIG),
/* harmony export */   BITSTREAM_ACCESS_CONDITIONS_FORM_ARRAY_LAYOUT: () => (/* binding */ BITSTREAM_ACCESS_CONDITIONS_FORM_ARRAY_LAYOUT),
/* harmony export */   BITSTREAM_ACCESS_CONDITION_GROUP_CONFIG: () => (/* binding */ BITSTREAM_ACCESS_CONDITION_GROUP_CONFIG),
/* harmony export */   BITSTREAM_ACCESS_CONDITION_GROUP_LAYOUT: () => (/* binding */ BITSTREAM_ACCESS_CONDITION_GROUP_LAYOUT),
/* harmony export */   BITSTREAM_FORM_ACCESS_CONDITION_END_DATE_CONFIG: () => (/* binding */ BITSTREAM_FORM_ACCESS_CONDITION_END_DATE_CONFIG),
/* harmony export */   BITSTREAM_FORM_ACCESS_CONDITION_END_DATE_LAYOUT: () => (/* binding */ BITSTREAM_FORM_ACCESS_CONDITION_END_DATE_LAYOUT),
/* harmony export */   BITSTREAM_FORM_ACCESS_CONDITION_START_DATE_CONFIG: () => (/* binding */ BITSTREAM_FORM_ACCESS_CONDITION_START_DATE_CONFIG),
/* harmony export */   BITSTREAM_FORM_ACCESS_CONDITION_START_DATE_LAYOUT: () => (/* binding */ BITSTREAM_FORM_ACCESS_CONDITION_START_DATE_LAYOUT),
/* harmony export */   BITSTREAM_FORM_ACCESS_CONDITION_TYPE_CONFIG: () => (/* binding */ BITSTREAM_FORM_ACCESS_CONDITION_TYPE_CONFIG),
/* harmony export */   BITSTREAM_FORM_ACCESS_CONDITION_TYPE_LAYOUT: () => (/* binding */ BITSTREAM_FORM_ACCESS_CONDITION_TYPE_LAYOUT),
/* harmony export */   BITSTREAM_FORM_PRIMARY: () => (/* binding */ BITSTREAM_FORM_PRIMARY),
/* harmony export */   BITSTREAM_FORM_PRIMARY_LAYOUT: () => (/* binding */ BITSTREAM_FORM_PRIMARY_LAYOUT),
/* harmony export */   BITSTREAM_METADATA_FORM_GROUP_CONFIG: () => (/* binding */ BITSTREAM_METADATA_FORM_GROUP_CONFIG),
/* harmony export */   BITSTREAM_METADATA_FORM_GROUP_LAYOUT: () => (/* binding */ BITSTREAM_METADATA_FORM_GROUP_LAYOUT)
/* harmony export */ });
/* harmony import */ var _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-dynamic-forms/core */ 94403);

const BITSTREAM_METADATA_FORM_GROUP_CONFIG = {
  id: 'metadata',
  group: []
};
const BITSTREAM_METADATA_FORM_GROUP_LAYOUT = {
  element: {
    container: 'form-group',
    label: 'col-form-label'
  },
  grid: {
    label: 'col-sm-3'
  }
};
const BITSTREAM_ACCESS_CONDITION_GROUP_CONFIG = {
  id: 'accessConditionGroup',
  group: []
};
const BITSTREAM_ACCESS_CONDITION_GROUP_LAYOUT = {
  element: {
    host: 'form-group access-condition-group col',
    container: 'pl-1 pr-1',
    control: 'form-row '
  }
};
const BITSTREAM_ACCESS_CONDITIONS_FORM_ARRAY_CONFIG = {
  id: 'accessConditions',
  groupFactory: null
};
const BITSTREAM_ACCESS_CONDITIONS_FORM_ARRAY_LAYOUT = {
  grid: {
    group: 'form-row pt-4'
  }
};
const BITSTREAM_FORM_ACCESS_CONDITION_TYPE_CONFIG = {
  id: 'name',
  label: 'submission.sections.upload.form.access-condition-label',
  hint: 'submission.sections.upload.form.access-condition-hint',
  options: []
};
const BITSTREAM_FORM_ACCESS_CONDITION_TYPE_LAYOUT = {
  element: {
    host: 'col-12',
    label: 'col-form-label name-label'
  }
};
const BITSTREAM_FORM_PRIMARY_LAYOUT = {
  element: {
    host: 'col-12',
    container: 'text-right'
  }
};
const BITSTREAM_FORM_PRIMARY = {
  id: 'primary',
  name: 'primary',
  label: 'bitstream.edit.form.primaryBitstream.label'
};
const BITSTREAM_FORM_ACCESS_CONDITION_START_DATE_CONFIG = {
  id: 'startDate',
  label: 'submission.sections.upload.form.from-label',
  hint: 'submission.sections.upload.form.from-hint',
  placeholder: 'submission.sections.upload.form.from-placeholder',
  inline: false,
  toggleIcon: 'far fa-calendar-alt',
  relations: [{
    match: _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__.MATCH_ENABLED,
    operator: _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__.OR_OPERATOR,
    when: []
  }],
  required: true,
  validators: {
    required: null
  },
  errorMessages: {
    required: 'submission.sections.upload.form.date-required-from'
  }
};
const BITSTREAM_FORM_ACCESS_CONDITION_START_DATE_LAYOUT = {
  element: {
    label: 'col-form-label'
  },
  grid: {
    host: 'col-6'
  }
};
const BITSTREAM_FORM_ACCESS_CONDITION_END_DATE_CONFIG = {
  id: 'endDate',
  label: 'submission.sections.upload.form.until-label',
  hint: 'submission.sections.upload.form.until-hint',
  placeholder: 'submission.sections.upload.form.until-placeholder',
  inline: false,
  toggleIcon: 'far fa-calendar-alt',
  relations: [{
    match: _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__.MATCH_ENABLED,
    operator: _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__.OR_OPERATOR,
    when: []
  }],
  required: true,
  validators: {
    required: null
  },
  errorMessages: {
    required: 'submission.sections.upload.form.date-required-until'
  }
};
const BITSTREAM_FORM_ACCESS_CONDITION_END_DATE_LAYOUT = {
  element: {
    label: 'col-form-label'
  },
  grid: {
    host: 'col-6'
  }
};

/***/ }),

/***/ 96258:
/*!**********************************************************************************!*\
  !*** ./src/app/submission/sections/upload/file/section-upload-file.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SubmissionSectionUploadFileComponent: () => (/* binding */ SubmissionSectionUploadFileComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 83485);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 85687);
/* harmony import */ var _core_config_models_config_submission_forms_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/config/models/config-submission-forms.model */ 71926);
/* harmony import */ var _core_json_patch_builder_json_patch_operation_path_combiner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/json-patch/builder/json-patch-operation-path-combiner */ 92409);
/* harmony import */ var _core_json_patch_builder_json_patch_operations_builder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/json-patch/builder/json-patch-operations-builder */ 17184);
/* harmony import */ var _core_shared_bitstream_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/shared/bitstream.model */ 33376);
/* harmony import */ var _core_submission_submission_json_patch_operations_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/submission/submission-json-patch-operations.service */ 61183);
/* harmony import */ var _shared_btn_disabled_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/btn-disabled.directive */ 60456);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/empty.util */ 82777);
/* harmony import */ var _shared_file_download_link_themed_file_download_link_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/file-download-link/themed-file-download-link.component */ 28836);
/* harmony import */ var _shared_form_form_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/form/form.service */ 15390);
/* harmony import */ var _submission_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../submission.service */ 61010);
/* harmony import */ var _section_upload_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../section-upload.service */ 84580);
/* harmony import */ var _edit_section_upload_file_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./edit/section-upload-file-edit.component */ 82632);
/* harmony import */ var _view_section_upload_file_view_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./view/section-upload-file-view.component */ 79674);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 49966);



























const _c0 = a0 => ({
  fileName: a0
});
function SubmissionSectionUploadFileComponent_ng_container_0_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](2, 1, "submission.sections.upload.primary.make", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](4, _c0, ctx_r1.fileName)));
  }
}
function SubmissionSectionUploadFileComponent_ng_container_0_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](2, 1, "submission.sections.upload.primary.remove", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](4, _c0, ctx_r1.fileName)));
  }
}
function SubmissionSectionUploadFileComponent_ng_container_0_i_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "i", 21);
  }
}
function SubmissionSectionUploadFileComponent_ng_container_0_i_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "i", 22);
  }
}
function SubmissionSectionUploadFileComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("change", function SubmissionSectionUploadFileComponent_ng_container_0_Template_input_change_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.togglePrimaryBitstream($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](7, SubmissionSectionUploadFileComponent_ng_container_0_span_7_Template, 3, 6, "span", 7)(8, SubmissionSectionUploadFileComponent_ng_container_0_span_8_Template, 3, 6, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "div", 8)(10, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](11, "ds-submission-section-upload-file-view", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](14, "ds-file-download-link", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](15, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](16, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function SubmissionSectionUploadFileComponent_ng_container_0_Template_button_click_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      $event.preventDefault();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.editBitstreamData());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](19, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](22, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function SubmissionSectionUploadFileComponent_ng_container_0_Template_button_click_20_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      const content_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](2);
      $event.preventDefault();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.confirmDelete(content_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](24, SubmissionSectionUploadFileComponent_ng_container_0_i_24_Template, 1, 0, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](25, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](26, SubmissionSectionUploadFileComponent_ng_container_0_i_26_Template, 1, 0, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](27, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](28, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate1"]("id", "primaryBitstream", ctx_r1.fileIndex, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](5, 20, ctx_r1.processingSaveStatus$))("checked", ctx_r1.isPrimary);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate1"]("for", "primaryBitstream", ctx_r1.fileIndex, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx_r1.isPrimary);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.isPrimary);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("fileData", ctx_r1.fileData);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("cssClasses", "btn btn-link-focus")("isBlank", true)("bitstream", ctx_r1.getBitstream())("enableRequestACopy", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](17, 22, "submission.sections.upload.edit.title"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](18, 24, "submission.sections.upload.edit.title"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](21, 26, "submission.sections.upload.delete.confirm.title"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("dsBtnDisabled", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](22, 28, ctx_r1.processingDelete$));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](23, 30, "submission.sections.upload.delete.confirm.title"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](25, 32, ctx_r1.processingDelete$));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](27, 34, ctx_r1.processingDelete$) !== true);
  }
}
function SubmissionSectionUploadFileComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 23)(1, "h4", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function SubmissionSectionUploadFileComponent_ng_template_1_Template_button_click_4_listener() {
      const d_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r4).dismiss;
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](d_r5("cancel"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "div", 27)(8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](11, "div", 28)(12, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function SubmissionSectionUploadFileComponent_ng_template_1_Template_button_click_12_listener() {
      const c_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r4).close;
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](c_r6("cancel"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](15, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function SubmissionSectionUploadFileComponent_ng_template_1_Template_button_click_15_listener() {
      const c_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r4).close;
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](c_r6("ok"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](3, 4, "submission.sections.upload.delete.confirm.title"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](10, 6, "submission.sections.upload.delete.confirm.info"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](14, 8, "submission.sections.upload.delete.confirm.cancel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](17, 10, "submission.sections.upload.delete.confirm.submit"));
  }
}
/**
 * This component represents a single bitstream contained in the submission
 */
class SubmissionSectionUploadFileComponent {
  /**
   * Initialize instance variables
   *
   * @param {ChangeDetectorRef} cdr
   * @param {FormService} formService
   * @param {HALEndpointService} halService
   * @param {NgbModal} modalService
   * @param {JsonPatchOperationsBuilder} operationsBuilder
   * @param {SubmissionJsonPatchOperationsService} operationsService
   * @param {SubmissionService} submissionService
   * @param {SectionUploadService} uploadService
   */
  constructor(formService, modalService, operationsBuilder, operationsService, submissionService, uploadService) {
    this.formService = formService;
    this.modalService = modalService;
    this.operationsBuilder = operationsBuilder;
    this.operationsService = operationsService;
    this.submissionService = submissionService;
    this.uploadService = uploadService;
    /**
     * A boolean representing if a submission delete operation is pending
     * @type {BehaviorSubject<boolean>}
     */
    this.processingDelete$ = new rxjs__WEBPACK_IMPORTED_MODULE_14__.BehaviorSubject(false);
    /**
     * Array to track all subscriptions and unsubscribe them onDestroy
     * @type {Array}
     */
    this.subscriptions = [];
    /**
     * Array containing all the form metadata defined in configMetadataForm
     * @type {Array}
     */
    this.formMetadata = [];
    this.readMode = true;
  }
  /**
   * Retrieve bitstream's metadata
   */
  ngOnChanges(changes) {
    if (this.availableAccessConditionOptions) {
      // Retrieve file state
      this.subscriptions.push(this.uploadService.getFileData(this.submissionId, this.sectionId, this.fileId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.filter)(bitstream => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_6__.isNotUndefined)(bitstream))).subscribe(bitstream => {
        this.fileData = bitstream;
      }));
    }
  }
  /**
   * Initialize instance variables
   */
  ngOnInit() {
    this.formId = this.formService.getUniqueId(this.fileId);
    this.processingSaveStatus$ = this.submissionService.getSubmissionSaveProcessingStatus(this.submissionId);
    this.pathCombiner = new _core_json_patch_builder_json_patch_operation_path_combiner__WEBPACK_IMPORTED_MODULE_1__.JsonPatchOperationPathCombiner('sections', this.sectionId);
    this.loadFormMetadata();
  }
  /**
   * Show confirmation dialog for delete
   */
  confirmDelete(content) {
    this.modalService.open(content).result.then(result => {
      if (result === 'ok') {
        this.processingDelete$.next(true);
        this.deleteFile();
      }
    });
  }
  /**
   * Build a Bitstream object by the current file uuid
   *
   * @return Bitstream object
   */
  getBitstream() {
    return Object.assign(new _core_shared_bitstream_model__WEBPACK_IMPORTED_MODULE_3__.Bitstream(), {
      uuid: this.fileData.uuid
    });
  }
  editBitstreamData() {
    const options = {
      size: 'xl',
      backdrop: 'static'
    };
    const activeModal = this.modalService.open(_edit_section_upload_file_edit_component__WEBPACK_IMPORTED_MODULE_11__.SubmissionSectionUploadFileEditComponent, options);
    activeModal.componentInstance.availableAccessConditionOptions = this.availableAccessConditionOptions;
    activeModal.componentInstance.collectionId = this.collectionId;
    activeModal.componentInstance.collectionPolicyType = this.collectionPolicyType;
    activeModal.componentInstance.configMetadataForm = this.configMetadataForm;
    activeModal.componentInstance.fileData = this.fileData;
    activeModal.componentInstance.fileId = this.fileId;
    activeModal.componentInstance.fileIndex = this.fileIndex;
    activeModal.componentInstance.formId = this.formId;
    activeModal.componentInstance.sectionId = this.sectionId;
    activeModal.componentInstance.formMetadata = this.formMetadata;
    activeModal.componentInstance.pathCombiner = this.pathCombiner;
    activeModal.componentInstance.submissionId = this.submissionId;
    activeModal.componentInstance.isPrimary = this.isPrimary;
  }
  togglePrimaryBitstream(event) {
    this.uploadService.updatePrimaryBitstreamOperation(this.pathCombiner.getPath('primary'), this.isPrimary, event.target.checked, this.fileId);
    this.submissionService.dispatchSaveSection(this.submissionId, this.sectionId);
  }
  ngOnDestroy() {
    this.unsubscribeAll();
  }
  unsubscribeAll() {
    this.subscriptions.filter(sub => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_6__.hasValue)(sub)).forEach(sub => sub.unsubscribe());
  }
  loadFormMetadata() {
    this.configMetadataForm.rows.forEach(row => {
      row.fields.forEach(field => {
        field.selectableMetadata.forEach(metadatum => {
          this.formMetadata.push(metadatum.metadata);
        });
      });
    });
  }
  /**
   * Delete bitstream from submission
   */
  deleteFile() {
    this.operationsBuilder.remove(this.pathCombiner.getPath(['files', this.fileIndex]));
    if (this.isPrimary) {
      this.operationsBuilder.remove(this.pathCombiner.getPath('primary'));
    }
    this.subscriptions.push(this.operationsService.jsonPatchByResourceID(this.submissionService.getSubmissionObjectLinkName(), this.submissionId, this.pathCombiner.rootElement, this.pathCombiner.subRootElement).subscribe(() => {
      if (this.isPrimary) {
        this.uploadService.updateFilePrimaryBitstream(this.submissionId, this.sectionId, null);
      }
      this.uploadService.removeUploadedFile(this.submissionId, this.sectionId, this.fileId);
      this.processingDelete$.next(false);
    }));
  }
  static {
    this.ɵfac = function SubmissionSectionUploadFileComponent_Factory(t) {
      return new (t || SubmissionSectionUploadFileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_shared_form_form_service__WEBPACK_IMPORTED_MODULE_8__.FormService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_core_json_patch_builder_json_patch_operations_builder__WEBPACK_IMPORTED_MODULE_2__.JsonPatchOperationsBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_core_submission_submission_json_patch_operations_service__WEBPACK_IMPORTED_MODULE_4__.SubmissionJsonPatchOperationsService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_submission_service__WEBPACK_IMPORTED_MODULE_9__.SubmissionService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_section_upload_service__WEBPACK_IMPORTED_MODULE_10__.SectionUploadService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
      type: SubmissionSectionUploadFileComponent,
      selectors: [["ds-base-submission-upload-section-file"]],
      viewQuery: function SubmissionSectionUploadFileComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_edit_section_upload_file_edit_component__WEBPACK_IMPORTED_MODULE_11__.SubmissionSectionUploadFileEditComponent, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.fileEditComp = _t.first);
        }
      },
      inputs: {
        isPrimary: "isPrimary",
        availableAccessConditionOptions: "availableAccessConditionOptions",
        collectionId: "collectionId",
        collectionPolicyType: "collectionPolicyType",
        configMetadataForm: "configMetadataForm",
        fileId: "fileId",
        fileIndex: "fileIndex",
        fileName: "fileName",
        sectionId: "sectionId",
        submissionId: "submissionId"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵStandaloneFeature"]],
      decls: 3,
      vars: 1,
      consts: [["content", ""], [4, "ngIf"], [1, "row"], [1, "col-md-2", "d-flex", "justify-content-center", "align-items-center"], [1, "custom-control", "custom-switch"], ["type", "checkbox", 1, "custom-control-input", 3, "change", "id", "disabled", "checked"], [1, "custom-control-label", 3, "for"], ["class", "sr-only", 4, "ngIf"], [1, "col-md-10"], [1, "float-left", "w-75"], [3, "fileData"], [1, "float-right", "w-15"], [3, "cssClasses", "isBlank", "bitstream", "enableRequestACopy"], ["aria-hidden", "true", 1, "fa", "fa-download", "fa-2x", "text-normal"], [1, "btn", "btn-link-focus", 3, "click", "title"], [1, "fa", "fa-edit", "fa-2x", "text-normal"], [1, "btn", "btn-link-focus", 3, "click", "title", "dsBtnDisabled"], ["class", "fas fa-circle-notch fa-spin fa-2x text-danger", 4, "ngIf"], ["class", "fa fa-trash fa-2x text-danger", 4, "ngIf"], [1, "clearfix"], [1, "sr-only"], [1, "fas", "fa-circle-notch", "fa-spin", "fa-2x", "text-danger"], [1, "fa", "fa-trash", "fa-2x", "text-danger"], [1, "modal-header"], [1, "modal-title", "text-danger"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-danger", 3, "click"]],
      template: function SubmissionSectionUploadFileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](0, SubmissionSectionUploadFileComponent_ng_container_0_Template, 29, 36, "ng-container", 1)(1, SubmissionSectionUploadFileComponent_ng_template_1_Template, 18, 12, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.fileData);
        }
      },
      dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslatePipe, _view_section_upload_file_view_component__WEBPACK_IMPORTED_MODULE_12__.SubmissionSectionUploadFileViewComponent, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_18__.AsyncPipe, _shared_file_download_link_themed_file_download_link_component__WEBPACK_IMPORTED_MODULE_7__.ThemedFileDownloadLinkComponent, _shared_btn_disabled_directive__WEBPACK_IMPORTED_MODULE_5__.BtnDisabledDirective],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlY3Rpb24tdXBsb2FkLWZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUEiLCJmaWxlIjoic2VjdGlvbi11cGxvYWQtZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc3VibWlzc2lvbi9zZWN0aW9ucy91cGxvYWQvZmlsZS9zZWN0aW9uLXVwbG9hZC1maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBO0FBQ0EsZ2xCQUFnbEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqLyJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 11468:
/*!*****************************************************************************************!*\
  !*** ./src/app/submission/sections/upload/file/themed-section-upload-file.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemedSubmissionSectionUploadFileComponent: () => (/* binding */ ThemedSubmissionSectionUploadFileComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_config_models_config_submission_forms_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/config/models/config-submission-forms.model */ 71926);
/* harmony import */ var src_app_shared_theme_support_themed_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/theme-support/themed.component */ 8886);
/* harmony import */ var _section_upload_file_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./section-upload-file.component */ 96258);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 90310);




const _c0 = ["*"];
function ThemedSubmissionSectionUploadFileComponent_ng_template_0_Template(rf, ctx) {}
class ThemedSubmissionSectionUploadFileComponent extends src_app_shared_theme_support_themed_component__WEBPACK_IMPORTED_MODULE_1__.ThemedComponent {
  constructor() {
    super(...arguments);
    this.inAndOutputNames = ['availableAccessConditionOptions', 'isPrimary', 'collectionId', 'collectionPolicyType', 'configMetadataForm', 'fileId', 'fileIndex', 'fileName', 'sectionId', 'submissionId'];
  }
  getComponentName() {
    return 'SubmissionSectionUploadFileComponent';
  }
  importThemedComponent(themeName) {
    return __webpack_require__(96682)(`./${themeName}/app/submission/sections/upload/file/section-upload-file.component`);
  }
  importUnthemedComponent() {
    return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./section-upload-file.component */ 96258));
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵThemedSubmissionSectionUploadFileComponent_BaseFactory;
      return function ThemedSubmissionSectionUploadFileComponent_Factory(t) {
        return (ɵThemedSubmissionSectionUploadFileComponent_BaseFactory || (ɵThemedSubmissionSectionUploadFileComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](ThemedSubmissionSectionUploadFileComponent)))(t || ThemedSubmissionSectionUploadFileComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: ThemedSubmissionSectionUploadFileComponent,
      selectors: [["ds-submission-upload-section-file"]],
      inputs: {
        availableAccessConditionOptions: "availableAccessConditionOptions",
        isPrimary: "isPrimary",
        collectionId: "collectionId",
        collectionPolicyType: "collectionPolicyType",
        configMetadataForm: "configMetadataForm",
        fileId: "fileId",
        fileIndex: "fileIndex",
        fileName: "fileName",
        sectionId: "sectionId",
        submissionId: "submissionId"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
      ngContentSelectors: _c0,
      decls: 5,
      vars: 0,
      consts: [["vcr", ""], ["content", ""]],
      template: function ThemedSubmissionSectionUploadFileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ThemedSubmissionSectionUploadFileComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", null, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      },
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 79674:
/*!********************************************************************************************!*\
  !*** ./src/app/submission/sections/upload/file/view/section-upload-file-view.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SubmissionSectionUploadFileViewComponent: () => (/* binding */ SubmissionSectionUploadFileViewComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var _core_shared_metadata_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/shared/metadata.utils */ 39552);
/* harmony import */ var _core_submission_models_workspaceitem_section_upload_file_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/submission/models/workspaceitem-section-upload-file.model */ 34376);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/empty.util */ 82777);
/* harmony import */ var _shared_utils_file_size_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/utils/file-size-pipe */ 43525);
/* harmony import */ var _shared_utils_truncate_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/utils/truncate.pipe */ 61228);
/* harmony import */ var _accessConditions_submission_section_upload_access_conditions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../accessConditions/submission-section-upload-access-conditions.component */ 94338);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 90310);










const _c0 = () => ["150"];
const _c1 = a0 => ({
  format: a0
});
function SubmissionSectionUploadFileViewComponent_ng_container_1_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "dsFileSize");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const entry_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", entry_r1.value, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("(", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 2, ctx_r1.fileData == null ? null : ctx_r1.fileData.sizeBytes), ")");
  }
}
function SubmissionSectionUploadFileViewComponent_ng_container_1_ng_container_1_ng_container_2_h5_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h5")(1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 2, "submission.sections.upload.no-entry"), " ", ctx_r1.fileTitleKey, "");
  }
}
function SubmissionSectionUploadFileViewComponent_ng_container_1_ng_container_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, SubmissionSectionUploadFileViewComponent_ng_container_1_ng_container_1_ng_container_2_h5_1_Template, 4, 4, "h5", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const entry_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.metadata[ctx_r1.fileTitleKey].indexOf(entry_r1) === 0);
  }
}
function SubmissionSectionUploadFileViewComponent_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, SubmissionSectionUploadFileViewComponent_ng_container_1_ng_container_1_ng_container_1_Template, 6, 4, "ng-container", 0)(2, SubmissionSectionUploadFileViewComponent_ng_container_1_ng_container_1_ng_container_2_Template, 2, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const entry_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", entry_r1.value !== "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", entry_r1.value === "");
  }
}
function SubmissionSectionUploadFileViewComponent_ng_container_1_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "dsTruncate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const entry_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](2, 1, entry_r3.value, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](4, _c0)), " ");
  }
}
function SubmissionSectionUploadFileViewComponent_ng_container_1_ng_container_2_ng_container_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 2, "submission.sections.upload.no-entry"), " ", ctx_r1.fileDescrKey, "");
  }
}
function SubmissionSectionUploadFileViewComponent_ng_container_1_ng_container_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, SubmissionSectionUploadFileViewComponent_ng_container_1_ng_container_2_ng_container_2_span_1_Template, 3, 4, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const entry_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.metadata[ctx_r1.fileDescrKey].indexOf(entry_r3) === 0);
  }
}
function SubmissionSectionUploadFileViewComponent_ng_container_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, SubmissionSectionUploadFileViewComponent_ng_container_1_ng_container_2_ng_container_1_Template, 3, 5, "ng-container", 0)(2, SubmissionSectionUploadFileViewComponent_ng_container_1_ng_container_2_ng_container_2_Template, 2, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const entry_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", entry_r3.value !== "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", entry_r3.value === "");
  }
}
function SubmissionSectionUploadFileViewComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, SubmissionSectionUploadFileViewComponent_ng_container_1_ng_container_1_Template, 4, 2, "ng-container", 4)(2, SubmissionSectionUploadFileViewComponent_ng_container_1_ng_container_2_Template, 4, 2, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.getAllMetadataValue(ctx_r1.fileTitleKey));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.getAllMetadataValue(ctx_r1.fileDescrKey));
  }
}
function SubmissionSectionUploadFileViewComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](2, 1, "admin.registries.bitstream-formats.edit.head", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](4, _c1, ctx_r1.fileFormat)), " ");
  }
}
function SubmissionSectionUploadFileViewComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" Checksum ", ctx_r1.fileCheckSum.checkSumAlgorithm, ": ", ctx_r1.fileCheckSum.value, " ");
  }
}
/**
 * This component allow to show bitstream's metadata
 */
class SubmissionSectionUploadFileViewComponent {
  constructor() {
    /**
     * The [[MetadataMap]] object
     * @type {MetadataMap}
     */
    this.metadata = Object.create({});
    /**
     * The bitstream's title key
     * @type {string}
     */
    this.fileTitleKey = 'Title';
    /**
     * The bitstream's description key
     * @type {string}
     */
    this.fileDescrKey = 'Description';
  }
  /**
   * Initialize instance variables
   */
  ngOnInit() {
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_2__.isNotEmpty)(this.fileData.metadata)) {
      this.metadata[this.fileTitleKey] = _core_shared_metadata_utils__WEBPACK_IMPORTED_MODULE_0__.Metadata.all(this.fileData.metadata, 'dc.title');
      this.metadata[this.fileDescrKey] = _core_shared_metadata_utils__WEBPACK_IMPORTED_MODULE_0__.Metadata.all(this.fileData.metadata, 'dc.description');
    }
    this.fileCheckSum = this.fileData.checkSum;
    this.fileFormat = this.fileData.format.shortDescription;
  }
  /**
   * Gets all matching metadata in the map(s)
   *
   * @param metadataKey
   *    The metadata key(s) in scope
   * @returns {MetadataValue[]}
   *    The matching values
   */
  getAllMetadataValue(metadataKey) {
    return _core_shared_metadata_utils__WEBPACK_IMPORTED_MODULE_0__.Metadata.all(this.metadata, metadataKey);
  }
  static {
    this.ɵfac = function SubmissionSectionUploadFileViewComponent_Factory(t) {
      return new (t || SubmissionSectionUploadFileViewComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: SubmissionSectionUploadFileViewComponent,
      selectors: [["ds-submission-section-upload-file-view"]],
      inputs: {
        fileData: "fileData"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵStandaloneFeature"]],
      decls: 6,
      vars: 4,
      consts: [[4, "ngIf"], ["class", "mt-1", 4, "ngIf"], [1, "clearfix"], [3, "accessConditions"], [4, "ngFor", "ngForOf"], [1, "text-muted"], ["class", "text-muted", 4, "ngIf"], [1, "mt-1"]],
      template: function SubmissionSectionUploadFileViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, SubmissionSectionUploadFileViewComponent_ng_container_1_Template, 3, 2, "ng-container", 0)(2, SubmissionSectionUploadFileViewComponent_div_2_Template, 3, 6, "div", 1)(3, SubmissionSectionUploadFileViewComponent_div_3_Template, 2, 2, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "span", 2)(5, "ds-submission-section-upload-access-conditions", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.metadata);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.fileFormat);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.fileCheckSum);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("accessConditions", ctx.fileData.accessConditions);
        }
      },
      dependencies: [_accessConditions_submission_section_upload_access_conditions_component__WEBPACK_IMPORTED_MODULE_5__.SubmissionSectionUploadAccessConditionsComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe, _shared_utils_truncate_pipe__WEBPACK_IMPORTED_MODULE_4__.TruncatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _shared_utils_file_size_pipe__WEBPACK_IMPORTED_MODULE_3__.FileSizePipe],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 1149:
/*!************************************************************************!*\
  !*** ./src/app/submission/sections/upload/section-upload-constants.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   POLICY_DEFAULT_NO_LIST: () => (/* binding */ POLICY_DEFAULT_NO_LIST),
/* harmony export */   POLICY_DEFAULT_WITH_LIST: () => (/* binding */ POLICY_DEFAULT_WITH_LIST)
/* harmony export */ });
const POLICY_DEFAULT_NO_LIST = 1; // Banner1
const POLICY_DEFAULT_WITH_LIST = 2; // Banner2

/***/ }),

/***/ 85228:
/*!************************************************************************!*\
  !*** ./src/app/submission/sections/upload/section-upload.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   POLICY_DEFAULT_NO_LIST: () => (/* binding */ POLICY_DEFAULT_NO_LIST),
/* harmony export */   POLICY_DEFAULT_WITH_LIST: () => (/* binding */ POLICY_DEFAULT_WITH_LIST),
/* harmony export */   SubmissionSectionUploadComponent: () => (/* binding */ SubmissionSectionUploadComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 83485);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs */ 27639);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 84975);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 85687);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs/operators */ 21252);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs/operators */ 74671);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! rxjs/operators */ 64785);
/* harmony import */ var _core_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/breadcrumbs/dso-name.service */ 96526);
/* harmony import */ var _core_config_submission_uploads_config_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/config/submission-uploads-config-data.service */ 51345);
/* harmony import */ var _core_data_collection_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/data/collection-data.service */ 6983);
/* harmony import */ var _core_eperson_group_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/eperson/group-data.service */ 44494);
/* harmony import */ var _core_resource_policy_resource_policy_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/resource-policy/resource-policy-data.service */ 25521);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/shared/operators */ 55757);
/* harmony import */ var _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/alert/alert.component */ 16292);
/* harmony import */ var _shared_alert_alert_type__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/alert/alert-type */ 47978);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/empty.util */ 82777);
/* harmony import */ var _shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/utils/follow-link-config.model */ 67600);
/* harmony import */ var _submission_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../submission.service */ 61010);
/* harmony import */ var _models_section_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../models/section.model */ 70507);
/* harmony import */ var _sections_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../sections.service */ 72147);
/* harmony import */ var _accessConditions_submission_section_upload_access_conditions_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./accessConditions/submission-section-upload-access-conditions.component */ 94338);
/* harmony import */ var _file_themed_section_upload_file_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./file/themed-section-upload-file.component */ 11468);
/* harmony import */ var _section_upload_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./section-upload.service */ 84580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 90310);































const _c0 = a0 => ({
  "collectionName": a0
});
function SubmissionSectionUploadComponent_ng_container_1_div_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind2"](2, 1, "submission.sections.upload.header.policy.default.nolist", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction1"](4, _c0, ctx_r0.collectionName)), " ");
  }
}
function SubmissionSectionUploadComponent_ng_container_1_div_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind2"](2, 1, "submission.sections.upload.header.policy.default.withlist", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction1"](4, _c0, ctx_r0.collectionName)), " ");
  }
}
function SubmissionSectionUploadComponent_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 4)(1, "div", 9)(2, "ds-alert", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](3, SubmissionSectionUploadComponent_ng_container_1_div_1_ng_container_3_Template, 3, 6, "ng-container", 11)(4, SubmissionSectionUploadComponent_ng_container_1_div_1_ng_container_4_Template, 3, 6, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](5, "span", 12)(6, "ds-submission-section-upload-access-conditions", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("type", ctx_r0.AlertTypeEnum.Warning);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r0.collectionPolicyType === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r0.collectionPolicyType === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("accessConditions", ctx_r0.collectionDefaultAccessConditions);
  }
}
function SubmissionSectionUploadComponent_ng_container_1_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "ds-submission-upload-section-file", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "div", 4)(4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](5, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const fileEntry_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("isPrimary", ctx_r0.primaryBitstreamUUID ? ctx_r0.primaryBitstreamUUID === fileEntry_r2.uuid : null)("availableAccessConditionOptions", ctx_r0.availableAccessConditionOptions)("collectionId", ctx_r0.collectionId)("collectionPolicyType", ctx_r0.collectionPolicyType)("configMetadataForm", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 10, ctx_r0.configMetadataForm$))("fileId", fileEntry_r2.uuid)("fileIndex", i_r3)("fileName", ctx_r0.fileNames[i_r3])("sectionId", ctx_r0.sectionData.id)("submissionId", ctx_r0.submissionId);
  }
}
function SubmissionSectionUploadComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, SubmissionSectionUploadComponent_ng_container_1_div_1_Template, 7, 4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "div", 4)(3, "div", 5)(4, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](7, "div", 4)(8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](9, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](10, SubmissionSectionUploadComponent_ng_container_1_ng_container_10_Template, 6, 12, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r0.collectionDefaultAccessConditions.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](6, 3, "bitstream.edit.form.primaryBitstream.label"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", ctx_r0.fileList);
  }
}
function SubmissionSectionUploadComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 4)(1, "div", 7)(2, "div", 15)(3, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](5, 1, "submission.sections.upload.no-file-uploaded"));
  }
}
const POLICY_DEFAULT_NO_LIST = 1; // Banner1
const POLICY_DEFAULT_WITH_LIST = 2; // Banner2
/**
 * This component represents a section that contains submission's bitstreams
 */
class SubmissionSectionUploadComponent extends _models_section_model__WEBPACK_IMPORTED_MODULE_11__.SectionModelComponent {
  /**
   * Initialize instance variables
   *
   * @param {SectionUploadService} bitstreamService
   * @param {ChangeDetectorRef} changeDetectorRef
   * @param {CollectionDataService} collectionDataService
   * @param {GroupDataService} groupService
   * @param {ResourcePolicyDataService} resourcePolicyService
   * @param {SectionsService} sectionService
   * @param {SubmissionService} submissionService
   * @param {SubmissionUploadsConfigDataService} uploadsConfigService
   * @param {SectionDataObject} injectedSectionData
   * @param {string} injectedSubmissionId
   */
  constructor(bitstreamService, changeDetectorRef, collectionDataService, groupService, resourcePolicyService, sectionService, submissionService, uploadsConfigService, dsoNameService, injectedSectionData, injectedSubmissionId) {
    super(undefined, injectedSectionData, injectedSubmissionId);
    this.bitstreamService = bitstreamService;
    this.changeDetectorRef = changeDetectorRef;
    this.collectionDataService = collectionDataService;
    this.groupService = groupService;
    this.resourcePolicyService = resourcePolicyService;
    this.sectionService = sectionService;
    this.submissionService = submissionService;
    this.uploadsConfigService = uploadsConfigService;
    this.dsoNameService = dsoNameService;
    this.injectedSectionData = injectedSectionData;
    this.injectedSubmissionId = injectedSubmissionId;
    /**
     * The AlertType enumeration
     * @type {AlertType}
     */
    this.AlertTypeEnum = _shared_alert_alert_type__WEBPACK_IMPORTED_MODULE_7__.AlertType;
    /**
     * The uuid of primary bitstream file
     * @type {Array}
     */
    this.primaryBitstreamUUID = null;
    /**
     * The file list
     * @type {Array}
     */
    this.fileList = [];
    /**
     * The array containing the name of the files
     * @type {Array}
     */
    this.fileNames = [];
    /**
     * Default access conditions of this collection
     * @type {Array}
     */
    this.collectionDefaultAccessConditions = [];
    /**
     * Is the upload required
     * @type {boolean}
     */
    this.required$ = new rxjs__WEBPACK_IMPORTED_MODULE_17__.BehaviorSubject(true);
    /**
     * Array to track all subscriptions and unsubscribe them onDestroy
     * @type {Array}
     */
    this.subs = [];
  }
  /**
   * Initialize all instance variables and retrieve collection default access conditions
   */
  onSectionInit() {
    const config$ = this.uploadsConfigService.findByHref(this.sectionData.config, true, false, (0,_shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_9__.followLink)('metadata')).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_5__.getFirstSucceededRemoteData)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.map)(config => config.payload));
    // retrieve configuration for the bitstream's metadata form
    this.configMetadataForm$ = config$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.switchMap)(config => config.metadata.pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_5__.getFirstSucceededRemoteData)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.map)(remoteData => remoteData.payload))));
    this.subs.push(this.submissionService.getSubmissionObject(this.submissionId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.filter)(submissionObject => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_8__.isNotUndefined)(submissionObject) && !submissionObject.isLoading), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.filter)(submissionObject => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_8__.isUndefined)(this.collectionId) || this.collectionId !== submissionObject.collection), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.tap)(submissionObject => this.collectionId = submissionObject.collection), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.mergeMap)(submissionObject => this.collectionDataService.findById(submissionObject.collection)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.filter)(rd => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_8__.isNotUndefined)(rd.payload)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.tap)(collectionRemoteData => this.collectionName = this.dsoNameService.getName(collectionRemoteData.payload)),
    // TODO review this part when https://github.com/DSpace/dspace-angular/issues/575 is resolved
    /*        mergeMap((collectionRemoteData: RemoteData<Collection>) => {
      return this.resourcePolicyService.findByHref(
        (collectionRemoteData.payload as any)._links.defaultAccessConditions.href
      );
    }),
    filter((defaultAccessConditionsRemoteData: RemoteData<ResourcePolicy>) =>
      defaultAccessConditionsRemoteData.hasSucceeded),
    tap((defaultAccessConditionsRemoteData: RemoteData<ResourcePolicy>) => {
      if (isNotEmpty(defaultAccessConditionsRemoteData.payload)) {
        this.collectionDefaultAccessConditions = Array.isArray(defaultAccessConditionsRemoteData.payload)
          ? defaultAccessConditionsRemoteData.payload : [defaultAccessConditionsRemoteData.payload];
      }
    }),*/
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.mergeMap)(() => config$)).subscribe(config => {
      this.required$.next(config.required);
      this.availableAccessConditionOptions = (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_8__.isNotEmpty)(config.accessConditionOptions) ? config.accessConditionOptions : [];
      this.collectionPolicyType = this.availableAccessConditionOptions.length > 0 ? POLICY_DEFAULT_WITH_LIST : POLICY_DEFAULT_NO_LIST;
      this.changeDetectorRef.detectChanges();
    }),
    // retrieve submission's bitstream data from state
    (0,rxjs__WEBPACK_IMPORTED_MODULE_23__.combineLatest)([this.configMetadataForm$, this.bitstreamService.getUploadedFilesData(this.submissionId, this.sectionData.id)]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.filter)(([configMetadataForm, sectionUploadObject]) => {
      return (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_8__.isNotEmpty)(configMetadataForm) && (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_8__.isNotEmpty)(sectionUploadObject);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_24__.distinctUntilChanged)()).subscribe(([configMetadataForm, {
      primary,
      files
    }]) => {
      this.primaryBitstreamUUID = primary;
      this.fileList = files;
      this.fileNames = Array.from(files, file => this.getFileName(configMetadataForm, file));
      this.changeDetectorRef.detectChanges();
    }));
  }
  /**
   * Return file name from metadata
   *
   * @param configMetadataForm
   *    the bitstream's form configuration
   * @param fileData
   *    the file metadata
   */
  getFileName(configMetadataForm, fileData) {
    const metadataName = configMetadataForm.rows[0].fields[0].selectableMetadata[0].metadata;
    let title;
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_8__.isNotEmpty)(fileData.metadata) && (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_8__.isNotEmpty)(fileData.metadata[metadataName])) {
      title = fileData.metadata[metadataName][0].display;
    } else {
      title = fileData.uuid;
    }
    return title;
  }
  /**
   * Get section status
   *
   * @return Observable<boolean>
   *     the section status
   */
  getSectionStatus() {
    // if not mandatory, always true
    // if mandatory, at least one file is required
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_23__.combineLatest)(this.required$, this.bitstreamService.getUploadedFileList(this.submissionId, this.sectionData.id), (required, fileList) => {
      return !required || (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_8__.isNotUndefined)(fileList) && fileList.length > 0;
    });
  }
  /**
   * Method provided by Angular. Invoked when the instance is destroyed.
   */
  onSectionDestroy() {
    this.subs.filter(subscription => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_8__.hasValue)(subscription)).forEach(subscription => subscription.unsubscribe());
  }
  static {
    this.ɵfac = function SubmissionSectionUploadComponent_Factory(t) {
      return new (t || SubmissionSectionUploadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_section_upload_service__WEBPACK_IMPORTED_MODULE_15__.SectionUploadService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_16__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_core_data_collection_data_service__WEBPACK_IMPORTED_MODULE_2__.CollectionDataService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_core_eperson_group_data_service__WEBPACK_IMPORTED_MODULE_3__.GroupDataService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_core_resource_policy_resource_policy_data_service__WEBPACK_IMPORTED_MODULE_4__.ResourcePolicyDataService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_sections_service__WEBPACK_IMPORTED_MODULE_12__.SectionsService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_submission_service__WEBPACK_IMPORTED_MODULE_10__.SubmissionService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_core_config_submission_uploads_config_data_service__WEBPACK_IMPORTED_MODULE_1__.SubmissionUploadsConfigDataService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_core_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_0__.DSONameService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"]('sectionDataProvider'), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"]('submissionIdProvider'));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineComponent"]({
      type: SubmissionSectionUploadComponent,
      selectors: [["ds-submission-section-upload"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵStandaloneFeature"]],
      decls: 4,
      vars: 5,
      consts: [["noFileUploaded", ""], [3, "content", "dismissible", "type"], [4, "ngIf", "ngIfElse"], ["class", "row", 4, "ngIf"], [1, "row"], [1, "col-md-2"], [1, "text-left", "font-weight-bold"], [1, "col-md-12"], [4, "ngFor", "ngForOf"], [1, "col-sm-12"], [3, "type"], [4, "ngIf"], [1, "clearfix"], [3, "accessConditions"], [3, "isPrimary", "availableAccessConditionOptions", "collectionId", "collectionPolicyType", "configMetadataForm", "fileId", "fileIndex", "fileName", "sectionId", "submissionId"], [1, "text-center", "h3"], [1, "text-muted"]],
      template: function SubmissionSectionUploadComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "ds-alert", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, SubmissionSectionUploadComponent_ng_container_1_Template, 11, 5, "ng-container", 2)(2, SubmissionSectionUploadComponent_ng_template_2_Template, 6, 3, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplateRefExtractor"]);
        }
        if (rf & 2) {
          const noFileUploaded_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵreference"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("content", "submission.sections.upload.info")("dismissible", true)("type", ctx.AlertTypeEnum.Info);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.fileList.length > 0)("ngIfElse", noFileUploaded_r4);
        }
      },
      dependencies: [_file_themed_section_upload_file_component__WEBPACK_IMPORTED_MODULE_14__.ThemedSubmissionSectionUploadFileComponent, _accessConditions_submission_section_upload_access_conditions_component__WEBPACK_IMPORTED_MODULE_13__.SubmissionSectionUploadAccessConditionsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_25__.NgIf, _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_6__.AlertComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_25__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_25__.AsyncPipe],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlY3Rpb24tdXBsb2FkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBIiwiZmlsZSI6InNlY3Rpb24tdXBsb2FkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi8iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc3VibWlzc2lvbi9zZWN0aW9ucy91cGxvYWQvc2VjdGlvbi11cGxvYWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQSxva0JBQW9rQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 84580:
/*!**********************************************************************!*\
  !*** ./src/app/submission/sections/upload/section-upload.service.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SectionUploadService: () => (/* binding */ SectionUploadService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 64785);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 85687);
/* harmony import */ var src_app_core_json_patch_builder_json_patch_operations_builder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/json-patch/builder/json-patch-operations-builder */ 17184);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/empty.util */ 82777);
/* harmony import */ var _objects_submission_objects_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../objects/submission-objects.actions */ 93158);
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../selectors */ 645);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ 99797);









/**
 * A service that provides methods to handle submission's bitstream state.
 */
class SectionUploadService {
  /**
   * Initialize service variables
   *
   * @param {Store<SubmissionState>} store
   * @param {JsonPatchOperationsBuilder} operationsBuilder
   */
  constructor(store, operationsBuilder) {
    this.store = store;
    this.operationsBuilder = operationsBuilder;
  }
  /**
   * Define and add an operation based on a change
   *
   * @param path
   *    The path to endpoint
   * @param intitialPrimary
   *    The initial primary indicator
   * @param primary
   *    the new primary indicator
    * @param fileId
   *    The file id
   * @returns {void}
   */
  updatePrimaryBitstreamOperation(path, intitialPrimary, primary, fileId) {
    if (intitialPrimary === null && primary) {
      this.operationsBuilder.add(path, fileId, false, true);
      return;
    }
    if (intitialPrimary !== primary) {
      if (primary) {
        this.operationsBuilder.replace(path, fileId, true);
        return;
      }
      this.operationsBuilder.remove(path);
    }
  }
  /**
   * Return submission's bitstream data from state
   *
   * @param submissionId
   *    The submission id
   * @param sectionId
   *    The section id
   * @returns {WorkspaceitemSectionUploadObject}
   *    Returns submission's bitstream data
   */
  getUploadedFilesData(submissionId, sectionId) {
    return this.store.select((0,_selectors__WEBPACK_IMPORTED_MODULE_3__.submissionSectionDataFromIdSelector)(submissionId, sectionId)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(state => state), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.distinctUntilChanged)());
  }
  /**
   * Return submission's bitstream list from state
   *
   * @param submissionId
   *    The submission id
   * @param sectionId
   *    The section id
   * @returns {Array}
   *    Returns submission's bitstream list
   */
  getUploadedFileList(submissionId, sectionId) {
    return this.store.select((0,_selectors__WEBPACK_IMPORTED_MODULE_3__.submissionUploadedFilesFromIdSelector)(submissionId, sectionId)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(state => state), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.distinctUntilChanged)());
  }
  /**
   * Return bitstream's metadata
   *
   * @param submissionId
   *    The submission id
   * @param sectionId
   *    The section id
   * @param fileUUID
   *    The bitstream UUID
   * @returns {Observable}
   *    Emits bitstream's metadata
   */
  getFileData(submissionId, sectionId, fileUUID) {
    return this.store.select((0,_selectors__WEBPACK_IMPORTED_MODULE_3__.submissionUploadedFilesFromIdSelector)(submissionId, sectionId)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.filter)(state => !(0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_1__.isUndefined)(state)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(state => {
      let fileState;
      Object.keys(state).filter(key => state[key].uuid === fileUUID).forEach(key => fileState = state[key]);
      return fileState;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.distinctUntilChanged)());
  }
  /**
   * Return bitstream's default policies
   *
   * @param submissionId
   *    The submission id
   * @param sectionId
   *    The section id
   * @param fileUUID
   *    The bitstream UUID
   * @returns {Observable}
   *    Emits bitstream's default policies
   */
  getDefaultPolicies(submissionId, sectionId, fileUUID) {
    return this.store.select((0,_selectors__WEBPACK_IMPORTED_MODULE_3__.submissionUploadedFileFromUuidSelector)(submissionId, sectionId, fileUUID)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(state => state), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.distinctUntilChanged)());
  }
  /**
   * Add a new bitstream to the state
   *
   * @param submissionId
   *    The submission id
   * @param sectionId
   *    The section id
   * @param fileUUID
   *    The bitstream UUID
   * @param data
   *    The [[WorkspaceitemSectionUploadFileObject]] object
   */
  addUploadedFile(submissionId, sectionId, fileUUID, data) {
    this.store.dispatch(new _objects_submission_objects_actions__WEBPACK_IMPORTED_MODULE_2__.NewUploadedFileAction(submissionId, sectionId, fileUUID, data));
  }
  /**
   * Update primary bitstream into the state
   *
   * @param submissionId
   *    The submission id
   * @param sectionId
   *    The section id
   * @param fileUUID
   *    The bitstream UUID
   */
  updateFilePrimaryBitstream(submissionId, sectionId, fileUUID) {
    this.store.dispatch(new _objects_submission_objects_actions__WEBPACK_IMPORTED_MODULE_2__.EditFilePrimaryBitstreamAction(submissionId, sectionId, fileUUID));
  }
  /**
   * Update bitstream metadata into the state
   *
   * @param submissionId
   *    The submission id
   * @param sectionId
   *    The section id
   * @param fileUUID
   *    The bitstream UUID
   * @param data
   *    The [[WorkspaceitemSectionUploadFileObject]] object
   */
  updateFileData(submissionId, sectionId, fileUUID, data) {
    this.store.dispatch(new _objects_submission_objects_actions__WEBPACK_IMPORTED_MODULE_2__.EditFileDataAction(submissionId, sectionId, fileUUID, data));
  }
  /**
   * Remove bitstream from the state
   *
   * @param submissionId
   *    The submission id
   * @param sectionId
   *    The section id
   * @param fileUUID
   *    The bitstream UUID
   */
  removeUploadedFile(submissionId, sectionId, fileUUID) {
    this.store.dispatch(new _objects_submission_objects_actions__WEBPACK_IMPORTED_MODULE_2__.DeleteUploadedFileAction(submissionId, sectionId, fileUUID));
  }
  static {
    this.ɵfac = function SectionUploadService_Factory(t) {
      return new (t || SectionUploadService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_8__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](src_app_core_json_patch_builder_json_patch_operations_builder__WEBPACK_IMPORTED_MODULE_0__.JsonPatchOperationsBuilder));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
      token: SectionUploadService,
      factory: SectionUploadService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 14515:
/*!*************************************!*\
  !*** ./node_modules/lodash/uniq.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseUniq = __webpack_require__(/*! ./_baseUniq */ 30177);

/**
 * Creates a duplicate-free version of an array, using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons, in which only the first occurrence of each element
 * is kept. The order of result values is determined by the order they occur
 * in the array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * _.uniq([2, 1, 2]);
 * // => [2, 1]
 */
function uniq(array) {
  return array && array.length ? baseUniq(array) : [];
}
module.exports = uniq;

/***/ }),

/***/ 9048:
/*!********************************************************************************************************!*\
  !*** ./src/themes/ lazy ^\.\/.*\/app\/submission\/edit\/submission\-edit\.component$ namespace object ***!
  \********************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./custom/app/submission/edit/submission-edit.component": [
		20473,
		"src_themes_custom_app_submission_edit_submission-edit_component_ts"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 9048;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 28767:
/*!************************************************************************************************************************************************!*\
  !*** ./src/themes/ lazy ^\.\/.*\/app\/submission\/form\/submission\-upload\-files\/submission\-upload\-files\.component\.ts$ namespace object ***!
  \************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./custom/app/submission/form/submission-upload-files/submission-upload-files.component.ts": [
		19247,
		"src_themes_custom_app_submission_form_submission-upload-files_submission-upload-files_component_ts"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 28767;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 96682:
/*!*******************************************************************************************************************************!*\
  !*** ./src/themes/ lazy ^\.\/.*\/app\/submission\/sections\/upload\/file\/section\-upload\-file\.component$ namespace object ***!
  \*******************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./custom/app/submission/sections/upload/file/section-upload-file.component": [
		9286,
		"src_themes_custom_app_submission_sections_upload_file_section-upload-file_component_ts"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 96682;
module.exports = webpackAsyncContext;

/***/ })

}]);
//# sourceMappingURL=default-src_app_core_breadcrumbs_i18n-breadcrumb_resolver_ts-src_app_core_submission_resolver-eaa14f.js.map