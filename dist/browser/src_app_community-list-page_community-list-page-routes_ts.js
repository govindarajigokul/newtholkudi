(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_app_community-list-page_community-list-page-routes_ts"],{

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

/***/ 66543:
/*!******************************************************************!*\
  !*** ./src/app/community-list-page/community-list-datasource.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CommunityListDatasource: () => (/* binding */ CommunityListDatasource)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 83485);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 56731);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/empty.util */ 82777);



/**
 * DataSource object needed by a CDK Tree to render its nodes.
 * The list of FlatNodes that this DataSource object represents gets created in the CommunityListService at
 *    the beginning (initial page-limited top communities) and re-calculated any time the tree state changes
 *    (a node gets expanded or page-limited result become larger by triggering a show more node)
 */
class CommunityListDatasource {
  constructor(communityListService) {
    this.communityListService = communityListService;
    this.communityList$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
    this.loading$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(false);
  }
  connect(collectionViewer) {
    return this.communityList$.asObservable();
  }
  loadCommunities(findOptions, expandedNodes) {
    this.loading$.next(true);
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_0__.hasValue)(this.subLoadCommunities)) {
      this.subLoadCommunities.unsubscribe();
    }
    this.subLoadCommunities = this.communityListService.loadCommunities(findOptions, expandedNodes).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.finalize)(() => this.loading$.next(false))).subscribe(flatNodes => {
      this.communityList$.next(flatNodes);
    });
  }
  disconnect(collectionViewer) {
    this.communityList$.complete();
    this.loading$.complete();
  }
}

/***/ }),

/***/ 83988:
/*!*******************************************************************!*\
  !*** ./src/app/community-list-page/community-list-page-routes.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ROUTES: () => (/* binding */ ROUTES)
/* harmony export */ });
/* harmony import */ var _core_breadcrumbs_i18n_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/breadcrumbs/i18n-breadcrumb.resolver */ 72059);
/* harmony import */ var _themed_community_list_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./themed-community-list-page.component */ 37986);


/**
 * RouterModule to help navigate to the page with the community list tree
 */
const ROUTES = [{
  path: '',
  component: _themed_community_list_page_component__WEBPACK_IMPORTED_MODULE_1__.ThemedCommunityListPageComponent,
  pathMatch: 'full',
  resolve: {
    breadcrumb: _core_breadcrumbs_i18n_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_0__.i18nBreadcrumbResolver
  },
  data: {
    title: 'communityList.tabTitle',
    breadcrumbKey: 'communityList'
  }
}];

/***/ }),

/***/ 41456:
/*!**********************************************************************!*\
  !*** ./src/app/community-list-page/community-list-page.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CommunityListPageComponent: () => (/* binding */ CommunityListPageComponent)
/* harmony export */ });
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var _community_list_themed_community_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./community-list/themed-community-list.component */ 30737);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 90310);




/**
 * Page with title and the community list tree, as described in community-list.component;
 * navigated to with community-list.page.routing.module
 */
class CommunityListPageComponent {
  static {
    this.ɵfac = function CommunityListPageComponent_Factory(t) {
      return new (t || CommunityListPageComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CommunityListPageComponent,
      selectors: [["ds-base-community-list-page"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 5,
      vars: 3,
      consts: [[1, "container"]],
      template: function CommunityListPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "ds-community-list");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 1, "communityList.title"));
        }
      },
      dependencies: [_community_list_themed_community_list_component__WEBPACK_IMPORTED_MODULE_0__.ThemedCommunityListComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 37255:
/*!***************************************************************!*\
  !*** ./src/app/community-list-page/community-list-service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CommunityListService: () => (/* binding */ CommunityListService),
/* harmony export */   combineAndFlatten: () => (/* binding */ combineAndFlatten),
/* harmony export */   showMoreFlatNode: () => (/* binding */ showMoreFlatNode),
/* harmony export */   toFlatNode: () => (/* binding */ toFlatNode)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngrx/store */ 99797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 27639);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 17796);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 85687);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 84975);
/* harmony import */ var src_config_app_config_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/config/app-config.interface */ 82640);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! uuid */ 32990);
/* harmony import */ var _collection_page_collection_page_routing_paths__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../collection-page/collection-page-routing-paths */ 64611);
/* harmony import */ var _community_page_community_page_routing_paths__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../community-page/community-page-routing-paths */ 54671);
/* harmony import */ var _core_data_collection_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/data/collection-data.service */ 6983);
/* harmony import */ var _core_data_community_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/data/community-data.service */ 46660);
/* harmony import */ var _core_data_find_list_options_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/data/find-list-options.model */ 41023);
/* harmony import */ var _core_data_paginated_list_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/data/paginated-list.model */ 96820);
/* harmony import */ var _core_shared_community_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/shared/community.model */ 10046);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/shared/operators */ 55757);
/* harmony import */ var _core_shared_page_info_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/shared/page-info.model */ 32089);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/empty.util */ 82777);
/* harmony import */ var _shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/utils/follow-link-config.model */ 67600);
/* harmony import */ var _community_list_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./community-list.actions */ 11596);
/* harmony import */ var _show_more_flat_node_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./show-more-flat-node.model */ 39116);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ 90310);






















