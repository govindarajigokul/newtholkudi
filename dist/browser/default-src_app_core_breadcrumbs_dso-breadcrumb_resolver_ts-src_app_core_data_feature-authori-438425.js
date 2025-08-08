"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["default-src_app_core_breadcrumbs_dso-breadcrumb_resolver_ts-src_app_core_data_feature-authori-438425"],{

/***/ 70025:
/*!*************************************************************!*\
  !*** ./src/app/core/breadcrumbs/dso-breadcrumb.resolver.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 6056:
/*!**************************************************************************************************************!*\
  !*** ./src/app/core/data/feature-authorization/feature-authorization-guard/dso-page-single-feature.guard.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 81225:
/*!****************************************************!*\
  !*** ./src/app/core/resolving/resolver.actions.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResolvedAction: () => (/* binding */ ResolvedAction),
/* harmony export */   ResolverActionTypes: () => (/* binding */ ResolverActionTypes)
/* harmony export */ });
/* harmony import */ var _shared_ngrx_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/ngrx/type */ 91000);

const ResolverActionTypes = {
  RESOLVED: (0,_shared_ngrx_type__WEBPACK_IMPORTED_MODULE_0__.type)('dspace/resolver/RESOLVED')
};
/**
 * An action that indicates a route object has been resolved.
 *
 * It isn't used in a reducer for now. Its purpose is to be able to be notified that an object
 * has been resolved in an effect.
 */
class ResolvedAction {
  constructor(url, dso) {
    this.type = ResolverActionTypes.RESOLVED;
    this.payload = {
      url,
      dso
    };
  }
}

/***/ }),

/***/ 35484:
/*!*******************************************************************!*\
  !*** ./src/app/shared/dso-page/dso-edit-menu-resolver.service.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DSOEditMenuResolverService: () => (/* binding */ DSOEditMenuResolverService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 17796);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs */ 27639);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 84975);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var _app_routing_paths__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app-routing-paths */ 69799);
/* harmony import */ var _core_data_dspace_object_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/data/dspace-object-data.service */ 13989);
/* harmony import */ var _core_data_feature_authorization_authorization_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/data/feature-authorization/authorization-data.service */ 3675);
/* harmony import */ var _core_data_feature_authorization_feature_id__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/data/feature-authorization/feature-id */ 3970);
/* harmony import */ var _core_profile_researcher_profile_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/profile/researcher-profile-data.service */ 98926);
/* harmony import */ var _core_shared_collection_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/shared/collection.model */ 6041);
/* harmony import */ var _core_shared_community_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/shared/community.model */ 10046);
/* harmony import */ var _core_shared_item_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/shared/item.model */ 88318);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/shared/operators */ 55757);
/* harmony import */ var _core_submission_correctiontype_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/submission/correctiontype-data.service */ 75447);
/* harmony import */ var _core_url_combiner_url_combiner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/url-combiner/url-combiner */ 45663);
/* harmony import */ var _empty_util__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../empty.util */ 82777);
/* harmony import */ var _menu_menu_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../menu/menu.service */ 39548);
/* harmony import */ var _menu_menu_id_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../menu/menu-id.model */ 19340);
/* harmony import */ var _menu_menu_item_type_model__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../menu/menu-item-type.model */ 34237);
/* harmony import */ var _notifications_notifications_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../notifications/notifications.service */ 69472);
/* harmony import */ var _subscriptions_subscription_modal_subscription_modal_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../subscriptions/subscription-modal/subscription-modal.component */ 10781);
/* harmony import */ var _dso_versioning_modal_service_dso_versioning_modal_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./dso-versioning-modal-service/dso-versioning-modal.service */ 3277);
/* harmony import */ var _dso_withdrawn_reinstate_service_dso_withdrawn_reinstate_modal_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./dso-withdrawn-reinstate-service/dso-withdrawn-reinstate-modal.service */ 60833);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 49966);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ngx-translate/core */ 96439);


































/**
 * Creates the menus for the dspace object pages
 */
