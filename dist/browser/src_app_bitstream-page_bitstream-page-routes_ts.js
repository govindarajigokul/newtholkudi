(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_app_bitstream-page_bitstream-page-routes_ts"],{

/***/ 7250:
/*!***********************************************************************************************!*\
  !*** ./src/app/bitstream-page/bitstream-authorizations/bitstream-authorizations.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BitstreamAuthorizationsComponent: () => (/* binding */ BitstreamAuthorizationsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 46891);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var _shared_resource_policies_resource_policies_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/resource-policies/resource-policies.component */ 24380);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 90310);








const _c0 = a0 => ["/bitstreams", a0, "edit"];
/**
 * Component that handles the Bitstream Authorizations
 */
class BitstreamAuthorizationsComponent {
  /**
   * Initialize instance variables
   *
   * @param {ActivatedRoute} route
   */
  constructor(route) {
    this.route = route;
  }
  /**
   * Initialize the component, setting up the collection
   */
  ngOnInit() {
    this.dsoRD$ = this.route.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.first)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(data => data.bitstream));
  }
  static {
    this.ɵfac = function BitstreamAuthorizationsComponent_Factory(t) {
      return new (t || BitstreamAuthorizationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: BitstreamAuthorizationsComponent,
      selectors: [["ds-bitstream-authorizations"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
      decls: 10,
      vars: 12,
      consts: [[1, "container"], [3, "resourceType", "resourceUUID"], [1, "button-row", "bottom"], [1, "text-right"], ["role", "button", 1, "btn", "btn-outline-secondary", "mr-1", 3, "routerLink"], [1, "fas", "fa-arrow-left"]],
      template: function BitstreamAuthorizationsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "ds-resource-policies", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2)(4, "div", 3)(5, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "i", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          let tmp_1_0;
          let tmp_2_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("resourceType", "bitstream")("resourceUUID", (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 4, ctx.dsoRD$)) == null ? null : tmp_1_0.payload == null ? null : tmp_1_0.payload.id);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](10, _c0, (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 6, ctx.dsoRD$)) == null ? null : tmp_2_0.payload == null ? null : tmp_2_0.payload.id));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](9, 8, "bitstream.edit.return"), " ");
        }
      },
      dependencies: [_shared_resource_policies_resource_policies_component__WEBPACK_IMPORTED_MODULE_0__.ResourcePoliciesComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 99504:
/*!*********************************************************************************************!*\
  !*** ./src/app/bitstream-page/bitstream-download-page/bitstream-download-page.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BitstreamDownloadPageComponent: () => (/* binding */ BitstreamDownloadPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 27639);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 17796);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 84975);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 85687);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 78374);
/* harmony import */ var _app_routing_paths__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app-routing-paths */ 69799);
/* harmony import */ var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/auth/auth.service */ 67116);
/* harmony import */ var _core_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/breadcrumbs/dso-name.service */ 96526);
/* harmony import */ var _core_data_feature_authorization_authorization_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/data/feature-authorization/authorization-data.service */ 3675);
/* harmony import */ var _core_data_feature_authorization_feature_id__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/data/feature-authorization/feature-id */ 3970);
/* harmony import */ var _core_data_signposting_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/data/signposting-data.service */ 38308);
/* harmony import */ var _core_services_hard_redirect_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/services/hard-redirect.service */ 59752);
/* harmony import */ var _core_services_server_response_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/services/server-response.service */ 7337);
/* harmony import */ var _core_shared_authorized_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/shared/authorized.operators */ 308);
/* harmony import */ var _core_shared_file_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/shared/file.service */ 89269);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/shared/operators */ 55757);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/empty.util */ 82777);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 14354);





























const _c0 = a0 => ({
  bitstream: a0
});
/**
 * Page component for downloading a bitstream
 */
class BitstreamDownloadPageComponent {
  constructor(route, router, authorizationService, auth, fileService, hardRedirectService, location, dsoNameService, signpostingDataService, responseService, platformId) {
    this.route = route;
    this.router = router;
    this.authorizationService = authorizationService;
    this.auth = auth;
    this.fileService = fileService;
    this.hardRedirectService = hardRedirectService;
    this.location = location;
    this.dsoNameService = dsoNameService;
    this.signpostingDataService = signpostingDataService;
    this.responseService = responseService;
    this.platformId = platformId;
    this.initPageLinks();
  }
  back() {
    this.location.back();
  }
  ngOnInit() {
    this.bitstreamRD$ = this.route.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(data => data.bitstream));
    this.bitstream$ = this.bitstreamRD$.pipe((0,_core_shared_authorized_operators__WEBPACK_IMPORTED_MODULE_8__.redirectOn4xx)(this.router, this.auth), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_10__.getRemoteDataPayload)());
    this.bitstream$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.switchMap)(bitstream => {
      const isAuthorized$ = this.authorizationService.isAuthorized(_core_data_feature_authorization_feature_id__WEBPACK_IMPORTED_MODULE_4__.FeatureID.CanDownload, (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_11__.isNotEmpty)(bitstream) ? bitstream.self : undefined);
      const isLoggedIn$ = this.auth.isAuthenticated();
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.combineLatest)([isAuthorized$, isLoggedIn$, (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.of)(bitstream)]);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.filter)(([isAuthorized, isLoggedIn, bitstream]) => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_11__.hasValue)(isAuthorized) && (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_11__.hasValue)(isLoggedIn)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.switchMap)(([isAuthorized, isLoggedIn, bitstream]) => {
      if (isAuthorized && isLoggedIn) {
        return this.fileService.retrieveFileDownloadLink(bitstream._links.content.href).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.filter)(fileLink => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_11__.hasValue)(fileLink)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(fileLink => {
          return [isAuthorized, isLoggedIn, bitstream, fileLink];
        }));
      } else {
        return [[isAuthorized, isLoggedIn, bitstream, '']];
      }
    })).subscribe(([isAuthorized, isLoggedIn, bitstream, fileLink]) => {
      if (isAuthorized && isLoggedIn && (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_11__.isNotEmpty)(fileLink)) {
        this.hardRedirectService.redirect(fileLink);
      } else if (isAuthorized && !isLoggedIn) {
        this.hardRedirectService.redirect(bitstream._links.content.href);
      } else if (!isAuthorized && isLoggedIn) {
        this.router.navigateByUrl((0,_app_routing_paths__WEBPACK_IMPORTED_MODULE_0__.getForbiddenRoute)(), {
          skipLocationChange: true
        });
      } else if (!isAuthorized && !isLoggedIn) {
        this.auth.setRedirectUrl(this.router.url);
        this.router.navigateByUrl('login');
      }
    });
  }
  /**
   * Create page links if any are retrieved by signposting endpoint
   *
   * @private
   */
  initPageLinks() {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_18__.isPlatformServer)(this.platformId)) {
      this.route.params.subscribe(params => {
        this.signpostingDataService.getLinks(params.id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.take)(1)).subscribe(signpostingLinks => {
          let links = '';
          signpostingLinks.forEach(link => {
            links = links + ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_11__.isNotEmpty)(links) ? ', ' : '') + `<${link.href}> ; rel="${link.rel}"` + ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_11__.isNotEmpty)(link.type) ? ` ; type="${link.type}" ` : ' ');
          });
          this.responseService.setHeader('Link', links);
        });
      });
    }
  }
  static {
    this.ɵfac = function BitstreamDownloadPageComponent_Factory(t) {
      return new (t || BitstreamDownloadPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_20__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_20__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_core_data_feature_authorization_authorization_data_service__WEBPACK_IMPORTED_MODULE_3__.AuthorizationDataService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_core_shared_file_service__WEBPACK_IMPORTED_MODULE_9__.FileService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_core_services_hard_redirect_service__WEBPACK_IMPORTED_MODULE_6__.HardRedirectService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_18__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_core_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_2__.DSONameService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_core_data_signposting_data_service__WEBPACK_IMPORTED_MODULE_5__.SignpostingDataService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_core_services_server_response_service__WEBPACK_IMPORTED_MODULE_7__.ServerResponseService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_19__.PLATFORM_ID));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineComponent"]({
      type: BitstreamDownloadPageComponent,
      selectors: [["ds-bitstream-download-page"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵStandaloneFeature"]],
      decls: 10,
      vars: 11,
      consts: [[1, "container"], [1, "h2"], [1, "pt-3"], [1, "btn", "btn-outline-secondary", 3, "click"], [1, "fas", "fa-arrow-left"]],
      template: function BitstreamDownloadPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](3, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](4, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "div", 2)(6, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function BitstreamDownloadPageComponent_Template_button_click_6_listener() {
            return ctx.back();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](7, "i", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](9, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind2"](4, 4, "bitstream.download.page", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction1"](9, _c0, ctx.dsoNameService.getName(_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](3, 2, ctx.bitstream$)))));
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](9, 7, "bitstream.download.page.back"), " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__.TranslatePipe],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 34023:
/*!***********************************************************************!*\
  !*** ./src/app/bitstream-page/bitstream-page-authorizations.guard.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bitstreamPageAuthorizationsGuard: () => (/* binding */ bitstreamPageAuthorizationsGuard)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 17796);
/* harmony import */ var _core_data_feature_authorization_feature_authorization_guard_dso_page_single_feature_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/data/feature-authorization/feature-authorization-guard/dso-page-single-feature.guard */ 6056);
/* harmony import */ var _core_data_feature_authorization_feature_id__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/data/feature-authorization/feature-id */ 3970);
/* harmony import */ var _bitstream_page_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bitstream-page.resolver */ 20281);




