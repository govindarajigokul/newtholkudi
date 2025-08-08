(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_app_home-page_home-page-routes_ts"],{

/***/ 79306:
/*!************************************************************!*\
  !*** ./src/app/home-page/home-coar/home-coar.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeCoarComponent: () => (/* binding */ HomeCoarComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 17796);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 84975);
/* harmony import */ var _core_coar_notify_notify_info_notify_info_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/coar-notify/notify-info/notify-info.service */ 42084);
/* harmony import */ var _core_services_link_head_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/link-head.service */ 8865);
/* harmony import */ var _core_services_server_response_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/server-response.service */ 7337);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/empty.util */ 82777);












class HomeCoarComponent {
  constructor(linkHeadService, notifyInfoService, responseService, platformId) {
    this.linkHeadService = linkHeadService;
    this.notifyInfoService = notifyInfoService;
    this.responseService = responseService;
    this.platformId = platformId;
    /**
     * An array of LinkDefinition objects representing inbox links for the home page.
     */
    this.inboxLinks = [];
    this.subs = [];
  }
  ngOnInit() {
    // Get COAR REST API URLs from REST configuration
    // only if COAR configuration is enabled
    this.subs.push(this.notifyInfoService.isCoarConfigEnabled().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(coarLdnEnabled => coarLdnEnabled ? this.notifyInfoService.getCoarLdnLocalInboxUrls() : (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)([]))).subscribe(coarRestApiUrls => {
      if (coarRestApiUrls.length > 0) {
        this.initPageLinks(coarRestApiUrls);
      }
    }));
  }
  /**
   * It removes the inbox links from the head of the html.
   */
  ngOnDestroy() {
    this.subs.forEach(sub => sub.unsubscribe());
    this.inboxLinks.forEach(link => {
      this.linkHeadService.removeTag(`href='${link.href}'`);
    });
  }
  /**
   * Initializes page links for COAR REST API URLs.
   * @param coarRestApiUrls An array of COAR REST API URLs.
   */
  initPageLinks(coarRestApiUrls) {
    const rel = this.notifyInfoService.getInboxRelationLink();
    let links = '';
    coarRestApiUrls.forEach(coarRestApiUrl => {
      // Add link to head
      const tag = {
        href: coarRestApiUrl,
        rel: rel
      };
      this.inboxLinks.push(tag);
      this.linkHeadService.addTag(tag);
      links = links + ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_3__.isNotEmpty)(links) ? ', ' : '') + `<${coarRestApiUrl}> ; rel="${rel}"`;
    });
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_6__.isPlatformServer)(this.platformId)) {
      // Add link to response header
      this.responseService.setHeader('Link', links);
    }
  }
  static {
    this.ɵfac = function HomeCoarComponent_Factory(t) {
      return new (t || HomeCoarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_services_link_head_service__WEBPACK_IMPORTED_MODULE_1__.LinkHeadService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_coar_notify_notify_info_notify_info_service__WEBPACK_IMPORTED_MODULE_0__.NotifyInfoService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_services_server_response_service__WEBPACK_IMPORTED_MODULE_2__.ServerResponseService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.PLATFORM_ID));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: HomeCoarComponent,
      selectors: [["ds-home-coar"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵStandaloneFeature"]],
      decls: 0,
      vars: 0,
      template: function HomeCoarComponent_Template(rf, ctx) {},
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 52178:
/*!************************************************************!*\
  !*** ./src/app/home-page/home-news/home-news.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeNewsComponent: () => (/* binding */ HomeNewsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 90310);

/**
 * Component to render the news section on the home page
 */
class HomeNewsComponent {
  static {
    this.ɵfac = function HomeNewsComponent_Factory(t) {
      return new (t || HomeNewsComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeNewsComponent,
      selectors: [["ds-base-home-news"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 20,
      vars: 0,
      consts: [[1, "jumbotron", "jumbotron-fluid", "mt-ncs"], [1, "container"], [1, "d-flex", "flex-wrap"], [1, "display-3"], [1, "lead"], ["href", "https://wiki.lyrasis.org/display/DSPACE/DSpace+Positioning", "target", "_blank"]],
      template: function HomeNewsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h1", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "DSpace 8");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "DSpace is the world leading open source repository platform that enables organisations to:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul")(9, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "easily ingest documents, audio, video, datasets and their corresponding Dublin Core metadata ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "open up this content to local and global audiences, thanks to the OAI-PMH interface and Google Scholar optimizations ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "issue permanent urls and trustworthy identifiers, including optional integrations with handle.net and DataCite DOI");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Join an international community of ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "leading institutions using DSpace");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, ". ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        }
      },
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n}\n\n.display-3[_ngcontent-%COMP%] {\n  word-break: break-word;\n}\n\n.jumbotron[_ngcontent-%COMP%] {\n  background-color: var(--ds-home-news-background-color);\n}\n\na[_ngcontent-%COMP%] {\n  color: var(--ds-home-news-link-color);\n}\n\na[_ngcontent-%COMP%]:hover {\n  color: var(--ds-home-news-link-hover-color);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtbmV3cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBO0VBQ0UsY0FBQTtBQUNGOztBQUNBO0VBQ0Usc0JBQUE7QUFFRjs7QUFBQTtFQUNFLHNEQUFBO0FBR0Y7O0FBREE7RUFDRSxxQ0FBQTtBQUlGOztBQUZBO0VBQ0UsMkNBQUE7QUFLRiIsImZpbGUiOiJob21lLW5ld3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqL1xuOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5kaXNwbGF5LTMge1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xufVxuLmp1bWJvdHJvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRzLWhvbWUtbmV3cy1iYWNrZ3JvdW5kLWNvbG9yKTtcbn1cbmEge1xuICBjb2xvcjogdmFyKC0tZHMtaG9tZS1uZXdzLWxpbmstY29sb3IpO1xufVxuYTpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1kcy1ob21lLW5ld3MtbGluay1ob3Zlci1jb2xvcik7XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS1wYWdlL2hvbWUtbmV3cy9ob21lLW5ld3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQTtFQUNFLGNBQUE7QUFDRjs7QUFDQTtFQUNFLHNCQUFBO0FBRUY7O0FBQUE7RUFDRSxzREFBQTtBQUdGOztBQURBO0VBQ0UscUNBQUE7QUFJRjs7QUFGQTtFQUNFLDJDQUFBO0FBS0Y7QUFDQSxvaUNBQW9pQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovXG46aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmRpc3BsYXktMyB7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG59XG4uanVtYm90cm9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZHMtaG9tZS1uZXdzLWJhY2tncm91bmQtY29sb3IpO1xufVxuYSB7XG4gIGNvbG9yOiB2YXIoLS1kcy1ob21lLW5ld3MtbGluay1jb2xvcik7XG59XG5hOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLWRzLWhvbWUtbmV3cy1saW5rLWhvdmVyLWNvbG9yKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 34234:
/*!*******************************************************************!*\
  !*** ./src/app/home-page/home-news/themed-home-news.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemedHomeNewsComponent: () => (/* binding */ ThemedHomeNewsComponent)
/* harmony export */ });
/* harmony import */ var _shared_theme_support_themed_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/theme-support/themed.component */ 8886);
/* harmony import */ var _home_news_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-news.component */ 52178);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);



