(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_app_lookup-by-id_lookup-by-id-routes_ts"],{

/***/ 51253:
/*!***************************************************!*\
  !*** ./src/app/core/data/dso-redirect.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DsoRedirectService: () => (/* binding */ DsoRedirectService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 21252);
/* harmony import */ var _config_app_config_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../config/app-config.interface */ 82640);
/* harmony import */ var _app_routing_paths__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app-routing-paths */ 69799);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/empty.util */ 82777);
/* harmony import */ var _cache_builders_remote_data_build_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cache/builders/remote-data-build.service */ 76799);
/* harmony import */ var _cache_object_cache_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cache/object-cache.service */ 41684);
/* harmony import */ var _services_hard_redirect_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/hard-redirect.service */ 59752);
/* harmony import */ var _shared_hal_endpoint_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/hal-endpoint.service */ 4910);
/* harmony import */ var _shared_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/operators */ 55757);
/* harmony import */ var _base_identifiable_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./base/identifiable-data.service */ 63897);
/* harmony import */ var _request_models__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./request.models */ 44446);
/* harmony import */ var _request_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./request.service */ 32473);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 90310);


















const ID_ENDPOINT = 'pid';
const UUID_ENDPOINT = 'dso';
/**
 * A data service to retrieve DSpaceObjects by persistent identifier or UUID.
 * Doesn't define a constant {@link linkPath} but switches between two endpoints on demand:
 * {@link setLinkPath} must be called before each request.
 */
class DsoByIdOrUUIDDataService extends _base_identifiable_data_service__WEBPACK_IMPORTED_MODULE_8__.IdentifiableDataService {
  constructor(requestService, rdbService, objectCache, halService) {
    super(undefined, requestService, rdbService, objectCache, halService, undefined,
    // interpolate id/uuid as query parameter
    (endpoint, resourceID) => {
      return endpoint.replace(/{\?id}/, `?id=${resourceID}`).replace(/{\?uuid}/, `?uuid=${resourceID}`);
    });
    this.requestService = requestService;
    this.rdbService = rdbService;
    this.objectCache = objectCache;
    this.halService = halService;
  }
  /**
   * The default 'pid' endpoint for identifiers does not support uuid lookups.
   * For uuid lookups we need to change the linkPath.
   * @param identifierType
   */
  setLinkPath(identifierType) {
    if (identifierType === _request_models__WEBPACK_IMPORTED_MODULE_9__.IdentifierType.UUID) {
      this.linkPath = UUID_ENDPOINT;
    } else {
      this.linkPath = ID_ENDPOINT;
    }
  }
}
/**
 * A service to handle redirects from identifier paths to DSO path
 * e.g.: redirect from /handle/... to /items/...
 */
class DsoRedirectService {
  constructor(appConfig, requestService, rdbService, objectCache, halService, hardRedirectService) {
    this.appConfig = appConfig;
    this.requestService = requestService;
    this.rdbService = rdbService;
    this.objectCache = objectCache;
    this.halService = halService;
    this.hardRedirectService = hardRedirectService;
    this.dataService = new DsoByIdOrUUIDDataService(requestService, rdbService, objectCache, halService);
  }
  /**
   * Redirect to a DSpaceObject's path using the given identifier type and ID.
   * This is used to redirect paths like "/handle/[prefix]/[suffix]" to the object's path (e.g. /items/[uuid]).
   * See lookupGuard for more examples.
   *
   * @param id              the identifier of the object to retrieve
   * @param identifierType  the type of the given identifier (defaults to UUID)
   */
  findByIdAndIDType(id, identifierType = _request_models__WEBPACK_IMPORTED_MODULE_9__.IdentifierType.UUID) {
    this.dataService.setLinkPath(identifierType);
    return this.dataService.findById(id).pipe((0,_shared_operators__WEBPACK_IMPORTED_MODULE_7__.getFirstCompletedRemoteData)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(response => {
      if (response.hasSucceeded) {
        const dso = response.payload;
        if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_2__.hasValue)(dso.uuid)) {
          const newRoute = (0,_app_routing_paths__WEBPACK_IMPORTED_MODULE_1__.getDSORoute)(dso);
          if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_2__.hasValue)(newRoute)) {
            // Use a "301 Moved Permanently" redirect for SEO purposes
            this.hardRedirectService.redirect(this.appConfig.ui.nameSpace.replace(/\/$/, '') + newRoute, 301);
          }
        }
      }
    }));
  }
  static {
    this.ɵfac = function DsoRedirectService_Factory(t) {
      return new (t || DsoRedirectService)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_config_app_config_interface__WEBPACK_IMPORTED_MODULE_0__.APP_CONFIG), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_request_service__WEBPACK_IMPORTED_MODULE_10__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_cache_builders_remote_data_build_service__WEBPACK_IMPORTED_MODULE_3__.RemoteDataBuildService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_cache_object_cache_service__WEBPACK_IMPORTED_MODULE_4__.ObjectCacheService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_shared_hal_endpoint_service__WEBPACK_IMPORTED_MODULE_6__.HALEndpointService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_services_hard_redirect_service__WEBPACK_IMPORTED_MODULE_5__.HardRedirectService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjectable"]({
      token: DsoRedirectService,
      factory: DsoRedirectService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 52838:
/*!*****************************************************!*\
  !*** ./src/app/lookup-by-id/lookup-by-id-routes.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ROUTES: () => (/* binding */ ROUTES),
