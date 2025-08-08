"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_app_admin_admin-notifications_admin-notifications-routes_ts"],{

/***/ 91495:
/*!**********************************************************************************************************************************************!*\
  !*** ./src/app/admin/admin-notifications/admin-notifications-publication-claim-page/admin-notifications-publication-claim-page.component.ts ***!
  \**********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminNotificationsPublicationClaimPageComponent: () => (/* binding */ AdminNotificationsPublicationClaimPageComponent)
/* harmony export */ });
/* harmony import */ var _notifications_suggestion_targets_publication_claim_publication_claim_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../notifications/suggestion-targets/publication-claim/publication-claim.component */ 29751);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 90310);


class AdminNotificationsPublicationClaimPageComponent {
  static {
    this.ɵfac = function AdminNotificationsPublicationClaimPageComponent_Factory(t) {
      return new (t || AdminNotificationsPublicationClaimPageComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AdminNotificationsPublicationClaimPageComponent,
      selectors: [["ds-admin-notifications-publication-claim-page"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 1,
      vars: 1,
      consts: [[3, "source"]],
      template: function AdminNotificationsPublicationClaimPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ds-publication-claim", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("source", "openaire");
        }
      },
      dependencies: [_notifications_suggestion_targets_publication_claim_publication_claim_component__WEBPACK_IMPORTED_MODULE_0__.PublicationClaimComponent],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLW5vdGlmaWNhdGlvbnMtcHVibGljYXRpb24tY2xhaW0tcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUNBLDBCQUFBO0FBQ0EsOEJBQUE7QUFDQSxrQ0FBQTtBQUNBLGdDQUFBO0FBQ0EsYUFBQSIsImZpbGUiOiJhZG1pbi1ub3RpZmljYXRpb25zLXB1YmxpY2F0aW9uLWNsYWltLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqLyJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWRtaW4vYWRtaW4tbm90aWZpY2F0aW9ucy9hZG1pbi1ub3RpZmljYXRpb25zLXB1YmxpY2F0aW9uLWNsYWltLXBhZ2UvYWRtaW4tbm90aWZpY2F0aW9ucy1wdWJsaWNhdGlvbi1jbGFpbS1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBO0FBQ0EsZ3BCQUFncEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqLyJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 32476:
/*!*************************************************************************!*\
  !*** ./src/app/admin/admin-notifications/admin-notifications-routes.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ROUTES: () => (/* binding */ ROUTES)
/* harmony export */ });
/* harmony import */ var _core_auth_authenticated_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/auth/authenticated.guard */ 49347);
/* harmony import */ var _core_breadcrumbs_i18n_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/breadcrumbs/i18n-breadcrumb.resolver */ 72059);
/* harmony import */ var _core_breadcrumbs_quality_assurance_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/breadcrumbs/quality-assurance-breadcrumb.resolver */ 99998);
/* harmony import */ var _quality_assurance_notifications_pages_notifications_suggestion_targets_page_notifications_suggestion_targets_page_resolver_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../quality-assurance-notifications-pages/notifications-suggestion-targets-page/notifications-suggestion-targets-page-resolver.service */ 1647);
/* harmony import */ var _quality_assurance_notifications_pages_quality_assurance_events_page_quality_assurance_events_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../quality-assurance-notifications-pages/quality-assurance-events-page/quality-assurance-events-page.component */ 93362);
/* harmony import */ var _quality_assurance_notifications_pages_quality_assurance_events_page_quality_assurance_events_page_resolver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../quality-assurance-notifications-pages/quality-assurance-events-page/quality-assurance-events-page.resolver */ 83527);
/* harmony import */ var _quality_assurance_notifications_pages_quality_assurance_source_page_component_quality_assurance_source_data_resolver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../quality-assurance-notifications-pages/quality-assurance-source-page-component/quality-assurance-source-data.resolver */ 93084);
/* harmony import */ var _quality_assurance_notifications_pages_quality_assurance_source_page_component_quality_assurance_source_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../quality-assurance-notifications-pages/quality-assurance-source-page-component/quality-assurance-source-page.component */ 50884);
/* harmony import */ var _quality_assurance_notifications_pages_quality_assurance_source_page_component_quality_assurance_source_page_resolver_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../quality-assurance-notifications-pages/quality-assurance-source-page-component/quality-assurance-source-page-resolver.service */ 89473);
/* harmony import */ var _quality_assurance_notifications_pages_quality_assurance_topics_page_quality_assurance_topics_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../quality-assurance-notifications-pages/quality-assurance-topics-page/quality-assurance-topics-page.component */ 41466);
/* harmony import */ var _quality_assurance_notifications_pages_quality_assurance_topics_page_quality_assurance_topics_page_resolver_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../quality-assurance-notifications-pages/quality-assurance-topics-page/quality-assurance-topics-page-resolver.service */ 87499);
/* harmony import */ var _admin_notifications_publication_claim_page_admin_notifications_publication_claim_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admin-notifications-publication-claim-page/admin-notifications-publication-claim-page.component */ 91495);
/* harmony import */ var _admin_notifications_routing_paths__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./admin-notifications-routing-paths */ 13275);