const _c0 = ["*"];
function ThemedHomeNewsComponent_ng_template_0_Template(rf, ctx) {}
/**
 * Component to render the news section on the home page
 */
class ThemedHomeNewsComponent extends _shared_theme_support_themed_component__WEBPACK_IMPORTED_MODULE_0__.ThemedComponent {
  getComponentName() {
    return 'HomeNewsComponent';
  }
  importThemedComponent(themeName) {
    return __webpack_require__(56564)(`./${themeName}/app/home-page/home-news/home-news.component`);
  }
  importUnthemedComponent() {
    return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./home-news.component */ 52178));
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵThemedHomeNewsComponent_BaseFactory;
      return function ThemedHomeNewsComponent_Factory(t) {
        return (ɵThemedHomeNewsComponent_BaseFactory || (ɵThemedHomeNewsComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](ThemedHomeNewsComponent)))(t || ThemedHomeNewsComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ThemedHomeNewsComponent,
      selectors: [["ds-home-news"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      ngContentSelectors: _c0,
      decls: 5,
      vars: 0,
      consts: [["vcr", ""], ["content", ""]],
      template: function ThemedHomeNewsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ThemedHomeNewsComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
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

/***/ 92668:
/*!***********************************************!*\
  !*** ./src/app/home-page/home-page-routes.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ROUTES: () => (/* binding */ ROUTES)
/* harmony export */ });
/* harmony import */ var _shared_menu_menu_item_type_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/menu/menu-item-type.model */ 34237);
/* harmony import */ var _home_page_resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-page.resolver */ 32849);
/* harmony import */ var _themed_home_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./themed-home-page.component */ 28260);



const ROUTES = [{
  path: '',
  component: _themed_home_page_component__WEBPACK_IMPORTED_MODULE_2__.ThemedHomePageComponent,
  pathMatch: 'full',
  data: {
    title: 'home.title',
    menu: {
      public: [{
        id: 'statistics_site',
        active: true,
        visible: true,
        index: 2,
        model: {
          type: _shared_menu_menu_item_type_model__WEBPACK_IMPORTED_MODULE_0__.MenuItemType.LINK,
          text: 'menu.section.statistics',
          link: 'statistics'
        }
      }]
    }
  },
  resolve: {
    site: _home_page_resolver__WEBPACK_IMPORTED_MODULE_1__.homePageResolver
  }
}];

/***/ }),

/***/ 6792:
/*!**************************************************!*\
  !*** ./src/app/home-page/home-page.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomePageComponent: () => (/* binding */ HomePageComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 6663);
/* harmony import */ var src_config_app_config_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/config/app-config.interface */ 82640);
/* harmony import */ var _notifications_suggestions_popup_suggestions_popup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../notifications/suggestions-popup/suggestions-popup.component */ 95939);
/* harmony import */ var _search_page_themed_configuration_search_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../search-page/themed-configuration-search-page.component */ 4021);
/* harmony import */ var _shared_search_form_themed_search_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/search-form/themed-search-form.component */ 18016);
/* harmony import */ var _statistics_angulartics_dspace_view_tracker_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../statistics/angulartics/dspace/view-tracker.component */ 57850);
/* harmony import */ var _home_coar_home_coar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-coar/home-coar.component */ 79306);
/* harmony import */ var _home_news_themed_home_news_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-news/themed-home-news.component */ 34234);
/* harmony import */ var _recent_item_list_recent_item_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./recent-item-list/recent-item-list.component */ 26728);
/* harmony import */ var _top_level_community_list_themed_top_level_community_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./top-level-community-list/themed-top-level-community-list.component */ 75014);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 14354);
