// Helper method to combine and flatten an array of observables of flatNode arrays
const combineAndFlatten = obsList => (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.combineLatest)([...obsList]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(matrix => [].concat(...matrix)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.filter)(arr => arr.every(e => (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_10__.hasValue)(e))));
/**
 * Creates a flatNode from a community or collection
 * @param c               The community or collection this flatNode represents
 * @param isExpandable    Whether or not this node is expandable (true if it has children)
 * @param level           Level indicating how deep in the tree this node should be rendered
 * @param isExpanded      Whether or not this node already is expanded
 * @param parent          Parent of this node (flatNode representing its parent community)
 */
const toFlatNode = (c, isExpandable, level, isExpanded, parent) => ({
  isExpandable$: isExpandable,
  name: c.name,
  id: c.id,
  level: level,
  isExpanded,
  parent,
  payload: c,
  isShowMoreNode: false,
  route: c instanceof _core_shared_community_model__WEBPACK_IMPORTED_MODULE_7__.Community ? (0,_community_page_community_page_routing_paths__WEBPACK_IMPORTED_MODULE_2__.getCommunityPageRoute)(c.id) : (0,_collection_page_collection_page_routing_paths__WEBPACK_IMPORTED_MODULE_1__.getCollectionPageRoute)(c.id)
});
/**
 * Creates a show More flatnode where only the level and parent are of importance
 */
const showMoreFlatNode = (id, level, parent) => ({
  isExpandable$: (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.of)(false),
  name: 'Show More Flatnode',
  id: id,
  level: level,
  isExpanded: false,
  parent: parent,
  payload: new _show_more_flat_node_model__WEBPACK_IMPORTED_MODULE_13__.ShowMoreFlatNode(),
  isShowMoreNode: true
});
// Selectors the get the communityList data out of the store
const communityListStateSelector = state => state.communityList;
const expandedNodesSelector = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_18__.createSelector)(communityListStateSelector, communityList => communityList.expandedNodes);
const loadingNodeSelector = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_18__.createSelector)(communityListStateSelector, communityList => communityList.loadingNode);
/**
 * Service class for the community list, responsible for the creating of the flat list used by communityList dataSource
 *  and connection to the store to retrieve and save the state of the community list
 */
