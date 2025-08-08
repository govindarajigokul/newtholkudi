(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_app_item-page_item-page-routes_ts"],{

/***/ 20216:
/*!**************************************************************!*\
  !*** ./src/app/core/breadcrumbs/item-breadcrumb.resolver.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   itemBreadcrumbResolver: () => (/* binding */ itemBreadcrumbResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _item_page_item_resolver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../item-page/item.resolver */ 56273);
/* harmony import */ var _data_item_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/item-data.service */ 29326);
/* harmony import */ var _dso_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dso-breadcrumb.resolver */ 70025);
/* harmony import */ var _dso_breadcrumbs_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dso-breadcrumbs.service */ 67045);





/**
 * The resolve function that resolves the BreadcrumbConfig object for an Item
 */
const itemBreadcrumbResolver = (route, state, breadcrumbService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_dso_breadcrumbs_service__WEBPACK_IMPORTED_MODULE_3__.DSOBreadcrumbsService), dataService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_data_item_data_service__WEBPACK_IMPORTED_MODULE_1__.ItemDataService)) => {
  const linksToFollow = (0,_item_page_item_resolver__WEBPACK_IMPORTED_MODULE_0__.getItemPageLinksToFollow)();
  return (0,_dso_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_2__.DSOBreadcrumbResolver)(route, state, breadcrumbService, dataService, ...linksToFollow);
};

/***/ }),

/***/ 89147:
/*!**************************************************!*\
  !*** ./src/app/core/orcid/orcid-auth.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrcidAuthService: () => (/* binding */ OrcidAuthService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 27639);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 84975);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/empty.util */ 82777);
/* harmony import */ var _data_configuration_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/configuration-data.service */ 8917);
/* harmony import */ var _profile_researcher_profile_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../profile/researcher-profile-data.service */ 98926);
/* harmony import */ var _services_window_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/window.service */ 1676);
/* harmony import */ var _shared_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/operators */ 55757);
/* harmony import */ var _url_combiner_url_combiner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../url-combiner/url-combiner */ 45663);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 14354);














class OrcidAuthService {
  constructor(_window, configurationService, researcherProfileService, router) {
    this._window = _window;
    this.configurationService = configurationService;
    this.researcherProfileService = researcherProfileService;
    this.router = router;
  }
  /**
   * Check if the given item is linked to an ORCID profile.
   *
   * @param item the item to check
   * @returns the check result
   */
  isLinkedToOrcid(item) {
    return item.hasMetadata('dspace.orcid.authenticated');
  }
  /**
   * Returns true if only the admin users can disconnect a researcher profile from ORCID.
   *
   * @returns the check result
   */
  onlyAdminCanDisconnectProfileFromOrcid() {
    return this.getOrcidDisconnectionAllowedUsersConfiguration().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(propertyRD => {
      return propertyRD.hasSucceeded && propertyRD.payload.values.map(value => value.toLowerCase()).includes('only_admin');
    }));
  }
  /**
   * Returns true if the profile's owner can disconnect that profile from ORCID.
   *
   * @returns the check result
   */
  ownerCanDisconnectProfileFromOrcid() {
    return this.getOrcidDisconnectionAllowedUsersConfiguration().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(propertyRD => {
      return propertyRD.hasSucceeded && propertyRD.payload.values.map(value => value.toLowerCase()).includes('admin_and_owner');
    }));
  }
  /**
   * Perform a link operation to ORCID profile.
   *
   * @param person The person item related to the researcher profile
   * @param code The auth-code received from orcid
   */
  linkOrcidByItem(person, code) {
    const operations = [{
      path: '/orcid',
      op: 'add',
      value: code
    }];
    return this.researcherProfileService.findById(person.firstMetadata('dspace.object.owner').authority).pipe((0,_shared_operators__WEBPACK_IMPORTED_MODULE_4__.getFirstCompletedRemoteData)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(profileRD => this.researcherProfileService.patch(profileRD.payload, operations)));
  }
  /**
   * Perform unlink operation from ORCID profile.
   *
   * @param person The person item related to the researcher profile
   */
  unlinkOrcidByItem(person) {
    const operations = [{
      path: '/orcid',
      op: 'remove'
    }];
    return this.researcherProfileService.findById(person.firstMetadata('dspace.object.owner').authority).pipe((0,_shared_operators__WEBPACK_IMPORTED_MODULE_4__.getFirstCompletedRemoteData)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(profileRD => this.researcherProfileService.patch(profileRD.payload, operations)));
  }
  /**
   * Build and return the url to authenticate with orcid
   *
   * @param profile
   */
  getOrcidAuthorizeUrl(profile) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.combineLatest)([this.configurationService.findByPropertyName('orcid.authorize-url').pipe((0,_shared_operators__WEBPACK_IMPORTED_MODULE_4__.getFirstSucceededRemoteDataPayload)()), this.configurationService.findByPropertyName('orcid.application-client-id').pipe((0,_shared_operators__WEBPACK_IMPORTED_MODULE_4__.getFirstSucceededRemoteDataPayload)()), this.configurationService.findByPropertyName('orcid.scope').pipe((0,_shared_operators__WEBPACK_IMPORTED_MODULE_4__.getFirstSucceededRemoteDataPayload)())]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(([authorizeUrl, clientId, scopes]) => {
      const redirectUri = new _url_combiner_url_combiner__WEBPACK_IMPORTED_MODULE_5__.URLCombiner(this._window.nativeWindow.origin, encodeURIComponent(this.router.url.split('?')[0]));
      return authorizeUrl.values[0] + '?client_id=' + clientId.values[0] + '&redirect_uri=' + redirectUri + '&response_type=code&scope=' + scopes.values.join(' ');
    }));
  }
  /**
   * Return all orcid authorization scopes saved in the given item
   *
   * @param item
   */
  getOrcidAuthorizationScopesByItem(item) {
    return (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_0__.isNotEmpty)(item) ? item.allMetadataValues('dspace.orcid.scope') : [];
  }
  /**
   * Return all orcid authorization scopes available by configuration
   */
  getOrcidAuthorizationScopes() {
    return this.configurationService.findByPropertyName('orcid.scope').pipe((0,_shared_operators__WEBPACK_IMPORTED_MODULE_4__.getFirstCompletedRemoteData)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(propertyRD => propertyRD.hasSucceeded ? propertyRD.payload.values : []));
  }
  getOrcidDisconnectionAllowedUsersConfiguration() {
    return this.configurationService.findByPropertyName('orcid.disconnection.allowed-users').pipe((0,_shared_operators__WEBPACK_IMPORTED_MODULE_4__.getFirstCompletedRemoteData)());
  }
  static {
    this.ɵfac = function OrcidAuthService_Factory(t) {
      return new (t || OrcidAuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_services_window_service__WEBPACK_IMPORTED_MODULE_3__.NativeWindowService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_data_configuration_data_service__WEBPACK_IMPORTED_MODULE_1__.ConfigurationDataService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_profile_researcher_profile_data_service__WEBPACK_IMPORTED_MODULE_2__.ResearcherProfileDataService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
      token: OrcidAuthService,
      factory: OrcidAuthService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 42443:
/*!************************************************************************************************!*\
  !*** ./src/app/item-page/bitstreams/request-a-copy/bitstream-request-a-copy-page.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BitstreamRequestACopyPageComponent: () => (/* binding */ BitstreamRequestACopyPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 56106);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 27639);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs */ 17796);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 85687);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 84975);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 78374);
/* harmony import */ var _app_routing_paths__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../app-routing-paths */ 69799);
/* harmony import */ var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/auth/auth.service */ 67116);
/* harmony import */ var _core_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/breadcrumbs/dso-name.service */ 96526);
/* harmony import */ var _core_data_bitstream_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/data/bitstream-data.service */ 42578);
/* harmony import */ var _core_data_feature_authorization_authorization_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/data/feature-authorization/authorization-data.service */ 3675);
/* harmony import */ var _core_data_feature_authorization_feature_id__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/data/feature-authorization/feature-id */ 3970);
/* harmony import */ var _core_data_item_request_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/data/item-request-data.service */ 11122);
/* harmony import */ var _core_shared_item_request_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/shared/item-request.model */ 57110);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/shared/operators */ 55757);
/* harmony import */ var _shared_btn_disabled_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/btn-disabled.directive */ 60456);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/empty.util */ 82777);
/* harmony import */ var _shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/notifications/notifications.service */ 69472);
/* harmony import */ var _item_page_routing_paths__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../item-page-routing-paths */ 90887);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 90310);






























function BitstreamRequestACopyPageComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 27)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](3, 3, "bitstream-request-a-copy.alert.canDownload1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("routerLink", ctx_r0.getBitstreamLink());
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](6, 5, "bitstream-request-a-copy.alert.canDownload2"));
  }
}
function BitstreamRequestACopyPageComponent_p_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 2, "bitstream-request-a-copy.intro.bitstream.one"), " ", ctx_r0.bitstreamName, "");
  }
}
function BitstreamRequestACopyPageComponent_p_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 1, "bitstream-request-a-copy.intro.bitstream.all"));
  }
}
function BitstreamRequestACopyPageComponent_div_22_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 1, "bitstream-request-a-copy.name.error"), " ");
  }
}
function BitstreamRequestACopyPageComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, BitstreamRequestACopyPageComponent_div_22_span_1_Template, 3, 3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r0.name.errors && ctx_r0.name.errors.required);
  }
}
function BitstreamRequestACopyPageComponent_div_29_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 1, "bitstream-request-a-copy.email.error"), " ");
  }
}
function BitstreamRequestACopyPageComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, BitstreamRequestACopyPageComponent_div_29_span_1_Template, 3, 3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r0.email.errors);
  }
}
/**
 * Page component for requesting a copy for a bitstream
 */