/**
 * Guard for preventing unauthorized access to certain {@link Bitstream} pages requiring specific authorizations.
 * Checks authorization rights for managing policies.
 */
const bitstreamPageAuthorizationsGuard = (0,_core_data_feature_authorization_feature_authorization_guard_dso_page_single_feature_guard__WEBPACK_IMPORTED_MODULE_0__.dsoPageSingleFeatureGuard)(() => _bitstream_page_resolver__WEBPACK_IMPORTED_MODULE_2__.bitstreamPageResolver, () => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(_core_data_feature_authorization_feature_id__WEBPACK_IMPORTED_MODULE_1__.FeatureID.CanManagePolicies));

/***/ }),

/***/ 51540:
/*!*********************************************************!*\
  !*** ./src/app/bitstream-page/bitstream-page-routes.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ROUTES: () => (/* binding */ ROUTES)
/* harmony export */ });
/* harmony import */ var _core_auth_authenticated_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/auth/authenticated.guard */ 49347);
/* harmony import */ var _core_breadcrumbs_bitstream_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/breadcrumbs/bitstream-breadcrumb.resolver */ 28516);
/* harmony import */ var _core_breadcrumbs_i18n_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/breadcrumbs/i18n-breadcrumb.resolver */ 72059);
/* harmony import */ var _shared_resource_policies_create_resource_policy_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/resource-policies/create/resource-policy-create.component */ 55584);
/* harmony import */ var _shared_resource_policies_edit_resource_policy_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/resource-policies/edit/resource-policy-edit.component */ 10676);
/* harmony import */ var _shared_resource_policies_resolvers_resource_policy_resolver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/resource-policies/resolvers/resource-policy.resolver */ 92117);
/* harmony import */ var _shared_resource_policies_resolvers_resource_policy_target_resolver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/resource-policies/resolvers/resource-policy-target.resolver */ 45539);
/* harmony import */ var _bitstream_authorizations_bitstream_authorizations_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bitstream-authorizations/bitstream-authorizations.component */ 7250);
/* harmony import */ var _bitstream_download_page_bitstream_download_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bitstream-download-page/bitstream-download-page.component */ 99504);
/* harmony import */ var _bitstream_page_resolver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./bitstream-page.resolver */ 20281);
/* harmony import */ var _bitstream_page_authorizations_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./bitstream-page-authorizations.guard */ 34023);
/* harmony import */ var _edit_bitstream_page_themed_edit_bitstream_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./edit-bitstream-page/themed-edit-bitstream-page.component */ 23458);
/* harmony import */ var _legacy_bitstream_url_redirect_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./legacy-bitstream-url-redirect.guard */ 93201);













const EDIT_BITSTREAM_PATH = ':id/edit';
const EDIT_BITSTREAM_AUTHORIZATIONS_PATH = ':id/authorizations';
/**
 * Routing module to help navigate Bitstream pages
 */
const ROUTES = [{
  // Resolve XMLUI bitstream download URLs
  path: 'handle/:prefix/:suffix/:filename',
  component: _bitstream_download_page_bitstream_download_page_component__WEBPACK_IMPORTED_MODULE_8__.BitstreamDownloadPageComponent,
  canActivate: [_legacy_bitstream_url_redirect_guard__WEBPACK_IMPORTED_MODULE_12__.legacyBitstreamURLRedirectGuard]
}, {
  // Resolve JSPUI bitstream download URLs
  path: ':prefix/:suffix/:sequence_id/:filename',
  component: _bitstream_download_page_bitstream_download_page_component__WEBPACK_IMPORTED_MODULE_8__.BitstreamDownloadPageComponent,
  canActivate: [_legacy_bitstream_url_redirect_guard__WEBPACK_IMPORTED_MODULE_12__.legacyBitstreamURLRedirectGuard]
}, {
  // Resolve angular bitstream download URLs
  path: ':id/download',
  component: _bitstream_download_page_bitstream_download_page_component__WEBPACK_IMPORTED_MODULE_8__.BitstreamDownloadPageComponent,
  resolve: {
    bitstream: _bitstream_page_resolver__WEBPACK_IMPORTED_MODULE_9__.bitstreamPageResolver
  }
}, {
  path: EDIT_BITSTREAM_PATH,
  component: _edit_bitstream_page_themed_edit_bitstream_page_component__WEBPACK_IMPORTED_MODULE_11__.ThemedEditBitstreamPageComponent,
  resolve: {
    bitstream: _bitstream_page_resolver__WEBPACK_IMPORTED_MODULE_9__.bitstreamPageResolver,
    breadcrumb: _core_breadcrumbs_bitstream_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_1__.bitstreamBreadcrumbResolver
  },
  canActivate: [_core_auth_authenticated_guard__WEBPACK_IMPORTED_MODULE_0__.authenticatedGuard]
}, {
  path: EDIT_BITSTREAM_AUTHORIZATIONS_PATH,
  canActivate: [_bitstream_page_authorizations_guard__WEBPACK_IMPORTED_MODULE_10__.bitstreamPageAuthorizationsGuard],
  children: [{
    path: 'create',
    resolve: {
      resourcePolicyTarget: _shared_resource_policies_resolvers_resource_policy_target_resolver__WEBPACK_IMPORTED_MODULE_6__.resourcePolicyTargetResolver
    },
    component: _shared_resource_policies_create_resource_policy_create_component__WEBPACK_IMPORTED_MODULE_3__.ResourcePolicyCreateComponent,
    data: {
      title: 'resource-policies.create.page.title',
      showBreadcrumbs: true
    }
  }, {
    path: 'edit',
    resolve: {
      breadcrumb: _core_breadcrumbs_i18n_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_2__.i18nBreadcrumbResolver,
      resourcePolicy: _shared_resource_policies_resolvers_resource_policy_resolver__WEBPACK_IMPORTED_MODULE_5__.resourcePolicyResolver
    },
    component: _shared_resource_policies_edit_resource_policy_edit_component__WEBPACK_IMPORTED_MODULE_4__.ResourcePolicyEditComponent,
    data: {
      breadcrumbKey: 'item.edit',
      title: 'resource-policies.edit.page.title',
      showBreadcrumbs: true
    }
  }, {
    path: '',
    resolve: {
      bitstream: _bitstream_page_resolver__WEBPACK_IMPORTED_MODULE_9__.bitstreamPageResolver,
      breadcrumb: _core_breadcrumbs_bitstream_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_1__.bitstreamBreadcrumbResolver
    },
    component: _bitstream_authorizations_bitstream_authorizations_component__WEBPACK_IMPORTED_MODULE_7__.BitstreamAuthorizationsComponent,
    data: {
      title: 'bitstream.edit.authorizations.title',
      showBreadcrumbs: true
    }
  }]
}];

/***/ }),

/***/ 20281:
/*!***********************************************************!*\
  !*** ./src/app/bitstream-page/bitstream-page.resolver.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BITSTREAM_PAGE_LINKS_TO_FOLLOW: () => (/* binding */ BITSTREAM_PAGE_LINKS_TO_FOLLOW),
/* harmony export */   bitstreamPageResolver: () => (/* binding */ bitstreamPageResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _core_data_bitstream_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/data/bitstream-data.service */ 42578);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/shared/operators */ 55757);
/* harmony import */ var _shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/utils/follow-link-config.model */ 67600);




/**
 * The self links defined in this list are expected to be requested somewhere in the near future
 * Requesting them as embeds will limit the number of requests
 */
const BITSTREAM_PAGE_LINKS_TO_FOLLOW = [(0,_shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_2__.followLink)('bundle', {}, (0,_shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_2__.followLink)('primaryBitstream'), (0,_shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_2__.followLink)('item')), (0,_shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_2__.followLink)('format')];
/**
 * Method for resolving a bitstream based on the parameters in the current route
 * @param {ActivatedRouteSnapshot} route The current ActivatedRouteSnapshot
 * @param {RouterStateSnapshot} state The current RouterStateSnapshot
 * @param {BitstreamDataService} bitstreamService
 * @returns Observable<<RemoteData<Item>> Emits the found bitstream based on the parameters in the current route,
 * or an error if something went wrong
 */
const bitstreamPageResolver = (route, state, bitstreamService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_core_data_bitstream_data_service__WEBPACK_IMPORTED_MODULE_0__.BitstreamDataService)) => {
  return bitstreamService.findById(route.params.id, true, false, ...BITSTREAM_PAGE_LINKS_TO_FOLLOW).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_1__.getFirstCompletedRemoteData)());
};

/***/ }),

/***/ 51736:
/*!*************************************************************************************!*\
  !*** ./src/app/bitstream-page/edit-bitstream-page/edit-bitstream-page.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditBitstreamPageComponent: () => (/* binding */ EditBitstreamPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ng-dynamic-forms/core */ 94403);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/cloneDeep */ 46123);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! rxjs */ 27639);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! rxjs */ 17796);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! rxjs/operators */ 84975);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! rxjs/operators */ 78374);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! rxjs/operators */ 85687);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! rxjs/operators */ 21252);