class CommunityListService {
  constructor(appConfig, communityDataService, collectionDataService, store) {
    this.appConfig = appConfig;
    this.communityDataService = communityDataService;
    this.collectionDataService = collectionDataService;
    this.store = store;
    this.configOnePage = Object.assign(new _core_data_find_list_options_model__WEBPACK_IMPORTED_MODULE_5__.FindListOptions(), {
      elementsPerPage: 1
    });
    this.pageSize = appConfig.communityList.pageSize;
  }
  saveCommunityListStateToStore(expandedNodes, loadingNode) {
    this.store.dispatch(new _community_list_actions__WEBPACK_IMPORTED_MODULE_12__.CommunityListSaveAction(expandedNodes, loadingNode));
  }
  getExpandedNodesFromStore() {
    return this.store.select(expandedNodesSelector);
  }
  getLoadingNodeFromStore() {
    return this.store.select(loadingNodeSelector);
  }
  /**
   * Gets all top communities, limited by page, and transforms this in a list of flatNodes.
   * @param findOptions       FindListOptions
   * @param expandedNodes     List of expanded nodes; if a node is not expanded its subCommunities and collections need
   *                            not be added to the list
   */
  loadCommunities(findOptions, expandedNodes) {
    const currentPage = findOptions.currentPage;
    const topCommunities = [];
    for (let i = 1; i <= currentPage; i++) {
      const pagination = Object.assign({}, findOptions, {
        currentPage: i
      });
      topCommunities.push(this.getTopCommunities(pagination));
    }
    const topComs$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.combineLatest)([...topCommunities]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(coms => {
      const newPages = coms.map(unit => unit.page);
      const newPage = [].concat(...newPages);
      let newPageInfo = new _core_shared_page_info_model__WEBPACK_IMPORTED_MODULE_9__.PageInfo();
      if (coms && coms.length > 0) {
        newPageInfo = Object.assign({}, coms[0].pageInfo, {
          currentPage
        });
      }
      return (0,_core_data_paginated_list_model__WEBPACK_IMPORTED_MODULE_6__.buildPaginatedList)(newPageInfo, newPage);
    }));
    return topComs$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.switchMap)(topComs => this.transformListOfCommunities(topComs, 0, null, expandedNodes)));
  }
  /**
   * Puts the initial top level communities in a list to be called upon
   */
  getTopCommunities(options) {
    return this.communityDataService.findTop({
      currentPage: options.currentPage,
      elementsPerPage: this.pageSize,
      sort: {
        field: options.sort.field,
        direction: options.sort.direction
      }
    }, (0,_shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_11__.followLink)('subcommunities', {
      findListOptions: this.configOnePage
    }), (0,_shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_11__.followLink)('collections', {
      findListOptions: this.configOnePage
    })).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_8__.getFirstSucceededRemoteData)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(results => results.payload));
  }
  /**
   * Transforms a list of communities to a list of FlatNodes according to the instructions detailed in transformCommunity
   * @param listOfPaginatedCommunities    Paginated list of communities to be transformed
   * @param level                         Level the tree is currently at
   * @param parent                        FlatNode of the parent of this list of communities
   * @param expandedNodes                 List of expanded nodes; if a node is not expanded its subcommunities and collections need not be added to the list
   */
  transformListOfCommunities(listOfPaginatedCommunities, level, parent, expandedNodes) {
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_10__.isNotEmpty)(listOfPaginatedCommunities.page)) {
      let currentPage = listOfPaginatedCommunities.currentPage;
      if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_10__.isNotEmpty)(parent)) {
        currentPage = expandedNodes.find(node => node.id === parent.id).currentCommunityPage;
      }
      let obsList = listOfPaginatedCommunities.page.map(community => {
        return this.transformCommunity(community, level, parent, expandedNodes);
      });
      if (currentPage < listOfPaginatedCommunities.totalPages && currentPage === listOfPaginatedCommunities.currentPage) {
        obsList = [...obsList, (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.of)([showMoreFlatNode(`community-${(0,uuid__WEBPACK_IMPORTED_MODULE_20__["default"])()}`, level, parent)])];
      }
      return combineAndFlatten(obsList);
    } else {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.of)([]);
    }
  }
  /**
   * Transforms a community in a list of FlatNodes containing firstly a flatnode of the community itself,
   *      followed by flatNodes of its possible subcommunities and collection
   * It gets called recursively for each subcommunity to add its subcommunities and collections to the list
   * Number of subcommunities and collections added, is dependent on the current page the parent is at for respectively subcommunities and collections.
   * @param community         Community being transformed
   * @param level             Depth of the community in the list, subcommunities and collections go one level deeper
   * @param parent            Flatnode of the parent community
   * @param expandedNodes     List of nodes which are expanded, if node is not expanded, it need not add its page-limited subcommunities or collections
   */
  transformCommunity(community, level, parent, expandedNodes) {
    let isExpanded = false;
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_10__.isNotEmpty)(expandedNodes)) {
      isExpanded = (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_10__.hasValue)(expandedNodes.find(node => node.id === community.id));
    }
    const isExpandable$ = this.getIsExpandable(community);
    const communityFlatNode = toFlatNode(community, isExpandable$, level, isExpanded, parent);
    let obsList = [(0,rxjs__WEBPACK_IMPORTED_MODULE_17__.of)([communityFlatNode])];
    if (isExpanded) {
      const currentCommunityPage = expandedNodes.find(node => node.id === community.id).currentCommunityPage;
      let subcoms = [];
      for (let i = 1; i <= currentCommunityPage; i++) {
        const nextSetOfSubcommunitiesPage = this.communityDataService.findByParent(community.uuid, {
          elementsPerPage: this.pageSize,
          currentPage: i
        }, (0,_shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_11__.followLink)('subcommunities', {
          findListOptions: this.configOnePage
        }), (0,_shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_11__.followLink)('collections', {
          findListOptions: this.configOnePage
        })).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_8__.getFirstCompletedRemoteData)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.switchMap)(rd => {
          if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_10__.hasValue)(rd) && (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_10__.hasValue)(rd.payload)) {
            return this.transformListOfCommunities(rd.payload, level + 1, communityFlatNode, expandedNodes);
          } else {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.of)([]);
          }
        }));
        subcoms = [...subcoms, nextSetOfSubcommunitiesPage];
      }
      obsList = [...obsList, combineAndFlatten(subcoms)];
      const currentCollectionPage = expandedNodes.find(node => node.id === community.id).currentCollectionPage;
      let collections = [];
      for (let i = 1; i <= currentCollectionPage; i++) {
        const nextSetOfCollectionsPage = this.collectionDataService.findByParent(community.uuid, {
          elementsPerPage: this.pageSize,
          currentPage: i
        }).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_8__.getFirstCompletedRemoteData)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(rd => {
          if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_10__.hasValue)(rd) && (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_10__.hasValue)(rd.payload)) {
            let nodes = rd.payload.page.map(collection => toFlatNode(collection, (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.of)(false), level + 1, false, communityFlatNode));
            if (currentCollectionPage < rd.payload.totalPages && currentCollectionPage === rd.payload.currentPage) {
              nodes = [...nodes, showMoreFlatNode(`collection-${(0,uuid__WEBPACK_IMPORTED_MODULE_20__["default"])()}`, level + 1, communityFlatNode)];
            }
            return nodes;
          } else {
            return [];
          }
        }));
        collections = [...collections, nextSetOfCollectionsPage];
      }
      obsList = [...obsList, combineAndFlatten(collections)];
    }
    return combineAndFlatten(obsList);
  }
  /**
   * Checks if a community has subcommunities or collections by querying the respective services with a pageSize = 0
   *      Returns an observable that combines the result.payload.totalElements of the observables that the
   *          respective services return when queried
   * @param community     Community being checked whether it is expandable (if it has subcommunities or collections)
   */
  getIsExpandable(community) {
    const hasSubcoms$ = this.communityDataService.findByParent(community.uuid, this.configOnePage).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(rd => {
      if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_10__.hasValue)(rd) && (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_10__.hasValue)(rd.payload)) {
        return rd.payload.totalElements > 0;
      } else {
        return false;
      }
    }));
    const hasColls$ = this.collectionDataService.findByParent(community.uuid, this.configOnePage).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(rd => {
      if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_10__.hasValue)(rd) && (0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_10__.hasValue)(rd.payload)) {
        return rd.payload.totalElements > 0;
      } else {
        return false;
      }
    }));
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.combineLatest)(hasSubcoms$, hasColls$).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(([hasSubcoms, hasColls]) => hasSubcoms || hasColls));
  }
  static {
    this.ɵfac = function CommunityListService_Factory(t) {
      return new (t || CommunityListService)(_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵinject"](src_config_app_config_interface__WEBPACK_IMPORTED_MODULE_0__.APP_CONFIG), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵinject"](_core_data_community_data_service__WEBPACK_IMPORTED_MODULE_4__.CommunityDataService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵinject"](_core_data_collection_data_service__WEBPACK_IMPORTED_MODULE_3__.CollectionDataService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_18__.Store));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineInjectable"]({
      token: CommunityListService,
      factory: CommunityListService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 57457:
/*!********************************************************************************!*\
  !*** ./src/app/community-list-page/community-list/community-list.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CommunityListComponent: () => (/* binding */ CommunityListComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/tree */ 90772);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 78374);
/* harmony import */ var _core_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/breadcrumbs/dso-name.service */ 96526);
/* harmony import */ var _core_cache_models_sort_options_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/cache/models/sort-options.model */ 6238);
/* harmony import */ var _core_data_find_list_options_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/data/find-list-options.model */ 41023);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/empty.util */ 82777);
/* harmony import */ var _shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/loading/themed-loading.component */ 82394);
/* harmony import */ var _shared_truncatable_truncatable_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/truncatable/truncatable.component */ 21308);
/* harmony import */ var _shared_truncatable_truncatable_part_truncatable_part_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/truncatable/truncatable-part/truncatable-part.component */ 41100);
/* harmony import */ var _community_list_datasource__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../community-list-datasource */ 66543);
/* harmony import */ var _community_list_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../community-list-service */ 37255);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 90310);



