class BitstreamRequestACopyPageComponent {
  constructor(location, translateService, route, router, authorizationService, auth, formBuilder, itemRequestDataService, notificationsService, dsoNameService, bitstreamService) {
    this.location = location;
    this.translateService = translateService;
    this.route = route;
    this.router = router;
    this.authorizationService = authorizationService;
    this.auth = auth;
    this.formBuilder = formBuilder;
    this.itemRequestDataService = itemRequestDataService;
    this.notificationsService = notificationsService;
    this.dsoNameService = dsoNameService;
    this.bitstreamService = bitstreamService;
    this.subs = [];
  }
  ngOnInit() {
    this.requestCopyForm = this.formBuilder.group({
      name: new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.UntypedFormControl('', {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required]
      }),
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.UntypedFormControl('', {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]
      }),
      allfiles: new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.UntypedFormControl(''),
      message: new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.UntypedFormControl('')
    });
    this.item$ = this.route.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(data => data.dso), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_8__.getFirstSucceededRemoteDataPayload)());
    this.subs.push(this.item$.subscribe(item => {
      this.item = item;
      this.itemName = this.dsoNameService.getName(item);
    }));
    this.bitstream$ = this.route.queryParams.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.filter)(params => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_10__.hasValue)(params) && (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_10__.hasValue)(params.bitstream)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.switchMap)(params => this.bitstreamService.findById(params.bitstream)), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_8__.getFirstSucceededRemoteDataPayload)());
    this.subs.push(this.bitstream$.subscribe(bitstream => {
      this.bitstream = bitstream;
      this.bitstreamName = this.dsoNameService.getName(bitstream);
    }));
    this.canDownload$ = this.bitstream$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.switchMap)(bitstream => this.authorizationService.isAuthorized(_core_data_feature_authorization_feature_id__WEBPACK_IMPORTED_MODULE_5__.FeatureID.CanDownload, (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_10__.isNotEmpty)(bitstream) ? bitstream.self : undefined)));
    const canRequestCopy$ = this.bitstream$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.switchMap)(bitstream => this.authorizationService.isAuthorized(_core_data_feature_authorization_feature_id__WEBPACK_IMPORTED_MODULE_5__.FeatureID.CanRequestACopy, (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_10__.isNotEmpty)(bitstream) ? bitstream.self : undefined)));
    this.subs.push((0,rxjs__WEBPACK_IMPORTED_MODULE_18__.combineLatest)([this.canDownload$, canRequestCopy$]).subscribe(([canDownload, canRequestCopy]) => {
      if (!canDownload && !canRequestCopy) {
        this.router.navigateByUrl((0,_app_routing_paths__WEBPACK_IMPORTED_MODULE_0__.getForbiddenRoute)(), {
          skipLocationChange: true
        });
      }
    }));
    this.initValues();
  }
  get name() {
    return this.requestCopyForm.get('name');
  }
  get email() {
    return this.requestCopyForm.get('email');
  }
  get message() {
    return this.requestCopyForm.get('message');
  }
  get allfiles() {
    return this.requestCopyForm.get('allfiles');
  }
  /**
   * Initialise the form values based on the current user.
   */
  initValues() {
    this.getCurrentUser().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.take)(1)).subscribe(user => {
      this.requestCopyForm.patchValue({
        allfiles: 'true'
      });
      if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_10__.hasValue)(user)) {
        this.requestCopyForm.patchValue({
          name: user.name,
          email: user.email
        });
      }
    });
    this.bitstream$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.take)(1)).subscribe(bitstream => {
      this.requestCopyForm.patchValue({
        allfiles: 'false'
      });
    });
  }
  /**
   * Retrieve the current user
   */
  getCurrentUser() {
    return this.auth.isAuthenticated().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.switchMap)(authenticated => {
      if (authenticated) {
        return this.auth.getAuthenticatedUserFromStore();
      } else {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_20__.of)(undefined);
      }
    }));
  }
  /**
   * Submit the the form values as an item request to the server.
   * When the submission is successful, the user will be redirected to the item page and a success notification will be shown.
   * When the submission fails, the user will stay on the page and an error notification will be shown
   */
  onSubmit() {
    const itemRequest = new _core_shared_item_request_model__WEBPACK_IMPORTED_MODULE_7__.ItemRequest();
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_10__.hasValue)(this.bitstream)) {
      itemRequest.bitstreamId = this.bitstream.uuid;
    }
    itemRequest.itemId = this.item.uuid;
    itemRequest.allfiles = this.allfiles.value;
    itemRequest.requestEmail = this.email.value;
    itemRequest.requestName = this.name.value;
    itemRequest.requestMessage = this.message.value;
    this.itemRequestDataService.requestACopy(itemRequest).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_8__.getFirstCompletedRemoteData)()).subscribe(rd => {
      if (rd.hasSucceeded) {
        this.notificationsService.success(this.translateService.get('bitstream-request-a-copy.submit.success'));
        this.navigateBack();
      } else {
        this.notificationsService.error(this.translateService.get('bitstream-request-a-copy.submit.error'));
      }
    });
  }
  ngOnDestroy() {
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_10__.hasValue)(this.subs)) {
      this.subs.forEach(sub => {
        if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_10__.hasValue)(sub)) {
          sub.unsubscribe();
        }
      });
    }
  }
  /**
   * Navigates back to the user's previous location
   */
  navigateBack() {
    this.location.back();
  }
  getItemPath() {
    return [(0,_item_page_routing_paths__WEBPACK_IMPORTED_MODULE_12__.getItemPageRoute)(this.item)];
  }
  /**
   * Retrieves the link to the bistream download page
   */
  getBitstreamLink() {
    return [(0,_app_routing_paths__WEBPACK_IMPORTED_MODULE_0__.getBitstreamDownloadRoute)(this.bitstream)];
  }
  static {
    this.ɵfac = function BitstreamRequestACopyPageComponent_Factory(t) {
      return new (t || BitstreamRequestACopyPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_21__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_23__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_23__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_core_data_feature_authorization_authorization_data_service__WEBPACK_IMPORTED_MODULE_4__.AuthorizationDataService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_14__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_core_data_item_request_data_service__WEBPACK_IMPORTED_MODULE_6__.ItemRequestDataService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_11__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_core_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_2__.DSONameService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_core_data_bitstream_data_service__WEBPACK_IMPORTED_MODULE_3__.BitstreamDataService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
      type: BitstreamRequestACopyPageComponent,
      selectors: [["ds-bitstream-request-a-copy-page"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵStandaloneFeature"]],
      decls: 64,
      vars: 52,
      consts: [[1, "container"], [1, "mb-4"], ["class", "alert alert-success", 4, "ngIf"], [3, "routerLink"], [4, "ngIf"], [3, "ngSubmit", "formGroup"], [1, "form-group"], [1, "row", "mb-4"], [1, "col-12"], ["for", "name"], ["type", "text", "id", "name", "formControlName", "name", 3, "className"], ["class", "invalid-feedback show-feedback", 4, "ngIf"], ["for", "email"], ["id", "email", "formControlName", "email", 3, "className"], [1, "text-muted", "ds-hint"], [1, "ml-4"], ["type", "radio", "id", "allfiles-true", "formControlName", "allfiles", "value", "true", 3, "className"], ["for", "allfiles-true", 1, "form-check-label"], ["type", "radio", "id", "allfiles-false", "formControlName", "allfiles", "value", "false", 3, "className"], ["for", "allfiles-false", 1, "form-check-label"], ["for", "message"], ["rows", "5", "id", "message", "formControlName", "message", 3, "className"], [1, "row"], [1, "col-12", "text-right"], ["role", "button", 1, "btn", "btn-outline-secondary", "mr-1", 3, "click"], [1, "fas", "fa-arrow-left"], [1, "btn", "btn-default", "btn-primary", 3, "click", "dsBtnDisabled"], [1, "alert", "alert-success"], [1, "invalid-feedback", "show-feedback"]],
      template: function BitstreamRequestACopyPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](3, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](4, BitstreamRequestACopyPageComponent_div_4_Template, 7, 7, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](5, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "div")(7, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](9, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "a", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](12, BitstreamRequestACopyPageComponent_p_12_Template, 3, 4, "p", 4)(13, BitstreamRequestACopyPageComponent_p_13_Template, 3, 3, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](14, "form", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngSubmit", function BitstreamRequestACopyPageComponent_Template_form_ngSubmit_14_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](15, "div", 6)(16, "div", 7)(17, "div", 8)(18, "label", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](20, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](21, "input", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](22, BitstreamRequestACopyPageComponent_div_22_Template, 2, 1, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](23, "div", 7)(24, "div", 8)(25, "label", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](26);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](27, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](28, "input", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](29, BitstreamRequestACopyPageComponent_div_29_Template, 2, 1, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](30, "small", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](31);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](32, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](33, "div", 7)(34, "div", 8)(35, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](36);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](37, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](38, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](39, "input", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](40, "label", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](41);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](42, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](43, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](44, "input", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](45, "label", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](46);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](47, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](48, "div", 7)(49, "div", 8)(50, "label", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](51);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](52, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](53, "textarea", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](54, "hr");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](55, "div", 22)(56, "div", 23)(57, "a", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function BitstreamRequestACopyPageComponent_Template_a_click_57_listener() {
            return ctx.navigateBack();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](58, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](59);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](60, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](61, "button", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function BitstreamRequestACopyPageComponent_Template_button_click_61_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](62);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](63, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](3, 28, "bitstream-request-a-copy.header"));
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](5, 30, ctx.canDownload$));
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](9, 32, "bitstream-request-a-copy.intro"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("routerLink", ctx.getItemPath());
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx.itemName);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.bitstream !== undefined && ctx.allfiles.value === "false");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.allfiles.value === "true");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassMap"]("ng-invalid");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("formGroup", ctx.requestCopyForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](20, 34, "bitstream-request-a-copy.name.label"));
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("className", ctx.name.invalid && (ctx.name.dirty || ctx.name.touched) ? "form-control is-invalid" : "form-control");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.name.invalid && (ctx.name.dirty || ctx.name.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](27, 36, "bitstream-request-a-copy.email.label"));
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("className", ctx.email.invalid && (ctx.email.dirty || ctx.email.touched) ? "form-control is-invalid" : "form-control");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.email.invalid && (ctx.email.dirty || ctx.email.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](32, 38, "bitstream-request-a-copy.email.hint"));
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](37, 40, "bitstream-request-a-copy.allfiles.label"));
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("className", "form-check-input");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](42, 42, "bitstream-request-a-copy.files-all-true.label"));
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("className", "form-check-input");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵattribute"]("disabled", ctx.bitstream === undefined ? true : null);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](47, 44, "bitstream-request-a-copy.files-all-false.label"));
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](52, 46, "bitstream-request-a-copy.message.label"));
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("className", "form-control");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](60, 48, "bitstream-request-a-copy.return"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("dsBtnDisabled", ctx.requestCopyForm.invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](63, 50, "bitstream-request-a-copy.submit"));
        }
      },
      dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__.TranslatePipe, _angular_router__WEBPACK_IMPORTED_MODULE_23__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_21__.AsyncPipe, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgIf, _shared_btn_disabled_directive__WEBPACK_IMPORTED_MODULE_9__.BtnDisabledDirective],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 20317:
/*!***************************************************************************!*\
  !*** ./src/app/item-page/bitstreams/upload/upload-bitstream.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UploadBitstreamComponent: () => (/* binding */ UploadBitstreamComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/forms */ 56106);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 17796);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 84975);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 78374);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 88280);
/* harmony import */ var _app_routing_paths__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app-routing-paths */ 69799);
/* harmony import */ var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/auth/auth.service */ 67116);
/* harmony import */ var _core_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/breadcrumbs/dso-name.service */ 96526);
/* harmony import */ var _core_data_bundle_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/data/bundle-data.service */ 81443);
/* harmony import */ var _core_data_item_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/data/item-data.service */ 29326);
/* harmony import */ var _core_data_request_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/data/request.service */ 32473);
/* harmony import */ var _core_shared_bundle_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/shared/bundle.model */ 70673);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/shared/operators */ 55757);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/empty.util */ 82777);
/* harmony import */ var _shared_input_suggestions_dso_input_suggestions_dso_input_suggestions_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/input-suggestions/dso-input-suggestions/dso-input-suggestions.component */ 131);
/* harmony import */ var _shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/notifications/notifications.service */ 69472);
/* harmony import */ var _shared_upload_uploader_uploader_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/upload/uploader/uploader.component */ 18430);
/* harmony import */ var _shared_upload_uploader_uploader_options_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/upload/uploader/uploader-options.model */ 32979);
/* harmony import */ var _shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/utils/var.directive */ 18226);
/* harmony import */ var _item_page_routing_paths__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../item-page-routing-paths */ 90887);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ 14354);
































function UploadBitstreamComponent_ng_container_1_ng_container_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div")(1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().ngVar;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](3, 2, "item.bitstreams.upload.item"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx_r2.dsoNameService.getName(item_r2));
  }
}
function UploadBitstreamComponent_ng_container_1_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, UploadBitstreamComponent_ng_container_1_ng_container_6_div_1_Template, 6, 4, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r2 = ctx.ngVar;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", item_r2);
  }
}
function UploadBitstreamComponent_ng_container_1_button_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function UploadBitstreamComponent_ng_container_1_button_15_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r2.createBundle());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](3, 1, "item.bitstreams.upload.bundle.new"), " ");
  }
}
function UploadBitstreamComponent_ng_container_1_ds_uploader_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "ds-uploader", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("onCompleteItem", function UploadBitstreamComponent_ng_container_1_ds_uploader_16_Template_ds_uploader_onCompleteItem_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r2.onCompleteItem($event));
    })("onUploadError", function UploadBitstreamComponent_ng_container_1_ds_uploader_16_Template_ds_uploader_onUploadError_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r2.onUploadError());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("dropMsg", "item.bitstreams.upload.drop-message")("dropOverDocumentMsg", "item.bitstreams.upload.drop-message")("enableDragOverDocument", true)("uploadFilesOptions", ctx_r2.uploadFilesOptions);
  }
}
function UploadBitstreamComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "div", 3)(2, "div", 4)(3, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](6, UploadBitstreamComponent_ng_container_1_ng_container_6_Template, 2, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](8, "div", 6)(9, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](12, "ds-dso-input-suggestions", 8, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayListener"]("ngModelChange", function UploadBitstreamComponent_ng_container_1_Template_ds_dso_input_suggestions_ngModelChange_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayBindingSet"](ctx_r2.selectedBundleName, $event) || (ctx_r2.selectedBundleName = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("typeSuggestion", function UploadBitstreamComponent_ng_container_1_Template_ds_dso_input_suggestions_typeSuggestion_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r2.bundleNameChange());
    })("clickSuggestion", function UploadBitstreamComponent_ng_container_1_Template_ds_dso_input_suggestions_clickSuggestion_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r2.onClick($event));
    })("click", function UploadBitstreamComponent_ng_container_1_Template_ds_dso_input_suggestions_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r1);
      const f_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵreference"](13);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](f_r4.open());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](15, UploadBitstreamComponent_ng_container_1_button_15_Template, 4, 3, "button", 9)(16, UploadBitstreamComponent_ng_container_1_ds_uploader_16_Template, 1, 4, "ds-uploader", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](17, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function UploadBitstreamComponent_ng_container_1_Template_button_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r2.onCancel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](5, 12, "item.bitstreams.upload.title"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngVar", (tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](7, 14, ctx_r2.itemRD$)) == null ? null : tmp_3_0.payload);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](11, 16, "item.bitstreams.upload.bundle"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("suggestions", ctx_r2.bundles)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](14, 18, "item.bitstreams.upload.bundle.placeholder"))("action", ctx_r2.getCurrentUrl())("name", "bundle-select")("debounceTime", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.selectedBundleName);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", !ctx_r2.selectedBundleId && (ctx_r2.selectedBundleName == null ? null : ctx_r2.selectedBundleName.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r2.selectedBundleId);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](19, 20, "item.bitstreams.upload.cancel"));
  }
}
/**
 * Page component for uploading a bitstream to an item
 */