function HomePageComponent_ds_configuration_search_page_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainer"](0, 5);
  }
}
function HomePageComponent_ds_configuration_search_page_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ds-configuration-search-page", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, HomePageComponent_ds_configuration_search_page_2_ng_container_1_Template, 1, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    const homeContent_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("sideBarWidth", 3)("showViewModes", false)("searchEnabled", false)("inPlaceSearch", false)("showScopeSelector", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngTemplateOutlet", homeContent_r1);
  }
}
function HomePageComponent_div_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainer"](0);
  }
}
function HomePageComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, HomePageComponent_div_3_ng_container_1_Template, 1, 0, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    const homeContent_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngTemplateOutlet", homeContent_r1);
  }
}
function HomePageComponent_ng_template_5_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "ds-view-tracker", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const site_r2 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("object", site_r2);
  }
}
function HomePageComponent_ng_template_5_ds_recent_item_list_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "ds-recent-item-list");
  }
}
function HomePageComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, HomePageComponent_ng_template_5_ng_container_0_Template, 2, 1, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "ds-search-form", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "ds-top-level-community-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, HomePageComponent_ng_template_5_ds_recent_item_list_5_Template, 1, 0, "ds-recent-item-list", 8);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](1, 4, ctx_r2.site$));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("inPlaceSearch", false)("searchPlaceholder", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 6, "home.search-form.placeholder"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.recentSubmissionspageSize > 0);
  }
}
class HomePageComponent {
  constructor(appConfig, route) {
    this.appConfig = appConfig;
    this.route = route;
    this.recentSubmissionspageSize = this.appConfig.homePage.recentSubmissions.pageSize;
    this.showDiscoverFilters = this.appConfig.homePage.showDiscoverFilters;
  }
  ngOnInit() {
    this.site$ = this.route.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(data => data.site));
  }
  static {
    this.ɵfac = function HomePageComponent_Factory(t) {
      return new (t || HomePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_config_app_config_interface__WEBPACK_IMPORTED_MODULE_0__.APP_CONFIG), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
      type: HomePageComponent,
      selectors: [["ds-base-home-page"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵStandaloneFeature"]],
      decls: 7,
      vars: 2,
      consts: [["homeContent", ""], [3, "sideBarWidth", "showViewModes", "searchEnabled", "inPlaceSearch", "showScopeSelector", 4, "ngIf"], ["class", "container", 4, "ngIf"], [3, "sideBarWidth", "showViewModes", "searchEnabled", "inPlaceSearch", "showScopeSelector"], ["searchContentTop", "", 4, "ngTemplateOutlet"], ["searchContentTop", ""], [1, "container"], [4, "ngTemplateOutlet"], [4, "ngIf"], [3, "inPlaceSearch", "searchPlaceholder"], [3, "object"]],
      template: function HomePageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "ds-home-coar")(1, "ds-home-news");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, HomePageComponent_ds_configuration_search_page_2_Template, 2, 6, "ds-configuration-search-page", 1)(3, HomePageComponent_div_3_Template, 2, 1, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "ds-suggestions-popup");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, HomePageComponent_ng_template_5_Template, 6, 8, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.showDiscoverFilters);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.showDiscoverFilters);
        }
      },
      dependencies: [_home_news_themed_home_news_component__WEBPACK_IMPORTED_MODULE_6__.ThemedHomeNewsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _statistics_angulartics_dspace_view_tracker_component__WEBPACK_IMPORTED_MODULE_4__.ViewTrackerComponent, _shared_search_form_themed_search_form_component__WEBPACK_IMPORTED_MODULE_3__.ThemedSearchFormComponent, _top_level_community_list_themed_top_level_community_list_component__WEBPACK_IMPORTED_MODULE_8__.ThemedTopLevelCommunityListComponent, _recent_item_list_recent_item_list_component__WEBPACK_IMPORTED_MODULE_7__.RecentItemListComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslatePipe, _notifications_suggestions_popup_suggestions_popup_component__WEBPACK_IMPORTED_MODULE_1__.SuggestionsPopupComponent, _search_page_themed_configuration_search_page_component__WEBPACK_IMPORTED_MODULE_2__.ThemedConfigurationSearchPageComponent, _home_coar_home_coar_component__WEBPACK_IMPORTED_MODULE_5__.HomeCoarComponent],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n@media (max-width: 991.98px) {\n  ds-themed-configuration-search-page[_ngcontent-%COMP%]    + .container[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBO0VBQ0U7SUFDRSxXQUFBO0lBQ0EsZUFBQTtFQUNGO0FBQ0YiLCJmaWxlIjoiaG9tZS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTEuOThweCkge1xuICBkcy10aGVtZWQtY29uZmlndXJhdGlvbi1zZWFyY2gtcGFnZSArIC5jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogbm9uZTtcbiAgfVxufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBO0VBQ0U7SUFDRSxXQUFBO0lBQ0EsZUFBQTtFQUNGO0FBQ0Y7QUFDQSxneUJBQWd5QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovXG5AbWVkaWEgKG1heC13aWR0aDogOTkxLjk4cHgpIHtcbiAgZHMtdGhlbWVkLWNvbmZpZ3VyYXRpb24tc2VhcmNoLXBhZ2UgKyAuY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IG5vbmU7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 32849:
/*!*************************************************!*\
  !*** ./src/app/home-page/home-page.resolver.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   homePageResolver: () => (/* binding */ homePageResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 78374);
/* harmony import */ var _core_data_site_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/data/site-data.service */ 5090);



const homePageResolver = (route, state, siteService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_core_data_site_data_service__WEBPACK_IMPORTED_MODULE_0__.SiteDataService)) => {
  return siteService.find().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1));
};

/***/ }),

/***/ 26728:
/*!**************************************************************************!*\
  !*** ./src/app/home-page/recent-item-list/recent-item-list.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RecentItemListComponent: () => (/* binding */ RecentItemListComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var _config_app_config_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../config/app-config.interface */ 82640);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ 88280);