const _c0 = a0 => ({
  name: a0
});
function CommunityListComponent_ds_loading_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "ds-loading", 5);
  }
}
function CommunityListComponent_cdk_tree_node_3_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function CommunityListComponent_cdk_tree_node_3_button_5_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
      const node_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.getNextPage(node_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 1, "communityList.showMore"), " ");
  }
}
function CommunityListComponent_cdk_tree_node_3_ds_loading_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "ds-loading", 5);
  }
}
function CommunityListComponent_cdk_tree_node_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "cdk-tree-node", 6)(1, "div", 7)(2, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, CommunityListComponent_cdk_tree_node_3_button_5_Template, 4, 3, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](7, CommunityListComponent_cdk_tree_node_3_ds_loading_7_Template, 1, 0, "ds-loading", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](10, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const node_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](6, 2, ctx_r2.dataSource.loading$) !== true);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](8, 4, node_r2 === ctx_r2.loadingNode && ctx_r2.dataSource.loading$));
  }
}
function CommunityListComponent_cdk_tree_node_4_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function CommunityListComponent_cdk_tree_node_4_button_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r4);
      const node_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.toggleExpanded(node_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const node_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](1, 5, node_r5.isExpanded ? "communityList.collapse" : "communityList.expand", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](11, _c0, ctx_r2.dsoNameService.getName(node_r5.payload))));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMap"](node_r5.isExpanded ? "fa fa-chevron-down" : "fa fa-chevron-right");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](5, 8, node_r5.isExpanded ? "communityList.collapse" : "communityList.expand", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](13, _c0, ctx_r2.dsoNameService.getName(node_r5.payload))));
  }
}
function CommunityListComponent_cdk_tree_node_4_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function CommunityListComponent_cdk_tree_node_4_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const node_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](node_r5.payload.archivedItemsCount);
  }
}
function CommunityListComponent_cdk_tree_node_4_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 13)(1, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "ds-truncatable-part", 32)(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const node_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("id", node_r5.id)("minLines", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](node_r5.payload.shortDescription);
  }
}
function CommunityListComponent_cdk_tree_node_4_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 33)(1, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "ds-loading", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function CommunityListComponent_cdk_tree_node_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "cdk-tree-node", 16)(1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, CommunityListComponent_cdk_tree_node_4_button_2_Template, 6, 15, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, CommunityListComponent_cdk_tree_node_4_span_4_Template, 2, 0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 19)(7, "span", 20)(8, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](12, CommunityListComponent_cdk_tree_node_4_span_12_Template, 2, 1, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "ds-truncatable", 24)(14, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](15, CommunityListComponent_cdk_tree_node_4_div_15_Template, 6, 3, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](16, CommunityListComponent_cdk_tree_node_4_div_16_Template, 4, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](17, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const node_r5 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 8, ctx_r2.hasChild(null, node_r5)));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](5, 10, ctx_r2.hasChild(null, node_r5)) !== true);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", node_r5.route);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r2.dsoNameService.getName(node_r5.payload));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", node_r5.payload.archivedItemsCount >= 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("id", node_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", node_r5.payload.shortDescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](17, 12, node_r5 === ctx_r2.loadingNode && ctx_r2.dataSource.loading$));
  }
}
function CommunityListComponent_cdk_tree_node_5_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 13)(1, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "ds-truncatable-part", 32)(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const node_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("id", node_r6.id)("minLines", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](node_r6.payload.shortDescription);
  }
}
function CommunityListComponent_cdk_tree_node_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "cdk-tree-node", 34)(1, "div", 7)(2, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "h6", 10)(5, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "ds-truncatable", 24)(8, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](9, CommunityListComponent_cdk_tree_node_5_div_9_Template, 6, 3, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const node_r6 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", node_r6.route);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r2.dsoNameService.getName(node_r6.payload));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("id", node_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", node_r6.payload.shortDescription);
  }
}
/**
 * A tree-structured list of nodes representing the communities, their subCommunities and collections.
 * Initially only the page-restricted top communities are shown.
 * Each node can be expanded to show its children and all children are also page-limited.
 * More pages of a page-limited result can be shown by pressing a show more node/link.
 * Which nodes were expanded is kept in the store, so this persists across pages.
 */