/* harmony import */ var _core_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/breadcrumbs/dso-name.service */ 96526);
/* harmony import */ var _core_data_bitstream_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/data/bitstream-data.service */ 42578);
/* harmony import */ var _core_data_bitstream_format_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/data/bitstream-format-data.service */ 4856);
/* harmony import */ var _core_data_primary_bitstream_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/data/primary-bitstream.service */ 86096);
/* harmony import */ var _core_shared_bitstream_format_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/shared/bitstream-format.model */ 760);
/* harmony import */ var _core_shared_bitstream_format_resource_type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/shared/bitstream-format.resource-type */ 92174);
/* harmony import */ var _core_shared_bitstream_format_support_level__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/shared/bitstream-format-support-level */ 70334);
/* harmony import */ var _core_shared_metadata_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/shared/metadata.utils */ 39552);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/shared/operators */ 55757);
/* harmony import */ var _item_page_item_page_routing_paths__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../item-page/item-page-routing-paths */ 90887);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/empty.util */ 82777);
/* harmony import */ var _shared_error_error_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/error/error.component */ 79632);
/* harmony import */ var _shared_form_builder_ds_dynamic_form_ui_models_custom_switch_custom_switch_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/form/builder/ds-dynamic-form-ui/models/custom-switch/custom-switch.model */ 37636);
/* harmony import */ var _shared_form_builder_ds_dynamic_form_ui_models_ds_dynamic_input_model__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/form/builder/ds-dynamic-form-ui/models/ds-dynamic-input.model */ 66733);
/* harmony import */ var _shared_form_builder_ds_dynamic_form_ui_models_ds_dynamic_textarea_model__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../shared/form/builder/ds-dynamic-form-ui/models/ds-dynamic-textarea.model */ 77485);
/* harmony import */ var _shared_form_builder_ds_dynamic_form_ui_models_scrollable_dropdown_dynamic_scrollable_dropdown_model__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../shared/form/builder/ds-dynamic-form-ui/models/scrollable-dropdown/dynamic-scrollable-dropdown.model */ 11220);
/* harmony import */ var _shared_form_form_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../shared/form/form.component */ 99386);
/* harmony import */ var _shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../shared/loading/themed-loading.component */ 82394);
/* harmony import */ var _shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../shared/notifications/notifications.service */ 69472);
/* harmony import */ var _shared_utils_file_size_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../shared/utils/file-size-pipe */ 43525);
/* harmony import */ var _shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../shared/utils/var.directive */ 18226);
/* harmony import */ var _thumbnail_themed_thumbnail_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../thumbnail/themed-thumbnail.component */ 97402);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/core */ 90310);







































const _c0 = a0 => ["/bitstreams", a0, "authorizations"];
function EditBitstreamPageComponent_ng_container_0_div_2_ds_form_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "ds-form", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("submitForm", function EditBitstreamPageComponent_ng_container_0_div_2_ds_form_12_Template_ds_form_submitForm_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵresetView"](ctx_r1.onSubmit());
    })("cancel", function EditBitstreamPageComponent_ng_container_0_div_2_ds_form_12_Template_ds_form_cancel_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵresetView"](ctx_r1.onCancel());
    })("dfChange", function EditBitstreamPageComponent_ng_container_0_div_2_ds_form_12_Template_ds_form_dfChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵresetView"](ctx_r1.onChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](1, "div", 13)(2, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const bitstreamRD_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](2).ngVar;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("formId", "edit-bitstream-form-id")("formGroup", ctx_r1.formGroup)("formModel", ctx_r1.formModel)("formLayout", ctx_r1.formLayout)("submitLabel", "form.save");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpureFunction1"](9, _c0, bitstreamRD_r3 == null ? null : bitstreamRD_r3.payload == null ? null : bitstreamRD_r3.payload.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipeBind1"](4, 7, "bitstream.edit.authorizations.link"));
  }
}
function EditBitstreamPageComponent_ng_container_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "div", 4)(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](2, "ds-thumbnail", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](3, "div", 7)(4, "div", 1)(5, "div", 4)(6, "div", 8)(7, "h1", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](9, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipe"](11, "dsFileSize");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](12, EditBitstreamPageComponent_ng_container_0_div_2_ds_form_12_Template, 5, 11, "ds-form", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const bitstreamRD_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"]().ngVar;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("thumbnail", bitstreamRD_r3 == null ? null : bitstreamRD_r3.payload);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate1"]("", ctx_r1.dsoNameService.getName(bitstreamRD_r3 == null ? null : bitstreamRD_r3.payload), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate1"]("(", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipeBind1"](11, 4, bitstreamRD_r3 == null ? null : bitstreamRD_r3.payload == null ? null : bitstreamRD_r3.payload.sizeBytes), ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", ctx_r1.formGroup);
  }
}
function EditBitstreamPageComponent_ng_container_0_ds_error_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](0, "ds-error", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpropertyInterpolate"]("message", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipeBind1"](1, 1, "error.bitstream"));
  }
}
function EditBitstreamPageComponent_ng_container_0_ds_loading_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](0, "ds-loading", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpropertyInterpolate"]("message", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipeBind1"](1, 1, "loading.bitstream"));
  }
}
function EditBitstreamPageComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](2, EditBitstreamPageComponent_ng_container_0_div_2_Template, 13, 6, "div", 2)(3, EditBitstreamPageComponent_ng_container_0_ds_error_3_Template, 2, 3, "ds-error", 3)(4, EditBitstreamPageComponent_ng_container_0_ds_loading_4_Template, 2, 3, "ds-loading", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const bitstreamRD_r3 = ctx.ngVar;
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", bitstreamRD_r3 == null ? null : bitstreamRD_r3.hasSucceeded);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", bitstreamRD_r3 == null ? null : bitstreamRD_r3.hasFailed);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", !bitstreamRD_r3 || (bitstreamRD_r3 == null ? null : bitstreamRD_r3.isLoading));
  }
}
/**
 * Page component for editing a bitstream
 */