class UploadBitstreamComponent {
  constructor(route, router, itemService, bundleService, authService, notificationsService, translate, requestService, dsoNameService) {
    this.route = route;
    this.router = router;
    this.itemService = itemService;
    this.bundleService = bundleService;
    this.authService = authService;
    this.notificationsService = notificationsService;
    this.translate = translate;
    this.requestService = requestService;
    this.dsoNameService = dsoNameService;
    /**
     * The item's bundles and default the default bundles that should be suggested (defined in environment)
     */
    this.bundles = [];
    /**
     * The uploader configuration options
     * @type {UploaderOptions}
     */
    this.uploadFilesOptions = Object.assign(new _shared_upload_uploader_uploader_options_model__WEBPACK_IMPORTED_MODULE_13__.UploaderOptions(), {
      // URL needs to contain something to not produce any errors. This will be replaced once a bundle has been selected.
      url: 'placeholder',
      authToken: null,
      disableMultipart: false,
      itemAlias: null
    });
    /**
     * The prefix for all i18n notification messages within this component
     */
    this.NOTIFICATIONS_PREFIX = 'item.bitstreams.upload.notifications.';
    /**
     * Array to track all subscriptions and unsubscribe them onDestroy
     * @type {Array}
     */
    this.subs = [];
  }
  /**
   * Initialize component properties:
   * itemRD$          Fetched from the current route data (populated by bitstreamPageResolver)
   * selectedBundleId Starts off by checking if the route's queryParams contain a "bundle" parameter. If none is found,
   *                  the ID of the first bundle in the list is selected.
   * Calls setUploadUrl after setting the selected bundle
   */
  ngOnInit() {
    this.itemId = this.route.snapshot.params.id;
    this.entityType = this.route.snapshot.params['entity-type'];
    this.itemRD$ = this.route.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.map)(data => data.dso));
    const bundlesRD$ = this.itemService.getBundles(this.itemId).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_8__.getFirstCompletedRemoteData)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.switchMap)(remoteData => {
      if (remoteData.hasSucceeded) {
        if (remoteData.payload.page) {
          this.bundles = remoteData.payload.page;
          for (const defaultBundle of _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.bundle.standardBundles) {
            let check = true;
            remoteData.payload.page.forEach(bundle => {
              // noinspection JSDeprecatedSymbols
              if (defaultBundle === bundle.name) {
                check = false;
              }
            });
            if (check) {
              this.bundles.push(Object.assign(new _core_shared_bundle_model__WEBPACK_IMPORTED_MODULE_7__.Bundle(), {
                _name: defaultBundle,
                type: 'bundle'
              }));
            }
          }
        } else {
          this.bundles = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.bundle.standardBundles.map(defaultBundle => Object.assign(new _core_shared_bundle_model__WEBPACK_IMPORTED_MODULE_7__.Bundle(), {
            _name: defaultBundle,
            type: 'bundle'
          }));
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.of)(remoteData.payload.page);
      }
    }));
    this.selectedBundleId = this.route.snapshot.queryParams.bundle;
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_9__.isNotEmpty)(this.selectedBundleId)) {
      this.subs.push(this.bundleService.findById(this.selectedBundleId).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_8__.getFirstSucceededRemoteDataPayload)()).subscribe(bundle => {
        this.selectedBundleName = bundle.name;
      }));
      this.setUploadUrl();
    }
    this.subs.push(bundlesRD$.subscribe());
  }
  /**
   * Create a new bundle with the filled in name on the current item
   */
  createBundle() {
    this.itemService.createBundle(this.itemId, this.selectedBundleName).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_8__.getFirstSucceededRemoteDataPayload)()).subscribe(bundle => {
      this.selectedBundleId = bundle.id;
      this.notificationsService.success(this.translate.instant(this.NOTIFICATIONS_PREFIX + 'bundle.created.title'), this.translate.instant(this.NOTIFICATIONS_PREFIX + 'bundle.created.content'));
      this.setUploadUrl();
    });
  }
  /**
   * The user changed the bundle name
   * Reset the bundle ID
   */
  bundleNameChange() {
    this.selectedBundleId = undefined;
    for (const bundle of this.bundles) {
      // noinspection JSDeprecatedSymbols
      if (this.selectedBundleName === bundle.name) {
        this.selectedBundleId = bundle.id;
        break;
      }
    }
  }
  /**
   * Set the upload url to match the selected bundle ID
   */
  setUploadUrl() {
    this.bundleService.getBitstreamsEndpoint(this.selectedBundleId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.take)(1)).subscribe(href => {
      this.uploadFilesOptions.url = href;
      if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_9__.isEmpty)(this.uploadFilesOptions.authToken)) {
        this.uploadFilesOptions.authToken = this.authService.buildAuthHeader();
      }
      // Re-initialize the uploader component to ensure the latest changes to the options are applied
      if (this.uploaderComponent) {
        this.uploaderComponent.ngOnInit();
        this.uploaderComponent.ngAfterViewInit();
      }
    });
  }
  /**
   * The request was successful, redirect the user to the new bitstream's edit page
   * @param bitstream
   */
  onCompleteItem(bitstream) {
    // Clear cached requests for this bundle's bitstreams to ensure lists on all pages are up-to-date
    this.bundleService.getBitstreamsEndpoint(this.selectedBundleId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.take)(1)).subscribe(href => {
      this.requestService.removeByHrefSubstring(href);
    });
    // Bring over the item ID as a query parameter
    const queryParams = {
      itemId: this.itemId,
      entityType: this.entityType
    };
    this.router.navigate([(0,_app_routing_paths__WEBPACK_IMPORTED_MODULE_1__.getBitstreamModuleRoute)(), bitstream.id, 'edit'], {
      queryParams: queryParams
    });
  }
  /**
   * The request was unsuccessful, display an error notification
   */
  onUploadError() {
    this.notificationsService.error(null, this.translate.get(this.NOTIFICATIONS_PREFIX + 'upload.failed'));
  }
  /**
   * The user selected a bundle from the input suggestions
   * Set the bundle ID and Name properties, as well as the upload URL
   * @param bundle
   */
  onClick(bundle) {
    this.selectedBundleId = bundle.id;
    this.selectedBundleName = bundle.name;
    if (bundle.id) {
      this.setUploadUrl();
    }
  }
  /**
   * When cancel is clicked, navigate back to the item's edit bitstreams page
   */
  onCancel() {
    this.router.navigate([(0,_item_page_routing_paths__WEBPACK_IMPORTED_MODULE_15__.getEntityEditRoute)(this.entityType, this.itemId), 'bitstreams']);
  }
  /**
   * @returns {string} the current URL
   */
  getCurrentUrl() {
    return this.router.url;
  }
  /**
   * Unsubscribe from all open subscriptions when the component is destroyed
   */
  ngOnDestroy() {
    this.subs.filter(subscription => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_9__.hasValue)(subscription)).forEach(subscription => subscription.unsubscribe());
  }
  static {
    this.ɵfac = function UploadBitstreamComponent_Factory(t) {
      return new (t || UploadBitstreamComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_21__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_21__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_core_data_item_data_service__WEBPACK_IMPORTED_MODULE_5__.ItemDataService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_core_data_bundle_data_service__WEBPACK_IMPORTED_MODULE_4__.BundleDataService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_11__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_core_data_request_service__WEBPACK_IMPORTED_MODULE_6__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_core_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_3__.DSONameService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineComponent"]({
      type: UploadBitstreamComponent,
      selectors: [["ds-upload-bitstream"]],
      viewQuery: function UploadBitstreamComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵviewQuery"](_shared_upload_uploader_uploader_component__WEBPACK_IMPORTED_MODULE_12__.UploaderComponent, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵloadQuery"]()) && (ctx.uploaderComponent = _t.first);
        }
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 1,
      consts: [["f", ""], [1, "container"], [4, "ngIf"], [1, "row"], [1, "col-12", "mb-2"], [4, "ngVar"], [1, "col-12"], [1, "font-weight-bold"], ["id", "search-form", "ngDefaultControl", "", 3, "ngModelChange", "typeSuggestion", "clickSuggestion", "click", "suggestions", "placeholder", "action", "name", "debounceTime", "ngModel"], ["class", "btn btn-success mr-2", 3, "click", 4, "ngIf"], ["class", "w-100", 3, "dropMsg", "dropOverDocumentMsg", "enableDragOverDocument", "uploadFilesOptions", "onCompleteItem", "onUploadError", 4, "ngIf"], [1, "btn", "btn-outline-secondary", 3, "click"], [1, "btn", "btn-success", "mr-2", 3, "click"], [1, "fa", "fa-plus"], [1, "w-100", 3, "onCompleteItem", "onUploadError", "dropMsg", "dropOverDocumentMsg", "enableDragOverDocument", "uploadFilesOptions"]],
      template: function UploadBitstreamComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, UploadBitstreamComponent_ng_container_1_Template, 20, 22, "ng-container", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.bundles);
        }
      },
      dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_23__.AsyncPipe, _shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_14__.VarDirective, _angular_common__WEBPACK_IMPORTED_MODULE_23__.NgIf, _shared_input_suggestions_dso_input_suggestions_dso_input_suggestions_component__WEBPACK_IMPORTED_MODULE_10__.DsoInputSuggestionsComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.NgModel, _shared_upload_uploader_uploader_component__WEBPACK_IMPORTED_MODULE_12__.UploaderComponent],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 82248:
/*!***********************************************!*\
  !*** ./src/app/item-page/item-page-routes.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ROUTES: () => (/* binding */ ROUTES)
/* harmony export */ });
/* harmony import */ var _app_routing_paths__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app-routing-paths */ 69799);
/* harmony import */ var _core_auth_authenticated_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/auth/authenticated.guard */ 49347);
/* harmony import */ var _core_breadcrumbs_item_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/breadcrumbs/item-breadcrumb.resolver */ 20216);
/* harmony import */ var _shared_dso_page_dso_edit_menu_resolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/dso-page/dso-edit-menu.resolver */ 19964);
/* harmony import */ var _shared_menu_menu_item_type_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/menu/menu-item-type.model */ 34237);
/* harmony import */ var _bitstreams_request_a_copy_bitstream_request_a_copy_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bitstreams/request-a-copy/bitstream-request-a-copy-page.component */ 42443);
/* harmony import */ var _bitstreams_upload_upload_bitstream_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bitstreams/upload/upload-bitstream.component */ 20317);
/* harmony import */ var _full_themed_full_item_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./full/themed-full-item-page.component */ 10870);
/* harmony import */ var _item_page_resolver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./item-page.resolver */ 35925);
/* harmony import */ var _item_page_routing_paths__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./item-page-routing-paths */ 90887);
/* harmony import */ var _orcid_page_orcid_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./orcid-page/orcid-page.component */ 31682);
/* harmony import */ var _orcid_page_orcid_page_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./orcid-page/orcid-page.guard */ 8072);
/* harmony import */ var _simple_themed_item_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./simple/themed-item-page.component */ 66377);
/* harmony import */ var _version_page_version_resolver__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./version-page/version.resolver */ 64109);
/* harmony import */ var _version_page_version_page_version_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./version-page/version-page/version-page.component */ 67069);















const ROUTES = [{
  path: ':id',
  resolve: {
    dso: _item_page_resolver__WEBPACK_IMPORTED_MODULE_8__.itemPageResolver,
    breadcrumb: _core_breadcrumbs_item_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_2__.itemBreadcrumbResolver
  },
  runGuardsAndResolvers: 'always',
  children: [{
    path: '',
    component: _simple_themed_item_page_component__WEBPACK_IMPORTED_MODULE_12__.ThemedItemPageComponent,
    pathMatch: 'full',
    resolve: {
      menu: _shared_dso_page_dso_edit_menu_resolver__WEBPACK_IMPORTED_MODULE_3__.dsoEditMenuResolver
    }
  }, {
    path: 'full',
    component: _full_themed_full_item_page_component__WEBPACK_IMPORTED_MODULE_7__.ThemedFullItemPageComponent,
    resolve: {
      menu: _shared_dso_page_dso_edit_menu_resolver__WEBPACK_IMPORTED_MODULE_3__.dsoEditMenuResolver
    }
  }, {
    path: _item_page_routing_paths__WEBPACK_IMPORTED_MODULE_9__.ITEM_EDIT_PATH,
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_core_resource-policy_resource-policy-data_service_ts"), __webpack_require__.e("default-node_modules_ngx-ui-switch_fesm2020_ngx-ui-switch_mjs"), __webpack_require__.e("default-src_app_core_data_metadata-field-data_service_ts"), __webpack_require__.e("default-src_app_shared_resource-policies_create_resource-policy-create_component_ts-src_app_s-cad6cd"), __webpack_require__.e("default-src_app_shared_access-control-form-container_access-control-form-container_component_ts"), __webpack_require__.e("default-src_app_core_registry_registry_service_ts"), __webpack_require__.e("default-src_app_core_breadcrumbs_i18n-breadcrumb_resolver_ts-src_app_dso-shared_dso-edit-meta-179f34"), __webpack_require__.e("default-src_app_curation-form_curation-form_component_ts-src_app_shared_object-select_object--9a5a68"), __webpack_require__.e("common"), __webpack_require__.e("src_app_item-page_edit-item-page_edit-item-page-routes_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./edit-item-page/edit-item-page-routes */ 10988)).then(m => m.ROUTES)
  }, {
    path: _item_page_routing_paths__WEBPACK_IMPORTED_MODULE_9__.UPLOAD_BITSTREAM_PATH,
    component: _bitstreams_upload_upload_bitstream_component__WEBPACK_IMPORTED_MODULE_6__.UploadBitstreamComponent,
    canActivate: [_core_auth_authenticated_guard__WEBPACK_IMPORTED_MODULE_1__.authenticatedGuard]
  }, {
    path: _app_routing_paths__WEBPACK_IMPORTED_MODULE_0__.REQUEST_COPY_MODULE_PATH,
    component: _bitstreams_request_a_copy_bitstream_request_a_copy_page_component__WEBPACK_IMPORTED_MODULE_5__.BitstreamRequestACopyPageComponent
  }, {
    path: _item_page_routing_paths__WEBPACK_IMPORTED_MODULE_9__.ORCID_PATH,
    component: _orcid_page_orcid_page_component__WEBPACK_IMPORTED_MODULE_10__.OrcidPageComponent,
    canActivate: [_core_auth_authenticated_guard__WEBPACK_IMPORTED_MODULE_1__.authenticatedGuard, _orcid_page_orcid_page_guard__WEBPACK_IMPORTED_MODULE_11__.orcidPageGuard]
  }],
  data: {
    menu: {
      public: [{
        id: 'statistics_item_:id',
        active: true,
        visible: true,
        index: 2,
        model: {
          type: _shared_menu_menu_item_type_model__WEBPACK_IMPORTED_MODULE_4__.MenuItemType.LINK,
          text: 'menu.section.statistics',
          link: 'statistics/items/:id/'
        }
      }]
    }
  }
}, {
  path: 'version',
  children: [{
    path: ':id',
    component: _version_page_version_page_version_page_component__WEBPACK_IMPORTED_MODULE_14__.VersionPageComponent,
    resolve: {
      dso: _version_page_version_resolver__WEBPACK_IMPORTED_MODULE_13__.versionResolver
    }
  }]
}];

/***/ }),

/***/ 35925:
/*!*************************************************!*\
  !*** ./src/app/item-page/item-page.resolver.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   itemPageResolver: () => (/* binding */ itemPageResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ 99797);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/auth/auth.service */ 67116);
/* harmony import */ var _core_data_item_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/data/item-data.service */ 29326);
/* harmony import */ var _core_resolving_resolver_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/resolving/resolver.actions */ 81225);
/* harmony import */ var _core_shared_authorized_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/shared/authorized.operators */ 308);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/shared/operators */ 55757);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/empty.util */ 82777);
/* harmony import */ var _item_resolver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./item.resolver */ 56273);
/* harmony import */ var _item_page_routing_paths__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./item-page-routing-paths */ 90887);












/**
 * Method for resolving an item based on the parameters in the current route
 * @param {ActivatedRouteSnapshot} route The current ActivatedRouteSnapshot
 * @param {RouterStateSnapshot} state The current RouterStateSnapshot
 * @param {Router} router
 * @param {ItemDataService} itemService
 * @param {Store<AppState>} store
 * @param {AuthService} authService
 * @returns Observable<<RemoteData<Item>> Emits the found item based on the parameters in the current route,
 * or an error if something went wrong
 */