class CommunityListComponent {
  constructor(communityListService, dsoNameService) {
    this.communityListService = communityListService;
    this.dsoNameService = dsoNameService;
    this.expandedNodes = [];
    this.treeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_10__.FlatTreeControl(node => node.level, node => true);
    this.trackBy = (index, node) => node.id;
    this.paginationConfig = new _core_data_find_list_options_model__WEBPACK_IMPORTED_MODULE_2__.FindListOptions();
    this.paginationConfig.elementsPerPage = 2;
    this.paginationConfig.currentPage = 1;
    this.paginationConfig.sort = new _core_cache_models_sort_options_model__WEBPACK_IMPORTED_MODULE_1__.SortOptions('dc.title', _core_cache_models_sort_options_model__WEBPACK_IMPORTED_MODULE_1__.SortDirection.ASC);
  }
  ngOnInit() {
    this.dataSource = new _community_list_datasource__WEBPACK_IMPORTED_MODULE_7__.CommunityListDatasource(this.communityListService);
    this.communityListService.getLoadingNodeFromStore().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.take)(1)).subscribe(result => {
      this.loadingNode = result;
    });
    this.communityListService.getExpandedNodesFromStore().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.take)(1)).subscribe(result => {
      this.expandedNodes = [...result];
      this.dataSource.loadCommunities(this.paginationConfig, this.expandedNodes);
    });
  }
  ngOnDestroy() {
    this.communityListService.saveCommunityListStateToStore(this.expandedNodes, this.loadingNode);
  }
  /**
   * Whether this node has children (subcommunities or collections)
   * @param _
   * @param node
   */
  hasChild(_, node) {
    return node.isExpandable$;
  }
  /**
   * Whether this is a show more node that contains no data, but indicates that there is
   * one or more community or collection.
   * @param _
   * @param node
   */
  isShowMore(_, node) {
    return node.isShowMoreNode;
  }
  /**
   * Toggles the expanded variable of a node, adds it to the expanded nodes list and reloads the tree
   * so this node is expanded
   * @param node  Node we want to expand
   */
  toggleExpanded(node) {
    this.loadingNode = node;
    if (node.isExpanded) {
      this.expandedNodes = this.expandedNodes.filter(node2 => node2.id !== node.id);
      node.isExpanded = false;
    } else {
      this.expandedNodes.push(node);
      node.isExpanded = true;
      if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_3__.isEmpty)(node.currentCollectionPage)) {
        node.currentCollectionPage = 1;
      }
      if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_3__.isEmpty)(node.currentCommunityPage)) {
        node.currentCommunityPage = 1;
      }
    }
    this.dataSource.loadCommunities(this.paginationConfig, this.expandedNodes);
  }
  /**
   * Makes sure the next page of a node is added to the tree (top community, sub community of collection)
   *      > Finds its parent (if not top community) and increases its corresponding collection/subcommunity
   *      currentPage
   *      > Reloads tree with new page added to corresponding top community lis, sub community list or
   *      collection list
   * @param node  The show more node indicating whether it's an increase in top communities, sub communities
   *              or collections
   */
  getNextPage(node) {
    this.loadingNode = node;
    if (node.parent != null) {
      if (node.id.startsWith('collection')) {
        const parentNodeInExpandedNodes = this.expandedNodes.find(node2 => node.parent.id === node2.id);
        parentNodeInExpandedNodes.currentCollectionPage++;
      }
      if (node.id.startsWith('community')) {
        const parentNodeInExpandedNodes = this.expandedNodes.find(node2 => node.parent.id === node2.id);
        parentNodeInExpandedNodes.currentCommunityPage++;
      }
    } else {
      this.paginationConfig.currentPage++;
    }
    this.dataSource.loadCommunities(this.paginationConfig, this.expandedNodes);
  }
  static {
    this.ɵfac = function CommunityListComponent_Factory(t) {
      return new (t || CommunityListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_community_list_service__WEBPACK_IMPORTED_MODULE_8__.CommunityListService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_core_breadcrumbs_dso_name_service__WEBPACK_IMPORTED_MODULE_0__.DSONameService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
      type: CommunityListComponent,
      selectors: [["ds-base-community-list"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵStandaloneFeature"]],
      decls: 6,
      vars: 9,
      consts: [["class", "ds-themed-loading", 4, "ngIf"], [3, "dataSource", "treeControl", "trackBy"], ["cdkTreeNodePadding", "", "class", "example-tree-node show-more-node", 4, "cdkTreeNodeDef", "cdkTreeNodeDefWhen"], ["cdkTreeNodePadding", "", "class", "example-tree-node expandable-node", 4, "cdkTreeNodeDef", "cdkTreeNodeDefWhen"], ["cdkTreeNodePadding", "", "class", "example-tree-node childless-node", 4, "cdkTreeNodeDef", "cdkTreeNodeDefWhen"], [1, "ds-themed-loading"], ["cdkTreeNodePadding", "", 1, "example-tree-node", "show-more-node"], [1, "btn-group"], ["aria-hidden", "true", "cdkTreeNodeToggle", "", 1, "btn", "btn-default", "invisible"], [1, "fa", "fa-chevron-right"], [1, "align-middle", "my-auto"], ["class", "btn btn-outline-primary btn-sm", "role", "button", 3, "click", 4, "ngIf"], ["cdkTreeNodePadding", "", 1, "text-muted"], [1, "d-flex"], ["role", "button", 1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], [1, "fas", "fa-angle-down"], ["cdkTreeNodePadding", "", 1, "example-tree-node", "expandable-node"], ["type", "button", "class", "btn btn-default", "cdkTreeNodeToggle", "", "data-test", "expand-button", 3, "click", 4, "ngIf"], ["aria-hidden", "true", "class", "btn btn-default invisible", 4, "ngIf"], [1, "d-flex", "flex-row"], [1, "d-flex", "align-middle", "my-auto"], [1, "lead", 3, "routerLink"], [1, "pr-2"], ["class", "badge badge-pill badge-secondary align-top archived-items-lead my-auto", 4, "ngIf"], [3, "id"], ["class", "d-flex", 4, "ngIf"], ["class", "d-flex", "cdkTreeNodePadding", "", 4, "ngIf"], ["type", "button", "cdkTreeNodeToggle", "", "data-test", "expand-button", 1, "btn", "btn-default", 3, "click"], ["aria-hidden", "true"], [1, "sr-only"], ["aria-hidden", "true", 1, "btn", "btn-default", "invisible"], [1, "badge", "badge-pill", "badge-secondary", "align-top", "archived-items-lead", "my-auto"], [3, "id", "minLines"], ["cdkTreeNodePadding", "", 1, "d-flex"], ["cdkTreeNodePadding", "", 1, "example-tree-node", "childless-node"]],
      template: function CommunityListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, CommunityListComponent_ds_loading_0_Template, 1, 0, "ds-loading", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](1, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "cdk-tree", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, CommunityListComponent_cdk_tree_node_3_Template, 11, 6, "cdk-tree-node", 2)(4, CommunityListComponent_cdk_tree_node_4_Template, 18, 14, "cdk-tree-node", 3)(5, CommunityListComponent_cdk_tree_node_5_Template, 10, 4, "cdk-tree-node", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](1, 7, ctx.dataSource.loading$) && !ctx.loadingNode);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("dataSource", ctx.dataSource)("treeControl", ctx.treeControl)("trackBy", ctx.trackBy);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("cdkTreeNodeDefWhen", ctx.isShowMore);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("cdkTreeNodeDefWhen", ctx.hasChild);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("cdkTreeNodeDefWhen", !(ctx.hasChild && ctx.isShowMore));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_4__.ThemedLoadingComponent, _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_10__.CdkTreeModule, _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_10__.CdkTreeNodeDef, _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_10__.CdkTreeNodePadding, _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_10__.CdkTreeNodeToggle, _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_10__.CdkTree, _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_10__.CdkTreeNode, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterLink, _shared_truncatable_truncatable_component__WEBPACK_IMPORTED_MODULE_5__.TruncatableComponent, _shared_truncatable_truncatable_part_truncatable_part_component__WEBPACK_IMPORTED_MODULE_6__.TruncatablePartComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslatePipe],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n  .fa-chevron-right::before {\n  display: block;\n  width: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW11bml0eS1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBO0FBQ0E7RUFDRSxjQUFBO0VBQ0EsV0FBQTtBQUNGIiwiZmlsZSI6ImNvbW11bml0eS1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi9cbjo6bmctZGVlcCAuZmEtY2hldnJvbi1yaWdodDo6YmVmb3JlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxNnB4O1xufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tbXVuaXR5LWxpc3QtcGFnZS9jb21tdW5pdHktbGlzdC9jb21tdW5pdHktbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7QUFDRjtBQUNBLG90QkFBb3RCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi9cbjo6bmctZGVlcCAuZmEtY2hldnJvbi1yaWdodDo6YmVmb3JlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxNnB4O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 30737:
/*!***************************************************************************************!*\
  !*** ./src/app/community-list-page/community-list/themed-community-list.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemedCommunityListComponent: () => (/* binding */ ThemedCommunityListComponent)
/* harmony export */ });
/* harmony import */ var _shared_theme_support_themed_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/theme-support/themed.component */ 8886);
/* harmony import */ var _community_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./community-list.component */ 57457);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);