class EditBitstreamPageComponent {
  constructor(route, router, changeDetectorRef, formService, translate, bitstreamService, dsoNameService, notificationsService, bitstreamFormatService, primaryBitstreamService) {
    this.route = route;
    this.router = router;
    this.changeDetectorRef = changeDetectorRef;
    this.formService = formService;
    this.translate = translate;
    this.bitstreamService = bitstreamService;
    this.dsoNameService = dsoNameService;
    this.notificationsService = notificationsService;
    this.bitstreamFormatService = bitstreamFormatService;
    this.primaryBitstreamService = primaryBitstreamService;
    /**
     * @type {string} Key prefix used to generate form messages
     */
    this.KEY_PREFIX = 'bitstream.edit.form.';
    /**
     * @type {string} Key suffix used to generate form labels
     */
    this.LABEL_KEY_SUFFIX = '.label';
    /**
     * @type {string} Key suffix used to generate form labels
     */
    this.HINT_KEY_SUFFIX = '.hint';
    /**
     * @type {string} Key prefix used to generate notification messages
     */
    this.NOTIFICATIONS_PREFIX = 'bitstream.edit.notifications.';
    /**
     * IIIF image width metadata key
     */
    this.IMAGE_WIDTH_METADATA = 'iiif.image.width';
    /**
     * IIIF image height metadata key
     */
    this.IMAGE_HEIGHT_METADATA = 'iiif.image.height';
    /**
     * IIIF table of contents metadata key
     */
    this.IIIF_TOC_METADATA = 'iiif.toc';
    /**
     * IIIF label metadata key
     */
    this.IIIF_LABEL_METADATA = 'iiif.label';
    /**
     * Options for fetching all bitstream formats
     */
    this.findAllOptions = {
      elementsPerPage: 20,
      currentPage: 1
    };
    /**
     * The Dynamic Input Model for the file's name
     */
    this.fileNameModel = new _shared_form_builder_ds_dynamic_form_ui_models_ds_dynamic_input_model__WEBPACK_IMPORTED_MODULE_14__.DsDynamicInputModel({
      hasSelectableMetadata: false,
      metadataFields: [],
      repeatable: false,
      submissionId: '',
      id: 'fileName',
      name: 'fileName',
      required: true,
      validators: {
        required: null
      },
      errorMessages: {
        required: 'You must provide a file name for the bitstream'
      }
    });
    /**
     * The Dynamic Switch Model for the file's name
     */
    this.primaryBitstreamModel = new _shared_form_builder_ds_dynamic_form_ui_models_custom_switch_custom_switch_model__WEBPACK_IMPORTED_MODULE_13__.DynamicCustomSwitchModel({
      id: 'primaryBitstream',
      name: 'primaryBitstream'
    });
    /**
     * The Dynamic TextArea Model for the file's description
     */
    this.descriptionModel = new _shared_form_builder_ds_dynamic_form_ui_models_ds_dynamic_textarea_model__WEBPACK_IMPORTED_MODULE_15__.DsDynamicTextAreaModel({
      hasSelectableMetadata: false,
      metadataFields: [],
      repeatable: false,
      submissionId: '',
      id: 'description',
      name: 'description',
      rows: 10
    });
    /**
     * The Dynamic Input Model for the selected format
     */
    this.selectedFormatModel = new _shared_form_builder_ds_dynamic_form_ui_models_scrollable_dropdown_dynamic_scrollable_dropdown_model__WEBPACK_IMPORTED_MODULE_16__.DynamicScrollableDropdownModel({
      id: 'selectedFormat',
      name: 'selectedFormat',
      displayKey: 'shortDescription',
      repeatable: false,
      metadataFields: [],
      submissionId: '',
      hasSelectableMetadata: false,
      resourceType: _core_shared_bitstream_format_resource_type__WEBPACK_IMPORTED_MODULE_6__.BITSTREAM_FORMAT,
      formatFunction: format => {
        if (format instanceof _core_shared_bitstream_format_model__WEBPACK_IMPORTED_MODULE_5__.BitstreamFormat) {
          return (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_11__.hasValue)(format) && format.supportLevel === _core_shared_bitstream_format_support_level__WEBPACK_IMPORTED_MODULE_7__.BitstreamFormatSupportLevel.Unknown ? this.translate.instant(this.KEY_PREFIX + 'selectedFormat.unknown') : format.shortDescription;
        } else {
          return format;
        }
      }
    });
    /**
     * The Dynamic Input Model for supplying more format information
     */
    this.newFormatModel = new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_24__.DynamicInputModel({
      id: 'newFormat',
      name: 'newFormat'
    });
    /**
     * The Dynamic Input Model for the iiif label
     */
    this.iiifLabelModel = new _shared_form_builder_ds_dynamic_form_ui_models_ds_dynamic_input_model__WEBPACK_IMPORTED_MODULE_14__.DsDynamicInputModel({
      hasSelectableMetadata: false,
      metadataFields: [],
      repeatable: false,
      submissionId: '',
      id: 'iiifLabel',
      name: 'iiifLabel'
    }, {
      grid: {
        host: 'col col-lg-6 d-inline-block'
      }
    });
    this.iiifLabelContainer = new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_24__.DynamicFormGroupModel({
      id: 'iiifLabelContainer',
      group: [this.iiifLabelModel]
    }, {
      grid: {
        host: 'form-row'
      }
    });
    this.iiifTocModel = new _shared_form_builder_ds_dynamic_form_ui_models_ds_dynamic_input_model__WEBPACK_IMPORTED_MODULE_14__.DsDynamicInputModel({
      hasSelectableMetadata: false,
      metadataFields: [],
      repeatable: false,
      submissionId: '',
      id: 'iiifToc',
      name: 'iiifToc'
    }, {
      grid: {
        host: 'col col-lg-6 d-inline-block'
      }
    });
    this.iiifTocContainer = new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_24__.DynamicFormGroupModel({
      id: 'iiifTocContainer',
      group: [this.iiifTocModel]
    }, {
      grid: {
        host: 'form-row'
      }
    });
    this.iiifWidthModel = new _shared_form_builder_ds_dynamic_form_ui_models_ds_dynamic_input_model__WEBPACK_IMPORTED_MODULE_14__.DsDynamicInputModel({
      hasSelectableMetadata: false,
      metadataFields: [],
      repeatable: false,
      submissionId: '',
      id: 'iiifWidth',
      name: 'iiifWidth'
    }, {
      grid: {
        host: 'col col-lg-6 d-inline-block'
      }
    });
    this.iiifWidthContainer = new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_24__.DynamicFormGroupModel({
      id: 'iiifWidthContainer',
      group: [this.iiifWidthModel]
    }, {
      grid: {
        host: 'form-row'
      }
    });
    this.iiifHeightModel = new _shared_form_builder_ds_dynamic_form_ui_models_ds_dynamic_input_model__WEBPACK_IMPORTED_MODULE_14__.DsDynamicInputModel({
      hasSelectableMetadata: false,
      metadataFields: [],
      repeatable: false,
      submissionId: '',
      id: 'iiifHeight',
      name: 'iiifHeight'
    }, {
      grid: {
        host: 'col col-lg-6 d-inline-block'
      }
    });
    this.iiifHeightContainer = new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_24__.DynamicFormGroupModel({
      id: 'iiifHeightContainer',
      group: [this.iiifHeightModel]
    }, {
      grid: {
        host: 'form-row'
      }
    });
    /**
     * All input models in a simple array for easier iterations
     */
    this.inputModels = [this.primaryBitstreamModel, this.fileNameModel, this.descriptionModel, this.selectedFormatModel, this.newFormatModel];
    /**
     * The dynamic form fields used for editing the information of a bitstream
     * @type {(DynamicInputModel | DynamicTextAreaModel)[]}
     */
    this.formModel = [new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_24__.DynamicFormGroupModel({
      id: 'fileNamePrimaryContainer',
      group: [this.primaryBitstreamModel, this.fileNameModel]
    }, {
      grid: {
        host: 'form-row'
      }
    }), new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_24__.DynamicFormGroupModel({
      id: 'descriptionContainer',
      group: [this.descriptionModel]
    }), new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_24__.DynamicFormGroupModel({
      id: 'formatContainer',
      group: [this.selectedFormatModel, this.newFormatModel]
    })];
    /**
     * The base layout of the "Other Format" input
     */
    this.newFormatBaseLayout = 'col col-sm-6 d-inline-block';
    /**
     * Layout used for structuring the form inputs
     */
    this.formLayout = {
      fileName: {
        grid: {
          host: 'col col-sm-8 d-inline-block'
        }
      },
      primaryBitstream: {
        grid: {
          container: 'col-12'
        },
        element: {
          container: 'text-right'
        }
      },
      description: {
        grid: {
          host: 'col-12 d-inline-block'
        }
      },
      embargo: {
        grid: {
          host: 'col-12 d-inline-block'
        }
      },
      selectedFormat: {
        grid: {
          host: 'col col-sm-6 d-inline-block'
        }
      },
      newFormat: {
        grid: {
          host: this.newFormatBaseLayout + ' invisible'
        }
      },
      fileNamePrimaryContainer: {
        grid: {
          host: 'row position-relative'
        }
      },
      descriptionContainer: {
        grid: {
          host: 'row'
        }
      },
      formatContainer: {
        grid: {
          host: 'row'
        }
      }
    };
    /**
     * Set to true when the parent item supports IIIF.
     */
    this.isIIIF = false;
    /**
     * Array to track all subscriptions and unsubscribe them onDestroy
     * @type {Array}
     */
    this.subs = [];
  }
  /**
   * Initialize the component
   * - Create a FormGroup using the FormModel defined earlier
   * - Subscribe on the route data to fetch the bitstream to edit and update the form values
   * - Translate the form labels and hints
   */
  ngOnInit() {
    this.itemId = this.route.snapshot.queryParams.itemId;
    this.entityType = this.route.snapshot.queryParams.entityType;
    this.bitstreamRD$ = this.route.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_25__.map)(data => data.bitstream));
    const bitstream$ = this.bitstreamRD$.pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_9__.getFirstSucceededRemoteData)(), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_9__.getRemoteDataPayload)());
    const bundle$ = bitstream$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_26__.switchMap)(bitstream => bitstream.bundle), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_9__.getFirstSucceededRemoteDataPayload)());
    const primaryBitstream$ = bundle$.pipe((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_11__.hasValueOperator)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_26__.switchMap)(bundle => this.bitstreamService.findByHref(bundle._links.primaryBitstream.href)), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_9__.getFirstSucceededRemoteDataPayload)());
    const item$ = bundle$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_26__.switchMap)(bundle => bundle.item), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_9__.getFirstSucceededRemoteDataPayload)());
    const format$ = bitstream$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_26__.switchMap)(bitstream => bitstream.format), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_9__.getFirstSucceededRemoteDataPayload)());
    this.subs.push((0,rxjs__WEBPACK_IMPORTED_MODULE_27__.combineLatest)(bitstream$, bundle$, primaryBitstream$, item$, format$).subscribe(([bitstream, bundle, primaryBitstream, item, format]) => {
      this.bitstream = bitstream;
      this.bundle = bundle;
      this.selectedFormat = format;
      // hasValue(primaryBitstream) because if there's no primaryBitstream on the bundle it will
      // be a success response, but empty
      this.primaryBitstreamUUID = (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_11__.hasValue)(primaryBitstream) ? primaryBitstream.uuid : null;
      this.itemId = item.uuid;
      this.setIiifStatus(this.bitstream);
    }), format$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_28__.take)(1)).subscribe(format => this.originalFormat = format));
    this.subs.push(this.translate.onLangChange.subscribe(() => {
      this.updateFieldTranslations();
    }));
  }
  /**
   * Initializes the form.
   */
  setForm() {
    this.formGroup = this.formService.createFormGroup(this.formModel);
    this.updateForm(this.bitstream);
    this.updateFieldTranslations();
  }
  /**
   * Update the current form values with bitstream properties
   * @param bitstream
   */
  updateForm(bitstream) {
    this.formGroup.patchValue({
      fileNamePrimaryContainer: {
        fileName: bitstream.name,
        primaryBitstream: this.primaryBitstreamUUID === bitstream.uuid
      },
      descriptionContainer: {
        description: bitstream.firstMetadataValue('dc.description')
      },
      formatContainer: {
        selectedFormat: this.selectedFormat.shortDescription,
        newFormat: (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_11__.hasValue)(bitstream.firstMetadata('dc.format')) ? bitstream.firstMetadata('dc.format').value : undefined
      }
    });
    if (this.isIIIF) {
      this.formGroup.patchValue({
        iiifLabelContainer: {
          iiifLabel: bitstream.firstMetadataValue(this.IIIF_LABEL_METADATA)
        },
        iiifTocContainer: {
          iiifToc: bitstream.firstMetadataValue(this.IIIF_TOC_METADATA)
        },
        iiifWidthContainer: {
          iiifWidth: bitstream.firstMetadataValue(this.IMAGE_WIDTH_METADATA)
        },
        iiifHeightContainer: {
          iiifHeight: bitstream.firstMetadataValue(this.IMAGE_HEIGHT_METADATA)
        }
      });
    }
    this.updateNewFormatLayout();
  }
  /**
   * Update the layout of the "Other Format" input depending on the selected format
   * @param selectedId
   */
  updateNewFormatLayout() {
    if (this.isUnknownFormat()) {
      this.formLayout.newFormat.grid.host = this.newFormatBaseLayout;
    } else {
      this.formLayout.newFormat.grid.host = this.newFormatBaseLayout + ' invisible';
    }
  }
  /**
   * Is the provided format (id) part of the list of unknown formats?
   * @param id
   */
  isUnknownFormat() {
    return (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_11__.hasValue)(this.selectedFormat) && this.selectedFormat.supportLevel === _core_shared_bitstream_format_support_level__WEBPACK_IMPORTED_MODULE_7__.BitstreamFormatSupportLevel.Unknown;
  }
  /**
   * Used to update translations of labels and hints on init and on language change
   */
  updateFieldTranslations() {
    this.inputModels.forEach(fieldModel => {
      this.updateFieldTranslation(fieldModel);
    });
  }
  /**
   * Update the translations of a DynamicFormControlModel
   * @param fieldModel
   */
  updateFieldTranslation(fieldModel) {
    fieldModel.label = this.translate.instant(this.KEY_PREFIX + fieldModel.id + this.LABEL_KEY_SUFFIX);
    if (fieldModel.id !== this.primaryBitstreamModel.id) {
      fieldModel.hint = this.translate.instant(this.KEY_PREFIX + fieldModel.id + this.HINT_KEY_SUFFIX);
    }
  }
  /**
   * Fired whenever the form receives an update and changes the layout of the "Other Format" input, depending on the selected format
   * @param event
   */
  onChange(event) {
    const model = event.model;
    if (model.id === this.selectedFormatModel.id) {
      this.selectedFormat = model.value;
      this.updateNewFormatLayout();
    }
  }
  /**
   * Check for changes against the bitstream and send update requests to the REST API
   */
  onSubmit() {
    const updatedValues = this.formGroup.getRawValue();
    const updatedBitstream = this.formToBitstream(updatedValues);
    const isNewFormat = this.selectedFormat.id !== this.originalFormat.id;
    const isPrimary = updatedValues.fileNamePrimaryContainer.primaryBitstream;
    const wasPrimary = this.primaryBitstreamUUID === this.bitstream.uuid;
    let bitstream$;
    let bundle$;
    let errorWhileSaving = false;
    if (wasPrimary !== isPrimary) {
      let bundleRd$;
      if (wasPrimary) {
        bundleRd$ = this.primaryBitstreamService.delete(this.bundle);
      } else if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_11__.hasValue)(this.primaryBitstreamUUID)) {
        bundleRd$ = this.primaryBitstreamService.put(this.bitstream, this.bundle);
      } else {
        bundleRd$ = this.primaryBitstreamService.create(this.bitstream, this.bundle);
      }
      const completedBundleRd$ = bundleRd$.pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_9__.getFirstCompletedRemoteData)());
      this.subs.push(completedBundleRd$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_29__.filter)(bundleRd => bundleRd.hasFailed)).subscribe(bundleRd => {
        this.notificationsService.error(this.translate.instant(this.NOTIFICATIONS_PREFIX + 'error.primaryBitstream.title'), bundleRd.errorMessage);
        errorWhileSaving = true;
      }));
      bundle$ = completedBundleRd$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_25__.map)(bundleRd => {
        if (bundleRd.hasSucceeded) {
          return bundleRd.payload;
        } else {
          return this.bundle;
        }
      }));
      this.subs.push(bundle$.pipe((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_11__.hasValueOperator)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_26__.switchMap)(bundle => this.bitstreamService.findByHref(bundle._links.primaryBitstream.href, false)), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_9__.getFirstSucceededRemoteDataPayload)()).subscribe(bitstream => {
        this.primaryBitstreamUUID = (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_11__.hasValue)(bitstream) ? bitstream.uuid : null;
      }));
    } else {
      bundle$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_30__.of)(this.bundle);
    }
    if (isNewFormat) {
      bitstream$ = this.bitstreamService.updateFormat(this.bitstream, this.selectedFormat).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_9__.getFirstCompletedRemoteData)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_25__.map)(formatResponse => {
        if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_11__.hasValue)(formatResponse) && formatResponse.hasFailed) {
          this.notificationsService.error(this.translate.instant(this.NOTIFICATIONS_PREFIX + 'error.format.title'), formatResponse.errorMessage);
        } else {
          return formatResponse.payload;
        }
      }));
    } else {
      bitstream$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_30__.of)(this.bitstream);
    }
    (0,rxjs__WEBPACK_IMPORTED_MODULE_27__.combineLatest)([bundle$, bitstream$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_31__.tap)(([bundle]) => this.bundle = bundle), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_26__.switchMap)(() => {
      return this.bitstreamService.update(updatedBitstream).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_9__.getFirstSucceededRemoteDataPayload)());
    })).subscribe(() => {
      this.bitstreamService.commitUpdates();
      this.notificationsService.success(this.translate.instant(this.NOTIFICATIONS_PREFIX + 'saved.title'), this.translate.instant(this.NOTIFICATIONS_PREFIX + 'saved.content'));
      if (!errorWhileSaving) {
        this.navigateToItemEditBitstreams();
      }
    });
  }
  /**
   * Parse form data to an updated bitstream object
   * @param rawForm   Raw form data
   */
  formToBitstream(rawForm) {
    const updatedBitstream = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0___default()(this.bitstream);
    const newMetadata = updatedBitstream.metadata;
    _core_shared_metadata_utils__WEBPACK_IMPORTED_MODULE_8__.Metadata.setFirstValue(newMetadata, 'dc.title', rawForm.fileNamePrimaryContainer.fileName);
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_11__.isEmpty)(rawForm.descriptionContainer.description)) {
      delete newMetadata['dc.description'];
    } else {
      _core_shared_metadata_utils__WEBPACK_IMPORTED_MODULE_8__.Metadata.setFirstValue(newMetadata, 'dc.description', rawForm.descriptionContainer.description);
    }
    if (this.isIIIF) {
      // It's helpful to remove these metadata elements entirely when the form value is empty.
      // This avoids potential issues on the REST side and makes it possible to do things like
      // remove an existing "table of contents" entry.
      if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_11__.isEmpty)(rawForm.iiifLabelContainer.iiifLabel)) {
        delete newMetadata[this.IIIF_LABEL_METADATA];
      } else {
        _core_shared_metadata_utils__WEBPACK_IMPORTED_MODULE_8__.Metadata.setFirstValue(newMetadata, this.IIIF_LABEL_METADATA, rawForm.iiifLabelContainer.iiifLabel);
      }
      if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_11__.isEmpty)(rawForm.iiifTocContainer.iiifToc)) {
        delete newMetadata[this.IIIF_TOC_METADATA];
      } else {
        _core_shared_metadata_utils__WEBPACK_IMPORTED_MODULE_8__.Metadata.setFirstValue(newMetadata, this.IIIF_TOC_METADATA, rawForm.iiifTocContainer.iiifToc);
      }
      if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_11__.isEmpty)(rawForm.iiifWidthContainer.iiifWidth)) {
        delete newMetadata[this.IMAGE_WIDTH_METADATA];
      } else {
        _core_shared_metadata_utils__WEBPACK_IMPORTED_MODULE_8__.Metadata.setFirstValue(newMetadata, this.IMAGE_WIDTH_METADATA, rawForm.iiifWidthContainer.iiifWidth);
      }
      if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_11__.isEmpty)(rawForm.iiifHeightContainer.iiifHeight)) {
        delete newMetadata[this.IMAGE_HEIGHT_METADATA];
      } else {
        _core_shared_metadata_utils__WEBPACK_IMPORTED_MODULE_8__.Metadata.setFirstValue(newMetadata, this.IMAGE_HEIGHT_METADATA, rawForm.iiifHeightContainer.iiifHeight);
      }
    }
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_11__.isNotEmpty)(rawForm.formatContainer.newFormat)) {
      _core_shared_metadata_utils__WEBPACK_IMPORTED_MODULE_8__.Metadata.setFirstValue(newMetadata, 'dc.format', rawForm.formatContainer.newFormat);
    }
    updatedBitstream.metadata = newMetadata;
    return updatedBitstream;
  }
  /**
   * Cancel the form and return to the previous page
   */
  onCancel() {
    this.navigateToItemEditBitstreams();
  }
  /**
   * When the item ID is present, navigate back to the item's edit bitstreams page,
   * otherwise retrieve the item ID based on the owning bundle's link
   */
  navigateToItemEditBitstreams() {
    this.router.navigate([(0,_item_page_item_page_routing_paths__WEBPACK_IMPORTED_MODULE_10__.getEntityEditRoute)(this.entityType, this.itemId), 'bitstreams']);
  }
  /**
   * Verifies that the parent item is iiif-enabled. Checks bitstream mimetype to be
   * sure it's an image, excluding bitstreams in the THUMBNAIL or OTHERCONTENT bundles.
   * @param bitstream
   */
  setIiifStatus(bitstream) {
    const regexExcludeBundles = /OTHERCONTENT|THUMBNAIL|LICENSE/;
    const regexIIIFItem = /true|yes/i;
    const isImage$ = this.bitstream.format.pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_9__.getFirstSucceededRemoteData)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_25__.map)(format => format.payload.mimetype.includes('image/')));
    const isIIIFBundle$ = this.bitstream.bundle.pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_9__.getFirstSucceededRemoteData)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_25__.map)(bundle => this.dsoNameService.getName(bundle.payload).match(regexExcludeBundles) == null));
    const isEnabled$ = this.bitstream.bundle.pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_9__.getFirstSucceededRemoteData)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_25__.map)(bundle => bundle.payload.item.pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_9__.getFirstSucceededRemoteData)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_25__.map)(item => item.payload.firstMetadataValue('dspace.iiif.enabled') && item.payload.firstMetadataValue('dspace.iiif.enabled').match(regexIIIFItem) !== null))));
    const iiifSub = (0,rxjs__WEBPACK_IMPORTED_MODULE_27__.combineLatest)(isImage$, isIIIFBundle$, isEnabled$).subscribe(([isImage, isIIIFBundle, isEnabled]) => {
      if (isImage && isIIIFBundle && isEnabled) {
        this.isIIIF = true;
        this.inputModels.push(this.iiifLabelModel);
        this.formModel.push(this.iiifLabelContainer);
        this.inputModels.push(this.iiifTocModel);
        this.formModel.push(this.iiifTocContainer);
        this.inputModels.push(this.iiifWidthModel);
        this.formModel.push(this.iiifWidthContainer);
        this.inputModels.push(this.iiifHeightModel);
        this.formModel.push(this.iiifHeightContainer);
      }
      this.setForm();
      this.changeDetectorRef.detectChanges();
    });
    this.subs.push(iiifSub);
  }
  /**
   * Unsubscribe from open subscriptions
   */
  ngOnDestroy() {
    this.subs.filter(subscription => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_11__.hasValue)(subscription)).forEach(subscription => subscription.unsubscribe());
  }
  findAllFormatsServiceFactory() {
    return () => this.bitstreamFormatService;
  }
  static {
    this.ɵfac = function EditBitstreamPageComponent_Factory(t) {
      return new (t || EditBitstreamPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_32__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_32__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_23__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdirectiveInject"](_ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_24__.DynamicFormService), _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_33__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdirectiveInject"](_core_data_bitstream_data_service__WEBPACK_IMPORTED_MODULE_2__.BitstreamDataService), _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdirectiveInject"](_core_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_1__.DSONameService), _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdirectiveInject"](_shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_19__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdirectiveInject"](_core_data_bitstream_format_data_service__WEBPACK_IMPORTED_MODULE_3__.BitstreamFormatDataService), _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdirectiveInject"](_core_data_primary_bitstream_service__WEBPACK_IMPORTED_MODULE_4__.PrimaryBitstreamService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdefineComponent"]({
      type: EditBitstreamPageComponent,
      selectors: [["ds-base-edit-bitstream-page"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 3,
      consts: [[4, "ngVar"], [1, "container"], ["class", "row", 4, "ngIf"], [3, "message", 4, "ngIf"], [1, "row"], [1, "col-md-2"], [3, "thumbnail"], [1, "col-md-10"], [1, "col-12"], [1, "h2"], [1, "text-muted"], [3, "formId", "formGroup", "formModel", "formLayout", "submitLabel", "submitForm", "cancel", "dfChange", 4, "ngIf"], [3, "submitForm", "cancel", "dfChange", "formId", "formGroup", "formModel", "formLayout", "submitLabel"], ["additional", "", 1, "container", "py-3"], [3, "routerLink"], [3, "message"]],
      template: function EditBitstreamPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](0, EditBitstreamPageComponent_ng_container_0_Template, 5, 3, "ng-container", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipe"](1, "async");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngVar", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipeBind1"](1, 1, ctx.bitstreamRD$));
        }
      },
      dependencies: [_shared_form_form_component__WEBPACK_IMPORTED_MODULE_17__.FormComponent, _angular_common__WEBPACK_IMPORTED_MODULE_34__.NgIf, _shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_21__.VarDirective, _thumbnail_themed_thumbnail_component__WEBPACK_IMPORTED_MODULE_22__.ThemedThumbnailComponent, _angular_common__WEBPACK_IMPORTED_MODULE_34__.AsyncPipe, _angular_router__WEBPACK_IMPORTED_MODULE_32__.RouterLink, _shared_error_error_component__WEBPACK_IMPORTED_MODULE_12__.ErrorComponent, _shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_18__.ThemedLoadingComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_33__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_33__.TranslatePipe, _shared_utils_file_size_pipe__WEBPACK_IMPORTED_MODULE_20__.FileSizePipe],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtYml0c3RyZWFtLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUEiLCJmaWxlIjoiZWRpdC1iaXRzdHJlYW0tcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYml0c3RyZWFtLXBhZ2UvZWRpdC1iaXRzdHJlYW0tcGFnZS9lZGl0LWJpdHN0cmVhbS1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBO0FBQ0EsZ2xCQUFnbEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqLyJdLCJzb3VyY2VSb290IjoiIn0= */"],
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 23458:
/*!********************************************************************************************!*\
  !*** ./src/app/bitstream-page/edit-bitstream-page/themed-edit-bitstream-page.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemedEditBitstreamPageComponent: () => (/* binding */ ThemedEditBitstreamPageComponent)
/* harmony export */ });
/* harmony import */ var _shared_theme_support_themed_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/theme-support/themed.component */ 8886);
/* harmony import */ var _edit_bitstream_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-bitstream-page.component */ 51736);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);