/* harmony export */   urlMatcher: () => (/* binding */ urlMatcher)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/empty.util */ 82777);
/* harmony import */ var _lookup_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lookup-guard */ 6683);
/* harmony import */ var _objectnotfound_themed_objectnotfound_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./objectnotfound/themed-objectnotfound.component */ 8725);




const ROUTES = [{
  matcher: urlMatcher,
  canActivate: [_lookup_guard__WEBPACK_IMPORTED_MODULE_1__.lookupGuard],
  component: _objectnotfound_themed_objectnotfound_component__WEBPACK_IMPORTED_MODULE_2__.ThemedObjectNotFoundComponent
}];
function urlMatcher(url) {
  // The expected path is :idType/:id
  const idType = url[0].path;
  // Allow for handles that are delimited with a forward slash.
  const id = url.slice(1).map(us => us.path).join('/');
  if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_0__.isNotEmpty)(idType) && (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_0__.isNotEmpty)(id)) {
    return {
      consumed: url,
      posParams: {
        idType: new _angular_router__WEBPACK_IMPORTED_MODULE_3__.UrlSegment(idType, {}),
        id: new _angular_router__WEBPACK_IMPORTED_MODULE_3__.UrlSegment(id, {})
      }
    };
  }
  return null;
}

/***/ }),

/***/ 6683:
/*!**********************************************!*\
  !*** ./src/app/lookup-by-id/lookup-guard.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lookupGuard: () => (/* binding */ lookupGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var _core_data_dso_redirect_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/data/dso-redirect.service */ 51253);
/* harmony import */ var _core_data_request_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/data/request.models */ 44446);




const lookupGuard = (route, state, dsoService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_core_data_dso_redirect_service__WEBPACK_IMPORTED_MODULE_0__.DsoRedirectService)) => {
  const params = getLookupParams(route);
  return dsoService.findByIdAndIDType(params.id, params.type).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => response.hasFailed));
};
function getLookupParams(route) {
  let type;
  let id;
  const idType = route.params.idType;
  // If the idType is not recognized, assume a legacy handle request (handle/prefix/id)
  if (idType !== _core_data_request_models__WEBPACK_IMPORTED_MODULE_1__.IdentifierType.HANDLE && idType !== _core_data_request_models__WEBPACK_IMPORTED_MODULE_1__.IdentifierType.UUID) {
    type = _core_data_request_models__WEBPACK_IMPORTED_MODULE_1__.IdentifierType.HANDLE;
    const prefix = route.params.idType;
    const handleId = route.params.id;
    id = `hdl:${prefix}/${handleId}`;
  } else if (route.params.idType === _core_data_request_models__WEBPACK_IMPORTED_MODULE_1__.IdentifierType.HANDLE) {
    type = _core_data_request_models__WEBPACK_IMPORTED_MODULE_1__.IdentifierType.HANDLE;
    id = 'hdl:' + route.params.id;
  } else {
    type = _core_data_request_models__WEBPACK_IMPORTED_MODULE_1__.IdentifierType.UUID;
    id = route.params.id;
  }
  return {
    type: type,
    id: id
  };
}

/***/ }),

/***/ 87061:
/*!*************************************************************************!*\
  !*** ./src/app/lookup-by-id/objectnotfound/objectnotfound.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ObjectNotFoundComponent: () => (/* binding */ ObjectNotFoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var src_app_core_services_server_response_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/server-response.service */ 7337);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 90310);







