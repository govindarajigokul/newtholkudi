(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_app_item-page_edit-item-page_edit-item-page-routes_ts"],{

/***/ 30945:
/*!*************************************************************************************************!*\
  !*** ./src/app/item-page/edit-item-page/abstract-item-update/abstract-item-update.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbstractItemUpdateComponent: () => (/* binding */ AbstractItemUpdateComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 27639);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 21252);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 84975);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 78374);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 88280);
/* harmony import */ var _core_data_item_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/data/item-data.service */ 29326);
/* harmony import */ var _core_data_object_updates_object_updates_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/data/object-updates/object-updates.service */ 59033);
/* harmony import */ var _core_shared_item_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/shared/item.model */ 88318);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/shared/operators */ 55757);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/empty.util */ 82777);
/* harmony import */ var _shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/notifications/notifications.service */ 69472);
/* harmony import */ var _shared_trackable_abstract_trackable_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/trackable/abstract-trackable.component */ 45969);
/* harmony import */ var _item_resolver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../item.resolver */ 56273);
/* harmony import */ var _item_page_routing_paths__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../item-page-routing-paths */ 90887);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ 96439);




















/**
 * Abstract component for managing object updates of an item
 */
class AbstractItemUpdateComponent extends _shared_trackable_abstract_trackable_component__WEBPACK_IMPORTED_MODULE_7__.AbstractTrackableComponent {
  constructor(itemService, objectUpdatesService, router, notificationsService, translateService, route) {
    super(objectUpdatesService, notificationsService, translateService, router);
    this.itemService = itemService;
    this.objectUpdatesService = objectUpdatesService;
    this.router = router;
    this.notificationsService = notificationsService;
    this.translateService = translateService;
    this.route = route;
  }
  /**
   * Initialize common properties between item-update components
   */
  ngOnInit() {
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_5__.hasValue)(this.item)) {
      this.setItem(this.item);
    } else {
      // The item wasn't provided through an input, retrieve it from the route instead.
      this.itemUpdateSubscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.combineLatest)([this.route.data, this.route.parent.data]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(([data, parentData]) => Object.assign({}, data, parentData)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(data => data.dso), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.tap)(rd => {
        this.item = rd.payload;
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.switchMap)(rd => {
        return this.itemService.findByHref(rd.payload._links.self.href, true, true, ...(0,_item_resolver__WEBPACK_IMPORTED_MODULE_8__.getItemPageLinksToFollow)());
      }), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_4__.getAllSucceededRemoteData)()).subscribe(rd => {
        this.setItem(rd.payload);
      });
    }
    super.ngOnInit();
    this.discardTimeOut = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.item.edit.undoTimeout;
    this.hasChanges().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.take)(1)).subscribe(hasChanges => {
      if (!hasChanges) {
        this.initializeOriginalFields();
      } else {
        this.checkLastModified();
      }
    });
    this.initializeNotificationsPrefix();
    this.initializeUpdates();
  }
  setItem(item) {
    this.item = item;
    this.itemPageRoute = (0,_item_page_routing_paths__WEBPACK_IMPORTED_MODULE_9__.getItemPageRoute)(this.item);
    this.postItemInit();
    this.initializeUpdates();
  }
  ngOnDestroy() {
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_5__.hasValue)(this.itemUpdateSubscription)) {
      this.itemUpdateSubscription.unsubscribe();
    }
  }
  /**
   * Actions to perform after the item has been initialized
   * Abstract method: Should be overwritten in the sub class
   */
  postItemInit() {
    // Overwrite in subclasses
  }
  /**
   * Initialize the values and updates of the current item's fields
   * Abstract method: Should be overwritten in the sub class
   */
  initializeUpdates() {
    // Overwrite in subclasses
  }
  /**
   * Initialize the prefix for notification messages
   * Abstract method: Should be overwritten in the sub class
   */
  initializeNotificationsPrefix() {
    // Overwrite in subclasses
  }
  /**
   * Sends all initial values of this item to the object updates service
   * Abstract method: Should be overwritten in the sub class
   */
  initializeOriginalFields() {
    // Overwrite in subclasses
  }
  /**
   * Submit the current changes
   * Abstract method: Should be overwritten in the sub class
   */
  submit() {
    // Overwrite in subclasses
  }
  /**
   * Prevent unnecessary rerendering so fields don't lose focus
   */
  trackUpdate(index, update) {
    return update && update.field ? update.field.uuid : undefined;
  }
  /**
   * Check if the current page is entirely valid
   */
  isValid() {
    return this.objectUpdatesService.isValidPage(this.url);
  }
  /**
   * Checks if the current item is still in sync with the version in the store
   * If it's not, a notification is shown and the changes are removed
   */
  checkLastModified() {
    const currentVersion = this.item.lastModified;
    this.objectUpdatesService.getLastModified(this.url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.take)(1)).subscribe(updateVersion => {
      if (updateVersion.getDate() !== currentVersion.getDate()) {
        this.notificationsService.warning(this.getNotificationTitle('outdated'), this.getNotificationContent('outdated'));
        this.initializeOriginalFields();
      }
    });
  }
  static {
    this.ɵfac = function AbstractItemUpdateComponent_Factory(t) {
      return new (t || AbstractItemUpdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_core_data_item_data_service__WEBPACK_IMPORTED_MODULE_1__.ItemDataService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_core_data_object_updates_object_updates_service__WEBPACK_IMPORTED_MODULE_2__.ObjectUpdatesService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_6__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.ActivatedRoute));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({
      type: AbstractItemUpdateComponent,
      selectors: [["ds-abstract-item-update"]],
      inputs: {
        item: "item"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵStandaloneFeature"]],
      decls: 0,
      vars: 0,
      template: function AbstractItemUpdateComponent_Template(rf, ctx) {},
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 29249:
/*!*****************************************************************!*\
  !*** ./src/app/item-page/edit-item-page/edit-item-operators.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   findSuccessfulAccordingTo: () => (/* binding */ findSuccessfulAccordingTo)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 46891);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/shared/operators */ 55757);


/**
 * Return first Observable of a RemoteData object that complies to the provided predicate
 * @param predicate
 */
const findSuccessfulAccordingTo = predicate => source => source.pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_0__.getAllSucceededRemoteData)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.first)(predicate));

/***/ }),

/***/ 10988:
/*!*******************************************************************!*\
  !*** ./src/app/item-page/edit-item-page/edit-item-page-routes.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ROUTES: () => (/* binding */ ROUTES)
/* harmony export */ });
/* harmony import */ var _core_breadcrumbs_i18n_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/breadcrumbs/i18n-breadcrumb.resolver */ 72059);
/* harmony import */ var _dso_shared_dso_edit_metadata_themed_dso_edit_metadata_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dso-shared/dso-edit-metadata/themed-dso-edit-metadata.component */ 13707);
/* harmony import */ var _shared_resource_policies_create_resource_policy_create_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/resource-policies/create/resource-policy-create.component */ 55584);
/* harmony import */ var _shared_resource_policies_edit_resource_policy_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/resource-policies/edit/resource-policy-edit.component */ 10676);
/* harmony import */ var _shared_resource_policies_resolvers_resource_policy_resolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/resource-policies/resolvers/resource-policy.resolver */ 92117);
/* harmony import */ var _shared_resource_policies_resolvers_resource_policy_target_resolver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/resource-policies/resolvers/resource-policy-target.resolver */ 45539);
/* harmony import */ var _edit_item_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-item-page.component */ 29272);
/* harmony import */ var _edit_item_page_routing_paths__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit-item-page.routing-paths */ 82055);
/* harmony import */ var _item_access_control_item_access_control_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./item-access-control/item-access-control.component */ 77376);
/* harmony import */ var _item_authorizations_item_authorizations_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./item-authorizations/item-authorizations.component */ 1767);
/* harmony import */ var _item_bitstreams_item_bitstreams_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./item-bitstreams/item-bitstreams.component */ 84391);
/* harmony import */ var _item_collection_mapper_item_collection_mapper_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./item-collection-mapper/item-collection-mapper.component */ 96609);
/* harmony import */ var _item_curate_item_curate_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./item-curate/item-curate.component */ 76007);
/* harmony import */ var _item_delete_item_delete_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./item-delete/item-delete.component */ 14647);
/* harmony import */ var _item_move_item_move_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./item-move/item-move.component */ 97527);
/* harmony import */ var _item_page_access_control_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./item-page-access-control.guard */ 58820);
/* harmony import */ var _item_page_bitstreams_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./item-page-bitstreams.guard */ 69370);
/* harmony import */ var _item_page_collection_mapper_guard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./item-page-collection-mapper.guard */ 79184);
/* harmony import */ var _item_page_curate_guard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./item-page-curate.guard */ 66116);
/* harmony import */ var _item_page_delete_guard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./item-page-delete.guard */ 84557);
/* harmony import */ var _item_page_edit_authorizations_guard__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./item-page-edit-authorizations.guard */ 41579);
/* harmony import */ var _item_page_metadata_guard__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./item-page-metadata.guard */ 96035);
/* harmony import */ var _item_page_move_guard__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./item-page-move.guard */ 92171);
/* harmony import */ var _item_page_private_guard__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./item-page-private.guard */ 27933);
/* harmony import */ var _item_page_register_doi_guard__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./item-page-register-doi.guard */ 67086);
/* harmony import */ var _item_page_reinstate_guard__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./item-page-reinstate.guard */ 70161);
/* harmony import */ var _item_page_relationships_guard__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./item-page-relationships.guard */ 24793);
/* harmony import */ var _item_page_status_guard__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./item-page-status.guard */ 57024);
/* harmony import */ var _item_page_version_history_guard__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./item-page-version-history.guard */ 84843);
/* harmony import */ var _item_page_withdraw_guard__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./item-page-withdraw.guard */ 7128);
/* harmony import */ var _item_private_item_private_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./item-private/item-private.component */ 51139);
/* harmony import */ var _item_public_item_public_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./item-public/item-public.component */ 84631);
/* harmony import */ var _item_register_doi_item_register_doi_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./item-register-doi/item-register-doi.component */ 69267);
/* harmony import */ var _item_reinstate_item_reinstate_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./item-reinstate/item-reinstate.component */ 42060);
/* harmony import */ var _item_relationships_item_relationships_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./item-relationships/item-relationships.component */ 10735);
/* harmony import */ var _item_status_themed_item_status_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./item-status/themed-item-status.component */ 88083);
/* harmony import */ var _item_version_history_item_version_history_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./item-version-history/item-version-history.component */ 80407);
/* harmony import */ var _item_withdraw_item_withdraw_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./item-withdraw/item-withdraw.component */ 60039);






































/**
 * Routing module that handles the routing for the Edit Item page administrator functionality
 */
const ROUTES = [{
  path: '',
  resolve: {
    breadcrumb: _core_breadcrumbs_i18n_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_0__.i18nBreadcrumbResolver
  },
  data: {
    breadcrumbKey: 'item.edit'
  },
  children: [{
    path: '',
    component: _edit_item_page_component__WEBPACK_IMPORTED_MODULE_6__.EditItemPageComponent,
    children: [{
      path: '',
      redirectTo: 'status',
      pathMatch: 'full'
    }, {
      path: 'status',
      component: _item_status_themed_item_status_component__WEBPACK_IMPORTED_MODULE_35__.ThemedItemStatusComponent,
      data: {
        title: 'item.edit.tabs.status.title',
        showBreadcrumbs: true
      },
      canActivate: [_item_page_status_guard__WEBPACK_IMPORTED_MODULE_27__.itemPageStatusGuard]
    }, {
      path: 'bitstreams',
      component: _item_bitstreams_item_bitstreams_component__WEBPACK_IMPORTED_MODULE_10__.ItemBitstreamsComponent,
      data: {
        title: 'item.edit.tabs.bitstreams.title',
        showBreadcrumbs: true
      },
      canActivate: [_item_page_bitstreams_guard__WEBPACK_IMPORTED_MODULE_16__.itemPageBitstreamsGuard]
    }, {
      path: 'metadata',
      component: _dso_shared_dso_edit_metadata_themed_dso_edit_metadata_component__WEBPACK_IMPORTED_MODULE_1__.ThemedDsoEditMetadataComponent,
      data: {
        title: 'item.edit.tabs.metadata.title',
        showBreadcrumbs: true
      },
      canActivate: [_item_page_metadata_guard__WEBPACK_IMPORTED_MODULE_21__.itemPageMetadataGuard]
    }, {
      path: 'curate',
      component: _item_curate_item_curate_component__WEBPACK_IMPORTED_MODULE_12__.ItemCurateComponent,
      data: {
        title: 'item.edit.tabs.curate.title',
        showBreadcrumbs: true
      },
      canActivate: [_item_page_curate_guard__WEBPACK_IMPORTED_MODULE_18__.itemPageCurateGuard]
    }, {
      path: 'relationships',
      component: _item_relationships_item_relationships_component__WEBPACK_IMPORTED_MODULE_34__.ItemRelationshipsComponent,
      data: {
        title: 'item.edit.tabs.relationships.title',
        showBreadcrumbs: true
      },
      canActivate: [_item_page_relationships_guard__WEBPACK_IMPORTED_MODULE_26__.itemPageRelationshipsGuard]
    },
    /* TODO - uncomment & fix when view page exists
    {
      path: 'view',
      component: ItemBitstreamsComponent,
      data: { title: 'item.edit.tabs.view.title', showBreadcrumbs: true }
    }, */
    /* TODO - uncomment & fix when curate page exists
    {
      path: 'curate',
      component: ItemBitstreamsComponent,
      data: { title: 'item.edit.tabs.curate.title', showBreadcrumbs: true }
    }, */
    {
      path: 'versionhistory',
      component: _item_version_history_item_version_history_component__WEBPACK_IMPORTED_MODULE_36__.ItemVersionHistoryComponent,
      data: {
        title: 'item.edit.tabs.versionhistory.title',
        showBreadcrumbs: true
      },
      canActivate: [_item_page_version_history_guard__WEBPACK_IMPORTED_MODULE_28__.itemPageVersionHistoryGuard]
    }, {
      path: 'access-control',
      component: _item_access_control_item_access_control_component__WEBPACK_IMPORTED_MODULE_8__.ItemAccessControlComponent,
      data: {
        title: 'item.edit.tabs.access-control.title',
        showBreadcrumbs: true
      },
      canActivate: [_item_page_access_control_guard__WEBPACK_IMPORTED_MODULE_15__.itemPageAccessControlGuard]
    }, {
      path: 'mapper',
      component: _item_collection_mapper_item_collection_mapper_component__WEBPACK_IMPORTED_MODULE_11__.ItemCollectionMapperComponent,
      data: {
        title: 'item.edit.tabs.item-mapper.title',
        showBreadcrumbs: true
      },
      canActivate: [_item_page_collection_mapper_guard__WEBPACK_IMPORTED_MODULE_17__.itemPageCollectionMapperGuard]
    }]
  }, {
    path: 'mapper',
    component: _item_collection_mapper_item_collection_mapper_component__WEBPACK_IMPORTED_MODULE_11__.ItemCollectionMapperComponent
  }, {
    path: _edit_item_page_routing_paths__WEBPACK_IMPORTED_MODULE_7__.ITEM_EDIT_WITHDRAW_PATH,
    component: _item_withdraw_item_withdraw_component__WEBPACK_IMPORTED_MODULE_37__.ItemWithdrawComponent,
    canActivate: [_item_page_withdraw_guard__WEBPACK_IMPORTED_MODULE_29__.itemPageWithdrawGuard]
  }, {
    path: _edit_item_page_routing_paths__WEBPACK_IMPORTED_MODULE_7__.ITEM_EDIT_REINSTATE_PATH,
    component: _item_reinstate_item_reinstate_component__WEBPACK_IMPORTED_MODULE_33__.ItemReinstateComponent,
    canActivate: [_item_page_reinstate_guard__WEBPACK_IMPORTED_MODULE_25__.itemPageReinstateGuard]
  }, {
    path: _edit_item_page_routing_paths__WEBPACK_IMPORTED_MODULE_7__.ITEM_EDIT_PRIVATE_PATH,
    component: _item_private_item_private_component__WEBPACK_IMPORTED_MODULE_30__.ItemPrivateComponent,
    canActivate: [_item_page_private_guard__WEBPACK_IMPORTED_MODULE_23__.itemPagePrivateGuard]
  }, {
    path: _edit_item_page_routing_paths__WEBPACK_IMPORTED_MODULE_7__.ITEM_EDIT_PUBLIC_PATH,
    component: _item_public_item_public_component__WEBPACK_IMPORTED_MODULE_31__.ItemPublicComponent
  }, {
    path: _edit_item_page_routing_paths__WEBPACK_IMPORTED_MODULE_7__.ITEM_EDIT_DELETE_PATH,
    component: _item_delete_item_delete_component__WEBPACK_IMPORTED_MODULE_13__.ItemDeleteComponent,
    canActivate: [_item_page_delete_guard__WEBPACK_IMPORTED_MODULE_19__.itemPageDeleteGuard]
  }, {
    path: _edit_item_page_routing_paths__WEBPACK_IMPORTED_MODULE_7__.ITEM_EDIT_MOVE_PATH,
    component: _item_move_item_move_component__WEBPACK_IMPORTED_MODULE_14__.ItemMoveComponent,
    data: {
      title: 'item.edit.move.title'
    },
    canActivate: [_item_page_move_guard__WEBPACK_IMPORTED_MODULE_22__.itemPageMoveGuard]
  }, {
    path: _edit_item_page_routing_paths__WEBPACK_IMPORTED_MODULE_7__.ITEM_EDIT_REGISTER_DOI_PATH,
    component: _item_register_doi_item_register_doi_component__WEBPACK_IMPORTED_MODULE_32__.ItemRegisterDoiComponent,
    canActivate: [_item_page_register_doi_guard__WEBPACK_IMPORTED_MODULE_24__.itemPageRegisterDoiGuard],
    data: {
      title: 'item.edit.register-doi.title'
    }
  }, {
    path: _edit_item_page_routing_paths__WEBPACK_IMPORTED_MODULE_7__.ITEM_EDIT_AUTHORIZATIONS_PATH,
    children: [{
      path: 'create',
      resolve: {
        resourcePolicyTarget: _shared_resource_policies_resolvers_resource_policy_target_resolver__WEBPACK_IMPORTED_MODULE_5__.resourcePolicyTargetResolver
      },
      component: _shared_resource_policies_create_resource_policy_create_component__WEBPACK_IMPORTED_MODULE_2__.ResourcePolicyCreateComponent,
      data: {
        title: 'resource-policies.create.page.title'
      }
    }, {
      path: 'edit',
      resolve: {
        resourcePolicy: _shared_resource_policies_resolvers_resource_policy_resolver__WEBPACK_IMPORTED_MODULE_4__.resourcePolicyResolver
      },
      component: _shared_resource_policies_edit_resource_policy_edit_component__WEBPACK_IMPORTED_MODULE_3__.ResourcePolicyEditComponent,
      data: {
        title: 'resource-policies.edit.page.title'
      }
    }, {
      path: '',
      component: _item_authorizations_item_authorizations_component__WEBPACK_IMPORTED_MODULE_9__.ItemAuthorizationsComponent,
      data: {
        title: 'item.edit.authorizations.title'
      }
    }],
    canActivate: [_item_page_edit_authorizations_guard__WEBPACK_IMPORTED_MODULE_20__.itemPageEditAuthorizationsGuard]
  }]
}];

/***/ }),

/***/ 29272:
/*!**********************************************************************!*\
  !*** ./src/app/item-page/edit-item-page/edit-item-page.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditItemPageComponent: () => (/* binding */ EditItemPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 49966);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 17796);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 27639);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var _shared_animations_fade__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/animations/fade */ 50332);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/empty.util */ 82777);
/* harmony import */ var _item_page_routing_paths__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../item-page-routing-paths */ 90887);














const _c0 = a0 => ({
  "active": a0
});
const _c1 = a0 => [a0];
function EditItemPageComponent_ul_7_li_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const page_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](7, _c0, page_r1.page === ctx_r1.currentPage))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](9, _c1, "./" + page_r1.page));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-selected", page_r1.page === ctx_r1.currentPage)("data-test", page_r1.page);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 5, "item.edit.tabs." + page_r1.page + ".head"), " ");
  }
}
function EditItemPageComponent_ul_7_li_1_button_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const page_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "item.edit.tabs." + page_r1.page + ".head"), " ");
  }
}
function EditItemPageComponent_ul_7_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, EditItemPageComponent_ul_7_li_1_a_1_Template, 3, 11, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, EditItemPageComponent_ul_7_li_1_button_5_Template, 3, 3, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const page_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 3, page_r1.enabled));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 5, "item.edit.tabs.disabled.tooltip"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 7, page_r1.enabled) !== true);
  }
}
function EditItemPageComponent_ul_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ul", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, EditItemPageComponent_ul_7_li_1_Template, 7, 9, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.pages);
  }
}
/**
 * Page component for editing an item
 */
class EditItemPageComponent {
  constructor(route, router, injector) {
    this.route = route;
    this.router = router;
    this.injector = injector;
    this.router.events.subscribe(() => this.initPageParamsByRoute());
  }
  ngOnInit() {
    this.initPageParamsByRoute();
    this.pages = this.route.routeConfig.children.filter(child => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_1__.isNotEmpty)(child.path)).map(child => {
      let enabled = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(true);
      if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_1__.isNotEmpty)(child.canActivate)) {
        enabled = (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.combineLatest)(child.canActivate.map(guardFn => {
          return (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.runInInjectionContext)(this.injector, () => {
            return guardFn(this.route.snapshot, this.router.routerState.snapshot);
          });
        })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(canActivateOutcomes => canActivateOutcomes.every(e => e === true)));
      }
      return {
        page: child.path,
        enabled: enabled
      };
    }); // ignore reroutes
    this.itemRD$ = this.route.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(data => data.dso));
  }
  /**
   * Get the item page url
   * @param item The item for which the url is requested
   */
  getItemPage(item) {
    return (0,_item_page_routing_paths__WEBPACK_IMPORTED_MODULE_2__.getItemPageRoute)(item);
  }
  /**
   * Set page params depending on the route
   */
  initPageParamsByRoute() {
    this.currentPage = this.route.snapshot.firstChild.routeConfig.path;
  }
  static {
    this.ɵfac = function EditItemPageComponent_Factory(t) {
      return new (t || EditItemPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injector));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: EditItemPageComponent,
      selectors: [["ds-edit-item-page"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
      decls: 18,
      vars: 10,
      consts: [[1, "container"], [1, "row"], [1, "col-12"], [1, "border-bottom"], [1, "pt-2"], ["class", "nav nav-tabs justify-content-start", "role", "tablist", 4, "ngIf"], [1, "tab-pane", "active"], [1, "mb-4"], [1, "button-row", "bottom"], [1, "text-right"], ["role", "button", 1, "btn", "btn-outline-secondary", 3, "routerLink"], [1, "fas", "fa-arrow-left"], ["role", "tablist", 1, "nav", "nav-tabs", "justify-content-start"], ["class", "nav-item", "role", "presentation", 4, "ngFor", "ngForOf"], ["role", "presentation", 1, "nav-item"], ["class", "nav-link", "role", "tab", 3, "ngClass", "routerLink", 4, "ngIf"], [3, "ngbTooltip"], ["class", "nav-link disabled", 4, "ngIf"], ["role", "tab", 1, "nav-link", 3, "ngClass", "routerLink"], [1, "nav-link", "disabled"]],
      template: function EditItemPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, EditItemPageComponent_ul_7_Template, 2, 1, "ul", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6)(9, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 8)(12, "div", 9)(13, "a", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](14, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "i", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](17, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
        }
        if (rf & 2) {
          let tmp_2_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 4, "item.edit.head"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.pages.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.getItemPage((tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](14, 6, ctx.itemRD$)) == null ? null : tmp_2_0.payload));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](17, 8, "item.edit.return"), "");
        }
      },
      dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbTooltipModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbTooltip, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterOutlet],
      encapsulation: 2,
      data: {
        animation: [_shared_animations_fade__WEBPACK_IMPORTED_MODULE_0__.fadeIn, _shared_animations_fade__WEBPACK_IMPORTED_MODULE_0__.fadeInOut]
      },
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 77376:
/*!***********************************************************************************************!*\
  !*** ./src/app/item-page/edit-item-page/item-access-control/item-access-control.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ItemAccessControlComponent: () => (/* binding */ ItemAccessControlComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/shared/operators */ 55757);
/* harmony import */ var _shared_access_control_form_container_access_control_form_container_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/access-control-form-container/access-control-form-container.component */ 43664);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 14354);







function ItemAccessControlComponent_ds_access_control_form_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "ds-access-control-form-container", 1);
  }
  if (rf & 2) {
    const itemRD_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("itemRD", itemRD_r1)("showLimitToSpecificBitstreams", true);
  }
}
class ItemAccessControlComponent {
  constructor(route) {
    this.route = route;
  }
  ngOnInit() {
    this.itemRD$ = this.route.parent.parent.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(data => data.dso)).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_0__.getFirstSucceededRemoteData)());
  }
  static {
    this.ɵfac = function ItemAccessControlComponent_Factory(t) {
      return new (t || ItemAccessControlComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ItemAccessControlComponent,
      selectors: [["ds-item-access-control"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 3,
      consts: [["titleMessage", "item-access-control-title", 3, "itemRD", "showLimitToSpecificBitstreams", 4, "ngIf"], ["titleMessage", "item-access-control-title", 3, "itemRD", "showLimitToSpecificBitstreams"]],
      template: function ItemAccessControlComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ItemAccessControlComponent_ds_access_control_form_container_0_Template, 1, 2, "ds-access-control-form-container", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 1, ctx.itemRD$));
        }
      },
      dependencies: [_shared_access_control_form_container_access_control_form_container_component__WEBPACK_IMPORTED_MODULE_1__.AccessControlFormContainerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW0tYWNjZXNzLWNvbnRyb2wuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUEiLCJmaWxlIjoiaXRlbS1hY2Nlc3MtY29udHJvbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaXRlbS1wYWdlL2VkaXQtaXRlbS1wYWdlL2l0ZW0tYWNjZXNzLWNvbnRyb2wvaXRlbS1hY2Nlc3MtY29udHJvbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBLGdsQkFBZ2xCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi8iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 1767:
/*!***********************************************************************************************!*\
  !*** ./src/app/item-page/edit-item-page/item-authorizations/item-authorizations.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ItemAuthorizationsComponent: () => (/* binding */ ItemAuthorizationsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 49966);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isEqual */ 21016);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 83485);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 17796);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 46891);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 85687);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 74671);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 60494);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 78374);
/* harmony import */ var _core_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/breadcrumbs/dso-name.service */ 96526);
/* harmony import */ var _core_cache_builders_link_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/cache/builders/link.service */ 1321);
/* harmony import */ var _core_data_paginated_list_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/data/paginated-list.model */ 96820);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/shared/operators */ 55757);
/* harmony import */ var _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/alert/alert.component */ 16292);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/empty.util */ 82777);
/* harmony import */ var _shared_ng_for_track_by_id_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/ng-for-track-by-id.directive */ 46556);
/* harmony import */ var _shared_resource_policies_resource_policies_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/resource-policies/resource-policies.component */ 24380);
/* harmony import */ var _shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/utils/follow-link-config.model */ 67600);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 14354);






















function ItemAuthorizationsComponent_ng_container_5_ng_container_2_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "ds-resource-policies", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const bitstream_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("resourceType", "bitstream")("resourceUUID", bitstream_r4.id)("resourceName", bitstream_r4.name);
  }
}
function ItemAuthorizationsComponent_ng_container_5_ng_container_2_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 11)(1, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ItemAuthorizationsComponent_ng_container_5_ng_container_2_div_9_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r5);
      const bundle_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r2.onBitstreamsLoad(bundle_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 1, "collection.edit.item.authorizations.load-more-button"));
  }
}
function ItemAuthorizationsComponent_ng_container_5_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 7)(2, "div", 8)(3, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ItemAuthorizationsComponent_ng_container_5_ng_container_2_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
      const bundle_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r2.collapseArea(bundle_r2.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](7, ItemAuthorizationsComponent_ng_container_5_ng_container_2_ng_container_7_Template, 2, 3, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](9, ItemAuthorizationsComponent_ng_container_5_ng_container_2_div_9_Template, 4, 3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const bundle_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("aria-expanded", false)("aria-controls", bundle_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](5, 8, "collection.edit.item.authorizations.show-bitstreams-button"), " ", ctx_r2.nameService.getName(bundle_r2), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("id", bundle_r2.id)("ngbCollapse", ctx_r2.bundleBitstreamsMap.get(bundle_r2.id).isCollapsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](8, 10, ctx_r2.bundleBitstreamsMap.get(bundle_r2.id).bitstreams));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r2.bundleBitstreamsMap.get(bundle_r2.id).allBitstreamsLoaded);
  }
}
function ItemAuthorizationsComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "ds-resource-policies", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, ItemAuthorizationsComponent_ng_container_5_ng_container_2_Template, 10, 12, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    let tmp_5_0;
    const bundle_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("resourceType", "bundle")("resourceUUID", bundle_r2.id)("resourceName", bundle_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ((tmp_5_0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 4, (tmp_5_0 = ctx_r2.bundleBitstreamsMap.get(bundle_r2.id)) == null ? null : tmp_5_0.bitstreams)) == null ? null : tmp_5_0.length) > 0);
  }
}
function ItemAuthorizationsComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 11)(1, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ItemAuthorizationsComponent_div_7_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r2.onBundleLoad());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 1, "collection.edit.item.authorizations.load-bundle-button"));
  }
}
/**
 * Component that handles the item Authorizations
 */
class ItemAuthorizationsComponent {
  /**
   * Initialize instance variables
   *
   * @param {LinkService} linkService
   * @param {ActivatedRoute} route
   * @param nameService
   */
  constructor(linkService, route, nameService) {
    this.linkService = linkService;
    this.route = route;
    this.nameService = nameService;
    /**
     * A map that contains all bitstream of the item's bundles
     * @type {Observable<Map<string, Observable<PaginatedList<Bitstream>>>>}
     */
    this.bundleBitstreamsMap = new Map();
    /**
     * The list of all bundles for the item
     * @type {Observable<PaginatedList<Bundle>>}
     */
    this.bundles$ = new rxjs__WEBPACK_IMPORTED_MODULE_11__.BehaviorSubject([]);
    /**
     * Array to track all subscriptions and unsubscribe them onDestroy
     * @type {Array}
     */
    this.subs = [];
    /**
     * The size of the bundles to be loaded on demand
     * @type {number}
     */
    this.bundlesPerPage = 6;
    /**
     * The number of current page
     * @type {number}
     */
    this.bundlesPageSize = 1;
    /**
     * The flag to show or not the 'Load more' button
     * based on the condition if all the bundles are loaded or not
     * @type {boolean}
     */
    this.allBundlesLoaded = false;
    /**
     * Initial size of loaded bitstreams
     * The size of incrementation used in bitstream pagination
     */
    this.bitstreamSize = 4;
    /**
     * The size of the loaded bitstremas at a certain moment
     * @private
     */
    this.bitstreamPageSize = 4;
  }
  /**
   * Initialize the component, setting up the bundle and bitstream within the item
   */
  ngOnInit() {
    this.getBundlesPerItem();
  }
  /**
   * Return the item's UUID
   */
  getItemUUID() {
    return this.item$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(item => item.id), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.first)(UUID => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_6__.isNotEmpty)(UUID)));
  }
  /**
  * Return the item's name
  */
  getItemName() {
    return this.item$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(item => this.nameService.getName(item)));
  }
  /**
   * Return all item's bundles
   *
   * @return an observable that emits all item's bundles
   */
  getItemBundles() {
    return this.bundles$.asObservable();
  }
  /**
   * Get all bundles per item
   * and all the bitstreams per bundle
   * @param page number of current page
   */
  getBundlesPerItem(page = 1) {
    this.item$ = this.route.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(data => data.dso), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_4__.getFirstSucceededRemoteDataWithNotEmptyPayload)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(item => this.linkService.resolveLink(item, (0,_shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_9__.followLink)('bundles', {
      findListOptions: {
        currentPage: page,
        elementsPerPage: this.bundlesPerPage
      }
    }, (0,_shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_9__.followLink)('bitstreams')))));
    const bundles$ = this.item$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.filter)(item => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_6__.isNotEmpty)(item.bundles)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.mergeMap)(item => item.bundles), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_4__.getFirstSucceededRemoteDataWithNotEmptyPayload)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.catchError)(error => {
      console.error(error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.of)((0,_core_data_paginated_list_model__WEBPACK_IMPORTED_MODULE_3__.buildPaginatedList)(null, []));
    }));
    this.subs.push(bundles$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(list => list.page)).subscribe(bundles => {
      if (lodash_isEqual__WEBPACK_IMPORTED_MODULE_0___default()(bundles.length, 0) || bundles.length < this.bundlesPerPage) {
        this.allBundlesLoaded = true;
      }
      if (lodash_isEqual__WEBPACK_IMPORTED_MODULE_0___default()(page, 1)) {
        this.bundles$.next(bundles);
      } else {
        this.bundles$.next(this.bundles$.getValue().concat(bundles));
      }
    }), bundles$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.mergeMap)(list => list.page), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(bundle => ({
      id: bundle.id,
      bitstreams: this.getBundleBitstreams(bundle)
    }))).subscribe(entry => {
      const bitstreamMapValues = {
        isCollapsed: true,
        allBitstreamsLoaded: false,
        bitstreams: null
      };
      bitstreamMapValues.bitstreams = entry.bitstreams.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(b => {
        bitstreamMapValues.allBitstreamsLoaded = b?.page.length < this.bitstreamSize;
        return [...b.page.slice(0, this.bitstreamSize)];
      }));
      this.bundleBitstreamsMap.set(entry.id, bitstreamMapValues);
    }));
  }
  /**
   * Return all bundle's bitstreams
   *
   * @return an observable that emits all item's bundles
   */
  getBundleBitstreams(bundle) {
    return bundle.bitstreams.pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_4__.getFirstSucceededRemoteDataPayload)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.catchError)(error => {
      console.error(error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.of)((0,_core_data_paginated_list_model__WEBPACK_IMPORTED_MODULE_3__.buildPaginatedList)(null, []));
    }));
  }
  /**
   * Changes the collapsible state of the area that contains the bitstream list
   * @param bundleId Id of bundle responsible for the requested bitstreams
   */
  collapseArea(bundleId) {
    this.bundleBitstreamsMap.get(bundleId).isCollapsed = !this.bundleBitstreamsMap.get(bundleId).isCollapsed;
  }
  /**
   * Loads as much bundles as initial value of bundleSize to be displayed
   */
  onBundleLoad() {
    this.bundlesPageSize++;
    this.getBundlesPerItem(this.bundlesPageSize);
  }
  /**
   * Calculates the bitstreams that are going to be loaded on demand,
   * based on the number configured on this.bitstreamSize.
   * @param bundle parent of bitstreams that are requested to be shown
   * @returns Subscription
   */
  onBitstreamsLoad(bundle) {
    return this.getBundleBitstreams(bundle).subscribe(res => {
      const nextBitstreams = res?.page.slice(this.bitstreamPageSize, this.bitstreamPageSize + this.bitstreamSize);
      const bitstreamsToShow = this.bundleBitstreamsMap.get(bundle.id).bitstreams.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(existingBits => {
        return [...existingBits, ...nextBitstreams];
      }));
      this.bitstreamPageSize = this.bitstreamPageSize + this.bitstreamSize;
      const bitstreamMapValues = {
        bitstreams: bitstreamsToShow,
        isCollapsed: this.bundleBitstreamsMap.get(bundle.id).isCollapsed,
        allBitstreamsLoaded: res?.page.length <= this.bitstreamPageSize
      };
      this.bundleBitstreamsMap.set(bundle.id, bitstreamMapValues);
    });
  }
  /**
   * Unsubscribe from all subscriptions
   */
  ngOnDestroy() {
    this.subs.filter(subscription => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_6__.hasValue)(subscription)).forEach(subscription => subscription.unsubscribe());
  }
  static {
    this.ɵfac = function ItemAuthorizationsComponent_Factory(t) {
      return new (t || ItemAuthorizationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_cache_builders_link_service__WEBPACK_IMPORTED_MODULE_2__.LinkService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_19__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_1__.DSONameService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
      type: ItemAuthorizationsComponent,
      selectors: [["ds-item-authorizations"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵStandaloneFeature"]],
      decls: 8,
      vars: 13,
      consts: [[1, "container"], [3, "type", "content"], [3, "resourceType", "resourceName", "resourceUUID"], [4, "ngFor", "ngForTrackById", "ngForOf"], ["class", "row justify-content-center", 4, "ngIf"], [3, "resourceType", "resourceUUID", "resourceName"], [4, "ngIf"], [1, "card", "auth-bitstream-container"], [1, "card-header"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click"], [1, "card-body", 3, "id", "ngbCollapse"], [1, "row", "justify-content-center"], ["type", "button", 1, "btn", "btn-link", 3, "click"]],
      template: function ItemAuthorizationsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "ds-alert", 1)(2, "ds-resource-policies", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, ItemAuthorizationsComponent_ng_container_5_Template, 4, 6, "ng-container", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](6, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](7, ItemAuthorizationsComponent_div_7_Template, 4, 3, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("type", "alert-info")("content", "item.edit.authorizations.heading");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("resourceType", "item")("resourceName", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 7, ctx.getItemName()))("resourceUUID", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 9, ctx.getItemUUID()));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](6, 11, ctx.bundles$));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.allBundlesLoaded);
        }
      },
      dependencies: [_shared_resource_policies_resource_policies_component__WEBPACK_IMPORTED_MODULE_8__.ResourcePoliciesComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__.NgbCollapseModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__.NgbCollapse, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgForOf, _shared_ng_for_track_by_id_directive__WEBPACK_IMPORTED_MODULE_7__.NgForTrackByIdDirective, _angular_common__WEBPACK_IMPORTED_MODULE_22__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgIf, _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_5__.AlertComponent],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n.auth-bitstream-container[_ngcontent-%COMP%] {\n  margin-top: -1em;\n  margin-bottom: 1.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW0tYXV0aG9yaXphdGlvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQTtFQUNFLGdCQUFBO0VBQ0Esb0JBQUE7QUFDRiIsImZpbGUiOiJpdGVtLWF1dGhvcml6YXRpb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi9cbi5hdXRoLWJpdHN0cmVhbS1jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAtMWVtO1xuICBtYXJnaW4tYm90dG9tOiAxLjVlbTtcbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaXRlbS1wYWdlL2VkaXQtaXRlbS1wYWdlL2l0ZW0tYXV0aG9yaXphdGlvbnMvaXRlbS1hdXRob3JpemF0aW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBO0VBQ0UsZ0JBQUE7RUFDQSxvQkFBQTtBQUNGO0FBQ0Esb3VCQUFvdUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqL1xuLmF1dGgtYml0c3RyZWFtLWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IC0xZW07XG4gIG1hcmdpbi1ib3R0b206IDEuNWVtO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 84391:
/*!***************************************************************************************!*\
  !*** ./src/app/item-page/edit-item-page/item-bitstreams/item-bitstreams.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ItemBitstreamsComponent: () => (/* binding */ ItemBitstreamsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs */ 83485);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! rxjs */ 27639);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs/operators */ 21252);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! rxjs/operators */ 78374);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! rxjs/operators */ 85687);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! rxjs/operators */ 84975);
/* harmony import */ var src_app_shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/alert/alert.component */ 16292);
/* harmony import */ var src_app_shared_alert_alert_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/alert/alert-type */ 47978);
/* harmony import */ var _core_cache_object_cache_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/cache/object-cache.service */ 41684);
/* harmony import */ var _core_data_bitstream_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/data/bitstream-data.service */ 42578);
/* harmony import */ var _core_data_bundle_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/data/bundle-data.service */ 81443);
/* harmony import */ var _core_data_item_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/data/item-data.service */ 29326);
/* harmony import */ var _core_data_object_updates_object_updates_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/data/object-updates/object-updates.service */ 59033);
/* harmony import */ var _core_data_request_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/data/request.service */ 32473);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/shared/operators */ 55757);
/* harmony import */ var _shared_btn_disabled_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/btn-disabled.directive */ 60456);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/empty.util */ 82777);
/* harmony import */ var _shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/loading/themed-loading.component */ 82394);
/* harmony import */ var _shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/notifications/notifications.service */ 69472);
/* harmony import */ var _shared_pagination_pagination_component_options_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/pagination/pagination-component-options.model */ 23401);
/* harmony import */ var _shared_search_models_paginated_search_options_model__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/search/models/paginated-search-options.model */ 33550);
/* harmony import */ var _shared_utils_object_values_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shared/utils/object-values-pipe */ 4313);
/* harmony import */ var _shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../shared/utils/var.directive */ 18226);
/* harmony import */ var _abstract_item_update_abstract_item_update_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../abstract-item-update/abstract-item-update.component */ 30945);
/* harmony import */ var _item_bitstreams_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./item-bitstreams.service */ 8607);
/* harmony import */ var _item_edit_bitstream_bundle_item_edit_bitstream_bundle_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./item-edit-bitstream-bundle/item-edit-bitstream-bundle.component */ 3022);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 90310);






































const _c0 = a0 => [a0, "bitstreams", "new"];
const _c1 = a0 => ({
  "disabled-overlay": a0
});
function ItemBitstreamsComponent_div_0_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function ItemBitstreamsComponent_div_0_button_10_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r2.reinstate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](2, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](3, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](1, 2, "item.edit.bitstreams.reinstate-button"));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"]("\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](5, 4, "item.edit.bitstreams.reinstate-button"), "");
  }
}
function ItemBitstreamsComponent_div_0_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function ItemBitstreamsComponent_div_0_button_19_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r2.discard());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](3, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](4, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("dsBtnDisabled", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](1, 3, ctx_r2.hasChanges$) !== true || ctx_r2.submitting);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](2, 5, "item.edit.bitstreams.discard-button"));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"]("\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](6, 7, "item.edit.bitstreams.discard-button"), "");
  }
}
function ItemBitstreamsComponent_div_0_div_21_ds_item_edit_bitstream_bundle_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](0, "ds-item-edit-bitstream-bundle", 25);
  }
  if (rf & 2) {
    const bundle_r5 = ctx.$implicit;
    const isFirst_r6 = ctx.first;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("bundle", bundle_r5)("item", ctx_r2.item)("columnSizes", ctx_r2.columnSizes)("isFirstTable", isFirst_r6);
  }
}
function ItemBitstreamsComponent_div_0_div_21_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 26)(1, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function ItemBitstreamsComponent_div_0_div_21_div_3_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r2.loadBundles());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](3, 1, "item.edit.bitstreams.load-more.link"), "");
  }
}
function ItemBitstreamsComponent_div_0_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](2, ItemBitstreamsComponent_div_0_div_21_ds_item_edit_bitstream_bundle_2_Template, 1, 4, "ds-item-edit-bitstream-bundle", 23)(3, ItemBitstreamsComponent_div_0_div_21_div_3_Template, 4, 3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const bundles_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().ngVar;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](7, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](1, 3, ctx_r2.isProcessingMoveRequest)));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngForOf", bundles_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](4, 5, ctx_r2.showLoadMoreLink$));
  }
}
function ItemBitstreamsComponent_div_0_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](2, 1, "item.edit.bitstreams.empty"), " ");
  }
}
function ItemBitstreamsComponent_div_0_ds_loading_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](0, "ds-loading", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpropertyInterpolate"]("message", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](1, 1, "loading.bitstreams"));
  }
}
function ItemBitstreamsComponent_div_0_button_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function ItemBitstreamsComponent_div_0_button_26_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r9);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r2.reinstate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](2, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](3, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](1, 2, "item.edit.bitstreams.reinstate-button"));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"]("\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](5, 4, "item.edit.bitstreams.reinstate-button"), "");
  }
}
function ItemBitstreamsComponent_div_0_button_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function ItemBitstreamsComponent_div_0_button_35_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r10);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r2.discard());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](3, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](4, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("dsBtnDisabled", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](1, 3, ctx_r2.hasChanges$) !== true || ctx_r2.submitting);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](2, 5, "item.edit.bitstreams.discard-button"));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"]("\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](6, 7, "item.edit.bitstreams.discard-button"), "");
  }
}
function ItemBitstreamsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 2)(1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](2, "ds-alert", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](3, "div", 5)(4, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](6, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](7, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](10, ItemBitstreamsComponent_div_0_button_10_Template, 6, 6, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](11, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](12, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](13, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function ItemBitstreamsComponent_div_0_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r2.submit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](15, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](16, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](19, ItemBitstreamsComponent_div_0_button_19_Template, 7, 9, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](20, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](21, ItemBitstreamsComponent_div_0_div_21_Template, 5, 9, "div", 13)(22, ItemBitstreamsComponent_div_0_div_22_Template, 3, 3, "div", 14)(23, ItemBitstreamsComponent_div_0_ds_loading_23_Template, 2, 3, "ds-loading", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](24, "div", 16)(25, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](26, ItemBitstreamsComponent_div_0_button_26_Template, 6, 6, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](27, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](28, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](29, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](30, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function ItemBitstreamsComponent_div_0_Template_button_click_28_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r2.submit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](31, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](32, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](34, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](35, ItemBitstreamsComponent_div_0_button_35_Template, 7, 9, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](36, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const bundles_r8 = ctx.ngVar;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("content", "item.edit.bitstreams.info-alert")("type", ctx_r2.AlertType.Info);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](42, _c0, ctx_r2.itemPageRoute));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](5, 18, "item.edit.bitstreams.upload-button"));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"]("\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](9, 20, "item.edit.bitstreams.upload-button"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](11, 22, ctx_r2.isReinstatable$));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("dsBtnDisabled", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](13, 24, ctx_r2.hasChanges$) !== true || ctx_r2.submitting);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](14, 26, "item.edit.bitstreams.save-button"));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"]("\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](18, 28, "item.edit.bitstreams.save-button"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](20, 30, ctx_r2.isReinstatable$) !== true);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r2.item && (bundles_r8 == null ? null : bundles_r8.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", (bundles_r8 == null ? null : bundles_r8.length) === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !bundles_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](27, 32, ctx_r2.isReinstatable$));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("dsBtnDisabled", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](29, 34, ctx_r2.hasChanges$) !== true || ctx_r2.submitting);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](30, 36, "item.edit.bitstreams.save-button"));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"]("\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](34, 38, "item.edit.bitstreams.save-button"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](36, 40, ctx_r2.isReinstatable$) !== true);
  }
}
function ItemBitstreamsComponent_ds_loading_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](0, "ds-loading", 30);
  }
}
/**
 * Component for displaying an item's bitstreams edit page
 */
class ItemBitstreamsComponent extends _abstract_item_update_abstract_item_update_component__WEBPACK_IMPORTED_MODULE_17__.AbstractItemUpdateComponent {
  /**
   * The list of bundles for the current item as an observable
   */
  get bundles$() {
    return this.bundlesSubject.asObservable();
  }
  constructor(itemService, objectUpdatesService, router, notificationsService, translateService, route, bitstreamService, objectCache, requestService, cdRef, bundleService, zone, itemBitstreamsService) {
    super(itemService, objectUpdatesService, router, notificationsService, translateService, route);
    this.itemService = itemService;
    this.objectUpdatesService = objectUpdatesService;
    this.router = router;
    this.notificationsService = notificationsService;
    this.translateService = translateService;
    this.route = route;
    this.bitstreamService = bitstreamService;
    this.objectCache = objectCache;
    this.requestService = requestService;
    this.cdRef = cdRef;
    this.bundleService = bundleService;
    this.zone = zone;
    this.itemBitstreamsService = itemBitstreamsService;
    // Declared for use in template
    this.AlertType = src_app_shared_alert_alert_type__WEBPACK_IMPORTED_MODULE_1__.AlertType;
    /**
     * All bundles for the current item
     */
    this.bundlesSubject = new rxjs__WEBPACK_IMPORTED_MODULE_21__.BehaviorSubject([]);
    /**
     * The page options to use for fetching the bundles
     */
    this.bundlesOptions = Object.assign(new _shared_pagination_pagination_component_options_model__WEBPACK_IMPORTED_MODULE_13__.PaginationComponentOptions(), {
      id: 'bundles-pagination-options',
      currentPage: 1,
      pageSize: 10
    });
    /**
     * Are we currently submitting the changes?
     * Used to disable any action buttons until the submit finishes
     */
    this.submitting = false;
    /**
     * The flag indicating to show the load more link
     */
    this.showLoadMoreLink$ = new rxjs__WEBPACK_IMPORTED_MODULE_21__.BehaviorSubject(true);
    this.columnSizes = this.itemBitstreamsService.getColumnSizes();
  }
  /**
   * Actions to perform after the item has been initialized
   */
  postItemInit() {
    this.loadBundles(1);
  }
  /**
   * Handles keyboard events that should move the currently selected bitstream up
   */
  moveUp(event) {
    if (this.itemBitstreamsService.hasSelectedBitstream()) {
      event.preventDefault();
      this.itemBitstreamsService.moveSelectedBitstreamUp();
    }
  }
  /**
   * Handles keyboard events that should move the currently selected bitstream down
   */
  moveDown(event) {
    if (this.itemBitstreamsService.hasSelectedBitstream()) {
      event.preventDefault();
      this.itemBitstreamsService.moveSelectedBitstreamDown();
    }
  }
  /**
   * Handles keyboard events that should cancel the currently selected bitstream.
   * A cancel means that the selected bitstream is returned to its original position and is no longer selected.
   * @param event
   */
  cancelSelection(event) {
    if (this.itemBitstreamsService.hasSelectedBitstream()) {
      event.preventDefault();
      this.itemBitstreamsService.cancelSelection();
    }
  }
  /**
   * Handles keyboard events that should clear the currently selected bitstream.
   * A clear means that the selected bitstream remains in its current position but is no longer selected.
   */
  clearSelection(event) {
    // Only when no specific element is in focus do we want to clear the currently selected bitstream
    // Otherwise we might clear the selection when a different action was intended, e.g. clicking a button or selecting
    // a different bitstream.
    if (this.itemBitstreamsService.hasSelectedBitstream() && event.target instanceof Element && event.target.tagName === 'BODY') {
      event.preventDefault();
      this.itemBitstreamsService.clearSelection();
    }
  }
  /**
   * Initialize the notification messages prefix
   */
  initializeNotificationsPrefix() {
    this.notificationsPrefix = 'item.edit.bitstreams.notifications.';
  }
  /**
   * Load bundles for the current item
   * @param currentPage The current page to load
   */
  loadBundles(currentPage) {
    this.bundlesOptions = Object.assign(new _shared_pagination_pagination_component_options_model__WEBPACK_IMPORTED_MODULE_13__.PaginationComponentOptions(), this.bundlesOptions, {
      currentPage: currentPage || this.bundlesOptions.currentPage + 1
    });
    this.itemService.getBundles(this.item.id, new _shared_search_models_paginated_search_options_model__WEBPACK_IMPORTED_MODULE_14__.PaginatedSearchOptions({
      pagination: this.bundlesOptions
    })).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_8__.getFirstSucceededRemoteData)(), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_8__.getRemoteDataPayload)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.tap)(bundlesPL => this.showLoadMoreLink$.next(bundlesPL.pageInfo.currentPage < bundlesPL.pageInfo.totalPages)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.map)(bundlePage => bundlePage.page)).subscribe(bundles => {
      this.bundlesSubject.next([...this.bundlesSubject.getValue(), ...bundles]);
    });
  }
  /**
   * Submit the current changes
   * Bitstreams marked as deleted send out a delete request to the rest API
   * Display notifications and reset the current item/updates
   */
  submit() {
    this.submitting = true;
    const removedResponses$ = this.itemBitstreamsService.removeMarkedBitstreams(this.bundles$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_24__.take)(1)));
    // Perform the setup actions from above in order and display notifications
    removedResponses$.subscribe(responses => {
      this.itemBitstreamsService.displayNotifications('item.edit.bitstreams.notifications.remove', [responses]);
      this.submitting = false;
    });
  }
  /**
   * A bitstream was dropped in a new location. Send out a Move Patch request to the REST API, display notifications,
   * refresh the bundle's cache (so the lists can properly reload) and call the event's callback function (which will
   * navigate the user to the correct page)
   * @param bundle  The bundle to send patch requests to
   * @param event   The event containing the index the bitstream came from and was dropped to
   */
  dropBitstream(bundle, event) {
    this.zone.runOutsideAngular(() => {
      if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_10__.hasValue)(event) && (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_10__.hasValue)(event.fromIndex) && (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_10__.hasValue)(event.toIndex) && (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_10__.hasValue)(event.finish)) {
        const moveOperation = {
          op: 'move',
          from: `/_links/bitstreams/${event.fromIndex}/href`,
          path: `/_links/bitstreams/${event.toIndex}/href`
        };
        this.bundleService.patch(bundle, [moveOperation]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_24__.take)(1)).subscribe(response => {
          this.zone.run(() => {
            this.displayNotifications('item.edit.bitstreams.notifications.move', [response]);
            // Remove all cached requests from this bundle and call the event's callback when the requests are cleared
            this.requestService.removeByHrefSubstring(bundle.self).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_25__.filter)(isCached => isCached), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_24__.take)(1)).subscribe(() => event.finish());
          });
        });
      }
    });
  }
  /**
   * Display notifications
   * - Error notification for each failed response with their message
   * - Success notification in case there's at least one successful response
   * @param key       The i18n key for the notification messages
   * @param responses The returned responses to display notifications for
   */
  displayNotifications(key, responses) {
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_10__.isNotEmpty)(responses)) {
      const failedResponses = responses.filter(response => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_10__.hasValue)(response) && response.hasFailed);
      const successfulResponses = responses.filter(response => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_10__.hasValue)(response) && response.hasSucceeded);
      failedResponses.forEach(response => {
        this.notificationsService.error(this.translateService.instant(`${key}.failed.title`), response.errorMessage);
      });
      if (successfulResponses.length > 0) {
        this.notificationsService.success(this.translateService.instant(`${key}.saved.title`), this.translateService.instant(`${key}.saved.content`));
      }
    }
  }
  /**
   * Request the object updates service to discard all current changes to this item
   * Shows a notification to remind the user that they can undo this
   */
  discard() {
    const undoNotification = this.notificationsService.info(this.getNotificationTitle('discarded'), this.getNotificationContent('discarded'), {
      timeOut: this.discardTimeOut
    });
    this.objectUpdatesService.discardAllFieldUpdates(this.url, undoNotification);
  }
  /**
   * Request the object updates service to undo discarding all changes to this item
   */
  reinstate() {
    this.bundles$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_24__.take)(1)).subscribe(bundles => {
      bundles.forEach(bundle => {
        this.objectUpdatesService.reinstateFieldUpdates(bundle.self);
      });
    });
  }
  /**
   * Checks whether or not the object is currently reinstatable
   */
  isReinstatable() {
    return this.bundles$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_26__.switchMap)(bundles => (0,rxjs__WEBPACK_IMPORTED_MODULE_27__.combineLatest)(bundles.map(bundle => this.objectUpdatesService.isReinstatable(bundle.self)))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.map)(reinstatable => reinstatable.includes(true)));
  }
  /**
   * Checks whether or not there are currently updates for this object
   */
  hasChanges() {
    return this.bundles$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_26__.switchMap)(bundles => (0,rxjs__WEBPACK_IMPORTED_MODULE_27__.combineLatest)(bundles.map(bundle => this.objectUpdatesService.hasUpdates(bundle.self)))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.map)(hasChanges => hasChanges.includes(true)));
  }
  /**
   * Unsubscribe from open subscriptions whenever the component gets destroyed
   */
  ngOnDestroy() {
    if (this.itemUpdateSubscription) {
      this.itemUpdateSubscription.unsubscribe();
    }
  }
  static {
    this.ɵfac = function ItemBitstreamsComponent_Factory(t) {
      return new (t || ItemBitstreamsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_core_data_item_data_service__WEBPACK_IMPORTED_MODULE_5__.ItemDataService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_core_data_object_updates_object_updates_service__WEBPACK_IMPORTED_MODULE_6__.ObjectUpdatesService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_28__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_12__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_28__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_core_data_bitstream_data_service__WEBPACK_IMPORTED_MODULE_3__.BitstreamDataService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_core_cache_object_cache_service__WEBPACK_IMPORTED_MODULE_2__.ObjectCacheService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_core_data_request_service__WEBPACK_IMPORTED_MODULE_7__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_20__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_core_data_bundle_data_service__WEBPACK_IMPORTED_MODULE_4__.BundleDataService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_20__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_item_bitstreams_service__WEBPACK_IMPORTED_MODULE_18__.ItemBitstreamsService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineComponent"]({
      type: ItemBitstreamsComponent,
      selectors: [["ds-item-bitstreams"]],
      hostBindings: function ItemBitstreamsComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("keydown.arrowUp", function ItemBitstreamsComponent_keydown_arrowUp_HostBindingHandler($event) {
            return ctx.moveUp($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresolveDocument"])("keydown.arrowDown", function ItemBitstreamsComponent_keydown_arrowDown_HostBindingHandler($event) {
            return ctx.moveDown($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresolveDocument"])("keyup.escape", function ItemBitstreamsComponent_keyup_escape_HostBindingHandler($event) {
            return ctx.cancelSelection($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresolveDocument"])("keydown.enter", function ItemBitstreamsComponent_keydown_enter_HostBindingHandler($event) {
            return ctx.clearSelection($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresolveDocument"])("keydown.space", function ItemBitstreamsComponent_keydown_space_HostBindingHandler($event) {
            return ctx.clearSelection($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresolveDocument"]);
        }
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵProvidersFeature"]([_shared_utils_object_values_pipe__WEBPACK_IMPORTED_MODULE_15__.ObjectValuesPipe]), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵStandaloneFeature"]],
      decls: 4,
      vars: 6,
      consts: [["class", "item-bitstreams", 4, "ngVar"], ["class", "loading-overlay", 4, "ngIf"], [1, "item-bitstreams"], ["id", "reorder-description", 1, "mt-2"], [3, "content", "type"], [1, "button-row", "top", "d-flex", "mt-2", "space-children-mr"], [1, "mr-auto", "btn", "btn-success", 3, "routerLink"], [1, "fas", "fa-upload"], [1, "d-none", "d-sm-inline"], ["class", "btn btn-warning", 3, "click", 4, "ngIf"], [1, "btn", "btn-primary", 3, "click", "dsBtnDisabled"], [1, "fas", "fa-save"], ["class", "btn btn-danger", 3, "dsBtnDisabled", "click", 4, "ngIf"], ["class", "mt-4 table-border scrollable-table", 3, "ngClass", 4, "ngIf"], ["class", "alert alert-info w-100 d-inline-block mt-4", "role", "alert", 4, "ngIf"], [3, "message", 4, "ngIf"], [1, "button-row", "bottom"], [1, "mt-4", "float-right", "space-children-mr", "ml-gap"], [1, "btn", "btn-warning", 3, "click"], [1, "fas", "fa-undo-alt"], [1, "btn", "btn-danger", 3, "click", "dsBtnDisabled"], [1, "fas", "fa-times"], [1, "mt-4", "table-border", "scrollable-table", 3, "ngClass"], ["aria-describedby", "reorder-description", 3, "bundle", "item", "columnSizes", "isFirstTable", 4, "ngFor", "ngForOf"], ["class", "d-flex justify-content-center", 4, "ngIf"], ["aria-describedby", "reorder-description", 3, "bundle", "item", "columnSizes", "isFirstTable"], [1, "d-flex", "justify-content-center"], [1, "btn", "btn-link", "my-3", 3, "click"], ["role", "alert", 1, "alert", "alert-info", "w-100", "d-inline-block", "mt-4"], [3, "message"], [1, "loading-overlay"]],
      template: function ItemBitstreamsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](0, ItemBitstreamsComponent_div_0_Template, 37, 44, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](1, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](2, ItemBitstreamsComponent_ds_loading_2_Template, 1, 0, "ds-loading", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](3, "async");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngVar", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](1, 2, ctx.bundles$));
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](3, 4, ctx.isProcessingMoveRequest));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_30__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_30__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_30__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_30__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_30__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__.TranslatePipe, _item_edit_bitstream_bundle_item_edit_bitstream_bundle_component__WEBPACK_IMPORTED_MODULE_19__.ItemEditBitstreamBundleComponent, _angular_router__WEBPACK_IMPORTED_MODULE_28__.RouterLink, _shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_16__.VarDirective, _shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_11__.ThemedLoadingComponent, src_app_shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_0__.AlertComponent, _shared_btn_disabled_directive__WEBPACK_IMPORTED_MODULE_9__.BtnDisabledDirective],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n.drag-handle[_ngcontent-%COMP%]:hover {\n  cursor: move;\n}\n\n.bitstream-row-drag-handle[_ngcontent-%COMP%]:hover {\n  cursor: move;\n}\n\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  margin-left: 0;\n  box-sizing: border-box;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.cdk-drop-list-dragging[_ngcontent-%COMP%]   .bitstream-row-drag-handle[_ngcontent-%COMP%], .cdk-drop-list-dragging[_ngcontent-%COMP%]   .drag-handle[_ngcontent-%COMP%] {\n  cursor: grabbing;\n}\n\n[_nghost-%COMP%]     .larger-tooltip .tooltip-inner {\n  max-width: 500px;\n}\n\n.table-border[_ngcontent-%COMP%] {\n  border: 1px solid #dee2e6;\n}\n\n[_nghost-%COMP%]     .pagination {\n  padding-top: 0.5rem;\n}\n\n.scrollable-table[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n\n.disabled-overlay[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n\n.loading-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW0tYml0c3RyZWFtcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBO0VBQ0UsWUFBQTtBQUNGOztBQUNBO0VBQ0UsWUFBQTtBQUVGOztBQUFBO0VBQ0UsY0FBQTtFQUNBLHNCQUFBO0VBQ0EscUhBQUE7QUFHRjs7QUFEQTtFQUNFLFVBQUE7QUFJRjs7QUFGQTtFQUNFLHNEQUFBO0FBS0Y7O0FBSEE7RUFDRSxnQkFBQTtBQU1GOztBQUpBO0VBQ0UsZ0JBQUE7QUFPRjs7QUFMQTtFQUNFLHlCQUFBO0FBUUY7O0FBTkE7RUFDRSxtQkFBQTtBQVNGOztBQVBBO0VBQ0UsZ0JBQUE7QUFVRjs7QUFSQTtFQUNFLFlBQUE7QUFXRjs7QUFUQTtFQUNFLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQVlGIiwiZmlsZSI6Iml0ZW0tYml0c3RyZWFtcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovXG4uZHJhZy1oYW5kbGU6aG92ZXIge1xuICBjdXJzb3I6IG1vdmU7XG59XG4uYml0c3RyZWFtLXJvdy1kcmFnLWhhbmRsZTpob3ZlciB7XG4gIGN1cnNvcjogbW92ZTtcbn1cbi5jZGstZHJhZy1wcmV2aWV3IHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cbi5jZGstZHJhZy1wbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDA7XG59XG4uY2RrLWRyYWctYW5pbWF0aW5nIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xufVxuLmNkay1kcm9wLWxpc3QtZHJhZ2dpbmcgLmJpdHN0cmVhbS1yb3ctZHJhZy1oYW5kbGUsIC5jZGstZHJvcC1saXN0LWRyYWdnaW5nIC5kcmFnLWhhbmRsZSB7XG4gIGN1cnNvcjogZ3JhYmJpbmc7XG59XG46aG9zdCA6Om5nLWRlZXAgLmxhcmdlci10b29sdGlwIC50b29sdGlwLWlubmVyIHtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbn1cbi50YWJsZS1ib3JkZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5wYWdpbmF0aW9uIHtcbiAgcGFkZGluZy10b3A6IDAuNXJlbTtcbn1cbi5zY3JvbGxhYmxlLXRhYmxlIHtcbiAgb3ZlcmZsb3cteDogYXV0bztcbn1cbi5kaXNhYmxlZC1vdmVybGF5IHtcbiAgb3BhY2l0eTogMC42O1xufVxuLmxvYWRpbmctb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaXRlbS1wYWdlL2VkaXQtaXRlbS1wYWdlL2l0ZW0tYml0c3RyZWFtcy9pdGVtLWJpdHN0cmVhbXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQTtFQUNFLFlBQUE7QUFDRjs7QUFDQTtFQUNFLFlBQUE7QUFFRjs7QUFBQTtFQUNFLGNBQUE7RUFDQSxzQkFBQTtFQUNBLHFIQUFBO0FBR0Y7O0FBREE7RUFDRSxVQUFBO0FBSUY7O0FBRkE7RUFDRSxzREFBQTtBQUtGOztBQUhBO0VBQ0UsZ0JBQUE7QUFNRjs7QUFKQTtFQUNFLGdCQUFBO0FBT0Y7O0FBTEE7RUFDRSx5QkFBQTtBQVFGOztBQU5BO0VBQ0UsbUJBQUE7QUFTRjs7QUFQQTtFQUNFLGdCQUFBO0FBVUY7O0FBUkE7RUFDRSxZQUFBO0FBV0Y7O0FBVEE7RUFDRSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUFZRjtBQUNBLGdtRUFBZ21FIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi9cbi5kcmFnLWhhbmRsZTpob3ZlciB7XG4gIGN1cnNvcjogbW92ZTtcbn1cbi5iaXRzdHJlYW0tcm93LWRyYWctaGFuZGxlOmhvdmVyIHtcbiAgY3Vyc29yOiBtb3ZlO1xufVxuLmNkay1kcmFnLXByZXZpZXcge1xuICBtYXJnaW4tbGVmdDogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuLmNkay1kcmFnLXBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMDtcbn1cbi5jZGstZHJhZy1hbmltYXRpbmcge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG59XG4uY2RrLWRyb3AtbGlzdC1kcmFnZ2luZyAuYml0c3RyZWFtLXJvdy1kcmFnLWhhbmRsZSwgLmNkay1kcm9wLWxpc3QtZHJhZ2dpbmcgLmRyYWctaGFuZGxlIHtcbiAgY3Vyc29yOiBncmFiYmluZztcbn1cbjpob3N0IDo6bmctZGVlcCAubGFyZ2VyLXRvb2x0aXAgLnRvb2x0aXAtaW5uZXIge1xuICBtYXgtd2lkdGg6IDUwMHB4O1xufVxuLnRhYmxlLWJvcmRlciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XG59XG46aG9zdCA6Om5nLWRlZXAgLnBhZ2luYXRpb24ge1xuICBwYWRkaW5nLXRvcDogMC41cmVtO1xufVxuLnNjcm9sbGFibGUtdGFibGUge1xuICBvdmVyZmxvdy14OiBhdXRvO1xufVxuLmRpc2FibGVkLW92ZXJsYXkge1xuICBvcGFjaXR5OiAwLjY7XG59XG4ubG9hZGluZy1vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 8607:
/*!*************************************************************************************!*\
  !*** ./src/app/item-page/edit-item-page/item-bitstreams/item-bitstreams.service.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ItemBitstreamsService: () => (/* binding */ ItemBitstreamsService),
/* harmony export */   MOVE_KEY: () => (/* binding */ MOVE_KEY)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 83485);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 2782);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 21252);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 84975);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 78374);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var _app_routing_paths__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../app-routing-paths */ 69799);
/* harmony import */ var _core_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/breadcrumbs/dso-name.service */ 96526);
/* harmony import */ var _core_data_bitstream_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/data/bitstream-data.service */ 42578);
/* harmony import */ var _core_data_bundle_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/data/bundle-data.service */ 81443);
/* harmony import */ var _core_data_object_updates_field_change_type_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/data/object-updates/field-change-type.model */ 25103);
/* harmony import */ var _core_data_object_updates_object_updates_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/data/object-updates/object-updates.service */ 59033);
/* harmony import */ var _core_data_request_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/data/request.service */ 32473);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/shared/operators */ 55757);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/empty.util */ 82777);
/* harmony import */ var _shared_live_region_live_region_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/live-region/live-region.service */ 25488);
/* harmony import */ var _shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/notifications/notifications.service */ 69472);
/* harmony import */ var _shared_pagination_pagination_component_options_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/pagination/pagination-component-options.model */ 23401);
/* harmony import */ var _shared_responsive_table_sizes_responsive_column_sizes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/responsive-table-sizes/responsive-column-sizes */ 6867);
/* harmony import */ var _shared_responsive_table_sizes_responsive_table_sizes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/responsive-table-sizes/responsive-table-sizes */ 20959);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ngx-translate/core */ 96439);


























const MOVE_KEY = 'item.edit.bitstreams.notifications.move';
/**
 * This service handles the selection and updating of the bitstreams and their order on the
 * 'Edit Item' -> 'Bitstreams' page.
 */
class ItemBitstreamsService {
  constructor(notificationsService, translateService, objectUpdatesService, bitstreamService, bundleService, dsoNameService, requestService, liveRegionService) {
    this.notificationsService = notificationsService;
    this.translateService = translateService;
    this.objectUpdatesService = objectUpdatesService;
    this.bitstreamService = bitstreamService;
    this.bundleService = bundleService;
    this.dsoNameService = dsoNameService;
    this.requestService = requestService;
    this.liveRegionService = liveRegionService;
    /**
     * BehaviorSubject which emits every time the selected bitstream changes.
     */
    this.selectionAction$ = new rxjs__WEBPACK_IMPORTED_MODULE_14__.BehaviorSubject(null);
    this.isPerformingMoveRequest = new rxjs__WEBPACK_IMPORTED_MODULE_14__.BehaviorSubject(false);
  }
  /**
   * Returns the observable emitting the selection actions
   */
  getSelectionAction$() {
    return this.selectionAction$;
  }
  /**
   * Returns the latest selection action
   */
  getSelectionAction() {
    const action = this.selectionAction$.value;
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_8__.hasNoValue)(action)) {
      return null;
    }
    return Object.assign({}, action);
  }
  /**
   * Returns true if there currently is a selected bitstream
   */
  hasSelectedBitstream() {
    const selectionAction = this.getSelectionAction();
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_8__.hasNoValue)(selectionAction)) {
      return false;
    }
    const action = selectionAction.action;
    return action === 'Selected' || action === 'Moved';
  }
  /**
   * Returns a copy of the currently selected bitstream
   */
  getSelectedBitstream() {
    if (!this.hasSelectedBitstream()) {
      return null;
    }
    const selectionAction = this.getSelectionAction();
    return Object.assign({}, selectionAction.selectedEntry);
  }
  /**
   * Select the provided entry
   */
  selectBitstreamEntry(entry) {
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_8__.hasValue)(entry) && entry.bitstream !== this.getSelectedBitstream()?.bitstream) {
      this.announceSelect(entry.bitstream.name);
      this.updateSelectionAction({
        action: 'Selected',
        selectedEntry: entry
      });
    }
  }
  /**
   * Makes the {@link selectionAction$} observable emit the provided {@link SelectedBitstreamTableEntry}.
   * @protected
   */
  updateSelectionAction(action) {
    this.selectionAction$.next(action);
  }
  /**
   * Unselects the selected bitstream. Does nothing if no bitstream is selected.
   */
  clearSelection() {
    const selected = this.getSelectedBitstream();
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_8__.hasValue)(selected)) {
      this.updateSelectionAction({
        action: 'Cleared',
        selectedEntry: selected
      });
      this.announceClear(selected.bitstream.name);
      if (selected.currentPosition !== selected.originalPosition) {
        this.displaySuccessNotification(MOVE_KEY);
      }
    }
  }
  /**
   * Returns the currently selected bitstream to its original position and unselects the bitstream.
   * Does nothing if no bitstream is selected.
   */
  cancelSelection() {
    const selected = this.getSelectedBitstream();
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_8__.hasNoValue)(selected) || this.getPerformingMoveRequest()) {
      return;
    }
    const originalPosition = selected.originalPosition;
    const currentPosition = selected.currentPosition;
    // If the selected bitstream has not moved, there is no need to return it to its original position
    if (currentPosition === originalPosition) {
      this.announceClear(selected.bitstream.name);
      this.updateSelectionAction({
        action: 'Cleared',
        selectedEntry: selected
      });
    } else {
      this.announceCancel(selected.bitstream.name, originalPosition);
      this.performBitstreamMoveRequest(selected.bundle, currentPosition, originalPosition);
      this.updateSelectionAction({
        action: 'Cancelled',
        selectedEntry: selected
      });
    }
  }
  /**
   * Moves the selected bitstream one position up in the bundle. Does nothing if no bitstream is selected or the
   * selected bitstream already is at the beginning of the bundle.
   */
  moveSelectedBitstreamUp() {
    const selected = this.getSelectedBitstream();
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_8__.hasNoValue)(selected) || this.getPerformingMoveRequest()) {
      return;
    }
    const originalPosition = selected.currentPosition;
    if (originalPosition > 0) {
      const newPosition = originalPosition - 1;
      selected.currentPosition = newPosition;
      const onRequestCompleted = () => {
        this.announceMove(selected.bitstream.name, newPosition);
      };
      this.performBitstreamMoveRequest(selected.bundle, originalPosition, newPosition, onRequestCompleted);
      this.updateSelectionAction({
        action: 'Moved',
        selectedEntry: selected
      });
    }
  }
  /**
   * Moves the selected bitstream one position down in the bundle. Does nothing if no bitstream is selected or the
   * selected bitstream already is at the end of the bundle.
   */
  moveSelectedBitstreamDown() {
    const selected = this.getSelectedBitstream();
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_8__.hasNoValue)(selected) || this.getPerformingMoveRequest()) {
      return;
    }
    const originalPosition = selected.currentPosition;
    if (originalPosition < selected.bundleSize - 1) {
      const newPosition = originalPosition + 1;
      selected.currentPosition = newPosition;
      const onRequestCompleted = () => {
        this.announceMove(selected.bitstream.name, newPosition);
      };
      this.performBitstreamMoveRequest(selected.bundle, originalPosition, newPosition, onRequestCompleted);
      this.updateSelectionAction({
        action: 'Moved',
        selectedEntry: selected
      });
    }
  }
  /**
   * Sends out a Move Patch request to the REST API, display notifications,
   * refresh the bundle's cache (so the lists can properly reload)
   * @param bundle The bundle to send patch requests to
   * @param fromIndex The index to move from
   * @param toIndex The index to move to
   * @param finish Optional: Function to execute once the response has been received
   */
  performBitstreamMoveRequest(bundle, fromIndex, toIndex, finish) {
    if (this.getPerformingMoveRequest()) {
      console.warn('Attempted to perform move request while previous request has not completed yet');
      return;
    }
    const moveOperation = {
      op: 'move',
      from: `/_links/bitstreams/${fromIndex}/href`,
      path: `/_links/bitstreams/${toIndex}/href`
    };
    this.announceLoading();
    this.isPerformingMoveRequest.next(true);
    this.bundleService.patch(bundle, [moveOperation]).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_7__.getFirstCompletedRemoteData)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.tap)(response => this.displayFailedResponseNotifications(MOVE_KEY, [response])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.switchMap)(() => this.requestService.setStaleByHrefSubstring(bundle.self)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.take)(1)).subscribe(() => {
      this.isPerformingMoveRequest.next(false);
      finish?.();
    });
  }
  /**
   * Whether the service currently is processing a 'move' request
   */
  getPerformingMoveRequest() {
    return this.isPerformingMoveRequest.value;
  }
  /**
   * Returns an observable which emits when the service starts, or ends, processing a 'move' request
   */
  getPerformingMoveRequest$() {
    return this.isPerformingMoveRequest;
  }
  /**
   * Returns the pagination options to use when fetching the bundles
   */
  getInitialBundlesPaginationOptions() {
    return Object.assign(new _shared_pagination_pagination_component_options_model__WEBPACK_IMPORTED_MODULE_11__.PaginationComponentOptions(), {
      id: 'bundles-pagination-options',
      currentPage: 1,
      pageSize: 9999
    });
  }
  /**
   * Returns the initial pagination options to use when fetching the bitstreams
   * @param bundleName The name of the bundle, will be as pagination id.
   */
  getInitialBitstreamsPaginationOptions(bundleName) {
    return Object.assign(new _shared_pagination_pagination_component_options_model__WEBPACK_IMPORTED_MODULE_11__.PaginationComponentOptions(), {
      id: bundleName,
      // This might behave unexpectedly if the item contains two bundles with the same name
      currentPage: 1,
      pageSize: 10
    });
  }
  /**
   * Returns the {@link ResponsiveTableSizes} for use in the columns of the edit bitstreams table
   */
  getColumnSizes() {
    return new _shared_responsive_table_sizes_responsive_table_sizes__WEBPACK_IMPORTED_MODULE_13__.ResponsiveTableSizes([
    // Name column
    new _shared_responsive_table_sizes_responsive_column_sizes__WEBPACK_IMPORTED_MODULE_12__.ResponsiveColumnSizes(2, 2, 3, 4, 4),
    // Description column
    new _shared_responsive_table_sizes_responsive_column_sizes__WEBPACK_IMPORTED_MODULE_12__.ResponsiveColumnSizes(2, 3, 3, 3, 3),
    // Format column
    new _shared_responsive_table_sizes_responsive_column_sizes__WEBPACK_IMPORTED_MODULE_12__.ResponsiveColumnSizes(2, 2, 2, 2, 2),
    // Actions column
    new _shared_responsive_table_sizes_responsive_column_sizes__WEBPACK_IMPORTED_MODULE_12__.ResponsiveColumnSizes(6, 5, 4, 3, 3)]);
  }
  /**
   * Display notifications
   * - Error notification for each failed response with their message
   * - Success notification in case there's at least one successful response
   * @param key       The i18n key for the notification messages
   * @param responses The returned responses to display notifications for
   */
  displayNotifications(key, responses) {
    this.displayFailedResponseNotifications(key, responses);
    this.displaySuccessFulResponseNotifications(key, responses);
  }
  /**
   * Display an error notification for each failed response with their message
   * @param key       The i18n key for the notification messages
   * @param responses The returned responses to display notifications for
   */
  displayFailedResponseNotifications(key, responses) {
    const failedResponses = responses.filter(response => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_8__.hasValue)(response) && response.hasFailed);
    failedResponses.forEach(response => {
      this.displayErrorNotification(key, response.errorMessage);
    });
  }
  /**
   * Display an error notification with the provided key and message
   * @param key          The i18n key for the notification messages
   * @param errorMessage The error message to display
   */
  displayErrorNotification(key, errorMessage) {
    this.notificationsService.error(this.translateService.instant(`${key}.failed.title`), errorMessage);
  }
  /**
   * Display a success notification in case there's at least one successful response
   * @param key       The i18n key for the notification messages
   * @param responses The returned responses to display notifications for
   */
  displaySuccessFulResponseNotifications(key, responses) {
    const successfulResponses = responses.filter(response => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_8__.hasValue)(response) && response.hasSucceeded);
    if (successfulResponses.length > 0) {
      this.displaySuccessNotification(key);
    }
  }
  /**
   * Display a success notification with the provided key
   * @param key          The i18n key for the notification messages
   */
  displaySuccessNotification(key) {
    this.notificationsService.success(this.translateService.instant(`${key}.saved.title`), this.translateService.instant(`${key}.saved.content`));
  }
  /**
   * Removes the bitstreams marked for deletion from the Bundles emitted by the provided observable.
   * @param bundles$
   */
  removeMarkedBitstreams(bundles$) {
    const bundlesOnce$ = bundles$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.take)(1));
    // Fetch all removed bitstreams from the object update service
    const removedBitstreams$ = bundlesOnce$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.switchMap)(bundles => (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.zip)(...bundles.map(bundle => this.objectUpdatesService.getFieldUpdates(bundle.self, [], true)))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.map)(fieldUpdates => [].concat(...fieldUpdates.map(updates => Object.values(updates).filter(fieldUpdate => fieldUpdate.changeType === _core_data_object_updates_field_change_type_model__WEBPACK_IMPORTED_MODULE_4__.FieldChangeType.REMOVE)))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.map)(fieldUpdates => fieldUpdates.map(fieldUpdate => fieldUpdate.field)));
    // Send out delete requests for all deleted bitstreams
    return removedBitstreams$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.switchMap)(removedBitstreams => {
      return this.bitstreamService.removeMultiple(removedBitstreams);
    }));
  }
  /**
   * Creates an array of {@link BitstreamTableEntry}s from an array of {@link Bitstream}s
   * @param bitstreams The bitstreams array to map to table entries
   */
  mapBitstreamsToTableEntries(bitstreams) {
    return bitstreams.map(bitstream => {
      const name = this.dsoNameService.getName(bitstream);
      return {
        bitstream: bitstream,
        id: bitstream.uuid,
        name: name,
        nameStripped: this.nameToHeader(name),
        description: bitstream.firstMetadataValue('dc.description'),
        format: bitstream.format.pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_7__.getFirstSucceededRemoteDataPayload)()),
        downloadUrl: (0,_app_routing_paths__WEBPACK_IMPORTED_MODULE_0__.getBitstreamDownloadRoute)(bitstream)
      };
    });
  }
  /**
   * Returns a string appropriate to be used as header ID
   * @param name
   */
  nameToHeader(name) {
    // Whitespace is stripped from the Bitstream names for accessibility reasons.
    // To make it clear which headers are relevant for a specific field in the table, the 'headers' attribute is used to
    // refer to specific headers. The Bitstream's name is used as header ID for the row containing information regarding
    // that bitstream. As the 'headers' attribute contains a space-separated string of header IDs, the Bitstream's header
    // ID can not contain spaces itself.
    return this.stripWhiteSpace(name);
  }
  /**
   * Returns a string equal to the input string with all whitespace removed.
   * @param str
   */
  stripWhiteSpace(str) {
    // '/\s+/g' matches all occurrences of any amount of whitespace characters
    return str.replace(/\s+/g, '');
  }
  /**
   * Adds a message to the live region mentioning that the bitstream with the provided name was selected.
   * @param bitstreamName The name of the bitstream that was selected.
   */
  announceSelect(bitstreamName) {
    const message = this.translateService.instant('item.edit.bitstreams.edit.live.select', {
      bitstream: bitstreamName
    });
    this.liveRegionService.addMessage(message);
  }
  /**
   * Adds a message to the live region mentioning that the bitstream with the provided name was moved to the provided
   * position.
   * @param bitstreamName The name of the bitstream that moved.
   * @param toPosition The zero-indexed position that the bitstream moved to.
   */
  announceMove(bitstreamName, toPosition) {
    const message = this.translateService.instant('item.edit.bitstreams.edit.live.move', {
      bitstream: bitstreamName,
      toIndex: toPosition + 1
    });
    this.liveRegionService.addMessage(message);
  }
  /**
   * Adds a message to the live region mentioning that the bitstream with the provided name is no longer selected and
   * was returned to the provided position.
   * @param bitstreamName The name of the bitstream that is no longer selected
   * @param toPosition The zero-indexed position the bitstream returned to.
   */
  announceCancel(bitstreamName, toPosition) {
    const message = this.translateService.instant('item.edit.bitstreams.edit.live.cancel', {
      bitstream: bitstreamName,
      toIndex: toPosition + 1
    });
    this.liveRegionService.addMessage(message);
  }
  /**
   * Adds a message to the live region mentioning that the bitstream with the provided name is no longer selected.
   * @param bitstreamName The name of the bitstream that is no longer selected.
   */
  announceClear(bitstreamName) {
    const message = this.translateService.instant('item.edit.bitstreams.edit.live.clear', {
      bitstream: bitstreamName
    });
    this.liveRegionService.addMessage(message);
  }
  /**
   * Adds a message to the live region mentioning that the
   */
  announceLoading() {
    const message = this.translateService.instant('item.edit.bitstreams.edit.live.loading');
    this.liveRegionService.addMessage(message);
  }
  static {
    this.ɵfac = function ItemBitstreamsService_Factory(t) {
      return new (t || ItemBitstreamsService)(_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵinject"](_shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_10__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵinject"](_core_data_object_updates_object_updates_service__WEBPACK_IMPORTED_MODULE_5__.ObjectUpdatesService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵinject"](_core_data_bitstream_data_service__WEBPACK_IMPORTED_MODULE_2__.BitstreamDataService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵinject"](_core_data_bundle_data_service__WEBPACK_IMPORTED_MODULE_3__.BundleDataService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵinject"](_core_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_1__.DSONameService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵinject"](_core_data_request_service__WEBPACK_IMPORTED_MODULE_6__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵinject"](_shared_live_region_live_region_service__WEBPACK_IMPORTED_MODULE_9__.LiveRegionService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineInjectable"]({
      token: ItemBitstreamsService,
      factory: ItemBitstreamsService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 3022:
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/item-page/edit-item-page/item-bitstreams/item-edit-bitstream-bundle/item-edit-bitstream-bundle.component.ts ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ItemEditBitstreamBundleComponent: () => (/* binding */ ItemEditBitstreamBundleComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 24616);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 49966);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 83485);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs */ 84975);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs */ 66853);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs/operators */ 78374);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs/operators */ 21252);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! rxjs/operators */ 85687);
/* harmony import */ var _core_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/breadcrumbs/dso-name.service */ 96526);
/* harmony import */ var _core_data_bundle_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/data/bundle-data.service */ 81443);
/* harmony import */ var _core_data_object_updates_field_change_type_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/data/object-updates/field-change-type.model */ 25103);
/* harmony import */ var _core_data_object_updates_object_updates_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/data/object-updates/object-updates.service */ 59033);
/* harmony import */ var _core_data_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/data/request.service */ 32473);
/* harmony import */ var _core_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/pagination/pagination.service */ 76896);
/* harmony import */ var _core_shared_bundle_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/shared/bundle.model */ 70673);
/* harmony import */ var _core_shared_item_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/shared/item.model */ 88318);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/shared/operators */ 55757);
/* harmony import */ var _shared_btn_disabled_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/btn-disabled.directive */ 60456);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/empty.util */ 82777);
/* harmony import */ var _shared_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/pagination/pagination.component */ 40590);
/* harmony import */ var _shared_responsive_table_sizes_responsive_table_sizes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/responsive-table-sizes/responsive-table-sizes */ 20959);
/* harmony import */ var _shared_search_models_paginated_search_options_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/search/models/paginated-search-options.model */ 33550);
/* harmony import */ var _shared_utils_browser_only_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/utils/browser-only.pipe */ 75465);
/* harmony import */ var _shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../shared/utils/follow-link-config.model */ 67600);
/* harmony import */ var _item_page_routing_paths__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../item-page-routing-paths */ 90887);
/* harmony import */ var _item_bitstreams_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../item-bitstreams.service */ 8607);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 90310);




































const _c0 = ["bundleView"];
const _c1 = ["dragTooltip"];
const _c2 = a0 => ({
  bundle: a0
});
const _c3 = a0 => ({
  name: a0
});
const _c4 = a0 => [a0, "bitstreams", "new"];
const _c5 = a0 => ({
  "invisible": a0
});
const _c6 = a0 => ["/bitstreams/", a0, "edit"];
function ItemEditBitstreamBundleComponent_ng_template_0_ds_pagination_0_ng_container_3_li_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "li", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function ItemEditBitstreamBundleComponent_ng_template_0_ds_pagination_0_ng_container_3_li_40_Template_button_click_2_listener() {
      const size_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r1.doPageSizeChange(size_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](3, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const size_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵattribute"]("aria-selected", size_r4 === _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](1, 3, ctx_r1.pageSize$));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction1"](7, _c5, size_r4 !== _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](4, 5, ctx_r1.pageSize$)));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", size_r4, " ");
  }
}
function ItemEditBitstreamBundleComponent_ng_template_0_ds_pagination_0_ng_container_3_ng_container_41_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "tr", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("cdkDragStarted", function ItemEditBitstreamBundleComponent_ng_template_0_ds_pagination_0_ng_container_3_ng_container_41_tr_1_Template_tr_cdkDragStarted_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r1.dragStart());
    })("cdkDragEnded", function ItemEditBitstreamBundleComponent_ng_template_0_ds_pagination_0_ng_container_3_ng_container_41_tr_1_Template_tr_cdkDragEnded_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r1.dragEnd());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "th", 33)(2, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("keydown.enter", function ItemEditBitstreamBundleComponent_ng_template_0_ds_pagination_0_ng_container_3_ng_container_41_tr_1_Template_div_keydown_enter_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r5);
      const entry_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r1.select($event, entry_r6));
    })("keydown.space", function ItemEditBitstreamBundleComponent_ng_template_0_ds_pagination_0_ng_container_3_ng_container_41_tr_1_Template_div_keydown_space_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r5);
      const entry_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r1.select($event, entry_r6));
    })("click", function ItemEditBitstreamBundleComponent_ng_template_0_ds_pagination_0_ng_container_3_ng_container_41_tr_1_Template_div_click_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r5);
      const entry_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r1.select($event, entry_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](3, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](8, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](10, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](11, "td", 36)(12, "div", 37)(13, "div", 38)(14, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](17, "dsBrowserOnly");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](18, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](19, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](22, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](23, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](24, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](25, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function ItemEditBitstreamBundleComponent_ng_template_0_ds_pagination_0_ng_container_3_ng_container_41_tr_1_Template_button_click_23_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r5);
      const entry_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r1.remove(entry_r6.bitstream));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](26, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](27, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](28, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](29, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function ItemEditBitstreamBundleComponent_ng_template_0_ds_pagination_0_ng_container_3_ng_container_41_tr_1_Template_button_click_27_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r5);
      const entry_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r1.undo(entry_r6.bitstream));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](30, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    let tmp_23_0;
    const update_r7 = ctx.ngIf;
    const entry_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngClass", ctx_r1.getRowClass(update_r7, entry_r6));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵclassMapInterpolate1"]("bitstream-name row-element ", ctx_r1.columnSizes.columns[0].buildClasses(), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("id", entry_r6.nameStripped);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate1"]("headers", "", ctx_r1.bundleName, " name");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](4, 42, "item.edit.bitstreams.edit.buttons.drag"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", entry_r6.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵclassMapInterpolate1"]("row-element ", ctx_r1.columnSizes.columns[1].buildClasses(), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate2"]("headers", "", entry_r6.nameStripped, " ", ctx_r1.bundleName, " description");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", entry_r6.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵclassMapInterpolate1"]("row-element ", ctx_r1.columnSizes.columns[2].buildClasses(), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate2"]("headers", "", entry_r6.nameStripped, " ", ctx_r1.bundleName, " format");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", (tmp_23_0 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](10, 44, entry_r6.format)) == null ? null : tmp_23_0.shortDescription, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵclassMapInterpolate1"]("row-element ", ctx_r1.columnSizes.columns[3].buildClasses(), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate2"]("headers", "", entry_r6.nameStripped, " ", ctx_r1.bundleName, " actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](15, 46, "item.edit.bitstreams.edit.buttons.download"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("href", entry_r6.downloadUrl, _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](16, 48, "item.edit.bitstreams.edit.buttons.download"))("data-test", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](17, 50, "download-button"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](20, 52, "item.edit.bitstreams.edit.buttons.edit"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction1"](64, _c6, entry_r6.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](21, 54, "item.edit.bitstreams.edit.buttons.edit"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](24, 56, "item.edit.bitstreams.edit.buttons.remove"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("dsBtnDisabled", !ctx_r1.canRemove(update_r7));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](25, 58, "item. edit bitstreams.edit.buttons.remove"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](28, 60, "item.edit.bitstreams.edit.buttons.undo"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("dsBtnDisabled", !ctx_r1.canUndo(update_r7));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](29, 62, "item.edit.bitstreams.edit.buttons.undo"));
  }
}
function ItemEditBitstreamBundleComponent_ng_template_0_ds_pagination_0_ng_container_3_ng_container_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, ItemEditBitstreamBundleComponent_ng_template_0_ds_pagination_0_ng_container_3_ng_container_41_tr_1_Template, 31, 66, "tr", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const entry_r6 = ctx.$implicit;
    const updates_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", updates_r8[entry_r6.id]);
  }
}
function ItemEditBitstreamBundleComponent_ng_template_0_ds_pagination_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "table", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "thead")(4, "tr", 7)(5, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](8, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](11, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](14, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](17, "tbody", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("cdkDropListDropped", function ItemEditBitstreamBundleComponent_ng_template_0_ds_pagination_0_ng_container_3_Template_tbody_cdkDropListDropped_17_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r1.drop($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](18, "tr", 13)(19, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](22, "td", 15)(23, "div", 16)(24, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](25, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](26, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](27, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](28, "div", 19, 2)(30, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](31, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](32, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](33, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](34, "ul", 22)(35, "li", 23)(36, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](38, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](39, "ul", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](40, ItemEditBitstreamBundleComponent_ng_template_0_ds_pagination_0_ng_container_3_li_40_Template, 6, 9, "li", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](41, ItemEditBitstreamBundleComponent_ng_template_0_ds_pagination_0_ng_container_3_ng_container_41_Template, 2, 1, "ng-container", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](42, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵclassProp"]("mt-n1", !ctx_r1.isFirstTable);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind2"](2, 32, "item.edit.bitstreams.bundle.table.aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction1"](58, _c2, ctx_r1.bundleName)));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵclassProp"]("visually-hidden", !ctx_r1.isFirstTable);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵclassMap"](ctx_r1.columnSizes.columns[0].buildClasses());
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](7, 35, "item.edit.bitstreams.headers.name"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵclassMap"](ctx_r1.columnSizes.columns[1].buildClasses());
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](10, 37, "item.edit.bitstreams.headers.description"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵclassMap"](ctx_r1.columnSizes.columns[2].buildClasses());
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](13, 39, "item.edit.bitstreams.headers.format"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵclassMapInterpolate1"]("", ctx_r1.columnSizes.columns[3].buildClasses(), " text-center");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](16, 41, "item.edit.bitstreams.headers.actions"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("id", ctx_r1.bundleName);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind2"](21, 43, "item.edit.bitstreams.bundle.name", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction1"](60, _c3, ctx_r1.bundleName)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](25, 46, "item.edit.bitstreams.bundle.edit.buttons.upload"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction1"](62, _c4, ctx_r1.itemPageRoute))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction1"](64, _c2, ctx_r1.bundle.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](26, 48, "item.edit.bitstreams.bundle.edit.buttons.upload"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](31, 50, "pagination.options.description"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](32, 52, "pagination.options.description"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](38, 54, "pagination.results-per-page"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx_r1.paginationOptions.pageSizeOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](42, 56, ctx_r1.tableEntries$));
  }
}
function ItemEditBitstreamBundleComponent_ng_template_0_ds_pagination_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "ds-pagination", 4, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](3, ItemEditBitstreamBundleComponent_ng_template_0_ds_pagination_0_ng_container_3_Template, 43, 66, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const bitstreamsList_r9 = ctx.ngIf;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("hideGear", true)("hidePagerWhenSinglePage", true)("hidePaginationDetail", true)("paginationOptions", ctx_r1.paginationOptions)("collectionSize", bitstreamsList_r9.totalElements)("retainScrollPosition", true)("ngbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 9, "item.edit.bitstreams.bundle.tooltip"))("autoClose", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](4, 11, ctx_r1.updates$));
  }
}
function ItemEditBitstreamBundleComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](0, ItemEditBitstreamBundleComponent_ng_template_0_ds_pagination_0_Template, 5, 13, "ds-pagination", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](1, "async");
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](1, 1, ctx_r1.bitstreamsRD$)) == null ? null : tmp_2_0.payload);
  }
}
/**
 * Component that displays a single bundle of an item on the item bitstreams edit page
 * Creates an embedded view of the contents. This is to ensure the table structure won't break.
 * (which means it'll be added to the parents html without a wrapping ds-item-edit-bitstream-bundle element)
 */
class ItemEditBitstreamBundleComponent {
  constructor(viewContainerRef, dsoNameService, bundleService, objectUpdatesService, paginationService, requestService, itemBitstreamsService) {
    this.viewContainerRef = viewContainerRef;
    this.dsoNameService = dsoNameService;
    this.bundleService = bundleService;
    this.objectUpdatesService = objectUpdatesService;
    this.paginationService = paginationService;
    this.requestService = requestService;
    this.itemBitstreamsService = itemBitstreamsService;
    this.FieldChangeType = _core_data_object_updates_field_change_type_model__WEBPACK_IMPORTED_MODULE_2__.FieldChangeType;
    /**
     * Whether this is the first in a series of bundle tables
     */
    this.isFirstTable = false;
    /**
     * The data to show in the table
     */
    this.tableEntries$ = new rxjs__WEBPACK_IMPORTED_MODULE_19__.BehaviorSubject([]);
    /**
     * The updates to the current bitstreams
     */
    this.updates$ = new rxjs__WEBPACK_IMPORTED_MODULE_19__.BehaviorSubject(null);
    /**
     * Array containing all subscriptions created by this component
     */
    this.subscriptions = [];
  }
  ngOnInit() {
    this.bundleNameColumn = this.columnSizes.combineColumns(0, 2);
    this.viewContainerRef.createEmbeddedView(this.bundleView);
    this.itemPageRoute = (0,_item_page_routing_paths__WEBPACK_IMPORTED_MODULE_16__.getItemPageRoute)(this.item);
    this.bundleName = this.dsoNameService.getName(this.bundle);
    this.bundleUrl = this.bundle.self;
    this.initializePagination();
    this.initializeBitstreams();
    this.initializeSelectionActions();
  }
  ngOnDestroy() {
    this.viewContainerRef.clear();
    this.subscriptions.forEach(sub => sub?.unsubscribe());
  }
  initializePagination() {
    this.paginationOptions = this.itemBitstreamsService.getInitialBitstreamsPaginationOptions(this.bundleName);
    this.currentPaginationOptions$ = new rxjs__WEBPACK_IMPORTED_MODULE_19__.BehaviorSubject(this.paginationOptions);
    this.pageSize$ = new rxjs__WEBPACK_IMPORTED_MODULE_19__.BehaviorSubject(this.paginationOptions.pageSize);
    this.subscriptions.push(this.paginationService.getCurrentPagination(this.paginationOptions.id, this.paginationOptions).subscribe(pagination => {
      this.currentPaginationOptions$.next(pagination);
      this.pageSize$.next(pagination.pageSize);
    }));
  }
  initializeBitstreams() {
    this.bitstreamsRD$ = this.currentPaginationOptions$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_20__.switchMap)(page => {
      const paginatedOptions = new _shared_search_models_paginated_search_options_model__WEBPACK_IMPORTED_MODULE_13__.PaginatedSearchOptions({
        pagination: Object.assign({}, page)
      });
      return this.bundleService.getBitstreamsEndpoint(this.bundle.id, paginatedOptions).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_20__.switchMap)(href => this.requestService.hasByHref$(href)), (0,rxjs__WEBPACK_IMPORTED_MODULE_20__.switchMap)(() => this.bundleService.getBitstreams(this.bundle.id, paginatedOptions, (0,_shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_15__.followLink)('format'))));
    }), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_8__.getAllSucceededRemoteData)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.shareReplay)({
      bufferSize: 1,
      refCount: true
    }));
    this.subscriptions.push(this.bitstreamsRD$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.tap)(bitstreamsRD => this.bundleSize = bitstreamsRD.payload.totalElements), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_8__.paginatedListToArray)()).subscribe(bitstreams => {
      this.objectUpdatesService.initialize(this.bundleUrl, bitstreams, new Date());
    }), this.bitstreamsRD$.pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_8__.paginatedListToArray)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_20__.switchMap)(bitstreams => this.objectUpdatesService.getFieldUpdatesExclusive(this.bundleUrl, bitstreams))).subscribe(updates => this.updates$.next(updates)), this.bitstreamsRD$.pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_8__.paginatedListToArray)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_24__.map)(bitstreams => this.itemBitstreamsService.mapBitstreamsToTableEntries(bitstreams))).subscribe(tableEntries => this.tableEntries$.next(tableEntries)));
  }
  initializeSelectionActions() {
    this.subscriptions.push(this.itemBitstreamsService.getSelectionAction$().subscribe(selectionAction => this.handleSelectionAction(selectionAction)));
  }
  /**
   * Handles a change in selected bitstream by changing the pagination if the change happened on a different page
   * @param selectionAction
   */
  handleSelectionAction(selectionAction) {
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_10__.hasNoValue)(selectionAction) || selectionAction.selectedEntry.bundle !== this.bundle) {
      return;
    }
    if (selectionAction.action === 'Moved') {
      // If the currently selected bitstream belongs to this bundle, it has possibly moved to a different page.
      // In that case we want to change the pagination to the new page.
      this.redirectToCurrentPage(selectionAction.selectedEntry);
    }
    if (selectionAction.action === 'Cancelled') {
      // If the selection is cancelled (and returned to its original position), it is possible the previously selected
      // bitstream is returned to a different page. In that case we want to change the pagination to the place where
      // the bitstream was returned to.
      this.redirectToOriginalPage(selectionAction.selectedEntry);
    }
    if (selectionAction.action === 'Cleared') {
      // If the selection is cleared, it is possible the previously selected bitstream is on a different page. In that
      // case we want to change the pagination to the place where the bitstream is.
      this.redirectToCurrentPage(selectionAction.selectedEntry);
    }
  }
  /**
   * Redirect the user to the current page of the provided bitstream if it is on a different page.
   * @param bitstreamEntry The entry that the current position will be taken from to determine the page to move to
   * @protected
   */
  redirectToCurrentPage(bitstreamEntry) {
    const currentPage = this.getCurrentPage();
    const selectedEntryPage = this.bundleIndexToPage(bitstreamEntry.currentPosition);
    if (currentPage !== selectedEntryPage) {
      this.changeToPage(selectedEntryPage);
    }
  }
  /**
   * Redirect the user to the original page of the provided bitstream if it is on a different page.
   * @param bitstreamEntry The entry that the original position will be taken from to determine the page to move to
   * @protected
   */
  redirectToOriginalPage(bitstreamEntry) {
    const currentPage = this.getCurrentPage();
    const originPage = this.bundleIndexToPage(bitstreamEntry.originalPosition);
    if (currentPage !== originPage) {
      this.changeToPage(originPage);
    }
  }
  /**
   * Check if a user should be allowed to remove this field
   */
  canRemove(fieldUpdate) {
    return fieldUpdate.changeType !== _core_data_object_updates_field_change_type_model__WEBPACK_IMPORTED_MODULE_2__.FieldChangeType.REMOVE;
  }
  /**
   * Check if a user should be allowed to cancel the update to this field
   */
  canUndo(fieldUpdate) {
    return fieldUpdate.changeType >= _core_data_object_updates_field_change_type_model__WEBPACK_IMPORTED_MODULE_2__.FieldChangeType.UPDATE;
  }
  /**
   * Sends a new remove update for this field to the object updates service
   */
  remove(bitstream) {
    this.objectUpdatesService.saveRemoveFieldUpdate(this.bundleUrl, bitstream);
  }
  /**
   * Cancels the current update for this field in the object updates service
   */
  undo(bitstream) {
    this.objectUpdatesService.removeSingleFieldUpdate(this.bundleUrl, bitstream.uuid);
  }
  /**
   * Returns the css class for a table row depending on the state of the table entry.
   * @param update
   * @param bitstream
   */
  getRowClass(update, bitstream) {
    const selected = this.itemBitstreamsService.getSelectedBitstream();
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_10__.hasValue)(selected) && bitstream.id === selected.bitstream.id) {
      return 'table-info';
    }
    switch (update.changeType) {
      case _core_data_object_updates_field_change_type_model__WEBPACK_IMPORTED_MODULE_2__.FieldChangeType.UPDATE:
        return 'table-warning';
      case _core_data_object_updates_field_change_type_model__WEBPACK_IMPORTED_MODULE_2__.FieldChangeType.ADD:
        return 'table-success';
      case _core_data_object_updates_field_change_type_model__WEBPACK_IMPORTED_MODULE_2__.FieldChangeType.REMOVE:
        return 'table-danger';
      default:
        return 'bg-white';
    }
  }
  /**
   * Changes the page size to the provided page size.
   * @param pageSize
   */
  doPageSizeChange(pageSize) {
    this.paginationComponent.doPageSizeChange(pageSize);
  }
  /**
   * Handles start of dragging by opening the tooltip mentioning that it is possible to drag a bitstream to a different
   * page by dropping it on the page number, only if there are multiple pages.
   */
  dragStart() {
    // Only open the drag tooltip when there are multiple pages
    this.paginationComponent.shouldShowBottomPager.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_25__.filter)(hasMultiplePages => hasMultiplePages)).subscribe(() => {
      this.dragTooltip.open();
    });
  }
  /**
   * Handles end of dragging by closing the tooltip.
   */
  dragEnd() {
    this.dragTooltip.close();
  }
  /**
   * Handles dropping by calculation the target position, and changing the page if the bitstream was dropped on a
   * different page.
   * @param event
   */
  drop(event) {
    const dragIndex = event.previousIndex;
    let dropIndex = event.currentIndex;
    const dragPage = this.getCurrentPage();
    let dropPage = this.getCurrentPage();
    // Check if the user is hovering over any of the pagination's pages at the time of dropping the object
    const droppedOnElement = document.elementFromPoint(event.dropPoint.x, event.dropPoint.y);
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_10__.hasValue)(droppedOnElement) && (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_10__.hasValue)(droppedOnElement.textContent) && droppedOnElement.classList.contains('page-link')) {
      // The user is hovering over a page, fetch the page's number from the element
      let droppedPage = Number(droppedOnElement.textContent);
      if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_10__.hasValue)(droppedPage) && !Number.isNaN(droppedPage)) {
        droppedPage -= 1;
        if (droppedPage !== dragPage) {
          dropPage = droppedPage;
          if (dropPage > dragPage) {
            // When moving to later page, place bitstream at the top
            dropIndex = 0;
          } else {
            // When moving to earlier page, place bitstream at the bottom
            dropIndex = this.getCurrentPageSize() - 1;
          }
        }
      }
    }
    const fromIndex = this.pageIndexToBundleIndex(dragIndex, dragPage);
    const toIndex = this.pageIndexToBundleIndex(dropIndex, dropPage);
    if (fromIndex === toIndex) {
      return;
    }
    const selectedBitstream = this.tableEntries$.value[dragIndex];
    const finish = () => {
      this.itemBitstreamsService.announceMove(selectedBitstream.name, toIndex);
      if (dropPage !== this.getCurrentPage()) {
        this.changeToPage(dropPage);
      }
      this.itemBitstreamsService.displaySuccessNotification(_item_bitstreams_service__WEBPACK_IMPORTED_MODULE_17__.MOVE_KEY);
    };
    this.itemBitstreamsService.performBitstreamMoveRequest(this.bundle, fromIndex, toIndex, finish);
  }
  /**
   * Handles a select action for the provided bitstream entry.
   * If the selected bitstream is currently selected, the selection is cleared.
   * If no, or a different bitstream, is selected, the provided bitstream becomes the selected bitstream.
   * @param event The event that triggered the select action
   * @param bitstream The bitstream that is the target of the select action
   */
  select(event, bitstream) {
    event.preventDefault();
    if (event instanceof KeyboardEvent && event.repeat) {
      // Don't handle hold events, otherwise it would change rapidly between being selected and unselected
      return;
    }
    const selectedBitstream = this.itemBitstreamsService.getSelectedBitstream();
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_10__.hasValue)(selectedBitstream) && selectedBitstream.bitstream === bitstream) {
      this.itemBitstreamsService.cancelSelection();
    } else {
      const selectionObject = this.createBitstreamSelectionObject(bitstream);
      if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_10__.hasNoValue)(selectionObject)) {
        console.warn('Failed to create selection object');
        return;
      }
      this.itemBitstreamsService.selectBitstreamEntry(selectionObject);
    }
  }
  /**
   * Creates a {@link SelectedBitstreamTableEntry} from the provided {@link BitstreamTableEntry} so it can be given
   * to the {@link ItemBitstreamsService} to select the table entry.
   * @param bitstream The table entry to create the selection object from.
   * @protected
   */
  createBitstreamSelectionObject(bitstream) {
    const pageIndex = this.findBitstreamPageIndex(bitstream);
    if (pageIndex === -1) {
      return null;
    }
    const position = this.pageIndexToBundleIndex(pageIndex, this.getCurrentPage());
    return {
      bitstream: bitstream,
      bundle: this.bundle,
      bundleSize: this.bundleSize,
      currentPosition: position,
      originalPosition: position
    };
  }
  /**
   * Returns the index of the provided {@link BitstreamTableEntry} relative to the current page
   * If the current page size is 10, it will return a value from 0 to 9 (inclusive)
   * Returns -1 if the provided bitstream could not be found
   * @protected
   */
  findBitstreamPageIndex(bitstream) {
    const entries = this.tableEntries$.value;
    return entries.findIndex(entry => entry === bitstream);
  }
  /**
   * Returns the current zero-indexed page
   * @protected
   */
  getCurrentPage() {
    // The pagination component uses one-based numbering while zero-based numbering is more convenient for calculations
    return this.currentPaginationOptions$.value.currentPage - 1;
  }
  /**
   * Returns the current page size
   * @protected
   */
  getCurrentPageSize() {
    return this.currentPaginationOptions$.value.pageSize;
  }
  /**
   * Converts an index relative to the page to an index relative to the bundle
   * @param index The index relative to the page
   * @param page  The zero-indexed page number
   * @protected
   */
  pageIndexToBundleIndex(index, page) {
    return page * this.getCurrentPageSize() + index;
  }
  /**
   * Calculates the zero-indexed page number from the index relative to the bundle
   * @param index The index relative to the bundle
   * @protected
   */
  bundleIndexToPage(index) {
    return Math.floor(index / this.getCurrentPageSize());
  }
  /**
   * Change the pagination for this bundle to the provided zero-indexed page
   * @param page The zero-indexed page to change to
   * @protected
   */
  changeToPage(page) {
    // Increments page by one because zero-indexing is way easier for calculations but the pagination component
    // uses one-indexing.
    this.paginationComponent.doPageChange(page + 1);
  }
  static {
    this.ɵfac = function ItemEditBitstreamBundleComponent_Factory(t) {
      return new (t || ItemEditBitstreamBundleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_18__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_core_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_0__.DSONameService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_core_data_bundle_data_service__WEBPACK_IMPORTED_MODULE_1__.BundleDataService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_core_data_object_updates_object_updates_service__WEBPACK_IMPORTED_MODULE_3__.ObjectUpdatesService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_core_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_5__.PaginationService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_core_data_request_service__WEBPACK_IMPORTED_MODULE_4__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_item_bitstreams_service__WEBPACK_IMPORTED_MODULE_17__.ItemBitstreamsService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineComponent"]({
      type: ItemEditBitstreamBundleComponent,
      selectors: [["ds-item-edit-bitstream-bundle"]],
      viewQuery: function ItemEditBitstreamBundleComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵviewQuery"](_c0, 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵviewQuery"](_shared_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_11__.PaginationComponent, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵviewQuery"](_c1, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵloadQuery"]()) && (ctx.bundleView = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵloadQuery"]()) && (ctx.paginationComponent = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵloadQuery"]()) && (ctx.dragTooltip = _t.first);
        }
      },
      inputs: {
        bundle: "bundle",
        item: "item",
        columnSizes: "columnSizes",
        isFirstTable: "isFirstTable"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 0,
      consts: [["bundleView", ""], ["dragTooltip", "ngbTooltip"], ["paginationControls", "ngbDropdown"], ["placement", "bottom", "triggers", "manual", 3, "hideGear", "hidePagerWhenSinglePage", "hidePaginationDetail", "paginationOptions", "collectionSize", "retainScrollPosition", "ngbTooltip", "autoClose", 4, "ngIf"], ["placement", "bottom", "triggers", "manual", 3, "hideGear", "hidePagerWhenSinglePage", "hidePaginationDetail", "paginationOptions", "collectionSize", "retainScrollPosition", "ngbTooltip", "autoClose"], [4, "ngIf"], [1, "table"], [1, "header-row", "font-weight-bold"], ["id", "name", "scope", "col"], ["id", "description", "scope", "col"], ["id", "format", "scope", "col"], ["id", "actions", "scope", "col"], ["cdkDropList", "", 3, "cdkDropListDropped"], [1, "bundle-row"], ["colspan", "3", "scope", "colgroup", 1, "span", 3, "id"], [1, "text-center"], [1, "btn-group"], [1, "btn", "btn-outline-success", "btn-sm", 3, "routerLink", "queryParams", "title"], [1, "fas", "fa-upload", "fa-fw"], ["ngbDropdown", "", "placement", "bottom-right", 1, "btn-group", "float-right", "btn-sm", "p-0"], ["id", "paginationControls", "ngbDropdownToggle", "", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-outline-secondary", 3, "title"], ["aria-hidden", "true", 1, "fas", "fa-cog"], ["id", "paginationControlsDropdownMenu", "aria-labelledby", "paginationControls", "role", "menu", "ngbDropdownMenu", ""], ["role", "menuitem"], ["id", "pagination-control_results-per-page", "role", "heading", 1, "dropdown-header"], ["aria-labelledby", "pagination-control_results-per-page", "role", "listbox", 1, "list-unstyled"], ["role", "option", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], ["role", "option"], [1, "dropdown-item", 3, "click"], ["aria-hidden", "true", 1, "fas", "fa-check", 3, "ngClass"], ["class", "bitstream-row", "cdkDrag", "", 3, "ngClass", "cdkDragStarted", "cdkDragEnded", 4, "ngIf"], ["cdkDrag", "", 1, "bitstream-row", 3, "cdkDragStarted", "cdkDragEnded", "ngClass"], ["scope", "row", 3, "id", "headers"], ["tabindex", "0", "cdkDragHandle", "", 1, "drag-handle", "text-muted", "float-left", "p-1", "mr-2", 3, "keydown.enter", "keydown.space", "click"], [1, "fas", "fa-grip-vertical", "fa-fw", 3, "title"], [3, "headers"], [1, "text-center", "w-100"], [1, "btn-group", "relationship-action-buttons"], [1, "btn", "btn-outline-primary", "btn-sm", 3, "href", "title"], [1, "fas", "fa-download", "fa-fw"], [1, "btn", "btn-outline-primary", "btn-sm", 3, "routerLink", "title"], [1, "fas", "fa-edit", "fa-fw"], [1, "btn", "btn-outline-danger", "btn-sm", 3, "click", "dsBtnDisabled", "title"], [1, "fas", "fa-trash-alt", "fa-fw"], [1, "btn", "btn-outline-warning", "btn-sm", 3, "click", "dsBtnDisabled", "title"], [1, "fas", "fa-undo-alt", "fa-fw"]],
      template: function ItemEditBitstreamBundleComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](0, ItemEditBitstreamBundleComponent_ng_template_0_Template, 2, 3, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplateRefExtractor"]);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_26__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_26__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_26__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_26__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_26__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__.TranslatePipe, _angular_router__WEBPACK_IMPORTED_MODULE_28__.RouterLink, _shared_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_11__.PaginationComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__.NgbTooltipModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__.NgbTooltip, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_30__.CdkDropList, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__.NgbDropdownModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__.NgbDropdownMenu, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_30__.CdkDrag, _shared_utils_browser_only_pipe__WEBPACK_IMPORTED_MODULE_14__.BrowserOnlyPipe, _shared_btn_disabled_directive__WEBPACK_IMPORTED_MODULE_9__.BtnDisabledDirective],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n.drag-handle[_ngcontent-%COMP%]:hover {\n  cursor: move;\n}\n\n.bitstream-row-drag-handle[_ngcontent-%COMP%]:hover {\n  cursor: move;\n}\n\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  margin-left: 0;\n  box-sizing: border-box;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.cdk-drop-list-dragging[_ngcontent-%COMP%]   .bitstream-row-drag-handle[_ngcontent-%COMP%], .cdk-drop-list-dragging[_ngcontent-%COMP%]   .drag-handle[_ngcontent-%COMP%] {\n  cursor: grabbing;\n}\n\n[_nghost-%COMP%]     .larger-tooltip .tooltip-inner {\n  max-width: 500px;\n}\n\n.table-border[_ngcontent-%COMP%] {\n  border: 1px solid #dee2e6;\n}\n\n[_nghost-%COMP%]     .pagination {\n  padding-top: 0.5rem;\n}\n\n.scrollable-table[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n\n.disabled-overlay[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n\n.loading-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW0tYml0c3RyZWFtcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBO0VBQ0UsWUFBQTtBQUNGOztBQUNBO0VBQ0UsWUFBQTtBQUVGOztBQUFBO0VBQ0UsY0FBQTtFQUNBLHNCQUFBO0VBQ0EscUhBQUE7QUFHRjs7QUFEQTtFQUNFLFVBQUE7QUFJRjs7QUFGQTtFQUNFLHNEQUFBO0FBS0Y7O0FBSEE7RUFDRSxnQkFBQTtBQU1GOztBQUpBO0VBQ0UsZ0JBQUE7QUFPRjs7QUFMQTtFQUNFLHlCQUFBO0FBUUY7O0FBTkE7RUFDRSxtQkFBQTtBQVNGOztBQVBBO0VBQ0UsZ0JBQUE7QUFVRjs7QUFSQTtFQUNFLFlBQUE7QUFXRjs7QUFUQTtFQUNFLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQVlGIiwiZmlsZSI6Iml0ZW0tYml0c3RyZWFtcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovXG4uZHJhZy1oYW5kbGU6aG92ZXIge1xuICBjdXJzb3I6IG1vdmU7XG59XG4uYml0c3RyZWFtLXJvdy1kcmFnLWhhbmRsZTpob3ZlciB7XG4gIGN1cnNvcjogbW92ZTtcbn1cbi5jZGstZHJhZy1wcmV2aWV3IHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cbi5jZGstZHJhZy1wbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDA7XG59XG4uY2RrLWRyYWctYW5pbWF0aW5nIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xufVxuLmNkay1kcm9wLWxpc3QtZHJhZ2dpbmcgLmJpdHN0cmVhbS1yb3ctZHJhZy1oYW5kbGUsIC5jZGstZHJvcC1saXN0LWRyYWdnaW5nIC5kcmFnLWhhbmRsZSB7XG4gIGN1cnNvcjogZ3JhYmJpbmc7XG59XG46aG9zdCA6Om5nLWRlZXAgLmxhcmdlci10b29sdGlwIC50b29sdGlwLWlubmVyIHtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbn1cbi50YWJsZS1ib3JkZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5wYWdpbmF0aW9uIHtcbiAgcGFkZGluZy10b3A6IDAuNXJlbTtcbn1cbi5zY3JvbGxhYmxlLXRhYmxlIHtcbiAgb3ZlcmZsb3cteDogYXV0bztcbn1cbi5kaXNhYmxlZC1vdmVybGF5IHtcbiAgb3BhY2l0eTogMC42O1xufVxuLmxvYWRpbmctb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaXRlbS1wYWdlL2VkaXQtaXRlbS1wYWdlL2l0ZW0tYml0c3RyZWFtcy9pdGVtLWJpdHN0cmVhbXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQTtFQUNFLFlBQUE7QUFDRjs7QUFDQTtFQUNFLFlBQUE7QUFFRjs7QUFBQTtFQUNFLGNBQUE7RUFDQSxzQkFBQTtFQUNBLHFIQUFBO0FBR0Y7O0FBREE7RUFDRSxVQUFBO0FBSUY7O0FBRkE7RUFDRSxzREFBQTtBQUtGOztBQUhBO0VBQ0UsZ0JBQUE7QUFNRjs7QUFKQTtFQUNFLGdCQUFBO0FBT0Y7O0FBTEE7RUFDRSx5QkFBQTtBQVFGOztBQU5BO0VBQ0UsbUJBQUE7QUFTRjs7QUFQQTtFQUNFLGdCQUFBO0FBVUY7O0FBUkE7RUFDRSxZQUFBO0FBV0Y7O0FBVEE7RUFDRSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUFZRjtBQUNBLGdtRUFBZ21FIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi9cbi5kcmFnLWhhbmRsZTpob3ZlciB7XG4gIGN1cnNvcjogbW92ZTtcbn1cbi5iaXRzdHJlYW0tcm93LWRyYWctaGFuZGxlOmhvdmVyIHtcbiAgY3Vyc29yOiBtb3ZlO1xufVxuLmNkay1kcmFnLXByZXZpZXcge1xuICBtYXJnaW4tbGVmdDogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuLmNkay1kcmFnLXBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMDtcbn1cbi5jZGstZHJhZy1hbmltYXRpbmcge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG59XG4uY2RrLWRyb3AtbGlzdC1kcmFnZ2luZyAuYml0c3RyZWFtLXJvdy1kcmFnLWhhbmRsZSwgLmNkay1kcm9wLWxpc3QtZHJhZ2dpbmcgLmRyYWctaGFuZGxlIHtcbiAgY3Vyc29yOiBncmFiYmluZztcbn1cbjpob3N0IDo6bmctZGVlcCAubGFyZ2VyLXRvb2x0aXAgLnRvb2x0aXAtaW5uZXIge1xuICBtYXgtd2lkdGg6IDUwMHB4O1xufVxuLnRhYmxlLWJvcmRlciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XG59XG46aG9zdCA6Om5nLWRlZXAgLnBhZ2luYXRpb24ge1xuICBwYWRkaW5nLXRvcDogMC41cmVtO1xufVxuLnNjcm9sbGFibGUtdGFibGUge1xuICBvdmVyZmxvdy14OiBhdXRvO1xufVxuLmRpc2FibGVkLW92ZXJsYXkge1xuICBvcGFjaXR5OiAwLjY7XG59XG4ubG9hZGluZy1vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */", "\n\n\n\n\n\n\n\n\n\n\n\n.header-row[_ngcontent-%COMP%] {\n  color: var(--bs-table-dark-color);\n  background-color: var(--bs-table-dark-bg);\n  border-color: var(--bs-table-dark-bg);\n}\n\n.bundle-row[_ngcontent-%COMP%] {\n  color: var(--bs-table-head-color);\n  background-color: var(--bs-table-head-bg);\n  border-color: var(--bs-table-border-color);\n}\n\n.row-element[_ngcontent-%COMP%] {\n  padding: 0.75em;\n  border-bottom: var(--bs-table-border-width) solid var(--bs-table-border-color);\n}\n\n.bitstream-name[_ngcontent-%COMP%] {\n  font-weight: normal;\n}\n\n.table[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW0tZWRpdC1iaXRzdHJlYW0tYnVuZGxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBO0FBQ0E7RUFDRSxpQ0FBQTtFQUNBLHlDQUFBO0VBQ0EscUNBQUE7QUFDRjs7QUFDQTtFQUNFLGlDQUFBO0VBQ0EseUNBQUE7RUFDQSwwQ0FBQTtBQUVGOztBQUFBO0VBQ0UsZUFBQTtFQUNBLDhFQUFBO0FBR0Y7O0FBREE7RUFDRSxtQkFBQTtBQUlGOztBQUZBO0VBQ0UsZ0JBQUE7QUFLRiIsImZpbGUiOiJpdGVtLWVkaXQtYml0c3RyZWFtLWJ1bmRsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovXG4uaGVhZGVyLXJvdyB7XG4gIGNvbG9yOiB2YXIoLS1icy10YWJsZS1kYXJrLWNvbG9yKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnMtdGFibGUtZGFyay1iZyk7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYnMtdGFibGUtZGFyay1iZyk7XG59XG4uYnVuZGxlLXJvdyB7XG4gIGNvbG9yOiB2YXIoLS1icy10YWJsZS1oZWFkLWNvbG9yKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnMtdGFibGUtaGVhZC1iZyk7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYnMtdGFibGUtYm9yZGVyLWNvbG9yKTtcbn1cbi5yb3ctZWxlbWVudCB7XG4gIHBhZGRpbmc6IDAuNzVlbTtcbiAgYm9yZGVyLWJvdHRvbTogdmFyKC0tYnMtdGFibGUtYm9yZGVyLXdpZHRoKSBzb2xpZCB2YXIoLS1icy10YWJsZS1ib3JkZXItY29sb3IpO1xufVxuLmJpdHN0cmVhbS1uYW1lIHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbi50YWJsZSB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaXRlbS1wYWdlL2VkaXQtaXRlbS1wYWdlL2l0ZW0tYml0c3RyZWFtcy9pdGVtLWVkaXQtYml0c3RyZWFtLWJ1bmRsZS9pdGVtLWVkaXQtYml0c3RyZWFtLWJ1bmRsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBO0VBQ0UsaUNBQUE7RUFDQSx5Q0FBQTtFQUNBLHFDQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxpQ0FBQTtFQUNBLHlDQUFBO0VBQ0EsMENBQUE7QUFFRjs7QUFBQTtFQUNFLGVBQUE7RUFDQSw4RUFBQTtBQUdGOztBQURBO0VBQ0UsbUJBQUE7QUFJRjs7QUFGQTtFQUNFLGdCQUFBO0FBS0Y7QUFDQSxnOUNBQWc5QyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovXG4uaGVhZGVyLXJvdyB7XG4gIGNvbG9yOiB2YXIoLS1icy10YWJsZS1kYXJrLWNvbG9yKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnMtdGFibGUtZGFyay1iZyk7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYnMtdGFibGUtZGFyay1iZyk7XG59XG4uYnVuZGxlLXJvdyB7XG4gIGNvbG9yOiB2YXIoLS1icy10YWJsZS1oZWFkLWNvbG9yKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnMtdGFibGUtaGVhZC1iZyk7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYnMtdGFibGUtYm9yZGVyLWNvbG9yKTtcbn1cbi5yb3ctZWxlbWVudCB7XG4gIHBhZGRpbmc6IDAuNzVlbTtcbiAgYm9yZGVyLWJvdHRvbTogdmFyKC0tYnMtdGFibGUtYm9yZGVyLXdpZHRoKSBzb2xpZCB2YXIoLS1icy10YWJsZS1ib3JkZXItY29sb3IpO1xufVxuLmJpdHN0cmVhbS1uYW1lIHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbi50YWJsZSB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 96609:
/*!*****************************************************************************************************!*\
  !*** ./src/app/item-page/edit-item-page/item-collection-mapper/item-collection-mapper.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ItemCollectionMapperComponent: () => (/* binding */ ItemCollectionMapperComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 49966);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 83485);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 27639);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 78374);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 85687);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 84975);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs/operators */ 62997);
/* harmony import */ var _core_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/breadcrumbs/dso-name.service */ 96526);
/* harmony import */ var _core_data_collection_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/data/collection-data.service */ 6983);
/* harmony import */ var _core_data_item_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/data/item-data.service */ 29326);
/* harmony import */ var _core_shared_dspace_object_type_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/shared/dspace-object-type.model */ 13864);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/shared/operators */ 55757);
/* harmony import */ var _core_shared_search_search_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/shared/search/search.service */ 55180);
/* harmony import */ var _core_shared_search_search_configuration_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/shared/search/search-configuration.service */ 68611);
/* harmony import */ var _shared_animations_fade__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/animations/fade */ 50332);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/empty.util */ 82777);
/* harmony import */ var _shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/notifications/notifications.service */ 69472);
/* harmony import */ var _shared_object_select_collection_select_collection_select_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/object-select/collection-select/collection-select.component */ 76353);
/* harmony import */ var _shared_search_models_paginated_search_options_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/search/models/paginated-search-options.model */ 33550);
/* harmony import */ var _shared_search_form_themed_search_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/search-form/themed-search-form.component */ 18016);
/* harmony import */ var _item_page_routing_paths__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../item-page-routing-paths */ 90887);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/router */ 14354);






























const _c0 = ["tabs"];
const _c1 = a0 => ({
  name: a0
});
function ItemCollectionMapperComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 11)(1, "ds-collection-select", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("confirm", function ItemCollectionMapperComponent_ng_template_18_Template_ds_collection_select_confirm_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r2.removeMappings($event));
    })("cancel", function ItemCollectionMapperComponent_ng_template_18_Template_ds_collection_select_cancel_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r2.onCancel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("key", "browse")("dsoRD$", ctx_r2.itemCollectionsRD$)("paginationOptions", (tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 6, ctx_r2.searchOptions$)) == null ? null : tmp_4_0.pagination)("confirmButton", "item.edit.item-mapper.buttons.remove")("cancelButton", "item.edit.item-mapper.cancel")("dangerConfirm", true);
  }
}
function ItemCollectionMapperComponent_ng_template_23_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div")(1, "ds-collection-select", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("confirm", function ItemCollectionMapperComponent_ng_template_23_div_5_Template_ds_collection_select_confirm_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r2.mapCollections($event));
    })("cancel", function ItemCollectionMapperComponent_ng_template_23_div_5_Template_ds_collection_select_cancel_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r2.onCancel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_6_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("key", "map")("dsoRD$", ctx_r2.mappedCollectionsRD$)("paginationOptions", (tmp_5_0 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 6, ctx_r2.searchOptions$)) == null ? null : tmp_5_0.pagination)("sortOptions", (tmp_6_0 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](3, 8, ctx_r2.searchOptions$)) == null ? null : tmp_6_0.sort)("confirmButton", "item.edit.item-mapper.buttons.add")("cancelButton", "item.edit.item-mapper.cancel");
  }
}
function ItemCollectionMapperComponent_ng_template_23_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 1, "item.edit.item-mapper.no-search"), " ");
  }
}
function ItemCollectionMapperComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 13)(1, "div", 14)(2, "ds-search-form", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("submitSearch", function ItemCollectionMapperComponent_ng_template_23_Template_ds_search_form_submitSearch_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r2.performedSearch = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](5, ItemCollectionMapperComponent_ng_template_23_div_5_Template, 4, 10, "div", 16)(6, ItemCollectionMapperComponent_ng_template_23_div_6_Template, 3, 3, "div", 17);
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("query", (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](3, 6, ctx_r2.searchOptions$)) == null ? null : tmp_2_0.query)("currentUrl", "./")("inPlaceSearch", true)("searchPlaceholder", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](4, 8, "item.edit.item-mapper.search-form.placeholder"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r2.performedSearch);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r2.performedSearch);
  }
}
/**
 * Component for mapping collections to an item
 */
class ItemCollectionMapperComponent {
  constructor(route, router, searchConfigService, searchService, notificationsService, itemDataService, collectionDataService, translateService, dsoNameService) {
    this.route = route;
    this.router = router;
    this.searchConfigService = searchConfigService;
    this.searchService = searchService;
    this.notificationsService = notificationsService;
    this.itemDataService = itemDataService;
    this.collectionDataService = collectionDataService;
    this.translateService = translateService;
    this.dsoNameService = dsoNameService;
    /**
     * Track whether at least one search has been performed or not
     * As soon as at least one search has been performed, we display the search results
     */
    this.performedSearch = false;
  }
  ngOnInit() {
    this.itemRD$ = this.route.parent.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)(data => data.dso));
    this.itemName$ = this.itemRD$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.filter)(rd => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_8__.hasValue)(rd)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)(rd => {
      return this.dsoNameService.getName(rd.payload);
    }));
    this.searchOptions$ = this.searchConfigService.paginatedSearchOptions;
    this.loadCollectionLists();
  }
  /**
   * Load itemCollectionsRD$ with a fixed scope to only obtain the collections that own this item
   * Load mappedCollectionsRD$ to only obtain collections that don't own this item
   */
  loadCollectionLists() {
    this.shouldUpdate$ = new rxjs__WEBPACK_IMPORTED_MODULE_18__.BehaviorSubject(true);
    this.itemCollectionsRD$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.combineLatest)(this.itemRD$.pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_4__.getFirstSucceededRemoteDataPayload)()), this.shouldUpdate$).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.switchMap)(([item, shouldUpdate]) => {
      if (shouldUpdate === true) {
        this.shouldUpdate$.next(false);
      }
      return this.collectionDataService.findListByHref(this.itemDataService.getMappedCollectionsEndpoint(item.id), undefined, !shouldUpdate, false).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_4__.getAllSucceededRemoteData)());
    }));
    const owningCollectionRD$ = this.itemRD$.pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_4__.getFirstSucceededRemoteDataPayload)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.switchMap)(item => this.collectionDataService.findOwningCollectionFor(item)), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_4__.getAllSucceededRemoteData)());
    const itemCollectionsAndOptions$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.combineLatest)(this.itemCollectionsRD$, owningCollectionRD$, this.searchOptions$);
    this.mappedCollectionsRD$ = itemCollectionsAndOptions$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.switchMap)(([itemCollectionsRD, owningCollectionRD, searchOptions]) => {
      return this.searchService.search(Object.assign(new _shared_search_models_paginated_search_options_model__WEBPACK_IMPORTED_MODULE_11__.PaginatedSearchOptions(searchOptions), {
        query: this.buildQuery([...itemCollectionsRD.payload.page, owningCollectionRD.payload], searchOptions.query),
        dsoTypes: [_core_shared_dspace_object_type_model__WEBPACK_IMPORTED_MODULE_3__.DSpaceObjectType.COLLECTION]
      }), 10000).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_4__.toDSpaceObjectListRD)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.startWith)(undefined));
    }));
  }
  /**
   * Map the item to the selected collections and display notifications
   * @param {string[]} ids  The list of collection UUID's to map the item to
   */
  mapCollections(ids) {
    const itemIdAndExcludingIds$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.combineLatest)([this.itemRD$.pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_4__.getFirstSucceededRemoteData)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)(rd => rd.payload), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)(item => item.id)), this.itemCollectionsRD$.pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_4__.getFirstSucceededRemoteData)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)(rd => rd.payload.page), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)(collections => collections.map(collection => collection.id)))]);
    // Map the item to the collections found in ids, excluding the collections the item is already mapped to
    const responses$ = itemIdAndExcludingIds$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.switchMap)(([itemId, excludingIds]) => (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.combineLatest)(this.filterIds(ids, excludingIds).map(id => this.itemDataService.mapToCollection(itemId, id).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_4__.getFirstCompletedRemoteData)())))));
    this.showNotifications(responses$, 'item.edit.item-mapper.notifications.add');
  }
  /**
   * Remove the mapping of the item to the selected collections and display notifications
   * @param {string[]} ids  The list of collection UUID's to remove the mapping of the item for
   */
  removeMappings(ids) {
    const responses$ = this.itemRD$.pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_4__.getFirstSucceededRemoteData)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)(itemRD => itemRD.payload.id), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.switchMap)(itemId => (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.combineLatest)(ids.map(id => this.itemDataService.removeMappingFromCollection(itemId, id).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_4__.getFirstCompletedRemoteData)())))));
    this.showNotifications(responses$, 'item.edit.item-mapper.notifications.remove');
  }
  /**
   * Filters ids from a given list of ids, which exist in a second given list of ids
   * @param {string[]} ids          The list of ids to filter out of
   * @param {string[]} excluding    The ids that should be excluded from the first list
   * @returns {string[]}
   */
  filterIds(ids, excluding) {
    return ids.filter(id => excluding.indexOf(id) < 0);
  }
  /**
   * Display notifications
   * @param {Observable<RestResponse[]>} responses$   The responses after adding/removing a mapping
   * @param {string} messagePrefix                    The prefix to build the notification messages with
   */
  showNotifications(responses$, messagePrefix) {
    responses$.subscribe(responses => {
      const successful = responses.filter(response => response.hasSucceeded);
      const unsuccessful = responses.filter(response => response.hasFailed);
      if (successful.length > 0) {
        const successMessages = (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.combineLatest)([this.translateService.get(`${messagePrefix}.success.head`), this.translateService.get(`${messagePrefix}.success.content`, {
          amount: successful.length
        })]);
        successMessages.subscribe(([head, content]) => {
          this.notificationsService.success(head, content);
        });
        this.shouldUpdate$.next(true);
      }
      if (unsuccessful.length > 0) {
        const unsuccessMessages = (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.combineLatest)([this.translateService.get(`${messagePrefix}.error.head`), this.translateService.get(`${messagePrefix}.error.content`, {
          amount: unsuccessful.length
        })]);
        unsuccessMessages.subscribe(([head, content]) => {
          this.notificationsService.error(head, content);
        });
      }
      this.switchToFirstTab();
    });
  }
  /**
   * Clear url parameters on tab change (temporary fix until pagination is improved)
   * @param event
   */
  tabChange(event) {
    this.performedSearch = false;
    this.router.navigateByUrl(this.getCurrentUrl());
  }
  /**
   * Get current url without parameters
   * @returns {string}
   */
  getCurrentUrl() {
    if (this.router.url.indexOf('?') > -1) {
      return this.router.url.substring(0, this.router.url.indexOf('?'));
    }
    return this.router.url;
  }
  /**
   * Build a query to exclude collections from
   * @param collections     The collections their UUIDs
   * @param query           The query to add to it
   */
  buildQuery(collections, query) {
    let result = query;
    for (const collection of collections) {
      result = this.addExcludeCollection(collection.id, result);
    }
    return result;
  }
  /**
   * Add an exclusion of a collection to a query
   * @param collectionId    The collection's UUID
   * @param query           The query to add the exclusion to
   */
  addExcludeCollection(collectionId, query) {
    const excludeQuery = `-search.resourceid:${collectionId}`;
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_8__.isNotEmpty)(query)) {
      return `${query} AND ${excludeQuery}`;
    } else {
      return excludeQuery;
    }
  }
  /**
   * Switch the view to focus on the first tab
   */
  switchToFirstTab() {
    this.tabs.select('browseTab');
  }
  /**
   * When a cancel event is fired, return to the item page
   */
  onCancel() {
    this.itemRD$.pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_4__.getFirstSucceededRemoteData)(), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_4__.getRemoteDataPayload)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.take)(1)).subscribe(item => {
      this.router.navigate([(0,_item_page_routing_paths__WEBPACK_IMPORTED_MODULE_13__.getItemPageRoute)(item)]);
    });
  }
  static {
    this.ɵfac = function ItemCollectionMapperComponent_Factory(t) {
      return new (t || ItemCollectionMapperComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_22__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_22__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_core_shared_search_search_configuration_service__WEBPACK_IMPORTED_MODULE_6__.SearchConfigurationService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_core_shared_search_search_service__WEBPACK_IMPORTED_MODULE_5__.SearchService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_9__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_core_data_item_data_service__WEBPACK_IMPORTED_MODULE_2__.ItemDataService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_core_data_collection_data_service__WEBPACK_IMPORTED_MODULE_1__.CollectionDataService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_core_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_0__.DSONameService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({
      type: ItemCollectionMapperComponent,
      selectors: [["ds-item-collection-mapper"]],
      viewQuery: function ItemCollectionMapperComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.tabs = _t.first);
        }
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵStandaloneFeature"]],
      decls: 25,
      vars: 24,
      consts: [["tabs", "ngbNav"], [1, "container", "mt-2"], [1, "row"], [1, "col-12"], ["id", "item-name", 3, "innerHTML"], ["ngbNav", "", 1, "nav-tabs", 3, "navChange", "destroyOnHide"], ["role", "presentation", "data-test", "browseTab", 3, "ngbNavItem"], ["ngbNavLink", ""], ["ngbNavContent", ""], ["role", "presentation", "data-test", "mapTab", 3, "ngbNavItem"], [3, "ngbNavOutlet"], [1, "mt-2"], [1, "mt-2", 3, "confirm", "cancel", "key", "dsoRD$", "paginationOptions", "confirmButton", "cancelButton", "dangerConfirm"], [1, "row", "mt-2"], [1, "col-12", "col-lg-6"], ["id", "search-form", 3, "submitSearch", "query", "currentUrl", "inPlaceSearch", "searchPlaceholder"], [4, "ngIf"], ["class", "alert alert-info w-100", "role", "alert", 4, "ngIf"], [1, "mt-2", 3, "confirm", "cancel", "key", "dsoRD$", "paginationOptions", "sortOptions", "confirmButton", "cancelButton"], ["role", "alert", 1, "alert", "alert-info", "w-100"]],
      template: function ItemCollectionMapperComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](5, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](6, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](7, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](8, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](11, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](12, "ul", 5, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("navChange", function ItemCollectionMapperComponent_Template_ul_navChange_12_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx.tabChange($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](14, "li", 6)(15, "a", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](17, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](18, ItemCollectionMapperComponent_ng_template_18_Template, 3, 8, "ng-template", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](19, "li", 9)(20, "a", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](21);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](22, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](23, ItemCollectionMapperComponent_ng_template_23_Template, 7, 10, "ng-template", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](24, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          const tabs_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](5, 9, "item.edit.item-mapper.head"));
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](8, 13, "item.edit.item-mapper.item", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](22, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](7, 11, ctx.itemName$))), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsanitizeHtml"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](11, 16, "item.edit.item-mapper.description"));
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("destroyOnHide", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngbNavItem", "browseTab");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](17, 18, "item.edit.item-mapper.tabs.browse"));
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngbNavItem", "mapTab");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](22, 20, "item.edit.item-mapper.tabs.map"));
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngbNavOutlet", tabs_r6);
        }
      },
      dependencies: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__.NgbNavModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__.NgbNavContent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__.NgbNav, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__.NgbNavOutlet, _shared_object_select_collection_select_collection_select_component__WEBPACK_IMPORTED_MODULE_10__.CollectionSelectComponent, _shared_search_form_themed_search_form_component__WEBPACK_IMPORTED_MODULE_12__.ThemedSearchFormComponent, _angular_common__WEBPACK_IMPORTED_MODULE_25__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_25__.NgIf],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW0tY29sbGVjdGlvbi1tYXBwZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUEiLCJmaWxlIjoiaXRlbS1jb2xsZWN0aW9uLW1hcHBlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaXRlbS1wYWdlL2VkaXQtaXRlbS1wYWdlL2l0ZW0tY29sbGVjdGlvbi1tYXBwZXIvaXRlbS1jb2xsZWN0aW9uLW1hcHBlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBLHdsQkFBd2xCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi8iXSwic291cmNlUm9vdCI6IiJ9 */"],
      data: {
        animation: [_shared_animations_fade__WEBPACK_IMPORTED_MODULE_7__.fadeIn, _shared_animations_fade__WEBPACK_IMPORTED_MODULE_7__.fadeInOut]
      },
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 76007:
/*!*******************************************************************************!*\
  !*** ./src/app/item-page/edit-item-page/item-curate/item-curate.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ItemCurateComponent: () => (/* binding */ ItemCurateComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 78374);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 85687);
/* harmony import */ var _core_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/breadcrumbs/dso-name.service */ 96526);
/* harmony import */ var _curation_form_curation_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../curation-form/curation-form.component */ 3040);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/empty.util */ 82777);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 14354);











const _c0 = a0 => ({
  item: a0
});
function ItemCurateComponent_ds_curation_form_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "ds-curation-form", 2);
  }
  if (rf & 2) {
    const dsoRD_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dsoHandle", dsoRD_r1 == null ? null : dsoRD_r1.payload.handle);
  }
}
/**
 * Component for managing a collection's curation tasks
 */
class ItemCurateComponent {
  constructor(route, dsoNameService) {
    this.route = route;
    this.dsoNameService = dsoNameService;
  }
  ngOnInit() {
    this.dsoRD$ = this.route.parent.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(data => data.dso));
    this.itemName$ = this.dsoRD$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.filter)(rd => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_2__.hasValue)(rd)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(rd => {
      return this.dsoNameService.getName(rd.payload);
    }));
  }
  static {
    this.ɵfac = function ItemCurateComponent_Factory(t) {
      return new (t || ItemCurateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_0__.DSONameService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: ItemCurateComponent,
      selectors: [["ds-item-curate"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
      decls: 7,
      vars: 11,
      consts: [[1, "container", "mt-3"], [3, "dsoHandle", 4, "ngIf"], [3, "dsoHandle"]],
      template: function ItemCurateComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, ItemCurateComponent_ds_curation_form_5_Template, 1, 1, "ds-curation-form", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](4, 4, "item.edit.curate.title", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](9, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 2, ctx.itemName$))));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 7, ctx.dsoRD$));
        }
      },
      dependencies: [_curation_form_curation_form_component__WEBPACK_IMPORTED_MODULE_1__.CurationFormComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 14647:
/*!*******************************************************************************!*\
  !*** ./src/app/item-page/edit-item-page/item-delete/item-delete.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ItemDeleteComponent: () => (/* binding */ ItemDeleteComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 83485);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs */ 17796);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs */ 27639);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 84975);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs/operators */ 78374);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs/operators */ 42562);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! rxjs/operators */ 85687);
/* harmony import */ var _core_cache_builders_link_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/cache/builders/link.service */ 1321);
/* harmony import */ var _core_data_entity_type_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/data/entity-type-data.service */ 30077);
/* harmony import */ var _core_data_item_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/data/item-data.service */ 29326);
/* harmony import */ var _core_data_object_updates_object_updates_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/data/object-updates/object-updates.service */ 59033);
/* harmony import */ var _core_data_relationship_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/data/relationship-data.service */ 48833);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/shared/operators */ 55757);
/* harmony import */ var _core_shared_view_mode_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/shared/view-mode.model */ 78448);
/* harmony import */ var _shared_btn_disabled_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/btn-disabled.directive */ 60456);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/empty.util */ 82777);
/* harmony import */ var _shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/notifications/notifications.service */ 69472);
/* harmony import */ var _shared_object_collection_shared_listable_object_listable_object_component_loader_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/object-collection/shared/listable-object/listable-object-component-loader.component */ 17191);
/* harmony import */ var _shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/utils/follow-link-config.model */ 67600);
/* harmony import */ var _shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/utils/var.directive */ 18226);
/* harmony import */ var _item_page_routing_paths__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../item-page-routing-paths */ 90887);
/* harmony import */ var _modify_item_overview_modify_item_overview_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../modify-item-overview/modify-item-overview.component */ 13933);
/* harmony import */ var _simple_item_action_abstract_simple_item_action_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../simple-item-action/abstract-simple-item-action.component */ 26826);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 49966);
// eslint-disable-next-line max-classes-per-file
































const _c0 = a0 => ({
  id: a0
});
const _c1 = a0 => [a0, "edit"];
function ItemDeleteComponent_ng_container_10_div_1_div_3_div_1_div_10_ng_container_1_ds_listable_object_component_loader_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "ds-listable-object-component-loader", 24);
  }
  if (rf & 2) {
    const relatedItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().ngVar;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("object", relatedItem_r6)("viewMode", ctx_r3.viewMode);
  }
}
function ItemDeleteComponent_ng_container_10_div_1_div_3_div_1_div_10_ng_container_1_ng_template_6_ds_listable_object_component_loader_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "ds-listable-object-component-loader", 24);
  }
  if (rf & 2) {
    const relatedItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2).ngVar;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("object", relatedItem_r6)("viewMode", ctx_r3.viewMode);
  }
}
function ItemDeleteComponent_ng_container_10_div_1_div_3_div_1_div_10_ng_container_1_ng_template_6_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div")(1, "div")(2, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const metadata_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", metadata_r9.metadataField, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", metadata_r9.metadataValue.value, " ");
  }
}
function ItemDeleteComponent_ng_container_10_div_1_div_3_div_1_div_10_ng_container_1_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 25)(1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](4, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ItemDeleteComponent_ng_container_10_div_1_div_3_div_1_div_10_ng_container_1_ng_template_6_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r8);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](7);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r3.closeVirtualMetadataModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](7, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](8, ItemDeleteComponent_ng_container_10_div_1_div_3_div_1_div_10_ng_container_1_ng_template_6_ds_listable_object_component_loader_8_Template, 1, 2, "ds-listable-object-component-loader", 19)(9, ItemDeleteComponent_ng_container_10_div_1_div_3_div_1_div_10_ng_container_1_ng_template_6_div_9_Template, 6, 2, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](10, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const relatedItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().ngVar;
    const relationshipDto_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](3, 3, "virtual-metadata.delete-item.modal-head"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", relatedItem_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](10, 5, relationshipDto_r10.virtualMetadata$));
  }
}
function ItemDeleteComponent_ng_container_10_div_1_div_3_div_1_div_10_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, ItemDeleteComponent_ng_container_10_div_1_div_3_div_1_div_10_ng_container_1_ds_listable_object_component_loader_1_Template, 1, 2, "ds-listable-object-component-loader", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "div", 20)(3, "div", 21)(4, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ItemDeleteComponent_ng_container_10_div_1_div_3_div_1_div_10_ng_container_1_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r5);
      const virtualMetadataModal_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵreference"](7);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](6);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r3.openVirtualMetadataModal(virtualMetadataModal_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](5, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](6, ItemDeleteComponent_ng_container_10_div_1_div_3_div_1_div_10_ng_container_1_ng_template_6_Template, 11, 7, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const relatedItem_r6 = ctx.ngVar;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", relatedItem_r6);
  }
}
function ItemDeleteComponent_ng_container_10_div_1_div_3_div_1_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, ItemDeleteComponent_ng_container_10_div_1_div_3_div_1_div_10_ng_container_1_Template, 8, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const relationshipDto_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngVar", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, relationshipDto_r10.relatedItem$));
  }
}
function ItemDeleteComponent_ng_container_10_div_1_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 13)(1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ItemDeleteComponent_ng_container_10_div_1_div_3_div_1_Template_div_click_1_listener() {
      const selected_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r1).ngVar;
      const typeDto_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r3.setSelected(typeDto_r3.relationshipType, !selected_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](3, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "div", 16)(6, "h5", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ItemDeleteComponent_ng_container_10_div_1_div_3_div_1_Template_h5_click_6_listener() {
      const selected_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r1).ngVar;
      const typeDto_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r3.setSelected(typeDto_r3.relationshipType, !selected_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](10, ItemDeleteComponent_ng_container_10_div_1_div_3_div_1_div_10_Template, 3, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](11, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const selected_r2 = ctx.ngVar;
    const typeDto_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("checked", selected_r2)("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](4, 4, ctx_r3.isDeleting$));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](9, 8, ctx_r3.getRelationshipMessageKey(_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](8, 6, typeDto_r3.label$))), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](11, 10, typeDto_r3.relationshipDTOs$));
  }
}
function ItemDeleteComponent_ng_container_10_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, ItemDeleteComponent_ng_container_10_div_1_div_3_div_1_Template, 12, 12, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const typeDto_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngVar", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, typeDto_r3.isSelected$));
  }
}
function ItemDeleteComponent_ng_container_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](3, ItemDeleteComponent_ng_container_10_div_1_div_3_Template, 3, 3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const types_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().ngVar;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 2, "virtual-metadata.delete-item.info"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", types_r11);
  }
}
function ItemDeleteComponent_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, ItemDeleteComponent_ng_container_10_div_1_Template, 4, 4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const types_r11 = ctx.ngVar;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", types_r11 && types_r11.length > 0);
  }
}
/**
 * Data Transfer Object used to prevent the HTML template to call function returning Observables
 */
class RelationshipTypeDTO {}
/**
 * Data Transfer Object used to prevent the HTML template to call function returning Observables
 */
class RelationshipDTO {}
/**
 * Component responsible for rendering the item delete page
 */
class ItemDeleteComponent extends _simple_item_action_abstract_simple_item_action_component__WEBPACK_IMPORTED_MODULE_15__.AbstractSimpleItemActionComponent {
  constructor(route, router, notificationsService, itemDataService, translateService, modalService, objectUpdatesService, relationshipService, entityTypeService, linkService) {
    super(route, router, notificationsService, itemDataService, translateService);
    this.route = route;
    this.router = router;
    this.notificationsService = notificationsService;
    this.itemDataService = itemDataService;
    this.translateService = translateService;
    this.modalService = modalService;
    this.objectUpdatesService = objectUpdatesService;
    this.relationshipService = relationshipService;
    this.entityTypeService = entityTypeService;
    this.linkService = linkService;
    this.messageKey = 'delete';
    /**
     * The view-mode we're currently on
     */
    this.viewMode = _core_shared_view_mode_model__WEBPACK_IMPORTED_MODULE_6__.ViewMode.ListElement;
    /**
     * A list of the relationship types for which this item has relations as an observable.
     * The list doesn't contain duplicates.
     */
    this.typeDTOs$ = new rxjs__WEBPACK_IMPORTED_MODULE_17__.BehaviorSubject([]);
    /**
     * A map which stores the relationships of this item for each type as observable lists
     */
    this.relationships$ = new Map();
    /**
     * A map which stores the related item of each relationship of this item as an observable
     */
    this.relatedItems$ = new Map();
    /**
     * A map which stores the virtual metadata (of the related) item corresponding to each relationship of this item
     * as an observable list
     */
    this.virtualMetadata$ = new Map();
    /**
     * Array to track all subscriptions and unsubscribe them onDestroy
     */
    this.subs = [];
    this.isDeleting$ = new rxjs__WEBPACK_IMPORTED_MODULE_17__.BehaviorSubject(false);
  }
  /**
   * Set up and initialize all fields
   */
  ngOnInit() {
    super.ngOnInit();
    this.url = this.router.url;
    const label = this.item.firstMetadataValue('dspace.entity.type');
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_8__.isNotEmpty)(label)) {
      this.subs.push(this.entityTypeService.getEntityTypeByLabel(label).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_5__.getFirstSucceededRemoteData)(), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_5__.getRemoteDataPayload)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.switchMap)(entityType => this.entityTypeService.getEntityTypeRelationships(entityType.id)), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_5__.getFirstSucceededRemoteData)(), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_5__.getRemoteDataPayload)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.map)(relationshipTypes => relationshipTypes.page), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.switchMap)(types => {
        if (types.length === 0) {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_20__.of)(types);
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.combineLatest)(types.map(type => this.getRelationships(type))).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.map)(relationships => types.reduce((includedTypes, type, index) => {
          if (!includedTypes.some(includedType => includedType.id === type.id) && !(relationships[index].length === 0)) {
            return [...includedTypes, type];
          } else {
            return includedTypes;
          }
        }, [])));
      })).subscribe(types => this.typeDTOs$.next(types.map(relationshipType => Object.assign(new RelationshipTypeDTO(), {
        relationshipType: relationshipType,
        isSelected$: this.isSelected(relationshipType),
        label$: this.getLabel(relationshipType),
        relationshipDTOs$: this.getRelationships(relationshipType).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.map)(relationships => relationships.map(relationship => Object.assign(new RelationshipDTO(), {
          relationship: relationship,
          relatedItem$: this.getRelatedItem(relationship),
          virtualMetadata$: this.getVirtualMetadata(relationship)
        }))))
      })))));
    }
    this.subs.push(this.typeDTOs$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.take)(1)).subscribe(types => this.objectUpdatesService.initialize(this.url, types.map(relationshipTypeDto => relationshipTypeDto.relationshipType), this.item.lastModified)));
  }
  /**
   * Open the modal which lists the virtual metadata of a relation
   * @param content the html content of the modal
   */
  openVirtualMetadataModal(content) {
    this.modalRef = this.modalService.open(content);
  }
  /**
   * Close the modal which lists the virtual metadata of a relation
   */
  closeVirtualMetadataModal() {
    this.modalRef.close();
  }
  /**
   * Get the i18n message key for a relationship
   * @param label   The relationship type's label
   */
  getRelationshipMessageKey(label) {
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_8__.hasValue)(label) && label.indexOf('Of') > -1) {
      return `relationships.${label.substring(0, label.indexOf('Of') + 2)}`;
    } else {
      return label;
    }
  }
  /**
   * Get the relationship type label relevant for this item as an observable
   * @param relationshipType  the relationship type to get the label for
   */
  getLabel(relationshipType) {
    return this.getRelationships(relationshipType).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.switchMap)(relationships => this.isLeftItem(relationships[0]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.map)(isLeftItem => isLeftItem ? relationshipType.leftwardType : relationshipType.rightwardType))));
  }
  /**
   * Get the relationships of this item with a given type as an observable
   * @param relationshipType  the relationship type to filter the item's relationships on
   */
  getRelationships(relationshipType) {
    if (!this.relationships$.has(relationshipType)) {
      this.relationships$.set(relationshipType, this.relationshipService.getItemRelationshipsArray(this.item).pipe(
      // filter on type
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.switchMap)(relationships => (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.combineLatest)(relationships.map(relationship => this.getRelationshipType(relationship))).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.defaultIfEmpty)([]), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.map)(types => relationships.filter((relationship, index) => relationshipType.id === types[index].id))))));
    }
    return this.relationships$.get(relationshipType);
  }
  /**
   * Get the type of a given relationship as an observable
   * @param relationship  the relationship to get the type for
   */
  getRelationshipType(relationship) {
    this.linkService.resolveLinks(relationship, (0,_shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_11__.followLink)('relationshipType'), (0,_shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_11__.followLink)('leftItem', undefined, (0,_shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_11__.followLink)('accessStatus')), (0,_shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_11__.followLink)('rightItem', undefined, (0,_shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_11__.followLink)('accessStatus')));
    return relationship.relationshipType.pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_5__.getFirstSucceededRemoteData)(), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_5__.getRemoteDataPayload)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_24__.filter)(relationshipType => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_8__.hasValue)(relationshipType) && (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_8__.isNotEmpty)(relationshipType.uuid)));
  }
  /**
   * Get the item this item is related to through a given relationship as an observable
   * @param relationship  the relationship to get the other item for
   */
  getRelatedItem(relationship) {
    if (!this.relatedItems$.has(relationship)) {
      this.relatedItems$.set(relationship, this.isLeftItem(relationship).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.switchMap)(isLeftItem => isLeftItem ? relationship.rightItem : relationship.leftItem), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_5__.getFirstSucceededRemoteData)(), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_5__.getRemoteDataPayload)()));
    }
    return this.relatedItems$.get(relationship);
  }
  /**
   * Get the virtual metadata for a given relationship of the related item.
   * @param relationship  the relationship to get the virtual metadata for
   */
  getVirtualMetadata(relationship) {
    if (!this.virtualMetadata$.has(relationship)) {
      this.virtualMetadata$.set(relationship, this.getRelatedItem(relationship).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.map)(relatedItem => Object.entries(relatedItem.metadata).map(([key, value]) => value.filter(metadata => metadata.authority && metadata.authority.endsWith(relationship.id)).map(metadata => {
        return {
          metadataField: key,
          metadataValue: metadata
        };
      })).reduce((previous, current) => previous.concat(current)))));
    }
    return this.virtualMetadata$.get(relationship);
  }
  /**
   * Check whether this item is the left item of a given relationship, as an observable boolean
   * @param relationship  the relationship for which to check whether this item is the left item
   */
  isLeftItem(relationship) {
    return relationship.leftItem.pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_5__.getFirstSucceededRemoteData)(), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_5__.getRemoteDataPayload)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_24__.filter)(item => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_8__.hasValue)(item) && (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_8__.isNotEmpty)(item.uuid)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.map)(leftItem => leftItem.uuid === this.item.uuid));
  }
  /**
   * Check whether a given relationship type is selected to save the corresponding virtual metadata
   * @param type  the relationship type for which to check whether it is selected
   */
  isSelected(type) {
    return this.objectUpdatesService.isSelectedVirtualMetadata(this.url, this.item.uuid, type.uuid);
  }
  /**
   * Select/deselect a given relationship type to save the corresponding virtual metadata
   * @param type      the relationship type to select/deselect
   * @param selected  whether the type should be selected
   */
  setSelected(type, selected) {
    if (this.isDeleting$.value === false) {
      this.objectUpdatesService.setSelectedVirtualMetadata(this.url, this.item.uuid, type.uuid, selected);
    }
  }
  /**
   * Perform the delete operation
   */
  performAction() {
    this.isDeleting$.next(true);
    this.subs.push(this.typeDTOs$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.switchMap)(types => (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.combineLatest)(types.map(type => type.isSelected$)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.defaultIfEmpty)([]), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.map)(selection => types.filter((type, index) => selection[index])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.map)(selectedDtoTypes => selectedDtoTypes.map(typeDto => typeDto.relationshipType.id)))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.switchMap)(types => this.itemDataService.delete(this.item.id, types)), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_5__.getFirstCompletedRemoteData)()).subscribe(rd => {
      this.notify(rd.hasSucceeded);
    }));
  }
  /**
   * When the item is successfully delete, navigate to the homepage, otherwise navigate back to the item edit page
   * @param succeeded
   */
  notify(succeeded) {
    if (succeeded) {
      this.notificationsService.success(this.translateService.get('item.edit.' + this.messageKey + '.success'));
      void this.router.navigate(['']);
    } else {
      this.notificationsService.error(this.translateService.get('item.edit.' + this.messageKey + '.error'));
      void this.router.navigate([(0,_item_page_routing_paths__WEBPACK_IMPORTED_MODULE_13__.getItemEditRoute)(this.item)]);
    }
  }
  /**
   * Unsubscribe from all subscriptions
   */
  ngOnDestroy() {
    this.subs.filter(sub => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_8__.hasValue)(sub)).forEach(sub => sub.unsubscribe());
  }
  static {
    this.ɵfac = function ItemDeleteComponent_Factory(t) {
      return new (t || ItemDeleteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_25__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_25__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_9__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_core_data_item_data_service__WEBPACK_IMPORTED_MODULE_2__.ItemDataService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_27__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_core_data_object_updates_object_updates_service__WEBPACK_IMPORTED_MODULE_3__.ObjectUpdatesService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_core_data_relationship_data_service__WEBPACK_IMPORTED_MODULE_4__.RelationshipDataService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_core_data_entity_type_data_service__WEBPACK_IMPORTED_MODULE_1__.EntityTypeDataService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_core_cache_builders_link_service__WEBPACK_IMPORTED_MODULE_0__.LinkService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineComponent"]({
      type: ItemDeleteComponent,
      selectors: [["ds-item-delete"]],
      inputs: {
        url: "url"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵStandaloneFeature"]],
      decls: 21,
      vars: 28,
      consts: [["virtualMetadataModal", ""], [1, "container"], [1, "row"], [1, "col-12"], [3, "item"], [4, "ngVar"], [1, "space-children-mr"], [1, "btn", "btn-outline-secondary", "perform-action", 3, "click", "dsBtnDisabled"], [1, "btn", "btn-outline-secondary", "cancel", 3, "dsBtnDisabled", "routerLink"], ["class", "mb-4", 4, "ngIf"], [1, "mb-4"], ["class", "mb-4", 4, "ngFor", "ngForOf"], ["class", "d-flex flex-row", 4, "ngVar"], [1, "d-flex", "flex-row"], [1, "m-2", 3, "click"], ["type", "checkbox", 3, "checked", "disabled"], [1, "flex-column", "flex-grow-1"], [3, "click"], ["class", "d-flex flex-row", 4, "ngFor", "ngForOf"], [3, "object", "viewMode", 4, "ngIf"], [1, "ml-auto"], [1, "btn-group"], [1, "btn", "btn-outline-info", "btn-sm", 3, "click"], [1, "fas", "fa-info", "fa-fw"], [3, "object", "viewMode"], [1, "thumb-font-1"], [1, "modal-header"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [4, "ngFor", "ngForOf"], [1, "font-weight-bold"]],
      template: function ItemDeleteComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](5, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](6, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](8, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](9, "ds-modify-item-overview", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](10, ItemDeleteComponent_ng_container_10_Template, 2, 1, "ng-container", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](11, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](12, "div", 6)(13, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](14, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ItemDeleteComponent_Template_button_click_13_listener() {
            return ctx.performAction();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](16, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](17, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](18, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](20, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind2"](5, 9, ctx.headerMessage, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction1"](24, _c0, ctx.item.handle)));
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](8, 12, ctx.descriptionMessage));
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("item", ctx.item);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngVar", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](11, 14, ctx.typeDTOs$));
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("dsBtnDisabled", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](14, 16, ctx.isDeleting$));
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](16, 18, ctx.confirmMessage), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("dsBtnDisabled", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](18, 20, ctx.isDeleting$))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction1"](26, _c1, ctx.itemPageRoute));
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](20, 22, ctx.cancelMessage), " ");
        }
      },
      dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__.TranslatePipe, _shared_object_collection_shared_listable_object_listable_object_component_loader_component__WEBPACK_IMPORTED_MODULE_10__.ListableObjectComponentLoaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_28__.NgIf, _modify_item_overview_modify_item_overview_component__WEBPACK_IMPORTED_MODULE_14__.ModifyItemOverviewComponent, _angular_common__WEBPACK_IMPORTED_MODULE_28__.AsyncPipe, _shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_12__.VarDirective, _angular_common__WEBPACK_IMPORTED_MODULE_28__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_25__.RouterLink, _shared_btn_disabled_directive__WEBPACK_IMPORTED_MODULE_7__.BtnDisabledDirective],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 97527:
/*!***************************************************************************!*\
  !*** ./src/app/item-page/edit-item-page/item-move/item-move.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ItemMoveComponent: () => (/* binding */ ItemMoveComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 56106);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 49966);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 84975);
/* harmony import */ var _core_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/breadcrumbs/dso-name.service */ 96526);
/* harmony import */ var _core_data_item_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/data/item-data.service */ 29326);
/* harmony import */ var _core_data_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/data/request.service */ 32473);
/* harmony import */ var _core_shared_dspace_object_type_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/shared/dspace-object-type.model */ 13864);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/shared/operators */ 55757);
/* harmony import */ var _core_shared_search_search_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/shared/search/search.service */ 55180);
/* harmony import */ var _shared_btn_disabled_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/btn-disabled.directive */ 60456);
/* harmony import */ var _shared_dso_selector_dso_selector_authorized_collection_selector_authorized_collection_selector_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/dso-selector/dso-selector/authorized-collection-selector/authorized-collection-selector.component */ 76052);
/* harmony import */ var _shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/notifications/notifications.service */ 69472);
/* harmony import */ var _shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/utils/follow-link-config.model */ 67600);
/* harmony import */ var _item_page_routing_paths__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../item-page-routing-paths */ 90887);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 90310);



























const _c0 = a0 => ({
  id: a0
});
const _c1 = a0 => ({
  type: a0
});
const _c2 = a0 => [a0, "edit"];
function ItemMoveComponent_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](1, 1, "item.edit.move.inheritpolicies.tooltip"), " ");
  }
}
function ItemMoveComponent_span_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "item.edit.move.save-button"), " ");
  }
}
function ItemMoveComponent_span_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "item.edit.move.processing"), " ");
  }
}
/**
 * Component that handles the moving of an item to a different collection
 */
class ItemMoveComponent {
  constructor(route, router, notificationsService, itemDataService, searchService, translateService, requestService, dsoNameService) {
    this.route = route;
    this.router = router;
    this.notificationsService = notificationsService;
    this.itemDataService = itemDataService;
    this.searchService = searchService;
    this.translateService = translateService;
    this.requestService = requestService;
    this.dsoNameService = dsoNameService;
    /**
     * TODO: There is currently no backend support to change the owningCollection and inherit policies,
     * TODO: when this is added, the inherit policies option should be used.
     */
    this.selectorType = _core_shared_dspace_object_type_model__WEBPACK_IMPORTED_MODULE_3__.DSpaceObjectType.COLLECTION;
    this.inheritPolicies = false;
    this.canSubmit = false;
    this.processing = false;
    this.COLLECTIONS = [_core_shared_dspace_object_type_model__WEBPACK_IMPORTED_MODULE_3__.DSpaceObjectType.COLLECTION];
  }
  ngOnInit() {
    this.itemRD$ = this.route.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(data => data.dso), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_4__.getFirstSucceededRemoteData)());
    this.itemPageRoute$ = this.itemRD$.pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_4__.getAllSucceededRemoteDataPayload)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(item => (0,_item_page_routing_paths__WEBPACK_IMPORTED_MODULE_10__.getItemPageRoute)(item)));
    this.itemRD$.subscribe(rd => {
      this.item = rd.payload;
    });
    this.itemRD$.pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_4__.getFirstSucceededRemoteData)(), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_4__.getRemoteDataPayload)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.switchMap)(item => item.owningCollection), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_4__.getFirstSucceededRemoteData)(), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_4__.getRemoteDataPayload)()).subscribe(collection => {
      this.originalCollection = collection;
    });
  }
  /**
   * Set the collection name and id based on the selected value
   * @param data - obtained from the ds-input-suggestions component
   */
  selectDso(data) {
    this.selectedCollection = data;
    this.selectedCollectionName = this.dsoNameService.getName(data);
    this.canSubmit = true;
  }
  /**
   * @returns {string} the current URL
   */
  getCurrentUrl() {
    return this.router.url;
  }
  /**
   * Moves the item to a new collection based on the selected collection
   */
  moveToCollection() {
    this.processing = true;
    const move$ = this.itemDataService.moveToCollection(this.item.id, this.selectedCollection, this.inheritPolicies).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_4__.getFirstCompletedRemoteData)());
    move$.subscribe(response => {
      if (response.hasSucceeded) {
        this.notificationsService.success(this.translateService.get('item.edit.move.success'));
      } else {
        this.notificationsService.error(this.translateService.get('item.edit.move.error'));
      }
    });
    move$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.switchMap)(() => this.requestService.setStaleByHrefSubstring(this.item.id)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.switchMap)(() => this.itemDataService.findById(this.item.id, false, true, (0,_shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_9__.followLink)('owningCollection'))), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_4__.getFirstCompletedRemoteData)()).subscribe(() => {
      this.processing = false;
      this.router.navigate([(0,_item_page_routing_paths__WEBPACK_IMPORTED_MODULE_10__.getItemEditRoute)(this.item)]);
    });
  }
  discard() {
    this.selectedCollection = null;
    this.canSubmit = false;
  }
  get canMove() {
    return this.canSubmit && this.selectedCollection?.id !== this.originalCollection.id;
  }
  static {
    this.ɵfac = function ItemMoveComponent_Factory(t) {
      return new (t || ItemMoveComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_8__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_core_data_item_data_service__WEBPACK_IMPORTED_MODULE_1__.ItemDataService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_core_shared_search_search_service__WEBPACK_IMPORTED_MODULE_5__.SearchService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_core_data_request_service__WEBPACK_IMPORTED_MODULE_2__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_core_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_0__.DSONameService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
      type: ItemMoveComponent,
      selectors: [["ds-item-move"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵStandaloneFeature"]],
      decls: 46,
      vars: 44,
      consts: [["tooltipContent", ""], [1, "container"], [1, "row"], [1, "col-12"], [1, "card", "mb-3"], [1, "card-header"], [1, "card-body"], [3, "onSelect", "types", "currentDSOId"], ["for", "inheritPoliciesCheckbox"], ["type", "checkbox", "name", "tc", "id", "inheritPoliciesCheckbox", 3, "ngModelChange", "ngModel", "ngbTooltip"], [1, "button-row", "bottom"], [1, "float-right", "space-children-mr"], [1, "btn", "btn-outline-secondary", 3, "routerLink"], [1, "fas", "fa-arrow-left"], [1, "btn", "btn-primary", 3, "click", "dsBtnDisabled"], [4, "ngIf"], [1, "btn", "btn-danger", 3, "click", "dsBtnDisabled"], [1, "fas", "fa-times"], [1, "fas", "fa-save"], [1, "fas", "fa-circle-notch", "fa-spin"]],
      template: function ItemMoveComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](5, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](6, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](9, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "div", 2)(11, "div", 3)(12, "div", 4)(13, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](15, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](16, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](17, "div", 6)(18, "ds-authorized-collection-selector", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("onSelect", function ItemMoveComponent_Template_ds_authorized_collection_selector_onSelect_18_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx.selectDso($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](19, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](20, "div", 2)(21, "div", 3)(22, "p")(23, "label", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](24, ItemMoveComponent_ng_template_24_Template, 2, 3, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](26, "input", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayListener"]("ngModelChange", function ItemMoveComponent_Template_input_ngModelChange_26_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayBindingSet"](ctx.inheritPolicies, $event) || (ctx.inheritPolicies = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](27);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](28, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](29, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](30);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](31, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](32, "div", 10)(33, "div", 11)(34, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](35, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](36, "i", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](37);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](38, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](39, "button", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ItemMoveComponent_Template_button_click_39_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx.moveToCollection());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](40, ItemMoveComponent_span_40_Template, 4, 3, "span", 15)(41, ItemMoveComponent_span_41_Template, 4, 3, "span", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](42, "button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ItemMoveComponent_Template_button_click_42_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx.discard());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](43, "i", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](44);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](45, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()();
        }
        if (rf & 2) {
          let tmp_1_0;
          const tooltipContent_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](25);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](6, 18, "item.edit.move.head", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](38, _c0, (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](5, 16, ctx.itemRD$)) == null ? null : tmp_1_0.payload == null ? null : tmp_1_0.payload.handle)));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](9, 21, "item.edit.move.description"));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](16, 25, "dso-selector.placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](40, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](15, 23, "dso-selector.placeholder.type.collection"))));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("types", ctx.COLLECTIONS)("currentDSOId", ctx.selectedCollection ? ctx.selectedCollection.id : ctx.originalCollection.id);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayProperty"]("ngModel", ctx.inheritPolicies);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngbTooltip", tooltipContent_r2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](28, 28, "item.edit.move.inheritpolicies.checkbox"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](31, 30, "item.edit.move.inheritpolicies.description"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](42, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](35, 32, ctx.itemPageRoute$)));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](38, 34, "item.edit.move.cancel"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("dsBtnDisabled", !ctx.canMove);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx.processing);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.processing);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("dsBtnDisabled", !ctx.canSubmit);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](45, 36, "item.edit.move.discard-button"), " ");
        }
      },
      dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslatePipe, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbTooltip, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgModel, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_18__.AsyncPipe, _shared_dso_selector_dso_selector_authorized_collection_selector_authorized_collection_selector_component__WEBPACK_IMPORTED_MODULE_7__.AuthorizedCollectionSelectorComponent, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _shared_btn_disabled_directive__WEBPACK_IMPORTED_MODULE_6__.BtnDisabledDirective],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 37223:
/*!*************************************************************************************!*\
  !*** ./src/app/item-page/edit-item-page/item-operation/item-operation.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ItemOperationComponent: () => (/* binding */ ItemOperationComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 49966);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var _shared_btn_disabled_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/btn-disabled.directive */ 60456);
/* harmony import */ var _itemOperation_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./itemOperation.model */ 87134);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);









function ItemOperationComponent_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span")(1, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dsBtnDisabled", ctx_r0.operation.disabled)("routerLink", ctx_r0.operation.operationUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 4, "item.edit.tabs.status.buttons." + ctx_r0.operation.operationKey + ".button"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 6, "item.edit.tabs.status.buttons." + ctx_r0.operation.operationKey + ".button"), " ");
  }
}
function ItemOperationComponent_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 4, "item.edit.tabs.status.buttons.unauthorized"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dsBtnDisabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 6, "item.edit.tabs.status.buttons." + ctx_r0.operation.operationKey + ".button"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 8, "item.edit.tabs.status.buttons." + ctx_r0.operation.operationKey + ".button"), " ");
  }
}
/**
 * Operation that can be performed on an item
 */
class ItemOperationComponent {
  static {
    this.ɵfac = function ItemOperationComponent_Factory(t) {
      return new (t || ItemOperationComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ItemOperationComponent,
      selectors: [["ds-item-operation"]],
      inputs: {
        operation: "operation"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 7,
      vars: 5,
      consts: [[1, "col-12", "col-md-3", "h-auto", "float-left", "d-flex", "action-label"], [1, "justify-content-center", "align-self-center", "font-weight-bold"], [1, "col-12", "col-md-9", "float-left", "action-button"], [4, "ngIf"], [3, "ngbTooltip", 4, "ngIf"], [1, "btn", "btn-outline-primary", 3, "dsBtnDisabled", "routerLink"], [3, "ngbTooltip"], [1, "btn", "btn-outline-primary", 3, "dsBtnDisabled"]],
      template: function ItemOperationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "span", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, ItemOperationComponent_span_5_Template, 5, 8, "span", 3)(6, ItemOperationComponent_span_6_Template, 6, 10, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 3, "item.edit.tabs.status.buttons." + ctx.operation.operationKey + ".label"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.operation.authorized);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.operation.authorized);
        }
      },
      dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbTooltipModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbTooltip, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _shared_btn_disabled_directive__WEBPACK_IMPORTED_MODULE_0__.BtnDisabledDirective],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 87134:
/*!********************************************************************************!*\
  !*** ./src/app/item-page/edit-item-page/item-operation/itemOperation.model.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ItemOperation: () => (/* binding */ ItemOperation)
/* harmony export */ });
/**
 *  Represents an item operation used on the edit item page with a key, an operation URL to which will be navigated
 *  when performing the action and an option to disable the operation.
 */
class ItemOperation {
  constructor(operationKey, operationUrl, featureID, disabled = false, authorized = true) {
    this.operationKey = operationKey;
    this.operationUrl = operationUrl;
    this.featureID = featureID;
    this.authorized = authorized;
    this.setDisabled(disabled);
  }
  /**
   * Set whether this operation should be disabled
   * @param disabled
   */
  setDisabled(disabled) {
    this.disabled = disabled;
  }
  /**
   * Set whether this operation is authorized
   * @param authorized
   */
  setAuthorized(authorized) {
    this.authorized = authorized;
  }
}

/***/ }),

/***/ 58820:
/*!****************************************************************************!*\
  !*** ./src/app/item-page/edit-item-page/item-page-access-control.guard.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   itemPageAccessControlGuard: () => (/* binding */ itemPageAccessControlGuard)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 17796);
/* harmony import */ var _core_data_feature_authorization_feature_authorization_guard_dso_page_single_feature_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/data/feature-authorization/feature-authorization-guard/dso-page-single-feature.guard */ 6056);
/* harmony import */ var _core_data_feature_authorization_feature_id__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/data/feature-authorization/feature-id */ 3970);
/* harmony import */ var _item_page_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../item-page.resolver */ 35925);




/**
 * Guard for preventing unauthorized access to certain {@link Item} pages requiring administrator rights
 */
const itemPageAccessControlGuard = (0,_core_data_feature_authorization_feature_authorization_guard_dso_page_single_feature_guard__WEBPACK_IMPORTED_MODULE_0__.dsoPageSingleFeatureGuard)(() => _item_page_resolver__WEBPACK_IMPORTED_MODULE_2__.itemPageResolver, () => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(_core_data_feature_authorization_feature_id__WEBPACK_IMPORTED_MODULE_1__.FeatureID.AdministratorOf));

/***/ }),

/***/ 69370:
/*!************************************************************************!*\
  !*** ./src/app/item-page/edit-item-page/item-page-bitstreams.guard.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   itemPageBitstreamsGuard: () => (/* binding */ itemPageBitstreamsGuard)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 17796);
/* harmony import */ var _core_data_feature_authorization_feature_authorization_guard_dso_page_single_feature_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/data/feature-authorization/feature-authorization-guard/dso-page-single-feature.guard */ 6056);
/* harmony import */ var _core_data_feature_authorization_feature_id__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/data/feature-authorization/feature-id */ 3970);
/* harmony import */ var _item_page_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../item-page.resolver */ 35925);




/**
 * Guard for preventing unauthorized access to certain {@link Item} pages requiring manage bitstreams rights
 * Check manage bitstreams authorization rights
 */
const itemPageBitstreamsGuard = (0,_core_data_feature_authorization_feature_authorization_guard_dso_page_single_feature_guard__WEBPACK_IMPORTED_MODULE_0__.dsoPageSingleFeatureGuard)(() => _item_page_resolver__WEBPACK_IMPORTED_MODULE_2__.itemPageResolver, () => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(_core_data_feature_authorization_feature_id__WEBPACK_IMPORTED_MODULE_1__.FeatureID.CanManageBitstreamBundles));

/***/ }),

/***/ 79184:
/*!*******************************************************************************!*\
  !*** ./src/app/item-page/edit-item-page/item-page-collection-mapper.guard.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   itemPageCollectionMapperGuard: () => (/* binding */ itemPageCollectionMapperGuard)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 17796);
/* harmony import */ var _core_data_feature_authorization_feature_authorization_guard_dso_page_single_feature_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/data/feature-authorization/feature-authorization-guard/dso-page-single-feature.guard */ 6056);
/* harmony import */ var _core_data_feature_authorization_feature_id__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/data/feature-authorization/feature-id */ 3970);
/* harmony import */ var _item_page_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../item-page.resolver */ 35925);




/**
 * Guard for preventing unauthorized access to certain {@link Item} pages requiring manage mappings rights
 * Check manage mappings authorization rights
 */
const itemPageCollectionMapperGuard = (0,_core_data_feature_authorization_feature_authorization_guard_dso_page_single_feature_guard__WEBPACK_IMPORTED_MODULE_0__.dsoPageSingleFeatureGuard)(() => _item_page_resolver__WEBPACK_IMPORTED_MODULE_2__.itemPageResolver, () => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(_core_data_feature_authorization_feature_id__WEBPACK_IMPORTED_MODULE_1__.FeatureID.CanManageMappings));

/***/ }),

/***/ 66116:
/*!********************************************************************!*\
  !*** ./src/app/item-page/edit-item-page/item-page-curate.guard.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   itemPageCurateGuard: () => (/* binding */ itemPageCurateGuard)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 17796);
/* harmony import */ var _core_data_feature_authorization_feature_authorization_guard_dso_page_single_feature_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/data/feature-authorization/feature-authorization-guard/dso-page-single-feature.guard */ 6056);
/* harmony import */ var _core_data_feature_authorization_feature_id__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/data/feature-authorization/feature-id */ 3970);
/* harmony import */ var _item_page_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../item-page.resolver */ 35925);




/**
 * Guard for preventing unauthorized access to certain {@link Item} pages requiring administrator rights
 */
const itemPageCurateGuard = (0,_core_data_feature_authorization_feature_authorization_guard_dso_page_single_feature_guard__WEBPACK_IMPORTED_MODULE_0__.dsoPageSingleFeatureGuard)(() => _item_page_resolver__WEBPACK_IMPORTED_MODULE_2__.itemPageResolver, () => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(_core_data_feature_authorization_feature_id__WEBPACK_IMPORTED_MODULE_1__.FeatureID.AdministratorOf));

/***/ }),

/***/ 84557:
/*!********************************************************************!*\
  !*** ./src/app/item-page/edit-item-page/item-page-delete.guard.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   itemPageDeleteGuard: () => (/* binding */ itemPageDeleteGuard)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 17796);
/* harmony import */ var _core_data_feature_authorization_feature_authorization_guard_dso_page_single_feature_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/data/feature-authorization/feature-authorization-guard/dso-page-single-feature.guard */ 6056);
/* harmony import */ var _core_data_feature_authorization_feature_id__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/data/feature-authorization/feature-id */ 3970);
/* harmony import */ var _item_page_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../item-page.resolver */ 35925);




/**
 * Guard for preventing unauthorized access to certain {@link Item} pages requiring specific authorizations.
 * Checks authorization rights for deleting items.
 */
const itemPageDeleteGuard = (0,_core_data_feature_authorization_feature_authorization_guard_dso_page_single_feature_guard__WEBPACK_IMPORTED_MODULE_0__.dsoPageSingleFeatureGuard)(() => _item_page_resolver__WEBPACK_IMPORTED_MODULE_2__.itemPageResolver, () => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(_core_data_feature_authorization_feature_id__WEBPACK_IMPORTED_MODULE_1__.FeatureID.CanDelete));

/***/ }),

/***/ 41579:
/*!*********************************************************************************!*\
  !*** ./src/app/item-page/edit-item-page/item-page-edit-authorizations.guard.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   itemPageEditAuthorizationsGuard: () => (/* binding */ itemPageEditAuthorizationsGuard)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 17796);
/* harmony import */ var _core_data_feature_authorization_feature_authorization_guard_dso_page_single_feature_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/data/feature-authorization/feature-authorization-guard/dso-page-single-feature.guard */ 6056);
/* harmony import */ var _core_data_feature_authorization_feature_id__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/data/feature-authorization/feature-id */ 3970);
/* harmony import */ var _item_page_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../item-page.resolver */ 35925);




/**
 * Guard for preventing unauthorized access to certain {@link Item} pages requiring specific authorizations.
 * Checks authorization rights for managing policies.
 */
const itemPageEditAuthorizationsGuard = (0,_core_data_feature_authorization_feature_authorization_guard_dso_page_single_feature_guard__WEBPACK_IMPORTED_MODULE_0__.dsoPageSingleFeatureGuard)(() => _item_page_resolver__WEBPACK_IMPORTED_MODULE_2__.itemPageResolver, () => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(_core_data_feature_authorization_feature_id__WEBPACK_IMPORTED_MODULE_1__.FeatureID.CanManagePolicies));

/***/ }),

/***/ 96035:
/*!**********************************************************************!*\
  !*** ./src/app/item-page/edit-item-page/item-page-metadata.guard.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   itemPageMetadataGuard: () => (/* binding */ itemPageMetadataGuard)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 17796);
/* harmony import */ var _core_data_feature_authorization_feature_authorization_guard_dso_page_single_feature_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/data/feature-authorization/feature-authorization-guard/dso-page-single-feature.guard */ 6056);
/* harmony import */ var _core_data_feature_authorization_feature_id__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/data/feature-authorization/feature-id */ 3970);
/* harmony import */ var _item_page_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../item-page.resolver */ 35925);




/**
 * Guard for preventing unauthorized access to certain {@link Item} pages requiring edit metadata rights
 * Check edit metadata authorization rights
 */
const itemPageMetadataGuard = (0,_core_data_feature_authorization_feature_authorization_guard_dso_page_single_feature_guard__WEBPACK_IMPORTED_MODULE_0__.dsoPageSingleFeatureGuard)(() => _item_page_resolver__WEBPACK_IMPORTED_MODULE_2__.itemPageResolver, () => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(_core_data_feature_authorization_feature_id__WEBPACK_IMPORTED_MODULE_1__.FeatureID.CanEditMetadata));

/***/ }),

/***/ 92171:
/*!******************************************************************!*\
  !*** ./src/app/item-page/edit-item-page/item-page-move.guard.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   itemPageMoveGuard: () => (/* binding */ itemPageMoveGuard)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 17796);
/* harmony import */ var _core_data_feature_authorization_feature_authorization_guard_dso_page_single_feature_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/data/feature-authorization/feature-authorization-guard/dso-page-single-feature.guard */ 6056);
/* harmony import */ var _core_data_feature_authorization_feature_id__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/data/feature-authorization/feature-id */ 3970);
/* harmony import */ var _item_page_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../item-page.resolver */ 35925);




/**
 * Guard for preventing unauthorized access to certain {@link Item} pages requiring specific authorizations.
 * Checks authorization rights for moving items.
 */
const itemPageMoveGuard = (0,_core_data_feature_authorization_feature_authorization_guard_dso_page_single_feature_guard__WEBPACK_IMPORTED_MODULE_0__.dsoPageSingleFeatureGuard)(() => _item_page_resolver__WEBPACK_IMPORTED_MODULE_2__.itemPageResolver, () => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(_core_data_feature_authorization_feature_id__WEBPACK_IMPORTED_MODULE_1__.FeatureID.CanMove));

/***/ }),

/***/ 27933:
/*!*********************************************************************!*\
  !*** ./src/app/item-page/edit-item-page/item-page-private.guard.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   itemPagePrivateGuard: () => (/* binding */ itemPagePrivateGuard)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 17796);
/* harmony import */ var _core_data_feature_authorization_feature_authorization_guard_dso_page_single_feature_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/data/feature-authorization/feature-authorization-guard/dso-page-single-feature.guard */ 6056);
/* harmony import */ var _core_data_feature_authorization_feature_id__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/data/feature-authorization/feature-id */ 3970);
/* harmony import */ var _item_page_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../item-page.resolver */ 35925);




/**
 * Guard for preventing unauthorized access to certain {@link Item} pages requiring specific authorizations.
 * Checks authorization rights for making items private.
 */
const itemPagePrivateGuard = (0,_core_data_feature_authorization_feature_authorization_guard_dso_page_single_feature_guard__WEBPACK_IMPORTED_MODULE_0__.dsoPageSingleFeatureGuard)(() => _item_page_resolver__WEBPACK_IMPORTED_MODULE_2__.itemPageResolver, () => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(_core_data_feature_authorization_feature_id__WEBPACK_IMPORTED_MODULE_1__.FeatureID.CanMakePrivate));

/***/ }),

/***/ 67086:
/*!**************************************************************************!*\
  !*** ./src/app/item-page/edit-item-page/item-page-register-doi.guard.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   itemPageRegisterDoiGuard: () => (/* binding */ itemPageRegisterDoiGuard)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 17796);
/* harmony import */ var _core_data_feature_authorization_feature_authorization_guard_dso_page_single_feature_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/data/feature-authorization/feature-authorization-guard/dso-page-single-feature.guard */ 6056);
/* harmony import */ var _core_data_feature_authorization_feature_id__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/data/feature-authorization/feature-id */ 3970);
/* harmony import */ var _item_page_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../item-page.resolver */ 35925);




/**
 * Guard for preventing unauthorized access to certain {@link Item} pages requiring DOI registration rights
 * Check DOI registration authorization rights
 */
const itemPageRegisterDoiGuard = (0,_core_data_feature_authorization_feature_authorization_guard_dso_page_single_feature_guard__WEBPACK_IMPORTED_MODULE_0__.dsoPageSingleFeatureGuard)(() => _item_page_resolver__WEBPACK_IMPORTED_MODULE_2__.itemPageResolver, () => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(_core_data_feature_authorization_feature_id__WEBPACK_IMPORTED_MODULE_1__.FeatureID.CanRegisterDOI));

/***/ }),

/***/ 70161:
/*!***********************************************************************!*\
  !*** ./src/app/item-page/edit-item-page/item-page-reinstate.guard.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   itemPageReinstateGuard: () => (/* binding */ itemPageReinstateGuard)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 17796);
/* harmony import */ var _core_data_feature_authorization_feature_authorization_guard_dso_page_single_feature_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/data/feature-authorization/feature-authorization-guard/dso-page-single-feature.guard */ 6056);
/* harmony import */ var _core_data_feature_authorization_feature_id__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/data/feature-authorization/feature-id */ 3970);
/* harmony import */ var _item_page_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../item-page.resolver */ 35925);




/**
 * Guard for preventing unauthorized access to certain {@link Item} pages requiring reinstate rights
 * Check reinstate authorization rights
 */
const itemPageReinstateGuard = (0,_core_data_feature_authorization_feature_authorization_guard_dso_page_single_feature_guard__WEBPACK_IMPORTED_MODULE_0__.dsoPageSingleFeatureGuard)(() => _item_page_resolver__WEBPACK_IMPORTED_MODULE_2__.itemPageResolver, () => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(_core_data_feature_authorization_feature_id__WEBPACK_IMPORTED_MODULE_1__.FeatureID.ReinstateItem));

/***/ }),

/***/ 24793:
/*!***************************************************************************!*\
  !*** ./src/app/item-page/edit-item-page/item-page-relationships.guard.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   itemPageRelationshipsGuard: () => (/* binding */ itemPageRelationshipsGuard)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 17796);
/* harmony import */ var _core_data_feature_authorization_feature_authorization_guard_dso_page_single_feature_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/data/feature-authorization/feature-authorization-guard/dso-page-single-feature.guard */ 6056);
/* harmony import */ var _core_data_feature_authorization_feature_id__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/data/feature-authorization/feature-id */ 3970);
/* harmony import */ var _item_page_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../item-page.resolver */ 35925);




/**
 * Guard for preventing unauthorized access to certain {@link Item} pages requiring manage relationships rights
 * Check manage relationships authorization rights
 */
const itemPageRelationshipsGuard = (0,_core_data_feature_authorization_feature_authorization_guard_dso_page_single_feature_guard__WEBPACK_IMPORTED_MODULE_0__.dsoPageSingleFeatureGuard)(() => _item_page_resolver__WEBPACK_IMPORTED_MODULE_2__.itemPageResolver, () => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(_core_data_feature_authorization_feature_id__WEBPACK_IMPORTED_MODULE_1__.FeatureID.CanManageRelationships));

/***/ }),

/***/ 57024:
/*!********************************************************************!*\
  !*** ./src/app/item-page/edit-item-page/item-page-status.guard.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   itemPageStatusGuard: () => (/* binding */ itemPageStatusGuard)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 17796);
/* harmony import */ var _core_data_feature_authorization_feature_authorization_guard_dso_page_some_feature_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/data/feature-authorization/feature-authorization-guard/dso-page-some-feature.guard */ 17024);
/* harmony import */ var _core_data_feature_authorization_feature_id__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/data/feature-authorization/feature-id */ 3970);
/* harmony import */ var _item_page_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../item-page.resolver */ 35925);




/**
 * Guard for preventing unauthorized access to certain {@link Item} pages requiring any of the rights required for
 * the status page
 * Check authorization rights
 */
const itemPageStatusGuard = (0,_core_data_feature_authorization_feature_authorization_guard_dso_page_some_feature_guard__WEBPACK_IMPORTED_MODULE_0__.dsoPageSomeFeatureGuard)(() => _item_page_resolver__WEBPACK_IMPORTED_MODULE_2__.itemPageResolver, () => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)([_core_data_feature_authorization_feature_id__WEBPACK_IMPORTED_MODULE_1__.FeatureID.CanManageMappings, _core_data_feature_authorization_feature_id__WEBPACK_IMPORTED_MODULE_1__.FeatureID.WithdrawItem, _core_data_feature_authorization_feature_id__WEBPACK_IMPORTED_MODULE_1__.FeatureID.ReinstateItem, _core_data_feature_authorization_feature_id__WEBPACK_IMPORTED_MODULE_1__.FeatureID.CanManagePolicies, _core_data_feature_authorization_feature_id__WEBPACK_IMPORTED_MODULE_1__.FeatureID.CanMakePrivate, _core_data_feature_authorization_feature_id__WEBPACK_IMPORTED_MODULE_1__.FeatureID.CanDelete, _core_data_feature_authorization_feature_id__WEBPACK_IMPORTED_MODULE_1__.FeatureID.CanMove, _core_data_feature_authorization_feature_id__WEBPACK_IMPORTED_MODULE_1__.FeatureID.CanRegisterDOI]));

/***/ }),

/***/ 84843:
/*!*****************************************************************************!*\
  !*** ./src/app/item-page/edit-item-page/item-page-version-history.guard.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   itemPageVersionHistoryGuard: () => (/* binding */ itemPageVersionHistoryGuard)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 17796);
/* harmony import */ var _core_data_feature_authorization_feature_authorization_guard_dso_page_single_feature_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/data/feature-authorization/feature-authorization-guard/dso-page-single-feature.guard */ 6056);
/* harmony import */ var _core_data_feature_authorization_feature_id__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/data/feature-authorization/feature-id */ 3970);
/* harmony import */ var _item_page_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../item-page.resolver */ 35925);




/**
 * Guard for preventing unauthorized access to certain {@link Item} pages requiring manage versions rights
 * Check manage versions authorization rights
 */
const itemPageVersionHistoryGuard = (0,_core_data_feature_authorization_feature_authorization_guard_dso_page_single_feature_guard__WEBPACK_IMPORTED_MODULE_0__.dsoPageSingleFeatureGuard)(() => _item_page_resolver__WEBPACK_IMPORTED_MODULE_2__.itemPageResolver, () => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(_core_data_feature_authorization_feature_id__WEBPACK_IMPORTED_MODULE_1__.FeatureID.CanManageVersions));

/***/ }),

/***/ 7128:
/*!**********************************************************************!*\
  !*** ./src/app/item-page/edit-item-page/item-page-withdraw.guard.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   itemPageWithdrawGuard: () => (/* binding */ itemPageWithdrawGuard)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 17796);
/* harmony import */ var _core_data_feature_authorization_feature_authorization_guard_dso_page_single_feature_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/data/feature-authorization/feature-authorization-guard/dso-page-single-feature.guard */ 6056);
/* harmony import */ var _core_data_feature_authorization_feature_id__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/data/feature-authorization/feature-id */ 3970);
/* harmony import */ var _item_page_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../item-page.resolver */ 35925);




/**
 * Guard for preventing unauthorized access to certain {@link Item} pages requiring withdraw rights
 * Check withdraw authorization rights
 */
const itemPageWithdrawGuard = (0,_core_data_feature_authorization_feature_authorization_guard_dso_page_single_feature_guard__WEBPACK_IMPORTED_MODULE_0__.dsoPageSingleFeatureGuard)(() => _item_page_resolver__WEBPACK_IMPORTED_MODULE_2__.itemPageResolver, () => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(_core_data_feature_authorization_feature_id__WEBPACK_IMPORTED_MODULE_1__.FeatureID.WithdrawItem));

/***/ }),

/***/ 51139:
/*!*********************************************************************************!*\
  !*** ./src/app/item-page/edit-item-page/item-private/item-private.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ItemPrivateComponent: () => (/* binding */ ItemPrivateComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var _core_data_item_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/data/item-data.service */ 29326);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/shared/operators */ 55757);
/* harmony import */ var _shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/notifications/notifications.service */ 69472);
/* harmony import */ var _modify_item_overview_modify_item_overview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modify-item-overview/modify-item-overview.component */ 13933);
/* harmony import */ var _simple_item_action_abstract_simple_item_action_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../simple-item-action/abstract-simple-item-action.component */ 26826);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 90310);












const _c0 = a0 => ({
  id: a0
});
const _c1 = a0 => [a0, "edit"];
/**
 * Component responsible for rendering the make item private page
 */
class ItemPrivateComponent extends _simple_item_action_abstract_simple_item_action_component__WEBPACK_IMPORTED_MODULE_4__.AbstractSimpleItemActionComponent {
  constructor(route, router, notificationsService, itemDataService, translateService) {
    super(route, router, notificationsService, itemDataService, translateService);
    this.route = route;
    this.router = router;
    this.notificationsService = notificationsService;
    this.itemDataService = itemDataService;
    this.translateService = translateService;
    this.messageKey = 'private';
    this.predicate = rd => !rd.payload.isDiscoverable;
  }
  /**
   * Perform the make private action to the item
   */
  performAction() {
    this.itemDataService.setDiscoverable(this.item, false).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_1__.getFirstCompletedRemoteData)()).subscribe(rd => {
      this.processRestResponse(rd);
    });
  }
  static {
    this.ɵfac = function ItemPrivateComponent_Factory(t) {
      return new (t || ItemPrivateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_2__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_data_item_data_service__WEBPACK_IMPORTED_MODULE_0__.ItemDataService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: ItemPrivateComponent,
      selectors: [["ds-item-private"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵStandaloneFeature"]],
      decls: 17,
      vars: 19,
      consts: [[1, "container"], [1, "row"], [1, "col-12"], [3, "item"], [1, "space-children-mr"], [1, "btn", "btn-outline-secondary", "perform-action", 3, "click"], [1, "btn", "btn-outline-secondary", "cancel", 3, "routerLink"]],
      template: function ItemPrivateComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](8, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "ds-modify-item-overview", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 4)(11, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ItemPrivateComponent_Template_button_click_11_listener() {
            return ctx.performAction();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](13, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](16, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](5, 6, ctx.headerMessage, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](15, _c0, ctx.item.handle)));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](8, 9, ctx.descriptionMessage));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("item", ctx.item);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](13, 11, ctx.confirmMessage), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](17, _c1, ctx.itemPageRoute));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](16, 13, ctx.cancelMessage), " ");
        }
      },
      dependencies: [_modify_item_overview_modify_item_overview_component__WEBPACK_IMPORTED_MODULE_3__.ModifyItemOverviewComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 84631:
/*!*******************************************************************************!*\
  !*** ./src/app/item-page/edit-item-page/item-public/item-public.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ItemPublicComponent: () => (/* binding */ ItemPublicComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var _core_data_item_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/data/item-data.service */ 29326);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/shared/operators */ 55757);
/* harmony import */ var _shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/notifications/notifications.service */ 69472);
/* harmony import */ var _modify_item_overview_modify_item_overview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modify-item-overview/modify-item-overview.component */ 13933);
/* harmony import */ var _simple_item_action_abstract_simple_item_action_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../simple-item-action/abstract-simple-item-action.component */ 26826);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 90310);












const _c0 = a0 => ({
  id: a0
});
const _c1 = a0 => [a0, "edit"];
/**
 * Component responsible for rendering the make item public page
 */
class ItemPublicComponent extends _simple_item_action_abstract_simple_item_action_component__WEBPACK_IMPORTED_MODULE_4__.AbstractSimpleItemActionComponent {
  constructor(route, router, notificationsService, itemDataService, translateService) {
    super(route, router, notificationsService, itemDataService, translateService);
    this.route = route;
    this.router = router;
    this.notificationsService = notificationsService;
    this.itemDataService = itemDataService;
    this.translateService = translateService;
    this.messageKey = 'public';
    this.predicate = rd => rd.payload.isDiscoverable;
  }
  /**
   * Perform the make public action to the item
   */
  performAction() {
    this.itemDataService.setDiscoverable(this.item, true).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_1__.getFirstCompletedRemoteData)()).subscribe(response => {
      this.processRestResponse(response);
    });
  }
  static {
    this.ɵfac = function ItemPublicComponent_Factory(t) {
      return new (t || ItemPublicComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_2__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_data_item_data_service__WEBPACK_IMPORTED_MODULE_0__.ItemDataService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: ItemPublicComponent,
      selectors: [["ds-item-public"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵStandaloneFeature"]],
      decls: 17,
      vars: 19,
      consts: [[1, "container"], [1, "row"], [1, "col-12"], [3, "item"], [1, "space-children-mr"], [1, "btn", "btn-outline-secondary", "perform-action", 3, "click"], [1, "btn", "btn-outline-secondary", "cancel", 3, "routerLink"]],
      template: function ItemPublicComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](8, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "ds-modify-item-overview", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 4)(11, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ItemPublicComponent_Template_button_click_11_listener() {
            return ctx.performAction();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](13, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](16, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](5, 6, ctx.headerMessage, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](15, _c0, ctx.item.handle)));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](8, 9, ctx.descriptionMessage));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("item", ctx.item);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](13, 11, ctx.confirmMessage), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](17, _c1, ctx.itemPageRoute));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](16, 13, ctx.cancelMessage), " ");
        }
      },
      dependencies: [_modify_item_overview_modify_item_overview_component__WEBPACK_IMPORTED_MODULE_3__.ModifyItemOverviewComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 69267:
/*!*******************************************************************************************!*\
  !*** ./src/app/item-page/edit-item-page/item-register-doi/item-register-doi.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ItemRegisterDoiComponent: () => (/* binding */ ItemRegisterDoiComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 46891);
/* harmony import */ var _core_data_identifier_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/data/identifier-data.service */ 90378);
/* harmony import */ var _core_data_item_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/data/item-data.service */ 29326);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/shared/operators */ 55757);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/empty.util */ 82777);
/* harmony import */ var _shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/notifications/notifications.service */ 69472);
/* harmony import */ var _item_page_routing_paths__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../item-page-routing-paths */ 90887);
/* harmony import */ var _modify_item_overview_modify_item_overview_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modify-item-overview/modify-item-overview.component */ 13933);
/* harmony import */ var _simple_item_action_abstract_simple_item_action_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../simple-item-action/abstract-simple-item-action.component */ 26826);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 90310);


















const _c0 = a0 => ({
  id: a0
});
const _c1 = a0 => [a0, "edit"];
function ItemRegisterDoiComponent_div_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const identifier_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate3"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 3, ctx_r1.doiToUpdateMessage), ": ", identifier_r1.value, " (", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 5, "item.edit.identifiers.doi.status." + identifier_r1.identifierStatus), ") ");
  }
}
function ItemRegisterDoiComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, ItemRegisterDoiComponent_div_9_div_1_Template, 5, 7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const identifier_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", identifier_r1.identifierType === "doi");
  }
}
/**
 * Component responsible for rendering the Item Register DOI page
 */
class ItemRegisterDoiComponent extends _simple_item_action_abstract_simple_item_action_component__WEBPACK_IMPORTED_MODULE_7__.AbstractSimpleItemActionComponent {
  constructor(route, router, notificationsService, itemDataService, translateService, identifierDataService) {
    super(route, router, notificationsService, itemDataService, translateService);
    this.route = route;
    this.router = router;
    this.notificationsService = notificationsService;
    this.itemDataService = itemDataService;
    this.translateService = translateService;
    this.identifierDataService = identifierDataService;
    this.messageKey = 'register-doi';
    this.doiToUpdateMessage = 'item.edit.' + this.messageKey + '.to-update';
    this.processing = false;
  }
  /**
   * Initialise component
   */
  ngOnInit() {
    this.itemRD$ = this.route.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(data => data.dso), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_2__.getFirstSucceededRemoteData)());
    this.itemRD$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.first)()).subscribe(rd => {
      this.item = rd.payload;
      this.itemPageRoute = (0,_item_page_routing_paths__WEBPACK_IMPORTED_MODULE_5__.getItemPageRoute)(this.item);
      this.identifiers$ = this.identifierDataService.getIdentifierDataFor(this.item).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(identifierRD => {
        if (identifierRD.statusCode !== 401 && (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_3__.hasValue)(identifierRD.payload)) {
          return identifierRD.payload.identifiers;
        } else {
          return null;
        }
      }));
    });
    this.confirmMessage = 'item.edit.' + this.messageKey + '.confirm';
    this.cancelMessage = 'item.edit.' + this.messageKey + '.cancel';
    this.headerMessage = 'item.edit.' + this.messageKey + '.header';
    this.descriptionMessage = 'item.edit.' + this.messageKey + '.description';
  }
  /**
   * Perform the register DOI action to the item
   */
  performAction() {
    this.registerDoi();
  }
  /**
   * Request that a pending, minted or null DOI be queued for registration
   */
  registerDoi() {
    this.processing = true;
    this.identifierDataService.registerIdentifier(this.item, 'doi').subscribe(response => {
      if (response.hasCompleted) {
        this.processing = false;
        this.processRestResponse(response);
      }
    });
  }
  static {
    this.ɵfac = function ItemRegisterDoiComponent_Factory(t) {
      return new (t || ItemRegisterDoiComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_4__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_data_item_data_service__WEBPACK_IMPORTED_MODULE_1__.ItemDataService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_data_identifier_data_service__WEBPACK_IMPORTED_MODULE_0__.IdentifierDataService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
      type: ItemRegisterDoiComponent,
      selectors: [["ds-item-register-doi"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵStandaloneFeature"]],
      decls: 19,
      vars: 22,
      consts: [[1, "container"], [1, "row"], [1, "col-12"], ["class", "w-100 p", 4, "ngFor", "ngForOf"], [3, "item"], [1, "space-children-mr"], [1, "btn", "btn-outline-secondary", "perform-action", 3, "click"], [1, "btn", "btn-outline-secondary", "cancel", 3, "routerLink"], [1, "w-100", "p"], [4, "ngIf"], [1, "float-left"]],
      template: function ItemRegisterDoiComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](8, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, ItemRegisterDoiComponent_div_9_Template, 2, 1, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](10, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](11, "ds-modify-item-overview", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 5)(13, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ItemRegisterDoiComponent_Template_button_click_13_listener() {
            return ctx.performAction();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](15, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](18, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](5, 7, ctx.headerMessage, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](18, _c0, ctx.item.handle)));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](8, 10, ctx.descriptionMessage));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](10, 12, ctx.identifiers$));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("item", ctx.item);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](15, 14, ctx.confirmMessage), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](20, _c1, ctx.itemPageRoute));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](18, 16, ctx.cancelMessage), " ");
        }
      },
      dependencies: [_modify_item_overview_modify_item_overview_component__WEBPACK_IMPORTED_MODULE_6__.ModifyItemOverviewComponent, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLink, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_13__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 42060:
/*!*************************************************************************************!*\
  !*** ./src/app/item-page/edit-item-page/item-reinstate/item-reinstate.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ItemReinstateComponent: () => (/* binding */ ItemReinstateComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var _core_data_item_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/data/item-data.service */ 29326);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/shared/operators */ 55757);
/* harmony import */ var _shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/notifications/notifications.service */ 69472);
/* harmony import */ var _modify_item_overview_modify_item_overview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modify-item-overview/modify-item-overview.component */ 13933);
/* harmony import */ var _simple_item_action_abstract_simple_item_action_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../simple-item-action/abstract-simple-item-action.component */ 26826);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 90310);












const _c0 = a0 => ({
  id: a0
});
const _c1 = a0 => [a0, "edit"];
/**
 * Component responsible for rendering the Item Reinstate page
 */
class ItemReinstateComponent extends _simple_item_action_abstract_simple_item_action_component__WEBPACK_IMPORTED_MODULE_4__.AbstractSimpleItemActionComponent {
  constructor(route, router, notificationsService, itemDataService, translateService) {
    super(route, router, notificationsService, itemDataService, translateService);
    this.route = route;
    this.router = router;
    this.notificationsService = notificationsService;
    this.itemDataService = itemDataService;
    this.translateService = translateService;
    this.messageKey = 'reinstate';
    this.predicate = rd => !rd.payload.isWithdrawn;
  }
  /**
   * Perform the reinstate action to the item
   */
  performAction() {
    this.itemDataService.setWithDrawn(this.item, false).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_1__.getFirstCompletedRemoteData)()).subscribe(response => {
      this.processRestResponse(response);
    });
  }
  static {
    this.ɵfac = function ItemReinstateComponent_Factory(t) {
      return new (t || ItemReinstateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_2__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_data_item_data_service__WEBPACK_IMPORTED_MODULE_0__.ItemDataService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: ItemReinstateComponent,
      selectors: [["ds-item-reinstate"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵStandaloneFeature"]],
      decls: 17,
      vars: 19,
      consts: [[1, "container"], [1, "row"], [1, "col-12"], [3, "item"], [1, "space-children-mr"], [1, "btn", "btn-outline-secondary", "perform-action", 3, "click"], [1, "btn", "btn-outline-secondary", "cancel", 3, "routerLink"]],
      template: function ItemReinstateComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](8, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "ds-modify-item-overview", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 4)(11, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ItemReinstateComponent_Template_button_click_11_listener() {
            return ctx.performAction();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](13, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](16, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](5, 6, ctx.headerMessage, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](15, _c0, ctx.item.handle)));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](8, 9, ctx.descriptionMessage));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("item", ctx.item);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](13, 11, ctx.confirmMessage), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](17, _c1, ctx.itemPageRoute));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](16, 13, ctx.cancelMessage), " ");
        }
      },
      dependencies: [_modify_item_overview_modify_item_overview_component__WEBPACK_IMPORTED_MODULE_3__.ModifyItemOverviewComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 87732:
/*!************************************************************************************************!*\
  !*** ./src/app/item-page/edit-item-page/item-relationships/edit-item-relationships.service.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditItemRelationshipsService: () => (/* binding */ EditItemRelationshipsService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 83485);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 80560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 27639);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 78374);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 84975);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 19847);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 50047);
/* harmony import */ var _core_data_entity_type_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/data/entity-type-data.service */ 30077);
/* harmony import */ var _core_data_item_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/data/item-data.service */ 29326);
/* harmony import */ var _core_data_object_updates_field_change_type_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/data/object-updates/field-change-type.model */ 25103);
/* harmony import */ var _core_data_object_updates_object_updates_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/data/object-updates/object-updates.service */ 59033);
/* harmony import */ var _core_data_relationship_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/data/relationship-data.service */ 48833);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/shared/operators */ 55757);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/empty.util */ 82777);
/* harmony import */ var _shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/notifications/notifications.service */ 69472);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 49966);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-translate/core */ 96439);




















class EditItemRelationshipsService {
  constructor(itemService, objectUpdatesService, notificationsService, modalService, relationshipService, entityTypeService, translateService) {
    this.itemService = itemService;
    this.objectUpdatesService = objectUpdatesService;
    this.notificationsService = notificationsService;
    this.modalService = modalService;
    this.relationshipService = relationshipService;
    this.entityTypeService = entityTypeService;
    this.translateService = translateService;
    this.notificationsPrefix = 'item.edit.relationships.notifications.';
    this.isSaving$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject(false);
  }
  /**
   * Resolve the currently selected related items back to relationships and send a delete request for each of the relationships found
   * Make sure the lists are refreshed afterwards and notifications are sent for success and errors
   */
  submit(item, url) {
    this.isSaving$.next(true);
    this.objectUpdatesService.getFieldUpdates(url, [], true).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(fieldUpdates => Object.values(fieldUpdates).filter(fieldUpdate => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_6__.hasValue)(fieldUpdate)).filter(fieldUpdate => fieldUpdate.changeType === _core_data_object_updates_field_change_type_model__WEBPACK_IMPORTED_MODULE_2__.FieldChangeType.ADD || fieldUpdate.changeType === _core_data_object_updates_field_change_type_model__WEBPACK_IMPORTED_MODULE_2__.FieldChangeType.REMOVE)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.take)(1),
    // emit each update in the array separately
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.switchMap)(updates => updates),
    // process each update one by one, while waiting for the previous to finish
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.concatMap)(update => {
      if (update.changeType === _core_data_object_updates_field_change_type_model__WEBPACK_IMPORTED_MODULE_2__.FieldChangeType.REMOVE) {
        return this.deleteRelationship(update.field).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.switchMap)(deleteRD => {
          if (deleteRD.hasSucceeded) {
            return this.itemService.invalidateByHref(update.field.relatedItem._links.self.href).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(() => deleteRD));
          }
          return [deleteRD];
        }));
      } else if (update.changeType === _core_data_object_updates_field_change_type_model__WEBPACK_IMPORTED_MODULE_2__.FieldChangeType.ADD) {
        return this.addRelationship(update.field).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.switchMap)(relationshipRD => {
          if (relationshipRD.hasSucceeded) {
            // Set the newly related item to stale, so its relationships will update to include
            // the new one. Only set the current item to stale at the very end so we only do it
            // once
            const {
              leftItem,
              rightItem
            } = relationshipRD.payload._links;
            if (leftItem.href === item.self) {
              return this.itemService.invalidateByHref(rightItem.href).pipe(
              // when it's invalidated, emit the original relationshipRD for use in the pipe below
              (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(() => relationshipRD));
            } else {
              return this.itemService.invalidateByHref(leftItem.href).pipe(
              // when it's invalidated, emit the original relationshipRD for use in the pipe below
              (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(() => relationshipRD));
            }
          } else {
            return [relationshipRD];
          }
        }));
      } else {
        return rxjs__WEBPACK_IMPORTED_MODULE_13__.EMPTY;
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.toArray)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.switchMap)(responses => {
      // once all relationships are made and all related items have been invalidated, invalidate
      // the current item
      return this.itemService.invalidateByHref(item.self).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(() => responses));
    })).subscribe(responses => {
      if (responses.length > 0) {
        this.initializeOriginalFields(item, url);
        this.displayNotifications(responses);
        this.modalService.dismissAll();
        this.isSaving$.next(false);
      }
    });
  }
  /**
   * Sends all initial values of this item to the object updates service
   */
  initializeOriginalFields(item, url) {
    return this.relationshipService.getRelatedItems(item).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.take)(1)).subscribe(items => {
      this.objectUpdatesService.initialize(url, items, item.lastModified);
    });
  }
  deleteRelationship(deleteRelationship) {
    let copyVirtualMetadata;
    if (deleteRelationship.keepLeftVirtualMetadata && deleteRelationship.keepRightVirtualMetadata) {
      copyVirtualMetadata = 'all';
    } else if (deleteRelationship.keepLeftVirtualMetadata) {
      copyVirtualMetadata = 'left';
    } else if (deleteRelationship.keepRightVirtualMetadata) {
      copyVirtualMetadata = 'right';
    } else {
      copyVirtualMetadata = 'none';
    }
    return this.relationshipService.deleteRelationship(deleteRelationship.uuid, copyVirtualMetadata, false);
  }
  addRelationship(addRelationship) {
    let leftItem;
    let rightItem;
    let leftwardValue;
    let rightwardValue;
    if (addRelationship.originalIsLeft) {
      leftItem = addRelationship.originalItem;
      rightItem = addRelationship.relatedItem;
      leftwardValue = null;
      rightwardValue = addRelationship.nameVariant;
    } else {
      leftItem = addRelationship.relatedItem;
      rightItem = addRelationship.originalItem;
      leftwardValue = addRelationship.nameVariant;
      rightwardValue = null;
    }
    return this.relationshipService.addRelationship(addRelationship.type.id, leftItem, rightItem, leftwardValue, rightwardValue, false);
  }
  /**
   * Display notifications
   * - Error notification for each failed response with their message
   * - Success notification in case there's at least one successful response
   * @param responses
   */
  displayNotifications(responses) {
    const failedResponses = responses.filter(response => response.hasFailed);
    const successfulResponses = responses.filter(response => response.hasSucceeded);
    failedResponses.forEach(response => {
      this.notificationsService.error(this.getNotificationTitle('failed'), response.errorMessage);
    });
    if (successfulResponses.length > 0) {
      this.notificationsService.success(this.getNotificationTitle('saved'), this.getNotificationContent('saved'));
    }
  }
  isProvidedItemTypeLeftType(relationshipType, itemType, item) {
    return this.getRelationshipLeftAndRightType(relationshipType).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(([leftType, rightType]) => {
      if (leftType.id === itemType.id) {
        return true;
      }
      if (rightType.id === itemType.id) {
        return false;
      }
      // should never happen...
      console.warn(`The item ${item.uuid} is not on the right or the left side of relationship type ${relationshipType.uuid}`);
      return undefined;
    }));
  }
  /**
   * Whether both side of the relationship need to be displayed on the edit relationship page or not.
   *
   * @param relationshipType The relationship type
   * @param itemType         The item type
   */
  shouldDisplayBothRelationshipSides(relationshipType, itemType) {
    return this.getRelationshipLeftAndRightType(relationshipType).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(([leftType, rightType]) => {
      return leftType.id === itemType.id && rightType.id === itemType.id && relationshipType.leftwardType !== relationshipType.rightwardType;
    }));
  }
  getRelationshipLeftAndRightType(relationshipType) {
    const leftType$ = relationshipType.leftType.pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_5__.getFirstSucceededRemoteData)(), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_5__.getRemoteDataPayload)());
    const rightType$ = relationshipType.rightType.pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_5__.getFirstSucceededRemoteData)(), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_5__.getRemoteDataPayload)());
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.combineLatest)([leftType$, rightType$]);
  }
  /**
   * Get translated notification title
   * @param key
   */
  getNotificationTitle(key) {
    return this.translateService.instant(this.notificationsPrefix + key + '.title');
  }
  /**
   * Get translated notification content
   * @param key
   */
  getNotificationContent(key) {
    return this.translateService.instant(this.notificationsPrefix + key + '.content');
  }
  static {
    this.ɵfac = function EditItemRelationshipsService_Factory(t) {
      return new (t || EditItemRelationshipsService)(_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵinject"](_core_data_item_data_service__WEBPACK_IMPORTED_MODULE_1__.ItemDataService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵinject"](_core_data_object_updates_object_updates_service__WEBPACK_IMPORTED_MODULE_3__.ObjectUpdatesService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵinject"](_shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_7__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵinject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵinject"](_core_data_relationship_data_service__WEBPACK_IMPORTED_MODULE_4__.RelationshipDataService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵinject"](_core_data_entity_type_data_service__WEBPACK_IMPORTED_MODULE_0__.EntityTypeDataService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslateService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjectable"]({
      token: EditItemRelationshipsService,
      factory: EditItemRelationshipsService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 8703:
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/item-page/edit-item-page/item-relationships/edit-relationship-list-wrapper/edit-relationship-list-wrapper.component.ts ***!
  \****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditRelationshipListWrapperComponent: () => (/* binding */ EditRelationshipListWrapperComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 83485);
/* harmony import */ var _core_shared_item_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/shared/item.model */ 88318);
/* harmony import */ var _core_shared_item_relationships_item_type_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/shared/item-relationships/item-type.model */ 23881);
/* harmony import */ var _core_shared_item_relationships_relationship_type_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/shared/item-relationships/relationship-type.model */ 59854);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/empty.util */ 82777);
/* harmony import */ var _edit_item_relationships_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../edit-item-relationships.service */ 87732);
/* harmony import */ var _edit_relationship_list_edit_relationship_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../edit-relationship-list/edit-relationship-list.component */ 19171);











function EditRelationshipListWrapperComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "ds-edit-relationship-list", 1)(2, "ds-edit-relationship-list", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("url", ctx_r0.url)("item", ctx_r0.item)("itemType", ctx_r0.itemType)("relationshipType", ctx_r0.relationshipType)("hasChanges", ctx_r0.hasChanges)("currentItemIsLeftItem$", ctx_r0.isLeftItem$);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("url", ctx_r0.url)("item", ctx_r0.item)("itemType", ctx_r0.itemType)("relationshipType", ctx_r0.relationshipType)("hasChanges", ctx_r0.hasChanges)("currentItemIsLeftItem$", ctx_r0.isRightItem$);
  }
}
function EditRelationshipListWrapperComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "ds-edit-relationship-list", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("url", ctx_r0.url)("item", ctx_r0.item)("itemType", ctx_r0.itemType)("relationshipType", ctx_r0.relationshipType)("hasChanges", ctx_r0.hasChanges)("currentItemIsLeftItem$", ctx_r0.currentItemIsLeftItem$);
  }
}
/**
 * A component creating a list of editable relationships of a certain type
 * The relationships are rendered as a list of related items
 */
class EditRelationshipListWrapperComponent {
  constructor(editItemRelationshipsService) {
    this.editItemRelationshipsService = editItemRelationshipsService;
    /**
     * The event emmiter to submit the new information
     */
    this.submitModal = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    /**
     * Observable that emits true if {@link itemType} is on the left-hand side of {@link relationshipType},
     * false if it is on the right-hand side and undefined in the rare case that it is on neither side.
     */
    this.currentItemIsLeftItem$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject(undefined);
    this.isLeftItem$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject(true);
    this.isRightItem$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject(false);
    /**
     * Array to track all subscriptions and unsubscribe them onDestroy
     * @type {Array}
     */
    this.subs = [];
  }
  ngOnInit() {
    this.subs.push(this.editItemRelationshipsService.isProvidedItemTypeLeftType(this.relationshipType, this.itemType, this.item).subscribe(nextValue => {
      this.currentItemIsLeftItem$.next(nextValue);
    }));
    this.shouldDisplayBothRelationshipSides$ = this.editItemRelationshipsService.shouldDisplayBothRelationshipSides(this.relationshipType, this.itemType);
  }
  ngOnDestroy() {
    this.subs.filter(subscription => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_3__.hasValue)(subscription)).forEach(subscription => subscription.unsubscribe());
  }
  static {
    this.ɵfac = function EditRelationshipListWrapperComponent_Factory(t) {
      return new (t || EditRelationshipListWrapperComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_edit_item_relationships_service__WEBPACK_IMPORTED_MODULE_4__.EditItemRelationshipsService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: EditRelationshipListWrapperComponent,
      selectors: [["ds-edit-relationship-list-wrapper"]],
      inputs: {
        item: "item",
        itemType: "itemType",
        url: "url",
        relationshipType: "relationshipType",
        hasChanges: "hasChanges"
      },
      outputs: {
        submitModal: "submitModal"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵStandaloneFeature"]],
      decls: 4,
      vars: 6,
      consts: [[4, "ngIf"], [1, "d-block", "mb-4", 3, "url", "item", "itemType", "relationshipType", "hasChanges", "currentItemIsLeftItem$"], [3, "url", "item", "itemType", "relationshipType", "hasChanges", "currentItemIsLeftItem$"]],
      template: function EditRelationshipListWrapperComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, EditRelationshipListWrapperComponent_ng_container_0_Template, 3, 12, "ng-container", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, EditRelationshipListWrapperComponent_ng_container_2_Template, 2, 6, "ng-container", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "async");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 2, ctx.shouldDisplayBothRelationshipSides$));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 4, ctx.shouldDisplayBothRelationshipSides$) === false);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe, _edit_relationship_list_edit_relationship_list_component__WEBPACK_IMPORTED_MODULE_5__.EditRelationshipListComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtcmVsYXRpb25zaGlwLWxpc3Qtd3JhcHBlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQSIsImZpbGUiOiJlZGl0LXJlbGF0aW9uc2hpcC1saXN0LXdyYXBwZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqLyJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaXRlbS1wYWdlL2VkaXQtaXRlbS1wYWdlL2l0ZW0tcmVsYXRpb25zaGlwcy9lZGl0LXJlbGF0aW9uc2hpcC1saXN0LXdyYXBwZXIvZWRpdC1yZWxhdGlvbnNoaXAtbGlzdC13cmFwcGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBO0FBQ0EsZ25CQUFnbkIiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqLyJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 19171:
/*!************************************************************************************************************************!*\
  !*** ./src/app/item-page/edit-item-page/item-relationships/edit-relationship-list/edit-relationship-list.component.ts ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditRelationshipListComponent: () => (/* binding */ EditRelationshipListComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! rxjs */ 83485);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! rxjs */ 27639);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! rxjs */ 70141);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! rxjs */ 80560);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! rxjs/operators */ 19847);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! rxjs/operators */ 84975);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! rxjs/operators */ 78374);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! rxjs/operators */ 50047);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! rxjs/operators */ 21252);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! rxjs/operators */ 74671);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! rxjs/operators */ 42562);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! rxjs/operators */ 62997);
/* harmony import */ var _config_app_config_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../config/app-config.interface */ 82640);
/* harmony import */ var _core_cache_builders_link_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/cache/builders/link.service */ 1321);
/* harmony import */ var _core_cache_models_request_param_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/cache/models/request-param.model */ 53954);
/* harmony import */ var _core_data_object_updates_field_change_type_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/data/object-updates/field-change-type.model */ 25103);
/* harmony import */ var _core_data_object_updates_object_updates_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/data/object-updates/object-updates.service */ 59033);
/* harmony import */ var _core_data_relationship_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/data/relationship-data.service */ 48833);
/* harmony import */ var _core_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/pagination/pagination.service */ 76896);
/* harmony import */ var _core_shared_item_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/shared/item.model */ 88318);
/* harmony import */ var _core_shared_item_relationships_item_type_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/shared/item-relationships/item-type.model */ 23881);
/* harmony import */ var _core_shared_item_relationships_relationship_type_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../core/shared/item-relationships/relationship-type.model */ 59854);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../core/shared/operators */ 55757);
/* harmony import */ var _shared_btn_disabled_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/btn-disabled.directive */ 60456);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/empty.util */ 82777);
/* harmony import */ var _shared_form_builder_ds_dynamic_form_ui_relation_lookup_modal_dynamic_lookup_relation_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/form/builder/ds-dynamic-form-ui/relation-lookup-modal/dynamic-lookup-relation-modal.component */ 30519);
/* harmony import */ var _shared_form_builder_models_relationship_options_model__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/form/builder/models/relationship-options.model */ 56568);
/* harmony import */ var _shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../shared/loading/themed-loading.component */ 82394);
/* harmony import */ var _shared_object_list_selectable_list_selectable_list_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../shared/object-list/selectable-list/selectable-list.service */ 13329);
/* harmony import */ var _shared_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../shared/pagination/pagination.component */ 40590);
/* harmony import */ var _shared_pagination_pagination_component_options_model__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../shared/pagination/pagination-component-options.model */ 23401);
/* harmony import */ var _shared_utils_object_values_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../shared/utils/object-values-pipe */ 4313);
/* harmony import */ var _shared_utils_relation_query_utils__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../shared/utils/relation-query.utils */ 49656);
/* harmony import */ var _shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../shared/utils/var.directive */ 18226);
/* harmony import */ var _edit_item_relationships_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../edit-item-relationships.service */ 87732);
/* harmony import */ var _edit_relationship_edit_relationship_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../edit-relationship/edit-relationship.component */ 5634);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 49966);







































const _c0 = () => ({});
const _c1 = (a0, a1, a2) => ({
  "alert-success": a0,
  "alert-warning": a1,
  "alert-danger": a2
});
function EditRelationshipListComponent_ng_container_10_ng_container_1_ng_container_1_ds_edit_relationship_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](0, "ds-edit-relationship", 9);
  }
  if (rf & 2) {
    const updateValue_r1 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("fieldUpdate", updateValue_r1 || _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpureFunction0"](4, _c0))("url", ctx_r1.url)("editItem", ctx_r1.item)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpureFunction3"](5, _c1, updateValue_r1.changeType === 1, updateValue_r1.changeType === 0, updateValue_r1.changeType === 2));
  }
}
function EditRelationshipListComponent_ng_container_10_ng_container_1_ng_container_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipeBind1"](2, 1, "item.edit.relationships.no-relationships"));
  }
}
function EditRelationshipListComponent_ng_container_10_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](1, "ds-pagination", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](5, EditRelationshipListComponent_ng_container_10_ng_container_1_ng_container_1_ds_edit_relationship_5_Template, 1, 9, "ds-edit-relationship", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](6, EditRelationshipListComponent_ng_container_10_ng_container_1_ng_container_1_div_6_Template, 3, 3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    let tmp_6_0;
    const updateValues_r3 = ctx.ngVar;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("paginationOptions", ctx_r1.paginationConfig)("collectionSize", ((tmp_6_0 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipeBind1"](2, 7, ctx_r1.relationshipsRd$)) == null ? null : tmp_6_0.payload == null ? null : tmp_6_0.payload.totalElements) + _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipeBind1"](3, 9, ctx_r1.nbAddedFields$))("hideGear", true)("hidePagerWhenSinglePage", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngForOf", updateValues_r3)("ngForTrackBy", ctx_r1.trackUpdate);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngIf", updateValues_r3.length === 0);
  }
}
function EditRelationshipListComponent_ng_container_10_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](1, EditRelationshipListComponent_ng_container_10_ng_container_1_ng_container_1_Template, 7, 11, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipe"](2, "dsObjectValues");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const updates_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"]().ngVar;
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngVar", _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipeBind1"](2, 1, updates_r4));
  }
}
function EditRelationshipListComponent_ng_container_10_ds_loading_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](0, "ds-loading");
  }
}
function EditRelationshipListComponent_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](1, EditRelationshipListComponent_ng_container_10_ng_container_1_Template, 3, 3, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](3, EditRelationshipListComponent_ng_container_10_ds_loading_3_Template, 1, 0, "ds-loading", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const updates_r4 = ctx.ngVar;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngIf", updates_r4 && _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipeBind1"](2, 2, ctx_r1.loading$) !== true);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipeBind1"](4, 4, ctx_r1.loading$));
  }
}
/**
 * A component creating a list of editable relationships of a certain type
 * The relationships are rendered as a list of related items
 */
class EditRelationshipListComponent {
  constructor(objectUpdatesService, linkService, relationshipService, modalService, paginationService, selectableListService, editItemRelationshipsService, appConfig) {
    this.objectUpdatesService = objectUpdatesService;
    this.linkService = linkService;
    this.relationshipService = relationshipService;
    this.modalService = modalService;
    this.paginationService = paginationService;
    this.selectableListService = selectableListService;
    this.editItemRelationshipsService = editItemRelationshipsService;
    this.appConfig = appConfig;
    /**
     * The event emmiter to submit the new information
     */
    this.submitModal = new _angular_core__WEBPACK_IMPORTED_MODULE_24__.EventEmitter();
    /**
     * Observable that emits true if {@link itemType} is on the left-hand side of {@link relationshipType},
     * false if it is on the right-hand side and undefined in the rare case that it is on neither side.
     */
    this.currentItemIsLeftItem$ = new rxjs__WEBPACK_IMPORTED_MODULE_25__.BehaviorSubject(undefined);
    /**
     * The FieldUpdates for the relationships in question
     */
    this.updates$ = new rxjs__WEBPACK_IMPORTED_MODULE_25__.BehaviorSubject(undefined);
    /**
     * The RemoteData for the relationships
     */
    this.relationshipsRd$ = new rxjs__WEBPACK_IMPORTED_MODULE_25__.BehaviorSubject(undefined);
    /**
     * Whether the current page is the last page
     */
    this.isLastPage$ = new rxjs__WEBPACK_IMPORTED_MODULE_25__.BehaviorSubject(true);
    /**
     * Whether we're loading
     */
    this.loading$ = new rxjs__WEBPACK_IMPORTED_MODULE_25__.BehaviorSubject(true);
    /**
     * The number of added fields that haven't been saved yet
     */
    this.nbAddedFields$ = new rxjs__WEBPACK_IMPORTED_MODULE_25__.BehaviorSubject(0);
    /**
     * Array to track all subscriptions and unsubscribe them onDestroy
     * @type {Array}
     */
    this.subs = [];
    this.fetchThumbnail = this.appConfig.browseBy.showThumbnails;
  }
  /**
   * Get the i18n message key for this relationship type
   */
  getRelationshipMessageKey() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_26__.combineLatest)([this.getLabel(), this.relatedEntityType$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_27__.map)(([label, relatedEntityType]) => {
      if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_12__.hasValue)(label) && label.indexOf('is') > -1 && label.indexOf('Of') > -1) {
        const relationshipLabel = `${label.substring(2, label.indexOf('Of'))}`;
        if (relationshipLabel !== relatedEntityType.label) {
          return `relationships.is${relationshipLabel}Of.${relatedEntityType.label}`;
        } else {
          return `relationships.is${relationshipLabel}Of`;
        }
      } else {
        return label;
      }
    }));
  }
  /**
   * Get the relevant label for this relationship type
   */
  getLabel() {
    return this.currentItemIsLeftItem$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_27__.map)(currentItemIsLeftItem => {
      if (currentItemIsLeftItem) {
        return this.relationshipType.leftwardType;
      } else {
        return this.relationshipType.rightwardType;
      }
    }));
  }
  /**
   * Prevent unnecessary rerendering so fields don't lose focus
   */
  trackUpdate(index, update) {
    return update && update.field ? update.field.uuid : undefined;
  }
  /**
   * Check whether the current entity can have multiple relationships of this type
   * This is based on the max cardinality of the relationship
   * @private
   */
  isRepeatable() {
    const isLeft = this.currentItemIsLeftItem$.getValue();
    if (isLeft) {
      const leftMaxCardinality = this.relationshipType.leftMaxCardinality;
      return (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_12__.hasNoValue)(leftMaxCardinality) || leftMaxCardinality > 1;
    } else {
      const rightMaxCardinality = this.relationshipType.rightMaxCardinality;
      return (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_12__.hasNoValue)(rightMaxCardinality) || rightMaxCardinality > 1;
    }
  }
  /**
   * Open the dynamic lookup modal to search for items to add as relationships
   */
  openLookup() {
    this.modalRef = this.modalService.open(_shared_form_builder_ds_dynamic_form_ui_relation_lookup_modal_dynamic_lookup_relation_modal_component__WEBPACK_IMPORTED_MODULE_13__.DsDynamicLookupRelationModalComponent, {
      size: 'lg'
    });
    const modalComp = this.modalRef.componentInstance;
    modalComp.repeatable = true;
    modalComp.isEditRelationship = true;
    modalComp.listId = this.listId;
    modalComp.item = this.item;
    modalComp.relationshipType = this.relationshipType;
    modalComp.currentItemIsLeftItem$ = this.currentItemIsLeftItem$;
    modalComp.toAdd = [];
    modalComp.toRemove = [];
    modalComp.isPending = false;
    modalComp.repeatable = this.isRepeatable();
    modalComp.hiddenQuery = '-search.resourceid:' + this.item.uuid;
    this.item.owningCollection.pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_10__.getFirstSucceededRemoteDataPayload)()).subscribe(collection => {
      modalComp.collection = collection;
    });
    modalComp.select = (...selectableObjects) => {
      selectableObjects.forEach(searchResult => {
        const relatedItem = searchResult.indexableObject;
        const foundIndex = modalComp.toRemove.findIndex(itemSearchResult => itemSearchResult.indexableObject.uuid === relatedItem.uuid);
        if (foundIndex !== -1) {
          modalComp.toRemove.splice(foundIndex, 1);
        } else {
          this.getRelationFromId(relatedItem).subscribe(relationship => {
            if (!relationship) {
              modalComp.toAdd.push(searchResult);
            } else {
              const foundIndexRemove = modalComp.toRemove.findIndex(el => el.indexableObject.uuid === relatedItem.uuid);
              if (foundIndexRemove !== -1) {
                modalComp.toRemove.splice(foundIndexRemove, 1);
              }
            }
            this.loading$.next((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_12__.isNotEmpty)(modalComp.toAdd) || (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_12__.isNotEmpty)(modalComp.toRemove));
            // emit the last page again to trigger a fieldupdates refresh
            this.relationshipsRd$.next(this.relationshipsRd$.getValue());
          });
        }
      });
    };
    modalComp.deselect = (...selectableObjects) => {
      selectableObjects.forEach(searchResult => {
        const relatedItem = searchResult.indexableObject;
        const foundIndex = modalComp.toAdd.findIndex(el => el.indexableObject.uuid === relatedItem.uuid);
        if (foundIndex !== -1) {
          modalComp.toAdd.splice(foundIndex, 1);
        } else {
          modalComp.toRemove.push(searchResult);
        }
        this.loading$.next((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_12__.isNotEmpty)(modalComp.toAdd) || (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_12__.isNotEmpty)(modalComp.toRemove));
      });
    };
    modalComp.submitEv = () => {
      modalComp.isPending = true;
      const isLeft = this.currentItemIsLeftItem$.getValue();
      const addOperations = modalComp.toAdd.map(searchResult => ({
        type: 'add',
        searchResult
      }));
      const removeOperations = modalComp.toRemove.map(searchResult => ({
        type: 'remove',
        searchResult
      }));
      (0,rxjs__WEBPACK_IMPORTED_MODULE_28__.from)([...addOperations, ...removeOperations]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_29__.concatMap)(({
        type,
        searchResult
      }) => {
        const relatedItem = searchResult.indexableObject;
        if (type === 'add') {
          return this.relationshipService.getNameVariant(this.listId, relatedItem.uuid).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_30__.switchMap)(nameVariant => {
            const update = {
              uuid: `${this.relationshipType.id}-${relatedItem.uuid}`,
              nameVariant,
              type: this.relationshipType,
              originalIsLeft: isLeft,
              originalItem: this.item,
              relatedItem
            };
            return this.objectUpdatesService.saveAddFieldUpdate(this.url, update);
          }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_31__.take)(1));
        } else if (type === 'remove') {
          return this.relationshipService.getNameVariant(this.listId, relatedItem.uuid).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_30__.switchMap)(nameVariant => {
            return this.getRelationFromId(searchResult.indexableObject).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_27__.map)(relationship => {
              const update = {
                uuid: relationship.id,
                nameVariant,
                type: this.relationshipType,
                originalIsLeft: isLeft,
                originalItem: this.item,
                relatedItem,
                relationship
              };
              return this.objectUpdatesService.saveRemoveFieldUpdate(this.url, update);
            }));
          }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_31__.take)(1));
        } else {
          return rxjs__WEBPACK_IMPORTED_MODULE_32__.EMPTY;
        }
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_33__.toArray)()).subscribe({
        complete: () => {
          this.editItemRelationshipsService.submit(this.item, this.url);
          this.submitModal.emit();
        }
      });
    };
    modalComp.discardEv = () => {
      modalComp.toAdd.forEach(searchResult => {
        this.selectableListService.deselectSingle(this.listId, searchResult);
      });
      modalComp.toRemove.forEach(searchResult => {
        this.selectableListService.selectSingle(this.listId, searchResult);
      });
      modalComp.toAdd = [];
      modalComp.toRemove = [];
      this.loading$.next(false);
    };
    modalComp.closeEv = () => {
      this.loading$.next(false);
    };
    this.relatedEntityType$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_31__.take)(1)).subscribe(relatedEntityType => {
      modalComp.relationshipOptions = Object.assign(new _shared_form_builder_models_relationship_options_model__WEBPACK_IMPORTED_MODULE_14__.RelationshipOptions(), {
        relationshipType: relatedEntityType.label,
        searchConfiguration: relatedEntityType.label.toLowerCase(),
        nameVariants: 'true'
      });
    });
    this.selectableListService.deselectAll(this.listId);
  }
  getRelationFromId(relatedItem) {
    const relationshipLabel = this.currentItemIsLeftItem$.getValue() ? this.relationshipType.leftwardType : this.relationshipType.rightwardType;
    return this.relationshipService.searchByItemsAndType(this.relationshipType.id, this.item.uuid, relationshipLabel, [relatedItem.id]).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_10__.getFirstSucceededRemoteData)(), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_10__.getRemoteDataPayload)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_27__.map)(res => res.page[0]));
  }
  ngOnInit() {
    // store the left and right type of the relationship in a single observable
    this.relationshipLeftAndRightType$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_26__.combineLatest)([this.relationshipType.leftType, this.relationshipType.rightType].map(type => type.pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_10__.getFirstSucceededRemoteData)(), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_10__.getRemoteDataPayload)())));
    this.relatedEntityType$ = this.relationshipLeftAndRightType$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_27__.map)(([leftType, rightType]) => {
      if (leftType.uuid !== this.itemType.uuid) {
        return leftType;
      } else {
        return rightType;
      }
    }), (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_12__.hasValueOperator)());
    this.relatedEntityType$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_31__.take)(1)).subscribe(relatedEntityType => this.listId = `edit-relationship-${this.itemType.id}-${relatedEntityType.id}`);
    this.relationshipMessageKey$ = this.getRelationshipMessageKey();
    // initialize the pagination options
    this.paginationConfig = new _shared_pagination_pagination_component_options_model__WEBPACK_IMPORTED_MODULE_18__.PaginationComponentOptions();
    this.paginationConfig.id = `er${this.relationshipType.id}`;
    this.paginationConfig.pageSize = 5;
    this.paginationConfig.currentPage = 1;
    // get the pagination params from the route
    const currentPagination$ = this.paginationService.getCurrentPagination(this.paginationConfig.id, this.paginationConfig).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_34__.tap)(() => this.loading$.next(true)));
    // this adds thumbnail images when required by configuration
    const linksToFollow = (0,_shared_utils_relation_query_utils__WEBPACK_IMPORTED_MODULE_20__.itemLinksToFollow)(this.fetchThumbnail, this.appConfig.item.showAccessStatuses);
    this.subs.push((0,rxjs__WEBPACK_IMPORTED_MODULE_26__.combineLatest)([currentPagination$, this.currentItemIsLeftItem$, this.relatedEntityType$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_30__.switchMap)(([currentPagination, currentItemIsLeftItem, relatedEntityType]) => {
      // get the relationships for the current page, item, relationship type and related entity type
      return this.relationshipService.getItemRelationshipsByLabel(this.item, currentItemIsLeftItem ? this.relationshipType.leftwardType : this.relationshipType.rightwardType, {
        elementsPerPage: currentPagination.pageSize,
        currentPage: currentPagination.currentPage,
        searchParams: [new _core_cache_models_request_param_model__WEBPACK_IMPORTED_MODULE_2__.RequestParam('relatedEntityType', relatedEntityType.label)]
      }, true, true, ...linksToFollow);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_34__.tap)(rd => {
      this.relationshipsRd$.next(rd);
    }), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_10__.getAllSucceededRemoteData)(), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_10__.getRemoteDataPayload)()).subscribe(relationshipPaginatedList => {
      this.objectUpdatesService.initialize(this.url, relationshipPaginatedList.page, new Date());
    }));
    // keep isLastPage$ up to date based on relationshipsRd$
    this.subs.push(this.relationshipsRd$.pipe((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_12__.hasValueOperator)(), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_10__.getAllSucceededRemoteData)()).subscribe(rd => {
      this.isLastPage$.next((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_12__.hasNoValue)(rd.payload._links.next));
    }));
    this.subs.push(this.relationshipsRd$.pipe((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_12__.hasValueOperator)(), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_10__.getAllSucceededRemoteData)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_30__.switchMap)(rd =>
    // emit each relationship in the page separately
    (0,rxjs__WEBPACK_IMPORTED_MODULE_28__.from)(rd.payload.page).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_35__.mergeMap)(relationship =>
    // check for each relationship whether it's the left item
    this.relationshipService.isLeftItem(relationship, this.item).pipe(
    // emit an array containing both the relationship and whether it's the left item,
    // as we'll need both
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_30__.switchMap)(isLeftItem => {
      if (isLeftItem) {
        return relationship.rightItem.pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_10__.getFirstCompletedRemoteData)(), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_10__.getRemoteDataPayload)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_27__.map)(relatedItem => [relationship, isLeftItem, relatedItem]));
      } else {
        return relationship.leftItem.pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_10__.getFirstCompletedRemoteData)(), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_10__.getRemoteDataPayload)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_27__.map)(relatedItem => [relationship, isLeftItem, relatedItem]));
      }
    }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_27__.map)(([relationship, isLeftItem, relatedItem]) => {
      // turn it into a RelationshipIdentifiable, an
      const nameVariant = isLeftItem ? relationship.rightwardValue : relationship.leftwardValue;
      return {
        uuid: relationship.id,
        type: this.relationshipType,
        relationship,
        originalIsLeft: isLeftItem,
        originalItem: this.item,
        relatedItem: relatedItem,
        nameVariant
      };
    }),
    // wait until all relationships have been processed, and emit them all as a single array
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_33__.toArray)(),
    // if the pipe above completes without emitting anything, emit an empty array instead
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_36__.defaultIfEmpty)([]))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_30__.switchMap)(nextFields => {
      // Get a list that contains the unsaved changes for the page, as well as the page of
      // RelationshipIdentifiables, as a single list of FieldUpdates
      return this.objectUpdatesService.getFieldUpdates(this.url, nextFields).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_27__.map)(fieldUpdates => {
        const fieldUpdatesFiltered = {};
        this.nbAddedFields$.next(0);
        // iterate over the fieldupdates and filter out the ones that pertain to this
        // relationshiptype
        Object.keys(fieldUpdates).forEach(uuid => {
          if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_12__.hasValue)(fieldUpdates[uuid])) {
            const field = fieldUpdates[uuid].field;
            // only include fieldupdates regarding this RelationshipType
            if (field.type.id === this.relationshipType.id) {
              // if it's a newly added relationship
              if (fieldUpdates[uuid].changeType === _core_data_object_updates_field_change_type_model__WEBPACK_IMPORTED_MODULE_3__.FieldChangeType.ADD) {
                // increase the counter that tracks new relationships
                this.nbAddedFields$.next(this.nbAddedFields$.getValue() + 1);
                if (this.isLastPage$.getValue() === true) {
                  // only include newly added relationships to the output if we're on the last
                  // page
                  fieldUpdatesFiltered[uuid] = fieldUpdates[uuid];
                }
              } else {
                // include all others
                fieldUpdatesFiltered[uuid] = fieldUpdates[uuid];
              }
            }
          }
        });
        return fieldUpdatesFiltered;
      }));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_37__.startWith)({})).subscribe(updates => {
      this.loading$.next(false);
      this.updates$.next(updates);
    }));
  }
  ngOnDestroy() {
    this.subs.filter(subscription => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_12__.hasValue)(subscription)).forEach(subscription => subscription.unsubscribe());
  }
  static {
    this.ɵfac = function EditRelationshipListComponent_Factory(t) {
      return new (t || EditRelationshipListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](_core_data_object_updates_object_updates_service__WEBPACK_IMPORTED_MODULE_4__.ObjectUpdatesService), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](_core_cache_builders_link_service__WEBPACK_IMPORTED_MODULE_1__.LinkService), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](_core_data_relationship_data_service__WEBPACK_IMPORTED_MODULE_5__.RelationshipDataService), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_38__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](_core_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_6__.PaginationService), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](_shared_object_list_selectable_list_selectable_list_service__WEBPACK_IMPORTED_MODULE_16__.SelectableListService), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](_edit_item_relationships_service__WEBPACK_IMPORTED_MODULE_22__.EditItemRelationshipsService), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](_config_app_config_interface__WEBPACK_IMPORTED_MODULE_0__.APP_CONFIG));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineComponent"]({
      type: EditRelationshipListComponent,
      selectors: [["ds-edit-relationship-list"]],
      inputs: {
        item: "item",
        itemType: "itemType",
        url: "url",
        relationshipType: "relationshipType",
        hasChanges: "hasChanges",
        currentItemIsLeftItem$: "currentItemIsLeftItem$"
      },
      outputs: {
        submitModal: "submitModal"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵStandaloneFeature"]],
      decls: 12,
      vars: 14,
      consts: [[1, "h4"], [1, "ml-2", "btn", "btn-success", 3, "click", "dsBtnDisabled"], [1, "fas", "fa-plus"], [1, "d-none", "d-sm-inline"], [4, "ngVar"], [4, "ngIf"], [3, "paginationOptions", "collectionSize", "hideGear", "hidePagerWhenSinglePage"], [1, "my-2"], ["class", "relationship-row d-block alert", 3, "fieldUpdate", "url", "editItem", "ngClass", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "relationship-row", "d-block", "alert", 3, "fieldUpdate", "url", "editItem", "ngClass"]],
      template: function EditRelationshipListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](0, "h2", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipe"](2, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipe"](3, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](4, "button", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipe"](5, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵlistener"]("click", function EditRelationshipListComponent_Template_button_click_4_listener() {
            return ctx.openLookup();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](6, "i", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](7, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipe"](9, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](10, EditRelationshipListComponent_ng_container_10_Template, 5, 6, "ng-container", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipe"](11, "async");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipeBind1"](3, 6, _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipeBind1"](2, 4, ctx.relationshipMessageKey$)), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("dsBtnDisabled", _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipeBind1"](5, 8, ctx.hasChanges));
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtextInterpolate1"]("\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipeBind1"](9, 10, "item.edit.relationships.edit.buttons.add"), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngVar", _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipeBind1"](11, 12, ctx.updates$));
        }
      },
      dependencies: [_edit_relationship_edit_relationship_component__WEBPACK_IMPORTED_MODULE_23__.EditRelationshipComponent, _shared_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_17__.PaginationComponent, _angular_common__WEBPACK_IMPORTED_MODULE_39__.AsyncPipe, _shared_utils_object_values_pipe__WEBPACK_IMPORTED_MODULE_19__.ObjectValuesPipe, _shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_21__.VarDirective, _angular_common__WEBPACK_IMPORTED_MODULE_39__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_39__.NgFor, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_40__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_40__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_39__.NgClass, _shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_15__.ThemedLoadingComponent, _shared_btn_disabled_directive__WEBPACK_IMPORTED_MODULE_11__.BtnDisabledDirective],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n.relationship-row[_ngcontent-%COMP%]:not(.alert) {\n  padding: var(--bs-alert-padding-y) 0;\n}\n\n.relationship-row.alert[_ngcontent-%COMP%] {\n  margin-left: calc(-1 * var(--bs-alert-padding-x));\n  margin-right: calc(-1 * var(--bs-alert-padding-x));\n  margin-top: -1px;\n  margin-bottom: -1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtcmVsYXRpb25zaGlwLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQTtFQUNFLG9DQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxpREFBQTtFQUNBLGtEQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUVGIiwiZmlsZSI6ImVkaXQtcmVsYXRpb25zaGlwLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqL1xuLnJlbGF0aW9uc2hpcC1yb3c6bm90KC5hbGVydCkge1xuICBwYWRkaW5nOiB2YXIoLS1icy1hbGVydC1wYWRkaW5nLXkpIDA7XG59XG4ucmVsYXRpb25zaGlwLXJvdy5hbGVydCB7XG4gIG1hcmdpbi1sZWZ0OiBjYWxjKC0xICogdmFyKC0tYnMtYWxlcnQtcGFkZGluZy14KSk7XG4gIG1hcmdpbi1yaWdodDogY2FsYygtMSAqIHZhcigtLWJzLWFsZXJ0LXBhZGRpbmcteCkpO1xuICBtYXJnaW4tdG9wOiAtMXB4O1xuICBtYXJnaW4tYm90dG9tOiAtMXB4O1xufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaXRlbS1wYWdlL2VkaXQtaXRlbS1wYWdlL2l0ZW0tcmVsYXRpb25zaGlwcy9lZGl0LXJlbGF0aW9uc2hpcC1saXN0L2VkaXQtcmVsYXRpb25zaGlwLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQTtFQUNFLG9DQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxpREFBQTtFQUNBLGtEQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUVGO0FBQ0EsNGhDQUE0aEMiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqL1xuLnJlbGF0aW9uc2hpcC1yb3c6bm90KC5hbGVydCkge1xuICBwYWRkaW5nOiB2YXIoLS1icy1hbGVydC1wYWRkaW5nLXkpIDA7XG59XG4ucmVsYXRpb25zaGlwLXJvdy5hbGVydCB7XG4gIG1hcmdpbi1sZWZ0OiBjYWxjKC0xICogdmFyKC0tYnMtYWxlcnQtcGFkZGluZy14KSk7XG4gIG1hcmdpbi1yaWdodDogY2FsYygtMSAqIHZhcigtLWJzLWFsZXJ0LXBhZGRpbmcteCkpO1xuICBtYXJnaW4tdG9wOiAtMXB4O1xuICBtYXJnaW4tYm90dG9tOiAtMXB4O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 5634:
/*!**************************************************************************************************************!*\
  !*** ./src/app/item-page/edit-item-page/item-relationships/edit-relationship/edit-relationship.component.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditRelationshipComponent: () => (/* binding */ EditRelationshipComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 83485);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 27639);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 85687);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 78374);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 84975);
/* harmony import */ var _core_data_object_updates_field_change_type_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/data/object-updates/field-change-type.model */ 25103);
/* harmony import */ var _core_data_object_updates_object_updates_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/data/object-updates/object-updates.service */ 59033);
/* harmony import */ var _core_shared_item_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/shared/item.model */ 88318);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/shared/operators */ 55757);
/* harmony import */ var _core_shared_view_mode_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/shared/view-mode.model */ 78448);
/* harmony import */ var _shared_btn_disabled_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/btn-disabled.directive */ 60456);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/empty.util */ 82777);
/* harmony import */ var _shared_object_collection_shared_listable_object_listable_object_component_loader_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/object-collection/shared/listable-object/listable-object-component-loader.component */ 17191);
/* harmony import */ var _virtual_metadata_virtual_metadata_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../virtual-metadata/virtual-metadata.component */ 88423);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 49966);


















function EditRelationshipComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 2)(1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "ds-listable-object-component-loader", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 5)(5, "div", 6)(6, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function EditRelationshipComponent_div_0_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      const virtualMetadataModal_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.openVirtualMetadataModal(virtualMetadataModal_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](8, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function EditRelationshipComponent_div_0_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.undo());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](11, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("object", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 7, ctx_r1.relatedItem$))("viewMode", ctx_r1.viewMode)("value", ctx_r1.nameVariant);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](7, 9, "item.edit.metadata.edit.buttons.remove"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("dsBtnDisabled", !ctx_r1.canRemove());
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](10, 11, "item.edit.metadata.edit.buttons.undo"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("dsBtnDisabled", !ctx_r1.canUndo());
  }
}
function EditRelationshipComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ds-virtual-metadata", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("close", function EditRelationshipComponent_ng_template_2_Template_ds_virtual_metadata_close_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.closeVirtualMetadataModal());
    })("save", function EditRelationshipComponent_ng_template_2_Template_ds_virtual_metadata_save_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.remove());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("relationshipId", ctx_r1.relationship.id)("leftItem", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](1, 4, ctx_r1.leftItem$))("rightItem", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 6, ctx_r1.rightItem$))("url", ctx_r1.url);
  }
}
class EditRelationshipComponent {
  /**
   * The relationship being edited
   */
  get relationship() {
    return this.update.relationship;
  }
  get update() {
    return this.fieldUpdate.field;
  }
  get nameVariant() {
    return this.update.nameVariant;
  }
  constructor(objectUpdatesService, modalService) {
    this.objectUpdatesService = objectUpdatesService;
    this.modalService = modalService;
    /**
     * The related item of this relationship
     */
    this.relatedItem$ = new rxjs__WEBPACK_IMPORTED_MODULE_10__.BehaviorSubject(null);
    /**
     * The view-mode we're currently on
     */
    this.viewMode = _core_shared_view_mode_model__WEBPACK_IMPORTED_MODULE_4__.ViewMode.ListElement;
  }
  /**
   * Sets the current relationship based on the fieldUpdate input field
   */
  ngOnChanges() {
    if (this.relationship && (!!this.relationship.leftItem || !!this.relationship.rightItem)) {
      this.leftItem$ = this.relationship.leftItem.pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_3__.getFirstSucceededRemoteData)(), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_3__.getRemoteDataPayload)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.filter)(item => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_6__.hasValue)(item) && (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_6__.isNotEmpty)(item.uuid)));
      this.rightItem$ = this.relationship.rightItem.pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_3__.getFirstSucceededRemoteData)(), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_3__.getRemoteDataPayload)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.filter)(item => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_6__.hasValue)(item) && (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_6__.isNotEmpty)(item.uuid)));
      (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.combineLatest)([this.leftItem$, this.rightItem$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(([leftItem, rightItem]) => leftItem.uuid === this.editItem.uuid ? rightItem : leftItem), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.take)(1)).subscribe(relatedItem => {
        this.relatedItem$.next(relatedItem);
      });
    } else {
      this.relatedItem$.next(this.update.relatedItem);
    }
  }
  /**
   * Sends a new remove update for this field to the object updates service
   */
  remove() {
    this.closeVirtualMetadataModal();
    (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.combineLatest)([this.leftItem$, this.rightItem$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(items => items.map(item => this.objectUpdatesService.isSelectedVirtualMetadata(this.url, this.relationship.id, item.uuid))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.switchMap)(selection$ => (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.combineLatest)(selection$)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(selection => {
      return Object.assign({}, this.fieldUpdate.field, {
        keepLeftVirtualMetadata: selection[0] === true,
        keepRightVirtualMetadata: selection[1] === true
      });
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.take)(1)).subscribe(deleteRelationship => {
      this.objectUpdatesService.saveRemoveFieldUpdate(this.url, deleteRelationship);
    });
  }
  openVirtualMetadataModal(content) {
    this.modalRef = this.modalService.open(content);
  }
  closeVirtualMetadataModal() {
    this.modalRef.close();
  }
  /**
   * Cancels the current update for this field in the object updates service
   */
  undo() {
    this.objectUpdatesService.removeSingleFieldUpdate(this.url, this.fieldUpdate.field.uuid);
  }
  /**
   * Check if a user should be allowed to remove this field
   */
  canRemove() {
    return this.fieldUpdate.changeType !== _core_data_object_updates_field_change_type_model__WEBPACK_IMPORTED_MODULE_0__.FieldChangeType.REMOVE && this.fieldUpdate.changeType !== _core_data_object_updates_field_change_type_model__WEBPACK_IMPORTED_MODULE_0__.FieldChangeType.ADD;
  }
  /**
   * Check if a user should be allowed to cancel the update to this field
   */
  canUndo() {
    return this.fieldUpdate.changeType?.valueOf() >= 0;
  }
  static {
    this.ɵfac = function EditRelationshipComponent_Factory(t) {
      return new (t || EditRelationshipComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_core_data_object_updates_object_updates_service__WEBPACK_IMPORTED_MODULE_1__.ObjectUpdatesService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbModal));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
      type: EditRelationshipComponent,
      selectors: [["ds-edit-relationship"]],
      inputs: {
        fieldUpdate: "fieldUpdate",
        url: "url",
        editItem: "editItem"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵStandaloneFeature"]],
      decls: 4,
      vars: 3,
      consts: [["virtualMetadataModal", ""], ["class", "row", 4, "ngIf"], [1, "row"], [1, "col-10", "relationship"], [3, "object", "viewMode", "value"], [1, "col-2"], [1, "btn-group", "relationship-action-buttons"], [1, "btn", "btn-outline-danger", "btn-sm", 3, "click", "dsBtnDisabled", "title"], [1, "fas", "fa-trash-alt", "fa-fw"], [1, "btn", "btn-outline-warning", "btn-sm", 3, "click", "dsBtnDisabled", "title"], [1, "fas", "fa-undo-alt", "fa-fw"], [3, "close", "save", "relationshipId", "leftItem", "rightItem", "url"]],
      template: function EditRelationshipComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, EditRelationshipComponent_div_0_Template, 12, 13, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](1, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, EditRelationshipComponent_ng_template_2_Template, 3, 8, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](1, 1, ctx.relatedItem$));
        }
      },
      dependencies: [_shared_object_collection_shared_listable_object_listable_object_component_loader_component__WEBPACK_IMPORTED_MODULE_7__.ListableObjectComponentLoaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_17__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslatePipe, _virtual_metadata_virtual_metadata_component__WEBPACK_IMPORTED_MODULE_8__.VirtualMetadataComponent, _shared_btn_disabled_directive__WEBPACK_IMPORTED_MODULE_5__.BtnDisabledDirective],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n.btn[disabled][_ngcontent-%COMP%] {\n  color: var(--bs-gray-600);\n  border-color: var(--bs-gray-600);\n  z-index: 0;\n}\n\n.relationship-action-buttons[_ngcontent-%COMP%] {\n  margin: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtcmVsYXRpb25zaGlwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBO0FBQ0E7RUFDRSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUNBO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtBQUVGIiwiZmlsZSI6ImVkaXQtcmVsYXRpb25zaGlwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi9cbi5idG5bZGlzYWJsZWRdIHtcbiAgY29sb3I6IHZhcigtLWJzLWdyYXktNjAwKTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1icy1ncmF5LTYwMCk7XG4gIHotaW5kZXg6IDA7XG59XG4ucmVsYXRpb25zaGlwLWFjdGlvbi1idXR0b25zIHtcbiAgbWFyZ2luOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaXRlbS1wYWdlL2VkaXQtaXRlbS1wYWdlL2l0ZW0tcmVsYXRpb25zaGlwcy9lZGl0LXJlbGF0aW9uc2hpcC9lZGl0LXJlbGF0aW9uc2hpcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBO0VBQ0UseUJBQUE7RUFDQSxnQ0FBQTtFQUNBLFVBQUE7QUFDRjs7QUFDQTtFQUNFLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7QUFFRjtBQUNBLHdoQ0FBd2hDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi9cbi5idG5bZGlzYWJsZWRdIHtcbiAgY29sb3I6IHZhcigtLWJzLWdyYXktNjAwKTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1icy1ncmF5LTYwMCk7XG4gIHotaW5kZXg6IDA7XG59XG4ucmVsYXRpb25zaGlwLWFjdGlvbi1idXR0b25zIHtcbiAgbWFyZ2luOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 10735:
/*!*********************************************************************************************!*\
  !*** ./src/app/item-page/edit-item-page/item-relationships/item-relationships.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ItemRelationshipsComponent: () => (/* binding */ ItemRelationshipsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 83485);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs/operators */ 64785);
/* harmony import */ var _core_cache_object_cache_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/cache/object-cache.service */ 41684);
/* harmony import */ var _core_data_entity_type_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/data/entity-type-data.service */ 30077);
/* harmony import */ var _core_data_item_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/data/item-data.service */ 29326);
/* harmony import */ var _core_data_object_updates_object_updates_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/data/object-updates/object-updates.service */ 59033);
/* harmony import */ var _core_data_relationship_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/data/relationship-data.service */ 48833);
/* harmony import */ var _core_data_relationship_type_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/data/relationship-type-data.service */ 38096);
/* harmony import */ var _core_data_request_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/data/request.service */ 32473);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/shared/operators */ 55757);
/* harmony import */ var _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/alert/alert.component */ 16292);
/* harmony import */ var _shared_alert_alert_type__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/alert/alert-type */ 47978);
/* harmony import */ var _shared_btn_disabled_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/btn-disabled.directive */ 60456);
/* harmony import */ var _shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/loading/themed-loading.component */ 82394);
/* harmony import */ var _shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/notifications/notifications.service */ 69472);
/* harmony import */ var _shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/utils/follow-link-config.model */ 67600);
/* harmony import */ var _simple_item_types_shared_item_relationships_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../simple/item-types/shared/item-relationships-utils */ 46588);
/* harmony import */ var _abstract_item_update_abstract_item_update_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../abstract-item-update/abstract-item-update.component */ 30945);
/* harmony import */ var _edit_item_relationships_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./edit-item-relationships.service */ 87732);
/* harmony import */ var _edit_relationship_list_wrapper_edit_relationship_list_wrapper_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./edit-relationship-list-wrapper/edit-relationship-list-wrapper.component */ 8703);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 49966);






































function ItemRelationshipsComponent_ng_container_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainer"](0);
  }
}
function ItemRelationshipsComponent_ng_container_1_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](1, "ds-edit-relationship-list-wrapper", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const relationshipType_r1 = ctx.$implicit;
    const entityType_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).ngIf;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("url", ctx_r2.url)("item", ctx_r2.item)("itemType", entityType_r2)("relationshipType", relationshipType_r1)("hasChanges", ctx_r2.hasChanges$);
  }
}
function ItemRelationshipsComponent_ng_container_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, ItemRelationshipsComponent_ng_container_1_div_3_div_1_Template, 2, 5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const relationshipTypes_r4 = ctx.ngIf;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", relationshipTypes_r4)("ngForTrackBy", ctx_r2.trackById);
  }
}
function ItemRelationshipsComponent_ng_container_1_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainer"](0);
  }
}
function ItemRelationshipsComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](2, ItemRelationshipsComponent_ng_container_1_ng_container_2_Template, 1, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](3, ItemRelationshipsComponent_ng_container_1_div_3_Template, 2, 2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "div", 8)(6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](7, ItemRelationshipsComponent_ng_container_1_ng_container_7_Template, 1, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    const loading_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵreference"](6);
    const buttons_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵreference"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngTemplateOutlet", buttons_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](4, 4, ctx_r2.relationshipTypes$))("ngIfElse", loading_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngTemplateOutlet", buttons_r6);
  }
}
function ItemRelationshipsComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "ds-alert", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("type", ctx_r2.AlertType.Info);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 2, "item.edit.relationships.no-entity-type"), " ");
  }
}
function ItemRelationshipsComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "ds-loading");
  }
}
function ItemRelationshipsComponent_ng_template_7_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function ItemRelationshipsComponent_ng_template_7_button_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r8);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r2.discard());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](2, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("dsBtnDisabled", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](1, 2, ctx_r2.hasChanges$) !== true);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"]("\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](5, 4, "item.edit.metadata.discard-button"), "");
  }
}
function ItemRelationshipsComponent_ng_template_7_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function ItemRelationshipsComponent_ng_template_7_button_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r9);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r2.reinstate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](1, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"]("\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](4, 1, "item.edit.metadata.reinstate-button"), "");
  }
}
function ItemRelationshipsComponent_ng_template_7_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "span", 25);
  }
}
function ItemRelationshipsComponent_ng_template_7_i_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "i", 26);
  }
}
function ItemRelationshipsComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, ItemRelationshipsComponent_ng_template_7_button_1_Template, 6, 6, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](3, ItemRelationshipsComponent_ng_template_7_button_3_Template, 5, 3, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function ItemRelationshipsComponent_ng_template_7_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r2.submit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](8, ItemRelationshipsComponent_ng_template_7_span_8_Template, 1, 0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](10, ItemRelationshipsComponent_ng_template_7_i_10_Template, 1, 0, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](11, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](12, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 6, ctx_r2.isReinstatable$) !== true);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](4, 8, ctx_r2.isReinstatable$));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("dsBtnDisabled", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](6, 10, ctx_r2.hasChanges$) !== true || _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](7, 12, ctx_r2.isSaving$) === true);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](9, 14, ctx_r2.isSaving$));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](11, 16, ctx_r2.isSaving$) !== true);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"]("\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](14, 18, "item.edit.metadata.save-button"), "");
  }
}
/**
 * Component for displaying an item's relationships edit page
 */
class ItemRelationshipsComponent extends _abstract_item_update_abstract_item_update_component__WEBPACK_IMPORTED_MODULE_15__.AbstractItemUpdateComponent {
  get isSaving$() {
    return this.editItemRelationshipsService.isSaving$;
  }
  constructor(itemService, objectUpdatesService, router, notificationsService, translateService, route, relationshipService, objectCache, requestService, entityTypeService, relationshipTypeService, cdr, modalService, editItemRelationshipsService) {
    super(itemService, objectUpdatesService, router, notificationsService, translateService, route);
    this.itemService = itemService;
    this.objectUpdatesService = objectUpdatesService;
    this.router = router;
    this.notificationsService = notificationsService;
    this.translateService = translateService;
    this.route = route;
    this.relationshipService = relationshipService;
    this.objectCache = objectCache;
    this.requestService = requestService;
    this.entityTypeService = entityTypeService;
    this.relationshipTypeService = relationshipTypeService;
    this.cdr = cdr;
    this.modalService = modalService;
    this.editItemRelationshipsService = editItemRelationshipsService;
    /**
     * The item's entity type as an observable
     */
    this.entityType$ = new rxjs__WEBPACK_IMPORTED_MODULE_19__.BehaviorSubject(undefined);
    this.AlertType = _shared_alert_alert_type__WEBPACK_IMPORTED_MODULE_9__.AlertType;
  }
  /**
   * Initialize the values and updates of the current item's relationship fields
   */
  initializeUpdates() {
    const label = this.item.firstMetadataValue('dspace.entity.type');
    if (label !== undefined) {
      this.relationshipTypes$ = this.relationshipTypeService.searchByEntityType(label, true, true, ...this.getRelationshipTypeFollowLinks()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.map)(relationshipTypes => relationshipTypes.page), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.distinctUntilChanged)((0,_simple_item_types_shared_item_relationships_utils__WEBPACK_IMPORTED_MODULE_14__.compareArraysUsingIds)()));
      this.entityTypeService.getEntityTypeByLabel(label).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_7__.getFirstSucceededRemoteData)(), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_7__.getRemoteDataPayload)()).subscribe(type => this.entityType$.next(type));
    } else {
      this.entityType$.next(undefined);
    }
  }
  /**
   * Initialize the prefix for notification messages
   */
  initializeNotificationsPrefix() {
    this.notificationsPrefix = 'item.edit.relationships.notifications.';
  }
  /**
   * Resolve the currently selected related items back to relationships and send a delete request for each of the relationships found
   * Make sure the lists are refreshed afterwards and notifications are sent for success and errors
   */
  submit() {
    this.editItemRelationshipsService.submit(this.item, this.url);
  }
  /**
   * Sends all initial values of this item to the object updates service
   */
  initializeOriginalFields() {
    return this.editItemRelationshipsService.initializeOriginalFields(this.item, this.url);
  }
  /**
   * Method to prevent unnecessary for loop re-rendering
   */
  trackById(index, relationshipType) {
    return relationshipType.id;
  }
  getRelationshipTypeFollowLinks() {
    return [(0,_shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_13__.followLink)('leftType'), (0,_shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_13__.followLink)('rightType')];
  }
  static {
    this.ɵfac = function ItemRelationshipsComponent_Factory(t) {
      return new (t || ItemRelationshipsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_core_data_item_data_service__WEBPACK_IMPORTED_MODULE_2__.ItemDataService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_core_data_object_updates_object_updates_service__WEBPACK_IMPORTED_MODULE_3__.ObjectUpdatesService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_22__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_12__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_22__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_core_data_relationship_data_service__WEBPACK_IMPORTED_MODULE_4__.RelationshipDataService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_core_cache_object_cache_service__WEBPACK_IMPORTED_MODULE_0__.ObjectCacheService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_core_data_request_service__WEBPACK_IMPORTED_MODULE_6__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_core_data_entity_type_data_service__WEBPACK_IMPORTED_MODULE_1__.EntityTypeDataService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_core_data_relationship_type_data_service__WEBPACK_IMPORTED_MODULE_5__.RelationshipTypeDataService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_18__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_edit_item_relationships_service__WEBPACK_IMPORTED_MODULE_16__.EditItemRelationshipsService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineComponent"]({
      type: ItemRelationshipsComponent,
      selectors: [["ds-item-relationships"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵStandaloneFeature"]],
      decls: 9,
      vars: 4,
      consts: [["noEntityType", ""], ["loading", ""], ["buttons", ""], [1, "item-relationships"], [4, "ngIf", "ngIfElse"], [1, "button-row", "top", "d-flex", "justify-content-end"], [4, "ngTemplateOutlet"], ["class", "mb-4", 4, "ngIf", "ngIfElse"], [1, "button-row", "bottom"], [1, "float-right", "ml-gap"], [1, "mb-4"], ["class", "mb-4", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "url", "item", "itemType", "relationshipType", "hasChanges"], [1, "d-block", "mt-2", 3, "type"], [1, "d-flex", "space-children-mr", "justify-content-end"], ["class", "btn btn-danger", 3, "dsBtnDisabled", "click", 4, "ngIf"], ["class", "btn btn-warning", 3, "click", 4, "ngIf"], [1, "btn", "btn-primary", 3, "click", "dsBtnDisabled"], ["aria-hidden", "true", "class", "spinner-border spinner-border-sm", "role", "status", 4, "ngIf"], ["aria-hidden", "true", "class", "fas fa-save", 4, "ngIf"], [1, "d-none", "d-sm-inline"], [1, "btn", "btn-danger", 3, "click", "dsBtnDisabled"], ["aria-hidden", "true", 1, "fas", "fa-times"], [1, "btn", "btn-warning", 3, "click"], ["aria-hidden", "true", 1, "fas", "fa-undo-alt"], ["aria-hidden", "true", "role", "status", 1, "spinner-border", "spinner-border-sm"], ["aria-hidden", "true", 1, "fas", "fa-save"]],
      template: function ItemRelationshipsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, ItemRelationshipsComponent_ng_container_1_Template, 8, 6, "ng-container", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](3, ItemRelationshipsComponent_ng_template_3_Template, 3, 4, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplateRefExtractor"])(5, ItemRelationshipsComponent_ng_template_5_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplateRefExtractor"])(7, ItemRelationshipsComponent_ng_template_7_Template, 15, 20, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplateRefExtractor"]);
        }
        if (rf & 2) {
          const noEntityType_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵreference"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 2, ctx.entityType$))("ngIfElse", noEntityType_r10);
        }
      },
      dependencies: [_shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_8__.AlertComponent, _angular_common__WEBPACK_IMPORTED_MODULE_25__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_25__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_25__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_25__.NgTemplateOutlet, _shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_11__.ThemedLoadingComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__.TranslatePipe, _edit_relationship_list_wrapper_edit_relationship_list_wrapper_component__WEBPACK_IMPORTED_MODULE_17__.EditRelationshipListWrapperComponent, _shared_btn_disabled_directive__WEBPACK_IMPORTED_MODULE_10__.BtnDisabledDirective],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n.button-row[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin-right: var(--ds-gap);\n}\n\n.button-row[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n\n@media screen and (min-width: 576px) {\n  .button-row[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    min-width: var(--ds-edit-item-button-min-width);\n  }\n}\n.button-row.top[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin-top: calc(var(--bs-spacer) / 2);\n  margin-bottom: calc(var(--bs-spacer) / 2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW0tcmVsYXRpb25zaGlwcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBO0VBQ0UsMkJBQUE7QUFDRjs7QUFDQTtFQUNFLGVBQUE7QUFFRjs7QUFBQTtFQUNFO0lBQ0UsK0NBQUE7RUFHRjtBQUNGO0FBREE7RUFDRSxzQ0FBQTtFQUNBLHlDQUFBO0FBR0YiLCJmaWxlIjoiaXRlbS1yZWxhdGlvbnNoaXBzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi9cbi5idXR0b24tcm93IC5idG4ge1xuICBtYXJnaW4tcmlnaHQ6IHZhcigtLWRzLWdhcCk7XG59XG4uYnV0dG9uLXJvdyAuYnRuOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NzZweCkge1xuICAuYnV0dG9uLXJvdyAuYnRuIHtcbiAgICBtaW4td2lkdGg6IHZhcigtLWRzLWVkaXQtaXRlbS1idXR0b24tbWluLXdpZHRoKTtcbiAgfVxufVxuLmJ1dHRvbi1yb3cudG9wIC5idG4ge1xuICBtYXJnaW4tdG9wOiBjYWxjKHZhcigtLWJzLXNwYWNlcikgLyAyKTtcbiAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1icy1zcGFjZXIpIC8gMik7XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaXRlbS1wYWdlL2VkaXQtaXRlbS1wYWdlL2l0ZW0tcmVsYXRpb25zaGlwcy9pdGVtLXJlbGF0aW9uc2hpcHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQTtFQUNFLDJCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxlQUFBO0FBRUY7O0FBQUE7RUFDRTtJQUNFLCtDQUFBO0VBR0Y7QUFDRjtBQURBO0VBQ0Usc0NBQUE7RUFDQSx5Q0FBQTtBQUdGO0FBQ0EsNHFDQUE0cUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqL1xuLmJ1dHRvbi1yb3cgLmJ0biB7XG4gIG1hcmdpbi1yaWdodDogdmFyKC0tZHMtZ2FwKTtcbn1cbi5idXR0b24tcm93IC5idG46bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gIC5idXR0b24tcm93IC5idG4ge1xuICAgIG1pbi13aWR0aDogdmFyKC0tZHMtZWRpdC1pdGVtLWJ1dHRvbi1taW4td2lkdGgpO1xuICB9XG59XG4uYnV0dG9uLXJvdy50b3AgLmJ0biB7XG4gIG1hcmdpbi10b3A6IGNhbGModmFyKC0tYnMtc3BhY2VyKSAvIDIpO1xuICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLWJzLXNwYWNlcikgLyAyKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 3915:
/*!*******************************************************************************!*\
  !*** ./src/app/item-page/edit-item-page/item-status/item-status.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ItemStatusComponent: () => (/* binding */ ItemStatusComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 83485);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 17796);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs */ 27639);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 46891);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 84975);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 74671);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 19847);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 64785);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 50047);
/* harmony import */ var _core_data_configuration_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/data/configuration-data.service */ 8917);
/* harmony import */ var _core_data_feature_authorization_authorization_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/data/feature-authorization/authorization-data.service */ 3675);
/* harmony import */ var _core_data_feature_authorization_feature_id__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/data/feature-authorization/feature-id */ 3970);
/* harmony import */ var _core_data_identifier_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/data/identifier-data.service */ 90378);
/* harmony import */ var _core_orcid_orcid_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/orcid/orcid-auth.service */ 89147);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/shared/operators */ 55757);
/* harmony import */ var _shared_animations_fade__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/animations/fade */ 50332);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/empty.util */ 82777);
/* harmony import */ var _item_page_routing_paths__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../item-page-routing-paths */ 90887);
/* harmony import */ var _item_operation_item_operation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../item-operation/item-operation.component */ 37223);
/* harmony import */ var _item_operation_itemOperation_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../item-operation/itemOperation.model */ 87134);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 90310);























const _c0 = a0 => ({
  "pt-3": a0
});
function ItemStatusComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 7)(1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const statusKey_r1 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 4, "item.edit.tabs.status.labels." + statusKey_r1), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate1"]("id", "status-", statusKey_r1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r1.statusData[statusKey_r1], " ");
  }
}
function ItemStatusComponent_div_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const identifier_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", identifier_r3.identifierType.toLocaleUpperCase(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate2"]("", identifier_r3.value, " (", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](5, 3, "item.edit.identifiers.doi.status." + identifier_r3.identifierStatus), ")");
  }
}
function ItemStatusComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, ItemStatusComponent_div_5_div_1_Template, 6, 5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const identifier_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", identifier_r3.identifierType === "doi");
  }
}
function ItemStatusComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "ds-item-operation", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const operation_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](2, _c0, operation_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("operation", operation_r4);
  }
}
/**
 * Component for displaying an item's status
 */
class ItemStatusComponent {
  constructor(route, authorizationService, identifierDataService, configurationService, orcidAuthService) {
    this.route = route;
    this.authorizationService = authorizationService;
    this.identifierDataService = identifierDataService;
    this.configurationService = configurationService;
    this.orcidAuthService = orcidAuthService;
    /**
     * The possible actions that can be performed on the item
     *  key: id   value: url to action's component
     */
    this.operations$ = new rxjs__WEBPACK_IMPORTED_MODULE_12__.BehaviorSubject([]);
    /**
     * Configuration and state variables regarding DOIs
     */
    this.subs = [];
  }
  /**
   * Initialise component
   */
  ngOnInit() {
    this.itemRD$ = this.route.parent.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(data => data.dso));
    this.itemRD$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.first)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(data => data.payload)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.switchMap)(item => {
      this.statusData = Object.assign({
        id: item.id,
        handle: item.handle,
        lastModified: item.lastModified
      });
      this.statusDataKeys = Object.keys(this.statusData);
      // Observable for item identifiers (retrieved from embedded link)
      this.identifiers$ = this.identifierDataService.getIdentifierDataFor(item).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(identifierRD => {
        if (identifierRD.statusCode !== 401 && (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_7__.hasValue)(identifierRD.payload)) {
          return identifierRD.payload.identifiers;
        } else {
          return null;
        }
      }));
      // Observable for configuration determining whether the Register DOI feature is enabled
      const registerConfigEnabled$ = this.configurationService.findByPropertyName('identifiers.item-status.register-doi').pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_5__.getFirstCompletedRemoteData)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(response => {
        // Return true if a successful response with a 'true' value was retrieved, otherwise return false
        if (response.hasSucceeded) {
          const payload = response.payload;
          if (payload.values.length > 0 && (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_7__.hasValue)(payload.values[0])) {
            return payload.values[0] === 'true';
          } else {
            return false;
          }
        } else {
          return false;
        }
      }));
      /**
       * Construct a base list of operations.
       * The key is used to build messages
       * i18n example: 'item.edit.tabs.status.buttons.<key>.label'
       * The value is supposed to be a href for the button
       */
      const currentUrl = this.getCurrentUrl(item);
      const initialOperations = [new _item_operation_itemOperation_model__WEBPACK_IMPORTED_MODULE_10__.ItemOperation('authorizations', `${currentUrl}/authorizations`, _core_data_feature_authorization_feature_id__WEBPACK_IMPORTED_MODULE_2__.FeatureID.CanManagePolicies, true), new _item_operation_itemOperation_model__WEBPACK_IMPORTED_MODULE_10__.ItemOperation('mappedCollections', `${currentUrl}/mapper`, _core_data_feature_authorization_feature_id__WEBPACK_IMPORTED_MODULE_2__.FeatureID.CanManageMappings, true), item.isWithdrawn ? new _item_operation_itemOperation_model__WEBPACK_IMPORTED_MODULE_10__.ItemOperation('reinstate', `${currentUrl}/reinstate`, _core_data_feature_authorization_feature_id__WEBPACK_IMPORTED_MODULE_2__.FeatureID.ReinstateItem, true) : new _item_operation_itemOperation_model__WEBPACK_IMPORTED_MODULE_10__.ItemOperation('withdraw', `${currentUrl}/withdraw`, _core_data_feature_authorization_feature_id__WEBPACK_IMPORTED_MODULE_2__.FeatureID.WithdrawItem, true), item.isDiscoverable ? new _item_operation_itemOperation_model__WEBPACK_IMPORTED_MODULE_10__.ItemOperation('private', `${currentUrl}/private`, _core_data_feature_authorization_feature_id__WEBPACK_IMPORTED_MODULE_2__.FeatureID.CanMakePrivate, true) : new _item_operation_itemOperation_model__WEBPACK_IMPORTED_MODULE_10__.ItemOperation('public', `${currentUrl}/public`, _core_data_feature_authorization_feature_id__WEBPACK_IMPORTED_MODULE_2__.FeatureID.CanMakePrivate, true), new _item_operation_itemOperation_model__WEBPACK_IMPORTED_MODULE_10__.ItemOperation('move', `${currentUrl}/move`, _core_data_feature_authorization_feature_id__WEBPACK_IMPORTED_MODULE_2__.FeatureID.CanMove, true), new _item_operation_itemOperation_model__WEBPACK_IMPORTED_MODULE_10__.ItemOperation('delete', `${currentUrl}/delete`, _core_data_feature_authorization_feature_id__WEBPACK_IMPORTED_MODULE_2__.FeatureID.CanDelete, true)];
      this.operations$.next(initialOperations);
      /**
       *  When the identifier data stream changes, determine whether the register DOI button should be shown or not.
       *  This is based on whether the DOI is in the right state (minted or pending, not already queued for registration
       *  or registered) and whether the configuration property identifiers.item-status.register-doi is true
       */
      const ops$ = this.identifierDataService.getIdentifierDataFor(item).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_5__.getFirstCompletedRemoteData)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.mergeMap)(dataRD => {
        if (dataRD.hasSucceeded) {
          const identifiers = dataRD.payload.identifiers;
          let no_doi = true;
          let pending = false;
          if (identifiers !== undefined && identifiers !== null) {
            identifiers.forEach(identifier => {
              if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_7__.hasValue)(identifier) && identifier.identifierType === 'doi') {
                // The item has some kind of DOI
                no_doi = false;
                if (['PENDING', 'MINTED', null].includes(identifier.identifierStatus)) {
                  // The item's DOI is pending, minted or null.
                  // It isn't registered, reserved, queued for registration or reservation or update, deleted
                  // or queued for deletion.
                  pending = true;
                }
              }
            });
          }
          // If there is no DOI, or a pending/minted/null DOI, and the config is enabled, return true
          return registerConfigEnabled$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(enabled => {
            return enabled && (pending || no_doi);
          }));
        } else {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.of)(false);
        }
      }),
      // Switch map pushes the register DOI operation onto a copy of the base array then returns to the pipe
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.switchMap)(showDoi => {
        const ops = [...initialOperations];
        if (showDoi) {
          const op = new _item_operation_itemOperation_model__WEBPACK_IMPORTED_MODULE_10__.ItemOperation('register-doi', `${currentUrl}/register-doi`, _core_data_feature_authorization_feature_id__WEBPACK_IMPORTED_MODULE_2__.FeatureID.CanRegisterDOI, true);
          ops.splice(ops.length - 1, 0, op); // Add item before last
        }
        return ops;
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.concatMap)(op => {
        if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_7__.hasValue)(op.featureID)) {
          return this.authorizationService.isAuthorized(op.featureID, item.self).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(authorized => {
            op.setDisabled(!authorized);
            op.setAuthorized(authorized);
            return op;
          }));
        }
        return [op];
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.toArray)());
      let orcidOps$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.of)([]);
      if (this.orcidAuthService.isLinkedToOrcid(item)) {
        orcidOps$ = this.orcidAuthService.onlyAdminCanDisconnectProfileFromOrcid().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(canDisconnect => {
          if (canDisconnect) {
            return [new _item_operation_itemOperation_model__WEBPACK_IMPORTED_MODULE_10__.ItemOperation('unlinkOrcid', `${currentUrl}/unlink-orcid`)];
          }
          return [];
        }));
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.combineLatest)([ops$, orcidOps$]);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(([ops, orcidOps]) => [...ops, ...orcidOps])).subscribe(ops => this.operations$.next(ops));
    this.itemPageRoute$ = this.itemRD$.pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_5__.getAllSucceededRemoteDataPayload)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(item => (0,_item_page_routing_paths__WEBPACK_IMPORTED_MODULE_8__.getItemPageRoute)(item)));
  }
  /**
   * Get the current url without query params
   * @returns {string}  url
   */
  getCurrentUrl(item) {
    return (0,_item_page_routing_paths__WEBPACK_IMPORTED_MODULE_8__.getItemEditRoute)(item);
  }
  trackOperation(index, operation) {
    return (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_7__.hasValue)(operation) ? operation.operationKey : undefined;
  }
  ngOnDestroy() {
    this.subs.filter(subscription => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_7__.hasValue)(subscription)).forEach(subscription => subscription.unsubscribe());
  }
  static {
    this.ɵfac = function ItemStatusComponent_Factory(t) {
      return new (t || ItemStatusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_22__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_core_data_feature_authorization_authorization_data_service__WEBPACK_IMPORTED_MODULE_1__.AuthorizationDataService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_core_data_identifier_data_service__WEBPACK_IMPORTED_MODULE_3__.IdentifierDataService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_core_data_configuration_data_service__WEBPACK_IMPORTED_MODULE_0__.ConfigurationDataService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_core_orcid_orcid_auth_service__WEBPACK_IMPORTED_MODULE_4__.OrcidAuthService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
      type: ItemStatusComponent,
      selectors: [["ds-base-item-status"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵStandaloneFeature"]],
      decls: 17,
      vars: 19,
      consts: [[1, "mt-2"], [1, "row"], ["class", "w-100 pt-1", 4, "ngFor", "ngForOf"], [1, "col-12", "col-md-3", "float-left", "status-label", "font-weight-bold"], ["id", "status-itemPage", 1, "col-12", "col-md-9", "float-left", "status-data"], [3, "routerLink"], ["class", "w-100", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "w-100", "pt-1"], [1, "col-12", "col-md-9", "float-left", "status-data", 3, "id"], [4, "ngIf"], [1, "col-12", "col-md-9", "float-left", "status-label", "font-weight-bold"], [1, "w-100", 3, "ngClass"], [3, "operation"]],
      template: function ItemStatusComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "p", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](4, ItemStatusComponent_div_4_Template, 6, 6, "div", 2)(5, ItemStatusComponent_div_5_Template, 2, 1, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](6, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](9, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "div", 4)(11, "a", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](12, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](14, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](15, ItemStatusComponent_div_15_Template, 2, 4, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](16, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 7, "item.edit.tabs.status.description"));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx.statusDataKeys);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](6, 9, ctx.identifiers$));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](9, 11, "item.edit.tabs.status.labels.itemPage"), ": ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](12, 13, ctx.itemPageRoute$));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](14, 15, ctx.itemPageRoute$));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](16, 17, ctx.operations$));
        }
      },
      dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_24__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_24__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_24__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_22__.RouterLink, _item_operation_item_operation_component__WEBPACK_IMPORTED_MODULE_9__.ItemOperationComponent, _angular_common__WEBPACK_IMPORTED_MODULE_24__.NgClass],
      encapsulation: 2,
      data: {
        animation: [_shared_animations_fade__WEBPACK_IMPORTED_MODULE_6__.fadeIn, _shared_animations_fade__WEBPACK_IMPORTED_MODULE_6__.fadeInOut]
      }
    });
  }
}

/***/ }),

/***/ 88083:
/*!**************************************************************************************!*\
  !*** ./src/app/item-page/edit-item-page/item-status/themed-item-status.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemedItemStatusComponent: () => (/* binding */ ThemedItemStatusComponent)
/* harmony export */ });
/* harmony import */ var _shared_theme_support_themed_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/theme-support/themed.component */ 8886);
/* harmony import */ var _item_status_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item-status.component */ 3915);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);



const _c0 = ["*"];
function ThemedItemStatusComponent_ng_template_0_Template(rf, ctx) {}
class ThemedItemStatusComponent extends _shared_theme_support_themed_component__WEBPACK_IMPORTED_MODULE_0__.ThemedComponent {
  getComponentName() {
    return 'ItemStatusComponent';
  }
  importThemedComponent(themeName) {
    return __webpack_require__(52529)(`./${themeName}/app/item-page/edit-item-page/item-status/item-status.component`);
  }
  importUnthemedComponent() {
    return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./item-status.component */ 3915));
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵThemedItemStatusComponent_BaseFactory;
      return function ThemedItemStatusComponent_Factory(t) {
        return (ɵThemedItemStatusComponent_BaseFactory || (ɵThemedItemStatusComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](ThemedItemStatusComponent)))(t || ThemedItemStatusComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ThemedItemStatusComponent,
      selectors: [["ds-item-status"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      ngContentSelectors: _c0,
      decls: 5,
      vars: 0,
      consts: [["vcr", ""], ["content", ""]],
      template: function ThemedItemStatusComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ThemedItemStatusComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
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

/***/ 80407:
/*!*************************************************************************************************!*\
  !*** ./src/app/item-page/edit-item-page/item-version-history/item-version-history.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ItemVersionHistoryComponent: () => (/* binding */ ItemVersionHistoryComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/shared/operators */ 55757);
/* harmony import */ var _shared_alert_alert_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/alert/alert-type */ 47978);
/* harmony import */ var _shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/utils/var.directive */ 18226);
/* harmony import */ var _versions_item_versions_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../versions/item-versions.component */ 10466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 14354);









function ItemVersionHistoryComponent_div_0_ds_item_versions_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "ds-item-versions", 3);
  }
  if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().ngVar;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("item", item_r1)("displayWhenEmpty", true)("displayTitle", false)("displayActions", true);
  }
}
function ItemVersionHistoryComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ItemVersionHistoryComponent_div_0_ds_item_versions_1_Template, 1, 4, "ds-item-versions", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r1 = ctx.ngVar;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r1);
  }
}
/**
 * Component for listing and managing an item's version history
 */
class ItemVersionHistoryComponent {
  constructor(route) {
    this.route = route;
    /**
     * The AlertType enumeration
     * @type {AlertType}
     */
    this.AlertTypeEnum = _shared_alert_alert_type__WEBPACK_IMPORTED_MODULE_1__.AlertType;
  }
  ngOnInit() {
    this.itemRD$ = this.route.parent.parent.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(data => data.dso)).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_0__.getFirstSucceededRemoteData)());
  }
  static {
    this.ɵfac = function ItemVersionHistoryComponent_Factory(t) {
      return new (t || ItemVersionHistoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: ItemVersionHistoryComponent,
      selectors: [["ds-item-version-history"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 3,
      consts: [["class", "mt-2", 4, "ngVar"], [1, "mt-2"], [3, "item", "displayWhenEmpty", "displayTitle", "displayActions", 4, "ngIf"], [3, "item", "displayWhenEmpty", "displayTitle", "displayActions"]],
      template: function ItemVersionHistoryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, ItemVersionHistoryComponent_div_0_Template, 2, 1, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "async");
        }
        if (rf & 2) {
          let tmp_0_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngVar", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 1, ctx.itemRD$)) == null ? null : tmp_0_0.payload);
        }
      },
      dependencies: [_versions_item_versions_component__WEBPACK_IMPORTED_MODULE_3__.ItemVersionsComponent, _shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_2__.VarDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 60039:
/*!***********************************************************************************!*\
  !*** ./src/app/item-page/edit-item-page/item-withdraw/item-withdraw.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ItemWithdrawComponent: () => (/* binding */ ItemWithdrawComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var _core_data_item_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/data/item-data.service */ 29326);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/shared/operators */ 55757);
/* harmony import */ var _shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/notifications/notifications.service */ 69472);
/* harmony import */ var _modify_item_overview_modify_item_overview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modify-item-overview/modify-item-overview.component */ 13933);
/* harmony import */ var _simple_item_action_abstract_simple_item_action_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../simple-item-action/abstract-simple-item-action.component */ 26826);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 90310);












const _c0 = a0 => ({
  id: a0
});
const _c1 = a0 => [a0, "edit"];
/**
 * Component responsible for rendering the Item Withdraw page
 */
class ItemWithdrawComponent extends _simple_item_action_abstract_simple_item_action_component__WEBPACK_IMPORTED_MODULE_4__.AbstractSimpleItemActionComponent {
  constructor(route, router, notificationsService, itemDataService, translateService) {
    super(route, router, notificationsService, itemDataService, translateService);
    this.route = route;
    this.router = router;
    this.notificationsService = notificationsService;
    this.itemDataService = itemDataService;
    this.translateService = translateService;
    this.messageKey = 'withdraw';
    this.predicate = rd => rd.payload.isWithdrawn;
  }
  /**
   * Perform the withdraw action to the item
   */
  performAction() {
    this.itemDataService.setWithDrawn(this.item, true).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_1__.getFirstCompletedRemoteData)()).subscribe(response => {
      this.processRestResponse(response);
    });
  }
  static {
    this.ɵfac = function ItemWithdrawComponent_Factory(t) {
      return new (t || ItemWithdrawComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_2__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_data_item_data_service__WEBPACK_IMPORTED_MODULE_0__.ItemDataService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: ItemWithdrawComponent,
      selectors: [["ds-item-withdraw"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵStandaloneFeature"]],
      decls: 17,
      vars: 19,
      consts: [[1, "container"], [1, "row"], [1, "col-12"], [3, "item"], [1, "space-children-mr"], [1, "btn", "btn-outline-secondary", "perform-action", 3, "click"], [1, "btn", "btn-outline-secondary", "cancel", 3, "routerLink"]],
      template: function ItemWithdrawComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](8, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "ds-modify-item-overview", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 4)(11, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ItemWithdrawComponent_Template_button_click_11_listener() {
            return ctx.performAction();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](13, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](16, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](5, 6, ctx.headerMessage, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](15, _c0, ctx.item.handle)));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](8, 9, ctx.descriptionMessage));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("item", ctx.item);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](13, 11, ctx.confirmMessage), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](17, _c1, ctx.itemPageRoute));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](16, 13, ctx.cancelMessage), " ");
        }
      },
      dependencies: [_modify_item_overview_modify_item_overview_component__WEBPACK_IMPORTED_MODULE_3__.ModifyItemOverviewComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 26826:
/*!******************************************************************************************************!*\
  !*** ./src/app/item-page/edit-item-page/simple-item-action/abstract-simple-item-action.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbstractSimpleItemActionComponent: () => (/* binding */ AbstractSimpleItemActionComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 46891);
/* harmony import */ var _core_data_item_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/data/item-data.service */ 29326);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/shared/operators */ 55757);
/* harmony import */ var _shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/notifications/notifications.service */ 69472);
/* harmony import */ var _item_page_routing_paths__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../item-page-routing-paths */ 90887);
/* harmony import */ var _edit_item_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../edit-item-operators */ 29249);
/* harmony import */ var _modify_item_overview_modify_item_overview_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modify-item-overview/modify-item-overview.component */ 13933);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 90310);















const _c0 = a0 => ({
  id: a0
});
const _c1 = a0 => [a0, "edit"];
/**
 * Component to render and handle simple item edit actions such as withdrawal and reinstatement.
 * This component is not meant to be used itself but to be extended.
 */
class AbstractSimpleItemActionComponent {
  constructor(route, router, notificationsService, itemDataService, translateService) {
    this.route = route;
    this.router = router;
    this.notificationsService = notificationsService;
    this.itemDataService = itemDataService;
    this.translateService = translateService;
  }
  ngOnInit() {
    this.itemRD$ = this.route.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(data => data.dso), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_1__.getFirstSucceededRemoteData)());
    this.itemRD$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.first)()).subscribe(rd => {
      this.item = rd.payload;
      this.itemPageRoute = (0,_item_page_routing_paths__WEBPACK_IMPORTED_MODULE_3__.getItemPageRoute)(this.item);
    });
    this.confirmMessage = 'item.edit.' + this.messageKey + '.confirm';
    this.cancelMessage = 'item.edit.' + this.messageKey + '.cancel';
    this.headerMessage = 'item.edit.' + this.messageKey + '.header';
    this.descriptionMessage = 'item.edit.' + this.messageKey + '.description';
  }
  /**
   * Perform the operation linked to this action
   */
  performAction() {
    // Overwrite in subclasses
  }
  /**
   * Process the response obtained during the performAction method and navigate back to the edit page
   * @param response from the action in the performAction method
   */
  processRestResponse(response) {
    if (response.hasSucceeded) {
      this.itemDataService.findById(this.item.id).pipe((0,_edit_item_operators__WEBPACK_IMPORTED_MODULE_4__.findSuccessfulAccordingTo)(itemRd => this.predicate(itemRd))).subscribe(() => {
        this.notificationsService.success(this.translateService.get('item.edit.' + this.messageKey + '.success'));
        this.router.navigate([(0,_item_page_routing_paths__WEBPACK_IMPORTED_MODULE_3__.getItemEditRoute)(this.item)]);
      });
    } else {
      this.notificationsService.error(this.translateService.get('item.edit.' + this.messageKey + '.error'));
      this.router.navigate([(0,_item_page_routing_paths__WEBPACK_IMPORTED_MODULE_3__.getItemEditRoute)(this.item)]);
    }
  }
  static {
    this.ɵfac = function AbstractSimpleItemActionComponent_Factory(t) {
      return new (t || AbstractSimpleItemActionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_2__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_data_item_data_service__WEBPACK_IMPORTED_MODULE_0__.ItemDataService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
      type: AbstractSimpleItemActionComponent,
      selectors: [["ds-simple-action"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵStandaloneFeature"]],
      decls: 17,
      vars: 19,
      consts: [[1, "container"], [1, "row"], [1, "col-12"], [3, "item"], [1, "space-children-mr"], [1, "btn", "btn-outline-secondary", "perform-action", 3, "click"], [1, "btn", "btn-outline-secondary", "cancel", 3, "routerLink"]],
      template: function AbstractSimpleItemActionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](8, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](9, "ds-modify-item-overview", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 4)(11, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AbstractSimpleItemActionComponent_Template_button_click_11_listener() {
            return ctx.performAction();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](13, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](16, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](5, 6, ctx.headerMessage, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](15, _c0, ctx.item.handle)));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](8, 9, ctx.descriptionMessage));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("item", ctx.item);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](13, 11, ctx.confirmMessage), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](17, _c1, ctx.itemPageRoute));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](16, 13, ctx.cancelMessage), " ");
        }
      },
      dependencies: [_modify_item_overview_modify_item_overview_component__WEBPACK_IMPORTED_MODULE_5__.ModifyItemOverviewComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLink],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 88423:
/*!*****************************************************************************************!*\
  !*** ./src/app/item-page/edit-item-page/virtual-metadata/virtual-metadata.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VirtualMetadataComponent: () => (/* binding */ VirtualMetadataComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 83485);
/* harmony import */ var _config_app_config_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../config/app-config.interface */ 82640);
/* harmony import */ var _core_data_object_updates_object_updates_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/data/object-updates/object-updates.service */ 59033);
/* harmony import */ var _core_shared_item_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/shared/item.model */ 88318);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/empty.util */ 82777);
/* harmony import */ var _shared_object_collection_shared_listable_object_listable_object_component_loader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/object-collection/shared/listable-object/listable-object-component-loader.component */ 17191);
/* harmony import */ var _shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/utils/var.directive */ 18226);













function VirtualMetadataComponent_ng_container_8_div_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const metadata_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", metadata_r5.metadataField, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", metadata_r5.metadataValue.value, " ");
  }
}
function VirtualMetadataComponent_ng_container_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function VirtualMetadataComponent_ng_container_8_div_1_Template_div_click_0_listener() {
      const selected_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1).ngVar;
      const itemDTO_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r3.setSelectedVirtualMetadataItem(itemDTO_r3.item, !selected_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 11)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "ds-listable-object-component-loader", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, VirtualMetadataComponent_ng_container_8_div_1_div_6_Template, 5, 2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const selected_r2 = ctx.ngVar;
    const itemDTO_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("checked", selected_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("object", itemDTO_r3.item);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r3.virtualMetadata.get(itemDTO_r3.item.uuid));
  }
}
function VirtualMetadataComponent_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, VirtualMetadataComponent_ng_container_8_div_1_Template, 7, 3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const itemDTO_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngVar", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, itemDTO_r3.isSelectedVirtualMetadataItem$));
  }
}
/**
 * Component that lists both items of a relationship, along with their virtual metadata of the relationship.
 * The component is shown when a relationship is marked to be deleted.
 * Each item has a checkbox to indicate whether its virtual metadata should be saved as real metadata.
 */
class VirtualMetadataComponent {
  constructor(objectUpdatesService, appConfig) {
    this.objectUpdatesService = objectUpdatesService;
    this.appConfig = appConfig;
    /**
     * Emits when the close button is pressed.
     */
    this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    /**
     * Emits when the save button is pressed.
     */
    this.save = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    /**
     * Get an array of the left and the right item of the relationship to be deleted.
     */
    this.itemDTOs$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject([]);
    this.subs = [];
    this.virtualMetadata = new Map();
    this.showThumbnails = this.appConfig.browseBy.showThumbnails;
  }
  /**
   * Get the virtual metadata of a given item corresponding to this relationship.
   * @param item  the item to get the virtual metadata for
   */
  getVirtualMetadata(item) {
    return Object.entries(item.metadata).map(([key, value]) => value.filter(metadata => !key.startsWith('relation') && metadata.authority && metadata.authority.endsWith(this.relationshipId)).map(metadata => {
      return {
        metadataField: key,
        metadataValue: metadata
      };
    })).reduce((previous, current) => previous.concat(current), []);
  }
  /**
   * Select/deselect the virtual metadata of an item to be saved as real metadata.
   * @param item      the item for which (not) to save the virtual metadata as real metadata
   * @param selected  whether or not to save the virtual metadata as real metadata
   */
  setSelectedVirtualMetadataItem(item, selected) {
    this.objectUpdatesService.setSelectedVirtualMetadata(this.url, this.relationshipId, item.uuid, selected);
  }
  /**
   * Check whether the virtual metadata of a given item is selected to be saved as real metadata
   * @param item  the item for which to check whether the virtual metadata is selected to be saved as real metadata
   */
  isSelectedVirtualMetadataItem(item) {
    return this.objectUpdatesService.isSelectedVirtualMetadata(this.url, this.relationshipId, item.uuid);
  }
  /**
   * Prevent unnecessary rerendering so fields don't lose focus
   */
  trackItemDTO(index, itemDTO) {
    return itemDTO?.item?.uuid;
  }
  ngOnInit() {
    this.subs.push(this.itemDTOs$.subscribe(itemDTOs => {
      itemDTOs.forEach(itemDTO => this.virtualMetadata.set(itemDTO.item.uuid, this.getVirtualMetadata(itemDTO.item)));
    }));
  }
  ngOnChanges() {
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_3__.hasValue)(this.leftItem) && (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_3__.hasValue)(this.rightItem)) {
      this.itemDTOs$.next([{
        item: this.leftItem,
        isSelectedVirtualMetadataItem$: this.isSelectedVirtualMetadataItem(this.leftItem)
      }, {
        item: this.rightItem,
        isSelectedVirtualMetadataItem$: this.isSelectedVirtualMetadataItem(this.rightItem)
      }]);
    }
  }
  ngOnDestroy() {
    this.subs.forEach(sub => sub.unsubscribe());
  }
  static {
    this.ɵfac = function VirtualMetadataComponent_Factory(t) {
      return new (t || VirtualMetadataComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_data_object_updates_object_updates_service__WEBPACK_IMPORTED_MODULE_1__.ObjectUpdatesService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_config_app_config_interface__WEBPACK_IMPORTED_MODULE_0__.APP_CONFIG));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: VirtualMetadataComponent,
      selectors: [["ds-virtual-metadata"]],
      inputs: {
        url: "url",
        relationshipId: "relationshipId",
        leftItem: "leftItem",
        rightItem: "rightItem"
      },
      outputs: {
        close: "close",
        save: "save"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵStandaloneFeature"]],
      decls: 15,
      vars: 11,
      consts: [[3, "ngClass"], [1, "modal-header"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "d-flex", "flex-row-reverse", "m-2"], [1, "btn", "btn-primary", "save", 3, "click"], ["aria-hidden", "true", 1, "fas", "fa-save"], ["class", "item d-flex flex-row", 3, "click", 4, "ngVar"], [1, "item", "d-flex", "flex-row", 3, "click"], [1, "m-2"], ["type", "checkbox", 1, "select", 3, "checked"], [1, "flex-column"], [3, "object"], [4, "ngFor", "ngForOf"], [1, "font-weight-bold"]],
      template: function VirtualMetadataComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function VirtualMetadataComponent_Template_button_click_4_listener() {
            return ctx.close.emit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, VirtualMetadataComponent_ng_container_8_Template, 3, 3, "ng-container", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](9, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 6)(11, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function VirtualMetadataComponent_Template_button_click_11_listener() {
            return ctx.save.emit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "i", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](14, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx.showThumbnails ? "hide-modal-thumbnail-column" : "");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 5, "virtual-metadata.delete-relationship.modal-head"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](9, 7, ctx.itemDTOs$))("ngForTrackBy", ctx.trackItemDTO);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](14, 9, "item.edit.metadata.save-button"), " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_5__.VarDirective, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe, _shared_object_collection_shared_listable_object_listable_object_component_loader_component__WEBPACK_IMPORTED_MODULE_4__.ListableObjectComponentLoaderComponent],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 46556:
/*!********************************************************!*\
  !*** ./src/app/shared/ng-for-track-by-id.directive.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NgForTrackByIdDirective: () => (/* binding */ NgForTrackByIdDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 61142);



class NgForTrackByIdDirective {
  constructor(ngFor) {
    this.ngFor = ngFor;
    this.ngFor.ngForTrackBy = (index, dso) => dso ? dso.id : undefined;
  }
  static {
    this.ɵfac = function NgForTrackByIdDirective_Factory(t) {
      return new (t || NgForTrackByIdDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, 1));
    };
  }
  static {
    this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: NgForTrackByIdDirective,
      selectors: [["", "ngForTrackById", ""]],
      standalone: true
    });
  }
}

/***/ }),

/***/ 76353:
/*!***************************************************************************************!*\
  !*** ./src/app/shared/object-select/collection-select/collection-select.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CollectionSelectComponent: () => (/* binding */ CollectionSelectComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 56106);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 6663);
/* harmony import */ var _collection_page_collection_page_routing_paths__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../collection-page/collection-page-routing-paths */ 64611);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/shared/operators */ 55757);
/* harmony import */ var _btn_disabled_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../btn-disabled.directive */ 60456);
/* harmony import */ var _empty_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../empty.util */ 82777);
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../error/error.component */ 79632);
/* harmony import */ var _loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../loading/themed-loading.component */ 82394);
/* harmony import */ var _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pagination/pagination.component */ 40590);
/* harmony import */ var _utils_var_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/var.directive */ 18226);
/* harmony import */ var _object_select_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../object-select.model */ 79666);
/* harmony import */ var _object_select_object_select_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../object-select/object-select.component */ 99929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 90310);


















const _c0 = (a0, a1) => ({
  "btn-danger": a0,
  "btn-primary": a1
});
function CollectionSelectComponent_ng_container_0_ds_pagination_1_tr_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr")(1, "td")(2, "input", 12, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function CollectionSelectComponent_ng_container_0_ds_pagination_1_tr_13_Template_input_change_2_listener() {
      const selectCollection_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r2.switch(selectCollection_r2.dso.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "td")(8, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const selectCollection_r2 = ctx.$implicit;
    const selectCollectionBtn_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](3);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("name", selectCollection_r2.dso.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 6, selectCollection_r2.canSelect$) === false)("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](5, 8, selectCollection_r2.selected$));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](6, 10, selectCollectionBtn_r4.checked ? "collection.select.table.deselect" : "collection.select.table.select"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", selectCollection_r2.route);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r2.dsoNameService.getName(selectCollection_r2.dso));
  }
}
function CollectionSelectComponent_ng_container_0_ds_pagination_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ds-pagination", 6)(1, "div", 7)(2, "table", 8)(3, "thead")(4, "tr")(5, "th")(6, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](13, CollectionSelectComponent_ng_container_0_ds_pagination_1_tr_13_Template, 10, 12, "tr", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](14, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const collectionsRD_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().ngVar;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("paginationOptions", ctx_r2.paginationOptions)("sortOptions", ctx_r2.sortOptions)("collectionSize", collectionsRD_r5 == null ? null : collectionsRD_r5.payload == null ? null : collectionsRD_r5.payload.totalElements)("hidePagerWhenSinglePage", true)("hideGear", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](8, 8, "collection.select.table.selected"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](11, 10, "collection.select.table.title"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](14, 12, ctx_r2.selectCollections$));
  }
}
function CollectionSelectComponent_ng_container_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, "collection.select.empty"), " ");
  }
}
function CollectionSelectComponent_ng_container_0_ds_error_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "ds-error", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("message", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](1, 1, "error.collections"));
  }
}
function CollectionSelectComponent_ng_container_0_ds_loading_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "ds-loading", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("message", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](1, 1, "loading.collections"));
  }
}
function CollectionSelectComponent_ng_container_0_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 16)(1, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CollectionSelectComponent_ng_container_0_div_5_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r2.onCancel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CollectionSelectComponent_ng_container_0_div_5_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r2.confirmSelected());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](6, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const selectedIds_r7 = ctx.ngVar;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 4, ctx_r2.cancelButton), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](8, _c0, ctx_r2.dangerConfirm, !ctx_r2.dangerConfirm))("dsBtnDisabled", (selectedIds_r7 == null ? null : selectedIds_r7.length) === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](8, 6, ctx_r2.confirmButton), " ");
  }
}
function CollectionSelectComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, CollectionSelectComponent_ng_container_0_ds_pagination_1_Template, 15, 14, "ds-pagination", 2)(2, CollectionSelectComponent_ng_container_0_div_2_Template, 3, 3, "div", 3)(3, CollectionSelectComponent_ng_container_0_ds_error_3_Template, 2, 3, "ds-error", 4)(4, CollectionSelectComponent_ng_container_0_ds_loading_4_Template, 2, 3, "ds-loading", 4)(5, CollectionSelectComponent_ng_container_0_div_5_Template, 9, 11, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const collectionsRD_r5 = ctx.ngVar;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (collectionsRD_r5 == null ? null : collectionsRD_r5.payload == null ? null : collectionsRD_r5.payload.totalElements) > 0 || (collectionsRD_r5 == null ? null : collectionsRD_r5.payload == null ? null : collectionsRD_r5.payload.page == null ? null : collectionsRD_r5.payload.page.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (collectionsRD_r5 == null ? null : collectionsRD_r5.payload == null ? null : collectionsRD_r5.payload.totalElements) === 0 || (collectionsRD_r5 == null ? null : collectionsRD_r5.payload == null ? null : collectionsRD_r5.payload.page == null ? null : collectionsRD_r5.payload.page.length) === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", collectionsRD_r5 == null ? null : collectionsRD_r5.hasFailed);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !collectionsRD_r5 || (collectionsRD_r5 == null ? null : collectionsRD_r5.isLoading));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngVar", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](6, 5, ctx_r2.selectedIds$));
  }
}
/**
 * A component used to select collections from a specific list and returning the UUIDs of the selected collections
 */
class CollectionSelectComponent extends _object_select_object_select_component__WEBPACK_IMPORTED_MODULE_9__.ObjectSelectComponent {
  ngOnInit() {
    super.ngOnInit();
    if (!(0,_empty_util__WEBPACK_IMPORTED_MODULE_3__.isNotEmpty)(this.confirmButton)) {
      this.confirmButton = 'collection.select.confirm';
    }
    this.selectCollections$ = this.dsoRD$.pipe((0,_empty_util__WEBPACK_IMPORTED_MODULE_3__.hasValueOperator)(), (0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_1__.getAllSucceededRemoteDataPayload)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.map)(collections => collections.page.map(collection => Object.assign(new _object_select_model__WEBPACK_IMPORTED_MODULE_8__.DSpaceObjectSelect(), {
      dso: collection,
      canSelect$: this.canSelect(collection),
      selected$: this.getSelected(collection.id),
      route: (0,_collection_page_collection_page_routing_paths__WEBPACK_IMPORTED_MODULE_0__.getCollectionPageRoute)(collection.id)
    }))));
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵCollectionSelectComponent_BaseFactory;
      return function CollectionSelectComponent_Factory(t) {
        return (ɵCollectionSelectComponent_BaseFactory || (ɵCollectionSelectComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetInheritedFactory"](CollectionSelectComponent)))(t || CollectionSelectComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
      type: CollectionSelectComponent,
      selectors: [["ds-collection-select"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 3,
      consts: [["selectCollectionBtn", ""], [4, "ngVar"], [3, "paginationOptions", "sortOptions", "collectionSize", "hidePagerWhenSinglePage", "hideGear", 4, "ngIf"], ["class", "alert alert-info w-100", "role", "alert", 4, "ngIf"], [3, "message", 4, "ngIf"], ["class", "space-children-mr float-right", 4, "ngVar"], [3, "paginationOptions", "sortOptions", "collectionSize", "hidePagerWhenSinglePage", "hideGear"], [1, "table-responsive", "mt-2"], ["id", "collection-select", 1, "table", "table-striped", "table-hover"], [1, "sr-only"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["type", "checkbox", 1, "collection-checkbox", 3, "change", "disabled", "ngModel", "name"], [3, "routerLink"], ["role", "alert", 1, "alert", "alert-info", "w-100"], [3, "message"], [1, "space-children-mr", "float-right"], [1, "btn", "btn-outline-secondary", "collection-cancel", 3, "click"], [1, "fas", "fa-times"], [1, "btn", "collection-confirm", 3, "click", "ngClass", "dsBtnDisabled"], [1, "fas", "fa-trash"]],
      template: function CollectionSelectComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](0, CollectionSelectComponent_ng_container_0_Template, 7, 7, "ng-container", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](1, "async");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngVar", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](1, 1, ctx.dsoRD$));
        }
      },
      dependencies: [_utils_var_directive__WEBPACK_IMPORTED_MODULE_7__.VarDirective, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_6__.PaginationComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgFor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgModel, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterLink, _error_error_component__WEBPACK_IMPORTED_MODULE_4__.ErrorComponent, _loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_5__.ThemedLoadingComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_12__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslatePipe, _btn_disabled_directive__WEBPACK_IMPORTED_MODULE_2__.BtnDisabledDirective],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-of-type, table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-of-type {\n  width: 1rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGxlY3Rpb24tc2VsZWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBO0FBQ0E7RUFDRSxzQkFBQTtBQUNGIiwiZmlsZSI6ImNvbGxlY3Rpb24tc2VsZWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi9cbnRhYmxlIHRyIHRoOmZpcnN0LW9mLXR5cGUsIHRhYmxlIHRyIHRkOmZpcnN0LW9mLXR5cGUge1xuICB3aWR0aDogMXJlbSAhaW1wb3J0YW50O1xufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL29iamVjdC1zZWxlY3QvY29sbGVjdGlvbi1zZWxlY3QvY29sbGVjdGlvbi1zZWxlY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQTtFQUNFLHNCQUFBO0FBQ0Y7QUFDQSw0dEJBQTR0QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovXG50YWJsZSB0ciB0aDpmaXJzdC1vZi10eXBlLCB0YWJsZSB0ciB0ZDpmaXJzdC1vZi10eXBlIHtcbiAgd2lkdGg6IDFyZW0gIWltcG9ydGFudDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 6867:
/*!**************************************************************************!*\
  !*** ./src/app/shared/responsive-table-sizes/responsive-column-sizes.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResponsiveColumnSizes: () => (/* binding */ ResponsiveColumnSizes)
/* harmony export */ });
/**
 * A helper class storing the sizes in which to render a single column
 * The values in this class are expected to be between 1 and 12
 * There are used to be added to bootstrap classes such as col-xs-{this.xs}
 */
class ResponsiveColumnSizes {
  constructor(xs, sm, md, lg, xl) {
    this.xs = xs;
    this.sm = sm;
    this.md = md;
    this.lg = lg;
    this.xl = xl;
  }
  /**
   * Build the bootstrap responsive column classes matching the values of this object
   */
  buildClasses() {
    return `col-${this.xs} col-sm-${this.sm} col-md-${this.md} col-lg-${this.lg} col-xl-${this.xl}`;
  }
}

/***/ }),

/***/ 20959:
/*!*************************************************************************!*\
  !*** ./src/app/shared/responsive-table-sizes/responsive-table-sizes.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResponsiveTableSizes: () => (/* binding */ ResponsiveTableSizes)
/* harmony export */ });
/* harmony import */ var _empty_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../empty.util */ 82777);
/* harmony import */ var _responsive_column_sizes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./responsive-column-sizes */ 6867);


/**
 * A helper class storing the sizes in which to render a table
 * It stores a list of columns, which in turn store their own bootstrap column sizes
 */
class ResponsiveTableSizes {
  constructor(columns) {
    this.columns = columns;
  }
  /**
   * Combine the values of multiple columns into a single ResponsiveColumnSizes
   * Useful when a row element stretches over multiple columns
   * @param start Index of the first column
   * @param end   Index of the last column (inclusive)
   */
  combineColumns(start, end) {
    if (start < end && (0,_empty_util__WEBPACK_IMPORTED_MODULE_0__.hasValue)(this.columns[start]) && (0,_empty_util__WEBPACK_IMPORTED_MODULE_0__.hasValue)(this.columns[end])) {
      let xs = this.columns[start].xs;
      let sm = this.columns[start].sm;
      let md = this.columns[start].md;
      let lg = this.columns[start].lg;
      let xl = this.columns[start].xl;
      for (let i = start + 1; i < end + 1; i++) {
        xs += this.columns[i].xs;
        sm += this.columns[i].sm;
        md += this.columns[i].md;
        lg += this.columns[i].lg;
        xl += this.columns[i].xl;
      }
      return new _responsive_column_sizes__WEBPACK_IMPORTED_MODULE_1__.ResponsiveColumnSizes(xs, sm, md, lg, xl);
    }
    return undefined;
  }
}

/***/ }),

/***/ 4313:
/*!****************************************************!*\
  !*** ./src/app/shared/utils/object-values-pipe.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ObjectValuesPipe: () => (/* binding */ ObjectValuesPipe)
/* harmony export */ });
/* harmony import */ var _empty_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../empty.util */ 82777);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 90310);


/**
 * Pipe for parsing all values of an object to an array of values
 */
class ObjectValuesPipe {
  /**
   * @param value An object
   * @returns {any} Array with all values of the input object
   */
  transform(value) {
    const values = [];
    if ((0,_empty_util__WEBPACK_IMPORTED_MODULE_0__.isNotEmpty)(value)) {
      Object.values(value).forEach(v => values.push(v));
    }
    return values;
  }
  static {
    this.ɵfac = function ObjectValuesPipe_Factory(t) {
      return new (t || ObjectValuesPipe)();
    };
  }
  static {
    this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "dsObjectValues",
      type: ObjectValuesPipe,
      pure: true,
      standalone: true
    });
  }
}

/***/ }),

/***/ 52529:
/*!******************************************************************************************************************************!*\
  !*** ./src/themes/ lazy ^\.\/.*\/app\/item\-page\/edit\-item\-page\/item\-status\/item\-status\.component$ namespace object ***!
  \******************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./custom/app/item-page/edit-item-page/item-status/item-status.component": [
		13382,
		"src_themes_custom_app_item-page_edit-item-page_item-status_item-status_component_ts"
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
webpackAsyncContext.id = 52529;
module.exports = webpackAsyncContext;

/***/ })

}]);
//# sourceMappingURL=src_app_item-page_edit-item-page_edit-item-page-routes_ts.js.map