const itemPageResolver = (route, state, router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), itemService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.inject)(_core_data_item_data_service__WEBPACK_IMPORTED_MODULE_1__.ItemDataService), store = (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.inject)(_ngrx_store__WEBPACK_IMPORTED_MODULE_10__.Store), authService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.inject)(_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)) => {
  const itemRD$ = itemService.findById(route.params.id, true, false, ...(0,_item_resolver__WEBPACK_IMPORTED_MODULE_6__.getItemPageLinksToFollow)()).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_4__.getFirstCompletedRemoteData)(), (0,_core_shared_authorized_operators__WEBPACK_IMPORTED_MODULE_3__.redirectOn4xx)(router, authService));
  itemRD$.subscribe(itemRD => {
    store.dispatch(new _core_resolving_resolver_actions__WEBPACK_IMPORTED_MODULE_2__.ResolvedAction(state.url, itemRD.payload));
  });
  return itemRD$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(rd => {
    if (rd.hasSucceeded && (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_5__.hasValue)(rd.payload)) {
      const thisRoute = state.url;
      // Angular uses a custom function for encodeURIComponent, (e.g. it doesn't encode commas
      // or semicolons) and thisRoute has been encoded with that function. If we want to compare
      // it with itemRoute, we have to run itemRoute through Angular's version as well to ensure
      // the same characters are encoded the same way.
      const itemRoute = router.parseUrl((0,_item_page_routing_paths__WEBPACK_IMPORTED_MODULE_7__.getItemPageRoute)(rd.payload)).toString();
      if (!thisRoute.startsWith(itemRoute)) {
        const itemId = rd.payload.uuid;
        const subRoute = thisRoute.substring(thisRoute.indexOf(itemId) + itemId.length, thisRoute.length);
        void router.navigateByUrl(itemRoute + subRoute);
      }
    }
    return rd;
  }));
};

/***/ }),

/***/ 93712:
/*!*************************************************************************!*\
  !*** ./src/app/item-page/orcid-page/orcid-auth/orcid-auth.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrcidAuthComponent: () => (/* binding */ OrcidAuthComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 83485);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 60494);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var _core_orcid_orcid_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/orcid/orcid-auth.service */ 89147);
/* harmony import */ var _core_services_window_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/window.service */ 1676);
/* harmony import */ var _core_shared_item_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/shared/item.model */ 88318);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/shared/operators */ 55757);
/* harmony import */ var _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/alert/alert.component */ 16292);
/* harmony import */ var _shared_btn_disabled_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/btn-disabled.directive */ 60456);
/* harmony import */ var _shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/notifications/notifications.service */ 69472);
/* harmony import */ var _shared_remote_data_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/remote-data.utils */ 43404);


















function OrcidAuthComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainer"](0);
  }
}
function OrcidAuthComponent_ng_template_6_div_2_li_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const auth_r1 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, ctx_r1.getAuthorizationDescription(auth_r1)), " ");
  }
}
function OrcidAuthComponent_ng_template_6_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 16)(1, "div", 8)(2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 10)(6, "div", 17)(7, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, OrcidAuthComponent_ng_template_6_div_2_li_8_Template, 3, 3, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 2, "person.page.orcid.granted-authorizations"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](9, 4, ctx_r1.getOrcidAuthorizations()));
  }
}
function OrcidAuthComponent_ng_template_6_ds_alert_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ds-alert", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("type", "alert-success");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 2, "person.page.orcid.no-missing-authorizations-message"), " ");
  }
}
function OrcidAuthComponent_ng_template_6_ds_alert_13_li_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const auth_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, ctx_r1.getAuthorizationDescription(auth_r3)), " ");
  }
}
function OrcidAuthComponent_ng_template_6_ds_alert_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ds-alert", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, OrcidAuthComponent_ng_template_6_ds_alert_13_li_4_Template, 3, 3, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("type", "alert-warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 3, "person.page.orcid.missing-authorizations-message"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 5, ctx_r1.getMissingOrcidAuthorizations()));
  }
}
function OrcidAuthComponent_ng_template_6_ds_alert_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ds-alert", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("type", "alert-warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 2, "person.page.orcid.remove-orcid-message"), " ");
  }
}
function OrcidAuthComponent_ng_template_6_div_18_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 1, "person.page.orcid.unlink"), "");
  }
}
function OrcidAuthComponent_ng_template_6_div_18_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 1, "person.page.orcid.unlink.processing"), "");
  }
}
function OrcidAuthComponent_ng_template_6_div_18_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function OrcidAuthComponent_ng_template_6_div_18_button_8_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.linkOrcid());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 1, "person.page.orcid.grant-authorizations"), "");
  }
}
function OrcidAuthComponent_ng_template_6_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 25)(1, "div", 26)(2, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function OrcidAuthComponent_ng_template_6_div_18_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.unlinkOrcid());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, OrcidAuthComponent_ng_template_6_div_18_span_4_Template, 4, 3, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, OrcidAuthComponent_ng_template_6_div_18_span_6_Template, 4, 3, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, OrcidAuthComponent_ng_template_6_div_18_button_8_Template, 5, 3, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("dsBtnDisabled", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 4, ctx_r1.unlinkProcessing));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 6, ctx_r1.unlinkProcessing) !== true);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](7, 8, ctx_r1.unlinkProcessing));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](9, 10, ctx_r1.hasMissingOrcidAuthorizations()));
  }
}
function OrcidAuthComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 4)(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, OrcidAuthComponent_ng_template_6_div_2_Template, 10, 6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 7)(5, "div", 8)(6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 10)(10, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](11, OrcidAuthComponent_ng_template_6_ds_alert_11_Template, 3, 4, "ds-alert", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](12, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](13, OrcidAuthComponent_ng_template_6_ds_alert_13_Template, 6, 7, "ds-alert", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](14, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](15, OrcidAuthComponent_ng_template_6_ds_alert_15_Template, 3, 4, "ds-alert", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](16, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](17, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](18, OrcidAuthComponent_ng_template_6_div_18_Template, 10, 12, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](19, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 6, ctx_r1.hasOrcidAuthorizations()));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](8, 8, "person.page.orcid.missing-authorizations"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](12, 10, ctx_r1.hasMissingOrcidAuthorizations()) !== true);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](14, 12, ctx_r1.hasMissingOrcidAuthorizations()));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](16, 14, ctx_r1.onlyAdminCanDisconnectProfileFromOrcid()) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](17, 16, ctx_r1.ownerCanDisconnectProfileFromOrcid()) !== true);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](19, 18, ctx_r1.ownerCanDisconnectProfileFromOrcid()));
  }
}
function OrcidAuthComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 34)(1, "div", 5)(2, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 26)(5, "ds-alert", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 5)(9, "div", 26)(10, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function OrcidAuthComponent_ng_template_8_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.linkOrcid());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](11, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("type", "alert-info");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](7, 3, ctx_r1.getOrcidNotLinkedMessage()));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](13, 5, "person.page.orcid.link"), " ");
  }
}
class OrcidAuthComponent {
  constructor(orcidAuthService, translateService, notificationsService, _window) {
    this.orcidAuthService = orcidAuthService;
    this.translateService = translateService;
    this.notificationsService = notificationsService;
    this._window = _window;
    /**
     * The list of exposed orcid authorization scopes for the orcid profile
     */
    this.profileAuthorizationScopes = new rxjs__WEBPACK_IMPORTED_MODULE_9__.BehaviorSubject([]);
    /**
     * The list of all orcid authorization scopes missing in the orcid profile
     */
    this.missingAuthorizationScopes = new rxjs__WEBPACK_IMPORTED_MODULE_9__.BehaviorSubject([]);
    /**
     * The list of all orcid authorization scopes available
     */
    this.orcidAuthorizationScopes = new rxjs__WEBPACK_IMPORTED_MODULE_9__.BehaviorSubject([]);
    /**
     * A boolean representing if unlink operation is processing
     */
    this.unlinkProcessing = new rxjs__WEBPACK_IMPORTED_MODULE_9__.BehaviorSubject(false);
    /**
     * A boolean representing if orcid profile is linked
     */
    this.isOrcidLinked$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.BehaviorSubject(false);
    /**
     * A boolean representing if only admin can disconnect orcid profile
     */
    this.onlyAdminCanDisconnectProfileFromOrcid$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.BehaviorSubject(false);
    /**
     * A boolean representing if owner can disconnect orcid profile
     */
    this.ownerCanDisconnectProfileFromOrcid$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.BehaviorSubject(false);
    /**
     * An event emitted when orcid profile is unliked successfully
     */
    this.unlink = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
  }
  ngOnInit() {
    this.orcidAuthService.getOrcidAuthorizationScopes().subscribe(scopes => {
      this.orcidAuthorizationScopes.next(scopes);
      this.initOrcidAuthSettings();
    });
  }
  ngOnChanges(changes) {
    if (!changes.item.isFirstChange() && changes.item.currentValue !== changes.item.previousValue) {
      this.initOrcidAuthSettings();
    }
  }
  /**
   * Check if the list of exposed orcid authorization scopes for the orcid profile has values
   */
  hasOrcidAuthorizations() {
    return this.profileAuthorizationScopes.asObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(scopes => scopes.length > 0));
  }
  /**
   * Return the list of exposed orcid authorization scopes for the orcid profile
   */
  getOrcidAuthorizations() {
    return this.profileAuthorizationScopes.asObservable();
  }
  /**
   * Check if the list of exposed orcid authorization scopes for the orcid profile has values
   */
  hasMissingOrcidAuthorizations() {
    return this.missingAuthorizationScopes.asObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(scopes => scopes.length > 0));
  }
  /**
   * Return the list of exposed orcid authorization scopes for the orcid profile
   */
  getMissingOrcidAuthorizations() {
    return this.profileAuthorizationScopes.asObservable();
  }
  /**
   * Return a boolean representing if orcid profile is linked
   */
  isLinkedToOrcid() {
    return this.isOrcidLinked$.asObservable();
  }
  getOrcidNotLinkedMessage() {
    const orcid = this.item.firstMetadataValue('person.identifier.orcid');
    if (orcid) {
      return this.translateService.get('person.page.orcid.orcid-not-linked-message', {
        'orcid': orcid
      });
    } else {
      return this.translateService.get('person.page.orcid.no-orcid-message');
    }
  }
  /**
   * Get label for a given orcid authorization scope
   *
   * @param scope
   */
  getAuthorizationDescription(scope) {
    return 'person.page.orcid.scope.' + scope.substring(1).replace('/', '-');
  }
  /**
   * Return a boolean representing if only admin can disconnect orcid profile
   */
  onlyAdminCanDisconnectProfileFromOrcid() {
    return this.onlyAdminCanDisconnectProfileFromOrcid$.asObservable();
  }
  /**
   * Return a boolean representing if owner can disconnect orcid profile
   */
  ownerCanDisconnectProfileFromOrcid() {
    return this.ownerCanDisconnectProfileFromOrcid$.asObservable();
  }
  /**
   * Link existing person profile with orcid
   */
  linkOrcid() {
    this.orcidAuthService.getOrcidAuthorizeUrl(this.item).subscribe(authorizeUrl => {
      this._window.nativeWindow.location.href = authorizeUrl;
    });
  }
  /**
   * Unlink existing person profile from orcid
   */
  unlinkOrcid() {
    this.unlinkProcessing.next(true);
    this.orcidAuthService.unlinkOrcidByItem(this.item).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_3__.getFirstCompletedRemoteData)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.catchError)(_shared_remote_data_utils__WEBPACK_IMPORTED_MODULE_7__.createFailedRemoteDataObjectFromError$)).subscribe(remoteData => {
      this.unlinkProcessing.next(false);
      if (remoteData.hasFailed) {
        this.notificationsService.error(this.translateService.get('person.page.orcid.unlink.error'));
      } else {
        this.notificationsService.success(this.translateService.get('person.page.orcid.unlink.success'));
        this.unlink.emit();
      }
    });
  }
  /**
   * initialize all Orcid authentication settings
   * @private
   */
  initOrcidAuthSettings() {
    this.setOrcidAuthorizationsFromItem();
    this.setMissingOrcidAuthorizations();
    this.orcidAuthService.onlyAdminCanDisconnectProfileFromOrcid().subscribe(result => {
      this.onlyAdminCanDisconnectProfileFromOrcid$.next(result);
    });
    this.orcidAuthService.ownerCanDisconnectProfileFromOrcid().subscribe(result => {
      this.ownerCanDisconnectProfileFromOrcid$.next(result);
    });
    this.isOrcidLinked$.next(this.orcidAuthService.isLinkedToOrcid(this.item));
  }
  setMissingOrcidAuthorizations() {
    const profileScopes = this.orcidAuthService.getOrcidAuthorizationScopesByItem(this.item);
    const orcidScopes = this.orcidAuthorizationScopes.value;
    const missingScopes = orcidScopes.filter(scope => !profileScopes.includes(scope));
    this.missingAuthorizationScopes.next(missingScopes);
  }
  setOrcidAuthorizationsFromItem() {
    this.profileAuthorizationScopes.next(this.orcidAuthService.getOrcidAuthorizationScopesByItem(this.item));
  }
  static {
    this.ɵfac = function OrcidAuthComponent_Factory(t) {
      return new (t || OrcidAuthComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_orcid_orcid_auth_service__WEBPACK_IMPORTED_MODULE_0__.OrcidAuthService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_6__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_services_window_service__WEBPACK_IMPORTED_MODULE_1__.NativeWindowService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
      type: OrcidAuthComponent,
      selectors: [["ds-orcid-auth"]],
      inputs: {
        item: "item"
      },
      outputs: {
        unlink: "unlink"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵStandaloneFeature"]],
      decls: 10,
      vars: 8,
      consts: [["orcidLinked", ""], ["orcidNotLinked", ""], [1, "container", "mb-5"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["data-test", "orcidLinked"], [1, "row"], ["class", "col-sm-6 mb-3", "data-test", "hasOrcidAuthorizations", 4, "ngIf"], [1, "col-sm-6", "mb-3"], [1, "card", "h-100"], [1, "card-header"], [1, "card-body"], [1, "container"], ["data-test", "noMissingOrcidAuthorizations", 3, "type", 4, "ngIf"], ["data-test", "missingOrcidAuthorizations", 3, "type", 4, "ngIf"], ["data-test", "unlinkOnlyAdmin", 3, "type", 4, "ngIf"], ["class", "row", "data-test", "unlinkOwner", 4, "ngIf"], ["data-test", "hasOrcidAuthorizations", 1, "col-sm-6", "mb-3"], [1, "container", "p-0"], ["data-test", "orcidAuthorization", 4, "ngFor", "ngForOf"], ["data-test", "orcidAuthorization"], ["data-test", "noMissingOrcidAuthorizations", 3, "type"], ["data-test", "missingOrcidAuthorizations", 3, "type"], ["data-test", "missingOrcidAuthorization", 4, "ngFor", "ngForOf"], ["data-test", "missingOrcidAuthorization"], ["data-test", "unlinkOnlyAdmin", 3, "type"], ["data-test", "unlinkOwner", 1, "row"], [1, "col"], ["type", "submit", 1, "btn", "btn-danger", "float-right", 3, "click", "dsBtnDisabled"], [4, "ngIf"], ["type", "submit", "class", "btn btn-primary float-right", 3, "click", 4, "ngIf"], [1, "fas", "fa-unlink"], [1, "fas", "fa-circle-notch", "fa-spin"], ["type", "submit", 1, "btn", "btn-primary", "float-right", 3, "click"], [1, "fas", "fa-check"], ["data-test", "orcidNotLinked"], [1, "col-2"], ["alt", "orcid-logo", "src", "../../../../assets/images/orcid.logo.icon.svg"], [3, "type"], [1, "btn", "btn-primary", "float-right", 3, "click"], [1, "fas", "fa-link"]],
      template: function OrcidAuthComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 2)(1, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, OrcidAuthComponent_ng_container_4_Template, 1, 0, "ng-container", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, OrcidAuthComponent_ng_template_6_Template, 20, 20, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"])(8, OrcidAuthComponent_ng_template_8_Template, 14, 7, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
        }
        if (rf & 2) {
          const orcidLinked_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](7);
          const orcidNotLinked_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 4, "person.orcid.registry.auth"));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 6, ctx.isLinkedToOrcid()))("ngIfThen", orcidLinked_r7)("ngIfElse", orcidNotLinked_r8);
        }
      },
      dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_13__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_4__.AlertComponent, _shared_btn_disabled_directive__WEBPACK_IMPORTED_MODULE_5__.BtnDisabledDirective],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yY2lkLWF1dGguY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUEiLCJmaWxlIjoib3JjaWQtYXV0aC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaXRlbS1wYWdlL29yY2lkLXBhZ2Uvb3JjaWQtYXV0aC9vcmNpZC1hdXRoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBO0FBQ0Esd2pCQUF3akIiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqLyJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 31682:
/*!**************************************************************!*\
  !*** ./src/app/item-page/orcid-page/orcid-page.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrcidPageComponent: () => (/* binding */ OrcidPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 83485);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 27639);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 78374);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 85687);
/* harmony import */ var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/auth/auth.service */ 67116);
/* harmony import */ var _core_data_item_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/data/item-data.service */ 29326);
/* harmony import */ var _core_orcid_orcid_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/orcid/orcid-auth.service */ 89147);
/* harmony import */ var _core_shared_authorized_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/shared/authorized.operators */ 308);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/shared/operators */ 55757);
/* harmony import */ var _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/alert/alert.component */ 16292);
/* harmony import */ var _shared_alert_alert_type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/alert/alert-type */ 47978);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/empty.util */ 82777);
/* harmony import */ var _shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/loading/themed-loading.component */ 82394);
/* harmony import */ var _item_page_routing_paths__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../item-page-routing-paths */ 90887);
/* harmony import */ var _orcid_auth_orcid_auth_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./orcid-auth/orcid-auth.component */ 93712);
/* harmony import */ var _orcid_queue_orcid_queue_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./orcid-queue/orcid-queue.component */ 45186);
/* harmony import */ var _orcid_sync_settings_orcid_sync_settings_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./orcid-sync-settings/orcid-sync-settings.component */ 95934);


























function OrcidPageComponent_ds_loading_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "ds-loading", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("message", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](1, 1, "person.page.orcid.link.processing"));
  }
}
function OrcidPageComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 5)(1, "ds-alert", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("type", ctx_r0.AlertType.Error);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](3, 2, "person.page.orcid.link.error.message"));
  }
}
function OrcidPageComponent_ng_container_5_ds_orcid_sync_setting_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ds-orcid-sync-setting", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("settingsUpdated", function OrcidPageComponent_ng_container_5_ds_orcid_sync_setting_3_Template_ds_orcid_sync_setting_settingsUpdated_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r0.updateItem());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("item", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](1, 1, ctx_r0.item));
  }
}
function OrcidPageComponent_ng_container_5_ds_orcid_queue_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "ds-orcid-queue", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](1, "async");
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("item", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](1, 1, ctx_r0.item));
  }
}
function OrcidPageComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "ds-orcid-auth", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("unlink", function OrcidPageComponent_ng_container_5_Template_ds_orcid_auth_unlink_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r0.updateItem());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](3, OrcidPageComponent_ng_container_5_ds_orcid_sync_setting_3_Template, 2, 3, "ds-orcid-sync-setting", 8)(4, OrcidPageComponent_ng_container_5_ds_orcid_queue_4_Template, 2, 3, "ds-orcid-queue", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("item", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 3, ctx_r0.item));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r0.isLinkedToOrcid());
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r0.isLinkedToOrcid());
  }
}
function OrcidPageComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 12)(1, "div", 13)(2, "div", 14)(3, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](4, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("routerLink", ctx_r0.getItemPage());
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](6, 2, "item.orcid.return"), " ");
  }
}
/**
 * A component that represents the orcid settings page
 */
class OrcidPageComponent {
  constructor(platformId, authService, itemService, orcidAuthService, route, router) {
    this.platformId = platformId;
    this.authService = authService;
    this.itemService = itemService;
    this.orcidAuthService = orcidAuthService;
    this.route = route;
    this.router = router;
    this.AlertType = _shared_alert_alert_type__WEBPACK_IMPORTED_MODULE_6__.AlertType;
    /**
     * A boolean representing if the connection operation with orcid profile is in progress
     */
    this.connectionStatus = new rxjs__WEBPACK_IMPORTED_MODULE_14__.BehaviorSubject(false);
    /**
     * The item for which showing the orcid settings
     */
    this.item = new rxjs__WEBPACK_IMPORTED_MODULE_14__.BehaviorSubject(null);
    /**
     * A boolean representing if the connection operation with orcid profile is in progress
     */
    this.processingConnection = new rxjs__WEBPACK_IMPORTED_MODULE_14__.BehaviorSubject(true);
  }
  /**
   * Retrieve the item for which showing the orcid settings
   */
  ngOnInit() {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_15__.isPlatformBrowser)(this.platformId)) {
      const codeParam$ = this.route.queryParamMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.map)(paramMap => paramMap.get('code')));
      const item$ = this.route.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.map)(data => data.dso), (0,_core_shared_authorized_operators__WEBPACK_IMPORTED_MODULE_3__.redirectOn4xx)(this.router, this.authService), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_4__.getFirstSucceededRemoteDataPayload)());
      (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.combineLatest)([codeParam$, item$]).subscribe(([codeParam, item]) => {
        this.itemId = item.id;
        /**
         * Check if code is present in the query param. If so it means this page is loaded after attempting to
         * link the person to the ORCID profile, otherwise the person is already linked to ORCID profile
         */
        if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_7__.isNotEmpty)(codeParam)) {
          this.linkProfileToOrcid(item, codeParam);
        } else {
          this.item.next(item);
          this.processingConnection.next(false);
          this.connectionStatus.next(true);
        }
      });
    }
  }
  /**
   * Check if the current item is linked to an ORCID profile.
   *
   * @returns the check result
   */
  isLinkedToOrcid() {
    return this.orcidAuthService.isLinkedToOrcid(this.item.value);
  }
  /**
   * Get the route to an item's page
   */
  getItemPage() {
    return (0,_item_page_routing_paths__WEBPACK_IMPORTED_MODULE_9__.getItemPageRoute)(this.item.value);
  }
  /**
   * Retrieve the updated profile item
   */
  updateItem() {
    this.clearRouteParams();
    this.itemService.findById(this.itemId, false).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_4__.getFirstCompletedRemoteData)()).subscribe(itemRD => {
      if (itemRD.hasSucceeded) {
        this.item.next(itemRD.payload);
      }
    });
  }
  /**
   * Link person item to ORCID profile by using the code received after redirect from ORCID.
   *
   * @param person The person item to link to ORCID profile
   * @param code The auth-code received from ORCID
   */
  linkProfileToOrcid(person, code) {
    this.orcidAuthService.linkOrcidByItem(person, code).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_4__.getFirstCompletedRemoteData)()).subscribe(profileRD => {
      this.processingConnection.next(false);
      if (profileRD.hasSucceeded) {
        this.connectionStatus.next(true);
        this.updateItem();
      } else {
        this.item.next(person);
        this.connectionStatus.next(false);
        this.clearRouteParams();
      }
    });
  }
  /**
   * Update route removing the code from query params
   * @private
   */
  clearRouteParams() {
    // update route removing the code from query params
    this.route.queryParamMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.filter)(paramMap => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_7__.isNotEmpty)(paramMap.keys)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.map)(_ => Object.assign({})), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.take)(1)).subscribe(queryParams => this.router.navigate([], {
      relativeTo: this.route,
      queryParams
    }));
  }
  static {
    this.ɵfac = function OrcidPageComponent_Factory(t) {
      return new (t || OrcidPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_13__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_core_data_item_data_service__WEBPACK_IMPORTED_MODULE_1__.ItemDataService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_core_orcid_orcid_auth_service__WEBPACK_IMPORTED_MODULE_2__.OrcidAuthService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_20__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_20__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
      type: OrcidPageComponent,
      selectors: [["ds-orcid-page"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵStandaloneFeature"]],
      decls: 12,
      vars: 20,
      consts: [[3, "message", 4, "ngIf"], ["class", "container", "data-test", "error-box", 4, "ngIf"], [4, "ngIf"], ["class", "container", 4, "ngIf"], [3, "message"], ["data-test", "error-box", 1, "container"], [3, "type"], ["data-test", "orcid-auth", 3, "unlink", "item"], ["data-test", "orcid-sync-setting", 3, "item", "settingsUpdated", 4, "ngIf"], [3, "item", 4, "ngIf"], ["data-test", "orcid-sync-setting", 3, "settingsUpdated", "item"], [3, "item"], [1, "container"], [1, "button-row", "bottom", "mb-3"], [1, "text-right"], ["role", "button", "data-test", "back-button", 1, "btn", "btn-outline-secondary", 3, "routerLink"], [1, "fas", "fa-arrow-left"]],
      template: function OrcidPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](0, OrcidPageComponent_ds_loading_0_Template, 2, 3, "ds-loading", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](1, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, OrcidPageComponent_div_2_Template, 4, 4, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](3, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](4, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](5, OrcidPageComponent_ng_container_5_Template, 5, 5, "ng-container", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](6, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](7, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](8, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](9, OrcidPageComponent_div_9_Template, 7, 4, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](10, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](11, "async");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](1, 4, ctx.processingConnection));
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](3, 6, ctx.processingConnection) !== true && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](4, 8, ctx.connectionStatus) !== true);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](6, 10, ctx.processingConnection) !== true && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](7, 12, ctx.item) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](8, 14, ctx.connectionStatus));
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](10, 16, ctx.processingConnection) !== true && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](11, 18, ctx.item));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.AsyncPipe, _shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_8__.ThemedLoadingComponent, _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_5__.AlertComponent, _orcid_auth_orcid_auth_component__WEBPACK_IMPORTED_MODULE_10__.OrcidAuthComponent, _orcid_sync_settings_orcid_sync_settings_component__WEBPACK_IMPORTED_MODULE_12__.OrcidSyncSettingsComponent, _orcid_queue_orcid_queue_component__WEBPACK_IMPORTED_MODULE_11__.OrcidQueueComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__.TranslatePipe, _angular_router__WEBPACK_IMPORTED_MODULE_20__.RouterLink],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yY2lkLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUEiLCJmaWxlIjoib3JjaWQtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaXRlbS1wYWdlL29yY2lkLXBhZ2Uvb3JjaWQtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBLHdqQkFBd2pCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi8iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 8072:
/*!**********************************************************!*\
  !*** ./src/app/item-page/orcid-page/orcid-page.guard.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   orcidPageGuard: () => (/* binding */ orcidPageGuard)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 17796);
/* harmony import */ var _core_data_feature_authorization_feature_authorization_guard_dso_page_single_feature_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/data/feature-authorization/feature-authorization-guard/dso-page-single-feature.guard */ 6056);
/* harmony import */ var _core_data_feature_authorization_feature_id__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/data/feature-authorization/feature-id */ 3970);
/* harmony import */ var _item_page_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../item-page.resolver */ 35925);




/**
 * Guard for preventing unauthorized access to certain {@link Item} pages requiring administrator rights
 * Check administrator authorization rights
 */
const orcidPageGuard = (0,_core_data_feature_authorization_feature_authorization_guard_dso_page_single_feature_guard__WEBPACK_IMPORTED_MODULE_0__.dsoPageSingleFeatureGuard)(() => _item_page_resolver__WEBPACK_IMPORTED_MODULE_2__.itemPageResolver, () => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(_core_data_feature_authorization_feature_id__WEBPACK_IMPORTED_MODULE_1__.FeatureID.CanSynchronizeWithORCID));

/***/ }),

/***/ 45186:
/*!***************************************************************************!*\
  !*** ./src/app/item-page/orcid-page/orcid-queue/orcid-queue.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrcidQueueComponent: () => (/* binding */ OrcidQueueComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 49966);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 83485);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 27639);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 47943);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 64785);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 21252);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 84975);
/* harmony import */ var _core_orcid_orcid_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/orcid/orcid-auth.service */ 89147);
/* harmony import */ var _core_orcid_orcid_history_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/orcid/orcid-history-data.service */ 52326);
/* harmony import */ var _core_orcid_orcid_queue_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/orcid/orcid-queue-data.service */ 53067);
/* harmony import */ var _core_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/pagination/pagination.service */ 76896);
/* harmony import */ var _core_shared_item_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/shared/item.model */ 88318);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/shared/operators */ 55757);
/* harmony import */ var _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/alert/alert.component */ 16292);
/* harmony import */ var _shared_alert_alert_type__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/alert/alert-type */ 47978);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/empty.util */ 82777);
/* harmony import */ var _shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/loading/themed-loading.component */ 82394);
/* harmony import */ var _shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/notifications/notifications.service */ 69472);
/* harmony import */ var _shared_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/pagination/pagination.component */ 40590);
/* harmony import */ var _shared_pagination_pagination_component_options_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/pagination/pagination-component-options.model */ 23401);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 90310);




