const _c0 = ["*"];
function ThemedEditBitstreamPageComponent_ng_template_0_Template(rf, ctx) {}
class ThemedEditBitstreamPageComponent extends _shared_theme_support_themed_component__WEBPACK_IMPORTED_MODULE_0__.ThemedComponent {
  getComponentName() {
    return 'EditBitstreamPageComponent';
  }
  importThemedComponent(themeName) {
    return __webpack_require__(90789)(`./${themeName}/app/bitstream-page/edit-bitstream-page/edit-bitstream-page.component`);
  }
  importUnthemedComponent() {
    return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./edit-bitstream-page.component */ 51736));
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵThemedEditBitstreamPageComponent_BaseFactory;
      return function ThemedEditBitstreamPageComponent_Factory(t) {
        return (ɵThemedEditBitstreamPageComponent_BaseFactory || (ɵThemedEditBitstreamPageComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](ThemedEditBitstreamPageComponent)))(t || ThemedEditBitstreamPageComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ThemedEditBitstreamPageComponent,
      selectors: [["ds-edit-bitstream-page"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      ngContentSelectors: _c0,
      decls: 5,
      vars: 0,
      consts: [["vcr", ""], ["content", ""]],
      template: function ThemedEditBitstreamPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ThemedEditBitstreamPageComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
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

/***/ 93201:
/*!***********************************************************************!*\
  !*** ./src/app/bitstream-page/legacy-bitstream-url-redirect.guard.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   legacyBitstreamURLRedirectGuard: () => (/* binding */ legacyBitstreamURLRedirectGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var _app_routing_paths__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app-routing-paths */ 69799);
/* harmony import */ var _core_data_bitstream_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/data/bitstream-data.service */ 42578);
/* harmony import */ var _core_services_hard_redirect_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/services/hard-redirect.service */ 59752);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/shared/operators */ 55757);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/empty.util */ 82777);








