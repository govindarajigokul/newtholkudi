"use strict";
(self["webpackChunkdspace_angular"] = self["webpackChunkdspace_angular"] || []).push([["src_themes_custom_app_my-dspace-page_my-dspace-page_component_ts"],{

/***/ 24487:
/*!**************************************************************************!*\
  !*** ./src/themes/custom/app/my-dspace-page/my-dspace-page.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MyDSpacePageComponent: () => (/* binding */ MyDSpacePageComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 61142);
/* harmony import */ var _app_my_dspace_page_my_dspace_configuration_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../app/my-dspace-page/my-dspace-configuration.service */ 787);
/* harmony import */ var _app_my_dspace_page_my_dspace_new_submission_my_dspace_new_submission_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../app/my-dspace-page/my-dspace-new-submission/my-dspace-new-submission.component */ 59516);
/* harmony import */ var _app_my_dspace_page_my_dspace_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app/my-dspace-page/my-dspace-page.component */ 48752);
/* harmony import */ var _app_my_dspace_page_my_dspace_qa_events_notifications_my_dspace_qa_events_notifications_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../app/my-dspace-page/my-dspace-qa-events-notifications/my-dspace-qa-events-notifications.component */ 85592);
/* harmony import */ var _app_notifications_suggestions_notification_suggestions_notification_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../app/notifications/suggestions-notification/suggestions-notification.component */ 85343);
/* harmony import */ var _app_shared_animations_push__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../app/shared/animations/push */ 10214);
/* harmony import */ var _app_shared_roles_role_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../app/shared/roles/role.directive */ 41477);
/* harmony import */ var _app_shared_search_themed_search_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../app/shared/search/themed-search.component */ 54992);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 90310);










const _c0 = a0 => [a0];
function MyDSpacePageComponent_ds_my_dspace_new_submission_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "ds-my-dspace-new-submission");
  }
}
function MyDSpacePageComponent_ds_search_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "ds-search", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "async");
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("configuration", ctx_r0.configuration)("configurationList", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 4, ctx_r0.configurationList$))("context", ctx_r0.context)("viewModeList", ctx_r0.viewModeList);
  }
}
/**
 * This component represents the whole mydspace page
 */
class MyDSpacePageComponent extends _app_my_dspace_page_my_dspace_page_component__WEBPACK_IMPORTED_MODULE_2__.MyDSpacePageComponent {
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵMyDSpacePageComponent_BaseFactory;
      return function MyDSpacePageComponent_Factory(t) {
        return (ɵMyDSpacePageComponent_BaseFactory || (ɵMyDSpacePageComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetInheritedFactory"](MyDSpacePageComponent)))(t || MyDSpacePageComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
      type: MyDSpacePageComponent,
      selectors: [["ds-themed-my-dspace-page"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵProvidersFeature"]([{
        provide: _app_my_dspace_page_my_dspace_configuration_service__WEBPACK_IMPORTED_MODULE_0__.SEARCH_CONFIG_SERVICE,
        useClass: _app_my_dspace_page_my_dspace_configuration_service__WEBPACK_IMPORTED_MODULE_0__.MyDSpaceConfigurationService
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵStandaloneFeature"]],
      decls: 5,
      vars: 4,
      consts: [[1, "container"], [4, "dsShowOnlyForRole"], [3, "configuration", "configurationList", "context", "viewModeList", 4, "ngIf"], [3, "configuration", "configurationList", "context", "viewModeList"]],
      template: function MyDSpacePageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "ds-suggestions-notification")(2, "ds-my-dspace-qa-events-notifications");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, MyDSpacePageComponent_ds_my_dspace_new_submission_3_Template, 1, 0, "ds-my-dspace-new-submission", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, MyDSpacePageComponent_ds_search_4_Template, 2, 6, "ds-search", 2);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("dsShowOnlyForRole", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](2, _c0, ctx.roleTypeEnum.Submitter));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.configuration && ctx.context);
        }
      },
      dependencies: [_app_shared_search_themed_search_component__WEBPACK_IMPORTED_MODULE_7__.ThemedSearchComponent, _app_my_dspace_page_my_dspace_new_submission_my_dspace_new_submission_component__WEBPACK_IMPORTED_MODULE_1__.MyDSpaceNewSubmissionComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe, _app_shared_roles_role_directive__WEBPACK_IMPORTED_MODULE_6__.RoleDirective, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _app_notifications_suggestions_notification_suggestions_notification_component__WEBPACK_IMPORTED_MODULE_4__.SuggestionsNotificationComponent, _app_my_dspace_page_my_dspace_qa_events_notifications_my_dspace_qa_events_notifications_component__WEBPACK_IMPORTED_MODULE_3__.MyDspaceQaEventsNotificationsComponent],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n@media (max-width: 991.98px) {\n  .container[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: none;\n  }\n}\n  .search-controls {\n  margin-bottom: var(--bs-spacer);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LWRzcGFjZS1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0EsMEJBQUE7QUFDQSw4QkFBQTtBQUNBLGtDQUFBO0FBQ0EsZ0NBQUE7QUFDQSxhQUFBO0FBQ0E7RUFDRTtJQUNFLFdBQUE7SUFDQSxlQUFBO0VBQ0Y7QUFDRjtBQUNBO0VBQ0UsK0JBQUE7QUFDRiIsImZpbGUiOiJteS1kc3BhY2UtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogRk9OVCBGQU1JTElFUyBBTkQgRk9OVCBTSVpFUyAqKiovXG4vKioqIEJPT1RTVFJBUCBPUFRJT05TICoqKi9cbi8qKiogU0VNQU5USUMgQ09MT1IgU0NIRU1FICoqKi9cbi8qKiogT1RIRVIgQk9PVFNUUkFQIFZBUklBQkxFUyAqKiovXG4vKioqIENVU1RPTSBEU1BBQ0UgVkFSSUFCTEVTICoqKi9cbi8qKiogTUlTQyAqKiovXG5AbWVkaWEgKG1heC13aWR0aDogOTkxLjk4cHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiBub25lO1xuICB9XG59XG46Om5nLWRlZXAgLnNlYXJjaC1jb250cm9scyB7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLWJzLXNwYWNlcik7XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbXktZHNwYWNlLXBhZ2UvbXktZHNwYWNlLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0Esa0NBQUE7QUFDQSxnQ0FBQTtBQUNBLGFBQUE7QUFDQTtFQUNFO0lBQ0UsV0FBQTtJQUNBLGVBQUE7RUFDRjtBQUNGO0FBQ0E7RUFDRSwrQkFBQTtBQUNGO0FBQ0EsZzNCQUFnM0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIEZPTlQgRkFNSUxJRVMgQU5EIEZPTlQgU0laRVMgKioqL1xuLyoqKiBCT09UU1RSQVAgT1BUSU9OUyAqKiovXG4vKioqIFNFTUFOVElDIENPTE9SIFNDSEVNRSAqKiovXG4vKioqIE9USEVSIEJPT1RTVFJBUCBWQVJJQUJMRVMgKioqL1xuLyoqKiBDVVNUT00gRFNQQUNFIFZBUklBQkxFUyAqKiovXG4vKioqIE1JU0MgKioqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogbm9uZTtcbiAgfVxufVxuOjpuZy1kZWVwIC5zZWFyY2gtY29udHJvbHMge1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1icy1zcGFjZXIpO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"],
      data: {
        animation: [_app_shared_animations_push__WEBPACK_IMPORTED_MODULE_5__.pushInOut]
      },
      changeDetection: 0
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_themes_custom_app_my-dspace-page_my-dspace-page_component_ts.js.map