/* harmony import */ var _core_cache_models_sort_options_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/cache/models/sort-options.model */ 6238);
/* harmony import */ var _core_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/pagination/pagination.service */ 76896);
/* harmony import */ var _core_shared_dspace_object_type_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/shared/dspace-object-type.model */ 13864);
/* harmony import */ var _core_shared_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/shared/operators */ 55757);
/* harmony import */ var _core_shared_search_search_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/shared/search/search.service */ 55180);
/* harmony import */ var _core_shared_search_search_configuration_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/shared/search/search-configuration.service */ 68611);
/* harmony import */ var _core_shared_view_mode_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/shared/view-mode.model */ 78448);
/* harmony import */ var _shared_animations_fade__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/animations/fade */ 50332);
/* harmony import */ var _shared_error_error_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/error/error.component */ 79632);
/* harmony import */ var _shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/loading/themed-loading.component */ 82394);
/* harmony import */ var _shared_object_collection_shared_listable_object_listable_object_component_loader_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/object-collection/shared/listable-object/listable-object-component-loader.component */ 17191);
/* harmony import */ var _shared_pagination_pagination_component_options_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/pagination/pagination-component-options.model */ 23401);
/* harmony import */ var _shared_search_models_paginated_search_options_model__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/search/models/paginated-search-options.model */ 33550);
/* harmony import */ var _shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../shared/utils/follow-link-config.model */ 67600);
/* harmony import */ var _shared_utils_object_list_utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../shared/utils/object-list-utils */ 74430);
/* harmony import */ var _shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../shared/utils/var.directive */ 18226);


























function RecentItemListComponent_ng_container_0_div_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](1, "ds-listable-object-component-loader", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("object", item_r2)("viewMode", ctx_r2.viewMode);
  }
}
function RecentItemListComponent_ng_container_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](5, RecentItemListComponent_ng_container_0_div_1_div_5_Template, 2, 2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function RecentItemListComponent_ng_container_0_div_1_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r2.onLoadMore());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const itemRD_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().ngVar;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngClass", ctx_r2.placeholderFontClass)("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](4, 5, "home.recent-submissions.head"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", itemRD_r4 == null ? null : itemRD_r4.payload == null ? null : itemRD_r4.payload.page);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](8, 7, "vocabulary-treeview.load-more"), " ...");
  }
}
function RecentItemListComponent_ng_container_0_ds_error_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "ds-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("message", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](1, 1, "error.recent-submissions"));
  }
}
function RecentItemListComponent_ng_container_0_ds_loading_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "ds-loading", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("message", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](1, 1, "loading.recent-submissions"));
  }
}
function RecentItemListComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, RecentItemListComponent_ng_container_0_div_1_Template, 9, 9, "div", 1)(2, RecentItemListComponent_ng_container_0_ds_error_2_Template, 2, 3, "ds-error", 2)(3, RecentItemListComponent_ng_container_0_ds_loading_3_Template, 2, 3, "ds-loading", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const itemRD_r4 = ctx.ngVar;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", (itemRD_r4 == null ? null : itemRD_r4.hasSucceeded) && (itemRD_r4 == null ? null : itemRD_r4.payload == null ? null : itemRD_r4.payload.page.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", itemRD_r4 == null ? null : itemRD_r4.hasFailed);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !itemRD_r4 || itemRD_r4.isLoading);
  }
}
class RecentItemListComponent {
  constructor(searchService, paginationService, searchConfigurationService, elementRef, appConfig, platformId) {
    this.searchService = searchService;
    this.paginationService = paginationService;
    this.searchConfigurationService = searchConfigurationService;
    this.elementRef = elementRef;
    this.appConfig = appConfig;
    this.platformId = platformId;
    /**
    * The view-mode we're currently on
    * @type {ViewMode}
    */
    this.viewMode = _core_shared_view_mode_model__WEBPACK_IMPORTED_MODULE_8__.ViewMode.ListElement;
    this.paginationConfig = Object.assign(new _shared_pagination_pagination_component_options_model__WEBPACK_IMPORTED_MODULE_13__.PaginationComponentOptions(), {
      id: 'hp',
      pageSize: _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.homePage.recentSubmissions.pageSize,
      currentPage: 1,
      maxSize: 1
    });
    this.sortConfig = new _core_cache_models_sort_options_model__WEBPACK_IMPORTED_MODULE_2__.SortOptions(_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.homePage.recentSubmissions.sortField, _core_cache_models_sort_options_model__WEBPACK_IMPORTED_MODULE_2__.SortDirection.DESC);
  }
  ngOnInit() {
    const linksToFollow = [];
    if (this.appConfig.browseBy.showThumbnails) {
      linksToFollow.push((0,_shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_15__.followLink)('thumbnail'));
    }
    if (this.appConfig.item.showAccessStatuses) {
      linksToFollow.push((0,_shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_15__.followLink)('accessStatus'));
    }
    this.itemRD$ = this.searchService.search(new _shared_search_models_paginated_search_options_model__WEBPACK_IMPORTED_MODULE_14__.PaginatedSearchOptions({
      pagination: this.paginationConfig,
      dsoTypes: [_core_shared_dspace_object_type_model__WEBPACK_IMPORTED_MODULE_4__.DSpaceObjectType.ITEM],
      sort: this.sortConfig
    }), undefined, undefined, undefined, ...linksToFollow).pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_5__.toDSpaceObjectListRD)());
  }
  ngOnDestroy() {
    this.paginationService.clearPagination(this.paginationConfig.id);
  }
  onLoadMore() {
    this.paginationService.updateRouteWithUrl(this.searchConfigurationService.paginationID, ['search'], {
      sortField: _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.homePage.recentSubmissions.sortField,
      sortDirection: 'DESC',
      page: 1
    });
  }
  get placeholderFontClass() {
    if (this._placeholderFontClass === undefined) {
      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_19__.isPlatformBrowser)(this.platformId)) {
        const width = this.elementRef.nativeElement.offsetWidth;
        this._placeholderFontClass = (0,_shared_utils_object_list_utils__WEBPACK_IMPORTED_MODULE_16__.setPlaceHolderAttributes)(width);
      } else {
        this._placeholderFontClass = 'hide-placeholder-text';
      }
    }
    return this._placeholderFontClass;
  }
  static {
    this.ɵfac = function RecentItemListComponent_Factory(t) {
      return new (t || RecentItemListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_core_shared_search_search_service__WEBPACK_IMPORTED_MODULE_6__.SearchService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_core_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_3__.PaginationService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_core_shared_search_search_configuration_service__WEBPACK_IMPORTED_MODULE_7__.SearchConfigurationService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_18__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_config_app_config_interface__WEBPACK_IMPORTED_MODULE_0__.APP_CONFIG), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_18__.PLATFORM_ID));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineComponent"]({
      type: RecentItemListComponent,
      selectors: [["ds-recent-item-list"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 3,
      consts: [[4, "ngVar"], ["class", "mt-4", 3, "ngClass", 4, "ngIf"], [3, "message", 4, "ngIf"], [1, "mt-4", 3, "ngClass"], [1, "d-flex", "flex-row", "border-bottom", "mb-4", "pb-4"], ["class", "my-4", 4, "ngFor", "ngForOf"], [1, "btn", "btn-primary", "search-button", "mt-4", 3, "click"], [1, "my-4"], [1, "pb-4", 3, "object", "viewMode"], [3, "message"]],
      template: function RecentItemListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](0, RecentItemListComponent_ng_container_0_Template, 4, 3, "ng-container", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](1, "async");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngVar", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](1, 1, ctx.itemRD$));
        }
      },
      dependencies: [_shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_17__.VarDirective, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgFor, _shared_object_collection_shared_listable_object_listable_object_component_loader_component__WEBPACK_IMPORTED_MODULE_12__.ListableObjectComponentLoaderComponent, _shared_error_error_component__WEBPACK_IMPORTED_MODULE_10__.ErrorComponent, _shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_11__.ThemedLoadingComponent, _angular_common__WEBPACK_IMPORTED_MODULE_19__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__.TranslatePipe],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2VudC1pdGVtLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUEiLCJmaWxlIjoicmVjZW50LWl0ZW0tbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS1wYWdlL3JlY2VudC1pdGVtLWxpc3QvcmVjZW50LWl0ZW0tbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBLHdrQkFBd2tCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi8iXSwic291cmNlUm9vdCI6IiJ9 */"],
      data: {
        animation: [_shared_animations_fade__WEBPACK_IMPORTED_MODULE_9__.fadeIn, _shared_animations_fade__WEBPACK_IMPORTED_MODULE_9__.fadeInOut]
      },
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 28260:
/*!*********************************************************!*\
  !*** ./src/app/home-page/themed-home-page.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemedHomePageComponent: () => (/* binding */ ThemedHomePageComponent)