const _c0 = ["*"];
function ThemedCommunityListComponent_ng_template_0_Template(rf, ctx) {}
class ThemedCommunityListComponent extends _shared_theme_support_themed_component__WEBPACK_IMPORTED_MODULE_0__.ThemedComponent {
  getComponentName() {
    return 'CommunityListComponent';
  }
  importThemedComponent(themeName) {
    return __webpack_require__(89367)(`./${themeName}/app/community-list-page/community-list/community-list.component`);
  }
  importUnthemedComponent() {
    return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./community-list.component */ 57457));
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵThemedCommunityListComponent_BaseFactory;
      return function ThemedCommunityListComponent_Factory(t) {
        return (ɵThemedCommunityListComponent_BaseFactory || (ɵThemedCommunityListComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](ThemedCommunityListComponent)))(t || ThemedCommunityListComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ThemedCommunityListComponent,
      selectors: [["ds-community-list"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      ngContentSelectors: _c0,
      decls: 5,
      vars: 0,
      consts: [["vcr", ""], ["content", ""]],
      template: function ThemedCommunityListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ThemedCommunityListComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
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

/***/ 39116:
/*!******************************************************************!*\
  !*** ./src/app/community-list-page/show-more-flat-node.model.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ShowMoreFlatNode: () => (/* binding */ ShowMoreFlatNode)
/* harmony export */ });
/**
 * The show more links in the community tree are also represented by a flatNode so we know where in
 *  the tree it should be rendered and who its parent is (needed for the action resulting in clicking this link)
 */