/**
 * Redirects to a bitstream based on the handle of the item, and the sequence id or the filename of the
 * bitstream. In production mode the status code will also be set the status code to 301 marking it as a permanent URL
 * redirect for bots to the regular bitstream download Page.
 *
 * @returns Either a {@link UrlTree} to the 404 page when the url isn't a valid format or false in order to make the
 * user wait until the {@link HardRedirectService#redirect} was performed
 */
const legacyBitstreamURLRedirectGuard = (route, state, bitstreamDataService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_core_data_bitstream_data_service__WEBPACK_IMPORTED_MODULE_1__.BitstreamDataService), serverHardRedirectService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_core_services_hard_redirect_service__WEBPACK_IMPORTED_MODULE_2__.HardRedirectService), router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router)) => {
  const prefix = route.params.prefix;
  const suffix = route.params.suffix;
  const filename = route.params.filename;
  let sequenceId = route.params.sequence_id;
  if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_4__.hasNoValue)(sequenceId)) {
    sequenceId = route.queryParams.sequenceId;
  }
  return bitstreamDataService.findByItemHandle(`${prefix}/${suffix}`, sequenceId, filename).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_3__.getFirstCompletedRemoteData)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(rd => {
    if (rd.hasSucceeded && !rd.hasNoContent) {
      serverHardRedirectService.redirect(new URL(`/bitstreams/${rd.payload.uuid}/download`, serverHardRedirectService.getCurrentOrigin()).href, 301);
      return false;
    } else {
      return router.createUrlTree([_app_routing_paths__WEBPACK_IMPORTED_MODULE_0__.PAGE_NOT_FOUND_PATH]);
    }
  }));
};

/***/ }),

/***/ 90839:
/*!************************************************************!*\
  !*** ./src/app/breadcrumbs/breadcrumb/breadcrumb.model.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Breadcrumb: () => (/* binding */ Breadcrumb)
/* harmony export */ });
/**
 * Class representing a single breadcrumb
 */
class Breadcrumb {
  constructor(
  /**
   * The display value of the breadcrumb
   */
  text,
  /**
   * The optional url of the breadcrumb
   */
  url) {
    this.text = text;
    this.url = url;
  }
}

/***/ }),

/***/ 28516:
/*!*******************************************************************!*\
  !*** ./src/app/core/breadcrumbs/bitstream-breadcrumb.resolver.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bitstreamBreadcrumbResolver: () => (/* binding */ bitstreamBreadcrumbResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _bitstream_page_bitstream_page_resolver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../bitstream-page/bitstream-page.resolver */ 20281);
/* harmony import */ var _data_bitstream_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/bitstream-data.service */ 42578);
/* harmony import */ var _bitstream_breadcrumbs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bitstream-breadcrumbs.service */ 55612);
/* harmony import */ var _dso_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dso-breadcrumb.resolver */ 70025);





/**
 * The resolve function that resolves the BreadcrumbConfig object for an Item
 */