/* harmony export */ });
/* harmony import */ var _shared_theme_support_themed_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/theme-support/themed.component */ 8886);
/* harmony import */ var _home_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-page.component */ 6792);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);



const _c0 = ["*"];
function ThemedHomePageComponent_ng_template_0_Template(rf, ctx) {}
class ThemedHomePageComponent extends _shared_theme_support_themed_component__WEBPACK_IMPORTED_MODULE_0__.ThemedComponent {
  getComponentName() {
    return 'HomePageComponent';
  }
  importThemedComponent(themeName) {
    return __webpack_require__(78010)(`./${themeName}/app/home-page/home-page.component`);
  }
  importUnthemedComponent() {
    return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./home-page.component */ 6792));
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵThemedHomePageComponent_BaseFactory;
      return function ThemedHomePageComponent_Factory(t) {
        return (ɵThemedHomePageComponent_BaseFactory || (ɵThemedHomePageComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](ThemedHomePageComponent)))(t || ThemedHomePageComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ThemedHomePageComponent,
      selectors: [["ds-home-page"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      ngContentSelectors: _c0,
      decls: 5,
      vars: 0,
      consts: [["vcr", ""], ["content", ""]],
      template: function ThemedHomePageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ThemedHomePageComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
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

/***/ 75014:
/*!*************************************************************************************************!*\
  !*** ./src/app/home-page/top-level-community-list/themed-top-level-community-list.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemedTopLevelCommunityListComponent: () => (/* binding */ ThemedTopLevelCommunityListComponent)
/* harmony export */ });
/* harmony import */ var _shared_theme_support_themed_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/theme-support/themed.component */ 8886);
/* harmony import */ var _top_level_community_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./top-level-community-list.component */ 45670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 90310);



const _c0 = ["*"];
function ThemedTopLevelCommunityListComponent_ng_template_0_Template(rf, ctx) {}
class ThemedTopLevelCommunityListComponent extends _shared_theme_support_themed_component__WEBPACK_IMPORTED_MODULE_0__.ThemedComponent {
  getComponentName() {
    return 'TopLevelCommunityListComponent';
  }
  importThemedComponent(themeName) {
    return __webpack_require__(30068)(`./${themeName}/app/home-page/top-level-community-list/top-level-community-list.component`);
  }
  importUnthemedComponent() {
    return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./top-level-community-list.component */ 45670));
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵThemedTopLevelCommunityListComponent_BaseFactory;
      return function ThemedTopLevelCommunityListComponent_Factory(t) {
        return (ɵThemedTopLevelCommunityListComponent_BaseFactory || (ɵThemedTopLevelCommunityListComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](ThemedTopLevelCommunityListComponent)))(t || ThemedTopLevelCommunityListComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ThemedTopLevelCommunityListComponent,
      selectors: [["ds-top-level-community-list"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      ngContentSelectors: _c0,
      decls: 5,
      vars: 0,
      consts: [["vcr", ""], ["content", ""]],
      template: function ThemedTopLevelCommunityListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ThemedTopLevelCommunityListComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
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

/***/ 45670:
/*!******************************************************************************************!*\
  !*** ./src/app/home-page/top-level-community-list/top-level-community-list.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TopLevelCommunityListComponent: () => (/* binding */ TopLevelCommunityListComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 83485);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 27639);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 84975);