/**
 * This component representing the `PageNotFound` DSpace page.
 */
class ObjectNotFoundComponent {
  /**
   * Initialize instance variables
   *
   * @param {AuthService} authservice
   * @param {ServerResponseService} responseService
   */
  constructor(route, serverResponseService) {
    this.route = route;
    this.serverResponseService = serverResponseService;
    route.params.subscribe(params => {
      this.idType = params.idType;
      this.id = params.id;
    });
  }
  ngOnInit() {
    if (this.idType.startsWith('handle') || this.idType.startsWith('uuid')) {
      this.missingItem = this.idType + ': ' + this.id;
    } else {
      this.missingItem = 'handle: ' + this.idType + '/' + this.id;
    }
    this.serverResponseService.setNotFound();
  }
  static {
    this.ɵfac = function ObjectNotFoundComponent_Factory(t) {
      return new (t || ObjectNotFoundComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_services_server_response_service__WEBPACK_IMPORTED_MODULE_0__.ServerResponseService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ObjectNotFoundComponent,
      selectors: [["ds-base-objnotfound"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 13,
      vars: 7,
      consts: [[1, "object-not-found", "container"], [1, "text-center"], ["routerLink", "/home", 1, "btn", "btn-primary"]],
      template: function ObjectNotFoundComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h2")(5, "small")(6, "em");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p", 1)(10, "a", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 3, "error.identifier"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.missingItem);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 5, "404.link.home-page"));
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9iamVjdG5vdGZvdW5kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBIiwiZmlsZSI6Im9iamVjdG5vdGZvdW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi8iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbG9va3VwLWJ5LWlkL29iamVjdG5vdGZvdW5kL29iamVjdG5vdGZvdW5kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBO0FBQ0Esb2tCQUFva0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqLyJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 8725:
/*!********************************************************************************!*\
  !*** ./src/app/lookup-by-id/objectnotfound/themed-objectnotfound.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemedObjectNotFoundComponent: () => (/* binding */ ThemedObjectNotFoundComponent)
/* harmony export */ });
/* harmony import */ var _shared_theme_support_themed_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/theme-support/themed.component */ 8886);
/* harmony import */ var _objectnotfound_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objectnotfound.component */ 87061);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);



const _c0 = ["*"];
function ThemedObjectNotFoundComponent_ng_template_0_Template(rf, ctx) {}
/**
 * Themed wrapper for ObjectNotFoundComponent
 */
class ThemedObjectNotFoundComponent extends _shared_theme_support_themed_component__WEBPACK_IMPORTED_MODULE_0__.ThemedComponent {
  getComponentName() {
    return 'ObjectNotFoundComponent';
  }
  importThemedComponent(themeName) {
    return __webpack_require__(18761)(`./${themeName}/app/lookup-by-id/objectnotfound/objectnotfound.component`);
  }
  importUnthemedComponent() {
    return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./objectnotfound.component */ 87061));
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵThemedObjectNotFoundComponent_BaseFactory;
      return function ThemedObjectNotFoundComponent_Factory(t) {
        return (ɵThemedObjectNotFoundComponent_BaseFactory || (ɵThemedObjectNotFoundComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](ThemedObjectNotFoundComponent)))(t || ThemedObjectNotFoundComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ThemedObjectNotFoundComponent,
      selectors: [["ds-objnotfound"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      ngContentSelectors: _c0,
      decls: 5,
      vars: 0,
      consts: [["vcr", ""], ["content", ""]],
      template: function ThemedObjectNotFoundComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ThemedObjectNotFoundComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
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

/***/ 18761:
/*!********************************************************************************************************************!*\
  !*** ./src/themes/ lazy ^\.\/.*\/app\/lookup\-by\-id\/objectnotfound\/objectnotfound\.component$ namespace object ***!
  \********************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./custom/app/lookup-by-id/objectnotfound/objectnotfound.component": [
		90500,
		"src_themes_custom_app_lookup-by-id_objectnotfound_objectnotfound_component_ts"
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
webpackAsyncContext.id = 18761;
module.exports = webpackAsyncContext;

/***/ })

}]);
//# sourceMappingURL=src_app_lookup-by-id_lookup-by-id-routes_ts.js.map