class DSOEditMenuResolverService {
  constructor(dSpaceObjectDataService, menuService, authorizationService, modalService, dsoVersioningModalService, researcherProfileService, notificationsService, translate, dsoWithdrawnReinstateModalService, correctionTypeDataService) {
    this.dSpaceObjectDataService = dSpaceObjectDataService;
    this.menuService = menuService;
    this.authorizationService = authorizationService;
    this.modalService = modalService;
    this.dsoVersioningModalService = dsoVersioningModalService;
    this.researcherProfileService = researcherProfileService;
    this.notificationsService = notificationsService;
    this.translate = translate;
    this.dsoWithdrawnReinstateModalService = dsoWithdrawnReinstateModalService;
    this.correctionTypeDataService = correctionTypeDataService;
  }
  /**
   * Initialise all dspace object related menus
   */
  resolve(route, state) {
    let id = route.params.id;
    if ((0,_empty_util__WEBPACK_IMPORTED_MODULE_11__.hasNoValue)(id) && (0,_empty_util__WEBPACK_IMPORTED_MODULE_11__.hasValue)(route.queryParams.scope)) {
      id = route.queryParams.scope;
    }
    if ((0,_empty_util__WEBPACK_IMPORTED_MODULE_11__.hasNoValue)(id)) {
      // If there's no ID, we're not on a DSO homepage, so pass on any pre-existing menu route data
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.of)({
        ...route.data?.menu
      });
    } else {
      return this.dSpaceObjectDataService.findById(id, true, false).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_8__.getFirstCompletedRemoteData)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.switchMap)(dsoRD => {
        if (dsoRD.hasSucceeded) {
          const dso = dsoRD.payload;
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.combineLatest)(this.getDsoMenus(dso, route, state)).pipe(
          // Menu sections are retrieved as an array of arrays and flattened into a single array
          (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.map)(combinedMenus => [].concat.apply([], combinedMenus)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.map)(menus => this.addDsoUuidToMenuIDs(menus, dso)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.map)(menus => {
            return {
              ...route.data?.menu,
              [_menu_menu_id_model__WEBPACK_IMPORTED_MODULE_13__.MenuID.DSO_EDIT]: menus
            };
          }));
        } else {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.of)({
            ...route.data?.menu
          });
        }
      }));
    }
  }
  /**
   * Return all the menus for a dso based on the route and state
   */
  getDsoMenus(dso, route, state) {
    return [this.getItemMenu(dso), this.getComColMenu(dso), this.getCommonMenu(dso, state)];
  }
  /**
   * Get the common menus between all dspace objects
   */
  getCommonMenu(dso, state) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.combineLatest)([this.authorizationService.isAuthorized(_core_data_feature_authorization_feature_id__WEBPACK_IMPORTED_MODULE_3__.FeatureID.CanEditMetadata, dso.self)]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.map)(([canEditItem]) => {
      return [{
        id: 'edit-dso',
        active: false,
        visible: canEditItem,
        model: {
          type: _menu_menu_item_type_model__WEBPACK_IMPORTED_MODULE_14__.MenuItemType.LINK,
          text: this.getDsoType(dso) + '.page.edit',
          link: new _core_url_combiner_url_combiner__WEBPACK_IMPORTED_MODULE_10__.URLCombiner((0,_app_routing_paths__WEBPACK_IMPORTED_MODULE_0__.getDSORoute)(dso), 'edit', 'metadata').toString()
        },
        icon: 'pencil-alt',
        index: 2
      }];
    }));
  }
  /**
   * Get item specific menus
   */
  getItemMenu(dso) {
    if (dso instanceof _core_shared_item_model__WEBPACK_IMPORTED_MODULE_7__.Item) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.combineLatest)([this.authorizationService.isAuthorized(_core_data_feature_authorization_feature_id__WEBPACK_IMPORTED_MODULE_3__.FeatureID.CanCreateVersion, dso.self), this.dsoVersioningModalService.isNewVersionButtonDisabled(dso), this.dsoVersioningModalService.getVersioningTooltipMessage(dso, 'item.page.version.hasDraft', 'item.page.version.create'), this.authorizationService.isAuthorized(_core_data_feature_authorization_feature_id__WEBPACK_IMPORTED_MODULE_3__.FeatureID.CanSynchronizeWithORCID, dso.self), this.authorizationService.isAuthorized(_core_data_feature_authorization_feature_id__WEBPACK_IMPORTED_MODULE_3__.FeatureID.CanClaimItem, dso.self), this.correctionTypeDataService.findByItem(dso.uuid, true).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_8__.getFirstCompletedRemoteData)(), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_8__.getRemoteDataPayload)())]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.map)(([canCreateVersion, disableVersioning, versionTooltip, canSynchronizeWithOrcid, canClaimItem, correction]) => {
        const isPerson = this.getDsoType(dso) === 'person';
        return [{
          id: 'orcid-dso',
          active: false,
          visible: isPerson && canSynchronizeWithOrcid,
          model: {
            type: _menu_menu_item_type_model__WEBPACK_IMPORTED_MODULE_14__.MenuItemType.LINK,
            text: 'item.page.orcid.tooltip',
            link: new _core_url_combiner_url_combiner__WEBPACK_IMPORTED_MODULE_10__.URLCombiner((0,_app_routing_paths__WEBPACK_IMPORTED_MODULE_0__.getDSORoute)(dso), 'orcid').toString()
          },
          icon: 'orcid fab fa-lg',
          index: 0
        }, {
          id: 'version-dso',
          active: false,
          visible: canCreateVersion,
          model: {
            type: _menu_menu_item_type_model__WEBPACK_IMPORTED_MODULE_14__.MenuItemType.ONCLICK,
            text: versionTooltip,
            disabled: disableVersioning,
            function: () => {
              this.dsoVersioningModalService.openCreateVersionModal(dso);
            }
          },
          icon: 'code-branch',
          index: 1
        }, {
          id: 'claim-dso',
          active: false,
          visible: isPerson && canClaimItem,
          model: {
            type: _menu_menu_item_type_model__WEBPACK_IMPORTED_MODULE_14__.MenuItemType.ONCLICK,
            text: 'item.page.claim.button',
            function: () => {
              this.claimResearcher(dso);
            }
          },
          icon: 'hand-paper',
          index: 3
        }, {
          id: 'withdrawn-item',
          active: false,
          visible: dso.isArchived && correction?.page.some(c => c.topic === _dso_withdrawn_reinstate_service_dso_withdrawn_reinstate_modal_service__WEBPACK_IMPORTED_MODULE_18__.REQUEST_WITHDRAWN),
          model: {
            type: _menu_menu_item_type_model__WEBPACK_IMPORTED_MODULE_14__.MenuItemType.ONCLICK,
            text: 'item.page.withdrawn',
            function: () => {
              this.dsoWithdrawnReinstateModalService.openCreateWithdrawnReinstateModal(dso, 'request-withdrawn', dso.isArchived);
            }
          },
          icon: 'eye-slash',
          index: 4
        }, {
          id: 'reinstate-item',
          active: false,
          visible: dso.isWithdrawn && correction?.page.some(c => c.topic === _dso_withdrawn_reinstate_service_dso_withdrawn_reinstate_modal_service__WEBPACK_IMPORTED_MODULE_18__.REQUEST_REINSTATE),
          model: {
            type: _menu_menu_item_type_model__WEBPACK_IMPORTED_MODULE_14__.MenuItemType.ONCLICK,
            text: 'item.page.reinstate',
            function: () => {
              this.dsoWithdrawnReinstateModalService.openCreateWithdrawnReinstateModal(dso, 'request-reinstate', dso.isArchived);
            }
          },
          icon: 'eye',
          index: 5
        }];
      }));
    } else {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.of)([]);
    }
  }
  /**
   * Get Community/Collection-specific menus
   */
  getComColMenu(dso) {
    if (dso instanceof _core_shared_community_model__WEBPACK_IMPORTED_MODULE_6__.Community || dso instanceof _core_shared_collection_model__WEBPACK_IMPORTED_MODULE_5__.Collection) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.combineLatest)([this.authorizationService.isAuthorized(_core_data_feature_authorization_feature_id__WEBPACK_IMPORTED_MODULE_3__.FeatureID.CanSubscribe, dso.self)]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.map)(([canSubscribe]) => {
        return [{
          id: 'subscribe',
          active: false,
          visible: canSubscribe,
          model: {
            type: _menu_menu_item_type_model__WEBPACK_IMPORTED_MODULE_14__.MenuItemType.ONCLICK,
            text: 'subscriptions.tooltip',
            function: () => {
              const modalRef = this.modalService.open(_subscriptions_subscription_modal_subscription_modal_component__WEBPACK_IMPORTED_MODULE_16__.SubscriptionModalComponent);
              modalRef.componentInstance.dso = dso;
            }
          },
          icon: 'bell',
          index: 4
        }];
      }));
    } else {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.of)([]);
    }
  }
  /**
   * Claim a researcher by creating a profile
   * Shows notifications and/or hides the menu section on success/error
   */
  claimResearcher(dso) {
    this.researcherProfileService.createFromExternalSourceAndReturnRelatedItemId(dso.self).subscribe(id => {
      if ((0,_empty_util__WEBPACK_IMPORTED_MODULE_11__.isNotEmpty)(id)) {
        this.notificationsService.success(this.translate.get('researcherprofile.success.claim.title'), this.translate.get('researcherprofile.success.claim.body'));
        this.authorizationService.invalidateAuthorizationsRequestCache();
        this.menuService.hideMenuSection(_menu_menu_id_model__WEBPACK_IMPORTED_MODULE_13__.MenuID.DSO_EDIT, 'claim-dso-' + dso.uuid);
      } else {
        this.notificationsService.error(this.translate.get('researcherprofile.error.claim.title'), this.translate.get('researcherprofile.error.claim.body'));
      }
    });
  }
  /**
   * Retrieve the dso or entity type for an object to be used in generic messages
   */
  getDsoType(dso) {
    const renderType = dso.getRenderTypes()[0];
    if (typeof renderType === 'string' || renderType instanceof String) {
      return renderType.toLowerCase();
    } else {
      return dso.type.toString().toLowerCase();
    }
  }
  /**
   * Add the dso uuid to all provided menu ids and parent ids
   */
  addDsoUuidToMenuIDs(menus, dso) {
    return menus.map(menu => {
      Object.assign(menu, {
        id: menu.id + '-' + dso.uuid
      });
      if ((0,_empty_util__WEBPACK_IMPORTED_MODULE_11__.hasValue)(menu.parentID)) {
        Object.assign(menu, {
          parentID: menu.parentID + '-' + dso.uuid
        });
      }
      return menu;
    });
  }
  static {
    this.ɵfac = function DSOEditMenuResolverService_Factory(t) {
      return new (t || DSOEditMenuResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵinject"](_core_data_dspace_object_data_service__WEBPACK_IMPORTED_MODULE_1__.DSpaceObjectDataService), _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵinject"](_menu_menu_service__WEBPACK_IMPORTED_MODULE_12__.MenuService), _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵinject"](_core_data_feature_authorization_authorization_data_service__WEBPACK_IMPORTED_MODULE_2__.AuthorizationDataService), _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵinject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵinject"](_dso_versioning_modal_service_dso_versioning_modal_service__WEBPACK_IMPORTED_MODULE_17__.DsoVersioningModalService), _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵinject"](_core_profile_researcher_profile_data_service__WEBPACK_IMPORTED_MODULE_4__.ResearcherProfileDataService), _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵinject"](_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_15__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵinject"](_dso_withdrawn_reinstate_service_dso_withdrawn_reinstate_modal_service__WEBPACK_IMPORTED_MODULE_18__.DsoWithdrawnReinstateModalService), _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵinject"](_core_submission_correctiontype_data_service__WEBPACK_IMPORTED_MODULE_9__.CorrectionTypeDataService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdefineInjectable"]({
      token: DSOEditMenuResolverService,
      factory: DSOEditMenuResolverService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 19964:
/*!***********************************************************!*\
  !*** ./src/app/shared/dso-page/dso-edit-menu.resolver.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dsoEditMenuResolver: () => (/* binding */ dsoEditMenuResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _dso_edit_menu_resolver_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dso-edit-menu-resolver.service */ 35484);