const ROUTES = [{
  canActivate: [_core_auth_authenticated_guard__WEBPACK_IMPORTED_MODULE_0__.authenticatedGuard],
  path: `${_admin_notifications_routing_paths__WEBPACK_IMPORTED_MODULE_12__.PUBLICATION_CLAIMS_PATH}`,
  component: _admin_notifications_publication_claim_page_admin_notifications_publication_claim_page_component__WEBPACK_IMPORTED_MODULE_11__.AdminNotificationsPublicationClaimPageComponent,
  pathMatch: 'full',
  resolve: {
    breadcrumb: _core_breadcrumbs_i18n_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_1__.i18nBreadcrumbResolver,
    suggestionTargetParams: _quality_assurance_notifications_pages_notifications_suggestion_targets_page_notifications_suggestion_targets_page_resolver_service__WEBPACK_IMPORTED_MODULE_3__.AdminNotificationsPublicationClaimPageResolver
  },
  data: {
    title: 'admin.notifications.publicationclaim.page.title',
    breadcrumbKey: 'admin.notifications.publicationclaim',
    showBreadcrumbsFluid: false
  }
}, {
  canActivate: [_core_auth_authenticated_guard__WEBPACK_IMPORTED_MODULE_0__.authenticatedGuard],
  path: `${_admin_notifications_routing_paths__WEBPACK_IMPORTED_MODULE_12__.QUALITY_ASSURANCE_EDIT_PATH}/:sourceId`,
  component: _quality_assurance_notifications_pages_quality_assurance_topics_page_quality_assurance_topics_page_component__WEBPACK_IMPORTED_MODULE_9__.QualityAssuranceTopicsPageComponent,
  pathMatch: 'full',
  resolve: {
    breadcrumb: _core_breadcrumbs_quality_assurance_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_2__.qualityAssuranceBreadcrumbResolver,
    openaireQualityAssuranceTopicsParams: _quality_assurance_notifications_pages_quality_assurance_topics_page_quality_assurance_topics_page_resolver_service__WEBPACK_IMPORTED_MODULE_10__.QualityAssuranceTopicsPageResolver
  },
  data: {
    title: 'admin.quality-assurance.page.title',
    breadcrumbKey: 'admin.quality-assurance',
    showBreadcrumbsFluid: false
  }
}, {
  canActivate: [_core_auth_authenticated_guard__WEBPACK_IMPORTED_MODULE_0__.authenticatedGuard],
  path: `${_admin_notifications_routing_paths__WEBPACK_IMPORTED_MODULE_12__.QUALITY_ASSURANCE_EDIT_PATH}/:sourceId/target/:targetId`,
  component: _quality_assurance_notifications_pages_quality_assurance_topics_page_quality_assurance_topics_page_component__WEBPACK_IMPORTED_MODULE_9__.QualityAssuranceTopicsPageComponent,
  pathMatch: 'full',
  resolve: {
    breadcrumb: _core_breadcrumbs_i18n_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_1__.i18nBreadcrumbResolver,
    openaireQualityAssuranceTopicsParams: _quality_assurance_notifications_pages_quality_assurance_topics_page_quality_assurance_topics_page_resolver_service__WEBPACK_IMPORTED_MODULE_10__.QualityAssuranceTopicsPageResolver
  },
  data: {
    title: 'admin.quality-assurance.page.title',
    breadcrumbKey: 'admin.quality-assurance',
    showBreadcrumbsFluid: false
  }
}, {
  canActivate: [_core_auth_authenticated_guard__WEBPACK_IMPORTED_MODULE_0__.authenticatedGuard],
  path: `${_admin_notifications_routing_paths__WEBPACK_IMPORTED_MODULE_12__.QUALITY_ASSURANCE_EDIT_PATH}`,
  component: _quality_assurance_notifications_pages_quality_assurance_source_page_component_quality_assurance_source_page_component__WEBPACK_IMPORTED_MODULE_7__.QualityAssuranceSourcePageComponent,
  pathMatch: 'full',
  resolve: {
    breadcrumb: _core_breadcrumbs_i18n_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_1__.i18nBreadcrumbResolver,
    openaireQualityAssuranceSourceParams: _quality_assurance_notifications_pages_quality_assurance_source_page_component_quality_assurance_source_page_resolver_service__WEBPACK_IMPORTED_MODULE_8__.QualityAssuranceSourcePageResolver,
    sourceData: _quality_assurance_notifications_pages_quality_assurance_source_page_component_quality_assurance_source_data_resolver__WEBPACK_IMPORTED_MODULE_6__.qualityAssuranceSourceDataResolver
  },
  data: {
    title: 'admin.notifications.source.breadcrumbs',
    breadcrumbKey: 'admin.notifications.source',
    showBreadcrumbsFluid: false
  }
}, {
  canActivate: [_core_auth_authenticated_guard__WEBPACK_IMPORTED_MODULE_0__.authenticatedGuard],
  path: `${_admin_notifications_routing_paths__WEBPACK_IMPORTED_MODULE_12__.QUALITY_ASSURANCE_EDIT_PATH}/:sourceId/:topicId`,
  component: _quality_assurance_notifications_pages_quality_assurance_events_page_quality_assurance_events_page_component__WEBPACK_IMPORTED_MODULE_4__.QualityAssuranceEventsPageComponent,
  pathMatch: 'full',
  resolve: {
    breadcrumb: _core_breadcrumbs_quality_assurance_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_2__.qualityAssuranceBreadcrumbResolver,
    openaireQualityAssuranceEventsParams: _quality_assurance_notifications_pages_quality_assurance_events_page_quality_assurance_events_page_resolver__WEBPACK_IMPORTED_MODULE_5__.qualityAssuranceEventsPageResolver
  },
  data: {
    title: 'admin.notifications.event.page.title',
    breadcrumbKey: 'admin.notifications.event',
    showBreadcrumbsFluid: false
  }
}];

/***/ })

}]);
//# sourceMappingURL=src_app_admin_admin-notifications_admin-notifications-routes_ts.js.map