function OrcidQueueComponent_ds_loading_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "ds-loading");
  }
}
function OrcidQueueComponent_ds_alert_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ds-alert", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("type", ctx_r0.AlertTypeEnum.Info);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 2, "person.page.orcid.sync-queue.empty-message"), " ");
  }
}
function OrcidQueueComponent_ds_pagination_10_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "tr", 10)(1, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "td", 13)(7, "div", 14)(8, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function OrcidQueueComponent_ds_pagination_10_tr_16_Template_button_click_8_listener() {
      const entry_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r0.send(entry_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](10, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](11, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](14, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function OrcidQueueComponent_ds_pagination_10_tr_16_Template_button_click_14_listener() {
      const entry_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r0.discardEntry(entry_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](16, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](17, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const entry_r4 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngClass", ctx_r0.getIconClass(entry_r4))("ngbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](3, 8, ctx_r0.getIconTooltip(entry_r4)));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", entry_r4.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](9, 10, ctx_r0.getOperationTooltip(entry_r4)));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngClass", ctx_r0.getOperationClass(entry_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](13, 12, ctx_r0.getOperationTooltip(entry_r4)));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](15, 14, "person.page.orcid.sync-queue.discard"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](19, 16, "person.page.orcid.sync-queue.discard"));
  }
}
function OrcidQueueComponent_ds_pagination_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ds-pagination", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("paginationChange", function OrcidQueueComponent_ds_pagination_10_Template_ds_pagination_paginationChange_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r0.updateList());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "div", 6)(3, "table", 7)(4, "thead")(5, "tr", 8)(6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](15, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](16, OrcidQueueComponent_ds_pagination_10_tr_16_Template, 20, 18, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](17, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_8_0;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("paginationOptions", ctx_r0.paginationOptions)("collectionSize", (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](1, 8, ctx_r0.getList())) == null ? null : tmp_2_0.payload == null ? null : tmp_2_0.payload.totalElements)("retainScrollPosition", false)("hideGear", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](8, 10, "person.page.orcid.sync-queue.table.header.type"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](11, 12, "person.page.orcid.sync-queue.table.header.description"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](14, 14, "person.page.orcid.sync-queue.table.header.action"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", (tmp_8_0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](17, 16, ctx_r0.getList())) == null ? null : tmp_8_0.payload == null ? null : tmp_8_0.payload.page);
  }
}
class OrcidQueueComponent {
  constructor(orcidAuthService, orcidQueueService, translateService, paginationService, notificationsService, orcidHistoryService) {
    this.orcidAuthService = orcidAuthService;
    this.orcidQueueService = orcidQueueService;
    this.translateService = translateService;
    this.paginationService = paginationService;
    this.notificationsService = notificationsService;
    this.orcidHistoryService = orcidHistoryService;
    /**
     * Pagination config used to display the list
     */
    this.paginationOptions = Object.assign(new _shared_pagination_pagination_component_options_model__WEBPACK_IMPORTED_MODULE_12__.PaginationComponentOptions(), {
      id: 'oqp',
      pageSize: 5
    });
    /**
     * A boolean representing if results are loading
     */
    this.processing$ = new rxjs__WEBPACK_IMPORTED_MODULE_14__.BehaviorSubject(false);
    /**
     * A list of orcid queue records
     */
    this.list$ = new rxjs__WEBPACK_IMPORTED_MODULE_14__.BehaviorSubject({});
    /**
     * The AlertType enumeration
     * @type {AlertType}
     */
    this.AlertTypeEnum = _shared_alert_alert_type__WEBPACK_IMPORTED_MODULE_7__.AlertType;
    /**
     * Array to track all subscriptions and unsubscribe them onDestroy
     * @type {Array}
     */
    this.subs = [];
  }
  ngOnInit() {
    this.updateList();
  }
  ngOnChanges(changes) {
    if (!changes.item.isFirstChange() && changes.item.currentValue !== changes.item.previousValue) {
      this.updateList();
    }
  }
  /**
   * Retrieve queue list
   */
  updateList() {
    this.subs.push(this.paginationService.getCurrentPagination(this.paginationOptions.id, this.paginationOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.debounceTime)(100), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.tap)(() => this.processing$.next(true)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.switchMap)(config => this.orcidQueueService.searchByProfileItemId(this.item.id, config, false)), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_5__.getFirstCompletedRemoteData)()).subscribe(result => {
      this.processing$.next(false);
      this.list$.next(result);
      this.orcidQueueService.clearFindByProfileItemRequests();
    }));
  }
  /**
   * Return the list of orcid queue records
   */
  getList() {
    return this.list$.asObservable();
  }
  /**
   * Return the icon class for the queue object type
   *
   * @param orcidQueue The OrcidQueue object
   */
  getIconClass(orcidQueue) {
    if (!orcidQueue.recordType) {
      return 'fa fa-user';
    }
    switch (orcidQueue.recordType.toLowerCase()) {
      case 'publication':
        return 'fas fa-book';
      case 'project':
        return 'fas fa-wallet';
      case 'education':
        return 'fas fa-school';
      case 'affiliation':
        return 'fas fa-university';
      case 'country':
        return 'fas fa-globe-europe';
      case 'external_ids':
      case 'researcher_urls':
        return 'fas fa-external-link-alt';
      default:
        return 'fa fa-user';
    }
  }
  /**
   * Return the icon tooltip message for the queue object type
   *
   * @param orcidQueue The OrcidQueue object
   */
  getIconTooltip(orcidQueue) {
    if (!orcidQueue.recordType) {
      return '';
    }
    return 'person.page.orcid.sync-queue.tooltip.' + orcidQueue.recordType.toLowerCase();
  }
  /**
   * Return the icon tooltip message for the queue object operation
   *
   * @param orcidQueue The OrcidQueue object
   */
  getOperationTooltip(orcidQueue) {
    if (!orcidQueue.operation) {
      return '';
    }
    return 'person.page.orcid.sync-queue.tooltip.' + orcidQueue.operation.toLowerCase();
  }
  /**
   * Return the icon class for the queue object operation
   *
   * @param orcidQueue The OrcidQueue object
   */
  getOperationClass(orcidQueue) {
    if (!orcidQueue.operation) {
      return '';
    }
    switch (orcidQueue.operation.toLowerCase()) {
      case 'insert':
        return 'fas fa-plus';
      case 'update':
        return 'fas fa-edit';
      case 'delete':
        return 'fas fa-trash-alt';
      default:
        return '';
    }
  }
  /**
   * Discard a queue entry from the synchronization
   *
   * @param orcidQueue The OrcidQueue object to discard
   */
  discardEntry(orcidQueue) {
    this.processing$.next(true);
    this.subs.push(this.orcidQueueService.deleteById(orcidQueue.id).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_5__.getFirstCompletedRemoteData)()).subscribe(remoteData => {
      this.processing$.next(false);
      if (remoteData.isSuccess) {
        this.notificationsService.success(this.translateService.get('person.page.orcid.sync-queue.discard.success'));
        this.updateList();
      } else {
        this.notificationsService.error(this.translateService.get('person.page.orcid.sync-queue.discard.error'));
      }
    }));
  }
  /**
   * Send a queue entry to orcid for the synchronization
   *
   * @param orcidQueue The OrcidQueue object to synchronize
   */
  send(orcidQueue) {
    this.processing$.next(true);
    this.subs.push(this.orcidHistoryService.sendToORCID(orcidQueue).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_5__.getFirstCompletedRemoteData)()).subscribe(remoteData => {
      this.processing$.next(false);
      if (remoteData.isSuccess) {
        this.handleOrcidHistoryRecordCreation(remoteData.payload);
      } else if (remoteData.statusCode === 422) {
        this.handleValidationErrors(remoteData);
      } else {
        this.notificationsService.error(this.translateService.get('person.page.orcid.sync-queue.send.error'));
      }
    }));
  }
  /**
   * Return the error message for Unauthorized response
   * @private
   */
  getUnauthorizedErrorContent() {
    return this.orcidAuthService.getOrcidAuthorizeUrl(this.item).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.switchMap)(authorizeUrl => this.translateService.get('person.page.orcid.sync-queue.send.unauthorized-error.content', {
      orcid: authorizeUrl
    })));
  }
  /**
   * Manage notification by response
   * @private
   */
  handleOrcidHistoryRecordCreation(orcidHistory) {
    switch (orcidHistory.status) {
      case 200:
      case 201:
      case 204:
        this.notificationsService.success(this.translateService.get('person.page.orcid.sync-queue.send.success'));
        this.updateList();
        break;
      case 400:
        this.notificationsService.error(this.translateService.get('person.page.orcid.sync-queue.send.bad-request-error'), null, {
          timeOut: 0
        });
        break;
      case 401:
        (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.combineLatest)([this.translateService.get('person.page.orcid.sync-queue.send.unauthorized-error.title'), this.getUnauthorizedErrorContent()]).subscribe(([title, content]) => {
          this.notificationsService.error(title, content, {
            timeOut: 0
          }, true);
        });
        break;
      case 404:
        this.notificationsService.warning(this.translateService.get('person.page.orcid.sync-queue.send.not-found-warning'));
        break;
      case 409:
        this.notificationsService.error(this.translateService.get('person.page.orcid.sync-queue.send.conflict-error'), null, {
          timeOut: 0
        });
        break;
      default:
        this.notificationsService.error(this.translateService.get('person.page.orcid.sync-queue.send.error'), null, {
          timeOut: 0
        });
    }
  }
  /**
   * Manage validation errors
   * @private
   */
  handleValidationErrors(remoteData) {
    const translations = [this.translateService.get('person.page.orcid.sync-queue.send.validation-error')];
    const errorMessage = remoteData.errorMessage;
    if (errorMessage && errorMessage.indexOf('Error codes:') > 0) {
      errorMessage.substring(errorMessage.indexOf(':') + 1).trim().split(',').forEach(error => translations.push(this.translateService.get('person.page.orcid.sync-queue.send.validation-error.' + error)));
    }
    (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.combineLatest)(translations).subscribe(messages => {
      const title = messages.shift();
      const content = '<ul>' + messages.map(message => `<li>${message}</li>`).join('') + '</ul>';
      this.notificationsService.error(title, content, {
        timeOut: 0
      }, true);
    });
  }
  /**
   * Unsubscribe from all subscriptions
   */
  ngOnDestroy() {
    this.list$ = null;
    this.subs.filter(subscription => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_8__.hasValue)(subscription)).forEach(subscription => subscription.unsubscribe());
  }
  static {
    this.ɵfac = function OrcidQueueComponent_Factory(t) {
      return new (t || OrcidQueueComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_core_orcid_orcid_auth_service__WEBPACK_IMPORTED_MODULE_0__.OrcidAuthService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_core_orcid_orcid_queue_data_service__WEBPACK_IMPORTED_MODULE_2__.OrcidQueueDataService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_core_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_3__.PaginationService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_10__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_core_orcid_orcid_history_data_service__WEBPACK_IMPORTED_MODULE_1__.OrcidHistoryDataService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
      type: OrcidQueueComponent,
      selectors: [["ds-orcid-queue"]],
      inputs: {
        item: "item"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵStandaloneFeature"]],
      decls: 13,
      vars: 16,
      consts: [[4, "ngIf"], [1, "container"], [3, "type", 4, "ngIf"], [3, "paginationOptions", "collectionSize", "retainScrollPosition", "hideGear", "paginationChange", 4, "ngIf"], [3, "type"], [3, "paginationChange", "paginationOptions", "collectionSize", "retainScrollPosition", "hideGear"], [1, "table-responsive"], ["id", "groups", 1, "table", "table-sm", "table-striped", "table-hover", "table-bordered"], [1, "text-center", "align-middle"], ["data-test", "orcidQueueElementRow", 4, "ngFor", "ngForOf"], ["data-test", "orcidQueueElementRow"], [1, "text-center", "align-middle", 2, "width", "15%"], ["aria-hidden", "true", 1, "fa-2x", 3, "ngClass", "ngbTooltip"], [1, "text-center", 2, "width", "20%"], [1, "btn-group", "edit-field"], ["container", "body", 1, "btn", "btn-outline-primary", "my-1", "col-md", 3, "click", "ngbTooltip"], [3, "ngClass"], [1, "sr-only"], ["container", "body", 1, "btn", "btn-outline-danger", "my-1", "col-md", 3, "click", "ngbTooltip"], [1, "fas", "fa-unlink"]],
      template: function OrcidQueueComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, OrcidQueueComponent_ds_loading_1_Template, 1, 0, "ds-loading", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "div", 1)(4, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](6, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](7, OrcidQueueComponent_ds_alert_7_Template, 3, 4, "ds-alert", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](8, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](9, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](10, OrcidQueueComponent_ds_pagination_10_Template, 18, 18, "ds-pagination", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](11, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](12, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          let tmp_2_0;
          let tmp_3_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 4, ctx.processing$));
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](6, 6, "person.orcid.registry.queue"));
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](8, 8, ctx.processing$) !== true && ((tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](9, 10, ctx.getList())) == null ? null : tmp_2_0.payload == null ? null : tmp_2_0.payload.totalElements) === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](11, 12, ctx.processing$) !== true && ((tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](12, 14, ctx.getList())) == null ? null : tmp_3_0.payload == null ? null : tmp_3_0.payload.totalElements) > 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_21__.AsyncPipe, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__.NgbTooltipModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__.NgbTooltip, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__.TranslatePipe, _shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_9__.ThemedLoadingComponent, _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_6__.AlertComponent, _shared_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_11__.PaginationComponent],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yY2lkLXF1ZXVlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBIiwiZmlsZSI6Im9yY2lkLXF1ZXVlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi8iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaXRlbS1wYWdlL29yY2lkLXBhZ2Uvb3JjaWQtcXVldWUvb3JjaWQtcXVldWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQSw0akJBQTRqQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 95934:
/*!*******************************************************************************************!*\
  !*** ./src/app/item-page/orcid-page/orcid-sync-settings/orcid-sync-settings.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrcidSyncSettingsComponent: () => (/* binding */ OrcidSyncSettingsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 56106);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 83485);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 84975);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 60494);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 58468);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 78374);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 85687);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var _core_profile_researcher_profile_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/profile/researcher-profile-data.service */ 98926);