/**
 * Initialise all dspace object related menus
 */
const dsoEditMenuResolver = (route, state, menuResolverService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_dso_edit_menu_resolver_service__WEBPACK_IMPORTED_MODULE_0__.DSOEditMenuResolverService)) => {
  return menuResolverService.resolve(route, state);
};

/***/ }),

/***/ 3277:
/*!**********************************************************************************************!*\
  !*** ./src/app/shared/dso-page/dso-versioning-modal-service/dso-versioning-modal.service.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DsoVersioningModalService: () => (/* binding */ DsoVersioningModalService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 17796);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 84975);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 21252);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var _core_data_item_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/data/item-data.service */ 29326);
/* harmony import */ var _core_data_version_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/data/version-data.service */ 81783);
/* harmony import */ var _core_data_version_history_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/data/version-history-data.service */ 93860);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/shared/operators */ 55757);
/* harmony import */ var _core_submission_workspaceitem_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/submission/workspaceitem-data.service */ 24261);
/* harmony import */ var _item_page_versions_item_versions_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../item-page/versions/item-versions-shared.service */ 76604);
/* harmony import */ var _item_page_versions_item_versions_summary_modal_item_versions_summary_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../item-page/versions/item-versions-summary-modal/item-versions-summary-modal.component */ 13574);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 49966);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 14354);



