/* harmony import */ var src_config_app_config_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/config/app-config.interface */ 82640);
/* harmony import */ var _core_cache_models_sort_options_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/cache/models/sort-options.model */ 6238);
/* harmony import */ var _core_data_community_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/data/community-data.service */ 46660);
/* harmony import */ var _core_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/pagination/pagination.service */ 76896);
/* harmony import */ var _shared_animations_fade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/animations/fade */ 50332);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/empty.util */ 82777);
/* harmony import */ var _shared_error_error_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/error/error.component */ 79632);
/* harmony import */ var _shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/loading/themed-loading.component */ 82394);
/* harmony import */ var _shared_object_collection_object_collection_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/object-collection/object-collection.component */ 14828);
/* harmony import */ var _shared_pagination_pagination_component_options_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/pagination/pagination-component-options.model */ 23401);
/* harmony import */ var _shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/utils/var.directive */ 18226);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 90310);



















function TopLevelCommunityListComponent_ng_container_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](7, "ds-viewable-collection", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 6, "home.top-level-communities.head"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](6, 8, "home.top-level-communities.help"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("config", ctx_r0.config)("sortConfig", ctx_r0.sortConfig)("objects", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](8, 10, ctx_r0.communitiesRD$))("hideGear", true);
  }
}
function TopLevelCommunityListComponent_ng_container_0_ds_error_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "ds-error", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("message", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](1, 1, "error.top-level-communities"));
  }
}
function TopLevelCommunityListComponent_ng_container_0_ds_loading_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "ds-loading", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("message", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](1, 1, "loading.top-level-communities"));
  }
}
function TopLevelCommunityListComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, TopLevelCommunityListComponent_ng_container_0_div_1_Template, 9, 12, "div", 1)(2, TopLevelCommunityListComponent_ng_container_0_ds_error_2_Template, 2, 3, "ds-error", 2)(3, TopLevelCommunityListComponent_ng_container_0_ds_loading_3_Template, 2, 3, "ds-loading", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const communitiesRD_r2 = ctx.ngVar;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", communitiesRD_r2 == null ? null : communitiesRD_r2.hasSucceeded);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", communitiesRD_r2 == null ? null : communitiesRD_r2.hasFailed);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", communitiesRD_r2 == null ? null : communitiesRD_r2.isLoading);
  }
}
/**
 * this component renders the Top-Level Community list
 */
class TopLevelCommunityListComponent {
  constructor(appConfig, cds, paginationService) {
    this.appConfig = appConfig;
    this.cds = cds;
    this.paginationService = paginationService;
    /**
     * A list of remote data objects of all top communities
     */
    this.communitiesRD$ = new rxjs__WEBPACK_IMPORTED_MODULE_12__.BehaviorSubject({});
    /**
     * The pagination id
     */
    this.pageId = 'tl';
    this.config = new _shared_pagination_pagination_component_options_model__WEBPACK_IMPORTED_MODULE_9__.PaginationComponentOptions();
    this.config.id = this.pageId;
    this.config.pageSize = appConfig.homePage.topLevelCommunityList.pageSize;
    this.config.currentPage = 1;
    this.sortConfig = new _core_cache_models_sort_options_model__WEBPACK_IMPORTED_MODULE_1__.SortOptions('dc.title', _core_cache_models_sort_options_model__WEBPACK_IMPORTED_MODULE_1__.SortDirection.ASC);
  }
  ngOnInit() {
    this.initPage();
  }
  /**
   * Update the list of top communities
   */
  initPage() {
    const pagination$ = this.paginationService.getCurrentPagination(this.config.id, this.config);
    const sort$ = this.paginationService.getCurrentSort(this.config.id, this.sortConfig);
    this.currentPageSubscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.combineLatest)([pagination$, sort$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.switchMap)(([currentPagination, currentSort]) => {
      return this.cds.findTop({
        currentPage: currentPagination.currentPage,
        elementsPerPage: currentPagination.pageSize,
        sort: {
          field: currentSort.field,
          direction: currentSort.direction
        }
      });
    })).subscribe(results => {
      this.communitiesRD$.next(results);
    });
  }
  /**
   * Unsubscribe the top list subscription if it exists
   */
  unsubscribe() {
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_5__.hasValue)(this.currentPageSubscription)) {
      this.currentPageSubscription.unsubscribe();
    }
  }
  /**
   * Clean up subscriptions when the component is destroyed
   */
  ngOnDestroy() {
    this.unsubscribe();
    this.paginationService.clearPagination(this.config.id);
  }
  static {
    this.ɵfac = function TopLevelCommunityListComponent_Factory(t) {
      return new (t || TopLevelCommunityListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_config_app_config_interface__WEBPACK_IMPORTED_MODULE_0__.APP_CONFIG), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_core_data_community_data_service__WEBPACK_IMPORTED_MODULE_2__.CommunityDataService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_core_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_3__.PaginationService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
      type: TopLevelCommunityListComponent,
      selectors: [["ds-base-top-level-community-list"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 3,
      consts: [[4, "ngVar"], [4, "ngIf"], [3, "message", 4, "ngIf"], [1, "lead"], [3, "config", "sortConfig", "objects", "hideGear"], [3, "message"]],
      template: function TopLevelCommunityListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](0, TopLevelCommunityListComponent_ng_container_0_Template, 4, 3, "ng-container", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](1, "async");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngVar", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](1, 1, ctx.communitiesRD$));
        }
      },
      dependencies: [_shared_utils_var_directive__WEBPACK_IMPORTED_MODULE_10__.VarDirective, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _shared_object_collection_object_collection_component__WEBPACK_IMPORTED_MODULE_8__.ObjectCollectionComponent, _shared_error_error_component__WEBPACK_IMPORTED_MODULE_6__.ErrorComponent, _shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_7__.ThemedLoadingComponent, _angular_common__WEBPACK_IMPORTED_MODULE_15__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslatePipe],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvcC1sZXZlbC1jb21tdW5pdHktbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQSIsImZpbGUiOiJ0b3AtbGV2ZWwtY29tbXVuaXR5LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqLyJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS1wYWdlL3RvcC1sZXZlbC1jb21tdW5pdHktbGlzdC90b3AtbGV2ZWwtY29tbXVuaXR5LWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQSxnbUJBQWdtQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
      data: {
        animation: [_shared_animations_fade__WEBPACK_IMPORTED_MODULE_4__.fadeInOut]
      },
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 95939:
/*!********************************************************************************!*\
  !*** ./src/app/notifications/suggestions-popup/suggestions-popup.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SuggestionsPopupComponent: () => (/* binding */ SuggestionsPopupComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/animations */ 40262);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 14354);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 96439);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 99259);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 27639);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 17796);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 78374);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 58468);