/* harmony import */ var _core_shared_item_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/shared/item.model */ 88318);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/shared/operators */ 55757);
/* harmony import */ var _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/alert/alert.component */ 16292);
/* harmony import */ var _shared_alert_alert_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/alert/alert-type */ 47978);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/empty.util */ 82777);
/* harmony import */ var _shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/notifications/notifications.service */ 69472);
/* harmony import */ var _shared_remote_data_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/remote-data.utils */ 43404);



















function OrcidSyncSettingsComponent_option_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const syncMode_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", syncMode_r3.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 2, syncMode_r3.label));
  }
}
function OrcidSyncSettingsComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 25)(1, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function OrcidSyncSettingsComponent_div_37_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r4);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r4.currentSyncPublications, $event) || (ctx_r4.currentSyncPublications = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const option_r6 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate1"]("id", "publicationOption_", option_r6.value, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r4.currentSyncPublications);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", option_r6.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate1"]("for", "publicationOption_", option_r6.value, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 7, option_r6.label));
  }
}
function OrcidSyncSettingsComponent_div_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 25)(1, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function OrcidSyncSettingsComponent_div_50_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r7);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r4.currentSyncFunding, $event) || (ctx_r4.currentSyncFunding = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const option_r8 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate1"]("id", "fundingOption_", option_r8.value, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r4.currentSyncFunding);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", option_r8.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate1"]("for", "fundingOption_", option_r8.value, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 7, option_r8.label));
  }
}
function OrcidSyncSettingsComponent_div_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 25)(1, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function OrcidSyncSettingsComponent_div_63_Template_input_ngModelChange_1_listener($event) {
      const option_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r9).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](option_r10.checked, $event) || (option_r10.checked = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const option_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate1"]("name", "syncProfile_", option_r10.value, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate1"]("id", "profileOption_", option_r10.value, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", option_r10.checked);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", option_r10.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate1"]("for", "profileOption_", option_r10.value, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 9, option_r10.label));
  }
}
class OrcidSyncSettingsComponent {
  /**
   * Emitter that triggers onDestroy lifecycle
   * @private
   */
  #destroy$;
  /**
   * {@link BehaviorSubject} that reflects {@link item} input changes
   * @private
   */
  #item$;
  /**
   * {@link Observable} that contains {@link ResearcherProfile} linked to the {@link #item$}
   * @private
   */
  #researcherProfile$;
  constructor(researcherProfileService, notificationsService, translateService) {
    this.researcherProfileService = researcherProfileService;
    this.notificationsService = notificationsService;
    this.translateService = translateService;
    this.AlertType = _shared_alert_alert_type__WEBPACK_IMPORTED_MODULE_4__.AlertType;
    /**
     * The prefix used for i18n keys
     */
    this.messagePrefix = 'person.page.orcid';
    /**
     * An event emitted when settings are updated
     */
    this.settingsUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
    /**
     * Emitter that triggers onDestroy lifecycle
     * @private
     */
    this.#destroy$ = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
    /**
     * {@link BehaviorSubject} that reflects {@link item} input changes
     * @private
     */
    this.#item$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.BehaviorSubject(null);
  }
  /**
   * The item for which showing the orcid settings
   */
  set item(item) {
    this.#item$.next(item);
  }
  ngOnDestroy() {
    this.#destroy$.next();
  }
  /**
   * Init orcid settings form
   */
  ngOnInit() {
    this.syncModes = [{
      label: this.messagePrefix + '.synchronization-mode.batch',
      value: 'BATCH'
    }, {
      label: this.messagePrefix + '.synchronization-mode.manual',
      value: 'MANUAL'
    }];
    this.syncPublicationOptions = ['DISABLED', 'ALL'].map(value => {
      return {
        label: this.messagePrefix + '.sync-publications.' + value.toLowerCase(),
        value: value
      };
    });
    this.syncFundingOptions = ['DISABLED', 'ALL'].map(value => {
      return {
        label: this.messagePrefix + '.sync-fundings.' + value.toLowerCase(),
        value: value
      };
    });
    this.updateSyncProfileOptions(this.#item$.asObservable());
    this.updateSyncPreferences(this.#item$.asObservable());
    this.#researcherProfile$ = this.#item$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.switchMap)(item => this.researcherProfileService.findByRelatedItem(item).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_2__.getFirstCompletedRemoteData)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.catchError)(_shared_remote_data_utils__WEBPACK_IMPORTED_MODULE_7__.createFailedRemoteDataObjectFromError$), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_2__.getRemoteDataPayload)())), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this.#destroy$));
  }
  /**
   * Generate path operations to save orcid synchronization preferences
   *
   * @param form The form group
   */
  onSubmit(form) {
    const operations = [];
    this.fillOperationsFor(operations, '/orcid/mode', form.value.syncMode);
    this.fillOperationsFor(operations, '/orcid/publications', form.value.syncPublications);
    this.fillOperationsFor(operations, '/orcid/fundings', form.value.syncFundings);
    const syncProfileValue = this.syncProfileOptions.map(syncProfileOption => syncProfileOption.value).filter(value => form.value['syncProfile_' + value]).join(',');
    this.fillOperationsFor(operations, '/orcid/profile', syncProfileValue);
    if (operations.length === 0) {
      return;
    }
    this.#researcherProfile$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.switchMap)(researcherProfile => this.researcherProfileService.patch(researcherProfile, operations)), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_2__.getFirstCompletedRemoteData)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.catchError)(_shared_remote_data_utils__WEBPACK_IMPORTED_MODULE_7__.createFailedRemoteDataObjectFromError$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.take)(1)).subscribe(remoteData => {
      if (remoteData.hasFailed) {
        this.notificationsService.error(this.translateService.get(this.messagePrefix + '.synchronization-settings-update.error'));
      } else {
        this.notificationsService.success(this.translateService.get(this.messagePrefix + '.synchronization-settings-update.success'));
        this.settingsUpdated.emit();
      }
    });
  }
  /**
   *
   * Handles subscriptions to populate sync preferences
   *
   * @param item observable that emits update on item changes
   * @private
   */
  updateSyncPreferences(item) {
    item.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.filter)(_shared_empty_util__WEBPACK_IMPORTED_MODULE_5__.hasValue), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(i => this.getCurrentPreference(i, 'dspace.orcid.sync-mode', ['BATCH', 'MANUAL'], 'MANUAL')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this.#destroy$)).subscribe(val => this.currentSyncMode = val);
    item.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.filter)(_shared_empty_util__WEBPACK_IMPORTED_MODULE_5__.hasValue), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(i => this.getCurrentPreference(i, 'dspace.orcid.sync-publications', ['DISABLED', 'ALL'], 'DISABLED')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this.#destroy$)).subscribe(val => this.currentSyncPublications = val);
    item.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.filter)(_shared_empty_util__WEBPACK_IMPORTED_MODULE_5__.hasValue), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(i => this.getCurrentPreference(i, 'dspace.orcid.sync-fundings', ['DISABLED', 'ALL'], 'DISABLED')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this.#destroy$)).subscribe(val => this.currentSyncFunding = val);
  }
  /**
   * Handles subscription to populate the {@link syncProfileOptions} field
   *
   * @param item observable that emits update on item changes
   * @private
   */
  updateSyncProfileOptions(item) {
    item.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.filter)(_shared_empty_util__WEBPACK_IMPORTED_MODULE_5__.hasValue), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(i => i.allMetadataValues('dspace.orcid.sync-profile')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(metadata => ['BIOGRAPHICAL', 'IDENTIFIERS'].map(value => {
      return {
        label: this.messagePrefix + '.sync-profile.' + value.toLowerCase(),
        value: value,
        checked: metadata.includes(value)
      };
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this.#destroy$)).subscribe(value => this.syncProfileOptions = value);
  }
  /**
   * Retrieve setting saved in the item's metadata
   *
   * @param item The item from which retrieve settings
   * @param metadataField The metadata name that contains setting
   * @param allowedValues The allowed values
   * @param defaultValue  The default value
   * @private
   */
  getCurrentPreference(item, metadataField, allowedValues, defaultValue) {
    const currentPreference = item.firstMetadataValue(metadataField);
    return currentPreference && allowedValues.includes(currentPreference) ? currentPreference : defaultValue;
  }
  /**
   * Generate a replace patch operation
   *
   * @param operations
   * @param path
   * @param currentValue
   */
  fillOperationsFor(operations, path, currentValue) {
    operations.push({
      path: path,
      op: 'replace',
      value: currentValue
    });
  }
  static {
    this.ɵfac = function OrcidSyncSettingsComponent_Factory(t) {
      return new (t || OrcidSyncSettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_profile_researcher_profile_data_service__WEBPACK_IMPORTED_MODULE_0__.ResearcherProfileDataService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_6__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
      type: OrcidSyncSettingsComponent,
      selectors: [["ds-orcid-sync-setting"]],
      inputs: {
        item: "item"
      },
      outputs: {
        settingsUpdated: "settingsUpdated"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵStandaloneFeature"]],
      decls: 70,
      vars: 42,
      consts: [["f", "ngForm"], [1, "container", "mb-5"], [3, "ngSubmit"], [1, "row", "mb-3"], [1, "col-md"], ["data-test", "sync-mode", 1, "card"], [1, "card-header"], [1, "card-body"], [1, "container"], [1, "row"], [3, "type"], [1, "form-group", "row"], ["for", "syncMode"], ["name", "syncMode", "id", "syncMode", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-md", "mb-3"], ["data-test", "sync-mode-publication", 1, "card", "h-100"], [1, "form-group"], ["class", "row form-check", 4, "ngFor", "ngForOf"], ["data-test", "sync-mode-funding", 1, "card", "h-100"], ["data-test", "profile-preferences", 1, "card", "h-100"], [1, "col"], ["type", "submit", 1, "btn", "btn-primary", "float-right"], [1, "fas", "fa-edit"], [3, "value"], [1, "row", "form-check"], ["type", "radio", "name", "syncPublications", "required", "", 3, "ngModelChange", "ngModel", "id", "value"], [1, "ml-2", 3, "for"], ["type", "radio", "name", "syncFundings", "required", "", 3, "ngModelChange", "ngModel", "id", "value"], ["type", "checkbox", 3, "ngModelChange", "ngModel", "name", "id", "value"]],
      template: function OrcidSyncSettingsComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 1)(1, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "form", 2, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngSubmit", function OrcidSyncSettingsComponent_Template_form_ngSubmit_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
            const f_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](5);
            return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx.onSubmit(f_r2.form));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 3)(7, "div", 4)(8, "div", 5)(9, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](11, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 7)(13, "div", 8)(14, "div", 9)(15, "ds-alert", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](17, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "div", 11)(19, "label", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](21, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "select", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function OrcidSyncSettingsComponent_Template_select_ngModelChange_22_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx.currentSyncMode, $event) || (ctx.currentSyncMode = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](23, OrcidSyncSettingsComponent_option_23_Template, 3, 4, "option", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "div", 9)(25, "div", 15)(26, "div", 16)(27, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](28);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](29, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "div", 7)(31, "div", 8)(32, "div", 9)(33, "ds-alert", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](34);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](35, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](37, OrcidSyncSettingsComponent_div_37_Template, 5, 9, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](38, "div", 15)(39, "div", 19)(40, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](41);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](42, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](43, "div", 7)(44, "div", 8)(45, "div", 9)(46, "ds-alert", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](47);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](48, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](49, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](50, OrcidSyncSettingsComponent_div_50_Template, 5, 9, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](51, "div", 15)(52, "div", 20)(53, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](54);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](55, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](56, "div", 7)(57, "div", 8)(58, "div", 9)(59, "ds-alert", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](60);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](61, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](62, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](63, OrcidSyncSettingsComponent_div_63_Template, 5, 11, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](64, "div", 9)(65, "div", 21)(66, "button", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](67, "i", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](68);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](69, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 20, "person.orcid.sync.setting"));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](11, 22, "person.page.orcid.synchronization-mode"));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("type", ctx.AlertType.Info);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](17, 24, "person.page.orcid.synchronization-mode-message"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](21, 26, "person.page.orcid.synchronization-mode.label"));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx.currentSyncMode);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.syncModes);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](29, 28, "person.page.orcid.publications-preferences"));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("type", ctx.AlertType.Info);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](35, 30, "person.page.orcid.synchronization-mode-publication-message"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.syncPublicationOptions);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](42, 32, "person.page.orcid.funding-preferences"));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("type", ctx.AlertType.Info);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](48, 34, "person.page.orcid.synchronization-mode-funding-message"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.syncFundingOptions);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](55, 36, "person.page.orcid.profile-preferences"));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("type", ctx.AlertType.Info);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](61, 38, "person.page.orcid.synchronization-mode-profile-message"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.syncProfileOptions);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](69, 40, "person.page.orcid.save.preference.changes"), " ");
        }
      },
      dependencies: [_shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_3__.AlertComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgForm, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgForOf],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yY2lkLXN5bmMtc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUEiLCJmaWxlIjoib3JjaWQtc3luYy1zZXR0aW5ncy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaXRlbS1wYWdlL29yY2lkLXBhZ2Uvb3JjaWQtc3luYy1zZXR0aW5ncy9vcmNpZC1zeW5jLXNldHRpbmdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBO0FBQ0EsZ2xCQUFnbEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqLyJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 66377:
/*!****************************************************************!*\
  !*** ./src/app/item-page/simple/themed-item-page.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemedItemPageComponent: () => (/* binding */ ThemedItemPageComponent)
/* harmony export */ });
/* harmony import */ var _shared_theme_support_themed_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/theme-support/themed.component */ 8886);
/* harmony import */ var _item_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item-page.component */ 91459);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);