/**
 * Service to take care of all the functionality related to the version creation modal
 */
class DsoVersioningModalService {
  constructor(modalService, versionService, versionHistoryService, itemVersionShared, router, workspaceItemDataService, itemService) {
    this.modalService = modalService;
    this.versionService = versionService;
    this.versionHistoryService = versionHistoryService;
    this.itemVersionShared = itemVersionShared;
    this.router = router;
    this.workspaceItemDataService = workspaceItemDataService;
    this.itemService = itemService;
  }
  /**
   * Open the create version modal for the provided dso
   */
  openCreateVersionModal(dso) {
    const item = dso;
    const versionHref = item._links.version.href;
    // Open modal
    const activeModal = this.modalService.open(_item_page_versions_item_versions_summary_modal_item_versions_summary_modal_component__WEBPACK_IMPORTED_MODULE_6__.ItemVersionsSummaryModalComponent);
    // Show current version in modal
    this.versionService.findByHref(versionHref).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_3__.getFirstCompletedRemoteData)()).subscribe(res => {
      // if res.hasNoContent then the item is unversioned
      activeModal.componentInstance.firstVersion = res.hasNoContent;
      activeModal.componentInstance.versionNumber = res.hasNoContent ? undefined : res.payload.version;
    });
    // On createVersionEvent emitted create new version and notify
    activeModal.componentInstance.createVersionEvent.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(summary => this.versionHistoryService.createVersion(item._links.self.href, summary)), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_3__.getFirstCompletedRemoteData)(),
    // close model (should be displaying loading/waiting indicator) when version creation failed/succeeded
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.tap)(() => activeModal.close()),
    // show success/failure notification
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.tap)(res => {
      this.itemVersionShared.notifyCreateNewVersion(res);
    }),
    // get workspace item
    (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_3__.getFirstSucceededRemoteDataPayload)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(newVersion => this.itemService.findByHref(newVersion._links.item.href)), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_3__.getFirstSucceededRemoteDataPayload)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(newVersionItem => this.workspaceItemDataService.findByItem(newVersionItem.uuid, true, false)), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_3__.getFirstSucceededRemoteDataPayload)()).subscribe(wsItem => {
      const wsiId = wsItem.id;
      const route = 'workspaceitems/' + wsiId + '/edit';
      this.router.navigateByUrl(route);
    });
  }
  /**
   * Checks if the new version button should be disabled for the provided dso
   */
  isNewVersionButtonDisabled(dso) {
    return this.versionHistoryService.hasDraftVersion$(dso._links.version.href).pipe(
    // button is disabled if hasDraftVersion = true, and enabled if hasDraftVersion = false or null
    // (hasDraftVersion is null when a version history does not exist)
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(res => Boolean(res)));
  }
  /**
   * Checks and returns the tooltip that needs to be used for the create version button tooltip
   */
  getVersioningTooltipMessage(dso, tooltipMsgHasDraft, tooltipMsgCreate) {
    return this.isNewVersionButtonDisabled(dso).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(hasDraftVersion => (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(hasDraftVersion ? tooltipMsgHasDraft : tooltipMsgCreate)));
  }
  static {
    this.ɵfac = function DsoVersioningModalService_Factory(t) {
      return new (t || DsoVersioningModalService)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_core_data_version_data_service__WEBPACK_IMPORTED_MODULE_1__.VersionDataService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_core_data_version_history_data_service__WEBPACK_IMPORTED_MODULE_2__.VersionHistoryDataService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_item_page_versions_item_versions_shared_service__WEBPACK_IMPORTED_MODULE_5__.ItemVersionsSharedService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_core_submission_workspaceitem_data_service__WEBPACK_IMPORTED_MODULE_4__.WorkspaceitemDataService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_core_data_item_data_service__WEBPACK_IMPORTED_MODULE_0__.ItemDataService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjectable"]({
      token: DsoVersioningModalService,
      factory: DsoVersioningModalService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=default-src_app_core_breadcrumbs_dso-breadcrumb_resolver_ts-src_app_core_data_feature-authori-438425.js.map