class ShowMoreFlatNode {}

/***/ }),

/***/ 37986:
/*!*****************************************************************************!*\
  !*** ./src/app/community-list-page/themed-community-list-page.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemedCommunityListPageComponent: () => (/* binding */ ThemedCommunityListPageComponent)
/* harmony export */ });
/* harmony import */ var _shared_theme_support_themed_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/theme-support/themed.component */ 8886);
/* harmony import */ var _community_list_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./community-list-page.component */ 41456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);



const _c0 = ["*"];
function ThemedCommunityListPageComponent_ng_template_0_Template(rf, ctx) {}
/**
 * Themed wrapper for CommunityListPageComponent
 */
class ThemedCommunityListPageComponent extends _shared_theme_support_themed_component__WEBPACK_IMPORTED_MODULE_0__.ThemedComponent {
  getComponentName() {
    return 'CommunityListPageComponent';
  }
  importThemedComponent(themeName) {
    return __webpack_require__(24768)(`./${themeName}/app/community-list-page/community-list-page.component`);
  }
  importUnthemedComponent() {
    return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./community-list-page.component */ 41456));
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵThemedCommunityListPageComponent_BaseFactory;
      return function ThemedCommunityListPageComponent_Factory(t) {
        return (ɵThemedCommunityListPageComponent_BaseFactory || (ɵThemedCommunityListPageComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](ThemedCommunityListPageComponent)))(t || ThemedCommunityListPageComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ThemedCommunityListPageComponent,
      selectors: [["ds-community-list-page"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      ngContentSelectors: _c0,
      decls: 5,
      vars: 0,
      consts: [["vcr", ""], ["content", ""]],
      template: function ThemedCommunityListPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ThemedCommunityListPageComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
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

/***/ 24768:
/*!******************************************************************************************************************!*\
  !*** ./src/themes/ lazy ^\.\/.*\/app\/community\-list\-page\/community\-list\-page\.component$ namespace object ***!
  \******************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./custom/app/community-list-page/community-list-page.component": [
		9783,
		"src_themes_custom_app_community-list-page_community-list-page_component_ts"
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
webpackAsyncContext.id = 24768;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 89367:
/*!*****************************************************************************************************************************!*\
  !*** ./src/themes/ lazy ^\.\/.*\/app\/community\-list\-page\/community\-list\/community\-list\.component$ namespace object ***!
  \*****************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./custom/app/community-list-page/community-list/community-list.component": [
		41658,
		"src_themes_custom_app_community-list-page_community-list_community-list_component_ts"
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
webpackAsyncContext.id = 89367;
module.exports = webpackAsyncContext;

/***/ })

}]);
//# sourceMappingURL=src_app_community-list-page_community-list-page-routes_ts.js.map