const _c0 = ["*"];
function ThemedItemPageComponent_ng_template_0_Template(rf, ctx) {}
/**
 * Themed wrapper for ItemPageComponent
 */
class ThemedItemPageComponent extends _shared_theme_support_themed_component__WEBPACK_IMPORTED_MODULE_0__.ThemedComponent {
  getComponentName() {
    return 'ItemPageComponent';
  }
  importThemedComponent(themeName) {
    return __webpack_require__(5729)(`./${themeName}/app/item-page/simple/item-page.component`);
  }
  importUnthemedComponent() {
    return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./item-page.component */ 91459));
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵThemedItemPageComponent_BaseFactory;
      return function ThemedItemPageComponent_Factory(t) {
        return (ɵThemedItemPageComponent_BaseFactory || (ɵThemedItemPageComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](ThemedItemPageComponent)))(t || ThemedItemPageComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ThemedItemPageComponent,
      selectors: [["ds-item-page"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      ngContentSelectors: _c0,
      decls: 5,
      vars: 0,
      consts: [["vcr", ""], ["content", ""]],
      template: function ThemedItemPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ThemedItemPageComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
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

/***/ 67069:
/*!*******************************************************************************!*\
  !*** ./src/app/item-page/version-page/version-page/version-page.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VersionPageComponent: () => (/* binding */ VersionPageComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 84975);
/* harmony import */ var _app_routing_paths__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../app-routing-paths */ 69799);
/* harmony import */ var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/auth/auth.service */ 67116);
/* harmony import */ var _core_data_version_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/data/version-data.service */ 81783);
/* harmony import */ var _core_shared_authorized_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/shared/authorized.operators */ 308);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/shared/operators */ 55757);
/* harmony import */ var _item_page_routing_paths__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../item-page-routing-paths */ 90887);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 14354);












class VersionPageComponent {
  constructor(route, router, versionService, authService) {
    this.route = route;
    this.router = router;
    this.versionService = versionService;
    this.authService = authService;
  }
  ngOnInit() {
    /* Retrieve version from resolver or redirect on 4xx */
    this.versionRD$ = this.route.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(data => data.dso), (0,_core_shared_authorized_operators__WEBPACK_IMPORTED_MODULE_3__.redirectOn4xx)(this.router, this.authService));
    /* Retrieve item from version and reroute to item's page or handle missing item */
    this.versionRD$.pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_4__.getFirstSucceededRemoteDataPayload)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(version => version.item), (0,_core_shared_authorized_operators__WEBPACK_IMPORTED_MODULE_3__.redirectOn4xx)(this.router, this.authService), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_4__.getFirstCompletedRemoteData)()).subscribe(itemRD => {
      if (itemRD.hasNoContent) {
        this.router.navigateByUrl((0,_app_routing_paths__WEBPACK_IMPORTED_MODULE_0__.getPageNotFoundRoute)(), {
          skipLocationChange: true
        });
      } else {
        const itemUrl = (0,_item_page_routing_paths__WEBPACK_IMPORTED_MODULE_5__.getItemPageRoute)(itemRD.payload);
        this.router.navigateByUrl(itemUrl);
      }
    });
  }
  static {
    this.ɵfac = function VersionPageComponent_Factory(t) {
      return new (t || VersionPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_data_version_data_service__WEBPACK_IMPORTED_MODULE_2__.VersionDataService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
      type: VersionPageComponent,
      selectors: [["ds-version-page"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵStandaloneFeature"]],
      decls: 0,
      vars: 0,
      template: function VersionPageComponent_Template(rf, ctx) {},
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlcnNpb24tcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQSIsImZpbGUiOiJ2ZXJzaW9uLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqLyJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaXRlbS1wYWdlL3ZlcnNpb24tcGFnZS92ZXJzaW9uLXBhZ2UvdmVyc2lvbi1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBO0FBQ0EsZ2tCQUFna0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqLyJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 64109:
/*!************************************************************!*\
  !*** ./src/app/item-page/version-page/version.resolver.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VERSION_PAGE_LINKS_TO_FOLLOW: () => (/* binding */ VERSION_PAGE_LINKS_TO_FOLLOW),
/* harmony export */   versionResolver: () => (/* binding */ versionResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 99797);
/* harmony import */ var _core_data_version_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/data/version-data.service */ 81783);
/* harmony import */ var _core_resolving_resolver_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/resolving/resolver.actions */ 81225);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/shared/operators */ 55757);
/* harmony import */ var _shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/utils/follow-link-config.model */ 67600);






/**
 * The self links defined in this list are expected to be requested somewhere in the near future
 * Requesting them as embeds will limit the number of requests
 */
const VERSION_PAGE_LINKS_TO_FOLLOW = [(0,_shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_3__.followLink)('item')];
/**
 * Method for resolving a version based on the parameters in the current route
 * @param {ActivatedRouteSnapshot} route The current ActivatedRouteSnapshot
 * @param {RouterStateSnapshot} state The current RouterStateSnapshot
 * @param {VersionDataService} versionService
 * @param {Store<AppState>} store
 * @returns Observable<<RemoteData<Item>> Emits the found item based on the parameters in the current route,
 * or an error if something went wrong
 */
const versionResolver = (route, state, versionService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_core_data_version_data_service__WEBPACK_IMPORTED_MODULE_0__.VersionDataService), store = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store)) => {
  const versionRD$ = versionService.findById(route.params.id, true, false, ...VERSION_PAGE_LINKS_TO_FOLLOW).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_2__.getFirstCompletedRemoteData)());
  versionRD$.subscribe(versionRD => {
    store.dispatch(new _core_resolving_resolver_actions__WEBPACK_IMPORTED_MODULE_1__.ResolvedAction(state.url, versionRD.payload));
  });
  return versionRD$;
};

/***/ }),

/***/ 131:
/*!***************************************************************************************************!*\
  !*** ./src/app/shared/input-suggestions/dso-input-suggestions/dso-input-suggestions.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DsoInputSuggestionsComponent: () => (/* binding */ DsoInputSuggestionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 56106);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var _core_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/breadcrumbs/dso-name.service */ 96526);
/* harmony import */ var _core_shared_view_mode_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/shared/view-mode.model */ 78448);
/* harmony import */ var _empty_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../empty.util */ 82777);
/* harmony import */ var _object_collection_collection_element_link_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../object-collection/collection-element-link.type */ 7581);
/* harmony import */ var _object_collection_shared_listable_object_listable_object_component_loader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../object-collection/shared/listable-object/listable-object-component-loader.component */ 17191);
/* harmony import */ var _utils_click_outside_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/click-outside.directive */ 46301);
/* harmony import */ var _utils_debounce_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/debounce.directive */ 56386);
/* harmony import */ var _input_suggestions_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../input-suggestions.component */ 14412);
















const _c0 = a0 => ({
  "is-invalid": a0
});
const _c1 = () => ({
  standalone: true
});
const _c2 = a0 => ({
  "show": a0
});
function DsoInputSuggestionsComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "button", 9, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DsoInputSuggestionsComponent_div_10_Template_button_click_1_listener() {
      const suggestionOption_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r3.onClickSuggestion(suggestionOption_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "ds-listable-object-component-loader", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const suggestionOption_r3 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("object", suggestionOption_r3)("viewMode", ctx_r3.viewMode)("linkType", ctx_r3.linkTypes.None);
  }
}
/**
 * Component representing a form with a autocomplete functionality for DSpaceObjects
 */
class DsoInputSuggestionsComponent extends _input_suggestions_component__WEBPACK_IMPORTED_MODULE_7__.InputSuggestionsComponent {
  constructor(dsoNameService) {
    super();
    this.dsoNameService = dsoNameService;
    /**
     * The view mode of the listed object suggestions
     */
    this.viewMode = _core_shared_view_mode_model__WEBPACK_IMPORTED_MODULE_1__.ViewMode.ListElement;
    /**
     * The available link types
     */
    this.linkTypes = _object_collection_collection_element_link_type__WEBPACK_IMPORTED_MODULE_3__.CollectionElementLinkType;
    /**
     * The suggestions that should be shown
     */
    this.suggestions = [];
  }
  onSubmit(data) {
    if ((0,_empty_util__WEBPACK_IMPORTED_MODULE_2__.hasValue)(data)) {
      this.value = this.dsoNameService.getName(data);
      this.currentObject = data;
      this.submitSuggestion.emit(data);
    }
  }
  onClickSuggestion(data) {
    this.value = this.dsoNameService.getName(data);
    this.currentObject = data;
    this.clickSuggestion.emit(data);
    this.close();
    this.blockReopen = true;
    this.queryInput.nativeElement.focus();
    return false;
  }
  static {
    this.ɵfac = function DsoInputSuggestionsComponent_Factory(t) {
      return new (t || DsoInputSuggestionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_0__.DSONameService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
      type: DsoInputSuggestionsComponent,
      selectors: [["ds-dso-input-suggestions"]],
      inputs: {
        suggestions: "suggestions"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵProvidersFeature"]([{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NG_VALUE_ACCESSOR,
        // Usage of forwardRef necessary https://github.com/angular/angular.io/issues/1151
        // eslint-disable-next-line @angular-eslint/no-forward-ref
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.forwardRef)(() => DsoInputSuggestionsComponent),
        multi: true
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵStandaloneFeature"]],
      decls: 11,
      vars: 19,
      consts: [["form", "ngForm"], ["inputField", ""], ["suggestion", ""], [3, "ngSubmit", "keydown.arrowdown", "keydown.arrowup", "keydown.esc", "dsClickOutside", "action"], ["type", "text", "autocomplete", "off", 1, "form-control", "suggestion_input", "mb-2", 3, "ngModelChange", "onDebounce", "ngModel", "name", "ngClass", "dsDebounce", "placeholder", "ngModelOptions"], ["type", "submit", 1, "sr-only"], [1, "autocomplete", "dropdown-menu", 3, "ngClass"], [1, "dropdown-list"], [4, "ngFor", "ngForOf"], [1, "d-block", "dropdown-item", 3, "click"], [3, "object", "viewMode", "linkType"]],
      template: function DsoInputSuggestionsComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "form", 3, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngSubmit", function DsoInputSuggestionsComponent_Template_form_ngSubmit_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx.onSubmit(ctx.currentObject));
          })("keydown.arrowdown", function DsoInputSuggestionsComponent_Template_form_keydown_arrowdown_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx.shiftFocusDown($event));
          })("keydown.arrowup", function DsoInputSuggestionsComponent_Template_form_keydown_arrowup_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx.shiftFocusUp($event));
          })("keydown.esc", function DsoInputSuggestionsComponent_Template_form_keydown_esc_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx.close());
          })("dsClickOutside", function DsoInputSuggestionsComponent_Template_form_dsClickOutside_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx.close());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "input", 4, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function DsoInputSuggestionsComponent_Template_input_ngModelChange_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx.value, $event) || (ctx.value = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("onDebounce", function DsoInputSuggestionsComponent_Template_input_onDebounce_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx.find($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](8, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, DsoInputSuggestionsComponent_div_10_Template, 4, 3, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("action", ctx.action, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx.value);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("name", ctx.name)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](14, _c0, !ctx.valid))("dsDebounce", ctx.debounceTime)("placeholder", ctx.placeholder)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](16, _c1));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](6, 10, "search.filters.search.submit"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](17, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](8, 12, ctx.show) && ctx.isNotEmpty(ctx.suggestions)));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.suggestions);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgForm, _utils_click_outside_directive__WEBPACK_IMPORTED_MODULE_5__.ClickOutsideDirective, _utils_debounce_directive__WEBPACK_IMPORTED_MODULE_6__.DebounceDirective, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgFor, _object_collection_shared_listable_object_listable_object_component_loader_component__WEBPACK_IMPORTED_MODULE_4__.ListableObjectComponentLoaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n.autocomplete[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.autocomplete[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  white-space: normal;\n  word-break: break-word;\n  padding: var(--bs-input-padding-y) var(--bs-input-padding-x);\n}\n\n.autocomplete[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\nform[_ngcontent-%COMP%] {\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucHV0LXN1Z2dlc3Rpb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBO0FBQ0E7RUFDRSxXQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNERBQUE7QUFFRjs7QUFBQTtFQUNFLGFBQUE7QUFHRjs7QUFEQTtFQUNFLGtCQUFBO0FBSUYiLCJmaWxlIjoiaW5wdXQtc3VnZ2VzdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqL1xuLmF1dG9jb21wbGV0ZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmF1dG9jb21wbGV0ZSAuZHJvcGRvd24taXRlbSB7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gIHBhZGRpbmc6IHZhcigtLWJzLWlucHV0LXBhZGRpbmcteSkgdmFyKC0tYnMtaW5wdXQtcGFkZGluZy14KTtcbn1cbi5hdXRvY29tcGxldGUgLmRyb3Bkb3duLWl0ZW06Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuZm9ybSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2lucHV0LXN1Z2dlc3Rpb25zL2lucHV0LXN1Z2dlc3Rpb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBO0FBQ0E7RUFDRSxXQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNERBQUE7QUFFRjs7QUFBQTtFQUNFLGFBQUE7QUFHRjs7QUFEQTtFQUNFLGtCQUFBO0FBSUY7QUFDQSxnbENBQWdsQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovXG4uYXV0b2NvbXBsZXRlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uYXV0b2NvbXBsZXRlIC5kcm9wZG93bi1pdGVtIHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgcGFkZGluZzogdmFyKC0tYnMtaW5wdXQtcGFkZGluZy15KSB2YXIoLS1icy1pbnB1dC1wYWRkaW5nLXgpO1xufVxuLmF1dG9jb21wbGV0ZSAuZHJvcGRvd24taXRlbTpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5mb3JtIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 5729:
/*!****************************************************************************************************!*\
  !*** ./src/themes/ lazy ^\.\/.*\/app\/item\-page\/simple\/item\-page\.component$ namespace object ***!
  \****************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./custom/app/item-page/simple/item-page.component": [
		37078,
		"src_themes_custom_app_item-page_simple_item-page_component_ts"
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
webpackAsyncContext.id = 5729;
module.exports = webpackAsyncContext;

/***/ })

}]);
//# sourceMappingURL=src_app_item-page_item-page-routes_ts.js.map