/* harmony import */ var _shared_animations_fromTop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/animations/fromTop */ 6703);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/empty.util */ 82777);
/* harmony import */ var _suggestion_targets_suggestion_targets_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../suggestion-targets/suggestion-targets.state.service */ 6324);
/* harmony import */ var _suggestions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../suggestions.service */ 67977);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 90310);














function SuggestionsPopupComponent_div_0_ng_container_10_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const suggestion_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](2, 4, "notification.suggestion", ctx_r1.getNotificationSuggestionInterpolation(suggestion_r3)), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 7, "notification.suggestion.please"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", ctx_r1.getNotificationSuggestionInterpolation(suggestion_r3).url);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 9, "notification.suggestion.review"), " ");
  }
}
function SuggestionsPopupComponent_div_0_ng_container_10_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SuggestionsPopupComponent_div_0_ng_container_10_ng_container_1_div_1_Template, 8, 11, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const suggestion_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", suggestion_r3.total > 0);
  }
}
function SuggestionsPopupComponent_div_0_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SuggestionsPopupComponent_div_0_ng_container_10_ng_container_1_Template, 2, 1, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const suggestions_r4 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", suggestions_r4);
  }
}
function SuggestionsPopupComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SuggestionsPopupComponent_div_0_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.removePopup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5)(6, "div", 6)(7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, SuggestionsPopupComponent_div_0_ng_container_10_Template, 2, 1, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](11, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](11, 1, ctx_r1.suggestionsRD$));
  }
}
/**
 * Show suggestions on a popover window, used on the homepage
 */
class SuggestionsPopupComponent {
  constructor(suggestionTargetsStateService, suggestionsService) {
    this.suggestionTargetsStateService = suggestionTargetsStateService;
    this.suggestionsService = suggestionsService;
    this.labelPrefix = 'notification.';
  }
  ngOnInit() {
    this.initializePopup();
  }
  initializePopup() {
    const notifier = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    this.subscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.combineLatest)([this.suggestionTargetsStateService.getCurrentUserSuggestionTargets().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.take)(2)), this.suggestionTargetsStateService.hasUserVisitedSuggestions()]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(notifier)).subscribe(([suggestions, visited]) => {
      this.suggestionTargetsStateService.dispatchRefreshUserSuggestionsAction();
      if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_1__.isNotEmpty)(suggestions)) {
        if (!visited) {
          this.suggestionsRD$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(suggestions);
          this.suggestionTargetsStateService.dispatchMarkUserSuggestionsAsVisitedAction();
          notifier.next(null);
          notifier.complete();
        }
      }
    });
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  /**
   * Interpolated params to build the notification suggestions notification.
   * @param suggestionTarget
   */
  getNotificationSuggestionInterpolation(suggestionTarget) {
    return this.suggestionsService.getNotificationSuggestionInterpolation(suggestionTarget);
  }
  /**
   * Hide popup from view
   */
  removePopup() {
    this.suggestionsRD$ = null;
  }
  static {
    this.ɵfac = function SuggestionsPopupComponent_Factory(t) {
      return new (t || SuggestionsPopupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_suggestion_targets_suggestion_targets_state_service__WEBPACK_IMPORTED_MODULE_2__.SuggestionTargetsStateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_suggestions_service__WEBPACK_IMPORTED_MODULE_3__.SuggestionsService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: SuggestionsPopupComponent,
      selectors: [["ds-suggestions-popup"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 3,
      consts: [["class", "notifications-wrapper position-fixed top right", 4, "ngIf"], [1, "notifications-wrapper", "position-fixed", "top", "right"], ["role", "alert", 1, "notification", "alert", "alert-success", "alert-dismissible", "m-3", "shadow"], ["type", "button", "data-dismiss", "alert", "aria-label", "Close", 1, "close", "pt-0", "pr-1", "pl-0", "pb-0", 3, "click"], ["aria-hidden", "true"], [1, "d-flex", "flex-row"], [1, "d-flex", "flex-column", "justify-content-center", "align-items-center"], [1, "notification-icon", "d-flex", "justify-content-center"], [1, "fas", "fa-2x", "fa-check-circle"], [1, "d-flex", "flex-column", "justify-content-center", "align-content-stretch", "text-left", "p-2"], [4, "ngIf"], ["class", "alert alert-info", 4, "ngFor", "ngForOf"], [1, "alert", "alert-info"], [3, "innerHTML"], [3, "routerLink"]],
      template: function SuggestionsPopupComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, SuggestionsPopupComponent_div_0_Template, 12, 3, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "async");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 1, ctx.suggestionsRD$));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1Z2dlc3Rpb25zLXBvcHVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBIiwiZmlsZSI6InN1Z2dlc3Rpb25zLXBvcHVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi8iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbm90aWZpY2F0aW9ucy9zdWdnZXN0aW9ucy1wb3B1cC9zdWdnZXN0aW9ucy1wb3B1cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBLDRrQkFBNGtCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBGT05UIEZBTUlMSUVTIEFORCBGT05UIFNJWkVTICoqKi9cbi8qKiogQk9PVFNUUkFQIE9QVElPTlMgKioqL1xuLyoqKiBTRU1BTlRJQyBDT0xPUiBTQ0hFTUUgKioqL1xuLyoqKiBPVEhFUiBCT09UU1RSQVAgVkFSSUFCTEVTICoqKi9cbi8qKiogQ1VTVE9NIERTUEFDRSBWQVJJQUJMRVMgKioqL1xuLyoqKiBNSVNDICoqKi8iXSwic291cmNlUm9vdCI6IiJ9 */"],
      data: {
        animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.trigger)('enterLeave', [_shared_animations_fromTop__WEBPACK_IMPORTED_MODULE_0__.fromTopEnter])]
      }
    });
  }
}