const bitstreamBreadcrumbResolver = (route, state, breadcrumbService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_bitstream_breadcrumbs_service__WEBPACK_IMPORTED_MODULE_2__.BitstreamBreadcrumbsService), dataService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_data_bitstream_data_service__WEBPACK_IMPORTED_MODULE_1__.BitstreamDataService)) => {
  const linksToFollow = _bitstream_page_bitstream_page_resolver__WEBPACK_IMPORTED_MODULE_0__.BITSTREAM_PAGE_LINKS_TO_FOLLOW;
  return (0,_dso_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_3__.DSOBreadcrumbResolver)(route, state, breadcrumbService, dataService, ...linksToFollow);
};

/***/ }),

/***/ 55612:
/*!*******************************************************************!*\
  !*** ./src/app/core/breadcrumbs/bitstream-breadcrumbs.service.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BitstreamBreadcrumbsService: () => (/* binding */ BitstreamBreadcrumbsService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 17796);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 84975);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var _app_routing_paths__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app-routing-paths */ 69799);
/* harmony import */ var _bitstream_page_bitstream_page_resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../bitstream-page/bitstream-page.resolver */ 20281);
/* harmony import */ var _breadcrumbs_breadcrumb_breadcrumb_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../breadcrumbs/breadcrumb/breadcrumb.model */ 90839);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/empty.util */ 82777);
/* harmony import */ var _cache_builders_link_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cache/builders/link.service */ 1321);
/* harmony import */ var _data_bitstream_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/bitstream-data.service */ 42578);
/* harmony import */ var _shared_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/operators */ 55757);
/* harmony import */ var _dso_breadcrumbs_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dso-breadcrumbs.service */ 67045);
/* harmony import */ var _dso_name_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dso-name.service */ 96526);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 90310);















/**
 * Service to calculate DSpaceObject breadcrumbs for a single part of the route
 */
class BitstreamBreadcrumbsService extends _dso_breadcrumbs_service__WEBPACK_IMPORTED_MODULE_7__.DSOBreadcrumbsService {
  constructor(bitstreamService, linkService, dsoNameService) {
    super(linkService, dsoNameService);
    this.bitstreamService = bitstreamService;
    this.linkService = linkService;
    this.dsoNameService = dsoNameService;
  }
  /**
   * Method to recursively calculate the breadcrumbs
   * This method returns the name and url of the key and all its parent DSOs recursively, top down
   * @param key The key (a DSpaceObject) used to resolve the breadcrumb
   * @param url The url to use as a link for this breadcrumb
   */
  getBreadcrumbs(key, url) {
    const label = this.dsoNameService.getName(key);
    const crumb = new _breadcrumbs_breadcrumb_breadcrumb_model__WEBPACK_IMPORTED_MODULE_2__.Breadcrumb(label, url);
    return this.getOwningItem(key.uuid).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(parentRD => {
      if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_3__.isNotEmpty)(parentRD) && (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_3__.hasValue)(parentRD.payload)) {
        const parent = parentRD.payload;
        return super.getBreadcrumbs(parent, (0,_app_routing_paths__WEBPACK_IMPORTED_MODULE_0__.getDSORoute)(parent));
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)([]);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(breadcrumbs => [...breadcrumbs, crumb]));
  }
  getOwningItem(uuid) {
    return this.bitstreamService.findById(uuid, true, true, ..._bitstream_page_bitstream_page_resolver__WEBPACK_IMPORTED_MODULE_1__.BITSTREAM_PAGE_LINKS_TO_FOLLOW).pipe((0,_shared_operators__WEBPACK_IMPORTED_MODULE_6__.getFirstCompletedRemoteData)(), (0,_shared_operators__WEBPACK_IMPORTED_MODULE_6__.getRemoteDataPayload)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(bitstream => {
      if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_3__.hasValue)(bitstream)) {
        return bitstream.bundle.pipe((0,_shared_operators__WEBPACK_IMPORTED_MODULE_6__.getFirstCompletedRemoteData)(), (0,_shared_operators__WEBPACK_IMPORTED_MODULE_6__.getRemoteDataPayload)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(bundle => {
          if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_3__.hasValue)(bundle)) {
            return bundle.item.pipe((0,_shared_operators__WEBPACK_IMPORTED_MODULE_6__.getFirstCompletedRemoteData)());
          } else {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(undefined);
          }
        }));
      } else {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(undefined);
      }
    }));
  }
  static {
    this.ɵfac = function BitstreamBreadcrumbsService_Factory(t) {
      return new (t || BitstreamBreadcrumbsService)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_data_bitstream_data_service__WEBPACK_IMPORTED_MODULE_5__.BitstreamDataService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_cache_builders_link_service__WEBPACK_IMPORTED_MODULE_4__.LinkService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_dso_name_service__WEBPACK_IMPORTED_MODULE_8__.DSONameService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjectable"]({
      token: BitstreamBreadcrumbsService,
      factory: BitstreamBreadcrumbsService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 70025:
/*!*************************************************************!*\
  !*** ./src/app/core/breadcrumbs/dso-breadcrumb.resolver.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DSOBreadcrumbResolver: () => (/* binding */ DSOBreadcrumbResolver),
/* harmony export */   DSOBreadcrumbResolverByUuid: () => (/* binding */ DSOBreadcrumbResolverByUuid)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var _app_routing_paths__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app-routing-paths */ 69799);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/empty.util */ 82777);
/* harmony import */ var _shared_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/operators */ 55757);




/**
 * Method for resolving a breadcrumb config object
 * @param {ActivatedRouteSnapshot} route The current ActivatedRouteSnapshot
 * @param {RouterStateSnapshot} state The current RouterStateSnapshot
 * @param {DSOBreadcrumbsService} breadcrumbService
 * @param {IdentifiableDataService} dataService
 * @param linksToFollow
 * @returns BreadcrumbConfig object
 */
const DSOBreadcrumbResolver = (route, state, breadcrumbService, dataService, ...linksToFollow) => {
  return DSOBreadcrumbResolverByUuid(route, state, route.params.id, breadcrumbService, dataService, ...linksToFollow);
};
/**
 * Method for resolving a breadcrumb config object with the given UUID
 *
 * @param {ActivatedRouteSnapshot} route The current ActivatedRouteSnapshot
 * @param {RouterStateSnapshot} state The current RouterStateSnapshot
 * @param {String} uuid The uuid of the DSO object
 * @param {DSOBreadcrumbsService} breadcrumbService
 * @param {IdentifiableDataService} dataService
 * @param linksToFollow
 * @returns BreadcrumbConfig object
 */
const DSOBreadcrumbResolverByUuid = (route, state, uuid, breadcrumbService, dataService, ...linksToFollow) => {
  return dataService.findById(uuid, true, false, ...linksToFollow).pipe((0,_shared_operators__WEBPACK_IMPORTED_MODULE_2__.getFirstCompletedRemoteData)(), (0,_shared_operators__WEBPACK_IMPORTED_MODULE_2__.getRemoteDataPayload)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(object => {
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_1__.hasValue)(object)) {
      return {
        provider: breadcrumbService,
        key: object,
        url: (0,_app_routing_paths__WEBPACK_IMPORTED_MODULE_0__.getDSORoute)(object)
      };
    } else {
      return undefined;
    }
  }));
};

/***/ }),

/***/ 67045:
/*!*************************************************************!*\
  !*** ./src/app/core/breadcrumbs/dso-breadcrumbs.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DSOBreadcrumbsService: () => (/* binding */ DSOBreadcrumbsService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 17796);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 47386);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 84975);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var _app_routing_paths__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app-routing-paths */ 69799);
/* harmony import */ var _breadcrumbs_breadcrumb_breadcrumb_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../breadcrumbs/breadcrumb/breadcrumb.model */ 90839);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/empty.util */ 82777);
/* harmony import */ var _shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/utils/follow-link-config.model */ 67600);
/* harmony import */ var _cache_builders_link_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cache/builders/link.service */ 1321);
/* harmony import */ var _dso_name_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dso-name.service */ 96526);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 90310);











/**
 * Service to calculate DSpaceObject breadcrumbs for a single part of the route
 */
class DSOBreadcrumbsService {
  constructor(linkService, dsoNameService) {
    this.linkService = linkService;
    this.dsoNameService = dsoNameService;
  }
  /**
   * Method to recursively calculate the breadcrumbs
   * This method returns the name and url of the key and all its parent DSOs recursively, top down
   * @param key The key (a DSpaceObject) used to resolve the breadcrumb
   * @param url The url to use as a link for this breadcrumb
   */
  getBreadcrumbs(key, url) {
    const label = this.dsoNameService.getName(key);
    const crumb = new _breadcrumbs_breadcrumb_breadcrumb_model__WEBPACK_IMPORTED_MODULE_1__.Breadcrumb(label, url);
    const propertyName = key.getParentLinkKey();
    return this.linkService.resolveLink(key, (0,_shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_3__.followLink)(propertyName))[propertyName].pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.find)(parentRD => parentRD.hasSucceeded || parentRD.statusCode === 204), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(parentRD => {
      if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_2__.hasValue)(parentRD) && (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_2__.hasValue)(parentRD.payload)) {
        const parent = parentRD.payload;
        return this.getBreadcrumbs(parent, (0,_app_routing_paths__WEBPACK_IMPORTED_MODULE_0__.getDSORoute)(parent));
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)([]);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(breadcrumbs => [...breadcrumbs, crumb]));
  }
  static {
    this.ɵfac = function DSOBreadcrumbsService_Factory(t) {
      return new (t || DSOBreadcrumbsService)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_cache_builders_link_service__WEBPACK_IMPORTED_MODULE_4__.LinkService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_dso_name_service__WEBPACK_IMPORTED_MODULE_5__.DSONameService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjectable"]({
      token: DSOBreadcrumbsService,
      factory: DSOBreadcrumbsService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

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

/***/ 6056:
/*!**************************************************************************************************************!*\
  !*** ./src/app/core/data/feature-authorization/feature-authorization-guard/dso-page-single-feature.guard.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dsoPageSingleFeatureGuard: () => (/* binding */ dsoPageSingleFeatureGuard)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var _dso_page_some_feature_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dso-page-some-feature.guard */ 17024);