/***/ }),

/***/ 57850:
/*!*************************************************************************!*\
  !*** ./src/app/statistics/angulartics/dspace/view-tracker.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ViewTrackerComponent: () => (/* binding */ ViewTrackerComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 78374);
/* harmony import */ var _core_services_referrer_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services/referrer.service */ 88091);
/* harmony import */ var _core_shared_dspace_object_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/shared/dspace-object.model */ 76829);
/* harmony import */ var _shared_empty_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/empty.util */ 82777);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 90310);
/* harmony import */ var angulartics2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angulartics2 */ 74681);








/**
 * This component triggers a page view statistic
 */
class ViewTrackerComponent {
  constructor(angulartics2, referrerService) {
    this.angulartics2 = angulartics2;
    this.referrerService = referrerService;
  }
  ngOnInit() {
    this.sub = this.referrerService.getReferrer().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1)).subscribe(referrer => {
      this.angulartics2.eventTrack.next({
        action: 'page_view',
        properties: {
          object: this.object,
          referrer
        }
      });
    });
  }
  ngOnDestroy() {
    // unsubscribe in the case that this component is destroyed before
    // this.referrerService.getReferrer() has emitted
    if ((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_2__.hasValue)(this.sub)) {
      this.sub.unsubscribe();
    }
  }
  static {
    this.ɵfac = function ViewTrackerComponent_Factory(t) {
      return new (t || ViewTrackerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](angulartics2__WEBPACK_IMPORTED_MODULE_5__.Angulartics2), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_referrer_service__WEBPACK_IMPORTED_MODULE_0__.ReferrerService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: ViewTrackerComponent,
      selectors: [["ds-view-tracker"]],
      inputs: {
        object: "object"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
      decls: 1,
      vars: 0,
      template: function ViewTrackerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0, "\u00A0\n");
        }
      },
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXctdHJhY2tlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQTtBQUNBO0VBQ0UsYUFBQTtBQUNGIiwiZmlsZSI6InZpZXctdHJhY2tlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovXG46aG9zdCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc3RhdGlzdGljcy9hbmd1bGFydGljcy9kc3BhY2Uvdmlldy10cmFja2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBO0FBQ0E7RUFDRSxhQUFBO0FBQ0Y7QUFDQSxnb0JBQWdvQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovXG46aG9zdCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 56564:
/*!********************************************************************************************************!*\
  !*** ./src/themes/ lazy ^\.\/.*\/app\/home\-page\/home\-news\/home\-news\.component$ namespace object ***!
  \********************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./custom/app/home-page/home-news/home-news.component": [
		55325,
		"src_themes_custom_app_home-page_home-news_home-news_component_ts"
	],
	"./dspace/app/home-page/home-news/home-news.component": [
		31264,
		"src_themes_dspace_app_home-page_home-news_home-news_component_ts"
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
webpackAsyncContext.id = 56564;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 78010:
/*!********************************************************************************************!*\
  !*** ./src/themes/ lazy ^\.\/.*\/app\/home\-page\/home\-page\.component$ namespace object ***!
  \********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./custom/app/home-page/home-page.component": [
		90279,
		"src_themes_custom_app_home-page_home-page_component_ts"
	],
	"./dspace/app/home-page/home-page.component": [
		14994,
		"default-src_themes_dspace_app_home-page_top-level-community-list_top-level-community-list_com-56ce2a",
		"default-src_themes_dspace_app_shared_search-form_search-form_component_ts",
		"src_themes_dspace_app_home-page_home-page_component_ts"
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
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 78010;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 30068:
/*!******************************************************************************************************************************************!*\
  !*** ./src/themes/ lazy ^\.\/.*\/app\/home\-page\/top\-level\-community\-list\/top\-level\-community\-list\.component$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./custom/app/home-page/top-level-community-list/top-level-community-list.component": [
		41565,
		"src_themes_custom_app_home-page_top-level-community-list_top-level-community-list_component_ts"
	],
	"./dspace/app/home-page/top-level-community-list/top-level-community-list.component": [
		49076,
		"default-src_themes_dspace_app_home-page_top-level-community-list_top-level-community-list_com-56ce2a"
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
webpackAsyncContext.id = 30068;
module.exports = webpackAsyncContext;

/***/ })

}]);
//# sourceMappingURL=src_app_home-page_home-page-routes_ts.js.map