/**
 * Abstract Guard for preventing unauthorized access to {@link DSpaceObject} pages that require rights for a specific feature
 * This guard utilizes a resolver to retrieve the relevant object to check authorizations for
 */
const dsoPageSingleFeatureGuard = (getResolveFn, getFeatureID) => (0,_dso_page_some_feature_guard__WEBPACK_IMPORTED_MODULE_0__.dsoPageSomeFeatureGuard)(getResolveFn, (route, state) => getFeatureID(route, state).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(featureID => [featureID])));

/***/ }),

/***/ 17024:
/*!************************************************************************************************************!*\
  !*** ./src/app/core/data/feature-authorization/feature-authorization-guard/dso-page-some-feature.guard.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultDSOGetObjectUrl: () => (/* binding */ defaultDSOGetObjectUrl),
/* harmony export */   dsoPageSomeFeatureGuard: () => (/* binding */ dsoPageSomeFeatureGuard),
/* harmony export */   getRouteWithDSOId: () => (/* binding */ getRouteWithDSOId)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/empty.util */ 82777);
/* harmony import */ var _shared_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/operators */ 55757);
/* harmony import */ var _some_feature_authorization_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./some-feature-authorization.guard */ 51581);




/**
 * Method to resolve resolve (parent) route that contains the UUID of the DSO
 * @param route The current route
 */
const getRouteWithDSOId = route => {
  let routeWithDSOId = route;
  while ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_0__.hasNoValue)(routeWithDSOId.params.id) && (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_0__.hasValue)(routeWithDSOId.parent)) {
    routeWithDSOId = routeWithDSOId.parent;
  }
  return routeWithDSOId;
};
const defaultDSOGetObjectUrl = resolve => {
  return (route, state) => {
    const routeWithObjectID = getRouteWithDSOId(route);
    return resolve(routeWithObjectID, state).pipe((0,_shared_operators__WEBPACK_IMPORTED_MODULE_1__.getAllSucceededRemoteDataPayload)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(dso => dso.self));
  };
};
/**
 * Guard for preventing unauthorized access to {@link DSpaceObject} pages that require rights for any specific feature in a list
 * This guard utilizes a resolver to retrieve the relevant object to check authorizations for
 */
const dsoPageSomeFeatureGuard = (getResolveFn, getFeatureIDs, getObjectUrl = defaultDSOGetObjectUrl, getEPersonUuid) => (0,_some_feature_authorization_guard__WEBPACK_IMPORTED_MODULE_2__.someFeatureAuthorizationGuard)((route, state) => getFeatureIDs(route, state), getObjectUrl(getResolveFn()), getEPersonUuid);

/***/ }),

/***/ 86096:
/*!********************************************************!*\
  !*** ./src/app/core/data/primary-bitstream.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrimaryBitstreamService: () => (/* binding */ PrimaryBitstreamService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 94485);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 84975);
/* harmony import */ var _shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/notifications/notifications.service */ 69472);
/* harmony import */ var _cache_builders_remote_data_build_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cache/builders/remote-data-build.service */ 76799);
/* harmony import */ var _cache_object_cache_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cache/object-cache.service */ 41684);
/* harmony import */ var _shared_hal_endpoint_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/hal-endpoint.service */ 4910);
/* harmony import */ var _shared_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/operators */ 55757);
/* harmony import */ var _bundle_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bundle-data.service */ 81443);
/* harmony import */ var _request_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./request.models */ 44446);
/* harmony import */ var _request_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./request.service */ 32473);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 90310);

















class PrimaryBitstreamService {
  constructor(requestService, rdbService, objectCache, halService, notificationsService, bundleDataService) {
    this.requestService = requestService;
    this.rdbService = rdbService;
    this.objectCache = objectCache;
    this.halService = halService;
    this.notificationsService = notificationsService;
    this.bundleDataService = bundleDataService;
  }
  /**
   * Returns the type of HttpOptions object needed from primary bitstream requests.
   * i.e. with a Content-Type header set to `text/uri-list`
   * @protected
   */
  getHttpOptions() {
    const options = Object.create({});
    let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpHeaders();
    headers = headers.append('Content-Type', 'text/uri-list');
    options.headers = headers;
    return options;
  }
  /**
   * Send a request of the given type to the endpointURL with an optional primaryBitstreamSelfLink
   * as payload, and return the resulting Observable<RemoteData>
   *
   * @param requestType               The type of request: PostRequest, PutRequest, or DeleteRequest
   * @param endpointURL               The endpoint URL
   * @param primaryBitstreamSelfLink
   * @protected
   */
  createAndSendRequest(requestType, endpointURL, primaryBitstreamSelfLink) {
    const requestId = this.requestService.generateRequestId();
    const request = new requestType(requestId, endpointURL, primaryBitstreamSelfLink, this.getHttpOptions());
    this.requestService.send(request);
    return this.rdbService.buildFromRequestUUID(requestId);
  }
  /**
   * Create a new primaryBitstream
   *
   * @param primaryBitstream  The object to create
   * @param bundle            The bundle to create it on
   */
  create(primaryBitstream, bundle) {
    return this.createAndSendRequest(_request_models__WEBPACK_IMPORTED_MODULE_6__.PostRequest, bundle._links.primaryBitstream.href, primaryBitstream.self);
  }
  /**
   * Update an existing primaryBitstream
   *
   * @param primaryBitstream  The object to update
   * @param bundle            The bundle to update it on
   */
  put(primaryBitstream, bundle) {
    return this.createAndSendRequest(_request_models__WEBPACK_IMPORTED_MODULE_6__.PutRequest, bundle._links.primaryBitstream.href, primaryBitstream.self);
  }
  /**
   * Delete an existing primaryBitstream
   *
   * @param bundle The bundle to delete it from
   */
  delete(bundle) {
    return this.createAndSendRequest(_request_models__WEBPACK_IMPORTED_MODULE_6__.DeleteRequest, bundle._links.primaryBitstream.href).pipe((0,_shared_operators__WEBPACK_IMPORTED_MODULE_4__.getAllCompletedRemoteData)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.switchMap)(rd => {
      return this.bundleDataService.findByHref(bundle.self, rd.hasFailed);
    }));
  }
  static {
    this.ɵfac = function PrimaryBitstreamService_Factory(t) {
      return new (t || PrimaryBitstreamService)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_request_service__WEBPACK_IMPORTED_MODULE_7__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_cache_builders_remote_data_build_service__WEBPACK_IMPORTED_MODULE_1__.RemoteDataBuildService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_cache_object_cache_service__WEBPACK_IMPORTED_MODULE_2__.ObjectCacheService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_shared_hal_endpoint_service__WEBPACK_IMPORTED_MODULE_3__.HALEndpointService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_0__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_bundle_data_service__WEBPACK_IMPORTED_MODULE_5__.BundleDataService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjectable"]({
      token: PrimaryBitstreamService,
      factory: PrimaryBitstreamService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 38308:
/*!*******************************************************!*\
  !*** ./src/app/core/data/signposting-data.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignpostingDataService: () => (/* binding */ SignpostingDataService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 17796);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 60494);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var _config_app_config_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../config/app-config.interface */ 82640);
/* harmony import */ var _dspace_rest_dspace_rest_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dspace-rest/dspace-rest.service */ 53778);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 90310);






/**
 * Service responsible for handling requests related to the Signposting endpoint
 */
class SignpostingDataService {
  constructor(appConfig, restService) {
    this.appConfig = appConfig;
    this.restService = restService;
  }
  /**
   * Retrieve the list of signposting links related to the given resource's id
   *
   * @param uuid
   */
  getLinks(uuid) {
    const baseUrl = `${this.appConfig.rest.baseUrl}`;
    return this.restService.get(`${baseUrl}/signposting/links/${uuid}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(err => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)([]);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(res => res.statusCode === 200 ? res.payload : []));
  }
  static {
    this.ɵfac = function SignpostingDataService_Factory(t) {
      return new (t || SignpostingDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_config_app_config_interface__WEBPACK_IMPORTED_MODULE_0__.APP_CONFIG), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_dspace_rest_dspace_rest_service__WEBPACK_IMPORTED_MODULE_1__.DspaceRestService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
      token: SignpostingDataService,
      factory: SignpostingDataService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 90789:
/*!***********************************************************************************************************************************!*\
  !*** ./src/themes/ lazy ^\.\/.*\/app\/bitstream\-page\/edit\-bitstream\-page\/edit\-bitstream\-page\.component$ namespace object ***!
  \***********************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./custom/app/bitstream-page/edit-bitstream-page/edit-bitstream-page.component": [
		84957,
		"src_themes_custom_app_bitstream-page_edit-bitstream-page_edit-bitstream-page_component_ts"
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
webpackAsyncContext.id = 90789;
module.exports = webpackAsyncContext;

/***/ })

}]);
//# sourceMappingURL=src_app_bitstream-page_bitstream-page-routes_ts.js.map